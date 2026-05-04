

import { chromium, firefox,webkit,Browser  } from "@playwright/test";

export class BrowserFactory
{
public static async getBrowser(browserName: string): Promise<Browser>
{
switch(browserName.toLowerCase())
{

    case 'chromium':
   return await chromium.launch({
    headless: false,
   });
    

   
    case 'firefox':
   return await chromium.launch({
    headless: false,
   });
    

   
    case 'webkit':
   return await chromium.launch({
    headless: false,
   });
    

    default:
        throw new Error ('Invalid browser name : ${browserName}. use chrome , firefox , or webkit ');
}

}

}

