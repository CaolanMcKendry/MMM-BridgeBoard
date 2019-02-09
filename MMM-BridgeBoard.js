/* global Module */

/* Magic Mirror
 * Module: MMM-BridgeBoard
 *
 * By Caolan McKendry (https://www.caolan.me/)
 * MIT Licensed.
 */

 //helloworld.js:

 Module.register("MMM-BridgeBoard",{
 	// Default module config.
 	defaults: {
 		text: "Hello World!"
 	},

 	// Override dom generator.
 	getDom: function() {
 		var wrapper = document.createElement("div");
 		wrapper.innerHTML = this.config.text;
 		return wrapper;
 	}

	socketNotificationReceived: function(notification, payload) {
		if(notification === 'text yeho') {
			this.config.text = 'success'
		};
	}
 });
