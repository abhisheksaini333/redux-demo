export default function(state = null, action) {
    switch (action.type) {
        case "GET_FOOD_ITEMS":
            return action.payload;
        default:
            return state;
    }
}