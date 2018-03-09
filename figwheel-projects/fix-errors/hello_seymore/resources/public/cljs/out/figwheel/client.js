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
var args35260 = [];
var len__25835__auto___35263 = arguments.length;
var i__25836__auto___35264 = (0);
while(true){
if((i__25836__auto___35264 < len__25835__auto___35263)){
args35260.push((arguments[i__25836__auto___35264]));

var G__35265 = (i__25836__auto___35264 + (1));
i__25836__auto___35264 = G__35265;
continue;
} else {
}
break;
}

var G__35262 = args35260.length;
switch (G__35262) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35260.length)].join('')));

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
var args__25842__auto__ = [];
var len__25835__auto___35268 = arguments.length;
var i__25836__auto___35269 = (0);
while(true){
if((i__25836__auto___35269 < len__25835__auto___35268)){
args__25842__auto__.push((arguments[i__25836__auto___35269]));

var G__35270 = (i__25836__auto___35269 + (1));
i__25836__auto___35269 = G__35270;
continue;
} else {
}
break;
}

var argseq__25843__auto__ = ((((0) < args__25842__auto__.length))?(new cljs.core.IndexedSeq(args__25842__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__25843__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq35267){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35267));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__25842__auto__ = [];
var len__25835__auto___35272 = arguments.length;
var i__25836__auto___35273 = (0);
while(true){
if((i__25836__auto___35273 < len__25835__auto___35272)){
args__25842__auto__.push((arguments[i__25836__auto___35273]));

var G__35274 = (i__25836__auto___35273 + (1));
i__25836__auto___35273 = G__35274;
continue;
} else {
}
break;
}

var argseq__25843__auto__ = ((((0) < args__25842__auto__.length))?(new cljs.core.IndexedSeq(args__25842__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__25843__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq35271){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35271));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?(function (){
var pred__35275 = cljs.core._EQ_;
var expr__35276 = (function (){var or__24760__auto__ = (function (){try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
return localStorage.getItem("figwheel_autoload");
} else {
return null;
}
}catch (e35279){if((e35279 instanceof Error)){
var e = e35279;
return false;
} else {
throw e35279;

}
}})();
if(cljs.core.truth_(or__24760__auto__)){
return or__24760__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__35275.call(null,"true",expr__35276))){
return true;
} else {
if(cljs.core.truth_(pred__35275.call(null,"false",expr__35276))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__35276)].join('')));
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
}catch (e35281){if((e35281 instanceof Error)){
var e = e35281;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Unable to access localStorage")].join(''));
} else {
throw e35281;

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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__35282){
var map__35285 = p__35282;
var map__35285__$1 = ((((!((map__35285 == null)))?((((map__35285.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35285.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35285):map__35285);
var message = cljs.core.get.call(null,map__35285__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__35285__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__24760__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__24760__auto__)){
return or__24760__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__24748__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__24748__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__24748__auto__;
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
var c__27881__auto___35447 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27881__auto___35447,ch){
return (function (){
var f__27882__auto__ = (function (){var switch__27769__auto__ = ((function (c__27881__auto___35447,ch){
return (function (state_35416){
var state_val_35417 = (state_35416[(1)]);
if((state_val_35417 === (7))){
var inst_35412 = (state_35416[(2)]);
var state_35416__$1 = state_35416;
var statearr_35418_35448 = state_35416__$1;
(statearr_35418_35448[(2)] = inst_35412);

(statearr_35418_35448[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35417 === (1))){
var state_35416__$1 = state_35416;
var statearr_35419_35449 = state_35416__$1;
(statearr_35419_35449[(2)] = null);

(statearr_35419_35449[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35417 === (4))){
var inst_35369 = (state_35416[(7)]);
var inst_35369__$1 = (state_35416[(2)]);
var state_35416__$1 = (function (){var statearr_35420 = state_35416;
(statearr_35420[(7)] = inst_35369__$1);

return statearr_35420;
})();
if(cljs.core.truth_(inst_35369__$1)){
var statearr_35421_35450 = state_35416__$1;
(statearr_35421_35450[(1)] = (5));

} else {
var statearr_35422_35451 = state_35416__$1;
(statearr_35422_35451[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35417 === (15))){
var inst_35376 = (state_35416[(8)]);
var inst_35391 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_35376);
var inst_35392 = cljs.core.first.call(null,inst_35391);
var inst_35393 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_35392);
var inst_35394 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_35393)].join('');
var inst_35395 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_35394);
var state_35416__$1 = state_35416;
var statearr_35423_35452 = state_35416__$1;
(statearr_35423_35452[(2)] = inst_35395);

(statearr_35423_35452[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35417 === (13))){
var inst_35400 = (state_35416[(2)]);
var state_35416__$1 = state_35416;
var statearr_35424_35453 = state_35416__$1;
(statearr_35424_35453[(2)] = inst_35400);

(statearr_35424_35453[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35417 === (6))){
var state_35416__$1 = state_35416;
var statearr_35425_35454 = state_35416__$1;
(statearr_35425_35454[(2)] = null);

(statearr_35425_35454[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35417 === (17))){
var inst_35398 = (state_35416[(2)]);
var state_35416__$1 = state_35416;
var statearr_35426_35455 = state_35416__$1;
(statearr_35426_35455[(2)] = inst_35398);

(statearr_35426_35455[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35417 === (3))){
var inst_35414 = (state_35416[(2)]);
var state_35416__$1 = state_35416;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35416__$1,inst_35414);
} else {
if((state_val_35417 === (12))){
var inst_35375 = (state_35416[(9)]);
var inst_35389 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_35375,opts);
var state_35416__$1 = state_35416;
if(cljs.core.truth_(inst_35389)){
var statearr_35427_35456 = state_35416__$1;
(statearr_35427_35456[(1)] = (15));

} else {
var statearr_35428_35457 = state_35416__$1;
(statearr_35428_35457[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35417 === (2))){
var state_35416__$1 = state_35416;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35416__$1,(4),ch);
} else {
if((state_val_35417 === (11))){
var inst_35376 = (state_35416[(8)]);
var inst_35381 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_35382 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_35376);
var inst_35383 = cljs.core.async.timeout.call(null,(1000));
var inst_35384 = [inst_35382,inst_35383];
var inst_35385 = (new cljs.core.PersistentVector(null,2,(5),inst_35381,inst_35384,null));
var state_35416__$1 = state_35416;
return cljs.core.async.ioc_alts_BANG_.call(null,state_35416__$1,(14),inst_35385);
} else {
if((state_val_35417 === (9))){
var inst_35376 = (state_35416[(8)]);
var inst_35402 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_35403 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_35376);
var inst_35404 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_35403);
var inst_35405 = [cljs.core.str("Not loading: "),cljs.core.str(inst_35404)].join('');
var inst_35406 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_35405);
var state_35416__$1 = (function (){var statearr_35429 = state_35416;
(statearr_35429[(10)] = inst_35402);

return statearr_35429;
})();
var statearr_35430_35458 = state_35416__$1;
(statearr_35430_35458[(2)] = inst_35406);

(statearr_35430_35458[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35417 === (5))){
var inst_35369 = (state_35416[(7)]);
var inst_35371 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_35372 = (new cljs.core.PersistentArrayMap(null,2,inst_35371,null));
var inst_35373 = (new cljs.core.PersistentHashSet(null,inst_35372,null));
var inst_35374 = figwheel.client.focus_msgs.call(null,inst_35373,inst_35369);
var inst_35375 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_35374);
var inst_35376 = cljs.core.first.call(null,inst_35374);
var inst_35377 = figwheel.client.autoload_QMARK_.call(null);
var state_35416__$1 = (function (){var statearr_35431 = state_35416;
(statearr_35431[(8)] = inst_35376);

(statearr_35431[(9)] = inst_35375);

return statearr_35431;
})();
if(cljs.core.truth_(inst_35377)){
var statearr_35432_35459 = state_35416__$1;
(statearr_35432_35459[(1)] = (8));

} else {
var statearr_35433_35460 = state_35416__$1;
(statearr_35433_35460[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35417 === (14))){
var inst_35387 = (state_35416[(2)]);
var state_35416__$1 = state_35416;
var statearr_35434_35461 = state_35416__$1;
(statearr_35434_35461[(2)] = inst_35387);

(statearr_35434_35461[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35417 === (16))){
var state_35416__$1 = state_35416;
var statearr_35435_35462 = state_35416__$1;
(statearr_35435_35462[(2)] = null);

(statearr_35435_35462[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35417 === (10))){
var inst_35408 = (state_35416[(2)]);
var state_35416__$1 = (function (){var statearr_35436 = state_35416;
(statearr_35436[(11)] = inst_35408);

return statearr_35436;
})();
var statearr_35437_35463 = state_35416__$1;
(statearr_35437_35463[(2)] = null);

(statearr_35437_35463[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35417 === (8))){
var inst_35375 = (state_35416[(9)]);
var inst_35379 = figwheel.client.reload_file_state_QMARK_.call(null,inst_35375,opts);
var state_35416__$1 = state_35416;
if(cljs.core.truth_(inst_35379)){
var statearr_35438_35464 = state_35416__$1;
(statearr_35438_35464[(1)] = (11));

} else {
var statearr_35439_35465 = state_35416__$1;
(statearr_35439_35465[(1)] = (12));

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
});})(c__27881__auto___35447,ch))
;
return ((function (switch__27769__auto__,c__27881__auto___35447,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__27770__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__27770__auto____0 = (function (){
var statearr_35443 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35443[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__27770__auto__);

(statearr_35443[(1)] = (1));

return statearr_35443;
});
var figwheel$client$file_reloader_plugin_$_state_machine__27770__auto____1 = (function (state_35416){
while(true){
var ret_value__27771__auto__ = (function (){try{while(true){
var result__27772__auto__ = switch__27769__auto__.call(null,state_35416);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27772__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27772__auto__;
}
break;
}
}catch (e35444){if((e35444 instanceof Object)){
var ex__27773__auto__ = e35444;
var statearr_35445_35466 = state_35416;
(statearr_35445_35466[(5)] = ex__27773__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35416);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35444;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27771__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35467 = state_35416;
state_35416 = G__35467;
continue;
} else {
return ret_value__27771__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__27770__auto__ = function(state_35416){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__27770__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__27770__auto____1.call(this,state_35416);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__27770__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__27770__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__27770__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__27770__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__27770__auto__;
})()
;})(switch__27769__auto__,c__27881__auto___35447,ch))
})();
var state__27883__auto__ = (function (){var statearr_35446 = f__27882__auto__.call(null);
(statearr_35446[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27881__auto___35447);

return statearr_35446;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27883__auto__);
});})(c__27881__auto___35447,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__35468_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__35468_SHARP_));
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
var base_path_35471 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_35471){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e35470){if((e35470 instanceof Error)){
var e = e35470;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_35471], null));
} else {
var e = e35470;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_35471))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__35472){
var map__35481 = p__35472;
var map__35481__$1 = ((((!((map__35481 == null)))?((((map__35481.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35481.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35481):map__35481);
var opts = map__35481__$1;
var build_id = cljs.core.get.call(null,map__35481__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__35481,map__35481__$1,opts,build_id){
return (function (p__35483){
var vec__35484 = p__35483;
var seq__35485 = cljs.core.seq.call(null,vec__35484);
var first__35486 = cljs.core.first.call(null,seq__35485);
var seq__35485__$1 = cljs.core.next.call(null,seq__35485);
var map__35487 = first__35486;
var map__35487__$1 = ((((!((map__35487 == null)))?((((map__35487.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35487.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35487):map__35487);
var msg = map__35487__$1;
var msg_name = cljs.core.get.call(null,map__35487__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__35485__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__35484,seq__35485,first__35486,seq__35485__$1,map__35487,map__35487__$1,msg,msg_name,_,map__35481,map__35481__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__35484,seq__35485,first__35486,seq__35485__$1,map__35487,map__35487__$1,msg,msg_name,_,map__35481,map__35481__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__35481,map__35481__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__35495){
var vec__35496 = p__35495;
var seq__35497 = cljs.core.seq.call(null,vec__35496);
var first__35498 = cljs.core.first.call(null,seq__35497);
var seq__35497__$1 = cljs.core.next.call(null,seq__35497);
var map__35499 = first__35498;
var map__35499__$1 = ((((!((map__35499 == null)))?((((map__35499.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35499.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35499):map__35499);
var msg = map__35499__$1;
var msg_name = cljs.core.get.call(null,map__35499__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__35497__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__35501){
var map__35513 = p__35501;
var map__35513__$1 = ((((!((map__35513 == null)))?((((map__35513.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35513.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35513):map__35513);
var on_compile_warning = cljs.core.get.call(null,map__35513__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__35513__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__35513,map__35513__$1,on_compile_warning,on_compile_fail){
return (function (p__35515){
var vec__35516 = p__35515;
var seq__35517 = cljs.core.seq.call(null,vec__35516);
var first__35518 = cljs.core.first.call(null,seq__35517);
var seq__35517__$1 = cljs.core.next.call(null,seq__35517);
var map__35519 = first__35518;
var map__35519__$1 = ((((!((map__35519 == null)))?((((map__35519.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35519.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35519):map__35519);
var msg = map__35519__$1;
var msg_name = cljs.core.get.call(null,map__35519__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__35517__$1;
var pred__35521 = cljs.core._EQ_;
var expr__35522 = msg_name;
if(cljs.core.truth_(pred__35521.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__35522))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__35521.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__35522))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__35513,map__35513__$1,on_compile_warning,on_compile_fail))
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
var c__27881__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27881__auto__,msg_hist,msg_names,msg){
return (function (){
var f__27882__auto__ = (function (){var switch__27769__auto__ = ((function (c__27881__auto__,msg_hist,msg_names,msg){
return (function (state_35750){
var state_val_35751 = (state_35750[(1)]);
if((state_val_35751 === (7))){
var inst_35670 = (state_35750[(2)]);
var state_35750__$1 = state_35750;
if(cljs.core.truth_(inst_35670)){
var statearr_35752_35802 = state_35750__$1;
(statearr_35752_35802[(1)] = (8));

} else {
var statearr_35753_35803 = state_35750__$1;
(statearr_35753_35803[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35751 === (20))){
var inst_35744 = (state_35750[(2)]);
var state_35750__$1 = state_35750;
var statearr_35754_35804 = state_35750__$1;
(statearr_35754_35804[(2)] = inst_35744);

(statearr_35754_35804[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35751 === (27))){
var inst_35740 = (state_35750[(2)]);
var state_35750__$1 = state_35750;
var statearr_35755_35805 = state_35750__$1;
(statearr_35755_35805[(2)] = inst_35740);

(statearr_35755_35805[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35751 === (1))){
var inst_35663 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_35750__$1 = state_35750;
if(cljs.core.truth_(inst_35663)){
var statearr_35756_35806 = state_35750__$1;
(statearr_35756_35806[(1)] = (2));

} else {
var statearr_35757_35807 = state_35750__$1;
(statearr_35757_35807[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35751 === (24))){
var inst_35742 = (state_35750[(2)]);
var state_35750__$1 = state_35750;
var statearr_35758_35808 = state_35750__$1;
(statearr_35758_35808[(2)] = inst_35742);

(statearr_35758_35808[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35751 === (4))){
var inst_35748 = (state_35750[(2)]);
var state_35750__$1 = state_35750;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35750__$1,inst_35748);
} else {
if((state_val_35751 === (15))){
var inst_35746 = (state_35750[(2)]);
var state_35750__$1 = state_35750;
var statearr_35759_35809 = state_35750__$1;
(statearr_35759_35809[(2)] = inst_35746);

(statearr_35759_35809[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35751 === (21))){
var inst_35699 = (state_35750[(2)]);
var inst_35700 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_35701 = figwheel.client.auto_jump_to_error.call(null,opts,inst_35700);
var state_35750__$1 = (function (){var statearr_35760 = state_35750;
(statearr_35760[(7)] = inst_35699);

return statearr_35760;
})();
var statearr_35761_35810 = state_35750__$1;
(statearr_35761_35810[(2)] = inst_35701);

(statearr_35761_35810[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35751 === (31))){
var inst_35729 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_35750__$1 = state_35750;
if(cljs.core.truth_(inst_35729)){
var statearr_35762_35811 = state_35750__$1;
(statearr_35762_35811[(1)] = (34));

} else {
var statearr_35763_35812 = state_35750__$1;
(statearr_35763_35812[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35751 === (32))){
var inst_35738 = (state_35750[(2)]);
var state_35750__$1 = state_35750;
var statearr_35764_35813 = state_35750__$1;
(statearr_35764_35813[(2)] = inst_35738);

(statearr_35764_35813[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35751 === (33))){
var inst_35725 = (state_35750[(2)]);
var inst_35726 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_35727 = figwheel.client.auto_jump_to_error.call(null,opts,inst_35726);
var state_35750__$1 = (function (){var statearr_35765 = state_35750;
(statearr_35765[(8)] = inst_35725);

return statearr_35765;
})();
var statearr_35766_35814 = state_35750__$1;
(statearr_35766_35814[(2)] = inst_35727);

(statearr_35766_35814[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35751 === (13))){
var inst_35684 = figwheel.client.heads_up.clear.call(null);
var state_35750__$1 = state_35750;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35750__$1,(16),inst_35684);
} else {
if((state_val_35751 === (22))){
var inst_35705 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_35706 = figwheel.client.heads_up.append_warning_message.call(null,inst_35705);
var state_35750__$1 = state_35750;
var statearr_35767_35815 = state_35750__$1;
(statearr_35767_35815[(2)] = inst_35706);

(statearr_35767_35815[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35751 === (36))){
var inst_35736 = (state_35750[(2)]);
var state_35750__$1 = state_35750;
var statearr_35768_35816 = state_35750__$1;
(statearr_35768_35816[(2)] = inst_35736);

(statearr_35768_35816[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35751 === (29))){
var inst_35716 = (state_35750[(2)]);
var inst_35717 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_35718 = figwheel.client.auto_jump_to_error.call(null,opts,inst_35717);
var state_35750__$1 = (function (){var statearr_35769 = state_35750;
(statearr_35769[(9)] = inst_35716);

return statearr_35769;
})();
var statearr_35770_35817 = state_35750__$1;
(statearr_35770_35817[(2)] = inst_35718);

(statearr_35770_35817[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35751 === (6))){
var inst_35665 = (state_35750[(10)]);
var state_35750__$1 = state_35750;
var statearr_35771_35818 = state_35750__$1;
(statearr_35771_35818[(2)] = inst_35665);

(statearr_35771_35818[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35751 === (28))){
var inst_35712 = (state_35750[(2)]);
var inst_35713 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_35714 = figwheel.client.heads_up.display_warning.call(null,inst_35713);
var state_35750__$1 = (function (){var statearr_35772 = state_35750;
(statearr_35772[(11)] = inst_35712);

return statearr_35772;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35750__$1,(29),inst_35714);
} else {
if((state_val_35751 === (25))){
var inst_35710 = figwheel.client.heads_up.clear.call(null);
var state_35750__$1 = state_35750;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35750__$1,(28),inst_35710);
} else {
if((state_val_35751 === (34))){
var inst_35731 = figwheel.client.heads_up.flash_loaded.call(null);
var state_35750__$1 = state_35750;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35750__$1,(37),inst_35731);
} else {
if((state_val_35751 === (17))){
var inst_35690 = (state_35750[(2)]);
var inst_35691 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_35692 = figwheel.client.auto_jump_to_error.call(null,opts,inst_35691);
var state_35750__$1 = (function (){var statearr_35773 = state_35750;
(statearr_35773[(12)] = inst_35690);

return statearr_35773;
})();
var statearr_35774_35819 = state_35750__$1;
(statearr_35774_35819[(2)] = inst_35692);

(statearr_35774_35819[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35751 === (3))){
var inst_35682 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_35750__$1 = state_35750;
if(cljs.core.truth_(inst_35682)){
var statearr_35775_35820 = state_35750__$1;
(statearr_35775_35820[(1)] = (13));

} else {
var statearr_35776_35821 = state_35750__$1;
(statearr_35776_35821[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35751 === (12))){
var inst_35678 = (state_35750[(2)]);
var state_35750__$1 = state_35750;
var statearr_35777_35822 = state_35750__$1;
(statearr_35777_35822[(2)] = inst_35678);

(statearr_35777_35822[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35751 === (2))){
var inst_35665 = (state_35750[(10)]);
var inst_35665__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_35750__$1 = (function (){var statearr_35778 = state_35750;
(statearr_35778[(10)] = inst_35665__$1);

return statearr_35778;
})();
if(cljs.core.truth_(inst_35665__$1)){
var statearr_35779_35823 = state_35750__$1;
(statearr_35779_35823[(1)] = (5));

} else {
var statearr_35780_35824 = state_35750__$1;
(statearr_35780_35824[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35751 === (23))){
var inst_35708 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_35750__$1 = state_35750;
if(cljs.core.truth_(inst_35708)){
var statearr_35781_35825 = state_35750__$1;
(statearr_35781_35825[(1)] = (25));

} else {
var statearr_35782_35826 = state_35750__$1;
(statearr_35782_35826[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35751 === (35))){
var state_35750__$1 = state_35750;
var statearr_35783_35827 = state_35750__$1;
(statearr_35783_35827[(2)] = null);

(statearr_35783_35827[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35751 === (19))){
var inst_35703 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_35750__$1 = state_35750;
if(cljs.core.truth_(inst_35703)){
var statearr_35784_35828 = state_35750__$1;
(statearr_35784_35828[(1)] = (22));

} else {
var statearr_35785_35829 = state_35750__$1;
(statearr_35785_35829[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35751 === (11))){
var inst_35674 = (state_35750[(2)]);
var state_35750__$1 = state_35750;
var statearr_35786_35830 = state_35750__$1;
(statearr_35786_35830[(2)] = inst_35674);

(statearr_35786_35830[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35751 === (9))){
var inst_35676 = figwheel.client.heads_up.clear.call(null);
var state_35750__$1 = state_35750;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35750__$1,(12),inst_35676);
} else {
if((state_val_35751 === (5))){
var inst_35667 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_35750__$1 = state_35750;
var statearr_35787_35831 = state_35750__$1;
(statearr_35787_35831[(2)] = inst_35667);

(statearr_35787_35831[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35751 === (14))){
var inst_35694 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_35750__$1 = state_35750;
if(cljs.core.truth_(inst_35694)){
var statearr_35788_35832 = state_35750__$1;
(statearr_35788_35832[(1)] = (18));

} else {
var statearr_35789_35833 = state_35750__$1;
(statearr_35789_35833[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35751 === (26))){
var inst_35720 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_35750__$1 = state_35750;
if(cljs.core.truth_(inst_35720)){
var statearr_35790_35834 = state_35750__$1;
(statearr_35790_35834[(1)] = (30));

} else {
var statearr_35791_35835 = state_35750__$1;
(statearr_35791_35835[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35751 === (16))){
var inst_35686 = (state_35750[(2)]);
var inst_35687 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_35688 = figwheel.client.heads_up.display_exception.call(null,inst_35687);
var state_35750__$1 = (function (){var statearr_35792 = state_35750;
(statearr_35792[(13)] = inst_35686);

return statearr_35792;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35750__$1,(17),inst_35688);
} else {
if((state_val_35751 === (30))){
var inst_35722 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_35723 = figwheel.client.heads_up.display_warning.call(null,inst_35722);
var state_35750__$1 = state_35750;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35750__$1,(33),inst_35723);
} else {
if((state_val_35751 === (10))){
var inst_35680 = (state_35750[(2)]);
var state_35750__$1 = state_35750;
var statearr_35793_35836 = state_35750__$1;
(statearr_35793_35836[(2)] = inst_35680);

(statearr_35793_35836[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35751 === (18))){
var inst_35696 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_35697 = figwheel.client.heads_up.display_exception.call(null,inst_35696);
var state_35750__$1 = state_35750;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35750__$1,(21),inst_35697);
} else {
if((state_val_35751 === (37))){
var inst_35733 = (state_35750[(2)]);
var state_35750__$1 = state_35750;
var statearr_35794_35837 = state_35750__$1;
(statearr_35794_35837[(2)] = inst_35733);

(statearr_35794_35837[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35751 === (8))){
var inst_35672 = figwheel.client.heads_up.flash_loaded.call(null);
var state_35750__$1 = state_35750;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35750__$1,(11),inst_35672);
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
});})(c__27881__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__27769__auto__,c__27881__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27770__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27770__auto____0 = (function (){
var statearr_35798 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35798[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27770__auto__);

(statearr_35798[(1)] = (1));

return statearr_35798;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27770__auto____1 = (function (state_35750){
while(true){
var ret_value__27771__auto__ = (function (){try{while(true){
var result__27772__auto__ = switch__27769__auto__.call(null,state_35750);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27772__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27772__auto__;
}
break;
}
}catch (e35799){if((e35799 instanceof Object)){
var ex__27773__auto__ = e35799;
var statearr_35800_35838 = state_35750;
(statearr_35800_35838[(5)] = ex__27773__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35750);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35799;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27771__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35839 = state_35750;
state_35750 = G__35839;
continue;
} else {
return ret_value__27771__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27770__auto__ = function(state_35750){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27770__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27770__auto____1.call(this,state_35750);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27770__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27770__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27770__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27770__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27770__auto__;
})()
;})(switch__27769__auto__,c__27881__auto__,msg_hist,msg_names,msg))
})();
var state__27883__auto__ = (function (){var statearr_35801 = f__27882__auto__.call(null);
(statearr_35801[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27881__auto__);

return statearr_35801;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27883__auto__);
});})(c__27881__auto__,msg_hist,msg_names,msg))
);

return c__27881__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__27881__auto___35902 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27881__auto___35902,ch){
return (function (){
var f__27882__auto__ = (function (){var switch__27769__auto__ = ((function (c__27881__auto___35902,ch){
return (function (state_35885){
var state_val_35886 = (state_35885[(1)]);
if((state_val_35886 === (1))){
var state_35885__$1 = state_35885;
var statearr_35887_35903 = state_35885__$1;
(statearr_35887_35903[(2)] = null);

(statearr_35887_35903[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35886 === (2))){
var state_35885__$1 = state_35885;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35885__$1,(4),ch);
} else {
if((state_val_35886 === (3))){
var inst_35883 = (state_35885[(2)]);
var state_35885__$1 = state_35885;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35885__$1,inst_35883);
} else {
if((state_val_35886 === (4))){
var inst_35873 = (state_35885[(7)]);
var inst_35873__$1 = (state_35885[(2)]);
var state_35885__$1 = (function (){var statearr_35888 = state_35885;
(statearr_35888[(7)] = inst_35873__$1);

return statearr_35888;
})();
if(cljs.core.truth_(inst_35873__$1)){
var statearr_35889_35904 = state_35885__$1;
(statearr_35889_35904[(1)] = (5));

} else {
var statearr_35890_35905 = state_35885__$1;
(statearr_35890_35905[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35886 === (5))){
var inst_35873 = (state_35885[(7)]);
var inst_35875 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_35873);
var state_35885__$1 = state_35885;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35885__$1,(8),inst_35875);
} else {
if((state_val_35886 === (6))){
var state_35885__$1 = state_35885;
var statearr_35891_35906 = state_35885__$1;
(statearr_35891_35906[(2)] = null);

(statearr_35891_35906[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35886 === (7))){
var inst_35881 = (state_35885[(2)]);
var state_35885__$1 = state_35885;
var statearr_35892_35907 = state_35885__$1;
(statearr_35892_35907[(2)] = inst_35881);

(statearr_35892_35907[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35886 === (8))){
var inst_35877 = (state_35885[(2)]);
var state_35885__$1 = (function (){var statearr_35893 = state_35885;
(statearr_35893[(8)] = inst_35877);

return statearr_35893;
})();
var statearr_35894_35908 = state_35885__$1;
(statearr_35894_35908[(2)] = null);

(statearr_35894_35908[(1)] = (2));


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
});})(c__27881__auto___35902,ch))
;
return ((function (switch__27769__auto__,c__27881__auto___35902,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__27770__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__27770__auto____0 = (function (){
var statearr_35898 = [null,null,null,null,null,null,null,null,null];
(statearr_35898[(0)] = figwheel$client$heads_up_plugin_$_state_machine__27770__auto__);

(statearr_35898[(1)] = (1));

return statearr_35898;
});
var figwheel$client$heads_up_plugin_$_state_machine__27770__auto____1 = (function (state_35885){
while(true){
var ret_value__27771__auto__ = (function (){try{while(true){
var result__27772__auto__ = switch__27769__auto__.call(null,state_35885);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27772__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27772__auto__;
}
break;
}
}catch (e35899){if((e35899 instanceof Object)){
var ex__27773__auto__ = e35899;
var statearr_35900_35909 = state_35885;
(statearr_35900_35909[(5)] = ex__27773__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35885);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35899;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27771__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35910 = state_35885;
state_35885 = G__35910;
continue;
} else {
return ret_value__27771__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__27770__auto__ = function(state_35885){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__27770__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__27770__auto____1.call(this,state_35885);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__27770__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__27770__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__27770__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__27770__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__27770__auto__;
})()
;})(switch__27769__auto__,c__27881__auto___35902,ch))
})();
var state__27883__auto__ = (function (){var statearr_35901 = f__27882__auto__.call(null);
(statearr_35901[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27881__auto___35902);

return statearr_35901;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27883__auto__);
});})(c__27881__auto___35902,ch))
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
var c__27881__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27881__auto__){
return (function (){
var f__27882__auto__ = (function (){var switch__27769__auto__ = ((function (c__27881__auto__){
return (function (state_35931){
var state_val_35932 = (state_35931[(1)]);
if((state_val_35932 === (1))){
var inst_35926 = cljs.core.async.timeout.call(null,(3000));
var state_35931__$1 = state_35931;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35931__$1,(2),inst_35926);
} else {
if((state_val_35932 === (2))){
var inst_35928 = (state_35931[(2)]);
var inst_35929 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_35931__$1 = (function (){var statearr_35933 = state_35931;
(statearr_35933[(7)] = inst_35928);

return statearr_35933;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35931__$1,inst_35929);
} else {
return null;
}
}
});})(c__27881__auto__))
;
return ((function (switch__27769__auto__,c__27881__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__27770__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__27770__auto____0 = (function (){
var statearr_35937 = [null,null,null,null,null,null,null,null];
(statearr_35937[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__27770__auto__);

(statearr_35937[(1)] = (1));

return statearr_35937;
});
var figwheel$client$enforce_project_plugin_$_state_machine__27770__auto____1 = (function (state_35931){
while(true){
var ret_value__27771__auto__ = (function (){try{while(true){
var result__27772__auto__ = switch__27769__auto__.call(null,state_35931);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27772__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27772__auto__;
}
break;
}
}catch (e35938){if((e35938 instanceof Object)){
var ex__27773__auto__ = e35938;
var statearr_35939_35941 = state_35931;
(statearr_35939_35941[(5)] = ex__27773__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35931);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35938;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27771__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35942 = state_35931;
state_35931 = G__35942;
continue;
} else {
return ret_value__27771__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__27770__auto__ = function(state_35931){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__27770__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__27770__auto____1.call(this,state_35931);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__27770__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__27770__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__27770__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__27770__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__27770__auto__;
})()
;})(switch__27769__auto__,c__27881__auto__))
})();
var state__27883__auto__ = (function (){var statearr_35940 = f__27882__auto__.call(null);
(statearr_35940[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27881__auto__);

return statearr_35940;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27883__auto__);
});})(c__27881__auto__))
);

return c__27881__auto__;
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
var c__27881__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27881__auto__,figwheel_version,temp__4657__auto__){
return (function (){
var f__27882__auto__ = (function (){var switch__27769__auto__ = ((function (c__27881__auto__,figwheel_version,temp__4657__auto__){
return (function (state_35965){
var state_val_35966 = (state_35965[(1)]);
if((state_val_35966 === (1))){
var inst_35959 = cljs.core.async.timeout.call(null,(2000));
var state_35965__$1 = state_35965;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35965__$1,(2),inst_35959);
} else {
if((state_val_35966 === (2))){
var inst_35961 = (state_35965[(2)]);
var inst_35962 = [cljs.core.str("Figwheel Client Version <strong>"),cljs.core.str(figwheel.client._figwheel_version_),cljs.core.str("</strong> is not equal to "),cljs.core.str("Figwheel Sidecar Version <strong>"),cljs.core.str(figwheel_version),cljs.core.str("</strong>"),cljs.core.str(".  Shutting down Websocket Connection!"),cljs.core.str("<h4>To fix try:</h4>"),cljs.core.str("<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>"),cljs.core.str("<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>"),cljs.core.str("<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>")].join('');
var inst_35963 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_35962);
var state_35965__$1 = (function (){var statearr_35967 = state_35965;
(statearr_35967[(7)] = inst_35961);

return statearr_35967;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35965__$1,inst_35963);
} else {
return null;
}
}
});})(c__27881__auto__,figwheel_version,temp__4657__auto__))
;
return ((function (switch__27769__auto__,c__27881__auto__,figwheel_version,temp__4657__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27770__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27770__auto____0 = (function (){
var statearr_35971 = [null,null,null,null,null,null,null,null];
(statearr_35971[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27770__auto__);

(statearr_35971[(1)] = (1));

return statearr_35971;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27770__auto____1 = (function (state_35965){
while(true){
var ret_value__27771__auto__ = (function (){try{while(true){
var result__27772__auto__ = switch__27769__auto__.call(null,state_35965);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27772__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27772__auto__;
}
break;
}
}catch (e35972){if((e35972 instanceof Object)){
var ex__27773__auto__ = e35972;
var statearr_35973_35975 = state_35965;
(statearr_35973_35975[(5)] = ex__27773__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35965);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35972;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27771__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35976 = state_35965;
state_35965 = G__35976;
continue;
} else {
return ret_value__27771__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27770__auto__ = function(state_35965){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27770__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27770__auto____1.call(this,state_35965);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27770__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27770__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27770__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27770__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27770__auto__;
})()
;})(switch__27769__auto__,c__27881__auto__,figwheel_version,temp__4657__auto__))
})();
var state__27883__auto__ = (function (){var statearr_35974 = f__27882__auto__.call(null);
(statearr_35974[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27881__auto__);

return statearr_35974;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27883__auto__);
});})(c__27881__auto__,figwheel_version,temp__4657__auto__))
);

return c__27881__auto__;
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
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__35977){
var map__35981 = p__35977;
var map__35981__$1 = ((((!((map__35981 == null)))?((((map__35981.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35981.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35981):map__35981);
var file = cljs.core.get.call(null,map__35981__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__35981__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__35981__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__35983 = "";
var G__35983__$1 = (cljs.core.truth_(file)?[cljs.core.str(G__35983),cljs.core.str("file "),cljs.core.str(file)].join(''):G__35983);
var G__35983__$2 = (cljs.core.truth_(line)?[cljs.core.str(G__35983__$1),cljs.core.str(" at line "),cljs.core.str(line)].join(''):G__35983__$1);
if(cljs.core.truth_((function (){var and__24748__auto__ = line;
if(cljs.core.truth_(and__24748__auto__)){
return column;
} else {
return and__24748__auto__;
}
})())){
return [cljs.core.str(G__35983__$2),cljs.core.str(", column "),cljs.core.str(column)].join('');
} else {
return G__35983__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__35984){
var map__35991 = p__35984;
var map__35991__$1 = ((((!((map__35991 == null)))?((((map__35991.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35991.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35991):map__35991);
var ed = map__35991__$1;
var formatted_exception = cljs.core.get.call(null,map__35991__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__35991__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__35991__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__35993_35997 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__35994_35998 = null;
var count__35995_35999 = (0);
var i__35996_36000 = (0);
while(true){
if((i__35996_36000 < count__35995_35999)){
var msg_36001 = cljs.core._nth.call(null,chunk__35994_35998,i__35996_36000);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_36001);

var G__36002 = seq__35993_35997;
var G__36003 = chunk__35994_35998;
var G__36004 = count__35995_35999;
var G__36005 = (i__35996_36000 + (1));
seq__35993_35997 = G__36002;
chunk__35994_35998 = G__36003;
count__35995_35999 = G__36004;
i__35996_36000 = G__36005;
continue;
} else {
var temp__4657__auto___36006 = cljs.core.seq.call(null,seq__35993_35997);
if(temp__4657__auto___36006){
var seq__35993_36007__$1 = temp__4657__auto___36006;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35993_36007__$1)){
var c__25571__auto___36008 = cljs.core.chunk_first.call(null,seq__35993_36007__$1);
var G__36009 = cljs.core.chunk_rest.call(null,seq__35993_36007__$1);
var G__36010 = c__25571__auto___36008;
var G__36011 = cljs.core.count.call(null,c__25571__auto___36008);
var G__36012 = (0);
seq__35993_35997 = G__36009;
chunk__35994_35998 = G__36010;
count__35995_35999 = G__36011;
i__35996_36000 = G__36012;
continue;
} else {
var msg_36013 = cljs.core.first.call(null,seq__35993_36007__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_36013);

var G__36014 = cljs.core.next.call(null,seq__35993_36007__$1);
var G__36015 = null;
var G__36016 = (0);
var G__36017 = (0);
seq__35993_35997 = G__36014;
chunk__35994_35998 = G__36015;
count__35995_35999 = G__36016;
i__35996_36000 = G__36017;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__36018){
var map__36021 = p__36018;
var map__36021__$1 = ((((!((map__36021 == null)))?((((map__36021.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36021.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36021):map__36021);
var w = map__36021__$1;
var message = cljs.core.get.call(null,map__36021__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
if(cljs.core.truth_((function (){var and__24748__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__24748__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__24748__auto__;
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
var seq__36033 = cljs.core.seq.call(null,plugins);
var chunk__36034 = null;
var count__36035 = (0);
var i__36036 = (0);
while(true){
if((i__36036 < count__36035)){
var vec__36037 = cljs.core._nth.call(null,chunk__36034,i__36036);
var k = cljs.core.nth.call(null,vec__36037,(0),null);
var plugin = cljs.core.nth.call(null,vec__36037,(1),null);
if(cljs.core.truth_(plugin)){
var pl_36043 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__36033,chunk__36034,count__36035,i__36036,pl_36043,vec__36037,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_36043.call(null,msg_hist);
});})(seq__36033,chunk__36034,count__36035,i__36036,pl_36043,vec__36037,k,plugin))
);
} else {
}

var G__36044 = seq__36033;
var G__36045 = chunk__36034;
var G__36046 = count__36035;
var G__36047 = (i__36036 + (1));
seq__36033 = G__36044;
chunk__36034 = G__36045;
count__36035 = G__36046;
i__36036 = G__36047;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__36033);
if(temp__4657__auto__){
var seq__36033__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36033__$1)){
var c__25571__auto__ = cljs.core.chunk_first.call(null,seq__36033__$1);
var G__36048 = cljs.core.chunk_rest.call(null,seq__36033__$1);
var G__36049 = c__25571__auto__;
var G__36050 = cljs.core.count.call(null,c__25571__auto__);
var G__36051 = (0);
seq__36033 = G__36048;
chunk__36034 = G__36049;
count__36035 = G__36050;
i__36036 = G__36051;
continue;
} else {
var vec__36040 = cljs.core.first.call(null,seq__36033__$1);
var k = cljs.core.nth.call(null,vec__36040,(0),null);
var plugin = cljs.core.nth.call(null,vec__36040,(1),null);
if(cljs.core.truth_(plugin)){
var pl_36052 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__36033,chunk__36034,count__36035,i__36036,pl_36052,vec__36040,k,plugin,seq__36033__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_36052.call(null,msg_hist);
});})(seq__36033,chunk__36034,count__36035,i__36036,pl_36052,vec__36040,k,plugin,seq__36033__$1,temp__4657__auto__))
);
} else {
}

var G__36053 = cljs.core.next.call(null,seq__36033__$1);
var G__36054 = null;
var G__36055 = (0);
var G__36056 = (0);
seq__36033 = G__36053;
chunk__36034 = G__36054;
count__36035 = G__36055;
i__36036 = G__36056;
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
var args36057 = [];
var len__25835__auto___36064 = arguments.length;
var i__25836__auto___36065 = (0);
while(true){
if((i__25836__auto___36065 < len__25835__auto___36064)){
args36057.push((arguments[i__25836__auto___36065]));

var G__36066 = (i__25836__auto___36065 + (1));
i__25836__auto___36065 = G__36066;
continue;
} else {
}
break;
}

var G__36059 = args36057.length;
switch (G__36059) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36057.length)].join('')));

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

var seq__36060_36068 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__36061_36069 = null;
var count__36062_36070 = (0);
var i__36063_36071 = (0);
while(true){
if((i__36063_36071 < count__36062_36070)){
var msg_36072 = cljs.core._nth.call(null,chunk__36061_36069,i__36063_36071);
figwheel.client.socket.handle_incoming_message.call(null,msg_36072);

var G__36073 = seq__36060_36068;
var G__36074 = chunk__36061_36069;
var G__36075 = count__36062_36070;
var G__36076 = (i__36063_36071 + (1));
seq__36060_36068 = G__36073;
chunk__36061_36069 = G__36074;
count__36062_36070 = G__36075;
i__36063_36071 = G__36076;
continue;
} else {
var temp__4657__auto___36077 = cljs.core.seq.call(null,seq__36060_36068);
if(temp__4657__auto___36077){
var seq__36060_36078__$1 = temp__4657__auto___36077;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36060_36078__$1)){
var c__25571__auto___36079 = cljs.core.chunk_first.call(null,seq__36060_36078__$1);
var G__36080 = cljs.core.chunk_rest.call(null,seq__36060_36078__$1);
var G__36081 = c__25571__auto___36079;
var G__36082 = cljs.core.count.call(null,c__25571__auto___36079);
var G__36083 = (0);
seq__36060_36068 = G__36080;
chunk__36061_36069 = G__36081;
count__36062_36070 = G__36082;
i__36063_36071 = G__36083;
continue;
} else {
var msg_36084 = cljs.core.first.call(null,seq__36060_36078__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_36084);

var G__36085 = cljs.core.next.call(null,seq__36060_36078__$1);
var G__36086 = null;
var G__36087 = (0);
var G__36088 = (0);
seq__36060_36068 = G__36085;
chunk__36061_36069 = G__36086;
count__36062_36070 = G__36087;
i__36063_36071 = G__36088;
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
var args__25842__auto__ = [];
var len__25835__auto___36093 = arguments.length;
var i__25836__auto___36094 = (0);
while(true){
if((i__25836__auto___36094 < len__25835__auto___36093)){
args__25842__auto__.push((arguments[i__25836__auto___36094]));

var G__36095 = (i__25836__auto___36094 + (1));
i__25836__auto___36094 = G__36095;
continue;
} else {
}
break;
}

var argseq__25843__auto__ = ((((0) < args__25842__auto__.length))?(new cljs.core.IndexedSeq(args__25842__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__25843__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__36090){
var map__36091 = p__36090;
var map__36091__$1 = ((((!((map__36091 == null)))?((((map__36091.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36091.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36091):map__36091);
var opts = map__36091__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq36089){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36089));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e36097){if((e36097 instanceof Error)){
var e = e36097;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e36097;

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
return (function (p__36101){
var map__36102 = p__36101;
var map__36102__$1 = ((((!((map__36102 == null)))?((((map__36102.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36102.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36102):map__36102);
var msg_name = cljs.core.get.call(null,map__36102__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1520627274228