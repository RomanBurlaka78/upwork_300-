function burgerMenu() {
    //  Burger Toggle menu

const burger = document.querySelector('.burger');
const navBarNav = document.querySelector('.navbar_nav');
const navLink = document.querySelectorAll('.nav_link');


const navButtons = document.querySelector('.nav_buttons');

burger.addEventListener('click', ()=> {
    burger.classList.toggle('active');
    navBarNav.classList.toggle('active');
    navButtons.classList.toggle('active');
  
    // console.log(navControls.style);
   
   
})
navLink.forEach((item)=> {
    item.addEventListener('click', ()=> {
    //   console.log(item.innerHTML);
        burger.classList.remove('active');
        navBarNav.classList.remove('active');
       navButtons.classList.remove('active');
       
    })

})

window.addEventListener('resize', ()=> {
    if(window.innerWidth>768) {
        burger.classList.remove('active');
        navBarNav.classList.remove('active');
        navButtons.classList.remove('active');

    }
})
}

burgerMenu();


// .nav_controls {
// }
// .select {
// }
// .nav_buttons {
// }
// .btn {
// }
// .btn_primary {
// }
// .nav_btn {
// }
// .btn_secondary {
// }


