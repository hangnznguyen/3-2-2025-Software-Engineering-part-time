    // Step 1: Define the artist object
const artist = {
  name: "Van Gogh",
  portfolio: [
    {
      title: "portrait",
      url: "https://collectionapi.metmuseum.org/api/collection/v1/iiif/436532/1671316/main-image"
    },
    {
      title: "sky",
      url: "https://mymodernmet.com/wp/wp-content/uploads/2020/11/White-house-night-van-goh-worldwide-2.jpg"
    }
  ]
};

// Step 2: Select the container to put content into
const profileContainer = document.getElementById('artist-profile');

// Step 3: Create the artist profile card
const artistCard = document.createElement('div');
artistCard.className = 'artist-card';
artistCard.innerHTML = `<h2>${artist.name}</h2>`;

// Step 4: Create a container for portfolio cards
const portfolioContainer = document.createElement('div');
portfolioContainer.className = 'portfolio';

// Step 5: Loop through portfolio and add image cards
artist.portfolio.forEach(item => {
  const card = document.createElement('div');
  card.className = 'portfolio-card';

  card.innerHTML = `
    <h4>${item.title}</h4>
    <img src="${item.url}" alt="${item.title}">
  `;

  portfolioContainer.appendChild(card);
});

// Step 6: Append everything to the DOM
artistCard.appendChild(portfolioContainer);
profileContainer.appendChild(artistCard);
