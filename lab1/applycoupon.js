const item = {
    "name": "Biscuits",
    "type": "regular",
    "category": "food",
    "price": 200
};

var applyCoupon = function(item){
    function discountPrice(discount){
        this.price *= (1 - discount * 0.01);
        return item;
    }
    
    return discountPrice.bind(item);
};

console.log(applyCoupon(item)(10).price);