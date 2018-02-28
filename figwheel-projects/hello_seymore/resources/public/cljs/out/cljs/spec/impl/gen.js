// Compiled by ClojureScript 1.9.229 {}
goog.provide('cljs.spec.impl.gen');
goog.require('cljs.core');
goog.require('cljs.core');

/**
* @constructor
 * @implements {cljs.core.IDeref}
*/
cljs.spec.impl.gen.LazyVar = (function (f,cached){
this.f = f;
this.cached = cached;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.impl.gen.LazyVar.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(!((self__.cached == null))){
return self__.cached;
} else {
var x = self__.f.call(null);
if((x == null)){
} else {
self__.cached = x;
}

return x;
}
});

cljs.spec.impl.gen.LazyVar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),cljs.core.with_meta(new cljs.core.Symbol(null,"cached","cached",-1216707864,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

cljs.spec.impl.gen.LazyVar.cljs$lang$type = true;

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorStr = "cljs.spec.impl.gen/LazyVar";

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorPrWriter = (function (this__25367__auto__,writer__25368__auto__,opt__25369__auto__){
return cljs.core._write.call(null,writer__25368__auto__,"cljs.spec.impl.gen/LazyVar");
});

cljs.spec.impl.gen.__GT_LazyVar = (function cljs$spec$impl$gen$__GT_LazyVar(f,cached){
return (new cljs.spec.impl.gen.LazyVar(f,cached));
});

cljs.spec.impl.gen.quick_check_ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check.quick_check !== 'undefined')){
return clojure.test.check.quick_check;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null))),cljs.core.str(" never required")].join('')));
}
}),null));
cljs.spec.impl.gen.quick_check = (function cljs$spec$impl$gen$quick_check(var_args){
var args__25843__auto__ = [];
var len__25836__auto___31843 = arguments.length;
var i__25837__auto___31844 = (0);
while(true){
if((i__25837__auto___31844 < len__25836__auto___31843)){
args__25843__auto__.push((arguments[i__25837__auto___31844]));

var G__31845 = (i__25837__auto___31844 + (1));
i__25837__auto___31844 = G__31845;
continue;
} else {
}
break;
}

var argseq__25844__auto__ = ((((0) < args__25843__auto__.length))?(new cljs.core.IndexedSeq(args__25843__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__25844__auto__);
});

cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.quick_check_ref),args);
});

cljs.spec.impl.gen.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.quick_check.cljs$lang$applyTo = (function (seq31842){
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31842));
});

cljs.spec.impl.gen.for_all_STAR__ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.properties.for_all_STAR_ !== 'undefined')){
return clojure.test.check.properties.for_all_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Dynamically loaded clojure.test.check.properties/for-all*.
 */
cljs.spec.impl.gen.for_all_STAR_ = (function cljs$spec$impl$gen$for_all_STAR_(var_args){
var args__25843__auto__ = [];
var len__25836__auto___31847 = arguments.length;
var i__25837__auto___31848 = (0);
while(true){
if((i__25837__auto___31848 < len__25836__auto___31847)){
args__25843__auto__.push((arguments[i__25837__auto___31848]));

var G__31849 = (i__25837__auto___31848 + (1));
i__25837__auto___31848 = G__31849;
continue;
} else {
}
break;
}

var argseq__25844__auto__ = ((((0) < args__25843__auto__.length))?(new cljs.core.IndexedSeq(args__25843__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__25844__auto__);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.for_all_STAR__ref),args);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$applyTo = (function (seq31846){
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31846));
});

var g_QMARK__31850 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))),cljs.core.str(" never required")].join('')));
}
}),null));
var g_31851 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__31850){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__31850))
,null));
var mkg_31852 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__31850,g_31851){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__31850,g_31851))
,null));
cljs.spec.impl.gen.generator_QMARK_ = ((function (g_QMARK__31850,g_31851,mkg_31852){
return (function cljs$spec$impl$gen$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__31850).call(null,x);
});})(g_QMARK__31850,g_31851,mkg_31852))
;

cljs.spec.impl.gen.generator = ((function (g_QMARK__31850,g_31851,mkg_31852){
return (function cljs$spec$impl$gen$generator(gfn){
return cljs.core.deref.call(null,mkg_31852).call(null,gfn);
});})(g_QMARK__31850,g_31851,mkg_31852))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.impl.gen.generate = ((function (g_QMARK__31850,g_31851,mkg_31852){
return (function cljs$spec$impl$gen$generate(generator){
return cljs.core.deref.call(null,g_31851).call(null,generator);
});})(g_QMARK__31850,g_31851,mkg_31852))
;
cljs.spec.impl.gen.delay_impl = (function cljs$spec$impl$gen$delay_impl(gfnd){
return cljs.spec.impl.gen.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__31814__auto___31871 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.impl.gen.hash_map = ((function (g__31814__auto___31871){
return (function cljs$spec$impl$gen$hash_map(var_args){
var args__25843__auto__ = [];
var len__25836__auto___31872 = arguments.length;
var i__25837__auto___31873 = (0);
while(true){
if((i__25837__auto___31873 < len__25836__auto___31872)){
args__25843__auto__.push((arguments[i__25837__auto___31873]));

var G__31874 = (i__25837__auto___31873 + (1));
i__25837__auto___31873 = G__31874;
continue;
} else {
}
break;
}

var argseq__25844__auto__ = ((((0) < args__25843__auto__.length))?(new cljs.core.IndexedSeq(args__25843__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__25844__auto__);
});})(g__31814__auto___31871))
;

cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31814__auto___31871){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31814__auto___31871),args);
});})(g__31814__auto___31871))
;

cljs.spec.impl.gen.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.hash_map.cljs$lang$applyTo = ((function (g__31814__auto___31871){
return (function (seq31853){
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31853));
});})(g__31814__auto___31871))
;


var g__31814__auto___31875 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.impl.gen.list = ((function (g__31814__auto___31875){
return (function cljs$spec$impl$gen$list(var_args){
var args__25843__auto__ = [];
var len__25836__auto___31876 = arguments.length;
var i__25837__auto___31877 = (0);
while(true){
if((i__25837__auto___31877 < len__25836__auto___31876)){
args__25843__auto__.push((arguments[i__25837__auto___31877]));

var G__31878 = (i__25837__auto___31877 + (1));
i__25837__auto___31877 = G__31878;
continue;
} else {
}
break;
}

var argseq__25844__auto__ = ((((0) < args__25843__auto__.length))?(new cljs.core.IndexedSeq(args__25843__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(argseq__25844__auto__);
});})(g__31814__auto___31875))
;

cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31814__auto___31875){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31814__auto___31875),args);
});})(g__31814__auto___31875))
;

cljs.spec.impl.gen.list.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.list.cljs$lang$applyTo = ((function (g__31814__auto___31875){
return (function (seq31854){
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31854));
});})(g__31814__auto___31875))
;


var g__31814__auto___31879 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.impl.gen.map = ((function (g__31814__auto___31879){
return (function cljs$spec$impl$gen$map(var_args){
var args__25843__auto__ = [];
var len__25836__auto___31880 = arguments.length;
var i__25837__auto___31881 = (0);
while(true){
if((i__25837__auto___31881 < len__25836__auto___31880)){
args__25843__auto__.push((arguments[i__25837__auto___31881]));

var G__31882 = (i__25837__auto___31881 + (1));
i__25837__auto___31881 = G__31882;
continue;
} else {
}
break;
}

var argseq__25844__auto__ = ((((0) < args__25843__auto__.length))?(new cljs.core.IndexedSeq(args__25843__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(argseq__25844__auto__);
});})(g__31814__auto___31879))
;

cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31814__auto___31879){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31814__auto___31879),args);
});})(g__31814__auto___31879))
;

cljs.spec.impl.gen.map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.map.cljs$lang$applyTo = ((function (g__31814__auto___31879){
return (function (seq31855){
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31855));
});})(g__31814__auto___31879))
;


var g__31814__auto___31883 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.impl.gen.not_empty = ((function (g__31814__auto___31883){
return (function cljs$spec$impl$gen$not_empty(var_args){
var args__25843__auto__ = [];
var len__25836__auto___31884 = arguments.length;
var i__25837__auto___31885 = (0);
while(true){
if((i__25837__auto___31885 < len__25836__auto___31884)){
args__25843__auto__.push((arguments[i__25837__auto___31885]));

var G__31886 = (i__25837__auto___31885 + (1));
i__25837__auto___31885 = G__31886;
continue;
} else {
}
break;
}

var argseq__25844__auto__ = ((((0) < args__25843__auto__.length))?(new cljs.core.IndexedSeq(args__25843__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__25844__auto__);
});})(g__31814__auto___31883))
;

cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31814__auto___31883){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31814__auto___31883),args);
});})(g__31814__auto___31883))
;

cljs.spec.impl.gen.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.not_empty.cljs$lang$applyTo = ((function (g__31814__auto___31883){
return (function (seq31856){
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31856));
});})(g__31814__auto___31883))
;


var g__31814__auto___31887 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.impl.gen.set = ((function (g__31814__auto___31887){
return (function cljs$spec$impl$gen$set(var_args){
var args__25843__auto__ = [];
var len__25836__auto___31888 = arguments.length;
var i__25837__auto___31889 = (0);
while(true){
if((i__25837__auto___31889 < len__25836__auto___31888)){
args__25843__auto__.push((arguments[i__25837__auto___31889]));

var G__31890 = (i__25837__auto___31889 + (1));
i__25837__auto___31889 = G__31890;
continue;
} else {
}
break;
}

var argseq__25844__auto__ = ((((0) < args__25843__auto__.length))?(new cljs.core.IndexedSeq(args__25843__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(argseq__25844__auto__);
});})(g__31814__auto___31887))
;

cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31814__auto___31887){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31814__auto___31887),args);
});})(g__31814__auto___31887))
;

cljs.spec.impl.gen.set.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.set.cljs$lang$applyTo = ((function (g__31814__auto___31887){
return (function (seq31857){
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31857));
});})(g__31814__auto___31887))
;


var g__31814__auto___31891 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.impl.gen.vector = ((function (g__31814__auto___31891){
return (function cljs$spec$impl$gen$vector(var_args){
var args__25843__auto__ = [];
var len__25836__auto___31892 = arguments.length;
var i__25837__auto___31893 = (0);
while(true){
if((i__25837__auto___31893 < len__25836__auto___31892)){
args__25843__auto__.push((arguments[i__25837__auto___31893]));

var G__31894 = (i__25837__auto___31893 + (1));
i__25837__auto___31893 = G__31894;
continue;
} else {
}
break;
}

var argseq__25844__auto__ = ((((0) < args__25843__auto__.length))?(new cljs.core.IndexedSeq(args__25843__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__25844__auto__);
});})(g__31814__auto___31891))
;

cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31814__auto___31891){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31814__auto___31891),args);
});})(g__31814__auto___31891))
;

cljs.spec.impl.gen.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector.cljs$lang$applyTo = ((function (g__31814__auto___31891){
return (function (seq31858){
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31858));
});})(g__31814__auto___31891))
;


var g__31814__auto___31895 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.impl.gen.vector_distinct = ((function (g__31814__auto___31895){
return (function cljs$spec$impl$gen$vector_distinct(var_args){
var args__25843__auto__ = [];
var len__25836__auto___31896 = arguments.length;
var i__25837__auto___31897 = (0);
while(true){
if((i__25837__auto___31897 < len__25836__auto___31896)){
args__25843__auto__.push((arguments[i__25837__auto___31897]));

var G__31898 = (i__25837__auto___31897 + (1));
i__25837__auto___31897 = G__31898;
continue;
} else {
}
break;
}

var argseq__25844__auto__ = ((((0) < args__25843__auto__.length))?(new cljs.core.IndexedSeq(args__25843__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__25844__auto__);
});})(g__31814__auto___31895))
;

cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31814__auto___31895){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31814__auto___31895),args);
});})(g__31814__auto___31895))
;

cljs.spec.impl.gen.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector_distinct.cljs$lang$applyTo = ((function (g__31814__auto___31895){
return (function (seq31859){
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31859));
});})(g__31814__auto___31895))
;


var g__31814__auto___31899 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.impl.gen.fmap = ((function (g__31814__auto___31899){
return (function cljs$spec$impl$gen$fmap(var_args){
var args__25843__auto__ = [];
var len__25836__auto___31900 = arguments.length;
var i__25837__auto___31901 = (0);
while(true){
if((i__25837__auto___31901 < len__25836__auto___31900)){
args__25843__auto__.push((arguments[i__25837__auto___31901]));

var G__31902 = (i__25837__auto___31901 + (1));
i__25837__auto___31901 = G__31902;
continue;
} else {
}
break;
}

var argseq__25844__auto__ = ((((0) < args__25843__auto__.length))?(new cljs.core.IndexedSeq(args__25843__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__25844__auto__);
});})(g__31814__auto___31899))
;

cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31814__auto___31899){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31814__auto___31899),args);
});})(g__31814__auto___31899))
;

cljs.spec.impl.gen.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.fmap.cljs$lang$applyTo = ((function (g__31814__auto___31899){
return (function (seq31860){
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31860));
});})(g__31814__auto___31899))
;


var g__31814__auto___31903 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.impl.gen.elements = ((function (g__31814__auto___31903){
return (function cljs$spec$impl$gen$elements(var_args){
var args__25843__auto__ = [];
var len__25836__auto___31904 = arguments.length;
var i__25837__auto___31905 = (0);
while(true){
if((i__25837__auto___31905 < len__25836__auto___31904)){
args__25843__auto__.push((arguments[i__25837__auto___31905]));

var G__31906 = (i__25837__auto___31905 + (1));
i__25837__auto___31905 = G__31906;
continue;
} else {
}
break;
}

var argseq__25844__auto__ = ((((0) < args__25843__auto__.length))?(new cljs.core.IndexedSeq(args__25843__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__25844__auto__);
});})(g__31814__auto___31903))
;

cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31814__auto___31903){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31814__auto___31903),args);
});})(g__31814__auto___31903))
;

cljs.spec.impl.gen.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.elements.cljs$lang$applyTo = ((function (g__31814__auto___31903){
return (function (seq31861){
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31861));
});})(g__31814__auto___31903))
;


var g__31814__auto___31907 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.impl.gen.bind = ((function (g__31814__auto___31907){
return (function cljs$spec$impl$gen$bind(var_args){
var args__25843__auto__ = [];
var len__25836__auto___31908 = arguments.length;
var i__25837__auto___31909 = (0);
while(true){
if((i__25837__auto___31909 < len__25836__auto___31908)){
args__25843__auto__.push((arguments[i__25837__auto___31909]));

var G__31910 = (i__25837__auto___31909 + (1));
i__25837__auto___31909 = G__31910;
continue;
} else {
}
break;
}

var argseq__25844__auto__ = ((((0) < args__25843__auto__.length))?(new cljs.core.IndexedSeq(args__25843__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__25844__auto__);
});})(g__31814__auto___31907))
;

cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31814__auto___31907){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31814__auto___31907),args);
});})(g__31814__auto___31907))
;

cljs.spec.impl.gen.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.bind.cljs$lang$applyTo = ((function (g__31814__auto___31907){
return (function (seq31862){
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31862));
});})(g__31814__auto___31907))
;


var g__31814__auto___31911 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.impl.gen.choose = ((function (g__31814__auto___31911){
return (function cljs$spec$impl$gen$choose(var_args){
var args__25843__auto__ = [];
var len__25836__auto___31912 = arguments.length;
var i__25837__auto___31913 = (0);
while(true){
if((i__25837__auto___31913 < len__25836__auto___31912)){
args__25843__auto__.push((arguments[i__25837__auto___31913]));

var G__31914 = (i__25837__auto___31913 + (1));
i__25837__auto___31913 = G__31914;
continue;
} else {
}
break;
}

var argseq__25844__auto__ = ((((0) < args__25843__auto__.length))?(new cljs.core.IndexedSeq(args__25843__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__25844__auto__);
});})(g__31814__auto___31911))
;

cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31814__auto___31911){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31814__auto___31911),args);
});})(g__31814__auto___31911))
;

cljs.spec.impl.gen.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.choose.cljs$lang$applyTo = ((function (g__31814__auto___31911){
return (function (seq31863){
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31863));
});})(g__31814__auto___31911))
;


var g__31814__auto___31915 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.impl.gen.one_of = ((function (g__31814__auto___31915){
return (function cljs$spec$impl$gen$one_of(var_args){
var args__25843__auto__ = [];
var len__25836__auto___31916 = arguments.length;
var i__25837__auto___31917 = (0);
while(true){
if((i__25837__auto___31917 < len__25836__auto___31916)){
args__25843__auto__.push((arguments[i__25837__auto___31917]));

var G__31918 = (i__25837__auto___31917 + (1));
i__25837__auto___31917 = G__31918;
continue;
} else {
}
break;
}

var argseq__25844__auto__ = ((((0) < args__25843__auto__.length))?(new cljs.core.IndexedSeq(args__25843__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__25844__auto__);
});})(g__31814__auto___31915))
;

cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31814__auto___31915){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31814__auto___31915),args);
});})(g__31814__auto___31915))
;

cljs.spec.impl.gen.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.one_of.cljs$lang$applyTo = ((function (g__31814__auto___31915){
return (function (seq31864){
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31864));
});})(g__31814__auto___31915))
;


var g__31814__auto___31919 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.impl.gen.such_that = ((function (g__31814__auto___31919){
return (function cljs$spec$impl$gen$such_that(var_args){
var args__25843__auto__ = [];
var len__25836__auto___31920 = arguments.length;
var i__25837__auto___31921 = (0);
while(true){
if((i__25837__auto___31921 < len__25836__auto___31920)){
args__25843__auto__.push((arguments[i__25837__auto___31921]));

var G__31922 = (i__25837__auto___31921 + (1));
i__25837__auto___31921 = G__31922;
continue;
} else {
}
break;
}

var argseq__25844__auto__ = ((((0) < args__25843__auto__.length))?(new cljs.core.IndexedSeq(args__25843__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__25844__auto__);
});})(g__31814__auto___31919))
;

cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31814__auto___31919){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31814__auto___31919),args);
});})(g__31814__auto___31919))
;

cljs.spec.impl.gen.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.such_that.cljs$lang$applyTo = ((function (g__31814__auto___31919){
return (function (seq31865){
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31865));
});})(g__31814__auto___31919))
;


var g__31814__auto___31923 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.impl.gen.tuple = ((function (g__31814__auto___31923){
return (function cljs$spec$impl$gen$tuple(var_args){
var args__25843__auto__ = [];
var len__25836__auto___31924 = arguments.length;
var i__25837__auto___31925 = (0);
while(true){
if((i__25837__auto___31925 < len__25836__auto___31924)){
args__25843__auto__.push((arguments[i__25837__auto___31925]));

var G__31926 = (i__25837__auto___31925 + (1));
i__25837__auto___31925 = G__31926;
continue;
} else {
}
break;
}

var argseq__25844__auto__ = ((((0) < args__25843__auto__.length))?(new cljs.core.IndexedSeq(args__25843__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__25844__auto__);
});})(g__31814__auto___31923))
;

cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31814__auto___31923){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31814__auto___31923),args);
});})(g__31814__auto___31923))
;

cljs.spec.impl.gen.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.tuple.cljs$lang$applyTo = ((function (g__31814__auto___31923){
return (function (seq31866){
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31866));
});})(g__31814__auto___31923))
;


var g__31814__auto___31927 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.impl.gen.sample = ((function (g__31814__auto___31927){
return (function cljs$spec$impl$gen$sample(var_args){
var args__25843__auto__ = [];
var len__25836__auto___31928 = arguments.length;
var i__25837__auto___31929 = (0);
while(true){
if((i__25837__auto___31929 < len__25836__auto___31928)){
args__25843__auto__.push((arguments[i__25837__auto___31929]));

var G__31930 = (i__25837__auto___31929 + (1));
i__25837__auto___31929 = G__31930;
continue;
} else {
}
break;
}

var argseq__25844__auto__ = ((((0) < args__25843__auto__.length))?(new cljs.core.IndexedSeq(args__25843__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__25844__auto__);
});})(g__31814__auto___31927))
;

cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31814__auto___31927){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31814__auto___31927),args);
});})(g__31814__auto___31927))
;

cljs.spec.impl.gen.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.sample.cljs$lang$applyTo = ((function (g__31814__auto___31927){
return (function (seq31867){
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31867));
});})(g__31814__auto___31927))
;


var g__31814__auto___31931 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.impl.gen.return$ = ((function (g__31814__auto___31931){
return (function cljs$spec$impl$gen$return(var_args){
var args__25843__auto__ = [];
var len__25836__auto___31932 = arguments.length;
var i__25837__auto___31933 = (0);
while(true){
if((i__25837__auto___31933 < len__25836__auto___31932)){
args__25843__auto__.push((arguments[i__25837__auto___31933]));

var G__31934 = (i__25837__auto___31933 + (1));
i__25837__auto___31933 = G__31934;
continue;
} else {
}
break;
}

var argseq__25844__auto__ = ((((0) < args__25843__auto__.length))?(new cljs.core.IndexedSeq(args__25843__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__25844__auto__);
});})(g__31814__auto___31931))
;

cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31814__auto___31931){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31814__auto___31931),args);
});})(g__31814__auto___31931))
;

cljs.spec.impl.gen.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.return$.cljs$lang$applyTo = ((function (g__31814__auto___31931){
return (function (seq31868){
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31868));
});})(g__31814__auto___31931))
;


var g__31814__auto___31935 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.impl.gen.large_integer_STAR_ = ((function (g__31814__auto___31935){
return (function cljs$spec$impl$gen$large_integer_STAR_(var_args){
var args__25843__auto__ = [];
var len__25836__auto___31936 = arguments.length;
var i__25837__auto___31937 = (0);
while(true){
if((i__25837__auto___31937 < len__25836__auto___31936)){
args__25843__auto__.push((arguments[i__25837__auto___31937]));

var G__31938 = (i__25837__auto___31937 + (1));
i__25837__auto___31937 = G__31938;
continue;
} else {
}
break;
}

var argseq__25844__auto__ = ((((0) < args__25843__auto__.length))?(new cljs.core.IndexedSeq(args__25843__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__25844__auto__);
});})(g__31814__auto___31935))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31814__auto___31935){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31814__auto___31935),args);
});})(g__31814__auto___31935))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$applyTo = ((function (g__31814__auto___31935){
return (function (seq31869){
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31869));
});})(g__31814__auto___31935))
;


var g__31814__auto___31939 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.impl.gen.double_STAR_ = ((function (g__31814__auto___31939){
return (function cljs$spec$impl$gen$double_STAR_(var_args){
var args__25843__auto__ = [];
var len__25836__auto___31940 = arguments.length;
var i__25837__auto___31941 = (0);
while(true){
if((i__25837__auto___31941 < len__25836__auto___31940)){
args__25843__auto__.push((arguments[i__25837__auto___31941]));

var G__31942 = (i__25837__auto___31941 + (1));
i__25837__auto___31941 = G__31942;
continue;
} else {
}
break;
}

var argseq__25844__auto__ = ((((0) < args__25843__auto__.length))?(new cljs.core.IndexedSeq(args__25843__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__25844__auto__);
});})(g__31814__auto___31939))
;

cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31814__auto___31939){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31814__auto___31939),args);
});})(g__31814__auto___31939))
;

cljs.spec.impl.gen.double_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double_STAR_.cljs$lang$applyTo = ((function (g__31814__auto___31939){
return (function (seq31870){
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31870));
});})(g__31814__auto___31939))
;

var g__31827__auto___31964 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.impl.gen.any = ((function (g__31827__auto___31964){
return (function cljs$spec$impl$gen$any(var_args){
var args__25843__auto__ = [];
var len__25836__auto___31965 = arguments.length;
var i__25837__auto___31966 = (0);
while(true){
if((i__25837__auto___31966 < len__25836__auto___31965)){
args__25843__auto__.push((arguments[i__25837__auto___31966]));

var G__31967 = (i__25837__auto___31966 + (1));
i__25837__auto___31966 = G__31967;
continue;
} else {
}
break;
}

var argseq__25844__auto__ = ((((0) < args__25843__auto__.length))?(new cljs.core.IndexedSeq(args__25843__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(argseq__25844__auto__);
});})(g__31827__auto___31964))
;

cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31827__auto___31964){
return (function (args){
return cljs.core.deref.call(null,g__31827__auto___31964);
});})(g__31827__auto___31964))
;

cljs.spec.impl.gen.any.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any.cljs$lang$applyTo = ((function (g__31827__auto___31964){
return (function (seq31943){
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31943));
});})(g__31827__auto___31964))
;


var g__31827__auto___31968 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.impl.gen.any_printable = ((function (g__31827__auto___31968){
return (function cljs$spec$impl$gen$any_printable(var_args){
var args__25843__auto__ = [];
var len__25836__auto___31969 = arguments.length;
var i__25837__auto___31970 = (0);
while(true){
if((i__25837__auto___31970 < len__25836__auto___31969)){
args__25843__auto__.push((arguments[i__25837__auto___31970]));

var G__31971 = (i__25837__auto___31970 + (1));
i__25837__auto___31970 = G__31971;
continue;
} else {
}
break;
}

var argseq__25844__auto__ = ((((0) < args__25843__auto__.length))?(new cljs.core.IndexedSeq(args__25843__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__25844__auto__);
});})(g__31827__auto___31968))
;

cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31827__auto___31968){
return (function (args){
return cljs.core.deref.call(null,g__31827__auto___31968);
});})(g__31827__auto___31968))
;

cljs.spec.impl.gen.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any_printable.cljs$lang$applyTo = ((function (g__31827__auto___31968){
return (function (seq31944){
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31944));
});})(g__31827__auto___31968))
;


var g__31827__auto___31972 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.impl.gen.boolean$ = ((function (g__31827__auto___31972){
return (function cljs$spec$impl$gen$boolean(var_args){
var args__25843__auto__ = [];
var len__25836__auto___31973 = arguments.length;
var i__25837__auto___31974 = (0);
while(true){
if((i__25837__auto___31974 < len__25836__auto___31973)){
args__25843__auto__.push((arguments[i__25837__auto___31974]));

var G__31975 = (i__25837__auto___31974 + (1));
i__25837__auto___31974 = G__31975;
continue;
} else {
}
break;
}

var argseq__25844__auto__ = ((((0) < args__25843__auto__.length))?(new cljs.core.IndexedSeq(args__25843__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__25844__auto__);
});})(g__31827__auto___31972))
;

cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31827__auto___31972){
return (function (args){
return cljs.core.deref.call(null,g__31827__auto___31972);
});})(g__31827__auto___31972))
;

cljs.spec.impl.gen.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.boolean$.cljs$lang$applyTo = ((function (g__31827__auto___31972){
return (function (seq31945){
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31945));
});})(g__31827__auto___31972))
;


var g__31827__auto___31976 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.impl.gen.char$ = ((function (g__31827__auto___31976){
return (function cljs$spec$impl$gen$char(var_args){
var args__25843__auto__ = [];
var len__25836__auto___31977 = arguments.length;
var i__25837__auto___31978 = (0);
while(true){
if((i__25837__auto___31978 < len__25836__auto___31977)){
args__25843__auto__.push((arguments[i__25837__auto___31978]));

var G__31979 = (i__25837__auto___31978 + (1));
i__25837__auto___31978 = G__31979;
continue;
} else {
}
break;
}

var argseq__25844__auto__ = ((((0) < args__25843__auto__.length))?(new cljs.core.IndexedSeq(args__25843__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__25844__auto__);
});})(g__31827__auto___31976))
;

cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31827__auto___31976){
return (function (args){
return cljs.core.deref.call(null,g__31827__auto___31976);
});})(g__31827__auto___31976))
;

cljs.spec.impl.gen.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char$.cljs$lang$applyTo = ((function (g__31827__auto___31976){
return (function (seq31946){
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31946));
});})(g__31827__auto___31976))
;


var g__31827__auto___31980 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.impl.gen.char_alpha = ((function (g__31827__auto___31980){
return (function cljs$spec$impl$gen$char_alpha(var_args){
var args__25843__auto__ = [];
var len__25836__auto___31981 = arguments.length;
var i__25837__auto___31982 = (0);
while(true){
if((i__25837__auto___31982 < len__25836__auto___31981)){
args__25843__auto__.push((arguments[i__25837__auto___31982]));

var G__31983 = (i__25837__auto___31982 + (1));
i__25837__auto___31982 = G__31983;
continue;
} else {
}
break;
}

var argseq__25844__auto__ = ((((0) < args__25843__auto__.length))?(new cljs.core.IndexedSeq(args__25843__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__25844__auto__);
});})(g__31827__auto___31980))
;

cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31827__auto___31980){
return (function (args){
return cljs.core.deref.call(null,g__31827__auto___31980);
});})(g__31827__auto___31980))
;

cljs.spec.impl.gen.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alpha.cljs$lang$applyTo = ((function (g__31827__auto___31980){
return (function (seq31947){
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31947));
});})(g__31827__auto___31980))
;


var g__31827__auto___31984 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.impl.gen.char_alphanumeric = ((function (g__31827__auto___31984){
return (function cljs$spec$impl$gen$char_alphanumeric(var_args){
var args__25843__auto__ = [];
var len__25836__auto___31985 = arguments.length;
var i__25837__auto___31986 = (0);
while(true){
if((i__25837__auto___31986 < len__25836__auto___31985)){
args__25843__auto__.push((arguments[i__25837__auto___31986]));

var G__31987 = (i__25837__auto___31986 + (1));
i__25837__auto___31986 = G__31987;
continue;
} else {
}
break;
}

var argseq__25844__auto__ = ((((0) < args__25843__auto__.length))?(new cljs.core.IndexedSeq(args__25843__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__25844__auto__);
});})(g__31827__auto___31984))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31827__auto___31984){
return (function (args){
return cljs.core.deref.call(null,g__31827__auto___31984);
});})(g__31827__auto___31984))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$applyTo = ((function (g__31827__auto___31984){
return (function (seq31948){
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31948));
});})(g__31827__auto___31984))
;


var g__31827__auto___31988 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.impl.gen.char_ascii = ((function (g__31827__auto___31988){
return (function cljs$spec$impl$gen$char_ascii(var_args){
var args__25843__auto__ = [];
var len__25836__auto___31989 = arguments.length;
var i__25837__auto___31990 = (0);
while(true){
if((i__25837__auto___31990 < len__25836__auto___31989)){
args__25843__auto__.push((arguments[i__25837__auto___31990]));

var G__31991 = (i__25837__auto___31990 + (1));
i__25837__auto___31990 = G__31991;
continue;
} else {
}
break;
}

var argseq__25844__auto__ = ((((0) < args__25843__auto__.length))?(new cljs.core.IndexedSeq(args__25843__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__25844__auto__);
});})(g__31827__auto___31988))
;

cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31827__auto___31988){
return (function (args){
return cljs.core.deref.call(null,g__31827__auto___31988);
});})(g__31827__auto___31988))
;

cljs.spec.impl.gen.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_ascii.cljs$lang$applyTo = ((function (g__31827__auto___31988){
return (function (seq31949){
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31949));
});})(g__31827__auto___31988))
;


var g__31827__auto___31992 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.impl.gen.double$ = ((function (g__31827__auto___31992){
return (function cljs$spec$impl$gen$double(var_args){
var args__25843__auto__ = [];
var len__25836__auto___31993 = arguments.length;
var i__25837__auto___31994 = (0);
while(true){
if((i__25837__auto___31994 < len__25836__auto___31993)){
args__25843__auto__.push((arguments[i__25837__auto___31994]));

var G__31995 = (i__25837__auto___31994 + (1));
i__25837__auto___31994 = G__31995;
continue;
} else {
}
break;
}

var argseq__25844__auto__ = ((((0) < args__25843__auto__.length))?(new cljs.core.IndexedSeq(args__25843__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__25844__auto__);
});})(g__31827__auto___31992))
;

cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31827__auto___31992){
return (function (args){
return cljs.core.deref.call(null,g__31827__auto___31992);
});})(g__31827__auto___31992))
;

cljs.spec.impl.gen.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double$.cljs$lang$applyTo = ((function (g__31827__auto___31992){
return (function (seq31950){
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31950));
});})(g__31827__auto___31992))
;


var g__31827__auto___31996 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.impl.gen.int$ = ((function (g__31827__auto___31996){
return (function cljs$spec$impl$gen$int(var_args){
var args__25843__auto__ = [];
var len__25836__auto___31997 = arguments.length;
var i__25837__auto___31998 = (0);
while(true){
if((i__25837__auto___31998 < len__25836__auto___31997)){
args__25843__auto__.push((arguments[i__25837__auto___31998]));

var G__31999 = (i__25837__auto___31998 + (1));
i__25837__auto___31998 = G__31999;
continue;
} else {
}
break;
}

var argseq__25844__auto__ = ((((0) < args__25843__auto__.length))?(new cljs.core.IndexedSeq(args__25843__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__25844__auto__);
});})(g__31827__auto___31996))
;

cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31827__auto___31996){
return (function (args){
return cljs.core.deref.call(null,g__31827__auto___31996);
});})(g__31827__auto___31996))
;

cljs.spec.impl.gen.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.int$.cljs$lang$applyTo = ((function (g__31827__auto___31996){
return (function (seq31951){
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31951));
});})(g__31827__auto___31996))
;


var g__31827__auto___32000 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.impl.gen.keyword = ((function (g__31827__auto___32000){
return (function cljs$spec$impl$gen$keyword(var_args){
var args__25843__auto__ = [];
var len__25836__auto___32001 = arguments.length;
var i__25837__auto___32002 = (0);
while(true){
if((i__25837__auto___32002 < len__25836__auto___32001)){
args__25843__auto__.push((arguments[i__25837__auto___32002]));

var G__32003 = (i__25837__auto___32002 + (1));
i__25837__auto___32002 = G__32003;
continue;
} else {
}
break;
}

var argseq__25844__auto__ = ((((0) < args__25843__auto__.length))?(new cljs.core.IndexedSeq(args__25843__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__25844__auto__);
});})(g__31827__auto___32000))
;

cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31827__auto___32000){
return (function (args){
return cljs.core.deref.call(null,g__31827__auto___32000);
});})(g__31827__auto___32000))
;

cljs.spec.impl.gen.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword.cljs$lang$applyTo = ((function (g__31827__auto___32000){
return (function (seq31952){
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31952));
});})(g__31827__auto___32000))
;


var g__31827__auto___32004 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.impl.gen.keyword_ns = ((function (g__31827__auto___32004){
return (function cljs$spec$impl$gen$keyword_ns(var_args){
var args__25843__auto__ = [];
var len__25836__auto___32005 = arguments.length;
var i__25837__auto___32006 = (0);
while(true){
if((i__25837__auto___32006 < len__25836__auto___32005)){
args__25843__auto__.push((arguments[i__25837__auto___32006]));

var G__32007 = (i__25837__auto___32006 + (1));
i__25837__auto___32006 = G__32007;
continue;
} else {
}
break;
}

var argseq__25844__auto__ = ((((0) < args__25843__auto__.length))?(new cljs.core.IndexedSeq(args__25843__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__25844__auto__);
});})(g__31827__auto___32004))
;

cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31827__auto___32004){
return (function (args){
return cljs.core.deref.call(null,g__31827__auto___32004);
});})(g__31827__auto___32004))
;

cljs.spec.impl.gen.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword_ns.cljs$lang$applyTo = ((function (g__31827__auto___32004){
return (function (seq31953){
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31953));
});})(g__31827__auto___32004))
;


var g__31827__auto___32008 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.impl.gen.large_integer = ((function (g__31827__auto___32008){
return (function cljs$spec$impl$gen$large_integer(var_args){
var args__25843__auto__ = [];
var len__25836__auto___32009 = arguments.length;
var i__25837__auto___32010 = (0);
while(true){
if((i__25837__auto___32010 < len__25836__auto___32009)){
args__25843__auto__.push((arguments[i__25837__auto___32010]));

var G__32011 = (i__25837__auto___32010 + (1));
i__25837__auto___32010 = G__32011;
continue;
} else {
}
break;
}

var argseq__25844__auto__ = ((((0) < args__25843__auto__.length))?(new cljs.core.IndexedSeq(args__25843__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__25844__auto__);
});})(g__31827__auto___32008))
;

cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31827__auto___32008){
return (function (args){
return cljs.core.deref.call(null,g__31827__auto___32008);
});})(g__31827__auto___32008))
;

cljs.spec.impl.gen.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer.cljs$lang$applyTo = ((function (g__31827__auto___32008){
return (function (seq31954){
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31954));
});})(g__31827__auto___32008))
;


var g__31827__auto___32012 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.impl.gen.ratio = ((function (g__31827__auto___32012){
return (function cljs$spec$impl$gen$ratio(var_args){
var args__25843__auto__ = [];
var len__25836__auto___32013 = arguments.length;
var i__25837__auto___32014 = (0);
while(true){
if((i__25837__auto___32014 < len__25836__auto___32013)){
args__25843__auto__.push((arguments[i__25837__auto___32014]));

var G__32015 = (i__25837__auto___32014 + (1));
i__25837__auto___32014 = G__32015;
continue;
} else {
}
break;
}

var argseq__25844__auto__ = ((((0) < args__25843__auto__.length))?(new cljs.core.IndexedSeq(args__25843__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__25844__auto__);
});})(g__31827__auto___32012))
;

cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31827__auto___32012){
return (function (args){
return cljs.core.deref.call(null,g__31827__auto___32012);
});})(g__31827__auto___32012))
;

cljs.spec.impl.gen.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.ratio.cljs$lang$applyTo = ((function (g__31827__auto___32012){
return (function (seq31955){
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31955));
});})(g__31827__auto___32012))
;


var g__31827__auto___32016 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.impl.gen.simple_type = ((function (g__31827__auto___32016){
return (function cljs$spec$impl$gen$simple_type(var_args){
var args__25843__auto__ = [];
var len__25836__auto___32017 = arguments.length;
var i__25837__auto___32018 = (0);
while(true){
if((i__25837__auto___32018 < len__25836__auto___32017)){
args__25843__auto__.push((arguments[i__25837__auto___32018]));

var G__32019 = (i__25837__auto___32018 + (1));
i__25837__auto___32018 = G__32019;
continue;
} else {
}
break;
}

var argseq__25844__auto__ = ((((0) < args__25843__auto__.length))?(new cljs.core.IndexedSeq(args__25843__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__25844__auto__);
});})(g__31827__auto___32016))
;

cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31827__auto___32016){
return (function (args){
return cljs.core.deref.call(null,g__31827__auto___32016);
});})(g__31827__auto___32016))
;

cljs.spec.impl.gen.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type.cljs$lang$applyTo = ((function (g__31827__auto___32016){
return (function (seq31956){
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31956));
});})(g__31827__auto___32016))
;


var g__31827__auto___32020 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.impl.gen.simple_type_printable = ((function (g__31827__auto___32020){
return (function cljs$spec$impl$gen$simple_type_printable(var_args){
var args__25843__auto__ = [];
var len__25836__auto___32021 = arguments.length;
var i__25837__auto___32022 = (0);
while(true){
if((i__25837__auto___32022 < len__25836__auto___32021)){
args__25843__auto__.push((arguments[i__25837__auto___32022]));

var G__32023 = (i__25837__auto___32022 + (1));
i__25837__auto___32022 = G__32023;
continue;
} else {
}
break;
}

var argseq__25844__auto__ = ((((0) < args__25843__auto__.length))?(new cljs.core.IndexedSeq(args__25843__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__25844__auto__);
});})(g__31827__auto___32020))
;

cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31827__auto___32020){
return (function (args){
return cljs.core.deref.call(null,g__31827__auto___32020);
});})(g__31827__auto___32020))
;

cljs.spec.impl.gen.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type_printable.cljs$lang$applyTo = ((function (g__31827__auto___32020){
return (function (seq31957){
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31957));
});})(g__31827__auto___32020))
;


var g__31827__auto___32024 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.impl.gen.string = ((function (g__31827__auto___32024){
return (function cljs$spec$impl$gen$string(var_args){
var args__25843__auto__ = [];
var len__25836__auto___32025 = arguments.length;
var i__25837__auto___32026 = (0);
while(true){
if((i__25837__auto___32026 < len__25836__auto___32025)){
args__25843__auto__.push((arguments[i__25837__auto___32026]));

var G__32027 = (i__25837__auto___32026 + (1));
i__25837__auto___32026 = G__32027;
continue;
} else {
}
break;
}

var argseq__25844__auto__ = ((((0) < args__25843__auto__.length))?(new cljs.core.IndexedSeq(args__25843__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(argseq__25844__auto__);
});})(g__31827__auto___32024))
;

cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31827__auto___32024){
return (function (args){
return cljs.core.deref.call(null,g__31827__auto___32024);
});})(g__31827__auto___32024))
;

cljs.spec.impl.gen.string.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string.cljs$lang$applyTo = ((function (g__31827__auto___32024){
return (function (seq31958){
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31958));
});})(g__31827__auto___32024))
;


var g__31827__auto___32028 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.impl.gen.string_ascii = ((function (g__31827__auto___32028){
return (function cljs$spec$impl$gen$string_ascii(var_args){
var args__25843__auto__ = [];
var len__25836__auto___32029 = arguments.length;
var i__25837__auto___32030 = (0);
while(true){
if((i__25837__auto___32030 < len__25836__auto___32029)){
args__25843__auto__.push((arguments[i__25837__auto___32030]));

var G__32031 = (i__25837__auto___32030 + (1));
i__25837__auto___32030 = G__32031;
continue;
} else {
}
break;
}

var argseq__25844__auto__ = ((((0) < args__25843__auto__.length))?(new cljs.core.IndexedSeq(args__25843__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__25844__auto__);
});})(g__31827__auto___32028))
;

cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31827__auto___32028){
return (function (args){
return cljs.core.deref.call(null,g__31827__auto___32028);
});})(g__31827__auto___32028))
;

cljs.spec.impl.gen.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_ascii.cljs$lang$applyTo = ((function (g__31827__auto___32028){
return (function (seq31959){
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31959));
});})(g__31827__auto___32028))
;


var g__31827__auto___32032 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.impl.gen.string_alphanumeric = ((function (g__31827__auto___32032){
return (function cljs$spec$impl$gen$string_alphanumeric(var_args){
var args__25843__auto__ = [];
var len__25836__auto___32033 = arguments.length;
var i__25837__auto___32034 = (0);
while(true){
if((i__25837__auto___32034 < len__25836__auto___32033)){
args__25843__auto__.push((arguments[i__25837__auto___32034]));

var G__32035 = (i__25837__auto___32034 + (1));
i__25837__auto___32034 = G__32035;
continue;
} else {
}
break;
}

var argseq__25844__auto__ = ((((0) < args__25843__auto__.length))?(new cljs.core.IndexedSeq(args__25843__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__25844__auto__);
});})(g__31827__auto___32032))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31827__auto___32032){
return (function (args){
return cljs.core.deref.call(null,g__31827__auto___32032);
});})(g__31827__auto___32032))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$applyTo = ((function (g__31827__auto___32032){
return (function (seq31960){
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31960));
});})(g__31827__auto___32032))
;


var g__31827__auto___32036 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.impl.gen.symbol = ((function (g__31827__auto___32036){
return (function cljs$spec$impl$gen$symbol(var_args){
var args__25843__auto__ = [];
var len__25836__auto___32037 = arguments.length;
var i__25837__auto___32038 = (0);
while(true){
if((i__25837__auto___32038 < len__25836__auto___32037)){
args__25843__auto__.push((arguments[i__25837__auto___32038]));

var G__32039 = (i__25837__auto___32038 + (1));
i__25837__auto___32038 = G__32039;
continue;
} else {
}
break;
}

var argseq__25844__auto__ = ((((0) < args__25843__auto__.length))?(new cljs.core.IndexedSeq(args__25843__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__25844__auto__);
});})(g__31827__auto___32036))
;

cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31827__auto___32036){
return (function (args){
return cljs.core.deref.call(null,g__31827__auto___32036);
});})(g__31827__auto___32036))
;

cljs.spec.impl.gen.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol.cljs$lang$applyTo = ((function (g__31827__auto___32036){
return (function (seq31961){
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31961));
});})(g__31827__auto___32036))
;


var g__31827__auto___32040 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.impl.gen.symbol_ns = ((function (g__31827__auto___32040){
return (function cljs$spec$impl$gen$symbol_ns(var_args){
var args__25843__auto__ = [];
var len__25836__auto___32041 = arguments.length;
var i__25837__auto___32042 = (0);
while(true){
if((i__25837__auto___32042 < len__25836__auto___32041)){
args__25843__auto__.push((arguments[i__25837__auto___32042]));

var G__32043 = (i__25837__auto___32042 + (1));
i__25837__auto___32042 = G__32043;
continue;
} else {
}
break;
}

var argseq__25844__auto__ = ((((0) < args__25843__auto__.length))?(new cljs.core.IndexedSeq(args__25843__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__25844__auto__);
});})(g__31827__auto___32040))
;

cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31827__auto___32040){
return (function (args){
return cljs.core.deref.call(null,g__31827__auto___32040);
});})(g__31827__auto___32040))
;

cljs.spec.impl.gen.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol_ns.cljs$lang$applyTo = ((function (g__31827__auto___32040){
return (function (seq31962){
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31962));
});})(g__31827__auto___32040))
;


var g__31827__auto___32044 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.impl.gen.uuid = ((function (g__31827__auto___32044){
return (function cljs$spec$impl$gen$uuid(var_args){
var args__25843__auto__ = [];
var len__25836__auto___32045 = arguments.length;
var i__25837__auto___32046 = (0);
while(true){
if((i__25837__auto___32046 < len__25836__auto___32045)){
args__25843__auto__.push((arguments[i__25837__auto___32046]));

var G__32047 = (i__25837__auto___32046 + (1));
i__25837__auto___32046 = G__32047;
continue;
} else {
}
break;
}

var argseq__25844__auto__ = ((((0) < args__25843__auto__.length))?(new cljs.core.IndexedSeq(args__25843__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__25844__auto__);
});})(g__31827__auto___32044))
;

cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31827__auto___32044){
return (function (args){
return cljs.core.deref.call(null,g__31827__auto___32044);
});})(g__31827__auto___32044))
;

cljs.spec.impl.gen.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.uuid.cljs$lang$applyTo = ((function (g__31827__auto___32044){
return (function (seq31963){
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31963));
});})(g__31827__auto___32044))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.impl.gen.cat = (function cljs$spec$impl$gen$cat(var_args){
var args__25843__auto__ = [];
var len__25836__auto___32050 = arguments.length;
var i__25837__auto___32051 = (0);
while(true){
if((i__25837__auto___32051 < len__25836__auto___32050)){
args__25843__auto__.push((arguments[i__25837__auto___32051]));

var G__32052 = (i__25837__auto___32051 + (1));
i__25837__auto___32051 = G__32052;
continue;
} else {
}
break;
}

var argseq__25844__auto__ = ((((0) < args__25843__auto__.length))?(new cljs.core.IndexedSeq(args__25843__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__25844__auto__);
});

cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.impl.gen.fmap.call(null,(function (p1__32048_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__32048_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.impl.gen.tuple,gens));
});

cljs.spec.impl.gen.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.cat.cljs$lang$applyTo = (function (seq32049){
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32049));
});

cljs.spec.impl.gen.qualified_QMARK_ = (function cljs$spec$impl$gen$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.impl.gen.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.impl.gen.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.keyword_ns.call(null)),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.any_printable.call(null)], null)),cljs.spec.impl.gen.boolean$.call(null),cljs.spec.impl.gen.char$.call(null),cljs.spec.impl.gen.fmap.call(null,((function (simple){
return (function (p1__32053_SHARP_){
return (new Date(p1__32053_SHARP_));
});})(simple))
,cljs.spec.impl.gen.large_integer.call(null)),cljs.spec.impl.gen.symbol.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.set.call(null,simple),cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.elements.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.List.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashSet.EMPTY], null)),cljs.spec.impl.gen.string_alphanumeric.call(null),cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.return$.call(null,(0)),cljs.spec.impl.gen.keyword.call(null),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max","max",61366548),(-1)], null)),cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.symbol_ns.call(null)], null)),cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.symbol_ns.call(null)], null))),cljs.spec.impl.gen.return$.call(null,true),cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(0)], null)),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(1)], null)),cljs.spec.impl.gen.uuid.call(null),cljs.spec.impl.gen.return$.call(null,false),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword.call(null),cljs.spec.impl.gen.symbol.call(null)], null)),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.double$.call(null)], null)),cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.symbol_ns.call(null)),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.set.call(null,simple),cljs.spec.impl.gen.string_alphanumeric.call(null)], null)),cljs.spec.impl.gen.symbol_ns.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.set.call(null,simple)], null))]);
}),null));
/**
 * Given a predicate, returns a built-in generator if one exists.
 */
cljs.spec.impl.gen.gen_for_pred = (function cljs$spec$impl$gen$gen_for_pred(pred){
if(cljs.core.set_QMARK_.call(null,pred)){
return cljs.spec.impl.gen.elements.call(null,pred);
} else {
return cljs.core.get.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.gen_builtins),pred);
}
});

//# sourceMappingURL=gen.js.map?rel=1519826345094