import NotificationHelper from "./notification-helper";
import CONFIG from "../globals/config";

const WebSocketInitiator = {
    init(url) {
        const webSocket = new WebSocket(url)
        webSocket.onmessage = this._onMessageHandler()
    },

    _onMessageHandler(message) {
        const restaurant = JSON.parse(message.data)
        console.log(restaurant);
        NotificationHelper.sendNotification({
            title: `${restaurant.name} is a new restaurant!`,
            options: {
                body: restaurant.description,
                image: `${CONFIG.BASE_IMAGE_URL_MEDIUM + restaurant.pictureId}`,
            }
        });
    }
};
export default WebSocketInitiator;