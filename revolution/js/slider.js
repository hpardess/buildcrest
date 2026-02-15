/*slider1*/

var tpj = jQuery;
                    if(window.RS_MODULES === undefined) window.RS_MODULES = {};
                    if(RS_MODULES.modules === undefined) RS_MODULES.modules = {};
                    RS_MODULES.modules["revslider11"] = {init:function() {
                        window.revapi1 = window.revapi1===undefined || window.revapi1===null || window.revapi1.length===0  ? document.getElementById("rev_slider_1_1") : window.revapi1;
                        if(window.revapi1 === null || window.revapi1 === undefined || window.revapi1.length==0) { window.revapi1initTry = window.revapi1initTry ===undefined ? 0 : window.revapi1initTry+1; if (window.revapi1initTry<20) requestAnimationFrame(function() {RS_MODULES.modules["revslider11"].init()}); return;}
                        window.revapi1 = jQuery(window.revapi1);
                        if(window.revapi1.revolution==undefined){ revslider_showDoubleJqueryError("rev_slider_1_1"); return;}
                        revapi1.revolutionInit({
                                revapi:"revapi1",
                                DPR:"dpr",
                                sliderLayout:"fullwidth",
                                visibilityLevels:"1240,1240,778,778",
                                gridwidth:"1750,1750,778,778",
                                gridheight:"830,830,460,460",
                                lazyType:"smart",
                                spinner:"spinner0",
                                perspective:600,
                                perspectiveType:"global",
                                editorheight:"830,830,460,460",
                                responsiveLevels:"1240,1240,778,480",
                                progressBar:{disableProgressBar:true},
                                navigation: {
                                    wheelCallDelay:1000,
                                    onHoverStop:false,
                                    touch: {
                                        touchenabled:true
                                    },
                                    arrows: {
                                        enable:true,
                                        style:"hesperiden",
                                        hide_onmobile:true,
                                        hide_under:778,
                                        hide_onleave:true,
                                        left: {
                                            h_offset:30
                                        },
                                        right: {
                                            h_offset:30
                                        }
                                    }
                                },
                                viewPort: {
                                    global:true,
                                    globalDist:"-200px",
                                    enable:false
                                },
                                fallbacks: {
                                    allowHTML5AutoPlayOnAndroid:true
                                },
                        });
                        
                    }} // End of RevInitScript
                    if (window.RS_MODULES.checkMinimal!==undefined) { window.RS_MODULES.checkMinimal();};
/*slider2*/

var tpj = jQuery;
                    if(window.RS_MODULES === undefined) window.RS_MODULES = {};
                    if(RS_MODULES.modules === undefined) RS_MODULES.modules = {};
                    RS_MODULES.modules["revslider21"] = {init:function() {
                        window.revapi2 = window.revapi2===undefined || window.revapi2===null || window.revapi2.length===0  ? document.getElementById("rev_slider_2_1") : window.revapi2;
                        if(window.revapi2 === null || window.revapi2 === undefined || window.revapi2.length==0) { window.revapi2initTry = window.revapi2initTry ===undefined ? 0 : window.revapi2initTry+1; if (window.revapi2initTry<20) requestAnimationFrame(function() {RS_MODULES.modules["revslider21"].init()}); return;}
                        window.revapi2 = jQuery(window.revapi2);
                        if(window.revapi2.revolution==undefined){ revslider_showDoubleJqueryError("rev_slider_2_1"); return;}
                        revapi2.revolutionInit({
                                revapi:"revapi2",
                                DPR:"dpr",
                                visibilityLevels:"1240,1240,778,480",
                                gridwidth:"1750,1750,778,480",
                                gridheight:"731,731,450,400",
                                forceOverflow:true,
                                perspective:600,
                                perspectiveType:"global",
                                editorheight:"731,768,450,400",
                                responsiveLevels:"1240,1240,778,480",
                                progressBar:{disableProgressBar:true},
                                navigation: {
                                    wheelCallDelay:1000,
                                    onHoverStop:false,
                                    arrows: {
                                        enable:true,
                                        style:"persephone",
                                        rtl:true,
                                        left: {
                                            h_align:"right",
                                            v_align:"bottom",
                                            h_offset:-85
                                        },
                                        right: {
                                            v_align:"bottom",
                                            h_offset:-85,
                                            v_offset:80
                                        }
                                    }
                                },
                                viewPort: {
                                    global:false,
                                    globalDist:"-200px",
                                    enable:false
                                },
                                fallbacks: {
                                    allowHTML5AutoPlayOnAndroid:true
                                },
                        });
                        
                    }} // End of RevInitScript
                    if (window.RS_MODULES.checkMinimal!==undefined) { window.RS_MODULES.checkMinimal();};

/** slider3**/

var tpj = jQuery;
                    if(window.RS_MODULES === undefined) window.RS_MODULES = {};
                    if(RS_MODULES.modules === undefined) RS_MODULES.modules = {};
                    RS_MODULES.modules["revslider31"] = {init:function() {
                        window.revapi3 = window.revapi3===undefined || window.revapi3===null || window.revapi3.length===0  ? document.getElementById("rev_slider_3_1") : window.revapi3;
                        if(window.revapi3 === null || window.revapi3 === undefined || window.revapi3.length==0) { window.revapi3initTry = window.revapi3initTry ===undefined ? 0 : window.revapi3initTry+1; if (window.revapi3initTry<20) requestAnimationFrame(function() {RS_MODULES.modules["revslider31"].init()}); return;}
                        window.revapi3 = jQuery(window.revapi3);
                        if(window.revapi3.revolution==undefined){ revslider_showDoubleJqueryError("rev_slider_3_1"); return;}
                        revapi3.revolutionInit({
                                revapi:"revapi3",
                                DPR:"dpr",
                                visibilityLevels:"1240,1240,778,778",
                                gridwidth:"1750,1750,778,778",
                                gridheight:"830,830,460,460",
                                perspective:600,
                                perspectiveType:"global",
                                editorheight:"830,768,460,284",
                                responsiveLevels:"1240,1240,778,778",
                                progressBar:{disableProgressBar:true},
                                navigation: {
                                    onHoverStop:false
                                },
                                viewPort: {
                                    global:false,
                                    globalDist:"-200px",
                                    enable:false
                                },
                                fallbacks: {
                                    allowHTML5AutoPlayOnAndroid:true
                                },
                        });
                        
                    }} // End of RevInitScript
                    if (window.RS_MODULES.checkMinimal!==undefined) { window.RS_MODULES.checkMinimal();};

/**slider4**/

var tpj = jQuery;
                    if(window.RS_MODULES === undefined) window.RS_MODULES = {};
                    if(RS_MODULES.modules === undefined) RS_MODULES.modules = {};
                    RS_MODULES.modules["revslider41"] = {once: RS_MODULES.modules["revslider41"]!==undefined ? RS_MODULES.modules["revslider41"].once : undefined, init:function() {
                        window.revapi4 = window.revapi4===undefined || window.revapi4===null || window.revapi4.length===0  ? document.getElementById("rev_slider_4_1") : window.revapi4;
                        if(window.revapi4 === null || window.revapi4 === undefined || window.revapi4.length==0) { window.revapi4initTry = window.revapi4initTry ===undefined ? 0 : window.revapi4initTry+1; if (window.revapi4initTry<20) requestAnimationFrame(function() {RS_MODULES.modules["revslider41"].init()}); return;}
                        window.revapi4 = jQuery(window.revapi4);
                        if(window.revapi4.revolution==undefined){ revslider_showDoubleJqueryError("rev_slider_4_1"); return;}
                        revapi4.revolutionInit({
                                revapi:"revapi4",
                                DPR:"dpr",
                                sliderLayout:"fullwidth",
                                visibilityLevels:"1240,1240,778,480",
                                gridwidth:"1240,1240,778,480",
                                gridheight:"820,820,450,320",
                                lazyType:"smart",
                                spinner:"spinner0",
                                perspective:600,
                                perspectiveType:"global",
                                editorheight:"820,768,450,320",
                                responsiveLevels:"1240,1240,778,480",
                                progressBar:{disableProgressBar:true},
                                navigation: {
                                    wheelCallDelay:1000,
                                    onHoverStop:false,
                                    touch: {
                                        touchenabled:true
                                    },
                                    arrows: {
                                        enable:true,
                                        style:"hesperiden",
                                        hide_onmobile:true,
                                        hide_under:778,
                                        hide_onleave:true,
                                        left: {
                                            h_offset:30
                                        },
                                        right: {
                                            h_offset:30
                                        }
                                    }
                                },
                                viewPort: {
                                    global:true,
                                    globalDist:"-200px",
                                    enable:false
                                },
                                fallbacks: {
                                    allowHTML5AutoPlayOnAndroid:true
                                },
                        });
                        
                    }} // End of RevInitScript
                    if (window.RS_MODULES.checkMinimal!==undefined) { window.RS_MODULES.checkMinimal();};