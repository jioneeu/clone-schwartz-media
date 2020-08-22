import '../styles/style.scss';
'use strict';

const image1 =  document.querySelector('img#image1');
const image2 =  document.querySelector('img#image2');
const image3 =  document.querySelector('img#image3');

let imgPosition = 1;

function imageSlideshow() {
    setInterval(() => {
        if (imgPosition >= 3) {
            imgPosition = 0;
        }
    
        if (imgPosition === 0) {
            image1.className = '';
            image3.className = 'hidden';
        } else if (imgPosition === 1) {
            image2.className = '';
            image1.className = 'hidden';
        } else {
            image3.className = '';
            image2.className = 'hidden';
        }
        ++imgPosition;
        console.log(imgPosition);
    }, 3500);
}

 document.onload = imageSlideshow();
