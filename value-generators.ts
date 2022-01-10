import fetch from "node-fetch";
import * as FormData from "form-data";
import { randomItemOf } from "./utils";
import { preWrittenComments } from "./responses";

export async function* generateFrom(
  source: () => Promise<string[]> | string[]
) {
  let values = await source();
  while (true) {
    const next = values.shift();
    if (next) {
      yield next;
    } else {
      values = await source();
    }
  }
}

export async function randomEmails() {
  const result = await fetch(
    "http://names.drycodes.com/10?suffix=@gmail.com&case=lower"
  ).then((r) => r.json());
  return result as string[];
}

export async function aiComments() {
  const body = new FormData();
  const input = randomItemOf(preWrittenComments());
  body.append("text", input);
  const resp = await fetch("https://api.deepai.org/api/text-generator", {
    method: "POST",
    body,
    headers: {
      "api-key": "YOUR_API_KEY_HERE",
    },
  }).then((r) => r.json());
  if (!resp.output) {
    console.log(resp);
    throw new Error("no text from deepai");
  }
  const results = resp.output.split("\n\n") as string[];
  results.shift(); // remove leading prompt
  return results;
}
