const nav = document.querySelector('#nav')
const navBtn = document.querySelector('#nav-btn')
const navBtnImg = document.querySelector('#nav-btn-img')

navBtn.onclick = () => {
    if (nav.classList.toggle('open')) {
        navBtnImg.src = "./home/close.svg";
    } else {
        navBtnImg.src = "./home/nav-open.svg";
    }
}


const navlink = document.querySelectorAll('a[href^="#"]');

navlink.forEach(link => {
    link.addEventListener('click', function(event) {
        const menu = document.querySelector('.nav');
        if (menu.classList.contains('open')) {
            menu.classList.remove('open');
        }
    });
});


AOS.init();