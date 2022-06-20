import RestoDbSource from "../../data/restodb-source";
import { createRestoItemTemplate } from "../../view/templates/template-creator";

const Home = {
    async render() {
        return `
        <div class="searchBox"> 
            <div class="container-search">      
                <form>
                    <input type="search" id="search" placeholder="Search Restaurant ..." />
                </form>
            </div> 
        </div>

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
        // tampilkan movies di dalam DOM
        const restoContainer = document.querySelector('.list-restaurant');
        (restaurant.restaurants).forEach((data) => {
            restoContainer.innerHTML += createRestoItemTemplate(data)
        })

    },
};

export default Home;