// Compiled by ClojureScript 1.9.473 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__1281){
var map__1306 = p__1281;
var map__1306__$1 = ((((!((map__1306 == null)))?((((map__1306.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1306.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1306):map__1306);
var m = map__1306__$1;
var n = cljs.core.get.call(null,map__1306__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__1306__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__1308_1330 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__1309_1331 = null;
var count__1310_1332 = (0);
var i__1311_1333 = (0);
while(true){
if((i__1311_1333 < count__1310_1332)){
var f_1334 = cljs.core._nth.call(null,chunk__1309_1331,i__1311_1333);
cljs.core.println.call(null,"  ",f_1334);

var G__1335 = seq__1308_1330;
var G__1336 = chunk__1309_1331;
var G__1337 = count__1310_1332;
var G__1338 = (i__1311_1333 + (1));
seq__1308_1330 = G__1335;
chunk__1309_1331 = G__1336;
count__1310_1332 = G__1337;
i__1311_1333 = G__1338;
continue;
} else {
var temp__4657__auto___1339 = cljs.core.seq.call(null,seq__1308_1330);
if(temp__4657__auto___1339){
var seq__1308_1340__$1 = temp__4657__auto___1339;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1308_1340__$1)){
var c__3830__auto___1341 = cljs.core.chunk_first.call(null,seq__1308_1340__$1);
var G__1342 = cljs.core.chunk_rest.call(null,seq__1308_1340__$1);
var G__1343 = c__3830__auto___1341;
var G__1344 = cljs.core.count.call(null,c__3830__auto___1341);
var G__1345 = (0);
seq__1308_1330 = G__1342;
chunk__1309_1331 = G__1343;
count__1310_1332 = G__1344;
i__1311_1333 = G__1345;
continue;
} else {
var f_1346 = cljs.core.first.call(null,seq__1308_1340__$1);
cljs.core.println.call(null,"  ",f_1346);

var G__1347 = cljs.core.next.call(null,seq__1308_1340__$1);
var G__1348 = null;
var G__1349 = (0);
var G__1350 = (0);
seq__1308_1330 = G__1347;
chunk__1309_1331 = G__1348;
count__1310_1332 = G__1349;
i__1311_1333 = G__1350;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_1351 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__3443__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__3443__auto__)){
return or__3443__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_1351);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_1351)))?cljs.core.second.call(null,arglists_1351):arglists_1351));
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
var seq__1312_1352 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__1313_1353 = null;
var count__1314_1354 = (0);
var i__1315_1355 = (0);
while(true){
if((i__1315_1355 < count__1314_1354)){
var vec__1316_1356 = cljs.core._nth.call(null,chunk__1313_1353,i__1315_1355);
var name_1357 = cljs.core.nth.call(null,vec__1316_1356,(0),null);
var map__1319_1358 = cljs.core.nth.call(null,vec__1316_1356,(1),null);
var map__1319_1359__$1 = ((((!((map__1319_1358 == null)))?((((map__1319_1358.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1319_1358.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1319_1358):map__1319_1358);
var doc_1360 = cljs.core.get.call(null,map__1319_1359__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_1361 = cljs.core.get.call(null,map__1319_1359__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_1357);

cljs.core.println.call(null," ",arglists_1361);

if(cljs.core.truth_(doc_1360)){
cljs.core.println.call(null," ",doc_1360);
} else {
}

var G__1362 = seq__1312_1352;
var G__1363 = chunk__1313_1353;
var G__1364 = count__1314_1354;
var G__1365 = (i__1315_1355 + (1));
seq__1312_1352 = G__1362;
chunk__1313_1353 = G__1363;
count__1314_1354 = G__1364;
i__1315_1355 = G__1365;
continue;
} else {
var temp__4657__auto___1366 = cljs.core.seq.call(null,seq__1312_1352);
if(temp__4657__auto___1366){
var seq__1312_1367__$1 = temp__4657__auto___1366;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1312_1367__$1)){
var c__3830__auto___1368 = cljs.core.chunk_first.call(null,seq__1312_1367__$1);
var G__1369 = cljs.core.chunk_rest.call(null,seq__1312_1367__$1);
var G__1370 = c__3830__auto___1368;
var G__1371 = cljs.core.count.call(null,c__3830__auto___1368);
var G__1372 = (0);
seq__1312_1352 = G__1369;
chunk__1313_1353 = G__1370;
count__1314_1354 = G__1371;
i__1315_1355 = G__1372;
continue;
} else {
var vec__1321_1373 = cljs.core.first.call(null,seq__1312_1367__$1);
var name_1374 = cljs.core.nth.call(null,vec__1321_1373,(0),null);
var map__1324_1375 = cljs.core.nth.call(null,vec__1321_1373,(1),null);
var map__1324_1376__$1 = ((((!((map__1324_1375 == null)))?((((map__1324_1375.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1324_1375.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1324_1375):map__1324_1375);
var doc_1377 = cljs.core.get.call(null,map__1324_1376__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_1378 = cljs.core.get.call(null,map__1324_1376__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_1374);

cljs.core.println.call(null," ",arglists_1378);

if(cljs.core.truth_(doc_1377)){
cljs.core.println.call(null," ",doc_1377);
} else {
}

var G__1379 = cljs.core.next.call(null,seq__1312_1367__$1);
var G__1380 = null;
var G__1381 = (0);
var G__1382 = (0);
seq__1312_1352 = G__1379;
chunk__1313_1353 = G__1380;
count__1314_1354 = G__1381;
i__1315_1355 = G__1382;
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

var seq__1326 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__1327 = null;
var count__1328 = (0);
var i__1329 = (0);
while(true){
if((i__1329 < count__1328)){
var role = cljs.core._nth.call(null,chunk__1327,i__1329);
var temp__4657__auto___1383__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___1383__$1)){
var spec_1384 = temp__4657__auto___1383__$1;
cljs.core.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(":")].join(''),cljs.spec.describe.call(null,spec_1384));
} else {
}

var G__1385 = seq__1326;
var G__1386 = chunk__1327;
var G__1387 = count__1328;
var G__1388 = (i__1329 + (1));
seq__1326 = G__1385;
chunk__1327 = G__1386;
count__1328 = G__1387;
i__1329 = G__1388;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__1326);
if(temp__4657__auto____$1){
var seq__1326__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1326__$1)){
var c__3830__auto__ = cljs.core.chunk_first.call(null,seq__1326__$1);
var G__1389 = cljs.core.chunk_rest.call(null,seq__1326__$1);
var G__1390 = c__3830__auto__;
var G__1391 = cljs.core.count.call(null,c__3830__auto__);
var G__1392 = (0);
seq__1326 = G__1389;
chunk__1327 = G__1390;
count__1328 = G__1391;
i__1329 = G__1392;
continue;
} else {
var role = cljs.core.first.call(null,seq__1326__$1);
var temp__4657__auto___1393__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___1393__$2)){
var spec_1394 = temp__4657__auto___1393__$2;
cljs.core.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(":")].join(''),cljs.spec.describe.call(null,spec_1394));
} else {
}

var G__1395 = cljs.core.next.call(null,seq__1326__$1);
var G__1396 = null;
var G__1397 = (0);
var G__1398 = (0);
seq__1326 = G__1395;
chunk__1327 = G__1396;
count__1328 = G__1397;
i__1329 = G__1398;
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