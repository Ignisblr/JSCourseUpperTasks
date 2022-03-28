const num = 266219;
const numsArray = num.toString().split('');

let result = parseInt(numsArray[0]);

numsArray.forEach((letter, i) => {

    if (i === numsArray.length - 1) return
    else {

        if (i === 0) {

            console.log(result);
        }

        result *= numsArray[i + 1];
        console.log(result);
    }
});

console.log('Result in pow 3', resultInPow = result*result*result);
console.log('First two numbers of result in pow 3', String(resultInPow).slice(0,2));
