const openMenu = document.getElementById('logo-mobile-open')
const closeMenu = document.getElementById('logo-mobile-close')
const modal = document.querySelector('.mobile-content')

openMenu.addEventListener('click', () => {
  modal.style.display = 'flex'
})

closeMenu.addEventListener('click', () => {
  modal.style.display = 'none'
})
