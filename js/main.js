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
    
    var isReload = false
	
    var idleTime = 0
    
    var iderInterval = setInterval(timerIncrement, 1000)
    $(this).mousemove(function(e) {
        idleTime= 0
    })
    
    $(this).keypress(function(e) {
        idleTime= 0
    })
    
    
    function timerIncrement() {
        idleTime = idleTime + 1;
        if (idleTime > 32 && isReload) {
            isReload = false;
            $('.screen').fadeOut('slow', function () {
                setTimeout(function() {
                    $('#screen1').fadeIn('slow', function () {})
                },500)
            });          
        }
                                 
    }
    
//Classic Track
    $('#Classic').on('click dblclick', function () {
        isReload = true
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

    //Classic back
    $('.energy .backButton').on('click dblclick', function () {
        isReload = false;
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
	
	
    //Bowls
    $('#bowls').on('click dblclick', function () {
           isReload = true
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
	
    //Bowls Back
    $('.health .backButton').on('click dblclick', function () {
         isReload = false;
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
	
	
    //Power
    $('#Power').on('click dblclick', function () {
           isReload = true
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
	
    //Power back
    $('.fun .backButton').on('click dblclick', function () {
        isReload = false;
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
    
    
 //Shots 
    $('#Shots').on('click dblclick', function () {
           isReload = true
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
	
	//Shots back
    $('.backButton2').on('click dblclick', function () {
        isReload = false;
        if (!sliding) {
            sliding = true;
            $('#screen3').toggle('slide', {direction: 'left'}, 800, function () {
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


    	//Plant-based 
        $('#Plant-based').on('click dblclick', function () {
            isReload = true;
            if (!sliding) {
                sliding = true;
                $('#screen1').fadeOut('slow', function () {
                    $('#Plant-based-menu').toggle('slide', {direction: 'right'}, 800, function () {
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
    
        //Plant-based back
        $('.back').on('click dblclick', function () {
            isReload = false;
            if (!sliding) {
                sliding = true;
                $('#Plant-based-menu').toggle('slide', {direction: 'left'}, 800, function () {
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
    	
//Juices
    $('#Juices').on('click dblclick', function () {
        isReload = true
        if (!sliding) {
            sliding = true;
            $('#screen1').fadeOut('slow', function () {
                $('#Juices-menu').toggle('slide', {direction: 'right'}, 800, function () {
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

    //Juices back
    $('.Juices-back').on('click dblclick', function () {
        isReload = false;
        if (!sliding) {
            sliding = true;
            $('#Juices-menu').toggle('slide', {direction: 'left'}, 800, function () {
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
    

    
    
    
    
    
//Kids 
    $('#Kids').on('click dblclick', function () {
        isReload = true
        if (!sliding) {
            sliding = true;
            $('#screen1').fadeOut('slow', function () {
                $('#Kids-menu').toggle('slide', {direction: 'right'}, 800, function () {
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

    //Kids back
    $('.Kids-back').on('click dblclick', function () {
        isReload = false;
        if (!sliding) {
            sliding = true;
            $('#Kids-menu').toggle('slide', {direction: 'left'}, 800, function () {
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

	 ////////////////////////////////////////////////////////					
////////////// Shots SCREEN TRACK //////////////
////////////////////////////////////////////////////////


    $('#S1').on('click dblclick', function () {
        if (!sliding) {
            sliding = true;

            $('.guide').fadeOut('slow', function () {
                $('#S1Facts').toggle('slide', {direction: 'right'}, 800, function () {


                });
                sliding = false;
                ///////////////////////
//                window.timeout = setTimeout(function () {
//                    sliding = true
//                    $('#S1Facts').fadeOut('slow', function () {
//                        $('.guide').toggle('slide', {direction: 'left'}, 800, function () {
//
//                        });
//                        sliding = false;
//                    });
//                }, 60000); //done :-)
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
    $('#S1Facts .nutritionBack').on('click dblclick', function () {
        ///////////////////////
//        clearTimeout(window.timeout)
        ///////////////////////
        if (!sliding) {
            sliding = true;
            $('#S1Facts').fadeOut('slow', function () {
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

     ////////////////////////////////////////////////////////					
////////////// CLASSIC SCREEN TRACK //////////////
////////////////////////////////////////////////////////

	
    //Mango a go go
    $('#S2').on('click dblclick', function () {

        if (!sliding) {
            sliding = true;
            $('.guide').fadeOut('slow', function () {
                $('#S2Facts').toggle('slide', {direction: 'right'}, 800, function () {


                });
                sliding = false;
                ///////////////////////
//                window.timeout = setTimeout(function () {
//                    sliding = true
//                    $('#S2Facts').fadeOut('slow', function () {
//                        $('.guide').toggle('slide', {direction: 'left'}, 800, function () {
//
//                        });
//                        sliding = false;
//                    });
//                }, 60000); //done :-)
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
    $('#S2Facts .nutritionBack').on('click dblclick', function () {
        ///////////////////////
//        clearTimeout(window.timeout)
        ///////////////////////
        if (!sliding) {
            sliding = true;
            $('#S2Facts').fadeOut('slow', function () {
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
	
	
	$('#S3').on('click dblclick', function () {

        if (!sliding) {
            sliding = true;
            $('.guide').fadeOut('slow', function () {
                $('#S3Facts').toggle('slide', {direction: 'right'}, 800, function () {


                });
                sliding = false;
                ///////////////////////
//                window.timeout = setTimeout(function () {
//                    sliding = true
//                    $('#S2Facts').fadeOut('slow', function () {
//                        $('.guide').toggle('slide', {direction: 'left'}, 800, function () {
//
//                        });
//                        sliding = false;
//                    });
//                }, 60000); //done :-)
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
    $('#S3Facts .nutritionBack').on('click dblclick', function () {
        ///////////////////////
//        clearTimeout(window.timeout)
        ///////////////////////
        if (!sliding) {
            sliding = true;
            $('#S3Facts').fadeOut('slow', function () {
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
    $('#C1').on('click dblclick', function () {
        if (!sliding) {
            sliding = true;
            $('.energy').fadeOut('slow', function () {
                $('#C1Facts').toggle('slide', {direction: 'right'}, 800, function () {


                });
                sliding = false;
                ///////////////////////
//                window.timeout = setTimeout(function () {
//                    sliding = true
//                    $('#C1Facts').fadeOut('slow', function () {
//                        $('.energy').toggle('slide', {direction: 'left'}, 800, function () {
//
//                        });
//                        sliding = false;
//                    });
//                }, 60000); //done :-)
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
	
	
	
    $('#C1Facts .nutritionBack').on('click dblclick', function () {
        ///////////////////////
//        clearTimeout(window.timeout)
        ///////////////////////
        if (!sliding) {
            sliding = true;
            $('#C1Facts').fadeOut('slow', function () {
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

    $('#C2').on('click dblclick', function () {
        if (!sliding) {
            sliding = true;
            $('.energy').fadeOut('slow', function () {
                $('#C2Facts').toggle('slide', {direction: 'right'}, 800, function () {


                });
                sliding = false;
                ///////////////////////
//                window.timeout = setTimeout(function () {
//                    sliding = true
//                    $('#C2Facts').fadeOut('slow', function () {
//                        $('.energy').toggle('slide', {direction: 'left'}, 800, function () {
//
//                        });
//                        sliding = false;
//                    });
//                }, 60000); //done :-)
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
    $('#C2Facts .nutritionBack').on('click dblclick', function () {
        ///////////////////////
//        clearTimeout(window.timeout)
        ///////////////////////
        if (!sliding) {
            sliding = true;
            $('#C2Facts').fadeOut('slow', function () {
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
    $('#C3').on('click dblclick', function () {
        if (!sliding) {
            sliding = true;
            $('.energy').fadeOut('slow', function () {
                $('#C3Facts').toggle('slide', {direction: 'right'}, 800, function () {


                });
                sliding = false;
                ///////////////////////
//                window.timeout = setTimeout(function () {
//                    sliding = true
//                    $('#C3Facts').fadeOut('slow', function () {
//                        $('.energy').toggle('slide', {direction: 'left'}, 800, function () {
//
//                        });
//                        sliding = false;
//                    });
//                }, 60000); //done :-)
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
    $('#C3Facts .nutritionBack').on('click dblclick', function () {
        ///////////////////////
//        clearTimeout(window.timeout)
        ///////////////////////
        if (!sliding) {
            sliding = true;
            $('#C3Facts').fadeOut('slow', function () {
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
    $('#C4').on('click dblclick', function () {
        if (!sliding) {
            sliding = true;
            $('.energy').fadeOut('slow', function () {
                $('#C4Facts').toggle('slide', {direction: 'right'}, 800, function () {

                });
                sliding = false;
                ///////////////////////
//                window.timeout = setTimeout(function () {
//                    sliding = true
//                    $('#C4Facts').fadeOut('slow', function () {
//                        $('.energy').toggle('slide', {direction: 'left'}, 800, function () {
//
//                        });
//                        sliding = false;
//                    });
//                }, 60000); //done :-)
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


    $('#C4Facts .nutritionBack').on('click dblclick', function () {
        if (!sliding) {
            ///////////////////////
//            clearTimeout(window.timeout)
            ///////////////////////
            sliding = true;
            $('#C4Facts').fadeOut('slow', function () {
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
	
	//apples n charge
    $('#C5').on('click dblclick', function () {
        if (!sliding) {
            sliding = true;
            $('.energy').fadeOut('slow', function () {
                $('#C5Facts').toggle('slide', {direction: 'right'}, 800, function () {

                });
                sliding = false;
                ///////////////////////
//                window.timeout = setTimeout(function () {
//                    sliding = true
//                    $('#C5Facts').fadeOut('slow', function () {
//                        $('.energy').toggle('slide', {direction: 'left'}, 800, function () {
//
//                        });
//                        sliding = false;
//                    });
//                }, 60000); //done :-)
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


    $('#C5Facts .nutritionBack').on('click dblclick', function () {
        if (!sliding) {
            ///////////////////////
//            clearTimeout(window.timeout)
            ///////////////////////
            sliding = true;
            $('#C5Facts').fadeOut('slow', function () {
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
	
	//apples n charge
    $('#C6').on('click dblclick', function () {
        if (!sliding) {
            sliding = true;
            $('.energy').fadeOut('slow', function () {
                $('#C6Facts').toggle('slide', {direction: 'right'}, 800, function () {

                });
                sliding = false;
                ///////////////////////
//                window.timeout = setTimeout(function () {
//                    sliding = true
//                    $('#C6Facts').fadeOut('slow', function () {
//                        $('.energy').toggle('slide', {direction: 'left'}, 800, function () {
//
//                        });
//                        sliding = false;
//                    });
//                }, 60000); //done :-)
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


    $('#C6Facts .nutritionBack').on('click dblclick', function () {
        if (!sliding) {
            ///////////////////////
//            clearTimeout(window.timeout)
            ///////////////////////
            sliding = true;
            $('#C6Facts').fadeOut('slow', function () {
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
	
	//apples n charge
    $('#C7').on('click dblclick', function () {
        if (!sliding) {
            sliding = true;
            $('.energy').fadeOut('slow', function () {
                $('#C7Facts').toggle('slide', {direction: 'right'}, 800, function () {

                });
                sliding = false;
                ///////////////////////
//                window.timeout = setTimeout(function () {
//                    sliding = true
//                    $('#C7Facts').fadeOut('slow', function () {
//                        $('.energy').toggle('slide', {direction: 'left'}, 800, function () {
//
//                        });
//                        sliding = false;
//                    });
//                }, 60000); //done :-)
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


    $('#C7Facts .nutritionBack').on('click dblclick', function () {
        if (!sliding) {
            ///////////////////////
//            clearTimeout(window.timeout)
            ///////////////////////
            sliding = true;
            $('#C7Facts').fadeOut('slow', function () {
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
	
	//apples n charge
    $('#C8').on('click dblclick', function () {
        if (!sliding) {
            sliding = true;
            $('.energy').fadeOut('slow', function () {
                $('#C8Facts').toggle('slide', {direction: 'right'}, 800, function () {

                });
                sliding = false;
                ///////////////////////
//                window.timeout = setTimeout(function () {
//                    sliding = true
//                    $('#C8Facts').fadeOut('slow', function () {
//                        $('.energy').toggle('slide', {direction: 'left'}, 800, function () {
//
//                        });
//                        sliding = false;
//                    });
//                }, 60000); //done :-)
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


    $('#C8Facts .nutritionBack').on('click dblclick', function () {
        if (!sliding) {
            ///////////////////////
//            clearTimeout(window.timeout)
            ///////////////////////
            sliding = true;
            $('#C8Facts').fadeOut('slow', function () {
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
	
	//apples n charge
    $('#C9').on('click dblclick', function () {
        if (!sliding) {
            sliding = true;
            $('.energy').fadeOut('slow', function () {
                $('#C9Facts').toggle('slide', {direction: 'right'}, 800, function () {

                });
                sliding = false;
                ///////////////////////
//                window.timeout = setTimeout(function () {
//                    sliding = true
//                    $('#C9Facts').fadeOut('slow', function () {
//                        $('.energy').toggle('slide', {direction: 'left'}, 800, function () {
//
//                        });
//                        sliding = false;
//                    });
//                }, 60000); //done :-)
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


    $('#C9Facts .nutritionBack').on('click dblclick', function () {
        if (!sliding) {
            ///////////////////////
//            clearTimeout(window.timeout)
            ///////////////////////
            sliding = true;
            $('#C9Facts').fadeOut('slow', function () {
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
	
	//apples n charge
    $('#C10').on('click dblclick', function () {
        if (!sliding) {
            sliding = true;
            $('.energy').fadeOut('slow', function () {
                $('#C10Facts').toggle('slide', {direction: 'right'}, 800, function () {

                });
                sliding = false;
                ///////////////////////
//                window.timeout = setTimeout(function () {
//                    sliding = true
//                    $('#C10Facts').fadeOut('slow', function () {
//                        $('.energy').toggle('slide', {direction: 'left'}, 800, function () {
//
//                        });
//                        sliding = false;
//                    });
//                }, 60000); //done :-)
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


    $('#C10Facts .nutritionBack').on('click dblclick', function () {
        if (!sliding) {
            ///////////////////////
//            clearTimeout(window.timeout)
            ///////////////////////
            sliding = true;
            $('#C10Facts').fadeOut('slow', function () {
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
	
////////////////////////////////////////////////////////					
////////////// BOWLS SCREEN TRACK //////////////
////////////////////////////////////////////////////////
//orange carrot karma
    $('#B1').on('click dblclick', function () {
        if (!sliding) {
            sliding = true;
            $('.health').fadeOut('slow', function () {
                $('#B1Facts').toggle('slide', {direction: 'right'}, 800, function () {


                });
                sliding = false;
                ///////////////////////
//                window.timeout = setTimeout(function () {
//                    sliding = true
//                    $('#B1Facts').fadeOut('slow', function () {
//                        $('.health').toggle('slide', {direction: 'left'}, 800, function () {
//
//                        });
//                        sliding = false;
//                    });
//                }, 60000); //done :-)
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
    $('#B1Facts .nutritionBack').on('click dblclick', function () {
        ///////////////////////
//        clearTimeout(window.timeout)
        ///////////////////////
        if (!sliding) {
            sliding = true;
            $('#B1Facts').fadeOut('slow', function () {
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
    $('#B2').on('click dblclick', function () {
        if (!sliding) {
            sliding = true;
            $('.health').fadeOut('slow', function () {
                $('#B2Facts').toggle('slide', {direction: 'right'}, 800, function () {


                });
                sliding = false;
                ///////////////////////
//                window.timeout = setTimeout(function () {
//                    sliding = true
//                    $('#B2Facts').fadeOut('slow', function () {
//                        $('.health').toggle('slide', {direction: 'left'}, 800, function () {
//
//                        });
//                        sliding = false;
//                    });
//                }, 60000); //done :-)
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
    $('#B2Facts .nutritionBack').on('click dblclick', function () {
        ///////////////////////
//        clearTimeout(window.timeout)
        ///////////////////////
        if (!sliding) {
            sliding = true;
            $('#B2Facts').fadeOut('slow', function () {
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
    $('#B3').on('click dblclick', function () {
        if (!sliding) {
            sliding = true;
            $('.health').fadeOut('slow', function () {
                $('#B3Facts').toggle('slide', {direction: 'right'}, 800, function () {

                });
                sliding = false;
                ///////////////////////
//                window.timeout = setTimeout(function () {
//                    sliding = true
//                    $('#B3Facts').fadeOut('slow', function () {
//                        $('.health').toggle('slide', {direction: 'left'}, 800, function () {
//
//                        });
//                        sliding = false;
//                    });
//                }, 60000); //done :-)
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
    $('#B3Facts .nutritionBack').on('click dblclick', function () {
        ///////////////////////
//        clearTimeout(window.timeout)
        ///////////////////////
        if (!sliding) {
            sliding = true;
            $('#B3Facts').fadeOut('slow', function () {
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
    $('#B4').on('click dblclick', function () {
        if (!sliding) {
            sliding = true;
            $('.health').fadeOut('slow', function () {
                $('#B4Facts').toggle('slide', {direction: 'right'}, 800, function () {


                });
                sliding = false;
                ///////////////////////
//                window.timeout = setTimeout(function () {
//                    sliding = true
//                    $('#B4Facts').fadeOut('slow', function () {
//                        $('.health').toggle('slide', {direction: 'left'}, 800, function () {
//
//                        });
//                        sliding = false;
//                    });
//                }, 60000); //done :-)
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
    $('#B4Facts .nutritionBack').on('click dblclick', function () {
        ///////////////////////
//        clearTimeout(window.timeout)
        ///////////////////////
        if (!sliding) {
            sliding = true;
            $('#B4Facts').fadeOut('slow', function () {
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
    $('#B5').on('click dblclick', function () {
        if (!sliding) {
            sliding = true;
            $('.health').fadeOut('slow', function () {
                $('#B5Facts').toggle('slide', {direction: 'right'}, 800, function () {


                });
                sliding = false;
                ///////////////////////
//                window.timeout = setTimeout(function () {
//                    sliding = true
//                    $('#B5Facts').fadeOut('slow', function () {
//                        $('.health').toggle('slide', {direction: 'left'}, 800, function () {
//
//                        });
//                        sliding = false;
//                    });
//                }, 60000); //done :-)
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
    $('#B5Facts .nutritionBack').on('click dblclick', function () {
        ///////////////////////
//        clearTimeout(window.timeout)
        ///////////////////////
        if (!sliding) {
            sliding = true;
            $('#B5Facts').fadeOut('slow', function () {
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
	
	
////////////////////////////////////////////////////////					
////////////// POWER SCREEN TRACK //////////////
////////////////////////////////////////////////////////
	
    //mango a go go
    $('#P1').on('click dblclick', function () {
        if (!sliding) {
            sliding = true;
            $('.fun').fadeOut('slow', function () {
                $('#P1Facts').toggle('slide', {direction: 'right'}, 800, function () {

                });
                sliding = false;
                ///////////////////////
//                window.timeout = setTimeout(function () {
//                    sliding = true
//                    $('#P1Facts').fadeOut('slow', function () {
//                        $('.fun').toggle('slide', {direction: 'left'}, 800, function () {
//
//                        });
//                        sliding = false;
//                    });
//                }, 60000); //done :-)
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
    $('#P1Facts .nutritionBack').on('click dblclick', function () {
        ///////////////////////
//        clearTimeout(window.timeout)
        ///////////////////////
        if (!sliding) {
            sliding = true;
            $('#P1Facts').fadeOut('slow', function () {
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
    $('#P2').on('click dblclick', function () {
        if (!sliding) {
            sliding = true;
            $('.fun').fadeOut('slow', function () {
                $('#P2Facts').toggle('slide', {direction: 'right'}, 800, function () {


                });
                sliding = false;
                ///////////////////////
//                window.timeout = setTimeout(function () {
//                    sliding = true
//                    $('#P2Facts').fadeOut('slow', function () {
//                        $('.fun').toggle('slide', {direction: 'left'}, 800, function () {
//
//                        });
//                        sliding = false;
//                    });
//                }, 60000); //done :-)
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
    $('#P2Facts .nutritionBack').on('click dblclick', function () {
        ///////////////////////
//        clearTimeout(window.timeout)
        ///////////////////////
        if (!sliding) {
            sliding = true;
            $('#P2Facts').fadeOut('slow', function () {
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
    $('#P3').on('click dblclick', function () {
        if (!sliding) {
            sliding = true;
            $('.fun').fadeOut('slow', function () {
                $('#P3Facts').toggle('slide', {direction: 'right'}, 800, function () {


                });
                sliding = false;
                ///////////////////////
//                window.timeout = setTimeout(function () {
//                    sliding = true
//                    $('#P3Facts').fadeOut('slow', function () {
//                        $('.fun').toggle('slide', {direction: 'left'}, 800, function () {
//
//                        });
//                        sliding = false;
//                    });
//                }, 60000); //done :-)
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
    $('#P3Facts .nutritionBack').on('click dblclick', function () {
        ///////////////////////
//        clearTimeout(window.timeout)
        ///////////////////////
        if (!sliding) {
            sliding = true;
            $('#P3Facts').fadeOut('slow', function () {
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
    $('#P4').on('click dblclick', function () {
        if (!sliding) {
            sliding = true;
            $('.fun').fadeOut('slow', function () {
                $('#P4Facts').toggle('slide', {direction: 'right'}, 800, function () {


                });
                sliding = false;
                ///////////////////////
//                window.timeout = setTimeout(function () {
//                    sliding = true
//                    $('#P4Facts').fadeOut('slow', function () {
//                        $('.fun').toggle('slide', {direction: 'left'}, 800, function () {
//
//                        });
//                        sliding = false;
//                    });
//                }, 60000); //done :-)
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
    $('#P4Facts .nutritionBack').on('click dblclick', function () {
        ///////////////////////
//        clearTimeout(window.timeout)
        ///////////////////////
        if (!sliding) {
            sliding = true;
            $('#P4Facts').fadeOut('slow', function () {
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
    $('#P5').on('click dblclick', function () {
        if (!sliding) {
            sliding = true;
            $('.fun').fadeOut('slow', function () {
                $('#P5Facts').toggle('slide', {direction: 'right'}, 800, function () {


                });
                sliding = false;
                ///////////////////////
//                window.timeout = setTimeout(function () {
//                    sliding = true
//                    $('#P5Facts').fadeOut('slow', function () {
//                        $('.fun').toggle('slide', {direction: 'left'}, 800, function () {
//
//                        });
//                        sliding = false;
//                    });
//                }, 60000); //done :-)
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
    $('#P5Facts .nutritionBack').on('click dblclick', function () {
        ///////////////////////
//        clearTimeout(window.timeout)
        ///////////////////////
        if (!sliding) {
            sliding = true;
            $('#P5Facts').fadeOut('slow', function () {
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
	

	
    
////////////////////////////////////////////////////////					
////////////// PLANT-BASED SCREEN TRACK //////////////
////////////////////////////////////////////////////////
    
	//Apples N Greens
    $('#PB1').on('click dblclick', function () {
        if (!sliding) {
            sliding = true;
            $('.Plant-based').fadeOut('slow', function () {
                $('#PB1Facts').toggle('slide', {direction: 'right'}, 800, function () {

                });
                sliding = false;
                ///////////////////////
//                window.timeout = setTimeout(function () {
//                    sliding = true
//                    $('#PB1Facts').fadeOut('slow', function () {
//                        $('.Plant-based').toggle('slide', {direction: 'left'}, 800, function () {
//
//                        });
//                        sliding = false;
//                    });
//                }, 60000); //done :-)
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
    $('#PB1Facts .nutritionBack').on('click dblclick', function () {
        ///////////////////////
//        clearTimeout(window.timeout)
        ///////////////////////
        if (!sliding) {
            sliding = true;
            $('#PB1Facts').fadeOut('slow', function () {
                $('.Plant-based').toggle('slide', {direction: 'left'}, 800, function () {

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
	
    //Mega Mango
    $('#PB2').on('click dblclick', function () {
        if (!sliding) {
            sliding = true;
            $('.Plant-based').fadeOut('slow', function () {
                $('#PB2Facts').toggle('slide', {direction: 'right'}, 800, function () {


                });
                sliding = false;
                ///////////////////////
//                window.timeout = setTimeout(function () {
//                    sliding = true
//                    $('#PB2Facts').fadeOut('slow', function () {
//                        $('.Plant-based').toggle('slide', {direction: 'left'}, 800, function () {
//
//                        });
//                        sliding = false;
//                    });
//                }, 60000); //done :-)
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
	
    $('#PB2Facts .nutritionBack').on('click dblclick', function () {
        ///////////////////////
//        clearTimeout(window.timeout)
        ///////////////////////
        if (!sliding) {
            sliding = true;
            $('#PB2Facts').fadeOut('slow', function () {
                $('.Plant-based').toggle('slide', {direction: 'left'}, 800, function () {

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
	
    //Strawberry Whirl
    $('#PB3').on('click dblclick', function () {
        if (!sliding) {
            sliding = true;
            $('.Plant-based').fadeOut('slow', function () {
                $('#PB3Facts').toggle('slide', {direction: 'right'}, 800, function () {


                });
                sliding = false;
                ///////////////////////
//                window.timeout = setTimeout(function () {
//                    sliding = true
//                    $('#PB3Facts').fadeOut('slow', function () {
//                        $('.Plant-based').toggle('slide', {direction: 'left'}, 800, function () {
//
//                        });
//                        sliding = false;
//                    });
//                }, 60000); //done :-)
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
    $('#PB3Facts .nutritionBack').on('click dblclick', function () {
        ///////////////////////
//        clearTimeout(window.timeout)
        ///////////////////////
        if (!sliding) {
            sliding = true;
            $('#PB3Facts').fadeOut('slow', function () {
                $('.Plant-based').toggle('slide', {direction: 'left'}, 800, function () {

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
	
    //Greens N Ginger
    $('#PB4').on('click dblclick', function () {
        if (!sliding) {
            sliding = true;
            $('.Plant-based').fadeOut('slow', function () {
                $('#PB4Facts').toggle('slide', {direction: 'right'}, 800, function () {


                });
                sliding = false;
                ///////////////////////
//                window.timeout = setTimeout(function () {
//                    sliding = true
//                    $('#PB4Facts').fadeOut('slow', function () {
//                        $('.Plant-based').toggle('slide', {direction: 'left'}, 800, function () {
//
//                        });
//                        sliding = false;
//                    });
//                }, 60000); //done :-)
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
    $('#PB4Facts .nutritionBack').on('click dblclick', function () {
        ///////////////////////
//        clearTimeout(window.timeout)
        ///////////////////////
        if (!sliding) {
            sliding = true;
            $('#PB4Facts').fadeOut('slow', function () {
                $('.Plant-based').toggle('slide', {direction: 'left'}, 800, function () {

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
	
	//Pomegranate Paradise
    $('#PB5').on('click dblclick', function () {
        if (!sliding) {
            sliding = true;
            $('.Plant-based').fadeOut('slow', function () {
                $('#PB5Facts').toggle('slide', {direction: 'right'}, 800, function () {


                });
                sliding = false;
                ///////////////////////
//                window.timeout = setTimeout(function () {
//                    sliding = true
//                    $('#PB5Facts').fadeOut('slow', function () {
//                        $('.Plant-based').toggle('slide', {direction: 'left'}, 800, function () {
//
//                        });
//                        sliding = false;
//                    });
//                }, 60000); //done :-)
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
    $('#PB5Facts .nutritionBack').on('click dblclick', function () {
        ///////////////////////
//        clearTimeout(window.timeout)
        ///////////////////////
        if (!sliding) {
            sliding = true;
            $('#PB5Facts').fadeOut('slow', function () {
                $('.Plant-based').toggle('slide', {direction: 'left'}, 800, function () {

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
	
	//Peach Perfection
    $('#PB6').on('click dblclick', function () {
        if (!sliding) {
            sliding = true;
            $('.Plant-based').fadeOut('slow', function () {
                $('#PB6Facts').toggle('slide', {direction: 'right'}, 800, function () {


                });
                sliding = false;
                ///////////////////////
//                window.timeout = setTimeout(function () {
//                    sliding = true
//                    $('#PB6Facts').fadeOut('slow', function () {
//                        $('.Plant-based').toggle('slide', {direction: 'left'}, 800, function () {
//
//                        });
//                        sliding = false;
//                    });
//                }, 60000); //done :-)
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
    $('#PB6Facts .nutritionBack').on('click dblclick', function () {
        ///////////////////////
//        clearTimeout(window.timeout)
        ///////////////////////
        if (!sliding) {
            sliding = true;
            $('#PB6Facts').fadeOut('slow', function () {
                $('.Plant-based').toggle('slide', {direction: 'left'}, 800, function () {

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
	
	//smooth talkin mango
    $('#PB7').on('click dblclick', function () {
        if (!sliding) {
            sliding = true;
            $('.Plant-based').fadeOut('slow', function () {
                $('#PB7Facts').toggle('slide', {direction: 'right'}, 800, function () {


                });
                sliding = false;
                ///////////////////////
//                window.timeout = setTimeout(function () {
//                    sliding = true
//                    $('#PB7Facts').fadeOut('slow', function () {
//                        $('.Plant-based').toggle('slide', {direction: 'left'}, 800, function () {
//
//                        });
//                        sliding = false;
//                    });
//                }, 60000); //done :-)
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
    $('#PB7Facts .nutritionBack').on('click dblclick', function () {
        ///////////////////////
//        clearTimeout(window.timeout)
        ///////////////////////
        if (!sliding) {
            sliding = true;
            $('#PB7Facts').fadeOut('slow', function () {
                $('.Plant-based').toggle('slide', {direction: 'left'}, 800, function () {

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
	
	//vanilla blue sky
    $('#PB8').on('click dblclick', function () {
        if (!sliding) {
            sliding = true;
            $('.Plant-based').fadeOut('slow', function () {
                $('#PB8Facts').toggle('slide', {direction: 'right'}, 800, function () {


                });
                sliding = false;
                ///////////////////////
//                window.timeout = setTimeout(function () {
//                    sliding = true
//                    $('#PB8Facts').fadeOut('slow', function () {
//                        $('.Plant-based').toggle('slide', {direction: 'left'}, 800, function () {
//
//                        });
//                        sliding = false;
//                    });
//                }, 60000); //done :-)
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
    $('#PB8Facts .nutritionBack').on('click dblclick', function () {
        ///////////////////////
//        clearTimeout(window.timeout)
        ///////////////////////
        if (!sliding) {
            sliding = true;
            $('#PB8Facts').fadeOut('slow', function () {
                $('.Plant-based').toggle('slide', {direction: 'left'}, 800, function () {

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
	
	
	
////////////////////////////////////////////////////////					
////////////// JUICES SCREEN TRACK //////////////
////////////////////////////////////////////////////////
	

	
	//orange carrot twist
    $('#J1').on('click dblclick', function () {
        if (!sliding) {
            sliding = true;
            $('.Juices').fadeOut('slow', function () {
                $('#J1Facts').toggle('slide', {direction: 'right'}, 800, function () {


                });
                sliding = false;
                ///////////////////////
//                window.timeout = setTimeout(function () {
//                    sliding = true
//                    $('#J1Facts').fadeOut('slow', function () {
//                        $('.Juices').toggle('slide', {direction: 'left'}, 800, function () {
//
//                        });
//                        sliding = false;
//                    });
//                }, 60000); //done :-)
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
    $('#J1Facts .nutritionBack').on('click dblclick', function () {
        ///////////////////////
//        clearTimeout(window.timeout)
        ///////////////////////
        if (!sliding) {
            sliding = true;
            $('#J1Facts').fadeOut('slow', function () {
                $('.Juices').toggle('slide', {direction: 'left'}, 800, function () {

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
	
	//Purely orange
    $('#J2').on('click dblclick', function () {
        if (!sliding) {
            sliding = true;
            $('.Juices').fadeOut('slow', function () {
                $('#J2Facts').toggle('slide', {direction: 'right'}, 800, function () {


                });
                sliding = false;
                ///////////////////////
//                window.timeout = setTimeout(function () {
//                    sliding = true
//                    $('#J2Facts').fadeOut('slow', function () {
//                        $('.Juices').toggle('slide', {direction: 'left'}, 800, function () {
//
//                        });
//                        sliding = false;
//                    });
//                }, 60000); //done :-)
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
    $('#J2Facts .nutritionBack').on('click dblclick', function () {
        ///////////////////////
//        clearTimeout(window.timeout)
        ///////////////////////
        if (!sliding) {
            sliding = true;
            $('#J2Facts').fadeOut('slow', function () {
                $('.Juices').toggle('slide', {direction: 'left'}, 800, function () {

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
	
	//Purely carrot
    $('#J3').on('click dblclick', function () {
        if (!sliding) {
            sliding = true;
            $('.Juices').fadeOut('slow', function () {
                $('#J3Facts').toggle('slide', {direction: 'right'}, 800, function () {


                });
                sliding = false;
                ///////////////////////
//                window.timeout = setTimeout(function () {
//                    sliding = true
//                    $('#J3Facts').fadeOut('slow', function () {
//                        $('.Juices').toggle('slide', {direction: 'left'}, 800, function () {
//
//                        });
//                        sliding = false;
//                    });
//                }, 60000); //done :-)
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
    $('#J3Facts .nutritionBack').on('click dblclick', function () {
        ///////////////////////
//        clearTimeout(window.timeout)
        ///////////////////////
        if (!sliding) {
            sliding = true;
            $('#J3Facts').fadeOut('slow', function () {
                $('.Juices').toggle('slide', {direction: 'left'}, 800, function () {

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
	
////////////////////////////////////////////////////////					
////////////// KIDS SCREEN TRACK //////////////
////////////////////////////////////////////////////////

	//blueberry strawberry blast-off 
    $('#K1').on('click dblclick', function () {
        if (!sliding) {
            sliding = true;
            $('.Kids').fadeOut('slow', function () {
                $('#K1Facts').toggle('slide', {direction: 'right'}, 800, function () {


                });
                sliding = false;
                ///////////////////////
//                window.timeout = setTimeout(function () {
//                    sliding = true
//                    $('#K1Facts').fadeOut('slow', function () {
//                        $('.Kids').toggle('slide', {direction: 'left'}, 800, function () {
//
//                        });
//                        sliding = false;
//                    });
//                }, 60000); //done :-)
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
    $('#K1Facts .nutritionBack').on('click dblclick', function () {
        ///////////////////////
//        clearTimeout(window.timeout)
        ///////////////////////
        if (!sliding) {
            sliding = true;
            $('#K1Facts').fadeOut('slow', function () {
                $('.Kids').toggle('slide', {direction: 'left'}, 800, function () {

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
	
	//Purely orange
    $('#K2').on('click dblclick', function () {
        if (!sliding) {
            sliding = true;
            $('.Kids').fadeOut('slow', function () {
                $('#K2Facts').toggle('slide', {direction: 'right'}, 800, function () {


                });
                sliding = false;
                ///////////////////////
//                window.timeout = setTimeout(function () {
//                    sliding = true
//                    $('#K2Facts').fadeOut('slow', function () {
//                        $('.Kids').toggle('slide', {direction: 'left'}, 800, function () {
//
//                        });
//                        sliding = false;
//                    });
//                }, 60000); //done :-)
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
    $('#K2Facts .nutritionBack').on('click dblclick', function () {
        ///////////////////////
//        clearTimeout(window.timeout)
        ///////////////////////
        if (!sliding) {
            sliding = true;
            $('#K2Facts').fadeOut('slow', function () {
                $('.Kids').toggle('slide', {direction: 'left'}, 800, function () {

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
	
	
}); //Document Ready
