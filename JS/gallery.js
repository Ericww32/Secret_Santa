// Get the directory of images
const imageDirectory = 'Assets/img/fam_pics';

async function listFiles() {
  try {
    const [imageDirectory] = await window.showDirectoryPicker();
    if (!imageDirectory) return;

    for await (const entry of imageDirectory.values()) {
      console.log(entry.name);
    }
  } catch (err) {
    console.error(err);
  }
}

listFiles();

// Get the carousel and gallery elements
const carouselInner = document.querySelector('.carousel-inner');
const galleryGrid = document.querySelector('.gallery-grid');
const modal = document.getElementById('modal');
const modalImage = document.getElementById('modal-image');
const closeModal = document.getElementById('close-modal');

function loadImages(images) {
  // Load the images into the carousel
  images.forEach((image, index) => {
    const carouselImage = document.createElement('img');
    carouselImage.src = imageDirectory + image;
    carouselImage.classList.add('carousel-image');
    if (index === 0) {
      carouselImage.classList.add('active');
    }
              carouselInner.appendChild(carouselImage);

              // Auto rotate the carousel
              setInterval(() => {
                carouselImage.classList.remove('active');
                const nextImage = carouselInner.children[(index + 1) % images.length];
                nextImage.classList.add('active');
              }, 3000);
            });

          // Load the images into the gallery
          images.forEach(image => {
            const galleryImage = document.createElement('img');
            galleryImage.src = imageDirectory + image;
            galleryImage.classList.add('gallery-image');
            galleryGrid.appendChild(galleryImage);

            // Add an event listener to the gallery image
            galleryImage.addEventListener('click', () => {
              // Open the modal with the selected image
              openModal(imageDirectory + image);
            });
          });

          // Add an event listener to the close modal button
          closeModal.addEventListener('click', () => {
            modal.style.display = 'none';
          });
        }

function openModal(imageSrc) {
  modalImage.src = imageSrc;
  modal.style.display = 'block';
}