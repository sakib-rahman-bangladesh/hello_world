// Compiled by ClojureScript 1.9.473 {:target :nodejs}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__3475){
var map__3500 = p__3475;
var map__3500__$1 = ((((!((map__3500 == null)))?((((map__3500.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__3500.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__3500):map__3500);
var m = map__3500__$1;
var n = cljs.core.get.call(null,map__3500__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__3500__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__3502_3524 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__3503_3525 = null;
var count__3504_3526 = (0);
var i__3505_3527 = (0);
while(true){
if((i__3505_3527 < count__3504_3526)){
var f_3528 = cljs.core._nth.call(null,chunk__3503_3525,i__3505_3527);
cljs.core.println.call(null,"  ",f_3528);

var G__3529 = seq__3502_3524;
var G__3530 = chunk__3503_3525;
var G__3531 = count__3504_3526;
var G__3532 = (i__3505_3527 + (1));
seq__3502_3524 = G__3529;
chunk__3503_3525 = G__3530;
count__3504_3526 = G__3531;
i__3505_3527 = G__3532;
continue;
} else {
var temp__4657__auto___3533 = cljs.core.seq.call(null,seq__3502_3524);
if(temp__4657__auto___3533){
var seq__3502_3534__$1 = temp__4657__auto___3533;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__3502_3534__$1)){
var c__3830__auto___3535 = cljs.core.chunk_first.call(null,seq__3502_3534__$1);
var G__3536 = cljs.core.chunk_rest.call(null,seq__3502_3534__$1);
var G__3537 = c__3830__auto___3535;
var G__3538 = cljs.core.count.call(null,c__3830__auto___3535);
var G__3539 = (0);
seq__3502_3524 = G__3536;
chunk__3503_3525 = G__3537;
count__3504_3526 = G__3538;
i__3505_3527 = G__3539;
continue;
} else {
var f_3540 = cljs.core.first.call(null,seq__3502_3534__$1);
cljs.core.println.call(null,"  ",f_3540);

var G__3541 = cljs.core.next.call(null,seq__3502_3534__$1);
var G__3542 = null;
var G__3543 = (0);
var G__3544 = (0);
seq__3502_3524 = G__3541;
chunk__3503_3525 = G__3542;
count__3504_3526 = G__3543;
i__3505_3527 = G__3544;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_3545 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__3443__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__3443__auto__)){
return or__3443__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_3545);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_3545)))?cljs.core.second.call(null,arglists_3545):arglists_3545));
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
var seq__3506_3546 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__3507_3547 = null;
var count__3508_3548 = (0);
var i__3509_3549 = (0);
while(true){
if((i__3509_3549 < count__3508_3548)){
var vec__3510_3550 = cljs.core._nth.call(null,chunk__3507_3547,i__3509_3549);
var name_3551 = cljs.core.nth.call(null,vec__3510_3550,(0),null);
var map__3513_3552 = cljs.core.nth.call(null,vec__3510_3550,(1),null);
var map__3513_3553__$1 = ((((!((map__3513_3552 == null)))?((((map__3513_3552.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__3513_3552.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__3513_3552):map__3513_3552);
var doc_3554 = cljs.core.get.call(null,map__3513_3553__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_3555 = cljs.core.get.call(null,map__3513_3553__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_3551);

cljs.core.println.call(null," ",arglists_3555);

if(cljs.core.truth_(doc_3554)){
cljs.core.println.call(null," ",doc_3554);
} else {
}

var G__3556 = seq__3506_3546;
var G__3557 = chunk__3507_3547;
var G__3558 = count__3508_3548;
var G__3559 = (i__3509_3549 + (1));
seq__3506_3546 = G__3556;
chunk__3507_3547 = G__3557;
count__3508_3548 = G__3558;
i__3509_3549 = G__3559;
continue;
} else {
var temp__4657__auto___3560 = cljs.core.seq.call(null,seq__3506_3546);
if(temp__4657__auto___3560){
var seq__3506_3561__$1 = temp__4657__auto___3560;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__3506_3561__$1)){
var c__3830__auto___3562 = cljs.core.chunk_first.call(null,seq__3506_3561__$1);
var G__3563 = cljs.core.chunk_rest.call(null,seq__3506_3561__$1);
var G__3564 = c__3830__auto___3562;
var G__3565 = cljs.core.count.call(null,c__3830__auto___3562);
var G__3566 = (0);
seq__3506_3546 = G__3563;
chunk__3507_3547 = G__3564;
count__3508_3548 = G__3565;
i__3509_3549 = G__3566;
continue;
} else {
var vec__3515_3567 = cljs.core.first.call(null,seq__3506_3561__$1);
var name_3568 = cljs.core.nth.call(null,vec__3515_3567,(0),null);
var map__3518_3569 = cljs.core.nth.call(null,vec__3515_3567,(1),null);
var map__3518_3570__$1 = ((((!((map__3518_3569 == null)))?((((map__3518_3569.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__3518_3569.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__3518_3569):map__3518_3569);
var doc_3571 = cljs.core.get.call(null,map__3518_3570__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_3572 = cljs.core.get.call(null,map__3518_3570__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_3568);

cljs.core.println.call(null," ",arglists_3572);

if(cljs.core.truth_(doc_3571)){
cljs.core.println.call(null," ",doc_3571);
} else {
}

var G__3573 = cljs.core.next.call(null,seq__3506_3561__$1);
var G__3574 = null;
var G__3575 = (0);
var G__3576 = (0);
seq__3506_3546 = G__3573;
chunk__3507_3547 = G__3574;
count__3508_3548 = G__3575;
i__3509_3549 = G__3576;
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

var seq__3520 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__3521 = null;
var count__3522 = (0);
var i__3523 = (0);
while(true){
if((i__3523 < count__3522)){
var role = cljs.core._nth.call(null,chunk__3521,i__3523);
var temp__4657__auto___3577__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___3577__$1)){
var spec_3578 = temp__4657__auto___3577__$1;
cljs.core.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(":")].join(''),cljs.spec.describe.call(null,spec_3578));
} else {
}

var G__3579 = seq__3520;
var G__3580 = chunk__3521;
var G__3581 = count__3522;
var G__3582 = (i__3523 + (1));
seq__3520 = G__3579;
chunk__3521 = G__3580;
count__3522 = G__3581;
i__3523 = G__3582;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__3520);
if(temp__4657__auto____$1){
var seq__3520__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__3520__$1)){
var c__3830__auto__ = cljs.core.chunk_first.call(null,seq__3520__$1);
var G__3583 = cljs.core.chunk_rest.call(null,seq__3520__$1);
var G__3584 = c__3830__auto__;
var G__3585 = cljs.core.count.call(null,c__3830__auto__);
var G__3586 = (0);
seq__3520 = G__3583;
chunk__3521 = G__3584;
count__3522 = G__3585;
i__3523 = G__3586;
continue;
} else {
var role = cljs.core.first.call(null,seq__3520__$1);
var temp__4657__auto___3587__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___3587__$2)){
var spec_3588 = temp__4657__auto___3587__$2;
cljs.core.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(":")].join(''),cljs.spec.describe.call(null,spec_3588));
} else {
}

var G__3589 = cljs.core.next.call(null,seq__3520__$1);
var G__3590 = null;
var G__3591 = (0);
var G__3592 = (0);
seq__3520 = G__3589;
chunk__3521 = G__3590;
count__3522 = G__3591;
i__3523 = G__3592;
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