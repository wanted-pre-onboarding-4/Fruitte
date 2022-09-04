# Assginment #2

## 🎯 프로젝트 목표

#### Fruitte 스토어 리뉴얼 개발

## ⏰ 프로젝트 기간

#### 2022-09-02 ~ 2022-09-04

## :link: 프로젝트 링크

https://fruitte-4.netlify.app

## :nut_and_bolt: 구현 기능

사용자 기능

- [x] 스토어 상품목록 조회(30개 이상의 상품목록, 10개 단위의 페이지네이션, 인피니트 스크롤 X)
- [x] 스토어 상품 상세조회(이미지, 상품 옵션, 수량, 가격 등)
- [x] 스토어 상품 주문
- [x] 스토어 상품 주문 내역확인 (주문 번호, 상품명, 주문 수량, 주문 옵션)

관리자 기능

- [x] 스토어 상품목록 등록 페이지(이미지, 상품 옵션, 수량, 가격 등)
- [x] 상품 삭제 기능
- [x] 상품 노출 여부 조정 기능(상품은 유지되어 있되, 노출 여부를 수정하는 기능)

## :hammer: 사용 스택

![ReactJS](https://img.shields.io/badge/ReactJS-20232A?style=for-the-badge&logo=react&logoColor=61DAFB) ![Styled-Components](https://img.shields.io/badge/StyledComponents-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)![Recoil](https://img.shields.io/badge/Recoil-007af4?style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjI1MDAiIHdpZHRoPSIyMzY4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjMwIDExIDI3LjUgNzgiPjxyZWN0IGZpbGw9IiMwMDdhZjQiIGhlaWdodD0iOTUiIHJ4PSIxMCIgd2lkdGg9IjkwIi8+PGNpcmNsZSBjeD0iNDMuNSIgY3k9IjE4LjUiIGZpbGw9IiNmZmYiIHI9IjcuNSIvPjxjaXJjbGUgY3g9IjQzLjUiIGN5PSI4MS41IiBmaWxsPSIjZmZmIiByPSI3LjUiLz48ZyBzdHJva2U9IiNmZmYiIHN0cm9rZS13aWR0aD0iMyI+PHBhdGggZD0iTTQzLjk5OSAyNUM0Mi41IDM3IDU3LjUgMzQgNTcuNSA0Mi41YzAgNS01Ljg3OCA2LjM2NS0xMy41MDEgN0MzNy45OTkgNTAgMzAgNTAgMzAgNThzMTYgNS41IDEzLjk5OSAxN00zNC4xMzIgMzMuMzUzYzAgMTUuMjg5IDIzLjE1IDE4LjI4OSAyMy4xNSAzMi42MiIvPjwvZz48L3N2Zz4=&logoColor=white)

#### Recoil

API 통신이 불가능한 상황에서 데이터를 실시간으로 처리하는 기능을 어떻게 구현할 수 있을까에 대한 고민이 있었습니다.

저희 프로젝트에서 Mock Data는 상수로 선언이 되어 있었고 이 데이터를 전역 상태로 관리하면 동적으로 처리할 수 있을 것 같다고 생각하여 **Recoil** 도입을 결정하게 됐습니다.

## 프로젝트 구조

```bash
src
├─components
│ ├─admin
│ │ └─management
│ ├─commons
│ │ ├─buttons
│ │ └─inputs
│ └─fruitstore
│ ├─detail
│ ├─list
│ ├─order
│ │ └─order_info
│ └─orderComplete
├─data
├─pages
│ ├─admin
│ ├─detail
│ └─order
├─store
├─styles
└─utils
```

### 🖌 와이어프레임

[Fruitte-Figma](https://www.figma.com/file/WNwP0R0Dd77etq8lMJpLbK/Untitled?node-id=0%3A1)

## :handshake: 프로젝트 팀원

| 이름   |                             역할                             |
| ------ | :----------------------------------------------------------: |
| 설재혁 | 프로젝트 초기 세팅, 공통 컴포넌트 제작, Recoil 세팅, Mock 데이터 세팅 |
| 김명원 |       관리자 management 페이지, 상품 mock 데이터 수정        |
| 박보선 |                관리자 상품등록 정보 입력 form                |
| 김지혜 |            상품 상세페이지, 상품 mock 데이터 수정            |
| 이시형 |                         주문 페이지                          |
| 홍주완 |  상품목록 전체 보여주는 페이지 담당 ,상품 mock 데이터 수정   |
| 이후경 |       구매내역 확인 페이지, 관리자페이지 와이어프레임        |



## 📖 WiKi

- [Git-Flow](https://github.com/wanted-pre-onboarding-4/Fruitte/wiki/Convention-&-Git-Flow#git-flow)
- [Commit-Convention](https://github.com/wanted-pre-onboarding-4/Fruitte/wiki/Convention-&-Git-Flow#commit-convention)



## 🖥 Getting Started

1. `Clone` the repository

   ```markdown
   $ git clone https://github.com/wanted-pre-onboarding-4/Fruitte.git
   ```

2. `Install` dependencies

   ```markdown
   $ npm install
   ```

3. `start` the project

   ```markdown
   $ npm start
   ```

