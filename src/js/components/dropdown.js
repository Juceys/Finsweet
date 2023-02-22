document.querySelectorAll(".dropdown").forEach(el => {
  el.addEventListener('click', () => {
    el.classList.toggle('about__drop')
  })
})


