goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__2165__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__2165 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__2166__i = 0, G__2166__a = new Array(arguments.length -  0);
while (G__2166__i < G__2166__a.length) {G__2166__a[G__2166__i] = arguments[G__2166__i + 0]; ++G__2166__i;}
  args = new cljs.core.IndexedSeq(G__2166__a,0);
} 
return G__2165__delegate.call(this,args);};
G__2165.cljs$lang$maxFixedArity = 0;
G__2165.cljs$lang$applyTo = (function (arglist__2167){
var args = cljs.core.seq(arglist__2167);
return G__2165__delegate(args);
});
G__2165.cljs$core$IFn$_invoke$arity$variadic = G__2165__delegate;
return G__2165;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__2168__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__2168 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__2169__i = 0, G__2169__a = new Array(arguments.length -  0);
while (G__2169__i < G__2169__a.length) {G__2169__a[G__2169__i] = arguments[G__2169__i + 0]; ++G__2169__i;}
  args = new cljs.core.IndexedSeq(G__2169__a,0);
} 
return G__2168__delegate.call(this,args);};
G__2168.cljs$lang$maxFixedArity = 0;
G__2168.cljs$lang$applyTo = (function (arglist__2170){
var args = cljs.core.seq(arglist__2170);
return G__2168__delegate(args);
});
G__2168.cljs$core$IFn$_invoke$arity$variadic = G__2168__delegate;
return G__2168;
})()
;

return null;
});
