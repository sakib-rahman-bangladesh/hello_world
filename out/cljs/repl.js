// Compiled by ClojureScript 1.9.473 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__1293){
var map__1318 = p__1293;
var map__1318__$1 = ((((!((map__1318 == null)))?((((map__1318.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1318.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1318):map__1318);
var m = map__1318__$1;
var n = cljs.core.get.call(null,map__1318__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__1318__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__1320_1342 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__1321_1343 = null;
var count__1322_1344 = (0);
var i__1323_1345 = (0);
while(true){
if((i__1323_1345 < count__1322_1344)){
var f_1346 = cljs.core._nth.call(null,chunk__1321_1343,i__1323_1345);
cljs.core.println.call(null,"  ",f_1346);

var G__1347 = seq__1320_1342;
var G__1348 = chunk__1321_1343;
var G__1349 = count__1322_1344;
var G__1350 = (i__1323_1345 + (1));
seq__1320_1342 = G__1347;
chunk__1321_1343 = G__1348;
count__1322_1344 = G__1349;
i__1323_1345 = G__1350;
continue;
} else {
var temp__4657__auto___1351 = cljs.core.seq.call(null,seq__1320_1342);
if(temp__4657__auto___1351){
var seq__1320_1352__$1 = temp__4657__auto___1351;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1320_1352__$1)){
var c__3830__auto___1353 = cljs.core.chunk_first.call(null,seq__1320_1352__$1);
var G__1354 = cljs.core.chunk_rest.call(null,seq__1320_1352__$1);
var G__1355 = c__3830__auto___1353;
var G__1356 = cljs.core.count.call(null,c__3830__auto___1353);
var G__1357 = (0);
seq__1320_1342 = G__1354;
chunk__1321_1343 = G__1355;
count__1322_1344 = G__1356;
i__1323_1345 = G__1357;
continue;
} else {
var f_1358 = cljs.core.first.call(null,seq__1320_1352__$1);
cljs.core.println.call(null,"  ",f_1358);

var G__1359 = cljs.core.next.call(null,seq__1320_1352__$1);
var G__1360 = null;
var G__1361 = (0);
var G__1362 = (0);
seq__1320_1342 = G__1359;
chunk__1321_1343 = G__1360;
count__1322_1344 = G__1361;
i__1323_1345 = G__1362;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_1363 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__3443__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__3443__auto__)){
return or__3443__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_1363);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_1363)))?cljs.core.second.call(null,arglists_1363):arglists_1363));
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
var seq__1324_1364 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__1325_1365 = null;
var count__1326_1366 = (0);
var i__1327_1367 = (0);
while(true){
if((i__1327_1367 < count__1326_1366)){
var vec__1328_1368 = cljs.core._nth.call(null,chunk__1325_1365,i__1327_1367);
var name_1369 = cljs.core.nth.call(null,vec__1328_1368,(0),null);
var map__1331_1370 = cljs.core.nth.call(null,vec__1328_1368,(1),null);
var map__1331_1371__$1 = ((((!((map__1331_1370 == null)))?((((map__1331_1370.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1331_1370.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1331_1370):map__1331_1370);
var doc_1372 = cljs.core.get.call(null,map__1331_1371__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_1373 = cljs.core.get.call(null,map__1331_1371__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_1369);

cljs.core.println.call(null," ",arglists_1373);

if(cljs.core.truth_(doc_1372)){
cljs.core.println.call(null," ",doc_1372);
} else {
}

var G__1374 = seq__1324_1364;
var G__1375 = chunk__1325_1365;
var G__1376 = count__1326_1366;
var G__1377 = (i__1327_1367 + (1));
seq__1324_1364 = G__1374;
chunk__1325_1365 = G__1375;
count__1326_1366 = G__1376;
i__1327_1367 = G__1377;
continue;
} else {
var temp__4657__auto___1378 = cljs.core.seq.call(null,seq__1324_1364);
if(temp__4657__auto___1378){
var seq__1324_1379__$1 = temp__4657__auto___1378;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1324_1379__$1)){
var c__3830__auto___1380 = cljs.core.chunk_first.call(null,seq__1324_1379__$1);
var G__1381 = cljs.core.chunk_rest.call(null,seq__1324_1379__$1);
var G__1382 = c__3830__auto___1380;
var G__1383 = cljs.core.count.call(null,c__3830__auto___1380);
var G__1384 = (0);
seq__1324_1364 = G__1381;
chunk__1325_1365 = G__1382;
count__1326_1366 = G__1383;
i__1327_1367 = G__1384;
continue;
} else {
var vec__1333_1385 = cljs.core.first.call(null,seq__1324_1379__$1);
var name_1386 = cljs.core.nth.call(null,vec__1333_1385,(0),null);
var map__1336_1387 = cljs.core.nth.call(null,vec__1333_1385,(1),null);
var map__1336_1388__$1 = ((((!((map__1336_1387 == null)))?((((map__1336_1387.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1336_1387.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1336_1387):map__1336_1387);
var doc_1389 = cljs.core.get.call(null,map__1336_1388__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_1390 = cljs.core.get.call(null,map__1336_1388__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_1386);

cljs.core.println.call(null," ",arglists_1390);

if(cljs.core.truth_(doc_1389)){
cljs.core.println.call(null," ",doc_1389);
} else {
}

var G__1391 = cljs.core.next.call(null,seq__1324_1379__$1);
var G__1392 = null;
var G__1393 = (0);
var G__1394 = (0);
seq__1324_1364 = G__1391;
chunk__1325_1365 = G__1392;
count__1326_1366 = G__1393;
i__1327_1367 = G__1394;
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

var seq__1338 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__1339 = null;
var count__1340 = (0);
var i__1341 = (0);
while(true){
if((i__1341 < count__1340)){
var role = cljs.core._nth.call(null,chunk__1339,i__1341);
var temp__4657__auto___1395__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___1395__$1)){
var spec_1396 = temp__4657__auto___1395__$1;
cljs.core.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(":")].join(''),cljs.spec.describe.call(null,spec_1396));
} else {
}

var G__1397 = seq__1338;
var G__1398 = chunk__1339;
var G__1399 = count__1340;
var G__1400 = (i__1341 + (1));
seq__1338 = G__1397;
chunk__1339 = G__1398;
count__1340 = G__1399;
i__1341 = G__1400;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__1338);
if(temp__4657__auto____$1){
var seq__1338__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1338__$1)){
var c__3830__auto__ = cljs.core.chunk_first.call(null,seq__1338__$1);
var G__1401 = cljs.core.chunk_rest.call(null,seq__1338__$1);
var G__1402 = c__3830__auto__;
var G__1403 = cljs.core.count.call(null,c__3830__auto__);
var G__1404 = (0);
seq__1338 = G__1401;
chunk__1339 = G__1402;
count__1340 = G__1403;
i__1341 = G__1404;
continue;
} else {
var role = cljs.core.first.call(null,seq__1338__$1);
var temp__4657__auto___1405__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___1405__$2)){
var spec_1406 = temp__4657__auto___1405__$2;
cljs.core.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(":")].join(''),cljs.spec.describe.call(null,spec_1406));
} else {
}

var G__1407 = cljs.core.next.call(null,seq__1338__$1);
var G__1408 = null;
var G__1409 = (0);
var G__1410 = (0);
seq__1338 = G__1407;
chunk__1339 = G__1408;
count__1340 = G__1409;
i__1341 = G__1410;
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