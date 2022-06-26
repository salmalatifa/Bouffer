/* eslint-disable import/no-useless-path-segments */
import RestoDbSource from '../../data/restodb-source';
import { createRestoItemTemplate } from '../../view/templates/template-creator';
import '../../components/second-content';

const Home = {
    async render() {
        return `
        <second-content></second-content>
        </div class="restaurant">
            <h3 class="title-list ">List <span>Restaurant</span></h3>
            <hr>
            <div class="list-restaurant ">
            </div>
        </div>
      `;
    },

    async afterRender() {
        const restaurant = await RestoDbSource.getListRestaurant();

        // tampilkan restaurant di dalam DOM
        const restoContainer = document.querySelector('.list-restaurant');
        (restaurant.restaurants).forEach((data) => {
            restoContainer.innerHTML += createRestoItemTemplate(data);
        });
    },

};

export default Home;