customElements.define('hero-element', class extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <div class="containerHero" id="bouffer">
    <div class="hero" id="hero"></div>
    <div class="hero__inner">
        <h1 class="hero__title">The key to Fine dining </h1>
        <p class="hero__tagline">Vous pouvez voir la salle de chaque restaurant que vous souhaitez visiter. Choisissez votre endroit préféré pour sortir et déguster de délicieux plats avec vos proches. </p>
    </div>
</div>`
    }
})