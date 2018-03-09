// Compiled by ClojureScript 1.9.229 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
goog.require('cljs.reader');
figwheel.client._figwheel_version_ = "0.5.7";
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var args35262 = [];
var len__25836__auto___35265 = arguments.length;
var i__25837__auto___35266 = (0);
while(true){
if((i__25837__auto___35266 < len__25836__auto___35265)){
args35262.push((arguments[i__25837__auto___35266]));

var G__35267 = (i__25837__auto___35266 + (1));
i__25837__auto___35266 = G__35267;
continue;
} else {
}
break;
}

var G__35264 = args35262.length;
switch (G__35264) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35262.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),args], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__25843__auto__ = [];
var len__25836__auto___35270 = arguments.length;
var i__25837__auto___35271 = (0);
while(true){
if((i__25837__auto___35271 < len__25836__auto___35270)){
args__25843__auto__.push((arguments[i__25837__auto___35271]));

var G__35272 = (i__25837__auto___35271 + (1));
i__25837__auto___35271 = G__35272;
continue;
} else {
}
break;
}

var argseq__25844__auto__ = ((((0) < args__25843__auto__.length))?(new cljs.core.IndexedSeq(args__25843__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__25844__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq35269){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35269));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__25843__auto__ = [];
var len__25836__auto___35274 = arguments.length;
var i__25837__auto___35275 = (0);
while(true){
if((i__25837__auto___35275 < len__25836__auto___35274)){
args__25843__auto__.push((arguments[i__25837__auto___35275]));

var G__35276 = (i__25837__auto___35275 + (1));
i__25837__auto___35275 = G__35276;
continue;
} else {
}
break;
}

var argseq__25844__auto__ = ((((0) < args__25843__auto__.length))?(new cljs.core.IndexedSeq(args__25843__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__25844__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq35273){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35273));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?(function (){
var pred__35277 = cljs.core._EQ_;
var expr__35278 = (function (){var or__24761__auto__ = (function (){try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
return localStorage.getItem("figwheel_autoload");
} else {
return null;
}
}catch (e35281){if((e35281 instanceof Error)){
var e = e35281;
return false;
} else {
throw e35281;

}
}})();
if(cljs.core.truth_(or__24761__auto__)){
return or__24761__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__35277.call(null,"true",expr__35278))){
return true;
} else {
if(cljs.core.truth_(pred__35277.call(null,"false",expr__35278))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__35278)].join('')));
}
}
}):(function (){
return true;
}));
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
localStorage.setItem("figwheel_autoload",cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
} else {
}

return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Figwheel autoloading "),cljs.core.str((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));
}catch (e35283){if((e35283 instanceof Error)){
var e = e35283;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Unable to access localStorage")].join(''));
} else {
throw e35283;

}
}} else {
return null;
}
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__35284){
var map__35287 = p__35284;
var map__35287__$1 = ((((!((map__35287 == null)))?((((map__35287.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35287.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35287):map__35287);
var message = cljs.core.get.call(null,map__35287__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__35287__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__24761__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__24761__auto__)){
return or__24761__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__24749__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__24749__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__24749__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__27884__auto___35449 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27884__auto___35449,ch){
return (function (){
var f__27885__auto__ = (function (){var switch__27772__auto__ = ((function (c__27884__auto___35449,ch){
return (function (state_35418){
var state_val_35419 = (state_35418[(1)]);
if((state_val_35419 === (7))){
var inst_35414 = (state_35418[(2)]);
var state_35418__$1 = state_35418;
var statearr_35420_35450 = state_35418__$1;
(statearr_35420_35450[(2)] = inst_35414);

(statearr_35420_35450[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35419 === (1))){
var state_35418__$1 = state_35418;
var statearr_35421_35451 = state_35418__$1;
(statearr_35421_35451[(2)] = null);

(statearr_35421_35451[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35419 === (4))){
var inst_35371 = (state_35418[(7)]);
var inst_35371__$1 = (state_35418[(2)]);
var state_35418__$1 = (function (){var statearr_35422 = state_35418;
(statearr_35422[(7)] = inst_35371__$1);

return statearr_35422;
})();
if(cljs.core.truth_(inst_35371__$1)){
var statearr_35423_35452 = state_35418__$1;
(statearr_35423_35452[(1)] = (5));

} else {
var statearr_35424_35453 = state_35418__$1;
(statearr_35424_35453[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35419 === (15))){
var inst_35378 = (state_35418[(8)]);
var inst_35393 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_35378);
var inst_35394 = cljs.core.first.call(null,inst_35393);
var inst_35395 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_35394);
var inst_35396 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_35395)].join('');
var inst_35397 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_35396);
var state_35418__$1 = state_35418;
var statearr_35425_35454 = state_35418__$1;
(statearr_35425_35454[(2)] = inst_35397);

(statearr_35425_35454[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35419 === (13))){
var inst_35402 = (state_35418[(2)]);
var state_35418__$1 = state_35418;
var statearr_35426_35455 = state_35418__$1;
(statearr_35426_35455[(2)] = inst_35402);

(statearr_35426_35455[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35419 === (6))){
var state_35418__$1 = state_35418;
var statearr_35427_35456 = state_35418__$1;
(statearr_35427_35456[(2)] = null);

(statearr_35427_35456[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35419 === (17))){
var inst_35400 = (state_35418[(2)]);
var state_35418__$1 = state_35418;
var statearr_35428_35457 = state_35418__$1;
(statearr_35428_35457[(2)] = inst_35400);

(statearr_35428_35457[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35419 === (3))){
var inst_35416 = (state_35418[(2)]);
var state_35418__$1 = state_35418;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35418__$1,inst_35416);
} else {
if((state_val_35419 === (12))){
var inst_35377 = (state_35418[(9)]);
var inst_35391 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_35377,opts);
var state_35418__$1 = state_35418;
if(cljs.core.truth_(inst_35391)){
var statearr_35429_35458 = state_35418__$1;
(statearr_35429_35458[(1)] = (15));

} else {
var statearr_35430_35459 = state_35418__$1;
(statearr_35430_35459[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35419 === (2))){
var state_35418__$1 = state_35418;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35418__$1,(4),ch);
} else {
if((state_val_35419 === (11))){
var inst_35378 = (state_35418[(8)]);
var inst_35383 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_35384 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_35378);
var inst_35385 = cljs.core.async.timeout.call(null,(1000));
var inst_35386 = [inst_35384,inst_35385];
var inst_35387 = (new cljs.core.PersistentVector(null,2,(5),inst_35383,inst_35386,null));
var state_35418__$1 = state_35418;
return cljs.core.async.ioc_alts_BANG_.call(null,state_35418__$1,(14),inst_35387);
} else {
if((state_val_35419 === (9))){
var inst_35378 = (state_35418[(8)]);
var inst_35404 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_35405 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_35378);
var inst_35406 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_35405);
var inst_35407 = [cljs.core.str("Not loading: "),cljs.core.str(inst_35406)].join('');
var inst_35408 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_35407);
var state_35418__$1 = (function (){var statearr_35431 = state_35418;
(statearr_35431[(10)] = inst_35404);

return statearr_35431;
})();
var statearr_35432_35460 = state_35418__$1;
(statearr_35432_35460[(2)] = inst_35408);

(statearr_35432_35460[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35419 === (5))){
var inst_35371 = (state_35418[(7)]);
var inst_35373 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_35374 = (new cljs.core.PersistentArrayMap(null,2,inst_35373,null));
var inst_35375 = (new cljs.core.PersistentHashSet(null,inst_35374,null));
var inst_35376 = figwheel.client.focus_msgs.call(null,inst_35375,inst_35371);
var inst_35377 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_35376);
var inst_35378 = cljs.core.first.call(null,inst_35376);
var inst_35379 = figwheel.client.autoload_QMARK_.call(null);
var state_35418__$1 = (function (){var statearr_35433 = state_35418;
(statearr_35433[(8)] = inst_35378);

(statearr_35433[(9)] = inst_35377);

return statearr_35433;
})();
if(cljs.core.truth_(inst_35379)){
var statearr_35434_35461 = state_35418__$1;
(statearr_35434_35461[(1)] = (8));

} else {
var statearr_35435_35462 = state_35418__$1;
(statearr_35435_35462[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35419 === (14))){
var inst_35389 = (state_35418[(2)]);
var state_35418__$1 = state_35418;
var statearr_35436_35463 = state_35418__$1;
(statearr_35436_35463[(2)] = inst_35389);

(statearr_35436_35463[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35419 === (16))){
var state_35418__$1 = state_35418;
var statearr_35437_35464 = state_35418__$1;
(statearr_35437_35464[(2)] = null);

(statearr_35437_35464[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35419 === (10))){
var inst_35410 = (state_35418[(2)]);
var state_35418__$1 = (function (){var statearr_35438 = state_35418;
(statearr_35438[(11)] = inst_35410);

return statearr_35438;
})();
var statearr_35439_35465 = state_35418__$1;
(statearr_35439_35465[(2)] = null);

(statearr_35439_35465[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35419 === (8))){
var inst_35377 = (state_35418[(9)]);
var inst_35381 = figwheel.client.reload_file_state_QMARK_.call(null,inst_35377,opts);
var state_35418__$1 = state_35418;
if(cljs.core.truth_(inst_35381)){
var statearr_35440_35466 = state_35418__$1;
(statearr_35440_35466[(1)] = (11));

} else {
var statearr_35441_35467 = state_35418__$1;
(statearr_35441_35467[(1)] = (12));

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
});})(c__27884__auto___35449,ch))
;
return ((function (switch__27772__auto__,c__27884__auto___35449,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__27773__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__27773__auto____0 = (function (){
var statearr_35445 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35445[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__27773__auto__);

(statearr_35445[(1)] = (1));

return statearr_35445;
});
var figwheel$client$file_reloader_plugin_$_state_machine__27773__auto____1 = (function (state_35418){
while(true){
var ret_value__27774__auto__ = (function (){try{while(true){
var result__27775__auto__ = switch__27772__auto__.call(null,state_35418);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27775__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27775__auto__;
}
break;
}
}catch (e35446){if((e35446 instanceof Object)){
var ex__27776__auto__ = e35446;
var statearr_35447_35468 = state_35418;
(statearr_35447_35468[(5)] = ex__27776__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35418);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35446;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27774__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35469 = state_35418;
state_35418 = G__35469;
continue;
} else {
return ret_value__27774__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__27773__auto__ = function(state_35418){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__27773__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__27773__auto____1.call(this,state_35418);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__27773__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__27773__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__27773__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__27773__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__27773__auto__;
})()
;})(switch__27772__auto__,c__27884__auto___35449,ch))
})();
var state__27886__auto__ = (function (){var statearr_35448 = f__27885__auto__.call(null);
(statearr_35448[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27884__auto___35449);

return statearr_35448;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27886__auto__);
});})(c__27884__auto___35449,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__35470_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__35470_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_35473 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_35473){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e35472){if((e35472 instanceof Error)){
var e = e35472;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_35473], null));
} else {
var e = e35472;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_35473))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__35474){
var map__35483 = p__35474;
var map__35483__$1 = ((((!((map__35483 == null)))?((((map__35483.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35483.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35483):map__35483);
var opts = map__35483__$1;
var build_id = cljs.core.get.call(null,map__35483__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__35483,map__35483__$1,opts,build_id){
return (function (p__35485){
var vec__35486 = p__35485;
var seq__35487 = cljs.core.seq.call(null,vec__35486);
var first__35488 = cljs.core.first.call(null,seq__35487);
var seq__35487__$1 = cljs.core.next.call(null,seq__35487);
var map__35489 = first__35488;
var map__35489__$1 = ((((!((map__35489 == null)))?((((map__35489.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35489.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35489):map__35489);
var msg = map__35489__$1;
var msg_name = cljs.core.get.call(null,map__35489__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__35487__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__35486,seq__35487,first__35488,seq__35487__$1,map__35489,map__35489__$1,msg,msg_name,_,map__35483,map__35483__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__35486,seq__35487,first__35488,seq__35487__$1,map__35489,map__35489__$1,msg,msg_name,_,map__35483,map__35483__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__35483,map__35483__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__35497){
var vec__35498 = p__35497;
var seq__35499 = cljs.core.seq.call(null,vec__35498);
var first__35500 = cljs.core.first.call(null,seq__35499);
var seq__35499__$1 = cljs.core.next.call(null,seq__35499);
var map__35501 = first__35500;
var map__35501__$1 = ((((!((map__35501 == null)))?((((map__35501.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35501.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35501):map__35501);
var msg = map__35501__$1;
var msg_name = cljs.core.get.call(null,map__35501__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__35499__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__35503){
var map__35515 = p__35503;
var map__35515__$1 = ((((!((map__35515 == null)))?((((map__35515.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35515.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35515):map__35515);
var on_compile_warning = cljs.core.get.call(null,map__35515__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__35515__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__35515,map__35515__$1,on_compile_warning,on_compile_fail){
return (function (p__35517){
var vec__35518 = p__35517;
var seq__35519 = cljs.core.seq.call(null,vec__35518);
var first__35520 = cljs.core.first.call(null,seq__35519);
var seq__35519__$1 = cljs.core.next.call(null,seq__35519);
var map__35521 = first__35520;
var map__35521__$1 = ((((!((map__35521 == null)))?((((map__35521.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35521.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35521):map__35521);
var msg = map__35521__$1;
var msg_name = cljs.core.get.call(null,map__35521__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__35519__$1;
var pred__35523 = cljs.core._EQ_;
var expr__35524 = msg_name;
if(cljs.core.truth_(pred__35523.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__35524))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__35523.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__35524))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__35515,map__35515__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__27884__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27884__auto__,msg_hist,msg_names,msg){
return (function (){
var f__27885__auto__ = (function (){var switch__27772__auto__ = ((function (c__27884__auto__,msg_hist,msg_names,msg){
return (function (state_35752){
var state_val_35753 = (state_35752[(1)]);
if((state_val_35753 === (7))){
var inst_35672 = (state_35752[(2)]);
var state_35752__$1 = state_35752;
if(cljs.core.truth_(inst_35672)){
var statearr_35754_35804 = state_35752__$1;
(statearr_35754_35804[(1)] = (8));

} else {
var statearr_35755_35805 = state_35752__$1;
(statearr_35755_35805[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35753 === (20))){
var inst_35746 = (state_35752[(2)]);
var state_35752__$1 = state_35752;
var statearr_35756_35806 = state_35752__$1;
(statearr_35756_35806[(2)] = inst_35746);

(statearr_35756_35806[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35753 === (27))){
var inst_35742 = (state_35752[(2)]);
var state_35752__$1 = state_35752;
var statearr_35757_35807 = state_35752__$1;
(statearr_35757_35807[(2)] = inst_35742);

(statearr_35757_35807[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35753 === (1))){
var inst_35665 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_35752__$1 = state_35752;
if(cljs.core.truth_(inst_35665)){
var statearr_35758_35808 = state_35752__$1;
(statearr_35758_35808[(1)] = (2));

} else {
var statearr_35759_35809 = state_35752__$1;
(statearr_35759_35809[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35753 === (24))){
var inst_35744 = (state_35752[(2)]);
var state_35752__$1 = state_35752;
var statearr_35760_35810 = state_35752__$1;
(statearr_35760_35810[(2)] = inst_35744);

(statearr_35760_35810[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35753 === (4))){
var inst_35750 = (state_35752[(2)]);
var state_35752__$1 = state_35752;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35752__$1,inst_35750);
} else {
if((state_val_35753 === (15))){
var inst_35748 = (state_35752[(2)]);
var state_35752__$1 = state_35752;
var statearr_35761_35811 = state_35752__$1;
(statearr_35761_35811[(2)] = inst_35748);

(statearr_35761_35811[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35753 === (21))){
var inst_35701 = (state_35752[(2)]);
var inst_35702 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_35703 = figwheel.client.auto_jump_to_error.call(null,opts,inst_35702);
var state_35752__$1 = (function (){var statearr_35762 = state_35752;
(statearr_35762[(7)] = inst_35701);

return statearr_35762;
})();
var statearr_35763_35812 = state_35752__$1;
(statearr_35763_35812[(2)] = inst_35703);

(statearr_35763_35812[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35753 === (31))){
var inst_35731 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_35752__$1 = state_35752;
if(cljs.core.truth_(inst_35731)){
var statearr_35764_35813 = state_35752__$1;
(statearr_35764_35813[(1)] = (34));

} else {
var statearr_35765_35814 = state_35752__$1;
(statearr_35765_35814[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35753 === (32))){
var inst_35740 = (state_35752[(2)]);
var state_35752__$1 = state_35752;
var statearr_35766_35815 = state_35752__$1;
(statearr_35766_35815[(2)] = inst_35740);

(statearr_35766_35815[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35753 === (33))){
var inst_35727 = (state_35752[(2)]);
var inst_35728 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_35729 = figwheel.client.auto_jump_to_error.call(null,opts,inst_35728);
var state_35752__$1 = (function (){var statearr_35767 = state_35752;
(statearr_35767[(8)] = inst_35727);

return statearr_35767;
})();
var statearr_35768_35816 = state_35752__$1;
(statearr_35768_35816[(2)] = inst_35729);

(statearr_35768_35816[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35753 === (13))){
var inst_35686 = figwheel.client.heads_up.clear.call(null);
var state_35752__$1 = state_35752;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35752__$1,(16),inst_35686);
} else {
if((state_val_35753 === (22))){
var inst_35707 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_35708 = figwheel.client.heads_up.append_warning_message.call(null,inst_35707);
var state_35752__$1 = state_35752;
var statearr_35769_35817 = state_35752__$1;
(statearr_35769_35817[(2)] = inst_35708);

(statearr_35769_35817[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35753 === (36))){
var inst_35738 = (state_35752[(2)]);
var state_35752__$1 = state_35752;
var statearr_35770_35818 = state_35752__$1;
(statearr_35770_35818[(2)] = inst_35738);

(statearr_35770_35818[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35753 === (29))){
var inst_35718 = (state_35752[(2)]);
var inst_35719 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_35720 = figwheel.client.auto_jump_to_error.call(null,opts,inst_35719);
var state_35752__$1 = (function (){var statearr_35771 = state_35752;
(statearr_35771[(9)] = inst_35718);

return statearr_35771;
})();
var statearr_35772_35819 = state_35752__$1;
(statearr_35772_35819[(2)] = inst_35720);

(statearr_35772_35819[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35753 === (6))){
var inst_35667 = (state_35752[(10)]);
var state_35752__$1 = state_35752;
var statearr_35773_35820 = state_35752__$1;
(statearr_35773_35820[(2)] = inst_35667);

(statearr_35773_35820[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35753 === (28))){
var inst_35714 = (state_35752[(2)]);
var inst_35715 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_35716 = figwheel.client.heads_up.display_warning.call(null,inst_35715);
var state_35752__$1 = (function (){var statearr_35774 = state_35752;
(statearr_35774[(11)] = inst_35714);

return statearr_35774;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35752__$1,(29),inst_35716);
} else {
if((state_val_35753 === (25))){
var inst_35712 = figwheel.client.heads_up.clear.call(null);
var state_35752__$1 = state_35752;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35752__$1,(28),inst_35712);
} else {
if((state_val_35753 === (34))){
var inst_35733 = figwheel.client.heads_up.flash_loaded.call(null);
var state_35752__$1 = state_35752;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35752__$1,(37),inst_35733);
} else {
if((state_val_35753 === (17))){
var inst_35692 = (state_35752[(2)]);
var inst_35693 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_35694 = figwheel.client.auto_jump_to_error.call(null,opts,inst_35693);
var state_35752__$1 = (function (){var statearr_35775 = state_35752;
(statearr_35775[(12)] = inst_35692);

return statearr_35775;
})();
var statearr_35776_35821 = state_35752__$1;
(statearr_35776_35821[(2)] = inst_35694);

(statearr_35776_35821[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35753 === (3))){
var inst_35684 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_35752__$1 = state_35752;
if(cljs.core.truth_(inst_35684)){
var statearr_35777_35822 = state_35752__$1;
(statearr_35777_35822[(1)] = (13));

} else {
var statearr_35778_35823 = state_35752__$1;
(statearr_35778_35823[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35753 === (12))){
var inst_35680 = (state_35752[(2)]);
var state_35752__$1 = state_35752;
var statearr_35779_35824 = state_35752__$1;
(statearr_35779_35824[(2)] = inst_35680);

(statearr_35779_35824[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35753 === (2))){
var inst_35667 = (state_35752[(10)]);
var inst_35667__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_35752__$1 = (function (){var statearr_35780 = state_35752;
(statearr_35780[(10)] = inst_35667__$1);

return statearr_35780;
})();
if(cljs.core.truth_(inst_35667__$1)){
var statearr_35781_35825 = state_35752__$1;
(statearr_35781_35825[(1)] = (5));

} else {
var statearr_35782_35826 = state_35752__$1;
(statearr_35782_35826[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35753 === (23))){
var inst_35710 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_35752__$1 = state_35752;
if(cljs.core.truth_(inst_35710)){
var statearr_35783_35827 = state_35752__$1;
(statearr_35783_35827[(1)] = (25));

} else {
var statearr_35784_35828 = state_35752__$1;
(statearr_35784_35828[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35753 === (35))){
var state_35752__$1 = state_35752;
var statearr_35785_35829 = state_35752__$1;
(statearr_35785_35829[(2)] = null);

(statearr_35785_35829[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35753 === (19))){
var inst_35705 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_35752__$1 = state_35752;
if(cljs.core.truth_(inst_35705)){
var statearr_35786_35830 = state_35752__$1;
(statearr_35786_35830[(1)] = (22));

} else {
var statearr_35787_35831 = state_35752__$1;
(statearr_35787_35831[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35753 === (11))){
var inst_35676 = (state_35752[(2)]);
var state_35752__$1 = state_35752;
var statearr_35788_35832 = state_35752__$1;
(statearr_35788_35832[(2)] = inst_35676);

(statearr_35788_35832[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35753 === (9))){
var inst_35678 = figwheel.client.heads_up.clear.call(null);
var state_35752__$1 = state_35752;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35752__$1,(12),inst_35678);
} else {
if((state_val_35753 === (5))){
var inst_35669 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_35752__$1 = state_35752;
var statearr_35789_35833 = state_35752__$1;
(statearr_35789_35833[(2)] = inst_35669);

(statearr_35789_35833[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35753 === (14))){
var inst_35696 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_35752__$1 = state_35752;
if(cljs.core.truth_(inst_35696)){
var statearr_35790_35834 = state_35752__$1;
(statearr_35790_35834[(1)] = (18));

} else {
var statearr_35791_35835 = state_35752__$1;
(statearr_35791_35835[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35753 === (26))){
var inst_35722 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_35752__$1 = state_35752;
if(cljs.core.truth_(inst_35722)){
var statearr_35792_35836 = state_35752__$1;
(statearr_35792_35836[(1)] = (30));

} else {
var statearr_35793_35837 = state_35752__$1;
(statearr_35793_35837[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35753 === (16))){
var inst_35688 = (state_35752[(2)]);
var inst_35689 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_35690 = figwheel.client.heads_up.display_exception.call(null,inst_35689);
var state_35752__$1 = (function (){var statearr_35794 = state_35752;
(statearr_35794[(13)] = inst_35688);

return statearr_35794;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35752__$1,(17),inst_35690);
} else {
if((state_val_35753 === (30))){
var inst_35724 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_35725 = figwheel.client.heads_up.display_warning.call(null,inst_35724);
var state_35752__$1 = state_35752;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35752__$1,(33),inst_35725);
} else {
if((state_val_35753 === (10))){
var inst_35682 = (state_35752[(2)]);
var state_35752__$1 = state_35752;
var statearr_35795_35838 = state_35752__$1;
(statearr_35795_35838[(2)] = inst_35682);

(statearr_35795_35838[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35753 === (18))){
var inst_35698 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_35699 = figwheel.client.heads_up.display_exception.call(null,inst_35698);
var state_35752__$1 = state_35752;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35752__$1,(21),inst_35699);
} else {
if((state_val_35753 === (37))){
var inst_35735 = (state_35752[(2)]);
var state_35752__$1 = state_35752;
var statearr_35796_35839 = state_35752__$1;
(statearr_35796_35839[(2)] = inst_35735);

(statearr_35796_35839[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35753 === (8))){
var inst_35674 = figwheel.client.heads_up.flash_loaded.call(null);
var state_35752__$1 = state_35752;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35752__$1,(11),inst_35674);
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
});})(c__27884__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__27772__auto__,c__27884__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27773__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27773__auto____0 = (function (){
var statearr_35800 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35800[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27773__auto__);

(statearr_35800[(1)] = (1));

return statearr_35800;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27773__auto____1 = (function (state_35752){
while(true){
var ret_value__27774__auto__ = (function (){try{while(true){
var result__27775__auto__ = switch__27772__auto__.call(null,state_35752);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27775__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27775__auto__;
}
break;
}
}catch (e35801){if((e35801 instanceof Object)){
var ex__27776__auto__ = e35801;
var statearr_35802_35840 = state_35752;
(statearr_35802_35840[(5)] = ex__27776__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35752);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35801;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27774__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35841 = state_35752;
state_35752 = G__35841;
continue;
} else {
return ret_value__27774__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27773__auto__ = function(state_35752){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27773__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27773__auto____1.call(this,state_35752);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27773__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27773__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27773__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27773__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27773__auto__;
})()
;})(switch__27772__auto__,c__27884__auto__,msg_hist,msg_names,msg))
})();
var state__27886__auto__ = (function (){var statearr_35803 = f__27885__auto__.call(null);
(statearr_35803[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27884__auto__);

return statearr_35803;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27886__auto__);
});})(c__27884__auto__,msg_hist,msg_names,msg))
);

return c__27884__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__27884__auto___35904 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27884__auto___35904,ch){
return (function (){
var f__27885__auto__ = (function (){var switch__27772__auto__ = ((function (c__27884__auto___35904,ch){
return (function (state_35887){
var state_val_35888 = (state_35887[(1)]);
if((state_val_35888 === (1))){
var state_35887__$1 = state_35887;
var statearr_35889_35905 = state_35887__$1;
(statearr_35889_35905[(2)] = null);

(statearr_35889_35905[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35888 === (2))){
var state_35887__$1 = state_35887;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35887__$1,(4),ch);
} else {
if((state_val_35888 === (3))){
var inst_35885 = (state_35887[(2)]);
var state_35887__$1 = state_35887;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35887__$1,inst_35885);
} else {
if((state_val_35888 === (4))){
var inst_35875 = (state_35887[(7)]);
var inst_35875__$1 = (state_35887[(2)]);
var state_35887__$1 = (function (){var statearr_35890 = state_35887;
(statearr_35890[(7)] = inst_35875__$1);

return statearr_35890;
})();
if(cljs.core.truth_(inst_35875__$1)){
var statearr_35891_35906 = state_35887__$1;
(statearr_35891_35906[(1)] = (5));

} else {
var statearr_35892_35907 = state_35887__$1;
(statearr_35892_35907[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35888 === (5))){
var inst_35875 = (state_35887[(7)]);
var inst_35877 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_35875);
var state_35887__$1 = state_35887;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35887__$1,(8),inst_35877);
} else {
if((state_val_35888 === (6))){
var state_35887__$1 = state_35887;
var statearr_35893_35908 = state_35887__$1;
(statearr_35893_35908[(2)] = null);

(statearr_35893_35908[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35888 === (7))){
var inst_35883 = (state_35887[(2)]);
var state_35887__$1 = state_35887;
var statearr_35894_35909 = state_35887__$1;
(statearr_35894_35909[(2)] = inst_35883);

(statearr_35894_35909[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35888 === (8))){
var inst_35879 = (state_35887[(2)]);
var state_35887__$1 = (function (){var statearr_35895 = state_35887;
(statearr_35895[(8)] = inst_35879);

return statearr_35895;
})();
var statearr_35896_35910 = state_35887__$1;
(statearr_35896_35910[(2)] = null);

(statearr_35896_35910[(1)] = (2));


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
});})(c__27884__auto___35904,ch))
;
return ((function (switch__27772__auto__,c__27884__auto___35904,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__27773__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__27773__auto____0 = (function (){
var statearr_35900 = [null,null,null,null,null,null,null,null,null];
(statearr_35900[(0)] = figwheel$client$heads_up_plugin_$_state_machine__27773__auto__);

(statearr_35900[(1)] = (1));

return statearr_35900;
});
var figwheel$client$heads_up_plugin_$_state_machine__27773__auto____1 = (function (state_35887){
while(true){
var ret_value__27774__auto__ = (function (){try{while(true){
var result__27775__auto__ = switch__27772__auto__.call(null,state_35887);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27775__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27775__auto__;
}
break;
}
}catch (e35901){if((e35901 instanceof Object)){
var ex__27776__auto__ = e35901;
var statearr_35902_35911 = state_35887;
(statearr_35902_35911[(5)] = ex__27776__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35887);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35901;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27774__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35912 = state_35887;
state_35887 = G__35912;
continue;
} else {
return ret_value__27774__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__27773__auto__ = function(state_35887){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__27773__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__27773__auto____1.call(this,state_35887);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__27773__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__27773__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__27773__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__27773__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__27773__auto__;
})()
;})(switch__27772__auto__,c__27884__auto___35904,ch))
})();
var state__27886__auto__ = (function (){var statearr_35903 = f__27885__auto__.call(null);
(statearr_35903[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27884__auto___35904);

return statearr_35903;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27886__auto__);
});})(c__27884__auto___35904,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__27884__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27884__auto__){
return (function (){
var f__27885__auto__ = (function (){var switch__27772__auto__ = ((function (c__27884__auto__){
return (function (state_35933){
var state_val_35934 = (state_35933[(1)]);
if((state_val_35934 === (1))){
var inst_35928 = cljs.core.async.timeout.call(null,(3000));
var state_35933__$1 = state_35933;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35933__$1,(2),inst_35928);
} else {
if((state_val_35934 === (2))){
var inst_35930 = (state_35933[(2)]);
var inst_35931 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_35933__$1 = (function (){var statearr_35935 = state_35933;
(statearr_35935[(7)] = inst_35930);

return statearr_35935;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35933__$1,inst_35931);
} else {
return null;
}
}
});})(c__27884__auto__))
;
return ((function (switch__27772__auto__,c__27884__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__27773__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__27773__auto____0 = (function (){
var statearr_35939 = [null,null,null,null,null,null,null,null];
(statearr_35939[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__27773__auto__);

(statearr_35939[(1)] = (1));

return statearr_35939;
});
var figwheel$client$enforce_project_plugin_$_state_machine__27773__auto____1 = (function (state_35933){
while(true){
var ret_value__27774__auto__ = (function (){try{while(true){
var result__27775__auto__ = switch__27772__auto__.call(null,state_35933);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27775__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27775__auto__;
}
break;
}
}catch (e35940){if((e35940 instanceof Object)){
var ex__27776__auto__ = e35940;
var statearr_35941_35943 = state_35933;
(statearr_35941_35943[(5)] = ex__27776__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35933);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35940;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27774__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35944 = state_35933;
state_35933 = G__35944;
continue;
} else {
return ret_value__27774__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__27773__auto__ = function(state_35933){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__27773__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__27773__auto____1.call(this,state_35933);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__27773__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__27773__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__27773__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__27773__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__27773__auto__;
})()
;})(switch__27772__auto__,c__27884__auto__))
})();
var state__27886__auto__ = (function (){var statearr_35942 = f__27885__auto__.call(null);
(statearr_35942[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27884__auto__);

return statearr_35942;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27886__auto__);
});})(c__27884__auto__))
);

return c__27884__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__4657__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__4657__auto__)){
var figwheel_version = temp__4657__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__27884__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27884__auto__,figwheel_version,temp__4657__auto__){
return (function (){
var f__27885__auto__ = (function (){var switch__27772__auto__ = ((function (c__27884__auto__,figwheel_version,temp__4657__auto__){
return (function (state_35967){
var state_val_35968 = (state_35967[(1)]);
if((state_val_35968 === (1))){
var inst_35961 = cljs.core.async.timeout.call(null,(2000));
var state_35967__$1 = state_35967;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35967__$1,(2),inst_35961);
} else {
if((state_val_35968 === (2))){
var inst_35963 = (state_35967[(2)]);
var inst_35964 = [cljs.core.str("Figwheel Client Version <strong>"),cljs.core.str(figwheel.client._figwheel_version_),cljs.core.str("</strong> is not equal to "),cljs.core.str("Figwheel Sidecar Version <strong>"),cljs.core.str(figwheel_version),cljs.core.str("</strong>"),cljs.core.str(".  Shutting down Websocket Connection!"),cljs.core.str("<h4>To fix try:</h4>"),cljs.core.str("<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>"),cljs.core.str("<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>"),cljs.core.str("<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>")].join('');
var inst_35965 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_35964);
var state_35967__$1 = (function (){var statearr_35969 = state_35967;
(statearr_35969[(7)] = inst_35963);

return statearr_35969;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35967__$1,inst_35965);
} else {
return null;
}
}
});})(c__27884__auto__,figwheel_version,temp__4657__auto__))
;
return ((function (switch__27772__auto__,c__27884__auto__,figwheel_version,temp__4657__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27773__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27773__auto____0 = (function (){
var statearr_35973 = [null,null,null,null,null,null,null,null];
(statearr_35973[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27773__auto__);

(statearr_35973[(1)] = (1));

return statearr_35973;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27773__auto____1 = (function (state_35967){
while(true){
var ret_value__27774__auto__ = (function (){try{while(true){
var result__27775__auto__ = switch__27772__auto__.call(null,state_35967);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27775__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27775__auto__;
}
break;
}
}catch (e35974){if((e35974 instanceof Object)){
var ex__27776__auto__ = e35974;
var statearr_35975_35977 = state_35967;
(statearr_35975_35977[(5)] = ex__27776__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35967);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35974;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27774__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35978 = state_35967;
state_35967 = G__35978;
continue;
} else {
return ret_value__27774__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27773__auto__ = function(state_35967){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27773__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27773__auto____1.call(this,state_35967);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27773__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27773__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27773__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27773__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27773__auto__;
})()
;})(switch__27772__auto__,c__27884__auto__,figwheel_version,temp__4657__auto__))
})();
var state__27886__auto__ = (function (){var statearr_35976 = f__27885__auto__.call(null);
(statearr_35976[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27884__auto__);

return statearr_35976;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27886__auto__);
});})(c__27884__auto__,figwheel_version,temp__4657__auto__))
);

return c__27884__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__35979){
var map__35983 = p__35979;
var map__35983__$1 = ((((!((map__35983 == null)))?((((map__35983.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35983.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35983):map__35983);
var file = cljs.core.get.call(null,map__35983__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__35983__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__35983__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__35985 = "";
var G__35985__$1 = (cljs.core.truth_(file)?[cljs.core.str(G__35985),cljs.core.str("file "),cljs.core.str(file)].join(''):G__35985);
var G__35985__$2 = (cljs.core.truth_(line)?[cljs.core.str(G__35985__$1),cljs.core.str(" at line "),cljs.core.str(line)].join(''):G__35985__$1);
if(cljs.core.truth_((function (){var and__24749__auto__ = line;
if(cljs.core.truth_(and__24749__auto__)){
return column;
} else {
return and__24749__auto__;
}
})())){
return [cljs.core.str(G__35985__$2),cljs.core.str(", column "),cljs.core.str(column)].join('');
} else {
return G__35985__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__35986){
var map__35993 = p__35986;
var map__35993__$1 = ((((!((map__35993 == null)))?((((map__35993.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35993.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35993):map__35993);
var ed = map__35993__$1;
var formatted_exception = cljs.core.get.call(null,map__35993__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__35993__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__35993__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__35995_35999 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__35996_36000 = null;
var count__35997_36001 = (0);
var i__35998_36002 = (0);
while(true){
if((i__35998_36002 < count__35997_36001)){
var msg_36003 = cljs.core._nth.call(null,chunk__35996_36000,i__35998_36002);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_36003);

var G__36004 = seq__35995_35999;
var G__36005 = chunk__35996_36000;
var G__36006 = count__35997_36001;
var G__36007 = (i__35998_36002 + (1));
seq__35995_35999 = G__36004;
chunk__35996_36000 = G__36005;
count__35997_36001 = G__36006;
i__35998_36002 = G__36007;
continue;
} else {
var temp__4657__auto___36008 = cljs.core.seq.call(null,seq__35995_35999);
if(temp__4657__auto___36008){
var seq__35995_36009__$1 = temp__4657__auto___36008;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35995_36009__$1)){
var c__25572__auto___36010 = cljs.core.chunk_first.call(null,seq__35995_36009__$1);
var G__36011 = cljs.core.chunk_rest.call(null,seq__35995_36009__$1);
var G__36012 = c__25572__auto___36010;
var G__36013 = cljs.core.count.call(null,c__25572__auto___36010);
var G__36014 = (0);
seq__35995_35999 = G__36011;
chunk__35996_36000 = G__36012;
count__35997_36001 = G__36013;
i__35998_36002 = G__36014;
continue;
} else {
var msg_36015 = cljs.core.first.call(null,seq__35995_36009__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_36015);

var G__36016 = cljs.core.next.call(null,seq__35995_36009__$1);
var G__36017 = null;
var G__36018 = (0);
var G__36019 = (0);
seq__35995_35999 = G__36016;
chunk__35996_36000 = G__36017;
count__35997_36001 = G__36018;
i__35998_36002 = G__36019;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on "),cljs.core.str(figwheel.client.file_line_column.call(null,ed))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__36020){
var map__36023 = p__36020;
var map__36023__$1 = ((((!((map__36023 == null)))?((((map__36023.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36023.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36023):map__36023);
var w = map__36023__$1;
var message = cljs.core.get.call(null,map__36023__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message)),cljs.core.str(" in "),cljs.core.str(figwheel.client.file_line_column.call(null,message))].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources\\public\\cljs\\out\\figwheel\\client.cljs",33,1,336,336,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources\\public\\cljs\\out\\figwheel\\client.cljs",30,1,328,328,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__24749__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__24749__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__24749__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__36035 = cljs.core.seq.call(null,plugins);
var chunk__36036 = null;
var count__36037 = (0);
var i__36038 = (0);
while(true){
if((i__36038 < count__36037)){
var vec__36039 = cljs.core._nth.call(null,chunk__36036,i__36038);
var k = cljs.core.nth.call(null,vec__36039,(0),null);
var plugin = cljs.core.nth.call(null,vec__36039,(1),null);
if(cljs.core.truth_(plugin)){
var pl_36045 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__36035,chunk__36036,count__36037,i__36038,pl_36045,vec__36039,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_36045.call(null,msg_hist);
});})(seq__36035,chunk__36036,count__36037,i__36038,pl_36045,vec__36039,k,plugin))
);
} else {
}

var G__36046 = seq__36035;
var G__36047 = chunk__36036;
var G__36048 = count__36037;
var G__36049 = (i__36038 + (1));
seq__36035 = G__36046;
chunk__36036 = G__36047;
count__36037 = G__36048;
i__36038 = G__36049;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__36035);
if(temp__4657__auto__){
var seq__36035__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36035__$1)){
var c__25572__auto__ = cljs.core.chunk_first.call(null,seq__36035__$1);
var G__36050 = cljs.core.chunk_rest.call(null,seq__36035__$1);
var G__36051 = c__25572__auto__;
var G__36052 = cljs.core.count.call(null,c__25572__auto__);
var G__36053 = (0);
seq__36035 = G__36050;
chunk__36036 = G__36051;
count__36037 = G__36052;
i__36038 = G__36053;
continue;
} else {
var vec__36042 = cljs.core.first.call(null,seq__36035__$1);
var k = cljs.core.nth.call(null,vec__36042,(0),null);
var plugin = cljs.core.nth.call(null,vec__36042,(1),null);
if(cljs.core.truth_(plugin)){
var pl_36054 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__36035,chunk__36036,count__36037,i__36038,pl_36054,vec__36042,k,plugin,seq__36035__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_36054.call(null,msg_hist);
});})(seq__36035,chunk__36036,count__36037,i__36038,pl_36054,vec__36042,k,plugin,seq__36035__$1,temp__4657__auto__))
);
} else {
}

var G__36055 = cljs.core.next.call(null,seq__36035__$1);
var G__36056 = null;
var G__36057 = (0);
var G__36058 = (0);
seq__36035 = G__36055;
chunk__36036 = G__36056;
count__36037 = G__36057;
i__36038 = G__36058;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var args36059 = [];
var len__25836__auto___36066 = arguments.length;
var i__25837__auto___36067 = (0);
while(true){
if((i__25837__auto___36067 < len__25836__auto___36066)){
args36059.push((arguments[i__25837__auto___36067]));

var G__36068 = (i__25837__auto___36067 + (1));
i__25837__auto___36067 = G__36068;
continue;
} else {
}
break;
}

var G__36061 = args36059.length;
switch (G__36061) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36059.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__36062_36070 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__36063_36071 = null;
var count__36064_36072 = (0);
var i__36065_36073 = (0);
while(true){
if((i__36065_36073 < count__36064_36072)){
var msg_36074 = cljs.core._nth.call(null,chunk__36063_36071,i__36065_36073);
figwheel.client.socket.handle_incoming_message.call(null,msg_36074);

var G__36075 = seq__36062_36070;
var G__36076 = chunk__36063_36071;
var G__36077 = count__36064_36072;
var G__36078 = (i__36065_36073 + (1));
seq__36062_36070 = G__36075;
chunk__36063_36071 = G__36076;
count__36064_36072 = G__36077;
i__36065_36073 = G__36078;
continue;
} else {
var temp__4657__auto___36079 = cljs.core.seq.call(null,seq__36062_36070);
if(temp__4657__auto___36079){
var seq__36062_36080__$1 = temp__4657__auto___36079;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36062_36080__$1)){
var c__25572__auto___36081 = cljs.core.chunk_first.call(null,seq__36062_36080__$1);
var G__36082 = cljs.core.chunk_rest.call(null,seq__36062_36080__$1);
var G__36083 = c__25572__auto___36081;
var G__36084 = cljs.core.count.call(null,c__25572__auto___36081);
var G__36085 = (0);
seq__36062_36070 = G__36082;
chunk__36063_36071 = G__36083;
count__36064_36072 = G__36084;
i__36065_36073 = G__36085;
continue;
} else {
var msg_36086 = cljs.core.first.call(null,seq__36062_36080__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_36086);

var G__36087 = cljs.core.next.call(null,seq__36062_36080__$1);
var G__36088 = null;
var G__36089 = (0);
var G__36090 = (0);
seq__36062_36070 = G__36087;
chunk__36063_36071 = G__36088;
count__36064_36072 = G__36089;
i__36065_36073 = G__36090;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__25843__auto__ = [];
var len__25836__auto___36095 = arguments.length;
var i__25837__auto___36096 = (0);
while(true){
if((i__25837__auto___36096 < len__25836__auto___36095)){
args__25843__auto__.push((arguments[i__25837__auto___36096]));

var G__36097 = (i__25837__auto___36096 + (1));
i__25837__auto___36096 = G__36097;
continue;
} else {
}
break;
}

var argseq__25844__auto__ = ((((0) < args__25843__auto__.length))?(new cljs.core.IndexedSeq(args__25843__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__25844__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__36092){
var map__36093 = p__36092;
var map__36093__$1 = ((((!((map__36093 == null)))?((((map__36093.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36093.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36093):map__36093);
var opts = map__36093__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq36091){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36091));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e36099){if((e36099 instanceof Error)){
var e = e36099;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e36099;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__36103){
var map__36104 = p__36103;
var map__36104__$1 = ((((!((map__36104 == null)))?((((map__36104.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36104.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36104):map__36104);
var msg_name = cljs.core.get.call(null,map__36104__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1520626838571