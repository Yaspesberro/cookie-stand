'use strict';

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
var stores = [];
var storeTable = document.getElementById('table');

function CookieStand(name, location, minHourlyCustomers, maxHourlyCustomers, avgCookiesPerCustomer) {
  this.name = name;
  this.location = location;
  this.maxHourlyCustomers = maxHourlyCustomers;
  this.minHourlyCustomers = minHourlyCustomers;
  this.avgCookiesPerCustomer = avgCookiesPerCustomer;
  this.totalCustomers = 0;
  this.totalCookies = 0;
  this.customersByHour = [];
  this.cookiesByHour = [];
  stores.push(this);
}

CookieStand.prototype.generateCustomers = function() {
  for(var i = 0; i < hours.length; i++) {
    var oneHourCustomers = Math.floor(Math.random() * (this.maxCustomersPerHour - this.minCustomersPerHour + 1)) + this.minCustomersPerHour;

    this.customersByHour.push(oneHourCustomers);
    this.totalCustomers += this.customersByHour[i];
  }
};

CookieStand.prototype.generateCookies = function() {
  this.generateCustomers();

  for(var i = 0; i < hours.length; i++) {
    var min = this.maxHourlyCustomers;
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

  //Adding store names before adding hourly cookie sales
  tdEl.textContent = this.name;
  tdEl.style.textAlign = 'left';
  tdEl.style.fontWeight = 'bold';
  trEl.appendChild(tdEl);

  for(var i = 0; i < hours.length; i++) {
    tdEl = document.createElement('td');
    tdEl.textContent = this.cookiesByHour[i];
    trEl.appendChild(tdEl);
  }
  //Adding total cookies required for each location (for that day)
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
new CookieStand('Pike Place', '1st and Pike', 23, 65, 6.3);
new CookieStand('Alki', 'West Seattle', 2, 16, 4.6);
new CookieStand('SeaTac Airport', 'South Seattle', 3, 24, 1.2);
new CookieStand('Seattle Center', 'Downtown Seattle', 11, 38, 3.7);
new CookieStand('Capitol Hill', 'Downtown Seattle', 20, 38, 2.3);
makeHeaderRow();
makeStoreRows();
makeTotalRow();

