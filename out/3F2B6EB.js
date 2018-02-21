goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__2066__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__2066 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__2067__i = 0, G__2067__a = new Array(arguments.length -  0);
while (G__2067__i < G__2067__a.length) {G__2067__a[G__2067__i] = arguments[G__2067__i + 0]; ++G__2067__i;}
  args = new cljs.core.IndexedSeq(G__2067__a,0);
} 
return G__2066__delegate.call(this,args);};
G__2066.cljs$lang$maxFixedArity = 0;
G__2066.cljs$lang$applyTo = (function (arglist__2068){
var args = cljs.core.seq(arglist__2068);
return G__2066__delegate(args);
});
G__2066.cljs$core$IFn$_invoke$arity$variadic = G__2066__delegate;
return G__2066;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__2069__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__2069 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__2070__i = 0, G__2070__a = new Array(arguments.length -  0);
while (G__2070__i < G__2070__a.length) {G__2070__a[G__2070__i] = arguments[G__2070__i + 0]; ++G__2070__i;}
  args = new cljs.core.IndexedSeq(G__2070__a,0);
} 
return G__2069__delegate.call(this,args);};
G__2069.cljs$lang$maxFixedArity = 0;
G__2069.cljs$lang$applyTo = (function (arglist__2071){
var args = cljs.core.seq(arglist__2071);
return G__2069__delegate(args);
});
G__2069.cljs$core$IFn$_invoke$arity$variadic = G__2069__delegate;
return G__2069;
})()
;

return null;
});
