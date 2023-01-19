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
  const shelf = document.querySelector('.container')
  portfolio.forEach((company, index) => {
    const Album = album(company, index)

    shelf.appendChild(Album)
  })
}

window.toggleAlbum = () => {
  const currentAlbum = document.querySelector('.animate-flat')

  handleClick(currentAlbum)
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