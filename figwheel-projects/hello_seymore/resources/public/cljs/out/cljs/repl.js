// Compiled by ClojureScript 1.9.229 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__33107){
var map__33132 = p__33107;
var map__33132__$1 = ((((!((map__33132 == null)))?((((map__33132.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33132.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33132):map__33132);
var m = map__33132__$1;
var n = cljs.core.get.call(null,map__33132__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__33132__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__33134_33156 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__33135_33157 = null;
var count__33136_33158 = (0);
var i__33137_33159 = (0);
while(true){
if((i__33137_33159 < count__33136_33158)){
var f_33160 = cljs.core._nth.call(null,chunk__33135_33157,i__33137_33159);
cljs.core.println.call(null,"  ",f_33160);

var G__33161 = seq__33134_33156;
var G__33162 = chunk__33135_33157;
var G__33163 = count__33136_33158;
var G__33164 = (i__33137_33159 + (1));
seq__33134_33156 = G__33161;
chunk__33135_33157 = G__33162;
count__33136_33158 = G__33163;
i__33137_33159 = G__33164;
continue;
} else {
var temp__4657__auto___33165 = cljs.core.seq.call(null,seq__33134_33156);
if(temp__4657__auto___33165){
var seq__33134_33166__$1 = temp__4657__auto___33165;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33134_33166__$1)){
var c__25572__auto___33167 = cljs.core.chunk_first.call(null,seq__33134_33166__$1);
var G__33168 = cljs.core.chunk_rest.call(null,seq__33134_33166__$1);
var G__33169 = c__25572__auto___33167;
var G__33170 = cljs.core.count.call(null,c__25572__auto___33167);
var G__33171 = (0);
seq__33134_33156 = G__33168;
chunk__33135_33157 = G__33169;
count__33136_33158 = G__33170;
i__33137_33159 = G__33171;
continue;
} else {
var f_33172 = cljs.core.first.call(null,seq__33134_33166__$1);
cljs.core.println.call(null,"  ",f_33172);

var G__33173 = cljs.core.next.call(null,seq__33134_33166__$1);
var G__33174 = null;
var G__33175 = (0);
var G__33176 = (0);
seq__33134_33156 = G__33173;
chunk__33135_33157 = G__33174;
count__33136_33158 = G__33175;
i__33137_33159 = G__33176;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_33177 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__24761__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__24761__auto__)){
return or__24761__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_33177);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_33177)))?cljs.core.second.call(null,arglists_33177):arglists_33177));
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
var seq__33138_33178 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__33139_33179 = null;
var count__33140_33180 = (0);
var i__33141_33181 = (0);
while(true){
if((i__33141_33181 < count__33140_33180)){
var vec__33142_33182 = cljs.core._nth.call(null,chunk__33139_33179,i__33141_33181);
var name_33183 = cljs.core.nth.call(null,vec__33142_33182,(0),null);
var map__33145_33184 = cljs.core.nth.call(null,vec__33142_33182,(1),null);
var map__33145_33185__$1 = ((((!((map__33145_33184 == null)))?((((map__33145_33184.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33145_33184.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33145_33184):map__33145_33184);
var doc_33186 = cljs.core.get.call(null,map__33145_33185__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_33187 = cljs.core.get.call(null,map__33145_33185__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_33183);

cljs.core.println.call(null," ",arglists_33187);

if(cljs.core.truth_(doc_33186)){
cljs.core.println.call(null," ",doc_33186);
} else {
}

var G__33188 = seq__33138_33178;
var G__33189 = chunk__33139_33179;
var G__33190 = count__33140_33180;
var G__33191 = (i__33141_33181 + (1));
seq__33138_33178 = G__33188;
chunk__33139_33179 = G__33189;
count__33140_33180 = G__33190;
i__33141_33181 = G__33191;
continue;
} else {
var temp__4657__auto___33192 = cljs.core.seq.call(null,seq__33138_33178);
if(temp__4657__auto___33192){
var seq__33138_33193__$1 = temp__4657__auto___33192;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33138_33193__$1)){
var c__25572__auto___33194 = cljs.core.chunk_first.call(null,seq__33138_33193__$1);
var G__33195 = cljs.core.chunk_rest.call(null,seq__33138_33193__$1);
var G__33196 = c__25572__auto___33194;
var G__33197 = cljs.core.count.call(null,c__25572__auto___33194);
var G__33198 = (0);
seq__33138_33178 = G__33195;
chunk__33139_33179 = G__33196;
count__33140_33180 = G__33197;
i__33141_33181 = G__33198;
continue;
} else {
var vec__33147_33199 = cljs.core.first.call(null,seq__33138_33193__$1);
var name_33200 = cljs.core.nth.call(null,vec__33147_33199,(0),null);
var map__33150_33201 = cljs.core.nth.call(null,vec__33147_33199,(1),null);
var map__33150_33202__$1 = ((((!((map__33150_33201 == null)))?((((map__33150_33201.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33150_33201.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33150_33201):map__33150_33201);
var doc_33203 = cljs.core.get.call(null,map__33150_33202__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_33204 = cljs.core.get.call(null,map__33150_33202__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_33200);

cljs.core.println.call(null," ",arglists_33204);

if(cljs.core.truth_(doc_33203)){
cljs.core.println.call(null," ",doc_33203);
} else {
}

var G__33205 = cljs.core.next.call(null,seq__33138_33193__$1);
var G__33206 = null;
var G__33207 = (0);
var G__33208 = (0);
seq__33138_33178 = G__33205;
chunk__33139_33179 = G__33206;
count__33140_33180 = G__33207;
i__33141_33181 = G__33208;
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

var seq__33152 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__33153 = null;
var count__33154 = (0);
var i__33155 = (0);
while(true){
if((i__33155 < count__33154)){
var role = cljs.core._nth.call(null,chunk__33153,i__33155);
var temp__4657__auto___33209__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___33209__$1)){
var spec_33210 = temp__4657__auto___33209__$1;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_33210));
} else {
}

var G__33211 = seq__33152;
var G__33212 = chunk__33153;
var G__33213 = count__33154;
var G__33214 = (i__33155 + (1));
seq__33152 = G__33211;
chunk__33153 = G__33212;
count__33154 = G__33213;
i__33155 = G__33214;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__33152);
if(temp__4657__auto____$1){
var seq__33152__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33152__$1)){
var c__25572__auto__ = cljs.core.chunk_first.call(null,seq__33152__$1);
var G__33215 = cljs.core.chunk_rest.call(null,seq__33152__$1);
var G__33216 = c__25572__auto__;
var G__33217 = cljs.core.count.call(null,c__25572__auto__);
var G__33218 = (0);
seq__33152 = G__33215;
chunk__33153 = G__33216;
count__33154 = G__33217;
i__33155 = G__33218;
continue;
} else {
var role = cljs.core.first.call(null,seq__33152__$1);
var temp__4657__auto___33219__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___33219__$2)){
var spec_33220 = temp__4657__auto___33219__$2;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_33220));
} else {
}

var G__33221 = cljs.core.next.call(null,seq__33152__$1);
var G__33222 = null;
var G__33223 = (0);
var G__33224 = (0);
seq__33152 = G__33221;
chunk__33153 = G__33222;
count__33154 = G__33223;
i__33155 = G__33224;
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

//# sourceMappingURL=repl.js.map?rel=1519826346525