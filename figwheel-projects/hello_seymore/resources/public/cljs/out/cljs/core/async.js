// Compiled by ClojureScript 1.9.229 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args27929 = [];
var len__25836__auto___27935 = arguments.length;
var i__25837__auto___27936 = (0);
while(true){
if((i__25837__auto___27936 < len__25836__auto___27935)){
args27929.push((arguments[i__25837__auto___27936]));

var G__27937 = (i__25837__auto___27936 + (1));
i__25837__auto___27936 = G__27937;
continue;
} else {
}
break;
}

var G__27931 = args27929.length;
switch (G__27931) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27929.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async27932 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27932 = (function (f,blockable,meta27933){
this.f = f;
this.blockable = blockable;
this.meta27933 = meta27933;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async27932.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27934,meta27933__$1){
var self__ = this;
var _27934__$1 = this;
return (new cljs.core.async.t_cljs$core$async27932(self__.f,self__.blockable,meta27933__$1));
});

cljs.core.async.t_cljs$core$async27932.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27934){
var self__ = this;
var _27934__$1 = this;
return self__.meta27933;
});

cljs.core.async.t_cljs$core$async27932.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async27932.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async27932.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async27932.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async27932.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta27933","meta27933",-1463087288,null)], null);
});

cljs.core.async.t_cljs$core$async27932.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27932.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27932";

cljs.core.async.t_cljs$core$async27932.cljs$lang$ctorPrWriter = (function (this__25367__auto__,writer__25368__auto__,opt__25369__auto__){
return cljs.core._write.call(null,writer__25368__auto__,"cljs.core.async/t_cljs$core$async27932");
});

cljs.core.async.__GT_t_cljs$core$async27932 = (function cljs$core$async$__GT_t_cljs$core$async27932(f__$1,blockable__$1,meta27933){
return (new cljs.core.async.t_cljs$core$async27932(f__$1,blockable__$1,meta27933));
});

}

return (new cljs.core.async.t_cljs$core$async27932(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args27941 = [];
var len__25836__auto___27944 = arguments.length;
var i__25837__auto___27945 = (0);
while(true){
if((i__25837__auto___27945 < len__25836__auto___27944)){
args27941.push((arguments[i__25837__auto___27945]));

var G__27946 = (i__25837__auto___27945 + (1));
i__25837__auto___27945 = G__27946;
continue;
} else {
}
break;
}

var G__27943 = args27941.length;
switch (G__27943) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27941.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str("buf-or-n")].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args27948 = [];
var len__25836__auto___27951 = arguments.length;
var i__25837__auto___27952 = (0);
while(true){
if((i__25837__auto___27952 < len__25836__auto___27951)){
args27948.push((arguments[i__25837__auto___27952]));

var G__27953 = (i__25837__auto___27952 + (1));
i__25837__auto___27952 = G__27953;
continue;
} else {
}
break;
}

var G__27950 = args27948.length;
switch (G__27950) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27948.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args27955 = [];
var len__25836__auto___27958 = arguments.length;
var i__25837__auto___27959 = (0);
while(true){
if((i__25837__auto___27959 < len__25836__auto___27958)){
args27955.push((arguments[i__25837__auto___27959]));

var G__27960 = (i__25837__auto___27959 + (1));
i__25837__auto___27959 = G__27960;
continue;
} else {
}
break;
}

var G__27957 = args27955.length;
switch (G__27957) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27955.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_27962 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_27962);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_27962,ret){
return (function (){
return fn1.call(null,val_27962);
});})(val_27962,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args27963 = [];
var len__25836__auto___27966 = arguments.length;
var i__25837__auto___27967 = (0);
while(true){
if((i__25837__auto___27967 < len__25836__auto___27966)){
args27963.push((arguments[i__25837__auto___27967]));

var G__27968 = (i__25837__auto___27967 + (1));
i__25837__auto___27967 = G__27968;
continue;
} else {
}
break;
}

var G__27965 = args27963.length;
switch (G__27965) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27963.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4655__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4655__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__25676__auto___27970 = n;
var x_27971 = (0);
while(true){
if((x_27971 < n__25676__auto___27970)){
(a[x_27971] = (0));

var G__27972 = (x_27971 + (1));
x_27971 = G__27972;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__27973 = (i + (1));
i = G__27973;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async27977 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27977 = (function (alt_flag,flag,meta27978){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta27978 = meta27978;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async27977.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_27979,meta27978__$1){
var self__ = this;
var _27979__$1 = this;
return (new cljs.core.async.t_cljs$core$async27977(self__.alt_flag,self__.flag,meta27978__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async27977.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_27979){
var self__ = this;
var _27979__$1 = this;
return self__.meta27978;
});})(flag))
;

cljs.core.async.t_cljs$core$async27977.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async27977.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async27977.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async27977.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async27977.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta27978","meta27978",-2058381142,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async27977.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27977.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27977";

cljs.core.async.t_cljs$core$async27977.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__25367__auto__,writer__25368__auto__,opt__25369__auto__){
return cljs.core._write.call(null,writer__25368__auto__,"cljs.core.async/t_cljs$core$async27977");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async27977 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async27977(alt_flag__$1,flag__$1,meta27978){
return (new cljs.core.async.t_cljs$core$async27977(alt_flag__$1,flag__$1,meta27978));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async27977(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async27983 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27983 = (function (alt_handler,flag,cb,meta27984){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta27984 = meta27984;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async27983.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27985,meta27984__$1){
var self__ = this;
var _27985__$1 = this;
return (new cljs.core.async.t_cljs$core$async27983(self__.alt_handler,self__.flag,self__.cb,meta27984__$1));
});

cljs.core.async.t_cljs$core$async27983.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27985){
var self__ = this;
var _27985__$1 = this;
return self__.meta27984;
});

cljs.core.async.t_cljs$core$async27983.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async27983.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async27983.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async27983.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async27983.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta27984","meta27984",-569656278,null)], null);
});

cljs.core.async.t_cljs$core$async27983.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27983.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27983";

cljs.core.async.t_cljs$core$async27983.cljs$lang$ctorPrWriter = (function (this__25367__auto__,writer__25368__auto__,opt__25369__auto__){
return cljs.core._write.call(null,writer__25368__auto__,"cljs.core.async/t_cljs$core$async27983");
});

cljs.core.async.__GT_t_cljs$core$async27983 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async27983(alt_handler__$1,flag__$1,cb__$1,meta27984){
return (new cljs.core.async.t_cljs$core$async27983(alt_handler__$1,flag__$1,cb__$1,meta27984));
});

}

return (new cljs.core.async.t_cljs$core$async27983(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__27986_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__27986_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__27987_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__27987_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__24761__auto__ = wport;
if(cljs.core.truth_(or__24761__auto__)){
return or__24761__auto__;
} else {
return port;
}
})()], null));
} else {
var G__27988 = (i + (1));
i = G__27988;
continue;
}
} else {
return null;
}
break;
}
})();
var or__24761__auto__ = ret;
if(cljs.core.truth_(or__24761__auto__)){
return or__24761__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__24749__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__24749__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__24749__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__25843__auto__ = [];
var len__25836__auto___27994 = arguments.length;
var i__25837__auto___27995 = (0);
while(true){
if((i__25837__auto___27995 < len__25836__auto___27994)){
args__25843__auto__.push((arguments[i__25837__auto___27995]));

var G__27996 = (i__25837__auto___27995 + (1));
i__25837__auto___27995 = G__27996;
continue;
} else {
}
break;
}

var argseq__25844__auto__ = ((((1) < args__25843__auto__.length))?(new cljs.core.IndexedSeq(args__25843__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25844__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__27991){
var map__27992 = p__27991;
var map__27992__$1 = ((((!((map__27992 == null)))?((((map__27992.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27992.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27992):map__27992);
var opts = map__27992__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq27989){
var G__27990 = cljs.core.first.call(null,seq27989);
var seq27989__$1 = cljs.core.next.call(null,seq27989);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__27990,seq27989__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args27997 = [];
var len__25836__auto___28047 = arguments.length;
var i__25837__auto___28048 = (0);
while(true){
if((i__25837__auto___28048 < len__25836__auto___28047)){
args27997.push((arguments[i__25837__auto___28048]));

var G__28049 = (i__25837__auto___28048 + (1));
i__25837__auto___28048 = G__28049;
continue;
} else {
}
break;
}

var G__27999 = args27997.length;
switch (G__27999) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27997.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__27884__auto___28051 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27884__auto___28051){
return (function (){
var f__27885__auto__ = (function (){var switch__27772__auto__ = ((function (c__27884__auto___28051){
return (function (state_28023){
var state_val_28024 = (state_28023[(1)]);
if((state_val_28024 === (7))){
var inst_28019 = (state_28023[(2)]);
var state_28023__$1 = state_28023;
var statearr_28025_28052 = state_28023__$1;
(statearr_28025_28052[(2)] = inst_28019);

(statearr_28025_28052[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28024 === (1))){
var state_28023__$1 = state_28023;
var statearr_28026_28053 = state_28023__$1;
(statearr_28026_28053[(2)] = null);

(statearr_28026_28053[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28024 === (4))){
var inst_28002 = (state_28023[(7)]);
var inst_28002__$1 = (state_28023[(2)]);
var inst_28003 = (inst_28002__$1 == null);
var state_28023__$1 = (function (){var statearr_28027 = state_28023;
(statearr_28027[(7)] = inst_28002__$1);

return statearr_28027;
})();
if(cljs.core.truth_(inst_28003)){
var statearr_28028_28054 = state_28023__$1;
(statearr_28028_28054[(1)] = (5));

} else {
var statearr_28029_28055 = state_28023__$1;
(statearr_28029_28055[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28024 === (13))){
var state_28023__$1 = state_28023;
var statearr_28030_28056 = state_28023__$1;
(statearr_28030_28056[(2)] = null);

(statearr_28030_28056[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28024 === (6))){
var inst_28002 = (state_28023[(7)]);
var state_28023__$1 = state_28023;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28023__$1,(11),to,inst_28002);
} else {
if((state_val_28024 === (3))){
var inst_28021 = (state_28023[(2)]);
var state_28023__$1 = state_28023;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28023__$1,inst_28021);
} else {
if((state_val_28024 === (12))){
var state_28023__$1 = state_28023;
var statearr_28031_28057 = state_28023__$1;
(statearr_28031_28057[(2)] = null);

(statearr_28031_28057[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28024 === (2))){
var state_28023__$1 = state_28023;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28023__$1,(4),from);
} else {
if((state_val_28024 === (11))){
var inst_28012 = (state_28023[(2)]);
var state_28023__$1 = state_28023;
if(cljs.core.truth_(inst_28012)){
var statearr_28032_28058 = state_28023__$1;
(statearr_28032_28058[(1)] = (12));

} else {
var statearr_28033_28059 = state_28023__$1;
(statearr_28033_28059[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28024 === (9))){
var state_28023__$1 = state_28023;
var statearr_28034_28060 = state_28023__$1;
(statearr_28034_28060[(2)] = null);

(statearr_28034_28060[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28024 === (5))){
var state_28023__$1 = state_28023;
if(cljs.core.truth_(close_QMARK_)){
var statearr_28035_28061 = state_28023__$1;
(statearr_28035_28061[(1)] = (8));

} else {
var statearr_28036_28062 = state_28023__$1;
(statearr_28036_28062[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28024 === (14))){
var inst_28017 = (state_28023[(2)]);
var state_28023__$1 = state_28023;
var statearr_28037_28063 = state_28023__$1;
(statearr_28037_28063[(2)] = inst_28017);

(statearr_28037_28063[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28024 === (10))){
var inst_28009 = (state_28023[(2)]);
var state_28023__$1 = state_28023;
var statearr_28038_28064 = state_28023__$1;
(statearr_28038_28064[(2)] = inst_28009);

(statearr_28038_28064[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28024 === (8))){
var inst_28006 = cljs.core.async.close_BANG_.call(null,to);
var state_28023__$1 = state_28023;
var statearr_28039_28065 = state_28023__$1;
(statearr_28039_28065[(2)] = inst_28006);

(statearr_28039_28065[(1)] = (10));


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
});})(c__27884__auto___28051))
;
return ((function (switch__27772__auto__,c__27884__auto___28051){
return (function() {
var cljs$core$async$state_machine__27773__auto__ = null;
var cljs$core$async$state_machine__27773__auto____0 = (function (){
var statearr_28043 = [null,null,null,null,null,null,null,null];
(statearr_28043[(0)] = cljs$core$async$state_machine__27773__auto__);

(statearr_28043[(1)] = (1));

return statearr_28043;
});
var cljs$core$async$state_machine__27773__auto____1 = (function (state_28023){
while(true){
var ret_value__27774__auto__ = (function (){try{while(true){
var result__27775__auto__ = switch__27772__auto__.call(null,state_28023);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27775__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27775__auto__;
}
break;
}
}catch (e28044){if((e28044 instanceof Object)){
var ex__27776__auto__ = e28044;
var statearr_28045_28066 = state_28023;
(statearr_28045_28066[(5)] = ex__27776__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28023);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28044;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27774__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28067 = state_28023;
state_28023 = G__28067;
continue;
} else {
return ret_value__27774__auto__;
}
break;
}
});
cljs$core$async$state_machine__27773__auto__ = function(state_28023){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27773__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27773__auto____1.call(this,state_28023);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27773__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27773__auto____0;
cljs$core$async$state_machine__27773__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27773__auto____1;
return cljs$core$async$state_machine__27773__auto__;
})()
;})(switch__27772__auto__,c__27884__auto___28051))
})();
var state__27886__auto__ = (function (){var statearr_28046 = f__27885__auto__.call(null);
(statearr_28046[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27884__auto___28051);

return statearr_28046;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27886__auto__);
});})(c__27884__auto___28051))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__28255){
var vec__28256 = p__28255;
var v = cljs.core.nth.call(null,vec__28256,(0),null);
var p = cljs.core.nth.call(null,vec__28256,(1),null);
var job = vec__28256;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__27884__auto___28442 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27884__auto___28442,res,vec__28256,v,p,job,jobs,results){
return (function (){
var f__27885__auto__ = (function (){var switch__27772__auto__ = ((function (c__27884__auto___28442,res,vec__28256,v,p,job,jobs,results){
return (function (state_28263){
var state_val_28264 = (state_28263[(1)]);
if((state_val_28264 === (1))){
var state_28263__$1 = state_28263;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28263__$1,(2),res,v);
} else {
if((state_val_28264 === (2))){
var inst_28260 = (state_28263[(2)]);
var inst_28261 = cljs.core.async.close_BANG_.call(null,res);
var state_28263__$1 = (function (){var statearr_28265 = state_28263;
(statearr_28265[(7)] = inst_28260);

return statearr_28265;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28263__$1,inst_28261);
} else {
return null;
}
}
});})(c__27884__auto___28442,res,vec__28256,v,p,job,jobs,results))
;
return ((function (switch__27772__auto__,c__27884__auto___28442,res,vec__28256,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27773__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27773__auto____0 = (function (){
var statearr_28269 = [null,null,null,null,null,null,null,null];
(statearr_28269[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27773__auto__);

(statearr_28269[(1)] = (1));

return statearr_28269;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27773__auto____1 = (function (state_28263){
while(true){
var ret_value__27774__auto__ = (function (){try{while(true){
var result__27775__auto__ = switch__27772__auto__.call(null,state_28263);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27775__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27775__auto__;
}
break;
}
}catch (e28270){if((e28270 instanceof Object)){
var ex__27776__auto__ = e28270;
var statearr_28271_28443 = state_28263;
(statearr_28271_28443[(5)] = ex__27776__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28263);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28270;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27774__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28444 = state_28263;
state_28263 = G__28444;
continue;
} else {
return ret_value__27774__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27773__auto__ = function(state_28263){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27773__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27773__auto____1.call(this,state_28263);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27773__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27773__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27773__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27773__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27773__auto__;
})()
;})(switch__27772__auto__,c__27884__auto___28442,res,vec__28256,v,p,job,jobs,results))
})();
var state__27886__auto__ = (function (){var statearr_28272 = f__27885__auto__.call(null);
(statearr_28272[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27884__auto___28442);

return statearr_28272;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27886__auto__);
});})(c__27884__auto___28442,res,vec__28256,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__28273){
var vec__28274 = p__28273;
var v = cljs.core.nth.call(null,vec__28274,(0),null);
var p = cljs.core.nth.call(null,vec__28274,(1),null);
var job = vec__28274;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__25676__auto___28445 = n;
var __28446 = (0);
while(true){
if((__28446 < n__25676__auto___28445)){
var G__28277_28447 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__28277_28447) {
case "compute":
var c__27884__auto___28449 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__28446,c__27884__auto___28449,G__28277_28447,n__25676__auto___28445,jobs,results,process,async){
return (function (){
var f__27885__auto__ = (function (){var switch__27772__auto__ = ((function (__28446,c__27884__auto___28449,G__28277_28447,n__25676__auto___28445,jobs,results,process,async){
return (function (state_28290){
var state_val_28291 = (state_28290[(1)]);
if((state_val_28291 === (1))){
var state_28290__$1 = state_28290;
var statearr_28292_28450 = state_28290__$1;
(statearr_28292_28450[(2)] = null);

(statearr_28292_28450[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28291 === (2))){
var state_28290__$1 = state_28290;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28290__$1,(4),jobs);
} else {
if((state_val_28291 === (3))){
var inst_28288 = (state_28290[(2)]);
var state_28290__$1 = state_28290;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28290__$1,inst_28288);
} else {
if((state_val_28291 === (4))){
var inst_28280 = (state_28290[(2)]);
var inst_28281 = process.call(null,inst_28280);
var state_28290__$1 = state_28290;
if(cljs.core.truth_(inst_28281)){
var statearr_28293_28451 = state_28290__$1;
(statearr_28293_28451[(1)] = (5));

} else {
var statearr_28294_28452 = state_28290__$1;
(statearr_28294_28452[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28291 === (5))){
var state_28290__$1 = state_28290;
var statearr_28295_28453 = state_28290__$1;
(statearr_28295_28453[(2)] = null);

(statearr_28295_28453[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28291 === (6))){
var state_28290__$1 = state_28290;
var statearr_28296_28454 = state_28290__$1;
(statearr_28296_28454[(2)] = null);

(statearr_28296_28454[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28291 === (7))){
var inst_28286 = (state_28290[(2)]);
var state_28290__$1 = state_28290;
var statearr_28297_28455 = state_28290__$1;
(statearr_28297_28455[(2)] = inst_28286);

(statearr_28297_28455[(1)] = (3));


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
});})(__28446,c__27884__auto___28449,G__28277_28447,n__25676__auto___28445,jobs,results,process,async))
;
return ((function (__28446,switch__27772__auto__,c__27884__auto___28449,G__28277_28447,n__25676__auto___28445,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27773__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27773__auto____0 = (function (){
var statearr_28301 = [null,null,null,null,null,null,null];
(statearr_28301[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27773__auto__);

(statearr_28301[(1)] = (1));

return statearr_28301;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27773__auto____1 = (function (state_28290){
while(true){
var ret_value__27774__auto__ = (function (){try{while(true){
var result__27775__auto__ = switch__27772__auto__.call(null,state_28290);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27775__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27775__auto__;
}
break;
}
}catch (e28302){if((e28302 instanceof Object)){
var ex__27776__auto__ = e28302;
var statearr_28303_28456 = state_28290;
(statearr_28303_28456[(5)] = ex__27776__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28290);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28302;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27774__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28457 = state_28290;
state_28290 = G__28457;
continue;
} else {
return ret_value__27774__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27773__auto__ = function(state_28290){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27773__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27773__auto____1.call(this,state_28290);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27773__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27773__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27773__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27773__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27773__auto__;
})()
;})(__28446,switch__27772__auto__,c__27884__auto___28449,G__28277_28447,n__25676__auto___28445,jobs,results,process,async))
})();
var state__27886__auto__ = (function (){var statearr_28304 = f__27885__auto__.call(null);
(statearr_28304[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27884__auto___28449);

return statearr_28304;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27886__auto__);
});})(__28446,c__27884__auto___28449,G__28277_28447,n__25676__auto___28445,jobs,results,process,async))
);


break;
case "async":
var c__27884__auto___28458 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__28446,c__27884__auto___28458,G__28277_28447,n__25676__auto___28445,jobs,results,process,async){
return (function (){
var f__27885__auto__ = (function (){var switch__27772__auto__ = ((function (__28446,c__27884__auto___28458,G__28277_28447,n__25676__auto___28445,jobs,results,process,async){
return (function (state_28317){
var state_val_28318 = (state_28317[(1)]);
if((state_val_28318 === (1))){
var state_28317__$1 = state_28317;
var statearr_28319_28459 = state_28317__$1;
(statearr_28319_28459[(2)] = null);

(statearr_28319_28459[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28318 === (2))){
var state_28317__$1 = state_28317;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28317__$1,(4),jobs);
} else {
if((state_val_28318 === (3))){
var inst_28315 = (state_28317[(2)]);
var state_28317__$1 = state_28317;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28317__$1,inst_28315);
} else {
if((state_val_28318 === (4))){
var inst_28307 = (state_28317[(2)]);
var inst_28308 = async.call(null,inst_28307);
var state_28317__$1 = state_28317;
if(cljs.core.truth_(inst_28308)){
var statearr_28320_28460 = state_28317__$1;
(statearr_28320_28460[(1)] = (5));

} else {
var statearr_28321_28461 = state_28317__$1;
(statearr_28321_28461[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28318 === (5))){
var state_28317__$1 = state_28317;
var statearr_28322_28462 = state_28317__$1;
(statearr_28322_28462[(2)] = null);

(statearr_28322_28462[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28318 === (6))){
var state_28317__$1 = state_28317;
var statearr_28323_28463 = state_28317__$1;
(statearr_28323_28463[(2)] = null);

(statearr_28323_28463[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28318 === (7))){
var inst_28313 = (state_28317[(2)]);
var state_28317__$1 = state_28317;
var statearr_28324_28464 = state_28317__$1;
(statearr_28324_28464[(2)] = inst_28313);

(statearr_28324_28464[(1)] = (3));


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
});})(__28446,c__27884__auto___28458,G__28277_28447,n__25676__auto___28445,jobs,results,process,async))
;
return ((function (__28446,switch__27772__auto__,c__27884__auto___28458,G__28277_28447,n__25676__auto___28445,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27773__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27773__auto____0 = (function (){
var statearr_28328 = [null,null,null,null,null,null,null];
(statearr_28328[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27773__auto__);

(statearr_28328[(1)] = (1));

return statearr_28328;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27773__auto____1 = (function (state_28317){
while(true){
var ret_value__27774__auto__ = (function (){try{while(true){
var result__27775__auto__ = switch__27772__auto__.call(null,state_28317);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27775__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27775__auto__;
}
break;
}
}catch (e28329){if((e28329 instanceof Object)){
var ex__27776__auto__ = e28329;
var statearr_28330_28465 = state_28317;
(statearr_28330_28465[(5)] = ex__27776__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28317);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28329;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27774__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28466 = state_28317;
state_28317 = G__28466;
continue;
} else {
return ret_value__27774__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27773__auto__ = function(state_28317){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27773__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27773__auto____1.call(this,state_28317);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27773__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27773__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27773__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27773__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27773__auto__;
})()
;})(__28446,switch__27772__auto__,c__27884__auto___28458,G__28277_28447,n__25676__auto___28445,jobs,results,process,async))
})();
var state__27886__auto__ = (function (){var statearr_28331 = f__27885__auto__.call(null);
(statearr_28331[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27884__auto___28458);

return statearr_28331;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27886__auto__);
});})(__28446,c__27884__auto___28458,G__28277_28447,n__25676__auto___28445,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__28467 = (__28446 + (1));
__28446 = G__28467;
continue;
} else {
}
break;
}

var c__27884__auto___28468 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27884__auto___28468,jobs,results,process,async){
return (function (){
var f__27885__auto__ = (function (){var switch__27772__auto__ = ((function (c__27884__auto___28468,jobs,results,process,async){
return (function (state_28353){
var state_val_28354 = (state_28353[(1)]);
if((state_val_28354 === (1))){
var state_28353__$1 = state_28353;
var statearr_28355_28469 = state_28353__$1;
(statearr_28355_28469[(2)] = null);

(statearr_28355_28469[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28354 === (2))){
var state_28353__$1 = state_28353;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28353__$1,(4),from);
} else {
if((state_val_28354 === (3))){
var inst_28351 = (state_28353[(2)]);
var state_28353__$1 = state_28353;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28353__$1,inst_28351);
} else {
if((state_val_28354 === (4))){
var inst_28334 = (state_28353[(7)]);
var inst_28334__$1 = (state_28353[(2)]);
var inst_28335 = (inst_28334__$1 == null);
var state_28353__$1 = (function (){var statearr_28356 = state_28353;
(statearr_28356[(7)] = inst_28334__$1);

return statearr_28356;
})();
if(cljs.core.truth_(inst_28335)){
var statearr_28357_28470 = state_28353__$1;
(statearr_28357_28470[(1)] = (5));

} else {
var statearr_28358_28471 = state_28353__$1;
(statearr_28358_28471[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28354 === (5))){
var inst_28337 = cljs.core.async.close_BANG_.call(null,jobs);
var state_28353__$1 = state_28353;
var statearr_28359_28472 = state_28353__$1;
(statearr_28359_28472[(2)] = inst_28337);

(statearr_28359_28472[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28354 === (6))){
var inst_28339 = (state_28353[(8)]);
var inst_28334 = (state_28353[(7)]);
var inst_28339__$1 = cljs.core.async.chan.call(null,(1));
var inst_28340 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_28341 = [inst_28334,inst_28339__$1];
var inst_28342 = (new cljs.core.PersistentVector(null,2,(5),inst_28340,inst_28341,null));
var state_28353__$1 = (function (){var statearr_28360 = state_28353;
(statearr_28360[(8)] = inst_28339__$1);

return statearr_28360;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28353__$1,(8),jobs,inst_28342);
} else {
if((state_val_28354 === (7))){
var inst_28349 = (state_28353[(2)]);
var state_28353__$1 = state_28353;
var statearr_28361_28473 = state_28353__$1;
(statearr_28361_28473[(2)] = inst_28349);

(statearr_28361_28473[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28354 === (8))){
var inst_28339 = (state_28353[(8)]);
var inst_28344 = (state_28353[(2)]);
var state_28353__$1 = (function (){var statearr_28362 = state_28353;
(statearr_28362[(9)] = inst_28344);

return statearr_28362;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28353__$1,(9),results,inst_28339);
} else {
if((state_val_28354 === (9))){
var inst_28346 = (state_28353[(2)]);
var state_28353__$1 = (function (){var statearr_28363 = state_28353;
(statearr_28363[(10)] = inst_28346);

return statearr_28363;
})();
var statearr_28364_28474 = state_28353__$1;
(statearr_28364_28474[(2)] = null);

(statearr_28364_28474[(1)] = (2));


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
});})(c__27884__auto___28468,jobs,results,process,async))
;
return ((function (switch__27772__auto__,c__27884__auto___28468,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27773__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27773__auto____0 = (function (){
var statearr_28368 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28368[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27773__auto__);

(statearr_28368[(1)] = (1));

return statearr_28368;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27773__auto____1 = (function (state_28353){
while(true){
var ret_value__27774__auto__ = (function (){try{while(true){
var result__27775__auto__ = switch__27772__auto__.call(null,state_28353);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27775__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27775__auto__;
}
break;
}
}catch (e28369){if((e28369 instanceof Object)){
var ex__27776__auto__ = e28369;
var statearr_28370_28475 = state_28353;
(statearr_28370_28475[(5)] = ex__27776__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28353);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28369;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27774__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28476 = state_28353;
state_28353 = G__28476;
continue;
} else {
return ret_value__27774__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27773__auto__ = function(state_28353){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27773__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27773__auto____1.call(this,state_28353);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27773__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27773__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27773__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27773__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27773__auto__;
})()
;})(switch__27772__auto__,c__27884__auto___28468,jobs,results,process,async))
})();
var state__27886__auto__ = (function (){var statearr_28371 = f__27885__auto__.call(null);
(statearr_28371[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27884__auto___28468);

return statearr_28371;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27886__auto__);
});})(c__27884__auto___28468,jobs,results,process,async))
);


var c__27884__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27884__auto__,jobs,results,process,async){
return (function (){
var f__27885__auto__ = (function (){var switch__27772__auto__ = ((function (c__27884__auto__,jobs,results,process,async){
return (function (state_28409){
var state_val_28410 = (state_28409[(1)]);
if((state_val_28410 === (7))){
var inst_28405 = (state_28409[(2)]);
var state_28409__$1 = state_28409;
var statearr_28411_28477 = state_28409__$1;
(statearr_28411_28477[(2)] = inst_28405);

(statearr_28411_28477[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28410 === (20))){
var state_28409__$1 = state_28409;
var statearr_28412_28478 = state_28409__$1;
(statearr_28412_28478[(2)] = null);

(statearr_28412_28478[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28410 === (1))){
var state_28409__$1 = state_28409;
var statearr_28413_28479 = state_28409__$1;
(statearr_28413_28479[(2)] = null);

(statearr_28413_28479[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28410 === (4))){
var inst_28374 = (state_28409[(7)]);
var inst_28374__$1 = (state_28409[(2)]);
var inst_28375 = (inst_28374__$1 == null);
var state_28409__$1 = (function (){var statearr_28414 = state_28409;
(statearr_28414[(7)] = inst_28374__$1);

return statearr_28414;
})();
if(cljs.core.truth_(inst_28375)){
var statearr_28415_28480 = state_28409__$1;
(statearr_28415_28480[(1)] = (5));

} else {
var statearr_28416_28481 = state_28409__$1;
(statearr_28416_28481[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28410 === (15))){
var inst_28387 = (state_28409[(8)]);
var state_28409__$1 = state_28409;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28409__$1,(18),to,inst_28387);
} else {
if((state_val_28410 === (21))){
var inst_28400 = (state_28409[(2)]);
var state_28409__$1 = state_28409;
var statearr_28417_28482 = state_28409__$1;
(statearr_28417_28482[(2)] = inst_28400);

(statearr_28417_28482[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28410 === (13))){
var inst_28402 = (state_28409[(2)]);
var state_28409__$1 = (function (){var statearr_28418 = state_28409;
(statearr_28418[(9)] = inst_28402);

return statearr_28418;
})();
var statearr_28419_28483 = state_28409__$1;
(statearr_28419_28483[(2)] = null);

(statearr_28419_28483[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28410 === (6))){
var inst_28374 = (state_28409[(7)]);
var state_28409__$1 = state_28409;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28409__$1,(11),inst_28374);
} else {
if((state_val_28410 === (17))){
var inst_28395 = (state_28409[(2)]);
var state_28409__$1 = state_28409;
if(cljs.core.truth_(inst_28395)){
var statearr_28420_28484 = state_28409__$1;
(statearr_28420_28484[(1)] = (19));

} else {
var statearr_28421_28485 = state_28409__$1;
(statearr_28421_28485[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28410 === (3))){
var inst_28407 = (state_28409[(2)]);
var state_28409__$1 = state_28409;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28409__$1,inst_28407);
} else {
if((state_val_28410 === (12))){
var inst_28384 = (state_28409[(10)]);
var state_28409__$1 = state_28409;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28409__$1,(14),inst_28384);
} else {
if((state_val_28410 === (2))){
var state_28409__$1 = state_28409;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28409__$1,(4),results);
} else {
if((state_val_28410 === (19))){
var state_28409__$1 = state_28409;
var statearr_28422_28486 = state_28409__$1;
(statearr_28422_28486[(2)] = null);

(statearr_28422_28486[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28410 === (11))){
var inst_28384 = (state_28409[(2)]);
var state_28409__$1 = (function (){var statearr_28423 = state_28409;
(statearr_28423[(10)] = inst_28384);

return statearr_28423;
})();
var statearr_28424_28487 = state_28409__$1;
(statearr_28424_28487[(2)] = null);

(statearr_28424_28487[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28410 === (9))){
var state_28409__$1 = state_28409;
var statearr_28425_28488 = state_28409__$1;
(statearr_28425_28488[(2)] = null);

(statearr_28425_28488[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28410 === (5))){
var state_28409__$1 = state_28409;
if(cljs.core.truth_(close_QMARK_)){
var statearr_28426_28489 = state_28409__$1;
(statearr_28426_28489[(1)] = (8));

} else {
var statearr_28427_28490 = state_28409__$1;
(statearr_28427_28490[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28410 === (14))){
var inst_28389 = (state_28409[(11)]);
var inst_28387 = (state_28409[(8)]);
var inst_28387__$1 = (state_28409[(2)]);
var inst_28388 = (inst_28387__$1 == null);
var inst_28389__$1 = cljs.core.not.call(null,inst_28388);
var state_28409__$1 = (function (){var statearr_28428 = state_28409;
(statearr_28428[(11)] = inst_28389__$1);

(statearr_28428[(8)] = inst_28387__$1);

return statearr_28428;
})();
if(inst_28389__$1){
var statearr_28429_28491 = state_28409__$1;
(statearr_28429_28491[(1)] = (15));

} else {
var statearr_28430_28492 = state_28409__$1;
(statearr_28430_28492[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28410 === (16))){
var inst_28389 = (state_28409[(11)]);
var state_28409__$1 = state_28409;
var statearr_28431_28493 = state_28409__$1;
(statearr_28431_28493[(2)] = inst_28389);

(statearr_28431_28493[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28410 === (10))){
var inst_28381 = (state_28409[(2)]);
var state_28409__$1 = state_28409;
var statearr_28432_28494 = state_28409__$1;
(statearr_28432_28494[(2)] = inst_28381);

(statearr_28432_28494[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28410 === (18))){
var inst_28392 = (state_28409[(2)]);
var state_28409__$1 = state_28409;
var statearr_28433_28495 = state_28409__$1;
(statearr_28433_28495[(2)] = inst_28392);

(statearr_28433_28495[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28410 === (8))){
var inst_28378 = cljs.core.async.close_BANG_.call(null,to);
var state_28409__$1 = state_28409;
var statearr_28434_28496 = state_28409__$1;
(statearr_28434_28496[(2)] = inst_28378);

(statearr_28434_28496[(1)] = (10));


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
}
}
}
}
});})(c__27884__auto__,jobs,results,process,async))
;
return ((function (switch__27772__auto__,c__27884__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27773__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27773__auto____0 = (function (){
var statearr_28438 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28438[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27773__auto__);

(statearr_28438[(1)] = (1));

return statearr_28438;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27773__auto____1 = (function (state_28409){
while(true){
var ret_value__27774__auto__ = (function (){try{while(true){
var result__27775__auto__ = switch__27772__auto__.call(null,state_28409);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27775__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27775__auto__;
}
break;
}
}catch (e28439){if((e28439 instanceof Object)){
var ex__27776__auto__ = e28439;
var statearr_28440_28497 = state_28409;
(statearr_28440_28497[(5)] = ex__27776__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28409);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28439;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27774__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28498 = state_28409;
state_28409 = G__28498;
continue;
} else {
return ret_value__27774__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27773__auto__ = function(state_28409){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27773__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27773__auto____1.call(this,state_28409);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27773__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27773__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27773__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27773__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27773__auto__;
})()
;})(switch__27772__auto__,c__27884__auto__,jobs,results,process,async))
})();
var state__27886__auto__ = (function (){var statearr_28441 = f__27885__auto__.call(null);
(statearr_28441[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27884__auto__);

return statearr_28441;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27886__auto__);
});})(c__27884__auto__,jobs,results,process,async))
);

return c__27884__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args28499 = [];
var len__25836__auto___28502 = arguments.length;
var i__25837__auto___28503 = (0);
while(true){
if((i__25837__auto___28503 < len__25836__auto___28502)){
args28499.push((arguments[i__25837__auto___28503]));

var G__28504 = (i__25837__auto___28503 + (1));
i__25837__auto___28503 = G__28504;
continue;
} else {
}
break;
}

var G__28501 = args28499.length;
switch (G__28501) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28499.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args28506 = [];
var len__25836__auto___28509 = arguments.length;
var i__25837__auto___28510 = (0);
while(true){
if((i__25837__auto___28510 < len__25836__auto___28509)){
args28506.push((arguments[i__25837__auto___28510]));

var G__28511 = (i__25837__auto___28510 + (1));
i__25837__auto___28510 = G__28511;
continue;
} else {
}
break;
}

var G__28508 = args28506.length;
switch (G__28508) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28506.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args28513 = [];
var len__25836__auto___28566 = arguments.length;
var i__25837__auto___28567 = (0);
while(true){
if((i__25837__auto___28567 < len__25836__auto___28566)){
args28513.push((arguments[i__25837__auto___28567]));

var G__28568 = (i__25837__auto___28567 + (1));
i__25837__auto___28567 = G__28568;
continue;
} else {
}
break;
}

var G__28515 = args28513.length;
switch (G__28515) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28513.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__27884__auto___28570 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27884__auto___28570,tc,fc){
return (function (){
var f__27885__auto__ = (function (){var switch__27772__auto__ = ((function (c__27884__auto___28570,tc,fc){
return (function (state_28541){
var state_val_28542 = (state_28541[(1)]);
if((state_val_28542 === (7))){
var inst_28537 = (state_28541[(2)]);
var state_28541__$1 = state_28541;
var statearr_28543_28571 = state_28541__$1;
(statearr_28543_28571[(2)] = inst_28537);

(statearr_28543_28571[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28542 === (1))){
var state_28541__$1 = state_28541;
var statearr_28544_28572 = state_28541__$1;
(statearr_28544_28572[(2)] = null);

(statearr_28544_28572[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28542 === (4))){
var inst_28518 = (state_28541[(7)]);
var inst_28518__$1 = (state_28541[(2)]);
var inst_28519 = (inst_28518__$1 == null);
var state_28541__$1 = (function (){var statearr_28545 = state_28541;
(statearr_28545[(7)] = inst_28518__$1);

return statearr_28545;
})();
if(cljs.core.truth_(inst_28519)){
var statearr_28546_28573 = state_28541__$1;
(statearr_28546_28573[(1)] = (5));

} else {
var statearr_28547_28574 = state_28541__$1;
(statearr_28547_28574[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28542 === (13))){
var state_28541__$1 = state_28541;
var statearr_28548_28575 = state_28541__$1;
(statearr_28548_28575[(2)] = null);

(statearr_28548_28575[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28542 === (6))){
var inst_28518 = (state_28541[(7)]);
var inst_28524 = p.call(null,inst_28518);
var state_28541__$1 = state_28541;
if(cljs.core.truth_(inst_28524)){
var statearr_28549_28576 = state_28541__$1;
(statearr_28549_28576[(1)] = (9));

} else {
var statearr_28550_28577 = state_28541__$1;
(statearr_28550_28577[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28542 === (3))){
var inst_28539 = (state_28541[(2)]);
var state_28541__$1 = state_28541;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28541__$1,inst_28539);
} else {
if((state_val_28542 === (12))){
var state_28541__$1 = state_28541;
var statearr_28551_28578 = state_28541__$1;
(statearr_28551_28578[(2)] = null);

(statearr_28551_28578[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28542 === (2))){
var state_28541__$1 = state_28541;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28541__$1,(4),ch);
} else {
if((state_val_28542 === (11))){
var inst_28518 = (state_28541[(7)]);
var inst_28528 = (state_28541[(2)]);
var state_28541__$1 = state_28541;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28541__$1,(8),inst_28528,inst_28518);
} else {
if((state_val_28542 === (9))){
var state_28541__$1 = state_28541;
var statearr_28552_28579 = state_28541__$1;
(statearr_28552_28579[(2)] = tc);

(statearr_28552_28579[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28542 === (5))){
var inst_28521 = cljs.core.async.close_BANG_.call(null,tc);
var inst_28522 = cljs.core.async.close_BANG_.call(null,fc);
var state_28541__$1 = (function (){var statearr_28553 = state_28541;
(statearr_28553[(8)] = inst_28521);

return statearr_28553;
})();
var statearr_28554_28580 = state_28541__$1;
(statearr_28554_28580[(2)] = inst_28522);

(statearr_28554_28580[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28542 === (14))){
var inst_28535 = (state_28541[(2)]);
var state_28541__$1 = state_28541;
var statearr_28555_28581 = state_28541__$1;
(statearr_28555_28581[(2)] = inst_28535);

(statearr_28555_28581[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28542 === (10))){
var state_28541__$1 = state_28541;
var statearr_28556_28582 = state_28541__$1;
(statearr_28556_28582[(2)] = fc);

(statearr_28556_28582[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28542 === (8))){
var inst_28530 = (state_28541[(2)]);
var state_28541__$1 = state_28541;
if(cljs.core.truth_(inst_28530)){
var statearr_28557_28583 = state_28541__$1;
(statearr_28557_28583[(1)] = (12));

} else {
var statearr_28558_28584 = state_28541__$1;
(statearr_28558_28584[(1)] = (13));

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
});})(c__27884__auto___28570,tc,fc))
;
return ((function (switch__27772__auto__,c__27884__auto___28570,tc,fc){
return (function() {
var cljs$core$async$state_machine__27773__auto__ = null;
var cljs$core$async$state_machine__27773__auto____0 = (function (){
var statearr_28562 = [null,null,null,null,null,null,null,null,null];
(statearr_28562[(0)] = cljs$core$async$state_machine__27773__auto__);

(statearr_28562[(1)] = (1));

return statearr_28562;
});
var cljs$core$async$state_machine__27773__auto____1 = (function (state_28541){
while(true){
var ret_value__27774__auto__ = (function (){try{while(true){
var result__27775__auto__ = switch__27772__auto__.call(null,state_28541);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27775__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27775__auto__;
}
break;
}
}catch (e28563){if((e28563 instanceof Object)){
var ex__27776__auto__ = e28563;
var statearr_28564_28585 = state_28541;
(statearr_28564_28585[(5)] = ex__27776__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28541);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28563;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27774__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28586 = state_28541;
state_28541 = G__28586;
continue;
} else {
return ret_value__27774__auto__;
}
break;
}
});
cljs$core$async$state_machine__27773__auto__ = function(state_28541){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27773__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27773__auto____1.call(this,state_28541);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27773__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27773__auto____0;
cljs$core$async$state_machine__27773__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27773__auto____1;
return cljs$core$async$state_machine__27773__auto__;
})()
;})(switch__27772__auto__,c__27884__auto___28570,tc,fc))
})();
var state__27886__auto__ = (function (){var statearr_28565 = f__27885__auto__.call(null);
(statearr_28565[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27884__auto___28570);

return statearr_28565;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27886__auto__);
});})(c__27884__auto___28570,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__27884__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27884__auto__){
return (function (){
var f__27885__auto__ = (function (){var switch__27772__auto__ = ((function (c__27884__auto__){
return (function (state_28650){
var state_val_28651 = (state_28650[(1)]);
if((state_val_28651 === (7))){
var inst_28646 = (state_28650[(2)]);
var state_28650__$1 = state_28650;
var statearr_28652_28673 = state_28650__$1;
(statearr_28652_28673[(2)] = inst_28646);

(statearr_28652_28673[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28651 === (1))){
var inst_28630 = init;
var state_28650__$1 = (function (){var statearr_28653 = state_28650;
(statearr_28653[(7)] = inst_28630);

return statearr_28653;
})();
var statearr_28654_28674 = state_28650__$1;
(statearr_28654_28674[(2)] = null);

(statearr_28654_28674[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28651 === (4))){
var inst_28633 = (state_28650[(8)]);
var inst_28633__$1 = (state_28650[(2)]);
var inst_28634 = (inst_28633__$1 == null);
var state_28650__$1 = (function (){var statearr_28655 = state_28650;
(statearr_28655[(8)] = inst_28633__$1);

return statearr_28655;
})();
if(cljs.core.truth_(inst_28634)){
var statearr_28656_28675 = state_28650__$1;
(statearr_28656_28675[(1)] = (5));

} else {
var statearr_28657_28676 = state_28650__$1;
(statearr_28657_28676[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28651 === (6))){
var inst_28637 = (state_28650[(9)]);
var inst_28630 = (state_28650[(7)]);
var inst_28633 = (state_28650[(8)]);
var inst_28637__$1 = f.call(null,inst_28630,inst_28633);
var inst_28638 = cljs.core.reduced_QMARK_.call(null,inst_28637__$1);
var state_28650__$1 = (function (){var statearr_28658 = state_28650;
(statearr_28658[(9)] = inst_28637__$1);

return statearr_28658;
})();
if(inst_28638){
var statearr_28659_28677 = state_28650__$1;
(statearr_28659_28677[(1)] = (8));

} else {
var statearr_28660_28678 = state_28650__$1;
(statearr_28660_28678[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28651 === (3))){
var inst_28648 = (state_28650[(2)]);
var state_28650__$1 = state_28650;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28650__$1,inst_28648);
} else {
if((state_val_28651 === (2))){
var state_28650__$1 = state_28650;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28650__$1,(4),ch);
} else {
if((state_val_28651 === (9))){
var inst_28637 = (state_28650[(9)]);
var inst_28630 = inst_28637;
var state_28650__$1 = (function (){var statearr_28661 = state_28650;
(statearr_28661[(7)] = inst_28630);

return statearr_28661;
})();
var statearr_28662_28679 = state_28650__$1;
(statearr_28662_28679[(2)] = null);

(statearr_28662_28679[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28651 === (5))){
var inst_28630 = (state_28650[(7)]);
var state_28650__$1 = state_28650;
var statearr_28663_28680 = state_28650__$1;
(statearr_28663_28680[(2)] = inst_28630);

(statearr_28663_28680[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28651 === (10))){
var inst_28644 = (state_28650[(2)]);
var state_28650__$1 = state_28650;
var statearr_28664_28681 = state_28650__$1;
(statearr_28664_28681[(2)] = inst_28644);

(statearr_28664_28681[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28651 === (8))){
var inst_28637 = (state_28650[(9)]);
var inst_28640 = cljs.core.deref.call(null,inst_28637);
var state_28650__$1 = state_28650;
var statearr_28665_28682 = state_28650__$1;
(statearr_28665_28682[(2)] = inst_28640);

(statearr_28665_28682[(1)] = (10));


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
});})(c__27884__auto__))
;
return ((function (switch__27772__auto__,c__27884__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__27773__auto__ = null;
var cljs$core$async$reduce_$_state_machine__27773__auto____0 = (function (){
var statearr_28669 = [null,null,null,null,null,null,null,null,null,null];
(statearr_28669[(0)] = cljs$core$async$reduce_$_state_machine__27773__auto__);

(statearr_28669[(1)] = (1));

return statearr_28669;
});
var cljs$core$async$reduce_$_state_machine__27773__auto____1 = (function (state_28650){
while(true){
var ret_value__27774__auto__ = (function (){try{while(true){
var result__27775__auto__ = switch__27772__auto__.call(null,state_28650);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27775__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27775__auto__;
}
break;
}
}catch (e28670){if((e28670 instanceof Object)){
var ex__27776__auto__ = e28670;
var statearr_28671_28683 = state_28650;
(statearr_28671_28683[(5)] = ex__27776__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28650);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28670;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27774__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28684 = state_28650;
state_28650 = G__28684;
continue;
} else {
return ret_value__27774__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__27773__auto__ = function(state_28650){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__27773__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__27773__auto____1.call(this,state_28650);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__27773__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__27773__auto____0;
cljs$core$async$reduce_$_state_machine__27773__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__27773__auto____1;
return cljs$core$async$reduce_$_state_machine__27773__auto__;
})()
;})(switch__27772__auto__,c__27884__auto__))
})();
var state__27886__auto__ = (function (){var statearr_28672 = f__27885__auto__.call(null);
(statearr_28672[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27884__auto__);

return statearr_28672;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27886__auto__);
});})(c__27884__auto__))
);

return c__27884__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args28685 = [];
var len__25836__auto___28737 = arguments.length;
var i__25837__auto___28738 = (0);
while(true){
if((i__25837__auto___28738 < len__25836__auto___28737)){
args28685.push((arguments[i__25837__auto___28738]));

var G__28739 = (i__25837__auto___28738 + (1));
i__25837__auto___28738 = G__28739;
continue;
} else {
}
break;
}

var G__28687 = args28685.length;
switch (G__28687) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28685.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__27884__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27884__auto__){
return (function (){
var f__27885__auto__ = (function (){var switch__27772__auto__ = ((function (c__27884__auto__){
return (function (state_28712){
var state_val_28713 = (state_28712[(1)]);
if((state_val_28713 === (7))){
var inst_28694 = (state_28712[(2)]);
var state_28712__$1 = state_28712;
var statearr_28714_28741 = state_28712__$1;
(statearr_28714_28741[(2)] = inst_28694);

(statearr_28714_28741[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28713 === (1))){
var inst_28688 = cljs.core.seq.call(null,coll);
var inst_28689 = inst_28688;
var state_28712__$1 = (function (){var statearr_28715 = state_28712;
(statearr_28715[(7)] = inst_28689);

return statearr_28715;
})();
var statearr_28716_28742 = state_28712__$1;
(statearr_28716_28742[(2)] = null);

(statearr_28716_28742[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28713 === (4))){
var inst_28689 = (state_28712[(7)]);
var inst_28692 = cljs.core.first.call(null,inst_28689);
var state_28712__$1 = state_28712;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28712__$1,(7),ch,inst_28692);
} else {
if((state_val_28713 === (13))){
var inst_28706 = (state_28712[(2)]);
var state_28712__$1 = state_28712;
var statearr_28717_28743 = state_28712__$1;
(statearr_28717_28743[(2)] = inst_28706);

(statearr_28717_28743[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28713 === (6))){
var inst_28697 = (state_28712[(2)]);
var state_28712__$1 = state_28712;
if(cljs.core.truth_(inst_28697)){
var statearr_28718_28744 = state_28712__$1;
(statearr_28718_28744[(1)] = (8));

} else {
var statearr_28719_28745 = state_28712__$1;
(statearr_28719_28745[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28713 === (3))){
var inst_28710 = (state_28712[(2)]);
var state_28712__$1 = state_28712;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28712__$1,inst_28710);
} else {
if((state_val_28713 === (12))){
var state_28712__$1 = state_28712;
var statearr_28720_28746 = state_28712__$1;
(statearr_28720_28746[(2)] = null);

(statearr_28720_28746[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28713 === (2))){
var inst_28689 = (state_28712[(7)]);
var state_28712__$1 = state_28712;
if(cljs.core.truth_(inst_28689)){
var statearr_28721_28747 = state_28712__$1;
(statearr_28721_28747[(1)] = (4));

} else {
var statearr_28722_28748 = state_28712__$1;
(statearr_28722_28748[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28713 === (11))){
var inst_28703 = cljs.core.async.close_BANG_.call(null,ch);
var state_28712__$1 = state_28712;
var statearr_28723_28749 = state_28712__$1;
(statearr_28723_28749[(2)] = inst_28703);

(statearr_28723_28749[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28713 === (9))){
var state_28712__$1 = state_28712;
if(cljs.core.truth_(close_QMARK_)){
var statearr_28724_28750 = state_28712__$1;
(statearr_28724_28750[(1)] = (11));

} else {
var statearr_28725_28751 = state_28712__$1;
(statearr_28725_28751[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28713 === (5))){
var inst_28689 = (state_28712[(7)]);
var state_28712__$1 = state_28712;
var statearr_28726_28752 = state_28712__$1;
(statearr_28726_28752[(2)] = inst_28689);

(statearr_28726_28752[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28713 === (10))){
var inst_28708 = (state_28712[(2)]);
var state_28712__$1 = state_28712;
var statearr_28727_28753 = state_28712__$1;
(statearr_28727_28753[(2)] = inst_28708);

(statearr_28727_28753[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28713 === (8))){
var inst_28689 = (state_28712[(7)]);
var inst_28699 = cljs.core.next.call(null,inst_28689);
var inst_28689__$1 = inst_28699;
var state_28712__$1 = (function (){var statearr_28728 = state_28712;
(statearr_28728[(7)] = inst_28689__$1);

return statearr_28728;
})();
var statearr_28729_28754 = state_28712__$1;
(statearr_28729_28754[(2)] = null);

(statearr_28729_28754[(1)] = (2));


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
});})(c__27884__auto__))
;
return ((function (switch__27772__auto__,c__27884__auto__){
return (function() {
var cljs$core$async$state_machine__27773__auto__ = null;
var cljs$core$async$state_machine__27773__auto____0 = (function (){
var statearr_28733 = [null,null,null,null,null,null,null,null];
(statearr_28733[(0)] = cljs$core$async$state_machine__27773__auto__);

(statearr_28733[(1)] = (1));

return statearr_28733;
});
var cljs$core$async$state_machine__27773__auto____1 = (function (state_28712){
while(true){
var ret_value__27774__auto__ = (function (){try{while(true){
var result__27775__auto__ = switch__27772__auto__.call(null,state_28712);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27775__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27775__auto__;
}
break;
}
}catch (e28734){if((e28734 instanceof Object)){
var ex__27776__auto__ = e28734;
var statearr_28735_28755 = state_28712;
(statearr_28735_28755[(5)] = ex__27776__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28712);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28734;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27774__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28756 = state_28712;
state_28712 = G__28756;
continue;
} else {
return ret_value__27774__auto__;
}
break;
}
});
cljs$core$async$state_machine__27773__auto__ = function(state_28712){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27773__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27773__auto____1.call(this,state_28712);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27773__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27773__auto____0;
cljs$core$async$state_machine__27773__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27773__auto____1;
return cljs$core$async$state_machine__27773__auto__;
})()
;})(switch__27772__auto__,c__27884__auto__))
})();
var state__27886__auto__ = (function (){var statearr_28736 = f__27885__auto__.call(null);
(statearr_28736[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27884__auto__);

return statearr_28736;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27886__auto__);
});})(c__27884__auto__))
);

return c__27884__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__25424__auto__ = (((_ == null))?null:_);
var m__25425__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__25424__auto__)]);
if(!((m__25425__auto__ == null))){
return m__25425__auto__.call(null,_);
} else {
var m__25425__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__25425__auto____$1 == null))){
return m__25425__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__25424__auto__ = (((m == null))?null:m);
var m__25425__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__25424__auto__)]);
if(!((m__25425__auto__ == null))){
return m__25425__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__25425__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__25425__auto____$1 == null))){
return m__25425__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__25424__auto__ = (((m == null))?null:m);
var m__25425__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__25424__auto__)]);
if(!((m__25425__auto__ == null))){
return m__25425__auto__.call(null,m,ch);
} else {
var m__25425__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__25425__auto____$1 == null))){
return m__25425__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__25424__auto__ = (((m == null))?null:m);
var m__25425__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__25424__auto__)]);
if(!((m__25425__auto__ == null))){
return m__25425__auto__.call(null,m);
} else {
var m__25425__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__25425__auto____$1 == null))){
return m__25425__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async28982 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28982 = (function (mult,ch,cs,meta28983){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta28983 = meta28983;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28982.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_28984,meta28983__$1){
var self__ = this;
var _28984__$1 = this;
return (new cljs.core.async.t_cljs$core$async28982(self__.mult,self__.ch,self__.cs,meta28983__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async28982.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_28984){
var self__ = this;
var _28984__$1 = this;
return self__.meta28983;
});})(cs))
;

cljs.core.async.t_cljs$core$async28982.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async28982.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async28982.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async28982.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async28982.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async28982.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async28982.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta28983","meta28983",-281997517,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async28982.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28982.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28982";

cljs.core.async.t_cljs$core$async28982.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__25367__auto__,writer__25368__auto__,opt__25369__auto__){
return cljs.core._write.call(null,writer__25368__auto__,"cljs.core.async/t_cljs$core$async28982");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async28982 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async28982(mult__$1,ch__$1,cs__$1,meta28983){
return (new cljs.core.async.t_cljs$core$async28982(mult__$1,ch__$1,cs__$1,meta28983));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async28982(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__27884__auto___29207 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27884__auto___29207,cs,m,dchan,dctr,done){
return (function (){
var f__27885__auto__ = (function (){var switch__27772__auto__ = ((function (c__27884__auto___29207,cs,m,dchan,dctr,done){
return (function (state_29119){
var state_val_29120 = (state_29119[(1)]);
if((state_val_29120 === (7))){
var inst_29115 = (state_29119[(2)]);
var state_29119__$1 = state_29119;
var statearr_29121_29208 = state_29119__$1;
(statearr_29121_29208[(2)] = inst_29115);

(statearr_29121_29208[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29120 === (20))){
var inst_29018 = (state_29119[(7)]);
var inst_29030 = cljs.core.first.call(null,inst_29018);
var inst_29031 = cljs.core.nth.call(null,inst_29030,(0),null);
var inst_29032 = cljs.core.nth.call(null,inst_29030,(1),null);
var state_29119__$1 = (function (){var statearr_29122 = state_29119;
(statearr_29122[(8)] = inst_29031);

return statearr_29122;
})();
if(cljs.core.truth_(inst_29032)){
var statearr_29123_29209 = state_29119__$1;
(statearr_29123_29209[(1)] = (22));

} else {
var statearr_29124_29210 = state_29119__$1;
(statearr_29124_29210[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29120 === (27))){
var inst_29067 = (state_29119[(9)]);
var inst_29062 = (state_29119[(10)]);
var inst_29060 = (state_29119[(11)]);
var inst_28987 = (state_29119[(12)]);
var inst_29067__$1 = cljs.core._nth.call(null,inst_29060,inst_29062);
var inst_29068 = cljs.core.async.put_BANG_.call(null,inst_29067__$1,inst_28987,done);
var state_29119__$1 = (function (){var statearr_29125 = state_29119;
(statearr_29125[(9)] = inst_29067__$1);

return statearr_29125;
})();
if(cljs.core.truth_(inst_29068)){
var statearr_29126_29211 = state_29119__$1;
(statearr_29126_29211[(1)] = (30));

} else {
var statearr_29127_29212 = state_29119__$1;
(statearr_29127_29212[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29120 === (1))){
var state_29119__$1 = state_29119;
var statearr_29128_29213 = state_29119__$1;
(statearr_29128_29213[(2)] = null);

(statearr_29128_29213[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29120 === (24))){
var inst_29018 = (state_29119[(7)]);
var inst_29037 = (state_29119[(2)]);
var inst_29038 = cljs.core.next.call(null,inst_29018);
var inst_28996 = inst_29038;
var inst_28997 = null;
var inst_28998 = (0);
var inst_28999 = (0);
var state_29119__$1 = (function (){var statearr_29129 = state_29119;
(statearr_29129[(13)] = inst_28996);

(statearr_29129[(14)] = inst_29037);

(statearr_29129[(15)] = inst_28997);

(statearr_29129[(16)] = inst_28998);

(statearr_29129[(17)] = inst_28999);

return statearr_29129;
})();
var statearr_29130_29214 = state_29119__$1;
(statearr_29130_29214[(2)] = null);

(statearr_29130_29214[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29120 === (39))){
var state_29119__$1 = state_29119;
var statearr_29134_29215 = state_29119__$1;
(statearr_29134_29215[(2)] = null);

(statearr_29134_29215[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29120 === (4))){
var inst_28987 = (state_29119[(12)]);
var inst_28987__$1 = (state_29119[(2)]);
var inst_28988 = (inst_28987__$1 == null);
var state_29119__$1 = (function (){var statearr_29135 = state_29119;
(statearr_29135[(12)] = inst_28987__$1);

return statearr_29135;
})();
if(cljs.core.truth_(inst_28988)){
var statearr_29136_29216 = state_29119__$1;
(statearr_29136_29216[(1)] = (5));

} else {
var statearr_29137_29217 = state_29119__$1;
(statearr_29137_29217[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29120 === (15))){
var inst_28996 = (state_29119[(13)]);
var inst_28997 = (state_29119[(15)]);
var inst_28998 = (state_29119[(16)]);
var inst_28999 = (state_29119[(17)]);
var inst_29014 = (state_29119[(2)]);
var inst_29015 = (inst_28999 + (1));
var tmp29131 = inst_28996;
var tmp29132 = inst_28997;
var tmp29133 = inst_28998;
var inst_28996__$1 = tmp29131;
var inst_28997__$1 = tmp29132;
var inst_28998__$1 = tmp29133;
var inst_28999__$1 = inst_29015;
var state_29119__$1 = (function (){var statearr_29138 = state_29119;
(statearr_29138[(13)] = inst_28996__$1);

(statearr_29138[(18)] = inst_29014);

(statearr_29138[(15)] = inst_28997__$1);

(statearr_29138[(16)] = inst_28998__$1);

(statearr_29138[(17)] = inst_28999__$1);

return statearr_29138;
})();
var statearr_29139_29218 = state_29119__$1;
(statearr_29139_29218[(2)] = null);

(statearr_29139_29218[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29120 === (21))){
var inst_29041 = (state_29119[(2)]);
var state_29119__$1 = state_29119;
var statearr_29143_29219 = state_29119__$1;
(statearr_29143_29219[(2)] = inst_29041);

(statearr_29143_29219[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29120 === (31))){
var inst_29067 = (state_29119[(9)]);
var inst_29071 = done.call(null,null);
var inst_29072 = cljs.core.async.untap_STAR_.call(null,m,inst_29067);
var state_29119__$1 = (function (){var statearr_29144 = state_29119;
(statearr_29144[(19)] = inst_29071);

return statearr_29144;
})();
var statearr_29145_29220 = state_29119__$1;
(statearr_29145_29220[(2)] = inst_29072);

(statearr_29145_29220[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29120 === (32))){
var inst_29062 = (state_29119[(10)]);
var inst_29060 = (state_29119[(11)]);
var inst_29061 = (state_29119[(20)]);
var inst_29059 = (state_29119[(21)]);
var inst_29074 = (state_29119[(2)]);
var inst_29075 = (inst_29062 + (1));
var tmp29140 = inst_29060;
var tmp29141 = inst_29061;
var tmp29142 = inst_29059;
var inst_29059__$1 = tmp29142;
var inst_29060__$1 = tmp29140;
var inst_29061__$1 = tmp29141;
var inst_29062__$1 = inst_29075;
var state_29119__$1 = (function (){var statearr_29146 = state_29119;
(statearr_29146[(10)] = inst_29062__$1);

(statearr_29146[(22)] = inst_29074);

(statearr_29146[(11)] = inst_29060__$1);

(statearr_29146[(20)] = inst_29061__$1);

(statearr_29146[(21)] = inst_29059__$1);

return statearr_29146;
})();
var statearr_29147_29221 = state_29119__$1;
(statearr_29147_29221[(2)] = null);

(statearr_29147_29221[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29120 === (40))){
var inst_29087 = (state_29119[(23)]);
var inst_29091 = done.call(null,null);
var inst_29092 = cljs.core.async.untap_STAR_.call(null,m,inst_29087);
var state_29119__$1 = (function (){var statearr_29148 = state_29119;
(statearr_29148[(24)] = inst_29091);

return statearr_29148;
})();
var statearr_29149_29222 = state_29119__$1;
(statearr_29149_29222[(2)] = inst_29092);

(statearr_29149_29222[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29120 === (33))){
var inst_29078 = (state_29119[(25)]);
var inst_29080 = cljs.core.chunked_seq_QMARK_.call(null,inst_29078);
var state_29119__$1 = state_29119;
if(inst_29080){
var statearr_29150_29223 = state_29119__$1;
(statearr_29150_29223[(1)] = (36));

} else {
var statearr_29151_29224 = state_29119__$1;
(statearr_29151_29224[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29120 === (13))){
var inst_29008 = (state_29119[(26)]);
var inst_29011 = cljs.core.async.close_BANG_.call(null,inst_29008);
var state_29119__$1 = state_29119;
var statearr_29152_29225 = state_29119__$1;
(statearr_29152_29225[(2)] = inst_29011);

(statearr_29152_29225[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29120 === (22))){
var inst_29031 = (state_29119[(8)]);
var inst_29034 = cljs.core.async.close_BANG_.call(null,inst_29031);
var state_29119__$1 = state_29119;
var statearr_29153_29226 = state_29119__$1;
(statearr_29153_29226[(2)] = inst_29034);

(statearr_29153_29226[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29120 === (36))){
var inst_29078 = (state_29119[(25)]);
var inst_29082 = cljs.core.chunk_first.call(null,inst_29078);
var inst_29083 = cljs.core.chunk_rest.call(null,inst_29078);
var inst_29084 = cljs.core.count.call(null,inst_29082);
var inst_29059 = inst_29083;
var inst_29060 = inst_29082;
var inst_29061 = inst_29084;
var inst_29062 = (0);
var state_29119__$1 = (function (){var statearr_29154 = state_29119;
(statearr_29154[(10)] = inst_29062);

(statearr_29154[(11)] = inst_29060);

(statearr_29154[(20)] = inst_29061);

(statearr_29154[(21)] = inst_29059);

return statearr_29154;
})();
var statearr_29155_29227 = state_29119__$1;
(statearr_29155_29227[(2)] = null);

(statearr_29155_29227[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29120 === (41))){
var inst_29078 = (state_29119[(25)]);
var inst_29094 = (state_29119[(2)]);
var inst_29095 = cljs.core.next.call(null,inst_29078);
var inst_29059 = inst_29095;
var inst_29060 = null;
var inst_29061 = (0);
var inst_29062 = (0);
var state_29119__$1 = (function (){var statearr_29156 = state_29119;
(statearr_29156[(10)] = inst_29062);

(statearr_29156[(27)] = inst_29094);

(statearr_29156[(11)] = inst_29060);

(statearr_29156[(20)] = inst_29061);

(statearr_29156[(21)] = inst_29059);

return statearr_29156;
})();
var statearr_29157_29228 = state_29119__$1;
(statearr_29157_29228[(2)] = null);

(statearr_29157_29228[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29120 === (43))){
var state_29119__$1 = state_29119;
var statearr_29158_29229 = state_29119__$1;
(statearr_29158_29229[(2)] = null);

(statearr_29158_29229[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29120 === (29))){
var inst_29103 = (state_29119[(2)]);
var state_29119__$1 = state_29119;
var statearr_29159_29230 = state_29119__$1;
(statearr_29159_29230[(2)] = inst_29103);

(statearr_29159_29230[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29120 === (44))){
var inst_29112 = (state_29119[(2)]);
var state_29119__$1 = (function (){var statearr_29160 = state_29119;
(statearr_29160[(28)] = inst_29112);

return statearr_29160;
})();
var statearr_29161_29231 = state_29119__$1;
(statearr_29161_29231[(2)] = null);

(statearr_29161_29231[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29120 === (6))){
var inst_29051 = (state_29119[(29)]);
var inst_29050 = cljs.core.deref.call(null,cs);
var inst_29051__$1 = cljs.core.keys.call(null,inst_29050);
var inst_29052 = cljs.core.count.call(null,inst_29051__$1);
var inst_29053 = cljs.core.reset_BANG_.call(null,dctr,inst_29052);
var inst_29058 = cljs.core.seq.call(null,inst_29051__$1);
var inst_29059 = inst_29058;
var inst_29060 = null;
var inst_29061 = (0);
var inst_29062 = (0);
var state_29119__$1 = (function (){var statearr_29162 = state_29119;
(statearr_29162[(10)] = inst_29062);

(statearr_29162[(11)] = inst_29060);

(statearr_29162[(29)] = inst_29051__$1);

(statearr_29162[(20)] = inst_29061);

(statearr_29162[(21)] = inst_29059);

(statearr_29162[(30)] = inst_29053);

return statearr_29162;
})();
var statearr_29163_29232 = state_29119__$1;
(statearr_29163_29232[(2)] = null);

(statearr_29163_29232[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29120 === (28))){
var inst_29078 = (state_29119[(25)]);
var inst_29059 = (state_29119[(21)]);
var inst_29078__$1 = cljs.core.seq.call(null,inst_29059);
var state_29119__$1 = (function (){var statearr_29164 = state_29119;
(statearr_29164[(25)] = inst_29078__$1);

return statearr_29164;
})();
if(inst_29078__$1){
var statearr_29165_29233 = state_29119__$1;
(statearr_29165_29233[(1)] = (33));

} else {
var statearr_29166_29234 = state_29119__$1;
(statearr_29166_29234[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29120 === (25))){
var inst_29062 = (state_29119[(10)]);
var inst_29061 = (state_29119[(20)]);
var inst_29064 = (inst_29062 < inst_29061);
var inst_29065 = inst_29064;
var state_29119__$1 = state_29119;
if(cljs.core.truth_(inst_29065)){
var statearr_29167_29235 = state_29119__$1;
(statearr_29167_29235[(1)] = (27));

} else {
var statearr_29168_29236 = state_29119__$1;
(statearr_29168_29236[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29120 === (34))){
var state_29119__$1 = state_29119;
var statearr_29169_29237 = state_29119__$1;
(statearr_29169_29237[(2)] = null);

(statearr_29169_29237[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29120 === (17))){
var state_29119__$1 = state_29119;
var statearr_29170_29238 = state_29119__$1;
(statearr_29170_29238[(2)] = null);

(statearr_29170_29238[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29120 === (3))){
var inst_29117 = (state_29119[(2)]);
var state_29119__$1 = state_29119;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29119__$1,inst_29117);
} else {
if((state_val_29120 === (12))){
var inst_29046 = (state_29119[(2)]);
var state_29119__$1 = state_29119;
var statearr_29171_29239 = state_29119__$1;
(statearr_29171_29239[(2)] = inst_29046);

(statearr_29171_29239[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29120 === (2))){
var state_29119__$1 = state_29119;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29119__$1,(4),ch);
} else {
if((state_val_29120 === (23))){
var state_29119__$1 = state_29119;
var statearr_29172_29240 = state_29119__$1;
(statearr_29172_29240[(2)] = null);

(statearr_29172_29240[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29120 === (35))){
var inst_29101 = (state_29119[(2)]);
var state_29119__$1 = state_29119;
var statearr_29173_29241 = state_29119__$1;
(statearr_29173_29241[(2)] = inst_29101);

(statearr_29173_29241[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29120 === (19))){
var inst_29018 = (state_29119[(7)]);
var inst_29022 = cljs.core.chunk_first.call(null,inst_29018);
var inst_29023 = cljs.core.chunk_rest.call(null,inst_29018);
var inst_29024 = cljs.core.count.call(null,inst_29022);
var inst_28996 = inst_29023;
var inst_28997 = inst_29022;
var inst_28998 = inst_29024;
var inst_28999 = (0);
var state_29119__$1 = (function (){var statearr_29174 = state_29119;
(statearr_29174[(13)] = inst_28996);

(statearr_29174[(15)] = inst_28997);

(statearr_29174[(16)] = inst_28998);

(statearr_29174[(17)] = inst_28999);

return statearr_29174;
})();
var statearr_29175_29242 = state_29119__$1;
(statearr_29175_29242[(2)] = null);

(statearr_29175_29242[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29120 === (11))){
var inst_28996 = (state_29119[(13)]);
var inst_29018 = (state_29119[(7)]);
var inst_29018__$1 = cljs.core.seq.call(null,inst_28996);
var state_29119__$1 = (function (){var statearr_29176 = state_29119;
(statearr_29176[(7)] = inst_29018__$1);

return statearr_29176;
})();
if(inst_29018__$1){
var statearr_29177_29243 = state_29119__$1;
(statearr_29177_29243[(1)] = (16));

} else {
var statearr_29178_29244 = state_29119__$1;
(statearr_29178_29244[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29120 === (9))){
var inst_29048 = (state_29119[(2)]);
var state_29119__$1 = state_29119;
var statearr_29179_29245 = state_29119__$1;
(statearr_29179_29245[(2)] = inst_29048);

(statearr_29179_29245[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29120 === (5))){
var inst_28994 = cljs.core.deref.call(null,cs);
var inst_28995 = cljs.core.seq.call(null,inst_28994);
var inst_28996 = inst_28995;
var inst_28997 = null;
var inst_28998 = (0);
var inst_28999 = (0);
var state_29119__$1 = (function (){var statearr_29180 = state_29119;
(statearr_29180[(13)] = inst_28996);

(statearr_29180[(15)] = inst_28997);

(statearr_29180[(16)] = inst_28998);

(statearr_29180[(17)] = inst_28999);

return statearr_29180;
})();
var statearr_29181_29246 = state_29119__$1;
(statearr_29181_29246[(2)] = null);

(statearr_29181_29246[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29120 === (14))){
var state_29119__$1 = state_29119;
var statearr_29182_29247 = state_29119__$1;
(statearr_29182_29247[(2)] = null);

(statearr_29182_29247[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29120 === (45))){
var inst_29109 = (state_29119[(2)]);
var state_29119__$1 = state_29119;
var statearr_29183_29248 = state_29119__$1;
(statearr_29183_29248[(2)] = inst_29109);

(statearr_29183_29248[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29120 === (26))){
var inst_29051 = (state_29119[(29)]);
var inst_29105 = (state_29119[(2)]);
var inst_29106 = cljs.core.seq.call(null,inst_29051);
var state_29119__$1 = (function (){var statearr_29184 = state_29119;
(statearr_29184[(31)] = inst_29105);

return statearr_29184;
})();
if(inst_29106){
var statearr_29185_29249 = state_29119__$1;
(statearr_29185_29249[(1)] = (42));

} else {
var statearr_29186_29250 = state_29119__$1;
(statearr_29186_29250[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29120 === (16))){
var inst_29018 = (state_29119[(7)]);
var inst_29020 = cljs.core.chunked_seq_QMARK_.call(null,inst_29018);
var state_29119__$1 = state_29119;
if(inst_29020){
var statearr_29187_29251 = state_29119__$1;
(statearr_29187_29251[(1)] = (19));

} else {
var statearr_29188_29252 = state_29119__$1;
(statearr_29188_29252[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29120 === (38))){
var inst_29098 = (state_29119[(2)]);
var state_29119__$1 = state_29119;
var statearr_29189_29253 = state_29119__$1;
(statearr_29189_29253[(2)] = inst_29098);

(statearr_29189_29253[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29120 === (30))){
var state_29119__$1 = state_29119;
var statearr_29190_29254 = state_29119__$1;
(statearr_29190_29254[(2)] = null);

(statearr_29190_29254[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29120 === (10))){
var inst_28997 = (state_29119[(15)]);
var inst_28999 = (state_29119[(17)]);
var inst_29007 = cljs.core._nth.call(null,inst_28997,inst_28999);
var inst_29008 = cljs.core.nth.call(null,inst_29007,(0),null);
var inst_29009 = cljs.core.nth.call(null,inst_29007,(1),null);
var state_29119__$1 = (function (){var statearr_29191 = state_29119;
(statearr_29191[(26)] = inst_29008);

return statearr_29191;
})();
if(cljs.core.truth_(inst_29009)){
var statearr_29192_29255 = state_29119__$1;
(statearr_29192_29255[(1)] = (13));

} else {
var statearr_29193_29256 = state_29119__$1;
(statearr_29193_29256[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29120 === (18))){
var inst_29044 = (state_29119[(2)]);
var state_29119__$1 = state_29119;
var statearr_29194_29257 = state_29119__$1;
(statearr_29194_29257[(2)] = inst_29044);

(statearr_29194_29257[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29120 === (42))){
var state_29119__$1 = state_29119;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29119__$1,(45),dchan);
} else {
if((state_val_29120 === (37))){
var inst_29087 = (state_29119[(23)]);
var inst_29078 = (state_29119[(25)]);
var inst_28987 = (state_29119[(12)]);
var inst_29087__$1 = cljs.core.first.call(null,inst_29078);
var inst_29088 = cljs.core.async.put_BANG_.call(null,inst_29087__$1,inst_28987,done);
var state_29119__$1 = (function (){var statearr_29195 = state_29119;
(statearr_29195[(23)] = inst_29087__$1);

return statearr_29195;
})();
if(cljs.core.truth_(inst_29088)){
var statearr_29196_29258 = state_29119__$1;
(statearr_29196_29258[(1)] = (39));

} else {
var statearr_29197_29259 = state_29119__$1;
(statearr_29197_29259[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29120 === (8))){
var inst_28998 = (state_29119[(16)]);
var inst_28999 = (state_29119[(17)]);
var inst_29001 = (inst_28999 < inst_28998);
var inst_29002 = inst_29001;
var state_29119__$1 = state_29119;
if(cljs.core.truth_(inst_29002)){
var statearr_29198_29260 = state_29119__$1;
(statearr_29198_29260[(1)] = (10));

} else {
var statearr_29199_29261 = state_29119__$1;
(statearr_29199_29261[(1)] = (11));

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
});})(c__27884__auto___29207,cs,m,dchan,dctr,done))
;
return ((function (switch__27772__auto__,c__27884__auto___29207,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__27773__auto__ = null;
var cljs$core$async$mult_$_state_machine__27773__auto____0 = (function (){
var statearr_29203 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29203[(0)] = cljs$core$async$mult_$_state_machine__27773__auto__);

(statearr_29203[(1)] = (1));

return statearr_29203;
});
var cljs$core$async$mult_$_state_machine__27773__auto____1 = (function (state_29119){
while(true){
var ret_value__27774__auto__ = (function (){try{while(true){
var result__27775__auto__ = switch__27772__auto__.call(null,state_29119);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27775__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27775__auto__;
}
break;
}
}catch (e29204){if((e29204 instanceof Object)){
var ex__27776__auto__ = e29204;
var statearr_29205_29262 = state_29119;
(statearr_29205_29262[(5)] = ex__27776__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29119);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29204;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27774__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29263 = state_29119;
state_29119 = G__29263;
continue;
} else {
return ret_value__27774__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__27773__auto__ = function(state_29119){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__27773__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__27773__auto____1.call(this,state_29119);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__27773__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__27773__auto____0;
cljs$core$async$mult_$_state_machine__27773__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__27773__auto____1;
return cljs$core$async$mult_$_state_machine__27773__auto__;
})()
;})(switch__27772__auto__,c__27884__auto___29207,cs,m,dchan,dctr,done))
})();
var state__27886__auto__ = (function (){var statearr_29206 = f__27885__auto__.call(null);
(statearr_29206[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27884__auto___29207);

return statearr_29206;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27886__auto__);
});})(c__27884__auto___29207,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args29264 = [];
var len__25836__auto___29267 = arguments.length;
var i__25837__auto___29268 = (0);
while(true){
if((i__25837__auto___29268 < len__25836__auto___29267)){
args29264.push((arguments[i__25837__auto___29268]));

var G__29269 = (i__25837__auto___29268 + (1));
i__25837__auto___29268 = G__29269;
continue;
} else {
}
break;
}

var G__29266 = args29264.length;
switch (G__29266) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29264.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__25424__auto__ = (((m == null))?null:m);
var m__25425__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__25424__auto__)]);
if(!((m__25425__auto__ == null))){
return m__25425__auto__.call(null,m,ch);
} else {
var m__25425__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__25425__auto____$1 == null))){
return m__25425__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__25424__auto__ = (((m == null))?null:m);
var m__25425__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__25424__auto__)]);
if(!((m__25425__auto__ == null))){
return m__25425__auto__.call(null,m,ch);
} else {
var m__25425__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__25425__auto____$1 == null))){
return m__25425__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__25424__auto__ = (((m == null))?null:m);
var m__25425__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__25424__auto__)]);
if(!((m__25425__auto__ == null))){
return m__25425__auto__.call(null,m);
} else {
var m__25425__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__25425__auto____$1 == null))){
return m__25425__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__25424__auto__ = (((m == null))?null:m);
var m__25425__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__25424__auto__)]);
if(!((m__25425__auto__ == null))){
return m__25425__auto__.call(null,m,state_map);
} else {
var m__25425__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__25425__auto____$1 == null))){
return m__25425__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__25424__auto__ = (((m == null))?null:m);
var m__25425__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__25424__auto__)]);
if(!((m__25425__auto__ == null))){
return m__25425__auto__.call(null,m,mode);
} else {
var m__25425__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__25425__auto____$1 == null))){
return m__25425__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__25843__auto__ = [];
var len__25836__auto___29281 = arguments.length;
var i__25837__auto___29282 = (0);
while(true){
if((i__25837__auto___29282 < len__25836__auto___29281)){
args__25843__auto__.push((arguments[i__25837__auto___29282]));

var G__29283 = (i__25837__auto___29282 + (1));
i__25837__auto___29282 = G__29283;
continue;
} else {
}
break;
}

var argseq__25844__auto__ = ((((3) < args__25843__auto__.length))?(new cljs.core.IndexedSeq(args__25843__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__25844__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__29275){
var map__29276 = p__29275;
var map__29276__$1 = ((((!((map__29276 == null)))?((((map__29276.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29276.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29276):map__29276);
var opts = map__29276__$1;
var statearr_29278_29284 = state;
(statearr_29278_29284[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__29276,map__29276__$1,opts){
return (function (val){
var statearr_29279_29285 = state;
(statearr_29279_29285[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__29276,map__29276__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_29280_29286 = state;
(statearr_29280_29286[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq29271){
var G__29272 = cljs.core.first.call(null,seq29271);
var seq29271__$1 = cljs.core.next.call(null,seq29271);
var G__29273 = cljs.core.first.call(null,seq29271__$1);
var seq29271__$2 = cljs.core.next.call(null,seq29271__$1);
var G__29274 = cljs.core.first.call(null,seq29271__$2);
var seq29271__$3 = cljs.core.next.call(null,seq29271__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__29272,G__29273,G__29274,seq29271__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async29452 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29452 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta29453){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta29453 = meta29453;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29452.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_29454,meta29453__$1){
var self__ = this;
var _29454__$1 = this;
return (new cljs.core.async.t_cljs$core$async29452(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta29453__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29452.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_29454){
var self__ = this;
var _29454__$1 = this;
return self__.meta29453;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29452.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async29452.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29452.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async29452.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29452.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29452.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29452.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29452.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str("(solo-modes mode)")].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29452.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta29453","meta29453",-252395104,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29452.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29452.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29452";

cljs.core.async.t_cljs$core$async29452.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__25367__auto__,writer__25368__auto__,opt__25369__auto__){
return cljs.core._write.call(null,writer__25368__auto__,"cljs.core.async/t_cljs$core$async29452");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async29452 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async29452(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta29453){
return (new cljs.core.async.t_cljs$core$async29452(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta29453));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async29452(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__27884__auto___29617 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27884__auto___29617,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__27885__auto__ = (function (){var switch__27772__auto__ = ((function (c__27884__auto___29617,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_29554){
var state_val_29555 = (state_29554[(1)]);
if((state_val_29555 === (7))){
var inst_29470 = (state_29554[(2)]);
var state_29554__$1 = state_29554;
var statearr_29556_29618 = state_29554__$1;
(statearr_29556_29618[(2)] = inst_29470);

(statearr_29556_29618[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29555 === (20))){
var inst_29482 = (state_29554[(7)]);
var state_29554__$1 = state_29554;
var statearr_29557_29619 = state_29554__$1;
(statearr_29557_29619[(2)] = inst_29482);

(statearr_29557_29619[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29555 === (27))){
var state_29554__$1 = state_29554;
var statearr_29558_29620 = state_29554__$1;
(statearr_29558_29620[(2)] = null);

(statearr_29558_29620[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29555 === (1))){
var inst_29458 = (state_29554[(8)]);
var inst_29458__$1 = calc_state.call(null);
var inst_29460 = (inst_29458__$1 == null);
var inst_29461 = cljs.core.not.call(null,inst_29460);
var state_29554__$1 = (function (){var statearr_29559 = state_29554;
(statearr_29559[(8)] = inst_29458__$1);

return statearr_29559;
})();
if(inst_29461){
var statearr_29560_29621 = state_29554__$1;
(statearr_29560_29621[(1)] = (2));

} else {
var statearr_29561_29622 = state_29554__$1;
(statearr_29561_29622[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29555 === (24))){
var inst_29505 = (state_29554[(9)]);
var inst_29528 = (state_29554[(10)]);
var inst_29514 = (state_29554[(11)]);
var inst_29528__$1 = inst_29505.call(null,inst_29514);
var state_29554__$1 = (function (){var statearr_29562 = state_29554;
(statearr_29562[(10)] = inst_29528__$1);

return statearr_29562;
})();
if(cljs.core.truth_(inst_29528__$1)){
var statearr_29563_29623 = state_29554__$1;
(statearr_29563_29623[(1)] = (29));

} else {
var statearr_29564_29624 = state_29554__$1;
(statearr_29564_29624[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29555 === (4))){
var inst_29473 = (state_29554[(2)]);
var state_29554__$1 = state_29554;
if(cljs.core.truth_(inst_29473)){
var statearr_29565_29625 = state_29554__$1;
(statearr_29565_29625[(1)] = (8));

} else {
var statearr_29566_29626 = state_29554__$1;
(statearr_29566_29626[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29555 === (15))){
var inst_29499 = (state_29554[(2)]);
var state_29554__$1 = state_29554;
if(cljs.core.truth_(inst_29499)){
var statearr_29567_29627 = state_29554__$1;
(statearr_29567_29627[(1)] = (19));

} else {
var statearr_29568_29628 = state_29554__$1;
(statearr_29568_29628[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29555 === (21))){
var inst_29504 = (state_29554[(12)]);
var inst_29504__$1 = (state_29554[(2)]);
var inst_29505 = cljs.core.get.call(null,inst_29504__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_29506 = cljs.core.get.call(null,inst_29504__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_29507 = cljs.core.get.call(null,inst_29504__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_29554__$1 = (function (){var statearr_29569 = state_29554;
(statearr_29569[(9)] = inst_29505);

(statearr_29569[(12)] = inst_29504__$1);

(statearr_29569[(13)] = inst_29506);

return statearr_29569;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_29554__$1,(22),inst_29507);
} else {
if((state_val_29555 === (31))){
var inst_29536 = (state_29554[(2)]);
var state_29554__$1 = state_29554;
if(cljs.core.truth_(inst_29536)){
var statearr_29570_29629 = state_29554__$1;
(statearr_29570_29629[(1)] = (32));

} else {
var statearr_29571_29630 = state_29554__$1;
(statearr_29571_29630[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29555 === (32))){
var inst_29513 = (state_29554[(14)]);
var state_29554__$1 = state_29554;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29554__$1,(35),out,inst_29513);
} else {
if((state_val_29555 === (33))){
var inst_29504 = (state_29554[(12)]);
var inst_29482 = inst_29504;
var state_29554__$1 = (function (){var statearr_29572 = state_29554;
(statearr_29572[(7)] = inst_29482);

return statearr_29572;
})();
var statearr_29573_29631 = state_29554__$1;
(statearr_29573_29631[(2)] = null);

(statearr_29573_29631[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29555 === (13))){
var inst_29482 = (state_29554[(7)]);
var inst_29489 = inst_29482.cljs$lang$protocol_mask$partition0$;
var inst_29490 = (inst_29489 & (64));
var inst_29491 = inst_29482.cljs$core$ISeq$;
var inst_29492 = (inst_29490) || (inst_29491);
var state_29554__$1 = state_29554;
if(cljs.core.truth_(inst_29492)){
var statearr_29574_29632 = state_29554__$1;
(statearr_29574_29632[(1)] = (16));

} else {
var statearr_29575_29633 = state_29554__$1;
(statearr_29575_29633[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29555 === (22))){
var inst_29513 = (state_29554[(14)]);
var inst_29514 = (state_29554[(11)]);
var inst_29512 = (state_29554[(2)]);
var inst_29513__$1 = cljs.core.nth.call(null,inst_29512,(0),null);
var inst_29514__$1 = cljs.core.nth.call(null,inst_29512,(1),null);
var inst_29515 = (inst_29513__$1 == null);
var inst_29516 = cljs.core._EQ_.call(null,inst_29514__$1,change);
var inst_29517 = (inst_29515) || (inst_29516);
var state_29554__$1 = (function (){var statearr_29576 = state_29554;
(statearr_29576[(14)] = inst_29513__$1);

(statearr_29576[(11)] = inst_29514__$1);

return statearr_29576;
})();
if(cljs.core.truth_(inst_29517)){
var statearr_29577_29634 = state_29554__$1;
(statearr_29577_29634[(1)] = (23));

} else {
var statearr_29578_29635 = state_29554__$1;
(statearr_29578_29635[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29555 === (36))){
var inst_29504 = (state_29554[(12)]);
var inst_29482 = inst_29504;
var state_29554__$1 = (function (){var statearr_29579 = state_29554;
(statearr_29579[(7)] = inst_29482);

return statearr_29579;
})();
var statearr_29580_29636 = state_29554__$1;
(statearr_29580_29636[(2)] = null);

(statearr_29580_29636[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29555 === (29))){
var inst_29528 = (state_29554[(10)]);
var state_29554__$1 = state_29554;
var statearr_29581_29637 = state_29554__$1;
(statearr_29581_29637[(2)] = inst_29528);

(statearr_29581_29637[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29555 === (6))){
var state_29554__$1 = state_29554;
var statearr_29582_29638 = state_29554__$1;
(statearr_29582_29638[(2)] = false);

(statearr_29582_29638[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29555 === (28))){
var inst_29524 = (state_29554[(2)]);
var inst_29525 = calc_state.call(null);
var inst_29482 = inst_29525;
var state_29554__$1 = (function (){var statearr_29583 = state_29554;
(statearr_29583[(15)] = inst_29524);

(statearr_29583[(7)] = inst_29482);

return statearr_29583;
})();
var statearr_29584_29639 = state_29554__$1;
(statearr_29584_29639[(2)] = null);

(statearr_29584_29639[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29555 === (25))){
var inst_29550 = (state_29554[(2)]);
var state_29554__$1 = state_29554;
var statearr_29585_29640 = state_29554__$1;
(statearr_29585_29640[(2)] = inst_29550);

(statearr_29585_29640[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29555 === (34))){
var inst_29548 = (state_29554[(2)]);
var state_29554__$1 = state_29554;
var statearr_29586_29641 = state_29554__$1;
(statearr_29586_29641[(2)] = inst_29548);

(statearr_29586_29641[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29555 === (17))){
var state_29554__$1 = state_29554;
var statearr_29587_29642 = state_29554__$1;
(statearr_29587_29642[(2)] = false);

(statearr_29587_29642[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29555 === (3))){
var state_29554__$1 = state_29554;
var statearr_29588_29643 = state_29554__$1;
(statearr_29588_29643[(2)] = false);

(statearr_29588_29643[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29555 === (12))){
var inst_29552 = (state_29554[(2)]);
var state_29554__$1 = state_29554;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29554__$1,inst_29552);
} else {
if((state_val_29555 === (2))){
var inst_29458 = (state_29554[(8)]);
var inst_29463 = inst_29458.cljs$lang$protocol_mask$partition0$;
var inst_29464 = (inst_29463 & (64));
var inst_29465 = inst_29458.cljs$core$ISeq$;
var inst_29466 = (inst_29464) || (inst_29465);
var state_29554__$1 = state_29554;
if(cljs.core.truth_(inst_29466)){
var statearr_29589_29644 = state_29554__$1;
(statearr_29589_29644[(1)] = (5));

} else {
var statearr_29590_29645 = state_29554__$1;
(statearr_29590_29645[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29555 === (23))){
var inst_29513 = (state_29554[(14)]);
var inst_29519 = (inst_29513 == null);
var state_29554__$1 = state_29554;
if(cljs.core.truth_(inst_29519)){
var statearr_29591_29646 = state_29554__$1;
(statearr_29591_29646[(1)] = (26));

} else {
var statearr_29592_29647 = state_29554__$1;
(statearr_29592_29647[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29555 === (35))){
var inst_29539 = (state_29554[(2)]);
var state_29554__$1 = state_29554;
if(cljs.core.truth_(inst_29539)){
var statearr_29593_29648 = state_29554__$1;
(statearr_29593_29648[(1)] = (36));

} else {
var statearr_29594_29649 = state_29554__$1;
(statearr_29594_29649[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29555 === (19))){
var inst_29482 = (state_29554[(7)]);
var inst_29501 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29482);
var state_29554__$1 = state_29554;
var statearr_29595_29650 = state_29554__$1;
(statearr_29595_29650[(2)] = inst_29501);

(statearr_29595_29650[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29555 === (11))){
var inst_29482 = (state_29554[(7)]);
var inst_29486 = (inst_29482 == null);
var inst_29487 = cljs.core.not.call(null,inst_29486);
var state_29554__$1 = state_29554;
if(inst_29487){
var statearr_29596_29651 = state_29554__$1;
(statearr_29596_29651[(1)] = (13));

} else {
var statearr_29597_29652 = state_29554__$1;
(statearr_29597_29652[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29555 === (9))){
var inst_29458 = (state_29554[(8)]);
var state_29554__$1 = state_29554;
var statearr_29598_29653 = state_29554__$1;
(statearr_29598_29653[(2)] = inst_29458);

(statearr_29598_29653[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29555 === (5))){
var state_29554__$1 = state_29554;
var statearr_29599_29654 = state_29554__$1;
(statearr_29599_29654[(2)] = true);

(statearr_29599_29654[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29555 === (14))){
var state_29554__$1 = state_29554;
var statearr_29600_29655 = state_29554__$1;
(statearr_29600_29655[(2)] = false);

(statearr_29600_29655[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29555 === (26))){
var inst_29514 = (state_29554[(11)]);
var inst_29521 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_29514);
var state_29554__$1 = state_29554;
var statearr_29601_29656 = state_29554__$1;
(statearr_29601_29656[(2)] = inst_29521);

(statearr_29601_29656[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29555 === (16))){
var state_29554__$1 = state_29554;
var statearr_29602_29657 = state_29554__$1;
(statearr_29602_29657[(2)] = true);

(statearr_29602_29657[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29555 === (38))){
var inst_29544 = (state_29554[(2)]);
var state_29554__$1 = state_29554;
var statearr_29603_29658 = state_29554__$1;
(statearr_29603_29658[(2)] = inst_29544);

(statearr_29603_29658[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29555 === (30))){
var inst_29505 = (state_29554[(9)]);
var inst_29506 = (state_29554[(13)]);
var inst_29514 = (state_29554[(11)]);
var inst_29531 = cljs.core.empty_QMARK_.call(null,inst_29505);
var inst_29532 = inst_29506.call(null,inst_29514);
var inst_29533 = cljs.core.not.call(null,inst_29532);
var inst_29534 = (inst_29531) && (inst_29533);
var state_29554__$1 = state_29554;
var statearr_29604_29659 = state_29554__$1;
(statearr_29604_29659[(2)] = inst_29534);

(statearr_29604_29659[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29555 === (10))){
var inst_29458 = (state_29554[(8)]);
var inst_29478 = (state_29554[(2)]);
var inst_29479 = cljs.core.get.call(null,inst_29478,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_29480 = cljs.core.get.call(null,inst_29478,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_29481 = cljs.core.get.call(null,inst_29478,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_29482 = inst_29458;
var state_29554__$1 = (function (){var statearr_29605 = state_29554;
(statearr_29605[(16)] = inst_29479);

(statearr_29605[(7)] = inst_29482);

(statearr_29605[(17)] = inst_29480);

(statearr_29605[(18)] = inst_29481);

return statearr_29605;
})();
var statearr_29606_29660 = state_29554__$1;
(statearr_29606_29660[(2)] = null);

(statearr_29606_29660[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29555 === (18))){
var inst_29496 = (state_29554[(2)]);
var state_29554__$1 = state_29554;
var statearr_29607_29661 = state_29554__$1;
(statearr_29607_29661[(2)] = inst_29496);

(statearr_29607_29661[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29555 === (37))){
var state_29554__$1 = state_29554;
var statearr_29608_29662 = state_29554__$1;
(statearr_29608_29662[(2)] = null);

(statearr_29608_29662[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29555 === (8))){
var inst_29458 = (state_29554[(8)]);
var inst_29475 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29458);
var state_29554__$1 = state_29554;
var statearr_29609_29663 = state_29554__$1;
(statearr_29609_29663[(2)] = inst_29475);

(statearr_29609_29663[(1)] = (10));


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
});})(c__27884__auto___29617,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__27772__auto__,c__27884__auto___29617,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__27773__auto__ = null;
var cljs$core$async$mix_$_state_machine__27773__auto____0 = (function (){
var statearr_29613 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29613[(0)] = cljs$core$async$mix_$_state_machine__27773__auto__);

(statearr_29613[(1)] = (1));

return statearr_29613;
});
var cljs$core$async$mix_$_state_machine__27773__auto____1 = (function (state_29554){
while(true){
var ret_value__27774__auto__ = (function (){try{while(true){
var result__27775__auto__ = switch__27772__auto__.call(null,state_29554);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27775__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27775__auto__;
}
break;
}
}catch (e29614){if((e29614 instanceof Object)){
var ex__27776__auto__ = e29614;
var statearr_29615_29664 = state_29554;
(statearr_29615_29664[(5)] = ex__27776__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29554);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29614;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27774__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29665 = state_29554;
state_29554 = G__29665;
continue;
} else {
return ret_value__27774__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__27773__auto__ = function(state_29554){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__27773__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__27773__auto____1.call(this,state_29554);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__27773__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__27773__auto____0;
cljs$core$async$mix_$_state_machine__27773__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__27773__auto____1;
return cljs$core$async$mix_$_state_machine__27773__auto__;
})()
;})(switch__27772__auto__,c__27884__auto___29617,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__27886__auto__ = (function (){var statearr_29616 = f__27885__auto__.call(null);
(statearr_29616[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27884__auto___29617);

return statearr_29616;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27886__auto__);
});})(c__27884__auto___29617,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__25424__auto__ = (((p == null))?null:p);
var m__25425__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__25424__auto__)]);
if(!((m__25425__auto__ == null))){
return m__25425__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__25425__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__25425__auto____$1 == null))){
return m__25425__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__25424__auto__ = (((p == null))?null:p);
var m__25425__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__25424__auto__)]);
if(!((m__25425__auto__ == null))){
return m__25425__auto__.call(null,p,v,ch);
} else {
var m__25425__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__25425__auto____$1 == null))){
return m__25425__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args29666 = [];
var len__25836__auto___29669 = arguments.length;
var i__25837__auto___29670 = (0);
while(true){
if((i__25837__auto___29670 < len__25836__auto___29669)){
args29666.push((arguments[i__25837__auto___29670]));

var G__29671 = (i__25837__auto___29670 + (1));
i__25837__auto___29670 = G__29671;
continue;
} else {
}
break;
}

var G__29668 = args29666.length;
switch (G__29668) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29666.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__25424__auto__ = (((p == null))?null:p);
var m__25425__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__25424__auto__)]);
if(!((m__25425__auto__ == null))){
return m__25425__auto__.call(null,p);
} else {
var m__25425__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__25425__auto____$1 == null))){
return m__25425__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__25424__auto__ = (((p == null))?null:p);
var m__25425__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__25424__auto__)]);
if(!((m__25425__auto__ == null))){
return m__25425__auto__.call(null,p,v);
} else {
var m__25425__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__25425__auto____$1 == null))){
return m__25425__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args29674 = [];
var len__25836__auto___29799 = arguments.length;
var i__25837__auto___29800 = (0);
while(true){
if((i__25837__auto___29800 < len__25836__auto___29799)){
args29674.push((arguments[i__25837__auto___29800]));

var G__29801 = (i__25837__auto___29800 + (1));
i__25837__auto___29800 = G__29801;
continue;
} else {
}
break;
}

var G__29676 = args29674.length;
switch (G__29676) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29674.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__24761__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__24761__auto__)){
return or__24761__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__24761__auto__,mults){
return (function (p1__29673_SHARP_){
if(cljs.core.truth_(p1__29673_SHARP_.call(null,topic))){
return p1__29673_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__29673_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__24761__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async29677 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29677 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta29678){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta29678 = meta29678;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29677.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_29679,meta29678__$1){
var self__ = this;
var _29679__$1 = this;
return (new cljs.core.async.t_cljs$core$async29677(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta29678__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29677.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_29679){
var self__ = this;
var _29679__$1 = this;
return self__.meta29678;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29677.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async29677.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29677.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async29677.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29677.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29677.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29677.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29677.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta29678","meta29678",-1208443138,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29677.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29677.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29677";

cljs.core.async.t_cljs$core$async29677.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__25367__auto__,writer__25368__auto__,opt__25369__auto__){
return cljs.core._write.call(null,writer__25368__auto__,"cljs.core.async/t_cljs$core$async29677");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async29677 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async29677(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta29678){
return (new cljs.core.async.t_cljs$core$async29677(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta29678));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async29677(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__27884__auto___29803 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27884__auto___29803,mults,ensure_mult,p){
return (function (){
var f__27885__auto__ = (function (){var switch__27772__auto__ = ((function (c__27884__auto___29803,mults,ensure_mult,p){
return (function (state_29751){
var state_val_29752 = (state_29751[(1)]);
if((state_val_29752 === (7))){
var inst_29747 = (state_29751[(2)]);
var state_29751__$1 = state_29751;
var statearr_29753_29804 = state_29751__$1;
(statearr_29753_29804[(2)] = inst_29747);

(statearr_29753_29804[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29752 === (20))){
var state_29751__$1 = state_29751;
var statearr_29754_29805 = state_29751__$1;
(statearr_29754_29805[(2)] = null);

(statearr_29754_29805[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29752 === (1))){
var state_29751__$1 = state_29751;
var statearr_29755_29806 = state_29751__$1;
(statearr_29755_29806[(2)] = null);

(statearr_29755_29806[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29752 === (24))){
var inst_29730 = (state_29751[(7)]);
var inst_29739 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_29730);
var state_29751__$1 = state_29751;
var statearr_29756_29807 = state_29751__$1;
(statearr_29756_29807[(2)] = inst_29739);

(statearr_29756_29807[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29752 === (4))){
var inst_29682 = (state_29751[(8)]);
var inst_29682__$1 = (state_29751[(2)]);
var inst_29683 = (inst_29682__$1 == null);
var state_29751__$1 = (function (){var statearr_29757 = state_29751;
(statearr_29757[(8)] = inst_29682__$1);

return statearr_29757;
})();
if(cljs.core.truth_(inst_29683)){
var statearr_29758_29808 = state_29751__$1;
(statearr_29758_29808[(1)] = (5));

} else {
var statearr_29759_29809 = state_29751__$1;
(statearr_29759_29809[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29752 === (15))){
var inst_29724 = (state_29751[(2)]);
var state_29751__$1 = state_29751;
var statearr_29760_29810 = state_29751__$1;
(statearr_29760_29810[(2)] = inst_29724);

(statearr_29760_29810[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29752 === (21))){
var inst_29744 = (state_29751[(2)]);
var state_29751__$1 = (function (){var statearr_29761 = state_29751;
(statearr_29761[(9)] = inst_29744);

return statearr_29761;
})();
var statearr_29762_29811 = state_29751__$1;
(statearr_29762_29811[(2)] = null);

(statearr_29762_29811[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29752 === (13))){
var inst_29706 = (state_29751[(10)]);
var inst_29708 = cljs.core.chunked_seq_QMARK_.call(null,inst_29706);
var state_29751__$1 = state_29751;
if(inst_29708){
var statearr_29763_29812 = state_29751__$1;
(statearr_29763_29812[(1)] = (16));

} else {
var statearr_29764_29813 = state_29751__$1;
(statearr_29764_29813[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29752 === (22))){
var inst_29736 = (state_29751[(2)]);
var state_29751__$1 = state_29751;
if(cljs.core.truth_(inst_29736)){
var statearr_29765_29814 = state_29751__$1;
(statearr_29765_29814[(1)] = (23));

} else {
var statearr_29766_29815 = state_29751__$1;
(statearr_29766_29815[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29752 === (6))){
var inst_29730 = (state_29751[(7)]);
var inst_29732 = (state_29751[(11)]);
var inst_29682 = (state_29751[(8)]);
var inst_29730__$1 = topic_fn.call(null,inst_29682);
var inst_29731 = cljs.core.deref.call(null,mults);
var inst_29732__$1 = cljs.core.get.call(null,inst_29731,inst_29730__$1);
var state_29751__$1 = (function (){var statearr_29767 = state_29751;
(statearr_29767[(7)] = inst_29730__$1);

(statearr_29767[(11)] = inst_29732__$1);

return statearr_29767;
})();
if(cljs.core.truth_(inst_29732__$1)){
var statearr_29768_29816 = state_29751__$1;
(statearr_29768_29816[(1)] = (19));

} else {
var statearr_29769_29817 = state_29751__$1;
(statearr_29769_29817[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29752 === (25))){
var inst_29741 = (state_29751[(2)]);
var state_29751__$1 = state_29751;
var statearr_29770_29818 = state_29751__$1;
(statearr_29770_29818[(2)] = inst_29741);

(statearr_29770_29818[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29752 === (17))){
var inst_29706 = (state_29751[(10)]);
var inst_29715 = cljs.core.first.call(null,inst_29706);
var inst_29716 = cljs.core.async.muxch_STAR_.call(null,inst_29715);
var inst_29717 = cljs.core.async.close_BANG_.call(null,inst_29716);
var inst_29718 = cljs.core.next.call(null,inst_29706);
var inst_29692 = inst_29718;
var inst_29693 = null;
var inst_29694 = (0);
var inst_29695 = (0);
var state_29751__$1 = (function (){var statearr_29771 = state_29751;
(statearr_29771[(12)] = inst_29717);

(statearr_29771[(13)] = inst_29694);

(statearr_29771[(14)] = inst_29692);

(statearr_29771[(15)] = inst_29693);

(statearr_29771[(16)] = inst_29695);

return statearr_29771;
})();
var statearr_29772_29819 = state_29751__$1;
(statearr_29772_29819[(2)] = null);

(statearr_29772_29819[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29752 === (3))){
var inst_29749 = (state_29751[(2)]);
var state_29751__$1 = state_29751;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29751__$1,inst_29749);
} else {
if((state_val_29752 === (12))){
var inst_29726 = (state_29751[(2)]);
var state_29751__$1 = state_29751;
var statearr_29773_29820 = state_29751__$1;
(statearr_29773_29820[(2)] = inst_29726);

(statearr_29773_29820[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29752 === (2))){
var state_29751__$1 = state_29751;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29751__$1,(4),ch);
} else {
if((state_val_29752 === (23))){
var state_29751__$1 = state_29751;
var statearr_29774_29821 = state_29751__$1;
(statearr_29774_29821[(2)] = null);

(statearr_29774_29821[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29752 === (19))){
var inst_29732 = (state_29751[(11)]);
var inst_29682 = (state_29751[(8)]);
var inst_29734 = cljs.core.async.muxch_STAR_.call(null,inst_29732);
var state_29751__$1 = state_29751;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29751__$1,(22),inst_29734,inst_29682);
} else {
if((state_val_29752 === (11))){
var inst_29706 = (state_29751[(10)]);
var inst_29692 = (state_29751[(14)]);
var inst_29706__$1 = cljs.core.seq.call(null,inst_29692);
var state_29751__$1 = (function (){var statearr_29775 = state_29751;
(statearr_29775[(10)] = inst_29706__$1);

return statearr_29775;
})();
if(inst_29706__$1){
var statearr_29776_29822 = state_29751__$1;
(statearr_29776_29822[(1)] = (13));

} else {
var statearr_29777_29823 = state_29751__$1;
(statearr_29777_29823[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29752 === (9))){
var inst_29728 = (state_29751[(2)]);
var state_29751__$1 = state_29751;
var statearr_29778_29824 = state_29751__$1;
(statearr_29778_29824[(2)] = inst_29728);

(statearr_29778_29824[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29752 === (5))){
var inst_29689 = cljs.core.deref.call(null,mults);
var inst_29690 = cljs.core.vals.call(null,inst_29689);
var inst_29691 = cljs.core.seq.call(null,inst_29690);
var inst_29692 = inst_29691;
var inst_29693 = null;
var inst_29694 = (0);
var inst_29695 = (0);
var state_29751__$1 = (function (){var statearr_29779 = state_29751;
(statearr_29779[(13)] = inst_29694);

(statearr_29779[(14)] = inst_29692);

(statearr_29779[(15)] = inst_29693);

(statearr_29779[(16)] = inst_29695);

return statearr_29779;
})();
var statearr_29780_29825 = state_29751__$1;
(statearr_29780_29825[(2)] = null);

(statearr_29780_29825[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29752 === (14))){
var state_29751__$1 = state_29751;
var statearr_29784_29826 = state_29751__$1;
(statearr_29784_29826[(2)] = null);

(statearr_29784_29826[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29752 === (16))){
var inst_29706 = (state_29751[(10)]);
var inst_29710 = cljs.core.chunk_first.call(null,inst_29706);
var inst_29711 = cljs.core.chunk_rest.call(null,inst_29706);
var inst_29712 = cljs.core.count.call(null,inst_29710);
var inst_29692 = inst_29711;
var inst_29693 = inst_29710;
var inst_29694 = inst_29712;
var inst_29695 = (0);
var state_29751__$1 = (function (){var statearr_29785 = state_29751;
(statearr_29785[(13)] = inst_29694);

(statearr_29785[(14)] = inst_29692);

(statearr_29785[(15)] = inst_29693);

(statearr_29785[(16)] = inst_29695);

return statearr_29785;
})();
var statearr_29786_29827 = state_29751__$1;
(statearr_29786_29827[(2)] = null);

(statearr_29786_29827[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29752 === (10))){
var inst_29694 = (state_29751[(13)]);
var inst_29692 = (state_29751[(14)]);
var inst_29693 = (state_29751[(15)]);
var inst_29695 = (state_29751[(16)]);
var inst_29700 = cljs.core._nth.call(null,inst_29693,inst_29695);
var inst_29701 = cljs.core.async.muxch_STAR_.call(null,inst_29700);
var inst_29702 = cljs.core.async.close_BANG_.call(null,inst_29701);
var inst_29703 = (inst_29695 + (1));
var tmp29781 = inst_29694;
var tmp29782 = inst_29692;
var tmp29783 = inst_29693;
var inst_29692__$1 = tmp29782;
var inst_29693__$1 = tmp29783;
var inst_29694__$1 = tmp29781;
var inst_29695__$1 = inst_29703;
var state_29751__$1 = (function (){var statearr_29787 = state_29751;
(statearr_29787[(13)] = inst_29694__$1);

(statearr_29787[(14)] = inst_29692__$1);

(statearr_29787[(17)] = inst_29702);

(statearr_29787[(15)] = inst_29693__$1);

(statearr_29787[(16)] = inst_29695__$1);

return statearr_29787;
})();
var statearr_29788_29828 = state_29751__$1;
(statearr_29788_29828[(2)] = null);

(statearr_29788_29828[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29752 === (18))){
var inst_29721 = (state_29751[(2)]);
var state_29751__$1 = state_29751;
var statearr_29789_29829 = state_29751__$1;
(statearr_29789_29829[(2)] = inst_29721);

(statearr_29789_29829[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29752 === (8))){
var inst_29694 = (state_29751[(13)]);
var inst_29695 = (state_29751[(16)]);
var inst_29697 = (inst_29695 < inst_29694);
var inst_29698 = inst_29697;
var state_29751__$1 = state_29751;
if(cljs.core.truth_(inst_29698)){
var statearr_29790_29830 = state_29751__$1;
(statearr_29790_29830[(1)] = (10));

} else {
var statearr_29791_29831 = state_29751__$1;
(statearr_29791_29831[(1)] = (11));

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
}
}
}
}
}
}
}
}
});})(c__27884__auto___29803,mults,ensure_mult,p))
;
return ((function (switch__27772__auto__,c__27884__auto___29803,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__27773__auto__ = null;
var cljs$core$async$state_machine__27773__auto____0 = (function (){
var statearr_29795 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29795[(0)] = cljs$core$async$state_machine__27773__auto__);

(statearr_29795[(1)] = (1));

return statearr_29795;
});
var cljs$core$async$state_machine__27773__auto____1 = (function (state_29751){
while(true){
var ret_value__27774__auto__ = (function (){try{while(true){
var result__27775__auto__ = switch__27772__auto__.call(null,state_29751);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27775__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27775__auto__;
}
break;
}
}catch (e29796){if((e29796 instanceof Object)){
var ex__27776__auto__ = e29796;
var statearr_29797_29832 = state_29751;
(statearr_29797_29832[(5)] = ex__27776__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29751);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29796;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27774__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29833 = state_29751;
state_29751 = G__29833;
continue;
} else {
return ret_value__27774__auto__;
}
break;
}
});
cljs$core$async$state_machine__27773__auto__ = function(state_29751){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27773__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27773__auto____1.call(this,state_29751);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27773__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27773__auto____0;
cljs$core$async$state_machine__27773__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27773__auto____1;
return cljs$core$async$state_machine__27773__auto__;
})()
;})(switch__27772__auto__,c__27884__auto___29803,mults,ensure_mult,p))
})();
var state__27886__auto__ = (function (){var statearr_29798 = f__27885__auto__.call(null);
(statearr_29798[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27884__auto___29803);

return statearr_29798;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27886__auto__);
});})(c__27884__auto___29803,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args29834 = [];
var len__25836__auto___29837 = arguments.length;
var i__25837__auto___29838 = (0);
while(true){
if((i__25837__auto___29838 < len__25836__auto___29837)){
args29834.push((arguments[i__25837__auto___29838]));

var G__29839 = (i__25837__auto___29838 + (1));
i__25837__auto___29838 = G__29839;
continue;
} else {
}
break;
}

var G__29836 = args29834.length;
switch (G__29836) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29834.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args29841 = [];
var len__25836__auto___29844 = arguments.length;
var i__25837__auto___29845 = (0);
while(true){
if((i__25837__auto___29845 < len__25836__auto___29844)){
args29841.push((arguments[i__25837__auto___29845]));

var G__29846 = (i__25837__auto___29845 + (1));
i__25837__auto___29845 = G__29846;
continue;
} else {
}
break;
}

var G__29843 = args29841.length;
switch (G__29843) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29841.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args29848 = [];
var len__25836__auto___29919 = arguments.length;
var i__25837__auto___29920 = (0);
while(true){
if((i__25837__auto___29920 < len__25836__auto___29919)){
args29848.push((arguments[i__25837__auto___29920]));

var G__29921 = (i__25837__auto___29920 + (1));
i__25837__auto___29920 = G__29921;
continue;
} else {
}
break;
}

var G__29850 = args29848.length;
switch (G__29850) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29848.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__27884__auto___29923 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27884__auto___29923,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__27885__auto__ = (function (){var switch__27772__auto__ = ((function (c__27884__auto___29923,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_29889){
var state_val_29890 = (state_29889[(1)]);
if((state_val_29890 === (7))){
var state_29889__$1 = state_29889;
var statearr_29891_29924 = state_29889__$1;
(statearr_29891_29924[(2)] = null);

(statearr_29891_29924[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29890 === (1))){
var state_29889__$1 = state_29889;
var statearr_29892_29925 = state_29889__$1;
(statearr_29892_29925[(2)] = null);

(statearr_29892_29925[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29890 === (4))){
var inst_29853 = (state_29889[(7)]);
var inst_29855 = (inst_29853 < cnt);
var state_29889__$1 = state_29889;
if(cljs.core.truth_(inst_29855)){
var statearr_29893_29926 = state_29889__$1;
(statearr_29893_29926[(1)] = (6));

} else {
var statearr_29894_29927 = state_29889__$1;
(statearr_29894_29927[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29890 === (15))){
var inst_29885 = (state_29889[(2)]);
var state_29889__$1 = state_29889;
var statearr_29895_29928 = state_29889__$1;
(statearr_29895_29928[(2)] = inst_29885);

(statearr_29895_29928[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29890 === (13))){
var inst_29878 = cljs.core.async.close_BANG_.call(null,out);
var state_29889__$1 = state_29889;
var statearr_29896_29929 = state_29889__$1;
(statearr_29896_29929[(2)] = inst_29878);

(statearr_29896_29929[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29890 === (6))){
var state_29889__$1 = state_29889;
var statearr_29897_29930 = state_29889__$1;
(statearr_29897_29930[(2)] = null);

(statearr_29897_29930[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29890 === (3))){
var inst_29887 = (state_29889[(2)]);
var state_29889__$1 = state_29889;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29889__$1,inst_29887);
} else {
if((state_val_29890 === (12))){
var inst_29875 = (state_29889[(8)]);
var inst_29875__$1 = (state_29889[(2)]);
var inst_29876 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_29875__$1);
var state_29889__$1 = (function (){var statearr_29898 = state_29889;
(statearr_29898[(8)] = inst_29875__$1);

return statearr_29898;
})();
if(cljs.core.truth_(inst_29876)){
var statearr_29899_29931 = state_29889__$1;
(statearr_29899_29931[(1)] = (13));

} else {
var statearr_29900_29932 = state_29889__$1;
(statearr_29900_29932[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29890 === (2))){
var inst_29852 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_29853 = (0);
var state_29889__$1 = (function (){var statearr_29901 = state_29889;
(statearr_29901[(9)] = inst_29852);

(statearr_29901[(7)] = inst_29853);

return statearr_29901;
})();
var statearr_29902_29933 = state_29889__$1;
(statearr_29902_29933[(2)] = null);

(statearr_29902_29933[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29890 === (11))){
var inst_29853 = (state_29889[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_29889,(10),Object,null,(9));
var inst_29862 = chs__$1.call(null,inst_29853);
var inst_29863 = done.call(null,inst_29853);
var inst_29864 = cljs.core.async.take_BANG_.call(null,inst_29862,inst_29863);
var state_29889__$1 = state_29889;
var statearr_29903_29934 = state_29889__$1;
(statearr_29903_29934[(2)] = inst_29864);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29889__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29890 === (9))){
var inst_29853 = (state_29889[(7)]);
var inst_29866 = (state_29889[(2)]);
var inst_29867 = (inst_29853 + (1));
var inst_29853__$1 = inst_29867;
var state_29889__$1 = (function (){var statearr_29904 = state_29889;
(statearr_29904[(10)] = inst_29866);

(statearr_29904[(7)] = inst_29853__$1);

return statearr_29904;
})();
var statearr_29905_29935 = state_29889__$1;
(statearr_29905_29935[(2)] = null);

(statearr_29905_29935[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29890 === (5))){
var inst_29873 = (state_29889[(2)]);
var state_29889__$1 = (function (){var statearr_29906 = state_29889;
(statearr_29906[(11)] = inst_29873);

return statearr_29906;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29889__$1,(12),dchan);
} else {
if((state_val_29890 === (14))){
var inst_29875 = (state_29889[(8)]);
var inst_29880 = cljs.core.apply.call(null,f,inst_29875);
var state_29889__$1 = state_29889;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29889__$1,(16),out,inst_29880);
} else {
if((state_val_29890 === (16))){
var inst_29882 = (state_29889[(2)]);
var state_29889__$1 = (function (){var statearr_29907 = state_29889;
(statearr_29907[(12)] = inst_29882);

return statearr_29907;
})();
var statearr_29908_29936 = state_29889__$1;
(statearr_29908_29936[(2)] = null);

(statearr_29908_29936[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29890 === (10))){
var inst_29857 = (state_29889[(2)]);
var inst_29858 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_29889__$1 = (function (){var statearr_29909 = state_29889;
(statearr_29909[(13)] = inst_29857);

return statearr_29909;
})();
var statearr_29910_29937 = state_29889__$1;
(statearr_29910_29937[(2)] = inst_29858);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29889__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29890 === (8))){
var inst_29871 = (state_29889[(2)]);
var state_29889__$1 = state_29889;
var statearr_29911_29938 = state_29889__$1;
(statearr_29911_29938[(2)] = inst_29871);

(statearr_29911_29938[(1)] = (5));


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
});})(c__27884__auto___29923,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__27772__auto__,c__27884__auto___29923,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__27773__auto__ = null;
var cljs$core$async$state_machine__27773__auto____0 = (function (){
var statearr_29915 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29915[(0)] = cljs$core$async$state_machine__27773__auto__);

(statearr_29915[(1)] = (1));

return statearr_29915;
});
var cljs$core$async$state_machine__27773__auto____1 = (function (state_29889){
while(true){
var ret_value__27774__auto__ = (function (){try{while(true){
var result__27775__auto__ = switch__27772__auto__.call(null,state_29889);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27775__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27775__auto__;
}
break;
}
}catch (e29916){if((e29916 instanceof Object)){
var ex__27776__auto__ = e29916;
var statearr_29917_29939 = state_29889;
(statearr_29917_29939[(5)] = ex__27776__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29889);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29916;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27774__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29940 = state_29889;
state_29889 = G__29940;
continue;
} else {
return ret_value__27774__auto__;
}
break;
}
});
cljs$core$async$state_machine__27773__auto__ = function(state_29889){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27773__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27773__auto____1.call(this,state_29889);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27773__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27773__auto____0;
cljs$core$async$state_machine__27773__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27773__auto____1;
return cljs$core$async$state_machine__27773__auto__;
})()
;})(switch__27772__auto__,c__27884__auto___29923,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__27886__auto__ = (function (){var statearr_29918 = f__27885__auto__.call(null);
(statearr_29918[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27884__auto___29923);

return statearr_29918;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27886__auto__);
});})(c__27884__auto___29923,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args29942 = [];
var len__25836__auto___30000 = arguments.length;
var i__25837__auto___30001 = (0);
while(true){
if((i__25837__auto___30001 < len__25836__auto___30000)){
args29942.push((arguments[i__25837__auto___30001]));

var G__30002 = (i__25837__auto___30001 + (1));
i__25837__auto___30001 = G__30002;
continue;
} else {
}
break;
}

var G__29944 = args29942.length;
switch (G__29944) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29942.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27884__auto___30004 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27884__auto___30004,out){
return (function (){
var f__27885__auto__ = (function (){var switch__27772__auto__ = ((function (c__27884__auto___30004,out){
return (function (state_29976){
var state_val_29977 = (state_29976[(1)]);
if((state_val_29977 === (7))){
var inst_29955 = (state_29976[(7)]);
var inst_29956 = (state_29976[(8)]);
var inst_29955__$1 = (state_29976[(2)]);
var inst_29956__$1 = cljs.core.nth.call(null,inst_29955__$1,(0),null);
var inst_29957 = cljs.core.nth.call(null,inst_29955__$1,(1),null);
var inst_29958 = (inst_29956__$1 == null);
var state_29976__$1 = (function (){var statearr_29978 = state_29976;
(statearr_29978[(7)] = inst_29955__$1);

(statearr_29978[(8)] = inst_29956__$1);

(statearr_29978[(9)] = inst_29957);

return statearr_29978;
})();
if(cljs.core.truth_(inst_29958)){
var statearr_29979_30005 = state_29976__$1;
(statearr_29979_30005[(1)] = (8));

} else {
var statearr_29980_30006 = state_29976__$1;
(statearr_29980_30006[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29977 === (1))){
var inst_29945 = cljs.core.vec.call(null,chs);
var inst_29946 = inst_29945;
var state_29976__$1 = (function (){var statearr_29981 = state_29976;
(statearr_29981[(10)] = inst_29946);

return statearr_29981;
})();
var statearr_29982_30007 = state_29976__$1;
(statearr_29982_30007[(2)] = null);

(statearr_29982_30007[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29977 === (4))){
var inst_29946 = (state_29976[(10)]);
var state_29976__$1 = state_29976;
return cljs.core.async.ioc_alts_BANG_.call(null,state_29976__$1,(7),inst_29946);
} else {
if((state_val_29977 === (6))){
var inst_29972 = (state_29976[(2)]);
var state_29976__$1 = state_29976;
var statearr_29983_30008 = state_29976__$1;
(statearr_29983_30008[(2)] = inst_29972);

(statearr_29983_30008[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29977 === (3))){
var inst_29974 = (state_29976[(2)]);
var state_29976__$1 = state_29976;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29976__$1,inst_29974);
} else {
if((state_val_29977 === (2))){
var inst_29946 = (state_29976[(10)]);
var inst_29948 = cljs.core.count.call(null,inst_29946);
var inst_29949 = (inst_29948 > (0));
var state_29976__$1 = state_29976;
if(cljs.core.truth_(inst_29949)){
var statearr_29985_30009 = state_29976__$1;
(statearr_29985_30009[(1)] = (4));

} else {
var statearr_29986_30010 = state_29976__$1;
(statearr_29986_30010[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29977 === (11))){
var inst_29946 = (state_29976[(10)]);
var inst_29965 = (state_29976[(2)]);
var tmp29984 = inst_29946;
var inst_29946__$1 = tmp29984;
var state_29976__$1 = (function (){var statearr_29987 = state_29976;
(statearr_29987[(10)] = inst_29946__$1);

(statearr_29987[(11)] = inst_29965);

return statearr_29987;
})();
var statearr_29988_30011 = state_29976__$1;
(statearr_29988_30011[(2)] = null);

(statearr_29988_30011[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29977 === (9))){
var inst_29956 = (state_29976[(8)]);
var state_29976__$1 = state_29976;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29976__$1,(11),out,inst_29956);
} else {
if((state_val_29977 === (5))){
var inst_29970 = cljs.core.async.close_BANG_.call(null,out);
var state_29976__$1 = state_29976;
var statearr_29989_30012 = state_29976__$1;
(statearr_29989_30012[(2)] = inst_29970);

(statearr_29989_30012[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29977 === (10))){
var inst_29968 = (state_29976[(2)]);
var state_29976__$1 = state_29976;
var statearr_29990_30013 = state_29976__$1;
(statearr_29990_30013[(2)] = inst_29968);

(statearr_29990_30013[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29977 === (8))){
var inst_29946 = (state_29976[(10)]);
var inst_29955 = (state_29976[(7)]);
var inst_29956 = (state_29976[(8)]);
var inst_29957 = (state_29976[(9)]);
var inst_29960 = (function (){var cs = inst_29946;
var vec__29951 = inst_29955;
var v = inst_29956;
var c = inst_29957;
return ((function (cs,vec__29951,v,c,inst_29946,inst_29955,inst_29956,inst_29957,state_val_29977,c__27884__auto___30004,out){
return (function (p1__29941_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__29941_SHARP_);
});
;})(cs,vec__29951,v,c,inst_29946,inst_29955,inst_29956,inst_29957,state_val_29977,c__27884__auto___30004,out))
})();
var inst_29961 = cljs.core.filterv.call(null,inst_29960,inst_29946);
var inst_29946__$1 = inst_29961;
var state_29976__$1 = (function (){var statearr_29991 = state_29976;
(statearr_29991[(10)] = inst_29946__$1);

return statearr_29991;
})();
var statearr_29992_30014 = state_29976__$1;
(statearr_29992_30014[(2)] = null);

(statearr_29992_30014[(1)] = (2));


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
});})(c__27884__auto___30004,out))
;
return ((function (switch__27772__auto__,c__27884__auto___30004,out){
return (function() {
var cljs$core$async$state_machine__27773__auto__ = null;
var cljs$core$async$state_machine__27773__auto____0 = (function (){
var statearr_29996 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29996[(0)] = cljs$core$async$state_machine__27773__auto__);

(statearr_29996[(1)] = (1));

return statearr_29996;
});
var cljs$core$async$state_machine__27773__auto____1 = (function (state_29976){
while(true){
var ret_value__27774__auto__ = (function (){try{while(true){
var result__27775__auto__ = switch__27772__auto__.call(null,state_29976);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27775__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27775__auto__;
}
break;
}
}catch (e29997){if((e29997 instanceof Object)){
var ex__27776__auto__ = e29997;
var statearr_29998_30015 = state_29976;
(statearr_29998_30015[(5)] = ex__27776__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29976);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29997;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27774__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30016 = state_29976;
state_29976 = G__30016;
continue;
} else {
return ret_value__27774__auto__;
}
break;
}
});
cljs$core$async$state_machine__27773__auto__ = function(state_29976){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27773__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27773__auto____1.call(this,state_29976);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27773__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27773__auto____0;
cljs$core$async$state_machine__27773__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27773__auto____1;
return cljs$core$async$state_machine__27773__auto__;
})()
;})(switch__27772__auto__,c__27884__auto___30004,out))
})();
var state__27886__auto__ = (function (){var statearr_29999 = f__27885__auto__.call(null);
(statearr_29999[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27884__auto___30004);

return statearr_29999;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27886__auto__);
});})(c__27884__auto___30004,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args30017 = [];
var len__25836__auto___30066 = arguments.length;
var i__25837__auto___30067 = (0);
while(true){
if((i__25837__auto___30067 < len__25836__auto___30066)){
args30017.push((arguments[i__25837__auto___30067]));

var G__30068 = (i__25837__auto___30067 + (1));
i__25837__auto___30067 = G__30068;
continue;
} else {
}
break;
}

var G__30019 = args30017.length;
switch (G__30019) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30017.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27884__auto___30070 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27884__auto___30070,out){
return (function (){
var f__27885__auto__ = (function (){var switch__27772__auto__ = ((function (c__27884__auto___30070,out){
return (function (state_30043){
var state_val_30044 = (state_30043[(1)]);
if((state_val_30044 === (7))){
var inst_30025 = (state_30043[(7)]);
var inst_30025__$1 = (state_30043[(2)]);
var inst_30026 = (inst_30025__$1 == null);
var inst_30027 = cljs.core.not.call(null,inst_30026);
var state_30043__$1 = (function (){var statearr_30045 = state_30043;
(statearr_30045[(7)] = inst_30025__$1);

return statearr_30045;
})();
if(inst_30027){
var statearr_30046_30071 = state_30043__$1;
(statearr_30046_30071[(1)] = (8));

} else {
var statearr_30047_30072 = state_30043__$1;
(statearr_30047_30072[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30044 === (1))){
var inst_30020 = (0);
var state_30043__$1 = (function (){var statearr_30048 = state_30043;
(statearr_30048[(8)] = inst_30020);

return statearr_30048;
})();
var statearr_30049_30073 = state_30043__$1;
(statearr_30049_30073[(2)] = null);

(statearr_30049_30073[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30044 === (4))){
var state_30043__$1 = state_30043;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30043__$1,(7),ch);
} else {
if((state_val_30044 === (6))){
var inst_30038 = (state_30043[(2)]);
var state_30043__$1 = state_30043;
var statearr_30050_30074 = state_30043__$1;
(statearr_30050_30074[(2)] = inst_30038);

(statearr_30050_30074[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30044 === (3))){
var inst_30040 = (state_30043[(2)]);
var inst_30041 = cljs.core.async.close_BANG_.call(null,out);
var state_30043__$1 = (function (){var statearr_30051 = state_30043;
(statearr_30051[(9)] = inst_30040);

return statearr_30051;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30043__$1,inst_30041);
} else {
if((state_val_30044 === (2))){
var inst_30020 = (state_30043[(8)]);
var inst_30022 = (inst_30020 < n);
var state_30043__$1 = state_30043;
if(cljs.core.truth_(inst_30022)){
var statearr_30052_30075 = state_30043__$1;
(statearr_30052_30075[(1)] = (4));

} else {
var statearr_30053_30076 = state_30043__$1;
(statearr_30053_30076[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30044 === (11))){
var inst_30020 = (state_30043[(8)]);
var inst_30030 = (state_30043[(2)]);
var inst_30031 = (inst_30020 + (1));
var inst_30020__$1 = inst_30031;
var state_30043__$1 = (function (){var statearr_30054 = state_30043;
(statearr_30054[(8)] = inst_30020__$1);

(statearr_30054[(10)] = inst_30030);

return statearr_30054;
})();
var statearr_30055_30077 = state_30043__$1;
(statearr_30055_30077[(2)] = null);

(statearr_30055_30077[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30044 === (9))){
var state_30043__$1 = state_30043;
var statearr_30056_30078 = state_30043__$1;
(statearr_30056_30078[(2)] = null);

(statearr_30056_30078[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30044 === (5))){
var state_30043__$1 = state_30043;
var statearr_30057_30079 = state_30043__$1;
(statearr_30057_30079[(2)] = null);

(statearr_30057_30079[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30044 === (10))){
var inst_30035 = (state_30043[(2)]);
var state_30043__$1 = state_30043;
var statearr_30058_30080 = state_30043__$1;
(statearr_30058_30080[(2)] = inst_30035);

(statearr_30058_30080[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30044 === (8))){
var inst_30025 = (state_30043[(7)]);
var state_30043__$1 = state_30043;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30043__$1,(11),out,inst_30025);
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
});})(c__27884__auto___30070,out))
;
return ((function (switch__27772__auto__,c__27884__auto___30070,out){
return (function() {
var cljs$core$async$state_machine__27773__auto__ = null;
var cljs$core$async$state_machine__27773__auto____0 = (function (){
var statearr_30062 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30062[(0)] = cljs$core$async$state_machine__27773__auto__);

(statearr_30062[(1)] = (1));

return statearr_30062;
});
var cljs$core$async$state_machine__27773__auto____1 = (function (state_30043){
while(true){
var ret_value__27774__auto__ = (function (){try{while(true){
var result__27775__auto__ = switch__27772__auto__.call(null,state_30043);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27775__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27775__auto__;
}
break;
}
}catch (e30063){if((e30063 instanceof Object)){
var ex__27776__auto__ = e30063;
var statearr_30064_30081 = state_30043;
(statearr_30064_30081[(5)] = ex__27776__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30043);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30063;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27774__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30082 = state_30043;
state_30043 = G__30082;
continue;
} else {
return ret_value__27774__auto__;
}
break;
}
});
cljs$core$async$state_machine__27773__auto__ = function(state_30043){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27773__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27773__auto____1.call(this,state_30043);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27773__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27773__auto____0;
cljs$core$async$state_machine__27773__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27773__auto____1;
return cljs$core$async$state_machine__27773__auto__;
})()
;})(switch__27772__auto__,c__27884__auto___30070,out))
})();
var state__27886__auto__ = (function (){var statearr_30065 = f__27885__auto__.call(null);
(statearr_30065[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27884__auto___30070);

return statearr_30065;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27886__auto__);
});})(c__27884__auto___30070,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async30090 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30090 = (function (map_LT_,f,ch,meta30091){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta30091 = meta30091;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30090.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30092,meta30091__$1){
var self__ = this;
var _30092__$1 = this;
return (new cljs.core.async.t_cljs$core$async30090(self__.map_LT_,self__.f,self__.ch,meta30091__$1));
});

cljs.core.async.t_cljs$core$async30090.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30092){
var self__ = this;
var _30092__$1 = this;
return self__.meta30091;
});

cljs.core.async.t_cljs$core$async30090.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async30090.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async30090.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async30090.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async30090.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async30093 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30093 = (function (map_LT_,f,ch,meta30091,_,fn1,meta30094){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta30091 = meta30091;
this._ = _;
this.fn1 = fn1;
this.meta30094 = meta30094;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30093.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_30095,meta30094__$1){
var self__ = this;
var _30095__$1 = this;
return (new cljs.core.async.t_cljs$core$async30093(self__.map_LT_,self__.f,self__.ch,self__.meta30091,self__._,self__.fn1,meta30094__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async30093.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_30095){
var self__ = this;
var _30095__$1 = this;
return self__.meta30094;
});})(___$1))
;

cljs.core.async.t_cljs$core$async30093.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async30093.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async30093.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async30093.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__30083_SHARP_){
return f1.call(null,(((p1__30083_SHARP_ == null))?null:self__.f.call(null,p1__30083_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async30093.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta30091","meta30091",-1798148299,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async30090","cljs.core.async/t_cljs$core$async30090",787656793,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta30094","meta30094",-896825575,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async30093.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30093.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30093";

cljs.core.async.t_cljs$core$async30093.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__25367__auto__,writer__25368__auto__,opt__25369__auto__){
return cljs.core._write.call(null,writer__25368__auto__,"cljs.core.async/t_cljs$core$async30093");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async30093 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async30093(map_LT___$1,f__$1,ch__$1,meta30091__$1,___$2,fn1__$1,meta30094){
return (new cljs.core.async.t_cljs$core$async30093(map_LT___$1,f__$1,ch__$1,meta30091__$1,___$2,fn1__$1,meta30094));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async30093(self__.map_LT_,self__.f,self__.ch,self__.meta30091,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__24749__auto__ = ret;
if(cljs.core.truth_(and__24749__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__24749__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async30090.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async30090.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async30090.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta30091","meta30091",-1798148299,null)], null);
});

cljs.core.async.t_cljs$core$async30090.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30090.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30090";

cljs.core.async.t_cljs$core$async30090.cljs$lang$ctorPrWriter = (function (this__25367__auto__,writer__25368__auto__,opt__25369__auto__){
return cljs.core._write.call(null,writer__25368__auto__,"cljs.core.async/t_cljs$core$async30090");
});

cljs.core.async.__GT_t_cljs$core$async30090 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async30090(map_LT___$1,f__$1,ch__$1,meta30091){
return (new cljs.core.async.t_cljs$core$async30090(map_LT___$1,f__$1,ch__$1,meta30091));
});

}

return (new cljs.core.async.t_cljs$core$async30090(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async30099 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30099 = (function (map_GT_,f,ch,meta30100){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta30100 = meta30100;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30099.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30101,meta30100__$1){
var self__ = this;
var _30101__$1 = this;
return (new cljs.core.async.t_cljs$core$async30099(self__.map_GT_,self__.f,self__.ch,meta30100__$1));
});

cljs.core.async.t_cljs$core$async30099.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30101){
var self__ = this;
var _30101__$1 = this;
return self__.meta30100;
});

cljs.core.async.t_cljs$core$async30099.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async30099.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async30099.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async30099.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async30099.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async30099.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async30099.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta30100","meta30100",-1829523143,null)], null);
});

cljs.core.async.t_cljs$core$async30099.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30099.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30099";

cljs.core.async.t_cljs$core$async30099.cljs$lang$ctorPrWriter = (function (this__25367__auto__,writer__25368__auto__,opt__25369__auto__){
return cljs.core._write.call(null,writer__25368__auto__,"cljs.core.async/t_cljs$core$async30099");
});

cljs.core.async.__GT_t_cljs$core$async30099 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async30099(map_GT___$1,f__$1,ch__$1,meta30100){
return (new cljs.core.async.t_cljs$core$async30099(map_GT___$1,f__$1,ch__$1,meta30100));
});

}

return (new cljs.core.async.t_cljs$core$async30099(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async30105 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30105 = (function (filter_GT_,p,ch,meta30106){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta30106 = meta30106;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30105.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30107,meta30106__$1){
var self__ = this;
var _30107__$1 = this;
return (new cljs.core.async.t_cljs$core$async30105(self__.filter_GT_,self__.p,self__.ch,meta30106__$1));
});

cljs.core.async.t_cljs$core$async30105.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30107){
var self__ = this;
var _30107__$1 = this;
return self__.meta30106;
});

cljs.core.async.t_cljs$core$async30105.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async30105.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async30105.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async30105.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async30105.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async30105.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async30105.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async30105.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta30106","meta30106",611016256,null)], null);
});

cljs.core.async.t_cljs$core$async30105.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30105.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30105";

cljs.core.async.t_cljs$core$async30105.cljs$lang$ctorPrWriter = (function (this__25367__auto__,writer__25368__auto__,opt__25369__auto__){
return cljs.core._write.call(null,writer__25368__auto__,"cljs.core.async/t_cljs$core$async30105");
});

cljs.core.async.__GT_t_cljs$core$async30105 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async30105(filter_GT___$1,p__$1,ch__$1,meta30106){
return (new cljs.core.async.t_cljs$core$async30105(filter_GT___$1,p__$1,ch__$1,meta30106));
});

}

return (new cljs.core.async.t_cljs$core$async30105(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args30108 = [];
var len__25836__auto___30152 = arguments.length;
var i__25837__auto___30153 = (0);
while(true){
if((i__25837__auto___30153 < len__25836__auto___30152)){
args30108.push((arguments[i__25837__auto___30153]));

var G__30154 = (i__25837__auto___30153 + (1));
i__25837__auto___30153 = G__30154;
continue;
} else {
}
break;
}

var G__30110 = args30108.length;
switch (G__30110) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30108.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27884__auto___30156 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27884__auto___30156,out){
return (function (){
var f__27885__auto__ = (function (){var switch__27772__auto__ = ((function (c__27884__auto___30156,out){
return (function (state_30131){
var state_val_30132 = (state_30131[(1)]);
if((state_val_30132 === (7))){
var inst_30127 = (state_30131[(2)]);
var state_30131__$1 = state_30131;
var statearr_30133_30157 = state_30131__$1;
(statearr_30133_30157[(2)] = inst_30127);

(statearr_30133_30157[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30132 === (1))){
var state_30131__$1 = state_30131;
var statearr_30134_30158 = state_30131__$1;
(statearr_30134_30158[(2)] = null);

(statearr_30134_30158[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30132 === (4))){
var inst_30113 = (state_30131[(7)]);
var inst_30113__$1 = (state_30131[(2)]);
var inst_30114 = (inst_30113__$1 == null);
var state_30131__$1 = (function (){var statearr_30135 = state_30131;
(statearr_30135[(7)] = inst_30113__$1);

return statearr_30135;
})();
if(cljs.core.truth_(inst_30114)){
var statearr_30136_30159 = state_30131__$1;
(statearr_30136_30159[(1)] = (5));

} else {
var statearr_30137_30160 = state_30131__$1;
(statearr_30137_30160[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30132 === (6))){
var inst_30113 = (state_30131[(7)]);
var inst_30118 = p.call(null,inst_30113);
var state_30131__$1 = state_30131;
if(cljs.core.truth_(inst_30118)){
var statearr_30138_30161 = state_30131__$1;
(statearr_30138_30161[(1)] = (8));

} else {
var statearr_30139_30162 = state_30131__$1;
(statearr_30139_30162[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30132 === (3))){
var inst_30129 = (state_30131[(2)]);
var state_30131__$1 = state_30131;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30131__$1,inst_30129);
} else {
if((state_val_30132 === (2))){
var state_30131__$1 = state_30131;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30131__$1,(4),ch);
} else {
if((state_val_30132 === (11))){
var inst_30121 = (state_30131[(2)]);
var state_30131__$1 = state_30131;
var statearr_30140_30163 = state_30131__$1;
(statearr_30140_30163[(2)] = inst_30121);

(statearr_30140_30163[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30132 === (9))){
var state_30131__$1 = state_30131;
var statearr_30141_30164 = state_30131__$1;
(statearr_30141_30164[(2)] = null);

(statearr_30141_30164[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30132 === (5))){
var inst_30116 = cljs.core.async.close_BANG_.call(null,out);
var state_30131__$1 = state_30131;
var statearr_30142_30165 = state_30131__$1;
(statearr_30142_30165[(2)] = inst_30116);

(statearr_30142_30165[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30132 === (10))){
var inst_30124 = (state_30131[(2)]);
var state_30131__$1 = (function (){var statearr_30143 = state_30131;
(statearr_30143[(8)] = inst_30124);

return statearr_30143;
})();
var statearr_30144_30166 = state_30131__$1;
(statearr_30144_30166[(2)] = null);

(statearr_30144_30166[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30132 === (8))){
var inst_30113 = (state_30131[(7)]);
var state_30131__$1 = state_30131;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30131__$1,(11),out,inst_30113);
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
});})(c__27884__auto___30156,out))
;
return ((function (switch__27772__auto__,c__27884__auto___30156,out){
return (function() {
var cljs$core$async$state_machine__27773__auto__ = null;
var cljs$core$async$state_machine__27773__auto____0 = (function (){
var statearr_30148 = [null,null,null,null,null,null,null,null,null];
(statearr_30148[(0)] = cljs$core$async$state_machine__27773__auto__);

(statearr_30148[(1)] = (1));

return statearr_30148;
});
var cljs$core$async$state_machine__27773__auto____1 = (function (state_30131){
while(true){
var ret_value__27774__auto__ = (function (){try{while(true){
var result__27775__auto__ = switch__27772__auto__.call(null,state_30131);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27775__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27775__auto__;
}
break;
}
}catch (e30149){if((e30149 instanceof Object)){
var ex__27776__auto__ = e30149;
var statearr_30150_30167 = state_30131;
(statearr_30150_30167[(5)] = ex__27776__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30131);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30149;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27774__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30168 = state_30131;
state_30131 = G__30168;
continue;
} else {
return ret_value__27774__auto__;
}
break;
}
});
cljs$core$async$state_machine__27773__auto__ = function(state_30131){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27773__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27773__auto____1.call(this,state_30131);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27773__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27773__auto____0;
cljs$core$async$state_machine__27773__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27773__auto____1;
return cljs$core$async$state_machine__27773__auto__;
})()
;})(switch__27772__auto__,c__27884__auto___30156,out))
})();
var state__27886__auto__ = (function (){var statearr_30151 = f__27885__auto__.call(null);
(statearr_30151[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27884__auto___30156);

return statearr_30151;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27886__auto__);
});})(c__27884__auto___30156,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args30169 = [];
var len__25836__auto___30172 = arguments.length;
var i__25837__auto___30173 = (0);
while(true){
if((i__25837__auto___30173 < len__25836__auto___30172)){
args30169.push((arguments[i__25837__auto___30173]));

var G__30174 = (i__25837__auto___30173 + (1));
i__25837__auto___30173 = G__30174;
continue;
} else {
}
break;
}

var G__30171 = args30169.length;
switch (G__30171) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30169.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__27884__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27884__auto__){
return (function (){
var f__27885__auto__ = (function (){var switch__27772__auto__ = ((function (c__27884__auto__){
return (function (state_30341){
var state_val_30342 = (state_30341[(1)]);
if((state_val_30342 === (7))){
var inst_30337 = (state_30341[(2)]);
var state_30341__$1 = state_30341;
var statearr_30343_30384 = state_30341__$1;
(statearr_30343_30384[(2)] = inst_30337);

(statearr_30343_30384[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30342 === (20))){
var inst_30307 = (state_30341[(7)]);
var inst_30318 = (state_30341[(2)]);
var inst_30319 = cljs.core.next.call(null,inst_30307);
var inst_30293 = inst_30319;
var inst_30294 = null;
var inst_30295 = (0);
var inst_30296 = (0);
var state_30341__$1 = (function (){var statearr_30344 = state_30341;
(statearr_30344[(8)] = inst_30293);

(statearr_30344[(9)] = inst_30294);

(statearr_30344[(10)] = inst_30318);

(statearr_30344[(11)] = inst_30296);

(statearr_30344[(12)] = inst_30295);

return statearr_30344;
})();
var statearr_30345_30385 = state_30341__$1;
(statearr_30345_30385[(2)] = null);

(statearr_30345_30385[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30342 === (1))){
var state_30341__$1 = state_30341;
var statearr_30346_30386 = state_30341__$1;
(statearr_30346_30386[(2)] = null);

(statearr_30346_30386[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30342 === (4))){
var inst_30282 = (state_30341[(13)]);
var inst_30282__$1 = (state_30341[(2)]);
var inst_30283 = (inst_30282__$1 == null);
var state_30341__$1 = (function (){var statearr_30347 = state_30341;
(statearr_30347[(13)] = inst_30282__$1);

return statearr_30347;
})();
if(cljs.core.truth_(inst_30283)){
var statearr_30348_30387 = state_30341__$1;
(statearr_30348_30387[(1)] = (5));

} else {
var statearr_30349_30388 = state_30341__$1;
(statearr_30349_30388[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30342 === (15))){
var state_30341__$1 = state_30341;
var statearr_30353_30389 = state_30341__$1;
(statearr_30353_30389[(2)] = null);

(statearr_30353_30389[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30342 === (21))){
var state_30341__$1 = state_30341;
var statearr_30354_30390 = state_30341__$1;
(statearr_30354_30390[(2)] = null);

(statearr_30354_30390[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30342 === (13))){
var inst_30293 = (state_30341[(8)]);
var inst_30294 = (state_30341[(9)]);
var inst_30296 = (state_30341[(11)]);
var inst_30295 = (state_30341[(12)]);
var inst_30303 = (state_30341[(2)]);
var inst_30304 = (inst_30296 + (1));
var tmp30350 = inst_30293;
var tmp30351 = inst_30294;
var tmp30352 = inst_30295;
var inst_30293__$1 = tmp30350;
var inst_30294__$1 = tmp30351;
var inst_30295__$1 = tmp30352;
var inst_30296__$1 = inst_30304;
var state_30341__$1 = (function (){var statearr_30355 = state_30341;
(statearr_30355[(8)] = inst_30293__$1);

(statearr_30355[(9)] = inst_30294__$1);

(statearr_30355[(14)] = inst_30303);

(statearr_30355[(11)] = inst_30296__$1);

(statearr_30355[(12)] = inst_30295__$1);

return statearr_30355;
})();
var statearr_30356_30391 = state_30341__$1;
(statearr_30356_30391[(2)] = null);

(statearr_30356_30391[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30342 === (22))){
var state_30341__$1 = state_30341;
var statearr_30357_30392 = state_30341__$1;
(statearr_30357_30392[(2)] = null);

(statearr_30357_30392[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30342 === (6))){
var inst_30282 = (state_30341[(13)]);
var inst_30291 = f.call(null,inst_30282);
var inst_30292 = cljs.core.seq.call(null,inst_30291);
var inst_30293 = inst_30292;
var inst_30294 = null;
var inst_30295 = (0);
var inst_30296 = (0);
var state_30341__$1 = (function (){var statearr_30358 = state_30341;
(statearr_30358[(8)] = inst_30293);

(statearr_30358[(9)] = inst_30294);

(statearr_30358[(11)] = inst_30296);

(statearr_30358[(12)] = inst_30295);

return statearr_30358;
})();
var statearr_30359_30393 = state_30341__$1;
(statearr_30359_30393[(2)] = null);

(statearr_30359_30393[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30342 === (17))){
var inst_30307 = (state_30341[(7)]);
var inst_30311 = cljs.core.chunk_first.call(null,inst_30307);
var inst_30312 = cljs.core.chunk_rest.call(null,inst_30307);
var inst_30313 = cljs.core.count.call(null,inst_30311);
var inst_30293 = inst_30312;
var inst_30294 = inst_30311;
var inst_30295 = inst_30313;
var inst_30296 = (0);
var state_30341__$1 = (function (){var statearr_30360 = state_30341;
(statearr_30360[(8)] = inst_30293);

(statearr_30360[(9)] = inst_30294);

(statearr_30360[(11)] = inst_30296);

(statearr_30360[(12)] = inst_30295);

return statearr_30360;
})();
var statearr_30361_30394 = state_30341__$1;
(statearr_30361_30394[(2)] = null);

(statearr_30361_30394[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30342 === (3))){
var inst_30339 = (state_30341[(2)]);
var state_30341__$1 = state_30341;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30341__$1,inst_30339);
} else {
if((state_val_30342 === (12))){
var inst_30327 = (state_30341[(2)]);
var state_30341__$1 = state_30341;
var statearr_30362_30395 = state_30341__$1;
(statearr_30362_30395[(2)] = inst_30327);

(statearr_30362_30395[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30342 === (2))){
var state_30341__$1 = state_30341;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30341__$1,(4),in$);
} else {
if((state_val_30342 === (23))){
var inst_30335 = (state_30341[(2)]);
var state_30341__$1 = state_30341;
var statearr_30363_30396 = state_30341__$1;
(statearr_30363_30396[(2)] = inst_30335);

(statearr_30363_30396[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30342 === (19))){
var inst_30322 = (state_30341[(2)]);
var state_30341__$1 = state_30341;
var statearr_30364_30397 = state_30341__$1;
(statearr_30364_30397[(2)] = inst_30322);

(statearr_30364_30397[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30342 === (11))){
var inst_30307 = (state_30341[(7)]);
var inst_30293 = (state_30341[(8)]);
var inst_30307__$1 = cljs.core.seq.call(null,inst_30293);
var state_30341__$1 = (function (){var statearr_30365 = state_30341;
(statearr_30365[(7)] = inst_30307__$1);

return statearr_30365;
})();
if(inst_30307__$1){
var statearr_30366_30398 = state_30341__$1;
(statearr_30366_30398[(1)] = (14));

} else {
var statearr_30367_30399 = state_30341__$1;
(statearr_30367_30399[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30342 === (9))){
var inst_30329 = (state_30341[(2)]);
var inst_30330 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_30341__$1 = (function (){var statearr_30368 = state_30341;
(statearr_30368[(15)] = inst_30329);

return statearr_30368;
})();
if(cljs.core.truth_(inst_30330)){
var statearr_30369_30400 = state_30341__$1;
(statearr_30369_30400[(1)] = (21));

} else {
var statearr_30370_30401 = state_30341__$1;
(statearr_30370_30401[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30342 === (5))){
var inst_30285 = cljs.core.async.close_BANG_.call(null,out);
var state_30341__$1 = state_30341;
var statearr_30371_30402 = state_30341__$1;
(statearr_30371_30402[(2)] = inst_30285);

(statearr_30371_30402[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30342 === (14))){
var inst_30307 = (state_30341[(7)]);
var inst_30309 = cljs.core.chunked_seq_QMARK_.call(null,inst_30307);
var state_30341__$1 = state_30341;
if(inst_30309){
var statearr_30372_30403 = state_30341__$1;
(statearr_30372_30403[(1)] = (17));

} else {
var statearr_30373_30404 = state_30341__$1;
(statearr_30373_30404[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30342 === (16))){
var inst_30325 = (state_30341[(2)]);
var state_30341__$1 = state_30341;
var statearr_30374_30405 = state_30341__$1;
(statearr_30374_30405[(2)] = inst_30325);

(statearr_30374_30405[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30342 === (10))){
var inst_30294 = (state_30341[(9)]);
var inst_30296 = (state_30341[(11)]);
var inst_30301 = cljs.core._nth.call(null,inst_30294,inst_30296);
var state_30341__$1 = state_30341;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30341__$1,(13),out,inst_30301);
} else {
if((state_val_30342 === (18))){
var inst_30307 = (state_30341[(7)]);
var inst_30316 = cljs.core.first.call(null,inst_30307);
var state_30341__$1 = state_30341;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30341__$1,(20),out,inst_30316);
} else {
if((state_val_30342 === (8))){
var inst_30296 = (state_30341[(11)]);
var inst_30295 = (state_30341[(12)]);
var inst_30298 = (inst_30296 < inst_30295);
var inst_30299 = inst_30298;
var state_30341__$1 = state_30341;
if(cljs.core.truth_(inst_30299)){
var statearr_30375_30406 = state_30341__$1;
(statearr_30375_30406[(1)] = (10));

} else {
var statearr_30376_30407 = state_30341__$1;
(statearr_30376_30407[(1)] = (11));

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
}
}
}
}
}
}
});})(c__27884__auto__))
;
return ((function (switch__27772__auto__,c__27884__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__27773__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__27773__auto____0 = (function (){
var statearr_30380 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30380[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__27773__auto__);

(statearr_30380[(1)] = (1));

return statearr_30380;
});
var cljs$core$async$mapcat_STAR__$_state_machine__27773__auto____1 = (function (state_30341){
while(true){
var ret_value__27774__auto__ = (function (){try{while(true){
var result__27775__auto__ = switch__27772__auto__.call(null,state_30341);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27775__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27775__auto__;
}
break;
}
}catch (e30381){if((e30381 instanceof Object)){
var ex__27776__auto__ = e30381;
var statearr_30382_30408 = state_30341;
(statearr_30382_30408[(5)] = ex__27776__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30341);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30381;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27774__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30409 = state_30341;
state_30341 = G__30409;
continue;
} else {
return ret_value__27774__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__27773__auto__ = function(state_30341){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__27773__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__27773__auto____1.call(this,state_30341);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__27773__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__27773__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__27773__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__27773__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__27773__auto__;
})()
;})(switch__27772__auto__,c__27884__auto__))
})();
var state__27886__auto__ = (function (){var statearr_30383 = f__27885__auto__.call(null);
(statearr_30383[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27884__auto__);

return statearr_30383;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27886__auto__);
});})(c__27884__auto__))
);

return c__27884__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args30410 = [];
var len__25836__auto___30413 = arguments.length;
var i__25837__auto___30414 = (0);
while(true){
if((i__25837__auto___30414 < len__25836__auto___30413)){
args30410.push((arguments[i__25837__auto___30414]));

var G__30415 = (i__25837__auto___30414 + (1));
i__25837__auto___30414 = G__30415;
continue;
} else {
}
break;
}

var G__30412 = args30410.length;
switch (G__30412) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30410.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args30417 = [];
var len__25836__auto___30420 = arguments.length;
var i__25837__auto___30421 = (0);
while(true){
if((i__25837__auto___30421 < len__25836__auto___30420)){
args30417.push((arguments[i__25837__auto___30421]));

var G__30422 = (i__25837__auto___30421 + (1));
i__25837__auto___30421 = G__30422;
continue;
} else {
}
break;
}

var G__30419 = args30417.length;
switch (G__30419) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30417.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args30424 = [];
var len__25836__auto___30475 = arguments.length;
var i__25837__auto___30476 = (0);
while(true){
if((i__25837__auto___30476 < len__25836__auto___30475)){
args30424.push((arguments[i__25837__auto___30476]));

var G__30477 = (i__25837__auto___30476 + (1));
i__25837__auto___30476 = G__30477;
continue;
} else {
}
break;
}

var G__30426 = args30424.length;
switch (G__30426) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30424.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27884__auto___30479 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27884__auto___30479,out){
return (function (){
var f__27885__auto__ = (function (){var switch__27772__auto__ = ((function (c__27884__auto___30479,out){
return (function (state_30450){
var state_val_30451 = (state_30450[(1)]);
if((state_val_30451 === (7))){
var inst_30445 = (state_30450[(2)]);
var state_30450__$1 = state_30450;
var statearr_30452_30480 = state_30450__$1;
(statearr_30452_30480[(2)] = inst_30445);

(statearr_30452_30480[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30451 === (1))){
var inst_30427 = null;
var state_30450__$1 = (function (){var statearr_30453 = state_30450;
(statearr_30453[(7)] = inst_30427);

return statearr_30453;
})();
var statearr_30454_30481 = state_30450__$1;
(statearr_30454_30481[(2)] = null);

(statearr_30454_30481[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30451 === (4))){
var inst_30430 = (state_30450[(8)]);
var inst_30430__$1 = (state_30450[(2)]);
var inst_30431 = (inst_30430__$1 == null);
var inst_30432 = cljs.core.not.call(null,inst_30431);
var state_30450__$1 = (function (){var statearr_30455 = state_30450;
(statearr_30455[(8)] = inst_30430__$1);

return statearr_30455;
})();
if(inst_30432){
var statearr_30456_30482 = state_30450__$1;
(statearr_30456_30482[(1)] = (5));

} else {
var statearr_30457_30483 = state_30450__$1;
(statearr_30457_30483[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30451 === (6))){
var state_30450__$1 = state_30450;
var statearr_30458_30484 = state_30450__$1;
(statearr_30458_30484[(2)] = null);

(statearr_30458_30484[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30451 === (3))){
var inst_30447 = (state_30450[(2)]);
var inst_30448 = cljs.core.async.close_BANG_.call(null,out);
var state_30450__$1 = (function (){var statearr_30459 = state_30450;
(statearr_30459[(9)] = inst_30447);

return statearr_30459;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30450__$1,inst_30448);
} else {
if((state_val_30451 === (2))){
var state_30450__$1 = state_30450;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30450__$1,(4),ch);
} else {
if((state_val_30451 === (11))){
var inst_30430 = (state_30450[(8)]);
var inst_30439 = (state_30450[(2)]);
var inst_30427 = inst_30430;
var state_30450__$1 = (function (){var statearr_30460 = state_30450;
(statearr_30460[(7)] = inst_30427);

(statearr_30460[(10)] = inst_30439);

return statearr_30460;
})();
var statearr_30461_30485 = state_30450__$1;
(statearr_30461_30485[(2)] = null);

(statearr_30461_30485[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30451 === (9))){
var inst_30430 = (state_30450[(8)]);
var state_30450__$1 = state_30450;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30450__$1,(11),out,inst_30430);
} else {
if((state_val_30451 === (5))){
var inst_30427 = (state_30450[(7)]);
var inst_30430 = (state_30450[(8)]);
var inst_30434 = cljs.core._EQ_.call(null,inst_30430,inst_30427);
var state_30450__$1 = state_30450;
if(inst_30434){
var statearr_30463_30486 = state_30450__$1;
(statearr_30463_30486[(1)] = (8));

} else {
var statearr_30464_30487 = state_30450__$1;
(statearr_30464_30487[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30451 === (10))){
var inst_30442 = (state_30450[(2)]);
var state_30450__$1 = state_30450;
var statearr_30465_30488 = state_30450__$1;
(statearr_30465_30488[(2)] = inst_30442);

(statearr_30465_30488[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30451 === (8))){
var inst_30427 = (state_30450[(7)]);
var tmp30462 = inst_30427;
var inst_30427__$1 = tmp30462;
var state_30450__$1 = (function (){var statearr_30466 = state_30450;
(statearr_30466[(7)] = inst_30427__$1);

return statearr_30466;
})();
var statearr_30467_30489 = state_30450__$1;
(statearr_30467_30489[(2)] = null);

(statearr_30467_30489[(1)] = (2));


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
});})(c__27884__auto___30479,out))
;
return ((function (switch__27772__auto__,c__27884__auto___30479,out){
return (function() {
var cljs$core$async$state_machine__27773__auto__ = null;
var cljs$core$async$state_machine__27773__auto____0 = (function (){
var statearr_30471 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30471[(0)] = cljs$core$async$state_machine__27773__auto__);

(statearr_30471[(1)] = (1));

return statearr_30471;
});
var cljs$core$async$state_machine__27773__auto____1 = (function (state_30450){
while(true){
var ret_value__27774__auto__ = (function (){try{while(true){
var result__27775__auto__ = switch__27772__auto__.call(null,state_30450);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27775__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27775__auto__;
}
break;
}
}catch (e30472){if((e30472 instanceof Object)){
var ex__27776__auto__ = e30472;
var statearr_30473_30490 = state_30450;
(statearr_30473_30490[(5)] = ex__27776__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30450);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30472;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27774__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30491 = state_30450;
state_30450 = G__30491;
continue;
} else {
return ret_value__27774__auto__;
}
break;
}
});
cljs$core$async$state_machine__27773__auto__ = function(state_30450){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27773__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27773__auto____1.call(this,state_30450);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27773__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27773__auto____0;
cljs$core$async$state_machine__27773__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27773__auto____1;
return cljs$core$async$state_machine__27773__auto__;
})()
;})(switch__27772__auto__,c__27884__auto___30479,out))
})();
var state__27886__auto__ = (function (){var statearr_30474 = f__27885__auto__.call(null);
(statearr_30474[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27884__auto___30479);

return statearr_30474;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27886__auto__);
});})(c__27884__auto___30479,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args30492 = [];
var len__25836__auto___30562 = arguments.length;
var i__25837__auto___30563 = (0);
while(true){
if((i__25837__auto___30563 < len__25836__auto___30562)){
args30492.push((arguments[i__25837__auto___30563]));

var G__30564 = (i__25837__auto___30563 + (1));
i__25837__auto___30563 = G__30564;
continue;
} else {
}
break;
}

var G__30494 = args30492.length;
switch (G__30494) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30492.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27884__auto___30566 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27884__auto___30566,out){
return (function (){
var f__27885__auto__ = (function (){var switch__27772__auto__ = ((function (c__27884__auto___30566,out){
return (function (state_30532){
var state_val_30533 = (state_30532[(1)]);
if((state_val_30533 === (7))){
var inst_30528 = (state_30532[(2)]);
var state_30532__$1 = state_30532;
var statearr_30534_30567 = state_30532__$1;
(statearr_30534_30567[(2)] = inst_30528);

(statearr_30534_30567[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30533 === (1))){
var inst_30495 = (new Array(n));
var inst_30496 = inst_30495;
var inst_30497 = (0);
var state_30532__$1 = (function (){var statearr_30535 = state_30532;
(statearr_30535[(7)] = inst_30497);

(statearr_30535[(8)] = inst_30496);

return statearr_30535;
})();
var statearr_30536_30568 = state_30532__$1;
(statearr_30536_30568[(2)] = null);

(statearr_30536_30568[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30533 === (4))){
var inst_30500 = (state_30532[(9)]);
var inst_30500__$1 = (state_30532[(2)]);
var inst_30501 = (inst_30500__$1 == null);
var inst_30502 = cljs.core.not.call(null,inst_30501);
var state_30532__$1 = (function (){var statearr_30537 = state_30532;
(statearr_30537[(9)] = inst_30500__$1);

return statearr_30537;
})();
if(inst_30502){
var statearr_30538_30569 = state_30532__$1;
(statearr_30538_30569[(1)] = (5));

} else {
var statearr_30539_30570 = state_30532__$1;
(statearr_30539_30570[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30533 === (15))){
var inst_30522 = (state_30532[(2)]);
var state_30532__$1 = state_30532;
var statearr_30540_30571 = state_30532__$1;
(statearr_30540_30571[(2)] = inst_30522);

(statearr_30540_30571[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30533 === (13))){
var state_30532__$1 = state_30532;
var statearr_30541_30572 = state_30532__$1;
(statearr_30541_30572[(2)] = null);

(statearr_30541_30572[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30533 === (6))){
var inst_30497 = (state_30532[(7)]);
var inst_30518 = (inst_30497 > (0));
var state_30532__$1 = state_30532;
if(cljs.core.truth_(inst_30518)){
var statearr_30542_30573 = state_30532__$1;
(statearr_30542_30573[(1)] = (12));

} else {
var statearr_30543_30574 = state_30532__$1;
(statearr_30543_30574[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30533 === (3))){
var inst_30530 = (state_30532[(2)]);
var state_30532__$1 = state_30532;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30532__$1,inst_30530);
} else {
if((state_val_30533 === (12))){
var inst_30496 = (state_30532[(8)]);
var inst_30520 = cljs.core.vec.call(null,inst_30496);
var state_30532__$1 = state_30532;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30532__$1,(15),out,inst_30520);
} else {
if((state_val_30533 === (2))){
var state_30532__$1 = state_30532;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30532__$1,(4),ch);
} else {
if((state_val_30533 === (11))){
var inst_30512 = (state_30532[(2)]);
var inst_30513 = (new Array(n));
var inst_30496 = inst_30513;
var inst_30497 = (0);
var state_30532__$1 = (function (){var statearr_30544 = state_30532;
(statearr_30544[(7)] = inst_30497);

(statearr_30544[(10)] = inst_30512);

(statearr_30544[(8)] = inst_30496);

return statearr_30544;
})();
var statearr_30545_30575 = state_30532__$1;
(statearr_30545_30575[(2)] = null);

(statearr_30545_30575[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30533 === (9))){
var inst_30496 = (state_30532[(8)]);
var inst_30510 = cljs.core.vec.call(null,inst_30496);
var state_30532__$1 = state_30532;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30532__$1,(11),out,inst_30510);
} else {
if((state_val_30533 === (5))){
var inst_30497 = (state_30532[(7)]);
var inst_30496 = (state_30532[(8)]);
var inst_30500 = (state_30532[(9)]);
var inst_30505 = (state_30532[(11)]);
var inst_30504 = (inst_30496[inst_30497] = inst_30500);
var inst_30505__$1 = (inst_30497 + (1));
var inst_30506 = (inst_30505__$1 < n);
var state_30532__$1 = (function (){var statearr_30546 = state_30532;
(statearr_30546[(12)] = inst_30504);

(statearr_30546[(11)] = inst_30505__$1);

return statearr_30546;
})();
if(cljs.core.truth_(inst_30506)){
var statearr_30547_30576 = state_30532__$1;
(statearr_30547_30576[(1)] = (8));

} else {
var statearr_30548_30577 = state_30532__$1;
(statearr_30548_30577[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30533 === (14))){
var inst_30525 = (state_30532[(2)]);
var inst_30526 = cljs.core.async.close_BANG_.call(null,out);
var state_30532__$1 = (function (){var statearr_30550 = state_30532;
(statearr_30550[(13)] = inst_30525);

return statearr_30550;
})();
var statearr_30551_30578 = state_30532__$1;
(statearr_30551_30578[(2)] = inst_30526);

(statearr_30551_30578[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30533 === (10))){
var inst_30516 = (state_30532[(2)]);
var state_30532__$1 = state_30532;
var statearr_30552_30579 = state_30532__$1;
(statearr_30552_30579[(2)] = inst_30516);

(statearr_30552_30579[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30533 === (8))){
var inst_30496 = (state_30532[(8)]);
var inst_30505 = (state_30532[(11)]);
var tmp30549 = inst_30496;
var inst_30496__$1 = tmp30549;
var inst_30497 = inst_30505;
var state_30532__$1 = (function (){var statearr_30553 = state_30532;
(statearr_30553[(7)] = inst_30497);

(statearr_30553[(8)] = inst_30496__$1);

return statearr_30553;
})();
var statearr_30554_30580 = state_30532__$1;
(statearr_30554_30580[(2)] = null);

(statearr_30554_30580[(1)] = (2));


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
});})(c__27884__auto___30566,out))
;
return ((function (switch__27772__auto__,c__27884__auto___30566,out){
return (function() {
var cljs$core$async$state_machine__27773__auto__ = null;
var cljs$core$async$state_machine__27773__auto____0 = (function (){
var statearr_30558 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30558[(0)] = cljs$core$async$state_machine__27773__auto__);

(statearr_30558[(1)] = (1));

return statearr_30558;
});
var cljs$core$async$state_machine__27773__auto____1 = (function (state_30532){
while(true){
var ret_value__27774__auto__ = (function (){try{while(true){
var result__27775__auto__ = switch__27772__auto__.call(null,state_30532);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27775__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27775__auto__;
}
break;
}
}catch (e30559){if((e30559 instanceof Object)){
var ex__27776__auto__ = e30559;
var statearr_30560_30581 = state_30532;
(statearr_30560_30581[(5)] = ex__27776__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30532);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30559;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27774__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30582 = state_30532;
state_30532 = G__30582;
continue;
} else {
return ret_value__27774__auto__;
}
break;
}
});
cljs$core$async$state_machine__27773__auto__ = function(state_30532){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27773__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27773__auto____1.call(this,state_30532);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27773__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27773__auto____0;
cljs$core$async$state_machine__27773__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27773__auto____1;
return cljs$core$async$state_machine__27773__auto__;
})()
;})(switch__27772__auto__,c__27884__auto___30566,out))
})();
var state__27886__auto__ = (function (){var statearr_30561 = f__27885__auto__.call(null);
(statearr_30561[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27884__auto___30566);

return statearr_30561;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27886__auto__);
});})(c__27884__auto___30566,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args30583 = [];
var len__25836__auto___30657 = arguments.length;
var i__25837__auto___30658 = (0);
while(true){
if((i__25837__auto___30658 < len__25836__auto___30657)){
args30583.push((arguments[i__25837__auto___30658]));

var G__30659 = (i__25837__auto___30658 + (1));
i__25837__auto___30658 = G__30659;
continue;
} else {
}
break;
}

var G__30585 = args30583.length;
switch (G__30585) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30583.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27884__auto___30661 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27884__auto___30661,out){
return (function (){
var f__27885__auto__ = (function (){var switch__27772__auto__ = ((function (c__27884__auto___30661,out){
return (function (state_30627){
var state_val_30628 = (state_30627[(1)]);
if((state_val_30628 === (7))){
var inst_30623 = (state_30627[(2)]);
var state_30627__$1 = state_30627;
var statearr_30629_30662 = state_30627__$1;
(statearr_30629_30662[(2)] = inst_30623);

(statearr_30629_30662[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30628 === (1))){
var inst_30586 = [];
var inst_30587 = inst_30586;
var inst_30588 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_30627__$1 = (function (){var statearr_30630 = state_30627;
(statearr_30630[(7)] = inst_30588);

(statearr_30630[(8)] = inst_30587);

return statearr_30630;
})();
var statearr_30631_30663 = state_30627__$1;
(statearr_30631_30663[(2)] = null);

(statearr_30631_30663[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30628 === (4))){
var inst_30591 = (state_30627[(9)]);
var inst_30591__$1 = (state_30627[(2)]);
var inst_30592 = (inst_30591__$1 == null);
var inst_30593 = cljs.core.not.call(null,inst_30592);
var state_30627__$1 = (function (){var statearr_30632 = state_30627;
(statearr_30632[(9)] = inst_30591__$1);

return statearr_30632;
})();
if(inst_30593){
var statearr_30633_30664 = state_30627__$1;
(statearr_30633_30664[(1)] = (5));

} else {
var statearr_30634_30665 = state_30627__$1;
(statearr_30634_30665[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30628 === (15))){
var inst_30617 = (state_30627[(2)]);
var state_30627__$1 = state_30627;
var statearr_30635_30666 = state_30627__$1;
(statearr_30635_30666[(2)] = inst_30617);

(statearr_30635_30666[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30628 === (13))){
var state_30627__$1 = state_30627;
var statearr_30636_30667 = state_30627__$1;
(statearr_30636_30667[(2)] = null);

(statearr_30636_30667[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30628 === (6))){
var inst_30587 = (state_30627[(8)]);
var inst_30612 = inst_30587.length;
var inst_30613 = (inst_30612 > (0));
var state_30627__$1 = state_30627;
if(cljs.core.truth_(inst_30613)){
var statearr_30637_30668 = state_30627__$1;
(statearr_30637_30668[(1)] = (12));

} else {
var statearr_30638_30669 = state_30627__$1;
(statearr_30638_30669[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30628 === (3))){
var inst_30625 = (state_30627[(2)]);
var state_30627__$1 = state_30627;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30627__$1,inst_30625);
} else {
if((state_val_30628 === (12))){
var inst_30587 = (state_30627[(8)]);
var inst_30615 = cljs.core.vec.call(null,inst_30587);
var state_30627__$1 = state_30627;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30627__$1,(15),out,inst_30615);
} else {
if((state_val_30628 === (2))){
var state_30627__$1 = state_30627;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30627__$1,(4),ch);
} else {
if((state_val_30628 === (11))){
var inst_30591 = (state_30627[(9)]);
var inst_30595 = (state_30627[(10)]);
var inst_30605 = (state_30627[(2)]);
var inst_30606 = [];
var inst_30607 = inst_30606.push(inst_30591);
var inst_30587 = inst_30606;
var inst_30588 = inst_30595;
var state_30627__$1 = (function (){var statearr_30639 = state_30627;
(statearr_30639[(11)] = inst_30605);

(statearr_30639[(7)] = inst_30588);

(statearr_30639[(8)] = inst_30587);

(statearr_30639[(12)] = inst_30607);

return statearr_30639;
})();
var statearr_30640_30670 = state_30627__$1;
(statearr_30640_30670[(2)] = null);

(statearr_30640_30670[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30628 === (9))){
var inst_30587 = (state_30627[(8)]);
var inst_30603 = cljs.core.vec.call(null,inst_30587);
var state_30627__$1 = state_30627;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30627__$1,(11),out,inst_30603);
} else {
if((state_val_30628 === (5))){
var inst_30588 = (state_30627[(7)]);
var inst_30591 = (state_30627[(9)]);
var inst_30595 = (state_30627[(10)]);
var inst_30595__$1 = f.call(null,inst_30591);
var inst_30596 = cljs.core._EQ_.call(null,inst_30595__$1,inst_30588);
var inst_30597 = cljs.core.keyword_identical_QMARK_.call(null,inst_30588,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_30598 = (inst_30596) || (inst_30597);
var state_30627__$1 = (function (){var statearr_30641 = state_30627;
(statearr_30641[(10)] = inst_30595__$1);

return statearr_30641;
})();
if(cljs.core.truth_(inst_30598)){
var statearr_30642_30671 = state_30627__$1;
(statearr_30642_30671[(1)] = (8));

} else {
var statearr_30643_30672 = state_30627__$1;
(statearr_30643_30672[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30628 === (14))){
var inst_30620 = (state_30627[(2)]);
var inst_30621 = cljs.core.async.close_BANG_.call(null,out);
var state_30627__$1 = (function (){var statearr_30645 = state_30627;
(statearr_30645[(13)] = inst_30620);

return statearr_30645;
})();
var statearr_30646_30673 = state_30627__$1;
(statearr_30646_30673[(2)] = inst_30621);

(statearr_30646_30673[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30628 === (10))){
var inst_30610 = (state_30627[(2)]);
var state_30627__$1 = state_30627;
var statearr_30647_30674 = state_30627__$1;
(statearr_30647_30674[(2)] = inst_30610);

(statearr_30647_30674[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30628 === (8))){
var inst_30587 = (state_30627[(8)]);
var inst_30591 = (state_30627[(9)]);
var inst_30595 = (state_30627[(10)]);
var inst_30600 = inst_30587.push(inst_30591);
var tmp30644 = inst_30587;
var inst_30587__$1 = tmp30644;
var inst_30588 = inst_30595;
var state_30627__$1 = (function (){var statearr_30648 = state_30627;
(statearr_30648[(7)] = inst_30588);

(statearr_30648[(8)] = inst_30587__$1);

(statearr_30648[(14)] = inst_30600);

return statearr_30648;
})();
var statearr_30649_30675 = state_30627__$1;
(statearr_30649_30675[(2)] = null);

(statearr_30649_30675[(1)] = (2));


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
});})(c__27884__auto___30661,out))
;
return ((function (switch__27772__auto__,c__27884__auto___30661,out){
return (function() {
var cljs$core$async$state_machine__27773__auto__ = null;
var cljs$core$async$state_machine__27773__auto____0 = (function (){
var statearr_30653 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30653[(0)] = cljs$core$async$state_machine__27773__auto__);

(statearr_30653[(1)] = (1));

return statearr_30653;
});
var cljs$core$async$state_machine__27773__auto____1 = (function (state_30627){
while(true){
var ret_value__27774__auto__ = (function (){try{while(true){
var result__27775__auto__ = switch__27772__auto__.call(null,state_30627);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27775__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27775__auto__;
}
break;
}
}catch (e30654){if((e30654 instanceof Object)){
var ex__27776__auto__ = e30654;
var statearr_30655_30676 = state_30627;
(statearr_30655_30676[(5)] = ex__27776__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30627);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30654;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27774__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30677 = state_30627;
state_30627 = G__30677;
continue;
} else {
return ret_value__27774__auto__;
}
break;
}
});
cljs$core$async$state_machine__27773__auto__ = function(state_30627){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27773__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27773__auto____1.call(this,state_30627);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27773__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27773__auto____0;
cljs$core$async$state_machine__27773__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27773__auto____1;
return cljs$core$async$state_machine__27773__auto__;
})()
;})(switch__27772__auto__,c__27884__auto___30661,out))
})();
var state__27886__auto__ = (function (){var statearr_30656 = f__27885__auto__.call(null);
(statearr_30656[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27884__auto___30661);

return statearr_30656;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27886__auto__);
});})(c__27884__auto___30661,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1520626834109