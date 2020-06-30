import { NgxVideogularWebsitePage } from './app.po';
import { browser, logging } from 'protractor';

describe('ngx-videogular-website App', () => {
  let page: NgxVideogularWebsitePage;

  beforeEach(() => {
    page = new NgxVideogularWebsitePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getTitleText()).toEqual('Welcome to ngx-videogular!');
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(
      jasmine.objectContaining({
        level: logging.Level.SEVERE,
      } as logging.Entry)
    );
  });
});
