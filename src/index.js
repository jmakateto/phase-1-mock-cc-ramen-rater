const ramenMenu = document.getElementById('ramen-menu');

// Function to fetch and display ramen images
function fetchRamenImages() {
  fetch('http://localhost:3000/ramens')
    .then(response => response.json())
    .then(ramens => {
      ramens.forEach(ramen => {
        const ramenImage = document.createElement('img');
        ramenImage.src = ramen.image;
        ramenImage.addEventListener('click', () => displayRamenDetails(ramen));
        ramenMenu.appendChild(ramenImage);
      });
    })
    .catch(error => console.log(error));
}

// Call the fetchRamenImages function to load the ramen images on page load
fetchRamenImages();
const ramenDetail = document.getElementById('ramen-detail');

// Function to display ramen details
function displayRamenDetails(ramen) {
  ramenDetail.innerHTML = `
    <img src="${ramen.image}">
    <h2>${ramen.name}</h2>
    <h3>${ramen.restaurant}</h3>
    <p>${ramen.rating}</p>
    <p>${ramen.comment}</p>
  `;
}
const newRamenForm = document.getElementById('new-ramen-form');

// Function to handle the new ramen form submission
function handleNewRamenFormSubmit(event) {
  event.preventDefault();

  const name = document.getElementById('new-ramen-name').value;
  const restaurant = document.getElementById('new-ramen-restaurant').value;
  const image = document.getElementById('new-ramen-image').value;

  const newRamen = {
    name: name,
    restaurant: restaurant,
    image: image
  };

  displayRamenDetails(newRamen);
  newRamenForm.reset();
}

// Add an event listener to the new ramen form
if (newRamenForm) {
  newRamenForm.addEventListener('submit', handleNewRamenFormSubmit);
}
