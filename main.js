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

function toColor(x, fill) {
	let result = count(x);

	if (result == 'even') {
		fill.classList.add('background-black');
		fill.classList.remove('background-red');
		fill.classList.remove('background-green');
	}
	else if (result == 'odd') {
		fill.classList.add('background-red');
		fill.classList.remove('background-black');
		fill.classList.remove('background-green');
	}
	else if (result == 'neutral') {
		fill.classList.add('background-green');
		fill.classList.remove('background-red');
		fill.classList.remove('background-black');
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
	
	if (balls.length >= 10 ) {
		balls[0].remove();
	}
	toColor(ball.textContent, ball);
}

rollBtn.addEventListener('click', function() {
	bet();
	toColor(getResult(), resultBox);
	betReturn();
	createHistoric();
})