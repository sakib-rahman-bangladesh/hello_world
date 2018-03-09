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
var args27926 = [];
var len__25835__auto___27932 = arguments.length;
var i__25836__auto___27933 = (0);
while(true){
if((i__25836__auto___27933 < len__25835__auto___27932)){
args27926.push((arguments[i__25836__auto___27933]));

var G__27934 = (i__25836__auto___27933 + (1));
i__25836__auto___27933 = G__27934;
continue;
} else {
}
break;
}

var G__27928 = args27926.length;
switch (G__27928) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27926.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async27929 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27929 = (function (f,blockable,meta27930){
this.f = f;
this.blockable = blockable;
this.meta27930 = meta27930;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async27929.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27931,meta27930__$1){
var self__ = this;
var _27931__$1 = this;
return (new cljs.core.async.t_cljs$core$async27929(self__.f,self__.blockable,meta27930__$1));
});

cljs.core.async.t_cljs$core$async27929.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27931){
var self__ = this;
var _27931__$1 = this;
return self__.meta27930;
});

cljs.core.async.t_cljs$core$async27929.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async27929.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async27929.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async27929.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async27929.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta27930","meta27930",-1960678895,null)], null);
});

cljs.core.async.t_cljs$core$async27929.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27929.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27929";

cljs.core.async.t_cljs$core$async27929.cljs$lang$ctorPrWriter = (function (this__25366__auto__,writer__25367__auto__,opt__25368__auto__){
return cljs.core._write.call(null,writer__25367__auto__,"cljs.core.async/t_cljs$core$async27929");
});

cljs.core.async.__GT_t_cljs$core$async27929 = (function cljs$core$async$__GT_t_cljs$core$async27929(f__$1,blockable__$1,meta27930){
return (new cljs.core.async.t_cljs$core$async27929(f__$1,blockable__$1,meta27930));
});

}

return (new cljs.core.async.t_cljs$core$async27929(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var args27938 = [];
var len__25835__auto___27941 = arguments.length;
var i__25836__auto___27942 = (0);
while(true){
if((i__25836__auto___27942 < len__25835__auto___27941)){
args27938.push((arguments[i__25836__auto___27942]));

var G__27943 = (i__25836__auto___27942 + (1));
i__25836__auto___27942 = G__27943;
continue;
} else {
}
break;
}

var G__27940 = args27938.length;
switch (G__27940) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27938.length)].join('')));

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
var args27945 = [];
var len__25835__auto___27948 = arguments.length;
var i__25836__auto___27949 = (0);
while(true){
if((i__25836__auto___27949 < len__25835__auto___27948)){
args27945.push((arguments[i__25836__auto___27949]));

var G__27950 = (i__25836__auto___27949 + (1));
i__25836__auto___27949 = G__27950;
continue;
} else {
}
break;
}

var G__27947 = args27945.length;
switch (G__27947) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27945.length)].join('')));

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
var args27952 = [];
var len__25835__auto___27955 = arguments.length;
var i__25836__auto___27956 = (0);
while(true){
if((i__25836__auto___27956 < len__25835__auto___27955)){
args27952.push((arguments[i__25836__auto___27956]));

var G__27957 = (i__25836__auto___27956 + (1));
i__25836__auto___27956 = G__27957;
continue;
} else {
}
break;
}

var G__27954 = args27952.length;
switch (G__27954) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27952.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_27959 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_27959);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_27959,ret){
return (function (){
return fn1.call(null,val_27959);
});})(val_27959,ret))
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
var args27960 = [];
var len__25835__auto___27963 = arguments.length;
var i__25836__auto___27964 = (0);
while(true){
if((i__25836__auto___27964 < len__25835__auto___27963)){
args27960.push((arguments[i__25836__auto___27964]));

var G__27965 = (i__25836__auto___27964 + (1));
i__25836__auto___27964 = G__27965;
continue;
} else {
}
break;
}

var G__27962 = args27960.length;
switch (G__27962) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27960.length)].join('')));

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
var n__25675__auto___27967 = n;
var x_27968 = (0);
while(true){
if((x_27968 < n__25675__auto___27967)){
(a[x_27968] = (0));

var G__27969 = (x_27968 + (1));
x_27968 = G__27969;
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

var G__27970 = (i + (1));
i = G__27970;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async27974 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27974 = (function (alt_flag,flag,meta27975){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta27975 = meta27975;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async27974.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_27976,meta27975__$1){
var self__ = this;
var _27976__$1 = this;
return (new cljs.core.async.t_cljs$core$async27974(self__.alt_flag,self__.flag,meta27975__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async27974.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_27976){
var self__ = this;
var _27976__$1 = this;
return self__.meta27975;
});})(flag))
;

cljs.core.async.t_cljs$core$async27974.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async27974.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async27974.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async27974.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async27974.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta27975","meta27975",1972054916,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async27974.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27974.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27974";

cljs.core.async.t_cljs$core$async27974.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__25366__auto__,writer__25367__auto__,opt__25368__auto__){
return cljs.core._write.call(null,writer__25367__auto__,"cljs.core.async/t_cljs$core$async27974");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async27974 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async27974(alt_flag__$1,flag__$1,meta27975){
return (new cljs.core.async.t_cljs$core$async27974(alt_flag__$1,flag__$1,meta27975));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async27974(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async27980 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27980 = (function (alt_handler,flag,cb,meta27981){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta27981 = meta27981;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async27980.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27982,meta27981__$1){
var self__ = this;
var _27982__$1 = this;
return (new cljs.core.async.t_cljs$core$async27980(self__.alt_handler,self__.flag,self__.cb,meta27981__$1));
});

cljs.core.async.t_cljs$core$async27980.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27982){
var self__ = this;
var _27982__$1 = this;
return self__.meta27981;
});

cljs.core.async.t_cljs$core$async27980.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async27980.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async27980.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async27980.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async27980.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta27981","meta27981",-1906156765,null)], null);
});

cljs.core.async.t_cljs$core$async27980.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27980.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27980";

cljs.core.async.t_cljs$core$async27980.cljs$lang$ctorPrWriter = (function (this__25366__auto__,writer__25367__auto__,opt__25368__auto__){
return cljs.core._write.call(null,writer__25367__auto__,"cljs.core.async/t_cljs$core$async27980");
});

cljs.core.async.__GT_t_cljs$core$async27980 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async27980(alt_handler__$1,flag__$1,cb__$1,meta27981){
return (new cljs.core.async.t_cljs$core$async27980(alt_handler__$1,flag__$1,cb__$1,meta27981));
});

}

return (new cljs.core.async.t_cljs$core$async27980(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__27983_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__27983_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__27984_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__27984_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__24760__auto__ = wport;
if(cljs.core.truth_(or__24760__auto__)){
return or__24760__auto__;
} else {
return port;
}
})()], null));
} else {
var G__27985 = (i + (1));
i = G__27985;
continue;
}
} else {
return null;
}
break;
}
})();
var or__24760__auto__ = ret;
if(cljs.core.truth_(or__24760__auto__)){
return or__24760__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__24748__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__24748__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__24748__auto__;
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
var args__25842__auto__ = [];
var len__25835__auto___27991 = arguments.length;
var i__25836__auto___27992 = (0);
while(true){
if((i__25836__auto___27992 < len__25835__auto___27991)){
args__25842__auto__.push((arguments[i__25836__auto___27992]));

var G__27993 = (i__25836__auto___27992 + (1));
i__25836__auto___27992 = G__27993;
continue;
} else {
}
break;
}

var argseq__25843__auto__ = ((((1) < args__25842__auto__.length))?(new cljs.core.IndexedSeq(args__25842__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25843__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__27988){
var map__27989 = p__27988;
var map__27989__$1 = ((((!((map__27989 == null)))?((((map__27989.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27989.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27989):map__27989);
var opts = map__27989__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq27986){
var G__27987 = cljs.core.first.call(null,seq27986);
var seq27986__$1 = cljs.core.next.call(null,seq27986);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__27987,seq27986__$1);
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
var args27994 = [];
var len__25835__auto___28044 = arguments.length;
var i__25836__auto___28045 = (0);
while(true){
if((i__25836__auto___28045 < len__25835__auto___28044)){
args27994.push((arguments[i__25836__auto___28045]));

var G__28046 = (i__25836__auto___28045 + (1));
i__25836__auto___28045 = G__28046;
continue;
} else {
}
break;
}

var G__27996 = args27994.length;
switch (G__27996) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27994.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__27881__auto___28048 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27881__auto___28048){
return (function (){
var f__27882__auto__ = (function (){var switch__27769__auto__ = ((function (c__27881__auto___28048){
return (function (state_28020){
var state_val_28021 = (state_28020[(1)]);
if((state_val_28021 === (7))){
var inst_28016 = (state_28020[(2)]);
var state_28020__$1 = state_28020;
var statearr_28022_28049 = state_28020__$1;
(statearr_28022_28049[(2)] = inst_28016);

(statearr_28022_28049[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28021 === (1))){
var state_28020__$1 = state_28020;
var statearr_28023_28050 = state_28020__$1;
(statearr_28023_28050[(2)] = null);

(statearr_28023_28050[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28021 === (4))){
var inst_27999 = (state_28020[(7)]);
var inst_27999__$1 = (state_28020[(2)]);
var inst_28000 = (inst_27999__$1 == null);
var state_28020__$1 = (function (){var statearr_28024 = state_28020;
(statearr_28024[(7)] = inst_27999__$1);

return statearr_28024;
})();
if(cljs.core.truth_(inst_28000)){
var statearr_28025_28051 = state_28020__$1;
(statearr_28025_28051[(1)] = (5));

} else {
var statearr_28026_28052 = state_28020__$1;
(statearr_28026_28052[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28021 === (13))){
var state_28020__$1 = state_28020;
var statearr_28027_28053 = state_28020__$1;
(statearr_28027_28053[(2)] = null);

(statearr_28027_28053[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28021 === (6))){
var inst_27999 = (state_28020[(7)]);
var state_28020__$1 = state_28020;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28020__$1,(11),to,inst_27999);
} else {
if((state_val_28021 === (3))){
var inst_28018 = (state_28020[(2)]);
var state_28020__$1 = state_28020;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28020__$1,inst_28018);
} else {
if((state_val_28021 === (12))){
var state_28020__$1 = state_28020;
var statearr_28028_28054 = state_28020__$1;
(statearr_28028_28054[(2)] = null);

(statearr_28028_28054[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28021 === (2))){
var state_28020__$1 = state_28020;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28020__$1,(4),from);
} else {
if((state_val_28021 === (11))){
var inst_28009 = (state_28020[(2)]);
var state_28020__$1 = state_28020;
if(cljs.core.truth_(inst_28009)){
var statearr_28029_28055 = state_28020__$1;
(statearr_28029_28055[(1)] = (12));

} else {
var statearr_28030_28056 = state_28020__$1;
(statearr_28030_28056[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28021 === (9))){
var state_28020__$1 = state_28020;
var statearr_28031_28057 = state_28020__$1;
(statearr_28031_28057[(2)] = null);

(statearr_28031_28057[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28021 === (5))){
var state_28020__$1 = state_28020;
if(cljs.core.truth_(close_QMARK_)){
var statearr_28032_28058 = state_28020__$1;
(statearr_28032_28058[(1)] = (8));

} else {
var statearr_28033_28059 = state_28020__$1;
(statearr_28033_28059[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28021 === (14))){
var inst_28014 = (state_28020[(2)]);
var state_28020__$1 = state_28020;
var statearr_28034_28060 = state_28020__$1;
(statearr_28034_28060[(2)] = inst_28014);

(statearr_28034_28060[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28021 === (10))){
var inst_28006 = (state_28020[(2)]);
var state_28020__$1 = state_28020;
var statearr_28035_28061 = state_28020__$1;
(statearr_28035_28061[(2)] = inst_28006);

(statearr_28035_28061[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28021 === (8))){
var inst_28003 = cljs.core.async.close_BANG_.call(null,to);
var state_28020__$1 = state_28020;
var statearr_28036_28062 = state_28020__$1;
(statearr_28036_28062[(2)] = inst_28003);

(statearr_28036_28062[(1)] = (10));


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
});})(c__27881__auto___28048))
;
return ((function (switch__27769__auto__,c__27881__auto___28048){
return (function() {
var cljs$core$async$state_machine__27770__auto__ = null;
var cljs$core$async$state_machine__27770__auto____0 = (function (){
var statearr_28040 = [null,null,null,null,null,null,null,null];
(statearr_28040[(0)] = cljs$core$async$state_machine__27770__auto__);

(statearr_28040[(1)] = (1));

return statearr_28040;
});
var cljs$core$async$state_machine__27770__auto____1 = (function (state_28020){
while(true){
var ret_value__27771__auto__ = (function (){try{while(true){
var result__27772__auto__ = switch__27769__auto__.call(null,state_28020);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27772__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27772__auto__;
}
break;
}
}catch (e28041){if((e28041 instanceof Object)){
var ex__27773__auto__ = e28041;
var statearr_28042_28063 = state_28020;
(statearr_28042_28063[(5)] = ex__27773__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28020);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28041;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27771__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28064 = state_28020;
state_28020 = G__28064;
continue;
} else {
return ret_value__27771__auto__;
}
break;
}
});
cljs$core$async$state_machine__27770__auto__ = function(state_28020){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27770__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27770__auto____1.call(this,state_28020);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27770__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27770__auto____0;
cljs$core$async$state_machine__27770__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27770__auto____1;
return cljs$core$async$state_machine__27770__auto__;
})()
;})(switch__27769__auto__,c__27881__auto___28048))
})();
var state__27883__auto__ = (function (){var statearr_28043 = f__27882__auto__.call(null);
(statearr_28043[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27881__auto___28048);

return statearr_28043;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27883__auto__);
});})(c__27881__auto___28048))
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
return (function (p__28252){
var vec__28253 = p__28252;
var v = cljs.core.nth.call(null,vec__28253,(0),null);
var p = cljs.core.nth.call(null,vec__28253,(1),null);
var job = vec__28253;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__27881__auto___28439 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27881__auto___28439,res,vec__28253,v,p,job,jobs,results){
return (function (){
var f__27882__auto__ = (function (){var switch__27769__auto__ = ((function (c__27881__auto___28439,res,vec__28253,v,p,job,jobs,results){
return (function (state_28260){
var state_val_28261 = (state_28260[(1)]);
if((state_val_28261 === (1))){
var state_28260__$1 = state_28260;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28260__$1,(2),res,v);
} else {
if((state_val_28261 === (2))){
var inst_28257 = (state_28260[(2)]);
var inst_28258 = cljs.core.async.close_BANG_.call(null,res);
var state_28260__$1 = (function (){var statearr_28262 = state_28260;
(statearr_28262[(7)] = inst_28257);

return statearr_28262;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28260__$1,inst_28258);
} else {
return null;
}
}
});})(c__27881__auto___28439,res,vec__28253,v,p,job,jobs,results))
;
return ((function (switch__27769__auto__,c__27881__auto___28439,res,vec__28253,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27770__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27770__auto____0 = (function (){
var statearr_28266 = [null,null,null,null,null,null,null,null];
(statearr_28266[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27770__auto__);

(statearr_28266[(1)] = (1));

return statearr_28266;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27770__auto____1 = (function (state_28260){
while(true){
var ret_value__27771__auto__ = (function (){try{while(true){
var result__27772__auto__ = switch__27769__auto__.call(null,state_28260);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27772__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27772__auto__;
}
break;
}
}catch (e28267){if((e28267 instanceof Object)){
var ex__27773__auto__ = e28267;
var statearr_28268_28440 = state_28260;
(statearr_28268_28440[(5)] = ex__27773__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28260);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28267;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27771__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28441 = state_28260;
state_28260 = G__28441;
continue;
} else {
return ret_value__27771__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27770__auto__ = function(state_28260){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27770__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27770__auto____1.call(this,state_28260);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27770__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27770__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27770__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27770__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27770__auto__;
})()
;})(switch__27769__auto__,c__27881__auto___28439,res,vec__28253,v,p,job,jobs,results))
})();
var state__27883__auto__ = (function (){var statearr_28269 = f__27882__auto__.call(null);
(statearr_28269[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27881__auto___28439);

return statearr_28269;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27883__auto__);
});})(c__27881__auto___28439,res,vec__28253,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__28270){
var vec__28271 = p__28270;
var v = cljs.core.nth.call(null,vec__28271,(0),null);
var p = cljs.core.nth.call(null,vec__28271,(1),null);
var job = vec__28271;
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
var n__25675__auto___28442 = n;
var __28443 = (0);
while(true){
if((__28443 < n__25675__auto___28442)){
var G__28274_28444 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__28274_28444) {
case "compute":
var c__27881__auto___28446 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__28443,c__27881__auto___28446,G__28274_28444,n__25675__auto___28442,jobs,results,process,async){
return (function (){
var f__27882__auto__ = (function (){var switch__27769__auto__ = ((function (__28443,c__27881__auto___28446,G__28274_28444,n__25675__auto___28442,jobs,results,process,async){
return (function (state_28287){
var state_val_28288 = (state_28287[(1)]);
if((state_val_28288 === (1))){
var state_28287__$1 = state_28287;
var statearr_28289_28447 = state_28287__$1;
(statearr_28289_28447[(2)] = null);

(statearr_28289_28447[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28288 === (2))){
var state_28287__$1 = state_28287;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28287__$1,(4),jobs);
} else {
if((state_val_28288 === (3))){
var inst_28285 = (state_28287[(2)]);
var state_28287__$1 = state_28287;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28287__$1,inst_28285);
} else {
if((state_val_28288 === (4))){
var inst_28277 = (state_28287[(2)]);
var inst_28278 = process.call(null,inst_28277);
var state_28287__$1 = state_28287;
if(cljs.core.truth_(inst_28278)){
var statearr_28290_28448 = state_28287__$1;
(statearr_28290_28448[(1)] = (5));

} else {
var statearr_28291_28449 = state_28287__$1;
(statearr_28291_28449[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28288 === (5))){
var state_28287__$1 = state_28287;
var statearr_28292_28450 = state_28287__$1;
(statearr_28292_28450[(2)] = null);

(statearr_28292_28450[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28288 === (6))){
var state_28287__$1 = state_28287;
var statearr_28293_28451 = state_28287__$1;
(statearr_28293_28451[(2)] = null);

(statearr_28293_28451[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28288 === (7))){
var inst_28283 = (state_28287[(2)]);
var state_28287__$1 = state_28287;
var statearr_28294_28452 = state_28287__$1;
(statearr_28294_28452[(2)] = inst_28283);

(statearr_28294_28452[(1)] = (3));


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
});})(__28443,c__27881__auto___28446,G__28274_28444,n__25675__auto___28442,jobs,results,process,async))
;
return ((function (__28443,switch__27769__auto__,c__27881__auto___28446,G__28274_28444,n__25675__auto___28442,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27770__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27770__auto____0 = (function (){
var statearr_28298 = [null,null,null,null,null,null,null];
(statearr_28298[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27770__auto__);

(statearr_28298[(1)] = (1));

return statearr_28298;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27770__auto____1 = (function (state_28287){
while(true){
var ret_value__27771__auto__ = (function (){try{while(true){
var result__27772__auto__ = switch__27769__auto__.call(null,state_28287);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27772__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27772__auto__;
}
break;
}
}catch (e28299){if((e28299 instanceof Object)){
var ex__27773__auto__ = e28299;
var statearr_28300_28453 = state_28287;
(statearr_28300_28453[(5)] = ex__27773__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28287);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28299;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27771__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28454 = state_28287;
state_28287 = G__28454;
continue;
} else {
return ret_value__27771__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27770__auto__ = function(state_28287){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27770__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27770__auto____1.call(this,state_28287);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27770__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27770__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27770__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27770__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27770__auto__;
})()
;})(__28443,switch__27769__auto__,c__27881__auto___28446,G__28274_28444,n__25675__auto___28442,jobs,results,process,async))
})();
var state__27883__auto__ = (function (){var statearr_28301 = f__27882__auto__.call(null);
(statearr_28301[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27881__auto___28446);

return statearr_28301;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27883__auto__);
});})(__28443,c__27881__auto___28446,G__28274_28444,n__25675__auto___28442,jobs,results,process,async))
);


break;
case "async":
var c__27881__auto___28455 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__28443,c__27881__auto___28455,G__28274_28444,n__25675__auto___28442,jobs,results,process,async){
return (function (){
var f__27882__auto__ = (function (){var switch__27769__auto__ = ((function (__28443,c__27881__auto___28455,G__28274_28444,n__25675__auto___28442,jobs,results,process,async){
return (function (state_28314){
var state_val_28315 = (state_28314[(1)]);
if((state_val_28315 === (1))){
var state_28314__$1 = state_28314;
var statearr_28316_28456 = state_28314__$1;
(statearr_28316_28456[(2)] = null);

(statearr_28316_28456[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28315 === (2))){
var state_28314__$1 = state_28314;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28314__$1,(4),jobs);
} else {
if((state_val_28315 === (3))){
var inst_28312 = (state_28314[(2)]);
var state_28314__$1 = state_28314;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28314__$1,inst_28312);
} else {
if((state_val_28315 === (4))){
var inst_28304 = (state_28314[(2)]);
var inst_28305 = async.call(null,inst_28304);
var state_28314__$1 = state_28314;
if(cljs.core.truth_(inst_28305)){
var statearr_28317_28457 = state_28314__$1;
(statearr_28317_28457[(1)] = (5));

} else {
var statearr_28318_28458 = state_28314__$1;
(statearr_28318_28458[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28315 === (5))){
var state_28314__$1 = state_28314;
var statearr_28319_28459 = state_28314__$1;
(statearr_28319_28459[(2)] = null);

(statearr_28319_28459[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28315 === (6))){
var state_28314__$1 = state_28314;
var statearr_28320_28460 = state_28314__$1;
(statearr_28320_28460[(2)] = null);

(statearr_28320_28460[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28315 === (7))){
var inst_28310 = (state_28314[(2)]);
var state_28314__$1 = state_28314;
var statearr_28321_28461 = state_28314__$1;
(statearr_28321_28461[(2)] = inst_28310);

(statearr_28321_28461[(1)] = (3));


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
});})(__28443,c__27881__auto___28455,G__28274_28444,n__25675__auto___28442,jobs,results,process,async))
;
return ((function (__28443,switch__27769__auto__,c__27881__auto___28455,G__28274_28444,n__25675__auto___28442,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27770__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27770__auto____0 = (function (){
var statearr_28325 = [null,null,null,null,null,null,null];
(statearr_28325[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27770__auto__);

(statearr_28325[(1)] = (1));

return statearr_28325;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27770__auto____1 = (function (state_28314){
while(true){
var ret_value__27771__auto__ = (function (){try{while(true){
var result__27772__auto__ = switch__27769__auto__.call(null,state_28314);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27772__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27772__auto__;
}
break;
}
}catch (e28326){if((e28326 instanceof Object)){
var ex__27773__auto__ = e28326;
var statearr_28327_28462 = state_28314;
(statearr_28327_28462[(5)] = ex__27773__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28314);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28326;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27771__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28463 = state_28314;
state_28314 = G__28463;
continue;
} else {
return ret_value__27771__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27770__auto__ = function(state_28314){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27770__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27770__auto____1.call(this,state_28314);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27770__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27770__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27770__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27770__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27770__auto__;
})()
;})(__28443,switch__27769__auto__,c__27881__auto___28455,G__28274_28444,n__25675__auto___28442,jobs,results,process,async))
})();
var state__27883__auto__ = (function (){var statearr_28328 = f__27882__auto__.call(null);
(statearr_28328[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27881__auto___28455);

return statearr_28328;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27883__auto__);
});})(__28443,c__27881__auto___28455,G__28274_28444,n__25675__auto___28442,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__28464 = (__28443 + (1));
__28443 = G__28464;
continue;
} else {
}
break;
}

var c__27881__auto___28465 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27881__auto___28465,jobs,results,process,async){
return (function (){
var f__27882__auto__ = (function (){var switch__27769__auto__ = ((function (c__27881__auto___28465,jobs,results,process,async){
return (function (state_28350){
var state_val_28351 = (state_28350[(1)]);
if((state_val_28351 === (1))){
var state_28350__$1 = state_28350;
var statearr_28352_28466 = state_28350__$1;
(statearr_28352_28466[(2)] = null);

(statearr_28352_28466[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28351 === (2))){
var state_28350__$1 = state_28350;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28350__$1,(4),from);
} else {
if((state_val_28351 === (3))){
var inst_28348 = (state_28350[(2)]);
var state_28350__$1 = state_28350;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28350__$1,inst_28348);
} else {
if((state_val_28351 === (4))){
var inst_28331 = (state_28350[(7)]);
var inst_28331__$1 = (state_28350[(2)]);
var inst_28332 = (inst_28331__$1 == null);
var state_28350__$1 = (function (){var statearr_28353 = state_28350;
(statearr_28353[(7)] = inst_28331__$1);

return statearr_28353;
})();
if(cljs.core.truth_(inst_28332)){
var statearr_28354_28467 = state_28350__$1;
(statearr_28354_28467[(1)] = (5));

} else {
var statearr_28355_28468 = state_28350__$1;
(statearr_28355_28468[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28351 === (5))){
var inst_28334 = cljs.core.async.close_BANG_.call(null,jobs);
var state_28350__$1 = state_28350;
var statearr_28356_28469 = state_28350__$1;
(statearr_28356_28469[(2)] = inst_28334);

(statearr_28356_28469[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28351 === (6))){
var inst_28331 = (state_28350[(7)]);
var inst_28336 = (state_28350[(8)]);
var inst_28336__$1 = cljs.core.async.chan.call(null,(1));
var inst_28337 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_28338 = [inst_28331,inst_28336__$1];
var inst_28339 = (new cljs.core.PersistentVector(null,2,(5),inst_28337,inst_28338,null));
var state_28350__$1 = (function (){var statearr_28357 = state_28350;
(statearr_28357[(8)] = inst_28336__$1);

return statearr_28357;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28350__$1,(8),jobs,inst_28339);
} else {
if((state_val_28351 === (7))){
var inst_28346 = (state_28350[(2)]);
var state_28350__$1 = state_28350;
var statearr_28358_28470 = state_28350__$1;
(statearr_28358_28470[(2)] = inst_28346);

(statearr_28358_28470[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28351 === (8))){
var inst_28336 = (state_28350[(8)]);
var inst_28341 = (state_28350[(2)]);
var state_28350__$1 = (function (){var statearr_28359 = state_28350;
(statearr_28359[(9)] = inst_28341);

return statearr_28359;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28350__$1,(9),results,inst_28336);
} else {
if((state_val_28351 === (9))){
var inst_28343 = (state_28350[(2)]);
var state_28350__$1 = (function (){var statearr_28360 = state_28350;
(statearr_28360[(10)] = inst_28343);

return statearr_28360;
})();
var statearr_28361_28471 = state_28350__$1;
(statearr_28361_28471[(2)] = null);

(statearr_28361_28471[(1)] = (2));


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
});})(c__27881__auto___28465,jobs,results,process,async))
;
return ((function (switch__27769__auto__,c__27881__auto___28465,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27770__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27770__auto____0 = (function (){
var statearr_28365 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28365[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27770__auto__);

(statearr_28365[(1)] = (1));

return statearr_28365;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27770__auto____1 = (function (state_28350){
while(true){
var ret_value__27771__auto__ = (function (){try{while(true){
var result__27772__auto__ = switch__27769__auto__.call(null,state_28350);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27772__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27772__auto__;
}
break;
}
}catch (e28366){if((e28366 instanceof Object)){
var ex__27773__auto__ = e28366;
var statearr_28367_28472 = state_28350;
(statearr_28367_28472[(5)] = ex__27773__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28350);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28366;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27771__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28473 = state_28350;
state_28350 = G__28473;
continue;
} else {
return ret_value__27771__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27770__auto__ = function(state_28350){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27770__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27770__auto____1.call(this,state_28350);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27770__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27770__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27770__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27770__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27770__auto__;
})()
;})(switch__27769__auto__,c__27881__auto___28465,jobs,results,process,async))
})();
var state__27883__auto__ = (function (){var statearr_28368 = f__27882__auto__.call(null);
(statearr_28368[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27881__auto___28465);

return statearr_28368;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27883__auto__);
});})(c__27881__auto___28465,jobs,results,process,async))
);


var c__27881__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27881__auto__,jobs,results,process,async){
return (function (){
var f__27882__auto__ = (function (){var switch__27769__auto__ = ((function (c__27881__auto__,jobs,results,process,async){
return (function (state_28406){
var state_val_28407 = (state_28406[(1)]);
if((state_val_28407 === (7))){
var inst_28402 = (state_28406[(2)]);
var state_28406__$1 = state_28406;
var statearr_28408_28474 = state_28406__$1;
(statearr_28408_28474[(2)] = inst_28402);

(statearr_28408_28474[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28407 === (20))){
var state_28406__$1 = state_28406;
var statearr_28409_28475 = state_28406__$1;
(statearr_28409_28475[(2)] = null);

(statearr_28409_28475[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28407 === (1))){
var state_28406__$1 = state_28406;
var statearr_28410_28476 = state_28406__$1;
(statearr_28410_28476[(2)] = null);

(statearr_28410_28476[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28407 === (4))){
var inst_28371 = (state_28406[(7)]);
var inst_28371__$1 = (state_28406[(2)]);
var inst_28372 = (inst_28371__$1 == null);
var state_28406__$1 = (function (){var statearr_28411 = state_28406;
(statearr_28411[(7)] = inst_28371__$1);

return statearr_28411;
})();
if(cljs.core.truth_(inst_28372)){
var statearr_28412_28477 = state_28406__$1;
(statearr_28412_28477[(1)] = (5));

} else {
var statearr_28413_28478 = state_28406__$1;
(statearr_28413_28478[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28407 === (15))){
var inst_28384 = (state_28406[(8)]);
var state_28406__$1 = state_28406;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28406__$1,(18),to,inst_28384);
} else {
if((state_val_28407 === (21))){
var inst_28397 = (state_28406[(2)]);
var state_28406__$1 = state_28406;
var statearr_28414_28479 = state_28406__$1;
(statearr_28414_28479[(2)] = inst_28397);

(statearr_28414_28479[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28407 === (13))){
var inst_28399 = (state_28406[(2)]);
var state_28406__$1 = (function (){var statearr_28415 = state_28406;
(statearr_28415[(9)] = inst_28399);

return statearr_28415;
})();
var statearr_28416_28480 = state_28406__$1;
(statearr_28416_28480[(2)] = null);

(statearr_28416_28480[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28407 === (6))){
var inst_28371 = (state_28406[(7)]);
var state_28406__$1 = state_28406;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28406__$1,(11),inst_28371);
} else {
if((state_val_28407 === (17))){
var inst_28392 = (state_28406[(2)]);
var state_28406__$1 = state_28406;
if(cljs.core.truth_(inst_28392)){
var statearr_28417_28481 = state_28406__$1;
(statearr_28417_28481[(1)] = (19));

} else {
var statearr_28418_28482 = state_28406__$1;
(statearr_28418_28482[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28407 === (3))){
var inst_28404 = (state_28406[(2)]);
var state_28406__$1 = state_28406;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28406__$1,inst_28404);
} else {
if((state_val_28407 === (12))){
var inst_28381 = (state_28406[(10)]);
var state_28406__$1 = state_28406;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28406__$1,(14),inst_28381);
} else {
if((state_val_28407 === (2))){
var state_28406__$1 = state_28406;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28406__$1,(4),results);
} else {
if((state_val_28407 === (19))){
var state_28406__$1 = state_28406;
var statearr_28419_28483 = state_28406__$1;
(statearr_28419_28483[(2)] = null);

(statearr_28419_28483[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28407 === (11))){
var inst_28381 = (state_28406[(2)]);
var state_28406__$1 = (function (){var statearr_28420 = state_28406;
(statearr_28420[(10)] = inst_28381);

return statearr_28420;
})();
var statearr_28421_28484 = state_28406__$1;
(statearr_28421_28484[(2)] = null);

(statearr_28421_28484[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28407 === (9))){
var state_28406__$1 = state_28406;
var statearr_28422_28485 = state_28406__$1;
(statearr_28422_28485[(2)] = null);

(statearr_28422_28485[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28407 === (5))){
var state_28406__$1 = state_28406;
if(cljs.core.truth_(close_QMARK_)){
var statearr_28423_28486 = state_28406__$1;
(statearr_28423_28486[(1)] = (8));

} else {
var statearr_28424_28487 = state_28406__$1;
(statearr_28424_28487[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28407 === (14))){
var inst_28384 = (state_28406[(8)]);
var inst_28386 = (state_28406[(11)]);
var inst_28384__$1 = (state_28406[(2)]);
var inst_28385 = (inst_28384__$1 == null);
var inst_28386__$1 = cljs.core.not.call(null,inst_28385);
var state_28406__$1 = (function (){var statearr_28425 = state_28406;
(statearr_28425[(8)] = inst_28384__$1);

(statearr_28425[(11)] = inst_28386__$1);

return statearr_28425;
})();
if(inst_28386__$1){
var statearr_28426_28488 = state_28406__$1;
(statearr_28426_28488[(1)] = (15));

} else {
var statearr_28427_28489 = state_28406__$1;
(statearr_28427_28489[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28407 === (16))){
var inst_28386 = (state_28406[(11)]);
var state_28406__$1 = state_28406;
var statearr_28428_28490 = state_28406__$1;
(statearr_28428_28490[(2)] = inst_28386);

(statearr_28428_28490[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28407 === (10))){
var inst_28378 = (state_28406[(2)]);
var state_28406__$1 = state_28406;
var statearr_28429_28491 = state_28406__$1;
(statearr_28429_28491[(2)] = inst_28378);

(statearr_28429_28491[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28407 === (18))){
var inst_28389 = (state_28406[(2)]);
var state_28406__$1 = state_28406;
var statearr_28430_28492 = state_28406__$1;
(statearr_28430_28492[(2)] = inst_28389);

(statearr_28430_28492[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28407 === (8))){
var inst_28375 = cljs.core.async.close_BANG_.call(null,to);
var state_28406__$1 = state_28406;
var statearr_28431_28493 = state_28406__$1;
(statearr_28431_28493[(2)] = inst_28375);

(statearr_28431_28493[(1)] = (10));


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
});})(c__27881__auto__,jobs,results,process,async))
;
return ((function (switch__27769__auto__,c__27881__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27770__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27770__auto____0 = (function (){
var statearr_28435 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28435[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27770__auto__);

(statearr_28435[(1)] = (1));

return statearr_28435;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27770__auto____1 = (function (state_28406){
while(true){
var ret_value__27771__auto__ = (function (){try{while(true){
var result__27772__auto__ = switch__27769__auto__.call(null,state_28406);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27772__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27772__auto__;
}
break;
}
}catch (e28436){if((e28436 instanceof Object)){
var ex__27773__auto__ = e28436;
var statearr_28437_28494 = state_28406;
(statearr_28437_28494[(5)] = ex__27773__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28406);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28436;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27771__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28495 = state_28406;
state_28406 = G__28495;
continue;
} else {
return ret_value__27771__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27770__auto__ = function(state_28406){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27770__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27770__auto____1.call(this,state_28406);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27770__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27770__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27770__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27770__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27770__auto__;
})()
;})(switch__27769__auto__,c__27881__auto__,jobs,results,process,async))
})();
var state__27883__auto__ = (function (){var statearr_28438 = f__27882__auto__.call(null);
(statearr_28438[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27881__auto__);

return statearr_28438;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27883__auto__);
});})(c__27881__auto__,jobs,results,process,async))
);

return c__27881__auto__;
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
var args28496 = [];
var len__25835__auto___28499 = arguments.length;
var i__25836__auto___28500 = (0);
while(true){
if((i__25836__auto___28500 < len__25835__auto___28499)){
args28496.push((arguments[i__25836__auto___28500]));

var G__28501 = (i__25836__auto___28500 + (1));
i__25836__auto___28500 = G__28501;
continue;
} else {
}
break;
}

var G__28498 = args28496.length;
switch (G__28498) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28496.length)].join('')));

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
var args28503 = [];
var len__25835__auto___28506 = arguments.length;
var i__25836__auto___28507 = (0);
while(true){
if((i__25836__auto___28507 < len__25835__auto___28506)){
args28503.push((arguments[i__25836__auto___28507]));

var G__28508 = (i__25836__auto___28507 + (1));
i__25836__auto___28507 = G__28508;
continue;
} else {
}
break;
}

var G__28505 = args28503.length;
switch (G__28505) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28503.length)].join('')));

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
var args28510 = [];
var len__25835__auto___28563 = arguments.length;
var i__25836__auto___28564 = (0);
while(true){
if((i__25836__auto___28564 < len__25835__auto___28563)){
args28510.push((arguments[i__25836__auto___28564]));

var G__28565 = (i__25836__auto___28564 + (1));
i__25836__auto___28564 = G__28565;
continue;
} else {
}
break;
}

var G__28512 = args28510.length;
switch (G__28512) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28510.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__27881__auto___28567 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27881__auto___28567,tc,fc){
return (function (){
var f__27882__auto__ = (function (){var switch__27769__auto__ = ((function (c__27881__auto___28567,tc,fc){
return (function (state_28538){
var state_val_28539 = (state_28538[(1)]);
if((state_val_28539 === (7))){
var inst_28534 = (state_28538[(2)]);
var state_28538__$1 = state_28538;
var statearr_28540_28568 = state_28538__$1;
(statearr_28540_28568[(2)] = inst_28534);

(statearr_28540_28568[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28539 === (1))){
var state_28538__$1 = state_28538;
var statearr_28541_28569 = state_28538__$1;
(statearr_28541_28569[(2)] = null);

(statearr_28541_28569[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28539 === (4))){
var inst_28515 = (state_28538[(7)]);
var inst_28515__$1 = (state_28538[(2)]);
var inst_28516 = (inst_28515__$1 == null);
var state_28538__$1 = (function (){var statearr_28542 = state_28538;
(statearr_28542[(7)] = inst_28515__$1);

return statearr_28542;
})();
if(cljs.core.truth_(inst_28516)){
var statearr_28543_28570 = state_28538__$1;
(statearr_28543_28570[(1)] = (5));

} else {
var statearr_28544_28571 = state_28538__$1;
(statearr_28544_28571[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28539 === (13))){
var state_28538__$1 = state_28538;
var statearr_28545_28572 = state_28538__$1;
(statearr_28545_28572[(2)] = null);

(statearr_28545_28572[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28539 === (6))){
var inst_28515 = (state_28538[(7)]);
var inst_28521 = p.call(null,inst_28515);
var state_28538__$1 = state_28538;
if(cljs.core.truth_(inst_28521)){
var statearr_28546_28573 = state_28538__$1;
(statearr_28546_28573[(1)] = (9));

} else {
var statearr_28547_28574 = state_28538__$1;
(statearr_28547_28574[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28539 === (3))){
var inst_28536 = (state_28538[(2)]);
var state_28538__$1 = state_28538;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28538__$1,inst_28536);
} else {
if((state_val_28539 === (12))){
var state_28538__$1 = state_28538;
var statearr_28548_28575 = state_28538__$1;
(statearr_28548_28575[(2)] = null);

(statearr_28548_28575[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28539 === (2))){
var state_28538__$1 = state_28538;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28538__$1,(4),ch);
} else {
if((state_val_28539 === (11))){
var inst_28515 = (state_28538[(7)]);
var inst_28525 = (state_28538[(2)]);
var state_28538__$1 = state_28538;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28538__$1,(8),inst_28525,inst_28515);
} else {
if((state_val_28539 === (9))){
var state_28538__$1 = state_28538;
var statearr_28549_28576 = state_28538__$1;
(statearr_28549_28576[(2)] = tc);

(statearr_28549_28576[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28539 === (5))){
var inst_28518 = cljs.core.async.close_BANG_.call(null,tc);
var inst_28519 = cljs.core.async.close_BANG_.call(null,fc);
var state_28538__$1 = (function (){var statearr_28550 = state_28538;
(statearr_28550[(8)] = inst_28518);

return statearr_28550;
})();
var statearr_28551_28577 = state_28538__$1;
(statearr_28551_28577[(2)] = inst_28519);

(statearr_28551_28577[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28539 === (14))){
var inst_28532 = (state_28538[(2)]);
var state_28538__$1 = state_28538;
var statearr_28552_28578 = state_28538__$1;
(statearr_28552_28578[(2)] = inst_28532);

(statearr_28552_28578[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28539 === (10))){
var state_28538__$1 = state_28538;
var statearr_28553_28579 = state_28538__$1;
(statearr_28553_28579[(2)] = fc);

(statearr_28553_28579[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28539 === (8))){
var inst_28527 = (state_28538[(2)]);
var state_28538__$1 = state_28538;
if(cljs.core.truth_(inst_28527)){
var statearr_28554_28580 = state_28538__$1;
(statearr_28554_28580[(1)] = (12));

} else {
var statearr_28555_28581 = state_28538__$1;
(statearr_28555_28581[(1)] = (13));

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
});})(c__27881__auto___28567,tc,fc))
;
return ((function (switch__27769__auto__,c__27881__auto___28567,tc,fc){
return (function() {
var cljs$core$async$state_machine__27770__auto__ = null;
var cljs$core$async$state_machine__27770__auto____0 = (function (){
var statearr_28559 = [null,null,null,null,null,null,null,null,null];
(statearr_28559[(0)] = cljs$core$async$state_machine__27770__auto__);

(statearr_28559[(1)] = (1));

return statearr_28559;
});
var cljs$core$async$state_machine__27770__auto____1 = (function (state_28538){
while(true){
var ret_value__27771__auto__ = (function (){try{while(true){
var result__27772__auto__ = switch__27769__auto__.call(null,state_28538);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27772__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27772__auto__;
}
break;
}
}catch (e28560){if((e28560 instanceof Object)){
var ex__27773__auto__ = e28560;
var statearr_28561_28582 = state_28538;
(statearr_28561_28582[(5)] = ex__27773__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28538);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28560;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27771__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28583 = state_28538;
state_28538 = G__28583;
continue;
} else {
return ret_value__27771__auto__;
}
break;
}
});
cljs$core$async$state_machine__27770__auto__ = function(state_28538){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27770__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27770__auto____1.call(this,state_28538);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27770__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27770__auto____0;
cljs$core$async$state_machine__27770__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27770__auto____1;
return cljs$core$async$state_machine__27770__auto__;
})()
;})(switch__27769__auto__,c__27881__auto___28567,tc,fc))
})();
var state__27883__auto__ = (function (){var statearr_28562 = f__27882__auto__.call(null);
(statearr_28562[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27881__auto___28567);

return statearr_28562;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27883__auto__);
});})(c__27881__auto___28567,tc,fc))
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
var c__27881__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27881__auto__){
return (function (){
var f__27882__auto__ = (function (){var switch__27769__auto__ = ((function (c__27881__auto__){
return (function (state_28647){
var state_val_28648 = (state_28647[(1)]);
if((state_val_28648 === (7))){
var inst_28643 = (state_28647[(2)]);
var state_28647__$1 = state_28647;
var statearr_28649_28670 = state_28647__$1;
(statearr_28649_28670[(2)] = inst_28643);

(statearr_28649_28670[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28648 === (1))){
var inst_28627 = init;
var state_28647__$1 = (function (){var statearr_28650 = state_28647;
(statearr_28650[(7)] = inst_28627);

return statearr_28650;
})();
var statearr_28651_28671 = state_28647__$1;
(statearr_28651_28671[(2)] = null);

(statearr_28651_28671[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28648 === (4))){
var inst_28630 = (state_28647[(8)]);
var inst_28630__$1 = (state_28647[(2)]);
var inst_28631 = (inst_28630__$1 == null);
var state_28647__$1 = (function (){var statearr_28652 = state_28647;
(statearr_28652[(8)] = inst_28630__$1);

return statearr_28652;
})();
if(cljs.core.truth_(inst_28631)){
var statearr_28653_28672 = state_28647__$1;
(statearr_28653_28672[(1)] = (5));

} else {
var statearr_28654_28673 = state_28647__$1;
(statearr_28654_28673[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28648 === (6))){
var inst_28630 = (state_28647[(8)]);
var inst_28634 = (state_28647[(9)]);
var inst_28627 = (state_28647[(7)]);
var inst_28634__$1 = f.call(null,inst_28627,inst_28630);
var inst_28635 = cljs.core.reduced_QMARK_.call(null,inst_28634__$1);
var state_28647__$1 = (function (){var statearr_28655 = state_28647;
(statearr_28655[(9)] = inst_28634__$1);

return statearr_28655;
})();
if(inst_28635){
var statearr_28656_28674 = state_28647__$1;
(statearr_28656_28674[(1)] = (8));

} else {
var statearr_28657_28675 = state_28647__$1;
(statearr_28657_28675[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28648 === (3))){
var inst_28645 = (state_28647[(2)]);
var state_28647__$1 = state_28647;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28647__$1,inst_28645);
} else {
if((state_val_28648 === (2))){
var state_28647__$1 = state_28647;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28647__$1,(4),ch);
} else {
if((state_val_28648 === (9))){
var inst_28634 = (state_28647[(9)]);
var inst_28627 = inst_28634;
var state_28647__$1 = (function (){var statearr_28658 = state_28647;
(statearr_28658[(7)] = inst_28627);

return statearr_28658;
})();
var statearr_28659_28676 = state_28647__$1;
(statearr_28659_28676[(2)] = null);

(statearr_28659_28676[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28648 === (5))){
var inst_28627 = (state_28647[(7)]);
var state_28647__$1 = state_28647;
var statearr_28660_28677 = state_28647__$1;
(statearr_28660_28677[(2)] = inst_28627);

(statearr_28660_28677[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28648 === (10))){
var inst_28641 = (state_28647[(2)]);
var state_28647__$1 = state_28647;
var statearr_28661_28678 = state_28647__$1;
(statearr_28661_28678[(2)] = inst_28641);

(statearr_28661_28678[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28648 === (8))){
var inst_28634 = (state_28647[(9)]);
var inst_28637 = cljs.core.deref.call(null,inst_28634);
var state_28647__$1 = state_28647;
var statearr_28662_28679 = state_28647__$1;
(statearr_28662_28679[(2)] = inst_28637);

(statearr_28662_28679[(1)] = (10));


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
});})(c__27881__auto__))
;
return ((function (switch__27769__auto__,c__27881__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__27770__auto__ = null;
var cljs$core$async$reduce_$_state_machine__27770__auto____0 = (function (){
var statearr_28666 = [null,null,null,null,null,null,null,null,null,null];
(statearr_28666[(0)] = cljs$core$async$reduce_$_state_machine__27770__auto__);

(statearr_28666[(1)] = (1));

return statearr_28666;
});
var cljs$core$async$reduce_$_state_machine__27770__auto____1 = (function (state_28647){
while(true){
var ret_value__27771__auto__ = (function (){try{while(true){
var result__27772__auto__ = switch__27769__auto__.call(null,state_28647);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27772__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27772__auto__;
}
break;
}
}catch (e28667){if((e28667 instanceof Object)){
var ex__27773__auto__ = e28667;
var statearr_28668_28680 = state_28647;
(statearr_28668_28680[(5)] = ex__27773__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28647);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28667;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27771__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28681 = state_28647;
state_28647 = G__28681;
continue;
} else {
return ret_value__27771__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__27770__auto__ = function(state_28647){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__27770__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__27770__auto____1.call(this,state_28647);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__27770__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__27770__auto____0;
cljs$core$async$reduce_$_state_machine__27770__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__27770__auto____1;
return cljs$core$async$reduce_$_state_machine__27770__auto__;
})()
;})(switch__27769__auto__,c__27881__auto__))
})();
var state__27883__auto__ = (function (){var statearr_28669 = f__27882__auto__.call(null);
(statearr_28669[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27881__auto__);

return statearr_28669;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27883__auto__);
});})(c__27881__auto__))
);

return c__27881__auto__;
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
var args28682 = [];
var len__25835__auto___28734 = arguments.length;
var i__25836__auto___28735 = (0);
while(true){
if((i__25836__auto___28735 < len__25835__auto___28734)){
args28682.push((arguments[i__25836__auto___28735]));

var G__28736 = (i__25836__auto___28735 + (1));
i__25836__auto___28735 = G__28736;
continue;
} else {
}
break;
}

var G__28684 = args28682.length;
switch (G__28684) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28682.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__27881__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27881__auto__){
return (function (){
var f__27882__auto__ = (function (){var switch__27769__auto__ = ((function (c__27881__auto__){
return (function (state_28709){
var state_val_28710 = (state_28709[(1)]);
if((state_val_28710 === (7))){
var inst_28691 = (state_28709[(2)]);
var state_28709__$1 = state_28709;
var statearr_28711_28738 = state_28709__$1;
(statearr_28711_28738[(2)] = inst_28691);

(statearr_28711_28738[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28710 === (1))){
var inst_28685 = cljs.core.seq.call(null,coll);
var inst_28686 = inst_28685;
var state_28709__$1 = (function (){var statearr_28712 = state_28709;
(statearr_28712[(7)] = inst_28686);

return statearr_28712;
})();
var statearr_28713_28739 = state_28709__$1;
(statearr_28713_28739[(2)] = null);

(statearr_28713_28739[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28710 === (4))){
var inst_28686 = (state_28709[(7)]);
var inst_28689 = cljs.core.first.call(null,inst_28686);
var state_28709__$1 = state_28709;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28709__$1,(7),ch,inst_28689);
} else {
if((state_val_28710 === (13))){
var inst_28703 = (state_28709[(2)]);
var state_28709__$1 = state_28709;
var statearr_28714_28740 = state_28709__$1;
(statearr_28714_28740[(2)] = inst_28703);

(statearr_28714_28740[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28710 === (6))){
var inst_28694 = (state_28709[(2)]);
var state_28709__$1 = state_28709;
if(cljs.core.truth_(inst_28694)){
var statearr_28715_28741 = state_28709__$1;
(statearr_28715_28741[(1)] = (8));

} else {
var statearr_28716_28742 = state_28709__$1;
(statearr_28716_28742[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28710 === (3))){
var inst_28707 = (state_28709[(2)]);
var state_28709__$1 = state_28709;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28709__$1,inst_28707);
} else {
if((state_val_28710 === (12))){
var state_28709__$1 = state_28709;
var statearr_28717_28743 = state_28709__$1;
(statearr_28717_28743[(2)] = null);

(statearr_28717_28743[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28710 === (2))){
var inst_28686 = (state_28709[(7)]);
var state_28709__$1 = state_28709;
if(cljs.core.truth_(inst_28686)){
var statearr_28718_28744 = state_28709__$1;
(statearr_28718_28744[(1)] = (4));

} else {
var statearr_28719_28745 = state_28709__$1;
(statearr_28719_28745[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28710 === (11))){
var inst_28700 = cljs.core.async.close_BANG_.call(null,ch);
var state_28709__$1 = state_28709;
var statearr_28720_28746 = state_28709__$1;
(statearr_28720_28746[(2)] = inst_28700);

(statearr_28720_28746[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28710 === (9))){
var state_28709__$1 = state_28709;
if(cljs.core.truth_(close_QMARK_)){
var statearr_28721_28747 = state_28709__$1;
(statearr_28721_28747[(1)] = (11));

} else {
var statearr_28722_28748 = state_28709__$1;
(statearr_28722_28748[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28710 === (5))){
var inst_28686 = (state_28709[(7)]);
var state_28709__$1 = state_28709;
var statearr_28723_28749 = state_28709__$1;
(statearr_28723_28749[(2)] = inst_28686);

(statearr_28723_28749[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28710 === (10))){
var inst_28705 = (state_28709[(2)]);
var state_28709__$1 = state_28709;
var statearr_28724_28750 = state_28709__$1;
(statearr_28724_28750[(2)] = inst_28705);

(statearr_28724_28750[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28710 === (8))){
var inst_28686 = (state_28709[(7)]);
var inst_28696 = cljs.core.next.call(null,inst_28686);
var inst_28686__$1 = inst_28696;
var state_28709__$1 = (function (){var statearr_28725 = state_28709;
(statearr_28725[(7)] = inst_28686__$1);

return statearr_28725;
})();
var statearr_28726_28751 = state_28709__$1;
(statearr_28726_28751[(2)] = null);

(statearr_28726_28751[(1)] = (2));


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
});})(c__27881__auto__))
;
return ((function (switch__27769__auto__,c__27881__auto__){
return (function() {
var cljs$core$async$state_machine__27770__auto__ = null;
var cljs$core$async$state_machine__27770__auto____0 = (function (){
var statearr_28730 = [null,null,null,null,null,null,null,null];
(statearr_28730[(0)] = cljs$core$async$state_machine__27770__auto__);

(statearr_28730[(1)] = (1));

return statearr_28730;
});
var cljs$core$async$state_machine__27770__auto____1 = (function (state_28709){
while(true){
var ret_value__27771__auto__ = (function (){try{while(true){
var result__27772__auto__ = switch__27769__auto__.call(null,state_28709);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27772__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27772__auto__;
}
break;
}
}catch (e28731){if((e28731 instanceof Object)){
var ex__27773__auto__ = e28731;
var statearr_28732_28752 = state_28709;
(statearr_28732_28752[(5)] = ex__27773__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28709);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28731;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27771__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28753 = state_28709;
state_28709 = G__28753;
continue;
} else {
return ret_value__27771__auto__;
}
break;
}
});
cljs$core$async$state_machine__27770__auto__ = function(state_28709){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27770__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27770__auto____1.call(this,state_28709);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27770__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27770__auto____0;
cljs$core$async$state_machine__27770__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27770__auto____1;
return cljs$core$async$state_machine__27770__auto__;
})()
;})(switch__27769__auto__,c__27881__auto__))
})();
var state__27883__auto__ = (function (){var statearr_28733 = f__27882__auto__.call(null);
(statearr_28733[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27881__auto__);

return statearr_28733;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27883__auto__);
});})(c__27881__auto__))
);

return c__27881__auto__;
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
var x__25423__auto__ = (((_ == null))?null:_);
var m__25424__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__25423__auto__)]);
if(!((m__25424__auto__ == null))){
return m__25424__auto__.call(null,_);
} else {
var m__25424__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__25424__auto____$1 == null))){
return m__25424__auto____$1.call(null,_);
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
var x__25423__auto__ = (((m == null))?null:m);
var m__25424__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__25423__auto__)]);
if(!((m__25424__auto__ == null))){
return m__25424__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__25424__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__25424__auto____$1 == null))){
return m__25424__auto____$1.call(null,m,ch,close_QMARK_);
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
var x__25423__auto__ = (((m == null))?null:m);
var m__25424__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__25423__auto__)]);
if(!((m__25424__auto__ == null))){
return m__25424__auto__.call(null,m,ch);
} else {
var m__25424__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__25424__auto____$1 == null))){
return m__25424__auto____$1.call(null,m,ch);
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
var x__25423__auto__ = (((m == null))?null:m);
var m__25424__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__25423__auto__)]);
if(!((m__25424__auto__ == null))){
return m__25424__auto__.call(null,m);
} else {
var m__25424__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__25424__auto____$1 == null))){
return m__25424__auto____$1.call(null,m);
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
if(typeof cljs.core.async.t_cljs$core$async28979 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28979 = (function (mult,ch,cs,meta28980){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta28980 = meta28980;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28979.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_28981,meta28980__$1){
var self__ = this;
var _28981__$1 = this;
return (new cljs.core.async.t_cljs$core$async28979(self__.mult,self__.ch,self__.cs,meta28980__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async28979.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_28981){
var self__ = this;
var _28981__$1 = this;
return self__.meta28980;
});})(cs))
;

cljs.core.async.t_cljs$core$async28979.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async28979.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async28979.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async28979.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async28979.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async28979.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async28979.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta28980","meta28980",1629451235,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async28979.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28979.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28979";

cljs.core.async.t_cljs$core$async28979.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__25366__auto__,writer__25367__auto__,opt__25368__auto__){
return cljs.core._write.call(null,writer__25367__auto__,"cljs.core.async/t_cljs$core$async28979");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async28979 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async28979(mult__$1,ch__$1,cs__$1,meta28980){
return (new cljs.core.async.t_cljs$core$async28979(mult__$1,ch__$1,cs__$1,meta28980));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async28979(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__27881__auto___29204 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27881__auto___29204,cs,m,dchan,dctr,done){
return (function (){
var f__27882__auto__ = (function (){var switch__27769__auto__ = ((function (c__27881__auto___29204,cs,m,dchan,dctr,done){
return (function (state_29116){
var state_val_29117 = (state_29116[(1)]);
if((state_val_29117 === (7))){
var inst_29112 = (state_29116[(2)]);
var state_29116__$1 = state_29116;
var statearr_29118_29205 = state_29116__$1;
(statearr_29118_29205[(2)] = inst_29112);

(statearr_29118_29205[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29117 === (20))){
var inst_29015 = (state_29116[(7)]);
var inst_29027 = cljs.core.first.call(null,inst_29015);
var inst_29028 = cljs.core.nth.call(null,inst_29027,(0),null);
var inst_29029 = cljs.core.nth.call(null,inst_29027,(1),null);
var state_29116__$1 = (function (){var statearr_29119 = state_29116;
(statearr_29119[(8)] = inst_29028);

return statearr_29119;
})();
if(cljs.core.truth_(inst_29029)){
var statearr_29120_29206 = state_29116__$1;
(statearr_29120_29206[(1)] = (22));

} else {
var statearr_29121_29207 = state_29116__$1;
(statearr_29121_29207[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29117 === (27))){
var inst_29064 = (state_29116[(9)]);
var inst_29057 = (state_29116[(10)]);
var inst_29059 = (state_29116[(11)]);
var inst_28984 = (state_29116[(12)]);
var inst_29064__$1 = cljs.core._nth.call(null,inst_29057,inst_29059);
var inst_29065 = cljs.core.async.put_BANG_.call(null,inst_29064__$1,inst_28984,done);
var state_29116__$1 = (function (){var statearr_29122 = state_29116;
(statearr_29122[(9)] = inst_29064__$1);

return statearr_29122;
})();
if(cljs.core.truth_(inst_29065)){
var statearr_29123_29208 = state_29116__$1;
(statearr_29123_29208[(1)] = (30));

} else {
var statearr_29124_29209 = state_29116__$1;
(statearr_29124_29209[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29117 === (1))){
var state_29116__$1 = state_29116;
var statearr_29125_29210 = state_29116__$1;
(statearr_29125_29210[(2)] = null);

(statearr_29125_29210[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29117 === (24))){
var inst_29015 = (state_29116[(7)]);
var inst_29034 = (state_29116[(2)]);
var inst_29035 = cljs.core.next.call(null,inst_29015);
var inst_28993 = inst_29035;
var inst_28994 = null;
var inst_28995 = (0);
var inst_28996 = (0);
var state_29116__$1 = (function (){var statearr_29126 = state_29116;
(statearr_29126[(13)] = inst_29034);

(statearr_29126[(14)] = inst_28996);

(statearr_29126[(15)] = inst_28994);

(statearr_29126[(16)] = inst_28995);

(statearr_29126[(17)] = inst_28993);

return statearr_29126;
})();
var statearr_29127_29211 = state_29116__$1;
(statearr_29127_29211[(2)] = null);

(statearr_29127_29211[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29117 === (39))){
var state_29116__$1 = state_29116;
var statearr_29131_29212 = state_29116__$1;
(statearr_29131_29212[(2)] = null);

(statearr_29131_29212[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29117 === (4))){
var inst_28984 = (state_29116[(12)]);
var inst_28984__$1 = (state_29116[(2)]);
var inst_28985 = (inst_28984__$1 == null);
var state_29116__$1 = (function (){var statearr_29132 = state_29116;
(statearr_29132[(12)] = inst_28984__$1);

return statearr_29132;
})();
if(cljs.core.truth_(inst_28985)){
var statearr_29133_29213 = state_29116__$1;
(statearr_29133_29213[(1)] = (5));

} else {
var statearr_29134_29214 = state_29116__$1;
(statearr_29134_29214[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29117 === (15))){
var inst_28996 = (state_29116[(14)]);
var inst_28994 = (state_29116[(15)]);
var inst_28995 = (state_29116[(16)]);
var inst_28993 = (state_29116[(17)]);
var inst_29011 = (state_29116[(2)]);
var inst_29012 = (inst_28996 + (1));
var tmp29128 = inst_28994;
var tmp29129 = inst_28995;
var tmp29130 = inst_28993;
var inst_28993__$1 = tmp29130;
var inst_28994__$1 = tmp29128;
var inst_28995__$1 = tmp29129;
var inst_28996__$1 = inst_29012;
var state_29116__$1 = (function (){var statearr_29135 = state_29116;
(statearr_29135[(14)] = inst_28996__$1);

(statearr_29135[(15)] = inst_28994__$1);

(statearr_29135[(18)] = inst_29011);

(statearr_29135[(16)] = inst_28995__$1);

(statearr_29135[(17)] = inst_28993__$1);

return statearr_29135;
})();
var statearr_29136_29215 = state_29116__$1;
(statearr_29136_29215[(2)] = null);

(statearr_29136_29215[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29117 === (21))){
var inst_29038 = (state_29116[(2)]);
var state_29116__$1 = state_29116;
var statearr_29140_29216 = state_29116__$1;
(statearr_29140_29216[(2)] = inst_29038);

(statearr_29140_29216[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29117 === (31))){
var inst_29064 = (state_29116[(9)]);
var inst_29068 = done.call(null,null);
var inst_29069 = cljs.core.async.untap_STAR_.call(null,m,inst_29064);
var state_29116__$1 = (function (){var statearr_29141 = state_29116;
(statearr_29141[(19)] = inst_29068);

return statearr_29141;
})();
var statearr_29142_29217 = state_29116__$1;
(statearr_29142_29217[(2)] = inst_29069);

(statearr_29142_29217[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29117 === (32))){
var inst_29057 = (state_29116[(10)]);
var inst_29056 = (state_29116[(20)]);
var inst_29058 = (state_29116[(21)]);
var inst_29059 = (state_29116[(11)]);
var inst_29071 = (state_29116[(2)]);
var inst_29072 = (inst_29059 + (1));
var tmp29137 = inst_29057;
var tmp29138 = inst_29056;
var tmp29139 = inst_29058;
var inst_29056__$1 = tmp29138;
var inst_29057__$1 = tmp29137;
var inst_29058__$1 = tmp29139;
var inst_29059__$1 = inst_29072;
var state_29116__$1 = (function (){var statearr_29143 = state_29116;
(statearr_29143[(10)] = inst_29057__$1);

(statearr_29143[(20)] = inst_29056__$1);

(statearr_29143[(22)] = inst_29071);

(statearr_29143[(21)] = inst_29058__$1);

(statearr_29143[(11)] = inst_29059__$1);

return statearr_29143;
})();
var statearr_29144_29218 = state_29116__$1;
(statearr_29144_29218[(2)] = null);

(statearr_29144_29218[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29117 === (40))){
var inst_29084 = (state_29116[(23)]);
var inst_29088 = done.call(null,null);
var inst_29089 = cljs.core.async.untap_STAR_.call(null,m,inst_29084);
var state_29116__$1 = (function (){var statearr_29145 = state_29116;
(statearr_29145[(24)] = inst_29088);

return statearr_29145;
})();
var statearr_29146_29219 = state_29116__$1;
(statearr_29146_29219[(2)] = inst_29089);

(statearr_29146_29219[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29117 === (33))){
var inst_29075 = (state_29116[(25)]);
var inst_29077 = cljs.core.chunked_seq_QMARK_.call(null,inst_29075);
var state_29116__$1 = state_29116;
if(inst_29077){
var statearr_29147_29220 = state_29116__$1;
(statearr_29147_29220[(1)] = (36));

} else {
var statearr_29148_29221 = state_29116__$1;
(statearr_29148_29221[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29117 === (13))){
var inst_29005 = (state_29116[(26)]);
var inst_29008 = cljs.core.async.close_BANG_.call(null,inst_29005);
var state_29116__$1 = state_29116;
var statearr_29149_29222 = state_29116__$1;
(statearr_29149_29222[(2)] = inst_29008);

(statearr_29149_29222[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29117 === (22))){
var inst_29028 = (state_29116[(8)]);
var inst_29031 = cljs.core.async.close_BANG_.call(null,inst_29028);
var state_29116__$1 = state_29116;
var statearr_29150_29223 = state_29116__$1;
(statearr_29150_29223[(2)] = inst_29031);

(statearr_29150_29223[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29117 === (36))){
var inst_29075 = (state_29116[(25)]);
var inst_29079 = cljs.core.chunk_first.call(null,inst_29075);
var inst_29080 = cljs.core.chunk_rest.call(null,inst_29075);
var inst_29081 = cljs.core.count.call(null,inst_29079);
var inst_29056 = inst_29080;
var inst_29057 = inst_29079;
var inst_29058 = inst_29081;
var inst_29059 = (0);
var state_29116__$1 = (function (){var statearr_29151 = state_29116;
(statearr_29151[(10)] = inst_29057);

(statearr_29151[(20)] = inst_29056);

(statearr_29151[(21)] = inst_29058);

(statearr_29151[(11)] = inst_29059);

return statearr_29151;
})();
var statearr_29152_29224 = state_29116__$1;
(statearr_29152_29224[(2)] = null);

(statearr_29152_29224[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29117 === (41))){
var inst_29075 = (state_29116[(25)]);
var inst_29091 = (state_29116[(2)]);
var inst_29092 = cljs.core.next.call(null,inst_29075);
var inst_29056 = inst_29092;
var inst_29057 = null;
var inst_29058 = (0);
var inst_29059 = (0);
var state_29116__$1 = (function (){var statearr_29153 = state_29116;
(statearr_29153[(10)] = inst_29057);

(statearr_29153[(27)] = inst_29091);

(statearr_29153[(20)] = inst_29056);

(statearr_29153[(21)] = inst_29058);

(statearr_29153[(11)] = inst_29059);

return statearr_29153;
})();
var statearr_29154_29225 = state_29116__$1;
(statearr_29154_29225[(2)] = null);

(statearr_29154_29225[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29117 === (43))){
var state_29116__$1 = state_29116;
var statearr_29155_29226 = state_29116__$1;
(statearr_29155_29226[(2)] = null);

(statearr_29155_29226[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29117 === (29))){
var inst_29100 = (state_29116[(2)]);
var state_29116__$1 = state_29116;
var statearr_29156_29227 = state_29116__$1;
(statearr_29156_29227[(2)] = inst_29100);

(statearr_29156_29227[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29117 === (44))){
var inst_29109 = (state_29116[(2)]);
var state_29116__$1 = (function (){var statearr_29157 = state_29116;
(statearr_29157[(28)] = inst_29109);

return statearr_29157;
})();
var statearr_29158_29228 = state_29116__$1;
(statearr_29158_29228[(2)] = null);

(statearr_29158_29228[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29117 === (6))){
var inst_29048 = (state_29116[(29)]);
var inst_29047 = cljs.core.deref.call(null,cs);
var inst_29048__$1 = cljs.core.keys.call(null,inst_29047);
var inst_29049 = cljs.core.count.call(null,inst_29048__$1);
var inst_29050 = cljs.core.reset_BANG_.call(null,dctr,inst_29049);
var inst_29055 = cljs.core.seq.call(null,inst_29048__$1);
var inst_29056 = inst_29055;
var inst_29057 = null;
var inst_29058 = (0);
var inst_29059 = (0);
var state_29116__$1 = (function (){var statearr_29159 = state_29116;
(statearr_29159[(10)] = inst_29057);

(statearr_29159[(20)] = inst_29056);

(statearr_29159[(29)] = inst_29048__$1);

(statearr_29159[(30)] = inst_29050);

(statearr_29159[(21)] = inst_29058);

(statearr_29159[(11)] = inst_29059);

return statearr_29159;
})();
var statearr_29160_29229 = state_29116__$1;
(statearr_29160_29229[(2)] = null);

(statearr_29160_29229[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29117 === (28))){
var inst_29056 = (state_29116[(20)]);
var inst_29075 = (state_29116[(25)]);
var inst_29075__$1 = cljs.core.seq.call(null,inst_29056);
var state_29116__$1 = (function (){var statearr_29161 = state_29116;
(statearr_29161[(25)] = inst_29075__$1);

return statearr_29161;
})();
if(inst_29075__$1){
var statearr_29162_29230 = state_29116__$1;
(statearr_29162_29230[(1)] = (33));

} else {
var statearr_29163_29231 = state_29116__$1;
(statearr_29163_29231[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29117 === (25))){
var inst_29058 = (state_29116[(21)]);
var inst_29059 = (state_29116[(11)]);
var inst_29061 = (inst_29059 < inst_29058);
var inst_29062 = inst_29061;
var state_29116__$1 = state_29116;
if(cljs.core.truth_(inst_29062)){
var statearr_29164_29232 = state_29116__$1;
(statearr_29164_29232[(1)] = (27));

} else {
var statearr_29165_29233 = state_29116__$1;
(statearr_29165_29233[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29117 === (34))){
var state_29116__$1 = state_29116;
var statearr_29166_29234 = state_29116__$1;
(statearr_29166_29234[(2)] = null);

(statearr_29166_29234[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29117 === (17))){
var state_29116__$1 = state_29116;
var statearr_29167_29235 = state_29116__$1;
(statearr_29167_29235[(2)] = null);

(statearr_29167_29235[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29117 === (3))){
var inst_29114 = (state_29116[(2)]);
var state_29116__$1 = state_29116;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29116__$1,inst_29114);
} else {
if((state_val_29117 === (12))){
var inst_29043 = (state_29116[(2)]);
var state_29116__$1 = state_29116;
var statearr_29168_29236 = state_29116__$1;
(statearr_29168_29236[(2)] = inst_29043);

(statearr_29168_29236[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29117 === (2))){
var state_29116__$1 = state_29116;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29116__$1,(4),ch);
} else {
if((state_val_29117 === (23))){
var state_29116__$1 = state_29116;
var statearr_29169_29237 = state_29116__$1;
(statearr_29169_29237[(2)] = null);

(statearr_29169_29237[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29117 === (35))){
var inst_29098 = (state_29116[(2)]);
var state_29116__$1 = state_29116;
var statearr_29170_29238 = state_29116__$1;
(statearr_29170_29238[(2)] = inst_29098);

(statearr_29170_29238[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29117 === (19))){
var inst_29015 = (state_29116[(7)]);
var inst_29019 = cljs.core.chunk_first.call(null,inst_29015);
var inst_29020 = cljs.core.chunk_rest.call(null,inst_29015);
var inst_29021 = cljs.core.count.call(null,inst_29019);
var inst_28993 = inst_29020;
var inst_28994 = inst_29019;
var inst_28995 = inst_29021;
var inst_28996 = (0);
var state_29116__$1 = (function (){var statearr_29171 = state_29116;
(statearr_29171[(14)] = inst_28996);

(statearr_29171[(15)] = inst_28994);

(statearr_29171[(16)] = inst_28995);

(statearr_29171[(17)] = inst_28993);

return statearr_29171;
})();
var statearr_29172_29239 = state_29116__$1;
(statearr_29172_29239[(2)] = null);

(statearr_29172_29239[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29117 === (11))){
var inst_29015 = (state_29116[(7)]);
var inst_28993 = (state_29116[(17)]);
var inst_29015__$1 = cljs.core.seq.call(null,inst_28993);
var state_29116__$1 = (function (){var statearr_29173 = state_29116;
(statearr_29173[(7)] = inst_29015__$1);

return statearr_29173;
})();
if(inst_29015__$1){
var statearr_29174_29240 = state_29116__$1;
(statearr_29174_29240[(1)] = (16));

} else {
var statearr_29175_29241 = state_29116__$1;
(statearr_29175_29241[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29117 === (9))){
var inst_29045 = (state_29116[(2)]);
var state_29116__$1 = state_29116;
var statearr_29176_29242 = state_29116__$1;
(statearr_29176_29242[(2)] = inst_29045);

(statearr_29176_29242[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29117 === (5))){
var inst_28991 = cljs.core.deref.call(null,cs);
var inst_28992 = cljs.core.seq.call(null,inst_28991);
var inst_28993 = inst_28992;
var inst_28994 = null;
var inst_28995 = (0);
var inst_28996 = (0);
var state_29116__$1 = (function (){var statearr_29177 = state_29116;
(statearr_29177[(14)] = inst_28996);

(statearr_29177[(15)] = inst_28994);

(statearr_29177[(16)] = inst_28995);

(statearr_29177[(17)] = inst_28993);

return statearr_29177;
})();
var statearr_29178_29243 = state_29116__$1;
(statearr_29178_29243[(2)] = null);

(statearr_29178_29243[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29117 === (14))){
var state_29116__$1 = state_29116;
var statearr_29179_29244 = state_29116__$1;
(statearr_29179_29244[(2)] = null);

(statearr_29179_29244[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29117 === (45))){
var inst_29106 = (state_29116[(2)]);
var state_29116__$1 = state_29116;
var statearr_29180_29245 = state_29116__$1;
(statearr_29180_29245[(2)] = inst_29106);

(statearr_29180_29245[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29117 === (26))){
var inst_29048 = (state_29116[(29)]);
var inst_29102 = (state_29116[(2)]);
var inst_29103 = cljs.core.seq.call(null,inst_29048);
var state_29116__$1 = (function (){var statearr_29181 = state_29116;
(statearr_29181[(31)] = inst_29102);

return statearr_29181;
})();
if(inst_29103){
var statearr_29182_29246 = state_29116__$1;
(statearr_29182_29246[(1)] = (42));

} else {
var statearr_29183_29247 = state_29116__$1;
(statearr_29183_29247[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29117 === (16))){
var inst_29015 = (state_29116[(7)]);
var inst_29017 = cljs.core.chunked_seq_QMARK_.call(null,inst_29015);
var state_29116__$1 = state_29116;
if(inst_29017){
var statearr_29184_29248 = state_29116__$1;
(statearr_29184_29248[(1)] = (19));

} else {
var statearr_29185_29249 = state_29116__$1;
(statearr_29185_29249[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29117 === (38))){
var inst_29095 = (state_29116[(2)]);
var state_29116__$1 = state_29116;
var statearr_29186_29250 = state_29116__$1;
(statearr_29186_29250[(2)] = inst_29095);

(statearr_29186_29250[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29117 === (30))){
var state_29116__$1 = state_29116;
var statearr_29187_29251 = state_29116__$1;
(statearr_29187_29251[(2)] = null);

(statearr_29187_29251[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29117 === (10))){
var inst_28996 = (state_29116[(14)]);
var inst_28994 = (state_29116[(15)]);
var inst_29004 = cljs.core._nth.call(null,inst_28994,inst_28996);
var inst_29005 = cljs.core.nth.call(null,inst_29004,(0),null);
var inst_29006 = cljs.core.nth.call(null,inst_29004,(1),null);
var state_29116__$1 = (function (){var statearr_29188 = state_29116;
(statearr_29188[(26)] = inst_29005);

return statearr_29188;
})();
if(cljs.core.truth_(inst_29006)){
var statearr_29189_29252 = state_29116__$1;
(statearr_29189_29252[(1)] = (13));

} else {
var statearr_29190_29253 = state_29116__$1;
(statearr_29190_29253[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29117 === (18))){
var inst_29041 = (state_29116[(2)]);
var state_29116__$1 = state_29116;
var statearr_29191_29254 = state_29116__$1;
(statearr_29191_29254[(2)] = inst_29041);

(statearr_29191_29254[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29117 === (42))){
var state_29116__$1 = state_29116;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29116__$1,(45),dchan);
} else {
if((state_val_29117 === (37))){
var inst_29084 = (state_29116[(23)]);
var inst_29075 = (state_29116[(25)]);
var inst_28984 = (state_29116[(12)]);
var inst_29084__$1 = cljs.core.first.call(null,inst_29075);
var inst_29085 = cljs.core.async.put_BANG_.call(null,inst_29084__$1,inst_28984,done);
var state_29116__$1 = (function (){var statearr_29192 = state_29116;
(statearr_29192[(23)] = inst_29084__$1);

return statearr_29192;
})();
if(cljs.core.truth_(inst_29085)){
var statearr_29193_29255 = state_29116__$1;
(statearr_29193_29255[(1)] = (39));

} else {
var statearr_29194_29256 = state_29116__$1;
(statearr_29194_29256[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29117 === (8))){
var inst_28996 = (state_29116[(14)]);
var inst_28995 = (state_29116[(16)]);
var inst_28998 = (inst_28996 < inst_28995);
var inst_28999 = inst_28998;
var state_29116__$1 = state_29116;
if(cljs.core.truth_(inst_28999)){
var statearr_29195_29257 = state_29116__$1;
(statearr_29195_29257[(1)] = (10));

} else {
var statearr_29196_29258 = state_29116__$1;
(statearr_29196_29258[(1)] = (11));

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
});})(c__27881__auto___29204,cs,m,dchan,dctr,done))
;
return ((function (switch__27769__auto__,c__27881__auto___29204,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__27770__auto__ = null;
var cljs$core$async$mult_$_state_machine__27770__auto____0 = (function (){
var statearr_29200 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29200[(0)] = cljs$core$async$mult_$_state_machine__27770__auto__);

(statearr_29200[(1)] = (1));

return statearr_29200;
});
var cljs$core$async$mult_$_state_machine__27770__auto____1 = (function (state_29116){
while(true){
var ret_value__27771__auto__ = (function (){try{while(true){
var result__27772__auto__ = switch__27769__auto__.call(null,state_29116);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27772__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27772__auto__;
}
break;
}
}catch (e29201){if((e29201 instanceof Object)){
var ex__27773__auto__ = e29201;
var statearr_29202_29259 = state_29116;
(statearr_29202_29259[(5)] = ex__27773__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29116);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29201;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27771__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29260 = state_29116;
state_29116 = G__29260;
continue;
} else {
return ret_value__27771__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__27770__auto__ = function(state_29116){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__27770__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__27770__auto____1.call(this,state_29116);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__27770__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__27770__auto____0;
cljs$core$async$mult_$_state_machine__27770__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__27770__auto____1;
return cljs$core$async$mult_$_state_machine__27770__auto__;
})()
;})(switch__27769__auto__,c__27881__auto___29204,cs,m,dchan,dctr,done))
})();
var state__27883__auto__ = (function (){var statearr_29203 = f__27882__auto__.call(null);
(statearr_29203[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27881__auto___29204);

return statearr_29203;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27883__auto__);
});})(c__27881__auto___29204,cs,m,dchan,dctr,done))
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
var args29261 = [];
var len__25835__auto___29264 = arguments.length;
var i__25836__auto___29265 = (0);
while(true){
if((i__25836__auto___29265 < len__25835__auto___29264)){
args29261.push((arguments[i__25836__auto___29265]));

var G__29266 = (i__25836__auto___29265 + (1));
i__25836__auto___29265 = G__29266;
continue;
} else {
}
break;
}

var G__29263 = args29261.length;
switch (G__29263) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29261.length)].join('')));

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
var x__25423__auto__ = (((m == null))?null:m);
var m__25424__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__25423__auto__)]);
if(!((m__25424__auto__ == null))){
return m__25424__auto__.call(null,m,ch);
} else {
var m__25424__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__25424__auto____$1 == null))){
return m__25424__auto____$1.call(null,m,ch);
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
var x__25423__auto__ = (((m == null))?null:m);
var m__25424__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__25423__auto__)]);
if(!((m__25424__auto__ == null))){
return m__25424__auto__.call(null,m,ch);
} else {
var m__25424__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__25424__auto____$1 == null))){
return m__25424__auto____$1.call(null,m,ch);
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
var x__25423__auto__ = (((m == null))?null:m);
var m__25424__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__25423__auto__)]);
if(!((m__25424__auto__ == null))){
return m__25424__auto__.call(null,m);
} else {
var m__25424__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__25424__auto____$1 == null))){
return m__25424__auto____$1.call(null,m);
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
var x__25423__auto__ = (((m == null))?null:m);
var m__25424__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__25423__auto__)]);
if(!((m__25424__auto__ == null))){
return m__25424__auto__.call(null,m,state_map);
} else {
var m__25424__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__25424__auto____$1 == null))){
return m__25424__auto____$1.call(null,m,state_map);
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
var x__25423__auto__ = (((m == null))?null:m);
var m__25424__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__25423__auto__)]);
if(!((m__25424__auto__ == null))){
return m__25424__auto__.call(null,m,mode);
} else {
var m__25424__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__25424__auto____$1 == null))){
return m__25424__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__25842__auto__ = [];
var len__25835__auto___29278 = arguments.length;
var i__25836__auto___29279 = (0);
while(true){
if((i__25836__auto___29279 < len__25835__auto___29278)){
args__25842__auto__.push((arguments[i__25836__auto___29279]));

var G__29280 = (i__25836__auto___29279 + (1));
i__25836__auto___29279 = G__29280;
continue;
} else {
}
break;
}

var argseq__25843__auto__ = ((((3) < args__25842__auto__.length))?(new cljs.core.IndexedSeq(args__25842__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__25843__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__29272){
var map__29273 = p__29272;
var map__29273__$1 = ((((!((map__29273 == null)))?((((map__29273.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29273.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29273):map__29273);
var opts = map__29273__$1;
var statearr_29275_29281 = state;
(statearr_29275_29281[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__29273,map__29273__$1,opts){
return (function (val){
var statearr_29276_29282 = state;
(statearr_29276_29282[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__29273,map__29273__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_29277_29283 = state;
(statearr_29277_29283[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq29268){
var G__29269 = cljs.core.first.call(null,seq29268);
var seq29268__$1 = cljs.core.next.call(null,seq29268);
var G__29270 = cljs.core.first.call(null,seq29268__$1);
var seq29268__$2 = cljs.core.next.call(null,seq29268__$1);
var G__29271 = cljs.core.first.call(null,seq29268__$2);
var seq29268__$3 = cljs.core.next.call(null,seq29268__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__29269,G__29270,G__29271,seq29268__$3);
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
if(typeof cljs.core.async.t_cljs$core$async29449 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29449 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta29450){
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
this.meta29450 = meta29450;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29449.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_29451,meta29450__$1){
var self__ = this;
var _29451__$1 = this;
return (new cljs.core.async.t_cljs$core$async29449(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta29450__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29449.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_29451){
var self__ = this;
var _29451__$1 = this;
return self__.meta29450;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29449.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async29449.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29449.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async29449.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29449.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29449.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29449.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29449.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async29449.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta29450","meta29450",369420867,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29449.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29449.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29449";

cljs.core.async.t_cljs$core$async29449.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__25366__auto__,writer__25367__auto__,opt__25368__auto__){
return cljs.core._write.call(null,writer__25367__auto__,"cljs.core.async/t_cljs$core$async29449");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async29449 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async29449(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta29450){
return (new cljs.core.async.t_cljs$core$async29449(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta29450));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async29449(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__27881__auto___29614 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27881__auto___29614,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__27882__auto__ = (function (){var switch__27769__auto__ = ((function (c__27881__auto___29614,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_29551){
var state_val_29552 = (state_29551[(1)]);
if((state_val_29552 === (7))){
var inst_29467 = (state_29551[(2)]);
var state_29551__$1 = state_29551;
var statearr_29553_29615 = state_29551__$1;
(statearr_29553_29615[(2)] = inst_29467);

(statearr_29553_29615[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29552 === (20))){
var inst_29479 = (state_29551[(7)]);
var state_29551__$1 = state_29551;
var statearr_29554_29616 = state_29551__$1;
(statearr_29554_29616[(2)] = inst_29479);

(statearr_29554_29616[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29552 === (27))){
var state_29551__$1 = state_29551;
var statearr_29555_29617 = state_29551__$1;
(statearr_29555_29617[(2)] = null);

(statearr_29555_29617[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29552 === (1))){
var inst_29455 = (state_29551[(8)]);
var inst_29455__$1 = calc_state.call(null);
var inst_29457 = (inst_29455__$1 == null);
var inst_29458 = cljs.core.not.call(null,inst_29457);
var state_29551__$1 = (function (){var statearr_29556 = state_29551;
(statearr_29556[(8)] = inst_29455__$1);

return statearr_29556;
})();
if(inst_29458){
var statearr_29557_29618 = state_29551__$1;
(statearr_29557_29618[(1)] = (2));

} else {
var statearr_29558_29619 = state_29551__$1;
(statearr_29558_29619[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29552 === (24))){
var inst_29502 = (state_29551[(9)]);
var inst_29511 = (state_29551[(10)]);
var inst_29525 = (state_29551[(11)]);
var inst_29525__$1 = inst_29502.call(null,inst_29511);
var state_29551__$1 = (function (){var statearr_29559 = state_29551;
(statearr_29559[(11)] = inst_29525__$1);

return statearr_29559;
})();
if(cljs.core.truth_(inst_29525__$1)){
var statearr_29560_29620 = state_29551__$1;
(statearr_29560_29620[(1)] = (29));

} else {
var statearr_29561_29621 = state_29551__$1;
(statearr_29561_29621[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29552 === (4))){
var inst_29470 = (state_29551[(2)]);
var state_29551__$1 = state_29551;
if(cljs.core.truth_(inst_29470)){
var statearr_29562_29622 = state_29551__$1;
(statearr_29562_29622[(1)] = (8));

} else {
var statearr_29563_29623 = state_29551__$1;
(statearr_29563_29623[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29552 === (15))){
var inst_29496 = (state_29551[(2)]);
var state_29551__$1 = state_29551;
if(cljs.core.truth_(inst_29496)){
var statearr_29564_29624 = state_29551__$1;
(statearr_29564_29624[(1)] = (19));

} else {
var statearr_29565_29625 = state_29551__$1;
(statearr_29565_29625[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29552 === (21))){
var inst_29501 = (state_29551[(12)]);
var inst_29501__$1 = (state_29551[(2)]);
var inst_29502 = cljs.core.get.call(null,inst_29501__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_29503 = cljs.core.get.call(null,inst_29501__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_29504 = cljs.core.get.call(null,inst_29501__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_29551__$1 = (function (){var statearr_29566 = state_29551;
(statearr_29566[(13)] = inst_29503);

(statearr_29566[(9)] = inst_29502);

(statearr_29566[(12)] = inst_29501__$1);

return statearr_29566;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_29551__$1,(22),inst_29504);
} else {
if((state_val_29552 === (31))){
var inst_29533 = (state_29551[(2)]);
var state_29551__$1 = state_29551;
if(cljs.core.truth_(inst_29533)){
var statearr_29567_29626 = state_29551__$1;
(statearr_29567_29626[(1)] = (32));

} else {
var statearr_29568_29627 = state_29551__$1;
(statearr_29568_29627[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29552 === (32))){
var inst_29510 = (state_29551[(14)]);
var state_29551__$1 = state_29551;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29551__$1,(35),out,inst_29510);
} else {
if((state_val_29552 === (33))){
var inst_29501 = (state_29551[(12)]);
var inst_29479 = inst_29501;
var state_29551__$1 = (function (){var statearr_29569 = state_29551;
(statearr_29569[(7)] = inst_29479);

return statearr_29569;
})();
var statearr_29570_29628 = state_29551__$1;
(statearr_29570_29628[(2)] = null);

(statearr_29570_29628[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29552 === (13))){
var inst_29479 = (state_29551[(7)]);
var inst_29486 = inst_29479.cljs$lang$protocol_mask$partition0$;
var inst_29487 = (inst_29486 & (64));
var inst_29488 = inst_29479.cljs$core$ISeq$;
var inst_29489 = (inst_29487) || (inst_29488);
var state_29551__$1 = state_29551;
if(cljs.core.truth_(inst_29489)){
var statearr_29571_29629 = state_29551__$1;
(statearr_29571_29629[(1)] = (16));

} else {
var statearr_29572_29630 = state_29551__$1;
(statearr_29572_29630[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29552 === (22))){
var inst_29511 = (state_29551[(10)]);
var inst_29510 = (state_29551[(14)]);
var inst_29509 = (state_29551[(2)]);
var inst_29510__$1 = cljs.core.nth.call(null,inst_29509,(0),null);
var inst_29511__$1 = cljs.core.nth.call(null,inst_29509,(1),null);
var inst_29512 = (inst_29510__$1 == null);
var inst_29513 = cljs.core._EQ_.call(null,inst_29511__$1,change);
var inst_29514 = (inst_29512) || (inst_29513);
var state_29551__$1 = (function (){var statearr_29573 = state_29551;
(statearr_29573[(10)] = inst_29511__$1);

(statearr_29573[(14)] = inst_29510__$1);

return statearr_29573;
})();
if(cljs.core.truth_(inst_29514)){
var statearr_29574_29631 = state_29551__$1;
(statearr_29574_29631[(1)] = (23));

} else {
var statearr_29575_29632 = state_29551__$1;
(statearr_29575_29632[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29552 === (36))){
var inst_29501 = (state_29551[(12)]);
var inst_29479 = inst_29501;
var state_29551__$1 = (function (){var statearr_29576 = state_29551;
(statearr_29576[(7)] = inst_29479);

return statearr_29576;
})();
var statearr_29577_29633 = state_29551__$1;
(statearr_29577_29633[(2)] = null);

(statearr_29577_29633[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29552 === (29))){
var inst_29525 = (state_29551[(11)]);
var state_29551__$1 = state_29551;
var statearr_29578_29634 = state_29551__$1;
(statearr_29578_29634[(2)] = inst_29525);

(statearr_29578_29634[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29552 === (6))){
var state_29551__$1 = state_29551;
var statearr_29579_29635 = state_29551__$1;
(statearr_29579_29635[(2)] = false);

(statearr_29579_29635[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29552 === (28))){
var inst_29521 = (state_29551[(2)]);
var inst_29522 = calc_state.call(null);
var inst_29479 = inst_29522;
var state_29551__$1 = (function (){var statearr_29580 = state_29551;
(statearr_29580[(7)] = inst_29479);

(statearr_29580[(15)] = inst_29521);

return statearr_29580;
})();
var statearr_29581_29636 = state_29551__$1;
(statearr_29581_29636[(2)] = null);

(statearr_29581_29636[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29552 === (25))){
var inst_29547 = (state_29551[(2)]);
var state_29551__$1 = state_29551;
var statearr_29582_29637 = state_29551__$1;
(statearr_29582_29637[(2)] = inst_29547);

(statearr_29582_29637[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29552 === (34))){
var inst_29545 = (state_29551[(2)]);
var state_29551__$1 = state_29551;
var statearr_29583_29638 = state_29551__$1;
(statearr_29583_29638[(2)] = inst_29545);

(statearr_29583_29638[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29552 === (17))){
var state_29551__$1 = state_29551;
var statearr_29584_29639 = state_29551__$1;
(statearr_29584_29639[(2)] = false);

(statearr_29584_29639[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29552 === (3))){
var state_29551__$1 = state_29551;
var statearr_29585_29640 = state_29551__$1;
(statearr_29585_29640[(2)] = false);

(statearr_29585_29640[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29552 === (12))){
var inst_29549 = (state_29551[(2)]);
var state_29551__$1 = state_29551;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29551__$1,inst_29549);
} else {
if((state_val_29552 === (2))){
var inst_29455 = (state_29551[(8)]);
var inst_29460 = inst_29455.cljs$lang$protocol_mask$partition0$;
var inst_29461 = (inst_29460 & (64));
var inst_29462 = inst_29455.cljs$core$ISeq$;
var inst_29463 = (inst_29461) || (inst_29462);
var state_29551__$1 = state_29551;
if(cljs.core.truth_(inst_29463)){
var statearr_29586_29641 = state_29551__$1;
(statearr_29586_29641[(1)] = (5));

} else {
var statearr_29587_29642 = state_29551__$1;
(statearr_29587_29642[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29552 === (23))){
var inst_29510 = (state_29551[(14)]);
var inst_29516 = (inst_29510 == null);
var state_29551__$1 = state_29551;
if(cljs.core.truth_(inst_29516)){
var statearr_29588_29643 = state_29551__$1;
(statearr_29588_29643[(1)] = (26));

} else {
var statearr_29589_29644 = state_29551__$1;
(statearr_29589_29644[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29552 === (35))){
var inst_29536 = (state_29551[(2)]);
var state_29551__$1 = state_29551;
if(cljs.core.truth_(inst_29536)){
var statearr_29590_29645 = state_29551__$1;
(statearr_29590_29645[(1)] = (36));

} else {
var statearr_29591_29646 = state_29551__$1;
(statearr_29591_29646[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29552 === (19))){
var inst_29479 = (state_29551[(7)]);
var inst_29498 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29479);
var state_29551__$1 = state_29551;
var statearr_29592_29647 = state_29551__$1;
(statearr_29592_29647[(2)] = inst_29498);

(statearr_29592_29647[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29552 === (11))){
var inst_29479 = (state_29551[(7)]);
var inst_29483 = (inst_29479 == null);
var inst_29484 = cljs.core.not.call(null,inst_29483);
var state_29551__$1 = state_29551;
if(inst_29484){
var statearr_29593_29648 = state_29551__$1;
(statearr_29593_29648[(1)] = (13));

} else {
var statearr_29594_29649 = state_29551__$1;
(statearr_29594_29649[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29552 === (9))){
var inst_29455 = (state_29551[(8)]);
var state_29551__$1 = state_29551;
var statearr_29595_29650 = state_29551__$1;
(statearr_29595_29650[(2)] = inst_29455);

(statearr_29595_29650[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29552 === (5))){
var state_29551__$1 = state_29551;
var statearr_29596_29651 = state_29551__$1;
(statearr_29596_29651[(2)] = true);

(statearr_29596_29651[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29552 === (14))){
var state_29551__$1 = state_29551;
var statearr_29597_29652 = state_29551__$1;
(statearr_29597_29652[(2)] = false);

(statearr_29597_29652[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29552 === (26))){
var inst_29511 = (state_29551[(10)]);
var inst_29518 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_29511);
var state_29551__$1 = state_29551;
var statearr_29598_29653 = state_29551__$1;
(statearr_29598_29653[(2)] = inst_29518);

(statearr_29598_29653[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29552 === (16))){
var state_29551__$1 = state_29551;
var statearr_29599_29654 = state_29551__$1;
(statearr_29599_29654[(2)] = true);

(statearr_29599_29654[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29552 === (38))){
var inst_29541 = (state_29551[(2)]);
var state_29551__$1 = state_29551;
var statearr_29600_29655 = state_29551__$1;
(statearr_29600_29655[(2)] = inst_29541);

(statearr_29600_29655[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29552 === (30))){
var inst_29503 = (state_29551[(13)]);
var inst_29502 = (state_29551[(9)]);
var inst_29511 = (state_29551[(10)]);
var inst_29528 = cljs.core.empty_QMARK_.call(null,inst_29502);
var inst_29529 = inst_29503.call(null,inst_29511);
var inst_29530 = cljs.core.not.call(null,inst_29529);
var inst_29531 = (inst_29528) && (inst_29530);
var state_29551__$1 = state_29551;
var statearr_29601_29656 = state_29551__$1;
(statearr_29601_29656[(2)] = inst_29531);

(statearr_29601_29656[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29552 === (10))){
var inst_29455 = (state_29551[(8)]);
var inst_29475 = (state_29551[(2)]);
var inst_29476 = cljs.core.get.call(null,inst_29475,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_29477 = cljs.core.get.call(null,inst_29475,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_29478 = cljs.core.get.call(null,inst_29475,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_29479 = inst_29455;
var state_29551__$1 = (function (){var statearr_29602 = state_29551;
(statearr_29602[(7)] = inst_29479);

(statearr_29602[(16)] = inst_29477);

(statearr_29602[(17)] = inst_29476);

(statearr_29602[(18)] = inst_29478);

return statearr_29602;
})();
var statearr_29603_29657 = state_29551__$1;
(statearr_29603_29657[(2)] = null);

(statearr_29603_29657[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29552 === (18))){
var inst_29493 = (state_29551[(2)]);
var state_29551__$1 = state_29551;
var statearr_29604_29658 = state_29551__$1;
(statearr_29604_29658[(2)] = inst_29493);

(statearr_29604_29658[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29552 === (37))){
var state_29551__$1 = state_29551;
var statearr_29605_29659 = state_29551__$1;
(statearr_29605_29659[(2)] = null);

(statearr_29605_29659[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29552 === (8))){
var inst_29455 = (state_29551[(8)]);
var inst_29472 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29455);
var state_29551__$1 = state_29551;
var statearr_29606_29660 = state_29551__$1;
(statearr_29606_29660[(2)] = inst_29472);

(statearr_29606_29660[(1)] = (10));


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
});})(c__27881__auto___29614,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__27769__auto__,c__27881__auto___29614,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__27770__auto__ = null;
var cljs$core$async$mix_$_state_machine__27770__auto____0 = (function (){
var statearr_29610 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29610[(0)] = cljs$core$async$mix_$_state_machine__27770__auto__);

(statearr_29610[(1)] = (1));

return statearr_29610;
});
var cljs$core$async$mix_$_state_machine__27770__auto____1 = (function (state_29551){
while(true){
var ret_value__27771__auto__ = (function (){try{while(true){
var result__27772__auto__ = switch__27769__auto__.call(null,state_29551);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27772__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27772__auto__;
}
break;
}
}catch (e29611){if((e29611 instanceof Object)){
var ex__27773__auto__ = e29611;
var statearr_29612_29661 = state_29551;
(statearr_29612_29661[(5)] = ex__27773__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29551);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29611;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27771__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29662 = state_29551;
state_29551 = G__29662;
continue;
} else {
return ret_value__27771__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__27770__auto__ = function(state_29551){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__27770__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__27770__auto____1.call(this,state_29551);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__27770__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__27770__auto____0;
cljs$core$async$mix_$_state_machine__27770__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__27770__auto____1;
return cljs$core$async$mix_$_state_machine__27770__auto__;
})()
;})(switch__27769__auto__,c__27881__auto___29614,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__27883__auto__ = (function (){var statearr_29613 = f__27882__auto__.call(null);
(statearr_29613[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27881__auto___29614);

return statearr_29613;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27883__auto__);
});})(c__27881__auto___29614,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var x__25423__auto__ = (((p == null))?null:p);
var m__25424__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__25423__auto__)]);
if(!((m__25424__auto__ == null))){
return m__25424__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__25424__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__25424__auto____$1 == null))){
return m__25424__auto____$1.call(null,p,v,ch,close_QMARK_);
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
var x__25423__auto__ = (((p == null))?null:p);
var m__25424__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__25423__auto__)]);
if(!((m__25424__auto__ == null))){
return m__25424__auto__.call(null,p,v,ch);
} else {
var m__25424__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__25424__auto____$1 == null))){
return m__25424__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args29663 = [];
var len__25835__auto___29666 = arguments.length;
var i__25836__auto___29667 = (0);
while(true){
if((i__25836__auto___29667 < len__25835__auto___29666)){
args29663.push((arguments[i__25836__auto___29667]));

var G__29668 = (i__25836__auto___29667 + (1));
i__25836__auto___29667 = G__29668;
continue;
} else {
}
break;
}

var G__29665 = args29663.length;
switch (G__29665) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29663.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__25423__auto__ = (((p == null))?null:p);
var m__25424__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__25423__auto__)]);
if(!((m__25424__auto__ == null))){
return m__25424__auto__.call(null,p);
} else {
var m__25424__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__25424__auto____$1 == null))){
return m__25424__auto____$1.call(null,p);
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
var x__25423__auto__ = (((p == null))?null:p);
var m__25424__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__25423__auto__)]);
if(!((m__25424__auto__ == null))){
return m__25424__auto__.call(null,p,v);
} else {
var m__25424__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__25424__auto____$1 == null))){
return m__25424__auto____$1.call(null,p,v);
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
var args29671 = [];
var len__25835__auto___29796 = arguments.length;
var i__25836__auto___29797 = (0);
while(true){
if((i__25836__auto___29797 < len__25835__auto___29796)){
args29671.push((arguments[i__25836__auto___29797]));

var G__29798 = (i__25836__auto___29797 + (1));
i__25836__auto___29797 = G__29798;
continue;
} else {
}
break;
}

var G__29673 = args29671.length;
switch (G__29673) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29671.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__24760__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__24760__auto__)){
return or__24760__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__24760__auto__,mults){
return (function (p1__29670_SHARP_){
if(cljs.core.truth_(p1__29670_SHARP_.call(null,topic))){
return p1__29670_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__29670_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__24760__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async29674 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29674 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta29675){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta29675 = meta29675;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29674.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_29676,meta29675__$1){
var self__ = this;
var _29676__$1 = this;
return (new cljs.core.async.t_cljs$core$async29674(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta29675__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29674.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_29676){
var self__ = this;
var _29676__$1 = this;
return self__.meta29675;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29674.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async29674.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29674.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async29674.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29674.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async29674.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29674.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29674.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta29675","meta29675",1721849556,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29674.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29674.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29674";

cljs.core.async.t_cljs$core$async29674.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__25366__auto__,writer__25367__auto__,opt__25368__auto__){
return cljs.core._write.call(null,writer__25367__auto__,"cljs.core.async/t_cljs$core$async29674");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async29674 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async29674(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta29675){
return (new cljs.core.async.t_cljs$core$async29674(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta29675));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async29674(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__27881__auto___29800 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27881__auto___29800,mults,ensure_mult,p){
return (function (){
var f__27882__auto__ = (function (){var switch__27769__auto__ = ((function (c__27881__auto___29800,mults,ensure_mult,p){
return (function (state_29748){
var state_val_29749 = (state_29748[(1)]);
if((state_val_29749 === (7))){
var inst_29744 = (state_29748[(2)]);
var state_29748__$1 = state_29748;
var statearr_29750_29801 = state_29748__$1;
(statearr_29750_29801[(2)] = inst_29744);

(statearr_29750_29801[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29749 === (20))){
var state_29748__$1 = state_29748;
var statearr_29751_29802 = state_29748__$1;
(statearr_29751_29802[(2)] = null);

(statearr_29751_29802[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29749 === (1))){
var state_29748__$1 = state_29748;
var statearr_29752_29803 = state_29748__$1;
(statearr_29752_29803[(2)] = null);

(statearr_29752_29803[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29749 === (24))){
var inst_29727 = (state_29748[(7)]);
var inst_29736 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_29727);
var state_29748__$1 = state_29748;
var statearr_29753_29804 = state_29748__$1;
(statearr_29753_29804[(2)] = inst_29736);

(statearr_29753_29804[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29749 === (4))){
var inst_29679 = (state_29748[(8)]);
var inst_29679__$1 = (state_29748[(2)]);
var inst_29680 = (inst_29679__$1 == null);
var state_29748__$1 = (function (){var statearr_29754 = state_29748;
(statearr_29754[(8)] = inst_29679__$1);

return statearr_29754;
})();
if(cljs.core.truth_(inst_29680)){
var statearr_29755_29805 = state_29748__$1;
(statearr_29755_29805[(1)] = (5));

} else {
var statearr_29756_29806 = state_29748__$1;
(statearr_29756_29806[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29749 === (15))){
var inst_29721 = (state_29748[(2)]);
var state_29748__$1 = state_29748;
var statearr_29757_29807 = state_29748__$1;
(statearr_29757_29807[(2)] = inst_29721);

(statearr_29757_29807[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29749 === (21))){
var inst_29741 = (state_29748[(2)]);
var state_29748__$1 = (function (){var statearr_29758 = state_29748;
(statearr_29758[(9)] = inst_29741);

return statearr_29758;
})();
var statearr_29759_29808 = state_29748__$1;
(statearr_29759_29808[(2)] = null);

(statearr_29759_29808[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29749 === (13))){
var inst_29703 = (state_29748[(10)]);
var inst_29705 = cljs.core.chunked_seq_QMARK_.call(null,inst_29703);
var state_29748__$1 = state_29748;
if(inst_29705){
var statearr_29760_29809 = state_29748__$1;
(statearr_29760_29809[(1)] = (16));

} else {
var statearr_29761_29810 = state_29748__$1;
(statearr_29761_29810[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29749 === (22))){
var inst_29733 = (state_29748[(2)]);
var state_29748__$1 = state_29748;
if(cljs.core.truth_(inst_29733)){
var statearr_29762_29811 = state_29748__$1;
(statearr_29762_29811[(1)] = (23));

} else {
var statearr_29763_29812 = state_29748__$1;
(statearr_29763_29812[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29749 === (6))){
var inst_29679 = (state_29748[(8)]);
var inst_29729 = (state_29748[(11)]);
var inst_29727 = (state_29748[(7)]);
var inst_29727__$1 = topic_fn.call(null,inst_29679);
var inst_29728 = cljs.core.deref.call(null,mults);
var inst_29729__$1 = cljs.core.get.call(null,inst_29728,inst_29727__$1);
var state_29748__$1 = (function (){var statearr_29764 = state_29748;
(statearr_29764[(11)] = inst_29729__$1);

(statearr_29764[(7)] = inst_29727__$1);

return statearr_29764;
})();
if(cljs.core.truth_(inst_29729__$1)){
var statearr_29765_29813 = state_29748__$1;
(statearr_29765_29813[(1)] = (19));

} else {
var statearr_29766_29814 = state_29748__$1;
(statearr_29766_29814[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29749 === (25))){
var inst_29738 = (state_29748[(2)]);
var state_29748__$1 = state_29748;
var statearr_29767_29815 = state_29748__$1;
(statearr_29767_29815[(2)] = inst_29738);

(statearr_29767_29815[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29749 === (17))){
var inst_29703 = (state_29748[(10)]);
var inst_29712 = cljs.core.first.call(null,inst_29703);
var inst_29713 = cljs.core.async.muxch_STAR_.call(null,inst_29712);
var inst_29714 = cljs.core.async.close_BANG_.call(null,inst_29713);
var inst_29715 = cljs.core.next.call(null,inst_29703);
var inst_29689 = inst_29715;
var inst_29690 = null;
var inst_29691 = (0);
var inst_29692 = (0);
var state_29748__$1 = (function (){var statearr_29768 = state_29748;
(statearr_29768[(12)] = inst_29714);

(statearr_29768[(13)] = inst_29692);

(statearr_29768[(14)] = inst_29690);

(statearr_29768[(15)] = inst_29689);

(statearr_29768[(16)] = inst_29691);

return statearr_29768;
})();
var statearr_29769_29816 = state_29748__$1;
(statearr_29769_29816[(2)] = null);

(statearr_29769_29816[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29749 === (3))){
var inst_29746 = (state_29748[(2)]);
var state_29748__$1 = state_29748;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29748__$1,inst_29746);
} else {
if((state_val_29749 === (12))){
var inst_29723 = (state_29748[(2)]);
var state_29748__$1 = state_29748;
var statearr_29770_29817 = state_29748__$1;
(statearr_29770_29817[(2)] = inst_29723);

(statearr_29770_29817[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29749 === (2))){
var state_29748__$1 = state_29748;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29748__$1,(4),ch);
} else {
if((state_val_29749 === (23))){
var state_29748__$1 = state_29748;
var statearr_29771_29818 = state_29748__$1;
(statearr_29771_29818[(2)] = null);

(statearr_29771_29818[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29749 === (19))){
var inst_29679 = (state_29748[(8)]);
var inst_29729 = (state_29748[(11)]);
var inst_29731 = cljs.core.async.muxch_STAR_.call(null,inst_29729);
var state_29748__$1 = state_29748;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29748__$1,(22),inst_29731,inst_29679);
} else {
if((state_val_29749 === (11))){
var inst_29703 = (state_29748[(10)]);
var inst_29689 = (state_29748[(15)]);
var inst_29703__$1 = cljs.core.seq.call(null,inst_29689);
var state_29748__$1 = (function (){var statearr_29772 = state_29748;
(statearr_29772[(10)] = inst_29703__$1);

return statearr_29772;
})();
if(inst_29703__$1){
var statearr_29773_29819 = state_29748__$1;
(statearr_29773_29819[(1)] = (13));

} else {
var statearr_29774_29820 = state_29748__$1;
(statearr_29774_29820[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29749 === (9))){
var inst_29725 = (state_29748[(2)]);
var state_29748__$1 = state_29748;
var statearr_29775_29821 = state_29748__$1;
(statearr_29775_29821[(2)] = inst_29725);

(statearr_29775_29821[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29749 === (5))){
var inst_29686 = cljs.core.deref.call(null,mults);
var inst_29687 = cljs.core.vals.call(null,inst_29686);
var inst_29688 = cljs.core.seq.call(null,inst_29687);
var inst_29689 = inst_29688;
var inst_29690 = null;
var inst_29691 = (0);
var inst_29692 = (0);
var state_29748__$1 = (function (){var statearr_29776 = state_29748;
(statearr_29776[(13)] = inst_29692);

(statearr_29776[(14)] = inst_29690);

(statearr_29776[(15)] = inst_29689);

(statearr_29776[(16)] = inst_29691);

return statearr_29776;
})();
var statearr_29777_29822 = state_29748__$1;
(statearr_29777_29822[(2)] = null);

(statearr_29777_29822[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29749 === (14))){
var state_29748__$1 = state_29748;
var statearr_29781_29823 = state_29748__$1;
(statearr_29781_29823[(2)] = null);

(statearr_29781_29823[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29749 === (16))){
var inst_29703 = (state_29748[(10)]);
var inst_29707 = cljs.core.chunk_first.call(null,inst_29703);
var inst_29708 = cljs.core.chunk_rest.call(null,inst_29703);
var inst_29709 = cljs.core.count.call(null,inst_29707);
var inst_29689 = inst_29708;
var inst_29690 = inst_29707;
var inst_29691 = inst_29709;
var inst_29692 = (0);
var state_29748__$1 = (function (){var statearr_29782 = state_29748;
(statearr_29782[(13)] = inst_29692);

(statearr_29782[(14)] = inst_29690);

(statearr_29782[(15)] = inst_29689);

(statearr_29782[(16)] = inst_29691);

return statearr_29782;
})();
var statearr_29783_29824 = state_29748__$1;
(statearr_29783_29824[(2)] = null);

(statearr_29783_29824[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29749 === (10))){
var inst_29692 = (state_29748[(13)]);
var inst_29690 = (state_29748[(14)]);
var inst_29689 = (state_29748[(15)]);
var inst_29691 = (state_29748[(16)]);
var inst_29697 = cljs.core._nth.call(null,inst_29690,inst_29692);
var inst_29698 = cljs.core.async.muxch_STAR_.call(null,inst_29697);
var inst_29699 = cljs.core.async.close_BANG_.call(null,inst_29698);
var inst_29700 = (inst_29692 + (1));
var tmp29778 = inst_29690;
var tmp29779 = inst_29689;
var tmp29780 = inst_29691;
var inst_29689__$1 = tmp29779;
var inst_29690__$1 = tmp29778;
var inst_29691__$1 = tmp29780;
var inst_29692__$1 = inst_29700;
var state_29748__$1 = (function (){var statearr_29784 = state_29748;
(statearr_29784[(13)] = inst_29692__$1);

(statearr_29784[(14)] = inst_29690__$1);

(statearr_29784[(15)] = inst_29689__$1);

(statearr_29784[(17)] = inst_29699);

(statearr_29784[(16)] = inst_29691__$1);

return statearr_29784;
})();
var statearr_29785_29825 = state_29748__$1;
(statearr_29785_29825[(2)] = null);

(statearr_29785_29825[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29749 === (18))){
var inst_29718 = (state_29748[(2)]);
var state_29748__$1 = state_29748;
var statearr_29786_29826 = state_29748__$1;
(statearr_29786_29826[(2)] = inst_29718);

(statearr_29786_29826[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29749 === (8))){
var inst_29692 = (state_29748[(13)]);
var inst_29691 = (state_29748[(16)]);
var inst_29694 = (inst_29692 < inst_29691);
var inst_29695 = inst_29694;
var state_29748__$1 = state_29748;
if(cljs.core.truth_(inst_29695)){
var statearr_29787_29827 = state_29748__$1;
(statearr_29787_29827[(1)] = (10));

} else {
var statearr_29788_29828 = state_29748__$1;
(statearr_29788_29828[(1)] = (11));

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
});})(c__27881__auto___29800,mults,ensure_mult,p))
;
return ((function (switch__27769__auto__,c__27881__auto___29800,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__27770__auto__ = null;
var cljs$core$async$state_machine__27770__auto____0 = (function (){
var statearr_29792 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29792[(0)] = cljs$core$async$state_machine__27770__auto__);

(statearr_29792[(1)] = (1));

return statearr_29792;
});
var cljs$core$async$state_machine__27770__auto____1 = (function (state_29748){
while(true){
var ret_value__27771__auto__ = (function (){try{while(true){
var result__27772__auto__ = switch__27769__auto__.call(null,state_29748);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27772__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27772__auto__;
}
break;
}
}catch (e29793){if((e29793 instanceof Object)){
var ex__27773__auto__ = e29793;
var statearr_29794_29829 = state_29748;
(statearr_29794_29829[(5)] = ex__27773__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29748);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29793;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27771__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29830 = state_29748;
state_29748 = G__29830;
continue;
} else {
return ret_value__27771__auto__;
}
break;
}
});
cljs$core$async$state_machine__27770__auto__ = function(state_29748){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27770__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27770__auto____1.call(this,state_29748);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27770__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27770__auto____0;
cljs$core$async$state_machine__27770__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27770__auto____1;
return cljs$core$async$state_machine__27770__auto__;
})()
;})(switch__27769__auto__,c__27881__auto___29800,mults,ensure_mult,p))
})();
var state__27883__auto__ = (function (){var statearr_29795 = f__27882__auto__.call(null);
(statearr_29795[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27881__auto___29800);

return statearr_29795;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27883__auto__);
});})(c__27881__auto___29800,mults,ensure_mult,p))
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
var args29831 = [];
var len__25835__auto___29834 = arguments.length;
var i__25836__auto___29835 = (0);
while(true){
if((i__25836__auto___29835 < len__25835__auto___29834)){
args29831.push((arguments[i__25836__auto___29835]));

var G__29836 = (i__25836__auto___29835 + (1));
i__25836__auto___29835 = G__29836;
continue;
} else {
}
break;
}

var G__29833 = args29831.length;
switch (G__29833) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29831.length)].join('')));

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
var args29838 = [];
var len__25835__auto___29841 = arguments.length;
var i__25836__auto___29842 = (0);
while(true){
if((i__25836__auto___29842 < len__25835__auto___29841)){
args29838.push((arguments[i__25836__auto___29842]));

var G__29843 = (i__25836__auto___29842 + (1));
i__25836__auto___29842 = G__29843;
continue;
} else {
}
break;
}

var G__29840 = args29838.length;
switch (G__29840) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29838.length)].join('')));

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
var args29845 = [];
var len__25835__auto___29916 = arguments.length;
var i__25836__auto___29917 = (0);
while(true){
if((i__25836__auto___29917 < len__25835__auto___29916)){
args29845.push((arguments[i__25836__auto___29917]));

var G__29918 = (i__25836__auto___29917 + (1));
i__25836__auto___29917 = G__29918;
continue;
} else {
}
break;
}

var G__29847 = args29845.length;
switch (G__29847) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29845.length)].join('')));

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
var c__27881__auto___29920 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27881__auto___29920,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__27882__auto__ = (function (){var switch__27769__auto__ = ((function (c__27881__auto___29920,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_29886){
var state_val_29887 = (state_29886[(1)]);
if((state_val_29887 === (7))){
var state_29886__$1 = state_29886;
var statearr_29888_29921 = state_29886__$1;
(statearr_29888_29921[(2)] = null);

(statearr_29888_29921[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29887 === (1))){
var state_29886__$1 = state_29886;
var statearr_29889_29922 = state_29886__$1;
(statearr_29889_29922[(2)] = null);

(statearr_29889_29922[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29887 === (4))){
var inst_29850 = (state_29886[(7)]);
var inst_29852 = (inst_29850 < cnt);
var state_29886__$1 = state_29886;
if(cljs.core.truth_(inst_29852)){
var statearr_29890_29923 = state_29886__$1;
(statearr_29890_29923[(1)] = (6));

} else {
var statearr_29891_29924 = state_29886__$1;
(statearr_29891_29924[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29887 === (15))){
var inst_29882 = (state_29886[(2)]);
var state_29886__$1 = state_29886;
var statearr_29892_29925 = state_29886__$1;
(statearr_29892_29925[(2)] = inst_29882);

(statearr_29892_29925[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29887 === (13))){
var inst_29875 = cljs.core.async.close_BANG_.call(null,out);
var state_29886__$1 = state_29886;
var statearr_29893_29926 = state_29886__$1;
(statearr_29893_29926[(2)] = inst_29875);

(statearr_29893_29926[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29887 === (6))){
var state_29886__$1 = state_29886;
var statearr_29894_29927 = state_29886__$1;
(statearr_29894_29927[(2)] = null);

(statearr_29894_29927[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29887 === (3))){
var inst_29884 = (state_29886[(2)]);
var state_29886__$1 = state_29886;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29886__$1,inst_29884);
} else {
if((state_val_29887 === (12))){
var inst_29872 = (state_29886[(8)]);
var inst_29872__$1 = (state_29886[(2)]);
var inst_29873 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_29872__$1);
var state_29886__$1 = (function (){var statearr_29895 = state_29886;
(statearr_29895[(8)] = inst_29872__$1);

return statearr_29895;
})();
if(cljs.core.truth_(inst_29873)){
var statearr_29896_29928 = state_29886__$1;
(statearr_29896_29928[(1)] = (13));

} else {
var statearr_29897_29929 = state_29886__$1;
(statearr_29897_29929[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29887 === (2))){
var inst_29849 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_29850 = (0);
var state_29886__$1 = (function (){var statearr_29898 = state_29886;
(statearr_29898[(7)] = inst_29850);

(statearr_29898[(9)] = inst_29849);

return statearr_29898;
})();
var statearr_29899_29930 = state_29886__$1;
(statearr_29899_29930[(2)] = null);

(statearr_29899_29930[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29887 === (11))){
var inst_29850 = (state_29886[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_29886,(10),Object,null,(9));
var inst_29859 = chs__$1.call(null,inst_29850);
var inst_29860 = done.call(null,inst_29850);
var inst_29861 = cljs.core.async.take_BANG_.call(null,inst_29859,inst_29860);
var state_29886__$1 = state_29886;
var statearr_29900_29931 = state_29886__$1;
(statearr_29900_29931[(2)] = inst_29861);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29886__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29887 === (9))){
var inst_29850 = (state_29886[(7)]);
var inst_29863 = (state_29886[(2)]);
var inst_29864 = (inst_29850 + (1));
var inst_29850__$1 = inst_29864;
var state_29886__$1 = (function (){var statearr_29901 = state_29886;
(statearr_29901[(7)] = inst_29850__$1);

(statearr_29901[(10)] = inst_29863);

return statearr_29901;
})();
var statearr_29902_29932 = state_29886__$1;
(statearr_29902_29932[(2)] = null);

(statearr_29902_29932[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29887 === (5))){
var inst_29870 = (state_29886[(2)]);
var state_29886__$1 = (function (){var statearr_29903 = state_29886;
(statearr_29903[(11)] = inst_29870);

return statearr_29903;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29886__$1,(12),dchan);
} else {
if((state_val_29887 === (14))){
var inst_29872 = (state_29886[(8)]);
var inst_29877 = cljs.core.apply.call(null,f,inst_29872);
var state_29886__$1 = state_29886;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29886__$1,(16),out,inst_29877);
} else {
if((state_val_29887 === (16))){
var inst_29879 = (state_29886[(2)]);
var state_29886__$1 = (function (){var statearr_29904 = state_29886;
(statearr_29904[(12)] = inst_29879);

return statearr_29904;
})();
var statearr_29905_29933 = state_29886__$1;
(statearr_29905_29933[(2)] = null);

(statearr_29905_29933[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29887 === (10))){
var inst_29854 = (state_29886[(2)]);
var inst_29855 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_29886__$1 = (function (){var statearr_29906 = state_29886;
(statearr_29906[(13)] = inst_29854);

return statearr_29906;
})();
var statearr_29907_29934 = state_29886__$1;
(statearr_29907_29934[(2)] = inst_29855);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29886__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29887 === (8))){
var inst_29868 = (state_29886[(2)]);
var state_29886__$1 = state_29886;
var statearr_29908_29935 = state_29886__$1;
(statearr_29908_29935[(2)] = inst_29868);

(statearr_29908_29935[(1)] = (5));


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
});})(c__27881__auto___29920,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__27769__auto__,c__27881__auto___29920,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__27770__auto__ = null;
var cljs$core$async$state_machine__27770__auto____0 = (function (){
var statearr_29912 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29912[(0)] = cljs$core$async$state_machine__27770__auto__);

(statearr_29912[(1)] = (1));

return statearr_29912;
});
var cljs$core$async$state_machine__27770__auto____1 = (function (state_29886){
while(true){
var ret_value__27771__auto__ = (function (){try{while(true){
var result__27772__auto__ = switch__27769__auto__.call(null,state_29886);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27772__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27772__auto__;
}
break;
}
}catch (e29913){if((e29913 instanceof Object)){
var ex__27773__auto__ = e29913;
var statearr_29914_29936 = state_29886;
(statearr_29914_29936[(5)] = ex__27773__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29886);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29913;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27771__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29937 = state_29886;
state_29886 = G__29937;
continue;
} else {
return ret_value__27771__auto__;
}
break;
}
});
cljs$core$async$state_machine__27770__auto__ = function(state_29886){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27770__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27770__auto____1.call(this,state_29886);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27770__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27770__auto____0;
cljs$core$async$state_machine__27770__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27770__auto____1;
return cljs$core$async$state_machine__27770__auto__;
})()
;})(switch__27769__auto__,c__27881__auto___29920,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__27883__auto__ = (function (){var statearr_29915 = f__27882__auto__.call(null);
(statearr_29915[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27881__auto___29920);

return statearr_29915;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27883__auto__);
});})(c__27881__auto___29920,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args29939 = [];
var len__25835__auto___29997 = arguments.length;
var i__25836__auto___29998 = (0);
while(true){
if((i__25836__auto___29998 < len__25835__auto___29997)){
args29939.push((arguments[i__25836__auto___29998]));

var G__29999 = (i__25836__auto___29998 + (1));
i__25836__auto___29998 = G__29999;
continue;
} else {
}
break;
}

var G__29941 = args29939.length;
switch (G__29941) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29939.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27881__auto___30001 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27881__auto___30001,out){
return (function (){
var f__27882__auto__ = (function (){var switch__27769__auto__ = ((function (c__27881__auto___30001,out){
return (function (state_29973){
var state_val_29974 = (state_29973[(1)]);
if((state_val_29974 === (7))){
var inst_29953 = (state_29973[(7)]);
var inst_29952 = (state_29973[(8)]);
var inst_29952__$1 = (state_29973[(2)]);
var inst_29953__$1 = cljs.core.nth.call(null,inst_29952__$1,(0),null);
var inst_29954 = cljs.core.nth.call(null,inst_29952__$1,(1),null);
var inst_29955 = (inst_29953__$1 == null);
var state_29973__$1 = (function (){var statearr_29975 = state_29973;
(statearr_29975[(7)] = inst_29953__$1);

(statearr_29975[(9)] = inst_29954);

(statearr_29975[(8)] = inst_29952__$1);

return statearr_29975;
})();
if(cljs.core.truth_(inst_29955)){
var statearr_29976_30002 = state_29973__$1;
(statearr_29976_30002[(1)] = (8));

} else {
var statearr_29977_30003 = state_29973__$1;
(statearr_29977_30003[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29974 === (1))){
var inst_29942 = cljs.core.vec.call(null,chs);
var inst_29943 = inst_29942;
var state_29973__$1 = (function (){var statearr_29978 = state_29973;
(statearr_29978[(10)] = inst_29943);

return statearr_29978;
})();
var statearr_29979_30004 = state_29973__$1;
(statearr_29979_30004[(2)] = null);

(statearr_29979_30004[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29974 === (4))){
var inst_29943 = (state_29973[(10)]);
var state_29973__$1 = state_29973;
return cljs.core.async.ioc_alts_BANG_.call(null,state_29973__$1,(7),inst_29943);
} else {
if((state_val_29974 === (6))){
var inst_29969 = (state_29973[(2)]);
var state_29973__$1 = state_29973;
var statearr_29980_30005 = state_29973__$1;
(statearr_29980_30005[(2)] = inst_29969);

(statearr_29980_30005[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29974 === (3))){
var inst_29971 = (state_29973[(2)]);
var state_29973__$1 = state_29973;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29973__$1,inst_29971);
} else {
if((state_val_29974 === (2))){
var inst_29943 = (state_29973[(10)]);
var inst_29945 = cljs.core.count.call(null,inst_29943);
var inst_29946 = (inst_29945 > (0));
var state_29973__$1 = state_29973;
if(cljs.core.truth_(inst_29946)){
var statearr_29982_30006 = state_29973__$1;
(statearr_29982_30006[(1)] = (4));

} else {
var statearr_29983_30007 = state_29973__$1;
(statearr_29983_30007[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29974 === (11))){
var inst_29943 = (state_29973[(10)]);
var inst_29962 = (state_29973[(2)]);
var tmp29981 = inst_29943;
var inst_29943__$1 = tmp29981;
var state_29973__$1 = (function (){var statearr_29984 = state_29973;
(statearr_29984[(10)] = inst_29943__$1);

(statearr_29984[(11)] = inst_29962);

return statearr_29984;
})();
var statearr_29985_30008 = state_29973__$1;
(statearr_29985_30008[(2)] = null);

(statearr_29985_30008[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29974 === (9))){
var inst_29953 = (state_29973[(7)]);
var state_29973__$1 = state_29973;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29973__$1,(11),out,inst_29953);
} else {
if((state_val_29974 === (5))){
var inst_29967 = cljs.core.async.close_BANG_.call(null,out);
var state_29973__$1 = state_29973;
var statearr_29986_30009 = state_29973__$1;
(statearr_29986_30009[(2)] = inst_29967);

(statearr_29986_30009[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29974 === (10))){
var inst_29965 = (state_29973[(2)]);
var state_29973__$1 = state_29973;
var statearr_29987_30010 = state_29973__$1;
(statearr_29987_30010[(2)] = inst_29965);

(statearr_29987_30010[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29974 === (8))){
var inst_29953 = (state_29973[(7)]);
var inst_29954 = (state_29973[(9)]);
var inst_29943 = (state_29973[(10)]);
var inst_29952 = (state_29973[(8)]);
var inst_29957 = (function (){var cs = inst_29943;
var vec__29948 = inst_29952;
var v = inst_29953;
var c = inst_29954;
return ((function (cs,vec__29948,v,c,inst_29953,inst_29954,inst_29943,inst_29952,state_val_29974,c__27881__auto___30001,out){
return (function (p1__29938_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__29938_SHARP_);
});
;})(cs,vec__29948,v,c,inst_29953,inst_29954,inst_29943,inst_29952,state_val_29974,c__27881__auto___30001,out))
})();
var inst_29958 = cljs.core.filterv.call(null,inst_29957,inst_29943);
var inst_29943__$1 = inst_29958;
var state_29973__$1 = (function (){var statearr_29988 = state_29973;
(statearr_29988[(10)] = inst_29943__$1);

return statearr_29988;
})();
var statearr_29989_30011 = state_29973__$1;
(statearr_29989_30011[(2)] = null);

(statearr_29989_30011[(1)] = (2));


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
});})(c__27881__auto___30001,out))
;
return ((function (switch__27769__auto__,c__27881__auto___30001,out){
return (function() {
var cljs$core$async$state_machine__27770__auto__ = null;
var cljs$core$async$state_machine__27770__auto____0 = (function (){
var statearr_29993 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29993[(0)] = cljs$core$async$state_machine__27770__auto__);

(statearr_29993[(1)] = (1));

return statearr_29993;
});
var cljs$core$async$state_machine__27770__auto____1 = (function (state_29973){
while(true){
var ret_value__27771__auto__ = (function (){try{while(true){
var result__27772__auto__ = switch__27769__auto__.call(null,state_29973);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27772__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27772__auto__;
}
break;
}
}catch (e29994){if((e29994 instanceof Object)){
var ex__27773__auto__ = e29994;
var statearr_29995_30012 = state_29973;
(statearr_29995_30012[(5)] = ex__27773__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29973);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29994;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27771__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30013 = state_29973;
state_29973 = G__30013;
continue;
} else {
return ret_value__27771__auto__;
}
break;
}
});
cljs$core$async$state_machine__27770__auto__ = function(state_29973){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27770__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27770__auto____1.call(this,state_29973);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27770__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27770__auto____0;
cljs$core$async$state_machine__27770__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27770__auto____1;
return cljs$core$async$state_machine__27770__auto__;
})()
;})(switch__27769__auto__,c__27881__auto___30001,out))
})();
var state__27883__auto__ = (function (){var statearr_29996 = f__27882__auto__.call(null);
(statearr_29996[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27881__auto___30001);

return statearr_29996;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27883__auto__);
});})(c__27881__auto___30001,out))
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
var args30014 = [];
var len__25835__auto___30063 = arguments.length;
var i__25836__auto___30064 = (0);
while(true){
if((i__25836__auto___30064 < len__25835__auto___30063)){
args30014.push((arguments[i__25836__auto___30064]));

var G__30065 = (i__25836__auto___30064 + (1));
i__25836__auto___30064 = G__30065;
continue;
} else {
}
break;
}

var G__30016 = args30014.length;
switch (G__30016) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30014.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27881__auto___30067 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27881__auto___30067,out){
return (function (){
var f__27882__auto__ = (function (){var switch__27769__auto__ = ((function (c__27881__auto___30067,out){
return (function (state_30040){
var state_val_30041 = (state_30040[(1)]);
if((state_val_30041 === (7))){
var inst_30022 = (state_30040[(7)]);
var inst_30022__$1 = (state_30040[(2)]);
var inst_30023 = (inst_30022__$1 == null);
var inst_30024 = cljs.core.not.call(null,inst_30023);
var state_30040__$1 = (function (){var statearr_30042 = state_30040;
(statearr_30042[(7)] = inst_30022__$1);

return statearr_30042;
})();
if(inst_30024){
var statearr_30043_30068 = state_30040__$1;
(statearr_30043_30068[(1)] = (8));

} else {
var statearr_30044_30069 = state_30040__$1;
(statearr_30044_30069[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30041 === (1))){
var inst_30017 = (0);
var state_30040__$1 = (function (){var statearr_30045 = state_30040;
(statearr_30045[(8)] = inst_30017);

return statearr_30045;
})();
var statearr_30046_30070 = state_30040__$1;
(statearr_30046_30070[(2)] = null);

(statearr_30046_30070[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30041 === (4))){
var state_30040__$1 = state_30040;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30040__$1,(7),ch);
} else {
if((state_val_30041 === (6))){
var inst_30035 = (state_30040[(2)]);
var state_30040__$1 = state_30040;
var statearr_30047_30071 = state_30040__$1;
(statearr_30047_30071[(2)] = inst_30035);

(statearr_30047_30071[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30041 === (3))){
var inst_30037 = (state_30040[(2)]);
var inst_30038 = cljs.core.async.close_BANG_.call(null,out);
var state_30040__$1 = (function (){var statearr_30048 = state_30040;
(statearr_30048[(9)] = inst_30037);

return statearr_30048;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30040__$1,inst_30038);
} else {
if((state_val_30041 === (2))){
var inst_30017 = (state_30040[(8)]);
var inst_30019 = (inst_30017 < n);
var state_30040__$1 = state_30040;
if(cljs.core.truth_(inst_30019)){
var statearr_30049_30072 = state_30040__$1;
(statearr_30049_30072[(1)] = (4));

} else {
var statearr_30050_30073 = state_30040__$1;
(statearr_30050_30073[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30041 === (11))){
var inst_30017 = (state_30040[(8)]);
var inst_30027 = (state_30040[(2)]);
var inst_30028 = (inst_30017 + (1));
var inst_30017__$1 = inst_30028;
var state_30040__$1 = (function (){var statearr_30051 = state_30040;
(statearr_30051[(8)] = inst_30017__$1);

(statearr_30051[(10)] = inst_30027);

return statearr_30051;
})();
var statearr_30052_30074 = state_30040__$1;
(statearr_30052_30074[(2)] = null);

(statearr_30052_30074[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30041 === (9))){
var state_30040__$1 = state_30040;
var statearr_30053_30075 = state_30040__$1;
(statearr_30053_30075[(2)] = null);

(statearr_30053_30075[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30041 === (5))){
var state_30040__$1 = state_30040;
var statearr_30054_30076 = state_30040__$1;
(statearr_30054_30076[(2)] = null);

(statearr_30054_30076[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30041 === (10))){
var inst_30032 = (state_30040[(2)]);
var state_30040__$1 = state_30040;
var statearr_30055_30077 = state_30040__$1;
(statearr_30055_30077[(2)] = inst_30032);

(statearr_30055_30077[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30041 === (8))){
var inst_30022 = (state_30040[(7)]);
var state_30040__$1 = state_30040;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30040__$1,(11),out,inst_30022);
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
});})(c__27881__auto___30067,out))
;
return ((function (switch__27769__auto__,c__27881__auto___30067,out){
return (function() {
var cljs$core$async$state_machine__27770__auto__ = null;
var cljs$core$async$state_machine__27770__auto____0 = (function (){
var statearr_30059 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30059[(0)] = cljs$core$async$state_machine__27770__auto__);

(statearr_30059[(1)] = (1));

return statearr_30059;
});
var cljs$core$async$state_machine__27770__auto____1 = (function (state_30040){
while(true){
var ret_value__27771__auto__ = (function (){try{while(true){
var result__27772__auto__ = switch__27769__auto__.call(null,state_30040);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27772__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27772__auto__;
}
break;
}
}catch (e30060){if((e30060 instanceof Object)){
var ex__27773__auto__ = e30060;
var statearr_30061_30078 = state_30040;
(statearr_30061_30078[(5)] = ex__27773__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30040);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30060;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27771__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30079 = state_30040;
state_30040 = G__30079;
continue;
} else {
return ret_value__27771__auto__;
}
break;
}
});
cljs$core$async$state_machine__27770__auto__ = function(state_30040){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27770__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27770__auto____1.call(this,state_30040);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27770__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27770__auto____0;
cljs$core$async$state_machine__27770__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27770__auto____1;
return cljs$core$async$state_machine__27770__auto__;
})()
;})(switch__27769__auto__,c__27881__auto___30067,out))
})();
var state__27883__auto__ = (function (){var statearr_30062 = f__27882__auto__.call(null);
(statearr_30062[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27881__auto___30067);

return statearr_30062;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27883__auto__);
});})(c__27881__auto___30067,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async30087 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30087 = (function (map_LT_,f,ch,meta30088){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta30088 = meta30088;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30087.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30089,meta30088__$1){
var self__ = this;
var _30089__$1 = this;
return (new cljs.core.async.t_cljs$core$async30087(self__.map_LT_,self__.f,self__.ch,meta30088__$1));
});

cljs.core.async.t_cljs$core$async30087.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30089){
var self__ = this;
var _30089__$1 = this;
return self__.meta30088;
});

cljs.core.async.t_cljs$core$async30087.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async30087.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async30087.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async30087.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async30087.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async30090 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30090 = (function (map_LT_,f,ch,meta30088,_,fn1,meta30091){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta30088 = meta30088;
this._ = _;
this.fn1 = fn1;
this.meta30091 = meta30091;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30090.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_30092,meta30091__$1){
var self__ = this;
var _30092__$1 = this;
return (new cljs.core.async.t_cljs$core$async30090(self__.map_LT_,self__.f,self__.ch,self__.meta30088,self__._,self__.fn1,meta30091__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async30090.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_30092){
var self__ = this;
var _30092__$1 = this;
return self__.meta30091;
});})(___$1))
;

cljs.core.async.t_cljs$core$async30090.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async30090.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async30090.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async30090.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__30080_SHARP_){
return f1.call(null,(((p1__30080_SHARP_ == null))?null:self__.f.call(null,p1__30080_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async30090.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta30088","meta30088",867014890,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async30087","cljs.core.async/t_cljs$core$async30087",1345783889,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta30091","meta30091",-1798148299,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async30090.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30090.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30090";

cljs.core.async.t_cljs$core$async30090.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__25366__auto__,writer__25367__auto__,opt__25368__auto__){
return cljs.core._write.call(null,writer__25367__auto__,"cljs.core.async/t_cljs$core$async30090");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async30090 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async30090(map_LT___$1,f__$1,ch__$1,meta30088__$1,___$2,fn1__$1,meta30091){
return (new cljs.core.async.t_cljs$core$async30090(map_LT___$1,f__$1,ch__$1,meta30088__$1,___$2,fn1__$1,meta30091));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async30090(self__.map_LT_,self__.f,self__.ch,self__.meta30088,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__24748__auto__ = ret;
if(cljs.core.truth_(and__24748__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__24748__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async30087.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async30087.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async30087.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta30088","meta30088",867014890,null)], null);
});

cljs.core.async.t_cljs$core$async30087.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30087.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30087";

cljs.core.async.t_cljs$core$async30087.cljs$lang$ctorPrWriter = (function (this__25366__auto__,writer__25367__auto__,opt__25368__auto__){
return cljs.core._write.call(null,writer__25367__auto__,"cljs.core.async/t_cljs$core$async30087");
});

cljs.core.async.__GT_t_cljs$core$async30087 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async30087(map_LT___$1,f__$1,ch__$1,meta30088){
return (new cljs.core.async.t_cljs$core$async30087(map_LT___$1,f__$1,ch__$1,meta30088));
});

}

return (new cljs.core.async.t_cljs$core$async30087(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async30096 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30096 = (function (map_GT_,f,ch,meta30097){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta30097 = meta30097;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30096.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30098,meta30097__$1){
var self__ = this;
var _30098__$1 = this;
return (new cljs.core.async.t_cljs$core$async30096(self__.map_GT_,self__.f,self__.ch,meta30097__$1));
});

cljs.core.async.t_cljs$core$async30096.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30098){
var self__ = this;
var _30098__$1 = this;
return self__.meta30097;
});

cljs.core.async.t_cljs$core$async30096.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async30096.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async30096.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async30096.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async30096.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async30096.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async30096.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta30097","meta30097",-276448642,null)], null);
});

cljs.core.async.t_cljs$core$async30096.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30096.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30096";

cljs.core.async.t_cljs$core$async30096.cljs$lang$ctorPrWriter = (function (this__25366__auto__,writer__25367__auto__,opt__25368__auto__){
return cljs.core._write.call(null,writer__25367__auto__,"cljs.core.async/t_cljs$core$async30096");
});

cljs.core.async.__GT_t_cljs$core$async30096 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async30096(map_GT___$1,f__$1,ch__$1,meta30097){
return (new cljs.core.async.t_cljs$core$async30096(map_GT___$1,f__$1,ch__$1,meta30097));
});

}

return (new cljs.core.async.t_cljs$core$async30096(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async30102 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30102 = (function (filter_GT_,p,ch,meta30103){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta30103 = meta30103;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30102.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30104,meta30103__$1){
var self__ = this;
var _30104__$1 = this;
return (new cljs.core.async.t_cljs$core$async30102(self__.filter_GT_,self__.p,self__.ch,meta30103__$1));
});

cljs.core.async.t_cljs$core$async30102.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30104){
var self__ = this;
var _30104__$1 = this;
return self__.meta30103;
});

cljs.core.async.t_cljs$core$async30102.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async30102.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async30102.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async30102.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async30102.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async30102.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async30102.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async30102.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta30103","meta30103",34994744,null)], null);
});

cljs.core.async.t_cljs$core$async30102.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30102.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30102";

cljs.core.async.t_cljs$core$async30102.cljs$lang$ctorPrWriter = (function (this__25366__auto__,writer__25367__auto__,opt__25368__auto__){
return cljs.core._write.call(null,writer__25367__auto__,"cljs.core.async/t_cljs$core$async30102");
});

cljs.core.async.__GT_t_cljs$core$async30102 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async30102(filter_GT___$1,p__$1,ch__$1,meta30103){
return (new cljs.core.async.t_cljs$core$async30102(filter_GT___$1,p__$1,ch__$1,meta30103));
});

}

return (new cljs.core.async.t_cljs$core$async30102(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args30105 = [];
var len__25835__auto___30149 = arguments.length;
var i__25836__auto___30150 = (0);
while(true){
if((i__25836__auto___30150 < len__25835__auto___30149)){
args30105.push((arguments[i__25836__auto___30150]));

var G__30151 = (i__25836__auto___30150 + (1));
i__25836__auto___30150 = G__30151;
continue;
} else {
}
break;
}

var G__30107 = args30105.length;
switch (G__30107) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30105.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27881__auto___30153 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27881__auto___30153,out){
return (function (){
var f__27882__auto__ = (function (){var switch__27769__auto__ = ((function (c__27881__auto___30153,out){
return (function (state_30128){
var state_val_30129 = (state_30128[(1)]);
if((state_val_30129 === (7))){
var inst_30124 = (state_30128[(2)]);
var state_30128__$1 = state_30128;
var statearr_30130_30154 = state_30128__$1;
(statearr_30130_30154[(2)] = inst_30124);

(statearr_30130_30154[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30129 === (1))){
var state_30128__$1 = state_30128;
var statearr_30131_30155 = state_30128__$1;
(statearr_30131_30155[(2)] = null);

(statearr_30131_30155[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30129 === (4))){
var inst_30110 = (state_30128[(7)]);
var inst_30110__$1 = (state_30128[(2)]);
var inst_30111 = (inst_30110__$1 == null);
var state_30128__$1 = (function (){var statearr_30132 = state_30128;
(statearr_30132[(7)] = inst_30110__$1);

return statearr_30132;
})();
if(cljs.core.truth_(inst_30111)){
var statearr_30133_30156 = state_30128__$1;
(statearr_30133_30156[(1)] = (5));

} else {
var statearr_30134_30157 = state_30128__$1;
(statearr_30134_30157[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30129 === (6))){
var inst_30110 = (state_30128[(7)]);
var inst_30115 = p.call(null,inst_30110);
var state_30128__$1 = state_30128;
if(cljs.core.truth_(inst_30115)){
var statearr_30135_30158 = state_30128__$1;
(statearr_30135_30158[(1)] = (8));

} else {
var statearr_30136_30159 = state_30128__$1;
(statearr_30136_30159[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30129 === (3))){
var inst_30126 = (state_30128[(2)]);
var state_30128__$1 = state_30128;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30128__$1,inst_30126);
} else {
if((state_val_30129 === (2))){
var state_30128__$1 = state_30128;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30128__$1,(4),ch);
} else {
if((state_val_30129 === (11))){
var inst_30118 = (state_30128[(2)]);
var state_30128__$1 = state_30128;
var statearr_30137_30160 = state_30128__$1;
(statearr_30137_30160[(2)] = inst_30118);

(statearr_30137_30160[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30129 === (9))){
var state_30128__$1 = state_30128;
var statearr_30138_30161 = state_30128__$1;
(statearr_30138_30161[(2)] = null);

(statearr_30138_30161[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30129 === (5))){
var inst_30113 = cljs.core.async.close_BANG_.call(null,out);
var state_30128__$1 = state_30128;
var statearr_30139_30162 = state_30128__$1;
(statearr_30139_30162[(2)] = inst_30113);

(statearr_30139_30162[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30129 === (10))){
var inst_30121 = (state_30128[(2)]);
var state_30128__$1 = (function (){var statearr_30140 = state_30128;
(statearr_30140[(8)] = inst_30121);

return statearr_30140;
})();
var statearr_30141_30163 = state_30128__$1;
(statearr_30141_30163[(2)] = null);

(statearr_30141_30163[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30129 === (8))){
var inst_30110 = (state_30128[(7)]);
var state_30128__$1 = state_30128;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30128__$1,(11),out,inst_30110);
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
});})(c__27881__auto___30153,out))
;
return ((function (switch__27769__auto__,c__27881__auto___30153,out){
return (function() {
var cljs$core$async$state_machine__27770__auto__ = null;
var cljs$core$async$state_machine__27770__auto____0 = (function (){
var statearr_30145 = [null,null,null,null,null,null,null,null,null];
(statearr_30145[(0)] = cljs$core$async$state_machine__27770__auto__);

(statearr_30145[(1)] = (1));

return statearr_30145;
});
var cljs$core$async$state_machine__27770__auto____1 = (function (state_30128){
while(true){
var ret_value__27771__auto__ = (function (){try{while(true){
var result__27772__auto__ = switch__27769__auto__.call(null,state_30128);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27772__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27772__auto__;
}
break;
}
}catch (e30146){if((e30146 instanceof Object)){
var ex__27773__auto__ = e30146;
var statearr_30147_30164 = state_30128;
(statearr_30147_30164[(5)] = ex__27773__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30128);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30146;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27771__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30165 = state_30128;
state_30128 = G__30165;
continue;
} else {
return ret_value__27771__auto__;
}
break;
}
});
cljs$core$async$state_machine__27770__auto__ = function(state_30128){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27770__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27770__auto____1.call(this,state_30128);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27770__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27770__auto____0;
cljs$core$async$state_machine__27770__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27770__auto____1;
return cljs$core$async$state_machine__27770__auto__;
})()
;})(switch__27769__auto__,c__27881__auto___30153,out))
})();
var state__27883__auto__ = (function (){var statearr_30148 = f__27882__auto__.call(null);
(statearr_30148[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27881__auto___30153);

return statearr_30148;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27883__auto__);
});})(c__27881__auto___30153,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args30166 = [];
var len__25835__auto___30169 = arguments.length;
var i__25836__auto___30170 = (0);
while(true){
if((i__25836__auto___30170 < len__25835__auto___30169)){
args30166.push((arguments[i__25836__auto___30170]));

var G__30171 = (i__25836__auto___30170 + (1));
i__25836__auto___30170 = G__30171;
continue;
} else {
}
break;
}

var G__30168 = args30166.length;
switch (G__30168) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30166.length)].join('')));

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
var c__27881__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27881__auto__){
return (function (){
var f__27882__auto__ = (function (){var switch__27769__auto__ = ((function (c__27881__auto__){
return (function (state_30338){
var state_val_30339 = (state_30338[(1)]);
if((state_val_30339 === (7))){
var inst_30334 = (state_30338[(2)]);
var state_30338__$1 = state_30338;
var statearr_30340_30381 = state_30338__$1;
(statearr_30340_30381[(2)] = inst_30334);

(statearr_30340_30381[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30339 === (20))){
var inst_30304 = (state_30338[(7)]);
var inst_30315 = (state_30338[(2)]);
var inst_30316 = cljs.core.next.call(null,inst_30304);
var inst_30290 = inst_30316;
var inst_30291 = null;
var inst_30292 = (0);
var inst_30293 = (0);
var state_30338__$1 = (function (){var statearr_30341 = state_30338;
(statearr_30341[(8)] = inst_30293);

(statearr_30341[(9)] = inst_30292);

(statearr_30341[(10)] = inst_30290);

(statearr_30341[(11)] = inst_30291);

(statearr_30341[(12)] = inst_30315);

return statearr_30341;
})();
var statearr_30342_30382 = state_30338__$1;
(statearr_30342_30382[(2)] = null);

(statearr_30342_30382[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30339 === (1))){
var state_30338__$1 = state_30338;
var statearr_30343_30383 = state_30338__$1;
(statearr_30343_30383[(2)] = null);

(statearr_30343_30383[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30339 === (4))){
var inst_30279 = (state_30338[(13)]);
var inst_30279__$1 = (state_30338[(2)]);
var inst_30280 = (inst_30279__$1 == null);
var state_30338__$1 = (function (){var statearr_30344 = state_30338;
(statearr_30344[(13)] = inst_30279__$1);

return statearr_30344;
})();
if(cljs.core.truth_(inst_30280)){
var statearr_30345_30384 = state_30338__$1;
(statearr_30345_30384[(1)] = (5));

} else {
var statearr_30346_30385 = state_30338__$1;
(statearr_30346_30385[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30339 === (15))){
var state_30338__$1 = state_30338;
var statearr_30350_30386 = state_30338__$1;
(statearr_30350_30386[(2)] = null);

(statearr_30350_30386[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30339 === (21))){
var state_30338__$1 = state_30338;
var statearr_30351_30387 = state_30338__$1;
(statearr_30351_30387[(2)] = null);

(statearr_30351_30387[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30339 === (13))){
var inst_30293 = (state_30338[(8)]);
var inst_30292 = (state_30338[(9)]);
var inst_30290 = (state_30338[(10)]);
var inst_30291 = (state_30338[(11)]);
var inst_30300 = (state_30338[(2)]);
var inst_30301 = (inst_30293 + (1));
var tmp30347 = inst_30292;
var tmp30348 = inst_30290;
var tmp30349 = inst_30291;
var inst_30290__$1 = tmp30348;
var inst_30291__$1 = tmp30349;
var inst_30292__$1 = tmp30347;
var inst_30293__$1 = inst_30301;
var state_30338__$1 = (function (){var statearr_30352 = state_30338;
(statearr_30352[(8)] = inst_30293__$1);

(statearr_30352[(14)] = inst_30300);

(statearr_30352[(9)] = inst_30292__$1);

(statearr_30352[(10)] = inst_30290__$1);

(statearr_30352[(11)] = inst_30291__$1);

return statearr_30352;
})();
var statearr_30353_30388 = state_30338__$1;
(statearr_30353_30388[(2)] = null);

(statearr_30353_30388[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30339 === (22))){
var state_30338__$1 = state_30338;
var statearr_30354_30389 = state_30338__$1;
(statearr_30354_30389[(2)] = null);

(statearr_30354_30389[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30339 === (6))){
var inst_30279 = (state_30338[(13)]);
var inst_30288 = f.call(null,inst_30279);
var inst_30289 = cljs.core.seq.call(null,inst_30288);
var inst_30290 = inst_30289;
var inst_30291 = null;
var inst_30292 = (0);
var inst_30293 = (0);
var state_30338__$1 = (function (){var statearr_30355 = state_30338;
(statearr_30355[(8)] = inst_30293);

(statearr_30355[(9)] = inst_30292);

(statearr_30355[(10)] = inst_30290);

(statearr_30355[(11)] = inst_30291);

return statearr_30355;
})();
var statearr_30356_30390 = state_30338__$1;
(statearr_30356_30390[(2)] = null);

(statearr_30356_30390[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30339 === (17))){
var inst_30304 = (state_30338[(7)]);
var inst_30308 = cljs.core.chunk_first.call(null,inst_30304);
var inst_30309 = cljs.core.chunk_rest.call(null,inst_30304);
var inst_30310 = cljs.core.count.call(null,inst_30308);
var inst_30290 = inst_30309;
var inst_30291 = inst_30308;
var inst_30292 = inst_30310;
var inst_30293 = (0);
var state_30338__$1 = (function (){var statearr_30357 = state_30338;
(statearr_30357[(8)] = inst_30293);

(statearr_30357[(9)] = inst_30292);

(statearr_30357[(10)] = inst_30290);

(statearr_30357[(11)] = inst_30291);

return statearr_30357;
})();
var statearr_30358_30391 = state_30338__$1;
(statearr_30358_30391[(2)] = null);

(statearr_30358_30391[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30339 === (3))){
var inst_30336 = (state_30338[(2)]);
var state_30338__$1 = state_30338;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30338__$1,inst_30336);
} else {
if((state_val_30339 === (12))){
var inst_30324 = (state_30338[(2)]);
var state_30338__$1 = state_30338;
var statearr_30359_30392 = state_30338__$1;
(statearr_30359_30392[(2)] = inst_30324);

(statearr_30359_30392[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30339 === (2))){
var state_30338__$1 = state_30338;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30338__$1,(4),in$);
} else {
if((state_val_30339 === (23))){
var inst_30332 = (state_30338[(2)]);
var state_30338__$1 = state_30338;
var statearr_30360_30393 = state_30338__$1;
(statearr_30360_30393[(2)] = inst_30332);

(statearr_30360_30393[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30339 === (19))){
var inst_30319 = (state_30338[(2)]);
var state_30338__$1 = state_30338;
var statearr_30361_30394 = state_30338__$1;
(statearr_30361_30394[(2)] = inst_30319);

(statearr_30361_30394[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30339 === (11))){
var inst_30290 = (state_30338[(10)]);
var inst_30304 = (state_30338[(7)]);
var inst_30304__$1 = cljs.core.seq.call(null,inst_30290);
var state_30338__$1 = (function (){var statearr_30362 = state_30338;
(statearr_30362[(7)] = inst_30304__$1);

return statearr_30362;
})();
if(inst_30304__$1){
var statearr_30363_30395 = state_30338__$1;
(statearr_30363_30395[(1)] = (14));

} else {
var statearr_30364_30396 = state_30338__$1;
(statearr_30364_30396[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30339 === (9))){
var inst_30326 = (state_30338[(2)]);
var inst_30327 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_30338__$1 = (function (){var statearr_30365 = state_30338;
(statearr_30365[(15)] = inst_30326);

return statearr_30365;
})();
if(cljs.core.truth_(inst_30327)){
var statearr_30366_30397 = state_30338__$1;
(statearr_30366_30397[(1)] = (21));

} else {
var statearr_30367_30398 = state_30338__$1;
(statearr_30367_30398[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30339 === (5))){
var inst_30282 = cljs.core.async.close_BANG_.call(null,out);
var state_30338__$1 = state_30338;
var statearr_30368_30399 = state_30338__$1;
(statearr_30368_30399[(2)] = inst_30282);

(statearr_30368_30399[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30339 === (14))){
var inst_30304 = (state_30338[(7)]);
var inst_30306 = cljs.core.chunked_seq_QMARK_.call(null,inst_30304);
var state_30338__$1 = state_30338;
if(inst_30306){
var statearr_30369_30400 = state_30338__$1;
(statearr_30369_30400[(1)] = (17));

} else {
var statearr_30370_30401 = state_30338__$1;
(statearr_30370_30401[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30339 === (16))){
var inst_30322 = (state_30338[(2)]);
var state_30338__$1 = state_30338;
var statearr_30371_30402 = state_30338__$1;
(statearr_30371_30402[(2)] = inst_30322);

(statearr_30371_30402[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30339 === (10))){
var inst_30293 = (state_30338[(8)]);
var inst_30291 = (state_30338[(11)]);
var inst_30298 = cljs.core._nth.call(null,inst_30291,inst_30293);
var state_30338__$1 = state_30338;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30338__$1,(13),out,inst_30298);
} else {
if((state_val_30339 === (18))){
var inst_30304 = (state_30338[(7)]);
var inst_30313 = cljs.core.first.call(null,inst_30304);
var state_30338__$1 = state_30338;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30338__$1,(20),out,inst_30313);
} else {
if((state_val_30339 === (8))){
var inst_30293 = (state_30338[(8)]);
var inst_30292 = (state_30338[(9)]);
var inst_30295 = (inst_30293 < inst_30292);
var inst_30296 = inst_30295;
var state_30338__$1 = state_30338;
if(cljs.core.truth_(inst_30296)){
var statearr_30372_30403 = state_30338__$1;
(statearr_30372_30403[(1)] = (10));

} else {
var statearr_30373_30404 = state_30338__$1;
(statearr_30373_30404[(1)] = (11));

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
});})(c__27881__auto__))
;
return ((function (switch__27769__auto__,c__27881__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__27770__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__27770__auto____0 = (function (){
var statearr_30377 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30377[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__27770__auto__);

(statearr_30377[(1)] = (1));

return statearr_30377;
});
var cljs$core$async$mapcat_STAR__$_state_machine__27770__auto____1 = (function (state_30338){
while(true){
var ret_value__27771__auto__ = (function (){try{while(true){
var result__27772__auto__ = switch__27769__auto__.call(null,state_30338);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27772__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27772__auto__;
}
break;
}
}catch (e30378){if((e30378 instanceof Object)){
var ex__27773__auto__ = e30378;
var statearr_30379_30405 = state_30338;
(statearr_30379_30405[(5)] = ex__27773__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30338);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30378;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27771__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30406 = state_30338;
state_30338 = G__30406;
continue;
} else {
return ret_value__27771__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__27770__auto__ = function(state_30338){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__27770__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__27770__auto____1.call(this,state_30338);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__27770__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__27770__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__27770__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__27770__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__27770__auto__;
})()
;})(switch__27769__auto__,c__27881__auto__))
})();
var state__27883__auto__ = (function (){var statearr_30380 = f__27882__auto__.call(null);
(statearr_30380[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27881__auto__);

return statearr_30380;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27883__auto__);
});})(c__27881__auto__))
);

return c__27881__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args30407 = [];
var len__25835__auto___30410 = arguments.length;
var i__25836__auto___30411 = (0);
while(true){
if((i__25836__auto___30411 < len__25835__auto___30410)){
args30407.push((arguments[i__25836__auto___30411]));

var G__30412 = (i__25836__auto___30411 + (1));
i__25836__auto___30411 = G__30412;
continue;
} else {
}
break;
}

var G__30409 = args30407.length;
switch (G__30409) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30407.length)].join('')));

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
var args30414 = [];
var len__25835__auto___30417 = arguments.length;
var i__25836__auto___30418 = (0);
while(true){
if((i__25836__auto___30418 < len__25835__auto___30417)){
args30414.push((arguments[i__25836__auto___30418]));

var G__30419 = (i__25836__auto___30418 + (1));
i__25836__auto___30418 = G__30419;
continue;
} else {
}
break;
}

var G__30416 = args30414.length;
switch (G__30416) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30414.length)].join('')));

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
var args30421 = [];
var len__25835__auto___30472 = arguments.length;
var i__25836__auto___30473 = (0);
while(true){
if((i__25836__auto___30473 < len__25835__auto___30472)){
args30421.push((arguments[i__25836__auto___30473]));

var G__30474 = (i__25836__auto___30473 + (1));
i__25836__auto___30473 = G__30474;
continue;
} else {
}
break;
}

var G__30423 = args30421.length;
switch (G__30423) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30421.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27881__auto___30476 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27881__auto___30476,out){
return (function (){
var f__27882__auto__ = (function (){var switch__27769__auto__ = ((function (c__27881__auto___30476,out){
return (function (state_30447){
var state_val_30448 = (state_30447[(1)]);
if((state_val_30448 === (7))){
var inst_30442 = (state_30447[(2)]);
var state_30447__$1 = state_30447;
var statearr_30449_30477 = state_30447__$1;
(statearr_30449_30477[(2)] = inst_30442);

(statearr_30449_30477[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30448 === (1))){
var inst_30424 = null;
var state_30447__$1 = (function (){var statearr_30450 = state_30447;
(statearr_30450[(7)] = inst_30424);

return statearr_30450;
})();
var statearr_30451_30478 = state_30447__$1;
(statearr_30451_30478[(2)] = null);

(statearr_30451_30478[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30448 === (4))){
var inst_30427 = (state_30447[(8)]);
var inst_30427__$1 = (state_30447[(2)]);
var inst_30428 = (inst_30427__$1 == null);
var inst_30429 = cljs.core.not.call(null,inst_30428);
var state_30447__$1 = (function (){var statearr_30452 = state_30447;
(statearr_30452[(8)] = inst_30427__$1);

return statearr_30452;
})();
if(inst_30429){
var statearr_30453_30479 = state_30447__$1;
(statearr_30453_30479[(1)] = (5));

} else {
var statearr_30454_30480 = state_30447__$1;
(statearr_30454_30480[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30448 === (6))){
var state_30447__$1 = state_30447;
var statearr_30455_30481 = state_30447__$1;
(statearr_30455_30481[(2)] = null);

(statearr_30455_30481[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30448 === (3))){
var inst_30444 = (state_30447[(2)]);
var inst_30445 = cljs.core.async.close_BANG_.call(null,out);
var state_30447__$1 = (function (){var statearr_30456 = state_30447;
(statearr_30456[(9)] = inst_30444);

return statearr_30456;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30447__$1,inst_30445);
} else {
if((state_val_30448 === (2))){
var state_30447__$1 = state_30447;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30447__$1,(4),ch);
} else {
if((state_val_30448 === (11))){
var inst_30427 = (state_30447[(8)]);
var inst_30436 = (state_30447[(2)]);
var inst_30424 = inst_30427;
var state_30447__$1 = (function (){var statearr_30457 = state_30447;
(statearr_30457[(7)] = inst_30424);

(statearr_30457[(10)] = inst_30436);

return statearr_30457;
})();
var statearr_30458_30482 = state_30447__$1;
(statearr_30458_30482[(2)] = null);

(statearr_30458_30482[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30448 === (9))){
var inst_30427 = (state_30447[(8)]);
var state_30447__$1 = state_30447;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30447__$1,(11),out,inst_30427);
} else {
if((state_val_30448 === (5))){
var inst_30424 = (state_30447[(7)]);
var inst_30427 = (state_30447[(8)]);
var inst_30431 = cljs.core._EQ_.call(null,inst_30427,inst_30424);
var state_30447__$1 = state_30447;
if(inst_30431){
var statearr_30460_30483 = state_30447__$1;
(statearr_30460_30483[(1)] = (8));

} else {
var statearr_30461_30484 = state_30447__$1;
(statearr_30461_30484[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30448 === (10))){
var inst_30439 = (state_30447[(2)]);
var state_30447__$1 = state_30447;
var statearr_30462_30485 = state_30447__$1;
(statearr_30462_30485[(2)] = inst_30439);

(statearr_30462_30485[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30448 === (8))){
var inst_30424 = (state_30447[(7)]);
var tmp30459 = inst_30424;
var inst_30424__$1 = tmp30459;
var state_30447__$1 = (function (){var statearr_30463 = state_30447;
(statearr_30463[(7)] = inst_30424__$1);

return statearr_30463;
})();
var statearr_30464_30486 = state_30447__$1;
(statearr_30464_30486[(2)] = null);

(statearr_30464_30486[(1)] = (2));


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
});})(c__27881__auto___30476,out))
;
return ((function (switch__27769__auto__,c__27881__auto___30476,out){
return (function() {
var cljs$core$async$state_machine__27770__auto__ = null;
var cljs$core$async$state_machine__27770__auto____0 = (function (){
var statearr_30468 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30468[(0)] = cljs$core$async$state_machine__27770__auto__);

(statearr_30468[(1)] = (1));

return statearr_30468;
});
var cljs$core$async$state_machine__27770__auto____1 = (function (state_30447){
while(true){
var ret_value__27771__auto__ = (function (){try{while(true){
var result__27772__auto__ = switch__27769__auto__.call(null,state_30447);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27772__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27772__auto__;
}
break;
}
}catch (e30469){if((e30469 instanceof Object)){
var ex__27773__auto__ = e30469;
var statearr_30470_30487 = state_30447;
(statearr_30470_30487[(5)] = ex__27773__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30447);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30469;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27771__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30488 = state_30447;
state_30447 = G__30488;
continue;
} else {
return ret_value__27771__auto__;
}
break;
}
});
cljs$core$async$state_machine__27770__auto__ = function(state_30447){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27770__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27770__auto____1.call(this,state_30447);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27770__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27770__auto____0;
cljs$core$async$state_machine__27770__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27770__auto____1;
return cljs$core$async$state_machine__27770__auto__;
})()
;})(switch__27769__auto__,c__27881__auto___30476,out))
})();
var state__27883__auto__ = (function (){var statearr_30471 = f__27882__auto__.call(null);
(statearr_30471[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27881__auto___30476);

return statearr_30471;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27883__auto__);
});})(c__27881__auto___30476,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args30489 = [];
var len__25835__auto___30559 = arguments.length;
var i__25836__auto___30560 = (0);
while(true){
if((i__25836__auto___30560 < len__25835__auto___30559)){
args30489.push((arguments[i__25836__auto___30560]));

var G__30561 = (i__25836__auto___30560 + (1));
i__25836__auto___30560 = G__30561;
continue;
} else {
}
break;
}

var G__30491 = args30489.length;
switch (G__30491) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30489.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27881__auto___30563 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27881__auto___30563,out){
return (function (){
var f__27882__auto__ = (function (){var switch__27769__auto__ = ((function (c__27881__auto___30563,out){
return (function (state_30529){
var state_val_30530 = (state_30529[(1)]);
if((state_val_30530 === (7))){
var inst_30525 = (state_30529[(2)]);
var state_30529__$1 = state_30529;
var statearr_30531_30564 = state_30529__$1;
(statearr_30531_30564[(2)] = inst_30525);

(statearr_30531_30564[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30530 === (1))){
var inst_30492 = (new Array(n));
var inst_30493 = inst_30492;
var inst_30494 = (0);
var state_30529__$1 = (function (){var statearr_30532 = state_30529;
(statearr_30532[(7)] = inst_30494);

(statearr_30532[(8)] = inst_30493);

return statearr_30532;
})();
var statearr_30533_30565 = state_30529__$1;
(statearr_30533_30565[(2)] = null);

(statearr_30533_30565[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30530 === (4))){
var inst_30497 = (state_30529[(9)]);
var inst_30497__$1 = (state_30529[(2)]);
var inst_30498 = (inst_30497__$1 == null);
var inst_30499 = cljs.core.not.call(null,inst_30498);
var state_30529__$1 = (function (){var statearr_30534 = state_30529;
(statearr_30534[(9)] = inst_30497__$1);

return statearr_30534;
})();
if(inst_30499){
var statearr_30535_30566 = state_30529__$1;
(statearr_30535_30566[(1)] = (5));

} else {
var statearr_30536_30567 = state_30529__$1;
(statearr_30536_30567[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30530 === (15))){
var inst_30519 = (state_30529[(2)]);
var state_30529__$1 = state_30529;
var statearr_30537_30568 = state_30529__$1;
(statearr_30537_30568[(2)] = inst_30519);

(statearr_30537_30568[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30530 === (13))){
var state_30529__$1 = state_30529;
var statearr_30538_30569 = state_30529__$1;
(statearr_30538_30569[(2)] = null);

(statearr_30538_30569[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30530 === (6))){
var inst_30494 = (state_30529[(7)]);
var inst_30515 = (inst_30494 > (0));
var state_30529__$1 = state_30529;
if(cljs.core.truth_(inst_30515)){
var statearr_30539_30570 = state_30529__$1;
(statearr_30539_30570[(1)] = (12));

} else {
var statearr_30540_30571 = state_30529__$1;
(statearr_30540_30571[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30530 === (3))){
var inst_30527 = (state_30529[(2)]);
var state_30529__$1 = state_30529;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30529__$1,inst_30527);
} else {
if((state_val_30530 === (12))){
var inst_30493 = (state_30529[(8)]);
var inst_30517 = cljs.core.vec.call(null,inst_30493);
var state_30529__$1 = state_30529;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30529__$1,(15),out,inst_30517);
} else {
if((state_val_30530 === (2))){
var state_30529__$1 = state_30529;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30529__$1,(4),ch);
} else {
if((state_val_30530 === (11))){
var inst_30509 = (state_30529[(2)]);
var inst_30510 = (new Array(n));
var inst_30493 = inst_30510;
var inst_30494 = (0);
var state_30529__$1 = (function (){var statearr_30541 = state_30529;
(statearr_30541[(7)] = inst_30494);

(statearr_30541[(10)] = inst_30509);

(statearr_30541[(8)] = inst_30493);

return statearr_30541;
})();
var statearr_30542_30572 = state_30529__$1;
(statearr_30542_30572[(2)] = null);

(statearr_30542_30572[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30530 === (9))){
var inst_30493 = (state_30529[(8)]);
var inst_30507 = cljs.core.vec.call(null,inst_30493);
var state_30529__$1 = state_30529;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30529__$1,(11),out,inst_30507);
} else {
if((state_val_30530 === (5))){
var inst_30497 = (state_30529[(9)]);
var inst_30494 = (state_30529[(7)]);
var inst_30502 = (state_30529[(11)]);
var inst_30493 = (state_30529[(8)]);
var inst_30501 = (inst_30493[inst_30494] = inst_30497);
var inst_30502__$1 = (inst_30494 + (1));
var inst_30503 = (inst_30502__$1 < n);
var state_30529__$1 = (function (){var statearr_30543 = state_30529;
(statearr_30543[(11)] = inst_30502__$1);

(statearr_30543[(12)] = inst_30501);

return statearr_30543;
})();
if(cljs.core.truth_(inst_30503)){
var statearr_30544_30573 = state_30529__$1;
(statearr_30544_30573[(1)] = (8));

} else {
var statearr_30545_30574 = state_30529__$1;
(statearr_30545_30574[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30530 === (14))){
var inst_30522 = (state_30529[(2)]);
var inst_30523 = cljs.core.async.close_BANG_.call(null,out);
var state_30529__$1 = (function (){var statearr_30547 = state_30529;
(statearr_30547[(13)] = inst_30522);

return statearr_30547;
})();
var statearr_30548_30575 = state_30529__$1;
(statearr_30548_30575[(2)] = inst_30523);

(statearr_30548_30575[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30530 === (10))){
var inst_30513 = (state_30529[(2)]);
var state_30529__$1 = state_30529;
var statearr_30549_30576 = state_30529__$1;
(statearr_30549_30576[(2)] = inst_30513);

(statearr_30549_30576[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30530 === (8))){
var inst_30502 = (state_30529[(11)]);
var inst_30493 = (state_30529[(8)]);
var tmp30546 = inst_30493;
var inst_30493__$1 = tmp30546;
var inst_30494 = inst_30502;
var state_30529__$1 = (function (){var statearr_30550 = state_30529;
(statearr_30550[(7)] = inst_30494);

(statearr_30550[(8)] = inst_30493__$1);

return statearr_30550;
})();
var statearr_30551_30577 = state_30529__$1;
(statearr_30551_30577[(2)] = null);

(statearr_30551_30577[(1)] = (2));


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
});})(c__27881__auto___30563,out))
;
return ((function (switch__27769__auto__,c__27881__auto___30563,out){
return (function() {
var cljs$core$async$state_machine__27770__auto__ = null;
var cljs$core$async$state_machine__27770__auto____0 = (function (){
var statearr_30555 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30555[(0)] = cljs$core$async$state_machine__27770__auto__);

(statearr_30555[(1)] = (1));

return statearr_30555;
});
var cljs$core$async$state_machine__27770__auto____1 = (function (state_30529){
while(true){
var ret_value__27771__auto__ = (function (){try{while(true){
var result__27772__auto__ = switch__27769__auto__.call(null,state_30529);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27772__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27772__auto__;
}
break;
}
}catch (e30556){if((e30556 instanceof Object)){
var ex__27773__auto__ = e30556;
var statearr_30557_30578 = state_30529;
(statearr_30557_30578[(5)] = ex__27773__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30529);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30556;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27771__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30579 = state_30529;
state_30529 = G__30579;
continue;
} else {
return ret_value__27771__auto__;
}
break;
}
});
cljs$core$async$state_machine__27770__auto__ = function(state_30529){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27770__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27770__auto____1.call(this,state_30529);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27770__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27770__auto____0;
cljs$core$async$state_machine__27770__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27770__auto____1;
return cljs$core$async$state_machine__27770__auto__;
})()
;})(switch__27769__auto__,c__27881__auto___30563,out))
})();
var state__27883__auto__ = (function (){var statearr_30558 = f__27882__auto__.call(null);
(statearr_30558[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27881__auto___30563);

return statearr_30558;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27883__auto__);
});})(c__27881__auto___30563,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args30580 = [];
var len__25835__auto___30654 = arguments.length;
var i__25836__auto___30655 = (0);
while(true){
if((i__25836__auto___30655 < len__25835__auto___30654)){
args30580.push((arguments[i__25836__auto___30655]));

var G__30656 = (i__25836__auto___30655 + (1));
i__25836__auto___30655 = G__30656;
continue;
} else {
}
break;
}

var G__30582 = args30580.length;
switch (G__30582) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30580.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27881__auto___30658 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27881__auto___30658,out){
return (function (){
var f__27882__auto__ = (function (){var switch__27769__auto__ = ((function (c__27881__auto___30658,out){
return (function (state_30624){
var state_val_30625 = (state_30624[(1)]);
if((state_val_30625 === (7))){
var inst_30620 = (state_30624[(2)]);
var state_30624__$1 = state_30624;
var statearr_30626_30659 = state_30624__$1;
(statearr_30626_30659[(2)] = inst_30620);

(statearr_30626_30659[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30625 === (1))){
var inst_30583 = [];
var inst_30584 = inst_30583;
var inst_30585 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_30624__$1 = (function (){var statearr_30627 = state_30624;
(statearr_30627[(7)] = inst_30584);

(statearr_30627[(8)] = inst_30585);

return statearr_30627;
})();
var statearr_30628_30660 = state_30624__$1;
(statearr_30628_30660[(2)] = null);

(statearr_30628_30660[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30625 === (4))){
var inst_30588 = (state_30624[(9)]);
var inst_30588__$1 = (state_30624[(2)]);
var inst_30589 = (inst_30588__$1 == null);
var inst_30590 = cljs.core.not.call(null,inst_30589);
var state_30624__$1 = (function (){var statearr_30629 = state_30624;
(statearr_30629[(9)] = inst_30588__$1);

return statearr_30629;
})();
if(inst_30590){
var statearr_30630_30661 = state_30624__$1;
(statearr_30630_30661[(1)] = (5));

} else {
var statearr_30631_30662 = state_30624__$1;
(statearr_30631_30662[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30625 === (15))){
var inst_30614 = (state_30624[(2)]);
var state_30624__$1 = state_30624;
var statearr_30632_30663 = state_30624__$1;
(statearr_30632_30663[(2)] = inst_30614);

(statearr_30632_30663[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30625 === (13))){
var state_30624__$1 = state_30624;
var statearr_30633_30664 = state_30624__$1;
(statearr_30633_30664[(2)] = null);

(statearr_30633_30664[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30625 === (6))){
var inst_30584 = (state_30624[(7)]);
var inst_30609 = inst_30584.length;
var inst_30610 = (inst_30609 > (0));
var state_30624__$1 = state_30624;
if(cljs.core.truth_(inst_30610)){
var statearr_30634_30665 = state_30624__$1;
(statearr_30634_30665[(1)] = (12));

} else {
var statearr_30635_30666 = state_30624__$1;
(statearr_30635_30666[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30625 === (3))){
var inst_30622 = (state_30624[(2)]);
var state_30624__$1 = state_30624;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30624__$1,inst_30622);
} else {
if((state_val_30625 === (12))){
var inst_30584 = (state_30624[(7)]);
var inst_30612 = cljs.core.vec.call(null,inst_30584);
var state_30624__$1 = state_30624;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30624__$1,(15),out,inst_30612);
} else {
if((state_val_30625 === (2))){
var state_30624__$1 = state_30624;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30624__$1,(4),ch);
} else {
if((state_val_30625 === (11))){
var inst_30588 = (state_30624[(9)]);
var inst_30592 = (state_30624[(10)]);
var inst_30602 = (state_30624[(2)]);
var inst_30603 = [];
var inst_30604 = inst_30603.push(inst_30588);
var inst_30584 = inst_30603;
var inst_30585 = inst_30592;
var state_30624__$1 = (function (){var statearr_30636 = state_30624;
(statearr_30636[(11)] = inst_30602);

(statearr_30636[(7)] = inst_30584);

(statearr_30636[(12)] = inst_30604);

(statearr_30636[(8)] = inst_30585);

return statearr_30636;
})();
var statearr_30637_30667 = state_30624__$1;
(statearr_30637_30667[(2)] = null);

(statearr_30637_30667[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30625 === (9))){
var inst_30584 = (state_30624[(7)]);
var inst_30600 = cljs.core.vec.call(null,inst_30584);
var state_30624__$1 = state_30624;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30624__$1,(11),out,inst_30600);
} else {
if((state_val_30625 === (5))){
var inst_30588 = (state_30624[(9)]);
var inst_30592 = (state_30624[(10)]);
var inst_30585 = (state_30624[(8)]);
var inst_30592__$1 = f.call(null,inst_30588);
var inst_30593 = cljs.core._EQ_.call(null,inst_30592__$1,inst_30585);
var inst_30594 = cljs.core.keyword_identical_QMARK_.call(null,inst_30585,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_30595 = (inst_30593) || (inst_30594);
var state_30624__$1 = (function (){var statearr_30638 = state_30624;
(statearr_30638[(10)] = inst_30592__$1);

return statearr_30638;
})();
if(cljs.core.truth_(inst_30595)){
var statearr_30639_30668 = state_30624__$1;
(statearr_30639_30668[(1)] = (8));

} else {
var statearr_30640_30669 = state_30624__$1;
(statearr_30640_30669[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30625 === (14))){
var inst_30617 = (state_30624[(2)]);
var inst_30618 = cljs.core.async.close_BANG_.call(null,out);
var state_30624__$1 = (function (){var statearr_30642 = state_30624;
(statearr_30642[(13)] = inst_30617);

return statearr_30642;
})();
var statearr_30643_30670 = state_30624__$1;
(statearr_30643_30670[(2)] = inst_30618);

(statearr_30643_30670[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30625 === (10))){
var inst_30607 = (state_30624[(2)]);
var state_30624__$1 = state_30624;
var statearr_30644_30671 = state_30624__$1;
(statearr_30644_30671[(2)] = inst_30607);

(statearr_30644_30671[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30625 === (8))){
var inst_30588 = (state_30624[(9)]);
var inst_30592 = (state_30624[(10)]);
var inst_30584 = (state_30624[(7)]);
var inst_30597 = inst_30584.push(inst_30588);
var tmp30641 = inst_30584;
var inst_30584__$1 = tmp30641;
var inst_30585 = inst_30592;
var state_30624__$1 = (function (){var statearr_30645 = state_30624;
(statearr_30645[(14)] = inst_30597);

(statearr_30645[(7)] = inst_30584__$1);

(statearr_30645[(8)] = inst_30585);

return statearr_30645;
})();
var statearr_30646_30672 = state_30624__$1;
(statearr_30646_30672[(2)] = null);

(statearr_30646_30672[(1)] = (2));


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
});})(c__27881__auto___30658,out))
;
return ((function (switch__27769__auto__,c__27881__auto___30658,out){
return (function() {
var cljs$core$async$state_machine__27770__auto__ = null;
var cljs$core$async$state_machine__27770__auto____0 = (function (){
var statearr_30650 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30650[(0)] = cljs$core$async$state_machine__27770__auto__);

(statearr_30650[(1)] = (1));

return statearr_30650;
});
var cljs$core$async$state_machine__27770__auto____1 = (function (state_30624){
while(true){
var ret_value__27771__auto__ = (function (){try{while(true){
var result__27772__auto__ = switch__27769__auto__.call(null,state_30624);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27772__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27772__auto__;
}
break;
}
}catch (e30651){if((e30651 instanceof Object)){
var ex__27773__auto__ = e30651;
var statearr_30652_30673 = state_30624;
(statearr_30652_30673[(5)] = ex__27773__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30624);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30651;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27771__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30674 = state_30624;
state_30624 = G__30674;
continue;
} else {
return ret_value__27771__auto__;
}
break;
}
});
cljs$core$async$state_machine__27770__auto__ = function(state_30624){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27770__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27770__auto____1.call(this,state_30624);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27770__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27770__auto____0;
cljs$core$async$state_machine__27770__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27770__auto____1;
return cljs$core$async$state_machine__27770__auto__;
})()
;})(switch__27769__auto__,c__27881__auto___30658,out))
})();
var state__27883__auto__ = (function (){var statearr_30653 = f__27882__auto__.call(null);
(statearr_30653[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27881__auto___30658);

return statearr_30653;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27883__auto__);
});})(c__27881__auto___30658,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1520627269451