//toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

//scroll section
let section = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    section.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            //active navbar link
            navLinks.forEach(Links => {
                Links.classList.remove('active');
                document.querySelector('heder nav a[href*=' + id + ']').classList.add('active');
            });
        }
    });
}

window.onscroll = () => {
  //sticky header
  let header = document.querySelector('header');

  header.classList.toggle('sticky', window.scrollY > 100);

//   remove toggle icon and when click navbar links (scroll)
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

};
