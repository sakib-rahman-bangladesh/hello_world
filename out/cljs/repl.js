// Compiled by ClojureScript 1.9.473 {:target :nodejs}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__1963){
var map__1988 = p__1963;
var map__1988__$1 = ((((!((map__1988 == null)))?((((map__1988.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1988.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1988):map__1988);
var m = map__1988__$1;
var n = cljs.core.get.call(null,map__1988__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__1988__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/")].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__1990_2012 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__1991_2013 = null;
var count__1992_2014 = (0);
var i__1993_2015 = (0);
while(true){
if((i__1993_2015 < count__1992_2014)){
var f_2016 = cljs.core._nth.call(null,chunk__1991_2013,i__1993_2015);
cljs.core.println.call(null,"  ",f_2016);

var G__2017 = seq__1990_2012;
var G__2018 = chunk__1991_2013;
var G__2019 = count__1992_2014;
var G__2020 = (i__1993_2015 + (1));
seq__1990_2012 = G__2017;
chunk__1991_2013 = G__2018;
count__1992_2014 = G__2019;
i__1993_2015 = G__2020;
continue;
} else {
var temp__4657__auto___2021 = cljs.core.seq.call(null,seq__1990_2012);
if(temp__4657__auto___2021){
var seq__1990_2022__$1 = temp__4657__auto___2021;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1990_2022__$1)){
var c__3830__auto___2023 = cljs.core.chunk_first.call(null,seq__1990_2022__$1);
var G__2024 = cljs.core.chunk_rest.call(null,seq__1990_2022__$1);
var G__2025 = c__3830__auto___2023;
var G__2026 = cljs.core.count.call(null,c__3830__auto___2023);
var G__2027 = (0);
seq__1990_2012 = G__2024;
chunk__1991_2013 = G__2025;
count__1992_2014 = G__2026;
i__1993_2015 = G__2027;
continue;
} else {
var f_2028 = cljs.core.first.call(null,seq__1990_2022__$1);
cljs.core.println.call(null,"  ",f_2028);

var G__2029 = cljs.core.next.call(null,seq__1990_2022__$1);
var G__2030 = null;
var G__2031 = (0);
var G__2032 = (0);
seq__1990_2012 = G__2029;
chunk__1991_2013 = G__2030;
count__1992_2014 = G__2031;
i__1993_2015 = G__2032;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_2033 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__3443__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__3443__auto__)){
return or__3443__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_2033);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_2033)))?cljs.core.second.call(null,arglists_2033):arglists_2033));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n  Please see http://clojure.org/"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n  Please see http://clojure.org/special_forms#"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
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
var seq__1994_2034 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__1995_2035 = null;
var count__1996_2036 = (0);
var i__1997_2037 = (0);
while(true){
if((i__1997_2037 < count__1996_2036)){
var vec__1998_2038 = cljs.core._nth.call(null,chunk__1995_2035,i__1997_2037);
var name_2039 = cljs.core.nth.call(null,vec__1998_2038,(0),null);
var map__2001_2040 = cljs.core.nth.call(null,vec__1998_2038,(1),null);
var map__2001_2041__$1 = ((((!((map__2001_2040 == null)))?((((map__2001_2040.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2001_2040.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__2001_2040):map__2001_2040);
var doc_2042 = cljs.core.get.call(null,map__2001_2041__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_2043 = cljs.core.get.call(null,map__2001_2041__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_2039);

cljs.core.println.call(null," ",arglists_2043);

if(cljs.core.truth_(doc_2042)){
cljs.core.println.call(null," ",doc_2042);
} else {
}

var G__2044 = seq__1994_2034;
var G__2045 = chunk__1995_2035;
var G__2046 = count__1996_2036;
var G__2047 = (i__1997_2037 + (1));
seq__1994_2034 = G__2044;
chunk__1995_2035 = G__2045;
count__1996_2036 = G__2046;
i__1997_2037 = G__2047;
continue;
} else {
var temp__4657__auto___2048 = cljs.core.seq.call(null,seq__1994_2034);
if(temp__4657__auto___2048){
var seq__1994_2049__$1 = temp__4657__auto___2048;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1994_2049__$1)){
var c__3830__auto___2050 = cljs.core.chunk_first.call(null,seq__1994_2049__$1);
var G__2051 = cljs.core.chunk_rest.call(null,seq__1994_2049__$1);
var G__2052 = c__3830__auto___2050;
var G__2053 = cljs.core.count.call(null,c__3830__auto___2050);
var G__2054 = (0);
seq__1994_2034 = G__2051;
chunk__1995_2035 = G__2052;
count__1996_2036 = G__2053;
i__1997_2037 = G__2054;
continue;
} else {
var vec__2003_2055 = cljs.core.first.call(null,seq__1994_2049__$1);
var name_2056 = cljs.core.nth.call(null,vec__2003_2055,(0),null);
var map__2006_2057 = cljs.core.nth.call(null,vec__2003_2055,(1),null);
var map__2006_2058__$1 = ((((!((map__2006_2057 == null)))?((((map__2006_2057.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2006_2057.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__2006_2057):map__2006_2057);
var doc_2059 = cljs.core.get.call(null,map__2006_2058__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_2060 = cljs.core.get.call(null,map__2006_2058__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_2056);

cljs.core.println.call(null," ",arglists_2060);

if(cljs.core.truth_(doc_2059)){
cljs.core.println.call(null," ",doc_2059);
} else {
}

var G__2061 = cljs.core.next.call(null,seq__1994_2049__$1);
var G__2062 = null;
var G__2063 = (0);
var G__2064 = (0);
seq__1994_2034 = G__2061;
chunk__1995_2035 = G__2062;
count__1996_2036 = G__2063;
i__1997_2037 = G__2064;
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
var temp__4657__auto__ = cljs.spec.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__4657__auto__)){
var fnspec = temp__4657__auto__;
cljs.core.print.call(null,"Spec");

var seq__2008 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__2009 = null;
var count__2010 = (0);
var i__2011 = (0);
while(true){
if((i__2011 < count__2010)){
var role = cljs.core._nth.call(null,chunk__2009,i__2011);
var temp__4657__auto___2065__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___2065__$1)){
var spec_2066 = temp__4657__auto___2065__$1;
cljs.core.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(":")].join(''),cljs.spec.describe.call(null,spec_2066));
} else {
}

var G__2067 = seq__2008;
var G__2068 = chunk__2009;
var G__2069 = count__2010;
var G__2070 = (i__2011 + (1));
seq__2008 = G__2067;
chunk__2009 = G__2068;
count__2010 = G__2069;
i__2011 = G__2070;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__2008);
if(temp__4657__auto____$1){
var seq__2008__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__2008__$1)){
var c__3830__auto__ = cljs.core.chunk_first.call(null,seq__2008__$1);
var G__2071 = cljs.core.chunk_rest.call(null,seq__2008__$1);
var G__2072 = c__3830__auto__;
var G__2073 = cljs.core.count.call(null,c__3830__auto__);
var G__2074 = (0);
seq__2008 = G__2071;
chunk__2009 = G__2072;
count__2010 = G__2073;
i__2011 = G__2074;
continue;
} else {
var role = cljs.core.first.call(null,seq__2008__$1);
var temp__4657__auto___2075__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___2075__$2)){
var spec_2076 = temp__4657__auto___2075__$2;
cljs.core.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(":")].join(''),cljs.spec.describe.call(null,spec_2076));
} else {
}

var G__2077 = cljs.core.next.call(null,seq__2008__$1);
var G__2078 = null;
var G__2079 = (0);
var G__2080 = (0);
seq__2008 = G__2077;
chunk__2009 = G__2078;
count__2010 = G__2079;
i__2011 = G__2080;
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

//# sourceMappingURL=repl.js.map