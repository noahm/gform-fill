import type { Page } from "playwright";

export abstract class Field {
  public abstract fill(_: Page): Promise<string>;
}

export class ShortAnswer implements Field {
  protected selector = ".exportInput";

  constructor(private values: AsyncGenerator<string>) {}

  public async fill(page: Page) {
    const el = await page.waitForSelector(this.selector);
    const next = await this.values.next();
    if (next.done === true) {
      throw new Error("no more values to fill");
    }
    await el.fill(next.value);
    return next.value;
  }
}

export class LongAnswer extends ShortAnswer {
  protected override selector = ".quantumWizTextinputPapertextareaInput";
}
