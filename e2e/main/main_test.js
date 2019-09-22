const expect = require('expect')
Feature('Main');

Scenario('My Courses', async (I) => {
  I.amOnPage('https://github.com');
//   const course_name = Array.from(document.querySelectorAll('.card .card__details .details__name')).map(course => {
// return course.innerText
// })
  I.see('GitHub');
});

