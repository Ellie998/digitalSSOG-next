> 버전 구분 ( #.#.# )
> >  가장 상위 숫자 ( _.#.# ) : 프로젝트의 큰 흐름이나 로직이 변경된 경우 버전을 구분한다.
> > 
> >  중간 숫자     ( #._.# ) :  사용한 프레임워크나 라이브러리 변경에 따라서 버전을 변경해 구분한다.
> > 
> >  마지막 숫자    ( #.#._ ) :  동일 프레임워크 사용 중 일부 기능이나 세부 특징이 변경 된 경우 마지막 숫자를 변경해 구분한다.


> 세부 내용
>  > 0.0.# : 바닐라 JS를 사용해 프로젝트를 구현
>  > 
>  > 0.1.# : 리액트를 사용해 프로젝트를 구현
>  > 
>  > 0.2.# : Next.js를 사용해 프로젝트를 구현
>  > 
>  > 1.0.# : Next.js 사용, DB를 연결해 프로젝트를 구현. 페이지 구현 로직, 디자인 등의 변화 발생함

<br/>
<br/>

## 0.0.0 (2022.11.14)

### 디지털쏙 기획 ver0

- 머릿 속에서 생각하던 사이트의 가장 기초적인 모습을 HTML, CSS, JS를 사용해 구현했다.
- Github URL : https://github.com/Ellie998/tipshare-digitalssog-0
  

   <img width="1432" alt="스크린샷 2024-03-17 오후 8 28 46" src="https://github.com/Ellie998/tipshare-digitalssog-0/assets/89681100/9eeeb568-174e-42d4-892f-5ca56fd18277">


<br/>
<br/>

## 0.0.1 (2023.01.09)

### 디지털쏙 기획 ver1

- Github URL : https://github.com/Ellie998/digitalLife-1

- ver 1.1

  <img width="1440" alt="스크린샷 2024-03-17 오후 7 20 03" src="https://github.com/Ellie998/digitalLife/assets/89681100/68a43f9d-e72f-4bab-9edc-3d950e8e0d20">

- ver 1.2

  <img width="1440" alt="스크린샷 2024-03-17 오후 7 30 44" src="https://github.com/Ellie998/digitalLife/assets/89681100/740c45fa-5d66-4fbf-a68c-eab5d4e0e532">

<br/>
<br/>

## 0.1.0 (2023.01.18)

### 디지털쏙 기획 ver2 (리액트 버전)

- Github URL : https://github.com/Ellie998/digitalLife-react-2

 <img width="912" alt="스크린샷 2024-03-17 오후 7 55 52" src="https://github.com/Ellie998/digitalLife-react/assets/89681100/b5a3fad6-9964-4553-86a1-21ec1f8bc455">

<br/>
<br/>


## 0.0.2 (2023.03.11 ~ 2023.03.12)

### 디지털쏙 기획 완료 (바닐라 JS 버전)

- 배포 URL : https://mydream-digitalssog-js.netlify.app/
- Github URL : https://github.com/Ellie998/mydream-digitalssog-js-3
- 얼추 토대 완성

<br/>
<br/>

## 0.0.3 (2023.03.11 ~ 2023.03.17)

### 디지털쏙 구현 (바닐라 JS 버전)

- HTML, CSS, JS로만 구현한 디지털쏙
- 배포 URL : https://digitalssog-vanila-js.netlify.app/
- Github URL : https://github.com/Ellie998/digitalSSOG-vanila-4

<br/>
<br/>

## 0.1.1 (2023.03.30 ~ 2023.07.03)

### 디지털쏙 구현 (리액트 버전)

#### 배경
- 사용자로부터 발생하는 event로 변경되는 화면이 많은데, JS으로만 구현하려니 반복되는 코드 작성이 많아 불편함을 느낌

#### 과정

- JS -> React
- React 라이브러리를 사용한 디지털쏙
- css module file 사용
- 배포 URL : https://01b39bab.ssog.pages.dev
-  // Readme.md 없음 ( Github URL : https://github.com/Ellie998/digitalSSOG-next/tree/ce6b8feddbfde420bcea35002aeccd550cbff407 )

#### 결과
- JSX의 사용으로 컴포넌트 분리, 코드 작성과 관리의 편리함 개선

 <br/>
<br/>


## 0.2.0 (2023.07.03 ~ 2023.9.13)

### 디지털쏙 구현 Next.js 버전 **(DB 연결 이전)**

#### 배경
- React 라이브러리를 사용해 프로젝트를 구현했으나, 검색 시 내부에 있는 다양한 URL들이 검색엔진에 등록되지 않는 문제 발견
- React-helmet 사용으로 meta tag를 동적으로 변경하도록 하는 방법과 Next.js의 SSR 사용 중 Next.js을 사용하기로 결정 (react-helmet 사용시 js 파일 크기가 커져 초기 화면 로딩 속도를 더 늦추리라 생각했었다.)
- React에서 module.css 파일을 사용해 스타일을 해당 컴포넌트마다 적용했었는데, 표준화된 스타일이 없으니 사이트의 디자인이 통일되지 않는다는 생각이 들었다. 

#### 과정
- react-> next.js
- tailwind 사용(23.07.11) 
- // Readme.md 없음 ( Github URL : https://github.com/Ellie998/digitalSSOG-next/tree/b4a9bb6f28506dc3cc52ea5a9a035d343ded0ea0 )

<br/>
<br/>

## 0.2.1 (2023.09.13 ~ 2023.10.19)

### 디지털쏙 구현 Next.js 버전 **(DB 연결 이전)**

#### 배경
- 미리보기 화면 코드를 작성하면서 미리보기 화면에 해당하는 기능 설명을 찾아가 클릭해야만 구현 중인 미리보기 화면을 확인할 수 있던 불편함을 해결하고 싶었다.
- tailwind 사용으로 className으로 style과 className을 함께 작성하니 className이 복잡해지고 길이가 길어져서 불편했다. 

#### 과정

- tailwind 사용 중지
- 스토리북 사용
- emotion 사용 
- 배포 URL : https://53054ca1.ssog.pages.dev/
- // Readme.md 없음 ( Github URL : https://github.com/Ellie998/digitalSSOG-next/tree/14e119d9502262cd86d8fecfcd651cf65176c8ae)
  
#### 결론 
- 스타일들이 컴포넌트화되어 어떤 스타일이 적용되었는지 JSX 파일에서 한 눈에 보기 편했다. 

<br/>
<br/>


## 1.0.0 (2023.10.20 ~ 현재)

### 디지털쏙 구현 Next.js 버전 **(DB 연결 이후)**

- 배포 URL : https://digitalssog.com
- Github URL : https://github.com/Ellie998/digitalSSOG-next
 
#### 배경 
- SEO를 위해 React에서 Next.js로 변경했지만 상위 컴포넌트에 "use client"를 남발하여 결과적으로 SEO 개선이 없었다.
- 데이터들을 public 폴더에서 JSON 파일로 다루었는데, 데이터 CRUD의 불편함과 데이터가 공개된 문제를 해결하고자 했다.

#### 과정

- 스토리북 사용 중지 (관리자 페이지를 생성하는 등 스토리북을 잘 사용하지 않게 되어 사용을 중지함)
- emotion 사용 중지 (Next.js 13 server side component와의 호환성 문제)
- tailwind 사용, prisma & PlanetScale 사용(DB 연결 23.12.06~)
- TS 사용 (prisma를 사용하며 데이터 타입을 명확하게 다룰 필요성을 느꼈다. 23.12.06~)
- 가능한 부분까지 client component들을 server component로 변경

#### 결과
- 검색 방문자가 발생하기 시작했음

#### 개선점
- lighthouse라는 것을 알게되어 페이지 점수를 분석해보았다. SEO는 100점이지만 Performance가 43점이라는 충격적인 점수가 나왔다. 개선이 필요하다.

