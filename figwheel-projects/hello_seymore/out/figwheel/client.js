// Compiled by ClojureScript 1.9.908 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.userAgent.product');
goog.require('goog.object');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.utils');
goog.require('figwheel.client.heads_up');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('cljs.repl');
figwheel.client._figwheel_version_ = "0.5.13";
figwheel.client.js_stringify = (((typeof JSON !== 'undefined') && (!((JSON.stringify == null))))?(function (x){
return ["#js ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(x,null," "))].join('');
}):(function (x){
try{return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join('');
}catch (e35876){if((e35876 instanceof Error)){
var e = e35876;
return "Error: Unable to stringify";
} else {
throw e35876;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__35879 = arguments.length;
switch (G__35879) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__35877_SHARP_){
if(typeof p1__35877_SHARP_ === 'string'){
return p1__35877_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__35877_SHARP_);
}
}),args)], null)], null));

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
var args__29165__auto__ = [];
var len__29158__auto___35882 = arguments.length;
var i__29159__auto___35883 = (0);
while(true){
if((i__29159__auto___35883 < len__29158__auto___35882)){
args__29165__auto__.push((arguments[i__29159__auto___35883]));

var G__35884 = (i__29159__auto___35883 + (1));
i__29159__auto___35883 = G__35884;
continue;
} else {
}
break;
}

var argseq__29166__auto__ = ((((0) < args__29165__auto__.length))?(new cljs.core.IndexedSeq(args__29165__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__29166__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq35881){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35881));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__29165__auto__ = [];
var len__29158__auto___35886 = arguments.length;
var i__29159__auto___35887 = (0);
while(true){
if((i__29159__auto___35887 < len__29158__auto___35886)){
args__29165__auto__.push((arguments[i__29159__auto___35887]));

var G__35888 = (i__29159__auto___35887 + (1));
i__29159__auto___35887 = G__35888;
continue;
} else {
}
break;
}

var argseq__29166__auto__ = ((((0) < args__29165__auto__.length))?(new cljs.core.IndexedSeq(args__29165__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__29166__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq35885){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35885));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (function figwheel$client$autoload_QMARK_(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),true);
});
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
var res = figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Toggle autoload deprecated! Use (figwheel.client/set-autoload! false)"].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Figwheel autoloading ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));

return res;
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
/**
 * Figwheel by default loads code changes as you work. Sometimes you
 *   just want to work on your code without the ramifications of
 *   autoloading and simply load your code piecemeal in the REPL. You can
 *   turn autoloading on and of with this method.
 * 
 *   (figwheel.client/set-autoload false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_autoload = (function figwheel$client$set_autoload(b){
if((b === true) || (b === false)){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),b);
});
goog.exportSymbol('figwheel.client.set_autoload', figwheel.client.set_autoload);
figwheel.client.repl_pprint = (function figwheel$client$repl_pprint(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),true);
});
goog.exportSymbol('figwheel.client.repl_pprint', figwheel.client.repl_pprint);
/**
 * This method gives you the ability to turn the pretty printing of
 *   the REPL's return value on and off.
 * 
 *   (figwheel.client/set-repl-pprint false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_repl_pprint = (function figwheel$client$set_repl_pprint(b){
if((b === true) || (b === false)){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),b);
});
goog.exportSymbol('figwheel.client.set_repl_pprint', figwheel.client.set_repl_pprint);
figwheel.client.repl_result_pr_str = (function figwheel$client$repl_result_pr_str(v){
if(cljs.core.truth_(figwheel.client.repl_pprint.call(null))){
return figwheel.client.utils.pprint_to_string.call(null,v);
} else {
return cljs.core.pr_str.call(null,v);
}
});
goog.exportSymbol('figwheel.client.repl_result_pr_str', figwheel.client.repl_result_pr_str);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel.client.get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__35889){
var map__35890 = p__35889;
var map__35890__$1 = ((((!((map__35890 == null)))?((((map__35890.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35890.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35890):map__35890);
var message = cljs.core.get.call(null,map__35890__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__35890__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)," : ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__27989__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__27989__auto__)){
return or__27989__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__27977__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__27977__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__27977__auto__;
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
var c__30588__auto___35969 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30588__auto___35969,ch){
return (function (){
var f__30589__auto__ = (function (){var switch__30500__auto__ = ((function (c__30588__auto___35969,ch){
return (function (state_35941){
var state_val_35942 = (state_35941[(1)]);
if((state_val_35942 === (7))){
var inst_35937 = (state_35941[(2)]);
var state_35941__$1 = state_35941;
var statearr_35943_35970 = state_35941__$1;
(statearr_35943_35970[(2)] = inst_35937);

(statearr_35943_35970[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35942 === (1))){
var state_35941__$1 = state_35941;
var statearr_35944_35971 = state_35941__$1;
(statearr_35944_35971[(2)] = null);

(statearr_35944_35971[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35942 === (4))){
var inst_35894 = (state_35941[(7)]);
var inst_35894__$1 = (state_35941[(2)]);
var state_35941__$1 = (function (){var statearr_35945 = state_35941;
(statearr_35945[(7)] = inst_35894__$1);

return statearr_35945;
})();
if(cljs.core.truth_(inst_35894__$1)){
var statearr_35946_35972 = state_35941__$1;
(statearr_35946_35972[(1)] = (5));

} else {
var statearr_35947_35973 = state_35941__$1;
(statearr_35947_35973[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35942 === (15))){
var inst_35901 = (state_35941[(8)]);
var inst_35916 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_35901);
var inst_35917 = cljs.core.first.call(null,inst_35916);
var inst_35918 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_35917);
var inst_35919 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_35918)].join('');
var inst_35920 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_35919);
var state_35941__$1 = state_35941;
var statearr_35948_35974 = state_35941__$1;
(statearr_35948_35974[(2)] = inst_35920);

(statearr_35948_35974[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35942 === (13))){
var inst_35925 = (state_35941[(2)]);
var state_35941__$1 = state_35941;
var statearr_35949_35975 = state_35941__$1;
(statearr_35949_35975[(2)] = inst_35925);

(statearr_35949_35975[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35942 === (6))){
var state_35941__$1 = state_35941;
var statearr_35950_35976 = state_35941__$1;
(statearr_35950_35976[(2)] = null);

(statearr_35950_35976[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35942 === (17))){
var inst_35923 = (state_35941[(2)]);
var state_35941__$1 = state_35941;
var statearr_35951_35977 = state_35941__$1;
(statearr_35951_35977[(2)] = inst_35923);

(statearr_35951_35977[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35942 === (3))){
var inst_35939 = (state_35941[(2)]);
var state_35941__$1 = state_35941;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35941__$1,inst_35939);
} else {
if((state_val_35942 === (12))){
var inst_35900 = (state_35941[(9)]);
var inst_35914 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_35900,opts);
var state_35941__$1 = state_35941;
if(cljs.core.truth_(inst_35914)){
var statearr_35952_35978 = state_35941__$1;
(statearr_35952_35978[(1)] = (15));

} else {
var statearr_35953_35979 = state_35941__$1;
(statearr_35953_35979[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35942 === (2))){
var state_35941__$1 = state_35941;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35941__$1,(4),ch);
} else {
if((state_val_35942 === (11))){
var inst_35901 = (state_35941[(8)]);
var inst_35906 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_35907 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_35901);
var inst_35908 = cljs.core.async.timeout.call(null,(1000));
var inst_35909 = [inst_35907,inst_35908];
var inst_35910 = (new cljs.core.PersistentVector(null,2,(5),inst_35906,inst_35909,null));
var state_35941__$1 = state_35941;
return cljs.core.async.ioc_alts_BANG_.call(null,state_35941__$1,(14),inst_35910);
} else {
if((state_val_35942 === (9))){
var inst_35901 = (state_35941[(8)]);
var inst_35927 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_35928 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_35901);
var inst_35929 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_35928);
var inst_35930 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_35929)].join('');
var inst_35931 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_35930);
var state_35941__$1 = (function (){var statearr_35954 = state_35941;
(statearr_35954[(10)] = inst_35927);

return statearr_35954;
})();
var statearr_35955_35980 = state_35941__$1;
(statearr_35955_35980[(2)] = inst_35931);

(statearr_35955_35980[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35942 === (5))){
var inst_35894 = (state_35941[(7)]);
var inst_35896 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_35897 = (new cljs.core.PersistentArrayMap(null,2,inst_35896,null));
var inst_35898 = (new cljs.core.PersistentHashSet(null,inst_35897,null));
var inst_35899 = figwheel.client.focus_msgs.call(null,inst_35898,inst_35894);
var inst_35900 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_35899);
var inst_35901 = cljs.core.first.call(null,inst_35899);
var inst_35902 = figwheel.client.autoload_QMARK_.call(null);
var state_35941__$1 = (function (){var statearr_35956 = state_35941;
(statearr_35956[(8)] = inst_35901);

(statearr_35956[(9)] = inst_35900);

return statearr_35956;
})();
if(cljs.core.truth_(inst_35902)){
var statearr_35957_35981 = state_35941__$1;
(statearr_35957_35981[(1)] = (8));

} else {
var statearr_35958_35982 = state_35941__$1;
(statearr_35958_35982[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35942 === (14))){
var inst_35912 = (state_35941[(2)]);
var state_35941__$1 = state_35941;
var statearr_35959_35983 = state_35941__$1;
(statearr_35959_35983[(2)] = inst_35912);

(statearr_35959_35983[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35942 === (16))){
var state_35941__$1 = state_35941;
var statearr_35960_35984 = state_35941__$1;
(statearr_35960_35984[(2)] = null);

(statearr_35960_35984[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35942 === (10))){
var inst_35933 = (state_35941[(2)]);
var state_35941__$1 = (function (){var statearr_35961 = state_35941;
(statearr_35961[(11)] = inst_35933);

return statearr_35961;
})();
var statearr_35962_35985 = state_35941__$1;
(statearr_35962_35985[(2)] = null);

(statearr_35962_35985[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35942 === (8))){
var inst_35900 = (state_35941[(9)]);
var inst_35904 = figwheel.client.reload_file_state_QMARK_.call(null,inst_35900,opts);
var state_35941__$1 = state_35941;
if(cljs.core.truth_(inst_35904)){
var statearr_35963_35986 = state_35941__$1;
(statearr_35963_35986[(1)] = (11));

} else {
var statearr_35964_35987 = state_35941__$1;
(statearr_35964_35987[(1)] = (12));

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
});})(c__30588__auto___35969,ch))
;
return ((function (switch__30500__auto__,c__30588__auto___35969,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__30501__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__30501__auto____0 = (function (){
var statearr_35965 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35965[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__30501__auto__);

(statearr_35965[(1)] = (1));

return statearr_35965;
});
var figwheel$client$file_reloader_plugin_$_state_machine__30501__auto____1 = (function (state_35941){
while(true){
var ret_value__30502__auto__ = (function (){try{while(true){
var result__30503__auto__ = switch__30500__auto__.call(null,state_35941);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30503__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30503__auto__;
}
break;
}
}catch (e35966){if((e35966 instanceof Object)){
var ex__30504__auto__ = e35966;
var statearr_35967_35988 = state_35941;
(statearr_35967_35988[(5)] = ex__30504__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35941);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35966;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30502__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35989 = state_35941;
state_35941 = G__35989;
continue;
} else {
return ret_value__30502__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__30501__auto__ = function(state_35941){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__30501__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__30501__auto____1.call(this,state_35941);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloader_plugin_$_state_machine__30501__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__30501__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__30501__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__30501__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__30501__auto__;
})()
;})(switch__30500__auto__,c__30588__auto___35969,ch))
})();
var state__30590__auto__ = (function (){var statearr_35968 = f__30589__auto__.call(null);
(statearr_35968[(6)] = c__30588__auto___35969);

return statearr_35968;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30590__auto__);
});})(c__30588__auto___35969,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__35990_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__35990_SHARP_));
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
var base_path_35992 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_35992){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e35991){if((e35991 instanceof Error)){
var e = e35991;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_35992], null));
} else {
var e = e35991;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_35992))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__35993){
var map__35994 = p__35993;
var map__35994__$1 = ((((!((map__35994 == null)))?((((map__35994.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35994.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35994):map__35994);
var opts = map__35994__$1;
var build_id = cljs.core.get.call(null,map__35994__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__35994,map__35994__$1,opts,build_id){
return (function (p__35996){
var vec__35997 = p__35996;
var seq__35998 = cljs.core.seq.call(null,vec__35997);
var first__35999 = cljs.core.first.call(null,seq__35998);
var seq__35998__$1 = cljs.core.next.call(null,seq__35998);
var map__36000 = first__35999;
var map__36000__$1 = ((((!((map__36000 == null)))?((((map__36000.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36000.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36000):map__36000);
var msg = map__36000__$1;
var msg_name = cljs.core.get.call(null,map__36000__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__35998__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__35997,seq__35998,first__35999,seq__35998__$1,map__36000,map__36000__$1,msg,msg_name,_,map__35994,map__35994__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__35997,seq__35998,first__35999,seq__35998__$1,map__36000,map__36000__$1,msg,msg_name,_,map__35994,map__35994__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__35994,map__35994__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__36002){
var vec__36003 = p__36002;
var seq__36004 = cljs.core.seq.call(null,vec__36003);
var first__36005 = cljs.core.first.call(null,seq__36004);
var seq__36004__$1 = cljs.core.next.call(null,seq__36004);
var map__36006 = first__36005;
var map__36006__$1 = ((((!((map__36006 == null)))?((((map__36006.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36006.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36006):map__36006);
var msg = map__36006__$1;
var msg_name = cljs.core.get.call(null,map__36006__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__36004__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__36008){
var map__36009 = p__36008;
var map__36009__$1 = ((((!((map__36009 == null)))?((((map__36009.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36009.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36009):map__36009);
var on_compile_warning = cljs.core.get.call(null,map__36009__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__36009__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__36009,map__36009__$1,on_compile_warning,on_compile_fail){
return (function (p__36011){
var vec__36012 = p__36011;
var seq__36013 = cljs.core.seq.call(null,vec__36012);
var first__36014 = cljs.core.first.call(null,seq__36013);
var seq__36013__$1 = cljs.core.next.call(null,seq__36013);
var map__36015 = first__36014;
var map__36015__$1 = ((((!((map__36015 == null)))?((((map__36015.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36015.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36015):map__36015);
var msg = map__36015__$1;
var msg_name = cljs.core.get.call(null,map__36015__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__36013__$1;
var pred__36017 = cljs.core._EQ_;
var expr__36018 = msg_name;
if(cljs.core.truth_(pred__36017.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__36018))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__36017.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__36018))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__36009,map__36009__$1,on_compile_warning,on_compile_fail))
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
var c__30588__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30588__auto__,msg_hist,msg_names,msg){
return (function (){
var f__30589__auto__ = (function (){var switch__30500__auto__ = ((function (c__30588__auto__,msg_hist,msg_names,msg){
return (function (state_36107){
var state_val_36108 = (state_36107[(1)]);
if((state_val_36108 === (7))){
var inst_36027 = (state_36107[(2)]);
var state_36107__$1 = state_36107;
if(cljs.core.truth_(inst_36027)){
var statearr_36109_36156 = state_36107__$1;
(statearr_36109_36156[(1)] = (8));

} else {
var statearr_36110_36157 = state_36107__$1;
(statearr_36110_36157[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36108 === (20))){
var inst_36101 = (state_36107[(2)]);
var state_36107__$1 = state_36107;
var statearr_36111_36158 = state_36107__$1;
(statearr_36111_36158[(2)] = inst_36101);

(statearr_36111_36158[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36108 === (27))){
var inst_36097 = (state_36107[(2)]);
var state_36107__$1 = state_36107;
var statearr_36112_36159 = state_36107__$1;
(statearr_36112_36159[(2)] = inst_36097);

(statearr_36112_36159[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36108 === (1))){
var inst_36020 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_36107__$1 = state_36107;
if(cljs.core.truth_(inst_36020)){
var statearr_36113_36160 = state_36107__$1;
(statearr_36113_36160[(1)] = (2));

} else {
var statearr_36114_36161 = state_36107__$1;
(statearr_36114_36161[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36108 === (24))){
var inst_36099 = (state_36107[(2)]);
var state_36107__$1 = state_36107;
var statearr_36115_36162 = state_36107__$1;
(statearr_36115_36162[(2)] = inst_36099);

(statearr_36115_36162[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36108 === (4))){
var inst_36105 = (state_36107[(2)]);
var state_36107__$1 = state_36107;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36107__$1,inst_36105);
} else {
if((state_val_36108 === (15))){
var inst_36103 = (state_36107[(2)]);
var state_36107__$1 = state_36107;
var statearr_36116_36163 = state_36107__$1;
(statearr_36116_36163[(2)] = inst_36103);

(statearr_36116_36163[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36108 === (21))){
var inst_36056 = (state_36107[(2)]);
var inst_36057 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36058 = figwheel.client.auto_jump_to_error.call(null,opts,inst_36057);
var state_36107__$1 = (function (){var statearr_36117 = state_36107;
(statearr_36117[(7)] = inst_36056);

return statearr_36117;
})();
var statearr_36118_36164 = state_36107__$1;
(statearr_36118_36164[(2)] = inst_36058);

(statearr_36118_36164[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36108 === (31))){
var inst_36086 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_36107__$1 = state_36107;
if(cljs.core.truth_(inst_36086)){
var statearr_36119_36165 = state_36107__$1;
(statearr_36119_36165[(1)] = (34));

} else {
var statearr_36120_36166 = state_36107__$1;
(statearr_36120_36166[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36108 === (32))){
var inst_36095 = (state_36107[(2)]);
var state_36107__$1 = state_36107;
var statearr_36121_36167 = state_36107__$1;
(statearr_36121_36167[(2)] = inst_36095);

(statearr_36121_36167[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36108 === (33))){
var inst_36082 = (state_36107[(2)]);
var inst_36083 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36084 = figwheel.client.auto_jump_to_error.call(null,opts,inst_36083);
var state_36107__$1 = (function (){var statearr_36122 = state_36107;
(statearr_36122[(8)] = inst_36082);

return statearr_36122;
})();
var statearr_36123_36168 = state_36107__$1;
(statearr_36123_36168[(2)] = inst_36084);

(statearr_36123_36168[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36108 === (13))){
var inst_36041 = figwheel.client.heads_up.clear.call(null);
var state_36107__$1 = state_36107;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36107__$1,(16),inst_36041);
} else {
if((state_val_36108 === (22))){
var inst_36062 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36063 = figwheel.client.heads_up.append_warning_message.call(null,inst_36062);
var state_36107__$1 = state_36107;
var statearr_36124_36169 = state_36107__$1;
(statearr_36124_36169[(2)] = inst_36063);

(statearr_36124_36169[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36108 === (36))){
var inst_36093 = (state_36107[(2)]);
var state_36107__$1 = state_36107;
var statearr_36125_36170 = state_36107__$1;
(statearr_36125_36170[(2)] = inst_36093);

(statearr_36125_36170[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36108 === (29))){
var inst_36073 = (state_36107[(2)]);
var inst_36074 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36075 = figwheel.client.auto_jump_to_error.call(null,opts,inst_36074);
var state_36107__$1 = (function (){var statearr_36126 = state_36107;
(statearr_36126[(9)] = inst_36073);

return statearr_36126;
})();
var statearr_36127_36171 = state_36107__$1;
(statearr_36127_36171[(2)] = inst_36075);

(statearr_36127_36171[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36108 === (6))){
var inst_36022 = (state_36107[(10)]);
var state_36107__$1 = state_36107;
var statearr_36128_36172 = state_36107__$1;
(statearr_36128_36172[(2)] = inst_36022);

(statearr_36128_36172[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36108 === (28))){
var inst_36069 = (state_36107[(2)]);
var inst_36070 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36071 = figwheel.client.heads_up.display_warning.call(null,inst_36070);
var state_36107__$1 = (function (){var statearr_36129 = state_36107;
(statearr_36129[(11)] = inst_36069);

return statearr_36129;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36107__$1,(29),inst_36071);
} else {
if((state_val_36108 === (25))){
var inst_36067 = figwheel.client.heads_up.clear.call(null);
var state_36107__$1 = state_36107;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36107__$1,(28),inst_36067);
} else {
if((state_val_36108 === (34))){
var inst_36088 = figwheel.client.heads_up.flash_loaded.call(null);
var state_36107__$1 = state_36107;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36107__$1,(37),inst_36088);
} else {
if((state_val_36108 === (17))){
var inst_36047 = (state_36107[(2)]);
var inst_36048 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36049 = figwheel.client.auto_jump_to_error.call(null,opts,inst_36048);
var state_36107__$1 = (function (){var statearr_36130 = state_36107;
(statearr_36130[(12)] = inst_36047);

return statearr_36130;
})();
var statearr_36131_36173 = state_36107__$1;
(statearr_36131_36173[(2)] = inst_36049);

(statearr_36131_36173[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36108 === (3))){
var inst_36039 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_36107__$1 = state_36107;
if(cljs.core.truth_(inst_36039)){
var statearr_36132_36174 = state_36107__$1;
(statearr_36132_36174[(1)] = (13));

} else {
var statearr_36133_36175 = state_36107__$1;
(statearr_36133_36175[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36108 === (12))){
var inst_36035 = (state_36107[(2)]);
var state_36107__$1 = state_36107;
var statearr_36134_36176 = state_36107__$1;
(statearr_36134_36176[(2)] = inst_36035);

(statearr_36134_36176[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36108 === (2))){
var inst_36022 = (state_36107[(10)]);
var inst_36022__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_36107__$1 = (function (){var statearr_36135 = state_36107;
(statearr_36135[(10)] = inst_36022__$1);

return statearr_36135;
})();
if(cljs.core.truth_(inst_36022__$1)){
var statearr_36136_36177 = state_36107__$1;
(statearr_36136_36177[(1)] = (5));

} else {
var statearr_36137_36178 = state_36107__$1;
(statearr_36137_36178[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36108 === (23))){
var inst_36065 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_36107__$1 = state_36107;
if(cljs.core.truth_(inst_36065)){
var statearr_36138_36179 = state_36107__$1;
(statearr_36138_36179[(1)] = (25));

} else {
var statearr_36139_36180 = state_36107__$1;
(statearr_36139_36180[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36108 === (35))){
var state_36107__$1 = state_36107;
var statearr_36140_36181 = state_36107__$1;
(statearr_36140_36181[(2)] = null);

(statearr_36140_36181[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36108 === (19))){
var inst_36060 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_36107__$1 = state_36107;
if(cljs.core.truth_(inst_36060)){
var statearr_36141_36182 = state_36107__$1;
(statearr_36141_36182[(1)] = (22));

} else {
var statearr_36142_36183 = state_36107__$1;
(statearr_36142_36183[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36108 === (11))){
var inst_36031 = (state_36107[(2)]);
var state_36107__$1 = state_36107;
var statearr_36143_36184 = state_36107__$1;
(statearr_36143_36184[(2)] = inst_36031);

(statearr_36143_36184[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36108 === (9))){
var inst_36033 = figwheel.client.heads_up.clear.call(null);
var state_36107__$1 = state_36107;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36107__$1,(12),inst_36033);
} else {
if((state_val_36108 === (5))){
var inst_36024 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_36107__$1 = state_36107;
var statearr_36144_36185 = state_36107__$1;
(statearr_36144_36185[(2)] = inst_36024);

(statearr_36144_36185[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36108 === (14))){
var inst_36051 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_36107__$1 = state_36107;
if(cljs.core.truth_(inst_36051)){
var statearr_36145_36186 = state_36107__$1;
(statearr_36145_36186[(1)] = (18));

} else {
var statearr_36146_36187 = state_36107__$1;
(statearr_36146_36187[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36108 === (26))){
var inst_36077 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_36107__$1 = state_36107;
if(cljs.core.truth_(inst_36077)){
var statearr_36147_36188 = state_36107__$1;
(statearr_36147_36188[(1)] = (30));

} else {
var statearr_36148_36189 = state_36107__$1;
(statearr_36148_36189[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36108 === (16))){
var inst_36043 = (state_36107[(2)]);
var inst_36044 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36045 = figwheel.client.heads_up.display_exception.call(null,inst_36044);
var state_36107__$1 = (function (){var statearr_36149 = state_36107;
(statearr_36149[(13)] = inst_36043);

return statearr_36149;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36107__$1,(17),inst_36045);
} else {
if((state_val_36108 === (30))){
var inst_36079 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36080 = figwheel.client.heads_up.display_warning.call(null,inst_36079);
var state_36107__$1 = state_36107;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36107__$1,(33),inst_36080);
} else {
if((state_val_36108 === (10))){
var inst_36037 = (state_36107[(2)]);
var state_36107__$1 = state_36107;
var statearr_36150_36190 = state_36107__$1;
(statearr_36150_36190[(2)] = inst_36037);

(statearr_36150_36190[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36108 === (18))){
var inst_36053 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36054 = figwheel.client.heads_up.display_exception.call(null,inst_36053);
var state_36107__$1 = state_36107;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36107__$1,(21),inst_36054);
} else {
if((state_val_36108 === (37))){
var inst_36090 = (state_36107[(2)]);
var state_36107__$1 = state_36107;
var statearr_36151_36191 = state_36107__$1;
(statearr_36151_36191[(2)] = inst_36090);

(statearr_36151_36191[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36108 === (8))){
var inst_36029 = figwheel.client.heads_up.flash_loaded.call(null);
var state_36107__$1 = state_36107;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36107__$1,(11),inst_36029);
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
});})(c__30588__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__30500__auto__,c__30588__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30501__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30501__auto____0 = (function (){
var statearr_36152 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36152[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30501__auto__);

(statearr_36152[(1)] = (1));

return statearr_36152;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30501__auto____1 = (function (state_36107){
while(true){
var ret_value__30502__auto__ = (function (){try{while(true){
var result__30503__auto__ = switch__30500__auto__.call(null,state_36107);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30503__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30503__auto__;
}
break;
}
}catch (e36153){if((e36153 instanceof Object)){
var ex__30504__auto__ = e36153;
var statearr_36154_36192 = state_36107;
(statearr_36154_36192[(5)] = ex__30504__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36107);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36153;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30502__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36193 = state_36107;
state_36107 = G__36193;
continue;
} else {
return ret_value__30502__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30501__auto__ = function(state_36107){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30501__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30501__auto____1.call(this,state_36107);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30501__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30501__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30501__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30501__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30501__auto__;
})()
;})(switch__30500__auto__,c__30588__auto__,msg_hist,msg_names,msg))
})();
var state__30590__auto__ = (function (){var statearr_36155 = f__30589__auto__.call(null);
(statearr_36155[(6)] = c__30588__auto__);

return statearr_36155;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30590__auto__);
});})(c__30588__auto__,msg_hist,msg_names,msg))
);

return c__30588__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__30588__auto___36222 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30588__auto___36222,ch){
return (function (){
var f__30589__auto__ = (function (){var switch__30500__auto__ = ((function (c__30588__auto___36222,ch){
return (function (state_36208){
var state_val_36209 = (state_36208[(1)]);
if((state_val_36209 === (1))){
var state_36208__$1 = state_36208;
var statearr_36210_36223 = state_36208__$1;
(statearr_36210_36223[(2)] = null);

(statearr_36210_36223[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36209 === (2))){
var state_36208__$1 = state_36208;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36208__$1,(4),ch);
} else {
if((state_val_36209 === (3))){
var inst_36206 = (state_36208[(2)]);
var state_36208__$1 = state_36208;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36208__$1,inst_36206);
} else {
if((state_val_36209 === (4))){
var inst_36196 = (state_36208[(7)]);
var inst_36196__$1 = (state_36208[(2)]);
var state_36208__$1 = (function (){var statearr_36211 = state_36208;
(statearr_36211[(7)] = inst_36196__$1);

return statearr_36211;
})();
if(cljs.core.truth_(inst_36196__$1)){
var statearr_36212_36224 = state_36208__$1;
(statearr_36212_36224[(1)] = (5));

} else {
var statearr_36213_36225 = state_36208__$1;
(statearr_36213_36225[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36209 === (5))){
var inst_36196 = (state_36208[(7)]);
var inst_36198 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_36196);
var state_36208__$1 = state_36208;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36208__$1,(8),inst_36198);
} else {
if((state_val_36209 === (6))){
var state_36208__$1 = state_36208;
var statearr_36214_36226 = state_36208__$1;
(statearr_36214_36226[(2)] = null);

(statearr_36214_36226[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36209 === (7))){
var inst_36204 = (state_36208[(2)]);
var state_36208__$1 = state_36208;
var statearr_36215_36227 = state_36208__$1;
(statearr_36215_36227[(2)] = inst_36204);

(statearr_36215_36227[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36209 === (8))){
var inst_36200 = (state_36208[(2)]);
var state_36208__$1 = (function (){var statearr_36216 = state_36208;
(statearr_36216[(8)] = inst_36200);

return statearr_36216;
})();
var statearr_36217_36228 = state_36208__$1;
(statearr_36217_36228[(2)] = null);

(statearr_36217_36228[(1)] = (2));


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
});})(c__30588__auto___36222,ch))
;
return ((function (switch__30500__auto__,c__30588__auto___36222,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__30501__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__30501__auto____0 = (function (){
var statearr_36218 = [null,null,null,null,null,null,null,null,null];
(statearr_36218[(0)] = figwheel$client$heads_up_plugin_$_state_machine__30501__auto__);

(statearr_36218[(1)] = (1));

return statearr_36218;
});
var figwheel$client$heads_up_plugin_$_state_machine__30501__auto____1 = (function (state_36208){
while(true){
var ret_value__30502__auto__ = (function (){try{while(true){
var result__30503__auto__ = switch__30500__auto__.call(null,state_36208);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30503__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30503__auto__;
}
break;
}
}catch (e36219){if((e36219 instanceof Object)){
var ex__30504__auto__ = e36219;
var statearr_36220_36229 = state_36208;
(statearr_36220_36229[(5)] = ex__30504__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36208);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36219;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30502__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36230 = state_36208;
state_36208 = G__36230;
continue;
} else {
return ret_value__30502__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__30501__auto__ = function(state_36208){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__30501__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__30501__auto____1.call(this,state_36208);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_$_state_machine__30501__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__30501__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__30501__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__30501__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__30501__auto__;
})()
;})(switch__30500__auto__,c__30588__auto___36222,ch))
})();
var state__30590__auto__ = (function (){var statearr_36221 = f__30589__auto__.call(null);
(statearr_36221[(6)] = c__30588__auto___36222);

return statearr_36221;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30590__auto__);
});})(c__30588__auto___36222,ch))
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
var c__30588__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30588__auto__){
return (function (){
var f__30589__auto__ = (function (){var switch__30500__auto__ = ((function (c__30588__auto__){
return (function (state_36236){
var state_val_36237 = (state_36236[(1)]);
if((state_val_36237 === (1))){
var inst_36231 = cljs.core.async.timeout.call(null,(3000));
var state_36236__$1 = state_36236;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36236__$1,(2),inst_36231);
} else {
if((state_val_36237 === (2))){
var inst_36233 = (state_36236[(2)]);
var inst_36234 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_36236__$1 = (function (){var statearr_36238 = state_36236;
(statearr_36238[(7)] = inst_36233);

return statearr_36238;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36236__$1,inst_36234);
} else {
return null;
}
}
});})(c__30588__auto__))
;
return ((function (switch__30500__auto__,c__30588__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__30501__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__30501__auto____0 = (function (){
var statearr_36239 = [null,null,null,null,null,null,null,null];
(statearr_36239[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__30501__auto__);

(statearr_36239[(1)] = (1));

return statearr_36239;
});
var figwheel$client$enforce_project_plugin_$_state_machine__30501__auto____1 = (function (state_36236){
while(true){
var ret_value__30502__auto__ = (function (){try{while(true){
var result__30503__auto__ = switch__30500__auto__.call(null,state_36236);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30503__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30503__auto__;
}
break;
}
}catch (e36240){if((e36240 instanceof Object)){
var ex__30504__auto__ = e36240;
var statearr_36241_36243 = state_36236;
(statearr_36241_36243[(5)] = ex__30504__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36236);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36240;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30502__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36244 = state_36236;
state_36236 = G__36244;
continue;
} else {
return ret_value__30502__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__30501__auto__ = function(state_36236){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__30501__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__30501__auto____1.call(this,state_36236);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_project_plugin_$_state_machine__30501__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__30501__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__30501__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__30501__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__30501__auto__;
})()
;})(switch__30500__auto__,c__30588__auto__))
})();
var state__30590__auto__ = (function (){var statearr_36242 = f__30589__auto__.call(null);
(statearr_36242[(6)] = c__30588__auto__);

return statearr_36242;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30590__auto__);
});})(c__30588__auto__))
);

return c__30588__auto__;
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
var c__30588__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30588__auto__,figwheel_version,temp__4657__auto__){
return (function (){
var f__30589__auto__ = (function (){var switch__30500__auto__ = ((function (c__30588__auto__,figwheel_version,temp__4657__auto__){
return (function (state_36251){
var state_val_36252 = (state_36251[(1)]);
if((state_val_36252 === (1))){
var inst_36245 = cljs.core.async.timeout.call(null,(2000));
var state_36251__$1 = state_36251;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36251__$1,(2),inst_36245);
} else {
if((state_val_36252 === (2))){
var inst_36247 = (state_36251[(2)]);
var inst_36248 = ["Figwheel Client Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_36249 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_36248);
var state_36251__$1 = (function (){var statearr_36253 = state_36251;
(statearr_36253[(7)] = inst_36247);

return statearr_36253;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36251__$1,inst_36249);
} else {
return null;
}
}
});})(c__30588__auto__,figwheel_version,temp__4657__auto__))
;
return ((function (switch__30500__auto__,c__30588__auto__,figwheel_version,temp__4657__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30501__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30501__auto____0 = (function (){
var statearr_36254 = [null,null,null,null,null,null,null,null];
(statearr_36254[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30501__auto__);

(statearr_36254[(1)] = (1));

return statearr_36254;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30501__auto____1 = (function (state_36251){
while(true){
var ret_value__30502__auto__ = (function (){try{while(true){
var result__30503__auto__ = switch__30500__auto__.call(null,state_36251);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30503__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30503__auto__;
}
break;
}
}catch (e36255){if((e36255 instanceof Object)){
var ex__30504__auto__ = e36255;
var statearr_36256_36258 = state_36251;
(statearr_36256_36258[(5)] = ex__30504__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36251);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36255;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30502__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36259 = state_36251;
state_36251 = G__36259;
continue;
} else {
return ret_value__30502__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30501__auto__ = function(state_36251){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30501__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30501__auto____1.call(this,state_36251);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30501__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30501__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30501__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30501__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30501__auto__;
})()
;})(switch__30500__auto__,c__30588__auto__,figwheel_version,temp__4657__auto__))
})();
var state__30590__auto__ = (function (){var statearr_36257 = f__30589__auto__.call(null);
(statearr_36257[(6)] = c__30588__auto__);

return statearr_36257;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30590__auto__);
});})(c__30588__auto__,figwheel_version,temp__4657__auto__))
);

return c__30588__auto__;
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
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__36260){
var map__36261 = p__36260;
var map__36261__$1 = ((((!((map__36261 == null)))?((((map__36261.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36261.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36261):map__36261);
var file = cljs.core.get.call(null,map__36261__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__36261__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__36261__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__36263 = "";
var G__36263__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__36263),"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__36263);
var G__36263__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__36263__$1)," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__36263__$1);
if(cljs.core.truth_((function (){var and__27977__auto__ = line;
if(cljs.core.truth_(and__27977__auto__)){
return column;
} else {
return and__27977__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__36263__$2),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__36263__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__36264){
var map__36265 = p__36264;
var map__36265__$1 = ((((!((map__36265 == null)))?((((map__36265.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36265.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36265):map__36265);
var ed = map__36265__$1;
var formatted_exception = cljs.core.get.call(null,map__36265__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__36265__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__36265__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__36267_36271 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__36268_36272 = null;
var count__36269_36273 = (0);
var i__36270_36274 = (0);
while(true){
if((i__36270_36274 < count__36269_36273)){
var msg_36275 = cljs.core._nth.call(null,chunk__36268_36272,i__36270_36274);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_36275);

var G__36276 = seq__36267_36271;
var G__36277 = chunk__36268_36272;
var G__36278 = count__36269_36273;
var G__36279 = (i__36270_36274 + (1));
seq__36267_36271 = G__36276;
chunk__36268_36272 = G__36277;
count__36269_36273 = G__36278;
i__36270_36274 = G__36279;
continue;
} else {
var temp__4657__auto___36280 = cljs.core.seq.call(null,seq__36267_36271);
if(temp__4657__auto___36280){
var seq__36267_36281__$1 = temp__4657__auto___36280;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36267_36281__$1)){
var c__28828__auto___36282 = cljs.core.chunk_first.call(null,seq__36267_36281__$1);
var G__36283 = cljs.core.chunk_rest.call(null,seq__36267_36281__$1);
var G__36284 = c__28828__auto___36282;
var G__36285 = cljs.core.count.call(null,c__28828__auto___36282);
var G__36286 = (0);
seq__36267_36271 = G__36283;
chunk__36268_36272 = G__36284;
count__36269_36273 = G__36285;
i__36270_36274 = G__36286;
continue;
} else {
var msg_36287 = cljs.core.first.call(null,seq__36267_36281__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_36287);

var G__36288 = cljs.core.next.call(null,seq__36267_36281__$1);
var G__36289 = null;
var G__36290 = (0);
var G__36291 = (0);
seq__36267_36271 = G__36288;
chunk__36268_36272 = G__36289;
count__36269_36273 = G__36290;
i__36270_36274 = G__36291;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Error on ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,ed))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__36292){
var map__36293 = p__36292;
var map__36293__$1 = ((((!((map__36293 == null)))?((((map__36293.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36293.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36293):map__36293);
var w = map__36293__$1;
var message = cljs.core.get.call(null,map__36293__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),["Figwheel: Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message))," in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,message))].join(''));

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
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"out\\figwheel\\client.cljs",33,1,363,363,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"out\\figwheel\\client.cljs",30,1,355,355,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,["ws://",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),"/figwheel-ws"].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
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
if(cljs.core.truth_((function (){var and__27977__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__27977__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__27977__auto__;
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
var seq__36295 = cljs.core.seq.call(null,plugins);
var chunk__36296 = null;
var count__36297 = (0);
var i__36298 = (0);
while(true){
if((i__36298 < count__36297)){
var vec__36299 = cljs.core._nth.call(null,chunk__36296,i__36298);
var k = cljs.core.nth.call(null,vec__36299,(0),null);
var plugin = cljs.core.nth.call(null,vec__36299,(1),null);
if(cljs.core.truth_(plugin)){
var pl_36305 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__36295,chunk__36296,count__36297,i__36298,pl_36305,vec__36299,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_36305.call(null,msg_hist);
});})(seq__36295,chunk__36296,count__36297,i__36298,pl_36305,vec__36299,k,plugin))
);
} else {
}

var G__36306 = seq__36295;
var G__36307 = chunk__36296;
var G__36308 = count__36297;
var G__36309 = (i__36298 + (1));
seq__36295 = G__36306;
chunk__36296 = G__36307;
count__36297 = G__36308;
i__36298 = G__36309;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__36295);
if(temp__4657__auto__){
var seq__36295__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36295__$1)){
var c__28828__auto__ = cljs.core.chunk_first.call(null,seq__36295__$1);
var G__36310 = cljs.core.chunk_rest.call(null,seq__36295__$1);
var G__36311 = c__28828__auto__;
var G__36312 = cljs.core.count.call(null,c__28828__auto__);
var G__36313 = (0);
seq__36295 = G__36310;
chunk__36296 = G__36311;
count__36297 = G__36312;
i__36298 = G__36313;
continue;
} else {
var vec__36302 = cljs.core.first.call(null,seq__36295__$1);
var k = cljs.core.nth.call(null,vec__36302,(0),null);
var plugin = cljs.core.nth.call(null,vec__36302,(1),null);
if(cljs.core.truth_(plugin)){
var pl_36314 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__36295,chunk__36296,count__36297,i__36298,pl_36314,vec__36302,k,plugin,seq__36295__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_36314.call(null,msg_hist);
});})(seq__36295,chunk__36296,count__36297,i__36298,pl_36314,vec__36302,k,plugin,seq__36295__$1,temp__4657__auto__))
);
} else {
}

var G__36315 = cljs.core.next.call(null,seq__36295__$1);
var G__36316 = null;
var G__36317 = (0);
var G__36318 = (0);
seq__36295 = G__36315;
chunk__36296 = G__36316;
count__36297 = G__36317;
i__36298 = G__36318;
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
var G__36320 = arguments.length;
switch (G__36320) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
return (
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__36321_36326 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__36322_36327 = null;
var count__36323_36328 = (0);
var i__36324_36329 = (0);
while(true){
if((i__36324_36329 < count__36323_36328)){
var msg_36330 = cljs.core._nth.call(null,chunk__36322_36327,i__36324_36329);
figwheel.client.socket.handle_incoming_message.call(null,msg_36330);

var G__36331 = seq__36321_36326;
var G__36332 = chunk__36322_36327;
var G__36333 = count__36323_36328;
var G__36334 = (i__36324_36329 + (1));
seq__36321_36326 = G__36331;
chunk__36322_36327 = G__36332;
count__36323_36328 = G__36333;
i__36324_36329 = G__36334;
continue;
} else {
var temp__4657__auto___36335 = cljs.core.seq.call(null,seq__36321_36326);
if(temp__4657__auto___36335){
var seq__36321_36336__$1 = temp__4657__auto___36335;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36321_36336__$1)){
var c__28828__auto___36337 = cljs.core.chunk_first.call(null,seq__36321_36336__$1);
var G__36338 = cljs.core.chunk_rest.call(null,seq__36321_36336__$1);
var G__36339 = c__28828__auto___36337;
var G__36340 = cljs.core.count.call(null,c__28828__auto___36337);
var G__36341 = (0);
seq__36321_36326 = G__36338;
chunk__36322_36327 = G__36339;
count__36323_36328 = G__36340;
i__36324_36329 = G__36341;
continue;
} else {
var msg_36342 = cljs.core.first.call(null,seq__36321_36336__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_36342);

var G__36343 = cljs.core.next.call(null,seq__36321_36336__$1);
var G__36344 = null;
var G__36345 = (0);
var G__36346 = (0);
seq__36321_36326 = G__36343;
chunk__36322_36327 = G__36344;
count__36323_36328 = G__36345;
i__36324_36329 = G__36346;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
})))
;
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__29165__auto__ = [];
var len__29158__auto___36351 = arguments.length;
var i__29159__auto___36352 = (0);
while(true){
if((i__29159__auto___36352 < len__29158__auto___36351)){
args__29165__auto__.push((arguments[i__29159__auto___36352]));

var G__36353 = (i__29159__auto___36352 + (1));
i__29159__auto___36352 = G__36353;
continue;
} else {
}
break;
}

var argseq__29166__auto__ = ((((0) < args__29165__auto__.length))?(new cljs.core.IndexedSeq(args__29165__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__29166__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__36348){
var map__36349 = p__36348;
var map__36349__$1 = ((((!((map__36349 == null)))?((((map__36349.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36349.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36349):map__36349);
var opts = map__36349__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq36347){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36347));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e36354){if((e36354 instanceof Error)){
var e = e36354;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e36354;

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
return (function (p__36355){
var map__36356 = p__36355;
var map__36356__$1 = ((((!((map__36356 == null)))?((((map__36356.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36356.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36356):map__36356);
var msg_name = cljs.core.get.call(null,map__36356__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1519660839380
