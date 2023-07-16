// let doc = document
// let btn1 = doc.querySelector('.btn')
// let modalka = doc.querySelector('.modalka')
// let btn2 = doc.querySelector('.btn2')
// let a = doc.querySelector('a')







// btn1.onclick = () => {
//     modalka.style.display = 'block'
//     doc.body.style.overflow = 'hidden'
// }
// function func1(a) {
//     a.onclick = () => {
//         modalka.style.display = 'none'
//         doc.body.style.overflow = 'visible'
//     }
// }
// func1(btn2)
// func1(cross)

new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

console.log(swiper);