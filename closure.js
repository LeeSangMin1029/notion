const outterFunc = function () {
  const value = 104;
  return function () {
    console.log(`free variable : ${value}`);
  };
};

const printValue = outterFunc();
printValue();
