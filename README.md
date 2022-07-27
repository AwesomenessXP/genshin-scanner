# Genshin Scanner
I'll be using an OCR API to make an app that scans an uploaded screenshot, validate the data, and output results to the user.

# Specs
- user can upload screenshots of their builds (start with 1920 x 1080 screenshots)
- use Genshin Impact database API
- use Free OCR API (ocr engine 2 for unique characters) to scan text

# Process
- use multi-field forms
- filter data to remove unique symbols (like percent signs)
- research formulas for calculating damage in Genshin Impact
- scan data, and match results with the database to verify proper data
    - validate that the 
    - convert each element to a string if not already

# Challenges
- uploading images and accessing them through only the front end
    - will I be able to use an API that can save them?
- cropping 1920 x 1080 images to a particular region to extract text from
- storing the image on local computer before sending to API
- sending the modified image to the API 

# Resources:
- [How to upload images with vanilla JS](https://blog.logrocket.com/how-to-build-file-upload-service-vanilla-javascript/#set-up-the-node-js-server) 
- [Using local storage in place of a database (can change later)](https://www.section.io/engineering-education/how-to-use-localstorage-with-javascript/)

# Features yet to implement
- support for mobile devices, and PS4/PS5 screenshots
