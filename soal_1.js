function angkaPrima(num) {
    if (num <= 1) {
        return false;
    }
    if (num === 2) {
        return true;
    }
    if (num % 2 === 0) {
        return false;
    }
    for (let i = 3; i <= Math.sqrt(num); i += 2) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

function printPrimesInRange() {
    for (let num = 1; num <= 1000; num++) {
        if (angkaPrima(num)) {
            console.log(num);
        }
    }
}

// Call the printPrimesInRange function to print prime numbers within the defined range
printPrimesInRange();
