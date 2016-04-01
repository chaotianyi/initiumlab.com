// Compiled by ClojureScript 1.7.170 {}
goog.provide('scrolll.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('scrolll.article');
cljs.core.enable_console_print_BANG_.call(null);
scrolll.core.tile_layer_url = "https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}";
scrolll.core.mapbox_access_token = "pk.eyJ1Ijoic29ycGFhcyIsImEiOiJjaWwzdTR5NTIzdDZkdmZtM3YzZ2QxZDMyIn0.nLiCtQkc-yRGb8xoggVm9g";
scrolll.core.leaflet_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"map","map",1371690461),null,new cljs.core.Keyword(null,"current-layers","current-layers",1497110930),cljs.core.PersistentVector.EMPTY], null));
scrolll.core.remove_current_layers = (function scrolll$core$remove_current_layers(){
var map_24528 = new cljs.core.Keyword(null,"map","map",1371690461).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,scrolll.core.leaflet_state));
var seq__24524_24529 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"current-layers","current-layers",1497110930).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,scrolll.core.leaflet_state)));
var chunk__24525_24530 = null;
var count__24526_24531 = (0);
var i__24527_24532 = (0);
while(true){
if((i__24527_24532 < count__24526_24531)){
var layer_24533 = cljs.core._nth.call(null,chunk__24525_24530,i__24527_24532);
map_24528.removeLayer(layer_24533);

var G__24534 = seq__24524_24529;
var G__24535 = chunk__24525_24530;
var G__24536 = count__24526_24531;
var G__24537 = (i__24527_24532 + (1));
seq__24524_24529 = G__24534;
chunk__24525_24530 = G__24535;
count__24526_24531 = G__24536;
i__24527_24532 = G__24537;
continue;
} else {
var temp__4425__auto___24538 = cljs.core.seq.call(null,seq__24524_24529);
if(temp__4425__auto___24538){
var seq__24524_24539__$1 = temp__4425__auto___24538;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24524_24539__$1)){
var c__17622__auto___24540 = cljs.core.chunk_first.call(null,seq__24524_24539__$1);
var G__24541 = cljs.core.chunk_rest.call(null,seq__24524_24539__$1);
var G__24542 = c__17622__auto___24540;
var G__24543 = cljs.core.count.call(null,c__17622__auto___24540);
var G__24544 = (0);
seq__24524_24529 = G__24541;
chunk__24525_24530 = G__24542;
count__24526_24531 = G__24543;
i__24527_24532 = G__24544;
continue;
} else {
var layer_24545 = cljs.core.first.call(null,seq__24524_24539__$1);
map_24528.removeLayer(layer_24545);

var G__24546 = cljs.core.next.call(null,seq__24524_24539__$1);
var G__24547 = null;
var G__24548 = (0);
var G__24549 = (0);
seq__24524_24529 = G__24546;
chunk__24525_24530 = G__24547;
count__24526_24531 = G__24548;
i__24527_24532 = G__24549;
continue;
}
} else {
}
}
break;
}

return cljs.core.swap_BANG_.call(null,scrolll.core.leaflet_state,cljs.core.assoc,new cljs.core.Keyword(null,"current-layers","current-layers",1497110930),cljs.core.PersistentVector.EMPTY);
});
scrolll.core.position_to_leaflet = (function scrolll$core$position_to_leaflet(var_args){
var args__17884__auto__ = [];
var len__17877__auto___24556 = arguments.length;
var i__17878__auto___24557 = (0);
while(true){
if((i__17878__auto___24557 < len__17877__auto___24556)){
args__17884__auto__.push((arguments[i__17878__auto___24557]));

var G__24558 = (i__17878__auto___24557 + (1));
i__17878__auto___24557 = G__24558;
continue;
} else {
}
break;
}

var argseq__17885__auto__ = ((((1) < args__17884__auto__.length))?(new cljs.core.IndexedSeq(args__17884__auto__.slice((1)),(0))):null);
return scrolll.core.position_to_leaflet.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17885__auto__);
});

scrolll.core.position_to_leaflet.cljs$core$IFn$_invoke$arity$variadic = (function (position,p__24552){
var vec__24553 = p__24552;
var map__24554 = cljs.core.nth.call(null,vec__24553,(0),null);
var map__24554__$1 = ((((!((map__24554 == null)))?((((map__24554.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24554.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24554):map__24554);
var popup = cljs.core.get.call(null,map__24554__$1,new cljs.core.Keyword(null,"popup","popup",635890211));
var marker = L.marker(cljs.core.clj__GT_js.call(null,position));
var map = new cljs.core.Keyword(null,"map","map",1371690461).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,scrolll.core.leaflet_state));
marker.addTo(map).bindPopup(popup).openPopup();

map.setView(cljs.core.clj__GT_js.call(null,position),(13));

return cljs.core.swap_BANG_.call(null,scrolll.core.leaflet_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-layers","current-layers",1497110930)], null),cljs.core.conj,marker);
});

scrolll.core.position_to_leaflet.cljs$lang$maxFixedArity = (1);

scrolll.core.position_to_leaflet.cljs$lang$applyTo = (function (seq24550){
var G__24551 = cljs.core.first.call(null,seq24550);
var seq24550__$1 = cljs.core.next.call(null,seq24550);
return scrolll.core.position_to_leaflet.cljs$core$IFn$_invoke$arity$variadic(G__24551,seq24550__$1);
});
scrolll.core.polyline_to_leaflet = (function scrolll$core$polyline_to_leaflet(dots){
var m = new cljs.core.Keyword(null,"map","map",1371690461).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,scrolll.core.leaflet_state));
var polyline = L.polyline(cljs.core.clj__GT_js.call(null,cljs.core.doall.call(null,cljs.core.map.call(null,((function (m){
return (function (p1__24559_SHARP_){
return L.latLng(cljs.core.first.call(null,p1__24559_SHARP_),cljs.core.second.call(null,p1__24559_SHARP_));
});})(m))
,dots))),cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"color","color",1011675173),"blue",new cljs.core.Keyword(null,"weight","weight",-1262796205),(5),new cljs.core.Keyword(null,"opacity","opacity",397153780),0.7], null)));
polyline.addTo(m);

m.setView(cljs.core.clj__GT_js.call(null,cljs.core.first.call(null,dots)),(13));

return cljs.core.swap_BANG_.call(null,scrolll.core.leaflet_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-layers","current-layers",1497110930)], null),cljs.core.conj,polyline);
});
scrolll.core.home_view = (function scrolll$core$home_view(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.container.content","div.container.content",-2046744587),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#map","div#map",173142408),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-mouse-enter","on-mouse-enter",-1664921661),(function (){
return window.setTimeout((function (){
return new cljs.core.Keyword(null,"map","map",1371690461).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,scrolll.core.leaflet_state)).invalidateSize(true);
}),(500));
}),new cljs.core.Keyword(null,"on-mouse-leave","on-mouse-leave",-1864319528),(function (){
return window.setTimeout((function (){
return new cljs.core.Keyword(null,"map","map",1371690461).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,scrolll.core.leaflet_state)).invalidateSize(true);
}),(500));
})], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.page","div.page",1917984906),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nav.site-nav","nav.site-nav",-1556619706),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"http://initiumlab.com"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.navLink","div.navLink",1976235631),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),"http://initiumlab.com/images/home_icon.svg"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Home"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"http://initiumlab.com/about"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.navLink","div.navLink",1976235631),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),"http://initiumlab.com/images/about_icon.svg"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"About"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"http://initiumlab.com/blog"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.navLink","div.navLink",1976235631),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),"http://initiumlab.com/images/blog_icon.svg"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Blog"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.section","div.section",-982365435),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.inner-content","div.inner-content",-184552778),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"\u5E36\u4E00\u672C\u66F8\u865B\u5EA6\u6642\u5149\uFF1F\u9999\u6E2F20\u8655\u8B80\u66F8\u8056\u5730"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i","i",-1386841315),"\u7AEF\u50B3\u5A92\u7279\u7D04\u64B0\u7A3F\u4EBA \u8607\u9748\u8335 \u767C\u81EA\u9999\u6E2F"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"\u9999\u6E2F\u662F\u4E00\u500B\u9069\u5408\u95B1\u8B80\u7684\u57CE\u5E02\u55CE\uFF1F\u5982\u679C\u6211\u5011\u5C07\u95B1\u8B80\u4E0D\u50C5\u7406\u89E3\u70BA\u4E00\u4EF6\u53EF\u4EE5\u5728\u5716\u66F8\u9928\u3001\u5B78\u6821\u3001\u5BB6\u88CF\u767C\u751F\u7684\u4E8B\u3002\u53BB\u9732\u5929\u5730\u65B9\u8B80\u66F8\uFF0C\u5167\u5728\u8207\u5916\u5728\u4E16\u754C\u76F8\u9047\uFF0C\u5F9E\u4F86\u662F\u95B1\u8B80\u7684\u6A02\u8DA3\u4E4B\u4E00\u3002"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"\u53E6\u4E00\u65B9\u9762\uFF0C\u70BA\u4E86\u4FDD\u5B58\u9999\u6E2F\u516C\u5171\u7A7A\u9593\u800C\u767C\u8072\u4E4B\u9918\uFF0C\u4E5F\u8A31\u53EF\u4EE5\u591A\u60F3\u60F3\u5982\u4F55\u4F7F\u7528\u9019\u4E9B\u7A7A\u9593\u3002\u6BD4\u5982\uFF0C\u4E0D\u59A8\u628A\u8996\u7DDA\u7531\u624B\u6A5F\u79FB\u958B\uFF0C\u62FF\u8457\u4E00\u672C\u66F8\uFF0C\u4E00\u500B\u4EBA\uFF0C\u53BB\u90FD\u5E02\u65B9\u4FBF\u50FB\u975C\u5730\u65B9\u975C\u975C\u5EA6\u904E\u4E00\u5C0F\u6642\u3002"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"\u4EE5\u95B1\u8B80\u7684\u89D2\u5EA6\u8003\u5BDF\u9999\u6E2F\u516C\u5171\u7A7A\u9593\uFF0C\u767C\u6398\u9019\u4E9B\u7A7A\u9593\u63A5\u901A\u5167\u5FC3\u5411\u5EA6\u7684\u53EF\u80FD\u6027\uFF0C\u6211\u5011\u9080\u8ACB\u4E8C\u5341\u4F4D\u4E0D\u540C\u80CC\u666F\u7684\u53D7\u8A2A\u8005\uFF0C\u8B1B\u8B1B\u54EA\u4E9B\u662F\u4ED6\u5011\u559C\u611B\u7684\u8B80\u66F8\u5730\u65B9\uFF0C\u5206\u6578\u661F\u671F\u520A\u51FA\uFF0C\u7576\u4E2D\u6709\u516C\u5712\u6709\u6D77\u6FF1\uFF0C\u4E5F\u6709\u4EE5\u4E0D\u975C\u70BA\u975C\u7684\u6E2F\u9435\u8ECA\u5EC2\uFF01\u5728\u9019\u4E9B\u5730\u65B9\uFF0C\u7531\u5167\u800C\u5916\uFF0C\u4E16\u754C\u662F\u5B89\u8B10\u7684\uFF0C\u5145\u5BE6\u7684\uFF0C\u958B\u653E\u7684\u2026\u2026\u662F\u8B02\u4E00\u7A2E\u300C\u7F8E\u597D\u751F\u6D3B\u300D\u3002"], null)], null)], null),(function (){var iter__17591__auto__ = (function scrolll$core$home_view_$_iter__24616(s__24617){
return (new cljs.core.LazySeq(null,(function (){
var s__24617__$1 = s__24617;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__24617__$1);
if(temp__4425__auto__){
var s__24617__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__24617__$2)){
var c__17589__auto__ = cljs.core.chunk_first.call(null,s__24617__$2);
var size__17590__auto__ = cljs.core.count.call(null,c__17589__auto__);
var b__24619 = cljs.core.chunk_buffer.call(null,size__17590__auto__);
if((function (){var i__24618 = (0);
while(true){
if((i__24618 < size__17590__auto__)){
var vec__24646 = cljs.core._nth.call(null,c__17589__auto__,i__24618);
var section_id = cljs.core.nth.call(null,vec__24646,(0),null);
var section = cljs.core.nth.call(null,vec__24646,(1),null);
cljs.core.chunk_append.call(null,b__24619,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.section","div.section",-982365435),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-mouse-enter","on-mouse-enter",-1664921661),((function (i__24618,vec__24646,section_id,section,c__17589__auto__,size__17590__auto__,b__24619,s__24617__$2,temp__4425__auto__){
return (function (){
var temp__4423__auto__ = new cljs.core.Keyword(null,"map","map",1371690461).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,scrolll.core.leaflet_state));
if(cljs.core.truth_(temp__4423__auto__)){
var map = temp__4423__auto__;
scrolll.core.remove_current_layers.call(null);

var temp__4423__auto___24672__$1 = new cljs.core.Keyword(null,"polylines","polylines",11540639).cljs$core$IFn$_invoke$arity$1(section);
if(cljs.core.truth_(temp__4423__auto___24672__$1)){
var polylines_24673 = temp__4423__auto___24672__$1;
var seq__24647_24674 = cljs.core.seq.call(null,polylines_24673);
var chunk__24648_24675 = null;
var count__24649_24676 = (0);
var i__24650_24677 = (0);
while(true){
if((i__24650_24677 < count__24649_24676)){
var polyline_24678 = cljs.core._nth.call(null,chunk__24648_24675,i__24650_24677);
scrolll.core.polyline_to_leaflet.call(null,polyline_24678);

var G__24679 = seq__24647_24674;
var G__24680 = chunk__24648_24675;
var G__24681 = count__24649_24676;
var G__24682 = (i__24650_24677 + (1));
seq__24647_24674 = G__24679;
chunk__24648_24675 = G__24680;
count__24649_24676 = G__24681;
i__24650_24677 = G__24682;
continue;
} else {
var temp__4425__auto___24683__$1 = cljs.core.seq.call(null,seq__24647_24674);
if(temp__4425__auto___24683__$1){
var seq__24647_24684__$1 = temp__4425__auto___24683__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24647_24684__$1)){
var c__17622__auto___24685 = cljs.core.chunk_first.call(null,seq__24647_24684__$1);
var G__24686 = cljs.core.chunk_rest.call(null,seq__24647_24684__$1);
var G__24687 = c__17622__auto___24685;
var G__24688 = cljs.core.count.call(null,c__17622__auto___24685);
var G__24689 = (0);
seq__24647_24674 = G__24686;
chunk__24648_24675 = G__24687;
count__24649_24676 = G__24688;
i__24650_24677 = G__24689;
continue;
} else {
var polyline_24690 = cljs.core.first.call(null,seq__24647_24684__$1);
scrolll.core.polyline_to_leaflet.call(null,polyline_24690);

var G__24691 = cljs.core.next.call(null,seq__24647_24684__$1);
var G__24692 = null;
var G__24693 = (0);
var G__24694 = (0);
seq__24647_24674 = G__24691;
chunk__24648_24675 = G__24692;
count__24649_24676 = G__24693;
i__24650_24677 = G__24694;
continue;
}
} else {
}
}
break;
}
} else {
}

var temp__4423__auto____$1 = new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(section);
if(cljs.core.truth_(temp__4423__auto____$1)){
var position = temp__4423__auto____$1;
return scrolll.core.position_to_leaflet.call(null,position,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"popup","popup",635890211),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(section)], null));
} else {
return null;
}
} else {
return null;
}
});})(i__24618,vec__24646,section_id,section,c__17589__auto__,size__17590__auto__,b__24619,s__24617__$2,temp__4425__auto__))
], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.inner-content","div.inner-content",-184552778),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(section)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),new cljs.core.Keyword(null,"image-url","image-url",-1064784064).cljs$core$IFn$_invoke$arity$1(section)], null)], null),(function (){var iter__17591__auto__ = ((function (i__24618,vec__24646,section_id,section,c__17589__auto__,size__17590__auto__,b__24619,s__24617__$2,temp__4425__auto__){
return (function scrolll$core$home_view_$_iter__24616_$_iter__24651(s__24652){
return (new cljs.core.LazySeq(null,((function (i__24618,vec__24646,section_id,section,c__17589__auto__,size__17590__auto__,b__24619,s__24617__$2,temp__4425__auto__){
return (function (){
var s__24652__$1 = s__24652;
while(true){
var temp__4425__auto____$1 = cljs.core.seq.call(null,s__24652__$1);
if(temp__4425__auto____$1){
var s__24652__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__24652__$2)){
var c__17589__auto____$1 = cljs.core.chunk_first.call(null,s__24652__$2);
var size__17590__auto____$1 = cljs.core.count.call(null,c__17589__auto____$1);
var b__24654 = cljs.core.chunk_buffer.call(null,size__17590__auto____$1);
if((function (){var i__24653 = (0);
while(true){
if((i__24653 < size__17590__auto____$1)){
var vec__24657 = cljs.core._nth.call(null,c__17589__auto____$1,i__24653);
var p_id = cljs.core.nth.call(null,vec__24657,(0),null);
var p = cljs.core.nth.call(null,vec__24657,(1),null);
cljs.core.chunk_append.call(null,b__24654,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),p], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str("section-"),cljs.core.str(section_id),cljs.core.str("-p-"),cljs.core.str(p_id)].join('')], null)));

var G__24695 = (i__24653 + (1));
i__24653 = G__24695;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24654),scrolll$core$home_view_$_iter__24616_$_iter__24651.call(null,cljs.core.chunk_rest.call(null,s__24652__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24654),null);
}
} else {
var vec__24658 = cljs.core.first.call(null,s__24652__$2);
var p_id = cljs.core.nth.call(null,vec__24658,(0),null);
var p = cljs.core.nth.call(null,vec__24658,(1),null);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),p], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str("section-"),cljs.core.str(section_id),cljs.core.str("-p-"),cljs.core.str(p_id)].join('')], null)),scrolll$core$home_view_$_iter__24616_$_iter__24651.call(null,cljs.core.rest.call(null,s__24652__$2)));
}
} else {
return null;
}
break;
}
});})(i__24618,vec__24646,section_id,section,c__17589__auto__,size__17590__auto__,b__24619,s__24617__$2,temp__4425__auto__))
,null,null));
});})(i__24618,vec__24646,section_id,section,c__17589__auto__,size__17590__auto__,b__24619,s__24617__$2,temp__4425__auto__))
;
return iter__17591__auto__.call(null,cljs.core.map_indexed.call(null,cljs.core.vector,new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(section)));
})()], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str("section-"),cljs.core.str(section_id)].join('')], null)));

var G__24696 = (i__24618 + (1));
i__24618 = G__24696;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24619),scrolll$core$home_view_$_iter__24616.call(null,cljs.core.chunk_rest.call(null,s__24617__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24619),null);
}
} else {
var vec__24659 = cljs.core.first.call(null,s__24617__$2);
var section_id = cljs.core.nth.call(null,vec__24659,(0),null);
var section = cljs.core.nth.call(null,vec__24659,(1),null);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.section","div.section",-982365435),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-mouse-enter","on-mouse-enter",-1664921661),((function (vec__24659,section_id,section,s__24617__$2,temp__4425__auto__){
return (function (){
var temp__4423__auto__ = new cljs.core.Keyword(null,"map","map",1371690461).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,scrolll.core.leaflet_state));
if(cljs.core.truth_(temp__4423__auto__)){
var map = temp__4423__auto__;
scrolll.core.remove_current_layers.call(null);

var temp__4423__auto___24697__$1 = new cljs.core.Keyword(null,"polylines","polylines",11540639).cljs$core$IFn$_invoke$arity$1(section);
if(cljs.core.truth_(temp__4423__auto___24697__$1)){
var polylines_24698 = temp__4423__auto___24697__$1;
var seq__24660_24699 = cljs.core.seq.call(null,polylines_24698);
var chunk__24661_24700 = null;
var count__24662_24701 = (0);
var i__24663_24702 = (0);
while(true){
if((i__24663_24702 < count__24662_24701)){
var polyline_24703 = cljs.core._nth.call(null,chunk__24661_24700,i__24663_24702);
scrolll.core.polyline_to_leaflet.call(null,polyline_24703);

var G__24704 = seq__24660_24699;
var G__24705 = chunk__24661_24700;
var G__24706 = count__24662_24701;
var G__24707 = (i__24663_24702 + (1));
seq__24660_24699 = G__24704;
chunk__24661_24700 = G__24705;
count__24662_24701 = G__24706;
i__24663_24702 = G__24707;
continue;
} else {
var temp__4425__auto___24708__$1 = cljs.core.seq.call(null,seq__24660_24699);
if(temp__4425__auto___24708__$1){
var seq__24660_24709__$1 = temp__4425__auto___24708__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24660_24709__$1)){
var c__17622__auto___24710 = cljs.core.chunk_first.call(null,seq__24660_24709__$1);
var G__24711 = cljs.core.chunk_rest.call(null,seq__24660_24709__$1);
var G__24712 = c__17622__auto___24710;
var G__24713 = cljs.core.count.call(null,c__17622__auto___24710);
var G__24714 = (0);
seq__24660_24699 = G__24711;
chunk__24661_24700 = G__24712;
count__24662_24701 = G__24713;
i__24663_24702 = G__24714;
continue;
} else {
var polyline_24715 = cljs.core.first.call(null,seq__24660_24709__$1);
scrolll.core.polyline_to_leaflet.call(null,polyline_24715);

var G__24716 = cljs.core.next.call(null,seq__24660_24709__$1);
var G__24717 = null;
var G__24718 = (0);
var G__24719 = (0);
seq__24660_24699 = G__24716;
chunk__24661_24700 = G__24717;
count__24662_24701 = G__24718;
i__24663_24702 = G__24719;
continue;
}
} else {
}
}
break;
}
} else {
}

var temp__4423__auto____$1 = new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(section);
if(cljs.core.truth_(temp__4423__auto____$1)){
var position = temp__4423__auto____$1;
return scrolll.core.position_to_leaflet.call(null,position,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"popup","popup",635890211),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(section)], null));
} else {
return null;
}
} else {
return null;
}
});})(vec__24659,section_id,section,s__24617__$2,temp__4425__auto__))
], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.inner-content","div.inner-content",-184552778),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(section)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),new cljs.core.Keyword(null,"image-url","image-url",-1064784064).cljs$core$IFn$_invoke$arity$1(section)], null)], null),(function (){var iter__17591__auto__ = ((function (vec__24659,section_id,section,s__24617__$2,temp__4425__auto__){
return (function scrolll$core$home_view_$_iter__24616_$_iter__24664(s__24665){
return (new cljs.core.LazySeq(null,((function (vec__24659,section_id,section,s__24617__$2,temp__4425__auto__){
return (function (){
var s__24665__$1 = s__24665;
while(true){
var temp__4425__auto____$1 = cljs.core.seq.call(null,s__24665__$1);
if(temp__4425__auto____$1){
var s__24665__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__24665__$2)){
var c__17589__auto__ = cljs.core.chunk_first.call(null,s__24665__$2);
var size__17590__auto__ = cljs.core.count.call(null,c__17589__auto__);
var b__24667 = cljs.core.chunk_buffer.call(null,size__17590__auto__);
if((function (){var i__24666 = (0);
while(true){
if((i__24666 < size__17590__auto__)){
var vec__24670 = cljs.core._nth.call(null,c__17589__auto__,i__24666);
var p_id = cljs.core.nth.call(null,vec__24670,(0),null);
var p = cljs.core.nth.call(null,vec__24670,(1),null);
cljs.core.chunk_append.call(null,b__24667,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),p], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str("section-"),cljs.core.str(section_id),cljs.core.str("-p-"),cljs.core.str(p_id)].join('')], null)));

var G__24720 = (i__24666 + (1));
i__24666 = G__24720;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24667),scrolll$core$home_view_$_iter__24616_$_iter__24664.call(null,cljs.core.chunk_rest.call(null,s__24665__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24667),null);
}
} else {
var vec__24671 = cljs.core.first.call(null,s__24665__$2);
var p_id = cljs.core.nth.call(null,vec__24671,(0),null);
var p = cljs.core.nth.call(null,vec__24671,(1),null);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),p], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str("section-"),cljs.core.str(section_id),cljs.core.str("-p-"),cljs.core.str(p_id)].join('')], null)),scrolll$core$home_view_$_iter__24616_$_iter__24664.call(null,cljs.core.rest.call(null,s__24665__$2)));
}
} else {
return null;
}
break;
}
});})(vec__24659,section_id,section,s__24617__$2,temp__4425__auto__))
,null,null));
});})(vec__24659,section_id,section,s__24617__$2,temp__4425__auto__))
;
return iter__17591__auto__.call(null,cljs.core.map_indexed.call(null,cljs.core.vector,new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(section)));
})()], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str("section-"),cljs.core.str(section_id)].join('')], null)),scrolll$core$home_view_$_iter__24616.call(null,cljs.core.rest.call(null,s__24617__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__17591__auto__.call(null,cljs.core.map_indexed.call(null,cljs.core.vector,scrolll.article.article));
})(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.section","div.section",-982365435),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.inner-content","div.inner-content",-184552778),"\u539F\u6587\u767C\u5E03\u65BC",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"\nhttps://theinitium.com/search/?q=%E5%B8%B6%E4%B8%80%E6%9C%AC%E6%9B%B8%E8%99%9B%E5%BA%A6%E6%99%82%E5%85%89"], null),"\u7AEF\u50B3\u5A92"], null),"\u3002"], null)], null)], null)], null);
});
scrolll.core.home_did_mount = (function scrolll$core$home_did_mount(){
var map = L.map("map").setView([22.300367,114.1679613],(13));
var tile_layer = L.tileLayer(scrolll.core.tile_layer_url,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"attribution","attribution",1937239286),"Map data &copy; [...]",new cljs.core.Keyword(null,"maxZoom","maxZoom",566190639),(18),new cljs.core.Keyword(null,"id","id",-1388402092),"sorpaas.p8mlb7ed",new cljs.core.Keyword(null,"accessToken","accessToken",1833707055),scrolll.core.mapbox_access_token], null)));
tile_layer.addTo(map);

return cljs.core.swap_BANG_.call(null,scrolll.core.leaflet_state,cljs.core.assoc,new cljs.core.Keyword(null,"map","map",1371690461),map);
});
scrolll.core.home_page = (function scrolll$core$home_page(){
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),scrolll.core.home_view,new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),scrolll.core.home_did_mount], null));
});
reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [scrolll.core.home_page], null),document.getElementById("app"));

//# sourceMappingURL=core.js.map?rel=1459482115139