'use strict';

function getMenu() {
    const menuIcon = document.querySelector('#menu-icon');
    const mobileWrap = document.querySelector('#mobile-wrap');
    const mobileMenu = document.querySelector('#mobile-menu');
    const subtitle = document.querySelector('#subtitle');

    menuIcon.addEventListener('click', (e) => {

        if (!menuIcon.classList.contains('active')) {

            menuIcon.classList.add('active');
            mobileWrap.classList.remove('short');
            mobileWrap.classList.add('long');
            mobileMenu.classList.remove('invisible');
            subtitle.classList.remove('invisible');

            setTimeout(() => {
                mobileMenu.style.opacity = '1';
                subtitle.style.opacity = '1';
            }, 400);


            document.body.style.overflow = 'hidden';
        } else {
            mobileMenu.style.opacity = '0';
            subtitle.style.opacity = '0';

            setTimeout(() => {
                mobileMenu.classList.add('invisible');
            }, 400);

            menuIcon.classList.remove('active');
            mobileWrap.classList.remove('long');
            mobileWrap.classList.add('short');
            subtitle.classList.add('invisible');

            document.body.style.overflow = '';
        }
    })
}

window.onload = getMenu;
