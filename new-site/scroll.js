window.scrollEffect = () => {
  const logo = document.querySelector('.logo-desktop')
  const partners = document.querySelector('.partners.desktop-only')

  document.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY
    console.log(scrollPosition)
    logo.style.transform = `translateY(${scrollPosition/4}px)`
    partners.style.transform = `translateY(-${scrollPosition/4}px)`
  })
}