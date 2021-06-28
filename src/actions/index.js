

export function getFoodItems() {
    return {
        type: "GET_FOOD_ITEMS",
        payload: [
            { id: 1, name: 'Pizza' },
            { id: 2, name: 'Burger' },
            { id: 3, name: 'Garlic Bread' }
        ]
    }
}