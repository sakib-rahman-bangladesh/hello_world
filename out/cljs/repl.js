// Compiled by ClojureScript 1.9.473 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__1279){
var map__1304 = p__1279;
var map__1304__$1 = ((((!((map__1304 == null)))?((((map__1304.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1304.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1304):map__1304);
var m = map__1304__$1;
var n = cljs.core.get.call(null,map__1304__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__1304__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__1306_1328 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__1307_1329 = null;
var count__1308_1330 = (0);
var i__1309_1331 = (0);
while(true){
if((i__1309_1331 < count__1308_1330)){
var f_1332 = cljs.core._nth.call(null,chunk__1307_1329,i__1309_1331);
cljs.core.println.call(null,"  ",f_1332);

var G__1333 = seq__1306_1328;
var G__1334 = chunk__1307_1329;
var G__1335 = count__1308_1330;
var G__1336 = (i__1309_1331 + (1));
seq__1306_1328 = G__1333;
chunk__1307_1329 = G__1334;
count__1308_1330 = G__1335;
i__1309_1331 = G__1336;
continue;
} else {
var temp__4657__auto___1337 = cljs.core.seq.call(null,seq__1306_1328);
if(temp__4657__auto___1337){
var seq__1306_1338__$1 = temp__4657__auto___1337;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1306_1338__$1)){
var c__3830__auto___1339 = cljs.core.chunk_first.call(null,seq__1306_1338__$1);
var G__1340 = cljs.core.chunk_rest.call(null,seq__1306_1338__$1);
var G__1341 = c__3830__auto___1339;
var G__1342 = cljs.core.count.call(null,c__3830__auto___1339);
var G__1343 = (0);
seq__1306_1328 = G__1340;
chunk__1307_1329 = G__1341;
count__1308_1330 = G__1342;
i__1309_1331 = G__1343;
continue;
} else {
var f_1344 = cljs.core.first.call(null,seq__1306_1338__$1);
cljs.core.println.call(null,"  ",f_1344);

var G__1345 = cljs.core.next.call(null,seq__1306_1338__$1);
var G__1346 = null;
var G__1347 = (0);
var G__1348 = (0);
seq__1306_1328 = G__1345;
chunk__1307_1329 = G__1346;
count__1308_1330 = G__1347;
i__1309_1331 = G__1348;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_1349 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__3443__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__3443__auto__)){
return or__3443__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_1349);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_1349)))?cljs.core.second.call(null,arglists_1349):arglists_1349));
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
var seq__1310_1350 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__1311_1351 = null;
var count__1312_1352 = (0);
var i__1313_1353 = (0);
while(true){
if((i__1313_1353 < count__1312_1352)){
var vec__1314_1354 = cljs.core._nth.call(null,chunk__1311_1351,i__1313_1353);
var name_1355 = cljs.core.nth.call(null,vec__1314_1354,(0),null);
var map__1317_1356 = cljs.core.nth.call(null,vec__1314_1354,(1),null);
var map__1317_1357__$1 = ((((!((map__1317_1356 == null)))?((((map__1317_1356.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1317_1356.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1317_1356):map__1317_1356);
var doc_1358 = cljs.core.get.call(null,map__1317_1357__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_1359 = cljs.core.get.call(null,map__1317_1357__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_1355);

cljs.core.println.call(null," ",arglists_1359);

if(cljs.core.truth_(doc_1358)){
cljs.core.println.call(null," ",doc_1358);
} else {
}

var G__1360 = seq__1310_1350;
var G__1361 = chunk__1311_1351;
var G__1362 = count__1312_1352;
var G__1363 = (i__1313_1353 + (1));
seq__1310_1350 = G__1360;
chunk__1311_1351 = G__1361;
count__1312_1352 = G__1362;
i__1313_1353 = G__1363;
continue;
} else {
var temp__4657__auto___1364 = cljs.core.seq.call(null,seq__1310_1350);
if(temp__4657__auto___1364){
var seq__1310_1365__$1 = temp__4657__auto___1364;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1310_1365__$1)){
var c__3830__auto___1366 = cljs.core.chunk_first.call(null,seq__1310_1365__$1);
var G__1367 = cljs.core.chunk_rest.call(null,seq__1310_1365__$1);
var G__1368 = c__3830__auto___1366;
var G__1369 = cljs.core.count.call(null,c__3830__auto___1366);
var G__1370 = (0);
seq__1310_1350 = G__1367;
chunk__1311_1351 = G__1368;
count__1312_1352 = G__1369;
i__1313_1353 = G__1370;
continue;
} else {
var vec__1319_1371 = cljs.core.first.call(null,seq__1310_1365__$1);
var name_1372 = cljs.core.nth.call(null,vec__1319_1371,(0),null);
var map__1322_1373 = cljs.core.nth.call(null,vec__1319_1371,(1),null);
var map__1322_1374__$1 = ((((!((map__1322_1373 == null)))?((((map__1322_1373.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1322_1373.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1322_1373):map__1322_1373);
var doc_1375 = cljs.core.get.call(null,map__1322_1374__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_1376 = cljs.core.get.call(null,map__1322_1374__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_1372);

cljs.core.println.call(null," ",arglists_1376);

if(cljs.core.truth_(doc_1375)){
cljs.core.println.call(null," ",doc_1375);
} else {
}

var G__1377 = cljs.core.next.call(null,seq__1310_1365__$1);
var G__1378 = null;
var G__1379 = (0);
var G__1380 = (0);
seq__1310_1350 = G__1377;
chunk__1311_1351 = G__1378;
count__1312_1352 = G__1379;
i__1313_1353 = G__1380;
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

var seq__1324 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__1325 = null;
var count__1326 = (0);
var i__1327 = (0);
while(true){
if((i__1327 < count__1326)){
var role = cljs.core._nth.call(null,chunk__1325,i__1327);
var temp__4657__auto___1381__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___1381__$1)){
var spec_1382 = temp__4657__auto___1381__$1;
cljs.core.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(":")].join(''),cljs.spec.describe.call(null,spec_1382));
} else {
}

var G__1383 = seq__1324;
var G__1384 = chunk__1325;
var G__1385 = count__1326;
var G__1386 = (i__1327 + (1));
seq__1324 = G__1383;
chunk__1325 = G__1384;
count__1326 = G__1385;
i__1327 = G__1386;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__1324);
if(temp__4657__auto____$1){
var seq__1324__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1324__$1)){
var c__3830__auto__ = cljs.core.chunk_first.call(null,seq__1324__$1);
var G__1387 = cljs.core.chunk_rest.call(null,seq__1324__$1);
var G__1388 = c__3830__auto__;
var G__1389 = cljs.core.count.call(null,c__3830__auto__);
var G__1390 = (0);
seq__1324 = G__1387;
chunk__1325 = G__1388;
count__1326 = G__1389;
i__1327 = G__1390;
continue;
} else {
var role = cljs.core.first.call(null,seq__1324__$1);
var temp__4657__auto___1391__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___1391__$2)){
var spec_1392 = temp__4657__auto___1391__$2;
cljs.core.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(":")].join(''),cljs.spec.describe.call(null,spec_1392));
} else {
}

var G__1393 = cljs.core.next.call(null,seq__1324__$1);
var G__1394 = null;
var G__1395 = (0);
var G__1396 = (0);
seq__1324 = G__1393;
chunk__1325 = G__1394;
count__1326 = G__1395;
i__1327 = G__1396;
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