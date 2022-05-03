
//Easy 2 Jalynn
function checkPrime(numArray) {
    const primeNumber = numArray.filter(output => {
        if (output <= 1) {
            return false;
        } else {
            for (let i = 2; i < output; i++) {
                if (output % i == 0) {
                    return false;
                }
            }
            return true;
        }
    });
    console.log(`Prime number array:`, primeNumber);
};

checkPrime([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

//Medium 2 Jalynn

function anagram(x, z) {
    let len1 = x.length;
    let len2 = z.length;
    if(len1 !== len2){
       console.log('Invalid Input');
       return
    }
    let str1 = x.split('').sort().join('');
    let str2 = z.split('').sort().join('');
    if(str1 === str2){
       console.log("True");
    } else { 
       console.log("False");
    }
 }
 anagram("children","nerdlihc")


//Medium 4 Jalynn

