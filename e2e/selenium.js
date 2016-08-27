const webdriver = require("selenium-webdriver");

const driver = new webdriver.Builder().
   withCapabilities(webdriver.Capabilities.chrome()).
   build();

describe("wedbdriver", () => {
  beforeEach(function() {
    this.timeout(6000);
  })
  after(function(done) {
    driver.quit().then(done);
  });
  describe("test suite 1", () => {
    it("should be able open Grappa", function(done) {
      this.timeout(6000);
      driver.get("http://localhost:3333").then(done);
    })
    it("should be able to click login", function(done) {
      // const links = driver.findElement(webdriver.By.cssSelector("a[href=/login]")).click();
      const link = driver.findElement(webdriver.By.linkText("Log in")).click();
      driver.getCurrentUrl().then(url => {
        console.log(url);
        done();
      })
    })
  })
})
