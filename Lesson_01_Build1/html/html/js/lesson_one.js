$(document).ready(function () {
  var idIntro = 'introLesson1';
  var idPart1Lesson1 = 'part1Lesson1';
  var sentence = $('#show-sentence');
  var table = $('#show-in-table');
  var background = $('.background');
  var skip = $('#skip');
  var part1CalendarClass = $('.part1-calendar');
  var introClass = '.intro';
  var part1Class = '.part1';
  var bgBlue = $('#background-blue');
  var tvFrame = $('#tv_frame');
  var control = $('#control');
  var glossaryBtn = $('#menu-glossary');
  var homeBtn =$('#menu-home');
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
      {time: 26000, callback: sectionTable.bind({index: 0, where: introClass})},
      {time: 29000, callback: sectionTable.bind({index: 1, where: introClass})},
      {time: 32000, callback: sectionTable.bind({index: 2, where: introClass})},
      {time: 40000, callback: sectionTable.bind({index: 3, where: introClass})},
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

    soundManager.onready(function () {
      soundManager.play(idPart1Lesson1, {
        multiShot: true,
        position: 0
      });
      var introEvent = [

        {time: 0, callback: section.bind({index: 0, screen: 3, where: part1Class})},
        {time: 6000, callback: sectionTable.bind({index: 0, where: part1Class})},
        {time: 9000, callback: sectionTable.bind({index: 1, where: part1Class})},
        {time: 13000, callback: sectionTable.bind({index: 2, where: part1Class})},
        {time: 16000, callback: hideRightSidebar},
        {time: 17500, callback: section.bind({index: 1, screen: 2, where: part1Class})},
        {time: 22500, callback: section.bind({index: 2, screen: 2, where: part1Class})},
        {time: 39000, callback: section.bind({index: 3, screen: 2, where: part1Class})},
        {time: 48000, callback: section.bind({index: 4, screen: 2, where: part1Class})},
      ];
      introEvent.forEach(function (el) {
        soundManager.onPosition(idPart1Lesson1, el.time, el.callback);
      });

    });
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

  function stop(id) {
    soundManager.stop(id);
  }

  function pause(id) {
    soundManager.pause(id);
  }

  function play(id) {
    stop(id);
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
  homeBtn.click(function (){
    stop(idPart1Lesson1);
    setDefaultTable();
    setDefaultSentence();
    changeScreen(3);
    showRightSidebar();
  });
  skip.click(function () {
    stop(idIntro);
    setDefaultTable();
    setDefaultSentence();
    skip.hide();
    changeScreen(3);
    changeTvbg(1);
    showRightSidebar();
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

