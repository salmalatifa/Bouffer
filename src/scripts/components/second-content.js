import relax from '../../public/images/other/ngafe.jpg';

customElements.define(
  'second-content',
  class extends HTMLElement {
    connectedCallback() {
      this.render();
    }

    render() {
      this.innerHTML = `
<div id="second-content-container">
    <div class="left-second-content">
        <img src="${relax}" alt="A Girl reading book with coffee in front of her" class="relax" >
    </div>
    <div class="right-second-content ">
        <h3>Relax or work in restaurant </h3>
        <p id="relax-desc">The restaurant is a gathering place for friends, family, relatives, and friends. Here we often share stories, laugh together, play games together, and take a break from our busy careers. Restaurants are also a place where we find inspiration
            and new friends. Through BOUFFER we can see the restaurant we want and according to its character. This app provides you with the best and up-to-date restaurant recommendations, regardless of age. With BOUFFER we can get it all
            in one hand.</p>
    </div>
</div>
`;
    }
  }
);
