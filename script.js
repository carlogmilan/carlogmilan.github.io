document.addEventListener("DOMContentLoaded", function() {
    const images = [
        'TotoroPrint_resized.jpg', // Add all your image names here
         'PonyoPrint_resized.jpg',
         'Konoha_resize.jpg',
         'ReadingPicassoCutPaper.png',
         'PXL_20240104_220639123.jpg',
         'IMG_4743.jpg',
         'Myth_Beachhouse.jpg',
         'GraveSalon.jpg',
         'Mac miller background.png',
         'Page1-4.png',
         'Picture2-3.png',
	 'SightseeStampDesignFR2-14.png',
    ];

    const gallery = document.getElementById('gallery');

    images.forEach(image => {
        const imgElement = document.createElement('img');
        imgElement.src = `assets/artwork/${image}`;
        imgElement.alt = image;
        imgElement.className = 'gallery-image';
        gallery.appendChild(imgElement);
    });
});