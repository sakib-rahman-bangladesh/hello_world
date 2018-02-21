goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__1963__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__1963 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__1964__i = 0, G__1964__a = new Array(arguments.length -  0);
while (G__1964__i < G__1964__a.length) {G__1964__a[G__1964__i] = arguments[G__1964__i + 0]; ++G__1964__i;}
  args = new cljs.core.IndexedSeq(G__1964__a,0);
} 
return G__1963__delegate.call(this,args);};
G__1963.cljs$lang$maxFixedArity = 0;
G__1963.cljs$lang$applyTo = (function (arglist__1965){
var args = cljs.core.seq(arglist__1965);
return G__1963__delegate(args);
});
G__1963.cljs$core$IFn$_invoke$arity$variadic = G__1963__delegate;
return G__1963;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__1966__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__1966 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__1967__i = 0, G__1967__a = new Array(arguments.length -  0);
while (G__1967__i < G__1967__a.length) {G__1967__a[G__1967__i] = arguments[G__1967__i + 0]; ++G__1967__i;}
  args = new cljs.core.IndexedSeq(G__1967__a,0);
} 
return G__1966__delegate.call(this,args);};
G__1966.cljs$lang$maxFixedArity = 0;
G__1966.cljs$lang$applyTo = (function (arglist__1968){
var args = cljs.core.seq(arglist__1968);
return G__1966__delegate(args);
});
G__1966.cljs$core$IFn$_invoke$arity$variadic = G__1966__delegate;
return G__1966;
})()
;

return null;
});
