import { S9InitialPage } from './app.po';

describe('s9-initial App', () => {
  let page: S9InitialPage;

  beforeEach(() => {
    page = new S9InitialPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
