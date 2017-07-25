/*

Copyright (C) 2015 by Marijn Haverbeke <marijnh@gmail.com> and others

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
*/
(function(e){"object"==typeof exports&&"object"==typeof module?e(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define(["../../lib/codemirror"],e):e(CodeMirror)})(function(e){e.defineMode("shell",function(){function e(a,c){for(var d=c.split(" "),b=0;b<d.length;b++)h[d[b]]=a}function g(a,c){if(a.eatSpace())return null;var d=a.sol(),b=a.next();if("\\"===b)return a.next(),null;if("'"===b||'"'===b||"`"===b)return c.tokens.unshift(k(b)),(c.tokens[0]||g)(a,c);if("#"===b){if(d&&a.eat("!"))return a.skipToEnd(),
"meta";a.skipToEnd();return"comment"}if("$"===b)return c.tokens.unshift(l),(c.tokens[0]||g)(a,c);if("+"===b||"="===b)return"operator";if("-"===b)return a.eat("-"),a.eatWhile(/\w/),"attribute";if(/\d/.test(b)&&(a.eatWhile(/\d/),a.eol()||!/\w/.test(a.peek())))return"number";a.eatWhile(/[\w-]/);d=a.current();return"="===a.peek()&&/\w+/.test(d)?"def":h.hasOwnProperty(d)?h[d]:null}function k(a){return function(c,d){for(var b,e=!1,f=!1;null!=(b=c.next());){if(b===a&&!f){e=!0;break}if("$"===b&&!f&&"'"!==
a){f=!0;c.backUp(1);d.tokens.unshift(l);break}f=!f&&"\\"===b}!e&&f||d.tokens.shift();return"`"===a||")"===a?"quote":"string"}}var h={};e("atom","true false");e("keyword","if then do else elif while until for in esac fi fin fil done exit set unset export function");e("builtin","ab awk bash beep cat cc cd chown chmod chroot clear cp curl cut diff echo find gawk gcc get git grep kill killall ln ls make mkdir openssl mv nc node npm ping ps restart rm rmdir sed service sh shopt shred source sort sleep ssh start stop su sudo tee telnet top touch vi vim wall wc wget who write yes zsh");
var l=function(a,c){1<c.tokens.length&&a.eat("$");var d=a.next(),b=/\w/;"{"===d&&(b=/[^}]/);if("("===d)return c.tokens[0]=k(")"),(c.tokens[0]||g)(a,c);/\d/.test(d)||(a.eatWhile(b),a.eat("}"));c.tokens.shift();return"def"};return{startState:function(){return{tokens:[]}},token:function(a,c){return(c.tokens[0]||g)(a,c)},lineComment:"#",fold:"brace"}});e.defineMIME("text/x-sh","shell")});
