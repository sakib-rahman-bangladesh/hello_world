goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__3227__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__3227 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__3228__i = 0, G__3228__a = new Array(arguments.length -  0);
while (G__3228__i < G__3228__a.length) {G__3228__a[G__3228__i] = arguments[G__3228__i + 0]; ++G__3228__i;}
  args = new cljs.core.IndexedSeq(G__3228__a,0);
} 
return G__3227__delegate.call(this,args);};
G__3227.cljs$lang$maxFixedArity = 0;
G__3227.cljs$lang$applyTo = (function (arglist__3229){
var args = cljs.core.seq(arglist__3229);
return G__3227__delegate(args);
});
G__3227.cljs$core$IFn$_invoke$arity$variadic = G__3227__delegate;
return G__3227;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__3230__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__3230 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__3231__i = 0, G__3231__a = new Array(arguments.length -  0);
while (G__3231__i < G__3231__a.length) {G__3231__a[G__3231__i] = arguments[G__3231__i + 0]; ++G__3231__i;}
  args = new cljs.core.IndexedSeq(G__3231__a,0);
} 
return G__3230__delegate.call(this,args);};
G__3230.cljs$lang$maxFixedArity = 0;
G__3230.cljs$lang$applyTo = (function (arglist__3232){
var args = cljs.core.seq(arglist__3232);
return G__3230__delegate(args);
});
G__3230.cljs$core$IFn$_invoke$arity$variadic = G__3230__delegate;
return G__3230;
})()
;

return null;
});
