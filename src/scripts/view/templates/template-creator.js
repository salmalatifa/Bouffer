import CONFIG from "../../globals/config";
import maps from "../../../public/images/icon/map.png";
// import cocktail from "../../../public/images/other/cocktail.png"
import spoon from "../../../public/images/icon/spoon.png";


const createRestoItemTemplate = ({
    id,
    pictureId,
    name,
    city,
    description,
    rating
} = data) => `
<a href="#/detail/${id}" id="anchor">
    <div class="card">
        <div class="resto-item">
            <div class="resto-item__header">
                <img src="${CONFIG.BASE_IMAGE_URL_SMALL + pictureId}" alt="restaurant ${name} image" class="resto1">
                <div class="restoRating">
                    <p class="resto-header__rating__score">⭐️ <span>${rating}</span></p>
                </div>
            </div>
            <div class="description">
                <h3 class="name">${name}</h3>
                <h4 class="location">
                    <img src="${maps}" alt="" width="20">  ${city}
                </h4>
                <p style="color:whitesmoke;">${description.length>150?(description.slice(0,150)+'...'):''}</p>
            </div>
        </div>
    </div>
</a>
`;

const createRestoDetailTemplate = ({
    name,
    pictureId,
    address,
    city,
    rating,
    categories,
    description,
    menus,
    customerReviews
} = detail) => `
<h1 class="resto__name"> ${name} <span>Restaurant</span></h1>
<div id="detailRestoContainer">
    <div class="detailsResto">
        <div class="detail-resto">  
            <img src="${CONFIG.BASE_IMAGE_URL_MEDIUM + pictureId}" alt="foto restaurant ${name}" class="img__resto">
        </div>
        <div class="descriptResto">
            <ul class="detail-deskrip" type="none">
                <li>
                <h3 class="header3" >Detail Restaurant</h3>
                </li>
                <li>
                    <h3 class="header3__sub">Address</h3> 
                    <p>${address}, ${city}</p>
                </li>
                <li>
                    <h3 class="header3__sub">Rating</h3> 
                    <p>${rating}</p>
                </li>
                <li>
                    <h3 class="header3__sub">Categories</h3>
                    </p>
                    ${categories.map(
                        (category) => `<p class="categories">${category.name}</p>`).join('')}
                </li>
            </ul>
        </div>
    </div>
    <div class="container-des">
        <div class="detail">
            <h3 id="overview">Overview ${name}</h2>
            <p>${description}</p>
        </div>
    </div>
</div>
    
<div class="menu">
    <div class="menuList" id="menuList">
        <div id="menu-list-title">
            <p class="title__menu">Menu that fits you palatte</p>
            <img class="spoon" src="${spoon}" alt="icon spoon">
            <h1>Today’s Special</h1>
        </div>
        <div class="food">
            <div class="food__list">
                <h3 class="food__list__title" >FOOD</h2>
                <ul class="food__list__item" type="none">
                    ${menus.foods.map((food) => `<li>${food.name}</li>`).join('')}
                </ul>
            </div>
        </div>
       
        <div class="drink" id ="drink">
            <div class="drink__list">
                <h3 class="drink__list__title">DRINK</h3>
                <ul class="drink__list__item" type="none">
                    ${menus.drinks.map((drink) => `<li>${drink.name}</li>`).join('')}
                </ul>
            </div>
        </div>
    </div>

    <div id="review">
        <div class="review-list">
            ${customerReviews.map((review) =>`
                <div class="review__card">
                    <div class="identity">
                        <p id="reviewer__name">${review.name}</p>
                        <p id="reviewer__date">${review.date}</p>
                    </div>
                    <p class="reviewer__comment">${review.review} 
                    </p>
                </div> `
                )}
        </div>
    </div>
</div>
`;

const createLikeButtonTemplate = () => `
<button aria-label="like this movie" id="likeButton" class="like">
<i class="fa fa-heart-o" aria-hidden="true"></i>
</button>
`

const createLikedButtonTemplate = () => `
<button aria-label="unlike this movie" id="likeButton" class="like">
<i class="fa fa-heart" aria-hidden="true"></i>
</button>
`

const nothingToLike = () =>`<p class="nothing">Nothing Here</p>`

export { createRestoItemTemplate, createRestoDetailTemplate, createLikeButtonTemplate, createLikedButtonTemplate, nothingToLike };