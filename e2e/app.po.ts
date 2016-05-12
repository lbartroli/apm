export class ApmPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('apm-app h1')).getText();
  }
}
