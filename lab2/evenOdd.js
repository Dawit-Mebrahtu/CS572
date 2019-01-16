Array.prototype.even = function(){
    setImmediate(() => {
        var result = this.filter(n => n % 2 === 0);
        console.log(result);
    });
    
};

Array.prototype.odd = function(num){
    setImmediate(() => {
        var result = this.filter(n => n % 2 !== 0);
        console.log(result);
    });
};

console.log('start');
[1, 2, 3, 4, 5, 6, 7, 8].even();
[1, 2, 3, 4, 5, 6, 7, 8].odd();
console.log('end');

