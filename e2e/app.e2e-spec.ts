import { MyAnDemoPage } from './app.po';

describe('my-an-demo App', function() {
  let page: MyAnDemoPage;

  beforeEach(() => {
    page = new MyAnDemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
