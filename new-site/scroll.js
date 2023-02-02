window.scrollEffect = () => {
  const logo = document.querySelector('.logo-desktop')
  const partners = document.querySelector('.partners.desktop-only')

  document.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY
    logo.style.transform = `translateY(${scrollPosition/4}px)`
    partners.style.transform = `translateY(-${scrollPosition/4}px)`
  })
}