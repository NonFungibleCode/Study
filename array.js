// 배열, 객체 등을 하나로 묶어 '참조 자료형'이라고 분류합니다.
// 참조자료형은 'number', 'string', 'boolean' 등의 '원시 자료형'과 여러 가지 차이점이 있습니다.
// 차이점에 대해서는 Unit9에서 자세히 학습할 내용이므로 지금은 배열 자체의 특징 정도만 정리하도록 하겠습니다.
// ! 1. 배열이 필요한 이유? (   다량의 데이터를 다루기 위해서 )
    let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    // let num1 = 0;
    // let num2 = 1;
    // let num3 = 2;
    // ...

// ! 2. 배열은 요소의 개수, 즉 배열의 길이를 나타내는 (  length   ) 프로퍼티를 갖는다.
    console.log(arr.length) // ?
    // TMI : 배열의 최대 길이는? // ?

// ! 3. 배열의 타입은 ( object )이다.
    console.log(typeof arr) // ?

// ! 4. 배열인지의 여부를 확인하기 위해서는 ( Array.isArray()  )를 사용한다.
    console.log(Array.isArray(arr)); // true

    // 4-1. 빈 배열인지 확인?
        console.log(arr.length === 0) // false
        let blank = [];
        console.log(blank === []); 
        // ? 참조자료형의 특징 -> 참조하고 있는 주소가 다르기 때문에.

// ! 5. 배열은 순서 정보 - (index)를 가지고 있는 참조자료형이다.
    // 배열은 여러 개의 값을 순차적으로 나열한 자료구조
    // index를 활용하여 배열의 각 요소 element(요소)를 조회할 수 있다.
    console.log(arr[0]); // ?
    console.log(arr[6]); // ?
    console.log(arr[8]); // ?
    // 문자열과는 달리 인덱스를 이용해서 요소를 추가, 변경하는 것도 가능하다. (참조자료형은 변경 가능한 값이다.)
    let str = 'codestates';
    str[str.length] = '1';
    str[0] = 'z';
    console.log(str);

    arr[0] = '0';
    arr[10] = 9;
    console.log(arr)

// ! 6. 배열 내장 메서드 -> "배열에 사용할 수 있는 자동으로 생성되어 있는 함수"
    // push, slice, pop, unshift, shift, splice, split, concat, join
    // 6-1. 원본 배열을 변경하는 메서드
        // push() -> 변경된 배열의 길이 리턴
        console.log(arr.length);
        arr.push(9); 
        console.log(arr.push(9)); // 추가된 길이를 리턴합니다.
        console.log(arr);
        console.log(arr.length);

        // pop() -> 제거된 요소 리턴
        arr.pop();
        console.log(arr);
        console.log(arr.length);

        // unshift() -> 변경된 배열의 길이 리턴
        arr.unshift(9);
        console.log(arr);
        console.log(arr.length);

        // shift() -> 제거된 요소 리턴
        arr.shift();
        console.log(arr);
        console.log(arr.length);

        // splice()
        arr.splice(7)
        arr.splice(1, 7)
        console.log(arr);
        console.log(arr.length);

        arr.splice(1, 7, '1', '2', '3', '4', '5', '6', '7')
        console.log(arr);
        console.log(arr.length);

        // join()
        arr.reverse();
        console.log(arr);

        // fill()
        arr.fill(0)
        console.log(arr);
        let newArr = new Array(5).fill(2)
        console.log(newArr);

    // 6-2. 원본 배열을 변경하지 않는 메서드
        // slice() -> ctrl + c, ctrl + v
        let slice1 = arr.slice(0, 4);
        console.log(arr);
        console.log(arr.length);
        console.log(slice1);
        console.log(slice1.length);
        // 배열에 대해 얕은 복사가 일어난다.
        // 깊은 복사와 얕은 복사 -> 이건 심화 학습 과제!
        // Unit9과제에도 등장

        // concat()
        let arr3 = arr.concat(9)
        console.log(arr3);
        console.log(arr3.length);

        let arr4 = arr.concat([9, 10, 11])
        console.log(arr4);
        console.log(arr4.length);

        // join()
        let str1 = arr.join('')
        console.log(str1);
        let str2 = arr.join(':')
        console.log(str2);

    // 6-3 그외 메서드
        // indexOf()
        console.log(arr.indexOf(5))
        console.log(arr.indexOf(10))

        if(arr.indexOf(10) === -1) {
            return false;
        }

        // includes()
        console.log(arr.includes(5));
        console.log(arr.includes(10));


// ! 7. 배열은 반복문을 사용하기에 매우 좋은 자료형이다.
// 배열의 길이와 인덱스를 활용하여 배열 내부에 있는 모든 요소를 순회할 수 있다.
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }

    // for ~ of문
    for (let el of arr) { // el === arr[i]
        console.log(el)    
    }

    function arrToString(arr) {
        let result = 0;
        for (let i = 0; i < arr.length; i++) {
            if(i % 2 === 0) {
                result = result + arr[i];
            }
        }
        return result;
    }

    // '모든 요소'를 순회할 때는 for of문을 사용하면 더 간결하고 편리하다.
    function arrToString(arr) {
        let result = 0;
        for (let el of arr) {
            if(el % 2 === 0) {
                result = result + el;
            }
        }
        return result;
    }

    console.log(arrToString(arr))