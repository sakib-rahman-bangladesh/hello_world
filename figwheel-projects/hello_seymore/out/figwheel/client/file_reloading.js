// Compiled by ClojureScript 1.9.908 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('figwheel.client.utils');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.object');
goog.require('goog.net.jsloader');
goog.require('goog.html.legacyconversions');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.core.async');
goog.require('goog.async.Deferred');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__27989__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__27989__auto__){
return or__27989__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return goog.object.get(goog.dependencies_.nameToPath,ns);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return goog.object.get(goog.dependencies_.written,figwheel.client.file_reloading.name__GT_path.call(null,ns));
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__27989__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["cljs.nodejs",null,"goog",null,"cljs.core",null], null), null).call(null,name);
if(cljs.core.truth_(or__27989__auto__)){
return or__27989__auto__;
} else {
var or__27989__auto____$1 = goog.string.startsWith("clojure.",name);
if(cljs.core.truth_(or__27989__auto____$1)){
return or__27989__auto____$1;
} else {
return goog.string.startsWith("goog.",name);
}
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__34348_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__34348_SHARP_));
}),goog.object.getKeys(goog.object.get(goog.dependencies_.requires,figwheel.client.file_reloading.name__GT_path.call(null,ns)))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([name]));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([parent_ns]));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__34349 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__34350 = null;
var count__34351 = (0);
var i__34352 = (0);
while(true){
if((i__34352 < count__34351)){
var n = cljs.core._nth.call(null,chunk__34350,i__34352);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__34353 = seq__34349;
var G__34354 = chunk__34350;
var G__34355 = count__34351;
var G__34356 = (i__34352 + (1));
seq__34349 = G__34353;
chunk__34350 = G__34354;
count__34351 = G__34355;
i__34352 = G__34356;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__34349);
if(temp__4657__auto__){
var seq__34349__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34349__$1)){
var c__28828__auto__ = cljs.core.chunk_first.call(null,seq__34349__$1);
var G__34357 = cljs.core.chunk_rest.call(null,seq__34349__$1);
var G__34358 = c__28828__auto__;
var G__34359 = cljs.core.count.call(null,c__28828__auto__);
var G__34360 = (0);
seq__34349 = G__34357;
chunk__34350 = G__34358;
count__34351 = G__34359;
i__34352 = G__34360;
continue;
} else {
var n = cljs.core.first.call(null,seq__34349__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__34361 = cljs.core.next.call(null,seq__34349__$1);
var G__34362 = null;
var G__34363 = (0);
var G__34364 = (0);
seq__34349 = G__34361;
chunk__34350 = G__34362;
count__34351 = G__34363;
i__34352 = G__34364;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__34374_34382 = cljs.core.seq.call(null,deps);
var chunk__34375_34383 = null;
var count__34376_34384 = (0);
var i__34377_34385 = (0);
while(true){
if((i__34377_34385 < count__34376_34384)){
var dep_34386 = cljs.core._nth.call(null,chunk__34375_34383,i__34377_34385);
topo_sort_helper_STAR_.call(null,dep_34386,(depth + (1)),state);

var G__34387 = seq__34374_34382;
var G__34388 = chunk__34375_34383;
var G__34389 = count__34376_34384;
var G__34390 = (i__34377_34385 + (1));
seq__34374_34382 = G__34387;
chunk__34375_34383 = G__34388;
count__34376_34384 = G__34389;
i__34377_34385 = G__34390;
continue;
} else {
var temp__4657__auto___34391 = cljs.core.seq.call(null,seq__34374_34382);
if(temp__4657__auto___34391){
var seq__34374_34392__$1 = temp__4657__auto___34391;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34374_34392__$1)){
var c__28828__auto___34393 = cljs.core.chunk_first.call(null,seq__34374_34392__$1);
var G__34394 = cljs.core.chunk_rest.call(null,seq__34374_34392__$1);
var G__34395 = c__28828__auto___34393;
var G__34396 = cljs.core.count.call(null,c__28828__auto___34393);
var G__34397 = (0);
seq__34374_34382 = G__34394;
chunk__34375_34383 = G__34395;
count__34376_34384 = G__34396;
i__34377_34385 = G__34397;
continue;
} else {
var dep_34398 = cljs.core.first.call(null,seq__34374_34392__$1);
topo_sort_helper_STAR_.call(null,dep_34398,(depth + (1)),state);

var G__34399 = cljs.core.next.call(null,seq__34374_34392__$1);
var G__34400 = null;
var G__34401 = (0);
var G__34402 = (0);
seq__34374_34382 = G__34399;
chunk__34375_34383 = G__34400;
count__34376_34384 = G__34401;
i__34377_34385 = G__34402;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__34378){
var vec__34379 = p__34378;
var seq__34380 = cljs.core.seq.call(null,vec__34379);
var first__34381 = cljs.core.first.call(null,seq__34380);
var seq__34380__$1 = cljs.core.next.call(null,seq__34380);
var x = first__34381;
var xs = seq__34380__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__34379,seq__34380,first__34381,seq__34380__$1,x,xs,get_deps__$1){
return (function (p1__34365_SHARP_){
return clojure.set.difference.call(null,p1__34365_SHARP_,x);
});})(vec__34379,seq__34380,first__34381,seq__34380__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,figwheel.client.file_reloading.immutable_ns_QMARK_),cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss)))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__34403 = cljs.core.seq.call(null,provides);
var chunk__34404 = null;
var count__34405 = (0);
var i__34406 = (0);
while(true){
if((i__34406 < count__34405)){
var prov = cljs.core._nth.call(null,chunk__34404,i__34406);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__34407_34415 = cljs.core.seq.call(null,requires);
var chunk__34408_34416 = null;
var count__34409_34417 = (0);
var i__34410_34418 = (0);
while(true){
if((i__34410_34418 < count__34409_34417)){
var req_34419 = cljs.core._nth.call(null,chunk__34408_34416,i__34410_34418);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_34419,prov);

var G__34420 = seq__34407_34415;
var G__34421 = chunk__34408_34416;
var G__34422 = count__34409_34417;
var G__34423 = (i__34410_34418 + (1));
seq__34407_34415 = G__34420;
chunk__34408_34416 = G__34421;
count__34409_34417 = G__34422;
i__34410_34418 = G__34423;
continue;
} else {
var temp__4657__auto___34424 = cljs.core.seq.call(null,seq__34407_34415);
if(temp__4657__auto___34424){
var seq__34407_34425__$1 = temp__4657__auto___34424;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34407_34425__$1)){
var c__28828__auto___34426 = cljs.core.chunk_first.call(null,seq__34407_34425__$1);
var G__34427 = cljs.core.chunk_rest.call(null,seq__34407_34425__$1);
var G__34428 = c__28828__auto___34426;
var G__34429 = cljs.core.count.call(null,c__28828__auto___34426);
var G__34430 = (0);
seq__34407_34415 = G__34427;
chunk__34408_34416 = G__34428;
count__34409_34417 = G__34429;
i__34410_34418 = G__34430;
continue;
} else {
var req_34431 = cljs.core.first.call(null,seq__34407_34425__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_34431,prov);

var G__34432 = cljs.core.next.call(null,seq__34407_34425__$1);
var G__34433 = null;
var G__34434 = (0);
var G__34435 = (0);
seq__34407_34415 = G__34432;
chunk__34408_34416 = G__34433;
count__34409_34417 = G__34434;
i__34410_34418 = G__34435;
continue;
}
} else {
}
}
break;
}

var G__34436 = seq__34403;
var G__34437 = chunk__34404;
var G__34438 = count__34405;
var G__34439 = (i__34406 + (1));
seq__34403 = G__34436;
chunk__34404 = G__34437;
count__34405 = G__34438;
i__34406 = G__34439;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__34403);
if(temp__4657__auto__){
var seq__34403__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34403__$1)){
var c__28828__auto__ = cljs.core.chunk_first.call(null,seq__34403__$1);
var G__34440 = cljs.core.chunk_rest.call(null,seq__34403__$1);
var G__34441 = c__28828__auto__;
var G__34442 = cljs.core.count.call(null,c__28828__auto__);
var G__34443 = (0);
seq__34403 = G__34440;
chunk__34404 = G__34441;
count__34405 = G__34442;
i__34406 = G__34443;
continue;
} else {
var prov = cljs.core.first.call(null,seq__34403__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__34411_34444 = cljs.core.seq.call(null,requires);
var chunk__34412_34445 = null;
var count__34413_34446 = (0);
var i__34414_34447 = (0);
while(true){
if((i__34414_34447 < count__34413_34446)){
var req_34448 = cljs.core._nth.call(null,chunk__34412_34445,i__34414_34447);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_34448,prov);

var G__34449 = seq__34411_34444;
var G__34450 = chunk__34412_34445;
var G__34451 = count__34413_34446;
var G__34452 = (i__34414_34447 + (1));
seq__34411_34444 = G__34449;
chunk__34412_34445 = G__34450;
count__34413_34446 = G__34451;
i__34414_34447 = G__34452;
continue;
} else {
var temp__4657__auto___34453__$1 = cljs.core.seq.call(null,seq__34411_34444);
if(temp__4657__auto___34453__$1){
var seq__34411_34454__$1 = temp__4657__auto___34453__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34411_34454__$1)){
var c__28828__auto___34455 = cljs.core.chunk_first.call(null,seq__34411_34454__$1);
var G__34456 = cljs.core.chunk_rest.call(null,seq__34411_34454__$1);
var G__34457 = c__28828__auto___34455;
var G__34458 = cljs.core.count.call(null,c__28828__auto___34455);
var G__34459 = (0);
seq__34411_34444 = G__34456;
chunk__34412_34445 = G__34457;
count__34413_34446 = G__34458;
i__34414_34447 = G__34459;
continue;
} else {
var req_34460 = cljs.core.first.call(null,seq__34411_34454__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_34460,prov);

var G__34461 = cljs.core.next.call(null,seq__34411_34454__$1);
var G__34462 = null;
var G__34463 = (0);
var G__34464 = (0);
seq__34411_34444 = G__34461;
chunk__34412_34445 = G__34462;
count__34413_34446 = G__34463;
i__34414_34447 = G__34464;
continue;
}
} else {
}
}
break;
}

var G__34465 = cljs.core.next.call(null,seq__34403__$1);
var G__34466 = null;
var G__34467 = (0);
var G__34468 = (0);
seq__34403 = G__34465;
chunk__34404 = G__34466;
count__34405 = G__34467;
i__34406 = G__34468;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel.client.file_reloading.figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__34469_34473 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__34470_34474 = null;
var count__34471_34475 = (0);
var i__34472_34476 = (0);
while(true){
if((i__34472_34476 < count__34471_34475)){
var ns_34477 = cljs.core._nth.call(null,chunk__34470_34474,i__34472_34476);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_34477);

var G__34478 = seq__34469_34473;
var G__34479 = chunk__34470_34474;
var G__34480 = count__34471_34475;
var G__34481 = (i__34472_34476 + (1));
seq__34469_34473 = G__34478;
chunk__34470_34474 = G__34479;
count__34471_34475 = G__34480;
i__34472_34476 = G__34481;
continue;
} else {
var temp__4657__auto___34482 = cljs.core.seq.call(null,seq__34469_34473);
if(temp__4657__auto___34482){
var seq__34469_34483__$1 = temp__4657__auto___34482;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34469_34483__$1)){
var c__28828__auto___34484 = cljs.core.chunk_first.call(null,seq__34469_34483__$1);
var G__34485 = cljs.core.chunk_rest.call(null,seq__34469_34483__$1);
var G__34486 = c__28828__auto___34484;
var G__34487 = cljs.core.count.call(null,c__28828__auto___34484);
var G__34488 = (0);
seq__34469_34473 = G__34485;
chunk__34470_34474 = G__34486;
count__34471_34475 = G__34487;
i__34472_34476 = G__34488;
continue;
} else {
var ns_34489 = cljs.core.first.call(null,seq__34469_34483__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_34489);

var G__34490 = cljs.core.next.call(null,seq__34469_34483__$1);
var G__34491 = null;
var G__34492 = (0);
var G__34493 = (0);
seq__34469_34473 = G__34490;
chunk__34470_34474 = G__34491;
count__34471_34475 = G__34492;
i__34472_34476 = G__34493;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__27989__auto__ = goog.require__;
if(cljs.core.truth_(or__27989__auto__)){
return or__27989__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__34494__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__34494 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__34495__i = 0, G__34495__a = new Array(arguments.length -  0);
while (G__34495__i < G__34495__a.length) {G__34495__a[G__34495__i] = arguments[G__34495__i + 0]; ++G__34495__i;}
  args = new cljs.core.IndexedSeq(G__34495__a,0,null);
} 
return G__34494__delegate.call(this,args);};
G__34494.cljs$lang$maxFixedArity = 0;
G__34494.cljs$lang$applyTo = (function (arglist__34496){
var args = cljs.core.seq(arglist__34496);
return G__34494__delegate(args);
});
G__34494.cljs$core$IFn$_invoke$arity$variadic = G__34494__delegate;
return G__34494;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
return (
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
)
;
}
});
figwheel.client.file_reloading.gloader = ((typeof goog.net.jsloader.safeLoad !== 'undefined')?(function (p1__34497_SHARP_,p2__34498_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__34497_SHARP_)].join('')),p2__34498_SHARP_);
}):((typeof goog.net.jsloader.load !== 'undefined')?(function (p1__34499_SHARP_,p2__34500_SHARP_){
return goog.net.jsloader.load([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__34499_SHARP_)].join(''),p2__34500_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__34501 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__34501.addCallback(((function (G__34501){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__34501))
);

G__34501.addErrback(((function (G__34501){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__34501))
);

return G__34501;
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__34502 = cljs.core._EQ_;
var expr__34503 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__34502.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__34503))){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern,pred__34502,expr__34503){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern,pred__34502,expr__34503))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path,pred__34502,expr__34503){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e34505){if((e34505 instanceof Error)){
var e = e34505;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e34505;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path,pred__34502,expr__34503))
} else {
if(cljs.core.truth_(pred__34502.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__34503))){
return figwheel.client.file_reloading.reload_file_in_html_env;
} else {
if(cljs.core.truth_(pred__34502.call(null,new cljs.core.Keyword(null,"react-native","react-native",-1543085138),expr__34503))){
return figwheel.client.file_reloading.reload_file_in_html_env;
} else {
if(cljs.core.truth_(pred__34502.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__34503))){
return ((function (pred__34502,expr__34503){
return (function (request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e34506){if((e34506 instanceof Error)){
var e = e34506;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e34506;

}
}})());
});
;})(pred__34502,expr__34503))
} else {
return ((function (pred__34502,expr__34503){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__34502,expr__34503))
}
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__34507,callback){
var map__34508 = p__34507;
var map__34508__$1 = ((((!((map__34508 == null)))?((((map__34508.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34508.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34508):map__34508);
var file_msg = map__34508__$1;
var request_url = cljs.core.get.call(null,map__34508__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__34508,map__34508__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__34508,map__34508__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__30588__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30588__auto__){
return (function (){
var f__30589__auto__ = (function (){var switch__30500__auto__ = ((function (c__30588__auto__){
return (function (state_34532){
var state_val_34533 = (state_34532[(1)]);
if((state_val_34533 === (7))){
var inst_34528 = (state_34532[(2)]);
var state_34532__$1 = state_34532;
var statearr_34534_34551 = state_34532__$1;
(statearr_34534_34551[(2)] = inst_34528);

(statearr_34534_34551[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34533 === (1))){
var state_34532__$1 = state_34532;
var statearr_34535_34552 = state_34532__$1;
(statearr_34535_34552[(2)] = null);

(statearr_34535_34552[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34533 === (4))){
var inst_34512 = (state_34532[(7)]);
var inst_34512__$1 = (state_34532[(2)]);
var state_34532__$1 = (function (){var statearr_34536 = state_34532;
(statearr_34536[(7)] = inst_34512__$1);

return statearr_34536;
})();
if(cljs.core.truth_(inst_34512__$1)){
var statearr_34537_34553 = state_34532__$1;
(statearr_34537_34553[(1)] = (5));

} else {
var statearr_34538_34554 = state_34532__$1;
(statearr_34538_34554[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34533 === (6))){
var state_34532__$1 = state_34532;
var statearr_34539_34555 = state_34532__$1;
(statearr_34539_34555[(2)] = null);

(statearr_34539_34555[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34533 === (3))){
var inst_34530 = (state_34532[(2)]);
var state_34532__$1 = state_34532;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34532__$1,inst_34530);
} else {
if((state_val_34533 === (2))){
var state_34532__$1 = state_34532;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34532__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_34533 === (11))){
var inst_34524 = (state_34532[(2)]);
var state_34532__$1 = (function (){var statearr_34540 = state_34532;
(statearr_34540[(8)] = inst_34524);

return statearr_34540;
})();
var statearr_34541_34556 = state_34532__$1;
(statearr_34541_34556[(2)] = null);

(statearr_34541_34556[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34533 === (9))){
var inst_34516 = (state_34532[(9)]);
var inst_34518 = (state_34532[(10)]);
var inst_34520 = inst_34518.call(null,inst_34516);
var state_34532__$1 = state_34532;
var statearr_34542_34557 = state_34532__$1;
(statearr_34542_34557[(2)] = inst_34520);

(statearr_34542_34557[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34533 === (5))){
var inst_34512 = (state_34532[(7)]);
var inst_34514 = figwheel.client.file_reloading.blocking_load.call(null,inst_34512);
var state_34532__$1 = state_34532;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34532__$1,(8),inst_34514);
} else {
if((state_val_34533 === (10))){
var inst_34516 = (state_34532[(9)]);
var inst_34522 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_34516);
var state_34532__$1 = state_34532;
var statearr_34543_34558 = state_34532__$1;
(statearr_34543_34558[(2)] = inst_34522);

(statearr_34543_34558[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34533 === (8))){
var inst_34518 = (state_34532[(10)]);
var inst_34512 = (state_34532[(7)]);
var inst_34516 = (state_34532[(2)]);
var inst_34517 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_34518__$1 = cljs.core.get.call(null,inst_34517,inst_34512);
var state_34532__$1 = (function (){var statearr_34544 = state_34532;
(statearr_34544[(9)] = inst_34516);

(statearr_34544[(10)] = inst_34518__$1);

return statearr_34544;
})();
if(cljs.core.truth_(inst_34518__$1)){
var statearr_34545_34559 = state_34532__$1;
(statearr_34545_34559[(1)] = (9));

} else {
var statearr_34546_34560 = state_34532__$1;
(statearr_34546_34560[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__30588__auto__))
;
return ((function (switch__30500__auto__,c__30588__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__30501__auto__ = null;
var figwheel$client$file_reloading$state_machine__30501__auto____0 = (function (){
var statearr_34547 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34547[(0)] = figwheel$client$file_reloading$state_machine__30501__auto__);

(statearr_34547[(1)] = (1));

return statearr_34547;
});
var figwheel$client$file_reloading$state_machine__30501__auto____1 = (function (state_34532){
while(true){
var ret_value__30502__auto__ = (function (){try{while(true){
var result__30503__auto__ = switch__30500__auto__.call(null,state_34532);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30503__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30503__auto__;
}
break;
}
}catch (e34548){if((e34548 instanceof Object)){
var ex__30504__auto__ = e34548;
var statearr_34549_34561 = state_34532;
(statearr_34549_34561[(5)] = ex__30504__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34532);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34548;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30502__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34562 = state_34532;
state_34532 = G__34562;
continue;
} else {
return ret_value__30502__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__30501__auto__ = function(state_34532){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__30501__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__30501__auto____1.call(this,state_34532);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$state_machine__30501__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__30501__auto____0;
figwheel$client$file_reloading$state_machine__30501__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__30501__auto____1;
return figwheel$client$file_reloading$state_machine__30501__auto__;
})()
;})(switch__30500__auto__,c__30588__auto__))
})();
var state__30590__auto__ = (function (){var statearr_34550 = f__30589__auto__.call(null);
(statearr_34550[(6)] = c__30588__auto__);

return statearr_34550;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30590__auto__);
});})(c__30588__auto__))
);

return c__30588__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__34563,callback){
var map__34564 = p__34563;
var map__34564__$1 = ((((!((map__34564 == null)))?((((map__34564.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34564.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34564):map__34564);
var file_msg = map__34564__$1;
var namespace = cljs.core.get.call(null,map__34564__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__34564,map__34564__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__34564,map__34564__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__34566){
var map__34567 = p__34566;
var map__34567__$1 = ((((!((map__34567 == null)))?((((map__34567.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34567.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34567):map__34567);
var file_msg = map__34567__$1;
var namespace = cljs.core.get.call(null,map__34567__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__34569){
var map__34570 = p__34569;
var map__34570__$1 = ((((!((map__34570 == null)))?((((map__34570.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34570.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34570):map__34570);
var file_msg = map__34570__$1;
var namespace = cljs.core.get.call(null,map__34570__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__27977__auto__ = cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg));
if(and__27977__auto__){
var or__27989__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__27989__auto__)){
return or__27989__auto__;
} else {
var or__27989__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__27989__auto____$1)){
return or__27989__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__27977__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__34572,callback){
var map__34573 = p__34572;
var map__34573__$1 = ((((!((map__34573 == null)))?((((map__34573.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34573.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34573):map__34573);
var file_msg = map__34573__$1;
var request_url = cljs.core.get.call(null,map__34573__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__34573__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,["Figwheel: Not trying to load file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__30588__auto___34623 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30588__auto___34623,out){
return (function (){
var f__30589__auto__ = (function (){var switch__30500__auto__ = ((function (c__30588__auto___34623,out){
return (function (state_34608){
var state_val_34609 = (state_34608[(1)]);
if((state_val_34609 === (1))){
var inst_34582 = cljs.core.seq.call(null,files);
var inst_34583 = cljs.core.first.call(null,inst_34582);
var inst_34584 = cljs.core.next.call(null,inst_34582);
var inst_34585 = files;
var state_34608__$1 = (function (){var statearr_34610 = state_34608;
(statearr_34610[(7)] = inst_34584);

(statearr_34610[(8)] = inst_34585);

(statearr_34610[(9)] = inst_34583);

return statearr_34610;
})();
var statearr_34611_34624 = state_34608__$1;
(statearr_34611_34624[(2)] = null);

(statearr_34611_34624[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34609 === (2))){
var inst_34591 = (state_34608[(10)]);
var inst_34585 = (state_34608[(8)]);
var inst_34590 = cljs.core.seq.call(null,inst_34585);
var inst_34591__$1 = cljs.core.first.call(null,inst_34590);
var inst_34592 = cljs.core.next.call(null,inst_34590);
var inst_34593 = (inst_34591__$1 == null);
var inst_34594 = cljs.core.not.call(null,inst_34593);
var state_34608__$1 = (function (){var statearr_34612 = state_34608;
(statearr_34612[(10)] = inst_34591__$1);

(statearr_34612[(11)] = inst_34592);

return statearr_34612;
})();
if(inst_34594){
var statearr_34613_34625 = state_34608__$1;
(statearr_34613_34625[(1)] = (4));

} else {
var statearr_34614_34626 = state_34608__$1;
(statearr_34614_34626[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34609 === (3))){
var inst_34606 = (state_34608[(2)]);
var state_34608__$1 = state_34608;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34608__$1,inst_34606);
} else {
if((state_val_34609 === (4))){
var inst_34591 = (state_34608[(10)]);
var inst_34596 = figwheel.client.file_reloading.reload_js_file.call(null,inst_34591);
var state_34608__$1 = state_34608;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34608__$1,(7),inst_34596);
} else {
if((state_val_34609 === (5))){
var inst_34602 = cljs.core.async.close_BANG_.call(null,out);
var state_34608__$1 = state_34608;
var statearr_34615_34627 = state_34608__$1;
(statearr_34615_34627[(2)] = inst_34602);

(statearr_34615_34627[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34609 === (6))){
var inst_34604 = (state_34608[(2)]);
var state_34608__$1 = state_34608;
var statearr_34616_34628 = state_34608__$1;
(statearr_34616_34628[(2)] = inst_34604);

(statearr_34616_34628[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34609 === (7))){
var inst_34592 = (state_34608[(11)]);
var inst_34598 = (state_34608[(2)]);
var inst_34599 = cljs.core.async.put_BANG_.call(null,out,inst_34598);
var inst_34585 = inst_34592;
var state_34608__$1 = (function (){var statearr_34617 = state_34608;
(statearr_34617[(12)] = inst_34599);

(statearr_34617[(8)] = inst_34585);

return statearr_34617;
})();
var statearr_34618_34629 = state_34608__$1;
(statearr_34618_34629[(2)] = null);

(statearr_34618_34629[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__30588__auto___34623,out))
;
return ((function (switch__30500__auto__,c__30588__auto___34623,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__30501__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__30501__auto____0 = (function (){
var statearr_34619 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34619[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__30501__auto__);

(statearr_34619[(1)] = (1));

return statearr_34619;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__30501__auto____1 = (function (state_34608){
while(true){
var ret_value__30502__auto__ = (function (){try{while(true){
var result__30503__auto__ = switch__30500__auto__.call(null,state_34608);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30503__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30503__auto__;
}
break;
}
}catch (e34620){if((e34620 instanceof Object)){
var ex__30504__auto__ = e34620;
var statearr_34621_34630 = state_34608;
(statearr_34621_34630[(5)] = ex__30504__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34608);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34620;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30502__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34631 = state_34608;
state_34608 = G__34631;
continue;
} else {
return ret_value__30502__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__30501__auto__ = function(state_34608){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__30501__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__30501__auto____1.call(this,state_34608);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__30501__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__30501__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__30501__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__30501__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__30501__auto__;
})()
;})(switch__30500__auto__,c__30588__auto___34623,out))
})();
var state__30590__auto__ = (function (){var statearr_34622 = f__30589__auto__.call(null);
(statearr_34622[(6)] = c__30588__auto___34623);

return statearr_34622;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30590__auto__);
});})(c__30588__auto___34623,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__34632,opts){
var map__34633 = p__34632;
var map__34633__$1 = ((((!((map__34633 == null)))?((((map__34633.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34633.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34633):map__34633);
var eval_body = cljs.core.get.call(null,map__34633__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__34633__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__27977__auto__ = eval_body;
if(cljs.core.truth_(and__27977__auto__)){
return typeof eval_body === 'string';
} else {
return and__27977__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,["Evaling file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e34635){var e = e34635;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Unable to evaluate ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4655__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__34636_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__34636_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4655__auto__)){
var file_msg = temp__4655__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__34637){
var vec__34638 = p__34637;
var k = cljs.core.nth.call(null,vec__34638,(0),null);
var v = cljs.core.nth.call(null,vec__34638,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__34641){
var vec__34642 = p__34641;
var k = cljs.core.nth.call(null,vec__34642,(0),null);
var v = cljs.core.nth.call(null,vec__34642,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__34648,p__34649){
var map__34650 = p__34648;
var map__34650__$1 = ((((!((map__34650 == null)))?((((map__34650.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34650.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34650):map__34650);
var opts = map__34650__$1;
var before_jsload = cljs.core.get.call(null,map__34650__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__34650__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__34650__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__34651 = p__34649;
var map__34651__$1 = ((((!((map__34651 == null)))?((((map__34651.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34651.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34651):map__34651);
var msg = map__34651__$1;
var files = cljs.core.get.call(null,map__34651__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__34651__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__34651__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__30588__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30588__auto__,map__34650,map__34650__$1,opts,before_jsload,on_jsload,reload_dependents,map__34651,map__34651__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__30589__auto__ = (function (){var switch__30500__auto__ = ((function (c__30588__auto__,map__34650,map__34650__$1,opts,before_jsload,on_jsload,reload_dependents,map__34651,map__34651__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_34805){
var state_val_34806 = (state_34805[(1)]);
if((state_val_34806 === (7))){
var inst_34665 = (state_34805[(7)]);
var inst_34668 = (state_34805[(8)]);
var inst_34666 = (state_34805[(9)]);
var inst_34667 = (state_34805[(10)]);
var inst_34673 = cljs.core._nth.call(null,inst_34666,inst_34668);
var inst_34674 = figwheel.client.file_reloading.eval_body.call(null,inst_34673,opts);
var inst_34675 = (inst_34668 + (1));
var tmp34807 = inst_34665;
var tmp34808 = inst_34666;
var tmp34809 = inst_34667;
var inst_34665__$1 = tmp34807;
var inst_34666__$1 = tmp34808;
var inst_34667__$1 = tmp34809;
var inst_34668__$1 = inst_34675;
var state_34805__$1 = (function (){var statearr_34810 = state_34805;
(statearr_34810[(7)] = inst_34665__$1);

(statearr_34810[(8)] = inst_34668__$1);

(statearr_34810[(11)] = inst_34674);

(statearr_34810[(9)] = inst_34666__$1);

(statearr_34810[(10)] = inst_34667__$1);

return statearr_34810;
})();
var statearr_34811_34894 = state_34805__$1;
(statearr_34811_34894[(2)] = null);

(statearr_34811_34894[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34806 === (20))){
var inst_34708 = (state_34805[(12)]);
var inst_34716 = figwheel.client.file_reloading.sort_files.call(null,inst_34708);
var state_34805__$1 = state_34805;
var statearr_34812_34895 = state_34805__$1;
(statearr_34812_34895[(2)] = inst_34716);

(statearr_34812_34895[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34806 === (27))){
var state_34805__$1 = state_34805;
var statearr_34813_34896 = state_34805__$1;
(statearr_34813_34896[(2)] = null);

(statearr_34813_34896[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34806 === (1))){
var inst_34657 = (state_34805[(13)]);
var inst_34654 = before_jsload.call(null,files);
var inst_34655 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_34656 = (function (){return ((function (inst_34657,inst_34654,inst_34655,state_val_34806,c__30588__auto__,map__34650,map__34650__$1,opts,before_jsload,on_jsload,reload_dependents,map__34651,map__34651__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__34645_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__34645_SHARP_);
});
;})(inst_34657,inst_34654,inst_34655,state_val_34806,c__30588__auto__,map__34650,map__34650__$1,opts,before_jsload,on_jsload,reload_dependents,map__34651,map__34651__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34657__$1 = cljs.core.filter.call(null,inst_34656,files);
var inst_34658 = cljs.core.not_empty.call(null,inst_34657__$1);
var state_34805__$1 = (function (){var statearr_34814 = state_34805;
(statearr_34814[(13)] = inst_34657__$1);

(statearr_34814[(14)] = inst_34655);

(statearr_34814[(15)] = inst_34654);

return statearr_34814;
})();
if(cljs.core.truth_(inst_34658)){
var statearr_34815_34897 = state_34805__$1;
(statearr_34815_34897[(1)] = (2));

} else {
var statearr_34816_34898 = state_34805__$1;
(statearr_34816_34898[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34806 === (24))){
var state_34805__$1 = state_34805;
var statearr_34817_34899 = state_34805__$1;
(statearr_34817_34899[(2)] = null);

(statearr_34817_34899[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34806 === (39))){
var inst_34758 = (state_34805[(16)]);
var state_34805__$1 = state_34805;
var statearr_34818_34900 = state_34805__$1;
(statearr_34818_34900[(2)] = inst_34758);

(statearr_34818_34900[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34806 === (46))){
var inst_34800 = (state_34805[(2)]);
var state_34805__$1 = state_34805;
var statearr_34819_34901 = state_34805__$1;
(statearr_34819_34901[(2)] = inst_34800);

(statearr_34819_34901[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34806 === (4))){
var inst_34702 = (state_34805[(2)]);
var inst_34703 = cljs.core.List.EMPTY;
var inst_34704 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_34703);
var inst_34705 = (function (){return ((function (inst_34702,inst_34703,inst_34704,state_val_34806,c__30588__auto__,map__34650,map__34650__$1,opts,before_jsload,on_jsload,reload_dependents,map__34651,map__34651__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__34646_SHARP_){
var and__27977__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__34646_SHARP_);
if(cljs.core.truth_(and__27977__auto__)){
return (cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__34646_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__34646_SHARP_)));
} else {
return and__27977__auto__;
}
});
;})(inst_34702,inst_34703,inst_34704,state_val_34806,c__30588__auto__,map__34650,map__34650__$1,opts,before_jsload,on_jsload,reload_dependents,map__34651,map__34651__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34706 = cljs.core.filter.call(null,inst_34705,files);
var inst_34707 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_34708 = cljs.core.concat.call(null,inst_34706,inst_34707);
var state_34805__$1 = (function (){var statearr_34820 = state_34805;
(statearr_34820[(17)] = inst_34704);

(statearr_34820[(18)] = inst_34702);

(statearr_34820[(12)] = inst_34708);

return statearr_34820;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_34821_34902 = state_34805__$1;
(statearr_34821_34902[(1)] = (16));

} else {
var statearr_34822_34903 = state_34805__$1;
(statearr_34822_34903[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34806 === (15))){
var inst_34692 = (state_34805[(2)]);
var state_34805__$1 = state_34805;
var statearr_34823_34904 = state_34805__$1;
(statearr_34823_34904[(2)] = inst_34692);

(statearr_34823_34904[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34806 === (21))){
var inst_34718 = (state_34805[(19)]);
var inst_34718__$1 = (state_34805[(2)]);
var inst_34719 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_34718__$1);
var state_34805__$1 = (function (){var statearr_34824 = state_34805;
(statearr_34824[(19)] = inst_34718__$1);

return statearr_34824;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34805__$1,(22),inst_34719);
} else {
if((state_val_34806 === (31))){
var inst_34803 = (state_34805[(2)]);
var state_34805__$1 = state_34805;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34805__$1,inst_34803);
} else {
if((state_val_34806 === (32))){
var inst_34758 = (state_34805[(16)]);
var inst_34763 = inst_34758.cljs$lang$protocol_mask$partition0$;
var inst_34764 = (inst_34763 & (64));
var inst_34765 = inst_34758.cljs$core$ISeq$;
var inst_34766 = (cljs.core.PROTOCOL_SENTINEL === inst_34765);
var inst_34767 = (inst_34764) || (inst_34766);
var state_34805__$1 = state_34805;
if(cljs.core.truth_(inst_34767)){
var statearr_34825_34905 = state_34805__$1;
(statearr_34825_34905[(1)] = (35));

} else {
var statearr_34826_34906 = state_34805__$1;
(statearr_34826_34906[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34806 === (40))){
var inst_34780 = (state_34805[(20)]);
var inst_34779 = (state_34805[(2)]);
var inst_34780__$1 = cljs.core.get.call(null,inst_34779,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_34781 = cljs.core.get.call(null,inst_34779,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_34782 = cljs.core.not_empty.call(null,inst_34780__$1);
var state_34805__$1 = (function (){var statearr_34827 = state_34805;
(statearr_34827[(20)] = inst_34780__$1);

(statearr_34827[(21)] = inst_34781);

return statearr_34827;
})();
if(cljs.core.truth_(inst_34782)){
var statearr_34828_34907 = state_34805__$1;
(statearr_34828_34907[(1)] = (41));

} else {
var statearr_34829_34908 = state_34805__$1;
(statearr_34829_34908[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34806 === (33))){
var state_34805__$1 = state_34805;
var statearr_34830_34909 = state_34805__$1;
(statearr_34830_34909[(2)] = false);

(statearr_34830_34909[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34806 === (13))){
var inst_34678 = (state_34805[(22)]);
var inst_34682 = cljs.core.chunk_first.call(null,inst_34678);
var inst_34683 = cljs.core.chunk_rest.call(null,inst_34678);
var inst_34684 = cljs.core.count.call(null,inst_34682);
var inst_34665 = inst_34683;
var inst_34666 = inst_34682;
var inst_34667 = inst_34684;
var inst_34668 = (0);
var state_34805__$1 = (function (){var statearr_34831 = state_34805;
(statearr_34831[(7)] = inst_34665);

(statearr_34831[(8)] = inst_34668);

(statearr_34831[(9)] = inst_34666);

(statearr_34831[(10)] = inst_34667);

return statearr_34831;
})();
var statearr_34832_34910 = state_34805__$1;
(statearr_34832_34910[(2)] = null);

(statearr_34832_34910[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34806 === (22))){
var inst_34721 = (state_34805[(23)]);
var inst_34718 = (state_34805[(19)]);
var inst_34726 = (state_34805[(24)]);
var inst_34722 = (state_34805[(25)]);
var inst_34721__$1 = (state_34805[(2)]);
var inst_34722__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_34721__$1);
var inst_34723 = (function (){var all_files = inst_34718;
var res_SINGLEQUOTE_ = inst_34721__$1;
var res = inst_34722__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_34721,inst_34718,inst_34726,inst_34722,inst_34721__$1,inst_34722__$1,state_val_34806,c__30588__auto__,map__34650,map__34650__$1,opts,before_jsload,on_jsload,reload_dependents,map__34651,map__34651__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__34647_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__34647_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_34721,inst_34718,inst_34726,inst_34722,inst_34721__$1,inst_34722__$1,state_val_34806,c__30588__auto__,map__34650,map__34650__$1,opts,before_jsload,on_jsload,reload_dependents,map__34651,map__34651__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34724 = cljs.core.filter.call(null,inst_34723,inst_34721__$1);
var inst_34725 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_34726__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_34725);
var inst_34727 = cljs.core.not_empty.call(null,inst_34726__$1);
var state_34805__$1 = (function (){var statearr_34833 = state_34805;
(statearr_34833[(26)] = inst_34724);

(statearr_34833[(23)] = inst_34721__$1);

(statearr_34833[(24)] = inst_34726__$1);

(statearr_34833[(25)] = inst_34722__$1);

return statearr_34833;
})();
if(cljs.core.truth_(inst_34727)){
var statearr_34834_34911 = state_34805__$1;
(statearr_34834_34911[(1)] = (23));

} else {
var statearr_34835_34912 = state_34805__$1;
(statearr_34835_34912[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34806 === (36))){
var state_34805__$1 = state_34805;
var statearr_34836_34913 = state_34805__$1;
(statearr_34836_34913[(2)] = false);

(statearr_34836_34913[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34806 === (41))){
var inst_34780 = (state_34805[(20)]);
var inst_34784 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_34785 = cljs.core.map.call(null,inst_34784,inst_34780);
var inst_34786 = cljs.core.pr_str.call(null,inst_34785);
var inst_34787 = ["figwheel-no-load meta-data: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_34786)].join('');
var inst_34788 = figwheel.client.utils.log.call(null,inst_34787);
var state_34805__$1 = state_34805;
var statearr_34837_34914 = state_34805__$1;
(statearr_34837_34914[(2)] = inst_34788);

(statearr_34837_34914[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34806 === (43))){
var inst_34781 = (state_34805[(21)]);
var inst_34791 = (state_34805[(2)]);
var inst_34792 = cljs.core.not_empty.call(null,inst_34781);
var state_34805__$1 = (function (){var statearr_34838 = state_34805;
(statearr_34838[(27)] = inst_34791);

return statearr_34838;
})();
if(cljs.core.truth_(inst_34792)){
var statearr_34839_34915 = state_34805__$1;
(statearr_34839_34915[(1)] = (44));

} else {
var statearr_34840_34916 = state_34805__$1;
(statearr_34840_34916[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34806 === (29))){
var inst_34724 = (state_34805[(26)]);
var inst_34721 = (state_34805[(23)]);
var inst_34718 = (state_34805[(19)]);
var inst_34726 = (state_34805[(24)]);
var inst_34758 = (state_34805[(16)]);
var inst_34722 = (state_34805[(25)]);
var inst_34754 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_34757 = (function (){var all_files = inst_34718;
var res_SINGLEQUOTE_ = inst_34721;
var res = inst_34722;
var files_not_loaded = inst_34724;
var dependencies_that_loaded = inst_34726;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34724,inst_34721,inst_34718,inst_34726,inst_34758,inst_34722,inst_34754,state_val_34806,c__30588__auto__,map__34650,map__34650__$1,opts,before_jsload,on_jsload,reload_dependents,map__34651,map__34651__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__34756){
var map__34841 = p__34756;
var map__34841__$1 = ((((!((map__34841 == null)))?((((map__34841.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34841.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34841):map__34841);
var namespace = cljs.core.get.call(null,map__34841__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34724,inst_34721,inst_34718,inst_34726,inst_34758,inst_34722,inst_34754,state_val_34806,c__30588__auto__,map__34650,map__34650__$1,opts,before_jsload,on_jsload,reload_dependents,map__34651,map__34651__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34758__$1 = cljs.core.group_by.call(null,inst_34757,inst_34724);
var inst_34760 = (inst_34758__$1 == null);
var inst_34761 = cljs.core.not.call(null,inst_34760);
var state_34805__$1 = (function (){var statearr_34843 = state_34805;
(statearr_34843[(16)] = inst_34758__$1);

(statearr_34843[(28)] = inst_34754);

return statearr_34843;
})();
if(inst_34761){
var statearr_34844_34917 = state_34805__$1;
(statearr_34844_34917[(1)] = (32));

} else {
var statearr_34845_34918 = state_34805__$1;
(statearr_34845_34918[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34806 === (44))){
var inst_34781 = (state_34805[(21)]);
var inst_34794 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_34781);
var inst_34795 = cljs.core.pr_str.call(null,inst_34794);
var inst_34796 = ["not required: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_34795)].join('');
var inst_34797 = figwheel.client.utils.log.call(null,inst_34796);
var state_34805__$1 = state_34805;
var statearr_34846_34919 = state_34805__$1;
(statearr_34846_34919[(2)] = inst_34797);

(statearr_34846_34919[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34806 === (6))){
var inst_34699 = (state_34805[(2)]);
var state_34805__$1 = state_34805;
var statearr_34847_34920 = state_34805__$1;
(statearr_34847_34920[(2)] = inst_34699);

(statearr_34847_34920[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34806 === (28))){
var inst_34724 = (state_34805[(26)]);
var inst_34751 = (state_34805[(2)]);
var inst_34752 = cljs.core.not_empty.call(null,inst_34724);
var state_34805__$1 = (function (){var statearr_34848 = state_34805;
(statearr_34848[(29)] = inst_34751);

return statearr_34848;
})();
if(cljs.core.truth_(inst_34752)){
var statearr_34849_34921 = state_34805__$1;
(statearr_34849_34921[(1)] = (29));

} else {
var statearr_34850_34922 = state_34805__$1;
(statearr_34850_34922[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34806 === (25))){
var inst_34722 = (state_34805[(25)]);
var inst_34738 = (state_34805[(2)]);
var inst_34739 = cljs.core.not_empty.call(null,inst_34722);
var state_34805__$1 = (function (){var statearr_34851 = state_34805;
(statearr_34851[(30)] = inst_34738);

return statearr_34851;
})();
if(cljs.core.truth_(inst_34739)){
var statearr_34852_34923 = state_34805__$1;
(statearr_34852_34923[(1)] = (26));

} else {
var statearr_34853_34924 = state_34805__$1;
(statearr_34853_34924[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34806 === (34))){
var inst_34774 = (state_34805[(2)]);
var state_34805__$1 = state_34805;
if(cljs.core.truth_(inst_34774)){
var statearr_34854_34925 = state_34805__$1;
(statearr_34854_34925[(1)] = (38));

} else {
var statearr_34855_34926 = state_34805__$1;
(statearr_34855_34926[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34806 === (17))){
var state_34805__$1 = state_34805;
var statearr_34856_34927 = state_34805__$1;
(statearr_34856_34927[(2)] = recompile_dependents);

(statearr_34856_34927[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34806 === (3))){
var state_34805__$1 = state_34805;
var statearr_34857_34928 = state_34805__$1;
(statearr_34857_34928[(2)] = null);

(statearr_34857_34928[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34806 === (12))){
var inst_34695 = (state_34805[(2)]);
var state_34805__$1 = state_34805;
var statearr_34858_34929 = state_34805__$1;
(statearr_34858_34929[(2)] = inst_34695);

(statearr_34858_34929[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34806 === (2))){
var inst_34657 = (state_34805[(13)]);
var inst_34664 = cljs.core.seq.call(null,inst_34657);
var inst_34665 = inst_34664;
var inst_34666 = null;
var inst_34667 = (0);
var inst_34668 = (0);
var state_34805__$1 = (function (){var statearr_34859 = state_34805;
(statearr_34859[(7)] = inst_34665);

(statearr_34859[(8)] = inst_34668);

(statearr_34859[(9)] = inst_34666);

(statearr_34859[(10)] = inst_34667);

return statearr_34859;
})();
var statearr_34860_34930 = state_34805__$1;
(statearr_34860_34930[(2)] = null);

(statearr_34860_34930[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34806 === (23))){
var inst_34724 = (state_34805[(26)]);
var inst_34721 = (state_34805[(23)]);
var inst_34718 = (state_34805[(19)]);
var inst_34726 = (state_34805[(24)]);
var inst_34722 = (state_34805[(25)]);
var inst_34729 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_34731 = (function (){var all_files = inst_34718;
var res_SINGLEQUOTE_ = inst_34721;
var res = inst_34722;
var files_not_loaded = inst_34724;
var dependencies_that_loaded = inst_34726;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34724,inst_34721,inst_34718,inst_34726,inst_34722,inst_34729,state_val_34806,c__30588__auto__,map__34650,map__34650__$1,opts,before_jsload,on_jsload,reload_dependents,map__34651,map__34651__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__34730){
var map__34861 = p__34730;
var map__34861__$1 = ((((!((map__34861 == null)))?((((map__34861.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34861.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34861):map__34861);
var request_url = cljs.core.get.call(null,map__34861__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34724,inst_34721,inst_34718,inst_34726,inst_34722,inst_34729,state_val_34806,c__30588__auto__,map__34650,map__34650__$1,opts,before_jsload,on_jsload,reload_dependents,map__34651,map__34651__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34732 = cljs.core.reverse.call(null,inst_34726);
var inst_34733 = cljs.core.map.call(null,inst_34731,inst_34732);
var inst_34734 = cljs.core.pr_str.call(null,inst_34733);
var inst_34735 = figwheel.client.utils.log.call(null,inst_34734);
var state_34805__$1 = (function (){var statearr_34863 = state_34805;
(statearr_34863[(31)] = inst_34729);

return statearr_34863;
})();
var statearr_34864_34931 = state_34805__$1;
(statearr_34864_34931[(2)] = inst_34735);

(statearr_34864_34931[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34806 === (35))){
var state_34805__$1 = state_34805;
var statearr_34865_34932 = state_34805__$1;
(statearr_34865_34932[(2)] = true);

(statearr_34865_34932[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34806 === (19))){
var inst_34708 = (state_34805[(12)]);
var inst_34714 = figwheel.client.file_reloading.expand_files.call(null,inst_34708);
var state_34805__$1 = state_34805;
var statearr_34866_34933 = state_34805__$1;
(statearr_34866_34933[(2)] = inst_34714);

(statearr_34866_34933[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34806 === (11))){
var state_34805__$1 = state_34805;
var statearr_34867_34934 = state_34805__$1;
(statearr_34867_34934[(2)] = null);

(statearr_34867_34934[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34806 === (9))){
var inst_34697 = (state_34805[(2)]);
var state_34805__$1 = state_34805;
var statearr_34868_34935 = state_34805__$1;
(statearr_34868_34935[(2)] = inst_34697);

(statearr_34868_34935[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34806 === (5))){
var inst_34668 = (state_34805[(8)]);
var inst_34667 = (state_34805[(10)]);
var inst_34670 = (inst_34668 < inst_34667);
var inst_34671 = inst_34670;
var state_34805__$1 = state_34805;
if(cljs.core.truth_(inst_34671)){
var statearr_34869_34936 = state_34805__$1;
(statearr_34869_34936[(1)] = (7));

} else {
var statearr_34870_34937 = state_34805__$1;
(statearr_34870_34937[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34806 === (14))){
var inst_34678 = (state_34805[(22)]);
var inst_34687 = cljs.core.first.call(null,inst_34678);
var inst_34688 = figwheel.client.file_reloading.eval_body.call(null,inst_34687,opts);
var inst_34689 = cljs.core.next.call(null,inst_34678);
var inst_34665 = inst_34689;
var inst_34666 = null;
var inst_34667 = (0);
var inst_34668 = (0);
var state_34805__$1 = (function (){var statearr_34871 = state_34805;
(statearr_34871[(7)] = inst_34665);

(statearr_34871[(8)] = inst_34668);

(statearr_34871[(9)] = inst_34666);

(statearr_34871[(10)] = inst_34667);

(statearr_34871[(32)] = inst_34688);

return statearr_34871;
})();
var statearr_34872_34938 = state_34805__$1;
(statearr_34872_34938[(2)] = null);

(statearr_34872_34938[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34806 === (45))){
var state_34805__$1 = state_34805;
var statearr_34873_34939 = state_34805__$1;
(statearr_34873_34939[(2)] = null);

(statearr_34873_34939[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34806 === (26))){
var inst_34724 = (state_34805[(26)]);
var inst_34721 = (state_34805[(23)]);
var inst_34718 = (state_34805[(19)]);
var inst_34726 = (state_34805[(24)]);
var inst_34722 = (state_34805[(25)]);
var inst_34741 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_34743 = (function (){var all_files = inst_34718;
var res_SINGLEQUOTE_ = inst_34721;
var res = inst_34722;
var files_not_loaded = inst_34724;
var dependencies_that_loaded = inst_34726;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34724,inst_34721,inst_34718,inst_34726,inst_34722,inst_34741,state_val_34806,c__30588__auto__,map__34650,map__34650__$1,opts,before_jsload,on_jsload,reload_dependents,map__34651,map__34651__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__34742){
var map__34874 = p__34742;
var map__34874__$1 = ((((!((map__34874 == null)))?((((map__34874.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34874.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34874):map__34874);
var namespace = cljs.core.get.call(null,map__34874__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__34874__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34724,inst_34721,inst_34718,inst_34726,inst_34722,inst_34741,state_val_34806,c__30588__auto__,map__34650,map__34650__$1,opts,before_jsload,on_jsload,reload_dependents,map__34651,map__34651__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34744 = cljs.core.map.call(null,inst_34743,inst_34722);
var inst_34745 = cljs.core.pr_str.call(null,inst_34744);
var inst_34746 = figwheel.client.utils.log.call(null,inst_34745);
var inst_34747 = (function (){var all_files = inst_34718;
var res_SINGLEQUOTE_ = inst_34721;
var res = inst_34722;
var files_not_loaded = inst_34724;
var dependencies_that_loaded = inst_34726;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34724,inst_34721,inst_34718,inst_34726,inst_34722,inst_34741,inst_34743,inst_34744,inst_34745,inst_34746,state_val_34806,c__30588__auto__,map__34650,map__34650__$1,opts,before_jsload,on_jsload,reload_dependents,map__34651,map__34651__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34724,inst_34721,inst_34718,inst_34726,inst_34722,inst_34741,inst_34743,inst_34744,inst_34745,inst_34746,state_val_34806,c__30588__auto__,map__34650,map__34650__$1,opts,before_jsload,on_jsload,reload_dependents,map__34651,map__34651__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34748 = setTimeout(inst_34747,(10));
var state_34805__$1 = (function (){var statearr_34876 = state_34805;
(statearr_34876[(33)] = inst_34741);

(statearr_34876[(34)] = inst_34746);

return statearr_34876;
})();
var statearr_34877_34940 = state_34805__$1;
(statearr_34877_34940[(2)] = inst_34748);

(statearr_34877_34940[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34806 === (16))){
var state_34805__$1 = state_34805;
var statearr_34878_34941 = state_34805__$1;
(statearr_34878_34941[(2)] = reload_dependents);

(statearr_34878_34941[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34806 === (38))){
var inst_34758 = (state_34805[(16)]);
var inst_34776 = cljs.core.apply.call(null,cljs.core.hash_map,inst_34758);
var state_34805__$1 = state_34805;
var statearr_34879_34942 = state_34805__$1;
(statearr_34879_34942[(2)] = inst_34776);

(statearr_34879_34942[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34806 === (30))){
var state_34805__$1 = state_34805;
var statearr_34880_34943 = state_34805__$1;
(statearr_34880_34943[(2)] = null);

(statearr_34880_34943[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34806 === (10))){
var inst_34678 = (state_34805[(22)]);
var inst_34680 = cljs.core.chunked_seq_QMARK_.call(null,inst_34678);
var state_34805__$1 = state_34805;
if(inst_34680){
var statearr_34881_34944 = state_34805__$1;
(statearr_34881_34944[(1)] = (13));

} else {
var statearr_34882_34945 = state_34805__$1;
(statearr_34882_34945[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34806 === (18))){
var inst_34712 = (state_34805[(2)]);
var state_34805__$1 = state_34805;
if(cljs.core.truth_(inst_34712)){
var statearr_34883_34946 = state_34805__$1;
(statearr_34883_34946[(1)] = (19));

} else {
var statearr_34884_34947 = state_34805__$1;
(statearr_34884_34947[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34806 === (42))){
var state_34805__$1 = state_34805;
var statearr_34885_34948 = state_34805__$1;
(statearr_34885_34948[(2)] = null);

(statearr_34885_34948[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34806 === (37))){
var inst_34771 = (state_34805[(2)]);
var state_34805__$1 = state_34805;
var statearr_34886_34949 = state_34805__$1;
(statearr_34886_34949[(2)] = inst_34771);

(statearr_34886_34949[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34806 === (8))){
var inst_34665 = (state_34805[(7)]);
var inst_34678 = (state_34805[(22)]);
var inst_34678__$1 = cljs.core.seq.call(null,inst_34665);
var state_34805__$1 = (function (){var statearr_34887 = state_34805;
(statearr_34887[(22)] = inst_34678__$1);

return statearr_34887;
})();
if(inst_34678__$1){
var statearr_34888_34950 = state_34805__$1;
(statearr_34888_34950[(1)] = (10));

} else {
var statearr_34889_34951 = state_34805__$1;
(statearr_34889_34951[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__30588__auto__,map__34650,map__34650__$1,opts,before_jsload,on_jsload,reload_dependents,map__34651,map__34651__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__30500__auto__,c__30588__auto__,map__34650,map__34650__$1,opts,before_jsload,on_jsload,reload_dependents,map__34651,map__34651__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__30501__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__30501__auto____0 = (function (){
var statearr_34890 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34890[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__30501__auto__);

(statearr_34890[(1)] = (1));

return statearr_34890;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__30501__auto____1 = (function (state_34805){
while(true){
var ret_value__30502__auto__ = (function (){try{while(true){
var result__30503__auto__ = switch__30500__auto__.call(null,state_34805);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30503__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30503__auto__;
}
break;
}
}catch (e34891){if((e34891 instanceof Object)){
var ex__30504__auto__ = e34891;
var statearr_34892_34952 = state_34805;
(statearr_34892_34952[(5)] = ex__30504__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34805);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34891;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30502__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34953 = state_34805;
state_34805 = G__34953;
continue;
} else {
return ret_value__30502__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__30501__auto__ = function(state_34805){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__30501__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__30501__auto____1.call(this,state_34805);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__30501__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__30501__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__30501__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__30501__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__30501__auto__;
})()
;})(switch__30500__auto__,c__30588__auto__,map__34650,map__34650__$1,opts,before_jsload,on_jsload,reload_dependents,map__34651,map__34651__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__30590__auto__ = (function (){var statearr_34893 = f__30589__auto__.call(null);
(statearr_34893[(6)] = c__30588__auto__);

return statearr_34893;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30590__auto__);
});})(c__30588__auto__,map__34650,map__34650__$1,opts,before_jsload,on_jsload,reload_dependents,map__34651,map__34651__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__30588__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__34956,link){
var map__34957 = p__34956;
var map__34957__$1 = ((((!((map__34957 == null)))?((((map__34957.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34957.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34957):map__34957);
var file = cljs.core.get.call(null,map__34957__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__34957,map__34957__$1,file){
return (function (p1__34954_SHARP_,p2__34955_SHARP_){
if(cljs.core._EQ_.call(null,p1__34954_SHARP_,p2__34955_SHARP_)){
return p1__34954_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__34957,map__34957__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__34960){
var map__34961 = p__34960;
var map__34961__$1 = ((((!((map__34961 == null)))?((((map__34961.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34961.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34961):map__34961);
var match_length = cljs.core.get.call(null,map__34961__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__34961__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__34959_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__34959_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4657__auto__)){
var res = temp__4657__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.distinctify = (function figwheel$client$file_reloading$distinctify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__34963_SHARP_,p2__34964_SHARP_){
return cljs.core.assoc.call(null,p1__34963_SHARP_,cljs.core.get.call(null,p2__34964_SHARP_,key),p2__34964_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.add_link_to_document = (function figwheel$client$file_reloading$add_link_to_document(orig_link,klone,finished_fn){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
parent.removeChild(orig_link);

return finished_fn.call(null);
});})(parent))
,(300));
});
if(typeof figwheel.client.file_reloading.reload_css_deferred_chain !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_css_deferred_chain = cljs.core.atom.call(null,goog.async.Deferred.succeed());
}
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(f_data,fin){
var temp__4655__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4655__auto__)){
var link = temp__4655__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),((function (link,temp__4655__auto__){
return (function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true));
});})(link,temp__4655__auto__))
);
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_34965 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_34965);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_34965);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__34966,p__34967){
var map__34968 = p__34966;
var map__34968__$1 = ((((!((map__34968 == null)))?((((map__34968.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34968.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34968):map__34968);
var on_cssload = cljs.core.get.call(null,map__34968__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__34969 = p__34967;
var map__34969__$1 = ((((!((map__34969 == null)))?((((map__34969.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34969.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34969):map__34969);
var files_msg = map__34969__$1;
var files = cljs.core.get.call(null,map__34969__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var temp__4657__auto__ = cljs.core.not_empty.call(null,figwheel.client.file_reloading.distinctify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
if(cljs.core.truth_(temp__4657__auto__)){
var f_datas = temp__4657__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1519660838128
