// function onload(func) {
//     if (document.readyState === "complete") {
//         func();
//     } else {
//         window.addEventListener("load", func);
//     }
// }

// function addJS(name){
//     var s = document.createElement("script");
//     s.src = safari.extension.baseURI + name + '.js';
//     (document.body || document.head || document.documentElement).appendChild(s);
// }

// function addCSS(name){
// 	var filename = safari.extension.baseURI + name + '.css';
//     var fileref = document.createElement('link');
//     fileref.setAttribute("rel","stylesheet");
//     fileref.setAttribute("type","text/css");
//     fileref.setAttribute("href",filename);
//     if(typeof fileref != "undefined"){
//         (document.head || document.documentElement).appendChild(fileref);
//     }
// }

// onload(function() {
// 	addCSS("style");
// });
