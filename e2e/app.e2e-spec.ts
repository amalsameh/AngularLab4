import { AngularLab4Page } from './app.po';

describe('angular-lab4 App', () => {
  let page: AngularLab4Page;

  beforeEach(() => {
    page = new AngularLab4Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
