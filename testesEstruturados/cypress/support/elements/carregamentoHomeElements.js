/// <reference types="Cypress" />

class carregamentoHomeElements{
    //Showcase
    showcase = () => {return '.slideshow'}
    //Banner
    banner = () => {return 'img[class="banner-vacinas-img"]'}
    //NavBar
    navBar = () => {return '.container-content'}
    subNavBar1 = () => {return 'a[title="Bem Panvel"]'}
    subNavBar2 = () => {return 'a[title="Ofertas"]'}
    subNavBar3 = () => {return 'a[title="Entrega Gratis"]'}
    subNavBar4 = () => {return 'a[title="Click & Retire"]'}
    subNavBar5 = () => {return 'a[title="Receba em até 120 minutos"]'}
    subNavBar6 = () => {return 'a[title="12x sem juros"]'}
    //Showcase - On Sale
    showcaseOnSale = () => {return 'div[data-vitrine-name="Ofertas"]'}
    //Showcase - New Items
    showcaseNewItem = () => {return 'div[data-vitrine-name="Novidades"]'}
    //Footer
    footer = () => {return 'footer[class="footer pure-g"]'}
    //Newsletter
    newsletter = () => {return 'input[name="email"]'}
    //Search
    search = () => {return '[name = search]'}
    //Basket
    basket = () => {return 'ADICIONAR À CESTA'}
    
}

export default carregamentoHomeElements;