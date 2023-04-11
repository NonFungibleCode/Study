function findMatryoshka(matryoshka, size) {
    if(matryoshka.size === size) {
      return true;
    } else if(Object.keys(matryoshka).length === 0 || matryoshka.matryoshka === null) {
      return false;
    }
    return findMatryoshka(matryoshka.matryoshka, size);
    // TODO: 여기에 코드를 작성합니다.
    //입출력: 객체와 size 속성 값을 받아서 일치하는지 여부 리턴
    //base case: matryoshika.size === size
    //recursive case: findMatryoshika(matryoshika.matryoshika, size)
  }
  
  function fibonacci(num) {
    if(num === 0) {
      return 0;
    } else if(num === 1) {
      return 1;
    }
    return fibonacci(num - 1) + fibonacci(num - 2);
    // TODO: 여기에 코드를 작성합니다.
    // 별도의 최적화 기법(memoization)은 금지됩니다.
    //입출력: num을 입력받아 num 번째 피보나치 수열 요소 리턴
    //0+1, 1+2, 2+3 ...
    //base case: num이 0이면 return 0
    //recursive case: num + fibonacci(num - 1)
  }

  
  function drop(num, arr) {
    if(num > arr.length) {
      return [];
    } else if(num === 0) {
      return arr;
    }
    return drop(num - 1, arr.slice(1));
    // TODO: 여기에 코드를 작성합니다.
    //입출력: 앞에서부터 num개의 요소를 제거한 새로운 배열 리턴
    //base case: num === 0 => return arr;, num > arr.length => return [];
    //recursive case: drop(num -1, arr.slice(num))
  }

  function or(arr) {
    if(arr.length === 0) {
      return false;
    } else if(arr[0] === true) {
      return true;
    }
    return arr[0] || or(arr.slice(1));
    // TODO: 여기에 코드를 작성합니다.
    //입출력: arr의 모든 요소의 || 출력
    //base case: arr.length === 0 => return false
    //recursive case: arr[0] || or(arr.slice(1))
  }

  function reverseArr(arr) {
    if(arr.length === 0) {
      return [];
    } 
    let head = arr[0];
    return  reverseArr(arr.slice(1)).concat(head);
    // TODO: 여기에 코드를 작성합니다.
    //입출력: arr을 뒤집은 배열을 리턴
    //base case: arr.length === 0 => 빈 배열 리턴 
    //recursive case: [1, 2, 3, 4, 5] => [5, 4, 3, 2, 1]
    //arr[0], arr[1], arr[2], arr[3], arr[4], arr[5]
    //arr[5], arr[4], arr[3], arr[2], arr[1], arr[0]
    //
  }
  