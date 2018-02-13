'use strict';

var pike = {
  name: 'Pike Place Market',
  location: 'Downtown Seattle',
  totalCustomers: 0,
  totalCookies: 0,
  maxHourlyCustomers: 0,
  minHourlyCustomers: 0,
  customersByHour: [],
  cookiesByHour: [],

  generateCustomers: function() {
    for(var i = 0; i < 14; i++) {
      //Create random number of customers for one hour
      var random = Math.floor(Math.random() * 101);
      this.customersByHour[i] = random;

      if(this.minHourlyCustomers === 0 && this.maxHourlyCustomers === 0) {
        this.minHourlyCustomers = this.customersByHour[i];
        this.maxHourlyCustomers = this.customersByHour[i];
      } else if(this.customersByHour[i] > this.maxHourlyCustomers) {
        this.maxHourlyCustomers = this.customersByHour[i];
      } else if (this.customersByHour[i] < this.minHourlyCustomers) {
        this.minHourlyCustomers = this.customersByHour[i];
      }
      this.totalCustomers += this.customersByHour[i];
    }
  },

  generateCookies: function() {
    for(var i = 0; i < 14; i++) {
      //generates an average of 1.5 cookies per customer
      var min = this.customersByHour[i];
      var max = 2 * min;
      var random = Math.floor(Math.random() * (max - min + 1)) + min;

      this.cookiesByHour[i] = random;
      this.totalCookies += random;
    }
  },

  render: function() {
    var olEl = document.getElementById('pike-ol');
    var ulEl = document.getElementById('pike-ul');
    for(var i = 0; i < 14; i++) {
      //Create list element
      var liEl = document.createElement('li');
      liEl.textContent = 'Customers: ' + this.customersByHour[i] + ', sales: ' + this.cookiesByHour[i];
      olEl.appendChild(liEl);
    }
  
    var cookiesAvg = (this.totalCookies / this.totalCustomers).toFixed(2);
    var liAverage = document.createElement('li');
    liAverage.textContent = 'Average cookies purchased per customer: ' + cookiesAvg;
    ulEl.appendChild(liAverage);

    var liMin = document.createElement('li');
    liMin.textContent = 'Least customers in an hour: ' + this.minHourlyCustomers;
    ulEl.appendChild(liMin);
    var liMax = document.createElement('li');
    liMax.textContent = 'Most customers in an hour: ' + this.maxHourlyCustomers;
    ulEl.appendChild(liMax);
  }
}
pike.generateCustomers();
pike.generateCookies();
pike.render();

var alki = {
  name: 'Alki',
  location: 'West Seattle',
  totalCustomers: 0,
  totalCookies: 0,
  maxHourlyCustomers: 0,
  minHourlyCustomers: 0,
  customersByHour: [],
  cookiesByHour: [],

  generateCustomers: function() {
    for(var i = 0; i < 14; i++) {
      //Create random number of customers for one hour
      var random = Math.floor(Math.random() * 101);
      this.customersByHour[i] = random;

      if(this.minHourlyCustomers === 0 && this.maxHourlyCustomers === 0) {
        this.minHourlyCustomers = this.customersByHour[i];
        this.maxHourlyCustomers = this.customersByHour[i];
      } else if(this.customersByHour[i] > this.maxHourlyCustomers) {
        this.maxHourlyCustomers = this.customersByHour[i];
      } else if (this.customersByHour[i] < this.minHourlyCustomers) {
        this.minHourlyCustomers = this.customersByHour[i];
      }
      this.totalCustomers += this.customersByHour[i];
    }
  },

  generateCookies: function() {
    for(var i = 0; i < 14; i++) {
      //generates an average of 1.5 cookies per customer
      var min = this.customersByHour[i];
      var max = 2 * min;
      var random = Math.floor(Math.random() * (max - min + 1)) + min;

      this.cookiesByHour[i] = random;
      this.totalCookies += random;
    }
  },

  render: function() {
    var olEl = document.getElementById('alki-ol');
    var ulEl = document.getElementById('alki-ul');
    for(var i = 0; i < 14; i++) {
      //Create list element
      var liEl = document.createElement('li');
      liEl.textContent = 'Customers: ' + this.customersByHour[i] + ', sales: ' + this.cookiesByHour[i];
      olEl.appendChild(liEl);
    }
  
    var cookiesAvg = (this.totalCookies / this.totalCustomers).toFixed(2);
    var liAverage = document.createElement('li');
    liAverage.textContent = 'Average cookies purchased per customer: ' + cookiesAvg;
    ulEl.appendChild(liAverage);

    var liMin = document.createElement('li');
    liMin.textContent = 'Least customers in an hour: ' + this.minHourlyCustomers;
    ulEl.appendChild(liMin);
    var liMax = document.createElement('li');
    liMax.textContent = 'Most customers in an hour: ' + this.maxHourlyCustomers;
    ulEl.appendChild(liMax);
  }
}
alki.generateCustomers();
alki.generateCookies();
alki.render();

var seaTac = {
  name: 'SeaTac Airport',
  location: 'South Seattle',
  totalCustomers: 0,
  totalCookies: 0,
  maxHourlyCustomers: 0,
  minHourlyCustomers: 0,
  customersByHour: [],
  cookiesByHour: [],

  generateCustomers: function() {
    for(var i = 0; i < 14; i++) {
      //Create random number of customers for one hour
      var random = Math.floor(Math.random() * 101);
      this.customersByHour[i] = random;

      if(this.minHourlyCustomers === 0 && this.maxHourlyCustomers === 0) {
        this.minHourlyCustomers = this.customersByHour[i];
        this.maxHourlyCustomers = this.customersByHour[i];
      } else if(this.customersByHour[i] > this.maxHourlyCustomers) {
        this.maxHourlyCustomers = this.customersByHour[i];
      } else if (this.customersByHour[i] < this.minHourlyCustomers) {
        this.minHourlyCustomers = this.customersByHour[i];
      }
      this.totalCustomers += this.customersByHour[i];
    }
  },

  generateCookies: function() {
    for(var i = 0; i < 14; i++) {
      //generates an average of 1.5 cookies per customer
      var min = this.customersByHour[i];
      var max = 2 * min;
      var random = Math.floor(Math.random() * (max - min + 1)) + min;

      this.cookiesByHour[i] = random;
      this.totalCookies += random;
    }
  },

  render: function() {
    var olEl = document.getElementById('seaTac-ol');
    var ulEl = document.getElementById('seaTac-ul');
    for(var i = 0; i < 14; i++) {
      //Create list element
      var liEl = document.createElement('li');
      liEl.textContent = 'Customers: ' + this.customersByHour[i] + ', sales: ' + this.cookiesByHour[i];
      olEl.appendChild(liEl);
    }
    
    var cookiesAvg = (this.totalCookies / this.totalCustomers).toFixed(2);
    var liAverage = document.createElement('li');
    liAverage.textContent = 'Average cookies purchased per customer: ' + cookiesAvg;
    ulEl.appendChild(liAverage);

    var liMin = document.createElement('li');
    liMin.textContent = 'Least customers in an hour: ' + this.minHourlyCustomers;
    ulEl.appendChild(liMin);
    var liMax = document.createElement('li');
    liMax.textContent = 'Most customers in an hour: ' + this.maxHourlyCustomers;
    ulEl.appendChild(liMax);
  }
}
seaTac.generateCustomers();
seaTac.generateCookies();
seaTac.render();

var seaCenter = {
  name: 'Seattle Center',
  location: 'Downtown Seattle',
  totalCustomers: 0,
  totalCookies: 0,
  maxHourlyCustomers: 0,
  minHourlyCustomers: 0,
  customersByHour: [],
  cookiesByHour: [],

  generateCustomers: function() {
    for(var i = 0; i < 14; i++) {
      //Create random number of customers for one hour
      var random = Math.floor(Math.random() * 101);
      this.customersByHour[i] = random;

      if(this.minHourlyCustomers === 0 && this.maxHourlyCustomers === 0) {
        this.minHourlyCustomers = this.customersByHour[i];
        this.maxHourlyCustomers = this.customersByHour[i];
      } else if(this.customersByHour[i] > this.maxHourlyCustomers) {
        this.maxHourlyCustomers = this.customersByHour[i];
      } else if (this.customersByHour[i] < this.minHourlyCustomers) {
        this.minHourlyCustomers = this.customersByHour[i];
      }
      this.totalCustomers += this.customersByHour[i];
    }
  },

  generateCookies: function() {
    for(var i = 0; i < 14; i++) {
      //generates an average of 1.5 cookies per customer
      var min = this.customersByHour[i];
      var max = 2 * min;
      var random = Math.floor(Math.random() * (max - min + 1)) + min;

      this.cookiesByHour[i] = random;
      this.totalCookies += random;
    }
  },

  render: function() {
    var olEl = document.getElementById('seaCenter-ol');
    var ulEl = document.getElementById('seaCenter-ul');
    for(var i = 0; i < 14; i++) {
      //Create list element
      var liEl = document.createElement('li');
      liEl.textContent = 'Customers: ' + this.customersByHour[i] + ', sales: ' + this.cookiesByHour[i];
      olEl.appendChild(liEl);
    }
  
    var cookiesAvg = (this.totalCookies / this.totalCustomers).toFixed(2);
    var liAverage = document.createElement('li');
    liAverage.textContent = 'Average cookies purchased per customer: ' + cookiesAvg;
    ulEl.appendChild(liAverage);

    var liMin = document.createElement('li');
    liMin.textContent = 'Least customers in an hour: ' + this.minHourlyCustomers;
    ulEl.appendChild(liMin);
    var liMax = document.createElement('li');
    liMax.textContent = 'Most customers in an hour: ' + this.maxHourlyCustomers;
    ulEl.appendChild(liMax);
  }
}
seaCenter.generateCustomers();
seaCenter.generateCookies();
seaCenter.render();

