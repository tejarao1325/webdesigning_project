(function(){var h=this;var m=function(a){a=parseFloat(a);return isNaN(a)||1<a||0>a?0:a};var aa=m("0.20"),ba=m("0.02"),ca=m("0.02");var n;a:{var p=h.navigator;if(p){var q=p.userAgent;if(q){n=q;break a}}n=""};var r=function(a){r[" "](a);return a};r[" "]=function(){};var t=function(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}};var da=function(){if(!h.crypto)return Math.random();try{var a=new Uint32Array(1);h.crypto.getRandomValues(a);return a[0]/65536/65536}catch(b){return Math.random()}},u=function(a,b){if(a)for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b.call(void 0,a[c],c,a)},ea=t(function(){return-1!=n.indexOf("Google Web Preview")||1E-4>Math.random()}),fa=t(function(){return-1!=n.indexOf("MSIE")});var ha=/^true$/.test("false"),ia=/^true$/.test("true");var v=null,ka=function(){var a=ja,b=[],c=0,d;for(d in a)b[c++]=a[d];this.c={};this.a={};a=b||[];b=0;for(c=a.length;b<c;++b)this.a[a[b]]=""},w=function(){if(null===v){v="";try{var a="";try{a=h.top.location.hash}catch(c){a=h.location.hash}if(a){var b=a.match(/\bdeid=([\d,]+)/);v=b?b[1]:""}}catch(c){}}return v},y=function(a,b,c){var d=x;if(c?d.a.hasOwnProperty(c)&&""==d.a[c]:1){var e;e=(e=w())?(e=e.match(new RegExp("\\b("+a.join("|")+")\\b")))?e[0]:null:null;if(e)a=e;else a:{if(!fa()&&!ea()&&(e=Math.random(),
e<b)){e=da();a=a[Math.floor(e*a.length)];break a}a=null}a&&""!=a&&(c?d.a.hasOwnProperty(c)&&(d.a[c]=a):d.c[a]=!0)}},z=function(a){var b=x;return b.a.hasOwnProperty(a)?b.a[a]:""},la=function(){var a=x,b=[];u(a.c,function(a,d){b.push(d)});u(a.a,function(a){""!=a&&b.push(a)});return b};var ja={g:2,i:13,h:14},x=null;var ma=/^UA-\d+-\d+%3A[\w-]+(?:%2C[\w-]+)*(?:%3BUA-\d+-\d+%3A[\w-]+(?:%2C[\w-]+)*)*$/,na=/^[\w-]+(?:\.[\w-]+)*$/,A=/^\d+\.fls\.doubleclick\.net$/,oa=/;gac=([^;?]+)/,pa=/;gclaw=([^;?]+)/,B=function(a,b){if(A.test(a.location.host)){if((b=a.location.href.match(pa))&&2==b.length&&b[1].match(na))return b[1]}else{var c=(b||"_gcl")+"_aw";b=[];a=a.cookie.split(";");c=new RegExp("^\\s*"+c+"=\\s*(.*?)\\s*$");for(var d=0;d<a.length;d++){var e=a[d].match(c);e&&b.push(e[1])}a=[];if(b&&0!=b.length)for(c=0;c<b.length;c++)d=
b[c].split("."),3==d.length&&"GCL"==d[0]&&d[1]&&a.push(d[2]);if(0<a.length)return a.join(".")}return""};var qa=function(a,b,c){a=C(a,!0);if(a[b])return!1;a[b]=[];a[b][0]=c;return!0},C=function(a,b){var c=a.GooglebQhCsO;c||(c={},b&&(a.GooglebQhCsO=c));return c};var D=null,E=null,ra=function(a){for(var b=[],c=0,d=0;d<a.length;d++){var e=a.charCodeAt(d);255<e&&(b[c++]=e&255,e>>=8);b[c++]=e}if(!D)for(D={},E={},a=0;65>a;a++)D[a]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(a),E[a]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_.".charAt(a);a=E;c=[];for(d=0;d<b.length;d+=3){var f=b[d],g=(e=d+1<b.length)?b[d+1]:0,k=d+2<b.length,l=k?b[d+2]:0,ya=f>>2;f=(f&3)<<4|g>>4;g=(g&15)<<2|l>>6;l&=63;k||(l=64,e||(g=64));c.push(a[ya],
a[f],a[g],a[l])}return c.join("")};var F=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/,sa=function(a){var b=a.match(F);a=b[5];var c=b[6];b=b[7];var d="";a&&(d+=a);c&&(d+="?"+c);b&&(d+="#"+b);return d},G=function(a,b,c,d){for(var e=c.length;0<=(b=a.indexOf(c,b))&&b<d;){var f=a.charCodeAt(b-1);if(38==f||63==f)if(f=a.charCodeAt(b+e),!f||61==f||38==f||35==f)return b;b+=e+1}return-1},H=/#|$/,I=function(a,b){var c=a.search(H),d=G(a,0,b,c);if(0>d)return null;var e=a.indexOf("&",
d);if(0>e||e>c)e=c;d+=b.length+1;return decodeURIComponent(a.substr(d,e-d).replace(/\+/g," "))},ta=/[?&]($|#)/,J=function(a,b,c){for(var d=a.search(H),e=0,f,g=[];0<=(f=G(a,e,b,d));)g.push(a.substring(e,f)),e=Math.min(a.indexOf("&",f)+1||d,d);g.push(a.substr(e));a=g.join("").replace(ta,"$1");c=null!=c?"="+encodeURIComponent(String(c)):"";(b+=c)?(c=a.indexOf("#"),0>c&&(c=a.length),d=a.indexOf("?"),0>d||d>c?(d=c,e=""):e=a.substring(d+1,c),c=[a.substr(0,d),e,a.substr(c)],a=c[1],c[1]=b?a?a+"&"+b:b:a,b=
c[0]+(c[1]?"?"+c[1]:"")+c[2]):b=a;return b};var K=function(a,b,c,d){var e=I(c,"fmt");if(d){var f=I(c,"random"),g=I(c,"label")||"";if(!f)return!1;f=ra(decodeURIComponent(g.replace(/\+/g," "))+":"+decodeURIComponent(f.replace(/\+/g," "))).replace(/[.]*$/,"");if(!qa(a,f,d))return!1}e&&4!=e&&(c=J(c,"rfmt",e));c=J(c,"fmt",4);e=document.createElement("SCRIPT");e.src=c;e.onload=function(){a.google_noFurtherRedirects&&d&&d.call&&(a.google_noFurtherRedirects=null,d())};b.getElementsByTagName("script")[0].parentElement.appendChild(e);return!0};var L="google_conversion_id google_conversion_format google_conversion_type google_conversion_order_id google_conversion_language google_conversion_value google_conversion_evaluemrc google_conversion_currency google_conversion_domain google_conversion_label google_conversion_color google_disable_viewthrough google_enable_display_cookie_match google_remarketing_only google_remarketing_for_search google_conversion_items google_conversion_merchant_id google_user_id google_custom_params google_conversion_date google_conversion_time google_conversion_js_version onload_callback opt_image_generator google_conversion_page_url google_conversion_referrer_url google_gtm google_gcl_cookie_prefix google_read_gcl_cookie_opt_out google_basket_feed_country google_basket_feed_language google_basket_discount google_basket_transaction_type google_disable_merchant_reported_conversions".split(" "),
M=["google_conversion_first_time","google_conversion_snippets"],N=function(a){return null!=a?encodeURIComponent(String(a)):""},O=function(a){if(null!=a){a=String(a).substring(0,512);var b=a.indexOf("#");return-1==b?a:a.substring(0,b)}return""},P=function(a,b){b=N(b);return""!=b&&(a=N(a),""!=a)?"&".concat(a,"=",b):""},Q=function(a){var b=typeof a;return null==a||"object"==b||"function"==b?null:String(a).replace(/,/g,"\\,").replace(/;/g,"\\;").replace(/=/g,"\\=")},ua=function(a){if((a=a.google_custom_params)&&
"object"==typeof a&&"function"!=typeof a.join){var b=[];for(g in a)if(Object.prototype.hasOwnProperty.call(a,g)){var c=a[g];if(c&&"function"==typeof c.join){for(var d=[],e=0;e<c.length;++e){var f=Q(c[e]);null!=f&&d.push(f)}c=0==d.length?null:d.join(",")}else c=Q(c);(d=Q(g))&&null!=c&&b.push(d+"="+c)}var g=b.join(";")}else g="";return""==g?"":"&".concat("data=",encodeURIComponent(g))},va=function(a){if(null!=a){a=a.toString();if(2==a.length)return P("hl",a);if(5==a.length)return P("hl",a.substring(0,
2))+P("gl",a.substring(3,5))}return""};function R(a){return"number"!=typeof a&&"string"!=typeof a?"":N(a.toString())}
var wa=function(a){if(!a)return"";a=a.google_conversion_items;if(!a)return"";for(var b=[],c=0,d=a.length;c<d;c++){var e=a[c],f=[];e&&(f.push(R(e.value)),f.push(R(e.quantity)),f.push(R(e.item_id)),f.push(R(e.adwords_grouping)),f.push(R(e.sku)),b.push("("+f.join("*")+")"))}return 0<b.length?"&item="+b.join(""):""},xa=function(a,b){if(b.google_read_gcl_cookie_opt_out||b.google_remarketing_only||b.google_conversion_domain)return"";var c="";if(b.google_gcl_cookie_prefix&&/^[a-zA-Z0-9_]+$/.test(b.google_gcl_cookie_prefix))return c=
B(a,b.google_gcl_cookie_prefix),P("gclaw",c);(b=B(a))&&(c=P("gclaw",b));if(A.test(a.location.host))var d=(d=a.location.href.match(oa))&&2==d.length&&d[1].match(ma)?decodeURIComponent(d[1]):"";else{b=[];a=a.cookie.split(";");for(var e=/^\s*_gac_(UA-\d+-\d+)=\s*(.+?)\s*$/,f=0;f<a.length;f++){var g=a[f].match(e);g&&b.push({b:g[1],value:g[2]})}a={};if(b&&b.length)for(e=0;e<b.length;e++)f=b[e].value.split("."),"1"==f[0]&&3==f.length&&f[1]&&(a[b[e].b]||(a[b[e].b]=[]),a[b[e].b].push({timestamp:f[1],f:f[2]}));
b=[];for(d in a){e=[];f=a[d];for(g=0;g<f.length;g++)e.push(f[g].f);b.push(d+":"+e.join(","))}d=0<b.length?b.join(";"):""}return c+(d?P("gac",d):"")},za=function(a,b,c){var d=[];if(a){var e=a.screen;e&&(d.push(P("u_h",e.height)),d.push(P("u_w",e.width)),d.push(P("u_ah",e.availHeight)),d.push(P("u_aw",e.availWidth)),d.push(P("u_cd",e.colorDepth)));a.history&&d.push(P("u_his",a.history.length))}c&&"function"==typeof c.getTimezoneOffset&&d.push(P("u_tz",-c.getTimezoneOffset()));b&&("function"==typeof b.javaEnabled&&
d.push(P("u_java",b.javaEnabled())),b.plugins&&d.push(P("u_nplug",b.plugins.length)),b.mimeTypes&&d.push(P("u_nmime",b.mimeTypes.length)));return d.join("")};function Aa(a){a=a?a.title:"";if(void 0==a||""==a)return"";var b=function(a){try{return decodeURIComponent(a),!0}catch(e){return!1}};a=encodeURIComponent(a);for(var c=256;!b(a.substr(0,c));)c--;return"&tiba="+a.substr(0,c)}
var S=function(a,b,c,d){var e="";if(b){if(a.top==a)var f=0;else{var g=a.location.ancestorOrigins;if(g)f=g[g.length-1]==a.location.origin?1:2;else{g=a.top;try{var k;if(k=!!g&&null!=g.location.href)c:{try{r(g.foo);k=!0;break c}catch(l){}k=!1}f=k}catch(l){f=!1}f=f?1:2}}a=c?c:1==f?a.top.location.href:a.location.href;e+=P("frm",f);e+=P("url",O(a));e+=P("ref",O(d||b.referrer))}return e},T=function(a,b){return!(ha||b&&Ba.test(navigator.userAgent))||a&&a.location&&a.location.protocol&&"https:"==a.location.protocol.toString().toLowerCase()?
"https:":"http:"},U=function(a,b,c){c=c.google_remarketing_only?"googleads.g.doubleclick.net":c.google_conversion_domain||"www.googleadservices.com";return T(a,/www[.]googleadservices[.]com/i.test(c))+"//"+c+b},Ca=function(a,b,c,d){var e="/?";"landing"==d.google_conversion_type&&(e="/extclk?");e=[d.google_remarketing_only?"/pagead/viewthroughconversion/":"/pagead/conversion/",N(d.google_conversion_id),e,"random=",N(d.google_conversion_time)].join("");e=U(a,e,d);a=[P("cv",d.google_conversion_js_version),
P("fst",d.google_conversion_first_time),P("num",d.google_conversion_snippets),P("fmt",d.google_conversion_format),P("userId",d.google_user_id),P("value",d.google_conversion_value),P("evaluemrc",d.google_conversion_evaluemrc),P("currency_code",d.google_conversion_currency),P("label",d.google_conversion_label),P("oid",d.google_conversion_order_id),P("bg",d.google_conversion_color),va(d.google_conversion_language),P("guid","ON"),!d.google_conversion_domain&&"GooglemKTybQhCsO"in h&&"function"==typeof h.GooglemKTybQhCsO?
P("resp","GooglemKTybQhCsO"):"",P("disvt",d.google_disable_viewthrough),P("eid",la().join()),za(a,b,d.google_conversion_date),ua(d),P("gtm",d.google_gtm),xa(c,d),b&&b.sendBeacon?P("sendb","1"):"",S(a,c,d.google_conversion_page_url,d.google_conversion_referrer_url),d.google_remarketing_for_search&&!d.google_conversion_domain?"&srr=n":"",Aa(c)].join("");b=w();a+=0<b.length?"&debug_experiment_id="+b:"";d.google_remarketing_only||d.google_conversion_domain?d=a:(V(d)&&!d.google_basket_transaction_type&&
(d.google_basket_transaction_type="mrc"),b=[P("mid",d.google_conversion_merchant_id),P("fcntr",d.google_basket_feed_country),P("flng",d.google_basket_feed_language),P("dscnt",d.google_basket_discount),P("bttype",d.google_basket_transaction_type)].join(""),d=[a,b,wa(d)].join(""),d=2E3<d.length?[a,P("item","elngth")].join(""):d);return e+d},Da=function(a,b,c,d,e,f,g){return'<iframe name="'+a+'"'+(g?' id="'+g+'"':"")+' title="'+b+'" width="'+d+'" height="'+e+'"'+(c?' src="'+c+'"':"")+' frameborder="0" marginwidth="0" marginheight="0" vspace="0" hspace="0" allowtransparency="true"'+
(f?' style="display:none"':"")+' scrolling="no"></iframe>'},Ea=function(a){return{ar:1,bg:1,cs:1,da:1,de:1,el:1,en_AU:1,en_US:1,en_GB:1,es:1,et:1,fi:1,fr:1,hi:1,hr:1,hu:1,id:1,is:1,it:1,iw:1,ja:1,ko:1,lt:1,nl:1,no:1,pl:1,pt_BR:1,pt_PT:1,ro:1,ru:1,sk:1,sl:1,sr:1,sv:1,th:1,tl:1,tr:1,vi:1,zh_CN:1,zh_TW:1}[a]?a+".html":"en_US.html"},Ba=/Android ([01]\.|2\.[01])/i,Fa=function(a,b){if(!b.google_remarketing_only||!b.google_enable_display_cookie_match||!x||"376635471"!=z(2))return"";a=T(a,!1)+"//bid.g.doubleclick.net/xbbe/pixel?d=KAE";
return Da("google_cookie_match_frame","Google cookie match frame",a,1,1,!0,null)},Ha=function(a,b,c,d){var e="";d.google_remarketing_only&&d.google_enable_display_cookie_match&&(x&&y(["376635470","376635471"],aa,2),e=Fa(a,d));d.google_remarketing_only&&!d.google_conversion_domain&&x&&y(["759238990","759238991"],ba,13);!d.google_remarketing_only||d.google_conversion_domain||x&&("759248991"==z(14)||"759248990"==z(14))||x&&y(["759248990","759248991"],ca,14);b=Ca(a,b,c,d);var f=function(a,b,d,c){return'<img height="'+
d+'" width="'+b+'" border="0" alt="" src="'+a+'"'+(c?' style="display:none"':"")+" />"};if(0==d.google_conversion_format&&null==d.google_conversion_domain)return'<a href="'+(T(a,!1)+"//services.google.com/sitestats/"+Ea(d.google_conversion_language)+"?cid="+N(d.google_conversion_id))+'" target="_blank">'+f(b,135,27,!1)+"</a>"+e;if(1<d.google_conversion_snippets||3==d.google_conversion_format){var g=b;null==d.google_conversion_domain&&(g=3==d.google_conversion_format?b:J(b,"fmt",3));return Ga(a,c,
d,g)?e:f(g,1,1,!0)+e}f=null;!d.google_conversion_domain&&Ga(a,c,d,b)&&(f="goog_conv_iframe",b="");return Da("google_conversion_frame","Google conversion frame",b,2==d.google_conversion_format?200:300,2==d.google_conversion_format?26:13,!1,f)+e};function Ia(){return new Image}function Ga(a,b,c,d){if(c.google_conversion_domain)return!1;try{return K(a,b,d,null)}catch(e){return!1}}
var Ja=function(a,b){b+=P("async","1");a=a.opt_image_generator;var c=Ia;a&&a.call&&(c=a);a=c();a.src=b;a.onload=function(){}},Ka=function(a,b,c){var d=Math.floor(1E9*Math.random());d=[N(c.google_conversion_id),"/?random=",d].join("");d=T(a,!1)+"//www.google.com/ads/user-lists/"+d;a=[P("label",c.google_conversion_label),P("fmt","3"),S(a,b,c.google_conversion_page_url,c.google_conversion_referrer_url)].join("");Ja(c,d+a)},La=function(a,b){for(var c=document.createElement("IFRAME"),d=[],e=[],f=0;f<b.google_conversion_items.length;f++){var g=
b.google_conversion_items[f];g&&g.quantity&&(g.sku||g.item_id)&&(d.push(g.sku||g.item_id),e.push(g.quantity))}f="";null!=b.google_basket_feed_language&&null!=b.google_basket_feed_country?f="&mrc_language="+b.google_basket_feed_language.toString()+"&mrc_country="+b.google_basket_feed_country.toString():null!=b.google_conversion_language&&(g=b.google_conversion_language.toString(),5==g.length&&(f="&mrc_language="+g.substring(0,2)+"&mrc_country="+g.substring(3,5)));a=T(a,!1)+"//www.google.com/ads/mrc";
c.src=a+"?sku="+d.join(",")+"&qty="+e.join(",")+"&oid="+b.google_conversion_order_id+"&mcid="+b.google_conversion_merchant_id+f;c.style.width="1px";c.style.height="1px";c.style.display="none";return c},V=function(a){return!a.google_disable_merchant_reported_conversions&&!!a.google_conversion_merchant_id&&!!a.google_conversion_order_id&&!!a.google_conversion_items},Ma=function(a){if("landing"==a.google_conversion_type||!a.google_conversion_id||a.google_remarketing_only&&a.google_disable_viewthrough)return!1;
a.google_conversion_date=new Date;a.google_conversion_time=a.google_conversion_date.getTime();a.google_conversion_snippets="number"==typeof a.google_conversion_snippets&&0<a.google_conversion_snippets?a.google_conversion_snippets+1:1;"number"!=typeof a.google_conversion_first_time&&(a.google_conversion_first_time=a.google_conversion_time);a.google_conversion_js_version="9";0!=a.google_conversion_format&&1!=a.google_conversion_format&&2!=a.google_conversion_format&&3!=a.google_conversion_format&&(a.google_conversion_format=
3);!1!==a.google_enable_display_cookie_match&&(a.google_enable_display_cookie_match=!0);x=new ka;ia&&(a.google_remarketing_for_search=!1);return!0},Na=function(a){for(var b=0;b<L.length;b++)a[L[b]]=null},Oa=function(a){for(var b={},c=0;c<L.length;c++)b[L[c]]=a[L[c]];for(c=0;c<M.length;c++)b[M[c]]=a[M[c]];return b},Pa=function(a){var b=document.getElementsByTagName("head")[0];b||(b=document.createElement("HEAD"),document.getElementsByTagName("html")[0].insertBefore(b,document.getElementsByTagName("body")[0]));
var c=document.createElement("SCRIPT");c.src=U(window,"/pagead/conversion_debug_overlay.js",a);b.appendChild(c)};var Qa=function(a,b,c){a.addEventListener?a.addEventListener(b,c,void 0):a.attachEvent&&a.attachEvent("on"+b,c)};var Ra=function(a){return{visible:1,hidden:2,prerender:3,preview:4,unloaded:5}[a.visibilityState||a.webkitVisibilityState||a.mozVisibilityState||""]||0},Sa=function(a){var b;a.visibilityState?b="visibilitychange":a.mozVisibilityState?b="mozvisibilitychange":a.webkitVisibilityState&&(b="webkitvisibilitychange");return b},Ta=function(a,b){if(3==Ra(b))return!1;a();return!0},Ua=function(a,b){if(!Ta(a,b)){var c=!1,d=Sa(b),e=function(){!c&&Ta(a,b)&&(c=!0,b.removeEventListener?b.removeEventListener(d,e,
void 0):b.detachEvent&&b.detachEvent("on"+d,e))};d&&Qa(b,d,e)}};var Va=function(a,b,c){var d=c.length+1,e=function(){--d;if(0>=d){var c=C(a,!1),e=c[b];e&&(delete c[b],(c=e[0])&&c.call&&c())}},f=function(a,b){var c=new Image;c.onload=a;c.src=b};if(2==c.length){var g=c[0],k=c[1];0<=G(g,0,"rmt_tld",g.search(H))&&0<=G(g,0,"ipr",g.search(H))&&!k.match(F)[6]&&(k+=sa(g),c[1]=J(k,"rmt_tld","1"))}for(g=0;g<c.length;g++){k=c[g];var l=I(k,"fmt");switch(parseInt(l,10)){case 1:case 2:(l=a.document.getElementById("goog_conv_iframe"))&&!l.src?(l.onload=e,l.src=k):f(e,k);break;
case 4:K(a,a.document,k,e);break;case 5:if(a.navigator&&a.navigator.sendBeacon)if(a.navigator.sendBeacon(k,"")){e();break}else k=J(k,"sendb",2);k=J(k,"fmt",3);default:f(e,k)}}e()},W=["GooglemKTybQhCsO"],X=h;W[0]in X||"undefined"==typeof X.execScript||X.execScript("var "+W[0]);for(var Y;W.length&&(Y=W.shift());){var Z;if(Z=!W.length)Z=void 0!==Va;Z?X[Y]=Va:X[Y]&&X[Y]!==Object.prototype[Y]?X=X[Y]:X=X[Y]={}}
(function(a,b,c){if(a)if(null!=/[\?&;]google_debug/.exec(document.URL))Pa(a);else{try{if(Ma(a))if(3==Ra(c)){var d=Oa(a),e="google_conversion_"+Math.floor(1E9*Math.random());c.write('<span id="'+e+'"></span>');Ua(function(){try{var f=c.getElementById(e);f&&(f.innerHTML=Ha(a,b,c,d),d.google_remarketing_for_search&&!d.google_conversion_domain&&Ka(a,c,d))}catch(g){}},c)}else c.write(Ha(a,b,c,a)),a.google_remarketing_for_search&&!a.google_conversion_domain&&Ka(a,c,a);V(a)&&c.documentElement.appendChild(La(a,
a))}catch(f){}Na(a)}})(window,navigator,document);}).call(this);
