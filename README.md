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

- use form-data to submit user inputted image (png, jpg, jpeg)
- OCR Engine 2 will filter data to remove unique symbols (like percent signs)
- research formulas for calculating damage in Genshin Impact
- scan data, and match results with the database to verify proper data
  - for calculations: focus only ATK, ATK%, CRIT RATE, CRIT DMG, EM
    - don't forget about character base atk and their weapon!
    - don't forget enemy types and their resistances to dmg
  - validate that the text uploaded correctly
  - convert each element to a string if not already
- compressing images to be < 1 MB

# Challenges

- cropping 1920 x 1080 images to a particular region before sending to OCR API
- storing the image with session storage so user can see their builds on screen while visiting
- sending the modified image to the OCR API (what format to use/ how do I simplify this process?)
- writing unit tests to determine how accurate the OCR API is

# What I learned:

- How to make GET and POST requests to OCR API
- making my code reusable by modularizing the artifact scan
- ATK stat wouldn't show the stat number, so i had to access the next element
- Learned that `regex` HAS to be used before making instances of `RegExp`
  - also learned that `^` means to look for an expression at the beginning of a string
- using an IIFE (immediately invoked function expression) made the API request faster

# Resources to help me:

- [OCR API for parsing images/pdf into a JSON format](https://ocr.space/ocrapi#ocrengine)
- [How to upload images with vanilla JS](https://blog.logrocket.com/how-to-build-file-upload-service-vanilla-javascript/#set-up-the-node-js-server)
- [Using session storage so the user can upload multiple files](https://www.section.io/engineering-education/how-and-when-to-apply-session-storage-with-javascript/)
- [For cropping images](https://pixelixe.com/docs/image-processing/crop-image-api.html)
- [Uploading images to server using Fetch API](https://www.youtube.com/watch?v=e13T3O0Iyvc)
- [For `POST` calls to get JSON of data using Fetch API](https://www.youtube.com/watch?v=TTf0mMl0Sc4&list=WL&index=2)

- for uploading index.html to GH Pages if it is in a subdirectory:
  - `git add dist`
  - `git commit -m "message"`
  - `git subtree push --prefix dist origin client`

# Features yet to implement

- support for mobile devices, and PS4/PS5 screenshots
