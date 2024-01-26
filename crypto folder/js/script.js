const openMenu = document.getElementById('logo-mobile-open')
const closeMenu = document.getElementById('logo-mobile-close')
const loginBtn = document.getElementById('login')

const modal = document.querySelector('.mobile-content')
const modalLogin = document.querySelector('.modal-container')

openMenu.addEventListener('click', () => {
  modal.style.display = 'flex'
})

closeMenu.addEventListener('click', () => {
  modal.style.display = 'none'
})

loginBtn.addEventListener('click', () => {
  modalLogin.classList.add('mostrar')
  modalLogin.addEventListener('click', (e) => {
    if (e.target.id == 'modal-log') {
      modalLogin.classList.remove('mostrar')
    }
  })
})
