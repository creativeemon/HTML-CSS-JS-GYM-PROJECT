const navToggle = document.getElementById("navToggle")
const navLinks = document.getElementById("navLinks")

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