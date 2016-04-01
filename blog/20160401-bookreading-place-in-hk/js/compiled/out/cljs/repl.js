// Compiled by ClojureScript 1.7.170 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4425__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4425__auto__)){
var ns = temp__4425__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__23372_23386 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__23373_23387 = null;
var count__23374_23388 = (0);
var i__23375_23389 = (0);
while(true){
if((i__23375_23389 < count__23374_23388)){
var f_23390 = cljs.core._nth.call(null,chunk__23373_23387,i__23375_23389);
cljs.core.println.call(null,"  ",f_23390);

var G__23391 = seq__23372_23386;
var G__23392 = chunk__23373_23387;
var G__23393 = count__23374_23388;
var G__23394 = (i__23375_23389 + (1));
seq__23372_23386 = G__23391;
chunk__23373_23387 = G__23392;
count__23374_23388 = G__23393;
i__23375_23389 = G__23394;
continue;
} else {
var temp__4425__auto___23395 = cljs.core.seq.call(null,seq__23372_23386);
if(temp__4425__auto___23395){
var seq__23372_23396__$1 = temp__4425__auto___23395;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23372_23396__$1)){
var c__17622__auto___23397 = cljs.core.chunk_first.call(null,seq__23372_23396__$1);
var G__23398 = cljs.core.chunk_rest.call(null,seq__23372_23396__$1);
var G__23399 = c__17622__auto___23397;
var G__23400 = cljs.core.count.call(null,c__17622__auto___23397);
var G__23401 = (0);
seq__23372_23386 = G__23398;
chunk__23373_23387 = G__23399;
count__23374_23388 = G__23400;
i__23375_23389 = G__23401;
continue;
} else {
var f_23402 = cljs.core.first.call(null,seq__23372_23396__$1);
cljs.core.println.call(null,"  ",f_23402);

var G__23403 = cljs.core.next.call(null,seq__23372_23396__$1);
var G__23404 = null;
var G__23405 = (0);
var G__23406 = (0);
seq__23372_23386 = G__23403;
chunk__23373_23387 = G__23404;
count__23374_23388 = G__23405;
i__23375_23389 = G__23406;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_23407 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__16819__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__16819__auto__)){
return or__16819__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_23407);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_23407)))?cljs.core.second.call(null,arglists_23407):arglists_23407));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
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
var seq__23376 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__23377 = null;
var count__23378 = (0);
var i__23379 = (0);
while(true){
if((i__23379 < count__23378)){
var vec__23380 = cljs.core._nth.call(null,chunk__23377,i__23379);
var name = cljs.core.nth.call(null,vec__23380,(0),null);
var map__23381 = cljs.core.nth.call(null,vec__23380,(1),null);
var map__23381__$1 = ((((!((map__23381 == null)))?((((map__23381.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23381.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23381):map__23381);
var doc = cljs.core.get.call(null,map__23381__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__23381__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__23408 = seq__23376;
var G__23409 = chunk__23377;
var G__23410 = count__23378;
var G__23411 = (i__23379 + (1));
seq__23376 = G__23408;
chunk__23377 = G__23409;
count__23378 = G__23410;
i__23379 = G__23411;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__23376);
if(temp__4425__auto__){
var seq__23376__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23376__$1)){
var c__17622__auto__ = cljs.core.chunk_first.call(null,seq__23376__$1);
var G__23412 = cljs.core.chunk_rest.call(null,seq__23376__$1);
var G__23413 = c__17622__auto__;
var G__23414 = cljs.core.count.call(null,c__17622__auto__);
var G__23415 = (0);
seq__23376 = G__23412;
chunk__23377 = G__23413;
count__23378 = G__23414;
i__23379 = G__23415;
continue;
} else {
var vec__23383 = cljs.core.first.call(null,seq__23376__$1);
var name = cljs.core.nth.call(null,vec__23383,(0),null);
var map__23384 = cljs.core.nth.call(null,vec__23383,(1),null);
var map__23384__$1 = ((((!((map__23384 == null)))?((((map__23384.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23384.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23384):map__23384);
var doc = cljs.core.get.call(null,map__23384__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__23384__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__23416 = cljs.core.next.call(null,seq__23376__$1);
var G__23417 = null;
var G__23418 = (0);
var G__23419 = (0);
seq__23376 = G__23416;
chunk__23377 = G__23417;
count__23378 = G__23418;
i__23379 = G__23419;
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
}
});

//# sourceMappingURL=repl.js.map?rel=1459482113808