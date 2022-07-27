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

# Features yet to implement
- support for mobile devices, and PS4/PS5 screenshots
