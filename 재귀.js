// 재귀 01번
function sumTo(num) {
    if(num === 0) {
      return 0;
    } 
    return num + sumTo(num - 1)
    //입출력: number => number
    //base case: sumTo(1) =>  1
    //recursive case: sumTo(n) => n + sumTo(n-1)
  }
// 재귀 02번
function isOdd(num) {
    if(num === 1) {
      return true;
    } else if(num === 0) {
      return false;
    }
    return num > 0 ? isOdd(num - 2) : isOdd(num + 2);
    // 입출력: number => boolean 홀수인지 여부 판단
    // base case: 1이 남으면 true, 0이면 false
    // recursive case: isOdd(num - 2)
  }
  //재귀 03번
  function factorial(num) {
    if(num === 0) {
      return 1;
    }
    return num * factorial(num - 1);
    //입출력: number => number
    //base case: factorial(1) => 1
    //recursive case: num * factorial(num - 1)
  }
  //재귀 04번
  function fibonacci(num) {
    if(num === 0) {
      return 0;
    } else if(num === 1) {
      return 1;
    }
    return fibonacci(num - 1) + fibonacci(num - 2);
    //입출력: num을 입력받아 num 번째 피보나치 수열 요소 리턴
    //0+1, 1+2, 2+3 ...
    //base case: num이 0이면 return 0
    //recursive case: num + fibonacci(num - 1)
  }
  //재귀 05번
  function arrProduct(arr) {
    if(arr.length === 0) {
      return 1;
    } 
    return arr[0] * arrProduct(arr.slice(1))
    //입출력: 배열 arr의 모든 요소의 곱 number 출력
    
  }
  //재귀 06번
  function arrLength(arr) {
    if(arr.isEmpty()) {
      return 0;
    }
    return arrLength(arr.slice(1)) + 1;
    //입출력: 배열 arr의 길이 리턴
    //base case: arr.isEmpty === true => return 0
    //recursive case: arrLength(arr.slice(1))
  }
  //재귀 07번
  function drop(num, arr) {
    if(num > arr.length) {
      return [];
    } else if(num === 0) {
      return arr;
    }
    return drop(num - 1, arr.slice(1));
    //입출력: 앞에서부터 num개의 요소를 제거한 새로운 배열 리턴
    //base case: num === 0 => return arr;, num > arr.length => return [];
    //recursive case: drop(num -1, arr.slice(num))
  }
  //재귀 08번
  function take(num, arr) {
    if(num > arr.length) {
      return arr;
    } else if(num === arr.length) {
      return arr;
    }
    return take(num, arr.slice(0, -1))
    //입출력: num개의 요소만 포함한 새 배열 arr
    //base case: num > arr.length => arr 원본 리턴, num === arr.length로 변경 => 새 arr 리턴
    //recursive case: take(num - 1, arr.slice(-1))
  }
  //재귀 09번
  function and(arr) {
    if(arr.length === 0) {
      return true;
    } else if(arr[0] === false) {
      return false;
    }
    return arr[0] && and(arr.slice(1));
    //입출력: boolean으로 구성된 arr의 모든 요소의 논리곱을 리턴
    //base case: false가 나오면 return false
    //recursive case: and()
  }
  //재귀 10번
  function or(arr) {
    if(arr.length === 0) {
      return false;
    } else if(arr[0] === true) {
      return true;
    }
    return arr[0] || or(arr.slice(1));
    //입출력: arr의 모든 요소의 || 출력
    //base case: arr.length === 0 => return false
    //recursive case: arr[0] || or(arr.slice(1))
  }
  //재귀 11번
  function reverseArr(arr) {
    if(arr.length === 0) {
      return [];
    } 
    let head = arr[0];
    return  reverseArr(arr.slice(1)).concat(head);
    //입출력: arr을 뒤집은 배열을 리턴
    //base case: arr.length === 0 => 빈 배열 리턴 
    //recursive case: [1, 2, 3, 4, 5] => [5, 4, 3, 2, 1]
    //arr[0], arr[1], arr[2], arr[3], arr[4], arr[5]
    //arr[5], arr[4], arr[3], arr[2], arr[1], arr[0]
  }
  //재귀 12번
  function findMatryoshka(matryoshka, size) {
    if(matryoshka.size === size) {
      return true;
    } else if(Object.keys(matryoshka).length === 0 || matryoshka.matryoshka === null) {
      return false;
    }
    return findMatryoshka(matryoshka.matryoshka, size);
    //입출력: 객체와 size 속성 값을 받아서 일치하는지 여부 리턴
    //base case: matryoshika.size === size
    //recursive case: findMatryoshika(matryoshika.matryoshika, size)
  }