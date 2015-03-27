$(document).ready(function () {
  var idIntro = 'introLesson1';
  var idPart1Lesson1 = 'part1Lesson1';
  var idPart2Lesson1 = 'part2Lesson1';
  var idPart3Lesson1 = 'part3Lesson1';
  var idPart4Lesson1 = 'part4Lesson1';
  var idPart5Lesson1 = 'part5Lesson1';
  var idPart6Lesson1 = 'part6Lesson1';
  var idPart7Lesson1 = 'part7Lesson1';
  var idPart8Lesson1 = 'part8Lesson1';
  var idPart9Lesson1 = 'part9Lesson1';
  //Calendar on part 1
  var idPart10Lesson1 = 'part10Lesson1';

  var sentence = $('#show-sentence');
  var table = $('#show-in-table');
  var background = $('.background');
  var skip = $('#skip');
  var introClass = '.intro';
  var part1Class = '.part1';
  var part2Class = '.part2';
  var part3Class = '.part3';
  var part4Class = '.part4';
  var part5Class = '.part5';
  var part6Class = '.part6';
  var part7Class = '.part7';
  var part8Class = '.part8';
  var part9Class = '.part9';
  var part10Class ='.part10';
  var part10Calendar1 = '.part1-calendar.calendar-1';
  var part10Calendar2 = '.part1-calendar.calendar-2';
  var part10Calendar3 = '.part1-calendar.calendar-3';

  var part7Table1 = '.part7-table1';
  var part7Table2 = '.part7-table2';

  var bgBlue = $('#background-blue');
  var bgBlueZoomIn = $('#background-blue-zoomIn');

  var bgBlueIn = $('.inside-box');
  var tvFrame = $('#tv_frame');
  var control = $('#control');
  var glossaryBtn = $('#menu-glossary');
  var homeBtn = $('#menu-home');
  var glossary = $('#glossary');

  soundManager.setup({
    url: 'js/swf/',
    onready: function () {
      soundManager.createSound({
        id: idIntro,
        url: 'js/mp3/lesson1/intro.mp3'
      });
      soundManager.createSound({
        id: idPart1Lesson1,
        url: 'js/mp3/lesson1/p1.mp3'
      });
      soundManager.createSound({
        id: idPart2Lesson1,
        url: 'js/mp3/lesson1/p2.mp3'
      });
      soundManager.createSound({
        id: idPart3Lesson1,
        url: 'js/mp3/lesson1/p3.mp3'
      });
      soundManager.createSound({
        id: idPart4Lesson1,
        url: 'js/mp3/lesson1/p5.mp3'
      });
      soundManager.createSound({
        id: idPart5Lesson1,
        url: 'js/mp3/lesson1/p6.mp3'
      });
      soundManager.createSound({
        id: idPart6Lesson1,
        url: 'js/mp3/lesson1/p7.mp3'
      });
      soundManager.createSound({
        id: idPart7Lesson1,
        url: 'js/mp3/lesson1/p8.mp3'
      });
      soundManager.createSound({
        id: idPart8Lesson1,
        url: 'js/mp3/lesson1/p9.mp3'
      });
      soundManager.createSound({
        id: idPart9Lesson1,
        url: 'js/mp3/lesson1/p10.mp3'
      });
      soundManager.createSound({
        id: idPart10Lesson1,
        url: 'js/mp3/lesson1/p1_1.mp3'
      });

    },
    ontimeout: function () {
      // Hrmm, SM2 could not start. Missing SWF? Flash blocked? Show an error, etc.?
    }
  });

  soundManager.onready(function () {
    soundManager.play(idIntro, {
      multiShot: true,
      position: 0
    });
    var introEvent = [
      {time: 0, callback: section.bind({index: 0, screen: 0, where: introClass})},
      {time: 11200, callback: section.bind({index: 1, screen: 0, where: introClass})},
      {time: 21000, callback: section.bind({index: 2, screen: 0, where: introClass})},
      {time: 26000, callback: sectionTable.bind({index: 0, screen: 0, where: introClass})},
      {time: 29000, callback: sectionTable.bind({index: 1, screen: 0, where: introClass})},
      {time: 32000, callback: sectionTable.bind({index: 2, screen: 0, where: introClass})},
      {time: 40000, callback: sectionTable.bind({index: 3, screen: 0, where: introClass})},
      {time: 45000, callback: section.bind({index: 3, screen: 1, where: introClass})},
      {time: 52500, callback: section.bind({index: 4, screen: 1, where: introClass})},
      {time: 54500, callback: section.bind({index: 5, screen: 2, where: introClass})},
      {time: 60000, callback: section.bind({index: 6, screen: 2, where: introClass})},
      {time: 70000, callback: section.bind({index: 7, screen: 3, where: introClass})},
      {time: 76000, callback: section.bind({index: 8, screen: 2, where: introClass})}
    ];
    introEvent.forEach(function (el) {
      console.log(el);
      soundManager.onPosition(idIntro, el.time, el.callback);
    });

  });
  function part1Lesson1Play() {
    changeScreen(3);
    bgBlue.css({
      left: 0
    });
    setTimeout(function () {
      soundManager.onready(function () {
        soundManager.play(idPart1Lesson1, {
          multiShot: true,
          position: 0
        });
        var introEvent = [
          {time: 0, callback: section.bind({index: 0, screen: 3, where: part1Class})},
          {time: 6000, callback: sectionTable.bind({index: 0, screen: 3, where: part1Class})},
          {time: 9000, callback: sectionTable.bind({index: 1, screen: 3, where: part1Class})},
          {time: 13000, callback: sectionTable.bind({index: 2, screen: 3, where: part1Class})},
          {time: 16000, callback: hideRightSidebar},
          {time: 17500, callback: section.bind({index: 1, screen: 2, where: part1Class})},
          {time: 22500, callback: section.bind({index: 2, screen: 2, where: part1Class})},
          {time: 39000, callback: section.bind({index: 3, screen: 2, where: part1Class})},
          {time: 48000, callback: section.bind({index: 4, screen: 2, where: part1Class})},
          {time: 51000, callback: section.bind({index: 5, screen: 2, where: part1Class})}
        ];
        introEvent.forEach(function (el) {
          soundManager.onPosition(idPart1Lesson1, el.time, el.callback);
        });
      });
    }, 1300);
  }

  function part2Lesson1Play() {
    soundManager.onready(function () {
      soundManager.play(idPart2Lesson1, {
        multiShot: true,
        position: 0
      });
      var introEvent = [
        {time: 0, callback: section.bind({index: 0, screen: 2, where: part2Class})},
        {time: 0, callback: hideRightSidebar_part8},
        {time: 9000, callback: section.bind({index: 1, screen: 2, where: part2Class})}
      ];
      introEvent.forEach(function (el) {
        soundManager.onPosition(idPart2Lesson1, el.time, el.callback);
      });

    });
  }

  function part3Lesson1Play() {
    soundManager.onready(function () {
      soundManager.play(idPart3Lesson1, {
        multiShot: true,
        position: 0
      });
      var introEvent = [
        {time: 0, callback: section.bind({index: 0, screen: 2, where: part3Class})},
        {time: 5500, callback: section.bind({index: 1, screen: 2, where: part3Class})},
        {time: 11000, callback: section.bind({index: 2, screen: 2, where: part3Class})},
        {time: 21240, callback: section.bind({index: 3, screen: 2, where: part3Class})},
        {time: 33000, callback: section.bind({index: 4, screen: 2, where: part3Class})},
        {time: 39500, callback: section.bind({index: 5, screen: 2, where: part3Class})}
      ];
      introEvent.forEach(function (el) {
        soundManager.onPosition(idPart3Lesson1, el.time, el.callback);
      });

    });
  }

  function part4Lesson1Play() {
    soundManager.onready(function () {
      soundManager.play(idPart4Lesson1, {
        multiShot: true,
        position: 0
      });
      var introEvent = [
        {time: 0, callback: section.bind({index: 0, screen: 2, where: part4Class})},
        {time: 5500, callback: section.bind({index: 1, screen: 2, where: part4Class})},
        {time: 16500, callback: section.bind({index: 2, screen: 2, where: part4Class})},
        {time: 24500, callback: section.bind({index: 3, screen: 2, where: part4Class})},
        {time: 36500, callback: section.bind({index: 4, screen: 2, where: part4Class})},
        {time: 39000, callback: section.bind({index: 5, screen: 2, where: part4Class})},
        {time: 50000, callback: section.bind({index: 6, screen: 2, where: part4Class})}
      ];
      introEvent.forEach(function (el) {
        soundManager.onPosition(idPart4Lesson1, el.time, el.callback);
      });

    });
  }

  function part5Lesson1Play() {
    soundManager.onready(function () {
      soundManager.play(idPart5Lesson1, {
        multiShot: true,
        position: 0
      });
      var introEvent = [
        {time: 0, callback: section.bind({index: 0, screen: 2, where: part5Class})}
      ];
      introEvent.forEach(function (el) {
        soundManager.onPosition(idPart5Lesson1, el.time, el.callback);
      });

    });
  }

  function part6Lesson1Play() {
    soundManager.onready(function () {
      soundManager.play(idPart6Lesson1, {
        multiShot: true,
        position: 0
      });
      var introEvent = [
        //        {time: 0, callback: section.bind({index: 0, screen: 4, where: part6Class})},
        {time: 0, callback: sectionTable.bind({index: 0, screen: 4, where: part6Class})},
        {time: 22860, callback: sectionTable.bind({index: 1, screen: 4, where: part6Class})},
        {time: 36530, callback: sectionTable.bind({index: 2, screen: 4, where: part6Class})},
        {time: 53300, callback: sectionTable.bind({index: 3, screen: 4, where: part6Class})},
        {time: 100000, callback: sectionTable.bind({index: 4, screen: 4, where: part6Class})},
        {time: 0, callback: sectionTable.bind({index: 5, screen: 4, where: part6Class})}
      ];
      introEvent.forEach(function (el) {
        soundManager.onPosition(idPart6Lesson1, el.time, el.callback);
      });
    });
  }

  function part7Lesson1Play() {
    soundManager.onready(function () {
      soundManager.play(idPart7Lesson1, {
        multiShot: true,
        position: 0
      });
      var introEvent = [
        {time: 0, callback: section.bind({index: 0, screen: 2, where: part7Class})},
        {time: 7450, callback: showTableCenter},
        {time: 7590, callback: sectionTable.bind({index: 0, screen: 2, where: part7Table1})},
        {time: 9500, callback: sectionTable.bind({index: 1, screen: 2, where: part7Table1})},
        {time: 15770, callback: sectionTable.bind({index: 2, screen: 2, where: part7Table1})},
        {time: 18580, callback: sectionTable.bind({index: 3, screen: 2, where: part7Table1})},
        {time: 25300, callback: hideTableCenter},
        {time: 25500, callback: section.bind({index: 1, screen: 2, where: part7Class})},
        {time: 35000, callback: section.bind({index: 2, screen: 2, where: part7Class})},
        {time: 42000, callback: section.bind({index: 3, screen: 2, where: part7Class})},
        {time: 49500, callback: sectionTable.bind({index: 0, screen: 5, where: part7Table2})},
        {time: 78000, callback: sectionTable.bind({index: 1, screen: 5, where: part7Table2})},
        {time: 134500, callback: sectionTable.bind({index: 2, screen: 5, where: part7Table2})}
      ];
      introEvent.forEach(function (el) {
        soundManager.onPosition(idPart7Lesson1, el.time, el.callback);
      });
    });
  }

  function part8Lesson1Play() {
    soundManager.onready(function () {
      soundManager.play(idPart8Lesson1, {
        multiShot: true,
        position: 0
      });
      var introEvent = [
        {time: 0, callback: section.bind({index: 0, screen: 2, where: part8Class})},
        {time: 9800, callback: section.bind({index: 1, screen: 2, where: part8Class})},
        {time: 12000, callback: section.bind({index: 2, screen: 2, where: part8Class})},
        {time: 20500, callback: section.bind({index: 3, screen: 2, where: part8Class})},
        {time: 25800, callback: section.bind({index: 4, screen: 2, where: part8Class})},
        {time: 29900, callback: section.bind({index: 5, screen: 2, where: part8Class})},
        {time: 34500, callback: showRightSidebar_part8},
        {time: 36000, callback: sectionTable.bind({index: 0, screen: 2, where: part8Class})},
        {time: 39000, callback: sectionTable.bind({index: 1, screen: 2, where: part8Class})},
        {time: 42500, callback: sectionTable.bind({index: 2, screen: 2, where: part8Class})},
        {time: 51500, callback: sectionTable.bind({index: 3, screen: 2, where: part8Class})},
        {time: 56000, callback: sectionTable.bind({index: 4, screen: 2, where: part8Class})},
        {time: 64900, callback: hideRightSidebar_part8},
        {time: 65000, callback: section.bind({index: 6, screen: 2, where: part8Class})}
      ];
      introEvent.forEach(function (el) {
        soundManager.onPosition(idPart8Lesson1, el.time, el.callback);
      });
    });
  }

  function part9Lesson1Play() {
    soundManager.onready(function () {
      soundManager.play(idPart9Lesson1, {
        multiShot: true,
        position: 0
      });
      var introEvent = [
        {time: 0, callback: sectionTable.bind({index: 0, screen: 6, where: part9Class})},
        {time: 18500, callback: sectionTable.bind({index: 1, screen: 6, where: part9Class})},
        {time: 23690, callback: sectionTable.bind({index: 2, screen: 6, where: part9Class})},
        {time: 27520, callback: sectionTable.bind({index: 3, screen: 6, where: part9Class})},
        {time: 31350, callback: sectionTable.bind({index: 4, screen: 6, where: part9Class})},
        {time: 38380, callback: sectionTable.bind({index: 5, screen: 6, where: part9Class})},
        {time: 40740, callback: sectionTable.bind({index: 6, screen: 6, where: part9Class})}
      ];
      introEvent.forEach(function (el) {
        soundManager.onPosition(idPart9Lesson1, el.time, el.callback);
      });
    });
  }

  // Calendar on part 1
  function part10Lesson1Play() {
    soundManager.onready(function () {
      soundManager.play(idPart10Lesson1, {
        multiShot: true,
        position: 0
      });
      var introEvent = [
        {time: 0, callback: section.bind({index: 0, screen: 7, where: part10Class})},
        {time: 12060, callback: sectionTable.bind({index: 0, screen: 8, where: part10Calendar1})},
        {time: 16000, callback: sectionTable.bind({index: 1, screen: 8, where: part10Calendar1})},
        {time: 21400, callback: sectionTable.bind({index: 2, screen: 8, where: part10Calendar1})},
        {time: 29500, callback: sectionTable.bind({index: 3, screen: 8, where: part10Calendar1})},
        {time: 34500, callback: section.bind({index: 0, screen: 7, where: part10Class})},
        {time: 37500, callback: sectionTable.bind({index: 0, screen: 9, where: part10Calendar2})},
        {time: 41500, callback: sectionTable.bind({index: 1, screen: 9, where: part10Calendar2})},
        {time: 45500, callback: sectionTable.bind({index: 2, screen: 9, where: part10Calendar2})},
        {time: 47500, callback: sectionTable.bind({index: 3, screen: 9, where: part10Calendar2})},
        {time: 50000, callback: section.bind({index: 0, screen: 7, where: part10Class})},
        {time: 59000, callback: sectionTable.bind({index: 0, screen: 10, where: part10Calendar3})},
        {time: 61500, callback: sectionTable.bind({index: 1, screen: 10, where: part10Calendar3})},
        {time: 66500, callback: sectionTable.bind({index: 2, screen: 10, where: part10Calendar3})},
        {time: 72000, callback: sectionTable.bind({index: 3, screen: 10, where: part10Calendar3})}
      ];
      introEvent.forEach(function (el) {
        soundManager.onPosition(idPart10Lesson1, el.time, el.callback);
      });
    });
  }

  $('#btn-calendar').click(function(){
    part10Lesson1Play();
  });

  function setNumberPart(part) {
    $('#part-current').html("0" + (part));
  }


  var currentPlay = 1;
  var totalSection = 9;
  $("#btn-next").click(function (el) {
    currentPlay++;
    currentPlay = (currentPlay > totalSection)
      ? 1
      : currentPlay;
    nextpart(currentPlay);
    setNumberPart(currentPlay);
  });
  $("#btn-back").click(function (el) {
    currentPlay--;
    currentPlay = (currentPlay == 0)
      ? totalSection
      : currentPlay;
    nextpart(currentPlay);
    setNumberPart(currentPlay);
  });
  //      console.log(el);
  //      var partCurrent = $(el.currentTarget).parents().find('#show-sentence  .active');
  //      var number = parseInt(partCurrent.attr('class').substr(4,1));
  //      console.log(number);
  //      if(number>1) {
  //        partCurrent.removeClass('active');
  //        partCurrent.prev().addClass('active');
  //        nextpart(number-1);
  //        $('#part-current').html("0"+(number-1));
  //      }

  function nextpart(numberPart) {
    stop();
    setDefaultTable();
    setDefaultSentence();
    switch (numberPart) {
      case 1 :
        showRightSidebar();
        break;
      case 2 :
        part2Lesson1Play();
        break;
      case 3 :
        part3Lesson1Play();
        break;
      case 4 :
        part4Lesson1Play();
        break;
      case 5:
        part5Lesson1Play();
        break;
      case 6:
        part6Lesson1Play();
        break;
      case 7 :
        part7Lesson1Play();
        break;
      case 8 :
        part8Lesson1Play();
        break;
      case 9 :
        part9Lesson1Play();
        break;
    }
  }

  function setDefaultSentence() {
    sentence.addClass('hide');
    sentence.find('p').removeAttr('class style').hide();
  }

  function setDefaultTable() {
    table.addClass('hide');
    table.find('p').removeAttr('class style').hide();
  }

  function section() {
    var where = sentence.find(this.where);
    setDefaultTable();
    setDefaultSentence();
    sentence.removeClass('hide');
    changeScreen(this.screen);
    var current = where.find('p:eq(' + this.index + ')');
    current.css(addPosition(current));
    current.show().addClass('animated fadeIn');
  }

  function changeScreen(index) {
    background.find('img').hide();
    background.find('img:eq(' + index + ')').show();
  }

  function addPosition(current) {
    var position = {
      top: current.data('top')
    };
    if (current.data('right')) {
      position['right'] = current.data('right')
    } else {
      position['left'] = current.data('left')
    }
    if (current.data('width')) {
      position['width'] = current.data('width')
    }
    return position;
  }

  function sectionTable() {
    setDefaultTable(this.where);
    setDefaultSentence(this.where);
    changeScreen(this.screen);
    var where = table.find(this.where);
    table.removeClass('hide');
    var current = where.find('p:eq(' + this.index + ')');
    current.show().addClass('animated fadeIn');
    for (i = 0; i < this.index; i++) {
      where.find('p:eq(' + i + ')').show()
    }
  }

  function showRightSidebar() {
    changeScreen(3);
    bgBlue.css({
      left: 0
    });
    setTimeout(function () {
      part1Lesson1Play();
    }, 1300);
  }

  function showRightSidebar_part8() {
    bgBlue.css({
      left: 0
    });
  }

  function hideRightSidebar_part8() {
    bgBlue.css({
      left: '-40%'
    });
  }

  function hideRightSidebar() {
    changeScreen(3);
    bgBlue.css({
      left: '-40%'
    });
    setDefaultTable();
    setDefaultSentence();
  }

  function showTableCenter() {
    bgBlueZoomIn.removeClass('zoomOut');
    bgBlueZoomIn.addClass('zoomIn');
    bgBlueZoomIn.css({
      left: '5%'
    });
    bgBlueZoomIn.css({
      top: '10%'
    });
  }

  function hideTableCenter() {
    bgBlueZoomIn.removeClass('zoomIn');
    bgBlueZoomIn.addClass('zoomOut');
  }

  function stop() {
    soundManager.stopAll();
  }

  function play(id) {
    soundManager.togglePause(id);
  }

  function mute(id) {
    soundManager.toggleMute(id);
  }

  $('#btn-mute').click(function (el) {
    var partCurrent = $(el.currentTarget).parents().find('#show-sentence  .active').attr('class');
    var number = parseInt(partCurrent.substr(4, 2));
    switch (number) {
      case 1 :
        mute(idPart1Lesson1);
        break;
      case 2 :
        mute(idPart2Lesson1);
        break;
      case 3 :
        mute(idPart3Lesson1);
        break;
      case 4 :
        mute(idPart4Lesson1);
        break;
      case 5:
        mute(idPart5Lesson1);
        break;
      case 6:
        mute(idPart6Lesson1);
        break;
      case 7 :
        mute(idPart7Lesson1);
        break;
      case 8 :
        mute(idPart8Lesson1);
        break;
      case 9 :
        mute(idPart9Lesson1);
        break;
      case 10 :
        mute(idPart10Lesson1);
        break;
    }
    $(el.currentTarget).toggleClass('btn_no_mute');
  });
  $('#btn-pause').click(function (el) {
    var partCurrent = $(el.currentTarget).parents().find('#show-sentence  .active').attr('class');
    var number = partCurrent.substr(4, 2);
    $(el.currentTarget).toggleClass('btn-play');
    switch (parseInt(number)) {
      case 1 :
        play(idPart1Lesson1);
        break;
      case 2 :
        play(idPart2Lesson1);
        break;
      case 3 :
        play(idPart3Lesson1);
        break;
      case 4 :
        play(idPart4Lesson1);
        break;
      case 5:
        play(idPart5Lesson1);
        break;
      case 6:
        play(idPart6Lesson1);
        break;
      case 7 :
        play(idPart7Lesson1);
        break;
      case 8 :
        play(idPart8Lesson1);
        break;
      case 9 :
        play(idPart9Lesson1);
        break;
      case 10 :
        play(idPart10Lesson1);
        break;
    }
  });

  function changeTvbg(index) {
    tvFrame.find('.tv').hide();
    var padding = tvFrame.find('.tv:eq(' + index + ')').data('padding');
    tvFrame.find('.tv:eq(' + index + ')').show();
    tvFrame.find('.bg-frame').css({padding: padding});
  }

  glossaryBtn.click(function () {
    if (glossary.hasClass('hide') || glossary.hasClass('fadeOutDown')) {
      glossary.removeClass('hide').addClass('animated fadeInUp').removeClass('fadeOutDown');
    } else {
      glossary.removeClass('fadeInUp').addClass('animated fadeOutDown')
    }
  });
  homeBtn.click(function () {
    nextpart(1);
  });
  skip.click(function () {
    stop(idIntro);
    setDefaultTable();
    setDefaultSentence();
    skip.hide();
    changeTvbg(1);
//    nextpart(1);
    $("#show-sentence div").removeClass('active');
    $("#show-sentence .part10").addClass('active');
    part10Lesson1Play();
    control.removeClass('hide');
  });

  glossary.find('.list-short-text li').click(function () {
    var id = '#tab-' + $(this).data('tab');
    if ($(this).hasClass('deactive')) {
      return;
    }
    glossary.find('.content-list-short-text li').hide();
    glossary.find(id).show();
  })
})
;

