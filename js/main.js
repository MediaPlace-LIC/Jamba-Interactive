$(document).ready(function () {
    var sliding = false;
    var introButtons = anime({
        targets: '.introButtons',
        scale: 0,
        duration: 00,
        easing: 'easeInOutQuart',
        direction: 'alternate',
        elasticity: 0,
        loop: true
    });
//Energy Track
    $('#for-energy').on('click dblclick', function () {
        if (!sliding) {
            sliding = true;
            $('#screen1').fadeOut('slow', function () {
                $('#screen2').toggle('slide', {direction: 'right'}, 800, function () {
                    var twoRotation = anime({
                        targets: 'td img',
                        delay: 300,
                        opacity: 1,
                        rotate: '2turn'
                    });


                });
                sliding = false;
            });
        }
    }).swipe({
        swipe: function (event, phase, direction, distance, duration, fingerCount) {
            $(this).trigger('click');
        },
        fingers: 'all',
        maxTimeThreshold: 1000
    });

    //Energy back
    $('.energy .backButton').on('click dblclick', function () {
        if (!sliding) {
            sliding = true;
            $('#screen2').toggle('slide', {direction: 'left'}, 800, function () {
                $('#screen1').toggle('slide', {direction: 'right'}, 800);
                //Remove Anime
                var removeAnime = anime({
                    targets: 'td img',
                    delay: 100,
                    opacity: 0,
                    rotate: '0'
                });
                sliding = false;
            });
        }
    }).swipe({
        swipe: function (event, phase, direction, distance, duration, fingerCount) {
            $(this).trigger('click');
        },
        fingers: 'all',
        maxTimeThreshold: 1000
    });
    //For health
    $('#for-health').on('click dblclick', function () {
        if (!sliding) {
            sliding = true;
            $('#screen1').fadeOut('slow', function () {
                $('#health').toggle('slide', {direction: 'right'}, 800, function () {
                    var twoRotation = anime({
                        targets: 'td img',
                        delay: 300,
                        opacity: 1,
                        rotate: '2turn'
                    });


                });
                sliding = false;
            });
        }
    }).swipe({
        swipe: function (event, phase, direction, distance, duration, fingerCount) {
            $(this).trigger('click');
        },
        fingers: 'all',
        maxTimeThreshold: 1000
    });
    //Health back
    $('.health .backButton').on('click dblclick', function () {
        if (!sliding) {
            sliding = true;
            $('#health').toggle('slide', {direction: 'left'}, 800, function () {
                $('#screen1').toggle('slide', {direction: 'right'}, 800);
                //Remove Anime
                var removeAnime = anime({
                    targets: 'td img',
                    delay: 100,
                    opacity: 0,
                    rotate: '0'
                });
                sliding = false;
            });
        }
    }).swipe({
        swipe: function (event, phase, direction, distance, duration, fingerCount) {
            $(this).trigger('click');
        },
        fingers: 'all',
        maxTimeThreshold: 1000
    });
    //For fun
    $('#for-fun').on('click dblclick', function () {
        if (!sliding) {
            sliding = true;
            $('#screen1').fadeOut('slow', function () {
                $('#fun').toggle('slide', {direction: 'right'}, 800, function () {
                    var twoRotation = anime({
                        targets: 'td img',
                        delay: 300,
                        opacity: 1,
                        rotate: '2turn'
                    });


                });
                sliding = false;
            });
        }
    }).swipe({
        swipe: function (event, phase, direction, distance, duration, fingerCount) {
            $(this).trigger('click');
        },
        fingers: 'all',
        maxTimeThreshold: 1000
    });
    //For fun back
    $('.fun .backButton').on('click dblclick', function () {
        if (!sliding) {
            sliding = true;
            $('#fun').toggle('slide', {direction: 'left'}, 800, function () {
                $('#screen1').toggle('slide', {direction: 'right'}, 800);
                //Remove Anime
                var removeAnime = anime({
                    targets: 'td img',
                    delay: 100,
                    opacity: 0,
                    rotate: '0'
                });
                sliding = false;
            });
        }
    }).swipe({
        swipe: function (event, phase, direction, distance, duration, fingerCount) {
            $(this).trigger('click');
        },
        fingers: 'all',
        maxTimeThreshold: 1000
    });
    //Entire Menu Track
    //Energy Track
    $('#entire-menu').on('click dblclick', function () {
        if (!sliding) {
            sliding = true;
            $('#screen1').fadeOut('slow', function () {
                $('#screen3').toggle('slide', {direction: 'right'}, 800, function () {
                    var twoRotation = anime({
                        targets: 'td img',
                        delay: 300,
                        opacity: 1,
                        rotate: '2turn'
                    });


                });
                sliding = false;
            });
        }
    }).swipe({
        swipe: function (event, phase, direction, distance, duration, fingerCount) {
            $(this).trigger('click');
        },
        fingers: 'all',
        maxTimeThreshold: 1000
    });
    //Smoothies Active
    $('#smoothies').on('click ', function () {

        $(this).removeClass('active');
        $('#juices, #bowls').removeClass('active');
        if ($('.bowls').is(':animated')) {
            $('.bowls').stop();
        }
        if ($('.juices').is(':animated')) {
            $('.juices').stop();
        }
        $('.bowls, .juices').hide();
        $('.smoothies').fadeIn('slow');

    }).swipe({
        swipe: function (event, phase, direction, distance, duration, fingerCount) {
            $(this).trigger('click');
        },
        fingers: 'all',
        maxTimeThreshold: 1000
    });
    $('#juices').on('click ', function () {

        $(this).addClass('active');
        $('#bowls').removeClass('active');
        $('#smoothies').addClass('active');
        if ($('.bowls').is(':animated')) {
            $('.bowls').stop();
        }
        if ($('.smoothies').is(':animated')) {
            $('.smoothies').stop();
        }
        $('.bowls, .smoothies').hide();
        $('.juices').fadeIn('slow');
    }).swipe({
        swipe: function (event, phase, direction, distance, duration, fingerCount) {
            $(this).trigger('click');
        },
        fingers: 'all',
        maxTimeThreshold: 1000
    });
    $('#bowls').on('click ', function () {

        $(this).addClass('active');
        $('#juices').removeClass('active');
        $('#smoothies').addClass('active');
        if ($('.juices').is(':animated')) {
            $('.juices').stop();
        }
        if ($('.smoothies').is(':animated')) {
            $('.smoothies').stop();
        }
        $('.juices, .smoothies').hide();
        $('.bowls').fadeIn('slow');

    }).swipe({
        swipe: function (event, phase, direction, distance, duration, fingerCount) {
            $(this).trigger('click');
        },
        fingers: 'all',
        maxTimeThreshold: 1000
    });
    $('#strawberry-wild').on('click dblclick', function () {
        if (!sliding) {
            sliding = true;

            $('.guide').fadeOut('slow', function () {
                $('#strawbFacts').toggle('slide', {direction: 'right'}, 800, function () {


                });
                sliding = false;
                ///////////////////////
                window.timeout = setTimeout(function () {
                    sliding = true
                    $('#strawbFacts').fadeOut('slow', function () {
                        $('.guide').toggle('slide', {direction: 'left'}, 800, function () {

                        });
                        sliding = false;
                    });
                }, 60000); //done :-)
                ///////////////////////
            });
        }
    }).swipe({
        swipe: function (event, phase, direction, distance, duration, fingerCount) {
            $(this).trigger('click');
        },
        fingers: 'all',
        maxTimeThreshold: 1000
    });
    $('#strawbFacts .nutritionBack').on('click dblclick', function () {
        ///////////////////////
        clearTimeout(window.timeout)
        ///////////////////////
        if (!sliding) {
            sliding = true;
            $('#strawbFacts').fadeOut('slow', function () {
                $('.guide').toggle('slide', {direction: 'left'}, 800, function () {


                });
                sliding = false;
            });
        }
    }).swipe({
        swipe: function (event, phase, direction, distance, duration, fingerCount) {
            $(this).trigger('click');
        },
        fingers: 'all',
        maxTimeThreshold: 1000
    });
    //Mango a go go
    $('#mango-a-go-go').on('click dblclick', function () {

        if (!sliding) {
            sliding = true;
            $('.guide').fadeOut('slow', function () {
                $('#mangoFacts').toggle('slide', {direction: 'right'}, 800, function () {


                });
                sliding = false;
                ///////////////////////
                window.timeout = setTimeout(function () {
                    sliding = true
                    $('#mangoFacts').fadeOut('slow', function () {
                        $('.guide').toggle('slide', {direction: 'left'}, 800, function () {

                        });
                        sliding = false;
                    });
                }, 60000); //done :-)
                ///////////////////////
            });
        }
    }).swipe({
        swipe: function (event, phase, direction, distance, duration, fingerCount) {
            $(this).trigger('click');
        },
        fingers: 'all',
        maxTimeThreshold: 1000
    });
    $('#mangoFacts .nutritionBack').on('click dblclick', function () {
        ///////////////////////
        clearTimeout(window.timeout)
        ///////////////////////
        if (!sliding) {
            sliding = true;
            $('#mangoFacts').fadeOut('slow', function () {
                $('.guide').toggle('slide', {direction: 'left'}, 800, function () {

                });
                sliding = false;
            });
        }
    }).swipe({
        swipe: function (event, phase, direction, distance, duration, fingerCount) {
            $(this).trigger('click');
        },
        fingers: 'all',
        maxTimeThreshold: 1000
    });
    //Razzmatazz
    $('#razz').on('click dblclick', function () {
        if (!sliding) {
            sliding = true;
            $('.guide').fadeOut('slow', function () {
                $('#razzFacts').toggle('slide', {direction: 'right'}, 800, function () {


                });
                sliding = false;
                ///////////////////////
                window.timeout = setTimeout(function () {
                    sliding = true
                    $('#razzFacts').fadeOut('slow', function () {
                        $('.guide').toggle('slide', {direction: 'left'}, 800, function () {

                        });
                        sliding = false;
                    });
                }, 60000); //done :-)
                ///////////////////////
            });
        }
    }).swipe({
        swipe: function (event, phase, direction, distance, duration, fingerCount) {
            $(this).trigger('click');
        },
        fingers: 'all',
        maxTimeThreshold: 1000
    });
    $('#razzFacts .nutritionBack').on('click dblclick', function () {
        ///////////////////////
        clearTimeout(window.timeout)
        ///////////////////////
        if (!sliding) {
            sliding = true;
            $('#razzFacts').fadeOut('slow', function () {
                $('.guide').toggle('slide', {direction: 'left'}, 800, function () {

                });
                sliding = false;
            });
        }
    }).swipe({
        swipe: function (event, phase, direction, distance, duration, fingerCount) {
            $(this).trigger('click');
        },
        fingers: 'all',
        maxTimeThreshold: 1000
    });
    //Aloha
    $('#aloha').on('click dblclick', function () {
        if (!sliding) {
            sliding = true;
            $('.guide').fadeOut('slow', function () {
                $('#alohaFacts').toggle('slide', {direction: 'right'}, 800, function () {


                });
                sliding = false;
                ///////////////////////
                window.timeout = setTimeout(function () {
                    sliding = true
                    $('#alohaFacts').fadeOut('slow', function () {
                        $('.guide').toggle('slide', {direction: 'left'}, 800, function () {

                        });
                        sliding = false;
                    });
                }, 60000); //done :-)
                ///////////////////////
            });
        }
    }).swipe({
        swipe: function (event, phase, direction, distance, duration, fingerCount) {
            $(this).trigger('click');
        },
        fingers: 'all',
        maxTimeThreshold: 1000
    });
    $('#alohaFacts .nutritionBack').on('click dblclick', function () {
        ///////////////////////
        clearTimeout(window.timeout)
        ///////////////////////
        if (!sliding) {
            sliding = true;
            $('#alohaFacts').fadeOut('slow', function () {
                $('.guide').toggle('slide', {direction: 'left'}, 800, function () {

                });
                sliding = false;
            });
        }
    }).swipe({
        swipe: function (event, phase, direction, distance, duration, fingerCount) {
            $(this).trigger('click');
        },
        fingers: 'all',
        maxTimeThreshold: 1000
    });
    //Surf
    $('#surf').on('click dblclick', function () {
        if (!sliding) {
            sliding = true;
            $('.guide').fadeOut('slow', function () {
                $('#surfFacts').toggle('slide', {direction: 'right'}, 800, function () {


                });
                sliding = false;
                ///////////////////////
                window.timeout = setTimeout(function () {
                    sliding = true
                    $('#surfFacts').fadeOut('slow', function () {
                        $('.guide').toggle('slide', {direction: 'left'}, 800, function () {

                        });
                        sliding = false;
                    });
                }, 60000); //done :-)
                ///////////////////////
            });
        }
    }).swipe({
        swipe: function (event, phase, direction, distance, duration, fingerCount) {
            $(this).trigger('click');
        },
        fingers: 'all',
        maxTimeThreshold: 1000
    });
    $('#surfFacts .nutritionBack').on('click dblclick', function () {
        ///////////////////////
        clearTimeout(window.timeout)
        ///////////////////////
        if (!sliding) {
            sliding = true;
            $('#surfFacts').fadeOut('slow', function () {
                $('.guide').toggle('slide', {direction: 'left'}, 800, function () {

                });
                sliding = false;
            });
        }
    }).swipe({
        swipe: function (event, phase, direction, distance, duration, fingerCount) {
            $(this).trigger('click');
        },
        fingers: 'all',
        maxTimeThreshold: 1000
    });
    //Carribbean
    $('#carr').on('click dblclick', function () {
        if (!sliding) {
            sliding = true;
            $('.guide').fadeOut('slow', function () {
                $('#carrFacts').toggle('slide', {direction: 'right'}, 800, function () {


                });
                sliding = false;
                ///////////////////////
                window.timeout = setTimeout(function () {
                    sliding = true
                    $('#carrFacts').fadeOut('slow', function () {
                        $('.guide').toggle('slide', {direction: 'left'}, 800, function () {

                        });
                        sliding = false;
                    });
                }, 60000); //done :-)
                ///////////////////////
            });
        }
    }).swipe({
        swipe: function (event, phase, direction, distance, duration, fingerCount) {
            $(this).trigger('click');
        },
        fingers: 'all',
        maxTimeThreshold: 1000
    });
    $('#carrFacts .nutritionBack').on('click dblclick', function () {
        ///////////////////////
        clearTimeout(window.timeout)
        ///////////////////////
        if (!sliding) {
            sliding = true;
            $('#carrFacts').fadeOut('slow', function () {
                $('.guide').toggle('slide', {direction: 'left'}, 800, function () {

                });
                sliding = false;
            });
        }
    }).swipe({
        swipe: function (event, phase, direction, distance, duration, fingerCount) {
            $(this).trigger('click');
        },
        fingers: 'all',
        maxTimeThreshold: 1000
    });
    //dream
    $('#dream').on('click dblclick', function () {
        if (!sliding) {
            sliding = true;
            $('.guide').fadeOut('slow', function () {
                $('#dreamFacts').toggle('slide', {direction: 'right'}, 800, function () {


                });
                sliding = false;
                ///////////////////////
                window.timeout = setTimeout(function () {
                    sliding = true
                    $('#dreamFacts').fadeOut('slow', function () {
                        $('.guide').toggle('slide', {direction: 'left'}, 800, function () {

                        });
                        sliding = false;
                    });
                }, 60000); //done :-)
                ///////////////////////
            });
        }
    }).swipe({
        swipe: function (event, phase, direction, distance, duration, fingerCount) {
            $(this).trigger('click');
        },
        fingers: 'all',
        maxTimeThreshold: 1000
    });
    $('#dreamFacts .nutritionBack').on('click dblclick', function () {
        ///////////////////////
        clearTimeout(window.timeout)
        ///////////////////////
        if (!sliding) {
            sliding = true;
            $('#dreamFacts').fadeOut('slow', function () {
                $('.guide').toggle('slide', {direction: 'left'}, 800, function () {

                });
                sliding = false;
            });
        }
    }).swipe({
        swipe: function (event, phase, direction, distance, duration, fingerCount) {
            $(this).trigger('click');
        },
        fingers: 'all',
        maxTimeThreshold: 1000
    });
    //matcha
    $('#blast').on('click dblclick', function () {
        if (!sliding) {
            sliding = true;
            $('.guide').fadeOut('slow', function () {
                $('#matchaFacts').toggle('slide', {direction: 'right'}, 800, function () {


                });
                sliding = false;
                ///////////////////////
                window.timeout = setTimeout(function () {
                    sliding = true
                    $('#matchaFacts').fadeOut('slow', function () {
                        $('.guide').toggle('slide', {direction: 'left'}, 800, function () {

                        });
                        sliding = false;
                    });
                }, 60000); //done :-)
                ///////////////////////
            });
        }
    }).swipe({
        swipe: function (event, phase, direction, distance, duration, fingerCount) {
            $(this).trigger('click');
        },
        fingers: 'all',
        maxTimeThreshold: 1000
    });
    $('#matchaFacts .nutritionBack').on('click dblclick', function () {
        ///////////////////////
        clearTimeout(window.timeout)
        ///////////////////////
        if (!sliding) {
            sliding = true;
            $('#matchaFacts').fadeOut('slow', function () {
                $('.guide').toggle('slide', {direction: 'left'}, 800, function () {

                });
                sliding = false;
            });
        }
    }).swipe({
        swipe: function (event, phase, direction, distance, duration, fingerCount) {
            $(this).trigger('click');
        },
        fingers: 'all',
        maxTimeThreshold: 1000
    });
    //pb
    $('#pb').on('click dblclick', function () {
        if (!sliding) {
            sliding = true;
            $('.guide').fadeOut('slow', function () {
                $('#pbFacts').toggle('slide', {direction: 'right'}, 800, function () {


                });
                sliding = false;
                ///////////////////////
                window.timeout = setTimeout(function () {
                    sliding = true
                    $('#pbFacts').fadeOut('slow', function () {
                        $('.guide').toggle('slide', {direction: 'left'}, 800, function () {

                        });
                        sliding = false;
                    });
                }, 60000); //done :-)
                ///////////////////////
            });
        }
    }).swipe({
        swipe: function (event, phase, direction, distance, duration, fingerCount) {
            $(this).trigger('click');
        },
        fingers: 'all',
        maxTimeThreshold: 1000
    });
    $('#pbFacts .nutritionBack').on('click dblclick', function () {
        ///////////////////////
        clearTimeout(window.timeout)
        ///////////////////////
        if (!sliding) {
            sliding = true;
            $('#pbFacts').fadeOut('slow', function () {
                $('.guide').toggle('slide', {direction: 'left'}, 800, function () {

                });
                sliding = false;
            });
        }
    }).swipe({
        swipe: function (event, phase, direction, distance, duration, fingerCount) {
            $(this).trigger('click');
        },
        fingers: 'all',
        maxTimeThreshold: 1000
    });
    //bowls
    //acai
    $('#acai').on('click dblclick', function () {
        if (!sliding) {
            sliding = true;
            $('.guide').fadeOut('slow', function () {
                $('#acaiFacts').toggle('slide', {direction: 'right'}, 800, function () {

                });
                sliding = false;
                ///////////////////////
                window.timeout = setTimeout(function () {
                    sliding = true
                    $('#acaiFacts').fadeOut('slow', function () {
                        $('.guide').toggle('slide', {direction: 'left'}, 800, function () {

                        });
                        sliding = false;
                    });
                }, 60000); //done :-)
                ///////////////////////
            });
        }
    }).swipe({
        swipe: function (event, phase, direction, distance, duration, fingerCount) {
            $(this).trigger('click');
        },
        fingers: 'all',
        maxTimeThreshold: 1000
    });
    $('#acaiFacts .nutritionBack').on('click dblclick', function () {
        ///////////////////////
        clearTimeout(window.timeout)
        ///////////////////////
        if (!sliding) {
            sliding = true;
            $('#acaiFacts').fadeOut('slow', function () {
                $('.guide').toggle('slide', {direction: 'left'}, 800, function () {

                });
                sliding = false;
            });
        }
    }).swipe({
        swipe: function (event, phase, direction, distance, duration, fingerCount) {
            $(this).trigger('click');
        },
        fingers: 'all',
        maxTimeThreshold: 1000
    });
    //island
    $('#island').on('click dblclick', function () {
        if (!sliding) {
            sliding = true;
            $('.guide').fadeOut('slow', function () {
                $('#islandFacts').toggle('slide', {direction: 'right'}, 800, function () {


                });
                sliding = false;
                ///////////////////////
                window.timeout = setTimeout(function () {
                    sliding = true
                    $('#islandFacts').fadeOut('slow', function () {
                        $('.guide').toggle('slide', {direction: 'left'}, 800, function () {

                        });
                        sliding = false;
                    });
                }, 60000); //done :-)
                ///////////////////////
            });
        }
    }).swipe({
        swipe: function (event, phase, direction, distance, duration, fingerCount) {
            $(this).trigger('click');
        },
        fingers: 'all',
        maxTimeThreshold: 1000
    });
    $('#islandFacts .nutritionBack').on('click dblclick', function () {
        ///////////////////////
        clearTimeout(window.timeout)
        ///////////////////////
        if (!sliding) {
            sliding = true;
            $('#islandFacts').fadeOut('slow', function () {
                $('.guide').toggle('slide', {direction: 'left'}, 800, function () {

                });
                sliding = false;
            });
        }
    }).swipe({
        swipe: function (event, phase, direction, distance, duration, fingerCount) {
            $(this).trigger('click');
        },
        fingers: 'all',
        maxTimeThreshold: 1000
    });
    //stell cut oats
    $('#oats').on('click dblclick', function () {
        if (!sliding) {
            sliding = true;
            $('.guide').fadeOut('slow', function () {
                $('#oatFacts').toggle('slide', {direction: 'right'}, 800, function () {


                });
                sliding = false;
                ///////////////////////
                window.timeout = setTimeout(function () {
                    sliding = true
                    $('#oatFacts').fadeOut('slow', function () {
                        $('.guide').toggle('slide', {direction: 'left'}, 800, function () {

                        });
                        sliding = false;
                    });
                }, 60000); //done :-)
                ///////////////////////
            });
        }
    }).swipe({
        swipe: function (event, phase, direction, distance, duration, fingerCount) {
            $(this).trigger('click');
        },
        fingers: 'all',
        maxTimeThreshold: 1000
    });
    $('#oatFacts .nutritionBack').on('click dblclick', function () {
        ///////////////////////
        clearTimeout(window.timeout)
        ///////////////////////
        if (!sliding) {
            sliding = true;
            $('#oatFacts').fadeOut('slow', function () {
                $('.guide').toggle('slide', {direction: 'left'}, 800, function () {

                });
                sliding = false;
            });
        }
    }).swipe({
        swipe: function (event, phase, direction, distance, duration, fingerCount) {
            $(this).trigger('click');
        },
        fingers: 'all',
        maxTimeThreshold: 1000
    });
    //juices
    //orange supreme
    $('#supreme').on('click dblclick', function () {
        if (!sliding) {
            sliding = true;
            $('.guide').fadeOut('slow', function () {
                $('#supremeFacts').toggle('slide', {direction: 'right'}, 800, function () {


                });
                sliding = false;
                ///////////////////////
                window.timeout = setTimeout(function () {
                    sliding = true
                    $('#supremeFacts').fadeOut('slow', function () {
                        $('.guide').toggle('slide', {direction: 'left'}, 800, function () {

                        });
                        sliding = false;
                    });
                }, 60000); //done :-)
                ///////////////////////
            });
        }
    }).swipe({

        swipe: function (event, phase, direction, distance, duration, fingerCount) {
            $(this).trigger('click');
        },
        fingers: 'all',
        maxTimeThreshold: 1000
    });
    $('#supremeFacts .nutritionBack').on('click dblclick', function () {
        ///////////////////////
        clearTimeout(window.timeout)
        ///////////////////////
        if (!sliding) {
            sliding = true;
            $('#supremeFacts').fadeOut('slow', function () {
                $('.guide').toggle('slide', {direction: 'left'}, 800, function () {

                });
                sliding = false;
            });
        }
    }).swipe({
        swipe: function (event, phase, direction, distance, duration, fingerCount) {
            $(this).trigger('click');
        },
        fingers: 'all',
        maxTimeThreshold: 1000
    });
    //tropical greens
    $('#tropical').on('click dblclick', function () {
        if (!sliding) {
            sliding = true;
            $('.guide').fadeOut('slow', function () {
                $('#tropFacts').toggle('slide', {direction: 'right'}, 800, function () {


                });
                sliding = false;
                ///////////////////////
                window.timeout = setTimeout(function () {
                    sliding = true
                    $('#tropFacts').fadeOut('slow', function () {
                        $('.guide').toggle('slide', {direction: 'left'}, 800, function () {

                        });
                        sliding = false;
                    });
                }, 60000); //done :-)
                ///////////////////////
            });
        }
    }).swipe({

        swipe: function (event, phase, direction, distance, duration, fingerCount) {
            $(this).trigger('click');
        },
        fingers: 'all',
        maxTimeThreshold: 1000
    });
    $('#tropFacts .nutritionBack').on('click dblclick', function () {
        ///////////////////////
        clearTimeout(window.timeout)
        ///////////////////////
        if (!sliding) {
            sliding = true;
            $('#tropFacts').fadeOut('slow', function () {
                $('.guide').toggle('slide', {direction: 'left'}, 800, function () {

                });
                sliding = false;
            });
        }
    }).swipe({
        swipe: function (event, phase, direction, distance, duration, fingerCount) {
            $(this).trigger('click');
        },
        fingers: 'all',
        maxTimeThreshold: 1000
    });
    //protein berry workout
    //tropical greens
    $('#e1').on('click dblclick', function () {
        if (!sliding) {
            sliding = true;
            $('.energy').fadeOut('slow', function () {
                $('#e1Facts').toggle('slide', {direction: 'right'}, 800, function () {


                });
                sliding = false;
                ///////////////////////
                window.timeout = setTimeout(function () {
                    sliding = true
                    $('#e1Facts').fadeOut('slow', function () {
                        $('.energy').toggle('slide', {direction: 'left'}, 800, function () {

                        });
                        sliding = false;
                    });
                }, 60000); //done :-)
                ///////////////////////
            });
        }
    }).swipe({
        swipe: function (event, phase, direction, distance, duration, fingerCount) {
            $(this).trigger('click');
        },
        fingers: 'all',
        maxTimeThreshold: 1000
    });
    $('#e1Facts .nutritionBack').on('click dblclick', function () {
        ///////////////////////
        clearTimeout(window.timeout)
        ///////////////////////
        if (!sliding) {
            sliding = true;
            $('#e1Facts').fadeOut('slow', function () {
                $('.energy').toggle('slide', {direction: 'left'}, 800, function () {

                });
                sliding = false;
            });
        }
    }).swipe({
        swipe: function (event, phase, direction, distance, duration, fingerCount) {
            $(this).trigger('click');
        },
        fingers: 'all',
        maxTimeThreshold: 1000
    });
    //acai primo bowl

    $('#e2').on('click dblclick', function () {
        if (!sliding) {
            sliding = true;
            $('.energy').fadeOut('slow', function () {
                $('#e2Facts').toggle('slide', {direction: 'right'}, 800, function () {


                });
                sliding = false;
                ///////////////////////
                window.timeout = setTimeout(function () {
                    sliding = true
                    $('#e2Facts').fadeOut('slow', function () {
                        $('.energy').toggle('slide', {direction: 'left'}, 800, function () {

                        });
                        sliding = false;
                    });
                }, 60000); //done :-)
                ///////////////////////
            });
        }
    }).swipe({
        swipe: function (event, phase, direction, distance, duration, fingerCount) {
            $(this).trigger('click');
        },
        fingers: 'all',
        maxTimeThreshold: 1000
    });
    $('#e2Facts .nutritionBack').on('click dblclick', function () {
        ///////////////////////
        clearTimeout(window.timeout)
        ///////////////////////
        if (!sliding) {
            sliding = true;
            $('#e2Facts').fadeOut('slow', function () {
                $('.energy').toggle('slide', {direction: 'left'}, 800, function () {

                });
                sliding = false;
            });
        }
    }).swipe({
        swipe: function (event, phase, direction, distance, duration, fingerCount) {
            $(this).trigger('click');
        },
        fingers: 'all',
        maxTimeThreshold: 1000
    });
    //acai super antioxidant
    $('#e3').on('click dblclick', function () {
        if (!sliding) {
            sliding = true;
            $('.energy').fadeOut('slow', function () {
                $('#e3Facts').toggle('slide', {direction: 'right'}, 800, function () {


                });
                sliding = false;
                ///////////////////////
                window.timeout = setTimeout(function () {
                    sliding = true
                    $('#e3Facts').fadeOut('slow', function () {
                        $('.energy').toggle('slide', {direction: 'left'}, 800, function () {

                        });
                        sliding = false;
                    });
                }, 60000); //done :-)
                ///////////////////////
            });
        }
    }).swipe({
        swipe: function (event, phase, direction, distance, duration, fingerCount) {
            $(this).trigger('click');
        },
        fingers: 'all',
        maxTimeThreshold: 1000
    });
    $('#e3Facts .nutritionBack').on('click dblclick', function () {
        ///////////////////////
        clearTimeout(window.timeout)
        ///////////////////////
        if (!sliding) {
            sliding = true;
            $('#e3Facts').fadeOut('slow', function () {
                $('.energy').toggle('slide', {direction: 'left'}, 800, function () {

                });
                sliding = false;
            });
        }
    }).swipe({
        swipe: function (event, phase, direction, distance, duration, fingerCount) {
            $(this).trigger('click');
        },
        fingers: 'all',
        maxTimeThreshold: 1000
    });
//apples n charge
    $('#e4').on('click dblclick', function () {
        if (!sliding) {
            sliding = true;
            $('.energy').fadeOut('slow', function () {
                $('#e4Facts').toggle('slide', {direction: 'right'}, 800, function () {

                });
                sliding = false;
                ///////////////////////
                window.timeout = setTimeout(function () {
                    sliding = true
                    $('#e4Facts').fadeOut('slow', function () {
                        $('.energy').toggle('slide', {direction: 'left'}, 800, function () {

                        });
                        sliding = false;
                    });
                }, 60000); //done :-)
                ///////////////////////

            });
        }
    }).swipe({
        swipe: function (event, phase, direction, distance, duration, fingerCount) {
            $(this).trigger('click');
        },
        fingers: 'all',
        maxTimeThreshold: 1000
    });


    $('#e4Facts .nutritionBack').on('click dblclick', function () {
        if (!sliding) {
            ///////////////////////
            clearTimeout(window.timeout)
            ///////////////////////
            sliding = true;
            $('#e4Facts').fadeOut('slow', function () {
                $('.energy').toggle('slide', {direction: 'left'}, 800, function () {
                    console.log('.energy sliding in from left')
                });
                sliding = false;
            });
        }
    }).swipe({
        swipe: function (event, phase, direction, distance, duration, fingerCount) {
            $(this).trigger('click');
        },
        fingers: 'all',
        maxTimeThreshold: 1000
    });
//orange carrot karma
    $('#h1').on('click dblclick', function () {
        if (!sliding) {
            sliding = true;
            $('.health').fadeOut('slow', function () {
                $('#h1Facts').toggle('slide', {direction: 'right'}, 800, function () {


                });
                sliding = false;
                ///////////////////////
                window.timeout = setTimeout(function () {
                    sliding = true
                    $('#h1Facts').fadeOut('slow', function () {
                        $('.health').toggle('slide', {direction: 'left'}, 800, function () {

                        });
                        sliding = false;
                    });
                }, 60000); //done :-)
                ///////////////////////
            });
        }
    }).swipe({
        swipe: function (event, phase, direction, distance, duration, fingerCount) {
            $(this).trigger('click');
        },
        fingers: 'all',
        maxTimeThreshold: 1000
    });
    $('#h1Facts .nutritionBack').on('click dblclick', function () {
        ///////////////////////
        clearTimeout(window.timeout)
        ///////////////////////
        if (!sliding) {
            sliding = true;
            $('#h1Facts').fadeOut('slow', function () {
                $('.health').toggle('slide', {direction: 'left'}, 800, function () {

                });
                sliding = false;
            });
        }
    }).swipe({
        swipe: function (event, phase, direction, distance, duration, fingerCount) {
            $(this).trigger('click');
        },
        fingers: 'all',
        maxTimeThreshold: 1000
    });
    //acai health
    $('#h2').on('click dblclick', function () {
        if (!sliding) {
            sliding = true;
            $('.health').fadeOut('slow', function () {
                $('#h2Facts').toggle('slide', {direction: 'right'}, 800, function () {


                });
                sliding = false;
                ///////////////////////
                window.timeout = setTimeout(function () {
                    sliding = true
                    $('#h2Facts').fadeOut('slow', function () {
                        $('.health').toggle('slide', {direction: 'left'}, 800, function () {

                        });
                        sliding = false;
                    });
                }, 60000); //done :-)
                ///////////////////////
            });
        }
    }).swipe({
        swipe: function (event, phase, direction, distance, duration, fingerCount) {
            $(this).trigger('click');
        },
        fingers: 'all',
        maxTimeThreshold: 1000
    });
    $('#h2Facts .nutritionBack').on('click dblclick', function () {
        ///////////////////////
        clearTimeout(window.timeout)
        ///////////////////////
        if (!sliding) {
            sliding = true;
            $('#h2Facts').fadeOut('slow', function () {
                $('.health').toggle('slide', {direction: 'left'}, 800, function () {

                });
                sliding = false;
            });
        }
    }).swipe({
        swipe: function (event, phase, direction, distance, duration, fingerCount) {
            $(this).trigger('click');
        },
        fingers: 'all',
        maxTimeThreshold: 1000
    });
    //greens n ginger
    $('#h3').on('click dblclick', function () {
        if (!sliding) {
            sliding = true;
            $('.health').fadeOut('slow', function () {
                $('#h3Facts').toggle('slide', {direction: 'right'}, 800, function () {

                });
                sliding = false;
                ///////////////////////
                window.timeout = setTimeout(function () {
                    sliding = true
                    $('#h3Facts').fadeOut('slow', function () {
                        $('.health').toggle('slide', {direction: 'left'}, 800, function () {

                        });
                        sliding = false;
                    });
                }, 60000); //done :-)
                ///////////////////////
            });
        }
    }).swipe({
        swipe: function (event, phase, direction, distance, duration, fingerCount) {
            $(this).trigger('click');
        },
        fingers: 'all',
        maxTimeThreshold: 1000
    });
    $('#h3Facts .nutritionBack').on('click dblclick', function () {
        ///////////////////////
        clearTimeout(window.timeout)
        ///////////////////////
        if (!sliding) {
            sliding = true;
            $('#h3Facts').fadeOut('slow', function () {
                $('.health').toggle('slide', {direction: 'left'}, 800, function () {

                });
                sliding = false;
            });
        }
    }).swipe({
        swipe: function (event, phase, direction, distance, duration, fingerCount) {
            $(this).trigger('click');
        },
        fingers: 'all',
        maxTimeThreshold: 1000
    });
//apples n greens
    $('#h4').on('click dblclick', function () {
        if (!sliding) {
            sliding = true;
            $('.health').fadeOut('slow', function () {
                $('#h4Facts').toggle('slide', {direction: 'right'}, 800, function () {


                });
                sliding = false;
                ///////////////////////
                window.timeout = setTimeout(function () {
                    sliding = true
                    $('#h4Facts').fadeOut('slow', function () {
                        $('.health').toggle('slide', {direction: 'left'}, 800, function () {

                        });
                        sliding = false;
                    });
                }, 60000); //done :-)
                ///////////////////////
            });
        }
    }).swipe({
        swipe: function (event, phase, direction, distance, duration, fingerCount) {
            $(this).trigger('click');
        },
        fingers: 'all',
        maxTimeThreshold: 1000
    });
    $('#h4Facts .nutritionBack').on('click dblclick', function () {
        ///////////////////////
        clearTimeout(window.timeout)
        ///////////////////////
        if (!sliding) {
            sliding = true;
            $('#h4Facts').fadeOut('slow', function () {
                $('.health').toggle('slide', {direction: 'left'}, 800, function () {

                });
                sliding = false;
            });
        }
    }).swipe({
        swipe: function (event, phase, direction, distance, duration, fingerCount) {
            $(this).trigger('click');
        },
        fingers: 'all',
        maxTimeThreshold: 1000
    });
    //mango a go go
    $('#f1').on('click dblclick', function () {
        if (!sliding) {
            sliding = true;
            $('.fun').fadeOut('slow', function () {
                $('#f1Facts').toggle('slide', {direction: 'right'}, 800, function () {

                });
                sliding = false;
                ///////////////////////
                window.timeout = setTimeout(function () {
                    sliding = true
                    $('#f1Facts').fadeOut('slow', function () {
                        $('.fun').toggle('slide', {direction: 'left'}, 800, function () {

                        });
                        sliding = false;
                    });
                }, 60000); //done :-)
                ///////////////////////
            });
        }
    }).swipe({
        swipe: function (event, phase, direction, distance, duration, fingerCount) {
            $(this).trigger('click');
        },
        fingers: 'all',
        maxTimeThreshold: 1000
    });
    $('#f1Facts .nutritionBack').on('click dblclick', function () {
        ///////////////////////
        clearTimeout(window.timeout)
        ///////////////////////
        if (!sliding) {
            sliding = true;
            $('#f1Facts').fadeOut('slow', function () {
                $('.fun').toggle('slide', {direction: 'left'}, 800, function () {

                });
                sliding = false;
            });
        }
    }).swipe({
        swipe: function (event, phase, direction, distance, duration, fingerCount) {
            $(this).trigger('click');
        },
        fingers: 'all',
        maxTimeThreshold: 1000
    });
    //surf
    $('#f2').on('click dblclick', function () {
        if (!sliding) {
            sliding = true;
            $('.fun').fadeOut('slow', function () {
                $('#f2Facts').toggle('slide', {direction: 'right'}, 800, function () {


                });
                sliding = false;
                ///////////////////////
                window.timeout = setTimeout(function () {
                    sliding = true
                    $('#f2Facts').fadeOut('slow', function () {
                        $('.fun').toggle('slide', {direction: 'left'}, 800, function () {

                        });
                        sliding = false;
                    });
                }, 60000); //done :-)
                ///////////////////////
            });
        }
    }).swipe({}).swipe({
        swipe: function (event, phase, direction, distance, duration, fingerCount) {
            $(this).trigger('click');
        },
        fingers: 'all',
        maxTimeThreshold: 1000
    });
    $('#f2Facts .nutritionBack').on('click dblclick', function () {
        ///////////////////////
        clearTimeout(window.timeout)
        ///////////////////////
        if (!sliding) {
            sliding = true;
            $('#f2Facts').fadeOut('slow', function () {
                $('.fun').toggle('slide', {direction: 'left'}, 800, function () {

                });
                sliding = false;
            });
        }
    }).swipe({
        swipe: function (event, phase, direction, distance, duration, fingerCount) {
            $(this).trigger('click');
        },
        fingers: 'all',
        maxTimeThreshold: 1000
    });
    //dream
    $('#f3').on('click dblclick', function () {
        if (!sliding) {
            sliding = true;
            $('.fun').fadeOut('slow', function () {
                $('#f3Facts').toggle('slide', {direction: 'right'}, 800, function () {


                });
                sliding = false;
                ///////////////////////
                window.timeout = setTimeout(function () {
                    sliding = true
                    $('#f3Facts').fadeOut('slow', function () {
                        $('.fun').toggle('slide', {direction: 'left'}, 800, function () {

                        });
                        sliding = false;
                    });
                }, 60000); //done :-)
                ///////////////////////
            });
        }
    }).swipe({
        swipe: function (event, phase, direction, distance, duration, fingerCount) {
            $(this).trigger('click');
        },
        fingers: 'all',
        maxTimeThreshold: 1000
    });
    $('#f3Facts .nutritionBack').on('click dblclick', function () {
        ///////////////////////
        clearTimeout(window.timeout)
        ///////////////////////
        if (!sliding) {
            sliding = true;
            $('#f3Facts').fadeOut('slow', function () {
                $('.fun').toggle('slide', {direction: 'left'}, 800, function () {

                });
                sliding = false;
            });
        }
    }).swipe({
        swipe: function (event, phase, direction, distance, duration, fingerCount) {
            $(this).trigger('click');
        },
        fingers: 'all',
        maxTimeThreshold: 1000
    });
    //choco mood
    $('#f4').on('click dblclick', function () {
        if (!sliding) {
            sliding = true;
            $('.fun').fadeOut('slow', function () {
                $('#f4Facts').toggle('slide', {direction: 'right'}, 800, function () {


                });
                sliding = false;
                ///////////////////////
                window.timeout = setTimeout(function () {
                    sliding = true
                    $('#f4Facts').fadeOut('slow', function () {
                        $('.fun').toggle('slide', {direction: 'left'}, 800, function () {

                        });
                        sliding = false;
                    });
                }, 60000); //done :-)
                ///////////////////////
            });
        }
    }).swipe({
        swipe: function (event, phase, direction, distance, duration, fingerCount) {
            $(this).trigger('click');
        },
        fingers: 'all',
        maxTimeThreshold: 1000
    });
    $('#f4Facts .nutritionBack').on('click dblclick', function () {
        ///////////////////////
        clearTimeout(window.timeout)
        ///////////////////////
        if (!sliding) {
            sliding = true;
            $('#f4Facts').fadeOut('slow', function () {
                $('.fun').toggle('slide', {direction: 'left'}, 800, function () {

                });
                sliding = false;
            });
        }
    }).swipe({
        swipe: function (event, phase, direction, distance, duration, fingerCount) {
            $(this).trigger('click');
        },
        fingers: 'all',
        maxTimeThreshold: 1000
    });
    //guide back
    //Energy back
    $('.guide .nutritionBack').on('click dblclick', function () {
        if (!sliding) {
            sliding = true;
            $('.guide').toggle('slide', {direction: 'left'}, 800, function () {
                $('#screen1').toggle('slide', {direction: 'right'}, 800);
                sliding = false;
            });
        }
    }).swipe({
        swipe: function (event, phase, direction, distance, duration, fingerCount) {
            $(this).trigger('click');
        },
        fingers: 'all',
        maxTimeThreshold: 1000
    });
}); //Document Ready
