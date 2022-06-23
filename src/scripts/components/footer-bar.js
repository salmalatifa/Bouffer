customElements.define('footer-bar', class extends HTMLElement {
    connectedCallback() {
        this.render()
    };

    render() {
        this.innerHTML = `
        <div id="footer">
            <p id="footer__content">Copyright &copy; 2022 - BOUFFER</p>
        </div>`
    }
})