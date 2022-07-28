export const userImage = () => {
    // --------------------- PUBLIC ATTRIBUTES ----------------------------------
    const storeImg = () => {
        const screenshot = document.getElementById('screenshot');
        screenshot.addEventListener('change', function () {
            console.log(this.files);
        });
    }

    return {
        storeImg,
    }
}