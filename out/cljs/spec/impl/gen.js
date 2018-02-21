// Compiled by ClojureScript 1.9.473 {}
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

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorPrWriter = (function (this__3674__auto__,writer__3675__auto__,opt__3676__auto__){
return cljs.core._write.call(null,writer__3675__auto__,"cljs.spec.impl.gen/LazyVar");
});

cljs.spec.impl.gen.__GT_LazyVar = (function cljs$spec$impl$gen$__GT_LazyVar(f,cached){
return (new cljs.spec.impl.gen.LazyVar(f,cached));
});

cljs.spec.impl.gen.quick_check_ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check.quick_check !== 'undefined')){
return clojure.test.check.quick_check;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
cljs.spec.impl.gen.quick_check = (function cljs$spec$impl$gen$quick_check(var_args){
var args__3987__auto__ = [];
var len__3984__auto___138 = arguments.length;
var i__3985__auto___139 = (0);
while(true){
if((i__3985__auto___139 < len__3984__auto___138)){
args__3987__auto__.push((arguments[i__3985__auto___139]));

var G__140 = (i__3985__auto___139 + (1));
i__3985__auto___139 = G__140;
continue;
} else {
}
break;
}

var argseq__3988__auto__ = ((((0) < args__3987__auto__.length))?(new cljs.core.IndexedSeq(args__3987__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__3988__auto__);
});

cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.quick_check_ref),args);
});

cljs.spec.impl.gen.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.quick_check.cljs$lang$applyTo = (function (seq137){
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq137));
});

cljs.spec.impl.gen.for_all_STAR__ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.properties.for_all_STAR_ !== 'undefined')){
return clojure.test.check.properties.for_all_STAR_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Dynamically loaded clojure.test.check.properties/for-all*.
 */
cljs.spec.impl.gen.for_all_STAR_ = (function cljs$spec$impl$gen$for_all_STAR_(var_args){
var args__3987__auto__ = [];
var len__3984__auto___142 = arguments.length;
var i__3985__auto___143 = (0);
while(true){
if((i__3985__auto___143 < len__3984__auto___142)){
args__3987__auto__.push((arguments[i__3985__auto___143]));

var G__144 = (i__3985__auto___143 + (1));
i__3985__auto___143 = G__144;
continue;
} else {
}
break;
}

var argseq__3988__auto__ = ((((0) < args__3987__auto__.length))?(new cljs.core.IndexedSeq(args__3987__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__3988__auto__);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.for_all_STAR__ref),args);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$applyTo = (function (seq141){
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq141));
});

var g_QMARK__145 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
var g_146 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__145){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
});})(g_QMARK__145))
,null));
var mkg_147 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__145,g_146){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
});})(g_QMARK__145,g_146))
,null));
cljs.spec.impl.gen.generator_QMARK_ = ((function (g_QMARK__145,g_146,mkg_147){
return (function cljs$spec$impl$gen$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__145).call(null,x);
});})(g_QMARK__145,g_146,mkg_147))
;

cljs.spec.impl.gen.generator = ((function (g_QMARK__145,g_146,mkg_147){
return (function cljs$spec$impl$gen$generator(gfn){
return cljs.core.deref.call(null,mkg_147).call(null,gfn);
});})(g_QMARK__145,g_146,mkg_147))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.impl.gen.generate = ((function (g_QMARK__145,g_146,mkg_147){
return (function cljs$spec$impl$gen$generate(generator){
return cljs.core.deref.call(null,g_146).call(null,generator);
});})(g_QMARK__145,g_146,mkg_147))
;
cljs.spec.impl.gen.delay_impl = (function cljs$spec$impl$gen$delay_impl(gfnd){
return cljs.spec.impl.gen.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__6358__auto___167 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.impl.gen.hash_map = ((function (g__6358__auto___167){
return (function cljs$spec$impl$gen$hash_map(var_args){
var args__3987__auto__ = [];
var len__3984__auto___168 = arguments.length;
var i__3985__auto___169 = (0);
while(true){
if((i__3985__auto___169 < len__3984__auto___168)){
args__3987__auto__.push((arguments[i__3985__auto___169]));

var G__170 = (i__3985__auto___169 + (1));
i__3985__auto___169 = G__170;
continue;
} else {
}
break;
}

var argseq__3988__auto__ = ((((0) < args__3987__auto__.length))?(new cljs.core.IndexedSeq(args__3987__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__3988__auto__);
});})(g__6358__auto___167))
;

cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__6358__auto___167){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__6358__auto___167),args);
});})(g__6358__auto___167))
;

cljs.spec.impl.gen.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.hash_map.cljs$lang$applyTo = ((function (g__6358__auto___167){
return (function (seq148){
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq148));
});})(g__6358__auto___167))
;


var g__6358__auto___171 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.impl.gen.list = ((function (g__6358__auto___171){
return (function cljs$spec$impl$gen$list(var_args){
var args__3987__auto__ = [];
var len__3984__auto___172 = arguments.length;
var i__3985__auto___173 = (0);
while(true){
if((i__3985__auto___173 < len__3984__auto___172)){
args__3987__auto__.push((arguments[i__3985__auto___173]));

var G__174 = (i__3985__auto___173 + (1));
i__3985__auto___173 = G__174;
continue;
} else {
}
break;
}

var argseq__3988__auto__ = ((((0) < args__3987__auto__.length))?(new cljs.core.IndexedSeq(args__3987__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(argseq__3988__auto__);
});})(g__6358__auto___171))
;

cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__6358__auto___171){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__6358__auto___171),args);
});})(g__6358__auto___171))
;

cljs.spec.impl.gen.list.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.list.cljs$lang$applyTo = ((function (g__6358__auto___171){
return (function (seq149){
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq149));
});})(g__6358__auto___171))
;


var g__6358__auto___175 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.impl.gen.map = ((function (g__6358__auto___175){
return (function cljs$spec$impl$gen$map(var_args){
var args__3987__auto__ = [];
var len__3984__auto___176 = arguments.length;
var i__3985__auto___177 = (0);
while(true){
if((i__3985__auto___177 < len__3984__auto___176)){
args__3987__auto__.push((arguments[i__3985__auto___177]));

var G__178 = (i__3985__auto___177 + (1));
i__3985__auto___177 = G__178;
continue;
} else {
}
break;
}

var argseq__3988__auto__ = ((((0) < args__3987__auto__.length))?(new cljs.core.IndexedSeq(args__3987__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(argseq__3988__auto__);
});})(g__6358__auto___175))
;

cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__6358__auto___175){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__6358__auto___175),args);
});})(g__6358__auto___175))
;

cljs.spec.impl.gen.map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.map.cljs$lang$applyTo = ((function (g__6358__auto___175){
return (function (seq150){
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq150));
});})(g__6358__auto___175))
;


var g__6358__auto___179 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.impl.gen.not_empty = ((function (g__6358__auto___179){
return (function cljs$spec$impl$gen$not_empty(var_args){
var args__3987__auto__ = [];
var len__3984__auto___180 = arguments.length;
var i__3985__auto___181 = (0);
while(true){
if((i__3985__auto___181 < len__3984__auto___180)){
args__3987__auto__.push((arguments[i__3985__auto___181]));

var G__182 = (i__3985__auto___181 + (1));
i__3985__auto___181 = G__182;
continue;
} else {
}
break;
}

var argseq__3988__auto__ = ((((0) < args__3987__auto__.length))?(new cljs.core.IndexedSeq(args__3987__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__3988__auto__);
});})(g__6358__auto___179))
;

cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__6358__auto___179){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__6358__auto___179),args);
});})(g__6358__auto___179))
;

cljs.spec.impl.gen.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.not_empty.cljs$lang$applyTo = ((function (g__6358__auto___179){
return (function (seq151){
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq151));
});})(g__6358__auto___179))
;


var g__6358__auto___183 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.impl.gen.set = ((function (g__6358__auto___183){
return (function cljs$spec$impl$gen$set(var_args){
var args__3987__auto__ = [];
var len__3984__auto___184 = arguments.length;
var i__3985__auto___185 = (0);
while(true){
if((i__3985__auto___185 < len__3984__auto___184)){
args__3987__auto__.push((arguments[i__3985__auto___185]));

var G__186 = (i__3985__auto___185 + (1));
i__3985__auto___185 = G__186;
continue;
} else {
}
break;
}

var argseq__3988__auto__ = ((((0) < args__3987__auto__.length))?(new cljs.core.IndexedSeq(args__3987__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(argseq__3988__auto__);
});})(g__6358__auto___183))
;

cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__6358__auto___183){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__6358__auto___183),args);
});})(g__6358__auto___183))
;

cljs.spec.impl.gen.set.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.set.cljs$lang$applyTo = ((function (g__6358__auto___183){
return (function (seq152){
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq152));
});})(g__6358__auto___183))
;


var g__6358__auto___187 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.impl.gen.vector = ((function (g__6358__auto___187){
return (function cljs$spec$impl$gen$vector(var_args){
var args__3987__auto__ = [];
var len__3984__auto___188 = arguments.length;
var i__3985__auto___189 = (0);
while(true){
if((i__3985__auto___189 < len__3984__auto___188)){
args__3987__auto__.push((arguments[i__3985__auto___189]));

var G__190 = (i__3985__auto___189 + (1));
i__3985__auto___189 = G__190;
continue;
} else {
}
break;
}

var argseq__3988__auto__ = ((((0) < args__3987__auto__.length))?(new cljs.core.IndexedSeq(args__3987__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__3988__auto__);
});})(g__6358__auto___187))
;

cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__6358__auto___187){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__6358__auto___187),args);
});})(g__6358__auto___187))
;

cljs.spec.impl.gen.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector.cljs$lang$applyTo = ((function (g__6358__auto___187){
return (function (seq153){
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq153));
});})(g__6358__auto___187))
;


var g__6358__auto___191 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.impl.gen.vector_distinct = ((function (g__6358__auto___191){
return (function cljs$spec$impl$gen$vector_distinct(var_args){
var args__3987__auto__ = [];
var len__3984__auto___192 = arguments.length;
var i__3985__auto___193 = (0);
while(true){
if((i__3985__auto___193 < len__3984__auto___192)){
args__3987__auto__.push((arguments[i__3985__auto___193]));

var G__194 = (i__3985__auto___193 + (1));
i__3985__auto___193 = G__194;
continue;
} else {
}
break;
}

var argseq__3988__auto__ = ((((0) < args__3987__auto__.length))?(new cljs.core.IndexedSeq(args__3987__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__3988__auto__);
});})(g__6358__auto___191))
;

cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__6358__auto___191){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__6358__auto___191),args);
});})(g__6358__auto___191))
;

cljs.spec.impl.gen.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector_distinct.cljs$lang$applyTo = ((function (g__6358__auto___191){
return (function (seq154){
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq154));
});})(g__6358__auto___191))
;


var g__6358__auto___195 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.impl.gen.fmap = ((function (g__6358__auto___195){
return (function cljs$spec$impl$gen$fmap(var_args){
var args__3987__auto__ = [];
var len__3984__auto___196 = arguments.length;
var i__3985__auto___197 = (0);
while(true){
if((i__3985__auto___197 < len__3984__auto___196)){
args__3987__auto__.push((arguments[i__3985__auto___197]));

var G__198 = (i__3985__auto___197 + (1));
i__3985__auto___197 = G__198;
continue;
} else {
}
break;
}

var argseq__3988__auto__ = ((((0) < args__3987__auto__.length))?(new cljs.core.IndexedSeq(args__3987__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__3988__auto__);
});})(g__6358__auto___195))
;

cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__6358__auto___195){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__6358__auto___195),args);
});})(g__6358__auto___195))
;

cljs.spec.impl.gen.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.fmap.cljs$lang$applyTo = ((function (g__6358__auto___195){
return (function (seq155){
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq155));
});})(g__6358__auto___195))
;


var g__6358__auto___199 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.impl.gen.elements = ((function (g__6358__auto___199){
return (function cljs$spec$impl$gen$elements(var_args){
var args__3987__auto__ = [];
var len__3984__auto___200 = arguments.length;
var i__3985__auto___201 = (0);
while(true){
if((i__3985__auto___201 < len__3984__auto___200)){
args__3987__auto__.push((arguments[i__3985__auto___201]));

var G__202 = (i__3985__auto___201 + (1));
i__3985__auto___201 = G__202;
continue;
} else {
}
break;
}

var argseq__3988__auto__ = ((((0) < args__3987__auto__.length))?(new cljs.core.IndexedSeq(args__3987__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__3988__auto__);
});})(g__6358__auto___199))
;

cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__6358__auto___199){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__6358__auto___199),args);
});})(g__6358__auto___199))
;

cljs.spec.impl.gen.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.elements.cljs$lang$applyTo = ((function (g__6358__auto___199){
return (function (seq156){
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq156));
});})(g__6358__auto___199))
;


var g__6358__auto___203 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.impl.gen.bind = ((function (g__6358__auto___203){
return (function cljs$spec$impl$gen$bind(var_args){
var args__3987__auto__ = [];
var len__3984__auto___204 = arguments.length;
var i__3985__auto___205 = (0);
while(true){
if((i__3985__auto___205 < len__3984__auto___204)){
args__3987__auto__.push((arguments[i__3985__auto___205]));

var G__206 = (i__3985__auto___205 + (1));
i__3985__auto___205 = G__206;
continue;
} else {
}
break;
}

var argseq__3988__auto__ = ((((0) < args__3987__auto__.length))?(new cljs.core.IndexedSeq(args__3987__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__3988__auto__);
});})(g__6358__auto___203))
;

cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__6358__auto___203){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__6358__auto___203),args);
});})(g__6358__auto___203))
;

cljs.spec.impl.gen.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.bind.cljs$lang$applyTo = ((function (g__6358__auto___203){
return (function (seq157){
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq157));
});})(g__6358__auto___203))
;


var g__6358__auto___207 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.impl.gen.choose = ((function (g__6358__auto___207){
return (function cljs$spec$impl$gen$choose(var_args){
var args__3987__auto__ = [];
var len__3984__auto___208 = arguments.length;
var i__3985__auto___209 = (0);
while(true){
if((i__3985__auto___209 < len__3984__auto___208)){
args__3987__auto__.push((arguments[i__3985__auto___209]));

var G__210 = (i__3985__auto___209 + (1));
i__3985__auto___209 = G__210;
continue;
} else {
}
break;
}

var argseq__3988__auto__ = ((((0) < args__3987__auto__.length))?(new cljs.core.IndexedSeq(args__3987__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__3988__auto__);
});})(g__6358__auto___207))
;

cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__6358__auto___207){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__6358__auto___207),args);
});})(g__6358__auto___207))
;

cljs.spec.impl.gen.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.choose.cljs$lang$applyTo = ((function (g__6358__auto___207){
return (function (seq158){
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq158));
});})(g__6358__auto___207))
;


var g__6358__auto___211 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.impl.gen.one_of = ((function (g__6358__auto___211){
return (function cljs$spec$impl$gen$one_of(var_args){
var args__3987__auto__ = [];
var len__3984__auto___212 = arguments.length;
var i__3985__auto___213 = (0);
while(true){
if((i__3985__auto___213 < len__3984__auto___212)){
args__3987__auto__.push((arguments[i__3985__auto___213]));

var G__214 = (i__3985__auto___213 + (1));
i__3985__auto___213 = G__214;
continue;
} else {
}
break;
}

var argseq__3988__auto__ = ((((0) < args__3987__auto__.length))?(new cljs.core.IndexedSeq(args__3987__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__3988__auto__);
});})(g__6358__auto___211))
;

cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__6358__auto___211){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__6358__auto___211),args);
});})(g__6358__auto___211))
;

cljs.spec.impl.gen.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.one_of.cljs$lang$applyTo = ((function (g__6358__auto___211){
return (function (seq159){
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq159));
});})(g__6358__auto___211))
;


var g__6358__auto___215 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.impl.gen.such_that = ((function (g__6358__auto___215){
return (function cljs$spec$impl$gen$such_that(var_args){
var args__3987__auto__ = [];
var len__3984__auto___216 = arguments.length;
var i__3985__auto___217 = (0);
while(true){
if((i__3985__auto___217 < len__3984__auto___216)){
args__3987__auto__.push((arguments[i__3985__auto___217]));

var G__218 = (i__3985__auto___217 + (1));
i__3985__auto___217 = G__218;
continue;
} else {
}
break;
}

var argseq__3988__auto__ = ((((0) < args__3987__auto__.length))?(new cljs.core.IndexedSeq(args__3987__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__3988__auto__);
});})(g__6358__auto___215))
;

cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__6358__auto___215){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__6358__auto___215),args);
});})(g__6358__auto___215))
;

cljs.spec.impl.gen.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.such_that.cljs$lang$applyTo = ((function (g__6358__auto___215){
return (function (seq160){
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq160));
});})(g__6358__auto___215))
;


var g__6358__auto___219 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.impl.gen.tuple = ((function (g__6358__auto___219){
return (function cljs$spec$impl$gen$tuple(var_args){
var args__3987__auto__ = [];
var len__3984__auto___220 = arguments.length;
var i__3985__auto___221 = (0);
while(true){
if((i__3985__auto___221 < len__3984__auto___220)){
args__3987__auto__.push((arguments[i__3985__auto___221]));

var G__222 = (i__3985__auto___221 + (1));
i__3985__auto___221 = G__222;
continue;
} else {
}
break;
}

var argseq__3988__auto__ = ((((0) < args__3987__auto__.length))?(new cljs.core.IndexedSeq(args__3987__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__3988__auto__);
});})(g__6358__auto___219))
;

cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__6358__auto___219){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__6358__auto___219),args);
});})(g__6358__auto___219))
;

cljs.spec.impl.gen.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.tuple.cljs$lang$applyTo = ((function (g__6358__auto___219){
return (function (seq161){
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq161));
});})(g__6358__auto___219))
;


var g__6358__auto___223 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.impl.gen.sample = ((function (g__6358__auto___223){
return (function cljs$spec$impl$gen$sample(var_args){
var args__3987__auto__ = [];
var len__3984__auto___224 = arguments.length;
var i__3985__auto___225 = (0);
while(true){
if((i__3985__auto___225 < len__3984__auto___224)){
args__3987__auto__.push((arguments[i__3985__auto___225]));

var G__226 = (i__3985__auto___225 + (1));
i__3985__auto___225 = G__226;
continue;
} else {
}
break;
}

var argseq__3988__auto__ = ((((0) < args__3987__auto__.length))?(new cljs.core.IndexedSeq(args__3987__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__3988__auto__);
});})(g__6358__auto___223))
;

cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__6358__auto___223){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__6358__auto___223),args);
});})(g__6358__auto___223))
;

cljs.spec.impl.gen.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.sample.cljs$lang$applyTo = ((function (g__6358__auto___223){
return (function (seq162){
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq162));
});})(g__6358__auto___223))
;


var g__6358__auto___227 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.impl.gen.return$ = ((function (g__6358__auto___227){
return (function cljs$spec$impl$gen$return(var_args){
var args__3987__auto__ = [];
var len__3984__auto___228 = arguments.length;
var i__3985__auto___229 = (0);
while(true){
if((i__3985__auto___229 < len__3984__auto___228)){
args__3987__auto__.push((arguments[i__3985__auto___229]));

var G__230 = (i__3985__auto___229 + (1));
i__3985__auto___229 = G__230;
continue;
} else {
}
break;
}

var argseq__3988__auto__ = ((((0) < args__3987__auto__.length))?(new cljs.core.IndexedSeq(args__3987__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__3988__auto__);
});})(g__6358__auto___227))
;

cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__6358__auto___227){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__6358__auto___227),args);
});})(g__6358__auto___227))
;

cljs.spec.impl.gen.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.return$.cljs$lang$applyTo = ((function (g__6358__auto___227){
return (function (seq163){
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq163));
});})(g__6358__auto___227))
;


var g__6358__auto___231 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.impl.gen.large_integer_STAR_ = ((function (g__6358__auto___231){
return (function cljs$spec$impl$gen$large_integer_STAR_(var_args){
var args__3987__auto__ = [];
var len__3984__auto___232 = arguments.length;
var i__3985__auto___233 = (0);
while(true){
if((i__3985__auto___233 < len__3984__auto___232)){
args__3987__auto__.push((arguments[i__3985__auto___233]));

var G__234 = (i__3985__auto___233 + (1));
i__3985__auto___233 = G__234;
continue;
} else {
}
break;
}

var argseq__3988__auto__ = ((((0) < args__3987__auto__.length))?(new cljs.core.IndexedSeq(args__3987__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__3988__auto__);
});})(g__6358__auto___231))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__6358__auto___231){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__6358__auto___231),args);
});})(g__6358__auto___231))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$applyTo = ((function (g__6358__auto___231){
return (function (seq164){
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq164));
});})(g__6358__auto___231))
;


var g__6358__auto___235 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.impl.gen.double_STAR_ = ((function (g__6358__auto___235){
return (function cljs$spec$impl$gen$double_STAR_(var_args){
var args__3987__auto__ = [];
var len__3984__auto___236 = arguments.length;
var i__3985__auto___237 = (0);
while(true){
if((i__3985__auto___237 < len__3984__auto___236)){
args__3987__auto__.push((arguments[i__3985__auto___237]));

var G__238 = (i__3985__auto___237 + (1));
i__3985__auto___237 = G__238;
continue;
} else {
}
break;
}

var argseq__3988__auto__ = ((((0) < args__3987__auto__.length))?(new cljs.core.IndexedSeq(args__3987__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__3988__auto__);
});})(g__6358__auto___235))
;

cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__6358__auto___235){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__6358__auto___235),args);
});})(g__6358__auto___235))
;

cljs.spec.impl.gen.double_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double_STAR_.cljs$lang$applyTo = ((function (g__6358__auto___235){
return (function (seq165){
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq165));
});})(g__6358__auto___235))
;


var g__6358__auto___239 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.frequency !== 'undefined')){
return clojure.test.check.generators.frequency;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/frequency
 */
cljs.spec.impl.gen.frequency = ((function (g__6358__auto___239){
return (function cljs$spec$impl$gen$frequency(var_args){
var args__3987__auto__ = [];
var len__3984__auto___240 = arguments.length;
var i__3985__auto___241 = (0);
while(true){
if((i__3985__auto___241 < len__3984__auto___240)){
args__3987__auto__.push((arguments[i__3985__auto___241]));

var G__242 = (i__3985__auto___241 + (1));
i__3985__auto___241 = G__242;
continue;
} else {
}
break;
}

var argseq__3988__auto__ = ((((0) < args__3987__auto__.length))?(new cljs.core.IndexedSeq(args__3987__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.frequency.cljs$core$IFn$_invoke$arity$variadic(argseq__3988__auto__);
});})(g__6358__auto___239))
;

cljs.spec.impl.gen.frequency.cljs$core$IFn$_invoke$arity$variadic = ((function (g__6358__auto___239){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__6358__auto___239),args);
});})(g__6358__auto___239))
;

cljs.spec.impl.gen.frequency.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.frequency.cljs$lang$applyTo = ((function (g__6358__auto___239){
return (function (seq166){
return cljs.spec.impl.gen.frequency.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq166));
});})(g__6358__auto___239))
;

var g__6363__auto___264 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.impl.gen.any = ((function (g__6363__auto___264){
return (function cljs$spec$impl$gen$any(var_args){
var args__3987__auto__ = [];
var len__3984__auto___265 = arguments.length;
var i__3985__auto___266 = (0);
while(true){
if((i__3985__auto___266 < len__3984__auto___265)){
args__3987__auto__.push((arguments[i__3985__auto___266]));

var G__267 = (i__3985__auto___266 + (1));
i__3985__auto___266 = G__267;
continue;
} else {
}
break;
}

var argseq__3988__auto__ = ((((0) < args__3987__auto__.length))?(new cljs.core.IndexedSeq(args__3987__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(argseq__3988__auto__);
});})(g__6363__auto___264))
;

cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__6363__auto___264){
return (function (args){
return cljs.core.deref.call(null,g__6363__auto___264);
});})(g__6363__auto___264))
;

cljs.spec.impl.gen.any.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any.cljs$lang$applyTo = ((function (g__6363__auto___264){
return (function (seq243){
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq243));
});})(g__6363__auto___264))
;


var g__6363__auto___268 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.impl.gen.any_printable = ((function (g__6363__auto___268){
return (function cljs$spec$impl$gen$any_printable(var_args){
var args__3987__auto__ = [];
var len__3984__auto___269 = arguments.length;
var i__3985__auto___270 = (0);
while(true){
if((i__3985__auto___270 < len__3984__auto___269)){
args__3987__auto__.push((arguments[i__3985__auto___270]));

var G__271 = (i__3985__auto___270 + (1));
i__3985__auto___270 = G__271;
continue;
} else {
}
break;
}

var argseq__3988__auto__ = ((((0) < args__3987__auto__.length))?(new cljs.core.IndexedSeq(args__3987__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__3988__auto__);
});})(g__6363__auto___268))
;

cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__6363__auto___268){
return (function (args){
return cljs.core.deref.call(null,g__6363__auto___268);
});})(g__6363__auto___268))
;

cljs.spec.impl.gen.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any_printable.cljs$lang$applyTo = ((function (g__6363__auto___268){
return (function (seq244){
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq244));
});})(g__6363__auto___268))
;


var g__6363__auto___272 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.impl.gen.boolean$ = ((function (g__6363__auto___272){
return (function cljs$spec$impl$gen$boolean(var_args){
var args__3987__auto__ = [];
var len__3984__auto___273 = arguments.length;
var i__3985__auto___274 = (0);
while(true){
if((i__3985__auto___274 < len__3984__auto___273)){
args__3987__auto__.push((arguments[i__3985__auto___274]));

var G__275 = (i__3985__auto___274 + (1));
i__3985__auto___274 = G__275;
continue;
} else {
}
break;
}

var argseq__3988__auto__ = ((((0) < args__3987__auto__.length))?(new cljs.core.IndexedSeq(args__3987__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__3988__auto__);
});})(g__6363__auto___272))
;

cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__6363__auto___272){
return (function (args){
return cljs.core.deref.call(null,g__6363__auto___272);
});})(g__6363__auto___272))
;

cljs.spec.impl.gen.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.boolean$.cljs$lang$applyTo = ((function (g__6363__auto___272){
return (function (seq245){
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq245));
});})(g__6363__auto___272))
;


var g__6363__auto___276 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.impl.gen.char$ = ((function (g__6363__auto___276){
return (function cljs$spec$impl$gen$char(var_args){
var args__3987__auto__ = [];
var len__3984__auto___277 = arguments.length;
var i__3985__auto___278 = (0);
while(true){
if((i__3985__auto___278 < len__3984__auto___277)){
args__3987__auto__.push((arguments[i__3985__auto___278]));

var G__279 = (i__3985__auto___278 + (1));
i__3985__auto___278 = G__279;
continue;
} else {
}
break;
}

var argseq__3988__auto__ = ((((0) < args__3987__auto__.length))?(new cljs.core.IndexedSeq(args__3987__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__3988__auto__);
});})(g__6363__auto___276))
;

cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__6363__auto___276){
return (function (args){
return cljs.core.deref.call(null,g__6363__auto___276);
});})(g__6363__auto___276))
;

cljs.spec.impl.gen.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char$.cljs$lang$applyTo = ((function (g__6363__auto___276){
return (function (seq246){
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq246));
});})(g__6363__auto___276))
;


var g__6363__auto___280 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.impl.gen.char_alpha = ((function (g__6363__auto___280){
return (function cljs$spec$impl$gen$char_alpha(var_args){
var args__3987__auto__ = [];
var len__3984__auto___281 = arguments.length;
var i__3985__auto___282 = (0);
while(true){
if((i__3985__auto___282 < len__3984__auto___281)){
args__3987__auto__.push((arguments[i__3985__auto___282]));

var G__283 = (i__3985__auto___282 + (1));
i__3985__auto___282 = G__283;
continue;
} else {
}
break;
}

var argseq__3988__auto__ = ((((0) < args__3987__auto__.length))?(new cljs.core.IndexedSeq(args__3987__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__3988__auto__);
});})(g__6363__auto___280))
;

cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__6363__auto___280){
return (function (args){
return cljs.core.deref.call(null,g__6363__auto___280);
});})(g__6363__auto___280))
;

cljs.spec.impl.gen.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alpha.cljs$lang$applyTo = ((function (g__6363__auto___280){
return (function (seq247){
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq247));
});})(g__6363__auto___280))
;


var g__6363__auto___284 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.impl.gen.char_alphanumeric = ((function (g__6363__auto___284){
return (function cljs$spec$impl$gen$char_alphanumeric(var_args){
var args__3987__auto__ = [];
var len__3984__auto___285 = arguments.length;
var i__3985__auto___286 = (0);
while(true){
if((i__3985__auto___286 < len__3984__auto___285)){
args__3987__auto__.push((arguments[i__3985__auto___286]));

var G__287 = (i__3985__auto___286 + (1));
i__3985__auto___286 = G__287;
continue;
} else {
}
break;
}

var argseq__3988__auto__ = ((((0) < args__3987__auto__.length))?(new cljs.core.IndexedSeq(args__3987__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__3988__auto__);
});})(g__6363__auto___284))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__6363__auto___284){
return (function (args){
return cljs.core.deref.call(null,g__6363__auto___284);
});})(g__6363__auto___284))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$applyTo = ((function (g__6363__auto___284){
return (function (seq248){
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq248));
});})(g__6363__auto___284))
;


var g__6363__auto___288 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.impl.gen.char_ascii = ((function (g__6363__auto___288){
return (function cljs$spec$impl$gen$char_ascii(var_args){
var args__3987__auto__ = [];
var len__3984__auto___289 = arguments.length;
var i__3985__auto___290 = (0);
while(true){
if((i__3985__auto___290 < len__3984__auto___289)){
args__3987__auto__.push((arguments[i__3985__auto___290]));

var G__291 = (i__3985__auto___290 + (1));
i__3985__auto___290 = G__291;
continue;
} else {
}
break;
}

var argseq__3988__auto__ = ((((0) < args__3987__auto__.length))?(new cljs.core.IndexedSeq(args__3987__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__3988__auto__);
});})(g__6363__auto___288))
;

cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__6363__auto___288){
return (function (args){
return cljs.core.deref.call(null,g__6363__auto___288);
});})(g__6363__auto___288))
;

cljs.spec.impl.gen.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_ascii.cljs$lang$applyTo = ((function (g__6363__auto___288){
return (function (seq249){
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq249));
});})(g__6363__auto___288))
;


var g__6363__auto___292 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.impl.gen.double$ = ((function (g__6363__auto___292){
return (function cljs$spec$impl$gen$double(var_args){
var args__3987__auto__ = [];
var len__3984__auto___293 = arguments.length;
var i__3985__auto___294 = (0);
while(true){
if((i__3985__auto___294 < len__3984__auto___293)){
args__3987__auto__.push((arguments[i__3985__auto___294]));

var G__295 = (i__3985__auto___294 + (1));
i__3985__auto___294 = G__295;
continue;
} else {
}
break;
}

var argseq__3988__auto__ = ((((0) < args__3987__auto__.length))?(new cljs.core.IndexedSeq(args__3987__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__3988__auto__);
});})(g__6363__auto___292))
;

cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__6363__auto___292){
return (function (args){
return cljs.core.deref.call(null,g__6363__auto___292);
});})(g__6363__auto___292))
;

cljs.spec.impl.gen.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double$.cljs$lang$applyTo = ((function (g__6363__auto___292){
return (function (seq250){
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq250));
});})(g__6363__auto___292))
;


var g__6363__auto___296 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.impl.gen.int$ = ((function (g__6363__auto___296){
return (function cljs$spec$impl$gen$int(var_args){
var args__3987__auto__ = [];
var len__3984__auto___297 = arguments.length;
var i__3985__auto___298 = (0);
while(true){
if((i__3985__auto___298 < len__3984__auto___297)){
args__3987__auto__.push((arguments[i__3985__auto___298]));

var G__299 = (i__3985__auto___298 + (1));
i__3985__auto___298 = G__299;
continue;
} else {
}
break;
}

var argseq__3988__auto__ = ((((0) < args__3987__auto__.length))?(new cljs.core.IndexedSeq(args__3987__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__3988__auto__);
});})(g__6363__auto___296))
;

cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__6363__auto___296){
return (function (args){
return cljs.core.deref.call(null,g__6363__auto___296);
});})(g__6363__auto___296))
;

cljs.spec.impl.gen.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.int$.cljs$lang$applyTo = ((function (g__6363__auto___296){
return (function (seq251){
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq251));
});})(g__6363__auto___296))
;


var g__6363__auto___300 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.impl.gen.keyword = ((function (g__6363__auto___300){
return (function cljs$spec$impl$gen$keyword(var_args){
var args__3987__auto__ = [];
var len__3984__auto___301 = arguments.length;
var i__3985__auto___302 = (0);
while(true){
if((i__3985__auto___302 < len__3984__auto___301)){
args__3987__auto__.push((arguments[i__3985__auto___302]));

var G__303 = (i__3985__auto___302 + (1));
i__3985__auto___302 = G__303;
continue;
} else {
}
break;
}

var argseq__3988__auto__ = ((((0) < args__3987__auto__.length))?(new cljs.core.IndexedSeq(args__3987__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__3988__auto__);
});})(g__6363__auto___300))
;

cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__6363__auto___300){
return (function (args){
return cljs.core.deref.call(null,g__6363__auto___300);
});})(g__6363__auto___300))
;

cljs.spec.impl.gen.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword.cljs$lang$applyTo = ((function (g__6363__auto___300){
return (function (seq252){
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq252));
});})(g__6363__auto___300))
;


var g__6363__auto___304 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.impl.gen.keyword_ns = ((function (g__6363__auto___304){
return (function cljs$spec$impl$gen$keyword_ns(var_args){
var args__3987__auto__ = [];
var len__3984__auto___305 = arguments.length;
var i__3985__auto___306 = (0);
while(true){
if((i__3985__auto___306 < len__3984__auto___305)){
args__3987__auto__.push((arguments[i__3985__auto___306]));

var G__307 = (i__3985__auto___306 + (1));
i__3985__auto___306 = G__307;
continue;
} else {
}
break;
}

var argseq__3988__auto__ = ((((0) < args__3987__auto__.length))?(new cljs.core.IndexedSeq(args__3987__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__3988__auto__);
});})(g__6363__auto___304))
;

cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__6363__auto___304){
return (function (args){
return cljs.core.deref.call(null,g__6363__auto___304);
});})(g__6363__auto___304))
;

cljs.spec.impl.gen.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword_ns.cljs$lang$applyTo = ((function (g__6363__auto___304){
return (function (seq253){
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq253));
});})(g__6363__auto___304))
;


var g__6363__auto___308 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.impl.gen.large_integer = ((function (g__6363__auto___308){
return (function cljs$spec$impl$gen$large_integer(var_args){
var args__3987__auto__ = [];
var len__3984__auto___309 = arguments.length;
var i__3985__auto___310 = (0);
while(true){
if((i__3985__auto___310 < len__3984__auto___309)){
args__3987__auto__.push((arguments[i__3985__auto___310]));

var G__311 = (i__3985__auto___310 + (1));
i__3985__auto___310 = G__311;
continue;
} else {
}
break;
}

var argseq__3988__auto__ = ((((0) < args__3987__auto__.length))?(new cljs.core.IndexedSeq(args__3987__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__3988__auto__);
});})(g__6363__auto___308))
;

cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__6363__auto___308){
return (function (args){
return cljs.core.deref.call(null,g__6363__auto___308);
});})(g__6363__auto___308))
;

cljs.spec.impl.gen.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer.cljs$lang$applyTo = ((function (g__6363__auto___308){
return (function (seq254){
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq254));
});})(g__6363__auto___308))
;


var g__6363__auto___312 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.impl.gen.ratio = ((function (g__6363__auto___312){
return (function cljs$spec$impl$gen$ratio(var_args){
var args__3987__auto__ = [];
var len__3984__auto___313 = arguments.length;
var i__3985__auto___314 = (0);
while(true){
if((i__3985__auto___314 < len__3984__auto___313)){
args__3987__auto__.push((arguments[i__3985__auto___314]));

var G__315 = (i__3985__auto___314 + (1));
i__3985__auto___314 = G__315;
continue;
} else {
}
break;
}

var argseq__3988__auto__ = ((((0) < args__3987__auto__.length))?(new cljs.core.IndexedSeq(args__3987__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__3988__auto__);
});})(g__6363__auto___312))
;

cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__6363__auto___312){
return (function (args){
return cljs.core.deref.call(null,g__6363__auto___312);
});})(g__6363__auto___312))
;

cljs.spec.impl.gen.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.ratio.cljs$lang$applyTo = ((function (g__6363__auto___312){
return (function (seq255){
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq255));
});})(g__6363__auto___312))
;


var g__6363__auto___316 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.impl.gen.simple_type = ((function (g__6363__auto___316){
return (function cljs$spec$impl$gen$simple_type(var_args){
var args__3987__auto__ = [];
var len__3984__auto___317 = arguments.length;
var i__3985__auto___318 = (0);
while(true){
if((i__3985__auto___318 < len__3984__auto___317)){
args__3987__auto__.push((arguments[i__3985__auto___318]));

var G__319 = (i__3985__auto___318 + (1));
i__3985__auto___318 = G__319;
continue;
} else {
}
break;
}

var argseq__3988__auto__ = ((((0) < args__3987__auto__.length))?(new cljs.core.IndexedSeq(args__3987__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__3988__auto__);
});})(g__6363__auto___316))
;

cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__6363__auto___316){
return (function (args){
return cljs.core.deref.call(null,g__6363__auto___316);
});})(g__6363__auto___316))
;

cljs.spec.impl.gen.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type.cljs$lang$applyTo = ((function (g__6363__auto___316){
return (function (seq256){
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq256));
});})(g__6363__auto___316))
;


var g__6363__auto___320 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.impl.gen.simple_type_printable = ((function (g__6363__auto___320){
return (function cljs$spec$impl$gen$simple_type_printable(var_args){
var args__3987__auto__ = [];
var len__3984__auto___321 = arguments.length;
var i__3985__auto___322 = (0);
while(true){
if((i__3985__auto___322 < len__3984__auto___321)){
args__3987__auto__.push((arguments[i__3985__auto___322]));

var G__323 = (i__3985__auto___322 + (1));
i__3985__auto___322 = G__323;
continue;
} else {
}
break;
}

var argseq__3988__auto__ = ((((0) < args__3987__auto__.length))?(new cljs.core.IndexedSeq(args__3987__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__3988__auto__);
});})(g__6363__auto___320))
;

cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__6363__auto___320){
return (function (args){
return cljs.core.deref.call(null,g__6363__auto___320);
});})(g__6363__auto___320))
;

cljs.spec.impl.gen.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type_printable.cljs$lang$applyTo = ((function (g__6363__auto___320){
return (function (seq257){
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq257));
});})(g__6363__auto___320))
;


var g__6363__auto___324 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.impl.gen.string = ((function (g__6363__auto___324){
return (function cljs$spec$impl$gen$string(var_args){
var args__3987__auto__ = [];
var len__3984__auto___325 = arguments.length;
var i__3985__auto___326 = (0);
while(true){
if((i__3985__auto___326 < len__3984__auto___325)){
args__3987__auto__.push((arguments[i__3985__auto___326]));

var G__327 = (i__3985__auto___326 + (1));
i__3985__auto___326 = G__327;
continue;
} else {
}
break;
}

var argseq__3988__auto__ = ((((0) < args__3987__auto__.length))?(new cljs.core.IndexedSeq(args__3987__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(argseq__3988__auto__);
});})(g__6363__auto___324))
;

cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__6363__auto___324){
return (function (args){
return cljs.core.deref.call(null,g__6363__auto___324);
});})(g__6363__auto___324))
;

cljs.spec.impl.gen.string.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string.cljs$lang$applyTo = ((function (g__6363__auto___324){
return (function (seq258){
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq258));
});})(g__6363__auto___324))
;


var g__6363__auto___328 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.impl.gen.string_ascii = ((function (g__6363__auto___328){
return (function cljs$spec$impl$gen$string_ascii(var_args){
var args__3987__auto__ = [];
var len__3984__auto___329 = arguments.length;
var i__3985__auto___330 = (0);
while(true){
if((i__3985__auto___330 < len__3984__auto___329)){
args__3987__auto__.push((arguments[i__3985__auto___330]));

var G__331 = (i__3985__auto___330 + (1));
i__3985__auto___330 = G__331;
continue;
} else {
}
break;
}

var argseq__3988__auto__ = ((((0) < args__3987__auto__.length))?(new cljs.core.IndexedSeq(args__3987__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__3988__auto__);
});})(g__6363__auto___328))
;

cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__6363__auto___328){
return (function (args){
return cljs.core.deref.call(null,g__6363__auto___328);
});})(g__6363__auto___328))
;

cljs.spec.impl.gen.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_ascii.cljs$lang$applyTo = ((function (g__6363__auto___328){
return (function (seq259){
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq259));
});})(g__6363__auto___328))
;


var g__6363__auto___332 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.impl.gen.string_alphanumeric = ((function (g__6363__auto___332){
return (function cljs$spec$impl$gen$string_alphanumeric(var_args){
var args__3987__auto__ = [];
var len__3984__auto___333 = arguments.length;
var i__3985__auto___334 = (0);
while(true){
if((i__3985__auto___334 < len__3984__auto___333)){
args__3987__auto__.push((arguments[i__3985__auto___334]));

var G__335 = (i__3985__auto___334 + (1));
i__3985__auto___334 = G__335;
continue;
} else {
}
break;
}

var argseq__3988__auto__ = ((((0) < args__3987__auto__.length))?(new cljs.core.IndexedSeq(args__3987__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__3988__auto__);
});})(g__6363__auto___332))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__6363__auto___332){
return (function (args){
return cljs.core.deref.call(null,g__6363__auto___332);
});})(g__6363__auto___332))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$applyTo = ((function (g__6363__auto___332){
return (function (seq260){
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq260));
});})(g__6363__auto___332))
;


var g__6363__auto___336 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.impl.gen.symbol = ((function (g__6363__auto___336){
return (function cljs$spec$impl$gen$symbol(var_args){
var args__3987__auto__ = [];
var len__3984__auto___337 = arguments.length;
var i__3985__auto___338 = (0);
while(true){
if((i__3985__auto___338 < len__3984__auto___337)){
args__3987__auto__.push((arguments[i__3985__auto___338]));

var G__339 = (i__3985__auto___338 + (1));
i__3985__auto___338 = G__339;
continue;
} else {
}
break;
}

var argseq__3988__auto__ = ((((0) < args__3987__auto__.length))?(new cljs.core.IndexedSeq(args__3987__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__3988__auto__);
});})(g__6363__auto___336))
;

cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__6363__auto___336){
return (function (args){
return cljs.core.deref.call(null,g__6363__auto___336);
});})(g__6363__auto___336))
;

cljs.spec.impl.gen.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol.cljs$lang$applyTo = ((function (g__6363__auto___336){
return (function (seq261){
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq261));
});})(g__6363__auto___336))
;


var g__6363__auto___340 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.impl.gen.symbol_ns = ((function (g__6363__auto___340){
return (function cljs$spec$impl$gen$symbol_ns(var_args){
var args__3987__auto__ = [];
var len__3984__auto___341 = arguments.length;
var i__3985__auto___342 = (0);
while(true){
if((i__3985__auto___342 < len__3984__auto___341)){
args__3987__auto__.push((arguments[i__3985__auto___342]));

var G__343 = (i__3985__auto___342 + (1));
i__3985__auto___342 = G__343;
continue;
} else {
}
break;
}

var argseq__3988__auto__ = ((((0) < args__3987__auto__.length))?(new cljs.core.IndexedSeq(args__3987__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__3988__auto__);
});})(g__6363__auto___340))
;

cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__6363__auto___340){
return (function (args){
return cljs.core.deref.call(null,g__6363__auto___340);
});})(g__6363__auto___340))
;

cljs.spec.impl.gen.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol_ns.cljs$lang$applyTo = ((function (g__6363__auto___340){
return (function (seq262){
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq262));
});})(g__6363__auto___340))
;


var g__6363__auto___344 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.impl.gen.uuid = ((function (g__6363__auto___344){
return (function cljs$spec$impl$gen$uuid(var_args){
var args__3987__auto__ = [];
var len__3984__auto___345 = arguments.length;
var i__3985__auto___346 = (0);
while(true){
if((i__3985__auto___346 < len__3984__auto___345)){
args__3987__auto__.push((arguments[i__3985__auto___346]));

var G__347 = (i__3985__auto___346 + (1));
i__3985__auto___346 = G__347;
continue;
} else {
}
break;
}

var argseq__3988__auto__ = ((((0) < args__3987__auto__.length))?(new cljs.core.IndexedSeq(args__3987__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__3988__auto__);
});})(g__6363__auto___344))
;

cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__6363__auto___344){
return (function (args){
return cljs.core.deref.call(null,g__6363__auto___344);
});})(g__6363__auto___344))
;

cljs.spec.impl.gen.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.uuid.cljs$lang$applyTo = ((function (g__6363__auto___344){
return (function (seq263){
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq263));
});})(g__6363__auto___344))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.impl.gen.cat = (function cljs$spec$impl$gen$cat(var_args){
var args__3987__auto__ = [];
var len__3984__auto___350 = arguments.length;
var i__3985__auto___351 = (0);
while(true){
if((i__3985__auto___351 < len__3984__auto___350)){
args__3987__auto__.push((arguments[i__3985__auto___351]));

var G__352 = (i__3985__auto___351 + (1));
i__3985__auto___351 = G__352;
continue;
} else {
}
break;
}

var argseq__3988__auto__ = ((((0) < args__3987__auto__.length))?(new cljs.core.IndexedSeq(args__3987__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__3988__auto__);
});

cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.impl.gen.fmap.call(null,(function (p1__348_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__348_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.impl.gen.tuple,gens));
});

cljs.spec.impl.gen.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.cat.cljs$lang$applyTo = (function (seq349){
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq349));
});

cljs.spec.impl.gen.qualified_QMARK_ = (function cljs$spec$impl$gen$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.impl.gen.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.impl.gen.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.float_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.double_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.keyword_ns.call(null)),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.any_printable.call(null)], null)),cljs.spec.impl.gen.boolean$.call(null),cljs.spec.impl.gen.char$.call(null),cljs.spec.impl.gen.fmap.call(null,((function (simple){
return (function (p1__353_SHARP_){
return (new Date(p1__353_SHARP_));
});})(simple))
,cljs.spec.impl.gen.large_integer.call(null)),cljs.spec.impl.gen.symbol.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.double$.call(null),cljs.spec.impl.gen.set.call(null,simple),cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.elements.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.List.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashSet.EMPTY], null)),cljs.spec.impl.gen.string_alphanumeric.call(null),cljs.spec.impl.gen.double$.call(null),cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.return$.call(null,(0)),cljs.spec.impl.gen.keyword.call(null),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max","max",61366548),(-1)], null)),cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.symbol_ns.call(null)], null)),cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.symbol_ns.call(null)], null))),cljs.spec.impl.gen.return$.call(null,true),cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(0)], null)),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(1)], null)),cljs.spec.impl.gen.uuid.call(null),cljs.spec.impl.gen.return$.call(null,false),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword.call(null),cljs.spec.impl.gen.symbol.call(null)], null)),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.double$.call(null)], null)),cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.symbol_ns.call(null)),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.set.call(null,simple),cljs.spec.impl.gen.string_alphanumeric.call(null)], null)),cljs.spec.impl.gen.symbol_ns.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.set.call(null,simple)], null))]);
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

//# sourceMappingURL=gen.js.map