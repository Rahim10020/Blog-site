// Grab elements
const headerElement = document.querySelector('#header')
const menuToggleIcon = document.querySelector('#menu-toggle-icon')


// Nav styles on scroll
const scrollHeader = () => {
  if (this.scrollY >= 15) {
    headerElement.classList.add('activated')
  } else {
    headerElement.classList.remove('activated')
  }
}
window.addEventListener('scroll', scrollHeader)


// open menu and search popup
const toggleMenu = () => {
  const mobileMenu = document.querySelector('#menu')
  mobileMenu.classList.toggle('activated')
  menuToggleIcon.classList.toggle('activated')
}
menuToggleIcon.addEventListener('click', toggleMenu)
// open/close search form group
const formOpenButton = document.querySelector('#search-icon')
const formCloseButton = document.querySelector('#form-close-btn')
const searchFormContainer = document.querySelector('#search-form-container')

formOpenButton.addEventListener('click', () => searchFormContainer.classList.add('activated'))
formCloseButton.addEventListener('click', () => searchFormContainer.classList.remove('activated'))
// close search from popup with ESC key press
window.addEventListener('keyup', (event) => {
  if (event.key === 'Escape') searchFormContainer.classList.remove('activated')
})

// switch theme/ add to local storage
const bodyElement = document.body
const themeToggleButton = document.querySelector('#theme-toggle-button')
const currentTheme = localStorage.getItem('currentTheme')

if (currentTheme === 'themeActive') {
  bodyElement.classList.add('light-theme')
}

themeToggleButton.addEventListener('click', () => {
  bodyElement.classList.toggle('light-theme')
  if (bodyElement.classList.contains('light-theme')) {
    localStorage.setItem('currentTheme', 'themeActive')
  } else {
    localStorage.removeItem('currentTheme')
  }
})


// swiper

const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  spaceBetween: 20,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  pagination: {
    el: '.swiper-pagination'
  },
  breakpoints: {
    700: {
      slidesPerView: 2,
    },
    1200: {
      slidesPerView: 3,
    }
  }
})

