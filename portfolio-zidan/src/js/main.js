const hamburgerButton = document.querySelector('.hamburger');
const navbarLink = document.querySelector('.navbar-link');
hamburgerButton.addEventListener('click', function () {
  hamburgerButton.classList.toggle('is-active');
  navbarLink.classList.toggle('navbar-link-active');
});

//light - box;
const imagePortfolio = document.querySelectorAll('#img-portpoflio');
const lightBox = document.querySelector('.light-box');
imagePortfolio.forEach((image) => {
  image.addEventListener('click', function () {
    const gambar = this.src;
    const itemImagePortfolio = imageItem(gambar);
    lightBox.classList.remove('hidden');
    lightBox.classList.add('show');
    lightBox.innerHTML = itemImagePortfolio;
  });
});

function imageItem(image) {
  return `<img src="${image}" alt="portfolio" class="md:w-[60rem] md:h-[40rem] shadow-sm shadow-white absolute" />
  </div>`;
}

document.addEventListener('click', function (e) {
  if (!hamburgerButton.contains(e.target) && !navbarLink.contains(e.target)) {
    navbarLink.classList.remove('navbar-link-active');
    hamburgerButton.classList.remove('is-active');
  }

  if (lightBox.contains(e.target) && portfolio.contains(e.target)) {
    lightBox.classList.remove('show');
    lightBox.innerHTML = '';
    lightBox.classList.add('hidden');
  }
});

const buttonSubmitForm = document.querySelector('#btn');
const messageForm = document.querySelector('#message');
const inputForm = document.querySelectorAll('.contact input');
buttonSubmitForm.addEventListener('click', () => {
  inputForm.forEach((input) => (input.value = ''));
  messageForm.value = '';
});

const buttonBackToTop = document.querySelector('.backToTop');
document.addEventListener('scroll', function () {
  const windowScroll = window.scrollY > 150;
  if (window.scrollY) {
    navbarLink.classList.remove('navbar-link-active');
    hamburgerButton.classList.remove('is-active');
  }
  buttonBackToTop.classList.toggle('show', windowScroll);
});
