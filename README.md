# (in development) Genshin Artifact Scanner

I'll be using an OCR API to make an app that scans an uploaded screenshot of your Genshin artifacts and calculate your character's damage with your stats.

# Specs

- user can upload screenshots of their builds (start with 1920 x 1080 screenshots)
- use Genshin Impact database API
- use Free OCR API (ocr engine 2 for unique characters) to scan text

# How to start:

- have npm installed
- `npm run build` --> uses `"build": "webpack"` in webpack.config.js

# Process

## Part 1:
- use form-data to submit user inputted image (png, jpg, jpeg)
- OCR Engine 2 will identify unique symbols (like percent signs)
- scan data, and match results with the database to verify proper data
  - for calculations: focus only ATK, ATK%, CRIT RATE, CRIT DMG, EM
    - don't forget about character base atk and their weapon!
    - don't forget enemy types and their resistances to dmg
  - validate that the text uploaded correctly
  - convert each element to a string if not already
- cropping 1920 x 1080 images to a particular region before sending to OCR API
- storing the image with session storage so user can see their builds on screen while visiting
- sending the modified image to the OCR API (what format to use/ how do I simplify this process?)

## Part 2:
- store user data in session storage, then retrieve data from it
- compressing images to be < 1 MB

## Part 3:
- research formulas for calculating damage in Genshin Impact

# What I learned:

- How to design the project:
  - use factory objects for artifact pieces, uploaded images, and calculations
- How to make GET and POST requests to OCR API
- making my code reusable by modularizing the artifact scan
- ATK stat wouldn't show the stat number, so i had to access the next element
- Learned that `regex` HAS to be used before making instances of `RegExp`
  - also learned that `^` means to look for an expression at the beginning of a string
- using an IIFE (immediately invoked function expression) made the API request faster
- breaking down large functions into smaller modules
- you can use an alias for the function/variable you exported

# Challenges:
- My biggest challenge with this project was uploading the images to the API because I wanted to test with local files. Then I realized I could convert the images to base 64 string and send them to API and thats where all my problems were, but I realized I was overthinking the whole time. I wasn't uploading base 64 strings the whole time, but undefined objects. Idk how to make the backend for Node JS so I just used session storage to temporarily hold the images, then retrieve them when I needed to scan them
  - I wasn't retrieving the images from session storage
  - used `url` instead of `base64Image` parameter when making a `POST` request

# Resources to help me:

- [OCR API for parsing images/pdf into a JSON format](https://ocr.space/ocrapi#ocrengine)
- [How to upload images with vanilla JS](https://blog.logrocket.com/how-to-build-file-upload-service-vanilla-javascript/#set-up-the-node-js-server)
- [Using session storage](https://morioh.com/p/06bf3525362f)
- [For cropping images](https://pixelixe.com/docs/image-processing/crop-image-api.html)
- [Uploading images to server using Fetch API](https://www.youtube.com/watch?v=e13T3O0Iyvc)
- [For `POST` calls to get JSON of data using Fetch API](https://www.youtube.com/watch?v=TTf0mMl0Sc4&list=WL&index=2)
- [Regular expressions for decimal numbers](https://regexland.com/regex-decimal-numbers/#:~:text=A%20regular%20expression%20for%20a,optional%20plus%20or%20minus%20sign.)

- for uploading index.html to GH Pages if it is in a subdirectory:
  - `git add dist`
  - `git commit -m "message"`
  - `git subtree push --prefix dist origin client`

# Features yet to implement

- support for mobile devices, and PS4/PS5 screenshots
- toggle HP/ER/DEF when displayed
- backend and database for genshin impact API
- damage calculator
