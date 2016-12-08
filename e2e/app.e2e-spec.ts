import { PlusachPage } from './app.po';

describe('plusach App', function() {
  let page: PlusachPage;

  beforeEach(() => {
    page = new PlusachPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
