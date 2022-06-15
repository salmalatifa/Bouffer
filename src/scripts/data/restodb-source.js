import API_ENDPOINT from '../globals/api-endpoint';

class RestoDbSource {
    static async getListRestaurant() {
        const response = await fetch(API_ENDPOINT.LIST);
        const responseJson = response.json();
        return responseJson;

    }

    static async detailResto(id) {
        const response = await fetch(API_ENDPOINT.DETAIL(id));
        return response.json();
    }

    // static async postRestaurantReview(id, name, review) {
    //     const Response = await fetch(API_ENDPOINT.POST_REVIEW, {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/x-www-form-urlencode',
    //             'X-Auth-Token': CONFIG.KEY
    //         },
    //         body: {
    //             id: this._id,
    //             name: this._name,
    //             review: this._review
    //         },
    //     });
    //     return Response;
    // }


}

export default RestoDbSource;