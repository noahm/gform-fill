import { BrowserContext } from "playwright";
import { Field } from "./elements";

interface FormOpts {
  context: BrowserContext;
  url: string;
  fields: Field[];
}

export class Form {
  private context: BrowserContext;
  private url: string;
  private fields: Field[];
  public filled = 0;

  constructor(opts: FormOpts) {
    this.fields = opts.fields;
    this.url = opts.url;
    this.context = opts.context;
  }

  private async initPage() {
    const page = await this.context.newPage();
    await page.goto(this.url);
    return page;
  }

  public async fillAndSubmit(opts?: { screenshot?: boolean; log?: boolean }) {
    this.filled++;
    const page = await this.initPage();
    const fills = await Promise.all(
      this.fields.map((field) => field.fill(page))
    );
    if (opts?.log) {
      console.log("filled", fills);
    }
    if (opts?.screenshot) {
      await page.screenshot({ path: `./pre-submit-${this.filled}.png` });
    }
    await page.click(".freebirdThemedFilledButtonM2");
    if (opts?.screenshot) {
      await page.screenshot({ path: `./post-submit-${this.filled}.png` });
    }
    await page.close();
  }
}
