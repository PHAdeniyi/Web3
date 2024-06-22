const numbers = [0,1,2,3,4,5,6,7,8,9];
const lowercaseLetters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
const symbols = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '=', '+', '[', ']', '{', '}', ';', ':', '"', "'", '<', '>', ',', '.', '/', '?', '|', '\\', '~', '`'];
const uppercaseLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];


let passNum = []
let passLower = []
let passSym = []
let passUpper = []
  
let len = Math.floor(Math.random() * 10) + 10

for ( let x = 0; x < len; x++){

        const randomIndex1 = Math.floor(Math.random() * numbers.length);
        passNum.push(numbers[randomIndex1]);
   
x = x+1


        const randomIndex2 = Math.floor(Math.random() * lowercaseLetters.length);
        passLower.push(lowercaseLetters[randomIndex2]);
   
x = x+1
 

        const randomIndex3 = Math.floor(Math.random() * symbols.length);
        passSym.push(symbols[randomIndex3]);
     
x = x+1


        const randomIndex4 = Math.floor(Math.random() * uppercaseLetters.length);
        passUpper.push(uppercaseLetters[randomIndex4]);

x = x+1        
}

const password = passNum.concat(passLower, passSym, passUpper)
console.log(password.join(''))