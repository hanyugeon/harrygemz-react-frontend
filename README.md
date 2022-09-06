# harrygemz-react-frontend

- 22.08.29: Polygon으로 이관 및 코드 리팩토링 작업 시작.
- 22.09.06: custom theme 작성, font 적용, 컴포넌트 세분화 시작.
- [ ] 컴포넌트 세분화

  - [x] minting components
  - [ ] ui components
  - [ ] my-page compoents
  - [ ] purchase compoents

- 주 목표:
  - Klaytn -> Polygon 이관
  - FrontEnd 코드 리팩토링
    - 컴포넌트 세분화
    - Chakra-UI 적극 활용(custom theme...)
    - font 적용
    - Mobile 레이아웃 구성(반응형 웹페이지)
    - 코드를 누가봐도 알아보기 쉽게, 고민하고 수정하는 작업
  - custom hooks 세분화
  - contracts config 다시 만들기
  - use-wallet 오픈소스를 활용한 유저 계정 관리
  - caver.js -> ehters.js 로 바꾸기

> 이 코드는 https://www.inflearn.com/course/%EB%94%94%EC%95%B1-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-2/dashboard 강의를 토대로 작성된 코드 입니다.

# 프로젝트를 마치며.

## 코드

사실 작년에 처음 들어갔던 동아리에서 어설프게 프로젝트를 진행하며 클론코딩 강의를 들었었는데 분명 처음에는 클론코딩 인강을 듣는게 재미있었다. 왜냐하면 빠르게 코드를 받아적고 반영되는 결과물을 손쉽게 눈으로 확인할 수 있었기 때문이였다. 하지만 쉽게 온것은 쉽게 간다는 말이 있듯이 코딩의 재미가 금방 흐려져 가는 느낌을 받았다. 물론 기능은 점점 구현되어가고있지만 내가 나의 코드를 보았을때 무슨 기능을 하고있는지, 인강을 보지않고 똑같이 작성해 낼 수 있는지에 의문이 생기기 시작했고 당연히 대답은 NO였기 때문이다.

그래서 이번에는 내가 이 프로젝트 관련 기술을 익히고 싶고 온전히 나의 실력으로 만들 수 있도록 하기 위해, 그리도 똑같은 실수를 반복하지 않기 위해 인강을 들으며 코드를 그대로 따라 적기보다 강사분은 왜 이렇게 썼을까? 작성된 코드 다음에 필요한 코드는 무엇을까? 이보다 코드를 조금 더 개선시킬 수 있을까? 계속 생각하며 프로젝트를 진행하였다.

예를 들어 변수명 같은 경우, my-gemz.tsx 코드에서 인강에서는 메서드 이름을 getSaleStatus, onClickSaleStatusToggle 로 작성했었는데 이때 갑자기 "처음 이 코드를 마주했을때 어떠한 기능을 가지고 있을지 조금 더 직관적으로 예상할 수 있게 할 수 있을까?" 라는 생각이 들었다.

그러한 생각에서 시작되어 약간의 고민후에 수정해서 내가 작성했던 메서드 이름은 getSaleStatus, toggleSaleStatus 이였다. 관련이 있는 메서드들끼리 통일성을 주고 좀더 역할을 직관적으로 적는다면 누구든지 알아 보기 쉽지 않을까...? 라는 생각으로 수정하여 작성해보았다. (사실 이에 대한 명확한 답은 없다고 생각한다.)

## 협업

나중에 프로젝트를 하거나 회사를 다니게 되었을 때 기본이 되어야한다고 생각하는것 몇 가지가 있다.

클린코드, 브랜치 관리(git flow), commit 컨벤션 등등.. 지금 당장은 필요하지 않을 수 도 있다 생각할 수 있겠지만 언젠가는 꼭 익혀야할 기술이라고 생각했기 때문에 이번 기회에 혼자서 프로젝트를 진행하는것이지만 여러 개발자들과 진행 한다고 상상하며 진행 해 보았다.

이게 현업에서 하는 방법과 완전히 똑같지는 않겠지만 branch관리와 commit 메세지, PR주고 받기 등등 굉장히 신경써서 진행하였다. 이러한 경험이 나중에 꼭 도움이 될 수 있으면 좋겠다.
