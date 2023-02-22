const posts = Array.from(document.querySelectorAll('.main__post'))
const item = Array.from(document.querySelectorAll('.post__item'))

const category = Array.from(document.querySelectorAll('.category__item'))
const card = Array.from(document.querySelectorAll('.category__card'))

function choice(control, slave) {

  control.forEach((el, index) => {

    el.addEventListener('click', () => {
      control.forEach((elem) => {
        elem.classList.remove('item__active');
      });
      el.classList.add('item__active');
      slave.forEach((el) => {
        el.classList.remove('active');
      })
      slave[index].classList.add('active');
    })
  })
}

choice(category, card)
choice(item, posts)
