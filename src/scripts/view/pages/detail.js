/* eslint-disable import/no-cycle */
/* eslint-disable no-alert */
import UrlParser from '../../routes/url-parser';
import RestoDbSource from '../../data/restodb-source';
import { createRestoDetailTemplate } from '../templates/template-creator';
import LikeButtonInitiator from '../../utils/like-button-initiator';
import PostReview from '../../utils/review-poster';
import displayLoading from '../../utils/load-page';

const Detail = {
    async render() {
        return `
        <div id="detailPage">
            <div class="container" id="detail">
            <div id="loading"></div>
                <div class="detail-page" id="detail-page"></div>
            </div>
            <div class="formContainer">
                <div class="form-content">
                    <h2 style="text-align: center;">Feedback is our love language</h2>
                    <form id="formReview">                
                        <input type="text" class="form-control" id="inputName" aria-label="input your name" placeholder="Your Full Name">                         
                    </form>
                    <input form="formReview" name="restoreview" type="text" class="form-control" id="inputReview" aria-label="input your review" placeholder="Your Story about This Place"></input>                    
                    <button type="submit" value="Submit" class="btn" id="submit-review" aria-label="submit your review">Share Mine</button>
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
        const loader = document.querySelector('#loading');
        displayLoading(loader);
        setTimeout(() => {
            restoContainer.innerHTML += createRestoDetailTemplate(restaurants.restaurant);
            loader.remove();
        }, 500);

        LikeButtonInitiator.init({
            likeButtonContainer: document.querySelector('#likeButtonContainer'),
            resto: {
                id: restaurants.restaurant.id,
                name: restaurants.restaurant.name,
                description: restaurants.restaurant.description,
                pictureId: restaurants.restaurant.pictureId,
                rating: restaurants.restaurant.rating,
                city: restaurants.restaurant.city,
            },
        });

        const btnSubmit = document.querySelector('.btn');
        const nameInput = document.querySelector('#inputName');
        const reviewInput = document.querySelector('#inputReview');

        btnSubmit.addEventListener('click', (e) => {
            e.preventDefault();
            if (nameInput.value === '' || reviewInput.value === '') {
                alert('Please fill in all the fields');
                nameInput.value = '';
                reviewInput.value = '';
            } else if (nameInput.value.length > 200 || reviewInput.value.length > 200) {
                alert('Max character must 200 characters');
                nameInput.value = '';
                reviewInput.value = '';
            } else {
                // eslint-disable-next-line no-undef
                PostReview(url, nameInput.value, reviewInput.value);
                nameInput.value = '';
                reviewInput.value = '';
            }
        });
    },
};

export default Detail;