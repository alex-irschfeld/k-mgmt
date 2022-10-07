const canvas         = document.getElementById('canvas')
const introImage     = document.getElementById('intro-image-wrapper')
const pixelRatio     = Math.round(window.devicePixelRatio)
const ctx            = canvas.getContext('2d')
// const gridCardImgs   = document.querySelectorAll('.grid-card img')
// const infoSliderImgs = document.querySelectorAll('.info-slider img')
const buttons        = document.querySelectorAll('button')
const aTags          = document.querySelectorAll('a')
const closeSliders   = document.querySelectorAll('.exit')
const images         = document.querySelectorAll('img')

const mouse = {
    x: 0,
    y: 0
}

let circleRadius = 10

function init()
{

setup()
function setup()
{
    canvas.width  = window.innerWidth * pixelRatio
    canvas.height = window.innerHeight * pixelRatio

    canvas.style.width = `${Math.round(canvas.width / pixelRatio)}px`
    canvas.style.height = `${ Math.round(canvas.height / pixelRatio)}px`

    ctx.scale(pixelRatio, pixelRatio)
}

draw()
function draw()
{
    window.addEventListener('mousemove', circleCursor, true)
    window.addEventListener('scroll', () =>
    {
        canvas.style.display = 'none'
    })

    if(introImage)
    {
        spotlightOnElementHover( introImage )
    }

    images.forEach( image =>
    {
        spotlightOnElementHover( image )
    })

    windowResize()
    
}

// Resize canvas when browser size changes
function windowResize()
{
    window.addEventListener( 'resize', () =>
    {
        canvas.width  = window.innerWidth * pixelRatio
        canvas.height = window.innerHeight * pixelRatio

        canvas.style.width = `${ Math.round( canvas.width / pixelRatio ) }px`
        canvas.style.height = `${ Math.round( canvas.height / pixelRatio ) }px`
        ctx.scale( pixelRatio, pixelRatio )
    })
}

// move circle on transparent canvas when mouse is moving
function circleCursor(event)
{
    mouse.x = event.clientX
    mouse.y = event.clientY

    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.beginPath()
    ctx.fillStyle = 'rgba( 0, 0, 0, 0 )'
    ctx.fillRect(0, 0, canvas.width, canvas.height)
    
    ctx.fillStyle = 'white'
    ctx.ellipse(mouse.x, mouse.y, circleRadius, circleRadius, 0, 0, Math.PI * 2)
    ctx.fill()
    ctx.closePath()

    canvas.style.display = 'block'

}

// increase cursor size on element hover and change mix-blend-mode when mouse enters grid card
function spotlightOnElementHover(element)
{
    element.addEventListener('mouseenter', () =>
    {
        if(!element.classList.contains('grid-intro'))
        {
            circleRadius = 100
            canvas.style.mixBlendMode = 'soft-light'
            canvas.style.filter = 'blur(1rem)'
        }
    })

    element.addEventListener('mouseleave', () =>
    {
        circleRadius = 10
        canvas.style.mixBlendMode = 'difference'
        canvas.style.filter = ''
    })
}

// function removeCanvasOnHover( elements )
// {
//     elements.forEach( element =>
//     {
//         element.addEventListener( 'mouseenter', () =>
//         {
//             canvas.style.display = 'none'
//         })

//         element.addEventListener( 'mouseleave', () =>
//         {
//             canvas.style.display = 'block'
//         })
//     })
// }

}