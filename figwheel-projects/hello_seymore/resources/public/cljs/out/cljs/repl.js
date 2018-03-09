// Compiled by ClojureScript 1.9.229 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__33109){
var map__33134 = p__33109;
var map__33134__$1 = ((((!((map__33134 == null)))?((((map__33134.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33134.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33134):map__33134);
var m = map__33134__$1;
var n = cljs.core.get.call(null,map__33134__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__33134__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__33136_33158 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__33137_33159 = null;
var count__33138_33160 = (0);
var i__33139_33161 = (0);
while(true){
if((i__33139_33161 < count__33138_33160)){
var f_33162 = cljs.core._nth.call(null,chunk__33137_33159,i__33139_33161);
cljs.core.println.call(null,"  ",f_33162);

var G__33163 = seq__33136_33158;
var G__33164 = chunk__33137_33159;
var G__33165 = count__33138_33160;
var G__33166 = (i__33139_33161 + (1));
seq__33136_33158 = G__33163;
chunk__33137_33159 = G__33164;
count__33138_33160 = G__33165;
i__33139_33161 = G__33166;
continue;
} else {
var temp__4657__auto___33167 = cljs.core.seq.call(null,seq__33136_33158);
if(temp__4657__auto___33167){
var seq__33136_33168__$1 = temp__4657__auto___33167;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33136_33168__$1)){
var c__25572__auto___33169 = cljs.core.chunk_first.call(null,seq__33136_33168__$1);
var G__33170 = cljs.core.chunk_rest.call(null,seq__33136_33168__$1);
var G__33171 = c__25572__auto___33169;
var G__33172 = cljs.core.count.call(null,c__25572__auto___33169);
var G__33173 = (0);
seq__33136_33158 = G__33170;
chunk__33137_33159 = G__33171;
count__33138_33160 = G__33172;
i__33139_33161 = G__33173;
continue;
} else {
var f_33174 = cljs.core.first.call(null,seq__33136_33168__$1);
cljs.core.println.call(null,"  ",f_33174);

var G__33175 = cljs.core.next.call(null,seq__33136_33168__$1);
var G__33176 = null;
var G__33177 = (0);
var G__33178 = (0);
seq__33136_33158 = G__33175;
chunk__33137_33159 = G__33176;
count__33138_33160 = G__33177;
i__33139_33161 = G__33178;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_33179 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__24761__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__24761__auto__)){
return or__24761__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_33179);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_33179)))?cljs.core.second.call(null,arglists_33179):arglists_33179));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
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
var seq__33140_33180 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__33141_33181 = null;
var count__33142_33182 = (0);
var i__33143_33183 = (0);
while(true){
if((i__33143_33183 < count__33142_33182)){
var vec__33144_33184 = cljs.core._nth.call(null,chunk__33141_33181,i__33143_33183);
var name_33185 = cljs.core.nth.call(null,vec__33144_33184,(0),null);
var map__33147_33186 = cljs.core.nth.call(null,vec__33144_33184,(1),null);
var map__33147_33187__$1 = ((((!((map__33147_33186 == null)))?((((map__33147_33186.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33147_33186.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33147_33186):map__33147_33186);
var doc_33188 = cljs.core.get.call(null,map__33147_33187__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_33189 = cljs.core.get.call(null,map__33147_33187__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_33185);

cljs.core.println.call(null," ",arglists_33189);

if(cljs.core.truth_(doc_33188)){
cljs.core.println.call(null," ",doc_33188);
} else {
}

var G__33190 = seq__33140_33180;
var G__33191 = chunk__33141_33181;
var G__33192 = count__33142_33182;
var G__33193 = (i__33143_33183 + (1));
seq__33140_33180 = G__33190;
chunk__33141_33181 = G__33191;
count__33142_33182 = G__33192;
i__33143_33183 = G__33193;
continue;
} else {
var temp__4657__auto___33194 = cljs.core.seq.call(null,seq__33140_33180);
if(temp__4657__auto___33194){
var seq__33140_33195__$1 = temp__4657__auto___33194;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33140_33195__$1)){
var c__25572__auto___33196 = cljs.core.chunk_first.call(null,seq__33140_33195__$1);
var G__33197 = cljs.core.chunk_rest.call(null,seq__33140_33195__$1);
var G__33198 = c__25572__auto___33196;
var G__33199 = cljs.core.count.call(null,c__25572__auto___33196);
var G__33200 = (0);
seq__33140_33180 = G__33197;
chunk__33141_33181 = G__33198;
count__33142_33182 = G__33199;
i__33143_33183 = G__33200;
continue;
} else {
var vec__33149_33201 = cljs.core.first.call(null,seq__33140_33195__$1);
var name_33202 = cljs.core.nth.call(null,vec__33149_33201,(0),null);
var map__33152_33203 = cljs.core.nth.call(null,vec__33149_33201,(1),null);
var map__33152_33204__$1 = ((((!((map__33152_33203 == null)))?((((map__33152_33203.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33152_33203.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33152_33203):map__33152_33203);
var doc_33205 = cljs.core.get.call(null,map__33152_33204__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_33206 = cljs.core.get.call(null,map__33152_33204__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_33202);

cljs.core.println.call(null," ",arglists_33206);

if(cljs.core.truth_(doc_33205)){
cljs.core.println.call(null," ",doc_33205);
} else {
}

var G__33207 = cljs.core.next.call(null,seq__33140_33195__$1);
var G__33208 = null;
var G__33209 = (0);
var G__33210 = (0);
seq__33140_33180 = G__33207;
chunk__33141_33181 = G__33208;
count__33142_33182 = G__33209;
i__33143_33183 = G__33210;
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
var temp__4657__auto__ = cljs.spec.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__4657__auto__)){
var fnspec = temp__4657__auto__;
cljs.core.print.call(null,"Spec");

var seq__33154 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__33155 = null;
var count__33156 = (0);
var i__33157 = (0);
while(true){
if((i__33157 < count__33156)){
var role = cljs.core._nth.call(null,chunk__33155,i__33157);
var temp__4657__auto___33211__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___33211__$1)){
var spec_33212 = temp__4657__auto___33211__$1;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_33212));
} else {
}

var G__33213 = seq__33154;
var G__33214 = chunk__33155;
var G__33215 = count__33156;
var G__33216 = (i__33157 + (1));
seq__33154 = G__33213;
chunk__33155 = G__33214;
count__33156 = G__33215;
i__33157 = G__33216;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__33154);
if(temp__4657__auto____$1){
var seq__33154__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33154__$1)){
var c__25572__auto__ = cljs.core.chunk_first.call(null,seq__33154__$1);
var G__33217 = cljs.core.chunk_rest.call(null,seq__33154__$1);
var G__33218 = c__25572__auto__;
var G__33219 = cljs.core.count.call(null,c__25572__auto__);
var G__33220 = (0);
seq__33154 = G__33217;
chunk__33155 = G__33218;
count__33156 = G__33219;
i__33157 = G__33220;
continue;
} else {
var role = cljs.core.first.call(null,seq__33154__$1);
var temp__4657__auto___33221__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___33221__$2)){
var spec_33222 = temp__4657__auto___33221__$2;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_33222));
} else {
}

var G__33223 = cljs.core.next.call(null,seq__33154__$1);
var G__33224 = null;
var G__33225 = (0);
var G__33226 = (0);
seq__33154 = G__33223;
chunk__33155 = G__33224;
count__33156 = G__33225;
i__33157 = G__33226;
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

//# sourceMappingURL=repl.js.map?rel=1520626836367