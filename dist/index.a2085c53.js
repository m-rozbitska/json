// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
(function(modules, entry, mainEntry, parcelRequireName, globalName) {
    /* eslint-disable no-undef */ var globalObject = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : {};
    /* eslint-enable no-undef */ // Save the require from previous bundle to this closure if any
    var previousRequire = typeof globalObject[parcelRequireName] === "function" && globalObject[parcelRequireName];
    var cache = previousRequire.cache || {};
    // Do not use `require` to prevent Webpack from trying to bundle this call
    var nodeRequire = typeof module !== "undefined" && typeof module.require === "function" && module.require.bind(module);
    function newRequire(name, jumped) {
        if (!cache[name]) {
            if (!modules[name]) {
                // if we cannot find the module within our internal map or
                // cache jump to the current global require ie. the last bundle
                // that was added to the page.
                var currentRequire = typeof globalObject[parcelRequireName] === "function" && globalObject[parcelRequireName];
                if (!jumped && currentRequire) return currentRequire(name, true);
                // If there are other bundles on this page the require from the
                // previous one is saved to 'previousRequire'. Repeat this as
                // many times as there are bundles until the module is found or
                // we exhaust the require chain.
                if (previousRequire) return previousRequire(name, true);
                // Try the node require function if it exists.
                if (nodeRequire && typeof name === "string") return nodeRequire(name);
                var err = new Error("Cannot find module '" + name + "'");
                err.code = "MODULE_NOT_FOUND";
                throw err;
            }
            localRequire.resolve = resolve;
            localRequire.cache = {};
            var module1 = cache[name] = new newRequire.Module(name);
            modules[name][0].call(module1.exports, localRequire, module1, module1.exports, this);
        }
        return cache[name].exports;
        function localRequire(x) {
            var res = localRequire.resolve(x);
            return res === false ? {} : newRequire(res);
        }
        function resolve(x) {
            var id = modules[name][1][x];
            return id != null ? id : x;
        }
    }
    function Module(moduleName) {
        this.id = moduleName;
        this.bundle = newRequire;
        this.exports = {};
    }
    newRequire.isParcelRequire = true;
    newRequire.Module = Module;
    newRequire.modules = modules;
    newRequire.cache = cache;
    newRequire.parent = previousRequire;
    newRequire.register = function(id, exports1) {
        modules[id] = [
            function(require, module1) {
                module1.exports = exports1;
            },
            {}
        ];
    };
    Object.defineProperty(newRequire, "root", {
        get: function() {
            return globalObject[parcelRequireName];
        }
    });
    globalObject[parcelRequireName] = newRequire;
    for(var i = 0; i < entry.length; i++)newRequire(entry[i]);
    if (mainEntry) {
        // Expose entry point to Node, AMD or browser globals
        // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
        var mainExports = newRequire(mainEntry);
        // CommonJS
        if (typeof exports === "object" && typeof module !== "undefined") module.exports = mainExports;
        else if (typeof define === "function" && define.amd) define(function() {
            return mainExports;
        });
        else if (globalName) this[globalName] = mainExports;
    }
})({
    "cCBoz": [
        function(require, module1, exports1) {
            var global1 = arguments[3];
            var HMR_HOST = null;
            var HMR_PORT = null;
            var HMR_SECURE = false;
            var HMR_ENV_HASH = "d6ea1d42532a7575";
            module1.bundle.HMR_BUNDLE_ID = "890e741a975ef6c8";
            "use strict";
            /* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
            var OldModule = module1.bundle.Module;
            function Module(moduleName) {
                OldModule.call(this, moduleName);
                this.hot = {
                    data: module1.bundle.hotData[moduleName],
                    _acceptCallbacks: [],
                    _disposeCallbacks: [],
                    accept: function(fn) {
                        this._acceptCallbacks.push(fn || function() {});
                    },
                    dispose: function(fn) {
                        this._disposeCallbacks.push(fn);
                    }
                };
                module1.bundle.hotData[moduleName] = undefined;
            }
            module1.bundle.Module = Module;
            module1.bundle.hotData = {};
            var checkedAssets, assetsToDispose, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
            function getHostname() {
                return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
            }
            function getPort() {
                return HMR_PORT || location.port;
            } // eslint-disable-next-line no-redeclare
            var parent = module1.bundle.parent;
            if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
                var hostname = getHostname();
                var port = getPort();
                var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
                var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
                var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
                // eval may also be disabled via CSP, so do a quick check.
                var supportsSourceURL = false;
                try {
                    (0, eval)('throw new Error("test"); //# sourceURL=test.js');
                } catch (err) {
                    supportsSourceURL = err.stack.includes("test.js");
                } // $FlowFixMe
                ws.onmessage = async function(event) {
                    checkedAssets = {} /*: {|[string]: boolean|} */ ;
                    assetsToAccept = [];
                    assetsToDispose = [];
                    var data = JSON.parse(event.data);
                    if (data.type === "update") {
                        // Remove error overlay if there is one
                        if (typeof document !== "undefined") removeErrorOverlay();
                        let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
                        let handled = assets.every((asset)=>{
                            return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module1.bundle.root, asset.id, asset.depsByBundle);
                        });
                        if (handled) {
                            console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                            if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                            await hmrApplyUpdates(assets); // Dispose all old assets.
                            let processedAssets = {} /*: {|[string]: boolean|} */ ;
                            for(let i = 0; i < assetsToDispose.length; i++){
                                let id = assetsToDispose[i][1];
                                if (!processedAssets[id]) {
                                    hmrDispose(assetsToDispose[i][0], id);
                                    processedAssets[id] = true;
                                }
                            } // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                            processedAssets = {};
                            for(let i = 0; i < assetsToAccept.length; i++){
                                let id = assetsToAccept[i][1];
                                if (!processedAssets[id]) {
                                    hmrAccept(assetsToAccept[i][0], id);
                                    processedAssets[id] = true;
                                }
                            }
                        } else fullReload();
                    }
                    if (data.type === "error") {
                        // Log parcel errors to console
                        for (let ansiDiagnostic of data.diagnostics.ansi){
                            let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                            console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
                        }
                        if (typeof document !== "undefined") {
                            // Render the fancy html overlay
                            removeErrorOverlay();
                            var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                            document.body.appendChild(overlay);
                        }
                    }
                };
                ws.onerror = function(e) {
                    console.error(e.message);
                };
                ws.onclose = function() {
                    console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
                };
            }
            function removeErrorOverlay() {
                var overlay = document.getElementById(OVERLAY_ID);
                if (overlay) {
                    overlay.remove();
                    console.log("[parcel] ✨ Error resolved");
                }
            }
            function createErrorOverlay(diagnostics) {
                var overlay = document.createElement("div");
                overlay.id = OVERLAY_ID;
                let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
                for (let diagnostic of diagnostics){
                    let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
                        return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
                    }, "") : diagnostic.stack;
                    errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
                }
                errorHTML += "</div>";
                overlay.innerHTML = errorHTML;
                return overlay;
            }
            function fullReload() {
                if ("reload" in location) location.reload();
                else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
            }
            function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
                var modules = bundle.modules;
                if (!modules) return [];
                var parents = [];
                var k, d, dep;
                for(k in modules)for(d in modules[k][1]){
                    dep = modules[k][1][d];
                    if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
                        bundle,
                        k
                    ]);
                }
                if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
                return parents;
            }
            function updateLink(link) {
                var newLink = link.cloneNode();
                newLink.onload = function() {
                    if (link.parentNode !== null) link.parentNode.removeChild(link);
                };
                newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
                link.parentNode.insertBefore(newLink, link.nextSibling);
            }
            var cssTimeout = null;
            function reloadCSS() {
                if (cssTimeout) return;
                cssTimeout = setTimeout(function() {
                    var links = document.querySelectorAll('link[rel="stylesheet"]');
                    for(var i = 0; i < links.length; i++){
                        // $FlowFixMe[incompatible-type]
                        var href = links[i].getAttribute("href");
                        var hostname = getHostname();
                        var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
                        var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
                        if (!absolute) updateLink(links[i]);
                    }
                    cssTimeout = null;
                }, 50);
            }
            function hmrDownload(asset) {
                if (asset.type === "js") {
                    if (typeof document !== "undefined") {
                        let script = document.createElement("script");
                        script.src = asset.url + "?t=" + Date.now();
                        if (asset.outputFormat === "esmodule") script.type = "module";
                        return new Promise((resolve, reject)=>{
                            var _document$head;
                            script.onload = ()=>resolve(script);
                            script.onerror = reject;
                            (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
                        });
                    } else if (typeof importScripts === "function") {
                        // Worker scripts
                        if (asset.outputFormat === "esmodule") return __parcel__require__(asset.url + "?t=" + Date.now());
                        else return new Promise((resolve, reject)=>{
                            try {
                                importScripts(asset.url + "?t=" + Date.now());
                                resolve();
                            } catch (err) {
                                reject(err);
                            }
                        });
                    }
                }
            }
            async function hmrApplyUpdates(assets) {
                global1.parcelHotUpdate = Object.create(null);
                let scriptsToRemove;
                try {
                    // If sourceURL comments aren't supported in eval, we need to load
                    // the update from the dev server over HTTP so that stack traces
                    // are correct in errors/logs. This is much slower than eval, so
                    // we only do it if needed (currently just Safari).
                    // https://bugs.webkit.org/show_bug.cgi?id=137297
                    // This path is also taken if a CSP disallows eval.
                    if (!supportsSourceURL) {
                        let promises = assets.map((asset)=>{
                            var _hmrDownload;
                            return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                                // Web extension bugfix for Chromium
                                // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                                if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                                    if (typeof ServiceWorkerGlobalScope != "undefined" && global1 instanceof ServiceWorkerGlobalScope) {
                                        extCtx.runtime.reload();
                                        return;
                                    }
                                    asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                                    return hmrDownload(asset);
                                }
                                throw err;
                            });
                        });
                        scriptsToRemove = await Promise.all(promises);
                    }
                    assets.forEach(function(asset) {
                        hmrApply(module1.bundle.root, asset);
                    });
                } finally{
                    delete global1.parcelHotUpdate;
                    if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
                        if (script) {
                            var _document$head2;
                            (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
                        }
                    });
                }
            }
            function hmrApply(bundle, asset) {
                var modules = bundle.modules;
                if (!modules) return;
                if (asset.type === "css") reloadCSS();
                else if (asset.type === "js") {
                    let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
                    if (deps) {
                        if (modules[asset.id]) {
                            // Remove dependencies that are removed and will become orphaned.
                            // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                            let oldDeps = modules[asset.id][1];
                            for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                                let id = oldDeps[dep];
                                let parents = getParents(module1.bundle.root, id);
                                if (parents.length === 1) hmrDelete(module1.bundle.root, id);
                            }
                        }
                        if (supportsSourceURL) // support for source maps is better with eval.
                        (0, eval)(asset.output);
                        // $FlowFixMe
                        let fn = global1.parcelHotUpdate[asset.id];
                        modules[asset.id] = [
                            fn,
                            deps
                        ];
                    } else if (bundle.parent) hmrApply(bundle.parent, asset);
                }
            }
            function hmrDelete(bundle, id) {
                let modules = bundle.modules;
                if (!modules) return;
                if (modules[id]) {
                    // Collect dependencies that will become orphaned when this module is deleted.
                    let deps = modules[id][1];
                    let orphans = [];
                    for(let dep in deps){
                        let parents = getParents(module1.bundle.root, deps[dep]);
                        if (parents.length === 1) orphans.push(deps[dep]);
                    } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
                    delete modules[id];
                    delete bundle.cache[id]; // Now delete the orphans.
                    orphans.forEach((id)=>{
                        hmrDelete(module1.bundle.root, id);
                    });
                } else if (bundle.parent) hmrDelete(bundle.parent, id);
            }
            function hmrAcceptCheck(bundle, id, depsByBundle) {
                if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
                // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
                let parents = getParents(module1.bundle.root, id);
                let accepted = false;
                while(parents.length > 0){
                    let v = parents.shift();
                    let a = hmrAcceptCheckOne(v[0], v[1], null);
                    if (a) accepted = true;
                    else {
                        // Otherwise, queue the parents in the next level upward.
                        let p = getParents(module1.bundle.root, v[1]);
                        if (p.length === 0) {
                            // If there are no parents, then we've reached an entry without accepting. Reload.
                            accepted = false;
                            break;
                        }
                        parents.push(...p);
                    }
                }
                return accepted;
            }
            function hmrAcceptCheckOne(bundle, id, depsByBundle) {
                var modules = bundle.modules;
                if (!modules) return;
                if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
                    // If we reached the root bundle without finding where the asset should go,
                    // there's nothing to do. Mark as "accepted" so we don't reload the page.
                    if (!bundle.parent) return true;
                    return hmrAcceptCheck(bundle.parent, id, depsByBundle);
                }
                if (checkedAssets[id]) return true;
                checkedAssets[id] = true;
                var cached = bundle.cache[id];
                assetsToDispose.push([
                    bundle,
                    id
                ]);
                if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
                    assetsToAccept.push([
                        bundle,
                        id
                    ]);
                    return true;
                }
            }
            function hmrDispose(bundle, id) {
                var cached = bundle.cache[id];
                bundle.hotData[id] = {};
                if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
                if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
                    cb(bundle.hotData[id]);
                });
                delete bundle.cache[id];
            }
            function hmrAccept(bundle, id) {
                // Execute the module.
                bundle(id); // Run the accept callbacks in the new version of the module.
                var cached = bundle.cache[id];
                if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
                    var assetsToAlsoAccept = cb(function() {
                        return getParents(module1.bundle.root, id);
                    });
                    if (assetsToAlsoAccept && assetsToAccept.length) {
                        assetsToAlsoAccept.forEach(function(a) {
                            hmrDispose(a[0], a[1]);
                        }); // $FlowFixMe[method-unbinding]
                        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
                    }
                });
            }
        },
        {}
    ],
    "8lqZg": [
        function(require, module1, exports1) {
            document.addEventListener("DOMContentLoaded", ()=>{
                const tableWrapper = document.querySelector("#tableWrapper");
                tableWrapper.insertAdjacentHTML("beforeend", `
      <table id="userTable" width = "100%">
         <tr>
            <th colspan ="9">Users</th>
         </tr>
         <tr>
            <th>Id</th>
            <th>Name</th>
            <th>User name</th>
            <th>Email</th>
            <th>Address</th>
            <th>Phone</th>
            <th>Website</th>
            <th>Company</th>
            <th>Action</th>
         </tr>
      </table>
   `);
                const userTable = document.querySelector("#userTable");
                fetch("https://jsonplaceholder.typicode.com/users").then((response)=>response.json()).then((users)=>{
                    users.forEach((user)=>{
                        userTable.insertAdjacentHTML("beforeend", `
            <tr>
               <td>${user.id}</td>
               <td>${user.name}</td>
               <td>${user.username}</td>
               <td>${user.email}</td>
               <td>${user.address.city}</td>
               <td>${user.phone}</td>
               <td>${user.website}</td>                  
               <td>${user.company.name}</td>
               <td>
                  <button data-user-id="${user.id}" id = "todo-btn"
                  class = "todo-btn button" style="margin: 5px auto;">Todos</button>
                  <button data-user-id="${user.id}" id = "post-btn" class = "post-btn button" style="margin: 5px auto;">Posts</button>
                  <button data-user-id="${user.id}"  id = "album-btn" class = "album-btn button" style="margin: 5px auto;">Albums</button>
               </td>
            </tr>
         `);
                    });
                    const userBtns = document.querySelectorAll("button[data-user-id]");
                    userBtns.forEach((button)=>{
                        button.addEventListener("click", function(event) {
                            let target = event.target;
                            const userId = event.target.dataset.userId;
                            if (document.querySelector("#result2")) document.querySelector("#result2").remove();
                            fetch(`https://jsonplaceholder.typicode.com/users/${userId}/todos`).then((response)=>response.json()).then((todos)=>{
                                if (target.classList.contains("todo-btn")) {
                                    if (!document.querySelector("#result1")) {
                                        tableWrapper.insertAdjacentHTML("beforeend", ` 
               <table class="todo" id = "result1" width = "100%"> 
                  <tr>
                     <th colspan ="4">TODOS</th>
                  </tr>
                  <tr> 
                     <th>userId</th> 
                     <th>ID</th> 
                     <th>TITLE</th> 
                     <th>COMPLETED</th> 
                  </tr>  
               </table>`);
                                        let resultFirst = document.querySelector("#result1");
                                        todos.forEach((todo)=>{
                                            resultFirst.insertAdjacentHTML("beforeend", ` 
            <tr> 
               <td>${todo.userId}</td> 
               <td>${todo.id}</td> 
               <td>${todo.title}</td> 
               <td>${todo.completed}</td> 
            </tr>  
            `);
                                        });
                                    } else {
                                        document.querySelector("#result1").remove();
                                        tableWrapper.insertAdjacentHTML("beforeend", ` 
               <table class="todo" id = "result1" width = "100%"> 
                  <tr>
                     <th colspan ="4">TODOS</th>
                  </tr>
                  <tr> 
                     <th>userId</th> 
                     <th>ID</th> 
                     <th>TITLE</th> 
                     <th>COMPLETED</th> 
                  </tr>  
               </table>`);
                                        let resultFirst = document.querySelector("#result1");
                                        todos.forEach((todo)=>{
                                            resultFirst.insertAdjacentHTML("beforeend", ` 
               <tr> 
                  <td>${todo.userId}</td> 
                  <td>${todo.id}</td> 
                  <td>${todo.title}</td> 
                  <td>${todo.completed}</td> 
               </tr>  
                        `);
                                        });
                                    }
                                }
                            });
                            fetch(`https://jsonplaceholder.typicode.com/user/${userId}/posts`).then((response)=>response.json()).then((posts)=>{
                                if (target.classList.contains("post-btn")) {
                                    if (!document.querySelector("#result1")) {
                                        tableWrapper.insertAdjacentHTML("beforeend", ` 
               <table class="todo" id = "result1" width = "100%"> 
                  <tr>
                     <th colspan ="5">POSTS</th>
                  </tr>
                  <tr> 
                     <th>USER ID</th> 
                     <th>ID</th> 
                     <th>TITLE</th> 
                     <th>BODY</th> 
                     <th>ACTION</th>
                  </tr>  
               </table>`);
                                        posts.forEach((post)=>{
                                            let resultFirst = document.querySelector("#result1");
                                            resultFirst.insertAdjacentHTML("beforeend", `
                  <tr> 
                     <td>${post.userId}</td> 
                     <td>${post.id}</td> 
                     <td>${post.title}</td> 
                     <td>${post.body}</td> 
                     <td>
                        <button data-post-id="${userId}" class = "comment-btn button" style="margin: 5px auto;">Comments</button>
                     </td>
                  </tr>  
                        `);
                                        });
                                    } else {
                                        document.querySelector("#result1").remove();
                                        tableWrapper.insertAdjacentHTML("beforeend", ` 
                        <table class="todo" id = "result1" width = "100%"> 
                           <tr>
                              <th colspan ="5">POSTS</th>
                           </tr>
                           <tr> 
                              <th>USER ID</th> 
                              <th>ID</th> 
                              <th>TITLE</th> 
                              <th>BODY</th> 
                              <th>ACTION</th>
                           </tr>  
                        </table>`);
                                        posts.forEach((post)=>{
                                            let resultFirst = document.querySelector("#result1");
                                            resultFirst.insertAdjacentHTML("beforeend", `
                              <tr> 
                                 <td>${post.userId}</td> 
                                 <td>${post.id}</td> 
                                 <td>${post.title}</td> 
                                 <td>${post.body}</td> 
                                 <td>
                                    <button data-post-id="${userId}" class = "comment-btn button" style="margin: 5px auto;">Comments</button>
                                 </td>
                              </tr>  
                                 `);
                                        });
                                    }
                                }
                                const btnComment = document.querySelectorAll("button[data-post-id]");
                                btnComment.forEach((comment)=>{
                                    comment.addEventListener("click", function(event) {
                                        let target = event.target;
                                        const postId = event.target.dataset.postId;
                                        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`).then((response)=>response.json()).then((comments)=>{
                                            if (target.classList.contains("comment-btn")) {
                                                if (document.querySelector("#result2")) return;
                                                tableWrapper.insertAdjacentHTML("beforeend", `
                           <table id = "result2" width = "100%">
                              <tr>
                                 <th colspan ="5">Comments</th>
                              </tr>
                              <tr>
                                 <th>Post id</th>
                                 <th>Id</th>
                                 <th>Name</th>
                                 <th>Email</th>
                                 <th>Body</th>
                              </tr>
                           </table>
                        `);
                                                comments.forEach((comment)=>{
                                                    let resultSecond = document.querySelector("#result2");
                                                    resultSecond.insertAdjacentHTML("beforeend", `
                              <tr> 
                                 <td data-post-id="${comment.postId}">${comment.postId}</td> 
                                 <td>${comment.id}</td> 
                                 <td>${comment.name}</td> 
                                 <td>${comment.email}</td> 
                                 <td>${comment.body}</td> 
                              </tr>  
                              `);
                                                });
                                            } else return;
                                        });
                                    });
                                });
                            });
                            fetch(`https://jsonplaceholder.typicode.com/users/${userId}/albums`).then((response)=>response.json()).then((albums)=>{
                                if (target.classList.contains("album-btn")) {
                                    if (!document.querySelector("#result1")) {
                                        tableWrapper.insertAdjacentHTML("beforeend", ` 
                  <table class="todo" id = "result1" width = "100%"> 
                     <tr>
                        <th colspan ="3">ALBUMS</th>
                     </tr>
                     <tr> 
                        <th>USER ID</th> 
                        <th>ID</th> 
                        <th>TITLE</th> 
                        <th>ACTION</th>
                     </tr>  
                  </table>`);
                                        albums.forEach((album)=>{
                                            let resultFirst = document.querySelector("#result1");
                                            resultFirst.insertAdjacentHTML("beforeend", ` 
                     <tr> 
                        <td>${album.userId}</td> 
                        <td>${album.id}</td> 
                        <td>${album.title}</td> 
                        <td>
                           <button data-album-id="${userId}" class = "album-btn button" style="margin: 5px auto;">Photos</button>
                        </td>
                     </tr>  
                  ]      `);
                                        });
                                    } else {
                                        document.querySelector("#result1").remove();
                                        tableWrapper.insertAdjacentHTML("beforeend", ` 
                        <table class="todo" id = "result1" width = "100%"> 
                           <tr>
                              <th colspan ="3">ALBUMS</th>
                           </tr>
                              <tr> 
                                 <th>USER ID</th> 
                                 <th>ID</th> 
                                 <th>TITLE</th> 
                                 <th>ACTION</th>
                              </tr>  
                           </table>`);
                                        albums.forEach((album)=>{
                                            let resultFirst = document.querySelector("#result1");
                                            resultFirst.insertAdjacentHTML("beforeend", ` 
                           <tr> 
                              <td>${album.userId}</td> 
                              <td>${album.id}</td> 
                              <td>${album.title}</td> 
                              <td>
                                 <button data-album-id="${userId}" class = "album-btn button" style="margin: 5px auto;">Photos</button>
                           </td>
                           </tr>  
                        `);
                                        });
                                    }
                                }
                                const btnPhotos = document.querySelectorAll("button[data-album-id]");
                                btnPhotos.forEach((photos)=>{
                                    photos.addEventListener("click", function(event) {
                                        let target = event.target;
                                        const albumId = event.target.dataset.albumId;
                                        fetch(`https://jsonplaceholder.typicode.com/albums/${albumId}/photos`).then((response)=>response.json()).then((photos)=>{
                                            if (target.classList.contains("album-btn")) {
                                                if (document.querySelector("#result2")) return;
                                                tableWrapper.insertAdjacentHTML("beforeend", `
                                       <table id = "result2" width = "100%">
                                          <tr>
                                             <th colspan ="5">PHOTOS</th>
                                          </tr>
                                          <tr>
                                             <th>ALBUM ID</th>
                                             <th>ID</th>
                                             <th>TITLE</th>
                                             <th>URL</th>
                                             <th>THUMBNAIL URL</th>
                                          </tr>
                                       </table>
                                    `);
                                                photos.forEach((photo)=>{
                                                    let resultSecond = document.querySelector("#result2");
                                                    resultSecond.insertAdjacentHTML("beforeend", `
                                          <tr> 
                                             <td data-post-id="${photo.albumId}">${photo.albumId}</td> 
                                             <td>${photo.id}</td> 
                                             <td>${photo.title}</td> 
                                             <td>
                                                <img src="${photo.url}"
                                             </td> 
                                             <td>
                                                <img src="${photo.thumbnailUrl}"
                                             </td> 
                                          </tr>  
                                          `);
                                                });
                                            } else return;
                                        });
                                    });
                                });
                            });
                        });
                    });
                });
            });
        },
        {}
    ]
}, [
    "cCBoz",
    "8lqZg"
], "8lqZg", "parcelRequire94c2");

//# sourceMappingURL=index.a2085c53.js.map