var randomNumber = function () {
	return Math.floor(Math.random()*255)
}

//mixin to change a random dancer's color
var changeDancerColor = function(dancer) {
	var hue = 'rgb(' + randomNumber() + ','
                     + randomNumber() + ','
                     + randomNumber() + ')';
	dancer.moneyMaker.css('border-color', hue);
}
