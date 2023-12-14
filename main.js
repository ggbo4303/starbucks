'use strict'

/**
 * 검색창 제어
 */
// 검색창 요소(.search) 찾기.
const searchEl = document.querySelector('.search')
const searchInputEl = searchEl.querySelector('input')
// 검색창 요소를 클릭하면 실행.
searchEl.addEventListener('click', function () {
  searchInputEl.focus()
})
// 검색창 요소 내부 실제 input 요소에 포커스되면 실행.
searchInputEl.addEventListener('focus', function () {
  searchEl.classList.add('focused')
  searchInputEl.setAttribute('placeholder', '통합검색')
})
// 검색창 요소 내부 실제 input 요소에서 포커스가 해제(블러)되면 실행.
searchInputEl.addEventListener('blur', function () {
  searchEl.classList.remove('focused')
  searchInputEl.setAttribute('placeholder', '')
})



const badgeEl = document.querySelector('header .badges');
/* document.querySelector() 라는 메소드를 이용해서 HTML에서 특정한 요소를 찾으려고 한다.
선택자는 header 안에 들어있는 badges라는 클래스를 가진 요소. */
const toTopEl = document.querySelector('#to-top');


/* ↓ window(윈도우 객체)란 우리 프로젝트가 나타나있는 브라우저의 하나의 탭을 의미한다. 
한 마디로 브라우저 창(window)을 의미함. 즉, 우리가 현재 보고 있는 화면(=창) 자체임. */
window.addEventListener('scroll', _.throttle(function () {
  console.log(window.scrollY);
  // 페이지 스크롤 위치가 500px이 넘으면.
  if (window.scrollY > 500) {
    // 배지 숨기기
    // gsap.to(요소, 초단위 지속시간, 옵션)
    gsap.to(badgeEl, .6, {
      opacity: 0,  // → 반점 꼭 넣기
      display: 'none' // → 작은따옴표 꼭 넣기
    });
    // 버튼 보이기
    gsap.to('#to-top', .2, {
      x: 0 // 요소가 둥둥 떠있는 애니메이션을 만들기 위해 x축으로 얼마나 이동할건지 이렇게 이동값을 적는다.
    });

    // 페이지 스크롤 위치가 500px이 넘지 않으면.
  } else {
    // 배지 보이기
    gsap.to(badgeEl, .6, {
      opacity: 1,   // → 반점 꼭 넣기
      display: 'block' // → 작은따옴표 꼭 넣기
    });
    // 버튼 숨기기
    gsap.to('#to-top', .2, {
      x: 100 // 요소가 둥둥 떠있는 애니메이션을 만들기 위해 x축으로 얼마나 이동할건지 이렇게 이동값을 적는다.
    });
  }
}, 300))

// _.throttle(함수, 시간)
// const toTopEl = document.querySelector('#to-top'); 는 위에다(const badgeEl~ 바로 아래줄에) 옮겨놓음.
toTopEl.addEventListener('click', function () {
  gsap.to(window, .7, {
    scrollTo: 0 // 화면의 지점을 0px 지점으로 이동한다. 즉, 맨 위로 이동한단 소리. (cdn에서 scrollToPlugin을 가져와야지 scrollTo를 사용 가능함!)
  });
});




/* opacity 속성처럼 값을 숫자로 입력하는 속성들은
전환 효과(transition 속성이나 GSAP 라이브러리 등) 를 통해 
요소의 전/후 상태를 중간 숫자의 값으로 자연스럽게 만들어줄 수 있지만,
display 속성처럼 값이 숫자가 아닌 속성은 전/후 상태의 중간값이 존재하지 않기 때문에 
자연스러운 전환 효과를 적용할 수 없음. */

const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function (fadeEl, index) {
  // gsap.to(요소, 초단위 지속시간, 옵션)
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * .7, // index는 zerobased-numbering 때문에 0부터 시작함
    // 0.7, 1.4, 2.1, 2.8초
    opacity: 1
  });
});

// new라는 키워드는 js의 생성자(클래스)라고 부른다. css의 클래스는 아니고 js의 클래스임
// new Swiper(선택자(인수),옵션)
new Swiper('.notice-line .swiper-container', {
  direction: 'vertical',
  autoplay: true,
  loop: true
});
new Swiper('.promotion .swiper-container', {
  direction: 'horizontal',
  // direction은 이미 기본값이 horizontal(수평)임
  slidesPerView: 3, // 한번에 보여줄 슬라이드 개수
  spaceBetween: 10, // 슬라이드 사이 여백
  centeredSlides: true, //1번 슬라이드가 가운데 보이기
  loop: true,
  autoplay: {
    delay: 5000 // 5초에 한번씩 슬라이드가 넘어간다. 기본값은 3000(3초)
  }, // autoplay 값을 {}(객체데이터)로 넣기 가능!
  pagination: {
    el: '.promotion .swiper-pagination', // 페이지 번호 요소 선택자
    clickable: true // 사용자의 페이지 번호 요소 제어 가능 여부
  },
  navigation: {
    prevEl: '.promotion .swiper-prev', // previous : 이전의
    nextEl: '.promotion .swiper-next'
  }
});

new Swiper('.awards .swiper-container', {
  direction: 'horizontal', // 수평 슬라이드는 기본값이라 사실 따로 적지 않아도 됨
  autoplay: true,
  loop: true,
  spaceBetween: 30, // 슬라이드 사이사이의 여백 (*픽셀 단위지만 px이라고 문자 붙이면 안 됨!)
  slidesPerView: 5, // 한 번에 몇개의 슬라이드가 보이느냐
  navigation: { // 슬라이드의 화살표(이동) 관련!
    prevEl: '.awards .swiper-prev', // 이전 버튼에 해당하는 선택자를 쓰면 됨 ("awards라는 섹션 안에 들어있는 swiper-prev라는 클래스를 가진 요소")
    nextEl: '.awards .swiper-next' // 다음 버튼에 해당하는 선택자를 쓰면 됨 ("awards라는 섹션 안에 들어있는 swiper-next라는 클래스를 가진 요소")
  }
});



const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false;
promotionToggleBtn.addEventListener('click', function () {
  isHidePromotion = !isHidePromotion
  // 여기서 느낌표라는 것은 이 느낌표가 붙어있는 뒤쪽에 있는 값이 반대가 되게 만들어달라 란 뜻
  // -> 여기서 isHidePromotion이 false로 할당됐으니까 그 반대는 true다
  // -> 즉, !는 어떤 특정 변수의 값을 지속적으로 반대값으로 전환시켜줄 수 있는 코드다
  if (isHidePromotion) {
    // 숨김 처리!
    promotionEl.classList.add('hide');
  } else {
    // 보임 처리!
    promotionEl.classList.remove('hide');
  }
})

// floating1~3 부분 애니메이션 만들어보기

// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
  // `.toFixed()`를 통해 반환된 문자 데이터를,
  // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}

function floatingObject(selector, delay, size) {
  // gsap.to(요소, 시간, 옵션);
  gsap.to(selector, random(1.5, 2.5), {
    y: size, // y축으로 얼마만큼 움직여서 애니메이션 처리를 할 것인지. 여기선 움직이는 범위를 매개'변수' size 사용해서 요소에 따라 달리함
    repeat: -1, // ★값을 -1로 하면 무한반복함! (js라이브러리에서 지원하는 기능임)
    yoyo: true, // ★yoyo란 한번 재생된 애니메이션을 다시 뒤로 재생해서 위-밑으로 내려가면 다시 위로 올라가게끔 해줌
    /* 이징함수라는 개념 추가하기
    : 구글에 gsap easing이라고 검색
    -> 검색결과 상단에 greensock.com 클릭
    -> 사이트 들어가면 보이는 그래프 부분에서
    -> ex) power1 클릭하면 빠르게 상승해서 느려지는 애니메이션을 보여줌
    -> 둥둥떠다니는 요소엔 별로 안 적합하므로 아래에 type:easyOut 부분을 클릭해서
    -> type을 easeInOut으로 바꿔주기!
    -> type:easeInOut에서의 power1은 좀더 완만하게 애니메이션 시작-빨라짐-완만하게끝남
    -> 이러면 좀 더 요소가 부드럽게 둥둥 뜬 느낌을 줄 수 있다
    -> 사이트를 아래로 좀만 더 내리면 TwinMax라는 개념이 보임
    -> TweenMax.to(graph, 2.5, { ease: Power1.easeInOut, y: -500 });
    -> 여기서 ease: Power1.easeInOut 부분만 복붙하기! */
    ease: Power1.easeInOut,
    delay: random(0, delay) // n초 동안 잠시 딜레이됐다가 다시 애니메이션이 실행되게끔 함! (지연시간을 추가해주는 옵션)
    /* 스타벅스 깃허브로 이동 
    -> '랜덤한 숫자를 생성하는 함수'라는 파트 확인 
    : (주석) 범위 랜덤 함수(소수점 2자리까지)
      function random(min, max) {
      (주석) `.toFixed()`를 통해 반환된 문자 데이터를,
      (주석) `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
      return parseFloat((Math.random() * (max - min) + min).toFixed(2))
      }
    -> js에는 Math라는 수학 객체가 있는데 이걸 통해서 랜덤한 숫자를 반환시켜주는 메소드를 실행해보기 위해
    해당 코드를 function floatingObject 윗줄에 복붙해보자 ↑↑↑↑↑↑↑↑↑↑↑ */
  });
}

// floatingObject 함수 실행하기
floatingObject('.floating1', 1, 15); 
/* function floatingObject(selector, delay, size) 
---> "floating1이라는 요소, 1초동안 딜레이, 움직이는 범위는 15px" */
floatingObject('.floating2', 0.5, 15);
floatingObject('.floating3', 1.5, 20);

/* (17:03) 다시 스타벅스 깃허브로 이동해서 GSAP & ScrollToPlugin 부분 확인! 
-> gsap.to() 사용법 부분 링크 클릭해서 사이트로 이동
-> 사이트 내에서 아래로 내려서 Special Properties라는 부분 확인
-> 우리가 to라는 메소드를 통해서 옵션으로 추가할 수 있는 여러 옵션들이 나열되어 있는데
그중에서 우리가 delay, ease, repeat 등등 여러 옵션을 사용해본거임 
-> 이처럼 외부에서 어떤 js라이브러리를 가져와서 사용한다면 꼭 지금처럼 문서를 확인해보고 
거기서 사용할 수 있는 옵션들은 무엇이 있고 그 옵션이 내게 유용한 지 꼭 확인해보는 것을 추천! */

const spyEls = document.querySelectorAll('section.scroll-spy')
spyEls.forEach(function (spyEl) {
  /* ↓ new란 js내에 있는 개념. 생성자 함수임. (나중에 배울 것) 
  Scene은 ScrollMagic이라는 js라이브러리를 통해서 특정한 요소를 감시하는 옵션을 지정해주는 메소드다. 
  그리고 메소드 체이닝을 통해서 setClassToggle이라는 html의 속성(class)을 넣다뺐다 제어하는 메소드도 추가로 뒤에 붙여준다.
  추가로 addTo라는 특정한 섹션이 화면에 보이기 시작하면 애니메이션을 추가해줄 수 있는 메소드도 붙여줌. */
  new ScrollMagic
    .Scene({
      triggerElement: spyEl, // 보여짐 여부를 감시할 요소를 triggerElement라는 옵션에 지정!
      triggerHook: .8  /* (16:53) "뷰포트가 어디에서 시작해서 어디에서 끝나는지를 우리가 판단할 수 있고 
      시작하는 부분이 0, 끝나는 부분이 1로 (그러면 중간은 0.5다!) 이 scrollMagic이라는 js라이브러리가 판단을 하는데
      그러면 0.8(여기선 .8로 간략하게 씀) 이라는 뷰포트의 지점에 보여짐 여부를 감시하는 triggerHook이 걸려져있기 때문에 (hook은 갈고리) 
      내가 감시하려는 요소가 만약 밑에서 스크롤러 쭉 올라오다가 이 0.8이라는 뷰포트 지점에 걸리면 
      그때 어떠한 내용이 트리거에 의해 실행된다!!" */
    })
    .setClassToggle(spyEl, 'show')
    .addTo(new ScrollMagic.Controller());
});


/* 브라우저 맨 하단 footer 내 copyright에 년도가 적혀있는데 매년 년도 숫자가 바뀌니까 
올해가 몇년도인지를 자동으로 계산해서 화면에서 출력할 수 있는 코드를 만들고자 함. */
const thisYear = document.querySelector('.this-year'); 
thisYear.textContent = new Date().getFullYear();
// textContent라는 js속성은 그 요소가 갖고 있는 글자 내용들의 값을 알아내거나 거기에 값을 지정하는 용도로 사용됨.  
// Date라는 생성자 함수가 있음.
/* -> 이렇게 하면 현재 년도 숫자(2023)가 반환되는데, 
그 숫자는 this-year라는 클래스를 가진 요소에 글자 내용으로 삽입된다. */

