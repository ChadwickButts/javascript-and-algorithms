// class Base {}
// class Good extends Base {}
// class AlsoGood extends Base {
//   constructor() {
//     return {a: 5};
//   }
// }
// class Bad extends Base {
//   constructor() {}
// }

// new Good();
// new AlsoGood();
// new Bad(); // ReferenceError


 function getArtisticPhotographCount(N, C, X, Y) {
  // Write your code here
  let posMap = new Map();
  let count = 0;

  if (N < 3) {
    return 0;
  }
  
  for (let i in C) {
    let ch = C.charAt(i);
    if (ch === ".") {
      continue;
    }
    else if (posMap.has(ch)) {
      posMap.get(ch).push(i);
    } else {
      posMap.set(ch, [i]);
    }
  }

  if (!posMap.has("B") || !posMap.has("A") || !posMap.has("P")) {
    console.log(count);
    return 0;
  }
  
  for (let i of posMap.get("B")) {
    for (let j of posMap.get("A")) {
      for (let k of posMap.get("P")) {
        i = parseInt(i);
        j = parseInt(j);
        k = parseInt(k);

        if (i > j && k > j) {
          break;
        }
        else if (i < j && k < j) {
          continue;
        } else {
          console.log(k, j, i);
          let distancePA = Math.abs(i-j);
          let distanceAB = Math.abs(j-k);
          
          if (X <= distancePA && distancePA <= Y) {
            if (X <= distanceAB && distanceAB <= Y) {
              count++;
            }
          }
        }
        
        
      }
    }
  }
  
  return count;
}

//getArtisticPhotographCount(12, "PPPPB.A.A.BP", 1,5);


let roster = {
  Richard: 25,
  Will: 83,
  unassigned: [23,55,29]
}

let getNumber = function(...availableNums) {
  console.log(this.Richard);
  console.log(availableNums);
}

//getNumber.apply(roster, roster.unassigned);
//getNumber.call(roster, ...roster.unassigned);


function swapNums(arr, a, b) {
    arr[a] = arr[a] + arr[b];
    arr[b] = arr[a] - arr[b];
    arr[a] = arr[a] - arr[b];
}

function maxHeapify(arr, i, heapsize) {
  let l = 2*i + 1;
  let r = 2*i + 2;
  let largest;


  if (l < heapsize && arr[l] > arr[i]) {
    largest = l;
  } else {
    largest = i;
  }

  if (r < heapsize && arr[r] > arr[largest]) {
    largest = r;
  } 

  if (largest !== i) {
    swapNums(arr, i, largest);
    maxHeapify(arr, largest, heapsize);
  }
}

let array = [16,4,10,14,7,9,3,2,8,1];
//maxHeapify(array, 1, array.length);

function buildMaxHeap(arr) {
  for (let i = Math.floor(arr.length/2); i > -1; i--) {
    maxHeapify(arr, i, arr.length);
  }
  console.log("Heap Built: ");
  console.log(arr);
}

array = [4,1,3,14,16,9,10,2,8,7];
//buildMaxHeap(array);


function heapsort(arr, heapsize) {
  buildMaxHeap(arr);

  console.log("Sorting Heap: ")
  for (let i = heapsize - 1; i > 0; i--) {
    swapNums(arr, 0, i);
    maxHeapify(arr, 0, i);
  }
  console.log(arr);
}

//heapsort(array, array.length);


function countPalindromes(s) {
  let count = 0;
  let palindromes = [];
      
  for (let i = 0; i < s.length; i++) {
      let left = i-1;
      let right = i+1;

      // count i as palindrome
      count++;
      palindromes.push(s.charAt(i));

      if (s.charAt(i) === s.charAt(right)) {
        count++;
        palindromes.push(s.substring(i, right+1));
      }
      
      while (left > -1 && right < s.length) {
          if (s.charAt(left) === s.charAt(right)) {
            count++;
            palindromes.push(s.substring(left, right+1));
            left--;
            right++;
          } else {
            break;
          }
      }
  }

  console.log(palindromes);
  console.log(count);
  return count;
}


let s = "rarcecaar";
countPalindromes(s);
