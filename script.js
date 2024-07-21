document.addEventListener("DOMContentLoaded", function() {
    const images = [
        'car.jpg', // Add all your image names here
        // 'image2.jpg',
        // 'image3.jpg'
        // Add more images as needed
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