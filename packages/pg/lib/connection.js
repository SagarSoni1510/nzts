'use strict';

var net = require('net');
var EventEmitter = require('events').EventEmitter;

class NetezzaConnection extends EventEmitter {
  constructor(config) {
    super();
    config = config || {};

    // Assigning host and port from the config object
    this.host = config.host || 'localhost';
    this.port = config.port || 5480;
  }

  connect() {
    var self = this;

    // Establish TCP connection to Netezza
    this.stream = net.createConnection(this.port, this.host); //this.stream is our socket 

    // Handle connection events
    this.stream.once('connect', function () {
      // Handle connection success
      self.emit('connect');
    });

    // Handle errors and close events
    // Implement SSL negotiation if necessary
    // Attach listeners to the stream
  }
}

module.exports = { NetezzaConnection };


 
 
