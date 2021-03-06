// Compiled by ClojureScript 1.7.170 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),args], null));

return args;
});
figwheel.client.autoload_QMARK_ = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?(function (){
var pred__23791 = cljs.core._EQ_;
var expr__23792 = (function (){var or__16819__auto__ = (function (){try{return localStorage.getItem("figwheel_autoload");
}catch (e23795){if((e23795 instanceof Error)){
var e = e23795;
return false;
} else {
throw e23795;

}
}})();
if(cljs.core.truth_(or__16819__auto__)){
return or__16819__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__23791.call(null,"true",expr__23792))){
return true;
} else {
if(cljs.core.truth_(pred__23791.call(null,"false",expr__23792))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__23792)].join('')));
}
}
}):(function (){
return true;
}));
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
try{localStorage.setItem("figwheel_autoload",cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));

return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Figwheel autoloading "),cljs.core.str((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));
}catch (e23797){if((e23797 instanceof Error)){
var e = e23797;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Unable to access localStorage")].join(''));
} else {
throw e23797;

}
}} else {
return null;
}
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
figwheel.client.console_print = (function figwheel$client$console_print(args){
console.log.apply(console,cljs.core.into_array.call(null,args));

return args;
});
figwheel.client.repl_print_fn = (function figwheel$client$repl_print_fn(var_args){
var args__17884__auto__ = [];
var len__17877__auto___23799 = arguments.length;
var i__17878__auto___23800 = (0);
while(true){
if((i__17878__auto___23800 < len__17877__auto___23799)){
args__17884__auto__.push((arguments[i__17878__auto___23800]));

var G__23801 = (i__17878__auto___23800 + (1));
i__17878__auto___23800 = G__23801;
continue;
} else {
}
break;
}

var argseq__17885__auto__ = ((((0) < args__17884__auto__.length))?(new cljs.core.IndexedSeq(args__17884__auto__.slice((0)),(0))):null);
return figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__17885__auto__);
});

figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));

return null;
});

figwheel.client.repl_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_print_fn.cljs$lang$applyTo = (function (seq23798){
return figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23798));
});
figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = figwheel.client.repl_print_fn;
});
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__23802){
var map__23805 = p__23802;
var map__23805__$1 = ((((!((map__23805 == null)))?((((map__23805.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23805.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23805):map__23805);
var message = cljs.core.get.call(null,map__23805__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__23805__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__16819__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__16819__auto__)){
return or__16819__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__16807__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__16807__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__16807__auto__;
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
var c__19454__auto___23967 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19454__auto___23967,ch){
return (function (){
var f__19455__auto__ = (function (){var switch__19342__auto__ = ((function (c__19454__auto___23967,ch){
return (function (state_23936){
var state_val_23937 = (state_23936[(1)]);
if((state_val_23937 === (7))){
var inst_23932 = (state_23936[(2)]);
var state_23936__$1 = state_23936;
var statearr_23938_23968 = state_23936__$1;
(statearr_23938_23968[(2)] = inst_23932);

(statearr_23938_23968[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23937 === (1))){
var state_23936__$1 = state_23936;
var statearr_23939_23969 = state_23936__$1;
(statearr_23939_23969[(2)] = null);

(statearr_23939_23969[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23937 === (4))){
var inst_23889 = (state_23936[(7)]);
var inst_23889__$1 = (state_23936[(2)]);
var state_23936__$1 = (function (){var statearr_23940 = state_23936;
(statearr_23940[(7)] = inst_23889__$1);

return statearr_23940;
})();
if(cljs.core.truth_(inst_23889__$1)){
var statearr_23941_23970 = state_23936__$1;
(statearr_23941_23970[(1)] = (5));

} else {
var statearr_23942_23971 = state_23936__$1;
(statearr_23942_23971[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23937 === (15))){
var inst_23896 = (state_23936[(8)]);
var inst_23911 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_23896);
var inst_23912 = cljs.core.first.call(null,inst_23911);
var inst_23913 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_23912);
var inst_23914 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_23913)].join('');
var inst_23915 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_23914);
var state_23936__$1 = state_23936;
var statearr_23943_23972 = state_23936__$1;
(statearr_23943_23972[(2)] = inst_23915);

(statearr_23943_23972[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23937 === (13))){
var inst_23920 = (state_23936[(2)]);
var state_23936__$1 = state_23936;
var statearr_23944_23973 = state_23936__$1;
(statearr_23944_23973[(2)] = inst_23920);

(statearr_23944_23973[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23937 === (6))){
var state_23936__$1 = state_23936;
var statearr_23945_23974 = state_23936__$1;
(statearr_23945_23974[(2)] = null);

(statearr_23945_23974[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23937 === (17))){
var inst_23918 = (state_23936[(2)]);
var state_23936__$1 = state_23936;
var statearr_23946_23975 = state_23936__$1;
(statearr_23946_23975[(2)] = inst_23918);

(statearr_23946_23975[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23937 === (3))){
var inst_23934 = (state_23936[(2)]);
var state_23936__$1 = state_23936;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23936__$1,inst_23934);
} else {
if((state_val_23937 === (12))){
var inst_23895 = (state_23936[(9)]);
var inst_23909 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_23895,opts);
var state_23936__$1 = state_23936;
if(cljs.core.truth_(inst_23909)){
var statearr_23947_23976 = state_23936__$1;
(statearr_23947_23976[(1)] = (15));

} else {
var statearr_23948_23977 = state_23936__$1;
(statearr_23948_23977[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23937 === (2))){
var state_23936__$1 = state_23936;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23936__$1,(4),ch);
} else {
if((state_val_23937 === (11))){
var inst_23896 = (state_23936[(8)]);
var inst_23901 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_23902 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_23896);
var inst_23903 = cljs.core.async.timeout.call(null,(1000));
var inst_23904 = [inst_23902,inst_23903];
var inst_23905 = (new cljs.core.PersistentVector(null,2,(5),inst_23901,inst_23904,null));
var state_23936__$1 = state_23936;
return cljs.core.async.ioc_alts_BANG_.call(null,state_23936__$1,(14),inst_23905);
} else {
if((state_val_23937 === (9))){
var inst_23896 = (state_23936[(8)]);
var inst_23922 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_23923 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_23896);
var inst_23924 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_23923);
var inst_23925 = [cljs.core.str("Not loading: "),cljs.core.str(inst_23924)].join('');
var inst_23926 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_23925);
var state_23936__$1 = (function (){var statearr_23949 = state_23936;
(statearr_23949[(10)] = inst_23922);

return statearr_23949;
})();
var statearr_23950_23978 = state_23936__$1;
(statearr_23950_23978[(2)] = inst_23926);

(statearr_23950_23978[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23937 === (5))){
var inst_23889 = (state_23936[(7)]);
var inst_23891 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_23892 = (new cljs.core.PersistentArrayMap(null,2,inst_23891,null));
var inst_23893 = (new cljs.core.PersistentHashSet(null,inst_23892,null));
var inst_23894 = figwheel.client.focus_msgs.call(null,inst_23893,inst_23889);
var inst_23895 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_23894);
var inst_23896 = cljs.core.first.call(null,inst_23894);
var inst_23897 = figwheel.client.autoload_QMARK_.call(null);
var state_23936__$1 = (function (){var statearr_23951 = state_23936;
(statearr_23951[(8)] = inst_23896);

(statearr_23951[(9)] = inst_23895);

return statearr_23951;
})();
if(cljs.core.truth_(inst_23897)){
var statearr_23952_23979 = state_23936__$1;
(statearr_23952_23979[(1)] = (8));

} else {
var statearr_23953_23980 = state_23936__$1;
(statearr_23953_23980[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23937 === (14))){
var inst_23907 = (state_23936[(2)]);
var state_23936__$1 = state_23936;
var statearr_23954_23981 = state_23936__$1;
(statearr_23954_23981[(2)] = inst_23907);

(statearr_23954_23981[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23937 === (16))){
var state_23936__$1 = state_23936;
var statearr_23955_23982 = state_23936__$1;
(statearr_23955_23982[(2)] = null);

(statearr_23955_23982[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23937 === (10))){
var inst_23928 = (state_23936[(2)]);
var state_23936__$1 = (function (){var statearr_23956 = state_23936;
(statearr_23956[(11)] = inst_23928);

return statearr_23956;
})();
var statearr_23957_23983 = state_23936__$1;
(statearr_23957_23983[(2)] = null);

(statearr_23957_23983[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23937 === (8))){
var inst_23895 = (state_23936[(9)]);
var inst_23899 = figwheel.client.reload_file_state_QMARK_.call(null,inst_23895,opts);
var state_23936__$1 = state_23936;
if(cljs.core.truth_(inst_23899)){
var statearr_23958_23984 = state_23936__$1;
(statearr_23958_23984[(1)] = (11));

} else {
var statearr_23959_23985 = state_23936__$1;
(statearr_23959_23985[(1)] = (12));

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
});})(c__19454__auto___23967,ch))
;
return ((function (switch__19342__auto__,c__19454__auto___23967,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__19343__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__19343__auto____0 = (function (){
var statearr_23963 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23963[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__19343__auto__);

(statearr_23963[(1)] = (1));

return statearr_23963;
});
var figwheel$client$file_reloader_plugin_$_state_machine__19343__auto____1 = (function (state_23936){
while(true){
var ret_value__19344__auto__ = (function (){try{while(true){
var result__19345__auto__ = switch__19342__auto__.call(null,state_23936);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19345__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19345__auto__;
}
break;
}
}catch (e23964){if((e23964 instanceof Object)){
var ex__19346__auto__ = e23964;
var statearr_23965_23986 = state_23936;
(statearr_23965_23986[(5)] = ex__19346__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23936);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23964;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19344__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23987 = state_23936;
state_23936 = G__23987;
continue;
} else {
return ret_value__19344__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__19343__auto__ = function(state_23936){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__19343__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__19343__auto____1.call(this,state_23936);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__19343__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__19343__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__19343__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__19343__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__19343__auto__;
})()
;})(switch__19342__auto__,c__19454__auto___23967,ch))
})();
var state__19456__auto__ = (function (){var statearr_23966 = f__19455__auto__.call(null);
(statearr_23966[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19454__auto___23967);

return statearr_23966;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19456__auto__);
});})(c__19454__auto___23967,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__23988_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__23988_SHARP_));
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
var base_path_23995 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_23995){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_23993 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_23994 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = figwheel.client.repl_print_fn;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),figwheel.client.utils.eval_helper.call(null,code,opts)], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_23994;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_23993;
}}catch (e23992){if((e23992 instanceof Error)){
var e = e23992;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_23995], null));
} else {
var e = e23992;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_23995))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = {};
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__23996){
var map__24003 = p__23996;
var map__24003__$1 = ((((!((map__24003 == null)))?((((map__24003.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24003.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24003):map__24003);
var opts = map__24003__$1;
var build_id = cljs.core.get.call(null,map__24003__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__24003,map__24003__$1,opts,build_id){
return (function (p__24005){
var vec__24006 = p__24005;
var map__24007 = cljs.core.nth.call(null,vec__24006,(0),null);
var map__24007__$1 = ((((!((map__24007 == null)))?((((map__24007.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24007.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24007):map__24007);
var msg = map__24007__$1;
var msg_name = cljs.core.get.call(null,map__24007__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__24006,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__24006,map__24007,map__24007__$1,msg,msg_name,_,map__24003,map__24003__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__24006,map__24007,map__24007__$1,msg,msg_name,_,map__24003,map__24003__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__24003,map__24003__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__24013){
var vec__24014 = p__24013;
var map__24015 = cljs.core.nth.call(null,vec__24014,(0),null);
var map__24015__$1 = ((((!((map__24015 == null)))?((((map__24015.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24015.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24015):map__24015);
var msg = map__24015__$1;
var msg_name = cljs.core.get.call(null,map__24015__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__24014,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__24017){
var map__24027 = p__24017;
var map__24027__$1 = ((((!((map__24027 == null)))?((((map__24027.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24027.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24027):map__24027);
var on_compile_warning = cljs.core.get.call(null,map__24027__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__24027__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__24027,map__24027__$1,on_compile_warning,on_compile_fail){
return (function (p__24029){
var vec__24030 = p__24029;
var map__24031 = cljs.core.nth.call(null,vec__24030,(0),null);
var map__24031__$1 = ((((!((map__24031 == null)))?((((map__24031.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24031.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24031):map__24031);
var msg = map__24031__$1;
var msg_name = cljs.core.get.call(null,map__24031__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__24030,(1));
var pred__24033 = cljs.core._EQ_;
var expr__24034 = msg_name;
if(cljs.core.truth_(pred__24033.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__24034))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__24033.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__24034))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__24027,map__24027__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__19454__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19454__auto__,msg_hist,msg_names,msg){
return (function (){
var f__19455__auto__ = (function (){var switch__19342__auto__ = ((function (c__19454__auto__,msg_hist,msg_names,msg){
return (function (state_24250){
var state_val_24251 = (state_24250[(1)]);
if((state_val_24251 === (7))){
var inst_24174 = (state_24250[(2)]);
var state_24250__$1 = state_24250;
if(cljs.core.truth_(inst_24174)){
var statearr_24252_24298 = state_24250__$1;
(statearr_24252_24298[(1)] = (8));

} else {
var statearr_24253_24299 = state_24250__$1;
(statearr_24253_24299[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24251 === (20))){
var inst_24244 = (state_24250[(2)]);
var state_24250__$1 = state_24250;
var statearr_24254_24300 = state_24250__$1;
(statearr_24254_24300[(2)] = inst_24244);

(statearr_24254_24300[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24251 === (27))){
var inst_24240 = (state_24250[(2)]);
var state_24250__$1 = state_24250;
var statearr_24255_24301 = state_24250__$1;
(statearr_24255_24301[(2)] = inst_24240);

(statearr_24255_24301[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24251 === (1))){
var inst_24167 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_24250__$1 = state_24250;
if(cljs.core.truth_(inst_24167)){
var statearr_24256_24302 = state_24250__$1;
(statearr_24256_24302[(1)] = (2));

} else {
var statearr_24257_24303 = state_24250__$1;
(statearr_24257_24303[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24251 === (24))){
var inst_24242 = (state_24250[(2)]);
var state_24250__$1 = state_24250;
var statearr_24258_24304 = state_24250__$1;
(statearr_24258_24304[(2)] = inst_24242);

(statearr_24258_24304[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24251 === (4))){
var inst_24248 = (state_24250[(2)]);
var state_24250__$1 = state_24250;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24250__$1,inst_24248);
} else {
if((state_val_24251 === (15))){
var inst_24246 = (state_24250[(2)]);
var state_24250__$1 = state_24250;
var statearr_24259_24305 = state_24250__$1;
(statearr_24259_24305[(2)] = inst_24246);

(statearr_24259_24305[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24251 === (21))){
var inst_24205 = (state_24250[(2)]);
var state_24250__$1 = state_24250;
var statearr_24260_24306 = state_24250__$1;
(statearr_24260_24306[(2)] = inst_24205);

(statearr_24260_24306[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24251 === (31))){
var inst_24229 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_24250__$1 = state_24250;
if(cljs.core.truth_(inst_24229)){
var statearr_24261_24307 = state_24250__$1;
(statearr_24261_24307[(1)] = (34));

} else {
var statearr_24262_24308 = state_24250__$1;
(statearr_24262_24308[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24251 === (32))){
var inst_24238 = (state_24250[(2)]);
var state_24250__$1 = state_24250;
var statearr_24263_24309 = state_24250__$1;
(statearr_24263_24309[(2)] = inst_24238);

(statearr_24263_24309[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24251 === (33))){
var inst_24227 = (state_24250[(2)]);
var state_24250__$1 = state_24250;
var statearr_24264_24310 = state_24250__$1;
(statearr_24264_24310[(2)] = inst_24227);

(statearr_24264_24310[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24251 === (13))){
var inst_24188 = figwheel.client.heads_up.clear.call(null);
var state_24250__$1 = state_24250;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24250__$1,(16),inst_24188);
} else {
if((state_val_24251 === (22))){
var inst_24209 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_24210 = figwheel.client.heads_up.append_message.call(null,inst_24209);
var state_24250__$1 = state_24250;
var statearr_24265_24311 = state_24250__$1;
(statearr_24265_24311[(2)] = inst_24210);

(statearr_24265_24311[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24251 === (36))){
var inst_24236 = (state_24250[(2)]);
var state_24250__$1 = state_24250;
var statearr_24266_24312 = state_24250__$1;
(statearr_24266_24312[(2)] = inst_24236);

(statearr_24266_24312[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24251 === (29))){
var inst_24220 = (state_24250[(2)]);
var state_24250__$1 = state_24250;
var statearr_24267_24313 = state_24250__$1;
(statearr_24267_24313[(2)] = inst_24220);

(statearr_24267_24313[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24251 === (6))){
var inst_24169 = (state_24250[(7)]);
var state_24250__$1 = state_24250;
var statearr_24268_24314 = state_24250__$1;
(statearr_24268_24314[(2)] = inst_24169);

(statearr_24268_24314[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24251 === (28))){
var inst_24216 = (state_24250[(2)]);
var inst_24217 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_24218 = figwheel.client.heads_up.display_warning.call(null,inst_24217);
var state_24250__$1 = (function (){var statearr_24269 = state_24250;
(statearr_24269[(8)] = inst_24216);

return statearr_24269;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24250__$1,(29),inst_24218);
} else {
if((state_val_24251 === (25))){
var inst_24214 = figwheel.client.heads_up.clear.call(null);
var state_24250__$1 = state_24250;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24250__$1,(28),inst_24214);
} else {
if((state_val_24251 === (34))){
var inst_24231 = figwheel.client.heads_up.flash_loaded.call(null);
var state_24250__$1 = state_24250;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24250__$1,(37),inst_24231);
} else {
if((state_val_24251 === (17))){
var inst_24196 = (state_24250[(2)]);
var state_24250__$1 = state_24250;
var statearr_24270_24315 = state_24250__$1;
(statearr_24270_24315[(2)] = inst_24196);

(statearr_24270_24315[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24251 === (3))){
var inst_24186 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_24250__$1 = state_24250;
if(cljs.core.truth_(inst_24186)){
var statearr_24271_24316 = state_24250__$1;
(statearr_24271_24316[(1)] = (13));

} else {
var statearr_24272_24317 = state_24250__$1;
(statearr_24272_24317[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24251 === (12))){
var inst_24182 = (state_24250[(2)]);
var state_24250__$1 = state_24250;
var statearr_24273_24318 = state_24250__$1;
(statearr_24273_24318[(2)] = inst_24182);

(statearr_24273_24318[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24251 === (2))){
var inst_24169 = (state_24250[(7)]);
var inst_24169__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_24250__$1 = (function (){var statearr_24274 = state_24250;
(statearr_24274[(7)] = inst_24169__$1);

return statearr_24274;
})();
if(cljs.core.truth_(inst_24169__$1)){
var statearr_24275_24319 = state_24250__$1;
(statearr_24275_24319[(1)] = (5));

} else {
var statearr_24276_24320 = state_24250__$1;
(statearr_24276_24320[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24251 === (23))){
var inst_24212 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_24250__$1 = state_24250;
if(cljs.core.truth_(inst_24212)){
var statearr_24277_24321 = state_24250__$1;
(statearr_24277_24321[(1)] = (25));

} else {
var statearr_24278_24322 = state_24250__$1;
(statearr_24278_24322[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24251 === (35))){
var state_24250__$1 = state_24250;
var statearr_24279_24323 = state_24250__$1;
(statearr_24279_24323[(2)] = null);

(statearr_24279_24323[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24251 === (19))){
var inst_24207 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_24250__$1 = state_24250;
if(cljs.core.truth_(inst_24207)){
var statearr_24280_24324 = state_24250__$1;
(statearr_24280_24324[(1)] = (22));

} else {
var statearr_24281_24325 = state_24250__$1;
(statearr_24281_24325[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24251 === (11))){
var inst_24178 = (state_24250[(2)]);
var state_24250__$1 = state_24250;
var statearr_24282_24326 = state_24250__$1;
(statearr_24282_24326[(2)] = inst_24178);

(statearr_24282_24326[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24251 === (9))){
var inst_24180 = figwheel.client.heads_up.clear.call(null);
var state_24250__$1 = state_24250;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24250__$1,(12),inst_24180);
} else {
if((state_val_24251 === (5))){
var inst_24171 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_24250__$1 = state_24250;
var statearr_24283_24327 = state_24250__$1;
(statearr_24283_24327[(2)] = inst_24171);

(statearr_24283_24327[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24251 === (14))){
var inst_24198 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_24250__$1 = state_24250;
if(cljs.core.truth_(inst_24198)){
var statearr_24284_24328 = state_24250__$1;
(statearr_24284_24328[(1)] = (18));

} else {
var statearr_24285_24329 = state_24250__$1;
(statearr_24285_24329[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24251 === (26))){
var inst_24222 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_24250__$1 = state_24250;
if(cljs.core.truth_(inst_24222)){
var statearr_24286_24330 = state_24250__$1;
(statearr_24286_24330[(1)] = (30));

} else {
var statearr_24287_24331 = state_24250__$1;
(statearr_24287_24331[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24251 === (16))){
var inst_24190 = (state_24250[(2)]);
var inst_24191 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_24192 = figwheel.client.format_messages.call(null,inst_24191);
var inst_24193 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_24194 = figwheel.client.heads_up.display_error.call(null,inst_24192,inst_24193);
var state_24250__$1 = (function (){var statearr_24288 = state_24250;
(statearr_24288[(9)] = inst_24190);

return statearr_24288;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24250__$1,(17),inst_24194);
} else {
if((state_val_24251 === (30))){
var inst_24224 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_24225 = figwheel.client.heads_up.display_warning.call(null,inst_24224);
var state_24250__$1 = state_24250;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24250__$1,(33),inst_24225);
} else {
if((state_val_24251 === (10))){
var inst_24184 = (state_24250[(2)]);
var state_24250__$1 = state_24250;
var statearr_24289_24332 = state_24250__$1;
(statearr_24289_24332[(2)] = inst_24184);

(statearr_24289_24332[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24251 === (18))){
var inst_24200 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_24201 = figwheel.client.format_messages.call(null,inst_24200);
var inst_24202 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_24203 = figwheel.client.heads_up.display_error.call(null,inst_24201,inst_24202);
var state_24250__$1 = state_24250;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24250__$1,(21),inst_24203);
} else {
if((state_val_24251 === (37))){
var inst_24233 = (state_24250[(2)]);
var state_24250__$1 = state_24250;
var statearr_24290_24333 = state_24250__$1;
(statearr_24290_24333[(2)] = inst_24233);

(statearr_24290_24333[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24251 === (8))){
var inst_24176 = figwheel.client.heads_up.flash_loaded.call(null);
var state_24250__$1 = state_24250;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24250__$1,(11),inst_24176);
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
});})(c__19454__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__19342__auto__,c__19454__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19343__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19343__auto____0 = (function (){
var statearr_24294 = [null,null,null,null,null,null,null,null,null,null];
(statearr_24294[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19343__auto__);

(statearr_24294[(1)] = (1));

return statearr_24294;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19343__auto____1 = (function (state_24250){
while(true){
var ret_value__19344__auto__ = (function (){try{while(true){
var result__19345__auto__ = switch__19342__auto__.call(null,state_24250);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19345__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19345__auto__;
}
break;
}
}catch (e24295){if((e24295 instanceof Object)){
var ex__19346__auto__ = e24295;
var statearr_24296_24334 = state_24250;
(statearr_24296_24334[(5)] = ex__19346__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24250);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24295;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19344__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24335 = state_24250;
state_24250 = G__24335;
continue;
} else {
return ret_value__19344__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19343__auto__ = function(state_24250){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19343__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19343__auto____1.call(this,state_24250);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19343__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19343__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19343__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19343__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19343__auto__;
})()
;})(switch__19342__auto__,c__19454__auto__,msg_hist,msg_names,msg))
})();
var state__19456__auto__ = (function (){var statearr_24297 = f__19455__auto__.call(null);
(statearr_24297[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19454__auto__);

return statearr_24297;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19456__auto__);
});})(c__19454__auto__,msg_hist,msg_names,msg))
);

return c__19454__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__19454__auto___24398 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19454__auto___24398,ch){
return (function (){
var f__19455__auto__ = (function (){var switch__19342__auto__ = ((function (c__19454__auto___24398,ch){
return (function (state_24381){
var state_val_24382 = (state_24381[(1)]);
if((state_val_24382 === (1))){
var state_24381__$1 = state_24381;
var statearr_24383_24399 = state_24381__$1;
(statearr_24383_24399[(2)] = null);

(statearr_24383_24399[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24382 === (2))){
var state_24381__$1 = state_24381;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24381__$1,(4),ch);
} else {
if((state_val_24382 === (3))){
var inst_24379 = (state_24381[(2)]);
var state_24381__$1 = state_24381;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24381__$1,inst_24379);
} else {
if((state_val_24382 === (4))){
var inst_24369 = (state_24381[(7)]);
var inst_24369__$1 = (state_24381[(2)]);
var state_24381__$1 = (function (){var statearr_24384 = state_24381;
(statearr_24384[(7)] = inst_24369__$1);

return statearr_24384;
})();
if(cljs.core.truth_(inst_24369__$1)){
var statearr_24385_24400 = state_24381__$1;
(statearr_24385_24400[(1)] = (5));

} else {
var statearr_24386_24401 = state_24381__$1;
(statearr_24386_24401[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24382 === (5))){
var inst_24369 = (state_24381[(7)]);
var inst_24371 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_24369);
var state_24381__$1 = state_24381;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24381__$1,(8),inst_24371);
} else {
if((state_val_24382 === (6))){
var state_24381__$1 = state_24381;
var statearr_24387_24402 = state_24381__$1;
(statearr_24387_24402[(2)] = null);

(statearr_24387_24402[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24382 === (7))){
var inst_24377 = (state_24381[(2)]);
var state_24381__$1 = state_24381;
var statearr_24388_24403 = state_24381__$1;
(statearr_24388_24403[(2)] = inst_24377);

(statearr_24388_24403[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24382 === (8))){
var inst_24373 = (state_24381[(2)]);
var state_24381__$1 = (function (){var statearr_24389 = state_24381;
(statearr_24389[(8)] = inst_24373);

return statearr_24389;
})();
var statearr_24390_24404 = state_24381__$1;
(statearr_24390_24404[(2)] = null);

(statearr_24390_24404[(1)] = (2));


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
});})(c__19454__auto___24398,ch))
;
return ((function (switch__19342__auto__,c__19454__auto___24398,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__19343__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__19343__auto____0 = (function (){
var statearr_24394 = [null,null,null,null,null,null,null,null,null];
(statearr_24394[(0)] = figwheel$client$heads_up_plugin_$_state_machine__19343__auto__);

(statearr_24394[(1)] = (1));

return statearr_24394;
});
var figwheel$client$heads_up_plugin_$_state_machine__19343__auto____1 = (function (state_24381){
while(true){
var ret_value__19344__auto__ = (function (){try{while(true){
var result__19345__auto__ = switch__19342__auto__.call(null,state_24381);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19345__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19345__auto__;
}
break;
}
}catch (e24395){if((e24395 instanceof Object)){
var ex__19346__auto__ = e24395;
var statearr_24396_24405 = state_24381;
(statearr_24396_24405[(5)] = ex__19346__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24381);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24395;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19344__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24406 = state_24381;
state_24381 = G__24406;
continue;
} else {
return ret_value__19344__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__19343__auto__ = function(state_24381){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__19343__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__19343__auto____1.call(this,state_24381);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__19343__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__19343__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__19343__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__19343__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__19343__auto__;
})()
;})(switch__19342__auto__,c__19454__auto___24398,ch))
})();
var state__19456__auto__ = (function (){var statearr_24397 = f__19455__auto__.call(null);
(statearr_24397[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19454__auto___24398);

return statearr_24397;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19456__auto__);
});})(c__19454__auto___24398,ch))
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
var c__19454__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19454__auto__){
return (function (){
var f__19455__auto__ = (function (){var switch__19342__auto__ = ((function (c__19454__auto__){
return (function (state_24427){
var state_val_24428 = (state_24427[(1)]);
if((state_val_24428 === (1))){
var inst_24422 = cljs.core.async.timeout.call(null,(3000));
var state_24427__$1 = state_24427;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24427__$1,(2),inst_24422);
} else {
if((state_val_24428 === (2))){
var inst_24424 = (state_24427[(2)]);
var inst_24425 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_24427__$1 = (function (){var statearr_24429 = state_24427;
(statearr_24429[(7)] = inst_24424);

return statearr_24429;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24427__$1,inst_24425);
} else {
return null;
}
}
});})(c__19454__auto__))
;
return ((function (switch__19342__auto__,c__19454__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__19343__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__19343__auto____0 = (function (){
var statearr_24433 = [null,null,null,null,null,null,null,null];
(statearr_24433[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__19343__auto__);

(statearr_24433[(1)] = (1));

return statearr_24433;
});
var figwheel$client$enforce_project_plugin_$_state_machine__19343__auto____1 = (function (state_24427){
while(true){
var ret_value__19344__auto__ = (function (){try{while(true){
var result__19345__auto__ = switch__19342__auto__.call(null,state_24427);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19345__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19345__auto__;
}
break;
}
}catch (e24434){if((e24434 instanceof Object)){
var ex__19346__auto__ = e24434;
var statearr_24435_24437 = state_24427;
(statearr_24435_24437[(5)] = ex__19346__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24427);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24434;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19344__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24438 = state_24427;
state_24427 = G__24438;
continue;
} else {
return ret_value__19344__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__19343__auto__ = function(state_24427){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__19343__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__19343__auto____1.call(this,state_24427);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__19343__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__19343__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__19343__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__19343__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__19343__auto__;
})()
;})(switch__19342__auto__,c__19454__auto__))
})();
var state__19456__auto__ = (function (){var statearr_24436 = f__19455__auto__.call(null);
(statearr_24436[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19454__auto__);

return statearr_24436;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19456__auto__);
});})(c__19454__auto__))
);

return c__19454__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__24439){
var map__24446 = p__24439;
var map__24446__$1 = ((((!((map__24446 == null)))?((((map__24446.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24446.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24446):map__24446);
var ed = map__24446__$1;
var formatted_exception = cljs.core.get.call(null,map__24446__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__24446__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__24446__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__24448_24452 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__24449_24453 = null;
var count__24450_24454 = (0);
var i__24451_24455 = (0);
while(true){
if((i__24451_24455 < count__24450_24454)){
var msg_24456 = cljs.core._nth.call(null,chunk__24449_24453,i__24451_24455);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_24456);

var G__24457 = seq__24448_24452;
var G__24458 = chunk__24449_24453;
var G__24459 = count__24450_24454;
var G__24460 = (i__24451_24455 + (1));
seq__24448_24452 = G__24457;
chunk__24449_24453 = G__24458;
count__24450_24454 = G__24459;
i__24451_24455 = G__24460;
continue;
} else {
var temp__4425__auto___24461 = cljs.core.seq.call(null,seq__24448_24452);
if(temp__4425__auto___24461){
var seq__24448_24462__$1 = temp__4425__auto___24461;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24448_24462__$1)){
var c__17622__auto___24463 = cljs.core.chunk_first.call(null,seq__24448_24462__$1);
var G__24464 = cljs.core.chunk_rest.call(null,seq__24448_24462__$1);
var G__24465 = c__17622__auto___24463;
var G__24466 = cljs.core.count.call(null,c__17622__auto___24463);
var G__24467 = (0);
seq__24448_24452 = G__24464;
chunk__24449_24453 = G__24465;
count__24450_24454 = G__24466;
i__24451_24455 = G__24467;
continue;
} else {
var msg_24468 = cljs.core.first.call(null,seq__24448_24462__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_24468);

var G__24469 = cljs.core.next.call(null,seq__24448_24462__$1);
var G__24470 = null;
var G__24471 = (0);
var G__24472 = (0);
seq__24448_24452 = G__24469;
chunk__24449_24453 = G__24470;
count__24450_24454 = G__24471;
i__24451_24455 = G__24472;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on file "),cljs.core.str(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__24473){
var map__24476 = p__24473;
var map__24476__$1 = ((((!((map__24476 == null)))?((((map__24476.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24476.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24476):map__24476);
var w = map__24476__$1;
var message = cljs.core.get.call(null,map__24476__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(message)].join(''));

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
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[figwheel.client.default_on_compile_warning,figwheel.client.default_on_jsload,true,figwheel.client.default_on_compile_fail,false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__16807__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__16807__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__16807__auto__;
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
var seq__24484 = cljs.core.seq.call(null,plugins);
var chunk__24485 = null;
var count__24486 = (0);
var i__24487 = (0);
while(true){
if((i__24487 < count__24486)){
var vec__24488 = cljs.core._nth.call(null,chunk__24485,i__24487);
var k = cljs.core.nth.call(null,vec__24488,(0),null);
var plugin = cljs.core.nth.call(null,vec__24488,(1),null);
if(cljs.core.truth_(plugin)){
var pl_24490 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__24484,chunk__24485,count__24486,i__24487,pl_24490,vec__24488,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_24490.call(null,msg_hist);
});})(seq__24484,chunk__24485,count__24486,i__24487,pl_24490,vec__24488,k,plugin))
);
} else {
}

var G__24491 = seq__24484;
var G__24492 = chunk__24485;
var G__24493 = count__24486;
var G__24494 = (i__24487 + (1));
seq__24484 = G__24491;
chunk__24485 = G__24492;
count__24486 = G__24493;
i__24487 = G__24494;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__24484);
if(temp__4425__auto__){
var seq__24484__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24484__$1)){
var c__17622__auto__ = cljs.core.chunk_first.call(null,seq__24484__$1);
var G__24495 = cljs.core.chunk_rest.call(null,seq__24484__$1);
var G__24496 = c__17622__auto__;
var G__24497 = cljs.core.count.call(null,c__17622__auto__);
var G__24498 = (0);
seq__24484 = G__24495;
chunk__24485 = G__24496;
count__24486 = G__24497;
i__24487 = G__24498;
continue;
} else {
var vec__24489 = cljs.core.first.call(null,seq__24484__$1);
var k = cljs.core.nth.call(null,vec__24489,(0),null);
var plugin = cljs.core.nth.call(null,vec__24489,(1),null);
if(cljs.core.truth_(plugin)){
var pl_24499 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__24484,chunk__24485,count__24486,i__24487,pl_24499,vec__24489,k,plugin,seq__24484__$1,temp__4425__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_24499.call(null,msg_hist);
});})(seq__24484,chunk__24485,count__24486,i__24487,pl_24499,vec__24489,k,plugin,seq__24484__$1,temp__4425__auto__))
);
} else {
}

var G__24500 = cljs.core.next.call(null,seq__24484__$1);
var G__24501 = null;
var G__24502 = (0);
var G__24503 = (0);
seq__24484 = G__24500;
chunk__24485 = G__24501;
count__24486 = G__24502;
i__24487 = G__24503;
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
var args24504 = [];
var len__17877__auto___24507 = arguments.length;
var i__17878__auto___24508 = (0);
while(true){
if((i__17878__auto___24508 < len__17877__auto___24507)){
args24504.push((arguments[i__17878__auto___24508]));

var G__24509 = (i__17878__auto___24508 + (1));
i__17878__auto___24508 = G__24509;
continue;
} else {
}
break;
}

var G__24506 = args24504.length;
switch (G__24506) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24504.length)].join('')));

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
var system_options = figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

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
var args__17884__auto__ = [];
var len__17877__auto___24515 = arguments.length;
var i__17878__auto___24516 = (0);
while(true){
if((i__17878__auto___24516 < len__17877__auto___24515)){
args__17884__auto__.push((arguments[i__17878__auto___24516]));

var G__24517 = (i__17878__auto___24516 + (1));
i__17878__auto___24516 = G__24517;
continue;
} else {
}
break;
}

var argseq__17885__auto__ = ((((0) < args__17884__auto__.length))?(new cljs.core.IndexedSeq(args__17884__auto__.slice((0)),(0))):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__17885__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__24512){
var map__24513 = p__24512;
var map__24513__$1 = ((((!((map__24513 == null)))?((((map__24513.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24513.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24513):map__24513);
var opts = map__24513__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq24511){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24511));
});

//# sourceMappingURL=client.js.map?rel=1459482114949