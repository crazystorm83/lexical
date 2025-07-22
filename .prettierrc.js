'use strict';

export default {
    // 괄호 사이 공백 사용
    "bracketSpacing": true,
    // 줄 끝 문자 설정 (기본값: "lf")
    // - "lf": \n (Unix)
    // - "crlf": \r\n (Windows)
    // - "cr": \r (Mac OS)
    // - "auto": 첫 줄 끝 문자 유지
    "endOfLine": "auto",
    // 한 줄의 최대 길이를 설정 (기본값: 80)
    // 이 길이를 초과하면 자동으로 줄바꿈이 발생
    "printWidth": 100,
    // 문장 끝 세미콜론 사용 여부 (기본값: true)
    // true: 모든 문장 끝에 세미콜론 추가
    // false: 필요한 경우에만 세미콜론 추가
    "semi": true,
    // 문자열에 작은따옴표 사용 여부 (기본값: false)
    // true: 'string', false: "string"
    "singleQuote": true,
    // 들여쓰기 시 사용할 공백 문자 수 (기본값: 2)
    // useTabs가 false일 때만 적용됨
    "tabWidth": 4,
    // 객체, 배열 등의 후행 쉼표 설정 (기본값: "es5")
    // - "all": 모든 구문에서 후행 쉼표 사용 (함수 인자 포함)
    // - "es5": ES5에서 유효한 위치에만 후행 쉼표 추가
    // - "none": 후행 쉼표 사용 안 함
    "trailingComma": "es5",
    // 들여쓰기에 탭 문자 사용 여부 (기본값: false)
    // true: 탭 문자 사용, false: 공백 문자 사용
    "useTabs": false,
};