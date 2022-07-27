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
- cropping 1920 x 1080 images to a particular region before sending to OCR API
- storing the image with session storage to allow short term storage of multiple files
- sending the modified image to the OCR API (what format to use/ how do I simplify this process?)

# Resources to help me:
- [OCR API for parsing images/pdf into a JSON format](https://ocr.space/ocrapi#ocrengine)
- [How to upload images with vanilla JS](https://blog.logrocket.com/how-to-build-file-upload-service-vanilla-javascript/#set-up-the-node-js-server) 
- [Using session storage so the user can upload multiple files](https://www.section.io/engineering-education/how-and-when-to-apply-session-storage-with-javascript/)
- [For cropping images](https://pixelixe.com/docs/image-processing/crop-image-api.html)
- [Uploading images to server using Fetch API](https://www.youtube.com/watch?v=e13T3O0Iyvc)
- [For `POST` calls to get JSON of data using Fetch API](https://www.youtube.com/watch?v=TTf0mMl0Sc4&list=WL&index=2)

# Features yet to implement
- support for mobile devices, and PS4/PS5 screenshots
