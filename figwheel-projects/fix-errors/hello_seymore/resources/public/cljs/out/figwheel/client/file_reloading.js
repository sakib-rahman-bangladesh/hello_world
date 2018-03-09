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
var or__24760__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__24760__auto__){
return or__24760__auto__;
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
var or__24760__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__24760__auto__)){
return or__24760__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__30736_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__30736_SHARP_));
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
var seq__30741 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__30742 = null;
var count__30743 = (0);
var i__30744 = (0);
while(true){
if((i__30744 < count__30743)){
var n = cljs.core._nth.call(null,chunk__30742,i__30744);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__30745 = seq__30741;
var G__30746 = chunk__30742;
var G__30747 = count__30743;
var G__30748 = (i__30744 + (1));
seq__30741 = G__30745;
chunk__30742 = G__30746;
count__30743 = G__30747;
i__30744 = G__30748;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__30741);
if(temp__4657__auto__){
var seq__30741__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30741__$1)){
var c__25571__auto__ = cljs.core.chunk_first.call(null,seq__30741__$1);
var G__30749 = cljs.core.chunk_rest.call(null,seq__30741__$1);
var G__30750 = c__25571__auto__;
var G__30751 = cljs.core.count.call(null,c__25571__auto__);
var G__30752 = (0);
seq__30741 = G__30749;
chunk__30742 = G__30750;
count__30743 = G__30751;
i__30744 = G__30752;
continue;
} else {
var n = cljs.core.first.call(null,seq__30741__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__30753 = cljs.core.next.call(null,seq__30741__$1);
var G__30754 = null;
var G__30755 = (0);
var G__30756 = (0);
seq__30741 = G__30753;
chunk__30742 = G__30754;
count__30743 = G__30755;
i__30744 = G__30756;
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

var seq__30807_30818 = cljs.core.seq.call(null,deps);
var chunk__30808_30819 = null;
var count__30809_30820 = (0);
var i__30810_30821 = (0);
while(true){
if((i__30810_30821 < count__30809_30820)){
var dep_30822 = cljs.core._nth.call(null,chunk__30808_30819,i__30810_30821);
topo_sort_helper_STAR_.call(null,dep_30822,(depth + (1)),state);

var G__30823 = seq__30807_30818;
var G__30824 = chunk__30808_30819;
var G__30825 = count__30809_30820;
var G__30826 = (i__30810_30821 + (1));
seq__30807_30818 = G__30823;
chunk__30808_30819 = G__30824;
count__30809_30820 = G__30825;
i__30810_30821 = G__30826;
continue;
} else {
var temp__4657__auto___30827 = cljs.core.seq.call(null,seq__30807_30818);
if(temp__4657__auto___30827){
var seq__30807_30828__$1 = temp__4657__auto___30827;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30807_30828__$1)){
var c__25571__auto___30829 = cljs.core.chunk_first.call(null,seq__30807_30828__$1);
var G__30830 = cljs.core.chunk_rest.call(null,seq__30807_30828__$1);
var G__30831 = c__25571__auto___30829;
var G__30832 = cljs.core.count.call(null,c__25571__auto___30829);
var G__30833 = (0);
seq__30807_30818 = G__30830;
chunk__30808_30819 = G__30831;
count__30809_30820 = G__30832;
i__30810_30821 = G__30833;
continue;
} else {
var dep_30834 = cljs.core.first.call(null,seq__30807_30828__$1);
topo_sort_helper_STAR_.call(null,dep_30834,(depth + (1)),state);

var G__30835 = cljs.core.next.call(null,seq__30807_30828__$1);
var G__30836 = null;
var G__30837 = (0);
var G__30838 = (0);
seq__30807_30818 = G__30835;
chunk__30808_30819 = G__30836;
count__30809_30820 = G__30837;
i__30810_30821 = G__30838;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__30811){
var vec__30815 = p__30811;
var seq__30816 = cljs.core.seq.call(null,vec__30815);
var first__30817 = cljs.core.first.call(null,seq__30816);
var seq__30816__$1 = cljs.core.next.call(null,seq__30816);
var x = first__30817;
var xs = seq__30816__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__30815,seq__30816,first__30817,seq__30816__$1,x,xs,get_deps__$1){
return (function (p1__30757_SHARP_){
return clojure.set.difference.call(null,p1__30757_SHARP_,x);
});})(vec__30815,seq__30816,first__30817,seq__30816__$1,x,xs,get_deps__$1))
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
var seq__30851 = cljs.core.seq.call(null,provides);
var chunk__30852 = null;
var count__30853 = (0);
var i__30854 = (0);
while(true){
if((i__30854 < count__30853)){
var prov = cljs.core._nth.call(null,chunk__30852,i__30854);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__30855_30863 = cljs.core.seq.call(null,requires);
var chunk__30856_30864 = null;
var count__30857_30865 = (0);
var i__30858_30866 = (0);
while(true){
if((i__30858_30866 < count__30857_30865)){
var req_30867 = cljs.core._nth.call(null,chunk__30856_30864,i__30858_30866);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_30867,prov);

var G__30868 = seq__30855_30863;
var G__30869 = chunk__30856_30864;
var G__30870 = count__30857_30865;
var G__30871 = (i__30858_30866 + (1));
seq__30855_30863 = G__30868;
chunk__30856_30864 = G__30869;
count__30857_30865 = G__30870;
i__30858_30866 = G__30871;
continue;
} else {
var temp__4657__auto___30872 = cljs.core.seq.call(null,seq__30855_30863);
if(temp__4657__auto___30872){
var seq__30855_30873__$1 = temp__4657__auto___30872;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30855_30873__$1)){
var c__25571__auto___30874 = cljs.core.chunk_first.call(null,seq__30855_30873__$1);
var G__30875 = cljs.core.chunk_rest.call(null,seq__30855_30873__$1);
var G__30876 = c__25571__auto___30874;
var G__30877 = cljs.core.count.call(null,c__25571__auto___30874);
var G__30878 = (0);
seq__30855_30863 = G__30875;
chunk__30856_30864 = G__30876;
count__30857_30865 = G__30877;
i__30858_30866 = G__30878;
continue;
} else {
var req_30879 = cljs.core.first.call(null,seq__30855_30873__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_30879,prov);

var G__30880 = cljs.core.next.call(null,seq__30855_30873__$1);
var G__30881 = null;
var G__30882 = (0);
var G__30883 = (0);
seq__30855_30863 = G__30880;
chunk__30856_30864 = G__30881;
count__30857_30865 = G__30882;
i__30858_30866 = G__30883;
continue;
}
} else {
}
}
break;
}

var G__30884 = seq__30851;
var G__30885 = chunk__30852;
var G__30886 = count__30853;
var G__30887 = (i__30854 + (1));
seq__30851 = G__30884;
chunk__30852 = G__30885;
count__30853 = G__30886;
i__30854 = G__30887;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__30851);
if(temp__4657__auto__){
var seq__30851__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30851__$1)){
var c__25571__auto__ = cljs.core.chunk_first.call(null,seq__30851__$1);
var G__30888 = cljs.core.chunk_rest.call(null,seq__30851__$1);
var G__30889 = c__25571__auto__;
var G__30890 = cljs.core.count.call(null,c__25571__auto__);
var G__30891 = (0);
seq__30851 = G__30888;
chunk__30852 = G__30889;
count__30853 = G__30890;
i__30854 = G__30891;
continue;
} else {
var prov = cljs.core.first.call(null,seq__30851__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__30859_30892 = cljs.core.seq.call(null,requires);
var chunk__30860_30893 = null;
var count__30861_30894 = (0);
var i__30862_30895 = (0);
while(true){
if((i__30862_30895 < count__30861_30894)){
var req_30896 = cljs.core._nth.call(null,chunk__30860_30893,i__30862_30895);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_30896,prov);

var G__30897 = seq__30859_30892;
var G__30898 = chunk__30860_30893;
var G__30899 = count__30861_30894;
var G__30900 = (i__30862_30895 + (1));
seq__30859_30892 = G__30897;
chunk__30860_30893 = G__30898;
count__30861_30894 = G__30899;
i__30862_30895 = G__30900;
continue;
} else {
var temp__4657__auto___30901__$1 = cljs.core.seq.call(null,seq__30859_30892);
if(temp__4657__auto___30901__$1){
var seq__30859_30902__$1 = temp__4657__auto___30901__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30859_30902__$1)){
var c__25571__auto___30903 = cljs.core.chunk_first.call(null,seq__30859_30902__$1);
var G__30904 = cljs.core.chunk_rest.call(null,seq__30859_30902__$1);
var G__30905 = c__25571__auto___30903;
var G__30906 = cljs.core.count.call(null,c__25571__auto___30903);
var G__30907 = (0);
seq__30859_30892 = G__30904;
chunk__30860_30893 = G__30905;
count__30861_30894 = G__30906;
i__30862_30895 = G__30907;
continue;
} else {
var req_30908 = cljs.core.first.call(null,seq__30859_30902__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_30908,prov);

var G__30909 = cljs.core.next.call(null,seq__30859_30902__$1);
var G__30910 = null;
var G__30911 = (0);
var G__30912 = (0);
seq__30859_30892 = G__30909;
chunk__30860_30893 = G__30910;
count__30861_30894 = G__30911;
i__30862_30895 = G__30912;
continue;
}
} else {
}
}
break;
}

var G__30913 = cljs.core.next.call(null,seq__30851__$1);
var G__30914 = null;
var G__30915 = (0);
var G__30916 = (0);
seq__30851 = G__30913;
chunk__30852 = G__30914;
count__30853 = G__30915;
i__30854 = G__30916;
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
var seq__30921_30925 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__30922_30926 = null;
var count__30923_30927 = (0);
var i__30924_30928 = (0);
while(true){
if((i__30924_30928 < count__30923_30927)){
var ns_30929 = cljs.core._nth.call(null,chunk__30922_30926,i__30924_30928);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_30929);

var G__30930 = seq__30921_30925;
var G__30931 = chunk__30922_30926;
var G__30932 = count__30923_30927;
var G__30933 = (i__30924_30928 + (1));
seq__30921_30925 = G__30930;
chunk__30922_30926 = G__30931;
count__30923_30927 = G__30932;
i__30924_30928 = G__30933;
continue;
} else {
var temp__4657__auto___30934 = cljs.core.seq.call(null,seq__30921_30925);
if(temp__4657__auto___30934){
var seq__30921_30935__$1 = temp__4657__auto___30934;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30921_30935__$1)){
var c__25571__auto___30936 = cljs.core.chunk_first.call(null,seq__30921_30935__$1);
var G__30937 = cljs.core.chunk_rest.call(null,seq__30921_30935__$1);
var G__30938 = c__25571__auto___30936;
var G__30939 = cljs.core.count.call(null,c__25571__auto___30936);
var G__30940 = (0);
seq__30921_30925 = G__30937;
chunk__30922_30926 = G__30938;
count__30923_30927 = G__30939;
i__30924_30928 = G__30940;
continue;
} else {
var ns_30941 = cljs.core.first.call(null,seq__30921_30935__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_30941);

var G__30942 = cljs.core.next.call(null,seq__30921_30935__$1);
var G__30943 = null;
var G__30944 = (0);
var G__30945 = (0);
seq__30921_30925 = G__30942;
chunk__30922_30926 = G__30943;
count__30923_30927 = G__30944;
i__30924_30928 = G__30945;
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
goog.require_figwheel_backup_ = (function (){var or__24760__auto__ = goog.require__;
if(cljs.core.truth_(or__24760__auto__)){
return or__24760__auto__;
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
var G__30946__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__30946 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__30947__i = 0, G__30947__a = new Array(arguments.length -  0);
while (G__30947__i < G__30947__a.length) {G__30947__a[G__30947__i] = arguments[G__30947__i + 0]; ++G__30947__i;}
  args = new cljs.core.IndexedSeq(G__30947__a,0);
} 
return G__30946__delegate.call(this,args);};
G__30946.cljs$lang$maxFixedArity = 0;
G__30946.cljs$lang$applyTo = (function (arglist__30948){
var args = cljs.core.seq(arglist__30948);
return G__30946__delegate(args);
});
G__30946.cljs$core$IFn$_invoke$arity$variadic = G__30946__delegate;
return G__30946;
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
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__30950 = cljs.core._EQ_;
var expr__30951 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__30950.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__30951))){
var path_parts = ((function (pred__30950,expr__30951){
return (function (p1__30949_SHARP_){
return clojure.string.split.call(null,p1__30949_SHARP_,/[\/\\]/);
});})(pred__30950,expr__30951))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__30950,expr__30951){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e30953){if((e30953 instanceof Error)){
var e = e30953;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e30953;

}
}})());
});
;})(path_parts,sep,root,pred__30950,expr__30951))
} else {
if(cljs.core.truth_(pred__30950.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__30951))){
return ((function (pred__30950,expr__30951){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
deferred.addCallback(((function (deferred,pred__30950,expr__30951){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__30950,expr__30951))
);

return deferred.addErrback(((function (deferred,pred__30950,expr__30951){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__30950,expr__30951))
);
});
;})(pred__30950,expr__30951))
} else {
return ((function (pred__30950,expr__30951){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__30950,expr__30951))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__30954,callback){
var map__30957 = p__30954;
var map__30957__$1 = ((((!((map__30957 == null)))?((((map__30957.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30957.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30957):map__30957);
var file_msg = map__30957__$1;
var request_url = cljs.core.get.call(null,map__30957__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__30957,map__30957__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__30957,map__30957__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__27881__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27881__auto__){
return (function (){
var f__27882__auto__ = (function (){var switch__27769__auto__ = ((function (c__27881__auto__){
return (function (state_30981){
var state_val_30982 = (state_30981[(1)]);
if((state_val_30982 === (7))){
var inst_30977 = (state_30981[(2)]);
var state_30981__$1 = state_30981;
var statearr_30983_31003 = state_30981__$1;
(statearr_30983_31003[(2)] = inst_30977);

(statearr_30983_31003[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30982 === (1))){
var state_30981__$1 = state_30981;
var statearr_30984_31004 = state_30981__$1;
(statearr_30984_31004[(2)] = null);

(statearr_30984_31004[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30982 === (4))){
var inst_30961 = (state_30981[(7)]);
var inst_30961__$1 = (state_30981[(2)]);
var state_30981__$1 = (function (){var statearr_30985 = state_30981;
(statearr_30985[(7)] = inst_30961__$1);

return statearr_30985;
})();
if(cljs.core.truth_(inst_30961__$1)){
var statearr_30986_31005 = state_30981__$1;
(statearr_30986_31005[(1)] = (5));

} else {
var statearr_30987_31006 = state_30981__$1;
(statearr_30987_31006[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30982 === (6))){
var state_30981__$1 = state_30981;
var statearr_30988_31007 = state_30981__$1;
(statearr_30988_31007[(2)] = null);

(statearr_30988_31007[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30982 === (3))){
var inst_30979 = (state_30981[(2)]);
var state_30981__$1 = state_30981;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30981__$1,inst_30979);
} else {
if((state_val_30982 === (2))){
var state_30981__$1 = state_30981;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30981__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_30982 === (11))){
var inst_30973 = (state_30981[(2)]);
var state_30981__$1 = (function (){var statearr_30989 = state_30981;
(statearr_30989[(8)] = inst_30973);

return statearr_30989;
})();
var statearr_30990_31008 = state_30981__$1;
(statearr_30990_31008[(2)] = null);

(statearr_30990_31008[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30982 === (9))){
var inst_30965 = (state_30981[(9)]);
var inst_30967 = (state_30981[(10)]);
var inst_30969 = inst_30967.call(null,inst_30965);
var state_30981__$1 = state_30981;
var statearr_30991_31009 = state_30981__$1;
(statearr_30991_31009[(2)] = inst_30969);

(statearr_30991_31009[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30982 === (5))){
var inst_30961 = (state_30981[(7)]);
var inst_30963 = figwheel.client.file_reloading.blocking_load.call(null,inst_30961);
var state_30981__$1 = state_30981;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30981__$1,(8),inst_30963);
} else {
if((state_val_30982 === (10))){
var inst_30965 = (state_30981[(9)]);
var inst_30971 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_30965);
var state_30981__$1 = state_30981;
var statearr_30992_31010 = state_30981__$1;
(statearr_30992_31010[(2)] = inst_30971);

(statearr_30992_31010[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30982 === (8))){
var inst_30967 = (state_30981[(10)]);
var inst_30961 = (state_30981[(7)]);
var inst_30965 = (state_30981[(2)]);
var inst_30966 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_30967__$1 = cljs.core.get.call(null,inst_30966,inst_30961);
var state_30981__$1 = (function (){var statearr_30993 = state_30981;
(statearr_30993[(9)] = inst_30965);

(statearr_30993[(10)] = inst_30967__$1);

return statearr_30993;
})();
if(cljs.core.truth_(inst_30967__$1)){
var statearr_30994_31011 = state_30981__$1;
(statearr_30994_31011[(1)] = (9));

} else {
var statearr_30995_31012 = state_30981__$1;
(statearr_30995_31012[(1)] = (10));

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
});})(c__27881__auto__))
;
return ((function (switch__27769__auto__,c__27881__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__27770__auto__ = null;
var figwheel$client$file_reloading$state_machine__27770__auto____0 = (function (){
var statearr_30999 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30999[(0)] = figwheel$client$file_reloading$state_machine__27770__auto__);

(statearr_30999[(1)] = (1));

return statearr_30999;
});
var figwheel$client$file_reloading$state_machine__27770__auto____1 = (function (state_30981){
while(true){
var ret_value__27771__auto__ = (function (){try{while(true){
var result__27772__auto__ = switch__27769__auto__.call(null,state_30981);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27772__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27772__auto__;
}
break;
}
}catch (e31000){if((e31000 instanceof Object)){
var ex__27773__auto__ = e31000;
var statearr_31001_31013 = state_30981;
(statearr_31001_31013[(5)] = ex__27773__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30981);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31000;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27771__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31014 = state_30981;
state_30981 = G__31014;
continue;
} else {
return ret_value__27771__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__27770__auto__ = function(state_30981){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__27770__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__27770__auto____1.call(this,state_30981);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__27770__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__27770__auto____0;
figwheel$client$file_reloading$state_machine__27770__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__27770__auto____1;
return figwheel$client$file_reloading$state_machine__27770__auto__;
})()
;})(switch__27769__auto__,c__27881__auto__))
})();
var state__27883__auto__ = (function (){var statearr_31002 = f__27882__auto__.call(null);
(statearr_31002[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27881__auto__);

return statearr_31002;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27883__auto__);
});})(c__27881__auto__))
);

return c__27881__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__31015,callback){
var map__31018 = p__31015;
var map__31018__$1 = ((((!((map__31018 == null)))?((((map__31018.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31018.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31018):map__31018);
var file_msg = map__31018__$1;
var namespace = cljs.core.get.call(null,map__31018__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__31018,map__31018__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__31018,map__31018__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__31020){
var map__31023 = p__31020;
var map__31023__$1 = ((((!((map__31023 == null)))?((((map__31023.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31023.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31023):map__31023);
var file_msg = map__31023__$1;
var namespace = cljs.core.get.call(null,map__31023__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__24748__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__24748__auto__){
var or__24760__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__24760__auto__)){
return or__24760__auto__;
} else {
var or__24760__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__24760__auto____$1)){
return or__24760__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__24748__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__31025,callback){
var map__31028 = p__31025;
var map__31028__$1 = ((((!((map__31028 == null)))?((((map__31028.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31028.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31028):map__31028);
var file_msg = map__31028__$1;
var request_url = cljs.core.get.call(null,map__31028__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__31028__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__27881__auto___31132 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27881__auto___31132,out){
return (function (){
var f__27882__auto__ = (function (){var switch__27769__auto__ = ((function (c__27881__auto___31132,out){
return (function (state_31114){
var state_val_31115 = (state_31114[(1)]);
if((state_val_31115 === (1))){
var inst_31088 = cljs.core.seq.call(null,files);
var inst_31089 = cljs.core.first.call(null,inst_31088);
var inst_31090 = cljs.core.next.call(null,inst_31088);
var inst_31091 = files;
var state_31114__$1 = (function (){var statearr_31116 = state_31114;
(statearr_31116[(7)] = inst_31091);

(statearr_31116[(8)] = inst_31089);

(statearr_31116[(9)] = inst_31090);

return statearr_31116;
})();
var statearr_31117_31133 = state_31114__$1;
(statearr_31117_31133[(2)] = null);

(statearr_31117_31133[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31115 === (2))){
var inst_31091 = (state_31114[(7)]);
var inst_31097 = (state_31114[(10)]);
var inst_31096 = cljs.core.seq.call(null,inst_31091);
var inst_31097__$1 = cljs.core.first.call(null,inst_31096);
var inst_31098 = cljs.core.next.call(null,inst_31096);
var inst_31099 = (inst_31097__$1 == null);
var inst_31100 = cljs.core.not.call(null,inst_31099);
var state_31114__$1 = (function (){var statearr_31118 = state_31114;
(statearr_31118[(10)] = inst_31097__$1);

(statearr_31118[(11)] = inst_31098);

return statearr_31118;
})();
if(inst_31100){
var statearr_31119_31134 = state_31114__$1;
(statearr_31119_31134[(1)] = (4));

} else {
var statearr_31120_31135 = state_31114__$1;
(statearr_31120_31135[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31115 === (3))){
var inst_31112 = (state_31114[(2)]);
var state_31114__$1 = state_31114;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31114__$1,inst_31112);
} else {
if((state_val_31115 === (4))){
var inst_31097 = (state_31114[(10)]);
var inst_31102 = figwheel.client.file_reloading.reload_js_file.call(null,inst_31097);
var state_31114__$1 = state_31114;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31114__$1,(7),inst_31102);
} else {
if((state_val_31115 === (5))){
var inst_31108 = cljs.core.async.close_BANG_.call(null,out);
var state_31114__$1 = state_31114;
var statearr_31121_31136 = state_31114__$1;
(statearr_31121_31136[(2)] = inst_31108);

(statearr_31121_31136[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31115 === (6))){
var inst_31110 = (state_31114[(2)]);
var state_31114__$1 = state_31114;
var statearr_31122_31137 = state_31114__$1;
(statearr_31122_31137[(2)] = inst_31110);

(statearr_31122_31137[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31115 === (7))){
var inst_31098 = (state_31114[(11)]);
var inst_31104 = (state_31114[(2)]);
var inst_31105 = cljs.core.async.put_BANG_.call(null,out,inst_31104);
var inst_31091 = inst_31098;
var state_31114__$1 = (function (){var statearr_31123 = state_31114;
(statearr_31123[(7)] = inst_31091);

(statearr_31123[(12)] = inst_31105);

return statearr_31123;
})();
var statearr_31124_31138 = state_31114__$1;
(statearr_31124_31138[(2)] = null);

(statearr_31124_31138[(1)] = (2));


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
});})(c__27881__auto___31132,out))
;
return ((function (switch__27769__auto__,c__27881__auto___31132,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__27770__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__27770__auto____0 = (function (){
var statearr_31128 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31128[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__27770__auto__);

(statearr_31128[(1)] = (1));

return statearr_31128;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__27770__auto____1 = (function (state_31114){
while(true){
var ret_value__27771__auto__ = (function (){try{while(true){
var result__27772__auto__ = switch__27769__auto__.call(null,state_31114);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27772__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27772__auto__;
}
break;
}
}catch (e31129){if((e31129 instanceof Object)){
var ex__27773__auto__ = e31129;
var statearr_31130_31139 = state_31114;
(statearr_31130_31139[(5)] = ex__27773__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31114);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31129;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27771__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31140 = state_31114;
state_31114 = G__31140;
continue;
} else {
return ret_value__27771__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__27770__auto__ = function(state_31114){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__27770__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__27770__auto____1.call(this,state_31114);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__27770__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__27770__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__27770__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__27770__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__27770__auto__;
})()
;})(switch__27769__auto__,c__27881__auto___31132,out))
})();
var state__27883__auto__ = (function (){var statearr_31131 = f__27882__auto__.call(null);
(statearr_31131[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27881__auto___31132);

return statearr_31131;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27883__auto__);
});})(c__27881__auto___31132,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__31141,opts){
var map__31145 = p__31141;
var map__31145__$1 = ((((!((map__31145 == null)))?((((map__31145.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31145.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31145):map__31145);
var eval_body__$1 = cljs.core.get.call(null,map__31145__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__31145__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__24748__auto__ = eval_body__$1;
if(cljs.core.truth_(and__24748__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__24748__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e31147){var e = e31147;
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
return (function (p1__31148_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__31148_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__31157){
var vec__31158 = p__31157;
var k = cljs.core.nth.call(null,vec__31158,(0),null);
var v = cljs.core.nth.call(null,vec__31158,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__31161){
var vec__31162 = p__31161;
var k = cljs.core.nth.call(null,vec__31162,(0),null);
var v = cljs.core.nth.call(null,vec__31162,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__31168,p__31169){
var map__31416 = p__31168;
var map__31416__$1 = ((((!((map__31416 == null)))?((((map__31416.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31416.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31416):map__31416);
var opts = map__31416__$1;
var before_jsload = cljs.core.get.call(null,map__31416__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__31416__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__31416__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__31417 = p__31169;
var map__31417__$1 = ((((!((map__31417 == null)))?((((map__31417.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31417.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31417):map__31417);
var msg = map__31417__$1;
var files = cljs.core.get.call(null,map__31417__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__31417__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__31417__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__27881__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27881__auto__,map__31416,map__31416__$1,opts,before_jsload,on_jsload,reload_dependents,map__31417,map__31417__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__27882__auto__ = (function (){var switch__27769__auto__ = ((function (c__27881__auto__,map__31416,map__31416__$1,opts,before_jsload,on_jsload,reload_dependents,map__31417,map__31417__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_31570){
var state_val_31571 = (state_31570[(1)]);
if((state_val_31571 === (7))){
var inst_31434 = (state_31570[(7)]);
var inst_31433 = (state_31570[(8)]);
var inst_31431 = (state_31570[(9)]);
var inst_31432 = (state_31570[(10)]);
var inst_31439 = cljs.core._nth.call(null,inst_31432,inst_31434);
var inst_31440 = figwheel.client.file_reloading.eval_body.call(null,inst_31439,opts);
var inst_31441 = (inst_31434 + (1));
var tmp31572 = inst_31433;
var tmp31573 = inst_31431;
var tmp31574 = inst_31432;
var inst_31431__$1 = tmp31573;
var inst_31432__$1 = tmp31574;
var inst_31433__$1 = tmp31572;
var inst_31434__$1 = inst_31441;
var state_31570__$1 = (function (){var statearr_31575 = state_31570;
(statearr_31575[(7)] = inst_31434__$1);

(statearr_31575[(8)] = inst_31433__$1);

(statearr_31575[(11)] = inst_31440);

(statearr_31575[(9)] = inst_31431__$1);

(statearr_31575[(10)] = inst_31432__$1);

return statearr_31575;
})();
var statearr_31576_31662 = state_31570__$1;
(statearr_31576_31662[(2)] = null);

(statearr_31576_31662[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31571 === (20))){
var inst_31474 = (state_31570[(12)]);
var inst_31482 = figwheel.client.file_reloading.sort_files.call(null,inst_31474);
var state_31570__$1 = state_31570;
var statearr_31577_31663 = state_31570__$1;
(statearr_31577_31663[(2)] = inst_31482);

(statearr_31577_31663[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31571 === (27))){
var state_31570__$1 = state_31570;
var statearr_31578_31664 = state_31570__$1;
(statearr_31578_31664[(2)] = null);

(statearr_31578_31664[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31571 === (1))){
var inst_31423 = (state_31570[(13)]);
var inst_31420 = before_jsload.call(null,files);
var inst_31421 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_31422 = (function (){return ((function (inst_31423,inst_31420,inst_31421,state_val_31571,c__27881__auto__,map__31416,map__31416__$1,opts,before_jsload,on_jsload,reload_dependents,map__31417,map__31417__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__31165_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__31165_SHARP_);
});
;})(inst_31423,inst_31420,inst_31421,state_val_31571,c__27881__auto__,map__31416,map__31416__$1,opts,before_jsload,on_jsload,reload_dependents,map__31417,map__31417__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_31423__$1 = cljs.core.filter.call(null,inst_31422,files);
var inst_31424 = cljs.core.not_empty.call(null,inst_31423__$1);
var state_31570__$1 = (function (){var statearr_31579 = state_31570;
(statearr_31579[(13)] = inst_31423__$1);

(statearr_31579[(14)] = inst_31420);

(statearr_31579[(15)] = inst_31421);

return statearr_31579;
})();
if(cljs.core.truth_(inst_31424)){
var statearr_31580_31665 = state_31570__$1;
(statearr_31580_31665[(1)] = (2));

} else {
var statearr_31581_31666 = state_31570__$1;
(statearr_31581_31666[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31571 === (24))){
var state_31570__$1 = state_31570;
var statearr_31582_31667 = state_31570__$1;
(statearr_31582_31667[(2)] = null);

(statearr_31582_31667[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31571 === (39))){
var inst_31524 = (state_31570[(16)]);
var state_31570__$1 = state_31570;
var statearr_31583_31668 = state_31570__$1;
(statearr_31583_31668[(2)] = inst_31524);

(statearr_31583_31668[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31571 === (46))){
var inst_31565 = (state_31570[(2)]);
var state_31570__$1 = state_31570;
var statearr_31584_31669 = state_31570__$1;
(statearr_31584_31669[(2)] = inst_31565);

(statearr_31584_31669[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31571 === (4))){
var inst_31468 = (state_31570[(2)]);
var inst_31469 = cljs.core.List.EMPTY;
var inst_31470 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_31469);
var inst_31471 = (function (){return ((function (inst_31468,inst_31469,inst_31470,state_val_31571,c__27881__auto__,map__31416,map__31416__$1,opts,before_jsload,on_jsload,reload_dependents,map__31417,map__31417__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__31166_SHARP_){
var and__24748__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__31166_SHARP_);
if(cljs.core.truth_(and__24748__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__31166_SHARP_));
} else {
return and__24748__auto__;
}
});
;})(inst_31468,inst_31469,inst_31470,state_val_31571,c__27881__auto__,map__31416,map__31416__$1,opts,before_jsload,on_jsload,reload_dependents,map__31417,map__31417__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_31472 = cljs.core.filter.call(null,inst_31471,files);
var inst_31473 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_31474 = cljs.core.concat.call(null,inst_31472,inst_31473);
var state_31570__$1 = (function (){var statearr_31585 = state_31570;
(statearr_31585[(12)] = inst_31474);

(statearr_31585[(17)] = inst_31468);

(statearr_31585[(18)] = inst_31470);

return statearr_31585;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_31586_31670 = state_31570__$1;
(statearr_31586_31670[(1)] = (16));

} else {
var statearr_31587_31671 = state_31570__$1;
(statearr_31587_31671[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31571 === (15))){
var inst_31458 = (state_31570[(2)]);
var state_31570__$1 = state_31570;
var statearr_31588_31672 = state_31570__$1;
(statearr_31588_31672[(2)] = inst_31458);

(statearr_31588_31672[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31571 === (21))){
var inst_31484 = (state_31570[(19)]);
var inst_31484__$1 = (state_31570[(2)]);
var inst_31485 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_31484__$1);
var state_31570__$1 = (function (){var statearr_31589 = state_31570;
(statearr_31589[(19)] = inst_31484__$1);

return statearr_31589;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31570__$1,(22),inst_31485);
} else {
if((state_val_31571 === (31))){
var inst_31568 = (state_31570[(2)]);
var state_31570__$1 = state_31570;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31570__$1,inst_31568);
} else {
if((state_val_31571 === (32))){
var inst_31524 = (state_31570[(16)]);
var inst_31529 = inst_31524.cljs$lang$protocol_mask$partition0$;
var inst_31530 = (inst_31529 & (64));
var inst_31531 = inst_31524.cljs$core$ISeq$;
var inst_31532 = (inst_31530) || (inst_31531);
var state_31570__$1 = state_31570;
if(cljs.core.truth_(inst_31532)){
var statearr_31590_31673 = state_31570__$1;
(statearr_31590_31673[(1)] = (35));

} else {
var statearr_31591_31674 = state_31570__$1;
(statearr_31591_31674[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31571 === (40))){
var inst_31545 = (state_31570[(20)]);
var inst_31544 = (state_31570[(2)]);
var inst_31545__$1 = cljs.core.get.call(null,inst_31544,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_31546 = cljs.core.get.call(null,inst_31544,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_31547 = cljs.core.not_empty.call(null,inst_31545__$1);
var state_31570__$1 = (function (){var statearr_31592 = state_31570;
(statearr_31592[(20)] = inst_31545__$1);

(statearr_31592[(21)] = inst_31546);

return statearr_31592;
})();
if(cljs.core.truth_(inst_31547)){
var statearr_31593_31675 = state_31570__$1;
(statearr_31593_31675[(1)] = (41));

} else {
var statearr_31594_31676 = state_31570__$1;
(statearr_31594_31676[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31571 === (33))){
var state_31570__$1 = state_31570;
var statearr_31595_31677 = state_31570__$1;
(statearr_31595_31677[(2)] = false);

(statearr_31595_31677[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31571 === (13))){
var inst_31444 = (state_31570[(22)]);
var inst_31448 = cljs.core.chunk_first.call(null,inst_31444);
var inst_31449 = cljs.core.chunk_rest.call(null,inst_31444);
var inst_31450 = cljs.core.count.call(null,inst_31448);
var inst_31431 = inst_31449;
var inst_31432 = inst_31448;
var inst_31433 = inst_31450;
var inst_31434 = (0);
var state_31570__$1 = (function (){var statearr_31596 = state_31570;
(statearr_31596[(7)] = inst_31434);

(statearr_31596[(8)] = inst_31433);

(statearr_31596[(9)] = inst_31431);

(statearr_31596[(10)] = inst_31432);

return statearr_31596;
})();
var statearr_31597_31678 = state_31570__$1;
(statearr_31597_31678[(2)] = null);

(statearr_31597_31678[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31571 === (22))){
var inst_31484 = (state_31570[(19)]);
var inst_31492 = (state_31570[(23)]);
var inst_31487 = (state_31570[(24)]);
var inst_31488 = (state_31570[(25)]);
var inst_31487__$1 = (state_31570[(2)]);
var inst_31488__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_31487__$1);
var inst_31489 = (function (){var all_files = inst_31484;
var res_SINGLEQUOTE_ = inst_31487__$1;
var res = inst_31488__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_31484,inst_31492,inst_31487,inst_31488,inst_31487__$1,inst_31488__$1,state_val_31571,c__27881__auto__,map__31416,map__31416__$1,opts,before_jsload,on_jsload,reload_dependents,map__31417,map__31417__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__31167_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__31167_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_31484,inst_31492,inst_31487,inst_31488,inst_31487__$1,inst_31488__$1,state_val_31571,c__27881__auto__,map__31416,map__31416__$1,opts,before_jsload,on_jsload,reload_dependents,map__31417,map__31417__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_31490 = cljs.core.filter.call(null,inst_31489,inst_31487__$1);
var inst_31491 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_31492__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_31491);
var inst_31493 = cljs.core.not_empty.call(null,inst_31492__$1);
var state_31570__$1 = (function (){var statearr_31598 = state_31570;
(statearr_31598[(23)] = inst_31492__$1);

(statearr_31598[(24)] = inst_31487__$1);

(statearr_31598[(26)] = inst_31490);

(statearr_31598[(25)] = inst_31488__$1);

return statearr_31598;
})();
if(cljs.core.truth_(inst_31493)){
var statearr_31599_31679 = state_31570__$1;
(statearr_31599_31679[(1)] = (23));

} else {
var statearr_31600_31680 = state_31570__$1;
(statearr_31600_31680[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31571 === (36))){
var state_31570__$1 = state_31570;
var statearr_31601_31681 = state_31570__$1;
(statearr_31601_31681[(2)] = false);

(statearr_31601_31681[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31571 === (41))){
var inst_31545 = (state_31570[(20)]);
var inst_31549 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_31550 = cljs.core.map.call(null,inst_31549,inst_31545);
var inst_31551 = cljs.core.pr_str.call(null,inst_31550);
var inst_31552 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_31551)].join('');
var inst_31553 = figwheel.client.utils.log.call(null,inst_31552);
var state_31570__$1 = state_31570;
var statearr_31602_31682 = state_31570__$1;
(statearr_31602_31682[(2)] = inst_31553);

(statearr_31602_31682[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31571 === (43))){
var inst_31546 = (state_31570[(21)]);
var inst_31556 = (state_31570[(2)]);
var inst_31557 = cljs.core.not_empty.call(null,inst_31546);
var state_31570__$1 = (function (){var statearr_31603 = state_31570;
(statearr_31603[(27)] = inst_31556);

return statearr_31603;
})();
if(cljs.core.truth_(inst_31557)){
var statearr_31604_31683 = state_31570__$1;
(statearr_31604_31683[(1)] = (44));

} else {
var statearr_31605_31684 = state_31570__$1;
(statearr_31605_31684[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31571 === (29))){
var inst_31484 = (state_31570[(19)]);
var inst_31524 = (state_31570[(16)]);
var inst_31492 = (state_31570[(23)]);
var inst_31487 = (state_31570[(24)]);
var inst_31490 = (state_31570[(26)]);
var inst_31488 = (state_31570[(25)]);
var inst_31520 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_31523 = (function (){var all_files = inst_31484;
var res_SINGLEQUOTE_ = inst_31487;
var res = inst_31488;
var files_not_loaded = inst_31490;
var dependencies_that_loaded = inst_31492;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_31484,inst_31524,inst_31492,inst_31487,inst_31490,inst_31488,inst_31520,state_val_31571,c__27881__auto__,map__31416,map__31416__$1,opts,before_jsload,on_jsload,reload_dependents,map__31417,map__31417__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__31522){
var map__31606 = p__31522;
var map__31606__$1 = ((((!((map__31606 == null)))?((((map__31606.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31606.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31606):map__31606);
var namespace = cljs.core.get.call(null,map__31606__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_31484,inst_31524,inst_31492,inst_31487,inst_31490,inst_31488,inst_31520,state_val_31571,c__27881__auto__,map__31416,map__31416__$1,opts,before_jsload,on_jsload,reload_dependents,map__31417,map__31417__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_31524__$1 = cljs.core.group_by.call(null,inst_31523,inst_31490);
var inst_31526 = (inst_31524__$1 == null);
var inst_31527 = cljs.core.not.call(null,inst_31526);
var state_31570__$1 = (function (){var statearr_31608 = state_31570;
(statearr_31608[(16)] = inst_31524__$1);

(statearr_31608[(28)] = inst_31520);

return statearr_31608;
})();
if(inst_31527){
var statearr_31609_31685 = state_31570__$1;
(statearr_31609_31685[(1)] = (32));

} else {
var statearr_31610_31686 = state_31570__$1;
(statearr_31610_31686[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31571 === (44))){
var inst_31546 = (state_31570[(21)]);
var inst_31559 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_31546);
var inst_31560 = cljs.core.pr_str.call(null,inst_31559);
var inst_31561 = [cljs.core.str("not required: "),cljs.core.str(inst_31560)].join('');
var inst_31562 = figwheel.client.utils.log.call(null,inst_31561);
var state_31570__$1 = state_31570;
var statearr_31611_31687 = state_31570__$1;
(statearr_31611_31687[(2)] = inst_31562);

(statearr_31611_31687[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31571 === (6))){
var inst_31465 = (state_31570[(2)]);
var state_31570__$1 = state_31570;
var statearr_31612_31688 = state_31570__$1;
(statearr_31612_31688[(2)] = inst_31465);

(statearr_31612_31688[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31571 === (28))){
var inst_31490 = (state_31570[(26)]);
var inst_31517 = (state_31570[(2)]);
var inst_31518 = cljs.core.not_empty.call(null,inst_31490);
var state_31570__$1 = (function (){var statearr_31613 = state_31570;
(statearr_31613[(29)] = inst_31517);

return statearr_31613;
})();
if(cljs.core.truth_(inst_31518)){
var statearr_31614_31689 = state_31570__$1;
(statearr_31614_31689[(1)] = (29));

} else {
var statearr_31615_31690 = state_31570__$1;
(statearr_31615_31690[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31571 === (25))){
var inst_31488 = (state_31570[(25)]);
var inst_31504 = (state_31570[(2)]);
var inst_31505 = cljs.core.not_empty.call(null,inst_31488);
var state_31570__$1 = (function (){var statearr_31616 = state_31570;
(statearr_31616[(30)] = inst_31504);

return statearr_31616;
})();
if(cljs.core.truth_(inst_31505)){
var statearr_31617_31691 = state_31570__$1;
(statearr_31617_31691[(1)] = (26));

} else {
var statearr_31618_31692 = state_31570__$1;
(statearr_31618_31692[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31571 === (34))){
var inst_31539 = (state_31570[(2)]);
var state_31570__$1 = state_31570;
if(cljs.core.truth_(inst_31539)){
var statearr_31619_31693 = state_31570__$1;
(statearr_31619_31693[(1)] = (38));

} else {
var statearr_31620_31694 = state_31570__$1;
(statearr_31620_31694[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31571 === (17))){
var state_31570__$1 = state_31570;
var statearr_31621_31695 = state_31570__$1;
(statearr_31621_31695[(2)] = recompile_dependents);

(statearr_31621_31695[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31571 === (3))){
var state_31570__$1 = state_31570;
var statearr_31622_31696 = state_31570__$1;
(statearr_31622_31696[(2)] = null);

(statearr_31622_31696[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31571 === (12))){
var inst_31461 = (state_31570[(2)]);
var state_31570__$1 = state_31570;
var statearr_31623_31697 = state_31570__$1;
(statearr_31623_31697[(2)] = inst_31461);

(statearr_31623_31697[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31571 === (2))){
var inst_31423 = (state_31570[(13)]);
var inst_31430 = cljs.core.seq.call(null,inst_31423);
var inst_31431 = inst_31430;
var inst_31432 = null;
var inst_31433 = (0);
var inst_31434 = (0);
var state_31570__$1 = (function (){var statearr_31624 = state_31570;
(statearr_31624[(7)] = inst_31434);

(statearr_31624[(8)] = inst_31433);

(statearr_31624[(9)] = inst_31431);

(statearr_31624[(10)] = inst_31432);

return statearr_31624;
})();
var statearr_31625_31698 = state_31570__$1;
(statearr_31625_31698[(2)] = null);

(statearr_31625_31698[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31571 === (23))){
var inst_31484 = (state_31570[(19)]);
var inst_31492 = (state_31570[(23)]);
var inst_31487 = (state_31570[(24)]);
var inst_31490 = (state_31570[(26)]);
var inst_31488 = (state_31570[(25)]);
var inst_31495 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_31497 = (function (){var all_files = inst_31484;
var res_SINGLEQUOTE_ = inst_31487;
var res = inst_31488;
var files_not_loaded = inst_31490;
var dependencies_that_loaded = inst_31492;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_31484,inst_31492,inst_31487,inst_31490,inst_31488,inst_31495,state_val_31571,c__27881__auto__,map__31416,map__31416__$1,opts,before_jsload,on_jsload,reload_dependents,map__31417,map__31417__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__31496){
var map__31626 = p__31496;
var map__31626__$1 = ((((!((map__31626 == null)))?((((map__31626.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31626.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31626):map__31626);
var request_url = cljs.core.get.call(null,map__31626__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_31484,inst_31492,inst_31487,inst_31490,inst_31488,inst_31495,state_val_31571,c__27881__auto__,map__31416,map__31416__$1,opts,before_jsload,on_jsload,reload_dependents,map__31417,map__31417__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_31498 = cljs.core.reverse.call(null,inst_31492);
var inst_31499 = cljs.core.map.call(null,inst_31497,inst_31498);
var inst_31500 = cljs.core.pr_str.call(null,inst_31499);
var inst_31501 = figwheel.client.utils.log.call(null,inst_31500);
var state_31570__$1 = (function (){var statearr_31628 = state_31570;
(statearr_31628[(31)] = inst_31495);

return statearr_31628;
})();
var statearr_31629_31699 = state_31570__$1;
(statearr_31629_31699[(2)] = inst_31501);

(statearr_31629_31699[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31571 === (35))){
var state_31570__$1 = state_31570;
var statearr_31630_31700 = state_31570__$1;
(statearr_31630_31700[(2)] = true);

(statearr_31630_31700[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31571 === (19))){
var inst_31474 = (state_31570[(12)]);
var inst_31480 = figwheel.client.file_reloading.expand_files.call(null,inst_31474);
var state_31570__$1 = state_31570;
var statearr_31631_31701 = state_31570__$1;
(statearr_31631_31701[(2)] = inst_31480);

(statearr_31631_31701[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31571 === (11))){
var state_31570__$1 = state_31570;
var statearr_31632_31702 = state_31570__$1;
(statearr_31632_31702[(2)] = null);

(statearr_31632_31702[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31571 === (9))){
var inst_31463 = (state_31570[(2)]);
var state_31570__$1 = state_31570;
var statearr_31633_31703 = state_31570__$1;
(statearr_31633_31703[(2)] = inst_31463);

(statearr_31633_31703[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31571 === (5))){
var inst_31434 = (state_31570[(7)]);
var inst_31433 = (state_31570[(8)]);
var inst_31436 = (inst_31434 < inst_31433);
var inst_31437 = inst_31436;
var state_31570__$1 = state_31570;
if(cljs.core.truth_(inst_31437)){
var statearr_31634_31704 = state_31570__$1;
(statearr_31634_31704[(1)] = (7));

} else {
var statearr_31635_31705 = state_31570__$1;
(statearr_31635_31705[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31571 === (14))){
var inst_31444 = (state_31570[(22)]);
var inst_31453 = cljs.core.first.call(null,inst_31444);
var inst_31454 = figwheel.client.file_reloading.eval_body.call(null,inst_31453,opts);
var inst_31455 = cljs.core.next.call(null,inst_31444);
var inst_31431 = inst_31455;
var inst_31432 = null;
var inst_31433 = (0);
var inst_31434 = (0);
var state_31570__$1 = (function (){var statearr_31636 = state_31570;
(statearr_31636[(7)] = inst_31434);

(statearr_31636[(8)] = inst_31433);

(statearr_31636[(9)] = inst_31431);

(statearr_31636[(32)] = inst_31454);

(statearr_31636[(10)] = inst_31432);

return statearr_31636;
})();
var statearr_31637_31706 = state_31570__$1;
(statearr_31637_31706[(2)] = null);

(statearr_31637_31706[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31571 === (45))){
var state_31570__$1 = state_31570;
var statearr_31638_31707 = state_31570__$1;
(statearr_31638_31707[(2)] = null);

(statearr_31638_31707[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31571 === (26))){
var inst_31484 = (state_31570[(19)]);
var inst_31492 = (state_31570[(23)]);
var inst_31487 = (state_31570[(24)]);
var inst_31490 = (state_31570[(26)]);
var inst_31488 = (state_31570[(25)]);
var inst_31507 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_31509 = (function (){var all_files = inst_31484;
var res_SINGLEQUOTE_ = inst_31487;
var res = inst_31488;
var files_not_loaded = inst_31490;
var dependencies_that_loaded = inst_31492;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_31484,inst_31492,inst_31487,inst_31490,inst_31488,inst_31507,state_val_31571,c__27881__auto__,map__31416,map__31416__$1,opts,before_jsload,on_jsload,reload_dependents,map__31417,map__31417__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__31508){
var map__31639 = p__31508;
var map__31639__$1 = ((((!((map__31639 == null)))?((((map__31639.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31639.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31639):map__31639);
var namespace = cljs.core.get.call(null,map__31639__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__31639__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_31484,inst_31492,inst_31487,inst_31490,inst_31488,inst_31507,state_val_31571,c__27881__auto__,map__31416,map__31416__$1,opts,before_jsload,on_jsload,reload_dependents,map__31417,map__31417__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_31510 = cljs.core.map.call(null,inst_31509,inst_31488);
var inst_31511 = cljs.core.pr_str.call(null,inst_31510);
var inst_31512 = figwheel.client.utils.log.call(null,inst_31511);
var inst_31513 = (function (){var all_files = inst_31484;
var res_SINGLEQUOTE_ = inst_31487;
var res = inst_31488;
var files_not_loaded = inst_31490;
var dependencies_that_loaded = inst_31492;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_31484,inst_31492,inst_31487,inst_31490,inst_31488,inst_31507,inst_31509,inst_31510,inst_31511,inst_31512,state_val_31571,c__27881__auto__,map__31416,map__31416__$1,opts,before_jsload,on_jsload,reload_dependents,map__31417,map__31417__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_31484,inst_31492,inst_31487,inst_31490,inst_31488,inst_31507,inst_31509,inst_31510,inst_31511,inst_31512,state_val_31571,c__27881__auto__,map__31416,map__31416__$1,opts,before_jsload,on_jsload,reload_dependents,map__31417,map__31417__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_31514 = setTimeout(inst_31513,(10));
var state_31570__$1 = (function (){var statearr_31641 = state_31570;
(statearr_31641[(33)] = inst_31512);

(statearr_31641[(34)] = inst_31507);

return statearr_31641;
})();
var statearr_31642_31708 = state_31570__$1;
(statearr_31642_31708[(2)] = inst_31514);

(statearr_31642_31708[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31571 === (16))){
var state_31570__$1 = state_31570;
var statearr_31643_31709 = state_31570__$1;
(statearr_31643_31709[(2)] = reload_dependents);

(statearr_31643_31709[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31571 === (38))){
var inst_31524 = (state_31570[(16)]);
var inst_31541 = cljs.core.apply.call(null,cljs.core.hash_map,inst_31524);
var state_31570__$1 = state_31570;
var statearr_31644_31710 = state_31570__$1;
(statearr_31644_31710[(2)] = inst_31541);

(statearr_31644_31710[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31571 === (30))){
var state_31570__$1 = state_31570;
var statearr_31645_31711 = state_31570__$1;
(statearr_31645_31711[(2)] = null);

(statearr_31645_31711[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31571 === (10))){
var inst_31444 = (state_31570[(22)]);
var inst_31446 = cljs.core.chunked_seq_QMARK_.call(null,inst_31444);
var state_31570__$1 = state_31570;
if(inst_31446){
var statearr_31646_31712 = state_31570__$1;
(statearr_31646_31712[(1)] = (13));

} else {
var statearr_31647_31713 = state_31570__$1;
(statearr_31647_31713[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31571 === (18))){
var inst_31478 = (state_31570[(2)]);
var state_31570__$1 = state_31570;
if(cljs.core.truth_(inst_31478)){
var statearr_31648_31714 = state_31570__$1;
(statearr_31648_31714[(1)] = (19));

} else {
var statearr_31649_31715 = state_31570__$1;
(statearr_31649_31715[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31571 === (42))){
var state_31570__$1 = state_31570;
var statearr_31650_31716 = state_31570__$1;
(statearr_31650_31716[(2)] = null);

(statearr_31650_31716[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31571 === (37))){
var inst_31536 = (state_31570[(2)]);
var state_31570__$1 = state_31570;
var statearr_31651_31717 = state_31570__$1;
(statearr_31651_31717[(2)] = inst_31536);

(statearr_31651_31717[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31571 === (8))){
var inst_31444 = (state_31570[(22)]);
var inst_31431 = (state_31570[(9)]);
var inst_31444__$1 = cljs.core.seq.call(null,inst_31431);
var state_31570__$1 = (function (){var statearr_31652 = state_31570;
(statearr_31652[(22)] = inst_31444__$1);

return statearr_31652;
})();
if(inst_31444__$1){
var statearr_31653_31718 = state_31570__$1;
(statearr_31653_31718[(1)] = (10));

} else {
var statearr_31654_31719 = state_31570__$1;
(statearr_31654_31719[(1)] = (11));

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
});})(c__27881__auto__,map__31416,map__31416__$1,opts,before_jsload,on_jsload,reload_dependents,map__31417,map__31417__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__27769__auto__,c__27881__auto__,map__31416,map__31416__$1,opts,before_jsload,on_jsload,reload_dependents,map__31417,map__31417__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__27770__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__27770__auto____0 = (function (){
var statearr_31658 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31658[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__27770__auto__);

(statearr_31658[(1)] = (1));

return statearr_31658;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__27770__auto____1 = (function (state_31570){
while(true){
var ret_value__27771__auto__ = (function (){try{while(true){
var result__27772__auto__ = switch__27769__auto__.call(null,state_31570);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27772__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27772__auto__;
}
break;
}
}catch (e31659){if((e31659 instanceof Object)){
var ex__27773__auto__ = e31659;
var statearr_31660_31720 = state_31570;
(statearr_31660_31720[(5)] = ex__27773__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31570);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31659;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27771__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31721 = state_31570;
state_31570 = G__31721;
continue;
} else {
return ret_value__27771__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__27770__auto__ = function(state_31570){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__27770__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__27770__auto____1.call(this,state_31570);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__27770__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__27770__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__27770__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__27770__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__27770__auto__;
})()
;})(switch__27769__auto__,c__27881__auto__,map__31416,map__31416__$1,opts,before_jsload,on_jsload,reload_dependents,map__31417,map__31417__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__27883__auto__ = (function (){var statearr_31661 = f__27882__auto__.call(null);
(statearr_31661[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27881__auto__);

return statearr_31661;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27883__auto__);
});})(c__27881__auto__,map__31416,map__31416__$1,opts,before_jsload,on_jsload,reload_dependents,map__31417,map__31417__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__27881__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__31724,link){
var map__31727 = p__31724;
var map__31727__$1 = ((((!((map__31727 == null)))?((((map__31727.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31727.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31727):map__31727);
var file = cljs.core.get.call(null,map__31727__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__31727,map__31727__$1,file){
return (function (p1__31722_SHARP_,p2__31723_SHARP_){
if(cljs.core._EQ_.call(null,p1__31722_SHARP_,p2__31723_SHARP_)){
return p1__31722_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__31727,map__31727__$1,file))
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
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__31733){
var map__31734 = p__31733;
var map__31734__$1 = ((((!((map__31734 == null)))?((((map__31734.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31734.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31734):map__31734);
var match_length = cljs.core.get.call(null,map__31734__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__31734__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__31729_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__31729_SHARP_);
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
var args31736 = [];
var len__25835__auto___31739 = arguments.length;
var i__25836__auto___31740 = (0);
while(true){
if((i__25836__auto___31740 < len__25835__auto___31739)){
args31736.push((arguments[i__25836__auto___31740]));

var G__31741 = (i__25836__auto___31740 + (1));
i__25836__auto___31740 = G__31741;
continue;
} else {
}
break;
}

var G__31738 = args31736.length;
switch (G__31738) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31736.length)].join('')));

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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__31743_SHARP_,p2__31744_SHARP_){
return cljs.core.assoc.call(null,p1__31743_SHARP_,cljs.core.get.call(null,p2__31744_SHARP_,key),p2__31744_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__31745){
var map__31748 = p__31745;
var map__31748__$1 = ((((!((map__31748 == null)))?((((map__31748.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31748.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31748):map__31748);
var f_data = map__31748__$1;
var file = cljs.core.get.call(null,map__31748__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4657__auto__)){
var link = temp__4657__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__31750,p__31751){
var map__31760 = p__31750;
var map__31760__$1 = ((((!((map__31760 == null)))?((((map__31760.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31760.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31760):map__31760);
var opts = map__31760__$1;
var on_cssload = cljs.core.get.call(null,map__31760__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__31761 = p__31751;
var map__31761__$1 = ((((!((map__31761 == null)))?((((map__31761.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31761.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31761):map__31761);
var files_msg = map__31761__$1;
var files = cljs.core.get.call(null,map__31761__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__31764_31768 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
var chunk__31765_31769 = null;
var count__31766_31770 = (0);
var i__31767_31771 = (0);
while(true){
if((i__31767_31771 < count__31766_31770)){
var f_31772 = cljs.core._nth.call(null,chunk__31765_31769,i__31767_31771);
figwheel.client.file_reloading.reload_css_file.call(null,f_31772);

var G__31773 = seq__31764_31768;
var G__31774 = chunk__31765_31769;
var G__31775 = count__31766_31770;
var G__31776 = (i__31767_31771 + (1));
seq__31764_31768 = G__31773;
chunk__31765_31769 = G__31774;
count__31766_31770 = G__31775;
i__31767_31771 = G__31776;
continue;
} else {
var temp__4657__auto___31777 = cljs.core.seq.call(null,seq__31764_31768);
if(temp__4657__auto___31777){
var seq__31764_31778__$1 = temp__4657__auto___31777;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31764_31778__$1)){
var c__25571__auto___31779 = cljs.core.chunk_first.call(null,seq__31764_31778__$1);
var G__31780 = cljs.core.chunk_rest.call(null,seq__31764_31778__$1);
var G__31781 = c__25571__auto___31779;
var G__31782 = cljs.core.count.call(null,c__25571__auto___31779);
var G__31783 = (0);
seq__31764_31768 = G__31780;
chunk__31765_31769 = G__31781;
count__31766_31770 = G__31782;
i__31767_31771 = G__31783;
continue;
} else {
var f_31784 = cljs.core.first.call(null,seq__31764_31778__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_31784);

var G__31785 = cljs.core.next.call(null,seq__31764_31778__$1);
var G__31786 = null;
var G__31787 = (0);
var G__31788 = (0);
seq__31764_31768 = G__31785;
chunk__31765_31769 = G__31786;
count__31766_31770 = G__31787;
i__31767_31771 = G__31788;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__31760,map__31760__$1,opts,on_cssload,map__31761,map__31761__$1,files_msg,files){
return (function (){
figwheel.client.file_reloading.on_cssload_custom_event.call(null,files);

return on_cssload.call(null,files);
});})(map__31760,map__31760__$1,opts,on_cssload,map__31761,map__31761__$1,files_msg,files))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1520627270311