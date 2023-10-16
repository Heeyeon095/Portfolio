// 메인 타이핑 효과

let content = 'Portfolio';
let content2 = 'By Heeyeon';
const text = document.querySelector('.main-text');
const text2 = document.querySelector('.main-text2')
let mt = 0;
let mt2 = 0;

function typing(){

  let txt = content[mt++];
  
  if (mt > content.length + 3) {

    let txt2 = content2[mt2++];

    if(mt2 >= 0 && mt2 <= content2.length) {
      text2.innerHTML += txt2;
      $('.main-text-blink2').css({
        display: 'inline-block'
      });
      $('.main-text-blink').css({
        display: 'none'
      });
    } else if(mt2 > content2.length + 8) {
      clearInterval(typing);
      $('.main-text-blink2').css({
        display: 'none'
      });
      lego();
    }

  } else if (mt > 0 && mt <= content.length) {
    text.innerHTML += txt;
  };
};

setInterval(typing, 200);

lego();



// 메인 버튼

function lego () {

  $('.main-bt').css({
    zIndex: 50,
    opacity: 1
  });
};

$('.main-bt').click( function () {
  
  $('.main-text-box').css({
    display: 'none'
  });

  $(this).hide();

  $('.contents-wrap').css({
    display: 'block',
    animation: 'con 4s 1',
    animationFillMode: 'forwards'
  });

  $('.bg').css({
    animation: 'bg 4s 1'
  });

  $('.bg1').css({
    animation: 'bg1 4s 1',
    animationFillMode: 'forwards'
});

  $('.bg2').css({
    animation: 'bg2 4s 1'
  });

  $('.bg3').css({
    animation: 'bg3 4s 1'
  });

  $('.bg4').css({
    animation: 'bg4 4s 1'
  });

  $('.bg5').css({
    animation: 'bg5 4s 1'
  });

  $('.bg6').css({
    animation: 'bg6 4s 1'
  });

  $('.bg7').css({
    animation: 'bg7 4s 1'
  });

  $('.bg8').css({
    animation: 'bg8 4s 1'
  });

  setTimeout(function() {
  linghting()}, 4000
  );

});


function linghting () {
  
  $('.main').css({
    display: 'none'
  })

  $('.lighting').css({
    display: 'block'
  });

  $('.check-wrap').css({
    zIndex: 30,
    animation: 'con2 3s 1',
    animationFillMode: 'forwards'
  })

  $('.check-memo').css({
    top: 'calc(50% - 350px)',
    opacity: 1
  })

  setTimeout(function() {
    noshow()}, 3000
    );

};


function noshow() {
  $('.lighting').css({
    display: 'none'
  });
};


// 체크리스트 버튼 클릭

$('.check-memo > .check-text > .check').click(function () {

  let checkidx = $(this).index();

  if(checkidx == 1) {
  $('.check-sub > .check').eq(0).addClass('on');
  setTimeout(function() {
    $('.con-wrap > div').eq(0).addClass('active');
  }, 1000);
  $('.con-wrap').css({
    display: 'block'
  });
  $('.con1').css({
    opacity: 1,
    zIndex: 10
  });
  setTimeout(function() {
    $('.check-wrap').css({
      display: 'none'
    });
  }, 1500);
  
  setTimeout(t1, 600);
  setTimeout(t2, 1500);
  setTimeout(t3, 2500);
  setTimeout(t4, 3000);

  } else if(checkidx == 3) {

  $('.check-sub > .check').eq(1).addClass('on');
  setTimeout(function() {
    $('.con-wrap > div').eq(1).addClass('active');
  }, 1000);
  $('.con-wrap').css({
    display: 'block'
  });
  $('.con2').css({
    opacity: 1,
    zIndex: 10
  });
  setTimeout(function() {
    $('.check-wrap').css({
      display: 'none'
    });
  }, 1500);

} else if(checkidx == 5) {

  $('.check-sub > .check').eq(2).addClass('on');
  setTimeout(function() {
    $('.con-wrap > div').eq(2).addClass('active');
  }, 1000);
  $('.con-wrap').css({
    display: 'block'
  });
  $('.con3').css({
    opacity: 1,
    zIndex: 10
  });
  setTimeout(function() {
    $('.check-wrap').css({
      display: 'none'
    });
  }, 1500);

} else {

  $('.check-sub > .check').eq(3).addClass('on');
  setTimeout(function() {
    $('.con-wrap > div').eq(3).addClass('active');
  }, 1000);
  $('.con-wrap').css({
    display: 'block'
  });
  $('.con4').css({
    opacity: 1,
    zIndex: 10
  });
  setTimeout(function() {
    $('.check-wrap').css({
      display: 'none'
    });
  }, 1500);

};

  $(this).addClass('on');

  $('.check-memo').css({
    top: '100%',
    opacity: 0
  });

  checksub();

});

function checksub () {

  $('.check-wrap').css({
    opacity: 0
  })

  $('.check-sub').css({
    left: '20px'
  });

  setTimeout(function() {
    $('.check1').css({
      left: 0
    })}, 1000
    );

  setTimeout(function() {
    $('.check2').css({
      left: 0
    })}, 1300
    );

  setTimeout(function() {
    $('.check3').css({
      left: 0
    })}, 1500
    );

  setTimeout(function() {
    $('.check4').css({
      left: 0
    })}, 1700
    );

};

$('.check-sub > .check').click(function () {
  let i = $(this).index();

  if(i == 0) {
    $('.con1').css({
      opacity: 1,
      zIndex: 10
    });
    $('.con2,.con3,.con4').css({
      opacity: 0,
      zIndex: 0
    });
    setTimeout(t1, 600);
    setTimeout(t2, 1200);
    setTimeout(t3, 2000);
    setTimeout(t4, 2500);
  } else if(i == 2){
    $('.con2').css({
      opacity: 1,
      zIndex: 10
    });
    $('.con1,.con3,.con4').css({
      opacity: 0,
      zIndex: 0
    });
    $('.t1,.t2,.t3,.t4').removeClass('on');
  } else if(i == 4) {
    $('.con3').css({
      opacity: 1,
      zIndex: 10
    });
    $('.con2,.con1,.con4').css({
      opacity: 0,
      zIndex: 0
    });
    $('.t1,.t2,.t3,.t4').removeClass('on');
  } else if(i == 6) {
    $('.con4').css({
      opacity: 1,
      zIndex: 10
    });
    $('.con2,.con3,.con1').css({
      opacity: 0,
      zIndex: 0
    });
    $('.t1,.t2,.t3,.t4').removeClass('on');
  }
  $(this).addClass('on');
  $('.check-sub > .check').not(this).removeClass('on');
});

function t1 () {
  $('.t1').addClass('on');
}

function t2 () {
  $('.t2').addClass('on');
}

function t3 () {
  $('.t3').addClass('on');
}

function t4 () {
  $('.t4').addClass('on');
}


//con2

$('.skill').click(function () {
  $('.skill').removeClass('show');
  $(this).addClass('show');
});

//con3

$('.con3-title > span').hover(function(){

  let c = $(this).index();

  if($('.con3-mark-wrap > img').eq(c).hasClass('on')) {

  } else {
    $(this).css({
      marginTop: '-25px'
    });
    $('.con3-mark-wrap > img').eq(c).css({
      top: 0
    });
  }


}, function(){

  let c = $(this).index();

  if($('.con3-mark-wrap > img').eq(c).hasClass('on')) {

  } else {
    $(this).css({
      marginTop: '-5px'
    });
    $('.con3-mark-wrap > img').eq(c).css({
      top: '25px'
    });
  }
  
});

$('.con3-title > span').click(function(){

  let m = $(this).index();

  $(this).addClass('on');
  $('.con3-title > span').not(this).removeClass('on');
  $('.con3-title > span').not(this).css({
    marginTop: '-5px'
  });
  $('.con3-mark-wrap > img').removeClass('on');
  $('.con3-mark-wrap > img').eq(m).addClass('on');
  if(m == 0) {
  $('.con3-mark-wrap > img').eq(1).css({
    top: '25px'
  });
  $('.con3-mark-wrap > img').eq(2).css({
    top: '25px'
  });
  $('.con3-mark-wrap > img').eq(3).css({
    top: '25px'
  });
  } else if(m == 1) {
  $('.con3-mark-wrap > img').eq(0).css({
    top: '25px'
  });
  $('.con3-mark-wrap > img').eq(2).css({
    top: '25px'
  });
  $('.con3-mark-wrap > img').eq(3).css({
    top: '25px'
  });
  } else if(m == 2) {
    $('.con3-mark-wrap > img').eq(1).css({
      top: '25px'
    });
    $('.con3-mark-wrap > img').eq(0).css({
      top: '25px'
    });
    $('.con3-mark-wrap > img').eq(3).css({
      top: '25px'
    });
  } else if(m == 3) {
    $('.con3-mark-wrap > img').eq(1).css({
      top: '25px'
    });
    $('.con3-mark-wrap > img').eq(2).css({
      top: '25px'
    });
    $('.con3-mark-wrap > img').eq(0).css({
      top: '25px'
    });
  }
  $('.con3-mark').removeClass('on');
  $('.con3-mark').eq(m).addClass('on');
  
});

// portfolio slide

let pf = 0;

$('.portfolio-prev > i').click(function(){
  console.log(pf);
  if(pf == 0) {

  } else if(pf == 1) {
    $(this).css({
      backgroundColor: 'rgba(0,0,0,0.05)'
    });
    $('.portfolio-con').css({
      left: 'calc(50% - 330px)'
    });
    $('.portfolio').removeClass('on');
    $('.portfolio').eq(pf-1).addClass('on');
    pf--;
  } else if(pf == 2) {
      $('.portfolio-con').css({
        left: 'calc(50% + -960px)'
      });
      $('.portfolio').removeClass('on');
      $('.portfolio').eq(pf-1).addClass('on');
    pf--;
  } else if(pf == 3) {
    $('.portfolio-next > i').css({
      backgroundColor: 'rgba(0,0,0,0.2)'
    });
    $('.portfolio-con').css({
      left: 'calc(50% + -1590px)'
    });
    $('.portfolio').removeClass('on');
    $('.portfolio').eq(pf-1).addClass('on');
    pf--;
  } else if(pf == 4) {} 
});

$('.portfolio-next > i').click(function(){
    if(pf == 0) {
      $('.portfolio-prev > i').css({
        backgroundColor: 'rgba(0,0,0,0.2)'
      });
      $('.portfolio-con').css({
        left: 'calc(50% + -960px)'
      });
      $('.portfolio').eq(pf).removeClass('on');
      $('.portfolio').eq(pf+1).addClass('on');
      pf++;
    } else if(pf == 1) {
      $('.portfolio').removeClass('on');
      $('.portfolio').eq(pf+1).addClass('on');
      $('.portfolio-con').css({
        left: 'calc(50% + -1590px)'
      });
      pf++;
    } else if(pf == 2) {
      $('.portfolio').removeClass('on');
      $('.portfolio').eq(pf+1).addClass('on');
      $('.portfolio-con').css({
        left: 'calc(50% + -2225px)'
      });
      $(this).css({
        backgroundColor: 'rgba(0,0,0,0.05)'
      });
      pf++;
    } else if(pf == 3) {}
  });

//con4
// need <menu>

let curr = 0;

function oslide() {
  i = curr % 4;

  curr++;
  
  $(".need-text").removeClass('on');
  $(".need-text").eq(i).addClass('on');
}

setInterval(() => oslide(), 4000);