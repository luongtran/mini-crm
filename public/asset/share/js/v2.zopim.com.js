(function(a){var b={}
b.$Modules=b
;
var c={"build_number":"20140725.030103","git_commit":"0138f838b5d7b32e03c867b88024b3102560b551","languages":{"af":"__$$__stringtable_lang_af","ar":"__$$__stringtable_lang_ar","az":"__$$__stringtable_lang_az","bg":"__$$__stringtable_lang_bg","ca":"__$$__stringtable_lang_ca","cs":"__$$__stringtable_lang_cs","da":"__$$__stringtable_lang_da","de":"__$$__stringtable_lang_de","el":"__$$__stringtable_lang_el","es":"__$$__stringtable_lang_es","et":"__$$__stringtable_lang_et","eu":"__$$__stringtable_lang_eu","fa":"__$$__stringtable_lang_fa","fi":"__$$__stringtable_lang_fi","fo":"__$$__stringtable_lang_fo","fr":"__$$__stringtable_lang_fr","ga":"__$$__stringtable_lang_ga","gl":"__$$__stringtable_lang_gl","he":"__$$__stringtable_lang_he","hr":"__$$__stringtable_lang_hr","hu":"__$$__stringtable_lang_hu","id":"__$$__stringtable_lang_id","is":"__$$__stringtable_lang_is","it":"__$$__stringtable_lang_it","ja":"__$$__stringtable_lang_ja","ka":"__$$__stringtable_lang_ka","ko":"__$$__stringtable_lang_ko","ku":"__$$__stringtable_lang_ku","lt":"__$$__stringtable_lang_lt","lv":"__$$__stringtable_lang_lv","mk":"__$$__stringtable_lang_mk","mn":"__$$__stringtable_lang_mn","ms":"__$$__stringtable_lang_ms","nb":"__$$__stringtable_lang_nb","nl":"__$$__stringtable_lang_nl","pl":"__$$__stringtable_lang_pl","pt":"__$$__stringtable_lang_pt","pt_BR":"__$$__stringtable_lang_pt_BR","ro":"__$$__stringtable_lang_ro","ru":"__$$__stringtable_lang_ru","si":"__$$__stringtable_lang_si","sk":"__$$__stringtable_lang_sk","sl":"__$$__stringtable_lang_sl","sq":"__$$__stringtable_lang_sq","sr":"__$$__stringtable_lang_sr","sv":"__$$__stringtable_lang_sv","sw":"__$$__stringtable_lang_sw","th":"__$$__stringtable_lang_th","tr":"__$$__stringtable_lang_tr","uk":"__$$__stringtable_lang_uk","ur":"__$$__stringtable_lang_ur","vi":"__$$__stringtable_lang_vi","zh_CN":"__$$__stringtable_lang_zh_CN","zh_TW":"__$$__stringtable_lang_zh_TW","en":"__$$__stringtable_lang_en"},"strings":["Zopim Live Chat requires cookies to function. Enable cookies?","Privacy policy","Chat with us","Leave a message","support","We're online","We're away","We're offline","Live Support","Ask us anything","Hi, welcome to our website!","Questions?","Click here to chat with us","Choose a Department","Message","Phone","Sorry, we aren't online at the moment. Leave a message and we'll get back to you.","Sorry, we aren't online at the moment.","Thanks for the message! We'll get back to you as soon as we can.","Nice chatting with you!","How would you rate the chat experience you just had?","Thanks for the good rating! Would you like to leave a comment?","What did you like about this chat?","Sorry that we disappointed you. We'd appreciate it if you could tell us how to improve.","What did you dislike about this chat?","Minimize","Send","Type your message here","Submit","Cancel","Back to Chat","End","Send Chat Transcript to","Email","This isn't a valid email","Email sent to @@@@<email>@@@@","Close","Online","Away","Offline","Complete this field","Enter a valid email address","Select an option","Check this option to continue","Select at least one option","Select a department","This field is invalid","Phone number","Are you sure you want to end this chat?","Facebook","Twitter","Google+","<name> joined the chat","<name> left the chat","<old_name> is now known as <new_name>","Chat started","Chat ended","<number> new message","<number> new messages","<number> New","Chat","Reconnecting","Click to reconnect","Resuming session","Loading","Chat Disabled","Disabled","Zopim Live Chat","Unlink from <name>","Please wait while our agents attend to you. There are currently <number> visitor(s) waiting to be served.","Powered by Zopim Live Chat","Send Message","Start Chatting","Any Department","Closed","File size too large. Maximum total size is limited to <size>.","The file you are trying to send is not supported.","File sending is temporary disabled. Please try again later.","Failed to send. Please try again.","Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Weekdays","Weekends","Daily","All day","Our Operating Hours","Back","Send Another","Operating Hours","UTC","Drop files here","Skip","Zopim Live Chat requires cookies to function","You objected to the use of cookies based on our @cookie policy@. Approve the use of cookies to enable chat functions.","You may disable the chat anytime.","Enable Cookies and Chat","If you do not agree with our @cookie policy@, you may disable the chat widget. Past information and cookies will be removed.","You may re-enable chat anytime.","Disable Chat","Name","Connect with <name>","Introduce yourself","Hello there!","Name, Email","Edit","Sign out","or","Connect to","Please update your profile","Please provide your name","Please provide a valid email","or sign in with","Phone Number","Please provide a valid phone","Hi, <name>","Hi there!","Sign In","Sound","Cookies","About","Send a File","Email Transcript","End This Chat","Connect with","Use Name and Email","Edit Contact Details","Enter your name","Enter your email","Enter your phone","Save","Open in new window","Options","Sign in","Rate this chat","Change rating","Great","Bad","<name> is typing ...","<name> are typing ...","This widget uses @cookies@.","to","You","Click here to change","Message not sent","Resend","Uploading \"<file_name>\"","\"<file_name>\" sent.","End Chat","Not Yet","Open Form","Your Profile","Open","Leave a Message"]},d=b.Module=(function(){var w=[],x=/^function *\( *\) *{ *([\s\S]*) *}$/
function y(C,D){var E=b[C]
E.module_function=new Function('$Modules',D.toString().replace(x,'$1'))
E.ready()}
function z(C){var D,E,F,G
for(D=w.length-1;D>=0;D--){F=w[D]
G=F.dependencies
for(E=G.length-1;E>=0;E--){if(G[E]==C){G.splice(E,1)
break}}
F.ready()}}
function A(){var C=Array.prototype.slice.call(arguments),D=C.shift()
this.fqname=D
this.name=D.split('.').pop()
this.callbacks=[]
this.dependencies=C
w.push(this)}
A.ensureLoaded=function(C,D){if(C instanceof A)C.ensureLoaded(D)
else D()}
A.prototype.ensureLoaded=function(C){this.ifLoaded(C)
this.load()}
A.prototype.ifLoaded=function(C){this.callbacks.push(C)}
A.prototype.load=function(){var C=this.getDependencies(),D,E
function F(G){y(G[0],G[1])}
for(D=0;D<C.length;D++){E=C[D]
if(E.loader)continue
E.loader=new s(c.baseURL+'/lib/'+c.build_number+'/'+E.fqname+'.js',b,F)}}
A.prototype.getDependencies=function(){var C=this.dependencies,D,E=[this]
for(D=0;D<C.length;D++){var F=b[C[D]]
E=E.concat(F.getDependencies())}
return E}
A.prototype.ready=function(){if(this.dependencies.length||!this.module_function)return
for(D=w.length-1;D>=0;D--)if(w[D]==this){w.splice(D,1)
break}
this.module_function(b)
var C=b[this.fqname],D
C.ifLoaded=C.ensureLoaded=B
for(D=0;D<this.callbacks.length;D++)this.callbacks[D](C)
z(this.fqname)
delete this.callbacks
delete this.fqname
delete this.name
delete this.dependencies
delete this.loader}
function B(C){C()}
if((typeof A==='function')&&A.prototype&&!A.__jx__no_fqname){A.prototype.__jx__fqname_chain=[(A.prototype.__jx__fqname_chain||"")," ","jx_core_Module"].join('')
A.prototype.__jx__fqname="jx_core_Module"}
return A})(),e=b.clone=(function(){function w(){}
function x(y){w.prototype=y
return new w()}
if((typeof x==='function')&&x.prototype&&!x.__jx__no_fqname){x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","jx_core_globals_clone"].join('')
x.prototype.__jx__fqname="jx_core_globals_clone"}
return x})(),f=b.indexOf=(function(){var w=Array.prototype.indexOf
if(typeof w!='function'||!/\[native code\]/.test(w.toString()))w=x
function x(z){"use strict"
if(this==null){throw new TypeError()}
var A=Object(this),B=A.length>>>0
if(B===0){return -1}
var C=0
if(arguments.length>0){C=Number(arguments[1])
if(C!=C){C=0}
else if(C!=0&&C!=Infinity&&C!=-Infinity){C=(C>0||-1)*Math.floor(Math.abs(C))}}
if(C>=B){return -1}
var D=C>=0?C:Math.max(B-Math.abs(C),0)
for(;D<B;D++){if(D in A&&A[D]===z){return D}}
return -1}
function y(z,A,B){return w.call(A,z,B)}
if((typeof y==='function')&&y.prototype&&!y.__jx__no_fqname){y.prototype.__jx__fqname_chain=[(y.prototype.__jx__fqname_chain||"")," ","jx_core_globals_indexOf"].join('')
y.prototype.__jx__fqname="jx_core_globals_indexOf"}
return y})(),g=b.isArray=(function(){function w(x){return Object.prototype.toString.call(x)=='[object Array]'}
if((typeof w==='function')&&w.prototype&&!w.__jx__no_fqname){w.prototype.__jx__fqname_chain=[(w.prototype.__jx__fqname_chain||"")," ","jx_core_globals_isArray"].join('')
w.prototype.__jx__fqname="jx_core_globals_isArray"}
return w})(),h=b.isFunction=(function(){function w(x){return typeof x=='function'}
if((typeof w==='function')&&w.prototype&&!w.__jx__no_fqname){w.prototype.__jx__fqname_chain=[(w.prototype.__jx__fqname_chain||"")," ","jx_core_globals_isFunction"].join('')
w.prototype.__jx__fqname="jx_core_globals_isFunction"}
return w})(),i=b.isString=(function(){function w(x){return typeof (x)=='string'}
if((typeof w==='function')&&w.prototype&&!w.__jx__no_fqname){w.prototype.__jx__fqname_chain=[(w.prototype.__jx__fqname_chain||"")," ","jx_core_globals_isString"].join('')
w.prototype.__jx__fqname="jx_core_globals_isString"}
return w})(),j=b.isNumber=(function(){function w(x){return typeof (x)=='number'}
if((typeof w==='function')&&w.prototype&&!w.__jx__no_fqname){w.prototype.__jx__fqname_chain=[(w.prototype.__jx__fqname_chain||"")," ","jx_core_globals_isNumber"].join('')
w.prototype.__jx__fqname="jx_core_globals_isNumber"}
return w})(),k=b.isUndefined=(function(){var w=(function(x){return function(y,z){return z?y==null:y===x}})()
if((typeof w==='function')&&w.prototype&&!w.__jx__no_fqname){w.prototype.__jx__fqname_chain=[(w.prototype.__jx__fqname_chain||"")," ","jx_core_globals_isUndefined"].join('')
w.prototype.__jx__fqname="jx_core_globals_isUndefined"}
return w})(),l=b.nextTick=(function(){var w=100,x,y=[]
function z(B,C,D){o.ok(typeof B=='function','1st argument to nextTick must be a function')
if(D){for(var E=y.length;E-->0;){if(y[E][0]===B&&y[E][1]===C)return}}
y.push([B,C])
if(!x)x=setTimeout(A,0)}
function A(){var B=(+new Date())+w,C=y
y=[]
if(x)x=clearTimeout(x)
for(var D=0,E=C.length;D<E;D++){try {C[D][0].apply(C[D][1])}catch(F){q.fire('error',F)}
if((+new Date())>B){if(D<E-1){C.splice(0,D+1)
if(y.length){y=C.concat(y)}
else{y=C
x=setTimeout(A,0)}}
break}}}
z.tick=A
if((typeof z==='function')&&z.prototype&&!z.__jx__no_fqname){z.prototype.__jx__fqname_chain=[(z.prototype.__jx__fqname_chain||"")," ","jx_core_globals_nextTick"].join('')
z.prototype.__jx__fqname="jx_core_globals_nextTick"}
return z})(),m=b.parseBoolean=(function(){function w(x){return !!x&&x!='false'}
if((typeof w==='function')&&w.prototype&&!w.__jx__no_fqname){w.prototype.__jx__fqname_chain=[(w.prototype.__jx__fqname_chain||"")," ","jx_core_globals_parseBoolean"].join('')
w.prototype.__jx__fqname="jx_core_globals_parseBoolean"}
return w})(),n=b.StackTrace=(function(){var w
try {(0)()}catch(z){w=z.arguments?'chrome':z.stack?'firefox':window.opera&&!('stacktrace' in z)?'opera':'other'}
function x(){this.stack=this[w]()}
x.prototype.toString=function(){return this.stack.join('\n')}
x.prototype.chrome=function(){try {(0)()}catch(z){return z.stack.replace(/^(.*?\n){2}/,'').replace(/^[^\(]+?[\n$]/g,'').replace(/^\s+at\s+/g,'').replace(/^Object.<anonymous>\s*\(/g,'{anonymous}()@').split('\n')}}
x.prototype.firefox=function(){try {(0)()}catch(z){return z.stack.replace(/^.*?\n/,'').replace(/(?:\n@:0)?\s+$/,'').replace(/^\(/g,'{anonymous}(').split('\n')}}
x.prototype.opera=function(){try {(0)()}catch(z){var A=z.message.split('\n'),B='{anonymous}',C=/Line\s+(\d+).*?script\s+(http\S+)(?:.*?in\s+function\s+(\S+))?/i,D,E,F
for(D=4,E=0,F=A.length;D<F;D+=2){if(C.test(A[D])){A[E++]=(RegExp.$3?RegExp.$3+'()@'+RegExp.$2+RegExp.$1:B+'()@'+RegExp.$2+':'+RegExp.$1)+' -- '+A[D+1].replace(/^\s+/,'')}}
A.splice(E,A.length-E)
return A}}
x.prototype.other=function(){var z=arguments.callee,A='{anonymous}',B=/function\s*([\w\-$]+)?\s*\(/i,C=[],D=0,E,F,G=20
while(z&&C.length<G){E=B.test(z.toString())?RegExp.$1||A:A
F=Array.prototype.slice.call(z['arguments'])
C[D++]=E+'('+y(F)+')'
if(z===z.caller&&window.opera){break}
z=z.caller}
return C}
function y(z){for(var A=0;A<z.length;++A){var B=z[A]
if(typeof B=='object'){z[A]='#object'}
else if(typeof B=='function'){z[A]='#function'}
else if(typeof B=='string'){z[A]='"'+B+'"'}}
return z.join(',')}
if((typeof x==='function')&&x.prototype&&!x.__jx__no_fqname){x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","jx_core_StackTrace"].join('')
x.prototype.__jx__fqname="jx_core_StackTrace"}
return x})(),o=b.Assert=(function(){var w={ok:x,isFunction:function(y,z){x(h(y),z)}}
w.log=function(){}
function x(y,z){if(!y)w.log(z)}
if((typeof w==='function')&&w.prototype&&!w.__jx__no_fqname){w.prototype.__jx__fqname_chain=[(w.prototype.__jx__fqname_chain||"")," ","jx_core_Assert"].join('')
w.prototype.__jx__fqname="jx_core_Assert"}
return w})(),p=b.Browser=(function(){var w=navigator,x=w.userAgent.toLowerCase(),y=+(/trident.*rv:? *([0-9]+)/.exec(x)||[])[1]||!1,z=eval("/*@cc_on(function(v,m){return v>=9?v:v>=5.8?8:v>=5.7&&m?7:v>=5.6?6:v>=5.5?5.5:v>=5.1?5:v>=3?4:3})(@_jscript_version,'maxHeight' in document.createElement('a').style)@*/"),A=z==8,B=z==7,C=z==6,D=window.opera&&Object.prototype.toString.call(window.opera)=="[object Opera]",E=navigator.vendor=='Google Inc.',F=navigator.vendor=='Apple Computer, Inc.',G=!z&&!D&&(E||F||/webkit|khtml/.test(x)),H=+/\d+/.exec(/firefox\/\d+/i.exec(navigator.userAgent)||''),I=x.indexOf('firefox/2')>-1,J=x.indexOf('firefox/3')>-1,K=x.indexOf("iphone")!=-1,L=x.indexOf("ipod")!=-1,M=x.indexOf("ipad")!=-1,N=K||M||L,O=x.indexOf("android")!=-1,P=x.indexOf("wp7")!=-1,Q=N||O||P,R,S=z&&'msie'||H&&'firefox'||D&&'opera'||E&&'chrome'||F&&'safari',T,U=z&&!V,V=document.compatMode=="CSS1Compat",W=!V,X=z&&W&&document.documentElement&&!!document.documentElement.style.setExpression,Y=document.documentMode||z,Z=(x.indexOf("windows")!=-1||x.indexOf("win32")!=-1),$$=(x.indexOf("macintosh")!=-1||x.indexOf("mac os x")!=-1),$_=document.location.protocol=='https:',$a=w.language||w.browserLanguage||w.userLanguage||w.systemLanguage,$b={noBoxSizing:Y<=7,ie:{cssBottomRight:C,cssFixed:C||X,buggyCSS:C||X}},$c=!1
if(window.CustomEvent){try {new window.CustomEvent('testevent',{bubbles:!1,cancelable:!0,detail:!0})
$c=!0}catch($q){;}}
switch(S){case 'msie':case 'firefox':case 'chrome':T=+/\d+/.exec(new RegExp(S+'[ /]\\d+').exec(x)||'')
break
default:T=+/\d+/.exec(/version[ \/]\d+/.exec(x)||'')}
function $d($q){return $q.replace(/^http:/,$_?'https:':'http:')}
function $e(){if(window.innerHeight!==a)return window.innerHeight
if(document.documentElement)return document.documentElement.offsetHeight
if(document.getElementsByTagName['body'].length)return document.getElementsByTagName['body'][0].clientHeight
return 0}
function $f(){if(window.innerWidth!==a)return window.innerWidth
if(document.documentElement)return document.documentElement.offsetWidth
if(document.getElementsByTagName['body'].length)return document.getElementsByTagName['body'][0].clientWidth
return 0}
if(C){var $g=[]
$b.leaksMemory=function($q){o.isFunction($q)
$g.push($q)}
var $h=function(){for(var $q=0;$q<$g.length;$q++)$g[$q]()}
$b.leaksMemory.remove=function($q){for(var $r=$g.length-1;$r>=0;$r--)if($q==$g[$r])$g.splice($r,1)}
window.attachEvent('onunload',$h)}
var $i='Shockwave Flash',$j='ShockwaveFlash.ShockwaveFlash',$k='application/x-shockwave-flash',$l='application/x-java-vm'
function $m(){var $q=w.plugins&&w.plugins[$i],$r
if($q){$r=w.mimeTypes&&w.mimeTypes[$k]
if($r&&!$r.enabledPlugin)return null
return $q.description}
else if(window.ActiveXObject){try {$q=new window.ActiveXObject($j)
$q.AllowScriptAccess='always'
return $q.GetVariable('$version')}catch($s){;}}}
function $n(){var $q=w.mimeTypes
if(z)return P?!1:('javaEnabled' in w)&&w.javaEnabled()
if($q&&($q=$q[$l])&&($q=$q.enabledPlugin))return $q.name}
function $o(){if(!k(R))return R
var $q=document.createElement('div'),$r=document.createElement('div'),$s=$q.style,$t=$r.style
$s.overflow='auto'
$s.width=$s.height='100px'
$s.position='absolute'
$s.top='-1000px'
$t.width='100%'
$t.height='200px'
$q.appendChild($r)
document.body.appendChild($q)
R=$q.offsetWidth-$q.clientWidth
document.body.removeChild($q)
return R}
var $p={browser:S,version:T,isStrict:V,isQuirks:W,isOpera:D,isSafari:F,isWebKit:G,isChrome:E,isAndroid:O,isIPhone:K,isIPod:L,isIPad:M,isIOS:N,isWP7:P,isMobile:Q,isNewIE:y,isIE:z,isIE6:C,isIE7:B,isIE8:A,isFF:H,isFF2:I,isFF3:J,isBorderBox:U,isCustomEvents:$c,engineIE:Y,bugs:$b,isWindows:Z,isMac:$$,isSecure:$_,secureURL:$d,hasFlash:$m(),hasJava:$n(),language:$a,getScrollbarSize:$o,getWindowClientHeight:$e,getWindowClientWidth:$f}
if((typeof $p==='function')&&$p.prototype&&!$p.__jx__no_fqname){$p.prototype.__jx__fqname_chain=[($p.prototype.__jx__fqname_chain||"")," ","jx_core_Browser"].join('')
$p.prototype.__jx__fqname="jx_core_Browser"}
return $p})(),q=b.Events=(function(){var w={extend:x,body:x(document.body,!0),window:x(window,!0),document:x(document,!0),runAfterScriptReady:A,runAfterFirstChildReady:B,runAfterDomReady:C}
w.extend(w)
function x(I,J){var K={},L={},M=function(W){if(!I.nodeType&&I!=window&&I!=document)return !0
if(I.tagName=='FORM'&&W=='submit')return !1
return !p.isCustomEvents&&(p.isFF&&p.isFF<9?!document.createEvent('event')[W.toUpperCase()]:typeof (I['on'+W])=='undefined')},N=function(W,X,Y){if(!W&&typeof X!='function')throw 'bad arguments to on / addEventListener'
if(!(W in K)){K[W]=[]
if(!M(W))O(W)}
K[W].push(X)
return I},O=function(W){if(W in L)return
L[W]=function(X){X&&(X.stopPropagation||T(X))
var Y,Z=K[W],$$=Z.length,$_=!0
Z._active=!0
for(Y=0;Y<$$;Y++){try {if(!Z[Y])continue
if(Z[Y].call(I,(p.isCustomEvents&&(X instanceof window.CustomEvent))?X.detail:X)===!1)$_=!1}catch($a){w.fire('error',$a)}}
Z._active=!1
if(Z._dirty){for(Y=0;Y<$$;Y++){if(!Z[Y]){if(Y==$$-1)Z.pop()
else Z[Y--]=Z.pop()
$$--}}
Z._dirty=!1}
if($_===!1){if(X){X.preventDefault()
X.returnValue=!1}
return !1}}
if(I.attachEvent)I.attachEvent('on'+W,L[W])
else if(I.addEventListener)I.addEventListener(W,L[W],!1)},P=function(W){var X=L[W]
if(!X)return
if(I.attachEvent)I.detachEvent('on'+W,X)
else if(I.addEventListener)I.removeEventListener(W,X,!1)
delete L[W]
delete K[W]},Q=function(W,X){var Y=K[W]
if(!Y)return
for(var Z=0,$$=Y.length;Z<$$;Z++)if(Y[Z]===X){if(Y.length==1){if(L[W])P(W)
else delete K[W]}
else if(Y._active)Y[Z]=null,Y._dirty=!0
else if(Z==$$-1)Y.pop()
else Y[Z]=Y.pop()
break}
return I},R=function(){if(K&&L){for(var W in L)if(L.hasOwnProperty(W))P(W)
K=L=null}},S=function(W,X){if(!p.isCustomEvents||M(W)){var Y=K[W],Z=!0
if(Y&&Y.length){Y._active=!0
var $$,$_,$a
for($$=0,$_=Y.length;$$<$_;$$++){try {$a=Y[$$].call(I,X)
if($a===!1)Z=!1}catch($b){w.fire('error',$b)}}
Y._active=!1
if(Y._dirty){for($$=0;$$<$_;$$++){if(!Y[$$]){if($$==$_-1)Y.pop()
else Y[$$--]=Y.pop()
$_--}}
Y._dirty=!1}}
return Z}
else{return I.dispatchEvent(new window.CustomEvent(W,{bubbles:!1,cancelable:!0,detail:X}))}},T=function(W){W.preventDefault=T.preventDefault
W.stopPropagation=T.stopPropagation
W.target=W.srcElement}
T.preventDefault=function(){this.returnValue=!1}
T.stopPropagation=function(){this.cancelBubble=!0}
var U={fire:S,on:N,un:Q,unextendEvents:R}
if(J)return U
for(var V in U)if(U.hasOwnProperty(V))I[V]=U[V]
if(p.bugs.leaksMemory)p.bugs.leaksMemory(function(){for(var W in U)if(U.hasOwnProperty(W))I[W]=null})
return I}
var y=0,z=[[],[],[],[]]
function A(I){D(0,I)}
function B(I){D(1,I)}
function C(I){D(2,I)}
function D(I,J){if(I<=y)J()
else z[I].push(J)}
function E(I){while(y<I){y++
for(var J=0;J<z[y].length;J++)z[y][J]()
z[y]=null}}
function F(){if(y>0)return
if(document.body&&document.body.firstChild)E(1)
else window.setTimeout(F,200)}
function G(){E(2)}
function H(){var I
if(p.isSafari){I=window.setInterval(function(){if(/loaded|complete/i.test(document.readyState)){window.clearInterval(I)
G()}},20)}
else if(document.addEventListener){if(/loaded|complete/i.test(document.readyState))G()
else document.addEventListener("DOMContentLoaded",G,!1)}
else if(p.isIE){window.attachEvent('onload',G)
var J=document.createElement('document:ready')
I=window.setInterval(function(){if(/loaded|complete/i.test(document.readyState)){J=null
window.clearInterval(I)
G()
return}
try {J.doScroll('left')}catch(K){return}
J=null
window.clearInterval(I)
G()},200)}}
F()
H()
if((typeof w==='function')&&w.prototype&&!w.__jx__no_fqname){w.prototype.__jx__fqname_chain=[(w.prototype.__jx__fqname_chain||"")," ","jx_core_Events"].join('')
w.prototype.__jx__fqname="jx_core_Events"}
return w})(),r=b.DataIFrame=(function(){function w(x){var y,z,A=q.extend(this)
if(window.ActiveXObject){y=new window.ActiveXObject('htmlfile')
y.open()
y.write('<script>document.win = window</script>')
y.close()
z=y.win}
else{var B=this.iframe=document.createElement('iframe'),C=B.style
A.allowTransparency='true'
A.frameBorder='0'
C.backgroundColor='transparent'
C.position='absolute'
C.width=C.height='1px'
C.left=C.top='-9999px'
C.border=0
document.body.appendChild(B)
try {z=B.contentWindow
y=z.document}catch(D){A.fire('error')
A.destroy()
return}}
A.doc=y
A.win=z
A.$Loader={cleanup:function(){l(function(){if(A.$Loader.payload)A.fire('success',A.$Loader.payload)
else A.fire('error')
A.$Loader.payload=null
if(!x)A.destroy()})}}
A.reusable=x}
w.prototype.setScope=function(x){this.scope=x}
w.prototype.load=function(x){this.doc.open()
this.win.$Loader=this.$Loader
this.win.$Loader.scope=this.scope||{}
this.doc.write('<html><head><script src="'+x+'"></script></head><body onload="try { $Loader.cleanup() } catch(e) {}"></body></html>')
this.doc.close()}
w.prototype.destroy=function(){try {this.iframe&&document.body.removeChild(this.iframe)
this.doc=this.win=this.iframe=this.win.$Loader=null}catch(x){;}}
if((typeof w==='function')&&w.prototype&&!w.__jx__no_fqname){w.prototype.__jx__fqname_chain=[(w.prototype.__jx__fqname_chain||"")," ","jx_io_DataIFrame"].join('')
w.prototype.__jx__fqname="jx_io_DataIFrame"}
return w})(),s=b.ScriptLoader=(function(){function w(x,y,z){var A=this
q.extend(A)
var B=new r()
y=y||{}
B.setScope(y)
B.on('success',z)
B.on('error',function(C){A.onError(C)})
B.load(x)}
w.prototype.onError=function(x){x}
if((typeof w==='function')&&w.prototype&&!w.__jx__no_fqname){w.prototype.__jx__fqname_chain=[(w.prototype.__jx__fqname_chain||"")," ","jx_io_ScriptLoader"].join('')
w.prototype.__jx__fqname="jx_io_ScriptLoader"}
return w})(),t=b.JCSS=(function(){var w={trim:/^\s+|\s+$/g,space:/ /g,repeatingLinearGradient:/^\s*repeating-linear-gradient/,prependFQName:/^(\*\*self|)(?!.+?keyframes)/,prePrependFQName:/^(?!\*\*self)/g,replacePseudo:/\:\:\:([A-Za-z_\-.]+)/g,replaceAppend:/ +?&/g,placeholder:/::placeholder$/,replaceVariables:/(?:(?:([A-Za-z\-]+):)??(?:& *:)?\$\$([A-Za-z_\.]+))(?=;)/g,replaceLeftovers:/(?:(?:[A-Za-z\-]+:)??(?:& *:)?(\$\$[A-Za-z_\.]*?)??)(?=;)/g,replaceMedia:/(.*)(@media.*)@mediaend(.*)/,commaStart:/^,/,selectorCase:/([A-Z]+)/g,removePrefix:/^\$\$/,isVariable:/\$\$[A-Za-z_]+/},x={placeholder:['::-webkit-input-placeholder',':-moz-placeholder','::-moz-placeholder',':-ms-input-placeholder','.placeholder']},y,z=[],A={},B={},C={},D={},E='__jcss__default',F=0,G={},H=[],I,J={}
q.extend(J)
J.setIFrameOnly=function(Y){y=m(Y)}
J.generateAll=function(Y){var Z
for(var $$ in b)if(b.hasOwnProperty($$)){Z=b[$$]
if(Z&&Z.prototype&&Z.__jx__jcss&&!Z.__jx__jcss_generated){J.generate(null,Z.prototype.__jx__fqname,Z.__jx__jcss,null,Z)
Z.__jx__jcss_generated=!0}}
Y||J.writeChanges()}
J.generate=function(Y,Z,$$,$_,$a,$b){if(!$$)return
if(!Y&&!$a){return}
Z=Z?'.'+Z.replace(w.trim,'').replace(w.space,'.'):''
$$=$$||{}
$_='_'+($_||'')
var $c=[]
$a=$a||Y.__jx__constructor
while($a&&$a.prototype.__jx__super){$a=$a.prototype.__jx__super
if($a.__jx__jcss)$c.unshift(Q($a.__jx__jcss,null,Z,!0).join('\n'))}
try {$c.push(Q($$,null,Z,!0).join('\n'))}catch($e){;}
var $d=$c.join('')
if(($_ in A)&&!$b){A[$_]=[A[$_],$d].join('')
if(!($_ in C))C[$_]=''
C[$_]=[C[$_],$d].join('')
D[$_]=!1}
else{A[$_]=$d
C[$_]=$d
D[$_]=!0}
if(!I)I=window.setTimeout(J.writeChanges,0)}
J.setPalette=function(Y,Z,$$){Y=X(Y)||{}
Z=Z||E
$$=parseInt($$,10)
if(!G[Z]&&isNaN($$)){return}
if(!isNaN($$)&&$$<0){return}
if(Z==E&&!isNaN($$)&&$$!=F){return}
if(H[$$]&&H[$$]!=Z){return}
var $_
for(var $a in Y)if(Y.hasOwnProperty($a)){$_=typeof Y[$a]
if($_=='boolean'||$_=='number'||$_=='string')continue
Y[$a]=Q(Y[$a],null,null,null,!0).join('')}
G[Z]=Y
if(!isNaN($$)){var $b=f(Z,H)
if($b!=-1){H[$b]=a}
H[$$]=Z}}
J.delPalette=function(Y){if(!Y)return
var Z
if(j(Y)){if(!H[Y])return
delete G[H[Y]]
H[Y]=a}
else{if(!G[Y])return
Z=f(Y,H)
delete G[Y]
H[Z]=a}}
J.delPalettes=function(){G={}
H.length=0
K()}
function K(){J.setPalette({},E,F)}
K()
J.appendPalette=function(){}
J.getPalette=function(Y){Y=Y||E
return G[Y]||{}}
J.getVariable=function(Y){for(var Z=H.length-1;Z>=0;Z--){if(H[Z]&&G[H[Z]]&&(G[H[Z]][Y]||j(G[H[Z]][Y]))){if(w.isVariable.test(G[H[Z]][Y])){return J.getVariable(G[H[Z]][Y].toString().slice(2))}
return G[H[Z]][Y]}}}
J.reload=function(){J.writeChanges(!0)}
var L,M
function N(Y,Z,$$){while(L[$$]||j(L[$$])){$$=L[$$].toString().replace(w.removePrefix,'')}
if(Z){return R(Z,$$)}
return $$||''}
J.writeChanges=function(Y){if(I)window.clearTimeout(I)
I=null
var Z=Y?A:C,$$,$_,$a,$b
L={}
M={}
for($a in G)if(G.hasOwnProperty($a)){$b=f($a,H)
for($_ in G[$a])if(G[$a].hasOwnProperty($_)){if((isNaN(M[$_])||$b>M[$_])&&(G[$a][$_]||j(G[$a][$_]))){L[$_]=G[$a][$_]
M[$_]=$b}}}
for($_ in Z)if(Z.hasOwnProperty($_)){if(!Z[$_])continue
$$=Z[$_].replace(w.replaceVariables,N)
$$=$$.replace(w.replaceLeftovers,'')
if(!y)O(document,'jcss'+$_,$$,Y||D[$_])
for(var $c=0;$c<z.length;$c++)O(z[$c].idoc,'jcss'+$_,$$,Y||D[$_])
B[$_]=$$
Y||(Z[$_]='')
D[$_]=!1}
J.fire('write',$$)}
J.bindIFrame=function(Y){for(var Z=0,$$=z.length;Z<$$;Z++)if(Y===z[Z])return
z.push(Y)
for(var $_ in A)if(A.hasOwnProperty($_))O(Y.idoc,'jcss'+$_,B[$_])}
J.unbindIFrame=function(Y){for(var Z=0,$$=z.length;Z<$$;Z++)if(Y===z[Z])z.splice(Z,1)}
function O(Y,Z,$$,$_){if(!Y)Y=document
var $a=P(Y,Z)
if(!$a){$a=Y.createElement('style')
Y.getElementsByTagName('head')[0].appendChild($a)
$a.type='text/css'
Z&&$a.setAttribute('__jx__stylesheet_id',Z)
if($a.styleSheet!==a){if(!$a.styleSheet){Y.getElementsByTagName('head')[0].removeChild($a)
$a=null
return}
$a.styleSheet.cssText=$$}
else{$a[typeof document.body.textContent!='undefined'?'textContent':'innerText']=$$}}
else{if($_){if($a.styleSheet){$a.styleSheet.cssText=$$}
else{$a[typeof document.body.textContent!='undefined'?'textContent':'innerText']=$$}}
else{if($a.styleSheet){$a.styleSheet.cssText=[$a.styleSheet.cssText,$$].join('')}
else{var $b=document.createTextNode($$)
$a.appendChild($b)}}}}
function P(Y,Z){if(!Z)return
if(!Y)Y=document
for(var $$=0,$_=Y.styleSheets.length;$$<$_;$$++){if(((Y.styleSheets[$$].ownerNode&&Y.styleSheets[$$].ownerNode.getAttribute('__jx__stylesheet_id'))||(Y.styleSheets[$$].owningElement&&Y.styleSheets[$$].owningElement.getAttribute('__jx__stylesheet_id')))==Z){return ((Y.styleSheets[$$].ownerNode&&Y.styleSheets[$$].ownerNode)||(Y.styleSheets[$$].owningElement&&Y.styleSheets[$$].owningElement))}}}
J.transform2CSS=Q
function Q(Y,Z,$$,$_,$a){var $b=[],$c=[],$d,$e,$f,$g,$h,$i
for($d in Y)if(Y.hasOwnProperty($d)){$e=Y[$d]
$f=a
if($d=='@keyframes'){$i=[]
for(var $j in $e)if($e.hasOwnProperty($j)){$i=Q($e[$j])
$c.push(W(['@-webkit-keyframes ',$j,' { ',$i.join(' '),' } ']))
$c.push(W(['@-moz-keyframes ',$j,' { ',$i.join(' '),' } ']))
$c.push(W(['@-ms-keyframes ',$j,' { ',$i.join(' '),' } ']))
$c.push(W(['@-o-keyframes ',$j,' { ',$i.join(' '),' } ']))
$c.push(W(['@keyframes ',$j,' { ',$i.join(' '),' } ']))}
continue}
if($d.slice(0,6)=='@media'){$d=[$d,'@mediaend'].join('')}
switch(typeof $e){case 'boolean':case 'number':case 'string':$f=$d.split(',')
for($g=0,$h=$f.length;$g<$h;$g++)$b.push(R($f[$g],$e))
break
default:if(g($e)){for($g=0,$h=$e.length;$g<$h;$g++)$b.push(R($d,$e[$g]))
break}
if(w.placeholder.test($d)){$i=$d.replace(w.placeholder,'')
$f=[]
for($g=0,$h=x.placeholder.length;$g<$h;$g++)$f.push(W([$i,x.placeholder[$g]]))}
if(!g($f))$f=$d.split(',')
for($g=0,$h=$f.length;$g<$h;$g++)$c=$c.concat(Q($e,$f[$g].replace(w.trim,'')))
break}}
if($b.length){if(!$a){$b.unshift('{')
$b.push('}')}
$c.push($b.join(''))}
if(Z||$$||($_&&!(p.isIE<9))){for($g=0,$h=$c.length;$g<$h;$g++){Z&&($c[$g]=[Z.replace(w.replacePseudo,'\.$1'),' ',$c[$g]].join(''))
$$&&($c[$g]=$c[$g].replace(w.prePrependFQName,' ').replace(w.prependFQName,$$))
$_&&($c[$g]=$c[$g].replace(w.replaceAppend,''))
$_&&($c[$g]=$c[$g].replace(w.replaceMedia,"$2 { $1 $3 }"))}}
return $c}
J.toStyle=R
function R(Y,Z){function $$($f){$a.push(W([$f,($b?' !important;':';')]))}
function $_($f){$a.push($f?Y:Y.replace(w.selectorCase,"-$1").replace(w.commaStart,"").toLowerCase())
$$(W([':',Z]))}
var $a=[],$b,$c=Z&&Z.split&&Z.split(' ')
if(w.isVariable.test(Z)){$_(!0)
return $a.join('')}
if($c&&$c.length&&$c[$c.length-1]=='!important'){$b=!0
$c.pop()
Z=$c.join(' ')}
switch(Y){case 'background':$a.push(W([Y,':']))
switch($c[0]){case 'linear-gradient':$c.splice(0,1)
Z=$c.join(' ')
$$(W(['-webkit-linear-gradient',Z]))
$$(W(['background:-o-linear-gradient',Z]))
$$(W(['background:-moz-linear-gradient',Z]))
$$(W(['background:-ms-linear-gradient',Z]))
$$(W(['background:-linear-gradient',Z]))
break
case 'gradient':var $d,$e
$$(V($c[2],$c[3]));($c[1]=='top')&&($d='bottom');($c[1]=='left')&&($d='right');($c[1]=='right')&&($d='left');($c[1]=='bottom')&&($d='top')
$e=W([$c[1],',',$c[2],',',$c[3],')'])
$$(W(['background:-o-linear-gradient(',$e]))
$$(W(['background:-moz-linear-gradient(',$e]))
$$(W(['background:-ms-linear-gradient(',$e]))
$$(W(['background:linear-gradient(',$e]))
if($c[1]=='left'||$c[1]=='right'){$$(W(['background:-webkit-gradient(linear,',$c[1],' center,',$d,' center,from(',$c[2],'),to(',$c[3],'))']))
$$(W(['filter:progid:DXImageTransform.Microsoft.gradient(startColorstr=',S($c[2]),', endColorstr=',S($c[3]),', GradientType=1)']))
$$(W(['-ms-filter:progid:DXImageTransform.Microsoft.gradient(startColorstr=',S($c[2]),', endColorstr=',S($c[3]),', GradientType=1)']))}
else{$$(W(['background:-webkit-gradient(linear,center ',$c[1],',center ',$d,',from(',$c[2],'),to(',$c[3],'))']))
$$(W(['filter:progid:DXImageTransform.Microsoft.gradient(startColorstr=',S($c[2]),', endColorstr=',S($c[3]),')']))
$$(W(['-ms-filter:progid:DXImageTransform.Microsoft.gradient(startColorstr=',S($c[2]),', endColorstr=',S($c[3]),')']))}
break
default:if(Z.slice(0,4)=='rgba'){$$(T(Z,!0))
if(p.bugs.noBoxSizing){break}
$a.push(W([Y,':']))}
$$(Z)
break}
break
case 'radius':case 'borderRadius':switch($c.length){case 1:$c[1]=$c[0]
case 2:$c[2]=$c[0]
case 3:$c[3]=$c[1]
default:$$(W(['-moz-border-radius-topleft:',$c[0]]))
$$(W(['-moz-border-radius-topright:',$c[1]]))
$$(W(['-moz-border-radius-bottomleft:',$c[2]]))
$$(W(['-moz-border-radius-bottomright:',$c[3]]))
$$(W(['border-top-left-radius:',$c[0]]))
$$(W(['border-top-right-radius:',$c[1]]))
$$(W(['border-bottom-left-radius:',$c[2]]))
$$(W(['border-bottom-right-radius:',$c[3]]))
$$(W(['-webkit-border-top-left-radius:',$c[0]]))
$$(W(['-webkit-border-top-right-radius:',$c[1]]))
$$(W(['-webkit-border-bottom-left-radius:',$c[2]]))
$$(W(['-webkit-border-bottom-right-radius:',$c[3]]))
break}
break
case 'boxShadow':$$(W(['-moz-box-shadow:',Z]))
$$(W(['-webkit-box-shadow:',Z]))
$$(W(['box-shadow:',Z]))
break
case 'userSelect':$$(W(['-moz-user-select:',Z]))
$$(W(['-webkit-user-select:',Z]))
$$(W(['-o-user-select:',Z]))
$$(W(['user-select:',Z]))
break
case 'appearance':$$(W(['-webkit-appearance:',Z]))
$$(W(['-moz-appearance:',Z]))
$$(W(['appearance:',Z]))
break
case 'animation':$$(W(['-webkit-animation:',Z]))
$$(W(['-moz-animation:',Z]))
$$(W(['-ms-animation:',Z]))
$$(W(['-o-animation:',Z]))
$$(W(['animation:',Z]))
break
case 'transform':$$(W(['-webkit-transform:',Z]))
$$(W(['-moz-transform:',Z]))
$$(W(['-ms-transform:',Z]))
$$(W(['-o-transform:',Z]))
$$(W(['transform:',Z]))
break
case 'transformOrigin':$$(W(['-webkit-transform-origin:',Z]))
$$(W(['-moz-transform-origin:',Z]))
$$(W(['-ms-transform-origin:',Z]))
$$(W(['-o-transform-origin:',Z]))
$$(W(['transform-origin:',Z]))
break
case 'transition':$$(W(['-webkit-transition:',Z]))
$$(W(['-moz-transition:',Z]))
$$(W(['-o-transition:',Z]))
$$(W(['transition:',Z]))
break
case 'rotate':$$(W(['-webkit-transform:rotate(',Z,'deg)']))
$$(W(['-moz-transform:rotate(',Z,'deg)']))
$$(W(['-ms-transform:rotate(',Z,'deg)']))
$$(W(['-o-transform:rotate(',Z,'deg)']))
break
case 'opacity':$$(W(['opacity:',Z]))
$$(W(['-ms-filter:"progid:DXImageTransform.Microsoft.Alpha(Opacity=',Z*100,')"']))
$$(W(['filter:alpha(opacity=',Z*100,')']))
$$(W(['-moz-opacity:',Z]))
$$(W(['-webkit-opacity:',Z]))
$$(W(['-o-opacity:',Z]))
break
case 'textOverflow':$$(W(['text-overflow:',Z]))
$$(W(['-o-text-overflow:',Z]))
$$(W(['-ms-text-overflow:',Z]))
break
case 'display':if(p.bugs.noBoxSizing&&Z=='inline-block'){$$('display:inline')
$$('zoom:1')}
else $$(W(['display:',Z]))
break
case 'backgroundImage':if(w.repeatingLinearGradient.test(Z)){$a.push('background-image:')
Z=Z.replace(w.repeatingLinearGradient,'');(p.isChrome||p.isIOS||p.isSafari)?$$(W(['-webkit-repeating-linear-gradient',Z])):p.isFF?$$(W(['-moz-repeating-linear-gradient',Z])):p.isOpera?$$(W(['-o-repeating-linear-gradient',Z])):p.isIE?$$(W(['-ms-repeating-linear-gradient',Z])):$$(W(['repeating-linear-gradient',Z]))
break}
default:$_()
break}
return $a.join('')}
function S(Y){if(typeof Y!='string')return ''
var Z
Z=Y.charAt(0)=='#'?Y.substring(1):Y
if(Z.slice(0,3)=='rgb')return T(Z)
if(Z.length==3)Z=Z.charAt(0)+Z.charAt(0)+Z.charAt(1)+Z.charAt(1)+Z.charAt(2)+Z.charAt(2)
return '#'+Z}
function T(Y,Z){Y=Y.slice(5,-1)
Y=Y.split(',')
if(Y.length==3||Z)return '#'+U(Y[0])+U(Y[1])+U(Y[2])
Y[3]=(parseFloat(Y[3],10)*255).toFixed()
return '#'+U(Y[3])+U(Y[0])+U(Y[1])+U(Y[2])}
function U(Y){Y=parseInt(Y,10).toString(16)
if(Y.length==1)Y='0'+Y
return Y}
function V(Y,Z){(Y.slice(0,3)=='rgb')&&(Y=T(Y,!0));(Z.slice(0,3)=='rgb')&&(Z=T(Z,!0))
Y=S(Y).substring(1)
Z=S(Z).substring(1)
var $$=$b(0),$_=$b(2),$a=$b(4)
return ('#'+$$+$_+$a)
function $b($c){return (Math.round((parseInt(Y.substring($c,$c+2),16)+parseInt(Z.substring($c,$c+2),16))/32)*16).toString(16)}}
function W(Y){return Y.join('')}
function X(Y,Z,$$){if(!Y)return
if(!Z)Z={}
if($$)$$+='.'
else $$=''
for(var $_ in Y)if(Y.hasOwnProperty($_)){if(typeof Y[$_]=='object'){X(Y[$_],Z,$$+$_)}
else{Z[$$+$_]=Y[$_]}}
return Z}
if((typeof J==='function')&&J.prototype&&!J.__jx__no_fqname){J.prototype.__jx__fqname_chain=[(J.prototype.__jx__fqname_chain||"")," ","jx_core_JCSS"].join('')
J.prototype.__jx__fqname="jx_core_JCSS"}
return J})(),u=b._=(function(){var w=[],x='_',y=[],z=[]
function A(P,Q){if(isNaN(P)){return P}
if(P==-1)P=w.length
var R=w[P]
if(!R)w[P]=R=new B()
if(typeof (Q)=='string')R.add('_',Q)
else for(var S in Q)if(Q.hasOwnProperty(S))R.add(S,Q[S])
return R}
function B(){var P={},Q=[],R={add:U,bind:V,onTranslate:W,toJSON:X,toString:Y,update:Z},S=['concat','replace','toLowerCase','toUpperCase']
for(var T=0;T<S.length;T++)R[S[T]]=$_(S[T])
return R
function U($a,$b){P[$a]=$b}
function V($a){C($a,R)}
function W($a){Q.push($a)}
function X(){return Y()}
function Y($a){return P[$a||x]||P._}
function Z($a){var $b=Y($a),$c
for($c=0;$c<Q.length;$c++)Q[$c]($b)}
function $$($a,$b){var $c=new B(),$d
w[P._]=$c
for(var $e in P)if(P.hasOwnProperty($e)){$d=P[$e]
if(typeof ($d)!='string')continue
$d=$d[$a].apply($d,$b)
$c.add($e,$d)}
return $c}
function $_($a){return function(){return $$($a,arguments)}}}
function C(P,Q){for(var R=0;R<y.length;R++)if(y[R]==P){z[R]=Q
return}
y.push(P)
z.push(Q)}
function D(P){for(var Q=0;Q<y.length;Q++)if(y[Q]==P){y.splice(Q,1)
z.splice(Q,1)
return}}
var E=[]
function F(P){P=P.split(/-|_/).slice(0,2)
var Q=P[0]=P[0].toLowerCase()
if(P[1])P[1]=P[1].toUpperCase()
P=P.join('_')
if(P in c.languages)return P
if(Q in c.languages)return Q
return null}
function G(P){var Q,R,S,T,U,V
P=F(P)
if(!P)return
U=c.languages[P]
if(!U)return
V=b[c.languages[P]]
if(!V)return
A.language=x=P
d.ensureLoaded(V,function(W){if(W)H(P)
if(P!=x)return
for(Q=0,R=w.length;Q<R;Q++)if(w[Q].update instanceof Function)w[Q].update(P)
for(Q=0,R=y.length;Q<R;Q++){S=y[Q]
T=z[Q].toString()
if(typeof (S.textContent)=='string')S.textContent=T
else{if(typeof (S.innerText)=='string')S.innerText=T
else if(typeof (S.nodeValue)=='string')try {S.data=T}catch(X){;}}}
E._active=!0
R=E.length
try {for(Q=0;Q<R;Q++)E[Q]&&E[Q](P)}catch(X){;}
E._active=!1
if(E._dirty){for(Q=0;Q<R;Q++){if(!E[Q]){if(Q==R-1)E.pop()
else E[Q--]=E.pop()
R--}}
E._dirty=!1}})}
function H(P){var Q=b[c.languages[P]],R
for(R=0;R<Q.length;R++)if(Q[R]!==0)w[R].add(P,Q[R])}
function I(P){E.push(P)}
function J(P){for(var Q=0,R=E.length;Q<R;Q++){if(E[Q]==P){if(E._active)E[Q]=null,E._dirty=!0
else if(Q==R-1)E.pop()
else E[Q]=E.pop()
break}}}
var K=/^ar|^fa|^he/
function L(){return !(x.search(K)==-1)}
function M(P){if(!L())return P
return P.replace(/left/,'%left%').replace(/right/,'left').replace(/%left%/,'right').replace(/ltr/,'%ltr%').replace(/rtl/,'ltr').replace(/%ltr%/,'rtl')}
var N=c.strings
for(var O=0;O<N.length;O++)A(O,N[O])
A.bind=C
A.flip=M
A.onLanguage=I
A.unLanguage=J
A.update=G
A.unbind=D
A.rtl=L
A.findClosestLanguage=F
if((typeof A==='function')&&A.prototype&&!A.__jx__no_fqname){A.prototype.__jx__fqname_chain=[(A.prototype.__jx__fqname_chain||"")," ","jx_core__"].join('')
A.prototype.__jx__fqname="jx_core__"}
return A})(),v=b.Element=(function(){var w={create:M,extend:S,appendChild:O,addChildren:P,hasParentNode:N,id:C,get:H,set:F,unset:G,mangleIDs:I,generateID:C,nativeGenerator:J,getStyles:Q,processDeferredStyles:A}
function x(Z,$$,$_){try {Z.style[Y($$)]=$_}catch($a){if(console)console.log('Failed to set style.'+$$+' to "'+$_+'": '+$a.description)}}
var y=x
function z(){}
function A(){}
var B=1
function C(){return '___$_'+B++}
var D='__JX__ID',E={}
function F(Z,$$){var $_=$$.getAttribute(D)
$_=$_?$_.split(' '):[]
Z||(Z=C())
E[Z]=$$
$_.push(Z)
$$.setAttribute(D,$_.join(' '))}
function G(Z){var $$=Z.getAttribute(D)
if(!$$)return
$$=$$.split(' ')
for(var $_=0;$_<$$.length;$_++)delete E[$$[$_]]}
function H(Z){return E[Z]}
if(p.bugs.leaksMemory)p.bugs.leaksMemory(function(){for(var Z=0,$$=E.length,$_;Z<$$;Z++){$_=E[Z]
$_.plugLeakage&&$_.plugLeakage()}})
function I(Z,$$){var $_
for(var $a=0;$a<$$.length;$a++){$_=$$[$a]
if(typeof ($_)!='string'){if($_[1])$_[1]=Z+'__'+$_[1]
if($_[3])I(Z,$_[3])}}
return $$}
function J(Z){var $$=function($_,$a,$b,$c,$d){$a=$a||C()
var $e=$_.ownerDocument,$f=w.create($e,Z,$a)
$f.__jx__constructor=$$
$f.__jx__native=!0
var $g=!1
$f.appendToParent=function($h){if(!w.hasParentNode($f))w.appendChild($_,$f)
if($h&&!$g){if($_.appendToParent)$_.appendToParent(!0)
$g=!0}}
$f.setStyle($b)
$f.setAttributes($d)
w.addChildren($f,$c)
$f.appendToParent()
return $f}
return $$}
function K(Z){while(Z.defaultPlacement)Z=Z.defaultPlacement
return Z}
function L(Z){if(Z.createElement)return Z
return K(Z).ownerDocument}
function M(Z,$$,$_,$a){var $b=L(Z).createElement($$)
if(p.isSafari&&$$.toLowerCase()=='textarea'){$b.style.resize='none'}
switch($$.toLowerCase()){case 'textarea':case 'input':$b.style.outlineStyle='none'}
z($b)
F($_,$b)
S($b)
q.extend($b)
$b.setStyle($a)
if(p.buggyCSS)$b.setOverflow('auto')
return $b}
function N(Z){return (Z.parentNode&&Z.parentNode.nodeType&&Z.parentNode.nodeType!=11)}
function O(Z,$$){if(Z==document.body&&($$.style.position=='absolute'||$$.style.position=='fixed')){Z.insertBefore($$,Z.firstChild)
$$.applyConstraints()
return}
var $_=Z
while($_.defaultPlacement)$_=$_.defaultPlacement
$_.appendChild($$)
$$.applyConstraints()}
function P(Z,$$){if(!$$||!$$.length)return
Z=K(Z)
var $_,$a,$b=Z.ownerDocument,$c
for(var $d=0;$d<$$.length;$d++){$a=$$[$d]
if(g($a))$_=$a[0](Z,$a[1],$a[2],$a[3],$a[4])
else{$c=$b.createTextNode($a)
Z.appendChild($c)
if(typeof $a.bind=='function')$a.bind($c)}}
return $_}
function Q(Z){var $$=Z.ownerDocument
if($$.defaultView&&$$.defaultView.getComputedStyle)return $$.defaultView.getComputedStyle(Z,null)||{}
if(Z.currentStyle)return Z.currentStyle
return {}}
function R(Z,$$){return Q(Z)[$$]}
function S(Z,$$){var $_=Z.style,$a=Z.ownerDocument,$b=$a.compatMode=='BackCompat',$c=!!($a.documentElement&&$a.documentElement.style.setExpression),$d=p.isIE6||(p.isIE&&$b&&$c)
function $e($1){var $2
for(var $3 in $1)if($1.hasOwnProperty($3)){$2='set'+$3.substr(0,1).toUpperCase()+$3.substr(1)
if(typeof Z[$2]=='function')Z[$2]($1[$3])}}
function $f(){return Z.innerText||Z.textContent||''}
function $g($1){u&&u.unbind&&u.unbind(Z)
if($1&&typeof $1.bind=='function')$1.bind(Z)
if(typeof document.body.textContent!='undefined')Z.textContent=$1
else Z.innerText=$1}
function $h($1){var $2,$3
if(arguments.length==1&&i($1)){if(!$1)return
$1=$1.split(';')
for($2=0;$2<$1.length;$2++){if($1[$2].match(/^\s*$/))continue
$3=$1[$2].match(/\s*([^:]+):\s*(.*?)\s*$/)
if(!$3&&$1[$2].length){if(console)console.log('Bad style: "'+$1[$2]+'"')
continue}
$5($3[1],$3[2])}}
else if(arguments.length==1&&typeof ($1)=='object'){for(var $4 in $1)if($1.hasOwnProperty($4))$5($4,$1[$4])}
else if(arguments.length>1){for($2=0;$2<arguments.length;$2+=2)$5(arguments[$2],arguments[$2+1])}
function $5($6,$7){var $8=Y('set-'+$6)
if(typeof Z[$8]=='function')Z[$8]($7)
else y(Z,$6,$7)}}
function $i($1){function $2(){var $3=(u&&u.flip)?u.flip($1):$1
if(p.isIE)$_.styleFloat=$3
else $_.cssFloat=$3}
;
u&&u.onLanguage&&u.onLanguage($2)
$2()
return Z}
var $j,$k,$l,$m,$n,$o,$p,$q,$r
$j=$k=$l=$m=$n=$o=NaN
$p=null
function $s($1){$j=$y($1)
$A()
return Z}
function $t($1){$l=$y($1)
$A()
return Z}
function $u($1){$k=$y($1)
$A()
return Z}
function $v($1){$m=$y($1)
$A()
return Z}
function $w($1){$n=$y($1)
$A()
return Z}
function $x($1){$o=$y($1)
$A()
return Z}
function $y($1){return (i($1)&&$1.substr($1.length-1)=='%')?parseInt($1,10)+'%':parseInt($1,10)}
function $z($1){switch($1){case 'static':case 'relative':case 'absolute':case 'fixed':$p=$1}
if($p!==null)y(Z,'position',($d&&$p=='fixed')?'absolute':$p)
return Z}
function $A(){if(!isNaN($j)&&!isNaN($o))$k=NaN
if(!isNaN($l)&&!isNaN($n))$m=NaN
if($n<0)$n=0
if($o<0)$o=0
$B()}
function $B(){if(!w.hasParentNode(Z))return
if(p.bugs.ie.cssFixed&&$p=='fixed'){l($C,Z,!0)
return}
if(p.bugs.ie.cssBottomRight&&((!isNaN($l)&&!isNaN($m))||(!isNaN($j)&&!isNaN($k)))){$E()
return}
$F()}
function $C(){$D()
if(Z.appendToParent)Z.appendToParent(!0)
if($k<0)$k=0
if($m<0)$m=0
o.ok(isNaN($l)!=isNaN($m),'One and only one of left/right must be set')
o.ok(isNaN($j)!=isNaN($k),'One and only one of top/bottom must be set')
o.ok(!isNaN($n),'Width must be set')
o.ok(!isNaN($o),'Height must be set')
o.ok(Z.ownerDocument==document,'Fixed element must be top level element')
if($o!=$r){$_.height=$o+'px'
$r=$o}
if($n!=$q){$_.width=$n+'px'
$q=$n}
var $1,$2,$3,$4
if(p.isQuirks){$4='document.body.clientHeight'
$3='document.body.clientWidth'
$1='(dummye34cf6=document.body.scrollLeft)+'
$2='(dummye34cf6=document.body.scrollTop )+'}
else{$4='document.documentElement.clientHeight'
$3='document.documentElement.clientWidth'
$1='(dummye34cf6=document.documentElement.scrollLeft)+'
$2='(dummye34cf6=document.documentElement.scrollTop )+'}
if(!isNaN($l))$1+=$l
else if(i($l))$1+=parseInt($l,10)/100*(p.isQuirks?document.body:document.documentElement).clientWidth
else $1+=$3+'-'+($n+$m)
if(!isNaN($j))$2+=$j
else if(i($j))$2+=parseInt($j,10)/100*(p.isQuirks?document.body:document.documentElement).clientHeight
else $2+=$4+'-'+($o+$k)
if(p.isIE6&&document.body.currentStyle.direction=='rtl'){if(p.isQuirks)$1+='-(document.body.scrollWidth-document.body.clientWidth)'
else $1+='-(document.documentElement.scrollWidth-document.documentElement.clientWidth)'}
$_.setExpression('left',$1+'+"px"')
$_.setExpression('top',$2+'+"px"')}
function $D(){if($D.alreadyHacked)return
$D.alreadyHacked=1
if(p.isStrict)document.body.parentNode.style.background='#fff url(https://) fixed'
else{if(document.body.currentStyle.backgroundAttachment!='fixed'){if(document.body.currentStyle.backgroundImage!='none'){var $1=document.createElement('div'),$2=$1.style,$3=document.body.currentStyle
$2.backgroundAttachment=$3.backgroundAttachment
$2.backgroundColor=$3.backgroundColor
$2.backgroundImage=$3.backgroundImage
$2.backgroundPositionX=$3.backgroundPositionX
$2.backgroundPositionY=$3.backgroundPositionY
$2.backgroundRepeat=$3.backgroundRepeat
$2.position='absolute'
$2.zIndex=-1
$2.top=$2.left=0
$2.width='100%'
document.body.insertBefore($1,document.body.firstChild)
var $4=!1,$5=0,$6,$7,$8=function(){if(!$4&&$5){$6+=document.body.clientWidth-$5
$2.width=$6+'px'
$5=document.body.clientWidth}
if($7)return
$7=setTimeout(function(){$2.width=0
document.body.className=document.body.className
$6=Math.max(document.body.scrollWidth,document.body.clientWidth)
$2.width=$6+'px'
$5=document.body.clientWidth
$4=document.body.scrollWidth>document.body.clientWidth
$7=null},0)}
setTimeout($8,0)
$2.setExpression('height','document.body.scrollHeight+"px"')
$8()}
document.body.style.backgroundImage='url(https://)'
document.body.style.backgroundAttachment='fixed'}}}
function $E(){if(Z.appendToParent)Z.appendToParent(!0)
$D()
var $1=isNaN($l)?'':$l,$2=isNaN($m)?'':$m,$3=isNaN($n)?'':$n,$4,$5=isNaN($j)?'':$j,$6=isNaN($k)?'':$k,$7=isNaN($o)?'':$o,$8,$9=Z.ownerDocument.compatMode=='BackCompat'
if($p=='fixed'&&Z.ownerDocument==document){if($9){$8='document.body.clientHeight'
$4='document.body.clientWidth'}
else{$8='document.documentElement.clientHeight'
$4='document.documentElement.clientWidth'}}
else{$8='this.offsetParent.clientHeight'
$4='this.offsetParent.clientWidth'}
if(p.isIE6){if(!isNaN($l)&&!isNaN($m)){$2=''
$3=[$4,$l,$m].join('-')}
if(!isNaN($j)&&!isNaN($k)){$6=''
$7=[$8,$j,$k].join(' - ')}}
if($p=='fixed'&&Z.ownerDocument==document){if($9){if(!isNaN($l)||isNaN($m))$1+='+(dummye34cf6=document.body.scrollLeft)'
else{$1+='+(dummye34cf6=document.body.scrollLeft)+document.body.clientWidth-this.offsetWidth-'+$m
$2=''}
if(!isNaN($j)||isNaN($k))$5+='+(dummye34cf6=document.body.scrollTop)'
else{$5+='+(dummye34cf6=document.body.scrollTop)+document.body.clientHeight-this.offsetHeight-'+$k
$6=''}}
else{if(!isNaN($l)||isNaN($m))$1+='+(dummye34cf6=document.documentElement.scrollLeft)'
else if(p.isIE6){$1+='+(dummye34cf6=document.documentElement.scrollLeft)+document.documentElement.clientWidth-this.offsetWidth-'+$m
$2=''}
else $2+='+document.documentElement.scrollWidth-(dummye34cf6=document.documentElement.scrollLeft)-document.documentElement.clientWidth'
if(!isNaN($j)||isNaN($k))$5+='+(dummye34cf6=document.documentElement.scrollTop)'
else if(p.isIE6){$5+='+(dummye34cf6=document.documentElement.scrollTop)+document.documentElement.clientHeight-this.offsetHeight-'+$k
$6=''}
else $6+='+document.documentElement.scrollHeight - (dummye34cf6=document.documentElement.scrollTop) - document.documentElement.clientHeight'}}
var _$,__
if(0&&Z.parentNode==document.body)window.attachEvent('onscroll',function(){if(!_$){_b('left',$1)
_b('right',$2)
_b('width',$3)
_b('top',$5)
_b('bottom',$6)
_b('height',$7)
_$=setInterval(function(){__--
if(!__)_a()},200)}
__=5})
function _a(){$_.removeExpression('left')
$_.removeExpression('right')
$_.removeExpression('width')
$_.removeExpression('top')
$_.removeExpression('bottom')
$_.removeExpression('height')
clearInterval(_$)
_$=!1}
_b('left',$1)
_b('right',$2)
_b('width',$3)
_b('top',$5)
_b('bottom',$6)
_b('height',$7)
function _b(_c,_d){$_[_c]=''
$_.removeExpression(_c)
if(typeof (_d)=='number')$_[_c]=_d+'px'
else if(i(_d)&&_d.substr(_d.length-1)=='%')$_[_c]=_d
else if(i(_d)&&_d.length)$_.setExpression(_c,_d)}}
function $F(){$H()
$G()}
function $G(){$_.top=i($j)?$j:isNaN($j)?'':$j+'px'
$_.bottom=i($k)?$k:isNaN($k)?'':$k+'px'
if($o!=$r){$_.height=i($o)?$o:isNaN($o)?'':$o+'px'
$r=$o}}
function $H(){$_.left=i($l)?$l:isNaN($l)?'':$l+'px'
$_.right=i($m)?$m:isNaN($m)?'':$m+'px'
if($n!=$q){$_.width=i($n)?$n:isNaN($n)?'':$n+'px'
$q=$n}}
var $I='',$J=0,$K=0
Z.dock=function($1,$2,$3){$I=$1
if(j($2))$J=$2
if(j($3))$K=$3
$L()
Z.on('jx:resize',$L)}
function $L(){var $1=isNaN($n)?Z.offsetWidth:$n,$2=isNaN($o)?Z.offsetHeight:$o,$3,$4,$5,$6,$7,$8
$3=$4=$5=$6=NaN
$7=$8=0
switch($I.charAt(0)){case 't':$3=0
break
case 'm':$3='50%'
break
case 'b':$4=0
break}
switch($I.charAt(1)){case 'l':$5=0
break
case 'c':$5='50%'
break
case 'r':$6=0
break}
if($3=='50%')$7=-($2/2)
if($5=='50%')$8=-($1/2)
var $9=0
if($K>=0||!isNaN($3)||typeof ($3)=="string"){$7+=$K}
else{$9=-$K}
$8+=$J
Z.setMargin([$7+'px',0,$9+'px',$8+'px'].join(' ')).setTop($3).setBottom($4).setLeft($5).setRight($6)}
var $M,$N=[0,0,0,0]
function $O($1){if(!g($1)){$1=$1.split(' ')
$1[0]=parseInt($1[0],10)
$1[1]=parseInt($1[1],10)
$1[2]=parseInt($1[2],10)
$1[3]=parseInt($1[3],10)}
if($d){$1[1]=Math.max(0,$1[1])
$1[2]=Math.max(0,$1[2])}
$M=$1
return Z}
function $P($1){if(!g($1)){$1=$1.split(' ')
$1[0]=parseInt($1[0],10)
$1[1]=parseInt($1[1],10)
$1[2]=parseInt($1[2],10)
$1[3]=parseInt($1[3],10)}
$N=[Math.max(0,$1[0]),Math.max(0,$1[1]),Math.max(0,$1[2]),Math.max(0,$1[3])]
return Z}
function $Q(){if(!$M)return
if($l<$M[3]+$N[3])$l=$M[3]
if($m<$M[1]+$N[1])$m=$M[1]
if($j<$M[0]+$N[0])$j=$M[0]
if($k<$M[2]+$N[2])$k=$M[2]
var $1=p.isQuirks?document.body:document.documentElement,$2=isNaN($n)?Z.offsetWidth:$n,$3=$1.clientWidth-$2,$4=$1.clientHeight-Z.offsetHeight
if($3-$l<=$M[1]+$N[1])$l=$3-$M[1]
if($3-$m<=$M[3]+$N[3])$m=$3-$M[3]
if($4-$j<=$M[2]+$N[2])$j=$4-$M[2]
if($4-$k<=$M[0]+$N[0])$k=$4-$M[0]}
function $R($1,$2){$k=$m=NaN
$j=$2
$l=$1
$Q()
$B()
return Z}
function $S($1,$2){if(isNaN($l)&&isNaN($m))$l=0
if(isNaN($j)&&isNaN($k))$j=0
if(!isNaN($l))$l+=$1
if(!isNaN($m))$m-=$1
if(!isNaN($j))$j+=$2
if(!isNaN($k))$k-=$2
$Q()
$B()}
function $T($1,$2,$3,$4){if($1){if(isNaN($n))$n=Z.offsetWidth
$n=Math.max($3||0,$n+$1)}
if($2){if(isNaN($o))$o=Z.offsetHeight
$o=Math.max($4||0,$o+$2)}
$Q()
$B()
Z.fire('jx:resize')
return Z}
var $U=!1
function $V($1){if($1=='none'||$1=='block')$U=!0
if($1=='none'||$1=='hidden'||$1=='false'||!$1)$W()
else $Y()
return Z}
function $W(){if($U){if($_.display!='none'){$_.display='none'
Z.fire('hide')}}
else{if($_.visibility!='hidden'){$_.visibility='hidden'
Z.fire('hide')}}
return Z}
function $X(){if($U)return Z.getStyle('display')!='none'
else return Z.getStyle('visibility')=='visible'}
function $Y(){if($U){if($_.display!='block'){$_.display='block'
Z.fire('show')}}
else{if($_.visibility!='visible'){$_.visibility='visible'
Z.fire('show')}}
return Z}
Z.getStyles=function(){return Q(Z)}
Z.getStyle=function($1){return R(Z,$1)}
Z.setAttributes=$e
Z.getText=$f
Z.setText=$g
Z.setStyle=$h
Z.setFloat=$i
Z.setPosition=$z
Z.setTop=$s
Z.setBottom=$u
Z.setLeft=$t
Z.setRight=$v
Z.setHeight=$x
Z.setWidth=$w
Z.applyConstraints=$B
Z.setVisible=$V
Z.setBounds=$O
Z.setSnaps=$P
Z.move=$S
Z.moveTo=$R
Z.resizeBy=$T
Z.hide=$W
Z.show=$Y
Z.isVisible=$X
for(var $Z in T)if(T.hasOwnProperty($Z))Z[$Z]=T[$Z]
if($$){var $0=Z.firstChild
while($0){S($0,!0)
$0=$0.nextSibling}}
return Z}
var T=w.proto={$:function(Z){return H(this.id+'__'+Z)},destroy:function(){if(this._destructors){for(var Z=this._destructors,$$=Z.length,$_=0;$_<$$;$_++)Z[$_].call(this)}
this.parentNode&&this.parentNode.removeChild(this)
this._autobinds&&this.autounbind()
typeof this.empty=='function'&&this.empty()
typeof this.unextendEvents=='function'&&this.unextendEvents()
G(this)
if(p.bugs.leaksMemory)typeof this.plugLeakage=='function'&&this.plugLeakage()},empty:function(){var Z
while((Z=this.firstChild)){if(typeof Z.destroy=='function')Z.destroy()
else if(Z.jx_wrapper)Z.jx_wrapper.destroy()
else if(Z.nodeType==1)T.destroy.call(Z)
else this.removeChild(Z)}},onDestruction:function(Z){(this._destructors||(this._destructors=[])).push(Z)},autobind:function(Z,$$,$_){Z.on($$,$_)
this._autobinds||(this._autobinds=[])
this._autobinds.push([Z,$$,$_])},autounbind:function(Z,$$,$_){var $a=this._autobinds,$b,$c
if(Z&&$$&&$_){for($b=$a.length-1;$b>=0;$b--){$c=$a[$b]
if($c[0]==Z&&$c[1]==$$&&$c[2]==$_){$a.splice($b,1)
$c[0].un($c[1],$c[2])
return}}
return}
if(!Z&&!$$&&!$_){if(!$a)return
for($b=$a.length-1;$b>=0;$b--){$c=$a[$b]
$c[0].un($c[1],$c[2])}
return}},getXY:function(){var Z,$$,$_=this.offsetParent
Z=this.offsetLeft
$$=this.offsetTop
while($_){Z+=$_.offsetLeft
$$+=$_.offsetTop
$_=$_.offsetParent}
return [Z,$$]},getFixedXY:function(){var Z=0,$$=0,$_=this
if("getBoundingClientRect" in this){var $a=this.ownerDocument,$b=$a.body,$c=$a.defaultView||$_.parentWindow||!1,$d=$_.getBoundingClientRect(),$e=$a.clientTop||$b.clientTop||0,$f=$a.clientLeft||$b.clientLeft||0,$g=$c.pageYOffset||$b.scrollTop,$h=$c.pageXOffset||$b.scrollLeft
$$=$d.top+$g-$e
Z=$d.left+$h-$f}
else{$$=$_.offsetTop
Z=$_.offsetLeft
while(($_=$_.offsetParent)){$$-=$_.scrollTop,Z-=$_.scrollLeft
$$+=$_.offsetTop,Z+=$_.offsetLeft}}
return [Z,$$]},toggle:function(){this.isVisible()?this.hide():this.show()
return this},setOpacity:function(Z){Z=Math.max(Math.min(Z,1),0)
if(p.isIE)this.style.filter=(this.style.filter||'').replace(/progid:DXImageTransform.Microsoft.Alpha\([^\)]*\),? ?/gi,'')+(Z>=1?'':'progid:DXImageTransform.Microsoft.Alpha(opacity='+Z*100+'), ')
else this.style.opacity=Z
return this},setBackgroundImage:function(Z){var $$=Z
if($$&&p.isIE)this.style.filter+='progid:DXImageTransform.Microsoft.AlphaImageLoader(src="'+$$+'",sizingMethod="scale"), '
else this.style.backgroundImage='url("'+Z+'")'
return this},setClass:function(Z){this.className=Z
return this},addClass:function(Z){this.removeClass(Z)
this.className+=' '+Z
return this},removeClass:function(Z){var $$=this.className.split(' ')
for(var $_=0;$_<$$.length;$_++){if($$[$_]==Z){$$[$_]=""}}
this.className=$$.join(' ')
return this},setRotation:function(Z){if(p.isFF)this.style.MozTransform=Z?'rotate('+Z+'deg)':''
else if(p.isSafari)this.style.WebkitTransform=Z?'rotate('+Z+'deg)':''
else if(p.isIE){this.style.filter=Z?'progid:DXImageTransform.Microsoft.BasicImage(rotation='+Math.round(Z/90)+')':''
if(p.isIE8&&Z){var $$=this.getElementsByTagName('iframe')
if(p.isIE8&&$$.length){$$[0].style.filter=Z?'progid:DXImageTransform.Microsoft.BasicImage(rotation='+Math.round(Z/90)+')':''
this.style.overflow='visible'}}}
return this},setSelectable:function(Z){function $$(){return !1}
if(Z&&Z!='false'){this.unselectable='on'
if(typeof this.style.MozUserSelect!='undefined')this.style.MozUserSelect='none'
else if(typeof this.style.WebkitUserSelect!='undefined')this.style.WebkitUserSelect='none'
else if(typeof this.onselectstart!='undefined')this.un('selectstart',$$)}
else{this.unselectable='on'
if(typeof this.style.MozUserSelect!='undefined')this.style.MozUserSelect='none'
else if(typeof this.style.WebkitUserSelect!='undefined')this.style.WebkitUserSelect='none'
else if(typeof this.onselectstart!='undefined')this.on('selectstart',$$)}
return this},setScrollTop:function(Z){this.scrollTop=Z
return this}}
if(p.leaksMemory)T.plugLeakage=function(){this.unextendEvents&&this.unextendEvents()
this.$=this.plugLeakage=this.destroy=this.empty=this.autobind=this.autounbind=this._autobinds=this._destructors=this.onDestruction=this.getXY=this.appendToParent=this.defaultPlacement=this.getStyles=this.getStyle=this.setAttributes=this.getText=this.setText=this.setStyle=this.setFloat=this.setPosition=this.setTop=this.setBottom=this.setLeft=this.setRight=this.setHeight=this.setWidth=this.applyConstraints=this.setVisible=this.setBounds=this.setSnaps=this.move=this.moveTo=this.resizeBy=this.hide=this.show=this.isVisible=this.toggle=this.setOpacity=this.setBackgroundImage=this.setClass=this.addClass=this.removeClass=this.setRotation=this.setSthisectable=this.setScrollTop=this.setBackground=this.setBackgroundPosition=this.setBorder=this.setBorderColor=this.setBorderStyle=this.setBorderWidth=this.setBorderTop=this.setBorderRight=this.setBorderBottom=this.setBorderLeft=this.setClear=this.setColor=this.setPadding=this.setMargin=this.setMarginTop=this.setMarginRight=this.setMarginBottom=this.setMarginLeft=this.setDisplay=this.setLineHeight=this.setLetterSpacing=this.setVisibility=this.setOutline=this.setOverflow=this.setOverflowX=this.setOverflowY=this.setFontFamily=this.setFontSize=this.setFontWeight=this.setFontStyle=this.setTextAlign=this.setTextDecoration=this.setTextTransform=this.setVerticalAlign=this.setZIndex=this.setCursor=this.setHref=this.setSrc=this.setChecked=this.setMedia=this.setName=this.setType=this.setValue=this.setDataNode=this.__jx__constructor=this.__jx__native=null}
var U,V
U='background background-position border border-color border-style border-width color border-top border-right border-bottom border-left clear padding margin margin-top margin-right margin-bottom margin-left display line-height letter-spacing visibility outline overflow overflow-x overflow-y font-family font-size font-weight font-style text-align text-decoration text-transform vertical-align z-index cursor'.split(' ')
for(V=0;V<U.length;V++)T[Y('set-'+U[V])]=W(Y(U[V]))
U='checked href media name src target type value'.split(' ')
for(V=0;V<U.length;V++)T[Y('set-'+U[V])]=X(U[V])
function W(Z){return (function($$){try {this.style[Z]=$$}catch($_){;}
return this})}
function X(Z){return (function($$){this.setAttribute(Z,$$)
return this})}
function Y(Z){Z=Z.split(/[^a-zA-Z0-9]/)
for(var $$=1;$$<Z.length;$$++)if(Z[$$].length)Z[$$]=Z[$$].substr(0,1).toUpperCase()+Z[$$].substr(1)
return Z.join('')}
if(p.isIE)document.execCommand("BackgroundImageCache",!1,!0)
if((typeof w==='function')&&w.prototype&&!w.__jx__no_fqname){w.prototype.__jx__fqname_chain=[(w.prototype.__jx__fqname_chain||"")," ","jx_core_Element"].join('')
w.prototype.__jx__fqname="jx_core_Element"}
return w})()
b.__$$__meshim_widget_Config=(function(){var w=C(),x=document.location.protocol+'//v2.zopim.com/widget',y=x+'/images',z=x+'/sounds',A=x+'/fonts'
c.baseURL=p.secureURL(w.baseURL)
var B={ASSETS_URL:x,IMAGES_URL:y,SOUNDS_URL:z,FONTS_URL:A,ASSETS_LEGACY:document.location.protocol+'//cdn.zopim.com/assets',BRANDING_URL:'https://www.zopim.com',AVATARS:{CONCIERGE:y+'/avatar_simple_agent.png',AGENT:y+'/avatar_simple_agent.png',VISITOR:y+'/avatar_simple_visitor.png',DEFAULT:y+'/avatar_simple_visitor.png'},ACCOUNT_KEY:w.accountKey,BRAND_DOMAIN:w.brandDomain,COUNTRY_CODE:E(),AUTH_URL:'https://www.zopim.com/auth/$NAME/$KEY-$MID',AUTH_LOGOUT_URL:'https://www.zopim.com/auth/logout/$KEY-$MID',IS_POPOUT:window.$zopim_popout,POPOUT_WINDOW_PREFIX:'zlivechatpopout_',POPOUT_URL:'https://v2.zopim.com/widget/livechat.html',FILE_UPLOAD_PATH:'/client/widget/uploads',FILE_UPLOAD_MAX:5*1024*1024,RESEND_MSG_TIMEOUT:5000,FILE_REPLACE_SOURCE:/^(\s*https?\:\/\/v2(?:assets|uploads)\.zopim\.)com(\/)/i,FILE_REPLACE_RESULT:'$1io$2'}
function C(){var F=D(),G=[/\/?[?]/,/\/livechat\//],H=[]
for(var I=0;I<G.length;I++){H=F.split(G[I])
if(H.length)break}
var J=H[1],K=H[0],L=K.replace(/^(https?:)?\/\//i,'').split('/')[0],M=L.replace(/(.+\.)(?=.+\..+)/,''),N=H[0].split('/')
if(N.pop()==L){N=H[0]}
else{N=N.join('/')}
return {accountKey:J,brandDomain:M,baseURL:N}}
function D(){if(window.$zopim&&window.$zopim.s)return window.$zopim.s.src
var F,G=document.getElementsByTagName('script'),H=/.*zopim.(com|net)\//
for(var I=0,J=G.length;I<J;I++){F=G[I].src||''
if(H.test(F))return F}
return ''}
function E(){var F='VN'.toUpperCase()
if(F.charAt(0)=='<')F='geo'
return F}
if((typeof B==='function')&&B.prototype&&!B.__jx__no_fqname){B.prototype.__jx__fqname_chain=[(B.prototype.__jx__fqname_chain||"")," ","meshim_widget_Config"].join('')
B.prototype.__jx__fqname="meshim_widget_Config"}
return B})()
b.__$$__meshim_common_Chroma=(function(){var w={},x={};(function(){var z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,$$,$_,$a,$b,$c,$d,$e,$f,$g,$h,$i,$j,$k,$l,$m,$n,$o
$e=typeof w!=="undefined"&&w!==null?w:this
I=($j=$e.chroma)!=null?$j:$e.chroma={}
if(typeof x!=="undefined"&&x!==null){x.exports=I}
z=(function(){function $p($q,$r,$s,$t){var $u,$v,$w
$u=this
if(($q==null)&&($r==null)&&($s==null)&&($t==null)){$q=[255,0,255]}
if($f($q)==="array"&&$q.length===3){if($t==null){$t=$r}
$w=$q,$q=$w[0],$r=$w[1],$s=$w[2]}
if($f($q)==="string"){$t='hex'}
else{if($t==null){$t='rgb'}}
if($t==='rgb'){$u._rgb=[$q,$r,$s]}
else if($t==='hsl'){$u._rgb=P($q,$r,$s)}
else if($t==='hsv'){$u._rgb=Q($q,$r,$s)}
else if($t==='hex'){$u._rgb=N($q)}
else if($t==='lab'){$u._rgb=S($q,$r,$s)}
else if($t==='lch'){$u._rgb=V($q,$r,$s)}
else if($t==='hsi'){$u._rgb=O($q,$r,$s)}
$v=J($u._rgb)}
$p.prototype.rgb=function(){return this._rgb}
$p.prototype.hex=function(){return Z(this._rgb)}
$p.prototype.toString=function(){return this.hex()}
$p.prototype.hsl=function(){return $_(this._rgb)}
$p.prototype.hsv=function(){return $a(this._rgb)}
$p.prototype.lab=function(){return $b(this._rgb)}
$p.prototype.lch=function(){return $c(this._rgb)}
$p.prototype.hsi=function(){return $$(this._rgb)}
$p.prototype.luminance=function(){return X(this._rgb)}
$p.prototype.name=function(){var $q,$r
$q=this.hex()
for($r in I.colors)if(I.colors.hasOwnProperty($r)){if($q===I.colors[$r]){return $r}}
return $q}
$p.prototype.interpolate=function($q,$r,$s){var $t,$u,$v,$w,$x,$y,$z,$A,$B,$C,$D,$E,$F
$A=this
if($s==null){$s='rgb'}
if($f($r)==="string"){$r=new $p($r)}
if($s==='hsl'||$s==='hsv'||$s==='lch'||$s==='hsi'){if($s==='hsl'){$E=$A.hsl()
$F=$r.hsl()}
else if($s==='hsv'){$E=$A.hsv()
$F=$r.hsv()}
else if($s==='hsi'){$E=$A.hsi()
$F=$r.hsi()}
else if($s==='lch'){$E=$A.lch()
$F=$r.lch()}
if($s.substr(0,1)==='h'){$v=$E[0],$C=$E[1],$y=$E[2]
$w=$F[0],$D=$F[1],$z=$F[2]}
else{$y=$E[0],$C=$E[1],$v=$E[2]
$z=$F[0],$D=$F[1],$w=$F[2]}
if(!isNaN($v)&&!isNaN($w)){if($w>$v&&$w-$v>180){$t=$w-($v+360)}
else if($w<$v&&$v-$w>180){$t=$w+360-$v}
else{$t=$w-$v}
$u=$v+$q*$t}
else if(!isNaN($v)){$u=$v
if($z===1||$z===0){$B=$C}}
else if(!isNaN($w)){$u=$w
if($y===1||$y===0){$B=$D}}
else{$u=void(0)}
if($B==null){$B=$C+$q*($D-$C)}
$x=$y+$q*($z-$y)
if($s.substr(0,1)==='h'){return new $p($u,$B,$x,$s)}
else{return new $p($x,$B,$u,$s)}}
else if($s==='rgb'){$E=$A._rgb
$F=$r._rgb
return new $p($E[0]+$q*($F[0]-$E[0]),$E[1]+$q*($F[1]-$E[1]),$E[2]+$q*($F[2]-$E[2]),$s)}
else if($s==='lab'){$E=$A.lab()
$F=$r.lab()
return new $p($E[0]+$q*($F[0]-$E[0]),$E[1]+$q*($F[1]-$E[1]),$E[2]+$q*($F[2]-$E[2]),$s)}
else{throw "color mode "+$s+" is not supported"}}
$p.prototype.darken=function($q){var $r,$s
if($q==null){$q=20}
$s=this
$r=$s.lch()
$r[0]-=$q
return I.lch($r)}
$p.prototype.darker=function($q){return this.darken($q)}
$p.prototype.brighten=function($q){if($q==null){$q=20}
return this.darken(-$q)}
$p.prototype.brighter=function($q){return this.brighten($q)}
$p.prototype.saturate=function($q){var $r,$s
if($q==null){$q=20}
$s=this
$r=$s.lch()
$r[1]+=$q
return I.lch($r)}
$p.prototype.desaturate=function($q){if($q==null){$q=20}
return this.saturate(-$q)}
return $p})()
N=function($p){var $q,$r,$s,$t,$u
if($p.match(/^#?([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/)){if($p.length===4||$p.length===7){$p=$p.substr(1)}
if($p.length===3){$p=$p.split("")
$p=$p[0]+$p[0]+$p[1]+$p[1]+$p[2]+$p[2]}
$u=parseInt($p,16)
$s=$u>>16
$r=$u>>8&255
$q=$u&255
return [$s,$r,$q]}
if($t=M($p)){return $t}
throw "unknown color: "+$p}
M=function($p){var $q,$r,$s,$t
if((I.colors!=null)&&I.colors[$p]){return N(I.colors[$p])}
if($s=$p.match(/rgb\(\s*(\-?\d+),\s*(\-?\d+)\s*,\s*(\-?\d+)\s*\)/)){return $s.slice(1,4)}
if($s=$p.match(/rgb\(\s*(\-?\d+)%,\s*(\-?\d+)%\s*,\s*(\-?\d+)%\s*\)/)){$t=$s.slice(1,4)
for($r in $t)if($t.hasOwnProperty($r)){$t[$r]=Math.round($t[$r]*2.55)}
return $t}
if($s=$p.match(/hsl\(\s*(\-?\d+),\s*(\-?\d+)%\s*,\s*(\-?\d+)%\s*\)/)){$q=$s.slice(1,4)
$q[1]*=0.01
$q[2]*=0.01
return P($q)}}
Z=function(){var $p,$q,$r,$s,$t,$u
$u=$g(arguments),$r=$u[0],$q=$u[1],$p=$u[2]
$t=$r<<16|$q<<8|$p
$s="000000"+$t.toString(16)
return "#"+$s.substr($s.length-6)}
Q=function(){var $p,$q,$r,$s,$t,$u,$v,$w,$x,$y,$z,$A,$B,$C,$D,$E,$F,$G
$A=$g(arguments),$s=$A[0],$x=$A[1],$z=$A[2]
$z*=255
if($x===0){$w=$r=$p=$z}
else{if($s===360){$s=0}
if($s>360){$s-=360}
if($s<0){$s+=360}
$s/=60
$t=Math.floor($s)
$q=$s-$t
$u=$z*(1-$x)
$v=$z*(1-$x*$q)
$y=$z*(1-$x*(1-$q))
switch($t){case 0:$B=[$z,$y,$u],$w=$B[0],$r=$B[1],$p=$B[2]
break
case 1:$C=[$v,$z,$u],$w=$C[0],$r=$C[1],$p=$C[2]
break
case 2:$D=[$u,$z,$y],$w=$D[0],$r=$D[1],$p=$D[2]
break
case 3:$E=[$u,$v,$z],$w=$E[0],$r=$E[1],$p=$E[2]
break
case 4:$F=[$y,$u,$z],$w=$F[0],$r=$F[1],$p=$F[2]
break
case 5:$G=[$z,$u,$v],$w=$G[0],$r=$G[1],$p=$G[2]}}
$w=Math.round($w)
$r=Math.round($r)
$p=Math.round($p)
return [$w,$r,$p]}
$a=function(){var $p,$q,$r,$s,$t,$u,$v,$w,$x,$y
$y=$g(arguments),$v=$y[0],$r=$y[1],$p=$y[2]
$u=Math.min($v,$r,$p)
$t=Math.max($v,$r,$p)
$q=$t-$u
$x=$t/255.0
if($t===0){$s=void(0)
$w=0}
else{$w=$q/$t
if($v===$t){$s=($r-$p)/$q}
if($r===$t){$s=2+($p-$v)/$q}
if($p===$t){$s=4+($v-$r)/$q}
$s*=60
if($s<0){$s+=360}}
return [$s,$w,$x]}
P=function(){var $p,$q,$r,$s,$t,$u,$v,$w,$x,$y,$z,$A,$B,$C
$B=$g(arguments),$s=$B[0],$w=$B[1],$u=$B[2]
if($w===0){$v=$r=$p=$u*255}
else{$z=[0,0,0]
$q=[0,0,0]
$y=$u<0.5?$u*(1+$w):$u+$w-$u*$w
$x=2*$u-$y
$s/=360
$z[0]=$s+1/3
$z[1]=$s
$z[2]=$s-1/3
for($t=$A=0;$A<=2;$t=++$A){if($z[$t]<0){$z[$t]+=1}
if($z[$t]>1){$z[$t]-=1}
if(6*$z[$t]<1){$q[$t]=$x+($y-$x)*6*$z[$t]}
else if(2*$z[$t]<1){$q[$t]=$y}
else if(3*$z[$t]<2){$q[$t]=$x+($y-$x)*((2/3)-$z[$t])*6}
else{$q[$t]=$x}}
$C=[Math.round($q[0]*255),Math.round($q[1]*255),Math.round($q[2]*255)],$v=$C[0],$r=$C[1],$p=$C[2]}
return [$v,$r,$p]}
$_=function($p,$q,$r){var $s,$t,$u,$v,$w,$x
if($p!==void(0)&&$p.length===3){$x=$p,$p=$x[0],$q=$x[1],$r=$x[2]}
$p/=255
$q/=255
$r/=255
$v=Math.min($p,$q,$r)
$u=Math.max($p,$q,$r)
$t=($u+$v)/2
if($u===$v){$w=0
$s=void(0)}
else{$w=$t<0.5?($u-$v)/($u+$v):($u-$v)/(2-$u-$v)}
if($p===$u){$s=($q-$r)/($u-$v)}
else if($q===$u){$s=2+($r-$p)/($u-$v)}
else if($r===$u){$s=4+($p-$q)/($u-$v)}
$s*=60
if($s<0){$s+=360}
return [$s,$w,$t]}
B=18
E=0.95047
F=1
G=1.08883
S=function($p,$q,$r){var $s,$t,$u,$v,$w,$x,$y
if($p!==void(0)&&$p.length===3){$x=$p,$p=$x[0],$q=$x[1],$r=$x[2]}
if($p!==void(0)&&$p.length===3){$y=$p,$p=$y[0],$q=$y[1],$r=$y[2]}
$v=($p+16)/116
$u=$v+$q/500
$w=$v-$r/200
$u=T($u)*E
$v=T($v)*F
$w=T($w)*G
$t=$i(3.2404542*$u-1.5371385*$v-0.4985314*$w)
$s=$i(-0.969266*$u+1.8760108*$v+0.041556*$w)
$r=$i(0.0556434*$u-0.2040259*$v+1.0572252*$w)
return [W($t,0,255),W($s,0,255),W($r,0,255)]}
$b=function(){var $p,$q,$r,$s,$t,$u,$v
$v=$g(arguments),$r=$v[0],$q=$v[1],$p=$v[2]
$r=$d($r)
$q=$d($q)
$p=$d($p)
$s=$h((0.4124564*$r+0.3575761*$q+0.1804375*$p)/E)
$t=$h((0.2126729*$r+0.7151522*$q+0.072175*$p)/F)
$u=$h((0.0193339*$r+0.119192*$q+0.9503041*$p)/G)
return [116*$t-16,500*($s-$t),200*($t-$u)]}
U=function(){var $p,$q,$r,$s
$s=$g(arguments),$r=$s[0],$p=$s[1],$q=$s[2]
$q=$q*Math.PI/180
return [$r,Math.cos($q)*$p,Math.sin($q)*$p]}
V=function($p,$q,$r){var $s,$t,$u,$v,$w,$x,$y
$x=U($p,$q,$r),$s=$x[0],$t=$x[1],$u=$x[2]
$y=S($s,$t,$u),$w=$y[0],$v=$y[1],$u=$y[2]
return [W($w,0,255),W($v,0,255),W($u,0,255)]}
T=function($p){if($p>0.206893034){return $p*$p*$p}
else{return ($p-4/29)/7.787037}}
$h=function($p){if($p>0.008856){return Math.pow($p,1/3)}
else{return 7.787037*$p+4/29}}
$i=function($p){return Math.round(255*($p<=0.00304?12.92*$p:1.055*Math.pow($p,1/2.4)-0.055))}
$d=function($p){if(($p/=255)<=0.04045){return $p/12.92}
else{return Math.pow(($p+0.055)/1.055,2.4)}}
R=function(){var $p,$q,$r,$s,$t,$u
$u=$g(arguments),$t=$u[0],$p=$u[1],$q=$u[2]
$r=Math.sqrt($p*$p+$q*$q)
$s=Math.atan2($q,$p)/Math.PI*180
return [$t,$r,$s]}
$c=function(){var $p,$q,$r,$s,$t,$u,$v
$u=$g(arguments),$t=$u[0],$r=$u[1],$q=$u[2]
$v=$b($t,$r,$q),$s=$v[0],$p=$v[1],$q=$v[2]
return R($s,$p,$q)}
$$=function(){var $p,$q,$r,$s,$t,$u,$v,$w,$x
$x=$g(arguments),$v=$x[0],$r=$x[1],$q=$x[2]
$p=Math.PI*2
$v/=255
$r/=255
$q/=255
$u=Math.min($v,$r,$q)
$t=($v+$r+$q)/3
$w=1-$u/$t
if($w===0){$s=0}
else{$s=(($v-$r)+($v-$q))/2
$s/=Math.sqrt(($v-$r)*($v-$r)+($v-$q)*($r-$q))
$s=Math.acos($s)
if($q>$r){$s=$p-$s}
$s/=$p}
return [$s*360,$w,$t]}
O=function($p,$q,$r){var $s,$t,$u,$v
$v=$g(arguments),$p=$v[0],$q=$v[1],$r=$v[2]
$p/=360
if($p<1/3){$s=(1-$q)/3
$u=(1+$q*L(D*$p)/L(C-D*$p))/3
$t=1-($s+$u)}
else if($p<2/3){$p-=1/3
$u=(1-$q)/3
$t=(1+$q*L(D*$p)/L(C-D*$p))/3
$s=1-($u+$t)}
else{$p-=2/3
$t=(1-$q)/3
$s=(1+$q*L(D*$p)/L(C-D*$p))/3
$u=1-($t+$s)}
$u=W($r*$u*3)
$t=W($r*$t*3)
$s=W($r*$s*3)
return [$u*255,$t*255,$s*255]}
J=function($p){var $q
for($q in $p)if($p.hasOwnProperty($q)){if($p[$q]<0){$p[$q]=0}
if($p[$q]>255){$p[$q]=255}}
return $p}
X=function($p,$q,$r){var $s
$s=$g(arguments),$p=$s[0],$q=$s[1],$r=$s[2]
$p=Y($p)
$q=Y($q)
$r=Y($r)
return 0.2126*$p+0.7152*$q+0.0722*$r}
Y=function($p){$p/=255
if($p<=0.03928){return $p/12.92}
else{return Math.pow(($p+0.055)/1.055,2.4)}}
I.Color=z
I.color=function($p,$q,$r,$s){return new z($p,$q,$r,$s)}
I.hsl=function($p,$q,$r){return new z($p,$q,$r,'hsl')}
I.hsv=function($p,$q,$r){return new z($p,$q,$r,'hsv')}
I.rgb=function($p,$q,$r){return new z($p,$q,$r,'rgb')}
I.hex=function($p){return new z($p)}
I.css=function($p){return new z($p)}
I.lab=function($p,$q,$r){return new z($p,$q,$r,'lab')}
I.lch=function($p,$q,$r){return new z($p,$q,$r,'lch')}
I.hsi=function($p,$q,$r){return new z($p,$q,$r,'hsi')}
I.interpolate=function($p,$q,$r,$s){if(($p==null)||($q==null)){return '#000'}
if($f($p)==='string'){$p=new z($p)}
if($f($q)==='string'){$q=new z($q)}
return $p.interpolate($r,$q,$s)}
I.contrast=function($p,$q){var $r,$s
if($f($p)==='string'){$p=new z($p)}
if($f($q)==='string'){$q=new z($q)}
$r=$p.luminance()
$s=$q.luminance()
if($r>$s){return ($r+0.05)/($s+0.05)}
else{return ($s+0.05)/($r+0.05)}}
$e=typeof w!=="undefined"&&w!==null?w:this
I=($k=$e.chroma)!=null?$k:$e.chroma={}
z=I.Color
A=(function(){function $p($q){var $r,$s,$t
if($q==null){$q={}}
$r=this
$r.range($q.colors,$q.positions)
$r._mode=($s=$q.mode)!=null?$s:'rgb'
$r._nacol=I.hex(($t=$q.nacol)!=null?$t:I.hex('#ccc'))
$r._spread=0
$r._fixed=!1
$r.domain([0,1])
$r}
$p.prototype.range=function($q,$r){var $s,$t,$u,$v,$w,$x,$y,$z
$u=this
if($q==null){$q=['#ddd','#222']}
if(($q!=null)&&$f($q)==='string'&&((($x=I.brewer)!=null?$x[$q]:void(0))!=null)){$q=I.brewer[$q].slice(0)}
for($s=$v=0,$y=$q.length-1;0<=$y?$v<=$y:$v>=$y;$s=0<=$y?++$v:--$v){$t=$q[$s]
if($f($t)==="string"){$q[$s]=new z($t)}}
$u._colors=$q
if($r!=null){$u._pos=$r}
else{$u._pos=[]
for($s=$w=0,$z=$q.length-1;0<=$z?$w<=$z:$w>=$z;$s=0<=$z?++$w:--$w){$u._pos.push($s/($q.length-1))}}
return $u}
$p.prototype.domain=function($q){var $r
if($q==null){$q=[]}
$r=this
$r._domain=$q
$r._min=$q[0]
$r._max=$q[$q.length-1]
if($q.length===2){$r._numClasses=0}
else{$r._numClasses=$q.length-1}
return $r}
$p.prototype.get=function($q){var $r,$s,$t,$u
$u=this
if(isNaN($q)){return $u._nacol}
if($u._domain.length>2){$r=$u.getClass($q)
$s=$r/($u._numClasses-1)}
else{$s=$t=($q-$u._min)/($u._max-$u._min)
$s=Math.min(1,Math.max(0,$s))}
return $u.fColor($s)}
$p.prototype.fColor=function($q){var $r,$s,$t,$u,$v,$w,$x
$u=this
$s=$u._colors
for($t=$w=0,$x=$u._pos.length-1;0<=$x?$w<=$x:$w>=$x;$t=0<=$x?++$w:--$w){$v=$u._pos[$t]
if($q<=$v){$r=$s[$t]
break}
if($q>=$v&&$t===$u._pos.length-1){$r=$s[$t]
break}
if($q>$v&&$q<$u._pos[$t+1]){$q=($q-$v)/($u._pos[$t+1]-$v)
$r=I.interpolate($s[$t],$s[$t+1],$q,$u._mode)
break}}
return $r}
$p.prototype.classifyValue=function($q){var $r,$s,$t,$u,$v,$w,$x
$u=this
$r=$u._domain
$x=$q
if($r.length>2){$w=$r.length-1
$s=$u.getClass($q)
$v=$r[0]+($r[1]-$r[0])*(0+$u._spread*0.5)
$t=$r[$w-1]+($r[$w]-$r[$w-1])*(1-$u._spread*0.5)
$x=$u._min+(($r[$s]+($r[$s+1]-$r[$s])*0.5-$v)/($t-$v))*($u._max-$u._min)}
return $x}
$p.prototype.getClass=function($q){var $r,$s,$t,$u
$u=this
$r=$u._domain
if($r!=null){$t=$r.length-1
$s=0
while($s<$t&&$q>=$r[$s]){$s++}
return $s-1}
return 0}
$p.prototype.validValue=function($q){return !isNaN($q)}
return $p})()
I.ColorScale=A
I.scale=function($p,$q){var $r,$s,$t
$r=new I.ColorScale()
$r.range($p,$q)
$t=!1
$s=function($u){var $v
$v=$r.get($u)
if($t&&$v[$t]){return $v[$t]()}
else{return $v}}
$s.domain=function($u,$v,$w,$x){var $y
if($w==null){$w='e'}
if(!arguments.length){return $r._domain}
if($v!=null){$y=I.analyze($u,$x)
if($v===0){$u=[$y.min,$y.max]}
else{$u=I.limits($y,$w,$v)}}
$r.domain($u)
return $s}
$s.mode=function($u){if(!arguments.length){return $r._mode}
$r._mode=$u
return $s}
$s.range=function($u,$v){$r.range($u,$v)
return $s}
$s.out=function($u){$t=$u
return $s}
$s.getColor=function($u){return $s($u)}
$s.spread=function($u){if(!arguments.length){return $r._spread}
$r._spread=$u
return $s}
return $s}
if(($l=I.scales)==null){I.scales={}}
I.scales.cool=function(){return I.scale([I.hsl(180,1,0.9),I.hsl(250,0.7,0.4)])}
I.scales.hot=function(){return I.scale(['#000','#f00','#ff0','#fff'],[0,0.25,0.75,1]).mode('rgb')}
I.analyze=function($p,$q,$r){var $s,$t,$u,$v,$w,$x,$y
$u={min:Number.MAX_VALUE,max:Number.MAX_VALUE*-1,sum:0,values:[],count:0}
if($r==null){$r=function(){return !0}}
$s=function($z){if(($z!=null)&&!isNaN($z)){$u.values.push($z)
$u.sum+=$z
if($z<$u.min){$u.min=$z}
if($z>$u.max){$u.max=$z}
$u.count+=1}}
$w=function($z,$A){if($r($z,$A)){if(($q!=null)&&$f($q)==='function'){return $s($q($z))}
else if(($q!=null)&&$f($q)==='string'||$f($q)==='number'){return $s($z[$q])}
else{return $s($z)}}}
if($f($p)==='array'){for($x=0,$y=$p.length;$x<$y;$x++){$v=$p[$x]
$w($v)}}
else{for($t in $p)if($p.hasOwnProperty($t)){$v=$p[$t]
$w($v,$t)}}
$u.domain=[$u.min,$u.max]
$u.limits=function($z,$A){return I.limits($u,$z,$A)}
return $u}
I.limits=function($p,$q,$r){var $s,$t,$u,$v,$w,$x,$y,$z,$A,$B,$C,$D,$E,$F,$G,$H,$I,$J,$K,$L,$M,$N,$O,$P,$Q,$R,$S,$T,$U,$V,$W,$X,$Y,$Z,$0,$1,$2,$3,$4,$5,$6,$7,$8,$9,_$,__,_a,_b,_c,_d,_e,_f,_g,_h,_i,_j
if($q==null){$q='equal'}
if($r==null){$r=7}
if($p.values==null){$p=I.analyze($p)}
$E=$p.min
$C=$p.max
$O=$p.sum
$R=$p.values.sort(function(_k,_l){return _k-_l})
$B=[]
if($q.substr(0,1)==='c'){$B.push($E)
$B.push($C)}
if($q.substr(0,1)==='e'){$B.push($E)
for($y=$S=1,_$=$r-1;1<=_$?$S<=_$:$S>=_$;$y=1<=_$?++$S:--$S){$B.push($E+($y/$r)*($C-$E))}
$B.push($C)}
else if($q.substr(0,1)==='l'){if($E<=0){throw 'Logarithmic scales are only possible for values > 0'}
$F=Math.LOG10E*Math.log($E)
$D=Math.LOG10E*Math.log($C)
$B.push($E)
for($y=$T=1,__=$r-1;1<=__?$T<=__:$T>=__;$y=1<=__?++$T:--$T){$B.push(Math.pow(10,$F+($y/$r)*($D-$F)))}
$B.push($C)}
else if($q.substr(0,1)==='q'){$B.push($E)
for($y=$U=1,_a=$r-1;1<=_a?$U<=_a:$U>=_a;$y=1<=_a?++$U:--$U){$K=$R.length*$y/$r
$L=Math.floor($K)
if($L===$K){$B.push($R[$L])}
else{$M=$K-$L
$B.push($R[$L]*$M+$R[$L+1]*(1-$M))}}
$B.push($C)}
else if($q.substr(0,1)==='k'){$H=$R.length
$s=new Array($H)
$w=new Array($r)
$N=!0
$I=0
$u=null
$u=[]
$u.push($E)
for($y=$V=1,_b=$r-1;1<=_b?$V<=_b:$V>=_b;$y=1<=_b?++$V:--$V){$u.push($E+($y/$r)*($C-$E))}
$u.push($C)
while($N){for($z=$W=0,_c=$r-1;0<=_c?$W<=_c:$W>=_c;$z=0<=_c?++$W:--$W){$w[$z]=0}
for($y=$X=0,_d=$H-1;0<=_d?$X<=_d:$X>=_d;$y=0<=_d?++$X:--$X){$Q=$R[$y]
$G=Number.MAX_VALUE
for($z=$Y=0,_e=$r-1;0<=_e?$Y<=_e:$Y>=_e;$z=0<=_e?++$Y:--$Y){$x=Math.abs($u[$z]-$Q)
if($x<$G){$G=$x
$t=$z}}
$w[$t]++
$s[$y]=$t}
$J=new Array($r)
for($z=$Z=0,$2=$r-1;0<=$2?$Z<=$2:$Z>=$2;$z=0<=$2?++$Z:--$Z){$J[$z]=null}
for($y=$0=0,$3=$H-1;0<=$3?$0<=$3:$0>=$3;$y=0<=$3?++$0:--$0){$v=$s[$y]
if($J[$v]===null){$J[$v]=$R[$y]}
else{$J[$v]+=$R[$y]}}
for($z=$1=0,$4=$r-1;0<=$4?$1<=$4:$1>=$4;$z=0<=$4?++$1:--$1){$J[$z]*=1/$w[$z]}
$N=!1
for($z=_f=0,$5=$r-1;0<=$5?_f<=$5:_f>=$5;$z=0<=$5?++_f:--_f){if($J[$z]!==$u[$y]){$N=!0
break}}
$u=$J
$I++
if($I>200){$N=!1}}
$A={}
for($z=_g=0,$6=$r-1;0<=$6?_g<=$6:_g>=$6;$z=0<=$6?++_g:--_g){$A[$z]=[]}
for($y=_h=0,$7=$H-1;0<=$7?_h<=$7:_h>=$7;$y=0<=$7?++_h:--_h){$v=$s[$y]
$A[$v].push($R[$y])}
$P=[]
for($z=_i=0,$8=$r-1;0<=$8?_i<=$8:_i>=$8;$z=0<=$8?++_i:--_i){$P.push($A[$z][0])
$P.push($A[$z][$A[$z].length-1])}
$P=$P.sort(function(_k,_l){return _k-_l})
$B.push($P[0])
for($y=_j=1,$9=$P.length-1;_j<=$9;$y=_j+=2){if(!isNaN($P[$y])){$B.push($P[$y])}}}
return $B}
$e=typeof w!=="undefined"&&w!==null?w:this
$f=(function(){var $p,$q,$r,$s,$t
$p={}
$t="Boolean Number String Function Array Date RegExp Undefined Null".split(" ")
for($r=0,$s=$t.length;$r<$s;$r++){$q=$t[$r]
$p["[object "+$q+"]"]=$q.toLowerCase()}
return function($u){var $v
$v=Object.prototype.toString.call($u)
return $p[$v]||"object"}})()
if(($m=$e.type)==null){$e.type=$f}
Array.max=function($p){return Math.max.apply(Math,$p)}
Array.min=function($p){return Math.min.apply(Math,$p)}
W=function($p,$q,$r){if($q==null){$q=0}
if($r==null){$r=1}
if($p<$q){$p=$q}
if($p>$r){$p=$r}
return $p}
$g=function($p){if($p.length===3){return $p}
else{return $p[0]}}
D=Math.PI*2
C=Math.PI/3
L=Math.cos
$e=typeof w!=="undefined"&&w!==null?w:this
I=($n=$e.chroma)!=null?$n:$e.chroma={}
I.brewer=H={OrRd:['#fff7ec','#fee8c8','#fdd49e','#fdbb84','#fc8d59','#ef6548','#d7301f','#b30000','#7f0000'],PuBu:['#fff7fb','#ece7f2','#d0d1e6','#a6bddb','#74a9cf','#3690c0','#0570b0','#045a8d','#023858'],BuPu:['#f7fcfd','#e0ecf4','#bfd3e6','#9ebcda','#8c96c6','#8c6bb1','#88419d','#810f7c','#4d004b'],Oranges:['#fff5eb','#fee6ce','#fdd0a2','#fdae6b','#fd8d3c','#f16913','#d94801','#a63603','#7f2704'],BuGn:['#f7fcfd','#e5f5f9','#ccece6','#99d8c9','#66c2a4','#41ae76','#238b45','#006d2c','#00441b'],YlOrBr:['#ffffe5','#fff7bc','#fee391','#fec44f','#fe9929','#ec7014','#cc4c02','#993404','#662506'],YlGn:['#ffffe5','#f7fcb9','#d9f0a3','#addd8e','#78c679','#41ab5d','#238443','#006837','#004529'],Reds:['#fff5f0','#fee0d2','#fcbba1','#fc9272','#fb6a4a','#ef3b2c','#cb181d','#a50f15','#67000d'],RdPu:['#fff7f3','#fde0dd','#fcc5c0','#fa9fb5','#f768a1','#dd3497','#ae017e','#7a0177','#49006a'],Greens:['#f7fcf5','#e5f5e0','#c7e9c0','#a1d99b','#74c476','#41ab5d','#238b45','#006d2c','#00441b'],YlGnBu:['#ffffd9','#edf8b1','#c7e9b4','#7fcdbb','#41b6c4','#1d91c0','#225ea8','#253494','#081d58'],Purples:['#fcfbfd','#efedf5','#dadaeb','#bcbddc','#9e9ac8','#807dba','#6a51a3','#54278f','#3f007d'],GnBu:['#f7fcf0','#e0f3db','#ccebc5','#a8ddb5','#7bccc4','#4eb3d3','#2b8cbe','#0868ac','#084081'],Greys:['#ffffff','#f0f0f0','#d9d9d9','#bdbdbd','#969696','#737373','#525252','#252525','#000000'],YlOrRd:['#ffffcc','#ffeda0','#fed976','#feb24c','#fd8d3c','#fc4e2a','#e31a1c','#bd0026','#800026'],PuRd:['#f7f4f9','#e7e1ef','#d4b9da','#c994c7','#df65b0','#e7298a','#ce1256','#980043','#67001f'],Blues:['#f7fbff','#deebf7','#c6dbef','#9ecae1','#6baed6','#4292c6','#2171b5','#08519c','#08306b'],PuBuGn:['#fff7fb','#ece2f0','#d0d1e6','#a6bddb','#67a9cf','#3690c0','#02818a','#016c59','#014636'],Spectral:['#9e0142','#d53e4f','#f46d43','#fdae61','#fee08b','#ffffbf','#e6f598','#abdda4','#66c2a5','#3288bd','#5e4fa2'],RdYlGn:['#a50026','#d73027','#f46d43','#fdae61','#fee08b','#ffffbf','#d9ef8b','#a6d96a','#66bd63','#1a9850','#006837'],RdBu:['#67001f','#b2182b','#d6604d','#f4a582','#fddbc7','#f7f7f7','#d1e5f0','#92c5de','#4393c3','#2166ac','#053061'],PiYG:['#8e0152','#c51b7d','#de77ae','#f1b6da','#fde0ef','#f7f7f7','#e6f5d0','#b8e186','#7fbc41','#4d9221','#276419'],PRGn:['#40004b','#762a83','#9970ab','#c2a5cf','#e7d4e8','#f7f7f7','#d9f0d3','#a6dba0','#5aae61','#1b7837','#00441b'],RdYlBu:['#a50026','#d73027','#f46d43','#fdae61','#fee090','#ffffbf','#e0f3f8','#abd9e9','#74add1','#4575b4','#313695'],BrBG:['#543005','#8c510a','#bf812d','#dfc27d','#f6e8c3','#f5f5f5','#c7eae5','#80cdc1','#35978f','#01665e','#003c30'],RdGy:['#67001f','#b2182b','#d6604d','#f4a582','#fddbc7','#ffffff','#e0e0e0','#bababa','#878787','#4d4d4d','#1a1a1a'],PuOr:['#7f3b08','#b35806','#e08214','#fdb863','#fee0b6','#f7f7f7','#d8daeb','#b2abd2','#8073ac','#542788','#2d004b'],Set2:['#66c2a5','#fc8d62','#8da0cb','#e78ac3','#a6d854','#ffd92f','#e5c494','#b3b3b3'],Accent:['#7fc97f','#beaed4','#fdc086','#ffff99','#386cb0','#f0027f','#bf5b17','#666666'],Set1:['#e41a1c','#377eb8','#4daf4a','#984ea3','#ff7f00','#ffff33','#a65628','#f781bf','#999999'],Set3:['#8dd3c7','#ffffb3','#bebada','#fb8072','#80b1d3','#fdb462','#b3de69','#fccde5','#d9d9d9','#bc80bd','#ccebc5','#ffed6f'],Dark2:['#1b9e77','#d95f02','#7570b3','#e7298a','#66a61e','#e6ab02','#a6761d','#666666'],Paired:['#a6cee3','#1f78b4','#b2df8a','#33a02c','#fb9a99','#e31a1c','#fdbf6f','#ff7f00','#cab2d6','#6a3d9a','#ffff99','#b15928'],Pastel2:['#b3e2cd','#fdcdac','#cbd5e8','#f4cae4','#e6f5c9','#fff2ae','#f1e2cc','#cccccc'],Pastel1:['#fbb4ae','#b3cde3','#ccebc5','#decbe4','#fed9a6','#ffffcc','#e5d8bd','#fddaec','#f2f2f2']}
$e=typeof w!=="undefined"&&w!==null?w:this
I=($o=$e.chroma)!=null?$o:$e.chroma={}
I.colors=K={indigo:"#4b0082",gold:"#ffd700",hotpink:"#ff69b4",firebrick:"#b22222",indianred:"#cd5c5c",yellow:"#ffff00",mistyrose:"#ffe4e1",darkolivegreen:"#556b2f",olive:"#808000",darkseagreen:"#8fbc8f",pink:"#ffc0cb",tomato:"#ff6347",lightcoral:"#f08080",orangered:"#ff4500",navajowhite:"#ffdead",lime:"#00ff00",palegreen:"#98fb98",darkslategrey:"#2f4f4f",greenyellow:"#adff2f",burlywood:"#deb887",seashell:"#fff5ee",mediumspringgreen:"#00fa9a",fuchsia:"#ff00ff",papayawhip:"#ffefd5",blanchedalmond:"#ffebcd",chartreuse:"#7fff00",dimgray:"#696969",black:"#000000",peachpuff:"#ffdab9",springgreen:"#00ff7f",aquamarine:"#7fffd4",white:"#ffffff",orange:"#ffa500",lightsalmon:"#ffa07a",darkslategray:"#2f4f4f",brown:"#a52a2a",ivory:"#fffff0",dodgerblue:"#1e90ff",peru:"#cd853f",lawngreen:"#7cfc00",chocolate:"#d2691e",crimson:"#dc143c",forestgreen:"#228b22",darkgrey:"#a9a9a9",lightseagreen:"#20b2aa",cyan:"#00ffff",mintcream:"#f5fffa",silver:"#c0c0c0",antiquewhite:"#faebd7",mediumorchid:"#ba55d3",skyblue:"#87ceeb",gray:"#808080",darkturquoise:"#00ced1",goldenrod:"#daa520",darkgreen:"#006400",floralwhite:"#fffaf0",darkviolet:"#9400d3",darkgray:"#a9a9a9",moccasin:"#ffe4b5",saddlebrown:"#8b4513",grey:"#808080",darkslateblue:"#483d8b",lightskyblue:"#87cefa",lightpink:"#ffb6c1",mediumvioletred:"#c71585",slategrey:"#708090",red:"#ff0000",deeppink:"#ff1493",limegreen:"#32cd32",darkmagenta:"#8b008b",palegoldenrod:"#eee8aa",plum:"#dda0dd",turquoise:"#40e0d0",lightgrey:"#d3d3d3",lightgoldenrodyellow:"#fafad2",darkgoldenrod:"#b8860b",lavender:"#e6e6fa",maroon:"#800000",yellowgreen:"#9acd32",sandybrown:"#f4a460",thistle:"#d8bfd8",violet:"#ee82ee",navy:"#000080",magenta:"#ff00ff",dimgrey:"#696969",tan:"#d2b48c",rosybrown:"#bc8f8f",olivedrab:"#6b8e23",blue:"#0000ff",lightblue:"#add8e6",ghostwhite:"#f8f8ff",honeydew:"#f0fff0",cornflowerblue:"#6495ed",slateblue:"#6a5acd",linen:"#faf0e6",darkblue:"#00008b",powderblue:"#b0e0e6",seagreen:"#2e8b57",darkkhaki:"#bdb76b",snow:"#fffafa",sienna:"#a0522d",mediumblue:"#0000cd",royalblue:"#4169e1",lightcyan:"#e0ffff",green:"#008000",mediumpurple:"#9370db",midnightblue:"#191970",cornsilk:"#fff8dc",paleturquoise:"#afeeee",bisque:"#ffe4c4",slategray:"#708090",darkcyan:"#008b8b",khaki:"#f0e68c",wheat:"#f5deb3",teal:"#008080",darkorchid:"#9932cc",deepskyblue:"#00bfff",salmon:"#fa8072",darkred:"#8b0000",steelblue:"#4682b4",palevioletred:"#db7093",lightslategray:"#778899",aliceblue:"#f0f8ff",lightslategrey:"#778899",lightgreen:"#90ee90",orchid:"#da70d6",gainsboro:"#dcdcdc",mediumseagreen:"#3cb371",lightgray:"#d3d3d3",mediumturquoise:"#48d1cc",lemonchiffon:"#fffacd",cadetblue:"#5f9ea0",lightyellow:"#ffffe0",lavenderblush:"#fff0f5",coral:"#ff7f50",purple:"#800080",aqua:"#00ffff",whitesmoke:"#f5f5f5",mediumslateblue:"#7b68ee",darkorange:"#ff8c00",mediumaquamarine:"#66cdaa",darksalmon:"#e9967a",beige:"#f5f5dc",blueviolet:"#8a2be2",azure:"#f0ffff",lightsteelblue:"#b0c4de",oldlace:"#fdf5e6"}}).call(this)
var y=w.chroma
y.Color.prototype.lighten=function(z){return this.brighten(z)}
if((typeof y==='function')&&y.prototype&&!y.__jx__no_fqname){y.prototype.__jx__fqname_chain=[(y.prototype.__jx__fqname_chain||"")," ","meshim_common_Chroma"].join('')
y.prototype.__jx__fqname="meshim_common_Chroma"}
return y})()
b.__$$__meshim_common_SvgCanvas=(function(){function w(x,y,z,A,B){y=y||v.generateID()
var C=x.ownerDocument,D
D=C.createElementNS("http://www.w3.org/2000/svg",'svg')
D.vectorType='svg'
v.extend(D)
q.extend(D)
v.set(y,D)
var E=!1
D.appendToParent=function(F){if(!v.hasParentNode(D))v.appendChild(x,D)
if(F&&!E){if(x.appendToParent)x.appendToParent(!0)
E=!0}}
D.setClass=function(F){D.setAttribute('class',F)
return D}
D.addClass=function(F){D.setAttribute('class',D.getAttribute('class')+' '+F)
return D}
D.removeClass=function(F){var G=D.getAttribute('class'),H=new RegExp('\\b'+F+'\\b','g')
G.replace(H,'')
D.setAttribute('class',G)
return D}
D.setViewBox=function(F){D.setAttribute('viewBox',F)
return D}
D.setStyle(z)
D.setAttributes(B)
v.addChildren(D,A)
D.appendToParent()
return D}
if((typeof w==='function')&&w.prototype&&!w.__jx__no_fqname){w.prototype.__jx__fqname_chain=[(w.prototype.__jx__fqname_chain||"")," ","meshim_common_SvgCanvas"].join('')
w.prototype.__jx__fqname="meshim_common_SvgCanvas"}
return w})()
b.__$$__meshim_widget_themes_Overrides=(function(){var w={popout:{name$string:'simple'},mobile:{name$string:'simple',chat_button:{display_status$bool:!1}}}
if((typeof w==='function')&&w.prototype&&!w.__jx__no_fqname){w.prototype.__jx__fqname_chain=[(w.prototype.__jx__fqname_chain||"")," ","meshim_widget_themes_Overrides"].join('')
w.prototype.__jx__fqname="meshim_widget_themes_Overrides"}
return w})()
b.__$$__meshim_common_ArrayUtils=(function(){var w={shuffle:x}
function x(y){var z=y.length,A,B
while(z>1){A=Math.floor(z--*Math.random())
B=y[A]
y[A]=y[z]
y[z]=B}
return y}
if((typeof w==='function')&&w.prototype&&!w.__jx__no_fqname){w.prototype.__jx__fqname_chain=[(w.prototype.__jx__fqname_chain||"")," ","meshim_common_ArrayUtils"].join('')
w.prototype.__jx__fqname="meshim_common_ArrayUtils"}
return w})()
b.__$$__jx_io_Form=(function(){var w=(p.isIE6||p.isIE7||p.isIE8)?A:z
w.get=y
w.post=x
function x(B,C,D){if(h(C))D=C,C=null
C||(C={})
w('POST',B,C,D)}
function y(B,C,D){if(h(C))D=C,C=null
C||(C={})
w('GET',B,C,D)}
function z(B,C,D,E){var F='form'+~~(100000*Math.random()),G,H,I,J=D.timeout||10000,K=document.createElement('form'),L=document.createElement('iframe')
K.method=B
K.action=C
L.style.display='none'
if(D.params){for(H in D.params)if(D.params.hasOwnProperty(H)){I=document.createElement('input')
I.name=H
I.value=D.params[H]
K.appendChild(I)}}
document.body.appendChild(K)
document.body.appendChild(L)
K.target=L.contentWindow.name=F
l(function(){K.submit()
document.body.removeChild(K)
I=K=null
L.onload=function(){L.onload=null
L.contentWindow.location.href='about:blank'
L.onload=function(){L.onload=null
clearTimeout(G)
E&&E(null,L.contentWindow.name)
document.body.removeChild(L)
L=null}}})
G=setTimeout(function(){E&&E('timeout')
document.body.removeChild(L)
L=null},J)}
function A(B,C,D,E){var F=document
if(window.ActiveXObject)try {F=new window.ActiveXObject('htmlfile')
F.open(),F.close()}catch(P){;}
var G='form'+~~(100000*Math.random()),H,I,J,K,L=D.timeout||10000,M=F.createElement('<form target="'+G+'"/>'),N=F.createElement('<iframe name="'+G+'"/>')
M.method=B
M.action=C
N.style.display='none'
if(D.params){for(J in D.params)if(D.params.hasOwnProperty(J)){K=F.createElement('<input name="'+J+'"/>')
K.value=D.params[J]
M.appendChild(K)}}
F.body.appendChild(M)
F.body.appendChild(N)
M.submit()
F.body.removeChild(M)
K=M=null
I=setTimeout(O,100)
function O(){if(!N.contentWindow.frames.length){I=setTimeout(O,100)
return}
N.contentWindow.location.href='about:blank'
clearTimeout(H)
setTimeout(function(){E&&E(null,N.contentWindow.name)
F.body.removeChild(N)
F=N=null},0)}
H=setTimeout(function(){E&&E('timeout')
clearTimeout(I)
F.body.removeChild(N)
F=N=null},L)}
if((typeof w==='function')&&w.prototype&&!w.__jx__no_fqname){w.prototype.__jx__fqname_chain=[(w.prototype.__jx__fqname_chain||"")," ","jx_io_Form"].join('')
w.prototype.__jx__fqname="jx_io_Form"}
return w})()
b.__$$__jx_data_JSON=(function(){var w=(!k(window)&&window.JSON)||{parse:L,stringify:B}
w={parse:L,stringify:B}
var x=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,y={'\b':'\\b','\t':'\\t','\n':'\\n','\f':'\\f','\r':'\\r','\\':'\\\\','"':'\\"'}
function z(M){return '"'+M.replace(x,A)+'"'}
function A(M){return y[M]||'\\u'+('0000'+M.charCodeAt(0).toString(16)).slice(-4)}
function B(M){switch(typeof M){case 'string':return z(M)
case 'number':return isFinite(M)?M.toString():'null'
case 'boolean':return String(M)
case 'object':if(!M)return 'null'
var N=[],O,P
if(g(M)){for(O=0,P=M.length;O<P;O++)N[O]=B(M[O])||'null'
return '['+N.join(',')+']'}
var Q,R=[],S
for(Q in M)if(M.hasOwnProperty(Q))R.push(Q)
R.sort()
for(O=0,P=R.length;O<P;O++){Q=R[O]
S=B(M[Q])
if(S)N.push(z(Q)+':'+S)}
if(N.length)return '{'+N.join(',')+'}'}}
var C='(?:-?\\b(?:0|[1-9][0-9]*)(?:\\.[0-9]+)?(?:[eE][+-]?[0-9]+)?\\b)',D='(?:[^\\0-\\x08\\x0a-\\x1f\"\\\\]'+'|\\\\(?:[\"/\\\\bfnrt]|u[0-9A-Fa-f]{4}))',E='(?:\"'+D+'*\")',F=new RegExp('(?:false|true|null|[\\{\\}\\[\\]]'+'|'+C+'|'+E+')','g'),G=new RegExp('\\\\(?:([^u])|u(.{4}))','g'),H={'"':'"','/':'/','\\':'\\','b':'\b','f':'\f','n':'\n','r':'\r','t':'\t'},I=new String(''),J='\\'
function K(M,N,O){return N?H[N]:String.fromCharCode(parseInt(O,16))}
function L(M){var N=M.match(F),O=N.length,P=N[0],Q,R,S,T,U
if(P=='{')Q={},U=1
else if(P=='[')Q=[],U=1
else Q=[],U=0,R=!0
var V=[Q]
for(O=N.length;U<O;++U){P=N[U]
switch(P.charCodeAt(0)){case 91:T=V[0]
V.unshift(T[S||T.length]=[])
S=void(0)
break
case 93:V.shift()
break
case 123:T=V[0]
V.unshift(T[S||T.length]={})
S=void(0)
break
case 125:V.shift()
break
case 102:T=V[0]
T[S||T.length]=!1
S=void(0)
break
case 110:T=V[0]
T[S||T.length]=null
S=void(0)
break
case 116:T=V[0]
T[S||T.length]=!0
S=void(0)
break
case 34:P=P.substring(1,P.length-1)
if(P.indexOf(J)!==-1)P=P.replace(G,K)
T=V[0]
if(S==void(0)){if(T instanceof Array)S=T.length
else{S=P||I
break}}
T[S]=P
S=void(0)
break
default:T=V[0]
T[S||T.length]=+(P)
S=void(0)
break}}
if(R){if(V.length==1)return Q[0]}
else if(!V.length)return Q
throw 'error'}
if((typeof w==='function')&&w.prototype&&!w.__jx__no_fqname){w.prototype.__jx__fqname_chain=[(w.prototype.__jx__fqname_chain||"")," ","jx_data_JSON"].join('')
w.prototype.__jx__fqname="jx_data_JSON"}
return w})()
b.__$$__meshim_common_Color=(function(){var w=['red','green','blue']
function x(F){if(!(this instanceof x))return new x(F)
var G=''
if(typeof F=='object')G='object'
else if(/#/.test(F))G='hex'
else if(/hsl\(.+\)/.test(F))G='hsl'
else if(/hsv\(.+\)/.test(F))G='hsv'
else if(/rgba\(.+\)/.test(F))G='rgba'
switch(G){case 'object':z.call(this,F)
break
case 'hex':y.call(this,F)
break
case 'hsl':A.call(this,F)
break
case 'hsv':D.call(this,F)
break
case 'rgba':C.call(this,F)
break}
if(typeof this.alpha!=='number')this.alpha=1}
x.prototype.lighten=function(F){var G=this.toHSL()
G.l=G.l+(1-G.l)*F
return new x(G)}
x.prototype.darken=function(F){var G=this.toHSL()
G.l=G.l-G.l*F
return new x(G)}
x.prototype.blend=function(F,G){if(!(F instanceof x))F=new x(F)
var H={}
for(var I=0;I<3;I++){var J=this[w[I]],K=F[w[I]]
H[w[I]]=Math.round(J+(K-J)*G)}
return new x(H)}
x.prototype.complement=function(){var F=this.red,G=this.blue,H=this.green,I=Math.max(F,G,H),J=Math.min(F,G,H),K={}
K.red=I+J-F
K.green=I+J-H
K.blue=I+J-G
return new x(K)}
x.prototype.toStrRGB=x.prototype.toRGB=function(){var F=[]
for(var G=0;G<3;G++){var H=this[w[G]].toString(16)
F[G]=(H.length<2)?'0'+H:H}
return '#'+F.join('')}
x.prototype.toStrRGBA=function(){return 'rgba('+[this.red,this.green,this.blue,this.alpha].join(',')+')'}
x.prototype.toHSL=function(){var F=this.red/255,G=this.green/255,H=this.blue/255,I=Math.max(F,G,H),J=Math.min(F,G,H),K=I-J,L,M,N,O
if(K===0)O=0
else if(I==F)O=((G-H)/K)%6
else if(I==G)O=(H-F)/K+2
else if(I==H)O=(F-G)/K+4
L=60*O
L=(L<0)?360+L%360:L%360
N=0.5*(I+J)
M=(K===0)?0:K/(1-Math.abs(2*N-1))
return {h:L,s:M,l:N}}
x.prototype.toHSV=function(){var F=this.red/255,G=this.green/255,H=this.blue/255,I=Math.max(F,G,H),J=Math.min(F,G,H),K=I-J,L,M,N,O
if(K===0)O=0
else if(I==F)O=((G-H)/K)%6
else if(I==G)O=(H-F)/K+2
else if(I==H)O=(F-G)/K+4
L=60*O
L=(L<0)?360+L%360:L%360
N=I
M=(K===0)?0:K/N
return {h:L,s:M,v:N}}
x.prototype.toArray=function(){return [this.red,this.green,this.blue]}
x.prototype.clone=function(){return new x(this)}
x.prototype.validate=function(){for(var F=0;F<3;F++){var G=this[w[F]]
if(!(typeof G=='number'&&G>=0&&G<=255))return !1}
if(!(typeof this.alpha=='number'&&this.alpha>=0&&this.alpha<=1))return !1
return !0}
function y(F){F=F.replace(/#/g,'').replace(/\s+/g,' ').replace(/^\s|\s$/g,'')
if(/^\w{3}/.test(F))F=F.replace(/^(\w)(\w)(\w)$/,'$1$1$2$2$3$3')
this.red=parseInt(F.substr(0,2),16)
this.green=parseInt(F.substr(2,2),16)
this.blue=parseInt(F.substr(4,2),16)}
function z(F){if('red' in F&&'green' in F&&'blue' in F){this.red=F.red
this.green=F.green
this.blue=F.blue
this.alpha=F.alpha}
else if('h' in F&&'s' in F&&'l' in F){B.call(this,F)}
else if('h' in F&&'s' in F&&'v' in F){E.call(this,F)}}
function A(F){F=F.replace(/[A-Za-z]+|\(|\)/g,'').replace(/,/g,' ').replace(/\s+/g,' ').replace(/^\s|\s$/g,'')
var G=F.split(' '),H={h:(parseFloat(G[0])<0)?(360+parseFloat(G[0])%360):parseFloat(G[0])%360,s:(G[1].indexOf('%')<0)?parseFloat(G[1]):parseInt(G[1],10)/100,l:(G[2].indexOf('%')<0)?parseFloat(G[2]):parseInt(G[2],10)/100}
B.call(this,H)}
function B(F){var G,H=F.h,I=F.s,J=F.l,K=(1-Math.abs(2*J-1))*I,L=H/60,M=K*(1-Math.abs(L%2-1)),N=J-0.5*K
switch(Math.floor(L)){case 0:G=[K,M,0]
break
case 1:G=[M,K,0]
break
case 2:G=[0,K,M]
break
case 3:G=[0,M,K]
break
case 4:G=[M,0,K]
break
case 5:G=[K,0,M]
break}
this.red=Math.round(255*(G[0]+N))
this.green=Math.round(255*(G[1]+N))
this.blue=Math.round(255*(G[2]+N))}
function C(F){F=F.replace(/[A-Za-z(,]+/g,' ').replace(/\s+/g,' ').replace(/^\s|\s$/g,'')
var G=F.split(' ')
this.red=parseInt(G[0],10)
this.green=parseInt(G[1],10)
this.blue=parseInt(G[2],10)
this.alpha=parseFloat(G[3])}
function D(F){F=F.replace(/[A-Za-z%]+|\(|\)/g,'').replace(/,/g,' ').replace(/\s+/g,' ').replace(/^\s|\s$/g,'')
var G=F.split(' '),H={h:(parseFloat(G[0])<0)?(360+parseFloat(G[0]))%360:parseFloat(G[0])%360,s:(G[1].indexOf('%')<0)?parseFloat(G[1]):parseInt(G[1],10)/100,v:(G[2].indexOf('%')<0)?parseFloat(G[2]):parseInt(G[2],10)/100}
E.call(this,H)}
function E(F){var G,H=F.h,I=F.s,J=F.v,K=J*I,L=H/60,M=K*(1-Math.abs(L%2-1)),N=J-K
switch(Math.floor(L)){case 0:G=[K,M,0]
break
case 1:G=[M,K,0]
break
case 2:G=[0,K,M]
break
case 3:G=[0,M,K]
break
case 4:G=[M,0,K]
break
case 5:G=[K,0,M]
break}
this.red=Math.round(255*(G[0]+N))
this.green=Math.round(255*(G[1]+N))
this.blue=Math.round(255*(G[2]+N))}
if((typeof x==='function')&&x.prototype&&!x.__jx__no_fqname){x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","meshim_common_Color"].join('')
x.prototype.__jx__fqname="meshim_common_Color"}
return x})()
b.__$$__jx_core_ObjectUtil=(function(){var w=function(B,C){return B===C||B&&C&&typeof B=='object'&&typeof C=='object'&&x(B,C)},x=function(B,C){var D
for(D in B)if(B.hasOwnProperty(D))if(!w(B[D],C[D]))return !1
for(D in C)if(C.hasOwnProperty(D))if(!w(B[D],C[D]))return !1
return !0},y=function(B){if(typeof (B)!='object'||!B)return B
var C={}
for(var D in B)if(B.hasOwnProperty(D))C[D]=y(B[D])
return C},z=function(B){if(B){for(var C=1,D=arguments.length;C<D;C++){var E=arguments[C]
if(!E)continue
for(var F in E)if(E.hasOwnProperty(F)){B[F]=E[F]}}}
return B},A={equal:w,clone:y,extend:z}
if((typeof A==='function')&&A.prototype&&!A.__jx__no_fqname){A.prototype.__jx__fqname_chain=[(A.prototype.__jx__fqname_chain||"")," ","jx_core_ObjectUtil"].join('')
A.prototype.__jx__fqname="jx_core_ObjectUtil"}
return A})()
b.__$$__meshim_common_Sanitize=(function(){var w={html:function(x){return x&&x.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/"/g,'&quot;')}}
if((typeof w==='function')&&w.prototype&&!w.__jx__no_fqname){w.prototype.__jx__fqname_chain=[(w.prototype.__jx__fqname_chain||"")," ","meshim_common_Sanitize"].join('')
w.prototype.__jx__fqname="meshim_common_Sanitize"}
return w})()
b.__$$__meshim_common_System=(function(){var w={info:{gitCommit:c.git_commit,buildNumber:c.build_number,userAgent:window.navigator.userAgent,platform:window.navigator.platform,language:p.language,browser:p.browser,version:p.version,javaVersion:p.hasJava,flashVersion:p.hasFlash,url:window.location.toString()}}
if((typeof w==='function')&&w.prototype&&!w.__jx__no_fqname){w.prototype.__jx__fqname_chain=[(w.prototype.__jx__fqname_chain||"")," ","meshim_common_System"].join('')
w.prototype.__jx__fqname="meshim_common_System"}
return w})()
b.__$$__jx_ui_HTMLEvent=(function(){function w(y){y.preventDefault=w.preventDefault
y.stopPropagation=w.stopPropagation
y.target=y.srcElement}
w.preventDefault=function(){this.returnValue=!1}
w.stopPropagation=function(){this.cancelBubble=!0}
function x(){this.allCallbacks={}
this.nativeHandlers={}}
x.prototype.useCustomHandling=function(y){if(!this.dom.nodeType&&this.dom!=window&&this.dom!=document)return !0
if(this.tagName.toLowerCase()=='form'&&y=='submit')return !1
return !p.isCustomEvents&&(p.isFF&&p.isFF<9?!document.createEvent('event')[y.toUpperCase()]:typeof (this.dom['on'+y])=='undefined')}
x.prototype.addEventListener=function(y,z){if(!y&&typeof z!='function')throw 'bad arguments to on / addEventListener'
if(!(y in this.allCallbacks)){this.allCallbacks[y]=[]
if(!this.useCustomHandling(y))this.setupNativeEventListener(y)}
this.allCallbacks[y].push(z)
return this}
x.prototype.setupNativeEventListener=function(y){if(y in this.nativeHandlers)return
var z=this
this.nativeHandlers[y]=function(A){A&&(A.stopPropagation||w(A))
var B,C=z.allCallbacks[y],D=C.length,E=!0
C._active=!0
for(B=0;B<D;B++){try {if(!C[B])continue
if(C[B].call(z,(p.isCustomEvents&&(A instanceof window.CustomEvent))?A.detail:A)===!1)E=!1}catch(F){q.fire('error',F)}}
C._active=!1
if(C._dirty){for(B=0;B<D;B++){if(!C[B]){if(B==D-1)C.pop()
else C[B--]=C.pop()
D--}}
C._dirty=!1}
if(E===!1){if(A){A.preventDefault()
A.returnValue=!1}
return !1}}
if(this.dom.attachEvent)this.dom.attachEvent('on'+y,this.nativeHandlers[y])
else if(this.dom.addEventListener)this.dom.addEventListener(y,this.nativeHandlers[y],!1)}
x.prototype.teardownNativeEventListener=function(y){var z=this.nativeHandlers[y]
if(!z)return
if(this.dom.attachEvent)this.dom.detachEvent('on'+y,z)
else if(this.dom.addEventListener)this.dom.removeEventListener(y,z,!1)
delete this.nativeHandlers[y]
delete this.allCallbacks[y]}
x.prototype.removeEventListener=function(y,z){var A=this.allCallbacks[y]
if(!A)return
for(var B=0,C=A.length;B<C;B++)if(A[B]===z){if(A.length==1){if(this.nativeHandlers[y])this.teardownNativeEventListener(y)
else delete this.allCallbacks[y]}
else if(A._active)A[B]=null,A._dirty=!0
else if(B==C-1)A.pop()
else A[B]=A.pop()
break}
return this}
x.prototype.unextendEvents=function(){if(!this.allCallbacks||!this.nativeHandlers)return
for(var y in this.nativeHandlers)if(this.nativeHandlers.hasOwnProperty(y))this.teardownNativeEventListener(y)
this.allCallbacks=this.nativeHandlers=null}
x.prototype.fireCustomEvent=function(y,z){if(!p.isCustomEvents||this.useCustomHandling(y)){var A=this.allCallbacks[y],B=!0
if(A&&A.length){A._active=!0
var C,D,E
for(C=0,D=A.length;C<D;C++){try {E=A[C].call(this,z)
if(E===!1)B=!1}catch(F){q.fire('error',F)}}
A._active=!1
if(A._dirty){for(C=0;C<D;C++){if(!A[C]){if(C==D-1)A.pop()
else A[C--]=A.pop()
D--}}
A._dirty=!1}}
return B}
else{return this.dom.dispatchEvent(new window.CustomEvent(y,{bubbles:!1,cancelable:!0,detail:z}))}}
x.prototype.fire=x.prototype.fireCustomEvent
x.prototype.on=x.prototype.addEventListener
x.prototype.un=x.prototype.removeEventListener
x.__jx__no_fqname=!0
if((typeof x==='function')&&x.prototype&&!x.__jx__no_fqname){x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","jx_ui_HTMLEvent"].join('')
x.prototype.__jx__fqname="jx_ui_HTMLEvent"}
return x})()
b.__$$__jx_language_Detect=(function(){var w={guess:E},x=[],y={en:[/\b(up|me|submit|offers?|about|rights?|more|contact|all|downloads?|how|search|to|do|i[nst]?|your?|that|was|one?|are|with|[bw]e|have|this|f?or|had|by|[hn]ot?|[bo]ut|so|some|what|can|[tw]here|why|other|over|die|ten)\b/ig,4,/\b(inn|set|end|about|pro|the|of|from|and|a|as|at)\b/ig,6],cs:[/[\u00e1\u010d\u010f\u00e9\u011b\u00ed\u0148\u00f3\u0159\u0161\u0165\u00fa\u016f\u00fd\u017e]/gi,5,/\b(by|do|to|[aikosvz])\b/ig,3,/\b(na|za|se|je|\u017ee|ve|jako|jsem|pro|tak|po|u\u017e|jsou|byl)\b/ig,6],de:[/[\u00df]/g,10,/[\u00e4\u00f6\u00fc\u00c4\u00d6\u00dc]/g,7,/\b(de[mrs]|vo[nm]|zu[mr]?|da[s\u00df]?|eine[mnrs]?|a[lu]s|wir|[sw]ie|n[ao]ch|vor[ms]?|(\u00fcb|od|ab)er|und|im|mit|sich|auf|f\u00fcr|nicht|auch|es|bei|nur|bis|mehr|durch)\b/ig,6],es:[/[\u00f1]/g,10,/[\xE1\xE9\xED\xF3\xFA]/ig,6,/\b(que|nuestro|ingresar|inicio|qu[e\u00e9]|[dt]e|ser?|[ms]i|l?a|e[lns]|y|tu|los?|una?|por|con|para|est(\u00e1|ar))\b/ig,6],fr:[/[\u0153]/gi,15,/[\u00e0\u00e2\u00e7\u00e9\u00e8\u00ea\u00eb\u00ee\u00ef\u00f4\u00fb\u00f9\u00fc\u00ff]/ig,7,/\b(son)\b/ig,4,/\b(en)\b/ig,5,/\b([ado]u|aux?|[do]u|la|[cdls]es|es?t|une?|ne|qu[ei]|sur|dans|pa[rs]|il|sont|avec|voir)\b/ig,6],hr:[/[\u010d\u0107\u0111\u0161\u017e]/gi,10,/d\u017e|lj|nj/gi,3,/\b(ali|ja|je|mene|na|ne|od|ovo|se|sve|ti|u|za|znati)\b/ig,6],ms:[/\b(and)\b/ig,4,/\b((se)?(biji|buah|orang)|ada|anda|atau|boleh|bukan|dalam|dan|dari|di|ini|kami|ke|lagi|sila|tidak|tinggi|telah|untuk)\b/ig,6],da:[/[\u00c6\u00e6\u00d8\u00f8\u00c5\u00e5]/g,10,/\b(de)\b/ig,5,/\b(ind|l\u00e6s|nyheder|[vt]il|s?om|og|[mv]ed|kan|har|var|tager|af|d?et|de[tn]{2}e|skal|den|set|noget|nogle|mange|hadde|eller|efter|end|blive|er|sekund|viser|ud|(a|vi|sku)lle)\b/ig,6],nb:[/[\u00c6\u00e6\u00d8\u00f8\u00c5\u00e5]/g,10,/\b(de)\b/ig,5,/\b(passord|nyheter|inn|[vt]il|s?om|og|[mv]ed|kan|[htv]ar|av|d?et|de[tn]{2}e|skal|se(g|tt)|noen?|mange|hadde|e[lt]{2}er|enn|blir?|ble|andre|viser|ut|(a|vi|sku)lle)\b/ig,6],nl:[/\b(in|die)\b/ig,4,/\b(de|en)\b/ig,5,/\b(het|dat|van|ik|te|een|hij|niet|zijn)\b/ig,6],pt:[/[\u00e1\u00e2\u00e3\u00e0\u00e7\u00e9\u00ea\u00ed\u00f3\u00f4\u00f5\u00fa]/ig,7,/\b(gr\u00e1fico|ao|como|das?|de|dos|ele|em?|mai?s|na|n\u00e3o|os?|para|por|que|se|uma?)\b/ig,6],sk:[/\u00e1\u00e4\u010d\u010f\u00e9\u00ed\u013e\u013a\u0148\u00f3\u00f4\u0155\u0161\u0165\u00fa\u00fd\u017e/ig,10,/dz|d\u017e/ig,5,/\b(ten|to|do|so)\b/ig,4,/\b(ja|na|za|c\u030co|t\u00e1|po|vo|zo|n\u00e1[s\u030cs])\b/ig,6],tr:[/[\u00c7\u011e\u0130\u00d6\u015e\u00dc\u00e7\u011f\u0131\u00f6\u015f\u00fc]/g,7,/\b(son)\b/ig,4,/\b(formu|bir|ve|ne|bu|i\u00e7in|o|b?en|\u00e7ok|(al|\u00e7\u0131k|ol|yap)mak|(de|gel|git|g\u00f6r|iste|ver)mek|gibi|daha|kendi|ile|ama|sonra|kadar|yer|insan|de\u011fil|y\u0131l|g\u00fcn|biz)\b/ig,6],vi:[/[\u00e0\u1ea3\u00e3\u00e1\u1ea1\u0103\u1eb1\u1eb3\u1eb5\u1eaf\u1eb7\u00e2\u1ea7\u1ea9\u1eab\u1ea5\u1ead\u0111\u00e8\u1ebb\u1ebd\u00e9\u1eb9\u00ea\u1ec1\u1ec3\u1ec5\u1ebf\u1ec7\u00ec\u1ec9\u0129\u00ed\u1ecb\u00f2\u1ecf\u00f5\u00f3\u1ecd\u00f4\u1ed3\u1ed5\u1ed7\u1ed1\u1ed9\u01a1\u1edd\u1edf\u1ee1\u1edb\u1ee3\u00f9\u1ee7\u0169\u00fa\u1ee5\u01b0\u1eeb\u1eed\u1eef\u1ee9\u1ef1\u1ef3\u1ef7\u1ef9\u00fd\u1ef5]/ig,8,/\b(v\u00e0|c\u00e1c|c\u1ee7a|c\u00f3|\u0111\u0103ng|\u0111\u00e2y|ho\u1eb7c|kh\u1ea9u|k\u00fd|m\u1ed9t|ng\u00e0y|l\u00e0|trong|cho)\b/ig,6],ja:[/[\u3041-\u30ff]/g,10],ko:[/[\uAC00-\uD7A3\u1100-\u11FF\u3131-\u318E\uFFA1-\uFFDC]/g,10],th:[/[\u0E00-\u0E7F]/g,10],zh_CN:[/[\u4e00-\u9fb4]/g,1,/[\u7684\u662f\u8fd9\u6709\u5728\u4e0d\u4e86\u6765\u4e2a\u5230\u4e3a\u548c\u9053\u4e5f\u65f6\u5f97\u5c31\u90a3\u8981\u4ee5\u7740\u53bb\u4e4b\u8fc7\u5bb6\u5bf9\u53ef\u91cc\u540e\u4e48\u591a\u800c\u80fd\u90fd\u7136\u6ca1\u8d77\u8fd8]/g,7],ru:[/[\u0410-\u042f\u0430-\u044f\u0401\u0451]/g,3],ar:[/[\u0600-\u06FF\u0750-\u077F\uFB50-\uFDFF\uFE70-\uFEFF]/g,1]}
for(var z in y)if(y.hasOwnProperty(z))x.push(z)
function A(F,G){var H=G.match(F)
return H?H.length:0}
function B(F,G,H,I){return Math.pow(A(F,G)/H,1/I)}
function C(F){var G=(1-F[0]),H
for(H=1;H<F.length;H++)G*=(1-F[H])
return 1-G}
function D(F,G,H){if(!H)H=A(/ /g,G)
var I=G.length,J,K,L,M,N=[]
for(var O=0;O<y[F].length;O+=2){J=y[F][O]
K=y[F][O+1]
L=(J.toString().substr(1,2)=='\\\\b')?H:I
M=B(J,G,L,K)
N.push(M)}
if(F=='en')N.push(0.6/G.length)
return C(N)}
function E(F,G){var H=document.body.getAttribute('lang')||document.documentElement.getAttribute('lang')
if(H){return H}
if(!F)F=x
if(!G)G=document.body.innerHTML.replace(/\s+/g,' ').replace(/<script[^>]*?>.*?<\/script>/gi,' ').replace(/<style[^>]*?>.*?<\/style>/gi,' ').replace(/<!--.*?-->/g,' ').replace(/<\/?[^>]+?>/g,' ').replace(/[-_a-z0-9.@]+[.@][-_a-z0-9.@]+/gi,'').replace(/[\s\d!'#$%&'()*+,-.\/:;<=>?@^_{|}~\[\]\/]+/g,' ')
G=G.replace(/\s+/g,' ')
var I=A(/ +/g,G),J=[],K,L
for(K=0;K<F.length;K++)J.push([F[K],D(F[K],G,I)])
J.sort(function(M,N){return N[1]-M[1]})
L=J[0][0]
L.scores=J
window.__$z_results=I+' '+G.length+' '+(G.length/I)+'\n'+J.join('\n')
window.__$z_innerText=G
return L}
if((typeof w==='function')&&w.prototype&&!w.__jx__no_fqname){w.prototype.__jx__fqname_chain=[(w.prototype.__jx__fqname_chain||"")," ","jx_language_Detect"].join('')
w.prototype.__jx__fqname="jx_language_Detect"}
return w})()
b.__$$__meshim_common_QueryString=(function(){var w=/^(1|on|true)$/i,x={'boolean':!1,'integer':0,'float':0.0,'string':''},y=null
function z(C){if(this instanceof z){if(C){return z.parseQuery(C)}
else{this.store={}}}
else{if(!y)z._initSingleton(window)
return y}}
z._initSingleton=function(C){y=new z(C.location.search)}
z.buildQuery=function(C){var D=[]
for(var E in C)if(C.hasOwnProperty(E)){D.push(window.encodeURIComponent(E)+'='+window.encodeURIComponent(C[E]+''))}
return D.join('&')}
z.parseQuery=function(C){var D=new z()
C=C.replace(/^\?|\/+$/g,'')
var E,F,G=C.split('&')
for(var H=0,I=G.length;H<I;H++){var J=G[H]
if(!J.length)continue
var K=J.indexOf('=')
if(K<=-1){E=J
F='1'}
else{E=J.slice(0,K)
F=J.slice(K+1)}
D.add(window.decodeURIComponent(E),window.decodeURIComponent(F))}
return D}
var A=z.prototype
A.add=function(C,D){if(!this.has(C))this.store[C]=[D]
else this.store[C].push(D)}
A.has=function(C){return (C in this.store)}
A.getLast=function(C,D,E){if(!this.has(C))return B(a,D,E)
var F=this.store[C]
return B(F[F.length-1],D,E)}
A.getFirst=function(C,D,E){return this.getAt(C,0,D,E)}
A.getAt=function(C,D,E,F){return B(this.has(C)?this.store[C][D]:a,E,F)}
A.getRaw=function(C){if(!this.has(C))return a
else return this.store[C].concat()}
A.get=A.getLast
A.toString=function(){return z.buildQuery(this.store)}
function B(C,D,E){if(D===a&&E===a)return C
if(D===a)D='string'
if(!(D in x))throw ('invalid type requested')
if(C===a){if(E!==a)return E
return x[D]}
if(D==='boolean')return w.test(C)
if(D==='integer')return parseInt(C,10)
if(D==='float')return parseFloat(C)
return C}
if((typeof z==='function')&&z.prototype&&!z.__jx__no_fqname){z.prototype.__jx__fqname_chain=[(z.prototype.__jx__fqname_chain||"")," ","meshim_common_QueryString"].join('')
z.prototype.__jx__fqname="meshim_common_QueryString"}
return z})()
b.__$$__meshim_common_Regex=(function(){var w='[a-z0-9!#$%&\'*+\\/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&\'*+\\/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+([a-z0-9](?:[a-z0-9-]*[a-z0-9])?)',x='(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]?|0)',y={email:new RegExp('^'+w+'$','i'),ip_token:new RegExp('^'+x+'$'),ip:new RegExp('^(?:'+x+'\\.){3}'+x+'$'),trim:function(z){return z.replace(/^\s+|\s+$/g,'')},tld:/^(AERO|ARPA|ASIA|A[CDEFGILMNOQRSTUWXZ]|BIZ|B[ABDEFGHIJMNORSTVWYZ]|CAT|COM|COOP|C[ACDFGHIKLMNORUVXYZ]|D[EJKMOZ]|EDU|E[CEGRSTU]|F[IJKMOR]|GOV|G[ABDEFGHILMNPQRSTUWY]|H[KMNRTU]|INFO|INT|I[DELMNOQRST]|JOBS|J[EMOP]|K[EGHIMNPRWYZ]|L[ABCIKRSTUVY]||MIL|MOBI|MUSEUM|M[ACDEGHKLMNOPQRSTUVWXYZ]|NAME|NET|N[ACEFGILOPRUZ]|ORG|OM|PRO|P[AEFGHKLMNRSTWY]|QA|R[EOSUW]|S[ABCDEGHIJKLMNORTUVYZ]|TEL|TRAVEL|T[CDFGHJKLMNOPRTVWZ]|U[AGKSYZ]|V[ACEGINU]|W[FS]|XN|Y[ET]|Z[AMW])$/i,search:{email:new RegExp('(^|\\s+)'+w,'ig'),hurl:/(^|\s+)(?:(?:https?|ftps?):\/\/)(?:\S+)/ig,url:/(^|\s+)(?:[\w-]+\.)+(\w{2,})(?::[0-9]+)?(?:\/\S*)?/g}}
if((typeof y==='function')&&y.prototype&&!y.__jx__no_fqname){y.prototype.__jx__fqname_chain=[(y.prototype.__jx__fqname_chain||"")," ","meshim_common_Regex"].join('')
y.prototype.__jx__fqname="meshim_common_Regex"}
return y})()
b.__$$__meshim_common_sounds_BGSoundTag=(function(){function w(x){if(!p.isIE)return
if(p.isIE>=9)return
var y=document.createElement('bgsound')
if(document.body)document.body.insertBefore(y,document.body.firstChild)
else document.documentElement.appendChild(y)
this.dom=y
this.loop=0
this.load(x)}
w.prototype.load=function(x){this.src=x+'.wav'}
w.prototype.play=function(x){this.dom.src=this.src
this.dom.loop=x?x:this.loop}
w.prototype.stop=function(){this.dom.src=''}
w.prototype.setVolume=function(){}
w.prototype.setLoop=function(x){this.loop=parseInt(x,10)}
if((typeof w==='function')&&w.prototype&&!w.__jx__no_fqname){w.prototype.__jx__fqname_chain=[(w.prototype.__jx__fqname_chain||"")," ","meshim_common_sounds_BGSoundTag"].join('')
w.prototype.__jx__fqname="meshim_common_sounds_BGSoundTag"}
return w})()
b.__$$__meshim_common_FileUtil=(function(){var w={}
w.prettySize=(function(){var x=1000,y=1024,z='B',A='iB',B=['','K','M','G','T','P'],C=[0,1,2,2,2,2]
return function D(E,F){E=Math.max(parseInt(E,10)||0,0)
F=F||{}
var G=F.base2?y:x,H
for(var I=0,J=B.length;I<J;I++){H=Math.pow(G,I)
if(E<(H*G)||B[I+1]===a){return (E/H).toFixed(C[I])+' '+B[I]+(F.suffixBase2?A:z)}}}})()
w.prettyType=(function(){var x=/^(x-|vnd\.)/i
return function y(z,A,B){B=B||window.Infinity
var C=z.split('/')[1]
C=C&&C.replace(x,'')
if(C&&C.length<B){return C.toLowerCase()}
C=A.split('.').pop()
return (C||'').toLowerCase()}})()
w.isValidType=(function(){var x=/^(application\/(vnd.|x-)?pdf|image\/(p?jpeg|gif|png)|text\/plain)$/i,y=/\.(pdf|jpe?g|gif|png|txt)$/i
return function(z,A){return (z&&x.test(z))||(A&&y.test(A))}})()
w.prettyError=(function(){var x='TOO_LARGE',y='ILLEGAL_TYPE',z='FILE_UPLOADS_TEMPORARILY_DISABLED',A=u(75),B=u(76),C=u(77),D=u(78),E
return function(F,G){switch(F){case x:E=A.replace('<size>',w.prettySize(G||5000000))
break
case y:E=B
break
case z:E=C
break
default:E=D
break}
return E}})()
if((typeof w==='function')&&w.prototype&&!w.__jx__no_fqname){w.prototype.__jx__fqname_chain=[(w.prototype.__jx__fqname_chain||"")," ","meshim_common_FileUtil"].join('')
w.prototype.__jx__fqname="meshim_common_FileUtil"}
return w})()
b.__$$__jx_io_socket_ChunkedXHR=(function(){var w=p.isIE?window.XDomainRequest:!p.isOpera&&!p.isAndroid&&window.XMLHttpRequest,x=w?z:null,y=p.isIE?'//':'https://'
z.protocol='cxhr'
function z(B){var C=this.xhr=new w(),D=this,E='',F=0,G
this.url=y+B
C.open('GET',this.url+['c',+new Date()].join('/'),!0)
C.onerror=function(I){D.abort(I)}
if(p.isIE){C.onprogress=function(){H(+new Date())}
C.onload=function(){D.abort('close')}}
else{C.onreadystatechange=function(){switch(C.readyState){case 3:H(+new Date())
break
case 4:D.abort('close')
break}}}
A('CXHR connecting to: '+this.url)
C.send()
function H(I){A('extracting data')
!G&&D.onopen&&D.onopen()
G=I
E+=C.responseText.substr(F)
F=C.responseText.length
E=E.split('\n\n')
for(var J=0;J<E.length-1;J++)D.onmessage&&D.onmessage(E[J],G)
E=E[E.length-1]
if(F>1*1024*1024&&!E.length||F>4*1024*1024)D.abort()}}
z.prototype.send=function(B){var C=this.url+['d',+new Date()].join('/'),D=new w(),E=this,F
D.open('POST',C,!0)
D.send(B)
if(p.isIE){D.onerror=G
D.onload=H}
else{D.onreadystatechange=function(){if(D.readyState!=4)return
if(D.status!=200)G()
H()}}
F=setTimeout(G,5000)
function G(){E.abort('send failed')}
function H(){E.xhr_sender=null
clearTimeout(F)
E.ondrain&&E.ondrain()}
this.xhr_sender=D
return !1}
z.prototype.abort=function(B){if(this._abort)return
this._abort=!0
A(B)
this.xhr&&this.xhr.abort()
this.xhr_sender&&this.xhr_sender.abort()
this.onclose&&this.onclose(B)
this.onerror=this.onload=this.onprogress=this.onreadystatechange=this.xhr=this.xhr_sender=null}
var A=function(){}
if((typeof x==='function')&&x.prototype&&!x.__jx__no_fqname){x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","jx_io_socket_ChunkedXHR"].join('')
x.prototype.__jx__fqname="jx_io_socket_ChunkedXHR"}
return x})()
b.__$$__jx_io_socket_StreamingPostMessage=(function(){var w=window.postMessage?!p.isAndroid&&x:null
x.protocol='spm'
function x(A){var B=this,C,D,E=this.iframe=y('iframe')
this.url='https://'+A
E.src=this.src=C=this.url+['c',+new Date()].join('/')
D=C.match(/https?:\/\/[^\/]+/)[0]
E.onload=function(H){B.abort(H)}
document.body.insertBefore(E,document.body.firstChild)
z('SPM connecting to: '+this.url)
window.addEventListener('message',G,!1)
this.remove_listeners=function(){window.removeEventListener('message',G,!1)}
var F
function G(H){!F&&B.onopen&&B.onopen()
F=+new Date()
if(H.origin!=D)return
if(H.data=='event-stream')E.onload=null
else B.onmessage&&B.onmessage(H.data,F)}}
x.prototype.send=function(A){this.iframe.contentWindow.postMessage(A,this.src)
return !0}
x.prototype.abort=function(A){if(this._abort)return
this._abort=!0
z(A)
this.iframe&&document.body.removeChild(this.iframe)
this.onclose&&this.onclose(A)
this.remove_listeners()
this.iframe=this.remove_listeners=null}
function y(A){var B=document.createElement(A),C=B.style
C.position='absolute'
C.width=C.height=0
C.overflow='hidden'
return B}
var z=function(){}
if((typeof w==='function')&&w.prototype&&!w.__jx__no_fqname){w.prototype.__jx__fqname_chain=[(w.prototype.__jx__fqname_chain||"")," ","jx_io_socket_StreamingPostMessage"].join('')
w.prototype.__jx__fqname="jx_io_socket_StreamingPostMessage"}
return w})()
b.__$$__meshim_common_sounds_FlashSound=(function(){var w=10
function x(y){var z,A=+new Date()+Math.round(Math.random()*10000),B=y.substring(0,y.lastIndexOf('/')+1)+'JSMP3.swf'
if(p.isIE){try {new window.ActiveXObject('ShockwaveFlash.ShockwaveFlash')}catch(E){return}
z=document.createElement('div')
document.body.insertBefore(z,document.body.firstChild)
var C='<object id="__zopimSoundPlayer'+A+'" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="1" height="1">'+'<param name="movie" value="'+B+'" />'+'<param name="allowScriptAccess" value="always" />'+'</object>'
z.innerHTML=C
z=z.firstChild
var D=document.title.split('#')[0]
l(function(){if(document.title!==D)document.title=D})}
else{if(!navigator.mimeTypes['application/x-shockwave-flash'])return
z=document.createElement('embed')
z.id='__zopimSoundPlayer'+A
z.src='/dashboard/sounds/JSMP3.swf'
z.setAttribute('allowScriptAccess','always')
document.body.insertBefore(z,document.body.firstChild)}
z.style.left=z.style.top='-9999px'
z.style.position='absolute'
this.dom=z
this.loop=1
this.load(y)}
x.prototype.load=function(y){if(this.dom.loadSound){this.dom.loadSound(y+'.mp3')
this.loaded=!0}
else{var z=this
setTimeout(function(){z.load(y)},1000)}}
x.prototype.play=function(y){if(this.loaded){try {this.dom.playSound(y||this.loop)}catch(A){;}}
else{var z=this
setTimeout(function(){z.play(y)},1000)}}
x.prototype.stop=function(){if(this.loaded){try {this.dom.stopSound()}catch(y){;}}}
x.prototype.setVolume=function(y){y=parseInt(y,10)
if(isNaN(y))return
if(y>w)y=w
if(y<0)y=0
if(this.loaded){try {this.dom.setVolume(y/w)}catch(A){;}}
else{var z=this
setTimeout(function(){z.setVolume(y)},500)}}
x.prototype.setLoop=function(y){this.loop=y
if(this.loaded){try {this.dom.setLoop(y)}catch(A){;}}
else{var z=this
setTimeout(function(){z.setLoop(y)},500)}}
if((typeof x==='function')&&x.prototype&&!x.__jx__no_fqname){x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","meshim_common_sounds_FlashSound"].join('')
x.prototype.__jx__fqname="meshim_common_sounds_FlashSound"}
return x})()
b.__$$__meshim_common_sounds_AudioTag=(function(){var w=10
function x(z){var A=document.createElement('audio'),B=this,C=function(){y.call(B)}
if(!A.canPlayType)return
var D=/^(probably|maybe)$/i
try {if(A.canPlayType('audio/mpeg').match(D))this.type='mp3'
else if(A.canPlayType('audio/ogg; codecs="vorbis"').match(D))this.type='ogg'
else if(A.canPlayType('audio/wav').match(D))this.type='wav'
else return}catch(E){return}
A.setAttribute('autobuffer','true')
A.setAttribute('preload','')
this.dom=A
this.remainingLoop=1
this.loop=1
this.load(z)
this.dom.addEventListener('ended',C,!1)}
function y(){if(this.remainingLoop>1){this.remainingLoop--
if(p.isSafari){this.dom.load()}
this.dom.play()}}
x.prototype.load=function(z){this.dom.setAttribute('src',z+'.'+this.type)
this.remainingLoop=0}
x.prototype.play=function(z){if(p.isSafari){this.dom.load()}
if(this.dom.currentTime)this.dom.currentTime=0
this.remainingLoop=z?z:this.loop
this.dom.play()}
x.prototype.stop=function(){this.dom.pause()
if(this.dom.currentTime)this.dom.currentTime=0}
x.prototype.setVolume=function(z){z=parseInt(z,10)
if(isNaN(z))return;(z>w)&&(z=w);(z<0)&&(z=0)
this.dom.volume=z/w}
x.prototype.setLoop=function(z){this.loop=z}
if((typeof x==='function')&&x.prototype&&!x.__jx__no_fqname){x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","meshim_common_sounds_AudioTag"].join('')
x.prototype.__jx__fqname="meshim_common_sounds_AudioTag"}
return x})()
b.__$$__jx_io_socket_StreamingHTMLFile=(function(){var w=p.isIE&&x
x.protocol='shtmlf'
function x(z){var A=this,B=new r(!0),C,D
C=new window.ActiveXObject('htmlfile')
C.open()
C.close()
D=C.createElement('iframe')
C.body.appendChild(D)
B.on('success',function(){A.ondrain&&A.ondrain()})
B.on('error',function(){A.abort()})
this.sender=B
this.htmlfile=C
this.remote_frame=D
this.url='https://'+z
q.window.on('unload',this.unload=function(){A.abort()})
this.connect()}
x.prototype.connect=function(){var z=this.remote_frame,A,B,C=this,D,E=200
this.timer=setTimeout(F,250)
function F(){try {A=z.contentWindow.frames[0]}catch(I){return C.abort()}
if(!A){C.timer=setTimeout(F,Math.min(800,E*=1.3))
return}
try {A.name
C.timer=setTimeout(F,Math.min(800,E*=1.3))
return}catch(I){;}
A.location.href='about:blank'
if(p.isIE<7)C.timer=setTimeout(H,20)
else A.onload=H}
var G=0
function H(){try {B=A.name}catch(K){if(!(G++%10))A.location.href='about:blank'
C.timer=setTimeout(H,20)
return}
G=0
if(B){B=B.split('\n\n')
!D&&C.onopen&&C.onopen()
D=+new Date()
for(var I=0;I<B.length-1;I++){var J=B[I]
if(J=='abort')return C.abort()
else C.onmessage&&C.onmessage(J,D)}
try {A.name=''
A.onload=null}catch(K){C.abort()}}
C.timer=setTimeout(F,E=200)}
y('SHF connecting to: '+this.url)
z.src=this.url+['c',+new Date()].join('/')}
x.prototype.send=function(z){var A=this.url+['d',+new Date(),window.encodeURIComponent(z)].join('/')
this.sender.load(A)
return !1}
x.prototype.abort=function(z){if(this._abort)return
this._abort=!0
y(z)
this.remote_frame.onload=this.remote_frame.onerror=null
this.htmlfile.open()
this.htmlfile.close()
this.sender.destroy()
q.window.un('unload',this.unload)
this.sender=this.htmlfile=this.remote_frame=this.unload=null
clearTimeout(this.timer)
this.onclose&&this.onclose(z)
window.CollectGarbage()}
var y=function(){}
if((typeof w==='function')&&w.prototype&&!w.__jx__no_fqname){w.prototype.__jx__fqname_chain=[(w.prototype.__jx__fqname_chain||"")," ","jx_io_socket_StreamingHTMLFile"].join('')
w.prototype.__jx__fqname="jx_io_socket_StreamingHTMLFile"}
return w})()
b.__$$__jx_io_socket_WebSocket=(function(){var w=window.WebSocket||window.MozWebSocket,x=w?y:null
function y(z){var A=new w('wss://'+z+['c',+new Date()].join('/')),B=this
A.onclose=function(C){B.onclose&&B.onclose(C)}
A.onerror=function(C){B.onerror&&B.onerror(C)}
A.onmessage=function(C){B.onmessage&&B.onmessage(C.data,+new Date())}
A.onopen=function(C){B.onopen&&B.onopen(C)}
this.ws=A}
y.prototype.abort=function(){}
y.prototype.close=function(){return this.ws.close()}
y.prototype.send=function(z){this.ws.send(z)
return !0}
y.protocol='ws'
if((typeof x==='function')&&x.prototype&&!x.__jx__no_fqname){x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","jx_io_socket_WebSocket"].join('')
x.prototype.__jx__fqname="jx_io_socket_WebSocket"}
return x})()
b.__$$__jx_data_DataNode=(function(){function w(y,z){this.name=y
this.leaf=/\$[a-z]+$/.test(y)
this.parentNode=z
this.listeners_value=[]
this.listeners_write=[]
if(!this.leaf){this.listeners_keys=[]
this.childNodes={}
this.keys={}}}
w.prototype.fqname=function(){return x(this.path())}
w.prototype.path=function(){var y=this,z=[this.name]
while((y=y.parentNode))z.unshift(y.name)
return z}
w.prototype.descend=function(y){var z=this,A,B,C
if(typeof y=='string')y=y.split('.')
for(B=0,C=y.length;B<C;B++){A=y[B]
if(!(A in z.childNodes))z.childNodes[A]=new w(A,z)
z=z.childNodes[A]}
return z}
w.prototype.$$=w.prototype.descend
w.prototype.$=function(y){if(!(y in this.childNodes))return (this.childNodes[y]=new w(y,this))
return this.childNodes[y]}
w.prototype.update=function(y,z,A){var B
if(this.leaf){this.value=y
this.notifyListeners(y,z,A)}
else{if(y==null){this.deleted=!0
for(B in this.childNodes)if(this.childNodes.hasOwnProperty(B))this.childNodes[B].update(null,!0,A)}
else{delete this.deleted
for(B in y)if(y.hasOwnProperty(B))this.$(B).update(y[B],!0,A)}
this.notifyListeners(y,z,A)}}
w.prototype.write=function(y,z){this.update(y,z||!1,{path:this.path(),value:y})}
w.prototype.bindWrite=function(y){this.listeners_write.push(y)}
w.prototype.bindValue=function(y){this.listeners_value.push(y)
try {y.call(this,this.getValue())}catch(z){q.fire('error',z)}}
w.prototype.bindKeys=function(y){if(this.leaf){return}
this.listeners_keys.push(y)
try {y.call(this,this.getKeys(),[])}catch(z){q.fire('error',z)}}
w.prototype.unbindValue=function(y){for(var z=this.listeners_value.length;z--;)if(this.listeners_value[z]==y){this.listeners_value.splice(z,1)
return}}
w.prototype.unbindKeys=function(y){if(this.leaf)return
for(var z=this.listeners_keys.length;z--;)if(this.listeners_keys[z]==y){this.listeners_keys.splice(z,1)
return}}
w.prototype.on=function(y,z){switch(y){case 'value':this.bindValue(z)
break
case 'keys':this.bindKeys(z)
break}}
w.prototype.un=function(y,z){switch(y){case 'value':this.unbindValue(z)
break
case 'keys':this.unbindKeys(z)
break}}
w.prototype.addListener=function(y,z){this.listeners[y].push(z)}
w.prototype.removeListener=function(y,z){var A=this.listeners[y]
for(var B=A.length;B--;)if(A[B]==z)A.splice(B,1)}
w.prototype.notifyListeners=function(y,z,A){for(var B=0;B<this.listeners_value.length;B++)try {this.listeners_value[B].call(this,y)}catch(G){q.fire('error',G)}
if(A){for(B=0;B<this.listeners_write.length;B++)try {this.listeners_write[B].call(this,A)}catch(G){q.fire('error',G)}}
if(this.leaf)return
var C=[],D=[],E
if(y){for(E in y)if(y.hasOwnProperty(E)){if(y[E]!==null){if(!(E in this.keys)){this.keys[E]=1
C.push(E)}}
else{if(E in this.keys){delete this.keys[E]
D.push(E)}}}}
else{for(E in this.keys)if(this.keys.hasOwnProperty(E)){delete this.keys[E]
D.push(E)}}
for(B=0;B<this.listeners_keys.length;B++)try {this.listeners_keys[B].call(this,C,D)}catch(G){q.fire('error',G)}
if(!z&&this.parentNode){var F={}
F[this.name]=y
this.parentNode.notifyListeners(F,z,A)}}
w.prototype.getValue=function(y){if(y)return this.descend(y).getValue()
if(this.leaf)return this.value
if(this.deleted)return null
var z,A={},B
for(var C in this.childNodes)if(this.childNodes.hasOwnProperty(C)){if((B=this.childNodes[C].getValue())!=null){A[C]=B
z=!0}}
return z?A:null}
w.prototype.getKeys=function(){if(this.leaf){return null}
var y=[]
for(var z in this.keys)if(this.keys.hasOwnProperty(z))y.push(z)
return y}
function x(y){var z=''
for(var A=0;A<y.length;A++){if(/^[a-zA-Z_$][a-zA-Z0-9_$]*$/.test(y[A]))z+='.'+y[A]
else z+='['+JSON.stringify(y[A])+']'}
return z.substr(1)}
if(typeof exports!='undefined')exports.DataNode=w
if((typeof w==='function')&&w.prototype&&!w.__jx__no_fqname){w.prototype.__jx__fqname_chain=[(w.prototype.__jx__fqname_chain||"")," ","jx_data_DataNode"].join('')
w.prototype.__jx__fqname="jx_data_DataNode"}
return w})()
b.__$$__div=(function(){var w=v.nativeGenerator("div")
if((typeof w==='function')&&w.prototype&&!w.__jx__no_fqname){w.prototype.__jx__fqname_chain=[(w.prototype.__jx__fqname_chain||"")," ","div"].join('')
w.prototype.__jx__fqname="div"}
return w})()
b.__$$__meshim_config_geo_WidgetMediatorsAccessDefinition=(function(){var w={CLUSTERS:{US:['us08','us10','us12','us14','us16','us18','us20','us22','us24','us26','us28'],DE:['de04','de06','de08','de10','de12','ie02','ie04'],SG:['sg06','sg08','sg10','sg12'],JP:['jp02','jp04'],AU:['au02'],BR:['br02','br04','br06']},FALLBACKS:{US:['DE'],DE:['US'],SG:['US'],JP:['US'],AU:['SG','US'],BR:['US']},NEAR_MAP:{AL:'DE',AD:'DE',AM:'DE',AT:'DE',BY:'DE',BE:'DE',BA:'DE',BG:'DE',CH:'DE',CY:'DE',CZ:'DE',DE:'DE',DK:'DE',EE:'DE',ES:'DE',EU:'DE',FO:'DE',FI:'DE',FR:'DE',GB:'DE',GE:'DE',GI:'DE',GR:'DE',HU:'DE',HR:'DE',IE:'DE',IM:'DE',IS:'DE',IT:'DE',LT:'DE',LU:'DE',LV:'DE',MC:'DE',MK:'DE',MT:'DE',NO:'DE',NL:'DE',PO:'DE',PT:'DE',RO:'DE',SE:'DE',SI:'DE',SK:'DE',SM:'DE',TR:'DE',UA:'DE',VA:'DE',ZA:'DE',AP:'SG',BD:'SG',BN:'SG',CN:'SG',ID:'SG',IN:'SG',LA:'SG',KH:'SG',LK:'SG',MM:'SG',MY:'SG',SG:'SG',PK:'SG',TH:'SG',VN:'SG',AU:'AU',NZ:'AU',HK:'JP',KR:'JP',JP:'JP',PH:'JP',RU:'JP',TW:'JP',AR:'BR',BO:'BR',BR:'BR',CL:'BR',PE:'BR',PY:'BR',UY:'BR',DEFAULT:'US'}}
if((typeof w==='function')&&w.prototype&&!w.__jx__no_fqname){w.prototype.__jx__fqname_chain=[(w.prototype.__jx__fqname_chain||"")," ","meshim_config_geo_WidgetMediatorsAccessDefinition"].join('')
w.prototype.__jx__fqname="meshim_config_geo_WidgetMediatorsAccessDefinition"}
return w})()
b.__$$__jx_data_SetDataNode=(function(){var w={applySetDataNode:y}
function x(z){var A,B
if(z.leaf){A=this
A.autobind(z,'value',function(C){if('value' in A)A.value=C
else A.setText(C)})}
else{A=this.firstChild
while(A){if(A.getAttribute){B=A.getAttribute('name')
if(B)A.setDataNode(z.descend(B))
else A.setDataNode(z)}
A=A.nextSibling}}}
function y(z){if(z.setDataNode)return
z.setDataNode=x
var A=z.firstChild
while(A){y(A)
A=A.nextSibling}}
if((typeof w==='function')&&w.prototype&&!w.__jx__no_fqname){w.prototype.__jx__fqname_chain=[(w.prototype.__jx__fqname_chain||"")," ","jx_data_SetDataNode"].join('')
w.prototype.__jx__fqname="jx_data_SetDataNode"}
return w})()
b.__$$__meshim_widget_controllers_DefaultDataNode=(function(){var w={"livechat":{"timestamp$int":+new Date(),"settings":{"behavior":{"do_not_display$bool":!1},"theme":{"name$string":"simple","message_type$string":"bubble_avatar","colors":{"placeholder$string":"_"},"chat_button":{"position$string":"br","position_mobile$string":"br"},"chat_window":{"position$string":"br","size$string":"medium"}},"greetings":{"online$string":u(2),"offline$string":u(3)},"banner":{"enabled$bool":!0,"layout$string":"image_right","text$string":u(2),"image_path$string":"","image_data$string":""},"chat_button":{"hide_when_offline$bool":!1},"chat_window":{"title_bar":{"title$string":u(4),"status_messages":{"online$string":u(5),"away$string":u(6),"offline$string":u(7)}}},"login":{"allowed_types":{"email$bool":!0,"facebook$bool":!0,"twitter$bool":!1,"google$bool":!0},"phone_display$bool":!1,"restrict_profile$bool":!1},"concierge":{"display_name$string":u(8),"title$string":u(9),"avatar_path$string":"","avatar_data$string":"","greeting":{"enabled$bool":!1,"message$string":u(10)}},"branding":{"hide_branding$bool":!1,"hide_favicon$bool":!1,"custom_favicon_path$string":""},"language":{"language$string":"--"},"cookie_law":{"enabled$bool":!1},"sound":{"disabled$bool":!1},"popout":{"enabled$bool":!0},"rating":{"enabled$bool":!1},"end_chat_menu":{"enabled$bool":!0,"message$string":""},"emoticons":{"enabled$bool":!1},"bubble":{"enabled$bool":!0,"title$string":u(11),"text$string":u(12)},"forms":{"pre_chat_form":{"required$bool":!1,"profile_required$bool":!1,"message$string":"","form":{"0":{"name$string":"name","required$bool":0},"1":{"name$string":"email","required$bool":0},"2":{"label$string":u(13),"name$string":"department","required$bool":0,"type$string":"department"},"3":{"label$string":u(14),"name$string":"message","required$bool":0,"type$string":"textarea"},"4":{"label$string":u(15),"name$string":"phone","required$bool":0,"type$string":"text","hidden$bool":!0}}},"offline_form":{"message$string":u(16),"message_disabled$string":u(17),"post_submit_message$string":u(18),"profile_required$bool":!0,"form":{"0":{"name$string":"name","required$bool":1},"1":{"name$string":"email","required$bool":1},"2":{"label$string":u(14),"name$string":"message","required$bool":1,"type$string":"textarea"},"3":{"label$string":u(15),"name$string":"phone","required$bool":0,"type$string":"text","hidden$bool":!0}}},"post_chat_form":{"header$string":u(19),"message$string":u(20),"comments_enabled$bool":!0,"comments_messages":{"good":{"message$string":u(21),"placeholder$string":u(22)},"bad":{"message$string":u(23),"placeholder$string":u(24)}}},"card_form":{}}}}}
if((typeof w==='function')&&w.prototype&&!w.__jx__no_fqname){w.prototype.__jx__fqname_chain=[(w.prototype.__jx__fqname_chain||"")," ","meshim_widget_controllers_DefaultDataNode"].join('')
w.prototype.__jx__fqname="meshim_widget_controllers_DefaultDataNode"}
return w})()
b.__$$__jx_io_socket_XDomainDynScript=(function(){var w=x
x.protocol='xdds'
function x(z){var A=this,B=this.longpoll=new r(!0),C=this.sender=new r(!0)
B.on('success',function(D){A.process_data(D)})
B.on('error',function(){A.abort('longpoll error')})
C.on('success',function(){A.ondrain&&A.ondrain()})
C.on('error',function(){A.abort('sender error')})
this.url='https://'+z
q.window.on('unload',this.unload=function(){A.abort('unload')})
this.longpoll.load(this.url+['c',+new Date()].join('/'))}
x.prototype.process_data=function(z){if(!z||this._abort)return
!this.ts&&this.onopen&&this.onopen()
this.ts=+new Date()
this.onmessage&&this.onmessage(z,this.ts)
this.longpoll&&this.longpoll.load(this.url+['p',+new Date()].join('/'))}
x.prototype.send=function(z){if(this._abort)return !1
var A=this.url+['d',+new Date(),window.encodeURIComponent(z)].join('/')
this.sender&&this.sender.load(A)
return !1}
x.prototype.abort=function(z){if(this._abort)return
this._abort=!0
y('XDDS - abort: '+z)
q.window.un('unload',this.unload)
this.longpoll.destroy()
this.sender.destroy()
this.longpoll=this.sender=this.unload=null
this.onclose&&this.onclose(z)
window.CollectGarbage&&window.CollectGarbage()}
var y=function(){}
if((typeof w==='function')&&w.prototype&&!w.__jx__no_fqname){w.prototype.__jx__fqname_chain=[(w.prototype.__jx__fqname_chain||"")," ","jx_io_socket_XDomainDynScript"].join('')
w.prototype.__jx__fqname="jx_io_socket_XDomainDynScript"}
return w})()
b.__$$__meshim_widget_controllers_GoogleAnalytics=(function(){var w=(function(){var x='Zopim Livechat',y,z,A,B,C={OLD:'ga.js',NEW:'analytics.js'}
function D(){if(y||z)return !0
var I,J=window[window['GoogleAnalyticsObject']||'ga']
if(typeof J=='function'){z=J
I=!0}
if(window._gaq&&window._gat){y=window._gaq
A=window._gat
I=!0}
return I}
function E(I){if(I==C.NEW&&z){if(typeof z.getAll=='function'){return z.getAll()}}
else if(I==C.OLD&&A){if(typeof A._getTrackers=='function'){return A._getTrackers()}
else if(typeof A._getTrackerByName=='function'){return [A._getTrackerByName()]}}
return []}
function F(I,J,K){if(!D()||!I)return
if(z)G(I,J,K)
if(y)H(I,J,K)}
function G(I,J,K){B=E(C.NEW)
if(B.length){for(var L=0,M=B.length;L<M;L++){if(typeof B[L].send=='function'){if(J)B[L].send('event',K||x,I,J)
else B[L].send('event',K||x,I)}}}
else{if(J)z('send','event',K||x,I,J)
else z('send','event',K||x,I)}}
function H(I,J,K){B=E(C.OLD)
y.push(function(){for(var L=0,M=B.length;L<M;L++){if(typeof B[L]._trackEvent!='function')continue
if(J)B[L]._trackEvent(K||x,I,J)
else B[L]._trackEvent(K||x,I)}})}
return {trackEvent:F}})()
if((typeof w==='function')&&w.prototype&&!w.__jx__no_fqname){w.prototype.__jx__fqname_chain=[(w.prototype.__jx__fqname_chain||"")," ","meshim_widget_controllers_GoogleAnalytics"].join('')
w.prototype.__jx__fqname="meshim_widget_controllers_GoogleAnalytics"}
return w})()
b.__$$__jx_io_Socket=(function(){var w=b.__$$__jx_data_JSON,x=b.__$$__jx_io_socket_ChunkedXHR,y=b.__$$__jx_io_socket_StreamingPostMessage,z=b.__$$__jx_io_socket_StreamingHTMLFile,A=b.__$$__jx_io_socket_WebSocket,B=b.__$$__jx_io_socket_XDomainDynScript,C=A||x||y||z||B,D=B,E=45000,F={INITIAL_RTT:1000,RECONNECT_DELAY_MS:30000,FAST_RECONNECT_MS:100,FLUSH_DELAY_MS:75,MAX_BLOCKING_TIME_MS:40}
function G(T,U,V,W){if(!C)throw 'No available transports'
this.provider=C
this.options=W=W||{}
for(var X in F)if(F.hasOwnProperty(X))if(!(X in W))W[X]=F[X]
q.extend(this)
this.id=V||G.generateID()
this.host=T
this.ns=U
this.path='/'+['s',this.ns,this.provider.protocol,this.id].join('/')
this.url=this.host+this.path+'/'
this.status='connecting'
this.connected=!1
this.quality=0
this.rtt=W.INITIAL_RTT
this.clock_skew=0
this.connect_attempts=0
this.connections=0
this.disconnects=0
this.sent_bytes=0
this.recv_bytes=0
this.sent_messages=0
this.recv_messages=0
this.sent_frames=0
this.recv_frames=0
this.lost_frames=0
this.ooo_frames=0
this.remote_seq=0
this.local_seq=0
this.timeout_server=0
this.timeout_response_soft=0
this.timeout_response_hard=0
this.bytes_at_connect=-1
this.time_last_alive=-1
this.time_last_open=-1
this.starttime=+new Date()
this.uptime=0
this.connected_time=new Q()
this.idle_time=new Q()
this.last_frame_time=0
this.raw_clock_skew=0
this.smooth_skewed_transit_time_in=0
this.remote_smooth_skewed_transit_time_out=0
this.drained=!0
this.buffer=[]
this.glitch_timer=this.reconnect_timer=null
this.reconnect_delay=W.RECONNECT_DELAY_MS*(Math.random()*0.2+0.8)
this.keep_alive_interval=15000
this.data_packet_queue=new R(this)
this.connect()
var Y=this
q.window.on('offline',function(){Y.onoffline()})
q.window.on('online',function(){Y.ononline()})}
G.available=function(){return !!C}
G.generateID=function(){return O(16)}
G.prototype.connect=function(T){this.debug('connect('+(T&&'glitch'||'')+')')
if(this.reconnect_timer)return
var U=this,V=this.options
if(!this.connections)this.provider=this.connect_attempts&1?D:C
this.response_timer=clearTimeout(this.response_timer)
this.timeout_timer=clearTimeout(this.timeout_timer)
if(this.socket){this.socket.onclose=this.socket.ondrain=this.socket.onerror=this.socket.onmessage=this.socket.onopen=null
this.socket.abort('connect')
this.socket=null}
this.connected=!1
if(T){this.reconnect_delay=V.RECONNECT_DELAY_MS*(Math.random()*0.2+0.9)
this.glitch_timer=setTimeout(function(){U.quality=0
U.glitch_timer=setTimeout(function(){U.status='reconnecting'
U.fire_break()},P(U.rtt*3,1000,5000))},P(this.rtt*3,1000,5000))}
this.debug('reconnect_delay: '+this.reconnect_delay)
clearTimeout(this.reconnect_timer)
this.reconnect_timer=setTimeout(function(){U.reconnect_timer=null
U.reconnect_delay=Math.min(U.reconnect_delay*1.4+1000,60000)
U.reconnect_delay*=Math.random()*0.2+0.9
U.connect()},this.reconnect_delay)
this.path='/'+['s',this.ns,this.provider.protocol,this.id].join('/')
this.url=this.host+this.path+'/'
this.debug('connecting: '+this.url)
this.socket=new this.provider(this.url)
this.transport=this.provider.protocol
this.connect_attempts++
this.socket.onopen=function(){U.glitch_timer=clearTimeout(U.glitch_timer)
U.reconnect_timer=clearTimeout(U.reconnect_timer)
U.connections++
U.drained=!0
U.connected=!0
U.time_last_open=U.time_last_alive=+new Date()
if(U.uptime>=0)U.uptime-=U.time_last_open
if(U.connections==1)U.fire('open')
else U.fire_resume()
U.status='connected'
U.flush()
U.keep_alive()
U.debug('connected')
if(U.bytes_at_connect==-1)setTimeout(function(){U.bytes_at_connect=U.recv_bytes},50)}
this.socket.onmessage=function(W,X){U.onmessage(W,X)}
this.socket.onclose=function(W){U._onclose(W)}
this.socket.ondrain=function(W){U._ondrain(W)}
this.socket.onerror=function(W){U._onerror(W)}}
G.prototype.reconnect=function(){this.reconnect_timer=clearTimeout(this.reconnect_timer)
this.broken_reason='FORCED_RECONNECT'
this.connect()}
G.prototype.send=function(T,U){if(this.status=='disconnected')return
if(this.buffer[0]=='null')this.buffer=[]
this.buffer.push(w.stringify(T))
this.schedule_flush()
U&&this.response_timeout()}
G.prototype.close=function(T){this.debug('close()')
this.flush_scheduled=clearTimeout(this.flush_scheduled)
this.keep_alive_timer=clearTimeout(this.keep_alive_timer)
this.reconnect_timer=clearTimeout(this.reconnect_timer)
this.response_timer=clearTimeout(this.response_timer)
this.timeout_timer=clearTimeout(this.timeout_timer)
if(!this.broken_reason)this.broken_reason='CLOSE'
this.fire_break()
this.status=T?'reconnecting':'disconnected'
this.connected=!1
this.quality=0
if(!this.socket)return
this.socket.onclose=this.socket.ondrain=this.socket.onerror=this.socket.onmessage=this.socket.onopen=null
this.socket.abort('close')
this.socket=null}
G.prototype.hibernate=function(){}
G.prototype.onoffline=function(){this.broken_reason='OFFLINE'
this.debug('onoffline')
this.close(!0)}
G.prototype.ononline=function(){this.debug('ononline')
if(!this.connected){this.reconnect_timer=clearTimeout(this.reconnect_timer)
this.connect()}}
G.prototype.schedule_flush=function(){if(this.flush_scheduled||!this.drained||!this.connected)return
var T=this,U=this.options
this.flush_scheduled=setTimeout(function(){T.flush()},U.FLUSH_DELAY_MS)}
G.prototype.flush=function(){if(!this.buffer.length||!this.drained||!this.connected)return
var T=this.buffer
this.sent_messages+=T.length
this.sent_frames++
T=this.generate_frame(T.join('\n'))
this.drained=this.socket.send(T)
this.sent_bytes+=T.length
this.flush_scheduled=!1
this.buffer=[]
this.keep_alive()
this.time_last_alive=+new Date()}
G.prototype.keep_alive=function(){clearTimeout(this.keep_alive_timer)
var T=this
this.keep_alive_timer=setTimeout(function(){T.debug('pong!')
T.send(null)},this.keep_alive_interval)}
G.prototype.response_timeout=function(){if(this.response_timer)return
var T=this,U=P(this.rtt*4+this.options.FLUSH_DELAY_MS,2000,20000)
this.response_timer=setTimeout(function(){T.timeout_response_soft++
T.debug('response timeout, '+U+'ms')
T.fire_break('SOFT_RESPONSE_TIMEOUT')
T.response_timer=setTimeout(function(){T.timeout_response_hard++
T.debug('response timeout - reconnecting')
T.broken_reason='HARD_RESPONSE_TIMEOUT'
T.connect(!0)},U*2)},U)}
G.prototype.reset_server_timeout=function(){clearTimeout(this.timeout_timer)
var T=this,U=this.keep_alive_interval*4+P(T.rtt*4,2000,20000)
this.timeout_timer=setTimeout(function(){T.timeout_server++
T.debug('server '+U+'ms timeout, reconnecting')
T.broken_reason='SERVER_TIMEOUT'
T.connect(!0)},U)}
G.prototype.fire_break=function(T){this.broken||this.fire('break',T||this.broken_reason)
this.broken=!0
this.broken_reason=''
if(this.uptime<0)this.uptime+=+new Date()}
G.prototype.fire_resume=function(){this.broken_reason=''
this.broken&&this.fire('resume')
this.broken=!1
if(this.uptime>=0)this.uptime-=+new Date()}
G.prototype.onmessage=function(T,U){this.recv_bytes+=T.length
T=T.split('\n')
if(T.length<6){this.debug('Bad data: '+T.join('\n'))
return}
var V=+new Date(),W=+T[0],X=+T[1],Y=+T[2],Z=+T[3],$$=T[4]
this.calculate_clocks(U||+new Date(),W,X)
this.reset_server_timeout()
Z
switch($$){case 'a':this.broken_reason='ABORT'
this.close()
break
case 'd':this.response_timer=clearTimeout(this.response_timer)
this.fire_resume()
this.check_sequence(Y)
this.data_packet_queue.queueFrame(T,5,V)
break
case 'e':this.debug('server: Are you still there?')
this.send(null)
break
case 'n':this.remote_seq=Y
this.keep_alive_interval=+T[5]||15000
this.debug('keep_alive is '+this.keep_alive_interval+'ms')
if(this.connections>1)this.fire('reopen')
break
case 'p':this.debug('ping!')
break}}
G.prototype._onclose=function(T){var U=this,V=this.options
if(this.connections==0&&this.disconnects==0)this.fire('close')
this.debug('_onclose')
this.disconnects++
this.broken_reason='HANGUP'
if(this.connected)this.reconnect_timer=setTimeout(function(){U.reconnect_timer=null
U.connect(!0)},V.FAST_RECONNECT_MS)
else if(!this.connections&&this.connect_attempts==1){clearTimeout(this.reconnect_timer)
this.reconnect_timer=setTimeout(function(){U.reconnect_timer=null
U.connect()},0)}
this.connected=!1
clearTimeout(this.keep_alive_timer)
if(this.time_last_alive>0)this.idle_time.add(+new Date()-this.time_last_alive)
if(this.time_last_open>0)this.connected_time.add(+new Date()-this.time_last_open)
this.time_last_alive=this.time_last_open=-1
if(this.uptime<0)this.uptime+=+new Date()}
G.prototype._ondrain=function(){this.drained=!0
this.flush()}
G.prototype._onerror=function(T){this.debug('_error')
this.fire('error',T)}
G.prototype.generate_frame=function(T,U){return [+new Date(),this.smooth_skewed_transit_time_in,(++this.local_seq),this.remote_seq,U||'d',T].join('\n')}
var H=0.1,I=50,J=1000,K=Math.pow(I,H),L=Math.pow(J,H)-K
G.prototype.calculate_clocks=function(T,U,V){var W=T-U,X=T-this.last_frame_time,Y=1/(X/E+1)
if(this.smooth_skewed_transit_time_in)this.smooth_skewed_transit_time_in=Y*this.smooth_skewed_transit_time_in+(1-Y)*W
else this.smooth_skewed_transit_time_in=W
this.remote_smooth_skewed_transit_time_out=V
if(this.smooth_skewed_transit_time_in&&this.remote_smooth_skewed_transit_time_out){this.rtt=this.smooth_skewed_transit_time_in+this.remote_smooth_skewed_transit_time_out
this.quality=~~(100*(1-(Math.pow(this.rtt,H)-K)/L))
this.quality=Math.min(100,Math.max(0,this.quality))
this.raw_clock_skew=W-this.rtt/2
if(this.clock_skew)this.clock_skew=0.9*this.clock_skew+0.1*this.raw_clock_skew
else this.clock_skew=this.raw_clock_skew}
this.time_last_alive=this.last_frame_time=T}
G.prototype.check_sequence=function(T){if(this.remote_seq+1==T)this.remote_seq=T
else if(this.remote_seq<T){var U=T-this.remote_seq+1
this.lost_frames+=U
this.fire('lost',U)
this.remote_seq=T}
else{this.ooo_frames++
this.fire('out_of_order')}}
C&&(G.prototype.transport=C.protocol)
G.prototype.debug=function(){}
var M="+-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
function N(){var T=M,U=new Date(),V=U.getUTCFullYear()-2000,W=U.getUTCMonth()+1,X=U.getUTCDate(),Y=U.getUTCHours(),Z=U.getUTCMinutes(),$$=U.getUTCSeconds(),$_=U.getUTCMilliseconds()
return T[V]+T[W]+T[X]+T[Y]+T[Z]+T[$$]+T[$_>>6]+T[$_&63]}
function O(T){var U='',V=M
while(T-->0)U+=V.charAt(Math.floor(Math.random()*V.length))
return U}
G.genDate=N
G.genID=O
function P(T,U,V){return Math.min(V,Math.max(U,T))}
function Q(){this.count=0
this.sum=0
this.sq_sum=0
this.mean=0
this.stddev=0}
Q.prototype.add=function(T){this.count++
this.sum+=T
this.sq_sum+=T*T
this.mean=this.sum/this.count
this.stddev=Math.sqrt(this.sq_sum/this.count-this.mean*this.mean)}
function R(T){this.socket=T
this.queue=[]
this.curFrame=null
this.curIdx=0
this.processing=!1}
var S=R.prototype
S.queueFrame=function(T,U,V){this.queue.push({msgs:T,start_idx:U,receive_time:V})
this.process()}
S.process=function(){if(this.processing)return
this.processing=!0
this.work()}
S.work=function(){var T=(+new Date())+this.socket.options.MAX_BLOCKING_TIME_MS,U=!1,V,W,X,Y=this.socket.recv_frames
for(var Z=0;Z<this.queue.length;Z++){V=this.queue[Z]
if(!('start_time' in V)){V.start_time=+new Date()
V.ticks=0
V.idx=V.start_idx}
V.ticks++
W=V.msgs
X=W.length
while(V.idx<X){var $$=+new Date(),$_
if($$>T){U=!0
break}
this.socket.dispatch_delay=$$-V.receive_time
try {$_=w.parse(W[V.idx])
V.idx++}catch($a){this.socket.debug("Invalid json message: "+W[V.idx])
continue}
this.socket.fire('message',$_)
this.socket.recv_messages++}
if(V.idx>=X){this.socket.recv_frames++}
if(U)break}
this.queue.splice(0,this.socket.recv_frames-Y)
if(this.queue.length){l(this.work,this)}
else{this.processing=!1}}
if((typeof G==='function')&&G.prototype&&!G.__jx__no_fqname){G.prototype.__jx__fqname_chain=[(G.prototype.__jx__fqname_chain||"")," ","jx_io_Socket"].join('')
G.prototype.__jx__fqname="jx_io_Socket"}
return G})()
b.__$$__jx_controls_List=(function(){function w(x,y,z,A,B){if(!(this instanceof w))return new w(x,y,z,A,B)
y=y||v.generateID()
var C=[b.__$$__div,null,null,[[b.__$$__div,"template",null,[[b.__$$__div,null,null,[],{}]],{"id":"template","container":"default","display":"none"}],[b.__$$__div,"content",null,[],{"id":"content"}]],{}],D=C[0].call(this,x,y,null,v.mangleIDs(y,C[3]),C[4]),E=D||this
v.set(y,E)
var F=v.get(y+'__template'),G=v.get(y+'__content')
if(!w.__jx__jcss_generated){t.generate(x,w.prototype.__jx__fqname,w.__jx__jcss,null,w)
w.__jx__jcss_generated=!0}
E.defaultPlacement=F
var H=(function(){var J=b.__$$__jx_data_SetDataNode
E.setDataNode=S
E.setRenderer=function($l){R=$l}
E.getID=Y
E.getNextID=W
E.getPrevID=X
E.getRowIDs=Z
E.clearList=T
E.select=$a
E.deselect=$b
E.setSort=$e
var K,L={},M={},N={},O=[],P=0,Q=!1,R=function($l){if(F.lastChild.__jx__native){var $m=F.lastChild.cloneNode(!0)
v.extend($m,!0)
return $m}
return F.lastChild.__jx__constructor($l)}
function S($l){if(K)E.autounbind(K,'keys',U)
K=$l
T()
E.autobind(K,'keys',U)}
function T(){G.empty()
L={}
O=[]
if(P){P=0
E.fire('jx:list:length',P)}}
function U($l,$m){var $n=($l.length+$m.length)>2
if($n)E.removeChild(G)
var $o=P,$p,$q,$r,$s
for($q=0;$q<$l.length;$q++){$p=$l[$q]
if($p in L)continue
var $t=R(G),$u=K.$($p)
L[$p]=$t
P++
J.applySetDataNode($t)
$r=$c?$g($p):$p
$s=$j($r,$t)
$t.setAttribute('jx:list:rowID',$p)
$t.setDataNode($u)
V($s)}
for($q=0;$q<$m.length;$q++){$p=$m[$q]
if(!($p in L))continue
$r=$c?$g($p,!0):$p
$s=$i($r)
delete M[$r]
if(L[$p]===$$)$$=null
L[$p].destroy()
delete L[$p]
V($s)
P--}
if($n)E.appendChild(G)
if($o!=P)E.fire('jx:list:length',P)
if($l.length)E.fire('jx:list:added',$l)}
function V($l){if($l<0||!(O[$l]))return
var $m=O[$l],$n=L[$m],$o,$p
if(!$n)return
if(O[$l+1]){$n.setAttribute('jx:list:nextID',O[$l+1])
$o=L[O[$l+1]]
$o.setAttribute('jx:list:prevID',$m)
$n.fire('update.neighbour',{next:O[$l+1]})
$o.fire('update.neighbour',{prev:$m})}
else{$n.removeAttribute('jx:list:nextID')
$n.fire('update.neighbour',{next:null})}
if(O[$l-1]){$n.setAttribute('jx:list:prevID',O[$l-1])
$p=L[O[$l-1]]
$p.setAttribute('jx:list:nextID',$m)
$n.fire('update.neighbour',{prev:O[$l-1]})
$p.fire('update.neighbour',{next:$m})}
else{$n.removeAttribute('jx:list:prevID')
$n.fire('update.neighbour',{prev:null})}}
function W($l){while($l.parentNode&&$l!=E){var $m=$l.getAttribute('jx:list:nextID')
if($m)return $m
$l=$l.parentNode}}
function X($l){while($l.parentNode&&$l!=E){var $m=$l.getAttribute('jx:list:prevID')
if($m)return $m
$l=$l.parentNode}}
function Y($l){while($l.parentNode&&$l!=E){var $m=$l.getAttribute('jx:list:rowID')
if($m)return $m
$l=$l.parentNode}}
function Z(){var $l=[],$m,$n
for($m in L)if(L.hasOwnProperty($m)){$n=L[$m].getAttribute('jx:list:rowID')
if($n)$l.push($n)}
return $l}
var $$=null
function $_($l){$a($l.target)}
function $a($l){var $m,$n
if(i($l)){$n=$l
$m=L[$n]}
else if(typeof $l=='number'){$m=G.childNodes[$l]
if($m)$n=$m.getAttribute('jx:list:rowID')}
else{$m=$l
while($m.parentNode&&$m!=G){$n=$m.getAttribute('jx:list:rowID')
if($n){$m.jx_wrapper&&($m=$m.jx_wrapper)
break}
$m=$m.parentNode}}
if(!$m||$m==$$)return
$b()
$$=$m.jx_wrapper||$m
$$.addClass('active')
$$.fire('jx:list:selected')
E.fire('jx:list:select',$n)}
function $b(){$$&&$$.removeClass('active')
$$&&$$.fire('jx:list:deselected')
$$=null}
var $c,$d
function $e($l,$m){if($c!=$l||$d!=$m){$d=$m
$c=$l
if($c){if(!Q){E.autobind(K,'value',$h)
Q=!0}}
else{if(Q){E.autounbind(K,'value',$h)
Q=!1}
$d=!1}
M={}
N={}
if(P>1)$f()}}
function $f(){var $l,$m,$n
G.innerHTML=""
O=[]
for($m in L)if(L.hasOwnProperty($m)){$l=$c?$g($m):$m
$n=$j($l,L[$m])
N[$m]=$l
M[$l]=$m
V($n)}}
function $g($l,$m){return $m?N[$l]:(K.$($l).getValue($c)+'\0'+$l).replace(/ /g,'').toLowerCase()}
function $h($l){if(!$c)return
var $m,$n,$o,$p,$q,$r
for($o in $l)if($l.hasOwnProperty($o)){$n=$l[$o]
if(N[$o]&&$n&&$n[$c]){$m=L[$o]
G.removeChild($m)
$q=N[$o]
$p=$g($o)
delete M[$q]
$r=$i($q)
V($r)
M[$p]=$o
N[$o]=$p
$r=$j($p,$m,$n[$c])
V($r)}}}
function $i($l){var $m=$k(O,$l)
if($m<0){console.log('Could not find '+$l+' in List')
return $m}
O.splice($m,1)
return $m}
function $j($l,$m){var $n=(-$k(O,$l)>>0)-1
if($n<0)if(typeof console!='undefined'&&'log' in console)console.log($l+' is already in List')
O.splice($n,0,$l)
$d&&($n=O.length-$n-1)
G.insertBefore($m.dom||$m,G.childNodes[$n]||null)
return $n}
function $k($l,$m){var $n=$l.length,$o=0,$p=$n-1,$q,$r
while($o<=$p){$q=($o+$p)/2>>0
$r=$l[$q]
if($r<$m)$o=$q+1
else if($r>$m)$p=$q-1
else return $q}
return -($o+1)}
G.on('click',$_)})()
for(var I in H)if(H.hasOwnProperty(I))E[I]=H[I]
if(E.fire)E.fire('init')
E.setStyle&&E.setStyle(z)
E.setAttributes&&E.setAttributes(B)
if(typeof E.addChildren=='function')E.addChildren(A)
else v.addChildren(E,A)
if(E!==this){E.__jx__constructor=b.__$$__jx_controls_List
E.__jx__native=!1}
return E}
w.prototype=e(b.__$$__div.prototype)
w.prototype.__jx__native=!1
w.prototype.__jx__super=b.__$$__div
w.__jx__jcss={}
w.prototype.__jx__fqname_chain=[(w.prototype.__jx__fqname_chain||"")," ","jx_controls_List"].join('')
w.prototype.__jx__fqname="jx_controls_List"
w.prototype.__jx__constructor=w
return w})()
b.__$$__meshim_widget_utils_Color=(function(){var w=b.__$$__meshim_common_Chroma,x={white:"#FFF",black:"#000",grey:"#808080"}
x.clampLuminance=function(z,A,B){z=x.getChromaObj(z)
if(!z)return
if(A<0)A=0
if(B>1)B=1
var C=z.luminance(),D=C<A?A:C>B?B:C
return C===D?z:x.getColorAtLuminance(z,D)}
x.lighten=function(z,A,B){return w.interpolate(z,x.white,A,B||'rgb')}
x.darken=function(z,A,B){return w.interpolate(z,x.black,A,B||'rgb')}
var y=100
x.getColorAtLuminance=function(z,A){if(A<0||A>1)return
z=x.getChromaObj(z)
if(!z)return
var B=0
if(z.luminance()>=A){for(;;){B++
if(z.luminance()<=(A+0.05)||B>=y)return z
z=x.darken(z,0.05)}}
else{for(;;){B++
if(z.luminance()>=(A-0.05)||B>=y)return z
z=x.lighten(z,0.05)}}}
x.getColorAtContrast=function(z,A,B){if(B<1)return
z=x.getChromaObj(z)
A=x.getChromaObj(A)
if(!z||!A)return
var C=0
if(w.contrast(z,A)>=B){for(;;){C++
if(w.contrast(z,A)<=(B+0.5)||C>=y)return A
if(A.luminance()>=z.luminance()){A=x.darken(A,0.05)}
else{A=x.lighten(A,0.05)}}}
else{var D=w.contrast(z,x.white),E=w.contrast(z,x.black)
for(;;){C++
if(w.contrast(z,A)>=(B-0.5)||C>=y)return A
if(A.luminance()>=z.luminance()){if(D>=(B-0.5)){A=x.lighten(A,0.05)}
else if(E>=(B-0.5)){A=x.darken(A,0.05)}
else{return D>E?x.getChromaObj(x.white):x.getChromaObj(x.black)}}
else{if(E>=(B-0.5)){A=x.darken(A,0.05)}
else if(D>=(B-0.5)){A=x.lighten(A,0.05)}
else{return D>E?x.getChromaObj(x.white):x.getChromaObj(x.black)}}}}}
x.getContrastColor=function(z,A,B,C,D,E,F){z=x.getChromaObj(z)
A=x.getChromaObj(A)
B=x.getChromaObj(B)
if(!z||!A||!B)return
var G=z.luminance()
if(D==='bright'){if(G<C){return A}
else{return x.getColorAtContrast(z,B,F?F:2.5)}}
else if(D==='dark'){if(G>C){return B}
else{return x.getColorAtContrast(z,A,E?E:4.5)}}}
x.isHexColor=function(z){if(typeof z=='string'&&/^#[0-9A-F]{3}([0-9A-F]{3})?$/i.test(z)){return !0}
else{return !1}}
x.getChromaObj=function(z){if(x.isHexColor(z)){return w.hex(z)}
else if(z instanceof w.constructor){return z}
else{return !1}}
x.rgbaColor=function(z,A){z=x.getChromaObj(z)
if(!z)return
if(typeof A=='undefined'){A=1}
else{A=parseFloat(A)
if(isNaN(A)||A>1)A=1
if(A<0)A=0}
return 'rgba('+x.toRGB(z).join(',')+','+A+')'}
x.toRGB=function(z){z=x.getChromaObj(z)
if(!z)return
var A=z.rgb()
A[0]=parseInt(A[0],10)
A[1]=parseInt(A[1],10)
A[2]=parseInt(A[2],10)
return A}
if((typeof x==='function')&&x.prototype&&!x.__jx__no_fqname){x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","meshim_widget_utils_Color"].join('')
x.prototype.__jx__fqname="meshim_widget_utils_Color"}
return x})()
b.__$$__meshim_common_ChainedValueDataNode=(function(){var w=b.__$$__jx_data_DataNode
function x(){var A=[].slice.call(arguments)
if(A.length<1)throw 'Invalid chain: <empty>'
var B=null
if(typeof (A[A.length-1])==='string')B=A.pop()
w.call(this,'chained$value')
this._chain=A
this._default_primitive=B
this._leafNodeValueCheck=z(this._leafNodeValueCheck,this)}
var y=x.prototype=e(w.prototype)
y.bindValue=function(){if(this.listeners_value.length===0)for(var A=this._chain.length;A--;)this._chain[A].bindValue(this._leafNodeValueCheck)
w.prototype.bindValue.apply(this,arguments)}
y.unbindValue=function(){w.prototype.unbindValue.apply(this,arguments)
if(this.listeners_value.length===0)for(var A=this._chain.length;A--;)this._chain[A].unbindValue(this._leafNodeValueCheck)}
y.getChainedValue=function(){for(var A=0,B=this._chain.length;A<B;A++){var C=this._chain[A].getValue()
if(C)return C}
return this._default_primitive}
y._leafNodeValueCheck=function(){this.update(this.getChainedValue())}
function z(A,B){return function(){A.apply(B,arguments)}}
if((typeof x==='function')&&x.prototype&&!x.__jx__no_fqname){x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","meshim_common_ChainedValueDataNode"].join('')
x.prototype.__jx__fqname="meshim_common_ChainedValueDataNode"}
return x})()
b.__$$__meshim_common_GeoAccess=(function(){var w=b.__$$__meshim_common_ArrayUtils,x=/^([a-z][a-z0-9]*)(:[0-9]+)?$/i
function y(A,B,C){this.CLUSTERS=A.CLUSTERS
this.NEAR_MAP=A.NEAR_MAP
this.FALLBACKS=A.FALLBACKS
this.geo_code=B||'geo'
this.cluster_hosts=[]
this.priority_hosts=[]
this.host_list=[]
this.host_index=0
this.addPriorityHosts(C)
this.init()}
var z=y.prototype
z.init=function A(){var B=(this.geo_code&&(this.geo_code in this.NEAR_MAP))?this.NEAR_MAP[this.geo_code]:this.NEAR_MAP.DEFAULT
if(!B){throw 'Error: no cluster code found for '+this.geo_code}
if(B in this.CLUSTERS){this.cluster_hosts=this.cluster_hosts.concat(w.shuffle(this.CLUSTERS[B]))}
else if(this.priority_hosts.length<=0){throw 'Error: '+B+' has no cluster definition'}
else;
if(B in this.FALLBACKS){var C=this.FALLBACKS[B]
for(var D=0,E=C.length;D<E;D++){var F=C[D]
if(!(F in this.CLUSTERS))continue
this.cluster_hosts=this.cluster_hosts.concat(w.shuffle(this.CLUSTERS[F]))}}
this._makeHostList()}
z.addPriorityHosts=function A(B){if(!g(B))B=[B]
var C=[]
for(var D=0,E=B.length;D<E;D++){var F=B[D]
if(F&&x.test(F))C.push(F)}
this.priority_hosts=C.concat(this.priority_hosts)
this._makeHostList()}
z._makeHostList=function A(){this.host_list=this.priority_hosts.concat(this.cluster_hosts)
this.host_index=0}
z.getHostList=function A(){return this.host_list}
z.getNextHost=function A(){if(this.host_index>=this.host_list.length)return ''
return this.host_list[this.host_index++]}
z.hasNext=function A(){return (this.host_index<this.host_list.length)}
z.rewind=function A(){this.host_index=0}
if((typeof y==='function')&&y.prototype&&!y.__jx__no_fqname){y.prototype.__jx__fqname_chain=[(y.prototype.__jx__fqname_chain||"")," ","meshim_common_GeoAccess"].join('')
y.prototype.__jx__fqname="meshim_common_GeoAccess"}
return y})()
b.__$$__meshim_common_Graphic=(function(){var w={parseViewBox:z,parseShadow:A,detectedGraphicType:B(),getGradColors:C,parseCanvasData:H,CanvasData:I,generateVmlLinearGradient:E,generateSvgLinearGradient:F,generateCanvasGradient:P,generate_drawing_function:G,generateRectPath:Q,createVMLNode:y},x=b.__$$__meshim_common_Color
function y(U,V){if(!U._vmlstyled){var W=U.createElement('style')
W.setAttribute("type","text/css")
W.styleSheet.cssText="v\\:*{behavior:url(#default#VML); display: inline-block;} .vml{behavior:url(#default#VML); display: inline-block;}"
U.getElementsByTagName('head')[0].appendChild(W)
W=null
U._vmlstyled=!0}
return U.createElement('<'+V+' xmlns="urn:schemas-microsoft.com:vml">')}
function z(U){var V=U.split(/\s+/)
if(V.length!==4)throw ('bad viewBox: '+U)
for(var W=0;W<4;W++){V[W]=parseInt(V[W],10)
if(isNaN(V[W]))throw ('bad viewBox: '+U)}
return {x:V[0],y:V[1],width:V[2],height:V[3]}}
function A(U){var V=U.split(' ')
return {offsetX:parseInt(V[0],10),offsetY:parseInt(V[1],10),blurRadius:parseInt(V[2],10),color:V[3],opacity:parseFloat(V[4]),rgba:'rgba('+x(V[3]).toArray().join(',')+','+V[4]+')'}}
function B(){var U=document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure","1.1"),V=document.createElement('canvas').getContext
if(V)return 'canvas'
else if(document.createElementNS&&U)return 'svg'
else if(p.isIE)return 'vml'
else return 'none'}
function C(U){var V=/from\(([^)]+\){0,1})\)/.exec(U),W=/to\(([^)]+\){0,1})\)/.exec(U),X=[]
if(V)X.push({stop:'0%',color:new x(V[1])})
U.replace(/color-stop\(([^)]+\){0,1})\)/g,function(Y,Z){Z=D(Z)
X.push({stop:Z.substring(0,Z.indexOf(' ')),color:new x(Z.substring(Z.indexOf(' ')))})})
if(W)X.push({stop:'100%',color:new x(W[1])})
return X}
function D(U){return U.replace(/,/g,' ').replace(/\s+/g,' ').replace(/^\s+|\s+$/,'')}
function E(U,V){V=D(V)
var W=V.split(' '),X,Y,Z,$$,$_=[]
X=W.shift()
switch(W[0]){case 'left':W.shift()
Y='270'
break
case 'top':W.shift()
Y='180'
break
case 'right':W.shift()
Y='90'
break
case 'bottom':W.shift()
Y='0'
break
default:Y=$d.apply(null,W.splice(0,4))
break}
Z=C(V)
for(var $a=0,$b=Z.length;$a<$b;$a++){$$=Z[$a]
$_.push($$.stop+' '+$$.color.toStrRGB())}
var $c=w.createVMLNode(U,'fill')
$c.className='vml'
$c.setAttribute('on','true')
$c.setAttribute('type','gradient')
$c.setAttribute('angle',Y)
$c.setAttribute('colors',$_.join(','))
$c.setAttribute('method','sigma')
if($$&&$$.color.alpha!==1){$c.setAttribute('opacity',$$.color.alpha)}
function $d($e,$f,$g,$h){for(var $i=0;$i<arguments.length;$i++)arguments[$i]=parseFloat(arguments[$i])
var $j=($h-$f)/($g-$e)
return Math.round(270-Math.atan($j)*180/Math.PI)}
return $c}
function F(U,V){V=V.replace(/,/g,' ').replace(/\s+/g,' ').replace(/^\s+|\s+$/,'')
var W=V.split(' '),X,Y
X=W.shift()
switch(W[0]){case 'left':W.shift()
Y='0% 0% 100% 0%'.split(' ')
break
case 'top':W.shift()
Y='0% 0% 0% 100%'.split(' ')
break
case 'right':W.shift()
Y='100% 0% 0% 0%'.split(' ')
break
case 'bottom':W.shift()
Y='0% 100% 0% 0%'.split(' ')
break
default:Y=W.splice(0,4)}
var Z=U.createElementNS('http://www.w3.org/2000/svg','linearGradient'),$$='grad_'+new Date().getTime()+Math.round(Math.random()*1001)
Z.setAttribute('id',$$)
Z.setAttribute('x1',Y[0])
Z.setAttribute('y1',Y[1])
Z.setAttribute('x2',Y[2])
Z.setAttribute('y2',Y[3])
Z.setAttribute('gradientUnits','objectBoundingBox')
var $_=C(V),$a,$b
for(var $c=0;$c<$_.length;$c++){$a=$_[$c].split(' ')
$b=U.createElementNS('http://www.w3.org/2000/svg','stop')
$b.setAttribute('offset',$a[0])
$b.setAttribute('stop-color',$a[1])
Z.appendChild($b)}
return Z}
function G(U){U=U.replace(/[A-Za-z]/g,' $& ').replace(/,/g,' ').replace(/-/g,' -').replace(/\s+/g,' ').replace(/^\s+|\s+$/g,'')
var V=U.split(' '),W=[0,0],X='ctx.beginPath();',Y={M:'moveTo',L:'lineTo',C:'bezierCurveTo',Z:'closePath'}
for(var Z=0,$$=V.length;Z<$$;Z++){if(!/^[A-Za-z]/.test(V[Z])){V[Z]=parseFloat(V[Z])
if(isNaN(V[Z]))throw 'Bad path after '+V.slice(0,Z).join(' ')}}
var $_='',$a=[],$b={x:[],y:[]}
while(V.length){if(/^[A-Za-z]/.test(V[0])){$_=V.shift()}
switch($_){case ('M'):$a=V.splice(0,2)
$f($a)
X+=$e('M',$a)
W=$a
break
case ('m'):$a=$d(V.splice(0,2))
X+=$e('M',$a)
W=$a
break
case ('Z'):case ('z'):X+=$e('Z',[])
break
case ('l'):$a=$d(V.splice(0,2))
X+=$e('L',$a)
W=$a
break
case ('L'):$a=V.splice(0,2)
$f($a)
X+=$e('L',$a)
W=$a
break
case ('c'):$a=$d(V.splice(0,6))
X+=$e('C',$a)
W=[$a[4],$a[5]]
break
default:throw ("unknown canvas' command: "+$_)}}
var $c=new Function('ctx',X)
$c.bBox={minX:Math.min.apply(null,$b.x),minY:Math.min.apply(null,$b.y),maxX:Math.max.apply(null,$b.x),maxY:Math.max.apply(null,$b.y)}
return $c
function $d($i){for(var $j=0,$k=$i.length;$j<$k;$j++)$i[$j]=$i[$j]+($j%2?W[1]:W[0])
$f($i)
return $i}
function $e($i,$j){var $k='ctx.'+Y[$i]+'('+$j.join(',')+');'
return $k}
function $f($i){if($i.length==2){$b.x.push($i[0])
$b.y.push($i[1])}
else if($i.length==6){var $j=$g(W.concat($i))
$b.x.push($j.minX,$j.maxX)
$b.y.push($j.minY,$j.maxY)}
else{throw ('problem with updateBBox')}}
function $g($i){var $j=$i[0],$k=$i[1],$l=$i[2],$m=$i[3],$n=$i[4],$o=$i[5],$p=$i[6],$q=$i[7],$r=[$j,$p].concat($h($j,$l,$n,$p)),$s=[$k,$q].concat($h($k,$m,$o,$q))
return {minX:Math.min.apply(null,$r),minY:Math.min.apply(null,$s),maxX:Math.max.apply(null,$r),maxY:Math.max.apply(null,$s)}}
function $h($i,$j,$k,$l){var $m=[],$n=[],$o,$p,$q
if(($i-3*$j+3*$k-$l)!==0){$p=(Math.sqrt(-$i*$k+$i*$l+$j*$j-$j*$k-$j*$l+$k*$k)-$i+2*$j-$k)/(-$i+3*$j-3*$k+$l)
$q=(-Math.sqrt(-$i*$k+$i*$l+$j*$j-$j*$k-$j*$l+$k*$k)-$i+2*$j-$k)/(-$i+3*$j-3*$k+$l)
$m.push($p,$q)}
else if(($i-3*$j+3*$k-$l)===0&&($i-2*$j+$k)!==0){$o=($i-$j)/(2*($i-2*$j+$k))
$m.push($o)}
for(var $r=0;$r<$m.length;$r++){$o=$m[$r]
if($o<0||$o>1)continue
$n.push(Math.pow(1-$o,3)*$i+3*(1-$o)*(1-$o)*$o*$j+3*(1-$o)*$o*$o*$k+$o*$o*$o*$l)}
return $n}}
function H(U){var V=new I(U)
q.extend(V)
W(V,'ignore-id')
function W(X,Y){X=new X.constructor(X,V)
if(X.id&&!Y)v.set(X.id,X)
if(X.attributes)X.setAttributes(X.attributes)
if(X.childrens)for(var Z=0,$$=X.childrens.length;Z<$$;Z++)X.childrens[Z]=W(X.childrens[Z])
return X}
return V}
function I(U,V){if(!U)U={}
this.id=U.id
if(V)this.root=V
this.attributes=U.attributes
this.childrens=U.childrens}
I.prototype.setAttribute=function(U,V){this.attributes[U]=N(U,V)
this.refresh()
return this}
I.prototype.setAttributes=function(U){for(var V in U)if(U.hasOwnProperty(V)){var W='set'+M(V)
if(typeof this[W]=='function'){this[W](U[V])}}}
I.prototype.refresh=function(){this.root?this.root.fire('update'):this.fire('update')
return this}
I.prototype.getAttribute=function(U){return this.attributes[U]}
I.prototype.destroy=function(){if(this.id)v.unset(this)
this.root=null
var U=this.childrens
if(U){for(var V=0,W=U.length;V<W;V++){if(U[V] instanceof I)U[V].destroy()}}}
var J='opacity fill stroke strokeWidth d path shadow viewBox'.split(' ')
for(var K=0;K<J.length;K++){var L=J[K]
I.prototype['set'+M(L)]=(function(U){return function(V){return this.setAttribute(U,V)}})(L)}
function M(U){return U.replace(/^\w/,function(V){return V.toUpperCase()})}
function N(U,V){switch(U){case 'viewBox':return z(V)
case 'path':return G(V)
case 'fill':return O(V)
case 'shadow':return A(V)
default:return V}}
function O(U){U=U.replace(/^\s+|\s+$/g,'').replace(/,/g,' ').replace(/\s+/g,' ')
if(/linear/.test(U))return function(V,W){return P(U,V,W)}
else return function(){return U}}
function P(U,V,W){U=U.replace(/,/g,' ').replace(/\s+/g,' ')
var X=U.split(' '),Y,Z
Z=X.shift()
switch(X.shift()){case 'left':Y=V.createLinearGradient(W.minX,W.minY,W.maxX,W.minY)
break
case 'top':Y=V.createLinearGradient(W.minX,W.minY,W.minX,W.maxY)
break
case 'right':Y=V.createLinearGradient(W.maxX,W.minY,W.minX,W.minY)
break
case 'bottom':Y=V.createLinearGradient(W.minX,W.maxY,W.minX,W.minY)
break}
var $$=C(U),$_
for(var $a=0;$a<$$.length;$a++){$_=$$[$a]
if($_.stop.indexOf('%')>-1)$_.stop=parseFloat($_.stop)/100
else $_.stop=parseFloat($_.stop)
Y.addColorStop($_.stop,$_.color.toStrRGBA())}
return Y}
function Q(U){var V=R(U)
if(U.border){var W={},X=U.border
for(var Y in U)if(U.hasOwnProperty(Y))W[Y]=U[Y]
W.x+=X
W.y+=X
W.width-=2*X
W.height-=2*X
if(W.rx)W.rx=Math.max(W.rx-X,1)
if(W.ry)W.ry=Math.max(W.ry-X,1)
V+=R(W,'CCW')}
return V}
function R(U,V){var W=U.rx,X=U.ry,Y=U.width,Z=U.height,$$=U.x,$_=U.y,$a=Math.round($_+Z/2),$b=''
if(!W&&!X){if(V)Z=-Z
$b=T('M',$$,$a)+T('l',0,V?($_-Z-$a):($_-$a))+T('l',Y,0)+T('l',0,Z)+T('l',-Y,0)+'z'}
else{var $c=0.5522848*W,$d=0.5522848*X,$e=Y-2*W,$f=Z-2*X
if(V)$b=T('M',$$+Y,$_+X)+(U.corner2?S(-W,-X,$c,$d,1):T('l',0,-X,-W,0))+T('l',-$e,0)+(U.corner1?S(-W,X,$c,$d,1):T('l',-W,0,0,X))+T('l',0,$f)+(U.corner4?S(W,X,$c,$d,1):T('l',0,X,W,0))+T('l',$e,0)+(U.corner3?S(W,-X,$c,$d,1):T('l',W,0,0,-X))+'z'
else $b=T('M',$$,$_+X)+(U.corner1?S(W,-X,$c,$d):T('l',0,-X,W,0))+T('l',$e,0)+(U.corner2?S(W,X,$c,$d):T('l',W,0,0,X))+T('l',0,$f)+(U.corner3?S(-W,X,$c,$d):T('l',0,X,-W,0))+T('l',-$e,0)+(U.corner4?S(-W,-X,$c,$d):T('l',-W,0,0,-X))+'z'}
return $b}
function S(U,V,W,X,Y){var Z=U>0?1:-1,$$=V>0?1:-1,$_=Y?-Z*$$:Z*$$,$a=($_==1)?Z*W:0,$b=($_==1)?0:$$*X,$c=($_==1)?U:U-Z*W,$d=($_==1)?V-$$*X:V
return T('c',$a,$b,$c,$d,U,V)}
function T(U){var V=' ',W=Array.prototype.slice.apply(arguments)
if(typeof W[0]=='string'&&/^[A-Za-z]$/.test(W[0])){V+=U
W.shift()}
for(var X=0,Y=W.length;X<Y;X++)V+=Math.round(W[X])+' '
return V}
if((typeof w==='function')&&w.prototype&&!w.__jx__no_fqname){w.prototype.__jx__fqname_chain=[(w.prototype.__jx__fqname_chain||"")," ","meshim_common_Graphic"].join('')
w.prototype.__jx__fqname="meshim_common_Graphic"}
return w})()
b.__$$__meshim_widget_controllers_DOMStorage=(function(){var w=b.__$$__jx_data_JSON,x={},y=window,z=y.document,A='localStorage',B='__storejs__',C
x.disabled=!1
x.set=function(){}
x.get=function(){}
x.remove=function(){}
x.clear=function(){}
x.transact=function(K,L,M){var N=x.get(K)
if(M==null){M=L
L=null}
if(typeof N=='undefined'){N=L||{}}
M(N)
x.set(K,N)}
x.getAll=function(){}
x.serialize=function(K){return w.stringify(K)}
x.deserialize=function(K){if(typeof K!='string'){return a}
try {return w.parse(K)}catch(L){return K||a}}
function D(){try {return (A in y&&y[A])}catch(K){return !1}}
if(D()){C=y[A]
x.set=function(K,L){if(L===a){return x.remove(K)}
C.setItem(K,x.serialize(L))
return L}
x.get=function(K){return x.deserialize(C.getItem(K))}
x.remove=function(K){C.removeItem(K)}
x.clear=function(){C.clear()}
x.getAll=function(){var K={}
for(var L=0;L<C.length;++L){var M=C.key(L)
K[M]=x.get(M)}
return K}}
else if(z.documentElement.addBehavior){var E,F
try {F=new window.ActiveXObject('htmlfile')
F.open()
F.write('<s'+'cript>document.w=window</s'+'cript><iframe src="/favicon.ico"></frame>')
F.close()
E=F.w.frames[0].document
C=E.createElement('div')}catch(K){C=z.createElement('div')
E=z.body}
function G(K){return function(){try {var L=Array.prototype.slice.call(arguments,0)
L.unshift(C)
E.appendChild(C)
C.addBehavior('#default#userData')
C.load(A)
var M=K.apply(x,L)
E.removeChild(C)
return M}catch(N){;}}}
var H=new RegExp("[!\"#$%&'()*+,/\\\\:;<=>?@[\\]^`{|}~]","g")
function I(K){return K.replace(H,'___')}
x.set=G(function(K,L,M){L=I(L)
if(M===a){return x.remove(L)}
K.setAttribute(L,x.serialize(M))
K.save(A)
return M})
x.get=G(function(K,L){L=I(L)
return x.deserialize(K.getAttribute(L))})
x.remove=G(function(K,L){L=I(L)
K.removeAttribute(L)
K.save(A)})
x.clear=G(function(K){var L=K.XMLDocument.documentElement.attributes
K.load(A)
for(var M=0,N;N=L[M];M++){K.removeAttribute(N.name)}
K.save(A)})
x.getAll=G(function(K){var L=K.XMLDocument.documentElement.attributes,M={}
for(var N=0,O;O=L[N];++N){var P=I(O.name)
M[O.name]=x.deserialize(K.getAttribute(P))}
return M})}
try {x.set(B,B)
if(x.get(B)!=B){x.disabled=!0}
x.remove(B)}catch(K){x.disabled=!0}
x.enabled=!x.disabled
var J=x
if((typeof J==='function')&&J.prototype&&!J.__jx__no_fqname){J.prototype.__jx__fqname_chain=[(J.prototype.__jx__fqname_chain||"")," ","meshim_widget_controllers_DOMStorage"].join('')
J.prototype.__jx__fqname="meshim_widget_controllers_DOMStorage"}
return J})()
b.__$$__jx_ui_HTMLElement=(function(){var w=b.__$$__jx_ui_HTMLEvent
if(p.isIE)document.execCommand('BackgroundImageCache',!1,!0)
var x='background background-position border border-color border-style border-width color border-top border-right border-bottom border-left clear padding margin margin-top margin-right margin-bottom margin-left display line-height letter-spacing visibility outline overflow overflow-x overflow-y font-family font-size font-weight font-style text-align text-decoration text-transform vertical-align z-index cursor min-height min-width max-height max-width'.split(' '),y='title checked href media name src target'.split(' '),z=p.bugs.ie.cssFixed
function A(I){return (function(J){try {this.dom.style[I]=J}catch(K){;}
return this})}
function B(I){return (function(J){this.dom.setAttribute(I,J)
return this})}
function C(I){return (i(I)&&I.substr(I.length-1)=='%')?parseInt(I,10)+'%':parseInt(I,10)}
function D(){if(D.alreadyHacked)return
D.alreadyHacked=1
if(p.isStrict){document.body.parentNode.style.background='#fff url(https://) fixed'
document.body.className=document.body.className}
else{if(document.body.currentStyle.backgroundAttachment!='fixed'){if(document.body.currentStyle.backgroundImage!='none'){var I=document.createElement('div'),J=I.style,K=document.body.currentStyle,L=!1,M=0,N,O
J.backgroundAttachment=K.backgroundAttachment
J.backgroundColor=K.backgroundColor
J.backgroundImage=K.backgroundImage
J.backgroundPositionX=K.backgroundPositionX
J.backgroundPositionY=K.backgroundPositionY
J.backgroundRepeat=K.backgroundRepeat
J.position='absolute'
J.zIndex=-1
J.top=J.left=0
J.width='100%'
document.body.insertBefore(I,document.body.firstChild)
var P=function(){if(!L&&M){N+=document.body.clientWidth-M
J.width=N+'px'
M=document.body.clientWidth}
if(O)return
O=setTimeout(function(){J.width=0
document.body.className=document.body.className
N=Math.max(document.body.scrollWidth,document.body.clientWidth)
J.width=N+'px'
M=document.body.clientWidth
L=document.body.scrollWidth>document.body.clientWidth
O=null},0)}
setTimeout(P,0)
J.setExpression('height','document.body.scrollHeight+"px"')
P()}
document.body.style.backgroundImage='url(https://)'
document.body.style.backgroundAttachment='fixed'}}}
function E(I){I=I.split(/[^a-zA-Z0-9]/)
for(var J=1;J<I.length;J++)if(I[J].length)I[J]=I[J].substr(0,1).toUpperCase()+I[J].substr(1)
return I.join('')}
function F(I){while(I.defaultPlacement)I=I.defaultPlacement
return I}
function G(I,J,K,L,M){if(!(this instanceof G))return new G(I,J,K,L,M)
if(!I){return}
if(!M){M={}}
this.jx_id=J=J||v.generateID()
this._top=this._bottom=this._left=this._right=this._width=this._height=NaN
this._position=null
this.pos=''
this.offsetx=0
this.offsety=0
this._snaps=[0,0,0,0]
this.useDisplay=!1
this.doc=this.ownerDocument=I.ownerDocument
this.parentNode=I
this.attributes=M
this.tagName=M.tagName
this.isNew=!0
this.dom=this.doc.createElement(this.tagName)
this.dom.jx_wrapper=this
this.style=this.dom.style
this.children=[]
this._autobinds=[]
w.call(this)
L&&this.addChildren(L)
I.appendChild(I instanceof G?this:this.dom)
this.setStyle(K)
this.setAttributes(M)
this.__jx__fqname&&this.addClass(this.__jx__fqname)
J&&v.set(J,this)}
G.prototype=e(w.prototype)
G.prototype.addChildren=function(I){var J=I&&I.length
if(!I||!J)return
var K=F(this),L,M=K.ownerDocument,N
for(var O=0;O<J;O++){L=I[O]
if(g(L))K.appendChild(L)
else{N=M.createTextNode(L)
K.appendChild(N)
if(typeof L.bind=='function')L.bind(N)}}}
G.prototype.appendChild=function(I){if(g(I)){return I[0](this,I[1],I[2],I[3],I[4])}
if(f(I,this.children)==-1&&I.nodeType!=3)this.children.push(I)
if(I.parentNode&&I.parentNode!=this)I.parentNode.removeChild(I.parentNode instanceof G?I:(I.dom||I))
I.dom&&(I.parentNode=this)
this.dom.appendChild(I.dom||I)
return I}
G.prototype.removeChild=function(I){try {if(I.dom){this.dom.removeChild(I.dom)
I.parentNode=null}
else this.dom.removeChild(I)
var J=f(I,this.children)
if(J!=-1)return this.children.splice(J,1)}catch(K){;}}
G.prototype.insertBefore=function(I,J){var K=f(J,this.children)
if(J&&K==-1){J=null}
if(I.parentNode){var L=f(I,this.children)
if(L!=-1){this.children.splice(L,1)
if(K>L)K--}
else{I.parentNode.removeChild(I)}}
I.dom&&(I.parentNode=this)
if(!J)this.children.push(I)
else this.children.splice(K,0,I)
this.dom.insertBefore(I.dom||I,J?(J.dom||J):null)}
G.prototype.insertAfter=function(I,J){this.insertBefore(I,J&&J.getNextSibling())}
G.prototype.prependTo=function(){}
G.prototype.cloneNode=function(I){return this.dom.cloneNode(I)}
G.prototype.getNextSibling=function(){return this.dom.nextSibling&&this.dom.nextSibling.jx_wrapper}
G.prototype.getPreviousSibling=function(){return this.dom.previousSibling&&this.dom.previousSibling.jx_wrapper}
G.prototype.getFirstChild=function(){return this.dom.firstChild&&this.dom.firstChild.jx_wrapper}
G.prototype.getLastChild=function(){return this.dom.lastChild&&this.dom.lastChild.jx_wrapper}
G.prototype.getText=function(){return this.dom.innerText||this.dom.textContent||''}
G.prototype.setText=function(I){if(!this.dom)return
u&&u.unbind&&u.unbind(this.dom)
if(I&&typeof I.bind=='function')I.bind(this.dom)
if(typeof document.body.textContent!='undefined')this.dom.textContent=I
else this.dom.innerText=I
return this}
G.prototype.getHTML=function(){return this.dom.innerHTML}
G.prototype.setHTML=function(I){this.dom.innerHTML=I
return this}
G.prototype.destroy=function(){if(this._destructors){for(var I=this._destructors,J=I.length,K=0;K<J;K++)I[K].call(this)}
this._autobinds&&this.autounbind()
this.dom.jx_wrapper=null
typeof this.empty=='function'&&this.empty()
this.parentNode&&this.parentNode.removeChild(this.parentNode instanceof G?this:this.dom)
this.parentNode=null
v.unset(this)}
G.prototype.empty=function(){var I
while(this.children.length){I=this.children.pop()
if(typeof I.destroy=='function')I.destroy()
else if(I.nodeType==1)v.proto.destroy.call(I)}}
G.prototype.onDestruction=function(I){(this._destructors||(this._destructors=[])).push(I)}
G.prototype.getClassName=G.prototype.getClass=function(){return this.dom.className}
G.prototype.setClassName=G.prototype.setClass=function(I,J){this.dom.className=(J?I:this.__jx__fqname+' '+I)+(this._pseudo?' '+this._pseudo:'')
return this}
G.prototype.setAddClass=G.prototype.addClass=function(I){if(!I)return this
if(this.dom.className){if(!this.hasClass(I)){this.dom.className+=' '+I}}
else{this.dom.className=I}
return this}
G.prototype.removeClass=function(I){if(!I||!this.dom.className||!this.hasClass(I))return this
this.dom.className=(' '+this.dom.className+' ').replace(' '+I+' ',' ').slice(1,-1)
return this}
G.prototype.hasClass=function(I){return !!I&&!!this.dom.className&&(' '+this.dom.className+' ').indexOf(' '+I+' ')!=-1}
G.prototype.autobind=function(I,J,K){if(!this._autobinds){return}
this._autobinds.push([I,J,K])
I.on(J,K)}
G.prototype.autounbind=function(I,J,K){if(!this._autobinds){return}
var L=this._autobinds,M,N
if(I&&J&&K){for(M=L.length-1;M>=0;M--){N=L[M]
if(N[0]==I&&N[1]==J&&N[2]==K){L.splice(M,1)
N[0].un(N[1],N[2])
return}}
return}
if(!I&&!J&&!K){if(!L)return
for(M=L.length-1;M>=0;M--){N=L[M]
N[0].un(N[1],N[2])}
delete this._autobinds
return}}
G.prototype.getAttribute=function(I){return this.dom.getAttribute(I)||this.dom[I]}
G.prototype.setAttribute=function(I,J){this.dom.setAttribute(I,J)
return this}
G.prototype.removeAttribute=function(I){this.dom.removeAttribute(I)
return this}
G.prototype.setAttributes=function(I){var J,K
for(K in I)if(I.hasOwnProperty(K)){J='set'+K.substr(0,1).toUpperCase()+K.substr(1)
if(typeof this[J]=='function')this[J](I[K])}
return this}
G.prototype.getStyle=function(I){return this.dom.style[E(I)]}
G.prototype.getComputedStyle=function(I){I=I&&E(I)
var J
if(window.getComputedStyle)J=window.getComputedStyle(this.dom,null)
else if(this.dom.currentStyle)J=this.dom.currentStyle
else return
return I?J[I]:J}
G.prototype.setStyle=function(I){var J,K
if(arguments.length==1&&i(I)){if(!I)return this
I=I.split(';')
for(J=0;J<I.length;J++){if(I[J].match(/^\s*$/))continue
K=I[J].match(/\s*([^:]+):\s*(.*?)\s*$/)
if(!K&&I[J].length){continue}
this.setOneStyle(K[1],K[2])}}
else if(arguments.length==1&&typeof (I)=='object'){for(var L in I)if(I.hasOwnProperty(L))this.setOneStyle(L,I[L])}
else if(arguments.length>1){for(J=0;J<arguments.length;J+=2)this.setOneStyle(arguments[J],arguments[J+1])}
return this}
G.prototype.setOneStyle=function(I,J){var K=E('set-'+I)
if(typeof this[K]=='function')this[K](J)
else this.setCSSStyle(I,J)
return this}
G.prototype.setCSSStyle=function(I,J){try {this.dom.style[E(I)]=J}catch(K){;}
return this}
G.prototype.getScrollWidth=function(){return this.dom.scrollWidth}
G.prototype.getScrollHeight=function(){return this.dom.scrollHeight}
G.prototype.getClientWidth=function(){return this.dom.clientWidth}
G.prototype.getClientHeight=function(){return this.dom.clientHeight}
G.prototype.getTop=function(){return this.dom.offsetTop}
G.prototype.getLeft=function(){return this.dom.offsetLeft}
G.prototype.getWidth=function(){return this.dom.offsetWidth}
G.prototype.getHeight=function(){return this.dom.offsetHeight}
G.prototype.setTop=function(I){this._top=C(I)
this.solveConstraints()
return this}
G.prototype.setLeft=function(I){this._left=C(I)
this.solveConstraints()
return this}
G.prototype.setBottom=function(I){this._bottom=C(I)
this.solveConstraints()
return this}
G.prototype.setRight=function(I){this._right=C(I)
this.solveConstraints()
return this}
G.prototype.setWidth=function(I){this._width=C(I)
this.solveConstraints()
return this}
G.prototype.setHeight=function(I){this._height=C(I)
this.solveConstraints()
return this}
G.prototype.getScrollLeft=function(){return this.dom.scrollLeft}
G.prototype.setScrollLeft=function(I){this.dom.scrollLeft=I
return this}
G.prototype.getScrollTop=function(){return this.dom.scrollTop}
G.prototype.setScrollTop=function(I){this.dom.scrollTop=I
return this}
G.prototype.setFloat=function(I){var J=this
if(u&&u.onLanguage&&!this._onLanguageFloat){u.onLanguage&&u.onLanguage(K)
this.onDestruction(function(){u.unLanguage&&u.unLanguage(K)})
this._onLanguageFloat=!0}
K()
function K(){var L=(u&&u.flip)?u.flip(I):I
if(p.isIE)J.dom.style.styleFloat=L
else J.dom.style.cssFloat=L}
return this}
G.prototype.solveConstraints=function(){if(!isNaN(this._top)&&!isNaN(this._height))this._bottom=NaN
if(!isNaN(this._left)&&!isNaN(this._width))this._right=NaN;(this._width<0)&&(this._width=0);(this._height<0)&&(this._height=0)
this.applyConstraints()}
G.prototype.applyConstraints=function(){var I=this.dom.style,J=this
if(!v.hasParentNode(this.dom))return
if(p.bugs.ie.cssFixed&&this._position=='fixed'){l(function(){J.dom&&J.hackFixed()})
return}
if(p.bugs.ie.cssBottomRight&&((!isNaN(this._left)&&!isNaN(this._right))||(!isNaN(this._top)&&!isNaN(this._bottom)))){if(this.appendToParent)this.appendToParent(!0)
D()
var K=isNaN(this._left)?'':this._left,L=isNaN(this._right)?'':this._right,M=isNaN(this._width)?'':this._width,N,O=isNaN(this._top)?'':this._top,P=isNaN(this._bottom)?'':this._bottom,Q=isNaN(this._height)?'':this._height,R,S=this.dom.ownerDocument.compatMode=='BackCompat'
if(this._position=='fixed'&&this.dom.ownerDocument==document){if(S){R='document.body.clientHeight'
N='document.body.clientWidth'}
else{R='document.documentElement.clientHeight'
N='document.documentElement.clientWidth'}}
else{R='this.offsetParent.clientHeight'
N='this.offsetParent.clientWidth'}
if(p.isIE6){if(!isNaN(this._left)&&!isNaN(this._right)){L=''
M=[N,this._left,this._right].join('-')}
if(!isNaN(this._top)&&!isNaN(this._bottom)){P=''
Q=[R,this._top,this._bottom].join(' - ')}}
var T=function(W,X){I[W]=''
I.removeExpression(W)
if(typeof (X)=='number')I[W]=X+'px'
else if(i(X)&&X.substr(X.length-1)=='%')I[W]=X
else if(i(X)&&X.length)I.setExpression(W,X)}
T('left',K)
T('right',L)
T('width',M)
T('top',O)
T('bottom',P)
T('height',Q)}
V()
U()
function U(){I.top=i(J._top)?J._top:isNaN(J._top)?'':J._top+'px'
I.bottom=i(J._bottom)?J._bottom:isNaN(J._bottom)?'':J._bottom+'px'
if(J._height!=J.__height){I.height=i(J._height)?J._height:isNaN(J._height)?'':J._height+'px'
J.__height=J._height}}
function V(){I.left=i(J._left)?J._left:isNaN(J._left)?'':J._left+'px'
I.right=i(J._right)?J._right:isNaN(J._right)?'':J._right+'px'
if(J._width!=J.__width){I.width=i(J._width)?J._width:isNaN(J._width)?'':J._width+'px'
J.__width=J._width}}}
G.prototype.hackFixed=function(){var I=this.dom.style
D()
if(this.appendToParent)this.appendToParent(!0)
if(this._bottom<0)this._bottom=0
if(this._right<0)this._right=0
o.ok(isNaN(this._left)!=isNaN(this._right),'One and only one of left/right must be set')
o.ok(isNaN(this._top)!=isNaN(this._bottom),'One and only one of top/bottom must be set')
o.ok(!isNaN(this._width),'Width must be set')
o.ok(!isNaN(this._height),'Height must be set')
o.ok(this.ownerDocument==document,'Fixed element must be top level element')
if(this._height!=this.__height){I.height=this._height+'px'
this.__height=this._height}
if(this._width!=this.__width){I.width=this._width+'px'
this.__width=this._width}
var J=this.getHeight(),K=this.getWidth(),L,M,N,O
if(p.isQuirks){O='document.body.clientHeight'
N='document.body.clientWidth'
L='(dummye34cf6=document.body.scrollLeft)+'
M='(dummye34cf6=document.body.scrollTop )+'}
else{O='document.documentElement.clientHeight'
N='document.documentElement.clientWidth'
L='(dummye34cf6=document.documentElement.scrollLeft)+'
M='(dummye34cf6=document.documentElement.scrollTop )+'}
if(!isNaN(this._left))L+=this._left
else if(i(this._left))L+=parseInt(this._left,10)/100*(p.isQuirks?document.body:document.documentElement).clientWidth
else L+=N+'-'+(K+this._right)
if(!isNaN(this._top))M+=this._top
else if(i(this._top))M+=parseInt(this._top,10)/100*(p.isQuirks?document.body:document.documentElement).clientHeight
else M+=O+'-'+(J+this._bottom)
if(p.isIE6&&document.body.currentStyle.direction=='rtl'){if(p.isQuirks)L+='-(document.body.scrollWidth-document.body.clientWidth)'
else L+='-(document.documentElement.scrollWidth-document.documentElement.clientWidth)'}
I.setExpression('left',L+'+"px"')
I.setExpression('top',M+'+"px"')}
G.prototype.dock=function(I,J,K){this.pos=I
if(j(J))this.offsetx=J
if(j(K))this.offsety=K
this.doDock()
this.on('jx:resize',this.doDock)}
G.prototype.doDock=function(){var I=isNaN(this._width)?this.dom.offsetWidth:this._width,J=isNaN(this._height)?this.dom.offsetHeight:this._height,K,L,M,N,O,P,Q
K=L=M=N=NaN
O=P=Q=0
switch(this.pos.charAt(0)){case 't':K=0
break
case 'm':K='50%'
break
case 'b':L=0
break}
switch(this.pos.charAt(1)){case 'l':M=0
break
case 'c':M='50%'
break
case 'r':N=0
break}
if(K=='50%')O=-(J/2)
if(M=='50%')P=-(I/2)
if(this.offsety>=0||!isNaN(K)||typeof (K)=="string")O+=this.offsety
else Q=-this.offsety
P+=this.offsetx
this.setMargin([O+'px',0,Q+'px',P+'px'].join(' ')).setTop(K).setBottom(L).setLeft(M).setRight(N)}
G.prototype.setBounds=function(I){if(!g(I)){I=I.split(' ')
I[0]=parseInt(I[0],10)
I[1]=parseInt(I[1],10)
I[2]=parseInt(I[2],10)
I[3]=parseInt(I[3],10)}
if(z){I[1]=Math.max(0,I[1])
I[2]=Math.max(0,I[2])}
this._bounds=I
return this}
G.prototype.setSnaps=function(I){if(!g(I)){I=I.split(' ')
I[0]=parseInt(I[0],10)
I[1]=parseInt(I[1],10)
I[2]=parseInt(I[2],10)
I[3]=parseInt(I[3],10)}
this._snaps=[Math.max(0,I[0]),Math.max(0,I[1]),Math.max(0,I[2]),Math.max(0,I[3])]
return this}
G.prototype.applyBounds=function(){if(!this._bounds)return
if(this._left<this._bounds[3]+this._snaps[3])this._left=this._bounds[3]
if(this._right<this._bounds[1]+this._snaps[1])this._right=this._bounds[1]
if(this._top<this._bounds[0]+this._snaps[0])this._top=this._bounds[0]
if(this._bottom<this._bounds[2]+this._snaps[2])this._bottom=this._bounds[2]
var I=p.isQuirks?document.body:document.documentElement,J=isNaN(this._width)?this.dom.offsetWidth:this._width,K=I.clientWidth-J,L=I.clientHeight-this.dom.offsetHeight
if(K-this._left<=this._bounds[1]+this._snaps[1])this._left=K-this._bounds[1]
if(K-this._right<=this._bounds[3]+this._snaps[3])this._right=K-this._bounds[3]
if(L-this._top<=this._bounds[2]+this._snaps[2])this._top=L-this._bounds[2]
if(L-this._bottom<=this._bounds[0]+this._snaps[0])this._bottom=L-this._bounds[0]}
G.prototype.moveTo=function(I,J){this._bottom=this._right=NaN
this._top=J
this._left=I
this.applyBounds()
this.applyConstraints()
return this}
G.prototype.move=function(I,J){if(isNaN(this._left)&&isNaN(this._right))this._left=0
if(isNaN(this._top)&&isNaN(this._bottom))this._top=0
if(!isNaN(this._left))this._left+=I
if(!isNaN(this._right))this._right-=I
if(!isNaN(this._top))this._top+=J
if(!isNaN(this._bottom))this._bottom-=J
this.applyBounds()
this.applyConstraints()}
G.prototype.resizeBy=function(I,J,K,L){if(I){if(isNaN(this._width))this._width=this.dom.offsetWidth
this._width=Math.max(K||0,this._width+I)}
if(J){if(isNaN(this._height))this._height=this.dom.offsetHeight
this._height=Math.max(L||0,this._height+J)}
this.applyBounds()
this.applyConstraints()
this.fire('jx:resize')
return this}
G.prototype.setVisible=function(I){if(I=='none'||I=='block')this.useDisplay=!0
if(I=='none'||I=='hidden'||I=='false'||!I)this.hide()
else this.show()
return this}
G.prototype.isVisible=function(){var I=this.dom.style
if(this.useDisplay)return I.display!='none'
else return I.visibility=='visible'}
G.prototype.show=function(){var I=this.dom.style
if(this.useDisplay){if(I.display!=(this._initialDisplay||'block')){I.display=this._initialDisplay||'block'
this.fire('show')}}
else{if(I.visibility!='visible'){I.visibility='visible'
this.fire('show')}}
return this}
G.prototype.hide=function(){var I=this.dom.style
if(this.useDisplay){if(I.display!='none'){this._initialDisplay=(I.display!='none')&&I.display
I.display='none'
this.fire('hide')}}
else{if(I.visibility!='hidden'){I.visibility='hidden'
this.fire('hide')}}
return this}
G.prototype.toggle=function(){return this.isVisible()?this.hide():this.show()}
G.prototype.getXY=function(){var I,J,K=this.dom.offsetParent
I=this.dom.offsetLeft
J=this.dom.offsetTop
while(K){I+=K.offsetLeft
J+=K.offsetTop
K=K.offsetParent}
return [I,J]}
G.prototype.getFixedXY=function(){var I,J,K=this.dom,L=this.dom.ownerDocument,M=L.documentElement,N=L.defaultView||K.parentWindow||!1,O={top:0,left:0},P=M.clientTop||0,Q=M.clientLeft||0,R=N.pageYOffset||M.scrollTop,S=N.pageXOffset||M.scrollLeft
if('getBoundingClientRect' in K)O=K.getBoundingClientRect()
J=O.top+R-P
I=O.left+S-Q
return [I,J]}
G.prototype.setOpacity=function(I){I=Math.max(Math.min(I,1),0)
if(p.isIE<9)this.dom.style.filter=(this.dom.style.filter||'').replace(/progid:DXImageTransform.Microsoft.Alpha\([^\)]*\),? ?/gi,'')+(I>=1?'':'progid:DXImageTransform.Microsoft.Alpha(opacity='+I*100+'), ')
else this.dom.style.opacity=I
return this}
G.prototype.setPosition=function(I){switch(I){case 'static':case 'relative':case 'absolute':case 'fixed':this._position=I}
if(this._position!==null)this.setCSSStyle('position',(z&&this._position=='fixed')?'absolute':this._position)
return this}
G.prototype.setBackgroundImage=function(I){var J=I
if(J&&p.isIE)this.dom.style.filter+='progid:DXImageTransform.Microsoft.AlphaImageLoader(src="'+J+'",sizingMethod="scale"), '
else this.dom.style.backgroundImage='url("'+I+'")'
return this}
G.prototype.setRotation=function(I){if(p.isFF)this.dom.style.MozTransform=I?'rotate('+I+'deg)':''
else if(p.isSafari)this.dom.style.WebkitTransform=I?'rotate('+I+'deg)':''
else if(p.isIE){this.dom.style.filter=I?'progid:DXImageTransform.Microsoft.BasicImage(rotation='+Math.round(I/90)+')':''
if(p.isIE8&&I){var J=this.parentNode.getElementsByTagName('iframe')
if(p.isIE8&&J.length){J[0].style.filter=I?'progid:DXImageTransform.Microsoft.BasicImage(rotation='+Math.round(I/90)+')':''
this.dom.style.overflow='visible'}}}
return this}
G.prototype.appendToParent=function(I){if(!v.hasParentNode(this.dom))this.parentNode.appendChild(this.parentNode instanceof G?this:this.dom)
if(this.parentNode==document.body&&(this.style.position=='absolute'||this.style.position=='fixed')){this.parentNode.insertBefore(this.dom,this.parentNode.firstChild)}
if(I&&!this.inDOM){this.parentNode.appendToParent&&this.parentNode.appendToParent(I)
this.inDOM=!0}}
G.prototype.focus=function(){try {this.dom.focus()}catch(I){;}
;
return this}
G.prototype.blur=function(){try {this.dom.blur()}catch(I){;}
;
return this}
G.prototype.click=function(){this.dom.click&&this.dom.click()
return this}
G.prototype.validate=function(I){var J=!0
for(var K=0,L=this.children.length;K<L;K++){var M=this.children[K]
if(M instanceof G&&typeof M.validate=='function')if(!M.validate(I?J:!1))J=!1}
return J}
G.prototype.getSelectable=function(){return this.selectable}
G.prototype.setSelectable=function(I){function J(){return !1}
if(m(I)){this.selectable=!0
this.setStyle('user-select','text')
p.isFF&&this.setStyle('-moz-user-select','text')
p.isWebKit&&this.setStyle('-webkit-user-select','text')
p.isIE>9&&this.setStyle('-ms-user-select','text');(p.isIE<10||p.isOpera)&&this.un('selectstart',J)}
else{this.selectable=!1
this.setStyle('user-select','none')
p.isFF&&this.setStyle('-moz-user-select','none')
p.isWebKit&&this.setStyle('-webkit-user-select','none')
p.isIE>9&&this.setStyle('-ms-user-select','none');(p.isIE<10||p.isOpera)&&this.on('selectstart',J)}
return this}
G.prototype.getDisabled=function(){return this.dom.disabled}
G.prototype.setDisabled=function(I){I=m(I)
for(var J=0,K=this.children.length;J<K;J++)if(this.children[J] instanceof G)this.children[J].setDisabled(I)
this[I?'addClass':'removeClass']('disabled')
this.dom.disabled=I
return this}
G.prototype.getReadOnly=function(){return this.dom.readOnly}
G.prototype.setReadOnly=function(I){I=m(I)
for(var J=0,K=this.children.length;J<K;J++)if(this.children[J] instanceof G)this.children[J].setReadOnly(I)
this.dom.readOnly=I
return this}
G.prototype.getValue=function(){return this.dom.value}
G.prototype.setValue=function(I){this.dom.value=k(I,'allowNull')?'':I
return this}
G.prototype.getType=function(){return this.getAttribute('type')}
G.prototype.setType=function(I){try {this.dom.setAttribute('type',I)}catch(J){;}
return this}
G.prototype.getName=function(){return this.getAttribute('name')}
G.prototype.setName=function(I){return this.setAttribute('name',I)}
G.prototype.getTabIndex=G.prototype.getTabindex=function(){try {return this.dom.tabIndex}catch(I){;}}
G.prototype.setTabIndex=G.prototype.setTabindex=function(I){try {this.dom.tabIndex=I}catch(J){;}
return this}
G.prototype.setPlacement=function(I){if(!I||!this.parentNode||!(this.parentNode instanceof G))return
var J=this.parentNode.getContainer(I)
if(!J)return
if(m(this.attributes.discardPlacement)){while(this.children.length)J.appendChild(this.children[0])
this.destroy()
return}
J.appendChild(J instanceof G?this:this.dom)
return this}
G.prototype.setContainer=function(I){this.attributes.container=I
return this}
G.prototype.getContainer=function(I){if(!I)return
if(this.attributes.container==I)return this
var J,K=this.children.length
for(var L=0;L<K;L++)if(typeof this.children[L].getContainer=='function'){J=this.children[L].getContainer(I)
if(J)return J}
return}
G.prototype.getPseudo=function(){return this._pseudo}
G.prototype.setPseudo=function(I){if(this._pseudo)this.removeClass(I)
this._pseudo=I
if(this._pseudo)this.addClass(I)
return this}
G.prototype.setUseDisplay=function(I){this.useDisplay=m(I)
return this}
G.prototype.getElement=function(I){return v.get(this.jx_id+'__'+I)}
G.prototype.setLabel=function(I){this.label=I
return this}
G.prototype.getLabel=function(){return this.label||''}
for(var H=0;H<x.length;H++)G.prototype[E('set-'+x[H])]=A(E(x[H]))
for(H=0;H<y.length;H++)G.prototype[E('set-'+y[H])]=B(E(y[H]))
G.__jx__no_fqname=!0
if((typeof G==='function')&&G.prototype&&!G.__jx__no_fqname){G.prototype.__jx__fqname_chain=[(G.prototype.__jx__fqname_chain||"")," ","jx_ui_HTMLElement"].join('')
G.prototype.__jx__fqname="jx_ui_HTMLElement"}
return G})()
b.__$$__meshim_common_Sounds=(function(){var w=b.__$$__meshim_common_sounds_AudioTag,x=b.__$$__meshim_common_sounds_FlashSound,y=b.__$$__meshim_common_sounds_BGSoundTag
function z(D){var E
this.url=D
E=new w(D)
if(E.dom)return E
E=new x(D)
if(E.dom)return E
E=new y(D)
if(E.dom)return E}
z.prototype.play=z.prototype.setVolume=z.prototype.setLoop=A
function A(){return this}
var B='/dashboard/sounds/'
function C(D){if(!/\/$/.test(D))D+='/'
this.repo_url=D||B
this.repo={}}
C.prototype.create=function(D,E,F,G){var H=new z(this.repo_url+E)
F&&H.setVolume(F)
G&&H.setLoop(G)
H.title=E
this.repo[D]=H
return this}
C.prototype.getSound=function(D){var E=this.repo[D]
if(E)return E
throw ('you have not created '+D+' sound yet')}
C.prototype.hasSound=function(D){try {this.getSound(D)
return !0}catch(E){return !1}}
C.prototype.setSrc=function(D,E){this.getSound(D).load(B+E)
return this}
C.prototype.getTitle=function(D){this.getSound(D).title}
C.prototype.play=function(D,E){this.getSound(D).play(parseInt(E,10)||0)
return this}
C.prototype.stop=function(D){this.getSound(D).stop()
return this}
C.prototype.setVolume=function(D,E){this.getSound(D).setVolume(E)
return this}
C.prototype.setLoop=function(D,E){this.getSound(D).setLoop(E)
return this}
C.prototype.getLoop=function(D){this.getSound(D).loop}
if((typeof C==='function')&&C.prototype&&!C.__jx__no_fqname){C.prototype.__jx__fqname_chain=[(C.prototype.__jx__fqname_chain||"")," ","meshim_common_Sounds"].join('')
C.prototype.__jx__fqname="meshim_common_Sounds"}
return C})()
b.__$$__meshim_widget_controllers_Cookie=(function(){var w=b.__$$__jx_data_JSON,x={set:E,get:C,getJSONCookie:D,setJSONCookie:F,remove:G},y=window.encodeURIComponent,z=window.decodeURIComponent
function A(H){if(typeof H!='string'||H==='')return !1
return !0}
function B(){var H=document.cookie,I={},J,K,L,M,N
if(typeof H!=='string'||H==='')return {}
H=H.split(/;\s/g)
for(J=0,K=H.length;J<K;J++){try {L=H[J].match(/([^=]+)=/i)
if(L instanceof Array){M=z(L[1])
N=z(H[J].substr(L[1].length+1))}
else{M=z(L)
N=""}
I[M]=N}catch(O){;}
;}
return I}
function C(H){if(!A(H))return null
var I=B()
if(I[H])return I[H]
else return null}
function D(H){var I=C(H),J={}
try {J=w.parse(I)}catch(K){;}
if(!J||typeof J!='object')return {}
else return J}
function E(H,I,J){J=J||{}
var K=y(H)+'='+y(I)
if('ttl' in J){var L=new Date(),M=J.ttl*24*60*60*1000
L.setTime(L.getTime()+M)
K+='; expires='+L.toGMTString()}
if('path' in J)K+='; path='+J.path
if('domain' in J)K+='; domain='+J.domain
if(J.secure)K+='; secure'
document.cookie=K}
function F(H,I,J){if(typeof I!='object')I=={}
E(H,w.stringify(I),J)}
function G(H,I){I=I||{}
I.ttl=-1
E(H,"",I)}
if((typeof x==='function')&&x.prototype&&!x.__jx__no_fqname){x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","meshim_widget_controllers_Cookie"].join('')
x.prototype.__jx__fqname="meshim_widget_controllers_Cookie"}
return x})()
b.__$$__meshim_widget_themes_Base=(function(){var w=b.__$$__meshim_widget_Config,x=b.__$$__meshim_widget_utils_Color,y={}
y._super=null
y.defaults={colors:{primary$string:'#000000',banner$string:'#000000',bubble$string:'#000000'}}
y.overrides={avatars:{concierge$string:w.IMAGES_URL+'/avatar_simple_agent.png',agent$string:w.IMAGES_URL+'/avatar_simple_agent.png',visitor$string:w.IMAGES_URL+'/avatar_simple_visitor.png'},chat_button:{display_status$bool:!1,use_bubble$bool:!1},chat_window:{hide_profile_card$bool:!1,use_banner$bool:!0}}
y.generate=function(){var z={fontFamily:"Verdana, Geneva, sans-serif",fontSizeXS:"10px",fontSizeS:"11px",fontSize:"12px",fontSizeL:"14px",fontSizeXL:"16px",fontSizeXXL:"18px",marginXS:"3px",marginS:"5px",margin:"10px",marginL:"15px",marginXL:"20px",paddingS:"3px",padding:"6px",paddingL:"8px",paddingXL:"10px",borderWidth:"1px",borderStyle:"solid",borderColor:x.black,radiusS:"3px",radius:"5px",headColor:x.white,headBg:x.black,headLowContrastColor:x.grey,contentColor:x.black,contentHeaderColor:x.black,contentBg:x.white,contentBlockBg:x.grey,contentBlockRadius:"$$radius",placeholderColor:x.grey,inputMenuBg:x.white,errorColor:"#CC0000",dividerColor:x.grey,inputColor:x.black,inputBg:"$$inputMenuBg",inputBorderWidth:"$$borderWidth",inputBorderStyle:"$$borderStyle",inputBorderColor:"$$borderColor",inputPadding:"$$padding",inputRadius:"$$radius",inputShadow:"",inputFocusColor:"",inputFocusBg:"",inputFocusBorderColor:"",inputFocusShadow:"",inputPlaceholderColor:"$$placeholderColor",inputPlaceholderFontStyle:"italic",inputInvalidColor:"",inputInvalidBg:"",inputInvalidBorderColor:"$$errorColor",inputInvalidShadow:"",buttonColor:x.white,buttonBg:x.black,buttonBorderWidth:"$$borderWidth",buttonBorderStyle:"$$borderStyle",buttonBorderColor:"",buttonPadding:"$$padding",buttonPaddingHorizontal:"$$paddingS",buttonRadius:"$$radiusS",buttonShadow:"",buttonFontWeight:"bold",buttonHoverColor:"",buttonHoverBg:"",buttonHoverBorderColor:"",buttonHoverShadow:"",buttonActiveColor:"",buttonActiveBg:"",buttonActiveBorderColor:"",buttonActiveShadow:"",buttonSecColor:x.white,buttonSecBg:x.grey,buttonSecBorderColor:"",buttonSecShadow:"",buttonSecHoverColor:"",buttonSecHoverBg:"",buttonSecHoverBorderColor:"",buttonSecHoverShadow:"",buttonSecActiveColor:"",buttonSecActiveBg:"",buttonSecActiveBorderColor:"",buttonSecActiveShadow:"",buttonShortPadding:"$$paddingS",formSubmittedBg:"$$contentBlockBg",formSubmittedRadius:"$$radius",formSubmittedBorderWidth:0,formSubmittedBorderStyle:"",formSubmittedBorderColor:"",errorMessageColor:"$$errorColor",errorMessageFontWeight:"bold",errorMessageFontStyle:"italic",scrollableFrameInnerPaddingSmall:"$$margin",scrollableFrameInnerPaddingMedium:"$$marginXL",scrollableFrameInnerPaddingLarge:"$$marginXL",scrollableFrameTopExtra:{},scrollableFrameBottomExtra:{},toastColor:x.white,toastBg:x.black,toastPadding:"$$paddingXL",toastBorderWidth:"$$borderWidth",toastBorderStyle:"$$borderStyle",toastBorderColor:"$$borderColor",toastRadius:"$$radius",toastShadow:"",avatarBorderWidth:0,avatarBorderStyle:"$$borderStyle",avatarBorderColor:"$$borderColor",avatarRadius:"$$radiusS",avatarShadow:"",profileCardAvatarBorderWidth:"",profileCardAvatarBorderStyle:"",profileCardAvatarBorderColor:"",profileCardAvatarRadius:"",profileCardAvatarShadow:"",profileCardNameColor:x.black,profileCardTitleColor:x.grey,bottomHeight:"40px",bottomHeightBottomPadding:"50px",bottomBorderWidth:"",bottomBorderStyle:"$$borderStyle",bottomBorderColor:"$$borderColor",bottomNoteBorderWidth:0,bottomNoteBorderStyle:"$$borderStyle",bottomNoteBorderColor:"$$borderColor",brandingLinkColor:"$$actionBarColor",chatMotifHill:"",chatMotifBubble:"",facebook:"#3B5998",twitter:"#00ACEE",google:"#DD4B39",externalIconColor:"$$placeholderColor",authButtonColor:"",authButtonBg:"",authButtonBorderColor:"",authButtonShadow:"",authButtonHoverColor:"",authButtonHoverBg:"",authButtonHoverBorderColor:"",authButtonHoverShadow:"",authButtonActiveColor:"",authButtonActiveBg:"",authButtonActiveBorderColor:"",authButtonActiveShadow:"",chatButtonMinWidth:"180px",chatButtonMaxWidth:"300px",chatButtonHeight:"30px",chatButtonColor:"$$headColor",chatButtonBg:"$$headBg",chatButtonBorderWidth:"$$borderWidth",chatButtonBorderStyle:"$$borderStyle",chatButtonBorderColor:"$$dividerColor",chatButtonRadius:"$$radius",chatButtonShadow:"",chatButtonPadding:"$$paddingXL",chatButtonPaddingFavicon:"$$chatButtonPadding",chatButtonFontWeight:"bold",chatButtonStatusFontWeight:"bold",faviconWidth:"36px",faviconColor:"$$chatButtonColor",faviconOnlineColor:"",faviconOfflineColor:"",faviconBg:"$$chatButtonBg",faviconDotsColor:"",chatBubbleTitle:"",chatBubbleText:"",chatBubbleClose:"",windowMiniWidth:"240px",windowMiniHeight:"200px",windowSmallWidth:"240px",windowSmallHeight:"335px",windowMediumWidth:"290px",windowMediumHeight:"400px",windowLargeWidth:"350px",windowLargeHeight:"450px",windowColor:"$$contentColor",windowBg:"$$contentBg",windowPadding:"",windowRadius:"$$radius",windowShadow:"",windowContentBg:"$$contentBg",windowContentBorderWidth:"$$borderWidth",windowContentBorderStyle:"$$borderStyle",windowContentBorderColor:"$$dividerColor",menuColor:"$$contentColor",menuBg:"$$inputMenuBg",menuBorderWidth:"$$borderWidth",menuBorderStyle:"$$borderStyle",menuBorderColor:"$$dividerColor",menuRadius:"$$radius",menuShadow:"$$windowShadow",menuHeaderColor:"$$placeholderColor",menuItemPadding:"3px 20px",menuItemHoverBg:x.grey,titleBarHeight:"24px",titleBarColor:"$$headLowContrastColor",titleBarBg:"$$headBg",titleBarBorderWidth:"",titleBarBorderStyle:"$$borderStyle",titleBarBorderColor:"$$borderColor",titleBarFontWeight:"bold",actionBarWidth:"100%",actionBarHeight:"24px",actionBarColor:x.grey,actionBarBg:"$$windowContentBg",actionBarBorderWidth:"",actionBarBorderStyle:"$$borderStyle",actionBarBorderColor:"$$borderColor",actionBarPadding:"5px 10px",actionBarHoverColor:"",chatPanelProfileCardContainerHeight:"48px",chatPanelProfileCardContainerBackground:"",chatPanelProfileCardContainerBorderWidth:"",chatPanelProfileCardContainerBorderStyle:"$$borderStyle",chatPanelProfileCardContainerBorderColor:"$$borderColor",chatPanelProfileCardAvatarBorderWidth:"",chatPanelProfileCardAvatarBorderStyle:"",chatPanelProfileCardAvatarBorderColor:"",chatPanelProfileCardAvatarRadius:"",chatPanelProfileCardAvatarShadow:"",chatLogVisitorNameColor:"$$contentHeaderColor",chatLogVisitorBubbleBg:"",chatLogVisitorBubbleBorderWidth:"$$borderWidth",chatLogVisitorBubbleBorderStyle:"$$borderStyle",chatLogVisitorBubbleBorderColor:"$$borderColor",chatLogAgentNameColor:"$$contentHeaderColor",chatLogAgentBubbleBg:"",chatLogAgentBubbleBorderWidth:"$$borderWidth",chatLogAgentBubbleBorderStyle:"$$borderStyle",chatLogAgentBubbleBorderColor:"$$borderColor",chatLogAvatarBorderWidth:"",chatLogAvatarBorderStyle:"",chatLogAvatarBorderColor:"",chatLogAvatarRadius:"",chatLogAvatarShadow:"",chatLogSystemMsgColor:"$$placeholderColor",chatLogSystemMsgBg:"",chatLogSystemMsgBorderWidth:0,chatLogSystemMsgBorderStyle:"$$borderStyle",chatLogSystemMsgBorderColor:"$$borderColor",chatLogSystemMsgPadding:"",chatTextAreaBorderWidth:"",chatTextAreaBorderStyle:"$$borderStyle",chatTextAreaBorderColor:"$$borderColor",chatTextAreaPadding:"10px 10px 0",chatTextAreaInputMinHeight:"42px",chatTextAreaInputMaxHeight:"64px",chatTextAreaInputColor:"",chatTextAreaInputBg:"",chatTextAreaInputBorderWidth:"",chatTextAreaInputBorderStyle:"",chatTextAreaInputBorderColor:"",chatTextAreaInputPadding:"",chatTextAreaInputRadius:"",chatTextAreaInputShadow:"",chatTextAreaInputFocusColor:"",chatTextAreaInputFocusBg:"",chatTextAreaInputFocusBorderColor:"",chatTextAreaInputFocusShadow:"",chatTextAreaSubmitMargin:"6px",chatTextAreaSubmitPadding:"5px 10px",chatTextAreaDropColor:"",chatTextAreaDropBg:"",chatTextAreaDropBorderWidth:"",chatTextAreaDropBorderStyle:"",chatTextAreaDropBorderColor:"",agentBubbleBg:"",visitorBubbleBg:"",badgeBg:"",badgeBorderWidth:"",badgeBorderStyle:"$$borderStyle",badgeBorderColor:"$$borderColor",badgeContentColor:"$$headColor",badgeContentBg:"",badgeContentBorderWidth:"$$borderWidth",badgeContentBorderStyle:"$$borderStyle",badgeContentBorderColor:"$$borderColor",badgeFormHeight:"36px",badgeFormBg:"",badgeFormBorderWidth:"$$borderWidth",badgeFormBorderStyle:"$$borderStyle",badgeFormBorderColor:"$$borderColor",badgeInputColor:"",badgeInputBorderWidth:"",badgeInputBorderStyle:"",badgeInputBorderColor:"",badgeInputPadding:"$$paddingXL",badgeInputRadius:"$$radius",badgeInputShadow:"",badgeInputFocusColor:"",badgeInputFocusBg:"",badgeInputFocusBorderColor:"",badgeInputFocusShadow:"",badgeInputPlaceholderColor:"",badgeIconColor:""},A={windowRadius:0},B={fontSizeXS:"12px",fontSizeS:"13px",fontSize:"14px",fontSizeL:"16px",fontSizeXL:"18px",fontSizeXXL:"20px",mobileMaxWidthS:"360px",mobileMaxWidth:"480px",mobileMaxWidthL:"640px",inputPadding:"$$paddingXL",buttonPadding:"$$paddingXL",menuItemPadding:"14px",titleBarHeight:"44px",actionBarWidth:"$$titleBarHeight",actionBarHeight:"$$titleBarHeight",menuRadius:0,brandingLinkColor:x.grey}
return {standard:z,popout:A,mobile:B}}
if((typeof y==='function')&&y.prototype&&!y.__jx__no_fqname){y.prototype.__jx__fqname_chain=[(y.prototype.__jx__fqname_chain||"")," ","meshim_widget_themes_Base"].join('')
y.prototype.__jx__fqname="meshim_widget_themes_Base"}
return y})()
b.__$$__jx_ui_html_tr=(function(){var w=b.__$$__jx_ui_HTMLElement
function x(y,z,A,B,C){if(!(this instanceof x))return new x(y,z,A,B,C)
if(!C)C={}
C.tagName='tr'
w.call(this,y,z,A,B,C)}
x.prototype=e(w.prototype)
if((typeof x==='function')&&x.prototype&&!x.__jx__no_fqname){x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","jx_ui_html_tr"].join('')
x.prototype.__jx__fqname="jx_ui_html_tr"}
return x})()
b.__$$__jx_ui_html_tbody=(function(){var w=b.__$$__jx_ui_HTMLElement
function x(y,z,A,B,C){if(!(this instanceof x))return new x(y,z,A,B,C)
if(!C)C={}
C.tagName='tbody'
w.call(this,y,z,A,B,C)}
x.prototype=e(w.prototype)
if((typeof x==='function')&&x.prototype&&!x.__jx__no_fqname){x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","jx_ui_html_tbody"].join('')
x.prototype.__jx__fqname="jx_ui_html_tbody"}
return x})()
b.__$$__jx_ui_html_table=(function(){var w=b.__$$__jx_ui_HTMLElement
function x(y,z,A,B,C){if(!(this instanceof x))return new x(y,z,A,B,C)
if(!C)C={}
C.tagName='table'
w.call(this,y,z,A,B,C)}
x.prototype=e(w.prototype)
if((typeof x==='function')&&x.prototype&&!x.__jx__no_fqname){x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","jx_ui_html_table"].join('')
x.prototype.__jx__fqname="jx_ui_html_table"}
return x})()
b.__$$__meshim_common_SvgShape=(function(){function w(x,y,z,A,B){var C=b.__$$__meshim_common_Graphic
y=y||v.generateID()
var D=x.ownerDocument,E
E=D.createElementNS("http://www.w3.org/2000/svg",'path')
E.vectorType='svg'
v.extend(E)
q.extend(E)
v.set(y,E)
var F=!1
E.appendToParent=function(N){if(!v.hasParentNode(E))v.appendChild(x,E)
if(N&&!F){if(x.appendToParent)x.appendToParent(!0)
F=!0}}
E.setClass=function(N){E.setAttribute('class',N)
return E}
E.addClass=function(N){E.setAttribute('class',E.getAttribute('class')+' '+N)
return E}
E.removeClass=function(N){var O=E.getAttribute('class'),P=new RegExp('\\b'+N+'\\b','g')
O.replace(P,'')
E.setAttribute('class',O)
return E}
E.setPath=function(N){E.setAttribute('d',N)
return E}
E.setOpacity=function(N){E.style.opacity=parseFloat(N)
return E}
E.setFill=function(N){if(/linear/.test(N)){K(N)}
else{E.setAttribute('fill',N)}
return E}
E.setStroke=function(N){E.setAttribute('stroke',N)
return E}
E.setStrokeWidth=function(N){E.setAttribute('stroke-width',N)
return E}
var G=[[1,0,0],[0,1,0],[0,0,1]]
function H(N,O){return [[N,0,0],[0,O,0],[0,0,1]]}
function I(N,O){return [[1,0,N],[0,1,O],[0,0,1]]}
function J(N){return [N[0][0],N[1][0],N[0][1],N[1][1],N[0][2],N[1][2]].join(' ')}
E.resetTransform=function(){E.setAttribute('transform','')
G=[[1,0,0],[0,1,0],[0,0,1]]
return E}
E.moveRight=function(N){var O=parseInt(N,10)
if(isNaN(O))return E
G=M(G,I(O,0))
E.setAttribute('transform','matrix('+J(G)+')')
return E}
E.setLeft=E.moveRight
E.moveDown=function(N){var O=parseInt(N,10)
if(isNaN(O))return E
G=M(G,I(0,O))
E.setAttribute('transform','matrix('+J(G)+')')
return E}
E.setTop=E.moveDown
E.flipAlong=function(N){N=N.split('')
for(var O=0;O<N.length;O++){var P=E.getBBox()
switch(N[O]){case 'x':G=M(G,H(-1,1),I(-(2*P.x+P.width),0))
E.setAttribute('transform','matrix('+J(G)+')')
break
case 'y':G=M(G,H(1,-1),I(0,-(2*P.y+P.height)))
E.setAttribute('transform','matrix('+J(G)+')')
break}}
if(p.isWebkit){var Q=E.getAttribute('filter')
E.setAttribute('filter','')
E.setAttribute('filter',Q)}
return E}
E.setShadow=function(N){N=C.parseShadow(N)
var O,P
if(p.isOpera)return
var Q={'feOffset':{'result':'offset-out','in':'SourceGraphic','dx':N.offsetX,'dy':N.offsetY},'feColorMatrix':{'result':'matrix-out','in':'offset-out','type':'matrix','values':'0.2 0 0 0 0 0 0.2 0 0 0 0 0 0.2 0 0 0 0 0 1 0'},'feGaussianBlur':{'result':'blur-out','in':'matrix-out','stdDeviation':N.blurRadius/2},'feBlend':{'in':'SourceGraphic','in2':'blur-out','mode':'normal'}}
O=D.createElementNS('http://www.w3.org/2000/svg','filter'),P='sha_'+new Date().getTime()
O.setAttribute('id',P)
var R=L(Q,'http://www.w3.org/2000/svg')
for(var S=0;S<R.length;S++)O.appendChild(R[S])
var T=D.createElementNS('http://www.w3.org/2000/svg','defs')
T.appendChild(O)
E.parentNode.appendChild(T)
E.setAttribute('filter','url(#'+P+')')
return E}
function K(N){var O=C.generateSvgLinearGradient(D,N),P=D.createElementNS('http://www.w3.org/2000/svg','defs')
P.appendChild(O)
E.parentNode.appendChild(P)
E.setAttribute('fill','url(#'+O.id+')')
return E}
function L(N,O){var P=[],Q,R
for(var S in N)if(N.hasOwnProperty(S)){(O)?Q=D.createElementNS(O,S):Q=D.createElement(S)
R=N[S]
for(var T in R)if(R.hasOwnProperty(T))Q.setAttribute(T,R[T])
P.push(Q)}
return P}
function M(){var N=[[1,0,0],[0,1,0],[0,0,1]]
for(var O=0;O<arguments.length;O++){var P=[],Q=arguments[O]
for(var R=0;R<3;R++){P[R]=[]
for(var S=0;S<3;S++){var T=0
for(var U=0;U<3;U++){T+=N[R][U]*Q[U][S]}
P[R][S]=T}}
N=P}
return N}
v.addChildren(E,A)
E.appendToParent()
E.setStyle(z)
E.setAttributes(B)
return E}
if((typeof w==='function')&&w.prototype&&!w.__jx__no_fqname){w.prototype.__jx__fqname_chain=[(w.prototype.__jx__fqname_chain||"")," ","meshim_common_SvgShape"].join('')
w.prototype.__jx__fqname="meshim_common_SvgShape"}
return w})()
b.__$$__jx_ui_html_p=(function(){var w=b.__$$__jx_ui_HTMLElement
function x(y,z,A,B,C){if(!(this instanceof x))return new x(y,z,A,B,C)
if(!C)C={}
C.tagName='p'
w.call(this,y,z,A,B,C)}
x.prototype=e(w.prototype)
if((typeof x==='function')&&x.prototype&&!x.__jx__no_fqname){x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","jx_ui_html_p"].join('')
x.prototype.__jx__fqname="jx_ui_html_p"}
return x})()
b.__$$__jx_ui_html_span=(function(){var w=b.__$$__jx_ui_HTMLElement
function x(y,z,A,B,C){if(!(this instanceof x))return new x(y,z,A,B,C)
if(!C)C={}
C.tagName='span'
w.call(this,y,z,A,B,C)}
x.prototype=e(w.prototype)
if((typeof x==='function')&&x.prototype&&!x.__jx__no_fqname){x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","jx_ui_html_span"].join('')
x.prototype.__jx__fqname="jx_ui_html_span"}
return x})()
b.__$$__jx_ui_html_td=(function(){var w=b.__$$__jx_ui_HTMLElement
function x(y,z,A,B,C){if(!(this instanceof x))return new x(y,z,A,B,C)
if(!C)C={}
C.tagName='td'
w.call(this,y,z,A,B,C)}
x.prototype=e(w.prototype)
if((typeof x==='function')&&x.prototype&&!x.__jx__no_fqname){x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","jx_ui_html_td"].join('')
x.prototype.__jx__fqname="jx_ui_html_td"}
return x})()
b.__$$__jx_ui_Widget=(function(){var w=b.__$$__jx_ui_HTMLElement
function x(y,z,A,B,C){if(!(this instanceof x))return new x(y,z,A,B,C)
if(!C)C={}
C.tagName||(C.tagName='div')
w.call(this,y,z,A,B,C)}
x.prototype=e(w.prototype)
if((typeof x==='function')&&x.prototype&&!x.__jx__no_fqname){x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","jx_ui_Widget"].join('')
x.prototype.__jx__fqname="jx_ui_Widget"}
return x})()
b.__$$__jx_ui_html_img=(function(){var w=b.__$$__jx_ui_HTMLElement
function x(y,z,A,B,C){if(!(this instanceof x))return new x(y,z,A,B,C)
if(!C)C={}
C.tagName='img'
w.call(this,y,z,A,B,C)}
x.prototype=e(w.prototype)
if((typeof x==='function')&&x.prototype&&!x.__jx__no_fqname){x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","jx_ui_html_img"].join('')
x.prototype.__jx__fqname="jx_ui_html_img"}
return x})()
b.__$$__meshim_common_VmlCanvas=(function(){function w(x,y,z,A,B){var C=b.__$$__meshim_common_Graphic
y=y||v.generateID()
var D=x.ownerDocument,E,F,G,H,I
E=D.createElement('span')
E.style.display='inline-block'
E.style.overflow='hidden'
E.style.position='relative'
E.vectorType='vml'
F=C.createVMLNode(D,'group')
F.className='vml'
F.style.width="100px"
F.style.height="100px"
F.style.border="0px none"
F.style.padding="0px"
F.style.margin="0px"
F.style.position="absolute"
F.style.top="0px"
F.style.left="0px"
E.groupshape=F
G=C.createVMLNode(D,'shape')
G.className='vml'
G.stroked=!1
G.fill=!1
G.style.width="1px"
G.style.height="1px"
F.appendChild(G)
E.appendChild(F)
E.graphicType='vml'
E.defaultPlacement=F
v.extend(E)
q.extend(E)
v.set(y,E)
var J=!1
E.appendToParent=function(M){if(!v.hasParentNode(E))v.appendChild(x,E)
if(M&&!J){if(x.appendToParent)x.appendToParent(!0)
J=!0}}
E.setCanvasScale=function(M){M=parseFloat(M)
H=M
if(I)E.setViewBox(I)
return E}
E.setViewBox=function(M){I=M
M=C.parseViewBox(M)
var N=E.getElementsByTagName('*'),O=M.x+', '+M.y,P='1, 1'
if(H)P=(1/H)+','+(1/H)
F.coordorigin=O
for(var Q=0,R=N.length;Q<R;Q++){var S=N[Q].tagName
if(S!=='shape'&&S!=='group')continue
N[Q].coordsize=P}
G.style.left=M.x+'px'
G.style.right=M.y+'px'
return E}
var K=E.setWidth,L=E.setHeight
E.setWidth=function(M){if(typeof K==='function')K.call(E,M)
F.style.width='1px'
return E}
E.setHeight=function(M){if(typeof L==='function')L.call(E,M)
F.style.height='1px'
return E}
E.setStyle(z)
E.setAttributes(B)
v.addChildren(E,A)
E.appendToParent()
return E}
if((typeof w==='function')&&w.prototype&&!w.__jx__no_fqname){w.prototype.__jx__fqname_chain=[(w.prototype.__jx__fqname_chain||"")," ","meshim_common_VmlCanvas"].join('')
w.prototype.__jx__fqname="meshim_common_VmlCanvas"}
return w})()
b.__$$__meshim_common_Canvas=(function(){function w(x,y,z,A,B){var C=b.__$$__meshim_common_Graphic
y=y||v.generateID()
var D=x.ownerDocument,E,F,G,H=new C.parseCanvasData({type:'canvas',attributes:{},childrens:[]})
F=D.createElement('canvas')
F.width=0
F.height=0
F.vectorType='canvas'
if(F.getContext)G=F.getContext('2d')
v.extend(F)
q.extend(F)
v.set(y,F)
var I=!1
F.appendToParent=function(T){if(!v.hasParentNode(F))v.appendChild(x,F)
if(T&&!I){if(x.appendToParent)x.appendToParent(!0)
I=!0}}
F.setData=function(T){if(typeof H.destroy=='function')H.destroy()
H=new C.parseCanvasData(T)
K()
L()
H.on('update',L)}
function J(){if(E)window.clearInterval(E)
var T=Math.floor(Math.random()*201)-100
E=window.setTimeout(L,1000+T)}
function K(){if(E)window.clearTimeout(E)}
F.onDestruction(function(){K()
if(typeof H.destroy=='function')H.destroy()})
F.setViewBox=function(T){H.setAttribute('viewBox',T)
return F}
function L(){if(!H)return
if(!H.attributes.viewBox)return
R()
M()
N(H.childrens)}
function M(){var T=H.attributes.viewBox,U=H.attributes.canvasScale?parseFloat(H.attributes.canvasScale):1
if(F.width!=T.width)F.width=T.width*U
if(F.height!=T.height)F.height=T.height*U
G.scale(U,U)
G.transform(1,0,0,1,-T.x*U,-T.y*U)
if(p.isWebKit&&T.width*T.height>200*200)J()
else K()
O(H)}
function N(T){for(var U=0,V=T.length;U<V;U++){var W=T[U]
G.save()
if(W.childrens)N(W.childrens)
O(W)
G.restore()}}
function O(T){var U=T.attributes
P()
if(U.left&&typeof T.translateX=='function')T.translateX(G,U.left)
if(U.top&&typeof T.translateY=='function')T.translateY(G,U.right)
if('opacity' in U)G.globalAlpha=U.opacity*G.globalAlpha
if(!U.path)return
if(U.stroke)G.strokeStyle=U.stroke
if(U.strokeWidth)G.lineWidth=U.strokeWidth
if(U.fill)G.fillStyle=U.fill(G,U.path.bBox)
if(U.shadow&&!p.isOpera){var V=U.shadow
G.shadowOffsetX=V.offsetX
G.shadowOffsetY=V.offsetY
G.shadowBlur=V.blurRadius
G.shadowColor=V.rgba}
U.path(G)
G.fill()
if(U.shadow)Q()
G.stroke()}
function P(){G.strokeStyle='rgba(0, 0, 0, 0)'
G.fillStyle='rgba(0, 0, 0, 1)'
G.lineWidth=0}
function Q(){G.shadowOffsetX=0
G.shadowOffsetY=0
G.shadowBlur=0
G.shadowColor='#000'}
function R(){G.setTransform(1,0,0,1,0,0)
G.clearRect(0,0,F.width,F.height)}
F.setStyle(z)
F.setAttributes(B)
H={type:'canvas',attributes:B,childrens:S(A)}
function S(T){var U=[]
for(var V=0,W=T.length;V<W;V++){var X=T[V]
U.push({constructor:X[0],id:X[1],attributes:X[4],childrens:S(X[3])})}
return U}
F.setData(H)
F.appendToParent()
return F}
if((typeof w==='function')&&w.prototype&&!w.__jx__no_fqname){w.prototype.__jx__fqname_chain=[(w.prototype.__jx__fqname_chain||"")," ","meshim_common_Canvas"].join('')
w.prototype.__jx__fqname="meshim_common_Canvas"}
return w})()
b.__$$__meshim_common_VmlShape=(function(){function w(x,y,z,A,B){var C=b.__$$__meshim_common_Graphic
y=y||v.generateID()
var D=x.ownerDocument,E
E=C.createVMLNode(D,'shape')
E.className="vml"
E.style.width="100%"
E.style.height="100%"
E.stroked=!1
E.filled=!0
E.fillColor="#000000"
E.vectorType='vml'
var F=C.createVMLNode(D,'skew')
F.className='vml'
F.setAttribute('on','true')
F.setAttribute('matrix','1,0,0,1,0,0')
F.setAttribute('offset','-0.5,-0.5')
E.appendChild(F)
v.extend(E)
q.extend(E)
v.set(y,E)
var G=!1
E.appendToParent=function(J){if(!v.hasParentNode(E))v.appendChild(x,E)
if(J&&!G){if(x.appendToParent)x.appendToParent(!0)
G=!0}
if(E.vectorType=='vml'){E.style.width='100%'
E.style.height='100%'}}
E.moveRight=function(J){var K=parseInt(J,10)
if(isNaN(K))return E
E.style.left=(parseInt(E.style.left,10)||0)+K
var L=E.style.display
E.style.display='none'
E.style.display=L}
E.setLeft=E.moveRight
E.moveDown=function(J){var K=parseInt(J,10)
if(isNaN(K))return E
E.style.top=(parseInt(E.style.top,10)||0)+K
var L=E.style.display
E.style.display='none'
E.style.display=L}
E.setTop=E.moveDown
E.setPath=function(J){var K,L
J=J.replace(/c/g,'v').replace(/z/g,'x').replace(/m/g,'t').replace(/l/g,'r').replace(/L/g,'l')+'e'
L=E.getElementsByTagName('v:path')[0];(L)?K=L:K=C.createVMLNode(D,'path')
K.className='vml'
K.setAttribute('v',J)
E.appendChild(K)
return E}
E.setOpacity=function(J){var K=parseFloat(J),L=C.createVMLNode(D,'fill')
L.className='vml'
L.setAttribute('opacity',K)
L.setAttribute('o:opacity2',K)
E.appendChild(L)
return E}
E.setFill=function(J){var K=C.createVMLNode(D,'fill')
K.className='vml'
if(/linear/.test(J)){K=C.generateVmlLinearGradient(D,J)}
else{K=C.createVMLNode(D,'fill')
K.className='vml';(J=='none')?K.setAttribute('on','false'):K.setAttribute('on','true')
K.setAttribute('color',J)}
E.appendChild(K)
return E}
E.setStroke=function(J){var K=C.createVMLNode(D,'stroke')
K.className='vml';(J=='none')?K.setAttribute('on','false'):K.setAttribute('on','true')
K.setAttribute('color',J)
E.appendChild(K)
return E}
E.setStrokeWidth=function(J){var K=C.createVMLNode(D,'stroke')
K.className='vml'
J=parseInt(J,10)
K.setAttribute('on','true')
K.setAttribute('weight',J)
E.appendChild(K)
return E}
var H=1,I=1
E.resetTransform=function(){H=I=1
E.style.left=E.style.top=NaN
return E}
E.flipAlong=function(J){J=J.split('')
for(var K=0;K<J.length;K++)switch(J[K]){case 'x':H=-H
break
case 'y':I=-I
break}
var L=''
if(H==-1)L+='x'
if(I==-1)L+='y'
E.style.flip=L
return E}
E.setShadow=function(J){var K=C.createVMLNode(D,'shadow')
K.className='vml'
J=C.parseShadow(J)
K.setAttribute('on','true')
K.setAttribute('opacity',J.opacity)
K.setAttribute('color',J.color)
K.setAttribute('offset',J.offsetX+'px,'+J.offsetY+'px')
E.appendChild(K)
return E}
v.addChildren(E,A)
E.appendToParent()
E.setStyle(z)
E.setAttributes(B)
return E}
if((typeof w==='function')&&w.prototype&&!w.__jx__no_fqname){w.prototype.__jx__fqname_chain=[(w.prototype.__jx__fqname_chain||"")," ","meshim_common_VmlShape"].join('')
w.prototype.__jx__fqname="meshim_common_VmlShape"}
return w})()
b.__$$__jx_ui_html_div=(function(){var w=b.__$$__jx_ui_HTMLElement
function x(y,z,A,B,C){if(!(this instanceof x))return new x(y,z,A,B,C)
if(!C)C={}
C.tagName='div'
w.call(this,y,z,A,B,C)}
x.prototype=e(w.prototype)
if((typeof x==='function')&&x.prototype&&!x.__jx__no_fqname){x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","jx_ui_html_div"].join('')
x.prototype.__jx__fqname="jx_ui_html_div"}
return x})()
b.__$$__meshim_widget_utils_Utils=(function(){var w=b.__$$__meshim_widget_Config,x=b.__$$__meshim_widget_controllers_Cookie,y='-webkit- -moz- -o- -ms- '.split(' '),z='webkit Moz O ms '.split(' '),A=['transition','MozTransition','OTransition','WebkitTransition'],B=['transitionend','transitionend','otransitionend','webkitTransitionEnd'],C=['animationend','animationend','oanimationend','webkitAnimationEnd'],D={contains:E(),onTransitionEnd:F(!0,B),unTransitionEnd:F(!1,B),onAnimationEnd:F(!0,C),unAnimationEnd:F(!1,C),css_prefixes:y,cssom_prefixes:z,isStyleSupported:G(),shallowExtend:H,fullyExtend:I,computedHeightBoxSizingBug:K,getComputedHeight:M,hoverFix:N,getEffectiveTLD:R,descendsObj:O,insertObj:P,isDefaultName:T,getKeys:U,supportsDataURI:V,isIE:W(),hackTitleLocalization:Y,pad:Z,formatMinutesAsHours:$$,replaceFileHostname:$_}
function E(){var $a=document.documentElement
if($a.compareDocumentPosition)return function($b,$c){$b=$b.dom||$b
$c=$c.dom||$c
return !!($b.compareDocumentPosition($c)&16)}
else if($a.contains)return function($b,$c){$b=$b.dom||$b
$c=$c.dom||$c
var $d=$b.nodeType===9?$b.documentElement:$b,$e=$c.parentNode
return $b===$e||!!($e&&$e.nodeType===1&&$d.contains&&$d.contains($e))}
else return function($b,$c){$b=$b.dom||$b
$c=$c.dom||$c
while(($c=$c.parentNode)){if($c===$b)return !0}
return !1}}
function F($a,$b){var $c=document.createElement('div'),$d
for(var $e=0,$f=A.length;$e<$f;$e++){if($c.style[A[$e]]!==a){$d=$b[$e]
break}}
if(!$d){return function(){}}
if($a){return function($g,$h,$i){$g.autobind($h,$d,$i)}}
else{return function($g,$h,$i){if(!B)return
$g.autounbind($h,$d,$i)}}}
function G(){var $a=document.createElement('div'),$b=$a.style
function $c($d){var $e=$d.charAt(0).toUpperCase()+$d.slice(1),$f=($d+' '+z.join($e+' ')+$e).split(' ')
for(var $g=0;$g<$f.length;$g++){if($b[$f[$g]]!==a)return !0}
return !1}
return $c}
function H(){var $a=arguments.length,$b=1,$c=arguments[0]||{},$d,$e
for(;$b<$a;$b++){if(($d=arguments[$b])==null)continue
for($e in $d)if($d.hasOwnProperty($e))if($c!==$d[$e])$c[$e]=$d[$e]}
return $c}
function I($a,$b){for(var $c in $b)if($b.hasOwnProperty($c)){if($b[$c]&&$b[$c].constructor&&$b[$c].constructor===Object){$a[$c]=$a[$c]||{}
I($a[$c],$b[$c])}
else{$a[$c]=$b[$c]}}
return $a}
var J
function K(){if(J===a)try {J=L()}catch($a){;}
return J}
function L(){if(!window.getComputedStyle)return !1
var $a=document.createElement('div'),$b='border-box'
document.body.appendChild($a)
$a.style.height='10px'
$a.style.padding='5px'
$a.style.boxSizing=$b
$a.style.webkitBoxSizing=$b
$a.style.mozBoxSizing=$b
var $c=parseInt(window.getComputedStyle($a).height,10)
document.body.removeChild($a)
return $c!=10}
function M($a){var $b=$a.getComputedStyle()
if($b.height=='auto')return $a.getHeight()
var $c=parseInt($b.height,10)||0
if(D.computedHeightBoxSizingBug())$c+=(parseInt($b.paddingTop,10)||0)+(parseInt($b.paddingBottom,10)||0)+(parseInt($b.borderTopWidth,10)||0)+(parseInt($b.borderBottomWidth,10)||0)
return $c+'px'}
function N($a){if(!p.bugs.noBoxSizing)return
$a.on('mouseover',$b)
$a.on('mouseout',$c)
function $b(){this.addClass('hover')}
function $c(){this.removeClass('hover')}}
function O($a,$b){var $c=$b.split('.'),$d
while($c.length){$d=$c.shift()
if(!$a[$d])$a[$d]={}
$a=$a[$d]}
return $a}
function P($a,$b,$c){$a=$a.split('.')
var $d=$a.pop()
if(!$d)return
for(var $e=0,$f=$a.length;$e<$f;$e++){if(!($a[$e] in $c)){$c[$a[$e]]={}}
$c=$c[$a[$e]]}
$c[$d]=$b}
var Q=/^(com|net|mil|gov|edu|eu)$/
function R(){var $a='zte2095',$b=window.location.hostname.split('.'),$c=$b.length
if(Q.test($b[$c-1])){return '.'+$b.splice($c-2,2).join('.')}
var $d='.'+$b[$c-1]
$b.pop()
while($b.length){$d='.'+$b.pop()+$d
var $e={domain:$d,path:'/'}
x.set($a,'1',$e)
if(x.get($a)=='1'){x.remove($a,$e)
break}}
return $d}
var S=/^Visitor [0-9]{3,}$/
function T($a){return S.test($a)}
function U($a){if(!$a||typeof $a!='object')return
var $b=[]
for(var $c in $a)if($a.hasOwnProperty($c)){$b.push($c)}
return $b}
function V($a){if(!window.Image){$a()
return}
try {var $b=new window.Image()
$b.onload=$b.onerror=function(){$a(!(this.width!=1||this.height!=1))}
$b.src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw=="}catch($c){$a()}}
function W(){return p.isIE||/Trident\//.test(window.navigator.userAgent)}
var X=b.__$$__jx_ui_HTMLElement
function Y(){Y=function(){}
if(!(u&&u.onLanguage))return
X.prototype.setTitle=function($a){var $b=this
if(u&&u.onLanguage&&!this._l10nTitleBound){this._l10nTitleBound=!0
u.onLanguage($c)
this.onDestruction($d)}
this._l10nTitleValue=$a
this.dom.title=this._l10nTitleValue||''
return this
function $c(){$b.setTitle($b._l10nTitleValue)}
function $d(){u.unLanguage($c)}}}
function Z($a,$b){$a=parseInt($a,10)
if(isNaN($a))$a=0
var $c=$a<0
$a=Math.abs($a).toString().split('')
var $d=Math.max($b-$a.length,0)
while($d--)$a.unshift('0')
if($c)$a.unshift('-')
return $a.join('')}
function $$($a){var $b=24
return [D.pad($c(Math[$a>0?'floor':'ceil']($a/60)),2),D.pad(Math.abs($a)%60,2)].join(':')
function $c($d){return $d-(Math[$d>0?'floor':'ceil']($d/$b)*$b)}}
function $_($a){return $a&&$a.replace(w.FILE_REPLACE_SOURCE,w.FILE_REPLACE_RESULT)}
if((typeof D==='function')&&D.prototype&&!D.__jx__no_fqname){D.prototype.__jx__fqname_chain=[(D.prototype.__jx__fqname_chain||"")," ","meshim_widget_utils_Utils"].join('')
D.prototype.__jx__fqname="meshim_widget_utils_Utils"}
return D})()
b.__$$__meshim_widget_utils_Mobile=(function(){var w={isMobileBrowser:x(),isMobileWhitelist:y(),isMobileTablet:B(),isIEMobile:H(),isChromeIOSMobile:N(),isSafariIOSMobile:M(),isChromeAndroidMobile:I(),isOperaAndroidMobile:L(),isNativeAndroidMobile:J(),isUCBrowserMobile:K(),hideVirtualKeyboard:D,isLandscape:C,hackFastButtons:G,getZoomLevel:O,getOffset:P}
function x(){var Q=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino|android|ipad|playbook|silk/i,R=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,S=window.navigator.userAgent||window.navigator.vendor||window.opera,T=Q.test(S)||R.test(S.substr(0,4))
return function(){return T}}
function y(){var Q,R=[/(android [2-9])|(iemobile\/(?![5-9]))|(ucbrowser)|(Webkit.+Chrome)|(ipod|iphone|ipad).+applewebkit.+(CriOS|Version\/[5-9])/i]
for(var S=0,T=R.length;S<T;S++){if(R[S].test(window.navigator.userAgent)){Q=!0
break}}
if(/android.+ucbrowser/i.test(window.navigator.userAgent)){Q=!1}
if(!Q);
return function(){return Q}}
var z=640,A=320
function B(){var Q,R=window.document.documentElement.clientWidth,S=window.document.documentElement.clientHeight
if(R>S){if(R<=z){Q=!1}
else{Q=!0}}
else{if(R<=A){Q=!1}
else{Q=!0}}
return function(){return Q}}
function C(){return window.document.documentElement.clientWidth>window.document.documentElement.clientHeight}
function D(Q){if(!Q)return}
var E=b.__$$__jx_ui_HTMLElement,F
function G(){if(F)return
F=!0
var Q=E.prototype.on,R=E.prototype.un
E.prototype.on=function($$){if($$=='click'&&(!this.allCallbacks['click']||!this.allCallbacks['click'].length)){this.dom.addEventListener('touchstart',S,!1)
this.dom.addEventListener('click',U,!1)}
return Q.apply(this,arguments)}
E.prototype.un=function($$){var $_=R.apply(this,arguments)
if($$=='click'&&(!this.allCallbacks['click']||!this.allCallbacks['click'].length)){this.dom.removeEventListener('touchstart',S,!1)
this.dom.removeEventListener('click',U,!1)}
return $_}
F=!0
function S($$){if(this.jx_wrapper)return S.call(this.jx_wrapper,$$)
$$.stopPropagation()
this.dom.addEventListener('touchend',U,!1)
this.doc.body.addEventListener('touchmove',T,!1)
this.startX=$$.touches[0].clientX
this.startY=$$.touches[0].clientY}
function T($$){if(this.jx_wrapper)return T.call(this.jx_wrapper,$$)
if(Math.abs($$.touches[0].clientX-this.startX)>10||Math.abs($$.touches[0].clientY-this.startY)>10){V.call(this)}}
function U($$){if(this.jx_wrapper)return U.call(this.jx_wrapper,$$)
$$.stopPropagation()
V.call(this)
this.nativeHandlers['click']($$)
if($$.type=='touchend'&&!this.allowGhostClick){X(this.startX,this.startY)}}
function V(){if(this.jx_wrapper)return V.call(this.jx_wrapper)
this.dom.removeEventListener('touchend',U,!1)
this.doc.body.removeEventListener('touchmove',T,!1)}
var W=[]
function X($$,$_){W.push($$,$_)
window.setTimeout(Y,2500)}
function Y(){W.splice(0,2)}
function Z($$){for(var $_=0;$_<W.length;$_+=2){var $a=W[$_],$b=W[$_+1]
if(Math.abs($$.clientX-$a)<25&&Math.abs($$.clientY-$b)<25){$$.stopPropagation()
$$.preventDefault()}}}
window.document.addEventListener('click',Z,!0)}
function H(){var Q=window.navigator.userAgent.toLowerCase()||'',R=/(iemobile|windows phone)/.test(Q)
return R}
function I(){var Q=window.navigator.userAgent.toLowerCase()||'',R=window.navigator.vendor&&window.navigator.vendor.toLowerCase()||'',S=/google inc./.test(R)&&/chrome/.test(Q)
return S}
function J(){var Q=window.navigator.userAgent.toLowerCase()||'',R=window.navigator.vendor&&window.navigator.vendor.toLowerCase()||'',S=/google inc./.test(R)&&(!/chrome/.test(Q)||/samsung/.test(Q))
return S}
function K(){var Q=window.navigator.userAgent.toLowerCase()||'',R=/ucbrowser/.test(Q)
return R}
function L(){var Q=window.navigator.userAgent.toLowerCase()||'',R=/(opera|opr).*android|android.*(opera|opr)/i.test(Q)
return R}
function M(){var Q=window.navigator.userAgent.toLowerCase()||'',R=window.navigator.vendor&&window.navigator.vendor.toLowerCase()||'',S=/apple computer, inc./.test(R)&&(!/crios/.test(Q))
return S}
function N(){var Q=window.navigator.userAgent.toLowerCase()||'',R=window.navigator.vendor&&window.navigator.vendor.toLowerCase()||'',S=/apple computer, inc./.test(R)&&/crios/.test(Q)
return S}
function O(){var Q=1.2,R=640,S=window.document.documentElement.clientWidth,T=window.document.documentElement.clientHeight,U=(S/T)>Q,V=window.screen.width,W=window.screen.height,X=!1
if(U&&V<W){X=!0
V=window.screen.height
W=window.screen.width}
var Y=window.innerWidth,Z=S/V
if(window.devicePixelRatio&&J()&&V>R){Z*=window.devicePixelRatio}
else if(H()){Z*=1.5}
var $$=(S/Y)/Z
$$=$$/Q
$$=$$.toFixed(2)
return $$}
function P(){var Q=window,R=Q.document.documentElement,S=Q.document.body,T=null,U={top:0,left:0}
if(!h(R.getBoundingClientRect));
else if(h(Q.getComputedStyle)){if(Q.getComputedStyle(S).position=='relative'){T=S}
else if(Q.getComputedStyle(R).position=='relative'){T=R}}
else if(S.currentStyle){if(S.currentStyle.position=='relative'){T=S}
else if(R.currentStyle.position=='relative'){T=R}}
else if(S.style.position=='relative'){T=S}
else if(R.style.position=='relative'){T=R}
if(T){var V=T.getBoundingClientRect()
U.top=V.top+Q.pageYOffset-R.clientTop
U.left=V.left+Q.pageXOffset-R.clientLeft}
return U}
if((typeof w==='function')&&w.prototype&&!w.__jx__no_fqname){w.prototype.__jx__fqname_chain=[(w.prototype.__jx__fqname_chain||"")," ","meshim_widget_utils_Mobile"].join('')
w.prototype.__jx__fqname="meshim_widget_utils_Mobile"}
return w})()
b.__$$__meshim_common_GeoAccessFactory=(function(){var w=b.__$$__meshim_common_GeoAccess,x='VN'.toUpperCase(),y='PH'.toUpperCase()
if(x.charAt(0)=='<')x='geo'
if(y.charAt(0)=='<')y='geo'
function z(B,C){this.clusters_config=B
this.countryCode=(x==='geo')?y:x
try {if(C.length<=0)throw 'SSI cluster definition not found'
if(C.charAt(0)=='<')throw 'SSI not processed'
this.clusters_config=JSON.parse(C)}catch(D){;}}
var A=z.prototype
A.getGeoCode=function B(){return this.countryCode}
A.getGeoAccess=function B(C){return new w(this.clusters_config,this.countryCode,C||[])}
if((typeof z==='function')&&z.prototype&&!z.__jx__no_fqname){z.prototype.__jx__fqname_chain=[(z.prototype.__jx__fqname_chain||"")," ","meshim_common_GeoAccessFactory"].join('')
z.prototype.__jx__fqname="meshim_common_GeoAccessFactory"}
return z})()
b.__$$__jx_ui_html_a=(function(){var w=b.__$$__jx_ui_HTMLElement
function x(y,z,A,B,C){if(!(this instanceof x))return new x(y,z,A,B,C)
if(!C)C={}
C.tagName='a'
w.call(this,y,z,A,B,C)}
x.prototype=e(w.prototype)
if((typeof x==='function')&&x.prototype&&!x.__jx__no_fqname){x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","jx_ui_html_a"].join('')
x.prototype.__jx__fqname="jx_ui_html_a"}
return x})()
b.__$$__meshim_widget_widgets_BorderOverlay=(function(){function w(x,y,z,A,B){if(!(this instanceof w))return new w(x,y,z,A,B)
y=y||v.generateID()
var C=[b.__$$__jx_ui_Widget,null,null,[],{"addClass":"border_overlay"}],D=C[0].call(this,x,y,null,v.mangleIDs(y,C[3]),C[4]),E=D||this
v.set(y,E)
if(!w.__jx__jcss_generated){t.generate(x,w.prototype.__jx__fqname,w.__jx__jcss,null,w)
w.__jx__jcss_generated=!0}
var F=(function(){})()
for(var G in F)if(F.hasOwnProperty(G))E[G]=F[G]
if(E.fire)E.fire('init')
E.setStyle&&E.setStyle(z)
E.setAttributes&&E.setAttributes(B)
if(typeof E.addChildren=='function')E.addChildren(A)
else v.addChildren(E,A)
if(E!==this){E.__jx__constructor=b.__$$__meshim_widget_widgets_BorderOverlay
E.__jx__native=!1}
return E}
w.prototype=e(b.__$$__jx_ui_Widget.prototype)
w.prototype.__jx__native=!1
w.prototype.__jx__super=b.__$$__jx_ui_Widget
w.__jx__jcss={"**self":{"position":"absolute","top, left":0,"width, height":"100%","borderRadius":"inherit"}}
w.prototype.__jx__fqname_chain=[(w.prototype.__jx__fqname_chain||"")," ","meshim_widget_widgets_BorderOverlay"].join('')
w.prototype.__jx__fqname="meshim_widget_widgets_BorderOverlay"
w.prototype.__jx__constructor=w
return w})()
b.__$$__jx_ui_FullFrame=(function(){var w=b.__$$__jx_ui_Widget
function x(y,z,A,B,C){if(!(this instanceof x))return new x(y,z,A,B,C)
if(p.bugs.noBoxSizing){var D=this.table=new w(y,null,null,null,{tagName:'table'}),E=this.tbody=new w(D,null,null,null,{tagName:'tbody'}),F=this.tr=new w(E,null,null,null,{tagName:'tr'}),G=this.td=new w(F,null,null,null,{tagName:'td'}),H=this
this.table.destroy=function(){H.destroy()}
this.table.empty=function(){H.empty()}
this.setPadding=function(I){this.td.setPadding(I)
return this}
this.show=function(){this.table&&this.table.show()
return this}
this.hide=function(){this.table&&this.table.hide()
return this}
w.call(this,G,z,A,B,C)
D.style.tableLayout='fixed',D.style.borderCollapse='collapse'
E.style.height=E.style.width=this.style.height=this.style.width='100%'
D.setTop(0).setLeft(0).setWidth('100%').setHeight('100%').setPosition('absolute').applyConstraints()
this.style.position='relative',this.style.overflow='auto'
D.defaultPlacement=this}
else{this.setPadding=function(I){if(!i(I))return this
I=I.split(' ')
I[0]=parseInt(I[0],10)
I[1]=parseInt(I[1],10)
I[2]=parseInt(I[2],10)
I[3]=parseInt(I[3],10)
if(isNaN(I[0])){I[3]=I[2]=I[1]=I[0]=0}
else if(isNaN(I[3])){if(isNaN(I[1])){I[3]=I[2]=I[1]=I[0]}
else if(isNaN(I[2])){I[3]=I[1]
I[2]=I[0]}
else{I[3]=I[1]}}
this.setTop(parseInt(I[0],10)).setRight(parseInt(I[1],10)).setBottom(parseInt(I[2],10)).setLeft(parseInt(I[3],10))
return this}
w.call(this,y,z,A,B,C)
this.setStyle({top:0,bottom:0,left:0,right:0,overflow:'auto',position:'absolute'})}
this.setStyle(A)
this.setAttributes(C)}
x.prototype=e(w.prototype)
x.prototype.destroy=function(){w.prototype.destroy.call(this)
if(this.table){w.prototype.empty.call(this.table)
this.table.empty=null
w.prototype.destroy.call(this.table)
this.table=this.tbody=this.tr=this.td=null}}
if((typeof x==='function')&&x.prototype&&!x.__jx__no_fqname){x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","jx_ui_FullFrame"].join('')
x.prototype.__jx__fqname="jx_ui_FullFrame"}
return x})()
b.__$$__jx_ui_ViewStack=(function(){var w=b.__$$__jx_ui_Widget
function x(y,z,A,B,C){if(!(this instanceof x))return new x(y,z,A,B,C)
w.call(this,y,z,A,B,C)
this.index=a
this.length=0
this.currentChild=null
var D=this
this._onChildHide=function(){switch(D.onChildHide){case 'next':D.next(!0)
break
case 'prev':D.prev(!0)
break
case 'first':D.first(!0)
break
case 'last':D.last(!0)
break
default:var E=parseInt(D.onChildHide,10)
if(isNaN(E))break
D.setIndex(E,!0)}}
this.onDestruction(function(){D.currentChild=null})}
x.prototype=e(w.prototype)
x.prototype.addChildren=function(y){var z=y&&y.length
if(!y||!z)return
for(var A=0;A<z;A++)if(g(y[A]))this.appendChild(y[A])
else ;}
x.prototype.appendChild=function(y){if(g(y)){this.children.push(y)}
else if(y.dom){w.prototype.appendChild.call(this,y)
y.setVisible('none')}
else{this.dom.appendChild(y)}
return y}
x.prototype.removeChild=function(y){try {if(g(y));
else if(y.dom){this.dom.removeChild(y.dom)
y.parentNode=null}
else{this.dom.removeChild(y)}
var z=f(y,this.children)
if(z!=-1)this.children.splice(z,1)}catch(A){;}}
x.prototype.setIndex=function(y,z){y=parseInt(y,10)
if(!this.validIndex(y)||y==this.index)return
var A=this.currentChild,B
if(!z&&(A?A.fire('beforeIndexChange',y):1)+this.fire('beforeIndexChange',y)<2){return !1}
if(A){this.autounbind(A,'hide',this._onChildHide)
A.setVisible('none')}
this.fire('indexChanging',y)
if(y==-1){this.currentChild=null
this.index=y
this.fire('indexChange',y)
return !0}
A=this.children[y]
if(g(A)){A=this.instantiateChild(A)
B=!0}
A.setVisible('block')
this.autobind(A,'hide',this._onChildHide)
this.currentChild=A
this.index=y
B&&this.fire('instantiate',y)
this.fire('indexChange',y)
return !0}
x.prototype.instantiateChild=function(y){if(!g(y)){return}
var z=f(y,this.children)
if(z==-1){return}
y=new y[0](this,y[1],y[2],y[3],y[4])
this.children[z]=y
this.children.pop()
return y}
x.prototype.validIndex=function(y){return (y!=null)&&(y<this.getLength())&&(y>=-1)}
x.prototype.next=function(y){return k(this.index,!0)?this.setIndex(0,y):this.setIndex(this.index+1,y)}
x.prototype.prev=function(y){return k(this.index,!0)?this.setIndex(this.getLength()-1,y):this.setIndex(Math.max(this.index-1,0),y)}
x.prototype.first=function(y){return this.setIndex(0,y)}
x.prototype.last=function(y){return this.setIndex(this.getLength()-1,y)}
x.prototype.getName=function(){return this.currentChild&&this.currentChild.getName()}
x.prototype.setName=function(y){if(!y)return this.setIndex(-1)
for(var z=0,A=this.children.length;z<A;z++){if(g(this.children[z])){if(this.children[z][4]&&this.children[z][4].name===y){return this.setIndex(z)}}
else{if(this.children[z].getName&&this.children[z].getName()===y){return this.setIndex(z)}}}}
x.prototype.isFirst=function(){return this.index<=0}
x.prototype.isLast=function(){return this.index>=this.getLength()-1}
x.prototype.getLength=function(){return this.children.length}
x.prototype.getChildren=function(){return this.children}
x.prototype.getCurrentChild=function(){return this.currentChild}
x.prototype.getIndex=function(){return this.index}
x.prototype.getOnChildHide=function(){return this.onChildHide}
x.prototype.setOnChildHide=function(y){this.onChildHide=y
return this}
if((typeof x==='function')&&x.prototype&&!x.__jx__no_fqname){x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","jx_ui_ViewStack"].join('')
x.prototype.__jx__fqname="jx_ui_ViewStack"}
return x})()
b.__$$__meshim_widget_widgets_IconFont=(function(){function w(x,y,z,A,B){if(!(this instanceof w))return new w(x,y,z,A,B)
y=y||v.generateID()
var C=[b.__$$__jx_ui_Widget,null,null,[],{"selectable":"false","class":"icon_font"}],D=C[0].call(this,x,y,null,v.mangleIDs(y,C[3]),C[4]),E=D||this
v.set(y,E)
if(!w.__jx__jcss_generated){t.generate(x,w.prototype.__jx__fqname,w.__jx__jcss,null,w)
w.__jx__jcss_generated=!0}
var F=(function(){var H={'zopim':'&#xe000;','message':'&#x1f4ac;','tick':'&#x2714;','cross':'&#x2716;','popout':'&#x2197;','popin':'&#x2199;','minimize':'&#x2212;','plus':'&#x002b;','smiley':'&#x263a;','happy':'&#xe001;','happier':'&#xe002;','sad':'&#xe003;','sadder':'&#xe004;','brand':'&#xe005;','brand_suffix':'&#xe006;','avatar_placeholder':'&#xe007;','email':'&#x1f4e7;','facebook':'&#xe008;','twitter':'&#xe009;','google':'&#xe00a;','facebook_out':'&#xe00d;','twitter_out':'&#xe00c;','google_out':'&#xe00b;','badge_default':'&#xe00e;','warning_sign':'&#x26a0;','arrow_left':'&#x2190;','arrow_up':'&#x2191;','arrow_down':'&#x2193;','arrow_right':'&#x2192;','pencil':'&#x270e;','dustbin':'&#xe00f;','sound_on':'&#x1f50a;','sound_off':'&#x1f507;','send':'&#x000BB;','exclamation':'&#x0021;'}
E.setIcon=function(I){E.setHTML(H[I]||I||'')}
E.setFont=function(I){E.setFontFamily(I||'')}})()
for(var G in F)if(F.hasOwnProperty(G))E[G]=F[G]
if(E.fire)E.fire('init')
E.setStyle&&E.setStyle(z)
E.setAttributes&&E.setAttributes(B)
if(typeof E.addChildren=='function')E.addChildren(A)
else v.addChildren(E,A)
if(E!==this){E.__jx__constructor=b.__$$__meshim_widget_widgets_IconFont
E.__jx__native=!1}
return E}
w.prototype=e(b.__$$__jx_ui_Widget.prototype)
w.prototype.__jx__native=!1
w.prototype.__jx__super=b.__$$__jx_ui_Widget
w.__jx__jcss={"**self":{"fontFamily":"zopim, \"Segoe UI Symbol\", \"Arial Unicode MS\", \"Lucida Sans Unicode\", sans-serif","speak":"none","fontStyle":"normal","fontWeight":"normal","lineHeight":1,"WebkitFontSmoothing":"antialiased"},"&:focus":{"outline":"none"}}
w.prototype.__jx__fqname_chain=[(w.prototype.__jx__fqname_chain||"")," ","meshim_widget_widgets_IconFont"].join('')
w.prototype.__jx__fqname="meshim_widget_widgets_IconFont"
w.prototype.__jx__constructor=w
return w})()
b.__$$__jx_ui_Form=(function(){var w=b.__$$__jx_ui_Widget
function x(y,z,A,B,C){if(!(this instanceof x))return new x(y,z,A,B,C)
if(!C)C={}
C.tagName||(C.tagName='form')
w.call(this,y,z,A,B,C)
this.on('submit',function(D){if(!this.validate()){D.preventDefault()
return}})
this.on('reset',function(D){D.preventDefault()
this.reset()})}
x.prototype=e(w.prototype)
x.prototype.submit=function(){this.dom.submit()
return this}
x.prototype.reset=function(){var y=this.getElements()
for(var z=0;z<y.length;z++)y[z].reset&&y[z].reset()
return this}
x.prototype.getElements=function(){var y=[]
for(var z=0,A=this.dom.elements.length;z<A;z++)y.push(this.dom.elements[z].jx_wrapper||this.dom.elements[z])
return y}
x.prototype.getAutocomplete=x.prototype.getAutoComplete=function(){return this.dom.autocomplete}
x.prototype.setAutocomplete=x.prototype.setAutoComplete=function(y){if(this.dom.autocomplete===a)return this
if(y==='on'||y==='off'){this.dom.autocomplete=y
return this}
y=m(y)
this.dom.autocomplete=y?'on':'off'
return this}
x.prototype.getNoValidate=function(){return this.dom.noValidate}
x.prototype.setNoValidate=function(y){this.dom.noValidate=m(y)
return this}
if((typeof x==='function')&&x.prototype&&!x.__jx__no_fqname){x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","jx_ui_Form"].join('')
x.prototype.__jx__fqname="jx_ui_Form"}
return x})()
b.__$$__meshim_widget_widgets_Motif=(function(){function w(x,y,z,A,B){if(!(this instanceof w))return new w(x,y,z,A,B)
y=y||v.generateID()
var C=[b.__$$__jx_ui_Widget,null,null,[],{}],D=C[0].call(this,x,y,null,v.mangleIDs(y,C[3]),C[4]),E=D||this
v.set(y,E)
if(!w.__jx__jcss_generated){t.generate(x,w.prototype.__jx__fqname,w.__jx__jcss,null,w)
w.__jx__jcss_generated=!0}
var F=(function(){var H=b.__$$__jx_ui_Widget
E.setItems=function(I){I=I.split(',')
for(var J=0,K=I.length;J<K;J++)new H(E,null,null,null,{className:I[J]})}})()
for(var G in F)if(F.hasOwnProperty(G))E[G]=F[G]
if(E.fire)E.fire('init')
E.setStyle&&E.setStyle(z)
E.setAttributes&&E.setAttributes(B)
if(typeof E.addChildren=='function')E.addChildren(A)
else v.addChildren(E,A)
if(E!==this){E.__jx__constructor=b.__$$__meshim_widget_widgets_Motif
E.__jx__native=!1}
return E}
w.prototype=e(b.__$$__jx_ui_Widget.prototype)
w.prototype.__jx__native=!1
w.prototype.__jx__super=b.__$$__jx_ui_Widget
w.__jx__jcss={"**self":{"position":"relative"}}
w.prototype.__jx__fqname_chain=[(w.prototype.__jx__fqname_chain||"")," ","meshim_widget_widgets_Motif"].join('')
w.prototype.__jx__fqname="meshim_widget_widgets_Motif"
w.prototype.__jx__constructor=w
return w})()
b.__$$__meshim_widget_widgets_ratingBar_RatingButton=(function(){function w(x,y,z,A,B){if(!(this instanceof w))return new w(x,y,z,A,B)
y=y||v.generateID()
var C=[b.__$$__jx_ui_html_span,null,null,[[b.__$$__jx_ui_html_span,null,null,[],{"class":"default_value","container":"default_value"}],[b.__$$__jx_ui_html_span,null,null,[],{"class":"selected_value","container":"selected_value"}]],{}],D=C[0].call(this,x,y,null,v.mangleIDs(y,C[3]),C[4]),E=D||this
v.set(y,E)
if(!w.__jx__jcss_generated){t.generate(x,w.prototype.__jx__fqname,w.__jx__jcss,null,w)
w.__jx__jcss_generated=!0}
var F=(function(){var H=b.__$$__meshim_widget_utils_Utils
H.hoverFix(E)})()
for(var G in F)if(F.hasOwnProperty(G))E[G]=F[G]
if(E.fire)E.fire('init')
E.setStyle&&E.setStyle(z)
E.setAttributes&&E.setAttributes(B)
if(typeof E.addChildren=='function')E.addChildren(A)
else v.addChildren(E,A)
if(E!==this){E.__jx__constructor=b.__$$__meshim_widget_widgets_ratingBar_RatingButton
E.__jx__native=!1}
return E}
w.prototype=e(b.__$$__jx_ui_html_span.prototype)
w.prototype.__jx__native=!1
w.prototype.__jx__super=b.__$$__jx_ui_html_span
w.__jx__jcss={"**self":{"width":"50%","display":"inline-block",".default_value":{"display":"inline","opacity":"0.8"},".selected_value":{"display":"none"}},"**self.hover, **self:hover, **self.active":{".default_value":{"display":"none"},".selected_value":{"display":"inline"}}}
w.prototype.__jx__fqname_chain=[(w.prototype.__jx__fqname_chain||"")," ","meshim_widget_widgets_ratingBar_RatingButton"].join('')
w.prototype.__jx__fqname="meshim_widget_widgets_ratingBar_RatingButton"
w.prototype.__jx__constructor=w
return w})()
b.__$$__meshim_widget_widgets_profileCard_TitleHolder=(function(){function w(x,y,z,A,B){if(!(this instanceof w))return new w(x,y,z,A,B)
y=y||v.generateID()
var C=[b.__$$__jx_ui_html_div,null,null,[],{"class":"titleHolder"}],D=C[0].call(this,x,y,null,v.mangleIDs(y,C[3]),C[4]),E=D||this
v.set(y,E)
if(!w.__jx__jcss_generated){t.generate(x,w.prototype.__jx__fqname,w.__jx__jcss,null,w)
w.__jx__jcss_generated=!0}
var F=(function(){var H
function I(K){E.setText(K||'')}
function J(K){if(H===K)return
H&&E.autounbind(H,'value',I)
H=K
H&&E.autobind(H,'value',I)}
E.setDataNode=J})()
for(var G in F)if(F.hasOwnProperty(G))E[G]=F[G]
if(E.fire)E.fire('init')
E.setStyle&&E.setStyle(z)
E.setAttributes&&E.setAttributes(B)
if(typeof E.addChildren=='function')E.addChildren(A)
else v.addChildren(E,A)
if(E!==this){E.__jx__constructor=b.__$$__meshim_widget_widgets_profileCard_TitleHolder
E.__jx__native=!1}
return E}
w.prototype=e(b.__$$__jx_ui_html_div.prototype)
w.prototype.__jx__native=!1
w.prototype.__jx__super=b.__$$__jx_ui_html_div
w.__jx__jcss={"**self":{"whiteSpace":"inherit","overflow":"hidden","textOverflow":"ellipsis"}}
w.prototype.__jx__fqname_chain=[(w.prototype.__jx__fqname_chain||"")," ","meshim_widget_widgets_profileCard_TitleHolder"].join('')
w.prototype.__jx__fqname="meshim_widget_widgets_profileCard_TitleHolder"
w.prototype.__jx__constructor=w
return w})()
b.__$$__meshim_widget_widgets_chatLogRenderer_ChatMessage=(function(){function w(x,y,z,A,B){if(!(this instanceof w))return new w(x,y,z,A,B)
y=y||v.generateID()
var C=[b.__$$__jx_ui_html_div,null,null,[],{}],D=C[0].call(this,x,y,null,v.mangleIDs(y,C[3]),C[4]),E=D||this
v.set(y,E)
if(!w.__jx__jcss_generated){t.generate(x,w.prototype.__jx__fqname,w.__jx__jcss,null,w)
w.__jx__jcss_generated=!0}
var F=(function(){var H=b.__$$__meshim_common_Sanitize,I=b.__$$__meshim_common_Regex,J=b.__$$__meshim_widget_utils_Mobile,K,L=/uploaded.+\n.+https?:\/\/v2uploads\.zopim\.(com|io)\//i,M=[{name:"email_test",rx:I.search.email,cb:function(T){var U=T[0],V=T[1],W=T[2]
if(!I.tld.test(W))return U
U=U.replace(V,'')
return {original:U,processed:V+'<a href="mailto:'+U+'">'+U+'</a>'}}},{name:"url_test",rx:I.search.url,cb:function(T){var U=T[0],V=T[1],W=T[2]
if(!I.tld.test(W))return U
U=U.replace(V,'')
return {original:U,processed:V+'<a href="//'+U+'" target="_blank">'+U+'</a>'}}},{name:"protocol_test",rx:I.search.hurl,cb:function(T){var U=T[0],V=T[1]
U=U.replace(V,'')
return {original:U,processed:V+'<a href="'+U+'" target="_blank">'+U+'</a>'}}},{name:"tel_test",rx:/(?:(?:\+?\d{1,3}|\(\d{1,3}\))([-.\s])?)?\d{3,10}(?:([-.\s])\d{3,10})?/gi,cb:function(T){var U=T[0],V=T[1],W=T[2],X=U.replace(V,'').replace(W,'')
return {original:U,processed:(J.isMobileBrowser()?'<a href="tel:':'<a href="callto:')+X+'">'+U+'</a>'}}}]
function N(){E.setDataNode=O
E.formatChatMessage=Q}
function O(T){if(K)E.autounbind(K,'value',P)
K=T.$('msg$string')
E.autobind(K,'value',P)}
function P(T){T=T||''
if(L.test(T)){return}
T=Q(T)
E.setHTML(T)}
function Q(T){if(!T)return ''
T=H.html(T)
if(T.onTranslate)T=T.toString()
var U=[T]
for(var V=0;V<M.length;V++){R(U,M[V])}
return S(U)}
function R(T,U){for(var V=T.length;V-->0;){var W=T[V]
if(typeof W==="object")continue
var X=0,Y=[],Z
while(Z=U.rx.exec(W)){var $$=U.cb(Z)
if(typeof $$==="object"){if(Z.index>X)Y.push(W.substring(X,Z.index))
Y.push($$)
X=Z.index+Z[0].length}}
if(Y.length){Y.push(W.substring(X))
T.splice.apply(T,[V,1].concat(Y))}}}
function S(T){var U=""
for(var V=0;V<T.length;V++){if(typeof T[V]==="string")U+=T[V]
else U+=T[V].processed}
return U.replace(/\n/g,'<br>')}
N()})()
for(var G in F)if(F.hasOwnProperty(G))E[G]=F[G]
if(E.fire)E.fire('init')
E.setStyle&&E.setStyle(z)
E.setAttributes&&E.setAttributes(B)
if(typeof E.addChildren=='function')E.addChildren(A)
else v.addChildren(E,A)
if(E!==this){E.__jx__constructor=b.__$$__meshim_widget_widgets_chatLogRenderer_ChatMessage
E.__jx__native=!1}
return E}
w.prototype=e(b.__$$__jx_ui_html_div.prototype)
w.prototype.__jx__native=!1
w.prototype.__jx__super=b.__$$__jx_ui_html_div
w.__jx__jcss={"**self":{"display":"inline"}}
w.prototype.__jx__fqname_chain=[(w.prototype.__jx__fqname_chain||"")," ","meshim_widget_widgets_chatLogRenderer_ChatMessage"].join('')
w.prototype.__jx__fqname="meshim_widget_widgets_chatLogRenderer_ChatMessage"
w.prototype.__jx__constructor=w
return w})()
b.__$$__meshim_widget_widgets_menu_Header=(function(){function w(x,y,z,A,B){if(!(this instanceof w))return new w(x,y,z,A,B)
y=y||v.generateID()
var C=[b.__$$__jx_ui_Widget,null,null,[],{}],D=C[0].call(this,x,y,null,v.mangleIDs(y,C[3]),C[4]),E=D||this
v.set(y,E)
if(!w.__jx__jcss_generated){t.generate(x,w.prototype.__jx__fqname,w.__jx__jcss,null,w)
w.__jx__jcss_generated=!0}
var F=(function(){})()
for(var G in F)if(F.hasOwnProperty(G))E[G]=F[G]
if(E.fire)E.fire('init')
E.setStyle&&E.setStyle(z)
E.setAttributes&&E.setAttributes(B)
if(typeof E.addChildren=='function')E.addChildren(A)
else v.addChildren(E,A)
if(E!==this){E.__jx__constructor=b.__$$__meshim_widget_widgets_menu_Header
E.__jx__native=!1}
return E}
w.prototype=e(b.__$$__jx_ui_Widget.prototype)
w.prototype.__jx__native=!1
w.prototype.__jx__super=b.__$$__jx_ui_Widget
w.__jx__jcss={"**self":{"marginBottom":"$$margin","color":"$$menuHeaderColor"},"&.item":{"margin":"$$menuItemPadding"}}
w.prototype.__jx__fqname_chain=[(w.prototype.__jx__fqname_chain||"")," ","meshim_widget_widgets_menu_Header"].join('')
w.prototype.__jx__fqname="meshim_widget_widgets_menu_Header"
w.prototype.__jx__constructor=w
return w})()
b.__$$__meshim_widget_controllers_StorageController=(function(){var w=b.__$$__meshim_widget_controllers_DOMStorage,x=b.__$$__meshim_widget_controllers_Cookie,y=b.__$$__meshim_widget_Config,z=b.__$$__meshim_widget_utils_Utils,A='__zlcstore',B='__zlcmid',C='__zlcprivacy',D
if(/\b(?:\d{1,3}\.){3}\d{1,3}/.test(document.location.hostname)){D=document.location.hostname}
else{D=z.getEffectiveTLD()}
var E=8*60*1000,F=y.ACCOUNT_KEY,G={init:H,DOM:{saveVariable:R,getVariable:S},Cookie:x,clearAll:M,setIdentity:J,getIdentity:I,getAllowCookieLaw:K,setAllowCookieLaw:L}
function H(){}
function I(){if(y.IS_POPOUT){return Q('mid')}
var T=N()
if(T){return T}
return x.get(B)||''}
function J(T){x.set(B,T,{path:'/',ttl:365,domain:D})}
function K(){var T=O()
if(typeof T=='boolean')return T
var U=x.get(C)
U=parseInt(U,10)
if(U===0)return !1
else if(U===1)return !0
else return a}
function L(T){T=m(T)
if(T)T=1
else T=0
x.set(C,T,{path:'/',ttl:365,domain:D})}
function M(){x.remove(B,{path:'/',domain:D})
w.remove(A)}
function N(){var T=x.getJSONCookie('__zlcid')
x.remove('__zlcid',{path:'/'})
if(T['mID']){return T['mID']}
var U=P('__zlcstore')
x.remove('__zlcstore',{path:'/',domain:D})
if(U&&U['mID']){return U['mID']}}
function O(){var T,U=P('__zlcprivacy')
if(typeof U=='boolean'){T=U
L(U)}
return T}
function P(T){var U=x.getJSONCookie(T)
return U[F]}
function Q(T){var U=window.location.search.slice(1).split('&'),V
for(var W=0;W<U.length;W++){V=U[W].split('=')
if(V[0]==T){try {return window.decodeURIComponent(V[1]||'')}catch(X){return ''}}}
return ''}
function R(T,U){var V=w.get(A)||{}
if(!V[F])V[F]={}
var W=V[F]
W[T]=U
W['timestamp']=+new Date()
w.set(A,V)}
function S(T){var U=w.get(A)||{}
if(!U[F])return {}
var V=U[F]
if(!V.timestamp)return V[T]||{}
var W=+new Date()
if(W-V.timestamp>E)return {}
else return V[T]}
if((typeof G==='function')&&G.prototype&&!G.__jx__no_fqname){G.prototype.__jx__fqname_chain=[(G.prototype.__jx__fqname_chain||"")," ","meshim_widget_controllers_StorageController"].join('')
G.prototype.__jx__fqname="meshim_widget_controllers_StorageController"}
return G})()
b.__$$__meshim_widget_widgets_form_Field=(function(){var w=b.__$$__jx_ui_Widget
function x(y,z,A,B,C){if(!(this instanceof x))return new x(y,z,A,B,C)
w.call(this,y,z,A,B,C)}
x.prototype=e(w.prototype)
x.prototype.validate=function(y){var z=w.prototype.validate.call(this,y)
z?this.removeClass('invalid'):this.addClass('invalid')
return z}
x.prototype.setRequired=function(y){y=m(y)
this.label_required&&this.label_required.setText(y?' *':'')
this.input&&this.input.setRequired(y)
!y&&this.input&&this.input.hideErrorMessage()
return this}
x.prototype.destroy=function(){this.label=this.label_name=this.label_required=this.input=this.error_message=null
return w.prototype.destroy.call(this)}
if((typeof x==='function')&&x.prototype&&!x.__jx__no_fqname){x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","meshim_widget_widgets_form_Field"].join('')
x.prototype.__jx__fqname="meshim_widget_widgets_form_Field"}
return x})()
b.__$$__jx_ui_Frame=(function(){var w=b.__$$__jx_ui_Widget,x=p.isQuirks,y=p.bugs.noBoxSizing,z=y?'block':'table'
function A(B,C,D,E,F){if(!(this instanceof A))return new A(B,C,D,E,F)
if(!F)F={}
this.iframe_quirks=(B.ownerDocument!=document)
this.container=new w(B,null,null,null,{})
this.container.addClass('container')
var G=this
this.container.destroy=function(){G.destroy()}
this.container.empty=function(){G.empty()}
this.container_middle=new w(this.container,null,null,null,{})
this.container_middle.addClass('container_middle')
w.call(this,this.container_middle,C,D,E,F)
this.useDisplay=!0
if(y){this.container.setStyle('position','relative')
this.container_middle.setStyle('position','absolute')
this.setStyle('position','relative')
if(x||this.iframe_quirks)this.container_middle.setStyle('width','100%').setStyle('left',0)}
else{F.visible||this.container.setStyle('display','table')
this.container_middle.setStyle('display','table-cell').setStyle('width','100%')
this.setStyle('display','table')}
this.container.setStyle('overflow','hidden').setStyle('width','100%').setStyle('height','100%')
F.hAlign||this.setHAlign()
F.vAlign||this.setVAlign()}
A.prototype=e(w.prototype)
A.prototype.show=function(){if(this.container&&this.container.dom.style.display!=z){this.container.setVisible(z)
this.fire('show')}
return this}
A.prototype.hide=function(){if(this.container&&this.container.dom.style.display!='none'){this.container.setVisible('none')
this.fire('hide')}
return this}
A.prototype.isVisible=function(){return this.container&&this.container.dom.style.display==z}
A.prototype.setZIndex=function(B){this.container&&this.container.setZIndex(B)
return this}
A.prototype.destroy=function(){w.prototype.destroy.call(this)
if(this.container){w.prototype.empty.call(this.container)
this.container.empty=null
w.prototype.destroy.call(this.container)
this.container=this.container_middle=null}}
A.prototype.getHAlign=function(){return this.hAlign}
A.prototype.setHAlign=function(B){switch(B){case 'left':if(x||this.iframe_quirks){this.container_middle.setStyle('text-align','left')}
else if(y){this.setStyle('margin-left','0').setStyle('margin-right','auto')}
else{this.container_middle.setStyle('left','0%').setStyle('right','')}
this.hAlign=B
break
case 'right':if(x||this.iframe_quirks){this.container_middle.setStyle('text-align','right')}
else if(y){this.setStyle('margin-left','auto').setStyle('margin-right','0')}
else{this.container_middle.setStyle('left','').setStyle('right','0%')}
this.hAlign=B
break
default:if(x||this.iframe_quirks){this.container_middle.setStyle('text-align','center')}
else if(y){this.container_middle.setStyle('left','').setStyle('right','')}
this.setStyle('margin-left','auto').setStyle('margin-right','auto')
this.hAlign='center'}}
A.prototype.getVAlign=function(){return this.vAlign}
A.prototype.setVAlign=function(B){switch(B){case 'top':if(y){this.container_middle.setStyle('top','0%').setStyle('bottom','')
this.setStyle('top','')}
else{this.container_middle.setStyle('vertical-align','top')}
this.vAlign=B
break
case 'bottom':if(y){this.container_middle.setStyle('top','').setStyle('bottom','0%')
this.setStyle('top','')}
else{this.container_middle.setStyle('vertical-align','bottom')}
this.vAlign=B
break
default:if(y){this.container_middle.setStyle('top','50%').setStyle('bottom','')
this.setStyle('top','-50%')}
else{this.container_middle.setStyle('vertical-align','middle')}
this.vAlign='middle'}
return this}
A.prototype.getAlign=function(){return this.hAlign+' '+this.vAlign}
A.prototype.setAlign=function(B){if(typeof B!='string')return
B=B.replace(/^\s*|\s*$/,'').replace(/\s+/g,' ').split(' ')
this.setHAlign(B[0])
this.setVAlign(B[1])}
if((typeof A==='function')&&A.prototype&&!A.__jx__no_fqname){A.prototype.__jx__fqname_chain=[(A.prototype.__jx__fqname_chain||"")," ","jx_ui_Frame"].join('')
A.prototype.__jx__fqname="jx_ui_Frame"}
return A})()
b.__$$__meshim_widget_widgets_Toast=(function(){function w(x,y,z,A,B){if(!(this instanceof w))return new w(x,y,z,A,B)
y=y||v.generateID()
var C=[b.__$$__jx_ui_Widget,null,null,[],{"selectable":"false"}],D=C[0].call(this,x,y,null,v.mangleIDs(y,C[3]),C[4]),E=D||this
v.set(y,E)
if(!w.__jx__jcss_generated){t.generate(x,w.prototype.__jx__fqname,w.__jx__jcss,null,w)
w.__jx__jcss_generated=!0}
var F=(function(){})()
for(var G in F)if(F.hasOwnProperty(G))E[G]=F[G]
if(E.fire)E.fire('init')
E.setStyle&&E.setStyle(z)
E.setAttributes&&E.setAttributes(B)
if(typeof E.addChildren=='function')E.addChildren(A)
else v.addChildren(E,A)
if(E!==this){E.__jx__constructor=b.__$$__meshim_widget_widgets_Toast
E.__jx__native=!1}
return E}
w.prototype=e(b.__$$__jx_ui_Widget.prototype)
w.prototype.__jx__native=!1
w.prototype.__jx__super=b.__$$__jx_ui_Widget
w.__jx__jcss={"**self":{"position":"absolute","zIndex":"1000","color":"$$toastColor","background":"$$toastBg","padding":"$$toastPadding","borderWidth":"$$toastBorderWidth","borderStyle":"$$toastBorderStyle","borderColor":"$$toastBorderColor","radius":"$$toastRadius","boxShadow":"$$toastShadow"},"&.mobile":{"position":"fixed"}}
w.prototype.__jx__fqname_chain=[(w.prototype.__jx__fqname_chain||"")," ","meshim_widget_widgets_Toast"].join('')
w.prototype.__jx__fqname="meshim_widget_widgets_Toast"
w.prototype.__jx__constructor=w
return w})()
b.__$$__meshim_widget_widgets_Body=(function(){var w=b.__$$__jx_ui_Widget
function x(y,z,A,B,C){if(!(this instanceof x))return new x(y,z,A,B,C)
if(!x.__jx__jcss_generated){t.generate(this,x.prototype.__jx__fqname,x.__jx__jcss,null,x)
x.__jx__jcss_generated=!0}
w.call(this,y,z,A,B,C)}
x.__jx__jcss={"**self":{"lineHeight":"1.2","marginBottom":"$$marginL"},"&.short":{"marginBottom":"0"}}
x.prototype=e(w.prototype)
x.prototype.__jx__super=w
if((typeof x==='function')&&x.prototype&&!x.__jx__no_fqname){x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","meshim_widget_widgets_Body"].join('')
x.prototype.__jx__fqname="meshim_widget_widgets_Body"}
return x})()
b.__$$__jx_ui_Image=(function(){var w=b.__$$__jx_ui_Widget
function x(y,z,A,B,C){if(!(this instanceof x))return new x(y,z,A,B,C)
if(!C)C={}
C.tagName||(C.tagName='img')
w.call(this,y,z,A,B,C)}
x.prototype=e(w.prototype)
x.prototype.getAlt=function(){return this.dom.alt}
x.prototype.setAlt=function(y){this.dom.alt=y
return this}
if((typeof x==='function')&&x.prototype&&!x.__jx__no_fqname){x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","jx_ui_Image"].join('')
x.prototype.__jx__fqname="jx_ui_Image"}
return x})()
b.__$$__meshim_widget_themes_Simple=(function(){var w=b.__$$__meshim_common_Chroma,x=b.__$$__meshim_widget_utils_Color,y=b.__$$__meshim_widget_themes_Base,z={}
z._super=y
z.defaults={colors:{primary$string:'#555555',banner$string:'#EEEEEE',bubble$string:'#E59341'}}
z.generate=function(A){var B="#444",C="#666",D="#999",E="#AAA",F="#DDD",G="#EEE",H="#FBFBFB",I=w.hex(A['colors']['primary$string']),J=I.luminance(),K=w.hex(A['colors']['banner$string']||A['colors']['primary$string']),L=120/255,M=200/255
function N(Y){var Z={},$$=Y.luminance(),$_=Y.darken(10),$a=Y.lighten(10),$b=w.interpolate(Y,x.black,0.5,'rgb'),$c=w.interpolate(Y,x.black,0.7,'rgb')
Z.color=new w.ColorScale({colors:[x.white,x.white,$b.darken(10),$b,$b],positions:[0,L-0.001,L+0.001,M,1],mode:"rgb"}).get($$).hex()
Z.bg=new w.ColorScale({colors:[Y,Y,Y.darken(10)],positions:[0,M,1],mode:"rgb"}).get($$).hex()
Z.iconColor=new w.ColorScale({colors:[Y,Y,$c,$c.lighten(10)],positions:[0,L-0.001,L+0.001,1],mode:"rgb"}).get($$).hex()
Z.borderColor=new w.ColorScale({colors:[$_,$_,Y.darken(20)],positions:[0,M,1],mode:"rgb"}).get($$).hex()
Z.hoverBg=new w.ColorScale({colors:[$a,Y,Y.darken(5)],positions:[0,M,1],mode:"rgb"}).get($$).hex()
return Z}
var O=N(I),P=N(I.lighten(15)),Q=N(K),R=120/255,S=220/255
function T(Y,Z){var $$={},$_=Y.luminance(),$a=w.interpolate(Y,x.black,Z?0.7:0.5,'rgb'),$b=Z?w.color(x.white):w.interpolate(Y,x.white,0.5,'rgb')
$$.color=new w.ColorScale({colors:[$b,$b.lighten(50),$a,$a.lighten(10)],positions:[0,R-0.001,R+0.001,1],mode:"rgb"}).get($_).hex()
$$.bg=Y.hex()
return $$}
var U=T(I),V=T(K,!0),W={borderColor:F,headColor:U.color,headBg:I,contentColor:B,contentBlockBg:G,placeholderColor:E,inputColor:C,inputBorderColor:F,inputFocusBorderColor:x.clampLuminance(I,0.2,0.4).hex(),buttonColor:O.color,buttonBg:O.bg,buttonBorderColor:O.borderColor,buttonHoverBg:O.hoverBg,buttonShadow:"0px 1px 2px rgba(0,0,0,0.1), inset 0px 1px 0px rgba(255,255,255,0.25)",buttonSecColor:P.color,buttonSecBg:P.bg,buttonSecBorderColor:P.borderColor,buttonSecHoverBg:P.hoverBg,scrollableFrameTopExtra:{"height":"5px","background":"gradient top rgba(0,0,0,0.05) rgba(0,0,0,0)","backgroundColor":"transparent"},scrollableFrameBottomExtra:{"height":"5px","background":"gradient top rgba(0,0,0,0) rgba(0,0,0,0.05)","backgroundColor":"transparent"},toastBg:"rgba(153, 153, 153, 0.8)",toastBorderColor:D,toastShadow:"0px 1px 1px rgba(0,0,0,0.08), inset 0px 1px 0px rgba(255,255,255,0.16)",avatarBorderColor:F,profileCardAvatarBorderWidth:0,profileCardAvatarShadow:"0px 1px 2px rgba(0,0,0,0.2)",profileCardNameColor:x.clampLuminance(I,0,0.2).hex(),profileCardTitleColor:E,bottomBorderWidth:"1px 0 0",bottomBorderColor:G,chatMotifHill:G,chatMotifBubble:"#BBB",chatButtonColor:O.color,chatButtonBg:I.hex(),chatButtonBorderWidth:J>M?"":0,chatButtonBorderColor:J>M?F:"",faviconBg:new w.ColorScale({colors:[I.lighten(15),I.lighten(5),I.darken(5),I.darken(5)],positions:[0,0.05,0.0501,1],mode:"rgb"}).get(J).hex(),windowColor:C,windowPadding:"3px",windowShadow:"0px 0px 3px 2px rgba(0,0,0,0.1)",windowContentBorderWidth:"0 1px",windowContentBorderColor:F,menuBorderColor:F,menuItemHoverBg:G,titleBarColor:U.color,titleBarBg:U.bg,titleBarBorderWidth:J>S?'1px':0,titleBarBorderColor:J>S?F:'',actionBarColor:D,actionBarBorderWidth:"0 1px 1px 1px",actionBarBorderColor:F,actionBarHoverColor:C,chatPanelProfileCardContainerBorderWidth:"0 0 1px",chatPanelProfileCardContainerBorderColor:G,chatLogVisitorBubbleBg:H,chatLogVisitorBubbleBorderColor:G,chatLogAgentBubbleBg:w.interpolate(x.clampLuminance(I,0.4,0.8),x.white,0.8,'rgb').hex(),chatLogAgentBubbleBorderColor:w.interpolate(x.clampLuminance(I,0.4,0.8),x.white,0.4,'rgb').hex(),chatLogAvatarBorderWidth:"$$borderWidth",chatTextAreaBorderWidth:"1px 0 0",chatTextAreaBorderColor:G,chatTextAreaInputShadow:"inset 0px 1px 3px rgba(0,0,0,0.1)",chatTextAreaInputFocusShadow:"inset 0px 1px 3px "+w.interpolate(x.clampLuminance(I,0.2,0.4),x.white,0.5,'rgb').hex(),chatTextAreaDropColor:B,chatTextAreaDropBg:G,chatTextAreaDropBorderWidth:"1px",chatTextAreaDropBorderStyle:"dashed",chatTextAreaDropBorderColor:B,badgeBorderWidth:0,badgeContentColor:V.color,badgeContentBg:V.bg,badgeContentBorderWidth:0,badgeFormBg:x.white,badgeFormBorderWidth:"1px 0",badgeFormBorderColor:F,badgeIconColor:Q.iconColor},X={authButtonColor:B,authButtonBg:"gradient top rgb(251,251,251) rgb(227,227,227)",authButtonBorderColor:F,authButtonHoverBg:"gradient top rgb(227,227,227) rgb(251,251,251)",bottomBorderWidth:0,menuBg:G,menuHeaderColor:D,menuItemHoverBg:F,actionBarColor:U.color,actionBarBg:I.darken(10).hex(),actionBarBorderWidth:0,actionBarHoverColor:U.color,chatPanelProfileCardContainerBorderColor:F,chatTextAreaBorderColor:F,chatTextAreaInputShadow:"none",chatTextAreaInputBorderWidth:0,chatTextAreaInputRadius:0,chatTextAreaInputFocusShadow:"none",brandingLinkColor:D}
return {standard:W,mobile:X}}
if((typeof z==='function')&&z.prototype&&!z.__jx__no_fqname){z.prototype.__jx__fqname_chain=[(z.prototype.__jx__fqname_chain||"")," ","meshim_widget_themes_Simple"].join('')
z.prototype.__jx__fqname="meshim_widget_themes_Simple"}
return z})()
b.__$$__jx_ui_Label=(function(){var w=b.__$$__jx_ui_Widget
function x(y,z,A,B,C){if(!(this instanceof x))return new x(y,z,A,B,C)
if(!C)C={}
C.tagName||(C.tagName='label')
w.call(this,y,z,A,B,C)
if(C.selectable==null)this.setSelectable(!1)}
x.prototype=e(w.prototype)
if((typeof x==='function')&&x.prototype&&!x.__jx__no_fqname){x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","jx_ui_Label"].join('')
x.prototype.__jx__fqname="jx_ui_Label"}
return x})()
b.__$$__jx_ui_Localizer=(function(){var w=b.__$$__jx_ui_Widget
function x(z,A,B,C,D){if(!(this instanceof x))return new x(z,A,B,C,D)
if(!D)D={}
this.childConstructors=[]
this.childAttributes=[]
this.delimiter='@'
w.call(this,z,A,B,C,D)
var E=this
this._updateContent=function(){E.updateContent()}
u&&u.onLanguage&&u.onLanguage(this._updateContent)
this.onDestruction(function(){u&&u.unLanguage&&u.unLanguage(E._updateContent)})}
x.prototype=e(w.prototype)
x.prototype.appendChild=function(z){if(g(z)){this.childConstructors.push(z[0])
this.childAttributes.push(z[4])
this._localizer_appendchild_override||this.updateContent()}
else w.prototype.appendChild.call(this,z)}
x.prototype.updateContent=function(){this.setContent(this.getContent())}
x.prototype.getContent=function(){return this.content}
x.prototype.setContent=function(z){this.content=z
this.empty()
if(!z)return
z.toString&&(z=z.toString())
var A=z,B=A.length,C=0,D,E=this.delimiter,F=E.length,G=0
while(C<B&&C!=-1){D=A.indexOf(E,C)
if(D==-1){D=B}
if(D>C){this._localizer_appendchild_override=!0
w.prototype.appendChild.call(this,[w,null,null,[y(A.slice(C,D))],{tagName:'label',display:'inline'}])
this._localizer_appendchild_override=!1
C=D}
if(D==C&&D!=B){var H=A.indexOf(E,D+F)
if(H==-1)H=B
this._localizer_appendchild_override=!0
w.prototype.appendChild.call(this,[this.childConstructors[G]||w,null,null,[y(A.slice(C+F,H))],this.childAttributes[G]||{tagName:'label',display:'inline'}])
this._localizer_appendchild_override=!1
C=H+F
G++}}
return this}
x.prototype.setChildProperties=function(z,A,B){this.childConstructors[z]=A
this.childAttributes[z]=B}
x.prototype.clearChildProperties=function(){this.childConstructors.length=this.childAttributes.length=0}
x.prototype.getDelimiter=function(){return this.delimiter}
x.prototype.setDelimiter=function(z){this.delimiter=z
this.updateContent()
return this}
function y(z){return z.replace(/&#([0-9]{1,4});/g,function(A,B){return String.fromCharCode(B)})}
if((typeof x==='function')&&x.prototype&&!x.__jx__no_fqname){x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","jx_ui_Localizer"].join('')
x.prototype.__jx__fqname="jx_ui_Localizer"}
return x})()
b.__$$__jx_ui_StyleSheet=(function(){var w=b.__$$__jx_ui_Widget
function x(y,z,A,B,C){if(!(this instanceof x))return new x(y,z,A,B,C)
var D=y.ownerDocument
if(!C)C={}
C.tagName||(C.tagName='style')
w.call(this,D.getElementsByTagName('head')[0],z,A,null,C)
this.dom.type='text/css'
this.addChildren(B)}
x.prototype=e(w.prototype)
x.prototype.getText=function(){return this.dom.styleSheet?this.dom.styleSheet.cssText:w.prototype.getText.call(this)}
x.prototype.addChildren=function(y){if(!y||!y.length)return
if('styleSheet' in this.dom){if(!this.dom.styleSheet){this.destroy()
return}
this.dom.styleSheet.cssText+=y.join('')}
else w.prototype.addChildren.call(this,[y.join('')])}
if((typeof x==='function')&&x.prototype&&!x.__jx__no_fqname){x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","jx_ui_StyleSheet"].join('')
x.prototype.__jx__fqname="jx_ui_StyleSheet"}
return x})()
b.__$$__meshim_common_GCanvas=(function(){var w=b.__$$__meshim_common_VmlCanvas,x=b.__$$__meshim_common_SvgCanvas,y=b.__$$__meshim_common_Canvas,z=b.__$$__meshim_common_Graphic,A,B=z.detectedGraphicType
switch(B){case 'canvas':A=y
break
case 'vml':A=w
break
case 'svg':A=x
break
case 'div':A=C
break}
function C(D,E,F,G,H){E=E||v.generateID()
var I=D.ownerDocument,J
J=I.createElement('div')
v.extend(J)
q.extend(J)
v.set(E,J)
var K=!1
J.appendToParent=function(L){if(!v.hasParentNode(J))v.appendChild(D,J)
if(L&&!K){if(D.appendToParent)D.appendToParent(!0)
K=!0}}
J.setViewBox=function(){return}
J.setStyle(F)
J.setAttributes(H)
v.addChildren(J,G)
J.appendToParent()
return J}
if((typeof A==='function')&&A.prototype&&!A.__jx__no_fqname){A.prototype.__jx__fqname_chain=[(A.prototype.__jx__fqname_chain||"")," ","meshim_common_GCanvas"].join('')
A.prototype.__jx__fqname="meshim_common_GCanvas"}
return A})()
b.__$$__meshim_widget_widgets_Emoticon=(function(){var w=b.__$$__jx_ui_Widget
function x(y,z,A,B,C){if(!(this instanceof x))return new x(y,z,A,B,C)
w.call(this,y,z,A,B,C)
this.on('focus',function(){this.addClass('focus')})
this.on('blur',function(){this.removeClass('focus')})}
x.prototype=e(w.prototype)
if((typeof x==='function')&&x.prototype&&!x.__jx__no_fqname){x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","meshim_widget_widgets_Emoticon"].join('')
x.prototype.__jx__fqname="meshim_widget_widgets_Emoticon"}
return x})()
b.__$$__meshim_widget_widgets_profileCard_MemberName=(function(){function w(x,y,z,A,B){if(!(this instanceof w))return new w(x,y,z,A,B)
y=y||v.generateID()
var C=[b.__$$__jx_ui_html_div,null,null,[],{}],D=C[0].call(this,x,y,null,v.mangleIDs(y,C[3]),C[4]),E=D||this
v.set(y,E)
if(!w.__jx__jcss_generated){t.generate(x,w.prototype.__jx__fqname,w.__jx__jcss,null,w)
w.__jx__jcss_generated=!0}
var F=(function(){var H=null
function I(K){E.setText(K||'')}
function J(K){if(H===K)return
H&&E.autounbind(H,'value',I)
H=K
H&&E.autobind(H,'value',I)}
E.setDataNode=J})()
for(var G in F)if(F.hasOwnProperty(G))E[G]=F[G]
if(E.fire)E.fire('init')
E.setStyle&&E.setStyle(z)
E.setAttributes&&E.setAttributes(B)
if(typeof E.addChildren=='function')E.addChildren(A)
else v.addChildren(E,A)
if(E!==this){E.__jx__constructor=b.__$$__meshim_widget_widgets_profileCard_MemberName
E.__jx__native=!1}
return E}
w.prototype=e(b.__$$__jx_ui_html_div.prototype)
w.prototype.__jx__native=!1
w.prototype.__jx__super=b.__$$__jx_ui_html_div
w.__jx__jcss={"**self":{"whiteSpace":"inherit","overflow":"hidden","textOverflow":"ellipsis","fontWeight":"bold","height":"15px","lineHeight":"12px"}}
w.prototype.__jx__fqname_chain=[(w.prototype.__jx__fqname_chain||"")," ","meshim_widget_widgets_profileCard_MemberName"].join('')
w.prototype.__jx__fqname="meshim_widget_widgets_profileCard_MemberName"
w.prototype.__jx__constructor=w
return w})()
b.__$$__jx_ui_Application=(function(){var w=b.__$$__jx_ui_Widget
function x(z,A,B,C,D){if(!(this instanceof x))return new x(z,A,B,C,D)
if(!D)D={}
D.tagName||(D.tagName='div')
D.position||(D.position='absolute')
D.visible||(D.visible='hidden')
D.margin||(D.margin='0')
D.padding||(D.padding='0')
D.border||(D.border='0')
D.height||(D.height='0')
D.width||(D.width='0')
w.call(this,z,A,B,C,D)}
x.prototype=e(w.prototype)
x.prototype.setDesktop=function(z){if(!m(z))return
var A=document.getElementsByTagName('head')[0]
A.appendChild(y('viewport','user-scalable=no, width=device-width, initial-scale=1, maximum-scale=1'))
if(p.isIOS){A.appendChild(y('apple-mobile-web-app-capable','yes'))
A.appendChild(y('apple-mobile-web-app-status-bar-style','black-translucent'))}}
function y(z,A){var B=document.createElement('meta')
B.name=z
B.content=A
return B}
if((typeof x==='function')&&x.prototype&&!x.__jx__no_fqname){x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","jx_ui_Application"].join('')
x.prototype.__jx__fqname="jx_ui_Application"}
return x})()
b.__$$__jx_ui_IFrame=(function(){var w=b.__$$__jx_ui_Widget,x=b.__$$__jx_ui_HTMLEvent,y=b.__$$__jx_ui_HTMLElement
function z(A,B,C,D,E){if(!(this instanceof z))return new z(A,B,C,D,E)
if(!E)E={}
E.tagName||(E.tagName='iframe')
this._top=this._bottom=this._left=this._right=this._width=this._height=NaN
this._position=null
this.pos=''
this.offsetx=0
this.offsety=0
this._snaps=[0,0,0,0]
this.useDisplay=!1
this.doc=this.ownerDocument=A.ownerDocument
this.parentNode=A
this.attributes=E
this.tagName=E.tagName
this.isNew=!0
this.dom=this.doc.createElement(this.tagName)
this.dom.jx_wrapper=this
this.style=this.dom.style
this.children=[]
this._autobinds=[]
x.call(this);(this.dom.seamless!==a)&&(this.dom.seamless=!0)
this.dom.allowTransparency='true'
this.dom.frameBorder='0'
this.style.backgroundColor='transparent'
this.style.verticalAlign='text-bottom'
this.style.visibility='hidden'
A.appendChild(A instanceof y?this:this.dom)
B&&v.set(B,this)
var F
if(p.bugs.noBoxSizing)F='<html><head><style>html,body{height:100%;width:100%;background:none} *{border:0;padding:0;margin:0;}</style></head><body onload="window.isLoaded=true"></body></html>'
else F='<!DOCTYPE html><html><head><style>html,body{height:100%;width:100%;} *{border:0;padding:0;margin:0;box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box}</style></head><body onload="window.isLoaded = true"></body></html>'
if(p.isSafari||p.isChrome)this.dom.src='javascript:void(document.write(\''+F+'\'), document.close())'
else this.dom.src='javascript:false'
this.appendToParent(!0)
var G=this.iwin=this.dom.contentWindow,H=this.idoc=q.extend(G.document)
if(!p.isSafari&&!p.isChrome){H.write(F)
H.close()}
this.ihead=H.getElementsByTagName('head')[0]
var I=this.ibody=q.extend(H.body)
u&&u.onLanguage&&u.onLanguage(J)
function J(N){I.parentNode.setAttribute('lang',N)
I.parentNode.setAttribute('dir',u.flip('ltr'))}
u&&u.language&&J(u.language)
I.style.position='relative'
I.parentNode.style.overflowY=I.style.overflowY='hidden'
var K,L
if(p.bugs.noBoxSizing){K=new w(I,null,null,null,{position:'relative',width:'100%',height:'100%',overflow:'hidden'})
K.applyConstraints()
K.setPadding=function(N){I.style.padding=N}}
else{K=new w(I,null,null,null,{position:'absolute',top:0,right:0,bottom:0,left:0,overflow:'hidden'})
K.applyConstraints()}
var M='Background BackgroundImage Border BorderColor BorderStyle BorderWidth Color Cursor FontFamily FontSize FontWeight LetterSpacing LineHeight Opacity Padding Selectable TextAlign'.split(' ')
while((L=M.pop()))this['set'+L]=(function(N){return function(O){K['set'+N](O)
return this}})(L)
this.defaultPlacement=K
this.addChildren(D)
this.style.visibility=''
this.setStyle(C)
this.setAttributes(E)
t.bindIFrame(this)}
z.prototype=e(w.prototype)
z.prototype.destroy=function(){t.unbindIFrame(this)
this.defaultPlacement&&this.defaultPlacement.destroy()
w.prototype.destroy.call(this)}
if((typeof z==='function')&&z.prototype&&!z.__jx__no_fqname){z.prototype.__jx__fqname_chain=[(z.prototype.__jx__fqname_chain||"")," ","jx_ui_IFrame"].join('')
z.prototype.__jx__fqname="jx_ui_IFrame"}
return z})()
b.__$$__meshim_common_GShape=(function(){var w=b.__$$__meshim_common_VmlShape,x=b.__$$__meshim_common_SvgShape,y=b.__$$__meshim_common_Graphic,z,A=y.detectedGraphicType
switch(A){case 'canvas':z=y.CanvasData
break
case 'vml':z=w
break
case 'svg':z=x
break
case 'div':z=B
break}
function B(){return null}
if((typeof z==='function')&&z.prototype&&!z.__jx__no_fqname){z.prototype.__jx__fqname_chain=[(z.prototype.__jx__fqname_chain||"")," ","meshim_common_GShape"].join('')
z.prototype.__jx__fqname="meshim_common_GShape"}
return z})()
b.__$$__meshim_widget_widgets_toast_disconnected_image_Dot=(function(){function w(x,y,z,A,B){if(!(this instanceof w))return new w(x,y,z,A,B)
y=y||v.generateID()
var C=[b.__$$__jx_ui_Widget,null,null,[[b.__$$__jx_ui_Widget,null,null,[],{"addClass":"dot"}]],{}],D=C[0].call(this,x,y,null,v.mangleIDs(y,C[3]),C[4]),E=D||this
v.set(y,E)
if(!w.__jx__jcss_generated){t.generate(x,w.prototype.__jx__fqname,w.__jx__jcss,null,w)
w.__jx__jcss_generated=!0}
var F=(function(){})()
for(var G in F)if(F.hasOwnProperty(G))E[G]=F[G]
if(E.fire)E.fire('init')
E.setStyle&&E.setStyle(z)
E.setAttributes&&E.setAttributes(B)
if(typeof E.addChildren=='function')E.addChildren(A)
else v.addChildren(E,A)
if(E!==this){E.__jx__constructor=b.__$$__meshim_widget_widgets_toast_disconnected_image_Dot
E.__jx__native=!1}
return E}
w.prototype=e(b.__$$__jx_ui_Widget.prototype)
w.prototype.__jx__native=!1
w.prototype.__jx__super=b.__$$__jx_ui_Widget
w.__jx__jcss={"**self":{"position":"relative","display":"inline-block","width, height":"14px","margin":"0 2px",".dot":{"position":"absolute","top, left":"4px","width, height":"6px","borderRadius":"3px","background":"$$toastColor","transition":"0.2s all"},"&.large .dot":{"top, left":"0","width, height":"14px","borderRadius":"7px"}}}
w.prototype.__jx__fqname_chain=[(w.prototype.__jx__fqname_chain||"")," ","meshim_widget_widgets_toast_disconnected_image_Dot"].join('')
w.prototype.__jx__fqname="meshim_widget_widgets_toast_disconnected_image_Dot"
w.prototype.__jx__constructor=w
return w})()
b.__$$__meshim_widget_widgets_ErrorMessage=(function(){var w=b.__$$__jx_ui_Widget
function x(y,z,A,B,C){if(!(this instanceof x))return new x(y,z,A,B,C)
if(!x.__jx__jcss_generated){t.generate(this,x.prototype.__jx__fqname,x.__jx__jcss,null,x)
x.__jx__jcss_generated=!0}
w.call(this,y,z,A,B,C)}
x.__jx__jcss={"**self":{"marginTop":"$$marginS","marginBottom":"$$margin","color":"$$errorMessageColor","fontWeight":"$$errorMessageFontWeight","fontStyle":"$$errorMessageFontStyle"}}
x.prototype=e(w.prototype)
x.prototype.__jx__super=w
if((typeof x==='function')&&x.prototype&&!x.__jx__no_fqname){x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","meshim_widget_widgets_ErrorMessage"].join('')
x.prototype.__jx__fqname="meshim_widget_widgets_ErrorMessage"}
return x})()
b.__$$__meshim_widget_components_chatWindow_preChatOfflineForm_operatingHours_Period=(function(){function w(x,y,z,A,B){if(!(this instanceof w))return new w(x,y,z,A,B)
y=y||v.generateID()
var C=[b.__$$__jx_ui_Widget,null,null,[[b.__$$__jx_ui_Label,"start",null,[],{"id":"start"}],[b.__$$__jx_ui_Label,null,null,[],{"text":" "}],[b.__$$__jx_ui_Label,null,null,[u(145)],{}],[b.__$$__jx_ui_Label,null,null,[],{"text":" "}],[b.__$$__jx_ui_Label,"end",null,[],{"id":"end"}]],{}],D=C[0].call(this,x,y,null,v.mangleIDs(y,C[3]),C[4]),E=D||this
v.set(y,E)
var F=v.get(y+'__start'),G=v.get(y+'__end')
if(!w.__jx__jcss_generated){t.generate(x,w.prototype.__jx__fqname,w.__jx__jcss,null,w)
w.__jx__jcss_generated=!0}
var H=(function(){E.setStart=function(J){F.setText(J)}
E.setEnd=function(J){G.setText(J)}})()
for(var I in H)if(H.hasOwnProperty(I))E[I]=H[I]
if(E.fire)E.fire('init')
E.setStyle&&E.setStyle(z)
E.setAttributes&&E.setAttributes(B)
if(typeof E.addChildren=='function')E.addChildren(A)
else v.addChildren(E,A)
if(E!==this){E.__jx__constructor=b.__$$__meshim_widget_components_chatWindow_preChatOfflineForm_operatingHours_Period
E.__jx__native=!1}
return E}
w.prototype=e(b.__$$__jx_ui_Widget.prototype)
w.prototype.__jx__native=!1
w.prototype.__jx__super=b.__$$__jx_ui_Widget
w.__jx__jcss={}
w.prototype.__jx__fqname_chain=[(w.prototype.__jx__fqname_chain||"")," ","meshim_widget_components_chatWindow_preChatOfflineForm_operatingHours_Period"].join('')
w.prototype.__jx__fqname="meshim_widget_components_chatWindow_preChatOfflineForm_operatingHours_Period"
w.prototype.__jx__constructor=w
return w})()
b.__$$__meshim_widget_widgets_Header=(function(){var w=b.__$$__meshim_widget_widgets_Body
function x(y,z,A,B,C){if(!(this instanceof x))return new x(y,z,A,B,C)
if(!x.__jx__jcss_generated){t.generate(this,x.prototype.__jx__fqname,x.__jx__jcss,null,x)
x.__jx__jcss_generated=!0}
w.call(this,y,z,A,B,C)}
x.__jx__jcss={"**self":{"fontWeight":"bold"}}
x.prototype=e(w.prototype)
x.prototype.__jx__super=w
if((typeof x==='function')&&x.prototype&&!x.__jx__no_fqname){x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","meshim_widget_widgets_Header"].join('')
x.prototype.__jx__fqname="meshim_widget_widgets_Header"}
return x})()
b.__$$__meshim_widget_widgets_motif_Chat=(function(){function w(x,y,z,A,B){if(!(this instanceof w))return new w(x,y,z,A,B)
y=y||v.generateID()
var C=[b.__$$__meshim_widget_widgets_Motif,null,null,[],{"items":"hill, bubble b1, bubble b2, bubble b3, bubble b4, bubble b5"}],D=C[0].call(this,x,y,null,v.mangleIDs(y,C[3]),C[4]),E=D||this
v.set(y,E)
if(!w.__jx__jcss_generated){t.generate(x,w.prototype.__jx__fqname,w.__jx__jcss,null,w)
w.__jx__jcss_generated=!0}
var F=(function(){if(p.isOpera){H('b3')
H('b4')
H('b5')}
if(p.isIE8){E.setDisplay('none')}
function H(I){var J=E.dom.getElementsByClassName(I)[0]
if(!J)return
J.style.OTransform='none'
J.style.transform='none'}})()
for(var G in F)if(F.hasOwnProperty(G))E[G]=F[G]
if(E.fire)E.fire('init')
E.setStyle&&E.setStyle(z)
E.setAttributes&&E.setAttributes(B)
if(typeof E.addChildren=='function')E.addChildren(A)
else v.addChildren(E,A)
if(E!==this){E.__jx__constructor=b.__$$__meshim_widget_widgets_motif_Chat
E.__jx__native=!1}
return E}
w.prototype=e(b.__$$__meshim_widget_widgets_Motif.prototype)
w.prototype.__jx__native=!1
w.prototype.__jx__super=b.__$$__meshim_widget_widgets_Motif
w.__jx__jcss={"**self":{"width":"100%","height":"50px","fontFamily":"zopim, \"Segoe UI Symbol\", \"Arial Unicode MS\", \"Lucida Sans Unicode\", sans-serif","*display":"none"},"*":{"position":"absolute"},".hill":{"width":"95%","height":"20px","bottom":0,"left":"2.5%","borderTopLeftRadius":"50% 100%","borderTopRightRadius":"50% 100%","background":"$$chatMotifHill"},".bubble":{"top":0,"color":"$$chatMotifBubble","&:before":{"content":"'\\1f4ac'"}},".b1":{"fontSize":"24px","top":"12px","left":"10%","opacity":0.4},".b2":{"fontSize":"16px","top":"16px","left":"21%"},".b3":{"fontSize":"16px","top":"13px","right":"33.5%","opacity":0.4},".b4":{"fontSize":"16px","top":"14px","right":"26%"},".b5":{"fontSize":"35px","top":0,"right":"11%","opacity":0.2},".b3, .b4, .b5":{"transform":"scale(-1, 1)"}}
w.prototype.__jx__fqname_chain=[(w.prototype.__jx__fqname_chain||"")," ","meshim_widget_widgets_motif_Chat"].join('')
w.prototype.__jx__fqname="meshim_widget_widgets_motif_Chat"
w.prototype.__jx__constructor=w
return w})()
b.__$$__meshim_widget_widgets_ratingBar_GoodRatingButton=(function(){function w(x,y,z,A,B){if(!(this instanceof w))return new w(x,y,z,A,B)
y=y||v.generateID()
var C=[b.__$$__meshim_widget_widgets_ratingBar_RatingButton,null,null,[[b.__$$__jx_ui_html_span,null,null,[[b.__$$__meshim_widget_widgets_IconFont,null,null,[],{"icon":"happy","addClass":"rating_icon"}],[b.__$$__jx_ui_html_span,null,null,[u(140)],{"class":"description"}]],{"placement":"default_value","discardPlacement":"true"}],[b.__$$__jx_ui_html_span,null,null,[[b.__$$__meshim_widget_widgets_IconFont,null,null,[],{"icon":"happier","addClass":"rating_icon"}],[b.__$$__jx_ui_html_span,null,null,[u(140)],{"class":"description"}]],{"placement":"selected_value","discardPlacement":"true"}]],{}],D=C[0].call(this,x,y,null,v.mangleIDs(y,C[3]),C[4]),E=D||this
v.set(y,E)
if(!w.__jx__jcss_generated){t.generate(x,w.prototype.__jx__fqname,w.__jx__jcss,null,w)
w.__jx__jcss_generated=!0}
var F=(function(){})()
for(var G in F)if(F.hasOwnProperty(G))E[G]=F[G]
if(E.fire)E.fire('init')
E.setStyle&&E.setStyle(z)
E.setAttributes&&E.setAttributes(B)
if(typeof E.addChildren=='function')E.addChildren(A)
else v.addChildren(E,A)
if(E!==this){E.__jx__constructor=b.__$$__meshim_widget_widgets_ratingBar_GoodRatingButton
E.__jx__native=!1}
return E}
w.prototype=e(b.__$$__meshim_widget_widgets_ratingBar_RatingButton.prototype)
w.prototype.__jx__native=!1
w.prototype.__jx__super=b.__$$__meshim_widget_widgets_ratingBar_RatingButton
w.__jx__jcss={"**self":{".description":{"marginLeft":"5px"}}}
w.prototype.__jx__fqname_chain=[(w.prototype.__jx__fqname_chain||"")," ","meshim_widget_widgets_ratingBar_GoodRatingButton"].join('')
w.prototype.__jx__fqname="meshim_widget_widgets_ratingBar_GoodRatingButton"
w.prototype.__jx__constructor=w
return w})()
b.__$$__meshim_widget_widgets_FontLoader=(function(){var w=b.__$$__jx_ui_StyleSheet,x=b.__$$__meshim_widget_Config,y=['eot','woff','ttf','svg'],z=['eot','svg','woff','ttf'],A={eot:"src:url(@@DATA@@);src:url(@@DATA_SPECIAL@@)format('embedded-opentype')",woff:"url(@@DATA@@)format('woff')",ttf:"url(@@DATA@@)format('truetype')",svg:"url(@@DATA@@)format('svg')"},B={eot:'application/vnd.ms-fontobject',woff:'application/font-woff',ttf:'font/ttf',svg:'font/svg'},C="@font-face{font-family:'@@NAME@@';@@FORMATS@@;font-weight:normal;font-style:normal;}",D="data:@@MIME@@;base64,@@B64DATA@@ ",E="'@@FONTS_URL@@/@@NAME@@.@@FORMAT@@'",F="'@@FONTS_URL@@/@@NAME@@.@@FORMAT@@?#iefix'"
function G(H,I,J,K,L){if(!(this instanceof G))return new G(H,I,J,K,L)
w.call(this,H,I,J,K,L)}
G.prototype=e(w.prototype)
G.prototype.setFont=function(H){var I,J=[],K,L,M=y,N=this.getBase64()
if(p.isIE<=8||p.isQuirks||(window.document.documentMode&&window.document.documentMode<=8)){N={}}
if(p.isChrome&&p.isWindows){M=z}
for(var O=0,P=M.length;O<P;O++){L=M[O]
K=A[L]
J.push(K.replace(/@@DATA@@/g,N[L]?D:E).replace(/@@DATA_SPECIAL@@/g,N[L]?D:F).replace(/@@FONTS_URL@@/g,x.FONTS_URL).replace(/@@FORMAT@@/g,L).replace(/@@MIME@@/g,B[L]).replace(/@@B64DATA@@/g,N[L]))}
I=C.replace(/@@FORMATS@@/g,J.join(',')).replace(/@@NAME@@/g,H)
var Q=this
l(function(){if(!Q.dom)return
Q.addChildren([I])})
return this}
G.prototype.getBase64=function(){return this.base64||{}}
G.prototype.setBase64=function(H){this.base64=H}
if((typeof G==='function')&&G.prototype&&!G.__jx__no_fqname){G.prototype.__jx__fqname_chain=[(G.prototype.__jx__fqname_chain||"")," ","meshim_widget_widgets_FontLoader"].join('')
G.prototype.__jx__fqname="meshim_widget_widgets_FontLoader"}
return G})()
b.__$$__meshim_widget_widgets_ratingBar_BadRatingButton=(function(){function w(x,y,z,A,B){if(!(this instanceof w))return new w(x,y,z,A,B)
y=y||v.generateID()
var C=[b.__$$__meshim_widget_widgets_ratingBar_RatingButton,null,null,[[b.__$$__jx_ui_html_span,null,null,[[b.__$$__meshim_widget_widgets_IconFont,null,null,[],{"icon":"sad","addClass":"rating_icon"}],[b.__$$__jx_ui_html_span,null,null,[u(141)],{"class":"description"}]],{"placement":"default_value","discardPlacement":"true"}],[b.__$$__jx_ui_html_span,null,null,[[b.__$$__meshim_widget_widgets_IconFont,null,null,[],{"icon":"sadder","addClass":"rating_icon"}],[b.__$$__jx_ui_html_span,null,null,[u(141)],{"class":"description"}]],{"placement":"selected_value","discardPlacement":"true"}]],{}],D=C[0].call(this,x,y,null,v.mangleIDs(y,C[3]),C[4]),E=D||this
v.set(y,E)
if(!w.__jx__jcss_generated){t.generate(x,w.prototype.__jx__fqname,w.__jx__jcss,null,w)
w.__jx__jcss_generated=!0}
var F=(function(){})()
for(var G in F)if(F.hasOwnProperty(G))E[G]=F[G]
if(E.fire)E.fire('init')
E.setStyle&&E.setStyle(z)
E.setAttributes&&E.setAttributes(B)
if(typeof E.addChildren=='function')E.addChildren(A)
else v.addChildren(E,A)
if(E!==this){E.__jx__constructor=b.__$$__meshim_widget_widgets_ratingBar_BadRatingButton
E.__jx__native=!1}
return E}
w.prototype=e(b.__$$__meshim_widget_widgets_ratingBar_RatingButton.prototype)
w.prototype.__jx__native=!1
w.prototype.__jx__super=b.__$$__meshim_widget_widgets_ratingBar_RatingButton
w.__jx__jcss={"**self":{".description":{"marginLeft":"5px"}}}
w.prototype.__jx__fqname_chain=[(w.prototype.__jx__fqname_chain||"")," ","meshim_widget_widgets_ratingBar_BadRatingButton"].join('')
w.prototype.__jx__fqname="meshim_widget_widgets_ratingBar_BadRatingButton"
w.prototype.__jx__constructor=w
return w})()
b.__$$__meshim_widget_widgets_Card=(function(){var w=b.__$$__jx_ui_Widget,x=b.__$$__meshim_widget_widgets_IconFont,y=b.__$$__meshim_widget_utils_Utils,z='minimize',A='plus'
function B(C,D,E,F,G){if(!(this instanceof B))return new B(C,D,E,F,G)
if(!G)G={}
this.$node
this.nodeValue
var H=this
this._update=function(I){H.update(I)}
this.minimized
w.call(this,C,D,E,null,G)
if(!B.__jx__jcss_generated){t.generate(this,B.prototype.__jx__fqname,B.__jx__jcss,null,B)
B.__jx__jcss_generated=!0}
this.toggle_button=new x(this,null,null,null,{icon:G.MinimizeIcon||z,addClass:'toggle_button',tabIndex:'0'})
this.defaultPlacement=this.container=new w(this,null,null,null,{addClass:'card_container'})
this.addChildren(F)
y.hoverFix(this)
y.onTransitionEnd(this,this,function(I){I.stopPropagation()
if(I.target.jx_wrapper!=H)return
if(H.minimized)return
H.scrollIntoView()})
y.onTransitionEnd(this,this.toggle_button,function(I){I.stopPropagation()})
this.on('click',function(I){if(I.target.jx_wrapper!=this.toggle_button&&!this.minimized)return
H.onClick()})}
B.__jx__jcss={"**self":{"position":"relative","overflow":"hidden","width":"100%","padding":"10px","*zoom":1,"transition":"height 0.3s, max-height 0.3s, background 0.3s","maxHeight":"2000px","&":"$$card","&.minimized":{"&":"$$cardMinimized","&, *":{"cursor":"pointer"},".toggle_button":{"opacity":1},"&:hover":{"&":"$$cardMinimizedHover",".toggle_button":{"color":"$$cardToggleHoverColor"}}},"&.hover, &:hover":{".toggle_button":{"opacity":1}}},".card_container":{"*overflow":"hidden","*width":"100%"},".toggle_button":{"float":"right","cursor":"pointer","marginLeft":"8px","fontSize":"10px","padding":"4px 0","opacity":0,"transition":"opacity 0.2s, color 0.2s","color":"$$cardToggleColor","&:hover":{"color":"$$cardToggleHoverColor"}}}
B.prototype=e(w.prototype)
B.prototype.setMinimizeIcon=function(C){this.toggle_button&&this.toggle_button.setIcon(C)}
B.prototype.setDataNode=function(C){if(this.$node==C)return
if(this.$node)this.autounbind(this.$node,'value',this._update)
this.$node=C
if(this.$node)this.autobind(this.$node,'value',this._update)}
B.prototype.update=function(C){this.nodeValue=this.$node.getValue()
if(C){if('minimized$bool' in C)this.minimized=C['minimized$bool']}
if(this.minimized){this.addClass('minimized')
this.setMinimizeIcon(A)}
else{this.removeClass('minimized')
this.setMinimizeIcon(z)}}
B.prototype.scrollIntoView=function(){if(!this.dom)return
if(this.minimized)return
var C=this.dom.offsetParent,D=C.clientHeight,E=C.scrollTop,F=this.dom.scrollHeight,G=this.dom.offsetTop
if((E<G)&&((E+D)>(F+G))){return}
else{var H=Math.max((D-F)/2,0)
H=Math.max(G-H,0).toFixed(0)
C.scrollTop=H}}
B.prototype.onClick=function(){this.$node&&this.$node.update({'minimized$bool':!this.minimized})
var C=this
l(function(){C.scrollIntoView()})}
if((typeof B==='function')&&B.prototype&&!B.__jx__no_fqname){B.prototype.__jx__fqname_chain=[(B.prototype.__jx__fqname_chain||"")," ","meshim_widget_widgets_Card"].join('')
B.prototype.__jx__fqname="meshim_widget_widgets_Card"}
return B})()
b.__$$__meshim_widget_components_chatButton_BubbleVector=(function(){function w(x,y,z,A,B){if(!(this instanceof w))return new w(x,y,z,A,B)
y=y||v.generateID()
var C=[b.__$$__meshim_common_GCanvas,null,null,[[b.__$$__meshim_common_GShape,"content",null,[],{"id":"content","fill":"linear, top, from(#E0741B), to(#E0981B)","stroke":"#c2c2c2"}]],{}],D=C[0].call(this,x,y,null,v.mangleIDs(y,C[3]),C[4]),E=D||this
v.set(y,E)
var F=v.get(y+'__content')
if(!w.__jx__jcss_generated){t.generate(x,w.prototype.__jx__fqname,w.__jx__jcss,null,w)
w.__jx__jcss_generated=!0}
var G=(function(){var I=8,J=8,K=8,L=12,M=19,N=2,O=[['tl','M',0,J],['cs',I,-J,0],['tr','L',-I,0],['cs',I,J,0],['br','L',0,-J-K],['cs',-I,J,0],['bl','L',I+M+L,-K],['bl','L',I+M+L/2,0],['bl','L',I+M,-K],['bl','L',I,-K],['cs',-I,-J,0],['z']]
function P(){F.setStrokeWidth(N)
E.setDimension=U
E.setFill=function(V){F.setFill(V)}}
function Q(V,W){var X=/^t[lr]|b[lr]$/,Y={'tl':[V.x,V.y],'tr':[V.x+V.width,V.y],'br':[V.x+V.width,V.y+V.height],'bl':[V.x,V.y+V.height]}
W=W.slice()
for(var Z=0;Z<W.length;Z++){var $$=W[Z],$_=$$[0]
if(X.test($_))W[Z]=R(Y[$_],$$)}
return W}
function R(V,W){var X=V[0],Y=V[1],Z=[]
W=W.slice()
W.shift()
Z.push(W.shift())
while(W.length>1){var $$=W.splice(0,2)
Z.push(X+$$[0])
Z.push(Y+$$[1])}
return Z}
function S(V){var W='',X={"cs":T}
for(var Y=0,Z=V.length;Y<Z;Y++){var $$=V[Y],$_=$$[0]
if(X[$_]){$$=X[$_].apply(null,$$.slice(1))}
W+=' '+$$.join(' ')}
return W}
function T(V,W,X){var Y=V,Z=W,$$=Math.round(0.5522848*Y),$_=Math.round(0.5522848*Z),$a=X?-Y*Z:Y*Z
if($a>0)return ['c',$$,0,Y,Z-$_,Y,Z]
else return ['c',0,$_,Y-$$,Z,Y,Z]}
function U(V,W){var X={x:N-1,y:N-1,width:V-2*N+2,height:W-2*N-3},Y=S(Q(X,O))
E.setWidth(V+'px').setHeight(W+'px').setViewBox('0 0 '+V+' '+W)
F.setPath(Y)
return E}
P()})()
for(var H in G)if(G.hasOwnProperty(H))E[H]=G[H]
if(E.fire)E.fire('init')
E.setStyle&&E.setStyle(z)
E.setAttributes&&E.setAttributes(B)
if(typeof E.addChildren=='function')E.addChildren(A)
else v.addChildren(E,A)
if(E!==this){E.__jx__constructor=b.__$$__meshim_widget_components_chatButton_BubbleVector
E.__jx__native=!1}
return E}
w.prototype=e(b.__$$__meshim_common_GCanvas.prototype)
w.prototype.__jx__native=!1
w.prototype.__jx__super=b.__$$__meshim_common_GCanvas
w.__jx__jcss={}
w.prototype.__jx__fqname_chain=[(w.prototype.__jx__fqname_chain||"")," ","meshim_widget_components_chatButton_BubbleVector"].join('')
w.prototype.__jx__fqname="meshim_widget_components_chatButton_BubbleVector"
w.prototype.__jx__constructor=w
return w})()
b.__$$__meshim_widget_widgets_ViewStack=(function(){var w=b.__$$__jx_ui_ViewStack,x=w
w=function(y,z,A,B,C){if(!(this instanceof w))return new w(y,z,A,B,C)
if(!w.__jx__jcss_generated){t.generate(this,w.prototype.__jx__fqname,w.__jx__jcss,null,w)
w.__jx__jcss_generated=!0}
if(!C)C={}
x.call(this,y,z,A,B,C)}
w.__jx__jcss={"**self":{"width, height":"100%","overflow":"hidden"}}
w.prototype=e(x.prototype)
w.prototype.__jx__super=x
if((typeof w==='function')&&w.prototype&&!w.__jx__no_fqname){w.prototype.__jx__fqname_chain=[(w.prototype.__jx__fqname_chain||"")," ","meshim_widget_widgets_ViewStack"].join('')
w.prototype.__jx__fqname="meshim_widget_widgets_ViewStack"}
return w})()
b.__$$__meshim_widget_themes_Classic=(function(){var w=b.__$$__meshim_common_Chroma,x=b.__$$__meshim_widget_utils_Color,y=b.__$$__meshim_widget_themes_Simple,z={}
z._super=y
z.defaults={colors:{bubble$string:"#e59341"}}
z.overrides={chat_button:{display_status$bool:!0,use_bubble$bool:!0},chat_window:{hide_profile_card$bool:!0,use_banner$bool:!1},message_type$string:"basic"}
z.generate=function(A){var B=x.clampLuminance(w.hex(A['colors']['primary$string']),0,0.8),C=x.clampLuminance(w.hex(A['colors']['bubble$string']),0,0.8),D=x.clampLuminance(x.darken(B,0.2,'rgb'),0,0.8),E=x.clampLuminance(x.lighten(B,0.2,'rgb'),0,0.8),F="gradient top "+x.rgbaColor(B,1)+" "+x.rgbaColor(D,1),G=x.clampLuminance(x.darken(C,0.2,'rgb'),0,0.8),H=x.clampLuminance(x.lighten(C,0.2,'rgb'),0,0.8),I=x.getColorAtContrast(B,x.white,5),J=x.getContrastColor(C,x.white,x.black,0.7,'bright',3,5)
B=B.hex()
C=C.hex()
D=D.hex()
E=E.hex()
G=G.hex()
H=H.hex()
I=I.hex()
J=J.hex()
var K="#DDD",L="#666",M="#f7f7f7",N={contentBg:M,actionBarBg:M,actionBarBorderColor:K,titleBarBg:F,titleBarBorderWidth:0,inputRadius:0,inputBorderColor:K,inputFocusBorderColor:H,inputFocusShadow:"none",chatTextAreaInputFocusShadow:"none",windowContentBorderColor:K,menuRadius:0,menuBorderColor:K,buttonColor:J,buttonBg:C,buttonHoverBg:C,buttonBorderColor:G,buttonSecBg:H,buttonSecHoverBg:H,buttonSecBorderColor:C,formSubmittedBg:x.white,formSubmittedRadius:"0px",formSubmittedBorderWidth:"1px",chatLogVisitorNameColor:L,chatLogAgentNameColor:G,chatLogSystemMsgBg:x.white,chatLogSystemMsgBorderWidth:"1px",chatLogSystemMsgPadding:"5px 0",chatLogSystemMsgBorderColor:K,chatButtonMinWidth:"190px",chatButtonBg:F,chatButtonShadow:"inset 0 1px 0px 0 rgba(0,0,0,0.4), inset 0 2px 0px 0 rgba(255,255,255,0.7)",chatButtonFontWeight:"normal",chatButtonStatusFontWeight:"bold",chatButtonPaddingFavicon:0,chatButtonBorderWidth:0,faviconBg:"transparent",faviconColor:C.toUpperCase()==B.toUpperCase()?'$$chatButtonColor':C,faviconDotsColor:B,chatBubbleTitleColor:J,chatBubbleTextColor:J,chatBubbleCloseColor:J,chatBubbleCloseShadow:"0px -1px 0px #999",chatBubbleCloseHoverBg:"rgba(0, 0, 0, 0.1)"},O={actionBarColor:I,actionBarBg:"transparent",actionBarBorderColor:"transparent"}
return {standard:N,mobile:O}}
if((typeof z==='function')&&z.prototype&&!z.__jx__no_fqname){z.prototype.__jx__fqname_chain=[(z.prototype.__jx__fqname_chain||"")," ","meshim_widget_themes_Classic"].join('')
z.prototype.__jx__fqname="meshim_widget_themes_Classic"}
return z})()
b.__$$__jx_ui_FloatingFrame=(function(){var w=b.__$$__jx_ui_Widget,x=b.__$$__jx_ui_IFrame,y=b.__$$__jx_ui_FullFrame,z=16000000,A;(function D(){var E=['','WebKit'],F='MutationObserver'
for(var G=0;G<E.length;G++)if((E[G]+F) in window)A=window[E[G]+F]})()
function B(D,E,F,G,H){if(!(this instanceof B))return new B(D,E,F,G,H)
var I=this
this._onAutoResize=function(){I.onAutoResize()}
w.call(this,D,E,F,null,H)
w.prototype.setMargin.call(this,'0')
w.prototype.setPadding.call(this,'0')
w.prototype.setBorder.call(this,'0')
w.prototype.setBackground.call(this,'transparent')
w.prototype.setOverflow.call(this,'hidden')
w.prototype.setPosition.call(this,'fixed')
this.appendToParent()
this.iframe=new x(this,null,null,null,{tagName:'iframe',position:'relative',width:'100%',height:'100%',border:'0',margin:'0',padding:'0',background:'transparent',overflow:'hidden'})
this.iwin=this.iframe.iwin
this.idoc=this.iframe.idoc
this.ibody=this.iframe.ibody
this.ihead=this.iframe.ihead
this.content=new y(this.iframe.defaultPlacement)
this.content.setOverflow('hidden')
this.wrapper=new w(this.content,null,null,null,{display:'inline-block'})
this.wrapper.__jx__fqname=this.__jx__fqname
this.wrapper.__jx__fqname_chain=this.__jx__fqname_chain
if(p.bugs.noBoxSizing){this.wrapper.style.display='inline'
this.wrapper.style.zoom='1'}
this.setAttributes(H)
this.defaultPlacement=this.wrapper
this.addChildren(G)
if(p.isIE<9){this.on('hide',function(){I.iframe.setDisplay('none')})
this.on('show',function(){I.iframe.setDisplay('block')})}
this.raise()}
B.prototype=e(w.prototype)
B.prototype.fire=function(D,E){w.prototype.fire.call(this,D,E)
this.iframe&&this.iframe.fire(D,E)
this.wrapper&&this.wrapper.fire(D,E)}
B.prototype.on=function(D,E){if(D=='init')w.prototype.on.call(this,D,E)
else this.wrapper&&this.wrapper.on(D,E)}
B.prototype.raise=function(D){D=parseInt(D,10)||1
this.setZIndex(z+=D)}
B.prototype.normalize=function(){var D=this.getXY()
this.moveTo(D[0],D[1]).setMargin(0)}
B.prototype.getXY=function(){var D=this.dom.offsetLeft,E=this.dom.offsetTop
if(p.isIE){if(p.isStrict){if(p.isIE6){D-=document.documentElement.scrollLeft
E-=document.documentElement.scrollTop}}
else{D-=document.body.scrollLeft
E-=document.body.scrollTop}}
else if(p.isSafari){var F=v.getStyles(this.iframe.offsetParent)
D+=parseInt(F.borderLeftWidth,10)
E+=parseInt(F.borderTopWidth,10)}
return [D,E]}
B.prototype.fitToContents=function D(E,F,G){E=E||this
var H=0,I=0
while(E.defaultPlacement)E=E.defaultPlacement
E.dom&&(E=E.dom)
I=E.scrollWidth-E.clientWidth
H=E.scrollHeight-E.clientHeight
this.resizeBy(I,H,G||0,F||0)}
B.prototype.destroy=function(){this.setAutoResize(!1)
w.prototype.destroy.call(this)
this.iframe=this.iwin=this.idoc=this.ibody=this.ihead=this.content=null}
B.prototype.setBackground=function(D){return this.iframe&&this.iframe.setBackground(D)}
B.prototype.setBackgroundImage=function(D){return this.iframe&&this.iframe.setBackgroundImage(D)}
B.prototype.setBorder=function(D){return this.iframe&&this.iframe.setBorder(D)}
B.prototype.setBorderColor=function(D){return this.iframe&&this.iframe.setBorderColor(D)}
B.prototype.setBorderStyle=function(D){return this.iframe&&this.iframe.setBorderStyle(D)}
B.prototype.setBorderWidth=function(D){return this.iframe&&this.iframe.setBorderWidth(D)}
B.prototype.setCursor=function(D){return this.iframe&&this.iframe.setCursor(D)}
B.prototype.setOpacity=function(D){return this.iframe&&this.iframe.setOpacity(D)}
B.prototype.setSelectable=function(D){return this.iframe&&this.iframe.setSelectable(D)}
B.prototype.setColor=function(D){return this.content&&this.content.setColor(D)}
B.prototype.setPadding=function(D){return this.content&&this.content.setPadding(D)}
B.prototype.setFontFamily=function(D){return this.content&&this.content.setFontFamily(D)}
B.prototype.setFontSize=function(D){return this.content&&this.content.setFontSize(D)}
B.prototype.setFontWeight=function(D){return this.content&&this.content.setFontWeight(D)}
B.prototype.setTextAlign=function(D){return this.content&&this.content.setTextAlign(D)}
B.prototype.setLetterSpacing=function(D){return this.content&&this.content.setLetterSpacing(D)}
B.prototype.setLineHeight=function(D){return this.content&&this.content.setLineHeight(D)}
B.prototype.setOverflow=function(D){return this.content&&this.content.setOverflow(D)}
var C=200
B.prototype.getAutoResize=function(){return this.autoResize}
B.prototype.setAutoResize=function(D){D=m(D)
this.autoResize=D
if(!this.wrapper)return
var E=this
if(this.autoResize){if(A){this._autoResizer=new A(function(){E.onAutoResize()})
this._autoResizer.observe(this.wrapper.dom,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}
else{if(this._autoResizer)window.clearInterval(this._autoResizer)
this._autoResizer=window.setInterval(this._onAutoResize,C)}
this.onAutoResize()}
else if(this._autoResizer){if(A){this._autoResizer.disconnect()
this._autoResizer=null}
else{window.clearInterval(this._autoResizer)
this._autoResizer=null}}
return this}
B.prototype.onAutoResize=function(){if(p.bugs.noBoxSizing){this.style.width='10px'
this.style.height='10px'}
var D=this.wrapper.getWidth(),E=this.wrapper.getHeight()
this.setWidth(D)
this.setHeight(E)
if(p.bugs.noBoxSizing){this.style.width=D+'px'
this.style.height=E+'px'
this.iframe.dom.className=this.iframe.dom.className}}
if((typeof B==='function')&&B.prototype&&!B.__jx__no_fqname){B.prototype.__jx__fqname_chain=[(B.prototype.__jx__fqname_chain||"")," ","jx_ui_FloatingFrame"].join('')
B.prototype.__jx__fqname="jx_ui_FloatingFrame"}
return B})()
b.__$$__meshim_widget_controllers_DataController=(function(){var w=b.__$$__jx_data_DataNode,x=b.__$$__meshim_widget_Config,y=b.__$$__meshim_widget_controllers_DefaultDataNode,z=b.__$$__meshim_widget_controllers_StorageController,A=b.__$$__meshim_widget_utils_Utils,B=b.__$$__meshim_widget_utils_Mobile,C={'chatting':'livechat.channel.chatting$bool','account_status':'livechat.account.status$string','settings':'livechat.settings','ui':'livechat.ui','notification':'livechat.profile.notification'},D=['livechat.settings.cached$bool','livechat.ui.chat_window.menu_stack_name$string','livechat.ui.chat_window.pre_chat_form.submitted$bool','livechat.ui.post_chat_form.stack_index$int','livechat.ui.offline_form.stack_index$int','livechat.ui.theme_reload$bool','livechat.ui.theme_loaded$bool','livechat.ui.popout$bool','livechat.ui.mobile$bool','livechat.ui.chat_window.chat_panel.file_toast.error$string'],E,F,G=0,H
function I(Z,$$,$_){W.root=E=Z instanceof w?Z:new w('root')
H=$_
if(!x.ACCOUNT_KEY&&!$$)return
if($$){F=$$
E.$$('livechat.ui.mockup$bool').update(!0)}
if(B.isMobileBrowser()){E.$$('livechat.ui.mobile$bool').update(!0)
if(B.isMobileWhitelist()){E.$$('livechat.ui.mobile_whitelist$bool').update(!0)}
if(B.isMobileTablet()){E.$$('livechat.ui.tablet$bool').update(!0)}}
if(window.$zopim_popout){E.$$('livechat.ui.popout$bool').update(!0)}
else if(!$$){t.setIFrameOnly(!0)}
var $a=Y(y),$b
if(!F){for(var $c in C)if(C.hasOwnProperty($c)){var $d=z.DOM.getVariable($c)
if($c=='settings'&&$d&&A.getKeys($d).length){E.update({livechat:{settings:{cached$bool:!0}}})}
if(typeof $d=='object'){$b=A.getKeys($d)
if($b&&$b.length)A.fullyExtend(A.descendsObj($a,C[$c]),$d)}
else{A.insertObj(C[$c],$d,$a)}}}
E.update($a)
if(!F){q.window.on('unload',function(){if(!J.canStoreCookie())return
for(var $f=0,$g=D.length;$f<$g;$f++){E.$$(D[$f]).update(null)}
for(var $h in C)if(C.hasOwnProperty($h)){if($h=='settings'){z.DOM.saveVariable($h,H.getServerSettings())
continue}
z.DOM.saveVariable($h,E.$$(C[$h]).getValue())}})}
var $e=z.getAllowCookieLaw()
if(typeof $e=='boolean')E.$$('livechat.profile').update({allow_cookies$bool:$e})
E.$$('livechat.settings.package').on('value',function($f){if(!$f)return
if('color_customization_enabled$int' in $f){if($f['color_customization_enabled$int'])G=1}
if('widget_customization_enabled$int' in $f){if($f['widget_customization_enabled$int'])G=2}})
W.fire('init')}
var J={sendChatMsg:K,sendFile:L,updateProfile:M,clearAll:N,reconnect:P,canStoreCookie:O,doExternalLogin:S,doExternalLogout:T,endChat:U,getLimit:V}
function K(Z,$$){var $_=$$||H.getServerTime().toFixed(0)
E.$('livechat').$('channel').$('log').$($_).write({'timestamp$int':$_,'nick$string':E.$('livechat').$('profile').$('nick$string').getValue()||'','display_name$string':E.$('livechat').$('profile').$('display_name$string').getValue()||'','type$string':'chat.msg','msg$string':Z.msg||'','group$string':Z.group||'','unverified$bool':!0,'__client$bool':!0})}
function L(Z){var $$=H.getServerTime().toFixed(0)
E.$('livechat').$('channel').$('log').$($$).write({'timestamp$int':$$,'nick$string':E.$('livechat').$('profile').$('nick$string').getValue()||'','display_name$string':E.$('livechat').$('profile').$('display_name$string').getValue()||'','type$string':'chat.file.upload','file_name$string':Z.file_name||'','file_type$string':Z.file_type||'','file_size$int':Z.file_size||0,'unverified$bool':!0,'__client$bool':!0})
return $$}
function M(Z){if(!Z)return
var $$={}
if('name' in Z)$$.display_name$string=Z.name+''
if('email' in Z)$$.email$string=Z.email+''
if('phone' in Z)$$.phone$string=Z.phone+''
E.$$('livechat.profile').write($$)
return !0}
function N(){z.clearAll()
E.$$('livechat.channel').update(null)
E.$$('profile').update(null)}
function O(){var Z=E.$$('livechat.settings.cookie_law.enabled$bool').getValue(),$$=E.$$('livechat.profile.allow_cookies$bool').getValue()
if(Z&&$$===!1)return !1
else return !0}
function P(){E.$$('connection').update({reconnect$bool:!0})}
var Q='zlivechatexternallogin_',R='width=500,height=500,menubar=no,toolbar=no,location=no,personalbar=no,status=no,resizable=yes,scrollbars=no'
function S(Z){if(F)return
var $$=E.$$('livechat.account.key$string').getValue(),$_=E.$$('livechat.profile.mid$string').getValue()
if(!Z||!$$||!$_)return
window.open(x.AUTH_URL.replace('$NAME',Z).replace('$KEY',$$).replace('$MID',$_),Q+$$,E.$$('livechat.ui.mobile$bool').getValue()?'':R)}
function T(){if(E.$$('livechat.profile.auth.type$string').getValue()){E.$$('livechat.profile.auth').write({'type$string':null})
E.$$('livechat.profile').update({'display_name$string':'','email$string':''})}
else{E.$$('livechat.profile').write({'display_name$string':'','email$string':''})}}
function U(){E.$$('livechat.channel').write({'chatting$bool':!1})}
function V(){if(E.$$('livechat.ui.mockup$bool').getValue()){return 100}
return G}
var W=q.extend({init:I,root:E,livechat:J}),X='toString'
function Y(Z){if(typeof (Z)!='object'||!Z)return Z
var $$={}
for(var $_ in Z)if(Z.hasOwnProperty($_))$$[$_]=Y(Z[$_])
if(Z.hasOwnProperty(X))$$[X]=Y(Z[X])
return $$}
if((typeof W==='function')&&W.prototype&&!W.__jx__no_fqname){W.prototype.__jx__fqname_chain=[(W.prototype.__jx__fqname_chain||"")," ","meshim_widget_controllers_DataController"].join('')
W.prototype.__jx__fqname="meshim_widget_controllers_DataController"}
return W})()
b.__$$__meshim_widget_widgets_toast_disconnected_Image=(function(){function w(x,y,z,A,B){if(!(this instanceof w))return new w(x,y,z,A,B)
y=y||v.generateID()
var C=[b.__$$__jx_ui_Widget,null,null,[],{}],D=C[0].call(this,x,y,null,v.mangleIDs(y,C[3]),C[4]),E=D||this
v.set(y,E)
if(!w.__jx__jcss_generated){t.generate(x,w.prototype.__jx__fqname,w.__jx__jcss,null,w)
w.__jx__jcss_generated=!0}
var F=(function(){var H=b.__$$__meshim_widget_widgets_toast_disconnected_image_Dot,I=100,J='large',K=6,L=-1,M=1,N=!1,O,P,Q,R=[]
for(var S=0;S<K;S++){R[S]=new H(E)}
E.play=function(){if(O)return E
T()
O=window.setInterval(T,I)
return E}
E.stop=function(){if(!O)return E
window.clearInterval(O)
O=null
return E}
E.reset=function(){R[Q]&&R[Q].removeClass(J)
Q=L
P=N
return E}
E.reset()
function T(){R[Q]&&R[Q].removeClass(J)
if(Q<(0-M)||Q>=(K+M))P=!P
P?Q++:Q--
R[Q]&&R[Q].addClass(J)}})()
for(var G in F)if(F.hasOwnProperty(G))E[G]=F[G]
if(E.fire)E.fire('init')
E.setStyle&&E.setStyle(z)
E.setAttributes&&E.setAttributes(B)
if(typeof E.addChildren=='function')E.addChildren(A)
else v.addChildren(E,A)
if(E!==this){E.__jx__constructor=b.__$$__meshim_widget_widgets_toast_disconnected_Image
E.__jx__native=!1}
return E}
w.prototype=e(b.__$$__jx_ui_Widget.prototype)
w.prototype.__jx__native=!1
w.prototype.__jx__super=b.__$$__jx_ui_Widget
w.__jx__jcss={}
w.prototype.__jx__fqname_chain=[(w.prototype.__jx__fqname_chain||"")," ","meshim_widget_widgets_toast_disconnected_Image"].join('')
w.prototype.__jx__fqname="meshim_widget_widgets_toast_disconnected_Image"
w.prototype.__jx__constructor=w
return w})()
b.__$$__meshim_widget_widgets_EmoticonPicker=(function(){function w(x,y,z,A,B){if(!(this instanceof w))return new w(x,y,z,A,B)
y=y||v.generateID()
var C=[b.__$$__jx_ui_Widget,null,null,[],{}],D=C[0].call(this,x,y,null,v.mangleIDs(y,C[3]),C[4]),E=D||this
v.set(y,E)
if(!w.__jx__jcss_generated){t.generate(x,w.prototype.__jx__fqname,w.__jx__jcss,null,w)
w.__jx__jcss_generated=!0}
var F=(function(){var H=b.__$$__meshim_widget_widgets_Emoticon,I=b.__$$__jx_ui_Widget,J={'ambivalent':':|','angry':':(','blush':':?','confused':':?','crazy':':?','crying':':?','frown':':?','gasp':':?'},K=6,L,M,N=[]
E.setDataNode=function(Q,R){if(L)E.autounbind(L,'value',O)
L=Q
M=R
if(L)E.autobind(L,'value',O)}
function O(Q){E.setDisplay(Q?'':'none')}
function P(){var Q,R=0
for(var S in J)if(J.hasOwnProperty(S)){Q=new H(E,null,null,null,{className:'meshim_widget_widgets_Emoticon '+S,title:S,value:J[S],tabIndex:0})
Q.setAttribute('data-index',R)
N.push(Q)
if((++R)%K==0)new I(E,null,null,null,{tagName:'br'})}
E.on('click',function(T){var U=T.target.jx_wrapper
if(U==E)return
while(U.parentNode!==E)U=U.parentNode
var V=U.getValue()
if(V){M&&M.update(U.getValue())
L&&L.update(!1)}})
E.on('keydown',function(T){var U
T.target.jx_wrapper
switch(T.keyCode){case 13:U=T.target.jx_wrapper.getValue()
if(U){M&&M.update(T.target.jx_wrapper.getValue())
L&&L.update(!1)}
break
case 27:L&&L.update(!1)
break
case 9:return
case 38:U=N[parseInt(T.target.jx_wrapper.getAttribute('data-index'),10)-K]
U&&U.focus()
break
case 40:U=N[parseInt(T.target.jx_wrapper.getAttribute('data-index'),10)+K]
U&&U.focus()
break
case 37:U=N[parseInt(T.target.jx_wrapper.getAttribute('data-index'),10)-1]
U&&U.focus()
break
case 39:U=N[parseInt(T.target.jx_wrapper.getAttribute('data-index'),10)+1]
U&&U.focus()
break
default:return}
T.preventDefault()})}
P()})()
for(var G in F)if(F.hasOwnProperty(G))E[G]=F[G]
if(E.fire)E.fire('init')
E.setStyle&&E.setStyle(z)
E.setAttributes&&E.setAttributes(B)
if(typeof E.addChildren=='function')E.addChildren(A)
else v.addChildren(E,A)
if(E!==this){E.__jx__constructor=b.__$$__meshim_widget_widgets_EmoticonPicker
E.__jx__native=!1}
return E}
w.prototype=e(b.__$$__jx_ui_Widget.prototype)
w.prototype.__jx__native=!1
w.prototype.__jx__super=b.__$$__jx_ui_Widget
w.__jx__jcss={".meshim_widget_widgets_Emoticon":{"&:focus":{"outline":"none"}}}
w.prototype.__jx__fqname_chain=[(w.prototype.__jx__fqname_chain||"")," ","meshim_widget_widgets_EmoticonPicker"].join('')
w.prototype.__jx__fqname="meshim_widget_widgets_EmoticonPicker"
w.prototype.__jx__constructor=w
return w})()
b.__$$__meshim_widget_widgets_iconFont_Auth=(function(){function w(x,y,z,A,B){if(!(this instanceof w))return new w(x,y,z,A,B)
y=y||v.generateID()
var C=[b.__$$__meshim_widget_widgets_IconFont,null,null,[],{}],D=C[0].call(this,x,y,null,v.mangleIDs(y,C[3]),C[4]),E=D||this
v.set(y,E)
if(!w.__jx__jcss_generated){t.generate(x,w.prototype.__jx__fqname,w.__jx__jcss,null,w)
w.__jx__jcss_generated=!0}
var F=(function(){})()
for(var G in F)if(F.hasOwnProperty(G))E[G]=F[G]
if(E.fire)E.fire('init')
E.setStyle&&E.setStyle(z)
E.setAttributes&&E.setAttributes(B)
if(typeof E.addChildren=='function')E.addChildren(A)
else v.addChildren(E,A)
if(E!==this){E.__jx__constructor=b.__$$__meshim_widget_widgets_iconFont_Auth
E.__jx__native=!1}
return E}
w.prototype=e(b.__$$__meshim_widget_widgets_IconFont.prototype)
w.prototype.__jx__native=!1
w.prototype.__jx__super=b.__$$__meshim_widget_widgets_IconFont
w.__jx__jcss={"&:hover, &:focus":{"&.facebook":{"color":"$$facebook"},"&.twitter":{"color":"$$twitter"},"&.google":{"color":"$$google"}}}
w.prototype.__jx__fqname_chain=[(w.prototype.__jx__fqname_chain||"")," ","meshim_widget_widgets_iconFont_Auth"].join('')
w.prototype.__jx__fqname="meshim_widget_widgets_iconFont_Auth"
w.prototype.__jx__constructor=w
return w})()
b.__$$__jx_ui_Input=(function(){var w=b.__$$__jx_ui_Label,x=b.__$$__jx_ui_Widget,y=b.__$$__jx_ui_Form,z=b.__$$__jx_ui_HTMLElement,A=/[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9-]+(\.[a-z0-9-]+)*/i,B=/^(?:(?:https?|ftp):\/\/)(?:\S+(?::\S*)?@)?(?:(?!10(?:\.\d{1,3}){3})(?!127(?:\.\d{1,3}){3})(?!169\.254(?:\.\d{1,3}){2})(?!192\.168(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]+-?)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]+-?)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/[^\s]*)?$/i,C={required:1,pattern:2,maxlength:4,min:8,max:16,step:32},D={button:1,checkbox:1,email:7,hidden:0,number:57,password:3,radio:1,range:25,reset:0,search:7,select:1,submit:0,tel:7,text:63,textarea:1,url:7}
function E(H,I,J,K,L){if(!(this instanceof E))return new E(H,I,J,K,L)
if(!L)L={}
L.tagName||(L.tagName='input')
x.call(this,H,I,J,K,L)
if(p.engineIE<=8&&L.type&&L.tagName&&L.tagName.toLowerCase()=='input'){var M=this.parentNode
this.parentNode.removeChild(this.parentNode instanceof z?this:this.dom)
this.dom=H.doc.createElement('<'+L.tagName+' type="'+L.type+'" name="'+(L.name||'')+'"/>')
this.dom.jx_wrapper=this
this.style=this.dom.style
M.appendChild(M instanceof z?this:this.dom)
this.setStyle(J)
this.setAttributes(L)
this.addClass(this.__jx__fqname)}
L.initialValue&&this.setValue(L.initialValue)
this.setAttribute('id',this.jx_id)
L.label&&this.setLabel(L.label)
L.errorMessage&&this.setErrorMessage(L.errorMessage)
this.on('blur',function(){this.onAutoValidate()})}
E.prototype=e(x.prototype)
E.prototype.getLabel=function(){return this.label&&this.label.getText()}
E.prototype.setLabel=function(H){H&&this.createLabel(H)
this.label&&this.label.setText(H)
return this}
E.prototype.createLabel=function(H){if(this.label instanceof z)return this
if(!this.dom.parentNode)return this
this.label=new w(this.parentNode,null,null,null,{tagName:'label'})
if(this.getNextSibling()!=this.label)this.parentNode.insertBefore(this.label,this.getNextSibling())
this.label.setAttribute('for',this.jx_id||'')
this.label.addClass('label')
this.label.addClass(this.attributes.type||this.getInputType()||'')
this.label.setText(H||this.attributes.label||'')
this.defaultLabel=!0
return this}
E.prototype.getLabelElement=function(){return this.label}
E.prototype.setLabelElement=function(H){if(!(H instanceof z))return this
if(this.defaultLabel)this.label.destroy()
this.label=H
this.label.setAttribute('for',this.jx_id||'')
this.defaultLabel=!1
return this}
E.prototype.getErrorMessage=function(){return this.errorMessage&&this.errorMessage.getText()}
E.prototype.setErrorMessage=function(H){H&&this.createErrorMessage(H)
this.errorMessage&&this.errorMessage.setText(H)
return this}
E.prototype.showErrorMessage=function(){this.errorMessage&&this.errorMessage.setVisible(!0).setDisplay('')
return this}
E.prototype.hideErrorMessage=function(){this.errorMessage&&this.errorMessage.setVisible(!1)
return this}
E.prototype.createErrorMessage=function(H){if(this.errorMessage instanceof z)return this
if(!this.dom.parentNode)return this
this.errorMessage=new w(this.parentNode,null,null,null,{tagName:'label'})
if((this.label?this.label.getNextSibling():this.getNextSibling())!=this.errorMessage)this.parentNode.insertBefore(this.errorMessage,this.label?this.label.getNextSibling():this.getNextSibling())
this.errorMessage.setAttribute('for',this.jx_id||'')
this.errorMessage.addClass('error_message')
this.errorMessage.addClass(this.attributes.type||this.getInputType()||'')
this.setErrorMessage(H||this.attributes.errorMessage||'')
this.hideErrorMessage()
this.defaultErrorMessage=!0
return this}
E.prototype.getErrorMessageElement=function(){return this.errorMessage}
E.prototype.setErrorMessageElement=function(H){if(!(H instanceof z))return this
if(this.defaultErrorMessage)this.errorMessage.destroy()
this.errorMessage=H
this.errorMessage.setAttribute('for',this.jx_id||'')
this.defaultErrorMessage=!1
return this}
E.prototype.validate=function(H){var I=this.getInputType(),J=this.getValue(),K=D[I],L=this.dom,M=(!(K&C.required)||(!L.required||(G(J)!==''&&J!=null)))&&(!(K&C.pattern)||(!L.pattern||new RegExp(L.pattern).test(J)))&&(!(K&C.maxlength)||(!(L.maxLength&&L.maxLength>=0)||J.length<=L.maxLength))&&(!(K&C.min)||(!L.min||parseFloat(J)>=parseFloat(L.min)))&&(!(K&C.max)||(!L.max||parseFloat(J)<=parseFloat(L.max)))&&((I!='email')||(L.required?A.test(J):(J===''||A.test(J))))&&((I!='url')||(L.required?B.test(J):(J===''||B.test(J))))
!M&&H&&this.focus()
this.setValidity(M)
return M}
E.prototype.getValidity=function(){return this.validity}
E.prototype.setValidity=function(H){this.validity=m(H)
this.validity?(this.hideErrorMessage(),this.addClass('valid'),this.removeClass('invalid')):(this.showErrorMessage(),this.removeClass('valid'),this.addClass('invalid'))
return this}
E.prototype.getAutoValidate=function(){return this.autoValidate}
E.prototype.setAutoValidate=function(H){this.autoValidate=m(H)
return this}
E.prototype.onAutoValidate=function(){if(!this.autoValidate||this.getDisabled()||this.getReadOnly())return
return this.validate()}
E.prototype.reset=function(){var H=this.getType()
if(H=='submit'||H=='reset')return this
this.setValue(this.getInitialValue()||'').setValidity(!0)
return this}
var F='textarea button select'.split(' ')
E.prototype.getInputType=function(){if(f(this.tagName,F)!=-1)return this.tagName
return this.getType()}
E.prototype.getType=function(){return this.validationType||x.prototype.getType.call(this)}
E.prototype.setType=function(H){this.validationType=H
x.prototype.setType.call(this,H)}
E.prototype.getInitialValue=function(){return p.engineIE<=8?this._initialValue:this.dom.getAttribute('value')}
E.prototype.setInitialValue=function(H){if(p.engineIE<=8)this._initialValue=H&&(H.toString?H.toString():H)
else this.setAttribute('value',H)
return this}
E.prototype.getRequired=function(){return this.dom.required}
E.prototype.setRequired=function(H){this.dom.required=m(H)
return this}
E.prototype.getPattern=function(){return this.dom.pattern}
E.prototype.setPattern=function(H){this.dom.pattern=H
return this}
E.prototype.getMin=function(){return this.dom.min}
E.prototype.setMin=function(H){this.dom.min=H
return this}
E.prototype.getMax=function(){return this.dom.max}
E.prototype.setMax=function(H){this.dom.max=H
return this}
E.prototype.getMaxLength=function(){return this.dom.maxLength}
E.prototype.setMaxLength=function(H){this.dom.maxLength=parseInt(H,10)
return this}
E.prototype.getStep=function(){return this.dom.step}
E.prototype.setStep=function(H){this.dom.step=H
return this}
E.prototype.getMultiple=function(){return this.dom.multiple}
E.prototype.setMultiple=function(H){this.dom.multiple=m(H)
return this}
E.prototype.getAutocomplete=E.prototype.getAutoComplete=y.prototype.getAutocomplete
E.prototype.setAutocomplete=E.prototype.setAutoComplete=y.prototype.setAutocomplete
E.prototype.select=function(){this.dom.select&&this.dom.select()
return this}
E.prototype.getForm=function(){return this.dom.form&&(this.dom.form.jx_wrapper||this.dom.form)}
function G(H){if(!H)return ''
return H.replace(/^\s+|\s+$/g,'')}
if((typeof E==='function')&&E.prototype&&!E.__jx__no_fqname){E.prototype.__jx__fqname_chain=[(E.prototype.__jx__fqname_chain||"")," ","jx_ui_Input"].join('')
E.prototype.__jx__fqname="jx_ui_Input"}
return E})()
b.__$$__meshim_widget_widgets_FileUploader=(function(){var w=b.__$$__jx_ui_Form
function x(y,z,A,B,C){if(!(this instanceof x))return new x(y,z,A,B,C)
if(!C)C={}
w.call(this,y,z,A,B,C)
this.setAttribute('method','post')
this.setAttribute('enctype','multipart/form-data')}
x.prototype=e(w.prototype)
x.prototype.submit=function(){if(!this.path)return
this.setAttribute('action',this.path)
var y='_widget_fileuploader_'+(+new Date()),z
if(p.bugs.noBoxSizing){z=this.doc.createElement('<iframe name="'+y+'">')}
else{z=this.doc.createElement('iframe')
z.setAttribute('name',y)}
z.setAttribute('id',y)
z.style.display='none'
this.dom.target=y
this.appendChild(z)
w.prototype.submit.call(this)}
x.prototype.setPath=function(y){this.path=y
return this}
if((typeof x==='function')&&x.prototype&&!x.__jx__no_fqname){x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","meshim_widget_widgets_FileUploader"].join('')
x.prototype.__jx__fqname="meshim_widget_widgets_FileUploader"}
return x})()
b.__$$__meshim_widget_controllers_liveChatAPI_APIHelper=(function(){var w=b.__$$__meshim_widget_controllers_DataController,x=b.__$$__meshim_widget_utils_Utils,y,z,A=[],B,C=[],D=[],E=[],F,G={},H={init:I,callNow:R,handleDelayed:P,callOnReattached:N,callOnRegistered:O,isHexColor:U,getCallbackCaller:S,saveAPISettings:V}
function I(){y=w.root
y.$$('connection.status$string').bindValue(J)
y.$$('connection.message$string').bindValue(K)
F=y.$$('tmp.api_settings')}
function J(W){if(W=='reattached'){L()}
else if(W=='registered'||W=='cookie_law'){M()}}
function K(W){if(W=='fast_init'){L(!0)
M(!0)}}
function L(W){P(A)
if(!W)A.length=0
if(z){P(E)}
z=!0}
function M(W){P(C)
if(!W)C.length=0
if(B){P(D)}
B=!0}
function N(W,X){if(z)R(W)
else A.push(W)
if(X)E.push(W)}
function O(W,X){if(B)R(W)
else C.push(W)
if(X)D.push(W)}
function P(W){if(!W||!g(W))return
for(var X=0;X<W.length;X++)R(W[X])}
var Q=Array.prototype.slice
function R(W){var X=Q.call(arguments,1)
try {W.apply(null,X)}catch(Y){if(!window.console)return
if(!h(window.console.log))return
var Z='Error in LiveChatAPI call',$$=[]
if(Y.name)$$.push(Y.name)
if(Y.message)$$.push(Y.message)
if($$.length)Z+=': '+$$.join(' - ')
window.console.log(Z)
if(h(window.console.dir))window.console.dir(Y)
window.console.log(W.toString())}}
function S(W){return (new Function('callback','return function() {'+'var args = Array.prototype.slice.call(arguments);'+'setTimeout(function() { '+'callback.apply(null, args);'+'}, 0);'+'}'))(W)}
var T=/^#[0-9A-F]{6}$/i
function U(W){return T.test(W)}
function V(W){x.fullyExtend(G,W)
F&&F.update(G)}
if((typeof H==='function')&&H.prototype&&!H.__jx__no_fqname){H.prototype.__jx__fqname_chain=[(H.prototype.__jx__fqname_chain||"")," ","meshim_widget_controllers_liveChatAPI_APIHelper"].join('')
H.prototype.__jx__fqname="meshim_widget_controllers_liveChatAPI_APIHelper"}
return H})()
b.__$$__meshim_widget_widgets_ZopimBranding=(function(){var w=b.__$$__jx_ui_Widget,x=b.__$$__meshim_widget_controllers_DataController
function y(z,A,B,C,D){if(!(this instanceof y))return new y(z,A,B,C,D)
if(!y.__jx__jcss_generated){t.generate(this,y.prototype.__jx__fqname,y.__jx__jcss,null,y)
y.__jx__jcss_generated=!0}
w.call(this,z,A,B,null,D)
this.setSelectable(!1)
this.setHTML('&#xe005;&#xe006;')
var E=x.root.$('livechat').$('settings').$('branding').$('hide_branding$bool'),F=this
this.autobind(E,'value',function(G){F.setVisibility(G?'hidden':'')})}
y.__jx__jcss={"**self":{"display":"inline-block","fontFamily":"zopim","speak":"none","fontStyle":"normal","fontWeight":"normal","lineHeight":1.3,"WebkitFontSmoothing":"antialiased","letterSpacing":"1px","cursor":"default","fontSize":"11px","&:focus":{"outline":"none"}}}
y.prototype=e(w.prototype)
if((typeof y==='function')&&y.prototype&&!y.__jx__no_fqname){y.prototype.__jx__fqname_chain=[(y.prototype.__jx__fqname_chain||"")," ","meshim_widget_widgets_ZopimBranding"].join('')
y.prototype.__jx__fqname="meshim_widget_widgets_ZopimBranding"}
return y})()
b.__$$__meshim_widget_Themes=(function(){var w=b.__$$__meshim_widget_themes_Base,x=b.__$$__meshim_widget_themes_Simple,y=b.__$$__meshim_widget_themes_Classic,z={'base':w,'simple':x,'classic':y}
if((typeof z==='function')&&z.prototype&&!z.__jx__no_fqname){z.prototype.__jx__fqname_chain=[(z.prototype.__jx__fqname_chain||"")," ","meshim_widget_Themes"].join('')
z.prototype.__jx__fqname="meshim_widget_Themes"}
return z})()
b.__$$__meshim_widget_controllers_liveChatAPI_Debug=(function(){var w=b.__$$__meshim_widget_controllers_DataController,x={}
x.init=function(){var y=w.root,z=p.isIE||p.isNewIE
x.connection=function(){window.console&&console.log(z?JSON.stringify(y.$('connection').getValue()):y.$('connection').getValue())}
x.livechat=function(){window.console&&console.log(z?JSON.stringify(y.$('livechat').getValue()):y.$('livechat').getValue())}
x.all=function(){window.console&&console.log(z?JSON.stringify(y.getValue()):y.getValue())}}
if((typeof x==='function')&&x.prototype&&!x.__jx__no_fqname){x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","meshim_widget_controllers_liveChatAPI_Debug"].join('')
x.prototype.__jx__fqname="meshim_widget_controllers_liveChatAPI_Debug"}
return x})()
b.__$$__meshim_widget_controllers_liveChatAPI_Departments=(function(){var w=b.__$$__meshim_widget_controllers_DataController,x={},y,z,A
x.init=function(){z=w.root}
function B(){if(A){A.unbindKeys(C)
A.update({'filter_enabled$bool':!1})}
y={}
var D=0
for(var E=0,F=arguments.length;E<F;E++)if((typeof arguments[E]==='string')&&arguments[E]){y[arguments[E].toLowerCase()]=!0
D++}
if(!D)return
A=z.$$('livechat.groups')
A.update({'filter_enabled$bool':!0})
A.bindKeys(C)}
function C(D){if(!D.length)return
var E={}
for(var F=0;F<D.length;F++){var G=D[F]
if(G=='filter_enabled$bool')continue
E[G]={display$bool:G.toLowerCase() in y}}
A.update(E)}
x.filter=B
if((typeof x==='function')&&x.prototype&&!x.__jx__no_fqname){x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","meshim_widget_controllers_liveChatAPI_Departments"].join('')
x.prototype.__jx__fqname="meshim_widget_controllers_liveChatAPI_Departments"}
return x})()
b.__$$__meshim_widget_widgets_chatLogRenderer_ResendChatMessage=(function(){function w(x,y,z,A,B){if(!(this instanceof w))return new w(x,y,z,A,B)
y=y||v.generateID()
var C=[b.__$$__jx_ui_Widget,null,null,[[b.__$$__meshim_widget_widgets_IconFont,null,null,[],{"icon":"exclamation","title":u(148)}],[b.__$$__jx_ui_Widget,null,null,[u(149)],{"class":"resend"}]],{"display":"none"}],D=C[0].call(this,x,y,null,v.mangleIDs(y,C[3]),C[4]),E=D||this
v.set(y,E)
if(!w.__jx__jcss_generated){t.generate(x,w.prototype.__jx__fqname,w.__jx__jcss,null,w)
w.__jx__jcss_generated=!0}
var F=(function(){var H=b.__$$__meshim_widget_Config,I=b.__$$__meshim_widget_controllers_DataController,J,K
function L(){E.setDataNode=M
E.on('click',O)}
function M(Q){if(Q==J)return
if(J){E.autounbind(J,'value',N)}
J=Q
if(J){E.autobind(J,'value',N)}}
function N(Q){if(!Q)return
if(Q.failed$bool)P()
if('unverified$bool' in Q){window.clearTimeout(K)
if(Q.unverified$bool){K=window.setTimeout(P,H.RESEND_MSG_TIMEOUT)}}}
function O(Q){if(Q&&h(Q.stopPropagation)){Q.stopPropagation()}
I.livechat.sendChatMsg({msg:J.getValue('msg$string')},J.name)
E.setDisplay('none')}
function P(){E.setDisplay('')}
L()})()
for(var G in F)if(F.hasOwnProperty(G))E[G]=F[G]
if(E.fire)E.fire('init')
E.setStyle&&E.setStyle(z)
E.setAttributes&&E.setAttributes(B)
if(typeof E.addChildren=='function')E.addChildren(A)
else v.addChildren(E,A)
if(E!==this){E.__jx__constructor=b.__$$__meshim_widget_widgets_chatLogRenderer_ResendChatMessage
E.__jx__native=!1}
return E}
w.prototype=e(b.__$$__jx_ui_Widget.prototype)
w.prototype.__jx__native=!1
w.prototype.__jx__super=b.__$$__jx_ui_Widget
w.__jx__jcss={"**self":{".resend":{"textDecoration":"underline"},".icon_font":{"position":"relative","top":"2px","marginRight":"3px"}},"**self, .icon_font, .resend":{"color":"$$errorColor","display":"inline-block","*display":"inline","*zoom":"1","cursor":"pointer"}}
w.prototype.__jx__fqname_chain=[(w.prototype.__jx__fqname_chain||"")," ","meshim_widget_widgets_chatLogRenderer_ResendChatMessage"].join('')
w.prototype.__jx__fqname="meshim_widget_widgets_chatLogRenderer_ResendChatMessage"
w.prototype.__jx__constructor=w
return w})()
b.__$$__meshim_widget_widgets_chatLogRenderer_ChatOption=(function(){function w(x,y,z,A,B){if(!(this instanceof w))return new w(x,y,z,A,B)
y=y||v.generateID()
var C=[b.__$$__jx_ui_html_div,null,null,[],{}],D=C[0].call(this,x,y,null,v.mangleIDs(y,C[3]),C[4]),E=D||this
v.set(y,E)
if(!w.__jx__jcss_generated){t.generate(x,w.prototype.__jx__fqname,w.__jx__jcss,null,w)
w.__jx__jcss_generated=!0}
var F=(function(){var H=b.__$$__meshim_common_Sanitize,I=b.__$$__meshim_widget_controllers_DataController,J,K
function L(){E.setDataNode=M}
function M(R){if(J)E.autounbind(J,'value',N)
J=R.$('options$string')
E.autobind(J,'value',N)}
function N(R){R=R||''
R=O(R)
if(R){E.setHTML(R)
P()}}
function O(R){if(!R)return ''
var S=R.split('/'),T='<form>',U
for(var V=0,W=S.length;V<W;V++){U=H.html(S[V])
T+='<input type="radio" name="option" value="'+U+'">'+U+'</br>'}
T+='</form>'
return T}
function P(){var R=E.dom.getElementsByTagName('input')
for(var S=0,T=R.length;S<T;S++){R[S].onclick=function(){if(this.value!==K)Q(this.value)}}}
function Q(R){if(!R)return
I.livechat.sendChatMsg({msg:R})
K=R}
L()})()
for(var G in F)if(F.hasOwnProperty(G))E[G]=F[G]
if(E.fire)E.fire('init')
E.setStyle&&E.setStyle(z)
E.setAttributes&&E.setAttributes(B)
if(typeof E.addChildren=='function')E.addChildren(A)
else v.addChildren(E,A)
if(E!==this){E.__jx__constructor=b.__$$__meshim_widget_widgets_chatLogRenderer_ChatOption
E.__jx__native=!1}
return E}
w.prototype=e(b.__$$__jx_ui_html_div.prototype)
w.prototype.__jx__native=!1
w.prototype.__jx__super=b.__$$__jx_ui_html_div
w.__jx__jcss={}
w.prototype.__jx__fqname_chain=[(w.prototype.__jx__fqname_chain||"")," ","meshim_widget_widgets_chatLogRenderer_ChatOption"].join('')
w.prototype.__jx__fqname="meshim_widget_widgets_chatLogRenderer_ChatOption"
w.prototype.__jx__constructor=w
return w})()
b.__$$__meshim_widget_widgets_AbsolutePaddingContainer=(function(){function w(x,y,z,A,B){if(!(this instanceof w))return new w(x,y,z,A,B)
y=y||v.generateID()
var C=[b.__$$__jx_ui_Widget,null,null,[],{}],D=C[0].call(this,x,y,null,v.mangleIDs(y,C[3]),C[4]),E=D||this
v.set(y,E)
if(!w.__jx__jcss_generated){t.generate(x,w.prototype.__jx__fqname,w.__jx__jcss,null,w)
w.__jx__jcss_generated=!0}
var F=(function(){var H=b.__$$__meshim_widget_controllers_DataController,I=H.root.$('livechat').$('ui').$('theme_loaded$bool'),J,K
E.setAbsPaddingTop=function(O){J=O
L()}
function L(){var O=t.getVariable(J)
E.setStyle('padding-top',(J&&O)||'')}
E.setAbsPaddingBottom=function(O){K=O
M()}
function M(){var O=t.getVariable(K)
E.setStyle('padding-bottom',(K&&O)||'')}
function N(){E.autobind(I,'value',function(O){if(!O)return
L()
M()})
E.updatePaddingTop=L
E.updatePaddingBottom=M}
N()})()
for(var G in F)if(F.hasOwnProperty(G))E[G]=F[G]
if(E.fire)E.fire('init')
E.setStyle&&E.setStyle(z)
E.setAttributes&&E.setAttributes(B)
if(typeof E.addChildren=='function')E.addChildren(A)
else v.addChildren(E,A)
if(E!==this){E.__jx__constructor=b.__$$__meshim_widget_widgets_AbsolutePaddingContainer
E.__jx__native=!1}
return E}
w.prototype=e(b.__$$__jx_ui_Widget.prototype)
w.prototype.__jx__native=!1
w.prototype.__jx__super=b.__$$__jx_ui_Widget
w.__jx__jcss={"**self":{"position":"relative","*overflow":"visible","width":"100%","height":"100%"}}
w.prototype.__jx__fqname_chain=[(w.prototype.__jx__fqname_chain||"")," ","meshim_widget_widgets_AbsolutePaddingContainer"].join('')
w.prototype.__jx__fqname="meshim_widget_widgets_AbsolutePaddingContainer"
w.prototype.__jx__constructor=w
return w})()
b.__$$__jx_ui_CheckBox=(function(){var w=b.__$$__jx_ui_Input
function x(y,z,A,B,C){if(!(this instanceof x))return new x(y,z,A,B,C)
if(!C)C={}
C.tagName||(C.tagName='input')
C.type||(C.type='checkbox')
w.call(this,y,z,A,B,C)
this.on('click',function(){this.onAutoValidate()})
if(p.engineIE<9)this.on('click',function(){this.fire('change')})}
x.prototype=e(w.prototype)
x.prototype.getChecked=function(){return this.dom.checked}
x.prototype.setChecked=function(y){this.dom.checked=m(y)
return this}
x.prototype.toggleChecked=function(){this.setChecked(!this.getChecked())
return this}
x.prototype.getInitialChecked=function(){return p.engineIE<=8?this._initialChecked:this.dom.getAttribute('checked')}
x.prototype.setInitialChecked=function(y){if(p.engineIE<=8)this._initialChecked=y
else this.setAttribute('checked',y)
return this}
x.prototype.reset=function(){this.setChecked(this.getInitialChecked()).setValidity(!0)
w.prototype.reset.call(this)}
x.prototype.validate=function(y){var z=!this.dom.required||this.getChecked()
!z&&y&&this.focus()
this.setValidity(z)
return z}
if((typeof x==='function')&&x.prototype&&!x.__jx__no_fqname){x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","jx_ui_CheckBox"].join('')
x.prototype.__jx__fqname="jx_ui_CheckBox"}
return x})()
b.__$$__meshim_widget_widgets_chatLogRenderer_ChatFile=(function(){function w(x,y,z,A,B){if(!(this instanceof w))return new w(x,y,z,A,B)
y=y||v.generateID()
var C=[b.__$$__jx_ui_Widget,null,null,[[b.__$$__jx_ui_html_div,"file_progress_container",null,[[b.__$$__jx_ui_html_p,"progress_text",null,[],{"id":"progress_text","class":"progress_text"}],[b.__$$__jx_ui_html_div,null,null,[[b.__$$__jx_ui_html_img,"progress_bar",null,[],{"id":"progress_bar","class":"progress_bar"}]],{"class":"progress_container"}]],{"id":"file_progress_container"}],[b.__$$__jx_ui_html_div,"file_details_container",null,[[b.__$$__jx_ui_html_a,"a_thumb",null,[[b.__$$__jx_ui_html_div,null,null,[[b.__$$__jx_ui_html_img,"file_image",null,[],{"id":"file_image","class":"file_image"}],[b.__$$__jx_ui_html_p,"file_other_type",null,[],{"id":"file_other_type","class":"file_other_type"}]],{"class":"file_image_container"}]],{"id":"a_thumb","target":"_blank"}],[b.__$$__jx_ui_html_div,null,null,[[b.__$$__jx_ui_html_a,"a_name",null,[[b.__$$__jx_ui_html_p,"file_name",null,[],{"id":"file_name","class":"file_name"}]],{"id":"a_name","target":"_blank"}],[b.__$$__jx_ui_html_p,"file_size",null,[],{"id":"file_size","class":"file_size"}]],{"class":"file_info_container"}]],{"id":"file_details_container","class":"file_details_container","visible":"none"}],[b.__$$__jx_ui_html_div,"file_status",null,[],{"id":"file_status","class":"file_status"}]],{}],D=C[0].call(this,x,y,null,v.mangleIDs(y,C[3]),C[4]),E=D||this
v.set(y,E)
var F=v.get(y+'__file_progress_container'),G=v.get(y+'__progress_text'),H=v.get(y+'__progress_bar'),I=v.get(y+'__file_details_container'),J=v.get(y+'__a_thumb'),K=v.get(y+'__file_image'),L=v.get(y+'__file_other_type'),M=v.get(y+'__a_name'),N=v.get(y+'__file_name'),O=v.get(y+'__file_size'),P=v.get(y+'__file_status')
if(!w.__jx__jcss_generated){t.generate(x,w.prototype.__jx__fqname,w.__jx__jcss,null,w)
w.__jx__jcss_generated=!0}
var Q=(function(){var S=b.__$$__meshim_common_FileUtil,T=b.__$$__meshim_widget_Config,U=b.__$$__meshim_widget_controllers_DataController,V=b.__$$__meshim_widget_utils_Utils,W,X=U.root.$$('livechat.ui.chat_window'),Y='file_name$string',Z='file_type$string',$$='file_url$string',$_='thumbnail_url$string',$a='s3_progress$int',$b='file_size$int',$c='msg$string',$d='status$string',$e='error$string',$f=u(150),$g=u(151),$h=/image/i,$i=/uploaded: (.+)\nURL: (.+)\nType: (.+)\nSize: (.+)(\nThumb: (.+))?/i,$j=100,$k
function $l(){E.setDisplay('none')
H.setSrc(T.IMAGES_URL+'/loadingbar.gif')}
E.setDataNode=function($r){if(W)E.autounbind(W,'value',$m)
W=$r
if(W)E.autobind(W,'value',$m)}
function $m($r){if(!$r)return
var $s
if($c in $r){$i.lastIndex=0
var $t=$i.exec($r[$c])
if(!$t)return
$r[Y]=$t[1]
$r[$$]=$t[2]
$r[Z]=$t[3]
$r[$b]=$t[4]
$r[$_]=$t[6]
$r[$d]='ok'
$r[$a]=100
if($n($r)){if($o($r)){$p($r)
$q($r)}}
$s=!0
X.update({'file_upload_scroll$bool':!0})}
if(Y in $r||$e in $r){E.setDisplay('')}
if($s)return
if($n()){if($o()){$p()
$q()}}
X.update({'file_upload_scroll$bool':!0})}
function $n($r){$r=$r||W.getValue()
if($d in $r){var $s=$r[$d].toLowerCase()=='ok'
F.setDisplay('none')
if($s){I.setDisplay('')
P.removeClass('fail')
if(!(Y in $r))return !0
var $t=($r[Y].length>15)?$r[Y].substring(0,12)+'...':$r[Y]
P.setText($g.replace('<file_name>',$t)).setDisplay('')
return !0}
else{I.setDisplay('none')
P.addClass('fail')
if(!($e in $r))return !0
P.setText(S.prettyError($r[$e])).setDisplay('')
return !1}}
else{return !0}}
function $o($r){$r=$r||W.getValue()
if(!($a in $r)||!(Y in $r))return !1
var $s=$r[$a]<$j,$t=($r[Y].length>15)?$r[Y].substring(0,12)+'...':$r[Y]
G.setText(($s?$f:$g).replace('<file_name>',$t))
F.setDisplay($s?'':'none')
I.setDisplay($s?'none':'')
P.setDisplay($s?'none':'')
return $s?!1:!0}
function $p($r){$r=$r||W.getValue()
if(!($$ in $r)||!(Z in $r))return !1
if($h.test($r[Z])){K.setSrc(V.replaceFileHostname($r[$_]||$r[$$]||'')).setDisplay('')
L.setText('').setDisplay('none')}
else{K.setSrc('').setDisplay('none')
L.setText(S.prettyType($r[Z],$r[Y],5).toUpperCase()).setDisplay('table-cell')}}
function $q($r){$r=$r||W.getValue()
if(!(Y in $r)||!(Z in $r)||!($$ in $r))return !1
$r[$$]=V.replaceFileHostname($r[$$])
J.setHref($r[$$])
M.setHref($r[$$])
$k=$r[$$]
N.setText($r[Y])
O.setText(S.prettySize($r[$b],{base2:!0}))}
$l()})()
for(var R in Q)if(Q.hasOwnProperty(R))E[R]=Q[R]
if(E.fire)E.fire('init')
E.setStyle&&E.setStyle(z)
E.setAttributes&&E.setAttributes(B)
if(typeof E.addChildren=='function')E.addChildren(A)
else v.addChildren(E,A)
if(E!==this){E.__jx__constructor=b.__$$__meshim_widget_widgets_chatLogRenderer_ChatFile
E.__jx__native=!1}
return E}
w.prototype=e(b.__$$__jx_ui_Widget.prototype)
w.prototype.__jx__native=!1
w.prototype.__jx__super=b.__$$__jx_ui_Widget
w.__jx__jcss={"**self":{"width":"100%","a":{"verticalAlign":"middle","color":"inherit","textDecoration":"none","cursor":"pointer"}},".progress_text":{"fontSize":"$$fontSizeS","color":"$$chatLogSystemMsgColor","fontStyle":"italic"},".progress_container":{"position":"relative","height":"8px","marginTop":"3px","borderRadius":"5px","background":"$$titleBarBg","overflow":"hidden",".progress_bar":{"position":"absolute","top":"0px","left":"0px","height":"100%"}},".file_details_container":{"overflow":"hidden","marginTop":"5px"},".file_image_container":{"float":"left","display":"table","margin":"0 10px 2px 2px","width":"50px","height":"40px","borderWidth":"1px","borderStyle":"solid","borderColor":"$$chatLogSystemMsgColor","textAlign":"center","background":"$$chatTextAreaBorderColor",".file_image":{"width":"100%","height":"100%"},".file_other_type":{"display":"table-cell","verticalAlign":"middle","fontSize":"$$fontSizeL","fontWeight":"bold","color":"$$chatLogSystemMsgColor","maxWidth":"50px","whiteSpace":"nowrap","overflow":"hidden","textOverflow":"ellipsis"}},".file_info_container":{"float":"left","padding":"0px",".file_name":{"fontSize":"$$fontSizeS","color":"$$chatLogSystemMsgColor","fontStyle":"italic","textDecoration":"underline"},".file_size":{"marginTop":"2px","fontSize":"$$fontSizeS","color":"$$chatLogSystemMsgColor"}},".file_status":{"marginTop":"5px","textAlign":"center","fontSize":"$$fontSizeS","color":"$$chatLogSystemMsgColor","&.fail":{"color":"$$errorMessageColor"}}}
w.prototype.__jx__fqname_chain=[(w.prototype.__jx__fqname_chain||"")," ","meshim_widget_widgets_chatLogRenderer_ChatFile"].join('')
w.prototype.__jx__fqname="meshim_widget_widgets_chatLogRenderer_ChatFile"
w.prototype.__jx__constructor=w
return w})()
b.__$$__jx_ui_DraggableFrame=(function(){function w(x,y,z,A,B){if(!(this instanceof w))return new w(x,y,z,A,B)
y=y||v.generateID()
var C=[b.__$$__jx_ui_FloatingFrame,null,null,[],{}],D=C[0].call(this,x,y,null,v.mangleIDs(y,C[3]),C[4]),E=D||this
v.set(y,E)
if(!w.__jx__jcss_generated){t.generate(x,w.prototype.__jx__fqname,w.__jx__jcss,null,w)
w.__jx__jcss_generated=!0}
var F=(function(){var H=b.__$$__jx_ui_Application,I=b.__$$__jx_ui_Widget,J=E.iwin,K=E.idoc,L
E.on('mousedown',E.raise)
K.onmousedown=$$
var M=0,N
E.__jx__constructor.prototype.setResizableNode=function($d){$d&&$d.dom&&($d=$d.dom)
if(N)N.onmousedown=null
if($d){$d.onmousedown=function($e){if(M===0){M=1
setTimeout(function(){M=0},300)
$$($e,!0)}
else{E.fitToContents(E,1000,1000)}}
N=$d}}
E.__jx__constructor.prototype.getDraggableNode=function(){return L}
E.__jx__constructor.prototype.setDraggableNode=function($d){$d&&$d.dom&&($d=$d.dom)
if($d){E.setBounds([0,0,0,0])
L=$d
K.onmousedown=null
$d.onmousedown=$$
$d.style.cursor='move'
if(p.isIE<9){$d.style.backgroundImage='url("'+H.assetsURL+'/jxml/images/blank.png")'}}
else{if(L){L.onmousedown=null
L.style.cursor='default'
L=null}
K.onmousedown=null}}
var O,P,Q,R,S,T,U,V=!1,W,X,Y
function Z($d){return new I($d,null,null,null,{position:'absolute',top:0,left:0,width:'100%',height:'100%',margin:0,padding:0})}
function $$($d,$e){if($d&&$d.button)return
E.raise($d,2)
if(!W)W=Z(document.body)
W.style.zIndex=E.style.zIndex-1
W.style.display='block'
V=!1
if(!$d)$d=J.event
if(!$d)return
R=$d.clientX
S=$d.clientY
T=E.getWidth()
U=E.getHeight()
O=$e
X=document.onmousemove
Y=document.onmouseup
K.onmousemove=$_
document.onmousemove=$a
K.onmouseup=document.onmouseup=$b
K.onselectstart=function(){return !1}
$d.preventDefault&&$d.preventDefault()
E.fire('jx:activate')
return !1}
function $_($d){if(!V){E.fire('startdrag')
V=!0}
if(!$d)$d=window.event
if(!$d)$d=J.event
if(p.isIE<9&&!$d.button){$b()
return}
P=$d.clientX-R
Q=$d.clientY-S
if(O){E.setWidth(T+P).setHeight(U+Q)}
else{E.move(P,Q)
E.fire('jx:drag')
l.tick()}
return !1}
function $a($d){if(!V){E.fire('startdrag')
V=!0}
if(!$d)$d=window.event
if(!$d)$d=J.event
if(p.isIE<9&&!$d.button){$b()
return}
P=$d.clientX-R
Q=$d.clientY-S
if(p.isIE){P-=$c(document.body.currentStyle.borderLeftWidth)
Q-=$c(document.body.currentStyle.borderTopWidth)}
if(O){E.setWidth(T+P-E.offsetLeft)
E.setHeight(U+Q-E.offsetTop)}
else{E.moveTo(P,Q)}
E.fire('jx:drag')
return !1}
function $b(){W.style.display='none'
document.onmousemove=X
document.onmouseup=Y
K.onmousemove=null
K.onmouseup=null
K.onselectstart=null
if(V){E.fire('enddrag')
V=!1}}
function $c($d){return parseInt($d,10)||0}})()
for(var G in F)if(F.hasOwnProperty(G))E[G]=F[G]
if(E.fire)E.fire('init')
E.setStyle&&E.setStyle(z)
E.setAttributes&&E.setAttributes(B)
if(typeof E.addChildren=='function')E.addChildren(A)
else v.addChildren(E,A)
if(E!==this){E.__jx__constructor=b.__$$__jx_ui_DraggableFrame
E.__jx__native=!1}
return E}
w.prototype=e(b.__$$__jx_ui_FloatingFrame.prototype)
w.prototype.__jx__native=!1
w.prototype.__jx__super=b.__$$__jx_ui_FloatingFrame
w.__jx__jcss={}
w.prototype.__jx__fqname_chain=[(w.prototype.__jx__fqname_chain||"")," ","jx_ui_DraggableFrame"].join('')
w.prototype.__jx__fqname="jx_ui_DraggableFrame"
w.prototype.__jx__constructor=w
return w})()
b.__$$__jx_ui_Button=(function(){var w=b.__$$__jx_ui_Input
function x(y,z,A,B,C){if(!(this instanceof x))return new x(y,z,A,B,C)
if(!C)C={}
C.tagName||(C.tagName='button')
w.call(this,y,z,A,B,C)}
x.prototype=e(w.prototype)
if((typeof x==='function')&&x.prototype&&!x.__jx__no_fqname){x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","jx_ui_Button"].join('')
x.prototype.__jx__fqname="jx_ui_Button"}
return x})()
b.__$$__meshim_widget_widgets_card_TextCard=(function(){var w=b.__$$__jx_ui_Widget,x=b.__$$__meshim_widget_widgets_Card
function y(z,A,B,C,D){if(!(this instanceof y))return new y(z,A,B,C,D)
x.call(this,z,A,B,C,D)
if(!y.__jx__jcss_generated){t.generate(this,y.prototype.__jx__fqname,y.__jx__jcss,null,y)
y.__jx__jcss_generated=!0}
this.message=new w(this.defaultPlacement,null,null,null,{addClass:'message'})}
y.prototype=e(x.prototype)
y.__jx__jcss={"&.minimized":{".message":{"overflow":"hidden","textOverflow":"ellipsis","whiteSpace":"nowrap","*height":"1.2em"}},".button_yes":{"marginTop":"10px"}}
y.prototype.__jx__super=x
y.prototype.update=function(z){x.prototype.update.call(this,z)
if(!z)return
if('message$string' in z)this.message.setText(z['message$string']||'')}
if((typeof y==='function')&&y.prototype&&!y.__jx__no_fqname){y.prototype.__jx__fqname_chain=[(y.prototype.__jx__fqname_chain||"")," ","meshim_widget_widgets_card_TextCard"].join('')
y.prototype.__jx__fqname="meshim_widget_widgets_card_TextCard"}
return y})()
b.__$$__meshim_widget_widgets_fontLoader_ZopimFont=(function(){var w={eot:'8REAADERAAACAAIABAAAAAIABQMAAAAAAAABAJABAAAEAExQAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAjp+VGQAAAAAAAAAAAAAAAAAAAAAAAAoAegBvAHAAaQBtAAAADgBSAGUAZwB1AGwAYQByAAAAFgBWAGUAcgBzAGkAbwBuACAAMQAuADAAAAAaAHoAbwBwAGkAbQAgAFIAZQBnAHUAbABhAHIAAAAAAEJTR1AAAAAAAAAAAAAAAAAAAAAAAwA04AARKQARLQAMcBLN6YrN0hFVn0QKLcUl/eBomWCgLqCX3JvcFQ4AxY4oWtvT8YmVKNGthwMdMRk20NHJXCnwyStPLApLe2ymLkvSSL4WDepCGGTkIEe+S+Ezt6VaEAt1C/b0zFVTPRuocc+vYDEqVcGBeQ1fSAmKw9000u1wWmyA8DpfyrwC6+WPFylphNWDVGnCIEYAPJQ+eYe/3Hhl+pjWpEps9i4/CG04gpMZMPtLXNMmaFq8NuI36DyWwTs7rqcUpeZ5tgQIH8FsFHspOSKKyoQY0jGqoYkdwBwkSrhUGL0BswcOVvDY6UKnYe81CNYvVXEnfYCH043ALdcMGFUxEt1ww/C0plWJ5IK4KFUFkxihNAtM3F216enGXKYdpnEp+WeIEMLOkFRTzFglklz7aSEE1axhBBYiIaDVhME93GIsFWlHYLo3uy+BFkBGVY+cz+pgmBoMHwKKMaoQgu2yKpHiO2GhOKfwjxhQ4ufIAwl1M4/kVkv4gd5eZKSzAucyIiv6kRJOkUKi7CSdTYK/e36+xoFd2KytgCcAjfauA2O/ch2njHEceEMyWD+tv5QSD8Ytnip0kHae72CAbwHY8inyZqOBbIICcw8SkOC6I0Jsgs8YOlF0m6JCs3B3dL11M5mOyMXkiUAmJkLZcPjgw28CSCt4XigS8MvASioZk6seYM8gKieBgFEHtpqsHw6UQ/3YEM7J/KtMazha10meSOnEq9WhSHkvJ1AVMkqS0EqNGPfEpmWAc0Eg9OALtVe1WZCDXrki1yP1ANFVy5pKFBUwpjoVAUfIgoo6wWkAWIdYoNznFERVAs0iD0EidRIGg2cw1XRG5LxaS0kJDFh1LaFyMWWmRAA6orHZoPaN9UB8R90J1KYolhBzF7y6MnDil18zljsuuXEmpPcBSr413uJ6RZJG8iAgT3bLsKVmQMIhzpjSiQdj2yCY0ObCb7Fqe/YAsSJ0Q2O0GGgT2Cm2C8Ptr8oUjdQatBBPyXESBU1vKTXciXpPPGO8qphIo03T78b+TISLWW0cwggCrw221O0Phbw6qeSXXZHIiJy8VQKHZav7vagwCLfk51tpnFbowR00KNAK+2IDYqCJ9BACZPvVMhrEDLugwAZjusIVpqy7Vx48Xti9oHraqEDzFcIR4t4x0hU0vpSd2AnKoZPVS9NYKMLtJeRobDN4Z70E4X4WGgbpwJnHTms8OWpd3wNAKoLVj+h+Q9v+LcxeiJnrc2UZF3P4LrKtSCxeLgQOBnGDhpDsgmk5NMBVXMHaGdw25cH5wShVDidPkDeUUTcd2taKWBIHGTbjnBT68wuuFEy5Rn4EPI1lW/gV1jzl8J3eBeDpMvxCcqozhHns5gaZYkJx5fTNxhcHls7LTczpPSGUs2iJuFwHREwGoPKg0qyS9CNEWmDsZjQ4QZLMYy8sp8NEX9kmfO5QZRhealDkC8KfS7AfH2WzxUPqq5BESuLkGaiD2vEW7FwJPAo4749vl1S9QPEB2XISbEjFD85ASBGE0yordpL8gW4ZJ7kN/m0f42zs9qSBWZpxUQoML1nPhytxRNCdVMzicH8++koOoGmgPrwPuFfCgPQjpMSpJvD+u/nYCZ8YIGRKQdqILbonhuAIpTKI2mIiYDIQOMXwJAQnHNL9kZdbHO00AVGhz6wGEVGkp2S51SNz+UQRBxzLBQXCQXkxOXF85MK67nJ810Yxww23tbLKIt5MfH/TyUzwZfi2BcSLmMX+JyKIM+hja9eF62djbLKlsBEno2gHBuRJwkSRv94I2jWiWMD8ksljxfc9xd+yMaemKFgdGq4k0AN7B+RC9Ytid1ikXTMPv6jJxMT0yl0yXMq4HSlp/Qko8JLCNQI8rBQPkLM5aMIh6Q1UEyMxii2TWwGlYuCw7swRt/sesuXVtF7u4KoBPArBB0LBE/7jFT+f7MlJ/xwzTQitPJh0ZbbAd0rGLLUtm9gDJRmSUCtGxF1BKghf8lxLCQOh4EBdSGmcvDr0nQR9s/igaLYX9tl+yQ6TPnxXrKtX3lqugiJ3jiYmisu/AXFXi0x0okDyElZ0Vo4Zh8qGRRixCJFjTAaeEsV4/ATa+x425CXYJ44Xbmtoj89bAnvnRA6ArhsvBfc93hcLFjyFeN5lIcECooMnFJvFYpCiP1G81fgUHWxhFpR29R9EAxtTpU6xRlW5tskaFGFhDXBMUD1BxMUyBnaph6H2iosfGk5BWBINXUIij5mz5Lc+JpFICOh80fDc83yYIVuXjBFFOiFuAzTwJcTZB3Dc/CM5AqzD00CUkWsERpu/S+aq0auiA3qLGJ8iFMWc+D9imtYIBNIYostnRysXLMLMcoDQFdT87BLFHuvP5JGXB2ur70a3gcFgYezaPwcijtoeV3D/+CQPYjmbE1Ici1lf8LS2v2OOiwHG+L28xcILozib10/W+JBPOGfNShaEhjZkubdG+KJIGoASp44r3WqJN9/Q72nNjYkhrKSjZMHqnpvZCPvvUJDOtD5lAQAJmj6BhNLSIu3EkKEoqvluvxe/xfvGmsOQ9kQlI71lvlbnLFPxJMdc00y64/3xKb1H1KjoETSIx4ATx5WgyUwDQYLDUsEynVoCBkdWFJcpL2ogMfM+I+ADBvwlJMzjHF2lpW5l4ZeGJHNCR2evD16o4pkzSgmNR8dQHkGkoxwPHMrJzEynvu4tdyw7epgwIi08dTOJ63et5IrQ4P0cA1zthpXj28P04KI1hyjuAGHDilDAAQdOkwGdQVfnwpyGbN274imDdMqGBlBgYDRSaSsLXFPwDRjkkQUxGxdPadvwbxh4jCpIATe9B7UxzC8Nj4+r9mTXmu+xS8HQpsIGAKKKW47thyzB6ygWuye7icEjZcO0PQCT2FPyVmvpTQDfLYon9Zyz6v1pWvfszgiX9ZXu2IcJBNcSCCT6MLLiIyFYArfXrOq6qxRpZnEQFyr49Z3KmCFLCnhFZCEj3TZq2X09sWacSh+/wKt7YsztbD6ZAIBBDFzvCD48UoIZKx+FsDhtfDsdxUDZzrnjAoQJyOAA8Dw2LVTcyD54aKC3zD+s7ArEugUNxZZ/ZMF4VOnvF6m1kSOAly7gEJHUMKCdPPqHV8DNF4LhAP+C9FFx456cAUj+2zdRFWYY8F/sGq+uuTamOt/LctFoDMq/QDrBa46JVdgo1hhJgRjJGzMfFIQVGtP+xncdsXXKALeyNXwRB3ghlcSe21/s4sp3hoywFv3ZIRkCiIAgt9meUXjW6QoqcaqnGQWJ1RHKDczWINTYp8RRj2H6pgfoxA9QyJQ0cc0vBew/zoDIAillwZBcR0MfMV3kBdDUyVSJN3JKhelCI07H0JmDNKbE5JcSiEEsgWCPqpyZJtQl65EqbgahFIXmg23B/Idgy7Fhixwr3C08uV4E+amcdOum+a64Q6EcmVgDRx6qNgClesbTfmA5OZCfT1afgVFrYkASRuwMoIh0eHh7J0DOxTprosZ6vCmOfZdezr1oLjK1teCvJZ7KNrGc3x7jHEfyz6YyzTdEjVfmVfPVXIj32GSYRLWQ6Hmsi4rM/mo/6bU3fYGh7ANBZbgAm6QMlPKlwfYZcsGPVGKEFiqkpxgOkULLjgMtf6YYeXglxFLKc8zwBCmbNk0ZMD8ZRF1oJTs0I4iWdh02jX6sx5QPzTQV7SUaNKDAYZ0ihUZQSnrZVZisvp4Yk5iC9WIX2MuuRNLh4GJwBFjEFAporaEspOlTbB/t8Tzmb5rX4jK4qVfxI73r9KF0YOfwYuzkjLuCkZQDWQbFQKrbRtC8FB1tXIMZ/15vF6tGUu89dv/4QFB6jTDa9+rNcRSmQv1U24sxGKelrnE7GouiJVMghempVtyCrxZqvWp4l9oh922TWG1c7oG/yzaWhJ1fr3hC+WDZptvokS1smIRuUqG4ObW9QkZf002W4ay79IuAVFILu4iiG2Qz6mYyKNjpBRq56V3fy3GO6xVgeFTeAkNhgkGTSsaMsXQoUBNdgC4WUUAELBhisWuJw0EGEkrb3ZY+rFNW+IkkuX8QVupFDMo31Nk3nV7yxFzah7gSE0JOu9BJwHxR6l1YqMUvOwpBcB/PUOYFou0KCeHCcJytYCMk/HR3UAMwBsm0+K/93UaDAlamz2THn3OhKq5/BEyCdQdVydrMiQRqW/mc69UJhqRG43AWHEzmtJAMzm1PUF2h5FK1VqriPoYDsn6jTSVAQ2rZbRIxz/r0GyXlrNeT7vCFEOXIWpnQTXrmVgQuYJ37sU6FEGbLJo4hXNIF1UXxeEWxG79oLAoXTWhAg2IYXCwEovgtWf09/U7OjpvcohpNoJ+8aRvYbD8ukIT9Ife8/YMzH+sGjKvDXoXlR/0yCcC4YBVsfV0e+jYfEo+4IZZoFyP2U4YaQcX+7YsAwO4EYhOkhlNCVGyt+M8doQKhBcDGYAQNkCTlxYdXXdRIxw0eBdmBWFT1hA0OoKADiprHWM9pWPN0YMpMf47+PBcQarEv2XM5G7ImYD9UGeV1RF7393Zn9x/TMfiohJlmxnHAhDHwK5b9fjGy8kgRRDGF3UOZvAdDcdNqoAW8ouzjMhdSwdISbkx0m4TpwnUpqRtoKCuEz3L85XNIAzxG/BQ0kfBYsTUFioT7zNXZwgWFBfbEqoC75hWJKojoJMOoLAS5WA0BnJnAEtg6RQkwPyxhYyZIomrFn+ZJhg5hOpIRA0S8xz7LBMcLqkIOrMWQdlIPb3ILU12MwUY9kQFpP1XZgujRCrNIAqY+8NemhYmP2g0MPoM16qKimal/OfdTg7rYQcN0WRuYbAm0HEiSGsqim4ghLhEWDw92Dbq4MzF0RogifeGodOrRs5m7qVFFoVb+xmmYltbRQB7qlhujsqOQ2A7GpQuBV0HS2dF5hSGfxG/OgLUCrI35TAtAv9NkhnraG6F6WKeL2guPz32ywuNSOWt1aDUwhDtWdFmLRlb+oBktqU/QL04cpsVTbbOHl0M1mILEuSCKeSA0olyqjJA2uFGvdA/CQmyXgjtuZTPIKGUDjFohDpdepJC5TOhzQgASGb68Qb9YajL6jCYKE4lI50FAb3b3Ub6txYJzSNyL12axjYrmDf+qMLjkBuL0JRYr/7SvUBKvlW46r2/s9Dy8STQfg4A6NFKtyqbivKzCU8CA4O4R9oLoENBrSALV8n13HINmeOjWA4lq4OmiN8uvheM5OTFhlcnNeJIx08+1Jt7NAIiJln80FuLI3O2FXPLOcyYvUWSCRSzzyBpooptwOxgjwaNlBbwK8jrC+JIX6WWYJxLaIKrwAVFSeckh7lAknqHXeaHA65cQ9gwpbyfQ/aFJnwNd0leIm4UlYpMxu04qgBSxcPEI7oWJoeZjTKJAfVFI1glQgXV9qjSu8QPTPS5zRG51ol2Qhqd8JRggLRpNWsohXNA3qIhqVaW0SxMZGEZmbnQ8v/MKT9NG+Jme9sR/GicUuwHEZ2I2bwoqN7JaDs3otvlhCLb55WysyvwUmgA0Enr2wtArqi6BASy/D+Y1kbrOjelm6xfoq2V6tRdiJXdMVWNOOM7krW8rqpEwFgmB1GlSVOPYRTOzSOmg8khzEE9kAtGdaHs8mGoJZ4nUfewFjpRUFyuj5zro07hnDn9xrG5wwS3gWefo5wRCczfWpB3UZKM2bWl8AxZuWBufaLyvLCtogvxG280Jc628FDJbCVd5BWsVywCvDqfVE9q9lDLDBHGA2FiHzjEMWOBCAlN5WdVOigHFCEG4csy3ojKpdhnQIQznnUPmokRqceEFyz9QLDSMe5A6UkXIveRqoESsIBtYsdyBzIgV4EXoFXu1TFrgwDRPyTk6PZv48yvrvNZt2JxVF1EbLxbr+AAAAAAAAAAA',woff:'d09GRgABAAAAABTkAA4AAAAAHowAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABGRlRNAAABRAAAABwAAAAca9lBrkdERUYAAAFgAAAAHQAAACAAVAAET1MvMgAAAYAAAABEAAAAVlbxYqBjbWFwAAABxAAAAQYAAAK2uY/tJ2dhc3AAAALMAAAACAAAAAj//wADZ2x5ZgAAAtQAAA83AAAVeBwGwTVoZWFkAAASDAAAAC8AAAA2CyZzCGhoZWEAABI8AAAAIAAAACQQMAvvaG10eAAAElwAAABPAAAAhHAABcRsb2NhAAASrAAAAFAAAABQSzJQkm1heHAAABL8AAAAHwAAACABPgDPbmFtZQAAExwAAAEDAAABziKCSp1wb3N0AAAUIAAAALsAAAGqFdWFxXdlYmYAABTcAAAABgAAAAbnA1OnAAAAAQAAAADMPaLPAAAAAM/OB14AAAAAz82XgHjaY2BkYGDgA2IJBhBgYmAEQjUgZgHzGAAF7ABZAAAAeNpjYGTxZJzAwMrAwtTJdIaBgaEfQjO+ZjBi5GBgYGJgZWbACgLSXFMYHBgU//9nTvufxhDDwsDwAyjMCJIDAPLyDEB42s2RPW7CQBCF3xpDJEJs/kTNQrALcgKOkMsgESnnQKJAdByAgp4cgwIjxbLS5AKkQUabtzsbKUJRilQZ65tnj8eeeTaAKoAKeSB18gLFDLVlVbl6xddDzKl9HqHtgMYYO73QS70atEdlMknWaZR2014RG/OtY/5DB2yHeTOZecyf86d89no+trJ9Ns2Cw+VQ9juyxa/RcPnkrzpXd7XHeht77N47D31r+tELnteoS8F61SsBt8CgLdhpo1LAHZBMBETUtYAYSCMBTWpXQIvaE8B3FZQidjur08YBDKnvDuAe6uPGwYHUuoND+F+469enUQFTcOVbec8SIf5xVP/43Ce08UUiAAAAAAAB//8AAnjajVgLdBTXeZ7/3p2ZfWkf2t2Z1Wofmp3dHQm90M7ujBAIYUASSAYJWeYhycY8wss1YLCDXxgcKIbUFAzETQLB9jkEwzEnbk+PcxqT5BjHrWma4DpJXaeU4Dq1C6mdksbHOXXYq/53V1C5dp3umZ357517//v/3/+4/x0BBPzRKw68CUKbFtTolevRcssrxOhl+r7gF6JCXBBA84EcTIKqzQQ72ALQAgUrr4SlkB406eqSXugmpLtALpWf7I4Gyxqy7fZz5+j70F0opc0egB6T/KLQff0sWLdZeEEQDvPlUYZxRq/Q9wQPNoJaRAuaQa2oBeEg2wwHz/MHfY9tPj/RqsyhQpT+jF4VREGohSqgQJ+F42zls/QNepWNzDPZIPySj3sNeaeRt4INSQYprIKSt2dCIWe4wCoYLUC+bSTZ1kQCDqUGU378sW9DTyIRyNH3IMG2YifbmEj4s0bWD33QUx5UlmF8XLhE/422C2FByKY5PymdK9hg5XGNsOwDuiucRW7spdRgZxL240w4xDld8vugn72U7MSO/ckk25RalPJVeAqvorwplBd52gXLdkGuMMEPuaO0r96cWwdP3Jy7KnRDuE4u8qIU25RM+jMcW+EyYtvB+UFakpFfegKDivZ092fLSDsmgEAhJ6FTlnGbsJVuplu4vVzgAyNn2WBoQXKE7ddu1epcGuy4RuaSMNuliXXasAbr3yl9C+c9INxH76VbK/NmgqqgQVS08zBs1RZoKZfGHrtW+i78BLaX56XZn/0LGeI6wJ/SK2Qx91FA9+A+ytvny74z8cN30yh6QxPi9130YKcQFGJCqzAHB4W5XdBbbVRdyVuFnJg20JXRk8FWVEuwc4IhCXJYUamkKnlUSU4bOT/YFgJUxGFJgJf1Qjpd0E/HdL2g6+yqKLoH2u0BN4t/v2/BOSCiyNi5c4yJU5tjEHAGyRXH5VN9vf6qr0TA2diEjVOXyZ4Y54G/Mq9fQXEuwJwia3w8BiKQc68AIJvxV/r3T2cfh9wO0vHcZTEuuta/7nUXH5176rLDcZlr6kYdL9FHEMcwRqeQRZuidyg8NrMTqoYNnZr0Dbajfn0D25EtLKR0QZE1++1Usj0ZXBTcepwcmz27tHruKMBoayBpxxPFo1CcQHK8RC/SS4JLqBICiB/igWAhFrKL0izt7hyAX3uHBuLTfsIIuODd65fvgLX0ktju+ED86vK4uoGl2H/Bx+yf2dGxio2eRh9cIdRgg9tc8pe9ppVgFrEtJQXoDPTv6qQMy4iSGGyJ6jUOif0m40qklmV/DCezY7Q7PZbFtw5nwCM6oqIEvtzSVMKVwbcZia+xHn1rB/2ykOJrhGUp3Qp4M3KFLlypYFv5FC6VV5WwH+iKZLJuqO7iRbwlkxcvfqIFmc/qnWjdzFVvC75yPpHqhGJBqEMNJIVeCW0/wlazt6Aejh1xsGvkB3Dm5IMHIHnhHyF10MF+4dlTwbdVqKffwxj3o7TFCr5tLWBwT2vjKRbpNuyLIN3GnbSAMYvpRG7hNkhLEcWhWhl6CEwjZwKYOcOE0uP4rLTwTk7EcjXguHD06AUH1ORiIsC5cwC0rTJi9ObA/2mw1aFYLHT/UUqP3s8pnOm4wGVFfb9H3y3LOuUPy0rDckU82/g8Aa/ChEgiCmXwXmNkslAjlT72FPhDL/ynKP3uhUQZt8dvytL0CVnMtrzCZdHbEKlJuOkaD3lTy1v0YEWOikxcGqPSwjs5GQtd/xHXmhZCMTr1BjCFQo7/JxAq7cYRuVhssg3f/X/b8EaKyVt2OaGoSUChPteGIrv+/XNsXJyw5df+vmzLz8OrpL8Kbkwhv//rUE1N6PhPHeKbx5Hi2XDpuMt7D2UY02FBF3qEPmEUY+ZBQVCLgJttBBOriHtYwapTImGJ5vS0jPuEYuZtq1iAIEKJyEqRoF4hOWFGLDOv8r8SCULQDop8VhFfBMvzjIIs6elcJ1YKZh65Ag9FnIog2JYt5ZZClH0Ib7APIArr9n0dTgCceLoqO9xvpBOZ4XtqPfILXXZDr8+1t3OaNbRnz+IVo7eM3r1mdt/v79zLXuzftqx9376x7gd6uuBMy2BqeCzbNwyjah8pHF6//nChWV7YQ1fB2gdXsq8/7Dmxd+fzz+/ccxJOdNptxxpnjGUKA+wQzGvva86Eq9gpTvW1s78is7oHZrS32qvYLjKr9PJ8+N2cgdtvv/4yaE13Ld7+IGvuSBxIzx3uHyJ7axYSc82C+WvMxulSK/qEiBj/xjmTqpjnmoVbhcXCRvQL2cgZOUmVFDvfBSp6hJSzcxZaP4QwzeTpT0YorRyP72AW/UJGK5RjvWB1QbGQkxF3AwcigjgG9yiki9nIBENZ4gyDetEsmhEzAu+Ibc2ZkVmEdN6ZaW6j4qaWx9YR2PhI6z371jtWT9u8iK6DhlvaRig9RuIxsXV2nG7uGxgaWXqsqalrvyhKh+aPjn3cWJ8xCisoHCE1LTEtI04x6kbmQX//+hMkMyo6AIZXbxwhDnEMAgBPPPPUHwMESj+nNaxEkgT2HGSXQLtzKRCFsLkPRFU6VB3FfQOWnV4g+htam8ALg0QlI3fucjQOYwFWAyde+W3fdELoqCwBGdkGnuXPPbd8Um34kdCLDURH4dDJPMErGEQcNB/oHARFLceUrOXKAYbbVaEVEMpyzrQVCzeBMtqYK0gwlvV5ldp6L1AHqYI4EEesNmISSkCq2Xjv7dWKH65HMXirhzdvSlGUa0ZE9wKhKvERcGQaDIfijdKPaJMIsugZiKpDkaAE0ogcCgXMjnjU61yohGar8Ydk+aG4OjukLKQ1asw0fbGQPCqCM6gtaen3yuDASkggN+tfv2B8utKmOvoHty8qhpuYbKQlNVyMmPTuUnWxF6C3SH5dfq7dt337djKwoiEWo8O6Agexfu0tTh5Uep3tg23bt3SvQpUegVRchrFPrj/7M9YPR3g9lDMwpi0b4bzxLOKYFsJTWa5SI6kY1DL+PyXZj+DU020juSpfw/yk0eFxe1whub4VIBWIJsDf+NA8Cre01TQG6tO+rJ5SPyU32+mUH/xbqTYKMRWadEKIa+YUIssQyHfVFGY5qqrabiEYUM5wgyr6Moip46ZOAczPtwlrUS/uEhhaFGMR3UgucGlRDQxCE88zRSS55pGy86iarCfL4cpDLsU9LyzJZUT0iF6shBvkdKOyMfMsr2GiRD794WoYGU1YWQ9GyR1x8wGXGFXyg8nivuZAjBo3NKMS7XqsA8yhZYkOPDC1+muiVUXzDorV0Wx8fbbr7Nmu0jWXXO0dmxrsiOI0WCxSgrEcLQYW/7kMNS3t8cFjEgQfC8W8BKAuxko5V7gFnt1eAa6BuqmZg66mBb0DK3SfPjXpbjDW9UXqAxzV/Fm+ROm3AC6/mEp6cU6V023dxrEbH8f67wrdgPWlKXQJA4gdqhzRMb+g2tBCyhGGWJo2Rwx1zyOUmJn0SqvysoWfC0weshJFeiYvtXkrgu0rB+YdPDjvQOmfwm00UpeeAs2NS2awa8u/7CCblld5qyASaL3vK9Rx/P4v7YMpr1nDHud0q3xfNLgKyNZFmVTjNJcDRsnFAwfmHzjA3vbnG+pqavua7DU0Q7YMDW8moNaqOT/durB/GOh9CzqGvkXv6u0doct7esdYC9zWOWMRgDveovl8nQOVs5cb9X6b1goFXkNGJEGc5O2f8Hr0pJt+j4WHZaPi3PEfBmAX2dXFx+ZEo707CnO+EK4O+1JVPYuBTKttyEPs1n94VCT3Lm7qj3dP9zbXddoNZNhb9VP2jAdaG2lzA1nQ6XA4/H/URxGE+JJie/PYJlmJ3r6FpBO+tD4t5Ix2VmT9aJyRa/Rngsqt878yhA/KGYJcOfHSkSOw4VE8cpAvNCnkDLzNkvDOkceX7iCUHgcwdDfZwPlVTcTLGsxAU4VOoVvox6hZL3xR2CUcFL4hnBRewXWwviqHiD7h8iYelrrAsot8t+8iJt+ZMAR0fgSZDorB7/wbQSMmYtuMYHEwE1A8lDTLh5haJIucdJnHnj5RPGnI1whLWLiVR+QVcTKXbOVR6YpMHqbePOThCUPihQfP+9xTcfuVpRYU01LozkS3zl5bcA9tH3iYkqXdc74juh31Eni9Hofk/M7KhXcTaC898Tey0ymf9vzAKa/hFN7Wtq+ZatR2Q6jaobCXeCeswyp2cN6akxCQw/NWEnJXH7TPHYYP3DL7D9ntliEou9mP3fIap8vlXCO7wXTLa2WXC2/uyWM2eQIevFrDdb5qp+ihVBaJNxaSZI8ekL2iJKWLdFYoRJb1NMFQ31/0rqVfozTpcG6i4JCeJJuXPDljhM13+9zBUcntrnK7z6iRiFp6IShthUewO/3vs1fSHWvlAJC7up+cvYKQsV6v7PH4PJ6VKIMPxag8JloeJxfHc0JrdPmCHqBVcizsCzh9IFHJ56Ved7nWmYGxcoZeFtxCo9CO/jJUzhKYOU1LUSMGuog6Ua+YwcrR1Aia5c8uetHKGbSSedGIQaw20XxBH9+tsUub3IAPv0kb0S+b6MnXzDjZrCaSKpBontyXr8EITyTUzaTWPB/RALQp6fS1sAYk05gASMMF3qlPwaOZRklPykOIJ9VzSeoT9wIkmzUonXbYDrzIEtBb4rBX7JOubwRk/69qMqmyuJokPbUqS0R1PQq/VGs5zRfk9ERd8iv6Vvm7yo1wiNg8BAoG92eIbjtO5W/cp733l0gQenwbfQtv57d+lb7/PhLB4DHsFyr7v7AXdfyiEOSneReU9Zf5CSJo2aDkgR9jZCBxeFEBsmGgdGBwAwEFXqxugg1arnTA0GAnnIIN9a1sH74iGwZhW2s9e8oPr/t87NzEGofpu/RuoVaYjhLbFp4p/eVyPIwZg38WwWKSfxsx+Okc9zo9bebKRyk7PR23v4jKN81yPTC025+aEti1OzAl5d9dpnfv4nTpmVyuod2a6aHiHBEv6plptTfkcpmpAFNh/FPjKzT8vHVKE9qXRKZ9syNCkWpuaDU0iTwvauVvEcJBxGYTYqOXv+VgLY0O5gOe5BSekUN8o5no1NHT8tYf0oB8KM+v9p7y4iXCXP+bfv+bknuPW+4JiIskaZEoQa/rS2zb52hDN9GaLthz6PATIPa46akf/vA0+5N77weS7oSuvv454nznFjj/fyv232HvPCEAeNpjYGRgYABiyanz++L5bb4ycLMwgMD5s9MbYfT///85eXLB4hwMTCAKAFTqDIEAeNpjYGRgYE77n8YQw5P7/z8DA08uA1AEBUgDAIQGBTh42mNhgADGUAYGFgYGHiAG0cxAfJyF4f9/IH0EKlYOxBUgNuMXMF8HiLmgciCcCaX1kTFPLkMEhx1DBAsDDPz/z8DF8A3IsIGJAAD1zAwvAAAAAAwADAAMAEIAXABwAJ4AyADwARoBNgFSAWABaAHaAgoCMgJkApgCugMQA1YDnAP0BKYFUAXCBgIGbAcKB4YH3AgECRwJnAnCCfQKUAq8eNpjYGRgYFBnOMzAywACTEDMBYQMDP/BfAYAIJ0CDgB42mWPvU4CQRSFvxU0ARJjYSispiA2JsuyEGIoLTQxsaGAxmbRFTGIZEEjlJY+mb6BT2M8s3shRos788255/4MUOOdEkG5AhwpCg6o6lXwDvs0jEscEBuX5Tgz3qXOtfGePJlxlQFvxjWO+TL+kP/b+JMoOGTCIwljUposeBGd8Cptypon5nm+r+yYZ2mJJtxJn7GkTUtx+svn/jgHemXqOskrnPwh0b/6C7lmuTORmnIr54iVzmKfWOpSVU6RqdbPObceqSZNxU4b+NyDlBvpIfd51Zye/tXcztz4Q7l8p6GU0Ta72fDK9r3UT/wda08nvaNubbo6W9rb65Go8wOKGEBNAHjabZBLTwJBEITnW9RdF5+AiojyUMJ1p/ehnkn4K2pCjBcP/HtN7JqTnUymprqquzIhC39Vhv9r/XsIGRk9DjjkiJyCY0r6nHDKGedccMmAISOuuOaGMbdMuGPKPQ/MmLNgySNPrIq33f7rfV63uQMRjQMTY4lpBTo3RRHRCcu/Pz+s3W78/ZIEGl9559WJWAmYdxq/lUzLniWU1ZJVUaOiRkWNncSyW8qU5pjCKWVMuySu0//YD6weYe4AAAFTp+cCAAA='},x=b.__$$__meshim_widget_widgets_FontLoader
function y(z,A,B,C,D){if(!(this instanceof y))return new y(z,A,B,C,D)
x.call(this,z,A,B,C,D)
this.setBase64(w)
this.setFont('zopim')}
y.prototype=e(x.prototype)
if((typeof y==='function')&&y.prototype&&!y.__jx__no_fqname){y.prototype.__jx__fqname_chain=[(y.prototype.__jx__fqname_chain||"")," ","meshim_widget_widgets_fontLoader_ZopimFont"].join('')
y.prototype.__jx__fqname="meshim_widget_widgets_fontLoader_ZopimFont"}
return y})()
b.__$$__jx_ui_Select=(function(){var w=b.__$$__jx_ui_Input
function x(y,z,A,B,C){if(!(this instanceof x))return new x(y,z,A,B,C)
this.navStack=null
if(!C)C={}
C.tagName||(C.tagName='select')
w.call(this,y,z,A,B,C)
this.addClass('select')
this.onDestruction(function(){this.navStack=null})}
x.prototype=e(w.prototype)
x.prototype.getSelectedIndex=function(){return this.dom.selectedIndex}
x.prototype.setSelectedIndex=function(y){this.dom.selectedIndex=y
return this}
x.prototype.getOptions=function(){var y=[],z=this.dom.options.length
for(var A=0;A<z;A++)y.push(this.dom.options[A].jx_wrapper)
return y}
x.prototype.setValue=function(y){this.setSelectedIndex(-1)
return w.prototype.setValue.call(this,y)}
x.prototype.reset=function(){var y=this.getOptions()
for(var z=0,A=y.length;z<A;z++){if(y[z].getSelected()){this.setSelectedIndex(z)
return this}}
this.setSelectedIndex(0)
return this}
if((typeof x==='function')&&x.prototype&&!x.__jx__no_fqname){x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","jx_ui_Select"].join('')
x.prototype.__jx__fqname="jx_ui_Select"}
return x})()
b.__$$__meshim_widget_controllers_ErrorHandler=(function(){var w=b.__$$__meshim_common_System,x=b.__$$__jx_core_ObjectUtil,y=b.__$$__meshim_widget_controllers_DataController,z=b.__$$__jx_data_JSON,A=b.__$$__jx_io_Form,B,C={init:G,post:L,bind:H},D,E=['zopim'],F={}
function G(M){D=y.root.$('livechat').$('account').$('key$string')
B=M
if(f(D.getValue(),E)==-1)return
q.on('error',J)
q.window.on('error',I)
q.window.on('unload',function(){q.window.un('error',I)})}
function H(M){if(!M)return
M.onerror=J}
function I(M,N,O){K(M,N,O)
return !1}
function J(M,N,O){K(M,N,O)
return !0}
function K(M,N,O){if(!M)return
N=N||''
O=O||''
if((p.isIE||p.isNewIE)&&!(/^en/i.test(window.navigator.language||window.navigator.browserLanguage)))return
M=M.stack?[M.toString(),M.stack].join('\n'):M.toString()
var P=[M,N,O].join(' ')
if(F[P])return
F[P]=!0
L(M,{script:N,line:O})}
function L(M,N){if(!M)return
if(!B)return
var O=B.getHost()
if(!O)return
N=x.extend({},N,{system:z.stringify(w.info),connection:z.stringify(B.getConnectionStats())})
N.error=M
A.post('https://'+O+'/client/widget/errors',{params:N})}
if((typeof C==='function')&&C.prototype&&!C.__jx__no_fqname){C.prototype.__jx__fqname_chain=[(C.prototype.__jx__fqname_chain||"")," ","meshim_widget_controllers_ErrorHandler"].join('')
C.prototype.__jx__fqname="meshim_widget_controllers_ErrorHandler"}
return C})()
b.__$$__meshim_widget_utils_BindClass=(function(){var w=b.__$$__meshim_widget_controllers_DataController,x={}
function y(){var D=w.root
x.mobile=B(D.$('livechat').$('ui').$('mobile$bool'))
x.popout=B(D.$('livechat').$('ui').$('popout$bool'))
x.mockup=B(D.$('livechat').$('ui').$('mockup$bool'))
x.tablet=B(D.$('livechat').$('ui').$('tablet$bool'))
x.rtl=function(E){if(u&&u.onLanguage){u.onLanguage(G)
G()
E.onDestruction(F)}
else{E.addClass('ltr')}
function F(){u.unLanguage(G)}
function G(){if(u.rtl()){E.addClass('rtl')
E.removeClass('ltr')}
else{E.addClass('ltr')
E.removeClass('rtl')}}}
x.windowPosition=z(D.$('livechat').$('settings').$('theme').$('chat_window').$('position$string'))
x.windowPositionMobile=z(D.$('livechat').$('settings').$('theme').$('chat_window').$('position_mobile$string'))
x.windowSize=z(D.$('livechat').$('settings').$('theme').$('chat_window').$('size$string'))
x.buttonPosition=z(D.$('livechat').$('settings').$('theme').$('chat_button').$('position$string'))}
w.on('init',y)
function z(D,E){E=E||''
return function(F,G,H){G=G||''
F.autobind(D,'value',A(F,E+G,H))}}
function A(D,E,F){var G
return function H(I){if(G==I)return
if(G)D.removeClass(E+G)
G=I
if(G)D.addClass(E+G)
if(typeof F=='function')F(G)}}
function B(D,E){E=E||D.name.split('$')[0]
return function(F,G){F.autobind(D,'value',C(F,E,G))}}
function C(D,E,F){return function G(H){D[H?'addClass':'removeClass'](E)
if(typeof F=='function')F(H)}}
if((typeof x==='function')&&x.prototype&&!x.__jx__no_fqname){x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","meshim_widget_utils_BindClass"].join('')
x.prototype.__jx__fqname="meshim_widget_utils_BindClass"}
return x})()
b.__$$__meshim_widget_controllers_LanguageController=(function(){var w=b.__$$__meshim_widget_controllers_DataController,x=b.__$$__meshim_common_QueryString,y=b.__$$__jx_language_Detect,z={}
z.init=function(){var A=w.root.$('livechat').$('ui').$('mockup$bool'),B=w.root.$('livechat').$('ui').$('popout$bool'),C=w.root.$('livechat').$('settings').$('language').$('language$string')
C.bindValue(function(D){if(A.getValue()||!(u&&u.update)){return}
if(B.getValue()){var E=x().get('lang')
E&&(D=E)}
if(D==='--'||!D){D=y.guess()
C.update(D)
return}
u.update(D)})}
if((typeof z==='function')&&z.prototype&&!z.__jx__no_fqname){z.prototype.__jx__fqname_chain=[(z.prototype.__jx__fqname_chain||"")," ","meshim_widget_controllers_LanguageController"].join('')
z.prototype.__jx__fqname="meshim_widget_controllers_LanguageController"}
return z})()
b.__$$__meshim_widget_widgets_gravatar_GravatarImage=(function(){function w(x,y,z,A,B){if(!(this instanceof w))return new w(x,y,z,A,B)
y=y||v.generateID()
var C=[b.__$$__jx_ui_Widget,null,null,[[b.__$$__jx_ui_html_img,"img",null,[],{"id":"img","class":"img"}],[b.__$$__meshim_widget_widgets_IconFont,"auth_type",null,[],{"id":"auth_type","addClass":"auth_type"}]],{}],D=C[0].call(this,x,y,null,v.mangleIDs(y,C[3]),C[4]),E=D||this
v.set(y,E)
var F=v.get(y+'__img'),G=v.get(y+'__auth_type')
if(!w.__jx__jcss_generated){t.generate(x,w.prototype.__jx__fqname,w.__jx__jcss,null,w)
w.__jx__jcss_generated=!0}
var H=(function(){var J=b.__$$__meshim_widget_Config,K=b.__$$__meshim_widget_controllers_DataController,L=b.__$$__meshim_widget_utils_Utils,M=K.root.$('livechat').$('settings').$('theme').$('name$string'),N=K.root.$('livechat').$('settings').$('concierge').$('avatar_path$string'),O=K.root.$('livechat').$('settings').$('theme').$('avatars$string'),P='',Q='',R='',S='',T='',U='',V,W,X,Y
E.setDataNode=$$
function Z(){E.autobind(M,'value',function($e){if(X&&$e!=X){$a()}})}
function $$($e){$_()
if(V){E.autounbind(V,'value',$a)}
V=$e
Y=!1
if(V){E.autobind(V,'value',$a)}}
function $_(){P=Q=R=S=''}
function $a(){if(!V)return
if(Y)return
switch(V.name){case 'profile':W='visitor'
break
case 'concierge':W='concierge'
break
default:W='agent'}
var $e=V.getValue()
if(!$e){G.setDisplay('none')
R=J.AVATARS.AGENT
$c()
return}
if($e['nick$string'])T=$e['nick$string']
if($e['display_name$string']&&!L.isDefaultName($e['display_name$string']))$b($e['display_name$string'])
if($e['email$string']){Q=$e['email$string']}
if($e['auth']&&$e['auth']['avatar$string']){R=$e['auth']['avatar$string']}
else if($e['avatar_data$string']){R=$e['avatar_data$string']}
else if($e['avatar_path$string']){R=$e['avatar_path$string']
if(W=='agent')Y=!0}
else{R=''}
if(W=='agent'&&!R){R=N.getValue()}
if($e['auth']&&('type$string' in $e['auth'])){if(U)G.removeClass(U)
U=$e['auth']['type$string']||''
if(U)G.addClass(U)
G.setIcon(U)}
G.setDisplay(U?'':'none')
$c()}
function $b($e){if($e&&$e!=P){E.setTitle($e)
P=$e}}
function $c(){var $e=R||$d()
if($e&&$e!=S){F.setSrc(L.replaceFileHostname($e))
S=$e}}
function $d(){var $e=M.getValue(),$f=O.getValue()||{}
X=$e
var $g
switch(W){case 'visitor':$g=$f.visitor$string||J.AVATARS.VISITOR
break
case 'concierge':$g=$f.concierge$string||J.AVATARS.CONCIERGE
break
case 'agent':$g=N.getValue()||$f.agent$string||J.AVATARS.AGENT
break}
return $g||J.AVATARS.DEFAULT}
Z()})()
for(var I in H)if(H.hasOwnProperty(I))E[I]=H[I]
if(E.fire)E.fire('init')
E.setStyle&&E.setStyle(z)
E.setAttributes&&E.setAttributes(B)
if(typeof E.addChildren=='function')E.addChildren(A)
else v.addChildren(E,A)
if(E!==this){E.__jx__constructor=b.__$$__meshim_widget_widgets_gravatar_GravatarImage
E.__jx__native=!1}
return E}
w.prototype=e(b.__$$__jx_ui_Widget.prototype)
w.prototype.__jx__native=!1
w.prototype.__jx__super=b.__$$__jx_ui_Widget
w.__jx__jcss={"**self":{"position":"relative"},".img":{"width, height":"100%"},".auth_type":{"position":"absolute","bottom, left":0,"background":"#FFF","fontSize, width, height":"12px","line-height":"16px","overflow":"hidden","borderRadius":"2px","&.facebook":{"color":"$$facebook"},"&.twitter":{"color":"$$twitter"},"&.google":{"color":"$$google"}}}
w.prototype.__jx__fqname_chain=[(w.prototype.__jx__fqname_chain||"")," ","meshim_widget_widgets_gravatar_GravatarImage"].join('')
w.prototype.__jx__fqname="meshim_widget_widgets_gravatar_GravatarImage"
w.prototype.__jx__constructor=w
return w})()
b.__$$__meshim_widget_controllers_Tracker=(function(){var w=b.__$$__meshim_widget_controllers_DataController,x={init:B},y,z=1,A=20*1000
function B(){y=w.root.$$('livechat.profile')
q.document.on('mousemove',C)
q.window.on('click',C)
q.window.on('scroll',C)
q.window.on('keypress',C)
D()}
function C(){z++}
function D(){if(z)y.write({"active$int":+new Date()})
z=0
window.setTimeout(D,A)}
if((typeof x==='function')&&x.prototype&&!x.__jx__no_fqname){x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","meshim_widget_controllers_Tracker"].join('')
x.prototype.__jx__fqname="meshim_widget_controllers_Tracker"}
return x})()
b.__$$__meshim_widget_controllers_SoundController=(function(){var w=b.__$$__meshim_widget_Config,x=b.__$$__meshim_widget_controllers_DataController,y=b.__$$__meshim_common_Sounds,z=w.SOUNDS_URL,A={new_message:"triad_gbd"},B,C,D,E,F,G,H
function I(){B=x.root.$$('livechat.settings.sound.disabled$bool')
C=x.root.$$('livechat.profile.notification.sound$bool')
D=x.root.$$('connection.reattached_timestamp$int')
F=x.root.$$('livechat.ui.sounds')
H=x.root.$('livechat').$('ui').$('mobile$bool')
if(H.getValue()){C.update(!1)}
q.runAfterFirstChildReady(function(){if(G)return
G=new y(z)
F.bindValue(J)})}
function J(M){if(!M)return
if(!K())return
E=D.getValue()||0
if(E===0)return
for(var N in M)if(M.hasOwnProperty(N)){if(!M[N]||M[N]<E)continue
N=N.substring(0,N.indexOf('$'))
if(!G.hasSound(N))G.create(N,A[N])
G.play(N,1)}}
function K(){var M=B.getValue(),N=C.getValue()
if(typeof N==="boolean")return N
if(typeof M=="boolean")return !M
return !0}
var L={init:I,isSoundEnabled:K,play:function(){}}
if((typeof L==='function')&&L.prototype&&!L.__jx__no_fqname){L.prototype.__jx__fqname_chain=[(L.prototype.__jx__fqname_chain||"")," ","meshim_widget_controllers_SoundController"].join('')
L.prototype.__jx__fqname="meshim_widget_controllers_SoundController"}
return L})()
b.__$$__meshim_widget_controllers_ProfileListener=(function(){var w=b.__$$__meshim_widget_controllers_DataController,x=b.__$$__meshim_widget_utils_Utils,y=b.__$$__meshim_common_Regex,z={init:L},A,B,C,D,E,F,G,H,I,J,K
function L(){A=w.root.$('livechat').$('profile')
B=A.$('display_name$string')
D=A.$('email$string')
F=A.$('auth').$('type$string')
H=A.$('logged_in$bool')
B.on('value',function(O){C=O
M()})
D.on('value',function(O){E=O
M()})
F.on('value',function(O){G=O
M()})
I=w.root.$('livechat').$('settings')
J=I.$('login').$('allowed_types')
K=I.$('login').$('allowed_types_count$int')
J.on('value',function(){var O=J.getValue(),P=0
for(var Q in O)if(O.hasOwnProperty(Q)){if(Q=='email$bool')continue
if(O[Q])P++}
if(P==K.getValue())return
K.update(P)})}
function M(){H.update(N())}
function N(){if(G){return !0}
if(E&&y.trim(E)){return !0}
if(C&&y.trim(C)&&!x.isDefaultName(C)){return !0}}
if((typeof z==='function')&&z.prototype&&!z.__jx__no_fqname){z.prototype.__jx__fqname_chain=[(z.prototype.__jx__fqname_chain||"")," ","meshim_widget_controllers_ProfileListener"].join('')
z.prototype.__jx__fqname="meshim_widget_controllers_ProfileListener"}
return z})()
b.__$$__meshim_widget_controllers_PopoutController=(function(){var w=b.__$$__meshim_widget_Config,x=b.__$$__meshim_widget_controllers_DataController,y=b.__$$__meshim_widget_utils_Mobile,z={}
z.init=function A(){var B=x.root,C=B.$$('livechat.ui.popout$bool'),D=B.$$('livechat.ui.mobile$bool'),E=B.$$('livechat.ui.mockup$bool'),F=B.$$('livechat.account.key$string'),G=B.$$('livechat.profile.mid$string'),H=B.$$('livechat.settings.language.language$string'),I,J=D.getValue()?'dialog=no,fullscreen=yes':'width=400,height=500,menubar=no,toolbar=no,location=no,personalbar=no,status=no,resizable=yes,scrollbars=no'
z.openPopout=function K(L){if(p.bugs.noBoxSizing)return
var M=F.getValue()||w.ACCOUNT_KEY,N=D.getValue()
if(E.getValue()||C.getValue())return
if(!M)return
if(y.isIEMobile)return
var O=z.getPopoutURL()
if((I&&!I.closed&&I.focus)){if((!N&&p.isChrome)||y.isNativeAndroidMobile||y.isSafariIOSMobile){I.focus()}
else{I.close()
I=window.open(O,w.POPOUT_WINDOW_PREFIX+M+new Date(),J)
if(!I||I.closed){return}}
return !0}
else if(N||L){try {I=window.open(O,w.POPOUT_WINDOW_PREFIX+M,J)}catch(P){;}
if(!I||I.closed){return}
try {I.focus()}catch(P){;}
return !0}}
z.getPopoutURL=function K(){return [w.POPOUT_URL,'?key=',F.getValue()||w.ACCOUNT_KEY,'&mid=',G.getValue(),'&lang=',H.getValue(),'&hostname=',window.location.hostname].join('')}}
if((typeof z==='function')&&z.prototype&&!z.__jx__no_fqname){z.prototype.__jx__fqname_chain=[(z.prototype.__jx__fqname_chain||"")," ","meshim_widget_controllers_PopoutController"].join('')
z.prototype.__jx__fqname="meshim_widget_controllers_PopoutController"}
return z})()
b.__$$__meshim_widget_widgets_ImagePreloader=(function(){var w=b.__$$__meshim_widget_controllers_DataController,x=b.__$$__meshim_widget_utils_Utils
function y(z,z,z,z,A){if(!(this instanceof y))return new y(z,z,z,z,A)
A&&A.path&&this.setPath(A.path)
var B=this
this._update=function(C){B.update(C)}}
y.prototype.setDataNode=function(z){if(z==this.node)return
if(this.node)this.node.unbindValue(this._update)
this.node=z
if(this.node)this.node.bindValue(this._update)
return this}
y.prototype.setPath=function(z){return this.setDataNode(w.root.$$(z))}
y.prototype.update=function(z){if(!window.Image||!z||z==this.last_image)return
this.last_image=z
var A=new window.Image()
A.src=x.replaceFileHostname(this.last_image.toString())}
if((typeof y==='function')&&y.prototype&&!y.__jx__no_fqname){y.prototype.__jx__fqname_chain=[(y.prototype.__jx__fqname_chain||"")," ","meshim_widget_widgets_ImagePreloader"].join('')
y.prototype.__jx__fqname="meshim_widget_widgets_ImagePreloader"}
return y})()
b.__$$__meshim_widget_utils_Strings=(function(){var w=b.__$$__meshim_widget_controllers_DataController,x=b.__$$__meshim_widget_controllers_DefaultDataNode,y=b.__$$__meshim_widget_utils_Utils,z=b.__$$__jx_data_DataNode,A={get:function(B){if(!B)return ''
var C,D
if(B instanceof z){C=B.getValue()
D=y.descendsObj(x,B.path().slice(1).join('.'))}
else{C=w.root.$$(B).getValue()
D=y.descendsObj(x,B)}
if((C&&C.toString(1))==(D&&D.toString(1)))return D
return C||''},status:{online:u(37),away:u(38),offline:u(39)},error_message:{'text':u(40),'email':u(41),'textarea':u(40),'select':u(42),'radio':u(42),'checkbox':u(43),'checkbox_multiple':u(44),'department':u(45),'default':u(46)},placeholder:{'phone':u(47)},end_chat_menu_message:u(48),external_login:{'facebook':u(49),'twitter':u(50),'google':u(51)},chat_log:{'chat.memberjoin':u(52),'chat.memberleave':u(53),'chat.changename':u(54),'chat.visitorjoin':u(55),'chat.visitorleave':u(56)},chat_button:{'unread_one':u(57),'unread_many':u(58),'unread_mobile':u(59),mobile_greeting:{'online':u(60),'offline':u(14)}},connection_status:{'reconnecting':u(61),'idle_disconnect':u(62),'disconnected':u(61),'resuming':u(63),'fast_init':u(64)},cookie_law:{'disabled':u(65),'disabled_mobile':u(66)},popout_title:u(67),profile:{'unlink':u(68)},system_msg:{'queue':u(69)},branding:{'title':u(70)},pre_chat_offline_form:{'button_message':u(71),'button_chat':u(72),'department_any':u(73),'department_any_required':u(13),'button_disabled':u(36),operating_hours:{'closed':u(74)}},file_upload:{'error':{'size':u(75),'type':u(76),'disabled':u(77),'default':u(78)}},datetime:{days:[u(79),u(80),u(81),u(82),u(83),u(84),u(85)],'weekday':u(86),'weekend':u(87),'everyday':u(88),'all_day':u(89)}}
if((typeof A==='function')&&A.prototype&&!A.__jx__no_fqname){A.prototype.__jx__fqname_chain=[(A.prototype.__jx__fqname_chain||"")," ","meshim_widget_utils_Strings"].join('')
A.prototype.__jx__fqname="meshim_widget_utils_Strings"}
return A})()
b.__$$__meshim_widget_controllers_CookieLaw=(function(){var w=b.__$$__meshim_widget_controllers_StorageController,x=b.__$$__meshim_widget_controllers_DataController,y,z,A,B,C,D={init:E,enableCookieLaw:F,setUserChoice:G,isCookieDenied:K,setDefaultImplicitConsent:L}
function E(){y=x.root
z=y.$$('livechat.settings.cookie_law')
A=z.$('enabled$bool')
B=y.$$('livechat.profile')
C=B.$('allow_cookies$bool')
var M=w.getAllowCookieLaw()
if(typeof M=='boolean')B.write({'allow_cookies$bool':M})}
function F(){var M=y.$$('connection.status$string').getValue()
if(M){window.console&&window.console.log&&window.console.log('Zopim livechat: Cookie Law mode must be enabled '+'immediately after embedding script')
return}
z.write({'enabled$bool':!0})}
function G(M){M=m(M)
var N=I(),O=J()
if(M===N)return
w.setAllowCookieLaw(M)
B.write({'allow_cookies$bool':M})
var P=H()
if(!P)return
if(M===!1){x.livechat.clearAll()}
if(M!==O){x.livechat.reconnect()}}
function H(){var M=A.getValue()
return !!M}
function I(){return C.getValue()}
function J(){var M=I()
if(typeof M!=='boolean')return !0
else return M}
function K(){var M=H(),N=J()
return M&&(N===!1)}
function L(){var M=I()
if(typeof M!=='boolean')G(!1)}
if((typeof D==='function')&&D.prototype&&!D.__jx__no_fqname){D.prototype.__jx__fqname_chain=[(D.prototype.__jx__fqname_chain||"")," ","meshim_widget_controllers_CookieLaw"].join('')
D.prototype.__jx__fqname="meshim_widget_controllers_CookieLaw"}
return D})()
b.__$$__meshim_widget_controllers_ChatLogListener=(function(){var w=b.__$$__meshim_widget_controllers_DataController,x={init:S},y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R
function S(){y=w.root.$('livechat')
z=y.$('ui')
A=y.$('channel').$('log')
C=z.$('chat_button').$('unread_count$int')
E=y.$('profile').$('nick$string')
G=z.$('chat_window').$('display$bool')
I=z.$('chat_window').$('main_stack_name$string')
K=w.root.$$('connection.registered_timestamp$int')
M=w.root.$('connection').$('status$string')
O=z.$('mobile$bool')
Q=z.$('popout$bool')
P=O.getValue()
R=Q.getValue()
M.on('value',function(U){N=U})
C.on('value',function(U){D=U})
E.on('value',function(U){F=U})
K.on('value',function(U){L=U})
G.on('value',function(U){H=U
T()})
I.on('value',function(U){J=U
T()})
A.on('value',function(U){B=U})
A.on('keys',T)}
function T(U){if(N!='registered'&&N!='reattached')return
if(H&&J=='chat_panel'&&!P&&!R){l(function(){C.update(0)})
return}
if(!U||!U.length)return
if(!F)return
var V=0,W
for(var X=0,Y=U.length;X<Y;X++){W=B[U[X]]
if(!W)continue
if((W['nick$string']!=F)&&(W['timestamp$int']>L)&&(W['type$string']=='chat.msg')&&(J!='chat_panel'||!H||(P&&!R))){V++}}
C.update((D||0)+V)}
if((typeof x==='function')&&x.prototype&&!x.__jx__no_fqname){x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","meshim_widget_controllers_ChatLogListener"].join('')
x.prototype.__jx__fqname="meshim_widget_controllers_ChatLogListener"}
return x})()
b.__$$__meshim_widget_widgets_form_InputMultiple=(function(){var w=b.__$$__jx_ui_Label,x=b.__$$__jx_ui_Input
function y(z,A,B,C,D){if(!(this instanceof y))return new y(z,A,B,C,D)
if(!D)D={}
D.tagName='div'
this.options=[]
this.labels=[]
x.call(this,z,A,B,C,D)
this.on('click',function(){this.validate()})}
y.prototype=e(x.prototype)
y.prototype.getRequired=function(){return this.required}
y.prototype.setRequired=function(z){this.required=m(z)
return this}
y.prototype.setReadOnly=function(z){this.readOnly=m(z)
return x.prototype.setReadOnly.call(this,z)}
y.prototype.setOptions=function(z,A){this.empty()
this.options.length=this.labels.length=0
var B=this.getName(),C,D
for(var E in z)if(z.hasOwnProperty(E)){C=new this.optionConstructor(this,null,null,null,{name:B,value:z[E]['value$string'],checked:z[E]['checked$bool'],initialChecked:z[E]['checked$bool'],disabled:this.readOnly,display:(this.readOnly&&!z[E]['checked$bool'])?'none':'',className:'input_input_'+this.inputSuffix});(C.container||C).addClass('input')
D=new w(this,null,null,[z[E]['label$string']||z[E]['value$string']],{className:'option_label',display:(this.readOnly&&!z[E]['checked$bool'])?'none':''})
if(A)C.setChecked(z[E]['checked_user$bool'])
C.setLabelElement(D)
this.options.push(C)
this.labels.push(D)}
return this}
y.prototype.getOptions=function(z){var A={},B=z?'checked_user$bool':'checked$bool'
for(var C=0,D=this.options.length;C<D;C++){A[C]={}
A[C][B]=this.options[C].getChecked()}
return A}
y.prototype.focus=function(){this.options[0]&&this.options[0].focus()
return this}
y.prototype.validate=function(z){if(this.required){for(var A=0,B=this.options.length;A<B;A++)if(this.options[A].getChecked()){this.hideErrorMessage()
return !0}
z&&this.options[0]&&this.options[0].focus()
this.showErrorMessage()
return !1}
else{this.hideErrorMessage()
return !0}}
y.prototype.reset=function(){for(var z=0,A=this.options.length;z<A;z++){this.options[z].reset()}}
if((typeof y==='function')&&y.prototype&&!y.__jx__no_fqname){y.prototype.__jx__fqname_chain=[(y.prototype.__jx__fqname_chain||"")," ","meshim_widget_widgets_form_InputMultiple"].join('')
y.prototype.__jx__fqname="meshim_widget_widgets_form_InputMultiple"}
return y})()
b.__$$__jx_ui_TextField=(function(){var w=b.__$$__jx_ui_Input,x=b.__$$__jx_core_ObjectUtil,y={tagName:"input",autoValidate:!0}
function z(A,B,C,D,E){if(!(this instanceof z))return new z(A,B,C,D,E)
E=x.extend({},y,E)
if(E.tagName=='input'&&!E.type)E.type='text'
w.call(this,A,B,C,D,E)
if(!this.getValue())this.showPlaceholder()
this.on('blur',this.handlePlaceholderBlur)
this.on('focus',this.handlePlaceholderFocus)
this.on('click',this.handleAutoSelect)
var F=this
this._handlePlaceholder=function(){F.setPlaceholder(F.getPlaceholder())}
u&&u.onLanguage&&u.onLanguage(this._handlePlaceholder)}
z.prototype=e(w.prototype)
z.prototype.getPlaceholder=function(){return this.internalPlaceholder||''}
z.prototype.setPlaceholder=function(A){if(!('placeholder' in this.dom))this.emulatePlaceholder=!0
this.internalPlaceholder=A
this.emulatePlaceholder||(this.dom.placeholder=A)
this.placeholderActive&&this.showPlaceholder()
return this}
z.prototype.handlePlaceholderFocus=function(){if(this.placeholderActive)this.hidePlaceholder()}
z.prototype.handlePlaceholderBlur=function(){if(!this.getValue())this.showPlaceholder()}
z.prototype.showPlaceholder=function(){this.addClass('placeholder')
this.placeholderActive=!0
var A=this
if(this.emulatePlaceholder){this._setValueOverride=!0
this.setValue(this.getPlaceholder())
this._setValueOverride=!1
if(this.getType()=='password'){this.realTypePassword=!0
if(p.engineIE<9){if(!this.fakePlaceholderPasswordIE){var B={'class':this.getClass(),type:'text',visible:'none',value:this.getPlaceholder(),autoValidate:!1,tabIndex:this.attributes.tabIndex}
this.fakePlaceholderPasswordIE=new w(this.parentNode,null,null,null,B)
this.parentNode.insertAfter(this.fakePlaceholderPasswordIE,this)
this.autobind(this.fakePlaceholderPasswordIE,'focus',function(){A.hidePlaceholder()})}
this.getComputedStyle('display')!='none'&&(this.originalDisplay=this.getComputedStyle('display'))
this.fakePlaceholderPasswordIE.show().setOneStyle('display',this.originalDisplay).setClass(this.getClass())
this.setVisible('none')}
else this.setType('text',!0)}}}
z.prototype.hidePlaceholder=function(){this.removeClass('placeholder')
this.placeholderActive=!1
if(this.emulatePlaceholder){this._setValueOverride=!0
this.setValue('')
this._setValueOverride=!1
if(this.realTypePassword){this.realTypePassword=!1
if(p.engineIE<9){if(this.fakePlaceholderPasswordIE instanceof w)this.setVisible('block').setOneStyle('display',this.originalDisplay)
this.fakePlaceholderPasswordIE.setVisible('none')
this.focus()}
else this.setType('password',!0)}}}
z.prototype.setValue=function(A){var B=(A===0||!!A)
if(!this._setValueOverride)B&&this.hidePlaceholder()
w.prototype.setValue.call(this,A)
if(!this._setValueOverride){try {if(this.doc.activeElement.jx_wrapper!=this){B||this.showPlaceholder()}}catch(C){;}}
return this}
z.prototype.getValue=function(){if(this.placeholderActive&&this.emulatePlaceholder)return ""
return w.prototype.getValue.call(this)}
z.prototype.setAutocomplete=z.prototype.setAutoComplete=function(A){if(!('autocomplete' in this.dom))return this
if(A=='on'||A=='off'){this.dom.autocomplete=A
return this}
A=m(A)
this.dom.autocomplete=A?'on':'off'
return this}
z.prototype.getAutocomplete=z.prototype.getAutoComplete=function(){return this.dom.autocomplete}
z.prototype.getAutoSelect=function(){return this.autoSelect}
z.prototype.setAutoSelect=function(A){this.autoSelect=m(A)
return this}
z.prototype.handleAutoSelect=function(){if(!this.autoSelect)return
this.dom.select()}
z.prototype.destroy=function(){u&&u.unLanguage&&u.unLanguage(this._updatePlaceholder)
this.un('blur',this.handlePlaceholderBlur)
this.un('focus',this.handlePlaceholderFocus)
this.un('click',this.handleAutoSelect)
if(this.fakePlaceholderPasswordIE instanceof w){this.fakePlaceholderPasswordIE.destroy()
this.fakePlaceholderPasswordIE=null}
w.prototype.destroy.call(this)}
z.prototype.reset=function(){w.prototype.reset.call(this)
this.handlePlaceholderBlur()
return this}
z.prototype.insertAtCaret=function(A){if(!A)return
if(this.placeholderActive)this.hidePlaceholder()
if(this.dom.selectionStart!==a&&p.engineIE!=9){var B=this.dom.selectionStart,C=this.dom.selectionEnd,D=this.getScrollTop(),E=this.getValue()
this.setValue(E.substring(0,B)+A+E.substring(C,E.length))
this.focus()
this.dom.selectionStart=this.dom.selectionEnd=B+A.length
this.setScrollTop(D)}
else if(document.selection){this.focus()
var F=document.selection.createRange()
F.text=A
this.focus()}
else{this.setValue(this.getValue()+A)
this.focus()}}
z.prototype.getCaret=function(){var A=0
if(this.dom.selectionStart!==a){A=this.dom.selectionStart}
else if(document.selection){this.focus()
var B=document.selection.createRange()
B.moveStart('character',-this.getValue().length)
A=B.text.length}
return A}
z.prototype.setCaret=function(A){if(this.dom.selectionStart!==a){this.dom.selectionStart=A
this.dom.selectionEnd=A
this.focus()}
else if(document.selection){this.focus()
var B=document.selection.createRange()
B.moveStart('character',-this.getValue().length)
B.moveEnd('character',-this.getValue().length)
B.moveStart('character',A)
B.moveEnd('character',0)
B.select()}
return this}
if((typeof z==='function')&&z.prototype&&!z.__jx__no_fqname){z.prototype.__jx__fqname_chain=[(z.prototype.__jx__fqname_chain||"")," ","jx_ui_TextField"].join('')
z.prototype.__jx__fqname="jx_ui_TextField"}
return z})()
b.__$$__meshim_widget_widgets_CookieLawNotice=(function(){function w(x,y,z,A,B){if(!(this instanceof w))return new w(x,y,z,A,B)
y=y||v.generateID()
var C=[b.__$$__jx_ui_html_div,null,null,[[b.__$$__jx_ui_Localizer,"localizer",null,[[b.__$$__jx_ui_html_a,null,null,[],{"class":"cookie_link"}]],{"id":"localizer","content":u(144)}]],{}],D=C[0].call(this,x,y,null,v.mangleIDs(y,C[3]),C[4]),E=D||this
v.set(y,E)
var F=v.get(y+'__localizer')
if(!w.__jx__jcss_generated){t.generate(x,w.prototype.__jx__fqname,w.__jx__jcss,null,w)
w.__jx__jcss_generated=!0}
var G=(function(){var I=b.__$$__meshim_widget_controllers_DataController,J=I.root.$$('livechat.ui.chat_window')
function K(){F.on('click',function(L){if(L.target.jx_wrapper.hasClass('cookie_link')){J.update({'main_stack_name$string':'cookie_form'})}})}
K()})()
for(var H in G)if(G.hasOwnProperty(H))E[H]=G[H]
if(E.fire)E.fire('init')
E.setStyle&&E.setStyle(z)
E.setAttributes&&E.setAttributes(B)
if(typeof E.addChildren=='function')E.addChildren(A)
else v.addChildren(E,A)
if(E!==this){E.__jx__constructor=b.__$$__meshim_widget_widgets_CookieLawNotice
E.__jx__native=!1}
return E}
w.prototype=e(b.__$$__jx_ui_html_div.prototype)
w.prototype.__jx__native=!1
w.prototype.__jx__super=b.__$$__jx_ui_html_div
w.__jx__jcss={".cookie_link":{"textDecoration":"underline","cursor":"pointer"}}
w.prototype.__jx__fqname_chain=[(w.prototype.__jx__fqname_chain||"")," ","meshim_widget_widgets_CookieLawNotice"].join('')
w.prototype.__jx__fqname="meshim_widget_widgets_CookieLawNotice"
w.prototype.__jx__constructor=w
return w})()
b.__$$__meshim_widget_widgets_Favicon=(function(){function w(x,y,z,A,B){if(!(this instanceof w))return new w(x,y,z,A,B)
y=y||v.generateID()
var C=[b.__$$__jx_ui_Widget,null,null,[[b.__$$__jx_ui_Image,"image",null,[],{"id":"image","addClass":"custom_icon"}],[b.__$$__meshim_widget_widgets_IconFont,"icon",null,[],{"id":"icon","addClass":"default_icon"}],[b.__$$__jx_ui_Widget,null,null,[[b.__$$__jx_ui_Widget,"dots",null,[],{"id":"dots","addClass":"dots","selectable":"false"}]],{"addClass":"dots_container"}]],{}],D=C[0].call(this,x,y,null,v.mangleIDs(y,C[3]),C[4]),E=D||this
v.set(y,E)
var F=v.get(y+'__image'),G=v.get(y+'__icon'),H=v.get(y+'__dots')
if(!w.__jx__jcss_generated){t.generate(x,w.prototype.__jx__fqname,w.__jx__jcss,null,w)
w.__jx__jcss_generated=!0}
var I=(function(){var K=b.__$$__meshim_widget_controllers_DataController,L=1000,M=3,N=K.root.$('livechat').$('account'),O=K.root.$('livechat').$('settings').$('branding'),P=N.$('status$string'),Q,R=O.$('hide_favicon$bool'),S,T=O.$('custom_favicon_path$string'),U,V=K.root.$('livechat').$('ui').$('chat_button').$('unread_count$int'),W,X,Y,Z
function $$(){if(X)try {X.abort()}catch($g){;}
X=null
if(!S){$d(!0)}
else{if(U){F.setSrc(U)
$d(!1)
return}
var $c=$e()
if($c){F.setSrc($c)
$d(!1)
return}
X=$f(function($g){if($g){F.setSrc($g)
$d(!1)}
else{$d(!0)}})}
function $d($g){Y=!$g
if($g){F.setDisplay('none')
G.setDisplay('')}
else{F.setDisplay('')
G.setDisplay('none')}
$a()}
function $e(){var $g=window.document.getElementsByTagName('head')[0],$h=$g.getElementsByTagName('link')
for(var $i=0,$j=$h.length;$i<$j;$i++)if($h[$i].rel=='icon'||$h[$i].rel=='shortcut icon')return $h[$i].href}
function $f($g){var $h,$i=window.location.protocol+'//'+window.location.host+'/favicon.ico'
try {if(window.ActiveXObject){$h=new window.ActiveXObject("Msxml2.XMLHTTP")
if(!$h)$h=new window.ActiveXObject("Microsoft.XMLHTTP")}}catch($j){;}
if(!$h&&typeof window.XMLHttpRequest!='undefined')$h=new window.XMLHttpRequest()
if($h){$h.onreadystatechange=function(){if($h.readyState===4){if($h.status===200||($h.status>=300&&$h.status<400))$g($i)
else $g()}}
$h.open('HEAD',$i,!0)
$h.send(null)}
return $h}}
function $_(){E.autobind(R,'value',function($c){S=$c
$$()})
E.autobind(T,'value',function($c){U=$c
$$()})
E.autobind(P,'value',function($c){if($c==Q)return
Q=$c
$a()})
E.autobind(V,'value',function($c){if($c==W)return
W=$c
$a()})}
function $a(){if(Q=='offline'&&!W){G.setIcon('email')
G.removeClass('default_icon_online')
G.addClass('default_icon_offline')}
else{G.setIcon('message')
G.removeClass('default_icon_offline')
G.addClass('default_icon_online')}
if(W&&!Y){if(!Z){$b()
Z=window.setInterval($b,L)}
H.setDisplay('')}
else{if(Z){window.clearInterval(Z)
Z=null}
H.setDisplay('none')}}
function $b(){var $c=H.getText()
H.setText($c.length==M?'':($c+'.'))}
$_()})()
for(var J in I)if(I.hasOwnProperty(J))E[J]=I[J]
if(E.fire)E.fire('init')
E.setStyle&&E.setStyle(z)
E.setAttributes&&E.setAttributes(B)
if(typeof E.addChildren=='function')E.addChildren(A)
else v.addChildren(E,A)
if(E!==this){E.__jx__constructor=b.__$$__meshim_widget_widgets_Favicon
E.__jx__native=!1}
return E}
w.prototype=e(b.__$$__jx_ui_Widget.prototype)
w.prototype.__jx__native=!1
w.prototype.__jx__super=b.__$$__jx_ui_Widget
w.__jx__jcss={".custom_icon":{"width, height":"16px"},".default_icon":{"fontSize":"16px","width":"16px","display":"inline-block","&.default_icon_online":{"lineHeight":"20px","verticalAlign":"top","color":"$$faviconOnlineColor"},"&.default_icon_offline":{"lineHeight":"18px","verticalAlign":"top","color":"$$faviconOfflineColor"}},".dots_container":{"fontFamily":"Arial","position":"absolute","width":"100%","textAlign":"center","fontSize":"20px","letterSpacing":"-2px","top":"-3px","left":"-1px","lineHeight":"24px"},".dots":{"display":"inline-block","width":"12px","lineHeight":"22px","textAlign":"left","color":["$$chatButtonBg","$$faviconBg","$$faviconDotsColor"],"background":"transparent"}}
w.prototype.__jx__fqname_chain=[(w.prototype.__jx__fqname_chain||"")," ","meshim_widget_widgets_Favicon"].join('')
w.prototype.__jx__fqname="meshim_widget_widgets_Favicon"
w.prototype.__jx__constructor=w
return w})()
b.__$$__jx_ui_Option=(function(){var w=b.__$$__jx_ui_Input
function x(y,z,A,B,C){if(!(this instanceof x))return new x(y,z,A,B,C)
if(!C)C={}
C.tagName||(C.tagName='option')
w.call(this,y,z,A,B,C)}
x.prototype=e(w.prototype)
x.prototype.getLabel=function(){return this.dom.label}
x.prototype.setLabel=function(y){this.dom.label=y
return this}
x.prototype.getSelected=function(){return this.dom.defaultSelected}
x.prototype.setSelected=function(y){this.dom.defaultSelected=m(y)
return this}
x.prototype.getPlaceholder=function(){return this.placeholder}
x.prototype.setPlaceholder=function(y){this.placeholder=y
return this}
if((typeof x==='function')&&x.prototype&&!x.__jx__no_fqname){x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","jx_ui_Option"].join('')
x.prototype.__jx__fqname="jx_ui_Option"}
return x})()
b.__$$__meshim_widget_widgets_chatLogRenderer_MemberChange=(function(){function w(x,y,z,A,B){if(!(this instanceof w))return new w(x,y,z,A,B)
y=y||v.generateID()
var C=[b.__$$__jx_ui_html_div,null,null,[],{}],D=C[0].call(this,x,y,null,v.mangleIDs(y,C[3]),C[4]),E=D||this
v.set(y,E)
if(!w.__jx__jcss_generated){t.generate(x,w.prototype.__jx__fqname,w.__jx__jcss,null,w)
w.__jx__jcss_generated=!0}
var F=(function(){var H=b.__$$__meshim_widget_controllers_DataController,I=b.__$$__meshim_widget_utils_Strings,J=b.__$$__meshim_widget_controllers_GoogleAnalytics,K=I.chat_log,L,M=H.root.$$('connection.reattached_timestamp$int'),N
function O(){E.setDataNode=P
M.on('value',function(R){N=R})}
function P(R){if(L)E.autounbind(L,'value',Q)
L=R.$('display_name$string')
E.autobind(L,'value',Q)}
function Q(R){var S=L.parentNode.getValue('nick$string')||''
S=S.split(':')[0]
var T=L.parentNode.getValue('type$string')
if(!S||!R){if(T==='chat.memberleave'&&S==='visitor');
else{E.parentNode.setDisplay('none')
return}}
E.parentNode.setDisplay('')
var U=L.parentNode.getValue('timestamp$int'),V=K[T]||''
V=V.replace('<name>',R)
if(S=='visitor'){if(T!='chat.memberleave'){V=I.chat_log['chat.visitorjoin']
E.parentNode.addClass('visitor_join')}
else{V=I.chat_log['chat.visitorleave']
E.parentNode.addClass('visitor_leave')}}
if(S=='agent'&&T=='chat.memberjoin'){if(N&&U>N){J.trackEvent('Served by Operator',R)}}
E.setText(V)}
O()})()
for(var G in F)if(F.hasOwnProperty(G))E[G]=F[G]
if(E.fire)E.fire('init')
E.setStyle&&E.setStyle(z)
E.setAttributes&&E.setAttributes(B)
if(typeof E.addChildren=='function')E.addChildren(A)
else v.addChildren(E,A)
if(E!==this){E.__jx__constructor=b.__$$__meshim_widget_widgets_chatLogRenderer_MemberChange
E.__jx__native=!1}
return E}
w.prototype=e(b.__$$__jx_ui_html_div.prototype)
w.prototype.__jx__native=!1
w.prototype.__jx__super=b.__$$__jx_ui_html_div
w.__jx__jcss={}
w.prototype.__jx__fqname_chain=[(w.prototype.__jx__fqname_chain||"")," ","meshim_widget_widgets_chatLogRenderer_MemberChange"].join('')
w.prototype.__jx__fqname="meshim_widget_widgets_chatLogRenderer_MemberChange"
w.prototype.__jx__constructor=w
return w})()
b.__$$__jx_ui_EmailField=(function(){var w=b.__$$__jx_ui_TextField
function x(y,z,A,B,C){if(!(this instanceof x))return new x(y,z,A,B,C)
if(!C)C={}
C.tagName||(C.tagName='input')
C.type||(C.type='email')
w.call(this,y,z,A,B,C)}
x.prototype=e(w.prototype)
if((typeof x==='function')&&x.prototype&&!x.__jx__no_fqname){x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","jx_ui_EmailField"].join('')
x.prototype.__jx__fqname="jx_ui_EmailField"}
return x})()
b.__$$__meshim_widget_components_chatWindow_newChatForm_Banner=(function(){function w(x,y,z,A,B){if(!(this instanceof w))return new w(x,y,z,A,B)
y=y||v.generateID()
var C=[b.__$$__jx_ui_Widget,null,null,[[b.__$$__jx_ui_html_table,null,null,[[b.__$$__jx_ui_html_tbody,null,null,[[b.__$$__jx_ui_html_tr,"tr",null,[[b.__$$__jx_ui_html_td,"text_cell",null,[[b.__$$__jx_ui_Widget,"text",null,[],{"id":"text"}]],{"id":"text_cell","class":"text_cell"}],[b.__$$__jx_ui_html_td,"image_cell",null,[[b.__$$__jx_ui_Widget,"image_container",null,[[b.__$$__jx_ui_Widget,"image",null,[],{"id":"image","tagName":"img","addClass":"banner_image"}]],{"id":"image_container","addClass":"banner_image_container"}],[b.__$$__meshim_widget_widgets_IconFont,"icon",null,[],{"id":"icon","icon":"badge_default","addClass":"banner_icon"}]],{"id":"image_cell","class":"image_cell"}]],{"id":"tr"}]],{}]],{"class":"banner_table"}]],{}],D=C[0].call(this,x,y,null,v.mangleIDs(y,C[3]),C[4]),E=D||this
v.set(y,E)
var F=v.get(y+'__tr'),G=v.get(y+'__text_cell'),H=v.get(y+'__text'),I=v.get(y+'__image_cell'),J=v.get(y+'__image_container'),K=v.get(y+'__image'),L=v.get(y+'__icon')
if(!w.__jx__jcss_generated){t.generate(x,w.prototype.__jx__fqname,w.__jx__jcss,null,w)
w.__jx__jcss_generated=!0}
var M=(function(){var O=b.__$$__meshim_widget_controllers_DataController,P=b.__$$__meshim_widget_utils_Utils,Q=b.__$$__meshim_widget_utils_Strings,R=O.root,S=R.$('livechat').$('settings').$('banner'),T=S.$('layout$string'),U,V=S.$('text$string'),W=S.$('image_path$string'),X,Y=S.$('image_data$string'),Z,$$=R.$('livechat').$('ui').$('mockup$bool').getValue(),$_=R.$('livechat').$('ui').$('chat_window').$('display$bool'),$a,$b=R.$('livechat').$('ui').$('chat_window').$('main_stack_name$string'),$c,$d=100
function $e(){if(p.bugs.noBoxSizing){K.dom.onload=$g
E.autobind($_,'value',function($i){$a=$i
$g()})
E.autobind($b,'value',function($i){$c=$i
$g()})}
function $g(){if(!$a)return
if($c!='new_chat_form')return
if(!p.bugs.noBoxSizing)return
K.setWidth('')
K.setHeight('')
l($h,E,!0)}
function $h(){var $i=parseInt(K.getWidth()||K.dom.width,10),$j=parseInt(K.getHeight()||K.dom.height,10)
if(!$i||!$j)return
var $k=$i>$j,$l,$m,$n
$l=$k?$i:$j
$m=$k?$j:$i
if($l>$d){$n=$l/$d
$l=$l/$n
$m=$m/$n
K.setWidth($k?$l:$m)
K.setHeight($k?$m:$l)}
E.dom.className=E.dom.className}
E.autobind(T,'value',function($i){if(U)E.removeClass(U)
U=$i
if(!O.livechat.getLimit()&&U=='image_only'){U='image_right'}
if(U)E.addClass(U)
$f()})
E.autobind(V,'value',function(){H.setText(Q.get(V))})
E.autobind(W,'value',function($i){X=$i
$f()})
if($$){P.supportsDataURI(function($i){if(!$i)return
E.autobind(Y,'value',function($j){Z=$j
$f()})})}}
function $f(){E.setStyle('background','')
var $g=P.replaceFileHostname(Z||X||'')
switch(U){case 'image_right':K.setSrc($g)
F.insertBefore(G,I)
break
case 'image_left':K.setSrc($g)
F.insertBefore(I,G)
break
case 'image_only':E.setStyle('background','url('+$g+') center center no-repeat')
break
default:E.setStyle('background','')
break}
if($g){J.setDisplay('')
L.setDisplay('none')}
else{J.setDisplay('none')
L.setDisplay('')}}
$e()})()
for(var N in M)if(M.hasOwnProperty(N))E[N]=M[N]
if(E.fire)E.fire('init')
E.setStyle&&E.setStyle(z)
E.setAttributes&&E.setAttributes(B)
if(typeof E.addChildren=='function')E.addChildren(A)
else v.addChildren(E,A)
if(E!==this){E.__jx__constructor=b.__$$__meshim_widget_components_chatWindow_newChatForm_Banner
E.__jx__native=!1}
return E}
w.prototype=e(b.__$$__jx_ui_Widget.prototype)
w.prototype.__jx__native=!1
w.prototype.__jx__super=b.__$$__jx_ui_Widget
w.__jx__jcss={"**self":{".banner_table":{"width":"100%","height":"100%","tableLayout":"fixed","direction":"ltr","color":"$$badgeContentColor"},".text_cell, .image_cell":{"verticalAlign":"middle"},".text_cell":{"wordWrap":"break-word","whiteSpace":"pre-wrap"},".image_cell":{"width":"100px","textAlign":"center"},".banner_image_wrapper":{"width":"100px"},".banner_image":{"maxWidth":"100px","maxHeight":"100px","verticalAlign":"top","border":"none"},".banner_icon":{"width":"100px","fontSize":"90px","marginTop":"10px","marginLeft":"5px","textAlign":"center"}},"&.image_right":{".text_cell":{"paddingRight":"3px"},".image_cell":{}},"&.image_left":{".text_cell":{"paddingLeft":"3px"},".image_cell":{}},"&.image_only":{".text_cell":{"display":"none"},".image_cell":{"display":"none"}},"&.text_only":{".text_cell":{"fontSize":"26px","textAlign":"center","width":"100%"},".image_cell":{"display":"none"}}}
w.prototype.__jx__fqname_chain=[(w.prototype.__jx__fqname_chain||"")," ","meshim_widget_components_chatWindow_newChatForm_Banner"].join('')
w.prototype.__jx__fqname="meshim_widget_components_chatWindow_newChatForm_Banner"
w.prototype.__jx__constructor=w
return w})()
b.__$$__meshim_widget_widgets_menu_IconFont=(function(){function w(x,y,z,A,B){if(!(this instanceof w))return new w(x,y,z,A,B)
y=y||v.generateID()
var C=[b.__$$__meshim_widget_widgets_IconFont,null,null,[],{}],D=C[0].call(this,x,y,null,v.mangleIDs(y,C[3]),C[4]),E=D||this
v.set(y,E)
if(!w.__jx__jcss_generated){t.generate(x,w.prototype.__jx__fqname,w.__jx__jcss,null,w)
w.__jx__jcss_generated=!0}
var F=(function(){var H=b.__$$__meshim_widget_utils_BindClass,I={'true':'tick','false':'cross'},J=E.setIcon
E.setIcon=function(L,M){if(!M)L=m(L).toString()
return J.call(E,I[L]||L)}
function K(){H.rtl(E)}
K()})()
for(var G in F)if(F.hasOwnProperty(G))E[G]=F[G]
if(E.fire)E.fire('init')
E.setStyle&&E.setStyle(z)
E.setAttributes&&E.setAttributes(B)
if(typeof E.addChildren=='function')E.addChildren(A)
else v.addChildren(E,A)
if(E!==this){E.__jx__constructor=b.__$$__meshim_widget_widgets_menu_IconFont
E.__jx__native=!1}
return E}
w.prototype=e(b.__$$__meshim_widget_widgets_IconFont.prototype)
w.prototype.__jx__native=!1
w.prototype.__jx__super=b.__$$__meshim_widget_widgets_IconFont
w.__jx__jcss={"**self":{"float":"right","lineHeight":1,"position":"relative","top":"3px","verticalAlign":"middle","&.rtl":{"float":"left"}},"&.left":{"float":"left","&.rtl":{"float":"right"}}}
w.prototype.__jx__fqname_chain=[(w.prototype.__jx__fqname_chain||"")," ","meshim_widget_widgets_menu_IconFont"].join('')
w.prototype.__jx__fqname="meshim_widget_widgets_menu_IconFont"
w.prototype.__jx__constructor=w
return w})()
b.__$$__meshim_widget_widgets_menu_Item=(function(){function w(x,y,z,A,B){if(!(this instanceof w))return new w(x,y,z,A,B)
y=y||v.generateID()
var C=[b.__$$__jx_ui_Button,null,null,[],{"type":"button"}],D=C[0].call(this,x,y,null,v.mangleIDs(y,C[3]),C[4]),E=D||this
v.set(y,E)
if(!w.__jx__jcss_generated){t.generate(x,w.prototype.__jx__fqname,w.__jx__jcss,null,w)
w.__jx__jcss_generated=!0}
var F=(function(){var H=b.__$$__meshim_widget_utils_BindClass
function I(){H.mobile(E)
H.rtl(E)}
I()})()
for(var G in F)if(F.hasOwnProperty(G))E[G]=F[G]
if(E.fire)E.fire('init')
E.setStyle&&E.setStyle(z)
E.setAttributes&&E.setAttributes(B)
if(typeof E.addChildren=='function')E.addChildren(A)
else v.addChildren(E,A)
if(E!==this){E.__jx__constructor=b.__$$__meshim_widget_widgets_menu_Item
E.__jx__native=!1}
return E}
w.prototype=e(b.__$$__jx_ui_Button.prototype)
w.prototype.__jx__native=!1
w.prototype.__jx__super=b.__$$__jx_ui_Button
w.__jx__jcss={"**self":{"background":"transparent","border":"none","position":"relative","width":"100%","overflow":"hidden","*zoom":1,"textAlign":"left","padding":"$$menuItemPadding","*":{"cursor":"pointer"}},"&.rtl":{"textAlign":"right"},"&:hover":{"background":"$$menuItemHoverBg"},"&.mobile":{"borderTopWidth":"$$menuBorderWidth","borderTopStyle":"$$menuBorderStyle","borderTopColor":"$$menuBorderColor"}}
w.prototype.__jx__fqname_chain=[(w.prototype.__jx__fqname_chain||"")," ","meshim_widget_widgets_menu_Item"].join('')
w.prototype.__jx__fqname="meshim_widget_widgets_menu_Item"
w.prototype.__jx__constructor=w
return w})()
b.__$$__meshim_widget_controllers_UIController=(function(){var w=b.__$$__meshim_widget_controllers_DataController,x=b.__$$__meshim_widget_controllers_PopoutController,y=b.__$$__meshim_widget_utils_Utils,z=b.__$$__meshim_widget_utils_Mobile,A={UNDEFINED:'undefined',NONE:'none',BUTTON:'button',BANNER:'banner',WINDOW:'window'},B={NEW_CHAT_FORM:'new_chat_form',PRE_CHAT_OFFLINE_FORM:'pre_chat_offline_form',CHAT_PANEL:'chat_panel',POST_CHAT_FORM:'post_chat_form',COOKIE_FORM:'cookie_form',CARD_FORM:'card_form',AGENT_LIST:'agent_list',ABOUT_PANEL:'about_panel'},C={ONLINE:'online',AWAY:'away',OFFLINE:'offline'},D=q.extend({init:E})
function E(){var F=w.root,G=F.$('livechat'),H=G.$('settings'),I=H.$('theme'),J=G.$('ui'),K=J.$('chat_window'),L=J.$('chat_button'),M=J.$('popout$bool').getValue(),N=J.$('mobile$bool').getValue(),O=J.$('mockup$bool').getValue()
if(N&&M){z.hackFastButtons()}
y.hackTitleLocalization()
var P,Q=F.$('connection').$('message$string'),R
Q.bindValue(function($2){if($2==R)return
R=$2
$G()})
var S=F.$('connection').$('status$string'),T,U,V=[]
S.bindValue(function($2){if($2==T)return
T=$2
$_()
$G()
if(T=='reattached'||T=='cookie_law'){$U(V)
V=[]
U=T}})
var W=G.$('account').$('status$string'),X
W.bindValue(function($2){if($2==X)return
X=$2
$I()
$G()})
var Y=G.$('channel').$('chatting$bool'),Z,$$=J.$('chat_window').$('pre_chat_form').$('submitted$bool')
Y.bindValue(function($2){if($2==Z)return
Z=$2
$_()
$G()})
function $_(){if(Z&&T=='reattached'){$$.update(!0)}}
var $a=H.$('behavior').$('do_not_display$bool'),$b
$a.bindValue(function($2){if($2==$b)return
$b=$2
$G()})
var $c=H.$('banner').$('enabled$bool'),$d
$c.bindValue(function($2){if($2==$d)return
$d=$2
$G()})
var $e=H.$('bubble').$('enabled$bool'),$f
$e.bindValue(function($2){if($2==$f)return
$f=$2
$G()})
var $g=H.$('chat_button').$('hide_when_offline$bool'),$h
$g.bindValue(function($2){if($2==$h)return
$h=$2
$G()})
var $i=K.$('user_hidden$bool'),$j
$i.bindValue(function($2){if($2==$j)return
$j=$2
$G()})
var $k=K.$('user_hidden_banner$bool'),$l
$k.bindValue(function($2){if($2==$l)return
$l=$2
$G()})
var $m=K.$('user_hidden_bubble$bool'),$n
$m.bindValue(function($2){if($2==$n)return
$n=$2
$I()})
var $o=G.$('settings').$('forms').$('pre_chat_form').$('required$bool'),$p
$o.bindValue($q)
$$.bindValue($q)
function $q(){var $2=$o.getValue(),$3=$$.getValue(),$4=$2&&!$3
if($4==$p)return
$p=$4
$G()}
var $r,$s,$t=L.$('display$bool'),$u=K.$('display$bool'),$v=K.$('main_stack_name$string')
$t.bindValue($w)
$u.bindValue($w)
$v.bindValue($w)
function $w(){var $2=$t.getValue(),$3=$u.getValue(),$4=$v.getValue(),$5,$6
if(k($2)&&k($3)){$5=A.UNDEFINED}
else if(!$2&&!$3){$5=A.NONE}
else if($2&&!$3){$5=A.BUTTON}
else if(!$2&&$3){if($4==B.NEW_CHAT_FORM){$5=A.BANNER}
else{$5=A.WINDOW}}
$6=$4
if($5==$r&&$6==$s)return
$r=$5
$s=$6
$G()}
var $x=L.$('bubble').$('display$bool'),$y
$x.bindValue(function($2){if($2==$y)return
$y=$2
$I()})
var $z=I.$('chat_button').$('use_bubble$bool'),$A
$z.bindValue(function($2){if($2==$A)return
$A=$2
$I()})
var $B=I.$('chat_window').$('use_banner$bool'),$C
$B.bindValue(function($2){if($2==$C)return
$C=$2
$G()})
var $D=G.$('agents')
W.bindValue($E)
$D.bindKeys($E)
function $E(){if(O)return
var $2=W.getValue(),$3=$D.getKeys().length,$4=Y.getValue()
if($4&&!$3&&$2=='offline'){w.livechat.endChat()}}
P=!0
var $F
function $G(){if(!P){return}
if($J){return}
if($S){return}
if($Q){return}
if($F){return}
$F=!0
if(X=='banned'){if(M){$M(A.WINDOW)
$N([B.PRE_CHAT_OFFLINE_FORM])}
else{$M(A.UNDEFINED)}}
else if($R.api_display&&$R.api_stack);
else if($b&&!M&&!$R.api_display&&!Z&&$r==A.UNDEFINED);
else if(N&&!M){if($R.api_display);
else{if($r==A.NONE);
else{if($b||(X=='offline'&&$h)){$M(A.UNDEFINED)}
else{$M(A.BUTTON)}}}}
else if(T=='cookie_law'){if($R.api_display);
else if($r==A.NONE);
else{if(M){$M(A.WINDOW)}
else{if($r==A.UNDEFINED){$M(A.BUTTON)}
else;}}
$N([B.COOKIE_FORM])}
else if(T=='registered'||T=='reattached'||R=='fast_init'){if(Z){if($R.api_display);
else{if($j){if(M){$M(A.WINDOW)}
else{if($r==A.UNDEFINED){$M(A.BUTTON)}
else;}}
else{$M(A.WINDOW)}}
$N([B.CHAT_PANEL,B.AGENT_LIST,B.CARD_FORM,B.ABOUT_PANEL])}
else if(X==C.ONLINE||X==C.AWAY){if($R.api_display){$2()}
else if(M||$r==A.WINDOW){if(M){$M(A.WINDOW)}
else;
$2()}
else if($r==A.NONE);
else if($d&&$C){switch($r){case A.UNDEFINED:if($l){$M(A.BUTTON)}
else{$M(A.BANNER)}
break
case A.BUTTON:if($l);
else{$M(A.BANNER)}
break
case A.BANNER:break}}
else{switch($r){case A.UNDEFINED:$M(A.BUTTON)
break
case A.BUTTON:break
case A.BANNER:$M(A.BUTTON)
break}}}
else if(X=='offline'){if($R.api_display);
else if(M){$M(A.WINDOW)}
else if($r==A.NONE);
else if($h){$M(A.UNDEFINED)}
else{if($r==A.WINDOW);
else{$M(A.BUTTON)}}
$N([B.PRE_CHAT_OFFLINE_FORM])}}
$F=!1
function $2(){if($p){$N([B.PRE_CHAT_OFFLINE_FORM])}
else{$N([B.CHAT_PANEL,B.AGENT_LIST,B.CARD_FORM,B.POST_CHAT_FORM,B.ABOUT_PANEL])}}}
var $H
function $I(){if(!P){return}
if($O){return}
if($S){return}
if($Q){return}
if($H){return}
$H=!0
if(N||M){$P(!1)}
else{if($A){if($R.api_bubble);
else{if($f){if(X==C.ONLINE||X==C.AWAY){if($n){$P(!1)}
else{if(k($y)){$P(!0)}
else;}}
else{$P(a)}}
else{$P(!1)}}}
else{$P(a)}}
$H=!1}
var $J,$K,$L
function $M($2){$K=$u.getValue()
$J=!0
switch($2){case A.UNDEFINED:$t.update(a)
$u.update(a)
break
case A.NONE:$t.update(!1)
$u.update(!1)
break
case A.BUTTON:$t.update(!0)
$u.update(!1)
break
case A.BANNER:if($v.getValue()!=B.NEW_CHAT_FORM){$L=$v.getValue()
$v.update(B.NEW_CHAT_FORM)}
$t.update(!1)
$u.update(!0)
break
case A.WINDOW:if($v.getValue()==B.NEW_CHAT_FORM){$N($L?[$L]:[B.PRE_CHAT_OFFLINE_FORM,B.CHAT_PANEL,B.POST_CHAT_FORM,B.COOKIE_FORM,B.CARD_FORM,B.AGENT_LIST])
$L=null}
$t.update(!1)
$u.update(!0)
break}
if(!$S){if($K&&$2!=A.WINDOW){D.fire('API:window:hide')}
else if(!$K&&$2==A.WINDOW){D.fire('API:window:show')}}
$J=!1}
function $N($2){if(!$2||!$2.length)return
if(f($s,$2)==-1){$v.update($2[0])}}
var $O
function $P($2){$O=!0
$x.update($2)
$O=!1}
var $Q
D.userShowBadgeOrWindow=function(){if(N)return
$Q=!0
var $2=$v.getValue()
if($d&&$2==B.NEW_CHAT_FORM&&$C){$M(A.BANNER)}
else{$M(A.WINDOW)}
$R.api_display=!1
$R.api_stack=!1
$Q=!1
$G()}
D.userShowWindow=function(){if(N||$r==A.WINDOW)return
$Q=!0
$M(A.WINDOW)
$R.api_display=!1
$R.api_stack=!1
$Q=!1
$G()}
D.userHideWindow=function(){if(N||$r==A.BUTTON)return
$Q=!0
D.setWindowUserHidden()
if($b){$M(A.NONE)}
else{$M(A.BUTTON)}
$R.api_display=!1
$R.api_stack=!1
$Q=!1
$G()}
D.userHideBanner=function(){if(N||$r==A.BUTTON)return
$Q=!0
D.setBannerUserHidden()
if($b){$M(A.NONE)}
else{$M(A.BUTTON)}
$R.api_display=!1
$R.api_stack=!1
$Q=!1
$G()}
D.userHideBubble=function(){if(N)return
$Q=!0
D.setBubbleUserHidden()
$P(!1)
$R.api_bubble=!1
$Q=!1
$I()}
var $R={api_display:!1,api_stack:!1},$S
D.showWindow=function(){$T(function(){if(N){x.openPopout(!0)}
else{$S=!0
$M(A.WINDOW)
$R.api_display=A.WINDOW
$S=!1
$G()}})}
D.hideWindow=function(){if(N)return
$T(function(){$S=!0
if($b){$M(A.NONE)
$R.api_display=A.NONE}
else{$M(A.BUTTON)
$R.api_display=A.BUTTON}
$S=!1
$G()})}
D.toggleWindow=function(){if(N)return
$T(function(){if($r==A.WINDOW)D.hideWindow()
else D.showWindow()})}
D.showBanner=function(){if(N||!$C)return
$T(function(){$S=!0
$M(A.BANNER)
$R.api_display=A.BANNER
$R.api_stack=A.BANNER
$S=!1
$G()})}
D.hideBanner=function(){if(N)return
$T(function(){$S=!0
if($b){$M(A.NONE)
$R.api_display=A.NONE}
else{$M(A.BUTTON)
$R.api_display=A.BUTTON}
$R.api_stack=!1
$S=!1
$G()})}
D.showButton=function(){$T(function(){$S=!0
$M(A.BUTTON)
$R.api_display=A.BUTTON
$S=!1
$G()})}
D.hideButton=function(){$T(function(){$S=!0
if(N){$R.api_display=A.NONE
$M(A.NONE)}
else{$R.api_display=A.WINDOW
$M(A.WINDOW)}
$S=!1
$G()})}
D.hideAll=function(){$T(function(){$S=!0
$M(A.NONE)
$R.api_display=A.NONE
$S=!1
$G()})}
D.showBubble=function(){if(N)return
$T(function(){$S=!0
$P(!0)
$R.api_bubble=!0
$S=!1
$I()})}
D.hideBubble=function(){if(N)return
$T(function(){$S=!0
$P(!1)
$R.api_bubble=!0
$S=!1
$I()})}
D.resetBubble=function(){if(N)return
$T(function(){$S=!0
D.resetBubbleUserHidden()
$P(!0)
$R.api_bubble=!0
$S=!1
$I()})}
D.setWindowUserHidden=function(){$i.update(!0)}
D.setBannerUserHidden=function(){$k.update(!0)}
D.setBubbleUserHidden=function(){$m.update(!0)}
D.resetBubbleUserHidden=function(){$m.update(!1)}
D.setHideWhenOffline=function($2){$g.update($2)}
function $T($2){if(U)$V($2)
else V.push($2)}
function $U($2){if(!$2||!g($2))return
for(var $3=0;$3<$2.length;$3++)$V($2[$3])}
function $V($2){try {$2()}catch($3){if(!window.console)return
if(typeof window.console.log=='function'){window.console.log('Error in LiveChatAPI call: '+$3.name+' - '+$3.message)
if(typeof window.console.dir=='function')window.console.dir($3)
window.console.log($2.toString())}}}
var $W=K.$('menu_stack_name$string')
D.showMenu=function($2){$W.update($2)}
var $X=K.$('profile_menu').$('index$int'),$Y=G.$('profile').$('logged_in$bool'),$Z=G.$('profile').$('auth').$('type$string'),$0=H.$('login').$('allowed_types_count$int'),$1=G.$('settings').$('login').$('restrict_profile$bool')
D.showProfileMenu=function(){if($1.getValue())return
D.showMenu('profile_menu')
$X.update($Y.getValue()?($Z.getValue()?1:2):(N?2:($0.getValue()?0:2)))}
D.openPopout=function(){x.openPopout.apply(x,arguments)}}
if((typeof D==='function')&&D.prototype&&!D.__jx__no_fqname){D.prototype.__jx__fqname_chain=[(D.prototype.__jx__fqname_chain||"")," ","meshim_widget_controllers_UIController"].join('')
D.prototype.__jx__fqname="meshim_widget_controllers_UIController"}
return D})()
b.__$$__meshim_widget_widgets_toast_Disconnected=(function(){function w(x,y,z,A,B){if(!(this instanceof w))return new w(x,y,z,A,B)
y=y||v.generateID()
var C=[b.__$$__meshim_widget_widgets_Toast,null,null,[[b.__$$__jx_ui_Widget,"message",null,[],{"id":"message","addClass":"reconnecting_toast_text"}],[b.__$$__meshim_widget_widgets_toast_disconnected_Image,"img",null,[],{"id":"img","addClass":"reconnecting_toast_image"}]],{}],D=C[0].call(this,x,y,null,v.mangleIDs(y,C[3]),C[4]),E=D||this
v.set(y,E)
var F=v.get(y+'__message'),G=v.get(y+'__img')
if(!w.__jx__jcss_generated){t.generate(x,w.prototype.__jx__fqname,w.__jx__jcss,null,w)
w.__jx__jcss_generated=!0}
var H=(function(){var J=b.__$$__meshim_widget_controllers_DataController,K=b.__$$__meshim_widget_utils_Strings,L=J.root.$('connection').$('message$string'),M,N=K.connection_status,O={'idle_disconnect':1}
function P(){E.autobind(L,'value',function(Q){M=Q
if(!Q){E.setDisplay('none')
G.stop().reset()
return}
if(O[Q]){G.stop().reset()
E.addClass('toast_disconnected')}
else{G.play()
E.removeClass('toast_disconnected')}
F.setText(N[Q]||u(61))
E.setDisplay('')})
E.on('click',function(Q){Q.preventDefault()
O[M]&&J.livechat.reconnect()})}
P()})()
for(var I in H)if(H.hasOwnProperty(I))E[I]=H[I]
if(E.fire)E.fire('init')
E.setStyle&&E.setStyle(z)
E.setAttributes&&E.setAttributes(B)
if(typeof E.addChildren=='function')E.addChildren(A)
else v.addChildren(E,A)
if(E!==this){E.__jx__constructor=b.__$$__meshim_widget_widgets_toast_Disconnected
E.__jx__native=!1}
return E}
w.prototype=e(b.__$$__meshim_widget_widgets_Toast.prototype)
w.prototype.__jx__native=!1
w.prototype.__jx__super=b.__$$__meshim_widget_widgets_Toast
w.__jx__jcss={"**self":{"top":"50%","left":"50%","width":"160px","marginTop":"-35px","marginLeft":"-80px","textAlign":"center","&.toast_disconnected":{"cursor":"pointer"}},".reconnecting_toast_text":{"marginBottom":"10px","fontWeight":"bold"},".reconnecting_toast_image":{"display":"inline-block","width":"110px","height":"14px","backgroundPosition":"center center","backgroundRepeat":"no-repeat"}}
w.prototype.__jx__fqname_chain=[(w.prototype.__jx__fqname_chain||"")," ","meshim_widget_widgets_toast_Disconnected"].join('')
w.prototype.__jx__fqname="meshim_widget_widgets_toast_Disconnected"
w.prototype.__jx__constructor=w
return w})()
b.__$$__meshim_widget_widgets_form_CheckBoxMultiple=(function(){var w=b.__$$__jx_ui_CheckBox,x=b.__$$__meshim_widget_widgets_form_InputMultiple
function y(z,A,B,C,D){if(!(this instanceof y))return new y(z,A,B,C,D)
this.optionConstructor=w
this.inputSuffix='checkbox'
x.call(this,z,A,B,C,D)}
y.prototype=e(x.prototype)
y.prototype.setValue=function(z){var A=g(z)?z:z.split(','),B,C
for(var D=0,E=this.options.length;D<E;D++){B=!1
for(var F=0,G=A.length;F<G;F++){if(this.options[D].getValue()==A[F]){this.options[D].setChecked(!0);(this.options[D].container||this.options[D]).setDisplay('')
this.labels[D].setDisplay('').addClass('label_checked')
B=!0
break}}
if(B){C=D}
else{(this.options[D].container||this.options[D]).removeClass('last-checked')
this.labels[D].removeClass('last-checked')
this.options[D].setChecked(!1)
if(this.readOnly){(this.options[D].container||this.options[D]).setDisplay('none')
this.labels[D].setDisplay('none').removeClass('label_checked')}}}
if(C!=a){(this.options[C].container||this.options[C]).addClass('last-checked')
this.labels[C].addClass('last-checked')}}
y.prototype.getValue=function(){var z=[]
for(var A=0,B=this.options.length;A<B;A++)if(this.options[A].getChecked())z.push(this.options[A].getValue())
return z.join(',')}
if((typeof y==='function')&&y.prototype&&!y.__jx__no_fqname){y.prototype.__jx__fqname_chain=[(y.prototype.__jx__fqname_chain||"")," ","meshim_widget_widgets_form_CheckBoxMultiple"].join('')
y.prototype.__jx__fqname="meshim_widget_widgets_form_CheckBoxMultiple"}
return y})()
b.__$$__meshim_widget_widgets_toast_File=(function(){function w(x,y,z,A,B){if(!(this instanceof w))return new w(x,y,z,A,B)
y=y||v.generateID()
var C=[b.__$$__meshim_widget_widgets_Toast,null,null,[[b.__$$__jx_ui_html_div,"message",null,[],{"id":"message"}]],{}],D=C[0].call(this,x,y,null,v.mangleIDs(y,C[3]),C[4]),E=D||this
v.set(y,E)
var F=v.get(y+'__message')
if(!w.__jx__jcss_generated){t.generate(x,w.prototype.__jx__fqname,w.__jx__jcss,null,w)
w.__jx__jcss_generated=!0}
var G=(function(){var I=b.__$$__meshim_widget_controllers_DataController,J=b.__$$__meshim_common_FileUtil,K=b.__$$__meshim_widget_Config,L=b.__$$__meshim_widget_utils_Utils,M=b.__$$__meshim_widget_utils_Strings,N=M.file_upload.error,O=J.prettySize(K.FILE_UPLOAD_MAX,{base2:!0}),P=3100,Q=L.isStyleSupported('transition')
if(p.isFF)Q=!1
var R=I.root.$('livechat').$('ui').$('chat_window').$('chat_panel').$('file_toast').$('error$string'),S,T=I.root.$('livechat').$('ui').$('popout$bool')
function U(){L.onTransitionEnd(E,E,V)
T&&q.window.on('click',V)
E.onDestruction(function(){T&&q.window.un('click',V)})
E.autobind(R,'value',function(W){if(!W){V()
return}
if(W=='size'){F.setText(N[W].replace('<size>',O))}
else{F.setText(N[W]||N['default'])}
if(S)window.clearTimeout(S)
Q&&E.removeClass('fade_out')
E.setDisplay('')
Q&&l(function(){E.addClass('fade_out')})
S=window.setTimeout(V,P)})}
function V(){E.setDisplay('none')}
U()})()
for(var H in G)if(G.hasOwnProperty(H))E[H]=G[H]
if(E.fire)E.fire('init')
E.setStyle&&E.setStyle(z)
E.setAttributes&&E.setAttributes(B)
if(typeof E.addChildren=='function')E.addChildren(A)
else v.addChildren(E,A)
if(E!==this){E.__jx__constructor=b.__$$__meshim_widget_widgets_toast_File
E.__jx__native=!1}
return E}
w.prototype=e(b.__$$__meshim_widget_widgets_Toast.prototype)
w.prototype.__jx__native=!1
w.prototype.__jx__super=b.__$$__meshim_widget_widgets_Toast
w.__jx__jcss={"**self":{"top":"50%","left":"50%","width":"160px","height":"auto","marginTop":"-32px","marginLeft":"-80px","padding":"10px","textAlign":"center","fontWeight":"bold","transition":"opacity 0.5s linear 2.5s","opacity":1,"&":"$$fileToast","&.fade_out":{"opacity":0}}}
w.prototype.__jx__fqname_chain=[(w.prototype.__jx__fqname_chain||"")," ","meshim_widget_widgets_toast_File"].join('')
w.prototype.__jx__fqname="meshim_widget_widgets_toast_File"
w.prototype.__jx__constructor=w
return w})()
b.__$$__meshim_widget_widgets_iconFont_Button=(function(){function w(x,y,z,A,B){if(!(this instanceof w))return new w(x,y,z,A,B)
y=y||v.generateID()
var C=[b.__$$__jx_ui_Button,null,null,[[b.__$$__meshim_widget_widgets_IconFont,"i",null,[],{"id":"i"}]],{}],D=C[0].call(this,x,y,null,v.mangleIDs(y,C[3]),C[4]),E=D||this
v.set(y,E)
var F=v.get(y+'__i')
if(!w.__jx__jcss_generated){t.generate(x,w.prototype.__jx__fqname,w.__jx__jcss,null,w)
w.__jx__jcss_generated=!0}
var G=(function(){var I=b.__$$__meshim_widget_utils_BindClass
I.mobile(E)
var J
E.setIcon=function(K){if(J)F.removeClass(J)
J=K
if(J)F.addClass(J)
return F.setIcon.apply(F,arguments)}})()
for(var H in G)if(G.hasOwnProperty(H))E[H]=G[H]
if(E.fire)E.fire('init')
E.setStyle&&E.setStyle(z)
E.setAttributes&&E.setAttributes(B)
if(typeof E.addChildren=='function')E.addChildren(A)
else v.addChildren(E,A)
if(E!==this){E.__jx__constructor=b.__$$__meshim_widget_widgets_iconFont_Button
E.__jx__native=!1}
return E}
w.prototype=e(b.__$$__jx_ui_Button.prototype)
w.prototype.__jx__native=!1
w.prototype.__jx__super=b.__$$__jx_ui_Button
w.__jx__jcss={"**self":{"background":"transparent","border":"none","color":"inherit",".icon_font":{"display":"inline","lineHeight":"inherit","verticalAlign":"middle","fontSize":"$$fontSizeL"}},"&.mobile":{".icon_font":{"position":"relative","fontSize":"$$fontSizeXXL","&.pencil":{"top":"4px"},"&.cross":{"top":"5px"}}}}
w.prototype.__jx__fqname_chain=[(w.prototype.__jx__fqname_chain||"")," ","meshim_widget_widgets_iconFont_Button"].join('')
w.prototype.__jx__fqname="meshim_widget_widgets_iconFont_Button"
w.prototype.__jx__constructor=w
return w})()
b.__$$__meshim_widget_widgets_Controls=(function(){function w(x,y,z,A,B){if(!(this instanceof w))return new w(x,y,z,A,B)
y=y||v.generateID()
var C=[b.__$$__jx_ui_Widget,null,null,[],{}],D=C[0].call(this,x,y,null,v.mangleIDs(y,C[3]),C[4]),E=D||this
v.set(y,E)
if(!w.__jx__jcss_generated){t.generate(x,w.prototype.__jx__fqname,w.__jx__jcss,null,w)
w.__jx__jcss_generated=!0}
var F=(function(){var H=b.__$$__meshim_widget_utils_BindClass
function I(){H.mobile(E)}
I()})()
for(var G in F)if(F.hasOwnProperty(G))E[G]=F[G]
if(E.fire)E.fire('init')
E.setStyle&&E.setStyle(z)
E.setAttributes&&E.setAttributes(B)
if(typeof E.addChildren=='function')E.addChildren(A)
else v.addChildren(E,A)
if(E!==this){E.__jx__constructor=b.__$$__meshim_widget_widgets_Controls
E.__jx__native=!1}
return E}
w.prototype=e(b.__$$__jx_ui_Widget.prototype)
w.prototype.__jx__native=!1
w.prototype.__jx__super=b.__$$__jx_ui_Widget
w.__jx__jcss={"**self":{"marginTop":"10px"},"&.mobile":{"textAlign":"center"}}
w.prototype.__jx__fqname_chain=[(w.prototype.__jx__fqname_chain||"")," ","meshim_widget_widgets_Controls"].join('')
w.prototype.__jx__fqname="meshim_widget_widgets_Controls"
w.prototype.__jx__constructor=w
return w})()
b.__$$__meshim_widget_widgets_menu_Section=(function(){function w(x,y,z,A,B){if(!(this instanceof w))return new w(x,y,z,A,B)
y=y||v.generateID()
var C=[b.__$$__jx_ui_Widget,null,null,[],{}],D=C[0].call(this,x,y,null,v.mangleIDs(y,C[3]),C[4]),E=D||this
v.set(y,E)
if(!w.__jx__jcss_generated){t.generate(x,w.prototype.__jx__fqname,w.__jx__jcss,null,w)
w.__jx__jcss_generated=!0}
var F=(function(){var H=b.__$$__meshim_widget_utils_BindClass
function I(){H.mobile(E)}
I()})()
for(var G in F)if(F.hasOwnProperty(G))E[G]=F[G]
if(E.fire)E.fire('init')
E.setStyle&&E.setStyle(z)
E.setAttributes&&E.setAttributes(B)
if(typeof E.addChildren=='function')E.addChildren(A)
else v.addChildren(E,A)
if(E!==this){E.__jx__constructor=b.__$$__meshim_widget_widgets_menu_Section
E.__jx__native=!1}
return E}
w.prototype=e(b.__$$__jx_ui_Widget.prototype)
w.prototype.__jx__native=!1
w.prototype.__jx__super=b.__$$__jx_ui_Widget
w.__jx__jcss={"**self":{"padding":"5px 0","borderTopWidth":"$$menuBorderWidth","borderTopStyle":"$$menuBorderStyle","borderTopColor":"$$menuBorderColor","*borderTop":"none","*zoom":1,"*position":"relative"},"&:first-child":{"borderTop":"none"},"&.flow":{"padding":"0","margin":"10px"},"&.mobile":{"padding":"0","borderTop":"none"},"&.border_top":{"borderTopWidth":"$$menuBorderWidth","borderTopStyle":"$$menuBorderStyle","borderTopColor":"$$menuBorderColor"}}
w.prototype.__jx__fqname_chain=[(w.prototype.__jx__fqname_chain||"")," ","meshim_widget_widgets_menu_Section"].join('')
w.prototype.__jx__fqname="meshim_widget_widgets_menu_Section"
w.prototype.__jx__constructor=w
return w})()
b.__$$__meshim_widget_widgets_ChatWindowContent=(function(){function w(x,y,z,A,B){if(!(this instanceof w))return new w(x,y,z,A,B)
y=y||v.generateID()
var C=[b.__$$__meshim_widget_widgets_AbsolutePaddingContainer,null,null,[],{}],D=C[0].call(this,x,y,null,v.mangleIDs(y,C[3]),C[4]),E=D||this
v.set(y,E)
if(!w.__jx__jcss_generated){t.generate(x,w.prototype.__jx__fqname,w.__jx__jcss,null,w)
w.__jx__jcss_generated=!0}
var F=(function(){var H=b.__$$__meshim_widget_controllers_DataController,I=b.__$$__meshim_widget_utils_BindClass,J=H.root.$('livechat').$('ui').$('mobile$bool').getValue()
function K(){I.mobile(E)
I.tablet(E)}
var L=E.setAbsPaddingBottom
E.setAbsPaddingBottom=function(){if(J)return
L.apply(E,arguments)}
K()})()
for(var G in F)if(F.hasOwnProperty(G))E[G]=F[G]
if(E.fire)E.fire('init')
E.setStyle&&E.setStyle(z)
E.setAttributes&&E.setAttributes(B)
if(typeof E.addChildren=='function')E.addChildren(A)
else v.addChildren(E,A)
if(E!==this){E.__jx__constructor=b.__$$__meshim_widget_widgets_ChatWindowContent
E.__jx__native=!1}
return E}
w.prototype=e(b.__$$__meshim_widget_widgets_AbsolutePaddingContainer.prototype)
w.prototype.__jx__native=!1
w.prototype.__jx__super=b.__$$__meshim_widget_widgets_AbsolutePaddingContainer
w.__jx__jcss={"**self":{},"&.mobile":{"margin":"0 auto","height":"auto","border":"none","maxWidth":"$$mobileMaxWidthS"},"&.tablet":{"maxWidth":"$$mobileMaxWidth"}}
w.prototype.__jx__fqname_chain=[(w.prototype.__jx__fqname_chain||"")," ","meshim_widget_widgets_ChatWindowContent"].join('')
w.prototype.__jx__fqname="meshim_widget_widgets_ChatWindowContent"
w.prototype.__jx__constructor=w
return w})()
b.__$$__meshim_widget_widgets_Menu=(function(){function w(x,y,z,A,B){if(!(this instanceof w))return new w(x,y,z,A,B)
y=y||v.generateID()
var C=[b.__$$__jx_ui_Widget,null,null,[],{}],D=C[0].call(this,x,y,null,v.mangleIDs(y,C[3]),C[4]),E=D||this
v.set(y,E)
if(!w.__jx__jcss_generated){t.generate(x,w.prototype.__jx__fqname,w.__jx__jcss,null,w)
w.__jx__jcss_generated=!0}
var F=(function(){var H=b.__$$__meshim_widget_utils_BindClass
function I(){H.mobile(E)
H.tablet(E)
H.rtl(E)}
I()})()
for(var G in F)if(F.hasOwnProperty(G))E[G]=F[G]
if(E.fire)E.fire('init')
E.setStyle&&E.setStyle(z)
E.setAttributes&&E.setAttributes(B)
if(typeof E.addChildren=='function')E.addChildren(A)
else v.addChildren(E,A)
if(E!==this){E.__jx__constructor=b.__$$__meshim_widget_widgets_Menu
E.__jx__native=!1}
return E}
w.prototype=e(b.__$$__jx_ui_Widget.prototype)
w.prototype.__jx__native=!1
w.prototype.__jx__super=b.__$$__jx_ui_Widget
w.__jx__jcss={"**self":{"position":"absolute","minWidth":"180px","maxWidth":"360px","zIndex":"100","bottom":"22px","left":"10px","right":"10px","color":"$$menuColor","background":"$$menuBg","borderWidth":"$$menuBorderWidth","borderStyle":"$$menuBorderStyle","borderColor":"$$menuBorderColor","borderRadius":"$$menuRadius","boxShadow":"$$menuShadow"},"&.rtl":{"left":"auto","right":"10px"},"&.mobile":{"left":"0","top":"$$titleBarHeight","bottom":"auto","width":"100%","maxWidth":"$$mobileMaxWidthS","&.tablet":{"maxWidth":"$$mobileMaxWidth"}},"&.mobile.rtl":{"right":0}}
w.prototype.__jx__fqname_chain=[(w.prototype.__jx__fqname_chain||"")," ","meshim_widget_widgets_Menu"].join('')
w.prototype.__jx__fqname="meshim_widget_widgets_Menu"
w.prototype.__jx__constructor=w
return w})()
b.__$$__meshim_widget_widgets_gravatar_GravatarFour=(function(){function w(x,y,z,A,B){if(!(this instanceof w))return new w(x,y,z,A,B)
y=y||v.generateID()
var C=[b.__$$__jx_ui_html_div,null,null,[[b.__$$__meshim_widget_widgets_gravatar_GravatarImage,"image4",null,[],{"id":"image4","addClass":"avatar avatar4"}],[b.__$$__meshim_widget_widgets_gravatar_GravatarImage,"image3",null,[],{"id":"image3","addClass":"avatar avatar3"}],[b.__$$__meshim_widget_widgets_gravatar_GravatarImage,"image2",null,[],{"id":"image2","addClass":"avatar avatar2"}],[b.__$$__meshim_widget_widgets_gravatar_GravatarImage,"image1",null,[],{"id":"image1","addClass":"avatar avatar1"}]],{"class":"gravatarFour"}],D=C[0].call(this,x,y,null,v.mangleIDs(y,C[3]),C[4]),E=D||this
v.set(y,E)
var F=v.get(y+'__image4'),G=v.get(y+'__image3'),H=v.get(y+'__image2'),I=v.get(y+'__image1')
if(!w.__jx__jcss_generated){t.generate(x,w.prototype.__jx__fqname,w.__jx__jcss,null,w)
w.__jx__jcss_generated=!0}
var J=(function(){E.setImages=L
E.setNodes=M
function L(N){if(!(N instanceof Array))return
I.setSrc(N[0])
H.setSrc(N[1])
G.setSrc(N[2])
F.setSrc(N[3])}
function M(N){if(!(N instanceof Array))return
I.setDataNode(N[0])
H.setDataNode(N[1])
G.setDataNode(N[2])
F.setDataNode(N[3])}})()
for(var K in J)if(J.hasOwnProperty(K))E[K]=J[K]
if(E.fire)E.fire('init')
E.setStyle&&E.setStyle(z)
E.setAttributes&&E.setAttributes(B)
if(typeof E.addChildren=='function')E.addChildren(A)
else v.addChildren(E,A)
if(E!==this){E.__jx__constructor=b.__$$__meshim_widget_widgets_gravatar_GravatarFour
E.__jx__native=!1}
return E}
w.prototype=e(b.__$$__jx_ui_html_div.prototype)
w.prototype.__jx__native=!1
w.prototype.__jx__super=b.__$$__jx_ui_html_div
w.__jx__jcss={"**self":{"position":"relative","width":"100%","height":"100%","overflow":"hidden","lineHeight":"0px",".avatar":{"position":"absolute","width":"50%","height":"50%"},".avatar1":{"top":0,"left":0,"borderTop":"0px none","borderLeft":"0px none"},".avatar2":{"top":0,"right":0,"borderTop":"0px none","borderRight":"0px none","borderLeft":"0px none"},".avatar3":{"bottom":0,"left":0,"borderTop":"0px none","borderBottom":"0px none","borderLeft":"0px none"},".avatar4":{"bottom":0,"right":0,"border":"0px none"}}}
w.prototype.__jx__fqname_chain=[(w.prototype.__jx__fqname_chain||"")," ","meshim_widget_widgets_gravatar_GravatarFour"].join('')
w.prototype.__jx__fqname="meshim_widget_widgets_gravatar_GravatarFour"
w.prototype.__jx__constructor=w
return w})()
b.__$$__jx_ui_TextArea=(function(){var w=b.__$$__jx_ui_TextField
function x(y,z,A,B,C){if(!(this instanceof x))return new x(y,z,A,B,C)
if(!C)C={}
C.tagName||(C.tagName='textarea')
w.call(this,y,z,A,B,C)}
x.prototype=e(w.prototype)
x.prototype.setCols=function(y){this.dom.cols=y
return this}
x.prototype.getCols=function(){return this.dom.cols}
x.prototype.setRows=function(y){this.dom.rows=y
return this}
x.prototype.getRows=function(){return this.dom.rows}
x.prototype.setResize=function(y){if(!('resize' in this.style))return
this.style.resize=y}
x.prototype.getInitialValue=function(){return p.engineIE<=8?this._initialValue:this.getText()}
x.prototype.setInitialValue=function(y){if(p.engineIE<=8)this._initialValue=y&&(y.toString?y.toString():y)
else this.setText(y)
return this}
if((typeof x==='function')&&x.prototype&&!x.__jx__no_fqname){x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","jx_ui_TextArea"].join('')
x.prototype.__jx__fqname="jx_ui_TextArea"}
return x})()
b.__$$__meshim_widget_widgets_chatLogRenderer_NameChange=(function(){function w(x,y,z,A,B){if(!(this instanceof w))return new w(x,y,z,A,B)
y=y||v.generateID()
var C=[b.__$$__jx_ui_html_div,null,null,[],{}],D=C[0].call(this,x,y,null,v.mangleIDs(y,C[3]),C[4]),E=D||this
v.set(y,E)
if(!w.__jx__jcss_generated){t.generate(x,w.prototype.__jx__fqname,w.__jx__jcss,null,w)
w.__jx__jcss_generated=!0}
var F=(function(){var H=b.__$$__meshim_widget_utils_Strings,I=H.chat_log['chat.changename'],J
function K(){E.setDataNode=L}
function L(N){if(J)E.autounbind(J,'value',M)
J=N
E.autobind(J,'value',M)}
function M(){var N=J.getValue()
if(!N)return
var O=N['display_name$string'],P=N['new_display_name$string'],Q=''
if(O&&P){Q=I.replace('<old_name>',O).replace('<new_name>',P)}
E.parentNode.setDisplay(Q?'':'none')
E.setText(Q)}
K()})()
for(var G in F)if(F.hasOwnProperty(G))E[G]=F[G]
if(E.fire)E.fire('init')
E.setStyle&&E.setStyle(z)
E.setAttributes&&E.setAttributes(B)
if(typeof E.addChildren=='function')E.addChildren(A)
else v.addChildren(E,A)
if(E!==this){E.__jx__constructor=b.__$$__meshim_widget_widgets_chatLogRenderer_NameChange
E.__jx__native=!1}
return E}
w.prototype=e(b.__$$__jx_ui_html_div.prototype)
w.prototype.__jx__native=!1
w.prototype.__jx__super=b.__$$__jx_ui_html_div
w.__jx__jcss={}
w.prototype.__jx__fqname_chain=[(w.prototype.__jx__fqname_chain||"")," ","meshim_widget_widgets_chatLogRenderer_NameChange"].join('')
w.prototype.__jx__fqname="meshim_widget_widgets_chatLogRenderer_NameChange"
w.prototype.__jx__constructor=w
return w})()
b.__$$__meshim_widget_widgets_gravatar_GravatarThree=(function(){function w(x,y,z,A,B){if(!(this instanceof w))return new w(x,y,z,A,B)
y=y||v.generateID()
var C=[b.__$$__jx_ui_html_div,null,null,[[b.__$$__meshim_widget_widgets_gravatar_GravatarImage,"image3",null,[],{"id":"image3","addClass":"avatar avatar3"}],[b.__$$__meshim_widget_widgets_gravatar_GravatarImage,"image2",null,[],{"id":"image2","addClass":"avatar avatar2"}],[b.__$$__meshim_widget_widgets_gravatar_GravatarImage,"image1",null,[],{"id":"image1","addClass":"avatar avatar1"}]],{"class":"gravatarThree"}],D=C[0].call(this,x,y,null,v.mangleIDs(y,C[3]),C[4]),E=D||this
v.set(y,E)
var F=v.get(y+'__image3'),G=v.get(y+'__image2'),H=v.get(y+'__image1')
if(!w.__jx__jcss_generated){t.generate(x,w.prototype.__jx__fqname,w.__jx__jcss,null,w)
w.__jx__jcss_generated=!0}
var I=(function(){E.setImages=K
E.setNodes=L
function K(M){if(!(M instanceof Array))return
H.setSrc(M[0])
G.setSrc(M[1])
F.setSrc(M[2])}
function L(M){if(!(M instanceof Array))return
H.setDataNode(M[0])
G.setDataNode(M[1])
F.setDataNode(M[2])}})()
for(var J in I)if(I.hasOwnProperty(J))E[J]=I[J]
if(E.fire)E.fire('init')
E.setStyle&&E.setStyle(z)
E.setAttributes&&E.setAttributes(B)
if(typeof E.addChildren=='function')E.addChildren(A)
else v.addChildren(E,A)
if(E!==this){E.__jx__constructor=b.__$$__meshim_widget_widgets_gravatar_GravatarThree
E.__jx__native=!1}
return E}
w.prototype=e(b.__$$__jx_ui_html_div.prototype)
w.prototype.__jx__native=!1
w.prototype.__jx__super=b.__$$__jx_ui_html_div
w.__jx__jcss={"**self":{"position":"relative","width":"100%","height":"100%","overflow":"hidden",".avatar1":{"position":"absolute","top":"0","left":"-33%","width":"100%","height":"100%","borderLeft":"0px none","borderTop":"0px none","borderBottom":"0px none"},".avatar2":{"position":"absolute","top":"0","right":"-8%","width":"50%","height":"50%","borderLeft":"0px none","borderTop":"0px none","borderRight":"0px none"},".avatar3":{"position":"absolute","bottom":"0","right":"-8%","width":"50%","height":"50%","border":"0px none"}}}
w.prototype.__jx__fqname_chain=[(w.prototype.__jx__fqname_chain||"")," ","meshim_widget_widgets_gravatar_GravatarThree"].join('')
w.prototype.__jx__fqname="meshim_widget_widgets_gravatar_GravatarThree"
w.prototype.__jx__constructor=w
return w})()
b.__$$__jx_ui_RadioButton=(function(){var w=b.__$$__jx_ui_CheckBox,x=b.__$$__jx_ui_HTMLElement
function y(z,A,B,C,D){if(!(this instanceof y))return new y(z,A,B,C,D)
if(!D)D={}
D.tagName||(D.tagName='input')
D.type||(D.type='radio')
w.call(this,z,A,B,C,D)
if(p.bugs.noBoxSizing){this.parentNode.removeChild(z instanceof x?this:this.dom)
this.dom=z.doc.createElement('<'+D.tagName+' type="'+D.type+'" name="'+(D.name||'')+'"/>')
this.dom.jx_wrapper=this
this.style=this.dom.style
this.parentNode.appendChild(z instanceof x?this:this.dom)
this.setStyle(B)
this.setAttributes(D)
this.addClass(this.__jx__fqname)}}
y.prototype=e(w.prototype)
if((typeof y==='function')&&y.prototype&&!y.__jx__no_fqname){y.prototype.__jx__fqname_chain=[(y.prototype.__jx__fqname_chain||"")," ","jx_ui_RadioButton"].join('')
y.prototype.__jx__fqname="jx_ui_RadioButton"}
return y})()
b.__$$__meshim_widget_widgets_ScrollableFrame=(function(){function w(x,y,z,A,B){if(!(this instanceof w))return new w(x,y,z,A,B)
y=y||v.generateID()
var C=[b.__$$__jx_ui_Widget,null,null,[[b.__$$__jx_ui_Widget,"inner",null,[[b.__$$__jx_ui_Widget,"inside",null,[],{"id":"inside","addClass":"scrollable_inside","container":"default"}]],{"id":"inner","addClass":"scrollable_inner"}],[b.__$$__jx_ui_Widget,null,null,[],{"addClass":"scrollable_fixed_top"}],[b.__$$__jx_ui_Widget,null,null,[],{"addClass":"scrollable_fixed_bottom"}]],{}],D=C[0].call(this,x,y,null,v.mangleIDs(y,C[3]),C[4]),E=D||this
v.set(y,E)
var F=v.get(y+'__inner'),G=v.get(y+'__inside')
if(!w.__jx__jcss_generated){t.generate(x,w.prototype.__jx__fqname,w.__jx__jcss,null,w)
w.__jx__jcss_generated=!0}
E.defaultPlacement=G
var H=(function(){var J=b.__$$__meshim_widget_controllers_DataController,K=b.__$$__meshim_widget_utils_BindClass,L=J.root.$('livechat').$('ui').$('theme_loaded$bool'),M=J.root.$$('livechat.ui.mobile$bool'),N
F.on('scroll',O)
function O(){if(N)window.clearTimeout(N)
N=window.setTimeout(P,10)}
function P(){if(N)window.clearTimeout(N)
N=null
if(!E.dom)return
E[(Q()?'addClass':'removeClass')]('scroll_top')
E[(R()?'addClass':'removeClass')]('scroll_bottom')
E[(S()?'addClass':'removeClass')]('scrollable')}
function Q(){return !F.getScrollTop()}
function R(){return F.getScrollTop()+F.getHeight()>=F.getScrollHeight()}
function S(){return F.getScrollHeight()>F.getHeight()}
function T(){E.autobind(L,'value',O)
O()
K.mobile(E)
K.popout(E)
K.windowSize(E,'sf_')
if(M.getValue()){E.addClass('mobile')}
if(u&&u.onLanguage){u.onLanguage(U)
U()
E.onDestruction(V)}
function U(){G.style.direction=u.rtl()?'rtl':'ltr'}
function V(){u.unLanguage(U)}}
E.updateScrollStyles=O
E.getScrollHeight=function(){return F.getScrollHeight()}
E.getScrollTop=function(){return F.getScrollTop()}
E.getHeight=function(){return F.getHeight()}
E.setScrollTop=function(U){return F.setScrollTop(U)}
T()})()
for(var I in H)if(H.hasOwnProperty(I))E[I]=H[I]
if(E.fire)E.fire('init')
E.setStyle&&E.setStyle(z)
E.setAttributes&&E.setAttributes(B)
if(typeof E.addChildren=='function')E.addChildren(A)
else v.addChildren(E,A)
if(E!==this){E.__jx__constructor=b.__$$__meshim_widget_widgets_ScrollableFrame
E.__jx__native=!1}
return E}
w.prototype=e(b.__$$__jx_ui_Widget.prototype)
w.prototype.__jx__native=!1
w.prototype.__jx__super=b.__$$__jx_ui_Widget
w.__jx__jcss={"**self, .scrollable_inner":{"position":"relative","width, height":"100%"},".scrollable_inner":{"overflowX":"hidden","overflowY":"auto","paddingBottom":"0 !important","direction":"ltr","&":"$$scrollableFrameInner"},".scrollable_fixed_top, .scrollable_fixed_bottom":{"position":"absolute","left, right":0,"pointerEvents":"none"},".scrollable_fixed_top":{"top":0,"&":"$$scrollableFrameTopExtra"},".scrollable_fixed_bottom":{"bottom":0,"&":"$$scrollableFrameBottomExtra"},"&.scroll_top .scrollable_fixed_top":{"display":"none"},"&.scroll_bottom .scrollable_fixed_bottom":{"display":"none"},"&.scroll .scrollable_inner":{"&":"$$scrollableFrameScrollInner"},"&.sf_small":{"padding":"$$scrollableFramePaddingSmall",".scrollable_inner":{"padding":"$$scrollableFrameInnerPaddingSmall"}},"&.sf_medium":{"padding":"$$scrollableFramePaddingMedium",".scrollable_inner":{"padding":"$$scrollableFrameInnerPaddingMedium"}},"&.sf_large":{"padding":"$$scrollableFramePaddingLarge",".scrollable_inner":{"padding":"$$scrollableFrameInnerPaddingLarge"}},"&.popout":{"@media only screen and (max-width: 300px)":{"padding":"$$scrollableFramePaddingSmall",".scrollable_inner":{"padding":"$$scrollableFrameInnerPaddingSmall"}},"@media only screen and (min-width: 300px) and (max-width: 500px)":{"padding":"$$scrollableFramePaddingMedium",".scrollable_inner":{"padding":"$$scrollableFrameInnerPaddingMedium"}},"@media only screen and (min-width: 500px)":{"padding":"$$scrollableFramePaddingLarge",".scrollable_inner":{"padding":"$$scrollableFrameInnerPaddingLarge"}}},"&.mobile":{"borderBottom":"none"},"&.popout.mobile":{".scrollable_inner":{"padding":"10px"}}}
w.prototype.__jx__fqname_chain=[(w.prototype.__jx__fqname_chain||"")," ","meshim_widget_widgets_ScrollableFrame"].join('')
w.prototype.__jx__fqname="meshim_widget_widgets_ScrollableFrame"
w.prototype.__jx__constructor=w
return w})()
b.__$$__meshim_widget_widgets_gravatar_GravatarTwo=(function(){function w(x,y,z,A,B){if(!(this instanceof w))return new w(x,y,z,A,B)
y=y||v.generateID()
var C=[b.__$$__jx_ui_html_div,null,null,[[b.__$$__meshim_widget_widgets_gravatar_GravatarImage,"image2",null,[],{"id":"image2","addClass":"avatar avatar2"}],[b.__$$__meshim_widget_widgets_gravatar_GravatarImage,"image1",null,[],{"id":"image1","addClass":"avatar avatar1"}]],{"class":"gravatarTwo"}],D=C[0].call(this,x,y,null,v.mangleIDs(y,C[3]),C[4]),E=D||this
v.set(y,E)
var F=v.get(y+'__image2'),G=v.get(y+'__image1')
if(!w.__jx__jcss_generated){t.generate(x,w.prototype.__jx__fqname,w.__jx__jcss,null,w)
w.__jx__jcss_generated=!0}
var H=(function(){E.setImages=J
E.setNodes=K
function J(L){if(!(L instanceof Array))return
G.setSrc(L[0])
F.setSrc(L[1])}
function K(L){if(!(L instanceof Array))return
G.setDataNode(L[0])
F.setDataNode(L[1])}})()
for(var I in H)if(H.hasOwnProperty(I))E[I]=H[I]
if(E.fire)E.fire('init')
E.setStyle&&E.setStyle(z)
E.setAttributes&&E.setAttributes(B)
if(typeof E.addChildren=='function')E.addChildren(A)
else v.addChildren(E,A)
if(E!==this){E.__jx__constructor=b.__$$__meshim_widget_widgets_gravatar_GravatarTwo
E.__jx__native=!1}
return E}
w.prototype=e(b.__$$__jx_ui_html_div.prototype)
w.prototype.__jx__native=!1
w.prototype.__jx__super=b.__$$__jx_ui_html_div
w.__jx__jcss={"**self":{"position":"relative","width":"100%","height":"100%","overflow":"hidden",".avatar":{"width":"100%","height":"100%"},".avatar1":{"position":"absolute","top":"0","left":"-33%","borderTop":"0px none","borderLeft":"0px none","borderBottom":"0px none"},".avatar2":{"position":"absolute","top":"0","left":"33%","border":"0px none"}}}
w.prototype.__jx__fqname_chain=[(w.prototype.__jx__fqname_chain||"")," ","meshim_widget_widgets_gravatar_GravatarTwo"].join('')
w.prototype.__jx__fqname="meshim_widget_widgets_gravatar_GravatarTwo"
w.prototype.__jx__constructor=w
return w})()
b.__$$__meshim_widget_widgets_gravatar_GravatarOne=(function(){function w(x,y,z,A,B){if(!(this instanceof w))return new w(x,y,z,A,B)
y=y||v.generateID()
var C=[b.__$$__jx_ui_html_div,null,null,[[b.__$$__meshim_widget_widgets_gravatar_GravatarImage,"image",null,[],{"id":"image","addClass":"avatar"}]],{"class":"gravatarOne"}],D=C[0].call(this,x,y,null,v.mangleIDs(y,C[3]),C[4]),E=D||this
v.set(y,E)
var F=v.get(y+'__image')
if(!w.__jx__jcss_generated){t.generate(x,w.prototype.__jx__fqname,w.__jx__jcss,null,w)
w.__jx__jcss_generated=!0}
var G=(function(){E.setImages=I
E.setNodes=J
function I(K){if(!(K instanceof Array))return
F.setSrc(K[0])}
function J(K){if(!(K instanceof Array))return
F.setDataNode(K[0])}})()
for(var H in G)if(G.hasOwnProperty(H))E[H]=G[H]
if(E.fire)E.fire('init')
E.setStyle&&E.setStyle(z)
E.setAttributes&&E.setAttributes(B)
if(typeof E.addChildren=='function')E.addChildren(A)
else v.addChildren(E,A)
if(E!==this){E.__jx__constructor=b.__$$__meshim_widget_widgets_gravatar_GravatarOne
E.__jx__native=!1}
return E}
w.prototype=e(b.__$$__jx_ui_html_div.prototype)
w.prototype.__jx__native=!1
w.prototype.__jx__super=b.__$$__jx_ui_html_div
w.__jx__jcss={"**self":{"position":"relative","width":"100%","height":"100%",".avatar":{"width":"100%","height":"100%","border":"0px none"}}}
w.prototype.__jx__fqname_chain=[(w.prototype.__jx__fqname_chain||"")," ","meshim_widget_widgets_gravatar_GravatarOne"].join('')
w.prototype.__jx__fqname="meshim_widget_widgets_gravatar_GravatarOne"
w.prototype.__jx__constructor=w
return w})()
b.__$$__meshim_widget_controllers_liveChatAPI_Concierge=(function(){var w=b.__$$__meshim_widget_controllers_DataController,x=b.__$$__meshim_widget_controllers_liveChatAPI_APIHelper,y={},z,A
y.init=function(C){z=C
A=w.root
y.setAvatar=z.generateLimitedFunction('concierge.setAvatar',1,function(F){F=F||''
B({"avatar_path$string":F})})
function D(F){F=F||''
B({"display_name$string":F})}
y.setName=D
function E(F){F=F||''
B({"title$string":F})}
y.setTitle=E}
function B(C){x.callOnRegistered(function(){x.saveAPISettings({concierge:C})
A.$$('livechat.settings.concierge').update(C)},!0)}
if((typeof y==='function')&&y.prototype&&!y.__jx__no_fqname){y.prototype.__jx__fqname_chain=[(y.prototype.__jx__fqname_chain||"")," ","meshim_widget_controllers_liveChatAPI_Concierge"].join('')
y.prototype.__jx__fqname="meshim_widget_controllers_liveChatAPI_Concierge"}
return y})()
b.__$$__meshim_widget_controllers_liveChatAPI_CookieLawAPI=(function(){var w=b.__$$__meshim_widget_controllers_DataController,x=b.__$$__meshim_widget_controllers_CookieLaw,y={},z
y.init=function(){z=w.root}
function A(){x.enableCookieLaw()}
y.comply=A
function B(){x.setDefaultImplicitConsent()}
y.setDefaultImplicitConsent=B
if((typeof y==='function')&&y.prototype&&!y.__jx__no_fqname){y.prototype.__jx__fqname_chain=[(y.prototype.__jx__fqname_chain||"")," ","meshim_widget_controllers_liveChatAPI_CookieLawAPI"].join('')
y.prototype.__jx__fqname="meshim_widget_controllers_liveChatAPI_CookieLawAPI"}
return y})()
b.__$$__jx_ui_ButtonBar=(function(){var w=b.__$$__jx_ui_Button,x=b.__$$__jx_ui_Widget,y=b.__$$__jx_ui_HTMLElement
function z(A,B,C,D,E){if(!(this instanceof z))return new z(A,B,C,D,E)
this.navStack=null
x.call(this,A,B,C,D,E)
this.addClass('button_bar')
E.initialValue&&this.setValue(E.initialValue)
this.on('click',function(F){var G=F&&F.target&&F.target.jx_wrapper
if(!G||G===this)return
while(G.parentNode&&(G.parentNode!=this))G=G.parentNode
if(this.getDisabled()||G.getDisabled())return
var H=G.getValue()
if(H===''||H==null)return
this.setValue(H)
this.fire('change')})
this.onDestruction(function(){this.navStack=null})}
;
z.prototype=e(x.prototype)
z.prototype.appendChild=function(A){var B=this.children.length
if(g(A)){if(this.attributes&&!m(this.attributes['noMangle']))A[0]=w}
y.prototype.appendChild.call(this,A)
if(g(A)){this.children[B].addClass('option')
j(this.tabIndex)&&this.children[B].setTabIndex(this.tabIndex+B)}}
z.prototype.setNoMangle=function(A){this.attributes.noMangle=m(A)}
z.prototype.setValue=function(A){for(var B=0,C=this.children.length;B<C;B++){if(this.children[B].getValue()==A){this.dom.value=this.children[B].getValue()
this.children[B].addClass('active')}
else{this.children[B].removeClass('active')}}}
z.prototype.getInitialValue=function(){return this._initialValue}
z.prototype.setInitialValue=function(A){this._initialValue=A}
z.prototype.reset=function(){this.setValue(this.getInitialValue())}
z.prototype.setLabel=function(A,B){for(var C=0,D=this.children.length;C<D;C++)if(this.children[C].getValue()==A)this.children[C].setText(B)}
z.prototype.getTabIndex=function(){return this.tabIndex}
z.prototype.setTabIndex=function(A){this.tabIndex=parseInt(A,10)||0
for(var B=0,C=this.children.length;B<C;B++)this.children[B].setTabIndex(this.tabIndex+B)
return this}
if((typeof z==='function')&&z.prototype&&!z.__jx__no_fqname){z.prototype.__jx__fqname_chain=[(z.prototype.__jx__fqname_chain||"")," ","jx_ui_ButtonBar"].join('')
z.prototype.__jx__fqname="jx_ui_ButtonBar"}
return z})()
b.__$$__meshim_widget_controllers_liveChatAPI_Theme=(function(){var w=b.__$$__meshim_widget_controllers_DataController,x=b.__$$__meshim_widget_controllers_liveChatAPI_APIHelper,y={},z,A
y.init=function(B){z=B
A=w.root
y.setTheme=z.generateLimitedFunction('theme.setTheme',2,function(F){x.callOnRegistered(function(){x.saveAPISettings({theme:{name$string:F.toString()}})
A.$$('livechat.settings.theme.name$string').update(F.toString())},!0)})
function C(F,G){if(!F||!x.isHexColor(F))throw 'Invalid color. Must be in hexadecimal format ("#AABBCC")'
if(!G||!w.livechat.getLimit())G='primary'
var H={}
H[G]=F
D(H)}
y.setColor=C
function D(F){if(!F||typeof F!='object')throw 'Must pass an object containing the desired colors in hexadecimal format (#AABBCC)'
x.callOnRegistered(function(){var G,H={}
for(var I in F)if(F.hasOwnProperty(I)){G=I+'$string'
if(G=='badge$string'){G='banner$string'}
if(F[I]&&x.isHexColor(F[I])){H[G]=F[I]}}
x.saveAPISettings({theme:{colors:H}})
A.$$('livechat.settings.theme.colors').update(H)},!0)}
y.setColors=z.generateLimitedFunction('theme.setColors',1,D)
function E(){x.callOnRegistered(function(){A.$$('livechat.ui').update({'theme_reload$bool':!0})})}
y.reload=E}
if((typeof y==='function')&&y.prototype&&!y.__jx__no_fqname){y.prototype.__jx__fqname_chain=[(y.prototype.__jx__fqname_chain||"")," ","meshim_widget_controllers_liveChatAPI_Theme"].join('')
y.prototype.__jx__fqname="meshim_widget_controllers_liveChatAPI_Theme"}
return y})()
b.__$$__meshim_widget_components_chatWindow_preChatOfflineForm_operatingHours_Group=(function(){function w(x,y,z,A,B){if(!(this instanceof w))return new w(x,y,z,A,B)
y=y||v.generateID()
var C=[b.__$$__jx_ui_Widget,null,null,[[b.__$$__meshim_widget_widgets_Header,"days_el",null,[],{"id":"days_el","addClass":"short"}],[b.__$$__meshim_widget_widgets_Body,"periods_el",null,[],{"id":"periods_el"}]],{}],D=C[0].call(this,x,y,null,v.mangleIDs(y,C[3]),C[4]),E=D||this
v.set(y,E)
var F=v.get(y+'__days_el'),G=v.get(y+'__periods_el')
if(!w.__jx__jcss_generated){t.generate(x,w.prototype.__jx__fqname,w.__jx__jcss,null,w)
w.__jx__jcss_generated=!0}
var H=(function(){var J=b.__$$__meshim_widget_utils_Utils,K=b.__$$__meshim_widget_utils_Strings,L=b.__$$__meshim_widget_components_chatWindow_preChatOfflineForm_operatingHours_Period,M=b.__$$__jx_ui_Label,N=b.__$$__jx_ui_Widget,O=7,P=K.datetime.days,Q=0,R=24*60
E.setData=function(U){if(!U||!U.days||!U.periods)return
F.empty()
var V=U.days
if(V.length==O){F.setText(K.datetime.everyday)}
else{V=S(T(V))
for(var W=0,X=V.length;W<X;W++){new M(F,null,null,null,{text:V[W]})}}
G.empty()
var Y=U.periods,Z
if(!U.enabled$bool){G.setText(K.pre_chat_offline_form.operating_hours.closed)}
else{for(var $$ in Y)if(Y.hasOwnProperty($$)){if(Y[$$].start$int===Q&&Y[$$].end$int===R){Z=new N(G)
Z.setText(K.datetime.all_day)}
else{Z=new L(G)
Z.setStart(J.formatMinutesAsHours(Y[$$].start$int))
Z.setEnd(J.formatMinutesAsHours(Y[$$].end$int))}}}}
function S(U){for(var V=0,W=U.length;V<W;V++){if(!j(U[V]))continue
U[V]=P[U[V]]}
return U}
function T(U){var V=[],W,X,Y
for(var Z=0,$$=U.length;Z<$$;Z++){if(typeof U[Z]!='number')return U
W=U[Z]
X=U[Z-1]
Y=U[Z+1]
if(Z>U[Z])W+=O
if(Z-1>U[Z-1])X+=O
if(Z+1>U[Z+1])Y+=O
if(Z&&(X==W-1)){if((Z==$$-1)||(Y!=W+1)){V.push(' — ',U[Z])}
else{continue}}
else{Z&&V.push(', ')
V.push(U[Z])}}
return V}})()
for(var I in H)if(H.hasOwnProperty(I))E[I]=H[I]
if(E.fire)E.fire('init')
E.setStyle&&E.setStyle(z)
E.setAttributes&&E.setAttributes(B)
if(typeof E.addChildren=='function')E.addChildren(A)
else v.addChildren(E,A)
if(E!==this){E.__jx__constructor=b.__$$__meshim_widget_components_chatWindow_preChatOfflineForm_operatingHours_Group
E.__jx__native=!1}
return E}
w.prototype=e(b.__$$__jx_ui_Widget.prototype)
w.prototype.__jx__native=!1
w.prototype.__jx__super=b.__$$__jx_ui_Widget
w.__jx__jcss={}
w.prototype.__jx__fqname_chain=[(w.prototype.__jx__fqname_chain||"")," ","meshim_widget_components_chatWindow_preChatOfflineForm_operatingHours_Group"].join('')
w.prototype.__jx__fqname="meshim_widget_components_chatWindow_preChatOfflineForm_operatingHours_Group"
w.prototype.__jx__constructor=w
return w})()
b.__$$__meshim_widget_controllers_ConnectionController=(function(){var w=b.__$$__meshim_widget_Config,x=b.__$$__meshim_widget_controllers_CookieLaw,y=b.__$$__meshim_widget_controllers_DataController,z=b.__$$__meshim_widget_controllers_StorageController,A=b.__$$__meshim_widget_utils_Utils,B=b.__$$__jx_data_DataNode,C=b.__$$__jx_io_Socket,D=b.__$$__meshim_config_geo_WidgetMediatorsAccessDefinition,E=b.__$$__meshim_common_GeoAccessFactory,F={FLUSH_DELAY_MS:0,RECONNECT_DELAY_MS:10000},G=2000,H='.zopim.com',I=new E(D,'{"CLUSTERS":{"US":["us08","us10","us12","us14","us16","us18","us20","us22","us24","us26","us28"],"DE":["de04","de06","de08","de10","de12","ie02","ie04"],"SG":["sg06","sg08","sg10","sg12"],"JP":["jp02","jp04"],"AU":["au02"],"BR":["br02","br04","br06"]},"FALLBACKS":{"US":["DE"],"DE":["US"],"SG":["US"],"JP":["US"],"AU":["SG","US"],"BR":["US"]},"NEAR_MAP":{"AL":"DE","AD":"DE","AM":"DE","AT":"DE","BY":"DE","BE":"DE","BA":"DE","BG":"DE","CH":"DE","CY":"DE","CZ":"DE","DE":"DE","DK":"DE","EE":"DE","ES":"DE","EU":"DE","FO":"DE","FI":"DE","FR":"DE","GB":"DE","GE":"DE","GI":"DE","GR":"DE","HU":"DE","HR":"DE","IE":"DE","IM":"DE","IS":"DE","IT":"DE","LT":"DE","LU":"DE","LV":"DE","MC":"DE","MK":"DE","MT":"DE","NO":"DE","NL":"DE","PO":"DE","PT":"DE","RO":"DE","SE":"DE","SI":"DE","SK":"DE","SM":"DE","TR":"DE","UA":"DE","VA":"DE","ZA":"DE","AP":"SG","BD":"SG","BN":"SG","CN":"SG","ID":"SG","IN":"SG","LA":"SG","KH":"SG","LK":"SG","MM":"SG","MY":"SG","SG":"SG","PK":"SG","TH":"SG","VN":"SG","AU":"AU","NZ":"AU","HK":"JP","KR":"JP","JP":"JP","PH":"JP","RU":"JP","TW":"JP","AR":"BR","BO":"BR","BR":"BR","CL":"BR","PE":"BR","PY":"BR","UY":"BR","DEFAULT":"US"}}'),J=[],K='',L=!1,M=[],N,O,P,Q,R,S,T
function U(){N=y.root
O=N.$$('connection')
Q=N.$$('livechat.ui.mockup$bool').getValue()
if(Q){O.$('status$string').update('reattached')
return}
N.$('livechat').$('profile').bindValue(function($n){if(!$n)return
if(x.isCookieDenied())return
if(w.IS_POPOUT)return
$n.mid$string&&z.setIdentity($n.mid$string)})
O.$('status$string').bindValue(function($n){L=($n=='reattached')
L&&$j()
if($n=='idle_disconnect')P&&P.close()
$e()})
O.$('socket_status$string').bindValue($e)
R=N.$$('tmp.api_settings')
R.bindValue(function(){S=R.getValue()})
N.bindWrite($j)
Y()
N.$$('connection.reconnect$bool').bindValue(W)}
function V(){P&&P.close()
P=null
Y()}
function W($n){if($n)V()}
function X($n){var $o=$n.split(':'),$p=$o[0],$q=$o[1],$r=new C($p+H+($q?':'+$q:''),'W',null,F)
$r.on('open',function(){$$($n,$r)})
return $r}
function Y(){try {T=I.getGeoAccess()}catch($n){window.console&&window.console.log('Unable to compute host list')
return}
Z(G)}
function Z($n){if(P)return
var $o=T.getNextHost()
if(!$o)return
var $p=X($o)
J.push($p)
if(!T.hasNext())return
var $q=setTimeout($r,$n)
$p.on('close',$r)
function $r(){clearTimeout($q)
$p.un('close',$r)
Z($n)}}
function $$($n,$o){O.update({'socket_status$string':null})
K=$n
if(Q)return
if(P){$o.close()
return}
P=$o
P.on('break',$a)
P.on('message',$_)
P.on('reopen',$c)
P.on('resume',$b)
$d()}
function $_($n){if(!$n)return
var $o=N
if('update' in $n){if(/^livechat.settings/.test($n.path)){var $p=$n.path.split('.')
$p.splice(0,2)
$p=$p.join('.')
A.fullyExtend($n.update,S);($p?$k.descend($p):$k).update($n.update)}
$n.path&&($o=$o.descend($n.path))
$o.update($n.update)}}
function $a(){O.update({'socket_status$string':'break'})}
function $b(){O.update({'socket_status$string':'resume'})}
function $c(){O.update({'socket_status$string':'reconnect'})
L=!1
$d()}
function $d(){if(!P)Y()
var $n=z.getIdentity(),$o=x.isCookieDenied()
if(!w.ACCOUNT_KEY)return
var $p={"__type":"register","accountKey":w.ACCOUNT_KEY,"mID":$n,"ua":window.navigator.userAgent,"cookie_law":$o}
if(N.$$('livechat.ui.popout$bool').getValue()){$p.popout=!0}
else{$p.title=document.title
$p.url=window.location.href
$p.ref=window.document.referrer}
P.send($p)}
function $e(){var $n=O.getValue('status$string'),$o=O.getValue('socket_status$string')
window.clearTimeout($f.timer)
if($n=='error'){$f.timer=window.setTimeout($f,5*1000)
return}
if($o=='break'){if($n=='idle_disconnect'){O.update({message$string:'idle_disconnect'})}
else{O.update({message$string:'reconnecting'})
$f.timer=window.setTimeout($f,60*1000)}}
else if($o===null&&$n=='registered'){O.update({message$string:'resuming'})}
else if(($o===null||$o=='resume')&&$n=='connected'){O.update({message$string:'disconnected'})}
else if(k($n)&&k($o)){O.update({message$string:'fast_init'})}
else{O.update({message$string:null})}}
function $f(){O.update({message$string:'disconnected'})}
function $g(){var $n=P
if(!$n)return {status:'not connected'}
return {connect_attempts:$n.connect_attempts,connections:$n.connections,disconnects:$n.disconnects,timeout_server:$n.timeout_server,timeout_response_soft:$n.timeout_response_soft,timeout_response_hard:$n.timeout_response_hard,sent_bytes:$n.sent_bytes,recv_bytes:$n.recv_bytes,sent_messages:$n.sent_messages,recv_messages:$n.recv_messages,sent_frames:$n.sent_frames,recv_frames:$n.recv_frames,lost_frames:$n.lost_frames,ooo_frames:$n.ooo_frames,bytes_at_connect:$n.bytes_at_connect,rtt:$n.rtt,clock_skew:$n.clock_skew,reconnect_delay:$n.reconnect_delay,quality:$n.quality,host:$n.host,status:$n.status,zone:window.__$__GEO,last_frame_time:$n.last_frame_time,local_time:+new Date()}}
function $h(){return K+H}
function $i(){return +new Date()-(P?P.clock_skew:0)}
function $j($n){$n&&M.push($n)
if(P&&L){while(M.length){P.send(M.shift())}}}
var $k=new B('server_settings')
function $l(){return $k.getValue()}
var $m={init:U,reconnect:V,getConnectionStats:$g,getHost:$h,getServerTime:$i,getServerSettings:$l}
if((typeof $m==='function')&&$m.prototype&&!$m.__jx__no_fqname){$m.prototype.__jx__fqname_chain=[($m.prototype.__jx__fqname_chain||"")," ","meshim_widget_controllers_ConnectionController"].join('')
$m.prototype.__jx__fqname="meshim_widget_controllers_ConnectionController"}
return $m})()
b.__$$__meshim_widget_widgets_Button=(function(){var w=b.__$$__jx_ui_Button,x=w,y=b.__$$__jx_ui_Widget,z=b.__$$__meshim_widget_controllers_DataController,A=b.__$$__meshim_widget_utils_BindClass
w=function(C,D,E,F,G){if(!(this instanceof w))return new w(C,D,E,F,G)
if(!w.__jx__jcss_generated){t.generate(this,w.prototype.__jx__fqname,w.__jx__jcss,null,w)
w.__jx__jcss_generated=!0}
if(!G)G={}
G.type||(G.type='button')
x.call(this,C,D,E,F,G)
A.mobile(this)
A.rtl(this)
var H=this
if(F&&F.length==1&&(typeof F[0]=='string'||F[0].bind)){if(u&&u.onLanguage){u.onLanguage(I)
this.onDestruction(function(){u.unLanguage(I)})}
this.autobind(z.root.$('livechat').$('ui').$('theme_loaded$bool'),'value',function(J){if(J)H.fixOverflowTitle()})}
function I(){H.fixOverflowTitle()}}
w.__jx__jcss={"**self":{"appearance":"none","width":"48%","overflow":"hidden","textOverflow":"ellipsis","whiteSpace":"nowrap","color":"$$buttonColor","background":"$$buttonBg","paddingTop, paddingBottom":"$$buttonPadding","paddingLeft, paddingRight":"$$buttonPaddingHorizontal","borderWidth":"$$buttonBorderWidth","borderStyle":"$$buttonBorderStyle","borderColor":"$$buttonBorderColor","borderRadius":"$$buttonRadius","boxShadow":"$$buttonShadow","fontWeight":"$$buttonFontWeight","&:hover, &:focus":{"color":"$$buttonHoverColor","background":"$$buttonHoverBg","borderColor":"$$buttonHoverBorderColor","boxShadow":"$$buttonHoverShadow"},"&:active":{"color":"$$buttonActiveColor","background":"$$buttonActiveBg","borderColor":"$$buttonActiveBorderColor","boxShadow":"$$buttonActiveShadow"}},"&.secondary":{"margin":"0 0 0 4%","color":"$$buttonSecColor","background":"$$buttonSecBg","borderColor":"$$buttonSecBorderColor","boxShadow":"$$buttonSecShadow","&:hover, &:focus":{"color":"$$buttonSecHoverColor","background":"$$buttonSecHoverBg","borderColor":"$$buttonSecHoverBorderColor","boxShadow":"$$buttonSecHoverShadow"},"&:active":{"color":"$$buttonSecActiveColor","background":"$$buttonSecActiveBg","borderColor":"$$buttonSecActiveBorderColor","boxShadow":"$$buttonSecActiveShadow"}},"&.rtl.secondary":{"margin":"0 4% 0 0","*margin":"0 0 0 4%"},"&.fit":{"width":"auto","paddingLeft, paddingRight":"$$buttonPadding"},"&.wide":{"width":"100%"},"&.short":{"paddingTop, paddingBottom":"$$buttonShortPadding"},"&.short.mobile":{"paddingTop, paddingBottom":"$$buttonPadding"},"&.short.mobile.short_mobile":{"paddingTop, paddingBottom":"$$buttonShortPadding"}}
w.prototype=e(x.prototype)
var B=['fontFamily','fontSize','fontWeight','fontStyle']
w.prototype.fixOverflowTitle=function(){if(u.language=='en'){this.setTitle('')
return}
if(!w.dummy){w.dummy=new y(this.doc.body,null,null,null,{position:'absolute',visibility:'hidden'})}
var C=this.getText(),D=this.getComputedStyle()
for(var E=0,F=B.length;E<F;E++){w.dummy.style[B[E]]=D[B[E]]}
w.dummy.setText(C)
var G=w.dummy.getWidth(),H=parseInt(D.width,10)||0-(parseInt(D.paddingLeft,10)||0)-(parseInt(D.paddingRight,10)||0)-(parseInt(D.borderLeftWidth,10)||0)-(parseInt(D.borderRightWidth,10)||0)
this.setTitle(G>0&&H>0&&G>H?C:'')}
w.prototype.__jx__super=x
if((typeof w==='function')&&w.prototype&&!w.__jx__no_fqname){w.prototype.__jx__fqname_chain=[(w.prototype.__jx__fqname_chain||"")," ","meshim_widget_widgets_Button"].join('')
w.prototype.__jx__fqname="meshim_widget_widgets_Button"}
return w})()
b.__$$__meshim_widget_widgets_zopimBranding_ZopimBrandingLink=(function(){var w=b.__$$__meshim_widget_Config,x=b.__$$__meshim_widget_controllers_DataController,y=b.__$$__meshim_widget_widgets_ZopimBranding,z=b.__$$__meshim_widget_utils_Strings,A=b.__$$__meshim_common_QueryString
function B(C,D,E,F,G){if(!(this instanceof B))return new B(C,D,E,F,G)
if(!B.__jx__jcss_generated){t.generate(this,B.prototype.__jx__fqname,B.__jx__jcss,null,B)
B.__jx__jcss_generated=!0}
if(!G)G={}
G.tagName||(G.tagName='a')
G.target||(G.target='_blank')
G.title||(G.title=z.branding.title)
G.href||(G.href=w.BRANDING_URL)
y.call(this,C,D,E,null,G)
this.setHTML('&#xe005;')
var H=x.root.$('livechat').$('account').$('key$string'),I=x.root.$$('livechat.ui.mobile$bool'),J=this
this.autobind(H,'value',function(L){J.key=L
J.updateHref()})
if(u&&u.onLanguage){u.onLanguage(K)
K()}
function K(){J.lang=u.language
J.updateHref()}
if(I.getValue()){J.addClass('mobile')
J.on('click',function(L){L.preventDefault()
window.open(J.getAttribute('href'))})}}
B.__jx__jcss={"**self":{"textDecoration":"none","letterSpacing":0,"fontSize":"11px","lineHeight":"16px","cursor":"pointer","color":"$$brandingLinkColor","&.branding_mobile":{"display":"none"}},"&.mobile":{"display":"none","position":"relative","fontSize":"12px","padding":"5px","textAlign":"center","margin":"10px 0","&.branding_mobile":{"display":"block"}}}
B.prototype=e(y.prototype)
B.prototype.__jx__super=y
B.prototype.updateHref=function(){var C={'utm_campaign':'Iref','utm_source':x.root.$('livechat').$('ui').$('popout$bool').getValue()?A().get('hostname'):window.location.hostname,'utm_medium':'widget','utm_term':'new-widget','utm_content':this.key,'iref':this.key,'lang':this.lang},D=[]
for(var E in C)if(C.hasOwnProperty(E)){if(C[E]){D.push([E,'=',window.encodeURIComponent(C[E])].join(''))}}
D=D.join('&')
this.setHref([w.BRANDING_URL,'?',D].join(''))}
B.prototype.setAddClass=function(){var C=y.prototype.setAddClass.apply(this,arguments)
if(this.hasClass('branding_mobile')&&p.bugs.noBoxSizing){this.setDisplay('none')}
return C}
if((typeof B==='function')&&B.prototype&&!B.__jx__no_fqname){B.prototype.__jx__fqname_chain=[(B.prototype.__jx__fqname_chain||"")," ","meshim_widget_widgets_zopimBranding_ZopimBrandingLink"].join('')
B.prototype.__jx__fqname="meshim_widget_widgets_zopimBranding_ZopimBrandingLink"}
return B})()
b.__$$__jx_ui_PrettySelect=(function(){var w=b.__$$__jx_ui_Select,x=b.__$$__jx_ui_Widget
function y(A,B,C,D,E){if(!(this instanceof y))return new y(A,B,C,D,E)
if(!E)E={}
E.tagName=null
E.position='relative'
if(p.bugs.noBoxSizing){w.call(this,A,B,C,D,E)
this.addClass('select_ie6')
return}
this.container=new x(A,null,null,null,E)
this.container.addClass('select_container')
this.container.removeAttribute('tabindex')
var F=this
this.container.destroy=function(){F.destroy()}
this.container.empty=function(){F.empty()}
this.button=new x(this.container,null,null,null,{})
this.button.addClass('select_button')
this.placeholder=new x(this.container,null,null,null,{})
this.placeholder.addClass('select_placeholder')
E.tagName='select'
E.opacity='0'
E.position='absolute'
E.width='100%'
E.height='100%'
E.top='0'
E.left='0'
E.margin=E.marginLeft=E.marginRight=E.marginTop=E.marginBottom='0'
if(p.engineIE<9)E.filter='alpha(opacity=0)'
w.call(this,this.container,B,C,D,E)
if(p.isIE)l(function(){F.dom&&F.updatePlaceholder()})
else this.updatePlaceholder()
this.on('change',function(){this.updatePlaceholder()})
this.on('keyup',function(){this.updatePlaceholder()})
this.on('focus',function(){this.container.addClass('focus')})
this.on('blur',function(){this.container.removeClass('focus')})
this._updatePlaceholder=function(){F.updatePlaceholder()}
u&&u.onLanguage&&u.onLanguage(this._updatePlaceholder)}
y.prototype=e(w.prototype)
y.prototype.appendChild=function(A){var B=!this.getOptions().length
w.prototype.appendChild.call(this,A)
if(B&&this.getOptions().length){this.setSelectedIndex(0)
var C=this
l(function(){C.dom&&C.updatePlaceholder()})}}
y.prototype.getPrefix=function(){return this.prefix}
y.prototype.setPrefix=function(A){this.prefix=A
return this}
var z=' '
y.prototype.getPrefixSeparator=function(){return this.prefixSeparator}
y.prototype.setPrefixSeparator=function(A){this.prefixSeparator=A
return this}
y.prototype.updatePlaceholder=function(){if(!this.container||!this.dom)return this
var A=this.getSelectedIndex()
if(A<0&&this.prompt){this.placeholder.setText(this.prompt)
return this}
var B=this.getOptions()[A],C=''
if(this.prefix){C+=this.prefix+((this.prefixSeparator||this.prefixSeparator==='')?this.prefixSeparator:z)}
if(B){C+=(typeof B.getPlaceholder=='function'&&B.getPlaceholder())||(typeof B.getLabel=='function'&&B.getLabel())||B.getText()}
this.placeholder.setText(C)
return this}
y.prototype.getPrompt=function(){return this.prompt}
y.prototype.setPrompt=function(A){this.prompt=A
this.setSelectedIndex(-1)
return this}
y.prototype.setValue=function(A){w.prototype.setValue.call(this,A)
this.updatePlaceholder()
return this}
y.prototype.setSelectedIndex=function(A){w.prototype.setSelectedIndex.call(this,A)
this.updatePlaceholder()
return this}
y.prototype.show=function(){this.container?this.container.show():w.prototype.show.call(this)}
y.prototype.hide=function(){this.container?this.container.hide():w.prototype.hide.call(this)}
y.prototype.setDisabled=function(A){this.container&&(m(A)?this.container.addClass('disabled'):this.container.removeClass('disabled'))
return w.prototype.setDisabled.call(this,A)}
y.prototype.createLabel=function(A){this.container&&(this.parentNode=this.container.parentNode)
w.prototype.createLabel.call(this,A)
this.container&&(this.parentNode=this.container)}
y.prototype.createErrorMessage=function(A){this.container&&(this.parentNode=this.container.parentNode)
w.prototype.createErrorMessage.call(this,A)
this.container&&(this.parentNode=this.container)}
y.prototype.destroy=function(){u&&u.unLanguage&&u.unLanguage(this._updatePlaceholder)
w.prototype.destroy.call(this)
if(this.container){w.prototype.empty.call(this.container)
this.container.empty=null
w.prototype.destroy.call(this.container)
this.container=this.button=this.placeholder=null}}
y.prototype.empty=function(){w.prototype.empty.call(this)
this.updatePlaceholder()}
y.prototype.reset=function(){if(!this.container)return w.prototype.reset.call(this)
var A=this.getOptions()
for(var B=0,C=A.length;B<C;B++){if(A[B].getSelected()){this.setSelectedIndex(B)
this.updatePlaceholder()
return this}}
this.setSelectedIndex(-1)
this.updatePlaceholder()
return this}
if((typeof y==='function')&&y.prototype&&!y.__jx__no_fqname){y.prototype.__jx__fqname_chain=[(y.prototype.__jx__fqname_chain||"")," ","jx_ui_PrettySelect"].join('')
y.prototype.__jx__fqname="jx_ui_PrettySelect"}
return y})()
b.__$$__meshim_widget_widgets_chatLogRenderer_GenericSystemMsg=(function(){function w(x,y,z,A,B){if(!(this instanceof w))return new w(x,y,z,A,B)
y=y||v.generateID()
var C=[b.__$$__jx_ui_Widget,null,null,[],{}],D=C[0].call(this,x,y,null,v.mangleIDs(y,C[3]),C[4]),E=D||this
v.set(y,E)
if(!w.__jx__jcss_generated){t.generate(x,w.prototype.__jx__fqname,w.__jx__jcss,null,w)
w.__jx__jcss_generated=!0}
var F=(function(){var H=b.__$$__meshim_widget_utils_Strings,I
E.setDataNode=function(L){if(L==I)return
if(I)E.autounbind(I,'value',J)
I=L
if(I)E.autobind(I,'value',J)}
function J(L){if(!L)return
if('msg$string' in L){var M=L.msg$string,N=M.match(/There are currently ([0-9]+) visitor/)
if(N){M=H.system_msg.queue.replace('<number>',N[1])}
E.setText(M||'')}}
function K(){}
K()})()
for(var G in F)if(F.hasOwnProperty(G))E[G]=F[G]
if(E.fire)E.fire('init')
E.setStyle&&E.setStyle(z)
E.setAttributes&&E.setAttributes(B)
if(typeof E.addChildren=='function')E.addChildren(A)
else v.addChildren(E,A)
if(E!==this){E.__jx__constructor=b.__$$__meshim_widget_widgets_chatLogRenderer_GenericSystemMsg
E.__jx__native=!1}
return E}
w.prototype=e(b.__$$__jx_ui_Widget.prototype)
w.prototype.__jx__native=!1
w.prototype.__jx__super=b.__$$__jx_ui_Widget
w.__jx__jcss={}
w.prototype.__jx__fqname_chain=[(w.prototype.__jx__fqname_chain||"")," ","meshim_widget_widgets_chatLogRenderer_GenericSystemMsg"].join('')
w.prototype.__jx__fqname="meshim_widget_widgets_chatLogRenderer_GenericSystemMsg"
w.prototype.__jx__constructor=w
return w})()
b.__$$__meshim_widget_widgets_input_InvalidIcon=(function(){function w(x,y,z,A,B){if(!(this instanceof w))return new w(x,y,z,A,B)
y=y||v.generateID()
var C=[b.__$$__meshim_widget_widgets_IconFont,null,null,[],{"icon":"warning_sign"}],D=C[0].call(this,x,y,null,v.mangleIDs(y,C[3]),C[4]),E=D||this
v.set(y,E)
if(!w.__jx__jcss_generated){t.generate(x,w.prototype.__jx__fqname,w.__jx__jcss,null,w)
w.__jx__jcss_generated=!0}
var F=(function(){var H=b.__$$__meshim_widget_utils_BindClass
H.rtl(E)})()
for(var G in F)if(F.hasOwnProperty(G))E[G]=F[G]
if(E.fire)E.fire('init')
E.setStyle&&E.setStyle(z)
E.setAttributes&&E.setAttributes(B)
if(typeof E.addChildren=='function')E.addChildren(A)
else v.addChildren(E,A)
if(E!==this){E.__jx__constructor=b.__$$__meshim_widget_widgets_input_InvalidIcon
E.__jx__native=!1}
return E}
w.prototype=e(b.__$$__meshim_widget_widgets_IconFont.prototype)
w.prototype.__jx__native=!1
w.prototype.__jx__super=b.__$$__meshim_widget_widgets_IconFont
w.__jx__jcss={"**self":{"position":"absolute","top":"12px","right":"10px","color":"red","fontSize":"$$fontSizeXL"},"&.rtl":{"right":"auto","left":"10px"}}
w.prototype.__jx__fqname_chain=[(w.prototype.__jx__fqname_chain||"")," ","meshim_widget_widgets_input_InvalidIcon"].join('')
w.prototype.__jx__fqname="meshim_widget_widgets_input_InvalidIcon"
w.prototype.__jx__constructor=w
return w})()
b.__$$__meshim_widget_components_chatButton_Button=(function(){function w(x,y,z,A,B){if(!(this instanceof w))return new w(x,y,z,A,B)
y=y||v.generateID()
var C=[b.__$$__jx_ui_Widget,null,null,[[b.__$$__meshim_widget_widgets_Favicon,null,null,[],{"addClass":"favicon"}],[b.__$$__jx_ui_Widget,null,null,[[b.__$$__jx_ui_Widget,null,null,[[b.__$$__jx_ui_Label,"status_text_wrapper",null,[[b.__$$__jx_ui_Label,"status_text",null,[],{"id":"status_text"}],[b.__$$__jx_ui_Label,null,null,[],{"text":" - "}]],{"addClass":"status","id":"status_text_wrapper"}],[b.__$$__jx_ui_Label,"greeting",null,[],{"id":"greeting","addClass":"greeting"}]],{"addClass":"blinds blinds_top"}],[b.__$$__jx_ui_Widget,null,null,[[b.__$$__jx_ui_Label,"unread",null,[],{"id":"unread","addClass":"unread","text":"XX new messages"}]],{"addClass":"blinds blinds_bottom"}]],{"addClass":"button_text"}],[b.__$$__meshim_widget_widgets_BorderOverlay,null,null,[],{}]],{"visibility":"hidden"}],D=C[0].call(this,x,y,null,v.mangleIDs(y,C[3]),C[4]),E=D||this
v.set(y,E)
var F=v.get(y+'__status_text_wrapper'),G=v.get(y+'__status_text'),H=v.get(y+'__greeting'),I=v.get(y+'__unread')
if(!w.__jx__jcss_generated){t.generate(x,w.prototype.__jx__fqname,w.__jx__jcss,null,w)
w.__jx__jcss_generated=!0}
var J=(function(){var L=b.__$$__meshim_widget_controllers_DataController,M=b.__$$__meshim_widget_utils_BindClass,N=b.__$$__meshim_widget_utils_Strings,O=L.root.$('livechat'),P=O.$('ui'),Q=P.$('chat_button'),R=Q.$('display$bool'),S,T=Q.$('unread_count$int'),U=0,V=O.$('account').$('status$string'),W,X=O.$('settings').$('theme').$('chat_button').$('display_status$bool'),Y=-1,Z=O.$('settings').$('greetings'),$$=Z.$('online$string'),$_,$a=Z.$('offline$string'),$b,$c=O.$('settings').$('cookie_law').$('enabled$bool'),$d,$e=O.$('profile').$('allow_cookies$bool'),$f,$g=Q.$('button_width$int'),$h=Q.$('button_height$int'),$i=P.$('theme_loaded$bool'),$j=P.$('mobile$bool').getValue(),$k,$l
function $m(){M.rtl(E)
M.mobile(E)
if($j){I.setText('')}
E.autobind(R,'value',function($t){if(S===$t)return
S=$t
$s()})
E.autobind(T,'value',function($t){if(U===$t)return
U=$t
$s($q)})
E.autobind($$,'value',function($t){$_=$t
$s($p)})
E.autobind($a,'value',function($t){$b=$t
$s($p)})
E.autobind($e,'value',function($t){$f=$t
$s($p)})
E.autobind($c,'value',function($t){$d=$t
$s($p)})
function $p(){var $t
if($d&&(typeof $f!='undefined')&&!$f){$t=N.cookie_law[$j?'disabled_mobile':'disabled']}
else if($j){$t=W=='offline'?N.chat_button.mobile_greeting.offline:N.chat_button.mobile_greeting.online}
else{$t=W=='offline'?N.get($a):N.get($$)}
if($k==$t)return
$k=$t
H.setText($t)}
function $q(){if(U){E.addClass('unread')
if($j){I.setText(N.chat_button.unread_mobile.replace('<number>',U))}
else{I.setText(N.chat_button[U==1?'unread_one':'unread_many'].replace('<number>',U))}}
else{E.removeClass('unread')}}
E.autobind($i,'value',$n)
if(u&&u.onLanguage){u.onLanguage($r)
E.onDestruction(function(){u.unLanguage($r)})}
function $r(){$s($q,$p)}
function $s(){for(var $t=0,$u=arguments.length;$t<$u;$t++){if(h(arguments[$t])){arguments[$t]()}}
$n()}
E.autobind(X,'value',function($t){if(Y===$t)return
Y=$t
F.setDisplay($t?'':'none')
$s()})
E.autobind(V,'value',function($t){if(W===$t)return
W=$t
G.setText(N.status[W||'offline'])
$s($p)})}
function $n(){l($o,E,!0)}
function $o(){$g.update(parseInt(E.getWidth(),10)||t.getVariable('chatButtonMinWidth'))
$h.update(parseInt(t.getVariable('chatButtonHeight'),10))
if(!$l&&$k){E.setVisibility('')
$l=!0}}
$m()})()
for(var K in J)if(J.hasOwnProperty(K))E[K]=J[K]
if(E.fire)E.fire('init')
E.setStyle&&E.setStyle(z)
E.setAttributes&&E.setAttributes(B)
if(typeof E.addChildren=='function')E.addChildren(A)
else v.addChildren(E,A)
if(E!==this){E.__jx__constructor=b.__$$__meshim_widget_components_chatButton_Button
E.__jx__native=!1}
return E}
w.prototype=e(b.__$$__jx_ui_Widget.prototype)
w.prototype.__jx__native=!1
w.prototype.__jx__super=b.__$$__jx_ui_Widget
w.__jx__jcss={"**self":{"margin":"0 auto","position":"absolute","bottom, left":0,"overflow":"hidden","minWidth, *width":"$$chatButtonMinWidth","maxWidth":"$$chatButtonMaxWidth","height":"$$chatButtonHeight","color":"$$chatButtonColor","background":"$$chatButtonBg","boxShadow":"$$chatButtonShadow","paddingLeft":"$$faviconWidth"},"&.mobile":{"position":"relative","bottom, left":"auto","minWidth":0},"&.rtl":{"paddingLeft":0,"paddingRight":"$$faviconWidth"},".border_overlay":{"borderWidth":"$$chatButtonBorderWidth","borderStyle":"$$chatButtonBorderStyle","borderColor":"$$chatButtonBorderColor"},"**self, **self *":{"cursor":"pointer"},"&.unread":{".button_text":{"bottom":"100%"}},".blinds":{"width, height":"100%","overflow":"hidden","textOverflow":"ellipsis","whiteSpace":"nowrap"},"&.mobile .blinds":{"textOverflow":"clip"},".favicon":{"position":"absolute","height":"100%","left":0,"verticalAlign":"text-top","textAlign":"center","paddingTop":"8px","width":"$$faviconWidth","background":"$$faviconBg","color":"$$faviconColor"},"&.rtl .favicon":{"left":"auto","right":0},".button_text":{"position":"relative","overflow":"hidden","textOverflow":"ellipsis","verticalAlign":"text-top","whiteSpace":"nowrap","width":"100%","transition":"bottom 0.3s ease-in-out","fontWeight":"$$chatButtonFontWeight","lineHeight":"$$chatButtonHeight","paddingLeft":"$$chatButtonPaddingFavicon","paddingRight":"$$chatButtonPadding",".status":{"fontWeight":"$$chatButtonStatusFontWeight"},".unread":{}},"&.mobile .button_text":{"textOverflow":"clip"},"&.rtl .button_text":{"paddingLeft":"$$chatButtonPadding","paddingRight":"$$chatButtonPaddingFavicon"}}
w.prototype.__jx__fqname_chain=[(w.prototype.__jx__fqname_chain||"")," ","meshim_widget_components_chatButton_Button"].join('')
w.prototype.__jx__fqname="meshim_widget_components_chatButton_Button"
w.prototype.__jx__constructor=w
return w})()
b.__$$__meshim_widget_widgets_chatLogRenderer_ArrowBubble=(function(){function w(x,y,z,A,B){if(!(this instanceof w))return new w(x,y,z,A,B)
y=y||v.generateID()
var C=[b.__$$__jx_ui_html_div,null,null,[[b.__$$__jx_ui_html_div,"$$defaultplacement$$",null,[],{"class":"arrow_content","container":"default","position":"relative","id":"$$defaultplacement$$"}],[b.__$$__jx_ui_html_div,null,null,[],{"class":"arrow arrow_border"}],[b.__$$__jx_ui_html_div,null,null,[],{"class":"arrow arrow_background"}]],{}],D=C[0].call(this,x,y,null,v.mangleIDs(y,C[3]),C[4]),E=D||this
v.set(y,E)
var F=v.get(y+'__$$defaultplacement$$')
if(!w.__jx__jcss_generated){t.generate(x,w.prototype.__jx__fqname,w.__jx__jcss,null,w)
w.__jx__jcss_generated=!0}
E.defaultPlacement=F
var G=(function(){var I=b.__$$__meshim_widget_utils_BindClass
function J(){E.setArrowPointing=function(K){E.removeClass('left').removeClass('right')
E.addClass(K)}
I.rtl(E)}
J()})()
for(var H in G)if(G.hasOwnProperty(H))E[H]=G[H]
if(E.fire)E.fire('init')
E.setStyle&&E.setStyle(z)
E.setAttributes&&E.setAttributes(B)
if(typeof E.addChildren=='function')E.addChildren(A)
else v.addChildren(E,A)
if(E!==this){E.__jx__constructor=b.__$$__meshim_widget_widgets_chatLogRenderer_ArrowBubble
E.__jx__native=!1}
return E}
w.prototype=e(b.__$$__jx_ui_html_div.prototype)
w.prototype.__jx__native=!1
w.prototype.__jx__super=b.__$$__jx_ui_html_div
w.__jx__jcss={"**self":{"position":"relative","border":"1px solid #000000","background":"#ffffff",".arrow":{"position":"absolute","border":"0px solid transparent","height":0,"width":0,"fontSize":0,"lineHeight":0,"pointerEvents":"none"},".arrow_border":{"borderWidth":"8px","marginTop":"8px"},".arrow_background":{"borderWidth":"7px","marginTop":"9px"},"&.ltr.left, &.rtl.right":{".arrow":{"right":"100%","top":0,"borderLeftColor":"transparent !important","borderTopColor":"transparent !important","borderBottomColor":"transparent !important"}},"&.rtl.left, &.ltr.right":{".arrow":{"left":"100%","top":0,"borderRightColor":"transparent !important","borderTopColor":"transparent !important","borderBottomColor":"transparent !important"}}}}
w.prototype.__jx__fqname_chain=[(w.prototype.__jx__fqname_chain||"")," ","meshim_widget_widgets_chatLogRenderer_ArrowBubble"].join('')
w.prototype.__jx__fqname="meshim_widget_widgets_chatLogRenderer_ArrowBubble"
w.prototype.__jx__constructor=w
return w})()
b.__$$__meshim_widget_widgets_Bottom=(function(){function w(x,y,z,A,B){if(!(this instanceof w))return new w(x,y,z,A,B)
y=y||v.generateID()
var C=[b.__$$__jx_ui_Widget,null,null,[],{"addClass":"bottom"}],D=C[0].call(this,x,y,null,v.mangleIDs(y,C[3]),C[4]),E=D||this
v.set(y,E)
if(!w.__jx__jcss_generated){t.generate(x,w.prototype.__jx__fqname,w.__jx__jcss,null,w)
w.__jx__jcss_generated=!0}
var F=(function(){var H=b.__$$__meshim_widget_utils_BindClass
function I(){H.mobile(E)
H.windowSize(E,'bottom_')}
I()})()
for(var G in F)if(F.hasOwnProperty(G))E[G]=F[G]
if(E.fire)E.fire('init')
E.setStyle&&E.setStyle(z)
E.setAttributes&&E.setAttributes(B)
if(typeof E.addChildren=='function')E.addChildren(A)
else v.addChildren(E,A)
if(E!==this){E.__jx__constructor=b.__$$__meshim_widget_widgets_Bottom
E.__jx__native=!1}
return E}
w.prototype=e(b.__$$__jx_ui_Widget.prototype)
w.prototype.__jx__native=!1
w.prototype.__jx__super=b.__$$__jx_ui_Widget
w.__jx__jcss={"**self":{"position":"absolute","bottom, left":0,"width":"100%","textAlign":"center","*overflow":"hidden","paddingTop":"$$margin","paddingBottom":0,"height":"$$bottomHeight","borderWidth":"$$bottomBorderWidth","borderStyle":"$$bottomBorderStyle","borderColor":"$$bottomBorderColor","&.bottom_padding_bottom":{"paddingBottom":"$$margin","height":"$$bottomHeightBottomPadding"},"&.bottom_small":{"paddingLeft, paddingRight":"10px"},"&.bottom_medium":{"paddingLeft, paddingRight":"20px"},"&.bottom_large":{"paddingLeft, paddingRight":"50px"}},"&.note":{"height":"auto","fontSize":"$$fontSizeXS","padding":"$$margin","borderWidth":"$$bottomNoteBorderWidth","borderStyle":"$$bottomNoteBorderStyle","borderColor":"$$bottomNoteBorderColor"},"&.padding_bottom":{"height":"$$bottomHeightBottomPadding"},"&.mobile":{"position":"relative","padding":"$$margin","height":"auto"}}
w.prototype.__jx__fqname_chain=[(w.prototype.__jx__fqname_chain||"")," ","meshim_widget_widgets_Bottom"].join('')
w.prototype.__jx__fqname="meshim_widget_widgets_Bottom"
w.prototype.__jx__constructor=w
return w})()
b.__$$__meshim_widget_widgets_card_EndChatCard=(function(){var w=b.__$$__jx_ui_Widget,x=b.__$$__meshim_widget_widgets_card_TextCard,y=b.__$$__meshim_widget_widgets_Button,z=b.__$$__meshim_widget_controllers_DataController
function A(B,C,D,E,F){if(!(this instanceof A))return new A(B,C,D,E,F)
x.call(this,B,C,D,E,F)
if(!A.__jx__jcss_generated){t.generate(this,A.prototype.__jx__fqname,A.__jx__jcss,null,A)
A.__jx__jcss_generated=!0}
this.buttonsContainer=new w(this.defaultPlacement,null,null,null,{'addClass':'buttons_container'})
this.yes=new y(this.buttonsContainer,null,null,[u(152)],{addClass:'button_yes short'})
this.no=new y(this.buttonsContainer,null,null,[u(153)],{addClass:'button_no secondary short'})
var G=this
this.yes.on('click',function(){z.livechat.endChat()})
this.no.on('click',function(){G.$node&&G.$node.update({'minimized$bool':!0})})}
A.prototype=e(x.prototype)
A.__jx__jcss={".buttons_container":{"textAlign":"center"},"&.minimized":{".button_yes, .button_no":{"display":"none"}}}
A.prototype.__jx__super=x
A.prototype.update=function(B){x.prototype.update.call(this,B)}
if((typeof A==='function')&&A.prototype&&!A.__jx__no_fqname){A.prototype.__jx__fqname_chain=[(A.prototype.__jx__fqname_chain||"")," ","meshim_widget_widgets_card_EndChatCard"].join('')
A.prototype.__jx__fqname="meshim_widget_widgets_card_EndChatCard"}
return A})()
b.__$$__meshim_widget_controllers_liveChatAPI_Window=(function(){var w=b.__$$__meshim_widget_controllers_CookieLaw,x=b.__$$__meshim_widget_controllers_DataController,y=b.__$$__meshim_widget_controllers_UIController,z=b.__$$__meshim_widget_controllers_liveChatAPI_APIHelper,A={},B,C
A.init=function(M){B=M
C=x.root
A.setColor=B.generateDeprecatedFunction('window.setColor','$zopim.livechat.theme.setColor',function(){return B.theme.setColor.apply(this,arguments)})
A.setSize=B.generateLimitedFunction('window.setSize',1,function(P){if(!P)return
z.callOnRegistered(function(){z.saveAPISettings({theme:{chat_window:{size$string:P}}})
C.$$('livechat.settings.theme.chat_window').update({'size$string':P})})})
function N(){z.callOnRegistered(function(){y.showWindow()})}
A.show=N
function O(){z.callOnRegistered(function(){y.hideWindow()})}
A.hide=O}
function D(M){if(typeof M!='function')return
y.on('API:window:show',function(){M()})}
A.onShow=D
function E(M){if(typeof M!='function')return
y.on('API:window:hide',function(){M()})}
A.onHide=E
function F(M){M=M&&M.toString()
z.callOnRegistered(function(){z.saveAPISettings({chat_window:{title_bar:{title$string:M}}})
C.$$('livechat.settings.chat_window.title_bar').update({'title$string':M})})}
A.setTitle=F
function G(){z.callOnRegistered(function(){y.toggleWindow()})}
A.toggle=G
function H(){return C.$$('livechat.ui.chat_window.display$bool').getValue()}
A.getDisplay=H
function I(M){M=parseInt(M)
if(isNaN(M)||M<0)throw 'Invalid distance. Must be a number (20) or in pixels ("20px") and not smaller than 0'
z.callOnRegistered(function(){z.saveAPISettings({theme:{chat_window:{v_offset$int:M}}})
C.$$('livechat.settings.theme.chat_window').update({'v_offset$int':M})},!0)}
A.setOffsetBottom=A.setOffsetVertical=I
function J(M){M=parseInt(M)
if(isNaN(M)||M<0)throw 'Invalid distance. Must be a number (20) or in pixels ("20px") and not smaller than 0'
z.callOnRegistered(function(){z.saveAPISettings({theme:{chat_window:{h_offset$int:M}}})
C.$$('livechat.settings.theme.chat_window').update({'h_offset$int':M})},!0)}
A.setOffsetHorizontal=J
function K(M){z.callOnRegistered(function(){z.saveAPISettings({theme:{chat_window:{position$string:M}}})
C.$$('livechat.settings.theme.chat_window.position$string').update(M)},!0)}
A.setPosition=K
function L(){z.callOnRegistered(function(){if(w.isCookieDenied()){if(window.confirm(u(0)+'\n\n'+u(1)+': https://www.zopim.com/privacy#cookie')){y.openPopout(!0)
w.setUserChoice(!0)}}
else{y.openPopout(!0)}})}
A.openPopout=L
if((typeof A==='function')&&A.prototype&&!A.__jx__no_fqname){A.prototype.__jx__fqname_chain=[(A.prototype.__jx__fqname_chain||"")," ","meshim_widget_controllers_liveChatAPI_Window"].join('')
A.prototype.__jx__fqname="meshim_widget_controllers_liveChatAPI_Window"}
return A})()
b.__$$__meshim_widget_components_chatWindow_EmailTranscriptNotification=(function(){function w(x,y,z,A,B){if(!(this instanceof w))return new w(x,y,z,A,B)
y=y||v.generateID()
var C=[b.__$$__meshim_widget_widgets_Menu,null,null,[[b.__$$__meshim_widget_widgets_menu_Section,null,null,[[b.__$$__jx_ui_Localizer,"localizer",null,[[b.__$$__jx_ui_Label,null,null,[],{"addClass":"email"}]],{"id":"localizer","delimiter":"@@@@"}]],{"addClass":"flow"}]],{}],D=C[0].call(this,x,y,null,v.mangleIDs(y,C[3]),C[4]),E=D||this
v.set(y,E)
var F=v.get(y+'__localizer')
if(!w.__jx__jcss_generated){t.generate(x,w.prototype.__jx__fqname,w.__jx__jcss,null,w)
w.__jx__jcss_generated=!0}
var G=(function(){var I=b.__$$__meshim_widget_controllers_DataController,J=b.__$$__meshim_widget_utils_Utils,K=3100,L=J.isStyleSupported('transition')
if(p.isFF)L=!1
var M=I.root.$('livechat').$('ui').$('chat_window').$('menu_stack_name$string'),N,O=I.root.$('livechat').$('ui').$('chat_window').$('email_transcript_notification').$('last_sent_email$string'),P
function Q(){E.autobind(M,'value',function(S){N=S
if(P)window.clearTimeout(P)
if(S==E.getName()){L&&l(function(){E.addClass('fade_out')})
P=window.setTimeout(R,K)}
else{L&&l(function(){E.removeClass('fade_out')})}})
E.autobind(O,'value',function(S){F.setContent(u(35).replace('<email>',S))})
J.onTransitionEnd(E,E,R)}
function R(){if(N=='email_transcript_notification')M.update('')}
Q()})()
for(var H in G)if(G.hasOwnProperty(H))E[H]=G[H]
if(E.fire)E.fire('init')
E.setStyle&&E.setStyle(z)
E.setAttributes&&E.setAttributes(B)
if(typeof E.addChildren=='function')E.addChildren(A)
else v.addChildren(E,A)
if(E!==this){E.__jx__constructor=b.__$$__meshim_widget_components_chatWindow_EmailTranscriptNotification
E.__jx__native=!1}
return E}
w.prototype=e(b.__$$__meshim_widget_widgets_Menu.prototype)
w.prototype.__jx__native=!1
w.prototype.__jx__super=b.__$$__meshim_widget_widgets_Menu
w.__jx__jcss={"**self":{"transition":"opacity 0.5s linear 2.5s","opacity":1,"&.fade_out":{"opacity":0}},".email":{"fontWeight":"bold"}}
w.prototype.__jx__fqname_chain=[(w.prototype.__jx__fqname_chain||"")," ","meshim_widget_components_chatWindow_EmailTranscriptNotification"].join('')
w.prototype.__jx__fqname="meshim_widget_components_chatWindow_EmailTranscriptNotification"
w.prototype.__jx__constructor=w
return w})()
b.__$$__meshim_widget_widgets_ActionBar=(function(){function w(x,y,z,A,B){if(!(this instanceof w))return new w(x,y,z,A,B)
y=y||v.generateID()
var C=[b.__$$__jx_ui_Widget,null,null,[[b.__$$__meshim_widget_widgets_BorderOverlay,null,null,[],{}],[b.__$$__jx_ui_Widget,"$$defaultplacement$$",null,[],{"addClass":"actions","container":"default","id":"$$defaultplacement$$"}],[b.__$$__meshim_widget_widgets_zopimBranding_ZopimBrandingLink,null,null,[],{"addClass":"branding"}]],{"class":"action_bar","selectable":"false"}],D=C[0].call(this,x,y,null,v.mangleIDs(y,C[3]),C[4]),E=D||this
v.set(y,E)
var F=v.get(y+'__$$defaultplacement$$')
if(!w.__jx__jcss_generated){t.generate(x,w.prototype.__jx__fqname,w.__jx__jcss,null,w)
w.__jx__jcss_generated=!0}
E.defaultPlacement=F
var G=(function(){var I=b.__$$__meshim_widget_utils_BindClass
function J(){I.mobile(E)
I.rtl(E)}
J()})()
for(var H in G)if(G.hasOwnProperty(H))E[H]=G[H]
if(E.fire)E.fire('init')
E.setStyle&&E.setStyle(z)
E.setAttributes&&E.setAttributes(B)
if(typeof E.addChildren=='function')E.addChildren(A)
else v.addChildren(E,A)
if(E!==this){E.__jx__constructor=b.__$$__meshim_widget_widgets_ActionBar
E.__jx__native=!1}
return E}
w.prototype=e(b.__$$__jx_ui_Widget.prototype)
w.prototype.__jx__native=!1
w.prototype.__jx__super=b.__$$__jx_ui_Widget
w.__jx__jcss={"**self":{"position":"absolute","bottom, left":0,"overflow":"hidden","zIndex":10,"width":"$$actionBarWidth","height":"$$actionBarHeight","color":"$$actionBarColor","background":"$$actionBarBg","padding":"$$actionBarPadding"},".border_overlay":{"borderWidth":"$$actionBarBorderWidth","borderStyle":"$$actionBarBorderStyle","borderColor":"$$actionBarBorderColor"},".actions":{"float":"left"},".branding":{"position":"relative","float":"right","color":"$$actionBarColor","&:hover":{"color":"$$actionBarHoverColor"}},"&.rtl":{".actions":{"float":"right"},".branding":{"float":"left"}},"&.mobile":{"top":0,"bottom":"auto","display":"none","zIndex":102,".actions":{"float":"none","position":"absolute","width, height":"100%","top, left":0},".branding":{"display":"none"}},"&.mobile.rtl":{"left":"auto","right":0}}
w.prototype.__jx__fqname_chain=[(w.prototype.__jx__fqname_chain||"")," ","meshim_widget_widgets_ActionBar"].join('')
w.prototype.__jx__fqname="meshim_widget_widgets_ActionBar"
w.prototype.__jx__constructor=w
return w})()
b.__$$__meshim_widget_widgets_TitleBar=(function(){function w(x,y,z,A,B){if(!(this instanceof w))return new w(x,y,z,A,B)
y=y||v.generateID()
var C=[b.__$$__jx_ui_Widget,null,null,[[b.__$$__meshim_widget_widgets_BorderOverlay,null,null,[],{}],[b.__$$__jx_ui_Widget,null,null,[[b.__$$__jx_ui_Label,"title_text",null,[],{"id":"title_text","addClass":"title_text"}],[b.__$$__jx_ui_Label,"status_text",null,[],{"id":"status_text","addClass":"status_text","display":"none"}]],{"addClass":"title"}],[b.__$$__jx_ui_Widget,"icons",null,[[b.__$$__meshim_widget_widgets_IconFont,"popout_button",null,[],{"id":"popout_button","icon":"popout","title":u(135),"addClass":"left"}],[b.__$$__meshim_widget_widgets_IconFont,"close_button",null,[],{"id":"close_button","icon":"minimize","title":u(25)}]],{"id":"icons","addClass":"icons"}]],{"class":"title_bar","selectable":"false"}],D=C[0].call(this,x,y,null,v.mangleIDs(y,C[3]),C[4]),E=D||this
v.set(y,E)
var F=v.get(y+'__title_text'),G=v.get(y+'__status_text'),H=v.get(y+'__icons'),I=v.get(y+'__popout_button'),J=v.get(y+'__close_button')
if(!w.__jx__jcss_generated){t.generate(x,w.prototype.__jx__fqname,w.__jx__jcss,null,w)
w.__jx__jcss_generated=!0}
var K=(function(){var M=b.__$$__meshim_widget_controllers_DataController,N=b.__$$__meshim_widget_controllers_PopoutController,O=b.__$$__meshim_widget_controllers_UIController,P=b.__$$__meshim_widget_utils_Strings,Q=b.__$$__meshim_widget_utils_BindClass,R=M.root.$('livechat'),S=R.$('settings').$('chat_window').$('title_bar').$('title$string'),T=R.$('settings').$('chat_window').$('title_bar').$('status_messages'),U,V=R.$('settings').$('popout').$('enabled$bool'),W,X,Y=R.$('ui').$('popout$bool'),Z,$$=R.$('account').$('status$string'),$_
E.setHidePopout=function($e){X=m($e)
$b()}
function $a(){Q.mobile(E)
Q.rtl(E)
Q.windowPosition(E)
E.autobind(Y,'value',function($e){Z=$e
$b()
$c()
E[$e?'addClass':'removeClass']('title_bar_popout')})
E.autobind(S,'value',function(){F.setText(P.get(S))})
E.autobind(T,'value',function(){U=T.getValue()
$d()})
E.autobind($$,'value',function($e){$_=$e
$d()})
E.autobind(V,'value',function($e){W=$e
$b()})
H.on('mousedown',function($e){$e.stopPropagation()})
I.on('click',function(){N.openPopout(!0)
O.userHideWindow()})
J.on('click',function(){O.userHideWindow()})}
function $b(){I.setDisplay(W&&!X&&!Z&&!p.bugs.noBoxSizing?'':'none')}
function $c(){J.setDisplay(Z?'none':'')}
function $d(){if(!U)return
G.setText(P.get(T.$$($_+'$string')))}
$a()})()
for(var L in K)if(K.hasOwnProperty(L))E[L]=K[L]
if(E.fire)E.fire('init')
E.setStyle&&E.setStyle(z)
E.setAttributes&&E.setAttributes(B)
if(typeof E.addChildren=='function')E.addChildren(A)
else v.addChildren(E,A)
if(E!==this){E.__jx__constructor=b.__$$__meshim_widget_widgets_TitleBar
E.__jx__native=!1}
return E}
w.prototype=e(b.__$$__jx_ui_Widget.prototype)
w.prototype.__jx__native=!1
w.prototype.__jx__super=b.__$$__jx_ui_Widget
w.__jx__jcss={"**self":{"position":"absolute","top, left":0,"width":"100%","overflow":"hidden","zIndex":10,"height":"$$titleBarHeight","color":"$$titleBarColor","background":"$$titleBarBg","&.title_bar_popout":{"cursor":"default"}},".border_overlay":{"borderWidth":"$$titleBarBorderWidth","borderStyle":"$$titleBarBorderStyle","borderColor":"$$titleBarBorderColor"},".title":{"margin":"0 60px","whiteSpace":"nowrap","overflow":"hidden","textOverflow":"ellipsis","textAlign":"center","cursor":"inherit","fontSize":"$$fontSizeS","lineHeight":"$$titleBarHeight","fontWeight":"$$titleBarFontWeight",".title_text, .status_text":{"cursor":"inherit"},".title_text":{"display":["inline","$$titleBarTitleDisplay"]},".status_text":{"display":["none","$$titleBarStatusDisplay"]}},".icons":{"position":"absolute","top, right":0,"cursor":"default","fontSize":"$$fontSizeXS","div":{"display":"inline-block","cursor":"pointer","textAlign":"center","padding":"9px 9px 5px 6px","&:hover":{"&":"$$titleBarItemHover"},"&.left":{"padding":"9px 5px 5px 6px"}}},"&.rtl .icons":{"left":0,"right":"auto","div":{"padding":"9px 6px 5px 9px","&.left":{"padding":"9px 6px 5px 5px"}}},"&.br, &.bm, &.bl":{"borderTopLeftRadius, borderTopRightRadius":"$$windowRadius"},"&.tr, &.tm, &.tl":{},"&.mobile":{"zIndex":101,"borderRadius":"0",".title":{"fontSize":"$$fontSizeXL"}}}
w.prototype.__jx__fqname_chain=[(w.prototype.__jx__fqname_chain||"")," ","meshim_widget_widgets_TitleBar"].join('')
w.prototype.__jx__fqname="meshim_widget_widgets_TitleBar"
w.prototype.__jx__constructor=w
return w})()
b.__$$__meshim_widget_widgets_Submit=(function(){var w=b.__$$__meshim_widget_widgets_Button
function x(y,z,A,B,C){if(!(this instanceof x))return new x(y,z,A,B,C)
if(!x.__jx__jcss_generated){t.generate(this,x.prototype.__jx__fqname,x.__jx__jcss,null,x)
x.__jx__jcss_generated=!0}
if(!C)C={}
C.tagName||(C.tagName='input')
C.type||(C.type='submit')
w.call(this,y,z,A,B,C)
this.setValue(this._value)
var D=this
this._setValue=function(){D.setValue(D._value)}
u&&u.onLanguage&&u.onLanguage(this._setValue)}
x.__jx__jcss={"**self":{}}
x.prototype=e(w.prototype)
x.prototype.__jx__super=w
x.prototype.setValue=function(y){this._value=y
return w.prototype.setValue.call(this,y)}
x.prototype.destroy=function(){u&&u.unLanguage&&u.unLanguage(this._setValue)
w.prototype.destroy.call(this)}
if((typeof x==='function')&&x.prototype&&!x.__jx__no_fqname){x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","meshim_widget_widgets_Submit"].join('')
x.prototype.__jx__fqname="meshim_widget_widgets_Submit"}
return x})()
b.__$$__meshim_widget_widgets_chatLogRenderer_ChatName=(function(){function w(x,y,z,A,B){if(!(this instanceof w))return new w(x,y,z,A,B)
y=y||v.generateID()
var C=[b.__$$__jx_ui_html_div,null,null,[[b.__$$__jx_ui_html_div,"text",null,[],{"id":"text","addClass":"text_name"}],[b.__$$__jx_ui_html_div,"change_name",null,[u(146),[b.__$$__jx_ui_html_span,"click_to_change",null,[[b.__$$__jx_ui_html_span,null,null,[" - "],{}],u(147)],{"id":"click_to_change"}]],{"id":"change_name"}]],{}],D=C[0].call(this,x,y,null,v.mangleIDs(y,C[3]),C[4]),E=D||this
v.set(y,E)
var F=v.get(y+'__text'),G=v.get(y+'__change_name'),H=v.get(y+'__click_to_change')
if(!w.__jx__jcss_generated){t.generate(x,w.prototype.__jx__fqname,w.__jx__jcss,null,w)
w.__jx__jcss_generated=!0}
var I=(function(){var K=b.__$$__meshim_widget_controllers_DataController,L=b.__$$__meshim_widget_controllers_UIController,M=b.__$$__meshim_widget_utils_Utils,N,O='',P='',Q=K.root.$$('livechat.profile.display_name$string'),R=K.root.$$('connection.reattached_timestamp$int'),S=K.root.$$('livechat.ui.mobile$bool'),T=K.root.$('livechat').$('settings').$('login').$('restrict_profile$bool'),U='chat.file.update'
function V(){E.setDataNode=W
E.autobind(Q,'value',$$)
E.autobind(T,'value',function($a){E.setStyle('cursor',$a?'auto':'')
H.setDisplay($a?'none':'')})}
function W($a){if(N)E.autounbind(N,'value',X)
N=$a
E.autobind(N,'value',X)}
function X($a){if(!$a)return
if($a['type$string']==U)return
if($a['nick$string'])Y($a['nick$string'],$a['timestamp$int'])
if($a['display_name$string'])Z($a['display_name$string'])}
function Y($a,$b){if(!$a)return
O=$a.split(':')[0]
if(O=='visitor'&&P)Z(P)
if((O=='agent')&&R.getValue()&&($b>R.getValue())){K.root.$$('livechat.ui.sounds').update({'new_message$int':+new Date()})}
if(O=='visitor'&&!$_.bounded){E.addClass('cursor_pointer')
E.on('click',$_)
$_.bounded=!0}}
function Z($a){if(O=='visitor'){if(!P){if(M.isDefaultName($a)){$a=''
G.setDisplay('')}
else{G.setDisplay('none')}
P=$a}
F.setText(P)}
else{F.setText($a)
G.setDisplay('none')}}
function $$($a){if(!$a||(typeof $a!='string')||(O&&O!='visitor'))return
if(M.isDefaultName($a)){$a=''
G.setDisplay('')}
else{G.setDisplay('none')}
P=$a
F.setText(P)}
function $_($a){if(S.getValue()){if(!M.isDefaultName(Q.getValue()))return
else window.scrollTo(0,0)}
$a.stopPropagation()
L.showProfileMenu()}
V()})()
for(var J in I)if(I.hasOwnProperty(J))E[J]=I[J]
if(E.fire)E.fire('init')
E.setStyle&&E.setStyle(z)
E.setAttributes&&E.setAttributes(B)
if(typeof E.addChildren=='function')E.addChildren(A)
else v.addChildren(E,A)
if(E!==this){E.__jx__constructor=b.__$$__meshim_widget_widgets_chatLogRenderer_ChatName
E.__jx__native=!1}
return E}
w.prototype=e(b.__$$__jx_ui_html_div.prototype)
w.prototype.__jx__native=!1
w.prototype.__jx__super=b.__$$__jx_ui_html_div
w.__jx__jcss={"&.cursor_pointer":{"cursor":"pointer"},".text_name":{"*display":"inline"}}
w.prototype.__jx__fqname_chain=[(w.prototype.__jx__fqname_chain||"")," ","meshim_widget_widgets_chatLogRenderer_ChatName"].join('')
w.prototype.__jx__fqname="meshim_widget_widgets_chatLogRenderer_ChatName"
w.prototype.__jx__constructor=w
return w})()
b.__$$__meshim_widget_widgets_iconFont_AuthButton=(function(){function w(x,y,z,A,B){if(!(this instanceof w))return new w(x,y,z,A,B)
y=y||v.generateID()
var C=[b.__$$__meshim_widget_widgets_Button,null,null,[[b.__$$__meshim_widget_widgets_iconFont_Auth,"i",null,[],{"id":"i","addClass":"if"}]],{}],D=C[0].call(this,x,y,null,v.mangleIDs(y,C[3]),C[4]),E=D||this
v.set(y,E)
var F=v.get(y+'__i')
if(!w.__jx__jcss_generated){t.generate(x,w.prototype.__jx__fqname,w.__jx__jcss,null,w)
w.__jx__jcss_generated=!0}
var G=(function(){E.setIcon=function(){F.setIcon.apply(F,arguments)}})()
for(var H in G)if(G.hasOwnProperty(H))E[H]=G[H]
if(E.fire)E.fire('init')
E.setStyle&&E.setStyle(z)
E.setAttributes&&E.setAttributes(B)
if(typeof E.addChildren=='function')E.addChildren(A)
else v.addChildren(E,A)
if(E!==this){E.__jx__constructor=b.__$$__meshim_widget_widgets_iconFont_AuthButton
E.__jx__native=!1}
return E}
w.prototype=e(b.__$$__meshim_widget_widgets_Button.prototype)
w.prototype.__jx__native=!1
w.prototype.__jx__super=b.__$$__meshim_widget_widgets_Button
w.__jx__jcss={"**self":{"overflow":"hidden","paddingTop":"10px","paddingBottom":"6px","color":"$$authButtonColor","background":"$$authButtonBg","borderColor":"$$authButtonBorderColor","boxShadow":"$$authButtonShadow","&:hover, &:focus":{"color":"$$authButtonHoverColor","background":"$$authButtonHoverBg","borderColor":"$$authButtonHoverBorderColor","boxShadow":"$$authButtonHoverShadow"},"&:active":{"color":"$$authButtonActiveColor","background":"$$authButtonActiveBg","borderColor":"$$authButtonActiveBorderColor","boxShadow":"$$authButtonActiveShadow"}},"&.float":{"width":"30%","margin":"0 3% 0 0"},"&:hover, &:focus":{"&.facebook .icon_font":{"color":"$$facebook"},"&.twitter .icon_font":{"color":"$$twitter"},"&.google .icon_font":{"color":"$$google"}},"&.mobile":{".if":{"textAlign":"center","fontSize":"22px"}}}
w.prototype.__jx__fqname_chain=[(w.prototype.__jx__fqname_chain||"")," ","meshim_widget_widgets_iconFont_AuthButton"].join('')
w.prototype.__jx__fqname="meshim_widget_widgets_iconFont_AuthButton"
w.prototype.__jx__constructor=w
return w})()
b.__$$__meshim_widget_widgets_card_FormCard=(function(){var w=b.__$$__jx_ui_Widget,x=b.__$$__meshim_widget_controllers_DataController,y=b.__$$__meshim_widget_widgets_card_TextCard,z=b.__$$__meshim_widget_widgets_Button
function A(B,C,D,E,F){if(!(this instanceof A))return new A(B,C,D,E,F)
y.call(this,B,C,D,E,F)
if(!A.__jx__jcss_generated){t.generate(this,A.prototype.__jx__fqname,A.__jx__jcss,null,A)
A.__jx__jcss_generated=!0}
this.fields=new w(this.defaultPlacement,null,null,null,{tagName:'ul',addClass:'fields'})
this.yes=new z(this.defaultPlacement,null,null,[u(154)],{addClass:'button_yes short'})
var G=this
this.yes.on('click',function(){var H=x.root.$('livechat').$('settings').$('forms').$('card_form'),I=H.$('form')
H.$('profile_required$bool').update(G.nodeValue['profile_required$bool'])
I.update(null)
I.update(G.nodeValue['form'])
x.root.$('livechat').$('ui').$('chat_window').$('main_stack_name$string').update('card_form')})}
A.prototype=e(y.prototype)
A.__jx__jcss={".button_yes":{"display":"block","margin":"0 auto"},"&.minimized":{".fields, .button_yes":{"display":"none"}},".fields":{"marginTop":"5px","paddingLeft":"20px","fontWeight":"bold"}}
A.prototype.__jx__super=y
A.prototype.update=function(B){y.prototype.update.call(this,B)
if(!B)return
if('form' in B){var C=this.$node.$('form').getValue(),D=this.$node.$('profile_required$bool').getValue()
this.fields.empty()
if(D){new w(this.fields,null,null,[u(155)],{tagName:'li'})}
for(var E in C)if(C.hasOwnProperty(E)){new w(this.fields,null,null,[C[E]['label$string']],{tagName:'li'})}}}
if((typeof A==='function')&&A.prototype&&!A.__jx__no_fqname){A.prototype.__jx__fqname_chain=[(A.prototype.__jx__fqname_chain||"")," ","meshim_widget_widgets_card_FormCard"].join('')
A.prototype.__jx__fqname="meshim_widget_widgets_card_FormCard"}
return A})()
b.__$$__meshim_widget_controllers_liveChatAPI_Button=(function(){var w=b.__$$__meshim_widget_controllers_DataController,x=b.__$$__meshim_widget_controllers_UIController,y=b.__$$__meshim_widget_controllers_liveChatAPI_Theme,z=b.__$$__meshim_widget_controllers_liveChatAPI_APIHelper,A={},B,C,D
A.init=function(M){B=M
C=w.root
D=C.$$('livechat.ui.mobile$bool').getValue()
A.setColor=B.generateDeprecatedFunction('button.setColor','$zopim.livechat.theme.setColor',function(){return y.setColor.apply(this,arguments)})
function N(O){O=m(O)
z.callOnRegistered(function(){x.setHideWhenOffline(O)},!0)}
A.setHideWhenOffline=B.generateLimitedFunction('button.setHideWhenOffline',1,N)}
function E(){z.callOnRegistered(function(){x.hideButton()})}
A.hide=E
function F(){z.callOnRegistered(function(){x.showButton()})}
A.show=F
function G(M){M=parseInt(M)
if(isNaN(M)||M<0)throw 'Invalid distance. Must be a number (20) or in pixels ("20px") and not smaller than 0'
z.callOnRegistered(function(){z.saveAPISettings({theme:{chat_button:{v_offset$int:M}}})
C.$$('livechat.settings.theme.chat_button').update({'v_offset$int':M})},!0)}
A.setOffsetBottom=A.setOffsetVertical=G
function H(M){M=parseInt(M)
if(isNaN(M)||M<0)throw 'Invalid distance. Must be a number (20) or in pixels ("20px") and not smaller than 0'
z.callOnRegistered(function(){z.saveAPISettings({theme:{chat_button:{v_offset_mobile$int:M}}})
C.$$('livechat.settings.theme.chat_button').update({'v_offset_mobile$int':M})},!0)}
A.setOffsetVerticalMobile=H
function I(M){M=parseInt(M)
if(isNaN(M)||M<0)throw 'Invalid distance. Must be a number (20) or in pixels ("20px") and not smaller than 0'
z.callOnRegistered(function(){z.saveAPISettings({theme:{chat_button:{h_offset$int:M}}})
C.$$('livechat.settings.theme.chat_button').update({'h_offset$int':M})},!0)}
A.setOffsetHorizontal=I
function J(M){M=parseInt(M)
if(isNaN(M)||M<0)throw 'Invalid distance. Must be a number (20) or in pixels ("20px") and not smaller than 0'
z.callOnRegistered(function(){z.saveAPISettings({theme:{chat_button:{h_offset_mobile$int:M}}})
C.$$('livechat.settings.theme.chat_button').update({'h_offset_mobile$int':M})},!0)}
A.setOffsetHorizontalMobile=J
function K(M){if(D)return
z.callOnRegistered(function(){z.saveAPISettings({theme:{chat_button:{position$string:M}}})
C.$$('livechat.settings.theme.chat_button.position$string').update(M)},!0)}
A.setPosition=K
function L(M){z.callOnRegistered(function(){z.saveAPISettings({theme:{chat_button:{position_mobile$string:M}}})
C.$$('livechat.settings.theme.chat_button.position_mobile$string').update(M)},!0)}
A.setPositionMobile=L
if((typeof A==='function')&&A.prototype&&!A.__jx__no_fqname){A.prototype.__jx__fqname_chain=[(A.prototype.__jx__fqname_chain||"")," ","meshim_widget_controllers_liveChatAPI_Button"].join('')
A.prototype.__jx__fqname="meshim_widget_controllers_liveChatAPI_Button"}
return A})()
b.__$$__meshim_widget_widgets_card_IntegrationCard=(function(){var w=b.__$$__jx_ui_Widget,x=b.__$$__meshim_widget_widgets_card_TextCard,y=b.__$$__meshim_widget_widgets_Button,z=u(156)
function A(B,C,D,E,F){if(!(this instanceof A))return new A(B,C,D,E,F)
x.call(this,B,C,D,E,F)
if(!A.__jx__jcss_generated){t.generate(this,A.prototype.__jx__fqname,A.__jx__jcss,null,A)
A.__jx__jcss_generated=!0}
this.image=new w(this.defaultPlacement,null,null,null,{tagName:'img',addClass:'integration_image'})
this.defaultPlacement.insertBefore(this.image,this.message)
this.yes=new y(this.defaultPlacement,null,null,[z],{addClass:'button_yes short'})
var G=this
this.yes.on('click',function(){if(!G.url)return
window.open(G.url)})}
A.prototype=e(x.prototype)
A.__jx__jcss={".button_yes":{"display":"block","margin":"0 auto"},".integration_image":{"maxHeight, *height":"40px","marginBottom":"5px"},"&.minimized":{".integration_image, .button_yes":{"display":"none"}}}
A.prototype.__jx__super=x
A.prototype.update=function(B){x.prototype.update.call(this,B)
if(!B)return
if('url$string' in B){this.url=B['url$string']
this.yes.setDisplay(this.url?'':'none')}
if('label$string' in B){this.yes.setText(B['label$string']||z)}
if('image_src$string' in B){this.image.setDisplay(B['image_src$string']?'':'none')
this.image.setSrc(B['image_src$string'])}}
if((typeof A==='function')&&A.prototype&&!A.__jx__no_fqname){A.prototype.__jx__fqname_chain=[(A.prototype.__jx__fqname_chain||"")," ","meshim_widget_widgets_card_IntegrationCard"].join('')
A.prototype.__jx__fqname="meshim_widget_widgets_card_IntegrationCard"}
return A})()
b.__$$__meshim_widget_controllers_liveChatAPI_Bubble=(function(){var w=b.__$$__meshim_widget_controllers_DataController,x=b.__$$__meshim_widget_controllers_UIController,y=b.__$$__meshim_widget_controllers_liveChatAPI_APIHelper,z={},A,B
z.init=function(H){A=H
B=w.root
z.setColor=A.generateLimitedFunction('bubble.setColor',1,function I(J){return A.theme.setColor(J,'bubble')})}
function C(){y.callOnRegistered(function(){x.showBubble()})}
z.show=C
function D(){y.callOnRegistered(function(){x.hideBubble()})}
z.hide=D
function E(){y.callOnRegistered(function(){x.resetBubble()})}
z.reset=E
function F(H){if(!H||typeof H!='string')return
y.callOnRegistered(function(){y.saveAPISettings({bubble:{title$string:H}})
B.$$('livechat.settings.bubble').update({'title$string':H})},!0)}
z.setTitle=F
function G(H){if(!H||typeof H!='string')return
y.callOnRegistered(function(){y.saveAPISettings({bubble:{text$string:H}})
B.$$('livechat.settings.bubble').update({'text$string':H})},!0)}
z.setText=G
if((typeof z==='function')&&z.prototype&&!z.__jx__no_fqname){z.prototype.__jx__fqname_chain=[(z.prototype.__jx__fqname_chain||"")," ","meshim_widget_controllers_liveChatAPI_Bubble"].join('')
z.prototype.__jx__fqname="meshim_widget_controllers_liveChatAPI_Bubble"}
return z})()
b.__$$__meshim_widget_controllers_liveChatAPI_Badge=(function(){var w=b.__$$__meshim_widget_controllers_DataController,x=b.__$$__meshim_widget_controllers_UIController,y=b.__$$__meshim_widget_controllers_liveChatAPI_APIHelper,z={},A,B
z.init=function(D){A=D
B=w.root
z.setLayout=(function(){var H=['image_right','image_left','text_only','image_only'],I=H.join(', ')
return A.generateLimitedFunction('badge.setLayout',1,function(J){y.callOnRegistered(function(){if(!J||f(J,H)==-1){window.console&&console.log('Invalid layout. Valid layouts: '+I)
return}
C({"layout$string":J})},!0)})})()
z.setImage=A.generateLimitedFunction('badge.setImage',1,function(H){y.callOnRegistered(function(){H=H||''
C({"image_path$string":H})},!0)})
z.setColor=A.generateLimitedFunction('badge.setColor',1,function(H){return A.theme.setColor(H,'badge')})
function E(H){y.callOnRegistered(function(){H=H||''
C({"text$string":H})},!0)}
z.setText=E
function F(){y.callOnRegistered(function(){x.showBanner()})}
z.show=F
function G(){y.callOnRegistered(function(){x.hideBanner()})}
z.hide=A.generateLimitedFunction('badge.hide',1,G)}
function C(D){y.callOnRegistered(function(){y.saveAPISettings({banner:D})
B.$$('livechat.settings.banner').update(D)},!0)}
if((typeof z==='function')&&z.prototype&&!z.__jx__no_fqname){z.prototype.__jx__fqname_chain=[(z.prototype.__jx__fqname_chain||"")," ","meshim_widget_controllers_liveChatAPI_Badge"].join('')
z.prototype.__jx__fqname="meshim_widget_controllers_liveChatAPI_Badge"}
return z})()
b.__$$__meshim_widget_widgets_form_RadioButtonMultiple=(function(){var w=b.__$$__jx_ui_RadioButton,x=b.__$$__meshim_widget_widgets_form_InputMultiple
function y(z,A,B,C,D){if(!(this instanceof y))return new y(z,A,B,C,D)
this.optionConstructor=w
this.inputSuffix='radio'
x.call(this,z,A,B,C,D)}
y.prototype=e(x.prototype)
y.prototype.setValue=function(z){for(var A=0,B=this.options.length;A<B;A++){if(this.options[A].getValue()==z){this.options[A].setChecked(!0);(this.options[A].container||this.options[A]).setDisplay('')
this.labels[A].setDisplay('').addClass('label_checked')}
else{this.options[A].setChecked(!1)
if(this.readOnly){(this.options[A].container||this.options[A]).setDisplay('none')
this.labels[A].setDisplay('none').removeClass('label_checked')}}}}
y.prototype.getValue=function(){for(var z=0,A=this.options.length;z<A;z++)if(this.options[z].getChecked())return this.options[z].getValue()}
if((typeof y==='function')&&y.prototype&&!y.__jx__no_fqname){y.prototype.__jx__fqname_chain=[(y.prototype.__jx__fqname_chain||"")," ","meshim_widget_widgets_form_RadioButtonMultiple"].join('')
y.prototype.__jx__fqname="meshim_widget_widgets_form_RadioButtonMultiple"}
return y})()
b.__$$__meshim_widget_widgets_chatLogRenderer_SystemLogRenderer=(function(){function w(x,y,z,A,B){if(!(this instanceof w))return new w(x,y,z,A,B)
y=y||v.generateID()
var C=[b.__$$__jx_ui_html_div,null,null,[],{}],D=C[0].call(this,x,y,null,v.mangleIDs(y,C[3]),C[4]),E=D||this
v.set(y,E)
if(!w.__jx__jcss_generated){t.generate(x,w.prototype.__jx__fqname,w.__jx__jcss,null,w)
w.__jx__jcss_generated=!0}
var F=(function(){var H=b.__$$__meshim_widget_widgets_chatLogRenderer_MemberChange,I=b.__$$__meshim_widget_widgets_chatLogRenderer_NameChange,J=b.__$$__meshim_widget_widgets_chatLogRenderer_GenericSystemMsg,K,L,M
function N(){E.setDataNode=O
E.onDestruction(R)
u.onLanguage&&u.onLanguage(Q)}
function O(S){if(K)E.autounbind(K,'value',P)
K=S.$('type$string')
L=S
E.autobind(K,'value',P)}
function P(S){if(!S||M)return
switch(S){case 'chat.memberjoin':case 'chat.memberleave':M=new H(E)
break
case 'chat.changename':M=new I(E)
break
case 'chat.event':M=new J(E)
break}
if(M)M.setDataNode(L)}
function Q(){if(M&&L)M.setDataNode(L)}
function R(){u.unLanguage&&u.unLanguage(Q)}
N()})()
for(var G in F)if(F.hasOwnProperty(G))E[G]=F[G]
if(E.fire)E.fire('init')
E.setStyle&&E.setStyle(z)
E.setAttributes&&E.setAttributes(B)
if(typeof E.addChildren=='function')E.addChildren(A)
else v.addChildren(E,A)
if(E!==this){E.__jx__constructor=b.__$$__meshim_widget_widgets_chatLogRenderer_SystemLogRenderer
E.__jx__native=!1}
return E}
w.prototype=e(b.__$$__jx_ui_html_div.prototype)
w.prototype.__jx__native=!1
w.prototype.__jx__super=b.__$$__jx_ui_html_div
w.__jx__jcss={"**self":{"fontSize":"$$fontSizeS","color":"$$chatLogSystemMsgColor","background":"$$chatLogSystemMsgBg","borderWidth":"$$chatLogSystemMsgBorderWidth","borderStyle":"$$chatLogSystemMsgBorderStyle","borderColor":"$$chatLogSystemMsgBorderColor","padding":"$$chatLogSystemMsgPadding","textAlign":"center"}}
w.prototype.__jx__fqname_chain=[(w.prototype.__jx__fqname_chain||"")," ","meshim_widget_widgets_chatLogRenderer_SystemLogRenderer"].join('')
w.prototype.__jx__fqname="meshim_widget_widgets_chatLogRenderer_SystemLogRenderer"
w.prototype.__jx__constructor=w
return w})()
b.__$$__meshim_widget_widgets_Gravatar=(function(){function w(x,y,z,A,B){if(!(this instanceof w))return new w(x,y,z,A,B)
y=y||v.generateID()
var C=[b.__$$__jx_ui_html_div,null,null,[],{}],D=C[0].call(this,x,y,null,v.mangleIDs(y,C[3]),C[4]),E=D||this
v.set(y,E)
if(!w.__jx__jcss_generated){t.generate(x,w.prototype.__jx__fqname,w.__jx__jcss,null,w)
w.__jx__jcss_generated=!0}
var F=(function(){var H=b.__$$__meshim_widget_widgets_gravatar_GravatarOne,I=b.__$$__meshim_widget_widgets_gravatar_GravatarTwo,J=b.__$$__meshim_widget_widgets_gravatar_GravatarThree,K=b.__$$__meshim_widget_widgets_gravatar_GravatarFour,L=[H,I,J,K],M,N
function O(){E.setImages=V
E.setDataNode=Q
E.setMemberNode=R
E.setGroupNode=S
E.setHideAuthType=P}
function P(Y){E[m(Y)?'addClass':'removeClass']('hide_auth_type')
return E}
function Q(Y){E.autounbind()
if(Y.name=='agents')S(Y)
else R(Y)}
function R(Y){var Z=X([Y])
Z.setNodes([Y])}
function S(Y){M&&E.autounbind(M,'keys',T)
M=Y
M&&E.autobind(M,'keys',T)}
function T(){var Y=M.getKeys(),Z=[]
for(var $$=0,$_=Math.min(3,Y.length);$$<$_;$$++){Z.push(M.$(Y[$$]))}
U(Z)}
function U(Y){var Z=X(Y)
Z&&Z.setNodes(Y)}
function V(Y){var Z=X(Y)
Z&&Z.setImages(Y)}
var W
function X(Y){if(!(Y instanceof Array)||!Y.length)return
var Z=Math.min(Y.length,4),$$=L[Z-1]
if(Z!==W){E.empty()
N=new $$(E)
W=Z}
return N}
O()})()
for(var G in F)if(F.hasOwnProperty(G))E[G]=F[G]
if(E.fire)E.fire('init')
E.setStyle&&E.setStyle(z)
E.setAttributes&&E.setAttributes(B)
if(typeof E.addChildren=='function')E.addChildren(A)
else v.addChildren(E,A)
if(E!==this){E.__jx__constructor=b.__$$__meshim_widget_widgets_Gravatar
E.__jx__native=!1}
return E}
w.prototype=e(b.__$$__jx_ui_html_div.prototype)
w.prototype.__jx__native=!1
w.prototype.__jx__super=b.__$$__jx_ui_html_div
w.__jx__jcss={"**self":{"width":"60px","height":"60px","position":"relative","overflow":"hidden","borderWidth":"$$avatarBorderWidth","borderStyle":"$$avatarBorderStyle","borderColor":"$$avatarBorderColor","borderRadius":"$$avatarRadius","boxShadow":"$$avatarShadow",".avatar":{"background":"#FFF"},"&.hide_auth_type":{".auth_type":{"display":"none !important"}}}}
w.prototype.__jx__fqname_chain=[(w.prototype.__jx__fqname_chain||"")," ","meshim_widget_widgets_Gravatar"].join('')
w.prototype.__jx__fqname="meshim_widget_widgets_Gravatar"
w.prototype.__jx__constructor=w
return w})()
b.__$$__meshim_widget_widgets_card_LoginCard=(function(){var w=b.__$$__meshim_widget_controllers_DataController,x=b.__$$__meshim_widget_widgets_card_TextCard,y=b.__$$__meshim_widget_widgets_Button
function z(A,B,C,D,E){if(!(this instanceof z))return new z(A,B,C,D,E)
x.call(this,A,B,C,D,E)
if(!z.__jx__jcss_generated){t.generate(this,z.prototype.__jx__fqname,z.__jx__jcss,null,z)
z.__jx__jcss_generated=!0}
this.yes=new y(this.defaultPlacement,null,null,['Sign In'],{addClass:'button_yes short'})
this.yes.on('click',function(F){F.stopPropagation()
w.root.$('livechat').$('ui').$('chat_window').$('menu_stack_name$string').update('profile_menu')})}
z.prototype=e(x.prototype)
z.__jx__jcss={".button_yes":{"display":"block","margin":"0 auto"},"&.minimized":{".button_yes":{"display":"none"}}}
z.prototype.__jx__super=x
z.prototype.update=function(A){x.prototype.update.call(this,A)}
if((typeof z==='function')&&z.prototype&&!z.__jx__no_fqname){z.prototype.__jx__fqname_chain=[(z.prototype.__jx__fqname_chain||"")," ","meshim_widget_widgets_card_LoginCard"].join('')
z.prototype.__jx__fqname="meshim_widget_widgets_card_LoginCard"}
return z})()
b.__$$__meshim_widget_components_chatWindow_settingsMenu_EndChat=(function(){function w(x,y,z,A,B){if(!(this instanceof w))return new w(x,y,z,A,B)
y=y||v.generateID()
var C=[b.__$$__meshim_widget_widgets_menu_Item,null,null,[[b.__$$__meshim_widget_widgets_Button,null,null,[u(127)],{"addClass":"end_chat wide short"}],[b.__$$__jx_ui_Label,null,null,[u(127)],{"addClass":"end_chat_mobile"}]],{}],D=C[0].call(this,x,y,null,v.mangleIDs(y,C[3]),C[4]),E=D||this
v.set(y,E)
if(!w.__jx__jcss_generated){t.generate(x,w.prototype.__jx__fqname,w.__jx__jcss,null,w)
w.__jx__jcss_generated=!0}
var F=(function(){var H=b.__$$__meshim_widget_controllers_DataController,I=H.root.$('livechat'),J=I.$('settings').$('end_chat_menu').$('enabled$bool'),K=I.$('ui').$('chat_window').$('menu_stack_name$string')
function L(){E.on('click',function(){K.update('end_chat_menu')})
E.autobind(J,'value',function(M){E.setDisplay(M?'':'none')})}
L()})()
for(var G in F)if(F.hasOwnProperty(G))E[G]=F[G]
if(E.fire)E.fire('init')
E.setStyle&&E.setStyle(z)
E.setAttributes&&E.setAttributes(B)
if(typeof E.addChildren=='function')E.addChildren(A)
else v.addChildren(E,A)
if(E!==this){E.__jx__constructor=b.__$$__meshim_widget_components_chatWindow_settingsMenu_EndChat
E.__jx__native=!1}
return E}
w.prototype=e(b.__$$__meshim_widget_widgets_menu_Item.prototype)
w.prototype.__jx__native=!1
w.prototype.__jx__super=b.__$$__meshim_widget_widgets_menu_Item
w.__jx__jcss={"**self":{"cursor":"default","&:hover":{"background":"transparent !important"},".end_chat":{"display":"block","textAlign":"center","cursor":"pointer"},".end_chat_mobile":{"display":"none"}},"&.mobile":{".end_chat":{"display":"none"},".end_chat_mobile":{"display":"block"}}}
w.prototype.__jx__fqname_chain=[(w.prototype.__jx__fqname_chain||"")," ","meshim_widget_components_chatWindow_settingsMenu_EndChat"].join('')
w.prototype.__jx__fqname="meshim_widget_components_chatWindow_settingsMenu_EndChat"
w.prototype.__jx__constructor=w
return w})()
b.__$$__meshim_widget_components_chatWindow_preChatOfflineForm_OperatingHours=(function(){function w(x,y,z,A,B){if(!(this instanceof w))return new w(x,y,z,A,B)
y=y||v.generateID()
var C=[b.__$$__meshim_widget_widgets_ChatWindowContent,null,null,[[b.__$$__meshim_widget_widgets_ScrollableFrame,null,null,[[b.__$$__meshim_widget_widgets_Header,null,null,[[b.__$$__jx_ui_Label,null,null,[u(93)],{}],[b.__$$__jx_ui_Label,null,null,[],{"text":" "}],[b.__$$__jx_ui_Label,null,null,[[b.__$$__jx_ui_Label,null,null,[],{"text":"("}],[b.__$$__jx_ui_Label,null,null,[u(94)],{}],[b.__$$__jx_ui_Label,"timezone_container",null,[],{"id":"timezone_container"}],[b.__$$__jx_ui_Label,null,null,[],{"text":")"}]],{"addClass":"timezone_container"}]],{}],[b.__$$__jx_ui_Widget,"days",null,[],{"id":"days"}]],{}],[b.__$$__meshim_widget_widgets_Bottom,null,null,[[b.__$$__meshim_widget_widgets_Button,"back",null,[u(91)],{"id":"back","addClass":"wide"}]],{}]],{"absPaddingBottom":"bottomHeight"}],D=C[0].call(this,x,y,null,v.mangleIDs(y,C[3]),C[4]),E=D||this
v.set(y,E)
var F=v.get(y+'__timezone_container'),G=v.get(y+'__days'),H=v.get(y+'__back')
if(!w.__jx__jcss_generated){t.generate(x,w.prototype.__jx__fqname,w.__jx__jcss,null,w)
w.__jx__jcss_generated=!0}
var I=(function(){var K=b.__$$__meshim_widget_controllers_DataController,L=b.__$$__meshim_widget_utils_Utils,M=b.__$$__meshim_widget_utils_Strings,N=b.__$$__meshim_widget_components_chatWindow_preChatOfflineForm_operatingHours_Group,O=K.root.$('livechat').$('ui').$('chat_window').$('pre_chat_offline_form').$('stack_index$int'),P=K.root.$('livechat').$('settings').$('operating_hours'),Q=P.$('enabled$bool'),R,S=P.$('mode$string'),T,U=P.$('timezone$int'),V,W=P.$('schedule'),X,Y=P.$('display_notice$bool'),Z,$$={'weekday_weekend':[[1,M.datetime.weekday],[0,M.datetime.weekend]],'daily':[1,2,3,4,5,6,0]}
function $_(){E.autobind(Q,'value',function($c){if(R==$c)return
R=$c
$a()})
E.autobind(S,'value',function($c){if(T==$c)return
T=$c
$a()})
E.autobind(U,'value',function($c){if(V==$c)return
V=$c
$a()})
E.autobind(W,'value',function($c){X=$c
$a()})
E.autobind(Y,'value',function($c){if(Z==$c)return
Z=$c
$a()})
H.on('click',function(){O.update(0)})}
function $a(){if(!R)return
if(!Z)return
if(!T||!$$[T])return
if(isNaN(V)||k(V,!0))return
if(!X)return
F.setText([V<0?'':'+',L.formatMinutesAsHours(V)].join(''))
var $c=$$[T],$d=[],$e
for(var $f in $c)if($c.hasOwnProperty($f)){if(g($c[$f])){$d.push({enabled$bool:X[$c[$f][0]].enabled$bool,periods:X[$c[$f][0]].periods,days:[$c[$f][1]]})}
else{$e=!1
for(var $g=0,$h=$d.length;$g<$h;$g++){if($b($d[$g],X[$c[$f]])){$d[$g].days.push($c[$f])
$e=!0
break}}
if(!$e){$d.push({enabled$bool:X[$c[$f]].enabled$bool,periods:X[$c[$f]].periods,days:[$c[$f]]})}}}
G.empty()
for(var $i=0,$j=$d.length;$i<$j;$i++){new N(G).setData($d[$i])}}
function $b($c,$d){if(!$c.enabled$bool&&!$d.enabled$bool)return !0
if($c.enabled$bool!=$d.enabled$bool)return
var $e=$c.periods,$f=$d.periods,$g=0,$h=0,$i
for($i in $e)if($e.hasOwnProperty($i)){if($e[$i].start$int!==($f[$i]&&$f[$i].start$int)||$e[$i].end$int!==($f[$i]&&$f[$i].end$int)){return}
else{$g++}}
for($i in $f)if($f.hasOwnProperty($i)){$h++}
if($g!=$h)return
return !0}
$_()})()
for(var J in I)if(I.hasOwnProperty(J))E[J]=I[J]
if(E.fire)E.fire('init')
E.setStyle&&E.setStyle(z)
E.setAttributes&&E.setAttributes(B)
if(typeof E.addChildren=='function')E.addChildren(A)
else v.addChildren(E,A)
if(E!==this){E.__jx__constructor=b.__$$__meshim_widget_components_chatWindow_preChatOfflineForm_OperatingHours
E.__jx__native=!1}
return E}
w.prototype=e(b.__$$__meshim_widget_widgets_ChatWindowContent.prototype)
w.prototype.__jx__native=!1
w.prototype.__jx__super=b.__$$__meshim_widget_widgets_ChatWindowContent
w.__jx__jcss={".timezone_container":{"fontWeight":"normal"}}
w.prototype.__jx__fqname_chain=[(w.prototype.__jx__fqname_chain||"")," ","meshim_widget_components_chatWindow_preChatOfflineForm_OperatingHours"].join('')
w.prototype.__jx__fqname="meshim_widget_components_chatWindow_preChatOfflineForm_OperatingHours"
w.prototype.__jx__constructor=w
return w})()
b.__$$__meshim_widget_widgets_card_OfflineFormCard=(function(){var w=b.__$$__meshim_widget_controllers_DataController,x=b.__$$__meshim_widget_widgets_card_TextCard,y=b.__$$__meshim_widget_widgets_Button
function z(A,B,C,D,E){if(!(this instanceof z))return new z(A,B,C,D,E)
x.call(this,A,B,C,D,E)
if(!z.__jx__jcss_generated){t.generate(this,z.prototype.__jx__fqname,z.__jx__jcss,null,z)
z.__jx__jcss_generated=!0}
this.yes=new y(this.defaultPlacement,null,null,[u(157)],{addClass:'button_yes short'})
this.yes.on('click',function(){w.root.$('livechat').$('ui').$('chat_window').$('main_stack_name$string').update('pre_chat_offline_form')})}
z.prototype=e(x.prototype)
z.__jx__jcss={".button_yes":{"display":"block","margin":"0 auto"},"&.minimized":{".button_yes":{"display":"none"}}}
z.prototype.__jx__super=x
z.prototype.update=function(A){x.prototype.update.call(this,A)}
if((typeof z==='function')&&z.prototype&&!z.__jx__no_fqname){z.prototype.__jx__fqname_chain=[(z.prototype.__jx__fqname_chain||"")," ","meshim_widget_widgets_card_OfflineFormCard"].join('')
z.prototype.__jx__fqname="meshim_widget_widgets_card_OfflineFormCard"}
return z})()
b.__$$__meshim_widget_components_chatWindow_settingsMenu_EmailTranscript=(function(){function w(x,y,z,A,B){if(!(this instanceof w))return new w(x,y,z,A,B)
y=y||v.generateID()
var C=[b.__$$__meshim_widget_widgets_menu_Item,null,null,[[b.__$$__jx_ui_Label,null,null,[u(126)],{}]],{}],D=C[0].call(this,x,y,null,v.mangleIDs(y,C[3]),C[4]),E=D||this
v.set(y,E)
if(!w.__jx__jcss_generated){t.generate(x,w.prototype.__jx__fqname,w.__jx__jcss,null,w)
w.__jx__jcss_generated=!0}
var F=(function(){var H=b.__$$__meshim_widget_controllers_DataController,I=H.root.$('livechat').$('ui').$('chat_window').$('menu_stack_name$string')
function J(){E.on('click',function(){I.update('email_transcript_menu')})}
J()})()
for(var G in F)if(F.hasOwnProperty(G))E[G]=F[G]
if(E.fire)E.fire('init')
E.setStyle&&E.setStyle(z)
E.setAttributes&&E.setAttributes(B)
if(typeof E.addChildren=='function')E.addChildren(A)
else v.addChildren(E,A)
if(E!==this){E.__jx__constructor=b.__$$__meshim_widget_components_chatWindow_settingsMenu_EmailTranscript
E.__jx__native=!1}
return E}
w.prototype=e(b.__$$__meshim_widget_widgets_menu_Item.prototype)
w.prototype.__jx__native=!1
w.prototype.__jx__super=b.__$$__meshim_widget_widgets_menu_Item
w.__jx__jcss={"**self":{}}
w.prototype.__jx__fqname_chain=[(w.prototype.__jx__fqname_chain||"")," ","meshim_widget_components_chatWindow_settingsMenu_EmailTranscript"].join('')
w.prototype.__jx__fqname="meshim_widget_components_chatWindow_settingsMenu_EmailTranscript"
w.prototype.__jx__constructor=w
return w})()
b.__$$__meshim_widget_widgets_ButtonBar=(function(){function w(x,y,z,A,B){if(!(this instanceof w))return new w(x,y,z,A,B)
y=y||v.generateID()
var C=[b.__$$__jx_ui_ButtonBar,null,null,[],{"selectable":"false"}],D=C[0].call(this,x,y,null,v.mangleIDs(y,C[3]),C[4]),E=D||this
v.set(y,E)
if(!w.__jx__jcss_generated){t.generate(x,w.prototype.__jx__fqname,w.__jx__jcss,null,w)
w.__jx__jcss_generated=!0}
var F=(function(){})()
for(var G in F)if(F.hasOwnProperty(G))E[G]=F[G]
if(E.fire)E.fire('init')
E.setStyle&&E.setStyle(z)
E.setAttributes&&E.setAttributes(B)
if(typeof E.addChildren=='function')E.addChildren(A)
else v.addChildren(E,A)
if(E!==this){E.__jx__constructor=b.__$$__meshim_widget_widgets_ButtonBar
E.__jx__native=!1}
return E}
w.prototype=e(b.__$$__jx_ui_ButtonBar.prototype)
w.prototype.__jx__native=!1
w.prototype.__jx__super=b.__$$__jx_ui_ButtonBar
w.__jx__jcss={".option":{"cursor":"pointer","display":"inline-block","textAlign":"center","&:first-child":{},"&:last-child":{},"&.active":{"cursor":"default"},"&:hover":{},"&.disabled":{"cursor":"default","&.active":{"cursor":"default"},"&:hover":{"cursor":"default"}}}}
w.prototype.__jx__fqname_chain=[(w.prototype.__jx__fqname_chain||"")," ","meshim_widget_widgets_ButtonBar"].join('')
w.prototype.__jx__fqname="meshim_widget_widgets_ButtonBar"
w.prototype.__jx__constructor=w
return w})()
b.__$$__meshim_widget_components_chatWindow_settingsMenu_SendFile=(function(){function w(x,y,z,A,B){if(!(this instanceof w))return new w(x,y,z,A,B)
y=y||v.generateID()
var C=[b.__$$__meshim_widget_widgets_menu_Item,null,null,[[b.__$$__meshim_widget_widgets_FileUploader,"file_form",null,[[b.__$$__jx_ui_Input,"file_input",null,[],{"id":"file_input","name":"file[]","type":"file","multiple":"true","addClass":"file_input","tabIndex":"-1"}]],{"id":"file_form"}],[b.__$$__jx_ui_Label,null,null,[u(125)],{}]],{}],D=C[0].call(this,x,y,null,v.mangleIDs(y,C[3]),C[4]),E=D||this
v.set(y,E)
var F=v.get(y+'__file_form'),G=v.get(y+'__file_input')
if(!w.__jx__jcss_generated){t.generate(x,w.prototype.__jx__fqname,w.__jx__jcss,null,w)
w.__jx__jcss_generated=!0}
var H=(function(){var J=b.__$$__meshim_widget_Config,K=b.__$$__meshim_common_FileUtil,L=b.__$$__meshim_common_QueryString,M=b.__$$__meshim_widget_controllers_ConnectionController,N=b.__$$__meshim_widget_controllers_DataController,O=N.root.$('livechat'),P=O.$$('profile.mid$string'),Q=O.$$('profile.uid$string'),R=O.$('settings').$('package'),S,T=O.$('ui').$('chat_window').$('chat_panel').$('file_toast'),U=O.$('ui').$('chat_window').$('menu_stack_name$string')
function V(){E.on('click',function(){S&&G.click()})
G.on('change',function(){if(!S||!G.getValue())return
var X=[],Y=[],Z=0,$$=G.dom.files
if($$){for(var $_=0,$a=$$.length;$_<$a;$_++){if(K.isValidType($$[$_].type)){X.push($$[$_].name)
Y.push($$[$_].type)
Z+=$$[$_].size||0}
else{T.update({'error$string':'type'})
G.setValue('')
return}}
if(Z>J.FILE_UPLOAD_MAX){T.update({'error$string':'size'})
G.setValue('')
return}
X=X.join(', ')
Y=Y.join(', ')}
else{$$=G.dom.value||''
if(!$$)return
X=$$.substr($$.lastIndexOf('\\')+1)
Y=X.substr(X.lastIndexOf('.')+1)
if(!K.isValidType(!1,X)){T.update({'error$string':'type'})
G.setValue('')
return}}
var $b=N.livechat.sendFile({file_name:X,file_type:Y,file_size:Z}),$c={ts:$b,mid:P.getValue(),uid:Q.getValue()},$d='https://'+M.getHost()+J.FILE_UPLOAD_PATH+'?'+L.buildQuery($c)
F.setPath($d)
U.update('')
F.submit()
G.setValue('')})
var W
E.autobind(R,'value',function(X){if(!X)return
W=R.getValue()
if(W['color_customization_enabled$int']||W['widget_customization_enabled$int']){S=!0
E.setDisplay('')}
else{S=!1
E.setDisplay('none')}})}
V()})()
for(var I in H)if(H.hasOwnProperty(I))E[I]=H[I]
if(E.fire)E.fire('init')
E.setStyle&&E.setStyle(z)
E.setAttributes&&E.setAttributes(B)
if(typeof E.addChildren=='function')E.addChildren(A)
else v.addChildren(E,A)
if(E!==this){E.__jx__constructor=b.__$$__meshim_widget_components_chatWindow_settingsMenu_SendFile
E.__jx__native=!1}
return E}
w.prototype=e(b.__$$__meshim_widget_widgets_menu_Item.prototype)
w.prototype.__jx__native=!1
w.prototype.__jx__super=b.__$$__meshim_widget_widgets_menu_Item
w.__jx__jcss={".file_input":{"position":"absolute","top, right":0,"border":"solid transparent","borderWidth":"0 0 100px 1000px","opacity":"0.5","visibility":"hidden","zIndex":1}}
w.prototype.__jx__fqname_chain=[(w.prototype.__jx__fqname_chain||"")," ","meshim_widget_components_chatWindow_settingsMenu_SendFile"].join('')
w.prototype.__jx__fqname="meshim_widget_components_chatWindow_settingsMenu_SendFile"
w.prototype.__jx__constructor=w
return w})()
b.__$$__meshim_widget_components_chatWindow_settingsMenu_About=(function(){function w(x,y,z,A,B){if(!(this instanceof w))return new w(x,y,z,A,B)
y=y||v.generateID()
var C=[b.__$$__meshim_widget_widgets_menu_Item,null,null,[[b.__$$__jx_ui_Label,null,null,[u(124)],{}]],{}],D=C[0].call(this,x,y,null,v.mangleIDs(y,C[3]),C[4]),E=D||this
v.set(y,E)
if(!w.__jx__jcss_generated){t.generate(x,w.prototype.__jx__fqname,w.__jx__jcss,null,w)
w.__jx__jcss_generated=!0}
var F=(function(){var H=b.__$$__meshim_widget_controllers_DataController,I=H.root.$('livechat').$('ui').$('chat_window').$('main_stack_name$string')
function J(){E.on('click',function(){I.update('about_panel')})}
J()})()
for(var G in F)if(F.hasOwnProperty(G))E[G]=F[G]
if(E.fire)E.fire('init')
E.setStyle&&E.setStyle(z)
E.setAttributes&&E.setAttributes(B)
if(typeof E.addChildren=='function')E.addChildren(A)
else v.addChildren(E,A)
if(E!==this){E.__jx__constructor=b.__$$__meshim_widget_components_chatWindow_settingsMenu_About
E.__jx__native=!1}
return E}
w.prototype=e(b.__$$__meshim_widget_widgets_menu_Item.prototype)
w.prototype.__jx__native=!1
w.prototype.__jx__super=b.__$$__meshim_widget_widgets_menu_Item
w.__jx__jcss={}
w.prototype.__jx__fqname_chain=[(w.prototype.__jx__fqname_chain||"")," ","meshim_widget_components_chatWindow_settingsMenu_About"].join('')
w.prototype.__jx__fqname="meshim_widget_components_chatWindow_settingsMenu_About"
w.prototype.__jx__constructor=w
return w})()
b.__$$__meshim_widget_components_chatWindow_settingsMenu_Cookies=(function(){function w(x,y,z,A,B){if(!(this instanceof w))return new w(x,y,z,A,B)
y=y||v.generateID()
var C=[b.__$$__meshim_widget_widgets_menu_Item,null,null,[[b.__$$__meshim_widget_widgets_menu_IconFont,"icon",null,[],{"id":"icon"}],[b.__$$__jx_ui_Label,null,null,[u(123)],{}]],{}],D=C[0].call(this,x,y,null,v.mangleIDs(y,C[3]),C[4]),E=D||this
v.set(y,E)
var F=v.get(y+'__icon')
if(!w.__jx__jcss_generated){t.generate(x,w.prototype.__jx__fqname,w.__jx__jcss,null,w)
w.__jx__jcss_generated=!0}
var G=(function(){var I=b.__$$__meshim_widget_controllers_DataController,J=I.root.$('livechat'),K=J.$('profile'),L=K.$('allow_cookies$bool'),M=J.$('settings').$('cookie_law').$('enabled$bool'),N=J.$('ui').$('chat_window').$('main_stack_name$string')
function O(){E.on('click',function(){if(L.getValue())N.update('cookie_form')})
E.autobind(L,'value',function(Q){F.setIcon(Q)
P()})
E.autobind(M,'value',P)}
function P(){if(M.getValue()&&L.getValue()){E.setDisplay('')}
else{E.setDisplay('none')}}
O()})()
for(var H in G)if(G.hasOwnProperty(H))E[H]=G[H]
if(E.fire)E.fire('init')
E.setStyle&&E.setStyle(z)
E.setAttributes&&E.setAttributes(B)
if(typeof E.addChildren=='function')E.addChildren(A)
else v.addChildren(E,A)
if(E!==this){E.__jx__constructor=b.__$$__meshim_widget_components_chatWindow_settingsMenu_Cookies
E.__jx__native=!1}
return E}
w.prototype=e(b.__$$__meshim_widget_widgets_menu_Item.prototype)
w.prototype.__jx__native=!1
w.prototype.__jx__super=b.__$$__meshim_widget_widgets_menu_Item
w.__jx__jcss={"**self":{}}
w.prototype.__jx__fqname_chain=[(w.prototype.__jx__fqname_chain||"")," ","meshim_widget_components_chatWindow_settingsMenu_Cookies"].join('')
w.prototype.__jx__fqname="meshim_widget_components_chatWindow_settingsMenu_Cookies"
w.prototype.__jx__constructor=w
return w})()
b.__$$__meshim_widget_controllers_ThemeController=(function(){var w=b.__$$__jx_core_ObjectUtil,x=b.__$$__meshim_widget_controllers_DataController,y=b.__$$__meshim_widget_controllers_ConnectionController,z=b.__$$__meshim_widget_controllers_DefaultDataNode,A=b.__$$__meshim_widget_Themes,B=b.__$$__meshim_widget_themes_Overrides,C=b.__$$__meshim_widget_utils_Utils,D={},E={},F,G='standard',H='popout',I='mobile',J=20
D.init=function(){var K=x.root.$('livechat').$('settings').$('theme'),L=K.$('name$string'),M,N=x.root.$('livechat').$('ui'),O=N.$('theme_reload$bool'),P=N.$('theme_loaded$bool'),Q=x.root.$('connection').$('message$string'),R=x.root.$('connection').$('status$string')
F=x.root.$$('tmp.api_settings.theme')
var S=N.$('popout$bool').getValue(),T=N.$('mobile$bool').getValue(),U=N.$('mockup$bool').getValue()
if(!(T&&!S)){t.generateAll('no_reload')}
Q.bindValue(V)
function V($$){if($$!='fast_init')return
X()}
R.bindValue(W)
function W($$){if($$!='reattached'&&$$!='cookie_law')return
Q.unbindValue(V)
R.unbindValue(W)
X()}
function X(){Y(!0)}
K.bindValue(function(){Y()})
L.bindValue(function(){Y()})
O.bindValue(function($$){$$&&Y(!0)})
function Y($$){var $_=K.getValue()
if(!$_||!$_['name$string'])return
if(M==$_['name$string']&&!$$)return
var $a=A[$_['name$string']]
if(!$a||!$a.generate)return
var $b=J,$c,$d=[],$e=[]
do {$d.push($a.defaults||{})
$e.push($a.overrides||{})} while($a._super&&($a=$a._super))

var $f=w.clone(z.livechat.settings.theme)
while($d.length){C.fullyExtend($f,$d.pop())}
var $g=y.getServerSettings()
$g=$g&&$g.theme
C.fullyExtend($f,$g||$_)
C.fullyExtend($f,F.getValue())
while($e.length){C.fullyExtend($f,$e.pop())}
$f['name$string']=$_['name$string']
if(S)C.fullyExtend($f,B.popout)
if(T)C.fullyExtend($f,B.mobile)
if(!x.livechat.getLimit()){$f.colors.banner$string=$f.colors.primary$string
if($a.defaults&&$a.defaults.colors&&$a.defaults.colors.primary$string){$f.colors.bubble$string=$a.defaults.colors.primary$string}}
M=$f['name$string']
var $h
if(w.equal($f,E)){$h=!0}
E=$f
K.update($f)
if($h)return
$a=A[M]
var $i=J
if(U){do {t.delPalette($i)} while($i--)
}
else{t.delPalettes()}
do {$c=$a.generate($f)
T&&$c[I]&&t.setPalette($c[I],'widget_mobile_'+$b,($b--))
S&&$c[H]&&t.setPalette($c[H],'widget_popout_'+$b,($b--))
t.setPalette($c[G],'widget_'+$b,($b--))} while($a._super&&($a=$a._super))

t.on('write',Z)
t.reload()}
function Z(){P.update(!0)
t.un('write',Z)}}
if((typeof D==='function')&&D.prototype&&!D.__jx__no_fqname){D.prototype.__jx__fqname_chain=[(D.prototype.__jx__fqname_chain||"")," ","meshim_widget_controllers_ThemeController"].join('')
D.prototype.__jx__fqname="meshim_widget_controllers_ThemeController"}
return D})()
b.__$$__meshim_widget_components_chatWindow_EndChatMenu=(function(){function w(x,y,z,A,B){if(!(this instanceof w))return new w(x,y,z,A,B)
y=y||v.generateID()
var C=[b.__$$__meshim_widget_widgets_Menu,null,null,[[b.__$$__meshim_widget_widgets_menu_Section,null,null,[[b.__$$__jx_ui_Widget,"message",null,[],{"id":"message","addClass":"message"}],[b.__$$__meshim_widget_widgets_Controls,null,null,[[b.__$$__meshim_widget_widgets_Button,"end_chat",null,[u(31)],{"id":"end_chat","addClass":"short"}],[b.__$$__meshim_widget_widgets_Button,"cancel",null,[u(29)],{"id":"cancel","addClass":"secondary short"}]],{}]],{"addClass":"flow"}]],{}],D=C[0].call(this,x,y,null,v.mangleIDs(y,C[3]),C[4]),E=D||this
v.set(y,E)
var F=v.get(y+'__message'),G=v.get(y+'__end_chat'),H=v.get(y+'__cancel')
if(!w.__jx__jcss_generated){t.generate(x,w.prototype.__jx__fqname,w.__jx__jcss,null,w)
w.__jx__jcss_generated=!0}
var I=(function(){var K=b.__$$__meshim_widget_controllers_DataController,L=b.__$$__meshim_widget_utils_Strings,M=K.root.$('livechat').$('ui').$('chat_window').$('menu_stack_name$string'),N=K.root.$('livechat').$('settings').$('end_chat_menu').$('message$string')
function O(){E.autobind(N,'value',function(P){F.setText(P||L.end_chat_menu_message||'')})
G.on('click',function(){K.livechat.endChat()
E.hide()})
H.on('click',function(){M.update('')})}
O()})()
for(var J in I)if(I.hasOwnProperty(J))E[J]=I[J]
if(E.fire)E.fire('init')
E.setStyle&&E.setStyle(z)
E.setAttributes&&E.setAttributes(B)
if(typeof E.addChildren=='function')E.addChildren(A)
else v.addChildren(E,A)
if(E!==this){E.__jx__constructor=b.__$$__meshim_widget_components_chatWindow_EndChatMenu
E.__jx__native=!1}
return E}
w.prototype=e(b.__$$__meshim_widget_widgets_Menu.prototype)
w.prototype.__jx__native=!1
w.prototype.__jx__super=b.__$$__meshim_widget_widgets_Menu
w.__jx__jcss={".message":{"marginBottom":"10px"}}
w.prototype.__jx__fqname_chain=[(w.prototype.__jx__fqname_chain||"")," ","meshim_widget_components_chatWindow_EndChatMenu"].join('')
w.prototype.__jx__fqname="meshim_widget_components_chatWindow_EndChatMenu"
w.prototype.__jx__constructor=w
return w})()
b.__$$__meshim_widget_components_chatWindow_settingsMenu_Sound=(function(){function w(x,y,z,A,B){if(!(this instanceof w))return new w(x,y,z,A,B)
y=y||v.generateID()
var C=[b.__$$__meshim_widget_widgets_menu_Item,null,null,[[b.__$$__meshim_widget_widgets_menu_IconFont,"icon_sound",null,[],{"id":"icon_sound"}],[b.__$$__jx_ui_Label,null,null,[u(122)],{}]],{}],D=C[0].call(this,x,y,null,v.mangleIDs(y,C[3]),C[4]),E=D||this
v.set(y,E)
var F=v.get(y+'__icon_sound')
if(!w.__jx__jcss_generated){t.generate(x,w.prototype.__jx__fqname,w.__jx__jcss,null,w)
w.__jx__jcss_generated=!0}
var G=(function(){var I=b.__$$__meshim_widget_controllers_DataController,J=b.__$$__meshim_widget_controllers_SoundController,K=I.root.$('livechat').$('profile'),L=K.$('notification').$('sound$bool')
function M(){E.on('click',function(){L.update(!J.isSoundEnabled())})
E.autobind(L,'value',function(){F.setIcon(J.isSoundEnabled()?'sound_on':'sound_off',!0)})}
M()})()
for(var H in G)if(G.hasOwnProperty(H))E[H]=G[H]
if(E.fire)E.fire('init')
E.setStyle&&E.setStyle(z)
E.setAttributes&&E.setAttributes(B)
if(typeof E.addChildren=='function')E.addChildren(A)
else v.addChildren(E,A)
if(E!==this){E.__jx__constructor=b.__$$__meshim_widget_components_chatWindow_settingsMenu_Sound
E.__jx__native=!1}
return E}
w.prototype=e(b.__$$__meshim_widget_widgets_menu_Item.prototype)
w.prototype.__jx__native=!1
w.prototype.__jx__super=b.__$$__meshim_widget_widgets_menu_Item
w.__jx__jcss={"**self":{},"&.mobile":{"display":"none"}}
w.prototype.__jx__fqname_chain=[(w.prototype.__jx__fqname_chain||"")," ","meshim_widget_components_chatWindow_settingsMenu_Sound"].join('')
w.prototype.__jx__fqname="meshim_widget_components_chatWindow_settingsMenu_Sound"
w.prototype.__jx__constructor=w
return w})()
b.__$$__meshim_widget_widgets_Input=(function(){var w=b.__$$__jx_ui_Input,x=w,y=b.__$$__jx_ui_Widget,z=b.__$$__meshim_widget_controllers_DataController,A=b.__$$__meshim_widget_widgets_input_InvalidIcon,B=b.__$$__meshim_widget_utils_BindClass
w=function(C,D,E,F,G){if(!(this instanceof w))return new w(C,D,E,F,G)
if(!w.__jx__jcss_generated){t.generate(this,w.prototype.__jx__fqname,w.__jx__jcss,null,w)
w.__jx__jcss_generated=!0}
x.call(this,C,D,E,F,G)
w.__constructor.call(this)}
w.__constructor=function(){B.mobile(this)
B.rtl(this)
var C=z.root.$('livechat').$('ui').$('mobile$bool').getValue(),D=this
if(C&&this.hasClass('mobile_error_icon')){this.pContainer=new y(this.parentNode,null,null,null,{position:"relative"})
this.pContainer.appendChild(this)
this.invalidIcon=new A(this.pContainer)
this.on('blur',E)
E()}
function E(){l(F)}
function F(){D.invalidIcon.setDisplay(D.getValidity()?'none':'')}}
w.__jx__jcss={"**self":{"display":"block","appearance":"none","*overflow":"visible","width":"100%","color":"$$inputColor","background":"$$inputBg","padding":"$$inputPadding","borderWidth":"$$inputBorderWidth","borderStyle":"$$inputBorderStyle","borderColor":"$$inputBorderColor","borderRadius":"$$inputRadius","boxShadow":"$$inputShadow"},"&:focus, &.focus":{"color":"$$inputFocusColor","background":"$$inputFocusBg","borderColor":"$$inputFocusBorderColor","boxShadow":"$$inputFocusShadow","outline":"none"},"&::placeholder":{"color":"$$inputPlaceholderColor","fontStyle":"$$inputPlaceholderFontStyle"},"&.invalid":{"color":"$$inputInvalidColor","background":"$$inputInvalidBg","borderColor":"$$inputInvalidBorderColor","boxShadow":"$$inputInvalidShadow"},"&.invalid.mobile":{"paddingRight":"30px"},"&.invalid.rtl.mobile":{"paddingRight":"$$inputPadding","paddingLeft":"30px"},"&.unstyled":{"border":"none","background":"transparent","boxShadow":"none"},"&.standalone":{"marginTop":"10px","marginBottom":"5px"}}
w.prototype=e(x.prototype)
w.prototype.__jx__super=x
if((typeof w==='function')&&w.prototype&&!w.__jx__no_fqname){w.prototype.__jx__fqname_chain=[(w.prototype.__jx__fqname_chain||"")," ","meshim_widget_widgets_Input"].join('')
w.prototype.__jx__fqname="meshim_widget_widgets_Input"}
return w})()
b.__$$__meshim_widget_components_chatButton_BubbleRenderer=(function(){function w(x,y,z,A,B){if(!(this instanceof w))return new w(x,y,z,A,B)
y=y||v.generateID()
var C=[b.__$$__jx_ui_Widget,null,null,[[b.__$$__meshim_widget_components_chatButton_BubbleVector,"bubble_vector",null,[],{"id":"bubble_vector","position":"absolute"}],[b.__$$__jx_ui_Widget,null,null,[[b.__$$__meshim_widget_widgets_IconFont,"close",null,[],{"id":"close","icon":"cross","addClass":"close","title":u(36)}],[b.__$$__jx_ui_Widget,"bubble_title_container",null,[],{"id":"bubble_title_container","class":"bubble_title"}],[b.__$$__jx_ui_Widget,"bubble_text_container",null,[],{"id":"bubble_text_container","class":"bubble_text"}]],{"class":"bubble_text_wrapper"}]],{"visibility":"hidden"}],D=C[0].call(this,x,y,null,v.mangleIDs(y,C[3]),C[4]),E=D||this
v.set(y,E)
var F=v.get(y+'__bubble_vector'),G=v.get(y+'__close'),H=v.get(y+'__bubble_title_container'),I=v.get(y+'__bubble_text_container')
if(!w.__jx__jcss_generated){t.generate(x,w.prototype.__jx__fqname,w.__jx__jcss,null,w)
w.__jx__jcss_generated=!0}
var J=(function(){var L=b.__$$__meshim_widget_controllers_DataController,M=b.__$$__meshim_widget_controllers_UIController,N=b.__$$__meshim_widget_utils_BindClass,O=b.__$$__meshim_widget_utils_Strings,P=b.__$$__meshim_common_Color,Q=L.root.$('livechat'),R=Q.$('settings'),S=Q.$('ui'),T=S.$('chat_button'),U=T.$('display$bool'),V,W=T.$('bubble').$('display$bool'),X,Y=S.$('theme_loaded$bool'),Z=R.$('bubble'),$$=Z.$('title$string'),$_,$a=Z.$('text$string'),$b,$c=R.$('theme').$('colors').$('bubble$string'),$d,$e,$f=T.$('button_width$int'),$g=T.$('bubble_height$int'),$h,$i
function $j(){N.rtl(E)
E.autobind(U,'value',function($m){if(V==$m)return
V=$m
$k()})
E.autobind(W,'value',function($m){if(X==$m)return
X=$m
$k()})
E.autobind($$,'value',function($m){if($_==$m)return
$_=$m
H.setText(O.get($$))
$k()})
E.autobind($a,'value',function($m){if($b==$m)return
$b=$m
I.setText(O.get($a))
I.setDisplay($m?'':'none')
$k()})
E.autobind($c,'value',function($m){if(!$m)return
if($d==$m)return
$d=$m})
E.autobind(Y,'value',function($m){if(!$m)return
if($e!=$d){$e=$d
var $n=new P($e)
F.setFill('linear top '+'from('+$n.lighten(0.1).toRGB()+') '+'to('+$n.darken(0.2).toRGB()+') ')}
$k()})
E.autobind($f,'value',function($m){if(!$m)return
$k()})
G.on('click',function($m){$m.stopPropagation()
M.userHideBubble()})}
function $k(){if($h)return
$h=window.setTimeout($l,0)
if(p.isIE==8){E.setVisibility('')}}
function $l(){$h=null
if(!V||!X){return}
var $m=$f.getValue()
if(!$m){return}
var $n=E.getHeight()
if(!$n){return}
F.setDimension($m,$n)
$g.update(E.getHeight())
if(!$i){E.setVisibility('')
$i=!0}}
$j()})()
for(var K in J)if(J.hasOwnProperty(K))E[K]=J[K]
if(E.fire)E.fire('init')
E.setStyle&&E.setStyle(z)
E.setAttributes&&E.setAttributes(B)
if(typeof E.addChildren=='function')E.addChildren(A)
else v.addChildren(E,A)
if(E!==this){E.__jx__constructor=b.__$$__meshim_widget_components_chatButton_BubbleRenderer
E.__jx__native=!1}
return E}
w.prototype=e(b.__$$__jx_ui_Widget.prototype)
w.prototype.__jx__native=!1
w.prototype.__jx__super=b.__$$__jx_ui_Widget
w.__jx__jcss={"**self":{"position":"relative"},".bubble_text_wrapper":{"position":"relative","padding":"10px 12px 26px"},".bubble_title":{"position":"relative","zIndex":"1","fontSize":"$$fontSizeL","fontWeight":"bold","color":"$$chatBubbleTitleColor","whiteSpace":"pre-wrap"},".bubble_text":{"position":"relative","zIndex":"1","marginTop":"5px","fontSize":"12px","fontStyle":"italic","color":"$$chatBubbleTextColor","whiteSpace":"pre-wrap"},".close":{"float":"right","position":"relative","top":"-1px","left":"5px","padding":"6px 4px 2px","zIndex":"2","color":"$$chatBubbleCloseColor","textShadow":"$$chatBubbleCloseShadow","radius":"$$radius","&:hover":{"background":"$$chatBubbleCloseHoverBg"}},"&.rtl .close":{"float":"left","left":"auto","right":"5px"}}
w.prototype.__jx__fqname_chain=[(w.prototype.__jx__fqname_chain||"")," ","meshim_widget_components_chatButton_BubbleRenderer"].join('')
w.prototype.__jx__fqname="meshim_widget_components_chatButton_BubbleRenderer"
w.prototype.__jx__constructor=w
return w})()
b.__$$__meshim_widget_components_chatWindow_settingsMenu_Profile=(function(){function w(x,y,z,A,B){if(!(this instanceof w))return new w(x,y,z,A,B)
y=y||v.generateID()
var C=[b.__$$__meshim_widget_widgets_menu_Item,null,null,[[b.__$$__jx_ui_Label,"logged_out",null,[u(121)],{"id":"logged_out"}],[b.__$$__jx_ui_Label,"name",null,[],{"id":"name","addClass":"logged_in_name"}]],{}],D=C[0].call(this,x,y,null,v.mangleIDs(y,C[3]),C[4]),E=D||this
v.set(y,E)
var F=v.get(y+'__logged_out'),G=v.get(y+'__name')
if(!w.__jx__jcss_generated){t.generate(x,w.prototype.__jx__fqname,w.__jx__jcss,null,w)
w.__jx__jcss_generated=!0}
var H=(function(){var J=b.__$$__meshim_widget_controllers_DataController,K=b.__$$__meshim_widget_utils_Utils,L=J.root.$('livechat'),M=L.$('profile'),N=M.$('logged_in$bool'),O,P=M.$('display_name$string'),Q,R=L.$('ui').$('chat_window').$('menu_stack_name$string'),S=L.$('settings').$('login').$('restrict_profile$bool')
function T(){E.on('click',function(V){V.stopPropagation()
R.update('profile_menu')})
E.autobind(N,'value',function(V){O=V
U()})
E.autobind(P,'value',function(V){Q=V||''
U()})
E.autobind(S,'value',function(V){E.setDisplay(V?'none':'')})
u&&u.onLanguage&&u.onLanguage(U)}
function U(){if(O){if(Q&&!K.isDefaultName(Q)){G.setText(u(119).replace('<name>',Q))}
else{G.setText(u(120))}
F.setDisplay('none')
G.setDisplay('')}
else{F.setDisplay('')
G.setDisplay('none')}}
T()})()
for(var I in H)if(H.hasOwnProperty(I))E[I]=H[I]
if(E.fire)E.fire('init')
E.setStyle&&E.setStyle(z)
E.setAttributes&&E.setAttributes(B)
if(typeof E.addChildren=='function')E.addChildren(A)
else v.addChildren(E,A)
if(E!==this){E.__jx__constructor=b.__$$__meshim_widget_components_chatWindow_settingsMenu_Profile
E.__jx__native=!1}
return E}
w.prototype=e(b.__$$__meshim_widget_widgets_menu_Item.prototype)
w.prototype.__jx__native=!1
w.prototype.__jx__super=b.__$$__meshim_widget_widgets_menu_Item
w.__jx__jcss={"**self":{"display":"none"},"&.mobile":{"display":"block"}}
w.prototype.__jx__fqname_chain=[(w.prototype.__jx__fqname_chain||"")," ","meshim_widget_components_chatWindow_settingsMenu_Profile"].join('')
w.prototype.__jx__fqname="meshim_widget_components_chatWindow_settingsMenu_Profile"
w.prototype.__jx__constructor=w
return w})()
b.__$$__meshim_widget_widgets_FakeInput=(function(){var w=b.__$$__jx_ui_Widget,x=b.__$$__meshim_widget_widgets_Input
function y(z,A,B,C,D){if(!(this instanceof y))return new y(z,A,B,C,D)
if(!y.__jx__jcss_generated){t.generate(this,y.prototype.__jx__fqname,y.__jx__jcss,null,y)
y.__jx__jcss_generated=!0}
if(!D)D={}
D.tagName||(D.tagName='div')
w.call(this,z,A,B,C,D)
x.__constructor.call(this)}
y.__jx__jcss={}
y.prototype=e(w.prototype)
y.prototype.__jx__super=x
if((typeof y==='function')&&y.prototype&&!y.__jx__no_fqname){y.prototype.__jx__fqname_chain=[(y.prototype.__jx__fqname_chain||"")," ","meshim_widget_widgets_FakeInput"].join('')
y.prototype.__jx__fqname="meshim_widget_widgets_FakeInput"}
return y})()
b.__$$__meshim_widget_components_chatWindow_profileMenu_Login=(function(){function w(x,y,z,A,B){if(!(this instanceof w))return new w(x,y,z,A,B)
y=y||v.generateID()
var C=[b.__$$__jx_ui_Widget,null,null,[[b.__$$__meshim_widget_widgets_menu_Section,"external_section",null,[[b.__$$__meshim_widget_widgets_menu_Header,null,null,[u(128)],{"addClass":"item"}],[b.__$$__jx_ui_Widget,"types",null,[],{"id":"types","addClass":"external_types"}]],{"id":"external_section"}],[b.__$$__meshim_widget_widgets_menu_Section,"email",null,[[b.__$$__meshim_widget_widgets_menu_Item,null,null,[u(129)],{}]],{"id":"email","addClass":"border_top"}]],{}],D=C[0].call(this,x,y,null,v.mangleIDs(y,C[3]),C[4]),E=D||this
v.set(y,E)
var F=v.get(y+'__external_section'),G=v.get(y+'__types'),H=v.get(y+'__email')
if(!w.__jx__jcss_generated){t.generate(x,w.prototype.__jx__fqname,w.__jx__jcss,null,w)
w.__jx__jcss_generated=!0}
var I=(function(){var K=b.__$$__meshim_widget_controllers_DataController,L=b.__$$__meshim_widget_widgets_iconFont_Auth,M=b.__$$__meshim_widget_widgets_iconFont_AuthButton,N=b.__$$__meshim_widget_widgets_menu_Item,O=b.__$$__meshim_widget_utils_Strings,P=b.__$$__meshim_widget_utils_BindClass,Q=b.__$$__jx_ui_Label,R=K.root.$('livechat').$('settings').$('login').$('allowed_types'),S=K.root.$('livechat').$('ui').$('chat_window').$('profile_menu').$('index$int'),T=K.root.$$('livechat.ui.mobile$bool'),U,V={'facebook':null,'twitter':null,'google':null}
function W(){P.mobile(E)
U=T.getValue()
for(var Y in V)if(V.hasOwnProperty(Y)){if(U){V[Y]=new M(G,null,null,null,{name:Y,addClass:'float '+Y,icon:Y+'_out'})}
else{V[Y]=new N(G,null,null,null,{name:Y})
new L(V[Y],null,null,null,{addClass:'menu_icon',icon:Y})
new Q(V[Y],null,null,[O.external_login[Y]||Y],{addClass:'label'})}}
E.autobind(R,'value',X)
G.on('click',function(Z){var $$=Z.target.jx_wrapper
if($$==G)return
while($$.parentNode!=G)$$=$$.parentNode
var $_=$$.getName&&$$.getName()
$_&&K.livechat.doExternalLogin($_)})
H.on('click',function(){S.update(2)})}
function X(){var Y=R.getValue()
if(!Y)return
U=T.getValue()
H.setDisplay(Y['email$bool']?'':'none')
var Z,$$
for(var $_ in V)if(V.hasOwnProperty($_)){$$=Y[$_+'$bool']
V[$_].setDisplay($$?'':'none')
U&&$$&&V[$_].setDisplay('inline-block')
$$&&(Z=!0)}
F.setDisplay(Z?'':'none')}
W()})()
for(var J in I)if(I.hasOwnProperty(J))E[J]=I[J]
if(E.fire)E.fire('init')
E.setStyle&&E.setStyle(z)
E.setAttributes&&E.setAttributes(B)
if(typeof E.addChildren=='function')E.addChildren(A)
else v.addChildren(E,A)
if(E!==this){E.__jx__constructor=b.__$$__meshim_widget_components_chatWindow_profileMenu_Login
E.__jx__native=!1}
return E}
w.prototype=e(b.__$$__jx_ui_Widget.prototype)
w.prototype.__jx__native=!1
w.prototype.__jx__super=b.__$$__jx_ui_Widget
w.__jx__jcss={".meshim_widget_widgets_menu_Item":{".label":{"marginLeft":"10px"},"&:hover":{"&[name=facebook] .menu_icon":{"color":"$$facebook"},"&[name=twitter]  .menu_icon":{"color":"$$twitter"},"&[name=google]   .menu_icon":{"color":"$$google"}},"&[name=facebook] .menu_icon":{"top":"1px"},"&[name=google]   .menu_icon":{"top":"2px"}},".menu_icon":{"position":"relative","float":"left","fontSize":"$$fontSizeXL","color":"$$menuHeaderColor"},"&.mobile":{".external_types":{"margin":"$$menuItemPadding"}}}
w.prototype.__jx__fqname_chain=[(w.prototype.__jx__fqname_chain||"")," ","meshim_widget_components_chatWindow_profileMenu_Login"].join('')
w.prototype.__jx__fqname="meshim_widget_components_chatWindow_profileMenu_Login"
w.prototype.__jx__constructor=w
return w})()
b.__$$__meshim_widget_widgets_EmailField=(function(){var w=b.__$$__jx_ui_EmailField,x=w,y=b.__$$__meshim_widget_widgets_Input
w=function(z,A,B,C,D){if(!(this instanceof w))return new w(z,A,B,C,D)
if(!w.__jx__jcss_generated){t.generate(this,w.prototype.__jx__fqname,w.__jx__jcss,null,w)
w.__jx__jcss_generated=!0}
x.call(this,z,A,B,C,D)
y.__constructor.call(this)}
w.__jx__jcss={}
w.prototype=e(x.prototype)
w.prototype.__jx__super=y
if((typeof w==='function')&&w.prototype&&!w.__jx__no_fqname){w.prototype.__jx__fqname_chain=[(w.prototype.__jx__fqname_chain||"")," ","meshim_widget_widgets_EmailField"].join('')
w.prototype.__jx__fqname="meshim_widget_widgets_EmailField"}
return w})()
b.__$$__meshim_widget_components_chatWindow_SettingsMenu=(function(){function w(x,y,z,A,B){if(!(this instanceof w))return new w(x,y,z,A,B)
y=y||v.generateID()
var C=[b.__$$__meshim_widget_widgets_Menu,null,null,[[b.__$$__meshim_widget_widgets_menu_Section,null,null,[[b.__$$__meshim_widget_components_chatWindow_settingsMenu_Profile,null,null,[],{}],[b.__$$__meshim_widget_components_chatWindow_settingsMenu_Sound,null,null,[],{}],[b.__$$__meshim_widget_components_chatWindow_settingsMenu_Cookies,null,null,[],{}],[b.__$$__meshim_widget_components_chatWindow_settingsMenu_About,null,null,[],{}]],{}],[b.__$$__meshim_widget_widgets_menu_Section,"chat_actions",null,[[b.__$$__meshim_widget_components_chatWindow_settingsMenu_SendFile,null,null,[],{}],[b.__$$__meshim_widget_components_chatWindow_settingsMenu_EmailTranscript,null,null,[],{}],[b.__$$__meshim_widget_components_chatWindow_settingsMenu_EndChat,null,null,[],{}]],{"id":"chat_actions"}]],{}],D=C[0].call(this,x,y,null,v.mangleIDs(y,C[3]),C[4]),E=D||this
v.set(y,E)
var F=v.get(y+'__chat_actions')
if(!w.__jx__jcss_generated){t.generate(x,w.prototype.__jx__fqname,w.__jx__jcss,null,w)
w.__jx__jcss_generated=!0}
var G=(function(){var I=b.__$$__meshim_widget_controllers_DataController,J=I.root.$('livechat'),K=J.$('channel').$('chatting$bool')
function L(){E.autobind(K,'value',function(M){F.setDisplay(M?'':'none')})}
L()})()
for(var H in G)if(G.hasOwnProperty(H))E[H]=G[H]
if(E.fire)E.fire('init')
E.setStyle&&E.setStyle(z)
E.setAttributes&&E.setAttributes(B)
if(typeof E.addChildren=='function')E.addChildren(A)
else v.addChildren(E,A)
if(E!==this){E.__jx__constructor=b.__$$__meshim_widget_components_chatWindow_SettingsMenu
E.__jx__native=!1}
return E}
w.prototype=e(b.__$$__meshim_widget_widgets_Menu.prototype)
w.prototype.__jx__native=!1
w.prototype.__jx__super=b.__$$__meshim_widget_widgets_Menu
w.__jx__jcss={}
w.prototype.__jx__fqname_chain=[(w.prototype.__jx__fqname_chain||"")," ","meshim_widget_components_chatWindow_SettingsMenu"].join('')
w.prototype.__jx__fqname="meshim_widget_components_chatWindow_SettingsMenu"
w.prototype.__jx__constructor=w
return w})()
b.__$$__meshim_widget_widgets_actionBar_DefaultActionBar=(function(){function w(x,y,z,A,B){if(!(this instanceof w))return new w(x,y,z,A,B)
y=y||v.generateID()
var C=[b.__$$__meshim_widget_widgets_ActionBar,null,null,[[b.__$$__jx_ui_html_span,"default_actions",null,[[b.__$$__jx_ui_Button,"settings","backgroundColor:transparent;",[[b.__$$__jx_ui_Label,null,null,[u(136)],{"addClass":"settings_text"}],[b.__$$__jx_ui_Label,null,null,[],{"addClass":"settings_mobile_text","text":"≡"}]],{"id":"settings","addClass":"settings","tabIndex":"","type":"button","style":"backgroundColor:transparent;"}],[b.__$$__jx_ui_html_span,"divider",null,[],{"id":"divider","class":"divider","text":"•"}],[b.__$$__jx_ui_Button,"profile","backgroundColor:transparent;",[[b.__$$__jx_ui_html_span,"logged_out",null,[u(137)],{"id":"logged_out"}],[b.__$$__jx_ui_html_span,"name",null,[],{"id":"name","class":"logged_in_name"}]],{"id":"profile","addClass":"profile","tabIndex":"","type":"button","style":"backgroundColor:transparent;"}]],{"id":"default_actions","display":"none"}],[b.__$$__meshim_widget_widgets_CookieLawNotice,"cookie_law",null,[],{"id":"cookie_law","addClass":"cookie_law"}]],{}],D=C[0].call(this,x,y,null,v.mangleIDs(y,C[3]),C[4]),E=D||this
v.set(y,E)
var F=v.get(y+'__default_actions'),G=v.get(y+'__settings'),H=v.get(y+'__divider'),I=v.get(y+'__profile'),J=v.get(y+'__logged_out'),K=v.get(y+'__name'),L=v.get(y+'__cookie_law')
if(!w.__jx__jcss_generated){t.generate(x,w.prototype.__jx__fqname,w.__jx__jcss,null,w)
w.__jx__jcss_generated=!0}
var M=(function(){var O=b.__$$__meshim_widget_controllers_DataController,P=b.__$$__meshim_widget_utils_Utils,Q=b.__$$__meshim_widget_utils_Mobile,R={'settings_menu':G,'profile_menu':I},S=O.root.$('livechat'),T=S.$('profile').$('logged_in$bool'),U,V=S.$('profile').$('display_name$string'),W,X='visible',Y=S.$('settings').$('cookie_law').$('enabled$bool'),Z=S.$('profile').$('allow_cookies$bool'),$$=O.root.$('livechat').$('ui').$('chat_window').$('menu_stack_name$string'),$_,$a=S.$('settings').$('theme').$('chat_window').$('size$string'),$b,$c=S.$$('ui.chat_button'),$d=S.$$('ui.popout$bool'),$e=S.$('settings').$('login').$('restrict_profile$bool'),$f
function $g(){E.autobind($e,'value',function($l){$f=$l
H.setDisplay($l?'none':'')
I.setDisplay($l?'none':'')})
E.autobind($$,'value',function($l){$_=$l
for(var $m in R)if(R.hasOwnProperty($m))R[$m][($m==$l?'add':'remove')+'Class']('active')})
E.autobind(T,'value',function($l){U=$l
$k()})
E.autobind(V,'value',function($l){W=$l||''
$k()})
u&&u.onLanguage&&u.onLanguage($k)
function $k(){if(U){if(W&&!P.isDefaultName(W)){K.setText(u(119).replace('<name>',W))}
else{K.setText(u(120))}
J.setDisplay('none')
K.setDisplay('')}
else{J.setDisplay('')
K.setDisplay('none')}}
G.on('click',function($l){$l.stopPropagation()
if(Q.isIEMobile)$$.update('settings_menu')
else $$.update($_=='settings_menu'?'':'settings_menu')
if($d.getValue()){$c.write({'unread_count$int':0})}})
I.on('click',function($l){$l.stopPropagation()
if($f)return
$$.update($_=='profile_menu'?'':'profile_menu')})
E.autobind($a,'value',function($l){if($b)E.removeClass('action_bar_'+$b)
$b=$l
if($b)E.addClass('action_bar_'+$b)})
E.autobind(Y,'value',$h)
E.autobind(Z,'value',$h)}
function $h(){if(!Y.getValue()){$j()}
else{if(Z.getValue()){$j()}
else{$i()}}}
function $i(){if(X=='hidden'){L.setDisplay('')
F.setDisplay('none')
X='visible'}}
function $j(){if(X=='visible'){L.setDisplay('none')
F.setDisplay('')
X='hidden'}}
$g()})()
for(var N in M)if(M.hasOwnProperty(N))E[N]=M[N]
if(E.fire)E.fire('init')
E.setStyle&&E.setStyle(z)
E.setAttributes&&E.setAttributes(B)
if(typeof E.addChildren=='function')E.addChildren(A)
else v.addChildren(E,A)
if(E!==this){E.__jx__constructor=b.__$$__meshim_widget_widgets_actionBar_DefaultActionBar
E.__jx__native=!1}
return E}
w.prototype=e(b.__$$__meshim_widget_widgets_ActionBar.prototype)
w.prototype.__jx__native=!1
w.prototype.__jx__super=b.__$$__meshim_widget_widgets_ActionBar
w.__jx__jcss={"button":{"position":"relative","verticalAlign":"top","textAlign":"left","background, backgroundColor":"transparent","border":"none"},"button, button *":{"cursor":"pointer"},".logged_in_name":{"display":"inline-block","whiteSpace":"nowrap","overflow":"hidden","textOverflow":"ellipsis","*height":"1em","*verticalAlign":"top"},".divider":{"fontSize":"0.8em","lineHeight":"1.5","margin":"0 5px","cursor":"default","opacity":0.5},"button, .divider":{"color":"$$actionBarColor"},"button:hover":{"color":"$$actionBarHoverColor"},".settings":{".settings_mobile_text":{"display":"none"}},".cookie_law":{"position":"relative"},"&.action_bar_small  .logged_in_name":{"maxWidth, *width":"120px"},"&.action_bar_medium .logged_in_name":{"maxWidth, *width":"160px"},"&.action_bar_large  .logged_in_name":{"maxWidth, *width":"220px"},"&.mobile":{"display":"block",".divider":{"display":"none"},".settings":{"position":"absolute","width, height":"100%","textAlign":"center",".settings_text":{"display":"none"},".settings_mobile_text":{"display":"block","height":"$$titleBarHeight","lineHeight":"$$titleBarHeight","fontSize":"30px"}},".profile":{"display":"none"},"button, .divider":{}}}
w.prototype.__jx__fqname_chain=[(w.prototype.__jx__fqname_chain||"")," ","meshim_widget_widgets_actionBar_DefaultActionBar"].join('')
w.prototype.__jx__fqname="meshim_widget_widgets_actionBar_DefaultActionBar"
w.prototype.__jx__constructor=w
return w})()
b.__$$__meshim_widget_components_chatWindow_cookieForm_Decline=(function(){function w(x,y,z,A,B){if(!(this instanceof w))return new w(x,y,z,A,B)
y=y||v.generateID()
var C=[b.__$$__meshim_widget_widgets_ChatWindowContent,null,null,[[b.__$$__meshim_widget_widgets_ScrollableFrame,null,null,[[b.__$$__meshim_widget_widgets_Header,null,null,[u(97)],{}],[b.__$$__meshim_widget_widgets_Body,null,null,[[b.__$$__jx_ui_Localizer,null,null,[[b.__$$__jx_ui_Widget,null,null,[],{"tagName":"a","href":"https://www.zopim.com/privacy#cookie","target":"_blank"}]],{"content":u(101)}]],{}],[b.__$$__meshim_widget_widgets_Bottom,null,null,[u(102)],{"addClass":"note"}]],{}],[b.__$$__meshim_widget_widgets_Bottom,null,null,[[b.__$$__jx_ui_Form,"form",null,[[b.__$$__meshim_widget_widgets_Submit,null,null,[],{"value":u(103)}],[b.__$$__meshim_widget_widgets_Button,"cancel",null,[u(29)],{"id":"cancel","addClass":"secondary"}]],{"id":"form"}]],{}]],{"absPaddingBottom":"bottomHeight"}],D=C[0].call(this,x,y,null,v.mangleIDs(y,C[3]),C[4]),E=D||this
v.set(y,E)
var F=v.get(y+'__form'),G=v.get(y+'__cancel')
if(!w.__jx__jcss_generated){t.generate(x,w.prototype.__jx__fqname,w.__jx__jcss,null,w)
w.__jx__jcss_generated=!0}
var H=(function(){var J=b.__$$__meshim_widget_controllers_DataController,K=b.__$$__meshim_widget_controllers_CookieLaw,L=J.root.$('livechat').$('ui').$('chat_window').$('main_stack_name$string')
function M(){F.on('submit',function(N){N.preventDefault()
K.setUserChoice(!1)})
G.on('click',function(){L.update('chat_panel')})}
M()})()
for(var I in H)if(H.hasOwnProperty(I))E[I]=H[I]
if(E.fire)E.fire('init')
E.setStyle&&E.setStyle(z)
E.setAttributes&&E.setAttributes(B)
if(typeof E.addChildren=='function')E.addChildren(A)
else v.addChildren(E,A)
if(E!==this){E.__jx__constructor=b.__$$__meshim_widget_components_chatWindow_cookieForm_Decline
E.__jx__native=!1}
return E}
w.prototype=e(b.__$$__meshim_widget_widgets_ChatWindowContent.prototype)
w.prototype.__jx__native=!1
w.prototype.__jx__super=b.__$$__meshim_widget_widgets_ChatWindowContent
w.__jx__jcss={}
w.prototype.__jx__fqname_chain=[(w.prototype.__jx__fqname_chain||"")," ","meshim_widget_components_chatWindow_cookieForm_Decline"].join('')
w.prototype.__jx__fqname="meshim_widget_components_chatWindow_cookieForm_Decline"
w.prototype.__jx__constructor=w
return w})()
b.__$$__meshim_widget_controllers_LiveChatAPI=(function(){var w=b.__$$__meshim_common_Regex,x=b.__$$__meshim_widget_controllers_DataController,y=b.__$$__meshim_widget_controllers_UIController,z=b.__$$__meshim_widget_controllers_liveChatAPI_APIHelper,A=b.__$$__meshim_widget_controllers_liveChatAPI_Badge,B=b.__$$__meshim_widget_controllers_liveChatAPI_Bubble,C=b.__$$__meshim_widget_controllers_liveChatAPI_Button,D=b.__$$__meshim_widget_controllers_liveChatAPI_Concierge,E=b.__$$__meshim_widget_controllers_liveChatAPI_CookieLawAPI,F=b.__$$__meshim_widget_controllers_liveChatAPI_Departments,G=b.__$$__meshim_widget_controllers_liveChatAPI_Theme,H=b.__$$__meshim_widget_controllers_liveChatAPI_Window,I=b.__$$__meshim_widget_controllers_liveChatAPI_Debug,J,K={badge:A,bubble:B,button:C,concierge:D,cookieLaw:E,departments:F,theme:G,window:H,debug:I,generateDeprecatedFunction:$u,generateLimitedFunction:$v,init:L,isChatting:P,set:Q,getName:M,getEmail:N,getPhone:O,setName:R,setEmail:S,setPhone:T,addTags:U,removeTags:V,setDisableSound:W,setLanguage:X,setGreetings:Y,clearAll:Z,hideAll:$$,say:$_,setOnConnected:$a,setOnChatStart:$e,setOnChatEnd:$f,setOnFlashReady:$g,setOnStatus:$h,setOnUnreadMsgs:$i,endChat:$j,setNotes:$k,appendNotes:$l}
function L(){J=x.root
if(J.$$('livechat.ui.mockup$bool').getValue()){return}
z.init(this)
A.init(this)
B.init(this)
C.init(this)
D.init(this)
E.init(this)
F.init(this)
G.init(this)
H.init(this)
I.init(this)
$m()}
function M(){return J.getValue('livechat.profile.display_name$string')||''}
function N(){return J.getValue('livechat.profile.email$string')||''}
function O(){return J.getValue('livechat.profile.phone$string')||''}
function P(){return J.getValue('livechat.channel.chatting$bool')||!1}
function Q($x){if(typeof $x!='object')return
var $y,$z
for($z in $x)if($x.hasOwnProperty($z)){$y='set'+$w($z)
if(h(this[$y]))this[$y]($x[$z])}
return this}
function R($x){$x=$x&&$x.toString()
z.callOnReattached(function(){x.livechat.updateProfile({'name':$x})})}
function S($x){$x=$x&&w.trim($x.toString())
if(!w.email.test($x)){window.console&&window.console.log('Zopim: setEmail(): the email provided is not valid: ['+$x+']')
return}
z.callOnReattached(function(){x.livechat.updateProfile({'email':$x})})}
function T($x){$x=$x&&$x.toString()
z.callOnReattached(function(){x.livechat.updateProfile({'phone':$x})})}
function U(){if(!arguments.length)return
var $x=arguments,$y=[]
for(var $z=0,$A=$x.length;$z<$A;$z++){$y.push($x[$z]+'')}
z.callOnReattached(function(){J.$$('livechat.channel.tags').write({'added$string':$y.join(',')})})}
;
function V(){if(!arguments.length)return
var $x=arguments,$y=[]
for(var $z=0,$A=$x.length;$z<$A;$z++){$y.push($x[$z]+'')}
z.callOnReattached(function(){J.$$('livechat.channel.tags').write({'removed$string':$y.join(',')})})}
;
function W($x){z.callOnRegistered(function(){if(typeof $x!='boolean')return
J.$$('livechat.profile.notification').update({'sound$bool':!$x})})}
function X($x){z.callOnRegistered(function(){z.saveAPISettings({language:{language$string:$x}})
J.$$('livechat.settings.language').update({'language$string':$x})})}
function Y($x){if(!$x||(typeof $x!='object'))return
var $y,$z
for(var $A in $x)if($x.hasOwnProperty($A)){switch($A){case 'online':if(g($x[$A])){$y=$x[$A][0]||''}
else{$y=$x[$A]||''}
break
case 'offline':if(g($x[$A])){$z=$x[$A][0]||''}
else{$z=$x[$A]||''}
break
default:break}}
z.callOnReattached(function(){if($y){z.saveAPISettings({greetings:{online$string:$y}})
J.$$('livechat.settings.greetings').write({'online$string':$y})}
if($z){z.saveAPISettings({greetings:{offline$string:$z}})
J.$$('livechat.settings.greetings').write({'offline$string':$z})}},!0)}
;
function Z(){z.callOnReattached(function(){x.livechat.clearAll()
x.livechat.reconnect()})}
;
function $$(){z.callOnRegistered(function(){y.hideAll()})}
;
function $_($x){if(!$x||(typeof $x!='string'))return
x.livechat.sendChatMsg({msg:$x})
y.showWindow()}
;
function $a($x){if(!h($x))return
z.callOnReattached($x,!0)}
;
var $b={listening:!1,last_chatting_state:null,start_settled:!1,start_ready:!1}
q.extend($b)
function $c($x){var $y=$b.last_chatting_state,$z=m($x)
if($z===$b.last_chatting_state)return
$b.last_chatting_state=$z
if($z){if($b.start_ready)$b.fire('chat_start')}
else{if($y)$b.fire('chat_end')}}
function $d(){if(!$b.listening){$b.listening=!0
J.$$('livechat.channel.chatting$bool').bindValue($c)}}
function $e($x){if(!h($x))return
$b.on('chat_start',z.getCallbackCaller($x))
$d()
if(!$b.start_settled){$b.start_settled=!0
z.callOnReattached(function(){$b.last_chatting_state=m(J.$$('livechat.channel.chatting$bool').getValue())
$b.start_ready=!0})}}
function $f($x){if(!h($x))return
$b.on('chat_end',z.getCallbackCaller($x))
$d()}
function $g($x){if(!h($x))return
z.callOnRegistered($x,!0)}
;
function $h($x){if(!h($x))return
J.$$('livechat.account.status$string').bindValue(z.getCallbackCaller($x))}
;
function $i($x){if(!h($x))return
J.$$('livechat.ui.chat_button.unread_count$int').bindValue(z.getCallbackCaller($x))}
;
function $j(){x.livechat.endChat()}
function $k($x){if(typeof $x!='string')return
z.callOnReattached(function(){J.$$('livechat.profile').write({'notes$string':$x})})}
function $l($x){if(typeof $x!='string')return
z.callOnReattached(function(){J.$$('livechat.profile').write({'notes_append$string':$x})})}
function $m(){var $x=window.$zopim
window.$zopim=z.callNow
window.$zopim.livechat=K
z.handleDelayed($x&&$x._)}
var $n={global:'fire freeze setOnGreeting setStatus'.split(' '),bubble:'setImage'.split(' '),button:'setImage setTheme useFavicon'.split(' '),window:'getSettings setBg'.split(' '),cookieLaw:'showPrivacyPanel'.split(' '),unreadflag:'disable enable'.split(' ')}
for(var $o in $n)if($n.hasOwnProperty($o)){var $p=$n[$o],$q
if($o=='global'){$q=K}
else{if(!K[$o])K[$o]={}
$q=K[$o]}
for(var $r=0;$r<$p.length;$r++){var $s=$p[$r]
$q[$s]=$t($s)}}
function $t($x){return function(){window.console&&window.console.log('Zopim: LiveChatAPI call "'+$x+'" is obsolete. Refer to http://api.zopim.com/ for the latest API documentation.')}}
function $u($x,$y,$z){return function(){window.console&&window.console.log('Zopim: LiveChatAPI call "'+$x+'" is deprecated and may be removed in the future. '+($y?('Use "'+$y+'" instead.'):'Refer to http://api.zopim.com/ for the latest API documentation.'))
return $z.apply(this,arguments)}}
function $v($x,$y,$z){return function(){var $A=Array.prototype.slice.call(arguments,0)
z.callOnRegistered(function(){if(x.livechat.getLimit()<$y){window.console&&window.console.log('Zopim: LiveChatAPI call "'+$x+'" is not included in your current package. Upgrade your package to enable this function.')
return}
return $z.apply(this,$A)})}}
function $w($x){$x+=''
return $x.charAt(0).toUpperCase()+$x.substring(1)}
if((typeof K==='function')&&K.prototype&&!K.__jx__no_fqname){K.prototype.__jx__fqname_chain=[(K.prototype.__jx__fqname_chain||"")," ","meshim_widget_controllers_LiveChatAPI"].join('')
K.prototype.__jx__fqname="meshim_widget_controllers_LiveChatAPI"}
return K})()
b.__$$__meshim_widget_widgets_Select=(function(){var w=b.__$$__jx_ui_PrettySelect,x=b.__$$__meshim_widget_widgets_Input,y=b.__$$__meshim_widget_widgets_IconFont,z=b.__$$__meshim_widget_utils_BindClass
function A(B,C,D,E,F){if(!(this instanceof A))return new A(B,C,D,E,F)
if(!A.__jx__jcss_generated){t.generate(this,A.prototype.__jx__fqname,A.__jx__jcss,null,A)
A.__jx__jcss_generated=!0}
if(!F)F={}
F.tagName||(F.tagName='select')
w.call(this,B,C,D,E,F)
if(this.container){this.container.addClass(this.__jx__fqname)
this.iconFont=new y(this.container,null,null,null,{addClass:'select_icon',icon:'arrow_down'})
this.container.insertBefore(this.iconFont,this.container.getFirstChild())
z.mobile(this.container)
z.rtl(this.container)}
x.__constructor.call(this)}
A.__jx__jcss={"&.mobile.invalid, &.rtl.mobile.invalid":{"paddingRight, paddingLeft":"$$inputPadding"},".select_placeholder":{"overflow":"hidden","whiteSpace":"nowrap","textOverflow":"ellipsis"},".select_icon":{"float":"right","marginTop":"3px"},"&.rtl .select_icon":{"float":"left"},"&.mobile":{".select_placeholder":{"lineHeight":"26px"},".select_icon":{"marginTop":"8px"}}}
A.prototype=e(w.prototype)
A.prototype.__jx__super=x
A.prototype.setValidity=function(B){if(this.container){B=m(B)
this.container[B?'removeClass':'addClass']('invalid')}
return w.prototype.setValidity.apply(this,arguments)}
if((typeof A==='function')&&A.prototype&&!A.__jx__no_fqname){A.prototype.__jx__fqname_chain=[(A.prototype.__jx__fqname_chain||"")," ","meshim_widget_widgets_Select"].join('')
A.prototype.__jx__fqname="meshim_widget_widgets_Select"}
return A})()
b.__$$__meshim_widget_components_chatWindow_cookieForm_Accept=(function(){function w(x,y,z,A,B){if(!(this instanceof w))return new w(x,y,z,A,B)
y=y||v.generateID()
var C=[b.__$$__meshim_widget_widgets_ChatWindowContent,null,null,[[b.__$$__meshim_widget_widgets_ScrollableFrame,null,null,[[b.__$$__meshim_widget_widgets_Header,null,null,[u(97)],{}],[b.__$$__meshim_widget_widgets_Body,null,null,[[b.__$$__jx_ui_Localizer,null,null,[[b.__$$__jx_ui_Widget,null,null,[],{"tagName":"a","href":"https://www.zopim.com/privacy#cookie","target":"_blank"}]],{"content":u(98)}]],{}],[b.__$$__meshim_widget_widgets_Bottom,null,null,[u(99)],{"addClass":"note"}]],{}],[b.__$$__meshim_widget_widgets_Bottom,null,null,[[b.__$$__jx_ui_Form,"form",null,[[b.__$$__meshim_widget_widgets_Submit,null,null,[],{"addClass":"wide","value":u(100)}]],{"id":"form"}]],{}]],{"absPaddingBottom":"bottomHeight"}],D=C[0].call(this,x,y,null,v.mangleIDs(y,C[3]),C[4]),E=D||this
v.set(y,E)
var F=v.get(y+'__form')
if(!w.__jx__jcss_generated){t.generate(x,w.prototype.__jx__fqname,w.__jx__jcss,null,w)
w.__jx__jcss_generated=!0}
var G=(function(){var I=b.__$$__meshim_widget_controllers_DataController,J=b.__$$__meshim_widget_controllers_CookieLaw,K=I.root.$('livechat').$('ui').$('chat_window').$('main_stack_name$string')
function L(){F.on('submit',function(M){M.preventDefault()
K.update('chat_panel')
J.setUserChoice(!0)})}
L()})()
for(var H in G)if(G.hasOwnProperty(H))E[H]=G[H]
if(E.fire)E.fire('init')
E.setStyle&&E.setStyle(z)
E.setAttributes&&E.setAttributes(B)
if(typeof E.addChildren=='function')E.addChildren(A)
else v.addChildren(E,A)
if(E!==this){E.__jx__constructor=b.__$$__meshim_widget_components_chatWindow_cookieForm_Accept
E.__jx__native=!1}
return E}
w.prototype=e(b.__$$__meshim_widget_widgets_ChatWindowContent.prototype)
w.prototype.__jx__native=!1
w.prototype.__jx__super=b.__$$__meshim_widget_widgets_ChatWindowContent
w.__jx__jcss={}
w.prototype.__jx__fqname_chain=[(w.prototype.__jx__fqname_chain||"")," ","meshim_widget_components_chatWindow_cookieForm_Accept"].join('')
w.prototype.__jx__fqname="meshim_widget_components_chatWindow_cookieForm_Accept"
w.prototype.__jx__constructor=w
return w})()
b.__$$__meshim_widget_widgets_ProfileCard=(function(){function w(x,y,z,A,B){if(!(this instanceof w))return new w(x,y,z,A,B)
y=y||v.generateID()
var C=[b.__$$__jx_ui_html_div,null,null,[[b.__$$__jx_ui_html_table,null,null,[[b.__$$__jx_ui_html_tbody,null,null,[[b.__$$__jx_ui_html_tr,null,null,[[b.__$$__jx_ui_html_td,null,null,[[b.__$$__meshim_widget_widgets_Gravatar,"gravatar",null,[],{"id":"gravatar","addClass":"profile_avatar"}]],{"class":"avatar_cell"}],[b.__$$__jx_ui_html_td,"content_cell",null,[[b.__$$__meshim_widget_widgets_profileCard_MemberName,"name_holder",null,[],{"id":"name_holder","addClass":"profile_name"}],[b.__$$__meshim_widget_widgets_profileCard_TitleHolder,"title_holder",null,[],{"id":"title_holder","addClass":"profile_title"}]],{"pseudo":"content_cell","id":"content_cell"}]],{}]],{}]],{"class":"profile_table"}]],{}],D=C[0].call(this,x,y,null,v.mangleIDs(y,C[3]),C[4]),E=D||this
v.set(y,E)
var F=v.get(y+'__gravatar'),G=v.get(y+'__content_cell'),H=v.get(y+'__name_holder'),I=v.get(y+'__title_holder')
if(!w.__jx__jcss_generated){t.generate(x,w.prototype.__jx__fqname,w.__jx__jcss,null,w)
w.__jx__jcss_generated=!0}
var J=(function(){var L=b.__$$__meshim_widget_controllers_DataController,M,N,O
function P(){O=L.root.$$('livechat.ui.mobile$bool')
F.on('click',function(){E.onGravatarClick&&E.onGravatarClick()})
G.on('click',function(){E.onContentClick&&E.onContentClick()})
if(O.getValue()){E.addClass('mobile')}
E.setDataNode=Q
E.setTitleNode=R}
function Q(S){F.setMemberNode(S)
if(S){M=S.$('display_name$string')
H.setDataNode(M)
N=S.$('title$string')
R(N)}
else{H.setDataNode(null)
R(null)}}
function R(S){N=S
I.setDataNode(N)}
P()})()
for(var K in J)if(J.hasOwnProperty(K))E[K]=J[K]
if(E.fire)E.fire('init')
E.setStyle&&E.setStyle(z)
E.setAttributes&&E.setAttributes(B)
if(typeof E.addChildren=='function')E.addChildren(A)
else v.addChildren(E,A)
if(E!==this){E.__jx__constructor=b.__$$__meshim_widget_widgets_ProfileCard
E.__jx__native=!1}
return E}
w.prototype=e(b.__$$__jx_ui_html_div.prototype)
w.prototype.__jx__native=!1
w.prototype.__jx__super=b.__$$__jx_ui_html_div
w.__jx__jcss={"**self":{"width":"100%","position":"relative",".profile_table":{"width":"100%","tableLayout":"fixed","fontSize":"100%","borderSpacing":"0px","borderCollapse":"collapse","td":{"padding":"0px"}},".profile_avatar":{"width":"32px","height":"32px","borderWidth":"$$profileCardAvatarBorderWidth","borderStyle":"$$profileCardAvatarBorderStyle","borderColor":"$$profileCardAvatarBorderColor","borderRadius":"$$profileCardAvatarRadius","boxShadow":"$$profileCardAvatarShadow"},".profile_name":{"fontWeight":"bold","color":"$$profileCardNameColor"},".profile_title":{"color":"$$profileCardTitleColor"},".profile_name, .profile_title":{"lineHeight":"1.2"}},"**self.mobile":{".profile_table":{"height":"100%"}}}
w.prototype.__jx__fqname_chain=[(w.prototype.__jx__fqname_chain||"")," ","meshim_widget_widgets_ProfileCard"].join('')
w.prototype.__jx__fqname="meshim_widget_widgets_ProfileCard"
w.prototype.__jx__constructor=w
return w})()
b.__$$__meshim_widget_widgets_TextArea=(function(){var w=b.__$$__jx_ui_TextArea,x=w,y=b.__$$__meshim_widget_widgets_Input
w=function(z,A,B,C,D){if(!(this instanceof w))return new w(z,A,B,C,D)
if(!w.__jx__jcss_generated){t.generate(this,w.prototype.__jx__fqname,w.__jx__jcss,null,w)
w.__jx__jcss_generated=!0}
x.call(this,z,A,B,C,D)
y.__constructor.call(this)}
w.__jx__jcss={}
w.prototype=e(x.prototype)
w.prototype.__jx__super=y
if((typeof w==='function')&&w.prototype&&!w.__jx__no_fqname){w.prototype.__jx__fqname_chain=[(w.prototype.__jx__fqname_chain||"")," ","meshim_widget_widgets_TextArea"].join('')
w.prototype.__jx__fqname="meshim_widget_widgets_TextArea"}
return w})()
b.__$$__meshim_widget_components_chatWindow_postChatForm_CommentsForm=(function(){function w(x,y,z,A,B){if(!(this instanceof w))return new w(x,y,z,A,B)
y=y||v.generateID()
var C=[b.__$$__meshim_widget_widgets_ChatWindowContent,null,null,[[b.__$$__jx_ui_Form,"form",null,[[b.__$$__meshim_widget_widgets_ScrollableFrame,null,null,[[b.__$$__meshim_widget_widgets_Body,"message",null,[],{"id":"message"}],[b.__$$__jx_ui_TextArea,"comments",null,[],{"id":"comments","addClass":"comments"}]],{}],[b.__$$__meshim_widget_widgets_Bottom,null,null,[[b.__$$__meshim_widget_widgets_Submit,null,null,[],{"value":u(28)}],[b.__$$__meshim_widget_widgets_Button,"skip",null,[u(96)],{"id":"skip","addClass":"secondary"}]],{"addClass":"padding_bottom"}]],{"id":"form"}]],{"absPaddingBottom":"bottomHeight"}],D=C[0].call(this,x,y,null,v.mangleIDs(y,C[3]),C[4]),E=D||this
v.set(y,E)
var F=v.get(y+'__form'),G=v.get(y+'__message'),H=v.get(y+'__comments'),I=v.get(y+'__skip')
if(!w.__jx__jcss_generated){t.generate(x,w.prototype.__jx__fqname,w.__jx__jcss,null,w)
w.__jx__jcss_generated=!0}
var J=(function(){var L=b.__$$__meshim_widget_controllers_DataController,M=b.__$$__meshim_common_Regex,N=b.__$$__meshim_widget_utils_Strings,O=L.root.$('livechat'),P=O.$('settings').$('forms').$('post_chat_form'),Q=O.$('channel').$('rating$string'),R,S=L.root.$('livechat').$('ui').$('chat_window').$('main_stack_name$string'),T=P.$('comments_messages')
function U(){H.setLabelElement(G)
E.autobind(T,'value',function(){V()})
E.autobind(Q,'value',function(W){R=W
V()})
F.on('submit',function(W){W.preventDefault()
if(!E.validate())return
P.write({'comments_user$string':M.trim(H.getValue())})
S.update('chat_panel')})
I.on('click',function(){S.update('chat_panel')})}
function V(){G.setText(N.get(T.$$(R+'.message$string')))
H.setPlaceholder(N.get(T.$$(R+'.placeholder$string')))}
U()})()
for(var K in J)if(J.hasOwnProperty(K))E[K]=J[K]
if(E.fire)E.fire('init')
E.setStyle&&E.setStyle(z)
E.setAttributes&&E.setAttributes(B)
if(typeof E.addChildren=='function')E.addChildren(A)
else v.addChildren(E,A)
if(E!==this){E.__jx__constructor=b.__$$__meshim_widget_components_chatWindow_postChatForm_CommentsForm
E.__jx__native=!1}
return E}
w.prototype=e(b.__$$__meshim_widget_widgets_ChatWindowContent.prototype)
w.prototype.__jx__native=!1
w.prototype.__jx__super=b.__$$__meshim_widget_widgets_ChatWindowContent
w.__jx__jcss={".comments":{"width":"100%","height":"25%"}}
w.prototype.__jx__fqname_chain=[(w.prototype.__jx__fqname_chain||"")," ","meshim_widget_components_chatWindow_postChatForm_CommentsForm"].join('')
w.prototype.__jx__fqname="meshim_widget_components_chatWindow_postChatForm_CommentsForm"
w.prototype.__jx__constructor=w
return w})()
b.__$$__meshim_widget_widgets_chatLogRenderer_BasicRenderer=(function(){function w(x,y,z,A,B){if(!(this instanceof w))return new w(x,y,z,A,B)
y=y||v.generateID()
var C=[b.__$$__jx_ui_html_div,null,null,[[b.__$$__meshim_widget_widgets_chatLogRenderer_ChatName,"chat_name",null,[],{"id":"chat_name","addClass":"chat_name"}],[b.__$$__meshim_widget_widgets_chatLogRenderer_ChatMessage,"chat_msg",null,[],{"id":"chat_msg","addClass":"chat_msg"}],[b.__$$__meshim_widget_widgets_chatLogRenderer_ResendChatMessage,"resend",null,[],{"id":"resend","addClass":"resend_chat_msg"}],[b.__$$__meshim_widget_widgets_chatLogRenderer_ChatOption,"chat_option",null,[],{"id":"chat_option","addClass":"chat_option"}],[b.__$$__meshim_widget_widgets_chatLogRenderer_ChatFile,"chat_file",null,[],{"id":"chat_file","addClass":"chat_file"}]],{}],D=C[0].call(this,x,y,null,v.mangleIDs(y,C[3]),C[4]),E=D||this
v.set(y,E)
var F=v.get(y+'__chat_name'),G=v.get(y+'__chat_msg'),H=v.get(y+'__resend'),I=v.get(y+'__chat_option'),J=v.get(y+'__chat_file')
if(!w.__jx__jcss_generated){t.generate(x,w.prototype.__jx__fqname,w.__jx__jcss,null,w)
w.__jx__jcss_generated=!0}
var K=(function(){function M(){E.setDataNode=N}
function N(O){F.setDataNode(O)
G.setDataNode(O)
H.setDataNode(O)
I.setDataNode(O)
J.setDataNode(O)}
M()})()
for(var L in K)if(K.hasOwnProperty(L))E[L]=K[L]
if(E.fire)E.fire('init')
E.setStyle&&E.setStyle(z)
E.setAttributes&&E.setAttributes(B)
if(typeof E.addChildren=='function')E.addChildren(A)
else v.addChildren(E,A)
if(E!==this){E.__jx__constructor=b.__$$__meshim_widget_widgets_chatLogRenderer_BasicRenderer
E.__jx__native=!1}
return E}
w.prototype=e(b.__$$__jx_ui_html_div.prototype)
w.prototype.__jx__native=!1
w.prototype.__jx__super=b.__$$__jx_ui_html_div
w.__jx__jcss={"**self":{"marginTop":"10px",".chat_name":{"fontWeight":"bold","&":"$$chatLogName"},"&.visitor .chat_name":{"color":"$$chatLogVisitorNameColor"},"&.agent .chat_name":{"color":"$$chatLogAgentNameColor"},".chat_msg":{"whiteSpace":"pre-wrap","wordWrap":"break-word","&":"$$chatLogMsg"},".resend_chat_msg":{"marginLeft":"6px"},".chat_option":{"input":{"margin":"2px 5px"}},".chat_file":{"marginTop, marginBottom":"5px","&":"$$chatLogFile"}},"**self.group_children":{"marginTop":"0px",".chat_name":{"display":"none"}}}
w.prototype.__jx__fqname_chain=[(w.prototype.__jx__fqname_chain||"")," ","meshim_widget_widgets_chatLogRenderer_BasicRenderer"].join('')
w.prototype.__jx__fqname="meshim_widget_widgets_chatLogRenderer_BasicRenderer"
w.prototype.__jx__constructor=w
return w})()
b.__$$__meshim_widget_widgets_TextField=(function(){var w=b.__$$__jx_ui_TextField,x=w,y=b.__$$__meshim_widget_widgets_Input
w=function(z,A,B,C,D){if(!(this instanceof w))return new w(z,A,B,C,D)
if(!w.__jx__jcss_generated){t.generate(this,w.prototype.__jx__fqname,w.__jx__jcss,null,w)
w.__jx__jcss_generated=!0}
x.call(this,z,A,B,C,D)
y.__constructor.call(this)}
w.__jx__jcss={}
w.prototype=e(x.prototype)
w.prototype.__jx__super=y
if((typeof w==='function')&&w.prototype&&!w.__jx__no_fqname){w.prototype.__jx__fqname_chain=[(w.prototype.__jx__fqname_chain||"")," ","meshim_widget_widgets_TextField"].join('')
w.prototype.__jx__fqname="meshim_widget_widgets_TextField"}
return w})()
b.__$$__meshim_widget_widgets_RatingBar=(function(){function w(x,y,z,A,B){if(!(this instanceof w))return new w(x,y,z,A,B)
y=y||v.generateID()
var C=[b.__$$__jx_ui_html_div,null,null,[[b.__$$__meshim_widget_widgets_ButtonBar,"rating_options",null,[[b.__$$__meshim_widget_widgets_ratingBar_GoodRatingButton,null,null,[],{"value":"good","addClass":"rating_button"}],[b.__$$__meshim_widget_widgets_ratingBar_BadRatingButton,null,null,[],{"value":"bad","addClass":"rating_button"}]],{"noMangle":"true","id":"rating_options","addClass":"button_bar"}],[b.__$$__meshim_widget_widgets_ButtonBar,"rating_selected",null,[[b.__$$__jx_ui_html_span,null,null,[[b.__$$__meshim_widget_widgets_IconFont,"selected_rating",null,[],{"id":"selected_rating","addClass":"rating_icon"}],[b.__$$__jx_ui_html_span,"selected_description",null,[],{"id":"selected_description","class":"description"}]],{"width":"100%","value":"selected","class":"rating_button selected"}]],{"noMangle":"true","id":"rating_selected","display":"none","addClass":"button_bar"}]],{}],D=C[0].call(this,x,y,null,v.mangleIDs(y,C[3]),C[4]),E=D||this
v.set(y,E)
var F=v.get(y+'__rating_options'),G=v.get(y+'__rating_selected'),H=v.get(y+'__selected_rating'),I=v.get(y+'__selected_description')
if(!w.__jx__jcss_generated){t.generate(x,w.prototype.__jx__fqname,w.__jx__jcss,null,w)
w.__jx__jcss_generated=!0}
var J=(function(){var L=b.__$$__meshim_widget_controllers_DataController,M=b.__$$__meshim_widget_utils_Utils,N=L.root.$$('livechat.ui.chat_button'),O=L.root.$$('livechat.ui.popout$bool'),P=L.root.$('livechat').$('channel'),Q=L.root.$('livechat').$('ui').$('chat_window').$('post_chat_form').$('stack_index$int'),R,S,T={'unrated':u(138),'rated':u(139)}
function U(){E.setDataNode=V
E.setDescription=W
E.on('mouseenter',$a)
E.on('mouseleave',$_)
F.on('change',X)
if(u&&u.onLanguage){u.onLanguage(Y)
E.onDestruction(function(){u.unLanguage(Y)})}
Y()
V(P.$('rating$string'))}
function V($c){if(R)E.autounbind(R,'value',Z)
R=$c
E.autobind(R,'value',Z)}
function W($c){$c=m($c)
if($c)E.addClass('allow_description')
else E.removeClass('allow_description')}
function X(){if(O.getValue()){N.write({'unread_count$int':0})}
var $c=F.getValue()
if($c==S){F.setValue(null)
$c=null}
S=$c
$$($c)
R&&R.update($c)
Q.update(1)
Y()}
function Y(){E.setTitle(S?T.rated:T.unrated)}
function Z($c){if(S===$c)return
S=$c
$$(S)
$_()
Y()}
function $$($c){F.setValue($c)
H.setIcon($c=='good'?'happier':'sadder')
I.setText($c=='good'?u(140):u(141))}
function $_(){S?$b():$a()}
function $a(){F.setDisplay('')
G.setDisplay('none')}
function $b(){F.setDisplay('none')
G.setDisplay('')}
E.on('mouseover',function($c){var $d=$c.relatedTarget||$c.fromElement
if(!$d||!M.contains(E,$d)){E.fire('mouseenter',$c)}})
E.on('mouseout',function($c){var $d=$c.relatedTarget||$c.toElement
if(!$d||!M.contains(E,$d)){E.fire('mouseleave',$c)}})
U()})()
for(var K in J)if(J.hasOwnProperty(K))E[K]=J[K]
if(E.fire)E.fire('init')
E.setStyle&&E.setStyle(z)
E.setAttributes&&E.setAttributes(B)
if(typeof E.addChildren=='function')E.addChildren(A)
else v.addChildren(E,A)
if(E!==this){E.__jx__constructor=b.__$$__meshim_widget_widgets_RatingBar
E.__jx__native=!1}
return E}
w.prototype=e(b.__$$__jx_ui_html_div.prototype)
w.prototype.__jx__native=!1
w.prototype.__jx__super=b.__$$__jx_ui_html_div
w.__jx__jcss={"**self":{"position":"relative",".button_bar":{"width":"100%",".rating_button":{"borderColor":"inherit","borderWidth":"0px","padding":"7px 5px 3px","&":"$$ratingBarButton",".rating_icon":{"display":"inline","lineHeight":1.3},"&.hover, &.selected":{"&":"$$ratingBarButtonHighlight"},"&.active":{"&":"$$ratingBarButtonActive"},"&:last-child:not(:first-child)":{"borderLeft":"none"},"&:first-child":{"borderTopLeftRadius, borderBottomLeftRadius":"$$ratingBarBorderRadius"},"&:last-child":{"borderTopRightRadius, borderBottomRightRadius":"$$ratingBarBorderRadius"}},".description":{"display":"none","marginLeft":"5px","lineHeight":0.9,"verticalAlign":"top"}}},"**self.allow_description":{".description":{"display":"inline"}}}
w.prototype.__jx__fqname_chain=[(w.prototype.__jx__fqname_chain||"")," ","meshim_widget_widgets_RatingBar"].join('')
w.prototype.__jx__fqname="meshim_widget_widgets_RatingBar"
w.prototype.__jx__constructor=w
return w})()
b.__$$__meshim_widget_components_chatButton_Bubble=(function(){function w(x,y,z,A,B){if(!(this instanceof w))return new w(x,y,z,A,B)
y=y||v.generateID()
var C=[b.__$$__jx_ui_Widget,null,null,[[b.__$$__meshim_widget_components_chatButton_BubbleRenderer,null,null,[],{"addClass":"bubble_renderer"}]],{}],D=C[0].call(this,x,y,null,v.mangleIDs(y,C[3]),C[4]),E=D||this
v.set(y,E)
if(!w.__jx__jcss_generated){t.generate(x,w.prototype.__jx__fqname,w.__jx__jcss,null,w)
w.__jx__jcss_generated=!0}
var F=(function(){var H=b.__$$__meshim_widget_controllers_DataController,I=H.root.$('livechat').$('ui').$('chat_button'),J=I.$('bubble').$('display$bool'),K=-1
function L(){E.autobind(J,'value',function(M){if(K==M)return
K=M
E.setDisplay(K?'':'none')})}
L()})()
for(var G in F)if(F.hasOwnProperty(G))E[G]=F[G]
if(E.fire)E.fire('init')
E.setStyle&&E.setStyle(z)
E.setAttributes&&E.setAttributes(B)
if(typeof E.addChildren=='function')E.addChildren(A)
else v.addChildren(E,A)
if(E!==this){E.__jx__constructor=b.__$$__meshim_widget_components_chatButton_Bubble
E.__jx__native=!1}
return E}
w.prototype=e(b.__$$__jx_ui_Widget.prototype)
w.prototype.__jx__native=!1
w.prototype.__jx__super=b.__$$__jx_ui_Widget
w.__jx__jcss={"**self":{"position":"absolute","width":"100%","top, left":0,"cursor":"pointer"}}
w.prototype.__jx__fqname_chain=[(w.prototype.__jx__fqname_chain||"")," ","meshim_widget_components_chatButton_Bubble"].join('')
w.prototype.__jx__fqname="meshim_widget_components_chatButton_Bubble"
w.prototype.__jx__constructor=w
return w})()
b.__$$__meshim_widget_widgets_MultiProfilesCard=(function(){function w(x,y,z,A,B){if(!(this instanceof w))return new w(x,y,z,A,B)
y=y||v.generateID()
var C=[b.__$$__jx_ui_html_div,null,null,[[b.__$$__jx_ui_html_table,null,null,[[b.__$$__jx_ui_html_tbody,null,null,[[b.__$$__jx_ui_html_tr,null,null,[[b.__$$__jx_ui_html_td,null,null,[[b.__$$__meshim_widget_widgets_Gravatar,"gravatar",null,[],{"id":"gravatar","pseudo":"profile_avatar"}]],{"pseudo":"avatar_cell"}],[b.__$$__jx_ui_html_td,"content_cell",null,[[b.__$$__meshim_widget_widgets_profileCard_MemberName,"agent0",null,[],{"id":"agent0"}],[b.__$$__meshim_widget_widgets_profileCard_MemberName,"agent1",null,[],{"id":"agent1"}]],{"pseudo":"content_cell","id":"content_cell"}]],{}]],{}]],{"class":"profile_table"}]],{}],D=C[0].call(this,x,y,null,v.mangleIDs(y,C[3]),C[4]),E=D||this
v.set(y,E)
var F=v.get(y+'__gravatar'),G=v.get(y+'__content_cell'),H=v.get(y+'__agent0'),I=v.get(y+'__agent1')
if(!w.__jx__jcss_generated){t.generate(x,w.prototype.__jx__fqname,w.__jx__jcss,null,w)
w.__jx__jcss_generated=!0}
var J=(function(){var L=b.__$$__meshim_widget_controllers_DataController,M,N
function O(){N=L.root.$$('livechat.ui.mobile$bool')
E.setDataNode=P
F.on('click',function(){E.onGravatarClick&&E.onGravatarClick()})
G.on('click',function(){E.onContentClick&&E.onContentClick()})
if(N.getValue()){E.addClass('mobile')}}
function P(R){if(M){if(M===R)return
E.autounbind(M,'keys',Q)}
M=R
if(!M)return
F.setGroupNode(R)
E.autobind(M,'keys',Q)}
function Q(){var R=M.getKeys()
H.setDataNode(R.length<=0?null:M.$(R[0]).$('display_name$string'))
I.setDataNode(R.length<=1?null:M.$(R[1]).$('display_name$string'))}
O()})()
for(var K in J)if(J.hasOwnProperty(K))E[K]=J[K]
if(E.fire)E.fire('init')
E.setStyle&&E.setStyle(z)
E.setAttributes&&E.setAttributes(B)
if(typeof E.addChildren=='function')E.addChildren(A)
else v.addChildren(E,A)
if(E!==this){E.__jx__constructor=b.__$$__meshim_widget_widgets_MultiProfilesCard
E.__jx__native=!1}
return E}
w.prototype=e(b.__$$__jx_ui_html_div.prototype)
w.prototype.__jx__native=!1
w.prototype.__jx__super=b.__$$__jx_ui_html_div
w.__jx__jcss={"**self":{"width":"100%","position":"relative",".profile_table":{"width":"100%","tableLayout":"fixed","fontSize":"100%","borderSpacing":"0px","borderCollapse":"collapse","td":{"padding":"0px"}},".profile_avatar":{"width":"32px","height":"32px","&":"$$profileCardAvatar"},".profile_name":{"lineHeight":"1.2"}},"**self.mobile":{".profile_table":{"height":"100%"}}}
w.prototype.__jx__fqname_chain=[(w.prototype.__jx__fqname_chain||"")," ","meshim_widget_widgets_MultiProfilesCard"].join('')
w.prototype.__jx__fqname="meshim_widget_widgets_MultiProfilesCard"
w.prototype.__jx__constructor=w
return w})()
b.__$$__meshim_widget_widgets_chatLogRenderer_CardRenderer=(function(){var w=b.__$$__jx_ui_Widget,x=b.__$$__meshim_widget_widgets_card_EndChatCard,y=b.__$$__meshim_widget_widgets_card_FormCard,z=b.__$$__meshim_widget_widgets_card_IntegrationCard,A=b.__$$__meshim_widget_widgets_card_LoginCard,B=b.__$$__meshim_widget_widgets_card_OfflineFormCard,C=b.__$$__meshim_widget_widgets_card_TextCard,D={'end_chat':x,'form':y,'integration':z,'login':A,'offline_form':B,'text':C}
function E(F,G,H,I,J){if(!(this instanceof E))return new E(F,G,H,I,J)
w.call(this,F,G,H,I,J)
this.$node
this.instantiated
var K=this
this._createCard=function(L){K.createCard(L)}}
E.prototype=e(w.prototype)
E.prototype.setDataNode=function(F){if(this.$node==F)return
if(this.$node)this.autounbind(this.$node,'value',this._createCard)
this.$node=F
if(this.$node)this.autobind(this.$node,'value',this._createCard)}
E.prototype.createCard=function(F){if(this.instantiated)return
if(!('card' in F))return
var G=F['card']
if(!('type$string' in G))return
var H=D[G['type$string']]
if(!H)return
new H(this,null,null,null,{addClass:'card'}).setDataNode(this.$node.$('card'))
this.instantiated=!0}
if((typeof E==='function')&&E.prototype&&!E.__jx__no_fqname){E.prototype.__jx__fqname_chain=[(E.prototype.__jx__fqname_chain||"")," ","meshim_widget_widgets_chatLogRenderer_CardRenderer"].join('')
E.prototype.__jx__fqname="meshim_widget_widgets_chatLogRenderer_CardRenderer"}
return E})()
b.__$$__meshim_widget_widgets_PhoneField=(function(){var w=b.__$$__jx_ui_TextField,x=b.__$$__meshim_widget_widgets_Input
function y(z,A,B,C,D){if(!(this instanceof y))return new y(z,A,B,C,D)
if(!y.__jx__jcss_generated){t.generate(this,y.prototype.__jx__fqname,y.__jx__jcss,null,y)
y.__jx__jcss_generated=!0}
if(!D)D={}
D.pattern||(D.pattern='(^$|[0-9]+)')
w.call(this,z,A,B,C,D)
x.__constructor.call(this)}
y.__jx__jcss={}
y.prototype=e(w.prototype)
y.prototype.__jx__super=x
if((typeof y==='function')&&y.prototype&&!y.__jx__no_fqname){y.prototype.__jx__fqname_chain=[(y.prototype.__jx__fqname_chain||"")," ","meshim_widget_widgets_PhoneField"].join('')
y.prototype.__jx__fqname="meshim_widget_widgets_PhoneField"}
return y})()
b.__$$__meshim_widget_widgets_Avatar=(function(){function w(x,y,z,A,B){if(!(this instanceof w))return new w(x,y,z,A,B)
y=y||v.generateID()
var C=[b.__$$__meshim_widget_widgets_Gravatar,null,null,[],{}],D=C[0].call(this,x,y,null,v.mangleIDs(y,C[3]),C[4]),E=D||this
v.set(y,E)
if(!w.__jx__jcss_generated){t.generate(x,w.prototype.__jx__fqname,w.__jx__jcss,null,w)
w.__jx__jcss_generated=!0}
var F=(function(){var H=b.__$$__meshim_widget_controllers_DataController,I=/^agent/gi,J=/^visitor/gi,K=/^agent:trigger$/
function L(){E.setMemberId=M}
function M(N){if(K.test(N)){E.setDataNode(H.root.$$('livechat.settings.concierge'))}
else if(I.test(N)){E.setDataNode(H.root.$$('livechat.agents').$(N))}
else if(J.test(N)){E.setDataNode(H.root.$$('livechat.profile'))}
else{E.setDataNode(H.root.$$('livechat.settings.concierge'))}
return E}
L()})()
for(var G in F)if(F.hasOwnProperty(G))E[G]=F[G]
if(E.fire)E.fire('init')
E.setStyle&&E.setStyle(z)
E.setAttributes&&E.setAttributes(B)
if(typeof E.addChildren=='function')E.addChildren(A)
else v.addChildren(E,A)
if(E!==this){E.__jx__constructor=b.__$$__meshim_widget_widgets_Avatar
E.__jx__native=!1}
return E}
w.prototype=e(b.__$$__meshim_widget_widgets_Gravatar.prototype)
w.prototype.__jx__native=!1
w.prototype.__jx__super=b.__$$__meshim_widget_widgets_Gravatar
w.__jx__jcss={}
w.prototype.__jx__fqname_chain=[(w.prototype.__jx__fqname_chain||"")," ","meshim_widget_widgets_Avatar"].join('')
w.prototype.__jx__fqname="meshim_widget_widgets_Avatar"
w.prototype.__jx__constructor=w
return w})()
b.__$$__meshim_widget_widgets_chatLogRenderer_TypingRenderer=(function(){function w(x,y,z,A,B){if(!(this instanceof w))return new w(x,y,z,A,B)
y=y||v.generateID()
var C=[b.__$$__meshim_widget_widgets_chatLogRenderer_SystemLogRenderer,null,null,[],{}],D=C[0].call(this,x,y,null,v.mangleIDs(y,C[3]),C[4]),E=D||this
v.set(y,E)
if(!w.__jx__jcss_generated){t.generate(x,w.prototype.__jx__fqname,w.__jx__jcss,null,w)
w.__jx__jcss_generated=!0}
var F=(function(){var H=b.__$$__meshim_widget_controllers_DataController,I=H.root.$('livechat'),J=I.$('agents'),K=I.$('triggers').$('agents'),L=I.$('ui').$('chat_window'),M=[]
function N(){E.autobind(J,'value',O)
E.autobind(K,'value',O)
if(u&&u.onLanguage){u.onLanguage(O)
E.onDestruction(function(){u.unLanguage(O)})}}
function O(){var P=J.getValue(),Q=K.getValue()
M.length=0
var R
if(P)for(R in P)if(P.hasOwnProperty(R))if(P[R]['typing$bool'])M.push(P[R]['display_name$string'])
if(Q)for(R in Q)if(Q.hasOwnProperty(R))if(Q[R]['typing$bool'])M.push(R)
if(M.length){E.setText((M.length==1?u(142):u(143)).replace('<name>',M.join(', ')))
E.setDisplay('')
L.update({'agent_typing$bool':!0})}
else{E.setDisplay('none')
L.update({'agent_typing$bool':!1})}}
N()})()
for(var G in F)if(F.hasOwnProperty(G))E[G]=F[G]
if(E.fire)E.fire('init')
E.setStyle&&E.setStyle(z)
E.setAttributes&&E.setAttributes(B)
if(typeof E.addChildren=='function')E.addChildren(A)
else v.addChildren(E,A)
if(E!==this){E.__jx__constructor=b.__$$__meshim_widget_widgets_chatLogRenderer_TypingRenderer
E.__jx__native=!1}
return E}
w.prototype=e(b.__$$__meshim_widget_widgets_chatLogRenderer_SystemLogRenderer.prototype)
w.prototype.__jx__native=!1
w.prototype.__jx__super=b.__$$__meshim_widget_widgets_chatLogRenderer_SystemLogRenderer
w.__jx__jcss={"**self":{"width":"100%"}}
w.prototype.__jx__fqname_chain=[(w.prototype.__jx__fqname_chain||"")," ","meshim_widget_widgets_chatLogRenderer_TypingRenderer"].join('')
w.prototype.__jx__fqname="meshim_widget_widgets_chatLogRenderer_TypingRenderer"
w.prototype.__jx__constructor=w
return w})()
b.__$$__meshim_widget_components_chatWindow_EmailTranscriptMenu=(function(){function w(x,y,z,A,B){if(!(this instanceof w))return new w(x,y,z,A,B)
y=y||v.generateID()
var C=[b.__$$__meshim_widget_widgets_Menu,null,null,[[b.__$$__meshim_widget_widgets_menu_Section,null,null,[[b.__$$__jx_ui_Form,"form",null,[[b.__$$__meshim_widget_widgets_menu_Header,"label",null,[u(32)],{"id":"label","addClass":"label","selectable":"false"}],[b.__$$__meshim_widget_widgets_EmailField,"email",null,[],{"id":"email","addClass":"email mobile_error_icon","placeholder":u(33),"required":"true"}],[b.__$$__meshim_widget_widgets_ErrorMessage,"error_message",null,[u(34)],{"id":"error_message","useDisplay":"true"}],[b.__$$__meshim_widget_widgets_Controls,null,null,[[b.__$$__meshim_widget_widgets_Submit,null,null,[],{"value":u(26),"class":"short"}],[b.__$$__meshim_widget_widgets_Button,"cancel",null,[u(29)],{"id":"cancel","addClass":"secondary short"}]],{}]],{"id":"form","noValidate":"true"}]],{"addClass":"flow"}]],{}],D=C[0].call(this,x,y,null,v.mangleIDs(y,C[3]),C[4]),E=D||this
v.set(y,E)
var F=v.get(y+'__form'),G=v.get(y+'__label'),H=v.get(y+'__email'),I=v.get(y+'__error_message'),J=v.get(y+'__cancel')
if(!w.__jx__jcss_generated){t.generate(x,w.prototype.__jx__fqname,w.__jx__jcss,null,w)
w.__jx__jcss_generated=!0}
var K=(function(){var M=b.__$$__meshim_widget_controllers_DataController,N=b.__$$__meshim_common_Regex,O=M.root.$('livechat').$('ui').$('chat_window').$('menu_stack_name$string'),P=M.root.$('livechat').$('ui').$('chat_window').$('email_transcript_notification').$('last_sent_email$string'),Q=M.root.$('livechat').$('channel')
function R(){H.setLabelElement(G).setErrorMessageElement(I).setValidity(!0)
F.on('submit',function(S){S.preventDefault()
if(!H.validate(!0))return
var T=N.trim(H.getValue())
Q.write({'email_transcript$string':T})
P.update(T)
O.update('email_transcript_notification')
H.reset()})
J.on('click',function(){O.update('')})
E.autobind(O,'value',function(S){if(S==E.getName()){H.setValidity(!0)
H.focus()}})}
R()})()
for(var L in K)if(K.hasOwnProperty(L))E[L]=K[L]
if(E.fire)E.fire('init')
E.setStyle&&E.setStyle(z)
E.setAttributes&&E.setAttributes(B)
if(typeof E.addChildren=='function')E.addChildren(A)
else v.addChildren(E,A)
if(E!==this){E.__jx__constructor=b.__$$__meshim_widget_components_chatWindow_EmailTranscriptMenu
E.__jx__native=!1}
return E}
w.prototype=e(b.__$$__meshim_widget_widgets_Menu.prototype)
w.prototype.__jx__native=!1
w.prototype.__jx__super=b.__$$__meshim_widget_widgets_Menu
w.__jx__jcss={}
w.prototype.__jx__fqname_chain=[(w.prototype.__jx__fqname_chain||"")," ","meshim_widget_components_chatWindow_EmailTranscriptMenu"].join('')
w.prototype.__jx__fqname="meshim_widget_components_chatWindow_EmailTranscriptMenu"
w.prototype.__jx__constructor=w
return w})()
b.__$$__meshim_widget_widgets_AutoResizeTextArea=(function(){var w=b.__$$__meshim_widget_widgets_TextArea
function x(A,B,C,D,E){if(!(this instanceof x))return new x(A,B,C,D,E)
this.$node
if(!x.__jx__jcss_generated){t.generate(this,x.prototype.__jx__fqname,x.__jx__jcss,null,x)
x.__jx__jcss_generated=!0}
this.minHeight=0
this.maxHeight=window.Infinity
this.vBoxOffset=0
this.hBoxOffset=0
if(!E)E={}
E.overflow||(E.overflow='hidden')
E.overflowY||(E.overflowY='hidden')
w.call(this,A,B,C,D,E)
this.style.wordWrap='break-word'
this.style.resize='none'
this.compatMode=p.bugs.noBoxSizing&&this.doc.compatMode!="CSS1Compat"&&this.doc!=document
if(!this.compatMode){this.fakeTextArea=new w(this.doc.body,null,null,null,{className:this.getClassName(),tabIndex:"-1"})
try {this.fakeTextArea.setStyle("position:absolute; top:-999px; left:0; right:auto; bottom:auto; border:0; word-wrap:break-word; height:0 !important; overflow:hidden; min-height:0 !important; -moz-box-sizing:content-box; -webkit-box-sizing:content-box; box-sizing:content-box;")}catch(G){;}
this.onDestruction(function(){this.fakeTextArea.destroy()})}
this._updateHeight=function(){this.updateHeight()}
if('onpropertychange' in this.dom){if('oninput' in this.dom){this.on('input',this._updateHeight)
this.on('keyup',this._updateHeight)}
else{this.on('propertychange',this._updateHeight)}}
else{this.on('input',this._updateHeight)}
var F=this
l(function(){if(!F.dom)return
F.updateStyles()})
this._updateValueNode=function(){this.updateValueNode()}
this._readValueNode=function(G){F.readValueNode(G)}
this.on('input',this._updateValueNode)
this.on('change',this._updateValueNode)
this.on('keyup',this._updateValueNode)}
x.__jx__jcss={"**self":{}}
x.prototype=e(w.prototype)
x.prototype.__jx__super=w
x.prototype.updateValueNode=function(){if(!this.$node)return
this._updatingValueNode=!0
this.$node.$('value$string').update(this.getValue())
this._updatingValueNode=!1}
x.prototype.readValueNode=function(A){if(!this.$node)return
if(this._updatingValueNode)return
if(A==null)return
this.setValue(A)}
x.prototype.updateHeight=function(){if(!this.compatMode&&!this.fakeTextArea)return
if(this.active)return
var A,B,C
this.active=!0
if(this.compatMode){this.style.height=0
A=this.dom.offsetHeight-this.vBoxOffset}
else{this.fakeTextArea.setValue(this.getValue())
this.fakeTextArea.style.overflowY=this.style.overflowY
C=parseInt(this.style.height,10)
this.fakeTextArea.style.width=Math.max(Math.max(this.dom.offsetWidth,0)-this.hBoxOffset,0)+'px'
this.fakeTextArea.dom.scrollTop=0
this.fakeTextArea.dom.scrollTop=90000.0
A=this.fakeTextArea.dom.scrollTop}
var D=this.maxHeight-this.vBoxOffset,E=this.minHeight-this.vBoxOffset
if(A>D){A=D
B='scroll'}
else if(A<E){A=E}
A+=this.vBoxOffset
A=Math.max(A,0)
this.style.overflowY=B||'hidden'
this.style.height=A+'px'
this.$node&&this.$node.update({'height$int':A,'overflow$bool':!!B})
var F=this
l(function(){F.active=!1})}
var y=['Top','Bottom'],z=['Left','Right']
x.prototype.updateBoxOffset=function(){this.vBoxOffset=0
this.hBoxOffset=0
var A=this.getComputedStyle(),B
if(A.boxSizing==='border-box'||A.MozBoxSizing==='border-box'||A.webkitBoxSizing==='border-box'||(p.isIE<=7&&this.doc.compatMode!="CSS1Compat")){for(B=0;B<2;B++){this.vBoxOffset+=(parseInt(A['padding'+y[B]],10)||0)+(parseInt(A['border'+y[B]+'Width'],10)||0)}
for(B=0;B<2;B++){this.hBoxOffset+=(parseInt(A['padding'+z[B]],10)||0)+(parseInt(A['border'+z[B]+'Width'],10)||0)}}
return this}
x.prototype.setDataNode=function(A){if(this.$node){this.autounbind(this.$node.$('value$string'),'value',this._readValueNode)}
this.$node=A
if(this.$node){this.autobind(this.$node.$('value$string'),'value',this._readValueNode)
this.updateValueNode()
this.updateHeight()}
return this}
x.prototype.setValue=function(A){w.prototype.setValue.call(this,A)
this.updateValueNode()
this.updateHeight()
return this}
x.prototype.updateMinMaxHeight=function(){var A=this.getComputedStyle()
this.minHeight=parseInt(A.minHeight,10)
this.maxHeight=parseInt(A.maxHeight,10)
if(!this.minHeight&&isNaN(this.maxHeight)){this.style.height=''
this.minHeight=this.maxHeight=this.dom.offsetHeight}
if(isNaN(this.maxHeight)){this.maxHeight=this.minHeight}
this.$node&&this.$node.update({'min_height$string':this.minHeight,'max_height$string':this.maxHeight})
return this}
x.prototype.updateClonedStyles=function(){if(!this.fakeTextArea)return
var A=['fontFamily','fontSize','fontWeight','letterSpacing','textTransform','wordSpacing','textIndent']
this.fakeTextArea.style.lineHeight='99px'
if(this.fakeTextArea.style.lineHeight==='99px')A.push('lineHeight')
this.fakeTextArea.style.lineHeight=''
var B=this.getComputedStyle()
for(var C=0,D=A.length;C<D;C++){this.fakeTextArea.style[A[C]]=B[A[C]]}}
x.prototype.updateStyles=function(){if(p.isIE8)this.style.minHeight=''
this.updateMinMaxHeight()
this.updateClonedStyles()
this.updateBoxOffset()
if(p.isIE8)this.style.minHeight=(this.minHeight-this.vBoxOffset)+'px'
this.updateHeight()
var A=this
if(p.isIE8)l(function(){A.updateHeight()})
return this}
if((typeof x==='function')&&x.prototype&&!x.__jx__no_fqname){x.prototype.__jx__fqname_chain=[(x.prototype.__jx__fqname_chain||"")," ","meshim_widget_widgets_AutoResizeTextArea"].join('')
x.prototype.__jx__fqname="meshim_widget_widgets_AutoResizeTextArea"}
return x})()
b.__$$__meshim_widget_components_chatWindow_postChatForm_RatingForm=(function(){function w(x,y,z,A,B){if(!(this instanceof w))return new w(x,y,z,A,B)
y=y||v.generateID()
var C=[b.__$$__meshim_widget_widgets_ChatWindowContent,null,null,[[b.__$$__meshim_widget_widgets_ScrollableFrame,null,null,[[b.__$$__meshim_widget_widgets_Header,"header",null,[],{"id":"header"}],[b.__$$__meshim_widget_widgets_Body,"message",null,[],{"id":"message"}],[b.__$$__meshim_widget_widgets_RatingBar,"rating_bar",null,[],{"id":"rating_bar","addClass":"rating_bar","description":"true"}],[b.__$$__meshim_widget_widgets_motif_Chat,null,null,[],{"addClass":"chat_motif"}]],{"addClass":"scrollable_frame"}]],{}],D=C[0].call(this,x,y,null,v.mangleIDs(y,C[3]),C[4]),E=D||this
v.set(y,E)
var F=v.get(y+'__header'),G=v.get(y+'__message'),H=v.get(y+'__rating_bar')
if(!w.__jx__jcss_generated){t.generate(x,w.prototype.__jx__fqname,w.__jx__jcss,null,w)
w.__jx__jcss_generated=!0}
var I=(function(){var K=b.__$$__meshim_widget_controllers_DataController,L=b.__$$__meshim_widget_utils_Strings,M=b.__$$__meshim_widget_utils_BindClass,N=K.root.$('livechat').$('settings').$('forms').$('post_chat_form'),O=N.$('header$string'),P=N.$('message$string'),Q=K.root.$('livechat').$('channel'),R=Q.$('rating$string')
function S(){M.mobile(E)
H.setDataNode(R)
E.autobind(O,'value',function(){F.setText(L.get(O))})
E.autobind(P,'value',function(){G.setText(L.get(P))})}
S()})()
for(var J in I)if(I.hasOwnProperty(J))E[J]=I[J]
if(E.fire)E.fire('init')
E.setStyle&&E.setStyle(z)
E.setAttributes&&E.setAttributes(B)
if(typeof E.addChildren=='function')E.addChildren(A)
else v.addChildren(E,A)
if(E!==this){E.__jx__constructor=b.__$$__meshim_widget_components_chatWindow_postChatForm_RatingForm
E.__jx__native=!1}
return E}
w.prototype=e(b.__$$__meshim_widget_widgets_ChatWindowContent.prototype)
w.prototype.__jx__native=!1
w.prototype.__jx__super=b.__$$__meshim_widget_widgets_ChatWindowContent
w.__jx__jcss={"**self":{"textAlign":"center"},".rating_bar":{"display":"inline-block","width":"150px"},".chat_motif":{"position":"absolute","bottom, left":0},".scrollable_frame":{"paddingBottom":"0 !important"},"&.mobile":{".chat_motif":{"position":"relative"}}}
w.prototype.__jx__fqname_chain=[(w.prototype.__jx__fqname_chain||"")," ","meshim_widget_components_chatWindow_postChatForm_RatingForm"].join('')
w.prototype.__jx__fqname="meshim_widget_components_chatWindow_postChatForm_RatingForm"
w.prototype.__jx__constructor=w
return w})()
b.__$$__meshim_widget_widgets_form_DepartmentSelect=(function(){var w=b.__$$__meshim_widget_controllers_DataController,x=b.__$$__meshim_widget_controllers_DefaultDataNode,y=b.__$$__meshim_widget_widgets_Select,z=b.__$$__meshim_widget_utils_Utils,A=b.__$$__meshim_widget_utils_Strings,B=b.__$$__jx_ui_Option
function C(E,F,G,H,I){if(!(this instanceof C))return new C(E,F,G,H,I)
this.inputSuffix='select'
if(!C.__jx__jcss_generated){t.generate(this,C.prototype.__jx__fqname,C.__jx__jcss,null,C)
C.__jx__jcss_generated=!0}
y.call(this,E,F,G,H,I)
this.departments_label_path='livechat.settings.forms.pre_chat_form.form.2.label$string'
this.default_departments_label=z.descendsObj(x,this.departments_label_path)
this.$departments=w.root.$('livechat').$('groups')
this.$departments_label=w.root.$$(this.departments_label_path)
var J=this
this.autobind(this.$departments,'value',function(){J.setOptions()})
this.autobind(this.$departments_label,'value',function(){J.updateBlankOption()})
this.onDestruction(function(){if(J.blank_option){J.blank_option.destroy()
J.blank_option=null}})
this.setSelectedIndex(0)}
C.__jx__jcss={}
C.prototype=e(y.prototype)
C.prototype.__jx__super=y
C.prototype.validate=function(){if(this.isBlank){this.setValidity(!0)
return !0}
return y.prototype.validate.call(this)}
C.prototype.reset=function(){this.setSelectedIndex(0)}
C.prototype.setHide=function(E){this.isHide=m(E)
this.setOptions()}
C.prototype.setRequired=function(){var E=y.prototype.setRequired.apply(this,arguments)
this.updateBlankOption()
return E}
C.prototype.updateBlankOption=function(){if(!this.blank_option)return
if(this.getRequired()){if(this.children[0]==this.blank_option){this.removeChild(this.blank_option)}}
else{this.blank_option.setText(A.get(this.$departments_label)==this.default_departments_label?A.pre_chat_offline_form.department_any:'—')
if(this.children[0]!==this.blank_option){this.insertBefore(this.blank_option,this.children[0])}}}
C.prototype.setOptions=function(){var E=this.$departments.getValue(),F=this.$departments.$('filter_enabled$bool').getValue(),G={},H=this.getValue()
this.isBlank=!0
for(var I in E)if(E.hasOwnProperty(I)){if(I=='filter_enabled$bool')continue
if(F&&!E[I]['display$bool'])continue
if(E[I]){this.isBlank=!1
G[I]=E[I]}}
if(this.isBlank||this.isHide){(this.container||this).parentNode.setDisplay('none')
return}
else{(this.container||this).parentNode.setDisplay('')}
this.empty()
var J=this.getName(),K
this.blank_option=K=new B(this,null,null,null,{name:'',value:'',className:'input_input_'+this.inputSuffix});(K.container||K).addClass('input')
G=D(G)
for(I in G)if(G.hasOwnProperty(I)){K=new B(this,null,null,[G[I]['name$string']+(G[I]['status$string']=='online'?'':' ('+u(39)+')')],{name:J,value:G[I]['name$string'],className:'input_input_'+this.inputSuffix});(K.container||K).addClass('input')}
this.setValue(H)
this.updateBlankOption()}
function D(E){var F=[],G=[]
for(var H in E)if(E.hasOwnProperty(H)){if(E.hasOwnProperty(H)){if(E[H]['status$string']=='offline'){G.push({'name$string':H,'status$string':'offline'})}
else{F.push({'name$string':H,'status$string':'online'})}}}
F.sort(I)
G.sort(I)
return F.concat(G)
function I(J,K){if(J['name$string']<K['name$string'])return -1
if(J['name$string']>K['name$string'])return 1
return 0}}
if((typeof C==='function')&&C.prototype&&!C.__jx__no_fqname){C.prototype.__jx__fqname_chain=[(C.prototype.__jx__fqname_chain||"")," ","meshim_widget_widgets_form_DepartmentSelect"].join('')
C.prototype.__jx__fqname="meshim_widget_widgets_form_DepartmentSelect"}
return C})()
b.__$$__meshim_widget_widgets_chatLogRenderer_ChatBubble=(function(){function w(x,y,z,A,B){if(!(this instanceof w))return new w(x,y,z,A,B)
y=y||v.generateID()
var C=[b.__$$__meshim_widget_widgets_chatLogRenderer_ArrowBubble,null,null,[[b.__$$__meshim_widget_widgets_chatLogRenderer_BasicRenderer,"content",null,[],{"id":"content","class":"content"}]],{"addClass":"chat_bubble"}],D=C[0].call(this,x,y,null,v.mangleIDs(y,C[3]),C[4]),E=D||this
v.set(y,E)
var F=v.get(y+'__content')
if(!w.__jx__jcss_generated){t.generate(x,w.prototype.__jx__fqname,w.__jx__jcss,null,w)
w.__jx__jcss_generated=!0}
var G=(function(){var I=/^agent/,J=/^visitor:/,K
function L(){E.setDataNode=M}
function M(O){if(!K){F.setDataNode(O)}
if(K)E.autounbind(K,'value',N)
K=O.$('nick$string')
E.autobind(K,'value',N)}
function N(O){if(!O)return
if(I.test(O)){E.setArrowPointing('left')
E.setFloat('left')}
else if(J.test(O)){E.setArrowPointing('right')
E.setFloat('right')}}
L()})()
for(var H in G)if(G.hasOwnProperty(H))E[H]=G[H]
if(E.fire)E.fire('init')
E.setStyle&&E.setStyle(z)
E.setAttributes&&E.setAttributes(B)
if(typeof E.addChildren=='function')E.addChildren(A)
else v.addChildren(E,A)
if(E!==this){E.__jx__constructor=b.__$$__meshim_widget_widgets_chatLogRenderer_ChatBubble
E.__jx__native=!1}
return E}
w.prototype=e(b.__$$__meshim_widget_widgets_chatLogRenderer_ArrowBubble.prototype)
w.prototype.__jx__native=!1
w.prototype.__jx__super=b.__$$__meshim_widget_widgets_chatLogRenderer_ArrowBubble
w.__jx__jcss={"**self":{"maxWidth":"90%","clear":"both","padding":"5px 10px","margin":"0px 5px","radius":"4px",".arrow_border":{"top":"auto !important","bottom":"5px","marginTop":"0px","borderWidth":"6px"},".arrow_background":{"top":"auto !important","bottom":"6px","marginTop":"0px","borderWidth":"5px"},".content":{"marginTop":"0px"}}}
w.prototype.__jx__fqname_chain=[(w.prototype.__jx__fqname_chain||"")," ","meshim_widget_widgets_chatLogRenderer_ChatBubble"].join('')
w.prototype.__jx__fqname="meshim_widget_widgets_chatLogRenderer_ChatBubble"
w.prototype.__jx__constructor=w
return w})()
b.__$$__meshim_widget_widgets_AgentProfileCard=(function(){function w(x,y,z,A,B){if(!(this instanceof w))return new w(x,y,z,A,B)
y=y||v.generateID()
var C=[b.__$$__meshim_widget_widgets_ProfileCard,null,null,[],{}],D=C[0].call(this,x,y,null,v.mangleIDs(y,C[3]),C[4]),E=D||this
v.set(y,E)
if(!w.__jx__jcss_generated){t.generate(x,w.prototype.__jx__fqname,w.__jx__jcss,null,w)
w.__jx__jcss_generated=!0}
var F=(function(){var H=b.__$$__meshim_widget_controllers_DataController,I=b.__$$__meshim_common_ChainedValueDataNode,J=H.root.$$('livechat.settings.concierge'),K=J.$('title$string'),L
function M(O){L.call(E,O)
if(!O||O===J)return
var P=O.$('title$string'),Q=new I(P,K)
E.setTitleNode(Q)}
function N(){L=E.setDataNode||function(){}
E.setDataNode=M}
N()})()
for(var G in F)if(F.hasOwnProperty(G))E[G]=F[G]
if(E.fire)E.fire('init')
E.setStyle&&E.setStyle(z)
E.setAttributes&&E.setAttributes(B)
if(typeof E.addChildren=='function')E.addChildren(A)
else v.addChildren(E,A)
if(E!==this){E.__jx__constructor=b.__$$__meshim_widget_widgets_AgentProfileCard
E.__jx__native=!1}
return E}
w.prototype=e(b.__$$__meshim_widget_widgets_ProfileCard.prototype)
w.prototype.__jx__native=!1
w.prototype.__jx__super=b.__$$__meshim_widget_widgets_ProfileCard
w.__jx__jcss={}
w.prototype.__jx__fqname_chain=[(w.prototype.__jx__fqname_chain||"")," ","meshim_widget_widgets_AgentProfileCard"].join('')
w.prototype.__jx__fqname="meshim_widget_widgets_AgentProfileCard"
w.prototype.__jx__constructor=w
return w})()
b.__$$__meshim_widget_widgets_chatLogRenderer_BasicAvatarRenderer=(function(){function w(x,y,z,A,B){if(!(this instanceof w))return new w(x,y,z,A,B)
y=y||v.generateID()
var C=[b.__$$__jx_ui_html_table,null,null,[[b.__$$__jx_ui_html_tbody,null,null,[[b.__$$__jx_ui_html_tr,null,null,[[b.__$$__jx_ui_html_td,null,null,[[b.__$$__meshim_widget_widgets_Avatar,"avatar",null,[],{"id":"avatar","addClass":"log_avatar","hideAuthType":"true"}]],{"class":"avatar_cell"}],[b.__$$__jx_ui_html_td,null,null,[[b.__$$__meshim_widget_widgets_chatLogRenderer_BasicRenderer,"content",null,[],{"id":"content","addClass":"content"}]],{}]],{}]],{}]],{"class":"basicAvatarRenderer"}],D=C[0].call(this,x,y,null,v.mangleIDs(y,C[3]),C[4]),E=D||this
v.set(y,E)
var F=v.get(y+'__avatar'),G=v.get(y+'__content')
if(!w.__jx__jcss_generated){t.generate(x,w.prototype.__jx__fqname,w.__jx__jcss,null,w)
w.__jx__jcss_generated=!0}
var H=(function(){var J
function K(){E.setDataNode=L}
function L(N){if(J)E.autounbind(J,'value',M)
G.setDataNode(N)
J=N.$('nick$string')
E.autobind(J,'value',M)}
function M(N){if(!N)return
F.setMemberId(N)}
K()})()
for(var I in H)if(H.hasOwnProperty(I))E[I]=H[I]
if(E.fire)E.fire('init')
E.setStyle&&E.setStyle(z)
E.setAttributes&&E.setAttributes(B)
if(typeof E.addChildren=='function')E.addChildren(A)
else v.addChildren(E,A)
if(E!==this){E.__jx__constructor=b.__$$__meshim_widget_widgets_chatLogRenderer_BasicAvatarRenderer
E.__jx__native=!1}
return E}
w.prototype=e(b.__$$__jx_ui_html_table.prototype)
w.prototype.__jx__native=!1
w.prototype.__jx__super=b.__$$__jx_ui_html_table
w.__jx__jcss={"**self":{"position":"relative","width":"100%","tableLayout":"fixed","borderSpacing":"0px","borderCollapse":"collapse","fontSize":"100%","td":{"verticalAlign":"top","padding":"0px"},".log_avatar":{"width":"24px","height":"24px"},".avatar_cell":{"width":"24px"},".content":{"marginTop":"0px","marginLeft":"8px"}},"**self.group_children":{".log_avatar":{"display":"none"},".chat_name":{"display":"none"}}}
w.prototype.__jx__fqname_chain=[(w.prototype.__jx__fqname_chain||"")," ","meshim_widget_widgets_chatLogRenderer_BasicAvatarRenderer"].join('')
w.prototype.__jx__fqname="meshim_widget_widgets_chatLogRenderer_BasicAvatarRenderer"
w.prototype.__jx__constructor=w
return w})()
b.__$$__meshim_widget_components_ChatButton=(function(){function w(x,y,z,A,B){if(!(this instanceof w))return new w(x,y,z,A,B)
y=y||v.generateID()
var C=[b.__$$__jx_ui_FloatingFrame,null,null,[[b.__$$__meshim_widget_widgets_fontLoader_ZopimFont,null,null,[],{}],[b.__$$__meshim_widget_components_chatButton_Bubble,null,null,[],{"addClass":"bubble"}],[b.__$$__meshim_widget_components_chatButton_Button,null,null,[],{"addClass":"button"}]],{"cursor":"pointer"}],D=C[0].call(this,x,y,null,v.mangleIDs(y,C[3]),C[4]),E=D||this
v.set(y,E)
if(!w.__jx__jcss_generated){t.generate(x,w.prototype.__jx__fqname,w.__jx__jcss,null,w)
w.__jx__jcss_generated=!0}
var F=(function(){var H=b.__$$__meshim_widget_Config,I=b.__$$__meshim_widget_controllers_CookieLaw,J=b.__$$__meshim_widget_controllers_DataController,K=b.__$$__meshim_widget_controllers_GoogleAnalytics,L=b.__$$__meshim_widget_controllers_PopoutController,M=b.__$$__meshim_widget_controllers_UIController,N=b.__$$__meshim_widget_utils_Utils,O=b.__$$__meshim_widget_utils_Mobile,P=b.__$$__meshim_widget_controllers_ErrorHandler,Q=b.__$$__jx_ui_Widget,R=J.root.$('livechat'),S=R.$('settings'),T=R.$('ui'),U=T.$('chat_button'),V=T.$('chat_button').$('display$bool'),W=-1,X=T.$('chat_button').$('bubble').$('display$bool'),Y=-1,Z=U.$('button_width$int'),$$=U.$('button_height$int'),$_=U.$('bubble_height$int'),$a=S.$('theme').$('chat_button').$('position$string'),$b,$c=S.$('theme').$('chat_button').$('position_mobile$string'),$d,$e=S.$$('theme.chat_button.h_offset$int'),$f=S.$$('theme.chat_button.v_offset$int'),$g=S.$$('theme.chat_button.h_offset_mobile$int'),$h=S.$$('theme.chat_button.v_offset_mobile$int'),$i=T.$('mobile$bool').getValue(),$j=T.$('mockup$bool').getValue(),$k=R.$('account').$('key$string'),$l,$m=0,$n=10,$o=10,$p=10
function $q(){P.bind(E.iwin)
E.dom.className='zopim'
E.content.addClass('meshim_widget_Widget')
E.wrapper.addClass(E.__jx__fqname)
E.ibody.style.overflow='hidden'
if($j){E.setPosition('relative')}
if($i){E.wrapper.addClass('mobile').setStyle({position:'absolute',top:0,left:0})
E.content.setStyle('textAlign','left')
E.iframe.style.verticalAlign='top'
$l=new Q(E,null,null,null,{tagName:'a',position:'absolute',width:'100%',height:'100%',top:0,left:0})
$l.setAttribute('target',H.POPOUT_WINDOW_PREFIX+$k.getValue())
$l.setAttribute('href',L.getPopoutURL())
$l.on('click',function($C){K.trackEvent('Button Clicked')
$l.setAttribute('href',L.getPopoutURL())
U.write({'unread_count$int':0})
if(I.isCookieDenied()){if(window.confirm(u(0)+'\n\n'+u(1)+': https://www.zopim.com/privacy#cookie')){L.openPopout(!0)&&$C.preventDefault()
I.setUserChoice(!0)}
else{$C.preventDefault()}}
else{L.openPopout(!0)&&$C.preventDefault()}})
E.autobind($g,'value',function($C){$C=parseInt($C)
if($p==$C)return
if(!isNaN($C)&&$C>=0){$p=$C
$A()}})
E.autobind($h,'value',function($C){$C=parseInt($C)
if($n==$C)return
if(!isNaN($C)&&$C>=0){$n=$C
$A()}})
E.autobind($c,'value',function($C){if(!$C||$d==$C)return
if($C!='bl'&&$C!='br')$C='br'
if($d)E.wrapper.removeClass($d)
$d=$C
if($d)E.wrapper.addClass($d)
$A()})
q.window.on('orientationchange',$A)
q.window.on('resize',$A)
q.window.on('scroll',$A)}
if(!$i){E.autobind(X,'value',function($C){if(Y==$C)return
Y=$C
$u()})
E.autobind($e,'value',function($C){$C=parseInt($C)
if(!isNaN($C)&&$C>=0){$o=$C
$s()}})
E.autobind($f,'value',function($C){$C=parseInt($C)
if(!isNaN($C)&&$C>=0){$m=$C
$s()}})
E.autobind(Z,'value',function($C){if(!$C)return
$u()})
E.autobind($$,'value',function($C){if(!$C)return
$u()})
E.autobind($_,'value',function($C){if(!$C)return
$u()})
E.autobind($a,'value',function($C){if($b)E.wrapper.removeClass($b)
$b=$C
if($b)E.wrapper.addClass($b)
$s()})}
E.autobind(V,'value',function($C){if(W==$C)return
W=$C
$r()})
E.on('click',function(){K.trackEvent('Button Clicked')
U.write({'button_clicked$bool':!0})
if($i)L.openPopout(!0)
else M.userShowBadgeOrWindow()})}
function $r(){var $C=W
if($i&&!$y){E.setDisplay('none')}
else{E.setDisplay($C?'':'none')}
$u()}
function $s(){$t()
if(p.bugs.noBoxSizing){window.setTimeout(function(){E.dom.className=E.dom.className},100)}}
function $t(){if($i)return
if($j){E.setTop('').setRight('').setBottom('').setLeft('')
return}
switch($b){case 'br':E.setTop('').setLeft('').setMarginLeft('').setRight($o).setBottom($m)
break
case 'bm':E.setTop('').setRight('').setBottom($m).setLeft('50%').setMarginLeft(-Math.round(E.__width/2)+'px')
break
case 'bl':E.setTop('').setRight('').setMarginLeft('').setBottom($m).setLeft($o)
break
case 'tr':E.setBottom('').setLeft('').setMarginLeft('').setTop($m).setRight($o)
break
case 'tm':E.setRight('').setBottom('').setTop($m).setLeft('50%').setMarginLeft(-Math.round(E.__width/2)+'px')
break
case 'tl':E.setRight('').setBottom('').setMarginLeft('').setTop($m).setLeft($o)
break
default:break}}
function $u(){$w()
l($v,E,'once')}
function $v(){$w()
$A()}
function $w(){if($i)return
var $C=Z.getValue()||10
if($C!==E.getWidth())E.setWidth($C+'px')
var $D=$$.getValue()||10
if(Y)$D+=$_.getValue()||0
if($D!==E.getHeight())E.setHeight($D+'px')}
var $x,$y,$z=300
function $A(){if(!$i)return
window.clearTimeout($x)
$x=window.setTimeout($B,$z)}
function $B(){var $C=O.getZoomLevel(),$D=(1/$C).toFixed(2),$E=window.pageXOffset,$F=window.pageYOffset,$G=window.innerWidth,$H=window.innerHeight,$I=E.wrapper.getWidth(),$J=E.wrapper.getHeight()
for(var $K=0,$L=N.cssom_prefixes.length;$K<$L;$K++){E.wrapper.setStyle(N.cssom_prefixes[$K]+'Transform','scale('+$D+')')
E.wrapper.setStyle(N.cssom_prefixes[$K]+'TransformOrigin','0 0')}
var $M=$I/$C,$N=$J/$C,$O=O.getOffset(),$P=(p.isIOS&&$C>=1)?'absolute':'fixed',$Q,$R,$S,$T
E.setStyle({position:$P,width:$M+'px',height:$N+'px',top:'',right:'',bottom:'',left:''})
if($P==='fixed'){$Q='auto'
$R=$d==='bl'?'auto':($p/$C)+'px'
$S=($n/$C)+'px'
$T=$d==='bl'?($p/$C)+'px':'auto'}
else{$Q=Math.ceil($F+$H-$N-($n/$C)-$O.top)+'px'
$R='auto'
$S='auto'
if($d==='bl'){$T=Math.ceil($E+($p/$C)-$O.left)+'px'}
else{$T=Math.floor($E+$G-$M-($p/$C)-$O.left)+'px'}}
E.setStyle({top:$Q,right:$R,bottom:$S,left:$T})
if(!$y){$y=!0
E.setDisplay(W?'':'none')}}
$q()})()
for(var G in F)if(F.hasOwnProperty(G))E[G]=F[G]
if(E.fire)E.fire('init')
E.setStyle&&E.setStyle(z)
E.setAttributes&&E.setAttributes(B)
if(typeof E.addChildren=='function')E.addChildren(A)
else v.addChildren(E,A)
if(E!==this){E.__jx__constructor=b.__$$__meshim_widget_components_ChatButton
E.__jx__native=!1}
return E}
w.prototype=e(b.__$$__jx_ui_FloatingFrame.prototype)
w.prototype.__jx__native=!1
w.prototype.__jx__super=b.__$$__jx_ui_FloatingFrame
w.__jx__jcss={"**self":{"*width":"100%"},"&.bm, &.tm":{"margin":"0 auto"},"&.rm, &.lm":{".favicon":{"transform":"rotate(-90deg)","filter":"progid:DXImageTransform.Microsoft.BasicImage(rotation=3)"}},"&.br, &.bm, &.bl":{".button":{"borderTopLeftRadius, borderTopRightRadius":"$$chatButtonRadius"},".favicon":{"borderTopLeftRadius":"$$chatButtonRadius"},".rtl .favicon":{"borderTopLeftRadius":0,"borderTopRightRadius":"$$chatButtonRadius"}},"&.tr, &.tm, &.tl":{".button":{"borderBottomLeftRadius, borderBottomRightRadius":"$$chatButtonRadius"},".favicon":{"borderBottomLeftRadius":"$$chatButtonRadius"},".rtl .favicon":{"borderBottomLeftRadius":0,"borderBottomRightRadius":"$$chatButtonRadius"}},"&.rm":{".button":{"borderTopLeftRadius, borderBottomLeftRadius":"$$chatButtonRadius"},".favicon":{"borderTopLeftRadius":"$$chatButtonRadius"}},"&.lm":{".button":{"borderTopRightRadius, borderBottomRightRadius":"$$chatButtonRadius"},".favicon":{"borderTopRightRadius":"$$chatButtonRadius"}},"&.mobile":{".button":{"borderRadius":"$$chatButtonRadius"},"&.br":{".favicon":{"borderBottomLeftRadius":"$$chatButtonRadius"}},"&.bl":{".favicon":{"borderBottomRightRadius":"$$chatButtonRadius"}}}}
w.prototype.__jx__fqname_chain=[(w.prototype.__jx__fqname_chain||"")," ","meshim_widget_components_ChatButton"].join('')
w.prototype.__jx__fqname="meshim_widget_components_ChatButton"
w.prototype.__jx__constructor=w
return w})()
b.__$$__meshim_widget_widgets_VisitorProfileCard=(function(){function w(x,y,z,A,B){if(!(this instanceof w))return new w(x,y,z,A,B)
y=y||v.generateID()
var C=[b.__$$__meshim_widget_widgets_ProfileCard,null,null,[],{}],D=C[0].call(this,x,y,null,v.mangleIDs(y,C[3]),C[4]),E=D||this
v.set(y,E)
if(!w.__jx__jcss_generated){t.generate(x,w.prototype.__jx__fqname,w.__jx__jcss,null,w)
w.__jx__jcss_generated=!0}
var F=(function(){var H
function I(K){H.call(E,K)
if(K)E.setTitleNode(K.$('email$string'))}
function J(){H=E.setDataNode||function(){}
E.setDataNode=I}
J()})()
for(var G in F)if(F.hasOwnProperty(G))E[G]=F[G]
if(E.fire)E.fire('init')
E.setStyle&&E.setStyle(z)
E.setAttributes&&E.setAttributes(B)
if(typeof E.addChildren=='function')E.addChildren(A)
else v.addChildren(E,A)
if(E!==this){E.__jx__constructor=b.__$$__meshim_widget_widgets_VisitorProfileCard
E.__jx__native=!1}
return E}
w.prototype=e(b.__$$__meshim_widget_widgets_ProfileCard.prototype)
w.prototype.__jx__native=!1
w.prototype.__jx__super=b.__$$__meshim_widget_widgets_ProfileCard
w.__jx__jcss={}
w.prototype.__jx__fqname_chain=[(w.prototype.__jx__fqname_chain||"")," ","meshim_widget_widgets_VisitorProfileCard"].join('')
w.prototype.__jx__fqname="meshim_widget_widgets_VisitorProfileCard"
w.prototype.__jx__constructor=w
return w})()
b.__$$__meshim_widget_components_chatWindow_profileMenu_Edit=(function(){function w(x,y,z,A,B){if(!(this instanceof w))return new w(x,y,z,A,B)
y=y||v.generateID()
var C=[b.__$$__jx_ui_Form,null,null,[[b.__$$__meshim_widget_widgets_menu_Section,"internal_section",null,[[b.__$$__meshim_widget_widgets_menu_Header,"label",null,[u(130)],{"id":"label","addClass":"label","selectable":"false"}],[b.__$$__jx_ui_Widget,"name_email_container",null,[[b.__$$__meshim_widget_widgets_TextField,"name",null,[],{"id":"name","placeholder":u(104),"required":"true","addClass":"standalone mobile_error_icon"}],[b.__$$__meshim_widget_widgets_ErrorMessage,"name_error",null,[u(131)],{"id":"name_error","useDisplay":"true"}],[b.__$$__meshim_widget_widgets_EmailField,"email",null,[],{"id":"email","placeholder":u(33),"required":"true","addClass":"standalone mobile_error_icon"}],[b.__$$__meshim_widget_widgets_ErrorMessage,"email_error",null,[u(132)],{"id":"email_error","useDisplay":"true"}]],{"id":"name_email_container"}],[b.__$$__jx_ui_Widget,"phone_container",null,[[b.__$$__meshim_widget_widgets_PhoneField,"phone",null,[],{"id":"phone","placeholder":u(15),"addClass":"standalone mobile_error_icon"}],[b.__$$__meshim_widget_widgets_ErrorMessage,"phone_error",null,[u(133)],{"id":"phone_error","useDisplay":"true"}]],{"id":"phone_container"}],[b.__$$__meshim_widget_widgets_Controls,null,null,[[b.__$$__meshim_widget_widgets_Submit,null,null,[],{"value":u(134),"addClass":"save short"}],[b.__$$__meshim_widget_widgets_Button,"cancel",null,[u(29)],{"id":"cancel","addClass":"cancel secondary"}]],{}]],{"id":"internal_section","addClass":"flow"}]],{"noValidate":"true"}],D=C[0].call(this,x,y,null,v.mangleIDs(y,C[3]),C[4]),E=D||this
v.set(y,E)
var F=v.get(y+'__internal_section'),G=v.get(y+'__label'),H=v.get(y+'__name_email_container'),I=v.get(y+'__name'),J=v.get(y+'__name_error'),K=v.get(y+'__email'),L=v.get(y+'__email_error'),M=v.get(y+'__phone_container'),N=v.get(y+'__phone'),O=v.get(y+'__phone_error'),P=v.get(y+'__cancel')
if(!w.__jx__jcss_generated){t.generate(x,w.prototype.__jx__fqname,w.__jx__jcss,null,w)
w.__jx__jcss_generated=!0}
var Q=(function(){var S=b.__$$__meshim_widget_controllers_DataController,T=b.__$$__meshim_widget_utils_Utils,U=b.__$$__meshim_widget_utils_BindClass,V=b.__$$__meshim_common_Regex,W=S.root.$('livechat'),X=W.$('profile'),Y=W.$('ui'),Z=X.$('auth').$('type$string'),$$,$_=Y.$('chat_window'),$a=X.$('logged_in$bool'),$b,$c=X.$('display_name$string'),$d=X.$('email$string'),$e=X.$('phone$string'),$f=$_.$('menu_stack_name$string'),$g=$_.$('profile_menu').$('index$int'),$h=W.$('settings').$('login'),$i=$h.$('allowed_types'),$j=$h.$('phone_display$bool'),$k
function $l(){U.mobile(E)
I.setLabelElement(G).setErrorMessageElement(J).setValidity(!0)
K.setErrorMessageElement(L).setValidity(!0)
N.setErrorMessageElement(O).setValidity(!0)
E.autobind($a,'value',function($o){$b=$o})
E.autobind(Z,'value',function($o){$$=$o
H.setDisplay($o?'none':'')})
E.autobind($c,'value',function($o){if(T.isDefaultName($o))$o=''
$o=$o||''
I.setValue($o)
I.setInitialValue($o)
$o&&I.hidePlaceholder()})
E.autobind($d,'value',function($o){$o=$o||''
K.setValue($o)
K.setInitialValue($o)
$o&&K.hidePlaceholder()})
E.autobind($e,'value',function($o){$o=$o||''
N.setValue($o)
N.setInitialValue($o)
$o&&N.hidePlaceholder()})
E.autobind($j,'value',function($o){$k=$o
M.setDisplay($o?'':'none')})
E.autobind($f,'value',function($o){if($o=='profile_menu'){$m()}})
E.autobind($g,'value',function($o){if($o==2){$m()}})
P.on('click',function($o){$o.preventDefault()
$f.update('')})
E.on('submit',function($o){$o.preventDefault()
if(!E.validate(!0))return
var $p={}
if(!$$){$p.name=V.trim(I.getValue())
$p.email=V.trim(K.getValue())}
if($k){$p.phone=V.trim(N.getValue())}
S.livechat.updateProfile($p)
$f.update('')})
E.autobind($i,'value',$n)}
function $m(){I.reset()
K.reset()
N.reset()}
function $n(){var $o=$i.getValue()
if(!$o)return
F.setDisplay($o['email$bool']?'':'none')}
$l()})()
for(var R in Q)if(Q.hasOwnProperty(R))E[R]=Q[R]
if(E.fire)E.fire('init')
E.setStyle&&E.setStyle(z)
E.setAttributes&&E.setAttributes(B)
if(typeof E.addChildren=='function')E.addChildren(A)
else v.addChildren(E,A)
if(E!==this){E.__jx__constructor=b.__$$__meshim_widget_components_chatWindow_profileMenu_Edit
E.__jx__native=!1}
return E}
w.prototype=e(b.__$$__jx_ui_Form.prototype)
w.prototype.__jx__native=!1
w.prototype.__jx__super=b.__$$__jx_ui_Form
w.__jx__jcss={".cancel":{"display":"none"},"&.mobile":{".cancel":{"display":"inline-block"},".external":{"marginBottom":"20px",".header":{"padding":"10px 0","borderTop":"none"}}}}
w.prototype.__jx__fqname_chain=[(w.prototype.__jx__fqname_chain||"")," ","meshim_widget_components_chatWindow_profileMenu_Edit"].join('')
w.prototype.__jx__fqname="meshim_widget_components_chatWindow_profileMenu_Edit"
w.prototype.__jx__constructor=w
return w})()
b.__$$__meshim_widget_widgets_ChatWindowPanel=(function(){function w(x,y,z,A,B){if(!(this instanceof w))return new w(x,y,z,A,B)
y=y||v.generateID()
var C=[b.__$$__jx_ui_Widget,null,null,[[b.__$$__jx_ui_Widget,"$$defaultplacement$$",null,[],{"container":"default","addClass":"container","id":"$$defaultplacement$$"}],[b.__$$__meshim_widget_widgets_zopimBranding_ZopimBrandingLink,null,null,[],{"addClass":"branding_mobile"}]],{}],D=C[0].call(this,x,y,null,v.mangleIDs(y,C[3]),C[4]),E=D||this
v.set(y,E)
var F=v.get(y+'__$$defaultplacement$$')
if(!w.__jx__jcss_generated){t.generate(x,w.prototype.__jx__fqname,w.__jx__jcss,null,w)
w.__jx__jcss_generated=!0}
E.defaultPlacement=F
var G=(function(){var I=b.__$$__meshim_widget_utils_BindClass
function J(){I.mobile(E)
I.popout(E)
I.tablet(E)
I.windowSize(E,'cwp_')
I.windowPosition(E,'cwp_')}
J()
var K=b.__$$__meshim_widget_widgets_TitleBar
E.titleBar
E.setTitleBar=function(N){if(E.titleBar)return
var O=N.split(',')
if(f('none',O)!=-1){E.titleBar=!0
E.setStyle('padding-top',0)
return}
E.titleBar=new K(E)
for(var P=0,Q=O.length;P<Q;P++){switch(O[P]){case 'hidePopout':E.titleBar.setHidePopout(!0)
break}}}
E.getDraggableNode=function(){return (E.titleBar instanceof K)?E.titleBar:null}
var L=b.__$$__meshim_widget_widgets_ActionBar,M=b.__$$__meshim_widget_widgets_actionBar_DefaultActionBar
E.actionBar
E.setActionBar=function(N){if(E.actionBar)return
var O=N.split(',')
if(f('none',O)!=-1){E.actionBar=!0
E.setStyle('padding-bottom',0)
return}
if(f('default',O)!=-1){E.actionBar=new M(E)}
else{E.actionBar=new L(E)}}})()
for(var H in G)if(G.hasOwnProperty(H))E[H]=G[H]
if(E.fire)E.fire('init')
E.setStyle&&E.setStyle(z)
E.setAttributes&&E.setAttributes(B)
if(typeof E.addChildren=='function')E.addChildren(A)
else v.addChildren(E,A)
if(E!==this){E.__jx__constructor=b.__$$__meshim_widget_widgets_ChatWindowPanel
E.__jx__native=!1}
return E}
w.prototype=e(b.__$$__jx_ui_Widget.prototype)
w.prototype.__jx__native=!1
w.prototype.__jx__super=b.__$$__jx_ui_Widget
w.__jx__jcss={"**self":{"position":"relative","overflow":"hidden","paddingTop":"$$titleBarHeight","paddingBottom":"$$actionBarHeight","margin":"$$chatWindowPanelMargin",".container":{"width, height":"100%","background":"$$windowContentBg","borderWidth":"$$windowContentBorderWidth","borderStyle":"$$windowContentBorderStyle","borderColor":"$$windowContentBorderColor"}},"&.cwp_small":{"width":"$$windowSmallWidth","height":"$$windowSmallHeight"},"&.cwp_medium":{"width":"$$windowMediumWidth","height":"$$windowMediumHeight"},"&.cwp_large":{"width":"$$windowLargeWidth","height":"$$windowLargeHeight"},"&.mini":{"width":"$$windowMiniWidth","height":"$$windowMiniHeight"},"&.popout":{"width, height":"100%"},"&.mobile":{"paddingTop":"$$titleBarHeight","overflow":"auto","width":"auto","height":"auto","paddingBottom":"0","&":"$$chatWindowPanelInner",".container":{"height":"auto"},".wrapper_container":{"margin":"0 auto","maxWidth":"$$mobileMaxWidthS","height":"auto","border":"none",".bottom, .bottom_inner":{"position":"relative","padding":"10px"}}},"&.tablet":{".wrapper_container":{"maxWidth":"$$mobileMaxWidth"}}}
w.prototype.__jx__fqname_chain=[(w.prototype.__jx__fqname_chain||"")," ","meshim_widget_widgets_ChatWindowPanel"].join('')
w.prototype.__jx__fqname="meshim_widget_widgets_ChatWindowPanel"
w.prototype.__jx__constructor=w
return w})()
b.__$$__meshim_widget_components_chatWindow_newChatForm_TextField=(function(){function w(x,y,z,A,B){if(!(this instanceof w))return new w(x,y,z,A,B)
y=y||v.generateID()
var C=[b.__$$__meshim_widget_widgets_TextField,null,null,[],{"addClass":"unstyled"}],D=C[0].call(this,x,y,null,v.mangleIDs(y,C[3]),C[4]),E=D||this
v.set(y,E)
if(!w.__jx__jcss_generated){t.generate(x,w.prototype.__jx__fqname,w.__jx__jcss,null,w)
w.__jx__jcss_generated=!0}
var F=(function(){})()
for(var G in F)if(F.hasOwnProperty(G))E[G]=F[G]
if(E.fire)E.fire('init')
E.setStyle&&E.setStyle(z)
E.setAttributes&&E.setAttributes(B)
if(typeof E.addChildren=='function')E.addChildren(A)
else v.addChildren(E,A)
if(E!==this){E.__jx__constructor=b.__$$__meshim_widget_components_chatWindow_newChatForm_TextField
E.__jx__native=!1}
return E}
w.prototype=e(b.__$$__meshim_widget_widgets_TextField.prototype)
w.prototype.__jx__native=!1
w.prototype.__jx__super=b.__$$__meshim_widget_widgets_TextField
w.__jx__jcss={"**self":{"color":"$$badgeInputColor","padding":"$$badgeInputPadding","borderWidth":"$$badgeInputBorderWidth","borderStyle":"$$badgeInputBorderStyle","borderColor":"$$badgeInputBorderColor","borderRadius":"$$badgeInputRadius","boxShadow":"$$badgeInputShadow"},"&:focus, &.focus":{"color":"$$badgeInputFocusColor","background":"$$badgeInputFocusBg","borderColor":"$$badgeInputFocusBorderColor","boxShadow":"$$badgeInputFocusShadow"},"&::placeholder":{"color":"$$badgeInputPlaceholderColor"}}
w.prototype.__jx__fqname_chain=[(w.prototype.__jx__fqname_chain||"")," ","meshim_widget_components_chatWindow_newChatForm_TextField"].join('')
w.prototype.__jx__fqname="meshim_widget_components_chatWindow_newChatForm_TextField"
w.prototype.__jx__constructor=w
return w})()
b.__$$__meshim_widget_widgets_form_Profile=(function(){function w(x,y,z,A,B){if(!(this instanceof w))return new w(x,y,z,A,B)
y=y||v.generateID()
var C=[b.__$$__jx_ui_Widget,null,null,[[b.__$$__jx_ui_Widget,"available_types_el",null,[[b.__$$__jx_ui_Label,"label_logged_out",null,[u(106),[b.__$$__jx_ui_Label,"label_logged_out_required",null,[],{"id":"label_logged_out_required"}]],{"id":"label_logged_out","addClass":"label label_logged_out"}],[b.__$$__jx_ui_Label,"label_logged_in",null,[u(107)],{"id":"label_logged_in","addClass":"label label_logged_in"}],[b.__$$__meshim_widget_widgets_FakeInput,"fake_input",null,[[b.__$$__meshim_widget_widgets_Avatar,"avatar",null,[],{"id":"avatar","addClass":"avatar"}],[b.__$$__jx_ui_Label,"internal_placeholder",null,[u(108)],{"id":"internal_placeholder","addClass":"internal_placeholder"}],[b.__$$__jx_ui_Widget,null,null,[[b.__$$__jx_ui_Widget,null,null,[[b.__$$__jx_ui_Widget,null,null,[[b.__$$__jx_ui_Label,"logged_in_name",null,[],{"id":"logged_in_name","addClass":"logged_in_name"}],[b.__$$__jx_ui_Label,"logged_in_email",null,[],{"id":"logged_in_email","addClass":"logged_in_email"}],[b.__$$__jx_ui_Label,"logged_in_phone",null,[],{"id":"logged_in_phone","addClass":"logged_in_phone"}],[b.__$$__jx_ui_Widget,"logged_in_actions",null,[[b.__$$__meshim_widget_widgets_iconFont_Button,"logged_in_edit",null,[],{"id":"logged_in_edit","icon":"pencil","title":u(109)}],[b.__$$__meshim_widget_widgets_iconFont_Button,"logged_in_clear",null,[],{"id":"logged_in_clear","icon":"dustbin","title":u(110)}]],{"id":"logged_in_actions","addClass":"logged_in_actions"}],[b.__$$__jx_ui_Label,"divider",null,[u(111)],{"id":"divider","addClass":"profile_divider"}],[b.__$$__jx_ui_Label,"external_placeholder_one",null,[],{"id":"external_placeholder_one","addClass":"external_placeholder_one"}],[b.__$$__jx_ui_Label,"external_placeholder_many_prefix",null,[u(112)],{"id":"external_placeholder_many_prefix","addClass":"external_placeholder_many_prefix"}],[b.__$$__jx_ui_Label,"external_placeholder_many",null,[],{"id":"external_placeholder_many","addClass":"external_placeholder_many"}]],{"addClass":"floater_inner_seriously"}]],{"addClass":"floater_inner"}]],{"addClass":"floater"}]],{"id":"fake_input","addClass":"fake_input","tabIndex":"0"}],[b.__$$__meshim_widget_widgets_ErrorMessage,"error_message",null,[u(113)],{"id":"error_message","addClass":"error_message","useDisplay":"true"}]],{"id":"available_types_el","addClass":"field profile_field"}],[b.__$$__jx_ui_Widget,"editing_el",null,[[b.__$$__jx_ui_Label,"label_edit_internal",null,[u(106),[b.__$$__jx_ui_Label,"label_edit_internal_required",null,[],{"id":"label_edit_internal_required"}]],{"id":"label_edit_internal","addClass":"label label_edit_internal"}],[b.__$$__meshim_widget_widgets_TextField,"name",null,[],{"id":"name","placeholder":u(104),"addClass":"input_name standalone mobile_error_icon"}],[b.__$$__meshim_widget_widgets_ErrorMessage,"name_error",null,[u(114)],{"id":"name_error","addClass":"error_message","useDisplay":"true"}],[b.__$$__meshim_widget_widgets_EmailField,"email",null,[],{"id":"email","placeholder":u(33),"addClass":"input_email standalone mobile_error_icon"}],[b.__$$__meshim_widget_widgets_ErrorMessage,"email_error",null,[u(115)],{"id":"email_error","addClass":"error_message","useDisplay":"true"}],[b.__$$__jx_ui_Widget,"edit_external",null,[[b.__$$__jx_ui_Label,null,null,[u(116)],{"addClass":"edit_external_label"}],[b.__$$__jx_ui_Widget,"edit_external_types",null,[],{"id":"edit_external_types","addClass":"edit_external_types"}]],{"id":"edit_external","addClass":"edit_external"}]],{"id":"editing_el","addClass":"editing field profile_field"}],[b.__$$__jx_ui_Widget,"phone_field",null,[[b.__$$__jx_ui_Label,"phone_label",null,[u(117),[b.__$$__jx_ui_Label,"phone_required",null,[],{"id":"phone_required"}]],{"id":"phone_label","addClass":"label"}],[b.__$$__meshim_widget_widgets_PhoneField,"phone",null,[],{"id":"phone","addClass":"input_phone mobile_error_icon"}],[b.__$$__meshim_widget_widgets_ErrorMessage,"phone_error",null,[u(118)],{"id":"phone_error","addClass":"error_message","useDisplay":"true"}]],{"id":"phone_field","addClass":"field field_phone"}]],{"class":"profile_form"}],D=C[0].call(this,x,y,null,v.mangleIDs(y,C[3]),C[4]),E=D||this
v.set(y,E)
var F=v.get(y+'__available_types_el'),G=v.get(y+'__label_logged_out'),H=v.get(y+'__label_logged_out_required'),I=v.get(y+'__label_logged_in'),J=v.get(y+'__fake_input'),K=v.get(y+'__avatar'),L=v.get(y+'__internal_placeholder'),M=v.get(y+'__logged_in_name'),N=v.get(y+'__logged_in_email'),O=v.get(y+'__logged_in_phone'),P=v.get(y+'__logged_in_actions'),Q=v.get(y+'__logged_in_edit'),R=v.get(y+'__logged_in_clear'),S=v.get(y+'__divider'),T=v.get(y+'__external_placeholder_one'),U=v.get(y+'__external_placeholder_many_prefix'),V=v.get(y+'__external_placeholder_many'),W=v.get(y+'__error_message'),X=v.get(y+'__editing_el'),Y=v.get(y+'__label_edit_internal'),Z=v.get(y+'__label_edit_internal_required'),$$=v.get(y+'__name'),$_=v.get(y+'__name_error'),$a=v.get(y+'__email'),$b=v.get(y+'__email_error'),$c=v.get(y+'__edit_external'),$d=v.get(y+'__edit_external_types'),$e=v.get(y+'__phone_field'),$f=v.get(y+'__phone_label'),$g=v.get(y+'__phone_required'),$h=v.get(y+'__phone'),$i=v.get(y+'__phone_error')
if(!w.__jx__jcss_generated){t.generate(x,w.prototype.__jx__fqname,w.__jx__jcss,null,w)
w.__jx__jcss_generated=!0}
var $j=(function(){var $l=b.__$$__meshim_widget_controllers_DataController,$m=b.__$$__meshim_widget_utils_Utils,$n=b.__$$__meshim_widget_utils_Strings,$o=b.__$$__meshim_widget_widgets_iconFont_Auth,$p=b.__$$__meshim_widget_widgets_iconFont_AuthButton,$q=b.__$$__meshim_common_Regex,$r={'facebook':a,'twitter':a,'google':a},$s={'facebook':a,'twitter':a,'google':a},$t={'name':u(104),'email':u(33)},$u={'name':$$,'email':$a,'phone':$h},$v=u(105),$w=$l.root.$('livechat').$('settings').$('login'),$x=$w.$('allowed_types'),$y=$w.$('phone_display$bool'),$z,$A=0,$B,$C,$D=$l.root.$('livechat').$('profile'),$E=$D.$('logged_in$bool'),$F,$G=$D.$('auth').$('type$string'),$H,$I=$l.root.$('livechat').$('ui').$('mobile$bool'),$J,$K,$L
E.submit=function(){var $U=$q.trim($$.getValue()),$V=$q.trim($a.getValue()),$W=$q.trim($h.getValue()),$X={}
if(!($F&&!$U&&!$V)){$X.name=$U
$X.email=$V}
if($z){$X.phone=$W}
$l.livechat.updateProfile($X)
$C=!1
$R()}
E.setHideLabel=function(){$L=!0
$R()}
E.setDisabled=function($U){$U=m($U)
E.disabled=$U
E[$U?'addClass':'removeClass']('disabled')
$$.setDisabled($U)
$a.setDisabled($U)
$e.setDisplay($U?'none':'')}
E.validate=function($U){var $V=!0,$W=[$$,$a]
for(var $X=0,$Y=$W.length;$X<$Y;$X++)if(!$W[$X].validate($U?$V:!1))$V=!1
$V?F.removeClass('invalid'):F.addClass('invalid')
W.setDisplay($V?'none':'')
if(!$h.validate($U?$V:!1))$V=!1
return $V}
E.setDataNode=function($U){if($K==$U)return
if($K)E.autounbind($K,'value',$M)
$K=$U
if($K)E.autobind($K,'value',$M)}
E.getValue=function(){var $U={},$V=$$.getValue()
if(!$m.isDefaultName($V))$U.name=$V
$U.email=$a.getValue()
$U.phone=$h.getValue()
return $U}
function $M(){var $U=$K.getValue(),$V,$W,$X
for($W in $U)if($U.hasOwnProperty($W)){$V=$U[$W]
$X=$u[$V['name$string']]
if(!$X)continue
$X.setRequired(('required$bool' in $V)?$V['required$bool']:!0)
$X.setPlaceholder($V['placeholder$string']||$t[$V['name$string']])}}
E.setRequired=function($U){$U=m($U)
$$.setRequired($U)
$a.setRequired($U)
H.setText($U?' *':'')
Z.setText($U?' *':'')
if(!$U){W.setDisplay('none')
$$.hideErrorMessage()
$a.hideErrorMessage()}}
E.setPhoneRequired=function($U){$U=m($U)
$h.setRequired($U)
$g.setText($U?' *':'')
if(!$U){$h.hideErrorMessage()}}
E.autobind($y,'value',function($U){$z=$U
$e.setDisplay($U?'':'none')})
function $N(){var $U=$x.getValue(),$V
$A=0
$B=$U['email$bool']
for(var $W in $r)if($r.hasOwnProperty($W)){if($U[$W+'$bool']){$A++
$V=$W
$r[$W].setDisplay('')
$s[$W].setDisplay('')}
else{$r[$W].setDisplay('none')
$s[$W].setDisplay('none')}}
if($A==1){T.setText($v.replace('<name>',$n.external_login[$V]||$V))}
$R()}
function $O($U){$F=$U
$R()}
function $P($U){$H=$U
$R()}
function $Q($U){if(!$U)return
if('display_name$string' in $U){if(!$m.isDefaultName($U['display_name$string'])){M.setText($U['display_name$string']||'')
$$.setValue($U['display_name$string']||'')}
else{M.setText('')
$$.setValue('')}}
if('email$string' in $U){N.setText($U['email$string']||'')
$a.setValue($U['email$string']||'')}
if('phone$string' in $U){O.setText($U['phone$string']||'')
$h.setValue($U['phone$string']||'')}
$R()}
function $R(){if($H){$C=!1}
G.setDisplay(!$F?'':'none')
I.setDisplay($F?'':'none')
F.setDisplay(!$C?'':'none')
K.setDisplay(!$F?'none':'')
L.setDisplay(!$F&&$B?'':'none')
T.setDisplay(!$F&&!$B&&($A==1)?'':'none')
U.setDisplay(!$F&&!$B&&($A>1)?'':'none')
V.setDisplay(!$F&&($B||($A>1))?'':'none')
S.setDisplay(!$F&&$B&&$A?'':'none')
X.setDisplay($C?'':'none')
$c.setDisplay(((!$F||$C)&&$A)?'':'none')
if($L){G.setDisplay('none')
I.setDisplay('none')
Y.setDisplay('none')}
M.setDisplay($F?'':'none')
N.setDisplay($F?'':'none')
O.setDisplay(($F&&E.disabled)?'':'none')
P.setDisplay($F&&!E.disabled?'':'none')
Q.setDisplay($H?'none':'')
E.setClass('profile_form')
if(E.disabled){E.addClass('disabled')}
if($J){E.addClass('mobile')}
if(u&&u.onLanguage)$T()
E.addClass($F?'logged_in':'logged_out')
E.addClass($B?'internal_enabled':'internal_disabled')
E.addClass($C?'editing':'available_types')
if(!$A)E.addClass('external_none')
else if($A==1)E.addClass('external_one')
else E.addClass('external_many')}
function $S(){var $U
$J=$I.getValue()
if($J){E.addClass('mobile')}
K.setDataNode($D)
W.setDisplay('none')
E.removeClass('editing').addClass('available_types')
for($U in $r)if($r.hasOwnProperty($U)){$r[$U]=new ($J?$p:$o)(V,null,null,null,$J?{name:$U,addClass:'profile_form_icon '+$U,icon:$U+'_out'}:{name:$U,addClass:'profile_form_icon '+$U,icon:$U,title:$n.external_login[$U]||$U,tabIndex:0})
$s[$U]=new ($J?$p:$o)($d,null,null,null,$J?{name:$U,addClass:'float profile_form_edit_external '+$U,icon:$U+'_out'}:{name:$U,addClass:'profile_form_icon '+$U,icon:$U,title:$n.external_login[$U]||$U,tabIndex:0})}
V.on('keyup',$V)
V.on('click',$V)
$d.on('keyup',$W)
$d.on('click',$W)
function $V($Z){if(!$Z)return
if($Z.keyCode&&$Z.keyCode!=13)return
var $0=$Z.target.jx_wrapper
if($0==V)return
while($0.parentNode!=V)$0=$0.parentNode
var $1=$0.getName&&$0.getName()
$1&&$l.livechat.doExternalLogin($1)}
function $W($Z){if(!$Z)return
if($Z.keyCode&&$Z.keyCode!=13)return
var $0=$Z.target.jx_wrapper
if($0==$d)return
while($0.parentNode!=$d)$0=$0.parentNode
var $1=$0.getName&&$0.getName()
$1&&$l.livechat.doExternalLogin($1)}
function $X($Z){$Z&&$Z.preventDefault()
$$.setValidity(!0)
$a.setValidity(!0)
$C=!0
$R()
$$.focus()}
function $Y($Z){$Z&&$Z.preventDefault()
$l.livechat.doExternalLogout()
J.blur()
if($I.getValue()){$X()}}
J.on('focus',function(){if($F)return
if(E.disabled)return
if(!$B)return
$X()})
Q.on('click',$X)
R.on('click',$Y)
$h.setLabelElement($f)
$$.setErrorMessageElement($_).hideErrorMessage()
$a.setErrorMessageElement($b).hideErrorMessage()
$h.setErrorMessageElement($i).hideErrorMessage()
E.autobind($x,'value',$N)
E.autobind($E,'value',$O)
E.autobind($D,'value',$Q)
E.autobind($G,'value',$P)
if(u&&u.onLanguage){u.onLanguage($T)
$T()}}
function $T(){E[u.rtl()?'addClass':'removeClass']('rtl')}
$S()})()
for(var $k in $j)if($j.hasOwnProperty($k))E[$k]=$j[$k]
if(E.fire)E.fire('init')
E.setStyle&&E.setStyle(z)
E.setAttributes&&E.setAttributes(B)
if(typeof E.addChildren=='function')E.addChildren(A)
else v.addChildren(E,A)
if(E!==this){E.__jx__constructor=b.__$$__meshim_widget_widgets_form_Profile
E.__jx__native=!1}
return E}
w.prototype=e(b.__$$__jx_ui_Widget.prototype)
w.prototype.__jx__native=!1
w.prototype.__jx__super=b.__$$__jx_ui_Widget
w.__jx__jcss={".label_logged_out":{},".label_logged_in":{},".fake_input":{"position":"relative","overflow":"hidden","*zoom":1},".avatar":{"float":"left","width, height":"32px","marginRight":"5px","&":"$$profileFormLoggedIn"},"&.rtl .avatar":{"float":"right","marginRight":0,"marginLeft":"5px"},".internal_placeholder":{"float":"left","vertical-align":"top","cursor":"pointer"},"&.rtl .internal_placeholder":{"float":"right"},".profile_divider":{"vertical-align":"top","marginRight":"5px"},"&.rtl .profile_divider":{"marginRight":0,"marginLeft":"5px"},".internal_placeholder, .profile_divider":{"lineHeight":"18px","*lineHeight":"18px !important"},".external_placeholder_one":{"vertical-align":"top"},".external_placeholder_many":{"vertical-align":"top"},".external_placeholder_many_prefix":{"vertical-align":"top"},".editing":{".input_name":{},".input_email":{},".input_phone":{}},".edit_external":{"marginTop":"5px","color":"$$menuHeaderColor",".edit_external_label":{},".edit_external_types":{"display":"inline-block",".profile_form_edit_external":{"display":"inline-block"}}},"&.rtl .edit_external":{".edit_external_types":{".profile_form_edit_external":{"marginLeft":0,"marginRight":"5px"}}},".logged_in_name":{"fontWeight":"bold"},".logged_in_name, .logged_in_email":{"display":"block","whiteSpace":"nowrap","overflow":"hidden","textOverflow":"ellipsis","paddingRight":"40px"},"&.rtl .logged_in_name, &.rtl .logged_in_email":{"paddingRight":0,"paddingLeft":"40px"},".logged_in_actions":{"position":"absolute","top, right":0,"color":"$$menuHeaderColor","marginTop":"5px","marginRight":"5px","button":{"marginLeft":"5px","&:hover, &:focus":{"color":"$$menuColor"}},".divider":{"fontSize":"$$fontSizeXS","lineHeight":"1.5","margin":"0 5px","cursor":"default","opacity":0.5}},"&.rtl .logged_in_actions":{"right":"auto","left":0},".floater":{"display":"block","overflow":"hidden","*position":"relative !important",".floater_inner":{"display":"table",".floater_inner_seriously":{"display":"table-cell","verticalAlign":"middle"}}},"&.internal_enabled":{".floater":{"float":"right","*float":"right !important"}},"&.rtl.internal_enabled":{".floater":{"float":"left"}},"&.logged_in, &.internal_disabled":{".floater":{".floater_inner":{"tableLayout":"fixed","width":"100%","height":"32px"}}},"&.logged_in":{".fake_input":{"background":"$$formSubmittedBg","borderRadius":"$$formSubmittedRadius","borderWidth":"$$formSubmittedBorderWidth","borderStyle":"$$formSubmittedBorderStyle","borderColor":"$$formSubmittedBorderColor"},".floater":{"float":"none !important"}},"&.logged_out.internal_disabled, &.logged_in":{".fake_input":{}},".profile_form_icon":{"cursor":"pointer","display":"inline-block","marginLeft":"5px","height, fontSize":"17px","lineHeight":"21px","*padding":"0 !important","*marginLeft":"5px !important"},"&.rtl .profile_form_icon":{"marginLeft":0,"marginRight":"5px"},".field":{"marginBottom":"15px","&.last-child":{"marginBottom":0},"&.profile_field":{"*padding":"0 !important","&.invalid":{}}},".label":{"display":"block","marginBottom":"5px","fontWeight":"bold"},"&.mobile":{".avatar":{"width, height":"36px"},"&.available_types":{".fake_input":{".internal_placeholder":{"lineHeight":"25px"},".profile_divider":{"lineHeight":"44px","marginRight":"10px"}},".floater":{"position":"absolute","top":0,"right":"-2px","height":"100%"},".profile_form_icon":{"marginLeft, marginRight":0,"color":"$$menuColor","width":"auto","height":"46px","padding":"13px 12px 10px","borderWidth":"0 0 0 1px","borderRadius":"0",".icon_font":{"textAlign":"center"}},"&.logged_in":{".fake_input":{},".floater":{"position":"relative","top, right, left":0}}},".logged_in_name, .logged_in_email":{"paddingRight":"80px"},".logged_in_actions":{"margin":"0px","height":"100%","button":{"height":"100%","padding":"0 5px"}},".editing":{".name_container, .email_container":{"position":"relative","input.invalid ~ .error_icon":{"display":"block"}}},".edit_external":{".edit_external_types":{"display":"block","marginTop":"10px"}}},"&.rtl.mobile":{".floater":{"right":"auto","left":"-2px"},".profile_divider":{"marginRight":0,"marginLeft":"10px"},".logged_in_name, .logged_in_email":{"paddingRight":0,"paddingLeft":"80px"}},"&.disabled":{".field":{"marginBottom":0},".fake_input":{"border":"none","background":"transparent"},".field_phone":{"display":"none"}}}
w.prototype.__jx__fqname_chain=[(w.prototype.__jx__fqname_chain||"")," ","meshim_widget_widgets_form_Profile"].join('')
w.prototype.__jx__fqname="meshim_widget_widgets_form_Profile"
w.prototype.__jx__constructor=w
return w})()
b.__$$__meshim_widget_components_chatWindow_AboutPanel=(function(){function w(x,y,z,A,B){if(!(this instanceof w))return new w(x,y,z,A,B)
y=y||v.generateID()
var C=[b.__$$__meshim_widget_widgets_ChatWindowPanel,null,null,[[b.__$$__meshim_widget_widgets_ChatWindowContent,null,null,[[b.__$$__meshim_widget_widgets_ScrollableFrame,null,null,[[b.__$$__jx_ui_Widget,null,null,[[b.__$$__meshim_widget_widgets_Header,null,null,[],{"text":"Zopim Live Chat"}],[b.__$$__meshim_widget_widgets_Body,null,null,[],{"text":"Copyright © 2008-2014 Zopim Technologies Pte Ltd. All rights reserved."}],[b.__$$__meshim_widget_widgets_Header,null,null,[],{"text":"Open Source Licenses"}]],{}],[b.__$$__jx_ui_Widget,null,null,[[b.__$$__meshim_widget_widgets_Header,null,null,[],{"text":"chroma.js - JavaScript library for color conversions"}],[b.__$$__meshim_widget_widgets_Body,null,null,[],{"text":"Copyright © 2011-2013, Gregor Aisch. All rights reserved."}],[b.__$$__meshim_widget_widgets_Body,null,null,[],{"text":"Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:"}],[b.__$$__meshim_widget_widgets_Body,null,null,[],{"text":"1. Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer."}],[b.__$$__meshim_widget_widgets_Body,null,null,[],{"text":"2. Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution."}],[b.__$$__meshim_widget_widgets_Body,null,null,[],{"text":"3. The name Gregor Aisch may not be used to endorse or promote products derived from this software without specific prior written permission."}],[b.__$$__meshim_widget_widgets_Body,null,null,[],{"text":"THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS \"AS IS\" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL GREGOR AISCH OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING,BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE."}]],{"class":"break_top"}],[b.__$$__jx_ui_Widget,null,null,[[b.__$$__meshim_widget_widgets_Header,null,null,[],{"text":"store.js"}],[b.__$$__meshim_widget_widgets_Body,null,null,[],{"text":"Copyright © 2010-2013 Marcus Westin"}],[b.__$$__meshim_widget_widgets_Body,null,null,[],{"text":"Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the \"Software\"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:"}],[b.__$$__meshim_widget_widgets_Body,null,null,[],{"text":"The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software."}],[b.__$$__meshim_widget_widgets_Body,null,null,[],{"text":"THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE."}]],{"class":"break_top"}]],{}],[b.__$$__meshim_widget_widgets_Bottom,null,null,[[b.__$$__meshim_widget_widgets_Button,"back",null,[u(30)],{"id":"back","addClass":"back wide"}]],{}]],{"absPaddingBottom":"bottomHeight"}]],{"titleBar":"hidePopout","actionBar":""}],D=C[0].call(this,x,y,null,v.mangleIDs(y,C[3]),C[4]),E=D||this
v.set(y,E)
var F=v.get(y+'__back')
if(!w.__jx__jcss_generated){t.generate(x,w.prototype.__jx__fqname,w.__jx__jcss,null,w)
w.__jx__jcss_generated=!0}
var G=(function(){var I=b.__$$__meshim_widget_controllers_DataController,J=I.root.$('livechat').$('ui').$('chat_window').$('main_stack_name$string')
function K(){F.on('click',function(){J.update('chat_panel')})}
K()})()
for(var H in G)if(G.hasOwnProperty(H))E[H]=G[H]
if(E.fire)E.fire('init')
E.setStyle&&E.setStyle(z)
E.setAttributes&&E.setAttributes(B)
if(typeof E.addChildren=='function')E.addChildren(A)
else v.addChildren(E,A)
if(E!==this){E.__jx__constructor=b.__$$__meshim_widget_components_chatWindow_AboutPanel
E.__jx__native=!1}
return E}
w.prototype=e(b.__$$__meshim_widget_widgets_ChatWindowPanel.prototype)
w.prototype.__jx__native=!1
w.prototype.__jx__super=b.__$$__meshim_widget_widgets_ChatWindowPanel
w.__jx__jcss={".break_top":{"padding":"10px 0","borderTop":"1px solid","borderColor":"$$inputColor","fontSize":"$$fontSizeXS",".meshim_widget_widgets_Body":{"color":"$$inputColor","marginBottom":"$$marginS"}}}
w.prototype.__jx__fqname_chain=[(w.prototype.__jx__fqname_chain||"")," ","meshim_widget_components_chatWindow_AboutPanel"].join('')
w.prototype.__jx__fqname="meshim_widget_components_chatWindow_AboutPanel"
w.prototype.__jx__constructor=w
return w})()
b.__$$__meshim_widget_widgets_Form=(function(){function w(x,y,z,A,B){if(!(this instanceof w))return new w(x,y,z,A,B)
y=y||v.generateID()
var C=[b.__$$__jx_ui_Widget,null,null,[[b.__$$__jx_ui_Widget,"container",null,[],{"id":"container"}]],{"class":"generated_form"}],D=C[0].call(this,x,y,null,v.mangleIDs(y,C[3]),C[4]),E=D||this
v.set(y,E)
var F=v.get(y+'__container')
if(!w.__jx__jcss_generated){t.generate(x,w.prototype.__jx__fqname,w.__jx__jcss,null,w)
w.__jx__jcss_generated=!0}
var G=(function(){var I=b.__$$__meshim_widget_widgets_form_Field,J=b.__$$__meshim_widget_widgets_form_CheckBoxMultiple,K=b.__$$__meshim_widget_widgets_form_RadioButtonMultiple,L=b.__$$__meshim_widget_widgets_form_DepartmentSelect,M=b.__$$__meshim_widget_widgets_TextField,N=b.__$$__meshim_widget_widgets_TextArea,O=b.__$$__meshim_widget_widgets_EmailField,P=b.__$$__meshim_widget_widgets_Select,Q=b.__$$__meshim_widget_widgets_ErrorMessage,R=b.__$$__meshim_widget_utils_Strings,S=b.__$$__jx_core_ObjectUtil,T=b.__$$__jx_ui_CheckBox,U=b.__$$__jx_ui_Label,V=b.__$$__jx_ui_Option,W={'text':M,'email':O,'textarea':N,'checkbox':T,'select':P,'checkbox_multiple':J,'radio':K,'department':L},X={'name':1,'email':1,'phone':1},Y,Z,$$={},$_={},$a
E.submitSelf=function(){if(!Y)return
var $c={},$d
for(var $e in Z)if(Z.hasOwnProperty($e)){if(Z[$e]['hidden$bool'])continue
$d=$$[Z[$e]['name$string']]
if(!$d)continue
$c[$e]={"value_user$string":$d.getValue()}
if($d.getChecked){$c[$e]['checked_user$bool']=$d.getChecked()}
if($d.getOptions&&!($d instanceof L)){$c[$e]['options']=$d.getOptions(!0)}}
Y.update($c)}
E.submit=function($c,$d,$e){if(!$c)return
var $f={},$g,$h
for($h in Z)if(Z.hasOwnProperty($h)){if(Z[$h]['hidden$bool'])continue
$g=$$[Z[$h]['name$string']]
if(!$g)continue
if($e){$f[$h]={"value_user$string":$g.getValue()}
if($g.getChecked){$f[$h]['checked_user$bool']=$g.getChecked()}
if($g.getOptions&&!($g instanceof L)){$f[$h]['options']=$g.getOptions(!0)}}
else{$f[$h]={"name$string":Z[$h]['name$string'],"value$string":$g.getValue()}
if($g.getChecked){$f[$h]['checked$bool']=$g.getChecked()}
if($g.getOptions&&!($g instanceof L)){$f[$h]['options']=$g.getOptions()}}}
if($d){var $i=$d.getValue()
for($h in $i)if($i.hasOwnProperty($h)){if(!$i[$h]||!X[$h])continue
$f[$h]={'name$string':$h,'value$string':$i[$h]}}}
$c.write($f)}
E.setReadOnly=function($c){$a=m($c)
E[$a?'addClass':'removeClass']('read_only')
return E}
E.setDataNode=function($c){if(Y==$c)return
if(Y)E.autounbind(Y,'value',$b)
Y=$c
if(Y)E.autobind(Y,'value',$b)}
function $b(){var $c,$d,$e,$f
$c=Y.getValue()
if(S.equal(Z,$c))return
F.empty()
$$={}
$_={}
Z=$c
var $g,$h,$i,$j,$k
for($e in $c)if($c.hasOwnProperty($e)){$d=$c[$e]
$i=null
if(X[$d['name$string']])continue
if(!W[$d['type$string']]){continue}
if(!$d['name$string']){continue}
if(!$d['label$string']){continue}
if($a&&!$d['value_user$string']||($d['type$string']=='checkbox'&&!$d['checked$bool']))continue
$g=$_[$d['name$string']]=new I(F,null,null,null,{className:'field field_'+$d['type$string']})
$g.label=$h=new U($g,null,null,null,{className:'label'})
$g.label_name=new U($h,null,null,[R.get(Y.$$($e+'.label$string'))])
$g.label_required=new U($h,null,null,[($d['required$bool']&&!$a)?' *':''])
$g.input=$$[$d['name$string']]=$i=new W[$d['type$string']]($g,null,null,null,{name:$d['name$string'],required:$d['required$bool'],autoValidate:!0,readOnly:$a});($i.container||$i).addClass('input input_'+$d['type$string'])
$i&&$i.setLabelElement($h)
switch($d['type$string']){case 'checkbox_multiple':case 'radio':$d['options']&&$i.setOptions($d['options'])
break
case 'text':case 'email':case 'textarea':$d['placeholder$string']&&$i.setPlaceholder($d['placeholder$string'])
if($a){if(p.isIE<=7){$i.style.overflow='visible'
$i.style.height=0}
else{l((function($m){return function(){$m.setMinHeight('0')
$m.setHeight('0')
$m.setHeight($m.getScrollHeight())}})($i))}}
break
case 'checkbox':$d['checked$bool']&&$i.setChecked($d['checked$bool']).setInitialChecked($d['checked$bool'])
$g.insertBefore($i.container||$i,$h)
if($a)$i.setDisabled(!0)
break
case 'select':for($f in $d['options'])if($d['options'].hasOwnProperty($f)){$k=new V($i,null,null,[$d['options'][$f]['label$string']||$d['options'][$f]['value$string']],{value:$d['options'][$f]['value$string']})
if($d['value$string']==$d['options'][$f]['value$string']||$d['options'][$f]['checked$bool'])$k.setSelected(!0)}
if($a)$i.setDisabled(!0)
break
case 'department':$i.setSelectedIndex(0)
default:}
if(!$a){$g.error_message=$j=new Q($g,null,null,[$d['error_message$string']||R.error_message[$d['type$string']]||R.error_message['default']],{className:'error_message'})
$j.setUseDisplay(!0)
$i&&$i.setErrorMessageElement($j).hideErrorMessage()
$j.setVisible('none')}
if($a&&$d['value_user$string']){$i.setValue&&$i.setValue($d['value_user$string']||'')
$i.setInitialValue&&$i.setInitialValue($d['value_user$string']||'')}
else if($d['value$string']){$i.setValue&&$i.setValue($d['value$string'])
$i.setInitialValue&&$i.setInitialValue($d['value$string'])}
if($d['hidden$bool']){$g.setDisplay('none')
$g.setRequired(!1)}}
var $l=F.getLastChild()
$l&&$l.addClass('last-child')}
E.populateSelf=function(){if(!Y)return
var $c=Y.getValue(),$d
for(var $e in $c)if($c.hasOwnProperty($e)){$d=$$[Z[$e]['name$string']]
if(!$d)continue
$d.setValue($c[$e]['value_user$string'])
if($d.setChecked){$d.setChecked($c[$e]['checked_user$bool'])}
if($d.setOptions){$d.setOptions($c[$e]['options'],!0)}}}
E.reset=function(){if(!Y)return
var $c=Y.getValue(),$d
for(var $e in $c)if($c.hasOwnProperty($e)){$d=$$[Z[$e]['name$string']]
if(!$d)continue
$d.reset&&$d.reset()}}
E.getField=function($c){return $_[$c]}
E.getInput=function($c){return $$[$c]}})()
for(var H in G)if(G.hasOwnProperty(H))E[H]=G[H]
if(E.fire)E.fire('init')
E.setStyle&&E.setStyle(z)
E.setAttributes&&E.setAttributes(B)
if(typeof E.addChildren=='function')E.addChildren(A)
else v.addChildren(E,A)
if(E!==this){E.__jx__constructor=b.__$$__meshim_widget_widgets_Form
E.__jx__native=!1}
return E}
w.prototype=e(b.__$$__jx_ui_Widget.prototype)
w.prototype.__jx__native=!1
w.prototype.__jx__super=b.__$$__jx_ui_Widget
w.__jx__jcss={"**self":{"*zoom":1},".input_text, .input_email, textarea, select":{"width":"100%"},".label, .error_message, .option_label":{"display":"block"},".input_checkbox, .input_input_radio, .input_input_checkbox":{"display":"inline-block","float":"left","clear":"both"},".field":{"marginBottom":"15px","&.field_radio .input, &.field_department .input":{"input":{"width, height":"16px"},"label":{"paddingLeft":"20px","lineHeight":"16px"},"label.disabled":{"color":"#ccc","&":"$$inputDisabled"}},"&.field_checkbox, &.field_checkbox_multiple .input":{"input":{"width, height":"16px"},"label":{"paddingLeft":"20px","lineHeight":"15px"}},"&.field_checkbox, &.field_checkbox_multiple, &.field_radio":{"&.invalid":{}}},".label":{"marginBottom":"5px","fontWeight":"bold"},"textarea":{"minHeight, *height":"70px","resize":"vertical"},".option_label":{"marginBottom":"5px","&:last-child":{"marginBottom":0}},".error_message":{"paddingBottom":"5px"},"&.read_only":{".field_radio, .field_checkbox_multiple":{".input_input_radio, .input_input_checkbox":{"display":"none"}},"textarea":{"overflow":"hidden"},".input_checkbox_multiple":{"label":{"display":"inline","marginRight":"0.5em","&:after":{"content":"','"},"&.last-checked":{"marginRight":0,"&:after":{"content":"none"}}}},".field":{"padding":"6px","marginBottom":0},".input_text, .input_email, textarea, .fake_input":{"border":"none","padding":0,"resize":"none","background":"transparent"},"select":{"padding":0,"border":"none","height":"auto","background":"transparent"},".option_label":{"marginBottom":0,"paddingLeft":"0 !important"},".label":{"display":"none"},"button":{"position":"relative","background":"transparent"}}}
w.prototype.__jx__fqname_chain=[(w.prototype.__jx__fqname_chain||"")," ","meshim_widget_widgets_Form"].join('')
w.prototype.__jx__fqname="meshim_widget_widgets_Form"
w.prototype.__jx__constructor=w
return w})()
b.__$$__meshim_widget_components_chatWindow_agentList_AgentProfileCard=(function(){function w(x,y,z,A,B){if(!(this instanceof w))return new w(x,y,z,A,B)
y=y||v.generateID()
var C=[b.__$$__meshim_widget_widgets_AgentProfileCard,null,null,[],{"addClass":"profile_card"}],D=C[0].call(this,x,y,null,v.mangleIDs(y,C[3]),C[4]),E=D||this
v.set(y,E)
if(!w.__jx__jcss_generated){t.generate(x,w.prototype.__jx__fqname,w.__jx__jcss,null,w)
w.__jx__jcss_generated=!0}
var F=(function(){})()
for(var G in F)if(F.hasOwnProperty(G))E[G]=F[G]
if(E.fire)E.fire('init')
E.setStyle&&E.setStyle(z)
E.setAttributes&&E.setAttributes(B)
if(typeof E.addChildren=='function')E.addChildren(A)
else v.addChildren(E,A)
if(E!==this){E.__jx__constructor=b.__$$__meshim_widget_components_chatWindow_agentList_AgentProfileCard
E.__jx__native=!1}
return E}
w.prototype=e(b.__$$__meshim_widget_widgets_AgentProfileCard.prototype)
w.prototype.__jx__native=!1
w.prototype.__jx__super=b.__$$__meshim_widget_widgets_AgentProfileCard
w.__jx__jcss={"**self":{"marginBottom":"10px",".avatar_cell":{"verticalAlign":"top","width":"32px",".profile_avatar":{"width, height":"32px","bottom":"auto"}},".content_cell":{"padding":"0 10px !important","verticalAlign":"middle"}}}
w.prototype.__jx__fqname_chain=[(w.prototype.__jx__fqname_chain||"")," ","meshim_widget_components_chatWindow_agentList_AgentProfileCard"].join('')
w.prototype.__jx__fqname="meshim_widget_components_chatWindow_agentList_AgentProfileCard"
w.prototype.__jx__constructor=w
return w})()
b.__$$__meshim_widget_components_chatWindow_CookieForm=(function(){function w(x,y,z,A,B){if(!(this instanceof w))return new w(x,y,z,A,B)
y=y||v.generateID()
var C=[b.__$$__meshim_widget_widgets_ChatWindowPanel,null,null,[[b.__$$__meshim_widget_widgets_ViewStack,"vs",null,[[b.__$$__meshim_widget_components_chatWindow_cookieForm_Accept,null,null,[],{}],[b.__$$__meshim_widget_components_chatWindow_cookieForm_Decline,null,null,[],{}]],{"id":"vs"}]],{"titleBar":"hidePopout","actionBar":""}],D=C[0].call(this,x,y,null,v.mangleIDs(y,C[3]),C[4]),E=D||this
v.set(y,E)
var F=v.get(y+'__vs')
if(!w.__jx__jcss_generated){t.generate(x,w.prototype.__jx__fqname,w.__jx__jcss,null,w)
w.__jx__jcss_generated=!0}
var G=(function(){var I=b.__$$__meshim_widget_controllers_DataController,J=I.root.$('livechat').$('profile').$('allow_cookies$bool')
function K(){E.autobind(J,'value',function(L){F.setIndex(L===!1?0:1)})}
K()})()
for(var H in G)if(G.hasOwnProperty(H))E[H]=G[H]
if(E.fire)E.fire('init')
E.setStyle&&E.setStyle(z)
E.setAttributes&&E.setAttributes(B)
if(typeof E.addChildren=='function')E.addChildren(A)
else v.addChildren(E,A)
if(E!==this){E.__jx__constructor=b.__$$__meshim_widget_components_chatWindow_CookieForm
E.__jx__native=!1}
return E}
w.prototype=e(b.__$$__meshim_widget_widgets_ChatWindowPanel.prototype)
w.prototype.__jx__native=!1
w.prototype.__jx__super=b.__$$__meshim_widget_widgets_ChatWindowPanel
w.__jx__jcss={"a":{"color":"inherit"}}
w.prototype.__jx__fqname_chain=[(w.prototype.__jx__fqname_chain||"")," ","meshim_widget_components_chatWindow_CookieForm"].join('')
w.prototype.__jx__fqname="meshim_widget_components_chatWindow_CookieForm"
w.prototype.__jx__constructor=w
return w})()
b.__$$__meshim_widget_components_chatWindow_PostChatForm=(function(){function w(x,y,z,A,B){if(!(this instanceof w))return new w(x,y,z,A,B)
y=y||v.generateID()
var C=[b.__$$__meshim_widget_widgets_ChatWindowPanel,null,null,[[b.__$$__meshim_widget_widgets_ViewStack,"vs",null,[[b.__$$__meshim_widget_components_chatWindow_postChatForm_RatingForm,null,null,[],{}],[b.__$$__meshim_widget_components_chatWindow_postChatForm_CommentsForm,null,null,[],{}]],{"id":"vs"}]],{"titleBar":"hidePopout","actionBar":"none"}],D=C[0].call(this,x,y,null,v.mangleIDs(y,C[3]),C[4]),E=D||this
v.set(y,E)
var F=v.get(y+'__vs')
if(!w.__jx__jcss_generated){t.generate(x,w.prototype.__jx__fqname,w.__jx__jcss,null,w)
w.__jx__jcss_generated=!0}
var G=(function(){var I=b.__$$__meshim_widget_controllers_DataController,J=I.root.$('livechat').$('ui').$('chat_window').$('post_chat_form').$('stack_index$int'),K=I.root.$$('livechat.channel.rating$string'),L
function M(){E.autobind(J,'value',function(N){if(N==0&&L){J.update(1)
return}
if(N==1&&!L){J.update(0)
return}
F.setIndex(N||0)})
E.autobind(K,'value',function(N){L=N})}
M()})()
for(var H in G)if(G.hasOwnProperty(H))E[H]=G[H]
if(E.fire)E.fire('init')
E.setStyle&&E.setStyle(z)
E.setAttributes&&E.setAttributes(B)
if(typeof E.addChildren=='function')E.addChildren(A)
else v.addChildren(E,A)
if(E!==this){E.__jx__constructor=b.__$$__meshim_widget_components_chatWindow_PostChatForm
E.__jx__native=!1}
return E}
w.prototype=e(b.__$$__meshim_widget_widgets_ChatWindowPanel.prototype)
w.prototype.__jx__native=!1
w.prototype.__jx__super=b.__$$__meshim_widget_widgets_ChatWindowPanel
w.__jx__jcss={}
w.prototype.__jx__fqname_chain=[(w.prototype.__jx__fqname_chain||"")," ","meshim_widget_components_chatWindow_PostChatForm"].join('')
w.prototype.__jx__fqname="meshim_widget_components_chatWindow_PostChatForm"
w.prototype.__jx__constructor=w
return w})()
b.__$$__meshim_widget_components_chatWindow_profileMenu_Status=(function(){function w(x,y,z,A,B){if(!(this instanceof w))return new w(x,y,z,A,B)
y=y||v.generateID()
var C=[b.__$$__jx_ui_Widget,null,null,[[b.__$$__meshim_widget_widgets_menu_Section,null,null,[[b.__$$__jx_ui_Widget,"external",null,[[b.__$$__jx_ui_Widget,null,null,[[b.__$$__meshim_widget_widgets_VisitorProfileCard,"profile_card",null,[],{"id":"profile_card","addClass":"profile_card"}],[b.__$$__jx_ui_Widget,null,null,[[b.__$$__meshim_widget_widgets_iconFont_Button,"sign_out",null,[],{"id":"sign_out","icon":"dustbin","title":u(110)}]],{"addClass":"controls"}]],{"addClass":"positioned"}],[b.__$$__jx_ui_Widget,"phone_container_external",null,[[b.__$$__jx_ui_Widget,null,null,[[b.__$$__jx_ui_Widget,"phone_text_external",null,[],{"id":"phone_text_external","addClass":"phone_text_external break_word"}],[b.__$$__jx_ui_Widget,null,null,[[b.__$$__meshim_widget_widgets_iconFont_Button,"edit_external_phone",null,[],{"id":"edit_external_phone","icon":"pencil","title":u(109)}]],{"addClass":"controls"}]],{"addClass":"positioned"}]],{"id":"phone_container_external","addClass":"phone_container_external"}]],{"id":"external"}],[b.__$$__jx_ui_Widget,"name_email",null,[[b.__$$__jx_ui_Widget,null,null,[[b.__$$__jx_ui_Widget,"name",null,[],{"id":"name","addClass":"name break_word"}],[b.__$$__jx_ui_Widget,"email",null,[],{"id":"email","addClass":"email break_word"}],[b.__$$__jx_ui_Widget,"phone_text",null,[],{"id":"phone_text","addClass":"phone break_word"}]],{"addClass":"name_email"}],[b.__$$__jx_ui_Widget,null,null,[[b.__$$__meshim_widget_widgets_iconFont_Button,"edit",null,[],{"id":"edit","icon":"pencil","title":u(109)}],[b.__$$__meshim_widget_widgets_iconFont_Button,"sign_out_name_email",null,[],{"id":"sign_out_name_email","icon":"dustbin","title":u(110)}]],{"addClass":"controls"}]],{"id":"name_email","addClass":"positioned"}]],{"addClass":"flow"}]],{}],D=C[0].call(this,x,y,null,v.mangleIDs(y,C[3]),C[4]),E=D||this
v.set(y,E)
var F=v.get(y+'__external'),G=v.get(y+'__profile_card'),H=v.get(y+'__sign_out'),I=v.get(y+'__phone_container_external'),J=v.get(y+'__phone_text_external'),K=v.get(y+'__edit_external_phone'),L=v.get(y+'__name_email'),M=v.get(y+'__name'),N=v.get(y+'__email'),O=v.get(y+'__phone_text'),P=v.get(y+'__edit'),Q=v.get(y+'__sign_out_name_email')
if(!w.__jx__jcss_generated){t.generate(x,w.prototype.__jx__fqname,w.__jx__jcss,null,w)
w.__jx__jcss_generated=!0}
var R=(function(){var T=b.__$$__meshim_widget_controllers_DataController,U=b.__$$__meshim_widget_utils_Utils,V=b.__$$__meshim_widget_utils_BindClass,W=b.__$$__meshim_widget_utils_Strings,X=T.root.$('livechat'),Y=X.$('profile'),Z=X.$('ui'),$$=Y.$('auth').$('type$string'),$_,$a=Y.$('display_name$string'),$b=Y.$('email$string'),$c=Y.$('phone$string'),$d,$e=X.$('settings').$('login').$('phone_display$bool'),$f,$g=Z.$('chat_window').$('profile_menu').$('index$int'),$h=Z.$('chat_window').$('menu_stack_name$string')
function $i(){G.setDataNode(Y)
V.mobile(E)
V.rtl(E)
E.autobind($a,'value',function($l){if(U.isDefaultName($l))$l=''
M.setText($l||'')
M.setDisplay($l?'':'none')})
E.autobind($b,'value',function($l){N.setText($l||'')
N.setDisplay($l?'':'none')})
E.autobind($c,'value',function($l){$d=$l
$j()})
E.autobind($e,'value',function($l){$f=$l
$j()})
E.autobind($$,'value',function($l){$_=$l
if($l){F.setDisplay('')
L.setDisplay('none')}
else{F.setDisplay('none')
L.setDisplay('')}
$j()})
function $j(){if($_){I.setDisplay($f?'':'none')
J.setText($d||W.placeholder.phone)
J[$d?'removeClass':'addClass']('placeholder')}
else{if($f&&$d){O.setText($d)
O.setDisplay('')}
else{O.setDisplay('none')}}}
P.on('click',$k)
K.on('click',$k)
J.on('click',function(){$d||$k()})
function $k(){$g.update(2)}
H.on('click',function(){T.livechat.doExternalLogout()})
Q.on('click',function(){Y.write({'display_name$string':'','email$string':'','phone$string':''})
$h.update('')})}
$i()})()
for(var S in R)if(R.hasOwnProperty(S))E[S]=R[S]
if(E.fire)E.fire('init')
E.setStyle&&E.setStyle(z)
E.setAttributes&&E.setAttributes(B)
if(typeof E.addChildren=='function')E.addChildren(A)
else v.addChildren(E,A)
if(E!==this){E.__jx__constructor=b.__$$__meshim_widget_components_chatWindow_profileMenu_Status
E.__jx__native=!1}
return E}
w.prototype=e(b.__$$__jx_ui_Widget.prototype)
w.prototype.__jx__native=!1
w.prototype.__jx__super=b.__$$__jx_ui_Widget
w.__jx__jcss={"**self":{"position":"relative"},".name_email":{".name":{"paddingRight":"40px"}},"&.rtl .name_email":{".name":{"paddingRight":0,"paddingLeft":"40px"}},".controls":{"position":"absolute","top, right":0,".meshim_widget_widgets_iconFont_Button":{"display":"inline-block","cursor":"pointer","height":"100%","paddingLeft":"5px","color":"$$menuHeaderColor","&:hover, &:focus":{"color":"$$menuColor"}}},"&.rtl .controls":{"right":"auto","left":0,".meshim_widget_widgets_iconFont_Button":{"paddingLeft":0,"paddingRight":"5px"}},".break_word":{"wordWrap":"break-word"},".name, .email, .phone":{"lineHeight":1.5},".phone_text_external":{"paddingRight":"40px","&.placeholder":{"cursor":"pointer","color":"$$inputPlaceholderColor","fontStyle":"$$inputPlaceholderFontStyle"}},"&.rtl .phone_text_external":{"paddingRight":0,"paddingLeft":"40px"},".profile_card":{"cursor":"default",".avatar_cell":{"width":"32px"},".content_cell":{"paddingLeft":"10px"},".profile_name":{"whiteSpace":"nowrap","paddingRight":"20px"}},"&.rtl .profile_card":{".content_cell":{"paddingLeft":0,"paddingRight":"10px"},".profile_name, .profile_email, .profile_title":{"paddingRight":0,"paddingLeft":"20px"}},".name":{"fontWeight":"bold"},".positioned":{"position":"relative"},".phone_container_external":{"marginTop, paddingTop":"10px","borderTopWidth":"$$menuBorderWidth","borderTopStyle":"$$menuBorderStyle","borderTopColor":"$$menuBorderColor"},"&.mobile":{".controls":{"height":"100%",".meshim_widget_widgets_iconFont_Button":{"paddingRight, paddingLeft":"10px"}},".name_email":{".name, .email":{"paddingRight":"80px"}},".profile_card":{".profile_name, .profile_email, .profile_title":{"paddingRight":"40px"}},".phone_text_external":{"lineHeight":"32px"}},"&.mobile.rtl":{".name_email":{".name, .email":{"paddingRight":0,"paddingLeft":"80px"}},".profile_card":{".profile_name, .profile_email, .profile_title":{"paddingRight":0,"paddingLeft":"40px"}}}}
w.prototype.__jx__fqname_chain=[(w.prototype.__jx__fqname_chain||"")," ","meshim_widget_components_chatWindow_profileMenu_Status"].join('')
w.prototype.__jx__fqname="meshim_widget_components_chatWindow_profileMenu_Status"
w.prototype.__jx__constructor=w
return w})()
b.__$$__meshim_widget_widgets_chatLogRenderer_BubbleLogRenderer=(function(){function w(x,y,z,A,B){if(!(this instanceof w))return new w(x,y,z,A,B)
y=y||v.generateID()
var C=[b.__$$__jx_ui_html_div,null,null,[[b.__$$__meshim_widget_widgets_chatLogRenderer_ChatBubble,"bubble",null,[],{"id":"bubble","addClass":"chat_bubble"}],[b.__$$__jx_ui_html_div,null,null,[],{"class":"clear_both"}]],{}],D=C[0].call(this,x,y,null,v.mangleIDs(y,C[3]),C[4]),E=D||this
v.set(y,E)
var F=v.get(y+'__bubble')
if(!w.__jx__jcss_generated){t.generate(x,w.prototype.__jx__fqname,w.__jx__jcss,null,w)
w.__jx__jcss_generated=!0}
var G=(function(){function I(){E.setDataNode=function(J){F.setDataNode(J)}}
I()})()
for(var H in G)if(G.hasOwnProperty(H))E[H]=G[H]
if(E.fire)E.fire('init')
E.setStyle&&E.setStyle(z)
E.setAttributes&&E.setAttributes(B)
if(typeof E.addChildren=='function')E.addChildren(A)
else v.addChildren(E,A)
if(E!==this){E.__jx__constructor=b.__$$__meshim_widget_widgets_chatLogRenderer_BubbleLogRenderer
E.__jx__native=!1}
return E}
w.prototype=e(b.__$$__jx_ui_html_div.prototype)
w.prototype.__jx__native=!1
w.prototype.__jx__super=b.__$$__jx_ui_html_div
w.__jx__jcss={"**self":{".clear_both":{"clear":"both","height":"0px","overflow":"hidden","lineHeight":"0px","fontSize":"0px"}},"**self.group_children":{".chat_name":{"display":"none"}}}
w.prototype.__jx__fqname_chain=[(w.prototype.__jx__fqname_chain||"")," ","meshim_widget_widgets_chatLogRenderer_BubbleLogRenderer"].join('')
w.prototype.__jx__fqname="meshim_widget_widgets_chatLogRenderer_BubbleLogRenderer"
w.prototype.__jx__constructor=w
return w})()
b.__$$__meshim_widget_components_chatWindow_chatPanel_ChatTextArea=(function(){function w(x,y,z,A,B){if(!(this instanceof w))return new w(x,y,z,A,B)
y=y||v.generateID()
var C=[b.__$$__jx_ui_Widget,null,null,[[b.__$$__meshim_widget_widgets_FakeInput,"fake_input",null,[[b.__$$__jx_ui_Widget,null,null,[[b.__$$__meshim_widget_widgets_Button,"send",null,[u(26)],{"id":"send","addClass":"send primary fit"}],[b.__$$__jx_ui_Widget,null,null,[[b.__$$__meshim_widget_widgets_AutoResizeTextArea,"textarea",null,[],{"id":"textarea","addClass":"textarea unstyled","placeholder":u(27)}]],{"addClass":"textarea_wrapper"}]],{"addClass":"float_wrapper"}],[b.__$$__meshim_widget_widgets_IconFont,"toggle_picker",null,[],{"id":"toggle_picker","addClass":"toggle_picker","icon":"smiley","tabIndex":"0","tagName":"button"}],[b.__$$__meshim_widget_widgets_EmoticonPicker,"picker",null,[],{"id":"picker","addClass":"picker"}],[b.__$$__jx_ui_Label,null,null,[[b.__$$__jx_ui_Frame,null,null,[u(95)],{}]],{"addClass":"drop_label","tabIndex":"0"}]],{"id":"fake_input","addClass":"fake_input"}]],{}],D=C[0].call(this,x,y,null,v.mangleIDs(y,C[3]),C[4]),E=D||this
v.set(y,E)
var F=v.get(y+'__fake_input'),G=v.get(y+'__send'),H=v.get(y+'__textarea'),I=v.get(y+'__toggle_picker'),J=v.get(y+'__picker')
if(!w.__jx__jcss_generated){t.generate(x,w.prototype.__jx__fqname,w.__jx__jcss,null,w)
w.__jx__jcss_generated=!0}
var K=(function(){var M=b.__$$__meshim_widget_Config,N=b.__$$__meshim_common_FileUtil,O=b.__$$__meshim_common_QueryString,P=b.__$$__meshim_widget_controllers_ConnectionController,Q=b.__$$__meshim_widget_controllers_DataController,R=b.__$$__meshim_widget_controllers_CookieLaw,S=b.__$$__meshim_common_Regex,T=b.__$$__meshim_widget_utils_BindClass,U=Q.root.$('livechat').$('ui').$('chat_window').$('chat_panel'),V=Q.root.$('livechat').$('ui').$('chat_button'),W=U.$('emoticon_picker').$('display$bool'),X,Y=U.$('emoticon_picker').$('value$string'),Z=Q.root.$('livechat').$('settings').$('emoticons').$('enabled$bool'),$$=U.$('textarea'),$_=Q.root.$$('livechat.channel.typing'),$a=Q.root.$('livechat').$('ui').$('theme_loaded$bool'),$b=Q.root.$$('livechat.ui.hide_branding$bool'),$c=Q.root.$('livechat').$('ui').$('popout$bool'),$d,$e=Q.root.$('livechat').$('ui').$('mockup$bool'),$f,$g=Q.root.$$('livechat.profile.mid$string'),$h=Q.root.$$('livechat.profile.uid$string'),$i=Q.root.$('livechat').$('ui').$('chat_window').$('chat_panel').$('file_toast').$('error$string'),$j=Q.root.$('livechat').$('settings').$('package'),$k,$l,$m
function $n($z){$z.stopPropagation()
$z.preventDefault()
if(!$k)return
if(p.isWebKit){if($z.type=='dragover'){$l=!0
$m&&window.clearTimeout($m)
E.addClass('dragover')}
else{$l=!1
$m=window.setTimeout($A,200)}}
else{$z.type=='dragover'?E.addClass('dragover'):E.removeClass('dragover')}
function $A(){if(!E.dom)return
if($l)return
E.removeClass('dragover')}}
function $o($z,$A){if(!$k)return
$n($z)
var $B
if($A){$B=$z&&$z.dataTransfer&&$z.dataTransfer.files
if(!$B||!$B.length)return
$q($B)}
else;}
var $p
function $q($z){if(!$k||!window.FormData)return
var $A=new window.FormData(),$B=[],$C=[],$D=0
for(var $E=0,$F=$z.length;$E<$F;$E++){if(N.isValidType($z[$E].type)){$B.push($z[$E].name)
$C.push($z[$E].type)
$D+=$z[$E].size||0
$A.append('file_'+$z[$E].name,$z[$E])}
else{$i.update('type')
return}}
if($D>M.FILE_UPLOAD_MAX){$i.update('size')
return}
$B=$B.join(', ')
$C=$C.join(', ')
var $G=Q.livechat.sendFile({file_name:$B,file_type:$C,file_size:$D}),$H=new window.XMLHttpRequest(),$I={ts:$G,mid:$g.getValue(),uid:$h.getValue()}
$p='https://'+P.getHost()+M.FILE_UPLOAD_PATH+'?'+O.buildQuery($I)
if($H.upload){$H.open("POST",$p,!0)
$H.send($A)}}
var $r
function $s(){$r=!0
$_.write({'typing$bool':$r})
R.setUserChoice(!0)}
function $t(){$r=!1
$_.write({'typing$bool':$r})}
function $u(){$d=$c.getValue()
$f=$e.getValue()
T.mobile(E)
T.rtl(E)
H.setDataNode($$)
J.setDataNode(W,Y)
H.on('focus',function(){$y()
$x()
F.addClass('focus')
$b.update(!0)})
H.on('blur',function(){F.removeClass('focus')
$b.update(!1)})
E.autobind($a,'value',function(){l(function(){if(!E.dom)return
H.updateStyles()})})
E.autobind($$,'value',function($D){if(!$D)return
if('overflow$bool' in $D){$D['overflow$bool']?E.addClass('overflow'):E.removeClass('overflow')}})
var $z=120000,$A=0
E.autobind($$.$('value$string'),'value',function($D){if(!$D){if($r){window.clearTimeout($A)
$t()}}
else{if(!$r){$s()}
window.clearTimeout($A)
$A=window.setTimeout($t,$z)}})
E.autobind(W,'value',function($D){$D?I.addClass('active'):I.removeClass('active')
X=$D})
E.autobind(Z,'value',function($D){I.setDisplay($D?'':'none')
$D?E.addClass('emoticons_enabled'):E.removeClass('emoticons_enabled')})
E.autobind(Y,'value',function($D){$D&&H.insertAtCaret($D)})
J.on('click',function(){E.focus()})
I.on('click',function($D){$D.stopPropagation()
W.update(!X)
E.focus()})
var $B=E
while($B&&$B.parentNode&&$B.parentNode.tagName.toLowerCase()!='body'){$B=$B.parentNode}
$B&&$B.on('click',$w)
$d&&q.window.on('click',$w)
E.onDestruction(function(){$B&&$B.un('click',$w)
$d&&q.window.un('click',$w)})
var $C
E.autobind($j,'value',function($D){if(!$D)return
$C=$j.getValue()
if($C['color_customization_enabled$int']||$C['widget_customization_enabled$int']){$k=!0}
else{$k=!1}})
if(window.File&&window.FileList&&window.FileReader){E.on("dragover",$n)
E.on("dragleave",$n)
E.on("drop",function($D){$o($D,!0)})}
H.on('keydown',function($D){if($D.keyCode==13&&!$D.shiftKey&&!$D.ctrlKey&&!$D.altKey){$D.preventDefault()
$v()}})
G.on('click',function(){$y()
$x()
$v()})}
function $v(){var $z=S.trim(H.getValue())
if($z){Q.livechat.sendChatMsg({msg:$z})
H.setValue('')}}
function $w($z){var $A=$z.target.jx_wrapper
while($A&&$A.parentNode&&$A.parentNode!=E){if($A==J)return
$A=$A.parentNode}
W.update(!1)}
function $x(){Q.root.$$('livechat.ui.chat_window').update({'menu_stack_name$string':''})}
function $y(){if($d){V.write({'unread_count$int':0})}}
E.focus=function(){if($f)return
H.updateHeight()
H.focus()}
E.blur=function(){H.updateHeight()
H.blur()}
E.updateStyles=function(){H.updateStyles()}
$u()})()
for(var L in K)if(K.hasOwnProperty(L))E[L]=K[L]
if(E.fire)E.fire('init')
E.setStyle&&E.setStyle(z)
E.setAttributes&&E.setAttributes(B)
if(typeof E.addChildren=='function')E.addChildren(A)
else v.addChildren(E,A)
if(E!==this){E.__jx__constructor=b.__$$__meshim_widget_components_chatWindow_chatPanel_ChatTextArea
E.__jx__native=!1}
return E}
w.prototype=e(b.__$$__jx_ui_Widget.prototype)
w.prototype.__jx__native=!1
w.prototype.__jx__super=b.__$$__jx_ui_Widget
w.__jx__jcss={"**self":{"position":"relative","width":"100%","padding":"$$chatTextAreaPadding","height":"auto","*zoom":1,"borderWidth":"$$chatTextAreaBorderWidth","borderStyle":"$$chatTextAreaBorderStyle","borderColor":"$$chatTextAreaBorderColor","&.emoticons_enabled.overflow":{".toggle_picker":{}},"&.emoticons_enabled":{".textarea":{}},"&.dragover":{".fake_input":{"boxShadow":"none","border":"none"},".drop_label":{"display":"block"}}},".fake_input":{"position":"relative","overflow":"visible","*zoom":1,"padding":0,"color":"$$chatTextAreaInputColor","background":"$$chatTextAreaInputBg","borderWidth":"$$chatTextAreaInputBorderWidth","borderStyle":"$$chatTextAreaInputBorderStyle","borderColor":"$$chatTextAreaInputBorderColor","borderRadius":"$$chatTextAreaInputRadius","boxShadow":"$$chatTextAreaInputShadow"},".fake_input.focus":{"color":"$$chatTextAreaInputFocusColor","background":"$$chatTextAreaInputFocusBg","borderColor":"$$chatTextAreaInputFocusBorderColor","boxShadow":"$$chatTextAreaInputFocusShadow"},".drop_label, .file_input":{"display":"none","position":"absolute","top, left":0,"width, height":"100%"},".drop_label":{"textAlign":"center","color":"$$chatTextAreaDropColor","background":"$$chatTextAreaDropBg","borderWidth":"$$chatTextAreaDropBorderWidth","borderStyle":"$$chatTextAreaDropBorderStyle","borderColor":"$$chatTextAreaDropBorderColor",".container":{"border":"none","background":"transparent"}},".file_input":{"opacity":0},".toggle_picker":{"position":"absolute","top, right":0,"cursor":"pointer","fontSize":"18px","lineHeight":"24px","&:hover":{},"&:focus":{"outline":"none"}},".picker":{"position":"absolute","bottom":"100%"},".textarea":{"display":"block","width, height":"100%","resize":"none","transition":"height 0.1s ease-in-out","minHeight":"$$chatTextAreaInputMinHeight","maxHeight":"$$chatTextAreaInputMaxHeight","padding":"$$chatTextAreaInputPadding"},".send":{"display":"none"},".float_wrapper":{"overflow":"hidden"},".textarea_wrapper":{"display":"block","overflow":"hidden"},"&.mobile":{"position":"fixed","zIndex":"1000","padding":0,".fake_input":{},".textarea":{"padding":"10px"},".send":{"display":"block","float":"right","margin":"$$chatTextAreaSubmitMargin","padding":"$$chatTextAreaSubmitPadding"},".toggle_picker":{"display":"none"}},"&.rtl.mobile":{".send":{"float":"left"}}}
w.prototype.__jx__fqname_chain=[(w.prototype.__jx__fqname_chain||"")," ","meshim_widget_components_chatWindow_chatPanel_ChatTextArea"].join('')
w.prototype.__jx__fqname="meshim_widget_components_chatWindow_chatPanel_ChatTextArea"
w.prototype.__jx__constructor=w
return w})()
b.__$$__meshim_widget_widgets_chatLogRenderer_BubbleAvatarRenderer=(function(){function w(x,y,z,A,B){if(!(this instanceof w))return new w(x,y,z,A,B)
y=y||v.generateID()
var C=[b.__$$__jx_ui_html_table,null,null,[[b.__$$__jx_ui_html_tbody,null,null,[[b.__$$__jx_ui_html_tr,null,null,[[b.__$$__jx_ui_html_td,"left_cell",null,[],{"id":"left_cell"}],[b.__$$__jx_ui_html_td,"right_cell",null,[],{"id":"right_cell"}]],{}]],{}]],{}],D=C[0].call(this,x,y,null,v.mangleIDs(y,C[3]),C[4]),E=D||this
v.set(y,E)
var F=v.get(y+'__left_cell'),G=v.get(y+'__right_cell')
if(!w.__jx__jcss_generated){t.generate(x,w.prototype.__jx__fqname,w.__jx__jcss,null,w)
w.__jx__jcss_generated=!0}
var H=(function(){var J=b.__$$__meshim_widget_widgets_Avatar,K=b.__$$__meshim_widget_widgets_chatLogRenderer_ChatBubble,L,M,N=/^agent/
function O(){E.setDataNode=P}
function P(R){if(L)E.autounbind(L,'value',Q)
M=R
L=R.$('nick$string')
E.autobind(L,'value',Q)}
function Q(R){if(!R)return
F.empty()
G.empty()
F.removeClass('avatar_cell')
G.removeClass('avatar_cell')
if(N.test(R)){new J(F).setHideAuthType(!0).setMemberId(R).addClass('log_avatar')
new K(G).setDataNode(M)
F.addClass('avatar_cell')}
else{new J(G).setHideAuthType(!0).setMemberId(R).addClass('log_avatar')
new K(F).setDataNode(M)
G.addClass('avatar_cell')}}
O()})()
for(var I in H)if(H.hasOwnProperty(I))E[I]=H[I]
if(E.fire)E.fire('init')
E.setStyle&&E.setStyle(z)
E.setAttributes&&E.setAttributes(B)
if(typeof E.addChildren=='function')E.addChildren(A)
else v.addChildren(E,A)
if(E!==this){E.__jx__constructor=b.__$$__meshim_widget_widgets_chatLogRenderer_BubbleAvatarRenderer
E.__jx__native=!1}
return E}
w.prototype=e(b.__$$__jx_ui_html_table.prototype)
w.prototype.__jx__native=!1
w.prototype.__jx__super=b.__$$__jx_ui_html_table
w.__jx__jcss={"**self":{"position":"relative","width":"100%","fontSize":"100%","tableLayout":"fixed","borderSpacing":"0px","borderCollapse":"collapse","td":{"verticalAlign":"bottom","padding":"0px"},".chat_bubble":{"display":"inline","margin":"0 8px"},".log_avatar":{"width":"32px","height":"32px"},".avatar_cell":{"width":"32px"}},"**self.group_children":{".chat_name":{"display":"none"}}}
w.prototype.__jx__fqname_chain=[(w.prototype.__jx__fqname_chain||"")," ","meshim_widget_widgets_chatLogRenderer_BubbleAvatarRenderer"].join('')
w.prototype.__jx__fqname="meshim_widget_widgets_chatLogRenderer_BubbleAvatarRenderer"
w.prototype.__jx__constructor=w
return w})()
b.__$$__meshim_widget_components_chatWindow_chatPanel_ChatPanelHeader=(function(){function w(x,y,z,A,B){if(!(this instanceof w))return new w(x,y,z,A,B)
y=y||v.generateID()
var C=[b.__$$__jx_ui_html_div,null,null,[[b.__$$__jx_ui_html_table,null,null,[[b.__$$__jx_ui_html_tbody,null,null,[[b.__$$__jx_ui_html_tr,null,null,[[b.__$$__jx_ui_html_td,null,null,[[b.__$$__jx_ui_ViewStack,"stack",null,[[b.__$$__meshim_widget_widgets_AgentProfileCard,"agent_card",null,[],{"id":"agent_card","class":"card"}],[b.__$$__meshim_widget_widgets_MultiProfilesCard,"multi_agents_card",null,[],{"id":"multi_agents_card","class":"card cursor_pointer"}]],{"id":"stack"}]],{"pseudo":"served_by_cell"}],[b.__$$__jx_ui_html_td,"rating_cell",null,[],{"pseudo":"rating_cell","id":"rating_cell","class":"display_none"}]],{}]],{}]],{"class":"profile_table"}]],{}],D=C[0].call(this,x,y,null,v.mangleIDs(y,C[3]),C[4]),E=D||this
v.set(y,E)
var F=v.get(y+'__stack'),G=v.get(y+'__agent_card'),H=v.get(y+'__multi_agents_card'),I=v.get(y+'__rating_cell')
if(!w.__jx__jcss_generated){t.generate(x,w.prototype.__jx__fqname,w.__jx__jcss,null,w)
w.__jx__jcss_generated=!0}
var J=(function(){var L=b.__$$__meshim_widget_controllers_DataController,M=b.__$$__meshim_widget_widgets_RatingBar,N=L.root.$('livechat'),O=N.$('agents'),P=N.$$('settings.concierge'),Q=N.$$('channel.chatting$bool'),R=N.$$('settings.rating.enabled$bool'),S=N.$$('ui.chat_window.main_stack_name$string'),T=N.$$('ui.chat_button'),U=N.$$('ui.popout$bool'),V=N.$$('ui.mobile$bool').getValue(),W=null
function X(){F.on('instantiate',function($a){var $b=F.children[$a]
$b.onGravatarClick=Z
$b.onContentClick=Z
if($a===0)G=$b
else H=$b})
F.setIndex(0)
E.autobind(O,'keys',Y)
E.autobind(Q,'value',$$)
E.autobind(R,'value',$$)
if(V){E.addClass('mobile')}}
function Y(){var $a=O.getKeys().length
if($a>1){if(F.getIndex()===1)return
F.setIndex(1)
G.setDataNode(null)
H.setDataNode(O)}
else{if(F.getIndex()!==0){F.setIndex(0)
H.setDataNode(null)}
var $b
if($a===1){$b=O.$(O.getKeys()[0])
G.addClass('cursor_pointer')}
else{$b=P
G.removeClass('cursor_pointer')}
G.setDataNode($b)}}
function Z(){if(U.getValue()){T.write({'unread_count$int':0})}
if(!O.getKeys().length)return
S.update('agent_list')}
function $$(){var $a=m(Q.getValue()),$b=m(R.getValue())
$_($a&&$b)}
function $_($a){if($a){if(!W){W=new M(I).setPseudo('rating_bar')
W.setDataNode(N.$$('channel.rating$string'))}
I.removeClass('display_none')}
else{I.addClass('display_none')}}
X()})()
for(var K in J)if(J.hasOwnProperty(K))E[K]=J[K]
if(E.fire)E.fire('init')
E.setStyle&&E.setStyle(z)
E.setAttributes&&E.setAttributes(B)
if(typeof E.addChildren=='function')E.addChildren(A)
else v.addChildren(E,A)
if(E!==this){E.__jx__constructor=b.__$$__meshim_widget_components_chatWindow_chatPanel_ChatPanelHeader
E.__jx__native=!1}
return E}
w.prototype=e(b.__$$__jx_ui_html_div.prototype)
w.prototype.__jx__native=!1
w.prototype.__jx__super=b.__$$__jx_ui_html_div
w.__jx__jcss={"**self":{"height":"100%",".profile_table":{"width":"100%"},".card":{".avatar_cell":{"width":"50px","verticalAlign":"bottom",".profile_avatar":{"position":"absolute","bottom":"0","width, height":"50px","borderWidth":"$$chatPanelProfileCardAvatarBorderWidth","borderStyle":"$$chatPanelProfileCardAvatarBorderStyle","borderColor":"$$chatPanelProfileCardAvatarBorderColor","borderRadius":"$$chatPanelProfileCardAvatarRadius","boxShadow":"$$chatPanelProfileCardAvatarShadow"}},".content_cell":{"padding":"0 10px !important","verticalAlign":"bottom","width":"100%",".profile_name, .profile_title":{"overflow":"hidden","width":"100%","whiteSpace":"nowrap"}}},".rating_cell":{"width":"50px","verticalAlign":"bottom"},".cursor_pointer":{"cursor":"pointer"},".display_none":{"display":"none"}},"&.mobile":{".card":{".avatar_cell":{"width":"40px","verticalAlign":"middle",".profile_avatar":{"position":"relative","width, height":"40px"}},".content_cell":{"verticalAlign":"middle",".profile_name":{"marginTop":"3px"}}},".rating_cell":{"width":"88px"}}}
w.prototype.__jx__fqname_chain=[(w.prototype.__jx__fqname_chain||"")," ","meshim_widget_components_chatWindow_chatPanel_ChatPanelHeader"].join('')
w.prototype.__jx__fqname="meshim_widget_components_chatWindow_chatPanel_ChatPanelHeader"
w.prototype.__jx__constructor=w
return w})()
b.__$$__meshim_widget_components_chatWindow_NewChatForm=(function(){function w(x,y,z,A,B){if(!(this instanceof w))return new w(x,y,z,A,B)
y=y||v.generateID()
var C=[b.__$$__meshim_widget_widgets_ChatWindowPanel,null,null,[[b.__$$__meshim_widget_widgets_AbsolutePaddingContainer,null,null,[[b.__$$__jx_ui_Widget,"content",null,[[b.__$$__meshim_widget_components_chatWindow_newChatForm_Banner,"banner",null,[],{"id":"banner","addClass":"banner"}],[b.__$$__jx_ui_Widget,null,null,[[b.__$$__meshim_widget_widgets_ZopimBranding,null,null,[],{"addClass":"branding"}]],{"addClass":"branding_container"}],[b.__$$__meshim_widget_widgets_IconFont,"close",null,[],{"id":"close","addClass":"close","icon":"minimize","title":u(25)}]],{"id":"content","addClass":"content"}],[b.__$$__jx_ui_Form,"form",null,[[b.__$$__meshim_widget_widgets_IconFont,"submit",null,[],{"id":"submit","icon":"send","addClass":"send","title":u(26)}],[b.__$$__jx_ui_Widget,null,null,[[b.__$$__meshim_widget_components_chatWindow_newChatForm_TextField,"input",null,[],{"id":"input","addClass":"input","autocomplete":"false","placeholder":u(27),"tabIndex":"10"}]],{"class":"input_wrapper"}]],{"id":"form","addClass":"form","noValidate":"true"}]],{"absPaddingBottom":"badgeFormHeight"}]],{"titleBar":"none","actionBar":"none","addClass":"mini"}],D=C[0].call(this,x,y,null,v.mangleIDs(y,C[3]),C[4]),E=D||this
v.set(y,E)
var F=v.get(y+'__content'),G=v.get(y+'__banner'),H=v.get(y+'__close'),I=v.get(y+'__form'),J=v.get(y+'__submit'),K=v.get(y+'__input')
if(!w.__jx__jcss_generated){t.generate(x,w.prototype.__jx__fqname,w.__jx__jcss,null,w)
w.__jx__jcss_generated=!0}
var L=(function(){var N=b.__$$__meshim_widget_controllers_DataController,O=b.__$$__meshim_widget_controllers_UIController,P=b.__$$__meshim_widget_utils_Utils,Q=b.__$$__meshim_widget_utils_BindClass,R=b.__$$__meshim_common_Regex,S=N.root.$('livechat'),T=S.$('ui').$('chat_window').$('main_stack_name$string'),U=S.$('ui').$('chat_window').$('chat_panel').$('textarea').$('value$string'),V=S.$('ui').$('chat_button'),W=S.$('settings').$('forms').$('pre_chat_form').$('required$bool'),X,Y=S.$('settings').$('forms').$('pre_chat_form').$('form').$('3').$('value_user$string'),Z=S.$('ui').$('chat_window').$('pre_chat_form').$('submitted$bool'),$$,$_=S.$('ui').$('chat_window').$('pre_chat_form').$('form_populate$bool'),$a=S.$('settings').$('branding').$('hide_branding$bool')
function $b(){Q.rtl(E)
Q.windowPosition(E)
P.hoverFix(E)
E.autobind(W,'value',function($e){X=$e})
E.autobind(Z,'value',function($e){$$=$e})
E.autobind($a,'value',function($e){G[$e?'addClass':'removeClass']('hide_branding')})
I.on('submit',function($e){$e.preventDefault()
$c()})
J.on('click',function(){$c()})
H.on('click',function($e){$e.stopPropagation()
O.userHideBanner()})
F.on('click',function(){var $e=R.trim(K.getValue())
if($e)U.update($e)
K.reset()
V.write({'button_clicked$bool':!0})
$d()})}
function $c(){var $e=R.trim(K.getValue())
if(!$e){K.focus()
return}
K.reset()
$d($e)}
function $d($e){O.setBannerUserHidden()
if(X&&!$$){Y.update($e||'')
$_.update(!0)
T.update('pre_chat_offline_form')}
else{$e&&N.livechat.sendChatMsg({msg:$e})
T.update('chat_panel')}}
$b()})()
for(var M in L)if(L.hasOwnProperty(M))E[M]=L[M]
if(E.fire)E.fire('init')
E.setStyle&&E.setStyle(z)
E.setAttributes&&E.setAttributes(B)
if(typeof E.addChildren=='function')E.addChildren(A)
else v.addChildren(E,A)
if(E!==this){E.__jx__constructor=b.__$$__meshim_widget_components_chatWindow_NewChatForm
E.__jx__native=!1}
return E}
w.prototype=e(b.__$$__meshim_widget_widgets_ChatWindowPanel.prototype)
w.prototype.__jx__native=!1
w.prototype.__jx__super=b.__$$__meshim_widget_widgets_ChatWindowPanel
w.__jx__jcss={".container":{"background":"$$badgeBg","borderWidth":"$$badgeBorderWidth","borderStyle":"$$badgeBorderStyle","borderColor":"$$badgeBorderColor"},".content":{"width":"100%","height":"100%","overflow":"hidden","color":"$$badgeContentColor","background":"$$badgeContentBg","borderWidth":"$$badgeContentBorderWidth","borderStyle":"$$badgeContentBorderStyle","borderColor":"$$badgeContentBorderColor"},".banner":{"width":"100%","height":"100%","position":"relative","cursor":"pointer","fontSize":"1.5em","padding":"20px 10px 10px","&.hide_branding":{"paddingTop":"10px"}},".branding_container":{"position":"absolute","top":"6px","left":0,"width":"100%","textAlign":"center","cursor":"pointer",".branding":{"cursor":"pointer"}},".close":{"position":"absolute","cursor":"pointer","opacity":0,"transition":"opacity 0.2s","top, right":0,"padding":"9px 10px 2px 2px"},"&.rtl .close":{"left":"6px","right":"auto","padding":"3px 2px 2px 4px"},"&.hover, &:hover":{".close":{"opacity":1}},".send":{"float":"right","fontSize":"$$fontSizeXXL","padding":"5px","margin":"5px","color":"$$badgeIconColor","opacity":"0.8","cursor":"pointer","&:hover":{"opacity":"1"}},".form":{"position":"absolute","overflow":"hidden","bottom, left":0,"width":"100%","*zoom":1,"height":"$$badgeFormHeight","background":"$$badgeFormBg","borderWidth":"$$badgeFormBorderWidth","borderStyle":"$$badgeFormBorderStyle","borderColor":"$$badgeFormBorderColor",".input_wrapper":{"display":"block","overflow":"hidden","*width":"165px",".input":{"width":"100%","height":"100%","position":"relative","*width":"165px","*overflow":"hidden"}},".button":{"*width":"60px"}},"&.ltr .form":{".input":{"paddingRight":0},".button":{"float":"right"}},"&.rtl .form":{".input":{"paddingLeft":0},".button":{"float":"left"}},"&.br, &.bm, &.bl":{".content":{"borderTopLeftRadius, borderTopRightRadius":"$$windowRadius"}},"&.tr, &.tm, &.tl":{}}
w.prototype.__jx__fqname_chain=[(w.prototype.__jx__fqname_chain||"")," ","meshim_widget_components_chatWindow_NewChatForm"].join('')
w.prototype.__jx__fqname="meshim_widget_components_chatWindow_NewChatForm"
w.prototype.__jx__constructor=w
return w})()
b.__$$__meshim_widget_components_chatWindow_ProfileMenu=(function(){function w(x,y,z,A,B){if(!(this instanceof w))return new w(x,y,z,A,B)
y=y||v.generateID()
var C=[b.__$$__meshim_widget_widgets_Menu,null,null,[[b.__$$__meshim_widget_widgets_ViewStack,"vs",null,[[b.__$$__meshim_widget_components_chatWindow_profileMenu_Login,null,null,[],{"addClass":"login"}],[b.__$$__meshim_widget_components_chatWindow_profileMenu_Status,null,null,[],{"addClass":"status"}],[b.__$$__meshim_widget_components_chatWindow_profileMenu_Edit,null,null,[],{"addClass":"edit"}]],{"id":"vs"}]],{}],D=C[0].call(this,x,y,null,v.mangleIDs(y,C[3]),C[4]),E=D||this
v.set(y,E)
var F=v.get(y+'__vs')
if(!w.__jx__jcss_generated){t.generate(x,w.prototype.__jx__fqname,w.__jx__jcss,null,w)
w.__jx__jcss_generated=!0}
var G=(function(){var I=b.__$$__meshim_widget_controllers_DataController,J=I.root.$('livechat').$('ui').$('chat_window').$('profile_menu').$('index$int'),K=I.root.$('livechat').$('profile').$('logged_in$bool'),L,M=I.root.$('livechat').$('settings').$('login').$('allowed_types'),N,O
function P(){E.autobind(M,'value',function(){var R=M.getValue()
N=0
for(var S in R)if(R.hasOwnProperty(S)){if(S=='email$bool')continue
if(R[S]){N++}}})
E.autobind(J,'value',function(R){if(O)return
F.setIndex(isNaN(R)?Q():R)})
F.on('indexChange',function(R){O=!0
J.update(R)
O=!1})
E.autobind(K,'value',function(R){L=R
Q()})
E.on('hide',Q)}
function Q(){F.setIndex(L?1:(N?0:2))}
P()})()
for(var H in G)if(G.hasOwnProperty(H))E[H]=G[H]
if(E.fire)E.fire('init')
E.setStyle&&E.setStyle(z)
E.setAttributes&&E.setAttributes(B)
if(typeof E.addChildren=='function')E.addChildren(A)
else v.addChildren(E,A)
if(E!==this){E.__jx__constructor=b.__$$__meshim_widget_components_chatWindow_ProfileMenu
E.__jx__native=!1}
return E}
w.prototype=e(b.__$$__meshim_widget_widgets_Menu.prototype)
w.prototype.__jx__native=!1
w.prototype.__jx__super=b.__$$__meshim_widget_widgets_Menu
w.__jx__jcss={}
w.prototype.__jx__fqname_chain=[(w.prototype.__jx__fqname_chain||"")," ","meshim_widget_components_chatWindow_ProfileMenu"].join('')
w.prototype.__jx__fqname="meshim_widget_components_chatWindow_ProfileMenu"
w.prototype.__jx__constructor=w
return w})()
b.__$$__meshim_widget_components_chatWindow_preChatOfflineForm_PostSubmit=(function(){function w(x,y,z,A,B){if(!(this instanceof w))return new w(x,y,z,A,B)
y=y||v.generateID()
var C=[b.__$$__meshim_widget_widgets_ChatWindowContent,null,null,[[b.__$$__meshim_widget_widgets_ScrollableFrame,null,null,[[b.__$$__meshim_widget_widgets_Body,"message",null,[],{"id":"message"}],[b.__$$__jx_ui_Widget,null,null,[[b.__$$__meshim_widget_widgets_form_Profile,null,null,[],{"hideLabel":"","disabled":"true"}],[b.__$$__meshim_widget_widgets_Form,"form",null,[],{"id":"form","readOnly":"true"}]],{"addClass":"form_container"}],[b.__$$__meshim_widget_widgets_Controls,null,null,[[b.__$$__meshim_widget_widgets_Button,"another",null,[u(92)],{"id":"another","addClass":"wide"}]],{"addClass":"controls"}]],{}]],{}],D=C[0].call(this,x,y,null,v.mangleIDs(y,C[3]),C[4]),E=D||this
v.set(y,E)
var F=v.get(y+'__message'),G=v.get(y+'__form'),H=v.get(y+'__another')
if(!w.__jx__jcss_generated){t.generate(x,w.prototype.__jx__fqname,w.__jx__jcss,null,w)
w.__jx__jcss_generated=!0}
var I=(function(){var K=b.__$$__meshim_widget_controllers_DataController,L=b.__$$__meshim_widget_utils_Strings,M=K.root.$('livechat'),N=M.$('settings').$('forms').$('offline_form'),O=N.$('form'),P=N.$('form_submitted'),Q=N.$('post_submit_message$string'),R=M.$('ui').$('chat_window').$('pre_chat_offline_form'),S=R.$('stack_index$int')
function T(){G.setDataNode(O)
E.autobind(Q,'value',function(){F.setText(L.get(Q))})
E.autobind(S,'value',function(U){if((U==1)&&(!P.getValue()))l(function(){S.update(0)})})
H.on('click',function(){S.update(0)})}
T()})()
for(var J in I)if(I.hasOwnProperty(J))E[J]=I[J]
if(E.fire)E.fire('init')
E.setStyle&&E.setStyle(z)
E.setAttributes&&E.setAttributes(B)
if(typeof E.addChildren=='function')E.addChildren(A)
else v.addChildren(E,A)
if(E!==this){E.__jx__constructor=b.__$$__meshim_widget_components_chatWindow_preChatOfflineForm_PostSubmit
E.__jx__native=!1}
return E}
w.prototype=e(b.__$$__meshim_widget_widgets_ChatWindowContent.prototype)
w.prototype.__jx__native=!1
w.prototype.__jx__super=b.__$$__meshim_widget_widgets_ChatWindowContent
w.__jx__jcss={".form_container":{"background":"$$formSubmittedBg","borderRadius":"$$formSubmittedRadius","borderWidth":"$$formSubmittedBorderWidth","borderStyle":"$$formSubmittedBorderStyle","borderColor":"$$formSubmittedBorderColor"},".profile_form":{},".generated_form":{"marginBottom":"5px"},".controls":{"marginTop":"15px","marginBottom":"10px"}}
w.prototype.__jx__fqname_chain=[(w.prototype.__jx__fqname_chain||"")," ","meshim_widget_components_chatWindow_preChatOfflineForm_PostSubmit"].join('')
w.prototype.__jx__fqname="meshim_widget_components_chatWindow_preChatOfflineForm_PostSubmit"
w.prototype.__jx__constructor=w
return w})()
b.__$$__meshim_widget_components_chatWindow_preChatOfflineForm_Form=(function(){function w(x,y,z,A,B){if(!(this instanceof w))return new w(x,y,z,A,B)
y=y||v.generateID()
var C=[b.__$$__meshim_widget_widgets_ChatWindowContent,null,null,[[b.__$$__jx_ui_Form,"form_container",null,[[b.__$$__meshim_widget_widgets_ScrollableFrame,null,null,[[b.__$$__jx_ui_Widget,"pre_chat_message",null,[],{"id":"pre_chat_message","addClass":"greetings_message"}],[b.__$$__jx_ui_Widget,"offline_message",null,[[b.__$$__jx_ui_Widget,"offline_message_msg",null,[],{"id":"offline_message_msg"}],[b.__$$__jx_ui_Widget,"offline_operating_hours_link",null,[u(90)],{"id":"offline_operating_hours_link","addClass":"operating_hours_link"}]],{"id":"offline_message","addClass":"greetings_message"}],[b.__$$__jx_ui_Widget,"offline_message_disabled",null,[],{"id":"offline_message_disabled","addClass":"greetings_message"}],[b.__$$__meshim_widget_widgets_form_Profile,"profile",null,[],{"id":"profile"}],[b.__$$__meshim_widget_widgets_Form,"form",null,[],{"id":"form"}]],{}],[b.__$$__meshim_widget_widgets_Bottom,null,null,[[b.__$$__meshim_widget_widgets_Submit,"submit",null,[],{"id":"submit","addClass":"submit"}],[b.__$$__meshim_widget_widgets_Button,"back",null,[u(91)],{"id":"back","addClass":"back secondary"}]],{}]],{"id":"form_container","addClass":"form_container","noValidate":"true"}]],{"absPaddingBottom":"bottomHeight"}],D=C[0].call(this,x,y,null,v.mangleIDs(y,C[3]),C[4]),E=D||this
v.set(y,E)
var F=v.get(y+'__form_container'),G=v.get(y+'__pre_chat_message'),H=v.get(y+'__offline_message'),I=v.get(y+'__offline_message_msg'),J=v.get(y+'__offline_operating_hours_link'),K=v.get(y+'__offline_message_disabled'),L=v.get(y+'__profile'),M=v.get(y+'__form'),N=v.get(y+'__submit'),O=v.get(y+'__back')
if(!w.__jx__jcss_generated){t.generate(x,w.prototype.__jx__fqname,w.__jx__jcss,null,w)
w.__jx__jcss_generated=!0}
var P=(function(){var R=b.__$$__meshim_widget_controllers_DataController,S=b.__$$__meshim_widget_controllers_GoogleAnalytics,T=b.__$$__meshim_widget_controllers_UIController,U=b.__$$__meshim_widget_utils_Strings,V={OFFLINE_DISABLED:'OFFLINE_DISABLED',OFFLINE:'OFFLINE',ONLINE:'ONLINE',ONLINE_OFFLINE:'ONLINE_OFFLINE',ONLINE_CHATTING:'ONLINE_CHATTING'},W={DEPARTMENT:'department',MESSAGE:'message'},X=R.root.$('livechat'),Y=X.$('settings').$('forms').$('pre_chat_form'),Z=X.$('ui').$('chat_window').$('pre_chat_form'),$$=Y.$('form'),$_=Y.$('form_submitted'),$a=Z.$('form_populate$bool'),$b=Z.$('submitted$bool'),$c=Y.$('profile_required$bool'),$d=Y.$('message$string'),$e,$f=$$.$('2').$('required$bool'),$g=$$.$('3').$('required$bool'),$h=$_.$('2').$('value$string'),$i=$_.$('3').$('value$string'),$j=$$.$('4').$('required$bool'),$k,$l=X.$('settings').$('forms').$('offline_form'),$m=X.$('ui').$('chat_window').$('offline_form'),$n=$l.$('form'),$o=$l.$('form_submitted'),$p=$m.$('form_populate$bool'),$q=$n.$('2'),$r=$l.$('message$string'),$s=$l.$('message_disabled$string'),$t=$n.$('3').$('required$bool'),$u,$v=X.$('ui').$('chat_window').$('pre_chat_offline_form'),$w=$v.$('stack_index$int'),$x=X.$('groups'),$y=X.$('account').$('status$string'),$z=X.$('channel').$('chatting$bool'),$A=X.$('ui').$('chat_window').$('main_stack_name$string'),$B=X.$('settings').$('chat_button').$('hide_when_offline$bool'),$C=X.$('settings').$('operating_hours').$('enabled$bool'),$D,$E=X.$('settings').$('operating_hours').$('display_notice$bool'),$F,$G=X.$('settings').$('login').$('restrict_profile$bool'),$H,$I=X.$('ui').$('popout$bool').getValue(),$J,$K,$L,$M
function $N(){M.setDataNode($$)
E.autobind($d,'value',function($T){$e=$T
G.setText(U.get($d))
$T||G.setDisplay('none')})
E.autobind($r,'value',function(){I.setText(U.get($r))})
E.autobind($s,'value',function(){K.setText(U.get($s))})
E.autobind($a,'value',function($T){m($T)&&M.populateSelf()})
E.autobind($p,'value',function($T){m($T)&&M.populateSelf()})
E.autobind($z,'value',function($T){if($T==$K)return
$K=$T
$P()})
E.autobind($y,'value',function($T){if($T==$J)return
$J=$T
$P()})
E.autobind($B,'value',function($T){if($T==$M)return
$M=$T
$P()})
E.autobind($j,'value',function($T){$k=$T
$P()})
E.autobind($t,'value',function($T){$u=$T
$P()})
E.autobind($C,'value',function($T){$D=$T
$P()})
E.autobind($E,'value',function($T){$F=$T
$P()})
E.autobind($G,'value',function($T){$H=$T
$P()})
E.autobind($x,'value',$O)
M.on('change',$O)
function $O(){var $T,$U=M.getField(W.DEPARTMENT)
if(!$U)return
var $V=$U.input.getValue()
if(!$V){$T=!0}
else{var $W=$x.$($V).$('status$string').getValue()
$T=$W!='offline'}
if($T==$L)return
$L=$T
$P()}
function $P(){var $T=$R(),$U=M.getField(W.DEPARTMENT),$V=M.getField(W.MESSAGE)
if($T==V.OFFLINE_DISABLED){K.setDisplay('')
L.setDisplay('none')
M.setDisplay('none')}
else{K.setDisplay('none')
L.setDisplay('')
M.setDisplay('')}
switch($T){case V.OFFLINE_DISABLED:G.setDisplay('none')
H.setDisplay('none')
N.setValue(U.pre_chat_offline_form.button_disabled)
$S(!1)
break
case V.OFFLINE:G.setDisplay('none')
H.setDisplay('')
L.setRequired(!0)
L.setPhoneRequired($u)
if($U){$U.setRequired(!1)
$U.input&&$U.input.setHide(!0)}
$V&&$V.setRequired(!0)
N.setValue(U.pre_chat_offline_form.button_message)
$S(!1)
break
case V.ONLINE:G.setDisplay($e?'':'none')
H.setDisplay('none')
L.setRequired($c.getValue())
L.setPhoneRequired($k)
if($U){$U.setRequired($f.getValue())
$U.input&&$U.input.setHide(!1)}
$V&&$V.setRequired($g.getValue())
N.setValue(U.pre_chat_offline_form.button_chat)
$S(!1)
break
case V.ONLINE_OFFLINE:G.setDisplay($e?'':'none')
H.setDisplay('none')
L.setRequired(!0)
L.setPhoneRequired($u)
if($U){$U.setRequired($f.getValue())
$U.input&&$U.input.setHide(!1)}
$V&&$V.setRequired(!0)
N.setValue(U.pre_chat_offline_form.button_message)
$S(!1)
break
case V.ONLINE_CHATTING:G.setDisplay('none')
H.setDisplay('')
L.setRequired(!0)
L.setPhoneRequired($u)
if($U){$U.setRequired(!1)
$U.input&&$U.input.setHide(!0)}
$V&&$V.setRequired(!0)
N.setValue(U.pre_chat_offline_form.button_message)
$S(!0)
break}
if(($T==V.OFFLINE||$T==V.ONLINE_CHATTING)&&$D&&$F){J.setDisplay('')}
else{J.setDisplay('none')}
if($H){L.setDisplay('none')
L.setRequired(!1)}}
F.on('submit',function($T){$T.preventDefault()
var $U=$R()
if($U!=V.OFFLINE_DISABLED&&!E.validate(!0))return
var $V=M.getField(W.DEPARTMENT),$W
$V.input&&($W=$V.input.getValue()||'')
L.submit()
switch($U){case V.OFFLINE_DISABLED:if($I){window.close()}
else{T.userHideWindow()}
break
case V.OFFLINE:S.trackEvent('Offline Message Sent')
M.submit($o,L)
$Q()
$w.update(1)
break
case V.ONLINE:S.trackEvent('Chat Request Form Submitted',$W)
M.submit($_,L)
R.livechat.sendChatMsg({msg:$i.getValue()||'',group:$h.getValue()||''})
$b.update(!0)
$A.update('chat_panel')
break
case V.ONLINE_OFFLINE:S.trackEvent('Offline Message Sent',$W)
M.submit($o,L)
$Q()
$w.update(1)
break
case V.ONLINE_CHATTING:M.submit($o,L)
$A.update('chat_panel')
break}
M.reset()
$O()})
function $Q(){$q.update({'value_user$string':M.getInput('message').getValue()})}
O.on('click',function(){$A.update('chat_panel')})
function $R(){if($J=='banned'){return V.OFFLINE_DISABLED}
else if($J=='offline'){if($M){return V.OFFLINE_DISABLED}
else{return V.OFFLINE}}
else{if($K){return V.ONLINE_CHATTING}
else{if($L){return V.ONLINE}
else{return V.ONLINE_OFFLINE}}}}
function $S($T){if($T){N.removeClass('wide')
O.setDisplay('')}
else{N.addClass('wide')
O.setDisplay('none')}}
J.on('click',function($T){if(!$T||!$T.target||!$T.target.jx_wrapper||!$T.target.jx_wrapper.hasClass('operating_hours_link')){return}
$w.update(2)})}
$N()})()
for(var Q in P)if(P.hasOwnProperty(Q))E[Q]=P[Q]
if(E.fire)E.fire('init')
E.setStyle&&E.setStyle(z)
E.setAttributes&&E.setAttributes(B)
if(typeof E.addChildren=='function')E.addChildren(A)
else v.addChildren(E,A)
if(E!==this){E.__jx__constructor=b.__$$__meshim_widget_components_chatWindow_preChatOfflineForm_Form
E.__jx__native=!1}
return E}
w.prototype=e(b.__$$__meshim_widget_widgets_ChatWindowContent.prototype)
w.prototype.__jx__native=!1
w.prototype.__jx__super=b.__$$__meshim_widget_widgets_ChatWindowContent
w.__jx__jcss={".greetings_message, .generated_form":{"marginBottom":"$$marginL"},".form_container":{"width, height":"100%"},".operating_hours_link":{"textDecoration":"underline","cursor":"pointer"}}
w.prototype.__jx__fqname_chain=[(w.prototype.__jx__fqname_chain||"")," ","meshim_widget_components_chatWindow_preChatOfflineForm_Form"].join('')
w.prototype.__jx__fqname="meshim_widget_components_chatWindow_preChatOfflineForm_Form"
w.prototype.__jx__constructor=w
return w})()
b.__$$__meshim_widget_widgets_ChatLogRenderer=(function(){function w(x,y,z,A,B){if(!(this instanceof w))return new w(x,y,z,A,B)
y=y||v.generateID()
var C=[b.__$$__jx_ui_html_div,null,null,[],{"class":"chat_log_renderer"}],D=C[0].call(this,x,y,null,v.mangleIDs(y,C[3]),C[4]),E=D||this
v.set(y,E)
if(!w.__jx__jcss_generated){t.generate(x,w.prototype.__jx__fqname,w.__jx__jcss,null,w)
w.__jx__jcss_generated=!0}
var F=(function(){var H=b.__$$__meshim_widget_Config,I=b.__$$__meshim_widget_controllers_DataController,J=b.__$$__meshim_widget_controllers_ErrorHandler,K=b.__$$__meshim_widget_widgets_chatLogRenderer_BasicRenderer,L=b.__$$__meshim_widget_widgets_chatLogRenderer_BubbleLogRenderer,M=b.__$$__meshim_widget_widgets_chatLogRenderer_BasicAvatarRenderer,N=b.__$$__meshim_widget_widgets_chatLogRenderer_BubbleAvatarRenderer,O=b.__$$__meshim_widget_widgets_chatLogRenderer_SystemLogRenderer,P=b.__$$__meshim_widget_widgets_chatLogRenderer_CardRenderer,Q,R,S,T,U,V,W=/chat\.(msg|memberjoin|changename)/
R=S=T=''
function X(){E.setDataNode=Z
E.onDestruction(function(){clearTimeout(V)})}
function Y(){return I.root.$$('livechat.settings.theme.message_type$string').getValue()||'bubble_avatar'}
function Z($k){if(Q)E.autounbind(Q,'value',$$)
Q=$k
E.autobind(Q,'value',$$)
E.on('update.neighbour',$b)}
function $$($k){if(!$k)return
if($k.nick$string){S=$k.nick$string
$a(S)}
if($k.type$string)$_($k.type$string)
if($k.failed$bool)$i()
if('unverified$bool' in $k){clearTimeout(V)
if($k.unverified$bool){V=setTimeout($j,H.RESEND_MSG_TIMEOUT)}}}
function $_($k){if(!$k)return
if($k===T)return
if(U){E.empty()
U=null}
T=$k
switch($k){case 'chat.msg':case 'chat.file.update':case 'chat.file.upload':$f()
break
case 'chat.card':$g()
break
default:$h()
break}
if(S)$a(S)}
function $a($k){if(!U)return
var $l=$k.substring(0,$k.indexOf(':')),$m=0,$n=0,$o=$k.length
while($n<$o){$m+=$k.charCodeAt($n)
$n++}
$m=$m%8+1
U.addClass($l)
U.addClass($l+'_'+$m)
$a.assigned=!0}
function $b($k){if(!('prev' in $k)||R==$k.prev)return
R=$k.prev
$c()}
function $c(){if(!Q)return
if(!R){$d()
return}
var $k=Q.parentNode.$(R),$l=$k.getValue('nick$string'),$m=$k.getValue('type$string')
if(!W.test($m)||T!==$m||$l!==S)$d()
else $e()}
function $d(){if(!U)return
U.removeClass('group_children')
U.addClass('group_head')}
function $e(){if(!U)return
U.addClass('group_children')
U.removeClass('group_head')}
function $f(){var $k=Y(),$l
if(U)E.empty()
switch($k){case 'bubble':$l=L
break
case 'basic_avatar':$l=M
break
case 'bubble_avatar':$l=N
break
case 'basic':default:$l=K
break}
U=new $l(E)
U.setDataNode(Q)
U.addClass($k)}
function $g(){U=new P(E)
U.setDataNode(Q)}
function $h(){U=new O(E)
U.setDataNode(Q)
U.setPseudo('system_msg')}
function $i(){J.post('User msg send failed.')}
function $j(){J.post('User msg send timed out.')}
X()})()
for(var G in F)if(F.hasOwnProperty(G))E[G]=F[G]
if(E.fire)E.fire('init')
E.setStyle&&E.setStyle(z)
E.setAttributes&&E.setAttributes(B)
if(typeof E.addChildren=='function')E.addChildren(A)
else v.addChildren(E,A)
if(E!==this){E.__jx__constructor=b.__$$__meshim_widget_widgets_ChatLogRenderer
E.__jx__native=!1}
return E}
w.prototype=e(b.__$$__jx_ui_html_div.prototype)
w.prototype.__jx__native=!1
w.prototype.__jx__super=b.__$$__jx_ui_html_div
w.__jx__jcss={"**self":{"position":"relative","clear":"both","width":"100%"}}
w.prototype.__jx__fqname_chain=[(w.prototype.__jx__fqname_chain||"")," ","meshim_widget_widgets_ChatLogRenderer"].join('')
w.prototype.__jx__fqname="meshim_widget_widgets_ChatLogRenderer"
w.prototype.__jx__constructor=w
return w})()
b.__$$__meshim_widget_components_chatWindow_CardForm=(function(){function w(x,y,z,A,B){if(!(this instanceof w))return new w(x,y,z,A,B)
y=y||v.generateID()
var C=[b.__$$__meshim_widget_widgets_ChatWindowPanel,null,null,[[b.__$$__jx_ui_Form,"form",null,[[b.__$$__meshim_widget_widgets_ChatWindowContent,null,null,[[b.__$$__meshim_widget_widgets_ScrollableFrame,null,null,[[b.__$$__meshim_widget_widgets_Body,"message",null,[],{"id":"message"}],[b.__$$__meshim_widget_widgets_form_Profile,"profile",null,[],{"id":"profile"}],[b.__$$__meshim_widget_widgets_Form,"form_generator",null,[],{"id":"form_generator"}]],{}],[b.__$$__meshim_widget_widgets_Bottom,null,null,[[b.__$$__meshim_widget_widgets_Submit,null,null,[],{"value":u(28)}],[b.__$$__meshim_widget_widgets_Button,"cancel",null,[u(29)],{"id":"cancel","addClass":"secondary"}]],{}]],{"absPaddingBottom":"bottomHeight"}]],{"id":"form","noValidate":"true"}]],{"titleBar":"hidePopout","actionBar":""}],D=C[0].call(this,x,y,null,v.mangleIDs(y,C[3]),C[4]),E=D||this
v.set(y,E)
var F=v.get(y+'__form'),G=v.get(y+'__message'),H=v.get(y+'__profile'),I=v.get(y+'__form_generator'),J=v.get(y+'__cancel')
if(!w.__jx__jcss_generated){t.generate(x,w.prototype.__jx__fqname,w.__jx__jcss,null,w)
w.__jx__jcss_generated=!0}
var K=(function(){var M=b.__$$__meshim_widget_controllers_DataController,N=M.root.$('livechat').$('settings').$('forms').$('card_form'),O=N.$('message$string'),P=N.$('form'),Q=N.$('form_submitted'),R=N.$('profile_required$bool'),S,T=M.root.$('livechat').$('ui').$('chat_window').$('main_stack_name$string')
function U(){I.setDataNode(P)
H.setDataNode(P)
E.autobind(O,'value',function(V){G.setText(V||'')})
E.autobind(R,'value',function(V){S=V
H.setDisplay(V?'':'none')
H.setDisabled(V)})
F.on('submit',function(V){V.preventDefault()
if(!F.validate(!0))return
H.submit()
I.submit(Q,H)
T.update('chat_panel')})
J.on('click',function(){T.update('chat_panel')})}
U()})()
for(var L in K)if(K.hasOwnProperty(L))E[L]=K[L]
if(E.fire)E.fire('init')
E.setStyle&&E.setStyle(z)
E.setAttributes&&E.setAttributes(B)
if(typeof E.addChildren=='function')E.addChildren(A)
else v.addChildren(E,A)
if(E!==this){E.__jx__constructor=b.__$$__meshim_widget_components_chatWindow_CardForm
E.__jx__native=!1}
return E}
w.prototype=e(b.__$$__meshim_widget_widgets_ChatWindowPanel.prototype)
w.prototype.__jx__native=!1
w.prototype.__jx__super=b.__$$__meshim_widget_widgets_ChatWindowPanel
w.__jx__jcss={}
w.prototype.__jx__fqname_chain=[(w.prototype.__jx__fqname_chain||"")," ","meshim_widget_components_chatWindow_CardForm"].join('')
w.prototype.__jx__fqname="meshim_widget_components_chatWindow_CardForm"
w.prototype.__jx__constructor=w
return w})()
b.__$$__meshim_widget_components_chatWindow_AgentList=(function(){function w(x,y,z,A,B){if(!(this instanceof w))return new w(x,y,z,A,B)
y=y||v.generateID()
var C=[b.__$$__meshim_widget_widgets_ChatWindowPanel,null,null,[[b.__$$__meshim_widget_widgets_ChatWindowContent,null,null,[[b.__$$__meshim_widget_widgets_ScrollableFrame,"scrollable_frame",null,[[b.__$$__jx_controls_List,"list",null,[],{"id":"list","addClass":"list"}],[b.__$$__meshim_widget_widgets_motif_Chat,"chat_motif",null,[],{"id":"chat_motif","addClass":"chat_motif"}]],{"id":"scrollable_frame"}],[b.__$$__meshim_widget_widgets_Bottom,null,null,[[b.__$$__meshim_widget_widgets_Button,"back",null,[u(30)],{"id":"back","addClass":"back wide"}]],{"addClass":"padding_bottom"}]],{"absPaddingBottom":"bottomHeightBottomPadding"}]],{"titleBar":"hidePopout","actionBar":"none"}],D=C[0].call(this,x,y,null,v.mangleIDs(y,C[3]),C[4]),E=D||this
v.set(y,E)
var F=v.get(y+'__scrollable_frame'),G=v.get(y+'__list'),H=v.get(y+'__chat_motif'),I=v.get(y+'__back')
if(!w.__jx__jcss_generated){t.generate(x,w.prototype.__jx__fqname,w.__jx__jcss,null,w)
w.__jx__jcss_generated=!0}
var J=(function(){var L=b.__$$__meshim_widget_controllers_DataController,M=b.__$$__meshim_widget_components_chatWindow_agentList_AgentProfileCard,N=L.root.$('livechat').$('agents'),O=L.root.$('livechat').$('ui').$('chat_window').$('main_stack_name$string')
function P(){G.setRenderer(M)
G.setDataNode(N)
E.autobind(N,'keys',function(){l(function(){if(!E.dom)return
var Q=G.offsetHeight,R=F.getHeight(),S=H.getHeight()
if((Q<=R)&&((R-Q)>S))E.removeClass('many_agents')
else E.addClass('many_agents')})})
I.on('click',function(){O.update('chat_panel')})}
P()})()
for(var K in J)if(J.hasOwnProperty(K))E[K]=J[K]
if(E.fire)E.fire('init')
E.setStyle&&E.setStyle(z)
E.setAttributes&&E.setAttributes(B)
if(typeof E.addChildren=='function')E.addChildren(A)
else v.addChildren(E,A)
if(E!==this){E.__jx__constructor=b.__$$__meshim_widget_components_chatWindow_AgentList
E.__jx__native=!1}
return E}
w.prototype=e(b.__$$__meshim_widget_widgets_ChatWindowPanel.prototype)
w.prototype.__jx__native=!1
w.prototype.__jx__super=b.__$$__meshim_widget_widgets_ChatWindowPanel
w.__jx__jcss={"**self":{},".list":{"position":"relative","width, height":"100%"},".chat_motif":{"position":"absolute","bottom, left":0,"transition":"opacity 0.5s","opacity":1},"&.many_agents .chat_motif":{"opacity":0}}
w.prototype.__jx__fqname_chain=[(w.prototype.__jx__fqname_chain||"")," ","meshim_widget_components_chatWindow_AgentList"].join('')
w.prototype.__jx__fqname="meshim_widget_components_chatWindow_AgentList"
w.prototype.__jx__constructor=w
return w})()
b.__$$__meshim_widget_components_chatWindow_MenuStack=(function(){function w(x,y,z,A,B){if(!(this instanceof w))return new w(x,y,z,A,B)
y=y||v.generateID()
var C=[b.__$$__meshim_widget_widgets_ViewStack,null,null,[[b.__$$__meshim_widget_components_chatWindow_SettingsMenu,null,null,[],{"name":"settings_menu"}],[b.__$$__meshim_widget_components_chatWindow_ProfileMenu,null,null,[],{"name":"profile_menu"}],[b.__$$__meshim_widget_components_chatWindow_EndChatMenu,null,null,[],{"name":"end_chat_menu"}],[b.__$$__meshim_widget_components_chatWindow_EmailTranscriptMenu,null,null,[],{"name":"email_transcript_menu"}],[b.__$$__meshim_widget_components_chatWindow_EmailTranscriptNotification,null,null,[],{"name":"email_transcript_notification"}]],{"onChildHide":"-1"}],D=C[0].call(this,x,y,null,v.mangleIDs(y,C[3]),C[4]),E=D||this
v.set(y,E)
if(!w.__jx__jcss_generated){t.generate(x,w.prototype.__jx__fqname,w.__jx__jcss,null,w)
w.__jx__jcss_generated=!0}
var F=(function(){var H=b.__$$__meshim_widget_utils_BindClass
H.popout(E)})()
for(var G in F)if(F.hasOwnProperty(G))E[G]=F[G]
if(E.fire)E.fire('init')
E.setStyle&&E.setStyle(z)
E.setAttributes&&E.setAttributes(B)
if(typeof E.addChildren=='function')E.addChildren(A)
else v.addChildren(E,A)
if(E!==this){E.__jx__constructor=b.__$$__meshim_widget_components_chatWindow_MenuStack
E.__jx__native=!1}
return E}
w.prototype=e(b.__$$__meshim_widget_widgets_ViewStack.prototype)
w.prototype.__jx__native=!1
w.prototype.__jx__super=b.__$$__meshim_widget_widgets_ViewStack
w.__jx__jcss={"**self":{"overflow":"visible"},"&.popout":{"position":"absolute"},"&.mobile":{}}
w.prototype.__jx__fqname_chain=[(w.prototype.__jx__fqname_chain||"")," ","meshim_widget_components_chatWindow_MenuStack"].join('')
w.prototype.__jx__fqname="meshim_widget_components_chatWindow_MenuStack"
w.prototype.__jx__constructor=w
return w})()
b.__$$__meshim_widget_components_chatWindow_chatPanel_ChatLog=(function(){function w(x,y,z,A,B){if(!(this instanceof w))return new w(x,y,z,A,B)
y=y||v.generateID()
var C=[b.__$$__jx_ui_html_div,null,null,[[b.__$$__jx_controls_List,"list",null,[],{"id":"list"}],[b.__$$__meshim_widget_widgets_chatLogRenderer_TypingRenderer,null,null,[],{"addClass":"system_msg group_head"}]],{}],D=C[0].call(this,x,y,null,v.mangleIDs(y,C[3]),C[4]),E=D||this
v.set(y,E)
var F=v.get(y+'__list')
if(!w.__jx__jcss_generated){t.generate(x,w.prototype.__jx__fqname,w.__jx__jcss,null,w)
w.__jx__jcss_generated=!0}
var G=(function(){var I=b.__$$__meshim_widget_widgets_ChatLogRenderer,J=b.__$$__meshim_widget_controllers_DataController,K=J.root.$('livechat'),L=K.$('channel').$('log'),M=K.$('settings').$('theme').$('chat_window').$('size$string'),N,O=J.root.$$('livechat.settings.theme.message_type$string'),P
function Q(){E.setDataNode=R
E.autobind(M,'value',function(T){if(N)E.removeClass('chat_log_'+N)
N=T
if(N)E.addClass('chat_log_'+N)})
F.setRenderer(I)
R(L)
E.autobind(O,'value',S)}
function R(T){F.setDataNode(T)}
function S(T){if(!T||P==T)return
P=T
F.setDataNode(L)}
Q()})()
for(var H in G)if(G.hasOwnProperty(H))E[H]=G[H]
if(E.fire)E.fire('init')
E.setStyle&&E.setStyle(z)
E.setAttributes&&E.setAttributes(B)
if(typeof E.addChildren=='function')E.addChildren(A)
else v.addChildren(E,A)
if(E!==this){E.__jx__constructor=b.__$$__meshim_widget_components_chatWindow_chatPanel_ChatLog
E.__jx__native=!1}
return E}
w.prototype=e(b.__$$__jx_ui_html_div.prototype)
w.prototype.__jx__native=!1
w.prototype.__jx__super=b.__$$__jx_ui_html_div
w.__jx__jcss={"**self":{"position":"relative","margin":"$$margin"},".visitor .chat_bubble":{"background":"$$chatLogVisitorBubbleBg","borderWidth":"$$chatLogVisitorBubbleBorderWidth","borderStyle":"$$chatLogVisitorBubbleBorderStyle","borderColor":"$$chatLogVisitorBubbleBorderColor",".arrow_border":{"borderColor":"$$chatLogVisitorBubbleBorderColor"},".arrow_background":{"borderColor":"$$chatLogVisitorBubbleBg"}},".agent .chat_bubble":{"background":"$$chatLogAgentBubbleBg","borderWidth":"$$chatLogAgentBubbleBorderWidth","borderStyle":"$$chatLogAgentBubbleBorderStyle","borderColor":"$$chatLogAgentBubbleBorderColor",".arrow_border":{"borderColor":"$$chatLogAgentBubbleBorderColor"},".arrow_background":{"borderColor":"$$chatLogAgentBubbleBg"}},".log_avatar":{"borderWidth":"$$chatLogAvatarBorderWidth","borderStyle":"$$chatLogAvatarBorderStyle","borderColor":"$$chatLogAvatarBorderColor","borderRadius":"$$chatLogAvatarRadius","boxShadow":"$$chatLogAvatarShadow"},".group_head, .card, .group_children.bubble_avatar, .group_children.bubble":{"marginTop":"$$margin"},"a":{"color":"inherit"},".card":{"marginLeft, marginRight":"auto"},"&.chat_log_small":{".card":{}},"&.chat_log_medium":{".card":{"maxWidth":"220px"}},"&.chat_log_large":{".card":{"maxWidth":"260px"}}}
w.prototype.__jx__fqname_chain=[(w.prototype.__jx__fqname_chain||"")," ","meshim_widget_components_chatWindow_chatPanel_ChatLog"].join('')
w.prototype.__jx__fqname="meshim_widget_components_chatWindow_chatPanel_ChatLog"
w.prototype.__jx__constructor=w
return w})()
b.__$$__meshim_widget_components_chatWindow_PreChatOfflineForm=(function(){function w(x,y,z,A,B){if(!(this instanceof w))return new w(x,y,z,A,B)
y=y||v.generateID()
var C=[b.__$$__meshim_widget_widgets_ChatWindowPanel,null,null,[[b.__$$__meshim_widget_widgets_ViewStack,"vs",null,[[b.__$$__meshim_widget_components_chatWindow_preChatOfflineForm_Form,null,null,[],{}],[b.__$$__meshim_widget_components_chatWindow_preChatOfflineForm_PostSubmit,null,null,[],{}],[b.__$$__meshim_widget_components_chatWindow_preChatOfflineForm_OperatingHours,null,null,[],{}]],{"id":"vs"}]],{"titleBar":"hidePopout","actionBar":""}],D=C[0].call(this,x,y,null,v.mangleIDs(y,C[3]),C[4]),E=D||this
v.set(y,E)
var F=v.get(y+'__vs')
if(!w.__jx__jcss_generated){t.generate(x,w.prototype.__jx__fqname,w.__jx__jcss,null,w)
w.__jx__jcss_generated=!0}
var G=(function(){var I=b.__$$__meshim_widget_controllers_DataController,J=b.__$$__meshim_widget_utils_BindClass,K=I.root.$('livechat').$('ui').$('chat_window').$('pre_chat_offline_form').$('stack_index$int')
function L(){J.mobile(E)
E.autobind(K,'value',function(M){F.setIndex(M||0)})}
L()})()
for(var H in G)if(G.hasOwnProperty(H))E[H]=G[H]
if(E.fire)E.fire('init')
E.setStyle&&E.setStyle(z)
E.setAttributes&&E.setAttributes(B)
if(typeof E.addChildren=='function')E.addChildren(A)
else v.addChildren(E,A)
if(E!==this){E.__jx__constructor=b.__$$__meshim_widget_components_chatWindow_PreChatOfflineForm
E.__jx__native=!1}
return E}
w.prototype=e(b.__$$__meshim_widget_widgets_ChatWindowPanel.prototype)
w.prototype.__jx__native=!1
w.prototype.__jx__super=b.__$$__meshim_widget_widgets_ChatWindowPanel
w.__jx__jcss={}
w.prototype.__jx__fqname_chain=[(w.prototype.__jx__fqname_chain||"")," ","meshim_widget_components_chatWindow_PreChatOfflineForm"].join('')
w.prototype.__jx__fqname="meshim_widget_components_chatWindow_PreChatOfflineForm"
w.prototype.__jx__constructor=w
return w})()
b.__$$__meshim_widget_components_chatWindow_ChatPanel=(function(){function w(x,y,z,A,B){if(!(this instanceof w))return new w(x,y,z,A,B)
y=y||v.generateID()
var C=[b.__$$__meshim_widget_widgets_ChatWindowPanel,null,null,[[b.__$$__meshim_widget_widgets_toast_Disconnected,null,null,[],{"addClass":"disconnected_toast"}],[b.__$$__meshim_widget_widgets_toast_File,null,null,[],{}],[b.__$$__meshim_widget_widgets_ChatWindowContent,"chat_panel_container",null,[[b.__$$__jx_ui_Widget,"served_by_container",null,[[b.__$$__meshim_widget_components_chatWindow_chatPanel_ChatPanelHeader,null,null,[],{}]],{"id":"served_by_container","class":"served_by_container"}],[b.__$$__meshim_widget_widgets_ScrollableFrame,"scrollable_frame",null,[[b.__$$__meshim_widget_components_chatWindow_chatPanel_ChatLog,"chat_log",null,[],{"id":"chat_log","addClass":"chat_log"}]],{"id":"scrollable_frame","addClass":"scrollable_frame"}],[b.__$$__meshim_widget_components_chatWindow_chatPanel_ChatTextArea,"chat_text_area",null,[],{"id":"chat_text_area","addClass":"chat_text_area"}],[b.__$$__meshim_widget_widgets_zopimBranding_ZopimBrandingLink,null,null,[],{"addClass":"branding_mobile chat_panel_branding"}],[b.__$$__meshim_widget_widgets_Button,"scroll_top_btn",null,[],{"id":"scroll_top_btn","class":"scroll_top_btn"}]],{"id":"chat_panel_container","class":"chat_panel_container","absPaddingTop":"chatPanelProfileCardContainerHeight"}]],{"titleBar":"","actionBar":"default"}],D=C[0].call(this,x,y,null,v.mangleIDs(y,C[3]),C[4]),E=D||this
v.set(y,E)
var F=v.get(y+'__chat_panel_container'),G=v.get(y+'__served_by_container'),H=v.get(y+'__scrollable_frame'),I=v.get(y+'__chat_log'),J=v.get(y+'__chat_text_area'),K=v.get(y+'__scroll_top_btn')
if(!w.__jx__jcss_generated){t.generate(x,w.prototype.__jx__fqname,w.__jx__jcss,null,w)
w.__jx__jcss_generated=!0}
var L=(function(){var N=b.__$$__meshim_widget_controllers_DataController,O=b.__$$__meshim_widget_utils_Mobile,P=b.__$$__meshim_widget_utils_Utils,Q=b.__$$__meshim_widget_utils_BindClass,R=b.__$$__meshim_widget_widgets_IconFont,S=N.root.$('livechat'),T=S.$('channel').$('log'),U=S.$('ui').$('chat_window'),V=U.$('chat_panel'),W=U.$('agent_typing$bool'),X=U.$('file_upload_scroll$bool'),Y=V.$('textarea'),Z={},$$=0,$_=0,$a=S.$('ui').$('theme_loaded$bool'),$b=S.$('settings').$('theme').$('chat_window').$('size$string'),$c=S.$('settings').$('theme').$('chat_window').$('hide_profile_card$bool'),$d=U.$('display$bool'),$e,$f=U.$('main_stack_name$string'),$g,$h=S.$('ui').$('popout$bool'),$i=$h.getValue(),$j=S.$('ui').$('mobile$bool'),$k=$j.getValue(),$l=!0,$m,$n,$o,$p,$q=P.isStyleSupported('animation'),$r=200
function $s(){Q.mobile(E)
Q.rtl(E)
E.autobind(Y,'value',function($X){if(!$X)return
Z=$X
$F()})
P.onAnimationEnd(E,E,function(){if($n){$v(!0)
$m=null
if(H.getScrollTop()&&$u()){$n=!1}
else{setTimeout(function(){$v(!0)
$n=!1},$r)}}
else if($m){H.setScrollTop($m)
if(H.getScrollTop()==$m){$m=null}
else{setTimeout(function(){H.setScrollTop($m)
$m=null},$r)}}
if(!$$||!$_)$H()})
P.onTransitionEnd(E,F,function($X){if($X.target.jx_wrapper!=F)return
$l&&$v(!0)})
E.autobind($b,'value',$H)
E.autobind($a,'value',$H)
function $H(){$G(!0)
l($I,E,'once')}
function $I(){if(!E.dom)return
J.updateStyles()
$E()
H.updateScrollStyles()}
E.autobind($d,'value',function($X){$e=$X
$J()
$L()
$K()})
E.autobind($f,'value',function($X){$g=$X
$J()
$L()
$K()})
if($i&&!$k)q.window.on('focus',$K)
function $J(){if($e&&$g==E.getName()){$H()}}
function $K(){if($k)return
if($e&&$g==E.getName()){J.focus()}}
function $L(){if($e&&$g==E.getName()){if($n){$v(!0)
if(H.getScrollTop()&&$u()){$n=!1}
else if(!$q||P.isIE){setTimeout(function(){$v(!0)
$n=!1},$r)}
$m=null}
else if($m){H.setScrollTop($m)
if(H.getScrollTop()==$m){$m=null}
else if(!$q||P.isIE){setTimeout(function(){H.setScrollTop($m)
$m=null},$r)}}}
else{$m=H.getScrollTop()}}
E.autobind(T,'value',function(){$l=$u()})
E.autobind(T,'keys',function($X){if($X&&$X.length){if($e&&$g==E.getName()){l($v)}
else{$n=!0}}})
E.autobind(X,'value',function($X){if($X&&$e&&$g==E.getName()){l($v)}
else{$n=!0}})
E.autobind(W,'value',function($X){if(!$X)return
if($l){l($v)}})
function $M(){l($v)
E.un('show',$M)
$E()}
function $N(){window.setTimeout($v,300)
P.unTransitionEnd(E,E,$N)
$E()}
E.on('show',$M)
P.onTransitionEnd(E,E,$N)
E.autobind($c,'value',function($X){$O($X)})
function $O($X){G.setDisplay($X?'none':'block')
if($X||$k){F.setAbsPaddingTop()}
else{F.setAbsPaddingTop('chatPanelProfileCardContainerHeight')}}
var $P,$Q
if($k){F.setAbsPaddingTop()
H.defaultPlacement.insertBefore(G,I)
$P=O.isOperaAndroidMobile
new R(K,null,null,null,{className:'scroll_top_icon',icon:'arrow_up'})
K.on('click',function(){K.setDisplay('none')
window.scrollTo(0,0)})
q.window.on('resize',function(){$T()
$U()
$W()})
q.window.on('orientationchange',function(){$T()
$U()
$W()})
q.window.on('scroll',function(){$U()
$t()
$W()})
E.autobind(T,'keys',function(){$T()})
E.on('show',function(){$T()
$t()})
J.on('click',function(){window.setTimeout(function(){$v()},200)})
if(O.isChromeIOSMobile)E.style.paddingBottom='42px'}
var $R,$S
function $T(){l(function(){$Q=E.titleBar.getHeight()+G.getHeight()+J.getHeight()
$R=I.getScrollHeight()
$S=window.document.documentElement.clientHeight-$Q
if($R<$S){E.style.height='100%'
if($R>0){I.setStyle('marginTop:'+($S-31-$R)+'px')}
else{I.setStyle('marginTop:'+($S-$R)+'px')}}
else{E.style.height='auto'
I.setStyle('marginTop:10px')}})}
function $U(){J.setStyle('width:'+(E.getWidth()-2)+'px')}
var $V
function $W(){if($V)window.clearTimeout($V)
$V=window.setTimeout(function(){if(window.innerHeight>=120&&window.scrollY>E.titleBar.getHeight())K.setDisplay('block')
else K.setDisplay('none')},100)}}
function $t(){if($p)window.clearTimeout($p)
$p=window.setTimeout(function(){if($u()){J.setStyle('position:absolute; left: 0px;')}
else{J.setStyle('position:fixed; left:'+Math.round((window.innerWidth-E.getWidth())/2+1)+'px;')}},50)}
function $u(){if($k){return window.scrollY+window.innerHeight>=E.getScrollHeight()}
else{return H.getScrollTop()+H.getHeight()>=H.getScrollHeight()}}
function $v($H){if(!E.dom)return
if($k){window.scrollTo(0,E.getScrollHeight())
window.setTimeout(function(){$t()},100)}
else{if($H){H.setScrollTop(H.getScrollHeight())}
else{$C()}}}
var $w,$x,$y,$z=200,$A=16,$B=200
function $C(){if($w)return
if($u())return
$x=+new Date()
$y=H.getScrollTop()
if((H.getScrollHeight()-H.getHeight()-$y)<=$B){H.setScrollTop(H.getScrollHeight())
return}
$w=window.setInterval($D,$A)}
function $D(){if($u()){window.clearInterval($w)
$w=null
return}
var $H=+new Date()
if($H>=($x+$z)){H.setScrollTop(H.getScrollHeight())
window.clearInterval($w)
$w=null
return}
H.setScrollTop($y+((($H-$x)/$z)*(H.getScrollHeight()-$y)))}
function $E(){var $H=J.getComputedStyle()
$$=(parseInt($H.paddingTop,10)||0)+(parseInt($H.paddingBottom,10)||0)+((parseInt($H.borderTopWidth,10)+(p.isWindows?1:0))||0)+((parseInt($H.borderBottomWidth,10)+(p.isWindows?1:0))||0)
$F()}
function $F(){if($o)window.clearTimeout($o)
$G($o)
$o=window.setTimeout($G,500)}
function $G($H){if($o)window.clearTimeout($o)
$o=null
if(!E.dom)return
if('height$int' in Z){$_=Z['height$int']
$H||($l=$u())
F.setStyle('padding-bottom',(Z['height$int']+$$)+'px')
$l&&$v()}}
$s()})()
for(var M in L)if(L.hasOwnProperty(M))E[M]=L[M]
if(E.fire)E.fire('init')
E.setStyle&&E.setStyle(z)
E.setAttributes&&E.setAttributes(B)
if(typeof E.addChildren=='function')E.addChildren(A)
else v.addChildren(E,A)
if(E!==this){E.__jx__constructor=b.__$$__meshim_widget_components_chatWindow_ChatPanel
E.__jx__native=!1}
return E}
w.prototype=e(b.__$$__meshim_widget_widgets_ChatWindowPanel.prototype)
w.prototype.__jx__native=!1
w.prototype.__jx__super=b.__$$__meshim_widget_widgets_ChatWindowPanel
w.__jx__jcss={".chat_panel_container":{"position":"relative","width, height":"100%","zIndex":20,"transition":"padding 0.1s ease-in-out","*overflow":"visible !important",".served_by_container":{"position":"absolute","top, left":0,"width":"100%","padding":"$$paddingXL","height":"$$chatPanelProfileCardContainerHeight","background":"$$chatPanelProfileCardContainerBackground","borderWidth":"$$chatPanelProfileCardContainerBorderWidth","borderStyle":"$$chatPanelProfileCardContainerBorderStyle","borderColor":"$$chatPanelProfileCardContainerBorderColor"},".chat_text_area":{"position":"absolute","bottom":0,"left":0,"width":"100%"},".scrollable_frame":{".scrollable_inner":{"padding":0}}},".scroll_top_btn":{"position":"fixed","top":"20px","left":"50%","width":"60px","height":"40px","marginLeft":"-30px","padding":"0px","zIndex":"1000","display":"none",".scroll_top_icon":{"lineHeight":"44px","textAlign":"center","fontSize":"16px"}},"&.mobile":{".served_by_container":{"position":"relative","padding":"10px","height":"auto"},".chat_panel_container":{".chat_log":{"marginBottom":"30px"}},".branding_mobile":{"position":"absolute","bottom":"45px","right":"10px","margin":"0","zIndex":"30","display":"none","&.chat_panel_branding":{"display":"block"}}},"&.mobile.rtl":{".branding_mobile":{"right":"auto","left":"10px"}}}
w.prototype.__jx__fqname_chain=[(w.prototype.__jx__fqname_chain||"")," ","meshim_widget_components_chatWindow_ChatPanel"].join('')
w.prototype.__jx__fqname="meshim_widget_components_chatWindow_ChatPanel"
w.prototype.__jx__constructor=w
return w})()
b.__$$__meshim_widget_components_chatWindow_MainStack=(function(){function w(x,y,z,A,B){if(!(this instanceof w))return new w(x,y,z,A,B)
y=y||v.generateID()
var C=[b.__$$__meshim_widget_widgets_ViewStack,null,null,[[b.__$$__meshim_widget_components_chatWindow_NewChatForm,null,null,[],{"name":"new_chat_form","addClass":"stack_child stack_child_mini     stack_child_no_menu force_dock"}],[b.__$$__meshim_widget_components_chatWindow_PreChatOfflineForm,null,null,[],{"name":"pre_chat_offline_form","addClass":"stack_child stack_child_standard stack_child_no_menu"}],[b.__$$__meshim_widget_components_chatWindow_ChatPanel,null,null,[],{"name":"chat_panel","addClass":"stack_child stack_child_standard"}],[b.__$$__meshim_widget_components_chatWindow_PostChatForm,null,null,[],{"name":"post_chat_form","addClass":"stack_child stack_child_standard stack_child_no_menu"}],[b.__$$__meshim_widget_components_chatWindow_CookieForm,null,null,[],{"name":"cookie_form","addClass":"stack_child stack_child_standard stack_child_no_menu"}],[b.__$$__meshim_widget_components_chatWindow_CardForm,null,null,[],{"name":"card_form","addClass":"stack_child stack_child_standard stack_child_no_menu"}],[b.__$$__meshim_widget_components_chatWindow_AgentList,null,null,[],{"name":"agent_list","addClass":"stack_child stack_child_standard stack_child_no_menu"}],[b.__$$__meshim_widget_components_chatWindow_AboutPanel,null,null,[],{"name":"about_panel","addClass":"stack_child stack_child_standard stack_child_no_menu"}]],{"addClass":"main_stack","onChildHide":"-1"}],D=C[0].call(this,x,y,null,v.mangleIDs(y,C[3]),C[4]),E=D||this
v.set(y,E)
if(!w.__jx__jcss_generated){t.generate(x,w.prototype.__jx__fqname,w.__jx__jcss,null,w)
w.__jx__jcss_generated=!0}
var F=(function(){var H=b.__$$__meshim_widget_utils_BindClass
H.popout(E)
H.mobile(E)
H.windowPosition(E,'ms_')})()
for(var G in F)if(F.hasOwnProperty(G))E[G]=F[G]
if(E.fire)E.fire('init')
E.setStyle&&E.setStyle(z)
E.setAttributes&&E.setAttributes(B)
if(typeof E.addChildren=='function')E.addChildren(A)
else v.addChildren(E,A)
if(E!==this){E.__jx__constructor=b.__$$__meshim_widget_components_chatWindow_MainStack
E.__jx__native=!1}
return E}
w.prototype=e(b.__$$__meshim_widget_widgets_ViewStack.prototype)
w.prototype.__jx__native=!1
w.prototype.__jx__super=b.__$$__meshim_widget_widgets_ViewStack
w.__jx__jcss={"**self":{"overflow":"hidden","boxShadow":"$$windowShadow"},"&.ms_br, &.ms_bm, &.ms_bl":{"borderTopLeftRadius, borderTopRightRadius":"$$windowRadius"},"&.ms_tr, &.ms_tm, &.ms_tl":{"borderBottomLeftRadius, borderBottomRightRadius":"$$windowRadius"},"&.popout":{"margin":"0 auto","maxWidth":"650px","minWidth":"240px","minHeight":"335px","height":"100%","borderRadius":"0"},"&.mobile":{"minWidth, minHeight":"0","maxWidth":"none"}}
w.prototype.__jx__fqname_chain=[(w.prototype.__jx__fqname_chain||"")," ","meshim_widget_components_chatWindow_MainStack"].join('')
w.prototype.__jx__fqname="meshim_widget_components_chatWindow_MainStack"
w.prototype.__jx__constructor=w
return w})()
b.__$$__meshim_widget_components_ChatWindow=(function(){var w=b.__$$__jx_ui_DraggableFrame,x=b.__$$__jx_ui_FullFrame,y=b.__$$__jx_ui_Widget,z=b.__$$__meshim_widget_controllers_DataController,A=b.__$$__meshim_widget_components_chatWindow_MainStack,B=b.__$$__meshim_widget_components_chatWindow_MenuStack,C=b.__$$__meshim_widget_widgets_fontLoader_ZopimFont,D=b.__$$__meshim_widget_utils_Utils,E=b.__$$__meshim_widget_utils_Mobile,F=b.__$$__meshim_widget_utils_BindClass,G=b.__$$__meshim_widget_controllers_ErrorHandler
function H(I,J,K,L,M){if(!(this instanceof H))return new H(I,J,K,L,M)
if(!H.__jx__jcss_generated){t.generate(this,H.prototype.__jx__fqname,H.__jx__jcss,null,H)
H.__jx__jcss_generated=!0}
var N=z.root.$('livechat'),O=N.$('ui'),P=O.$('chat_window'),Q=O.$('chat_button'),R=N.$$('settings.theme.chat_window.h_offset$int'),S=N.$$('settings.theme.chat_window.v_offset$int'),T=P.$('display$bool'),U=P.$('force_resize$bool'),V=O.$('theme_loaded$bool'),W=P.$('main_stack_name$string'),X=P.$('menu_stack_name$string'),Y=P.$('main_stack_size$string'),Z=O.$('popout$bool'),$$=O.$('mobile$bool'),$_=O.$('tablet$bool'),$a=O.$('mockup$bool'),$b=Z.getValue(),$c=$$.getValue(),$d=$_.getValue(),$e=$a.getValue(),$f=10,$g=0
if(!M)M={}
var $h=this,$i,$j='',$k
if($b){y.call(this,I,J,K,L,M)
F.popout(this)
this.defaultPlacement=new x(this,null,null,null,{className:'meshim_widget_Widget'})
this.on=y.prototype.on
this.fire=y.prototype.fire
if($c){this.defaultPlacement.setPosition('relative')
if(E.isNativeAndroidMobile){q.window.on('resize',function(){$w(55)})
$h.on('show',function(){$w(55)})}
else if(E.isSafariIOSMobile){q.window.on('orientationchange',function(){$w(60)})
$h.on('show',function(){$w(60)})}};($h.content||$h).on('click',function(){Q.write({'unread_count$int':0})})}
else{w.call(this,I,J,K,L,M)
$h.content.addClass('meshim_widget_Widget')
$h.wrapper.addClass($h.__jx__fqname)
$h.ibody.style.overflow='hidden'
G.bind(this.iwin)
$h.setDraggableNode=function($z){w.prototype.setDraggableNode.call(this,$z)
if($z){p.isFF&&($z.style.cursor='-moz-grab')
p.isWebKit&&($z.style.cursor='-webkit-grab')}}
$h.on('startdrag',function(){var $z=$h.getDraggableNode()
if($z){p.isFF&&($z.style.cursor='-moz-grabbing')
p.isWebKit&&($z.style.cursor='-webkit-grabbing')}})
$h.on('enddrag',function(){var $z=$h.getDraggableNode()
if($z){p.isFF&&($z.style.cursor='-moz-grab')
p.isWebKit&&($z.style.cursor='-webkit-grab')}})
this.autobind(R,'value',function($z){$z=parseInt($z)
if(!isNaN($z)&&$z>=0){$f=$z
$r()}})
this.autobind(S,'value',function($z){$z=parseInt($z)
if(!isNaN($z)&&$z>=0){$g=$z
$r()}})
F.windowPosition($h.wrapper,null,function($z){$i=$z
$r()
$u()})
F.windowSize($h.wrapper,null,function($z){$j=$z
$q()})}
if(!$b){this.dom.className='zopim'}
if($e){$h.setPosition('relative')}
if($c){this.addClass('mobile')}
if($d){this.addClass('tablet')}
new C(this.defaultPlacement)
var $l=this.menu_stack=new B(this.defaultPlacement)
this.autobind(X,'value',function($z){$l.setName($z)})
var $m=this.main_stack=new A(this.defaultPlacement)
this.autobind(W,'value',function($z){$m.setName($z)})
var $n
$m.on('beforeIndexChange',function(){$n=$m.currentChild})
$m.on('indexChange',$o)
$o()
function $o(){if($m.currentChild&&$m.currentChild.hasClass('stack_child_no_menu')){X.update('')}
if($m.currentChild){if($m.currentChild.hasClass('stack_child_mini')){Y.update('mini')}
else{Y.update('standard')}}
else{Y.update('')}
$p()}
function $p(){if($m.getName()=='new_chat_form')$m.addClass('new_chat_form_active')
else $m.removeClass('new_chat_form_active')}
$p()
this.autobind(T,'value',function($z){$h.setVisible($z?'block':'none')
$q()})
$h.autobind(U,'value',$q)
$h.autobind(V,'value',$q)
$m.on('indexChange',$q)
$h.on('show',$q)
function $q(){if($b)return
if(!$m)return
var $z=$m.currentChild
if(!$z)return
$h.wrapper.setPosition('absolute')
switch($i){case 'bl':case 'bm':case 'br':$h.wrapper.setTop('').setBottom(0)
break
case 'tl':case 'tm':case 'tr':$h.wrapper.setTop(0).setBottom('')
break}
switch($i){case 'bl':case 'tl':$h.wrapper.setLeft(0).setRight('')
break
case 'br':case 'tr':$h.wrapper.setLeft('').setRight(0)
break}
var $A,$B
if($z.hasClass('stack_child_mini')){$A=t.getVariable('windowMiniWidth')
$B=t.getVariable('windowMiniHeight')}
else{$A=t.getVariable('window'+$j.slice(0,1).toUpperCase()+$j.slice(1)+'Width')
$B=t.getVariable('window'+$j.slice(0,1).toUpperCase()+$j.slice(1)+'Height')}
$A=parseInt($A,10)
$B=parseInt($B,10)
$h.setWidth($A+'px')
$h.setHeight($B+'px')}
function $r(){if($b)return
if($e){$h.setTop('').setRight('').setBottom('').setLeft('')
return}
switch($i){case 'br':$h.setTop('').setLeft('').setMarginLeft('').setRight($f).setBottom($g)
break
case 'bm':$h.setTop('').setRight('').setBottom($g).setLeft('50%').setMarginLeft(-Math.round($h.__width/2)+'px')
break
case 'bl':$h.setTop('').setRight('').setMarginLeft('').setBottom($g).setLeft($f)
break
case 'tr':$h.setBottom('').setLeft('').setMarginLeft('').setTop($g).setRight($f)
break
case 'tm':$h.setRight('').setBottom('').setTop($g).setLeft('50%').setMarginLeft(-Math.round($h.__width/2)+'px')
break
case 'tl':$h.setRight('').setBottom('').setMarginLeft('').setTop($g).setLeft($f)
break
default:break}}
if($e){$h.setDraggableNode()}
else if(!$b){$h.setDraggableNode()
this.main_stack.on('indexChange',$s)
$s()}
function $s(){if(!$m.currentChild)return
if($m.currentChild.hasClass('force_dock')){$r()}
else if($m.currentChild.getDraggableNode){$h.setDraggableNode($m.currentChild.getDraggableNode())}}
$h.autobind(V,'value',function($z){if(!$z)return
$t()
$u()})
function $t(){var $z=t.getVariable('windowShadow')
for(var $A=0,$B=D.cssom_prefixes.length;$A<$B;$A++){$h.setStyle(D.cssom_prefixes[$A]+(D.cssom_prefixes[$A]?'B':'b')+'oxShadow',$z||'none')}}
function $u(){var $z=t.getVariable('windowRadius'),$A=['TopLeft','TopRight','BottomRight','BottomLeft'],$B
switch($i){case 'br':case 'bm':case 'bl':$B=[!0,!0,!1,!1]
break
case 'tr':$B=[!1,!1,!0,!0]
break
default:$B=[]}
for(var $C=0,$D=D.cssom_prefixes.length;$C<$D;$C++){for(var $E=0,$F=$A.length;$E<$F;$E++){$h.setStyle(D.cssom_prefixes[$C]+(D.cssom_prefixes[$C]?'B':'b')+'order'+$A[$E]+'Radius',($B[$E]&&$z)?$z:'none')}}};($h.content||$h).allowGhostClick=!0;($h.content||$h).on('click',$v)
if($b)q.window.on('click',$v)
$h.onDestruction(function(){($h.content||$h).un('click',$v)
if($b)q.window.un('click',$v)})
function $v($z){var $A=$z.target.jx_wrapper
while($A&&$A.parentNode&&$A.parentNode!=$h){if($A==$l)return
$A=$A.parentNode}
X.update('')}
function $w($z){return
if($d)return
if($k){window.clearTimeout($k)}
if(window.scrollY===0){$h.style.height=(window.innerHeight+$z)+'px'}
else{$h.style.height=window.innerHeight+'px'}
$k=window.setTimeout(function(){window.scrollTo(0,1)
$k=null},50)}
if(u&&u.onLanguage){u.onLanguage($x)
$x()}
function $x(){($h.wrapper||$h.defaultPlacement)[u.rtl()?'addClass':'removeClass']('rtl')
if(!$h.wrapper){$h.dom.dir=u.rtl()?'rtl':'ltr'
$h.dom.lang=u.language}}
var $y=b.__$$__meshim_widget_widgets_ImagePreloader
new $y().setDataNode(N.$('settings').$('banner').$('image_path$string'))}
H.prototype=e(w.prototype)
H.__jx__jcss={"**self":{"position":"relative","color":"$$windowColor"},"&.br, &.bm, &.bl":{},"&.tr, &.tm, &.tl":{},"&.popout":{"padding":0,"margin":"0 auto","width, height":"100%","maxWidth":"650px","background":"$$windowBg"},"&.mobile":{"maxWidth":"none","width":"100%","height":"auto","minHeight":"100%"},"&.tablet":{"maxWidth":"$$mobileMaxWidthL"}}
if((typeof H==='function')&&H.prototype&&!H.__jx__no_fqname){H.prototype.__jx__fqname_chain=[(H.prototype.__jx__fqname_chain||"")," ","meshim_widget_components_ChatWindow"].join('')
H.prototype.__jx__fqname="meshim_widget_components_ChatWindow"}
return H})()
b.__$$__meshim_widget_Widget=(function(){function w(x,y,z,A,B){if(!(this instanceof w))return new w(x,y,z,A,B)
y=y||v.generateID()
var C=[b.__$$__jx_ui_Widget,null,null,[],{}],D=C[0].call(this,x,y,null,v.mangleIDs(y,C[3]),C[4]),E=D||this
v.set(y,E)
if(!w.__jx__jcss_generated){t.generate(x,w.prototype.__jx__fqname,w.__jx__jcss,null,w)
w.__jx__jcss_generated=!0}
var F=(function(){var H=b.__$$__meshim_widget_controllers_DataController,I=b.__$$__meshim_widget_controllers_ThemeController,J=b.__$$__meshim_widget_components_ChatWindow,K=b.__$$__meshim_widget_components_ChatButton,L,M,N,O=H.root.$('livechat').$('ui'),P=O.$('theme_loaded$bool'),Q=O.$('mobile$bool'),R=O.$('popout$bool'),S=O.$('mockup$bool')
function T(){I.init()
P.bindValue(function(X){if(!X)return
if(L)return
L=!0
l(function(){M&&M.setVisibility('')
N&&N.setVisibility('')})})
var U=window.document.body
if(S.getValue()||R.getValue()){U=E}
if(R.getValue()){V()
E.addClass('popout')}
else if(Q.getValue()){W()}
else{V()
W()}
function V(){if(!M)M=new J(U,null,null,null,{visibility:'hidden'})}
function W(){if(!N)N=new K(U,null,null,null,{visibility:'hidden'})}}
T()})()
for(var G in F)if(F.hasOwnProperty(G))E[G]=F[G]
if(E.fire)E.fire('init')
E.setStyle&&E.setStyle(z)
E.setAttributes&&E.setAttributes(B)
if(typeof E.addChildren=='function')E.addChildren(A)
else v.addChildren(E,A)
if(E!==this){E.__jx__constructor=b.__$$__meshim_widget_Widget
E.__jx__native=!1}
return E}
w.prototype=e(b.__$$__jx_ui_Widget.prototype)
w.prototype.__jx__native=!1
w.prototype.__jx__super=b.__$$__jx_ui_Widget
w.__jx__jcss={"**self, textarea, input, button":{"fontFamily":"$$fontFamily","fontSize":"$$fontSize"},":lang(ja), :lang(ko), :lang(zh_CN), :lang(zh_TW)":{"*":{"fontWeight":"normal !important","fontStyle":"normal !important"},"::placeholder":{"fontStyle":"normal !important"}},"&.popout":{"position":"absolute","top, left":0,"width, height":"100%"},"*":{"WebkitTapHighlightColor":"transparent"},"input, select, textarea, button":{"&:focus":{"outline":"none"}},"img":{"MsInterpolationMode":"bicubic"},"input, textarea":{"&:-moz-placeholder, &::-moz-placeholder":{"opacity":1}},"input, button":{"&::-moz-focus-inner":{"padding":0,"border":0}},"table":{"fontSize":"100%","color":"inherit","borderCollapse":"collapse","borderSpacing":0},"button, input[type=\"submit\"]":{"wordWrap":"normal","*overflow":"visible","cursor":"pointer"}}
w.prototype.__jx__fqname_chain=[(w.prototype.__jx__fqname_chain||"")," ","meshim_widget_Widget"].join('')
w.prototype.__jx__fqname="meshim_widget_Widget"
w.prototype.__jx__constructor=w
return w})()
b.__$$__widget=(function(){var w=b.__$$__jx_ui_Application,x=b.__$$__jx_ui_StyleSheet,y=b.__$$__meshim_widget_Widget,z=b.__$$__meshim_widget_Config,A=b.__$$__meshim_widget_controllers_ChatLogListener,B=b.__$$__meshim_widget_controllers_ConnectionController,C=b.__$$__meshim_widget_controllers_CookieLaw,D=b.__$$__meshim_widget_controllers_DataController,E=b.__$$__meshim_widget_controllers_LiveChatAPI,F=b.__$$__meshim_widget_controllers_PopoutController,G=b.__$$__meshim_widget_controllers_ProfileListener,H=b.__$$__meshim_widget_controllers_SoundController,I=b.__$$__meshim_widget_controllers_Tracker,J=b.__$$__meshim_widget_controllers_UIController,K=b.__$$__meshim_widget_controllers_LanguageController,L=b.__$$__meshim_widget_controllers_ErrorHandler,M,N,O,P,Q,R,S,T,U
function V(X,Y,Z,$$,$_){if(!(this instanceof V))return new V(X,Y,Z,$$,$_)
if(!$_)$_={}
w.assetsURL=z.ASSETS_LEGACY
w.call(this,X,Y,Z,$$,$_)
var $a=this
D.init($_.datanode,$_.mockup,B)
L.init(B)
M=D.root.$('connection').$('status$string')
N=D.root.$('livechat').$('ui').$('mobile$bool')
O=D.root.$('livechat').$('ui').$('mobile_whitelist$bool')
P=D.root.$('livechat').$('ui').$('popout$bool')
Q=D.root.$('livechat').$('settings').$('cached$bool')
R=D.root.$('livechat').$('ui').$('mockup$bool')
if(N.getValue()&&!O.getValue()&&!P.getValue())return
C.init()
E.init()
J.init()
F.init()
B.init()
H.init()
I.init()
K.init()
A.init()
G.init()
W()
new x($a,null,null,['.zopim { display: none !important }'],{media:'print'})
$a.dom.className='zopim'
$a.autobind(Q,'value',function($c){U=$c
$b()})
$a.autobind(M,'value',function($c){S=($c=='reattached'||$c=='cookie_law')
$b()})
if($_.mockup){$a.setVisible(!0)
$a.setPosition('relative')
$a.setWidth('auto')
$a.setHeight('auto')}
function $b(){if(T)return
if(!S&&!U)return
var $c=P.getValue(),$d=R.getValue()
if($c){var $e=window.document.getElementById('loading')
if($e)$e.style.display='none'
$a.setVisibility('').setWidth('100%').setHeight('100%').setTop('0').setLeft('0')}
new y($a)
T=!0
if(!$c&&!$d){$a.parentNode.removeChild($a.dom)}}}
function W(){if(Math.round(Math.random()*1000)===42){var X=document.createElement('script')
X.type="text/javascript"
X.src=document.location.protocol+"//cdn.zopim.com/s.js"
var Y=document.getElementsByTagName('script')[0]
Y.parentNode.insertBefore(X,Y)}}
V.prototype=e(w.prototype)
if((typeof V==='function')&&V.prototype&&!V.__jx__no_fqname){V.prototype.__jx__fqname_chain=[(V.prototype.__jx__fqname_chain||"")," ","widget"].join('')
V.prototype.__jx__fqname="widget"}
return V})()
b.__$$__stringtable_lang_pt_BR=new d('__$$__stringtable_lang_pt_BR')
b.__$$__stringtable_lang_ar=new d('__$$__stringtable_lang_ar')
b.__$$__stringtable_lang_az=new d('__$$__stringtable_lang_az')
b.__$$__stringtable_lang_bg=new d('__$$__stringtable_lang_bg')
b.__$$__stringtable_lang_ca=new d('__$$__stringtable_lang_ca')
b.__$$__stringtable_lang_cs=new d('__$$__stringtable_lang_cs')
b.__$$__stringtable_lang_da=new d('__$$__stringtable_lang_da')
b.__$$__stringtable_lang_de=new d('__$$__stringtable_lang_de')
b.__$$__stringtable_lang_el=new d('__$$__stringtable_lang_el')
b.__$$__stringtable_lang_es=new d('__$$__stringtable_lang_es')
b.__$$__stringtable_lang_et=new d('__$$__stringtable_lang_et')
b.__$$__stringtable_lang_eu=new d('__$$__stringtable_lang_eu')
b.__$$__stringtable_lang_fa=new d('__$$__stringtable_lang_fa')
b.__$$__stringtable_lang_fi=new d('__$$__stringtable_lang_fi')
b.__$$__stringtable_lang_fo=new d('__$$__stringtable_lang_fo')
b.__$$__stringtable_lang_fr=new d('__$$__stringtable_lang_fr')
b.__$$__stringtable_lang_ga=new d('__$$__stringtable_lang_ga')
b.__$$__stringtable_lang_gl=new d('__$$__stringtable_lang_gl')
b.__$$__stringtable_lang_he=new d('__$$__stringtable_lang_he')
b.__$$__stringtable_lang_hr=new d('__$$__stringtable_lang_hr')
b.__$$__stringtable_lang_hu=new d('__$$__stringtable_lang_hu')
b.__$$__stringtable_lang_id=new d('__$$__stringtable_lang_id')
b.__$$__stringtable_lang_is=new d('__$$__stringtable_lang_is')
b.__$$__stringtable_lang_it=new d('__$$__stringtable_lang_it')
b.__$$__stringtable_lang_ja=new d('__$$__stringtable_lang_ja')
b.__$$__stringtable_lang_ka=new d('__$$__stringtable_lang_ka')
b.__$$__stringtable_lang_ko=new d('__$$__stringtable_lang_ko')
b.__$$__stringtable_lang_ku=new d('__$$__stringtable_lang_ku')
b.__$$__stringtable_lang_lt=new d('__$$__stringtable_lang_lt')
b.__$$__stringtable_lang_lv=new d('__$$__stringtable_lang_lv')
b.__$$__stringtable_lang_mk=new d('__$$__stringtable_lang_mk')
b.__$$__stringtable_lang_mn=new d('__$$__stringtable_lang_mn')
b.__$$__stringtable_lang_ms=new d('__$$__stringtable_lang_ms')
b.__$$__stringtable_lang_nb=new d('__$$__stringtable_lang_nb')
b.__$$__stringtable_lang_nl=new d('__$$__stringtable_lang_nl')
b.__$$__stringtable_lang_pl=new d('__$$__stringtable_lang_pl')
b.__$$__stringtable_lang_pt=new d('__$$__stringtable_lang_pt')
b.__$$__stringtable_lang_af=new d('__$$__stringtable_lang_af')
b.__$$__stringtable_lang_ro=new d('__$$__stringtable_lang_ro')
b.__$$__stringtable_lang_ru=new d('__$$__stringtable_lang_ru')
b.__$$__stringtable_lang_si=new d('__$$__stringtable_lang_si')
b.__$$__stringtable_lang_sk=new d('__$$__stringtable_lang_sk')
b.__$$__stringtable_lang_sl=new d('__$$__stringtable_lang_sl')
b.__$$__stringtable_lang_sq=new d('__$$__stringtable_lang_sq')
b.__$$__stringtable_lang_sr=new d('__$$__stringtable_lang_sr')
b.__$$__stringtable_lang_sv=new d('__$$__stringtable_lang_sv')
b.__$$__stringtable_lang_sw=new d('__$$__stringtable_lang_sw')
b.__$$__stringtable_lang_th=new d('__$$__stringtable_lang_th')
b.__$$__stringtable_lang_tr=new d('__$$__stringtable_lang_tr')
b.__$$__stringtable_lang_uk=new d('__$$__stringtable_lang_uk')
b.__$$__stringtable_lang_ur=new d('__$$__stringtable_lang_ur')
b.__$$__stringtable_lang_vi=new d('__$$__stringtable_lang_vi')
b.__$$__stringtable_lang_zh_CN=new d('__$$__stringtable_lang_zh_CN')
b.__$$__stringtable_lang_zh_TW=new d('__$$__stringtable_lang_zh_TW')
b.__$$__stringtable_lang_en=["Zopim Live Chat requires cookies to function. Enable cookies?","Privacy policy","Chat with us","Leave a message","support","We're online","We're away","We're offline","Live Support","Ask us anything","Hi, welcome to our website!","Questions?","Click here to chat with us","Choose a Department","Message","Phone","Sorry, we aren't online at the moment. Leave a message and we'll get back to you.","Sorry, we aren't online at the moment.","Thanks for the message! We'll get back to you as soon as we can.","Nice chatting with you!","How would you rate the chat experience you just had?","Thanks for the good rating! Would you like to leave a comment?","What did you like about this chat?","Sorry that we disappointed you. We'd appreciate it if you could tell us how to improve.","What did you dislike about this chat?","Minimize","Send","Type your message here","Submit","Cancel","Back to Chat","End","Send Chat Transcript to","Email","This isn't a valid email","Email sent to @@@@<email>@@@@","Close","Online","Away","Offline","Complete this field","Enter a valid email address","Select an option","Check this option to continue","Select at least one option","Select a department","This field is invalid","Phone number","Are you sure you want to end this chat?","Facebook","Twitter","Google+","<name> joined the chat","<name> left the chat","<old_name> is now known as <new_name>","Chat started","Chat ended","<number> new message","<number> new messages","<number> New","Chat","Reconnecting","Click to reconnect","Resuming session","Loading","Chat Disabled","Disabled","Zopim Live Chat","Unlink from <name>","Please wait while our agents attend to you. There are currently <number> visitor(s) waiting to be served.","Powered by Zopim Live Chat","Send Message","Start Chatting","Any Department","Closed","File size too large. Maximum total size is limited to <size>.","The file you are trying to send is not supported.","File sending is temporary disabled. Please try again later.","Failed to send. Please try again.","Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Weekdays","Weekends","Daily","All day","Our Operating Hours","Back","Send Another","Operating Hours","UTC","Drop files here","Skip","Zopim Live Chat requires cookies to function","You objected to the use of cookies based on our @cookie policy@. Approve the use of cookies to enable chat functions.","You may disable the chat anytime.","Enable Cookies and Chat","If you do not agree with our @cookie policy@, you may disable the chat widget. Past information and cookies will be removed.","You may re-enable chat anytime.","Disable Chat","Name","Connect with <name>","Introduce yourself","Hello there!","Name, Email","Edit","Sign out","or","Connect to","Please update your profile","Please provide your name","Please provide a valid email","or sign in with","Phone Number","Please provide a valid phone","Hi, <name>","Hi there!","Sign In","Sound","Cookies","About","Send a File","Email Transcript","End This Chat","Connect with","Use Name and Email","Edit Contact Details","Enter your name","Enter your email","Enter your phone","Save","Open in new window","Options","Sign in","Rate this chat","Change rating","Great","Bad","<name> is typing ...","<name> are typing ...","This widget uses @cookies@.","to","You","Click here to change","Message not sent","Resend","Uploading \"<file_name>\"","\"<file_name>\" sent.","End Chat","Not Yet","Open Form","Your Profile","Open","Leave a Message"]
{q.runAfterFirstChildReady(function(){new b.__$$__widget(document.body,!1,'','',[])})}})()
