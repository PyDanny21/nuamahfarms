const Menu=document.querySelector('.menu');
const displayMenu=document.querySelector('.mobile-menu');

Menu.addEventListener('click',()=>{
    const Toggled=displayMenu.classList.toggle('mobile-menu-height');
    const Done=Toggled?Menu.innerHTML='<h1>&times;</h1>':Menu.innerHTML='<h1>&equiv;</h1>';

});


// slides
const Slides=document.querySelectorAll('.img-slide');
const btns=document.querySelectorAll('.nav-btn');

var sliderNav=function (manual) {
    btns.forEach((btn)=>{
        btn.classList.remove('active');
    });
    Slides.forEach((slide)=>{
        slide.classList.remove('active');
    });

    btns[manual].classList.add('active');
    Slides[manual].classList.add('active');
    
};

btns.forEach((btn,i)=>{
    btn.addEventListener('click',()=>{
        sliderNav(i);
    });
});

document.addEventListener('DOMContentLoaded',()=>{
    let index=0

    function nextSlide() {
        index=(index+1)%Slides.length;
        sliderNav(index);
    };
    setInterval(nextSlide,5000)
});

// lightbox
// Open lightbox and set image source
document.querySelectorAll('.gallery-pic img').forEach(img => {
    img.addEventListener('click', () => {
      document.getElementById('lightbox').style.display = 'flex';
      document.getElementById('lightbox-img').src = img.src;
    });
  });
  
  // Close lightbox when clicking outside image
  document.getElementById('lightbox').addEventListener('click', (e) => {
    if (e.target === document.getElementById('lightbox')) {
      document.getElementById('lightbox').style.display = 'none';
    }
  });
  
  // Function to display previous slide
  function prevSlide() {
    const currentImg = document.getElementById('lightbox-img').src;
    const galleryImgs = document.querySelectorAll('.gallery-pic img');
    let prevImgIndex;
    galleryImgs.forEach((img, index) => {
      if (img.src === currentImg) {
        prevImgIndex = index === 0 ? galleryImgs.length - 1 : index - 1;
      }
    });
    document.getElementById('lightbox-img').src = galleryImgs[prevImgIndex].src;
  }
  
  // Function to display next slide
  function nextSlide() {
    const currentImg = document.getElementById('lightbox-img').src;
    const galleryImgs = document.querySelectorAll('.gallery-pic img');
    let nextImgIndex;
    galleryImgs.forEach((img, index) => {
      if (img.src === currentImg) {
        nextImgIndex = index === galleryImgs.length - 1 ? 0 : index + 1;
      }
    });
    document.getElementById('lightbox-img').src = galleryImgs[nextImgIndex].src;
  }
  