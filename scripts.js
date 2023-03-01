import { portfolio } from './portfolio.js'
import { album, handleClick } from './album.js'

const toggleRecordPlayerText = () => {
  const texts = document.querySelectorAll('.player-text')

  texts.forEach(text => {
    text.classList.toggle('hide')
  })
}

const togglePowerIndicatorState = () => {
  const powerIndicator = document.querySelector('.power-light')

  powerIndicator.classList.toggle('pulse')
}

window.albums = () => {
  const page = document.querySelector('.main')
  const shelf = document.querySelector('.container')
  portfolio.forEach((company, index) => {
    const Album = album(company, index)

    shelf.appendChild(Album)
  })

  setTimeout(() => {
    page.classList.add('visible')
  }, 500)
}

window.toggleAlbum = () => {
  const currentAlbum = document.querySelector('.animate-flat')

  handleClick(currentAlbum)
}

window.goToSite = () => {
  const currentAlbum = document.querySelector('.animate-flat')
  const siteLink = currentAlbum.dataset.site

  window.open(siteLink)
}

window.toggleAbout = () => {
  const aboutOverlay = document.querySelector('.overlay-about')
  const classes = aboutOverlay.classList

  classes.toggle('show')
}

window.handleAboutHover = () => {
  togglePowerIndicatorState()
  toggleRecordPlayerText()
}