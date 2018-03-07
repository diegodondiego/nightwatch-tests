logoElementCSSPath = 'a.logo--mec--header';

module.exports = {

	before : function(browser) {
		browser
			.url(browser.launch_url)
			.pause(1000);

		// TODO create a error function
		browser.waitForElementVisible(logoElementCSSPath, 2000, true, function() {}, "the logo element wasn't found.");
	},

	after : function(browser) {
		browser.end();
	},

	'logo present' : function (client) {
		// find the element in the DOM
		logoNeeds = client.expect.element(logoElementCSSPath);

		// needs to be there
		logoNeeds.to.be.present;

		// clickable
		logoNeeds.to.have.attribute('href');

	}
}
