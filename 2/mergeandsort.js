// https://en.wikipedia.org/wiki/Merge_sort

const mergeSortRecursion = (unsortedArray) => {
  // There's no need to split/merge if there's only one element
  if (unsortedArray.length <= 1) {
    return unsortedArray;
  }

  // Now we divide the array in half
  // We first need to find the middle point of the array, so we use Math.floor
  const midPoint = Math.floor(unsortedArray.length / 2);

  // Now we get the left and right part of the array

  const leftArr = unsortedArray.slice(0, midPoint);
  const rightArr = unsortedArray.slice(midPoint);

  // Now we merge the two arrays using recursion to keep finding the left and right array.

  return mergeTwoArrays(
    mergeSortRecursion(leftArr),
    mergeSortRecursion(rightArr)
  );
};

const mergeTwoArrays = (leftArr, rightArr) => {
  // We first make an array where we push the values into from both arrays.
  let resultArray = [];

  // We also make two more indexes keeping track of the position of the left and right array

  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < leftArr.length && rightIndex < rightArr.length) {
    if (leftArr[leftIndex] < rightArr[rightIndex]) {
      resultArray.push(leftArr[leftIndex]);
      leftIndex++;
    } else {
      resultArray.push(rightArr[rightIndex]);
      rightIndex++;
    }
  }

  if (leftArr[leftIndex]) {
    var unaddedElements = leftArr.slice(leftIndex);
    resultArray.push(...unaddedElements);
  } else {
    var unaddedElements = rightArr.slice(rightIndex);
    resultArray.push(...unaddedElements);
  }

  return resultArray;
};

let array = [1, 20, 12, 65, 22, 0.2, 98];

console.log(mergeSortRecursion(array));
