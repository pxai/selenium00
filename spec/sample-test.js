var webdriver = require('selenium-webdriver');

var driver = new webdriver.Builder().
    //withCapabilities(webdriver.Capabilities.chrome()).
        forBrowser('firefox').
        build();

describe('basic test', function () {
	it('should be on correct page', function () {
		driver.get('http://www.wingify.com');
		driver.getTitle().then(function(title) {
			expect(title).toBe('Wingify');
		});
	});
});