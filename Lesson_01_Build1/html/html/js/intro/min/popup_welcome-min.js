$(document).ready(function(){function e(e){$(".welText").addClass("hide"),$(".welText_"+e).removeClass("hide").addClass("show animated bounceInRight"),e++}var t={intro:{welcome_text_1:{index:1,"class":".welText_1",start:0},welcome_text_2:{index:2,"class":".welText_2",start:12e3},welcome_text_3:{index:3,"class":".welText_3",start:15e3},welcome_text_4:{index:4,"class":".welText_4",start:18e3},welcome_text_5:{index:5,"class":".welText_5",start:21e3},welcome_text_6:{index:6,"class":".welText_6",start:24e3},welcome_text_7:{index:7,"class":".welText_7",start:27e3},welcome_text_8:{index:8,"class":".welText_8",start:3e4},welcome_text_9:{index:9,"class":".welText_9",start:33e3}}};soundManager.setup({url:"js/swf/",onready:function(){var n=1,s=soundManager.createSound({id:"introLesson1",url:"js/mp3/lesson1/intro.mp3"});s.play({multiShot:!1,onplay:function(){e(n)},whileplaying:function(){var n=this.position;for(index in t.intro){var s=t.intro[index];n>=s.start&&e(s.index)}}})},ontimeout:function(){}}),$("#skipIntro").on("click",function(){soundManager.stop("introLesson1")})});