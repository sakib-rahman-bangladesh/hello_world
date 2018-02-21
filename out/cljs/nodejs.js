// Compiled by ClojureScript 1.9.473 {:target :nodejs}
goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__2008__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__2008 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__2009__i = 0, G__2009__a = new Array(arguments.length -  0);
while (G__2009__i < G__2009__a.length) {G__2009__a[G__2009__i] = arguments[G__2009__i + 0]; ++G__2009__i;}
  args = new cljs.core.IndexedSeq(G__2009__a,0);
} 
return G__2008__delegate.call(this,args);};
G__2008.cljs$lang$maxFixedArity = 0;
G__2008.cljs$lang$applyTo = (function (arglist__2010){
var args = cljs.core.seq(arglist__2010);
return G__2008__delegate(args);
});
G__2008.cljs$core$IFn$_invoke$arity$variadic = G__2008__delegate;
return G__2008;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__2011__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__2011 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__2012__i = 0, G__2012__a = new Array(arguments.length -  0);
while (G__2012__i < G__2012__a.length) {G__2012__a[G__2012__i] = arguments[G__2012__i + 0]; ++G__2012__i;}
  args = new cljs.core.IndexedSeq(G__2012__a,0);
} 
return G__2011__delegate.call(this,args);};
G__2011.cljs$lang$maxFixedArity = 0;
G__2011.cljs$lang$applyTo = (function (arglist__2013){
var args = cljs.core.seq(arglist__2013);
return G__2011__delegate(args);
});
G__2011.cljs$core$IFn$_invoke$arity$variadic = G__2011__delegate;
return G__2011;
})()
;

return null;
});

//# sourceMappingURL=nodejs.js.map