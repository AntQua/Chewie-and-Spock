//DARK MODE -------------------------------------------------------------------------

const darkModeToggleBtn = document.querySelector("#dark-mode-toggle");

function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
};

darkModeToggleBtn.addEventListener('click', toggleDarkMode);


// DOG CARDS MODALS -------------------------------------------------------------------

const backdrop = document.getElementById('backdrop');

function toggleModal(modalClass) {
    const modal = document.querySelector(`.modal.card.${modalClass}`);

    modal.classList.toggle('visible');
    backdrop.classList.toggle('visible');
}

function hideModal(modalClass) {
    const modal = document.querySelector(`.modal.card.${modalClass}`);

    modal.classList.remove('visible');
    backdrop.classList.remove('visible');
}

document.getElementById('chewie-button').addEventListener('click', function() {
    toggleModal('chewie');
});

document.getElementById('chewie-cancel').addEventListener('click', function() {
    toggleModal('chewie');
});

document.getElementById('spock-button').addEventListener('click', function() {
    toggleModal('spock');
});

document.getElementById('spock-cancel').addEventListener('click', function() {
    toggleModal('spock');
});

backdrop.addEventListener('click', function() {
    hideModal('chewie');
    hideModal('spock');
});


//PICTURES GALERY -------------------------------------------------------------------------

const gallery = document.querySelector('.gallery');
const overlay = document.querySelector('.overlay');
const overlayImage = document.querySelector('.overlay-inner img');
const overlayClose = document.querySelector('.close');

//function to generate html to display each photo in the gallery. Takes an horizontal and vertical argument that defines the picture dimensions.
function generateHTML([h, v]) {
  return `
    <div class="item h${h} v${v}">
        <img src="images/${getRandomNumber(8)}.jpg">
        <div class="item__overlay">
            <button>View →</button>
        </div>
    </div>
    `;
}

//each picture will be 100px by 100px (grid-template-columns: repeat(auto-fill, 100px);) and have a span of 2 in the horizontal and vertical axis 
//h - horizontal span (columns) , v - vertical span (rows)

// .item.h1 {
//   grid-column: span 2;
// }
// .item.v1 {
//   grid-row: span 2;
// }


// we can size the pictures just by changing the span (1h/v for a smaller square or 3h/v for a bigger square)
// or even different size squares, ex.:
// .item.v2 {
//   grid-row: span 1;
// }

// .item.h2 {
//   grid-column: span 1;  
// }

let generatedNumbers = [];

//this function will generate a random number from the numbered images available (we have 8 in the images folder), so the limit is 8
//if we want to add more pictures in the gallery we just need to pass the total number of images we want to display as an argument to the function (limit)
// the function will not output a repeated number so we dont have a repeated image in the gallery
function getRandomNumber(limit) {
  let randomNumber = Math.floor(Math.random() * limit) + 1;
  if (generatedNumbers.includes(randomNumber)) {
    return getRandomNumber(limit);
  } else {
    generatedNumbers.push(randomNumber);
    return randomNumber;
  }
}

//digits variable will provide an array of arrays. Each array representing each picture (with h v span), total of 8 arrays inside the main array. 
const digits = Array.from({ length: 8 }, () => [1, 1]);

//variable html will take the digits array and we will map over each one and we pass it to the generateHTML function, then join('') in the end so we can convert it to a string.
//this will generate html code for each picture (8 blocks of html code)
const html = digits.map(generateHTML).join('');

// pass the html code previouslly generated to the gallery container
gallery.innerHTML = html;


//select the image when click on the overlay 
const items = document.querySelectorAll('.item'); // creates a node list

//iterate over each item/picture so we can click it
items.forEach(item => item.addEventListener('click', handleClick));

function handleClick(event) {
  //get the sourse of the image clicked
  const src = event.currentTarget.querySelector('img').src;
  overlayImage.src = src;
  open();
};

//open the image selected
function open(){
  overlay.classList.add('open');
};

//close the selected image
function close(){
  overlay.classList.remove('open');
}

overlayClose.addEventListener('click', close);


