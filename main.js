 function init () {
	balanceDisplay.textContent = '$' +  TotalBalance;
}


var TotalBalance 	= 5000,
	balanceDisplay	= document.querySelector('.cash'),
	betValue 		= document.querySelector('.betValue'),
	rollBtn 		= document.querySelector('.roll')
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
	console.log(result, r)

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
	var betNum = document.querySelector('.bet').value;

	if (count(getResult()) === count(betNum)) {
 		console.log('vitória');
 	}

 	else if (count(getResult()) !== count(betNum)){
 		console.log ('derrota');
 	}
}

rollBtn.addEventListener('click', function() {
	rollet();
	//bet();
})