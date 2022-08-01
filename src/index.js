module.exports = function check(str, bracketsConfig) {
  
  const objBrackets = {};
  const openBrackets = [];
  
  let stack = [];
  let arrFromStr = Array.from(str);  

  bracketsConfig.forEach(elem => {
    openBrackets.push(elem[0]);
  })

  bracketsConfig.forEach((elem) => {
    objBrackets[elem[1]]= elem[0];
  })

  arrFromStr.forEach(currentSymbol => {
    if (openBrackets.includes(currentSymbol) && !(Object.keys(objBrackets).includes(currentSymbol))) {
      stack.push(currentSymbol);
    }
    else {
      if (stack.length === 0) return false;
      if (objBrackets[currentSymbol] === stack[stack.length -1]) stack.pop();
      else return false;
    }
  })
  
  if (stack.length === 0) return true;
  else return false;
}
