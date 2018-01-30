logoElementCSSPath = 'a.logo--mec--header';

module.exports = {

	before : function(browser) {
		browser
			.url(browser.launch_url)
			// TODO why pause?
			.pause(1000);
	},

	'logo present' : function (client) {
		// find the element in the DOM
		element = client.expect.element(logoElementCSSPath);

		element.to.be.present;

		element.to.have.attribute('href');

		client.end();

	}
}
