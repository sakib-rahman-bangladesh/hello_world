goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__2143__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__2143 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__2144__i = 0, G__2144__a = new Array(arguments.length -  0);
while (G__2144__i < G__2144__a.length) {G__2144__a[G__2144__i] = arguments[G__2144__i + 0]; ++G__2144__i;}
  args = new cljs.core.IndexedSeq(G__2144__a,0);
} 
return G__2143__delegate.call(this,args);};
G__2143.cljs$lang$maxFixedArity = 0;
G__2143.cljs$lang$applyTo = (function (arglist__2145){
var args = cljs.core.seq(arglist__2145);
return G__2143__delegate(args);
});
G__2143.cljs$core$IFn$_invoke$arity$variadic = G__2143__delegate;
return G__2143;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__2146__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__2146 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__2147__i = 0, G__2147__a = new Array(arguments.length -  0);
while (G__2147__i < G__2147__a.length) {G__2147__a[G__2147__i] = arguments[G__2147__i + 0]; ++G__2147__i;}
  args = new cljs.core.IndexedSeq(G__2147__a,0);
} 
return G__2146__delegate.call(this,args);};
G__2146.cljs$lang$maxFixedArity = 0;
G__2146.cljs$lang$applyTo = (function (arglist__2148){
var args = cljs.core.seq(arglist__2148);
return G__2146__delegate(args);
});
G__2146.cljs$core$IFn$_invoke$arity$variadic = G__2146__delegate;
return G__2146;
})()
;

return null;
});
