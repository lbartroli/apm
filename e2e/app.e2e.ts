import { ApmPage } from './app.po';

describe('apm App', function() {
  let page: ApmPage;

  beforeEach(() => {
    page = new ApmPage();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('apm works!');
  });
});
