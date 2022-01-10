import { chromium } from "playwright";
import { Form } from "./form";
import { LongAnswer, ShortAnswer } from "./elements";
import { generateFrom, randomEmails, aiComments } from "./value-generators";
import { preWrittenComments } from "./responses";
import { argv } from "process";

(async () => {
  const url = argv[2];
  if (!url) {
    console.log("Error: Google Forms URL not provided.");
    console.log("Run this command again and include a URL to load:");
    console.log("  npm start https://docs.google.com/forms/d/e/.../viewform");
    console.log("");
    return;
  }
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const form = new Form({
    context,
    url,
    fields: [
      new ShortAnswer(generateFrom(randomEmails)),
      new LongAnswer(generateFrom(preWrittenComments)),
    ],
  });
  try {
    for (let i = 0; i < 10000; i++) {
      await form.fillAndSubmit({ log: true });
      console.log("submitted form", i + 1, "times");
    }
  } catch (e) {
    console.log("done with errors", e);
  }
  await browser.close();
})();
