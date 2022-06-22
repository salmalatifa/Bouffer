import UrlParser from "../../routes/url-parser";
import RestoDbSource from "../../data/restodb-source";
import { createRestoDetailTemplate, createLikeButtonTemplate, nothingToLike } from "../templates/template-creator";
import LikeButtonInitiator from "../../utils/like-button-initiator";

const Detail = {
    async render() {
        return `
        <div id="detailPage">
        <div class="container" id="detail">
            <div class="detail-page" id="detail-page"></div>
        </div>
            <div class="formContainer">
                <div class="form-content">
                    <p>Feedback is our love language</p>
                    <form>                
                        <input for="inputName" type="text" class="form-control" id="inputName" aria-label="input your name" placeholder="Full Name">               
                        <input for="inputReview" type="text" class="form-control" id="inputReview" aria-label="input your review" placeholder="Your Story about This Place">   
                    </form>
                    <button id="submit-review" type="submit" class="btn" id="btn" aria-label="submit review">Submit</button>
                </div>
            </div>

            <div id="likeButtonContainer"></div> 
       </div>
      `;
    },

    async afterRender() {
        const url = UrlParser.parseActiveUrlWithoutCombiner();
        const restaurants = await RestoDbSource.detailResto(url.id);
        const restoContainer = document.querySelector('#detail-page');
        restoContainer.innerHTML = createRestoDetailTemplate(restaurants.restaurant);

        LikeButtonInitiator.init({
            likeButtonContainer: document.querySelector('#likeButtonContainer'),
            resto: {
                id: restaurants.restaurant.id,
                name: restaurants.restaurant.name,
                description: restaurants.restaurant.description,
                pictureId: restaurants.restaurant.pictureId,
                rating: restaurants.restaurant.rating,
                city: restaurants.restaurant.city
            }
        })
    },
};

export default Detail;