라이브러리 개발 초기 환경설정

==

- 개발
    - typescript
    - HTML, React,
- 빌드
- 테스트
    - 유닛 테스트
    - 인터그레이션 테스트
    - E2E 테스트
- 문서화
- 배포

==

# 네이밍룰

## 일반적인 경우

### 파일명 규칙

- PascalCase
    - ex) Class

### 클래스명 규칙

- PascalCase
    - ex) Class

### 함수명 규칙

#### public 함수

- camelCase
    - ex) public methodName() {}

#### protected 함수

- underscore + camelCase
    - ex) protected \_methodName() {}

#### private 함수

- double underscore + camelCase
    - ex) private \_\_methodName() {}

## 모듈을 사용한 경우

### 파일명 규칙

- 모듈: Grid
- 모듈명 + PascalCase
    - ex) GridClass

### 클래스명 규칙

- 모듈: Grid
- PascalCase
    - ex) GridClass

[### 함수명 규칙](# ### 함수명 규칙)

# ESLint 실행

- 명령어
    - npm run eslint

# Prettier

- 체크 명령어
    - npm run format:check
- 수정 명령어
    - npm run format

# 빌드

## 개발 빌드

- 명령어
    - npm run build

## 릴리즈 빌드

- 명령어
    - npm run build:release
