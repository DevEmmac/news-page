const overlay = document.querySelector(".overlay");
const menuBtn = document.querySelector(".menu-btn");

function toggleNav () {
    //toggle
    menuBtn.classList.toggle('change');
    overlay.classList.toggle('active-menu');
    if (overlay.classList.contains('active-menu')) {
        overlay.classList.remove('overlay-slide-left');
        overlay.classList.add('overlay-slide-right');
    } else {
        overlay.classList.remove('overlay-slide-right');
        overlay.classList.add('overlay-slide-left');
    }
}
menuBtn.addEventListener('click', toggleNav);

// menuBtn.addEventListener("click", () => {
//     const icon = document.querySelector(".menu-btn img");
//     menuBtn.classList.toggle("active-btn");
//     menu.classList.toggle("active-menu");
//     if (menuBtn.classList.contains("active-btn")) {
//         menuBtn.src = "./assets/images/icon-menu.svg";
//         menu.style.display = "block";
//     } else {
//         menu.style.display = "none";
//         menuBtn.src = "./assets/images/icon-menu-close.svg";
//     }
// });

// menuBtn.onclick = function () {
//     if (!isMenuOpen) {
//         menu.style.display = "block";
//         menuBtn.style.backgroundPosition = "center left 50px, center";
//         isMenuOpen = true; 
//     } else if (isMenuOpen) {
//          menu.style.display = "none";
//          menuBtn.style.backgroundPosition = "center, center left 50px";
//          isMenuOpen = false;
//     }
// }
