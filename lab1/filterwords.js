// Using ES6
String.prototype.filterWords = function(array){
    var newString = this;
    array.forEach(word => newString = newString.replace(word, "***"));

    return newString;
};

console.log("This house is nice!".filterWords(['house', 'nice']));

