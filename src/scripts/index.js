import 'regenerator-runtime';
import '../styles/main.css';
import '../styles/responsive.css';
import icon from '../public/images/icon/favicon.ico';
import logo from '../public/images/logo/logo-light.png';
import App from './view/app';
import swRegister from './utils/sw-register';

window.addEventListener('load', () => {
    document.querySelector('.logo').setAttribute('src', logo);
    document.querySelector('.icon').setAttribute('href', icon);
});

const app = new App({
    button: document.querySelector('#menu'),
    drawer: document.querySelector('.navListContainer'),
    content: document.querySelector('.main-content'),
});

window.addEventListener('hashchange', () => {
    app.renderPage();
});

window.addEventListener('load', () => {
    app.renderPage();
    swRegister();
});