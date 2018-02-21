goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__2042__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__2042 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__2043__i = 0, G__2043__a = new Array(arguments.length -  0);
while (G__2043__i < G__2043__a.length) {G__2043__a[G__2043__i] = arguments[G__2043__i + 0]; ++G__2043__i;}
  args = new cljs.core.IndexedSeq(G__2043__a,0);
} 
return G__2042__delegate.call(this,args);};
G__2042.cljs$lang$maxFixedArity = 0;
G__2042.cljs$lang$applyTo = (function (arglist__2044){
var args = cljs.core.seq(arglist__2044);
return G__2042__delegate(args);
});
G__2042.cljs$core$IFn$_invoke$arity$variadic = G__2042__delegate;
return G__2042;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__2045__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__2045 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__2046__i = 0, G__2046__a = new Array(arguments.length -  0);
while (G__2046__i < G__2046__a.length) {G__2046__a[G__2046__i] = arguments[G__2046__i + 0]; ++G__2046__i;}
  args = new cljs.core.IndexedSeq(G__2046__a,0);
} 
return G__2045__delegate.call(this,args);};
G__2045.cljs$lang$maxFixedArity = 0;
G__2045.cljs$lang$applyTo = (function (arglist__2047){
var args = cljs.core.seq(arglist__2047);
return G__2045__delegate(args);
});
G__2045.cljs$core$IFn$_invoke$arity$variadic = G__2045__delegate;
return G__2045;
})()
;

return null;
});
