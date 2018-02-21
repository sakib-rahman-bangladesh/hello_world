goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__3204__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__3204 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__3205__i = 0, G__3205__a = new Array(arguments.length -  0);
while (G__3205__i < G__3205__a.length) {G__3205__a[G__3205__i] = arguments[G__3205__i + 0]; ++G__3205__i;}
  args = new cljs.core.IndexedSeq(G__3205__a,0);
} 
return G__3204__delegate.call(this,args);};
G__3204.cljs$lang$maxFixedArity = 0;
G__3204.cljs$lang$applyTo = (function (arglist__3206){
var args = cljs.core.seq(arglist__3206);
return G__3204__delegate(args);
});
G__3204.cljs$core$IFn$_invoke$arity$variadic = G__3204__delegate;
return G__3204;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__3207__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__3207 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__3208__i = 0, G__3208__a = new Array(arguments.length -  0);
while (G__3208__i < G__3208__a.length) {G__3208__a[G__3208__i] = arguments[G__3208__i + 0]; ++G__3208__i;}
  args = new cljs.core.IndexedSeq(G__3208__a,0);
} 
return G__3207__delegate.call(this,args);};
G__3207.cljs$lang$maxFixedArity = 0;
G__3207.cljs$lang$applyTo = (function (arglist__3209){
var args = cljs.core.seq(arglist__3209);
return G__3207__delegate(args);
});
G__3207.cljs$core$IFn$_invoke$arity$variadic = G__3207__delegate;
return G__3207;
})()
;

return null;
});
