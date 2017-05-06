import { RecipieShoppingPage } from './app.po';

describe('recipie-shopping App', () => {
  let page: RecipieShoppingPage;

  beforeEach(() => {
    page = new RecipieShoppingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
