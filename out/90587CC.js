goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__2110__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__2110 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__2111__i = 0, G__2111__a = new Array(arguments.length -  0);
while (G__2111__i < G__2111__a.length) {G__2111__a[G__2111__i] = arguments[G__2111__i + 0]; ++G__2111__i;}
  args = new cljs.core.IndexedSeq(G__2111__a,0);
} 
return G__2110__delegate.call(this,args);};
G__2110.cljs$lang$maxFixedArity = 0;
G__2110.cljs$lang$applyTo = (function (arglist__2112){
var args = cljs.core.seq(arglist__2112);
return G__2110__delegate(args);
});
G__2110.cljs$core$IFn$_invoke$arity$variadic = G__2110__delegate;
return G__2110;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__2113__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__2113 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__2114__i = 0, G__2114__a = new Array(arguments.length -  0);
while (G__2114__i < G__2114__a.length) {G__2114__a[G__2114__i] = arguments[G__2114__i + 0]; ++G__2114__i;}
  args = new cljs.core.IndexedSeq(G__2114__a,0);
} 
return G__2113__delegate.call(this,args);};
G__2113.cljs$lang$maxFixedArity = 0;
G__2113.cljs$lang$applyTo = (function (arglist__2115){
var args = cljs.core.seq(arglist__2115);
return G__2113__delegate(args);
});
G__2113.cljs$core$IFn$_invoke$arity$variadic = G__2113__delegate;
return G__2113;
})()
;

return null;
});
