import UrlParser from "../../routes/url-parser";
import RestoDbSource from "../../data/restodb-source";
import { createRestoDetailTemplate } from "../templates/template-creator";

const Detail = {
    async render() {
        return `
        <div class="container" id="detail">
            <div class="detail-page" id="detail-page"></div>
        </div>
      `;
    },

    async afterRender() {
        const url = UrlParser.parseActiveUrlWithoutCombiner();
        const itemResto = await RestoDbSource.detailResto(url.id);
        const restoContainer = document.querySelector('#detail-page');
        restoContainer.innerHTML = createRestoDetailTemplate(itemResto);

    },
};

export default Detail;