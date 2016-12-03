export function add_giftee(name) {
    return { type: 'ADD_GIFTEE', name }
};

export function remove_giftee(name) {
    return { type: 'REMOVE_GIFTEE', name }
};

export function add_gift(giftee,gift,price) {
    return { type: 'ADD_GIFT', giftee, gift, price: parseInt(price) }
};

export function remove_gift(giftee,gift, price) {
    return { type: 'REMOVE_GIFT', giftee, gift, price }
};

export function set_budget(value) {
    return { type: 'SET_BUDGET', value: parseInt(value) }
};
