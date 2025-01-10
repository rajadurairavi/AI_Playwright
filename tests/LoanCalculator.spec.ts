import { test } from '@playwright/test';
import { ai } from '@zerostep/playwright';

test.describe('AI in playwright', () => {
  const searchTerm = 'Nordea'

  test('Nordea Loan Calculator', async ({ page }) => {




    await page.goto('https://www.google.com')
    test.setTimeout(120000);
    await ai(`Search for '${searchTerm}', select first search suggestion and click google search button`, { page, test })

    const title = await ai(`What is the title of the first organic search result?`, { page, test })

    console.log('First organic search result is: ', title)


  })
})