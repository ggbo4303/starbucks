//1. The <iframe> (and video player) will replace this <div> tag.

// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
      function onYouTubeIframeAPIReady() {
        // <div id="player"></div>
        new YT.Player('player', {
          videoId: 'An6LvWQuj_8', // 최초 재생할 유튜브 영상 ID
          /* ★★★우리가 어떤 id값을 가지고 있는 유튜브 영상을 출력할거냐 그 id를 여기다가 명확하게 정의를 해줘야지 해당 영상이 출력이 되기 때문에 videoId부분은 중요하다!
          그 유튜브 영상 페이지로 가서 영상 일시정지 후 우클릭하면 소스 코드 복사라는 메뉴가 보임
          이 메뉴를 선택하면 유튜브를 삽입할 수 있는 소스코드 자체가 복사가 되는데 우린 id값만 있으면 되니까
          사실 요부분 전체가 필요하지 않고 현재 유튜브 영상 url 주소를 보면 
          youtube.com/watch?v=■■■ 에서 ■■■ 부분이 실제 유튜브 id니까 ■■■ 부분만 복붙하면됨! */
          playerVars: {
            autoplay: true,
            loop: true,
            playlist: 'An6LvWQuj_8' // 반복 재생할 유튜브 영상 id 목록 값
          },
          events: {
            onReady: function (event) { /* event는 이 동영상 플레이어가 준비가되면(onReady) 그때 이 함수를 실행해주는데 그 삼수를 실행할때 그 함수의 인수로 이 동영상이 플레이되는 어떤 상황 자체를 데이터로서 넘겨주게됨 
            그러면 우리는 이 함수 내에서 그것을 event라는 매개변수의 이름으로 받아서 함수 내부에서 활용해서 쓸 수 있음 */
              event.target.mute() // target 속성은 지금 재생되고 있는 영상 자체고 mute는 음소거란 뜻.
            }
          }
        })
      }