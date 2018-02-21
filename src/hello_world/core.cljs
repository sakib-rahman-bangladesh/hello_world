(commnet "

(ns hello-world.core
  (:require [cljs.nodejs :as nodejs]))

(nodejs/enable-util-print!)

(defn -main [& args]
  (println "workding:cljs with nodejs"))
  
(set! *main-cli-fn* -main)

;; ADDED
(defn foo [a b]
  (* a b))

")
