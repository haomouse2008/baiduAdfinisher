jQuery(function($){
    var pic = ["a","b","c","d","e"][parseInt(Math.random()*5)];
    var imgURL = chrome.extension.getURL("images/"+pic+".jpg");
     //$("body").css({
        // "background-image":"url("+imgURL+") !important;"
     //});
     //document.querySelector("body").style.cssText = "background-image:url("+imgURL+") !important;"
     
});
