var selenium = require('selenium-webdriver');

describe('Selenium Tutorial', function() {

    // Open the TECH.insight website in the browser before each test is run
    beforeEach(function(done) {
        jasmine.getEnv().defaultTimeoutInterval = 15000;
    var webdriver = require('selenium-webdriver'),
        By = webdriver.By,
        until = webdriver.until;

    this.driver = new webdriver.Builder()
        .forBrowser('firefox')
        .build();
        });
        
    this.driver.get('http://www.techinsight.io/').then(done);

    // Close the website after each test is run (so that it is opened fresh each time)
    afterEach(function(done) {
        this.driver.quit().then(done);
    });

    // Test to ensure we are on the home page by checking the <body> tag id attribute
    it('Should be on the home page', function(done) {
        this.driver.reload();
        var element = this.driver.findElement(selenium.By.tagName('body'));

        element.getAttribute('id').then(function(id) {
            expect(id).toBe('home');
            //done();
        });
    });

    // Test the navigation bar by clicking on the 'REVIEW' link and checking the URL changes to '/review'
    it('Has a working nav', function(done) {
        this.driver.reload();
        var element = this.driver.findElement(selenium.By.linkText('REVIEW'));

        element.click();

        this.driver.getCurrentUrl().then(function(value) {
            expect(value).toContain('/review');
            //done();
        });
    });
});