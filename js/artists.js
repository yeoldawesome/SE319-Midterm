// Fetch the artist data from the JSON file
async function fetchArtistsData() {
    try {
        const response = await fetch('./json/artists.json'); // Adjust the path if necessary
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching artist data:', error);
        return null;
    }
}

// Function to create artist cards and insert them into the DOM
async function loadArtists() {
    const artistsData = await fetchArtistsData(); // Fetch the JSON data

    if (!artistsData) {
        console.error("No artist data available.");
        return;
    }

    const container = document.querySelector('.row'); // The row where artist cards will be added

    // Loop through each artist and create the card structure
    artistsData.forEach(artist => {
        const colDiv = document.createElement('div');
        colDiv.classList.add('col-md-6', 'artist-card');

        const cardDiv = document.createElement('div');
        cardDiv.classList.add('card', 'shadow-sm');

        const rowDiv = document.createElement('div');
        rowDiv.classList.add('row');

        const textColDiv = document.createElement('div');
        textColDiv.classList.add('col', 'text-center');

        const artistName = document.createElement('h2');
        artistName.textContent = artist.name;
        artistName.classList.add('mb-3');

        const artistImage = document.createElement('img');
        artistImage.src = artist.image;
        artistImage.alt = artist.name;
        artistImage.classList.add('artist-picture', 'mb-3');

        const artistDetails = document.createElement('div');
        artistDetails.classList.add('col', 'text-left', 'px-4');
        artistDetails.innerHTML = `
            <p><strong>Born:</strong> ${artist.born}</p>
            <p><strong>Died:</strong> ${artist.died}</p>
            <p><strong>Style:</strong> ${artist.style}</p>
        `;

        // Load only one sample work (the first one)
        const firstWork = artist.sampleWorks[0]; // Grab the first sample work

        const worksColDiv = document.createElement('div');
        worksColDiv.classList.add('col', 'px-4');

        const worksTitle = document.createElement('h5');
        worksTitle.textContent = 'Sample Work:';

        const workImg = document.createElement('img');
        workImg.src = firstWork.image;
        workImg.alt = firstWork.alt;
        workImg.classList.add('sample-work');

        worksColDiv.appendChild(worksTitle);
        worksColDiv.appendChild(workImg);

        // Biography
        const bioRowDiv = document.createElement('div');
        const bioTitle = document.createElement('h5');
        bioTitle.textContent = 'Biography:';

        const bioText = document.createElement('p');
        bioText.textContent = artist.bio;
        bioText.classList.add('card-text');

        bioRowDiv.appendChild(bioTitle);
        bioRowDiv.appendChild(bioText);

        // Assemble card
        textColDiv.appendChild(artistName);
        textColDiv.appendChild(artistImage);

        rowDiv.appendChild(textColDiv);
        rowDiv.appendChild(artistDetails);
        rowDiv.appendChild(worksColDiv);

        cardDiv.appendChild(rowDiv);
        cardDiv.appendChild(bioRowDiv);

        colDiv.appendChild(cardDiv);

        // Add the complete card to the container
        container.appendChild(colDiv);
    });
}

// Call the loadArtists function when the page loads
document.addEventListener('DOMContentLoaded', loadArtists);
