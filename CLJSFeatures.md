1. **Auto-building** supports incremental compilation: watch.clj
```java -cp "cljs.jar;src" clojure.main watch.cls```
2. Browser REPL:
```java -cp cljs.jar;src clojure.main repl.clj```

The auto building process will write its activity to out/watch.log so you can easily ```tail -f out/watch.log```
3. Production Builds
You may have noticed that out contains a lot of JavaScript. Fortunately the ClojureScript compiler generates output optimized for the Google Closure Compiler. The Google Closure Compiler performs many optimizations, but the most significant for browser-based clients are minification and dead code elimination.

helper build script release.clj

4. create a release build:
```java -cp cljs.jar:src clojure.main release.clj```

TODO:
5. Running ClojureScript on Node.js
