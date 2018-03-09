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
var G__26550__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
var vec__26547 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var seq__26548 = cljs.core.seq.call(null,vec__26547);
var first__26549 = cljs.core.first.call(null,seq__26548);
var seq__26548__$1 = cljs.core.next.call(null,seq__26548);
var tag = first__26549;
var body = seq__26548__$1;
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else {
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else {
return cljs.core.apply.call(null,func,args);
}
};
var G__26550 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26551__i = 0, G__26551__a = new Array(arguments.length -  0);
while (G__26551__i < G__26551__a.length) {G__26551__a[G__26551__i] = arguments[G__26551__i + 0]; ++G__26551__i;}
  args = new cljs.core.IndexedSeq(G__26551__a,0);
} 
return G__26550__delegate.call(this,args);};
G__26550.cljs$lang$maxFixedArity = 0;
G__26550.cljs$lang$applyTo = (function (arglist__26552){
var args = cljs.core.seq(arglist__26552);
return G__26550__delegate(args);
});
G__26550.cljs$core$IFn$_invoke$arity$variadic = G__26550__delegate;
return G__26550;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__25540__auto__ = (function sablono$core$update_arglists_$_iter__26557(s__26558){
return (new cljs.core.LazySeq(null,(function (){
var s__26558__$1 = s__26558;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__26558__$1);
if(temp__4657__auto__){
var s__26558__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__26558__$2)){
var c__25538__auto__ = cljs.core.chunk_first.call(null,s__26558__$2);
var size__25539__auto__ = cljs.core.count.call(null,c__25538__auto__);
var b__26560 = cljs.core.chunk_buffer.call(null,size__25539__auto__);
if((function (){var i__26559 = (0);
while(true){
if((i__26559 < size__25539__auto__)){
var args = cljs.core._nth.call(null,c__25538__auto__,i__26559);
cljs.core.chunk_append.call(null,b__26560,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__26561 = (i__26559 + (1));
i__26559 = G__26561;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26560),sablono$core$update_arglists_$_iter__26557.call(null,cljs.core.chunk_rest.call(null,s__26558__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26560),null);
}
} else {
var args = cljs.core.first.call(null,s__26558__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__26557.call(null,cljs.core.rest.call(null,s__26558__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__25540__auto__.call(null,arglists);
});
/**
 * Include a list of external stylesheet files.
 */
sablono.core.include_css = (function sablono$core$include_css(var_args){
var args__25842__auto__ = [];
var len__25835__auto___26567 = arguments.length;
var i__25836__auto___26568 = (0);
while(true){
if((i__25836__auto___26568 < len__25835__auto___26567)){
args__25842__auto__.push((arguments[i__25836__auto___26568]));

var G__26569 = (i__25836__auto___26568 + (1));
i__25836__auto___26568 = G__26569;
continue;
} else {
}
break;
}

var argseq__25843__auto__ = ((((0) < args__25842__auto__.length))?(new cljs.core.IndexedSeq(args__25842__auto__.slice((0)),(0),null)):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__25843__auto__);
});

sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__25540__auto__ = (function sablono$core$iter__26563(s__26564){
return (new cljs.core.LazySeq(null,(function (){
var s__26564__$1 = s__26564;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__26564__$1);
if(temp__4657__auto__){
var s__26564__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__26564__$2)){
var c__25538__auto__ = cljs.core.chunk_first.call(null,s__26564__$2);
var size__25539__auto__ = cljs.core.count.call(null,c__25538__auto__);
var b__26566 = cljs.core.chunk_buffer.call(null,size__25539__auto__);
if((function (){var i__26565 = (0);
while(true){
if((i__26565 < size__25539__auto__)){
var style = cljs.core._nth.call(null,c__25538__auto__,i__26565);
cljs.core.chunk_append.call(null,b__26566,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__26570 = (i__26565 + (1));
i__26565 = G__26570;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26566),sablono$core$iter__26563.call(null,cljs.core.chunk_rest.call(null,s__26564__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26566),null);
}
} else {
var style = cljs.core.first.call(null,s__26564__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__26563.call(null,cljs.core.rest.call(null,s__26564__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__25540__auto__.call(null,styles);
});

sablono.core.include_css.cljs$lang$maxFixedArity = (0);

sablono.core.include_css.cljs$lang$applyTo = (function (seq26562){
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26562));
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
sablono.core.link_to26571 = (function sablono$core$link_to26571(var_args){
var args__25842__auto__ = [];
var len__25835__auto___26574 = arguments.length;
var i__25836__auto___26575 = (0);
while(true){
if((i__25836__auto___26575 < len__25835__auto___26574)){
args__25842__auto__.push((arguments[i__25836__auto___26575]));

var G__26576 = (i__25836__auto___26575 + (1));
i__25836__auto___26575 = G__26576;
continue;
} else {
}
break;
}

var argseq__25843__auto__ = ((((1) < args__25842__auto__.length))?(new cljs.core.IndexedSeq(args__25842__auto__.slice((1)),(0),null)):null);
return sablono.core.link_to26571.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25843__auto__);
});

sablono.core.link_to26571.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
});

sablono.core.link_to26571.cljs$lang$maxFixedArity = (1);

sablono.core.link_to26571.cljs$lang$applyTo = (function (seq26572){
var G__26573 = cljs.core.first.call(null,seq26572);
var seq26572__$1 = cljs.core.next.call(null,seq26572);
return sablono.core.link_to26571.cljs$core$IFn$_invoke$arity$variadic(G__26573,seq26572__$1);
});


sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to26571);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to26577 = (function sablono$core$mail_to26577(var_args){
var args__25842__auto__ = [];
var len__25835__auto___26584 = arguments.length;
var i__25836__auto___26585 = (0);
while(true){
if((i__25836__auto___26585 < len__25835__auto___26584)){
args__25842__auto__.push((arguments[i__25836__auto___26585]));

var G__26586 = (i__25836__auto___26585 + (1));
i__25836__auto___26585 = G__26586;
continue;
} else {
}
break;
}

var argseq__25843__auto__ = ((((1) < args__25842__auto__.length))?(new cljs.core.IndexedSeq(args__25842__auto__.slice((1)),(0),null)):null);
return sablono.core.mail_to26577.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25843__auto__);
});

sablono.core.mail_to26577.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__26580){
var vec__26581 = p__26580;
var content = cljs.core.nth.call(null,vec__26581,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__24760__auto__ = content;
if(cljs.core.truth_(or__24760__auto__)){
return or__24760__auto__;
} else {
return e_mail;
}
})()], null);
});

sablono.core.mail_to26577.cljs$lang$maxFixedArity = (1);

sablono.core.mail_to26577.cljs$lang$applyTo = (function (seq26578){
var G__26579 = cljs.core.first.call(null,seq26578);
var seq26578__$1 = cljs.core.next.call(null,seq26578);
return sablono.core.mail_to26577.cljs$core$IFn$_invoke$arity$variadic(G__26579,seq26578__$1);
});


sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to26577);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list26587 = (function sablono$core$unordered_list26587(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__25540__auto__ = (function sablono$core$unordered_list26587_$_iter__26592(s__26593){
return (new cljs.core.LazySeq(null,(function (){
var s__26593__$1 = s__26593;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__26593__$1);
if(temp__4657__auto__){
var s__26593__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__26593__$2)){
var c__25538__auto__ = cljs.core.chunk_first.call(null,s__26593__$2);
var size__25539__auto__ = cljs.core.count.call(null,c__25538__auto__);
var b__26595 = cljs.core.chunk_buffer.call(null,size__25539__auto__);
if((function (){var i__26594 = (0);
while(true){
if((i__26594 < size__25539__auto__)){
var x = cljs.core._nth.call(null,c__25538__auto__,i__26594);
cljs.core.chunk_append.call(null,b__26595,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__26596 = (i__26594 + (1));
i__26594 = G__26596;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26595),sablono$core$unordered_list26587_$_iter__26592.call(null,cljs.core.chunk_rest.call(null,s__26593__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26595),null);
}
} else {
var x = cljs.core.first.call(null,s__26593__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list26587_$_iter__26592.call(null,cljs.core.rest.call(null,s__26593__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__25540__auto__.call(null,coll);
})()], null);
});

sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list26587);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list26597 = (function sablono$core$ordered_list26597(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__25540__auto__ = (function sablono$core$ordered_list26597_$_iter__26602(s__26603){
return (new cljs.core.LazySeq(null,(function (){
var s__26603__$1 = s__26603;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__26603__$1);
if(temp__4657__auto__){
var s__26603__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__26603__$2)){
var c__25538__auto__ = cljs.core.chunk_first.call(null,s__26603__$2);
var size__25539__auto__ = cljs.core.count.call(null,c__25538__auto__);
var b__26605 = cljs.core.chunk_buffer.call(null,size__25539__auto__);
if((function (){var i__26604 = (0);
while(true){
if((i__26604 < size__25539__auto__)){
var x = cljs.core._nth.call(null,c__25538__auto__,i__26604);
cljs.core.chunk_append.call(null,b__26605,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__26606 = (i__26604 + (1));
i__26604 = G__26606;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26605),sablono$core$ordered_list26597_$_iter__26602.call(null,cljs.core.chunk_rest.call(null,s__26603__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26605),null);
}
} else {
var x = cljs.core.first.call(null,s__26603__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list26597_$_iter__26602.call(null,cljs.core.rest.call(null,s__26603__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__25540__auto__.call(null,coll);
})()], null);
});

sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list26597);
/**
 * Create an image element.
 */
sablono.core.image26607 = (function sablono$core$image26607(var_args){
var args26608 = [];
var len__25835__auto___26611 = arguments.length;
var i__25836__auto___26612 = (0);
while(true){
if((i__25836__auto___26612 < len__25835__auto___26611)){
args26608.push((arguments[i__25836__auto___26612]));

var G__26613 = (i__25836__auto___26612 + (1));
i__25836__auto___26612 = G__26613;
continue;
} else {
}
break;
}

var G__26610 = args26608.length;
switch (G__26610) {
case 1:
return sablono.core.image26607.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image26607.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26608.length)].join('')));

}
});

sablono.core.image26607.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});

sablono.core.image26607.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});

sablono.core.image26607.cljs$lang$maxFixedArity = 2;


sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image26607);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.call(null,(function (p1__26615_SHARP_,p2__26616_SHARP_){
return [cljs.core.str(p1__26615_SHARP_),cljs.core.str("["),cljs.core.str(p2__26616_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.call(null,(function (p1__26617_SHARP_,p2__26618_SHARP_){
return [cljs.core.str(p1__26617_SHARP_),cljs.core.str("-"),cljs.core.str(p2__26618_SHARP_)].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Creates a new <input> element.
 */
sablono.core.input_field_STAR_ = (function sablono$core$input_field_STAR_(type,name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__24760__auto__ = value;
if(cljs.core.truth_(or__24760__auto__)){
return or__24760__auto__;
} else {
return undefined;
}
})()], null)], null);
});
/**
 * Creates a color input field.
 */
sablono.core.color_field26619 = (function sablono$core$color_field26619(var_args){
var args26620 = [];
var len__25835__auto___26687 = arguments.length;
var i__25836__auto___26688 = (0);
while(true){
if((i__25836__auto___26688 < len__25835__auto___26687)){
args26620.push((arguments[i__25836__auto___26688]));

var G__26689 = (i__25836__auto___26688 + (1));
i__25836__auto___26688 = G__26689;
continue;
} else {
}
break;
}

var G__26622 = args26620.length;
switch (G__26622) {
case 1:
return sablono.core.color_field26619.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field26619.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26620.length)].join('')));

}
});

sablono.core.color_field26619.cljs$core$IFn$_invoke$arity$1 = (function (name__26534__auto__){
return sablono.core.color_field26619.call(null,name__26534__auto__,null);
});

sablono.core.color_field26619.cljs$core$IFn$_invoke$arity$2 = (function (name__26534__auto__,value__26535__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__26534__auto__,value__26535__auto__);
});

sablono.core.color_field26619.cljs$lang$maxFixedArity = 2;


sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field26619);

/**
 * Creates a date input field.
 */
sablono.core.date_field26623 = (function sablono$core$date_field26623(var_args){
var args26624 = [];
var len__25835__auto___26691 = arguments.length;
var i__25836__auto___26692 = (0);
while(true){
if((i__25836__auto___26692 < len__25835__auto___26691)){
args26624.push((arguments[i__25836__auto___26692]));

var G__26693 = (i__25836__auto___26692 + (1));
i__25836__auto___26692 = G__26693;
continue;
} else {
}
break;
}

var G__26626 = args26624.length;
switch (G__26626) {
case 1:
return sablono.core.date_field26623.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field26623.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26624.length)].join('')));

}
});

sablono.core.date_field26623.cljs$core$IFn$_invoke$arity$1 = (function (name__26534__auto__){
return sablono.core.date_field26623.call(null,name__26534__auto__,null);
});

sablono.core.date_field26623.cljs$core$IFn$_invoke$arity$2 = (function (name__26534__auto__,value__26535__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__26534__auto__,value__26535__auto__);
});

sablono.core.date_field26623.cljs$lang$maxFixedArity = 2;


sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field26623);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field26627 = (function sablono$core$datetime_field26627(var_args){
var args26628 = [];
var len__25835__auto___26695 = arguments.length;
var i__25836__auto___26696 = (0);
while(true){
if((i__25836__auto___26696 < len__25835__auto___26695)){
args26628.push((arguments[i__25836__auto___26696]));

var G__26697 = (i__25836__auto___26696 + (1));
i__25836__auto___26696 = G__26697;
continue;
} else {
}
break;
}

var G__26630 = args26628.length;
switch (G__26630) {
case 1:
return sablono.core.datetime_field26627.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field26627.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26628.length)].join('')));

}
});

sablono.core.datetime_field26627.cljs$core$IFn$_invoke$arity$1 = (function (name__26534__auto__){
return sablono.core.datetime_field26627.call(null,name__26534__auto__,null);
});

sablono.core.datetime_field26627.cljs$core$IFn$_invoke$arity$2 = (function (name__26534__auto__,value__26535__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__26534__auto__,value__26535__auto__);
});

sablono.core.datetime_field26627.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field26627);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field26631 = (function sablono$core$datetime_local_field26631(var_args){
var args26632 = [];
var len__25835__auto___26699 = arguments.length;
var i__25836__auto___26700 = (0);
while(true){
if((i__25836__auto___26700 < len__25835__auto___26699)){
args26632.push((arguments[i__25836__auto___26700]));

var G__26701 = (i__25836__auto___26700 + (1));
i__25836__auto___26700 = G__26701;
continue;
} else {
}
break;
}

var G__26634 = args26632.length;
switch (G__26634) {
case 1:
return sablono.core.datetime_local_field26631.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field26631.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26632.length)].join('')));

}
});

sablono.core.datetime_local_field26631.cljs$core$IFn$_invoke$arity$1 = (function (name__26534__auto__){
return sablono.core.datetime_local_field26631.call(null,name__26534__auto__,null);
});

sablono.core.datetime_local_field26631.cljs$core$IFn$_invoke$arity$2 = (function (name__26534__auto__,value__26535__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__26534__auto__,value__26535__auto__);
});

sablono.core.datetime_local_field26631.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field26631);

/**
 * Creates a email input field.
 */
sablono.core.email_field26635 = (function sablono$core$email_field26635(var_args){
var args26636 = [];
var len__25835__auto___26703 = arguments.length;
var i__25836__auto___26704 = (0);
while(true){
if((i__25836__auto___26704 < len__25835__auto___26703)){
args26636.push((arguments[i__25836__auto___26704]));

var G__26705 = (i__25836__auto___26704 + (1));
i__25836__auto___26704 = G__26705;
continue;
} else {
}
break;
}

var G__26638 = args26636.length;
switch (G__26638) {
case 1:
return sablono.core.email_field26635.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field26635.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26636.length)].join('')));

}
});

sablono.core.email_field26635.cljs$core$IFn$_invoke$arity$1 = (function (name__26534__auto__){
return sablono.core.email_field26635.call(null,name__26534__auto__,null);
});

sablono.core.email_field26635.cljs$core$IFn$_invoke$arity$2 = (function (name__26534__auto__,value__26535__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__26534__auto__,value__26535__auto__);
});

sablono.core.email_field26635.cljs$lang$maxFixedArity = 2;


sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field26635);

/**
 * Creates a file input field.
 */
sablono.core.file_field26639 = (function sablono$core$file_field26639(var_args){
var args26640 = [];
var len__25835__auto___26707 = arguments.length;
var i__25836__auto___26708 = (0);
while(true){
if((i__25836__auto___26708 < len__25835__auto___26707)){
args26640.push((arguments[i__25836__auto___26708]));

var G__26709 = (i__25836__auto___26708 + (1));
i__25836__auto___26708 = G__26709;
continue;
} else {
}
break;
}

var G__26642 = args26640.length;
switch (G__26642) {
case 1:
return sablono.core.file_field26639.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field26639.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26640.length)].join('')));

}
});

sablono.core.file_field26639.cljs$core$IFn$_invoke$arity$1 = (function (name__26534__auto__){
return sablono.core.file_field26639.call(null,name__26534__auto__,null);
});

sablono.core.file_field26639.cljs$core$IFn$_invoke$arity$2 = (function (name__26534__auto__,value__26535__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__26534__auto__,value__26535__auto__);
});

sablono.core.file_field26639.cljs$lang$maxFixedArity = 2;


sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field26639);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field26643 = (function sablono$core$hidden_field26643(var_args){
var args26644 = [];
var len__25835__auto___26711 = arguments.length;
var i__25836__auto___26712 = (0);
while(true){
if((i__25836__auto___26712 < len__25835__auto___26711)){
args26644.push((arguments[i__25836__auto___26712]));

var G__26713 = (i__25836__auto___26712 + (1));
i__25836__auto___26712 = G__26713;
continue;
} else {
}
break;
}

var G__26646 = args26644.length;
switch (G__26646) {
case 1:
return sablono.core.hidden_field26643.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field26643.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26644.length)].join('')));

}
});

sablono.core.hidden_field26643.cljs$core$IFn$_invoke$arity$1 = (function (name__26534__auto__){
return sablono.core.hidden_field26643.call(null,name__26534__auto__,null);
});

sablono.core.hidden_field26643.cljs$core$IFn$_invoke$arity$2 = (function (name__26534__auto__,value__26535__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__26534__auto__,value__26535__auto__);
});

sablono.core.hidden_field26643.cljs$lang$maxFixedArity = 2;


sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field26643);

/**
 * Creates a month input field.
 */
sablono.core.month_field26647 = (function sablono$core$month_field26647(var_args){
var args26648 = [];
var len__25835__auto___26715 = arguments.length;
var i__25836__auto___26716 = (0);
while(true){
if((i__25836__auto___26716 < len__25835__auto___26715)){
args26648.push((arguments[i__25836__auto___26716]));

var G__26717 = (i__25836__auto___26716 + (1));
i__25836__auto___26716 = G__26717;
continue;
} else {
}
break;
}

var G__26650 = args26648.length;
switch (G__26650) {
case 1:
return sablono.core.month_field26647.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field26647.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26648.length)].join('')));

}
});

sablono.core.month_field26647.cljs$core$IFn$_invoke$arity$1 = (function (name__26534__auto__){
return sablono.core.month_field26647.call(null,name__26534__auto__,null);
});

sablono.core.month_field26647.cljs$core$IFn$_invoke$arity$2 = (function (name__26534__auto__,value__26535__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__26534__auto__,value__26535__auto__);
});

sablono.core.month_field26647.cljs$lang$maxFixedArity = 2;


sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field26647);

/**
 * Creates a number input field.
 */
sablono.core.number_field26651 = (function sablono$core$number_field26651(var_args){
var args26652 = [];
var len__25835__auto___26719 = arguments.length;
var i__25836__auto___26720 = (0);
while(true){
if((i__25836__auto___26720 < len__25835__auto___26719)){
args26652.push((arguments[i__25836__auto___26720]));

var G__26721 = (i__25836__auto___26720 + (1));
i__25836__auto___26720 = G__26721;
continue;
} else {
}
break;
}

var G__26654 = args26652.length;
switch (G__26654) {
case 1:
return sablono.core.number_field26651.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field26651.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26652.length)].join('')));

}
});

sablono.core.number_field26651.cljs$core$IFn$_invoke$arity$1 = (function (name__26534__auto__){
return sablono.core.number_field26651.call(null,name__26534__auto__,null);
});

sablono.core.number_field26651.cljs$core$IFn$_invoke$arity$2 = (function (name__26534__auto__,value__26535__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__26534__auto__,value__26535__auto__);
});

sablono.core.number_field26651.cljs$lang$maxFixedArity = 2;


sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field26651);

/**
 * Creates a password input field.
 */
sablono.core.password_field26655 = (function sablono$core$password_field26655(var_args){
var args26656 = [];
var len__25835__auto___26723 = arguments.length;
var i__25836__auto___26724 = (0);
while(true){
if((i__25836__auto___26724 < len__25835__auto___26723)){
args26656.push((arguments[i__25836__auto___26724]));

var G__26725 = (i__25836__auto___26724 + (1));
i__25836__auto___26724 = G__26725;
continue;
} else {
}
break;
}

var G__26658 = args26656.length;
switch (G__26658) {
case 1:
return sablono.core.password_field26655.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field26655.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26656.length)].join('')));

}
});

sablono.core.password_field26655.cljs$core$IFn$_invoke$arity$1 = (function (name__26534__auto__){
return sablono.core.password_field26655.call(null,name__26534__auto__,null);
});

sablono.core.password_field26655.cljs$core$IFn$_invoke$arity$2 = (function (name__26534__auto__,value__26535__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__26534__auto__,value__26535__auto__);
});

sablono.core.password_field26655.cljs$lang$maxFixedArity = 2;


sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field26655);

/**
 * Creates a range input field.
 */
sablono.core.range_field26659 = (function sablono$core$range_field26659(var_args){
var args26660 = [];
var len__25835__auto___26727 = arguments.length;
var i__25836__auto___26728 = (0);
while(true){
if((i__25836__auto___26728 < len__25835__auto___26727)){
args26660.push((arguments[i__25836__auto___26728]));

var G__26729 = (i__25836__auto___26728 + (1));
i__25836__auto___26728 = G__26729;
continue;
} else {
}
break;
}

var G__26662 = args26660.length;
switch (G__26662) {
case 1:
return sablono.core.range_field26659.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field26659.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26660.length)].join('')));

}
});

sablono.core.range_field26659.cljs$core$IFn$_invoke$arity$1 = (function (name__26534__auto__){
return sablono.core.range_field26659.call(null,name__26534__auto__,null);
});

sablono.core.range_field26659.cljs$core$IFn$_invoke$arity$2 = (function (name__26534__auto__,value__26535__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__26534__auto__,value__26535__auto__);
});

sablono.core.range_field26659.cljs$lang$maxFixedArity = 2;


sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field26659);

/**
 * Creates a search input field.
 */
sablono.core.search_field26663 = (function sablono$core$search_field26663(var_args){
var args26664 = [];
var len__25835__auto___26731 = arguments.length;
var i__25836__auto___26732 = (0);
while(true){
if((i__25836__auto___26732 < len__25835__auto___26731)){
args26664.push((arguments[i__25836__auto___26732]));

var G__26733 = (i__25836__auto___26732 + (1));
i__25836__auto___26732 = G__26733;
continue;
} else {
}
break;
}

var G__26666 = args26664.length;
switch (G__26666) {
case 1:
return sablono.core.search_field26663.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field26663.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26664.length)].join('')));

}
});

sablono.core.search_field26663.cljs$core$IFn$_invoke$arity$1 = (function (name__26534__auto__){
return sablono.core.search_field26663.call(null,name__26534__auto__,null);
});

sablono.core.search_field26663.cljs$core$IFn$_invoke$arity$2 = (function (name__26534__auto__,value__26535__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__26534__auto__,value__26535__auto__);
});

sablono.core.search_field26663.cljs$lang$maxFixedArity = 2;


sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field26663);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field26667 = (function sablono$core$tel_field26667(var_args){
var args26668 = [];
var len__25835__auto___26735 = arguments.length;
var i__25836__auto___26736 = (0);
while(true){
if((i__25836__auto___26736 < len__25835__auto___26735)){
args26668.push((arguments[i__25836__auto___26736]));

var G__26737 = (i__25836__auto___26736 + (1));
i__25836__auto___26736 = G__26737;
continue;
} else {
}
break;
}

var G__26670 = args26668.length;
switch (G__26670) {
case 1:
return sablono.core.tel_field26667.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field26667.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26668.length)].join('')));

}
});

sablono.core.tel_field26667.cljs$core$IFn$_invoke$arity$1 = (function (name__26534__auto__){
return sablono.core.tel_field26667.call(null,name__26534__auto__,null);
});

sablono.core.tel_field26667.cljs$core$IFn$_invoke$arity$2 = (function (name__26534__auto__,value__26535__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__26534__auto__,value__26535__auto__);
});

sablono.core.tel_field26667.cljs$lang$maxFixedArity = 2;


sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field26667);

/**
 * Creates a text input field.
 */
sablono.core.text_field26671 = (function sablono$core$text_field26671(var_args){
var args26672 = [];
var len__25835__auto___26739 = arguments.length;
var i__25836__auto___26740 = (0);
while(true){
if((i__25836__auto___26740 < len__25835__auto___26739)){
args26672.push((arguments[i__25836__auto___26740]));

var G__26741 = (i__25836__auto___26740 + (1));
i__25836__auto___26740 = G__26741;
continue;
} else {
}
break;
}

var G__26674 = args26672.length;
switch (G__26674) {
case 1:
return sablono.core.text_field26671.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field26671.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26672.length)].join('')));

}
});

sablono.core.text_field26671.cljs$core$IFn$_invoke$arity$1 = (function (name__26534__auto__){
return sablono.core.text_field26671.call(null,name__26534__auto__,null);
});

sablono.core.text_field26671.cljs$core$IFn$_invoke$arity$2 = (function (name__26534__auto__,value__26535__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__26534__auto__,value__26535__auto__);
});

sablono.core.text_field26671.cljs$lang$maxFixedArity = 2;


sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field26671);

/**
 * Creates a time input field.
 */
sablono.core.time_field26675 = (function sablono$core$time_field26675(var_args){
var args26676 = [];
var len__25835__auto___26743 = arguments.length;
var i__25836__auto___26744 = (0);
while(true){
if((i__25836__auto___26744 < len__25835__auto___26743)){
args26676.push((arguments[i__25836__auto___26744]));

var G__26745 = (i__25836__auto___26744 + (1));
i__25836__auto___26744 = G__26745;
continue;
} else {
}
break;
}

var G__26678 = args26676.length;
switch (G__26678) {
case 1:
return sablono.core.time_field26675.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field26675.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26676.length)].join('')));

}
});

sablono.core.time_field26675.cljs$core$IFn$_invoke$arity$1 = (function (name__26534__auto__){
return sablono.core.time_field26675.call(null,name__26534__auto__,null);
});

sablono.core.time_field26675.cljs$core$IFn$_invoke$arity$2 = (function (name__26534__auto__,value__26535__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__26534__auto__,value__26535__auto__);
});

sablono.core.time_field26675.cljs$lang$maxFixedArity = 2;


sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field26675);

/**
 * Creates a url input field.
 */
sablono.core.url_field26679 = (function sablono$core$url_field26679(var_args){
var args26680 = [];
var len__25835__auto___26747 = arguments.length;
var i__25836__auto___26748 = (0);
while(true){
if((i__25836__auto___26748 < len__25835__auto___26747)){
args26680.push((arguments[i__25836__auto___26748]));

var G__26749 = (i__25836__auto___26748 + (1));
i__25836__auto___26748 = G__26749;
continue;
} else {
}
break;
}

var G__26682 = args26680.length;
switch (G__26682) {
case 1:
return sablono.core.url_field26679.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field26679.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26680.length)].join('')));

}
});

sablono.core.url_field26679.cljs$core$IFn$_invoke$arity$1 = (function (name__26534__auto__){
return sablono.core.url_field26679.call(null,name__26534__auto__,null);
});

sablono.core.url_field26679.cljs$core$IFn$_invoke$arity$2 = (function (name__26534__auto__,value__26535__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__26534__auto__,value__26535__auto__);
});

sablono.core.url_field26679.cljs$lang$maxFixedArity = 2;


sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field26679);

/**
 * Creates a week input field.
 */
sablono.core.week_field26683 = (function sablono$core$week_field26683(var_args){
var args26684 = [];
var len__25835__auto___26751 = arguments.length;
var i__25836__auto___26752 = (0);
while(true){
if((i__25836__auto___26752 < len__25835__auto___26751)){
args26684.push((arguments[i__25836__auto___26752]));

var G__26753 = (i__25836__auto___26752 + (1));
i__25836__auto___26752 = G__26753;
continue;
} else {
}
break;
}

var G__26686 = args26684.length;
switch (G__26686) {
case 1:
return sablono.core.week_field26683.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field26683.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26684.length)].join('')));

}
});

sablono.core.week_field26683.cljs$core$IFn$_invoke$arity$1 = (function (name__26534__auto__){
return sablono.core.week_field26683.call(null,name__26534__auto__,null);
});

sablono.core.week_field26683.cljs$core$IFn$_invoke$arity$2 = (function (name__26534__auto__,value__26535__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__26534__auto__,value__26535__auto__);
});

sablono.core.week_field26683.cljs$lang$maxFixedArity = 2;


sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field26683);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box26755 = (function sablono$core$check_box26755(var_args){
var args26756 = [];
var len__25835__auto___26759 = arguments.length;
var i__25836__auto___26760 = (0);
while(true){
if((i__25836__auto___26760 < len__25835__auto___26759)){
args26756.push((arguments[i__25836__auto___26760]));

var G__26761 = (i__25836__auto___26760 + (1));
i__25836__auto___26760 = G__26761;
continue;
} else {
}
break;
}

var G__26758 = args26756.length;
switch (G__26758) {
case 1:
return sablono.core.check_box26755.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box26755.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box26755.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26756.length)].join('')));

}
});

sablono.core.check_box26755.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.check_box26755.call(null,name,null);
});

sablono.core.check_box26755.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return sablono.core.check_box26755.call(null,name,checked_QMARK_,"true");
});

sablono.core.check_box26755.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__24760__auto__ = value;
if(cljs.core.truth_(or__24760__auto__)){
return or__24760__auto__;
} else {
return undefined;
}
})(),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.check_box26755.cljs$lang$maxFixedArity = 3;


sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box26755);
/**
 * Creates a radio button.
 */
sablono.core.radio_button26763 = (function sablono$core$radio_button26763(var_args){
var args26764 = [];
var len__25835__auto___26767 = arguments.length;
var i__25836__auto___26768 = (0);
while(true){
if((i__25836__auto___26768 < len__25835__auto___26767)){
args26764.push((arguments[i__25836__auto___26768]));

var G__26769 = (i__25836__auto___26768 + (1));
i__25836__auto___26768 = G__26769;
continue;
} else {
}
break;
}

var G__26766 = args26764.length;
switch (G__26766) {
case 1:
return sablono.core.radio_button26763.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button26763.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button26763.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26764.length)].join('')));

}
});

sablono.core.radio_button26763.cljs$core$IFn$_invoke$arity$1 = (function (group){
return sablono.core.radio_button26763.call(null,group,null);
});

sablono.core.radio_button26763.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return sablono.core.radio_button26763.call(null,group,checked_QMARK_,"true");
});

sablono.core.radio_button26763.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,[cljs.core.str(sablono.util.as_str.call(null,group)),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__24760__auto__ = value;
if(cljs.core.truth_(or__24760__auto__)){
return or__24760__auto__;
} else {
return undefined;
}
})(),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.radio_button26763.cljs$lang$maxFixedArity = 3;


sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button26763);
sablono.core.hash_key = (function sablono$core$hash_key(x){
return goog.string.hashCode(cljs.core.pr_str.call(null,x));
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options26771 = (function sablono$core$select_options26771(coll){
var iter__25540__auto__ = (function sablono$core$select_options26771_$_iter__26788(s__26789){
return (new cljs.core.LazySeq(null,(function (){
var s__26789__$1 = s__26789;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__26789__$1);
if(temp__4657__auto__){
var s__26789__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__26789__$2)){
var c__25538__auto__ = cljs.core.chunk_first.call(null,s__26789__$2);
var size__25539__auto__ = cljs.core.count.call(null,c__25538__auto__);
var b__26791 = cljs.core.chunk_buffer.call(null,size__25539__auto__);
if((function (){var i__26790 = (0);
while(true){
if((i__26790 < size__25539__auto__)){
var x = cljs.core._nth.call(null,c__25538__auto__,i__26790);
cljs.core.chunk_append.call(null,b__26791,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__26798 = x;
var text = cljs.core.nth.call(null,vec__26798,(0),null);
var val = cljs.core.nth.call(null,vec__26798,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__26798,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono$core$select_options26771.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__26804 = (i__26790 + (1));
i__26790 = G__26804;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26791),sablono$core$select_options26771_$_iter__26788.call(null,cljs.core.chunk_rest.call(null,s__26789__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26791),null);
}
} else {
var x = cljs.core.first.call(null,s__26789__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__26801 = x;
var text = cljs.core.nth.call(null,vec__26801,(0),null);
var val = cljs.core.nth.call(null,vec__26801,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__26801,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono$core$select_options26771.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options26771_$_iter__26788.call(null,cljs.core.rest.call(null,s__26789__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__25540__auto__.call(null,coll);
});

sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options26771);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down26805 = (function sablono$core$drop_down26805(var_args){
var args26806 = [];
var len__25835__auto___26809 = arguments.length;
var i__25836__auto___26810 = (0);
while(true){
if((i__25836__auto___26810 < len__25835__auto___26809)){
args26806.push((arguments[i__25836__auto___26810]));

var G__26811 = (i__25836__auto___26810 + (1));
i__25836__auto___26810 = G__26811;
continue;
} else {
}
break;
}

var G__26808 = args26806.length;
switch (G__26808) {
case 2:
return sablono.core.drop_down26805.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down26805.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26806.length)].join('')));

}
});

sablono.core.drop_down26805.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down26805.call(null,name,options,null);
});

sablono.core.drop_down26805.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});

sablono.core.drop_down26805.cljs$lang$maxFixedArity = 3;


sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down26805);
/**
 * Creates a text area element.
 */
sablono.core.text_area26813 = (function sablono$core$text_area26813(var_args){
var args26814 = [];
var len__25835__auto___26817 = arguments.length;
var i__25836__auto___26818 = (0);
while(true){
if((i__25836__auto___26818 < len__25835__auto___26817)){
args26814.push((arguments[i__25836__auto___26818]));

var G__26819 = (i__25836__auto___26818 + (1));
i__25836__auto___26818 = G__26819;
continue;
} else {
}
break;
}

var G__26816 = args26814.length;
switch (G__26816) {
case 1:
return sablono.core.text_area26813.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area26813.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26814.length)].join('')));

}
});

sablono.core.text_area26813.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.text_area26813.call(null,name,null);
});

sablono.core.text_area26813.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__24760__auto__ = value;
if(cljs.core.truth_(or__24760__auto__)){
return or__24760__auto__;
} else {
return undefined;
}
})()], null)], null);
});

sablono.core.text_area26813.cljs$lang$maxFixedArity = 2;


sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area26813);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label26821 = (function sablono$core$label26821(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label26821);
/**
 * Creates a submit button.
 */
sablono.core.submit_button26822 = (function sablono$core$submit_button26822(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button26822);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button26823 = (function sablono$core$reset_button26823(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button26823);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to26824 = (function sablono$core$form_to26824(var_args){
var args__25842__auto__ = [];
var len__25835__auto___26831 = arguments.length;
var i__25836__auto___26832 = (0);
while(true){
if((i__25836__auto___26832 < len__25835__auto___26831)){
args__25842__auto__.push((arguments[i__25836__auto___26832]));

var G__26833 = (i__25836__auto___26832 + (1));
i__25836__auto___26832 = G__26833;
continue;
} else {
}
break;
}

var argseq__25843__auto__ = ((((1) < args__25842__auto__.length))?(new cljs.core.IndexedSeq(args__25842__auto__.slice((1)),(0),null)):null);
return sablono.core.form_to26824.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25843__auto__);
});

sablono.core.form_to26824.cljs$core$IFn$_invoke$arity$variadic = (function (p__26827,body){
var vec__26828 = p__26827;
var method = cljs.core.nth.call(null,vec__26828,(0),null);
var action = cljs.core.nth.call(null,vec__26828,(1),null);
var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
var action_uri = sablono.util.to_uri.call(null,action);
return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null),"_method",method_str)], null)),body));
});

sablono.core.form_to26824.cljs$lang$maxFixedArity = (1);

sablono.core.form_to26824.cljs$lang$applyTo = (function (seq26825){
var G__26826 = cljs.core.first.call(null,seq26825);
var seq26825__$1 = cljs.core.next.call(null,seq26825);
return sablono.core.form_to26824.cljs$core$IFn$_invoke$arity$variadic(G__26826,seq26825__$1);
});


sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to26824);

//# sourceMappingURL=core.js.map?rel=1520627266932