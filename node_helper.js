'use strict';
const NodeHelper = require('node_helper');

const PythonShell = require('python-shell');
var pythonStarted = false

module.exports = NodeHelper.create({

  python_start: function () {
    const self = this;
    const pyshell = new PythonShell('modules/' + this.name + '/smartscale.py'
    pyshell.on('message', function (message) {
      this.sendSocketNotification('text yeho');
      console.log(message);
      }
    );
  },


if(!pythonStarted) {
  pythonStarted = true;
  this.python_start();
  };

});
