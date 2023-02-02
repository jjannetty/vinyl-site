const albumOverlay = document.querySelector('.overlay-album')

const getRandomInt = (max) => {
  return Math.floor(Math.random() * max)
}

const toggleOverlay = () => {
  const classes = albumOverlay.classList

  classes.toggle('show')
}

export const handleClick = (album, siteLink, putBackLink) => {
  const albumClasses = album.classList
  const siteLinkClasses = siteLink.classList
  const putBackLinkClasses = putBackLink.classList

  toggleOverlay()
  
  if (albumClasses.contains('animate-flat')) {
    albumClasses.remove('animate-flat')
    albumClasses.add('animate-side')
    siteLinkClasses.remove('fade-in')
    putBackLinkClasses.remove('fade-in')
    return
  }
  
  if (albumClasses.contains('animate-side')) {
    albumClasses.remove('animate-side')
    albumClasses.add('animate-flat')
    siteLinkClasses.add('fade-in')
    putBackLinkClasses.add('fade-in')
    return
  }
  
  albumClasses.add('animate-flat')
  albumClasses.remove('animate-side')
  siteLinkClasses.add('fade-in')
  putBackLinkClasses.add('fade-in')
  return
}



export const album = (company, index) => {
  const album = document.createElement('div')
  const spine = document.createElement('div')
  const cover = document.createElement('div')
  const back = document.createElement('div')
  const bottom = document.createElement('div')
  const albumName = document.createElement('div')
  const siteLink = document.createElement('a')
  const putBackLink = document.createElement('div')
  const record = document.createElement('div')
  const lightSpines = [8, 7, 6, 4, 2]
  const spineSelection = getRandomInt(8)

  album.classList.add('album', `album-${index}`)
  album.setAttribute('data-site', company.site)

  spine.classList.add('spine', 'side')
  spine.style.backgroundImage = `url(images/0${spineSelection}-spine.jpg)`

  cover.classList.add('cover', 'side')
  cover.style.backgroundImage = `url(${company.album})`

  back.classList.add('back', 'side')

  bottom.classList.add('bottom', 'side')

  albumName.classList.add('album-name',  'side')
  albumName.innerText = `${company.name}`
  albumName.style.color = lightSpines.includes(spineSelection) ? '#000' : '#FFF'

  record.classList.add('record' ,'side')

  siteLink.setAttribute('href', `${company.site}`)
  siteLink.setAttribute('target', '_blank')
  siteLink.setAttribute('class', 'arrow-button arrow-right album-link site-link')
  siteLink.innerHTML = 'Visit Site <img src="images/arrow-right.svg">'
  putBackLink.classList.add('arrow-button', 'arrow-left', 'put-back', 'album-link')
  putBackLink.innerHTML = '<img src="images/arrow-left.svg"> Put Back'
  
  spine.appendChild(albumName)

  album.appendChild(back)
  album.appendChild(bottom)
  album.appendChild(bottom)
  album.appendChild(spine)
  album.appendChild(record)
  album.appendChild(cover)
  album.appendChild(putBackLink)
  album.appendChild(siteLink)

  album.addEventListener('click', () => handleClick(album, siteLink, putBackLink))

  return album
}