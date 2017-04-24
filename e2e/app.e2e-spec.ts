import { AngularMdlPage } from './app.po';

describe('angular-mdl App', () => {
  let page: AngularMdlPage;

  beforeEach(() => {
    page = new AngularMdlPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
