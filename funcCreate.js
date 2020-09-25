// funcExpression(); // 실행 오류
const funcExpression = function () {
  // do stuff...
  console.log("funcExpression execute");
};

// funcStatement(); // funcStatement execute
function funcStatement() {
  // do stuff...
  console.log("funcStatement execute");
}

// funcConstructor(); // 실행 오류
const funcConstructor = new Function("console.log('new Function() created')");

funcExpression(); // funcExpression execute
funcStatement(); // funcStatement execute
funcConstructor(); //  new Function() created
