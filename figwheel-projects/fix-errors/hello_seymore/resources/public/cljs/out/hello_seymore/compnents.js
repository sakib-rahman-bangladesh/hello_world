// Compiled by ClojureScript 1.9.229 {}
goog.provide('hello_seymore.compnents');
goog.require('cljs.core');
goog.require('sablono.core');
hello_seymore.compnents.like_seymore = (function hello_seymore$compnents$like_seymore(data){
return React.createElement("div",null,React.createElement("h1",null,"Seymore's popularity: ",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"likes","likes",792554542).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,data)))),React.createElement("div",null,React.createElement("a",({"href": "#", "onClick": (function (){
return cljs.core.swap_BANG_.call(null,data,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"likes","likes",792554542)], null),cljs.core.inc);
})}),"Thumbs up")));
});

//# sourceMappingURL=compnents.js.map?rel=1520627274290