'use strict';

var storeTable = document.getElementById('table');
var clearTable = document.getElementById('clear_table');
var storeForm = document.getElementById('form');
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
var stores = [];

function CookieStand(name, minHourlyCustomers, maxHourlyCustomers, avgCookiesPerCustomer) {
  this.name = name;
  this.minHourlyCustomers = minHourlyCustomers;
  this.maxHourlyCustomers = maxHourlyCustomers;
  this.avgCookiesPerCustomer = avgCookiesPerCustomer;
  this.totalCustomers = 0;
  this.totalCookies = 0;
  this.customersByHour = [];
  this.cookiesByHour = [];
  stores.push(this);
}

CookieStand.prototype.generateCustomers = function() {
  for(var i = 0; i < hours.length; i++) {
    var oneHourCustomers = Math.floor(Math.random() * (this.maxHourlyCustomers - this.minHourlyCustomers + 1)) + this.minHourlyCustomers;

    this.customersByHour.push(oneHourCustomers);
    this.totalCustomers += this.customersByHour[i];
  }
};

CookieStand.prototype.generateCookies = function() {
  this.generateCustomers();

  for(var i = 0; i < hours.length; i++) {
    var min = this.minHourlyCustomers;
    var max = this.maxHourlyCustomers * this.avgCookiesPerCustomer;
    var randomCookies = Math.floor(Math.random() * (max - min + 1)) + min;

    //Appends random number of cookies for each hour to cookiesByHour array
    this.cookiesByHour.push(randomCookies);
    this.totalCookies += randomCookies;
  }
};

CookieStand.prototype.render = function() {
  this.generateCookies();
  var tdEl = document.createElement('td');
  var trEl = document.createElement('tr');

  //Adds store names before adding hourly cookie sales
  tdEl.textContent = this.name;
  tdEl.style.textAlign = 'left';
  tdEl.style.fontWeight = 'bold';
  trEl.appendChild(tdEl);

  //Adds array elements containing cookies sold by the hour
  for(var i = 0; i < hours.length; i++) {
    tdEl = document.createElement('td');
    tdEl.textContent = this.cookiesByHour[i];
    trEl.appendChild(tdEl);
  }

  //Adds total cookies sold @ each location (for that day)
  var thEl = document.createElement('th');
  thEl.textContent = this.totalCookies;
  thEl.style.backgroundColor = '#414141';
  thEl.style.color = '#ffffff';
  trEl.appendChild(thEl);

  storeTable.appendChild(trEl);
};

function makeHeaderRow() {
  var trEl = document.createElement('tr');
  var thEl = document.createElement('th');
  trEl.appendChild(thEl);

  //Creates header row with all the opening hours
  for(var i = 0; i < hours.length; i++) {
    thEl = document.createElement('th');
    thEl.textContent = hours[i];
    trEl.appendChild(thEl);
  }
  thEl = document.createElement('th');
  thEl.textContent = 'Total';
  thEl.style.backgroundColor = '#414141';
  thEl.style.color = '#ffffff';
  trEl.appendChild(thEl);

  storeTable.appendChild(trEl);
}

function makeStoreRows() {
  //Calls the render method for each store
  for(var i = 0; i < stores.length; i++) {
    stores[i].render();
  }
}

function makeTotalRow() {
  var totalCookiesRequired = 0;

  var trEl = document.createElement('tr');
  var thEl = document.createElement('th');
  thEl.textContent = 'Total';
  thEl.style.backgroundColor = '#414141';
  thEl.style.color = '#ffffff';
  trEl.appendChild(thEl);

  for(var i = 0; i < hours.length; i++) {
    var tempTotal = 0;
    for(var j = 0; j < stores.length; j++) {
      tempTotal += stores[j].cookiesByHour[i];
    }
    thEl = document.createElement('th');
    thEl.textContent = tempTotal;
    thEl.style.backgroundColor = '#414141';
    thEl.style.color = '#ffffff';
    trEl.appendChild(thEl);

    //Adds all cookies sold for each store/hour totalCookiesRequired
    totalCookiesRequired += tempTotal;
  }
  thEl = document.createElement('th');
  thEl.textContent = totalCookiesRequired;
  thEl.style.backgroundColor = '#414141';
  thEl.style.color = '#ffffff';
  trEl.appendChild(thEl);

  storeTable.appendChild(trEl);
}
new CookieStand('Pike Place', 23, 65, 6.3);
new CookieStand('Alki', 2, 16, 4.6);
new CookieStand('SeaTac Airport', 3, 24, 1.2);
new CookieStand('Seattle Center', 11, 38, 3.7);
new CookieStand('Capitol Hill', 20, 38, 2.3);
makeHeaderRow();
makeStoreRows();
makeTotalRow();

function handleSubmit(event) {
  //Keeps page from reloading on submit
  event.preventDefault(); 
  var inputName = event.target.name.value;
  var inputMin = event.target.min_customers.value;
  var inputMax = event.target.max_customers.value;
  var inputAvg = event.target.avg_cookies.value;

  //Validating text fields so they're not empty 
  if(!inputMin || !inputMax || !inputAvg) {
    alert('Text fields cannot be empty!');
  }  else {
    storeTable.innerHTML = '';
    new CookieStand(inputName, Number(inputMin), Number(inputMax), Number(inputAvg));
    makeHeaderRow();
    makeStoreRows();
    makeTotalRow();
  }
  //Empties the text fields
  event.target.name.value = null;
  event.target.min_customers.value = null;
  event.target.max_customers.value = null;
  event.target.avg_cookies.value = null;
}

storeForm.addEventListener('submit', handleSubmit);

clearTable.addEventListener('click', function() {
  if(stores.length > 5) {
    //Stores how many more stores were added onto of the original five
    var extraElements = stores.length - 5;
    stores.splice(5, extraElements);

    storeTable.innerHTML = '';
    makeHeaderRow();
    makeStoreRows();
    makeTotalRow();
  }
});
 
//Current problem = When adding new store, all elements in cookie array are set to maxHourlyCustomers
