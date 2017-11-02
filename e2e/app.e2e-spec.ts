import { BossPage } from './app.po';

describe('boss App', () => {
  let page: BossPage;

  beforeEach(() => {
    page = new BossPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
