export const userImage = () => {
    const screenshot = () => document.getElementById('screenshot');
    const submitBtn = () => document.getElementById('submit');
    // --------------------- PUBLIC ATTRIBUTES ----------------------------------
    const requestImg = async () => {
        // TEST OUT IMAGE THEN URL
        screenshot().addEventListener('change', function () {
            const reader = new FileReader(); // converts image to data URL
            reader.addEventListener('load', () => {
                sessionStorage.setItem('artifact', reader.result);
            });
            reader.readAsDataURL(this.files[0]); // result will be in binary
        });

        submitBtn().addEventListener('click', () => {
            const recentImage = sessionStorage.getItem('artifact');
            if (recentImage) {
                document.querySelector('#img-preview').setAttribute("src", recentImage);
            } // if
        });
    }// async()

    return {
        requestImg,
    }
}