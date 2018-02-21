goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__1988__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__1988 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__1989__i = 0, G__1989__a = new Array(arguments.length -  0);
while (G__1989__i < G__1989__a.length) {G__1989__a[G__1989__i] = arguments[G__1989__i + 0]; ++G__1989__i;}
  args = new cljs.core.IndexedSeq(G__1989__a,0);
} 
return G__1988__delegate.call(this,args);};
G__1988.cljs$lang$maxFixedArity = 0;
G__1988.cljs$lang$applyTo = (function (arglist__1990){
var args = cljs.core.seq(arglist__1990);
return G__1988__delegate(args);
});
G__1988.cljs$core$IFn$_invoke$arity$variadic = G__1988__delegate;
return G__1988;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__1991__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__1991 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__1992__i = 0, G__1992__a = new Array(arguments.length -  0);
while (G__1992__i < G__1992__a.length) {G__1992__a[G__1992__i] = arguments[G__1992__i + 0]; ++G__1992__i;}
  args = new cljs.core.IndexedSeq(G__1992__a,0);
} 
return G__1991__delegate.call(this,args);};
G__1991.cljs$lang$maxFixedArity = 0;
G__1991.cljs$lang$applyTo = (function (arglist__1993){
var args = cljs.core.seq(arglist__1993);
return G__1991__delegate(args);
});
G__1991.cljs$core$IFn$_invoke$arity$variadic = G__1991__delegate;
return G__1991;
})()
;

return null;
});
