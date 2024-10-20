document.addEventListener('DOMContentLoaded', function () {
    // Featured Art Data (Carousel) with Descriptions
    const featuredArtworks = [
        { image: './images/artworks/japanese_bridge.jpg', description: 'The Japanese Bridge by Claude Monet' },
        { image: './images/artworks/last_supper.jpg', description: 'The Last Supper by Leonardo da Vinci' },
        { image: './images/artworks/les_demoiselles_d_avignon.jpg', description: 'Les Demoiselles d\'Avignon by Pablo Picasso' }
    ];

    // Additional Artworks Data (2x2 Grid) with Descriptions
    const additionalArtworks = [
        { image: './images/artworks/ginevra.jpg', description: 'Ginevra de\' Benci by Leonardo da Vinci' },
        { image: './images/artworks/irises.jpg', description: 'Irises by Vincent van Gogh' },
        { image: './images/artworks/impression_sunrise.jpg', description: 'Impression, Sunrise by Claude Monet' },
        { image: './images/artworks/mona_lisa.jpg', description: 'Mona Lisa by Leonardo da Vinci' }
    ];

    // Load Featured Art Carousel Images with Descriptions
    const carouselInner = document.querySelector('.carousel-inner');
    carouselInner.innerHTML = ''; // Clear the carousel items

    featuredArtworks.forEach((artwork, index) => {
        const carouselItem = document.createElement('div');
        carouselItem.classList.add('carousel-item');
        if (index === 0) {
            carouselItem.classList.add('active'); // Set the first image as active
        }

        const imgElement = document.createElement('img');
        imgElement.src = artwork.image;
        imgElement.classList.add('d-block', 'w-100');

        const descriptionElement = document.createElement('p');
        descriptionElement.classList.add('text-center', 'mt-2'); // Styling for description
        descriptionElement.textContent = artwork.description;

        // Append the image and description to the carousel item
        carouselItem.appendChild(imgElement);
        //carouselItem.appendChild(descriptionElement);
        carouselInner.appendChild(carouselItem);
    });

    // Load Additional Artworks in Grid Layout with Descriptions
    const gridContainer = document.querySelector('.row.row-cols-2.g-3');
    gridContainer.innerHTML = ''; // Clear existing grid items

    additionalArtworks.forEach(artwork => {
        const colDiv = document.createElement('div');
        colDiv.classList.add('col');

        const cardDiv = document.createElement('div');
        cardDiv.classList.add('card', 'shadow-sm');

        const imgElement = document.createElement('img');
        imgElement.src = artwork.image;
        imgElement.classList.add('card-img-top');

        const descriptionElement = document.createElement('p');
        descriptionElement.classList.add('text-center', 'mt-2'); // Styling for description
        descriptionElement.textContent = artwork.description;

        // Append the image and description to the card
        cardDiv.appendChild(imgElement);
        cardDiv.appendChild(descriptionElement);
        colDiv.appendChild(cardDiv);
        gridContainer.appendChild(colDiv);
    });
});
