# gform-fill

This script can fill and submit randomized responses to a Google Form.

## Running

Running it requires the following steps:

1. Install [Node.js](https://nodejs.org/en/) on your computer (LTS release is fine)
2. [Download this script project](https://github.com/noahm/gform-fill/archive/refs/heads/main.zip) and extract to a folder called `gform-fill`
3. Open a node.js command prompt using the new shortcut in your start menu
4. Change into the directory where you extracted the script (e.g. `cd Downloads\gform-fill`)
5. Run `npm install` (this downloads some extra code that can run a browser in the background)
6. Begin filling with `npm start https://docs.google.com/forms/WHATEVER_YOUR_TARGET_FORM_IS/viewform` (replace with applicable url)
7. The form will be repeatedly filled 10,000 times or you stop the script with `CTRL + c`

Responses are picked at random from the list in `responses.ts` which you are free to edit using a plain text editor such as Notepad. Any number of responses may be included, so long as they are correctly formatted. (That is, surrounded with quotes and separated with commas.) Changes only apply after restarting the script.

## Changing from pre-written responses to AI generated

You can introduce even more fun into the mix by letting a modern AI generate new text based on the pre-written responses mentioned above. Doing this requires a few more steps:

1. Create a free account at [DeepAI](https://deepai.org/)
2. **IMPORTANT:** Click the link in the email they send to you afterwards to mark your account as verified
3. From your [logged-in profile page ](https://deepai.org/dashboard/profile) look for the `api-key` followed by a bunch of random characters. Copy those characters.
4. Open `value-generators.ts` in this script project. Replace `YOUR_API_KEY_HERE` with the value copied from your profile. Save your changes.
5. Open `index.ts` in this script project. Find `new LongAnswer(generateFrom(preWrittenComments))` and replace with `new LongAnswer(generateFrom(aiComments))`. Save your changes.
6. Run the script as before with `npm start GOOGLE_FORM_URL`
