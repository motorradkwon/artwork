// number count for stats, using jQuery animate

$('.counting').each(function() {
    var $this = $(this),
        countTo = $this.attr('data-count');
    
    $({ countNum: $this.text()}).animate({
      countNum: countTo
    },
  
    {
  
      duration: 2000,
      easing:'linear',
      step: function() {
        $this.text(Math.floor(this.countNum));
      },
      complete: function() {
        $this.text(this.countNum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','));
      }
  
    });  
    
  
  });

      /* 공지사항 */
      $("#shNotice dt").on("click",function(){
        $("#shNotice").toggleClass("open");
      });

      var topButton = document.getElementById("toTop");

// 사용자가 스크롤할 때 실행되는 함수
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        topButton.style.opacity = "1"; // 스크롤 위치가 20px 이상일 때 버튼 표시
    } else {
        topButton.style.opacity = "0"; // 그 외에는 버튼 숨김
    }
}

// 버튼 클릭 시 페이지 맨 위로 스무스하게 이동하는 함수
topButton.onclick = function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

function openTab(tabName) {
  document.querySelectorAll('.tab, .tabs').forEach(function(el) {
      el.classList.remove('on');
  });
  document.getElementById(tabName).classList.add('on');
  document.querySelector('.tabs[onclick="openTab(\'' + tabName + '\')"]').classList.add('on');
}