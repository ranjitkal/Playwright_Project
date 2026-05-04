

import { chromium, firefox, webkit, Browser } from "@playwright/test";

export class BrowserFactory {
  public static async getBrowser(browserName: string): Promise<Browser> {
    switch (browserName.toLowerCase()) {

      case "chromium":
        return await chromium.launch({
          headless: true,
          args: ["--no-sandbox", "--disable-setuid-sandbox"]
        });

      case "firefox":
        return await firefox.launch({
          headless: true,
          args: ["--no-sandbox", "--disable-setuid-sandbox"]
        });

      case "webkit":
        return await webkit.launch({
          headless: true,
          args: ["--no-sandbox", "--disable-setuid-sandbox"]
        });

      default:
        throw new Error(
          `Invalid browser name: ${browserName}. Use chromium, firefox, or webkit`
        );
    }
  }
}
