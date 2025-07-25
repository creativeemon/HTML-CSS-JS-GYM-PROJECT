const navToggle = document.getElementById("navToggle")
const navLinks = document.getElementById("navLinks")
// toggle navigation
navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('active')
    navLinks.classList.toggle('active')
})

// close navItems when clicked an remove

document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click' , () => {
        navToggle.classList.remove('active')
        navLinks.classList.remove('active')
    } )
})

// navigation smooth scrolling
const item = document.querySelectorAll('a[href^="#"]')
item.forEach(anchor => {
    anchor.addEventListener("click", () => {
       e.preventDefault();
        document.querySelector(this.getAttribute('href'.scrollIntoView({
           behavior: 'smooth'
       })))
   })
})


// add background when scrolling
window.addEventListener('scroll' ,function(){
    const header = document.querySelector('header');
    if (this.window.scrollY > 50) {
        header.style.backgroundColor = '#000000';
        header.style.transition = 'background-color 0.3s ease'
    } else {
        header.style.backgroundColor = 'transparent';
    }
})