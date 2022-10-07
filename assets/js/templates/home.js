const contactButton  = document.getElementById('contact-button')
const contactWrapper = document.querySelector('.contact-wrapper')
const rightArea      = document.querySelector('.right')
const canvasWrapper  = document.getElementById('intro-image-wrapper')
const introImageSrc1 = document.getElementById('intro-image-1').src
const introImageSrc2 = document.getElementById('intro-image-2').src
const bodyTag        = document.querySelector('body')
const slider         = document.querySelectorAll('.info-slider')
const exit           = document.querySelectorAll('.exit')
const gridCardNews   = document.querySelectorAll('.grid-card-news')
let sliderOpen       = false

home();
function home()
{
  contactShowHide()
  imageMelting(introImageSrc1, introImageSrc2)
  changeBackgroundOnHover()
  sliderInOut()
}

function contactShowHide()
{
  contactButton.addEventListener('click', () =>
  {
    contactWrapper.classList.toggle('contact-shown')
    contactWrapper.classList.toggle('contact-hidden')
  })
}

function imageMelting(imgSrc1, imgSrc2)
{
  if(canvasWrapper)
  {
    let firstImage = new Image()
    firstImage.src = imgSrc1

    let secondImage = new Image()
    secondImage.src = imgSrc2
  
    new hoverEffect(
    {
      parent: canvasWrapper,
      intensity: 0.5,
      angle: Math.PI / 4,
      speedIn: 1,
      speedOut: 1,
      imagesRatio: 1.25,
      easing: Expo.easeOut,
      image1: firstImage.src,
      image2: secondImage.src,
      displacementImage: 'assets/img/diss.png'
    })
  }
}

function changeBackgroundOnHover()
{
  canvasWrapper.addEventListener( 'mouseenter', () =>
  {
    rightArea.style.backgroundColor = '#E6FFF0'
  })

  canvasWrapper.addEventListener( 'mouseleave', () =>
  {
    rightArea.style.backgroundColor = '#f5f0ff'
  })
}

function sliderInOut()
{
  for (let i = 0; i < gridCardNews.length; i++)
  {
    gridCardNews[i].addEventListener('click', () =>
    {
      if(!sliderOpen)
      {
        slider[i].classList.toggle('open-slider')
        slider[i].classList.toggle('close-slider')
        bodyTag.style.overflow = 'hidden'
        sliderOpen = true
      }
    })

    exit[i].addEventListener('click', () =>
    {
      if(sliderOpen)
      {
        slider[i].classList.toggle('open-slider')
        slider[i].classList.toggle('close-slider')
        bodyTag.style.overflow = 'auto'
        sliderOpen = false
      }
    })
  }
}