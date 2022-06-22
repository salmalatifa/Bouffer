import RestoDbSource from "../data/restodb-source"

const PostReview = (uri, name, review) => {
    const dataInput = {
        id: uri.id,
        name,
        review
    }
    RestoDbSource.addReview(dataInput);

    const reviewList = document.getElementsByClassName('review-list');
    const options = { year: 'numeric', month: 'long', day: 'numeric', weekday: 'long' };
    const date = new Date().toLocaleDateString('id-ID', options);
    const newReview = `
        <div class="review__card">
            <div class="identity">
                <p id="reviewer__name">${name}</p>
                <p id="reviewer__date">${date}</p>
            </div>
                <p class="reviewer__comment">${review}</p> 
        </div>
    `
    reviewList.innerHTML += newReview;
}

export default PostReview;