 function init () {
	moneyDisplay.textContent = money;
}


var money 	=  5000,
	moneyDisplay	= document.querySelector('.cash'),
	valueToBet 		= document.querySelector('.betValue'),
	rollBtn 		= document.querySelector('.roll'),
	resultBox		= document.querySelector('.result-box'),
	resultDisplay 	= document.querySelector('.result'),
	historic 		= document.querySelector('.historic'),
	hist			= [];
	

function getResult() {
	var	result =  Math.floor(Math.random() * 37);
	resultDisplay.textContent = result;
	return parseInt(result);
}

function count(num) {	
	if (num % 2 == 0 && num != 0) {
		return 'even';
	} 
	else if (num % 2 != 0){
		return 'odd';
	}
	else {
		return 'neutral';
	}
}

function fillColor() {
	var r = getResult();
	var result = count(r);

	if (result == 'even') {
		resultBox.classList = 'result-box background-black';
	}
	else if (result == 'odd') {
		resultBox.classList = 'result-box background-red';
	}
	else if (result == 'neutral') {
		resultBox.classList = 'result-box background-green';
	}
}

function betResult() {
	var betNum = document.querySelector('.bet').value,
		resultDisplayValue = parseInt(document.querySelector('.result').textContent),
		betValue = document.querySelector('.betValue').value,
		cash = document.querySelector('.cash').textContent;

	if (count(resultDisplayValue) === count(betNum)) {
		if (resultDisplayValue == 0) {
			return 'wx16'
		} 
		else if (resultDisplayValue == betNum) {
			 return 'wx4'
		 } else {
			 return 'wx2'
		 }
 	}	else if (count(resultDisplayValue) !== count(betNum)){
		 return 'lose'
 	}
}

function bet() {
	var cash = parseInt(document.querySelector('.cash').textContent),
		betValue = parseInt(document.querySelector('.betValue').value);

	if (betValue > cash) {
		alert('Está apostando mais do que tem.');
		return false;
	}
	else {
		document.querySelector('.cash').textContent = cash - betValue;
	}
}

function betReturn() {
	var betValue = parseInt(document.querySelector('.betValue').value),
	cash = parseInt(document.querySelector('.cash').textContent);

	switch (betResult()) {
		case 'lose':
			document.querySelector('.cash').textContent = cash;

			if (cash <= 0) {
				alert('Sai da mesa');
				window.location = window.location.href;
			}
		break;

		case 'wx16':
			cash += (betValue * 16);
			document.querySelector('.cash').textContent = cash;
		break;

		case 'wx4':
			cash += (betValue * 4);
			document.querySelector('.cash').textContent = cash;
		break;

		default:
			cash += (betValue * 2);
			document.querySelector('.cash').textContent = cash;
		break;
	}
}

function createHistoric() {
	var lastResult = resultDisplay.textContent,
		ball = document.createElement('div');
		
	ball.classList.add('ball-wrapper');
	ball.textContent = lastResult;
	
	var balls = document.querySelectorAll('.ball-wrapper');

	historic.appendChild(ball);

	if (balls.length >= 10) {
		balls[0].remove();
	}

	console.log(balls);
}

rollBtn.addEventListener('click', function() {
	bet();
	fillColor();
	betReturn();
	createHistoric();
})