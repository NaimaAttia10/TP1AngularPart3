
import {setupBrowserHooks, getBrowserState} from './utils';

describe('App test', function () {
  setupBrowserHooks();
  it('is running', async function () {
    const {page} = getBrowserState();
    const element = await page.waitForSelector('text/authentification app is running!');


    expect(element).not.toBeNull();

  });
});
