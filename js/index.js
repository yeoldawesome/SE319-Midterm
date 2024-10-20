// Fetch the artist and artwork data from the JSON file
async function fetchArtistsData() {
    try {
        console.log("Fetching artist data...");
        const response = await fetch('./json/artists.json'); // Adjust this to the actual path of your JSON file
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json(); // Parse the JSON response
        console.log("Artist data fetched successfully:", data);
        return data;
    } catch (error) {
        console.error('Error fetching artists data:', error);
    }
}

// Function to load the artworks dynamically using fetched data
async function loadArtworks() {
    console.log("Loading artworks...");
    const artistsData = await fetchArtistsData(); // Fetch the JSON data

    if (!artistsData) {
        console.error("No artist data available.");
        return; // Stop if fetching failed
    }

    // Carousel section (we'll pick the first sample work of each artist for the featured art carousel)
    const carouselInner = document.querySelector('.carousel-inner');
    if (!carouselInner) {
        console.error("Carousel inner element not found.");
        return;
    }
    carouselInner.innerHTML = ''; // Clear existing carousel items

    artistsData.forEach((artist, index) => {
        const featuredWork = artist.sampleWorks[0]; // Take the first work of each artist

        const carouselItem = document.createElement('div');
        carouselItem.classList.add('carousel-item');
        if (index === 0) {
            carouselItem.classList.add('active'); // Set the first item as active
        }

        const imgElement = document.createElement('img');
        imgElement.src = featuredWork.image;
        imgElement.alt = featuredWork.alt;
        imgElement.classList.add('d-block', 'w-100');

        const caption = document.createElement('div');
        caption.classList.add('carousel-caption', 'd-none', 'd-md-block');
        caption.innerHTML = `<h5>${artist.name}</h5><p>${featuredWork.description}</p>`;

        carouselItem.appendChild(imgElement);
        carouselItem.appendChild(caption);
        carouselInner.appendChild(carouselItem);
    });

    // Grid section for additional artworks (Limit to 4 artworks)
    const gridContainer = document.querySelector('.row.row-cols-2.g-3');
    if (!gridContainer) {
        console.error("Grid container not found.");
        return;
    }
    gridContainer.innerHTML = ''; // Clear existing content

    let artworkCount = 0; // Initialize a counter to limit the number of artworks

    artistsData.forEach(artist => {
        artist.sampleWorks.forEach(work => {
            if (artworkCount < 4) { // Load only 4 artworks
                const colDiv = document.createElement('div');
                colDiv.classList.add('col');

                const cardDiv = document.createElement('div');
                cardDiv.classList.add('card', 'shadow-sm');

                const imgElement = document.createElement('img');
                imgElement.src = work.image;
                imgElement.alt = work.alt;
                imgElement.classList.add('card-img-top');

                const cardBody = document.createElement('div');
                cardBody.classList.add('card-body');

                const cardTitle = document.createElement('h5');
                cardTitle.classList.add('card-title');
                cardTitle.textContent = artist.name;

                const cardText = document.createElement('p');
                cardText.classList.add('card-text');
                cardText.textContent = work.description;

                // Append elements to the card
                cardBody.appendChild(cardTitle);
                cardBody.appendChild(cardText);
                cardDiv.appendChild(imgElement);
                cardDiv.appendChild(cardBody);
                colDiv.appendChild(cardDiv);
                gridContainer.appendChild(colDiv);

                artworkCount++; // Increment the counter after adding an artwork
            }
        });
    });

    console.log("Artworks loaded successfully.");
}

// Wait for the DOM to load before executing the script
document.addEventListener('DOMContentLoaded', loadArtworks);
