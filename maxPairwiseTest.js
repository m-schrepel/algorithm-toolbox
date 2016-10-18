'use strict';
const test = require('tape');
const slow = slowMaxPairwiseProduct;
const fast = fastMaxPairwiseProduct;
const testArray = createTestArray();

/**
 * @param  [] array
 * @return Integer
 */
function slowMaxPairwiseProduct(arr) {
  console.time('slow');
  let product = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] * arr[j] > product) {
        product = arr[i] * arr[j];
      }
    }
  }
  console.timeEnd('slow');
  return product;
}

function fastMaxPairwiseProduct(arr) {
  console.time('fast');
  const sortedArray = arr.sort((a, b) => b - a);
  console.timeEnd('fast');
  return sortedArray[0] * sortedArray[1];
}

function createTestArray() {
  const randomArrayLength = Math.floor(Math.random() * (Math.pow(10, 5) - 2) + 2);
  let arr = [];
  for(let i = 0; i < randomArrayLength; i++) {
    arr.push(Math.floor(Math.random() * (2 * Math.pow(10, 5)) - 2) + 2);
  }
  return arr;
}

test('compare functions', {timeout: 1000}, t => {
  t.plan(3);
  t.ok(testArray.length > 1);
  t.equal(slowMaxPairwiseProduct(testArray), fastMaxPairwiseProduct(testArray));
  t.equal(slowMaxPairwiseProduct([0, 0]), fastMaxPairwiseProduct([0, 0]));
});