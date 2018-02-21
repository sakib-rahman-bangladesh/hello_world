goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__2132__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__2132 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__2133__i = 0, G__2133__a = new Array(arguments.length -  0);
while (G__2133__i < G__2133__a.length) {G__2133__a[G__2133__i] = arguments[G__2133__i + 0]; ++G__2133__i;}
  args = new cljs.core.IndexedSeq(G__2133__a,0);
} 
return G__2132__delegate.call(this,args);};
G__2132.cljs$lang$maxFixedArity = 0;
G__2132.cljs$lang$applyTo = (function (arglist__2134){
var args = cljs.core.seq(arglist__2134);
return G__2132__delegate(args);
});
G__2132.cljs$core$IFn$_invoke$arity$variadic = G__2132__delegate;
return G__2132;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__2135__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__2135 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__2136__i = 0, G__2136__a = new Array(arguments.length -  0);
while (G__2136__i < G__2136__a.length) {G__2136__a[G__2136__i] = arguments[G__2136__i + 0]; ++G__2136__i;}
  args = new cljs.core.IndexedSeq(G__2136__a,0);
} 
return G__2135__delegate.call(this,args);};
G__2135.cljs$lang$maxFixedArity = 0;
G__2135.cljs$lang$applyTo = (function (arglist__2137){
var args = cljs.core.seq(arglist__2137);
return G__2135__delegate(args);
});
G__2135.cljs$core$IFn$_invoke$arity$variadic = G__2135__delegate;
return G__2135;
})()
;

return null;
});
