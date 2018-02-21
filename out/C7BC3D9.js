goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__2099__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__2099 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__2100__i = 0, G__2100__a = new Array(arguments.length -  0);
while (G__2100__i < G__2100__a.length) {G__2100__a[G__2100__i] = arguments[G__2100__i + 0]; ++G__2100__i;}
  args = new cljs.core.IndexedSeq(G__2100__a,0);
} 
return G__2099__delegate.call(this,args);};
G__2099.cljs$lang$maxFixedArity = 0;
G__2099.cljs$lang$applyTo = (function (arglist__2101){
var args = cljs.core.seq(arglist__2101);
return G__2099__delegate(args);
});
G__2099.cljs$core$IFn$_invoke$arity$variadic = G__2099__delegate;
return G__2099;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__2102__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__2102 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__2103__i = 0, G__2103__a = new Array(arguments.length -  0);
while (G__2103__i < G__2103__a.length) {G__2103__a[G__2103__i] = arguments[G__2103__i + 0]; ++G__2103__i;}
  args = new cljs.core.IndexedSeq(G__2103__a,0);
} 
return G__2102__delegate.call(this,args);};
G__2102.cljs$lang$maxFixedArity = 0;
G__2102.cljs$lang$applyTo = (function (arglist__2104){
var args = cljs.core.seq(arglist__2104);
return G__2102__delegate(args);
});
G__2102.cljs$core$IFn$_invoke$arity$variadic = G__2102__delegate;
return G__2102;
})()
;

return null;
});
