//! 1. 객체는 배열과 마찬가지로 다량의 데이터를 한 번에 다룰 수 있는 참조자료형 데이터
    // 0개 이상의 프로퍼티의 조합으로 되어 있습니다.
    // 프로퍼티는 키와 값의 조합으로 이루어져 있습니다.
    let person = { 
        name: "곽운도", 
    } 
    //? key: ( name  ) value: (  "곽운도"  ) 
    // 프로퍼티(속성) => 키 + 값

//! 2. 배열과 객체 비교: 배열이 데이터의 순서정보(index)를 가지고 있는 자료형이었다면, 
//!     객체는 데이터에 이름(key)을 부여할 수 있습니다.
    let personObj = { name:"곽운도", position: "ESE", age:"??", phone: "010-2345-4567" }
    let personArr = ["곽운도", "ESE", "???", "010-2345-4567"]
    console.log(personObj.name)
    //? (key)를 통해 데이터에 의미를 부여할 수 있고, (key)를 사용하여 데이터에 접근할 수 있다.

//! 3. JavaScript에서 사용 가능한 모든 타입의 값은 프로퍼티가 될 수 있습니다.
    let myCatDoi = {
        이름: "도이", // 문자열
        개월: 11, // 숫자
        중성화: true, // boolean
        보유장난감: ["오뎅꼬치", "스프링", "낚싯대", "터널"], // 배열
        집사 : {
            name: "곽운도",
            company: "codestates"
        }, // 객체
        손: function() {
            return `${this.개월}개월 된 고양이 ${this.이름}가 손을 내민다.`;
        }, // 함수(메서드)
        그루밍: function() {
            return `${this.이름}는 마음을 안정시키기 위해 그루밍을 시작합니다.`
        }
    }
    // 프로퍼티: 객체의 상태를 나타내는 값(data)
    // 메서드: 프로퍼티를 참조하고 조작할 수 있는 동작 => 객체 내부의 함수

    // this에 대해서는 S2에 자세히 학습하기 때문에, 
    // 지금은 여기서의 this가 myCatDoi라는 객체를 가리킨다는 정도로만 기억해 주세요.

//! 4. 객체 다루기
    // 1) 프로퍼티를 참조(Read)하는 방법에는 두 가지가 있습니다.
        //? (1) (   ) notation
            console.log(myCatDoi.이름)
        //? (2) (      ) notation
            console.log(myCatDoi["이름"])
            // bracket notation 사용시 반드시 문자열을 입력해야 합니다.
            console.log(myCatDoi[이름])
            // 단, 문자열이 할당된 변수를 입력하는 것은 가능합니다.
            let 이름 = "이름";
            console.log(myCatDoi[이름]);

    // 2) 프로퍼티 추가(Create)
        myCatDoi.성별 = "남";
        // myCatDoi["성별"] = "남";
        console.log(myCatDoi);
        // 빈 객체에 추가하면? (15번 문제처럼)
        let newObj = {};
        newCat['이름'] = myCatDoi['이름']
        console.log(newCat);

    // 3) 프로퍼티 제거
        delete myCatDoi.성별
        console.log(myCatDoi);

    // 4) 프로퍼티 수정(Update)
        myCatDoi.개월 = 10;
        console.log(myCatDoi);

    // 5) 프로퍼티 유무 확인
        console.log('개월' in myCatDoi)
        console.log('생일' in myCatDoi)


// 5. 객체 내부에 값으로 들어 있는 배열과 객체, 함수도 똑같은 방법으로 접근 가능합니다.
    myCatDoi.장난감.push('마따다비');
    myCatDoi.집사['phone'] = '010-1212-3434';
    myCatDoi.손();

// 6. 객체 메서드
    // 1) Object.keys() -> key를 모아서 배열로
    console.log(Object.keys(myCatDoi))

    // 2) Object.values() -> value(값)을 모아서 배열로
    console.log(Object.values(myCatDoi))
    
    // 3) Object.assign() -> 객체 합치기, 객체 복사
    let user = {name: 'kimcoding', job: 'student'};
    let info = {job: 'engineer', age: 25};
    let userInfo = Object.assign(user, info);
    console.log(userInfo);
    // arr.slice()와 동일한 기능으로 사용할 수도 있습니다.
    let myCatKkanbam = Object.assign({}, myCatDoi); 
    myCatKkanbam['이름'] = '깐밤';
    myCatKkanbam.개월 = 5;
    myCatKkanbam.중성화 = false;
    console.log(myCatDoi);
    console.log(myCatKkanbam);

    // 4) Object.is(obj1, obj2) -> 두 객체가 같은지 비교
    console.log(Object.is(myCatDoi, myCatKkanbam));
    console.log(Object.is({}, {}));


// 7. for in 반복문
for (let property in myCatDoi) {
    if (typeof myCatDoi[property] === 'object') {
        delete myCatDoi[property]
    }
}
