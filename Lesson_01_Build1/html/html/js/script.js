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
          in: 'bounceInRight',
          out: 'bounceOutRight'
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

      console.log(mySound.length);
      var count = 0;
      var stt = 1;
      var section = lession1.intro['section_' + stt];
      mySound.play({
        multiShot: false,
        whileplaying: function () {
          var currentTime = this.position;
          var duration = this.duration;

          $('.range').val(currentTime / duration * 100);

          if (currentTime > section.startTime && section.count == 'off') {
            $(section.id).html('<p>' + section.content + '</p>');
            $(section.id).removeAttr('style');
            var position = {
              top: section.position.top
            };
            if (section.position.right) {
              position['right'] = section.position.right;
            } else {
              position['left'] = section.position.left;
            }
            $(section.id).removeClass('hidden')
              .addClass('animated ' + section.animation.in)
              .css(position);
            section.count = 'on';
          }

          if (currentTime > section.endTime && section.count == 'on') {
            $(section.id)
              .addClass('animated ' + section.animation.out)
              .wait(100).addClass('hidden')
              .removeClass(section.animation.in + " " + section.animation.out);
            section.count = 'done';
            stt++;

          }
          section = lession1.intro['section_' + stt];
        }
      });

    },
    ontimeout: function () {
      // Hrmm, SM2 could not start. Missing SWF? Flash blocked? Show an error, etc.?
    }
  });

})
;
