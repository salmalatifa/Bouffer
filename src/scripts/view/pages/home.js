/* eslint-disable import/no-useless-path-segments */
import RestoDbSource from '../../data/restodb-source';
import { createRestoItemTemplate } from '../../view/templates/template-creator';
import '../../components/second-content';
import displayLoading from '../../utils/load-page';

const Home = {
    async render() {
        return `
        <second-content></second-content>
        </div class="restaurant">
            <h3 class="title-list ">List <span>Restaurant</span></h3>
            <hr>
            <div id="loading"></div>
            <div class="list-restaurant ">
            </div>
        </div>
      `;
    },

    async afterRender() {
        const restaurant = await RestoDbSource.getListRestaurant();
        const restoContainer = document.querySelector('.list-restaurant');
        const loader = document.querySelector('#loading');
        displayLoading(loader);
        (restaurant.restaurants).forEach((data) => {
            setTimeout(() => {
                restoContainer.innerHTML += createRestoItemTemplate(data);
                loader.remove();
            }, 500);
        });
    },
};

export default Home;