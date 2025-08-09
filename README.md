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

# 📖 목차

- [네이밍룰](#네이밍룰)
    - [일반적인 경우](#일반적인-경우)
        - [파일명 규칙](#파일명-규칙1)
        - [클래스명 규칙](#클래스명-규칙1)
        - [함수명 규칙](#함수명-규칙1)
    - [모듈을 사용한 경우](#모듈을-사용한-경우)
        - [파일명 규칙](#파일명-규칙2)
        - [클래스명 규칙](#클래스명-규칙2)
- [ESLint 실행](#eslint-실행)
- [Prettier 실행](#prettier)
- [빌드](#빌드)
    - [개발 빌드](#개발-빌드)
    - [릴리즈 빌드](#릴리즈-빌드)

# 네이밍룰

## 일반적인 경우

### 파일명 규칙1

- PascalCase

```bash
Class.ts | Class.tsx
```

### 클래스명 규칙1

- PascalCase

```javascript
class Class {}
```

### 함수명 규칙1

#### public 함수

- camelCase

```javascript
class Class {
  public methodName() {

  }
}
```

#### protected 함수

- underscore + camelCase

```javascript
class Class {
  protected _methodName() {

  }
}
```

#### private 함수

- double underscore + camelCase

```javascript
class Class {
  private __methodName() {

  }
}
```

## 모듈을 사용한 경우

### 파일명 규칙2

- 모듈: Grid
- 모듈명 + PascalCase

```bash
GridClass.ts | GridClass.tsx
```

### 클래스명 규칙2

- 모듈: Grid
- PascalCase

```javascript
class GridClass {}
```

### 함수명 규칙2

- [함수명 규칙1 과 동일](#함수명-규칙1)

# ESLint 실행

- 명령어

```bash
npm run eslint
```

# Prettier

- 체크 명령어

```bash
npm run format:check
```

- 수정 명령어

```bash
npm run format
```

# 빌드

## 개발 빌드

- 명령어

```bash
npm run build
```

## 릴리즈 빌드

- 명령어

```bash
npm run build:release
```
