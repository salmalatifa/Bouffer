import FavoriteRestoIdb from "../../data/favorite-resto-idb";
import { createRestoItemTemplate, nothingToLike } from "../templates/template-creator";

const Favorite = {
    async render() {
        return `
        </div class="restaurant">
            <h3 class="title-list ">List <span>Your Favourite </span>Restaurant</h3>
            <hr>
            <div class="list-restaurant ">
            </div>
        </div>
      `;
    },

    async afterRender() {
        const resto = await FavoriteRestoIdb.getAllResto();
        const restoContainer = document.querySelector('.list-restaurant');

        resto.forEach((data) => {
            restoContainer.innerHTML += createRestoItemTemplate(data);
        })
    },


};

export default Favorite;