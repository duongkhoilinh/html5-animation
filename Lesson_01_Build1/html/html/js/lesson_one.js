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

  var sentence = $('#show-sentence');
  var table = $('#show-in-table');
  var background = $('.background');
  var skip = $('#skip');
  var btnPart2 = $('#part2');
  var part1CalendarClass = $('.part1-calendar');
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

  var part7Table1 = '.part7-table1';
  var part7Table2 = '.part7-table2';

  var bgBlue = $('#background-blue');
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
          {time: 48000, callback: section.bind({index: 4, screen: 2, where: part1Class})}
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
//        {time: 1000, calback:  showTableCenter},
        {time: 7590, callback: sectionTable.bind({index: 0, screen: 2, where: part7Table1})},
        {time: 9500, callback: sectionTable.bind({index: 1, screen: 2, where: part7Table1})},
        {time: 15770, callback: sectionTable.bind({index: 2, screen: 2, where: part7Table1})},
        {time: 18580, callback: sectionTable.bind({index: 3, screen: 2, where: part7Table1})},
        {time: 25500, callback: section.bind({index: 1, screen: 2, where: part7Class})},
        {time: 35000, callback: section.bind({index: 2, screen: 2, where: part7Class})},
        {time: 42000, callback: section.bind({index: 3, screen: 2, where: part7Class})},
        {time: 52000, callback: sectionTable.bind({index: 0, screen: 5, where: part7Table2})},
        {time: 119910, callback: sectionTable.bind({index: 1, screen: 5, where: part7Table2})},
        {time: 217270, callback: sectionTable.bind({index: 2, screen: 5, where: part7Table2})}
      ];
      introEvent.forEach(function (el) {
        soundManager.onPosition(idPart7Lesson1, el.time, el.callback);
      });
    });
  }

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

  function hideRightSidebar() {
    changeScreen(3);
    bgBlue.css({
      left: '-40%'
    });
    setDefaultTable();
    setDefaultSentence();
  }

  function showTableCenter() {
    bgBlue.css({
      left: '-50%',
      top: '50%'
    })
  }

  function stop() {
    soundManager.stopAll();
  }

  function pause(id) {
    soundManager.pause(id);
  }

  function play(id) {
    stop();
    soundManager.play(id);
  }

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
    skip.hide();
    changeTvbg(1);
    nextpart(1);
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
});

