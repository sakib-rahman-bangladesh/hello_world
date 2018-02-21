goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__2077__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__2077 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__2078__i = 0, G__2078__a = new Array(arguments.length -  0);
while (G__2078__i < G__2078__a.length) {G__2078__a[G__2078__i] = arguments[G__2078__i + 0]; ++G__2078__i;}
  args = new cljs.core.IndexedSeq(G__2078__a,0);
} 
return G__2077__delegate.call(this,args);};
G__2077.cljs$lang$maxFixedArity = 0;
G__2077.cljs$lang$applyTo = (function (arglist__2079){
var args = cljs.core.seq(arglist__2079);
return G__2077__delegate(args);
});
G__2077.cljs$core$IFn$_invoke$arity$variadic = G__2077__delegate;
return G__2077;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__2080__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__2080 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__2081__i = 0, G__2081__a = new Array(arguments.length -  0);
while (G__2081__i < G__2081__a.length) {G__2081__a[G__2081__i] = arguments[G__2081__i + 0]; ++G__2081__i;}
  args = new cljs.core.IndexedSeq(G__2081__a,0);
} 
return G__2080__delegate.call(this,args);};
G__2080.cljs$lang$maxFixedArity = 0;
G__2080.cljs$lang$applyTo = (function (arglist__2082){
var args = cljs.core.seq(arglist__2082);
return G__2080__delegate(args);
});
G__2080.cljs$core$IFn$_invoke$arity$variadic = G__2080__delegate;
return G__2080;
})()
;

return null;
});
