goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__3252__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__3252 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__3253__i = 0, G__3253__a = new Array(arguments.length -  0);
while (G__3253__i < G__3253__a.length) {G__3253__a[G__3253__i] = arguments[G__3253__i + 0]; ++G__3253__i;}
  args = new cljs.core.IndexedSeq(G__3253__a,0);
} 
return G__3252__delegate.call(this,args);};
G__3252.cljs$lang$maxFixedArity = 0;
G__3252.cljs$lang$applyTo = (function (arglist__3254){
var args = cljs.core.seq(arglist__3254);
return G__3252__delegate(args);
});
G__3252.cljs$core$IFn$_invoke$arity$variadic = G__3252__delegate;
return G__3252;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__3255__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__3255 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__3256__i = 0, G__3256__a = new Array(arguments.length -  0);
while (G__3256__i < G__3256__a.length) {G__3256__a[G__3256__i] = arguments[G__3256__i + 0]; ++G__3256__i;}
  args = new cljs.core.IndexedSeq(G__3256__a,0);
} 
return G__3255__delegate.call(this,args);};
G__3255.cljs$lang$maxFixedArity = 0;
G__3255.cljs$lang$applyTo = (function (arglist__3257){
var args = cljs.core.seq(arglist__3257);
return G__3255__delegate(args);
});
G__3255.cljs$core$IFn$_invoke$arity$variadic = G__3255__delegate;
return G__3255;
})()
;

return null;
});
