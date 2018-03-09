// Compiled by ClojureScript 1.9.229 {}
goog.provide('sablono.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.string');
goog.require('sablono.normalize');
goog.require('sablono.util');
goog.require('sablono.interpreter');
goog.require('cljsjs.react');
goog.require('cljsjs.react.dom');
goog.require('clojure.string');
/**
 * Add an optional attribute argument to a function that returns a element vector.
 */
sablono.core.wrap_attrs = (function sablono$core$wrap_attrs(func){
return (function() { 
var G__26551__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
var vec__26548 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var seq__26549 = cljs.core.seq.call(null,vec__26548);
var first__26550 = cljs.core.first.call(null,seq__26549);
var seq__26549__$1 = cljs.core.next.call(null,seq__26549);
var tag = first__26550;
var body = seq__26549__$1;
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else {
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else {
return cljs.core.apply.call(null,func,args);
}
};
var G__26551 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26552__i = 0, G__26552__a = new Array(arguments.length -  0);
while (G__26552__i < G__26552__a.length) {G__26552__a[G__26552__i] = arguments[G__26552__i + 0]; ++G__26552__i;}
  args = new cljs.core.IndexedSeq(G__26552__a,0);
} 
return G__26551__delegate.call(this,args);};
G__26551.cljs$lang$maxFixedArity = 0;
G__26551.cljs$lang$applyTo = (function (arglist__26553){
var args = cljs.core.seq(arglist__26553);
return G__26551__delegate(args);
});
G__26551.cljs$core$IFn$_invoke$arity$variadic = G__26551__delegate;
return G__26551;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__25541__auto__ = (function sablono$core$update_arglists_$_iter__26558(s__26559){
return (new cljs.core.LazySeq(null,(function (){
var s__26559__$1 = s__26559;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__26559__$1);
if(temp__4657__auto__){
var s__26559__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__26559__$2)){
var c__25539__auto__ = cljs.core.chunk_first.call(null,s__26559__$2);
var size__25540__auto__ = cljs.core.count.call(null,c__25539__auto__);
var b__26561 = cljs.core.chunk_buffer.call(null,size__25540__auto__);
if((function (){var i__26560 = (0);
while(true){
if((i__26560 < size__25540__auto__)){
var args = cljs.core._nth.call(null,c__25539__auto__,i__26560);
cljs.core.chunk_append.call(null,b__26561,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__26562 = (i__26560 + (1));
i__26560 = G__26562;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26561),sablono$core$update_arglists_$_iter__26558.call(null,cljs.core.chunk_rest.call(null,s__26559__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26561),null);
}
} else {
var args = cljs.core.first.call(null,s__26559__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__26558.call(null,cljs.core.rest.call(null,s__26559__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__25541__auto__.call(null,arglists);
});
/**
 * Include a list of external stylesheet files.
 */
sablono.core.include_css = (function sablono$core$include_css(var_args){
var args__25843__auto__ = [];
var len__25836__auto___26568 = arguments.length;
var i__25837__auto___26569 = (0);
while(true){
if((i__25837__auto___26569 < len__25836__auto___26568)){
args__25843__auto__.push((arguments[i__25837__auto___26569]));

var G__26570 = (i__25837__auto___26569 + (1));
i__25837__auto___26569 = G__26570;
continue;
} else {
}
break;
}

var argseq__25844__auto__ = ((((0) < args__25843__auto__.length))?(new cljs.core.IndexedSeq(args__25843__auto__.slice((0)),(0),null)):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__25844__auto__);
});

sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__25541__auto__ = (function sablono$core$iter__26564(s__26565){
return (new cljs.core.LazySeq(null,(function (){
var s__26565__$1 = s__26565;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__26565__$1);
if(temp__4657__auto__){
var s__26565__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__26565__$2)){
var c__25539__auto__ = cljs.core.chunk_first.call(null,s__26565__$2);
var size__25540__auto__ = cljs.core.count.call(null,c__25539__auto__);
var b__26567 = cljs.core.chunk_buffer.call(null,size__25540__auto__);
if((function (){var i__26566 = (0);
while(true){
if((i__26566 < size__25540__auto__)){
var style = cljs.core._nth.call(null,c__25539__auto__,i__26566);
cljs.core.chunk_append.call(null,b__26567,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__26571 = (i__26566 + (1));
i__26566 = G__26571;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26567),sablono$core$iter__26564.call(null,cljs.core.chunk_rest.call(null,s__26565__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26567),null);
}
} else {
var style = cljs.core.first.call(null,s__26565__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__26564.call(null,cljs.core.rest.call(null,s__26565__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__25541__auto__.call(null,styles);
});

sablono.core.include_css.cljs$lang$maxFixedArity = (0);

sablono.core.include_css.cljs$lang$applyTo = (function (seq26563){
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26563));
});

/**
 * Include the JavaScript library at `src`.
 */
sablono.core.include_js = (function sablono$core$include_js(src){
return goog.dom.appendChild(goog.dom.getDocument().body,goog.dom.createDom("script",({"src": src})));
});
/**
 * Include Facebook's React JavaScript library.
 */
sablono.core.include_react = (function sablono$core$include_react(){
return sablono.core.include_js.call(null,"http://fb.me/react-0.12.2.js");
});
/**
 * Wraps some content in a HTML hyperlink with the supplied URL.
 */
sablono.core.link_to26572 = (function sablono$core$link_to26572(var_args){
var args__25843__auto__ = [];
var len__25836__auto___26575 = arguments.length;
var i__25837__auto___26576 = (0);
while(true){
if((i__25837__auto___26576 < len__25836__auto___26575)){
args__25843__auto__.push((arguments[i__25837__auto___26576]));

var G__26577 = (i__25837__auto___26576 + (1));
i__25837__auto___26576 = G__26577;
continue;
} else {
}
break;
}

var argseq__25844__auto__ = ((((1) < args__25843__auto__.length))?(new cljs.core.IndexedSeq(args__25843__auto__.slice((1)),(0),null)):null);
return sablono.core.link_to26572.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25844__auto__);
});

sablono.core.link_to26572.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
});

sablono.core.link_to26572.cljs$lang$maxFixedArity = (1);

sablono.core.link_to26572.cljs$lang$applyTo = (function (seq26573){
var G__26574 = cljs.core.first.call(null,seq26573);
var seq26573__$1 = cljs.core.next.call(null,seq26573);
return sablono.core.link_to26572.cljs$core$IFn$_invoke$arity$variadic(G__26574,seq26573__$1);
});


sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to26572);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to26578 = (function sablono$core$mail_to26578(var_args){
var args__25843__auto__ = [];
var len__25836__auto___26585 = arguments.length;
var i__25837__auto___26586 = (0);
while(true){
if((i__25837__auto___26586 < len__25836__auto___26585)){
args__25843__auto__.push((arguments[i__25837__auto___26586]));

var G__26587 = (i__25837__auto___26586 + (1));
i__25837__auto___26586 = G__26587;
continue;
} else {
}
break;
}

var argseq__25844__auto__ = ((((1) < args__25843__auto__.length))?(new cljs.core.IndexedSeq(args__25843__auto__.slice((1)),(0),null)):null);
return sablono.core.mail_to26578.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25844__auto__);
});

sablono.core.mail_to26578.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__26581){
var vec__26582 = p__26581;
var content = cljs.core.nth.call(null,vec__26582,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__24761__auto__ = content;
if(cljs.core.truth_(or__24761__auto__)){
return or__24761__auto__;
} else {
return e_mail;
}
})()], null);
});

sablono.core.mail_to26578.cljs$lang$maxFixedArity = (1);

sablono.core.mail_to26578.cljs$lang$applyTo = (function (seq26579){
var G__26580 = cljs.core.first.call(null,seq26579);
var seq26579__$1 = cljs.core.next.call(null,seq26579);
return sablono.core.mail_to26578.cljs$core$IFn$_invoke$arity$variadic(G__26580,seq26579__$1);
});


sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to26578);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list26588 = (function sablono$core$unordered_list26588(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__25541__auto__ = (function sablono$core$unordered_list26588_$_iter__26593(s__26594){
return (new cljs.core.LazySeq(null,(function (){
var s__26594__$1 = s__26594;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__26594__$1);
if(temp__4657__auto__){
var s__26594__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__26594__$2)){
var c__25539__auto__ = cljs.core.chunk_first.call(null,s__26594__$2);
var size__25540__auto__ = cljs.core.count.call(null,c__25539__auto__);
var b__26596 = cljs.core.chunk_buffer.call(null,size__25540__auto__);
if((function (){var i__26595 = (0);
while(true){
if((i__26595 < size__25540__auto__)){
var x = cljs.core._nth.call(null,c__25539__auto__,i__26595);
cljs.core.chunk_append.call(null,b__26596,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__26597 = (i__26595 + (1));
i__26595 = G__26597;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26596),sablono$core$unordered_list26588_$_iter__26593.call(null,cljs.core.chunk_rest.call(null,s__26594__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26596),null);
}
} else {
var x = cljs.core.first.call(null,s__26594__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list26588_$_iter__26593.call(null,cljs.core.rest.call(null,s__26594__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__25541__auto__.call(null,coll);
})()], null);
});

sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list26588);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list26598 = (function sablono$core$ordered_list26598(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__25541__auto__ = (function sablono$core$ordered_list26598_$_iter__26603(s__26604){
return (new cljs.core.LazySeq(null,(function (){
var s__26604__$1 = s__26604;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__26604__$1);
if(temp__4657__auto__){
var s__26604__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__26604__$2)){
var c__25539__auto__ = cljs.core.chunk_first.call(null,s__26604__$2);
var size__25540__auto__ = cljs.core.count.call(null,c__25539__auto__);
var b__26606 = cljs.core.chunk_buffer.call(null,size__25540__auto__);
if((function (){var i__26605 = (0);
while(true){
if((i__26605 < size__25540__auto__)){
var x = cljs.core._nth.call(null,c__25539__auto__,i__26605);
cljs.core.chunk_append.call(null,b__26606,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__26607 = (i__26605 + (1));
i__26605 = G__26607;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26606),sablono$core$ordered_list26598_$_iter__26603.call(null,cljs.core.chunk_rest.call(null,s__26604__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26606),null);
}
} else {
var x = cljs.core.first.call(null,s__26604__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list26598_$_iter__26603.call(null,cljs.core.rest.call(null,s__26604__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__25541__auto__.call(null,coll);
})()], null);
});

sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list26598);
/**
 * Create an image element.
 */
sablono.core.image26608 = (function sablono$core$image26608(var_args){
var args26609 = [];
var len__25836__auto___26612 = arguments.length;
var i__25837__auto___26613 = (0);
while(true){
if((i__25837__auto___26613 < len__25836__auto___26612)){
args26609.push((arguments[i__25837__auto___26613]));

var G__26614 = (i__25837__auto___26613 + (1));
i__25837__auto___26613 = G__26614;
continue;
} else {
}
break;
}

var G__26611 = args26609.length;
switch (G__26611) {
case 1:
return sablono.core.image26608.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image26608.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26609.length)].join('')));

}
});

sablono.core.image26608.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});

sablono.core.image26608.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});

sablono.core.image26608.cljs$lang$maxFixedArity = 2;


sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image26608);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.call(null,(function (p1__26616_SHARP_,p2__26617_SHARP_){
return [cljs.core.str(p1__26616_SHARP_),cljs.core.str("["),cljs.core.str(p2__26617_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.call(null,(function (p1__26618_SHARP_,p2__26619_SHARP_){
return [cljs.core.str(p1__26618_SHARP_),cljs.core.str("-"),cljs.core.str(p2__26619_SHARP_)].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Creates a new <input> element.
 */
sablono.core.input_field_STAR_ = (function sablono$core$input_field_STAR_(type,name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__24761__auto__ = value;
if(cljs.core.truth_(or__24761__auto__)){
return or__24761__auto__;
} else {
return undefined;
}
})()], null)], null);
});
/**
 * Creates a color input field.
 */
sablono.core.color_field26620 = (function sablono$core$color_field26620(var_args){
var args26621 = [];
var len__25836__auto___26688 = arguments.length;
var i__25837__auto___26689 = (0);
while(true){
if((i__25837__auto___26689 < len__25836__auto___26688)){
args26621.push((arguments[i__25837__auto___26689]));

var G__26690 = (i__25837__auto___26689 + (1));
i__25837__auto___26689 = G__26690;
continue;
} else {
}
break;
}

var G__26623 = args26621.length;
switch (G__26623) {
case 1:
return sablono.core.color_field26620.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field26620.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26621.length)].join('')));

}
});

sablono.core.color_field26620.cljs$core$IFn$_invoke$arity$1 = (function (name__26535__auto__){
return sablono.core.color_field26620.call(null,name__26535__auto__,null);
});

sablono.core.color_field26620.cljs$core$IFn$_invoke$arity$2 = (function (name__26535__auto__,value__26536__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__26535__auto__,value__26536__auto__);
});

sablono.core.color_field26620.cljs$lang$maxFixedArity = 2;


sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field26620);

/**
 * Creates a date input field.
 */
sablono.core.date_field26624 = (function sablono$core$date_field26624(var_args){
var args26625 = [];
var len__25836__auto___26692 = arguments.length;
var i__25837__auto___26693 = (0);
while(true){
if((i__25837__auto___26693 < len__25836__auto___26692)){
args26625.push((arguments[i__25837__auto___26693]));

var G__26694 = (i__25837__auto___26693 + (1));
i__25837__auto___26693 = G__26694;
continue;
} else {
}
break;
}

var G__26627 = args26625.length;
switch (G__26627) {
case 1:
return sablono.core.date_field26624.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field26624.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26625.length)].join('')));

}
});

sablono.core.date_field26624.cljs$core$IFn$_invoke$arity$1 = (function (name__26535__auto__){
return sablono.core.date_field26624.call(null,name__26535__auto__,null);
});

sablono.core.date_field26624.cljs$core$IFn$_invoke$arity$2 = (function (name__26535__auto__,value__26536__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__26535__auto__,value__26536__auto__);
});

sablono.core.date_field26624.cljs$lang$maxFixedArity = 2;


sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field26624);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field26628 = (function sablono$core$datetime_field26628(var_args){
var args26629 = [];
var len__25836__auto___26696 = arguments.length;
var i__25837__auto___26697 = (0);
while(true){
if((i__25837__auto___26697 < len__25836__auto___26696)){
args26629.push((arguments[i__25837__auto___26697]));

var G__26698 = (i__25837__auto___26697 + (1));
i__25837__auto___26697 = G__26698;
continue;
} else {
}
break;
}

var G__26631 = args26629.length;
switch (G__26631) {
case 1:
return sablono.core.datetime_field26628.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field26628.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26629.length)].join('')));

}
});

sablono.core.datetime_field26628.cljs$core$IFn$_invoke$arity$1 = (function (name__26535__auto__){
return sablono.core.datetime_field26628.call(null,name__26535__auto__,null);
});

sablono.core.datetime_field26628.cljs$core$IFn$_invoke$arity$2 = (function (name__26535__auto__,value__26536__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__26535__auto__,value__26536__auto__);
});

sablono.core.datetime_field26628.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field26628);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field26632 = (function sablono$core$datetime_local_field26632(var_args){
var args26633 = [];
var len__25836__auto___26700 = arguments.length;
var i__25837__auto___26701 = (0);
while(true){
if((i__25837__auto___26701 < len__25836__auto___26700)){
args26633.push((arguments[i__25837__auto___26701]));

var G__26702 = (i__25837__auto___26701 + (1));
i__25837__auto___26701 = G__26702;
continue;
} else {
}
break;
}

var G__26635 = args26633.length;
switch (G__26635) {
case 1:
return sablono.core.datetime_local_field26632.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field26632.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26633.length)].join('')));

}
});

sablono.core.datetime_local_field26632.cljs$core$IFn$_invoke$arity$1 = (function (name__26535__auto__){
return sablono.core.datetime_local_field26632.call(null,name__26535__auto__,null);
});

sablono.core.datetime_local_field26632.cljs$core$IFn$_invoke$arity$2 = (function (name__26535__auto__,value__26536__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__26535__auto__,value__26536__auto__);
});

sablono.core.datetime_local_field26632.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field26632);

/**
 * Creates a email input field.
 */
sablono.core.email_field26636 = (function sablono$core$email_field26636(var_args){
var args26637 = [];
var len__25836__auto___26704 = arguments.length;
var i__25837__auto___26705 = (0);
while(true){
if((i__25837__auto___26705 < len__25836__auto___26704)){
args26637.push((arguments[i__25837__auto___26705]));

var G__26706 = (i__25837__auto___26705 + (1));
i__25837__auto___26705 = G__26706;
continue;
} else {
}
break;
}

var G__26639 = args26637.length;
switch (G__26639) {
case 1:
return sablono.core.email_field26636.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field26636.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26637.length)].join('')));

}
});

sablono.core.email_field26636.cljs$core$IFn$_invoke$arity$1 = (function (name__26535__auto__){
return sablono.core.email_field26636.call(null,name__26535__auto__,null);
});

sablono.core.email_field26636.cljs$core$IFn$_invoke$arity$2 = (function (name__26535__auto__,value__26536__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__26535__auto__,value__26536__auto__);
});

sablono.core.email_field26636.cljs$lang$maxFixedArity = 2;


sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field26636);

/**
 * Creates a file input field.
 */
sablono.core.file_field26640 = (function sablono$core$file_field26640(var_args){
var args26641 = [];
var len__25836__auto___26708 = arguments.length;
var i__25837__auto___26709 = (0);
while(true){
if((i__25837__auto___26709 < len__25836__auto___26708)){
args26641.push((arguments[i__25837__auto___26709]));

var G__26710 = (i__25837__auto___26709 + (1));
i__25837__auto___26709 = G__26710;
continue;
} else {
}
break;
}

var G__26643 = args26641.length;
switch (G__26643) {
case 1:
return sablono.core.file_field26640.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field26640.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26641.length)].join('')));

}
});

sablono.core.file_field26640.cljs$core$IFn$_invoke$arity$1 = (function (name__26535__auto__){
return sablono.core.file_field26640.call(null,name__26535__auto__,null);
});

sablono.core.file_field26640.cljs$core$IFn$_invoke$arity$2 = (function (name__26535__auto__,value__26536__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__26535__auto__,value__26536__auto__);
});

sablono.core.file_field26640.cljs$lang$maxFixedArity = 2;


sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field26640);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field26644 = (function sablono$core$hidden_field26644(var_args){
var args26645 = [];
var len__25836__auto___26712 = arguments.length;
var i__25837__auto___26713 = (0);
while(true){
if((i__25837__auto___26713 < len__25836__auto___26712)){
args26645.push((arguments[i__25837__auto___26713]));

var G__26714 = (i__25837__auto___26713 + (1));
i__25837__auto___26713 = G__26714;
continue;
} else {
}
break;
}

var G__26647 = args26645.length;
switch (G__26647) {
case 1:
return sablono.core.hidden_field26644.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field26644.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26645.length)].join('')));

}
});

sablono.core.hidden_field26644.cljs$core$IFn$_invoke$arity$1 = (function (name__26535__auto__){
return sablono.core.hidden_field26644.call(null,name__26535__auto__,null);
});

sablono.core.hidden_field26644.cljs$core$IFn$_invoke$arity$2 = (function (name__26535__auto__,value__26536__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__26535__auto__,value__26536__auto__);
});

sablono.core.hidden_field26644.cljs$lang$maxFixedArity = 2;


sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field26644);

/**
 * Creates a month input field.
 */
sablono.core.month_field26648 = (function sablono$core$month_field26648(var_args){
var args26649 = [];
var len__25836__auto___26716 = arguments.length;
var i__25837__auto___26717 = (0);
while(true){
if((i__25837__auto___26717 < len__25836__auto___26716)){
args26649.push((arguments[i__25837__auto___26717]));

var G__26718 = (i__25837__auto___26717 + (1));
i__25837__auto___26717 = G__26718;
continue;
} else {
}
break;
}

var G__26651 = args26649.length;
switch (G__26651) {
case 1:
return sablono.core.month_field26648.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field26648.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26649.length)].join('')));

}
});

sablono.core.month_field26648.cljs$core$IFn$_invoke$arity$1 = (function (name__26535__auto__){
return sablono.core.month_field26648.call(null,name__26535__auto__,null);
});

sablono.core.month_field26648.cljs$core$IFn$_invoke$arity$2 = (function (name__26535__auto__,value__26536__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__26535__auto__,value__26536__auto__);
});

sablono.core.month_field26648.cljs$lang$maxFixedArity = 2;


sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field26648);

/**
 * Creates a number input field.
 */
sablono.core.number_field26652 = (function sablono$core$number_field26652(var_args){
var args26653 = [];
var len__25836__auto___26720 = arguments.length;
var i__25837__auto___26721 = (0);
while(true){
if((i__25837__auto___26721 < len__25836__auto___26720)){
args26653.push((arguments[i__25837__auto___26721]));

var G__26722 = (i__25837__auto___26721 + (1));
i__25837__auto___26721 = G__26722;
continue;
} else {
}
break;
}

var G__26655 = args26653.length;
switch (G__26655) {
case 1:
return sablono.core.number_field26652.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field26652.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26653.length)].join('')));

}
});

sablono.core.number_field26652.cljs$core$IFn$_invoke$arity$1 = (function (name__26535__auto__){
return sablono.core.number_field26652.call(null,name__26535__auto__,null);
});

sablono.core.number_field26652.cljs$core$IFn$_invoke$arity$2 = (function (name__26535__auto__,value__26536__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__26535__auto__,value__26536__auto__);
});

sablono.core.number_field26652.cljs$lang$maxFixedArity = 2;


sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field26652);

/**
 * Creates a password input field.
 */
sablono.core.password_field26656 = (function sablono$core$password_field26656(var_args){
var args26657 = [];
var len__25836__auto___26724 = arguments.length;
var i__25837__auto___26725 = (0);
while(true){
if((i__25837__auto___26725 < len__25836__auto___26724)){
args26657.push((arguments[i__25837__auto___26725]));

var G__26726 = (i__25837__auto___26725 + (1));
i__25837__auto___26725 = G__26726;
continue;
} else {
}
break;
}

var G__26659 = args26657.length;
switch (G__26659) {
case 1:
return sablono.core.password_field26656.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field26656.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26657.length)].join('')));

}
});

sablono.core.password_field26656.cljs$core$IFn$_invoke$arity$1 = (function (name__26535__auto__){
return sablono.core.password_field26656.call(null,name__26535__auto__,null);
});

sablono.core.password_field26656.cljs$core$IFn$_invoke$arity$2 = (function (name__26535__auto__,value__26536__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__26535__auto__,value__26536__auto__);
});

sablono.core.password_field26656.cljs$lang$maxFixedArity = 2;


sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field26656);

/**
 * Creates a range input field.
 */
sablono.core.range_field26660 = (function sablono$core$range_field26660(var_args){
var args26661 = [];
var len__25836__auto___26728 = arguments.length;
var i__25837__auto___26729 = (0);
while(true){
if((i__25837__auto___26729 < len__25836__auto___26728)){
args26661.push((arguments[i__25837__auto___26729]));

var G__26730 = (i__25837__auto___26729 + (1));
i__25837__auto___26729 = G__26730;
continue;
} else {
}
break;
}

var G__26663 = args26661.length;
switch (G__26663) {
case 1:
return sablono.core.range_field26660.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field26660.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26661.length)].join('')));

}
});

sablono.core.range_field26660.cljs$core$IFn$_invoke$arity$1 = (function (name__26535__auto__){
return sablono.core.range_field26660.call(null,name__26535__auto__,null);
});

sablono.core.range_field26660.cljs$core$IFn$_invoke$arity$2 = (function (name__26535__auto__,value__26536__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__26535__auto__,value__26536__auto__);
});

sablono.core.range_field26660.cljs$lang$maxFixedArity = 2;


sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field26660);

/**
 * Creates a search input field.
 */
sablono.core.search_field26664 = (function sablono$core$search_field26664(var_args){
var args26665 = [];
var len__25836__auto___26732 = arguments.length;
var i__25837__auto___26733 = (0);
while(true){
if((i__25837__auto___26733 < len__25836__auto___26732)){
args26665.push((arguments[i__25837__auto___26733]));

var G__26734 = (i__25837__auto___26733 + (1));
i__25837__auto___26733 = G__26734;
continue;
} else {
}
break;
}

var G__26667 = args26665.length;
switch (G__26667) {
case 1:
return sablono.core.search_field26664.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field26664.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26665.length)].join('')));

}
});

sablono.core.search_field26664.cljs$core$IFn$_invoke$arity$1 = (function (name__26535__auto__){
return sablono.core.search_field26664.call(null,name__26535__auto__,null);
});

sablono.core.search_field26664.cljs$core$IFn$_invoke$arity$2 = (function (name__26535__auto__,value__26536__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__26535__auto__,value__26536__auto__);
});

sablono.core.search_field26664.cljs$lang$maxFixedArity = 2;


sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field26664);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field26668 = (function sablono$core$tel_field26668(var_args){
var args26669 = [];
var len__25836__auto___26736 = arguments.length;
var i__25837__auto___26737 = (0);
while(true){
if((i__25837__auto___26737 < len__25836__auto___26736)){
args26669.push((arguments[i__25837__auto___26737]));

var G__26738 = (i__25837__auto___26737 + (1));
i__25837__auto___26737 = G__26738;
continue;
} else {
}
break;
}

var G__26671 = args26669.length;
switch (G__26671) {
case 1:
return sablono.core.tel_field26668.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field26668.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26669.length)].join('')));

}
});

sablono.core.tel_field26668.cljs$core$IFn$_invoke$arity$1 = (function (name__26535__auto__){
return sablono.core.tel_field26668.call(null,name__26535__auto__,null);
});

sablono.core.tel_field26668.cljs$core$IFn$_invoke$arity$2 = (function (name__26535__auto__,value__26536__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__26535__auto__,value__26536__auto__);
});

sablono.core.tel_field26668.cljs$lang$maxFixedArity = 2;


sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field26668);

/**
 * Creates a text input field.
 */
sablono.core.text_field26672 = (function sablono$core$text_field26672(var_args){
var args26673 = [];
var len__25836__auto___26740 = arguments.length;
var i__25837__auto___26741 = (0);
while(true){
if((i__25837__auto___26741 < len__25836__auto___26740)){
args26673.push((arguments[i__25837__auto___26741]));

var G__26742 = (i__25837__auto___26741 + (1));
i__25837__auto___26741 = G__26742;
continue;
} else {
}
break;
}

var G__26675 = args26673.length;
switch (G__26675) {
case 1:
return sablono.core.text_field26672.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field26672.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26673.length)].join('')));

}
});

sablono.core.text_field26672.cljs$core$IFn$_invoke$arity$1 = (function (name__26535__auto__){
return sablono.core.text_field26672.call(null,name__26535__auto__,null);
});

sablono.core.text_field26672.cljs$core$IFn$_invoke$arity$2 = (function (name__26535__auto__,value__26536__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__26535__auto__,value__26536__auto__);
});

sablono.core.text_field26672.cljs$lang$maxFixedArity = 2;


sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field26672);

/**
 * Creates a time input field.
 */
sablono.core.time_field26676 = (function sablono$core$time_field26676(var_args){
var args26677 = [];
var len__25836__auto___26744 = arguments.length;
var i__25837__auto___26745 = (0);
while(true){
if((i__25837__auto___26745 < len__25836__auto___26744)){
args26677.push((arguments[i__25837__auto___26745]));

var G__26746 = (i__25837__auto___26745 + (1));
i__25837__auto___26745 = G__26746;
continue;
} else {
}
break;
}

var G__26679 = args26677.length;
switch (G__26679) {
case 1:
return sablono.core.time_field26676.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field26676.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26677.length)].join('')));

}
});

sablono.core.time_field26676.cljs$core$IFn$_invoke$arity$1 = (function (name__26535__auto__){
return sablono.core.time_field26676.call(null,name__26535__auto__,null);
});

sablono.core.time_field26676.cljs$core$IFn$_invoke$arity$2 = (function (name__26535__auto__,value__26536__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__26535__auto__,value__26536__auto__);
});

sablono.core.time_field26676.cljs$lang$maxFixedArity = 2;


sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field26676);

/**
 * Creates a url input field.
 */
sablono.core.url_field26680 = (function sablono$core$url_field26680(var_args){
var args26681 = [];
var len__25836__auto___26748 = arguments.length;
var i__25837__auto___26749 = (0);
while(true){
if((i__25837__auto___26749 < len__25836__auto___26748)){
args26681.push((arguments[i__25837__auto___26749]));

var G__26750 = (i__25837__auto___26749 + (1));
i__25837__auto___26749 = G__26750;
continue;
} else {
}
break;
}

var G__26683 = args26681.length;
switch (G__26683) {
case 1:
return sablono.core.url_field26680.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field26680.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26681.length)].join('')));

}
});

sablono.core.url_field26680.cljs$core$IFn$_invoke$arity$1 = (function (name__26535__auto__){
return sablono.core.url_field26680.call(null,name__26535__auto__,null);
});

sablono.core.url_field26680.cljs$core$IFn$_invoke$arity$2 = (function (name__26535__auto__,value__26536__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__26535__auto__,value__26536__auto__);
});

sablono.core.url_field26680.cljs$lang$maxFixedArity = 2;


sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field26680);

/**
 * Creates a week input field.
 */
sablono.core.week_field26684 = (function sablono$core$week_field26684(var_args){
var args26685 = [];
var len__25836__auto___26752 = arguments.length;
var i__25837__auto___26753 = (0);
while(true){
if((i__25837__auto___26753 < len__25836__auto___26752)){
args26685.push((arguments[i__25837__auto___26753]));

var G__26754 = (i__25837__auto___26753 + (1));
i__25837__auto___26753 = G__26754;
continue;
} else {
}
break;
}

var G__26687 = args26685.length;
switch (G__26687) {
case 1:
return sablono.core.week_field26684.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field26684.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26685.length)].join('')));

}
});

sablono.core.week_field26684.cljs$core$IFn$_invoke$arity$1 = (function (name__26535__auto__){
return sablono.core.week_field26684.call(null,name__26535__auto__,null);
});

sablono.core.week_field26684.cljs$core$IFn$_invoke$arity$2 = (function (name__26535__auto__,value__26536__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__26535__auto__,value__26536__auto__);
});

sablono.core.week_field26684.cljs$lang$maxFixedArity = 2;


sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field26684);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box26756 = (function sablono$core$check_box26756(var_args){
var args26757 = [];
var len__25836__auto___26760 = arguments.length;
var i__25837__auto___26761 = (0);
while(true){
if((i__25837__auto___26761 < len__25836__auto___26760)){
args26757.push((arguments[i__25837__auto___26761]));

var G__26762 = (i__25837__auto___26761 + (1));
i__25837__auto___26761 = G__26762;
continue;
} else {
}
break;
}

var G__26759 = args26757.length;
switch (G__26759) {
case 1:
return sablono.core.check_box26756.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box26756.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box26756.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26757.length)].join('')));

}
});

sablono.core.check_box26756.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.check_box26756.call(null,name,null);
});

sablono.core.check_box26756.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return sablono.core.check_box26756.call(null,name,checked_QMARK_,"true");
});

sablono.core.check_box26756.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__24761__auto__ = value;
if(cljs.core.truth_(or__24761__auto__)){
return or__24761__auto__;
} else {
return undefined;
}
})(),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.check_box26756.cljs$lang$maxFixedArity = 3;


sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box26756);
/**
 * Creates a radio button.
 */
sablono.core.radio_button26764 = (function sablono$core$radio_button26764(var_args){
var args26765 = [];
var len__25836__auto___26768 = arguments.length;
var i__25837__auto___26769 = (0);
while(true){
if((i__25837__auto___26769 < len__25836__auto___26768)){
args26765.push((arguments[i__25837__auto___26769]));

var G__26770 = (i__25837__auto___26769 + (1));
i__25837__auto___26769 = G__26770;
continue;
} else {
}
break;
}

var G__26767 = args26765.length;
switch (G__26767) {
case 1:
return sablono.core.radio_button26764.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button26764.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button26764.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26765.length)].join('')));

}
});

sablono.core.radio_button26764.cljs$core$IFn$_invoke$arity$1 = (function (group){
return sablono.core.radio_button26764.call(null,group,null);
});

sablono.core.radio_button26764.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return sablono.core.radio_button26764.call(null,group,checked_QMARK_,"true");
});

sablono.core.radio_button26764.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,[cljs.core.str(sablono.util.as_str.call(null,group)),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__24761__auto__ = value;
if(cljs.core.truth_(or__24761__auto__)){
return or__24761__auto__;
} else {
return undefined;
}
})(),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.radio_button26764.cljs$lang$maxFixedArity = 3;


sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button26764);
sablono.core.hash_key = (function sablono$core$hash_key(x){
return goog.string.hashCode(cljs.core.pr_str.call(null,x));
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options26772 = (function sablono$core$select_options26772(coll){
var iter__25541__auto__ = (function sablono$core$select_options26772_$_iter__26789(s__26790){
return (new cljs.core.LazySeq(null,(function (){
var s__26790__$1 = s__26790;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__26790__$1);
if(temp__4657__auto__){
var s__26790__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__26790__$2)){
var c__25539__auto__ = cljs.core.chunk_first.call(null,s__26790__$2);
var size__25540__auto__ = cljs.core.count.call(null,c__25539__auto__);
var b__26792 = cljs.core.chunk_buffer.call(null,size__25540__auto__);
if((function (){var i__26791 = (0);
while(true){
if((i__26791 < size__25540__auto__)){
var x = cljs.core._nth.call(null,c__25539__auto__,i__26791);
cljs.core.chunk_append.call(null,b__26792,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__26799 = x;
var text = cljs.core.nth.call(null,vec__26799,(0),null);
var val = cljs.core.nth.call(null,vec__26799,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__26799,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono$core$select_options26772.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__26805 = (i__26791 + (1));
i__26791 = G__26805;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26792),sablono$core$select_options26772_$_iter__26789.call(null,cljs.core.chunk_rest.call(null,s__26790__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26792),null);
}
} else {
var x = cljs.core.first.call(null,s__26790__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__26802 = x;
var text = cljs.core.nth.call(null,vec__26802,(0),null);
var val = cljs.core.nth.call(null,vec__26802,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__26802,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono$core$select_options26772.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options26772_$_iter__26789.call(null,cljs.core.rest.call(null,s__26790__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__25541__auto__.call(null,coll);
});

sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options26772);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down26806 = (function sablono$core$drop_down26806(var_args){
var args26807 = [];
var len__25836__auto___26810 = arguments.length;
var i__25837__auto___26811 = (0);
while(true){
if((i__25837__auto___26811 < len__25836__auto___26810)){
args26807.push((arguments[i__25837__auto___26811]));

var G__26812 = (i__25837__auto___26811 + (1));
i__25837__auto___26811 = G__26812;
continue;
} else {
}
break;
}

var G__26809 = args26807.length;
switch (G__26809) {
case 2:
return sablono.core.drop_down26806.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down26806.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26807.length)].join('')));

}
});

sablono.core.drop_down26806.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down26806.call(null,name,options,null);
});

sablono.core.drop_down26806.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});

sablono.core.drop_down26806.cljs$lang$maxFixedArity = 3;


sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down26806);
/**
 * Creates a text area element.
 */
sablono.core.text_area26814 = (function sablono$core$text_area26814(var_args){
var args26815 = [];
var len__25836__auto___26818 = arguments.length;
var i__25837__auto___26819 = (0);
while(true){
if((i__25837__auto___26819 < len__25836__auto___26818)){
args26815.push((arguments[i__25837__auto___26819]));

var G__26820 = (i__25837__auto___26819 + (1));
i__25837__auto___26819 = G__26820;
continue;
} else {
}
break;
}

var G__26817 = args26815.length;
switch (G__26817) {
case 1:
return sablono.core.text_area26814.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area26814.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26815.length)].join('')));

}
});

sablono.core.text_area26814.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.text_area26814.call(null,name,null);
});

sablono.core.text_area26814.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__24761__auto__ = value;
if(cljs.core.truth_(or__24761__auto__)){
return or__24761__auto__;
} else {
return undefined;
}
})()], null)], null);
});

sablono.core.text_area26814.cljs$lang$maxFixedArity = 2;


sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area26814);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label26822 = (function sablono$core$label26822(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label26822);
/**
 * Creates a submit button.
 */
sablono.core.submit_button26823 = (function sablono$core$submit_button26823(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button26823);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button26824 = (function sablono$core$reset_button26824(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button26824);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to26825 = (function sablono$core$form_to26825(var_args){
var args__25843__auto__ = [];
var len__25836__auto___26832 = arguments.length;
var i__25837__auto___26833 = (0);
while(true){
if((i__25837__auto___26833 < len__25836__auto___26832)){
args__25843__auto__.push((arguments[i__25837__auto___26833]));

var G__26834 = (i__25837__auto___26833 + (1));
i__25837__auto___26833 = G__26834;
continue;
} else {
}
break;
}

var argseq__25844__auto__ = ((((1) < args__25843__auto__.length))?(new cljs.core.IndexedSeq(args__25843__auto__.slice((1)),(0),null)):null);
return sablono.core.form_to26825.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25844__auto__);
});

sablono.core.form_to26825.cljs$core$IFn$_invoke$arity$variadic = (function (p__26828,body){
var vec__26829 = p__26828;
var method = cljs.core.nth.call(null,vec__26829,(0),null);
var action = cljs.core.nth.call(null,vec__26829,(1),null);
var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
var action_uri = sablono.util.to_uri.call(null,action);
return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null),"_method",method_str)], null)),body));
});

sablono.core.form_to26825.cljs$lang$maxFixedArity = (1);

sablono.core.form_to26825.cljs$lang$applyTo = (function (seq26826){
var G__26827 = cljs.core.first.call(null,seq26826);
var seq26826__$1 = cljs.core.next.call(null,seq26826);
return sablono.core.form_to26825.cljs$core$IFn$_invoke$arity$variadic(G__26827,seq26826__$1);
});


sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to26825);

//# sourceMappingURL=core.js.map?rel=1520626831594