const atm = n => {
    let num = n;
    let hundred = Math.floor(num / 100);
    let rest = num % 100;
    let fifty = Math.floor(rest / 50);
    rest %= 50; // rest = rest % 50
    let twenty = Math.floor(rest / 20);
    rest = rest % 20;
    let ten = Math.floor(rest / 10);
    console.log(`When I withdraw ${num} i will get: \n ${hundred} - times hundred \n ${fifty} - times fifty \n ${twenty} - times twenty and \n ${ten} - times ten`);
}

atm(480);

// number - (hundred * 100)