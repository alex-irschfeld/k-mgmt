const mediaQuery     = 820
const navBar         = document.querySelector('nav')
const menu           = document.querySelector('nav ul')
const mobileNavIcon  = document.getElementById('mobile-nav-icon')
const mobileNavLines = document.querySelectorAll('#mobile-nav-icon span')
const menuList       = document.querySelectorAll('nav ul li')
let menuOpen         = false

main()
function main()
{
  mobileNavShowHide()
}

function mobileNavShowHide()
{
  if(window.innerWidth <= mediaQuery)
  {
    menu.style.display = 'none'
  }
  else
  {
    menu.style.display = 'flex'
  }

  window.addEventListener('resize', () =>
  {
    if(window.innerWidth <= mediaQuery)
    {
      menu.style.display = 'none'
    }
    else
    {
      menu.style.display = 'flex'
      menuList.forEach(item => 
      {
        item.style.opacity = '1'
      })
      menuOpen = false
      mobileNavLines[0].style.transform = ''
      mobileNavLines[1].style.opacity   = 1
      mobileNavLines[2].style.transform = ''
    }

    if(window.innerWidth <= mediaQuery && menuOpen)
    {
      menu.style.display = 'flex'
    }
  })

  mobileNavIcon.addEventListener('click', () =>
  {

    if(!menuOpen && window.innerWidth <= mediaQuery)
    {
      menu.style.display       = 'flex'
      menu.style.paddingBottom = '.6rem'      

      menuOpen = true

      mobileNavLines[0].style.transform = 'rotate(45deg) translateX(.5rem) translateY(.5rem)'
      mobileNavLines[1].style.opacity   = 0
      mobileNavLines[2].style.transform = 'rotate(-45deg) translateX(.5rem) translateY(-.5rem)'
    }
    else
    {
      menu.style.display       = 'none'
      menu.style.paddingBottom = ''

      menuOpen = false

      mobileNavLines[0].style.transform = ''
      mobileNavLines[1].style.opacity   = 1
      mobileNavLines[2].style.transform = ''
    }  
  })
}

