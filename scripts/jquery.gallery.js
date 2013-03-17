$(function(){

    var resorts = [
        {src: "work/resorts/thumb/03-PPV-Bedroom-1.jpg", alt: "work/resorts/big/03-PPV-Bedroom-1.jpg", description: ""},
        {src: "work/resorts/thumb/03B-PPV-Bedroom-2.jpg", alt: "work/resorts/big/03B-PPV-Bedroom-2.jpg", description: ""},
        {src: "work/resorts/thumb/05_CC_Bathroom2.jpg", alt: "work/resorts/big/05_CC_Bathroom2.jpg", description: ""},
        {src: "work/resorts/thumb/06-Pool-Villa-904-LR.jpg", alt: "work/resorts/big/06-Pool-Villa-904-LR.jpg", description: ""},
        {src: "work/resorts/thumb/06_CoffeeLoungeCloseup.jpg", alt: "work/resorts/big/06_CoffeeLoungeCloseup.jpg", description: ""},
        {src: "work/resorts/thumb/07-Coorg-Rom-Dng.jpg", alt: "work/resorts/big/07-Coorg-Rom-Dng.jpg", description: ""},
        {src: "work/resorts/thumb/09-PH-Living-Room.jpg", alt: "work/resorts/big/09-PH-Living-Room.jpg", description: ""},
        {src: "work/resorts/thumb/600HEIGHT.jpg", alt: "work/resorts/big/600HEIGHT.jpg", description: ""},
        {src: "work/resorts/thumb/618HEIGHT.jpg", alt: "work/resorts/big/618HEIGHT.jpg", description: ""},
        {src: "work/resorts/thumb/728HEIGHT.jpg", alt: "work/resorts/big/728HEIGHT.jpg", description: ""},
        {src: "work/resorts/thumb/750HEIGHT.jpg", alt: "work/resorts/big/750HEIGHT.jpg", description: ""},
        {src: "work/resorts/thumb/Boat-Dining.jpg", alt: "work/resorts/big/Boat-Dining.jpg", description: ""},
        {src: "work/resorts/thumb/CfLngeOverview.jpg", alt: "work/resorts/big/CfLngeOverview.jpg", description: ""},
        {src: "work/resorts/thumb/Coffee-Lounge-Cl-up.jpg", alt: "work/resorts/big/Coffee-Lounge-Cl-up.jpg", description: ""},
        {src: "work/resorts/thumb/Granary-Pool.jpg", alt: "work/resorts/big/Granary-Pool.jpg", description: ""},
        {src: "work/resorts/thumb/H_JH_Pool-Ctyd.jpg", alt: "work/resorts/big/H_JH_Pool-Ctyd.jpg", description: ""},
        {src: "work/resorts/thumb/H_PH_Pool-Ctyd.jpg", alt: "work/resorts/big/H_PH_Pool-Ctyd.jpg", description: ""},
        {src: "work/resorts/thumb/H_PPV-Bathroom.jpg", alt: "work/resorts/big/H_PPV-Bathroom.jpg", description: ""},
        {src: "work/resorts/thumb/H_PPV-Pool-Ctyd-2.jpg", alt: "work/resorts/big/H_PPV-Pool-Ctyd-2.jpg", description: ""},
        {src: "work/resorts/thumb/H_PPV-Pool-Ctyd.jpg", alt: "work/resorts/big/H_PPV-Pool-Ctyd.jpg", description: ""},
        {src: "work/resorts/thumb/InfinPool2.jpg", alt: "work/resorts/big/InfinPool2.jpg", description: ""},
        {src: "work/resorts/thumb/JH-Bedroom-1.jpg", alt: "work/resorts/big/JH-Bedroom-1.jpg", description: ""},
        {src: "work/resorts/thumb/JH-Bedroom-2.jpg", alt: "work/resorts/big/JH-Bedroom-2.jpg", description: ""},
        {src: "work/resorts/thumb/JH-Dining-Room.jpg", alt: "work/resorts/big/JH-Dining-Room.jpg", description: ""},
        {src: "work/resorts/thumb/JH-Living-Room.jpg", alt: "work/resorts/big/JH-Living-Room.jpg", description: ""},
        {src: "work/resorts/thumb/Kuruba-2.jpg", alt: "work/resorts/big/Kuruba-2.jpg", description: ""},
        {src: "work/resorts/thumb/Makkere-1.jpg", alt: "work/resorts/big/Makkere-1.jpg", description: ""},
        {src: "work/resorts/thumb/Pano-PH-Sitout-Pano.jpg", alt: "work/resorts/big/Pano-PH-Sitout-Pano.jpg", description: ""},
        {src: "work/resorts/thumb/Pano_Coffee-Lnge.jpg", alt: "work/resorts/big/Pano_Coffee-Lnge.jpg", description: ""},
        {src: "work/resorts/thumb/Pano_Infin-Pool-old.jpg", alt: "work/resorts/big/Pano_Infin-Pool-old.jpg", description: ""},
        {src: "work/resorts/thumb/Pano_JH-Basthroom.jpg", alt: "work/resorts/big/Pano_JH-Basthroom.jpg", description: ""},
        {src: "work/resorts/thumb/Pano_Overview.jpg", alt: "work/resorts/big/Pano_Overview.jpg", description: ""},
        {src: "work/resorts/thumb/PH-Bedroom-1.jpg", alt: "work/resorts/big/PH-Bedroom-1.jpg", description: ""},
        {src: "work/resorts/thumb/PH-Bedroom-2.jpg", alt: "work/resorts/big/PH-Bedroom-2.jpg", description: ""},
        {src: "work/resorts/thumb/PH-Dining-Room.jpg", alt: "work/resorts/big/PH-Dining-Room.jpg", description: ""},
        {src: "work/resorts/thumb/PoolHutPool2.jpg", alt: "work/resorts/big/PoolHutPool2.jpg", description: ""},
        {src: "work/resorts/thumb/PRV_Bathroom.jpg", alt: "work/resorts/big/PRV_Bathroom.jpg", description: ""},
        {src: "work/resorts/thumb/PRV_Bedroom.jpg", alt: "work/resorts/big/PRV_Bedroom.jpg", description: ""},
        {src: "work/resorts/thumb/PRV_Living-Room.jpg", alt: "work/resorts/big/PRV_Living-Room.jpg", description: ""},
        {src: "work/resorts/thumb/Restaurant.jpg", alt: "work/resorts/big/Restaurant.jpg", description: ""},
        {src: "work/resorts/thumb/Romantic-Dng-K.jpg", alt: "work/resorts/big/Romantic-Dng-K.jpg", description: ""},
        {src: "work/resorts/thumb/scpace2.jpg", alt: "work/resorts/big/scpace2.jpg", description: ""},
        {src: "work/resorts/thumb/space2.jpg", alt: "work/resorts/big/space2.jpg", description: ""},
        {src: "work/resorts/thumb/V_PPV-Bedoorm.jpg", alt: "work/resorts/big/V_PPV-Bedoorm.jpg", description: ""}
    ];
    var three60 = resorts.slice(0);
    var archives = resorts.slice(0);
    var personal = [
        {src: "work/personal/thumb/amitheri.jpg", alt: "work/personal/big/amitheri.jpg", description: ""},
        {src: "work/personal/thumb/gerard.jpg", alt: "work/personal/big/gerard.jpg", description: ""},
        {src: "work/personal/thumb/hamesh.jpg", alt: "work/personal/big/hamesh.jpg", description: ""},
        {src: "work/personal/thumb/harati.jpg", alt: "work/personal/big/harati.jpg", description: ""},
        {src: "work/personal/thumb/konarak.jpg", alt: "work/personal/big/konarak.jpg", description: ""},
        {src: "work/personal/thumb/mariamhappy.jpg", alt: "work/personal/big/mariamhappy.jpg", description: ""},
        {src: "work/personal/thumb/Nika_1998.jpg", alt: "work/personal/big/Nika_1998.jpg", description: ""},
        {src: "work/personal/thumb/peterswings.jpg", alt: "work/personal/big/peterswings.jpg", description: ""},
        {src: "work/personal/thumb/prakash.jpg", alt: "work/personal/big/prakash.jpg", description: ""},
        {src: "work/personal/thumb/pramod.jpg", alt: "work/personal/big/pramod.jpg", description: ""},
        {src: "work/personal/thumb/prasad.jpg", alt: "work/personal/big/prasad.jpg", description: ""},
        {src: "work/personal/thumb/radha.jpg", alt: "work/personal/big/radha.jpg", description: ""},
        {src: "work/personal/thumb/raman.jpg", alt: "work/personal/big/raman.jpg", description: ""},
        {src: "work/personal/thumb/Rhea_1987.jpg", alt: "work/personal/big/Rhea_1987.jpg", description: ""},
        {src: "work/personal/thumb/roberto.jpg", alt: "work/personal/big/roberto.jpg", description: ""},
        {src: "work/personal/thumb/ruby.jpg", alt: "work/personal/big/ruby.jpg", description: ""},
        {src: "work/personal/thumb/sanjay.jpg", alt: "work/personal/big/sanjay.jpg", description: ""},
        {src: "work/personal/thumb/sheehanhut.jpg", alt: "work/personal/big/sheehanhut.jpg", description: ""},
        {src: "work/personal/thumb/sheesplash.jpg", alt: "work/personal/big/sheesplash.jpg", description: ""},
        {src: "work/personal/thumb/sheezaklaugh.jpg", alt: "work/personal/big/sheezaklaugh.jpg", description: ""},
        {src: "work/personal/thumb/sheezakritz.jpg", alt: "work/personal/big/sheezakritz.jpg", description: ""},
        {src: "work/personal/thumb/suneenew.jpg", alt: "work/personal/big/suneenew.jpg", description: ""},
        {src: "work/personal/thumb/suneeramada.jpg", alt: "work/personal/big/suneeramada.jpg", description: ""},
        {src: "work/personal/thumb/uncledom.jpg", alt: "work/personal/big/uncledom.jpg", description: ""},
        {src: "work/personal/thumb/yola.jpg", alt: "work/personal/big/yola.jpg", description: ""},
        {src: "work/personal/thumb/zakifun.jpg", alt: "work/personal/big/zakifun.jpg", description: ""},
        {src: "work/personal/thumb/zaki_joy.jpg", alt: "work/personal/big/zaki_joy.jpg", description: ""}
    ];


    var imageWrapper = $('#imageWrapper'), loading = $('#loading'), thumbsWrapper = $('#thumbsWrapper'),
        description = $('#description'), mode = "small", current = 0, displayed = $('#displayed');

    var loc = window.location.href;
    if (loc.indexOf("personal") !== -1){
        buildThumbs(personal);
    }
    else if (loc.indexOf("360") !== -1){
        buildThumbs(three60);
    }
    else if (loc.indexOf("archive") !== -1){
        buildThumbs(archives);
    }
    else if (loc.indexOf("resorts") !== -1){
        buildThumbs(resorts);
    }
    else {
        return;
    }


    /*
    clicking on a thumb loads the image
    (alt attribute of the thumb is the source of the large image);
    mouseover and mouseout for a nice spotlight hover effect
    */
    $(document).on('click', "#thumbsContainer img",function(){
        loadPhoto($(this),'cursorPlus');
    }).on('mouseover', "#thumbsContainer img",function(){
        var $this = $(this);
        $this.stop().animate({
            'opacity':'1.0'
        },200);
    }).on('mouseout', "#thumbsContainer img",function(){
        var $this = $(this);
        $this.stop().animate({
            'opacity':'0.4'
        },200);
    });

    /* when resizing the window resize the picture */
    $(window).bind('resize', function() {
        resize($("#displayed"),0);
    });

    /*
    when hovering the main image change the mouse icons (left,right,plus,minus) 
    also when clicking on the image, expand it or make it smaller depending on the mode
    */
    $(document).on('mousemove', "#displayed", function(e){
        var $this   = $(this), imageWidth  = parseFloat($this.css('width'),10),
            x = e.pageX - $this.offset().left;

        if( x < (imageWidth/3) ){
            $this.addClass('cursorLeft').
                removeClass('cursorPlus cursorRight cursorMinus');
        }
        else if( x > ( 2 * (imageWidth/3) ) ){
            $this.addClass('cursorRight').
                removeClass('cursorPlus cursorLeft cursorMinus');
        }
        else if(mode=='expanded'){
            $this.addClass('cursorMinus').
                removeClass('cursorLeft cursorRight cursorPlus');
        }
        else if(mode=='small'){
            $this.addClass('cursorPlus').
                removeClass('cursorLeft cursorRight cursorMinus');
        }
    }).on('click', "#displayed",function(){
        var $this = $(this), $thumb;
        if(mode ==='expanded' && $this.is('.cursorMinus')){
            mode = 'small';
            $this.addClass('cursorPlus').removeClass('cursorLeft cursorRight cursorMinus');
            thumbsWrapper.stop().animate({
                'bottom':'0px'
            },300);
            resize($this,1);
        }
        else if(mode === 'small' && $this.is('.cursorPlus')){
            mode = 'expanded';
            $this.addClass('cursorMinus').removeClass('cursorLeft cursorRight cursorPlus');
            thumbsWrapper.stop().animate({
                'bottom':'-85px'
            },300);
            resize($this,1);
        }
        else if($this.is('.cursorRight')){
            $thumb = $('#thumbsContainer img:nth-child('+parseInt(current+1)+')');
            if($thumb.length){
                ++current;
                loadPhoto($thumb,'cursorRight');
            }
        }
        else if($this.is('.cursorLeft')){
            $thumb = $('#thumbsContainer img:nth-child('+parseInt(current-1)+')');
            if($thumb.length){
                --current;
                loadPhoto($thumb,'cursorLeft');
            }
        }
    });


    /*
    function to build the thumbs container
    */
    function buildThumbs(data){
        var countImages = data.length, count = 0, $tContainer, desc;
        $tContainer = $('<div/>',{
            id  : 'thumbsContainer',
            style   : 'visibility:hidden;'
        })
        current = 1;
        imageWrapper.empty();
        loading.show();
        for(var i = 0; i < countImages; ++i){
            desc = data[i].description;
            $('<img title="'+ desc + '" alt="' + data[i].alt + '" height="75" />').load(function(){
                var $this = $(this);
                $tContainer.append($this);
                ++count;
                if( count === 1 ){
                    /* load 1 image into container*/
                    $('<img id="displayed" style="display:block;" class="cursorPlus"/>').load(function(){
                        var $first = $(this);
                        loading.hide();
                        resize($first,0);
                        imageWrapper.append($first);
                        description.html($this.attr('title'));
                    }).attr('src', $this.attr('alt'));
                }
                if( count === countImages){
                    thumbsWrapper.empty().append($tContainer);
                    thumbsDim($tContainer);
                    makeScrollable(thumbsWrapper,$tContainer,15);
                }
            }).attr('src',data[i].src);
        }
    }


    /* adjust the size (width) of the scrollable container
    - this depends on all its images widths
    */
    function thumbsDim($elem){
        var finalW = 0;
        $elem.find('img').each(function(i){
            var $img = $(this);
            finalW += $img.width() + 5;
            //plus 5 -> 4 margins + 1 to avoid rounded calculations
        });
        $elem.css('width', finalW + 'px').css('visibility','visible');
    }

    /*
    loads a picture into the imageWrapper
    the image source is in the thumb's alt attribute
    */
    function loadPhoto($thumb,cursorClass){
        current     = $thumb.index()+1;
        imageWrapper.empty();
        loading.show();
        $('<img id="displayed" title="'+ $thumb.attr('title') +'" class="' + cursorClass +'" style="display:none;"/>').load(function(){
            var $this = $(this);
            loading.hide();
            resize($this,0);
            if(!imageWrapper.find('img').length){
                imageWrapper.append($this.fadeIn(1000));
                description.html($this.attr('title'));
            }
        }).attr('src',$thumb.attr('alt'));
    }


    //Get our elements for faster access and set overlay width
    function makeScrollable($wrapper, $container, contPadding){
        //Get menu width
        var divWidth = $wrapper.width(), lastLi = $container.find('img:last-child');

        //Remove scrollbars
        $wrapper.css({
            overflow: 'hidden'
        });

        //Find last image container
        $wrapper.scrollLeft(0);
        //When user move mouse over menu
        $wrapper.unbind('mousemove').bind('mousemove',function(e){
            //As images are loaded ul width increases,
            //so we recalculate it each time
            var ulWidth = lastLi[0].offsetLeft + lastLi.outerWidth() + contPadding,
                left = (e.pageX - $wrapper.offset().left) * (ulWidth-divWidth) / divWidth;
            $wrapper.scrollLeft(left);
        });
    }

    /* function to resize an image based on the windows width and height */
    function resize($image, type){
        var widthMargin, heightMargin, $window = $(window), windowH, windowW,
            theImage, imgwidth, imgheight, newwidth, ratio, newheight;

        widthMargin = 10
        heightMargin = 0;

        if(mode=='expanded'){
            heightMargin = 60;            
        }
        else if(mode=='small'){
            heightMargin = 150;
        }
            
        //type 1 is animate, type 0 is normal
        windowH = $window.height() - heightMargin;
        windowW = $window.width() - widthMargin;
        theImage = new Image();
        theImage.src = $image.attr("src");
        imgwidth = theImage.width;
        imgheight = theImage.height;

        if( imgwidth > windowW || imgheight > windowH ){
            if(imgwidth > imgheight){
                newwidth = windowW;
                ratio = imgwidth / windowW;
                newheight = imgheight / ratio;
                if(newheight > windowH){
                    theImage.width = newwidth/(newheight / windowH);
                    theImage.height= windowH;
                }
                else {
                    theImage.height = newheight;
                    theImage.width= newwidth;
                }
            }
            else{
                newheight = windowH;
                ratio = imgheight / windowH;
                newwidth = imgwidth / ratio;
                if(newwidth > windowW){
                    theImage.height = newheight/(newwidth / windowW);
                    theImage.width= windowW
                }
                else {
                    theImage.height = newheight;
                    theImage.width= newwidth;
                }
            }
        }
        if( type === 1 ){
            $image.stop(true).animate({
                'width':theImage.width+'px',
                'height':theImage.height+'px'
            },1000);
        }
        else {
            $image.css({
                'width':theImage.width+'px',
                'height':theImage.height+'px'
            });
        }
    }


});