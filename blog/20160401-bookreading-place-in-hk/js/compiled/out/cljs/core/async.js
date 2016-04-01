// Compiled by ClojureScript 1.7.170 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args19499 = [];
var len__17877__auto___19505 = arguments.length;
var i__17878__auto___19506 = (0);
while(true){
if((i__17878__auto___19506 < len__17877__auto___19505)){
args19499.push((arguments[i__17878__auto___19506]));

var G__19507 = (i__17878__auto___19506 + (1));
i__17878__auto___19506 = G__19507;
continue;
} else {
}
break;
}

var G__19501 = args19499.length;
switch (G__19501) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19499.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async19502 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19502 = (function (f,blockable,meta19503){
this.f = f;
this.blockable = blockable;
this.meta19503 = meta19503;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async19502.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19504,meta19503__$1){
var self__ = this;
var _19504__$1 = this;
return (new cljs.core.async.t_cljs$core$async19502(self__.f,self__.blockable,meta19503__$1));
});

cljs.core.async.t_cljs$core$async19502.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19504){
var self__ = this;
var _19504__$1 = this;
return self__.meta19503;
});

cljs.core.async.t_cljs$core$async19502.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async19502.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async19502.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async19502.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async19502.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta19503","meta19503",1427786810,null)], null);
});

cljs.core.async.t_cljs$core$async19502.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19502.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19502";

cljs.core.async.t_cljs$core$async19502.cljs$lang$ctorPrWriter = (function (this__17417__auto__,writer__17418__auto__,opt__17419__auto__){
return cljs.core._write.call(null,writer__17418__auto__,"cljs.core.async/t_cljs$core$async19502");
});

cljs.core.async.__GT_t_cljs$core$async19502 = (function cljs$core$async$__GT_t_cljs$core$async19502(f__$1,blockable__$1,meta19503){
return (new cljs.core.async.t_cljs$core$async19502(f__$1,blockable__$1,meta19503));
});

}

return (new cljs.core.async.t_cljs$core$async19502(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var args19511 = [];
var len__17877__auto___19514 = arguments.length;
var i__17878__auto___19515 = (0);
while(true){
if((i__17878__auto___19515 < len__17877__auto___19514)){
args19511.push((arguments[i__17878__auto___19515]));

var G__19516 = (i__17878__auto___19515 + (1));
i__17878__auto___19515 = G__19516;
continue;
} else {
}
break;
}

var G__19513 = args19511.length;
switch (G__19513) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19511.length)].join('')));

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
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)))].join('')));
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
var args19518 = [];
var len__17877__auto___19521 = arguments.length;
var i__17878__auto___19522 = (0);
while(true){
if((i__17878__auto___19522 < len__17877__auto___19521)){
args19518.push((arguments[i__17878__auto___19522]));

var G__19523 = (i__17878__auto___19522 + (1));
i__17878__auto___19522 = G__19523;
continue;
} else {
}
break;
}

var G__19520 = args19518.length;
switch (G__19520) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19518.length)].join('')));

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
var args19525 = [];
var len__17877__auto___19528 = arguments.length;
var i__17878__auto___19529 = (0);
while(true){
if((i__17878__auto___19529 < len__17877__auto___19528)){
args19525.push((arguments[i__17878__auto___19529]));

var G__19530 = (i__17878__auto___19529 + (1));
i__17878__auto___19529 = G__19530;
continue;
} else {
}
break;
}

var G__19527 = args19525.length;
switch (G__19527) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19525.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_19532 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_19532);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_19532,ret){
return (function (){
return fn1.call(null,val_19532);
});})(val_19532,ret))
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
var args19533 = [];
var len__17877__auto___19536 = arguments.length;
var i__17878__auto___19537 = (0);
while(true){
if((i__17878__auto___19537 < len__17877__auto___19536)){
args19533.push((arguments[i__17878__auto___19537]));

var G__19538 = (i__17878__auto___19537 + (1));
i__17878__auto___19537 = G__19538;
continue;
} else {
}
break;
}

var G__19535 = args19533.length;
switch (G__19535) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19533.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4423__auto__)){
var ret = temp__4423__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4423__auto__)){
var retb = temp__4423__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4423__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4423__auto__))
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
var n__17722__auto___19540 = n;
var x_19541 = (0);
while(true){
if((x_19541 < n__17722__auto___19540)){
(a[x_19541] = (0));

var G__19542 = (x_19541 + (1));
x_19541 = G__19542;
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

var G__19543 = (i + (1));
i = G__19543;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async19547 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19547 = (function (alt_flag,flag,meta19548){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta19548 = meta19548;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async19547.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_19549,meta19548__$1){
var self__ = this;
var _19549__$1 = this;
return (new cljs.core.async.t_cljs$core$async19547(self__.alt_flag,self__.flag,meta19548__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async19547.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_19549){
var self__ = this;
var _19549__$1 = this;
return self__.meta19548;
});})(flag))
;

cljs.core.async.t_cljs$core$async19547.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async19547.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async19547.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async19547.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async19547.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta19548","meta19548",1266988821,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async19547.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19547.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19547";

cljs.core.async.t_cljs$core$async19547.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__17417__auto__,writer__17418__auto__,opt__17419__auto__){
return cljs.core._write.call(null,writer__17418__auto__,"cljs.core.async/t_cljs$core$async19547");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async19547 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async19547(alt_flag__$1,flag__$1,meta19548){
return (new cljs.core.async.t_cljs$core$async19547(alt_flag__$1,flag__$1,meta19548));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async19547(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async19553 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19553 = (function (alt_handler,flag,cb,meta19554){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta19554 = meta19554;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async19553.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19555,meta19554__$1){
var self__ = this;
var _19555__$1 = this;
return (new cljs.core.async.t_cljs$core$async19553(self__.alt_handler,self__.flag,self__.cb,meta19554__$1));
});

cljs.core.async.t_cljs$core$async19553.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19555){
var self__ = this;
var _19555__$1 = this;
return self__.meta19554;
});

cljs.core.async.t_cljs$core$async19553.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async19553.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async19553.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async19553.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async19553.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta19554","meta19554",538712978,null)], null);
});

cljs.core.async.t_cljs$core$async19553.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19553.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19553";

cljs.core.async.t_cljs$core$async19553.cljs$lang$ctorPrWriter = (function (this__17417__auto__,writer__17418__auto__,opt__17419__auto__){
return cljs.core._write.call(null,writer__17418__auto__,"cljs.core.async/t_cljs$core$async19553");
});

cljs.core.async.__GT_t_cljs$core$async19553 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async19553(alt_handler__$1,flag__$1,cb__$1,meta19554){
return (new cljs.core.async.t_cljs$core$async19553(alt_handler__$1,flag__$1,cb__$1,meta19554));
});

}

return (new cljs.core.async.t_cljs$core$async19553(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__19556_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__19556_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__19557_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__19557_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__16819__auto__ = wport;
if(cljs.core.truth_(or__16819__auto__)){
return or__16819__auto__;
} else {
return port;
}
})()], null));
} else {
var G__19558 = (i + (1));
i = G__19558;
continue;
}
} else {
return null;
}
break;
}
})();
var or__16819__auto__ = ret;
if(cljs.core.truth_(or__16819__auto__)){
return or__16819__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4425__auto__ = (function (){var and__16807__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__16807__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__16807__auto__;
}
})();
if(cljs.core.truth_(temp__4425__auto__)){
var got = temp__4425__auto__;
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
var args__17884__auto__ = [];
var len__17877__auto___19564 = arguments.length;
var i__17878__auto___19565 = (0);
while(true){
if((i__17878__auto___19565 < len__17877__auto___19564)){
args__17884__auto__.push((arguments[i__17878__auto___19565]));

var G__19566 = (i__17878__auto___19565 + (1));
i__17878__auto___19565 = G__19566;
continue;
} else {
}
break;
}

var argseq__17885__auto__ = ((((1) < args__17884__auto__.length))?(new cljs.core.IndexedSeq(args__17884__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17885__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__19561){
var map__19562 = p__19561;
var map__19562__$1 = ((((!((map__19562 == null)))?((((map__19562.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19562.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19562):map__19562);
var opts = map__19562__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq19559){
var G__19560 = cljs.core.first.call(null,seq19559);
var seq19559__$1 = cljs.core.next.call(null,seq19559);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__19560,seq19559__$1);
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
var args19567 = [];
var len__17877__auto___19617 = arguments.length;
var i__17878__auto___19618 = (0);
while(true){
if((i__17878__auto___19618 < len__17877__auto___19617)){
args19567.push((arguments[i__17878__auto___19618]));

var G__19619 = (i__17878__auto___19618 + (1));
i__17878__auto___19618 = G__19619;
continue;
} else {
}
break;
}

var G__19569 = args19567.length;
switch (G__19569) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19567.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__19454__auto___19621 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19454__auto___19621){
return (function (){
var f__19455__auto__ = (function (){var switch__19342__auto__ = ((function (c__19454__auto___19621){
return (function (state_19593){
var state_val_19594 = (state_19593[(1)]);
if((state_val_19594 === (7))){
var inst_19589 = (state_19593[(2)]);
var state_19593__$1 = state_19593;
var statearr_19595_19622 = state_19593__$1;
(statearr_19595_19622[(2)] = inst_19589);

(statearr_19595_19622[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19594 === (1))){
var state_19593__$1 = state_19593;
var statearr_19596_19623 = state_19593__$1;
(statearr_19596_19623[(2)] = null);

(statearr_19596_19623[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19594 === (4))){
var inst_19572 = (state_19593[(7)]);
var inst_19572__$1 = (state_19593[(2)]);
var inst_19573 = (inst_19572__$1 == null);
var state_19593__$1 = (function (){var statearr_19597 = state_19593;
(statearr_19597[(7)] = inst_19572__$1);

return statearr_19597;
})();
if(cljs.core.truth_(inst_19573)){
var statearr_19598_19624 = state_19593__$1;
(statearr_19598_19624[(1)] = (5));

} else {
var statearr_19599_19625 = state_19593__$1;
(statearr_19599_19625[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19594 === (13))){
var state_19593__$1 = state_19593;
var statearr_19600_19626 = state_19593__$1;
(statearr_19600_19626[(2)] = null);

(statearr_19600_19626[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19594 === (6))){
var inst_19572 = (state_19593[(7)]);
var state_19593__$1 = state_19593;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19593__$1,(11),to,inst_19572);
} else {
if((state_val_19594 === (3))){
var inst_19591 = (state_19593[(2)]);
var state_19593__$1 = state_19593;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19593__$1,inst_19591);
} else {
if((state_val_19594 === (12))){
var state_19593__$1 = state_19593;
var statearr_19601_19627 = state_19593__$1;
(statearr_19601_19627[(2)] = null);

(statearr_19601_19627[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19594 === (2))){
var state_19593__$1 = state_19593;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19593__$1,(4),from);
} else {
if((state_val_19594 === (11))){
var inst_19582 = (state_19593[(2)]);
var state_19593__$1 = state_19593;
if(cljs.core.truth_(inst_19582)){
var statearr_19602_19628 = state_19593__$1;
(statearr_19602_19628[(1)] = (12));

} else {
var statearr_19603_19629 = state_19593__$1;
(statearr_19603_19629[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19594 === (9))){
var state_19593__$1 = state_19593;
var statearr_19604_19630 = state_19593__$1;
(statearr_19604_19630[(2)] = null);

(statearr_19604_19630[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19594 === (5))){
var state_19593__$1 = state_19593;
if(cljs.core.truth_(close_QMARK_)){
var statearr_19605_19631 = state_19593__$1;
(statearr_19605_19631[(1)] = (8));

} else {
var statearr_19606_19632 = state_19593__$1;
(statearr_19606_19632[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19594 === (14))){
var inst_19587 = (state_19593[(2)]);
var state_19593__$1 = state_19593;
var statearr_19607_19633 = state_19593__$1;
(statearr_19607_19633[(2)] = inst_19587);

(statearr_19607_19633[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19594 === (10))){
var inst_19579 = (state_19593[(2)]);
var state_19593__$1 = state_19593;
var statearr_19608_19634 = state_19593__$1;
(statearr_19608_19634[(2)] = inst_19579);

(statearr_19608_19634[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19594 === (8))){
var inst_19576 = cljs.core.async.close_BANG_.call(null,to);
var state_19593__$1 = state_19593;
var statearr_19609_19635 = state_19593__$1;
(statearr_19609_19635[(2)] = inst_19576);

(statearr_19609_19635[(1)] = (10));


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
});})(c__19454__auto___19621))
;
return ((function (switch__19342__auto__,c__19454__auto___19621){
return (function() {
var cljs$core$async$state_machine__19343__auto__ = null;
var cljs$core$async$state_machine__19343__auto____0 = (function (){
var statearr_19613 = [null,null,null,null,null,null,null,null];
(statearr_19613[(0)] = cljs$core$async$state_machine__19343__auto__);

(statearr_19613[(1)] = (1));

return statearr_19613;
});
var cljs$core$async$state_machine__19343__auto____1 = (function (state_19593){
while(true){
var ret_value__19344__auto__ = (function (){try{while(true){
var result__19345__auto__ = switch__19342__auto__.call(null,state_19593);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19345__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19345__auto__;
}
break;
}
}catch (e19614){if((e19614 instanceof Object)){
var ex__19346__auto__ = e19614;
var statearr_19615_19636 = state_19593;
(statearr_19615_19636[(5)] = ex__19346__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19593);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19614;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19344__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19637 = state_19593;
state_19593 = G__19637;
continue;
} else {
return ret_value__19344__auto__;
}
break;
}
});
cljs$core$async$state_machine__19343__auto__ = function(state_19593){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19343__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19343__auto____1.call(this,state_19593);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19343__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19343__auto____0;
cljs$core$async$state_machine__19343__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19343__auto____1;
return cljs$core$async$state_machine__19343__auto__;
})()
;})(switch__19342__auto__,c__19454__auto___19621))
})();
var state__19456__auto__ = (function (){var statearr_19616 = f__19455__auto__.call(null);
(statearr_19616[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19454__auto___19621);

return statearr_19616;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19456__auto__);
});})(c__19454__auto___19621))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__19821){
var vec__19822 = p__19821;
var v = cljs.core.nth.call(null,vec__19822,(0),null);
var p = cljs.core.nth.call(null,vec__19822,(1),null);
var job = vec__19822;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__19454__auto___20004 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19454__auto___20004,res,vec__19822,v,p,job,jobs,results){
return (function (){
var f__19455__auto__ = (function (){var switch__19342__auto__ = ((function (c__19454__auto___20004,res,vec__19822,v,p,job,jobs,results){
return (function (state_19827){
var state_val_19828 = (state_19827[(1)]);
if((state_val_19828 === (1))){
var state_19827__$1 = state_19827;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19827__$1,(2),res,v);
} else {
if((state_val_19828 === (2))){
var inst_19824 = (state_19827[(2)]);
var inst_19825 = cljs.core.async.close_BANG_.call(null,res);
var state_19827__$1 = (function (){var statearr_19829 = state_19827;
(statearr_19829[(7)] = inst_19824);

return statearr_19829;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19827__$1,inst_19825);
} else {
return null;
}
}
});})(c__19454__auto___20004,res,vec__19822,v,p,job,jobs,results))
;
return ((function (switch__19342__auto__,c__19454__auto___20004,res,vec__19822,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19343__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19343__auto____0 = (function (){
var statearr_19833 = [null,null,null,null,null,null,null,null];
(statearr_19833[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19343__auto__);

(statearr_19833[(1)] = (1));

return statearr_19833;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19343__auto____1 = (function (state_19827){
while(true){
var ret_value__19344__auto__ = (function (){try{while(true){
var result__19345__auto__ = switch__19342__auto__.call(null,state_19827);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19345__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19345__auto__;
}
break;
}
}catch (e19834){if((e19834 instanceof Object)){
var ex__19346__auto__ = e19834;
var statearr_19835_20005 = state_19827;
(statearr_19835_20005[(5)] = ex__19346__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19827);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19834;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19344__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20006 = state_19827;
state_19827 = G__20006;
continue;
} else {
return ret_value__19344__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19343__auto__ = function(state_19827){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19343__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19343__auto____1.call(this,state_19827);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19343__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19343__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19343__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19343__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19343__auto__;
})()
;})(switch__19342__auto__,c__19454__auto___20004,res,vec__19822,v,p,job,jobs,results))
})();
var state__19456__auto__ = (function (){var statearr_19836 = f__19455__auto__.call(null);
(statearr_19836[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19454__auto___20004);

return statearr_19836;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19456__auto__);
});})(c__19454__auto___20004,res,vec__19822,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__19837){
var vec__19838 = p__19837;
var v = cljs.core.nth.call(null,vec__19838,(0),null);
var p = cljs.core.nth.call(null,vec__19838,(1),null);
var job = vec__19838;
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
var n__17722__auto___20007 = n;
var __20008 = (0);
while(true){
if((__20008 < n__17722__auto___20007)){
var G__19839_20009 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__19839_20009) {
case "compute":
var c__19454__auto___20011 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__20008,c__19454__auto___20011,G__19839_20009,n__17722__auto___20007,jobs,results,process,async){
return (function (){
var f__19455__auto__ = (function (){var switch__19342__auto__ = ((function (__20008,c__19454__auto___20011,G__19839_20009,n__17722__auto___20007,jobs,results,process,async){
return (function (state_19852){
var state_val_19853 = (state_19852[(1)]);
if((state_val_19853 === (1))){
var state_19852__$1 = state_19852;
var statearr_19854_20012 = state_19852__$1;
(statearr_19854_20012[(2)] = null);

(statearr_19854_20012[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19853 === (2))){
var state_19852__$1 = state_19852;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19852__$1,(4),jobs);
} else {
if((state_val_19853 === (3))){
var inst_19850 = (state_19852[(2)]);
var state_19852__$1 = state_19852;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19852__$1,inst_19850);
} else {
if((state_val_19853 === (4))){
var inst_19842 = (state_19852[(2)]);
var inst_19843 = process.call(null,inst_19842);
var state_19852__$1 = state_19852;
if(cljs.core.truth_(inst_19843)){
var statearr_19855_20013 = state_19852__$1;
(statearr_19855_20013[(1)] = (5));

} else {
var statearr_19856_20014 = state_19852__$1;
(statearr_19856_20014[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19853 === (5))){
var state_19852__$1 = state_19852;
var statearr_19857_20015 = state_19852__$1;
(statearr_19857_20015[(2)] = null);

(statearr_19857_20015[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19853 === (6))){
var state_19852__$1 = state_19852;
var statearr_19858_20016 = state_19852__$1;
(statearr_19858_20016[(2)] = null);

(statearr_19858_20016[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19853 === (7))){
var inst_19848 = (state_19852[(2)]);
var state_19852__$1 = state_19852;
var statearr_19859_20017 = state_19852__$1;
(statearr_19859_20017[(2)] = inst_19848);

(statearr_19859_20017[(1)] = (3));


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
});})(__20008,c__19454__auto___20011,G__19839_20009,n__17722__auto___20007,jobs,results,process,async))
;
return ((function (__20008,switch__19342__auto__,c__19454__auto___20011,G__19839_20009,n__17722__auto___20007,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19343__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19343__auto____0 = (function (){
var statearr_19863 = [null,null,null,null,null,null,null];
(statearr_19863[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19343__auto__);

(statearr_19863[(1)] = (1));

return statearr_19863;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19343__auto____1 = (function (state_19852){
while(true){
var ret_value__19344__auto__ = (function (){try{while(true){
var result__19345__auto__ = switch__19342__auto__.call(null,state_19852);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19345__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19345__auto__;
}
break;
}
}catch (e19864){if((e19864 instanceof Object)){
var ex__19346__auto__ = e19864;
var statearr_19865_20018 = state_19852;
(statearr_19865_20018[(5)] = ex__19346__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19852);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19864;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19344__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20019 = state_19852;
state_19852 = G__20019;
continue;
} else {
return ret_value__19344__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19343__auto__ = function(state_19852){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19343__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19343__auto____1.call(this,state_19852);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19343__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19343__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19343__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19343__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19343__auto__;
})()
;})(__20008,switch__19342__auto__,c__19454__auto___20011,G__19839_20009,n__17722__auto___20007,jobs,results,process,async))
})();
var state__19456__auto__ = (function (){var statearr_19866 = f__19455__auto__.call(null);
(statearr_19866[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19454__auto___20011);

return statearr_19866;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19456__auto__);
});})(__20008,c__19454__auto___20011,G__19839_20009,n__17722__auto___20007,jobs,results,process,async))
);


break;
case "async":
var c__19454__auto___20020 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__20008,c__19454__auto___20020,G__19839_20009,n__17722__auto___20007,jobs,results,process,async){
return (function (){
var f__19455__auto__ = (function (){var switch__19342__auto__ = ((function (__20008,c__19454__auto___20020,G__19839_20009,n__17722__auto___20007,jobs,results,process,async){
return (function (state_19879){
var state_val_19880 = (state_19879[(1)]);
if((state_val_19880 === (1))){
var state_19879__$1 = state_19879;
var statearr_19881_20021 = state_19879__$1;
(statearr_19881_20021[(2)] = null);

(statearr_19881_20021[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19880 === (2))){
var state_19879__$1 = state_19879;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19879__$1,(4),jobs);
} else {
if((state_val_19880 === (3))){
var inst_19877 = (state_19879[(2)]);
var state_19879__$1 = state_19879;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19879__$1,inst_19877);
} else {
if((state_val_19880 === (4))){
var inst_19869 = (state_19879[(2)]);
var inst_19870 = async.call(null,inst_19869);
var state_19879__$1 = state_19879;
if(cljs.core.truth_(inst_19870)){
var statearr_19882_20022 = state_19879__$1;
(statearr_19882_20022[(1)] = (5));

} else {
var statearr_19883_20023 = state_19879__$1;
(statearr_19883_20023[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19880 === (5))){
var state_19879__$1 = state_19879;
var statearr_19884_20024 = state_19879__$1;
(statearr_19884_20024[(2)] = null);

(statearr_19884_20024[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19880 === (6))){
var state_19879__$1 = state_19879;
var statearr_19885_20025 = state_19879__$1;
(statearr_19885_20025[(2)] = null);

(statearr_19885_20025[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19880 === (7))){
var inst_19875 = (state_19879[(2)]);
var state_19879__$1 = state_19879;
var statearr_19886_20026 = state_19879__$1;
(statearr_19886_20026[(2)] = inst_19875);

(statearr_19886_20026[(1)] = (3));


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
});})(__20008,c__19454__auto___20020,G__19839_20009,n__17722__auto___20007,jobs,results,process,async))
;
return ((function (__20008,switch__19342__auto__,c__19454__auto___20020,G__19839_20009,n__17722__auto___20007,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19343__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19343__auto____0 = (function (){
var statearr_19890 = [null,null,null,null,null,null,null];
(statearr_19890[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19343__auto__);

(statearr_19890[(1)] = (1));

return statearr_19890;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19343__auto____1 = (function (state_19879){
while(true){
var ret_value__19344__auto__ = (function (){try{while(true){
var result__19345__auto__ = switch__19342__auto__.call(null,state_19879);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19345__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19345__auto__;
}
break;
}
}catch (e19891){if((e19891 instanceof Object)){
var ex__19346__auto__ = e19891;
var statearr_19892_20027 = state_19879;
(statearr_19892_20027[(5)] = ex__19346__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19879);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19891;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19344__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20028 = state_19879;
state_19879 = G__20028;
continue;
} else {
return ret_value__19344__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19343__auto__ = function(state_19879){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19343__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19343__auto____1.call(this,state_19879);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19343__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19343__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19343__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19343__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19343__auto__;
})()
;})(__20008,switch__19342__auto__,c__19454__auto___20020,G__19839_20009,n__17722__auto___20007,jobs,results,process,async))
})();
var state__19456__auto__ = (function (){var statearr_19893 = f__19455__auto__.call(null);
(statearr_19893[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19454__auto___20020);

return statearr_19893;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19456__auto__);
});})(__20008,c__19454__auto___20020,G__19839_20009,n__17722__auto___20007,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__20029 = (__20008 + (1));
__20008 = G__20029;
continue;
} else {
}
break;
}

var c__19454__auto___20030 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19454__auto___20030,jobs,results,process,async){
return (function (){
var f__19455__auto__ = (function (){var switch__19342__auto__ = ((function (c__19454__auto___20030,jobs,results,process,async){
return (function (state_19915){
var state_val_19916 = (state_19915[(1)]);
if((state_val_19916 === (1))){
var state_19915__$1 = state_19915;
var statearr_19917_20031 = state_19915__$1;
(statearr_19917_20031[(2)] = null);

(statearr_19917_20031[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19916 === (2))){
var state_19915__$1 = state_19915;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19915__$1,(4),from);
} else {
if((state_val_19916 === (3))){
var inst_19913 = (state_19915[(2)]);
var state_19915__$1 = state_19915;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19915__$1,inst_19913);
} else {
if((state_val_19916 === (4))){
var inst_19896 = (state_19915[(7)]);
var inst_19896__$1 = (state_19915[(2)]);
var inst_19897 = (inst_19896__$1 == null);
var state_19915__$1 = (function (){var statearr_19918 = state_19915;
(statearr_19918[(7)] = inst_19896__$1);

return statearr_19918;
})();
if(cljs.core.truth_(inst_19897)){
var statearr_19919_20032 = state_19915__$1;
(statearr_19919_20032[(1)] = (5));

} else {
var statearr_19920_20033 = state_19915__$1;
(statearr_19920_20033[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19916 === (5))){
var inst_19899 = cljs.core.async.close_BANG_.call(null,jobs);
var state_19915__$1 = state_19915;
var statearr_19921_20034 = state_19915__$1;
(statearr_19921_20034[(2)] = inst_19899);

(statearr_19921_20034[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19916 === (6))){
var inst_19896 = (state_19915[(7)]);
var inst_19901 = (state_19915[(8)]);
var inst_19901__$1 = cljs.core.async.chan.call(null,(1));
var inst_19902 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_19903 = [inst_19896,inst_19901__$1];
var inst_19904 = (new cljs.core.PersistentVector(null,2,(5),inst_19902,inst_19903,null));
var state_19915__$1 = (function (){var statearr_19922 = state_19915;
(statearr_19922[(8)] = inst_19901__$1);

return statearr_19922;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19915__$1,(8),jobs,inst_19904);
} else {
if((state_val_19916 === (7))){
var inst_19911 = (state_19915[(2)]);
var state_19915__$1 = state_19915;
var statearr_19923_20035 = state_19915__$1;
(statearr_19923_20035[(2)] = inst_19911);

(statearr_19923_20035[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19916 === (8))){
var inst_19901 = (state_19915[(8)]);
var inst_19906 = (state_19915[(2)]);
var state_19915__$1 = (function (){var statearr_19924 = state_19915;
(statearr_19924[(9)] = inst_19906);

return statearr_19924;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19915__$1,(9),results,inst_19901);
} else {
if((state_val_19916 === (9))){
var inst_19908 = (state_19915[(2)]);
var state_19915__$1 = (function (){var statearr_19925 = state_19915;
(statearr_19925[(10)] = inst_19908);

return statearr_19925;
})();
var statearr_19926_20036 = state_19915__$1;
(statearr_19926_20036[(2)] = null);

(statearr_19926_20036[(1)] = (2));


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
});})(c__19454__auto___20030,jobs,results,process,async))
;
return ((function (switch__19342__auto__,c__19454__auto___20030,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19343__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19343__auto____0 = (function (){
var statearr_19930 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_19930[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19343__auto__);

(statearr_19930[(1)] = (1));

return statearr_19930;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19343__auto____1 = (function (state_19915){
while(true){
var ret_value__19344__auto__ = (function (){try{while(true){
var result__19345__auto__ = switch__19342__auto__.call(null,state_19915);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19345__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19345__auto__;
}
break;
}
}catch (e19931){if((e19931 instanceof Object)){
var ex__19346__auto__ = e19931;
var statearr_19932_20037 = state_19915;
(statearr_19932_20037[(5)] = ex__19346__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19915);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19931;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19344__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20038 = state_19915;
state_19915 = G__20038;
continue;
} else {
return ret_value__19344__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19343__auto__ = function(state_19915){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19343__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19343__auto____1.call(this,state_19915);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19343__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19343__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19343__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19343__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19343__auto__;
})()
;})(switch__19342__auto__,c__19454__auto___20030,jobs,results,process,async))
})();
var state__19456__auto__ = (function (){var statearr_19933 = f__19455__auto__.call(null);
(statearr_19933[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19454__auto___20030);

return statearr_19933;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19456__auto__);
});})(c__19454__auto___20030,jobs,results,process,async))
);


var c__19454__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19454__auto__,jobs,results,process,async){
return (function (){
var f__19455__auto__ = (function (){var switch__19342__auto__ = ((function (c__19454__auto__,jobs,results,process,async){
return (function (state_19971){
var state_val_19972 = (state_19971[(1)]);
if((state_val_19972 === (7))){
var inst_19967 = (state_19971[(2)]);
var state_19971__$1 = state_19971;
var statearr_19973_20039 = state_19971__$1;
(statearr_19973_20039[(2)] = inst_19967);

(statearr_19973_20039[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19972 === (20))){
var state_19971__$1 = state_19971;
var statearr_19974_20040 = state_19971__$1;
(statearr_19974_20040[(2)] = null);

(statearr_19974_20040[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19972 === (1))){
var state_19971__$1 = state_19971;
var statearr_19975_20041 = state_19971__$1;
(statearr_19975_20041[(2)] = null);

(statearr_19975_20041[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19972 === (4))){
var inst_19936 = (state_19971[(7)]);
var inst_19936__$1 = (state_19971[(2)]);
var inst_19937 = (inst_19936__$1 == null);
var state_19971__$1 = (function (){var statearr_19976 = state_19971;
(statearr_19976[(7)] = inst_19936__$1);

return statearr_19976;
})();
if(cljs.core.truth_(inst_19937)){
var statearr_19977_20042 = state_19971__$1;
(statearr_19977_20042[(1)] = (5));

} else {
var statearr_19978_20043 = state_19971__$1;
(statearr_19978_20043[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19972 === (15))){
var inst_19949 = (state_19971[(8)]);
var state_19971__$1 = state_19971;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19971__$1,(18),to,inst_19949);
} else {
if((state_val_19972 === (21))){
var inst_19962 = (state_19971[(2)]);
var state_19971__$1 = state_19971;
var statearr_19979_20044 = state_19971__$1;
(statearr_19979_20044[(2)] = inst_19962);

(statearr_19979_20044[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19972 === (13))){
var inst_19964 = (state_19971[(2)]);
var state_19971__$1 = (function (){var statearr_19980 = state_19971;
(statearr_19980[(9)] = inst_19964);

return statearr_19980;
})();
var statearr_19981_20045 = state_19971__$1;
(statearr_19981_20045[(2)] = null);

(statearr_19981_20045[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19972 === (6))){
var inst_19936 = (state_19971[(7)]);
var state_19971__$1 = state_19971;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19971__$1,(11),inst_19936);
} else {
if((state_val_19972 === (17))){
var inst_19957 = (state_19971[(2)]);
var state_19971__$1 = state_19971;
if(cljs.core.truth_(inst_19957)){
var statearr_19982_20046 = state_19971__$1;
(statearr_19982_20046[(1)] = (19));

} else {
var statearr_19983_20047 = state_19971__$1;
(statearr_19983_20047[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19972 === (3))){
var inst_19969 = (state_19971[(2)]);
var state_19971__$1 = state_19971;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19971__$1,inst_19969);
} else {
if((state_val_19972 === (12))){
var inst_19946 = (state_19971[(10)]);
var state_19971__$1 = state_19971;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19971__$1,(14),inst_19946);
} else {
if((state_val_19972 === (2))){
var state_19971__$1 = state_19971;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19971__$1,(4),results);
} else {
if((state_val_19972 === (19))){
var state_19971__$1 = state_19971;
var statearr_19984_20048 = state_19971__$1;
(statearr_19984_20048[(2)] = null);

(statearr_19984_20048[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19972 === (11))){
var inst_19946 = (state_19971[(2)]);
var state_19971__$1 = (function (){var statearr_19985 = state_19971;
(statearr_19985[(10)] = inst_19946);

return statearr_19985;
})();
var statearr_19986_20049 = state_19971__$1;
(statearr_19986_20049[(2)] = null);

(statearr_19986_20049[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19972 === (9))){
var state_19971__$1 = state_19971;
var statearr_19987_20050 = state_19971__$1;
(statearr_19987_20050[(2)] = null);

(statearr_19987_20050[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19972 === (5))){
var state_19971__$1 = state_19971;
if(cljs.core.truth_(close_QMARK_)){
var statearr_19988_20051 = state_19971__$1;
(statearr_19988_20051[(1)] = (8));

} else {
var statearr_19989_20052 = state_19971__$1;
(statearr_19989_20052[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19972 === (14))){
var inst_19949 = (state_19971[(8)]);
var inst_19951 = (state_19971[(11)]);
var inst_19949__$1 = (state_19971[(2)]);
var inst_19950 = (inst_19949__$1 == null);
var inst_19951__$1 = cljs.core.not.call(null,inst_19950);
var state_19971__$1 = (function (){var statearr_19990 = state_19971;
(statearr_19990[(8)] = inst_19949__$1);

(statearr_19990[(11)] = inst_19951__$1);

return statearr_19990;
})();
if(inst_19951__$1){
var statearr_19991_20053 = state_19971__$1;
(statearr_19991_20053[(1)] = (15));

} else {
var statearr_19992_20054 = state_19971__$1;
(statearr_19992_20054[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19972 === (16))){
var inst_19951 = (state_19971[(11)]);
var state_19971__$1 = state_19971;
var statearr_19993_20055 = state_19971__$1;
(statearr_19993_20055[(2)] = inst_19951);

(statearr_19993_20055[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19972 === (10))){
var inst_19943 = (state_19971[(2)]);
var state_19971__$1 = state_19971;
var statearr_19994_20056 = state_19971__$1;
(statearr_19994_20056[(2)] = inst_19943);

(statearr_19994_20056[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19972 === (18))){
var inst_19954 = (state_19971[(2)]);
var state_19971__$1 = state_19971;
var statearr_19995_20057 = state_19971__$1;
(statearr_19995_20057[(2)] = inst_19954);

(statearr_19995_20057[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19972 === (8))){
var inst_19940 = cljs.core.async.close_BANG_.call(null,to);
var state_19971__$1 = state_19971;
var statearr_19996_20058 = state_19971__$1;
(statearr_19996_20058[(2)] = inst_19940);

(statearr_19996_20058[(1)] = (10));


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
});})(c__19454__auto__,jobs,results,process,async))
;
return ((function (switch__19342__auto__,c__19454__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19343__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19343__auto____0 = (function (){
var statearr_20000 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20000[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19343__auto__);

(statearr_20000[(1)] = (1));

return statearr_20000;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19343__auto____1 = (function (state_19971){
while(true){
var ret_value__19344__auto__ = (function (){try{while(true){
var result__19345__auto__ = switch__19342__auto__.call(null,state_19971);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19345__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19345__auto__;
}
break;
}
}catch (e20001){if((e20001 instanceof Object)){
var ex__19346__auto__ = e20001;
var statearr_20002_20059 = state_19971;
(statearr_20002_20059[(5)] = ex__19346__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19971);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20001;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19344__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20060 = state_19971;
state_19971 = G__20060;
continue;
} else {
return ret_value__19344__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19343__auto__ = function(state_19971){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19343__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19343__auto____1.call(this,state_19971);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19343__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19343__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19343__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19343__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19343__auto__;
})()
;})(switch__19342__auto__,c__19454__auto__,jobs,results,process,async))
})();
var state__19456__auto__ = (function (){var statearr_20003 = f__19455__auto__.call(null);
(statearr_20003[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19454__auto__);

return statearr_20003;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19456__auto__);
});})(c__19454__auto__,jobs,results,process,async))
);

return c__19454__auto__;
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
var args20061 = [];
var len__17877__auto___20064 = arguments.length;
var i__17878__auto___20065 = (0);
while(true){
if((i__17878__auto___20065 < len__17877__auto___20064)){
args20061.push((arguments[i__17878__auto___20065]));

var G__20066 = (i__17878__auto___20065 + (1));
i__17878__auto___20065 = G__20066;
continue;
} else {
}
break;
}

var G__20063 = args20061.length;
switch (G__20063) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20061.length)].join('')));

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
var args20068 = [];
var len__17877__auto___20071 = arguments.length;
var i__17878__auto___20072 = (0);
while(true){
if((i__17878__auto___20072 < len__17877__auto___20071)){
args20068.push((arguments[i__17878__auto___20072]));

var G__20073 = (i__17878__auto___20072 + (1));
i__17878__auto___20072 = G__20073;
continue;
} else {
}
break;
}

var G__20070 = args20068.length;
switch (G__20070) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20068.length)].join('')));

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
var args20075 = [];
var len__17877__auto___20128 = arguments.length;
var i__17878__auto___20129 = (0);
while(true){
if((i__17878__auto___20129 < len__17877__auto___20128)){
args20075.push((arguments[i__17878__auto___20129]));

var G__20130 = (i__17878__auto___20129 + (1));
i__17878__auto___20129 = G__20130;
continue;
} else {
}
break;
}

var G__20077 = args20075.length;
switch (G__20077) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20075.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__19454__auto___20132 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19454__auto___20132,tc,fc){
return (function (){
var f__19455__auto__ = (function (){var switch__19342__auto__ = ((function (c__19454__auto___20132,tc,fc){
return (function (state_20103){
var state_val_20104 = (state_20103[(1)]);
if((state_val_20104 === (7))){
var inst_20099 = (state_20103[(2)]);
var state_20103__$1 = state_20103;
var statearr_20105_20133 = state_20103__$1;
(statearr_20105_20133[(2)] = inst_20099);

(statearr_20105_20133[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20104 === (1))){
var state_20103__$1 = state_20103;
var statearr_20106_20134 = state_20103__$1;
(statearr_20106_20134[(2)] = null);

(statearr_20106_20134[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20104 === (4))){
var inst_20080 = (state_20103[(7)]);
var inst_20080__$1 = (state_20103[(2)]);
var inst_20081 = (inst_20080__$1 == null);
var state_20103__$1 = (function (){var statearr_20107 = state_20103;
(statearr_20107[(7)] = inst_20080__$1);

return statearr_20107;
})();
if(cljs.core.truth_(inst_20081)){
var statearr_20108_20135 = state_20103__$1;
(statearr_20108_20135[(1)] = (5));

} else {
var statearr_20109_20136 = state_20103__$1;
(statearr_20109_20136[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20104 === (13))){
var state_20103__$1 = state_20103;
var statearr_20110_20137 = state_20103__$1;
(statearr_20110_20137[(2)] = null);

(statearr_20110_20137[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20104 === (6))){
var inst_20080 = (state_20103[(7)]);
var inst_20086 = p.call(null,inst_20080);
var state_20103__$1 = state_20103;
if(cljs.core.truth_(inst_20086)){
var statearr_20111_20138 = state_20103__$1;
(statearr_20111_20138[(1)] = (9));

} else {
var statearr_20112_20139 = state_20103__$1;
(statearr_20112_20139[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20104 === (3))){
var inst_20101 = (state_20103[(2)]);
var state_20103__$1 = state_20103;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20103__$1,inst_20101);
} else {
if((state_val_20104 === (12))){
var state_20103__$1 = state_20103;
var statearr_20113_20140 = state_20103__$1;
(statearr_20113_20140[(2)] = null);

(statearr_20113_20140[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20104 === (2))){
var state_20103__$1 = state_20103;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20103__$1,(4),ch);
} else {
if((state_val_20104 === (11))){
var inst_20080 = (state_20103[(7)]);
var inst_20090 = (state_20103[(2)]);
var state_20103__$1 = state_20103;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20103__$1,(8),inst_20090,inst_20080);
} else {
if((state_val_20104 === (9))){
var state_20103__$1 = state_20103;
var statearr_20114_20141 = state_20103__$1;
(statearr_20114_20141[(2)] = tc);

(statearr_20114_20141[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20104 === (5))){
var inst_20083 = cljs.core.async.close_BANG_.call(null,tc);
var inst_20084 = cljs.core.async.close_BANG_.call(null,fc);
var state_20103__$1 = (function (){var statearr_20115 = state_20103;
(statearr_20115[(8)] = inst_20083);

return statearr_20115;
})();
var statearr_20116_20142 = state_20103__$1;
(statearr_20116_20142[(2)] = inst_20084);

(statearr_20116_20142[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20104 === (14))){
var inst_20097 = (state_20103[(2)]);
var state_20103__$1 = state_20103;
var statearr_20117_20143 = state_20103__$1;
(statearr_20117_20143[(2)] = inst_20097);

(statearr_20117_20143[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20104 === (10))){
var state_20103__$1 = state_20103;
var statearr_20118_20144 = state_20103__$1;
(statearr_20118_20144[(2)] = fc);

(statearr_20118_20144[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20104 === (8))){
var inst_20092 = (state_20103[(2)]);
var state_20103__$1 = state_20103;
if(cljs.core.truth_(inst_20092)){
var statearr_20119_20145 = state_20103__$1;
(statearr_20119_20145[(1)] = (12));

} else {
var statearr_20120_20146 = state_20103__$1;
(statearr_20120_20146[(1)] = (13));

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
});})(c__19454__auto___20132,tc,fc))
;
return ((function (switch__19342__auto__,c__19454__auto___20132,tc,fc){
return (function() {
var cljs$core$async$state_machine__19343__auto__ = null;
var cljs$core$async$state_machine__19343__auto____0 = (function (){
var statearr_20124 = [null,null,null,null,null,null,null,null,null];
(statearr_20124[(0)] = cljs$core$async$state_machine__19343__auto__);

(statearr_20124[(1)] = (1));

return statearr_20124;
});
var cljs$core$async$state_machine__19343__auto____1 = (function (state_20103){
while(true){
var ret_value__19344__auto__ = (function (){try{while(true){
var result__19345__auto__ = switch__19342__auto__.call(null,state_20103);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19345__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19345__auto__;
}
break;
}
}catch (e20125){if((e20125 instanceof Object)){
var ex__19346__auto__ = e20125;
var statearr_20126_20147 = state_20103;
(statearr_20126_20147[(5)] = ex__19346__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20103);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20125;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19344__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20148 = state_20103;
state_20103 = G__20148;
continue;
} else {
return ret_value__19344__auto__;
}
break;
}
});
cljs$core$async$state_machine__19343__auto__ = function(state_20103){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19343__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19343__auto____1.call(this,state_20103);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19343__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19343__auto____0;
cljs$core$async$state_machine__19343__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19343__auto____1;
return cljs$core$async$state_machine__19343__auto__;
})()
;})(switch__19342__auto__,c__19454__auto___20132,tc,fc))
})();
var state__19456__auto__ = (function (){var statearr_20127 = f__19455__auto__.call(null);
(statearr_20127[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19454__auto___20132);

return statearr_20127;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19456__auto__);
});})(c__19454__auto___20132,tc,fc))
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
var c__19454__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19454__auto__){
return (function (){
var f__19455__auto__ = (function (){var switch__19342__auto__ = ((function (c__19454__auto__){
return (function (state_20212){
var state_val_20213 = (state_20212[(1)]);
if((state_val_20213 === (7))){
var inst_20208 = (state_20212[(2)]);
var state_20212__$1 = state_20212;
var statearr_20214_20235 = state_20212__$1;
(statearr_20214_20235[(2)] = inst_20208);

(statearr_20214_20235[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20213 === (1))){
var inst_20192 = init;
var state_20212__$1 = (function (){var statearr_20215 = state_20212;
(statearr_20215[(7)] = inst_20192);

return statearr_20215;
})();
var statearr_20216_20236 = state_20212__$1;
(statearr_20216_20236[(2)] = null);

(statearr_20216_20236[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20213 === (4))){
var inst_20195 = (state_20212[(8)]);
var inst_20195__$1 = (state_20212[(2)]);
var inst_20196 = (inst_20195__$1 == null);
var state_20212__$1 = (function (){var statearr_20217 = state_20212;
(statearr_20217[(8)] = inst_20195__$1);

return statearr_20217;
})();
if(cljs.core.truth_(inst_20196)){
var statearr_20218_20237 = state_20212__$1;
(statearr_20218_20237[(1)] = (5));

} else {
var statearr_20219_20238 = state_20212__$1;
(statearr_20219_20238[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20213 === (6))){
var inst_20199 = (state_20212[(9)]);
var inst_20195 = (state_20212[(8)]);
var inst_20192 = (state_20212[(7)]);
var inst_20199__$1 = f.call(null,inst_20192,inst_20195);
var inst_20200 = cljs.core.reduced_QMARK_.call(null,inst_20199__$1);
var state_20212__$1 = (function (){var statearr_20220 = state_20212;
(statearr_20220[(9)] = inst_20199__$1);

return statearr_20220;
})();
if(inst_20200){
var statearr_20221_20239 = state_20212__$1;
(statearr_20221_20239[(1)] = (8));

} else {
var statearr_20222_20240 = state_20212__$1;
(statearr_20222_20240[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20213 === (3))){
var inst_20210 = (state_20212[(2)]);
var state_20212__$1 = state_20212;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20212__$1,inst_20210);
} else {
if((state_val_20213 === (2))){
var state_20212__$1 = state_20212;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20212__$1,(4),ch);
} else {
if((state_val_20213 === (9))){
var inst_20199 = (state_20212[(9)]);
var inst_20192 = inst_20199;
var state_20212__$1 = (function (){var statearr_20223 = state_20212;
(statearr_20223[(7)] = inst_20192);

return statearr_20223;
})();
var statearr_20224_20241 = state_20212__$1;
(statearr_20224_20241[(2)] = null);

(statearr_20224_20241[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20213 === (5))){
var inst_20192 = (state_20212[(7)]);
var state_20212__$1 = state_20212;
var statearr_20225_20242 = state_20212__$1;
(statearr_20225_20242[(2)] = inst_20192);

(statearr_20225_20242[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20213 === (10))){
var inst_20206 = (state_20212[(2)]);
var state_20212__$1 = state_20212;
var statearr_20226_20243 = state_20212__$1;
(statearr_20226_20243[(2)] = inst_20206);

(statearr_20226_20243[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20213 === (8))){
var inst_20199 = (state_20212[(9)]);
var inst_20202 = cljs.core.deref.call(null,inst_20199);
var state_20212__$1 = state_20212;
var statearr_20227_20244 = state_20212__$1;
(statearr_20227_20244[(2)] = inst_20202);

(statearr_20227_20244[(1)] = (10));


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
});})(c__19454__auto__))
;
return ((function (switch__19342__auto__,c__19454__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__19343__auto__ = null;
var cljs$core$async$reduce_$_state_machine__19343__auto____0 = (function (){
var statearr_20231 = [null,null,null,null,null,null,null,null,null,null];
(statearr_20231[(0)] = cljs$core$async$reduce_$_state_machine__19343__auto__);

(statearr_20231[(1)] = (1));

return statearr_20231;
});
var cljs$core$async$reduce_$_state_machine__19343__auto____1 = (function (state_20212){
while(true){
var ret_value__19344__auto__ = (function (){try{while(true){
var result__19345__auto__ = switch__19342__auto__.call(null,state_20212);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19345__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19345__auto__;
}
break;
}
}catch (e20232){if((e20232 instanceof Object)){
var ex__19346__auto__ = e20232;
var statearr_20233_20245 = state_20212;
(statearr_20233_20245[(5)] = ex__19346__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20212);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20232;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19344__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20246 = state_20212;
state_20212 = G__20246;
continue;
} else {
return ret_value__19344__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__19343__auto__ = function(state_20212){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__19343__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__19343__auto____1.call(this,state_20212);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__19343__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__19343__auto____0;
cljs$core$async$reduce_$_state_machine__19343__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__19343__auto____1;
return cljs$core$async$reduce_$_state_machine__19343__auto__;
})()
;})(switch__19342__auto__,c__19454__auto__))
})();
var state__19456__auto__ = (function (){var statearr_20234 = f__19455__auto__.call(null);
(statearr_20234[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19454__auto__);

return statearr_20234;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19456__auto__);
});})(c__19454__auto__))
);

return c__19454__auto__;
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
var args20247 = [];
var len__17877__auto___20299 = arguments.length;
var i__17878__auto___20300 = (0);
while(true){
if((i__17878__auto___20300 < len__17877__auto___20299)){
args20247.push((arguments[i__17878__auto___20300]));

var G__20301 = (i__17878__auto___20300 + (1));
i__17878__auto___20300 = G__20301;
continue;
} else {
}
break;
}

var G__20249 = args20247.length;
switch (G__20249) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20247.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__19454__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19454__auto__){
return (function (){
var f__19455__auto__ = (function (){var switch__19342__auto__ = ((function (c__19454__auto__){
return (function (state_20274){
var state_val_20275 = (state_20274[(1)]);
if((state_val_20275 === (7))){
var inst_20256 = (state_20274[(2)]);
var state_20274__$1 = state_20274;
var statearr_20276_20303 = state_20274__$1;
(statearr_20276_20303[(2)] = inst_20256);

(statearr_20276_20303[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20275 === (1))){
var inst_20250 = cljs.core.seq.call(null,coll);
var inst_20251 = inst_20250;
var state_20274__$1 = (function (){var statearr_20277 = state_20274;
(statearr_20277[(7)] = inst_20251);

return statearr_20277;
})();
var statearr_20278_20304 = state_20274__$1;
(statearr_20278_20304[(2)] = null);

(statearr_20278_20304[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20275 === (4))){
var inst_20251 = (state_20274[(7)]);
var inst_20254 = cljs.core.first.call(null,inst_20251);
var state_20274__$1 = state_20274;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20274__$1,(7),ch,inst_20254);
} else {
if((state_val_20275 === (13))){
var inst_20268 = (state_20274[(2)]);
var state_20274__$1 = state_20274;
var statearr_20279_20305 = state_20274__$1;
(statearr_20279_20305[(2)] = inst_20268);

(statearr_20279_20305[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20275 === (6))){
var inst_20259 = (state_20274[(2)]);
var state_20274__$1 = state_20274;
if(cljs.core.truth_(inst_20259)){
var statearr_20280_20306 = state_20274__$1;
(statearr_20280_20306[(1)] = (8));

} else {
var statearr_20281_20307 = state_20274__$1;
(statearr_20281_20307[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20275 === (3))){
var inst_20272 = (state_20274[(2)]);
var state_20274__$1 = state_20274;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20274__$1,inst_20272);
} else {
if((state_val_20275 === (12))){
var state_20274__$1 = state_20274;
var statearr_20282_20308 = state_20274__$1;
(statearr_20282_20308[(2)] = null);

(statearr_20282_20308[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20275 === (2))){
var inst_20251 = (state_20274[(7)]);
var state_20274__$1 = state_20274;
if(cljs.core.truth_(inst_20251)){
var statearr_20283_20309 = state_20274__$1;
(statearr_20283_20309[(1)] = (4));

} else {
var statearr_20284_20310 = state_20274__$1;
(statearr_20284_20310[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20275 === (11))){
var inst_20265 = cljs.core.async.close_BANG_.call(null,ch);
var state_20274__$1 = state_20274;
var statearr_20285_20311 = state_20274__$1;
(statearr_20285_20311[(2)] = inst_20265);

(statearr_20285_20311[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20275 === (9))){
var state_20274__$1 = state_20274;
if(cljs.core.truth_(close_QMARK_)){
var statearr_20286_20312 = state_20274__$1;
(statearr_20286_20312[(1)] = (11));

} else {
var statearr_20287_20313 = state_20274__$1;
(statearr_20287_20313[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20275 === (5))){
var inst_20251 = (state_20274[(7)]);
var state_20274__$1 = state_20274;
var statearr_20288_20314 = state_20274__$1;
(statearr_20288_20314[(2)] = inst_20251);

(statearr_20288_20314[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20275 === (10))){
var inst_20270 = (state_20274[(2)]);
var state_20274__$1 = state_20274;
var statearr_20289_20315 = state_20274__$1;
(statearr_20289_20315[(2)] = inst_20270);

(statearr_20289_20315[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20275 === (8))){
var inst_20251 = (state_20274[(7)]);
var inst_20261 = cljs.core.next.call(null,inst_20251);
var inst_20251__$1 = inst_20261;
var state_20274__$1 = (function (){var statearr_20290 = state_20274;
(statearr_20290[(7)] = inst_20251__$1);

return statearr_20290;
})();
var statearr_20291_20316 = state_20274__$1;
(statearr_20291_20316[(2)] = null);

(statearr_20291_20316[(1)] = (2));


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
});})(c__19454__auto__))
;
return ((function (switch__19342__auto__,c__19454__auto__){
return (function() {
var cljs$core$async$state_machine__19343__auto__ = null;
var cljs$core$async$state_machine__19343__auto____0 = (function (){
var statearr_20295 = [null,null,null,null,null,null,null,null];
(statearr_20295[(0)] = cljs$core$async$state_machine__19343__auto__);

(statearr_20295[(1)] = (1));

return statearr_20295;
});
var cljs$core$async$state_machine__19343__auto____1 = (function (state_20274){
while(true){
var ret_value__19344__auto__ = (function (){try{while(true){
var result__19345__auto__ = switch__19342__auto__.call(null,state_20274);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19345__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19345__auto__;
}
break;
}
}catch (e20296){if((e20296 instanceof Object)){
var ex__19346__auto__ = e20296;
var statearr_20297_20317 = state_20274;
(statearr_20297_20317[(5)] = ex__19346__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20274);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20296;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19344__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20318 = state_20274;
state_20274 = G__20318;
continue;
} else {
return ret_value__19344__auto__;
}
break;
}
});
cljs$core$async$state_machine__19343__auto__ = function(state_20274){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19343__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19343__auto____1.call(this,state_20274);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19343__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19343__auto____0;
cljs$core$async$state_machine__19343__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19343__auto____1;
return cljs$core$async$state_machine__19343__auto__;
})()
;})(switch__19342__auto__,c__19454__auto__))
})();
var state__19456__auto__ = (function (){var statearr_20298 = f__19455__auto__.call(null);
(statearr_20298[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19454__auto__);

return statearr_20298;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19456__auto__);
});})(c__19454__auto__))
);

return c__19454__auto__;
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
var x__17474__auto__ = (((_ == null))?null:_);
var m__17475__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__17474__auto__)]);
if(!((m__17475__auto__ == null))){
return m__17475__auto__.call(null,_);
} else {
var m__17475__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__17475__auto____$1 == null))){
return m__17475__auto____$1.call(null,_);
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
var x__17474__auto__ = (((m == null))?null:m);
var m__17475__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__17474__auto__)]);
if(!((m__17475__auto__ == null))){
return m__17475__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__17475__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__17475__auto____$1 == null))){
return m__17475__auto____$1.call(null,m,ch,close_QMARK_);
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
var x__17474__auto__ = (((m == null))?null:m);
var m__17475__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__17474__auto__)]);
if(!((m__17475__auto__ == null))){
return m__17475__auto__.call(null,m,ch);
} else {
var m__17475__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__17475__auto____$1 == null))){
return m__17475__auto____$1.call(null,m,ch);
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
var x__17474__auto__ = (((m == null))?null:m);
var m__17475__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__17474__auto__)]);
if(!((m__17475__auto__ == null))){
return m__17475__auto__.call(null,m);
} else {
var m__17475__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__17475__auto____$1 == null))){
return m__17475__auto____$1.call(null,m);
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
if(typeof cljs.core.async.t_cljs$core$async20540 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20540 = (function (mult,ch,cs,meta20541){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta20541 = meta20541;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async20540.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_20542,meta20541__$1){
var self__ = this;
var _20542__$1 = this;
return (new cljs.core.async.t_cljs$core$async20540(self__.mult,self__.ch,self__.cs,meta20541__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async20540.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_20542){
var self__ = this;
var _20542__$1 = this;
return self__.meta20541;
});})(cs))
;

cljs.core.async.t_cljs$core$async20540.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async20540.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async20540.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async20540.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async20540.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async20540.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async20540.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta20541","meta20541",1303735825,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async20540.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async20540.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20540";

cljs.core.async.t_cljs$core$async20540.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__17417__auto__,writer__17418__auto__,opt__17419__auto__){
return cljs.core._write.call(null,writer__17418__auto__,"cljs.core.async/t_cljs$core$async20540");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async20540 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async20540(mult__$1,ch__$1,cs__$1,meta20541){
return (new cljs.core.async.t_cljs$core$async20540(mult__$1,ch__$1,cs__$1,meta20541));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async20540(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__19454__auto___20761 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19454__auto___20761,cs,m,dchan,dctr,done){
return (function (){
var f__19455__auto__ = (function (){var switch__19342__auto__ = ((function (c__19454__auto___20761,cs,m,dchan,dctr,done){
return (function (state_20673){
var state_val_20674 = (state_20673[(1)]);
if((state_val_20674 === (7))){
var inst_20669 = (state_20673[(2)]);
var state_20673__$1 = state_20673;
var statearr_20675_20762 = state_20673__$1;
(statearr_20675_20762[(2)] = inst_20669);

(statearr_20675_20762[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20674 === (20))){
var inst_20574 = (state_20673[(7)]);
var inst_20584 = cljs.core.first.call(null,inst_20574);
var inst_20585 = cljs.core.nth.call(null,inst_20584,(0),null);
var inst_20586 = cljs.core.nth.call(null,inst_20584,(1),null);
var state_20673__$1 = (function (){var statearr_20676 = state_20673;
(statearr_20676[(8)] = inst_20585);

return statearr_20676;
})();
if(cljs.core.truth_(inst_20586)){
var statearr_20677_20763 = state_20673__$1;
(statearr_20677_20763[(1)] = (22));

} else {
var statearr_20678_20764 = state_20673__$1;
(statearr_20678_20764[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20674 === (27))){
var inst_20545 = (state_20673[(9)]);
var inst_20621 = (state_20673[(10)]);
var inst_20614 = (state_20673[(11)]);
var inst_20616 = (state_20673[(12)]);
var inst_20621__$1 = cljs.core._nth.call(null,inst_20614,inst_20616);
var inst_20622 = cljs.core.async.put_BANG_.call(null,inst_20621__$1,inst_20545,done);
var state_20673__$1 = (function (){var statearr_20679 = state_20673;
(statearr_20679[(10)] = inst_20621__$1);

return statearr_20679;
})();
if(cljs.core.truth_(inst_20622)){
var statearr_20680_20765 = state_20673__$1;
(statearr_20680_20765[(1)] = (30));

} else {
var statearr_20681_20766 = state_20673__$1;
(statearr_20681_20766[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20674 === (1))){
var state_20673__$1 = state_20673;
var statearr_20682_20767 = state_20673__$1;
(statearr_20682_20767[(2)] = null);

(statearr_20682_20767[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20674 === (24))){
var inst_20574 = (state_20673[(7)]);
var inst_20591 = (state_20673[(2)]);
var inst_20592 = cljs.core.next.call(null,inst_20574);
var inst_20554 = inst_20592;
var inst_20555 = null;
var inst_20556 = (0);
var inst_20557 = (0);
var state_20673__$1 = (function (){var statearr_20683 = state_20673;
(statearr_20683[(13)] = inst_20591);

(statearr_20683[(14)] = inst_20554);

(statearr_20683[(15)] = inst_20557);

(statearr_20683[(16)] = inst_20556);

(statearr_20683[(17)] = inst_20555);

return statearr_20683;
})();
var statearr_20684_20768 = state_20673__$1;
(statearr_20684_20768[(2)] = null);

(statearr_20684_20768[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20674 === (39))){
var state_20673__$1 = state_20673;
var statearr_20688_20769 = state_20673__$1;
(statearr_20688_20769[(2)] = null);

(statearr_20688_20769[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20674 === (4))){
var inst_20545 = (state_20673[(9)]);
var inst_20545__$1 = (state_20673[(2)]);
var inst_20546 = (inst_20545__$1 == null);
var state_20673__$1 = (function (){var statearr_20689 = state_20673;
(statearr_20689[(9)] = inst_20545__$1);

return statearr_20689;
})();
if(cljs.core.truth_(inst_20546)){
var statearr_20690_20770 = state_20673__$1;
(statearr_20690_20770[(1)] = (5));

} else {
var statearr_20691_20771 = state_20673__$1;
(statearr_20691_20771[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20674 === (15))){
var inst_20554 = (state_20673[(14)]);
var inst_20557 = (state_20673[(15)]);
var inst_20556 = (state_20673[(16)]);
var inst_20555 = (state_20673[(17)]);
var inst_20570 = (state_20673[(2)]);
var inst_20571 = (inst_20557 + (1));
var tmp20685 = inst_20554;
var tmp20686 = inst_20556;
var tmp20687 = inst_20555;
var inst_20554__$1 = tmp20685;
var inst_20555__$1 = tmp20687;
var inst_20556__$1 = tmp20686;
var inst_20557__$1 = inst_20571;
var state_20673__$1 = (function (){var statearr_20692 = state_20673;
(statearr_20692[(18)] = inst_20570);

(statearr_20692[(14)] = inst_20554__$1);

(statearr_20692[(15)] = inst_20557__$1);

(statearr_20692[(16)] = inst_20556__$1);

(statearr_20692[(17)] = inst_20555__$1);

return statearr_20692;
})();
var statearr_20693_20772 = state_20673__$1;
(statearr_20693_20772[(2)] = null);

(statearr_20693_20772[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20674 === (21))){
var inst_20595 = (state_20673[(2)]);
var state_20673__$1 = state_20673;
var statearr_20697_20773 = state_20673__$1;
(statearr_20697_20773[(2)] = inst_20595);

(statearr_20697_20773[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20674 === (31))){
var inst_20621 = (state_20673[(10)]);
var inst_20625 = done.call(null,null);
var inst_20626 = cljs.core.async.untap_STAR_.call(null,m,inst_20621);
var state_20673__$1 = (function (){var statearr_20698 = state_20673;
(statearr_20698[(19)] = inst_20625);

return statearr_20698;
})();
var statearr_20699_20774 = state_20673__$1;
(statearr_20699_20774[(2)] = inst_20626);

(statearr_20699_20774[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20674 === (32))){
var inst_20613 = (state_20673[(20)]);
var inst_20614 = (state_20673[(11)]);
var inst_20616 = (state_20673[(12)]);
var inst_20615 = (state_20673[(21)]);
var inst_20628 = (state_20673[(2)]);
var inst_20629 = (inst_20616 + (1));
var tmp20694 = inst_20613;
var tmp20695 = inst_20614;
var tmp20696 = inst_20615;
var inst_20613__$1 = tmp20694;
var inst_20614__$1 = tmp20695;
var inst_20615__$1 = tmp20696;
var inst_20616__$1 = inst_20629;
var state_20673__$1 = (function (){var statearr_20700 = state_20673;
(statearr_20700[(22)] = inst_20628);

(statearr_20700[(20)] = inst_20613__$1);

(statearr_20700[(11)] = inst_20614__$1);

(statearr_20700[(12)] = inst_20616__$1);

(statearr_20700[(21)] = inst_20615__$1);

return statearr_20700;
})();
var statearr_20701_20775 = state_20673__$1;
(statearr_20701_20775[(2)] = null);

(statearr_20701_20775[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20674 === (40))){
var inst_20641 = (state_20673[(23)]);
var inst_20645 = done.call(null,null);
var inst_20646 = cljs.core.async.untap_STAR_.call(null,m,inst_20641);
var state_20673__$1 = (function (){var statearr_20702 = state_20673;
(statearr_20702[(24)] = inst_20645);

return statearr_20702;
})();
var statearr_20703_20776 = state_20673__$1;
(statearr_20703_20776[(2)] = inst_20646);

(statearr_20703_20776[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20674 === (33))){
var inst_20632 = (state_20673[(25)]);
var inst_20634 = cljs.core.chunked_seq_QMARK_.call(null,inst_20632);
var state_20673__$1 = state_20673;
if(inst_20634){
var statearr_20704_20777 = state_20673__$1;
(statearr_20704_20777[(1)] = (36));

} else {
var statearr_20705_20778 = state_20673__$1;
(statearr_20705_20778[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20674 === (13))){
var inst_20564 = (state_20673[(26)]);
var inst_20567 = cljs.core.async.close_BANG_.call(null,inst_20564);
var state_20673__$1 = state_20673;
var statearr_20706_20779 = state_20673__$1;
(statearr_20706_20779[(2)] = inst_20567);

(statearr_20706_20779[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20674 === (22))){
var inst_20585 = (state_20673[(8)]);
var inst_20588 = cljs.core.async.close_BANG_.call(null,inst_20585);
var state_20673__$1 = state_20673;
var statearr_20707_20780 = state_20673__$1;
(statearr_20707_20780[(2)] = inst_20588);

(statearr_20707_20780[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20674 === (36))){
var inst_20632 = (state_20673[(25)]);
var inst_20636 = cljs.core.chunk_first.call(null,inst_20632);
var inst_20637 = cljs.core.chunk_rest.call(null,inst_20632);
var inst_20638 = cljs.core.count.call(null,inst_20636);
var inst_20613 = inst_20637;
var inst_20614 = inst_20636;
var inst_20615 = inst_20638;
var inst_20616 = (0);
var state_20673__$1 = (function (){var statearr_20708 = state_20673;
(statearr_20708[(20)] = inst_20613);

(statearr_20708[(11)] = inst_20614);

(statearr_20708[(12)] = inst_20616);

(statearr_20708[(21)] = inst_20615);

return statearr_20708;
})();
var statearr_20709_20781 = state_20673__$1;
(statearr_20709_20781[(2)] = null);

(statearr_20709_20781[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20674 === (41))){
var inst_20632 = (state_20673[(25)]);
var inst_20648 = (state_20673[(2)]);
var inst_20649 = cljs.core.next.call(null,inst_20632);
var inst_20613 = inst_20649;
var inst_20614 = null;
var inst_20615 = (0);
var inst_20616 = (0);
var state_20673__$1 = (function (){var statearr_20710 = state_20673;
(statearr_20710[(27)] = inst_20648);

(statearr_20710[(20)] = inst_20613);

(statearr_20710[(11)] = inst_20614);

(statearr_20710[(12)] = inst_20616);

(statearr_20710[(21)] = inst_20615);

return statearr_20710;
})();
var statearr_20711_20782 = state_20673__$1;
(statearr_20711_20782[(2)] = null);

(statearr_20711_20782[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20674 === (43))){
var state_20673__$1 = state_20673;
var statearr_20712_20783 = state_20673__$1;
(statearr_20712_20783[(2)] = null);

(statearr_20712_20783[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20674 === (29))){
var inst_20657 = (state_20673[(2)]);
var state_20673__$1 = state_20673;
var statearr_20713_20784 = state_20673__$1;
(statearr_20713_20784[(2)] = inst_20657);

(statearr_20713_20784[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20674 === (44))){
var inst_20666 = (state_20673[(2)]);
var state_20673__$1 = (function (){var statearr_20714 = state_20673;
(statearr_20714[(28)] = inst_20666);

return statearr_20714;
})();
var statearr_20715_20785 = state_20673__$1;
(statearr_20715_20785[(2)] = null);

(statearr_20715_20785[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20674 === (6))){
var inst_20605 = (state_20673[(29)]);
var inst_20604 = cljs.core.deref.call(null,cs);
var inst_20605__$1 = cljs.core.keys.call(null,inst_20604);
var inst_20606 = cljs.core.count.call(null,inst_20605__$1);
var inst_20607 = cljs.core.reset_BANG_.call(null,dctr,inst_20606);
var inst_20612 = cljs.core.seq.call(null,inst_20605__$1);
var inst_20613 = inst_20612;
var inst_20614 = null;
var inst_20615 = (0);
var inst_20616 = (0);
var state_20673__$1 = (function (){var statearr_20716 = state_20673;
(statearr_20716[(30)] = inst_20607);

(statearr_20716[(29)] = inst_20605__$1);

(statearr_20716[(20)] = inst_20613);

(statearr_20716[(11)] = inst_20614);

(statearr_20716[(12)] = inst_20616);

(statearr_20716[(21)] = inst_20615);

return statearr_20716;
})();
var statearr_20717_20786 = state_20673__$1;
(statearr_20717_20786[(2)] = null);

(statearr_20717_20786[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20674 === (28))){
var inst_20632 = (state_20673[(25)]);
var inst_20613 = (state_20673[(20)]);
var inst_20632__$1 = cljs.core.seq.call(null,inst_20613);
var state_20673__$1 = (function (){var statearr_20718 = state_20673;
(statearr_20718[(25)] = inst_20632__$1);

return statearr_20718;
})();
if(inst_20632__$1){
var statearr_20719_20787 = state_20673__$1;
(statearr_20719_20787[(1)] = (33));

} else {
var statearr_20720_20788 = state_20673__$1;
(statearr_20720_20788[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20674 === (25))){
var inst_20616 = (state_20673[(12)]);
var inst_20615 = (state_20673[(21)]);
var inst_20618 = (inst_20616 < inst_20615);
var inst_20619 = inst_20618;
var state_20673__$1 = state_20673;
if(cljs.core.truth_(inst_20619)){
var statearr_20721_20789 = state_20673__$1;
(statearr_20721_20789[(1)] = (27));

} else {
var statearr_20722_20790 = state_20673__$1;
(statearr_20722_20790[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20674 === (34))){
var state_20673__$1 = state_20673;
var statearr_20723_20791 = state_20673__$1;
(statearr_20723_20791[(2)] = null);

(statearr_20723_20791[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20674 === (17))){
var state_20673__$1 = state_20673;
var statearr_20724_20792 = state_20673__$1;
(statearr_20724_20792[(2)] = null);

(statearr_20724_20792[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20674 === (3))){
var inst_20671 = (state_20673[(2)]);
var state_20673__$1 = state_20673;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20673__$1,inst_20671);
} else {
if((state_val_20674 === (12))){
var inst_20600 = (state_20673[(2)]);
var state_20673__$1 = state_20673;
var statearr_20725_20793 = state_20673__$1;
(statearr_20725_20793[(2)] = inst_20600);

(statearr_20725_20793[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20674 === (2))){
var state_20673__$1 = state_20673;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20673__$1,(4),ch);
} else {
if((state_val_20674 === (23))){
var state_20673__$1 = state_20673;
var statearr_20726_20794 = state_20673__$1;
(statearr_20726_20794[(2)] = null);

(statearr_20726_20794[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20674 === (35))){
var inst_20655 = (state_20673[(2)]);
var state_20673__$1 = state_20673;
var statearr_20727_20795 = state_20673__$1;
(statearr_20727_20795[(2)] = inst_20655);

(statearr_20727_20795[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20674 === (19))){
var inst_20574 = (state_20673[(7)]);
var inst_20578 = cljs.core.chunk_first.call(null,inst_20574);
var inst_20579 = cljs.core.chunk_rest.call(null,inst_20574);
var inst_20580 = cljs.core.count.call(null,inst_20578);
var inst_20554 = inst_20579;
var inst_20555 = inst_20578;
var inst_20556 = inst_20580;
var inst_20557 = (0);
var state_20673__$1 = (function (){var statearr_20728 = state_20673;
(statearr_20728[(14)] = inst_20554);

(statearr_20728[(15)] = inst_20557);

(statearr_20728[(16)] = inst_20556);

(statearr_20728[(17)] = inst_20555);

return statearr_20728;
})();
var statearr_20729_20796 = state_20673__$1;
(statearr_20729_20796[(2)] = null);

(statearr_20729_20796[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20674 === (11))){
var inst_20574 = (state_20673[(7)]);
var inst_20554 = (state_20673[(14)]);
var inst_20574__$1 = cljs.core.seq.call(null,inst_20554);
var state_20673__$1 = (function (){var statearr_20730 = state_20673;
(statearr_20730[(7)] = inst_20574__$1);

return statearr_20730;
})();
if(inst_20574__$1){
var statearr_20731_20797 = state_20673__$1;
(statearr_20731_20797[(1)] = (16));

} else {
var statearr_20732_20798 = state_20673__$1;
(statearr_20732_20798[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20674 === (9))){
var inst_20602 = (state_20673[(2)]);
var state_20673__$1 = state_20673;
var statearr_20733_20799 = state_20673__$1;
(statearr_20733_20799[(2)] = inst_20602);

(statearr_20733_20799[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20674 === (5))){
var inst_20552 = cljs.core.deref.call(null,cs);
var inst_20553 = cljs.core.seq.call(null,inst_20552);
var inst_20554 = inst_20553;
var inst_20555 = null;
var inst_20556 = (0);
var inst_20557 = (0);
var state_20673__$1 = (function (){var statearr_20734 = state_20673;
(statearr_20734[(14)] = inst_20554);

(statearr_20734[(15)] = inst_20557);

(statearr_20734[(16)] = inst_20556);

(statearr_20734[(17)] = inst_20555);

return statearr_20734;
})();
var statearr_20735_20800 = state_20673__$1;
(statearr_20735_20800[(2)] = null);

(statearr_20735_20800[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20674 === (14))){
var state_20673__$1 = state_20673;
var statearr_20736_20801 = state_20673__$1;
(statearr_20736_20801[(2)] = null);

(statearr_20736_20801[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20674 === (45))){
var inst_20663 = (state_20673[(2)]);
var state_20673__$1 = state_20673;
var statearr_20737_20802 = state_20673__$1;
(statearr_20737_20802[(2)] = inst_20663);

(statearr_20737_20802[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20674 === (26))){
var inst_20605 = (state_20673[(29)]);
var inst_20659 = (state_20673[(2)]);
var inst_20660 = cljs.core.seq.call(null,inst_20605);
var state_20673__$1 = (function (){var statearr_20738 = state_20673;
(statearr_20738[(31)] = inst_20659);

return statearr_20738;
})();
if(inst_20660){
var statearr_20739_20803 = state_20673__$1;
(statearr_20739_20803[(1)] = (42));

} else {
var statearr_20740_20804 = state_20673__$1;
(statearr_20740_20804[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20674 === (16))){
var inst_20574 = (state_20673[(7)]);
var inst_20576 = cljs.core.chunked_seq_QMARK_.call(null,inst_20574);
var state_20673__$1 = state_20673;
if(inst_20576){
var statearr_20741_20805 = state_20673__$1;
(statearr_20741_20805[(1)] = (19));

} else {
var statearr_20742_20806 = state_20673__$1;
(statearr_20742_20806[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20674 === (38))){
var inst_20652 = (state_20673[(2)]);
var state_20673__$1 = state_20673;
var statearr_20743_20807 = state_20673__$1;
(statearr_20743_20807[(2)] = inst_20652);

(statearr_20743_20807[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20674 === (30))){
var state_20673__$1 = state_20673;
var statearr_20744_20808 = state_20673__$1;
(statearr_20744_20808[(2)] = null);

(statearr_20744_20808[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20674 === (10))){
var inst_20557 = (state_20673[(15)]);
var inst_20555 = (state_20673[(17)]);
var inst_20563 = cljs.core._nth.call(null,inst_20555,inst_20557);
var inst_20564 = cljs.core.nth.call(null,inst_20563,(0),null);
var inst_20565 = cljs.core.nth.call(null,inst_20563,(1),null);
var state_20673__$1 = (function (){var statearr_20745 = state_20673;
(statearr_20745[(26)] = inst_20564);

return statearr_20745;
})();
if(cljs.core.truth_(inst_20565)){
var statearr_20746_20809 = state_20673__$1;
(statearr_20746_20809[(1)] = (13));

} else {
var statearr_20747_20810 = state_20673__$1;
(statearr_20747_20810[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20674 === (18))){
var inst_20598 = (state_20673[(2)]);
var state_20673__$1 = state_20673;
var statearr_20748_20811 = state_20673__$1;
(statearr_20748_20811[(2)] = inst_20598);

(statearr_20748_20811[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20674 === (42))){
var state_20673__$1 = state_20673;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20673__$1,(45),dchan);
} else {
if((state_val_20674 === (37))){
var inst_20632 = (state_20673[(25)]);
var inst_20545 = (state_20673[(9)]);
var inst_20641 = (state_20673[(23)]);
var inst_20641__$1 = cljs.core.first.call(null,inst_20632);
var inst_20642 = cljs.core.async.put_BANG_.call(null,inst_20641__$1,inst_20545,done);
var state_20673__$1 = (function (){var statearr_20749 = state_20673;
(statearr_20749[(23)] = inst_20641__$1);

return statearr_20749;
})();
if(cljs.core.truth_(inst_20642)){
var statearr_20750_20812 = state_20673__$1;
(statearr_20750_20812[(1)] = (39));

} else {
var statearr_20751_20813 = state_20673__$1;
(statearr_20751_20813[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20674 === (8))){
var inst_20557 = (state_20673[(15)]);
var inst_20556 = (state_20673[(16)]);
var inst_20559 = (inst_20557 < inst_20556);
var inst_20560 = inst_20559;
var state_20673__$1 = state_20673;
if(cljs.core.truth_(inst_20560)){
var statearr_20752_20814 = state_20673__$1;
(statearr_20752_20814[(1)] = (10));

} else {
var statearr_20753_20815 = state_20673__$1;
(statearr_20753_20815[(1)] = (11));

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
});})(c__19454__auto___20761,cs,m,dchan,dctr,done))
;
return ((function (switch__19342__auto__,c__19454__auto___20761,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__19343__auto__ = null;
var cljs$core$async$mult_$_state_machine__19343__auto____0 = (function (){
var statearr_20757 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20757[(0)] = cljs$core$async$mult_$_state_machine__19343__auto__);

(statearr_20757[(1)] = (1));

return statearr_20757;
});
var cljs$core$async$mult_$_state_machine__19343__auto____1 = (function (state_20673){
while(true){
var ret_value__19344__auto__ = (function (){try{while(true){
var result__19345__auto__ = switch__19342__auto__.call(null,state_20673);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19345__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19345__auto__;
}
break;
}
}catch (e20758){if((e20758 instanceof Object)){
var ex__19346__auto__ = e20758;
var statearr_20759_20816 = state_20673;
(statearr_20759_20816[(5)] = ex__19346__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20673);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20758;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19344__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20817 = state_20673;
state_20673 = G__20817;
continue;
} else {
return ret_value__19344__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__19343__auto__ = function(state_20673){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__19343__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__19343__auto____1.call(this,state_20673);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__19343__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__19343__auto____0;
cljs$core$async$mult_$_state_machine__19343__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__19343__auto____1;
return cljs$core$async$mult_$_state_machine__19343__auto__;
})()
;})(switch__19342__auto__,c__19454__auto___20761,cs,m,dchan,dctr,done))
})();
var state__19456__auto__ = (function (){var statearr_20760 = f__19455__auto__.call(null);
(statearr_20760[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19454__auto___20761);

return statearr_20760;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19456__auto__);
});})(c__19454__auto___20761,cs,m,dchan,dctr,done))
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
var args20818 = [];
var len__17877__auto___20821 = arguments.length;
var i__17878__auto___20822 = (0);
while(true){
if((i__17878__auto___20822 < len__17877__auto___20821)){
args20818.push((arguments[i__17878__auto___20822]));

var G__20823 = (i__17878__auto___20822 + (1));
i__17878__auto___20822 = G__20823;
continue;
} else {
}
break;
}

var G__20820 = args20818.length;
switch (G__20820) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20818.length)].join('')));

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
var x__17474__auto__ = (((m == null))?null:m);
var m__17475__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__17474__auto__)]);
if(!((m__17475__auto__ == null))){
return m__17475__auto__.call(null,m,ch);
} else {
var m__17475__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__17475__auto____$1 == null))){
return m__17475__auto____$1.call(null,m,ch);
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
var x__17474__auto__ = (((m == null))?null:m);
var m__17475__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__17474__auto__)]);
if(!((m__17475__auto__ == null))){
return m__17475__auto__.call(null,m,ch);
} else {
var m__17475__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__17475__auto____$1 == null))){
return m__17475__auto____$1.call(null,m,ch);
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
var x__17474__auto__ = (((m == null))?null:m);
var m__17475__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__17474__auto__)]);
if(!((m__17475__auto__ == null))){
return m__17475__auto__.call(null,m);
} else {
var m__17475__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__17475__auto____$1 == null))){
return m__17475__auto____$1.call(null,m);
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
var x__17474__auto__ = (((m == null))?null:m);
var m__17475__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__17474__auto__)]);
if(!((m__17475__auto__ == null))){
return m__17475__auto__.call(null,m,state_map);
} else {
var m__17475__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__17475__auto____$1 == null))){
return m__17475__auto____$1.call(null,m,state_map);
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
var x__17474__auto__ = (((m == null))?null:m);
var m__17475__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__17474__auto__)]);
if(!((m__17475__auto__ == null))){
return m__17475__auto__.call(null,m,mode);
} else {
var m__17475__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__17475__auto____$1 == null))){
return m__17475__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__17884__auto__ = [];
var len__17877__auto___20835 = arguments.length;
var i__17878__auto___20836 = (0);
while(true){
if((i__17878__auto___20836 < len__17877__auto___20835)){
args__17884__auto__.push((arguments[i__17878__auto___20836]));

var G__20837 = (i__17878__auto___20836 + (1));
i__17878__auto___20836 = G__20837;
continue;
} else {
}
break;
}

var argseq__17885__auto__ = ((((3) < args__17884__auto__.length))?(new cljs.core.IndexedSeq(args__17884__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__17885__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__20829){
var map__20830 = p__20829;
var map__20830__$1 = ((((!((map__20830 == null)))?((((map__20830.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20830.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20830):map__20830);
var opts = map__20830__$1;
var statearr_20832_20838 = state;
(statearr_20832_20838[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__20830,map__20830__$1,opts){
return (function (val){
var statearr_20833_20839 = state;
(statearr_20833_20839[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__20830,map__20830__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_20834_20840 = state;
(statearr_20834_20840[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq20825){
var G__20826 = cljs.core.first.call(null,seq20825);
var seq20825__$1 = cljs.core.next.call(null,seq20825);
var G__20827 = cljs.core.first.call(null,seq20825__$1);
var seq20825__$2 = cljs.core.next.call(null,seq20825__$1);
var G__20828 = cljs.core.first.call(null,seq20825__$2);
var seq20825__$3 = cljs.core.next.call(null,seq20825__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__20826,G__20827,G__20828,seq20825__$3);
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
if(typeof cljs.core.async.t_cljs$core$async21004 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21004 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta21005){
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
this.meta21005 = meta21005;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async21004.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_21006,meta21005__$1){
var self__ = this;
var _21006__$1 = this;
return (new cljs.core.async.t_cljs$core$async21004(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta21005__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async21004.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_21006){
var self__ = this;
var _21006__$1 = this;
return self__.meta21005;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async21004.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async21004.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async21004.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async21004.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async21004.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async21004.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async21004.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async21004.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async21004.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta21005","meta21005",-1265735677,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async21004.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21004.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21004";

cljs.core.async.t_cljs$core$async21004.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__17417__auto__,writer__17418__auto__,opt__17419__auto__){
return cljs.core._write.call(null,writer__17418__auto__,"cljs.core.async/t_cljs$core$async21004");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async21004 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async21004(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta21005){
return (new cljs.core.async.t_cljs$core$async21004(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta21005));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async21004(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__19454__auto___21167 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19454__auto___21167,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__19455__auto__ = (function (){var switch__19342__auto__ = ((function (c__19454__auto___21167,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_21104){
var state_val_21105 = (state_21104[(1)]);
if((state_val_21105 === (7))){
var inst_21022 = (state_21104[(2)]);
var state_21104__$1 = state_21104;
var statearr_21106_21168 = state_21104__$1;
(statearr_21106_21168[(2)] = inst_21022);

(statearr_21106_21168[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21105 === (20))){
var inst_21034 = (state_21104[(7)]);
var state_21104__$1 = state_21104;
var statearr_21107_21169 = state_21104__$1;
(statearr_21107_21169[(2)] = inst_21034);

(statearr_21107_21169[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21105 === (27))){
var state_21104__$1 = state_21104;
var statearr_21108_21170 = state_21104__$1;
(statearr_21108_21170[(2)] = null);

(statearr_21108_21170[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21105 === (1))){
var inst_21010 = (state_21104[(8)]);
var inst_21010__$1 = calc_state.call(null);
var inst_21012 = (inst_21010__$1 == null);
var inst_21013 = cljs.core.not.call(null,inst_21012);
var state_21104__$1 = (function (){var statearr_21109 = state_21104;
(statearr_21109[(8)] = inst_21010__$1);

return statearr_21109;
})();
if(inst_21013){
var statearr_21110_21171 = state_21104__$1;
(statearr_21110_21171[(1)] = (2));

} else {
var statearr_21111_21172 = state_21104__$1;
(statearr_21111_21172[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21105 === (24))){
var inst_21064 = (state_21104[(9)]);
var inst_21078 = (state_21104[(10)]);
var inst_21057 = (state_21104[(11)]);
var inst_21078__$1 = inst_21057.call(null,inst_21064);
var state_21104__$1 = (function (){var statearr_21112 = state_21104;
(statearr_21112[(10)] = inst_21078__$1);

return statearr_21112;
})();
if(cljs.core.truth_(inst_21078__$1)){
var statearr_21113_21173 = state_21104__$1;
(statearr_21113_21173[(1)] = (29));

} else {
var statearr_21114_21174 = state_21104__$1;
(statearr_21114_21174[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21105 === (4))){
var inst_21025 = (state_21104[(2)]);
var state_21104__$1 = state_21104;
if(cljs.core.truth_(inst_21025)){
var statearr_21115_21175 = state_21104__$1;
(statearr_21115_21175[(1)] = (8));

} else {
var statearr_21116_21176 = state_21104__$1;
(statearr_21116_21176[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21105 === (15))){
var inst_21051 = (state_21104[(2)]);
var state_21104__$1 = state_21104;
if(cljs.core.truth_(inst_21051)){
var statearr_21117_21177 = state_21104__$1;
(statearr_21117_21177[(1)] = (19));

} else {
var statearr_21118_21178 = state_21104__$1;
(statearr_21118_21178[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21105 === (21))){
var inst_21056 = (state_21104[(12)]);
var inst_21056__$1 = (state_21104[(2)]);
var inst_21057 = cljs.core.get.call(null,inst_21056__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_21058 = cljs.core.get.call(null,inst_21056__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_21059 = cljs.core.get.call(null,inst_21056__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_21104__$1 = (function (){var statearr_21119 = state_21104;
(statearr_21119[(12)] = inst_21056__$1);

(statearr_21119[(13)] = inst_21058);

(statearr_21119[(11)] = inst_21057);

return statearr_21119;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_21104__$1,(22),inst_21059);
} else {
if((state_val_21105 === (31))){
var inst_21086 = (state_21104[(2)]);
var state_21104__$1 = state_21104;
if(cljs.core.truth_(inst_21086)){
var statearr_21120_21179 = state_21104__$1;
(statearr_21120_21179[(1)] = (32));

} else {
var statearr_21121_21180 = state_21104__$1;
(statearr_21121_21180[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21105 === (32))){
var inst_21063 = (state_21104[(14)]);
var state_21104__$1 = state_21104;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21104__$1,(35),out,inst_21063);
} else {
if((state_val_21105 === (33))){
var inst_21056 = (state_21104[(12)]);
var inst_21034 = inst_21056;
var state_21104__$1 = (function (){var statearr_21122 = state_21104;
(statearr_21122[(7)] = inst_21034);

return statearr_21122;
})();
var statearr_21123_21181 = state_21104__$1;
(statearr_21123_21181[(2)] = null);

(statearr_21123_21181[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21105 === (13))){
var inst_21034 = (state_21104[(7)]);
var inst_21041 = inst_21034.cljs$lang$protocol_mask$partition0$;
var inst_21042 = (inst_21041 & (64));
var inst_21043 = inst_21034.cljs$core$ISeq$;
var inst_21044 = (inst_21042) || (inst_21043);
var state_21104__$1 = state_21104;
if(cljs.core.truth_(inst_21044)){
var statearr_21124_21182 = state_21104__$1;
(statearr_21124_21182[(1)] = (16));

} else {
var statearr_21125_21183 = state_21104__$1;
(statearr_21125_21183[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21105 === (22))){
var inst_21064 = (state_21104[(9)]);
var inst_21063 = (state_21104[(14)]);
var inst_21062 = (state_21104[(2)]);
var inst_21063__$1 = cljs.core.nth.call(null,inst_21062,(0),null);
var inst_21064__$1 = cljs.core.nth.call(null,inst_21062,(1),null);
var inst_21065 = (inst_21063__$1 == null);
var inst_21066 = cljs.core._EQ_.call(null,inst_21064__$1,change);
var inst_21067 = (inst_21065) || (inst_21066);
var state_21104__$1 = (function (){var statearr_21126 = state_21104;
(statearr_21126[(9)] = inst_21064__$1);

(statearr_21126[(14)] = inst_21063__$1);

return statearr_21126;
})();
if(cljs.core.truth_(inst_21067)){
var statearr_21127_21184 = state_21104__$1;
(statearr_21127_21184[(1)] = (23));

} else {
var statearr_21128_21185 = state_21104__$1;
(statearr_21128_21185[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21105 === (36))){
var inst_21056 = (state_21104[(12)]);
var inst_21034 = inst_21056;
var state_21104__$1 = (function (){var statearr_21129 = state_21104;
(statearr_21129[(7)] = inst_21034);

return statearr_21129;
})();
var statearr_21130_21186 = state_21104__$1;
(statearr_21130_21186[(2)] = null);

(statearr_21130_21186[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21105 === (29))){
var inst_21078 = (state_21104[(10)]);
var state_21104__$1 = state_21104;
var statearr_21131_21187 = state_21104__$1;
(statearr_21131_21187[(2)] = inst_21078);

(statearr_21131_21187[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21105 === (6))){
var state_21104__$1 = state_21104;
var statearr_21132_21188 = state_21104__$1;
(statearr_21132_21188[(2)] = false);

(statearr_21132_21188[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21105 === (28))){
var inst_21074 = (state_21104[(2)]);
var inst_21075 = calc_state.call(null);
var inst_21034 = inst_21075;
var state_21104__$1 = (function (){var statearr_21133 = state_21104;
(statearr_21133[(7)] = inst_21034);

(statearr_21133[(15)] = inst_21074);

return statearr_21133;
})();
var statearr_21134_21189 = state_21104__$1;
(statearr_21134_21189[(2)] = null);

(statearr_21134_21189[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21105 === (25))){
var inst_21100 = (state_21104[(2)]);
var state_21104__$1 = state_21104;
var statearr_21135_21190 = state_21104__$1;
(statearr_21135_21190[(2)] = inst_21100);

(statearr_21135_21190[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21105 === (34))){
var inst_21098 = (state_21104[(2)]);
var state_21104__$1 = state_21104;
var statearr_21136_21191 = state_21104__$1;
(statearr_21136_21191[(2)] = inst_21098);

(statearr_21136_21191[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21105 === (17))){
var state_21104__$1 = state_21104;
var statearr_21137_21192 = state_21104__$1;
(statearr_21137_21192[(2)] = false);

(statearr_21137_21192[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21105 === (3))){
var state_21104__$1 = state_21104;
var statearr_21138_21193 = state_21104__$1;
(statearr_21138_21193[(2)] = false);

(statearr_21138_21193[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21105 === (12))){
var inst_21102 = (state_21104[(2)]);
var state_21104__$1 = state_21104;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21104__$1,inst_21102);
} else {
if((state_val_21105 === (2))){
var inst_21010 = (state_21104[(8)]);
var inst_21015 = inst_21010.cljs$lang$protocol_mask$partition0$;
var inst_21016 = (inst_21015 & (64));
var inst_21017 = inst_21010.cljs$core$ISeq$;
var inst_21018 = (inst_21016) || (inst_21017);
var state_21104__$1 = state_21104;
if(cljs.core.truth_(inst_21018)){
var statearr_21139_21194 = state_21104__$1;
(statearr_21139_21194[(1)] = (5));

} else {
var statearr_21140_21195 = state_21104__$1;
(statearr_21140_21195[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21105 === (23))){
var inst_21063 = (state_21104[(14)]);
var inst_21069 = (inst_21063 == null);
var state_21104__$1 = state_21104;
if(cljs.core.truth_(inst_21069)){
var statearr_21141_21196 = state_21104__$1;
(statearr_21141_21196[(1)] = (26));

} else {
var statearr_21142_21197 = state_21104__$1;
(statearr_21142_21197[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21105 === (35))){
var inst_21089 = (state_21104[(2)]);
var state_21104__$1 = state_21104;
if(cljs.core.truth_(inst_21089)){
var statearr_21143_21198 = state_21104__$1;
(statearr_21143_21198[(1)] = (36));

} else {
var statearr_21144_21199 = state_21104__$1;
(statearr_21144_21199[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21105 === (19))){
var inst_21034 = (state_21104[(7)]);
var inst_21053 = cljs.core.apply.call(null,cljs.core.hash_map,inst_21034);
var state_21104__$1 = state_21104;
var statearr_21145_21200 = state_21104__$1;
(statearr_21145_21200[(2)] = inst_21053);

(statearr_21145_21200[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21105 === (11))){
var inst_21034 = (state_21104[(7)]);
var inst_21038 = (inst_21034 == null);
var inst_21039 = cljs.core.not.call(null,inst_21038);
var state_21104__$1 = state_21104;
if(inst_21039){
var statearr_21146_21201 = state_21104__$1;
(statearr_21146_21201[(1)] = (13));

} else {
var statearr_21147_21202 = state_21104__$1;
(statearr_21147_21202[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21105 === (9))){
var inst_21010 = (state_21104[(8)]);
var state_21104__$1 = state_21104;
var statearr_21148_21203 = state_21104__$1;
(statearr_21148_21203[(2)] = inst_21010);

(statearr_21148_21203[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21105 === (5))){
var state_21104__$1 = state_21104;
var statearr_21149_21204 = state_21104__$1;
(statearr_21149_21204[(2)] = true);

(statearr_21149_21204[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21105 === (14))){
var state_21104__$1 = state_21104;
var statearr_21150_21205 = state_21104__$1;
(statearr_21150_21205[(2)] = false);

(statearr_21150_21205[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21105 === (26))){
var inst_21064 = (state_21104[(9)]);
var inst_21071 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_21064);
var state_21104__$1 = state_21104;
var statearr_21151_21206 = state_21104__$1;
(statearr_21151_21206[(2)] = inst_21071);

(statearr_21151_21206[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21105 === (16))){
var state_21104__$1 = state_21104;
var statearr_21152_21207 = state_21104__$1;
(statearr_21152_21207[(2)] = true);

(statearr_21152_21207[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21105 === (38))){
var inst_21094 = (state_21104[(2)]);
var state_21104__$1 = state_21104;
var statearr_21153_21208 = state_21104__$1;
(statearr_21153_21208[(2)] = inst_21094);

(statearr_21153_21208[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21105 === (30))){
var inst_21064 = (state_21104[(9)]);
var inst_21058 = (state_21104[(13)]);
var inst_21057 = (state_21104[(11)]);
var inst_21081 = cljs.core.empty_QMARK_.call(null,inst_21057);
var inst_21082 = inst_21058.call(null,inst_21064);
var inst_21083 = cljs.core.not.call(null,inst_21082);
var inst_21084 = (inst_21081) && (inst_21083);
var state_21104__$1 = state_21104;
var statearr_21154_21209 = state_21104__$1;
(statearr_21154_21209[(2)] = inst_21084);

(statearr_21154_21209[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21105 === (10))){
var inst_21010 = (state_21104[(8)]);
var inst_21030 = (state_21104[(2)]);
var inst_21031 = cljs.core.get.call(null,inst_21030,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_21032 = cljs.core.get.call(null,inst_21030,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_21033 = cljs.core.get.call(null,inst_21030,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_21034 = inst_21010;
var state_21104__$1 = (function (){var statearr_21155 = state_21104;
(statearr_21155[(16)] = inst_21033);

(statearr_21155[(17)] = inst_21031);

(statearr_21155[(18)] = inst_21032);

(statearr_21155[(7)] = inst_21034);

return statearr_21155;
})();
var statearr_21156_21210 = state_21104__$1;
(statearr_21156_21210[(2)] = null);

(statearr_21156_21210[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21105 === (18))){
var inst_21048 = (state_21104[(2)]);
var state_21104__$1 = state_21104;
var statearr_21157_21211 = state_21104__$1;
(statearr_21157_21211[(2)] = inst_21048);

(statearr_21157_21211[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21105 === (37))){
var state_21104__$1 = state_21104;
var statearr_21158_21212 = state_21104__$1;
(statearr_21158_21212[(2)] = null);

(statearr_21158_21212[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21105 === (8))){
var inst_21010 = (state_21104[(8)]);
var inst_21027 = cljs.core.apply.call(null,cljs.core.hash_map,inst_21010);
var state_21104__$1 = state_21104;
var statearr_21159_21213 = state_21104__$1;
(statearr_21159_21213[(2)] = inst_21027);

(statearr_21159_21213[(1)] = (10));


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
});})(c__19454__auto___21167,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__19342__auto__,c__19454__auto___21167,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__19343__auto__ = null;
var cljs$core$async$mix_$_state_machine__19343__auto____0 = (function (){
var statearr_21163 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21163[(0)] = cljs$core$async$mix_$_state_machine__19343__auto__);

(statearr_21163[(1)] = (1));

return statearr_21163;
});
var cljs$core$async$mix_$_state_machine__19343__auto____1 = (function (state_21104){
while(true){
var ret_value__19344__auto__ = (function (){try{while(true){
var result__19345__auto__ = switch__19342__auto__.call(null,state_21104);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19345__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19345__auto__;
}
break;
}
}catch (e21164){if((e21164 instanceof Object)){
var ex__19346__auto__ = e21164;
var statearr_21165_21214 = state_21104;
(statearr_21165_21214[(5)] = ex__19346__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21104);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21164;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19344__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21215 = state_21104;
state_21104 = G__21215;
continue;
} else {
return ret_value__19344__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__19343__auto__ = function(state_21104){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__19343__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__19343__auto____1.call(this,state_21104);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__19343__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__19343__auto____0;
cljs$core$async$mix_$_state_machine__19343__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__19343__auto____1;
return cljs$core$async$mix_$_state_machine__19343__auto__;
})()
;})(switch__19342__auto__,c__19454__auto___21167,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__19456__auto__ = (function (){var statearr_21166 = f__19455__auto__.call(null);
(statearr_21166[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19454__auto___21167);

return statearr_21166;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19456__auto__);
});})(c__19454__auto___21167,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var x__17474__auto__ = (((p == null))?null:p);
var m__17475__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__17474__auto__)]);
if(!((m__17475__auto__ == null))){
return m__17475__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__17475__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__17475__auto____$1 == null))){
return m__17475__auto____$1.call(null,p,v,ch,close_QMARK_);
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
var x__17474__auto__ = (((p == null))?null:p);
var m__17475__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__17474__auto__)]);
if(!((m__17475__auto__ == null))){
return m__17475__auto__.call(null,p,v,ch);
} else {
var m__17475__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__17475__auto____$1 == null))){
return m__17475__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args21216 = [];
var len__17877__auto___21219 = arguments.length;
var i__17878__auto___21220 = (0);
while(true){
if((i__17878__auto___21220 < len__17877__auto___21219)){
args21216.push((arguments[i__17878__auto___21220]));

var G__21221 = (i__17878__auto___21220 + (1));
i__17878__auto___21220 = G__21221;
continue;
} else {
}
break;
}

var G__21218 = args21216.length;
switch (G__21218) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21216.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__17474__auto__ = (((p == null))?null:p);
var m__17475__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__17474__auto__)]);
if(!((m__17475__auto__ == null))){
return m__17475__auto__.call(null,p);
} else {
var m__17475__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__17475__auto____$1 == null))){
return m__17475__auto____$1.call(null,p);
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
var x__17474__auto__ = (((p == null))?null:p);
var m__17475__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__17474__auto__)]);
if(!((m__17475__auto__ == null))){
return m__17475__auto__.call(null,p,v);
} else {
var m__17475__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__17475__auto____$1 == null))){
return m__17475__auto____$1.call(null,p,v);
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
var args21224 = [];
var len__17877__auto___21349 = arguments.length;
var i__17878__auto___21350 = (0);
while(true){
if((i__17878__auto___21350 < len__17877__auto___21349)){
args21224.push((arguments[i__17878__auto___21350]));

var G__21351 = (i__17878__auto___21350 + (1));
i__17878__auto___21350 = G__21351;
continue;
} else {
}
break;
}

var G__21226 = args21224.length;
switch (G__21226) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21224.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__16819__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__16819__auto__)){
return or__16819__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__16819__auto__,mults){
return (function (p1__21223_SHARP_){
if(cljs.core.truth_(p1__21223_SHARP_.call(null,topic))){
return p1__21223_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__21223_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__16819__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async21227 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21227 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta21228){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta21228 = meta21228;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async21227.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_21229,meta21228__$1){
var self__ = this;
var _21229__$1 = this;
return (new cljs.core.async.t_cljs$core$async21227(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta21228__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async21227.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_21229){
var self__ = this;
var _21229__$1 = this;
return self__.meta21228;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async21227.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async21227.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async21227.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async21227.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async21227.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4425__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4425__auto__)){
var m = temp__4425__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async21227.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async21227.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async21227.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta21228","meta21228",1829719054,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async21227.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21227.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21227";

cljs.core.async.t_cljs$core$async21227.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__17417__auto__,writer__17418__auto__,opt__17419__auto__){
return cljs.core._write.call(null,writer__17418__auto__,"cljs.core.async/t_cljs$core$async21227");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async21227 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async21227(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta21228){
return (new cljs.core.async.t_cljs$core$async21227(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta21228));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async21227(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__19454__auto___21353 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19454__auto___21353,mults,ensure_mult,p){
return (function (){
var f__19455__auto__ = (function (){var switch__19342__auto__ = ((function (c__19454__auto___21353,mults,ensure_mult,p){
return (function (state_21301){
var state_val_21302 = (state_21301[(1)]);
if((state_val_21302 === (7))){
var inst_21297 = (state_21301[(2)]);
var state_21301__$1 = state_21301;
var statearr_21303_21354 = state_21301__$1;
(statearr_21303_21354[(2)] = inst_21297);

(statearr_21303_21354[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21302 === (20))){
var state_21301__$1 = state_21301;
var statearr_21304_21355 = state_21301__$1;
(statearr_21304_21355[(2)] = null);

(statearr_21304_21355[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21302 === (1))){
var state_21301__$1 = state_21301;
var statearr_21305_21356 = state_21301__$1;
(statearr_21305_21356[(2)] = null);

(statearr_21305_21356[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21302 === (24))){
var inst_21280 = (state_21301[(7)]);
var inst_21289 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_21280);
var state_21301__$1 = state_21301;
var statearr_21306_21357 = state_21301__$1;
(statearr_21306_21357[(2)] = inst_21289);

(statearr_21306_21357[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21302 === (4))){
var inst_21232 = (state_21301[(8)]);
var inst_21232__$1 = (state_21301[(2)]);
var inst_21233 = (inst_21232__$1 == null);
var state_21301__$1 = (function (){var statearr_21307 = state_21301;
(statearr_21307[(8)] = inst_21232__$1);

return statearr_21307;
})();
if(cljs.core.truth_(inst_21233)){
var statearr_21308_21358 = state_21301__$1;
(statearr_21308_21358[(1)] = (5));

} else {
var statearr_21309_21359 = state_21301__$1;
(statearr_21309_21359[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21302 === (15))){
var inst_21274 = (state_21301[(2)]);
var state_21301__$1 = state_21301;
var statearr_21310_21360 = state_21301__$1;
(statearr_21310_21360[(2)] = inst_21274);

(statearr_21310_21360[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21302 === (21))){
var inst_21294 = (state_21301[(2)]);
var state_21301__$1 = (function (){var statearr_21311 = state_21301;
(statearr_21311[(9)] = inst_21294);

return statearr_21311;
})();
var statearr_21312_21361 = state_21301__$1;
(statearr_21312_21361[(2)] = null);

(statearr_21312_21361[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21302 === (13))){
var inst_21256 = (state_21301[(10)]);
var inst_21258 = cljs.core.chunked_seq_QMARK_.call(null,inst_21256);
var state_21301__$1 = state_21301;
if(inst_21258){
var statearr_21313_21362 = state_21301__$1;
(statearr_21313_21362[(1)] = (16));

} else {
var statearr_21314_21363 = state_21301__$1;
(statearr_21314_21363[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21302 === (22))){
var inst_21286 = (state_21301[(2)]);
var state_21301__$1 = state_21301;
if(cljs.core.truth_(inst_21286)){
var statearr_21315_21364 = state_21301__$1;
(statearr_21315_21364[(1)] = (23));

} else {
var statearr_21316_21365 = state_21301__$1;
(statearr_21316_21365[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21302 === (6))){
var inst_21232 = (state_21301[(8)]);
var inst_21282 = (state_21301[(11)]);
var inst_21280 = (state_21301[(7)]);
var inst_21280__$1 = topic_fn.call(null,inst_21232);
var inst_21281 = cljs.core.deref.call(null,mults);
var inst_21282__$1 = cljs.core.get.call(null,inst_21281,inst_21280__$1);
var state_21301__$1 = (function (){var statearr_21317 = state_21301;
(statearr_21317[(11)] = inst_21282__$1);

(statearr_21317[(7)] = inst_21280__$1);

return statearr_21317;
})();
if(cljs.core.truth_(inst_21282__$1)){
var statearr_21318_21366 = state_21301__$1;
(statearr_21318_21366[(1)] = (19));

} else {
var statearr_21319_21367 = state_21301__$1;
(statearr_21319_21367[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21302 === (25))){
var inst_21291 = (state_21301[(2)]);
var state_21301__$1 = state_21301;
var statearr_21320_21368 = state_21301__$1;
(statearr_21320_21368[(2)] = inst_21291);

(statearr_21320_21368[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21302 === (17))){
var inst_21256 = (state_21301[(10)]);
var inst_21265 = cljs.core.first.call(null,inst_21256);
var inst_21266 = cljs.core.async.muxch_STAR_.call(null,inst_21265);
var inst_21267 = cljs.core.async.close_BANG_.call(null,inst_21266);
var inst_21268 = cljs.core.next.call(null,inst_21256);
var inst_21242 = inst_21268;
var inst_21243 = null;
var inst_21244 = (0);
var inst_21245 = (0);
var state_21301__$1 = (function (){var statearr_21321 = state_21301;
(statearr_21321[(12)] = inst_21244);

(statearr_21321[(13)] = inst_21243);

(statearr_21321[(14)] = inst_21245);

(statearr_21321[(15)] = inst_21267);

(statearr_21321[(16)] = inst_21242);

return statearr_21321;
})();
var statearr_21322_21369 = state_21301__$1;
(statearr_21322_21369[(2)] = null);

(statearr_21322_21369[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21302 === (3))){
var inst_21299 = (state_21301[(2)]);
var state_21301__$1 = state_21301;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21301__$1,inst_21299);
} else {
if((state_val_21302 === (12))){
var inst_21276 = (state_21301[(2)]);
var state_21301__$1 = state_21301;
var statearr_21323_21370 = state_21301__$1;
(statearr_21323_21370[(2)] = inst_21276);

(statearr_21323_21370[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21302 === (2))){
var state_21301__$1 = state_21301;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21301__$1,(4),ch);
} else {
if((state_val_21302 === (23))){
var state_21301__$1 = state_21301;
var statearr_21324_21371 = state_21301__$1;
(statearr_21324_21371[(2)] = null);

(statearr_21324_21371[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21302 === (19))){
var inst_21232 = (state_21301[(8)]);
var inst_21282 = (state_21301[(11)]);
var inst_21284 = cljs.core.async.muxch_STAR_.call(null,inst_21282);
var state_21301__$1 = state_21301;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21301__$1,(22),inst_21284,inst_21232);
} else {
if((state_val_21302 === (11))){
var inst_21256 = (state_21301[(10)]);
var inst_21242 = (state_21301[(16)]);
var inst_21256__$1 = cljs.core.seq.call(null,inst_21242);
var state_21301__$1 = (function (){var statearr_21325 = state_21301;
(statearr_21325[(10)] = inst_21256__$1);

return statearr_21325;
})();
if(inst_21256__$1){
var statearr_21326_21372 = state_21301__$1;
(statearr_21326_21372[(1)] = (13));

} else {
var statearr_21327_21373 = state_21301__$1;
(statearr_21327_21373[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21302 === (9))){
var inst_21278 = (state_21301[(2)]);
var state_21301__$1 = state_21301;
var statearr_21328_21374 = state_21301__$1;
(statearr_21328_21374[(2)] = inst_21278);

(statearr_21328_21374[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21302 === (5))){
var inst_21239 = cljs.core.deref.call(null,mults);
var inst_21240 = cljs.core.vals.call(null,inst_21239);
var inst_21241 = cljs.core.seq.call(null,inst_21240);
var inst_21242 = inst_21241;
var inst_21243 = null;
var inst_21244 = (0);
var inst_21245 = (0);
var state_21301__$1 = (function (){var statearr_21329 = state_21301;
(statearr_21329[(12)] = inst_21244);

(statearr_21329[(13)] = inst_21243);

(statearr_21329[(14)] = inst_21245);

(statearr_21329[(16)] = inst_21242);

return statearr_21329;
})();
var statearr_21330_21375 = state_21301__$1;
(statearr_21330_21375[(2)] = null);

(statearr_21330_21375[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21302 === (14))){
var state_21301__$1 = state_21301;
var statearr_21334_21376 = state_21301__$1;
(statearr_21334_21376[(2)] = null);

(statearr_21334_21376[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21302 === (16))){
var inst_21256 = (state_21301[(10)]);
var inst_21260 = cljs.core.chunk_first.call(null,inst_21256);
var inst_21261 = cljs.core.chunk_rest.call(null,inst_21256);
var inst_21262 = cljs.core.count.call(null,inst_21260);
var inst_21242 = inst_21261;
var inst_21243 = inst_21260;
var inst_21244 = inst_21262;
var inst_21245 = (0);
var state_21301__$1 = (function (){var statearr_21335 = state_21301;
(statearr_21335[(12)] = inst_21244);

(statearr_21335[(13)] = inst_21243);

(statearr_21335[(14)] = inst_21245);

(statearr_21335[(16)] = inst_21242);

return statearr_21335;
})();
var statearr_21336_21377 = state_21301__$1;
(statearr_21336_21377[(2)] = null);

(statearr_21336_21377[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21302 === (10))){
var inst_21244 = (state_21301[(12)]);
var inst_21243 = (state_21301[(13)]);
var inst_21245 = (state_21301[(14)]);
var inst_21242 = (state_21301[(16)]);
var inst_21250 = cljs.core._nth.call(null,inst_21243,inst_21245);
var inst_21251 = cljs.core.async.muxch_STAR_.call(null,inst_21250);
var inst_21252 = cljs.core.async.close_BANG_.call(null,inst_21251);
var inst_21253 = (inst_21245 + (1));
var tmp21331 = inst_21244;
var tmp21332 = inst_21243;
var tmp21333 = inst_21242;
var inst_21242__$1 = tmp21333;
var inst_21243__$1 = tmp21332;
var inst_21244__$1 = tmp21331;
var inst_21245__$1 = inst_21253;
var state_21301__$1 = (function (){var statearr_21337 = state_21301;
(statearr_21337[(12)] = inst_21244__$1);

(statearr_21337[(13)] = inst_21243__$1);

(statearr_21337[(14)] = inst_21245__$1);

(statearr_21337[(17)] = inst_21252);

(statearr_21337[(16)] = inst_21242__$1);

return statearr_21337;
})();
var statearr_21338_21378 = state_21301__$1;
(statearr_21338_21378[(2)] = null);

(statearr_21338_21378[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21302 === (18))){
var inst_21271 = (state_21301[(2)]);
var state_21301__$1 = state_21301;
var statearr_21339_21379 = state_21301__$1;
(statearr_21339_21379[(2)] = inst_21271);

(statearr_21339_21379[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21302 === (8))){
var inst_21244 = (state_21301[(12)]);
var inst_21245 = (state_21301[(14)]);
var inst_21247 = (inst_21245 < inst_21244);
var inst_21248 = inst_21247;
var state_21301__$1 = state_21301;
if(cljs.core.truth_(inst_21248)){
var statearr_21340_21380 = state_21301__$1;
(statearr_21340_21380[(1)] = (10));

} else {
var statearr_21341_21381 = state_21301__$1;
(statearr_21341_21381[(1)] = (11));

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
});})(c__19454__auto___21353,mults,ensure_mult,p))
;
return ((function (switch__19342__auto__,c__19454__auto___21353,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__19343__auto__ = null;
var cljs$core$async$state_machine__19343__auto____0 = (function (){
var statearr_21345 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21345[(0)] = cljs$core$async$state_machine__19343__auto__);

(statearr_21345[(1)] = (1));

return statearr_21345;
});
var cljs$core$async$state_machine__19343__auto____1 = (function (state_21301){
while(true){
var ret_value__19344__auto__ = (function (){try{while(true){
var result__19345__auto__ = switch__19342__auto__.call(null,state_21301);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19345__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19345__auto__;
}
break;
}
}catch (e21346){if((e21346 instanceof Object)){
var ex__19346__auto__ = e21346;
var statearr_21347_21382 = state_21301;
(statearr_21347_21382[(5)] = ex__19346__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21301);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21346;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19344__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21383 = state_21301;
state_21301 = G__21383;
continue;
} else {
return ret_value__19344__auto__;
}
break;
}
});
cljs$core$async$state_machine__19343__auto__ = function(state_21301){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19343__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19343__auto____1.call(this,state_21301);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19343__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19343__auto____0;
cljs$core$async$state_machine__19343__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19343__auto____1;
return cljs$core$async$state_machine__19343__auto__;
})()
;})(switch__19342__auto__,c__19454__auto___21353,mults,ensure_mult,p))
})();
var state__19456__auto__ = (function (){var statearr_21348 = f__19455__auto__.call(null);
(statearr_21348[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19454__auto___21353);

return statearr_21348;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19456__auto__);
});})(c__19454__auto___21353,mults,ensure_mult,p))
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
var args21384 = [];
var len__17877__auto___21387 = arguments.length;
var i__17878__auto___21388 = (0);
while(true){
if((i__17878__auto___21388 < len__17877__auto___21387)){
args21384.push((arguments[i__17878__auto___21388]));

var G__21389 = (i__17878__auto___21388 + (1));
i__17878__auto___21388 = G__21389;
continue;
} else {
}
break;
}

var G__21386 = args21384.length;
switch (G__21386) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21384.length)].join('')));

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
var args21391 = [];
var len__17877__auto___21394 = arguments.length;
var i__17878__auto___21395 = (0);
while(true){
if((i__17878__auto___21395 < len__17877__auto___21394)){
args21391.push((arguments[i__17878__auto___21395]));

var G__21396 = (i__17878__auto___21395 + (1));
i__17878__auto___21395 = G__21396;
continue;
} else {
}
break;
}

var G__21393 = args21391.length;
switch (G__21393) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21391.length)].join('')));

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
var args21398 = [];
var len__17877__auto___21469 = arguments.length;
var i__17878__auto___21470 = (0);
while(true){
if((i__17878__auto___21470 < len__17877__auto___21469)){
args21398.push((arguments[i__17878__auto___21470]));

var G__21471 = (i__17878__auto___21470 + (1));
i__17878__auto___21470 = G__21471;
continue;
} else {
}
break;
}

var G__21400 = args21398.length;
switch (G__21400) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21398.length)].join('')));

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
var c__19454__auto___21473 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19454__auto___21473,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__19455__auto__ = (function (){var switch__19342__auto__ = ((function (c__19454__auto___21473,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_21439){
var state_val_21440 = (state_21439[(1)]);
if((state_val_21440 === (7))){
var state_21439__$1 = state_21439;
var statearr_21441_21474 = state_21439__$1;
(statearr_21441_21474[(2)] = null);

(statearr_21441_21474[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21440 === (1))){
var state_21439__$1 = state_21439;
var statearr_21442_21475 = state_21439__$1;
(statearr_21442_21475[(2)] = null);

(statearr_21442_21475[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21440 === (4))){
var inst_21403 = (state_21439[(7)]);
var inst_21405 = (inst_21403 < cnt);
var state_21439__$1 = state_21439;
if(cljs.core.truth_(inst_21405)){
var statearr_21443_21476 = state_21439__$1;
(statearr_21443_21476[(1)] = (6));

} else {
var statearr_21444_21477 = state_21439__$1;
(statearr_21444_21477[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21440 === (15))){
var inst_21435 = (state_21439[(2)]);
var state_21439__$1 = state_21439;
var statearr_21445_21478 = state_21439__$1;
(statearr_21445_21478[(2)] = inst_21435);

(statearr_21445_21478[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21440 === (13))){
var inst_21428 = cljs.core.async.close_BANG_.call(null,out);
var state_21439__$1 = state_21439;
var statearr_21446_21479 = state_21439__$1;
(statearr_21446_21479[(2)] = inst_21428);

(statearr_21446_21479[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21440 === (6))){
var state_21439__$1 = state_21439;
var statearr_21447_21480 = state_21439__$1;
(statearr_21447_21480[(2)] = null);

(statearr_21447_21480[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21440 === (3))){
var inst_21437 = (state_21439[(2)]);
var state_21439__$1 = state_21439;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21439__$1,inst_21437);
} else {
if((state_val_21440 === (12))){
var inst_21425 = (state_21439[(8)]);
var inst_21425__$1 = (state_21439[(2)]);
var inst_21426 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_21425__$1);
var state_21439__$1 = (function (){var statearr_21448 = state_21439;
(statearr_21448[(8)] = inst_21425__$1);

return statearr_21448;
})();
if(cljs.core.truth_(inst_21426)){
var statearr_21449_21481 = state_21439__$1;
(statearr_21449_21481[(1)] = (13));

} else {
var statearr_21450_21482 = state_21439__$1;
(statearr_21450_21482[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21440 === (2))){
var inst_21402 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_21403 = (0);
var state_21439__$1 = (function (){var statearr_21451 = state_21439;
(statearr_21451[(9)] = inst_21402);

(statearr_21451[(7)] = inst_21403);

return statearr_21451;
})();
var statearr_21452_21483 = state_21439__$1;
(statearr_21452_21483[(2)] = null);

(statearr_21452_21483[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21440 === (11))){
var inst_21403 = (state_21439[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_21439,(10),Object,null,(9));
var inst_21412 = chs__$1.call(null,inst_21403);
var inst_21413 = done.call(null,inst_21403);
var inst_21414 = cljs.core.async.take_BANG_.call(null,inst_21412,inst_21413);
var state_21439__$1 = state_21439;
var statearr_21453_21484 = state_21439__$1;
(statearr_21453_21484[(2)] = inst_21414);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21439__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21440 === (9))){
var inst_21403 = (state_21439[(7)]);
var inst_21416 = (state_21439[(2)]);
var inst_21417 = (inst_21403 + (1));
var inst_21403__$1 = inst_21417;
var state_21439__$1 = (function (){var statearr_21454 = state_21439;
(statearr_21454[(10)] = inst_21416);

(statearr_21454[(7)] = inst_21403__$1);

return statearr_21454;
})();
var statearr_21455_21485 = state_21439__$1;
(statearr_21455_21485[(2)] = null);

(statearr_21455_21485[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21440 === (5))){
var inst_21423 = (state_21439[(2)]);
var state_21439__$1 = (function (){var statearr_21456 = state_21439;
(statearr_21456[(11)] = inst_21423);

return statearr_21456;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21439__$1,(12),dchan);
} else {
if((state_val_21440 === (14))){
var inst_21425 = (state_21439[(8)]);
var inst_21430 = cljs.core.apply.call(null,f,inst_21425);
var state_21439__$1 = state_21439;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21439__$1,(16),out,inst_21430);
} else {
if((state_val_21440 === (16))){
var inst_21432 = (state_21439[(2)]);
var state_21439__$1 = (function (){var statearr_21457 = state_21439;
(statearr_21457[(12)] = inst_21432);

return statearr_21457;
})();
var statearr_21458_21486 = state_21439__$1;
(statearr_21458_21486[(2)] = null);

(statearr_21458_21486[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21440 === (10))){
var inst_21407 = (state_21439[(2)]);
var inst_21408 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_21439__$1 = (function (){var statearr_21459 = state_21439;
(statearr_21459[(13)] = inst_21407);

return statearr_21459;
})();
var statearr_21460_21487 = state_21439__$1;
(statearr_21460_21487[(2)] = inst_21408);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21439__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21440 === (8))){
var inst_21421 = (state_21439[(2)]);
var state_21439__$1 = state_21439;
var statearr_21461_21488 = state_21439__$1;
(statearr_21461_21488[(2)] = inst_21421);

(statearr_21461_21488[(1)] = (5));


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
});})(c__19454__auto___21473,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__19342__auto__,c__19454__auto___21473,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__19343__auto__ = null;
var cljs$core$async$state_machine__19343__auto____0 = (function (){
var statearr_21465 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21465[(0)] = cljs$core$async$state_machine__19343__auto__);

(statearr_21465[(1)] = (1));

return statearr_21465;
});
var cljs$core$async$state_machine__19343__auto____1 = (function (state_21439){
while(true){
var ret_value__19344__auto__ = (function (){try{while(true){
var result__19345__auto__ = switch__19342__auto__.call(null,state_21439);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19345__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19345__auto__;
}
break;
}
}catch (e21466){if((e21466 instanceof Object)){
var ex__19346__auto__ = e21466;
var statearr_21467_21489 = state_21439;
(statearr_21467_21489[(5)] = ex__19346__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21439);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21466;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19344__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21490 = state_21439;
state_21439 = G__21490;
continue;
} else {
return ret_value__19344__auto__;
}
break;
}
});
cljs$core$async$state_machine__19343__auto__ = function(state_21439){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19343__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19343__auto____1.call(this,state_21439);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19343__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19343__auto____0;
cljs$core$async$state_machine__19343__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19343__auto____1;
return cljs$core$async$state_machine__19343__auto__;
})()
;})(switch__19342__auto__,c__19454__auto___21473,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__19456__auto__ = (function (){var statearr_21468 = f__19455__auto__.call(null);
(statearr_21468[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19454__auto___21473);

return statearr_21468;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19456__auto__);
});})(c__19454__auto___21473,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args21492 = [];
var len__17877__auto___21548 = arguments.length;
var i__17878__auto___21549 = (0);
while(true){
if((i__17878__auto___21549 < len__17877__auto___21548)){
args21492.push((arguments[i__17878__auto___21549]));

var G__21550 = (i__17878__auto___21549 + (1));
i__17878__auto___21549 = G__21550;
continue;
} else {
}
break;
}

var G__21494 = args21492.length;
switch (G__21494) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21492.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19454__auto___21552 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19454__auto___21552,out){
return (function (){
var f__19455__auto__ = (function (){var switch__19342__auto__ = ((function (c__19454__auto___21552,out){
return (function (state_21524){
var state_val_21525 = (state_21524[(1)]);
if((state_val_21525 === (7))){
var inst_21503 = (state_21524[(7)]);
var inst_21504 = (state_21524[(8)]);
var inst_21503__$1 = (state_21524[(2)]);
var inst_21504__$1 = cljs.core.nth.call(null,inst_21503__$1,(0),null);
var inst_21505 = cljs.core.nth.call(null,inst_21503__$1,(1),null);
var inst_21506 = (inst_21504__$1 == null);
var state_21524__$1 = (function (){var statearr_21526 = state_21524;
(statearr_21526[(7)] = inst_21503__$1);

(statearr_21526[(9)] = inst_21505);

(statearr_21526[(8)] = inst_21504__$1);

return statearr_21526;
})();
if(cljs.core.truth_(inst_21506)){
var statearr_21527_21553 = state_21524__$1;
(statearr_21527_21553[(1)] = (8));

} else {
var statearr_21528_21554 = state_21524__$1;
(statearr_21528_21554[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21525 === (1))){
var inst_21495 = cljs.core.vec.call(null,chs);
var inst_21496 = inst_21495;
var state_21524__$1 = (function (){var statearr_21529 = state_21524;
(statearr_21529[(10)] = inst_21496);

return statearr_21529;
})();
var statearr_21530_21555 = state_21524__$1;
(statearr_21530_21555[(2)] = null);

(statearr_21530_21555[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21525 === (4))){
var inst_21496 = (state_21524[(10)]);
var state_21524__$1 = state_21524;
return cljs.core.async.ioc_alts_BANG_.call(null,state_21524__$1,(7),inst_21496);
} else {
if((state_val_21525 === (6))){
var inst_21520 = (state_21524[(2)]);
var state_21524__$1 = state_21524;
var statearr_21531_21556 = state_21524__$1;
(statearr_21531_21556[(2)] = inst_21520);

(statearr_21531_21556[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21525 === (3))){
var inst_21522 = (state_21524[(2)]);
var state_21524__$1 = state_21524;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21524__$1,inst_21522);
} else {
if((state_val_21525 === (2))){
var inst_21496 = (state_21524[(10)]);
var inst_21498 = cljs.core.count.call(null,inst_21496);
var inst_21499 = (inst_21498 > (0));
var state_21524__$1 = state_21524;
if(cljs.core.truth_(inst_21499)){
var statearr_21533_21557 = state_21524__$1;
(statearr_21533_21557[(1)] = (4));

} else {
var statearr_21534_21558 = state_21524__$1;
(statearr_21534_21558[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21525 === (11))){
var inst_21496 = (state_21524[(10)]);
var inst_21513 = (state_21524[(2)]);
var tmp21532 = inst_21496;
var inst_21496__$1 = tmp21532;
var state_21524__$1 = (function (){var statearr_21535 = state_21524;
(statearr_21535[(10)] = inst_21496__$1);

(statearr_21535[(11)] = inst_21513);

return statearr_21535;
})();
var statearr_21536_21559 = state_21524__$1;
(statearr_21536_21559[(2)] = null);

(statearr_21536_21559[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21525 === (9))){
var inst_21504 = (state_21524[(8)]);
var state_21524__$1 = state_21524;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21524__$1,(11),out,inst_21504);
} else {
if((state_val_21525 === (5))){
var inst_21518 = cljs.core.async.close_BANG_.call(null,out);
var state_21524__$1 = state_21524;
var statearr_21537_21560 = state_21524__$1;
(statearr_21537_21560[(2)] = inst_21518);

(statearr_21537_21560[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21525 === (10))){
var inst_21516 = (state_21524[(2)]);
var state_21524__$1 = state_21524;
var statearr_21538_21561 = state_21524__$1;
(statearr_21538_21561[(2)] = inst_21516);

(statearr_21538_21561[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21525 === (8))){
var inst_21496 = (state_21524[(10)]);
var inst_21503 = (state_21524[(7)]);
var inst_21505 = (state_21524[(9)]);
var inst_21504 = (state_21524[(8)]);
var inst_21508 = (function (){var cs = inst_21496;
var vec__21501 = inst_21503;
var v = inst_21504;
var c = inst_21505;
return ((function (cs,vec__21501,v,c,inst_21496,inst_21503,inst_21505,inst_21504,state_val_21525,c__19454__auto___21552,out){
return (function (p1__21491_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__21491_SHARP_);
});
;})(cs,vec__21501,v,c,inst_21496,inst_21503,inst_21505,inst_21504,state_val_21525,c__19454__auto___21552,out))
})();
var inst_21509 = cljs.core.filterv.call(null,inst_21508,inst_21496);
var inst_21496__$1 = inst_21509;
var state_21524__$1 = (function (){var statearr_21539 = state_21524;
(statearr_21539[(10)] = inst_21496__$1);

return statearr_21539;
})();
var statearr_21540_21562 = state_21524__$1;
(statearr_21540_21562[(2)] = null);

(statearr_21540_21562[(1)] = (2));


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
});})(c__19454__auto___21552,out))
;
return ((function (switch__19342__auto__,c__19454__auto___21552,out){
return (function() {
var cljs$core$async$state_machine__19343__auto__ = null;
var cljs$core$async$state_machine__19343__auto____0 = (function (){
var statearr_21544 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21544[(0)] = cljs$core$async$state_machine__19343__auto__);

(statearr_21544[(1)] = (1));

return statearr_21544;
});
var cljs$core$async$state_machine__19343__auto____1 = (function (state_21524){
while(true){
var ret_value__19344__auto__ = (function (){try{while(true){
var result__19345__auto__ = switch__19342__auto__.call(null,state_21524);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19345__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19345__auto__;
}
break;
}
}catch (e21545){if((e21545 instanceof Object)){
var ex__19346__auto__ = e21545;
var statearr_21546_21563 = state_21524;
(statearr_21546_21563[(5)] = ex__19346__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21524);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21545;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19344__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21564 = state_21524;
state_21524 = G__21564;
continue;
} else {
return ret_value__19344__auto__;
}
break;
}
});
cljs$core$async$state_machine__19343__auto__ = function(state_21524){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19343__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19343__auto____1.call(this,state_21524);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19343__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19343__auto____0;
cljs$core$async$state_machine__19343__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19343__auto____1;
return cljs$core$async$state_machine__19343__auto__;
})()
;})(switch__19342__auto__,c__19454__auto___21552,out))
})();
var state__19456__auto__ = (function (){var statearr_21547 = f__19455__auto__.call(null);
(statearr_21547[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19454__auto___21552);

return statearr_21547;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19456__auto__);
});})(c__19454__auto___21552,out))
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
var args21565 = [];
var len__17877__auto___21614 = arguments.length;
var i__17878__auto___21615 = (0);
while(true){
if((i__17878__auto___21615 < len__17877__auto___21614)){
args21565.push((arguments[i__17878__auto___21615]));

var G__21616 = (i__17878__auto___21615 + (1));
i__17878__auto___21615 = G__21616;
continue;
} else {
}
break;
}

var G__21567 = args21565.length;
switch (G__21567) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21565.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19454__auto___21618 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19454__auto___21618,out){
return (function (){
var f__19455__auto__ = (function (){var switch__19342__auto__ = ((function (c__19454__auto___21618,out){
return (function (state_21591){
var state_val_21592 = (state_21591[(1)]);
if((state_val_21592 === (7))){
var inst_21573 = (state_21591[(7)]);
var inst_21573__$1 = (state_21591[(2)]);
var inst_21574 = (inst_21573__$1 == null);
var inst_21575 = cljs.core.not.call(null,inst_21574);
var state_21591__$1 = (function (){var statearr_21593 = state_21591;
(statearr_21593[(7)] = inst_21573__$1);

return statearr_21593;
})();
if(inst_21575){
var statearr_21594_21619 = state_21591__$1;
(statearr_21594_21619[(1)] = (8));

} else {
var statearr_21595_21620 = state_21591__$1;
(statearr_21595_21620[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21592 === (1))){
var inst_21568 = (0);
var state_21591__$1 = (function (){var statearr_21596 = state_21591;
(statearr_21596[(8)] = inst_21568);

return statearr_21596;
})();
var statearr_21597_21621 = state_21591__$1;
(statearr_21597_21621[(2)] = null);

(statearr_21597_21621[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21592 === (4))){
var state_21591__$1 = state_21591;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21591__$1,(7),ch);
} else {
if((state_val_21592 === (6))){
var inst_21586 = (state_21591[(2)]);
var state_21591__$1 = state_21591;
var statearr_21598_21622 = state_21591__$1;
(statearr_21598_21622[(2)] = inst_21586);

(statearr_21598_21622[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21592 === (3))){
var inst_21588 = (state_21591[(2)]);
var inst_21589 = cljs.core.async.close_BANG_.call(null,out);
var state_21591__$1 = (function (){var statearr_21599 = state_21591;
(statearr_21599[(9)] = inst_21588);

return statearr_21599;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21591__$1,inst_21589);
} else {
if((state_val_21592 === (2))){
var inst_21568 = (state_21591[(8)]);
var inst_21570 = (inst_21568 < n);
var state_21591__$1 = state_21591;
if(cljs.core.truth_(inst_21570)){
var statearr_21600_21623 = state_21591__$1;
(statearr_21600_21623[(1)] = (4));

} else {
var statearr_21601_21624 = state_21591__$1;
(statearr_21601_21624[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21592 === (11))){
var inst_21568 = (state_21591[(8)]);
var inst_21578 = (state_21591[(2)]);
var inst_21579 = (inst_21568 + (1));
var inst_21568__$1 = inst_21579;
var state_21591__$1 = (function (){var statearr_21602 = state_21591;
(statearr_21602[(10)] = inst_21578);

(statearr_21602[(8)] = inst_21568__$1);

return statearr_21602;
})();
var statearr_21603_21625 = state_21591__$1;
(statearr_21603_21625[(2)] = null);

(statearr_21603_21625[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21592 === (9))){
var state_21591__$1 = state_21591;
var statearr_21604_21626 = state_21591__$1;
(statearr_21604_21626[(2)] = null);

(statearr_21604_21626[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21592 === (5))){
var state_21591__$1 = state_21591;
var statearr_21605_21627 = state_21591__$1;
(statearr_21605_21627[(2)] = null);

(statearr_21605_21627[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21592 === (10))){
var inst_21583 = (state_21591[(2)]);
var state_21591__$1 = state_21591;
var statearr_21606_21628 = state_21591__$1;
(statearr_21606_21628[(2)] = inst_21583);

(statearr_21606_21628[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21592 === (8))){
var inst_21573 = (state_21591[(7)]);
var state_21591__$1 = state_21591;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21591__$1,(11),out,inst_21573);
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
});})(c__19454__auto___21618,out))
;
return ((function (switch__19342__auto__,c__19454__auto___21618,out){
return (function() {
var cljs$core$async$state_machine__19343__auto__ = null;
var cljs$core$async$state_machine__19343__auto____0 = (function (){
var statearr_21610 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_21610[(0)] = cljs$core$async$state_machine__19343__auto__);

(statearr_21610[(1)] = (1));

return statearr_21610;
});
var cljs$core$async$state_machine__19343__auto____1 = (function (state_21591){
while(true){
var ret_value__19344__auto__ = (function (){try{while(true){
var result__19345__auto__ = switch__19342__auto__.call(null,state_21591);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19345__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19345__auto__;
}
break;
}
}catch (e21611){if((e21611 instanceof Object)){
var ex__19346__auto__ = e21611;
var statearr_21612_21629 = state_21591;
(statearr_21612_21629[(5)] = ex__19346__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21591);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21611;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19344__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21630 = state_21591;
state_21591 = G__21630;
continue;
} else {
return ret_value__19344__auto__;
}
break;
}
});
cljs$core$async$state_machine__19343__auto__ = function(state_21591){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19343__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19343__auto____1.call(this,state_21591);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19343__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19343__auto____0;
cljs$core$async$state_machine__19343__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19343__auto____1;
return cljs$core$async$state_machine__19343__auto__;
})()
;})(switch__19342__auto__,c__19454__auto___21618,out))
})();
var state__19456__auto__ = (function (){var statearr_21613 = f__19455__auto__.call(null);
(statearr_21613[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19454__auto___21618);

return statearr_21613;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19456__auto__);
});})(c__19454__auto___21618,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async21638 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21638 = (function (map_LT_,f,ch,meta21639){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta21639 = meta21639;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async21638.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21640,meta21639__$1){
var self__ = this;
var _21640__$1 = this;
return (new cljs.core.async.t_cljs$core$async21638(self__.map_LT_,self__.f,self__.ch,meta21639__$1));
});

cljs.core.async.t_cljs$core$async21638.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21640){
var self__ = this;
var _21640__$1 = this;
return self__.meta21639;
});

cljs.core.async.t_cljs$core$async21638.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async21638.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async21638.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async21638.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async21638.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async21641 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21641 = (function (map_LT_,f,ch,meta21639,_,fn1,meta21642){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta21639 = meta21639;
this._ = _;
this.fn1 = fn1;
this.meta21642 = meta21642;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async21641.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_21643,meta21642__$1){
var self__ = this;
var _21643__$1 = this;
return (new cljs.core.async.t_cljs$core$async21641(self__.map_LT_,self__.f,self__.ch,self__.meta21639,self__._,self__.fn1,meta21642__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async21641.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_21643){
var self__ = this;
var _21643__$1 = this;
return self__.meta21642;
});})(___$1))
;

cljs.core.async.t_cljs$core$async21641.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async21641.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async21641.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async21641.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__21631_SHARP_){
return f1.call(null,(((p1__21631_SHARP_ == null))?null:self__.f.call(null,p1__21631_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async21641.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta21639","meta21639",-641218662,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async21638","cljs.core.async/t_cljs$core$async21638",-658451900,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta21642","meta21642",1500275684,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async21641.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21641.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21641";

cljs.core.async.t_cljs$core$async21641.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__17417__auto__,writer__17418__auto__,opt__17419__auto__){
return cljs.core._write.call(null,writer__17418__auto__,"cljs.core.async/t_cljs$core$async21641");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async21641 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async21641(map_LT___$1,f__$1,ch__$1,meta21639__$1,___$2,fn1__$1,meta21642){
return (new cljs.core.async.t_cljs$core$async21641(map_LT___$1,f__$1,ch__$1,meta21639__$1,___$2,fn1__$1,meta21642));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async21641(self__.map_LT_,self__.f,self__.ch,self__.meta21639,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__16807__auto__ = ret;
if(cljs.core.truth_(and__16807__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__16807__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async21638.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async21638.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async21638.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta21639","meta21639",-641218662,null)], null);
});

cljs.core.async.t_cljs$core$async21638.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21638.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21638";

cljs.core.async.t_cljs$core$async21638.cljs$lang$ctorPrWriter = (function (this__17417__auto__,writer__17418__auto__,opt__17419__auto__){
return cljs.core._write.call(null,writer__17418__auto__,"cljs.core.async/t_cljs$core$async21638");
});

cljs.core.async.__GT_t_cljs$core$async21638 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async21638(map_LT___$1,f__$1,ch__$1,meta21639){
return (new cljs.core.async.t_cljs$core$async21638(map_LT___$1,f__$1,ch__$1,meta21639));
});

}

return (new cljs.core.async.t_cljs$core$async21638(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async21647 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21647 = (function (map_GT_,f,ch,meta21648){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta21648 = meta21648;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async21647.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21649,meta21648__$1){
var self__ = this;
var _21649__$1 = this;
return (new cljs.core.async.t_cljs$core$async21647(self__.map_GT_,self__.f,self__.ch,meta21648__$1));
});

cljs.core.async.t_cljs$core$async21647.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21649){
var self__ = this;
var _21649__$1 = this;
return self__.meta21648;
});

cljs.core.async.t_cljs$core$async21647.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async21647.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async21647.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async21647.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async21647.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async21647.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async21647.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta21648","meta21648",-2013638574,null)], null);
});

cljs.core.async.t_cljs$core$async21647.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21647.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21647";

cljs.core.async.t_cljs$core$async21647.cljs$lang$ctorPrWriter = (function (this__17417__auto__,writer__17418__auto__,opt__17419__auto__){
return cljs.core._write.call(null,writer__17418__auto__,"cljs.core.async/t_cljs$core$async21647");
});

cljs.core.async.__GT_t_cljs$core$async21647 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async21647(map_GT___$1,f__$1,ch__$1,meta21648){
return (new cljs.core.async.t_cljs$core$async21647(map_GT___$1,f__$1,ch__$1,meta21648));
});

}

return (new cljs.core.async.t_cljs$core$async21647(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async21653 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21653 = (function (filter_GT_,p,ch,meta21654){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta21654 = meta21654;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async21653.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21655,meta21654__$1){
var self__ = this;
var _21655__$1 = this;
return (new cljs.core.async.t_cljs$core$async21653(self__.filter_GT_,self__.p,self__.ch,meta21654__$1));
});

cljs.core.async.t_cljs$core$async21653.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21655){
var self__ = this;
var _21655__$1 = this;
return self__.meta21654;
});

cljs.core.async.t_cljs$core$async21653.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async21653.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async21653.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async21653.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async21653.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async21653.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async21653.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async21653.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta21654","meta21654",-1837564344,null)], null);
});

cljs.core.async.t_cljs$core$async21653.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21653.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21653";

cljs.core.async.t_cljs$core$async21653.cljs$lang$ctorPrWriter = (function (this__17417__auto__,writer__17418__auto__,opt__17419__auto__){
return cljs.core._write.call(null,writer__17418__auto__,"cljs.core.async/t_cljs$core$async21653");
});

cljs.core.async.__GT_t_cljs$core$async21653 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async21653(filter_GT___$1,p__$1,ch__$1,meta21654){
return (new cljs.core.async.t_cljs$core$async21653(filter_GT___$1,p__$1,ch__$1,meta21654));
});

}

return (new cljs.core.async.t_cljs$core$async21653(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args21656 = [];
var len__17877__auto___21700 = arguments.length;
var i__17878__auto___21701 = (0);
while(true){
if((i__17878__auto___21701 < len__17877__auto___21700)){
args21656.push((arguments[i__17878__auto___21701]));

var G__21702 = (i__17878__auto___21701 + (1));
i__17878__auto___21701 = G__21702;
continue;
} else {
}
break;
}

var G__21658 = args21656.length;
switch (G__21658) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21656.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19454__auto___21704 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19454__auto___21704,out){
return (function (){
var f__19455__auto__ = (function (){var switch__19342__auto__ = ((function (c__19454__auto___21704,out){
return (function (state_21679){
var state_val_21680 = (state_21679[(1)]);
if((state_val_21680 === (7))){
var inst_21675 = (state_21679[(2)]);
var state_21679__$1 = state_21679;
var statearr_21681_21705 = state_21679__$1;
(statearr_21681_21705[(2)] = inst_21675);

(statearr_21681_21705[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21680 === (1))){
var state_21679__$1 = state_21679;
var statearr_21682_21706 = state_21679__$1;
(statearr_21682_21706[(2)] = null);

(statearr_21682_21706[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21680 === (4))){
var inst_21661 = (state_21679[(7)]);
var inst_21661__$1 = (state_21679[(2)]);
var inst_21662 = (inst_21661__$1 == null);
var state_21679__$1 = (function (){var statearr_21683 = state_21679;
(statearr_21683[(7)] = inst_21661__$1);

return statearr_21683;
})();
if(cljs.core.truth_(inst_21662)){
var statearr_21684_21707 = state_21679__$1;
(statearr_21684_21707[(1)] = (5));

} else {
var statearr_21685_21708 = state_21679__$1;
(statearr_21685_21708[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21680 === (6))){
var inst_21661 = (state_21679[(7)]);
var inst_21666 = p.call(null,inst_21661);
var state_21679__$1 = state_21679;
if(cljs.core.truth_(inst_21666)){
var statearr_21686_21709 = state_21679__$1;
(statearr_21686_21709[(1)] = (8));

} else {
var statearr_21687_21710 = state_21679__$1;
(statearr_21687_21710[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21680 === (3))){
var inst_21677 = (state_21679[(2)]);
var state_21679__$1 = state_21679;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21679__$1,inst_21677);
} else {
if((state_val_21680 === (2))){
var state_21679__$1 = state_21679;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21679__$1,(4),ch);
} else {
if((state_val_21680 === (11))){
var inst_21669 = (state_21679[(2)]);
var state_21679__$1 = state_21679;
var statearr_21688_21711 = state_21679__$1;
(statearr_21688_21711[(2)] = inst_21669);

(statearr_21688_21711[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21680 === (9))){
var state_21679__$1 = state_21679;
var statearr_21689_21712 = state_21679__$1;
(statearr_21689_21712[(2)] = null);

(statearr_21689_21712[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21680 === (5))){
var inst_21664 = cljs.core.async.close_BANG_.call(null,out);
var state_21679__$1 = state_21679;
var statearr_21690_21713 = state_21679__$1;
(statearr_21690_21713[(2)] = inst_21664);

(statearr_21690_21713[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21680 === (10))){
var inst_21672 = (state_21679[(2)]);
var state_21679__$1 = (function (){var statearr_21691 = state_21679;
(statearr_21691[(8)] = inst_21672);

return statearr_21691;
})();
var statearr_21692_21714 = state_21679__$1;
(statearr_21692_21714[(2)] = null);

(statearr_21692_21714[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21680 === (8))){
var inst_21661 = (state_21679[(7)]);
var state_21679__$1 = state_21679;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21679__$1,(11),out,inst_21661);
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
});})(c__19454__auto___21704,out))
;
return ((function (switch__19342__auto__,c__19454__auto___21704,out){
return (function() {
var cljs$core$async$state_machine__19343__auto__ = null;
var cljs$core$async$state_machine__19343__auto____0 = (function (){
var statearr_21696 = [null,null,null,null,null,null,null,null,null];
(statearr_21696[(0)] = cljs$core$async$state_machine__19343__auto__);

(statearr_21696[(1)] = (1));

return statearr_21696;
});
var cljs$core$async$state_machine__19343__auto____1 = (function (state_21679){
while(true){
var ret_value__19344__auto__ = (function (){try{while(true){
var result__19345__auto__ = switch__19342__auto__.call(null,state_21679);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19345__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19345__auto__;
}
break;
}
}catch (e21697){if((e21697 instanceof Object)){
var ex__19346__auto__ = e21697;
var statearr_21698_21715 = state_21679;
(statearr_21698_21715[(5)] = ex__19346__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21679);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21697;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19344__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21716 = state_21679;
state_21679 = G__21716;
continue;
} else {
return ret_value__19344__auto__;
}
break;
}
});
cljs$core$async$state_machine__19343__auto__ = function(state_21679){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19343__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19343__auto____1.call(this,state_21679);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19343__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19343__auto____0;
cljs$core$async$state_machine__19343__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19343__auto____1;
return cljs$core$async$state_machine__19343__auto__;
})()
;})(switch__19342__auto__,c__19454__auto___21704,out))
})();
var state__19456__auto__ = (function (){var statearr_21699 = f__19455__auto__.call(null);
(statearr_21699[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19454__auto___21704);

return statearr_21699;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19456__auto__);
});})(c__19454__auto___21704,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args21717 = [];
var len__17877__auto___21720 = arguments.length;
var i__17878__auto___21721 = (0);
while(true){
if((i__17878__auto___21721 < len__17877__auto___21720)){
args21717.push((arguments[i__17878__auto___21721]));

var G__21722 = (i__17878__auto___21721 + (1));
i__17878__auto___21721 = G__21722;
continue;
} else {
}
break;
}

var G__21719 = args21717.length;
switch (G__21719) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21717.length)].join('')));

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
var c__19454__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19454__auto__){
return (function (){
var f__19455__auto__ = (function (){var switch__19342__auto__ = ((function (c__19454__auto__){
return (function (state_21889){
var state_val_21890 = (state_21889[(1)]);
if((state_val_21890 === (7))){
var inst_21885 = (state_21889[(2)]);
var state_21889__$1 = state_21889;
var statearr_21891_21932 = state_21889__$1;
(statearr_21891_21932[(2)] = inst_21885);

(statearr_21891_21932[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21890 === (20))){
var inst_21855 = (state_21889[(7)]);
var inst_21866 = (state_21889[(2)]);
var inst_21867 = cljs.core.next.call(null,inst_21855);
var inst_21841 = inst_21867;
var inst_21842 = null;
var inst_21843 = (0);
var inst_21844 = (0);
var state_21889__$1 = (function (){var statearr_21892 = state_21889;
(statearr_21892[(8)] = inst_21866);

(statearr_21892[(9)] = inst_21842);

(statearr_21892[(10)] = inst_21841);

(statearr_21892[(11)] = inst_21844);

(statearr_21892[(12)] = inst_21843);

return statearr_21892;
})();
var statearr_21893_21933 = state_21889__$1;
(statearr_21893_21933[(2)] = null);

(statearr_21893_21933[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21890 === (1))){
var state_21889__$1 = state_21889;
var statearr_21894_21934 = state_21889__$1;
(statearr_21894_21934[(2)] = null);

(statearr_21894_21934[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21890 === (4))){
var inst_21830 = (state_21889[(13)]);
var inst_21830__$1 = (state_21889[(2)]);
var inst_21831 = (inst_21830__$1 == null);
var state_21889__$1 = (function (){var statearr_21895 = state_21889;
(statearr_21895[(13)] = inst_21830__$1);

return statearr_21895;
})();
if(cljs.core.truth_(inst_21831)){
var statearr_21896_21935 = state_21889__$1;
(statearr_21896_21935[(1)] = (5));

} else {
var statearr_21897_21936 = state_21889__$1;
(statearr_21897_21936[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21890 === (15))){
var state_21889__$1 = state_21889;
var statearr_21901_21937 = state_21889__$1;
(statearr_21901_21937[(2)] = null);

(statearr_21901_21937[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21890 === (21))){
var state_21889__$1 = state_21889;
var statearr_21902_21938 = state_21889__$1;
(statearr_21902_21938[(2)] = null);

(statearr_21902_21938[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21890 === (13))){
var inst_21842 = (state_21889[(9)]);
var inst_21841 = (state_21889[(10)]);
var inst_21844 = (state_21889[(11)]);
var inst_21843 = (state_21889[(12)]);
var inst_21851 = (state_21889[(2)]);
var inst_21852 = (inst_21844 + (1));
var tmp21898 = inst_21842;
var tmp21899 = inst_21841;
var tmp21900 = inst_21843;
var inst_21841__$1 = tmp21899;
var inst_21842__$1 = tmp21898;
var inst_21843__$1 = tmp21900;
var inst_21844__$1 = inst_21852;
var state_21889__$1 = (function (){var statearr_21903 = state_21889;
(statearr_21903[(14)] = inst_21851);

(statearr_21903[(9)] = inst_21842__$1);

(statearr_21903[(10)] = inst_21841__$1);

(statearr_21903[(11)] = inst_21844__$1);

(statearr_21903[(12)] = inst_21843__$1);

return statearr_21903;
})();
var statearr_21904_21939 = state_21889__$1;
(statearr_21904_21939[(2)] = null);

(statearr_21904_21939[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21890 === (22))){
var state_21889__$1 = state_21889;
var statearr_21905_21940 = state_21889__$1;
(statearr_21905_21940[(2)] = null);

(statearr_21905_21940[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21890 === (6))){
var inst_21830 = (state_21889[(13)]);
var inst_21839 = f.call(null,inst_21830);
var inst_21840 = cljs.core.seq.call(null,inst_21839);
var inst_21841 = inst_21840;
var inst_21842 = null;
var inst_21843 = (0);
var inst_21844 = (0);
var state_21889__$1 = (function (){var statearr_21906 = state_21889;
(statearr_21906[(9)] = inst_21842);

(statearr_21906[(10)] = inst_21841);

(statearr_21906[(11)] = inst_21844);

(statearr_21906[(12)] = inst_21843);

return statearr_21906;
})();
var statearr_21907_21941 = state_21889__$1;
(statearr_21907_21941[(2)] = null);

(statearr_21907_21941[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21890 === (17))){
var inst_21855 = (state_21889[(7)]);
var inst_21859 = cljs.core.chunk_first.call(null,inst_21855);
var inst_21860 = cljs.core.chunk_rest.call(null,inst_21855);
var inst_21861 = cljs.core.count.call(null,inst_21859);
var inst_21841 = inst_21860;
var inst_21842 = inst_21859;
var inst_21843 = inst_21861;
var inst_21844 = (0);
var state_21889__$1 = (function (){var statearr_21908 = state_21889;
(statearr_21908[(9)] = inst_21842);

(statearr_21908[(10)] = inst_21841);

(statearr_21908[(11)] = inst_21844);

(statearr_21908[(12)] = inst_21843);

return statearr_21908;
})();
var statearr_21909_21942 = state_21889__$1;
(statearr_21909_21942[(2)] = null);

(statearr_21909_21942[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21890 === (3))){
var inst_21887 = (state_21889[(2)]);
var state_21889__$1 = state_21889;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21889__$1,inst_21887);
} else {
if((state_val_21890 === (12))){
var inst_21875 = (state_21889[(2)]);
var state_21889__$1 = state_21889;
var statearr_21910_21943 = state_21889__$1;
(statearr_21910_21943[(2)] = inst_21875);

(statearr_21910_21943[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21890 === (2))){
var state_21889__$1 = state_21889;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21889__$1,(4),in$);
} else {
if((state_val_21890 === (23))){
var inst_21883 = (state_21889[(2)]);
var state_21889__$1 = state_21889;
var statearr_21911_21944 = state_21889__$1;
(statearr_21911_21944[(2)] = inst_21883);

(statearr_21911_21944[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21890 === (19))){
var inst_21870 = (state_21889[(2)]);
var state_21889__$1 = state_21889;
var statearr_21912_21945 = state_21889__$1;
(statearr_21912_21945[(2)] = inst_21870);

(statearr_21912_21945[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21890 === (11))){
var inst_21841 = (state_21889[(10)]);
var inst_21855 = (state_21889[(7)]);
var inst_21855__$1 = cljs.core.seq.call(null,inst_21841);
var state_21889__$1 = (function (){var statearr_21913 = state_21889;
(statearr_21913[(7)] = inst_21855__$1);

return statearr_21913;
})();
if(inst_21855__$1){
var statearr_21914_21946 = state_21889__$1;
(statearr_21914_21946[(1)] = (14));

} else {
var statearr_21915_21947 = state_21889__$1;
(statearr_21915_21947[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21890 === (9))){
var inst_21877 = (state_21889[(2)]);
var inst_21878 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_21889__$1 = (function (){var statearr_21916 = state_21889;
(statearr_21916[(15)] = inst_21877);

return statearr_21916;
})();
if(cljs.core.truth_(inst_21878)){
var statearr_21917_21948 = state_21889__$1;
(statearr_21917_21948[(1)] = (21));

} else {
var statearr_21918_21949 = state_21889__$1;
(statearr_21918_21949[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21890 === (5))){
var inst_21833 = cljs.core.async.close_BANG_.call(null,out);
var state_21889__$1 = state_21889;
var statearr_21919_21950 = state_21889__$1;
(statearr_21919_21950[(2)] = inst_21833);

(statearr_21919_21950[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21890 === (14))){
var inst_21855 = (state_21889[(7)]);
var inst_21857 = cljs.core.chunked_seq_QMARK_.call(null,inst_21855);
var state_21889__$1 = state_21889;
if(inst_21857){
var statearr_21920_21951 = state_21889__$1;
(statearr_21920_21951[(1)] = (17));

} else {
var statearr_21921_21952 = state_21889__$1;
(statearr_21921_21952[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21890 === (16))){
var inst_21873 = (state_21889[(2)]);
var state_21889__$1 = state_21889;
var statearr_21922_21953 = state_21889__$1;
(statearr_21922_21953[(2)] = inst_21873);

(statearr_21922_21953[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21890 === (10))){
var inst_21842 = (state_21889[(9)]);
var inst_21844 = (state_21889[(11)]);
var inst_21849 = cljs.core._nth.call(null,inst_21842,inst_21844);
var state_21889__$1 = state_21889;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21889__$1,(13),out,inst_21849);
} else {
if((state_val_21890 === (18))){
var inst_21855 = (state_21889[(7)]);
var inst_21864 = cljs.core.first.call(null,inst_21855);
var state_21889__$1 = state_21889;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21889__$1,(20),out,inst_21864);
} else {
if((state_val_21890 === (8))){
var inst_21844 = (state_21889[(11)]);
var inst_21843 = (state_21889[(12)]);
var inst_21846 = (inst_21844 < inst_21843);
var inst_21847 = inst_21846;
var state_21889__$1 = state_21889;
if(cljs.core.truth_(inst_21847)){
var statearr_21923_21954 = state_21889__$1;
(statearr_21923_21954[(1)] = (10));

} else {
var statearr_21924_21955 = state_21889__$1;
(statearr_21924_21955[(1)] = (11));

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
});})(c__19454__auto__))
;
return ((function (switch__19342__auto__,c__19454__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__19343__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__19343__auto____0 = (function (){
var statearr_21928 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21928[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__19343__auto__);

(statearr_21928[(1)] = (1));

return statearr_21928;
});
var cljs$core$async$mapcat_STAR__$_state_machine__19343__auto____1 = (function (state_21889){
while(true){
var ret_value__19344__auto__ = (function (){try{while(true){
var result__19345__auto__ = switch__19342__auto__.call(null,state_21889);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19345__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19345__auto__;
}
break;
}
}catch (e21929){if((e21929 instanceof Object)){
var ex__19346__auto__ = e21929;
var statearr_21930_21956 = state_21889;
(statearr_21930_21956[(5)] = ex__19346__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21889);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21929;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19344__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21957 = state_21889;
state_21889 = G__21957;
continue;
} else {
return ret_value__19344__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__19343__auto__ = function(state_21889){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__19343__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__19343__auto____1.call(this,state_21889);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__19343__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__19343__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__19343__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__19343__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__19343__auto__;
})()
;})(switch__19342__auto__,c__19454__auto__))
})();
var state__19456__auto__ = (function (){var statearr_21931 = f__19455__auto__.call(null);
(statearr_21931[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19454__auto__);

return statearr_21931;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19456__auto__);
});})(c__19454__auto__))
);

return c__19454__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args21958 = [];
var len__17877__auto___21961 = arguments.length;
var i__17878__auto___21962 = (0);
while(true){
if((i__17878__auto___21962 < len__17877__auto___21961)){
args21958.push((arguments[i__17878__auto___21962]));

var G__21963 = (i__17878__auto___21962 + (1));
i__17878__auto___21962 = G__21963;
continue;
} else {
}
break;
}

var G__21960 = args21958.length;
switch (G__21960) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21958.length)].join('')));

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
var args21965 = [];
var len__17877__auto___21968 = arguments.length;
var i__17878__auto___21969 = (0);
while(true){
if((i__17878__auto___21969 < len__17877__auto___21968)){
args21965.push((arguments[i__17878__auto___21969]));

var G__21970 = (i__17878__auto___21969 + (1));
i__17878__auto___21969 = G__21970;
continue;
} else {
}
break;
}

var G__21967 = args21965.length;
switch (G__21967) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21965.length)].join('')));

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
var args21972 = [];
var len__17877__auto___22023 = arguments.length;
var i__17878__auto___22024 = (0);
while(true){
if((i__17878__auto___22024 < len__17877__auto___22023)){
args21972.push((arguments[i__17878__auto___22024]));

var G__22025 = (i__17878__auto___22024 + (1));
i__17878__auto___22024 = G__22025;
continue;
} else {
}
break;
}

var G__21974 = args21972.length;
switch (G__21974) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21972.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19454__auto___22027 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19454__auto___22027,out){
return (function (){
var f__19455__auto__ = (function (){var switch__19342__auto__ = ((function (c__19454__auto___22027,out){
return (function (state_21998){
var state_val_21999 = (state_21998[(1)]);
if((state_val_21999 === (7))){
var inst_21993 = (state_21998[(2)]);
var state_21998__$1 = state_21998;
var statearr_22000_22028 = state_21998__$1;
(statearr_22000_22028[(2)] = inst_21993);

(statearr_22000_22028[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21999 === (1))){
var inst_21975 = null;
var state_21998__$1 = (function (){var statearr_22001 = state_21998;
(statearr_22001[(7)] = inst_21975);

return statearr_22001;
})();
var statearr_22002_22029 = state_21998__$1;
(statearr_22002_22029[(2)] = null);

(statearr_22002_22029[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21999 === (4))){
var inst_21978 = (state_21998[(8)]);
var inst_21978__$1 = (state_21998[(2)]);
var inst_21979 = (inst_21978__$1 == null);
var inst_21980 = cljs.core.not.call(null,inst_21979);
var state_21998__$1 = (function (){var statearr_22003 = state_21998;
(statearr_22003[(8)] = inst_21978__$1);

return statearr_22003;
})();
if(inst_21980){
var statearr_22004_22030 = state_21998__$1;
(statearr_22004_22030[(1)] = (5));

} else {
var statearr_22005_22031 = state_21998__$1;
(statearr_22005_22031[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21999 === (6))){
var state_21998__$1 = state_21998;
var statearr_22006_22032 = state_21998__$1;
(statearr_22006_22032[(2)] = null);

(statearr_22006_22032[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21999 === (3))){
var inst_21995 = (state_21998[(2)]);
var inst_21996 = cljs.core.async.close_BANG_.call(null,out);
var state_21998__$1 = (function (){var statearr_22007 = state_21998;
(statearr_22007[(9)] = inst_21995);

return statearr_22007;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21998__$1,inst_21996);
} else {
if((state_val_21999 === (2))){
var state_21998__$1 = state_21998;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21998__$1,(4),ch);
} else {
if((state_val_21999 === (11))){
var inst_21978 = (state_21998[(8)]);
var inst_21987 = (state_21998[(2)]);
var inst_21975 = inst_21978;
var state_21998__$1 = (function (){var statearr_22008 = state_21998;
(statearr_22008[(7)] = inst_21975);

(statearr_22008[(10)] = inst_21987);

return statearr_22008;
})();
var statearr_22009_22033 = state_21998__$1;
(statearr_22009_22033[(2)] = null);

(statearr_22009_22033[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21999 === (9))){
var inst_21978 = (state_21998[(8)]);
var state_21998__$1 = state_21998;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21998__$1,(11),out,inst_21978);
} else {
if((state_val_21999 === (5))){
var inst_21978 = (state_21998[(8)]);
var inst_21975 = (state_21998[(7)]);
var inst_21982 = cljs.core._EQ_.call(null,inst_21978,inst_21975);
var state_21998__$1 = state_21998;
if(inst_21982){
var statearr_22011_22034 = state_21998__$1;
(statearr_22011_22034[(1)] = (8));

} else {
var statearr_22012_22035 = state_21998__$1;
(statearr_22012_22035[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21999 === (10))){
var inst_21990 = (state_21998[(2)]);
var state_21998__$1 = state_21998;
var statearr_22013_22036 = state_21998__$1;
(statearr_22013_22036[(2)] = inst_21990);

(statearr_22013_22036[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21999 === (8))){
var inst_21975 = (state_21998[(7)]);
var tmp22010 = inst_21975;
var inst_21975__$1 = tmp22010;
var state_21998__$1 = (function (){var statearr_22014 = state_21998;
(statearr_22014[(7)] = inst_21975__$1);

return statearr_22014;
})();
var statearr_22015_22037 = state_21998__$1;
(statearr_22015_22037[(2)] = null);

(statearr_22015_22037[(1)] = (2));


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
});})(c__19454__auto___22027,out))
;
return ((function (switch__19342__auto__,c__19454__auto___22027,out){
return (function() {
var cljs$core$async$state_machine__19343__auto__ = null;
var cljs$core$async$state_machine__19343__auto____0 = (function (){
var statearr_22019 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_22019[(0)] = cljs$core$async$state_machine__19343__auto__);

(statearr_22019[(1)] = (1));

return statearr_22019;
});
var cljs$core$async$state_machine__19343__auto____1 = (function (state_21998){
while(true){
var ret_value__19344__auto__ = (function (){try{while(true){
var result__19345__auto__ = switch__19342__auto__.call(null,state_21998);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19345__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19345__auto__;
}
break;
}
}catch (e22020){if((e22020 instanceof Object)){
var ex__19346__auto__ = e22020;
var statearr_22021_22038 = state_21998;
(statearr_22021_22038[(5)] = ex__19346__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21998);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22020;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19344__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22039 = state_21998;
state_21998 = G__22039;
continue;
} else {
return ret_value__19344__auto__;
}
break;
}
});
cljs$core$async$state_machine__19343__auto__ = function(state_21998){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19343__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19343__auto____1.call(this,state_21998);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19343__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19343__auto____0;
cljs$core$async$state_machine__19343__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19343__auto____1;
return cljs$core$async$state_machine__19343__auto__;
})()
;})(switch__19342__auto__,c__19454__auto___22027,out))
})();
var state__19456__auto__ = (function (){var statearr_22022 = f__19455__auto__.call(null);
(statearr_22022[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19454__auto___22027);

return statearr_22022;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19456__auto__);
});})(c__19454__auto___22027,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args22040 = [];
var len__17877__auto___22110 = arguments.length;
var i__17878__auto___22111 = (0);
while(true){
if((i__17878__auto___22111 < len__17877__auto___22110)){
args22040.push((arguments[i__17878__auto___22111]));

var G__22112 = (i__17878__auto___22111 + (1));
i__17878__auto___22111 = G__22112;
continue;
} else {
}
break;
}

var G__22042 = args22040.length;
switch (G__22042) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22040.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19454__auto___22114 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19454__auto___22114,out){
return (function (){
var f__19455__auto__ = (function (){var switch__19342__auto__ = ((function (c__19454__auto___22114,out){
return (function (state_22080){
var state_val_22081 = (state_22080[(1)]);
if((state_val_22081 === (7))){
var inst_22076 = (state_22080[(2)]);
var state_22080__$1 = state_22080;
var statearr_22082_22115 = state_22080__$1;
(statearr_22082_22115[(2)] = inst_22076);

(statearr_22082_22115[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22081 === (1))){
var inst_22043 = (new Array(n));
var inst_22044 = inst_22043;
var inst_22045 = (0);
var state_22080__$1 = (function (){var statearr_22083 = state_22080;
(statearr_22083[(7)] = inst_22044);

(statearr_22083[(8)] = inst_22045);

return statearr_22083;
})();
var statearr_22084_22116 = state_22080__$1;
(statearr_22084_22116[(2)] = null);

(statearr_22084_22116[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22081 === (4))){
var inst_22048 = (state_22080[(9)]);
var inst_22048__$1 = (state_22080[(2)]);
var inst_22049 = (inst_22048__$1 == null);
var inst_22050 = cljs.core.not.call(null,inst_22049);
var state_22080__$1 = (function (){var statearr_22085 = state_22080;
(statearr_22085[(9)] = inst_22048__$1);

return statearr_22085;
})();
if(inst_22050){
var statearr_22086_22117 = state_22080__$1;
(statearr_22086_22117[(1)] = (5));

} else {
var statearr_22087_22118 = state_22080__$1;
(statearr_22087_22118[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22081 === (15))){
var inst_22070 = (state_22080[(2)]);
var state_22080__$1 = state_22080;
var statearr_22088_22119 = state_22080__$1;
(statearr_22088_22119[(2)] = inst_22070);

(statearr_22088_22119[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22081 === (13))){
var state_22080__$1 = state_22080;
var statearr_22089_22120 = state_22080__$1;
(statearr_22089_22120[(2)] = null);

(statearr_22089_22120[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22081 === (6))){
var inst_22045 = (state_22080[(8)]);
var inst_22066 = (inst_22045 > (0));
var state_22080__$1 = state_22080;
if(cljs.core.truth_(inst_22066)){
var statearr_22090_22121 = state_22080__$1;
(statearr_22090_22121[(1)] = (12));

} else {
var statearr_22091_22122 = state_22080__$1;
(statearr_22091_22122[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22081 === (3))){
var inst_22078 = (state_22080[(2)]);
var state_22080__$1 = state_22080;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22080__$1,inst_22078);
} else {
if((state_val_22081 === (12))){
var inst_22044 = (state_22080[(7)]);
var inst_22068 = cljs.core.vec.call(null,inst_22044);
var state_22080__$1 = state_22080;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22080__$1,(15),out,inst_22068);
} else {
if((state_val_22081 === (2))){
var state_22080__$1 = state_22080;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22080__$1,(4),ch);
} else {
if((state_val_22081 === (11))){
var inst_22060 = (state_22080[(2)]);
var inst_22061 = (new Array(n));
var inst_22044 = inst_22061;
var inst_22045 = (0);
var state_22080__$1 = (function (){var statearr_22092 = state_22080;
(statearr_22092[(10)] = inst_22060);

(statearr_22092[(7)] = inst_22044);

(statearr_22092[(8)] = inst_22045);

return statearr_22092;
})();
var statearr_22093_22123 = state_22080__$1;
(statearr_22093_22123[(2)] = null);

(statearr_22093_22123[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22081 === (9))){
var inst_22044 = (state_22080[(7)]);
var inst_22058 = cljs.core.vec.call(null,inst_22044);
var state_22080__$1 = state_22080;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22080__$1,(11),out,inst_22058);
} else {
if((state_val_22081 === (5))){
var inst_22053 = (state_22080[(11)]);
var inst_22044 = (state_22080[(7)]);
var inst_22048 = (state_22080[(9)]);
var inst_22045 = (state_22080[(8)]);
var inst_22052 = (inst_22044[inst_22045] = inst_22048);
var inst_22053__$1 = (inst_22045 + (1));
var inst_22054 = (inst_22053__$1 < n);
var state_22080__$1 = (function (){var statearr_22094 = state_22080;
(statearr_22094[(11)] = inst_22053__$1);

(statearr_22094[(12)] = inst_22052);

return statearr_22094;
})();
if(cljs.core.truth_(inst_22054)){
var statearr_22095_22124 = state_22080__$1;
(statearr_22095_22124[(1)] = (8));

} else {
var statearr_22096_22125 = state_22080__$1;
(statearr_22096_22125[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22081 === (14))){
var inst_22073 = (state_22080[(2)]);
var inst_22074 = cljs.core.async.close_BANG_.call(null,out);
var state_22080__$1 = (function (){var statearr_22098 = state_22080;
(statearr_22098[(13)] = inst_22073);

return statearr_22098;
})();
var statearr_22099_22126 = state_22080__$1;
(statearr_22099_22126[(2)] = inst_22074);

(statearr_22099_22126[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22081 === (10))){
var inst_22064 = (state_22080[(2)]);
var state_22080__$1 = state_22080;
var statearr_22100_22127 = state_22080__$1;
(statearr_22100_22127[(2)] = inst_22064);

(statearr_22100_22127[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22081 === (8))){
var inst_22053 = (state_22080[(11)]);
var inst_22044 = (state_22080[(7)]);
var tmp22097 = inst_22044;
var inst_22044__$1 = tmp22097;
var inst_22045 = inst_22053;
var state_22080__$1 = (function (){var statearr_22101 = state_22080;
(statearr_22101[(7)] = inst_22044__$1);

(statearr_22101[(8)] = inst_22045);

return statearr_22101;
})();
var statearr_22102_22128 = state_22080__$1;
(statearr_22102_22128[(2)] = null);

(statearr_22102_22128[(1)] = (2));


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
});})(c__19454__auto___22114,out))
;
return ((function (switch__19342__auto__,c__19454__auto___22114,out){
return (function() {
var cljs$core$async$state_machine__19343__auto__ = null;
var cljs$core$async$state_machine__19343__auto____0 = (function (){
var statearr_22106 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22106[(0)] = cljs$core$async$state_machine__19343__auto__);

(statearr_22106[(1)] = (1));

return statearr_22106;
});
var cljs$core$async$state_machine__19343__auto____1 = (function (state_22080){
while(true){
var ret_value__19344__auto__ = (function (){try{while(true){
var result__19345__auto__ = switch__19342__auto__.call(null,state_22080);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19345__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19345__auto__;
}
break;
}
}catch (e22107){if((e22107 instanceof Object)){
var ex__19346__auto__ = e22107;
var statearr_22108_22129 = state_22080;
(statearr_22108_22129[(5)] = ex__19346__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22080);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22107;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19344__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22130 = state_22080;
state_22080 = G__22130;
continue;
} else {
return ret_value__19344__auto__;
}
break;
}
});
cljs$core$async$state_machine__19343__auto__ = function(state_22080){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19343__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19343__auto____1.call(this,state_22080);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19343__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19343__auto____0;
cljs$core$async$state_machine__19343__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19343__auto____1;
return cljs$core$async$state_machine__19343__auto__;
})()
;})(switch__19342__auto__,c__19454__auto___22114,out))
})();
var state__19456__auto__ = (function (){var statearr_22109 = f__19455__auto__.call(null);
(statearr_22109[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19454__auto___22114);

return statearr_22109;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19456__auto__);
});})(c__19454__auto___22114,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args22131 = [];
var len__17877__auto___22205 = arguments.length;
var i__17878__auto___22206 = (0);
while(true){
if((i__17878__auto___22206 < len__17877__auto___22205)){
args22131.push((arguments[i__17878__auto___22206]));

var G__22207 = (i__17878__auto___22206 + (1));
i__17878__auto___22206 = G__22207;
continue;
} else {
}
break;
}

var G__22133 = args22131.length;
switch (G__22133) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22131.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19454__auto___22209 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19454__auto___22209,out){
return (function (){
var f__19455__auto__ = (function (){var switch__19342__auto__ = ((function (c__19454__auto___22209,out){
return (function (state_22175){
var state_val_22176 = (state_22175[(1)]);
if((state_val_22176 === (7))){
var inst_22171 = (state_22175[(2)]);
var state_22175__$1 = state_22175;
var statearr_22177_22210 = state_22175__$1;
(statearr_22177_22210[(2)] = inst_22171);

(statearr_22177_22210[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22176 === (1))){
var inst_22134 = [];
var inst_22135 = inst_22134;
var inst_22136 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_22175__$1 = (function (){var statearr_22178 = state_22175;
(statearr_22178[(7)] = inst_22135);

(statearr_22178[(8)] = inst_22136);

return statearr_22178;
})();
var statearr_22179_22211 = state_22175__$1;
(statearr_22179_22211[(2)] = null);

(statearr_22179_22211[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22176 === (4))){
var inst_22139 = (state_22175[(9)]);
var inst_22139__$1 = (state_22175[(2)]);
var inst_22140 = (inst_22139__$1 == null);
var inst_22141 = cljs.core.not.call(null,inst_22140);
var state_22175__$1 = (function (){var statearr_22180 = state_22175;
(statearr_22180[(9)] = inst_22139__$1);

return statearr_22180;
})();
if(inst_22141){
var statearr_22181_22212 = state_22175__$1;
(statearr_22181_22212[(1)] = (5));

} else {
var statearr_22182_22213 = state_22175__$1;
(statearr_22182_22213[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22176 === (15))){
var inst_22165 = (state_22175[(2)]);
var state_22175__$1 = state_22175;
var statearr_22183_22214 = state_22175__$1;
(statearr_22183_22214[(2)] = inst_22165);

(statearr_22183_22214[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22176 === (13))){
var state_22175__$1 = state_22175;
var statearr_22184_22215 = state_22175__$1;
(statearr_22184_22215[(2)] = null);

(statearr_22184_22215[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22176 === (6))){
var inst_22135 = (state_22175[(7)]);
var inst_22160 = inst_22135.length;
var inst_22161 = (inst_22160 > (0));
var state_22175__$1 = state_22175;
if(cljs.core.truth_(inst_22161)){
var statearr_22185_22216 = state_22175__$1;
(statearr_22185_22216[(1)] = (12));

} else {
var statearr_22186_22217 = state_22175__$1;
(statearr_22186_22217[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22176 === (3))){
var inst_22173 = (state_22175[(2)]);
var state_22175__$1 = state_22175;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22175__$1,inst_22173);
} else {
if((state_val_22176 === (12))){
var inst_22135 = (state_22175[(7)]);
var inst_22163 = cljs.core.vec.call(null,inst_22135);
var state_22175__$1 = state_22175;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22175__$1,(15),out,inst_22163);
} else {
if((state_val_22176 === (2))){
var state_22175__$1 = state_22175;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22175__$1,(4),ch);
} else {
if((state_val_22176 === (11))){
var inst_22143 = (state_22175[(10)]);
var inst_22139 = (state_22175[(9)]);
var inst_22153 = (state_22175[(2)]);
var inst_22154 = [];
var inst_22155 = inst_22154.push(inst_22139);
var inst_22135 = inst_22154;
var inst_22136 = inst_22143;
var state_22175__$1 = (function (){var statearr_22187 = state_22175;
(statearr_22187[(7)] = inst_22135);

(statearr_22187[(11)] = inst_22155);

(statearr_22187[(8)] = inst_22136);

(statearr_22187[(12)] = inst_22153);

return statearr_22187;
})();
var statearr_22188_22218 = state_22175__$1;
(statearr_22188_22218[(2)] = null);

(statearr_22188_22218[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22176 === (9))){
var inst_22135 = (state_22175[(7)]);
var inst_22151 = cljs.core.vec.call(null,inst_22135);
var state_22175__$1 = state_22175;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22175__$1,(11),out,inst_22151);
} else {
if((state_val_22176 === (5))){
var inst_22143 = (state_22175[(10)]);
var inst_22136 = (state_22175[(8)]);
var inst_22139 = (state_22175[(9)]);
var inst_22143__$1 = f.call(null,inst_22139);
var inst_22144 = cljs.core._EQ_.call(null,inst_22143__$1,inst_22136);
var inst_22145 = cljs.core.keyword_identical_QMARK_.call(null,inst_22136,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_22146 = (inst_22144) || (inst_22145);
var state_22175__$1 = (function (){var statearr_22189 = state_22175;
(statearr_22189[(10)] = inst_22143__$1);

return statearr_22189;
})();
if(cljs.core.truth_(inst_22146)){
var statearr_22190_22219 = state_22175__$1;
(statearr_22190_22219[(1)] = (8));

} else {
var statearr_22191_22220 = state_22175__$1;
(statearr_22191_22220[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22176 === (14))){
var inst_22168 = (state_22175[(2)]);
var inst_22169 = cljs.core.async.close_BANG_.call(null,out);
var state_22175__$1 = (function (){var statearr_22193 = state_22175;
(statearr_22193[(13)] = inst_22168);

return statearr_22193;
})();
var statearr_22194_22221 = state_22175__$1;
(statearr_22194_22221[(2)] = inst_22169);

(statearr_22194_22221[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22176 === (10))){
var inst_22158 = (state_22175[(2)]);
var state_22175__$1 = state_22175;
var statearr_22195_22222 = state_22175__$1;
(statearr_22195_22222[(2)] = inst_22158);

(statearr_22195_22222[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22176 === (8))){
var inst_22143 = (state_22175[(10)]);
var inst_22135 = (state_22175[(7)]);
var inst_22139 = (state_22175[(9)]);
var inst_22148 = inst_22135.push(inst_22139);
var tmp22192 = inst_22135;
var inst_22135__$1 = tmp22192;
var inst_22136 = inst_22143;
var state_22175__$1 = (function (){var statearr_22196 = state_22175;
(statearr_22196[(7)] = inst_22135__$1);

(statearr_22196[(14)] = inst_22148);

(statearr_22196[(8)] = inst_22136);

return statearr_22196;
})();
var statearr_22197_22223 = state_22175__$1;
(statearr_22197_22223[(2)] = null);

(statearr_22197_22223[(1)] = (2));


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
});})(c__19454__auto___22209,out))
;
return ((function (switch__19342__auto__,c__19454__auto___22209,out){
return (function() {
var cljs$core$async$state_machine__19343__auto__ = null;
var cljs$core$async$state_machine__19343__auto____0 = (function (){
var statearr_22201 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22201[(0)] = cljs$core$async$state_machine__19343__auto__);

(statearr_22201[(1)] = (1));

return statearr_22201;
});
var cljs$core$async$state_machine__19343__auto____1 = (function (state_22175){
while(true){
var ret_value__19344__auto__ = (function (){try{while(true){
var result__19345__auto__ = switch__19342__auto__.call(null,state_22175);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19345__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19345__auto__;
}
break;
}
}catch (e22202){if((e22202 instanceof Object)){
var ex__19346__auto__ = e22202;
var statearr_22203_22224 = state_22175;
(statearr_22203_22224[(5)] = ex__19346__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22175);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22202;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19344__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22225 = state_22175;
state_22175 = G__22225;
continue;
} else {
return ret_value__19344__auto__;
}
break;
}
});
cljs$core$async$state_machine__19343__auto__ = function(state_22175){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19343__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19343__auto____1.call(this,state_22175);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19343__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19343__auto____0;
cljs$core$async$state_machine__19343__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19343__auto____1;
return cljs$core$async$state_machine__19343__auto__;
})()
;})(switch__19342__auto__,c__19454__auto___22209,out))
})();
var state__19456__auto__ = (function (){var statearr_22204 = f__19455__auto__.call(null);
(statearr_22204[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19454__auto___22209);

return statearr_22204;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19456__auto__);
});})(c__19454__auto___22209,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map?rel=1459482112820