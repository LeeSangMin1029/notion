// https://www.pluralsight.com/guides/how-to-unmount-react.js-node
// 아래의 코드는 위의 링크를 참고해서 작성, 실제로 언마운트가 될 때만
// 실행이 되는지 확인하기 위해서 작성
// Click to unmount라는 버튼을 클릭 시에 실제로 버튼이 사라지게 되면서
// 개발자 도구의 console 창에는 cleanup이라는 문자열이 출력
import React, { useEffect } from 'react';
import { unmountComponentAtNode } from 'react-dom';

const UnmountConfirm = () => {
  useEffect(() => {
    console.log('effect');
    return () => {
      console.log('cleanup');
    };
  }, []);
  return (
    <div>
      <button
        onClick={() => {
          const result = unmountComponentAtNode(
            document.getElementById('root')
          );
          console.log(result);
        }}
      >
        Click to unmount
      </button>
    </div>
  );
};

export default UnmountConfirm;
