Feature('Liking Restaurant');

Scenario('test liking and unlike restaurant', ({ I }) => {
    I.amOnPage('/');

    I.executeScript('window.scrollTo(0, 500);');
    I.seeElement('#mainContent');
    I.wait(1);
    I.seeElement('.card');
    I.click(locate('#anchor').first());

    // Like the restaurant
    I.seeElement('#likeButton');
    I.click('#likeButton');
    I.amOnPage('/#/favorite');

    // Validate in favorite section
    I.wait(1);
    I.seeElement('.card');

    // Unlike the restaurant
    I.click(locate('#anchor').first());
    I.seeElement('#likeButton');
    I.click('#likeButton');

    // Validate in favorite section
    I.dontSeeElement('.card');
});