document.addEventListener('DOMContentLoaded', function () {
    // Featured Art Data (Carousel)
    const featuredArtworks = [
        './images/artworks/japanese_bridge.jpg',
        './images/artworks/last_supper.jpg',
        './images/artworks/les_demoiselles_d_avignon.jpg'
    ];

    // Additional Artworks Data (2x2 Grid)
    const additionalArtworks = [
        './images/artworks/ginevra.jpg',
        './images/artworks/irises.jpg',
        './images/artworks/impression_sunrise.jpg',
        './images/artworks/mona_lisa.jpg'
    ];

    // Load Featured Art Carousel Images
    const carouselInner = document.querySelector('.carousel-inner');
    carouselInner.innerHTML = ''; // Clear the carousel items

    featuredArtworks.forEach((imagePath, index) => {
        const carouselItem = document.createElement('div');
        carouselItem.classList.add('carousel-item');
        if (index === 0) {
            carouselItem.classList.add('active'); // Set the first image as active
        }

        const imgElement = document.createElement('img');
        imgElement.src = imagePath;
        imgElement.classList.add('d-block', 'w-100');

        carouselItem.appendChild(imgElement);
        carouselInner.appendChild(carouselItem);
    });

    // Load Additional Artworks in Grid Layout
    const gridContainer = document.querySelector('.row.row-cols-2.g-3');
    gridContainer.innerHTML = ''; // Clear existing grid items

    additionalArtworks.forEach(imagePath => {
        const colDiv = document.createElement('div');
        colDiv.classList.add('col');

        const cardDiv = document.createElement('div');
        cardDiv.classList.add('card', 'shadow-sm');

        const imgElement = document.createElement('img');
        imgElement.src = imagePath;
        imgElement.classList.add('card-img-top');

        cardDiv.appendChild(imgElement);
        colDiv.appendChild(cardDiv);
        gridContainer.appendChild(colDiv);
    });
});
