// Compiled by ClojureScript 1.7.170 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.Uri');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
figwheel.client.file_reloading.queued_file_reload;
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__16819__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__16819__auto__){
return or__16819__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.fix_node_request_url = (function figwheel$client$file_reloading$fix_node_request_url(url){

if(cljs.core.truth_(goog.string.startsWith(url,"../"))){
return clojure.string.replace.call(null,url,"../","");
} else {
return [cljs.core.str("goog/"),cljs.core.str(url)].join('');
}
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__16819__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__16819__auto__)){
return or__16819__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__22348_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__22348_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([name], true));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([parent_ns], true));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__22353 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__22354 = null;
var count__22355 = (0);
var i__22356 = (0);
while(true){
if((i__22356 < count__22355)){
var n = cljs.core._nth.call(null,chunk__22354,i__22356);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__22357 = seq__22353;
var G__22358 = chunk__22354;
var G__22359 = count__22355;
var G__22360 = (i__22356 + (1));
seq__22353 = G__22357;
chunk__22354 = G__22358;
count__22355 = G__22359;
i__22356 = G__22360;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__22353);
if(temp__4425__auto__){
var seq__22353__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22353__$1)){
var c__17622__auto__ = cljs.core.chunk_first.call(null,seq__22353__$1);
var G__22361 = cljs.core.chunk_rest.call(null,seq__22353__$1);
var G__22362 = c__17622__auto__;
var G__22363 = cljs.core.count.call(null,c__17622__auto__);
var G__22364 = (0);
seq__22353 = G__22361;
chunk__22354 = G__22362;
count__22355 = G__22363;
i__22356 = G__22364;
continue;
} else {
var n = cljs.core.first.call(null,seq__22353__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__22365 = cljs.core.next.call(null,seq__22353__$1);
var G__22366 = null;
var G__22367 = (0);
var G__22368 = (0);
seq__22353 = G__22365;
chunk__22354 = G__22366;
count__22355 = G__22367;
i__22356 = G__22368;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__22407_22414 = cljs.core.seq.call(null,deps);
var chunk__22408_22415 = null;
var count__22409_22416 = (0);
var i__22410_22417 = (0);
while(true){
if((i__22410_22417 < count__22409_22416)){
var dep_22418 = cljs.core._nth.call(null,chunk__22408_22415,i__22410_22417);
topo_sort_helper_STAR_.call(null,dep_22418,(depth + (1)),state);

var G__22419 = seq__22407_22414;
var G__22420 = chunk__22408_22415;
var G__22421 = count__22409_22416;
var G__22422 = (i__22410_22417 + (1));
seq__22407_22414 = G__22419;
chunk__22408_22415 = G__22420;
count__22409_22416 = G__22421;
i__22410_22417 = G__22422;
continue;
} else {
var temp__4425__auto___22423 = cljs.core.seq.call(null,seq__22407_22414);
if(temp__4425__auto___22423){
var seq__22407_22424__$1 = temp__4425__auto___22423;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22407_22424__$1)){
var c__17622__auto___22425 = cljs.core.chunk_first.call(null,seq__22407_22424__$1);
var G__22426 = cljs.core.chunk_rest.call(null,seq__22407_22424__$1);
var G__22427 = c__17622__auto___22425;
var G__22428 = cljs.core.count.call(null,c__17622__auto___22425);
var G__22429 = (0);
seq__22407_22414 = G__22426;
chunk__22408_22415 = G__22427;
count__22409_22416 = G__22428;
i__22410_22417 = G__22429;
continue;
} else {
var dep_22430 = cljs.core.first.call(null,seq__22407_22424__$1);
topo_sort_helper_STAR_.call(null,dep_22430,(depth + (1)),state);

var G__22431 = cljs.core.next.call(null,seq__22407_22424__$1);
var G__22432 = null;
var G__22433 = (0);
var G__22434 = (0);
seq__22407_22414 = G__22431;
chunk__22408_22415 = G__22432;
count__22409_22416 = G__22433;
i__22410_22417 = G__22434;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__22411){
var vec__22413 = p__22411;
var x = cljs.core.nth.call(null,vec__22413,(0),null);
var xs = cljs.core.nthnext.call(null,vec__22413,(1));
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__22413,x,xs,get_deps__$1){
return (function (p1__22369_SHARP_){
return clojure.set.difference.call(null,p1__22369_SHARP_,x);
});})(vec__22413,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str(goog.basePath),cljs.core.str(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str(goog.basePath),cljs.core.str(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__22447 = cljs.core.seq.call(null,provides);
var chunk__22448 = null;
var count__22449 = (0);
var i__22450 = (0);
while(true){
if((i__22450 < count__22449)){
var prov = cljs.core._nth.call(null,chunk__22448,i__22450);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__22451_22459 = cljs.core.seq.call(null,requires);
var chunk__22452_22460 = null;
var count__22453_22461 = (0);
var i__22454_22462 = (0);
while(true){
if((i__22454_22462 < count__22453_22461)){
var req_22463 = cljs.core._nth.call(null,chunk__22452_22460,i__22454_22462);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_22463,prov);

var G__22464 = seq__22451_22459;
var G__22465 = chunk__22452_22460;
var G__22466 = count__22453_22461;
var G__22467 = (i__22454_22462 + (1));
seq__22451_22459 = G__22464;
chunk__22452_22460 = G__22465;
count__22453_22461 = G__22466;
i__22454_22462 = G__22467;
continue;
} else {
var temp__4425__auto___22468 = cljs.core.seq.call(null,seq__22451_22459);
if(temp__4425__auto___22468){
var seq__22451_22469__$1 = temp__4425__auto___22468;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22451_22469__$1)){
var c__17622__auto___22470 = cljs.core.chunk_first.call(null,seq__22451_22469__$1);
var G__22471 = cljs.core.chunk_rest.call(null,seq__22451_22469__$1);
var G__22472 = c__17622__auto___22470;
var G__22473 = cljs.core.count.call(null,c__17622__auto___22470);
var G__22474 = (0);
seq__22451_22459 = G__22471;
chunk__22452_22460 = G__22472;
count__22453_22461 = G__22473;
i__22454_22462 = G__22474;
continue;
} else {
var req_22475 = cljs.core.first.call(null,seq__22451_22469__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_22475,prov);

var G__22476 = cljs.core.next.call(null,seq__22451_22469__$1);
var G__22477 = null;
var G__22478 = (0);
var G__22479 = (0);
seq__22451_22459 = G__22476;
chunk__22452_22460 = G__22477;
count__22453_22461 = G__22478;
i__22454_22462 = G__22479;
continue;
}
} else {
}
}
break;
}

var G__22480 = seq__22447;
var G__22481 = chunk__22448;
var G__22482 = count__22449;
var G__22483 = (i__22450 + (1));
seq__22447 = G__22480;
chunk__22448 = G__22481;
count__22449 = G__22482;
i__22450 = G__22483;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__22447);
if(temp__4425__auto__){
var seq__22447__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22447__$1)){
var c__17622__auto__ = cljs.core.chunk_first.call(null,seq__22447__$1);
var G__22484 = cljs.core.chunk_rest.call(null,seq__22447__$1);
var G__22485 = c__17622__auto__;
var G__22486 = cljs.core.count.call(null,c__17622__auto__);
var G__22487 = (0);
seq__22447 = G__22484;
chunk__22448 = G__22485;
count__22449 = G__22486;
i__22450 = G__22487;
continue;
} else {
var prov = cljs.core.first.call(null,seq__22447__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__22455_22488 = cljs.core.seq.call(null,requires);
var chunk__22456_22489 = null;
var count__22457_22490 = (0);
var i__22458_22491 = (0);
while(true){
if((i__22458_22491 < count__22457_22490)){
var req_22492 = cljs.core._nth.call(null,chunk__22456_22489,i__22458_22491);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_22492,prov);

var G__22493 = seq__22455_22488;
var G__22494 = chunk__22456_22489;
var G__22495 = count__22457_22490;
var G__22496 = (i__22458_22491 + (1));
seq__22455_22488 = G__22493;
chunk__22456_22489 = G__22494;
count__22457_22490 = G__22495;
i__22458_22491 = G__22496;
continue;
} else {
var temp__4425__auto___22497__$1 = cljs.core.seq.call(null,seq__22455_22488);
if(temp__4425__auto___22497__$1){
var seq__22455_22498__$1 = temp__4425__auto___22497__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22455_22498__$1)){
var c__17622__auto___22499 = cljs.core.chunk_first.call(null,seq__22455_22498__$1);
var G__22500 = cljs.core.chunk_rest.call(null,seq__22455_22498__$1);
var G__22501 = c__17622__auto___22499;
var G__22502 = cljs.core.count.call(null,c__17622__auto___22499);
var G__22503 = (0);
seq__22455_22488 = G__22500;
chunk__22456_22489 = G__22501;
count__22457_22490 = G__22502;
i__22458_22491 = G__22503;
continue;
} else {
var req_22504 = cljs.core.first.call(null,seq__22455_22498__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_22504,prov);

var G__22505 = cljs.core.next.call(null,seq__22455_22498__$1);
var G__22506 = null;
var G__22507 = (0);
var G__22508 = (0);
seq__22455_22488 = G__22505;
chunk__22456_22489 = G__22506;
count__22457_22490 = G__22507;
i__22458_22491 = G__22508;
continue;
}
} else {
}
}
break;
}

var G__22509 = cljs.core.next.call(null,seq__22447__$1);
var G__22510 = null;
var G__22511 = (0);
var G__22512 = (0);
seq__22447 = G__22509;
chunk__22448 = G__22510;
count__22449 = G__22511;
i__22450 = G__22512;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel$client$file_reloading$figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__22517_22521 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__22518_22522 = null;
var count__22519_22523 = (0);
var i__22520_22524 = (0);
while(true){
if((i__22520_22524 < count__22519_22523)){
var ns_22525 = cljs.core._nth.call(null,chunk__22518_22522,i__22520_22524);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_22525);

var G__22526 = seq__22517_22521;
var G__22527 = chunk__22518_22522;
var G__22528 = count__22519_22523;
var G__22529 = (i__22520_22524 + (1));
seq__22517_22521 = G__22526;
chunk__22518_22522 = G__22527;
count__22519_22523 = G__22528;
i__22520_22524 = G__22529;
continue;
} else {
var temp__4425__auto___22530 = cljs.core.seq.call(null,seq__22517_22521);
if(temp__4425__auto___22530){
var seq__22517_22531__$1 = temp__4425__auto___22530;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22517_22531__$1)){
var c__17622__auto___22532 = cljs.core.chunk_first.call(null,seq__22517_22531__$1);
var G__22533 = cljs.core.chunk_rest.call(null,seq__22517_22531__$1);
var G__22534 = c__17622__auto___22532;
var G__22535 = cljs.core.count.call(null,c__17622__auto___22532);
var G__22536 = (0);
seq__22517_22521 = G__22533;
chunk__22518_22522 = G__22534;
count__22519_22523 = G__22535;
i__22520_22524 = G__22536;
continue;
} else {
var ns_22537 = cljs.core.first.call(null,seq__22517_22531__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_22537);

var G__22538 = cljs.core.next.call(null,seq__22517_22531__$1);
var G__22539 = null;
var G__22540 = (0);
var G__22541 = (0);
seq__22517_22521 = G__22538;
chunk__22518_22522 = G__22539;
count__22519_22523 = G__22540;
i__22520_22524 = G__22541;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__16819__auto__ = goog.require__;
if(cljs.core.truth_(or__16819__auto__)){
return or__16819__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__22542__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__22542 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22543__i = 0, G__22543__a = new Array(arguments.length -  0);
while (G__22543__i < G__22543__a.length) {G__22543__a[G__22543__i] = arguments[G__22543__i + 0]; ++G__22543__i;}
  args = new cljs.core.IndexedSeq(G__22543__a,0);
} 
return G__22542__delegate.call(this,args);};
G__22542.cljs$lang$maxFixedArity = 0;
G__22542.cljs$lang$applyTo = (function (arglist__22544){
var args = cljs.core.seq(arglist__22544);
return G__22542__delegate(args);
});
G__22542.cljs$core$IFn$_invoke$arity$variadic = G__22542__delegate;
return G__22542;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
;
}
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__22546 = cljs.core._EQ_;
var expr__22547 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__22546.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__22547))){
var path_parts = ((function (pred__22546,expr__22547){
return (function (p1__22545_SHARP_){
return clojure.string.split.call(null,p1__22545_SHARP_,/[\/\\]/);
});})(pred__22546,expr__22547))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__22546,expr__22547){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e22549){if((e22549 instanceof Error)){
var e = e22549;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e22549;

}
}})());
});
;})(path_parts,sep,root,pred__22546,expr__22547))
} else {
if(cljs.core.truth_(pred__22546.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__22547))){
return ((function (pred__22546,expr__22547){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred,pred__22546,expr__22547){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__22546,expr__22547))
);

return deferred.addErrback(((function (deferred,pred__22546,expr__22547){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__22546,expr__22547))
);
});
;})(pred__22546,expr__22547))
} else {
return ((function (pred__22546,expr__22547){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__22546,expr__22547))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__22550,callback){
var map__22553 = p__22550;
var map__22553__$1 = ((((!((map__22553 == null)))?((((map__22553.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22553.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22553):map__22553);
var file_msg = map__22553__$1;
var request_url = cljs.core.get.call(null,map__22553__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__22553,map__22553__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__22553,map__22553__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__19454__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19454__auto__){
return (function (){
var f__19455__auto__ = (function (){var switch__19342__auto__ = ((function (c__19454__auto__){
return (function (state_22577){
var state_val_22578 = (state_22577[(1)]);
if((state_val_22578 === (7))){
var inst_22573 = (state_22577[(2)]);
var state_22577__$1 = state_22577;
var statearr_22579_22599 = state_22577__$1;
(statearr_22579_22599[(2)] = inst_22573);

(statearr_22579_22599[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22578 === (1))){
var state_22577__$1 = state_22577;
var statearr_22580_22600 = state_22577__$1;
(statearr_22580_22600[(2)] = null);

(statearr_22580_22600[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22578 === (4))){
var inst_22557 = (state_22577[(7)]);
var inst_22557__$1 = (state_22577[(2)]);
var state_22577__$1 = (function (){var statearr_22581 = state_22577;
(statearr_22581[(7)] = inst_22557__$1);

return statearr_22581;
})();
if(cljs.core.truth_(inst_22557__$1)){
var statearr_22582_22601 = state_22577__$1;
(statearr_22582_22601[(1)] = (5));

} else {
var statearr_22583_22602 = state_22577__$1;
(statearr_22583_22602[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22578 === (6))){
var state_22577__$1 = state_22577;
var statearr_22584_22603 = state_22577__$1;
(statearr_22584_22603[(2)] = null);

(statearr_22584_22603[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22578 === (3))){
var inst_22575 = (state_22577[(2)]);
var state_22577__$1 = state_22577;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22577__$1,inst_22575);
} else {
if((state_val_22578 === (2))){
var state_22577__$1 = state_22577;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22577__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_22578 === (11))){
var inst_22569 = (state_22577[(2)]);
var state_22577__$1 = (function (){var statearr_22585 = state_22577;
(statearr_22585[(8)] = inst_22569);

return statearr_22585;
})();
var statearr_22586_22604 = state_22577__$1;
(statearr_22586_22604[(2)] = null);

(statearr_22586_22604[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22578 === (9))){
var inst_22563 = (state_22577[(9)]);
var inst_22561 = (state_22577[(10)]);
var inst_22565 = inst_22563.call(null,inst_22561);
var state_22577__$1 = state_22577;
var statearr_22587_22605 = state_22577__$1;
(statearr_22587_22605[(2)] = inst_22565);

(statearr_22587_22605[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22578 === (5))){
var inst_22557 = (state_22577[(7)]);
var inst_22559 = figwheel.client.file_reloading.blocking_load.call(null,inst_22557);
var state_22577__$1 = state_22577;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22577__$1,(8),inst_22559);
} else {
if((state_val_22578 === (10))){
var inst_22561 = (state_22577[(10)]);
var inst_22567 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_22561);
var state_22577__$1 = state_22577;
var statearr_22588_22606 = state_22577__$1;
(statearr_22588_22606[(2)] = inst_22567);

(statearr_22588_22606[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22578 === (8))){
var inst_22563 = (state_22577[(9)]);
var inst_22557 = (state_22577[(7)]);
var inst_22561 = (state_22577[(2)]);
var inst_22562 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_22563__$1 = cljs.core.get.call(null,inst_22562,inst_22557);
var state_22577__$1 = (function (){var statearr_22589 = state_22577;
(statearr_22589[(9)] = inst_22563__$1);

(statearr_22589[(10)] = inst_22561);

return statearr_22589;
})();
if(cljs.core.truth_(inst_22563__$1)){
var statearr_22590_22607 = state_22577__$1;
(statearr_22590_22607[(1)] = (9));

} else {
var statearr_22591_22608 = state_22577__$1;
(statearr_22591_22608[(1)] = (10));

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
});})(c__19454__auto__))
;
return ((function (switch__19342__auto__,c__19454__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__19343__auto__ = null;
var figwheel$client$file_reloading$state_machine__19343__auto____0 = (function (){
var statearr_22595 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_22595[(0)] = figwheel$client$file_reloading$state_machine__19343__auto__);

(statearr_22595[(1)] = (1));

return statearr_22595;
});
var figwheel$client$file_reloading$state_machine__19343__auto____1 = (function (state_22577){
while(true){
var ret_value__19344__auto__ = (function (){try{while(true){
var result__19345__auto__ = switch__19342__auto__.call(null,state_22577);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19345__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19345__auto__;
}
break;
}
}catch (e22596){if((e22596 instanceof Object)){
var ex__19346__auto__ = e22596;
var statearr_22597_22609 = state_22577;
(statearr_22597_22609[(5)] = ex__19346__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22577);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22596;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19344__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22610 = state_22577;
state_22577 = G__22610;
continue;
} else {
return ret_value__19344__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__19343__auto__ = function(state_22577){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__19343__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__19343__auto____1.call(this,state_22577);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__19343__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__19343__auto____0;
figwheel$client$file_reloading$state_machine__19343__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__19343__auto____1;
return figwheel$client$file_reloading$state_machine__19343__auto__;
})()
;})(switch__19342__auto__,c__19454__auto__))
})();
var state__19456__auto__ = (function (){var statearr_22598 = f__19455__auto__.call(null);
(statearr_22598[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19454__auto__);

return statearr_22598;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19456__auto__);
});})(c__19454__auto__))
);

return c__19454__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__22611,callback){
var map__22614 = p__22611;
var map__22614__$1 = ((((!((map__22614 == null)))?((((map__22614.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22614.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22614):map__22614);
var file_msg = map__22614__$1;
var namespace = cljs.core.get.call(null,map__22614__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__22614,map__22614__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__22614,map__22614__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__22616){
var map__22619 = p__22616;
var map__22619__$1 = ((((!((map__22619 == null)))?((((map__22619.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22619.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22619):map__22619);
var file_msg = map__22619__$1;
var namespace = cljs.core.get.call(null,map__22619__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__16807__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__16807__auto__){
var or__16819__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__16819__auto__)){
return or__16819__auto__;
} else {
var or__16819__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__16819__auto____$1)){
return or__16819__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__16807__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__22621,callback){
var map__22624 = p__22621;
var map__22624__$1 = ((((!((map__22624 == null)))?((((map__22624.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22624.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22624):map__22624);
var file_msg = map__22624__$1;
var request_url = cljs.core.get.call(null,map__22624__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__22624__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__19454__auto___22712 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19454__auto___22712,out){
return (function (){
var f__19455__auto__ = (function (){var switch__19342__auto__ = ((function (c__19454__auto___22712,out){
return (function (state_22694){
var state_val_22695 = (state_22694[(1)]);
if((state_val_22695 === (1))){
var inst_22672 = cljs.core.nth.call(null,files,(0),null);
var inst_22673 = cljs.core.nthnext.call(null,files,(1));
var inst_22674 = files;
var state_22694__$1 = (function (){var statearr_22696 = state_22694;
(statearr_22696[(7)] = inst_22672);

(statearr_22696[(8)] = inst_22673);

(statearr_22696[(9)] = inst_22674);

return statearr_22696;
})();
var statearr_22697_22713 = state_22694__$1;
(statearr_22697_22713[(2)] = null);

(statearr_22697_22713[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22695 === (2))){
var inst_22674 = (state_22694[(9)]);
var inst_22677 = (state_22694[(10)]);
var inst_22677__$1 = cljs.core.nth.call(null,inst_22674,(0),null);
var inst_22678 = cljs.core.nthnext.call(null,inst_22674,(1));
var inst_22679 = (inst_22677__$1 == null);
var inst_22680 = cljs.core.not.call(null,inst_22679);
var state_22694__$1 = (function (){var statearr_22698 = state_22694;
(statearr_22698[(11)] = inst_22678);

(statearr_22698[(10)] = inst_22677__$1);

return statearr_22698;
})();
if(inst_22680){
var statearr_22699_22714 = state_22694__$1;
(statearr_22699_22714[(1)] = (4));

} else {
var statearr_22700_22715 = state_22694__$1;
(statearr_22700_22715[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22695 === (3))){
var inst_22692 = (state_22694[(2)]);
var state_22694__$1 = state_22694;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22694__$1,inst_22692);
} else {
if((state_val_22695 === (4))){
var inst_22677 = (state_22694[(10)]);
var inst_22682 = figwheel.client.file_reloading.reload_js_file.call(null,inst_22677);
var state_22694__$1 = state_22694;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22694__$1,(7),inst_22682);
} else {
if((state_val_22695 === (5))){
var inst_22688 = cljs.core.async.close_BANG_.call(null,out);
var state_22694__$1 = state_22694;
var statearr_22701_22716 = state_22694__$1;
(statearr_22701_22716[(2)] = inst_22688);

(statearr_22701_22716[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22695 === (6))){
var inst_22690 = (state_22694[(2)]);
var state_22694__$1 = state_22694;
var statearr_22702_22717 = state_22694__$1;
(statearr_22702_22717[(2)] = inst_22690);

(statearr_22702_22717[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22695 === (7))){
var inst_22678 = (state_22694[(11)]);
var inst_22684 = (state_22694[(2)]);
var inst_22685 = cljs.core.async.put_BANG_.call(null,out,inst_22684);
var inst_22674 = inst_22678;
var state_22694__$1 = (function (){var statearr_22703 = state_22694;
(statearr_22703[(9)] = inst_22674);

(statearr_22703[(12)] = inst_22685);

return statearr_22703;
})();
var statearr_22704_22718 = state_22694__$1;
(statearr_22704_22718[(2)] = null);

(statearr_22704_22718[(1)] = (2));


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
});})(c__19454__auto___22712,out))
;
return ((function (switch__19342__auto__,c__19454__auto___22712,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__19343__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__19343__auto____0 = (function (){
var statearr_22708 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22708[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__19343__auto__);

(statearr_22708[(1)] = (1));

return statearr_22708;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__19343__auto____1 = (function (state_22694){
while(true){
var ret_value__19344__auto__ = (function (){try{while(true){
var result__19345__auto__ = switch__19342__auto__.call(null,state_22694);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19345__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19345__auto__;
}
break;
}
}catch (e22709){if((e22709 instanceof Object)){
var ex__19346__auto__ = e22709;
var statearr_22710_22719 = state_22694;
(statearr_22710_22719[(5)] = ex__19346__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22694);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22709;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19344__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22720 = state_22694;
state_22694 = G__22720;
continue;
} else {
return ret_value__19344__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__19343__auto__ = function(state_22694){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__19343__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__19343__auto____1.call(this,state_22694);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__19343__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__19343__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__19343__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__19343__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__19343__auto__;
})()
;})(switch__19342__auto__,c__19454__auto___22712,out))
})();
var state__19456__auto__ = (function (){var statearr_22711 = f__19455__auto__.call(null);
(statearr_22711[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19454__auto___22712);

return statearr_22711;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19456__auto__);
});})(c__19454__auto___22712,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__22721,opts){
var map__22725 = p__22721;
var map__22725__$1 = ((((!((map__22725 == null)))?((((map__22725.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22725.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22725):map__22725);
var eval_body__$1 = cljs.core.get.call(null,map__22725__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__22725__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__16807__auto__ = eval_body__$1;
if(cljs.core.truth_(and__16807__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__16807__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e22727){var e = e22727;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["figwheel.connect",null], null), null),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4423__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__22728_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__22728_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4423__auto__)){
var file_msg = temp__4423__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__22733){
var vec__22734 = p__22733;
var k = cljs.core.nth.call(null,vec__22734,(0),null);
var v = cljs.core.nth.call(null,vec__22734,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__22735){
var vec__22736 = p__22735;
var k = cljs.core.nth.call(null,vec__22736,(0),null);
var v = cljs.core.nth.call(null,vec__22736,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__22740,p__22741){
var map__22988 = p__22740;
var map__22988__$1 = ((((!((map__22988 == null)))?((((map__22988.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22988.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22988):map__22988);
var opts = map__22988__$1;
var before_jsload = cljs.core.get.call(null,map__22988__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__22988__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__22988__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__22989 = p__22741;
var map__22989__$1 = ((((!((map__22989 == null)))?((((map__22989.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22989.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22989):map__22989);
var msg = map__22989__$1;
var files = cljs.core.get.call(null,map__22989__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__22989__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__22989__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__19454__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19454__auto__,map__22988,map__22988__$1,opts,before_jsload,on_jsload,reload_dependents,map__22989,map__22989__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__19455__auto__ = (function (){var switch__19342__auto__ = ((function (c__19454__auto__,map__22988,map__22988__$1,opts,before_jsload,on_jsload,reload_dependents,map__22989,map__22989__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_23142){
var state_val_23143 = (state_23142[(1)]);
if((state_val_23143 === (7))){
var inst_23004 = (state_23142[(7)]);
var inst_23005 = (state_23142[(8)]);
var inst_23006 = (state_23142[(9)]);
var inst_23003 = (state_23142[(10)]);
var inst_23011 = cljs.core._nth.call(null,inst_23004,inst_23006);
var inst_23012 = figwheel.client.file_reloading.eval_body.call(null,inst_23011,opts);
var inst_23013 = (inst_23006 + (1));
var tmp23144 = inst_23004;
var tmp23145 = inst_23005;
var tmp23146 = inst_23003;
var inst_23003__$1 = tmp23146;
var inst_23004__$1 = tmp23144;
var inst_23005__$1 = tmp23145;
var inst_23006__$1 = inst_23013;
var state_23142__$1 = (function (){var statearr_23147 = state_23142;
(statearr_23147[(7)] = inst_23004__$1);

(statearr_23147[(8)] = inst_23005__$1);

(statearr_23147[(11)] = inst_23012);

(statearr_23147[(9)] = inst_23006__$1);

(statearr_23147[(10)] = inst_23003__$1);

return statearr_23147;
})();
var statearr_23148_23234 = state_23142__$1;
(statearr_23148_23234[(2)] = null);

(statearr_23148_23234[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23143 === (20))){
var inst_23046 = (state_23142[(12)]);
var inst_23054 = figwheel.client.file_reloading.sort_files.call(null,inst_23046);
var state_23142__$1 = state_23142;
var statearr_23149_23235 = state_23142__$1;
(statearr_23149_23235[(2)] = inst_23054);

(statearr_23149_23235[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23143 === (27))){
var state_23142__$1 = state_23142;
var statearr_23150_23236 = state_23142__$1;
(statearr_23150_23236[(2)] = null);

(statearr_23150_23236[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23143 === (1))){
var inst_22995 = (state_23142[(13)]);
var inst_22992 = before_jsload.call(null,files);
var inst_22993 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_22994 = (function (){return ((function (inst_22995,inst_22992,inst_22993,state_val_23143,c__19454__auto__,map__22988,map__22988__$1,opts,before_jsload,on_jsload,reload_dependents,map__22989,map__22989__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__22737_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__22737_SHARP_);
});
;})(inst_22995,inst_22992,inst_22993,state_val_23143,c__19454__auto__,map__22988,map__22988__$1,opts,before_jsload,on_jsload,reload_dependents,map__22989,map__22989__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_22995__$1 = cljs.core.filter.call(null,inst_22994,files);
var inst_22996 = cljs.core.not_empty.call(null,inst_22995__$1);
var state_23142__$1 = (function (){var statearr_23151 = state_23142;
(statearr_23151[(14)] = inst_22992);

(statearr_23151[(13)] = inst_22995__$1);

(statearr_23151[(15)] = inst_22993);

return statearr_23151;
})();
if(cljs.core.truth_(inst_22996)){
var statearr_23152_23237 = state_23142__$1;
(statearr_23152_23237[(1)] = (2));

} else {
var statearr_23153_23238 = state_23142__$1;
(statearr_23153_23238[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23143 === (24))){
var state_23142__$1 = state_23142;
var statearr_23154_23239 = state_23142__$1;
(statearr_23154_23239[(2)] = null);

(statearr_23154_23239[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23143 === (39))){
var inst_23096 = (state_23142[(16)]);
var state_23142__$1 = state_23142;
var statearr_23155_23240 = state_23142__$1;
(statearr_23155_23240[(2)] = inst_23096);

(statearr_23155_23240[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23143 === (46))){
var inst_23137 = (state_23142[(2)]);
var state_23142__$1 = state_23142;
var statearr_23156_23241 = state_23142__$1;
(statearr_23156_23241[(2)] = inst_23137);

(statearr_23156_23241[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23143 === (4))){
var inst_23040 = (state_23142[(2)]);
var inst_23041 = cljs.core.List.EMPTY;
var inst_23042 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_23041);
var inst_23043 = (function (){return ((function (inst_23040,inst_23041,inst_23042,state_val_23143,c__19454__auto__,map__22988,map__22988__$1,opts,before_jsload,on_jsload,reload_dependents,map__22989,map__22989__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__22738_SHARP_){
var and__16807__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__22738_SHARP_);
if(cljs.core.truth_(and__16807__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__22738_SHARP_));
} else {
return and__16807__auto__;
}
});
;})(inst_23040,inst_23041,inst_23042,state_val_23143,c__19454__auto__,map__22988,map__22988__$1,opts,before_jsload,on_jsload,reload_dependents,map__22989,map__22989__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_23044 = cljs.core.filter.call(null,inst_23043,files);
var inst_23045 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_23046 = cljs.core.concat.call(null,inst_23044,inst_23045);
var state_23142__$1 = (function (){var statearr_23157 = state_23142;
(statearr_23157[(17)] = inst_23040);

(statearr_23157[(18)] = inst_23042);

(statearr_23157[(12)] = inst_23046);

return statearr_23157;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_23158_23242 = state_23142__$1;
(statearr_23158_23242[(1)] = (16));

} else {
var statearr_23159_23243 = state_23142__$1;
(statearr_23159_23243[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23143 === (15))){
var inst_23030 = (state_23142[(2)]);
var state_23142__$1 = state_23142;
var statearr_23160_23244 = state_23142__$1;
(statearr_23160_23244[(2)] = inst_23030);

(statearr_23160_23244[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23143 === (21))){
var inst_23056 = (state_23142[(19)]);
var inst_23056__$1 = (state_23142[(2)]);
var inst_23057 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_23056__$1);
var state_23142__$1 = (function (){var statearr_23161 = state_23142;
(statearr_23161[(19)] = inst_23056__$1);

return statearr_23161;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23142__$1,(22),inst_23057);
} else {
if((state_val_23143 === (31))){
var inst_23140 = (state_23142[(2)]);
var state_23142__$1 = state_23142;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23142__$1,inst_23140);
} else {
if((state_val_23143 === (32))){
var inst_23096 = (state_23142[(16)]);
var inst_23101 = inst_23096.cljs$lang$protocol_mask$partition0$;
var inst_23102 = (inst_23101 & (64));
var inst_23103 = inst_23096.cljs$core$ISeq$;
var inst_23104 = (inst_23102) || (inst_23103);
var state_23142__$1 = state_23142;
if(cljs.core.truth_(inst_23104)){
var statearr_23162_23245 = state_23142__$1;
(statearr_23162_23245[(1)] = (35));

} else {
var statearr_23163_23246 = state_23142__$1;
(statearr_23163_23246[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23143 === (40))){
var inst_23117 = (state_23142[(20)]);
var inst_23116 = (state_23142[(2)]);
var inst_23117__$1 = cljs.core.get.call(null,inst_23116,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_23118 = cljs.core.get.call(null,inst_23116,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_23119 = cljs.core.not_empty.call(null,inst_23117__$1);
var state_23142__$1 = (function (){var statearr_23164 = state_23142;
(statearr_23164[(21)] = inst_23118);

(statearr_23164[(20)] = inst_23117__$1);

return statearr_23164;
})();
if(cljs.core.truth_(inst_23119)){
var statearr_23165_23247 = state_23142__$1;
(statearr_23165_23247[(1)] = (41));

} else {
var statearr_23166_23248 = state_23142__$1;
(statearr_23166_23248[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23143 === (33))){
var state_23142__$1 = state_23142;
var statearr_23167_23249 = state_23142__$1;
(statearr_23167_23249[(2)] = false);

(statearr_23167_23249[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23143 === (13))){
var inst_23016 = (state_23142[(22)]);
var inst_23020 = cljs.core.chunk_first.call(null,inst_23016);
var inst_23021 = cljs.core.chunk_rest.call(null,inst_23016);
var inst_23022 = cljs.core.count.call(null,inst_23020);
var inst_23003 = inst_23021;
var inst_23004 = inst_23020;
var inst_23005 = inst_23022;
var inst_23006 = (0);
var state_23142__$1 = (function (){var statearr_23168 = state_23142;
(statearr_23168[(7)] = inst_23004);

(statearr_23168[(8)] = inst_23005);

(statearr_23168[(9)] = inst_23006);

(statearr_23168[(10)] = inst_23003);

return statearr_23168;
})();
var statearr_23169_23250 = state_23142__$1;
(statearr_23169_23250[(2)] = null);

(statearr_23169_23250[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23143 === (22))){
var inst_23064 = (state_23142[(23)]);
var inst_23056 = (state_23142[(19)]);
var inst_23060 = (state_23142[(24)]);
var inst_23059 = (state_23142[(25)]);
var inst_23059__$1 = (state_23142[(2)]);
var inst_23060__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_23059__$1);
var inst_23061 = (function (){var all_files = inst_23056;
var res_SINGLEQUOTE_ = inst_23059__$1;
var res = inst_23060__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_23064,inst_23056,inst_23060,inst_23059,inst_23059__$1,inst_23060__$1,state_val_23143,c__19454__auto__,map__22988,map__22988__$1,opts,before_jsload,on_jsload,reload_dependents,map__22989,map__22989__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__22739_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__22739_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_23064,inst_23056,inst_23060,inst_23059,inst_23059__$1,inst_23060__$1,state_val_23143,c__19454__auto__,map__22988,map__22988__$1,opts,before_jsload,on_jsload,reload_dependents,map__22989,map__22989__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_23062 = cljs.core.filter.call(null,inst_23061,inst_23059__$1);
var inst_23063 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_23064__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_23063);
var inst_23065 = cljs.core.not_empty.call(null,inst_23064__$1);
var state_23142__$1 = (function (){var statearr_23170 = state_23142;
(statearr_23170[(23)] = inst_23064__$1);

(statearr_23170[(24)] = inst_23060__$1);

(statearr_23170[(25)] = inst_23059__$1);

(statearr_23170[(26)] = inst_23062);

return statearr_23170;
})();
if(cljs.core.truth_(inst_23065)){
var statearr_23171_23251 = state_23142__$1;
(statearr_23171_23251[(1)] = (23));

} else {
var statearr_23172_23252 = state_23142__$1;
(statearr_23172_23252[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23143 === (36))){
var state_23142__$1 = state_23142;
var statearr_23173_23253 = state_23142__$1;
(statearr_23173_23253[(2)] = false);

(statearr_23173_23253[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23143 === (41))){
var inst_23117 = (state_23142[(20)]);
var inst_23121 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_23122 = cljs.core.map.call(null,inst_23121,inst_23117);
var inst_23123 = cljs.core.pr_str.call(null,inst_23122);
var inst_23124 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_23123)].join('');
var inst_23125 = figwheel.client.utils.log.call(null,inst_23124);
var state_23142__$1 = state_23142;
var statearr_23174_23254 = state_23142__$1;
(statearr_23174_23254[(2)] = inst_23125);

(statearr_23174_23254[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23143 === (43))){
var inst_23118 = (state_23142[(21)]);
var inst_23128 = (state_23142[(2)]);
var inst_23129 = cljs.core.not_empty.call(null,inst_23118);
var state_23142__$1 = (function (){var statearr_23175 = state_23142;
(statearr_23175[(27)] = inst_23128);

return statearr_23175;
})();
if(cljs.core.truth_(inst_23129)){
var statearr_23176_23255 = state_23142__$1;
(statearr_23176_23255[(1)] = (44));

} else {
var statearr_23177_23256 = state_23142__$1;
(statearr_23177_23256[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23143 === (29))){
var inst_23096 = (state_23142[(16)]);
var inst_23064 = (state_23142[(23)]);
var inst_23056 = (state_23142[(19)]);
var inst_23060 = (state_23142[(24)]);
var inst_23059 = (state_23142[(25)]);
var inst_23062 = (state_23142[(26)]);
var inst_23092 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_23095 = (function (){var all_files = inst_23056;
var res_SINGLEQUOTE_ = inst_23059;
var res = inst_23060;
var files_not_loaded = inst_23062;
var dependencies_that_loaded = inst_23064;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_23096,inst_23064,inst_23056,inst_23060,inst_23059,inst_23062,inst_23092,state_val_23143,c__19454__auto__,map__22988,map__22988__$1,opts,before_jsload,on_jsload,reload_dependents,map__22989,map__22989__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__23094){
var map__23178 = p__23094;
var map__23178__$1 = ((((!((map__23178 == null)))?((((map__23178.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23178.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23178):map__23178);
var namespace = cljs.core.get.call(null,map__23178__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_23096,inst_23064,inst_23056,inst_23060,inst_23059,inst_23062,inst_23092,state_val_23143,c__19454__auto__,map__22988,map__22988__$1,opts,before_jsload,on_jsload,reload_dependents,map__22989,map__22989__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_23096__$1 = cljs.core.group_by.call(null,inst_23095,inst_23062);
var inst_23098 = (inst_23096__$1 == null);
var inst_23099 = cljs.core.not.call(null,inst_23098);
var state_23142__$1 = (function (){var statearr_23180 = state_23142;
(statearr_23180[(16)] = inst_23096__$1);

(statearr_23180[(28)] = inst_23092);

return statearr_23180;
})();
if(inst_23099){
var statearr_23181_23257 = state_23142__$1;
(statearr_23181_23257[(1)] = (32));

} else {
var statearr_23182_23258 = state_23142__$1;
(statearr_23182_23258[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23143 === (44))){
var inst_23118 = (state_23142[(21)]);
var inst_23131 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_23118);
var inst_23132 = cljs.core.pr_str.call(null,inst_23131);
var inst_23133 = [cljs.core.str("not required: "),cljs.core.str(inst_23132)].join('');
var inst_23134 = figwheel.client.utils.log.call(null,inst_23133);
var state_23142__$1 = state_23142;
var statearr_23183_23259 = state_23142__$1;
(statearr_23183_23259[(2)] = inst_23134);

(statearr_23183_23259[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23143 === (6))){
var inst_23037 = (state_23142[(2)]);
var state_23142__$1 = state_23142;
var statearr_23184_23260 = state_23142__$1;
(statearr_23184_23260[(2)] = inst_23037);

(statearr_23184_23260[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23143 === (28))){
var inst_23062 = (state_23142[(26)]);
var inst_23089 = (state_23142[(2)]);
var inst_23090 = cljs.core.not_empty.call(null,inst_23062);
var state_23142__$1 = (function (){var statearr_23185 = state_23142;
(statearr_23185[(29)] = inst_23089);

return statearr_23185;
})();
if(cljs.core.truth_(inst_23090)){
var statearr_23186_23261 = state_23142__$1;
(statearr_23186_23261[(1)] = (29));

} else {
var statearr_23187_23262 = state_23142__$1;
(statearr_23187_23262[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23143 === (25))){
var inst_23060 = (state_23142[(24)]);
var inst_23076 = (state_23142[(2)]);
var inst_23077 = cljs.core.not_empty.call(null,inst_23060);
var state_23142__$1 = (function (){var statearr_23188 = state_23142;
(statearr_23188[(30)] = inst_23076);

return statearr_23188;
})();
if(cljs.core.truth_(inst_23077)){
var statearr_23189_23263 = state_23142__$1;
(statearr_23189_23263[(1)] = (26));

} else {
var statearr_23190_23264 = state_23142__$1;
(statearr_23190_23264[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23143 === (34))){
var inst_23111 = (state_23142[(2)]);
var state_23142__$1 = state_23142;
if(cljs.core.truth_(inst_23111)){
var statearr_23191_23265 = state_23142__$1;
(statearr_23191_23265[(1)] = (38));

} else {
var statearr_23192_23266 = state_23142__$1;
(statearr_23192_23266[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23143 === (17))){
var state_23142__$1 = state_23142;
var statearr_23193_23267 = state_23142__$1;
(statearr_23193_23267[(2)] = recompile_dependents);

(statearr_23193_23267[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23143 === (3))){
var state_23142__$1 = state_23142;
var statearr_23194_23268 = state_23142__$1;
(statearr_23194_23268[(2)] = null);

(statearr_23194_23268[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23143 === (12))){
var inst_23033 = (state_23142[(2)]);
var state_23142__$1 = state_23142;
var statearr_23195_23269 = state_23142__$1;
(statearr_23195_23269[(2)] = inst_23033);

(statearr_23195_23269[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23143 === (2))){
var inst_22995 = (state_23142[(13)]);
var inst_23002 = cljs.core.seq.call(null,inst_22995);
var inst_23003 = inst_23002;
var inst_23004 = null;
var inst_23005 = (0);
var inst_23006 = (0);
var state_23142__$1 = (function (){var statearr_23196 = state_23142;
(statearr_23196[(7)] = inst_23004);

(statearr_23196[(8)] = inst_23005);

(statearr_23196[(9)] = inst_23006);

(statearr_23196[(10)] = inst_23003);

return statearr_23196;
})();
var statearr_23197_23270 = state_23142__$1;
(statearr_23197_23270[(2)] = null);

(statearr_23197_23270[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23143 === (23))){
var inst_23064 = (state_23142[(23)]);
var inst_23056 = (state_23142[(19)]);
var inst_23060 = (state_23142[(24)]);
var inst_23059 = (state_23142[(25)]);
var inst_23062 = (state_23142[(26)]);
var inst_23067 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_23069 = (function (){var all_files = inst_23056;
var res_SINGLEQUOTE_ = inst_23059;
var res = inst_23060;
var files_not_loaded = inst_23062;
var dependencies_that_loaded = inst_23064;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_23064,inst_23056,inst_23060,inst_23059,inst_23062,inst_23067,state_val_23143,c__19454__auto__,map__22988,map__22988__$1,opts,before_jsload,on_jsload,reload_dependents,map__22989,map__22989__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__23068){
var map__23198 = p__23068;
var map__23198__$1 = ((((!((map__23198 == null)))?((((map__23198.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23198.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23198):map__23198);
var request_url = cljs.core.get.call(null,map__23198__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_23064,inst_23056,inst_23060,inst_23059,inst_23062,inst_23067,state_val_23143,c__19454__auto__,map__22988,map__22988__$1,opts,before_jsload,on_jsload,reload_dependents,map__22989,map__22989__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_23070 = cljs.core.reverse.call(null,inst_23064);
var inst_23071 = cljs.core.map.call(null,inst_23069,inst_23070);
var inst_23072 = cljs.core.pr_str.call(null,inst_23071);
var inst_23073 = figwheel.client.utils.log.call(null,inst_23072);
var state_23142__$1 = (function (){var statearr_23200 = state_23142;
(statearr_23200[(31)] = inst_23067);

return statearr_23200;
})();
var statearr_23201_23271 = state_23142__$1;
(statearr_23201_23271[(2)] = inst_23073);

(statearr_23201_23271[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23143 === (35))){
var state_23142__$1 = state_23142;
var statearr_23202_23272 = state_23142__$1;
(statearr_23202_23272[(2)] = true);

(statearr_23202_23272[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23143 === (19))){
var inst_23046 = (state_23142[(12)]);
var inst_23052 = figwheel.client.file_reloading.expand_files.call(null,inst_23046);
var state_23142__$1 = state_23142;
var statearr_23203_23273 = state_23142__$1;
(statearr_23203_23273[(2)] = inst_23052);

(statearr_23203_23273[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23143 === (11))){
var state_23142__$1 = state_23142;
var statearr_23204_23274 = state_23142__$1;
(statearr_23204_23274[(2)] = null);

(statearr_23204_23274[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23143 === (9))){
var inst_23035 = (state_23142[(2)]);
var state_23142__$1 = state_23142;
var statearr_23205_23275 = state_23142__$1;
(statearr_23205_23275[(2)] = inst_23035);

(statearr_23205_23275[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23143 === (5))){
var inst_23005 = (state_23142[(8)]);
var inst_23006 = (state_23142[(9)]);
var inst_23008 = (inst_23006 < inst_23005);
var inst_23009 = inst_23008;
var state_23142__$1 = state_23142;
if(cljs.core.truth_(inst_23009)){
var statearr_23206_23276 = state_23142__$1;
(statearr_23206_23276[(1)] = (7));

} else {
var statearr_23207_23277 = state_23142__$1;
(statearr_23207_23277[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23143 === (14))){
var inst_23016 = (state_23142[(22)]);
var inst_23025 = cljs.core.first.call(null,inst_23016);
var inst_23026 = figwheel.client.file_reloading.eval_body.call(null,inst_23025,opts);
var inst_23027 = cljs.core.next.call(null,inst_23016);
var inst_23003 = inst_23027;
var inst_23004 = null;
var inst_23005 = (0);
var inst_23006 = (0);
var state_23142__$1 = (function (){var statearr_23208 = state_23142;
(statearr_23208[(7)] = inst_23004);

(statearr_23208[(8)] = inst_23005);

(statearr_23208[(32)] = inst_23026);

(statearr_23208[(9)] = inst_23006);

(statearr_23208[(10)] = inst_23003);

return statearr_23208;
})();
var statearr_23209_23278 = state_23142__$1;
(statearr_23209_23278[(2)] = null);

(statearr_23209_23278[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23143 === (45))){
var state_23142__$1 = state_23142;
var statearr_23210_23279 = state_23142__$1;
(statearr_23210_23279[(2)] = null);

(statearr_23210_23279[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23143 === (26))){
var inst_23064 = (state_23142[(23)]);
var inst_23056 = (state_23142[(19)]);
var inst_23060 = (state_23142[(24)]);
var inst_23059 = (state_23142[(25)]);
var inst_23062 = (state_23142[(26)]);
var inst_23079 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_23081 = (function (){var all_files = inst_23056;
var res_SINGLEQUOTE_ = inst_23059;
var res = inst_23060;
var files_not_loaded = inst_23062;
var dependencies_that_loaded = inst_23064;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_23064,inst_23056,inst_23060,inst_23059,inst_23062,inst_23079,state_val_23143,c__19454__auto__,map__22988,map__22988__$1,opts,before_jsload,on_jsload,reload_dependents,map__22989,map__22989__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__23080){
var map__23211 = p__23080;
var map__23211__$1 = ((((!((map__23211 == null)))?((((map__23211.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23211.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23211):map__23211);
var namespace = cljs.core.get.call(null,map__23211__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__23211__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_23064,inst_23056,inst_23060,inst_23059,inst_23062,inst_23079,state_val_23143,c__19454__auto__,map__22988,map__22988__$1,opts,before_jsload,on_jsload,reload_dependents,map__22989,map__22989__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_23082 = cljs.core.map.call(null,inst_23081,inst_23060);
var inst_23083 = cljs.core.pr_str.call(null,inst_23082);
var inst_23084 = figwheel.client.utils.log.call(null,inst_23083);
var inst_23085 = (function (){var all_files = inst_23056;
var res_SINGLEQUOTE_ = inst_23059;
var res = inst_23060;
var files_not_loaded = inst_23062;
var dependencies_that_loaded = inst_23064;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_23064,inst_23056,inst_23060,inst_23059,inst_23062,inst_23079,inst_23081,inst_23082,inst_23083,inst_23084,state_val_23143,c__19454__auto__,map__22988,map__22988__$1,opts,before_jsload,on_jsload,reload_dependents,map__22989,map__22989__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_23064,inst_23056,inst_23060,inst_23059,inst_23062,inst_23079,inst_23081,inst_23082,inst_23083,inst_23084,state_val_23143,c__19454__auto__,map__22988,map__22988__$1,opts,before_jsload,on_jsload,reload_dependents,map__22989,map__22989__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_23086 = setTimeout(inst_23085,(10));
var state_23142__$1 = (function (){var statearr_23213 = state_23142;
(statearr_23213[(33)] = inst_23079);

(statearr_23213[(34)] = inst_23084);

return statearr_23213;
})();
var statearr_23214_23280 = state_23142__$1;
(statearr_23214_23280[(2)] = inst_23086);

(statearr_23214_23280[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23143 === (16))){
var state_23142__$1 = state_23142;
var statearr_23215_23281 = state_23142__$1;
(statearr_23215_23281[(2)] = reload_dependents);

(statearr_23215_23281[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23143 === (38))){
var inst_23096 = (state_23142[(16)]);
var inst_23113 = cljs.core.apply.call(null,cljs.core.hash_map,inst_23096);
var state_23142__$1 = state_23142;
var statearr_23216_23282 = state_23142__$1;
(statearr_23216_23282[(2)] = inst_23113);

(statearr_23216_23282[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23143 === (30))){
var state_23142__$1 = state_23142;
var statearr_23217_23283 = state_23142__$1;
(statearr_23217_23283[(2)] = null);

(statearr_23217_23283[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23143 === (10))){
var inst_23016 = (state_23142[(22)]);
var inst_23018 = cljs.core.chunked_seq_QMARK_.call(null,inst_23016);
var state_23142__$1 = state_23142;
if(inst_23018){
var statearr_23218_23284 = state_23142__$1;
(statearr_23218_23284[(1)] = (13));

} else {
var statearr_23219_23285 = state_23142__$1;
(statearr_23219_23285[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23143 === (18))){
var inst_23050 = (state_23142[(2)]);
var state_23142__$1 = state_23142;
if(cljs.core.truth_(inst_23050)){
var statearr_23220_23286 = state_23142__$1;
(statearr_23220_23286[(1)] = (19));

} else {
var statearr_23221_23287 = state_23142__$1;
(statearr_23221_23287[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23143 === (42))){
var state_23142__$1 = state_23142;
var statearr_23222_23288 = state_23142__$1;
(statearr_23222_23288[(2)] = null);

(statearr_23222_23288[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23143 === (37))){
var inst_23108 = (state_23142[(2)]);
var state_23142__$1 = state_23142;
var statearr_23223_23289 = state_23142__$1;
(statearr_23223_23289[(2)] = inst_23108);

(statearr_23223_23289[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23143 === (8))){
var inst_23016 = (state_23142[(22)]);
var inst_23003 = (state_23142[(10)]);
var inst_23016__$1 = cljs.core.seq.call(null,inst_23003);
var state_23142__$1 = (function (){var statearr_23224 = state_23142;
(statearr_23224[(22)] = inst_23016__$1);

return statearr_23224;
})();
if(inst_23016__$1){
var statearr_23225_23290 = state_23142__$1;
(statearr_23225_23290[(1)] = (10));

} else {
var statearr_23226_23291 = state_23142__$1;
(statearr_23226_23291[(1)] = (11));

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
}
});})(c__19454__auto__,map__22988,map__22988__$1,opts,before_jsload,on_jsload,reload_dependents,map__22989,map__22989__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__19342__auto__,c__19454__auto__,map__22988,map__22988__$1,opts,before_jsload,on_jsload,reload_dependents,map__22989,map__22989__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__19343__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__19343__auto____0 = (function (){
var statearr_23230 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23230[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__19343__auto__);

(statearr_23230[(1)] = (1));

return statearr_23230;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__19343__auto____1 = (function (state_23142){
while(true){
var ret_value__19344__auto__ = (function (){try{while(true){
var result__19345__auto__ = switch__19342__auto__.call(null,state_23142);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19345__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19345__auto__;
}
break;
}
}catch (e23231){if((e23231 instanceof Object)){
var ex__19346__auto__ = e23231;
var statearr_23232_23292 = state_23142;
(statearr_23232_23292[(5)] = ex__19346__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23142);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23231;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19344__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23293 = state_23142;
state_23142 = G__23293;
continue;
} else {
return ret_value__19344__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__19343__auto__ = function(state_23142){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__19343__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__19343__auto____1.call(this,state_23142);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__19343__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__19343__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__19343__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__19343__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__19343__auto__;
})()
;})(switch__19342__auto__,c__19454__auto__,map__22988,map__22988__$1,opts,before_jsload,on_jsload,reload_dependents,map__22989,map__22989__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__19456__auto__ = (function (){var statearr_23233 = f__19455__auto__.call(null);
(statearr_23233[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19454__auto__);

return statearr_23233;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19456__auto__);
});})(c__19454__auto__,map__22988,map__22988__$1,opts,before_jsload,on_jsload,reload_dependents,map__22989,map__22989__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__19454__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__23296,link){
var map__23299 = p__23296;
var map__23299__$1 = ((((!((map__23299 == null)))?((((map__23299.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23299.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23299):map__23299);
var file = cljs.core.get.call(null,map__23299__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = link.href;
if(cljs.core.truth_(temp__4425__auto__)){
var link_href = temp__4425__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4425__auto__,map__23299,map__23299__$1,file){
return (function (p1__23294_SHARP_,p2__23295_SHARP_){
if(cljs.core._EQ_.call(null,p1__23294_SHARP_,p2__23295_SHARP_)){
return p1__23294_SHARP_;
} else {
return false;
}
});})(link_href,temp__4425__auto__,map__23299,map__23299__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4425__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__23305){
var map__23306 = p__23305;
var map__23306__$1 = ((((!((map__23306 == null)))?((((map__23306.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23306.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23306):map__23306);
var match_length = cljs.core.get.call(null,map__23306__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__23306__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__23301_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__23301_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4425__auto__)){
var res = temp__4425__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(var_args){
var args23308 = [];
var len__17877__auto___23311 = arguments.length;
var i__17878__auto___23312 = (0);
while(true){
if((i__17878__auto___23312 < len__17877__auto___23311)){
args23308.push((arguments[i__17878__auto___23312]));

var G__23313 = (i__17878__auto___23312 + (1));
i__17878__auto___23312 = G__23313;
continue;
} else {
}
break;
}

var G__23310 = args23308.length;
switch (G__23310) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23308.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.distictify = (function figwheel$client$file_reloading$distictify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__23315_SHARP_,p2__23316_SHARP_){
return cljs.core.assoc.call(null,p1__23315_SHARP_,cljs.core.get.call(null,p2__23316_SHARP_,key),p2__23316_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__23317){
var map__23320 = p__23317;
var map__23320__$1 = ((((!((map__23320 == null)))?((((map__23320.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23320.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23320):map__23320);
var f_data = map__23320__$1;
var file = cljs.core.get.call(null,map__23320__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4425__auto__)){
var link = temp__4425__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__23322,files_msg){
var map__23329 = p__23322;
var map__23329__$1 = ((((!((map__23329 == null)))?((((map__23329.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23329.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23329):map__23329);
var opts = map__23329__$1;
var on_cssload = cljs.core.get.call(null,map__23329__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__23331_23335 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__23332_23336 = null;
var count__23333_23337 = (0);
var i__23334_23338 = (0);
while(true){
if((i__23334_23338 < count__23333_23337)){
var f_23339 = cljs.core._nth.call(null,chunk__23332_23336,i__23334_23338);
figwheel.client.file_reloading.reload_css_file.call(null,f_23339);

var G__23340 = seq__23331_23335;
var G__23341 = chunk__23332_23336;
var G__23342 = count__23333_23337;
var G__23343 = (i__23334_23338 + (1));
seq__23331_23335 = G__23340;
chunk__23332_23336 = G__23341;
count__23333_23337 = G__23342;
i__23334_23338 = G__23343;
continue;
} else {
var temp__4425__auto___23344 = cljs.core.seq.call(null,seq__23331_23335);
if(temp__4425__auto___23344){
var seq__23331_23345__$1 = temp__4425__auto___23344;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23331_23345__$1)){
var c__17622__auto___23346 = cljs.core.chunk_first.call(null,seq__23331_23345__$1);
var G__23347 = cljs.core.chunk_rest.call(null,seq__23331_23345__$1);
var G__23348 = c__17622__auto___23346;
var G__23349 = cljs.core.count.call(null,c__17622__auto___23346);
var G__23350 = (0);
seq__23331_23335 = G__23347;
chunk__23332_23336 = G__23348;
count__23333_23337 = G__23349;
i__23334_23338 = G__23350;
continue;
} else {
var f_23351 = cljs.core.first.call(null,seq__23331_23345__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_23351);

var G__23352 = cljs.core.next.call(null,seq__23331_23345__$1);
var G__23353 = null;
var G__23354 = (0);
var G__23355 = (0);
seq__23331_23335 = G__23352;
chunk__23332_23336 = G__23353;
count__23333_23337 = G__23354;
i__23334_23338 = G__23355;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__23329,map__23329__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__23329,map__23329__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1459482113720