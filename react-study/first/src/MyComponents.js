// import React, { Component } from "react";
import React from "react";
import PropTypes from "prop-types";

const MyComponents = ({ name, favoriteNumber, children }) => {
  return (
    <div>
      이름 : {name} <br />
      Children value : {children}
      <br />
      좋아하는 숫자 : {favoriteNumber}
    </div>
  );
};

// class MyComponents extends Component {
//   static defaultProps = {
//     name: "홍길동",
//   };

//   static propTypes = {
//     name: PropTypes.string,
//     favoriteNumber: PropTypes.number.isRequired,
//   };
//   render() {
//     const { name, children, favoriteNumber } = this.props;
//     return (
//       <div>
//         이름 : {name} <br />
//         Children value : {children} <br />
//         좋아하는 숫자 : {favoriteNumber}
//       </div>
//     );
//   }
// }

// props의 기본 프로퍼티를 지정 가능
MyComponents.defaultProps = {
  name: "홍길동",
};

MyComponents.propTypes = {
  // name은 무조건 문자열 형태로 전달
  // string 타입 외에 다른 타입이 들어오게 되면
  // 개발자 도구의 console 탭에서 오류가 나게 된다.
  name: PropTypes.string,
  favoriteNumber: PropTypes.number.isRequired,
};

export default MyComponents;
