import './css/style.scss'

// Add css file to html document in production
if (process.env.NODE_ENV === 'production') {
  const link = document.createElement('link')
  link.href='main.css'
  link.rel='stylesheet'
  document.getElementsByTagName('head')[0].appendChild(link);
}

// Navigation toggle
document.addEventListener('DOMContentLoaded', function () {

  // Get all "navbar-burger" elements
  var $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0)

  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {

    // Add a click event on each of them
    $navbarBurgers.forEach(function ($el) {
      $el.addEventListener('click', function () {

        // Get the target from the "data-target" attribute
        var target = $el.dataset.target
        var $target = document.getElementById(target)

        // Toggle the class on both the "navbar-burger" and the "navbar-menu"
        $el.classList.toggle('is-active')
        $target.classList.toggle('is-active')

      })
    })
  }

})

// Check for fixed nav and add class to the
// body element to make room for it, unless it's transparent.
const nav = document.querySelector('.navbar')
if (nav) {
  if (nav.classList.contains('is-fixed-top') && !nav.classList.contains('is-transparent')) {
    document.body.classList.add('has-navbar-fixed-top')
  }
  if (nav.classList.contains('is-fixed-bottom')) {
    document.body.classList.add('has-navbar-fixed-bottom')
  }
}

// Dropdown toggle
const dropdown = document.querySelector('.dropdown')
const navDropdown = document.querySelector('.navbar-item.has-dropdown')
if (dropdown) {
  document.addEventListener('click', function(event) {
    var isClickInside = dropdown.contains(event.target)
    dropdown.classList.toggle('is-active')
    if (!isClickInside) {
      dropdown.classList.remove('is-active')
    }
  })
}
if (navDropdown) {
  document.addEventListener('click', function(event) {
    var isClickInside = navDropdown.contains(event.target)
    navDropdown.classList.toggle('is-active')
    if (!isClickInside) {
      navDropdown.classList.remove('is-active')
    }
  })
}

// Console credit
console.info('Built with uBuild blocks theme (https://github.com/forestryio/ubuild-blocks)')
