/*!
@license
  * Bowser - a browser detector
  * https://github.com/ded/bowser
  * MIT License | (c) Dustin Diaz 2015
  */
!function(e,t){typeof module!="undefined"&&module.exports?module.exports=t():typeof define=="function"&&define.amd?define(t):this[e]=t()}("bowser",function(){function t(t){function n(e){var n=t.match(e);return n&&n.length>1&&n[1]||""}function r(e){var n=t.match(e);return n&&n.length>1&&n[2]||""}var i=n(/(ipod|iphone|ipad)/i).toLowerCase(),s=/like android/i.test(t),o=!s&&/android/i.test(t),u=/CrOS/.test(t),a=n(/edge\/(\d+(\.\d+)?)/i),f=n(/version\/(\d+(\.\d+)?)/i),l=/tablet/i.test(t),c=!l&&/[^-]mobi/i.test(t),h;/opera|opr/i.test(t)?h={name:"Opera",opera:e,version:f||n(/(?:opera|opr)[\s\/](\d+(\.\d+)?)/i)}:/yabrowser/i.test(t)?h={name:"Yandex Browser",yandexbrowser:e,version:f||n(/(?:yabrowser)[\s\/](\d+(\.\d+)?)/i)}:/windows phone/i.test(t)?(h={name:"Windows Phone",windowsphone:e},a?(h.msedge=e,h.version=a):(h.msie=e,h.version=n(/iemobile\/(\d+(\.\d+)?)/i))):/msie|trident/i.test(t)?h={name:"Internet Explorer",msie:e,version:n(/(?:msie |rv:)(\d+(\.\d+)?)/i)}:u?h={name:"Chrome",chromeBook:e,chrome:e,version:n(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)}:/chrome.+? edge/i.test(t)?h={name:"Microsoft Edge",msedge:e,version:a}:/chrome|crios|crmo/i.test(t)?h={name:"Chrome",chrome:e,version:n(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)}:i?(h={name:i=="iphone"?"iPhone":i=="ipad"?"iPad":"iPod"},f&&(h.version=f)):/sailfish/i.test(t)?h={name:"Sailfish",sailfish:e,version:n(/sailfish\s?browser\/(\d+(\.\d+)?)/i)}:/seamonkey\//i.test(t)?h={name:"SeaMonkey",seamonkey:e,version:n(/seamonkey\/(\d+(\.\d+)?)/i)}:/firefox|iceweasel/i.test(t)?(h={name:"Firefox",firefox:e,version:n(/(?:firefox|iceweasel)[ \/](\d+(\.\d+)?)/i)},/\((mobile|tablet);[^\)]*rv:[\d\.]+\)/i.test(t)&&(h.firefoxos=e)):/silk/i.test(t)?h={name:"Amazon Silk",silk:e,version:n(/silk\/(\d+(\.\d+)?)/i)}:o?h={name:"Android",version:f}:/phantom/i.test(t)?h={name:"PhantomJS",phantom:e,version:n(/phantomjs\/(\d+(\.\d+)?)/i)}:/blackberry|\bbb\d+/i.test(t)||/rim\stablet/i.test(t)?h={name:"BlackBerry",blackberry:e,version:f||n(/blackberry[\d]+\/(\d+(\.\d+)?)/i)}:/(web|hpw)os/i.test(t)?(h={name:"WebOS",webos:e,version:f||n(/w(?:eb)?osbrowser\/(\d+(\.\d+)?)/i)},/touchpad\//i.test(t)&&(h.touchpad=e)):/bada/i.test(t)?h={name:"Bada",bada:e,version:n(/dolfin\/(\d+(\.\d+)?)/i)}:/tizen/i.test(t)?h={name:"Tizen",tizen:e,version:n(/(?:tizen\s?)?browser\/(\d+(\.\d+)?)/i)||f}:/safari/i.test(t)?h={name:"Safari",safari:e,version:f}:h={name:n(/^(.*)\/(.*) /),version:r(/^(.*)\/(.*) /)},!h.msedge&&/(apple)?webkit/i.test(t)?(h.name=h.name||"Webkit",h.webkit=e,!h.version&&f&&(h.version=f)):!h.opera&&/gecko\//i.test(t)&&(h.name=h.name||"Gecko",h.gecko=e,h.version=h.version||n(/gecko\/(\d+(\.\d+)?)/i)),!h.msedge&&(o||h.silk)?h.android=e:i&&(h[i]=e,h.ios=e);var p="";h.windowsphone?p=n(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i):i?(p=n(/os (\d+([_\s]\d+)*) like mac os x/i),p=p.replace(/[_\s]/g,".")):o?p=n(/android[ \/-](\d+(\.\d+)*)/i):h.webos?p=n(/(?:web|hpw)os\/(\d+(\.\d+)*)/i):h.blackberry?p=n(/rim\stablet\sos\s(\d+(\.\d+)*)/i):h.bada?p=n(/bada\/(\d+(\.\d+)*)/i):h.tizen&&(p=n(/tizen[\/\s](\d+(\.\d+)*)/i)),p&&(h.osversion=p);var d=p.split(".")[0];if(l||i=="ipad"||o&&(d==3||d==4&&!c)||h.silk)h.tablet=e;else if(c||i=="iphone"||i=="ipod"||o||h.blackberry||h.webos||h.bada)h.mobile=e;return h.msedge||h.msie&&h.version>=10||h.yandexbrowser&&h.version>=15||h.chrome&&h.version>=20||h.firefox&&h.version>=20||h.safari&&h.version>=6||h.opera&&h.version>=10||h.ios&&h.osversion&&h.osversion.split(".")[0]>=6||h.blackberry&&h.version>=10.1?h.a=e:h.msie&&h.version<10||h.chrome&&h.version<20||h.firefox&&h.version<20||h.safari&&h.version<6||h.opera&&h.version<10||h.ios&&h.osversion&&h.osversion.split(".")[0]<6?h.c=e:h.x=e,h}var e=!0,n=t(typeof navigator!="undefined"?navigator.userAgent:"");return n.test=function(e){for(var t=0;t<e.length;++t){var r=e[t];if(typeof r=="string"&&r in n)return!0}return!1},n._detect=t,n})
/*!
@license
JSZip - A Javascript class for generating and reading zip files
<http://stuartk.com/jszip>

(c) 2009-2014 Stuart Knightley <stuart [at] stuartk.com>
Dual licenced under the MIT license or GPLv3. See https://raw.github.com/Stuk/jszip/master/LICENSE.markdown.

JSZip uses the library pako released under the MIT license :
https://github.com/nodeca/pako/blob/master/LICENSE
*/
!function(a){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=a();else if("function"==typeof define&&define.amd)define([],a);else{var b;"undefined"!=typeof window?b=window:"undefined"!=typeof global?b=global:"undefined"!=typeof self&&(b=self),b.JSZip=a()}}(function(){return function a(b,c,d){function e(g,h){if(!c[g]){if(!b[g]){var i="function"==typeof require&&require;if(!h&&i)return i(g,!0);if(f)return f(g,!0);throw new Error("Cannot find module '"+g+"'")}var j=c[g]={exports:{}};b[g][0].call(j.exports,function(a){var c=b[g][1][a];return e(c?c:a)},j,j.exports,a,b,c,d)}return c[g].exports}for(var f="function"==typeof require&&require,g=0;g<d.length;g++)e(d[g]);return e}({1:[function(a,b,c){"use strict";var d="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";c.encode=function(a){for(var b,c,e,f,g,h,i,j="",k=0;k<a.length;)b=a.charCodeAt(k++),c=a.charCodeAt(k++),e=a.charCodeAt(k++),f=b>>2,g=(3&b)<<4|c>>4,h=(15&c)<<2|e>>6,i=63&e,isNaN(c)?h=i=64:isNaN(e)&&(i=64),j=j+d.charAt(f)+d.charAt(g)+d.charAt(h)+d.charAt(i);return j},c.decode=function(a){var b,c,e,f,g,h,i,j="",k=0;for(a=a.replace(/[^A-Za-z0-9\+\/\=]/g,"");k<a.length;)f=d.indexOf(a.charAt(k++)),g=d.indexOf(a.charAt(k++)),h=d.indexOf(a.charAt(k++)),i=d.indexOf(a.charAt(k++)),b=f<<2|g>>4,c=(15&g)<<4|h>>2,e=(3&h)<<6|i,j+=String.fromCharCode(b),64!=h&&(j+=String.fromCharCode(c)),64!=i&&(j+=String.fromCharCode(e));return j}},{}],2:[function(a,b){"use strict";function c(){this.compressedSize=0,this.uncompressedSize=0,this.crc32=0,this.compressionMethod=null,this.compressedContent=null}c.prototype={getContent:function(){return null},getCompressedContent:function(){return null}},b.exports=c},{}],3:[function(a,b,c){"use strict";c.STORE={magic:"\x00\x00",compress:function(a){return a},uncompress:function(a){return a},compressInputType:null,uncompressInputType:null},c.DEFLATE=a("./flate")},{"./flate":8}],4:[function(a,b){"use strict";var c=a("./utils"),d=[0,1996959894,3993919788,2567524794,124634137,1886057615,3915621685,2657392035,249268274,2044508324,3772115230,2547177864,162941995,2125561021,3887607047,2428444049,498536548,1789927666,4089016648,2227061214,450548861,1843258603,4107580753,2211677639,325883990,1684777152,4251122042,2321926636,335633487,1661365465,4195302755,2366115317,997073096,1281953886,3579855332,2724688242,1006888145,1258607687,3524101629,2768942443,901097722,1119000684,3686517206,2898065728,853044451,1172266101,3705015759,2882616665,651767980,1373503546,3369554304,3218104598,565507253,1454621731,3485111705,3099436303,671266974,1594198024,3322730930,2970347812,795835527,1483230225,3244367275,3060149565,1994146192,31158534,2563907772,4023717930,1907459465,112637215,2680153253,3904427059,2013776290,251722036,2517215374,3775830040,2137656763,141376813,2439277719,3865271297,1802195444,476864866,2238001368,4066508878,1812370925,453092731,2181625025,4111451223,1706088902,314042704,2344532202,4240017532,1658658271,366619977,2362670323,4224994405,1303535960,984961486,2747007092,3569037538,1256170817,1037604311,2765210733,3554079995,1131014506,879679996,2909243462,3663771856,1141124467,855842277,2852801631,3708648649,1342533948,654459306,3188396048,3373015174,1466479909,544179635,3110523913,3462522015,1591671054,702138776,2966460450,3352799412,1504918807,783551873,3082640443,3233442989,3988292384,2596254646,62317068,1957810842,3939845945,2647816111,81470997,1943803523,3814918930,2489596804,225274430,2053790376,3826175755,2466906013,167816743,2097651377,4027552580,2265490386,503444072,1762050814,4150417245,2154129355,426522225,1852507879,4275313526,2312317920,282753626,1742555852,4189708143,2394877945,397917763,1622183637,3604390888,2714866558,953729732,1340076626,3518719985,2797360999,1068828381,1219638859,3624741850,2936675148,906185462,1090812512,3747672003,2825379669,829329135,1181335161,3412177804,3160834842,628085408,1382605366,3423369109,3138078467,570562233,1426400815,3317316542,2998733608,733239954,1555261956,3268935591,3050360625,752459403,1541320221,2607071920,3965973030,1969922972,40735498,2617837225,3943577151,1913087877,83908371,2512341634,3803740692,2075208622,213261112,2463272603,3855990285,2094854071,198958881,2262029012,4057260610,1759359992,534414190,2176718541,4139329115,1873836001,414664567,2282248934,4279200368,1711684554,285281116,2405801727,4167216745,1634467795,376229701,2685067896,3608007406,1308918612,956543938,2808555105,3495958263,1231636301,1047427035,2932959818,3654703836,1088359270,936918e3,2847714899,3736837829,1202900863,817233897,3183342108,3401237130,1404277552,615818150,3134207493,3453421203,1423857449,601450431,3009837614,3294710456,1567103746,711928724,3020668471,3272380065,1510334235,755167117];b.exports=function(a,b){if("undefined"==typeof a||!a.length)return 0;var e="string"!==c.getTypeOf(a);"undefined"==typeof b&&(b=0);var f=0,g=0,h=0;b=-1^b;for(var i=0,j=a.length;j>i;i++)h=e?a[i]:a.charCodeAt(i),g=255&(b^h),f=d[g],b=b>>>8^f;return-1^b}},{"./utils":21}],5:[function(a,b){"use strict";function c(){this.data=null,this.length=0,this.index=0}var d=a("./utils");c.prototype={checkOffset:function(a){this.checkIndex(this.index+a)},checkIndex:function(a){if(this.length<a||0>a)throw new Error("End of data reached (data length = "+this.length+", asked index = "+a+"). Corrupted zip ?")},setIndex:function(a){this.checkIndex(a),this.index=a},skip:function(a){this.setIndex(this.index+a)},byteAt:function(){},readInt:function(a){var b,c=0;for(this.checkOffset(a),b=this.index+a-1;b>=this.index;b--)c=(c<<8)+this.byteAt(b);return this.index+=a,c},readString:function(a){return d.transformTo("string",this.readData(a))},readData:function(){},lastIndexOfSignature:function(){},readDate:function(){var a=this.readInt(4);return new Date((a>>25&127)+1980,(a>>21&15)-1,a>>16&31,a>>11&31,a>>5&63,(31&a)<<1)}},b.exports=c},{"./utils":21}],6:[function(a,b,c){"use strict";c.base64=!1,c.binary=!1,c.dir=!1,c.createFolders=!1,c.date=null,c.compression=null,c.compressionOptions=null,c.comment=null,c.unixPermissions=null,c.dosPermissions=null},{}],7:[function(a,b,c){"use strict";var d=a("./utils");c.string2binary=function(a){return d.string2binary(a)},c.string2Uint8Array=function(a){return d.transformTo("uint8array",a)},c.uint8Array2String=function(a){return d.transformTo("string",a)},c.string2Blob=function(a){var b=d.transformTo("arraybuffer",a);return d.arrayBuffer2Blob(b)},c.arrayBuffer2Blob=function(a){return d.arrayBuffer2Blob(a)},c.transformTo=function(a,b){return d.transformTo(a,b)},c.getTypeOf=function(a){return d.getTypeOf(a)},c.checkSupport=function(a){return d.checkSupport(a)},c.MAX_VALUE_16BITS=d.MAX_VALUE_16BITS,c.MAX_VALUE_32BITS=d.MAX_VALUE_32BITS,c.pretty=function(a){return d.pretty(a)},c.findCompression=function(a){return d.findCompression(a)},c.isRegExp=function(a){return d.isRegExp(a)}},{"./utils":21}],8:[function(a,b,c){"use strict";var d="undefined"!=typeof Uint8Array&&"undefined"!=typeof Uint16Array&&"undefined"!=typeof Uint32Array,e=a("pako");c.uncompressInputType=d?"uint8array":"array",c.compressInputType=d?"uint8array":"array",c.magic="\b\x00",c.compress=function(a,b){return e.deflateRaw(a,{level:b.level||-1})},c.uncompress=function(a){return e.inflateRaw(a)}},{pako:24}],9:[function(a,b){"use strict";function c(a,b){return this instanceof c?(this.files={},this.comment=null,this.root="",a&&this.load(a,b),void(this.clone=function(){var a=new c;for(var b in this)"function"!=typeof this[b]&&(a[b]=this[b]);return a})):new c(a,b)}var d=a("./base64");c.prototype=a("./object"),c.prototype.load=a("./load"),c.support=a("./support"),c.defaults=a("./defaults"),c.utils=a("./deprecatedPublicUtils"),c.base64={encode:function(a){return d.encode(a)},decode:function(a){return d.decode(a)}},c.compressions=a("./compressions"),b.exports=c},{"./base64":1,"./compressions":3,"./defaults":6,"./deprecatedPublicUtils":7,"./load":10,"./object":13,"./support":17}],10:[function(a,b){"use strict";var c=a("./base64"),d=a("./zipEntries");b.exports=function(a,b){var e,f,g,h;for(b=b||{},b.base64&&(a=c.decode(a)),f=new d(a,b),e=f.files,g=0;g<e.length;g++)h=e[g],this.file(h.fileName,h.decompressed,{binary:!0,optimizedBinaryString:!0,date:h.date,dir:h.dir,comment:h.fileComment.length?h.fileComment:null,unixPermissions:h.unixPermissions,dosPermissions:h.dosPermissions,createFolders:b.createFolders});return f.zipComment.length&&(this.comment=f.zipComment),this}},{"./base64":1,"./zipEntries":22}],11:[function(a,b){(function(a){"use strict";b.exports=function(b,c){return new a(b,c)},b.exports.test=function(b){return a.isBuffer(b)}}).call(this,"undefined"!=typeof Buffer?Buffer:void 0)},{}],12:[function(a,b){"use strict";function c(a){this.data=a,this.length=this.data.length,this.index=0}var d=a("./uint8ArrayReader");c.prototype=new d,c.prototype.readData=function(a){this.checkOffset(a);var b=this.data.slice(this.index,this.index+a);return this.index+=a,b},b.exports=c},{"./uint8ArrayReader":18}],13:[function(a,b){"use strict";var c=a("./support"),d=a("./utils"),e=a("./crc32"),f=a("./signature"),g=a("./defaults"),h=a("./base64"),i=a("./compressions"),j=a("./compressedObject"),k=a("./nodeBuffer"),l=a("./utf8"),m=a("./stringWriter"),n=a("./uint8ArrayWriter"),o=function(a){if(a._data instanceof j&&(a._data=a._data.getContent(),a.options.binary=!0,a.options.base64=!1,"uint8array"===d.getTypeOf(a._data))){var b=a._data;a._data=new Uint8Array(b.length),0!==b.length&&a._data.set(b,0)}return a._data},p=function(a){var b=o(a),e=d.getTypeOf(b);return"string"===e?!a.options.binary&&c.nodebuffer?k(b,"utf-8"):a.asBinary():b},q=function(a){var b=o(this);return null===b||"undefined"==typeof b?"":(this.options.base64&&(b=h.decode(b)),b=a&&this.options.binary?D.utf8decode(b):d.transformTo("string",b),a||this.options.binary||(b=d.transformTo("string",D.utf8encode(b))),b)},r=function(a,b,c){this.name=a,this.dir=c.dir,this.date=c.date,this.comment=c.comment,this.unixPermissions=c.unixPermissions,this.dosPermissions=c.dosPermissions,this._data=b,this.options=c,this._initialMetadata={dir:c.dir,date:c.date}};r.prototype={asText:function(){return q.call(this,!0)},asBinary:function(){return q.call(this,!1)},asNodeBuffer:function(){var a=p(this);return d.transformTo("nodebuffer",a)},asUint8Array:function(){var a=p(this);return d.transformTo("uint8array",a)},asArrayBuffer:function(){return this.asUint8Array().buffer}};var s=function(a,b){var c,d="";for(c=0;b>c;c++)d+=String.fromCharCode(255&a),a>>>=8;return d},t=function(){var a,b,c={};for(a=0;a<arguments.length;a++)for(b in arguments[a])arguments[a].hasOwnProperty(b)&&"undefined"==typeof c[b]&&(c[b]=arguments[a][b]);return c},u=function(a){return a=a||{},a.base64!==!0||null!==a.binary&&void 0!==a.binary||(a.binary=!0),a=t(a,g),a.date=a.date||new Date,null!==a.compression&&(a.compression=a.compression.toUpperCase()),a},v=function(a,b,c){var e,f=d.getTypeOf(b);if(c=u(c),"string"==typeof c.unixPermissions&&(c.unixPermissions=parseInt(c.unixPermissions,8)),c.unixPermissions&&16384&c.unixPermissions&&(c.dir=!0),c.dosPermissions&&16&c.dosPermissions&&(c.dir=!0),c.dir&&(a=x(a)),c.createFolders&&(e=w(a))&&y.call(this,e,!0),c.dir||null===b||"undefined"==typeof b)c.base64=!1,c.binary=!1,b=null,f=null;else if("string"===f)c.binary&&!c.base64&&c.optimizedBinaryString!==!0&&(b=d.string2binary(b));else{if(c.base64=!1,c.binary=!0,!(f||b instanceof j))throw new Error("The data of '"+a+"' is in an unsupported format !");"arraybuffer"===f&&(b=d.transformTo("uint8array",b))}var g=new r(a,b,c);return this.files[a]=g,g},w=function(a){"/"==a.slice(-1)&&(a=a.substring(0,a.length-1));var b=a.lastIndexOf("/");return b>0?a.substring(0,b):""},x=function(a){return"/"!=a.slice(-1)&&(a+="/"),a},y=function(a,b){return b="undefined"!=typeof b?b:!1,a=x(a),this.files[a]||v.call(this,a,null,{dir:!0,createFolders:b}),this.files[a]},z=function(a,b,c){var f,g=new j;return a._data instanceof j?(g.uncompressedSize=a._data.uncompressedSize,g.crc32=a._data.crc32,0===g.uncompressedSize||a.dir?(b=i.STORE,g.compressedContent="",g.crc32=0):a._data.compressionMethod===b.magic?g.compressedContent=a._data.getCompressedContent():(f=a._data.getContent(),g.compressedContent=b.compress(d.transformTo(b.compressInputType,f),c))):(f=p(a),(!f||0===f.length||a.dir)&&(b=i.STORE,f=""),g.uncompressedSize=f.length,g.crc32=e(f),g.compressedContent=b.compress(d.transformTo(b.compressInputType,f),c)),g.compressedSize=g.compressedContent.length,g.compressionMethod=b.magic,g},A=function(a,b){var c=a;return a||(c=b?16893:33204),(65535&c)<<16},B=function(a){return 63&(a||0)},C=function(a,b,c,g,h){var i,j,k,m,n=(c.compressedContent,d.transformTo("string",l.utf8encode(b.name))),o=b.comment||"",p=d.transformTo("string",l.utf8encode(o)),q=n.length!==b.name.length,r=p.length!==o.length,t=b.options,u="",v="",w="";k=b._initialMetadata.dir!==b.dir?b.dir:t.dir,m=b._initialMetadata.date!==b.date?b.date:t.date;var x=0,y=0;k&&(x|=16),"UNIX"===h?(y=798,x|=A(b.unixPermissions,k)):(y=20,x|=B(b.dosPermissions,k)),i=m.getHours(),i<<=6,i|=m.getMinutes(),i<<=5,i|=m.getSeconds()/2,j=m.getFullYear()-1980,j<<=4,j|=m.getMonth()+1,j<<=5,j|=m.getDate(),q&&(v=s(1,1)+s(e(n),4)+n,u+="up"+s(v.length,2)+v),r&&(w=s(1,1)+s(this.crc32(p),4)+p,u+="uc"+s(w.length,2)+w);var z="";z+="\n\x00",z+=q||r?"\x00\b":"\x00\x00",z+=c.compressionMethod,z+=s(i,2),z+=s(j,2),z+=s(c.crc32,4),z+=s(c.compressedSize,4),z+=s(c.uncompressedSize,4),z+=s(n.length,2),z+=s(u.length,2);var C=f.LOCAL_FILE_HEADER+z+n+u,D=f.CENTRAL_FILE_HEADER+s(y,2)+z+s(p.length,2)+"\x00\x00\x00\x00"+s(x,4)+s(g,4)+n+u+p;return{fileRecord:C,dirRecord:D,compressedObject:c}},D={load:function(){throw new Error("Load method is not defined. Is the file jszip-load.js included ?")},filter:function(a){var b,c,d,e,f=[];for(b in this.files)this.files.hasOwnProperty(b)&&(d=this.files[b],e=new r(d.name,d._data,t(d.options)),c=b.slice(this.root.length,b.length),b.slice(0,this.root.length)===this.root&&a(c,e)&&f.push(e));return f},file:function(a,b,c){if(1===arguments.length){if(d.isRegExp(a)){var e=a;return this.filter(function(a,b){return!b.dir&&e.test(a)})}return this.filter(function(b,c){return!c.dir&&b===a})[0]||null}return a=this.root+a,v.call(this,a,b,c),this},folder:function(a){if(!a)return this;if(d.isRegExp(a))return this.filter(function(b,c){return c.dir&&a.test(b)});var b=this.root+a,c=y.call(this,b),e=this.clone();return e.root=c.name,e},remove:function(a){a=this.root+a;var b=this.files[a];if(b||("/"!=a.slice(-1)&&(a+="/"),b=this.files[a]),b&&!b.dir)delete this.files[a];else for(var c=this.filter(function(b,c){return c.name.slice(0,a.length)===a}),d=0;d<c.length;d++)delete this.files[c[d].name];return this},generate:function(a){a=t(a||{},{base64:!0,compression:"STORE",compressionOptions:null,type:"base64",platform:"DOS",comment:null,mimeType:"application/zip"}),d.checkSupport(a.type),("darwin"===a.platform||"freebsd"===a.platform||"linux"===a.platform||"sunos"===a.platform)&&(a.platform="UNIX"),"win32"===a.platform&&(a.platform="DOS");var b,c,e=[],g=0,j=0,k=d.transformTo("string",this.utf8encode(a.comment||this.comment||""));for(var l in this.files)if(this.files.hasOwnProperty(l)){var o=this.files[l],p=o.options.compression||a.compression.toUpperCase(),q=i[p];if(!q)throw new Error(p+" is not a valid compression method !");var r=o.options.compressionOptions||a.compressionOptions||{},u=z.call(this,o,q,r),v=C.call(this,l,o,u,g,a.platform);g+=v.fileRecord.length+u.compressedSize,j+=v.dirRecord.length,e.push(v)}var w="";w=f.CENTRAL_DIRECTORY_END+"\x00\x00\x00\x00"+s(e.length,2)+s(e.length,2)+s(j,4)+s(g,4)+s(k.length,2)+k;var x=a.type.toLowerCase();for(b="uint8array"===x||"arraybuffer"===x||"blob"===x||"nodebuffer"===x?new n(g+j+w.length):new m(g+j+w.length),c=0;c<e.length;c++)b.append(e[c].fileRecord),b.append(e[c].compressedObject.compressedContent);for(c=0;c<e.length;c++)b.append(e[c].dirRecord);b.append(w);var y=b.finalize();switch(a.type.toLowerCase()){case"uint8array":case"arraybuffer":case"nodebuffer":return d.transformTo(a.type.toLowerCase(),y);case"blob":return d.arrayBuffer2Blob(d.transformTo("arraybuffer",y),a.mimeType);case"base64":return a.base64?h.encode(y):y;default:return y}},crc32:function(a,b){return e(a,b)},utf8encode:function(a){return d.transformTo("string",l.utf8encode(a))},utf8decode:function(a){return l.utf8decode(a)}};b.exports=D},{"./base64":1,"./compressedObject":2,"./compressions":3,"./crc32":4,"./defaults":6,"./nodeBuffer":11,"./signature":14,"./stringWriter":16,"./support":17,"./uint8ArrayWriter":19,"./utf8":20,"./utils":21}],14:[function(a,b,c){"use strict";c.LOCAL_FILE_HEADER="PK",c.CENTRAL_FILE_HEADER="PK",c.CENTRAL_DIRECTORY_END="PK",c.ZIP64_CENTRAL_DIRECTORY_LOCATOR="PK",c.ZIP64_CENTRAL_DIRECTORY_END="PK",c.DATA_DESCRIPTOR="PK\b"},{}],15:[function(a,b){"use strict";function c(a,b){this.data=a,b||(this.data=e.string2binary(this.data)),this.length=this.data.length,this.index=0}var d=a("./dataReader"),e=a("./utils");c.prototype=new d,c.prototype.byteAt=function(a){return this.data.charCodeAt(a)},c.prototype.lastIndexOfSignature=function(a){return this.data.lastIndexOf(a)},c.prototype.readData=function(a){this.checkOffset(a);var b=this.data.slice(this.index,this.index+a);return this.index+=a,b},b.exports=c},{"./dataReader":5,"./utils":21}],16:[function(a,b){"use strict";var c=a("./utils"),d=function(){this.data=[]};d.prototype={append:function(a){a=c.transformTo("string",a),this.data.push(a)},finalize:function(){return this.data.join("")}},b.exports=d},{"./utils":21}],17:[function(a,b,c){(function(a){"use strict";if(c.base64=!0,c.array=!0,c.string=!0,c.arraybuffer="undefined"!=typeof ArrayBuffer&&"undefined"!=typeof Uint8Array,c.nodebuffer="undefined"!=typeof a,c.uint8array="undefined"!=typeof Uint8Array,"undefined"==typeof ArrayBuffer)c.blob=!1;else{var b=new ArrayBuffer(0);try{c.blob=0===new Blob([b],{type:"application/zip"}).size}catch(d){try{var e=window.BlobBuilder||window.WebKitBlobBuilder||window.MozBlobBuilder||window.MSBlobBuilder,f=new e;f.append(b),c.blob=0===f.getBlob("application/zip").size}catch(d){c.blob=!1}}}}).call(this,"undefined"!=typeof Buffer?Buffer:void 0)},{}],18:[function(a,b){"use strict";function c(a){a&&(this.data=a,this.length=this.data.length,this.index=0)}var d=a("./dataReader");c.prototype=new d,c.prototype.byteAt=function(a){return this.data[a]},c.prototype.lastIndexOfSignature=function(a){for(var b=a.charCodeAt(0),c=a.charCodeAt(1),d=a.charCodeAt(2),e=a.charCodeAt(3),f=this.length-4;f>=0;--f)if(this.data[f]===b&&this.data[f+1]===c&&this.data[f+2]===d&&this.data[f+3]===e)return f;return-1},c.prototype.readData=function(a){if(this.checkOffset(a),0===a)return new Uint8Array(0);var b=this.data.subarray(this.index,this.index+a);return this.index+=a,b},b.exports=c},{"./dataReader":5}],19:[function(a,b){"use strict";var c=a("./utils"),d=function(a){this.data=new Uint8Array(a),this.index=0};d.prototype={append:function(a){0!==a.length&&(a=c.transformTo("uint8array",a),this.data.set(a,this.index),this.index+=a.length)},finalize:function(){return this.data}},b.exports=d},{"./utils":21}],20:[function(a,b,c){"use strict";for(var d=a("./utils"),e=a("./support"),f=a("./nodeBuffer"),g=new Array(256),h=0;256>h;h++)g[h]=h>=252?6:h>=248?5:h>=240?4:h>=224?3:h>=192?2:1;g[254]=g[254]=1;var i=function(a){var b,c,d,f,g,h=a.length,i=0;for(f=0;h>f;f++)c=a.charCodeAt(f),55296===(64512&c)&&h>f+1&&(d=a.charCodeAt(f+1),56320===(64512&d)&&(c=65536+(c-55296<<10)+(d-56320),f++)),i+=128>c?1:2048>c?2:65536>c?3:4;for(b=e.uint8array?new Uint8Array(i):new Array(i),g=0,f=0;i>g;f++)c=a.charCodeAt(f),55296===(64512&c)&&h>f+1&&(d=a.charCodeAt(f+1),56320===(64512&d)&&(c=65536+(c-55296<<10)+(d-56320),f++)),128>c?b[g++]=c:2048>c?(b[g++]=192|c>>>6,b[g++]=128|63&c):65536>c?(b[g++]=224|c>>>12,b[g++]=128|c>>>6&63,b[g++]=128|63&c):(b[g++]=240|c>>>18,b[g++]=128|c>>>12&63,b[g++]=128|c>>>6&63,b[g++]=128|63&c);return b},j=function(a,b){var c;for(b=b||a.length,b>a.length&&(b=a.length),c=b-1;c>=0&&128===(192&a[c]);)c--;return 0>c?b:0===c?b:c+g[a[c]]>b?c:b},k=function(a){var b,c,e,f,h=a.length,i=new Array(2*h);for(c=0,b=0;h>b;)if(e=a[b++],128>e)i[c++]=e;else if(f=g[e],f>4)i[c++]=65533,b+=f-1;else{for(e&=2===f?31:3===f?15:7;f>1&&h>b;)e=e<<6|63&a[b++],f--;f>1?i[c++]=65533:65536>e?i[c++]=e:(e-=65536,i[c++]=55296|e>>10&1023,i[c++]=56320|1023&e)}return i.length!==c&&(i.subarray?i=i.subarray(0,c):i.length=c),d.applyFromCharCode(i)};c.utf8encode=function(a){return e.nodebuffer?f(a,"utf-8"):i(a)},c.utf8decode=function(a){if(e.nodebuffer)return d.transformTo("nodebuffer",a).toString("utf-8");a=d.transformTo(e.uint8array?"uint8array":"array",a);for(var b=[],c=0,f=a.length,g=65536;f>c;){var h=j(a,Math.min(c+g,f));b.push(e.uint8array?k(a.subarray(c,h)):k(a.slice(c,h))),c=h}return b.join("")}},{"./nodeBuffer":11,"./support":17,"./utils":21}],21:[function(a,b,c){"use strict";function d(a){return a}function e(a,b){for(var c=0;c<a.length;++c)b[c]=255&a.charCodeAt(c);return b}function f(a){var b=65536,d=[],e=a.length,f=c.getTypeOf(a),g=0,h=!0;try{switch(f){case"uint8array":String.fromCharCode.apply(null,new Uint8Array(0));break;case"nodebuffer":String.fromCharCode.apply(null,j(0))}}catch(i){h=!1}if(!h){for(var k="",l=0;l<a.length;l++)k+=String.fromCharCode(a[l]);return k}for(;e>g&&b>1;)try{d.push("array"===f||"nodebuffer"===f?String.fromCharCode.apply(null,a.slice(g,Math.min(g+b,e))):String.fromCharCode.apply(null,a.subarray(g,Math.min(g+b,e)))),g+=b}catch(i){b=Math.floor(b/2)}return d.join("")}function g(a,b){for(var c=0;c<a.length;c++)b[c]=a[c];return b}var h=a("./support"),i=a("./compressions"),j=a("./nodeBuffer");c.string2binary=function(a){for(var b="",c=0;c<a.length;c++)b+=String.fromCharCode(255&a.charCodeAt(c));return b},c.arrayBuffer2Blob=function(a,b){c.checkSupport("blob"),b=b||"application/zip";try{return new Blob([a],{type:b})}catch(d){try{var e=window.BlobBuilder||window.WebKitBlobBuilder||window.MozBlobBuilder||window.MSBlobBuilder,f=new e;return f.append(a),f.getBlob(b)}catch(d){throw new Error("Bug : can't construct the Blob.")}}},c.applyFromCharCode=f;var k={};k.string={string:d,array:function(a){return e(a,new Array(a.length))},arraybuffer:function(a){return k.string.uint8array(a).buffer},uint8array:function(a){return e(a,new Uint8Array(a.length))},nodebuffer:function(a){return e(a,j(a.length))}},k.array={string:f,array:d,arraybuffer:function(a){return new Uint8Array(a).buffer},uint8array:function(a){return new Uint8Array(a)},nodebuffer:function(a){return j(a)}},k.arraybuffer={string:function(a){return f(new Uint8Array(a))},array:function(a){return g(new Uint8Array(a),new Array(a.byteLength))},arraybuffer:d,uint8array:function(a){return new Uint8Array(a)},nodebuffer:function(a){return j(new Uint8Array(a))}},k.uint8array={string:f,array:function(a){return g(a,new Array(a.length))},arraybuffer:function(a){return a.buffer},uint8array:d,nodebuffer:function(a){return j(a)}},k.nodebuffer={string:f,array:function(a){return g(a,new Array(a.length))},arraybuffer:function(a){return k.nodebuffer.uint8array(a).buffer},uint8array:function(a){return g(a,new Uint8Array(a.length))},nodebuffer:d},c.transformTo=function(a,b){if(b||(b=""),!a)return b;c.checkSupport(a);var d=c.getTypeOf(b),e=k[d][a](b);return e},c.getTypeOf=function(a){return"string"==typeof a?"string":"[object Array]"===Object.prototype.toString.call(a)?"array":h.nodebuffer&&j.test(a)?"nodebuffer":h.uint8array&&a instanceof Uint8Array?"uint8array":h.arraybuffer&&a instanceof ArrayBuffer?"arraybuffer":void 0},c.checkSupport=function(a){var b=h[a.toLowerCase()];if(!b)throw new Error(a+" is not supported by this browser")},c.MAX_VALUE_16BITS=65535,c.MAX_VALUE_32BITS=-1,c.pretty=function(a){var b,c,d="";for(c=0;c<(a||"").length;c++)b=a.charCodeAt(c),d+="\\x"+(16>b?"0":"")+b.toString(16).toUpperCase();return d},c.findCompression=function(a){for(var b in i)if(i.hasOwnProperty(b)&&i[b].magic===a)return i[b];return null},c.isRegExp=function(a){return"[object RegExp]"===Object.prototype.toString.call(a)}},{"./compressions":3,"./nodeBuffer":11,"./support":17}],22:[function(a,b){"use strict";function c(a,b){this.files=[],this.loadOptions=b,a&&this.load(a)}var d=a("./stringReader"),e=a("./nodeBufferReader"),f=a("./uint8ArrayReader"),g=a("./utils"),h=a("./signature"),i=a("./zipEntry"),j=a("./support"),k=a("./object");c.prototype={checkSignature:function(a){var b=this.reader.readString(4);if(b!==a)throw new Error("Corrupted zip or bug : unexpected signature ("+g.pretty(b)+", expected "+g.pretty(a)+")")},readBlockEndOfCentral:function(){this.diskNumber=this.reader.readInt(2),this.diskWithCentralDirStart=this.reader.readInt(2),this.centralDirRecordsOnThisDisk=this.reader.readInt(2),this.centralDirRecords=this.reader.readInt(2),this.centralDirSize=this.reader.readInt(4),this.centralDirOffset=this.reader.readInt(4),this.zipCommentLength=this.reader.readInt(2),this.zipComment=this.reader.readString(this.zipCommentLength),this.zipComment=k.utf8decode(this.zipComment)},readBlockZip64EndOfCentral:function(){this.zip64EndOfCentralSize=this.reader.readInt(8),this.versionMadeBy=this.reader.readString(2),this.versionNeeded=this.reader.readInt(2),this.diskNumber=this.reader.readInt(4),this.diskWithCentralDirStart=this.reader.readInt(4),this.centralDirRecordsOnThisDisk=this.reader.readInt(8),this.centralDirRecords=this.reader.readInt(8),this.centralDirSize=this.reader.readInt(8),this.centralDirOffset=this.reader.readInt(8),this.zip64ExtensibleData={};for(var a,b,c,d=this.zip64EndOfCentralSize-44,e=0;d>e;)a=this.reader.readInt(2),b=this.reader.readInt(4),c=this.reader.readString(b),this.zip64ExtensibleData[a]={id:a,length:b,value:c}},readBlockZip64EndOfCentralLocator:function(){if(this.diskWithZip64CentralDirStart=this.reader.readInt(4),this.relativeOffsetEndOfZip64CentralDir=this.reader.readInt(8),this.disksCount=this.reader.readInt(4),this.disksCount>1)throw new Error("Multi-volumes zip are not supported")},readLocalFiles:function(){var a,b;for(a=0;a<this.files.length;a++)b=this.files[a],this.reader.setIndex(b.localHeaderOffset),this.checkSignature(h.LOCAL_FILE_HEADER),b.readLocalPart(this.reader),b.handleUTF8(),b.processAttributes()},readCentralDir:function(){var a;for(this.reader.setIndex(this.centralDirOffset);this.reader.readString(4)===h.CENTRAL_FILE_HEADER;)a=new i({zip64:this.zip64},this.loadOptions),a.readCentralPart(this.reader),this.files.push(a)},readEndOfCentral:function(){var a=this.reader.lastIndexOfSignature(h.CENTRAL_DIRECTORY_END);if(-1===a){var b=!0;try{this.reader.setIndex(0),this.checkSignature(h.LOCAL_FILE_HEADER),b=!1}catch(c){}throw new Error(b?"Can't find end of central directory : is this a zip file ? If it is, see http://stuk.github.io/jszip/documentation/howto/read_zip.html":"Corrupted zip : can't find end of central directory")}if(this.reader.setIndex(a),this.checkSignature(h.CENTRAL_DIRECTORY_END),this.readBlockEndOfCentral(),this.diskNumber===g.MAX_VALUE_16BITS||this.diskWithCentralDirStart===g.MAX_VALUE_16BITS||this.centralDirRecordsOnThisDisk===g.MAX_VALUE_16BITS||this.centralDirRecords===g.MAX_VALUE_16BITS||this.centralDirSize===g.MAX_VALUE_32BITS||this.centralDirOffset===g.MAX_VALUE_32BITS){if(this.zip64=!0,a=this.reader.lastIndexOfSignature(h.ZIP64_CENTRAL_DIRECTORY_LOCATOR),-1===a)throw new Error("Corrupted zip : can't find the ZIP64 end of central directory locator");this.reader.setIndex(a),this.checkSignature(h.ZIP64_CENTRAL_DIRECTORY_LOCATOR),this.readBlockZip64EndOfCentralLocator(),this.reader.setIndex(this.relativeOffsetEndOfZip64CentralDir),this.checkSignature(h.ZIP64_CENTRAL_DIRECTORY_END),this.readBlockZip64EndOfCentral()}},prepareReader:function(a){var b=g.getTypeOf(a);this.reader="string"!==b||j.uint8array?"nodebuffer"===b?new e(a):new f(g.transformTo("uint8array",a)):new d(a,this.loadOptions.optimizedBinaryString)},load:function(a){this.prepareReader(a),this.readEndOfCentral(),this.readCentralDir(),this.readLocalFiles()}},b.exports=c},{"./nodeBufferReader":12,"./object":13,"./signature":14,"./stringReader":15,"./support":17,"./uint8ArrayReader":18,"./utils":21,"./zipEntry":23}],23:[function(a,b){"use strict";function c(a,b){this.options=a,this.loadOptions=b}var d=a("./stringReader"),e=a("./utils"),f=a("./compressedObject"),g=a("./object"),h=0,i=3;c.prototype={isEncrypted:function(){return 1===(1&this.bitFlag)},useUTF8:function(){return 2048===(2048&this.bitFlag)},prepareCompressedContent:function(a,b,c){return function(){var d=a.index;a.setIndex(b);var e=a.readData(c);return a.setIndex(d),e}},prepareContent:function(a,b,c,d,f){return function(){var a=e.transformTo(d.uncompressInputType,this.getCompressedContent()),b=d.uncompress(a);if(b.length!==f)throw new Error("Bug : uncompressed data size mismatch");return b}},readLocalPart:function(a){var b,c;if(a.skip(22),this.fileNameLength=a.readInt(2),c=a.readInt(2),this.fileName=a.readString(this.fileNameLength),a.skip(c),-1==this.compressedSize||-1==this.uncompressedSize)throw new Error("Bug or corrupted zip : didn't get enough informations from the central directory (compressedSize == -1 || uncompressedSize == -1)");if(b=e.findCompression(this.compressionMethod),null===b)throw new Error("Corrupted zip : compression "+e.pretty(this.compressionMethod)+" unknown (inner file : "+this.fileName+")");if(this.decompressed=new f,this.decompressed.compressedSize=this.compressedSize,this.decompressed.uncompressedSize=this.uncompressedSize,this.decompressed.crc32=this.crc32,this.decompressed.compressionMethod=this.compressionMethod,this.decompressed.getCompressedContent=this.prepareCompressedContent(a,a.index,this.compressedSize,b),this.decompressed.getContent=this.prepareContent(a,a.index,this.compressedSize,b,this.uncompressedSize),this.loadOptions.checkCRC32&&(this.decompressed=e.transformTo("string",this.decompressed.getContent()),g.crc32(this.decompressed)!==this.crc32))throw new Error("Corrupted zip : CRC32 mismatch")},readCentralPart:function(a){if(this.versionMadeBy=a.readInt(2),this.versionNeeded=a.readInt(2),this.bitFlag=a.readInt(2),this.compressionMethod=a.readString(2),this.date=a.readDate(),this.crc32=a.readInt(4),this.compressedSize=a.readInt(4),this.uncompressedSize=a.readInt(4),this.fileNameLength=a.readInt(2),this.extraFieldsLength=a.readInt(2),this.fileCommentLength=a.readInt(2),this.diskNumberStart=a.readInt(2),this.internalFileAttributes=a.readInt(2),this.externalFileAttributes=a.readInt(4),this.localHeaderOffset=a.readInt(4),this.isEncrypted())throw new Error("Encrypted zip are not supported");this.fileName=a.readString(this.fileNameLength),this.readExtraFields(a),this.parseZIP64ExtraField(a),this.fileComment=a.readString(this.fileCommentLength)},processAttributes:function(){this.unixPermissions=null,this.dosPermissions=null;var a=this.versionMadeBy>>8;this.dir=16&this.externalFileAttributes?!0:!1,a===h&&(this.dosPermissions=63&this.externalFileAttributes),a===i&&(this.unixPermissions=this.externalFileAttributes>>16&65535),this.dir||"/"!==this.fileName.slice(-1)||(this.dir=!0)},parseZIP64ExtraField:function(){if(this.extraFields[1]){var a=new d(this.extraFields[1].value);this.uncompressedSize===e.MAX_VALUE_32BITS&&(this.uncompressedSize=a.readInt(8)),this.compressedSize===e.MAX_VALUE_32BITS&&(this.compressedSize=a.readInt(8)),this.localHeaderOffset===e.MAX_VALUE_32BITS&&(this.localHeaderOffset=a.readInt(8)),this.diskNumberStart===e.MAX_VALUE_32BITS&&(this.diskNumberStart=a.readInt(4))}},readExtraFields:function(a){var b,c,d,e=a.index;for(this.extraFields=this.extraFields||{};a.index<e+this.extraFieldsLength;)b=a.readInt(2),c=a.readInt(2),d=a.readString(c),this.extraFields[b]={id:b,length:c,value:d}},handleUTF8:function(){if(this.useUTF8())this.fileName=g.utf8decode(this.fileName),this.fileComment=g.utf8decode(this.fileComment);else{var a=this.findExtraFieldUnicodePath();null!==a&&(this.fileName=a);var b=this.findExtraFieldUnicodeComment();null!==b&&(this.fileComment=b)}},findExtraFieldUnicodePath:function(){var a=this.extraFields[28789];if(a){var b=new d(a.value);return 1!==b.readInt(1)?null:g.crc32(this.fileName)!==b.readInt(4)?null:g.utf8decode(b.readString(a.length-5))
}return null},findExtraFieldUnicodeComment:function(){var a=this.extraFields[25461];if(a){var b=new d(a.value);return 1!==b.readInt(1)?null:g.crc32(this.fileComment)!==b.readInt(4)?null:g.utf8decode(b.readString(a.length-5))}return null}},b.exports=c},{"./compressedObject":2,"./object":13,"./stringReader":15,"./utils":21}],24:[function(a,b){"use strict";var c=a("./lib/utils/common").assign,d=a("./lib/deflate"),e=a("./lib/inflate"),f=a("./lib/zlib/constants"),g={};c(g,d,e,f),b.exports=g},{"./lib/deflate":25,"./lib/inflate":26,"./lib/utils/common":27,"./lib/zlib/constants":30}],25:[function(a,b,c){"use strict";function d(a,b){var c=new s(b);if(c.push(a,!0),c.err)throw c.msg;return c.result}function e(a,b){return b=b||{},b.raw=!0,d(a,b)}function f(a,b){return b=b||{},b.gzip=!0,d(a,b)}var g=a("./zlib/deflate.js"),h=a("./utils/common"),i=a("./utils/strings"),j=a("./zlib/messages"),k=a("./zlib/zstream"),l=0,m=4,n=0,o=1,p=-1,q=0,r=8,s=function(a){this.options=h.assign({level:p,method:r,chunkSize:16384,windowBits:15,memLevel:8,strategy:q,to:""},a||{});var b=this.options;b.raw&&b.windowBits>0?b.windowBits=-b.windowBits:b.gzip&&b.windowBits>0&&b.windowBits<16&&(b.windowBits+=16),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new k,this.strm.avail_out=0;var c=g.deflateInit2(this.strm,b.level,b.method,b.windowBits,b.memLevel,b.strategy);if(c!==n)throw new Error(j[c]);b.header&&g.deflateSetHeader(this.strm,b.header)};s.prototype.push=function(a,b){var c,d,e=this.strm,f=this.options.chunkSize;if(this.ended)return!1;d=b===~~b?b:b===!0?m:l,e.input="string"==typeof a?i.string2buf(a):a,e.next_in=0,e.avail_in=e.input.length;do{if(0===e.avail_out&&(e.output=new h.Buf8(f),e.next_out=0,e.avail_out=f),c=g.deflate(e,d),c!==o&&c!==n)return this.onEnd(c),this.ended=!0,!1;(0===e.avail_out||0===e.avail_in&&d===m)&&this.onData("string"===this.options.to?i.buf2binstring(h.shrinkBuf(e.output,e.next_out)):h.shrinkBuf(e.output,e.next_out))}while((e.avail_in>0||0===e.avail_out)&&c!==o);return d===m?(c=g.deflateEnd(this.strm),this.onEnd(c),this.ended=!0,c===n):!0},s.prototype.onData=function(a){this.chunks.push(a)},s.prototype.onEnd=function(a){a===n&&(this.result="string"===this.options.to?this.chunks.join(""):h.flattenChunks(this.chunks)),this.chunks=[],this.err=a,this.msg=this.strm.msg},c.Deflate=s,c.deflate=d,c.deflateRaw=e,c.gzip=f},{"./utils/common":27,"./utils/strings":28,"./zlib/deflate.js":32,"./zlib/messages":37,"./zlib/zstream":39}],26:[function(a,b,c){"use strict";function d(a,b){var c=new m(b);if(c.push(a,!0),c.err)throw c.msg;return c.result}function e(a,b){return b=b||{},b.raw=!0,d(a,b)}var f=a("./zlib/inflate.js"),g=a("./utils/common"),h=a("./utils/strings"),i=a("./zlib/constants"),j=a("./zlib/messages"),k=a("./zlib/zstream"),l=a("./zlib/gzheader"),m=function(a){this.options=g.assign({chunkSize:16384,windowBits:0,to:""},a||{});var b=this.options;b.raw&&b.windowBits>=0&&b.windowBits<16&&(b.windowBits=-b.windowBits,0===b.windowBits&&(b.windowBits=-15)),!(b.windowBits>=0&&b.windowBits<16)||a&&a.windowBits||(b.windowBits+=32),b.windowBits>15&&b.windowBits<48&&0===(15&b.windowBits)&&(b.windowBits|=15),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new k,this.strm.avail_out=0;var c=f.inflateInit2(this.strm,b.windowBits);if(c!==i.Z_OK)throw new Error(j[c]);this.header=new l,f.inflateGetHeader(this.strm,this.header)};m.prototype.push=function(a,b){var c,d,e,j,k,l=this.strm,m=this.options.chunkSize;if(this.ended)return!1;d=b===~~b?b:b===!0?i.Z_FINISH:i.Z_NO_FLUSH,l.input="string"==typeof a?h.binstring2buf(a):a,l.next_in=0,l.avail_in=l.input.length;do{if(0===l.avail_out&&(l.output=new g.Buf8(m),l.next_out=0,l.avail_out=m),c=f.inflate(l,i.Z_NO_FLUSH),c!==i.Z_STREAM_END&&c!==i.Z_OK)return this.onEnd(c),this.ended=!0,!1;l.next_out&&(0===l.avail_out||c===i.Z_STREAM_END||0===l.avail_in&&d===i.Z_FINISH)&&("string"===this.options.to?(e=h.utf8border(l.output,l.next_out),j=l.next_out-e,k=h.buf2string(l.output,e),l.next_out=j,l.avail_out=m-j,j&&g.arraySet(l.output,l.output,e,j,0),this.onData(k)):this.onData(g.shrinkBuf(l.output,l.next_out)))}while(l.avail_in>0&&c!==i.Z_STREAM_END);return c===i.Z_STREAM_END&&(d=i.Z_FINISH),d===i.Z_FINISH?(c=f.inflateEnd(this.strm),this.onEnd(c),this.ended=!0,c===i.Z_OK):!0},m.prototype.onData=function(a){this.chunks.push(a)},m.prototype.onEnd=function(a){a===i.Z_OK&&(this.result="string"===this.options.to?this.chunks.join(""):g.flattenChunks(this.chunks)),this.chunks=[],this.err=a,this.msg=this.strm.msg},c.Inflate=m,c.inflate=d,c.inflateRaw=e,c.ungzip=d},{"./utils/common":27,"./utils/strings":28,"./zlib/constants":30,"./zlib/gzheader":33,"./zlib/inflate.js":35,"./zlib/messages":37,"./zlib/zstream":39}],27:[function(a,b,c){"use strict";var d="undefined"!=typeof Uint8Array&&"undefined"!=typeof Uint16Array&&"undefined"!=typeof Int32Array;c.assign=function(a){for(var b=Array.prototype.slice.call(arguments,1);b.length;){var c=b.shift();if(c){if("object"!=typeof c)throw new TypeError(c+"must be non-object");for(var d in c)c.hasOwnProperty(d)&&(a[d]=c[d])}}return a},c.shrinkBuf=function(a,b){return a.length===b?a:a.subarray?a.subarray(0,b):(a.length=b,a)};var e={arraySet:function(a,b,c,d,e){if(b.subarray&&a.subarray)return void a.set(b.subarray(c,c+d),e);for(var f=0;d>f;f++)a[e+f]=b[c+f]},flattenChunks:function(a){var b,c,d,e,f,g;for(d=0,b=0,c=a.length;c>b;b++)d+=a[b].length;for(g=new Uint8Array(d),e=0,b=0,c=a.length;c>b;b++)f=a[b],g.set(f,e),e+=f.length;return g}},f={arraySet:function(a,b,c,d,e){for(var f=0;d>f;f++)a[e+f]=b[c+f]},flattenChunks:function(a){return[].concat.apply([],a)}};c.setTyped=function(a){a?(c.Buf8=Uint8Array,c.Buf16=Uint16Array,c.Buf32=Int32Array,c.assign(c,e)):(c.Buf8=Array,c.Buf16=Array,c.Buf32=Array,c.assign(c,f))},c.setTyped(d)},{}],28:[function(a,b,c){"use strict";function d(a,b){if(65537>b&&(a.subarray&&g||!a.subarray&&f))return String.fromCharCode.apply(null,e.shrinkBuf(a,b));for(var c="",d=0;b>d;d++)c+=String.fromCharCode(a[d]);return c}var e=a("./common"),f=!0,g=!0;try{String.fromCharCode.apply(null,[0])}catch(h){f=!1}try{String.fromCharCode.apply(null,new Uint8Array(1))}catch(h){g=!1}for(var i=new e.Buf8(256),j=0;256>j;j++)i[j]=j>=252?6:j>=248?5:j>=240?4:j>=224?3:j>=192?2:1;i[254]=i[254]=1,c.string2buf=function(a){var b,c,d,f,g,h=a.length,i=0;for(f=0;h>f;f++)c=a.charCodeAt(f),55296===(64512&c)&&h>f+1&&(d=a.charCodeAt(f+1),56320===(64512&d)&&(c=65536+(c-55296<<10)+(d-56320),f++)),i+=128>c?1:2048>c?2:65536>c?3:4;for(b=new e.Buf8(i),g=0,f=0;i>g;f++)c=a.charCodeAt(f),55296===(64512&c)&&h>f+1&&(d=a.charCodeAt(f+1),56320===(64512&d)&&(c=65536+(c-55296<<10)+(d-56320),f++)),128>c?b[g++]=c:2048>c?(b[g++]=192|c>>>6,b[g++]=128|63&c):65536>c?(b[g++]=224|c>>>12,b[g++]=128|c>>>6&63,b[g++]=128|63&c):(b[g++]=240|c>>>18,b[g++]=128|c>>>12&63,b[g++]=128|c>>>6&63,b[g++]=128|63&c);return b},c.buf2binstring=function(a){return d(a,a.length)},c.binstring2buf=function(a){for(var b=new e.Buf8(a.length),c=0,d=b.length;d>c;c++)b[c]=a.charCodeAt(c);return b},c.buf2string=function(a,b){var c,e,f,g,h=b||a.length,j=new Array(2*h);for(e=0,c=0;h>c;)if(f=a[c++],128>f)j[e++]=f;else if(g=i[f],g>4)j[e++]=65533,c+=g-1;else{for(f&=2===g?31:3===g?15:7;g>1&&h>c;)f=f<<6|63&a[c++],g--;g>1?j[e++]=65533:65536>f?j[e++]=f:(f-=65536,j[e++]=55296|f>>10&1023,j[e++]=56320|1023&f)}return d(j,e)},c.utf8border=function(a,b){var c;for(b=b||a.length,b>a.length&&(b=a.length),c=b-1;c>=0&&128===(192&a[c]);)c--;return 0>c?b:0===c?b:c+i[a[c]]>b?c:b}},{"./common":27}],29:[function(a,b){"use strict";function c(a,b,c,d){for(var e=65535&a|0,f=a>>>16&65535|0,g=0;0!==c;){g=c>2e3?2e3:c,c-=g;do e=e+b[d++]|0,f=f+e|0;while(--g);e%=65521,f%=65521}return e|f<<16|0}b.exports=c},{}],30:[function(a,b){b.exports={Z_NO_FLUSH:0,Z_PARTIAL_FLUSH:1,Z_SYNC_FLUSH:2,Z_FULL_FLUSH:3,Z_FINISH:4,Z_BLOCK:5,Z_TREES:6,Z_OK:0,Z_STREAM_END:1,Z_NEED_DICT:2,Z_ERRNO:-1,Z_STREAM_ERROR:-2,Z_DATA_ERROR:-3,Z_BUF_ERROR:-5,Z_NO_COMPRESSION:0,Z_BEST_SPEED:1,Z_BEST_COMPRESSION:9,Z_DEFAULT_COMPRESSION:-1,Z_FILTERED:1,Z_HUFFMAN_ONLY:2,Z_RLE:3,Z_FIXED:4,Z_DEFAULT_STRATEGY:0,Z_BINARY:0,Z_TEXT:1,Z_UNKNOWN:2,Z_DEFLATED:8}},{}],31:[function(a,b){"use strict";function c(){for(var a,b=[],c=0;256>c;c++){a=c;for(var d=0;8>d;d++)a=1&a?3988292384^a>>>1:a>>>1;b[c]=a}return b}function d(a,b,c,d){var f=e,g=d+c;a=-1^a;for(var h=d;g>h;h++)a=a>>>8^f[255&(a^b[h])];return-1^a}var e=c();b.exports=d},{}],32:[function(a,b,c){"use strict";function d(a,b){return a.msg=G[b],b}function e(a){return(a<<1)-(a>4?9:0)}function f(a){for(var b=a.length;--b>=0;)a[b]=0}function g(a){var b=a.state,c=b.pending;c>a.avail_out&&(c=a.avail_out),0!==c&&(C.arraySet(a.output,b.pending_buf,b.pending_out,c,a.next_out),a.next_out+=c,b.pending_out+=c,a.total_out+=c,a.avail_out-=c,b.pending-=c,0===b.pending&&(b.pending_out=0))}function h(a,b){D._tr_flush_block(a,a.block_start>=0?a.block_start:-1,a.strstart-a.block_start,b),a.block_start=a.strstart,g(a.strm)}function i(a,b){a.pending_buf[a.pending++]=b}function j(a,b){a.pending_buf[a.pending++]=b>>>8&255,a.pending_buf[a.pending++]=255&b}function k(a,b,c,d){var e=a.avail_in;return e>d&&(e=d),0===e?0:(a.avail_in-=e,C.arraySet(b,a.input,a.next_in,e,c),1===a.state.wrap?a.adler=E(a.adler,b,e,c):2===a.state.wrap&&(a.adler=F(a.adler,b,e,c)),a.next_in+=e,a.total_in+=e,e)}function l(a,b){var c,d,e=a.max_chain_length,f=a.strstart,g=a.prev_length,h=a.nice_match,i=a.strstart>a.w_size-jb?a.strstart-(a.w_size-jb):0,j=a.window,k=a.w_mask,l=a.prev,m=a.strstart+ib,n=j[f+g-1],o=j[f+g];a.prev_length>=a.good_match&&(e>>=2),h>a.lookahead&&(h=a.lookahead);do if(c=b,j[c+g]===o&&j[c+g-1]===n&&j[c]===j[f]&&j[++c]===j[f+1]){f+=2,c++;do;while(j[++f]===j[++c]&&j[++f]===j[++c]&&j[++f]===j[++c]&&j[++f]===j[++c]&&j[++f]===j[++c]&&j[++f]===j[++c]&&j[++f]===j[++c]&&j[++f]===j[++c]&&m>f);if(d=ib-(m-f),f=m-ib,d>g){if(a.match_start=b,g=d,d>=h)break;n=j[f+g-1],o=j[f+g]}}while((b=l[b&k])>i&&0!==--e);return g<=a.lookahead?g:a.lookahead}function m(a){var b,c,d,e,f,g=a.w_size;do{if(e=a.window_size-a.lookahead-a.strstart,a.strstart>=g+(g-jb)){C.arraySet(a.window,a.window,g,g,0),a.match_start-=g,a.strstart-=g,a.block_start-=g,c=a.hash_size,b=c;do d=a.head[--b],a.head[b]=d>=g?d-g:0;while(--c);c=g,b=c;do d=a.prev[--b],a.prev[b]=d>=g?d-g:0;while(--c);e+=g}if(0===a.strm.avail_in)break;if(c=k(a.strm,a.window,a.strstart+a.lookahead,e),a.lookahead+=c,a.lookahead+a.insert>=hb)for(f=a.strstart-a.insert,a.ins_h=a.window[f],a.ins_h=(a.ins_h<<a.hash_shift^a.window[f+1])&a.hash_mask;a.insert&&(a.ins_h=(a.ins_h<<a.hash_shift^a.window[f+hb-1])&a.hash_mask,a.prev[f&a.w_mask]=a.head[a.ins_h],a.head[a.ins_h]=f,f++,a.insert--,!(a.lookahead+a.insert<hb)););}while(a.lookahead<jb&&0!==a.strm.avail_in)}function n(a,b){var c=65535;for(c>a.pending_buf_size-5&&(c=a.pending_buf_size-5);;){if(a.lookahead<=1){if(m(a),0===a.lookahead&&b===H)return sb;if(0===a.lookahead)break}a.strstart+=a.lookahead,a.lookahead=0;var d=a.block_start+c;if((0===a.strstart||a.strstart>=d)&&(a.lookahead=a.strstart-d,a.strstart=d,h(a,!1),0===a.strm.avail_out))return sb;if(a.strstart-a.block_start>=a.w_size-jb&&(h(a,!1),0===a.strm.avail_out))return sb}return a.insert=0,b===K?(h(a,!0),0===a.strm.avail_out?ub:vb):a.strstart>a.block_start&&(h(a,!1),0===a.strm.avail_out)?sb:sb}function o(a,b){for(var c,d;;){if(a.lookahead<jb){if(m(a),a.lookahead<jb&&b===H)return sb;if(0===a.lookahead)break}if(c=0,a.lookahead>=hb&&(a.ins_h=(a.ins_h<<a.hash_shift^a.window[a.strstart+hb-1])&a.hash_mask,c=a.prev[a.strstart&a.w_mask]=a.head[a.ins_h],a.head[a.ins_h]=a.strstart),0!==c&&a.strstart-c<=a.w_size-jb&&(a.match_length=l(a,c)),a.match_length>=hb)if(d=D._tr_tally(a,a.strstart-a.match_start,a.match_length-hb),a.lookahead-=a.match_length,a.match_length<=a.max_lazy_match&&a.lookahead>=hb){a.match_length--;do a.strstart++,a.ins_h=(a.ins_h<<a.hash_shift^a.window[a.strstart+hb-1])&a.hash_mask,c=a.prev[a.strstart&a.w_mask]=a.head[a.ins_h],a.head[a.ins_h]=a.strstart;while(0!==--a.match_length);a.strstart++}else a.strstart+=a.match_length,a.match_length=0,a.ins_h=a.window[a.strstart],a.ins_h=(a.ins_h<<a.hash_shift^a.window[a.strstart+1])&a.hash_mask;else d=D._tr_tally(a,0,a.window[a.strstart]),a.lookahead--,a.strstart++;if(d&&(h(a,!1),0===a.strm.avail_out))return sb}return a.insert=a.strstart<hb-1?a.strstart:hb-1,b===K?(h(a,!0),0===a.strm.avail_out?ub:vb):a.last_lit&&(h(a,!1),0===a.strm.avail_out)?sb:tb}function p(a,b){for(var c,d,e;;){if(a.lookahead<jb){if(m(a),a.lookahead<jb&&b===H)return sb;if(0===a.lookahead)break}if(c=0,a.lookahead>=hb&&(a.ins_h=(a.ins_h<<a.hash_shift^a.window[a.strstart+hb-1])&a.hash_mask,c=a.prev[a.strstart&a.w_mask]=a.head[a.ins_h],a.head[a.ins_h]=a.strstart),a.prev_length=a.match_length,a.prev_match=a.match_start,a.match_length=hb-1,0!==c&&a.prev_length<a.max_lazy_match&&a.strstart-c<=a.w_size-jb&&(a.match_length=l(a,c),a.match_length<=5&&(a.strategy===S||a.match_length===hb&&a.strstart-a.match_start>4096)&&(a.match_length=hb-1)),a.prev_length>=hb&&a.match_length<=a.prev_length){e=a.strstart+a.lookahead-hb,d=D._tr_tally(a,a.strstart-1-a.prev_match,a.prev_length-hb),a.lookahead-=a.prev_length-1,a.prev_length-=2;do++a.strstart<=e&&(a.ins_h=(a.ins_h<<a.hash_shift^a.window[a.strstart+hb-1])&a.hash_mask,c=a.prev[a.strstart&a.w_mask]=a.head[a.ins_h],a.head[a.ins_h]=a.strstart);while(0!==--a.prev_length);if(a.match_available=0,a.match_length=hb-1,a.strstart++,d&&(h(a,!1),0===a.strm.avail_out))return sb}else if(a.match_available){if(d=D._tr_tally(a,0,a.window[a.strstart-1]),d&&h(a,!1),a.strstart++,a.lookahead--,0===a.strm.avail_out)return sb}else a.match_available=1,a.strstart++,a.lookahead--}return a.match_available&&(d=D._tr_tally(a,0,a.window[a.strstart-1]),a.match_available=0),a.insert=a.strstart<hb-1?a.strstart:hb-1,b===K?(h(a,!0),0===a.strm.avail_out?ub:vb):a.last_lit&&(h(a,!1),0===a.strm.avail_out)?sb:tb}function q(a,b){for(var c,d,e,f,g=a.window;;){if(a.lookahead<=ib){if(m(a),a.lookahead<=ib&&b===H)return sb;if(0===a.lookahead)break}if(a.match_length=0,a.lookahead>=hb&&a.strstart>0&&(e=a.strstart-1,d=g[e],d===g[++e]&&d===g[++e]&&d===g[++e])){f=a.strstart+ib;do;while(d===g[++e]&&d===g[++e]&&d===g[++e]&&d===g[++e]&&d===g[++e]&&d===g[++e]&&d===g[++e]&&d===g[++e]&&f>e);a.match_length=ib-(f-e),a.match_length>a.lookahead&&(a.match_length=a.lookahead)}if(a.match_length>=hb?(c=D._tr_tally(a,1,a.match_length-hb),a.lookahead-=a.match_length,a.strstart+=a.match_length,a.match_length=0):(c=D._tr_tally(a,0,a.window[a.strstart]),a.lookahead--,a.strstart++),c&&(h(a,!1),0===a.strm.avail_out))return sb}return a.insert=0,b===K?(h(a,!0),0===a.strm.avail_out?ub:vb):a.last_lit&&(h(a,!1),0===a.strm.avail_out)?sb:tb}function r(a,b){for(var c;;){if(0===a.lookahead&&(m(a),0===a.lookahead)){if(b===H)return sb;break}if(a.match_length=0,c=D._tr_tally(a,0,a.window[a.strstart]),a.lookahead--,a.strstart++,c&&(h(a,!1),0===a.strm.avail_out))return sb}return a.insert=0,b===K?(h(a,!0),0===a.strm.avail_out?ub:vb):a.last_lit&&(h(a,!1),0===a.strm.avail_out)?sb:tb}function s(a){a.window_size=2*a.w_size,f(a.head),a.max_lazy_match=B[a.level].max_lazy,a.good_match=B[a.level].good_length,a.nice_match=B[a.level].nice_length,a.max_chain_length=B[a.level].max_chain,a.strstart=0,a.block_start=0,a.lookahead=0,a.insert=0,a.match_length=a.prev_length=hb-1,a.match_available=0,a.ins_h=0}function t(){this.strm=null,this.status=0,this.pending_buf=null,this.pending_buf_size=0,this.pending_out=0,this.pending=0,this.wrap=0,this.gzhead=null,this.gzindex=0,this.method=Y,this.last_flush=-1,this.w_size=0,this.w_bits=0,this.w_mask=0,this.window=null,this.window_size=0,this.prev=null,this.head=null,this.ins_h=0,this.hash_size=0,this.hash_bits=0,this.hash_mask=0,this.hash_shift=0,this.block_start=0,this.match_length=0,this.prev_match=0,this.match_available=0,this.strstart=0,this.match_start=0,this.lookahead=0,this.prev_length=0,this.max_chain_length=0,this.max_lazy_match=0,this.level=0,this.strategy=0,this.good_match=0,this.nice_match=0,this.dyn_ltree=new C.Buf16(2*fb),this.dyn_dtree=new C.Buf16(2*(2*db+1)),this.bl_tree=new C.Buf16(2*(2*eb+1)),f(this.dyn_ltree),f(this.dyn_dtree),f(this.bl_tree),this.l_desc=null,this.d_desc=null,this.bl_desc=null,this.bl_count=new C.Buf16(gb+1),this.heap=new C.Buf16(2*cb+1),f(this.heap),this.heap_len=0,this.heap_max=0,this.depth=new C.Buf16(2*cb+1),f(this.depth),this.l_buf=0,this.lit_bufsize=0,this.last_lit=0,this.d_buf=0,this.opt_len=0,this.static_len=0,this.matches=0,this.insert=0,this.bi_buf=0,this.bi_valid=0}function u(a){var b;return a&&a.state?(a.total_in=a.total_out=0,a.data_type=X,b=a.state,b.pending=0,b.pending_out=0,b.wrap<0&&(b.wrap=-b.wrap),b.status=b.wrap?lb:qb,a.adler=2===b.wrap?0:1,b.last_flush=H,D._tr_init(b),M):d(a,O)}function v(a){var b=u(a);return b===M&&s(a.state),b}function w(a,b){return a&&a.state?2!==a.state.wrap?O:(a.state.gzhead=b,M):O}function x(a,b,c,e,f,g){if(!a)return O;var h=1;if(b===R&&(b=6),0>e?(h=0,e=-e):e>15&&(h=2,e-=16),1>f||f>Z||c!==Y||8>e||e>15||0>b||b>9||0>g||g>V)return d(a,O);8===e&&(e=9);var i=new t;return a.state=i,i.strm=a,i.wrap=h,i.gzhead=null,i.w_bits=e,i.w_size=1<<i.w_bits,i.w_mask=i.w_size-1,i.hash_bits=f+7,i.hash_size=1<<i.hash_bits,i.hash_mask=i.hash_size-1,i.hash_shift=~~((i.hash_bits+hb-1)/hb),i.window=new C.Buf8(2*i.w_size),i.head=new C.Buf16(i.hash_size),i.prev=new C.Buf16(i.w_size),i.lit_bufsize=1<<f+6,i.pending_buf_size=4*i.lit_bufsize,i.pending_buf=new C.Buf8(i.pending_buf_size),i.d_buf=i.lit_bufsize>>1,i.l_buf=3*i.lit_bufsize,i.level=b,i.strategy=g,i.method=c,v(a)}function y(a,b){return x(a,b,Y,$,_,W)}function z(a,b){var c,h,k,l;if(!a||!a.state||b>L||0>b)return a?d(a,O):O;if(h=a.state,!a.output||!a.input&&0!==a.avail_in||h.status===rb&&b!==K)return d(a,0===a.avail_out?Q:O);if(h.strm=a,c=h.last_flush,h.last_flush=b,h.status===lb)if(2===h.wrap)a.adler=0,i(h,31),i(h,139),i(h,8),h.gzhead?(i(h,(h.gzhead.text?1:0)+(h.gzhead.hcrc?2:0)+(h.gzhead.extra?4:0)+(h.gzhead.name?8:0)+(h.gzhead.comment?16:0)),i(h,255&h.gzhead.time),i(h,h.gzhead.time>>8&255),i(h,h.gzhead.time>>16&255),i(h,h.gzhead.time>>24&255),i(h,9===h.level?2:h.strategy>=T||h.level<2?4:0),i(h,255&h.gzhead.os),h.gzhead.extra&&h.gzhead.extra.length&&(i(h,255&h.gzhead.extra.length),i(h,h.gzhead.extra.length>>8&255)),h.gzhead.hcrc&&(a.adler=F(a.adler,h.pending_buf,h.pending,0)),h.gzindex=0,h.status=mb):(i(h,0),i(h,0),i(h,0),i(h,0),i(h,0),i(h,9===h.level?2:h.strategy>=T||h.level<2?4:0),i(h,wb),h.status=qb);else{var m=Y+(h.w_bits-8<<4)<<8,n=-1;n=h.strategy>=T||h.level<2?0:h.level<6?1:6===h.level?2:3,m|=n<<6,0!==h.strstart&&(m|=kb),m+=31-m%31,h.status=qb,j(h,m),0!==h.strstart&&(j(h,a.adler>>>16),j(h,65535&a.adler)),a.adler=1}if(h.status===mb)if(h.gzhead.extra){for(k=h.pending;h.gzindex<(65535&h.gzhead.extra.length)&&(h.pending!==h.pending_buf_size||(h.gzhead.hcrc&&h.pending>k&&(a.adler=F(a.adler,h.pending_buf,h.pending-k,k)),g(a),k=h.pending,h.pending!==h.pending_buf_size));)i(h,255&h.gzhead.extra[h.gzindex]),h.gzindex++;h.gzhead.hcrc&&h.pending>k&&(a.adler=F(a.adler,h.pending_buf,h.pending-k,k)),h.gzindex===h.gzhead.extra.length&&(h.gzindex=0,h.status=nb)}else h.status=nb;if(h.status===nb)if(h.gzhead.name){k=h.pending;do{if(h.pending===h.pending_buf_size&&(h.gzhead.hcrc&&h.pending>k&&(a.adler=F(a.adler,h.pending_buf,h.pending-k,k)),g(a),k=h.pending,h.pending===h.pending_buf_size)){l=1;break}l=h.gzindex<h.gzhead.name.length?255&h.gzhead.name.charCodeAt(h.gzindex++):0,i(h,l)}while(0!==l);h.gzhead.hcrc&&h.pending>k&&(a.adler=F(a.adler,h.pending_buf,h.pending-k,k)),0===l&&(h.gzindex=0,h.status=ob)}else h.status=ob;if(h.status===ob)if(h.gzhead.comment){k=h.pending;do{if(h.pending===h.pending_buf_size&&(h.gzhead.hcrc&&h.pending>k&&(a.adler=F(a.adler,h.pending_buf,h.pending-k,k)),g(a),k=h.pending,h.pending===h.pending_buf_size)){l=1;break}l=h.gzindex<h.gzhead.comment.length?255&h.gzhead.comment.charCodeAt(h.gzindex++):0,i(h,l)}while(0!==l);h.gzhead.hcrc&&h.pending>k&&(a.adler=F(a.adler,h.pending_buf,h.pending-k,k)),0===l&&(h.status=pb)}else h.status=pb;if(h.status===pb&&(h.gzhead.hcrc?(h.pending+2>h.pending_buf_size&&g(a),h.pending+2<=h.pending_buf_size&&(i(h,255&a.adler),i(h,a.adler>>8&255),a.adler=0,h.status=qb)):h.status=qb),0!==h.pending){if(g(a),0===a.avail_out)return h.last_flush=-1,M}else if(0===a.avail_in&&e(b)<=e(c)&&b!==K)return d(a,Q);if(h.status===rb&&0!==a.avail_in)return d(a,Q);if(0!==a.avail_in||0!==h.lookahead||b!==H&&h.status!==rb){var o=h.strategy===T?r(h,b):h.strategy===U?q(h,b):B[h.level].func(h,b);if((o===ub||o===vb)&&(h.status=rb),o===sb||o===ub)return 0===a.avail_out&&(h.last_flush=-1),M;if(o===tb&&(b===I?D._tr_align(h):b!==L&&(D._tr_stored_block(h,0,0,!1),b===J&&(f(h.head),0===h.lookahead&&(h.strstart=0,h.block_start=0,h.insert=0))),g(a),0===a.avail_out))return h.last_flush=-1,M}return b!==K?M:h.wrap<=0?N:(2===h.wrap?(i(h,255&a.adler),i(h,a.adler>>8&255),i(h,a.adler>>16&255),i(h,a.adler>>24&255),i(h,255&a.total_in),i(h,a.total_in>>8&255),i(h,a.total_in>>16&255),i(h,a.total_in>>24&255)):(j(h,a.adler>>>16),j(h,65535&a.adler)),g(a),h.wrap>0&&(h.wrap=-h.wrap),0!==h.pending?M:N)}function A(a){var b;return a&&a.state?(b=a.state.status,b!==lb&&b!==mb&&b!==nb&&b!==ob&&b!==pb&&b!==qb&&b!==rb?d(a,O):(a.state=null,b===qb?d(a,P):M)):O}var B,C=a("../utils/common"),D=a("./trees"),E=a("./adler32"),F=a("./crc32"),G=a("./messages"),H=0,I=1,J=3,K=4,L=5,M=0,N=1,O=-2,P=-3,Q=-5,R=-1,S=1,T=2,U=3,V=4,W=0,X=2,Y=8,Z=9,$=15,_=8,ab=29,bb=256,cb=bb+1+ab,db=30,eb=19,fb=2*cb+1,gb=15,hb=3,ib=258,jb=ib+hb+1,kb=32,lb=42,mb=69,nb=73,ob=91,pb=103,qb=113,rb=666,sb=1,tb=2,ub=3,vb=4,wb=3,xb=function(a,b,c,d,e){this.good_length=a,this.max_lazy=b,this.nice_length=c,this.max_chain=d,this.func=e};B=[new xb(0,0,0,0,n),new xb(4,4,8,4,o),new xb(4,5,16,8,o),new xb(4,6,32,32,o),new xb(4,4,16,16,p),new xb(8,16,32,32,p),new xb(8,16,128,128,p),new xb(8,32,128,256,p),new xb(32,128,258,1024,p),new xb(32,258,258,4096,p)],c.deflateInit=y,c.deflateInit2=x,c.deflateReset=v,c.deflateResetKeep=u,c.deflateSetHeader=w,c.deflate=z,c.deflateEnd=A,c.deflateInfo="pako deflate (from Nodeca project)"},{"../utils/common":27,"./adler32":29,"./crc32":31,"./messages":37,"./trees":38}],33:[function(a,b){"use strict";function c(){this.text=0,this.time=0,this.xflags=0,this.os=0,this.extra=null,this.extra_len=0,this.name="",this.comment="",this.hcrc=0,this.done=!1}b.exports=c},{}],34:[function(a,b){"use strict";var c=30,d=12;b.exports=function(a,b){var e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C;e=a.state,f=a.next_in,B=a.input,g=f+(a.avail_in-5),h=a.next_out,C=a.output,i=h-(b-a.avail_out),j=h+(a.avail_out-257),k=e.dmax,l=e.wsize,m=e.whave,n=e.wnext,o=e.window,p=e.hold,q=e.bits,r=e.lencode,s=e.distcode,t=(1<<e.lenbits)-1,u=(1<<e.distbits)-1;a:do{15>q&&(p+=B[f++]<<q,q+=8,p+=B[f++]<<q,q+=8),v=r[p&t];b:for(;;){if(w=v>>>24,p>>>=w,q-=w,w=v>>>16&255,0===w)C[h++]=65535&v;else{if(!(16&w)){if(0===(64&w)){v=r[(65535&v)+(p&(1<<w)-1)];continue b}if(32&w){e.mode=d;break a}a.msg="invalid literal/length code",e.mode=c;break a}x=65535&v,w&=15,w&&(w>q&&(p+=B[f++]<<q,q+=8),x+=p&(1<<w)-1,p>>>=w,q-=w),15>q&&(p+=B[f++]<<q,q+=8,p+=B[f++]<<q,q+=8),v=s[p&u];c:for(;;){if(w=v>>>24,p>>>=w,q-=w,w=v>>>16&255,!(16&w)){if(0===(64&w)){v=s[(65535&v)+(p&(1<<w)-1)];continue c}a.msg="invalid distance code",e.mode=c;break a}if(y=65535&v,w&=15,w>q&&(p+=B[f++]<<q,q+=8,w>q&&(p+=B[f++]<<q,q+=8)),y+=p&(1<<w)-1,y>k){a.msg="invalid distance too far back",e.mode=c;break a}if(p>>>=w,q-=w,w=h-i,y>w){if(w=y-w,w>m&&e.sane){a.msg="invalid distance too far back",e.mode=c;break a}if(z=0,A=o,0===n){if(z+=l-w,x>w){x-=w;do C[h++]=o[z++];while(--w);z=h-y,A=C}}else if(w>n){if(z+=l+n-w,w-=n,x>w){x-=w;do C[h++]=o[z++];while(--w);if(z=0,x>n){w=n,x-=w;do C[h++]=o[z++];while(--w);z=h-y,A=C}}}else if(z+=n-w,x>w){x-=w;do C[h++]=o[z++];while(--w);z=h-y,A=C}for(;x>2;)C[h++]=A[z++],C[h++]=A[z++],C[h++]=A[z++],x-=3;x&&(C[h++]=A[z++],x>1&&(C[h++]=A[z++]))}else{z=h-y;do C[h++]=C[z++],C[h++]=C[z++],C[h++]=C[z++],x-=3;while(x>2);x&&(C[h++]=C[z++],x>1&&(C[h++]=C[z++]))}break}}break}}while(g>f&&j>h);x=q>>3,f-=x,q-=x<<3,p&=(1<<q)-1,a.next_in=f,a.next_out=h,a.avail_in=g>f?5+(g-f):5-(f-g),a.avail_out=j>h?257+(j-h):257-(h-j),e.hold=p,e.bits=q}},{}],35:[function(a,b,c){"use strict";function d(a){return(a>>>24&255)+(a>>>8&65280)+((65280&a)<<8)+((255&a)<<24)}function e(){this.mode=0,this.last=!1,this.wrap=0,this.havedict=!1,this.flags=0,this.dmax=0,this.check=0,this.total=0,this.head=null,this.wbits=0,this.wsize=0,this.whave=0,this.wnext=0,this.window=null,this.hold=0,this.bits=0,this.length=0,this.offset=0,this.extra=0,this.lencode=null,this.distcode=null,this.lenbits=0,this.distbits=0,this.ncode=0,this.nlen=0,this.ndist=0,this.have=0,this.next=null,this.lens=new r.Buf16(320),this.work=new r.Buf16(288),this.lendyn=null,this.distdyn=null,this.sane=0,this.back=0,this.was=0}function f(a){var b;return a&&a.state?(b=a.state,a.total_in=a.total_out=b.total=0,a.msg="",b.wrap&&(a.adler=1&b.wrap),b.mode=K,b.last=0,b.havedict=0,b.dmax=32768,b.head=null,b.hold=0,b.bits=0,b.lencode=b.lendyn=new r.Buf32(ob),b.distcode=b.distdyn=new r.Buf32(pb),b.sane=1,b.back=-1,C):F}function g(a){var b;return a&&a.state?(b=a.state,b.wsize=0,b.whave=0,b.wnext=0,f(a)):F}function h(a,b){var c,d;return a&&a.state?(d=a.state,0>b?(c=0,b=-b):(c=(b>>4)+1,48>b&&(b&=15)),b&&(8>b||b>15)?F:(null!==d.window&&d.wbits!==b&&(d.window=null),d.wrap=c,d.wbits=b,g(a))):F}function i(a,b){var c,d;return a?(d=new e,a.state=d,d.window=null,c=h(a,b),c!==C&&(a.state=null),c):F}function j(a){return i(a,rb)}function k(a){if(sb){var b;for(p=new r.Buf32(512),q=new r.Buf32(32),b=0;144>b;)a.lens[b++]=8;for(;256>b;)a.lens[b++]=9;for(;280>b;)a.lens[b++]=7;for(;288>b;)a.lens[b++]=8;for(v(x,a.lens,0,288,p,0,a.work,{bits:9}),b=0;32>b;)a.lens[b++]=5;v(y,a.lens,0,32,q,0,a.work,{bits:5}),sb=!1}a.lencode=p,a.lenbits=9,a.distcode=q,a.distbits=5}function l(a,b,c,d){var e,f=a.state;return null===f.window&&(f.wsize=1<<f.wbits,f.wnext=0,f.whave=0,f.window=new r.Buf8(f.wsize)),d>=f.wsize?(r.arraySet(f.window,b,c-f.wsize,f.wsize,0),f.wnext=0,f.whave=f.wsize):(e=f.wsize-f.wnext,e>d&&(e=d),r.arraySet(f.window,b,c-d,e,f.wnext),d-=e,d?(r.arraySet(f.window,b,c-d,d,0),f.wnext=d,f.whave=f.wsize):(f.wnext+=e,f.wnext===f.wsize&&(f.wnext=0),f.whave<f.wsize&&(f.whave+=e))),0}function m(a,b){var c,e,f,g,h,i,j,m,n,o,p,q,ob,pb,qb,rb,sb,tb,ub,vb,wb,xb,yb,zb,Ab=0,Bb=new r.Buf8(4),Cb=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15];if(!a||!a.state||!a.output||!a.input&&0!==a.avail_in)return F;c=a.state,c.mode===V&&(c.mode=W),h=a.next_out,f=a.output,j=a.avail_out,g=a.next_in,e=a.input,i=a.avail_in,m=c.hold,n=c.bits,o=i,p=j,xb=C;a:for(;;)switch(c.mode){case K:if(0===c.wrap){c.mode=W;break}for(;16>n;){if(0===i)break a;i--,m+=e[g++]<<n,n+=8}if(2&c.wrap&&35615===m){c.check=0,Bb[0]=255&m,Bb[1]=m>>>8&255,c.check=t(c.check,Bb,2,0),m=0,n=0,c.mode=L;break}if(c.flags=0,c.head&&(c.head.done=!1),!(1&c.wrap)||(((255&m)<<8)+(m>>8))%31){a.msg="incorrect header check",c.mode=lb;break}if((15&m)!==J){a.msg="unknown compression method",c.mode=lb;break}if(m>>>=4,n-=4,wb=(15&m)+8,0===c.wbits)c.wbits=wb;else if(wb>c.wbits){a.msg="invalid window size",c.mode=lb;break}c.dmax=1<<wb,a.adler=c.check=1,c.mode=512&m?T:V,m=0,n=0;break;case L:for(;16>n;){if(0===i)break a;i--,m+=e[g++]<<n,n+=8}if(c.flags=m,(255&c.flags)!==J){a.msg="unknown compression method",c.mode=lb;break}if(57344&c.flags){a.msg="unknown header flags set",c.mode=lb;break}c.head&&(c.head.text=m>>8&1),512&c.flags&&(Bb[0]=255&m,Bb[1]=m>>>8&255,c.check=t(c.check,Bb,2,0)),m=0,n=0,c.mode=M;case M:for(;32>n;){if(0===i)break a;i--,m+=e[g++]<<n,n+=8}c.head&&(c.head.time=m),512&c.flags&&(Bb[0]=255&m,Bb[1]=m>>>8&255,Bb[2]=m>>>16&255,Bb[3]=m>>>24&255,c.check=t(c.check,Bb,4,0)),m=0,n=0,c.mode=N;case N:for(;16>n;){if(0===i)break a;i--,m+=e[g++]<<n,n+=8}c.head&&(c.head.xflags=255&m,c.head.os=m>>8),512&c.flags&&(Bb[0]=255&m,Bb[1]=m>>>8&255,c.check=t(c.check,Bb,2,0)),m=0,n=0,c.mode=O;case O:if(1024&c.flags){for(;16>n;){if(0===i)break a;i--,m+=e[g++]<<n,n+=8}c.length=m,c.head&&(c.head.extra_len=m),512&c.flags&&(Bb[0]=255&m,Bb[1]=m>>>8&255,c.check=t(c.check,Bb,2,0)),m=0,n=0}else c.head&&(c.head.extra=null);c.mode=P;case P:if(1024&c.flags&&(q=c.length,q>i&&(q=i),q&&(c.head&&(wb=c.head.extra_len-c.length,c.head.extra||(c.head.extra=new Array(c.head.extra_len)),r.arraySet(c.head.extra,e,g,q,wb)),512&c.flags&&(c.check=t(c.check,e,q,g)),i-=q,g+=q,c.length-=q),c.length))break a;c.length=0,c.mode=Q;case Q:if(2048&c.flags){if(0===i)break a;q=0;do wb=e[g+q++],c.head&&wb&&c.length<65536&&(c.head.name+=String.fromCharCode(wb));while(wb&&i>q);if(512&c.flags&&(c.check=t(c.check,e,q,g)),i-=q,g+=q,wb)break a}else c.head&&(c.head.name=null);c.length=0,c.mode=R;case R:if(4096&c.flags){if(0===i)break a;q=0;do wb=e[g+q++],c.head&&wb&&c.length<65536&&(c.head.comment+=String.fromCharCode(wb));while(wb&&i>q);if(512&c.flags&&(c.check=t(c.check,e,q,g)),i-=q,g+=q,wb)break a}else c.head&&(c.head.comment=null);c.mode=S;case S:if(512&c.flags){for(;16>n;){if(0===i)break a;i--,m+=e[g++]<<n,n+=8}if(m!==(65535&c.check)){a.msg="header crc mismatch",c.mode=lb;break}m=0,n=0}c.head&&(c.head.hcrc=c.flags>>9&1,c.head.done=!0),a.adler=c.check=0,c.mode=V;break;case T:for(;32>n;){if(0===i)break a;i--,m+=e[g++]<<n,n+=8}a.adler=c.check=d(m),m=0,n=0,c.mode=U;case U:if(0===c.havedict)return a.next_out=h,a.avail_out=j,a.next_in=g,a.avail_in=i,c.hold=m,c.bits=n,E;a.adler=c.check=1,c.mode=V;case V:if(b===A||b===B)break a;case W:if(c.last){m>>>=7&n,n-=7&n,c.mode=ib;break}for(;3>n;){if(0===i)break a;i--,m+=e[g++]<<n,n+=8}switch(c.last=1&m,m>>>=1,n-=1,3&m){case 0:c.mode=X;break;case 1:if(k(c),c.mode=bb,b===B){m>>>=2,n-=2;break a}break;case 2:c.mode=$;break;case 3:a.msg="invalid block type",c.mode=lb}m>>>=2,n-=2;break;case X:for(m>>>=7&n,n-=7&n;32>n;){if(0===i)break a;i--,m+=e[g++]<<n,n+=8}if((65535&m)!==(m>>>16^65535)){a.msg="invalid stored block lengths",c.mode=lb;break}if(c.length=65535&m,m=0,n=0,c.mode=Y,b===B)break a;case Y:c.mode=Z;case Z:if(q=c.length){if(q>i&&(q=i),q>j&&(q=j),0===q)break a;r.arraySet(f,e,g,q,h),i-=q,g+=q,j-=q,h+=q,c.length-=q;break}c.mode=V;break;case $:for(;14>n;){if(0===i)break a;i--,m+=e[g++]<<n,n+=8}if(c.nlen=(31&m)+257,m>>>=5,n-=5,c.ndist=(31&m)+1,m>>>=5,n-=5,c.ncode=(15&m)+4,m>>>=4,n-=4,c.nlen>286||c.ndist>30){a.msg="too many length or distance symbols",c.mode=lb;break}c.have=0,c.mode=_;case _:for(;c.have<c.ncode;){for(;3>n;){if(0===i)break a;i--,m+=e[g++]<<n,n+=8}c.lens[Cb[c.have++]]=7&m,m>>>=3,n-=3}for(;c.have<19;)c.lens[Cb[c.have++]]=0;if(c.lencode=c.lendyn,c.lenbits=7,yb={bits:c.lenbits},xb=v(w,c.lens,0,19,c.lencode,0,c.work,yb),c.lenbits=yb.bits,xb){a.msg="invalid code lengths set",c.mode=lb;break}c.have=0,c.mode=ab;case ab:for(;c.have<c.nlen+c.ndist;){for(;Ab=c.lencode[m&(1<<c.lenbits)-1],qb=Ab>>>24,rb=Ab>>>16&255,sb=65535&Ab,!(n>=qb);){if(0===i)break a;i--,m+=e[g++]<<n,n+=8}if(16>sb)m>>>=qb,n-=qb,c.lens[c.have++]=sb;else{if(16===sb){for(zb=qb+2;zb>n;){if(0===i)break a;i--,m+=e[g++]<<n,n+=8}if(m>>>=qb,n-=qb,0===c.have){a.msg="invalid bit length repeat",c.mode=lb;break}wb=c.lens[c.have-1],q=3+(3&m),m>>>=2,n-=2}else if(17===sb){for(zb=qb+3;zb>n;){if(0===i)break a;i--,m+=e[g++]<<n,n+=8}m>>>=qb,n-=qb,wb=0,q=3+(7&m),m>>>=3,n-=3}else{for(zb=qb+7;zb>n;){if(0===i)break a;i--,m+=e[g++]<<n,n+=8}m>>>=qb,n-=qb,wb=0,q=11+(127&m),m>>>=7,n-=7}if(c.have+q>c.nlen+c.ndist){a.msg="invalid bit length repeat",c.mode=lb;break}for(;q--;)c.lens[c.have++]=wb}}if(c.mode===lb)break;if(0===c.lens[256]){a.msg="invalid code -- missing end-of-block",c.mode=lb;break}if(c.lenbits=9,yb={bits:c.lenbits},xb=v(x,c.lens,0,c.nlen,c.lencode,0,c.work,yb),c.lenbits=yb.bits,xb){a.msg="invalid literal/lengths set",c.mode=lb;break}if(c.distbits=6,c.distcode=c.distdyn,yb={bits:c.distbits},xb=v(y,c.lens,c.nlen,c.ndist,c.distcode,0,c.work,yb),c.distbits=yb.bits,xb){a.msg="invalid distances set",c.mode=lb;break}if(c.mode=bb,b===B)break a;case bb:c.mode=cb;case cb:if(i>=6&&j>=258){a.next_out=h,a.avail_out=j,a.next_in=g,a.avail_in=i,c.hold=m,c.bits=n,u(a,p),h=a.next_out,f=a.output,j=a.avail_out,g=a.next_in,e=a.input,i=a.avail_in,m=c.hold,n=c.bits,c.mode===V&&(c.back=-1);
break}for(c.back=0;Ab=c.lencode[m&(1<<c.lenbits)-1],qb=Ab>>>24,rb=Ab>>>16&255,sb=65535&Ab,!(n>=qb);){if(0===i)break a;i--,m+=e[g++]<<n,n+=8}if(rb&&0===(240&rb)){for(tb=qb,ub=rb,vb=sb;Ab=c.lencode[vb+((m&(1<<tb+ub)-1)>>tb)],qb=Ab>>>24,rb=Ab>>>16&255,sb=65535&Ab,!(n>=tb+qb);){if(0===i)break a;i--,m+=e[g++]<<n,n+=8}m>>>=tb,n-=tb,c.back+=tb}if(m>>>=qb,n-=qb,c.back+=qb,c.length=sb,0===rb){c.mode=hb;break}if(32&rb){c.back=-1,c.mode=V;break}if(64&rb){a.msg="invalid literal/length code",c.mode=lb;break}c.extra=15&rb,c.mode=db;case db:if(c.extra){for(zb=c.extra;zb>n;){if(0===i)break a;i--,m+=e[g++]<<n,n+=8}c.length+=m&(1<<c.extra)-1,m>>>=c.extra,n-=c.extra,c.back+=c.extra}c.was=c.length,c.mode=eb;case eb:for(;Ab=c.distcode[m&(1<<c.distbits)-1],qb=Ab>>>24,rb=Ab>>>16&255,sb=65535&Ab,!(n>=qb);){if(0===i)break a;i--,m+=e[g++]<<n,n+=8}if(0===(240&rb)){for(tb=qb,ub=rb,vb=sb;Ab=c.distcode[vb+((m&(1<<tb+ub)-1)>>tb)],qb=Ab>>>24,rb=Ab>>>16&255,sb=65535&Ab,!(n>=tb+qb);){if(0===i)break a;i--,m+=e[g++]<<n,n+=8}m>>>=tb,n-=tb,c.back+=tb}if(m>>>=qb,n-=qb,c.back+=qb,64&rb){a.msg="invalid distance code",c.mode=lb;break}c.offset=sb,c.extra=15&rb,c.mode=fb;case fb:if(c.extra){for(zb=c.extra;zb>n;){if(0===i)break a;i--,m+=e[g++]<<n,n+=8}c.offset+=m&(1<<c.extra)-1,m>>>=c.extra,n-=c.extra,c.back+=c.extra}if(c.offset>c.dmax){a.msg="invalid distance too far back",c.mode=lb;break}c.mode=gb;case gb:if(0===j)break a;if(q=p-j,c.offset>q){if(q=c.offset-q,q>c.whave&&c.sane){a.msg="invalid distance too far back",c.mode=lb;break}q>c.wnext?(q-=c.wnext,ob=c.wsize-q):ob=c.wnext-q,q>c.length&&(q=c.length),pb=c.window}else pb=f,ob=h-c.offset,q=c.length;q>j&&(q=j),j-=q,c.length-=q;do f[h++]=pb[ob++];while(--q);0===c.length&&(c.mode=cb);break;case hb:if(0===j)break a;f[h++]=c.length,j--,c.mode=cb;break;case ib:if(c.wrap){for(;32>n;){if(0===i)break a;i--,m|=e[g++]<<n,n+=8}if(p-=j,a.total_out+=p,c.total+=p,p&&(a.adler=c.check=c.flags?t(c.check,f,p,h-p):s(c.check,f,p,h-p)),p=j,(c.flags?m:d(m))!==c.check){a.msg="incorrect data check",c.mode=lb;break}m=0,n=0}c.mode=jb;case jb:if(c.wrap&&c.flags){for(;32>n;){if(0===i)break a;i--,m+=e[g++]<<n,n+=8}if(m!==(4294967295&c.total)){a.msg="incorrect length check",c.mode=lb;break}m=0,n=0}c.mode=kb;case kb:xb=D;break a;case lb:xb=G;break a;case mb:return H;case nb:default:return F}return a.next_out=h,a.avail_out=j,a.next_in=g,a.avail_in=i,c.hold=m,c.bits=n,(c.wsize||p!==a.avail_out&&c.mode<lb&&(c.mode<ib||b!==z))&&l(a,a.output,a.next_out,p-a.avail_out)?(c.mode=mb,H):(o-=a.avail_in,p-=a.avail_out,a.total_in+=o,a.total_out+=p,c.total+=p,c.wrap&&p&&(a.adler=c.check=c.flags?t(c.check,f,p,a.next_out-p):s(c.check,f,p,a.next_out-p)),a.data_type=c.bits+(c.last?64:0)+(c.mode===V?128:0)+(c.mode===bb||c.mode===Y?256:0),(0===o&&0===p||b===z)&&xb===C&&(xb=I),xb)}function n(a){if(!a||!a.state)return F;var b=a.state;return b.window&&(b.window=null),a.state=null,C}function o(a,b){var c;return a&&a.state?(c=a.state,0===(2&c.wrap)?F:(c.head=b,b.done=!1,C)):F}var p,q,r=a("../utils/common"),s=a("./adler32"),t=a("./crc32"),u=a("./inffast"),v=a("./inftrees"),w=0,x=1,y=2,z=4,A=5,B=6,C=0,D=1,E=2,F=-2,G=-3,H=-4,I=-5,J=8,K=1,L=2,M=3,N=4,O=5,P=6,Q=7,R=8,S=9,T=10,U=11,V=12,W=13,X=14,Y=15,Z=16,$=17,_=18,ab=19,bb=20,cb=21,db=22,eb=23,fb=24,gb=25,hb=26,ib=27,jb=28,kb=29,lb=30,mb=31,nb=32,ob=852,pb=592,qb=15,rb=qb,sb=!0;c.inflateReset=g,c.inflateReset2=h,c.inflateResetKeep=f,c.inflateInit=j,c.inflateInit2=i,c.inflate=m,c.inflateEnd=n,c.inflateGetHeader=o,c.inflateInfo="pako inflate (from Nodeca project)"},{"../utils/common":27,"./adler32":29,"./crc32":31,"./inffast":34,"./inftrees":36}],36:[function(a,b){"use strict";var c=a("../utils/common"),d=15,e=852,f=592,g=0,h=1,i=2,j=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0],k=[16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,72,78],l=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0],m=[16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64];b.exports=function(a,b,n,o,p,q,r,s){var t,u,v,w,x,y,z,A,B,C=s.bits,D=0,E=0,F=0,G=0,H=0,I=0,J=0,K=0,L=0,M=0,N=null,O=0,P=new c.Buf16(d+1),Q=new c.Buf16(d+1),R=null,S=0;for(D=0;d>=D;D++)P[D]=0;for(E=0;o>E;E++)P[b[n+E]]++;for(H=C,G=d;G>=1&&0===P[G];G--);if(H>G&&(H=G),0===G)return p[q++]=20971520,p[q++]=20971520,s.bits=1,0;for(F=1;G>F&&0===P[F];F++);for(F>H&&(H=F),K=1,D=1;d>=D;D++)if(K<<=1,K-=P[D],0>K)return-1;if(K>0&&(a===g||1!==G))return-1;for(Q[1]=0,D=1;d>D;D++)Q[D+1]=Q[D]+P[D];for(E=0;o>E;E++)0!==b[n+E]&&(r[Q[b[n+E]]++]=E);if(a===g?(N=R=r,y=19):a===h?(N=j,O-=257,R=k,S-=257,y=256):(N=l,R=m,y=-1),M=0,E=0,D=F,x=q,I=H,J=0,v=-1,L=1<<H,w=L-1,a===h&&L>e||a===i&&L>f)return 1;for(var T=0;;){T++,z=D-J,r[E]<y?(A=0,B=r[E]):r[E]>y?(A=R[S+r[E]],B=N[O+r[E]]):(A=96,B=0),t=1<<D-J,u=1<<I,F=u;do u-=t,p[x+(M>>J)+u]=z<<24|A<<16|B|0;while(0!==u);for(t=1<<D-1;M&t;)t>>=1;if(0!==t?(M&=t-1,M+=t):M=0,E++,0===--P[D]){if(D===G)break;D=b[n+r[E]]}if(D>H&&(M&w)!==v){for(0===J&&(J=H),x+=F,I=D-J,K=1<<I;G>I+J&&(K-=P[I+J],!(0>=K));)I++,K<<=1;if(L+=1<<I,a===h&&L>e||a===i&&L>f)return 1;v=M&w,p[v]=H<<24|I<<16|x-q|0}}return 0!==M&&(p[x+M]=D-J<<24|64<<16|0),s.bits=H,0}},{"../utils/common":27}],37:[function(a,b){"use strict";b.exports={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"}},{}],38:[function(a,b,c){"use strict";function d(a){for(var b=a.length;--b>=0;)a[b]=0}function e(a){return 256>a?gb[a]:gb[256+(a>>>7)]}function f(a,b){a.pending_buf[a.pending++]=255&b,a.pending_buf[a.pending++]=b>>>8&255}function g(a,b,c){a.bi_valid>V-c?(a.bi_buf|=b<<a.bi_valid&65535,f(a,a.bi_buf),a.bi_buf=b>>V-a.bi_valid,a.bi_valid+=c-V):(a.bi_buf|=b<<a.bi_valid&65535,a.bi_valid+=c)}function h(a,b,c){g(a,c[2*b],c[2*b+1])}function i(a,b){var c=0;do c|=1&a,a>>>=1,c<<=1;while(--b>0);return c>>>1}function j(a){16===a.bi_valid?(f(a,a.bi_buf),a.bi_buf=0,a.bi_valid=0):a.bi_valid>=8&&(a.pending_buf[a.pending++]=255&a.bi_buf,a.bi_buf>>=8,a.bi_valid-=8)}function k(a,b){var c,d,e,f,g,h,i=b.dyn_tree,j=b.max_code,k=b.stat_desc.static_tree,l=b.stat_desc.has_stree,m=b.stat_desc.extra_bits,n=b.stat_desc.extra_base,o=b.stat_desc.max_length,p=0;for(f=0;U>=f;f++)a.bl_count[f]=0;for(i[2*a.heap[a.heap_max]+1]=0,c=a.heap_max+1;T>c;c++)d=a.heap[c],f=i[2*i[2*d+1]+1]+1,f>o&&(f=o,p++),i[2*d+1]=f,d>j||(a.bl_count[f]++,g=0,d>=n&&(g=m[d-n]),h=i[2*d],a.opt_len+=h*(f+g),l&&(a.static_len+=h*(k[2*d+1]+g)));if(0!==p){do{for(f=o-1;0===a.bl_count[f];)f--;a.bl_count[f]--,a.bl_count[f+1]+=2,a.bl_count[o]--,p-=2}while(p>0);for(f=o;0!==f;f--)for(d=a.bl_count[f];0!==d;)e=a.heap[--c],e>j||(i[2*e+1]!==f&&(a.opt_len+=(f-i[2*e+1])*i[2*e],i[2*e+1]=f),d--)}}function l(a,b,c){var d,e,f=new Array(U+1),g=0;for(d=1;U>=d;d++)f[d]=g=g+c[d-1]<<1;for(e=0;b>=e;e++){var h=a[2*e+1];0!==h&&(a[2*e]=i(f[h]++,h))}}function m(){var a,b,c,d,e,f=new Array(U+1);for(c=0,d=0;O-1>d;d++)for(ib[d]=c,a=0;a<1<<_[d];a++)hb[c++]=d;for(hb[c-1]=d,e=0,d=0;16>d;d++)for(jb[d]=e,a=0;a<1<<ab[d];a++)gb[e++]=d;for(e>>=7;R>d;d++)for(jb[d]=e<<7,a=0;a<1<<ab[d]-7;a++)gb[256+e++]=d;for(b=0;U>=b;b++)f[b]=0;for(a=0;143>=a;)eb[2*a+1]=8,a++,f[8]++;for(;255>=a;)eb[2*a+1]=9,a++,f[9]++;for(;279>=a;)eb[2*a+1]=7,a++,f[7]++;for(;287>=a;)eb[2*a+1]=8,a++,f[8]++;for(l(eb,Q+1,f),a=0;R>a;a++)fb[2*a+1]=5,fb[2*a]=i(a,5);kb=new nb(eb,_,P+1,Q,U),lb=new nb(fb,ab,0,R,U),mb=new nb(new Array(0),bb,0,S,W)}function n(a){var b;for(b=0;Q>b;b++)a.dyn_ltree[2*b]=0;for(b=0;R>b;b++)a.dyn_dtree[2*b]=0;for(b=0;S>b;b++)a.bl_tree[2*b]=0;a.dyn_ltree[2*X]=1,a.opt_len=a.static_len=0,a.last_lit=a.matches=0}function o(a){a.bi_valid>8?f(a,a.bi_buf):a.bi_valid>0&&(a.pending_buf[a.pending++]=a.bi_buf),a.bi_buf=0,a.bi_valid=0}function p(a,b,c,d){o(a),d&&(f(a,c),f(a,~c)),E.arraySet(a.pending_buf,a.window,b,c,a.pending),a.pending+=c}function q(a,b,c,d){var e=2*b,f=2*c;return a[e]<a[f]||a[e]===a[f]&&d[b]<=d[c]}function r(a,b,c){for(var d=a.heap[c],e=c<<1;e<=a.heap_len&&(e<a.heap_len&&q(b,a.heap[e+1],a.heap[e],a.depth)&&e++,!q(b,d,a.heap[e],a.depth));)a.heap[c]=a.heap[e],c=e,e<<=1;a.heap[c]=d}function s(a,b,c){var d,f,i,j,k=0;if(0!==a.last_lit)do d=a.pending_buf[a.d_buf+2*k]<<8|a.pending_buf[a.d_buf+2*k+1],f=a.pending_buf[a.l_buf+k],k++,0===d?h(a,f,b):(i=hb[f],h(a,i+P+1,b),j=_[i],0!==j&&(f-=ib[i],g(a,f,j)),d--,i=e(d),h(a,i,c),j=ab[i],0!==j&&(d-=jb[i],g(a,d,j)));while(k<a.last_lit);h(a,X,b)}function t(a,b){var c,d,e,f=b.dyn_tree,g=b.stat_desc.static_tree,h=b.stat_desc.has_stree,i=b.stat_desc.elems,j=-1;for(a.heap_len=0,a.heap_max=T,c=0;i>c;c++)0!==f[2*c]?(a.heap[++a.heap_len]=j=c,a.depth[c]=0):f[2*c+1]=0;for(;a.heap_len<2;)e=a.heap[++a.heap_len]=2>j?++j:0,f[2*e]=1,a.depth[e]=0,a.opt_len--,h&&(a.static_len-=g[2*e+1]);for(b.max_code=j,c=a.heap_len>>1;c>=1;c--)r(a,f,c);e=i;do c=a.heap[1],a.heap[1]=a.heap[a.heap_len--],r(a,f,1),d=a.heap[1],a.heap[--a.heap_max]=c,a.heap[--a.heap_max]=d,f[2*e]=f[2*c]+f[2*d],a.depth[e]=(a.depth[c]>=a.depth[d]?a.depth[c]:a.depth[d])+1,f[2*c+1]=f[2*d+1]=e,a.heap[1]=e++,r(a,f,1);while(a.heap_len>=2);a.heap[--a.heap_max]=a.heap[1],k(a,b),l(f,j,a.bl_count)}function u(a,b,c){var d,e,f=-1,g=b[1],h=0,i=7,j=4;for(0===g&&(i=138,j=3),b[2*(c+1)+1]=65535,d=0;c>=d;d++)e=g,g=b[2*(d+1)+1],++h<i&&e===g||(j>h?a.bl_tree[2*e]+=h:0!==e?(e!==f&&a.bl_tree[2*e]++,a.bl_tree[2*Y]++):10>=h?a.bl_tree[2*Z]++:a.bl_tree[2*$]++,h=0,f=e,0===g?(i=138,j=3):e===g?(i=6,j=3):(i=7,j=4))}function v(a,b,c){var d,e,f=-1,i=b[1],j=0,k=7,l=4;for(0===i&&(k=138,l=3),d=0;c>=d;d++)if(e=i,i=b[2*(d+1)+1],!(++j<k&&e===i)){if(l>j){do h(a,e,a.bl_tree);while(0!==--j)}else 0!==e?(e!==f&&(h(a,e,a.bl_tree),j--),h(a,Y,a.bl_tree),g(a,j-3,2)):10>=j?(h(a,Z,a.bl_tree),g(a,j-3,3)):(h(a,$,a.bl_tree),g(a,j-11,7));j=0,f=e,0===i?(k=138,l=3):e===i?(k=6,l=3):(k=7,l=4)}}function w(a){var b;for(u(a,a.dyn_ltree,a.l_desc.max_code),u(a,a.dyn_dtree,a.d_desc.max_code),t(a,a.bl_desc),b=S-1;b>=3&&0===a.bl_tree[2*cb[b]+1];b--);return a.opt_len+=3*(b+1)+5+5+4,b}function x(a,b,c,d){var e;for(g(a,b-257,5),g(a,c-1,5),g(a,d-4,4),e=0;d>e;e++)g(a,a.bl_tree[2*cb[e]+1],3);v(a,a.dyn_ltree,b-1),v(a,a.dyn_dtree,c-1)}function y(a){var b,c=4093624447;for(b=0;31>=b;b++,c>>>=1)if(1&c&&0!==a.dyn_ltree[2*b])return G;if(0!==a.dyn_ltree[18]||0!==a.dyn_ltree[20]||0!==a.dyn_ltree[26])return H;for(b=32;P>b;b++)if(0!==a.dyn_ltree[2*b])return H;return G}function z(a){pb||(m(),pb=!0),a.l_desc=new ob(a.dyn_ltree,kb),a.d_desc=new ob(a.dyn_dtree,lb),a.bl_desc=new ob(a.bl_tree,mb),a.bi_buf=0,a.bi_valid=0,n(a)}function A(a,b,c,d){g(a,(J<<1)+(d?1:0),3),p(a,b,c,!0)}function B(a){g(a,K<<1,3),h(a,X,eb),j(a)}function C(a,b,c,d){var e,f,h=0;a.level>0?(a.strm.data_type===I&&(a.strm.data_type=y(a)),t(a,a.l_desc),t(a,a.d_desc),h=w(a),e=a.opt_len+3+7>>>3,f=a.static_len+3+7>>>3,e>=f&&(e=f)):e=f=c+5,e>=c+4&&-1!==b?A(a,b,c,d):a.strategy===F||f===e?(g(a,(K<<1)+(d?1:0),3),s(a,eb,fb)):(g(a,(L<<1)+(d?1:0),3),x(a,a.l_desc.max_code+1,a.d_desc.max_code+1,h+1),s(a,a.dyn_ltree,a.dyn_dtree)),n(a),d&&o(a)}function D(a,b,c){return a.pending_buf[a.d_buf+2*a.last_lit]=b>>>8&255,a.pending_buf[a.d_buf+2*a.last_lit+1]=255&b,a.pending_buf[a.l_buf+a.last_lit]=255&c,a.last_lit++,0===b?a.dyn_ltree[2*c]++:(a.matches++,b--,a.dyn_ltree[2*(hb[c]+P+1)]++,a.dyn_dtree[2*e(b)]++),a.last_lit===a.lit_bufsize-1}var E=a("../utils/common"),F=4,G=0,H=1,I=2,J=0,K=1,L=2,M=3,N=258,O=29,P=256,Q=P+1+O,R=30,S=19,T=2*Q+1,U=15,V=16,W=7,X=256,Y=16,Z=17,$=18,_=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],ab=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],bb=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],cb=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],db=512,eb=new Array(2*(Q+2));d(eb);var fb=new Array(2*R);d(fb);var gb=new Array(db);d(gb);var hb=new Array(N-M+1);d(hb);var ib=new Array(O);d(ib);var jb=new Array(R);d(jb);var kb,lb,mb,nb=function(a,b,c,d,e){this.static_tree=a,this.extra_bits=b,this.extra_base=c,this.elems=d,this.max_length=e,this.has_stree=a&&a.length},ob=function(a,b){this.dyn_tree=a,this.max_code=0,this.stat_desc=b},pb=!1;c._tr_init=z,c._tr_stored_block=A,c._tr_flush_block=C,c._tr_tally=D,c._tr_align=B},{"../utils/common":27}],39:[function(a,b){"use strict";function c(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg="",this.state=null,this.data_type=2,this.adler=0}b.exports=c},{}]},{},[9])(9)});
/*! 
@license
FileSaver.js
 *  A saveAs() FileSaver implementation.
 *  2014-01-24
 *
 *  By Eli Grey, http://eligrey.com
 *  License: X11/MIT
 *    See LICENSE.md
 */

/*global self */
/*jslint bitwise: true, indent: 4, laxbreak: true, laxcomma: true, smarttabs: true, plusplus: true */

/*! @source http://purl.eligrey.com/github/FileSaver.js/blob/master/FileSaver.js */

var saveAs = saveAs
  // IE 10+ (native saveAs)
  || (typeof navigator !== "undefined" &&
      navigator.msSaveOrOpenBlob && navigator.msSaveOrOpenBlob.bind(navigator))
  // Everyone else
  || (function(view) {
	"use strict";
	// IE <10 is explicitly unsupported
	if (typeof navigator !== "undefined" &&
	    /MSIE [1-9]\./.test(navigator.userAgent)) {
		return;
	}
	var
		  doc = view.document
		  // only get URL when necessary in case BlobBuilder.js hasn't overridden it yet
		, get_URL = function() {
			return view.URL || view.webkitURL || view;
		}
		, URL = view.URL || view.webkitURL || view
		, save_link = doc.createElementNS("http://www.w3.org/1999/xhtml", "a")
		, can_use_save_link = !view.externalHost && "download" in save_link
		, click = function(node) {
			var event = doc.createEvent("MouseEvents");
			event.initMouseEvent(
				"click", true, false, view, 0, 0, 0, 0, 0
				, false, false, false, false, 0, null
			);
			node.dispatchEvent(event);
		}
		, webkit_req_fs = view.webkitRequestFileSystem
		, req_fs = view.requestFileSystem || webkit_req_fs || view.mozRequestFileSystem
		, throw_outside = function(ex) {
			(view.setImmediate || view.setTimeout)(function() {
				throw ex;
			}, 0);
		}
		, force_saveable_type = "application/octet-stream"
		, fs_min_size = 0
		, deletion_queue = []
		, process_deletion_queue = function() {
			var i = deletion_queue.length;
			while (i--) {
				var file = deletion_queue[i];
				if (typeof file === "string") { // file is an object URL
					URL.revokeObjectURL(file);
				} else { // file is a File
					file.remove();
				}
			}
			deletion_queue.length = 0; // clear queue
		}
		, dispatch = function(filesaver, event_types, event) {
			event_types = [].concat(event_types);
			var i = event_types.length;
			while (i--) {
				var listener = filesaver["on" + event_types[i]];
				if (typeof listener === "function") {
					try {
						listener.call(filesaver, event || filesaver);
					} catch (ex) {
						throw_outside(ex);
					}
				}
			}
		}
		, FileSaver = function(blob, name) {
			// First try a.download, then web filesystem, then object URLs
			var
				  filesaver = this
				, type = blob.type
				, blob_changed = false
				, object_url
				, target_view
				, get_object_url = function() {
					var object_url = get_URL().createObjectURL(blob);
					deletion_queue.push(object_url);
					return object_url;
				}
				, dispatch_all = function() {
					dispatch(filesaver, "writestart progress write writeend".split(" "));
				}
				// on any filesys errors revert to saving with object URLs
				, fs_error = function() {
					// don't create more object URLs than needed
					if (blob_changed || !object_url) {
						object_url = get_object_url(blob);
					}
					if (target_view) {
						target_view.location.href = object_url;
					} else {
						window.open(object_url, "_blank");
					}
					filesaver.readyState = filesaver.DONE;
					dispatch_all();
				}
				, abortable = function(func) {
					return function() {
						if (filesaver.readyState !== filesaver.DONE) {
							return func.apply(this, arguments);
						}
					};
				}
				, create_if_not_found = {create: true, exclusive: false}
				, slice
			;
			filesaver.readyState = filesaver.INIT;
			if (!name) {
				name = "download";
			}
			if (can_use_save_link) {
				object_url = get_object_url(blob);
				// FF for Android has a nasty garbage collection mechanism
				// that turns all objects that are not pure javascript into 'deadObject'
				// this means `doc` and `save_link` are unusable and need to be recreated
				// `view` is usable though:
				doc = view.document;
				save_link = doc.createElementNS("http://www.w3.org/1999/xhtml", "a");
				save_link.href = object_url;
				save_link.download = name;
				var event = doc.createEvent("MouseEvents");
				event.initMouseEvent(
					"click", true, false, view, 0, 0, 0, 0, 0
					, false, false, false, false, 0, null
				);
				save_link.dispatchEvent(event);
				filesaver.readyState = filesaver.DONE;
				dispatch_all();
				return;
			}
			// Object and web filesystem URLs have a problem saving in Google Chrome when
			// viewed in a tab, so I force save with application/octet-stream
			// http://code.google.com/p/chromium/issues/detail?id=91158
			if (view.chrome && type && type !== force_saveable_type) {
				slice = blob.slice || blob.webkitSlice;
				blob = slice.call(blob, 0, blob.size, force_saveable_type);
				blob_changed = true;
			}
			// Since I can't be sure that the guessed media type will trigger a download
			// in WebKit, I append .download to the filename.
			// https://bugs.webkit.org/show_bug.cgi?id=65440
			if (webkit_req_fs && name !== "download") {
				name += ".download";
			}
			if (type === force_saveable_type || webkit_req_fs) {
				target_view = view;
			}
			if (!req_fs) {
				fs_error();
				return;
			}
			fs_min_size += blob.size;
			req_fs(view.TEMPORARY, fs_min_size, abortable(function(fs) {
				fs.root.getDirectory("saved", create_if_not_found, abortable(function(dir) {
					var save = function() {
						dir.getFile(name, create_if_not_found, abortable(function(file) {
							file.createWriter(abortable(function(writer) {
								writer.onwriteend = function(event) {
									target_view.location.href = file.toURL();
									deletion_queue.push(file);
									filesaver.readyState = filesaver.DONE;
									dispatch(filesaver, "writeend", event);
								};
								writer.onerror = function() {
									var error = writer.error;
									if (error.code !== error.ABORT_ERR) {
										fs_error();
									}
								};
								"writestart progress write abort".split(" ").forEach(function(event) {
									writer["on" + event] = filesaver["on" + event];
								});
								writer.write(blob);
								filesaver.abort = function() {
									writer.abort();
									filesaver.readyState = filesaver.DONE;
								};
								filesaver.readyState = filesaver.WRITING;
							}), fs_error);
						}), fs_error);
					};
					dir.getFile(name, {create: false}, abortable(function(file) {
						// delete file if it already exists
						file.remove();
						save();
					}), abortable(function(ex) {
						if (ex.code === ex.NOT_FOUND_ERR) {
							save();
						} else {
							fs_error();
						}
					}));
				}), fs_error);
			}), fs_error);
		}
		, FS_proto = FileSaver.prototype
		, saveAs = function(blob, name) {
			return new FileSaver(blob, name);
		}
	;
	FS_proto.abort = function() {
		var filesaver = this;
		filesaver.readyState = filesaver.DONE;
		dispatch(filesaver, "abort");
	};
	FS_proto.readyState = FS_proto.INIT = 0;
	FS_proto.WRITING = 1;
	FS_proto.DONE = 2;

	FS_proto.error =
	FS_proto.onwritestart =
	FS_proto.onprogress =
	FS_proto.onwrite =
	FS_proto.onabort =
	FS_proto.onerror =
	FS_proto.onwriteend =
		null;

	view.addEventListener("unload", process_deletion_queue, false);
	saveAs.unload = function() {
		process_deletion_queue();
		view.removeEventListener("unload", process_deletion_queue, false);
	};
	return saveAs;
}(
	   typeof self !== "undefined" && self
	|| typeof window !== "undefined" && window
	|| this.content
));
// `self` is undefined in Firefox for Android content script context
// while `this` is nsIContentFrameMessageManager
// with an attribute `content` that corresponds to the window

if (typeof module !== "undefined") module.exports = saveAs;
/*!
@license
 * wavesurfer.js
 *
 * https://github.com/katspaugh/wavesurfer.js
 *
 * This work is licensed under a Creative Commons Attribution 3.0 Unported License.
 */

'use strict';

var WaveSurfer = {
    defaultParams: {
        height        : 128,
        waveColor     : '#999',
        progressColor : '#555',
        cursorColor   : '#333',
        cursorWidth   : 1,
        skipLength    : 2,
        minPxPerSec   : 20,
        pixelRatio    : window.devicePixelRatio,
        fillParent    : true,
        scrollParent  : false,
        hideScrollbar : false,
        normalize     : false,
        audioContext  : null,
        container     : null,
        dragSelection : true,
        loopSelection : true,
        audioRate     : 1,
        interact      : true,
        splitChannels : false,
        mediaContainer: null,
        mediaControls : false,
        renderer      : 'Canvas',
        backend       : 'WebAudio',
        mediaType     : 'audio',
        autoCenter    : true
    },

    init: function (params) {
        // Extract relevant parameters (or defaults)
        this.params = WaveSurfer.util.extend({}, this.defaultParams, params);

        this.container = 'string' == typeof params.container ?
            document.querySelector(this.params.container) :
            this.params.container;

        if (!this.container) {
            throw new Error('Container element not found');
        }

        if (this.params.mediaContainer == null) {
            this.mediaContainer = this.container;
        } else if (typeof this.params.mediaContainer == 'string') {
            this.mediaContainer = document.querySelector(this.params.mediaContainer);
        } else {
            this.mediaContainer = this.params.mediaContainer;
        }

        if (!this.mediaContainer) {
            throw new Error('Media Container element not found');
        }

        // Used to save the current volume when muting so we can
        // restore once unmuted
        this.savedVolume = 0;
        // The current muted state
        this.isMuted = false;
        // Will hold a list of event descriptors that need to be
        // cancelled on subsequent loads of audio
        this.tmpEvents = [];

        this.createDrawer();
        this.createBackend();
		this.createFilemaker();
    },

    createDrawer: function () {
        var my = this;

        this.drawer = Object.create(WaveSurfer.Drawer[this.params.renderer]);
        this.drawer.init(this.container, this.params);

        this.drawer.on('redraw', function () {
            my.drawBuffer();
            my.drawer.progress(my.backend.getPlayedPercents());
        });

        // Click-to-seek
        this.drawer.on('click', function (e, progress) {
			if(e.shiftKey) {
				if (my.regions) {
					my.addRegion({
						start: progress * my.getDuration(),
						end: progress * my.getDuration(),
						color: 'rgba(0, 255, 0, 0.4)',	
						data: {type: 'slice'}, 
						threshold: -1,  
						drag: true,
						resize: false					
					});
				}
			}
			else setTimeout(function () {	
				if(my.isPlaying()) my.stop();
				my.seekToAndPlaySingle(progress, false, false, 0);
            }, 0);
			
        });

        // Relay the scroll event from the drawer
        this.drawer.on('scroll', function (e) {
            my.fireEvent('scroll', e);
        });
    },

    createBackend: function () {
        var my = this;

        if (this.backend) {
            this.backend.destroy();
        }

        // Back compat
        if (this.params.backend == 'AudioElement') {
            this.params.backend = 'MediaElement';
        }

        if (this.params.backend == 'WebAudio' && !WaveSurfer.WebAudio.supportsWebAudio()) {
            this.params.backend = 'MediaElement';
        }

        this.backend = Object.create(WaveSurfer[this.params.backend]);
        this.backend.init(this.params);

        this.backend.on('finish', function () { my.fireEvent('finish'); });
        this.backend.on('play', function () { my.fireEvent('play'); });
        this.backend.on('pause', function () { my.fireEvent('pause'); });
		this.backend.on('render', function (e) { my.fireEvent('render', e);});

		
		
        this.backend.on('audioprocess', function (time) {
            my.drawer.progress(my.backend.getPlayedPercents());  
            my.fireEvent('audioprocess', time);
        });
    },


	createFilemaker: function() {
		var my = this;
		this.filemaker = Object.create(WaveSurfer.Filemaker);
		this.filemaker.on('error', function (err) { my.fireEvent('error', err); });
	},


    getDuration: function () {
        return this.backend.getDuration();
    },

    getCurrentTime: function () {
        return this.backend.getCurrentTime();
    },

    play: function (start, end) {
        this.backend.play(start, end);
    },

    playExtended: function (start, loop, end, render, index) {
        this.backend.playExtended(start, loop, end, render, index);
    },	
	
    pause: function () {
        this.backend.pause();
    },

    playPause: function () {
        this.backend.isPaused() ? this.play() : this.pause();
    },

    isPlaying: function () {
        return !this.backend.isPaused();
    },

    skipBackward: function (seconds) {
        this.skip(-seconds || -this.params.skipLength);
    },

    skipForward: function (seconds) {
        this.skip(seconds || this.params.skipLength);
    },

    skip: function (offset) {
        var position = this.getCurrentTime() || 0;
        var duration = this.getDuration() || 1;
        position = Math.max(0, Math.min(duration, position + (offset || 0)));
        this.seekAndCenter(position / duration);
    },

    seekAndCenter: function (progress) {
        this.seekTo(progress);
        this.drawer.recenter(progress);
    },

    seekTo: function (progress) {
        var paused = this.backend.isPaused();
        // avoid small scrolls while paused seeking
        var oldScrollParent = this.params.scrollParent;
        if (paused) {
            this.params.scrollParent = false;
        }
        this.backend.seekTo(progress * this.getDuration());
        this.drawer.progress(this.backend.getPlayedPercents());

        if (!paused) {
            this.backend.pause();
           //this.backend.play();
        }
        this.params.scrollParent = oldScrollParent;
        this.fireEvent('seek', progress);
    },

	activeSliceMarkers: [],
	
	tempo: 1.0,
	
	pitch: 1.0,	
	
	speed: 1.0, // overall speed, depends on tempo *and* pitch

	setTempo: function(t) {
		this.tempo = t;
		this.speed = this.tempo * 1.0/this.pitch;
	},
	
	setPitch: function(t) {
		this.pitch = t;
		this.speed = this.tempo * 1.0/this.pitch;
	},
	
	getSliceBoundaries: function(progress, fromLoop) {
		if(progress >= this.getRightLocator() && fromLoop) {
			if(this.getRightLocator() > this.getLeftLocator()) {
			progress = this.getLeftLocator(); 
			}
			else {
				progress = 0;
			}
		}	
 		if(!fromLoop) {
			this.activeSliceMarkers[0] = (this.getTimeAtNextSliceMarker(progress * this.getDuration(), -1));
			this.activeSliceMarkers[0] /= this.getDuration();
		}
		else {
			this.activeSliceMarkers[0] = progress;
		}
		this.activeSliceMarkers[1] = (this.getTimeAtNextSliceMarker((progress * this.getDuration()) + 0.00000000001, 1));	
		// that tiny 0.00000000001 offset is b/c i think rounding errors or something like that caused it to revisit the same slice every now & then 
		// (when in loop mode that is) 
		this.activeSliceMarkers[1] /= this.getDuration();
	},


	getLeftLocator: function() {
		// NB denominated in 0...1 while region methods return abs. time	
	   return this.getTimeAtLeftLocator() / this.getDuration();
	},
	
	getRightLocator: function() {
	    //  NB denominated in 0...1 while region methods return abs. time
	   return this.getTimeAtRightLocator() / this.getDuration();		
	},	

	getSlicesBetweenLocators: function() {
	    return this.regions.getSlicesBetweenLocators();	
	},	
	
	getDurationBetweenLocators: function() {
		return this.getTimeAtRightLocator() - this.getTimeAtLeftLocator();
	},

	
	setEstBpm: function() {
		var time = this.getDurationBetweenLocators();
		var beats = (this.timing.num * this.timing.bars) + this.timing.extrabeats; 
		var timePerBeat = time / beats;
		this.timing.timePerQtrNote = timePerBeat * (this.timing.denom/4);
		this.timing.bpm = (60 / this.timing.timePerQtrNote) * this.tempo;
	},

	getEstBpm: function() {
		return Math.round(this.timing.bpm * 100) / 100;
	},
	
    seekToAndPlaySingle: function(progress, fromLoop, render, index) { 
   		var my = this;
 		this.getSliceBoundaries(progress, fromLoop);
        this.seekTo(this.activeSliceMarkers[0]); 
		this.backend.un('audioprocess');
        this.backend.on('audioprocess', function (time) {
			// we don't want cursor to move past our loop point
            my.drawer.progress(my.backend.getPlayedPercents()); 
            my.fireEvent('audioprocess', time);
        });	
		this.setPlaybackRate(this.pitch);
		var playableSlice = this.activeSliceMarkers[1] - this.activeSliceMarkers[0];
		if(fromLoop == true) playableSlice /= this.speed;
		this.playExtended(this.activeSliceMarkers[0] * this.getDuration(), this.activeSliceMarkers[1] * this.getDuration(), (this.activeSliceMarkers[0] + playableSlice) * this.getDuration(), render, index); 
		my.fromLoop = fromLoop;
		this.once('pause', function() {
			if(my.fromLoop == false) {
				my.seekAndCenter(my.activeSliceMarkers[0]);	
			}
		});		
    },	

 	
	seekToAndPlayAll: function(progress) {
		this.seekToAndPlaySingle(progress, true, false, 0);
		var self = this;
		this.on('pause', function() {
			self.seekToAndPlaySingle(self.activeSliceMarkers[1], true, false, 0);
		});
	},

	segmentIndex: 0,
	
	resetSlices: function() {
		this.backend.resetSlices();
	},
	
	getSlices: function() {
		return(this.backend.getSlices());
	},

	midiScale: 'chromatic',

	noteNumber: 0,
	
	timing: {num: 4, denom: 4, extrabeats: 0, bpm: 0, bars: 1, timePerQtrNote: 0, pitchcomp: 0},
	
	setScale: function(s) {
		this.midiScale = s;
	},
	
	setNoteNumber: function(s) {
		this.noteNumber = s;
	},

	initTiming: function() {
		this.timing.num = 4;
		this.timing.denom = 4;
		this.timing.extrabeats = 0;
		this.timing.bpm = 0;
		this.timing.bars = 1;
		this.timing.timePerQtrNote = 0;
		this.timing.pitchcomp = 0;
	},

	setTimingNum: function(num) {
		this.timing.num = parseInt(num);		
	},

	setTimingDenom: function(denom) {
		this.timing.denom = parseInt(denom);		
	},

	setTimingExtraBeats: function(extrabeats) {
		this.timing.extrabeats = parseInt(extrabeats);
	},

	setTimingBars: function(bars) {
		this.timing.bars = parseInt(bars);
	},
	
	seekToAndRenderAll: function(filename) {
		var progress = this.getLeftLocator();
		var my = this;
		if(this.isPlaying()) this.stop();
		this.resetSlices();
		this.segmentIndex = 0;
		this.filemaker.init(filename);
		this.seekToAndPlaySingle(progress + 0.0000000001, false, true, this.segmentIndex);
		// had to introduce this offset again to simulate a click *in* the slice and not on a marker, lol
		// see getSliceBoundaries in loop mode!
		this.on('render', function() {		
			if(my.activeSliceMarkers[1] == my.getRightLocator())  {  
				my.timing.pitchcomp = my.pitch;
				my.filemaker.pushzip(my.getSlices(), my.noteNumber, my.midiScale, my.timing); 	
				my.un('render');
				my.fireEvent('finished-render');
			}
			else {
				my.segmentIndex = my.segmentIndex  + 1;
				my.seekToAndPlaySingle(my.activeSliceMarkers[1] + 0.0000000001, false, true, my.segmentIndex);
			}
		});
	},


    stop: function () {
		this.un('pause');
        this.pause();
        this.seekTo(this.activeSliceMarkers[1]);
        //this.drawer.progress(0);
    },

	
	setBrowser: function(s) {
		/* either 'chrome-opera' or 'other'
		This is for a very little thing affecting sample-precise (relatively!) playback
		*/
		this.backend.setBrowser(s);	

	},
	

    /**
     * Set the playback volume.
     *
     * @param {Number} newVolume A value between 0 and 1, 0 being no
     * volume and 1 being full volume.
	 * (Well you can also crank the gain past 1 if you like - gdg)
     */
    setVolume: function (newVolume) {
        this.backend.setVolume(newVolume);
    },

	
    setEnvAttack: function (attack) {
       this.backend.setEnvAttack(attack/1000);
    },	

    setEnvHold: function (hold) {
       this.backend.setEnvHold(hold/1000);
    },	
	
    setEnvDecay: function (decay) {
        this.backend.setEnvDecay(decay/1000); // from ms to s
    },

	
    setCompThreshold: function (threshold) {
       this.backend.setCompThreshold(threshold);
    },	

    setCompRatio: function (ratio) {
        this.backend.setCompRatio(ratio);
    },	

    setCompAttack: function (attack) {
       this.backend.setCompAttack(attack);   // in s 
    },	

    setCompRelease: function (release) {
        this.backend.setCompRelease(release);
    },	
	
	setLoFreq: function (freq) {
       this.backend.setLoFreq(freq);
    },	

	setHiFreq: function (freq) {
       this.backend.setHiFreq(freq);
    },	
	
	setMidFreq: function (freq) {
       this.backend.setMidFreq(freq);
    },		

	setLoGain: function (gain) {
       this.backend.setLoGain(gain);
    },	

	setHiGain: function (gain) {
       this.backend.setHiGain(gain);
    },	
	
	setMidGain: function (gain) {
       this.backend.setMidGain(gain);
    },
	
	setMidQ: function (q) {
       this.backend.setMidQ(q);
    },		
    /**
     * Set the playback rate.
     *
     * @param {Number} rate A positive number. E.g. 0.5 means half the
     * normal speed, 2 means double speed and so on.
     */
    setPlaybackRate: function (rate) {
        this.backend.setPlaybackRate(rate);
    },

    /**
     * Toggle the volume on and off. It not currenly muted it will
     * save the current volume value and turn the volume off.
     * If currently muted then it will restore the volume to the saved
     * value, and then rest the saved value.
     */
    toggleMute: function () {
        if (this.isMuted) {
            // If currently muted then restore to the saved volume
            // and update the mute properties
            this.backend.setVolume(this.savedVolume);
            this.isMuted = false;
        } else {
            // If currently not muted then save current volume,
            // turn off the volume and update the mute properties
            this.savedVolume = this.backend.getVolume();
            this.backend.setVolume(0);
            this.isMuted = true;
        }
    },

    toggleScroll: function () {
        this.params.scrollParent = !this.params.scrollParent;
        this.drawBuffer();
    },

    toggleInteraction: function () {
        this.params.interact = !this.params.interact;
    },

    drawBuffer: function () {
        var nominalWidth = Math.round(
            this.getDuration() * this.params.minPxPerSec * this.params.pixelRatio
        );
        var parentWidth = this.drawer.getWidth();
        var width = nominalWidth;

        // Fill container
        if (this.params.fillParent && (!this.params.scrollParent || nominalWidth < parentWidth)) {
            width = parentWidth;
        }
        var peaks = this.backend.getPeaks(width);
        this.drawer.drawPeaks(peaks, width);
        this.fireEvent('redraw', peaks, width);
    },

    zoom: function (pxPerSec) {
        this.params.minPxPerSec = pxPerSec;
		this.clearRegionPositions();
        this.params.scrollParent = true;
        this.drawBuffer();
		this.drawer.progress(this.backend.getPlayedPercents());
        this.fireEvent('zoom', pxPerSec);
    },

    /**
     * Internal method.
     */
    loadArrayBuffer: function (arraybuffer) {
        this.decodeArrayBuffer(arraybuffer, function (data) {
            this.loadDecodedBuffer(data);
        }.bind(this));
    },

    /**
     * Directly load an externally decoded AudioBuffer.
     */
    loadDecodedBuffer: function (buffer) {
        this.backend.load(buffer);
		this.initTransientPool(buffer);
        this.drawBuffer();
        this.fireEvent('ready');
    },

    /**
     * Loads audio data from a Blob or File object.
     *
     * @param {Blob|File} blob Audio data.
     */
    loadBlob: function (blob) {
        var my = this;
        // Create file reader
        var reader = new FileReader();
        reader.addEventListener('progress', function (e) {
            my.onProgress(e);
        });
        reader.addEventListener('load', function (e) {
            my.loadArrayBuffer(e.target.result);
        });
        reader.addEventListener('error', function () {
            my.fireEvent('error', 'Error reading file');
        });
        reader.readAsArrayBuffer(blob);
        this.empty();
    },

    /**
     * Loads audio and rerenders the waveform.
     */
    load: function (url, peaks) {
        switch (this.params.backend) {
            case 'WebAudio': return this.loadBuffer(url);
            case 'MediaElement': return this.loadMediaElement(url, peaks);
        }
    },

    /**
     * Loads audio using Web Audio buffer backend.
     */
    loadBuffer: function (url) {
        this.empty();
        // load via XHR and render all at once
        return this.getArrayBuffer(url, this.loadArrayBuffer.bind(this));
    },

    loadMediaElement: function (url, peaks) {
        this.empty();
        this.backend.load(url, this.mediaContainer, peaks);

        this.tmpEvents.push(
            this.backend.once('canplay', (function () {
                this.drawBuffer();
                this.fireEvent('ready');
            }).bind(this)),

            this.backend.once('error', (function (err) {
                this.fireEvent('error', err);
            }).bind(this))
        );


        // If no pre-decoded peaks provided, attempt to download the
        // audio file and decode it with Web Audio.
        if (!peaks && this.backend.supportsWebAudio()) {
            this.getArrayBuffer(url, (function (arraybuffer) {
                this.decodeArrayBuffer(arraybuffer, (function (buffer) {
                    this.backend.buffer = buffer;
                    this.drawBuffer();
                }).bind(this));
            }).bind(this));
        }
    },

    decodeArrayBuffer: function (arraybuffer, callback) {
        this.backend.decodeArrayBuffer(
            arraybuffer,
            this.fireEvent.bind(this, 'decoded'),
            this.fireEvent.bind(this, 'error', 'Error decoding audiobuffer')
        );
        this.tmpEvents.push(
            this.once('decoded', callback)
        );
    },

    getArrayBuffer: function (url, callback) {
        var my = this;
        var ajax = WaveSurfer.util.ajax({
            url: url,
            responseType: 'arraybuffer'
        });
        this.tmpEvents.push(
            ajax.on('progress', function (e) {
                my.onProgress(e);
            }),
            ajax.on('success', callback),
            ajax.on('error', function (e) {
                my.fireEvent('error', 'XHR error: ' + e.target.statusText);
            })
        );
        return ajax;
    },

    onProgress: function (e) {
        if (e.lengthComputable) {
            var percentComplete = e.loaded / e.total;
        } else {
            // Approximate progress with an asymptotic
            // function, and assume downloads in the 1-3 MB range.
            percentComplete = e.loaded / (e.loaded + 1000000);
        }
        this.fireEvent('loading', Math.round(percentComplete * 100), e.target);
    },

    /**
     * Exports PCM data into a JSON array and opens in a new window.
     */
    exportPCM: function (length, accuracy, noWindow) {
        length = length || 1024;
        accuracy = accuracy || 10000;
        noWindow = noWindow || false;
        var peaks = this.backend.getPeaks(length, accuracy);
        var arr = [].map.call(peaks, function (val) {
            return Math.round(val * accuracy) / accuracy;
        });
        var json = JSON.stringify(arr);
        if (!noWindow) {
            window.open('data:application/json;charset=utf-8,' +
                encodeURIComponent(json));
        }
        return json;
    },

    clearTmpEvents: function () {
        this.tmpEvents.forEach(function (e) { e.un(); });
    },

    /**
     * Display empty waveform.
     */
    empty: function () {
        if (!this.backend.isPaused()) {
            this.stop();
            this.backend.disconnectSource();
        }
        this.clearTmpEvents();
        this.drawer.progress(0);
        this.drawer.setWidth(0);
        this.drawer.drawPeaks({ length: this.drawer.getWidth() }, 0);
    },

    /**
     * Remove events, elements and disconnect WebAudio nodes.
     */
    destroy: function () {
        this.fireEvent('destroy');
        this.clearTmpEvents();
        this.unAll();
        this.backend.destroy();
        this.drawer.destroy();
    }
};

WaveSurfer.create = function (params) {
    var wavesurfer = Object.create(WaveSurfer);
    wavesurfer.init(params);
    return wavesurfer;
};
/* Common utilities */
WaveSurfer.util = {
    extend: function (dest) {
        var sources = Array.prototype.slice.call(arguments, 1);
        sources.forEach(function (source) {
            Object.keys(source).forEach(function (key) {
                dest[key] = source[key];
            });
        });
        return dest;
    },

    getId: function () {
        return 'wavesurfer_' + Math.random().toString(32).substring(2);
    },

    ajax: function (options) {
        var ajax = Object.create(WaveSurfer.Observer);
        var xhr = new XMLHttpRequest();
        var fired100 = false;

        xhr.open(options.method || 'GET', options.url, true);
        xhr.responseType = options.responseType || 'json';

        xhr.addEventListener('progress', function (e) {
            ajax.fireEvent('progress', e);
            if (e.lengthComputable && e.loaded == e.total) {
                fired100 = true;
            }
        });

        xhr.addEventListener('load', function (e) {
            if (!fired100) {
                ajax.fireEvent('progress', e);
            }
            ajax.fireEvent('load', e);

            if (200 == xhr.status || 206 == xhr.status) {
                ajax.fireEvent('success', xhr.response, e);
            } else {
                ajax.fireEvent('error', e);
            }
        });

        xhr.addEventListener('error', function (e) {
            ajax.fireEvent('error', e);
        });

        xhr.send();
        ajax.xhr = xhr;
        return ajax;
    }
};


/* Observer */
WaveSurfer.Observer = {
    /**
     * Attach a handler function for an event.
     */
    on: function (event, fn) {
        if (!this.handlers) { this.handlers = {}; }

        var handlers = this.handlers[event];
        if (!handlers) {
            handlers = this.handlers[event] = [];
        }
        handlers.push(fn);

        // Return an event descriptor
        return {
            name: event,
            callback: fn,
            un: this.un.bind(this, event, fn)
        };
    },

    /**
     * Remove an event handler.
     */
    un: function (event, fn) {
        if (!this.handlers) { return; }

        var handlers = this.handlers[event];
        if (handlers) {
            if (fn) {
                for (var i = handlers.length - 1; i >= 0; i--) {
                    if (handlers[i] == fn) {
                        handlers.splice(i, 1);
                    }
                }
            } else {
                handlers.length = 0;
            }
        }
    },

    /**
     * Remove all event handlers.
     */
    unAll: function () {
        this.handlers = null;
    },

    /**
     * Attach a handler to an event. The handler is executed at most once per
     * event type.
     */
    once: function (event, handler) {
        var my = this;
        var fn = function () {
            handler.apply(this, arguments);
            setTimeout(function () {
                my.un(event, fn);
            }, 0);
        };
        return this.on(event, fn);
    },

    fireEvent: function (event) {
        if (!this.handlers) { return; }
        var handlers = this.handlers[event];
        var args = Array.prototype.slice.call(arguments, 1);
        handlers && handlers.forEach(function (fn) {
            fn.apply(null, args);
        });
    }
};


/* Make the main WaveSurfer object an observer */
WaveSurfer.util.extend(WaveSurfer, WaveSurfer.Observer);
WaveSurfer.Filemaker = {

	zip: 0,
	filename: 'test',
	sampleRate: 44100,
	midiHeader: [0x4d, 0x54, 0x68, 0x64, 0x00, 0x00, 0x00, 0x06, 0x00, 0x00, 0x00, 0x01, 0x03, 0xc0],	// 960 ticks/qtr note
	midiMtrk: [0x4d, 0x54, 0x72, 0x6b],
	midiFooter: [0x01, 0xff, 0x2f, 0x00],
	midiNotes: [],
	
	init: function(filename) {  
		this.zip = new JSZip();	
		this.filename = filename.split(".")[0];
		this.midiNotes = [];
	},


	/*!
	@license
	Float32-array to PCM WAV code lifted and adapted from https://webaudiodemos.appspot.com/AudioRecorder/js/recorderjs/recorderWorker.js
	
	License (MIT)

	Copyright Â© 2013 Matt Diamond

	Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated 
	documentation files (the "Software"), to deal in the Software without restriction, including without limitation 
	the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and 
	to permit persons to whom the Software is furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all copies or substantial portions of 
	the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO 
	THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE 
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF 
	CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER 
	DEALINGS IN THE SOFTWARE.
	*/
	

	interleave: function(inputL, inputR) {
		var length = inputL.length + inputR.length;
		length -= 528;  // compensate for 264-sample latency incurred by compressor
		if(length < 2) {
			this.fireEvent("error", "segment too short to render: shorter than system latency!");
		}
		var result = new Float32Array(length);

		var index = 0,
		inputIndex = 264;  // compensate for 264-sample latency incurred by compressor

		while (index < length) {
			result[index++] = inputL[inputIndex];
			result[index++] = inputR[inputIndex];
			inputIndex++;
		}
		return result;
	},
	

	floatTo16BitPCM: function(output, offset, input) {
		for (var i = 0; i < input.length; i++, offset += 2) {
			var s = Math.max(-1, Math.min(1, input[i]));
			output.setInt16(offset, s < 0 ? s * 0x8000 : s * 0x7FFF, true);
		}
	},

	writeString: function(view, offset, string) {
		for (var i = 0; i < string.length; i++) {
			view.setUint8(offset + i, string.charCodeAt(i));
		}
	},	
	
	encodeWAV: function(samples) {
		var buffer = new ArrayBuffer(44 + samples.length * 2);
		var view = new DataView(buffer);
		this.writeString(view, 0, 'RIFF');
		view.setUint32(4, 36 + samples.length * 2, true);  // this *was* 32; needed changing to 36
		this.writeString(view, 8, 'WAVE');
		this.writeString(view, 12, 'fmt '); // subchunk1 ID
		view.setUint32(16, 16, true); // 16 for pcm
		view.setUint16(20, 1, true);  // linear 
		view.setUint16(22, 2, true);  // stereo 2 channels
		view.setUint32(24, this.sampleRate, true); // fs
		view.setUint32(28, this.sampleRate * 4, true);  // fs * ch * (bitdepth/8)
		view.setUint16(32, 4, true);  // block align 
		view.setUint16(34, 16, true); // bits per samp
		this.writeString(view, 36, 'data');
		view.setUint32(40, samples.length * 2, true);
		this.floatTo16BitPCM(view, 44, samples);
		return view;
	},

	encodePCM: function(samples) {  
		// this was a diagnostic from when I couldn't get the WAV header right somehow
		var buffer = new ArrayBuffer(samples.length * 2);
		var view = new DataView(buffer);
		this.floatTo16BitPCM(view, 0, samples);
		return view;
	},

	makewav: function(buf) {
		var len = buf.length;
		this.sampleRate = buf.sampleRate;
		var interleaved;
		if(buf.numberOfChannels==2) {
			len *= 2;
			interleaved = this.interleave(buf.getChannelData(0), buf.getChannelData(1));
		}
		else {
			len *=2;
			interleaved = this.interleave(buf.getChannelData(0), buf.getChannelData(0));
		}
		var dataview = this.encodeWAV(interleaved);
		return dataview.buffer;
	},	
	
	zeroFill: function(number) { 
		// only need 3 digits
		var str = number + "";  
		if(number<10) str = "00" + str;
		else if(number<100) str = "0" + str;
		return str;
	},
	
	mlog2: function(d) {
		var lg = 0;
		while(d!=1) {
			lg++;
			d >>= 1;
		}
		return lg;
	},

	bytify: function(number, is7bit) {
		var modulus = is7bit ? 128: 256;
		var bytes = [];
		if(number == 0) return [0];
		var c = 0;
		while(number != 0) {
			var mbyte = number % modulus;
			number -= mbyte;
			if(c == 1 && is7bit) mbyte +=128;
			bytes.unshift(mbyte);
			c = 1;
			number /= modulus;
		}
		return bytes;
	},

	sizearray: function(number) {
		var b = this.bytify(number, false);
		if(b.length > 4) {  // shouldn't happen realistically, lol
			this.fireEvent("error", "too much midi data to fit length into 4 bytes");
			return b;
		}
		if(b.length == 4) return b;
		if(b.length == 3) return [0].concat(b);
		if(b.length == 2) return [0,0].concat(b);
		if(b.length == 1) return [0,0,0].concat(b);	
	},
	
	createMidiTimeSignature: function(num,denom) {
		return [0x00, 0xff, 0x58, 0x04, num, this.mlog2(denom), 24, 0x08];
	},

	createMidiTempo: function(bpm) {
		var tempo = Math.floor(60000000/bpm);  
		var temposetting = this.bytify(tempo, false);  
		var miditempo = [0x00, 0xff, 0x51]; 
		miditempo.push(temposetting.length); 
		for(i=0; i<temposetting.length; i++) {
			miditempo.push(temposetting[i]);
		}
		return miditempo;
	},

	writeNoteOnNoteOffPair: function(note, endtime) {
		this.midiNotes.push(0x00);
		this.midiNotes.push(0x90);
		this.midiNotes.push(note);
		this.midiNotes.push(0x7f);
		this.midiNotes = this.midiNotes.concat(this.bytify(endtime,true));
		this.midiNotes.push(0x80);
		this.midiNotes.push(note);
		this.midiNotes.push(0x00);	
	},	
	
	getNextNote: function(note, scale) {
		if(scale == "white-note") {
			switch(note%12) {
				case 0: // c,d,f,g,a
				case 2: 
				case 5:
				case 7:
				case 9:
					return note + 2;
					break;	
				case 4: // e,b
				case 11:
					return note + 1;
					break;				
			}
		}
		if(scale == "black-note") {
			switch(note%12) {
				case 1: // c#,f#,g#
				case 6: 
				case 8:
					return note + 2;
					break;	
				case 3: // d#,a#
				case 10:
					return note + 3;
					break;				
			}
		}
		if(scale == "chromatic") return note + 1;
	},


	addSfz: function(wavs, startnote, scale) {
		var s = "<group>\namp_veltrack=80\n";
		var note = startnote;
		var wavindex = 0;
		while(note <=127 && wavindex < wavs.length) {
			s += "<region>\nsample=slices/" + this.filename + "_" + this.zeroFill(wavs[wavindex].index) + ".wav" + "\n";
			// the path-separator was a backslash in the sfz files I inspected. But a forward slash works OK in Linuxsampler on Windows
			// but something to keep an eye on?
			s += "key=" + note.toString() + "\n";
			s += "pitch_keycenter=" + note.toString() + "\n";
			note = this.getNextNote(note, scale);
			wavindex = wavindex + 1;
		}
		this.zip.file(this.filename + ".sfz", s);
	},
	
	addMid: function(wavs, startnote, scale, timing) {
		var midi = [];
		midi = midi.concat(this.midiHeader);
		midi = midi.concat(this.midiMtrk);	
		var tempo = this.createMidiTempo(timing.bpm);
		var timesig = this.createMidiTimeSignature(timing.num, timing.denom);
		// make midi notes
		var note = startnote;
		var wavindex = 0;
		while(note <=127 && wavindex < wavs.length) {
			var len = wavs[wavindex].slice.length;
			len -= 264;  // compensate for compressor-induced latency
			len *= timing.pitchcomp;
			if(len < 2) {
			this.fireEvent("error", "audio file too short to replicate as midi event: shorter than system latency!");
			}
			this.sampleRate = wavs[wavindex].slice.sampleRate;
			var sliceTime = len/this.sampleRate;
			var ticks = Math.ceil(sliceTime/timing.timePerQtrNote * 960);
			this.writeNoteOnNoteOffPair(note, ticks);			
			note = this.getNextNote(note, scale);
			wavindex = wavindex + 1;	
		}
		var ln = tempo.length + timesig.length + this.midiNotes.length +  this.midiFooter.length;
		var size = this.sizearray(ln); 
		midi = midi.concat(size);
		midi = midi.concat(tempo);
		midi = midi.concat(timesig);
		midi = midi.concat(this.midiNotes);
		midi = midi.concat(this.midiFooter);
		var buffer = new ArrayBuffer(midi.length);
		var view = new DataView(buffer);
		for(var i=0; i<midi.length; i++) {
			view.setUint8(i,midi[i]);
		}
		this.zip.file(this.filename + "(" + (Math.round(timing.bpm * 100) / 100).toString() + "bpm).mid", view.buffer);	
	},
	
	pushzip: function(wavs, startnote, scale, timing) {
		this.addSfz(wavs, startnote, scale);
		this.addMid(wavs, startnote, scale, timing);
		for(var x=0; x<wavs.length; x++) {
			this.zip.file("slices/" + this.filename + "_" + this.zeroFill(wavs[x].index) + ".wav", this.makewav(wavs[x].slice));
		}	
		var content = this.zip.generate({type:"blob"});  
		saveAs(content, this.filename + ".zip");  
	}
	
};

WaveSurfer.util.extend(WaveSurfer.Filemaker, WaveSurfer.Observer);

WaveSurfer.WebAudio = {
    scriptBufferSize: 256,
    PLAYING_STATE: 0,
    PAUSED_STATE: 1,
    FINISHED_STATE: 2,
	
	DECAY_MAX: 10,
	
	browser: 'other',

    supportsWebAudio: function () {
        return !!(window.AudioContext || window.webkitAudioContext);
    },

    getAudioContext: function () {
        if (!WaveSurfer.WebAudio.audioContext) {
            WaveSurfer.WebAudio.audioContext = new (
                window.AudioContext || window.webkitAudioContext
            );
        }
        return WaveSurfer.WebAudio.audioContext;
    },

    getOfflineAudioContext: function (sampleRate) {
        if (!WaveSurfer.WebAudio.offlineAudioContext) {
            WaveSurfer.WebAudio.offlineAudioContext = new (
                window.OfflineAudioContext || window.webkitOfflineAudioContext
            )(1, 2, sampleRate);
        }
        return WaveSurfer.WebAudio.offlineAudioContext;
    },

	
	setBrowser: function(s) {
		this.browser = s;		
	}, 
	
    init: function (params) {
        this.params = params;
        this.ac = params.audioContext || this.getAudioContext();

        this.lastPlay = this.ac.currentTime;
        this.startPosition = 0;
        this.scheduledPause = null;
		
		this.attack = 0;
		this.hold = 0;
		this.decay = this.DECAY_MAX;
		
        this.states = [
            Object.create(WaveSurfer.WebAudio.state.playing),
            Object.create(WaveSurfer.WebAudio.state.paused),
            Object.create(WaveSurfer.WebAudio.state.finished)
        ];

        this.createVolumeNode();
        this.createScriptNode();
        this.createAnalyserNode();

		this.createPreGain();
		this.createEnvGain();
		this.createCompressorNode();
		this.createLoEQ();
		this.createMidEQ();
		this.createHiEQ();		
		
		this.setFilters([this.preGainNode, this.envGainNode, this.compressorNode, this.lo, this.mid, this.hi]);
        this.setState(this.PAUSED_STATE);
        this.setPlaybackRate(this.params.audioRate);
    },

    disconnectFilters: function () {
        if (this.filters) {
            this.filters.forEach(function (filter) {
                filter && filter.disconnect();
            });
            this.filters = null;
            // Reconnect direct path
            this.analyser.connect(this.gainNode);
        }
    },

    setState: function (state) {
        if (this.state !== this.states[state]) {
            this.state = this.states[state];
            this.state.init.call(this);
        }
    },

    // Unpacked filters
    setFilter: function () {
        this.setFilters([].slice.call(arguments));
    },

    /**
     * @param {Array} filters Packed ilters array
     */
    setFilters: function (filters) {
        // Remove existing filters
        this.disconnectFilters();

        // Insert filters if filter array not empty
        if (filters && filters.length) {
            this.filters = filters;

            // Disconnect direct path before inserting filters
            this.analyser.disconnect();

            // Connect each filter in turn
            filters.reduce(function (prev, curr) {
                prev.connect(curr);
                return curr;
            }, this.analyser).connect(this.gainNode);
        }

    },

    createScriptNode: function () {
        if (this.ac.createScriptProcessor) {
            this.scriptNode = this.ac.createScriptProcessor(this.scriptBufferSize);
        } else {
            this.scriptNode = this.ac.createJavaScriptNode(this.scriptBufferSize);
        }

        this.scriptNode.connect(this.ac.destination);
    },

    addOnAudioProcess: function () {
        var my = this;
		if(this.browser == 'other') {
			this.scriptNode.onaudioprocess = function () {
			var time = my.getCurrentTime();
			if (time >= my.scheduledPause) { 
				my.setState(my.PAUSED_STATE);
				my.source.stop(0);
				my.fireEvent('pause');
			}
				else if (time >= my.scheduledLoopPoint) {
					my.setPreGain(0);
					my.un('audioprocess'); // we don't want cursor to move past our loop point
				} else if (my.state === my.states[my.PLAYING_STATE]) {
					my.fireEvent('audioprocess', time);
				}
			};
		}
		else {  
			// chrome/opera playback
			this.scriptNode.onaudioprocess = function () {
				var time = my.getCurrentTime();
				if (time >= my.scheduledLoopPoint) {
				    my.un('audioprocess'); // we don't want cursor to move past our loop point
				} else if (my.state === my.states[my.PLAYING_STATE]) {
					my.fireEvent('audioprocess', time);
				}
			};		
		}
    },
	
    removeOnAudioProcess: function () {
        this.scriptNode.onaudioprocess = null;
    },

    createAnalyserNode: function () {
        this.analyser = this.ac.createAnalyser();
        this.analyser.connect(this.gainNode);
    },

    /**
     * Create the gain node needed to control the playback volume.
     */
    createVolumeNode: function () {
        // Create gain node using the AudioContext
        if (this.ac.createGain) {
            this.gainNode = this.ac.createGain();
        } else {
            this.gainNode = this.ac.createGainNode();
        }
        // Add the gain node to the graph
        this.gainNode.connect(this.ac.destination);
    },

	createPreGain: function () {
        if (this.ac.createGain) {
            this.preGainNode = this.ac.createGain();
        } else {
            this.preGainNode = this.ac.createGainNode();
        }		
	},
	
	createEnvGain: function () {
        if (this.ac.createGain) {
            this.envGainNode = this.ac.createGain();
        } else {
            this.envGainNode = this.ac.createGainNode();
        }		
	},

	createCompressorNode: function () {
        if (this.ac.createDynamicsCompressor) {
            this.compressorNode = this.ac.createDynamicsCompressor();
        } else {
            this.compressorNode = this.ac.createDynamicsCompressorNode();
        }	
		this.compressorNode.threshold.value = 0;
		this.compressorNode.ratio.value = 1;
		this.compressorNode.attack.value = 0.07;
		this.compressorNode.release.value = 0.1;
	},


	createLoEQ: function () {
        if (this.ac.createBiquadFilter) {
            this.lo = this.ac.createBiquadFilter();
        } else {
            this.lo = this.ac.createBiquadFilterNode();
        }	

		this.lo.type = "lowshelf";
		this.lo.frequency.value = 250;
		this.lo.gain.value = 0;
	},

	createHiEQ: function () {
        if (this.ac.createBiquadFilter) {
            this.hi = this.ac.createBiquadFilter();
        } else {
            this.hi = this.ac.createBiquadFilterNode();
        }	

		this.hi.type = "highshelf";
		this.hi.frequency.value = 4000;
		this.hi.gain.value = 0;
	},	

	createMidEQ: function () {
        if (this.ac.createBiquadFilter) {
            this.mid = this.ac.createBiquadFilter();
        } else {
            this.mid = this.ac.createBiquadFilterNode();
        }	

		this.mid.type = "peaking";
		this.mid.frequency.value = 1000;
		this.mid.gain.value = 0;
		this.mid.Q.value = 1;
	},	
	
    /**
     * Set the gain to a new value.
     *
     * @param {Number} newGain The new gain, a floating point value
     * between 0 and 1. 0 being no gain and 1 being maximum gain.
     */
    setVolume: function (newGain) {
        this.gainNode.gain.value = newGain;
    },

	
   setPreGain: function (newGain) {
        this.preGainNode.gain.value = newGain;
    },	
	

   setEnvAttack: function (attack) {
        this.attack = attack;	
    },	

   setEnvHold: function (hold) {
        this.hold = hold;	
    },	
	
   setEnvDecay: function (decay) {
        this.decay = decay;	
    },		
	
    setCompThreshold: function (threshold) {
       this.compressorNode.threshold.value = threshold;
    },	

    setCompRatio: function (ratio) {
        this.compressorNode.ratio.value = ratio;
    },	

    setCompAttack: function (attack) {
       this.compressorNode.attack.value = attack;
    },	

    setCompRelease: function (release) {
       this.compressorNode.release.value = release;
    },	

	setLoFreq: function (freq) {
       this.lo.frequency.value = freq;
    },	

	setHiFreq: function (freq) {
       this.hi.frequency.value = freq;
    },	
	
	setMidFreq: function (freq) {
       this.mid.frequency.value = freq;
    },		

	setLoGain: function (gain) {
       this.lo.gain.value = gain;
    },	

	setHiGain: function (gain) {
       this.hi.gain.value = gain;
    },	
	
	setMidGain: function (gain) {
       this.mid.gain.value = gain;
    },
	
	setMidQ: function (q) {
       this.mid.Q.value = q;
    },	

	setBrowser: function(s){
		this.browser = s;
	},
	
    /**
     * Get the current gain.
     *
     * @returns {Number} The current gain, a floating point value
     * between 0 and 1. 0 being no gain and 1 being maximum gain.
     */
    getVolume: function () {
        return this.gainNode.gain.value;
    },

    decodeArrayBuffer: function (arraybuffer, callback, errback) {
        if (!this.offlineAc) {
            this.offlineAc = this.getOfflineAudioContext(this.ac ? this.ac.sampleRate : 44100);
        }
        this.offlineAc.decodeAudioData(arraybuffer, (function (data) {
            callback(data);
        }).bind(this), errback);
    },

    /**
     * Compute the max and min value of the waveform when broken into
     * <length> subranges.
     * @param {Number} How many subranges to break the waveform into.
     * @returns {Array} Array of 2*<length> peaks or array of arrays
     * of peaks consisting of (max, min) values for each subrange.
     */
    getPeaks: function (length) {
        var sampleSize = this.buffer.length / length;
        var sampleStep = ~~(sampleSize / 10) || 1;
        var channels = this.buffer.numberOfChannels;
        var splitPeaks = [];
        var mergedPeaks = [];

        for (var c = 0; c < channels; c++) {
            var peaks = splitPeaks[c] = [];
            var chan = this.buffer.getChannelData(c);

            for (var i = 0; i < length; i++) {
                var start = ~~(i * sampleSize);
                var end = ~~(start + sampleSize);
                var min = chan[0];
                var max = chan[0];

                for (var j = start; j < end; j += sampleStep) {
                    var value = chan[j];

                    if (value > max) {
                        max = value;
                    }

                    if (value < min) {
                        min = value;
                    }
                }

                peaks[2 * i] = max;
                peaks[2 * i + 1] = min;

                if (c == 0 || max > mergedPeaks[2 * i]) {
                    mergedPeaks[2 * i] = max;
                }

                if (c == 0 || min < mergedPeaks[2 * i + 1]) {
                    mergedPeaks[2 * i + 1] = min;
                }
            }
        }

        return this.params.splitChannels ? splitPeaks : mergedPeaks;
    },

    getPlayedPercents: function () {
        return this.state.getPlayedPercents.call(this);
    },

    disconnectSource: function () {
        if (this.source) {
            this.source.disconnect();
        }
    },

    destroy: function () {
        if (!this.isPaused()) {
            this.pause();
        }
        this.unAll();
        this.buffer = null;
        this.disconnectFilters();
        this.disconnectSource();
        this.gainNode.disconnect();
        this.scriptNode.disconnect();
        this.analyser.disconnect();
    },

    load: function (buffer) {
        this.startPosition = 0;
        this.lastPlay = this.ac.currentTime;
        this.buffer = buffer;
        this.createSource();	
    },

    createSource: function () {
        this.disconnectSource();
        this.source = this.ac.createBufferSource();

        //adjust for old browsers.
        this.source.start = this.source.start || this.source.noteGrainOn;
        this.source.stop = this.source.stop || this.source.noteOff;

        this.source.playbackRate.value = this.playbackRate;
        this.source.buffer = this.buffer;
        this.source.connect(this.analyser);
    },
	
    isPaused: function () {
        return this.state !== this.states[this.PLAYING_STATE];
    },

    getDuration: function () {
        if (!this.buffer) {
            return 0;
        }
        return this.buffer.duration;
    },

    seekTo: function (start, end) {
        this.scheduledPause = null;

        if (start == null) {
            start = this.getCurrentTime();
            if (start >= this.getDuration()) {
                start = 0;
            }
        }
        if (end == null) {
            end = this.getDuration();
        }

        this.startPosition = start;
        this.lastPlay = this.ac.currentTime;

        if (this.state === this.states[this.FINISHED_STATE]) {
            this.setState(this.PAUSED_STATE);
        }

        return { start: start, end: end };
    },

    getPlayedTime: function () {
        return (this.ac.currentTime - this.lastPlay) * this.playbackRate;
    },

    /**
     * Plays the loaded audio region.
     *
     * @param {Number} start Start offset in seconds,
     * relative to the beginning of a clip.
     * @param {Number} end When to stop
     * relative to the beginning of a clip.
     */
    play: function (start, end) {
        // need to re-create source on each playback
        this.createSource();
		this.setPreGain(1);
        var adjustedTime = this.seekTo(start, end);

        start = adjustedTime.start;
        end = adjustedTime.end;

        this.scheduledPause = end;

        this.source.start(0, start, end - start);

        this.setState(this.PLAYING_STATE);

        this.fireEvent('play');
    },

	
	slices: [],
	
	resetSlices: function() {
		this.slices = [];	
	},
	
	
	getSlices: function() {
		return this.slices;
	},
	
	
	render: function(start, end, index) {
		var frames= Math.floor((end - start) * this.ac.sampleRate / this.playbackRate);  // 
		var offset = 264;
		/*
 		 compensation for latency in the compressor: 264 samples. It's attested to on net too: 
		 http://stackoverflow.com/questions/25807887/using-an-offline-context-in-the-web-audio-api-shift-the-signal-of-264-samples
		 observed in FF, Chrome and Opera
		*/
		var ctx = new OfflineAudioContext(this.buffer.numberOfChannels, frames + offset, this.ac.sampleRate); 
																			// ^^^ keep an eye on this offset
		this.source = ctx.createBufferSource();
		this.source.start = this.source.start || this.source.noteGrainOn;
		this.source.stop = this.source.stop || this.source.noteOff;
		this.source.buffer = this.buffer;
		this.source.playbackRate.value = this.playbackRate;	

		// mfw i realised i could not use the same signal chain from the original audio context
		// this was thrown together in a huff. but it works, lol
		var env = ctx.createGain();
		var compressor = ctx.createDynamicsCompressor();
		var gain = ctx.createGain();
		
		compressor.threshold.value = this.compressorNode.threshold.value;
		compressor.ratio.value = this.compressorNode.ratio.value;
		compressor.attack.value = this.compressorNode.attack.value;
		compressor.release.value = this.compressorNode.release.value;
		gain.gain.value = this.gainNode.gain.value;

		var l = ctx.createBiquadFilter();
		var m = ctx.createBiquadFilter();
		var h = ctx.createBiquadFilter();

		l.type = "lowshelf";
		m.type = "peaking";
		h.type = "highshelf";  

		l.frequency.value = this.lo.frequency.value;
		m.frequency.value = this.mid.frequency.value;
		h.frequency.value = this.hi.frequency.value;

		l.gain.value = this.lo.gain.value;
		m.gain.value = this.mid.gain.value;
		h.gain.value = this.hi.gain.value;
		
		m.Q.value = this.mid.Q.value;

		this.source.connect(env);
		
		env.connect(compressor);
		compressor.connect(gain);

		gain.connect(l);
		l.connect(m);
		m.connect(h);
		h.connect(ctx.destination);

 		env.gain.cancelScheduledValues(0);		
		if(this.attack > 0) {
			env.gain.setValueAtTime(0.0, ctx.currentTime);
			env.gain.linearRampToValueAtTime(1, ctx.currentTime + this.attack);
		}	
		if(this.decay < this.DECAY_MAX) {
			var t = new Float32Array(2);
			t[0] = 1.0;
			t[1] = 0.0;
			env.gain.setValueCurveAtTime(t, ctx.currentTime + this.attack + this.hold, this.decay);
		}	 
		this.source.start(0,start); 
		ctx.startRendering();
		var my = this;
		var index = index;
		ctx.oncomplete = function(e) {
			my.slices.push({slice: e.renderedBuffer, index: index});
			my.fireEvent("render", e.renderedBuffer);
		}
	},	 
	

	playExtended: function (start, loop, end, render, index) {   // end = extended end, loop = end of segment 
		if(render == true) {
			this.render(start, loop, index);
			return;
		}
		var my = this;
        this.createSource();
		this.setPreGain(1);
        var adjustedTime = this.seekTo(start, end);
		this.scheduledLoopPoint = loop;
        this.scheduledPause = end;  
		this.source.loop = true;
		this.source.loopStart = start;
		this.source.loopEnd = loop;
		this.preGainNode.gain.cancelScheduledValues(0);	
		this.envGainNode.gain.cancelScheduledValues(0);	
		this.envGainNode.gain.value = 1.0;
		if(this.attack > 0) {
			this.envGainNode.gain.setValueAtTime(0.0, this.ac.currentTime);
			this.envGainNode.gain.linearRampToValueAtTime(1, this.ac.currentTime + this.attack);
	    }
		if(this.decay < this.DECAY_MAX) {
			var t = new Float32Array(2);
			t[0] = 1.0;
			t[1] = 0.0;
			this.envGainNode.gain.setValueCurveAtTime(t, this.ac.currentTime + this.attack + this.hold, this.decay);
		}

		this.source.start(0,start); 
		if(this.browser == "chrome-opera") {
			var length = (end - start)  / this.playbackRate;
			var loopPt = (loop - start) / this.playbackRate;
			this.preGainNode.gain.setValueAtTime(0.0, this.ac.currentTime + loopPt);	
			this.source.stop(this.ac.currentTime + length); 
			this.source.onended = function() {
				my.setState(my.PAUSED_STATE);
				my.fireEvent('pause');		
			}
		}
		/* 
		Chrome and Opera seem to give the most accurate timing with the above method; Firefox stops slightly short. But letting WaveSurfer's 
		monitoring scriptprocessor ascertain when to stop makes Firefox (& default browsers) err on playing slightly too much rather than too little. 
		If it stops short of playing the full segment, it may miss glitches at the end that later get rendered.
		*/ 
        this.setState(this.PLAYING_STATE);
        this.fireEvent('play');
    },	
	

    /**
     * Pauses the loaded audio.
     */
    pause: function () {
        this.scheduledPause = null;

        this.startPosition += this.getPlayedTime();
        this.source && this.source.stop(0);

        this.setState(this.PAUSED_STATE);

        this.fireEvent('pause');
    },

    /**
    *   Returns the current time in seconds relative to the audioclip's duration.
    */
    getCurrentTime: function () {
        return this.state.getCurrentTime.call(this);
    },

    /**
     * Set the audio source playback rate.
     */
    setPlaybackRate: function (value) {
        value = value || 1;
        if (this.isPaused()) {
            this.playbackRate = value;
        } else {
            this.pause();
            this.playbackRate = value;
            this.play();
        }
    }
};

WaveSurfer.WebAudio.state = {};

WaveSurfer.WebAudio.state.playing = {
    init: function () {
       this.addOnAudioProcess();
    },
    getPlayedPercents: function () {
        var duration = this.getDuration();
        return (this.getCurrentTime() / duration) || 0;
    },
    getCurrentTime: function () {
        return this.startPosition + this.getPlayedTime();
    }
};

WaveSurfer.WebAudio.state.paused = {
    init: function () {
        this.removeOnAudioProcess();
    },
    getPlayedPercents: function () {
        var duration = this.getDuration();
        return (this.getCurrentTime() / duration) || 0;
    },
    getCurrentTime: function () {
        return this.startPosition;
    }
};

WaveSurfer.WebAudio.state.finished = {
    init: function () {
        this.removeOnAudioProcess();
        this.fireEvent('finish');
    },
    getPlayedPercents: function () {
        return 1;
    },
    getCurrentTime: function () {
        return this.getDuration();
    }
};

WaveSurfer.util.extend(WaveSurfer.WebAudio, WaveSurfer.Observer);

WaveSurfer.MediaElement = Object.create(WaveSurfer.WebAudio);

WaveSurfer.util.extend(WaveSurfer.MediaElement, {
    init: function (params) {
        this.params = params;

        // Dummy media to catch errors
        this.media = {
            currentTime: 0,
            duration: 0,
            paused: true,
            playbackRate: 1,
            play: function () {},
            pause: function () {}
        };

        this.mediaType = params.mediaType.toLowerCase();
        this.elementPosition = params.elementPosition;
    },

    load: function (url, container, peaks) {
        var my = this;

        var media = document.createElement(this.mediaType);
        media.controls = this.params.mediaControls;
        media.autoplay = this.params.autoplay || false;
        media.preload = 'auto';
        media.src = url;
        media.style.width = '100%';

        media.addEventListener('error', function () {
            my.fireEvent('error', 'Error loading media element');
        });

        media.addEventListener('canplay', function () {
            my.fireEvent('canplay');
        });

        media.addEventListener('ended', function () {
            my.fireEvent('finish');
        });

        media.addEventListener('timeupdate', function () {
            my.fireEvent('audioprocess', my.getCurrentTime());
        });

        var prevMedia = container.querySelector(this.mediaType);
        if (prevMedia) {
            container.removeChild(prevMedia);
        }
        container.appendChild(media);

        this.media = media;
        this.peaks = peaks;
        this.onPlayEnd = null;
        this.buffer = null;
        this.setPlaybackRate(this.playbackRate);
    },

    isPaused: function () {
        return !this.media || this.media.paused;
    },

    getDuration: function () {
        var duration = this.media.duration;
        if (duration >= Infinity) { // streaming audio
            duration = this.media.seekable.end();
        }
        return duration;
    },

    getCurrentTime: function () {
        return this.media && this.media.currentTime;
    },

    getPlayedPercents: function () {
        return (this.getCurrentTime() / this.getDuration()) || 0;
    },

    /**
     * Set the audio source playback rate.
     */
    setPlaybackRate: function (value) {
        this.playbackRate = value || 1;
        this.media.playbackRate = this.playbackRate;
    },

    seekTo: function (start) {
        if (start != null) {
            this.media.currentTime = start;
        }
        this.clearPlayEnd();
    },

    /**
     * Plays the loaded audio region.
     *
     * @param {Number} start Start offset in seconds,
     * relative to the beginning of a clip.
     * @param {Number} end End offset in seconds,
     * relative to the beginning of a clip.
     */
    play: function (start, end) {
        this.seekTo(start);
        this.media.play();
        end && this.setPlayEnd(end);
        this.fireEvent('play');
    },

    /**
     * Pauses the loaded audio.
     */
    pause: function () {
        this.media && this.media.pause();
        this.clearPlayEnd();
        this.fireEvent('pause');
    },

    setPlayEnd: function (end) {
        var my = this;
        this.onPlayEnd = function (time) {
            if (time >= end) {
                my.pause();
                my.seekTo(end);
            }
        };
        this.on('audioprocess', this.onPlayEnd);
    },

    clearPlayEnd: function () {
        if (this.onPlayEnd) {
            this.un('audioprocess', this.onPlayEnd);
            this.onPlayEnd = null;
        }
    },

    getPeaks: function (length) {
        if (this.buffer) {
            return WaveSurfer.WebAudio.getPeaks.call(this, length);
        }
        return this.peaks || [];
    },

    getVolume: function () {
        return this.media.volume;
    },

    setVolume: function (val) {
        this.media.volume = val;
    },

    destroy: function () {
        this.pause();
        this.unAll();
        this.media && this.media.parentNode && this.media.parentNode.removeChild(this.media);
        this.media = null;
    }
});

//For backwards compatibility
WaveSurfer.AudioElement = WaveSurfer.MediaElement;

WaveSurfer.Drawer = {
    init: function (container, params) {
        this.container = container;
        this.params = params;

        this.width = 0;
        this.height = params.height * this.params.pixelRatio;

        this.lastPos = 0;

        this.createWrapper();
        this.createElements();
    },

    createWrapper: function () {
        this.wrapper = this.container.appendChild(
            document.createElement('wave')
        );

        this.style(this.wrapper, {
            display: 'block',
            position: 'relative',
            userSelect: 'none',
            webkitUserSelect: 'none',
            height: this.params.height + 'px'
        });

        if (this.params.fillParent || this.params.scrollParent) {
            this.style(this.wrapper, {
                width: '100%',
                overflowX: this.params.hideScrollbar ? 'hidden' : 'auto',
                overflowY: 'hidden'
            });
        }

        this.setupWrapperEvents();
    },

    handleEvent: function (e) {
        e.preventDefault();
        var bbox = this.wrapper.getBoundingClientRect();
        return ((e.clientX - bbox.left + this.wrapper.scrollLeft) / this.wrapper.scrollWidth) || 0;
    },

    setupWrapperEvents: function () {
        var my = this;

        this.wrapper.addEventListener('click', function (e) {
            var scrollbarHeight = my.wrapper.offsetHeight - my.wrapper.clientHeight;
            if (scrollbarHeight != 0) {
                // scrollbar is visible.  Check if click was on it
                var bbox = my.wrapper.getBoundingClientRect();
                if (e.clientY >= bbox.bottom - scrollbarHeight) {
                    // ignore mousedown as it was on the scrollbar
                    return;
                }
            }

            if (my.params.interact) {	
                my.fireEvent('click', e, my.handleEvent(e));
            }
        });

        this.wrapper.addEventListener('scroll', function (e) {
            my.fireEvent('scroll', e);
        });
    },

    drawPeaks: function (peaks, length) {
        this.resetScroll();
        this.setWidth(length);

        this.params.barWidth ?
            this.drawBars(peaks) :
            this.drawWave(peaks);
    },

    style: function (el, styles) {
        Object.keys(styles).forEach(function (prop) {
            if (el.style[prop] !== styles[prop]) {
                el.style[prop] = styles[prop];
            }
        });
        return el;
    },

    resetScroll: function () {
        if (this.wrapper !== null) {
            this.wrapper.scrollLeft = 0;
        }
    },

    recenter: function (percent) {
        var position = this.wrapper.scrollWidth * percent;
        this.recenterOnPosition(position, true);
    },

    recenterOnPosition: function (position, immediate) {
        var scrollLeft = this.wrapper.scrollLeft;
        var half = ~~(this.wrapper.clientWidth / 2);
        var target = position - half;
        var offset = target - scrollLeft;
        var maxScroll = this.wrapper.scrollWidth - this.wrapper.clientWidth;

        if (maxScroll == 0) {
            // no need to continue if scrollbar is not there
            return;
        }

        // if the cursor is currently visible...
        if (!immediate && -half <= offset && offset < half) {
            // we'll limit the "re-center" rate.
            var rate = 5;
            offset = Math.max(-rate, Math.min(rate, offset));
            target = scrollLeft + offset;
        }

        // limit target to valid range (0 to maxScroll)
        target = Math.max(0, Math.min(maxScroll, target));
        // no use attempting to scroll if we're not moving
        if (target != scrollLeft) {
            this.wrapper.scrollLeft = target;
        }

    },

    getWidth: function () {
        return Math.round(this.container.clientWidth * this.params.pixelRatio);
    },

    setWidth: function (width) {
        if (width == this.width) { return; }

        this.width = width;

        if (this.params.fillParent || this.params.scrollParent) {
            this.style(this.wrapper, {
                width: ''
            });
        } else {
            this.style(this.wrapper, {
                width: ~~(this.width / this.params.pixelRatio) + 'px'
            });
        }

        this.updateSize();
    },

    setHeight: function (height) {
        if (height == this.height) { return; }
        this.height = height;
        this.style(this.wrapper, {
            height: ~~(this.height / this.params.pixelRatio) + 'px'
        });
        this.updateSize();
    },

    progress: function (progress) {
        var minPxDelta = 1 / this.params.pixelRatio;
        var pos = Math.round(progress * this.width) * minPxDelta;

        if (pos < this.lastPos || pos - this.lastPos >= minPxDelta) {
            this.lastPos = pos;

            if (this.params.scrollParent && this.params.autoCenter) {
                var newPos = ~~(this.wrapper.scrollWidth * progress);
                this.recenterOnPosition(newPos);
            }

            this.updateProgress(progress);
        }
    },

    destroy: function () {
        this.unAll();
        if (this.wrapper) {
            this.container.removeChild(this.wrapper);
            this.wrapper = null;
        }
    },

    /* Renderer-specific methods */
    createElements: function () {},

    updateSize: function () {},

    drawWave: function (peaks, max) {},

    clearWave: function () {},

    updateProgress: function (position) {}
};

WaveSurfer.util.extend(WaveSurfer.Drawer, WaveSurfer.Observer);

WaveSurfer.Drawer.Canvas = Object.create(WaveSurfer.Drawer);

WaveSurfer.util.extend(WaveSurfer.Drawer.Canvas, {
    createElements: function () {
        var waveCanvas = this.wrapper.appendChild(
            this.style(document.createElement('canvas'), {
                position: 'absolute',
                zIndex: 1,
                left: 0,
                top: 0,
                bottom: 0
            })
        );
        this.waveCc = waveCanvas.getContext('2d');

        this.progressWave = this.wrapper.appendChild(
            this.style(document.createElement('wave'), {
                position: 'absolute',
                zIndex: 2,
                left: 0,
                top: 0,
                bottom: 0,
                overflow: 'hidden',
                width: '0',
                display: 'none',
                boxSizing: 'border-box',
                borderRightStyle: 'solid',
                borderRightWidth: this.params.cursorWidth + 'px',
                borderRightColor: this.params.cursorColor
            })
        );

        if (this.params.waveColor != this.params.progressColor) {
            var progressCanvas = this.progressWave.appendChild(
                document.createElement('canvas')
            );
            this.progressCc = progressCanvas.getContext('2d');
        }
    },

    updateSize: function () {
        var width = Math.round(this.width / this.params.pixelRatio);

        this.waveCc.canvas.width = this.width;
        this.waveCc.canvas.height = this.height;
        this.style(this.waveCc.canvas, { width: width + 'px'});

        this.style(this.progressWave, { display: 'block'});

        if (this.progressCc) {
            this.progressCc.canvas.width = this.width;
            this.progressCc.canvas.height = this.height;
            this.style(this.progressCc.canvas, { width: width + 'px'});
        }

        this.clearWave();
    },

    clearWave: function () {
        this.waveCc.clearRect(0, 0, this.width, this.height);
        if (this.progressCc) {
            this.progressCc.clearRect(0, 0, this.width, this.height);
        }
    },

    drawBars: function (peaks, channelIndex) {
        // Split channels
        if (peaks[0] instanceof Array) {
            var channels = peaks;
            if (this.params.splitChannels) {
                this.setHeight(channels.length * this.params.height * this.params.pixelRatio);
                channels.forEach(this.drawBars, this);
                return;
            } else {
                peaks = channels[0];
            }
        }

        // Bar wave draws the bottom only as a reflection of the top,
        // so we don't need negative values
        var hasMinVals = [].some.call(peaks, function (val) { return val < 0; });
        if (hasMinVals) {
            peaks = [].filter.call(peaks, function (_, index) { return index % 2 == 0; });
        }

        // A half-pixel offset makes lines crisp
        var $ = 0.5 / this.params.pixelRatio;
        var width = this.width;
        var height = this.params.height * this.params.pixelRatio;
        var offsetY = height * channelIndex || 0;
        var halfH = height / 2;
        var length = peaks.length;
        var bar = this.params.barWidth * this.params.pixelRatio;
        var gap = Math.max(this.params.pixelRatio, ~~(bar / 2));
        var step = bar + gap;

        var absmax = 1;
        if (this.params.normalize) {
            absmax = Math.max.apply(Math, peaks);
        }

        var scale = length / width;

        this.waveCc.fillStyle = this.params.waveColor;
        if (this.progressCc) {
            this.progressCc.fillStyle = this.params.progressColor;
        }

        [ this.waveCc, this.progressCc ].forEach(function (cc) {
            if (!cc) { return; }

            for (var i = 0; i < width; i += step) {
                var h = Math.round(peaks[Math.floor(i * scale)] / absmax * halfH);
                cc.fillRect(i + $, halfH - h + offsetY, bar + $, h * 2);
            }
        }, this);
    },

    drawWave: function (peaks, channelIndex) {
        // Split channels
        if (peaks[0] instanceof Array) {
            var channels = peaks;
            if (this.params.splitChannels) {
                this.setHeight(channels.length * this.params.height * this.params.pixelRatio);
                channels.forEach(this.drawWave, this);
                return;
            } else {
                peaks = channels[0];
            }
        }

        // Support arrays without negative peaks
        var hasMinValues = [].some.call(peaks, function (val) { return val < 0; });
        if (!hasMinValues) {
            var reflectedPeaks = [];
            for (var i = 0, len = peaks.length; i < len; i++) {
                reflectedPeaks[2 * i] = peaks[i];
                reflectedPeaks[2 * i + 1] = -peaks[i];
            }
            peaks = reflectedPeaks;
        }

        // A half-pixel offset makes lines crisp
        var $ = 0.5 / this.params.pixelRatio;
        var height = this.params.height * this.params.pixelRatio;
        var offsetY = height * channelIndex || 0;
        var halfH = height / 2;
        var length = ~~(peaks.length / 2);

        var scale = 1;
        if (this.params.fillParent && this.width != length) {
            scale = this.width / length;
        }

        var absmax = 1.1;
		// changed to give bit of headroom for handles
        if (this.params.normalize) {
            var max = Math.max.apply(Math, peaks);
            var min = Math.min.apply(Math, peaks);
            absmax = -min > max ? -min : max;
        }

        this.waveCc.fillStyle = this.params.waveColor;
        if (this.progressCc) {
            this.progressCc.fillStyle = this.params.progressColor;
        }

        [ this.waveCc, this.progressCc ].forEach(function (cc) {
            if (!cc) { return; }

            cc.beginPath();
            cc.moveTo($, halfH + offsetY);

            for (var i = 0; i < length; i++) {
                var h = Math.round(peaks[2 * i] / absmax * halfH);
                cc.lineTo(i * scale + $, halfH - h + offsetY);
            }

            // Draw the bottom edge going backwards, to make a single
            // closed hull to fill.
            for (var i = length - 1; i >= 0; i--) {
                var h = Math.round(peaks[2 * i + 1] / absmax * halfH);
                cc.lineTo(i * scale + $, halfH - h + offsetY);
            }

            cc.closePath();
            cc.fill();

            // Always draw a median line
            cc.fillRect(0, halfH + offsetY - $, this.width, $);
        }, this);
    },

    updateProgress: function (progress) {
        var pos = Math.round(
            this.width * progress
        ) / this.params.pixelRatio;
        this.style(this.progressWave, { width: pos + 'px' });
    }
});

/* Init from HTML */
(function () {
    var init = function () {
        var containers = document.querySelectorAll('wavesurfer');

        Array.prototype.forEach.call(containers, function (el) {
            var params = WaveSurfer.util.extend({
                container: el,
                backend: 'MediaElement',
                mediaControls: true
            }, el.dataset);

            el.style.display = 'block';

            var wavesurfer = WaveSurfer.create(params);

            if (el.dataset.peaks) {
                var peaks = JSON.parse(el.dataset.peaks);
            }

            wavesurfer.load(el.dataset.url, peaks);
        });
    };

    if (document.readyState === 'complete') {
        init();
    } else {
        window.addEventListener('load', init);
    }
}());
/*!
@license
KissFFT Copyright (c) 2003-2010, Mark Borgerding

All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:

    * Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
    * Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
    * Neither the author nor the names of any contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

var FFTExtModule = function(Module) {
  Module = Module || {};

var Module;if(!Module)Module=(typeof FFTExtModule!=="undefined"?FFTExtModule:null)||{};var moduleOverrides={};for(var key in Module){if(Module.hasOwnProperty(key)){moduleOverrides[key]=Module[key]}}var ENVIRONMENT_IS_WEB=typeof window==="object";var ENVIRONMENT_IS_WORKER=typeof importScripts==="function";var ENVIRONMENT_IS_NODE=typeof process==="object"&&typeof require==="function"&&!ENVIRONMENT_IS_WEB&&!ENVIRONMENT_IS_WORKER;var ENVIRONMENT_IS_SHELL=!ENVIRONMENT_IS_WEB&&!ENVIRONMENT_IS_NODE&&!ENVIRONMENT_IS_WORKER;if(ENVIRONMENT_IS_NODE){if(!Module["print"])Module["print"]=function print(x){process["stdout"].write(x+"\n")};if(!Module["printErr"])Module["printErr"]=function printErr(x){process["stderr"].write(x+"\n")};var nodeFS=require("fs");var nodePath=require("path");Module["read"]=function read(filename,binary){filename=nodePath["normalize"](filename);var ret=nodeFS["readFileSync"](filename);if(!ret&&filename!=nodePath["resolve"](filename)){filename=path.join(__dirname,"..","src",filename);ret=nodeFS["readFileSync"](filename)}if(ret&&!binary)ret=ret.toString();return ret};Module["readBinary"]=function readBinary(filename){var ret=Module["read"](filename,true);if(!ret.buffer){ret=new Uint8Array(ret)}assert(ret.buffer);return ret};Module["load"]=function load(f){globalEval(read(f))};if(!Module["thisProgram"]){if(process["argv"].length>1){Module["thisProgram"]=process["argv"][1].replace(/\\/g,"/")}else{Module["thisProgram"]="unknown-program"}}Module["arguments"]=process["argv"].slice(2);if(typeof module!=="undefined"){module["exports"]=Module}process["on"]("uncaughtException",(function(ex){if(!(ex instanceof ExitStatus)){throw ex}}));Module["inspect"]=(function(){return"[Emscripten Module object]"})}else if(ENVIRONMENT_IS_SHELL){if(!Module["print"])Module["print"]=print;if(typeof printErr!="undefined")Module["printErr"]=printErr;if(typeof read!="undefined"){Module["read"]=read}else{Module["read"]=function read(){throw"no read() available (jsc?)"}}Module["readBinary"]=function readBinary(f){if(typeof readbuffer==="function"){return new Uint8Array(readbuffer(f))}var data=read(f,"binary");assert(typeof data==="object");return data};if(typeof scriptArgs!="undefined"){Module["arguments"]=scriptArgs}else if(typeof arguments!="undefined"){Module["arguments"]=arguments}}else if(ENVIRONMENT_IS_WEB||ENVIRONMENT_IS_WORKER){Module["read"]=function read(url){var xhr=new XMLHttpRequest;xhr.open("GET",url,false);xhr.send(null);return xhr.responseText};if(typeof arguments!="undefined"){Module["arguments"]=arguments}if(typeof console!=="undefined"){if(!Module["print"])Module["print"]=function print(x){console.log(x)};if(!Module["printErr"])Module["printErr"]=function printErr(x){console.log(x)}}else{var TRY_USE_DUMP=false;if(!Module["print"])Module["print"]=TRY_USE_DUMP&&typeof dump!=="undefined"?(function(x){dump(x)}):(function(x){})}if(ENVIRONMENT_IS_WORKER){Module["load"]=importScripts}if(typeof Module["setWindowTitle"]==="undefined"){Module["setWindowTitle"]=(function(title){document.title=title})}}else{throw"Unknown runtime environment. Where are we?"}function globalEval(x){eval.call(null,x)}if(!Module["load"]&&Module["read"]){Module["load"]=function load(f){globalEval(Module["read"](f))}}if(!Module["print"]){Module["print"]=(function(){})}if(!Module["printErr"]){Module["printErr"]=Module["print"]}if(!Module["arguments"]){Module["arguments"]=[]}if(!Module["thisProgram"]){Module["thisProgram"]="./this.program"}Module.print=Module["print"];Module.printErr=Module["printErr"];Module["preRun"]=[];Module["postRun"]=[];for(var key in moduleOverrides){if(moduleOverrides.hasOwnProperty(key)){Module[key]=moduleOverrides[key]}}var Runtime={setTempRet0:(function(value){tempRet0=value}),getTempRet0:(function(){return tempRet0}),stackSave:(function(){return STACKTOP}),stackRestore:(function(stackTop){STACKTOP=stackTop}),getNativeTypeSize:(function(type){switch(type){case"i1":case"i8":return 1;case"i16":return 2;case"i32":return 4;case"i64":return 8;case"float":return 4;case"double":return 8;default:{if(type[type.length-1]==="*"){return Runtime.QUANTUM_SIZE}else if(type[0]==="i"){var bits=parseInt(type.substr(1));assert(bits%8===0);return bits/8}else{return 0}}}}),getNativeFieldSize:(function(type){return Math.max(Runtime.getNativeTypeSize(type),Runtime.QUANTUM_SIZE)}),STACK_ALIGN:16,prepVararg:(function(ptr,type){if(type==="double"||type==="i64"){if(ptr&7){assert((ptr&7)===4);ptr+=4}}else{assert((ptr&3)===0)}return ptr}),getAlignSize:(function(type,size,vararg){if(!vararg&&(type=="i64"||type=="double"))return 8;if(!type)return Math.min(size,8);return Math.min(size||(type?Runtime.getNativeFieldSize(type):0),Runtime.QUANTUM_SIZE)}),dynCall:(function(sig,ptr,args){if(args&&args.length){if(!args.splice)args=Array.prototype.slice.call(args);args.splice(0,0,ptr);return Module["dynCall_"+sig].apply(null,args)}else{return Module["dynCall_"+sig].call(null,ptr)}}),functionPointers:[],addFunction:(function(func){for(var i=0;i<Runtime.functionPointers.length;i++){if(!Runtime.functionPointers[i]){Runtime.functionPointers[i]=func;return 2*(1+i)}}throw"Finished up all reserved function pointers. Use a higher value for RESERVED_FUNCTION_POINTERS."}),removeFunction:(function(index){Runtime.functionPointers[(index-2)/2]=null}),warnOnce:(function(text){if(!Runtime.warnOnce.shown)Runtime.warnOnce.shown={};if(!Runtime.warnOnce.shown[text]){Runtime.warnOnce.shown[text]=1;Module.printErr(text)}}),funcWrappers:{},getFuncWrapper:(function(func,sig){assert(sig);if(!Runtime.funcWrappers[sig]){Runtime.funcWrappers[sig]={}}var sigCache=Runtime.funcWrappers[sig];if(!sigCache[func]){sigCache[func]=function dynCall_wrapper(){return Runtime.dynCall(sig,func,arguments)}}return sigCache[func]}),getCompilerSetting:(function(name){throw"You must build with -s RETAIN_COMPILER_SETTINGS=1 for Runtime.getCompilerSetting or emscripten_get_compiler_setting to work"}),stackAlloc:(function(size){var ret=STACKTOP;STACKTOP=STACKTOP+size|0;STACKTOP=STACKTOP+15&-16;return ret}),staticAlloc:(function(size){var ret=STATICTOP;STATICTOP=STATICTOP+size|0;STATICTOP=STATICTOP+15&-16;return ret}),dynamicAlloc:(function(size){var ret=DYNAMICTOP;DYNAMICTOP=DYNAMICTOP+size|0;DYNAMICTOP=DYNAMICTOP+15&-16;if(DYNAMICTOP>=TOTAL_MEMORY){var success=enlargeMemory();if(!success){DYNAMICTOP=ret;return 0}}return ret}),alignMemory:(function(size,quantum){var ret=size=Math.ceil(size/(quantum?quantum:16))*(quantum?quantum:16);return ret}),makeBigInt:(function(low,high,unsigned){var ret=unsigned?+(low>>>0)+ +(high>>>0)*+4294967296:+(low>>>0)+ +(high|0)*+4294967296;return ret}),GLOBAL_BASE:8,QUANTUM_SIZE:4,__dummy__:0};Module["Runtime"]=Runtime;var __THREW__=0;var ABORT=false;var EXITSTATUS=0;var undef=0;var tempValue,tempInt,tempBigInt,tempInt2,tempBigInt2,tempPair,tempBigIntI,tempBigIntR,tempBigIntS,tempBigIntP,tempBigIntD,tempDouble,tempFloat;var tempI64,tempI64b;var tempRet0,tempRet1,tempRet2,tempRet3,tempRet4,tempRet5,tempRet6,tempRet7,tempRet8,tempRet9;function assert(condition,text){if(!condition){abort("Assertion failed: "+text)}}var globalScope=this;function getCFunc(ident){var func=Module["_"+ident];if(!func){try{func=eval("_"+ident)}catch(e){}}assert(func,"Cannot call unknown function "+ident+" (perhaps LLVM optimizations or closure removed it?)");return func}var cwrap,ccall;((function(){var JSfuncs={"stackSave":(function(){Runtime.stackSave()}),"stackRestore":(function(){Runtime.stackRestore()}),"arrayToC":(function(arr){var ret=Runtime.stackAlloc(arr.length);writeArrayToMemory(arr,ret);return ret}),"stringToC":(function(str){var ret=0;if(str!==null&&str!==undefined&&str!==0){ret=Runtime.stackAlloc((str.length<<2)+1);writeStringToMemory(str,ret)}return ret})};var toC={"string":JSfuncs["stringToC"],"array":JSfuncs["arrayToC"]};ccall=function ccallFunc(ident,returnType,argTypes,args,opts){var func=getCFunc(ident);var cArgs=[];var stack=0;if(args){for(var i=0;i<args.length;i++){var converter=toC[argTypes[i]];if(converter){if(stack===0)stack=Runtime.stackSave();cArgs[i]=converter(args[i])}else{cArgs[i]=args[i]}}}var ret=func.apply(null,cArgs);if(returnType==="string")ret=Pointer_stringify(ret);if(stack!==0){if(opts&&opts.async){EmterpreterAsync.asyncFinalizers.push((function(){Runtime.stackRestore(stack)}));return}Runtime.stackRestore(stack)}return ret};var sourceRegex=/^function\s*\(([^)]*)\)\s*{\s*([^*]*?)[\s;]*(?:return\s*(.*?)[;\s]*)?}$/;function parseJSFunc(jsfunc){var parsed=jsfunc.toString().match(sourceRegex).slice(1);return{arguments:parsed[0],body:parsed[1],returnValue:parsed[2]}}var JSsource={};for(var fun in JSfuncs){if(JSfuncs.hasOwnProperty(fun)){JSsource[fun]=parseJSFunc(JSfuncs[fun])}}cwrap=function cwrap(ident,returnType,argTypes){argTypes=argTypes||[];var cfunc=getCFunc(ident);var numericArgs=argTypes.every((function(type){return type==="number"}));var numericRet=returnType!=="string";if(numericRet&&numericArgs){return cfunc}var argNames=argTypes.map((function(x,i){return"$"+i}));var funcstr="(function("+argNames.join(",")+") {";var nargs=argTypes.length;if(!numericArgs){funcstr+="var stack = "+JSsource["stackSave"].body+";";for(var i=0;i<nargs;i++){var arg=argNames[i],type=argTypes[i];if(type==="number")continue;var convertCode=JSsource[type+"ToC"];funcstr+="var "+convertCode.arguments+" = "+arg+";";funcstr+=convertCode.body+";";funcstr+=arg+"="+convertCode.returnValue+";"}}var cfuncname=parseJSFunc((function(){return cfunc})).returnValue;funcstr+="var ret = "+cfuncname+"("+argNames.join(",")+");";if(!numericRet){var strgfy=parseJSFunc((function(){return Pointer_stringify})).returnValue;funcstr+="ret = "+strgfy+"(ret);"}if(!numericArgs){funcstr+=JSsource["stackRestore"].body.replace("()","(stack)")+";"}funcstr+="return ret})";return eval(funcstr)}}))();Module["ccall"]=ccall;Module["cwrap"]=cwrap;function setValue(ptr,value,type,noSafe){type=type||"i8";if(type.charAt(type.length-1)==="*")type="i32";switch(type){case"i1":HEAP8[ptr>>0]=value;break;case"i8":HEAP8[ptr>>0]=value;break;case"i16":HEAP16[ptr>>1]=value;break;case"i32":HEAP32[ptr>>2]=value;break;case"i64":tempI64=[value>>>0,(tempDouble=value,+Math_abs(tempDouble)>=+1?tempDouble>+0?(Math_min(+Math_floor(tempDouble/+4294967296),+4294967295)|0)>>>0:~~+Math_ceil((tempDouble- +(~~tempDouble>>>0))/+4294967296)>>>0:0)],HEAP32[ptr>>2]=tempI64[0],HEAP32[ptr+4>>2]=tempI64[1];break;case"float":HEAPF32[ptr>>2]=value;break;case"double":HEAPF64[ptr>>3]=value;break;default:abort("invalid type for setValue: "+type)}}Module["setValue"]=setValue;function getValue(ptr,type,noSafe){type=type||"i8";if(type.charAt(type.length-1)==="*")type="i32";switch(type){case"i1":return HEAP8[ptr>>0];case"i8":return HEAP8[ptr>>0];case"i16":return HEAP16[ptr>>1];case"i32":return HEAP32[ptr>>2];case"i64":return HEAP32[ptr>>2];case"float":return HEAPF32[ptr>>2];case"double":return HEAPF64[ptr>>3];default:abort("invalid type for setValue: "+type)}return null}Module["getValue"]=getValue;var ALLOC_NORMAL=0;var ALLOC_STACK=1;var ALLOC_STATIC=2;var ALLOC_DYNAMIC=3;var ALLOC_NONE=4;Module["ALLOC_NORMAL"]=ALLOC_NORMAL;Module["ALLOC_STACK"]=ALLOC_STACK;Module["ALLOC_STATIC"]=ALLOC_STATIC;Module["ALLOC_DYNAMIC"]=ALLOC_DYNAMIC;Module["ALLOC_NONE"]=ALLOC_NONE;function allocate(slab,types,allocator,ptr){var zeroinit,size;if(typeof slab==="number"){zeroinit=true;size=slab}else{zeroinit=false;size=slab.length}var singleType=typeof types==="string"?types:null;var ret;if(allocator==ALLOC_NONE){ret=ptr}else{ret=[_malloc,Runtime.stackAlloc,Runtime.staticAlloc,Runtime.dynamicAlloc][allocator===undefined?ALLOC_STATIC:allocator](Math.max(size,singleType?1:types.length))}if(zeroinit){var ptr=ret,stop;assert((ret&3)==0);stop=ret+(size&~3);for(;ptr<stop;ptr+=4){HEAP32[ptr>>2]=0}stop=ret+size;while(ptr<stop){HEAP8[ptr++>>0]=0}return ret}if(singleType==="i8"){if(slab.subarray||slab.slice){HEAPU8.set(slab,ret)}else{HEAPU8.set(new Uint8Array(slab),ret)}return ret}var i=0,type,typeSize,previousType;while(i<size){var curr=slab[i];if(typeof curr==="function"){curr=Runtime.getFunctionIndex(curr)}type=singleType||types[i];if(type===0){i++;continue}if(type=="i64")type="i32";setValue(ret+i,curr,type);if(previousType!==type){typeSize=Runtime.getNativeTypeSize(type);previousType=type}i+=typeSize}return ret}Module["allocate"]=allocate;function getMemory(size){if(!staticSealed)return Runtime.staticAlloc(size);if(typeof _sbrk!=="undefined"&&!_sbrk.called||!runtimeInitialized)return Runtime.dynamicAlloc(size);return _malloc(size)}Module["getMemory"]=getMemory;function Pointer_stringify(ptr,length){if(length===0||!ptr)return"";var hasUtf=0;var t;var i=0;while(1){t=HEAPU8[ptr+i>>0];hasUtf|=t;if(t==0&&!length)break;i++;if(length&&i==length)break}if(!length)length=i;var ret="";if(hasUtf<128){var MAX_CHUNK=1024;var curr;while(length>0){curr=String.fromCharCode.apply(String,HEAPU8.subarray(ptr,ptr+Math.min(length,MAX_CHUNK)));ret=ret?ret+curr:curr;ptr+=MAX_CHUNK;length-=MAX_CHUNK}return ret}return Module["UTF8ToString"](ptr)}Module["Pointer_stringify"]=Pointer_stringify;function AsciiToString(ptr){var str="";while(1){var ch=HEAP8[ptr++>>0];if(!ch)return str;str+=String.fromCharCode(ch)}}Module["AsciiToString"]=AsciiToString;function stringToAscii(str,outPtr){return writeAsciiToMemory(str,outPtr,false)}Module["stringToAscii"]=stringToAscii;function UTF8ArrayToString(u8Array,idx){var u0,u1,u2,u3,u4,u5;var str="";while(1){u0=u8Array[idx++];if(!u0)return str;if(!(u0&128)){str+=String.fromCharCode(u0);continue}u1=u8Array[idx++]&63;if((u0&224)==192){str+=String.fromCharCode((u0&31)<<6|u1);continue}u2=u8Array[idx++]&63;if((u0&240)==224){u0=(u0&15)<<12|u1<<6|u2}else{u3=u8Array[idx++]&63;if((u0&248)==240){u0=(u0&7)<<18|u1<<12|u2<<6|u3}else{u4=u8Array[idx++]&63;if((u0&252)==248){u0=(u0&3)<<24|u1<<18|u2<<12|u3<<6|u4}else{u5=u8Array[idx++]&63;u0=(u0&1)<<30|u1<<24|u2<<18|u3<<12|u4<<6|u5}}}if(u0<65536){str+=String.fromCharCode(u0)}else{var ch=u0-65536;str+=String.fromCharCode(55296|ch>>10,56320|ch&1023)}}}Module["UTF8ArrayToString"]=UTF8ArrayToString;function UTF8ToString(ptr){return UTF8ArrayToString(HEAPU8,ptr)}Module["UTF8ToString"]=UTF8ToString;function stringToUTF8Array(str,outU8Array,outIdx,maxBytesToWrite){if(!(maxBytesToWrite>0))return 0;var startIdx=outIdx;var endIdx=outIdx+maxBytesToWrite-1;for(var i=0;i<str.length;++i){var u=str.charCodeAt(i);if(u>=55296&&u<=57343)u=65536+((u&1023)<<10)|str.charCodeAt(++i)&1023;if(u<=127){if(outIdx>=endIdx)break;outU8Array[outIdx++]=u}else if(u<=2047){if(outIdx+1>=endIdx)break;outU8Array[outIdx++]=192|u>>6;outU8Array[outIdx++]=128|u&63}else if(u<=65535){if(outIdx+2>=endIdx)break;outU8Array[outIdx++]=224|u>>12;outU8Array[outIdx++]=128|u>>6&63;outU8Array[outIdx++]=128|u&63}else if(u<=2097151){if(outIdx+3>=endIdx)break;outU8Array[outIdx++]=240|u>>18;outU8Array[outIdx++]=128|u>>12&63;outU8Array[outIdx++]=128|u>>6&63;outU8Array[outIdx++]=128|u&63}else if(u<=67108863){if(outIdx+4>=endIdx)break;outU8Array[outIdx++]=248|u>>24;outU8Array[outIdx++]=128|u>>18&63;outU8Array[outIdx++]=128|u>>12&63;outU8Array[outIdx++]=128|u>>6&63;outU8Array[outIdx++]=128|u&63}else{if(outIdx+5>=endIdx)break;outU8Array[outIdx++]=252|u>>30;outU8Array[outIdx++]=128|u>>24&63;outU8Array[outIdx++]=128|u>>18&63;outU8Array[outIdx++]=128|u>>12&63;outU8Array[outIdx++]=128|u>>6&63;outU8Array[outIdx++]=128|u&63}}outU8Array[outIdx]=0;return outIdx-startIdx}Module["stringToUTF8Array"]=stringToUTF8Array;function stringToUTF8(str,outPtr,maxBytesToWrite){return stringToUTF8Array(str,HEAPU8,outPtr,maxBytesToWrite)}Module["stringToUTF8"]=stringToUTF8;function lengthBytesUTF8(str){var len=0;for(var i=0;i<str.length;++i){var u=str.charCodeAt(i);if(u>=55296&&u<=57343)u=65536+((u&1023)<<10)|str.charCodeAt(++i)&1023;if(u<=127){++len}else if(u<=2047){len+=2}else if(u<=65535){len+=3}else if(u<=2097151){len+=4}else if(u<=67108863){len+=5}else{len+=6}}return len}Module["lengthBytesUTF8"]=lengthBytesUTF8;function UTF16ToString(ptr){var i=0;var str="";while(1){var codeUnit=HEAP16[ptr+i*2>>1];if(codeUnit==0)return str;++i;str+=String.fromCharCode(codeUnit)}}Module["UTF16ToString"]=UTF16ToString;function stringToUTF16(str,outPtr,maxBytesToWrite){if(maxBytesToWrite===undefined){maxBytesToWrite=2147483647}if(maxBytesToWrite<2)return 0;maxBytesToWrite-=2;var startPtr=outPtr;var numCharsToWrite=maxBytesToWrite<str.length*2?maxBytesToWrite/2:str.length;for(var i=0;i<numCharsToWrite;++i){var codeUnit=str.charCodeAt(i);HEAP16[outPtr>>1]=codeUnit;outPtr+=2}HEAP16[outPtr>>1]=0;return outPtr-startPtr}Module["stringToUTF16"]=stringToUTF16;function lengthBytesUTF16(str){return str.length*2}Module["lengthBytesUTF16"]=lengthBytesUTF16;function UTF32ToString(ptr){var i=0;var str="";while(1){var utf32=HEAP32[ptr+i*4>>2];if(utf32==0)return str;++i;if(utf32>=65536){var ch=utf32-65536;str+=String.fromCharCode(55296|ch>>10,56320|ch&1023)}else{str+=String.fromCharCode(utf32)}}}Module["UTF32ToString"]=UTF32ToString;function stringToUTF32(str,outPtr,maxBytesToWrite){if(maxBytesToWrite===undefined){maxBytesToWrite=2147483647}if(maxBytesToWrite<4)return 0;var startPtr=outPtr;var endPtr=startPtr+maxBytesToWrite-4;for(var i=0;i<str.length;++i){var codeUnit=str.charCodeAt(i);if(codeUnit>=55296&&codeUnit<=57343){var trailSurrogate=str.charCodeAt(++i);codeUnit=65536+((codeUnit&1023)<<10)|trailSurrogate&1023}HEAP32[outPtr>>2]=codeUnit;outPtr+=4;if(outPtr+4>endPtr)break}HEAP32[outPtr>>2]=0;return outPtr-startPtr}Module["stringToUTF32"]=stringToUTF32;function lengthBytesUTF32(str){var len=0;for(var i=0;i<str.length;++i){var codeUnit=str.charCodeAt(i);if(codeUnit>=55296&&codeUnit<=57343)++i;len+=4}return len}Module["lengthBytesUTF32"]=lengthBytesUTF32;function demangle(func){var hasLibcxxabi=!!Module["___cxa_demangle"];if(hasLibcxxabi){try{var buf=_malloc(func.length);writeStringToMemory(func.substr(1),buf);var status=_malloc(4);var ret=Module["___cxa_demangle"](buf,0,0,status);if(getValue(status,"i32")===0&&ret){return Pointer_stringify(ret)}}catch(e){}finally{if(buf)_free(buf);if(status)_free(status);if(ret)_free(ret)}}var i=3;var basicTypes={"v":"void","b":"bool","c":"char","s":"short","i":"int","l":"long","f":"float","d":"double","w":"wchar_t","a":"signed char","h":"unsigned char","t":"unsigned short","j":"unsigned int","m":"unsigned long","x":"long long","y":"unsigned long long","z":"..."};var subs=[];var first=true;function dump(x){if(x)Module.print(x);Module.print(func);var pre="";for(var a=0;a<i;a++)pre+=" ";Module.print(pre+"^")}function parseNested(){i++;if(func[i]==="K")i++;var parts=[];while(func[i]!=="E"){if(func[i]==="S"){i++;var next=func.indexOf("_",i);var num=func.substring(i,next)||0;parts.push(subs[num]||"?");i=next+1;continue}if(func[i]==="C"){parts.push(parts[parts.length-1]);i+=2;continue}var size=parseInt(func.substr(i));var pre=size.toString().length;if(!size||!pre){i--;break}var curr=func.substr(i+pre,size);parts.push(curr);subs.push(curr);i+=pre+size}i++;return parts}function parse(rawList,limit,allowVoid){limit=limit||Infinity;var ret="",list=[];function flushList(){return"("+list.join(", ")+")"}var name;if(func[i]==="N"){name=parseNested().join("::");limit--;if(limit===0)return rawList?[name]:name}else{if(func[i]==="K"||first&&func[i]==="L")i++;var size=parseInt(func.substr(i));if(size){var pre=size.toString().length;name=func.substr(i+pre,size);i+=pre+size}}first=false;if(func[i]==="I"){i++;var iList=parse(true);var iRet=parse(true,1,true);ret+=iRet[0]+" "+name+"<"+iList.join(", ")+">"}else{ret=name}paramLoop:while(i<func.length&&limit-->0){var c=func[i++];if(c in basicTypes){list.push(basicTypes[c])}else{switch(c){case"P":list.push(parse(true,1,true)[0]+"*");break;case"R":list.push(parse(true,1,true)[0]+"&");break;case"L":{i++;var end=func.indexOf("E",i);var size=end-i;list.push(func.substr(i,size));i+=size+2;break};case"A":{var size=parseInt(func.substr(i));i+=size.toString().length;if(func[i]!=="_")throw"?";i++;list.push(parse(true,1,true)[0]+" ["+size+"]");break};case"E":break paramLoop;default:ret+="?"+c;break paramLoop}}}if(!allowVoid&&list.length===1&&list[0]==="void")list=[];if(rawList){if(ret){list.push(ret+"?")}return list}else{return ret+flushList()}}var parsed=func;try{if(func=="Object._main"||func=="_main"){return"main()"}if(typeof func==="number")func=Pointer_stringify(func);if(func[0]!=="_")return func;if(func[1]!=="_")return func;if(func[2]!=="Z")return func;switch(func[3]){case"n":return"operator new()";case"d":return"operator delete()"}parsed=parse()}catch(e){parsed+="?"}if(parsed.indexOf("?")>=0&&!hasLibcxxabi){Runtime.warnOnce("warning: a problem occurred in builtin C++ name demangling; build with  -s DEMANGLE_SUPPORT=1  to link in libcxxabi demangling")}return parsed}function demangleAll(text){return text.replace(/__Z[\w\d_]+/g,(function(x){var y=demangle(x);return x===y?x:x+" ["+y+"]"}))}function jsStackTrace(){var err=new Error;if(!err.stack){try{throw new Error(0)}catch(e){err=e}if(!err.stack){return"(no stack trace available)"}}return err.stack.toString()}function stackTrace(){return demangleAll(jsStackTrace())}Module["stackTrace"]=stackTrace;var PAGE_SIZE=4096;function alignMemoryPage(x){if(x%4096>0){x+=4096-x%4096}return x}var HEAP;var HEAP8,HEAPU8,HEAP16,HEAPU16,HEAP32,HEAPU32,HEAPF32,HEAPF64;var STATIC_BASE=0,STATICTOP=0,staticSealed=false;var STACK_BASE=0,STACKTOP=0,STACK_MAX=0;var DYNAMIC_BASE=0,DYNAMICTOP=0;function abortOnCannotGrowMemory(){abort("Cannot enlarge memory arrays. Either (1) compile with  -s TOTAL_MEMORY=X  with X higher than the current value "+TOTAL_MEMORY+", (2) compile with  -s ALLOW_MEMORY_GROWTH=1  which adjusts the size at runtime but prevents some optimizations, (3) set Module.TOTAL_MEMORY to a higher value before the program runs, or if you want malloc to return NULL (0) instead of this abort, compile with  -s ABORTING_MALLOC=0 ")}function enlargeMemory(){abortOnCannotGrowMemory()}var TOTAL_STACK=Module["TOTAL_STACK"]||5242880;var TOTAL_MEMORY=Module["TOTAL_MEMORY"]||16777216;var totalMemory=64*1024;while(totalMemory<TOTAL_MEMORY||totalMemory<2*TOTAL_STACK){if(totalMemory<16*1024*1024){totalMemory*=2}else{totalMemory+=16*1024*1024}}if(totalMemory!==TOTAL_MEMORY){TOTAL_MEMORY=totalMemory}assert(typeof Int32Array!=="undefined"&&typeof Float64Array!=="undefined"&&!!(new Int32Array(1))["subarray"]&&!!(new Int32Array(1))["set"],"JS engine does not provide full typed array support");var buffer;buffer=new ArrayBuffer(TOTAL_MEMORY);HEAP8=new Int8Array(buffer);HEAP16=new Int16Array(buffer);HEAP32=new Int32Array(buffer);HEAPU8=new Uint8Array(buffer);HEAPU16=new Uint16Array(buffer);HEAPU32=new Uint32Array(buffer);HEAPF32=new Float32Array(buffer);HEAPF64=new Float64Array(buffer);HEAP32[0]=255;assert(HEAPU8[0]===255&&HEAPU8[3]===0,"Typed arrays 2 must be run on a little-endian system");Module["HEAP"]=HEAP;Module["buffer"]=buffer;Module["HEAP8"]=HEAP8;Module["HEAP16"]=HEAP16;Module["HEAP32"]=HEAP32;Module["HEAPU8"]=HEAPU8;Module["HEAPU16"]=HEAPU16;Module["HEAPU32"]=HEAPU32;Module["HEAPF32"]=HEAPF32;Module["HEAPF64"]=HEAPF64;function callRuntimeCallbacks(callbacks){while(callbacks.length>0){var callback=callbacks.shift();if(typeof callback=="function"){callback();continue}var func=callback.func;if(typeof func==="number"){if(callback.arg===undefined){Runtime.dynCall("v",func)}else{Runtime.dynCall("vi",func,[callback.arg])}}else{func(callback.arg===undefined?null:callback.arg)}}}var __ATPRERUN__=[];var __ATINIT__=[];var __ATMAIN__=[];var __ATEXIT__=[];var __ATPOSTRUN__=[];var runtimeInitialized=false;var runtimeExited=false;function preRun(){if(Module["preRun"]){if(typeof Module["preRun"]=="function")Module["preRun"]=[Module["preRun"]];while(Module["preRun"].length){addOnPreRun(Module["preRun"].shift())}}callRuntimeCallbacks(__ATPRERUN__)}function ensureInitRuntime(){if(runtimeInitialized)return;runtimeInitialized=true;callRuntimeCallbacks(__ATINIT__)}function preMain(){callRuntimeCallbacks(__ATMAIN__)}function exitRuntime(){callRuntimeCallbacks(__ATEXIT__);runtimeExited=true}function postRun(){if(Module["postRun"]){if(typeof Module["postRun"]=="function")Module["postRun"]=[Module["postRun"]];while(Module["postRun"].length){addOnPostRun(Module["postRun"].shift())}}callRuntimeCallbacks(__ATPOSTRUN__)}function addOnPreRun(cb){__ATPRERUN__.unshift(cb)}Module["addOnPreRun"]=addOnPreRun;function addOnInit(cb){__ATINIT__.unshift(cb)}Module["addOnInit"]=addOnInit;function addOnPreMain(cb){__ATMAIN__.unshift(cb)}Module["addOnPreMain"]=addOnPreMain;function addOnExit(cb){__ATEXIT__.unshift(cb)}Module["addOnExit"]=addOnExit;function addOnPostRun(cb){__ATPOSTRUN__.unshift(cb)}Module["addOnPostRun"]=addOnPostRun;function intArrayFromString(stringy,dontAddNull,length){var len=length>0?length:lengthBytesUTF8(stringy)+1;var u8array=new Array(len);var numBytesWritten=stringToUTF8Array(stringy,u8array,0,u8array.length);if(dontAddNull)u8array.length=numBytesWritten;return u8array}Module["intArrayFromString"]=intArrayFromString;function intArrayToString(array){var ret=[];for(var i=0;i<array.length;i++){var chr=array[i];if(chr>255){chr&=255}ret.push(String.fromCharCode(chr))}return ret.join("")}Module["intArrayToString"]=intArrayToString;function writeStringToMemory(string,buffer,dontAddNull){var array=intArrayFromString(string,dontAddNull);var i=0;while(i<array.length){var chr=array[i];HEAP8[buffer+i>>0]=chr;i=i+1}}Module["writeStringToMemory"]=writeStringToMemory;function writeArrayToMemory(array,buffer){for(var i=0;i<array.length;i++){HEAP8[buffer++>>0]=array[i]}}Module["writeArrayToMemory"]=writeArrayToMemory;function writeAsciiToMemory(str,buffer,dontAddNull){for(var i=0;i<str.length;++i){HEAP8[buffer++>>0]=str.charCodeAt(i)}if(!dontAddNull)HEAP8[buffer>>0]=0}Module["writeAsciiToMemory"]=writeAsciiToMemory;function unSign(value,bits,ignore){if(value>=0){return value}return bits<=32?2*Math.abs(1<<bits-1)+value:Math.pow(2,bits)+value}function reSign(value,bits,ignore){if(value<=0){return value}var half=bits<=32?Math.abs(1<<bits-1):Math.pow(2,bits-1);if(value>=half&&(bits<=32||value>half)){value=-2*half+value}return value}if(!Math["imul"]||Math["imul"](4294967295,5)!==-5)Math["imul"]=function imul(a,b){var ah=a>>>16;var al=a&65535;var bh=b>>>16;var bl=b&65535;return al*bl+(ah*bl+al*bh<<16)|0};Math.imul=Math["imul"];if(!Math["clz32"])Math["clz32"]=(function(x){x=x>>>0;for(var i=0;i<32;i++){if(x&1<<31-i)return i}return 32});Math.clz32=Math["clz32"];var Math_abs=Math.abs;var Math_cos=Math.cos;var Math_sin=Math.sin;var Math_tan=Math.tan;var Math_acos=Math.acos;var Math_asin=Math.asin;var Math_atan=Math.atan;var Math_atan2=Math.atan2;var Math_exp=Math.exp;var Math_log=Math.log;var Math_sqrt=Math.sqrt;var Math_ceil=Math.ceil;var Math_floor=Math.floor;var Math_pow=Math.pow;var Math_imul=Math.imul;var Math_fround=Math.fround;var Math_min=Math.min;var Math_clz32=Math.clz32;var runDependencies=0;var runDependencyWatcher=null;var dependenciesFulfilled=null;function getUniqueRunDependency(id){return id}function addRunDependency(id){runDependencies++;if(Module["monitorRunDependencies"]){Module["monitorRunDependencies"](runDependencies)}}Module["addRunDependency"]=addRunDependency;function removeRunDependency(id){runDependencies--;if(Module["monitorRunDependencies"]){Module["monitorRunDependencies"](runDependencies)}if(runDependencies==0){if(runDependencyWatcher!==null){clearInterval(runDependencyWatcher);runDependencyWatcher=null}if(dependenciesFulfilled){var callback=dependenciesFulfilled;dependenciesFulfilled=null;callback()}}}Module["removeRunDependency"]=removeRunDependency;Module["preloadedImages"]={};Module["preloadedAudios"]={};var memoryInitializer=null;var ASM_CONSTS=[];STATIC_BASE=8;STATICTOP=STATIC_BASE+752;__ATINIT__.push();allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,60,0,0,0,0,0,0,0,5,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,2,0,0,0,239,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,255,255,255,255,255,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,82,101,97,108,32,70,70,84,32,111,112,116,105,109,105,122,97,116,105,111,110,32,109,117,115,116,32,98,101,32,101,118,101,110,46,10,0,107,105,115,115,32,102,102,116,32,117,115,97,103,101,32,101,114,114,111,114,58,32,105,109,112,114,111,112,101,114,32,97,108,108,111,99,10,0,0,0,0,0,0,0,0,0],"i8",ALLOC_NONE,Runtime.GLOBAL_BASE);var tempDoublePtr=Runtime.alignMemory(allocate(12,"i8",ALLOC_STATIC),8);assert(tempDoublePtr%8==0);function copyTempFloat(ptr){HEAP8[tempDoublePtr]=HEAP8[ptr];HEAP8[tempDoublePtr+1]=HEAP8[ptr+1];HEAP8[tempDoublePtr+2]=HEAP8[ptr+2];HEAP8[tempDoublePtr+3]=HEAP8[ptr+3]}function copyTempDouble(ptr){HEAP8[tempDoublePtr]=HEAP8[ptr];HEAP8[tempDoublePtr+1]=HEAP8[ptr+1];HEAP8[tempDoublePtr+2]=HEAP8[ptr+2];HEAP8[tempDoublePtr+3]=HEAP8[ptr+3];HEAP8[tempDoublePtr+4]=HEAP8[ptr+4];HEAP8[tempDoublePtr+5]=HEAP8[ptr+5];HEAP8[tempDoublePtr+6]=HEAP8[ptr+6];HEAP8[tempDoublePtr+7]=HEAP8[ptr+7]}var _fabsf=Math_abs;function ___setErrNo(value){if(Module["___errno_location"])HEAP32[Module["___errno_location"]()>>2]=value;return value}var ERRNO_CODES={EPERM:1,ENOENT:2,ESRCH:3,EINTR:4,EIO:5,ENXIO:6,E2BIG:7,ENOEXEC:8,EBADF:9,ECHILD:10,EAGAIN:11,EWOULDBLOCK:11,ENOMEM:12,EACCES:13,EFAULT:14,ENOTBLK:15,EBUSY:16,EEXIST:17,EXDEV:18,ENODEV:19,ENOTDIR:20,EISDIR:21,EINVAL:22,ENFILE:23,EMFILE:24,ENOTTY:25,ETXTBSY:26,EFBIG:27,ENOSPC:28,ESPIPE:29,EROFS:30,EMLINK:31,EPIPE:32,EDOM:33,ERANGE:34,ENOMSG:42,EIDRM:43,ECHRNG:44,EL2NSYNC:45,EL3HLT:46,EL3RST:47,ELNRNG:48,EUNATCH:49,ENOCSI:50,EL2HLT:51,EDEADLK:35,ENOLCK:37,EBADE:52,EBADR:53,EXFULL:54,ENOANO:55,EBADRQC:56,EBADSLT:57,EDEADLOCK:35,EBFONT:59,ENOSTR:60,ENODATA:61,ETIME:62,ENOSR:63,ENONET:64,ENOPKG:65,EREMOTE:66,ENOLINK:67,EADV:68,ESRMNT:69,ECOMM:70,EPROTO:71,EMULTIHOP:72,EDOTDOT:73,EBADMSG:74,ENOTUNIQ:76,EBADFD:77,EREMCHG:78,ELIBACC:79,ELIBBAD:80,ELIBSCN:81,ELIBMAX:82,ELIBEXEC:83,ENOSYS:38,ENOTEMPTY:39,ENAMETOOLONG:36,ELOOP:40,EOPNOTSUPP:95,EPFNOSUPPORT:96,ECONNRESET:104,ENOBUFS:105,EAFNOSUPPORT:97,EPROTOTYPE:91,ENOTSOCK:88,ENOPROTOOPT:92,ESHUTDOWN:108,ECONNREFUSED:111,EADDRINUSE:98,ECONNABORTED:103,ENETUNREACH:101,ENETDOWN:100,ETIMEDOUT:110,EHOSTDOWN:112,EHOSTUNREACH:113,EINPROGRESS:115,EALREADY:114,EDESTADDRREQ:89,EMSGSIZE:90,EPROTONOSUPPORT:93,ESOCKTNOSUPPORT:94,EADDRNOTAVAIL:99,ENETRESET:102,EISCONN:106,ENOTCONN:107,ETOOMANYREFS:109,EUSERS:87,EDQUOT:122,ESTALE:116,ENOTSUP:95,ENOMEDIUM:123,EILSEQ:84,EOVERFLOW:75,ECANCELED:125,ENOTRECOVERABLE:131,EOWNERDEAD:130,ESTRPIPE:86};function _sysconf(name){switch(name){case 30:return PAGE_SIZE;case 85:return totalMemory/PAGE_SIZE;case 132:case 133:case 12:case 137:case 138:case 15:case 235:case 16:case 17:case 18:case 19:case 20:case 149:case 13:case 10:case 236:case 153:case 9:case 21:case 22:case 159:case 154:case 14:case 77:case 78:case 139:case 80:case 81:case 82:case 68:case 67:case 164:case 11:case 29:case 47:case 48:case 95:case 52:case 51:case 46:return 200809;case 79:return 0;case 27:case 246:case 127:case 128:case 23:case 24:case 160:case 161:case 181:case 182:case 242:case 183:case 184:case 243:case 244:case 245:case 165:case 178:case 179:case 49:case 50:case 168:case 169:case 175:case 170:case 171:case 172:case 97:case 76:case 32:case 173:case 35:return-1;case 176:case 177:case 7:case 155:case 8:case 157:case 125:case 126:case 92:case 93:case 129:case 130:case 131:case 94:case 91:return 1;case 74:case 60:case 69:case 70:case 4:return 1024;case 31:case 42:case 72:return 32;case 87:case 26:case 33:return 2147483647;case 34:case 1:return 47839;case 38:case 36:return 99;case 43:case 37:return 2048;case 0:return 2097152;case 3:return 65536;case 28:return 32768;case 44:return 32767;case 75:return 16384;case 39:return 1e3;case 89:return 700;case 71:return 256;case 40:return 255;case 2:return 100;case 180:return 64;case 25:return 20;case 5:return 16;case 6:return 6;case 73:return 4;case 84:{if(typeof navigator==="object")return navigator["hardwareConcurrency"]||1;return 1}}___setErrNo(ERRNO_CODES.EINVAL);return-1}Module["_memset"]=_memset;function _pthread_cleanup_push(routine,arg){__ATEXIT__.push((function(){Runtime.dynCall("vi",routine,[arg])}));_pthread_cleanup_push.level=__ATEXIT__.length}function _pthread_cleanup_pop(){assert(_pthread_cleanup_push.level==__ATEXIT__.length,"cannot pop if something else added meanwhile!");__ATEXIT__.pop();_pthread_cleanup_push.level=__ATEXIT__.length}function _abort(){Module["abort"]()}function _pthread_self(){return 0}var _sqrtf=Math_sqrt;var SYSCALLS={varargs:0,get:(function(varargs){SYSCALLS.varargs+=4;var ret=HEAP32[SYSCALLS.varargs-4>>2];return ret}),getStr:(function(){var ret=Pointer_stringify(SYSCALLS.get());return ret}),get64:(function(){var low=SYSCALLS.get(),high=SYSCALLS.get();if(low>=0)assert(high===0);else assert(high===-1);return low}),getZero:(function(){assert(SYSCALLS.get()===0)})};function ___syscall6(which,varargs){SYSCALLS.varargs=varargs;try{var stream=SYSCALLS.getStreamFromFD();FS.close(stream);return 0}catch(e){if(typeof FS==="undefined"||!(e instanceof FS.ErrnoError))abort(e);return-e.errno}}var _cos=Math_cos;function _sbrk(bytes){var self=_sbrk;if(!self.called){DYNAMICTOP=alignMemoryPage(DYNAMICTOP);self.called=true;assert(Runtime.dynamicAlloc);self.alloc=Runtime.dynamicAlloc;Runtime.dynamicAlloc=(function(){abort("cannot dynamically allocate, sbrk now has control")})}var ret=DYNAMICTOP;if(bytes!=0){var success=self.alloc(bytes);if(!success)return-1>>>0}return ret}var _floor=Math_floor;var _sqrt=Math_sqrt;function _emscripten_memcpy_big(dest,src,num){HEAPU8.set(HEAPU8.subarray(src,src+num),dest);return dest}Module["_memcpy"]=_memcpy;function _time(ptr){var ret=Date.now()/1e3|0;if(ptr){HEAP32[ptr>>2]=ret}return ret}function __exit(status){Module["exit"](status)}function _exit(status){__exit(status)}function ___syscall140(which,varargs){SYSCALLS.varargs=varargs;try{var stream=SYSCALLS.getStreamFromFD(),offset_high=SYSCALLS.get(),offset_low=SYSCALLS.get(),result=SYSCALLS.get(),whence=SYSCALLS.get();var offset=offset_low;assert(offset_high===0);FS.llseek(stream,offset,whence);HEAP32[result>>2]=stream.position;if(stream.getdents&&offset===0&&whence===0)stream.getdents=null;return 0}catch(e){if(typeof FS==="undefined"||!(e instanceof FS.ErrnoError))abort(e);return-e.errno}}function ___syscall146(which,varargs){SYSCALLS.varargs=varargs;try{var stream=SYSCALLS.get(),iov=SYSCALLS.get(),iovcnt=SYSCALLS.get();var ret=0;if(!___syscall146.buffer)___syscall146.buffer=[];var buffer=___syscall146.buffer;for(var i=0;i<iovcnt;i++){var ptr=HEAP32[iov+i*8>>2];var len=HEAP32[iov+(i*8+4)>>2];for(var j=0;j<len;j++){var curr=HEAPU8[ptr+j];if(curr===0||curr===10){Module["print"](UTF8ArrayToString(buffer,0));buffer.length=0}else{buffer.push(curr)}}ret+=len}return ret}catch(e){if(typeof FS==="undefined"||!(e instanceof FS.ErrnoError))abort(e);return-e.errno}}var _sin=Math_sin;STACK_BASE=STACKTOP=Runtime.alignMemory(STATICTOP);staticSealed=true;STACK_MAX=STACK_BASE+TOTAL_STACK;DYNAMIC_BASE=DYNAMICTOP=Runtime.alignMemory(STACK_MAX);assert(DYNAMIC_BASE<TOTAL_MEMORY,"TOTAL_MEMORY not big enough for stack");function invoke_ii(index,a1){try{return Module["dynCall_ii"](index,a1)}catch(e){if(typeof e!=="number"&&e!=="longjmp")throw e;asm["setThrew"](1,0)}}function invoke_iiii(index,a1,a2,a3){try{return Module["dynCall_iiii"](index,a1,a2,a3)}catch(e){if(typeof e!=="number"&&e!=="longjmp")throw e;asm["setThrew"](1,0)}}function invoke_vi(index,a1){try{Module["dynCall_vi"](index,a1)}catch(e){if(typeof e!=="number"&&e!=="longjmp")throw e;asm["setThrew"](1,0)}}Module.asmGlobalArg={"Math":Math,"Int8Array":Int8Array,"Int16Array":Int16Array,"Int32Array":Int32Array,"Uint8Array":Uint8Array,"Uint16Array":Uint16Array,"Uint32Array":Uint32Array,"Float32Array":Float32Array,"Float64Array":Float64Array,"NaN":NaN,"Infinity":Infinity};Module.asmLibraryArg={"abort":abort,"assert":assert,"invoke_ii":invoke_ii,"invoke_iiii":invoke_iiii,"invoke_vi":invoke_vi,"_pthread_cleanup_pop":_pthread_cleanup_pop,"_floor":_floor,"_sin":_sin,"_cos":_cos,"_sysconf":_sysconf,"_pthread_self":_pthread_self,"_abort":_abort,"___setErrNo":___setErrNo,"_fabsf":_fabsf,"_sbrk":_sbrk,"_time":_time,"_pthread_cleanup_push":_pthread_cleanup_push,"_emscripten_memcpy_big":_emscripten_memcpy_big,"_sqrtf":_sqrtf,"_sqrt":_sqrt,"___syscall140":___syscall140,"_exit":_exit,"___syscall6":___syscall6,"__exit":__exit,"___syscall146":___syscall146,"STACKTOP":STACKTOP,"STACK_MAX":STACK_MAX,"tempDoublePtr":tempDoublePtr,"ABORT":ABORT};// EMSCRIPTEN_START_ASM
var asm=(function(global,env,buffer) {
"use asm";var a=new global.Int8Array(buffer);var b=new global.Int16Array(buffer);var c=new global.Int32Array(buffer);var d=new global.Uint8Array(buffer);var e=new global.Uint16Array(buffer);var f=new global.Uint32Array(buffer);var g=new global.Float32Array(buffer);var h=new global.Float64Array(buffer);var i=env.STACKTOP|0;var j=env.STACK_MAX|0;var k=env.tempDoublePtr|0;var l=env.ABORT|0;var m=0;var n=0;var o=0;var p=0;var q=global.NaN,r=global.Infinity;var s=0,t=0,u=0,v=0,w=0.0,x=0,y=0,z=0,A=0.0;var B=0;var C=0;var D=0;var E=0;var F=0;var G=0;var H=0;var I=0;var J=0;var K=0;var L=global.Math.floor;var M=global.Math.abs;var N=global.Math.sqrt;var O=global.Math.pow;var P=global.Math.cos;var Q=global.Math.sin;var R=global.Math.tan;var S=global.Math.acos;var T=global.Math.asin;var U=global.Math.atan;var V=global.Math.atan2;var W=global.Math.exp;var X=global.Math.log;var Y=global.Math.ceil;var Z=global.Math.imul;var _=global.Math.min;var $=global.Math.clz32;var aa=env.abort;var ba=env.assert;var ca=env.invoke_ii;var da=env.invoke_iiii;var ea=env.invoke_vi;var fa=env._pthread_cleanup_pop;var ga=env._floor;var ha=env._sin;var ia=env._cos;var ja=env._sysconf;var ka=env._pthread_self;var la=env._abort;var ma=env.___setErrNo;var na=env._fabsf;var oa=env._sbrk;var pa=env._time;var qa=env._pthread_cleanup_push;var ra=env._emscripten_memcpy_big;var sa=env._sqrtf;var ta=env._sqrt;var ua=env.___syscall140;var va=env._exit;var wa=env.___syscall6;var xa=env.__exit;var ya=env.___syscall146;var za=0.0;
// EMSCRIPTEN_START_FUNCS
function Da(a){a=a|0;var b=0;b=i;i=i+a|0;i=i+15&-16;return b|0}function Ea(){return i|0}function Fa(a){a=a|0;i=a}function Ga(a,b){a=a|0;b=b|0;i=a;j=b}function Ha(a,b){a=a|0;b=b|0;if(!m){m=a;n=b}}function Ia(b){b=b|0;a[k>>0]=a[b>>0];a[k+1>>0]=a[b+1>>0];a[k+2>>0]=a[b+2>>0];a[k+3>>0]=a[b+3>>0]}function Ja(b){b=b|0;a[k>>0]=a[b>>0];a[k+1>>0]=a[b+1>>0];a[k+2>>0]=a[b+2>>0];a[k+3>>0]=a[b+3>>0];a[k+4>>0]=a[b+4>>0];a[k+5>>0]=a[b+5>>0];a[k+6>>0]=a[b+6>>0];a[k+7>>0]=a[b+7>>0]}function Ka(a){a=a|0;B=a}function La(){return B|0}function Ma(a){a=a|0;hb(a);return}function Na(a,b,d,e){a=a|0;b=b|0;d=d|0;e=e|0;var f=0,h=0.0,i=0,j=0.0;f=(a<<3)+264|0;if(!e)i=gb(f)|0;else{if(!d)d=0;else d=(c[e>>2]|0)>>>0<f>>>0?0:d;c[e>>2]=f;i=d}if(!i)return i|0;c[i>>2]=a;e=i+4|0;c[e>>2]=b;h=+(a|0);a:do if((a|0)>0){f=b;d=0;while(1){j=+(d|0)*-6.283185307179586/h;j=(f|0)==0?j:-j;g[i+264+(d<<3)>>2]=+P(+j);g[i+264+(d<<3)+4>>2]=+Q(+j);d=d+1|0;if((d|0)==(a|0))break a;f=c[e>>2]|0}}while(0);h=+L(+(+N(+h)));f=a;e=i+8|0;d=4;while(1){b:do if((f|0)%(d|0)|0)while(1){switch(d|0){case 4:{d=2;break}case 2:{d=3;break}default:d=d+2|0}d=+(d|0)>h?f:d;if(!((f|0)%(d|0)|0))break b}while(0);f=(f|0)/(d|0)|0;c[e>>2]=d;c[e+4>>2]=f;if((f|0)<=1)break;else e=e+8|0}return i|0}function Oa(a,b,d,e,f,h){a=a|0;b=b|0;d=d|0;e=e|0;f=f|0;h=h|0;var i=0,j=0,l=0,m=0,n=0.0,o=0.0,p=0.0,q=0.0,r=0,s=0,t=0,u=0,v=0,w=0,x=0,y=0,z=0,A=0.0,B=0.0,C=0.0,D=0.0,E=0.0,F=0.0,G=0.0,H=0.0,I=0.0,J=0.0,K=0.0,L=0.0,M=0.0,N=0.0,O=0;y=c[f>>2]|0;m=f+8|0;z=c[f+4>>2]|0;r=a+((Z(z,y)|0)<<3)|0;if((z|0)==1){j=Z(e,d)|0;i=a;f=b;while(1){v=f;w=c[v+4>>2]|0;x=i;c[x>>2]=c[v>>2];c[x+4>>2]=w;i=i+8|0;if((i|0)==(r|0))break;else f=f+(j<<3)|0}}else{j=Z(y,d)|0;l=Z(e,d)|0;i=a;f=b;while(1){Oa(i,f,j,e,m,h);i=i+(z<<3)|0;if((i|0)==(r|0))break;else f=f+(l<<3)|0}}switch(y|0){case 2:{j=a;l=z;i=a+(z<<3)|0;f=h+264|0;while(1){o=+g[i>>2];A=+g[f>>2];h=i+4|0;n=+g[h>>2];q=+g[f+4>>2];p=o*A-n*q;q=A*n+o*q;g[i>>2]=+g[j>>2]-p;z=j+4|0;g[h>>2]=+g[z>>2]-q;g[j>>2]=p+ +g[j>>2];g[z>>2]=q+ +g[z>>2];l=l+-1|0;if(!l)break;else{j=j+8|0;i=i+8|0;f=f+(d<<3)|0}}return}case 3:{e=z<<1;n=+g[h+264+((Z(z,d)|0)<<3)+4>>2];l=h+264|0;m=d<<1;f=a;i=z;j=l;while(1){a=f+(z<<3)|0;o=+g[a>>2];p=+g[j>>2];h=f+(z<<3)+4|0;D=+g[h>>2];B=+g[j+4>>2];C=o*p-D*B;B=p*D+o*B;x=f+(e<<3)|0;o=+g[x>>2];D=+g[l>>2];y=f+(e<<3)+4|0;p=+g[y>>2];q=+g[l+4>>2];A=o*D-p*q;q=D*p+o*q;o=C+A;p=B+q;g[a>>2]=+g[f>>2]-o*.5;w=f+4|0;g[h>>2]=+g[w>>2]-p*.5;A=n*(C-A);q=n*(B-q);g[f>>2]=+g[f>>2]+o;g[w>>2]=p+ +g[w>>2];g[x>>2]=q+ +g[a>>2];g[y>>2]=+g[h>>2]-A;g[a>>2]=+g[a>>2]-q;g[h>>2]=A+ +g[h>>2];i=i+-1|0;if(!i)break;else{f=f+8|0;j=j+(d<<3)|0;l=l+(m<<3)|0}}return}case 4:{e=z<<1;b=z*3|0;f=h+264|0;r=d<<1;s=d*3|0;if(!(c[h+4>>2]|0)){i=a;j=z;l=f;m=f;while(1){x=i+(z<<3)|0;n=+g[x>>2];o=+g[l>>2];y=i+(z<<3)+4|0;A=+g[y>>2];E=+g[l+4>>2];F=n*o-A*E;E=o*A+n*E;u=i+(e<<3)|0;n=+g[u>>2];A=+g[m>>2];v=i+(e<<3)+4|0;o=+g[v>>2];p=+g[m+4>>2];q=n*A-o*p;p=A*o+n*p;a=i+(b<<3)|0;n=+g[a>>2];o=+g[f>>2];h=i+(b<<3)+4|0;A=+g[h>>2];B=+g[f+4>>2];D=n*o-A*B;B=o*A+n*B;n=+g[i>>2];A=n-q;w=i+4|0;o=+g[w>>2];C=o-p;n=q+n;g[i>>2]=n;o=p+o;g[w>>2]=o;p=F+D;q=E+B;D=F-D;B=E-B;g[u>>2]=n-p;g[v>>2]=o-q;g[i>>2]=p+ +g[i>>2];g[w>>2]=q+ +g[w>>2];g[x>>2]=A+B;g[y>>2]=C-D;g[a>>2]=A-B;g[h>>2]=C+D;j=j+-1|0;if(!j)break;else{i=i+8|0;l=l+(d<<3)|0;m=m+(r<<3)|0;f=f+(s<<3)|0}}return}else{i=a;j=z;l=f;m=f;while(1){x=i+(z<<3)|0;p=+g[x>>2];q=+g[l>>2];y=i+(z<<3)+4|0;C=+g[y>>2];o=+g[l+4>>2];n=p*q-C*o;o=q*C+p*o;u=i+(e<<3)|0;p=+g[u>>2];C=+g[m>>2];v=i+(e<<3)+4|0;q=+g[v>>2];A=+g[m+4>>2];B=p*C-q*A;A=C*q+p*A;a=i+(b<<3)|0;p=+g[a>>2];q=+g[f>>2];h=i+(b<<3)+4|0;C=+g[h>>2];D=+g[f+4>>2];F=p*q-C*D;D=q*C+p*D;p=+g[i>>2];C=p-B;w=i+4|0;q=+g[w>>2];E=q-A;p=B+p;g[i>>2]=p;q=A+q;g[w>>2]=q;A=n+F;B=o+D;F=n-F;D=o-D;g[u>>2]=p-A;g[v>>2]=q-B;g[i>>2]=A+ +g[i>>2];g[w>>2]=B+ +g[w>>2];g[x>>2]=C-D;g[y>>2]=E+F;g[a>>2]=C+D;g[h>>2]=E-F;j=j+-1|0;if(!j)break;else{i=i+8|0;l=l+(d<<3)|0;m=m+(r<<3)|0;f=f+(s<<3)|0}}return}}case 5:{y=Z(z,d)|0;n=+g[h+264+(y<<3)>>2];o=+g[h+264+(y<<3)+4>>2];y=Z(z,d<<1)|0;p=+g[h+264+(y<<3)>>2];q=+g[h+264+(y<<3)+4>>2];if((z|0)<=0)return;j=d*3|0;l=a;m=a+(z<<3)|0;e=a+(z<<1<<3)|0;b=a+(z*3<<3)|0;f=a+(z<<2<<3)|0;i=0;while(1){I=+g[l>>2];v=l+4|0;G=+g[v>>2];C=+g[m>>2];u=Z(i,d)|0;E=+g[h+264+(u<<3)>>2];w=m+4|0;N=+g[w>>2];J=+g[h+264+(u<<3)+4>>2];H=C*E-N*J;J=E*N+C*J;C=+g[e>>2];u=Z(i<<1,d)|0;N=+g[h+264+(u<<3)>>2];y=e+4|0;E=+g[y>>2];M=+g[h+264+(u<<3)+4>>2];K=C*N-E*M;M=N*E+C*M;C=+g[b>>2];u=Z(j,i)|0;E=+g[h+264+(u<<3)>>2];a=b+4|0;N=+g[a>>2];A=+g[h+264+(u<<3)+4>>2];F=C*E-N*A;A=E*N+C*A;C=+g[f>>2];u=Z(i<<2,d)|0;N=+g[h+264+(u<<3)>>2];x=f+4|0;E=+g[x>>2];D=+g[h+264+(u<<3)+4>>2];B=C*N-E*D;D=N*E+C*D;C=H+B;E=J+D;B=H-B;D=J-D;J=K+F;H=M+A;F=K-F;A=M-A;g[l>>2]=I+(J+C);g[v>>2]=G+(H+E);M=p*J+(I+n*C);K=p*H+(G+n*E);N=q*A+o*D;L=-(o*B)-q*F;g[m>>2]=M-N;g[w>>2]=K-L;g[f>>2]=N+M;g[x>>2]=L+K;C=n*J+(I+p*C);E=n*H+(G+p*E);D=o*A-q*D;F=q*B-o*F;g[e>>2]=D+C;g[y>>2]=F+E;g[b>>2]=C-D;g[a>>2]=E-F;i=i+1|0;if((i|0)==(z|0))break;else{l=l+8|0;m=m+8|0;e=e+8|0;b=b+8|0;f=f+8|0}}return}default:{t=c[h>>2]|0;u=gb(y<<3)|0;if((z|0)>0){v=(y|0)>0;w=(y|0)>1;x=0;do{a:do if(v){f=x;i=0;while(1){b=a+(f<<3)|0;r=c[b+4>>2]|0;s=u+(i<<3)|0;c[s>>2]=c[b>>2];c[s+4>>2]=r;i=i+1|0;if((i|0)==(y|0))break;else f=f+z|0}s=u;r=c[s>>2]|0;s=c[s+4>>2]|0;if(!w){f=x;i=0;while(1){b=a+(f<<3)|0;c[b>>2]=r;c[b+4>>2]=s;i=i+1|0;if((i|0)==(y|0))break a;else f=f+z|0}}n=(c[k>>2]=r,+g[k>>2]);l=x;e=0;while(1){i=a+(l<<3)|0;f=i;c[f>>2]=r;c[f+4>>2]=s;f=Z(l,d)|0;j=a+(l<<3)+4|0;o=n;p=+g[j>>2];m=1;b=0;do{O=b+f|0;b=O-((O|0)<(t|0)?0:t)|0;M=+g[u+(m<<3)>>2];K=+g[h+264+(b<<3)>>2];L=+g[u+(m<<3)+4>>2];N=+g[h+264+(b<<3)+4>>2];o=o+(M*K-L*N);g[i>>2]=o;p=p+(K*L+M*N);g[j>>2]=p;m=m+1|0}while((m|0)!=(y|0));e=e+1|0;if((e|0)==(y|0))break;else l=l+z|0}}while(0);x=x+1|0}while((x|0)!=(z|0))}hb(u);return}}}function Pa(a,b,d){a=a|0;b=b|0;d=d|0;if((b|0)==(d|0)){d=gb(c[a>>2]<<3)|0;Oa(d,b,1,1,a+8|0,a);kb(b|0,d|0,c[a>>2]<<3|0)|0;hb(d);return}else{Oa(d,b,1,1,a+8|0,a);return}}function Qa(a){a=a|0;hb(a);return}function Ra(a,b,d,e){a=a|0;b=b|0;d=d|0;e=e|0;var f=0,h=0.0,j=0,k=0,l=0,m=0,n=0.0;l=i;i=i+16|0;k=l;if(a&1){_a(668,36,1,c[13]|0)|0;b=0;i=l;return b|0}j=a>>1;Na(j,b,0,k)|0;f=(c[k>>2]|0)+12|0;a=f+(((j*3|0)/2|0)<<3)|0;if(e){m=(c[e>>2]|0)>>>0<a>>>0;c[e>>2]=a;if(m){m=0;i=l;return m|0}}else d=gb(a)|0;if(!d){m=0;i=l;return m|0}e=d+12|0;c[d>>2]=e;m=d+f|0;c[d+4>>2]=m;a=d+8|0;c[a>>2]=m+(j<<3);Na(j,b,e,k)|0;e=(j|0)/2|0;if((j|0)<=1){m=d;i=l;return m|0}h=+(j|0);f=c[a>>2]|0;if(!b){a=0;do{m=a;a=a+1|0;n=(+(a|0)/h+.5)*-3.141592653589793;g[f+(m<<3)>>2]=+P(+n);g[f+(m<<3)+4>>2]=+Q(+n)}while((a|0)<(e|0));i=l;return d|0}else{a=0;do{m=a;a=a+1|0;n=(+(a|0)/h+.5)*-3.141592653589793;g[f+(m<<3)>>2]=+P(+n);g[f+(m<<3)+4>>2]=+Q(+-n)}while((a|0)<(e|0));i=l;return d|0}return 0}function Sa(a,b,d){a=a|0;b=b|0;d=d|0;var e=0,f=0,h=0,i=0,j=0.0,k=0.0,l=0.0,m=0.0,n=0.0,o=0.0,p=0.0,q=0;e=c[a>>2]|0;if(c[e+4>>2]|0){_a(705,37,1,c[13]|0)|0;va(1)}i=c[e>>2]|0;h=a+4|0;Pa(e,b,c[h>>2]|0);h=c[h>>2]|0;k=+g[h>>2];j=+g[h+4>>2];g[d>>2]=k+j;g[d+(i<<3)>>2]=k-j;g[d+4>>2]=0.0;g[d+(i<<3)+4>>2]=0.0;f=(i|0)/2|0;if((i|0)<2)return;e=c[a+8>>2]|0;b=1;while(1){j=+g[h+(b<<3)>>2];o=+g[h+(b<<3)+4>>2];a=i-b|0;n=+g[h+(a<<3)>>2];p=+g[h+(a<<3)+4>>2];m=j+n;k=o-p;n=j-n;p=o+p;q=b+-1|0;o=+g[e+(q<<3)>>2];j=+g[e+(q<<3)+4>>2];l=n*o-p*j;j=p*o+n*j;g[d+(b<<3)>>2]=(m+l)*.5;g[d+(b<<3)+4>>2]=(k+j)*.5;g[d+(a<<3)>>2]=(m-l)*.5;g[d+(a<<3)+4>>2]=(j-k)*.5;if((b|0)<(f|0))b=b+1|0;else break}return}function Ta(a,b,d){a=a|0;b=b|0;d=d|0;var e=0,f=0,h=0,i=0,j=0,k=0,l=0.0,m=0.0,n=0.0,o=0.0,p=0.0,q=0.0,r=0.0,s=0;f=c[a>>2]|0;if(!(c[f+4>>2]|0)){_a(705,37,1,c[13]|0)|0;va(1)}j=c[f>>2]|0;i=b+(j<<3)|0;h=c[a+4>>2]|0;g[h>>2]=+g[b>>2]+ +g[i>>2];g[h+4>>2]=+g[b>>2]-+g[i>>2];i=(j|0)/2|0;if((j|0)<2){Pa(f,h,d);return}a=c[a+8>>2]|0;e=1;while(1){l=+g[b+(e<<3)>>2];q=+g[b+(e<<3)+4>>2];k=j-e|0;p=+g[b+(k<<3)>>2];r=+g[b+(k<<3)+4>>2];o=l+p;m=q-r;p=l-p;r=q+r;s=e+-1|0;q=+g[a+(s<<3)>>2];l=+g[a+(s<<3)+4>>2];n=p*q-r*l;l=r*q+p*l;g[h+(e<<3)>>2]=o+n;g[h+(e<<3)+4>>2]=m+l;g[h+(k<<3)>>2]=o-n;g[h+(k<<3)+4>>2]=-(m-l);if((e|0)<(i|0))e=e+1|0;else break}Pa(f,h,d);return}function Ua(a,b,c){a=a|0;b=b|0;c=c|0;var d=0.0,e=0.0,f=0,h=0.0,i=0,j=0.0,k=0.0,l=0;k=1.0/+(c|0);l=(c|0)/2|0;if((c|0)<-1)return;else i=0;while(1){c=a+(i<<2)|0;e=+g[c>>2];f=b+(i<<2)|0;h=+g[f>>2];j=+N(+(e*e+h*h));d=+M(+h)+1.0e-010;if(!(e>=0.0)){d=(e+d)/(d-e);d=d*(d*(d*.1963)+-.9817)+2.35619449}else{d=(e-d)/(e+d);d=d*(d*(d*.1963)+-.9817)+.78539816}e=d;g[c>>2]=k*j;g[f>>2]=h<0.0?-e:e;if((i|0)<(l|0))i=i+1|0;else break}return}function Va(a,b,c){a=a|0;b=b|0;c=c|0;var d=0.0,e=0,f=0,h=0,i=0.0,j=0.0;d=1.0/+(c|0);e=(c|0)/2|0;if((c|0)<-1)return;else c=0;while(1){h=a+(c<<2)|0;j=+g[h>>2];f=b+(c<<2)|0;i=+g[f>>2];g[h>>2]=d*+N(+(j*j+i*i));g[f>>2]=0.0;if((c|0)<(e|0))c=c+1|0;else break}return}function Wa(a,b,c){a=a|0;b=b|0;c=c|0;var d=0,e=0,f=0.0,h=0,i=0.0,j=0.0;d=(c|0)/2|0;if((c|0)<-1)return;else c=0;while(1){h=a+(c<<2)|0;j=+g[h>>2];e=b+(c<<2)|0;i=+g[e>>2];f=j*+Q(+i);g[h>>2]=j*+P(+i);g[e>>2]=f;if((c|0)<(d|0))c=c+1|0;else break}return}function Xa(){var a=0;if(!(c[2]|0))a=56;else a=c[(ka()|0)+60>>2]|0;return a|0}function Ya(a){a=a|0;if(a>>>0>4294963200){c[(Xa()|0)>>2]=0-a;a=-1}return a|0}function Za(b,d,e){b=b|0;d=d|0;e=e|0;var f=0,g=0,h=0,i=0;f=e+16|0;g=c[f>>2]|0;if(!g)if(!(eb(e)|0)){g=c[f>>2]|0;h=4}else f=0;else h=4;a:do if((h|0)==4){i=e+20|0;h=c[i>>2]|0;if((g-h|0)>>>0<d>>>0){f=Ba[c[e+36>>2]&3](e,b,d)|0;break}b:do if((a[e+75>>0]|0)>-1){f=d;while(1){if(!f){g=h;f=0;break b}g=f+-1|0;if((a[b+g>>0]|0)==10)break;else f=g}if((Ba[c[e+36>>2]&3](e,b,f)|0)>>>0<f>>>0)break a;d=d-f|0;b=b+f|0;g=c[i>>2]|0}else{g=h;f=0}while(0);kb(g|0,b|0,d|0)|0;c[i>>2]=(c[i>>2]|0)+d;f=f+d|0}while(0);return f|0}function _a(a,b,d,e){a=a|0;b=b|0;d=d|0;e=e|0;var f=0,g=0;f=Z(d,b)|0;if((c[e+76>>2]|0)>-1){g=($a(e)|0)==0;a=Za(a,f,e)|0;if(!g)ab(e)}else a=Za(a,f,e)|0;if((a|0)!=(f|0))d=(a>>>0)/(b>>>0)|0;return d|0}function $a(a){a=a|0;return 0}function ab(a){a=a|0;return}function bb(a){a=a|0;var b=0,d=0;b=i;i=i+16|0;d=b;c[d>>2]=c[a+60>>2];a=Ya(wa(6,d|0)|0)|0;i=b;return a|0}function cb(a,b,d){a=a|0;b=b|0;d=d|0;var e=0,f=0,g=0;f=i;i=i+32|0;g=f;e=f+20|0;c[g>>2]=c[a+60>>2];c[g+4>>2]=0;c[g+8>>2]=b;c[g+12>>2]=e;c[g+16>>2]=d;if((Ya(ua(140,g|0)|0)|0)<0){c[e>>2]=-1;a=-1}else a=c[e>>2]|0;i=f;return a|0}function db(a,b,d){a=a|0;b=b|0;d=d|0;var e=0,f=0,g=0,h=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0,q=0;q=i;i=i+48|0;n=q+16|0;m=q;e=q+32|0;o=a+28|0;f=c[o>>2]|0;c[e>>2]=f;p=a+20|0;f=(c[p>>2]|0)-f|0;c[e+4>>2]=f;c[e+8>>2]=b;c[e+12>>2]=d;k=a+60|0;l=a+44|0;b=2;f=f+d|0;while(1){if(!(c[2]|0)){c[n>>2]=c[k>>2];c[n+4>>2]=e;c[n+8>>2]=b;h=Ya(ya(146,n|0)|0)|0}else{qa(1,a|0);c[m>>2]=c[k>>2];c[m+4>>2]=e;c[m+8>>2]=b;h=Ya(ya(146,m|0)|0)|0;fa(0)}if((f|0)==(h|0)){f=6;break}if((h|0)<0){f=8;break}f=f-h|0;g=c[e+4>>2]|0;if(h>>>0<=g>>>0)if((b|0)==2){c[o>>2]=(c[o>>2]|0)+h;j=g;b=2}else j=g;else{j=c[l>>2]|0;c[o>>2]=j;c[p>>2]=j;j=c[e+12>>2]|0;h=h-g|0;e=e+8|0;b=b+-1|0}c[e>>2]=(c[e>>2]|0)+h;c[e+4>>2]=j-h}if((f|0)==6){n=c[l>>2]|0;c[a+16>>2]=n+(c[a+48>>2]|0);a=n;c[o>>2]=a;c[p>>2]=a}else if((f|0)==8){c[a+16>>2]=0;c[o>>2]=0;c[p>>2]=0;c[a>>2]=c[a>>2]|32;if((b|0)==2)d=0;else d=d-(c[e+4>>2]|0)|0}i=q;return d|0}function eb(b){b=b|0;var d=0,e=0;d=b+74|0;e=a[d>>0]|0;a[d>>0]=e+255|e;d=c[b>>2]|0;if(!(d&8)){c[b+8>>2]=0;c[b+4>>2]=0;d=c[b+44>>2]|0;c[b+28>>2]=d;c[b+20>>2]=d;c[b+16>>2]=d+(c[b+48>>2]|0);d=0}else{c[b>>2]=d|32;d=-1}return d|0}function fb(a){a=a|0;if(!(c[a+68>>2]|0))ab(a);return}function gb(a){a=a|0;var b=0,d=0,e=0,f=0,g=0,h=0,i=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0,q=0,r=0,s=0,t=0,u=0,v=0,w=0,x=0,y=0,z=0,A=0,B=0,C=0,D=0,E=0,F=0,G=0,H=0,I=0,J=0,K=0,L=0,M=0;do if(a>>>0<245){o=a>>>0<11?16:a+11&-8;a=o>>>3;i=c[43]|0;d=i>>>a;if(d&3){a=(d&1^1)+a|0;e=a<<1;d=212+(e<<2)|0;e=212+(e+2<<2)|0;f=c[e>>2]|0;g=f+8|0;h=c[g>>2]|0;do if((d|0)!=(h|0)){if(h>>>0<(c[47]|0)>>>0)la();b=h+12|0;if((c[b>>2]|0)==(f|0)){c[b>>2]=d;c[e>>2]=h;break}else la()}else c[43]=i&~(1<<a);while(0);M=a<<3;c[f+4>>2]=M|3;M=f+(M|4)|0;c[M>>2]=c[M>>2]|1;M=g;return M|0}h=c[45]|0;if(o>>>0>h>>>0){if(d){e=2<<a;e=d<<a&(e|0-e);e=(e&0-e)+-1|0;j=e>>>12&16;e=e>>>j;f=e>>>5&8;e=e>>>f;g=e>>>2&4;e=e>>>g;d=e>>>1&2;e=e>>>d;a=e>>>1&1;a=(f|j|g|d|a)+(e>>>a)|0;e=a<<1;d=212+(e<<2)|0;e=212+(e+2<<2)|0;g=c[e>>2]|0;j=g+8|0;f=c[j>>2]|0;do if((d|0)!=(f|0)){if(f>>>0<(c[47]|0)>>>0)la();b=f+12|0;if((c[b>>2]|0)==(g|0)){c[b>>2]=d;c[e>>2]=f;k=c[45]|0;break}else la()}else{c[43]=i&~(1<<a);k=h}while(0);M=a<<3;h=M-o|0;c[g+4>>2]=o|3;i=g+o|0;c[g+(o|4)>>2]=h|1;c[g+M>>2]=h;if(k){f=c[48]|0;d=k>>>3;b=d<<1;e=212+(b<<2)|0;a=c[43]|0;d=1<<d;if(a&d){a=212+(b+2<<2)|0;b=c[a>>2]|0;if(b>>>0<(c[47]|0)>>>0)la();else{l=a;m=b}}else{c[43]=a|d;l=212+(b+2<<2)|0;m=e}c[l>>2]=f;c[m+12>>2]=f;c[f+8>>2]=m;c[f+12>>2]=e}c[45]=h;c[48]=i;M=j;return M|0}a=c[44]|0;if(a){d=(a&0-a)+-1|0;L=d>>>12&16;d=d>>>L;K=d>>>5&8;d=d>>>K;M=d>>>2&4;d=d>>>M;a=d>>>1&2;d=d>>>a;e=d>>>1&1;e=c[476+((K|L|M|a|e)+(d>>>e)<<2)>>2]|0;d=(c[e+4>>2]&-8)-o|0;a=e;while(1){b=c[a+16>>2]|0;if(!b){b=c[a+20>>2]|0;if(!b){j=d;break}}a=(c[b+4>>2]&-8)-o|0;M=a>>>0<d>>>0;d=M?a:d;a=b;e=M?b:e}g=c[47]|0;if(e>>>0<g>>>0)la();i=e+o|0;if(e>>>0>=i>>>0)la();h=c[e+24>>2]|0;d=c[e+12>>2]|0;do if((d|0)==(e|0)){a=e+20|0;b=c[a>>2]|0;if(!b){a=e+16|0;b=c[a>>2]|0;if(!b){n=0;break}}while(1){d=b+20|0;f=c[d>>2]|0;if(f){b=f;a=d;continue}d=b+16|0;f=c[d>>2]|0;if(!f)break;else{b=f;a=d}}if(a>>>0<g>>>0)la();else{c[a>>2]=0;n=b;break}}else{f=c[e+8>>2]|0;if(f>>>0<g>>>0)la();b=f+12|0;if((c[b>>2]|0)!=(e|0))la();a=d+8|0;if((c[a>>2]|0)==(e|0)){c[b>>2]=d;c[a>>2]=f;n=d;break}else la()}while(0);do if(h){b=c[e+28>>2]|0;a=476+(b<<2)|0;if((e|0)==(c[a>>2]|0)){c[a>>2]=n;if(!n){c[44]=c[44]&~(1<<b);break}}else{if(h>>>0<(c[47]|0)>>>0)la();b=h+16|0;if((c[b>>2]|0)==(e|0))c[b>>2]=n;else c[h+20>>2]=n;if(!n)break}a=c[47]|0;if(n>>>0<a>>>0)la();c[n+24>>2]=h;b=c[e+16>>2]|0;do if(b)if(b>>>0<a>>>0)la();else{c[n+16>>2]=b;c[b+24>>2]=n;break}while(0);b=c[e+20>>2]|0;if(b)if(b>>>0<(c[47]|0)>>>0)la();else{c[n+20>>2]=b;c[b+24>>2]=n;break}}while(0);if(j>>>0<16){M=j+o|0;c[e+4>>2]=M|3;M=e+(M+4)|0;c[M>>2]=c[M>>2]|1}else{c[e+4>>2]=o|3;c[e+(o|4)>>2]=j|1;c[e+(j+o)>>2]=j;b=c[45]|0;if(b){g=c[48]|0;d=b>>>3;b=d<<1;f=212+(b<<2)|0;a=c[43]|0;d=1<<d;if(a&d){b=212+(b+2<<2)|0;a=c[b>>2]|0;if(a>>>0<(c[47]|0)>>>0)la();else{p=b;q=a}}else{c[43]=a|d;p=212+(b+2<<2)|0;q=f}c[p>>2]=g;c[q+12>>2]=g;c[g+8>>2]=q;c[g+12>>2]=f}c[45]=j;c[48]=i}M=e+8|0;return M|0}else q=o}else q=o}else if(a>>>0<=4294967231){a=a+11|0;m=a&-8;l=c[44]|0;if(l){d=0-m|0;a=a>>>8;if(a)if(m>>>0>16777215)k=31;else{q=(a+1048320|0)>>>16&8;v=a<<q;p=(v+520192|0)>>>16&4;v=v<<p;k=(v+245760|0)>>>16&2;k=14-(p|q|k)+(v<<k>>>15)|0;k=m>>>(k+7|0)&1|k<<1}else k=0;a=c[476+(k<<2)>>2]|0;a:do if(!a){f=0;a=0;v=86}else{h=d;f=0;i=m<<((k|0)==31?0:25-(k>>>1)|0);j=a;a=0;while(1){g=c[j+4>>2]&-8;d=g-m|0;if(d>>>0<h>>>0)if((g|0)==(m|0)){g=j;a=j;v=90;break a}else a=j;else d=h;v=c[j+20>>2]|0;j=c[j+16+(i>>>31<<2)>>2]|0;f=(v|0)==0|(v|0)==(j|0)?f:v;if(!j){v=86;break}else{h=d;i=i<<1}}}while(0);if((v|0)==86){if((f|0)==0&(a|0)==0){a=2<<k;a=l&(a|0-a);if(!a){q=m;break}a=(a&0-a)+-1|0;n=a>>>12&16;a=a>>>n;l=a>>>5&8;a=a>>>l;p=a>>>2&4;a=a>>>p;q=a>>>1&2;a=a>>>q;f=a>>>1&1;f=c[476+((l|n|p|q|f)+(a>>>f)<<2)>>2]|0;a=0}if(!f){i=d;j=a}else{g=f;v=90}}if((v|0)==90)while(1){v=0;q=(c[g+4>>2]&-8)-m|0;f=q>>>0<d>>>0;d=f?q:d;a=f?g:a;f=c[g+16>>2]|0;if(f){g=f;v=90;continue}g=c[g+20>>2]|0;if(!g){i=d;j=a;break}else v=90}if((j|0)!=0?i>>>0<((c[45]|0)-m|0)>>>0:0){f=c[47]|0;if(j>>>0<f>>>0)la();h=j+m|0;if(j>>>0>=h>>>0)la();g=c[j+24>>2]|0;d=c[j+12>>2]|0;do if((d|0)==(j|0)){a=j+20|0;b=c[a>>2]|0;if(!b){a=j+16|0;b=c[a>>2]|0;if(!b){o=0;break}}while(1){d=b+20|0;e=c[d>>2]|0;if(e){b=e;a=d;continue}d=b+16|0;e=c[d>>2]|0;if(!e)break;else{b=e;a=d}}if(a>>>0<f>>>0)la();else{c[a>>2]=0;o=b;break}}else{e=c[j+8>>2]|0;if(e>>>0<f>>>0)la();b=e+12|0;if((c[b>>2]|0)!=(j|0))la();a=d+8|0;if((c[a>>2]|0)==(j|0)){c[b>>2]=d;c[a>>2]=e;o=d;break}else la()}while(0);do if(g){b=c[j+28>>2]|0;a=476+(b<<2)|0;if((j|0)==(c[a>>2]|0)){c[a>>2]=o;if(!o){c[44]=c[44]&~(1<<b);break}}else{if(g>>>0<(c[47]|0)>>>0)la();b=g+16|0;if((c[b>>2]|0)==(j|0))c[b>>2]=o;else c[g+20>>2]=o;if(!o)break}a=c[47]|0;if(o>>>0<a>>>0)la();c[o+24>>2]=g;b=c[j+16>>2]|0;do if(b)if(b>>>0<a>>>0)la();else{c[o+16>>2]=b;c[b+24>>2]=o;break}while(0);b=c[j+20>>2]|0;if(b)if(b>>>0<(c[47]|0)>>>0)la();else{c[o+20>>2]=b;c[b+24>>2]=o;break}}while(0);b:do if(i>>>0>=16){c[j+4>>2]=m|3;c[j+(m|4)>>2]=i|1;c[j+(i+m)>>2]=i;b=i>>>3;if(i>>>0<256){a=b<<1;e=212+(a<<2)|0;d=c[43]|0;b=1<<b;if(d&b){b=212+(a+2<<2)|0;a=c[b>>2]|0;if(a>>>0<(c[47]|0)>>>0)la();else{s=b;t=a}}else{c[43]=d|b;s=212+(a+2<<2)|0;t=e}c[s>>2]=h;c[t+12>>2]=h;c[j+(m+8)>>2]=t;c[j+(m+12)>>2]=e;break}b=i>>>8;if(b)if(i>>>0>16777215)e=31;else{L=(b+1048320|0)>>>16&8;M=b<<L;K=(M+520192|0)>>>16&4;M=M<<K;e=(M+245760|0)>>>16&2;e=14-(K|L|e)+(M<<e>>>15)|0;e=i>>>(e+7|0)&1|e<<1}else e=0;b=476+(e<<2)|0;c[j+(m+28)>>2]=e;c[j+(m+20)>>2]=0;c[j+(m+16)>>2]=0;a=c[44]|0;d=1<<e;if(!(a&d)){c[44]=a|d;c[b>>2]=h;c[j+(m+24)>>2]=b;c[j+(m+12)>>2]=h;c[j+(m+8)>>2]=h;break}b=c[b>>2]|0;c:do if((c[b+4>>2]&-8|0)!=(i|0)){e=i<<((e|0)==31?0:25-(e>>>1)|0);while(1){a=b+16+(e>>>31<<2)|0;d=c[a>>2]|0;if(!d)break;if((c[d+4>>2]&-8|0)==(i|0)){y=d;break c}else{e=e<<1;b=d}}if(a>>>0<(c[47]|0)>>>0)la();else{c[a>>2]=h;c[j+(m+24)>>2]=b;c[j+(m+12)>>2]=h;c[j+(m+8)>>2]=h;break b}}else y=b;while(0);b=y+8|0;a=c[b>>2]|0;M=c[47]|0;if(a>>>0>=M>>>0&y>>>0>=M>>>0){c[a+12>>2]=h;c[b>>2]=h;c[j+(m+8)>>2]=a;c[j+(m+12)>>2]=y;c[j+(m+24)>>2]=0;break}else la()}else{M=i+m|0;c[j+4>>2]=M|3;M=j+(M+4)|0;c[M>>2]=c[M>>2]|1}while(0);M=j+8|0;return M|0}else q=m}else q=m}else q=-1;while(0);d=c[45]|0;if(d>>>0>=q>>>0){b=d-q|0;a=c[48]|0;if(b>>>0>15){c[48]=a+q;c[45]=b;c[a+(q+4)>>2]=b|1;c[a+d>>2]=b;c[a+4>>2]=q|3}else{c[45]=0;c[48]=0;c[a+4>>2]=d|3;M=a+(d+4)|0;c[M>>2]=c[M>>2]|1}M=a+8|0;return M|0}a=c[46]|0;if(a>>>0>q>>>0){L=a-q|0;c[46]=L;M=c[49]|0;c[49]=M+q;c[M+(q+4)>>2]=L|1;c[M+4>>2]=q|3;M=M+8|0;return M|0}do if(!(c[161]|0)){a=ja(30)|0;if(!(a+-1&a)){c[163]=a;c[162]=a;c[164]=-1;c[165]=-1;c[166]=0;c[154]=0;c[161]=(pa(0)|0)&-16^1431655768;break}else la()}while(0);j=q+48|0;i=c[163]|0;k=q+47|0;h=i+k|0;i=0-i|0;l=h&i;if(l>>>0<=q>>>0){M=0;return M|0}a=c[153]|0;if((a|0)!=0?(t=c[151]|0,y=t+l|0,y>>>0<=t>>>0|y>>>0>a>>>0):0){M=0;return M|0}d:do if(!(c[154]&4)){a=c[49]|0;e:do if(a){f=620;while(1){d=c[f>>2]|0;if(d>>>0<=a>>>0?(r=f+4|0,(d+(c[r>>2]|0)|0)>>>0>a>>>0):0){g=f;a=r;break}f=c[f+8>>2]|0;if(!f){v=174;break e}}d=h-(c[46]|0)&i;if(d>>>0<2147483647){f=oa(d|0)|0;y=(f|0)==((c[g>>2]|0)+(c[a>>2]|0)|0);a=y?d:0;if(y){if((f|0)!=(-1|0)){w=f;p=a;v=194;break d}}else v=184}else a=0}else v=174;while(0);do if((v|0)==174){g=oa(0)|0;if((g|0)!=(-1|0)){a=g;d=c[162]|0;f=d+-1|0;if(!(f&a))d=l;else d=l-a+(f+a&0-d)|0;a=c[151]|0;f=a+d|0;if(d>>>0>q>>>0&d>>>0<2147483647){y=c[153]|0;if((y|0)!=0?f>>>0<=a>>>0|f>>>0>y>>>0:0){a=0;break}f=oa(d|0)|0;y=(f|0)==(g|0);a=y?d:0;if(y){w=g;p=a;v=194;break d}else v=184}else a=0}else a=0}while(0);f:do if((v|0)==184){g=0-d|0;do if(j>>>0>d>>>0&(d>>>0<2147483647&(f|0)!=(-1|0))?(u=c[163]|0,u=k-d+u&0-u,u>>>0<2147483647):0)if((oa(u|0)|0)==(-1|0)){oa(g|0)|0;break f}else{d=u+d|0;break}while(0);if((f|0)!=(-1|0)){w=f;p=d;v=194;break d}}while(0);c[154]=c[154]|4;v=191}else{a=0;v=191}while(0);if((((v|0)==191?l>>>0<2147483647:0)?(w=oa(l|0)|0,x=oa(0)|0,w>>>0<x>>>0&((w|0)!=(-1|0)&(x|0)!=(-1|0))):0)?(z=x-w|0,A=z>>>0>(q+40|0)>>>0,A):0){p=A?z:a;v=194}if((v|0)==194){a=(c[151]|0)+p|0;c[151]=a;if(a>>>0>(c[152]|0)>>>0)c[152]=a;h=c[49]|0;g:do if(h){g=620;do{a=c[g>>2]|0;d=g+4|0;f=c[d>>2]|0;if((w|0)==(a+f|0)){B=a;C=d;D=f;E=g;v=204;break}g=c[g+8>>2]|0}while((g|0)!=0);if(((v|0)==204?(c[E+12>>2]&8|0)==0:0)?h>>>0<w>>>0&h>>>0>=B>>>0:0){c[C>>2]=D+p;M=(c[46]|0)+p|0;L=h+8|0;L=(L&7|0)==0?0:0-L&7;K=M-L|0;c[49]=h+L;c[46]=K;c[h+(L+4)>>2]=K|1;c[h+(M+4)>>2]=40;c[50]=c[165];break}a=c[47]|0;if(w>>>0<a>>>0){c[47]=w;a=w}d=w+p|0;g=620;while(1){if((c[g>>2]|0)==(d|0)){f=g;d=g;v=212;break}g=c[g+8>>2]|0;if(!g){d=620;break}}if((v|0)==212)if(!(c[d+12>>2]&8)){c[f>>2]=w;n=d+4|0;c[n>>2]=(c[n>>2]|0)+p;n=w+8|0;n=(n&7|0)==0?0:0-n&7;k=w+(p+8)|0;k=(k&7|0)==0?0:0-k&7;b=w+(k+p)|0;m=n+q|0;o=w+m|0;l=b-(w+n)-q|0;c[w+(n+4)>>2]=q|3;h:do if((b|0)!=(h|0)){if((b|0)==(c[48]|0)){M=(c[45]|0)+l|0;c[45]=M;c[48]=o;c[w+(m+4)>>2]=M|1;c[w+(M+m)>>2]=M;break}i=p+4|0;d=c[w+(i+k)>>2]|0;if((d&3|0)==1){j=d&-8;g=d>>>3;i:do if(d>>>0>=256){h=c[w+((k|24)+p)>>2]|0;e=c[w+(p+12+k)>>2]|0;do if((e|0)==(b|0)){f=k|16;e=w+(i+f)|0;d=c[e>>2]|0;if(!d){e=w+(f+p)|0;d=c[e>>2]|0;if(!d){J=0;break}}while(1){f=d+20|0;g=c[f>>2]|0;if(g){d=g;e=f;continue}f=d+16|0;g=c[f>>2]|0;if(!g)break;else{d=g;e=f}}if(e>>>0<a>>>0)la();else{c[e>>2]=0;J=d;break}}else{f=c[w+((k|8)+p)>>2]|0;if(f>>>0<a>>>0)la();a=f+12|0;if((c[a>>2]|0)!=(b|0))la();d=e+8|0;if((c[d>>2]|0)==(b|0)){c[a>>2]=e;c[d>>2]=f;J=e;break}else la()}while(0);if(!h)break;a=c[w+(p+28+k)>>2]|0;d=476+(a<<2)|0;do if((b|0)!=(c[d>>2]|0)){if(h>>>0<(c[47]|0)>>>0)la();a=h+16|0;if((c[a>>2]|0)==(b|0))c[a>>2]=J;else c[h+20>>2]=J;if(!J)break i}else{c[d>>2]=J;if(J)break;c[44]=c[44]&~(1<<a);break i}while(0);d=c[47]|0;if(J>>>0<d>>>0)la();c[J+24>>2]=h;b=k|16;a=c[w+(b+p)>>2]|0;do if(a)if(a>>>0<d>>>0)la();else{c[J+16>>2]=a;c[a+24>>2]=J;break}while(0);b=c[w+(i+b)>>2]|0;if(!b)break;if(b>>>0<(c[47]|0)>>>0)la();else{c[J+20>>2]=b;c[b+24>>2]=J;break}}else{e=c[w+((k|8)+p)>>2]|0;f=c[w+(p+12+k)>>2]|0;d=212+(g<<1<<2)|0;do if((e|0)!=(d|0)){if(e>>>0<a>>>0)la();if((c[e+12>>2]|0)==(b|0))break;la()}while(0);if((f|0)==(e|0)){c[43]=c[43]&~(1<<g);break}do if((f|0)==(d|0))F=f+8|0;else{if(f>>>0<a>>>0)la();a=f+8|0;if((c[a>>2]|0)==(b|0)){F=a;break}la()}while(0);c[e+12>>2]=f;c[F>>2]=e}while(0);b=w+((j|k)+p)|0;f=j+l|0}else f=l;b=b+4|0;c[b>>2]=c[b>>2]&-2;c[w+(m+4)>>2]=f|1;c[w+(f+m)>>2]=f;b=f>>>3;if(f>>>0<256){a=b<<1;e=212+(a<<2)|0;d=c[43]|0;b=1<<b;do if(!(d&b)){c[43]=d|b;K=212+(a+2<<2)|0;L=e}else{b=212+(a+2<<2)|0;a=c[b>>2]|0;if(a>>>0>=(c[47]|0)>>>0){K=b;L=a;break}la()}while(0);c[K>>2]=o;c[L+12>>2]=o;c[w+(m+8)>>2]=L;c[w+(m+12)>>2]=e;break}b=f>>>8;do if(!b)e=0;else{if(f>>>0>16777215){e=31;break}K=(b+1048320|0)>>>16&8;L=b<<K;J=(L+520192|0)>>>16&4;L=L<<J;e=(L+245760|0)>>>16&2;e=14-(J|K|e)+(L<<e>>>15)|0;e=f>>>(e+7|0)&1|e<<1}while(0);b=476+(e<<2)|0;c[w+(m+28)>>2]=e;c[w+(m+20)>>2]=0;c[w+(m+16)>>2]=0;a=c[44]|0;d=1<<e;if(!(a&d)){c[44]=a|d;c[b>>2]=o;c[w+(m+24)>>2]=b;c[w+(m+12)>>2]=o;c[w+(m+8)>>2]=o;break}b=c[b>>2]|0;j:do if((c[b+4>>2]&-8|0)!=(f|0)){e=f<<((e|0)==31?0:25-(e>>>1)|0);while(1){a=b+16+(e>>>31<<2)|0;d=c[a>>2]|0;if(!d)break;if((c[d+4>>2]&-8|0)==(f|0)){M=d;break j}else{e=e<<1;b=d}}if(a>>>0<(c[47]|0)>>>0)la();else{c[a>>2]=o;c[w+(m+24)>>2]=b;c[w+(m+12)>>2]=o;c[w+(m+8)>>2]=o;break h}}else M=b;while(0);b=M+8|0;a=c[b>>2]|0;L=c[47]|0;if(a>>>0>=L>>>0&M>>>0>=L>>>0){c[a+12>>2]=o;c[b>>2]=o;c[w+(m+8)>>2]=a;c[w+(m+12)>>2]=M;c[w+(m+24)>>2]=0;break}else la()}else{M=(c[46]|0)+l|0;c[46]=M;c[49]=o;c[w+(m+4)>>2]=M|1}while(0);M=w+(n|8)|0;return M|0}else d=620;while(1){a=c[d>>2]|0;if(a>>>0<=h>>>0?(b=c[d+4>>2]|0,e=a+b|0,e>>>0>h>>>0):0)break;d=c[d+8>>2]|0}f=a+(b+-39)|0;a=a+(b+-47+((f&7|0)==0?0:0-f&7))|0;f=h+16|0;a=a>>>0<f>>>0?h:a;b=a+8|0;d=w+8|0;d=(d&7|0)==0?0:0-d&7;M=p+-40-d|0;c[49]=w+d;c[46]=M;c[w+(d+4)>>2]=M|1;c[w+(p+-36)>>2]=40;c[50]=c[165];d=a+4|0;c[d>>2]=27;c[b>>2]=c[155];c[b+4>>2]=c[156];c[b+8>>2]=c[157];c[b+12>>2]=c[158];c[155]=w;c[156]=p;c[158]=0;c[157]=b;b=a+28|0;c[b>>2]=7;if((a+32|0)>>>0<e>>>0)do{M=b;b=b+4|0;c[b>>2]=7}while((M+8|0)>>>0<e>>>0);if((a|0)!=(h|0)){g=a-h|0;c[d>>2]=c[d>>2]&-2;c[h+4>>2]=g|1;c[a>>2]=g;b=g>>>3;if(g>>>0<256){a=b<<1;e=212+(a<<2)|0;d=c[43]|0;b=1<<b;if(d&b){b=212+(a+2<<2)|0;a=c[b>>2]|0;if(a>>>0<(c[47]|0)>>>0)la();else{G=b;H=a}}else{c[43]=d|b;G=212+(a+2<<2)|0;H=e}c[G>>2]=h;c[H+12>>2]=h;c[h+8>>2]=H;c[h+12>>2]=e;break}b=g>>>8;if(b)if(g>>>0>16777215)e=31;else{L=(b+1048320|0)>>>16&8;M=b<<L;K=(M+520192|0)>>>16&4;M=M<<K;e=(M+245760|0)>>>16&2;e=14-(K|L|e)+(M<<e>>>15)|0;e=g>>>(e+7|0)&1|e<<1}else e=0;d=476+(e<<2)|0;c[h+28>>2]=e;c[h+20>>2]=0;c[f>>2]=0;b=c[44]|0;a=1<<e;if(!(b&a)){c[44]=b|a;c[d>>2]=h;c[h+24>>2]=d;c[h+12>>2]=h;c[h+8>>2]=h;break}b=c[d>>2]|0;k:do if((c[b+4>>2]&-8|0)!=(g|0)){e=g<<((e|0)==31?0:25-(e>>>1)|0);while(1){a=b+16+(e>>>31<<2)|0;d=c[a>>2]|0;if(!d)break;if((c[d+4>>2]&-8|0)==(g|0)){I=d;break k}else{e=e<<1;b=d}}if(a>>>0<(c[47]|0)>>>0)la();else{c[a>>2]=h;c[h+24>>2]=b;c[h+12>>2]=h;c[h+8>>2]=h;break g}}else I=b;while(0);b=I+8|0;a=c[b>>2]|0;M=c[47]|0;if(a>>>0>=M>>>0&I>>>0>=M>>>0){c[a+12>>2]=h;c[b>>2]=h;c[h+8>>2]=a;c[h+12>>2]=I;c[h+24>>2]=0;break}else la()}}else{M=c[47]|0;if((M|0)==0|w>>>0<M>>>0)c[47]=w;c[155]=w;c[156]=p;c[158]=0;c[52]=c[161];c[51]=-1;b=0;do{M=b<<1;L=212+(M<<2)|0;c[212+(M+3<<2)>>2]=L;c[212+(M+2<<2)>>2]=L;b=b+1|0}while((b|0)!=32);M=w+8|0;M=(M&7|0)==0?0:0-M&7;L=p+-40-M|0;c[49]=w+M;c[46]=L;c[w+(M+4)>>2]=L|1;c[w+(p+-36)>>2]=40;c[50]=c[165]}while(0);b=c[46]|0;if(b>>>0>q>>>0){L=b-q|0;c[46]=L;M=c[49]|0;c[49]=M+q;c[M+(q+4)>>2]=L|1;c[M+4>>2]=q|3;M=M+8|0;return M|0}}c[(Xa()|0)>>2]=12;M=0;return M|0}function hb(a){a=a|0;var b=0,d=0,e=0,f=0,g=0,h=0,i=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0,q=0,r=0,s=0,t=0,u=0;if(!a)return;b=a+-8|0;i=c[47]|0;if(b>>>0<i>>>0)la();d=c[a+-4>>2]|0;e=d&3;if((e|0)==1)la();o=d&-8;q=a+(o+-8)|0;do if(!(d&1)){b=c[b>>2]|0;if(!e)return;j=-8-b|0;l=a+j|0;m=b+o|0;if(l>>>0<i>>>0)la();if((l|0)==(c[48]|0)){b=a+(o+-4)|0;d=c[b>>2]|0;if((d&3|0)!=3){u=l;g=m;break}c[45]=m;c[b>>2]=d&-2;c[a+(j+4)>>2]=m|1;c[q>>2]=m;return}f=b>>>3;if(b>>>0<256){e=c[a+(j+8)>>2]|0;d=c[a+(j+12)>>2]|0;b=212+(f<<1<<2)|0;if((e|0)!=(b|0)){if(e>>>0<i>>>0)la();if((c[e+12>>2]|0)!=(l|0))la()}if((d|0)==(e|0)){c[43]=c[43]&~(1<<f);u=l;g=m;break}if((d|0)!=(b|0)){if(d>>>0<i>>>0)la();b=d+8|0;if((c[b>>2]|0)==(l|0))h=b;else la()}else h=d+8|0;c[e+12>>2]=d;c[h>>2]=e;u=l;g=m;break}h=c[a+(j+24)>>2]|0;e=c[a+(j+12)>>2]|0;do if((e|0)==(l|0)){d=a+(j+20)|0;b=c[d>>2]|0;if(!b){d=a+(j+16)|0;b=c[d>>2]|0;if(!b){k=0;break}}while(1){e=b+20|0;f=c[e>>2]|0;if(f){b=f;d=e;continue}e=b+16|0;f=c[e>>2]|0;if(!f)break;else{b=f;d=e}}if(d>>>0<i>>>0)la();else{c[d>>2]=0;k=b;break}}else{f=c[a+(j+8)>>2]|0;if(f>>>0<i>>>0)la();b=f+12|0;if((c[b>>2]|0)!=(l|0))la();d=e+8|0;if((c[d>>2]|0)==(l|0)){c[b>>2]=e;c[d>>2]=f;k=e;break}else la()}while(0);if(h){b=c[a+(j+28)>>2]|0;d=476+(b<<2)|0;if((l|0)==(c[d>>2]|0)){c[d>>2]=k;if(!k){c[44]=c[44]&~(1<<b);u=l;g=m;break}}else{if(h>>>0<(c[47]|0)>>>0)la();b=h+16|0;if((c[b>>2]|0)==(l|0))c[b>>2]=k;else c[h+20>>2]=k;if(!k){u=l;g=m;break}}d=c[47]|0;if(k>>>0<d>>>0)la();c[k+24>>2]=h;b=c[a+(j+16)>>2]|0;do if(b)if(b>>>0<d>>>0)la();else{c[k+16>>2]=b;c[b+24>>2]=k;break}while(0);b=c[a+(j+20)>>2]|0;if(b)if(b>>>0<(c[47]|0)>>>0)la();else{c[k+20>>2]=b;c[b+24>>2]=k;u=l;g=m;break}else{u=l;g=m}}else{u=l;g=m}}else{u=b;g=o}while(0);if(u>>>0>=q>>>0)la();b=a+(o+-4)|0;d=c[b>>2]|0;if(!(d&1))la();if(!(d&2)){if((q|0)==(c[49]|0)){t=(c[46]|0)+g|0;c[46]=t;c[49]=u;c[u+4>>2]=t|1;if((u|0)!=(c[48]|0))return;c[48]=0;c[45]=0;return}if((q|0)==(c[48]|0)){t=(c[45]|0)+g|0;c[45]=t;c[48]=u;c[u+4>>2]=t|1;c[u+t>>2]=t;return}g=(d&-8)+g|0;f=d>>>3;do if(d>>>0>=256){h=c[a+(o+16)>>2]|0;b=c[a+(o|4)>>2]|0;do if((b|0)==(q|0)){d=a+(o+12)|0;b=c[d>>2]|0;if(!b){d=a+(o+8)|0;b=c[d>>2]|0;if(!b){p=0;break}}while(1){e=b+20|0;f=c[e>>2]|0;if(f){b=f;d=e;continue}e=b+16|0;f=c[e>>2]|0;if(!f)break;else{b=f;d=e}}if(d>>>0<(c[47]|0)>>>0)la();else{c[d>>2]=0;p=b;break}}else{d=c[a+o>>2]|0;if(d>>>0<(c[47]|0)>>>0)la();e=d+12|0;if((c[e>>2]|0)!=(q|0))la();f=b+8|0;if((c[f>>2]|0)==(q|0)){c[e>>2]=b;c[f>>2]=d;p=b;break}else la()}while(0);if(h){b=c[a+(o+20)>>2]|0;d=476+(b<<2)|0;if((q|0)==(c[d>>2]|0)){c[d>>2]=p;if(!p){c[44]=c[44]&~(1<<b);break}}else{if(h>>>0<(c[47]|0)>>>0)la();b=h+16|0;if((c[b>>2]|0)==(q|0))c[b>>2]=p;else c[h+20>>2]=p;if(!p)break}d=c[47]|0;if(p>>>0<d>>>0)la();c[p+24>>2]=h;b=c[a+(o+8)>>2]|0;do if(b)if(b>>>0<d>>>0)la();else{c[p+16>>2]=b;c[b+24>>2]=p;break}while(0);b=c[a+(o+12)>>2]|0;if(b)if(b>>>0<(c[47]|0)>>>0)la();else{c[p+20>>2]=b;c[b+24>>2]=p;break}}}else{e=c[a+o>>2]|0;d=c[a+(o|4)>>2]|0;b=212+(f<<1<<2)|0;if((e|0)!=(b|0)){if(e>>>0<(c[47]|0)>>>0)la();if((c[e+12>>2]|0)!=(q|0))la()}if((d|0)==(e|0)){c[43]=c[43]&~(1<<f);break}if((d|0)!=(b|0)){if(d>>>0<(c[47]|0)>>>0)la();b=d+8|0;if((c[b>>2]|0)==(q|0))n=b;else la()}else n=d+8|0;c[e+12>>2]=d;c[n>>2]=e}while(0);c[u+4>>2]=g|1;c[u+g>>2]=g;if((u|0)==(c[48]|0)){c[45]=g;return}}else{c[b>>2]=d&-2;c[u+4>>2]=g|1;c[u+g>>2]=g}b=g>>>3;if(g>>>0<256){d=b<<1;f=212+(d<<2)|0;e=c[43]|0;b=1<<b;if(e&b){b=212+(d+2<<2)|0;d=c[b>>2]|0;if(d>>>0<(c[47]|0)>>>0)la();else{r=b;s=d}}else{c[43]=e|b;r=212+(d+2<<2)|0;s=f}c[r>>2]=u;c[s+12>>2]=u;c[u+8>>2]=s;c[u+12>>2]=f;return}b=g>>>8;if(b)if(g>>>0>16777215)f=31;else{r=(b+1048320|0)>>>16&8;s=b<<r;q=(s+520192|0)>>>16&4;s=s<<q;f=(s+245760|0)>>>16&2;f=14-(q|r|f)+(s<<f>>>15)|0;f=g>>>(f+7|0)&1|f<<1}else f=0;b=476+(f<<2)|0;c[u+28>>2]=f;c[u+20>>2]=0;c[u+16>>2]=0;d=c[44]|0;e=1<<f;a:do if(d&e){b=c[b>>2]|0;b:do if((c[b+4>>2]&-8|0)!=(g|0)){f=g<<((f|0)==31?0:25-(f>>>1)|0);while(1){d=b+16+(f>>>31<<2)|0;e=c[d>>2]|0;if(!e)break;if((c[e+4>>2]&-8|0)==(g|0)){t=e;break b}else{f=f<<1;b=e}}if(d>>>0<(c[47]|0)>>>0)la();else{c[d>>2]=u;c[u+24>>2]=b;c[u+12>>2]=u;c[u+8>>2]=u;break a}}else t=b;while(0);b=t+8|0;d=c[b>>2]|0;s=c[47]|0;if(d>>>0>=s>>>0&t>>>0>=s>>>0){c[d+12>>2]=u;c[b>>2]=u;c[u+8>>2]=d;c[u+12>>2]=t;c[u+24>>2]=0;break}else la()}else{c[44]=d|e;c[b>>2]=u;c[u+24>>2]=b;c[u+12>>2]=u;c[u+8>>2]=u}while(0);u=(c[51]|0)+-1|0;c[51]=u;if(!u)b=628;else return;while(1){b=c[b>>2]|0;if(!b)break;else b=b+8|0}c[51]=-1;return}function ib(){}function jb(b,d,e){b=b|0;d=d|0;e=e|0;var f=0,g=0,h=0,i=0;f=b+e|0;if((e|0)>=20){d=d&255;h=b&3;i=d|d<<8|d<<16|d<<24;g=f&~3;if(h){h=b+4-h|0;while((b|0)<(h|0)){a[b>>0]=d;b=b+1|0}}while((b|0)<(g|0)){c[b>>2]=i;b=b+4|0}}while((b|0)<(f|0)){a[b>>0]=d;b=b+1|0}return b-e|0}function kb(b,d,e){b=b|0;d=d|0;e=e|0;var f=0;if((e|0)>=4096)return ra(b|0,d|0,e|0)|0;f=b|0;if((b&3)==(d&3)){while(b&3){if(!e)return f|0;a[b>>0]=a[d>>0]|0;b=b+1|0;d=d+1|0;e=e-1|0}while((e|0)>=4){c[b>>2]=c[d>>2];b=b+4|0;d=d+4|0;e=e-4|0}}while((e|0)>0){a[b>>0]=a[d>>0]|0;b=b+1|0;d=d+1|0;e=e-1|0}return f|0}function lb(a,b){a=a|0;b=b|0;return Aa[a&1](b|0)|0}function mb(a,b,c,d){a=a|0;b=b|0;c=c|0;d=d|0;return Ba[a&3](b|0,c|0,d|0)|0}function nb(a,b){a=a|0;b=b|0;Ca[a&1](b|0)}function ob(a){a=a|0;aa(0);return 0}function pb(a,b,c){a=a|0;b=b|0;c=c|0;aa(1);return 0}function qb(a){a=a|0;aa(2)}

// EMSCRIPTEN_END_FUNCS
var Aa=[ob,bb];var Ba=[pb,db,cb,pb];var Ca=[qb,fb];return{_polar_rect:Wa,_rect_polar_zerophase:Va,_free:hb,_kiss_fftr_alloc:Ra,_kiss_fftri:Ta,_kiss_fftr_free:Qa,_kiss_fft_alloc:Na,_memset:jb,_kiss_fftr:Sa,_kiss_fft:Pa,_memcpy:kb,_malloc:gb,_kiss_fft_free:Ma,_rect_polar:Ua,runPostSets:ib,stackAlloc:Da,stackSave:Ea,stackRestore:Fa,establishStackSpace:Ga,setThrew:Ha,setTempRet0:Ka,getTempRet0:La,dynCall_ii:lb,dynCall_iiii:mb,dynCall_vi:nb}})


// EMSCRIPTEN_END_ASM
(Module.asmGlobalArg,Module.asmLibraryArg,buffer);var _polar_rect=Module["_polar_rect"]=asm["_polar_rect"];var _rect_polar_zerophase=Module["_rect_polar_zerophase"]=asm["_rect_polar_zerophase"];var _free=Module["_free"]=asm["_free"];var runPostSets=Module["runPostSets"]=asm["runPostSets"];var _kiss_fftr_alloc=Module["_kiss_fftr_alloc"]=asm["_kiss_fftr_alloc"];var _kiss_fftr_free=Module["_kiss_fftr_free"]=asm["_kiss_fftr_free"];var _kiss_fftri=Module["_kiss_fftri"]=asm["_kiss_fftri"];var _kiss_fft_alloc=Module["_kiss_fft_alloc"]=asm["_kiss_fft_alloc"];var _memset=Module["_memset"]=asm["_memset"];var _kiss_fftr=Module["_kiss_fftr"]=asm["_kiss_fftr"];var _kiss_fft=Module["_kiss_fft"]=asm["_kiss_fft"];var _memcpy=Module["_memcpy"]=asm["_memcpy"];var _malloc=Module["_malloc"]=asm["_malloc"];var _kiss_fft_free=Module["_kiss_fft_free"]=asm["_kiss_fft_free"];var _rect_polar=Module["_rect_polar"]=asm["_rect_polar"];var dynCall_ii=Module["dynCall_ii"]=asm["dynCall_ii"];var dynCall_iiii=Module["dynCall_iiii"]=asm["dynCall_iiii"];var dynCall_vi=Module["dynCall_vi"]=asm["dynCall_vi"];Runtime.stackAlloc=asm["stackAlloc"];Runtime.stackSave=asm["stackSave"];Runtime.stackRestore=asm["stackRestore"];Runtime.establishStackSpace=asm["establishStackSpace"];Runtime.setTempRet0=asm["setTempRet0"];Runtime.getTempRet0=asm["getTempRet0"];function ExitStatus(status){this.name="ExitStatus";this.message="Program terminated with exit("+status+")";this.status=status}ExitStatus.prototype=new Error;ExitStatus.prototype.constructor=ExitStatus;var initialStackTop;var preloadStartTime=null;var calledMain=false;dependenciesFulfilled=function runCaller(){if(!Module["calledRun"])run();if(!Module["calledRun"])dependenciesFulfilled=runCaller};Module["callMain"]=Module.callMain=function callMain(args){assert(runDependencies==0,"cannot call main when async dependencies remain! (listen on __ATMAIN__)");assert(__ATPRERUN__.length==0,"cannot call main when preRun functions remain to be called");args=args||[];ensureInitRuntime();var argc=args.length+1;function pad(){for(var i=0;i<4-1;i++){argv.push(0)}}var argv=[allocate(intArrayFromString(Module["thisProgram"]),"i8",ALLOC_NORMAL)];pad();for(var i=0;i<argc-1;i=i+1){argv.push(allocate(intArrayFromString(args[i]),"i8",ALLOC_NORMAL));pad()}argv.push(0);argv=allocate(argv,"i32",ALLOC_NORMAL);try{var ret=Module["_main"](argc,argv,0);exit(ret,true)}catch(e){if(e instanceof ExitStatus){return}else if(e=="SimulateInfiniteLoop"){Module["noExitRuntime"]=true;return}else{if(e&&typeof e==="object"&&e.stack)Module.printErr("exception thrown: "+[e,e.stack]);throw e}}finally{calledMain=true}};function run(args){args=args||Module["arguments"];if(preloadStartTime===null)preloadStartTime=Date.now();if(runDependencies>0){return}preRun();if(runDependencies>0)return;if(Module["calledRun"])return;function doRun(){if(Module["calledRun"])return;Module["calledRun"]=true;if(ABORT)return;ensureInitRuntime();preMain();if(Module["onRuntimeInitialized"])Module["onRuntimeInitialized"]();if(Module["_main"]&&shouldRunNow)Module["callMain"](args);postRun()}if(Module["setStatus"]){Module["setStatus"]("Running...");setTimeout((function(){setTimeout((function(){Module["setStatus"]("")}),1);doRun()}),1)}else{doRun()}}Module["run"]=Module.run=run;function exit(status,implicit){if(implicit&&Module["noExitRuntime"]){return}if(Module["noExitRuntime"]){}else{ABORT=true;EXITSTATUS=status;STACKTOP=initialStackTop;exitRuntime();if(Module["onExit"])Module["onExit"](status)}if(ENVIRONMENT_IS_NODE){process["stdout"]["once"]("drain",(function(){process["exit"](status)}));console.log(" ");setTimeout((function(){process["exit"](status)}),500)}else if(ENVIRONMENT_IS_SHELL&&typeof quit==="function"){quit(status)}throw new ExitStatus(status)}Module["exit"]=Module.exit=exit;var abortDecorators=[];function abort(what){if(what!==undefined){Module.print(what);Module.printErr(what);what=JSON.stringify(what)}else{what=""}ABORT=true;EXITSTATUS=1;var extra="\nIf this abort() is unexpected, build with -s ASSERTIONS=1 which can give more information.";var output="abort("+what+") at "+stackTrace()+extra;if(abortDecorators){abortDecorators.forEach((function(decorator){output=decorator(output,what)}))}throw output}Module["abort"]=Module.abort=abort;if(Module["preInit"]){if(typeof Module["preInit"]=="function")Module["preInit"]=[Module["preInit"]];while(Module["preInit"].length>0){Module["preInit"].pop()()}}var shouldRunNow=true;if(Module["noInitialRun"]){shouldRunNow=false}run()

  return Module;
};

var FFTExtModule = FFTExtModule({});

var kiss_fftr_alloc = FFTExtModule.cwrap(
    'kiss_fftr_alloc', 'number', ['number', 'number', 'number', 'number' ]
);

var kiss_fftr = FFTExtModule.cwrap(
    'kiss_fftr', 'void', ['number', 'number', 'number' ]
);

var kiss_fftri = FFTExtModule.cwrap(
    'kiss_fftri', 'void', ['number', 'number', 'number' ]
);

var kiss_fftr_free = FFTExtModule.cwrap(
    'kiss_fftr_free', 'void', ['number']
);

var kiss_fft_alloc = FFTExtModule.cwrap(
    'kiss_fft_alloc', 'number', ['number', 'number', 'number', 'number' ]
);

var kiss_fft = FFTExtModule.cwrap(
    'kiss_fft', 'void', ['number', 'number', 'number' ]
);

var kiss_fft_free = FFTExtModule.cwrap(
    'kiss_fft_free', 'void', ['number']
);

var rect_polar = FFTExtModule.cwrap(
    'rect_polar', 'void', ['number', 'number', 'number']
);

var rect_polar_zerophase = FFTExtModule.cwrap(
    'rect_polar_zerophase', 'void', ['number', 'number', 'number']
);

var polar_rect = FFTExtModule.cwrap(
    'polar_rect', 'void', ['number', 'number', 'number']
);


function FFTExt(size) {
    this.size = size;
    this.fcfg = kiss_fftr_alloc(size, false);
    this.icfg = kiss_fftr_alloc(size, true);
    
    this.rptr = FFTExtModule._malloc(size*4 + (size+2)*4);
    this.cptr = this.rptr + size*4;
    
    this.ri = new Float32Array(FFTExtModule.HEAPU8.buffer, this.rptr, size);
    this.ci = new Float32Array(FFTExtModule.HEAPU8.buffer, this.cptr, size+2);
    
    this.forward = function(real) {
		this.ri.set(real);
		kiss_fftr(this.fcfg, this.rptr, this.cptr);
		return new Float32Array(FFTExtModule.HEAPU8.buffer,
				this.cptr, this.size + 2);
    }
    
    this.inverse = function(cpx) {
		this.ci.set(cpx);
		kiss_fftri(this.icfg, this.cptr, this.rptr);
		return new Float32Array(FFTExtModule.HEAPU8.buffer,
				this.rptr, this.size);
    }
    
	this.rect_polar = function(re, im, size) {
		this.ri.set(re);
		this.ci.set(im);
		rect_polar(this.rptr, this.cptr, size);
		re.set(this.ri); 
		im.set(this.ci.slice(0,size));
	}
	
	this.rect_polar_zerophase = function(re, im, size) {
		this.ri.set(re);
		this.ci.set(im);
		rect_polar_zerophase(this.rptr, this.cptr, size);
		re.set(this.ri); 
		im.set(this.ci.slice(0,size));
	}
	
	this.polar_rect = function(re, im, size) {
		this.ri.set(re);
		this.ci.set(im);
		polar_rect(this.rptr, this.cptr, size);
		re.set(this.ri); 
		im.set(this.ci.slice(0,size));
	}	

    this.dispose = function() {
		FFTExtModule._free(this.rptr);
		kiss_fftr_free(this.fcfg);
		kiss_fftr_free(this.icfg);
    }
}
function fftwola(fftsize, overlap, samplerate) {	
	// fftsize and overlap should be, of course, powers of 2: overlap in the range 2--8 
	// fftsize from 512 to 4096 or so
	this.fftsize = fftsize;
	this.fftsize2 = fftsize * 2;
	this.overlap = overlap; 	
	this.samplerate = samplerate || 44100.0;
	this.frequnit = this.samplerate / this.fftsize;
	this.fft = new FFTExt(fftsize);	
	
	this.outputAccumulator = new Float32Array(this.fftsize2);
	this.flux =  new Float32Array(this.overlap);

	this.oldmags = new Float32Array(this.fftsize/2 +1);
	for(var i=0; i<this.fftsize/2 +1; ++i) {
		this.oldmags[i] = 0.0;
	}
	
	this.inputAccumulator = new Float32Array(this.fftsize2); 
	this.reals = new Float32Array(this.fftsize);
	this.imags = new Float32Array(this.fftsize);
	this.peaks = [];  
	this.peakindices = [];
	this.hannWindow = new Float32Array(this.fftsize);
	
	for(var i=0; i<this.fftsize; ++i) {
		this.hannWindow[i] = -0.5 * Math.cos(6.2831853 * (i/this.fftsize)) + 0.5;
	}
	
	this.audibleThreshold_dB = new Float32Array(this.fftsize/2 +1);	
	this.audibleThreshold_v = new Float32Array(this.fftsize/2 +1);	
	
	this.audibleThreshold_dB[0] = 0;
	this.audibleThreshold_v[0] = 1;
	
	for(var i=1; i<=this.fftsize/2; ++i) {
		var f = (this.frequnit * i) / 1000;
		this.audibleThreshold_dB[i] = ((3.64 * Math.pow(f, -0.8)) - (6.5 * Math.exp(-0.6 * (f - 3.3) * (f - 3.3))) + (0.001 * Math.pow(f, 4))) - 96.0;
		this.audibleThreshold_v[i] = Math.pow(10, this.audibleThreshold_dB[i] * 0.05);		
	}		

	this.barks = new Float32Array(this.fftsize/2 +1);	
	this.barks[0] = 0;
	for(var i=1; i<=this.fftsize/2; ++i) {
		var f = ((this.frequnit * i) / 1000) * 0.76;
		var f2 = (this.frequnit * i) / 7500;
		this.barks[i] = (13.0 * Math.atan(f)) + (3.5 * Math.atan(f2 * f2));	
	}
	
	this.reset = function() {
		for(var i=0; i < this.fftsize; ++i) {
			this.reals[i] = this.imags[i] = this.inputAccumulator[i] = this.outputAccumulator[i] = 0.0;
		}
		for(var i=this.fftsize; i < this.fftsize2; ++i) {
			this.outputAccumulator[i] = this.inputAccumulator[i] = 0.0;
		}	
	}
	
	this.reset(); // go ahead + initialise everything 
	
	this.window = function() {
		for(var i=0; i<this.fftsize; ++i) {
			this.reals[i] *= this.hannWindow[i];
		}
	}

	this.dispose = function() {
		this.fft.dispose();
	}
	
	this.findPeaks = function() {
		// quick & dirty peak-picking; may miss some, idk, but that doesn't matter too much for our purposes
		this.peaks = [];  // reset 
		this.peakindices = [];
		var diff = 0.0;
		var last_diff = 0.0;
		var windowlength = this.fftsize >= 256 ? this.fftsize/256 : 1; 
		// the smaller this is, (or the larger the denominator that is 256 here, iow) the more peaks will be logged 
		var windowinc = windowlength;
		var tracker = windowlength;
		var reset = 1;
		for(var i=1; i<=this.fftsize/2; ++i) {   
			diff = this.reals[i] - this.reals[i-1];
			if(diff <0.0 && last_diff>=0.0) { // that >= denotes rhs of peak if peak is flat
				if(reset == 1) {
					this.peaks.push(this.reals[i-1]);  
					this.peakindices.push(i-1);
					reset = 0;
					continue;  
				}
				var t = this.peaks.pop();
				if(this.reals[i-1] > t) {
					// if bigger peak found, fuck last peak off (push new one)
					this.peaks.push(this.reals[i-1]);
					this.peakindices.pop();
					this.peakindices.push(i-1);					
					tracker = windowlength;  // reset the tracker 
				}
				else {
					// push old one back, ignore the new (smaller) one
					this.peaks.push(t);
				}
			}
			last_diff = diff;
			tracker--;  
			if(tracker == 0) { 
				windowlength += windowinc;
				tracker = windowlength;
				// reset so first push is a 'free push' without any comparator
				reset = 1;
			}			
		}

	}
	
	this.process = function(input, output) {
		for(var i=this.fftsize; i<this.fftsize2; ++i) {
			this.inputAccumulator[i] = input[i-this.fftsize];
		}
		var step = this.fftsize/this.overlap;
		var norm = 2.6/this.overlap;
		// the factor of 2.6 is to compensate for the hann-windowing
		for(var i=0; i<this.overlap; i++) {
			this.flux[i] = 0.0;
		}
		for(var stage=0; stage<this.overlap; stage++) {
			var hop1 = step * (stage+1);
			var hop2 = step * stage;
			for(var i=0; i<this.fftsize; ++i) {
				this.reals[i] = this.inputAccumulator[i + hop1];
			}

			this.window();   
			var fftbuf = this.fft.forward(this.reals);
			for (var i=0; i<fftbuf.length; i+=2) {
				this.reals[i >> 1] = fftbuf[i];
				this.imags[i >> 1] = fftbuf[i+1];
			}

			this.processSpectrum(stage); 		
		}	

		for(var i=0; i<this.overlap; ++i) {
			output[i] = this.flux[i];
		}
		
		// rotate accumulators by 1/2
		for(var i=0; i<this.fftsize; ++i) {
			this.inputAccumulator[i] = this.inputAccumulator[i+this.fftsize];
		}

	}

	
	this.processSpectrum = function(stage) {
		this.fft.rect_polar(this.reals, this.imags, this.fftsize); 
		var acc = 0;
		for(var i=0; i<this.fftsize/2 +1; i++) {
			var d = this.reals[i] - this.oldmags[i];
			if(d > 0) acc += d;
			this.oldmags[i] = this.reals[i];
		}
		this.flux[stage] = acc;
		//this.ffthelper.polar_rect(this.reals, this.imags, this.fftsize);
	}		
}	
WaveSurfer.TransientPool = {
	// NB: the word 'transient' itself is a reserved word in JS; do not use for a variable name :D
	
	fftlength: 1024,
	overlap: 4,
	delay: 768,
	MAX_TRANSIENTS: 128,
	
	filtered: function(ar) {
		var th = 1.3;
		var window = 5;
		var fd = new Float32Array(ar.length);
		for(var i=0; i<ar.length; i++) {
			var acc = 0.0;
			var lo = i - window > 0 ? i - window: 0;
			var hi = i + window < ar.length - 1 ? i + window: ar.length - 1;
			for(var x=lo; x<=hi; x++) {
				acc += ar[x];
			}
			acc /= (hi - lo);
			acc *= th;
			fd[i] = ar[i] > acc ? ar[i] : 0;
		}
		return fd;
	},
	
	twiddle: function(time, wave, fs) {
		var t = time;
		var spos = Math.floor(t * fs);
		var step = this.fftlength/this.overlap;
		step *= 3;  
		/* ^ how far back in history it will search to find the least-energy bit, in terms of the (overlapped) fft windows. just empirically 
		(mucking about) derived :)	it will backtrack at most about 20 ms, erring on side of being too early rather than being caught 'inside' an attack
		*/
		var lim = Math.floor(spos - step < 0 ? 0 : spos - step);
		var at = Math.abs(wave[spos]);
		var buf = [at,at,at,at,at,at,at,at,at,at];
		var total = at * 10;
		var lowest = total;
		var lowestIndex = spos;
		for(var x = spos-1; x > lim; x--) {
			total -= buf.pop();
			buf.unshift(Math.abs(wave[x]));
			total += Math.abs(wave[x]);
			if(total < lowest) {
				lowest = total;
				lowestIndex = x;
			}	
		}
		t = lowestIndex / fs;
		return t;
	},
	
	
	init: function(buffer) { 
		this.fftwola = new fftwola(this.fftlength, this.overlap, buffer.sampleRate);
		this.pool = [];
		var candidates = [];
		for(var x=0; x<this.MAX_TRANSIENTS; x++) {
			candidates.push({tscore:0, time:-1});
		}	

		var blocks = Math.ceil(buffer.length/this.fftlength);
		var inputBuffer = new Float32Array(this.fftlength);
		var analysisBuffer = new Float32Array(this.overlap * blocks);
		var tval = new Float32Array(this.overlap);
		var timePerBlock = this.fftlength/buffer.sampleRate;
		var timeOffset = this.delay/buffer.sampleRate;

		for(var x =0; x < analysisBuffer.length; x++) {
			analysisBuffer[x] = 0.0;
		}			

		var cd = buffer.getChannelData(0);
		
		var raw = new Float32Array(cd.length);
		
		for(var x =0; x < raw.length; x++) {
			raw[x] = cd[x];
		}
		
		if(buffer.numberOfChannels > 1) {
			var raw2 = buffer.getChannelData(1);
			for(var x =0; x < raw2.length; x++) {
				raw[x] = (raw[x] * 0.5) + (raw2[x] * 0.5);
			}
		}

		for(var x = 0; x<blocks; x++) {
			var start = this.fftlength * x;
			var end = start + this.fftlength;
			if(end > raw.length) {  // reached the end bit that is smaller than our buffer
				for(var y=0; y < inputBuffer.length; y++) {
					inputBuffer[y] = 0.0;
				}
				for(var y=start; y < raw.length; y++) {
					inputBuffer[y-start] = raw[y];
				}				
			}
			else {
				for(y=start; y<end; y++) {
					inputBuffer[y-start] = raw[y];
				}
			}	
			this.fftwola.process(inputBuffer, tval);
			
			for(var i=0; i<this.overlap; i++) {	
				analysisBuffer[(this.overlap * x) + i] = tval[i];
			}			
	
			this.fireEvent('analysing', Math.round((x/blocks) * 100));
		}

		analysisBuffer = this.filtered(analysisBuffer);
		
		for(var i=0; i<analysisBuffer.length; i++) {
			var time = i * (timePerBlock/this.overlap);
			for(var y=0; y<candidates.length; y++) {
				if(analysisBuffer[i] > candidates[y].tscore) {
					time = this.twiddle(time, raw, buffer.sampleRate);
					if(time<0) time = 0;
					candidates.splice(y, 0, {tscore: analysisBuffer[i], time: time}); 
					candidates.pop();
					break;
				}
			}	
		}
		
		var ms = 0.05;
		
		for(var y=0; y<candidates.length; y++) {	
			for(var x=y+1; x<candidates.length; x++) {
				var d = Math.abs(candidates[y].time - candidates[x].time);
				if(d < ms) {
					candidates[x].time = -1;
				}
			}
		}
		
		var largest = 0;

		for(var y=0; y<candidates.length; y++) {
			if(candidates[y].time >=0 && candidates[y].time < buffer.duration) {
				if(largest == 0) {
					largest = Math.ceil(100 * (1 - candidates[y].tscore));
				}
				var th = Math.ceil(100 * (1 - candidates[y].tscore) - largest) + 1;				
				this.pool.push({id: WaveSurfer.util.getId(), threshold: th, start: candidates[y].time});
			}
		}
		
		this.fftwola.dispose();		
	},

	
	
	searchTransientPool: function(hi, lo) {
		var c = [];
		for(var t=0; t < this.pool.length; t++) {
			if(this.pool[t].threshold > lo && this.pool[t].threshold <= hi) {
				c.push(this.pool[t]);
			}
		}
		return c;
	},

	updatePoolData: function(id, start, threshold) {
		for(var t=0; t < this.pool.length; t++) {
			if(this.pool[t].id == id) {
				this.pool[t].threshold = threshold;
				this.pool[t].start = start;
				break;
			}
		}
	},
	
	removeFromPool: function(id) {
		for(var t=0; t < this.pool.length; t++) {
			if(this.pool[t].id == id) {
				this.pool.splice(t, 1);
				break;
			}
		}
	},	

};


WaveSurfer.util.extend(WaveSurfer.TransientPool, WaveSurfer.Observer);


WaveSurfer.initTransientPool = function (buffer) {
	var my = this;
    if (!this.transientPool) {
        this.transientPool = Object.create(WaveSurfer.TransientPool);
		this.transientPool.on('analysing', function (p) { my.fireEvent('analysing', p); });
    }
	this.transientPool.init(buffer);
};

WaveSurfer.searchTransientPool = function (hi, lo) {
	return(this.transientPool.searchTransientPool(hi,lo));
};

WaveSurfer.updatePoolData = function (id, start, threshold) {
	return(this.transientPool.updatePoolData(id, start, threshold));
};

WaveSurfer.removeFromPool = function (id) {
	this.transientPool.removeFromPool(id);
};

/* Regions manager */
WaveSurfer.Regions = {
    init: function (wavesurfer) {
        this.wavesurfer = wavesurfer;
        this.wrapper = this.wavesurfer.drawer.wrapper;

        /* Id-based hash of regions. */
        this.list = {};
		var my = this;


		this.wrapper.addEventListener('mouseleave', function (e) { 
			var evt = document.createEvent("MouseEvents");
			evt.initEvent("mouseup", true, true);
			document.body.dispatchEvent(evt);	
		});	
	
		this.on('del', function() {
			for(var reg in my.list) {
				my.list[reg].fireEvent('del');
			}
		});

	},
	

    add: function (params) {
		if(params.data.type=='slice') { 
			var ms = (params.threshold== -1) ? 0.007 : 0.05; // manually or algorithmically added
			var right = this.getTimeAtNextSliceMarker(params.start, 1);
			var left = this.getTimeAtNextSliceMarker(params.start, -1);
			if(params.start - left < ms || right - params.start < ms) {
				return;  
				// do not put one flush next to another one but have at least 7ms gap, or 50ms if auto-detecting transients	
			}
		}
        var region = Object.create(WaveSurfer.Region);
        region.init(params, this.wavesurfer);

        this.list[region.id] = region;
        region.on('remove', (function () {
            delete this.list[region.id];
        }).bind(this));
		
        region.on('update-end', (function (id, px, delta) {
		   	if(this.list[id].data.type=='slice') {
			   this.list[id].threshold = -1; // user obviously 'wanted' that one if they moved it, so we keep it from getting culled by slider 
			   this.wavesurfer.updatePoolData(this.list[id].id, this.list[id].start, this.list[id].threshold);
			   for(var reg in this.list) { // check for positional duplicates
				  if(this.list[reg].pixelPos == px && this.list[reg].id != id && this.list[reg].data.type == 'slice') {
					  this.list[reg].remove();
				  } 
			   }
			}   
			
			else {  // moved L or R locator
				if(this.list[id].id == "lloc" && this.list[id].start >= this.list['rloc'].start) {
					this.list[id].start = this.list['rloc'].start;
					this.list[id].update({start: this.list[id].start, end: this.list[id].start});	
					delta = -delta;					
				}
				if(this.list[id].id == "rloc" && this.list[id].start <= this.list['lloc'].start) {
					this.list[id].start = this.list['lloc'].start;
					this.list[id].update({start: this.list[id].start, end: this.list[id].start});	
					delta = -delta;					
				}	
				if(this.hasSliceMarkers()) { // quantise movement to slices
					this.list[id].start = this.getTimeAtNextSliceMarker(this.list[id].start, delta);
					this.list[id].update({start: this.list[id].start, end: this.list[id].start});
				}
			}
			
        }).bind(this));	
	
        return region;
    },

    /* Remove all regions. */
    clear: function () {
        Object.keys(this.list).forEach(function (id) {
            this.list[id].remove();
        }, this);
    },

	
	getTimeAtLeftLocator: function() {
	return this.list['lloc'].start;
	},

	getTimeAtRightLocator: function() {
	return this.list['rloc'].start;
	},
	
	hasSliceMarkers: function() {
		var hsm = false;
		for(var reg in this.list) {
			if(this.list[reg].data.type == ['slice']) {
				hsm = true;
				break;
			}
		}
		return hsm;
	},


	getSlicesBetweenLocators: function() {
		if(this.list['lloc'].start >= this.list['rloc'].start) return 0;
		var sl = 1; // there must be at least 1 if only the one between L/R
		for(var reg in this.list) {
			if(this.list[reg].data.type == ['slice'] && this.list[reg].start > this.list['lloc'].start && this.list[reg].start < this.list['rloc'].start) {
				sl +=1;
			}
		}
		return sl;
	},

	
	getTimeAtNextSliceMarker: function(pos, dir) {
		var c = dir > 0 ? wavesurfer.getDuration() : 0;
		if(dir > 0)	{
			for(var reg in this.list) {
				//if(this.list[reg].data.type == ['slice'] && this.list[reg].start > pos && this.list[reg].start < c) {  // dir = gtr than
				 if(this.list[reg].start > pos && this.list[reg].start < c) {  // dir = gtr than
					c = this.list[reg].start;	
				}
			}
		}
		else if(dir < 0) {
			for(var reg in this.list) {
				//if(this.list[reg].data.type == ['slice'] && this.list[reg].start < pos && this.list[reg].start > c) {  // dir = less than
				if(this.list[reg].start < pos && this.list[reg].start > c) {  // dir = gtr than
					c = this.list[reg].start;	
				}
			}
		}
		
		else {
				
			
		}
		return c;	
	},
	
	clearRegionPositions: function() {
		for(var reg in this.list) {
			    this.list[reg].style(this.list[reg].element, {
 				left: '0px',
				width: '0px',
                backgroundColor: 'transparent',
             });	
		}
	},
	
	removeItemsAbove: function(threshold) {
		for(var reg in this.list) {
			if(this.list[reg].threshold > threshold) {
				this.list[reg].remove();
			}
		}
	},

	addItemsBelowOrEqual: function(threshold, oldThreshold) {
		var ar = this.wavesurfer.searchTransientPool(threshold, oldThreshold);
		for(var t=0; t < ar.length; t++) {
			this.add({
				id: ar[t].id,
				start: ar[t].start,
				end: ar[t].start,
				color: 'rgba(0, 255, 0, 0.4)',
				data: {type: 'slice'},
				threshold: ar[t].threshold,
				drag: true,
				resize: false
			});
		}
	},	

	nudgeAll: function(dir) {
		for(var reg in this.list) {
			if(this.list[reg].data.type == 'slice') {
				var delta = 0.003 * dir;
				this.list[reg].update({
					start: this.list[reg].start + delta,
					end: this.list[reg].end + delta
					});		
			}
		}
	
	},
	
    enableDragSelection: function (params) {
        var my = this;
        var drag;
        var start;
        var region;

        function eventDown(e) {
            drag = true;
            if (typeof e.targetTouches !== 'undefined' && e.targetTouches.length === 1) {
                e.clientX = e.targetTouches[0].clientX;
            }
            start = my.wavesurfer.drawer.handleEvent(e);
            region = null;
        }
        this.wrapper.addEventListener('mousedown', eventDown);
        this.wrapper.addEventListener('touchstart', eventDown);
        function eventUp(e) {
            drag = false;

            if (region) {
                region.fireEvent('update-end', e);
                my.wavesurfer.fireEvent('region-update-end', region, e);
            }

            region = null;
        }
        this.wrapper.addEventListener('mouseup', eventUp);
        this.wrapper.addEventListener('touchend', eventUp);
        function eventMove(e) {
            if (!drag) { return; }

            if (!region) {
                region = my.add(params || {});
            }

            var duration = my.wavesurfer.getDuration();
            if (typeof e.targetTouches !== 'undefined' && e.targetTouches.length === 1) {
                e.clientX = e.targetTouches[0].clientX;
            }
            var end = my.wavesurfer.drawer.handleEvent(e);
            region.update({
                start: Math.min(end * duration, start * duration),
                end: Math.max(end * duration, start * duration)
            });
        }
        this.wrapper.addEventListener('mousemove', eventMove);
        this.wrapper.addEventListener('touchmove', eventMove);
		
    }
};

WaveSurfer.Region = {
    /* Helper function to assign CSS styles. */
    style: WaveSurfer.Drawer.style,

    init: function (params, wavesurfer) {
        this.wavesurfer = wavesurfer;
        this.wrapper = wavesurfer.drawer.wrapper;

        this.id = params.id == null ? WaveSurfer.util.getId() : params.id;
        this.start = Number(params.start) || 0;
        this.end = params.end == null ?
            // small marker-like region
            this.start + (4 / this.wrapper.scrollWidth) * this.wavesurfer.getDuration() :
            Number(params.end);
        this.resize = params.resize === undefined ? true : Boolean(params.resize);
        this.drag = params.drag === undefined ? true : Boolean(params.drag);
        this.loop = Boolean(params.loop);
        this.color = params.color || 'rgba(0, 0, 0, 0.1)';
        this.data = params.data || {};
        this.attributes = params.attributes || {};
		
		this.threshold = params.threshold || this.wavesurfer.getThreshold();

        this.maxLength = params.maxLength;
        this.minLength = params.minLength;

        this.bindInOut();
        this.render();
        this.wavesurfer.on('zoom', this.updateRender.bind(this));
        this.wavesurfer.fireEvent('region-created', this);
		var my = this;
		this.on('del', function() {
			if(my.inRegion == true && my.data.type == 'slice') {
				my.remove();
				my.wavesurfer.removeFromPool(my.id);
			}
		});
    },

    /* Update region params. */
    update: function (params) {
        if (null != params.start) {
            this.start = Number(params.start);
        }
        if (null != params.end) {
            this.end = Number(params.end);
        }
        if (null != params.loop) {
            this.loop = Boolean(params.loop);
        }
        if (null != params.color) {
            this.color = params.color;
        }
        if (null != params.data) {
            this.data = params.data;
        }
        if (null != params.resize) {
            this.resize = Boolean(params.resize);
        }
        if (null != params.drag) {
            this.drag = Boolean(params.drag);
        }
        if (null != params.maxLength) {
            this.maxLength = Number(params.maxLength);
        }
        if (null != params.minLength) {
            this.minLength = Number(params.minLength);
        }
        if (null != params.attributes) {
            this.attributes = params.attributes;
        }

        this.updateRender();
        this.fireEvent('update');
        this.wavesurfer.fireEvent('region-updated', this);
    },

    /* Remove a single region. */
    remove: function (region) {
        if (this.element) {
            this.wrapper.removeChild(this.element);
            this.element = null;
            this.fireEvent('remove');
            this.wavesurfer.un('zoom', this.updateRender.bind(this));
            this.wavesurfer.fireEvent('region-removed', this);
        }
    },

    /* Play the audio region. */
    play: function () {
        this.wavesurfer.play(this.start, this.end);
        this.fireEvent('play');
        this.wavesurfer.fireEvent('region-play', this);
    },

    /* Play the region in loop. */
    playLoop: function () {
        this.play();
        this.once('out', this.playLoop.bind(this));
    },

    /* Render a region as a DOM element. */
    render: function () {
        var regionEl = document.createElement('region');
        regionEl.className = 'wavesurfer-region';
       // regionEl.title = this.formatTime(this.start, this.end);
        regionEl.setAttribute('data-id', this.id);

        for (var attrname in this.attributes) {
            regionEl.setAttribute('data-region-' + attrname, this.attributes[attrname]);
        }

        var width = this.wrapper.scrollWidth;
        this.style(regionEl, {
            position: 'absolute',
            zIndex: this.data.type == 'slice' ? 2:3,
            height: '100%',
            top: '0px'
        });

		if(this.data.type == 'lLocator') {
			this.style(regionEl, {
				'border-top': '5px solid red',
				'border-right': '5px solid transparent',
				'border-left': '2px solid red'
			});			
		}
		
		if(this.data.type == 'rLocator') {
			this.style(regionEl, {
				'border-top': '5px solid red',
				'border-left': '5px solid transparent',
				'border-right': '2px solid red'
			});	
		}
		
        this.element = this.wrapper.appendChild(regionEl);
        this.updateRender();
        this.bindEvents(regionEl);
    },

    formatTime: function (start, end) {
        return (start == end ? [ start ] : [ start, end ]).map(function (time) {
            return [
                Math.floor((time % 3600) / 60), // minutes
                ('00' + Math.floor(time % 60)).slice(-2) // seconds
            ].join(':');
        }).join('-');
    },

    /* Update element's position, width, color. */
    updateRender: function () {
		var rightScrollZone = 878;
		var leftScrollZone = 22;
        var dur = this.wavesurfer.getDuration();
        var width = this.wrapper.scrollWidth;
		this.pixelPos = ~~(this.start / dur * width);
		var relPos = this.pixelPos  - this.wrapper.scrollLeft;
		
		if(this.delta > 0 && relPos > rightScrollZone && (this.wrapper.scrollLeft + this.wrapper.clientWidth) < this.wrapper.scrollWidth) {
			// advance scrollbar as element is being dragged (to the right)
			var n = this.wrapper.scrollLeft + 20;
			if(n > this.wrapper.scrollWidth - this.wrapper.clientWidth) {
				n = this.wrapper.scrollWidth - this.wrapper.clientWidth;
			}
			this.wrapper.scrollLeft = n;
		}

		if(this.delta < 0 && relPos < leftScrollZone && this.wrapper.scrollLeft > 0) {
			// advance scrollbar as element is being dragged (to the left)
			var n = this.wrapper.scrollLeft - 20;
			if(n < 0) {
				n = 0;
			}
			this.wrapper.scrollLeft = n;
		}

        if (this.start < 0) {
          this.start = 0;
          this.end = this.end - this.start;
        }
        if (this.end > dur) {
          this.end = dur;
          this.start = dur - (this.end - this.start);
        }

        if (this.minLength != null) {
            this.end = Math.max(this.start + this.minLength, this.end);
        }

        if (this.maxLength != null) {
            this.end = Math.min(this.start + this.maxLength, this.end);
        }

        if (this.element != null) {
			if(this.data.type == 'slice' || this.data.type == 'rLocator') {
				if(this.pixelPos > (this.wrapper.scrollWidth - 2)) { 
					this.pixelPos = this.wrapper.scrollWidth - 2;
				}
			}
			else {
				if(this.pixelPos > (this.wrapper.scrollWidth - 7)) { 
					this.pixelPos = this.wrapper.scrollWidth - 7;
				}			
			}
			
		if(this.data.type == 'rLocator') {		
			this.pixelPos -=5;  // lines up with the slice markers visually as well as temporally 
								// plus the extra -2 px offset above means it won't stray outside bounding scrollWidth
		}
		
		if(this.pixelPos < 0) this.pixelPos = 0;
		if(this.start < 0) this.start = 0;
		if(this.start > this.wavesurfer.getDuration()) this.start = this.wavesurfer.getDuration();
		
            this.style(this.element, {
				left: this.pixelPos + 'px',
				width: this.data.type == 'slice' ? '2px': '0px',
                backgroundColor: this.color,
                cursor: this.drag ? 'move' : 'default'
            });

            for (var attrname in this.attributes) {
                this.element.setAttribute('data-region-' + attrname, this.attributes[attrname]);
            }

           // this.element.title = this.formatTime(this.start, this.end);
        }
    },

    /* Bind audio events. */
    bindInOut: function () {
        var my = this;

        my.firedIn = false;
        my.firedOut = false;

        var onProcess = function (time) {
            if (!my.firedIn && my.start <= time && my.end > time) {
                my.firedIn = true;
                my.firedOut = false;
                my.fireEvent('in');
                my.wavesurfer.fireEvent('region-in', my);
            }
            if (!my.firedOut && my.firedIn && (my.start >= Math.round(time * 100) / 100 || my.end <= Math.round(time * 100) / 100)) {
                my.firedOut = true;
                my.firedIn = false;
                my.fireEvent('out');
                my.wavesurfer.fireEvent('region-out', my);
            }
        };

        this.wavesurfer.backend.on('audioprocess', onProcess);

        this.on('remove', function () {
            my.wavesurfer.backend.un('audioprocess', onProcess);
        });

        /* Loop playback. */
        this.on('out', function () {
            if (my.loop) {
                my.wavesurfer.play(my.start);
            }
        });
    },

    /* Bind DOM events. */
    bindEvents: function () {
        var my = this;

        this.element.addEventListener('mouseenter', function (e) {
			my.inRegion = true;
            my.fireEvent('mouseenter', e);
            my.wavesurfer.fireEvent('region-mouseenter', my, e);
        });

        this.element.addEventListener('mouseleave', function (e) {
			my.inRegion = false;
            my.fireEvent('mouseleave', e);
            my.wavesurfer.fireEvent('region-mouseleave', my, e);
        });

        this.element.addEventListener('click', function (e) {
            e.preventDefault();
			e.stopPropagation();
            my.fireEvent('click', e);
            my.wavesurfer.fireEvent('region-click', my, e);
        });

        this.element.addEventListener('dblclick', function (e) {
            e.stopPropagation();
            e.preventDefault();
            my.fireEvent('dblclick', e);
            my.wavesurfer.fireEvent('region-dblclick', my, e);
        });

		
        /* Drag or resize on mousemove. */
        (this.drag || this.resize) && (function () {
            var duration = my.wavesurfer.getDuration();
            var drag;
            var resize;
            var startTime;

            var onDown = function (e) {
                e.stopPropagation();
                startTime = my.wavesurfer.drawer.handleEvent(e) * duration;

                if (e.target.tagName.toLowerCase() == 'handle') {
                    if (e.target.classList.contains('wavesurfer-handle-start')) {
                        resize = 'start';
                    } else {
                        resize = 'end';
                    }
                } else {
                    drag = true;
                }
            };
            var onUp = function (e) {
                if (drag || resize) {
                    drag = false;
					// update position
                    resize = false;
				    e.preventDefault();
                    e.stopPropagation();
                    //my.fireEvent('update-end', e);  
					my.fireEvent('update-end', my.id, my.pixelPos, my.delta);
		            my.wavesurfer.fireEvent('region-update-end', my, e);
					my.delta = 0;
                }
            };
            var onMove = function (e) {
                if (drag || resize) {
                    var time = my.wavesurfer.drawer.handleEvent(e) * duration;
                    var delta = time - startTime;
                    startTime = time;

                    // Drag
                    if (my.drag && drag) {
                        my.onDrag(delta);
                    }

                    // Resize
                    if (my.resize && resize) {
                        my.onResize(delta, resize);
                    }
                }
            };

            my.element.addEventListener('mousedown', onDown);
            my.wrapper.addEventListener('mousemove', onMove);
            document.body.addEventListener('mouseup', onUp);
			
            my.on('remove', function () {
                document.body.removeEventListener('mouseup', onUp);
                my.wrapper.removeEventListener('mousemove', onMove);
            });

            my.wavesurfer.on('destroy', function () {
                document.body.removeEventListener('mouseup', onUp);
            });
        }());
    },

    onDrag: function (delta) {
		// if positive delta, there may be scrolling needed (if near boundary)
        this.delta = delta;
        this.update({
            start: this.start + delta,
            end: this.end + delta
        });
    },

    onResize: function (delta, direction) {
        if (direction == 'start') {
            this.update({
                start: Math.min(this.start + delta, this.end),
                end: Math.max(this.start + delta, this.end)
            });
        } else {
            this.update({
                start: Math.min(this.end + delta, this.start),
                end: Math.max(this.end + delta, this.start)
            });
        }
    }
};

WaveSurfer.util.extend(WaveSurfer.Region, WaveSurfer.Observer);
WaveSurfer.util.extend(WaveSurfer.Regions, WaveSurfer.Observer);

/* Augment WaveSurfer with region methods. */
WaveSurfer.initRegions = function () {
    if (!this.regions) {
        this.regions = Object.create(WaveSurfer.Regions);
        this.regions.init(this);
    }
};

WaveSurfer.addRegion = function (options) {
    this.initRegions();
    return this.regions.add(options);
};

WaveSurfer.clearRegions = function () {
    this.regions && this.regions.clear();
};

WaveSurfer.enableDragSelection = function (options) {
    this.initRegions();
    this.regions.enableDragSelection(options);
};

WaveSurfer.getTimeAtLeftLocator = function() {
	return this.regions.getTimeAtLeftLocator();
};

WaveSurfer.getTimeAtRightLocator = function() {
	return this.regions.getTimeAtRightLocator();
};

WaveSurfer.hasSliceMarkers = function() {
	return this.regions.hasSliceMarkers();
};

WaveSurfer.getTimeAtNextSliceMarker = function(pos, dir) {
	return this.regions.getTimeAtNextSliceMarker(pos, dir);
};

WaveSurfer.clearRegionPositions = function() {
	this.regions.clearRegionPositions();
};

WaveSurfer.initLR = function() {
	 this.addRegion({	
		id: 'lloc',
		start: 0, // time in seconds
		end: 0, // time in seconds
		color: 'rgba(255, 0, 0, 0.0)',
		data: {type: 'lLocator'},
		threshold: -1000,
		drag: true,
		resize: false
		});		
	
	this.addRegion({	
		id: 'rloc',
		start: this.getDuration(), // time in seconds
		end: this.getDuration(), // time in seconds		
		color: 'rgba(255, 0, 0, 0.0)',
		data: {type: 'rLocator'},
		threshold: -1000,
		drag: true,
		resize: false
		});		
};

WaveSurfer.getThreshold = function() {
	return this.threshold;
};

WaveSurfer.resetThreshold = function() {
	this.threshold = 0;
};

WaveSurfer.setThreshold = function(threshold) {
	var oldThreshold = this.threshold;
	this.threshold = threshold;
	if(this.threshold <= oldThreshold) {
	this.regions.removeItemsAbove(this.threshold);	// lower t-number means more prominent 
	}												// so 'lower means higher' 
	if(this.threshold > oldThreshold) {
		this.regions.addItemsBelowOrEqual(this.threshold, oldThreshold);
	}
};

WaveSurfer.nudgeAll = function(dir) {
	this.regions.nudgeAll(dir);
};

// Create an instance
var wavesurfer = Object.create(WaveSurfer);

// Init & load audio file
document.addEventListener('DOMContentLoaded', function () {
    var options = {
        container     : document.querySelector('#waveform'),
        waveColor     : 'black',
        progressColor : 'black',
        cursorColor   : 'red',
		splitChannels: true,
		height : 120
    };

    wavesurfer.init(options);
    // Load audio from URL 
    wavesurfer.load('examples/ol2.wav');

});

wavesurfer.on('ready', function () {
	wavesurfer.clearRegions();
	wavesurfer.resetThreshold();
	wavesurfer.initLR();
	wavesurfer.setThreshold(45);		
	wavesurfer.zoom(50);
	wavesurfer.setTempo(1.0);
	wavesurfer.setPitch(1.0);
	wavesurfer.setEnvAttack(0);
	wavesurfer.setEnvHold(0);	
	wavesurfer.setEnvDecay(10000);
	wavesurfer.setCompThreshold(0);
	wavesurfer.setCompRatio(1);
	wavesurfer.setCompAttack(0.07);
	wavesurfer.setCompRelease(0.1);
	wavesurfer.setVolume(1);
	wavesurfer.setLoFreq(250);
	wavesurfer.setMidFreq(1000);
	wavesurfer.setHiFreq(4000);
	wavesurfer.setLoGain(0);
	wavesurfer.setMidGain(0);
	wavesurfer.setHiGain(0);
	wavesurfer.setMidQ(1);	
	
	wavesurfer.setScale('chromatic');
	wavesurfer.setNoteNumber(0);
	wavesurfer.initTiming();
	wavesurfer.setEstBpm();	
});


wavesurfer.on('error', function (err) {
    console.error("wv err:" + err);
});

wavesurfer.on('finished-render', function () {
	savebutton.disabled=false;
	$('#saveModal').modal('hide');
});


/* Progress bar */
document.addEventListener('DOMContentLoaded', function () {
    var progressDiv = document.querySelector('#progress-bar');
    var progressBar = progressDiv.querySelector('.progress-bar');
    var progressMode = document.querySelector('#progressmode');
 
	var showProgress = function (percent, mode) {		
        progressDiv.style.display = 'block';
		progressMode.style.display = 'block';
        progressBar.style.width = percent + '%';
		progressMode.innerHTML = "<h3>" + mode  + " "  + percent + '%</h3>';
    };

    var hideProgress = function () {
        progressDiv.style.display = 'none';
		progressMode.style.display = 'none';
    };

 	wavesurfer.on('loading', function(percent) {
		showProgress(percent, 'Loading'); 
	});
	
 	wavesurfer.on('analysing', function(percent) {
		showProgress(percent, 'Analysing'); 
	});	
	
    wavesurfer.on('ready', hideProgress);
    wavesurfer.on('destroy', hideProgress);
    wavesurfer.on('error', hideProgress);
});

document.addEventListener('DOMContentLoaded', function () {
	if(!wavesurfer.backend.supportsWebAudio()) {
		document.getElementById("incompat").style.display="block";
	}
	if (!(window.File && window.FileReader && window.FileList && window.Blob)) {
		document.getElementById("incompat").style.display="block";		
	}
});
var filename = "untitled";

var avnotes = 127;

var playbutton = document.querySelector('[data-action="play"]');
playbutton.onclick = function() {
    if(wavesurfer.isPlaying()) wavesurfer.stop();
	else wavesurfer.seekToAndPlayAll(wavesurfer.getCurrentTime()/wavesurfer.getDuration());  	
};

var savebutton = document.querySelector('[data-action="save"]');
savebutton.onclick = function() {
    wavesurfer.seekToAndRenderAll(filename);
	savebutton.disabled=true;	
};

var osdbutton = document.querySelector('[data-action="opensavedialog"]');
osdbutton.onclick = function() {
    document.getElementById('slices').innerHTML = wavesurfer.getSlicesBetweenLocators();
	if(wavesurfer.getSlicesBetweenLocators() == 0) {
		savebutton.disabled=true;
		document.getElementById('zeroslicewarning').innerHTML = '<p><b>Please adjust the L and R indicators to select at least one slice of audio<br />(right locator is behind or on top of left locator)</b></p>';
	}
	else {
		savebutton.disabled=false;	
		document.getElementById('zeroslicewarning').innerHTML = '';
	}
	document.getElementById('avnotes').innerHTML = avnotes;	
	changeMidiParams();
	wavesurfer.setEstBpm();
	document.getElementById('estbpm').innerHTML = wavesurfer.getEstBpm();
};


document.addEventListener('DOMContentLoaded', function() {
	document.addEventListener('keydown', function(e) {
		if ( e.keyCode == 32 || e.keyCode == 0 ) {
			e.preventDefault();
			e.stopPropagation();
			document.getElementById('playbtn').click();
			var btns = document.getElementsByTagName("button");
			for (var i = 0; i < btns.length; i++) {
				btns[i].blur();
			}			
		}
		if ( e.keyCode == 46) {
			wavesurfer.regions.fireEvent('del');
		}
	});
});

var zoominbutton = document.querySelector('[data-action="zoomin"]');
zoominbutton.onclick = function() {
	zoomoutbutton.disabled = false;
	var lvl = wavesurfer.params.minPxPerSec;
	lvl *= 1.5;
	if(lvl < 300) lvl = 300;
	if(lvl >= 1700) {
	lvl = 1700;
	zoominbutton.disabled = true;
	}
	wavesurfer.zoom(lvl);
};

var zoomoutbutton = document.querySelector('[data-action="zoomout"]');	
zoomoutbutton.onclick = function() {
	zoominbutton.disabled = false;
	var lvl = wavesurfer.params.minPxPerSec;
	lvl /= 1.5;
	if(lvl <= 300) {
	lvl = 50;
	zoomoutbutton.disabled = true;
	}
	wavesurfer.zoom(lvl);
};	
	
var transientslider = document.querySelector('[data-action="tdetect"]');  
transientslider.oninput = function() {
	wavesurfer.setThreshold(Number(this.value));
	document.getElementById('thrshunits').innerHTML = Number(this.value);
};

var nudgeleft = document.querySelector('[data-action="nudgeleft"]');
nudgeleft.onclick = function() {
	wavesurfer.nudgeAll(-1);
};

var nudgeright = document.querySelector('[data-action="nudgeright"]');
nudgeright.onclick = function() {
	wavesurfer.nudgeAll(1);
};


var temposlider = document.querySelector('[data-action="tempo"]');
temposlider.oninput = function() {
    wavesurfer.setTempo(Number(this.value));
	document.getElementById('tempounits').innerHTML = Number(this.value) + 'x';
};	

var pitchslider = document.querySelector('[data-action="pitch"]');
pitchslider.oninput = function() {
    wavesurfer.setPitch(Number(Math.pow(1.059463094, this.value)));
	var p = '';
	if(this.value > 0) p = '+';
	document.getElementById('pitchunits').innerHTML = p + (Number(this.value));
};	

var attackslider = document.querySelector('[data-action="attack"]');
attackslider.oninput = function() {
    wavesurfer.setEnvAttack(Number(this.value));
	document.getElementById('attackunits').innerHTML = Number(this.value) + 'ms';	
};

var holdslider = document.querySelector('[data-action="hold"]');
holdslider.oninput = function() {
	var t = Math.floor(logValue(Number(this.value), 1, 5000, 1, 5000));
	wavesurfer.setEnvHold(t);
	if(t>=1000) {
		document.getElementById('holdunits').innerHTML = (t/1000).toFixed(2) + 's';
		}
     else document.getElementById('holdunits').innerHTML = t + 'ms';	
};	
	
var decayslider = document.querySelector('[data-action="decay"]');
decayslider.oninput = function() {
	var t = Math.floor(logValue(Number(this.value), 1, 10000, 1, 10000));
	wavesurfer.setEnvDecay(t);
	if(t === 10000) {
		document.getElementById('decayunits').innerHTML = '∞';	
		}
	else if(t>=1000) {
		document.getElementById('decayunits').innerHTML = (t/1000).toFixed(2) + 's';
		}
	else document.getElementById('decayunits').innerHTML = t + 'ms';	
};

var compthresholdslider = document.querySelector('[data-action="compthreshold"]');
compthresholdslider.oninput = function() {
    wavesurfer.setCompThreshold(Number(this.value));
	document.getElementById('compthresholdunits').innerHTML = Number(this.value) + 'dB';	
};	

var compratioslider = document.querySelector('[data-action="compratio"]');
compratioslider.oninput = function() {
    wavesurfer.setCompRatio(Number(this.value));
	document.getElementById('compratiounits').innerHTML = Number(this.value) + ':1';	
};	

var compattackslider = document.querySelector('[data-action="compattack"]');
compattackslider.oninput = function() {
    wavesurfer.setCompAttack(Number(this.value));
	document.getElementById('compattackunits').innerHTML = (Number(this.value) * 1000) + 'ms';	
};

var compreleaseslider = document.querySelector('[data-action="comprelease"]');
compreleaseslider.oninput = function() {
    wavesurfer.setCompRelease(Number(this.value));
	document.getElementById('compreleaseunits').innerHTML = (Number(this.value) * 1000) + 'ms';	
};

var gainslider = document.querySelector('[data-action="gain"]');
gainslider.oninput = function() {
    wavesurfer.setVolume(Math.pow(10.0, (Number(this.value)* 0.05)));
	var p = '';
	if(this.value > 0) p = '+';
	document.getElementById('gainunits').innerHTML = p + (Number(this.value)) + "dB";
};	

var lofreqslider = document.querySelector('[data-action="lofreq"]');
lofreqslider.oninput = function() {
    wavesurfer.setLoFreq(Number(this.value));
	document.getElementById('lofrequnits').innerHTML = Number(this.value)  + 'Hz';	
};	
	
var midfreqslider = document.querySelector('[data-action="midfreq"]');
midfreqslider.oninput = function() {
    wavesurfer.setMidFreq(Number(this.value));
	document.getElementById('midfrequnits').innerHTML = Number(this.value)  + 'Hz';	
};	

var hifreqslider = document.querySelector('[data-action="hifreq"]');
hifreqslider.oninput = function() {
    wavesurfer.setHiFreq(Number(this.value));
	document.getElementById('hifrequnits').innerHTML = Number(this.value)  + 'Hz';	
};		
	
var logainslider = document.querySelector('[data-action="logain"]');
logainslider.oninput = function() {
    wavesurfer.setLoGain(Number(this.value));
	document.getElementById('logainunits').innerHTML = Number(this.value)  + 'dB';	
};	
	
var midgainslider = document.querySelector('[data-action="midgain"]');
midgainslider.oninput = function() {
    wavesurfer.setMidGain(Number(this.value));
	document.getElementById('midgainunits').innerHTML = Number(this.value)  + 'dB';	
};	

var higainslider = document.querySelector('[data-action="higain"]');
higainslider.oninput = function() {
    wavesurfer.setHiGain(Number(this.value));
	document.getElementById('higainunits').innerHTML = Number(this.value)  + 'dB';	
};		
	
var midqslider = document.querySelector('[data-action="midq"]');
midqslider.oninput = function() {
    wavesurfer.setMidQ(Number(this.value));
	document.getElementById('midqunits').innerHTML = Number(this.value);	
};	

var ofile = document.querySelector('#openfile');	
ofile.onchange = function() {
	if (this.files.length) {
		wavesurfer.clearRegions();
        wavesurfer.loadBlob(this.files[0]);
		document.getElementById("filename").innerHTML = " " + this.files[0].name;
		filename = this.files[0].name;
		initControls();
    } else {
        wavesurfer.fireEvent('error', 'Not a file');
     }	
};
	
var scale = 'chromatic';
	
var rbtnc = document.querySelector('#rbtnC');
rbtnc.onclick = function() {
	scale = 'chromatic';
	wavesurfer.setScale('chromatic');
	changeMidiParams();
};		

var rbtnw = document.querySelector('#rbtnW');
rbtnw.onclick = function() {
	scale = 'white-note';
	wavesurfer.setScale('white-note');
	changeMidiParams();
};	

var rbtnb = document.querySelector('#rbtnB');
	rbtnb.onclick = function() {
	scale = 'black-note';
	wavesurfer.setScale('black-note');
	changeMidiParams();
};	

var logValue = function(position, minp, maxp, loval, hival) {
	var minv = Math.log(loval);
	var maxv = Math.log(hival);
	var scale = (maxv-minv) / (maxp-minp);
	return Math.exp(minv + scale*(position-minp));
};
	
var nearestWhiteNote = function(x) {
	if(x==1 || x==3 || x==6 || x==8 || x==10) {
		x = x-1;
	}
	return x;
};
	
var nearestBlackNote = function(x) {
 	if(x==0 || x==2 || x==5 || x==7 || x==9) {
		x = x+1;
	}
	if(x==11 || x==4) {
		x = x-1;
	}
	if(x==8 && sel2.selectedIndex==10) {
		x = x-2;
	}
	return x;	  
};

var availableNotes = function(x, s) {
	if(s == 'chromatic') {
		return 128 - x;
	}
	if(s == 'white-note') {
		var y = 75 - (Math.floor(x/12) * 7);
		var z = x%12; 
		if(z==0) y -=0;
		if(z==2) y -=1;
		if(z==4) y -=2;
		if(z==5) y -=3;
		if(z==7) y -=4;
		if(z==9) y -=5;
		if(z==11) y -=6;
	}	
	if(s == 'black-note') {
		var y = 53 - (Math.floor(x/12) * 5);
		var z = x%12; 
		if(z==1) y -=0;
		if(z==3) y -=1;
		if(z==6) y -=2;
		if(z==8) y -=3;
		if(z==10) y -=4;
	}	
	return y;
};
  
var changeMidiParams = function() {
	var s1 = sel1.selectedIndex;
	var s2 = sel2.selectedIndex;	
	if(s1>7 && s2 == 10) {
		s1 = 7;
		sel1.selectedIndex = 7;
	}
	if(scale == 'white-note') {
		s1 = nearestWhiteNote(s1);
		sel1.selectedIndex = s1;		
	}
	if(scale == 'black-note') {
		s1 = nearestBlackNote(s1);
		sel1.selectedIndex = s1;
	}	
	var t = sel1.options[s1].text + sel2.options[s2].text;
	document.getElementById('midibase').innerHTML = t;
	wavesurfer.setNoteNumber((s2 * 12) + s1);
	avnotes = availableNotes((s2 * 12) + s1, scale);
	document.getElementById('avnotes').innerHTML = avnotes;
	if(wavesurfer.getSlicesBetweenLocators() > avnotes) {
		document.getElementById('avnotewarn').innerHTML = '<small><b>Note: there are more slices than available MIDI notes in this setup; some will go unmapped (but will still be exported as WAV files).</b></small>';
	}
	else {
		document.getElementById('avnotewarn').innerHTML = '';
	}
 };

var changeTimeSig = function() {
	var s3 = sel3.selectedIndex;
	var s4 = sel4.selectedIndex;
	document.getElementById('timesig').innerHTML = sel3.options[s3].text + "/" + sel4.options[s4].text;
	wavesurfer.setTimingNum(sel3.options[s3].text);
	wavesurfer.setTimingDenom(sel4.options[s4].text);
	wavesurfer.setEstBpm();
	var estbpm = wavesurfer.getEstBpm();
	if(isNaN (estbpm)) document.getElementById('estbpm').innerHTML = '';
	else document.getElementById('estbpm').innerHTML = estbpm;
}; 
 
 
var sel1 = document.querySelector('#sel1');
sel1.onchange = function() {
	changeMidiParams();		
};	
	
var sel2 = document.querySelector('#sel2');
sel2.onchange = function() {
	changeMidiParams();
};		


var sel3 = document.querySelector('#sel3');
sel3.onchange = function() {
	changeTimeSig();
};	
	
var sel4 = document.querySelector('#sel4');
sel4.onchange = function() {
	changeTimeSig();
};		
	
var bar = document.querySelector('#bars');
bar.oninput = function() {
	if((bar.value < 1 || isNaN(bar.value)) && bar.value != '') {
		if(beat.value == 0) bar.value = 1;
	}
	wavesurfer.setTimingBars(bar.value);
	changeTimeSig();	
};

bar.onblur = function() {
	if(bar.value == '') {
		bar.value = 1;
		wavesurfer.setTimingBars(bar.value);
		changeTimeSig();		
	}
};

var beat = document.querySelector('#beats');
beat.oninput = function() {
	if((beat.value < 0 || isNaN(beat.value)) && beat.value != '') {
		beat.value = 0;
	}
	if(bar.value == 0 && beat.value == 0) {
		bar.value = 1;
		wavesurfer.setTimingBars(bar.value);
	}
	wavesurfer.setTimingExtraBeats(beat.value);	
	changeTimeSig();	
};
	
beat.onblur = function() {
	if(beat.value == '') {
		beat.value = 0;
		if(bar.value == 0 && beat.value == 0) bar.value = 1;
		wavesurfer.setTimingExtraBeats(beat.value);	
		changeTimeSig();		
	}
}

	
var initControls = function() {	
	transientslider.value = 48;

	temposlider.value = 1.0;	
	pitchslider.value = 0;	

	attackslider.value = 0;
	holdslider.value = 0;	
	decayslider.value = 10000;	

	compthresholdslider.value = 0;
	compratioslider.value = 1;
	compattackslider.value = 0.07; // 70ms
	compreleaseslider.value = 0.1;  // 100ms
	gainslider.value = 0;

	lofreqslider.value = 250;
	midfreqslider.value = 1000;
	hifreqslider.value = 4000;
	
	logainslider.value = 0;
	midgainslider.value = 0;
	higainslider.value = 0;
	
	midqslider.value = 1; 
	document.getElementById('thrshunits').innerHTML = '45';	
	document.getElementById('tempounits').innerHTML = '1x';
	document.getElementById('pitchunits').innerHTML = '0';
		
	document.getElementById('attackunits').innerHTML = '0ms';
	document.getElementById('holdunits').innerHTML = '0ms';	
	document.getElementById('decayunits').innerHTML = '∞';

	document.getElementById('compthresholdunits').innerHTML = '0db';
	document.getElementById('compratiounits').innerHTML = '1:1';
	document.getElementById('compattackunits').innerHTML = '70ms';
	document.getElementById('compreleaseunits').innerHTML = '100ms';
	document.getElementById('gainunits').innerHTML = '0dB';	
	
	document.getElementById('lofrequnits').innerHTML = '250Hz';
	document.getElementById('midfrequnits').innerHTML = '1000Hz';
	document.getElementById('hifrequnits').innerHTML = '4000Hz';
	
	document.getElementById('logainunits').innerHTML = '0db';
	document.getElementById('midgainunits').innerHTML = '0db';
	document.getElementById('higainunits').innerHTML = '0db';
	
	document.getElementById('midqunits').innerHTML = '1';	
	
	zoominbutton.disabled = false;
	zoomoutbutton.disabled = true;
	
	rbtnc.checked = true;
	sel1.selectedIndex = 0;
	sel2.selectedIndex = 0;	
	sel3.selectedIndex = 2;
	sel4.selectedIndex = 1;	
	scale = 'chromatic';
	avnotes = 127;
	
	document.getElementById('bars').value="1";
	document.getElementById('beats').value="0";
	document.getElementById('timesig').innerHTML = '4/4';	
};

document.addEventListener('DOMContentLoaded', initControls);

document.addEventListener('DOMContentLoaded', function() {
	if(bowser.chrome==true || bowser.opera==true) { 
	wavesurfer.setBrowser('chrome-opera');
	}
});

// Drag'n'drop
document.addEventListener('DOMContentLoaded', function () {
 
	var toggleActive = function (e, toggle) {
		e.stopPropagation();
		e.preventDefault();
		toggle ? e.target.classList.add('wavesurfer-dragover') :
		e.target.classList.remove('wavesurfer-dragover');
    };

    var handlers = {
        // Drop event
        drop: function (e) {
            toggleActive(e, false);

            // Load the file into wavesurfer
            if (e.dataTransfer.files.length) {
				wavesurfer.clearRegions();
                wavesurfer.loadBlob(e.dataTransfer.files[0]);
				document.getElementById("filename").innerHTML = " " + e.dataTransfer.files[0].name;
				filename = e.dataTransfer.files[0].name;
				// also set defaults again
				initControls();
            } else {
                wavesurfer.fireEvent('error', 'Not a file');
            }
        },

        // Drag-over event
        dragover: function (e) {
            toggleActive(e, true);
       },

        // Drag-leave event
        dragleave: function (e) {
           toggleActive(e, false);
        }
    };

    var dropTarget = document.querySelector('#waveform');
    Object.keys(handlers).forEach(function (event) {
        dropTarget.addEventListener(event, handlers[event]);
    });
});


