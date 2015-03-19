$(document).ready(function () {

    var welcomeText = {
        intro: {
            'welcome_text_1': {
                'index': 1, 'class': '.welText_1', 'start': 0
            }
            , 'welcome_text_2': {
                'index': 2, 'class': '.welText_2', 'start': 12000
            }
            , 'welcome_text_3': {
                'index': 3, 'class': '.welText_3', 'start': 15000
            }
            , 'welcome_text_4': {
                'index': 4, 'class': '.welText_4', 'start': 18000
            }
            , 'welcome_text_5': {
                'index': 5, 'class': '.welText_5', 'start': 21000
            }
            , 'welcome_text_6': {
                'index': 6, 'class': '.welText_6', 'start': 24000
            }
            , 'welcome_text_7': {
                'index': 7, 'class': '.welText_7', 'start': 27000
            }
            , 'welcome_text_8': {
                'index': 8, 'class': '.welText_8', 'start': 30000
            }
            , 'welcome_text_9': {
                'index': 9, 'class': '.welText_9', 'start': 33000
            }
        }
    }

    /**
     * Setup Sounds
     */
    soundManager.setup({
        url: 'js/swf/',
        onready: function () {
            var welTextIndex = 1;
            var mySound = soundManager.createSound({
                id: 'introLesson1',
                url: 'js/mp3/lesson1/intro.mp3'
            });

            mySound.play({
                multiShot: false,
                onplay: function () {
                    changeWelTextByIndex(welTextIndex);
                },
                whileplaying: function () {
                    var position = this.position;

                    for (index in welcomeText['intro']) {
                        var obj = welcomeText['intro'][index];

                        if (position >= obj.start) {
                            changeWelTextByIndex(obj['index']);
                        }

                    }
                }
            });

        },
        ontimeout: function () {
            // Hrmm, SM2 could not start. Missing SWF? Flash blocked? Show an error, etc.?
        }
    });


    /* Skip the Intro */
    $('#skipIntro').on('click', function () {
        //Just for testing
        soundManager.stop('introLesson1');
    });

    function changeWelTextByIndex(welTextIndex) {
        $('.welText').addClass('hide');
        $('.welText_' + welTextIndex).removeClass('hide').addClass('show animated bounceInRight');
        welTextIndex++;
    }

})
;
