customElements.define('app-bar', class extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML =
            `<nav class="nav" id="nav">
    <div class="logo-apps">
        <a href="#bouffer">
            <div class="div"><img src="" alt="Logo" class="logo"></div>
        </a>
    </div>
    <div class="drawer">
        <button id="menu" class="hamburgerButton">☰</button>
    </div>
    <div class="navListContainer">
        <ul class="nav-list">
            <li class="nav-item"><a href="#/home" class="nav-link">Home</a></li>
            <li class="nav-item"><a href="#/favorite" class="nav-link">Favorite</a></li>
            <li class="nav-item"><a href="https://www.linkedin.com/in/salma-lathifah-b945651aa" class="nav-link">About Us</a></li>
        </ul>
    </div>
</nav>
`
    }
})