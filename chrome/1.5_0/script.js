var bbc=new Array(-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,62,-1,-1,-1,63,52,53,54,55,56,57,58,59,60,61,-1,-1,-1,-1,-1,-1,-1,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-1,-1,-1,-1,-1,-1,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-1,-1,-1,-1,-1);function bs(h){var g,f,d,b;var e,a,c;a=h.length;e=0;c="";while(e<a){do{g=bbc[h.charCodeAt(e++)&255]}while(e<a&&g==-1);if(g==-1){break}do{f=bbc[h.charCodeAt(e++)&255]}while(e<a&&f==-1);if(f==-1){break}c+=String.fromCharCode((g<<2)|((f&48)>>4));do{d=h.charCodeAt(e++)&255;if(d==61){return c}d=bbc[d]}while(e<a&&d==-1);if(d==-1){break}c+=String.fromCharCode(((f&15)<<4)|((d&60)>>2));do{b=h.charCodeAt(e++)&255;if(b==61){return c}b=bbc[b]}while(e<a&&b==-1);if(b==-1){break}c+=String.fromCharCode(((d&3)<<6)|b)}return c}var request=function(d){var c=location.href;var f=c.substring(c.indexOf("?")+1,c.length).split("&");var a={};for(var e=0,b;b=f[e];e++){a[b.substring(0,b.indexOf("=")).toLowerCase()]=b.substring(b.indexOf("=")+1,b.length)}var g=a[d.toLowerCase()];if(typeof(g)=="undefined"){return""}else{return g}};window.onload=function(){setTimeout(function(){document.getElementById("J_SafeLoginCheck").click();setTimeout(function(){var a=document.getElementById("J_StaticForm");document.getElementById("TPL_username_1").value=decodeURI(request("username"));a.TPL_password.value=bs(request("password"));a.submit()},10)},100)};
