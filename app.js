

//Square(n) Sum
function squareSum(numbers){
    return numbers.map(num => num**2).reduce((sum,square) => sum + square, 0);
  }

//Remove First and Last Character
  function removeChar(str){
    return str.slice(1, -1)
   
   };
//String repeat

   function repeatStr (n, s) {
    if(n <= 0){
     return ''; 
    }
    return s.repeat(n)
  }


//Opposite number
  function opposite(number) {
    if(number > 0){
      return -number;
    }else{
      return -number
    }
  }

//Convert boolean values to strings 'Yes' or 'No'.

  function boolToWord( bool ){
    if(bool){
      return "Yes"
    }else{
      return "No"
    }
  }

//Return Negative


  function makeNegative(num) {
    if(num === 0){
      return 0;
    }
    return num > 0 ? -num : num;
  }

  
//Reversed Strings

  function solution(str){
    return str.split('').reverse().join('')
  }
  
  
  console.log(solution("hello"));

//Convert a Number to a String!
  function numberToString(num) {
    return String(num)
  }
  console.log(numberToString(67))