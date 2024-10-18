function loadArtists() {
    console.log('Loading artists');

    fetch('json/artists.json')
        .then(response => response.json())
        .then(artists => {
            const container = document.getElementById("artists-container");

            artists.forEach(artist => {
                const parentRow = document.createElement("div");
                parentRow.className = "row row-cols-1 mb-5"
                parentRow.id = artist.name.toLowerCase().replace(/\s/g, "-");

                const card = document.createElement("div");
                card.className = "card shadow-sm";

                const row = document.createElement("div");
                row.className = "row";

                const infoCol = document.createElement("div");
                infoCol.className = "col text-center";

                const name = document.createElement("h2");
                name.textContent = artist.name;
                name.className = "mb-3";
                infoCol.appendChild(name);

                const img = document.createElement("img");
                img.src = artist.image;
                img.alt = artist.name;
                img.className = "artist-picture mb-3";
                img.style.width = "300px";
                img.style.height = "300px";
                img.style.objectFit = "scale-down";
                infoCol.appendChild(img);

                const detailsCol = document.createElement("div");
                detailsCol.className = "col text-left px-4";

                const born = document.createElement("p");
                born.innerHTML = `<strong>Born:</strong> ${artist.born}`;
                detailsCol.appendChild(born);

                const died = document.createElement("p");
                died.innerHTML = `<strong>Died:</strong> ${artist.died}`;
                detailsCol.appendChild(died);

                const style = document.createElement("p");
                style.innerHTML = `<strong>Style:</strong> ${artist.style}`;
                detailsCol.appendChild(style);

                infoCol.appendChild(detailsCol);
                row.appendChild(infoCol);

                const worksCol = document.createElement("div");
                worksCol.className = "col px-4";

                const worksHeader = document.createElement("h5");
                worksHeader.textContent = "Sample Works:";
                worksCol.appendChild(worksHeader);

                const worksRow = document.createElement("div");
                worksRow.className = "row";

                artist.sampleWorks.forEach(work => {
                    const workCol = document.createElement("div");
                    workCol.className = "col-md-6";

                    const workImg = document.createElement("img");
                    workImg.src = work;
                    workImg.alt = "Sample Work";
                    workImg.className = "sample-work";
                    workImg.style.width = "100%";
                    workImg.style.height = "200px";
                    workImg.style.objectFit = "cover";
                    workImg.style.marginBottom = "10px";

                    workCol.appendChild(workImg);
                    worksRow.appendChild(workCol);
                });

                worksCol.appendChild(worksRow);
                row.appendChild(worksCol);

                card.appendChild(row);

                const bioRow = document.createElement("div");
                bioRow.className = "row";

                const bioHeader = document.createElement("h5");
                bioHeader.textContent = "Biography:";
                bioRow.appendChild(bioHeader);

                const bioPara = document.createElement("p");
                bioPara.className = "card-text";
                bioPara.textContent = artist.bio;
                bioRow.appendChild(bioPara);

                card.appendChild(bioRow);

                parentRow.appendChild(card);
                container.appendChild(parentRow);
            });
        })
        .catch(error => {
            console.error("Error fetching or parsing JSON:", error);
            const container = document.getElementById("artists-container");
            container.innerHTML = `<p class="text-danger">Failed to load artists data.</p>`;
        });
}

document.addEventListener('DOMContentLoaded', loadArtists);