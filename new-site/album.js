const albumOverlay = document.querySelector('.overlay-album')

const getRandomInt = (max) => {
  return Math.floor(Math.random() * max)
}

const toggleOverlay = () => {
  const classes = albumOverlay.classList

  classes.toggle('show')
}

export const handleClick = (album) => {
  const classes = album.classList

  toggleOverlay()
  
  if (classes.contains('animate-flat')) {
    classes.remove('animate-flat')
    classes.add('animate-side')
    return
  }
  
  if (classes.contains('animate-side')) {
    classes.remove('animate-side')
    classes.add('animate-flat')
    return
  }
  
  classes.add('animate-flat')
  return
}

export const album = (company, index) => {
  const album = document.createElement('div')
  const spine = document.createElement('div')
  const cover = document.createElement('div')
  const back = document.createElement('div')
  const bottom = document.createElement('div')
  const albumName = document.createElement('div')
  const record = document.createElement('div')
  const siteLink = document.createElement('a')
  const lightSpines = [8, 7, 6, 4, 2]
  const spineSelection = getRandomInt(8)

  album.classList.add('album', `album-${index}`)

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
  siteLink.setAttribute('class', 'arrow-button arrow-right')
  siteLink.innerHTML = 'Visit Site <img src="images/arrow-right.svg">'

  record.appendChild(siteLink)
  spine.appendChild(albumName)
  album.appendChild(spine)
  album.appendChild(cover)
  album.appendChild(record)
  album.appendChild(back)
  album.appendChild(bottom)

  album.addEventListener('click', () => handleClick(album))

  return album
}