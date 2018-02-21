goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__2176__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__2176 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__2177__i = 0, G__2177__a = new Array(arguments.length -  0);
while (G__2177__i < G__2177__a.length) {G__2177__a[G__2177__i] = arguments[G__2177__i + 0]; ++G__2177__i;}
  args = new cljs.core.IndexedSeq(G__2177__a,0);
} 
return G__2176__delegate.call(this,args);};
G__2176.cljs$lang$maxFixedArity = 0;
G__2176.cljs$lang$applyTo = (function (arglist__2178){
var args = cljs.core.seq(arglist__2178);
return G__2176__delegate(args);
});
G__2176.cljs$core$IFn$_invoke$arity$variadic = G__2176__delegate;
return G__2176;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__2179__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__2179 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__2180__i = 0, G__2180__a = new Array(arguments.length -  0);
while (G__2180__i < G__2180__a.length) {G__2180__a[G__2180__i] = arguments[G__2180__i + 0]; ++G__2180__i;}
  args = new cljs.core.IndexedSeq(G__2180__a,0);
} 
return G__2179__delegate.call(this,args);};
G__2179.cljs$lang$maxFixedArity = 0;
G__2179.cljs$lang$applyTo = (function (arglist__2181){
var args = cljs.core.seq(arglist__2181);
return G__2179__delegate(args);
});
G__2179.cljs$core$IFn$_invoke$arity$variadic = G__2179__delegate;
return G__2179;
})()
;

return null;
});
