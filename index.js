exports.decompose_number = (req, res) => {
	const number = req.query.number;
	if (!number) {
		res.send("Please, define a number for decomposing so as url looks like this: 'http://localhost:8080/?number=3000'");
	} else {
		res.send(`Number ${number} is decomposed into prime numbers: ${decompose(number)}`);
	}
};

exports.is_prime = is_prime = (number) => {
	if (number <= 1){
		return false;
	}
	for (var i = 2; i <= Math.sqrt(number); i++){
		if (number % i == 0){
			return false;
		}
	}
	return true;
}

exports.decompose = decompose = (number) => {
	var divisors = []
	var divisor = 2;
	var dividend = number;

	while (dividend > 1){
		while(dividend % divisor == 0){
			divisors.push(divisor);
			dividend = dividend / divisor;
		}
		divisor += 1;
	}

	return divisors;
}