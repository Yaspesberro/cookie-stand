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

    this.cookiesByHour.push(randomCookies);
    this.totalCookies += randomCookies;
  }
};

CookieStand.prototype.render = function() {
  this.generateCookies();
  var tdEl = document.createElement('td'); 
  var trEl = document.createElement('tr');
  //Add store name before cookie numbers
  tdEl.textContent = this.name;
  trEl.appendChild(tdEl);

  for(var i = 0; i < hours.length; i++) {
    tdEl = document.createElement('td');
    tdEl.textContent = this.cookiesByHour[i];
    trEl.appendChild(tdEl);
  }
  storeTable.appendChild(trEl);
}

function makeHeaderRow() {
  var trEl = document.createElement('tr');
  var thEl = document.createElement('th');
  trEl.appendChild(thEl);

  for(var i = 0; i < hours.length; i++) {
    thEl = document.createElement('th');
    thEl.textContent = hours[i];
    trEl.appendChild(thEl);
  }
  storeTable.appendChild(trEl);
}

function makeStoreRows() {
  for(var i = 0; i < stores.length; i++) {
    stores[i].render();
  }
}

function makeTotalRow() {
  var trEl = document.createElement('tr');
  var thEl = document.createElement('th');
  thEl.textContent = 'Total';
  trEl.appendChild(thEl);

  for(var i = 0; i < hours.length; i++) {
    var tempTotal = 0;
    for(var j = 0; j < stores.length; j++) {
      tempTotal += stores[j].cookiesByHour[i];
    }

    thEl = document.createElement('th');
    thEl.textContent = tempTotal;
    trEl.appendChild(thEl);
  }
  storeTable.appendChild(trEl);
}

var pike = new CookieStand('Pike Place', '1st and Pike', 0, 100, 2);
var alki = new CookieStand('Alki', 'West Seattle', 5, 30, 2.5);
var seaTac = new CookieStand('SeaTac Airport', 'South Seattle', 5, 150, 4.5);
var seaCenter = new CookieStand('Seattle Center', 'Downtown Seattle', 10, 90, 1.5);
var capitol = new CookieStand('Capitol Hill', 'Downtown Seattle', 2, 120, 3);
//console.table(stores);
makeHeaderRow();
makeStoreRows();
makeTotalRow();
