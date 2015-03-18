$(document).ready(function(){

soundManager.setup({
    url: 'js/swf/',
    onready: function() {
      var mySound = soundManager.createSound({
        id: 'introLesson1',
        url: 'js/mp3/lesson1/intro.mp3'
      });
//      mySound.play();
      console.log(mySound.length);
      var count = 0;
      mySound.play({
        multiShot: false,
        whileplaying: function() {
          var currentTime = this.position;
          var duration = this.duration;
//          console.log (currentTime);
          // demo only: show sound position while playing, for context
          $('.range').val(currentTime/duration*100);
          if (currentTime > 300 && count == 0 ){
            $('#sentence1').fadeIn(1000);
            count++;
          }
//          console.log(this.position/1000);
        }
      });
    },
    ontimeout: function() {
      // Hrmm, SM2 could not start. Missing SWF? Flash blocked? Show an error, etc.?
    }
  });

})
;
