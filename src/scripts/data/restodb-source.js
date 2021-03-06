import API_ENDPOINT from '../globals/api-endpoint';

class RestoDbSource {
  static async getListRestaurant() {
    const response = await fetch(API_ENDPOINT.LIST);
    const responseJson = response.json();
    return responseJson;
  }

  static async detailResto(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    const responseJson = response.json();
    return responseJson;
  }

  static async addReview(review) {
    const response = await fetch(API_ENDPOINT.POST_REVIEW, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(review),
    });
    const data = await response.json();
    return data;
  }
}

export default RestoDbSource;
