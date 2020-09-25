// 리터럴에 의해 생성
const literalFunc = function () {
  console.log("literal function execute");
};
literalFunc();

// 변수 및 배열의 요소, 객체의 프로퍼티에 할당 가능(동적으로도 가능)
const nothingObj = {};
nothingObj.func = function () {
  console.log("객체의 프로퍼티에 함수가 할당이 가능하다는 것을 보여주고 있다.");
};
nothingObj.func();

// 함수의 인자로 함수 전달 가능
const sendFunc = function () {
  console.log("send");
};

const received = function (func) {
  func();
};

received(sendFunc);

// 함수의 리턴값으로 함수 반환 가능
const closure = function () {
  const noAccessOuter = 10;
  return function () {
    return noAccessOuter;
  };
};

const getValue = closure();
console.log(getValue());
