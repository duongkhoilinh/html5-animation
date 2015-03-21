$(document).ready(function () {
  var lession1 = {
    intro: {
      section_1: {
        count: 'off',
        startTime: 0,
        endTime: 11000,
        content: "Welcome to News at 9. I'm your host Sally James. As you all know, every Firday we meet a special guest and learn from their success story.",
        animation: {
          in: 'bounceInRight',
          out: 'bounceOutRight'
        },
        position: {
          top: '50px',
          right: '35px'
        },
        id: '#show-sentence',
        haveNext: false
      },
      section_2: {
        count: 'off',
        startTime: 11000,
        endTime: 21000,
        content: "Today, we have with us a successfull entrepreneur, and winner of this year's The Chamber of Commerce, Business of the Year Award, Mr. Chris Fox.",
        animation: {
          in: 'bounceInRight',
          out: 'bounceOutRight'
        },
        position: {
          top: '50px',
          right: '35px'
        },
        id: '#show-sentence',
        haveNext: false
      },
      section_3: {
        count: 'off',
        startTime: 21500,
        endTime: 26000,
        content: "Before we welcome him, here are the points we are going on to discuss today:",
        animation: {
          in: 'bounceInRight',
          out: 'bounceOutRight'
        },
        position: {
          top: '50px',
          right: '35px'
        },
        id: '#show-sentence',
        haveNext: false
      },
      section_4: {
        count: 'off',
        startTime: 26000,
        endTime: '29000',
        content: "In this episode, we are going to discuss:",
        animation: {
          in: 'fadeIn',
          out: 'fadeOut'
        },
        position: {
          top: '150px',
          left: '157px'
        },
        id: '#show-in-table',
        haveNext: true
      },
      section_5: {
        count: 'off',
        startTime: 29000,
        endTime: '32000',
        content: "How to select the business that's just right for you",
        animation: {
          in: 'fadeIn',
          out: 'fadeOut'
        },
        position: {
          top: '150px',
          left: '157px'
        },
        id: '#show-in-table',
        haveNext: true
      },
      section_6: {
        count: 'off',
        startTime: 33000,
        endTime: '40000',
        content: "How to avoid the most common, but serious mistake made in business--not picking the right one to begin with",
        animation: {
          in: 'fadeIn',
          out: 'fadeOut'
        },
        position: {
          top: '150px',
          left: '157px'
        },
        id: '#show-in-table',
        haveNext: true
      },
      section_7: {
        count: 'off',
        startTime: 40000,
        endTime: '44000',
        content: "How to avoid potential mistakes from experience and wisdom of others",

        animation: {
          in: 'fadeIn',
          out: 'fadeOut'
        },
        position: {
          top: '150px',
          left: '157px'
        },
        id: '#show-in-table',
        haveNext: true
      }
    }
  };

  soundManager.setup({
    url: 'js/swf/',
    onready: function () {
      var mySound = soundManager.createSound({
        id: 'introLesson1',
        url: 'js/mp3/lesson1/intro.mp3'
      });

//      console.log(mySound.length);
//      var count = 0;
//      var stt = 1;
//      var section = lession1.intro['section_' + stt];
//      mySound.play({
//        multiShot: true,
//        position: 0,
//        whileplaying: function () {
////          var currentTime = this.position;
////          var duration = this.duration;
////
////          $('.range').val(currentTime / duration * 100);
////
////          if (currentTime > section.startTime && section.count == 'off') {
////            if(!section.haveNext) {
////              $(section.id).html('<p>' + section.content + '</p>');
////            }else {
////              $(section.id).append('<p class="animated'+section.animation.in+'">' + section.content + '</p>');
////            }
////            $(section.id).removeAttr('style');
////            var position = {
////              top: section.position.top
////            };
////            if (section.position.right) {
////              position['right'] = section.position.right;
////            } else {
////              position['left'] = section.position.left;
////            }
////            $(section.id).removeClass('hidden')
////              .addClass('animated ' + section.animation.in)
////              .css(position);
////            section.count = 'on';
////          }
////
////          if (currentTime > section.endTime && section.count == 'on') {
////            if(!section.haveNext) {
////              $(section.id)
////                .addClass('animated ' + section.animation.out)
////                .addClass('hidden')
////                .removeClass(section.animation.in + " " + section.animation.out);
////              section.count = 'done';
////            }
////            stt++;
////
////          }
////          section = lession1.intro['section_' + stt];
//        }
//      });

    },
    ontimeout: function () {
      // Hrmm, SM2 could not start. Missing SWF? Flash blocked? Show an error, etc.?
    }
  });

  soundManager.onready(function () {
    soundManager.play('introLesson1', {
      multiShot: true,
      position: 0
    });
    idIntro = 'introLesson1';
    soundManager.onPosition(idIntro, 0, Section1);
    soundManager.onPosition(idIntro, 11200, Section2);
    soundManager.onPosition(idIntro, 21000, Section3);
    soundManager.onPosition(idIntro, 26000, Section4);
    soundManager.onPosition(idIntro, 29000, Section5);
    soundManager.onPosition(idIntro, 32000, Section6);
    soundManager.onPosition(idIntro, 40000, Section7);
//    soundManager.onPosition(idIntro, 45000, Section8);
    soundManager.onPosition(idIntro, 45000, Section9);
    soundManager.onPosition(idIntro, 46000, Section10);
    soundManager.onPosition(idIntro, 52500, Section11);
    soundManager.onPosition(idIntro, 54500, Section12);
    soundManager.onPosition(idIntro, 60000, Section13);
    soundManager.onPosition(idIntro, 70000, Section14);
    soundManager.onPosition(idIntro, 76000, Section15);
  });
});

function Section1(eventPosition) {
  sentence = $('#show-sentence');
  sentence.removeClass('hidden');
  sentence.find('p').hide();
  sentence.find('p:eq(0)').show().addClass('animated bounceInRight');

}
function Section2(eventPosition) {
  sentence = $('#show-sentence');
  sentence.addClass('hidden');
  sentence.wait(200).removeClass('hidden');
  sentence.find('p').hide().removeAttr('class');
  sentence.find('p:eq(1)').show().addClass('animated bounceInRight');
}
function Section3(eventPosition) {
  sentence = $('#show-sentence');
  sentence.addClass('hidden');
  sentence.wait(200).removeClass('hidden');
  sentence.find('p').hide().removeAttr('class');
  sentence.find('p:eq(2)').show().addClass('animated bounceInRight');
}
function removeSection1to3() {
  sentence = $('#show-sentence');
  sentence.addClass('hidden');
  sentence.find('p').hide().removeAttr('class');
}
function Section4(eventPosition) {
  removeSection1to3();
  table = $('#show-in-table');
  table.find('p').hide();
  table.removeClass('hidden');
  table.find('p:eq(0)').show().addClass('animated fadeIn');
}
function Section5(eventPosition) {
  removeSection1to3();
  table = $('#show-in-table');
  table.find('p').hide();
  table.find('p:eq(0)').show();
  table.removeClass('hidden');
  table.find('p:eq(1)').show().addClass('animated fadeIn');
}
function Section6(eventPosition) {
  removeSection1to3();
  table = $('#show-in-table');
  table.find('p').hide();
  table.find('p:eq(0)').show();
  table.find('p:eq(1)').show();
  table.removeClass('hidden');
  table.find('p:eq(2)').show().addClass('animated fadeIn');
}
function Section7(eventPosition) {
  removeSection1to3();
  table = $('#show-in-table');
  table.find('p').hide();
  table.find('p:eq(0)').show();
  table.find('p:eq(1)').show();
  table.find('p:eq(2)').show();
  table.removeClass('hidden');
  table.find('p:eq(3)').show().addClass('animated fadeIn');
}
function Section8(eventPosition) {
  removeSection1to3();

  table.find('p').show();
  table.css({
    top: '171px',
    left: '88px',
    'font-size': '16px',
    width: '294px',
    transition: '0.5s all ease-in-out'
  });
  table.removeClass('hidden');
  background = $('#backgroundIntroLesson1');
  background.find('img:eq(0)').css({
    position: 'relative',
    width: '117%',
    right: '100px'
  })
}
function removeTable() {
  table = $('#show-in-table');
  table.addClass('hidden');
  table.find('p').hide().removeAttr('class');
}
function Section9(eventPosition) {
  removeSection1to3();
  removeTable();
  background = $('#backgroundIntroLesson1');
  background.find('img:eq(0)').addClass('hidden');
  background.find('img:eq(1)').removeClass('hidden');
}

function Section10(eventPosition) {
  Section9();
  var screen1 = $('#screen-1');
  var lady = screen1.find('.lady-talk');
  var man = screen1.find('.man-talk');
  lady.removeClass('hidden');
  lady.addClass('animated fadeIn');
}
function Section11(eventPosition) {
  var screen1 = $('#screen-1');
  var lady = screen1.find('.lady-talk');
  var man = screen1.find('.man-talk');
  lady.addClass('animated fadeOut').wait(100).addClass('hidden').removeAttr('class');
  man.removeClass('hidden');
  man.find('p:eq(1)').hide().addClass('animated fadeIn');
}
function changeScreen2() {
  var screen1 = $('#screen-1');
  var lady1 = screen1.find('.lady-talk');
  lady1.addClass('animated fadeOut').wait(100).addClass('hidden').removeAttr('class');
  var man1 = screen1.find('.man-talk');
  man1.addClass('animated fadeOut').wait(100).addClass('hidden').removeAttr('class');

  background = $('#backgroundIntroLesson1');
  background.find('img:eq(0)').addClass('hidden');
  background.find('img:eq(1)').addClass('hidden');
  background.find('img:eq(2)').removeClass('hidden');
}
function Section12(eventPosition) {
  changeScreen2();
  var screen2 = $('#screen-2');
  var lady = screen2.find('.lady-talk');
  var man = screen2.find('.man-talk');
  lady.removeClass('hidden');
  lady.addClass('animated fadeIn');
}
function Section13(eventPosition) {
  changeScreen2();
  var screen2 = $('#screen-2');
  var lady = screen2.find('.lady-talk');
  lady.addClass('animated fadeOut').wait(100).addClass('hidden').removeAttr('class');
  var man = screen2.find('.man-talk');
  man.removeClass('hidden');
  man.find('p:eq(1)').hide();
  man.addClass('animated fadeIn')
}
function Section14(eventPosition) {
  var screen2 = $('#screen-2');
  var man= screen2.find('.man-talk');
//  var man= screen2.find('.lady-talk');
  man.addClass('hidden').find('p').removeAttr('class');
  background = $('#backgroundIntroLesson1');
  background.find('img:eq(0)').addClass('hidden');
  background.find('img:eq(1)').addClass('hidden');
  background.find('img:eq(2)').addClass('hidden');
  background.find('img:eq(3)').removeClass('hidden');
  var screen4= $('#screen-3');
  var lady = screen4.find('.lady-talk');
  lady.removeClass('hidden');
  lady.addClass('animated fadeIn');

}
function Section15(eventPosition){
  background = $('#backgroundIntroLesson1');
  background.find('img:eq(0)').addClass('hidden');
  background.find('img:eq(1)').addClass('hidden');
  background.find('img:eq(2)').removeClass('hidden');
  background.find('img:eq(3)').addClass('hidden');
  var screen4= $('#screen-3');
  var lady = screen4.find('.lady-talk');
  lady.addClass('animated fadeOut').wait(100).addClass('hidden').removeAttr('class');
  var screen2= $('#screen-2');
  var man = screen2.find('.man-talk');
  man.removeClass('hidden');
  man.find('p').show();
  man.find('p:eq(0)').hide();
  man.addClass('animated fadeIn');
}