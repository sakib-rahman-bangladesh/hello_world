// Compiled by ClojureScript 1.9.473 {:target :nodejs}
goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__4702__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__4702 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__4703__i = 0, G__4703__a = new Array(arguments.length -  0);
while (G__4703__i < G__4703__a.length) {G__4703__a[G__4703__i] = arguments[G__4703__i + 0]; ++G__4703__i;}
  args = new cljs.core.IndexedSeq(G__4703__a,0);
} 
return G__4702__delegate.call(this,args);};
G__4702.cljs$lang$maxFixedArity = 0;
G__4702.cljs$lang$applyTo = (function (arglist__4704){
var args = cljs.core.seq(arglist__4704);
return G__4702__delegate(args);
});
G__4702.cljs$core$IFn$_invoke$arity$variadic = G__4702__delegate;
return G__4702;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__4705__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__4705 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__4706__i = 0, G__4706__a = new Array(arguments.length -  0);
while (G__4706__i < G__4706__a.length) {G__4706__a[G__4706__i] = arguments[G__4706__i + 0]; ++G__4706__i;}
  args = new cljs.core.IndexedSeq(G__4706__a,0);
} 
return G__4705__delegate.call(this,args);};
G__4705.cljs$lang$maxFixedArity = 0;
G__4705.cljs$lang$applyTo = (function (arglist__4707){
var args = cljs.core.seq(arglist__4707);
return G__4705__delegate(args);
});
G__4705.cljs$core$IFn$_invoke$arity$variadic = G__4705__delegate;
return G__4705;
})()
;

return null;
});

//# sourceMappingURL=nodejs.js.map