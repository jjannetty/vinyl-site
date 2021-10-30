window.displayAlbum = () => {
  let clients = document.getElementsByClassName('portfolio-list-link');
  let albums = document.getElementsByClassName('album');
  let mobileAlbums = document.getElementsByClassName('mobile-album');
  let overlay = document.querySelector('.overlay');
  let portfolio = document.querySelector('.portfolio');

  overlay.addEventListener('click', () => {
    let displayed = document.querySelector('.album.display');

    overlay.classList.remove('display-flex')
    displayed.classList.remove('display')
  })

  portfolio.addEventListener('click', () => {
    let windowWidth = window.innerWidth

    if (windowWidth > 414) {
      let displayed = document.querySelector('.album.display');

      overlay.classList.remove('display-flex')
      displayed.classList.remove('display')
    }
  })

  Array.from(clients).forEach((client, index) => { 
    let album = albums.item(index)

    client.addEventListener('mouseenter', () => {
      let windowWidth = window.innerWidth
      let displayed = document.querySelector('.album.display');

      if (windowWidth > 414) {
        if (!displayed) {
          overlay.classList.add('display-flex')
        }

        if (!album.classList.contains('display')) {
          album.classList.add('display')
          displayed.classList.remove('display')
        }
      }
    })
  })

  Array.from(mobileAlbums).forEach((album, index) => {
    let largeAlbum = albums.item(index)

    album.addEventListener('click', () => {
      let windowWidth = window.innerWidth
      let displayed = document.querySelector('.album.display');

      if (windowWidth <= 414) {
        if (!displayed) {
          overlay.classList.add('display-flex')
        }

        if (!largeAlbum.classList.contains('display')) {
          largeAlbum.classList.add('display')
        }
      }
    })
  })
}