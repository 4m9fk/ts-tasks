export const productOfPrimes = function (value: number):boolean {
    for (let i= 1; i<value; i++ ) {
        if ( isPrime(i) && value%i==0 && isPrime(value/i) )
			return true;
	else return false;
    }
}

const isPrime = (num:number) => {
    for (var i = 2; i < num; i++)
	{
		if (num%i == 0) return false;
	}
	return true;
}

console.log(productOfPrimes(12));
console.log(productOfPrimes(25));
console.log(productOfPrimes(4));