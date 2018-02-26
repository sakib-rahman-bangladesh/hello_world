// Compiled by ClojureScript 1.9.908 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__35780){
var map__35781 = p__35780;
var map__35781__$1 = ((((!((map__35781 == null)))?((((map__35781.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35781.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35781):map__35781);
var m = map__35781__$1;
var n = cljs.core.get.call(null,map__35781__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__35781__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__35783_35805 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__35784_35806 = null;
var count__35785_35807 = (0);
var i__35786_35808 = (0);
while(true){
if((i__35786_35808 < count__35785_35807)){
var f_35809 = cljs.core._nth.call(null,chunk__35784_35806,i__35786_35808);
cljs.core.println.call(null,"  ",f_35809);

var G__35810 = seq__35783_35805;
var G__35811 = chunk__35784_35806;
var G__35812 = count__35785_35807;
var G__35813 = (i__35786_35808 + (1));
seq__35783_35805 = G__35810;
chunk__35784_35806 = G__35811;
count__35785_35807 = G__35812;
i__35786_35808 = G__35813;
continue;
} else {
var temp__4657__auto___35814 = cljs.core.seq.call(null,seq__35783_35805);
if(temp__4657__auto___35814){
var seq__35783_35815__$1 = temp__4657__auto___35814;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35783_35815__$1)){
var c__28828__auto___35816 = cljs.core.chunk_first.call(null,seq__35783_35815__$1);
var G__35817 = cljs.core.chunk_rest.call(null,seq__35783_35815__$1);
var G__35818 = c__28828__auto___35816;
var G__35819 = cljs.core.count.call(null,c__28828__auto___35816);
var G__35820 = (0);
seq__35783_35805 = G__35817;
chunk__35784_35806 = G__35818;
count__35785_35807 = G__35819;
i__35786_35808 = G__35820;
continue;
} else {
var f_35821 = cljs.core.first.call(null,seq__35783_35815__$1);
cljs.core.println.call(null,"  ",f_35821);

var G__35822 = cljs.core.next.call(null,seq__35783_35815__$1);
var G__35823 = null;
var G__35824 = (0);
var G__35825 = (0);
seq__35783_35805 = G__35822;
chunk__35784_35806 = G__35823;
count__35785_35807 = G__35824;
i__35786_35808 = G__35825;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_35826 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__27989__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__27989__auto__)){
return or__27989__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_35826);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_35826)))?cljs.core.second.call(null,arglists_35826):arglists_35826));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__35787_35827 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__35788_35828 = null;
var count__35789_35829 = (0);
var i__35790_35830 = (0);
while(true){
if((i__35790_35830 < count__35789_35829)){
var vec__35791_35831 = cljs.core._nth.call(null,chunk__35788_35828,i__35790_35830);
var name_35832 = cljs.core.nth.call(null,vec__35791_35831,(0),null);
var map__35794_35833 = cljs.core.nth.call(null,vec__35791_35831,(1),null);
var map__35794_35834__$1 = ((((!((map__35794_35833 == null)))?((((map__35794_35833.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35794_35833.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35794_35833):map__35794_35833);
var doc_35835 = cljs.core.get.call(null,map__35794_35834__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_35836 = cljs.core.get.call(null,map__35794_35834__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_35832);

cljs.core.println.call(null," ",arglists_35836);

if(cljs.core.truth_(doc_35835)){
cljs.core.println.call(null," ",doc_35835);
} else {
}

var G__35837 = seq__35787_35827;
var G__35838 = chunk__35788_35828;
var G__35839 = count__35789_35829;
var G__35840 = (i__35790_35830 + (1));
seq__35787_35827 = G__35837;
chunk__35788_35828 = G__35838;
count__35789_35829 = G__35839;
i__35790_35830 = G__35840;
continue;
} else {
var temp__4657__auto___35841 = cljs.core.seq.call(null,seq__35787_35827);
if(temp__4657__auto___35841){
var seq__35787_35842__$1 = temp__4657__auto___35841;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35787_35842__$1)){
var c__28828__auto___35843 = cljs.core.chunk_first.call(null,seq__35787_35842__$1);
var G__35844 = cljs.core.chunk_rest.call(null,seq__35787_35842__$1);
var G__35845 = c__28828__auto___35843;
var G__35846 = cljs.core.count.call(null,c__28828__auto___35843);
var G__35847 = (0);
seq__35787_35827 = G__35844;
chunk__35788_35828 = G__35845;
count__35789_35829 = G__35846;
i__35790_35830 = G__35847;
continue;
} else {
var vec__35796_35848 = cljs.core.first.call(null,seq__35787_35842__$1);
var name_35849 = cljs.core.nth.call(null,vec__35796_35848,(0),null);
var map__35799_35850 = cljs.core.nth.call(null,vec__35796_35848,(1),null);
var map__35799_35851__$1 = ((((!((map__35799_35850 == null)))?((((map__35799_35850.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35799_35850.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35799_35850):map__35799_35850);
var doc_35852 = cljs.core.get.call(null,map__35799_35851__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_35853 = cljs.core.get.call(null,map__35799_35851__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_35849);

cljs.core.println.call(null," ",arglists_35853);

if(cljs.core.truth_(doc_35852)){
cljs.core.println.call(null," ",doc_35852);
} else {
}

var G__35854 = cljs.core.next.call(null,seq__35787_35842__$1);
var G__35855 = null;
var G__35856 = (0);
var G__35857 = (0);
seq__35787_35827 = G__35854;
chunk__35788_35828 = G__35855;
count__35789_35829 = G__35856;
i__35790_35830 = G__35857;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__4657__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__4657__auto__)){
var fnspec = temp__4657__auto__;
cljs.core.print.call(null,"Spec");

var seq__35801 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__35802 = null;
var count__35803 = (0);
var i__35804 = (0);
while(true){
if((i__35804 < count__35803)){
var role = cljs.core._nth.call(null,chunk__35802,i__35804);
var temp__4657__auto___35858__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___35858__$1)){
var spec_35859 = temp__4657__auto___35858__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_35859));
} else {
}

var G__35860 = seq__35801;
var G__35861 = chunk__35802;
var G__35862 = count__35803;
var G__35863 = (i__35804 + (1));
seq__35801 = G__35860;
chunk__35802 = G__35861;
count__35803 = G__35862;
i__35804 = G__35863;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__35801);
if(temp__4657__auto____$1){
var seq__35801__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35801__$1)){
var c__28828__auto__ = cljs.core.chunk_first.call(null,seq__35801__$1);
var G__35864 = cljs.core.chunk_rest.call(null,seq__35801__$1);
var G__35865 = c__28828__auto__;
var G__35866 = cljs.core.count.call(null,c__28828__auto__);
var G__35867 = (0);
seq__35801 = G__35864;
chunk__35802 = G__35865;
count__35803 = G__35866;
i__35804 = G__35867;
continue;
} else {
var role = cljs.core.first.call(null,seq__35801__$1);
var temp__4657__auto___35868__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___35868__$2)){
var spec_35869 = temp__4657__auto___35868__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_35869));
} else {
}

var G__35870 = cljs.core.next.call(null,seq__35801__$1);
var G__35871 = null;
var G__35872 = (0);
var G__35873 = (0);
seq__35801 = G__35870;
chunk__35802 = G__35871;
count__35803 = G__35872;
i__35804 = G__35873;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1519660839130
