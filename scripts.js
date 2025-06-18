import { portfolio } from './portfolio.js'
import { album, handleClick, mobileAlbum } from './album.js'

function splitByLiquidEvent(portfolio) {
  const result = {
    withLiquidEvent: [],
    withoutLiquidEvent: []
  };

  portfolio.forEach(company => {
    if (company.liquidEvent) {
      result.withLiquidEvent.push(company);
    } else {
      result.withoutLiquidEvent.push(company);
    }
  });

  return result;
}

function renderPortfolio() {
  const portfolioContainer = document.querySelector(".portfolio-companies");

  portfolio.forEach(company => {
    // Generate image src dynamically
    const logoSrc = `../images/portfolio/logo-${company.name.toLowerCase().replace(/\s+/g, "-")}.png`;

    // Create anchor element
    const companyLink = document.createElement("a");
    companyLink.href = company.site;
    companyLink.classList.add("portfolio-company");
    companyLink.target = "_blank"; // Opens link in a new tab

    // Populate inner HTML
    companyLink.innerHTML = `
      <img class="portfolio-company-logo" alt="${company.name}" src="${logoSrc}">
      <div class="portfolio-company-details">
        ${ company.liquidEvent ? `<div class="liquid-event-pill ${company.liquidEventType}">${company.liquidEventType}</div>` : ''}
        <h4 class="portfolio-company-name">${company.name}</h4>
        <p class="portfolio-company-description">${company.description}</p>
      </div>
    `;

    // Append to portfolio container
    portfolioContainer.appendChild(companyLink);
  });
}

// Call the function after DOM loads
document.addEventListener("DOMContentLoaded", renderPortfolio);

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
  const liquidEventsShelf = document.querySelector('.container.liquid-events')

  const { withLiquidEvent, withoutLiquidEvent } = splitByLiquidEvent(portfolio);

  withoutLiquidEvent.forEach((company, index) => {
    const Album = album(company, index)
    const MobileAlbum = mobileAlbum(company)
    const mobileAlbumContainer = shelf.querySelector('.mobile-albums')

    shelf.appendChild(Album)
    mobileAlbumContainer.appendChild(MobileAlbum)
  })

  withLiquidEvent.forEach((company, index) => {
    const Album = album(company, index)
    const MobileAlbum = mobileAlbum(company)
    const mobileAlbumContainer = liquidEventsShelf.querySelector('.mobile-albums')

    liquidEventsShelf.appendChild(Album)
    mobileAlbumContainer.appendChild(MobileAlbum)
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