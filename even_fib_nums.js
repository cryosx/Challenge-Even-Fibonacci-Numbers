/**
 * Return the total sum of all even fibonacci numbers up to and including
 * the value given to you at `maxFibValue`
 *
 * @param  {Number} maxFibValue
 * @return {Number} sum
 */

function _sumFibs(maxFibValue) {
  var sum = 0;

  // do your work here
  let fib = getFib(maxFibValue)['fibSeq'];
  fib.forEach(function(elem) {
    if (elem % 2 === 0) {
      sum += elem;
    }
  });
  return sum;
}

// bonus round
function _highestFibonacciNumber(maxFibValue) {
  var highest = 0;

  //define your base case, validate your input

  //do your work here
  let fib = getFib(maxFibValue)['fib'];
  highest = fib;
  return highest;
}

function getFib(num) {
  let fibSeq = [0, 1];
  let prevFib = 0;
  let currFib = 1;
  if (num === 0) {
    return {
      fib: 0,
      fibSeq: [0]
    };
  }
  if (num === 1) {
    return {
      fib: 1,
      fibSeq: [0, 1, 1]
    };
  }
  while (currFib < num) {
    let temp = currFib;

    currFib = currFib + prevFib;
    if (currFib <= num) {
      fibSeq.push(currFib);
    }

    prevFib = temp;
  }
  if (currFib > num) {
    return {
      fib: prevFib,
      fibSeq: fibSeq
    };
  } else {
    return {
      fib: currFib,
      fibSeq: fibSeq
    };
  }
}

/**
 * Do not modify code below.
 * You must be at least level 10 to understand.
 */
module.exports = {
  sumFibs: _sumFibs,
  highestFibonacciNumber: _highestFibonacciNumber
};
