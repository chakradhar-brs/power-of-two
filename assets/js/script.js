
function isPowerOfTwo(n) {
    if (n <= 0) {
      return false;
    }
    return (n & (n - 1)) === 0;
  }
  
  function checkPowerOfTwo() {
    const inputNumber = parseInt(document.getElementById("inputNumber").value);
    const resultElement = document.getElementById("result");
  
    if (isNaN(inputNumber)) {
      resultElement.textContent = "Please enter a valid integer.";
      return;
    }
  
    if (isPowerOfTwo(inputNumber)) {
      resultElement.textContent = `${inputNumber} is a power of two. True`;
    } else {
      resultElement.textContent = `${inputNumber} is not a power of two. False `;
    }
  }
  