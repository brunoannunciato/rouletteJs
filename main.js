 function init () {
	balanceDisplay.textContent = '$' +  TotalBalance;
}


var TotalBalance 	= 5000,
	balanceDisplay	= document.querySelector('.cash'),
	betValue 		= document.querySelector('.betValue'),
	rollBtn 		= document.querySelector('.roll'),
	resultDisplay 	= document.querySelector('.result');
	

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

function rollet() {
	var r = getResult();
	var result = count(r);

	if (result == 'even') {
		resultDisplay.classList = 'result background-black';
	}
	else if (result == 'odd') {
		resultDisplay.classList = 'result background-red';
	}
	else if (result == 'neutral') {
		resultDisplay.classList = 'result background-green';
	}
}

function bet() {
	var betNum = document.querySelector('.bet').value,
		resultDisplayValue = parseInt(document.querySelector('.result').textContent);

	if (count(resultDisplayValue) === count(betNum)) {
 		if (resultDisplayValue == betNum) {
			 console.log('Win x4')
		 } else {
			 console.log('Win x2')
		 }
 	}

 	else if (count(resultDisplayValue) !== count(betNum)){
 		console.log ('Default');
 	}
}

rollBtn.addEventListener('click', function() {
	rollet();
	bet();
})