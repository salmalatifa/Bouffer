Feature('Test Review');

Scenario('Test submiting the review', ({ I }) => {
  I.amOnPage('/');

  I.executeScript('window.scrollTo(0, 500);');
  I.seeElement('#mainContent');
  I.wait(1);
  I.seeElement('.card');
  I.click(locate('#anchor').first());

  I.seeElement('#inputName');
  I.fillField('#inputName', 'Test Review');
  I.seeElement('#inputReview');
  I.fillField('#inputReview', 'Ini adalah review test e2e');
  I.executeScript('document.querySelector("button.btn").click()');
});
