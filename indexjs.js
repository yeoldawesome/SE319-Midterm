
fetch('artworks.json')
    .then(response => response.json())
    .then(data => {
        const carouselInner = document.getElementById('carousel-inner');
        data.forEach((artwork, index) => {
            // Create a new carousel item
            const carouselItem = document.createElement('div');
            carouselItem.className = `carousel-item ${index === 0 ? 'active' : ''}`; // Set active class for the first item

            // Create the image element
            const img = document.createElement('img');
            img.src = artwork.image;
            img.alt = artwork.artist;
            img.className = 'd-block w-100';

            // Create the caption
            const caption = document.createElement('div');
            caption.className = 'carousel-caption d-none d-md-block';
            caption.innerHTML = `<h5>${artwork.artist}</h5><p>${artwork.description}</p>`;

            // Append the image and caption to the carousel item
            carouselItem.appendChild(img);
            carouselItem.appendChild(caption);

            // Append the carousel item to the carousel inner
            carouselInner.appendChild(carouselItem);
        });
    })
    .catch(error => console.error('Error loading the artworks:', error));
