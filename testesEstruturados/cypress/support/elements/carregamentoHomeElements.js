/// <reference types="Cypress" />

class carregamentoHomeElements{
    showcase = () => { return '.slideshow' }
    banner = () => { return 'img[class="banner-vacinas-img"]' }
    navBar = () => { return '.container-content' }
    subNavBar1 = () => { return 'a[title="Bem Panvel"]' }
    subNavBar2 = () => { return 'a[title="Ofertas"]' }
    subNavBar3 = () => { return 'a[title="Entrega Gratis"]' }
    subNavBar4 = () => { return 'a[title="Click & Retire"]' }
    subNavBar5 = () => { return 'a[title="Receba em até 120 minutos"]' }
    subNavBar6 = () => { return 'a[title="12x sem juros"]' }
    showcaseOnSale = () => { return 'div[data-vitrine-name="Ofertas"]' }
    showcaseNewItem = () => { return 'div[data-vitrine-name="Novidades"]' }
    footer = () => { return 'footer[class="footer pure-g"]' }
    newsletter = () => { return 'input[name="email"' }
}

export default carregamentoHomeElements;
