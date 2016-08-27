"use strict";

const webdriver = require("selenium-webdriver");
const By = webdriver.By;
const chai = require("chai");
const expect = chai.expect;
const APP_URL = "http://simple-angular-bootstrap.herokuapp.com";
// const APP_URL = "http://localhost:3333";

const driver = new webdriver.Builder().
   withCapabilities(webdriver.Capabilities.chrome()).
   build();

describe("wedbdriver", () => {
  beforeEach(function() {
    this.timeout(6000);
  })
  after((done) => {
    driver.quit().then(done);
  });
  describe("example test suite 1", () => {
    it("should be able open My App", function(done) {
      this.timeout(6000);
      driver.get(APP_URL).then(done);
    })
    describe("/login", () => {
      it("should be able to click navbar's Log in -link", (done) => {
        const link = driver.findElement(By.linkText("Log in")).click();
        driver.getCurrentUrl().then(url => {
          expect(url).to.equal(APP_URL+"/#/login");
          done();
        })
      })
      it("should be able to write to /login view's input fields", (done) => {
        driver.findElement(By.name("email")).sendKeys("webdriver");
        driver.findElement(By.name("password")).sendKeys("testpass");
        driver.findElement(By.xpath("//button[@type='submit']")).click();
        // console.log(driver.Type)
        driver.manage().logs().get("browser").then(logs => {
          console.log(logs)
        })
        driver.getCurrentUrl().then(url => {
          expect(url).to.equal(APP_URL+"/#/login");
          done();
        })
      })
    })
    describe("/other", () => {
      it("should be able to click navbar's Other -link", (done) => {
        const link = driver.findElement(By.linkText("Other")).click();
        driver.getCurrentUrl().then(url => {
          expect(url).to.equal(APP_URL+"/#/other");
          done();
        })
      })
    })
  })
})
