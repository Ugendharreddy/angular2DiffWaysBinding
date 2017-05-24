import { MyAngulartwoAppPage } from './app.po';

describe('my-angulartwo-app App', () => {
  let page: MyAngulartwoAppPage;

  beforeEach(() => {
    page = new MyAngulartwoAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
