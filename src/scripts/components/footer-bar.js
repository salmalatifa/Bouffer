customElements.define('footer-bar', class extends HTMLElement {
    connectedCallback() {
        this.render()
    };

    render() {
        this.innerHTML = `
        <footer>
            <p>Copyright &copy; 2022 - BOUFFER</p>
        </footer>`
    }
})