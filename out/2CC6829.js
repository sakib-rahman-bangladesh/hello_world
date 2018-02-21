goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__4716__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__4716 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__4717__i = 0, G__4717__a = new Array(arguments.length -  0);
while (G__4717__i < G__4717__a.length) {G__4717__a[G__4717__i] = arguments[G__4717__i + 0]; ++G__4717__i;}
  args = new cljs.core.IndexedSeq(G__4717__a,0);
} 
return G__4716__delegate.call(this,args);};
G__4716.cljs$lang$maxFixedArity = 0;
G__4716.cljs$lang$applyTo = (function (arglist__4718){
var args = cljs.core.seq(arglist__4718);
return G__4716__delegate(args);
});
G__4716.cljs$core$IFn$_invoke$arity$variadic = G__4716__delegate;
return G__4716;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__4719__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__4719 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__4720__i = 0, G__4720__a = new Array(arguments.length -  0);
while (G__4720__i < G__4720__a.length) {G__4720__a[G__4720__i] = arguments[G__4720__i + 0]; ++G__4720__i;}
  args = new cljs.core.IndexedSeq(G__4720__a,0);
} 
return G__4719__delegate.call(this,args);};
G__4719.cljs$lang$maxFixedArity = 0;
G__4719.cljs$lang$applyTo = (function (arglist__4721){
var args = cljs.core.seq(arglist__4721);
return G__4719__delegate(args);
});
G__4719.cljs$core$IFn$_invoke$arity$variadic = G__4719__delegate;
return G__4719;
})()
;

return null;
});
