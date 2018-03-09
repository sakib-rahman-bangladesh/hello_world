// Compiled by ClojureScript 1.9.229 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.Uri');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
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
var or__24761__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__24761__auto__){
return or__24761__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.fix_node_request_url = (function figwheel$client$file_reloading$fix_node_request_url(url){

if(cljs.core.truth_(goog.string.startsWith(url,"../"))){
return clojure.string.replace.call(null,url,"../","");
} else {
return [cljs.core.str("goog/"),cljs.core.str(url)].join('');
}
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__24761__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__24761__auto__)){
return or__24761__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__30739_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__30739_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([name], true));
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
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([parent_ns], true));
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
var seq__30744 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__30745 = null;
var count__30746 = (0);
var i__30747 = (0);
while(true){
if((i__30747 < count__30746)){
var n = cljs.core._nth.call(null,chunk__30745,i__30747);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__30748 = seq__30744;
var G__30749 = chunk__30745;
var G__30750 = count__30746;
var G__30751 = (i__30747 + (1));
seq__30744 = G__30748;
chunk__30745 = G__30749;
count__30746 = G__30750;
i__30747 = G__30751;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__30744);
if(temp__4657__auto__){
var seq__30744__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30744__$1)){
var c__25572__auto__ = cljs.core.chunk_first.call(null,seq__30744__$1);
var G__30752 = cljs.core.chunk_rest.call(null,seq__30744__$1);
var G__30753 = c__25572__auto__;
var G__30754 = cljs.core.count.call(null,c__25572__auto__);
var G__30755 = (0);
seq__30744 = G__30752;
chunk__30745 = G__30753;
count__30746 = G__30754;
i__30747 = G__30755;
continue;
} else {
var n = cljs.core.first.call(null,seq__30744__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__30756 = cljs.core.next.call(null,seq__30744__$1);
var G__30757 = null;
var G__30758 = (0);
var G__30759 = (0);
seq__30744 = G__30756;
chunk__30745 = G__30757;
count__30746 = G__30758;
i__30747 = G__30759;
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

var seq__30810_30821 = cljs.core.seq.call(null,deps);
var chunk__30811_30822 = null;
var count__30812_30823 = (0);
var i__30813_30824 = (0);
while(true){
if((i__30813_30824 < count__30812_30823)){
var dep_30825 = cljs.core._nth.call(null,chunk__30811_30822,i__30813_30824);
topo_sort_helper_STAR_.call(null,dep_30825,(depth + (1)),state);

var G__30826 = seq__30810_30821;
var G__30827 = chunk__30811_30822;
var G__30828 = count__30812_30823;
var G__30829 = (i__30813_30824 + (1));
seq__30810_30821 = G__30826;
chunk__30811_30822 = G__30827;
count__30812_30823 = G__30828;
i__30813_30824 = G__30829;
continue;
} else {
var temp__4657__auto___30830 = cljs.core.seq.call(null,seq__30810_30821);
if(temp__4657__auto___30830){
var seq__30810_30831__$1 = temp__4657__auto___30830;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30810_30831__$1)){
var c__25572__auto___30832 = cljs.core.chunk_first.call(null,seq__30810_30831__$1);
var G__30833 = cljs.core.chunk_rest.call(null,seq__30810_30831__$1);
var G__30834 = c__25572__auto___30832;
var G__30835 = cljs.core.count.call(null,c__25572__auto___30832);
var G__30836 = (0);
seq__30810_30821 = G__30833;
chunk__30811_30822 = G__30834;
count__30812_30823 = G__30835;
i__30813_30824 = G__30836;
continue;
} else {
var dep_30837 = cljs.core.first.call(null,seq__30810_30831__$1);
topo_sort_helper_STAR_.call(null,dep_30837,(depth + (1)),state);

var G__30838 = cljs.core.next.call(null,seq__30810_30831__$1);
var G__30839 = null;
var G__30840 = (0);
var G__30841 = (0);
seq__30810_30821 = G__30838;
chunk__30811_30822 = G__30839;
count__30812_30823 = G__30840;
i__30813_30824 = G__30841;
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
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__30814){
var vec__30818 = p__30814;
var seq__30819 = cljs.core.seq.call(null,vec__30818);
var first__30820 = cljs.core.first.call(null,seq__30819);
var seq__30819__$1 = cljs.core.next.call(null,seq__30819);
var x = first__30820;
var xs = seq__30819__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__30818,seq__30819,first__30820,seq__30819__$1,x,xs,get_deps__$1){
return (function (p1__30760_SHARP_){
return clojure.set.difference.call(null,p1__30760_SHARP_,x);
});})(vec__30818,seq__30819,first__30820,seq__30819__$1,x,xs,get_deps__$1))
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
return cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str(goog.basePath),cljs.core.str(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str(goog.basePath),cljs.core.str(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__30854 = cljs.core.seq.call(null,provides);
var chunk__30855 = null;
var count__30856 = (0);
var i__30857 = (0);
while(true){
if((i__30857 < count__30856)){
var prov = cljs.core._nth.call(null,chunk__30855,i__30857);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__30858_30866 = cljs.core.seq.call(null,requires);
var chunk__30859_30867 = null;
var count__30860_30868 = (0);
var i__30861_30869 = (0);
while(true){
if((i__30861_30869 < count__30860_30868)){
var req_30870 = cljs.core._nth.call(null,chunk__30859_30867,i__30861_30869);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_30870,prov);

var G__30871 = seq__30858_30866;
var G__30872 = chunk__30859_30867;
var G__30873 = count__30860_30868;
var G__30874 = (i__30861_30869 + (1));
seq__30858_30866 = G__30871;
chunk__30859_30867 = G__30872;
count__30860_30868 = G__30873;
i__30861_30869 = G__30874;
continue;
} else {
var temp__4657__auto___30875 = cljs.core.seq.call(null,seq__30858_30866);
if(temp__4657__auto___30875){
var seq__30858_30876__$1 = temp__4657__auto___30875;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30858_30876__$1)){
var c__25572__auto___30877 = cljs.core.chunk_first.call(null,seq__30858_30876__$1);
var G__30878 = cljs.core.chunk_rest.call(null,seq__30858_30876__$1);
var G__30879 = c__25572__auto___30877;
var G__30880 = cljs.core.count.call(null,c__25572__auto___30877);
var G__30881 = (0);
seq__30858_30866 = G__30878;
chunk__30859_30867 = G__30879;
count__30860_30868 = G__30880;
i__30861_30869 = G__30881;
continue;
} else {
var req_30882 = cljs.core.first.call(null,seq__30858_30876__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_30882,prov);

var G__30883 = cljs.core.next.call(null,seq__30858_30876__$1);
var G__30884 = null;
var G__30885 = (0);
var G__30886 = (0);
seq__30858_30866 = G__30883;
chunk__30859_30867 = G__30884;
count__30860_30868 = G__30885;
i__30861_30869 = G__30886;
continue;
}
} else {
}
}
break;
}

var G__30887 = seq__30854;
var G__30888 = chunk__30855;
var G__30889 = count__30856;
var G__30890 = (i__30857 + (1));
seq__30854 = G__30887;
chunk__30855 = G__30888;
count__30856 = G__30889;
i__30857 = G__30890;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__30854);
if(temp__4657__auto__){
var seq__30854__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30854__$1)){
var c__25572__auto__ = cljs.core.chunk_first.call(null,seq__30854__$1);
var G__30891 = cljs.core.chunk_rest.call(null,seq__30854__$1);
var G__30892 = c__25572__auto__;
var G__30893 = cljs.core.count.call(null,c__25572__auto__);
var G__30894 = (0);
seq__30854 = G__30891;
chunk__30855 = G__30892;
count__30856 = G__30893;
i__30857 = G__30894;
continue;
} else {
var prov = cljs.core.first.call(null,seq__30854__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__30862_30895 = cljs.core.seq.call(null,requires);
var chunk__30863_30896 = null;
var count__30864_30897 = (0);
var i__30865_30898 = (0);
while(true){
if((i__30865_30898 < count__30864_30897)){
var req_30899 = cljs.core._nth.call(null,chunk__30863_30896,i__30865_30898);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_30899,prov);

var G__30900 = seq__30862_30895;
var G__30901 = chunk__30863_30896;
var G__30902 = count__30864_30897;
var G__30903 = (i__30865_30898 + (1));
seq__30862_30895 = G__30900;
chunk__30863_30896 = G__30901;
count__30864_30897 = G__30902;
i__30865_30898 = G__30903;
continue;
} else {
var temp__4657__auto___30904__$1 = cljs.core.seq.call(null,seq__30862_30895);
if(temp__4657__auto___30904__$1){
var seq__30862_30905__$1 = temp__4657__auto___30904__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30862_30905__$1)){
var c__25572__auto___30906 = cljs.core.chunk_first.call(null,seq__30862_30905__$1);
var G__30907 = cljs.core.chunk_rest.call(null,seq__30862_30905__$1);
var G__30908 = c__25572__auto___30906;
var G__30909 = cljs.core.count.call(null,c__25572__auto___30906);
var G__30910 = (0);
seq__30862_30895 = G__30907;
chunk__30863_30896 = G__30908;
count__30864_30897 = G__30909;
i__30865_30898 = G__30910;
continue;
} else {
var req_30911 = cljs.core.first.call(null,seq__30862_30905__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_30911,prov);

var G__30912 = cljs.core.next.call(null,seq__30862_30905__$1);
var G__30913 = null;
var G__30914 = (0);
var G__30915 = (0);
seq__30862_30895 = G__30912;
chunk__30863_30896 = G__30913;
count__30864_30897 = G__30914;
i__30865_30898 = G__30915;
continue;
}
} else {
}
}
break;
}

var G__30916 = cljs.core.next.call(null,seq__30854__$1);
var G__30917 = null;
var G__30918 = (0);
var G__30919 = (0);
seq__30854 = G__30916;
chunk__30855 = G__30917;
count__30856 = G__30918;
i__30857 = G__30919;
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
goog.require = figwheel$client$file_reloading$figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__30924_30928 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__30925_30929 = null;
var count__30926_30930 = (0);
var i__30927_30931 = (0);
while(true){
if((i__30927_30931 < count__30926_30930)){
var ns_30932 = cljs.core._nth.call(null,chunk__30925_30929,i__30927_30931);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_30932);

var G__30933 = seq__30924_30928;
var G__30934 = chunk__30925_30929;
var G__30935 = count__30926_30930;
var G__30936 = (i__30927_30931 + (1));
seq__30924_30928 = G__30933;
chunk__30925_30929 = G__30934;
count__30926_30930 = G__30935;
i__30927_30931 = G__30936;
continue;
} else {
var temp__4657__auto___30937 = cljs.core.seq.call(null,seq__30924_30928);
if(temp__4657__auto___30937){
var seq__30924_30938__$1 = temp__4657__auto___30937;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30924_30938__$1)){
var c__25572__auto___30939 = cljs.core.chunk_first.call(null,seq__30924_30938__$1);
var G__30940 = cljs.core.chunk_rest.call(null,seq__30924_30938__$1);
var G__30941 = c__25572__auto___30939;
var G__30942 = cljs.core.count.call(null,c__25572__auto___30939);
var G__30943 = (0);
seq__30924_30928 = G__30940;
chunk__30925_30929 = G__30941;
count__30926_30930 = G__30942;
i__30927_30931 = G__30943;
continue;
} else {
var ns_30944 = cljs.core.first.call(null,seq__30924_30938__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_30944);

var G__30945 = cljs.core.next.call(null,seq__30924_30938__$1);
var G__30946 = null;
var G__30947 = (0);
var G__30948 = (0);
seq__30924_30928 = G__30945;
chunk__30925_30929 = G__30946;
count__30926_30930 = G__30947;
i__30927_30931 = G__30948;
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
goog.require_figwheel_backup_ = (function (){var or__24761__auto__ = goog.require__;
if(cljs.core.truth_(or__24761__auto__)){
return or__24761__auto__;
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
var G__30949__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__30949 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__30950__i = 0, G__30950__a = new Array(arguments.length -  0);
while (G__30950__i < G__30950__a.length) {G__30950__a[G__30950__i] = arguments[G__30950__i + 0]; ++G__30950__i;}
  args = new cljs.core.IndexedSeq(G__30950__a,0);
} 
return G__30949__delegate.call(this,args);};
G__30949.cljs$lang$maxFixedArity = 0;
G__30949.cljs$lang$applyTo = (function (arglist__30951){
var args = cljs.core.seq(arglist__30951);
return G__30949__delegate(args);
});
G__30949.cljs$core$IFn$_invoke$arity$variadic = G__30949__delegate;
return G__30949;
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
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
;
}
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__30953 = cljs.core._EQ_;
var expr__30954 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__30953.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__30954))){
var path_parts = ((function (pred__30953,expr__30954){
return (function (p1__30952_SHARP_){
return clojure.string.split.call(null,p1__30952_SHARP_,/[\/\\]/);
});})(pred__30953,expr__30954))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__30953,expr__30954){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e30956){if((e30956 instanceof Error)){
var e = e30956;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e30956;

}
}})());
});
;})(path_parts,sep,root,pred__30953,expr__30954))
} else {
if(cljs.core.truth_(pred__30953.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__30954))){
return ((function (pred__30953,expr__30954){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
deferred.addCallback(((function (deferred,pred__30953,expr__30954){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__30953,expr__30954))
);

return deferred.addErrback(((function (deferred,pred__30953,expr__30954){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__30953,expr__30954))
);
});
;})(pred__30953,expr__30954))
} else {
return ((function (pred__30953,expr__30954){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__30953,expr__30954))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__30957,callback){
var map__30960 = p__30957;
var map__30960__$1 = ((((!((map__30960 == null)))?((((map__30960.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30960.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30960):map__30960);
var file_msg = map__30960__$1;
var request_url = cljs.core.get.call(null,map__30960__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__30960,map__30960__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__30960,map__30960__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__27884__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27884__auto__){
return (function (){
var f__27885__auto__ = (function (){var switch__27772__auto__ = ((function (c__27884__auto__){
return (function (state_30984){
var state_val_30985 = (state_30984[(1)]);
if((state_val_30985 === (7))){
var inst_30980 = (state_30984[(2)]);
var state_30984__$1 = state_30984;
var statearr_30986_31006 = state_30984__$1;
(statearr_30986_31006[(2)] = inst_30980);

(statearr_30986_31006[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30985 === (1))){
var state_30984__$1 = state_30984;
var statearr_30987_31007 = state_30984__$1;
(statearr_30987_31007[(2)] = null);

(statearr_30987_31007[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30985 === (4))){
var inst_30964 = (state_30984[(7)]);
var inst_30964__$1 = (state_30984[(2)]);
var state_30984__$1 = (function (){var statearr_30988 = state_30984;
(statearr_30988[(7)] = inst_30964__$1);

return statearr_30988;
})();
if(cljs.core.truth_(inst_30964__$1)){
var statearr_30989_31008 = state_30984__$1;
(statearr_30989_31008[(1)] = (5));

} else {
var statearr_30990_31009 = state_30984__$1;
(statearr_30990_31009[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30985 === (6))){
var state_30984__$1 = state_30984;
var statearr_30991_31010 = state_30984__$1;
(statearr_30991_31010[(2)] = null);

(statearr_30991_31010[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30985 === (3))){
var inst_30982 = (state_30984[(2)]);
var state_30984__$1 = state_30984;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30984__$1,inst_30982);
} else {
if((state_val_30985 === (2))){
var state_30984__$1 = state_30984;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30984__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_30985 === (11))){
var inst_30976 = (state_30984[(2)]);
var state_30984__$1 = (function (){var statearr_30992 = state_30984;
(statearr_30992[(8)] = inst_30976);

return statearr_30992;
})();
var statearr_30993_31011 = state_30984__$1;
(statearr_30993_31011[(2)] = null);

(statearr_30993_31011[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30985 === (9))){
var inst_30968 = (state_30984[(9)]);
var inst_30970 = (state_30984[(10)]);
var inst_30972 = inst_30970.call(null,inst_30968);
var state_30984__$1 = state_30984;
var statearr_30994_31012 = state_30984__$1;
(statearr_30994_31012[(2)] = inst_30972);

(statearr_30994_31012[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30985 === (5))){
var inst_30964 = (state_30984[(7)]);
var inst_30966 = figwheel.client.file_reloading.blocking_load.call(null,inst_30964);
var state_30984__$1 = state_30984;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30984__$1,(8),inst_30966);
} else {
if((state_val_30985 === (10))){
var inst_30968 = (state_30984[(9)]);
var inst_30974 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_30968);
var state_30984__$1 = state_30984;
var statearr_30995_31013 = state_30984__$1;
(statearr_30995_31013[(2)] = inst_30974);

(statearr_30995_31013[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30985 === (8))){
var inst_30964 = (state_30984[(7)]);
var inst_30970 = (state_30984[(10)]);
var inst_30968 = (state_30984[(2)]);
var inst_30969 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_30970__$1 = cljs.core.get.call(null,inst_30969,inst_30964);
var state_30984__$1 = (function (){var statearr_30996 = state_30984;
(statearr_30996[(9)] = inst_30968);

(statearr_30996[(10)] = inst_30970__$1);

return statearr_30996;
})();
if(cljs.core.truth_(inst_30970__$1)){
var statearr_30997_31014 = state_30984__$1;
(statearr_30997_31014[(1)] = (9));

} else {
var statearr_30998_31015 = state_30984__$1;
(statearr_30998_31015[(1)] = (10));

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
});})(c__27884__auto__))
;
return ((function (switch__27772__auto__,c__27884__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__27773__auto__ = null;
var figwheel$client$file_reloading$state_machine__27773__auto____0 = (function (){
var statearr_31002 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31002[(0)] = figwheel$client$file_reloading$state_machine__27773__auto__);

(statearr_31002[(1)] = (1));

return statearr_31002;
});
var figwheel$client$file_reloading$state_machine__27773__auto____1 = (function (state_30984){
while(true){
var ret_value__27774__auto__ = (function (){try{while(true){
var result__27775__auto__ = switch__27772__auto__.call(null,state_30984);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27775__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27775__auto__;
}
break;
}
}catch (e31003){if((e31003 instanceof Object)){
var ex__27776__auto__ = e31003;
var statearr_31004_31016 = state_30984;
(statearr_31004_31016[(5)] = ex__27776__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30984);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31003;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27774__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31017 = state_30984;
state_30984 = G__31017;
continue;
} else {
return ret_value__27774__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__27773__auto__ = function(state_30984){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__27773__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__27773__auto____1.call(this,state_30984);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__27773__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__27773__auto____0;
figwheel$client$file_reloading$state_machine__27773__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__27773__auto____1;
return figwheel$client$file_reloading$state_machine__27773__auto__;
})()
;})(switch__27772__auto__,c__27884__auto__))
})();
var state__27886__auto__ = (function (){var statearr_31005 = f__27885__auto__.call(null);
(statearr_31005[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27884__auto__);

return statearr_31005;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27886__auto__);
});})(c__27884__auto__))
);

return c__27884__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__31018,callback){
var map__31021 = p__31018;
var map__31021__$1 = ((((!((map__31021 == null)))?((((map__31021.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31021.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31021):map__31021);
var file_msg = map__31021__$1;
var namespace = cljs.core.get.call(null,map__31021__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__31021,map__31021__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__31021,map__31021__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__31023){
var map__31026 = p__31023;
var map__31026__$1 = ((((!((map__31026 == null)))?((((map__31026.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31026.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31026):map__31026);
var file_msg = map__31026__$1;
var namespace = cljs.core.get.call(null,map__31026__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__24749__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__24749__auto__){
var or__24761__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__24761__auto__)){
return or__24761__auto__;
} else {
var or__24761__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__24761__auto____$1)){
return or__24761__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__24749__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__31028,callback){
var map__31031 = p__31028;
var map__31031__$1 = ((((!((map__31031 == null)))?((((map__31031.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31031.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31031):map__31031);
var file_msg = map__31031__$1;
var request_url = cljs.core.get.call(null,map__31031__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__31031__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

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
var c__27884__auto___31135 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27884__auto___31135,out){
return (function (){
var f__27885__auto__ = (function (){var switch__27772__auto__ = ((function (c__27884__auto___31135,out){
return (function (state_31117){
var state_val_31118 = (state_31117[(1)]);
if((state_val_31118 === (1))){
var inst_31091 = cljs.core.seq.call(null,files);
var inst_31092 = cljs.core.first.call(null,inst_31091);
var inst_31093 = cljs.core.next.call(null,inst_31091);
var inst_31094 = files;
var state_31117__$1 = (function (){var statearr_31119 = state_31117;
(statearr_31119[(7)] = inst_31092);

(statearr_31119[(8)] = inst_31093);

(statearr_31119[(9)] = inst_31094);

return statearr_31119;
})();
var statearr_31120_31136 = state_31117__$1;
(statearr_31120_31136[(2)] = null);

(statearr_31120_31136[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31118 === (2))){
var inst_31094 = (state_31117[(9)]);
var inst_31100 = (state_31117[(10)]);
var inst_31099 = cljs.core.seq.call(null,inst_31094);
var inst_31100__$1 = cljs.core.first.call(null,inst_31099);
var inst_31101 = cljs.core.next.call(null,inst_31099);
var inst_31102 = (inst_31100__$1 == null);
var inst_31103 = cljs.core.not.call(null,inst_31102);
var state_31117__$1 = (function (){var statearr_31121 = state_31117;
(statearr_31121[(11)] = inst_31101);

(statearr_31121[(10)] = inst_31100__$1);

return statearr_31121;
})();
if(inst_31103){
var statearr_31122_31137 = state_31117__$1;
(statearr_31122_31137[(1)] = (4));

} else {
var statearr_31123_31138 = state_31117__$1;
(statearr_31123_31138[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31118 === (3))){
var inst_31115 = (state_31117[(2)]);
var state_31117__$1 = state_31117;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31117__$1,inst_31115);
} else {
if((state_val_31118 === (4))){
var inst_31100 = (state_31117[(10)]);
var inst_31105 = figwheel.client.file_reloading.reload_js_file.call(null,inst_31100);
var state_31117__$1 = state_31117;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31117__$1,(7),inst_31105);
} else {
if((state_val_31118 === (5))){
var inst_31111 = cljs.core.async.close_BANG_.call(null,out);
var state_31117__$1 = state_31117;
var statearr_31124_31139 = state_31117__$1;
(statearr_31124_31139[(2)] = inst_31111);

(statearr_31124_31139[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31118 === (6))){
var inst_31113 = (state_31117[(2)]);
var state_31117__$1 = state_31117;
var statearr_31125_31140 = state_31117__$1;
(statearr_31125_31140[(2)] = inst_31113);

(statearr_31125_31140[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31118 === (7))){
var inst_31101 = (state_31117[(11)]);
var inst_31107 = (state_31117[(2)]);
var inst_31108 = cljs.core.async.put_BANG_.call(null,out,inst_31107);
var inst_31094 = inst_31101;
var state_31117__$1 = (function (){var statearr_31126 = state_31117;
(statearr_31126[(9)] = inst_31094);

(statearr_31126[(12)] = inst_31108);

return statearr_31126;
})();
var statearr_31127_31141 = state_31117__$1;
(statearr_31127_31141[(2)] = null);

(statearr_31127_31141[(1)] = (2));


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
});})(c__27884__auto___31135,out))
;
return ((function (switch__27772__auto__,c__27884__auto___31135,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__27773__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__27773__auto____0 = (function (){
var statearr_31131 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31131[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__27773__auto__);

(statearr_31131[(1)] = (1));

return statearr_31131;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__27773__auto____1 = (function (state_31117){
while(true){
var ret_value__27774__auto__ = (function (){try{while(true){
var result__27775__auto__ = switch__27772__auto__.call(null,state_31117);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27775__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27775__auto__;
}
break;
}
}catch (e31132){if((e31132 instanceof Object)){
var ex__27776__auto__ = e31132;
var statearr_31133_31142 = state_31117;
(statearr_31133_31142[(5)] = ex__27776__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31117);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31132;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27774__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31143 = state_31117;
state_31117 = G__31143;
continue;
} else {
return ret_value__27774__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__27773__auto__ = function(state_31117){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__27773__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__27773__auto____1.call(this,state_31117);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__27773__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__27773__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__27773__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__27773__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__27773__auto__;
})()
;})(switch__27772__auto__,c__27884__auto___31135,out))
})();
var state__27886__auto__ = (function (){var statearr_31134 = f__27885__auto__.call(null);
(statearr_31134[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27884__auto___31135);

return statearr_31134;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27886__auto__);
});})(c__27884__auto___31135,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__31144,opts){
var map__31148 = p__31144;
var map__31148__$1 = ((((!((map__31148 == null)))?((((map__31148.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31148.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31148):map__31148);
var eval_body__$1 = cljs.core.get.call(null,map__31148__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__31148__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__24749__auto__ = eval_body__$1;
if(cljs.core.truth_(and__24749__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__24749__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e31150){var e = e31150;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["figwheel.connect",null], null), null),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4655__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__31151_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__31151_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__31160){
var vec__31161 = p__31160;
var k = cljs.core.nth.call(null,vec__31161,(0),null);
var v = cljs.core.nth.call(null,vec__31161,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__31164){
var vec__31165 = p__31164;
var k = cljs.core.nth.call(null,vec__31165,(0),null);
var v = cljs.core.nth.call(null,vec__31165,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__31171,p__31172){
var map__31419 = p__31171;
var map__31419__$1 = ((((!((map__31419 == null)))?((((map__31419.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31419.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31419):map__31419);
var opts = map__31419__$1;
var before_jsload = cljs.core.get.call(null,map__31419__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__31419__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__31419__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__31420 = p__31172;
var map__31420__$1 = ((((!((map__31420 == null)))?((((map__31420.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31420.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31420):map__31420);
var msg = map__31420__$1;
var files = cljs.core.get.call(null,map__31420__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__31420__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__31420__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__27884__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27884__auto__,map__31419,map__31419__$1,opts,before_jsload,on_jsload,reload_dependents,map__31420,map__31420__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__27885__auto__ = (function (){var switch__27772__auto__ = ((function (c__27884__auto__,map__31419,map__31419__$1,opts,before_jsload,on_jsload,reload_dependents,map__31420,map__31420__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_31573){
var state_val_31574 = (state_31573[(1)]);
if((state_val_31574 === (7))){
var inst_31435 = (state_31573[(7)]);
var inst_31437 = (state_31573[(8)]);
var inst_31434 = (state_31573[(9)]);
var inst_31436 = (state_31573[(10)]);
var inst_31442 = cljs.core._nth.call(null,inst_31435,inst_31437);
var inst_31443 = figwheel.client.file_reloading.eval_body.call(null,inst_31442,opts);
var inst_31444 = (inst_31437 + (1));
var tmp31575 = inst_31435;
var tmp31576 = inst_31434;
var tmp31577 = inst_31436;
var inst_31434__$1 = tmp31576;
var inst_31435__$1 = tmp31575;
var inst_31436__$1 = tmp31577;
var inst_31437__$1 = inst_31444;
var state_31573__$1 = (function (){var statearr_31578 = state_31573;
(statearr_31578[(7)] = inst_31435__$1);

(statearr_31578[(8)] = inst_31437__$1);

(statearr_31578[(9)] = inst_31434__$1);

(statearr_31578[(11)] = inst_31443);

(statearr_31578[(10)] = inst_31436__$1);

return statearr_31578;
})();
var statearr_31579_31665 = state_31573__$1;
(statearr_31579_31665[(2)] = null);

(statearr_31579_31665[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31574 === (20))){
var inst_31477 = (state_31573[(12)]);
var inst_31485 = figwheel.client.file_reloading.sort_files.call(null,inst_31477);
var state_31573__$1 = state_31573;
var statearr_31580_31666 = state_31573__$1;
(statearr_31580_31666[(2)] = inst_31485);

(statearr_31580_31666[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31574 === (27))){
var state_31573__$1 = state_31573;
var statearr_31581_31667 = state_31573__$1;
(statearr_31581_31667[(2)] = null);

(statearr_31581_31667[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31574 === (1))){
var inst_31426 = (state_31573[(13)]);
var inst_31423 = before_jsload.call(null,files);
var inst_31424 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_31425 = (function (){return ((function (inst_31426,inst_31423,inst_31424,state_val_31574,c__27884__auto__,map__31419,map__31419__$1,opts,before_jsload,on_jsload,reload_dependents,map__31420,map__31420__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__31168_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__31168_SHARP_);
});
;})(inst_31426,inst_31423,inst_31424,state_val_31574,c__27884__auto__,map__31419,map__31419__$1,opts,before_jsload,on_jsload,reload_dependents,map__31420,map__31420__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_31426__$1 = cljs.core.filter.call(null,inst_31425,files);
var inst_31427 = cljs.core.not_empty.call(null,inst_31426__$1);
var state_31573__$1 = (function (){var statearr_31582 = state_31573;
(statearr_31582[(14)] = inst_31423);

(statearr_31582[(15)] = inst_31424);

(statearr_31582[(13)] = inst_31426__$1);

return statearr_31582;
})();
if(cljs.core.truth_(inst_31427)){
var statearr_31583_31668 = state_31573__$1;
(statearr_31583_31668[(1)] = (2));

} else {
var statearr_31584_31669 = state_31573__$1;
(statearr_31584_31669[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31574 === (24))){
var state_31573__$1 = state_31573;
var statearr_31585_31670 = state_31573__$1;
(statearr_31585_31670[(2)] = null);

(statearr_31585_31670[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31574 === (39))){
var inst_31527 = (state_31573[(16)]);
var state_31573__$1 = state_31573;
var statearr_31586_31671 = state_31573__$1;
(statearr_31586_31671[(2)] = inst_31527);

(statearr_31586_31671[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31574 === (46))){
var inst_31568 = (state_31573[(2)]);
var state_31573__$1 = state_31573;
var statearr_31587_31672 = state_31573__$1;
(statearr_31587_31672[(2)] = inst_31568);

(statearr_31587_31672[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31574 === (4))){
var inst_31471 = (state_31573[(2)]);
var inst_31472 = cljs.core.List.EMPTY;
var inst_31473 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_31472);
var inst_31474 = (function (){return ((function (inst_31471,inst_31472,inst_31473,state_val_31574,c__27884__auto__,map__31419,map__31419__$1,opts,before_jsload,on_jsload,reload_dependents,map__31420,map__31420__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__31169_SHARP_){
var and__24749__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__31169_SHARP_);
if(cljs.core.truth_(and__24749__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__31169_SHARP_));
} else {
return and__24749__auto__;
}
});
;})(inst_31471,inst_31472,inst_31473,state_val_31574,c__27884__auto__,map__31419,map__31419__$1,opts,before_jsload,on_jsload,reload_dependents,map__31420,map__31420__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_31475 = cljs.core.filter.call(null,inst_31474,files);
var inst_31476 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_31477 = cljs.core.concat.call(null,inst_31475,inst_31476);
var state_31573__$1 = (function (){var statearr_31588 = state_31573;
(statearr_31588[(17)] = inst_31473);

(statearr_31588[(12)] = inst_31477);

(statearr_31588[(18)] = inst_31471);

return statearr_31588;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_31589_31673 = state_31573__$1;
(statearr_31589_31673[(1)] = (16));

} else {
var statearr_31590_31674 = state_31573__$1;
(statearr_31590_31674[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31574 === (15))){
var inst_31461 = (state_31573[(2)]);
var state_31573__$1 = state_31573;
var statearr_31591_31675 = state_31573__$1;
(statearr_31591_31675[(2)] = inst_31461);

(statearr_31591_31675[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31574 === (21))){
var inst_31487 = (state_31573[(19)]);
var inst_31487__$1 = (state_31573[(2)]);
var inst_31488 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_31487__$1);
var state_31573__$1 = (function (){var statearr_31592 = state_31573;
(statearr_31592[(19)] = inst_31487__$1);

return statearr_31592;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31573__$1,(22),inst_31488);
} else {
if((state_val_31574 === (31))){
var inst_31571 = (state_31573[(2)]);
var state_31573__$1 = state_31573;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31573__$1,inst_31571);
} else {
if((state_val_31574 === (32))){
var inst_31527 = (state_31573[(16)]);
var inst_31532 = inst_31527.cljs$lang$protocol_mask$partition0$;
var inst_31533 = (inst_31532 & (64));
var inst_31534 = inst_31527.cljs$core$ISeq$;
var inst_31535 = (inst_31533) || (inst_31534);
var state_31573__$1 = state_31573;
if(cljs.core.truth_(inst_31535)){
var statearr_31593_31676 = state_31573__$1;
(statearr_31593_31676[(1)] = (35));

} else {
var statearr_31594_31677 = state_31573__$1;
(statearr_31594_31677[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31574 === (40))){
var inst_31548 = (state_31573[(20)]);
var inst_31547 = (state_31573[(2)]);
var inst_31548__$1 = cljs.core.get.call(null,inst_31547,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_31549 = cljs.core.get.call(null,inst_31547,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_31550 = cljs.core.not_empty.call(null,inst_31548__$1);
var state_31573__$1 = (function (){var statearr_31595 = state_31573;
(statearr_31595[(21)] = inst_31549);

(statearr_31595[(20)] = inst_31548__$1);

return statearr_31595;
})();
if(cljs.core.truth_(inst_31550)){
var statearr_31596_31678 = state_31573__$1;
(statearr_31596_31678[(1)] = (41));

} else {
var statearr_31597_31679 = state_31573__$1;
(statearr_31597_31679[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31574 === (33))){
var state_31573__$1 = state_31573;
var statearr_31598_31680 = state_31573__$1;
(statearr_31598_31680[(2)] = false);

(statearr_31598_31680[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31574 === (13))){
var inst_31447 = (state_31573[(22)]);
var inst_31451 = cljs.core.chunk_first.call(null,inst_31447);
var inst_31452 = cljs.core.chunk_rest.call(null,inst_31447);
var inst_31453 = cljs.core.count.call(null,inst_31451);
var inst_31434 = inst_31452;
var inst_31435 = inst_31451;
var inst_31436 = inst_31453;
var inst_31437 = (0);
var state_31573__$1 = (function (){var statearr_31599 = state_31573;
(statearr_31599[(7)] = inst_31435);

(statearr_31599[(8)] = inst_31437);

(statearr_31599[(9)] = inst_31434);

(statearr_31599[(10)] = inst_31436);

return statearr_31599;
})();
var statearr_31600_31681 = state_31573__$1;
(statearr_31600_31681[(2)] = null);

(statearr_31600_31681[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31574 === (22))){
var inst_31491 = (state_31573[(23)]);
var inst_31487 = (state_31573[(19)]);
var inst_31495 = (state_31573[(24)]);
var inst_31490 = (state_31573[(25)]);
var inst_31490__$1 = (state_31573[(2)]);
var inst_31491__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_31490__$1);
var inst_31492 = (function (){var all_files = inst_31487;
var res_SINGLEQUOTE_ = inst_31490__$1;
var res = inst_31491__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_31491,inst_31487,inst_31495,inst_31490,inst_31490__$1,inst_31491__$1,state_val_31574,c__27884__auto__,map__31419,map__31419__$1,opts,before_jsload,on_jsload,reload_dependents,map__31420,map__31420__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__31170_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__31170_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_31491,inst_31487,inst_31495,inst_31490,inst_31490__$1,inst_31491__$1,state_val_31574,c__27884__auto__,map__31419,map__31419__$1,opts,before_jsload,on_jsload,reload_dependents,map__31420,map__31420__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_31493 = cljs.core.filter.call(null,inst_31492,inst_31490__$1);
var inst_31494 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_31495__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_31494);
var inst_31496 = cljs.core.not_empty.call(null,inst_31495__$1);
var state_31573__$1 = (function (){var statearr_31601 = state_31573;
(statearr_31601[(23)] = inst_31491__$1);

(statearr_31601[(24)] = inst_31495__$1);

(statearr_31601[(25)] = inst_31490__$1);

(statearr_31601[(26)] = inst_31493);

return statearr_31601;
})();
if(cljs.core.truth_(inst_31496)){
var statearr_31602_31682 = state_31573__$1;
(statearr_31602_31682[(1)] = (23));

} else {
var statearr_31603_31683 = state_31573__$1;
(statearr_31603_31683[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31574 === (36))){
var state_31573__$1 = state_31573;
var statearr_31604_31684 = state_31573__$1;
(statearr_31604_31684[(2)] = false);

(statearr_31604_31684[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31574 === (41))){
var inst_31548 = (state_31573[(20)]);
var inst_31552 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_31553 = cljs.core.map.call(null,inst_31552,inst_31548);
var inst_31554 = cljs.core.pr_str.call(null,inst_31553);
var inst_31555 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_31554)].join('');
var inst_31556 = figwheel.client.utils.log.call(null,inst_31555);
var state_31573__$1 = state_31573;
var statearr_31605_31685 = state_31573__$1;
(statearr_31605_31685[(2)] = inst_31556);

(statearr_31605_31685[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31574 === (43))){
var inst_31549 = (state_31573[(21)]);
var inst_31559 = (state_31573[(2)]);
var inst_31560 = cljs.core.not_empty.call(null,inst_31549);
var state_31573__$1 = (function (){var statearr_31606 = state_31573;
(statearr_31606[(27)] = inst_31559);

return statearr_31606;
})();
if(cljs.core.truth_(inst_31560)){
var statearr_31607_31686 = state_31573__$1;
(statearr_31607_31686[(1)] = (44));

} else {
var statearr_31608_31687 = state_31573__$1;
(statearr_31608_31687[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31574 === (29))){
var inst_31491 = (state_31573[(23)]);
var inst_31527 = (state_31573[(16)]);
var inst_31487 = (state_31573[(19)]);
var inst_31495 = (state_31573[(24)]);
var inst_31490 = (state_31573[(25)]);
var inst_31493 = (state_31573[(26)]);
var inst_31523 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_31526 = (function (){var all_files = inst_31487;
var res_SINGLEQUOTE_ = inst_31490;
var res = inst_31491;
var files_not_loaded = inst_31493;
var dependencies_that_loaded = inst_31495;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_31491,inst_31527,inst_31487,inst_31495,inst_31490,inst_31493,inst_31523,state_val_31574,c__27884__auto__,map__31419,map__31419__$1,opts,before_jsload,on_jsload,reload_dependents,map__31420,map__31420__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__31525){
var map__31609 = p__31525;
var map__31609__$1 = ((((!((map__31609 == null)))?((((map__31609.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31609.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31609):map__31609);
var namespace = cljs.core.get.call(null,map__31609__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_31491,inst_31527,inst_31487,inst_31495,inst_31490,inst_31493,inst_31523,state_val_31574,c__27884__auto__,map__31419,map__31419__$1,opts,before_jsload,on_jsload,reload_dependents,map__31420,map__31420__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_31527__$1 = cljs.core.group_by.call(null,inst_31526,inst_31493);
var inst_31529 = (inst_31527__$1 == null);
var inst_31530 = cljs.core.not.call(null,inst_31529);
var state_31573__$1 = (function (){var statearr_31611 = state_31573;
(statearr_31611[(28)] = inst_31523);

(statearr_31611[(16)] = inst_31527__$1);

return statearr_31611;
})();
if(inst_31530){
var statearr_31612_31688 = state_31573__$1;
(statearr_31612_31688[(1)] = (32));

} else {
var statearr_31613_31689 = state_31573__$1;
(statearr_31613_31689[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31574 === (44))){
var inst_31549 = (state_31573[(21)]);
var inst_31562 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_31549);
var inst_31563 = cljs.core.pr_str.call(null,inst_31562);
var inst_31564 = [cljs.core.str("not required: "),cljs.core.str(inst_31563)].join('');
var inst_31565 = figwheel.client.utils.log.call(null,inst_31564);
var state_31573__$1 = state_31573;
var statearr_31614_31690 = state_31573__$1;
(statearr_31614_31690[(2)] = inst_31565);

(statearr_31614_31690[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31574 === (6))){
var inst_31468 = (state_31573[(2)]);
var state_31573__$1 = state_31573;
var statearr_31615_31691 = state_31573__$1;
(statearr_31615_31691[(2)] = inst_31468);

(statearr_31615_31691[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31574 === (28))){
var inst_31493 = (state_31573[(26)]);
var inst_31520 = (state_31573[(2)]);
var inst_31521 = cljs.core.not_empty.call(null,inst_31493);
var state_31573__$1 = (function (){var statearr_31616 = state_31573;
(statearr_31616[(29)] = inst_31520);

return statearr_31616;
})();
if(cljs.core.truth_(inst_31521)){
var statearr_31617_31692 = state_31573__$1;
(statearr_31617_31692[(1)] = (29));

} else {
var statearr_31618_31693 = state_31573__$1;
(statearr_31618_31693[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31574 === (25))){
var inst_31491 = (state_31573[(23)]);
var inst_31507 = (state_31573[(2)]);
var inst_31508 = cljs.core.not_empty.call(null,inst_31491);
var state_31573__$1 = (function (){var statearr_31619 = state_31573;
(statearr_31619[(30)] = inst_31507);

return statearr_31619;
})();
if(cljs.core.truth_(inst_31508)){
var statearr_31620_31694 = state_31573__$1;
(statearr_31620_31694[(1)] = (26));

} else {
var statearr_31621_31695 = state_31573__$1;
(statearr_31621_31695[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31574 === (34))){
var inst_31542 = (state_31573[(2)]);
var state_31573__$1 = state_31573;
if(cljs.core.truth_(inst_31542)){
var statearr_31622_31696 = state_31573__$1;
(statearr_31622_31696[(1)] = (38));

} else {
var statearr_31623_31697 = state_31573__$1;
(statearr_31623_31697[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31574 === (17))){
var state_31573__$1 = state_31573;
var statearr_31624_31698 = state_31573__$1;
(statearr_31624_31698[(2)] = recompile_dependents);

(statearr_31624_31698[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31574 === (3))){
var state_31573__$1 = state_31573;
var statearr_31625_31699 = state_31573__$1;
(statearr_31625_31699[(2)] = null);

(statearr_31625_31699[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31574 === (12))){
var inst_31464 = (state_31573[(2)]);
var state_31573__$1 = state_31573;
var statearr_31626_31700 = state_31573__$1;
(statearr_31626_31700[(2)] = inst_31464);

(statearr_31626_31700[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31574 === (2))){
var inst_31426 = (state_31573[(13)]);
var inst_31433 = cljs.core.seq.call(null,inst_31426);
var inst_31434 = inst_31433;
var inst_31435 = null;
var inst_31436 = (0);
var inst_31437 = (0);
var state_31573__$1 = (function (){var statearr_31627 = state_31573;
(statearr_31627[(7)] = inst_31435);

(statearr_31627[(8)] = inst_31437);

(statearr_31627[(9)] = inst_31434);

(statearr_31627[(10)] = inst_31436);

return statearr_31627;
})();
var statearr_31628_31701 = state_31573__$1;
(statearr_31628_31701[(2)] = null);

(statearr_31628_31701[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31574 === (23))){
var inst_31491 = (state_31573[(23)]);
var inst_31487 = (state_31573[(19)]);
var inst_31495 = (state_31573[(24)]);
var inst_31490 = (state_31573[(25)]);
var inst_31493 = (state_31573[(26)]);
var inst_31498 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_31500 = (function (){var all_files = inst_31487;
var res_SINGLEQUOTE_ = inst_31490;
var res = inst_31491;
var files_not_loaded = inst_31493;
var dependencies_that_loaded = inst_31495;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_31491,inst_31487,inst_31495,inst_31490,inst_31493,inst_31498,state_val_31574,c__27884__auto__,map__31419,map__31419__$1,opts,before_jsload,on_jsload,reload_dependents,map__31420,map__31420__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__31499){
var map__31629 = p__31499;
var map__31629__$1 = ((((!((map__31629 == null)))?((((map__31629.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31629.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31629):map__31629);
var request_url = cljs.core.get.call(null,map__31629__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_31491,inst_31487,inst_31495,inst_31490,inst_31493,inst_31498,state_val_31574,c__27884__auto__,map__31419,map__31419__$1,opts,before_jsload,on_jsload,reload_dependents,map__31420,map__31420__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_31501 = cljs.core.reverse.call(null,inst_31495);
var inst_31502 = cljs.core.map.call(null,inst_31500,inst_31501);
var inst_31503 = cljs.core.pr_str.call(null,inst_31502);
var inst_31504 = figwheel.client.utils.log.call(null,inst_31503);
var state_31573__$1 = (function (){var statearr_31631 = state_31573;
(statearr_31631[(31)] = inst_31498);

return statearr_31631;
})();
var statearr_31632_31702 = state_31573__$1;
(statearr_31632_31702[(2)] = inst_31504);

(statearr_31632_31702[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31574 === (35))){
var state_31573__$1 = state_31573;
var statearr_31633_31703 = state_31573__$1;
(statearr_31633_31703[(2)] = true);

(statearr_31633_31703[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31574 === (19))){
var inst_31477 = (state_31573[(12)]);
var inst_31483 = figwheel.client.file_reloading.expand_files.call(null,inst_31477);
var state_31573__$1 = state_31573;
var statearr_31634_31704 = state_31573__$1;
(statearr_31634_31704[(2)] = inst_31483);

(statearr_31634_31704[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31574 === (11))){
var state_31573__$1 = state_31573;
var statearr_31635_31705 = state_31573__$1;
(statearr_31635_31705[(2)] = null);

(statearr_31635_31705[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31574 === (9))){
var inst_31466 = (state_31573[(2)]);
var state_31573__$1 = state_31573;
var statearr_31636_31706 = state_31573__$1;
(statearr_31636_31706[(2)] = inst_31466);

(statearr_31636_31706[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31574 === (5))){
var inst_31437 = (state_31573[(8)]);
var inst_31436 = (state_31573[(10)]);
var inst_31439 = (inst_31437 < inst_31436);
var inst_31440 = inst_31439;
var state_31573__$1 = state_31573;
if(cljs.core.truth_(inst_31440)){
var statearr_31637_31707 = state_31573__$1;
(statearr_31637_31707[(1)] = (7));

} else {
var statearr_31638_31708 = state_31573__$1;
(statearr_31638_31708[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31574 === (14))){
var inst_31447 = (state_31573[(22)]);
var inst_31456 = cljs.core.first.call(null,inst_31447);
var inst_31457 = figwheel.client.file_reloading.eval_body.call(null,inst_31456,opts);
var inst_31458 = cljs.core.next.call(null,inst_31447);
var inst_31434 = inst_31458;
var inst_31435 = null;
var inst_31436 = (0);
var inst_31437 = (0);
var state_31573__$1 = (function (){var statearr_31639 = state_31573;
(statearr_31639[(7)] = inst_31435);

(statearr_31639[(8)] = inst_31437);

(statearr_31639[(9)] = inst_31434);

(statearr_31639[(32)] = inst_31457);

(statearr_31639[(10)] = inst_31436);

return statearr_31639;
})();
var statearr_31640_31709 = state_31573__$1;
(statearr_31640_31709[(2)] = null);

(statearr_31640_31709[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31574 === (45))){
var state_31573__$1 = state_31573;
var statearr_31641_31710 = state_31573__$1;
(statearr_31641_31710[(2)] = null);

(statearr_31641_31710[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31574 === (26))){
var inst_31491 = (state_31573[(23)]);
var inst_31487 = (state_31573[(19)]);
var inst_31495 = (state_31573[(24)]);
var inst_31490 = (state_31573[(25)]);
var inst_31493 = (state_31573[(26)]);
var inst_31510 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_31512 = (function (){var all_files = inst_31487;
var res_SINGLEQUOTE_ = inst_31490;
var res = inst_31491;
var files_not_loaded = inst_31493;
var dependencies_that_loaded = inst_31495;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_31491,inst_31487,inst_31495,inst_31490,inst_31493,inst_31510,state_val_31574,c__27884__auto__,map__31419,map__31419__$1,opts,before_jsload,on_jsload,reload_dependents,map__31420,map__31420__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__31511){
var map__31642 = p__31511;
var map__31642__$1 = ((((!((map__31642 == null)))?((((map__31642.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31642.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31642):map__31642);
var namespace = cljs.core.get.call(null,map__31642__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__31642__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_31491,inst_31487,inst_31495,inst_31490,inst_31493,inst_31510,state_val_31574,c__27884__auto__,map__31419,map__31419__$1,opts,before_jsload,on_jsload,reload_dependents,map__31420,map__31420__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_31513 = cljs.core.map.call(null,inst_31512,inst_31491);
var inst_31514 = cljs.core.pr_str.call(null,inst_31513);
var inst_31515 = figwheel.client.utils.log.call(null,inst_31514);
var inst_31516 = (function (){var all_files = inst_31487;
var res_SINGLEQUOTE_ = inst_31490;
var res = inst_31491;
var files_not_loaded = inst_31493;
var dependencies_that_loaded = inst_31495;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_31491,inst_31487,inst_31495,inst_31490,inst_31493,inst_31510,inst_31512,inst_31513,inst_31514,inst_31515,state_val_31574,c__27884__auto__,map__31419,map__31419__$1,opts,before_jsload,on_jsload,reload_dependents,map__31420,map__31420__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_31491,inst_31487,inst_31495,inst_31490,inst_31493,inst_31510,inst_31512,inst_31513,inst_31514,inst_31515,state_val_31574,c__27884__auto__,map__31419,map__31419__$1,opts,before_jsload,on_jsload,reload_dependents,map__31420,map__31420__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_31517 = setTimeout(inst_31516,(10));
var state_31573__$1 = (function (){var statearr_31644 = state_31573;
(statearr_31644[(33)] = inst_31515);

(statearr_31644[(34)] = inst_31510);

return statearr_31644;
})();
var statearr_31645_31711 = state_31573__$1;
(statearr_31645_31711[(2)] = inst_31517);

(statearr_31645_31711[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31574 === (16))){
var state_31573__$1 = state_31573;
var statearr_31646_31712 = state_31573__$1;
(statearr_31646_31712[(2)] = reload_dependents);

(statearr_31646_31712[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31574 === (38))){
var inst_31527 = (state_31573[(16)]);
var inst_31544 = cljs.core.apply.call(null,cljs.core.hash_map,inst_31527);
var state_31573__$1 = state_31573;
var statearr_31647_31713 = state_31573__$1;
(statearr_31647_31713[(2)] = inst_31544);

(statearr_31647_31713[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31574 === (30))){
var state_31573__$1 = state_31573;
var statearr_31648_31714 = state_31573__$1;
(statearr_31648_31714[(2)] = null);

(statearr_31648_31714[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31574 === (10))){
var inst_31447 = (state_31573[(22)]);
var inst_31449 = cljs.core.chunked_seq_QMARK_.call(null,inst_31447);
var state_31573__$1 = state_31573;
if(inst_31449){
var statearr_31649_31715 = state_31573__$1;
(statearr_31649_31715[(1)] = (13));

} else {
var statearr_31650_31716 = state_31573__$1;
(statearr_31650_31716[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31574 === (18))){
var inst_31481 = (state_31573[(2)]);
var state_31573__$1 = state_31573;
if(cljs.core.truth_(inst_31481)){
var statearr_31651_31717 = state_31573__$1;
(statearr_31651_31717[(1)] = (19));

} else {
var statearr_31652_31718 = state_31573__$1;
(statearr_31652_31718[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31574 === (42))){
var state_31573__$1 = state_31573;
var statearr_31653_31719 = state_31573__$1;
(statearr_31653_31719[(2)] = null);

(statearr_31653_31719[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31574 === (37))){
var inst_31539 = (state_31573[(2)]);
var state_31573__$1 = state_31573;
var statearr_31654_31720 = state_31573__$1;
(statearr_31654_31720[(2)] = inst_31539);

(statearr_31654_31720[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31574 === (8))){
var inst_31434 = (state_31573[(9)]);
var inst_31447 = (state_31573[(22)]);
var inst_31447__$1 = cljs.core.seq.call(null,inst_31434);
var state_31573__$1 = (function (){var statearr_31655 = state_31573;
(statearr_31655[(22)] = inst_31447__$1);

return statearr_31655;
})();
if(inst_31447__$1){
var statearr_31656_31721 = state_31573__$1;
(statearr_31656_31721[(1)] = (10));

} else {
var statearr_31657_31722 = state_31573__$1;
(statearr_31657_31722[(1)] = (11));

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
});})(c__27884__auto__,map__31419,map__31419__$1,opts,before_jsload,on_jsload,reload_dependents,map__31420,map__31420__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__27772__auto__,c__27884__auto__,map__31419,map__31419__$1,opts,before_jsload,on_jsload,reload_dependents,map__31420,map__31420__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__27773__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__27773__auto____0 = (function (){
var statearr_31661 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31661[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__27773__auto__);

(statearr_31661[(1)] = (1));

return statearr_31661;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__27773__auto____1 = (function (state_31573){
while(true){
var ret_value__27774__auto__ = (function (){try{while(true){
var result__27775__auto__ = switch__27772__auto__.call(null,state_31573);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27775__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27775__auto__;
}
break;
}
}catch (e31662){if((e31662 instanceof Object)){
var ex__27776__auto__ = e31662;
var statearr_31663_31723 = state_31573;
(statearr_31663_31723[(5)] = ex__27776__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31573);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31662;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27774__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31724 = state_31573;
state_31573 = G__31724;
continue;
} else {
return ret_value__27774__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__27773__auto__ = function(state_31573){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__27773__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__27773__auto____1.call(this,state_31573);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__27773__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__27773__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__27773__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__27773__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__27773__auto__;
})()
;})(switch__27772__auto__,c__27884__auto__,map__31419,map__31419__$1,opts,before_jsload,on_jsload,reload_dependents,map__31420,map__31420__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__27886__auto__ = (function (){var statearr_31664 = f__27885__auto__.call(null);
(statearr_31664[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27884__auto__);

return statearr_31664;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27886__auto__);
});})(c__27884__auto__,map__31419,map__31419__$1,opts,before_jsload,on_jsload,reload_dependents,map__31420,map__31420__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__27884__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__31727,link){
var map__31730 = p__31727;
var map__31730__$1 = ((((!((map__31730 == null)))?((((map__31730.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31730.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31730):map__31730);
var file = cljs.core.get.call(null,map__31730__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__31730,map__31730__$1,file){
return (function (p1__31725_SHARP_,p2__31726_SHARP_){
if(cljs.core._EQ_.call(null,p1__31725_SHARP_,p2__31726_SHARP_)){
return p1__31725_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__31730,map__31730__$1,file))
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
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__31736){
var map__31737 = p__31736;
var map__31737__$1 = ((((!((map__31737 == null)))?((((map__31737.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31737.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31737):map__31737);
var match_length = cljs.core.get.call(null,map__31737__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__31737__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__31732_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__31732_SHARP_);
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
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(var_args){
var args31739 = [];
var len__25836__auto___31742 = arguments.length;
var i__25837__auto___31743 = (0);
while(true){
if((i__25837__auto___31743 < len__25836__auto___31742)){
args31739.push((arguments[i__25837__auto___31743]));

var G__31744 = (i__25837__auto___31743 + (1));
i__25837__auto___31743 = G__31744;
continue;
} else {
}
break;
}

var G__31741 = args31739.length;
switch (G__31741) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31739.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;

figwheel.client.file_reloading.distictify = (function figwheel$client$file_reloading$distictify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__31746_SHARP_,p2__31747_SHARP_){
return cljs.core.assoc.call(null,p1__31746_SHARP_,cljs.core.get.call(null,p2__31747_SHARP_,key),p2__31747_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__31748){
var map__31751 = p__31748;
var map__31751__$1 = ((((!((map__31751 == null)))?((((map__31751.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31751.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31751):map__31751);
var f_data = map__31751__$1;
var file = cljs.core.get.call(null,map__31751__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4657__auto__)){
var link = temp__4657__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__31753,p__31754){
var map__31763 = p__31753;
var map__31763__$1 = ((((!((map__31763 == null)))?((((map__31763.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31763.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31763):map__31763);
var opts = map__31763__$1;
var on_cssload = cljs.core.get.call(null,map__31763__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__31764 = p__31754;
var map__31764__$1 = ((((!((map__31764 == null)))?((((map__31764.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31764.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31764):map__31764);
var files_msg = map__31764__$1;
var files = cljs.core.get.call(null,map__31764__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__31767_31771 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
var chunk__31768_31772 = null;
var count__31769_31773 = (0);
var i__31770_31774 = (0);
while(true){
if((i__31770_31774 < count__31769_31773)){
var f_31775 = cljs.core._nth.call(null,chunk__31768_31772,i__31770_31774);
figwheel.client.file_reloading.reload_css_file.call(null,f_31775);

var G__31776 = seq__31767_31771;
var G__31777 = chunk__31768_31772;
var G__31778 = count__31769_31773;
var G__31779 = (i__31770_31774 + (1));
seq__31767_31771 = G__31776;
chunk__31768_31772 = G__31777;
count__31769_31773 = G__31778;
i__31770_31774 = G__31779;
continue;
} else {
var temp__4657__auto___31780 = cljs.core.seq.call(null,seq__31767_31771);
if(temp__4657__auto___31780){
var seq__31767_31781__$1 = temp__4657__auto___31780;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31767_31781__$1)){
var c__25572__auto___31782 = cljs.core.chunk_first.call(null,seq__31767_31781__$1);
var G__31783 = cljs.core.chunk_rest.call(null,seq__31767_31781__$1);
var G__31784 = c__25572__auto___31782;
var G__31785 = cljs.core.count.call(null,c__25572__auto___31782);
var G__31786 = (0);
seq__31767_31771 = G__31783;
chunk__31768_31772 = G__31784;
count__31769_31773 = G__31785;
i__31770_31774 = G__31786;
continue;
} else {
var f_31787 = cljs.core.first.call(null,seq__31767_31781__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_31787);

var G__31788 = cljs.core.next.call(null,seq__31767_31781__$1);
var G__31789 = null;
var G__31790 = (0);
var G__31791 = (0);
seq__31767_31771 = G__31788;
chunk__31768_31772 = G__31789;
count__31769_31773 = G__31790;
i__31770_31774 = G__31791;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__31763,map__31763__$1,opts,on_cssload,map__31764,map__31764__$1,files_msg,files){
return (function (){
figwheel.client.file_reloading.on_cssload_custom_event.call(null,files);

return on_cssload.call(null,files);
});})(map__31763,map__31763__$1,opts,on_cssload,map__31764,map__31764__$1,files_msg,files))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1520626834788