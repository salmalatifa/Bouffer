import CONFIG from "../../globals/config";
import maps from "../../../public/images/icon/map.png";
import cocktail from "../../../public/images/other/cocktail.png"
import like from "../../../public/images/icon/like.png";
import unlike from "../../../public/images/icon/unlike.png";


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
        <div>
            <img src="${CONFIG.BASE_IMAGE_URL_MEDIUM + pictureId}" alt="restaurant ${name} image" class="resto1">
            <div class="restoRating">
                <p>⭐️ <span class="resto__header__rating__score">${rating}</span></p>
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
</a>`;

const createRestoDetailTemplate = (detail) => `
<div class="picture-descript">
    <div class="picture">
        <img src="${CONFIG.BASE_IMAGE_URL_LARGE + detail.pictureId}" alt="${detail.name}" class="img">
    </div>
    <div class="descript-menu">
        <ul class="detail-deskrip">
            <li>
                <h2 class="header2">Restaurant Name 
                <br>${detail.name}</span></h2>
            </li>
            <li>
                <h2 class="header2"><span>Address 
                <br>${detail.address}, ${detail.city}</span></h2
            ></li>
            <li>
                <h2 class="header2"><span>Rating : ${detail.rating}</span></h2>
            </li>
            <li>
                <h2 class="header2">Categories</h2>
                ${detail.categories.forEach((category) =>`<h2 class="categories">${category.name}</h2>`).join('')};
            </li>
        </ul>
    </div>
</div>

<div class="menu">
    <div class="container-des">
    <div class="detail">
        <h1>Overview ${detail.name}</h1>
        <p>${detail.description}</p>
    </div>
</div>

<div class="menu-list">
    <div class="food">
        <div class="food-list">
            <h2 class="header2" >FOOD</h2>
            <ul class="list">
                ${detail.menus.foods.forEach((food) => `<li>${food.name}</li>`).join('')}
            </ul>
        </div>
    </div>

    <div class="picture-menu-container"> 
        <img src="${cocktail}" alt="food" class="picture-food">
    </div>

    <div class="drink-list">
        <h2 class="header2">DRINK</h2>
        <ul class="list">
        ${detail.menus.drinks.forEach((drink) => {`<li>${drink.name}</li>`}).join('')}
        </ul>
    </div>
</div>
`;

const createLikeButtonTemplate = () => `
  <button aria-label="like this resto" id="likeButton" class="like">
  <i aria-hidden="true"><img src="${unlike}" alt="icon-like"></i>
  </button>
`

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this resto" id="likeButton" class="like">
  <i aria-hidden="true"><img src="${like}" alt="icon-unlike"></i>
  </button>
`

export { createRestoItemTemplate, createRestoDetailTemplate, createLikeButtonTemplate, createLikedButtonTemplate };