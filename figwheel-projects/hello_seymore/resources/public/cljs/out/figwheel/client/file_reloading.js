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
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__30737_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__30737_SHARP_));
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
var seq__30742 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__30743 = null;
var count__30744 = (0);
var i__30745 = (0);
while(true){
if((i__30745 < count__30744)){
var n = cljs.core._nth.call(null,chunk__30743,i__30745);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__30746 = seq__30742;
var G__30747 = chunk__30743;
var G__30748 = count__30744;
var G__30749 = (i__30745 + (1));
seq__30742 = G__30746;
chunk__30743 = G__30747;
count__30744 = G__30748;
i__30745 = G__30749;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__30742);
if(temp__4657__auto__){
var seq__30742__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30742__$1)){
var c__25572__auto__ = cljs.core.chunk_first.call(null,seq__30742__$1);
var G__30750 = cljs.core.chunk_rest.call(null,seq__30742__$1);
var G__30751 = c__25572__auto__;
var G__30752 = cljs.core.count.call(null,c__25572__auto__);
var G__30753 = (0);
seq__30742 = G__30750;
chunk__30743 = G__30751;
count__30744 = G__30752;
i__30745 = G__30753;
continue;
} else {
var n = cljs.core.first.call(null,seq__30742__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__30754 = cljs.core.next.call(null,seq__30742__$1);
var G__30755 = null;
var G__30756 = (0);
var G__30757 = (0);
seq__30742 = G__30754;
chunk__30743 = G__30755;
count__30744 = G__30756;
i__30745 = G__30757;
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

var seq__30808_30819 = cljs.core.seq.call(null,deps);
var chunk__30809_30820 = null;
var count__30810_30821 = (0);
var i__30811_30822 = (0);
while(true){
if((i__30811_30822 < count__30810_30821)){
var dep_30823 = cljs.core._nth.call(null,chunk__30809_30820,i__30811_30822);
topo_sort_helper_STAR_.call(null,dep_30823,(depth + (1)),state);

var G__30824 = seq__30808_30819;
var G__30825 = chunk__30809_30820;
var G__30826 = count__30810_30821;
var G__30827 = (i__30811_30822 + (1));
seq__30808_30819 = G__30824;
chunk__30809_30820 = G__30825;
count__30810_30821 = G__30826;
i__30811_30822 = G__30827;
continue;
} else {
var temp__4657__auto___30828 = cljs.core.seq.call(null,seq__30808_30819);
if(temp__4657__auto___30828){
var seq__30808_30829__$1 = temp__4657__auto___30828;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30808_30829__$1)){
var c__25572__auto___30830 = cljs.core.chunk_first.call(null,seq__30808_30829__$1);
var G__30831 = cljs.core.chunk_rest.call(null,seq__30808_30829__$1);
var G__30832 = c__25572__auto___30830;
var G__30833 = cljs.core.count.call(null,c__25572__auto___30830);
var G__30834 = (0);
seq__30808_30819 = G__30831;
chunk__30809_30820 = G__30832;
count__30810_30821 = G__30833;
i__30811_30822 = G__30834;
continue;
} else {
var dep_30835 = cljs.core.first.call(null,seq__30808_30829__$1);
topo_sort_helper_STAR_.call(null,dep_30835,(depth + (1)),state);

var G__30836 = cljs.core.next.call(null,seq__30808_30829__$1);
var G__30837 = null;
var G__30838 = (0);
var G__30839 = (0);
seq__30808_30819 = G__30836;
chunk__30809_30820 = G__30837;
count__30810_30821 = G__30838;
i__30811_30822 = G__30839;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__30812){
var vec__30816 = p__30812;
var seq__30817 = cljs.core.seq.call(null,vec__30816);
var first__30818 = cljs.core.first.call(null,seq__30817);
var seq__30817__$1 = cljs.core.next.call(null,seq__30817);
var x = first__30818;
var xs = seq__30817__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__30816,seq__30817,first__30818,seq__30817__$1,x,xs,get_deps__$1){
return (function (p1__30758_SHARP_){
return clojure.set.difference.call(null,p1__30758_SHARP_,x);
});})(vec__30816,seq__30817,first__30818,seq__30817__$1,x,xs,get_deps__$1))
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
var seq__30852 = cljs.core.seq.call(null,provides);
var chunk__30853 = null;
var count__30854 = (0);
var i__30855 = (0);
while(true){
if((i__30855 < count__30854)){
var prov = cljs.core._nth.call(null,chunk__30853,i__30855);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__30856_30864 = cljs.core.seq.call(null,requires);
var chunk__30857_30865 = null;
var count__30858_30866 = (0);
var i__30859_30867 = (0);
while(true){
if((i__30859_30867 < count__30858_30866)){
var req_30868 = cljs.core._nth.call(null,chunk__30857_30865,i__30859_30867);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_30868,prov);

var G__30869 = seq__30856_30864;
var G__30870 = chunk__30857_30865;
var G__30871 = count__30858_30866;
var G__30872 = (i__30859_30867 + (1));
seq__30856_30864 = G__30869;
chunk__30857_30865 = G__30870;
count__30858_30866 = G__30871;
i__30859_30867 = G__30872;
continue;
} else {
var temp__4657__auto___30873 = cljs.core.seq.call(null,seq__30856_30864);
if(temp__4657__auto___30873){
var seq__30856_30874__$1 = temp__4657__auto___30873;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30856_30874__$1)){
var c__25572__auto___30875 = cljs.core.chunk_first.call(null,seq__30856_30874__$1);
var G__30876 = cljs.core.chunk_rest.call(null,seq__30856_30874__$1);
var G__30877 = c__25572__auto___30875;
var G__30878 = cljs.core.count.call(null,c__25572__auto___30875);
var G__30879 = (0);
seq__30856_30864 = G__30876;
chunk__30857_30865 = G__30877;
count__30858_30866 = G__30878;
i__30859_30867 = G__30879;
continue;
} else {
var req_30880 = cljs.core.first.call(null,seq__30856_30874__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_30880,prov);

var G__30881 = cljs.core.next.call(null,seq__30856_30874__$1);
var G__30882 = null;
var G__30883 = (0);
var G__30884 = (0);
seq__30856_30864 = G__30881;
chunk__30857_30865 = G__30882;
count__30858_30866 = G__30883;
i__30859_30867 = G__30884;
continue;
}
} else {
}
}
break;
}

var G__30885 = seq__30852;
var G__30886 = chunk__30853;
var G__30887 = count__30854;
var G__30888 = (i__30855 + (1));
seq__30852 = G__30885;
chunk__30853 = G__30886;
count__30854 = G__30887;
i__30855 = G__30888;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__30852);
if(temp__4657__auto__){
var seq__30852__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30852__$1)){
var c__25572__auto__ = cljs.core.chunk_first.call(null,seq__30852__$1);
var G__30889 = cljs.core.chunk_rest.call(null,seq__30852__$1);
var G__30890 = c__25572__auto__;
var G__30891 = cljs.core.count.call(null,c__25572__auto__);
var G__30892 = (0);
seq__30852 = G__30889;
chunk__30853 = G__30890;
count__30854 = G__30891;
i__30855 = G__30892;
continue;
} else {
var prov = cljs.core.first.call(null,seq__30852__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__30860_30893 = cljs.core.seq.call(null,requires);
var chunk__30861_30894 = null;
var count__30862_30895 = (0);
var i__30863_30896 = (0);
while(true){
if((i__30863_30896 < count__30862_30895)){
var req_30897 = cljs.core._nth.call(null,chunk__30861_30894,i__30863_30896);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_30897,prov);

var G__30898 = seq__30860_30893;
var G__30899 = chunk__30861_30894;
var G__30900 = count__30862_30895;
var G__30901 = (i__30863_30896 + (1));
seq__30860_30893 = G__30898;
chunk__30861_30894 = G__30899;
count__30862_30895 = G__30900;
i__30863_30896 = G__30901;
continue;
} else {
var temp__4657__auto___30902__$1 = cljs.core.seq.call(null,seq__30860_30893);
if(temp__4657__auto___30902__$1){
var seq__30860_30903__$1 = temp__4657__auto___30902__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30860_30903__$1)){
var c__25572__auto___30904 = cljs.core.chunk_first.call(null,seq__30860_30903__$1);
var G__30905 = cljs.core.chunk_rest.call(null,seq__30860_30903__$1);
var G__30906 = c__25572__auto___30904;
var G__30907 = cljs.core.count.call(null,c__25572__auto___30904);
var G__30908 = (0);
seq__30860_30893 = G__30905;
chunk__30861_30894 = G__30906;
count__30862_30895 = G__30907;
i__30863_30896 = G__30908;
continue;
} else {
var req_30909 = cljs.core.first.call(null,seq__30860_30903__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_30909,prov);

var G__30910 = cljs.core.next.call(null,seq__30860_30903__$1);
var G__30911 = null;
var G__30912 = (0);
var G__30913 = (0);
seq__30860_30893 = G__30910;
chunk__30861_30894 = G__30911;
count__30862_30895 = G__30912;
i__30863_30896 = G__30913;
continue;
}
} else {
}
}
break;
}

var G__30914 = cljs.core.next.call(null,seq__30852__$1);
var G__30915 = null;
var G__30916 = (0);
var G__30917 = (0);
seq__30852 = G__30914;
chunk__30853 = G__30915;
count__30854 = G__30916;
i__30855 = G__30917;
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
var seq__30922_30926 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__30923_30927 = null;
var count__30924_30928 = (0);
var i__30925_30929 = (0);
while(true){
if((i__30925_30929 < count__30924_30928)){
var ns_30930 = cljs.core._nth.call(null,chunk__30923_30927,i__30925_30929);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_30930);

var G__30931 = seq__30922_30926;
var G__30932 = chunk__30923_30927;
var G__30933 = count__30924_30928;
var G__30934 = (i__30925_30929 + (1));
seq__30922_30926 = G__30931;
chunk__30923_30927 = G__30932;
count__30924_30928 = G__30933;
i__30925_30929 = G__30934;
continue;
} else {
var temp__4657__auto___30935 = cljs.core.seq.call(null,seq__30922_30926);
if(temp__4657__auto___30935){
var seq__30922_30936__$1 = temp__4657__auto___30935;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30922_30936__$1)){
var c__25572__auto___30937 = cljs.core.chunk_first.call(null,seq__30922_30936__$1);
var G__30938 = cljs.core.chunk_rest.call(null,seq__30922_30936__$1);
var G__30939 = c__25572__auto___30937;
var G__30940 = cljs.core.count.call(null,c__25572__auto___30937);
var G__30941 = (0);
seq__30922_30926 = G__30938;
chunk__30923_30927 = G__30939;
count__30924_30928 = G__30940;
i__30925_30929 = G__30941;
continue;
} else {
var ns_30942 = cljs.core.first.call(null,seq__30922_30936__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_30942);

var G__30943 = cljs.core.next.call(null,seq__30922_30936__$1);
var G__30944 = null;
var G__30945 = (0);
var G__30946 = (0);
seq__30922_30926 = G__30943;
chunk__30923_30927 = G__30944;
count__30924_30928 = G__30945;
i__30925_30929 = G__30946;
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
var G__30947__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__30947 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__30948__i = 0, G__30948__a = new Array(arguments.length -  0);
while (G__30948__i < G__30948__a.length) {G__30948__a[G__30948__i] = arguments[G__30948__i + 0]; ++G__30948__i;}
  args = new cljs.core.IndexedSeq(G__30948__a,0);
} 
return G__30947__delegate.call(this,args);};
G__30947.cljs$lang$maxFixedArity = 0;
G__30947.cljs$lang$applyTo = (function (arglist__30949){
var args = cljs.core.seq(arglist__30949);
return G__30947__delegate(args);
});
G__30947.cljs$core$IFn$_invoke$arity$variadic = G__30947__delegate;
return G__30947;
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
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__30951 = cljs.core._EQ_;
var expr__30952 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__30951.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__30952))){
var path_parts = ((function (pred__30951,expr__30952){
return (function (p1__30950_SHARP_){
return clojure.string.split.call(null,p1__30950_SHARP_,/[\/\\]/);
});})(pred__30951,expr__30952))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__30951,expr__30952){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e30954){if((e30954 instanceof Error)){
var e = e30954;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e30954;

}
}})());
});
;})(path_parts,sep,root,pred__30951,expr__30952))
} else {
if(cljs.core.truth_(pred__30951.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__30952))){
return ((function (pred__30951,expr__30952){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
deferred.addCallback(((function (deferred,pred__30951,expr__30952){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__30951,expr__30952))
);

return deferred.addErrback(((function (deferred,pred__30951,expr__30952){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__30951,expr__30952))
);
});
;})(pred__30951,expr__30952))
} else {
return ((function (pred__30951,expr__30952){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__30951,expr__30952))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__30955,callback){
var map__30958 = p__30955;
var map__30958__$1 = ((((!((map__30958 == null)))?((((map__30958.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30958.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30958):map__30958);
var file_msg = map__30958__$1;
var request_url = cljs.core.get.call(null,map__30958__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__30958,map__30958__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__30958,map__30958__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__27882__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27882__auto__){
return (function (){
var f__27883__auto__ = (function (){var switch__27770__auto__ = ((function (c__27882__auto__){
return (function (state_30982){
var state_val_30983 = (state_30982[(1)]);
if((state_val_30983 === (7))){
var inst_30978 = (state_30982[(2)]);
var state_30982__$1 = state_30982;
var statearr_30984_31004 = state_30982__$1;
(statearr_30984_31004[(2)] = inst_30978);

(statearr_30984_31004[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30983 === (1))){
var state_30982__$1 = state_30982;
var statearr_30985_31005 = state_30982__$1;
(statearr_30985_31005[(2)] = null);

(statearr_30985_31005[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30983 === (4))){
var inst_30962 = (state_30982[(7)]);
var inst_30962__$1 = (state_30982[(2)]);
var state_30982__$1 = (function (){var statearr_30986 = state_30982;
(statearr_30986[(7)] = inst_30962__$1);

return statearr_30986;
})();
if(cljs.core.truth_(inst_30962__$1)){
var statearr_30987_31006 = state_30982__$1;
(statearr_30987_31006[(1)] = (5));

} else {
var statearr_30988_31007 = state_30982__$1;
(statearr_30988_31007[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30983 === (6))){
var state_30982__$1 = state_30982;
var statearr_30989_31008 = state_30982__$1;
(statearr_30989_31008[(2)] = null);

(statearr_30989_31008[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30983 === (3))){
var inst_30980 = (state_30982[(2)]);
var state_30982__$1 = state_30982;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30982__$1,inst_30980);
} else {
if((state_val_30983 === (2))){
var state_30982__$1 = state_30982;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30982__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_30983 === (11))){
var inst_30974 = (state_30982[(2)]);
var state_30982__$1 = (function (){var statearr_30990 = state_30982;
(statearr_30990[(8)] = inst_30974);

return statearr_30990;
})();
var statearr_30991_31009 = state_30982__$1;
(statearr_30991_31009[(2)] = null);

(statearr_30991_31009[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30983 === (9))){
var inst_30968 = (state_30982[(9)]);
var inst_30966 = (state_30982[(10)]);
var inst_30970 = inst_30968.call(null,inst_30966);
var state_30982__$1 = state_30982;
var statearr_30992_31010 = state_30982__$1;
(statearr_30992_31010[(2)] = inst_30970);

(statearr_30992_31010[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30983 === (5))){
var inst_30962 = (state_30982[(7)]);
var inst_30964 = figwheel.client.file_reloading.blocking_load.call(null,inst_30962);
var state_30982__$1 = state_30982;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30982__$1,(8),inst_30964);
} else {
if((state_val_30983 === (10))){
var inst_30966 = (state_30982[(10)]);
var inst_30972 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_30966);
var state_30982__$1 = state_30982;
var statearr_30993_31011 = state_30982__$1;
(statearr_30993_31011[(2)] = inst_30972);

(statearr_30993_31011[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30983 === (8))){
var inst_30968 = (state_30982[(9)]);
var inst_30962 = (state_30982[(7)]);
var inst_30966 = (state_30982[(2)]);
var inst_30967 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_30968__$1 = cljs.core.get.call(null,inst_30967,inst_30962);
var state_30982__$1 = (function (){var statearr_30994 = state_30982;
(statearr_30994[(9)] = inst_30968__$1);

(statearr_30994[(10)] = inst_30966);

return statearr_30994;
})();
if(cljs.core.truth_(inst_30968__$1)){
var statearr_30995_31012 = state_30982__$1;
(statearr_30995_31012[(1)] = (9));

} else {
var statearr_30996_31013 = state_30982__$1;
(statearr_30996_31013[(1)] = (10));

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
});})(c__27882__auto__))
;
return ((function (switch__27770__auto__,c__27882__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__27771__auto__ = null;
var figwheel$client$file_reloading$state_machine__27771__auto____0 = (function (){
var statearr_31000 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31000[(0)] = figwheel$client$file_reloading$state_machine__27771__auto__);

(statearr_31000[(1)] = (1));

return statearr_31000;
});
var figwheel$client$file_reloading$state_machine__27771__auto____1 = (function (state_30982){
while(true){
var ret_value__27772__auto__ = (function (){try{while(true){
var result__27773__auto__ = switch__27770__auto__.call(null,state_30982);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27773__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27773__auto__;
}
break;
}
}catch (e31001){if((e31001 instanceof Object)){
var ex__27774__auto__ = e31001;
var statearr_31002_31014 = state_30982;
(statearr_31002_31014[(5)] = ex__27774__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30982);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31001;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27772__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31015 = state_30982;
state_30982 = G__31015;
continue;
} else {
return ret_value__27772__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__27771__auto__ = function(state_30982){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__27771__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__27771__auto____1.call(this,state_30982);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__27771__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__27771__auto____0;
figwheel$client$file_reloading$state_machine__27771__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__27771__auto____1;
return figwheel$client$file_reloading$state_machine__27771__auto__;
})()
;})(switch__27770__auto__,c__27882__auto__))
})();
var state__27884__auto__ = (function (){var statearr_31003 = f__27883__auto__.call(null);
(statearr_31003[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27882__auto__);

return statearr_31003;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27884__auto__);
});})(c__27882__auto__))
);

return c__27882__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__31016,callback){
var map__31019 = p__31016;
var map__31019__$1 = ((((!((map__31019 == null)))?((((map__31019.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31019.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31019):map__31019);
var file_msg = map__31019__$1;
var namespace = cljs.core.get.call(null,map__31019__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__31019,map__31019__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__31019,map__31019__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__31021){
var map__31024 = p__31021;
var map__31024__$1 = ((((!((map__31024 == null)))?((((map__31024.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31024.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31024):map__31024);
var file_msg = map__31024__$1;
var namespace = cljs.core.get.call(null,map__31024__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__31026,callback){
var map__31029 = p__31026;
var map__31029__$1 = ((((!((map__31029 == null)))?((((map__31029.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31029.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31029):map__31029);
var file_msg = map__31029__$1;
var request_url = cljs.core.get.call(null,map__31029__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__31029__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__27882__auto___31133 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27882__auto___31133,out){
return (function (){
var f__27883__auto__ = (function (){var switch__27770__auto__ = ((function (c__27882__auto___31133,out){
return (function (state_31115){
var state_val_31116 = (state_31115[(1)]);
if((state_val_31116 === (1))){
var inst_31089 = cljs.core.seq.call(null,files);
var inst_31090 = cljs.core.first.call(null,inst_31089);
var inst_31091 = cljs.core.next.call(null,inst_31089);
var inst_31092 = files;
var state_31115__$1 = (function (){var statearr_31117 = state_31115;
(statearr_31117[(7)] = inst_31091);

(statearr_31117[(8)] = inst_31092);

(statearr_31117[(9)] = inst_31090);

return statearr_31117;
})();
var statearr_31118_31134 = state_31115__$1;
(statearr_31118_31134[(2)] = null);

(statearr_31118_31134[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31116 === (2))){
var inst_31092 = (state_31115[(8)]);
var inst_31098 = (state_31115[(10)]);
var inst_31097 = cljs.core.seq.call(null,inst_31092);
var inst_31098__$1 = cljs.core.first.call(null,inst_31097);
var inst_31099 = cljs.core.next.call(null,inst_31097);
var inst_31100 = (inst_31098__$1 == null);
var inst_31101 = cljs.core.not.call(null,inst_31100);
var state_31115__$1 = (function (){var statearr_31119 = state_31115;
(statearr_31119[(10)] = inst_31098__$1);

(statearr_31119[(11)] = inst_31099);

return statearr_31119;
})();
if(inst_31101){
var statearr_31120_31135 = state_31115__$1;
(statearr_31120_31135[(1)] = (4));

} else {
var statearr_31121_31136 = state_31115__$1;
(statearr_31121_31136[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31116 === (3))){
var inst_31113 = (state_31115[(2)]);
var state_31115__$1 = state_31115;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31115__$1,inst_31113);
} else {
if((state_val_31116 === (4))){
var inst_31098 = (state_31115[(10)]);
var inst_31103 = figwheel.client.file_reloading.reload_js_file.call(null,inst_31098);
var state_31115__$1 = state_31115;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31115__$1,(7),inst_31103);
} else {
if((state_val_31116 === (5))){
var inst_31109 = cljs.core.async.close_BANG_.call(null,out);
var state_31115__$1 = state_31115;
var statearr_31122_31137 = state_31115__$1;
(statearr_31122_31137[(2)] = inst_31109);

(statearr_31122_31137[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31116 === (6))){
var inst_31111 = (state_31115[(2)]);
var state_31115__$1 = state_31115;
var statearr_31123_31138 = state_31115__$1;
(statearr_31123_31138[(2)] = inst_31111);

(statearr_31123_31138[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31116 === (7))){
var inst_31099 = (state_31115[(11)]);
var inst_31105 = (state_31115[(2)]);
var inst_31106 = cljs.core.async.put_BANG_.call(null,out,inst_31105);
var inst_31092 = inst_31099;
var state_31115__$1 = (function (){var statearr_31124 = state_31115;
(statearr_31124[(8)] = inst_31092);

(statearr_31124[(12)] = inst_31106);

return statearr_31124;
})();
var statearr_31125_31139 = state_31115__$1;
(statearr_31125_31139[(2)] = null);

(statearr_31125_31139[(1)] = (2));


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
});})(c__27882__auto___31133,out))
;
return ((function (switch__27770__auto__,c__27882__auto___31133,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__27771__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__27771__auto____0 = (function (){
var statearr_31129 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31129[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__27771__auto__);

(statearr_31129[(1)] = (1));

return statearr_31129;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__27771__auto____1 = (function (state_31115){
while(true){
var ret_value__27772__auto__ = (function (){try{while(true){
var result__27773__auto__ = switch__27770__auto__.call(null,state_31115);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27773__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27773__auto__;
}
break;
}
}catch (e31130){if((e31130 instanceof Object)){
var ex__27774__auto__ = e31130;
var statearr_31131_31140 = state_31115;
(statearr_31131_31140[(5)] = ex__27774__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31115);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31130;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27772__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31141 = state_31115;
state_31115 = G__31141;
continue;
} else {
return ret_value__27772__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__27771__auto__ = function(state_31115){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__27771__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__27771__auto____1.call(this,state_31115);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__27771__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__27771__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__27771__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__27771__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__27771__auto__;
})()
;})(switch__27770__auto__,c__27882__auto___31133,out))
})();
var state__27884__auto__ = (function (){var statearr_31132 = f__27883__auto__.call(null);
(statearr_31132[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27882__auto___31133);

return statearr_31132;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27884__auto__);
});})(c__27882__auto___31133,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__31142,opts){
var map__31146 = p__31142;
var map__31146__$1 = ((((!((map__31146 == null)))?((((map__31146.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31146.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31146):map__31146);
var eval_body__$1 = cljs.core.get.call(null,map__31146__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__31146__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
}catch (e31148){var e = e31148;
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
return (function (p1__31149_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__31149_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__31158){
var vec__31159 = p__31158;
var k = cljs.core.nth.call(null,vec__31159,(0),null);
var v = cljs.core.nth.call(null,vec__31159,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__31162){
var vec__31163 = p__31162;
var k = cljs.core.nth.call(null,vec__31163,(0),null);
var v = cljs.core.nth.call(null,vec__31163,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__31169,p__31170){
var map__31417 = p__31169;
var map__31417__$1 = ((((!((map__31417 == null)))?((((map__31417.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31417.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31417):map__31417);
var opts = map__31417__$1;
var before_jsload = cljs.core.get.call(null,map__31417__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__31417__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__31417__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__31418 = p__31170;
var map__31418__$1 = ((((!((map__31418 == null)))?((((map__31418.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31418.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31418):map__31418);
var msg = map__31418__$1;
var files = cljs.core.get.call(null,map__31418__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__31418__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__31418__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__27882__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27882__auto__,map__31417,map__31417__$1,opts,before_jsload,on_jsload,reload_dependents,map__31418,map__31418__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__27883__auto__ = (function (){var switch__27770__auto__ = ((function (c__27882__auto__,map__31417,map__31417__$1,opts,before_jsload,on_jsload,reload_dependents,map__31418,map__31418__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_31571){
var state_val_31572 = (state_31571[(1)]);
if((state_val_31572 === (7))){
var inst_31435 = (state_31571[(7)]);
var inst_31434 = (state_31571[(8)]);
var inst_31433 = (state_31571[(9)]);
var inst_31432 = (state_31571[(10)]);
var inst_31440 = cljs.core._nth.call(null,inst_31433,inst_31435);
var inst_31441 = figwheel.client.file_reloading.eval_body.call(null,inst_31440,opts);
var inst_31442 = (inst_31435 + (1));
var tmp31573 = inst_31434;
var tmp31574 = inst_31433;
var tmp31575 = inst_31432;
var inst_31432__$1 = tmp31575;
var inst_31433__$1 = tmp31574;
var inst_31434__$1 = tmp31573;
var inst_31435__$1 = inst_31442;
var state_31571__$1 = (function (){var statearr_31576 = state_31571;
(statearr_31576[(7)] = inst_31435__$1);

(statearr_31576[(8)] = inst_31434__$1);

(statearr_31576[(9)] = inst_31433__$1);

(statearr_31576[(10)] = inst_31432__$1);

(statearr_31576[(11)] = inst_31441);

return statearr_31576;
})();
var statearr_31577_31663 = state_31571__$1;
(statearr_31577_31663[(2)] = null);

(statearr_31577_31663[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31572 === (20))){
var inst_31475 = (state_31571[(12)]);
var inst_31483 = figwheel.client.file_reloading.sort_files.call(null,inst_31475);
var state_31571__$1 = state_31571;
var statearr_31578_31664 = state_31571__$1;
(statearr_31578_31664[(2)] = inst_31483);

(statearr_31578_31664[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31572 === (27))){
var state_31571__$1 = state_31571;
var statearr_31579_31665 = state_31571__$1;
(statearr_31579_31665[(2)] = null);

(statearr_31579_31665[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31572 === (1))){
var inst_31424 = (state_31571[(13)]);
var inst_31421 = before_jsload.call(null,files);
var inst_31422 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_31423 = (function (){return ((function (inst_31424,inst_31421,inst_31422,state_val_31572,c__27882__auto__,map__31417,map__31417__$1,opts,before_jsload,on_jsload,reload_dependents,map__31418,map__31418__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__31166_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__31166_SHARP_);
});
;})(inst_31424,inst_31421,inst_31422,state_val_31572,c__27882__auto__,map__31417,map__31417__$1,opts,before_jsload,on_jsload,reload_dependents,map__31418,map__31418__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_31424__$1 = cljs.core.filter.call(null,inst_31423,files);
var inst_31425 = cljs.core.not_empty.call(null,inst_31424__$1);
var state_31571__$1 = (function (){var statearr_31580 = state_31571;
(statearr_31580[(13)] = inst_31424__$1);

(statearr_31580[(14)] = inst_31422);

(statearr_31580[(15)] = inst_31421);

return statearr_31580;
})();
if(cljs.core.truth_(inst_31425)){
var statearr_31581_31666 = state_31571__$1;
(statearr_31581_31666[(1)] = (2));

} else {
var statearr_31582_31667 = state_31571__$1;
(statearr_31582_31667[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31572 === (24))){
var state_31571__$1 = state_31571;
var statearr_31583_31668 = state_31571__$1;
(statearr_31583_31668[(2)] = null);

(statearr_31583_31668[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31572 === (39))){
var inst_31525 = (state_31571[(16)]);
var state_31571__$1 = state_31571;
var statearr_31584_31669 = state_31571__$1;
(statearr_31584_31669[(2)] = inst_31525);

(statearr_31584_31669[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31572 === (46))){
var inst_31566 = (state_31571[(2)]);
var state_31571__$1 = state_31571;
var statearr_31585_31670 = state_31571__$1;
(statearr_31585_31670[(2)] = inst_31566);

(statearr_31585_31670[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31572 === (4))){
var inst_31469 = (state_31571[(2)]);
var inst_31470 = cljs.core.List.EMPTY;
var inst_31471 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_31470);
var inst_31472 = (function (){return ((function (inst_31469,inst_31470,inst_31471,state_val_31572,c__27882__auto__,map__31417,map__31417__$1,opts,before_jsload,on_jsload,reload_dependents,map__31418,map__31418__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__31167_SHARP_){
var and__24749__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__31167_SHARP_);
if(cljs.core.truth_(and__24749__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__31167_SHARP_));
} else {
return and__24749__auto__;
}
});
;})(inst_31469,inst_31470,inst_31471,state_val_31572,c__27882__auto__,map__31417,map__31417__$1,opts,before_jsload,on_jsload,reload_dependents,map__31418,map__31418__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_31473 = cljs.core.filter.call(null,inst_31472,files);
var inst_31474 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_31475 = cljs.core.concat.call(null,inst_31473,inst_31474);
var state_31571__$1 = (function (){var statearr_31586 = state_31571;
(statearr_31586[(17)] = inst_31469);

(statearr_31586[(12)] = inst_31475);

(statearr_31586[(18)] = inst_31471);

return statearr_31586;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_31587_31671 = state_31571__$1;
(statearr_31587_31671[(1)] = (16));

} else {
var statearr_31588_31672 = state_31571__$1;
(statearr_31588_31672[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31572 === (15))){
var inst_31459 = (state_31571[(2)]);
var state_31571__$1 = state_31571;
var statearr_31589_31673 = state_31571__$1;
(statearr_31589_31673[(2)] = inst_31459);

(statearr_31589_31673[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31572 === (21))){
var inst_31485 = (state_31571[(19)]);
var inst_31485__$1 = (state_31571[(2)]);
var inst_31486 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_31485__$1);
var state_31571__$1 = (function (){var statearr_31590 = state_31571;
(statearr_31590[(19)] = inst_31485__$1);

return statearr_31590;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31571__$1,(22),inst_31486);
} else {
if((state_val_31572 === (31))){
var inst_31569 = (state_31571[(2)]);
var state_31571__$1 = state_31571;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31571__$1,inst_31569);
} else {
if((state_val_31572 === (32))){
var inst_31525 = (state_31571[(16)]);
var inst_31530 = inst_31525.cljs$lang$protocol_mask$partition0$;
var inst_31531 = (inst_31530 & (64));
var inst_31532 = inst_31525.cljs$core$ISeq$;
var inst_31533 = (inst_31531) || (inst_31532);
var state_31571__$1 = state_31571;
if(cljs.core.truth_(inst_31533)){
var statearr_31591_31674 = state_31571__$1;
(statearr_31591_31674[(1)] = (35));

} else {
var statearr_31592_31675 = state_31571__$1;
(statearr_31592_31675[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31572 === (40))){
var inst_31546 = (state_31571[(20)]);
var inst_31545 = (state_31571[(2)]);
var inst_31546__$1 = cljs.core.get.call(null,inst_31545,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_31547 = cljs.core.get.call(null,inst_31545,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_31548 = cljs.core.not_empty.call(null,inst_31546__$1);
var state_31571__$1 = (function (){var statearr_31593 = state_31571;
(statearr_31593[(20)] = inst_31546__$1);

(statearr_31593[(21)] = inst_31547);

return statearr_31593;
})();
if(cljs.core.truth_(inst_31548)){
var statearr_31594_31676 = state_31571__$1;
(statearr_31594_31676[(1)] = (41));

} else {
var statearr_31595_31677 = state_31571__$1;
(statearr_31595_31677[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31572 === (33))){
var state_31571__$1 = state_31571;
var statearr_31596_31678 = state_31571__$1;
(statearr_31596_31678[(2)] = false);

(statearr_31596_31678[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31572 === (13))){
var inst_31445 = (state_31571[(22)]);
var inst_31449 = cljs.core.chunk_first.call(null,inst_31445);
var inst_31450 = cljs.core.chunk_rest.call(null,inst_31445);
var inst_31451 = cljs.core.count.call(null,inst_31449);
var inst_31432 = inst_31450;
var inst_31433 = inst_31449;
var inst_31434 = inst_31451;
var inst_31435 = (0);
var state_31571__$1 = (function (){var statearr_31597 = state_31571;
(statearr_31597[(7)] = inst_31435);

(statearr_31597[(8)] = inst_31434);

(statearr_31597[(9)] = inst_31433);

(statearr_31597[(10)] = inst_31432);

return statearr_31597;
})();
var statearr_31598_31679 = state_31571__$1;
(statearr_31598_31679[(2)] = null);

(statearr_31598_31679[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31572 === (22))){
var inst_31485 = (state_31571[(19)]);
var inst_31489 = (state_31571[(23)]);
var inst_31488 = (state_31571[(24)]);
var inst_31493 = (state_31571[(25)]);
var inst_31488__$1 = (state_31571[(2)]);
var inst_31489__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_31488__$1);
var inst_31490 = (function (){var all_files = inst_31485;
var res_SINGLEQUOTE_ = inst_31488__$1;
var res = inst_31489__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_31485,inst_31489,inst_31488,inst_31493,inst_31488__$1,inst_31489__$1,state_val_31572,c__27882__auto__,map__31417,map__31417__$1,opts,before_jsload,on_jsload,reload_dependents,map__31418,map__31418__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__31168_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__31168_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_31485,inst_31489,inst_31488,inst_31493,inst_31488__$1,inst_31489__$1,state_val_31572,c__27882__auto__,map__31417,map__31417__$1,opts,before_jsload,on_jsload,reload_dependents,map__31418,map__31418__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_31491 = cljs.core.filter.call(null,inst_31490,inst_31488__$1);
var inst_31492 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_31493__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_31492);
var inst_31494 = cljs.core.not_empty.call(null,inst_31493__$1);
var state_31571__$1 = (function (){var statearr_31599 = state_31571;
(statearr_31599[(26)] = inst_31491);

(statearr_31599[(23)] = inst_31489__$1);

(statearr_31599[(24)] = inst_31488__$1);

(statearr_31599[(25)] = inst_31493__$1);

return statearr_31599;
})();
if(cljs.core.truth_(inst_31494)){
var statearr_31600_31680 = state_31571__$1;
(statearr_31600_31680[(1)] = (23));

} else {
var statearr_31601_31681 = state_31571__$1;
(statearr_31601_31681[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31572 === (36))){
var state_31571__$1 = state_31571;
var statearr_31602_31682 = state_31571__$1;
(statearr_31602_31682[(2)] = false);

(statearr_31602_31682[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31572 === (41))){
var inst_31546 = (state_31571[(20)]);
var inst_31550 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_31551 = cljs.core.map.call(null,inst_31550,inst_31546);
var inst_31552 = cljs.core.pr_str.call(null,inst_31551);
var inst_31553 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_31552)].join('');
var inst_31554 = figwheel.client.utils.log.call(null,inst_31553);
var state_31571__$1 = state_31571;
var statearr_31603_31683 = state_31571__$1;
(statearr_31603_31683[(2)] = inst_31554);

(statearr_31603_31683[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31572 === (43))){
var inst_31547 = (state_31571[(21)]);
var inst_31557 = (state_31571[(2)]);
var inst_31558 = cljs.core.not_empty.call(null,inst_31547);
var state_31571__$1 = (function (){var statearr_31604 = state_31571;
(statearr_31604[(27)] = inst_31557);

return statearr_31604;
})();
if(cljs.core.truth_(inst_31558)){
var statearr_31605_31684 = state_31571__$1;
(statearr_31605_31684[(1)] = (44));

} else {
var statearr_31606_31685 = state_31571__$1;
(statearr_31606_31685[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31572 === (29))){
var inst_31525 = (state_31571[(16)]);
var inst_31485 = (state_31571[(19)]);
var inst_31491 = (state_31571[(26)]);
var inst_31489 = (state_31571[(23)]);
var inst_31488 = (state_31571[(24)]);
var inst_31493 = (state_31571[(25)]);
var inst_31521 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_31524 = (function (){var all_files = inst_31485;
var res_SINGLEQUOTE_ = inst_31488;
var res = inst_31489;
var files_not_loaded = inst_31491;
var dependencies_that_loaded = inst_31493;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_31525,inst_31485,inst_31491,inst_31489,inst_31488,inst_31493,inst_31521,state_val_31572,c__27882__auto__,map__31417,map__31417__$1,opts,before_jsload,on_jsload,reload_dependents,map__31418,map__31418__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__31523){
var map__31607 = p__31523;
var map__31607__$1 = ((((!((map__31607 == null)))?((((map__31607.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31607.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31607):map__31607);
var namespace = cljs.core.get.call(null,map__31607__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_31525,inst_31485,inst_31491,inst_31489,inst_31488,inst_31493,inst_31521,state_val_31572,c__27882__auto__,map__31417,map__31417__$1,opts,before_jsload,on_jsload,reload_dependents,map__31418,map__31418__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_31525__$1 = cljs.core.group_by.call(null,inst_31524,inst_31491);
var inst_31527 = (inst_31525__$1 == null);
var inst_31528 = cljs.core.not.call(null,inst_31527);
var state_31571__$1 = (function (){var statearr_31609 = state_31571;
(statearr_31609[(16)] = inst_31525__$1);

(statearr_31609[(28)] = inst_31521);

return statearr_31609;
})();
if(inst_31528){
var statearr_31610_31686 = state_31571__$1;
(statearr_31610_31686[(1)] = (32));

} else {
var statearr_31611_31687 = state_31571__$1;
(statearr_31611_31687[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31572 === (44))){
var inst_31547 = (state_31571[(21)]);
var inst_31560 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_31547);
var inst_31561 = cljs.core.pr_str.call(null,inst_31560);
var inst_31562 = [cljs.core.str("not required: "),cljs.core.str(inst_31561)].join('');
var inst_31563 = figwheel.client.utils.log.call(null,inst_31562);
var state_31571__$1 = state_31571;
var statearr_31612_31688 = state_31571__$1;
(statearr_31612_31688[(2)] = inst_31563);

(statearr_31612_31688[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31572 === (6))){
var inst_31466 = (state_31571[(2)]);
var state_31571__$1 = state_31571;
var statearr_31613_31689 = state_31571__$1;
(statearr_31613_31689[(2)] = inst_31466);

(statearr_31613_31689[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31572 === (28))){
var inst_31491 = (state_31571[(26)]);
var inst_31518 = (state_31571[(2)]);
var inst_31519 = cljs.core.not_empty.call(null,inst_31491);
var state_31571__$1 = (function (){var statearr_31614 = state_31571;
(statearr_31614[(29)] = inst_31518);

return statearr_31614;
})();
if(cljs.core.truth_(inst_31519)){
var statearr_31615_31690 = state_31571__$1;
(statearr_31615_31690[(1)] = (29));

} else {
var statearr_31616_31691 = state_31571__$1;
(statearr_31616_31691[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31572 === (25))){
var inst_31489 = (state_31571[(23)]);
var inst_31505 = (state_31571[(2)]);
var inst_31506 = cljs.core.not_empty.call(null,inst_31489);
var state_31571__$1 = (function (){var statearr_31617 = state_31571;
(statearr_31617[(30)] = inst_31505);

return statearr_31617;
})();
if(cljs.core.truth_(inst_31506)){
var statearr_31618_31692 = state_31571__$1;
(statearr_31618_31692[(1)] = (26));

} else {
var statearr_31619_31693 = state_31571__$1;
(statearr_31619_31693[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31572 === (34))){
var inst_31540 = (state_31571[(2)]);
var state_31571__$1 = state_31571;
if(cljs.core.truth_(inst_31540)){
var statearr_31620_31694 = state_31571__$1;
(statearr_31620_31694[(1)] = (38));

} else {
var statearr_31621_31695 = state_31571__$1;
(statearr_31621_31695[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31572 === (17))){
var state_31571__$1 = state_31571;
var statearr_31622_31696 = state_31571__$1;
(statearr_31622_31696[(2)] = recompile_dependents);

(statearr_31622_31696[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31572 === (3))){
var state_31571__$1 = state_31571;
var statearr_31623_31697 = state_31571__$1;
(statearr_31623_31697[(2)] = null);

(statearr_31623_31697[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31572 === (12))){
var inst_31462 = (state_31571[(2)]);
var state_31571__$1 = state_31571;
var statearr_31624_31698 = state_31571__$1;
(statearr_31624_31698[(2)] = inst_31462);

(statearr_31624_31698[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31572 === (2))){
var inst_31424 = (state_31571[(13)]);
var inst_31431 = cljs.core.seq.call(null,inst_31424);
var inst_31432 = inst_31431;
var inst_31433 = null;
var inst_31434 = (0);
var inst_31435 = (0);
var state_31571__$1 = (function (){var statearr_31625 = state_31571;
(statearr_31625[(7)] = inst_31435);

(statearr_31625[(8)] = inst_31434);

(statearr_31625[(9)] = inst_31433);

(statearr_31625[(10)] = inst_31432);

return statearr_31625;
})();
var statearr_31626_31699 = state_31571__$1;
(statearr_31626_31699[(2)] = null);

(statearr_31626_31699[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31572 === (23))){
var inst_31485 = (state_31571[(19)]);
var inst_31491 = (state_31571[(26)]);
var inst_31489 = (state_31571[(23)]);
var inst_31488 = (state_31571[(24)]);
var inst_31493 = (state_31571[(25)]);
var inst_31496 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_31498 = (function (){var all_files = inst_31485;
var res_SINGLEQUOTE_ = inst_31488;
var res = inst_31489;
var files_not_loaded = inst_31491;
var dependencies_that_loaded = inst_31493;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_31485,inst_31491,inst_31489,inst_31488,inst_31493,inst_31496,state_val_31572,c__27882__auto__,map__31417,map__31417__$1,opts,before_jsload,on_jsload,reload_dependents,map__31418,map__31418__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__31497){
var map__31627 = p__31497;
var map__31627__$1 = ((((!((map__31627 == null)))?((((map__31627.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31627.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31627):map__31627);
var request_url = cljs.core.get.call(null,map__31627__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_31485,inst_31491,inst_31489,inst_31488,inst_31493,inst_31496,state_val_31572,c__27882__auto__,map__31417,map__31417__$1,opts,before_jsload,on_jsload,reload_dependents,map__31418,map__31418__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_31499 = cljs.core.reverse.call(null,inst_31493);
var inst_31500 = cljs.core.map.call(null,inst_31498,inst_31499);
var inst_31501 = cljs.core.pr_str.call(null,inst_31500);
var inst_31502 = figwheel.client.utils.log.call(null,inst_31501);
var state_31571__$1 = (function (){var statearr_31629 = state_31571;
(statearr_31629[(31)] = inst_31496);

return statearr_31629;
})();
var statearr_31630_31700 = state_31571__$1;
(statearr_31630_31700[(2)] = inst_31502);

(statearr_31630_31700[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31572 === (35))){
var state_31571__$1 = state_31571;
var statearr_31631_31701 = state_31571__$1;
(statearr_31631_31701[(2)] = true);

(statearr_31631_31701[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31572 === (19))){
var inst_31475 = (state_31571[(12)]);
var inst_31481 = figwheel.client.file_reloading.expand_files.call(null,inst_31475);
var state_31571__$1 = state_31571;
var statearr_31632_31702 = state_31571__$1;
(statearr_31632_31702[(2)] = inst_31481);

(statearr_31632_31702[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31572 === (11))){
var state_31571__$1 = state_31571;
var statearr_31633_31703 = state_31571__$1;
(statearr_31633_31703[(2)] = null);

(statearr_31633_31703[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31572 === (9))){
var inst_31464 = (state_31571[(2)]);
var state_31571__$1 = state_31571;
var statearr_31634_31704 = state_31571__$1;
(statearr_31634_31704[(2)] = inst_31464);

(statearr_31634_31704[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31572 === (5))){
var inst_31435 = (state_31571[(7)]);
var inst_31434 = (state_31571[(8)]);
var inst_31437 = (inst_31435 < inst_31434);
var inst_31438 = inst_31437;
var state_31571__$1 = state_31571;
if(cljs.core.truth_(inst_31438)){
var statearr_31635_31705 = state_31571__$1;
(statearr_31635_31705[(1)] = (7));

} else {
var statearr_31636_31706 = state_31571__$1;
(statearr_31636_31706[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31572 === (14))){
var inst_31445 = (state_31571[(22)]);
var inst_31454 = cljs.core.first.call(null,inst_31445);
var inst_31455 = figwheel.client.file_reloading.eval_body.call(null,inst_31454,opts);
var inst_31456 = cljs.core.next.call(null,inst_31445);
var inst_31432 = inst_31456;
var inst_31433 = null;
var inst_31434 = (0);
var inst_31435 = (0);
var state_31571__$1 = (function (){var statearr_31637 = state_31571;
(statearr_31637[(7)] = inst_31435);

(statearr_31637[(8)] = inst_31434);

(statearr_31637[(9)] = inst_31433);

(statearr_31637[(10)] = inst_31432);

(statearr_31637[(32)] = inst_31455);

return statearr_31637;
})();
var statearr_31638_31707 = state_31571__$1;
(statearr_31638_31707[(2)] = null);

(statearr_31638_31707[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31572 === (45))){
var state_31571__$1 = state_31571;
var statearr_31639_31708 = state_31571__$1;
(statearr_31639_31708[(2)] = null);

(statearr_31639_31708[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31572 === (26))){
var inst_31485 = (state_31571[(19)]);
var inst_31491 = (state_31571[(26)]);
var inst_31489 = (state_31571[(23)]);
var inst_31488 = (state_31571[(24)]);
var inst_31493 = (state_31571[(25)]);
var inst_31508 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_31510 = (function (){var all_files = inst_31485;
var res_SINGLEQUOTE_ = inst_31488;
var res = inst_31489;
var files_not_loaded = inst_31491;
var dependencies_that_loaded = inst_31493;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_31485,inst_31491,inst_31489,inst_31488,inst_31493,inst_31508,state_val_31572,c__27882__auto__,map__31417,map__31417__$1,opts,before_jsload,on_jsload,reload_dependents,map__31418,map__31418__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__31509){
var map__31640 = p__31509;
var map__31640__$1 = ((((!((map__31640 == null)))?((((map__31640.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31640.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31640):map__31640);
var namespace = cljs.core.get.call(null,map__31640__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__31640__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_31485,inst_31491,inst_31489,inst_31488,inst_31493,inst_31508,state_val_31572,c__27882__auto__,map__31417,map__31417__$1,opts,before_jsload,on_jsload,reload_dependents,map__31418,map__31418__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_31511 = cljs.core.map.call(null,inst_31510,inst_31489);
var inst_31512 = cljs.core.pr_str.call(null,inst_31511);
var inst_31513 = figwheel.client.utils.log.call(null,inst_31512);
var inst_31514 = (function (){var all_files = inst_31485;
var res_SINGLEQUOTE_ = inst_31488;
var res = inst_31489;
var files_not_loaded = inst_31491;
var dependencies_that_loaded = inst_31493;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_31485,inst_31491,inst_31489,inst_31488,inst_31493,inst_31508,inst_31510,inst_31511,inst_31512,inst_31513,state_val_31572,c__27882__auto__,map__31417,map__31417__$1,opts,before_jsload,on_jsload,reload_dependents,map__31418,map__31418__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_31485,inst_31491,inst_31489,inst_31488,inst_31493,inst_31508,inst_31510,inst_31511,inst_31512,inst_31513,state_val_31572,c__27882__auto__,map__31417,map__31417__$1,opts,before_jsload,on_jsload,reload_dependents,map__31418,map__31418__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_31515 = setTimeout(inst_31514,(10));
var state_31571__$1 = (function (){var statearr_31642 = state_31571;
(statearr_31642[(33)] = inst_31508);

(statearr_31642[(34)] = inst_31513);

return statearr_31642;
})();
var statearr_31643_31709 = state_31571__$1;
(statearr_31643_31709[(2)] = inst_31515);

(statearr_31643_31709[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31572 === (16))){
var state_31571__$1 = state_31571;
var statearr_31644_31710 = state_31571__$1;
(statearr_31644_31710[(2)] = reload_dependents);

(statearr_31644_31710[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31572 === (38))){
var inst_31525 = (state_31571[(16)]);
var inst_31542 = cljs.core.apply.call(null,cljs.core.hash_map,inst_31525);
var state_31571__$1 = state_31571;
var statearr_31645_31711 = state_31571__$1;
(statearr_31645_31711[(2)] = inst_31542);

(statearr_31645_31711[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31572 === (30))){
var state_31571__$1 = state_31571;
var statearr_31646_31712 = state_31571__$1;
(statearr_31646_31712[(2)] = null);

(statearr_31646_31712[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31572 === (10))){
var inst_31445 = (state_31571[(22)]);
var inst_31447 = cljs.core.chunked_seq_QMARK_.call(null,inst_31445);
var state_31571__$1 = state_31571;
if(inst_31447){
var statearr_31647_31713 = state_31571__$1;
(statearr_31647_31713[(1)] = (13));

} else {
var statearr_31648_31714 = state_31571__$1;
(statearr_31648_31714[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31572 === (18))){
var inst_31479 = (state_31571[(2)]);
var state_31571__$1 = state_31571;
if(cljs.core.truth_(inst_31479)){
var statearr_31649_31715 = state_31571__$1;
(statearr_31649_31715[(1)] = (19));

} else {
var statearr_31650_31716 = state_31571__$1;
(statearr_31650_31716[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31572 === (42))){
var state_31571__$1 = state_31571;
var statearr_31651_31717 = state_31571__$1;
(statearr_31651_31717[(2)] = null);

(statearr_31651_31717[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31572 === (37))){
var inst_31537 = (state_31571[(2)]);
var state_31571__$1 = state_31571;
var statearr_31652_31718 = state_31571__$1;
(statearr_31652_31718[(2)] = inst_31537);

(statearr_31652_31718[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31572 === (8))){
var inst_31432 = (state_31571[(10)]);
var inst_31445 = (state_31571[(22)]);
var inst_31445__$1 = cljs.core.seq.call(null,inst_31432);
var state_31571__$1 = (function (){var statearr_31653 = state_31571;
(statearr_31653[(22)] = inst_31445__$1);

return statearr_31653;
})();
if(inst_31445__$1){
var statearr_31654_31719 = state_31571__$1;
(statearr_31654_31719[(1)] = (10));

} else {
var statearr_31655_31720 = state_31571__$1;
(statearr_31655_31720[(1)] = (11));

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
});})(c__27882__auto__,map__31417,map__31417__$1,opts,before_jsload,on_jsload,reload_dependents,map__31418,map__31418__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__27770__auto__,c__27882__auto__,map__31417,map__31417__$1,opts,before_jsload,on_jsload,reload_dependents,map__31418,map__31418__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__27771__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__27771__auto____0 = (function (){
var statearr_31659 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31659[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__27771__auto__);

(statearr_31659[(1)] = (1));

return statearr_31659;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__27771__auto____1 = (function (state_31571){
while(true){
var ret_value__27772__auto__ = (function (){try{while(true){
var result__27773__auto__ = switch__27770__auto__.call(null,state_31571);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27773__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27773__auto__;
}
break;
}
}catch (e31660){if((e31660 instanceof Object)){
var ex__27774__auto__ = e31660;
var statearr_31661_31721 = state_31571;
(statearr_31661_31721[(5)] = ex__27774__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31571);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31660;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27772__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31722 = state_31571;
state_31571 = G__31722;
continue;
} else {
return ret_value__27772__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__27771__auto__ = function(state_31571){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__27771__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__27771__auto____1.call(this,state_31571);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__27771__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__27771__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__27771__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__27771__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__27771__auto__;
})()
;})(switch__27770__auto__,c__27882__auto__,map__31417,map__31417__$1,opts,before_jsload,on_jsload,reload_dependents,map__31418,map__31418__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__27884__auto__ = (function (){var statearr_31662 = f__27883__auto__.call(null);
(statearr_31662[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27882__auto__);

return statearr_31662;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27884__auto__);
});})(c__27882__auto__,map__31417,map__31417__$1,opts,before_jsload,on_jsload,reload_dependents,map__31418,map__31418__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__27882__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__31725,link){
var map__31728 = p__31725;
var map__31728__$1 = ((((!((map__31728 == null)))?((((map__31728.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31728.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31728):map__31728);
var file = cljs.core.get.call(null,map__31728__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__31728,map__31728__$1,file){
return (function (p1__31723_SHARP_,p2__31724_SHARP_){
if(cljs.core._EQ_.call(null,p1__31723_SHARP_,p2__31724_SHARP_)){
return p1__31723_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__31728,map__31728__$1,file))
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
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__31734){
var map__31735 = p__31734;
var map__31735__$1 = ((((!((map__31735 == null)))?((((map__31735.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31735.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31735):map__31735);
var match_length = cljs.core.get.call(null,map__31735__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__31735__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__31730_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__31730_SHARP_);
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
var args31737 = [];
var len__25836__auto___31740 = arguments.length;
var i__25837__auto___31741 = (0);
while(true){
if((i__25837__auto___31741 < len__25836__auto___31740)){
args31737.push((arguments[i__25837__auto___31741]));

var G__31742 = (i__25837__auto___31741 + (1));
i__25837__auto___31741 = G__31742;
continue;
} else {
}
break;
}

var G__31739 = args31737.length;
switch (G__31739) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31737.length)].join('')));

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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__31744_SHARP_,p2__31745_SHARP_){
return cljs.core.assoc.call(null,p1__31744_SHARP_,cljs.core.get.call(null,p2__31745_SHARP_,key),p2__31745_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__31746){
var map__31749 = p__31746;
var map__31749__$1 = ((((!((map__31749 == null)))?((((map__31749.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31749.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31749):map__31749);
var f_data = map__31749__$1;
var file = cljs.core.get.call(null,map__31749__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4657__auto__)){
var link = temp__4657__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__31751,p__31752){
var map__31761 = p__31751;
var map__31761__$1 = ((((!((map__31761 == null)))?((((map__31761.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31761.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31761):map__31761);
var opts = map__31761__$1;
var on_cssload = cljs.core.get.call(null,map__31761__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__31762 = p__31752;
var map__31762__$1 = ((((!((map__31762 == null)))?((((map__31762.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31762.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31762):map__31762);
var files_msg = map__31762__$1;
var files = cljs.core.get.call(null,map__31762__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__31765_31769 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
var chunk__31766_31770 = null;
var count__31767_31771 = (0);
var i__31768_31772 = (0);
while(true){
if((i__31768_31772 < count__31767_31771)){
var f_31773 = cljs.core._nth.call(null,chunk__31766_31770,i__31768_31772);
figwheel.client.file_reloading.reload_css_file.call(null,f_31773);

var G__31774 = seq__31765_31769;
var G__31775 = chunk__31766_31770;
var G__31776 = count__31767_31771;
var G__31777 = (i__31768_31772 + (1));
seq__31765_31769 = G__31774;
chunk__31766_31770 = G__31775;
count__31767_31771 = G__31776;
i__31768_31772 = G__31777;
continue;
} else {
var temp__4657__auto___31778 = cljs.core.seq.call(null,seq__31765_31769);
if(temp__4657__auto___31778){
var seq__31765_31779__$1 = temp__4657__auto___31778;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31765_31779__$1)){
var c__25572__auto___31780 = cljs.core.chunk_first.call(null,seq__31765_31779__$1);
var G__31781 = cljs.core.chunk_rest.call(null,seq__31765_31779__$1);
var G__31782 = c__25572__auto___31780;
var G__31783 = cljs.core.count.call(null,c__25572__auto___31780);
var G__31784 = (0);
seq__31765_31769 = G__31781;
chunk__31766_31770 = G__31782;
count__31767_31771 = G__31783;
i__31768_31772 = G__31784;
continue;
} else {
var f_31785 = cljs.core.first.call(null,seq__31765_31779__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_31785);

var G__31786 = cljs.core.next.call(null,seq__31765_31779__$1);
var G__31787 = null;
var G__31788 = (0);
var G__31789 = (0);
seq__31765_31769 = G__31786;
chunk__31766_31770 = G__31787;
count__31767_31771 = G__31788;
i__31768_31772 = G__31789;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__31761,map__31761__$1,opts,on_cssload,map__31762,map__31762__$1,files_msg,files){
return (function (){
figwheel.client.file_reloading.on_cssload_custom_event.call(null,files);

return on_cssload.call(null,files);
});})(map__31761,map__31761__$1,opts,on_cssload,map__31762,map__31762__$1,files_msg,files))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1519826344574