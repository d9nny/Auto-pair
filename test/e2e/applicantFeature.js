'use strict';

describe('Auto-Pair applicant page', function() {
  it('has a applicant table', function() {
    browser.get('http://localhost:3000');
    var resultClass = element(by.css('.result'));
    expect(resultClass.isPresent()).toBe(true);
    var col1Class = element(by.css('.col-md-1'));
    expect(col1Class.isPresent()).toBe(true);
    var col2Class = element(by.css('.col-md-2'));
    expect(col2Class.isPresent()).toBe(true);
    var col4Class = element(by.css('.col-md-4'));
    expect(col4Class.isPresent()).toBe(true);
  });
});

describe('applicants in table', function() {
  it('has a list of applicant in table', function() {
    browser.get('http://localhost:3000/#/applicants');
    var nameText = element.all(by.repeater('name in name.list')).getText()
    expect(nameTexts).toEqual(["dan", "jay"]);
});
// (name: "Dan", email:"dan@dan.com", test_id: 1, score: 3
