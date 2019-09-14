
Feature('Main');

Scenario('test something', (I) => {
  I.amOnPage('https://github.com');
  I.see('GitHub');
});