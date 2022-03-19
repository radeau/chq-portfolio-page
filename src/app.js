//class needed for mobile menu
const btn = document.querySelector(".mobile-menu-button");
const sidebar = document.querySelector(".sidebar");

//add our event listener for click
btn.addEventListener('click', () => {
    sidebar.classList.toggle("-translate-x-full");
})

 