goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__2088__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__2088 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__2089__i = 0, G__2089__a = new Array(arguments.length -  0);
while (G__2089__i < G__2089__a.length) {G__2089__a[G__2089__i] = arguments[G__2089__i + 0]; ++G__2089__i;}
  args = new cljs.core.IndexedSeq(G__2089__a,0);
} 
return G__2088__delegate.call(this,args);};
G__2088.cljs$lang$maxFixedArity = 0;
G__2088.cljs$lang$applyTo = (function (arglist__2090){
var args = cljs.core.seq(arglist__2090);
return G__2088__delegate(args);
});
G__2088.cljs$core$IFn$_invoke$arity$variadic = G__2088__delegate;
return G__2088;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__2091__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__2091 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__2092__i = 0, G__2092__a = new Array(arguments.length -  0);
while (G__2092__i < G__2092__a.length) {G__2092__a[G__2092__i] = arguments[G__2092__i + 0]; ++G__2092__i;}
  args = new cljs.core.IndexedSeq(G__2092__a,0);
} 
return G__2091__delegate.call(this,args);};
G__2091.cljs$lang$maxFixedArity = 0;
G__2091.cljs$lang$applyTo = (function (arglist__2093){
var args = cljs.core.seq(arglist__2093);
return G__2091__delegate(args);
});
G__2091.cljs$core$IFn$_invoke$arity$variadic = G__2091__delegate;
return G__2091;
})()
;

return null;
});
