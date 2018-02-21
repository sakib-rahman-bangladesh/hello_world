goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__1942__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__1942 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__1943__i = 0, G__1943__a = new Array(arguments.length -  0);
while (G__1943__i < G__1943__a.length) {G__1943__a[G__1943__i] = arguments[G__1943__i + 0]; ++G__1943__i;}
  args = new cljs.core.IndexedSeq(G__1943__a,0);
} 
return G__1942__delegate.call(this,args);};
G__1942.cljs$lang$maxFixedArity = 0;
G__1942.cljs$lang$applyTo = (function (arglist__1944){
var args = cljs.core.seq(arglist__1944);
return G__1942__delegate(args);
});
G__1942.cljs$core$IFn$_invoke$arity$variadic = G__1942__delegate;
return G__1942;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__1945__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__1945 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__1946__i = 0, G__1946__a = new Array(arguments.length -  0);
while (G__1946__i < G__1946__a.length) {G__1946__a[G__1946__i] = arguments[G__1946__i + 0]; ++G__1946__i;}
  args = new cljs.core.IndexedSeq(G__1946__a,0);
} 
return G__1945__delegate.call(this,args);};
G__1945.cljs$lang$maxFixedArity = 0;
G__1945.cljs$lang$applyTo = (function (arglist__1947){
var args = cljs.core.seq(arglist__1947);
return G__1945__delegate(args);
});
G__1945.cljs$core$IFn$_invoke$arity$variadic = G__1945__delegate;
return G__1945;
})()
;

return null;
});
