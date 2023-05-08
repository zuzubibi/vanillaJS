## javascript 

#### 기본 타입: const, let, boolean, null, undefined

#### 1. null과 undefined 차이

- null은 절대로 자연적으로 발생하지 않는다.
- null은 variable 안에 어떤 것이 없다는 것을 확실히 하기 위해 쓰는 것이다.
- undefined는 variable이 존재하는데 값이 없는 상태이다.
- 즉, 메모리는 할당되어 있는데 값이 없는 상태.

#### 2. object

```
const player = {
    name: "nico",
    points: 10,
    fat: true,
};

// 아래 두개의 결과값은 같음
console.log(player["name"]);
console.log(player.name);

```

- 앞의 const는 player에 해당하는 type을 못 바꾸게 한다는 뜻 (ex. object !-> boolean)
- player의 내용은 바꿀 수 있음

#### 3. NaN, isNaN, typeof, parseInt()

- Nan: Not a Number
- isNaN(): 숫자인지 아닌지 판단 (숫자면 False, 숫자 아니면 True)
- typeof: 타입을 확인할 수 있음 
- parseInt(): a string to convert into a number. 그리고 python에서의 int()랑 비슷
```
console.log(typeof num); 
```

#### 4. prompt

- 일시적으로 javascript를 중단시킨다.
- 구식 스타일이긴 한데, 서버에서 확인할때 자주 쓰나봄 
- python에서 input()이랑 비슷

```
const num = prompt("how old are you?"); 
```

