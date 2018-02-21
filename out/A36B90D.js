goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__2054__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__2054 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__2055__i = 0, G__2055__a = new Array(arguments.length -  0);
while (G__2055__i < G__2055__a.length) {G__2055__a[G__2055__i] = arguments[G__2055__i + 0]; ++G__2055__i;}
  args = new cljs.core.IndexedSeq(G__2055__a,0);
} 
return G__2054__delegate.call(this,args);};
G__2054.cljs$lang$maxFixedArity = 0;
G__2054.cljs$lang$applyTo = (function (arglist__2056){
var args = cljs.core.seq(arglist__2056);
return G__2054__delegate(args);
});
G__2054.cljs$core$IFn$_invoke$arity$variadic = G__2054__delegate;
return G__2054;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__2057__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__2057 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__2058__i = 0, G__2058__a = new Array(arguments.length -  0);
while (G__2058__i < G__2058__a.length) {G__2058__a[G__2058__i] = arguments[G__2058__i + 0]; ++G__2058__i;}
  args = new cljs.core.IndexedSeq(G__2058__a,0);
} 
return G__2057__delegate.call(this,args);};
G__2057.cljs$lang$maxFixedArity = 0;
G__2057.cljs$lang$applyTo = (function (arglist__2059){
var args = cljs.core.seq(arglist__2059);
return G__2057__delegate(args);
});
G__2057.cljs$core$IFn$_invoke$arity$variadic = G__2057__delegate;
return G__2057;
})()
;

return null;
});
