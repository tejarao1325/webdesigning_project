var hcScript = document.currentScript || (function() {
                        var scripts = document.getElementsByTagName("script");
                        return scripts[scripts.length - 1];
                    })(), hcLoadedUrl = window.hcLoadedUrl || [];
                    
                    if(hcLoadedUrl.indexOf(hcScript.src) == -1){
                         if(!window.hcLoadedUrl){
                            window.hcLoadedUrl = [];
                         } 
                         
                        window.hcLoadedUrl.push(hcScript.src);
                       
                        if (!("_hc_scope" in window)) { 
                            window["_hc_scope"] = {};
                        }
                        
                        (function() { 	var es6PromiseLoader = function(){"use strict";function t(t){var e=typeof t;return null!==t&&("object"===e||"function"===e)}function e(t){return"function"==typeof t}function n(t){I=t}function r(t){J=t}function o(){return function(){return process.nextTick(a)}}function i(){return"undefined"!=typeof H?function(){H(a)}:c()}function s(){var t=0,e=new V(a),n=document.createTextNode("");return e.observe(n,{characterData:!0}),function(){n.data=t=++t%2}}function u(){var t=new MessageChannel;return t.port1.onmessage=a,function(){return t.port2.postMessage(0)}}function c(){var t=setTimeout;return function(){return t(a,1)}}function a(){for(var t=0;t<G;t+=2){var e=$[t],n=$[t+1];e(n),$[t]=void 0,$[t+1]=void 0}G=0}function f(){try{var t=require,e=t("vertx");return H=e.runOnLoop||e.runOnContext,i()}catch(n){return c()}}function l(t,e){var n=arguments,r=this,o=new this.constructor(p);void 0===o[et]&&k(o);var i=r._state;return i?!function(){var t=n[i-1];J(function(){return x(i,o,t,r._result)})}():E(r,o,t,e),o}function h(t){var e=this;if(t&&"object"==typeof t&&t.constructor===e)return t;var n=new e(p);return g(n,t),n}function p(){}function v(){return new TypeError("You cannot resolve a promise with itself")}function d(){return new TypeError("A promises callback cannot return that same promise.")}function _(t){try{return t.then}catch(e){return it.error=e,it}}function y(t,e,n,r){try{t.call(e,n,r)}catch(o){return o}}function m(t,e,n){J(function(t){var r=!1,o=y(n,e,function(n){r||(r=!0,e!==n?g(t,n):S(t,n))},function(e){r||(r=!0,j(t,e))},"Settle: "+(t._label||" unknown promise"));!r&&o&&(r=!0,j(t,o))},t)}function b(t,e){e._state===rt?S(t,e._result):e._state===ot?j(t,e._result):E(e,void 0,function(e){return g(t,e)},function(e){return j(t,e)})}function w(t,n,r){n.constructor===t.constructor&&r===l&&n.constructor.resolve===h?b(t,n):r===it?(j(t,it.error),it.error=null):void 0===r?S(t,n):e(r)?m(t,n,r):S(t,n)}function g(e,n){e===n?j(e,v()):t(n)?w(e,n,_(n)):S(e,n)}function A(t){t._onerror&&t._onerror(t._result),T(t)}function S(t,e){t._state===nt&&(t._result=e,t._state=rt,0!==t._subscribers.length&&J(T,t))}function j(t,e){t._state===nt&&(t._state=ot,t._result=e,J(A,t))}function E(t,e,n,r){var o=t._subscribers,i=o.length;t._onerror=null,o[i]=e,o[i+rt]=n,o[i+ot]=r,0===i&&t._state&&J(T,t)}function T(t){var e=t._subscribers,n=t._state;if(0!==e.length){for(var r=void 0,o=void 0,i=t._result,s=0;s<e.length;s+=3)r=e[s],o=e[s+n],r?x(n,r,o,i):o(i);t._subscribers.length=0}}function M(){this.error=null}function P(t,e){try{return t(e)}catch(n){return st.error=n,st}}function x(t,n,r,o){var i=e(r),s=void 0,u=void 0,c=void 0,a=void 0;if(i){if(s=P(r,o),s===st?(a=!0,u=s.error,s.error=null):c=!0,n===s)return void j(n,d())}else s=o,c=!0;n._state!==nt||(i&&c?g(n,s):a?j(n,u):t===rt?S(n,s):t===ot&&j(n,s))}function C(t,e){try{e(function(e){g(t,e)},function(e){j(t,e)})}catch(n){j(t,n)}}function O(){return ut++}function k(t){t[et]=ut++,t._state=void 0,t._result=void 0,t._subscribers=[]}function Y(t,e){this._instanceConstructor=t,this.promise=new t(p),this.promise[et]||k(this.promise),B(e)?(this.length=e.length,this._remaining=e.length,this._result=new Array(this.length),0===this.length?S(this.promise,this._result):(this.length=this.length||0,this._enumerate(e),0===this._remaining&&S(this.promise,this._result))):j(this.promise,q())}function q(){return new Error("Array Methods must be provided an Array")}function F(t){return new Y(this,t).promise}function D(t){var e=this;return new e(B(t)?function(n,r){for(var o=t.length,i=0;i<o;i++)e.resolve(t[i]).then(n,r)}:function(t,e){return e(new TypeError("You must pass an array to race."))})}function K(t){var e=this,n=new e(p);return j(n,t),n}function L(){throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")}function N(){throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")}function U(t){this[et]=O(),this._result=this._state=void 0,this._subscribers=[],p!==t&&("function"!=typeof t&&L(),this instanceof U?C(this,t):N())}function W(){var t=void 0;if("undefined"!=typeof global)t=global;else if("undefined"!=typeof self)t=self;else try{t=Function("return this")()}catch(e){throw new Error("polyfill failed because global object is unavailable in this environment")}var n=t.Promise;if(n){var r=null;try{r=Object.prototype.toString.call(n.resolve())}catch(e){}if("[object Promise]"===r&&!n.cast)return}t.Promise=U}var z=void 0;z=Array.isArray?Array.isArray:function(t){return"[object Array]"===Object.prototype.toString.call(t)};var B=z,G=0,H=void 0,I=void 0,J=function(t,e){$[G]=t,$[G+1]=e,G+=2,2===G&&(I?I(a):tt())},Q="undefined"!=typeof window?window:void 0,R=Q||{},V=R.MutationObserver||R.WebKitMutationObserver,X="undefined"==typeof self&&"undefined"!=typeof process&&"[object process]"==={}.toString.call(process),Z="undefined"!=typeof Uint8ClampedArray&&"undefined"!=typeof importScripts&&"undefined"!=typeof MessageChannel,$=new Array(1e3),tt=void 0;tt=X?o():V?s():Z?u():void 0===Q&&"function"==typeof require?f():c();var et=Math.random().toString(36).substring(16),nt=void 0,rt=1,ot=2,it=new M,st=new M,ut=0;return Y.prototype._enumerate=function(t){for(var e=0;this._state===nt&&e<t.length;e++)this._eachEntry(t[e],e)},Y.prototype._eachEntry=function(t,e){var n=this._instanceConstructor,r=n.resolve;if(r===h){var o=_(t);if(o===l&&t._state!==nt)this._settledAt(t._state,e,t._result);else if("function"!=typeof o)this._remaining--,this._result[e]=t;else if(n===U){var i=new n(p);w(i,t,o),this._willSettleAt(i,e)}else this._willSettleAt(new n(function(e){return e(t)}),e)}else this._willSettleAt(r(t),e)},Y.prototype._settledAt=function(t,e,n){var r=this.promise;r._state===nt&&(this._remaining--,t===ot?j(r,n):this._result[e]=n),0===this._remaining&&S(r,this._result)},Y.prototype._willSettleAt=function(t,e){var n=this;E(t,void 0,function(t){return n._settledAt(rt,e,t)},function(t){return n._settledAt(ot,e,t)})},U.all=F,U.race=D,U.resolve=h,U.reject=K,U._setScheduler=n,U._setAsap=r,U._asap=J,U.prototype={constructor:U,then:l,"catch":function(t){return this.then(null,t)}},U.polyfill=W,U.Promise=U,U};
	
	if (typeof Object.assign != 'function') {
	    Object.assign = function(target) {
	        'use strict';
	        if (target == null) {
	            throw new TypeError('Cannot convert undefined or null to object');
	        }
	
	        target = Object(target);
	        for (var index = 1; index < arguments.length; index++) {
	            var source = arguments[index];
	            if (source != null) {
	                for (var key in source) {
	                    if (Object.prototype.hasOwnProperty.call(source, key)) {
	                        target[key] = source[key];
	                    }
	                }
	            }
	        }
	        return target;
	    };
	};
	
	// https://tc39.github.io/ecma262/#sec-array.prototype.find
	if (!Array.prototype.find) {
	    Object.defineProperty(Array.prototype, 'find', {
	        value: function(predicate) {
	            // 1. Let O be ? ToObject(this value).
	            if (this == null) {
	                throw new TypeError('"this" is null or not defined');
	            }
	
	            var o = Object(this);
	
	            // 2. Let len be ? ToLength(? Get(O, "length")).
	            var len = o.length >>> 0;
	
	            // 3. If IsCallable(predicate) is false, throw a TypeError exception.
	            if (typeof predicate !== 'function') {
	                throw new TypeError('predicate must be a function');
	            }
	
	            // 4. If thisArg was supplied, let T be thisArg; else let T be undefined.
	            var thisArg = arguments[1];
	
	            // 5. Let k be 0.
	            var k = 0;
	
	            // 6. Repeat, while k < len
	            while (k < len) {
	                // a. Let Pk be ! ToString(k).
	                // b. Let kValue be ? Get(O, Pk).
	                // c. Let testResult be ToBoolean(? Call(predicate, T, « kValue, k, O »)).
	                // d. If testResult is true, return kValue.
	                var kValue = o[k];
	                if (predicate.call(thisArg, kValue, k, o)) {
	                    return kValue;
	                }
	                // e. Increase k by 1.
	                k++;
	            }
	
	            // 7. Return undefined.
	            return undefined;
	        }
	    });
	};
	
	// https://tc39.github.io/ecma262/#sec-array.prototype.includes
	if (!Array.prototype.includes) {
	    Object.defineProperty(Array.prototype, 'includes', {
	        value: function(searchElement, fromIndex) {
	
	            // 1. Let O be ? ToObject(this value).
	            if (this == null) {
	                throw new TypeError('"this" is null or not defined');
	            }
	
	            var o = Object(this);
	
	            // 2. Let len be ? ToLength(? Get(O, "length")).
	            var len = o.length >>> 0;
	
	            // 3. If len is 0, return false.
	            if (len === 0) {
	                return false;
	            }
	
	            // 4. Let n be ? ToInteger(fromIndex).
	            //    (If fromIndex is undefined, this step produces the value 0.)
	            var n = fromIndex | 0;
	
	            // 5. If n ≥ 0, then
	            //  a. Let k be n.
	            // 6. Else n < 0,
	            //  a. Let k be len + n.
	            //  b. If k < 0, let k be 0.
	            var k = Math.max(n >= 0 ? n : len - Math.abs(n), 0);
	
	            function sameValueZero(x, y) {
	                return x === y || (typeof x === 'number' && typeof y === 'number' && isNaN(x) && isNaN(y));
	            }
	
	            // 7. Repeat, while k < len
	            while (k < len) {
	                // a. Let elementK be the result of ? Get(O, ! ToString(k)).
	                // b. If SameValueZero(searchElement, elementK) is true, return true.
	                // c. Increase k by 1.
	                if (sameValueZero(o[k], searchElement)) {
	                    return true;
	                }
	                k++;
	            }
	
	            // 8. Return false
	            return false;
	        }
	    });
	};
	
	// From https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys
	if (!Object.keys) {
	  Object.keys = (function() {
	    'use strict';
	    var hasOwnProperty = Object.prototype.hasOwnProperty,
	        hasDontEnumBug = !({ toString: null }).propertyIsEnumerable('toString'),
	        dontEnums = [
	          'toString',
	          'toLocaleString',
	          'valueOf',
	          'hasOwnProperty',
	          'isPrototypeOf',
	          'propertyIsEnumerable',
	          'constructor'
	        ],
	        dontEnumsLength = dontEnums.length;
	
	    return function(obj) {
	      if (typeof obj !== 'function' && (typeof obj !== 'object' || obj === null)) {
	        throw new TypeError('Object.keys called on non-object');
	      }
	
	      var result = [], prop, i;
	
	      for (prop in obj) {
	        if (hasOwnProperty.call(obj, prop)) {
	          result.push(prop);
	        }
	      }
	
	      if (hasDontEnumBug) {
	        for (i = 0; i < dontEnumsLength; i++) {
	          if (hasOwnProperty.call(obj, dontEnums[i])) {
	            result.push(dontEnums[i]);
	          }
	        }
	      }
	      return result;
	    };
	  }());
	}
	
	// Production steps of ECMA-262, Edition 5, 15.4.4.18
	// Reference: http://es5.github.io/#x15.4.4.18
	if (!Array.prototype.forEach) {
	  Array.prototype.forEach = function(callback/*, thisArg*/) {
	
	    var T, k;
	
	    if (this == null) {
	      throw new TypeError('this is null or not defined');
	    }
	
	    // 1. Let O be the result of calling toObject() passing the
	    // |this| value as the argument.
	    var O = Object(this);
	
	    // 2. Let lenValue be the result of calling the Get() internal
	    // method of O with the argument "length".
	    // 3. Let len be toUint32(lenValue).
	    var len = O.length >>> 0;
	
	    // 4. If isCallable(callback) is false, throw a TypeError exception. 
	    // See: http://es5.github.com/#x9.11
	    if (typeof callback !== 'function') {
	      throw new TypeError(callback + ' is not a function');
	    }
	
	    // 5. If thisArg was supplied, let T be thisArg; else let
	    // T be undefined.
	    if (arguments.length > 1) {
	      T = arguments[1];
	    }
	
	    // 6. Let k be 0.
	    k = 0;
	
	    // 7. Repeat while k < len.
	    while (k < len) {
	
	      var kValue;
	
	      // a. Let Pk be ToString(k).
	      //    This is implicit for LHS operands of the in operator.
	      // b. Let kPresent be the result of calling the HasProperty
	      //    internal method of O with argument Pk.
	      //    This step can be combined with c.
	      // c. If kPresent is true, then
	      if (k in O) {
	
	        // i. Let kValue be the result of calling the Get internal
	        // method of O with argument Pk.
	        kValue = O[k];
	
	        // ii. Call the Call internal method of callback with T as
	        // the this value and argument list containing kValue, k, and O.
	        callback.call(T, kValue, k, O);
	      }
	      // d. Increase k by 1.
	      k++;
	    }
	    // 8. return undefined.
	  };
	}
	
	var Promise = window.Promise || es6PromiseLoader();
	
	function Class(parent, proto) {
	    if (!parent) {
	        throw new Error('No parent/prototype');
	    }
		if (!proto) {
	        proto = parent; parent = null;
		} else {
			if (parent == Error && ErrorParentClass) { parent = ErrorParentClass; }
			proto.prototype = parent.prototype;
		}
	
	    var cls = function() {
	            if (this.init) {
	                return this.init.apply(this, arguments);
	            }
	        },
			supr = parent ? function(context, method, args) {
				if (typeof method === 'function') {
					var s = method + '';
					method = s.substr(8, s.indexOf('(') - 8).trim();
				}
				var f = parent.prototype[method];
				if (!f) { throw new Error('No method ' + method); }
				return f.apply(context, args || []);
			} : null;
	
	    cls.prototype = new proto(supr, supr);
	    cls.prototype.constructor = cls;
	    cls.prototype._parentClass = parent;
	    if (name) {
	        cls.prototype._class = name;
	    }
	    return cls;
	}
	
	function bind(context, method) {
	    if (typeof method === 'string') {
			var args0 = Array.prototype.slice.call(arguments, 2);
			if (args0.length) {
				return function _bound() {
					if (context[method]) {
						var args1 = Array.prototype.slice.call(arguments);
						return context[method].apply(context, args0.concat(args1));
					} else {
						throw new Error('No method: "' + method + '" for ctx: ' + context);
					}
				};
			} else {
				return function _bound() {
					if (context[method]) {
						return context[method].apply(context, arguments);
					} else {
						throw new Error('No method: "' + method + '" for ctx: ' + context);
					}
				};
			}
	    }
	
		var args0 = Array.prototype.slice.call(arguments, 2);
	    return function _bound() {
			var args1 = Array.prototype.slice.call(arguments);
	        return method.apply(context, args0.concat(args1));
	    };
	}
	
	var Emitter = Class(function() {
		this.init = function init() {
			this._listeners 	= {};
			this._listenerId 	= 0;
			this._hasTriggered 	= {}; // Object containing triggered events(unique, every event gets only stored once)
		};
	
		this.on = function on(signal, ctx, method) {
	        if (Object.prototype.toString.call(signal) === '[object Array]') {
	            var signals = Array.prototype.slice.call(signal),
	                // i,
	                detachers = [];
	
	            // for (i in signals) {
				for (i = 0; i < signals.length; i++) {
	                detachers.push(this.on(signals[i], ctx, method));
	            }
	
	            return bind(this, function(detachers) {
	                var y;
	                for (y in detachers) {
	                    detachers[y]();
	                }
	            }, detachers);
	        }
	
	        var id = 'listener' + this._listenerId++;
			this._listeners[id] = {
				signal: signal,
				ctx: ctx,
				method: method
			};
			return bind(this, function() { delete this._listeners[id]; });
		};
	
		this.once = function once(signal, ctx, method) {
			var id 				= 'listener' + this._listenerId++,
				deleteCallback 	= bind(this, function() { delete this._listeners[id]; });
			this._listeners[id] = {
				signal: signal,
				ctx: ctx,
				method: method,
				once: deleteCallback
			};
			return deleteCallback;
		};
	
		this.emit = function emit(signal) {
			var listeners 	= this._listeners,
				args 		= Array.prototype.slice.call(arguments, 1);
	
			this._hasTriggered[signal] = true;
	
			utils.vars.each(listeners, bind(this, function(listener) {
	            var isWildcardSignal = (listener.signal === '*');
	            if (listener.signal === signal || isWildcardSignal) {
	                if (isWildcardSignal) {
	                    args.unshift(signal);
	                }
	
	                if (typeof listener.ctx === 'function') {
	                    listener.ctx.apply(listener.ctx, args);
	                } else if (typeof listener.method === 'string') {
	                    if (listener.ctx[listener.method]) {
	                        listener.ctx[listener.method].apply(listener.ctx, args);
	                    } else {
	                        throw new Error('No emitter cb: "' + listener.method + '"' + (typeof listener.method));
	                    }
	                } else if (typeof listener.method === 'function') {
	                    listener.method.apply(listener.ctx, args);
	                } else {
	                    throw new Error('No emitter cb: "' + listener.method + '"' + (typeof listener.method));
	                }
	                listener.once && listener.once();
	            }
			}));
		};
	
		this.getHasTriggered = function getHasTriggered(signal) {
			return (signal === undefined) ? this._hasTriggered : !!this._hasTriggered[signal];
		};
	
		this.emitOnce = function emitOnce(signal) {
			this._hasTriggered[signal] || this.emit(signal);
		};
	
	    /**
	     * relaySignals
	     * @param   {object}    Broadcasting EventEmitter
	     * @param   {array}     Events to relay
	     */
	    this.relaySignals = function relaySignals(broadcaster, signals) {
	            utils.vars.each(signals, bind(this, function(signal) {
	                broadcaster.on(signal, bind(this, function() {
	                    var args = utils.vars.arrayFrom(arguments);
	                    if (signal !== '*') {
	                        args.unshift(signal);
	                    }
	                    this.emit.apply(this, args);
	                }));
	            }));
	    };
	});
	
	var utils = (function() {
			var result = {
					browserName: '',
					browserVersion: 0,
					invalidTransitions: [], // Invalid transition properties for the current browser version...
					listen: function(emitter, eventName, context, method) {
						emitter = (typeof emitter === 'string') ? this.get(emitter) : emitter;
						if (!emitter) {
							return;
						}
						method = (method === undefined) ? context : bind(context, method);
						if (utils.detectIPad() || utils.detectMobile()) {
							// Modern mobile systems should have addEventListener...
							emitter.addEventListener((eventName === 'click') ? 'touchend' : eventName, method);
						} else if (typeof emitter.addEventListener === 'function') { // Check if addEventListener exists...
							emitter.addEventListener(eventName, method);
						} else if (typeof emitter.attachEvent === 'function') {
							emitter.attachEvent(eventName, method);
						} else {
							// There's no addEventListener, use onclick, onmousedown, etc...
							eventName = 'on' + eventName;
							var index = '_' + eventName + 'HotelChamp',
								hotelchampEvents = emitter[index] || [emitter[eventName]];
	
							if (eventName.toLowerCase().indexOf('transition') === -1) {
								if (!(index in emitter)) {
									emitter[index] = hotelchampEvents;
									emitter[eventName] = function() {
										var i = 0;
										while (i < hotelchampEvents.length) {
											var f = hotelchampEvents[i++];
											(typeof f === 'function') && f();
										}
									};
								}
								hotelchampEvents.push(method);
							} else {
								method();
							}
						}
					},
					stopEvent: function(event) {
						event.stopPropagation && event.stopPropagation();
						event.cancel = true;
						event.preventDefault && event.preventDefault();
						return false;
					},
					elementPosition: function(domElement) {
			    		var x = 0;
			    		var y = 0;
			    		while (domElement && !isNaN(domElement.offsetLeft ) && !isNaN(domElement.offsetTop)) {
			        		x += domElement.offsetLeft - domElement.scrollLeft;
			        		y += domElement.offsetTop - domElement.scrollTop;
			        		domElement = domElement.offsetParent;
			    		}
			    		return {top: y, left: x};
					},
					toLength: function(s, length) {
						if (s.length > length) {
							s = s.substr(0, length);
							var i = length - 1;
							var j = i >> 1;
							while (i > j) {
								if (s[i] === '.') {
									return s.substr(0, i);
								}
								if (s[i] === ' ') {
									if (',:;/'.indexOf(s[i - 1]) !== -1) {
										i--;
									}
									return s.substr(0, i) + '...';
								}
								i--;
							}
						}
						return s;
					},
					stringToXML: function(s) {
						var xmlDocument;
						if (window.DOMParser) {
							var parser = new DOMParser();
							xmlDocument = parser.parseFromString(s, 'text/xml');
						} else {
							xmlDocument = new ActiveXObject('Microsoft.XMLDOM');
							xmlDocument.async = false;
							xmlDocument.loadXML(s);
						}
						return xmlDocument;
					},
					detectIPad: function() {
						return navigator.userAgent.match(new RegExp('iPad', 'i'));
					},
					detectMobile: function() {
						return navigator.userAgent.match(new RegExp('Android', 'i')) ||
							navigator.userAgent.match(new RegExp('webOS', 'i')) ||
							navigator.userAgent.match(new RegExp('iPhone', 'i')) ||
							navigator.userAgent.match(new RegExp('iPod', 'i')) ||
							navigator.userAgent.match(new RegExp('BlackBerry', 'i')) ||
							navigator.userAgent.match(new RegExp('Windows Phone', 'i'));
					},
					validateEmail: function(email) {
						return new RegExp('^([\\w-]+(?:\\.[\\w-]+)*)@((?:[\\w-]+\\.)*\\w[\\w-]{0,66})\\.([a-z]{2,6}(?:\\.[a-z]{2})?)$', 'i').test(email);
					},
					forEach: function(list, callback) { // Array.forEach is not supported in IE8!
						for (var i = 0, j = list.length; i < j; i++) {
							list[i] && callback(list[i]);
						}
					},
					ucFirst: function(s) {
						return (s.length !== 1) ? s[0].toUpperCase() + s.substr(1 - s.length) : s.toUpperCase();
					},
					merge: function(source, dest) {
						for (var i in source) {
							var v = source[i];
							if (!v) {
								dest[i] = v;
							} else if (typeof v === 'object') {
								if (!(i in dest)) {
									dest[i] = {};
								}
								utils.merge(v, dest[i]);
							} else {
								dest[i] = v;
							}
						}
						return dest;
					},
	                cloneDeep: function(obj) {
	                    if (obj === null || typeof(obj) !== 'object' || 'isActiveClone' in obj) {
	                        return obj;
	                    }
	
	                    if (obj instanceof Date) {
	                       var temp = new obj.constructor(); //or new Date(obj);
	                    }
	                    else {
	                       var temp = obj.constructor();
	                    }
	
	                    for (var key in obj) {
	                       if (Object.prototype.hasOwnProperty.call(obj, key)) {
	                          obj['isActiveClone'] = null;
	                          temp[key] = utils.cloneDeep(obj[key]);
	                          delete obj['isActiveClone'];
	                       }
	                  }
	
	                  return temp;
	                },
					clone: function(source, dontReset) {
						if (!dontReset) {
							utils._cloneCache = [];
							utils._cloneIndex = [];
						}
						switch (typeof source) {
							case 'object':
								var i = utils._cloneCache.indexOf(source);
								if (i !== -1) {
									return utils._cloneIndex[i];
								}
								utils._cloneCache.push(source);
								if (utils.vars.isArray(source)) {
									var dest = [];
									utils._cloneIndex.push(dest);
									for (var i = 0; i < source.length; i++) {
										dest[i] = utils.clone(source[i], true);
									}
								} else {
									var dest = {};
									utils._cloneIndex.push(dest);
									for (var i in source) {
										dest[i] = utils.clone(source[i], true);
									}
								}
								return dest;
	
							case 'function':
								return null;
	
							default:
								return source;
						}
					},
					isNumeric: function(value) {
						return !isNaN(parseFloat(value)) && isFinite(value);
					},
	
					hexToRgb: function hexToRgb(hex) {
					    // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
					    var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
					    hex = hex.replace(shorthandRegex, function(m, r, g, b) {
					        return r + r + g + g + b + b;
					    });
	
					    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
					    return result ? {
					        r: parseInt(result[1], 16),
					        g: parseInt(result[2], 16),
					        b: parseInt(result[3], 16)
					    } : null;
					},
	
					// Returns a function, that, as long as it continues to be invoked, will not
					// be triggered. The function will be called after it stops being called for
					// N milliseconds. If `immediate` is passed, trigger the function on the
					// leading edge, instead of the trailing.
					debounce: function(func, wait, immediate) {
						var timeout;
	
						return function() {
							var context = this,
								args = arguments;
	
							var later = function() {
								timeout = null;
								if (!immediate) func.apply(context, args);
							};
	
							var callNow = immediate && !timeout;
	
							clearTimeout(timeout);
							timeout = setTimeout(later, wait);
	
							if (callNow) {
								func.apply(context, args);
							}
						};
					},
	
	                /**
	                 * hasPersistingStorage
	                 * @return   {bool}  True if storage is persistance, false if not.
	                 *                   In some circumstances localStorage and cookies are not available
	                 *                   (Safari in private mode with iframe relay storage for example)
	                 */
	                hasPersistingStorage: function() {
	                    var hasLocalStorage = true,
	                        hasCookieStorage = true,
	                        date = new Date(),
	                        testKey = '__HC_STORAGE_TEST_' + date.getTime() + '__',
	                        testVal = date.getTime();
	
	                    // test if has localStorage?
	                    if (!('localStorage' in window) || !window.localStorage.setItem) {
	                        hasLocalStorage = false;
	                    }
	
	                    // test if localStorage is usable?
	                    if (hasLocalStorage) {
	                        try {
	                            window.localStorage.setItem(testKey, testVal);
	
	                            if (window.localStorage.getItem(testKey) != testVal) {
	                                // incognito session, quota exceeded
	                                throw new Error('Storage not useable');
	                            }
	                        } catch(e) {
	                            hasLocalStorage = false;
	                        }
	                    }
	
	                    // test if cookies are useable
	                    if (!hasLocalStorage) {
	                        if (!('cookie' in document)) {
	                            hasCookieStorage = false;
	                        }
	
	                        if (hasCookieStorage) {
	                            utils.createCookie(testKey, testVal, 1);
	
	                            if (parseInt(utils.readCookie(testKey), 10) !== testVal) {
	                                hasCookieStorage = false;
	                            }
	                        }
	                    }
	
	                    return hasLocalStorage || hasCookieStorage;
	                },
	
	                createCookie: function(name, value, days) {
	                	if (days) {
	                		var date = new Date();
	                		date.setTime(date.getTime() + (days*24*60*60*1000));
	                		var expires = '; expires=' + date.toGMTString();
	                	}
	                	else {
	                        var expires = '';
	                    }
	                	document.cookie = name + '=' + value + expires + '; path=/';
	                },
	
	                readCookie: function(name) {
	                	var nameEQ = name + '=';
	                	var ca = document.cookie.split(';');
	                	for(var i=0;i < ca.length;i++) {
	                		var c = ca[i];
	                		while (c.charAt(0)==' ') c = c.substring(1,c.length);
	                		if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
	                	}
	                	return null;
	                },
	
	                eraseCookie: function(name) {
	                	utils.createCookie(name, '', -1);
	                }
				};
	
			(function() {
			 	// Get the browser name and version...
				var userAgent 		= navigator.userAgent,
					userAgentMatch 	= userAgent.match(new RegExp('(opera|chrome|safari|firefox|msie|trident(?=\\/))\\/?\\s*(\\d+)', 'i')) || [],
					msie 			= userAgent.indexOf('MSIE '),
					trident 		= userAgent.indexOf('Trident/'),
					edge 			= userAgent.indexOf('Edge/'),
					temp;
	
				if (msie > 0) {
					// IE 10 or older => return version number
					result.browserName 		= 'ie';
					result.browserVersion 	= parseInt(userAgent.substring(msie + 5, userAgent.indexOf('.', msie)), 10);
				} else if (trident > 0) {
					// IE 11 => return version number
					var rv = userAgent.indexOf('rv:');
					result.browserName 		= 'ie';
					result.browserVersion 	= parseInt(userAgent.substring(rv + 3, userAgent.indexOf('.', rv)), 10);
				} else if (edge > 0) {
					// IE 12 => return version number
					result.browserName 		= 'ie';
					result.browserVersion 	= parseInt(userAgent.substring(edge + 5, userAgent.indexOf('.', edge)), 10);
				} else {
					if (userAgentMatch[1]=== 'Chrome'){
						temp = userAgent.match(new RegExp('\\bOPR\\/(\\d+)'));
						if (temp != null) {
							result.browserName 		= 'opera';
							result.browserVersion 	= temp[1] || 0;
							return;
						}
					}
					userAgentMatch = userAgentMatch[2]? [userAgentMatch[1], userAgentMatch[2]] : [navigator.appName, navigator.appVersion, '-?'];
					if ((temp = userAgent.match(new RegExp('version\\/(\\d+)', 'i'))) != null) {
						userAgentMatch.splice(1, 1, temp[1]);
					}
	
					result.browserName 		= userAgentMatch[0].toLowerCase();
					result.browserVersion 	= userAgentMatch[1];
					switch (result.browserName) {
						case 'safari':
							result.invalidTransitions = ['transform'];
							break;
					}
				}
			})();
	
			return result;
		})();
	
	utils.money = {
	    /**
	     * parse
	     * Parse a string with a money amount to a float value
	     * @param   string  value with a money amount (i.e. "122,95 EUR")
	     * @return  float   money value
	     */
	    parse: function (strg) {
	        if (typeof strg == 'number') return strg;
	
	        var strg = (typeof strg === 'string') ? strg.replace(/[^\d(,|.)-]/g, '') : (strg || ""),
	            decimal = '.';
	
	        strg = strg.replace(/[^0-9$.,]/g, '');
	        if(strg.indexOf(',') > strg.indexOf('.')) decimal = ',';
	        if((strg.match(new RegExp("\\" + decimal,"g")) || []).length > 1) {
	            decimal="";
	        }
	
	        if (decimal != "" && (strg.length - strg.indexOf(decimal) - 1 == 3) && strg.indexOf("0" + decimal)!==0){
	            decimal = "";
	        }
	
	        strg = strg.replace(new RegExp("[^0-9$" + decimal + "]","g"), "");
	        strg = strg.replace(',', '.');
	        return parseFloat(strg);
	    },
	
	    /**
	     * formatMoneyValue
	     * @param   string  currencySymbol
	     * @param   float   to money amount
	     * @string  string  formatted string
	     */
	    formatMoneyValue: function (currencySymbol, value) {
	        return currencySymbol + ' ' + (value.toFixed(2));
	    },
	};
	
	utils.net = {
		send: function(url, callback, postData) {
			var xmlHttpRequest = null;
			if (window.XMLHttpRequest) {
				xmlHttpRequest = new XMLHttpRequest();
			} else {
				try {
					xmlHttpRequest = new ActiveXObject('Microsoft.XMLHTTP');
				} catch (error) {
					console.error(error);
					xmlHttpRequest = null;
				}
			}
	
			if (!xmlHttpRequest) {
				return;
			}
	
			xmlHttpRequest.open(postData ? 'POST' : 'GET', url, true);
			if (postData) {
				if (typeof postData === 'object') {
					var s = '';
					for (var i in postData) {
						s += ((s === '') ? '' : '&') + i + '=' + utils.net.encodeData(postData[i]);
					}
					postData = s;
				}
				xmlHttpRequest.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
			}
			xmlHttpRequest.onreadystatechange = function () {
				if (xmlHttpRequest.readyState != 4) {
					return;
				}
				if ((xmlHttpRequest.status != 200) && (xmlHttpRequest.status != 304)) {
					callback && callback(true, {status: xmlHttpRequest.status});
					return;
				}
				var responseText = xmlHttpRequest.responseText,
					data;
				try {
					data = JSON.parse(responseText);
				} catch (error) {
					data = responseText;
				}
				callback && callback(false, data);
			};
			if (xmlHttpRequest.readyState == 4) {
				setTimeout(
					function() {
						utils.net.send(url, callback, postData);
					},
					1000
				);
				return;
			}
			xmlHttpRequest.send(postData);
		},
		urlKey: function(key) { // Dirty URL key check...
			var href = document.location.href;
			return (href.indexOf('hotelchamp=') !== -1) && (href.indexOf(key) !== -1);
		},
		urlLanguage: function() {
			var href = document.location.href;
			return href.substr((href.indexOf('hcLang=')+7), 2);
		},
		addURLParam: function(url, param, value) {
	        var separator = ((url.indexOf('?') === -1) ? ((url.endsWith('#'))? '' : '?') : '&'),
	            paramAndValue = ((value === undefined) ? param : (param + '=' + utils.net.encodeData(value)));
	
	        if (url.indexOf('#') !== -1) {
	        	if(url.endsWith('#')){
	        		return url + separator + paramAndValue;
				}
	            var hashPos = url.indexOf('#');
	            return url.slice(0, hashPos) + separator + paramAndValue + url.slice(hashPos);
	        } else {
	            return url + separator + paramAndValue;
	        }
		},
		removeURLParams: function(url) {
			var i = url.indexOf('?');
			return (i === -1) ? url : url.substr(0, i);
		},
		removeProtocol: function(url) {
			var i = url.indexOf('://');
			return (i === -1) ? url : url.substr(i + 3 - url.length);
		},
		removeSlash: function(url) {
			while ((url.length > 1) && (url[url.length - 1] === '/')) {
				url = url.substr(0, url.length - 1);
			}
			return url;
		},
		removeDomain: function(url) {
			var i = url.indexOf('/');
			return (i === -1) ? url : url.substr(i - url.length);
		},
		removeWWW: function(url) {
			return (url.substr(0, 4) === 'www.') ? url.substr(4 - url.length) : url;
		},
		encodeData: function(data) {
			if (window.encodeURIComponent) {
				return window.encodeURIComponent(data);
			}
			return escape(data);
		},
		decodeData: function(data) {
			if (window.decodeURIComponent) {
				return window.decodeURIComponent(data);
			}
			return unescape(data);
		},
		matchURI: function(href, uriList) {
			href = href.toLowerCase();
	
			var match 	= function(checkURI, uri) {
					if (checkURI === '*') {
						return true;
					} else if (checkURI[checkURI.length - 1] === '*') { 	// "en/rooms/*"
						var u = utils.net.removeSlash(checkURI.substr(0, checkURI.length - 1)).toLowerCase();
						return (uri.substr(0, u.length).toLowerCase() === u);
					} else if (checkURI.toLowerCase() === uri.toLowerCase()) {	// "en/rooms"
						return true;
					}
					return false;
				},
				url 	= utils.net.removeSlash(utils.net.removeProtocol(utils.net.removeWWW(href))),
				uri 	= utils.net.removeDomain(url),
				found 	= false,
				i 		= uriList.length;
	
			while (i && !found) {
				var checkURI 	= utils.net.removeProtocol(uriList[--i]),
					k 			= checkURI.indexOf('*'),
					l 			= checkURI.indexOf('?');
	
				if ((k !== -1) || (l !== -1)) {
					// If we try to find a URL with parameters like this one:
					// gc.synxis.com/rez.aspx?Chain=11693&Hotel=28701*
					// then we don't want to remove the parameters for matching...
					found = match(checkURI, url) || match(checkURI, uri);
				} else {
					found = match(checkURI, utils.net.removeURLParams(url)) || match(checkURI, utils.net.removeURLParams(uri));
				}
			}
	
			return found;
		}
	};
	
	utils.dom = {
		prefix: 'ixnrta',
		urlKey: function(key) { // Dirty URL key check...
			var href = document.location.href;
			return (href.indexOf('hotelchamp=') !== -1) && (href.indexOf(key) !== -1);
		},
		prefixed: function(v) {
			return (v.substr(0, utils.dom.prefix.length) === utils.dom.prefix) ? v : (utils.dom.prefix + v);
		},
		updatePrefix: function(v) {
			(typeof v === "number") && (v = String(v));
			return v.replace(new RegExp('~', 'gi'), utils.dom.prefix);
		},
		get: function(id, domElement) {
			domElement = domElement || document;
			return (typeof id === 'string') ? domElement.getElementById(utils.dom.updatePrefix(id)) : id;
		},
		query: function(path, domElement) {
			domElement = domElement || document;
			if (path === '') {
				return domElement;
			}
			var path = path.replace(/~/gi, utils.dom.prefix);
			try {
				result = domElement.querySelector(path);
			} catch (error) {
				result = null;
			}
			return result;
		},
		queryAll: function(path, domElement) {
			domElement = domElement || document;
			if (path === '') {
				return domElement;
			}
			var path = path.replace(/~/gi, utils.dom.prefix);
			try {
				result = domElement.querySelectorAll(path);
			} catch (error) {
				result = null;
			}
			return result;
		},
		style: function(domElement, style) {
			domElement = utils.dom.get(domElement);
	
	        if (typeof style == 'string') {
	            style = utils.dom.cssStringToObject(style);
	        }
	
			if (domElement && style) {
				for (var i in style) {
					domElement.style[i] = style[i];
				}
			}
		},
	    cssStringToObject: function(cssString) {
	        var properties 	= cssString.split(';'),
	            object 		= {};
	        for (var i = 0; i < properties.length; i++) {
	            if (properties[i].length && (properties[i].indexOf(':') !== -1)) {
	                var property 	= properties[i].split(':'),
	                    key 		= utils.string.camelize(property[0]);
	                key.length && (object[key] = property[1]);
	            }
	        }
	        return object;
	    },
		addClass: function(domElement, className) {
			domElement = utils.dom.get(domElement);
			if (domElement) {
				className = utils.dom.updatePrefix(className);
				var s = domElement.className;
				if (s.indexOf(className) === -1) {
					domElement.className = s + ' ' + className;
				}
			}
		},
		removeClass: function(domElement, className) {
	        domElement = utils.dom.get(domElement);
			if (domElement) {
				className = utils.dom.updatePrefix(className);
				var s = domElement.className,
					i = s.indexOf(className);
				if (i !== -1) {
					var j = className.length + i;
					s = s.substr(0, i) + s.substr(j, s.length - j);
					s = s.trim().replace(/  /g, ' ');
					domElement.className = s;
				}
			}
		},
		removeClassByPrefix: function(domElement, prefix) {
	        prefix = utils.dom.updatePrefix(prefix);
			var cls = domElement.className.split(' ')['filter'](function(c) {
			    return c.lastIndexOf(prefix, 0) !== 0;
			});
			domElement.className = cls.join(' ').trim();
		},
		hasClass: function(domElement, className) {
			domElement = utils.dom.get(domElement);
			if (domElement) {
				className = utils.dom.updatePrefix(className);
				var classNames 	= (domElement.className || '').split(' '),
					i 			= classNames.length;
				while (i) {
					if (classNames[--i] === className) {
						return true;
					}
				}
			}
			return false;
		},
		getClassList: function(domElement) {
			if (domElement.classList) {
				return utils.vars.arrayFrom(domElement.classList)
			} else if (domElement.className && domElement.className !== '') {
	            return (domElement.className || '').split(' ');
			} else {
				return [];
			}
		},
		removeChildren: function(domElement) {
			domElement = utils.dom.get(domElement);
			if (domElement) {
				var childNodes = domElement.childNodes;
				while (childNodes.length) {
					domElement.removeChild(childNodes[0]);
				}
			}
		},
		addTransition: function(domElement, properties) {
			var style = domElement.style;
			if (style._invalidTransitions === undefined) {
				style._invalidTransitions = {};
			}
			var transition = [];
			// TODO : Look into this:
			// Old for:
			// for (var j in properties) {
			for (var j = 0; j < properties.length; j++) {
				property = properties[j];
				var s = property.split(' ');
				if (utils.invalidTransitions.indexOf(s[0]) === -1) {
					transition.push(property);
				} else {
					var list = property.split(' ');
					style._invalidTransitions[list[0]] = list;
				}
			}
	
			var transitions = ['webkitTransition', 'transition', 'oTransition', 'mozTransition'],
				i 			= transitions.length;
			transition = transition.join(',');
			while (i) {
				style[transitions[--i]] = transition;
			}
		},
		addTransform: function(domElement, transform) {
			// Keep prefixed styles in mind
			domElement.style.transform = transform;
			domElement.style.MozTransform = transform;
			domElement.style.webkitTransform = transform;
	
			var invalidTransitions = domElement.style._invalidTransitions;
			if (invalidTransitions && invalidTransitions.transform && domElement._transitionEndCallback) {
				var callbacks = domElement._transitionEndCallback;
				for (var i = 0; i < callbacks.length; i++) {
					callbacks[i]();
				}
			}
		},
		onTransitionEnd: function(domElement, callback) {
			var events 	= ['webkitTransitionEnd', 'transitionend', 'oTransitionEnd'],
				i 		= events.length;
			while (i) {
				utils.listen(domElement, events[--i], callback);
			}
			if (domElement._transitionEndCallback === undefined) {
				domElement._transitionEndCallback = [];
			}
			domElement._transitionEndCallback.push(callback);
		},
		hide: function(domElement) {
			if (utils.vars.isArray(domElement)) {
				utils.forEach(domElement, utils.hide);
			} else {
				domElement = utils.dom.get(domElement);
				domElement && (domElement.style.display = 'none');
			}
		},
		show: function(domElement, displayMode) {
			displayMode = displayMode || 'block';
			if (utils.vars.isArray(domElement)) {
				utils.forEach(domElement, utils.dom.show);
			} else {
				domElement = utils.dom.get(domElement);
				domElement && (domElement.style.display = displayMode);
			}
		},
		fadeElement: function(domElement) {
			domElement = utils.dom.get(domElement);
			domElement._fadeInTimeout && clearTimeout(domElement._fadeInTimeout);
			domElement._fadeOutTimeout && clearTimeout(domElement._fadeOutTimeout);
			domElement._fadeInTimeout 	= null;
			domElement._fadeOutTimeout	= null;
			return domElement;
		},
		fadeIn: function(domElement) {
			if (utils.vars.isArray(domElement)) {
				utils.forEach(domElement, utils.fadeIn);
			} else {
				domElement = utils.dom.fadeElement(domElement);
				var style = domElement.style;
				style.opacity = 0;
				style.display = 'block';
				domElement._fadeInTimeout = setTimeout(function() { style.opacity = 1; }, 50);
			}
		},
		fadeOut: function(domElement) {
			if (utils.vars.isArray(domElement)) {
				utils.forEach(domElement, utils.fadeOut);
			} else {
				domElement = utils.dom.fadeElement(domElement);
				var style = domElement.style;
				style.opacity = 0;
				domElement._fadeOutTimeout = setTimeout(function() { style.display = 'none'; }, 1000);
			}
		},
		toggle: function(domElement, block) {
			domElement.style.display = (domElement.style.display === 'none') ? (block ? block : 'block') : 'none';
		},
		visible: function(domElement, visible) {
			domElement && (domElement.style.visibility = visible ? 'visible' : 'hidden');
		},
		loadStylesheet: function(href) {
			if(href.indexOf('http') == -1) {
				href = document.location.protocol + href;
			}
	
			var link = document.createElement('link');
			link.rel 	= 'stylesheet';
			link.href 	= href;
			link.type 	= 'text/css';
			link.media 	= 'all';
			document.head.appendChild(link);
		},
		getPositionValue: function(v) {
			if (typeof v === 'string') {
				if (v.length && (v[v.length - 1] === '%')) {
					return v;
				}
				v = parseInt(v, 10);
				if (isNaN(v)) {
					return v;
				}
				return v + 'px';
			}
			if (typeof v === 'number') {
				return v + 'px';
			}
			return v;
		},
	    absolutePosition: function(el) {
	        var
	            found,
	            left = 0,
	            top = 0,
	            width = 0,
	            height = 0,
	            offsetBase = window.__ABSOLUTE_POSITION__ ? window.__ABSOLUTE_POSITION__.offsetBase : null;
	        if (!offsetBase && document.body) {
	            window.__ABSOLUTE_POSITION__ = {};
	            offsetBase = window.__ABSOLUTE_POSITION__.offsetBase = document.createElement('div');
	            offsetBase.style.cssText = 'position:absolute;left:0;top:0';
	            document.body.appendChild(offsetBase);
	        }
	        if (el && el.ownerDocument === document && 'getBoundingClientRect' in el && offsetBase) {
	            var boundingRect = el.getBoundingClientRect();
	            var baseRect = offsetBase.getBoundingClientRect();
	            found = true;
	            left = boundingRect.left - baseRect.left;
	            top = boundingRect.top - baseRect.top;
	            width = boundingRect.right - boundingRect.left;
	            height = boundingRect.bottom - boundingRect.top;
	        }
	        return {
	            found: found,
	            left: left,
	            top: top,
	            width: width,
	            height: height,
	            right: left + width,
	            bottom: top + height
	        };
	    },
		removeChildren: function(domElement) {
			while (domElement && domElement.childNodes.length) {
				domElement.removeChild(domElement.childNodes[0]);
			}
		},
		computedStyle: function(domElement) {
			return domElement.currentStyle || window.getComputedStyle(domElement);
		},
	    isDomElement: function(object) {
	        return object && 'nodeType' in object;
	    },
	    isNodeList: function(object) {
	        return object == '[object NodeList]';
		},
	    viewPortWidth: function() {
	        return window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth || 0;
	    },
	    viewPortHeight: function() {
	        return window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight || 0;
	    },
	
	    /**
	     * dataset
	     * DOM dataset util scoped for HC system with auto JSON encoding and decoding.
	     * @param   {object}    Element
	     * @param   {string}    Data attribute name (data-<attribute>) to fetch or set
	     * @param   {mixed}     The value to set (optional)
	     * @return
	     */
	    dataset: function(element, attribute, value) {
	        var attribute = utils.string.underscore(utils.dom.prefix + '_' + attribute),
	            result = undefined,
	            formattedValue = value;
	
	        if (element) {
	            if (value !== undefined) {
	                if (typeof value !== 'object') {
	                    formattedValue = { '__VALUE__': value };
	                }
	
	                formattedValue = JSON.stringify(formattedValue);
	
	                element.dataset[attribute] = formattedValue;
	                result = formattedValue;
	            } else if(element.dataset[attribute] !== undefined) {
	                try {
	                    result = JSON.parse(element.dataset[attribute]);
	
	                    if ('__VALUE__' in result) {
	                        result = result['__VALUE__'];
	                    }
	                } catch(e) {
	                    result = element.dataset[attribute];
	                }
	            }
	        }
	
	        return result;
	    },
	
	    /**
	     * Determines if element in view.
	     *
	     * @param      {HTMLElement}   el      {Element that has to be checked}
	     * @return     {boolean}  True if element in view, False otherwise.
	     */
	    isElementInView: function(el) {
	        var rect = el.getBoundingClientRect(),
	            elemTop = rect.top,
	            elemBottom = rect.bottom,
	            elemLeft = rect.left,
	            elemRight = rect.right,
	            isVisibleVertical = (elemTop >= 0) || (elemBottom <= window.innerHeight),
	            isVisibleHorizontal = (elemLeft >= 0) || (elemRight <= window.innerWidth),
	            isVisible = isVisibleHorizontal && isVisibleVertical;
	
	        return isVisible;
	    },
	
	
	    /**
	     * isElementInViewport
	     * @Info: Function in customized but based on http://stackoverflow.com/a/7557433
	     */
	
	    /**
	     * Determines if element in viewport.
	     *
	     * @param      {HTMLElement}   el          { Element to test on }
	     * @param      {integer}   percentage  The percentage
	     * @return     {boolean}  True if percentage of element in viewport, False otherwise.
	     *
	     *
	     * Note:
	     * Statements for visibleWidth/visibleHeight:
	     * if (x <= 0) {
	     *      console.log('x<=0');
	     *      visWidth = width + x;
	     *  } else if ((width + x) < window.innerWidth) {
	     *      console.log("(width + x) < window.innerWidth");
	     *      visWidth = width;
	     *  } else {
	     *      console.log('naaaawh :(');
	     *      visWidth = width - ((x + width) - window.innerWidth);
	     *  }
	     *
	     * if (y <= 0) {
	     *      console.log('y<=0');
	     *      visHeight = height + y;
	     *  } else if ((height + y) < window.innerHeight) {
	     *      console.log("(height + y) < window.innerHeight");
	     *      visHeight = height;
	     *  } else {
	     *      console.log('naaaawh :(');
	     *      visHeight = height - ((y + height) - window.innerHeight);
	     *  }
	     */
	    isElementInViewport: function(el, percentage) {
	        //special bonus for those using jQuery
	        if (typeof jQuery === "function" && el instanceof jQuery) {
	            el = el[0];
	        }
	
	        if (utils.dom.isElementInView(el)) {
	            var rect = el.getBoundingClientRect(),
	                x = rect.x,
	                y = rect.y,
	                right = rect.right,
	                bottom = rect.bottom,
	                w = rect.width, // Thank our beautiful minifier for these varnames... w = width
	                h = rect.height, // Thank our beautiful minifier for these varnames... h = height
	                acreage = w*h,
	                windowWidth = window.innerWidth || document.documentElement.clientWidth,
	                windowHeight = window.innerHeight || document.documentElement.clientHeight,
	                visibleWidth = (x <= 0) ? (w + x) : (((w + x) < windowWidth) ? w : w - (right - windowWidth)),
	                visibleHeight = (y <= 0) ? (h + y) : (((h + y) < windowHeight) ? h : h - (bottom - windowHeight)),
	                visibleAcreage = visibleWidth*visibleHeight,
	                visiblePercentage = visibleAcreage/acreage*100;
	
	                return visiblePercentage >= percentage;
	        }
	
	        return false;
	    }
	};
	
	utils.date = {
		longMonths: ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december'],
		shortMonths: ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sept', 'oct', 'nov', 'dec'],
	
		/**
		 * Date format identifiers:
		 *     - X   ignore the value
		 *     - Y   year
		 *     - M   month
		 *     - m   month name (Januari, February, etc.)
		 *     - D   day of the month
		 *
		 * Separators:
		 *     - Possible separators are " ", "-", ",", "/"
		 *     - When a space is found next to another separator it will be ignored
		 *
		 * Examples:
		 *
		 *     - "Monday, November 16, 2015"  parse with: "X,m D,Y"
		 *     - "15/10/2015"                 parse with: "M/D/Y"
		 *     - "June 15, 2015"              parse with: "m D,Y"
		**/
		parse: function(value, pattern, options) {
	
	        options = options || {};
	
	        var separators 	= ' -,/',
	            forcedTime = options && options.forcedTime ? options.forcedTime : null;
	
	        if (value instanceof Date) {
	            var date = new Date(value.getTime());
	            if(forcedTime){
	                date.setHours.apply(date, utils.vars.isArray(forcedTime) ? forcedTime : [forcedTime]);
	            }
	            return date;
	        }
	
			/**
			 * Prepare the value, remove all redundant spaces...
			**/
			function prepareString(value) {
				var lastChar 	= null,
					result	 	= '';
				value = value.trim();
				for (var i = 0; i < value.length; i++) {
					var chr 		= value[i],
						nextChar 	= (i + 1 < value.length) ? value[i + 1] : null;
	
					if (chr === ' ') {
						if ((lastChar !== null) && (nextChar !== null)) {
							if ((separators.indexOf(lastChar) === -1) && (separators.indexOf(nextChar) === -1)) {
								result += chr;
							}
						} else if ((lastChar !== null) && (separators.indexOf(lastChar) === -1)) {
							result += chr;
						} else if ((nextChar !== null) && (separators.indexOf(nextChar) === -1)) {
							result += chr;
						}
					} else {
						result += chr;
					}
	
					lastChar = chr;
				}
				return result;
			}
	
			pattern = prepareString(pattern);
			value 	= prepareString(value);
	
			var now 			= new Date(),
				valueIndex 		= 0,
				valuePart 		= '',
				patternIndex 	= 0,
				patternPart 	= '',
				result 			= {};
	
	        if (forcedTime) {
	            now.setHours.apply(now, utils.vars.isArray(forcedTime) ? forcedTime : [forcedTime]);
	        }
	
			while ((valueIndex < value.length) && (patternIndex < pattern.length)) {
				while ((valueIndex < value.length) && (separators.indexOf(value[valueIndex]) === -1)) {
					valuePart += value[valueIndex++];
				}
				while ((patternIndex < pattern.length) && (separators.indexOf(pattern[patternIndex]) === -1)) {
					patternPart += pattern[patternIndex++];
				}
				switch (patternPart) {
					case 'Y': // Find year...
						var i = parseInt(valuePart);
						if (isNaN(i)) {
							throw new Error('Invalid year');
						}
						result.year = (valuePart.length === 2) ? (2000 + i) : i;
						break;
	
					case 'm': // Find month, resulting value in range: 0..11
						var lowerValue 	= valuePart.toLowerCase(),
							i 			= utils.date.longMonths.indexOf(lowerValue);
	
						(i === -1)  && (i = utils.date.shortMonths.indexOf(lowerValue));
						if (i === -1) {
							throw new Error('Invalid month');
						}
						result.month = i;
						break;
	
					case 'M': // Find month, integer value expexted in range: 0..11
						var i = parseInt(valuePart);
						if (isNaN(i) || (i < 1) || (i > 12)) {
							throw new Error('Invalid month number');
						}
						result.month = i - 1;
						break;
	
					case 'D': // Find day of the month, interger value expected in range: 1..31
						var i = parseInt(valuePart);
						if (isNaN(i) || (i < 1) || (i > 31)) {
							throw new Error('Invalid day');
						}
						result.day = i;
						break;
				}
	
				while ((valueIndex < value.length) && (separators.indexOf(value[valueIndex]) !== -1)) {
					valueIndex++;
				}
				while ((patternIndex < pattern.length) && (separators.indexOf(pattern[patternIndex]) !== -1)) {
					patternIndex++;
				}
	
				valuePart 	= '';
				patternPart = '';
			}
	
			while ((valueIndex < value.length) || (patternIndex < pattern.length)) {
				throw new Error('No pattern match');
			}
			now.setYear(result.year);
			now.setMonth(result.month); // Javascript months are in the range: 0..11
			now.setDate(result.day);
	
			return now;
		},
	
		isParseable: function(value) {
			return (!!value && typeof value == 'string');
		},
	
	    isParseableOrDateInstance: function(value) {
			return (!!value && typeof value == 'string') || (value instanceof Date);
		},
	
		dateToString: function(date, separator, dutch) {
	        separator = !!separator ? separator : '-';
	
	        if (dutch) {
	            return ('0' + date.getDate()).substr(-2) + separator + ('0' + (date.getMonth() + 1)).substr(-2) + separator + date.getFullYear();
	        } else {
			    return date.getFullYear() + separator + ('0' + (date.getMonth() + 1)).substr(-2) + separator + ('0' + date.getDate()).substr(-2);
	        }
		},
	
		isWeekDay: function(date) {
			return !utils.date.isWeekendDay(date);
		},
	
		isWeekendDay: function(date) {
			return date.getDay() === 6 || date.getDay() === 0;
		},
	
	    isDay: function(date, day) {
	        var dateDay = date.getDay(),
	            day = day.toUpperCase(),
	            weekDays = {
	                "SUNDAY" : 0,
	                "MONDAY" : 1,
	                "TUESDAY" : 2,
	                "WEDNESDAY" : 3,
	                "THURSDAY" : 4,
	                "FRIDAY" : 5,
	                "SATURDAY" : 6
	            },
	            desiredDay = weekDays[day];
	        return (desiredDay && dateDay === desiredDay);
	    },
	
	    /**
	     * dateAdd
	     * @info: http://stackoverflow.com/questions/1197928/how-to-add-30-minutes-to-a-javascript-date-object
	     * @param   {object}    Date object
	     * @param   {string}    Year, quarter, month, week, day, hour, minute, second
	     * @param   {int}       Units
	     */
	    dateAdd: function(date, interval, units) {
	        var ret = new Date(date); //don't change original date
	        switch(interval.toLowerCase()) {
	            case 'year': ret.setFullYear(ret.getFullYear() + units);  break;
	            case 'quarter': ret.setMonth(ret.getMonth() + 3*units);  break;
	            case 'month': ret.setMonth(ret.getMonth() + units);  break;
	            case 'week': ret.setDate(ret.getDate() + 7*units);  break;
	            case 'day': ret.setDate(ret.getDate() + units);  break;
	            case 'hour': ret.setTime(ret.getTime() + units*3600000);  break;
	            case 'minute': ret.setTime(ret.getTime() + units*60000);  break;
	            case 'second': ret.setTime(ret.getTime() + units*1000);  break;
	            default: ret = undefined;  break;
	        }
	
	        return ret;
	    },
	
		/**
		 *
		 * @param	object	Date instance
		 * @param	object	Date instance
		 * @return	int		Difference in days
		 */
		dateDiffInDays: function(a, b) {
			var msPerDay = 1000 * 60 * 60 * 24;
	
			// Discard the time and time-zone information.
			var utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
			var utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());
	
			return Math.floor((utc2 - utc1) / msPerDay);
		}
	};
	
	utils.minifier = {
		func: function(context, func, args) {
			if ((func.substr(0, 9) === 'function ') && (func.substr(-2) === '()')) {
				func = func.substr(9, func.length - 11).trim();
			}
			return function() {
				context[func].apply(context, args || []);
			};
		},
		varName: function(v) {
			if (v.substr(0, 4) === 'var ') {
				return v.substr(4, v.length - 4).trim();
			}
			return v;
		}
	};
	utils.currency = {
	    /**
	     * https://github.com/bengourley/currency-symbol-map
	     * map.js
	     */
	    currencyMappings: {
	        "AED": "د.إ",
	        "AFN": "؋",
	        "ALL": "L",
	        "ANG": "ƒ",
	        "AOA": "Kz",
	        "ARS": "$",
	        "AUD": "$",
	        "AWG": "ƒ",
	        "AZN": "₼",
	        "BAM": "KM",
	        "BBD": "$",
	        "BDT": "৳",
	        "BGN": "лв",
	        "BHD": ".د.ب",
	        "BIF": "FBu",
	        "BMD": "$",
	        "BND": "$",
	        "BOB": "Bs.",
	        "BRL": "R$",
	        "BSD": "$",
	        "BTN": "Nu.",
	        "BWP": "P",
	        "BYR": "p.",
	        "BZD": "BZ$",
	        "CAD": "$",
	        "CDF": "FC",
	        "CHF": "CHF",
	        "CLP": "$",
	        "CNY": "¥",
	        "COP": "$",
	        "CRC": "₡",
	        "CUC": "$",
	        "CUP": "₱",
	        "CVE": "$",
	        "CZK": "Kč",
	        "DJF": "Fdj",
	        "DKK": "kr",
	        "DOP": "RD$",
	        "DZD": "دج",
	        "EEK": "kr",
	        "EGP": "£",
	        "ERN": "Nfk",
	        "ETB": "Br",
	        "EUR": "€",
	        "FJD": "$",
	        "FKP": "£",
	        "GBP": "£",
	        "GEL": "₾",
	        "GGP": "£",
	        "GHC": "₵",
	        "GHS": "GH₵",
	        "GIP": "£",
	        "GMD": "D",
	        "GNF": "FG",
	        "GTQ": "Q",
	        "GYD": "$",
	        "HKD": "$",
	        "HNL": "L",
	        "HRK": "kn",
	        "HTG": "G",
	        "HUF": "Ft",
	        "IDR": "Rp",
	        "ILS": "₪",
	        "IMP": "£",
	        "INR": "₹",
	        "IQD": "ع.د",
	        "IRR": "﷼",
	        "ISK": "kr",
	        "JEP": "£",
	        "JMD": "J$",
	        "JPY": "¥",
	        "KES": "KSh",
	        "KGS": "лв",
	        "KHR": "៛",
	        "KMF": "CF",
	        "KPW": "₩",
	        "KRW": "₩",
	        "KYD": "$",
	        "KZT": "₸",
	        "LAK": "₭",
	        "LBP": "£",
	        "LKR": "₨",
	        "LRD": "$",
	        "LSL": "M",
	        "LTL": "Lt",
	        "LVL": "Ls",
	        "MAD": "MAD",
	        "MDL": "lei",
	        "MGA": "Ar",
	        "MKD": "ден",
	        "MMK": "K",
	        "MNT": "₮",
	        "MOP": "MOP$",
	        "MUR": "₨",
	        "MVR": "Rf",
	        "MWK": "MK",
	        "MXN": "$",
	        "MYR": "RM",
	        "MZN": "MT",
	        "NAD": "$",
	        "NGN": "₦",
	        "NIO": "C$",
	        "NOK": "kr",
	        "NPR": "₨",
	        "NZD": "$",
	        "OMR": "﷼",
	        "PAB": "B/.",
	        "PEN": "S/.",
	        "PGK": "K",
	        "PHP": "₱",
	        "PKR": "₨",
	        "PLN": "zł",
	        "PYG": "Gs",
	        "QAR": "﷼",
	        "RMB": "￥",
	        "RON": "lei",
	        "RSD": "Дин.",
	        "RUB": "₽",
	        "RWF": "R₣",
	        "SAR": "﷼",
	        "SBD": "$",
	        "SCR": "₨",
	        "SDG": "ج.س.",
	        "SEK": "kr",
	        "SGD": "$",
	        "SHP": "£",
	        "SLL": "Le",
	        "SOS": "S",
	        "SRD": "$",
	        "SSP": "£",
	        "STD": "Db",
	        "SVC": "$",
	        "SYP": "£",
	        "SZL": "E",
	        "THB": "฿",
	        "TJS": "SM",
	        "TMT": "T",
	        "TND": "د.ت",
	        "TOP": "T$",
	        "TRL": "₤",
	        "TRY": "₺",
	        "TTD": "TT$",
	        "TVD": "$",
	        "TWD": "NT$",
	        "TZS": "TSh",
	        "UAH": "₴",
	        "UGX": "USh",
	        "USD": "$",
	        "UYU": "$U",
	        "UZS": "лв",
	        "VEF": "Bs",
	        "VND": "₫",
	        "VUV": "VT",
	        "WST": "WS$",
	        "XAF": "FCFA",
	        "XBT": "Ƀ",
	        "XCD": "$",
	        "XOF": "CFA",
	        "XPF": "₣",
	        "YER": "﷼",
	        "ZAR": "R",
	        "ZWD": "Z$"
	    },
	    /**
	     *
	     * @param cur
	     * @returns {null}
	     */
	    getCurrencySymbol: function (cur) {
	        var currency = (typeof cur == 'string') ? cur.toUpperCase() : null;
	        return currency && Object.keys(this.currencyMappings).indexOf(currency) !== -1 ? this.currencyMappings[currency] : null;
	    },
	    /**
	     *
	     * @param curSymbol
	     * @returns {string}
	     */
	    getCurrencyIsoCode: function (curSymbol) {
	        var currencyMappings = this.currencyMappings;
	
	        for (var currency in currencyMappings) {
	            if (currencyMappings[currency] == curSymbol) {
	                return currency;
	            }
	        }
	
	        return null;
	    },
	    isCurrency: function (curOrCurSymbol) {
	        var currencyMapping = this.currencyMappings,
	            isCurrencyIso = Object.keys(this.currencyMappings).indexOf(curOrCurSymbol.toUpperCase()) !== -1,
	            isCurrencySymbol = !!this.getCurrencyIsoCode(curOrCurSymbol);
	
	        return isCurrencyIso || isCurrencySymbol;
	    },
	    /**
	     * getFloat
	     * @info: take in any string like "1,950.60", "1.950,60", "1,950", "1.950", "1950.60" or "1950,60" and return the float of it
	     * @param   {string}    currencyString
	     * @returns {float}
	     */
	    getFloatFormat: function(currencyString) {
	        var regex_1 = new RegExp(/(^\d{1,3}(\.\d{3})*)+(,\d{1,2})?$/); //spanish version of float numbers 0.000,0,
	        var regex_2 = new RegExp(/(^\d{1,3}(,\d{3})*)+(.\d{1,2})?$/); //english version of float numbers  1,000.00
	
	        if (regex_1.test(currencyString)) {
	            return parseFloat(currencyString.replace(/\./g, '').replace(',', '.'));
	        } else if (regex_2.test(currencyString)) {                
	            return parseFloat(currencyString.replace(/,/g, ''));
	        } else {
	            return parseFloat(currencyString);
	        }
	    },
	    /**
	     * getCurrentRateFormat
	     * @info: take in any string like "1,950.60", "1.950,60", "1,950", "1.950", "1950.60" or "1950,60" and return the currentRate foramt of it
	     * @param   {string}    rate
	     * @returns {int}
	     */
	    getCurrentRateFormat: function(rate) {
	        return parseInt(parseFloat(this.getFloatFormat(rate), 10) * 100, 10);
	    }
	};
	
	utils.tracking = {
	    getGtmDataLayerValue: function(property, defaultValue) {
	        var dataLayer = window.dataLayer,
	            checkedDefaultValue = defaultValue === undefined ? null : defaultValue;
	
	        if (dataLayer) {
	            for (var i = dataLayer.length; i > 0; i--) {
	                if (property in dataLayer[i-1]) {
	                    return dataLayer[i-1][property];
	                }
	            }
	        }
	
	        return checkedDefaultValue;
	    }
	};
	utils.vars = {
		/*path: function(o, s) {
		    s = s.replace(/\[(\w+)\]/g, '.$1'); // convert indexes to properties
		    s = s.replace(/^\./, '');           // strip a leading dot
		    var a = s.split('.');
		    for (var i = 0, n = a.length; i < n; ++i) {
		        var k = a[i];
		        if (k in o) {
		            o = o[k];
		        } else {
		            return;
		        }
		    }
		    return o;
		},*/
	
		/**
		 * Get
		 * Get value from object or array by key or (dot separated) path
		 * @param	mixed	Source object or array
		 * @param	string	The key or path (dot separated)
		 * @param	mixed	Default value
		 * @return	mixed	The result or the default value when key or path is not found
		 */
		get: function(source, key, defaultValue) {
			defaultValue = defaultValue || null;
	
	        /**
	         * @author Arno
	         * MAGIC... FIX THIS
	         * Problem is :
	         * key can't start with number because of if lus.. why is this if here? Take a look at ELParser.
	         */
	        // if (!isNaN(parseInt(key, 10)) || !isNaN(parseFloat(key))) {
	        if (!isNaN(Number(key))) {
	            return defaultValue;
	        }
	
			var data 	= source,
				keys 	= [],
				word 	= '',
				i 		= 0,
				c,
				depth,
				start,
				index;
	
			key = key.replace(/\[(\w+)\]/g, '.$1');
	
			while (i < key.length) {
				c = key[i++];
				switch (c) {
					case '.':
						if (word in data) {
							data = data[word];
						} else {
							return defaultValue;
						}
						word = '';
						break;
	
					case '[':
						if (word !== '') {
							if (word in data) {
								data = data[word];
								word = '';
							} else {
								return defaultValue;
							}
						}
	
						depth = 1;
						start = i;
						while ((i < key.length) && depth) {
							c = key[i++];
							switch (c) {
								case '[':
									depth++;
									break;
	
								case ']':
									depth--;
									break;
							}
						}
	
						if ((i < key.length) && (key[i] === '.')) {
							i++;
						}
	
						data = utils.vars.get(data, key.substr(start, i - start - 2));
						word = '';
						break;
	
					default:
						word += c;
						break;
				}
			}
	
			if (word !== '') {
				if (word in data) {
					data = data[word];
				} else {
					return defaultValue;
				}
			}
	
			return data;
		},
	
		/**
		 * Set
		 * Set dot separated key path
		 * @param	mixed	Source object or array
		 * @param	string	The key or path (dot separated)
		 * @param	mixed	The value to set
		 * @return	mixed	The object with the new value
		 */
		set: function(source, path, value) {
			var segments = path.split('.'),
				segmentCount = segments.length,
				i,
				scope = source;
	
			for (i in segments) {
				if (segmentCount - 2 >= i) {
					if (!scope[segments[i]]) {
						scope[segments[i]] = {};
					}
	
					scope = scope[segments[i]];
				} else {
					scope[segments[i]] = value;
				}
			}
	
			return source;
		},
	
		/**
		 * isArray
		 * Simple check to determine whether given value
		 * is an array or not
		 * @param	mixed	Value to check
		 * @return	bool	True if value if array, false if not
		 */
		isArray: function(value) {
			return (Object.prototype.toString.call(value) === '[object Array]');
		},
	
		/**
		 * each
		 * Array.forEach is not supported in IE8!
		 * Better implementation (value AND key) of utils.forEach (should be refactored).
		 * @param	mixed		Object or Array
		 * @param	function	Callback that accepts params: value, key
		 * @return	void
		 */
		each: function(source, callback) {
			if (utils.vars.isArray(source)) {
				for (var i = 0; i < source.length; i++) {
					if (false === callback(source[i], i)) {
						break;
					}
				}
			} else {
				for (var i in source) {
					if (false === callback(source[i], i)) {
						break;
					}
				}
			}
	
		},
	
	    /**
	     * arrayFrom
	     * Helper function to convert non array to array value (arguments object for example).
	     * Equal functionality as ES6 Array.from()
	     */
	    arrayFrom: function(value) {
	        return Array.prototype.slice.call(value);
	    },
	
	    /**
	     * deepObjectExtend
	     * Object merge deep
	     * @source: http://stackoverflow.com/questions/14843815/recursive-deep-extend-assign-in-underscore-js
	     */
	    deepObjectExtend: function(target, source) {
	        for (var prop in source) {
	            if (source.hasOwnProperty(prop)) {
	                if (target[prop] && typeof source[prop] === 'object') {
	                    utils.vars.deepObjectExtend(target[prop], source[prop]);
	                }
	                else {
	                    target[prop] = source[prop];
	                }
	            }
	        }
	        return target;
	    },
	
		isNumber: function(value) {
	        return !isNaN(value);
	    },
	
	    isString: function(value) {
			return typeof value === 'string';
		}
	}
	;
	
	utils.string = {
		ucfirst: function(s) {
		    return s && s[0].toUpperCase() + s.slice(1);
		},
	
		lcfirst: function(s) {
			return s && s[0].toLowerCase() + s.slice(1);
		},
	
		ucwords: function toTitleCase(s) {
		    return s.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
		},
	
		trim: function(string) {
			return string.replace(/^\s+|\s+$/g, '');
		},
	
		camelize: function(string) {
			return string.replace(/([-_][a-z])/g, function($1){ return $1.toUpperCase().replace(/[-_]/,''); });
		},
	
		dash: function(string) {
			return string.replace(/([A-Z])/g, function($1, p1, pos){return (pos > 0 ? '-' : '') + $1.toLowerCase();});
		},
	
		underscore: function(string) {
			return string.replace(/([A-Z])/g, function($1){ return "_"+$1.toLowerCase(); });
		},
	
		replaceAll: function(target, search, replacement) {
			return target.replace(new RegExp(search, 'g'), replacement);
		},
	
		/**
		 * supplant
		 * does variable substitution on the string. It scans through the string looking for expressions enclosed
		 * in { } braces. If an expression is found, use it as a key on the object, and if the key has a string
		 * value or number value, it is substituted for the bracket expression and it repeats.
		 * @INFO: http://javascript.crockford.com/remedial.html
		 * @param	string
		 * @param	object
		 * @return	string
		 */
		supplant: function (string, o) {
		    return string.replace(/{([^{}]*)}/g,
		        function (a, b) {
		            var r = o[b];
		            return typeof r === 'string' || typeof r === 'number' ? r : a;
		        }
		    );
		},
	};
	
	var Queue = Class(Emitter, function(supr) {
			this.init = function init(opts) {
				this._ready = false;
				this._queue = [];
	
				supr(this, this.init, arguments);
			};
	
			this.queue = function(callback) {
				this._queue.push(callback);
			};
	
			this.clear = function clear() {
				while (this._queue.length) {
					this._queue.shift()();
				}
			};
		});
	var ELParser = Class(function() {
			this.init = function init(opts) {
				this._data = opts.data;
			};
	
			/**
			 * Split an expression into separate expressions:
			 *
			 *     "${title}"             -> [{el: true, v: "${title}"}]
			 *     "Hello ${world}"       -> [{el: false, v: "Hello "}, {el: true, v: "${world}"}]
			 *     "${hello} ${world}"    -> [{el: true, v: "${hello}"}, {el: false, v: " "}, {el: true, v: "${world}"}]
			**/
			this.getExpressionElements = function(s) {
				if (!s || !s.indexOf) {
					return [{el: false, v: s}];
				}
				var i = s.indexOf('${');
				if (i === -1) {
					return [{el: false, v: s}];
				}
				var j = i,
					elElements = [];
				i = 0;
				while (j !== -1) {
					// This can be an empty string or a part which does not contain an expression...
					var part = s.substr(i, j - i);
					if (part !== '') {
						elElements.push({el: false, v: s.substr(i, j - i)});
					}
					j += 2;
					var k = s.indexOf('}', j);
					if (k === -1) {
						return s;
					}
					// This part contains an expression...
					part = s.substr(j, k - j);
					elElements.push({el: true, v: part});
					i = k + 1;
					j = s.indexOf('${', i);
				}
				if (i < s.length) {
					elElements.push({el: false, v: s.substr(i - s.length)});
				}
				return elElements;
			};
	
			this.getData = function(s) {
				var elElements = this.getExpressionElements(s),
					result = '',
					elElement,
					i,
					j,
					matches,
					match,
					string,
					isVar,
					isNumber,
					dataKey;
	
				for (i = 0, j = elElements.length; i < j; i++) {
					elElement = elElements[i];
					dataKey = elElement.v;
	
					// Hack to find nested expression
					// @TODO: improve
	                if (dataKey) {
	                    matches = dataKey.match(/\[(.*)\]/);
	    				while (matches) {
	    					if (matches[1]) {
	
	    						isNumber = matches[1].match(/^[0-9]+$/) !== null;
	    						isVar = (!matches[0].match(/^[\'|\"]/) && !isNumber);	// it is a var when no quotes are used and key is not a number (index)
	    						dataKey = dataKey.replace(matches[0], (isVar ? '.' + (this._data[matches[1]] ? this._data[matches[1]] : '-Undefined-') : '.' + matches[1]));
	    						//dataKey = dataKey.replace(matches[0], (isVar ? '.' + utils.vars.get(this._data, matches[1], '<undefined>') : '.' + matches[1]));
	    					}
	
	    					matches = dataKey.match(/\[(.*)\]/);
	    					matches = null;
	    				}
	
	    				result += elElement.el ? this.getValueFromData(dataKey) : dataKey;
	                }
				}
				return result;
			};
	
			this.getValueFromData = function(key) {
				return utils.vars.get(this._data, key, key);
			};
		});
	
	var DOMModifier = Class(function() {
			this.init = function init(opts) {
				this._base = opts.base;
				this._data = opts.data;
				this._formList = null;
				this._aList = null;
				this._collectAttributes = {};
				this._elParser = new ELParser({data: this._data});
			};
	
			this.find = function(tagName, attributes) {
				var result = [],
					elements = document.getElementsByTagName(tagName),
					i = elements.length;
				while (i) {
					var domElement = elements[--i],
						found = true;
					for (var j in attributes) {
						var attribute = attributes[j],
							v = (j === 'className') ? domElement.className : domElement.getAttribute(j);
	
						switch (attribute.match) {
							case 'in':
								try {
									if (!v || (v.toLowerCase().indexOf(attribute.value.toLowerCase()) === -1)) {
										found = false;
									}
								} catch (error) {
									console.error(error);
									// attribute.value is not set...
								}
								break;
	
							case 'eq':
								if (v !== attribute.v) {
									found = false;
								}
								break;
						}
					}
					if (found) {
						result.push(domElement);
					}
				}
				return result;
			};
	
			this.findFormOrA = function(url) {
				if ((this._formList === null) && (this._aList === null)) {
					this._formList = document.getElementsByTagName('form');
					this._aList = document.getElementsByTagName('a');
				}
				var result = [],
					findByAttribute = function(list, attributeName, v) {
						var i = list.length;
						while (i) {
							var item = list[--i];
							if ((attributeName in item) && (item[attributeName].indexOf(v) !== -1)) {
								// if (document.location.href.indexOf('hotelchamp=hightlight')) {
								// 	item.style.backgroundColor = '#609C9B';
								// 	item.submit && item.submit();
								// }
								result.push(item);
							}
						}
					};
	
				this._formList && findByAttribute(this._formList, 'action', url);
				this._aList && findByAttribute(this._aList, 'href', url);
	
				return result;
			};
	
			this.reset = function() {
				this._collectAttributes = {};
			};
	
			this.findElementByTagName = function(xmlElement, tagName) {
				if (xmlElement.tagName === tagName) {
					return xmlElement;
				}
				var childNodes = xmlElement.childNodes;
				var i = childNodes.length;
				while (i) {
					var result = this.findElementByTagName(childNodes[--i], tagName);
					if (result) {
						return result;
					}
				}
				return null;
			};
	
			this.insertIntoDOM = function(parentNode, xmlElement) {
				var nodeName = xmlElement.nodeName;
				if (nodeName === '#text') {
					parentNode.appendChild(document.createTextNode(this._elParser.getData(xmlElement.nodeValue)));
				} else if (nodeName !== '#comment') {
					var node 		= document.createElement(nodeName),
						attributes 	= xmlElement.attributes;
					for (var i = 0; i < attributes.length; i++) {
						var attributeName 	= attributes[i].nodeName,
							attributeValue 	= this._elParser.getData(attributes[i].nodeValue);
						if ((attributeName in this._collectAttributes) && (this._collectAttributes[attributeName].value === attributeValue)) {
							this._collectAttributes[attributeName].list.push(node);
						}
						switch (attributeName) {
							case 'class':
								attributeName = 'className';
								break;
	
							case 'for':
								attributeName = 'htmlFor';
								break;
	
							case 'colspan':
								attributeName = 'colSpan';
								break;
	
							case 'rowspan':
								attributeName = 'rowSpan';
								break;
	
							case 'src':
							case 'href':
								if ((attributeValue.substr(0, 7) !== 'http://') && (attributeValue.substr(0, 8) !== 'https://')) {
									while (attributeValue.length && (attributeValue[0] === '/')) {
										attributeValue = attributeValue.substr(1 - attributeValue.length);
									}
									attributeValue = this._base + '/' + attributeValue;
								}
								break;
						}
						node[attributeName] = attributeValue;
					}
					parentNode.appendChild(node);
					var childNodes = xmlElement.childNodes;
					for (var i = 0; i < childNodes.length; i++) {
						this.insertIntoDOM(node, childNodes[i]);
					}
				}
			};
	
			this.insertChildNodesIntoDOM = function(parentNode, xmlElement) {
				var childNodes = xmlElement.childNodes;
				for (var i = 0, j = childNodes.length; i < j; i++) {
					this.insertIntoDOM(parentNode, childNodes[i]);
				}
			};
	
			this.clear = function(domElement) {
				var childNodes = domElement.childNodes;
				while (childNodes.length) {
					domElement.removeChild(childNodes[0]);
				}
			};
	
			this.loadCSS = function(filename) {
				if (!('_loadedCSS' in DOMModifier)) {
					DOMModifier._loadedCSS = {};
				}
				if (filename in DOMModifier._loadedCSS) {
					return;
				}
	
				var link = document.createElement('link');
				link.rel = 'stylesheet';
				link.href = filename;
				document.body.appendChild(link);
	
				DOMModifier._loadedCSS[filename] = true;
			};
	
			this.loadHead = function(domElement) {
				function removeLeadingSlash(s) {
					while (s.length && (s[0] === '/')) {
						s = s.substr(1 - s.length);
					}
					return s;
				}
				function removeTrailingSlash(s) {
					while (s.length && (s[s.length - 1] === '/')) {
						s = s.substr(0, s.length - 1);
					}
					return s;
				}
	
				var childNodes = domElement.childNodes;
				for (var i = 0, j = childNodes.length; i < j; i++) {
					var childNode = childNodes[i];
					switch (childNode.tagName) {
						case 'base':
							var href = childNode.getAttribute('href');
							if (href) {
								this._base = removeTrailingSlash(href);
							}
							break;
	
						case 'link':
							var rel = childNode.getAttribute('rel');
							if (rel === 'stylesheet') {
								var href = childNode.getAttribute('href');
								href && this.loadCSS(this._base + '/' + removeLeadingSlash(href));
							}
							break;
					}
				}
			};
	
			this.getCollectAttribute = function(collectAttribute) {
				if (collectAttribute.name in this._collectAttributes) {
					return this._collectAttributes[collectAttribute.name].list;
				}
				return false;
			};
	
			this.addCollectAttribute = function(collectAttribute) {
				this._collectAttributes[collectAttribute.name] = {value: collectAttribute.value, list: []};
			};
	
			this.getELParser = function() {
				return this._elParser;
			};
		});
	var customTags = {};
	
	function addCustomTag(name, constructor) {
		if (name in customTags) {
			return;
		}
		customTags[name] = new constructor({});
	}
	
	var DOMElements = Class(DOMModifier, function(supr) {
			this.init = function init(opts) {
				this._context 	= opts.context; // Call context for events, include templates...
				opts.data 		= opts.data || {};
	
				supr(this, this.init, arguments);
	
				this.buildTree(opts.parent, opts.domElement);
			};
	
			this._setStyle = function(node, style) {
				style = style.split(';');
				for (var i = 0; i < style.length; i++) {
					var keyValue 	= style[i].split(':'),
						oldKey 		= keyValue[0].trim(),
						newKey 		= '',
						j 			= newKey.length;
					while (j < oldKey.length) {
						var c = oldKey[j];
						if (c === '-') {
							j++;
							newKey += oldKey[j].toUpperCase();
						} else {
							newKey += c;
						}
						j++;
					}
					if (newKey.length && keyValue[1] && keyValue[1].trim) {
						node.style[newKey] = keyValue[1].trim();
					}
				}
			};
	
			this._getTypeFromElement = function(domElement) {
				return ('t' in domElement) ? domElement.t : (('type' in domElement) ? domElement.type : 'div');
			};
	
			this._getParamsArray = function(s) {
				var i 		= 0,
					params 	= [],
					param 	= '';
	
				function addParam() {
					if (param !== '') {
						if (!isNaN(parseInt(param, 10))) {
							param = parseInt(param, 10);
						} else if (!isNaN(parseFloat(param))) {
							param = parseFloat(param);
						}
						params.push(param);
						param = '';
					}
				}
	
				while (i < s.length) {
					var c = s[i++];
					switch (c) {
						case '(':
						case ')':
							break;
	
						case ' ':
						case ',':
							addParam();
							break;
	
						case "'":
						case '"':
							addParam();
							var quote = c;
							while (i < s.length) {
								c = s[i++];
								if (c === quote) {
									break;
								} else {
									param += c;
								}
							}
							addParam();
							break;
	
						default:
							param += c;
							break;
					}
				}
				addParam();
	
				return params;
			};
	
			this._addAttributes = function(node, attributes) {
				if ('style' in attributes) {
					this._setStyle(node, this._elParser.getData(attributes.style));
					delete attributes.style;
				}
				var context = this._context,
					v;
				for (var attribute in attributes) {
					v = utils.dom.updatePrefix(attributes[attribute]);
					attributes[attribute] = v;
	
					(bind(this, function(attribute, v) {
						if (attribute.substr(0, 2) === 'on') {
							var args = [],
								eventName = v,
								j = v.indexOf('(');
							if (j !== -1) {
								eventName = v.substr(0, j);
								args = this._getParamsArray(v.substr(j, v.length - j));
							}
							utils.listen(
								node,
								attribute.substr(2, attribute.length - 2),
								function(event) {
									context[eventName].apply(context, [event].concat(args));
								}
							);
						} else {
							node[(attribute === 'c') ? 'className' : attribute] = this._elParser.getData(v);
						}
					}))(attribute, v);
				}
			};
	
			this.buildNode = function(parent, domElement) {
				var cls 	= null,
					type 	= this._getTypeFromElement(domElement),
					attributes,
					value;
	
				if (typeof type === 'string') {
					attributes = domElement.attributes || domElement.a;
					if (type.substr(0, 2) === 'c:') {
						if (type in customTags) {
							customTags[type].handle(this, parent, domElement);
						}
						return null;
					} else if (type === 'text') {
						var node = document.createTextNode(this._elParser.getData(attributes.innerHTML) || '');
					} else {
						var node = document.createElement(type);
						attributes && this._addAttributes(node, attributes);
					}
				} else {
					var opts = domElement.opts || {};
					opts.parent = parent;
					cls = new domElement.type(opts);
					node = cls.getElement();
	
					attributes = domElement.attributes || domElement.a;
					if (attributes) {
						for (var i in attributes) {
							cls[i] = this._elParser.getData(attributes[i]);
						}
					}
					domElement.cls = cls;
				}
	
				var style = domElement.style;
				if (style) {
					for (var i in style) {
						node.style[i] = style[i];
					}
				}
	
				var on = domElement.on;
				if (on) {
					for (var i in on) {
						utils.listen(node, i, on[i]);
					}
				}
	
				if (!cls && parent) {
					if (domElement.first) { // Check if it's an insertBerore or an appendChild!
						var childNodes = parent.childNodes;
						var found = null;
						for (var i = 0; i < childNodes.length; i++) {
							if (childNodes[i].nodeType === 1) {
								found = childNodes[i];
								break;
							}
						}
	
						found ? parent.insertBefore(node, found) : parent.appendChild(node);
					} else {
						parent.appendChild(node);
					}
				}
				domElement.node = node;
	
				return node;
			};
	
			this.buildChildNodes = function(domElement, node) {
				var childNodes = domElement.childNodes || domElement.c || [];
				for (var i = 0, j = childNodes.length; i < j; i++) {
					var childNode = childNodes[i];
					if (childNode) {
						if (childNode.id) {
							domElement[childNode.id] = childNode;
						}
						this.buildTree(node, childNode);
					}
				}
			};
	
			this.buildTree = function(parent, domElement) {
				var node = this.buildNode(parent, domElement);
				node && this.buildChildNodes(domElement, node);
			};
	
			this.getContext = function() {
				return this._context;
			};
	
			this.getData = function() {
				return this._data;
			};
		});
	/**
	 * UI Component util functions
	 */
	utils.uiComponent = {
	
		/**
		 * extractTableCompData
		 * Helper method to extract data from
		 * tableComp data as plain key => value object.
		 * @param	object	Raw tableCompData ( { columns: [], data: [] } )
		 * @return	object	Key value object
		 */
		extractDataFromTableComponent: function(tableCompData) {
			var columns = tableCompData && tableCompData.columns || [],
				data = tableCompData && tableCompData.data || [],
				column,
				row,
				rowData,
				i,
				index,
				y,
				o,
				resultData = [];
	
			utils.vars.each(data, bind(this, function(row, y) {
				// row = data[y];
				rowData = row.rowData || [];
				o = {};
	
				utils.vars.each(rowData, bind(this, function(_, index) {
					column = columns[index];
					o[column.headerTitle] = rowData[index];
				}));
	
				resultData.push(o);
			}));
	
			return resultData;
		}
	};
	
	addCustomTag(
		'c:include',
		Class(function() {
			this.handle = function(domElements, parent, elElement) {
				var attributes 		= elElement.a || elElement.attributes || {},
					context 		= domElements.getContext(),
					templates 		= context.getWidget().getTemplates(),
					data 			= domElements.getData(),
					elParser 		= domElements.getELParser(),
					templateIndex 	= null;
	
				if (!attributes.file) {
					templateIndex = attributes.index;
				} else {
					var elements = elParser.getExpressionElements(attributes.file),
						filename = '';
	
					for (var i = 0; i < elements.length; i++) {
						var element = elements[i];
						filename += element.el ? elParser.getValueFromData(element.v) : element.v;
					}
					for (var i = 0; i < templates.length; i++) {
						if (templates[i].filename === filename) {
							templateIndex = i;
							break;
						}
					}
				}
				if (templateIndex !== null) {
					new DOMElements({
						context: 	context,
						domElement: utils.cloneDeep(templates[templateIndex].c[0]),
						parent: 	parent,
						data: 		data
					});
				}
			};
		})
	); // This function is defined in DOMElements.js!
	addCustomTag(
		'c:if',
		Class(function() {
			this.handle = function(domElements, parent, elElement) {
				var attributes = elElement.a || elElement.attributes || {};
				if ('test' in attributes) {
					var result = false,
						test = attributes.test;
					if ((test.substr(0, 2) === '${') && (test[test.length - 1] === '}')) {
						var data = domElements.getData();
						try {
							with (data) {
								result = eval(test.substr(2, test.length - 3));
							}
						} catch (error) {
							// Don't log, if the "test" value is not in data then the condition is false...
						}
					} else {
						// Error, invalid format!
					}
					if (result) {
						domElements.buildChildNodes(elElement, parent);
					}
				}
			};
		})
	); // This function is defined in DOMElements.js!
	/**
	 * Example:
	 *
	 * <c:forEach items="${testItems}" item="item">
	 *	name: ${item.name}, index: ${item.index}<br/>
	 * </c:forEach>
	**/
	addCustomTag(
		'c:forEach',
		Class(function() {
			this.handle = function(elElements, parent, element) {
				var attributes = element.a || element.attributes || {};
				if (attributes.items && attributes.item) {
					var data 		= elElements.getData(),
						elParser 	= elElements.getELParser(),
						elements 	= elParser.getExpressionElements(attributes.items);
					if ((elements.length === 1) && elements[0].el) {
						var items 	= elParser.getValueFromData(elements[0].v),
							item 	= attributes.item,
							index 	= attributes.index || false;
						if (items) {
							for (var i in items) {
								if (index) {
									data[index] = i;
								}
								data[item] = items[i];
								if (attributes.innerHTML) {
									parent.appendChild(document.createTextNode(elParser.getData(attributes.innerHTML)));
								}
								elElements.buildChildNodes(element, parent);
							}
						}
					}
				}
			};
		})
	); // This function is defined in DOMElements.js!
	assets = {};
	assets.svg = {};
	assets.svg.loader = '<svg width="120" height="30" viewBox="0 0 120 30" xmlns="http://www.w3.org/2000/svg"><circle cx="15" cy="15" r="15"><animate attributeName="r" from="15" to="15" begin="0s" dur="0.8s" values="15;9;15" calcMode="linear" repeatCount="indefinite"/><animate attributeName="fill-opacity" from="1" to="1" begin="0s" dur="0.8s" values="1;.5;1" calcMode="linear" repeatCount="indefinite"/></circle><circle cx="60" cy="15" r="9" fill-opacity=".3"><animate attributeName="r" from="9" to="9" begin="0s" dur="0.8s" values="9;15;9" calcMode="linear" repeatCount="indefinite"/><animate attributeName="fill-opacity" from=".5" to=".5" begin="0s" dur="0.8s" values=".5;1;.5" calcMode="linear" repeatCount="indefinite"/></circle><circle cx="105" cy="15" r="15"><animate attributeName="r" from="15" to="15" begin="0s" dur="0.8s" values="15;9;15" calcMode="linear" repeatCount="indefinite"/><animate attributeName="fill-opacity" from="1" to="1" begin="0s" dur="0.8s" values="1;.5;1" calcMode="linear" repeatCount="indefinite"/></circle></svg>'
	// Content namespace
	var content = {};
	// Namespace...
	content.stores = {};
	content.stores.ActionDispatcher = Class(Emitter, function(supr) {
		this.init = function init(opts) {
			supr(this, this.init, arguments);
		};
	
		this.dispatch = function(action, data) {
			this.emit(action, data);
		};
	});
	
	content.stores.ActionDispatcher.get = function() {
		if (!content.stores.ActionDispatcher._instance) {
			content.stores.ActionDispatcher._instance = new content.stores.ActionDispatcher();
		}
		return content.stores.ActionDispatcher._instance;
	};
	content.stores.Store = Class(Emitter, function(supr) {
		this.init = function init(opts) {
			supr(this, this.init, arguments);
	
			opts 					= opts || {};
			this._data 				= opts.data || {};
			this._actionDispatcher 	= content.stores.ActionDispatcher.get();
		};
	
		this.get = function(key, callback) {
			var data = this._data;
			(key in data) ? callback(data[key]) : callback(null);
		};
	});
	
	content.stores.EMPTY 		= 0;
	content.stores.LOADING_DATA = 1;
	content.stores.READY		= 2;
	content.stores.priceComparisonStore = new (
		Class(content.stores.Store, function(supr) {
			this.init = function init(opts) {
				opts 				= opts || {};
				opts.data 			= opts.data || {};
	
				supr(this, this.init, [opts]);
	
				this._data.cacheByURL 		= {};
				this._data.priceDataLoading = content.stores.EMPTY;
	
				this._actionDispatcher.on('price_comparison_data', this, this.onPriceComparisonData);
			};
	
			this.onPriceComparisonData = function onPriceComparisonData(priceData) {
				if (priceData.url === undefined) {
					throw new Error('No url in price data.');
				}
	
				var data = this._data;
				data.priceDataLoading 			= content.stores.READY;
				data.cacheByURL[priceData.url] 	= priceData;
			};
	
			this.priceDataLoading = function() {
				return this._data._priceDataLoading;
			};
	
			this.getPriceData = function() {
				var data = this._data;
				return (data.priceDataLoading === content.stores.READY) ? data.cacheByURL : null;
			};
		})
	)();
	
	/**
	 * HcSpecificationsDataStore
	 * The general reusable store for specifications (widget trigger,
	 * smart notifications, etc.)
	 */
	content.stores.HcSpecificationsDataStore = Class(content.stores.Store, function(supr) {
		this.init = function init(opts) {
			opts = opts || {};
	
	        this._bookingEngine = opts.bookingEngine;
	        this._documentConnector = opts.documentConnector;
	        this._remoteUrl = opts.remoteUrl || '';
			this._hcAnalyticsUrl = this._remoteUrl + '/notify/{hash}';
			this._websiteHash = opts.websiteHash;
	        this._autoLoadAnalyticsData = (opts.autoLoadAnalyticsData !== false);
	        this._autoLoadClientGeoLocationData = (opts.autoLoadClientGeoLocationData !== false);
	        this._autoLoadDocumentConnectorData = (opts.autoLoadDocumentConnectorData !== false);
	        this._isDemoMode = (opts.isDemoMode === true);
	        this._engine = opts.engine;
	
	    // DEBUG
	    //this._isDemoMode = true;
	    window['_hc_s'] = this;
	
			supr(this, this.init, [opts]);
			
		var storage = this._engine.getStorage(),
		    userReferrer = this._isDemoMode ? 'http://hotelchamp.com' : (storage.getFromSession('user.referrer') || document.referrer || null);
	
	        // @WARNING: All values should be JSON parseable!! So, dont set values like window.document, etc.
	        this._data = Object.assign(opts.data || {}, {
	            'bookingEngine.selectedFromDate': (this._isDemoMode ? '01/12/2016' : null),
				'bookingEngine.selectedToDate': (this._isDemoMode ? '02/12/2016' : null),
				'bookingEngine.activeVoucher': null,
	
	            'googleAnalytics.onlineVisitorCount': (this._isDemoMode ? 7 : null),
				'googleAnalytics.lastBookingMinutesAgo': (this._isDemoMode ? 37 : null),
				'googleAnalytics.siteViewCountLast30Days': (this._isDemoMode ? 23422 : null),
				'googleAnalytics.bookingCountLast48Hours': (this._isDemoMode ? 12 : null),
	
	            'documentConnector.connectorId': this._documentConnector.getId(),
	            'documentConnector.activeStepIndex': (this._isDemoMode ? 0 : null),
	            'documentConnector.activeStepKey': (this._isDemoMode ? 0 : null),
	
	            // Added code for millenium
	            /*'documentConnector.arrivalDate': (this._isDemoMode ? '01/12/2016' : null),
	            'documentConnector.departureDate': (this._isDemoMode ? '02/12/2016' : null),
	            'documentConnector.nightCount' : null,
	            'documentConnector.activeCurrency' : null,
	            'documentConnector.activeVoucherCode' : null,
	            'documentConnector.selectedHotelName' : null,
	            'documentConnector.selectedAdultCount' : null,
	            'documentConnector.selectedChildCount' : null,
	            'documentConnector.selectedBabyCount' : null,
	            'documentConnector.selectedRoomCount' : null,
	            'documentConnector.steps' : null,
	            'documentConnector.activeStepIndex' : null,
	            'documentConnector.activeStepName' : null,
	            'documentConnector.arrangements' : null,
	            'documentConnector.activeArrangement' : null,
	            'documentConnector.roomTypes' : null,
	            'documentConnector.activeRoomType' : null,
	            'documentConnector.isBookingsEngineStartPage' : null,
	            'documentConnector.isBookingsEngineFinishedPage' : null,
	            'documentConnector.roomsAndRates' : null,
	            'documentConnector.eventType' : null,
	            'documentConnector.eventAttandees' : null,
	            'documentConnector.eventLocation' : null,
	            'documentConnector.loyaltyMemberLoggedIn' : null,
	            'documentConnector.viewRoom' : null,
	            'documentConnector.compareRoom' : null,*/
	
	            'user.countryCode': (this._isDemoMode ? 'NL' : null),
	            'user.regionCode' : (this._isDemoMode ? 'GR' : null),
	            'user.visitedCount': storage.getFromStorage('user.visitedCount', 0),
	            'user.firstVisitDateTime': new Date(storage.getStorageStartTime()),
	            'user.referrer': userReferrer,
	            'user.visitedUrls': storage.get(this._engine.getApi() + '_urls'),
		    'user.sessionCount': storage.getFromStorage('user.sessionCount'),
	
	            'page.loadedDateTime': new Date(this._engine.getStartTime()),
	            'page.hcTagRootObject': null,
	            'page.url': window.location && window.location.href ? window.location.href : null,
	
	            'session.startDateTime': new Date(storage.getSessionStartTime()),
	            'session.visitedCount': storage.getFromSession('user.visitedCount', 0),
	
	            'dateTime.now': new Date()
	        });
	
	        // try to get country code from localStorage to prevent an extra server request...
	        var storage = this._engine.getStorage(),
	            isCountryCodeResolved = false,
	            userCountryCode = storage ? storage.getFromSession('hc_specification_store.user.countryCode') : null;
	
	        if (userCountryCode) {
	            this._setValue('user.countryCode', userCountryCode);
	            isCountryCodeResolved = true;
	        }
	
	        this._initListeners();
	
			this._data.analyticsData = content.stores.EMPTY;
	
			this._actionDispatcher.on('LOAD_HC_SPEC_ANALYTICS_DATA', bind(this, this._onActionLoadAnalyticsData));
	        this._actionDispatcher.on('LOAD_HC_SPEC_CLIENT_GEO_LOCATION', bind(this, this._onActionLoadClientGeoLocation));
	        this._actionDispatcher.on('LOAD_HC_SPEC_DOCUMENT_CONNECTOR_DATA', bind(this, this._onActionLoadDocumentConnectorData));
	
	        if (this._autoLoadAnalyticsData && !this._isDemoMode) {
	            // Load analytics data at initial load
	            content.stores.ActionDispatcher.get().dispatch('LOAD_HC_SPEC_ANALYTICS_DATA');
	        }
	
	        if (!isCountryCodeResolved && this._autoLoadClientGeoLocationData && !this._isDemoMode) {
	            // Load analytics data at initial load
	            // @note: will be triggered in engine when ipCountryCodeCheckRequired is true
	            //content.stores.ActionDispatcher.get().dispatch('LOAD_HC_SPEC_CLIENT_GEO_LOCATION');
	        }
	
	        if (this._autoLoadDocumentConnectorData && !this._isDemoMode) {
	            // Load document data on initial load
	            content.stores.ActionDispatcher.get().dispatch('LOAD_HC_SPEC_DOCUMENT_CONNECTOR_DATA');
	        }
	
	        //console.log('@DISABLE DEMO FOR PRODUCTION! - is demo mode: ', this._isDemoMode);
	
	        if (this._isDemoMode) {
	            this._engine.log('HcSpecificationsDataStore::_data: ', this._data);
	        }
	
	        this._engine.setGlobalDebug('stores.hcSpecificationsDataStore', this);
		};
	
	    /**
	     * Public methods
	     */
	
	    /**
		 * getData
		 * @param	string	The key to fetch from the data (optional)
		 * @param	mixed	The default value for the provided key (optional)
		 * @return	mixed	Object with all data when key is empty, the value for the provided key otherwise
		 */
		this.getData = function(key, defaultValue) {
			key = (key !== undefined) ? key : null;
			defaultValue = defaultValue !== undefined ? defaultValue : null;
			value = this._data;
	
			if (key !== null) {
				value = (this._data[key] !== undefined) ? this._data[key] : defaultValue;
			}
	
			return value;
		};
	
	    /**
	     * Protected methods
	     */
	
	    this._initListeners = function() {
	        this._bookingEngine.on('ArrivalDate', bind(this, utils.debounce(this._onBookingEngineSelectedFromDateChange, 1200)));
	        this._bookingEngine.on('DepartureDate', bind(this, utils.debounce(this._onBookingEngineSelectedToDateChange, 1200)));
	        this._bookingEngine.on('VoucherCode', bind(this, utils.debounce(this._onBookingEngineVoucherChange, 600)));
	
	        this._documentConnector.on(['property.activeStepIndex.change'], bind(this, utils.debounce(this._onDocumentConnectorActiveStepIndexChange, 600)));
	        this._documentConnector.on(['property.change'], bind(this, this._onDocumentConnectorChange));
	    };
	
	    this._setValue = function(key, value, preventEvent) {
	        var oldValue = this._data[key];
	
			this._data[key] = value;
	
			if (preventEvent !== true) {
				if (value !== oldValue) {
					this.emit('datachange', key, value, oldValue);
				} else {
					this.emit('dataupdate', key, value);
				}
			}
	
	        if (key == 'documentConnector.activeStepIndex') {
				this._setValue('documentConnector.activeStepKey', this.getActiveStepKeyByIndex(value), preventEvent);
			}
	    };
	
	    /**
	     * getActiveStepKeyByIndex
	     * Helper method to generate and get the activeStepKey by
	     * the activeStepIndex
	     * @param   int     activeStepIndex
	     * @return  string  activeStepKey
	     */
	    this.getActiveStepKeyByIndex = function(activeStepIndex) {
		    return this._documentConnector.getId() + '_' + activeStepIndex;
	    };
	
	    /**
	     * Event handler methods
	     */
	
	    this._onActionLoadAnalyticsData = function() {
	        var url = utils.string.supplant(this._hcAnalyticsUrl, { hash: this._websiteHash });
			utils.net.send(url, bind(this, this._onAnalyticsDataLoaded));
	    };
	
	    this._onActionLoadClientGeoLocation = function() {
	        if (this._engine.getInternalWebsiteCode() !== 'mhr') {
	            var pcUrl = this._engine.getPriceComparisonServer() + '/v2/ipapi/country';
	            utils.net.send(pcUrl, bind(this, this._onClientGeoLocationLoaded), false);
	        }
	    };
	
	    this._onActionLoadDocumentConnectorData = function() {
	        var data = (this._documentConnector.getAdapter()) ? this._documentConnector.getAdapter().getData() : null;
	
	        if (data) {
	            for (var key in data) {
	                //this._data['documentConnector.' + key] = data[key];
	                this._setValue('documentConnector.' + key, data[key]);
	
	                // if (key == 'activeStepIndex') {
		            //     this._setValue('documentConnector.activeStepKey', this.getActiveStepKeyByIndex(data[key]));
	                // }
	            }
	        }
	    };
	
	    this._onClientGeoLocationLoaded = function(error, response) {
	        if((response['status'] == 'success') && !error) {
	            var userCountryCode = utils.vars.get(response, 'countryCode', null),
	                userRegionCode = utils.vars.get(response, 'region', null);
	
	            this._setValue('user.countryCode', userCountryCode);
	            this._setValue('user.regionCode', userCountryCode+"-"+userRegionCode);
	
	            var storage = this._engine.getStorage();
	
	            if (storage) {
	                storage.setInSession('hc_specification_store.user.countryCode', userCountryCode);
	                storage.setInSession('hc_specification_store.user.regionCode', userRegionCode);
	            }
	        }
	    };
	
	    this._onAnalyticsDataLoaded = function(isFailed, response) {
	        var response = !isFailed ? response : null;
	
			if (!isFailed) {
				this._setValue('googleAnalytics.onlineVisitorCount', utils.vars.get(response, 'onlineVisitorCount', null));
				this._setValue('googleAnalytics.lastBookingMinutesAgo', utils.vars.get(response, 'lastBookingMinutesAgo', null));
				this._setValue('googleAnalytics.siteViewCountLast30Days', utils.vars.get(response, 'siteViewCountLast30Days', null));
				this._setValue('googleAnalytics.bookingCountLast48Hours', utils.vars.get(response, 'bookingCountLast48Hours', null));
			}
	    };
	
	    this._onBookingEngineSelectedFromDateChange = function(newValue) {
	 		var source = 'bookingEngine.selectedFromDate',
				newValue;
	
			if (newValue instanceof Date) {
				newValue = [('0' + newValue.getDate()).slice(-2), ('0' + (newValue.getMonth() + 1)).slice(-2), newValue.getFullYear()].join('/');
	 			this._setValue(source, newValue);
			}
	 	};
	
		this._onBookingEngineSelectedToDateChange = function(newValue) {
	 		var source = 'bookingEngine.selectedToDate',
				newValue;
	
			if (newValue instanceof Date) {
	 			newValue = [('0' + newValue.getDate()).slice(-2), ('0' + (newValue.getMonth() + 1)).slice(-2), newValue.getFullYear()].join('/');
	 			this._setValue(source, newValue);
			}
	 	};
	
	    this._onBookingEngineVoucherChange = function(newValue) {
	        var source = 'bookingEngine.activeVoucher';
	        this._setValue(source, newValue);
	    };
	
	    this._onDocumentConnectorActiveStepIndexChange = function(newValue) {
	        var activeStepIndexSource = 'documentConnector.activeStepIndex',
	            activeStepKeySource = 'documentConnector.activeStepKey',
	            activeStepKey = this._documentConnector.getId() + '_' + newValue;
	
	        this._setValue(activeStepIndexSource, newValue);
	
	        // when active step index changes, update activeStepKey
	        //this._setValue(activeStepKeySource, activeStepKey);
	    };
	
	    this._onDocumentConnectorChange = function(property, newValue, currentValue) {
	        //this._data['documentConnector.' + property] = newValue;
	        this._setValue('documentConnector.' + property, newValue);
	    };
	});
	
	!function(e,t,i){"use strict";t[e]=i();}("HcFingerprint2",this,function(){"use strict";Array.prototype.indexOf||(Array.prototype.indexOf=function(e,t){var i;if(null==this)throw new TypeError("'this' is null or undefined");var a=Object(this),r=a.length>>>0;if(0===r)return-1;var n=+t||0;if(Math.abs(n)===1/0&&(n=0),n>=r)return-1;for(i=Math.max(n>=0?n:r-Math.abs(n),0);i<r;){if(i in a&&a[i]===e)return i;i++}return-1});var e=function(t){if(!(this instanceof e))return new e(t);var i={swfContainerId:"fingerprintjs2",swfPath:"flash/compiled/FontList.swf",detectScreenOrientation:!0,sortPluginsFor:[/palemoon/i],userDefinedFonts:[]};this.options=this.extend(t,i),this.nativeForEach=Array.prototype.forEach,this.nativeMap=Array.prototype.map};return e.prototype={extend:function(e,t){if(null==e)return t;for(var i in e)null!=e[i]&&t[i]!==e[i]&&(t[i]=e[i]);return t},log:function(e){window.console&&console.log(e)},get:function(e){var t=[];t=this.userAgentKey(t),t=this.languageKey(t),t=this.colorDepthKey(t),t=this.pixelRatioKey(t),t=this.screenResolutionKey(t),t=this.availableScreenResolutionKey(t),t=this.timezoneOffsetKey(t),t=this.sessionStorageKey(t),t=this.localStorageKey(t),t=this.indexedDbKey(t),t=this.addBehaviorKey(t),t=this.openDatabaseKey(t),t=this.cpuClassKey(t),t=this.platformKey(t),t=this.doNotTrackKey(t),t=this.pluginsKey(t),t=this.canvasKey(t),t=this.webglKey(t),t=this.adBlockKey(t),t=this.hasLiedLanguagesKey(t),t=this.hasLiedResolutionKey(t),t=this.hasLiedOsKey(t),t=this.hasLiedBrowserKey(t),t=this.touchSupportKey(t);var i=this;this.fontsKey(t,function(t){var a=[];i.each(t,function(e){var t=e.value;"undefined"!=typeof e.value.join&&(t=e.value.join(";")),a.push(t)});var r=i.x64hash128(a.join("~~~"),31);return e(r,t)})},userAgentKey:function(e){return this.options.excludeUserAgent||e.push({key:"user_agent",value:this.getUserAgent()}),e},getUserAgent:function(){return navigator.userAgent},languageKey:function(e){return this.options.excludeLanguage||e.push({key:"language",value:navigator.language||navigator.userLanguage||navigator.browserLanguage||navigator.systemLanguage||""}),e},colorDepthKey:function(e){return this.options.excludeColorDepth||e.push({key:"color_depth",value:screen.colorDepth||-1}),e},pixelRatioKey:function(e){return this.options.excludePixelRatio||e.push({key:"pixel_ratio",value:this.getPixelRatio()}),e},getPixelRatio:function(){return window.devicePixelRatio||""},screenResolutionKey:function(e){return this.options.excludeScreenResolution?e:this.getScreenResolution(e)},getScreenResolution:function(e){var t;return t=this.options.detectScreenOrientation&&screen.height>screen.width?[screen.height,screen.width]:[screen.width,screen.height],"undefined"!=typeof t&&e.push({key:"resolution",value:t}),e},availableScreenResolutionKey:function(e){return this.options.excludeAvailableScreenResolution?e:this.getAvailableScreenResolution(e)},getAvailableScreenResolution:function(e){var t;return screen.availWidth&&screen.availHeight&&(t=this.options.detectScreenOrientation?screen.availHeight>screen.availWidth?[screen.availHeight,screen.availWidth]:[screen.availWidth,screen.availHeight]:[screen.availHeight,screen.availWidth]),"undefined"!=typeof t&&e.push({key:"available_resolution",value:t}),e},timezoneOffsetKey:function(e){return this.options.excludeTimezoneOffset||e.push({key:"timezone_offset",value:(new Date).getTimezoneOffset()}),e},sessionStorageKey:function(e){return!this.options.excludeSessionStorage&&this.hasSessionStorage()&&e.push({key:"session_storage",value:1}),e},localStorageKey:function(e){return!this.options.excludeSessionStorage&&this.hasLocalStorage()&&e.push({key:"local_storage",value:1}),e},indexedDbKey:function(e){return!this.options.excludeIndexedDB&&this.hasIndexedDB()&&e.push({key:"indexed_db",value:1}),e},addBehaviorKey:function(e){return document.body&&!this.options.excludeAddBehavior&&document.body.addBehavior&&e.push({key:"add_behavior",value:1}),e},openDatabaseKey:function(e){return!this.options.excludeOpenDatabase&&window.openDatabase&&e.push({key:"open_database",value:1}),e},cpuClassKey:function(e){return this.options.excludeCpuClass||e.push({key:"cpu_class",value:this.getNavigatorCpuClass()}),e},platformKey:function(e){return this.options.excludePlatform||e.push({key:"navigator_platform",value:this.getNavigatorPlatform()}),e},doNotTrackKey:function(e){return this.options.excludeDoNotTrack||e.push({key:"do_not_track",value:this.getDoNotTrack()}),e},canvasKey:function(e){return!this.options.excludeCanvas&&this.isCanvasSupported()&&e.push({key:"canvas",value:this.getCanvasFp()}),e},webglKey:function(e){return this.options.excludeWebGL?e:this.isWebGlSupported()?(e.push({key:"webgl",value:this.getWebglFp()}),e):e},adBlockKey:function(e){return this.options.excludeAdBlock||e.push({key:"adblock",value:this.getAdBlock()}),e},hasLiedLanguagesKey:function(e){return this.options.excludeHasLiedLanguages||e.push({key:"has_lied_languages",value:this.getHasLiedLanguages()}),e},hasLiedResolutionKey:function(e){return this.options.excludeHasLiedResolution||e.push({key:"has_lied_resolution",value:this.getHasLiedResolution()}),e},hasLiedOsKey:function(e){return this.options.excludeHasLiedOs||e.push({key:"has_lied_os",value:this.getHasLiedOs()}),e},hasLiedBrowserKey:function(e){return this.options.excludeHasLiedBrowser||e.push({key:"has_lied_browser",value:this.getHasLiedBrowser()}),e},fontsKey:function(e,t){return this.options.excludeJsFonts?this.flashFontsKey(e,t):this.jsFontsKey(e,t)},flashFontsKey:function(e,t){return this.options.excludeFlashFonts?t(e):this.hasSwfObjectLoaded()&&this.hasMinFlashInstalled()?"undefined"==typeof this.options.swfPath?t(e):void this.loadSwfAndDetectFonts(function(i){e.push({key:"swf_fonts",value:i.join(";")}),t(e)}):t(e)},jsFontsKey:function(e,t){var i=this;return setTimeout(function(){var a=["monospace","sans-serif","serif"],r=["Andale Mono","Arial","Arial Black","Arial Hebrew","Arial MT","Arial Narrow","Arial Rounded MT Bold","Arial Unicode MS","Bitstream Vera Sans Mono","Book Antiqua","Bookman Old Style","Calibri","Cambria","Cambria Math","Century","Century Gothic","Century Schoolbook","Comic Sans","Comic Sans MS","Consolas","Courier","Courier New","Garamond","Geneva","Georgia","Helvetica","Helvetica Neue","Impact","Lucida Bright","Lucida Calligraphy","Lucida Console","Lucida Fax","LUCIDA GRANDE","Lucida Handwriting","Lucida Sans","Lucida Sans Typewriter","Lucida Sans Unicode","Microsoft Sans Serif","Monaco","Monotype Corsiva","MS Gothic","MS Outlook","MS PGothic","MS Reference Sans Serif","MS Sans Serif","MS Serif","MYRIAD","MYRIAD PRO","Palatino","Palatino Linotype","Segoe Print","Segoe Script","Segoe UI","Segoe UI Light","Segoe UI Semibold","Segoe UI Symbol","Tahoma","Times","Times New Roman","Times New Roman PS","Trebuchet MS","Verdana","Wingdings","Wingdings 2","Wingdings 3"],n=["Abadi MT Condensed Light","Academy Engraved LET","ADOBE CASLON PRO","Adobe Garamond","ADOBE GARAMOND PRO","Agency FB","Aharoni","Albertus Extra Bold","Albertus Medium","Algerian","Amazone BT","American Typewriter","American Typewriter Condensed","AmerType Md BT","Andalus","Angsana New","AngsanaUPC","Antique Olive","Aparajita","Apple Chancery","Apple Color Emoji","Apple SD Gothic Neo","Arabic Typesetting","ARCHER","ARNO PRO","Arrus BT","Aurora Cn BT","AvantGarde Bk BT","AvantGarde Md BT","AVENIR","Ayuthaya","Bandy","Bangla Sangam MN","Bank Gothic","BankGothic Md BT","Baskerville","Baskerville Old Face","Batang","BatangChe","Bauer Bodoni","Bauhaus 93","Bazooka","Bell MT","Bembo","Benguiat Bk BT","Berlin Sans FB","Berlin Sans FB Demi","Bernard MT Condensed","BernhardFashion BT","BernhardMod BT","Big Caslon","BinnerD","Blackadder ITC","BlairMdITC TT","Bodoni 72","Bodoni 72 Oldstyle","Bodoni 72 Smallcaps","Bodoni MT","Bodoni MT Black","Bodoni MT Condensed","Bodoni MT Poster Compressed","Bookshelf Symbol 7","Boulder","Bradley Hand","Bradley Hand ITC","Bremen Bd BT","Britannic Bold","Broadway","Browallia New","BrowalliaUPC","Brush Script MT","Californian FB","Calisto MT","Calligrapher","Candara","CaslonOpnface BT","Castellar","Centaur","Cezanne","CG Omega","CG Times","Chalkboard","Chalkboard SE","Chalkduster","Charlesworth","Charter Bd BT","Charter BT","Chaucer","ChelthmITC Bk BT","Chiller","Clarendon","Clarendon Condensed","CloisterBlack BT","Cochin","Colonna MT","Constantia","Cooper Black","Copperplate","Copperplate Gothic","Copperplate Gothic Bold","Copperplate Gothic Light","CopperplGoth Bd BT","Corbel","Cordia New","CordiaUPC","Cornerstone","Coronet","Cuckoo","Curlz MT","DaunPenh","Dauphin","David","DB LCD Temp","DELICIOUS","Denmark","DFKai-SB","Didot","DilleniaUPC","DIN","DokChampa","Dotum","DotumChe","Ebrima","Edwardian Script ITC","Elephant","English 111 Vivace BT","Engravers MT","EngraversGothic BT","Eras Bold ITC","Eras Demi ITC","Eras Light ITC","Eras Medium ITC","EucrosiaUPC","Euphemia","Euphemia UCAS","EUROSTILE","Exotc350 Bd BT","FangSong","Felix Titling","Fixedsys","FONTIN","Footlight MT Light","Forte","FrankRuehl","Fransiscan","Freefrm721 Blk BT","FreesiaUPC","Freestyle Script","French Script MT","FrnkGothITC Bk BT","Fruitger","FRUTIGER","Futura","Futura Bk BT","Futura Lt BT","Futura Md BT","Futura ZBlk BT","FuturaBlack BT","Gabriola","Galliard BT","Gautami","Geeza Pro","Geometr231 BT","Geometr231 Hv BT","Geometr231 Lt BT","GeoSlab 703 Lt BT","GeoSlab 703 XBd BT","Gigi","Gill Sans","Gill Sans MT","Gill Sans MT Condensed","Gill Sans MT Ext Condensed Bold","Gill Sans Ultra Bold","Gill Sans Ultra Bold Condensed","Gisha","Gloucester MT Extra Condensed","GOTHAM","GOTHAM BOLD","Goudy Old Style","Goudy Stout","GoudyHandtooled BT","GoudyOLSt BT","Gujarati Sangam MN","Gulim","GulimChe","Gungsuh","GungsuhChe","Gurmukhi MN","Haettenschweiler","Harlow Solid Italic","Harrington","Heather","Heiti SC","Heiti TC","HELV","Herald","High Tower Text","Hiragino Kaku Gothic ProN","Hiragino Mincho ProN","Hoefler Text","Humanst 521 Cn BT","Humanst521 BT","Humanst521 Lt BT","Imprint MT Shadow","Incised901 Bd BT","Incised901 BT","Incised901 Lt BT","INCONSOLATA","Informal Roman","Informal011 BT","INTERSTATE","IrisUPC","Iskoola Pota","JasmineUPC","Jazz LET","Jenson","Jester","Jokerman","Juice ITC","Kabel Bk BT","Kabel Ult BT","Kailasa","KaiTi","Kalinga","Kannada Sangam MN","Kartika","Kaufmann Bd BT","Kaufmann BT","Khmer UI","KodchiangUPC","Kokila","Korinna BT","Kristen ITC","Krungthep","Kunstler Script","Lao UI","Latha","Leelawadee","Letter Gothic","Levenim MT","LilyUPC","Lithograph","Lithograph Light","Long Island","Lydian BT","Magneto","Maiandra GD","Malayalam Sangam MN","Malgun Gothic","Mangal","Marigold","Marion","Marker Felt","Market","Marlett","Matisse ITC","Matura MT Script Capitals","Meiryo","Meiryo UI","Microsoft Himalaya","Microsoft JhengHei","Microsoft New Tai Lue","Microsoft PhagsPa","Microsoft Tai Le","Microsoft Uighur","Microsoft YaHei","Microsoft Yi Baiti","MingLiU","MingLiU_HKSCS","MingLiU_HKSCS-ExtB","MingLiU-ExtB","Minion","Minion Pro","Miriam","Miriam Fixed","Mistral","Modern","Modern No. 20","Mona Lisa Solid ITC TT","Mongolian Baiti","MONO","MoolBoran","Mrs Eaves","MS LineDraw","MS Mincho","MS PMincho","MS Reference Specialty","MS UI Gothic","MT Extra","MUSEO","MV Boli","Nadeem","Narkisim","NEVIS","News Gothic","News GothicMT","NewsGoth BT","Niagara Engraved","Niagara Solid","Noteworthy","NSimSun","Nyala","OCR A Extended","Old Century","Old English Text MT","Onyx","Onyx BT","OPTIMA","Oriya Sangam MN","OSAKA","OzHandicraft BT","Palace Script MT","Papyrus","Parchment","Party LET","Pegasus","Perpetua","Perpetua Titling MT","PetitaBold","Pickwick","Plantagenet Cherokee","Playbill","PMingLiU","PMingLiU-ExtB","Poor Richard","Poster","PosterBodoni BT","PRINCETOWN LET","Pristina","PTBarnum BT","Pythagoras","Raavi","Rage Italic","Ravie","Ribbon131 Bd BT","Rockwell","Rockwell Condensed","Rockwell Extra Bold","Rod","Roman","Sakkal Majalla","Santa Fe LET","Savoye LET","Sceptre","Script","Script MT Bold","SCRIPTINA","Serifa","Serifa BT","Serifa Th BT","ShelleyVolante BT","Sherwood","Shonar Bangla","Showcard Gothic","Shruti","Signboard","SILKSCREEN","SimHei","Simplified Arabic","Simplified Arabic Fixed","SimSun","SimSun-ExtB","Sinhala Sangam MN","Sketch Rockwell","Skia","Small Fonts","Snap ITC","Snell Roundhand","Socket","Souvenir Lt BT","Staccato222 BT","Steamer","Stencil","Storybook","Styllo","Subway","Swis721 BlkEx BT","Swiss911 XCm BT","Sylfaen","Synchro LET","System","Tamil Sangam MN","Technical","Teletype","Telugu Sangam MN","Tempus Sans ITC","Terminal","Thonburi","Traditional Arabic","Trajan","TRAJAN PRO","Tristan","Tubular","Tunga","Tw Cen MT","Tw Cen MT Condensed","Tw Cen MT Condensed Extra Bold","TypoUpright BT","Unicorn","Univers","Univers CE 55 Medium","Univers Condensed","Utsaah","Vagabond","Vani","Vijaya","Viner Hand ITC","VisualUI","Vivaldi","Vladimir Script","Vrinda","Westminster","WHITNEY","Wide Latin","ZapfEllipt BT","ZapfHumnst BT","ZapfHumnst Dm BT","Zapfino","Zurich BlkEx BT","Zurich Ex BT","ZWAdobeF"];i.options.extendedJsFonts&&(r=r.concat(n)),r=r.concat(i.options.userDefinedFonts);var o="mmmmmmmmmmlli",s="72px",l=document.getElementsByTagName("body")[0],h=document.createElement("div"),u=document.createElement("div"),d={},c={},g=function(){var e=document.createElement("span");return e.style.position="absolute",e.style.left="-9999px",e.style.fontSize=s,e.style.lineHeight="normal",e.innerHTML=o,e},p=function(e,t){var i=g();return i.style.fontFamily="'"+e+"',"+t,i},f=function(){for(var e=[],t=0,i=a.length;t<i;t++){var r=g();r.style.fontFamily=a[t],h.appendChild(r),e.push(r)}return e},m=function(){for(var e={},t=0,i=r.length;t<i;t++){for(var n=[],o=0,s=a.length;o<s;o++){var l=p(r[t],a[o]);u.appendChild(l),n.push(l)}e[r[t]]=n}return e},T=function(e){for(var t=!1,i=0;i<a.length;i++)if(t=e[i].offsetWidth!==d[a[i]]||e[i].offsetHeight!==c[a[i]])return t;return t},S=f();l.appendChild(h);for(var x=0,v=a.length;x<v;x++)d[a[x]]=S[x].offsetWidth,c[a[x]]=S[x].offsetHeight;var M=m();l.appendChild(u);for(var A=[],E=0,y=r.length;E<y;E++)T(M[r[E]])&&A.push(r[E]);l.removeChild(u),l.removeChild(h),e.push({key:"js_fonts",value:A}),t(e)},1)},pluginsKey:function(e){return this.options.excludePlugins||(this.isIE()?this.options.excludeIEPlugins||e.push({key:"ie_plugins",value:this.getIEPlugins()}):e.push({key:"regular_plugins",value:this.getRegularPlugins()})),e},getRegularPlugins:function(){for(var e=[],t=0,i=navigator.plugins.length;t<i;t++)e.push(navigator.plugins[t]);return this.pluginsShouldBeSorted()&&(e=e.sort(function(e,t){return e.name>t.name?1:e.name<t.name?-1:0})),this.map(e,function(e){var t=this.map(e,function(e){return[e.type,e.suffixes].join("~")}).join(",");return[e.name,e.description,t].join("::")},this)},getIEPlugins:function(){var e=[];if(Object.getOwnPropertyDescriptor&&Object.getOwnPropertyDescriptor(window,"ActiveXObject")||"ActiveXObject"in window){var t=["AcroPDF.PDF","Adodb.Stream","DevalVRXCtrl.DevalVRXCtrl.1","MacromediaFlashPaper.MacromediaFlashPaper","Msxml2.DOMDocument","Msxml2.XMLHTTP","PDF.PdfCtrl","QuickTime.QuickTime","QuickTimeCheckObject.QuickTimeCheck.1","RealPlayer","RealPlayer.RealPlayer(tm) ActiveX Control (32-bit)","RealVideo.RealVideo(tm) ActiveX Control (32-bit)","Scripting.Dictionary","SWCtl.SWCtl","Shell.UIHelper","ShockwaveFlash.ShockwaveFlash","Skype.Detection","TDCCtl.TDCCtl","WMPlayer.OCX","rmocx.RealPlayer G2 Control","rmocx.RealPlayer G2 Control.1"];e=this.map(t,function(e){try{return new ActiveXObject(e),e}catch(t){return null}})}return navigator.plugins&&(e=e.concat(this.getRegularPlugins())),e},pluginsShouldBeSorted:function(){for(var e=!1,t=0,i=this.options.sortPluginsFor.length;t<i;t++){var a=this.options.sortPluginsFor[t];if(navigator.userAgent.match(a)){e=!0;break}}return e},touchSupportKey:function(e){return this.options.excludeTouchSupport||e.push({key:"touch_support",value:this.getTouchSupport()}),e},hasSessionStorage:function(){try{return!!window.sessionStorage}catch(e){return!0}},hasLocalStorage:function(){try{return!!window.localStorage}catch(e){return!0}},hasIndexedDB:function(){return!!window.indexedDB},getNavigatorCpuClass:function(){return navigator.cpuClass?navigator.cpuClass:"unknown"},getNavigatorPlatform:function(){return navigator.platform?navigator.platform:"unknown"},getDoNotTrack:function(){return navigator.doNotTrack?navigator.doNotTrack:navigator.msDoNotTrack?navigator.msDoNotTrack:window.doNotTrack?window.doNotTrack:"unknown"},getTouchSupport:function(){var e=0,t=!1;"undefined"!=typeof navigator.maxTouchPoints?e=navigator.maxTouchPoints:"undefined"!=typeof navigator.msMaxTouchPoints&&(e=navigator.msMaxTouchPoints);try{document.createEvent("TouchEvent"),t=!0}catch(i){}var a="ontouchstart"in window;return[e,t,a]},getCanvasFp:function(){var e=[],t=document.createElement("canvas");t.width=2e3,t.height=200,t.style.display="inline";var i=t.getContext("2d");return i.rect(0,0,10,10),i.rect(2,2,6,6),e.push("canvas winding:"+(i.isPointInPath(5,5,"evenodd")===!1?"yes":"no")),i.textBaseline="alphabetic",i.fillStyle="#f60",i.fillRect(125,1,62,20),i.fillStyle="#069",this.options.dontUseFakeFontInCanvas?i.font="11pt Arial":i.font="11pt no-real-font-123",i.fillText("Cwm fjordbank glyphs vext quiz, \ud83d\ude03",2,15),i.fillStyle="rgba(102, 204, 0, 0.2)",i.font="18pt Arial",i.fillText("Cwm fjordbank glyphs vext quiz, \ud83d\ude03",4,45),i.globalCompositeOperation="multiply",i.fillStyle="rgb(255,0,255)",i.beginPath(),i.arc(50,50,50,0,2*Math.PI,!0),i.closePath(),i.fill(),i.fillStyle="rgb(0,255,255)",i.beginPath(),i.arc(100,50,50,0,2*Math.PI,!0),i.closePath(),i.fill(),i.fillStyle="rgb(255,255,0)",i.beginPath(),i.arc(75,100,50,0,2*Math.PI,!0),i.closePath(),i.fill(),i.fillStyle="rgb(255,0,255)",i.arc(75,75,75,0,2*Math.PI,!0),i.arc(75,75,25,0,2*Math.PI,!0),i.fill("evenodd"),e.push("canvas fp:"+t.toDataURL()),e.join("~")},getWebglFp:function(){var e,t=function(t){return e.clearColor(0,0,0,1),e.enable(e.DEPTH_TEST),e.depthFunc(e.LEQUAL),e.clear(e.COLOR_BUFFER_BIT|e.DEPTH_BUFFER_BIT),"["+t[0]+", "+t[1]+"]"},i=function(e){var t,i=e.getExtension("EXT_texture_filter_anisotropic")||e.getExtension("WEBKIT_EXT_texture_filter_anisotropic")||e.getExtension("MOZ_EXT_texture_filter_anisotropic");return i?(t=e.getParameter(i.MAX_TEXTURE_MAX_ANISOTROPY_EXT),0===t&&(t=2),t):null};if(e=this.getWebglCanvas(),!e)return null;var a=[],r="attribute vec2 attrVertex;varying vec2 varyinTexCoordinate;uniform vec2 uniformOffset;void main(){varyinTexCoordinate=attrVertex+uniformOffset;gl_Position=vec4(attrVertex,0,1);}",n="precision mediump float;varying vec2 varyinTexCoordinate;void main() {gl_FragColor=vec4(varyinTexCoordinate,0,1);}",o=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,o);var s=new Float32Array([-.2,-.9,0,.4,-.26,0,0,.732134444,0]);e.bufferData(e.ARRAY_BUFFER,s,e.STATIC_DRAW),o.itemSize=3,o.numItems=3;var l=e.createProgram(),h=e.createShader(e.VERTEX_SHADER);e.shaderSource(h,r),e.compileShader(h);var u=e.createShader(e.FRAGMENT_SHADER);return e.shaderSource(u,n),e.compileShader(u),e.attachShader(l,h),e.attachShader(l,u),e.linkProgram(l),e.useProgram(l),l.vertexPosAttrib=e.getAttribLocation(l,"attrVertex"),l.offsetUniform=e.getUniformLocation(l,"uniformOffset"),e.enableVertexAttribArray(l.vertexPosArray),e.vertexAttribPointer(l.vertexPosAttrib,o.itemSize,e.FLOAT,!1,0,0),e.uniform2f(l.offsetUniform,1,1),e.drawArrays(e.TRIANGLE_STRIP,0,o.numItems),null!=e.canvas&&a.push(e.canvas.toDataURL()),a.push("extensions:"+e.getSupportedExtensions().join(";")),a.push("webgl aliased line width range:"+t(e.getParameter(e.ALIASED_LINE_WIDTH_RANGE))),a.push("webgl aliased point size range:"+t(e.getParameter(e.ALIASED_POINT_SIZE_RANGE))),a.push("webgl alpha bits:"+e.getParameter(e.ALPHA_BITS)),a.push("webgl antialiasing:"+(e.getContextAttributes().antialias?"yes":"no")),a.push("webgl blue bits:"+e.getParameter(e.BLUE_BITS)),a.push("webgl depth bits:"+e.getParameter(e.DEPTH_BITS)),a.push("webgl green bits:"+e.getParameter(e.GREEN_BITS)),a.push("webgl max anisotropy:"+i(e)),a.push("webgl max combined texture image units:"+e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS)),a.push("webgl max cube map texture size:"+e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE)),a.push("webgl max fragment uniform vectors:"+e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS)),a.push("webgl max render buffer size:"+e.getParameter(e.MAX_RENDERBUFFER_SIZE)),a.push("webgl max texture image units:"+e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS)),a.push("webgl max texture size:"+e.getParameter(e.MAX_TEXTURE_SIZE)),a.push("webgl max varying vectors:"+e.getParameter(e.MAX_VARYING_VECTORS)),a.push("webgl max vertex attribs:"+e.getParameter(e.MAX_VERTEX_ATTRIBS)),a.push("webgl max vertex texture image units:"+e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS)),a.push("webgl max vertex uniform vectors:"+e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS)),a.push("webgl max viewport dims:"+t(e.getParameter(e.MAX_VIEWPORT_DIMS))),a.push("webgl red bits:"+e.getParameter(e.RED_BITS)),a.push("webgl renderer:"+e.getParameter(e.RENDERER)),a.push("webgl shading language version:"+e.getParameter(e.SHADING_LANGUAGE_VERSION)),a.push("webgl stencil bits:"+e.getParameter(e.STENCIL_BITS)),a.push("webgl vendor:"+e.getParameter(e.VENDOR)),a.push("webgl version:"+e.getParameter(e.VERSION)),e.getShaderPrecisionFormat?(a.push("webgl vertex shader high float precision:"+e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision),a.push("webgl vertex shader high float precision rangeMin:"+e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).rangeMin),a.push("webgl vertex shader high float precision rangeMax:"+e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).rangeMax),a.push("webgl vertex shader medium float precision:"+e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision),a.push("webgl vertex shader medium float precision rangeMin:"+e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).rangeMin),a.push("webgl vertex shader medium float precision rangeMax:"+e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).rangeMax),a.push("webgl vertex shader low float precision:"+e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.LOW_FLOAT).precision),a.push("webgl vertex shader low float precision rangeMin:"+e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.LOW_FLOAT).rangeMin),a.push("webgl vertex shader low float precision rangeMax:"+e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.LOW_FLOAT).rangeMax),a.push("webgl fragment shader high float precision:"+e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision),a.push("webgl fragment shader high float precision rangeMin:"+e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).rangeMin),a.push("webgl fragment shader high float precision rangeMax:"+e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).rangeMax),a.push("webgl fragment shader medium float precision:"+e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision),a.push("webgl fragment shader medium float precision rangeMin:"+e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).rangeMin),a.push("webgl fragment shader medium float precision rangeMax:"+e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).rangeMax),a.push("webgl fragment shader low float precision:"+e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.LOW_FLOAT).precision),a.push("webgl fragment shader low float precision rangeMin:"+e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.LOW_FLOAT).rangeMin),a.push("webgl fragment shader low float precision rangeMax:"+e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.LOW_FLOAT).rangeMax),a.push("webgl vertex shader high int precision:"+e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_INT).precision),a.push("webgl vertex shader high int precision rangeMin:"+e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_INT).rangeMin),a.push("webgl vertex shader high int precision rangeMax:"+e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_INT).rangeMax),a.push("webgl vertex shader medium int precision:"+e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_INT).precision),a.push("webgl vertex shader medium int precision rangeMin:"+e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_INT).rangeMin),a.push("webgl vertex shader medium int precision rangeMax:"+e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_INT).rangeMax),a.push("webgl vertex shader low int precision:"+e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.LOW_INT).precision),a.push("webgl vertex shader low int precision rangeMin:"+e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.LOW_INT).rangeMin),a.push("webgl vertex shader low int precision rangeMax:"+e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.LOW_INT).rangeMax),a.push("webgl fragment shader high int precision:"+e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_INT).precision),a.push("webgl fragment shader high int precision rangeMin:"+e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_INT).rangeMin),a.push("webgl fragment shader high int precision rangeMax:"+e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_INT).rangeMax),a.push("webgl fragment shader medium int precision:"+e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_INT).precision),a.push("webgl fragment shader medium int precision rangeMin:"+e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_INT).rangeMin),a.push("webgl fragment shader medium int precision rangeMax:"+e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_INT).rangeMax),a.push("webgl fragment shader low int precision:"+e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.LOW_INT).precision),a.push("webgl fragment shader low int precision rangeMin:"+e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.LOW_INT).rangeMin),a.push("webgl fragment shader low int precision rangeMax:"+e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.LOW_INT).rangeMax),a.join("~")):a.join("~")},getAdBlock:function(){var e=document.createElement("div");e.innerHTML="&nbsp;",e.className="adsbox";var t=!1;try{document.body.appendChild(e),t=0===document.getElementsByClassName("adsbox")[0].offsetHeight,document.body.removeChild(e)}catch(i){t=!1}return t},getHasLiedLanguages:function(){if("undefined"!=typeof navigator.languages)try{var e=navigator.languages[0].substr(0,2);if(e!==navigator.language.substr(0,2))return!0}catch(t){return!0}return!1},getHasLiedResolution:function(){return screen.width<screen.availWidth||screen.height<screen.availHeight},getHasLiedOs:function(){var e,t=navigator.userAgent.toLowerCase(),i=navigator.oscpu,a=navigator.platform.toLowerCase();e=t.indexOf("windows phone")>=0?"Windows Phone":t.indexOf("win")>=0?"Windows":t.indexOf("android")>=0?"Android":t.indexOf("linux")>=0?"Linux":t.indexOf("iphone")>=0||t.indexOf("ipad")>=0?"iOS":t.indexOf("mac")>=0?"Mac":"Other";var r;if(r="ontouchstart"in window||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0,r&&"Windows Phone"!==e&&"Android"!==e&&"iOS"!==e&&"Other"!==e)return!0;if("undefined"!=typeof i){if(i=i.toLowerCase(),i.indexOf("win")>=0&&"Windows"!==e&&"Windows Phone"!==e)return!0;if(i.indexOf("linux")>=0&&"Linux"!==e&&"Android"!==e)return!0;if(i.indexOf("mac")>=0&&"Mac"!==e&&"iOS"!==e)return!0;if(0===i.indexOf("win")&&0===i.indexOf("linux")&&i.indexOf("mac")>=0&&"other"!==e)return!0}return a.indexOf("win")>=0&&"Windows"!==e&&"Windows Phone"!==e||((a.indexOf("linux")>=0||a.indexOf("android")>=0||a.indexOf("pike")>=0)&&"Linux"!==e&&"Android"!==e||((a.indexOf("mac")>=0||a.indexOf("ipad")>=0||a.indexOf("ipod")>=0||a.indexOf("iphone")>=0)&&"Mac"!==e&&"iOS"!==e||(0===a.indexOf("win")&&0===a.indexOf("linux")&&a.indexOf("mac")>=0&&"other"!==e||"undefined"==typeof navigator.plugins&&"Windows"!==e&&"Windows Phone"!==e)))},getHasLiedBrowser:function(){var e,t=navigator.userAgent.toLowerCase(),i=navigator.productSub;if(e=t.indexOf("firefox")>=0?"Firefox":t.indexOf("opera")>=0||t.indexOf("opr")>=0?"Opera":t.indexOf("chrome")>=0?"Chrome":t.indexOf("safari")>=0?"Safari":t.indexOf("trident")>=0?"Internet Explorer":"Other",("Chrome"===e||"Safari"===e||"Opera"===e)&&"20030107"!==i)return!0;var a=eval.toString().length;if(37===a&&"Safari"!==e&&"Firefox"!==e&&"Other"!==e)return!0;if(39===a&&"Internet Explorer"!==e&&"Other"!==e)return!0;if(33===a&&"Chrome"!==e&&"Opera"!==e&&"Other"!==e)return!0;var r;try{throw"a"}catch(n){try{n.toSource(),r=!0}catch(o){r=!1}}return!(!r||"Firefox"===e||"Other"===e)},isCanvasSupported:function(){var e=document.createElement("canvas");return!(!e.getContext||!e.getContext("2d"))},isWebGlSupported:function(){if(!this.isCanvasSupported())return!1;var e,t=document.createElement("canvas");try{e=t.getContext&&(t.getContext("webgl")||t.getContext("experimental-webgl"))}catch(i){e=!1}return!!window.WebGLRenderingContext&&!!e},isIE:function(){return"Microsoft Internet Explorer"===navigator.appName||!("Netscape"!==navigator.appName||!/Trident/.test(navigator.userAgent))},hasSwfObjectLoaded:function(){return"undefined"!=typeof window.swfobject},hasMinFlashInstalled:function(){return swfobject.hasFlashPlayerVersion("9.0.0")},addFlashDivNode:function(){var e=document.createElement("div");e.setAttribute("id",this.options.swfContainerId),document.body.appendChild(e)},loadSwfAndDetectFonts:function(e){var t="___fp_swf_loaded";window[t]=function(t){e(t)};var i=this.options.swfContainerId;this.addFlashDivNode();var a={onReady:t},r={allowScriptAccess:"always",menu:"false"};swfobject.embedSWF(this.options.swfPath,i,"1","1","9.0.0",!1,a,r,{})},getWebglCanvas:function(){var e=document.createElement("canvas"),t=null;try{t=e.getContext("webgl")||e.getContext("experimental-webgl")}catch(i){}return t||(t=null),t},each:function(e,t,i){if(null!==e)if(this.nativeForEach&&e.forEach===this.nativeForEach)e.forEach(t,i);else if(e.length===+e.length){for(var a=0,r=e.length;a<r;a++)if(t.call(i,e[a],a,e)==={})return}else for(var n in e)if(e.hasOwnProperty(n)&&t.call(i,e[n],n,e)==={})return},map:function(e,t,i){var a=[];return null==e?a:this.nativeMap&&e.map===this.nativeMap?e.map(t,i):(this.each(e,function(e,r,n){a[a.length]=t.call(i,e,r,n)}),a)},x64Add:function(e,t){e=[e[0]>>>16,65535&e[0],e[1]>>>16,65535&e[1]],t=[t[0]>>>16,65535&t[0],t[1]>>>16,65535&t[1]];var i=[0,0,0,0];return i[3]+=e[3]+t[3],i[2]+=i[3]>>>16,i[3]&=65535,i[2]+=e[2]+t[2],i[1]+=i[2]>>>16,i[2]&=65535,i[1]+=e[1]+t[1],i[0]+=i[1]>>>16,i[1]&=65535,i[0]+=e[0]+t[0],i[0]&=65535,[i[0]<<16|i[1],i[2]<<16|i[3]]},x64Multiply:function(e,t){e=[e[0]>>>16,65535&e[0],e[1]>>>16,65535&e[1]],t=[t[0]>>>16,65535&t[0],t[1]>>>16,65535&t[1]];var i=[0,0,0,0];return i[3]+=e[3]*t[3],i[2]+=i[3]>>>16,i[3]&=65535,i[2]+=e[2]*t[3],i[1]+=i[2]>>>16,i[2]&=65535,i[2]+=e[3]*t[2],i[1]+=i[2]>>>16,i[2]&=65535,i[1]+=e[1]*t[3],i[0]+=i[1]>>>16,i[1]&=65535,i[1]+=e[2]*t[2],i[0]+=i[1]>>>16,i[1]&=65535,i[1]+=e[3]*t[1],i[0]+=i[1]>>>16,i[1]&=65535,i[0]+=e[0]*t[3]+e[1]*t[2]+e[2]*t[1]+e[3]*t[0],i[0]&=65535,[i[0]<<16|i[1],i[2]<<16|i[3]]},x64Rotl:function(e,t){return t%=64,32===t?[e[1],e[0]]:t<32?[e[0]<<t|e[1]>>>32-t,e[1]<<t|e[0]>>>32-t]:(t-=32,[e[1]<<t|e[0]>>>32-t,e[0]<<t|e[1]>>>32-t])},x64LeftShift:function(e,t){return t%=64,0===t?e:t<32?[e[0]<<t|e[1]>>>32-t,e[1]<<t]:[e[1]<<t-32,0]},x64Xor:function(e,t){return[e[0]^t[0],e[1]^t[1]]},x64Fmix:function(e){return e=this.x64Xor(e,[0,e[0]>>>1]),e=this.x64Multiply(e,[4283543511,3981806797]),e=this.x64Xor(e,[0,e[0]>>>1]),e=this.x64Multiply(e,[3301882366,444984403]),e=this.x64Xor(e,[0,e[0]>>>1])},x64hash128:function(e,t){e=e||"",t=t||0;for(var i=e.length%16,a=e.length-i,r=[0,t],n=[0,t],o=[0,0],s=[0,0],l=[2277735313,289559509],h=[1291169091,658871167],u=0;u<a;u+=16)o=[255&e.charCodeAt(u+4)|(255&e.charCodeAt(u+5))<<8|(255&e.charCodeAt(u+6))<<16|(255&e.charCodeAt(u+7))<<24,255&e.charCodeAt(u)|(255&e.charCodeAt(u+1))<<8|(255&e.charCodeAt(u+2))<<16|(255&e.charCodeAt(u+3))<<24],s=[255&e.charCodeAt(u+12)|(255&e.charCodeAt(u+13))<<8|(255&e.charCodeAt(u+14))<<16|(255&e.charCodeAt(u+15))<<24,255&e.charCodeAt(u+8)|(255&e.charCodeAt(u+9))<<8|(255&e.charCodeAt(u+10))<<16|(255&e.charCodeAt(u+11))<<24],
	    o=this.x64Multiply(o,l),o=this.x64Rotl(o,31),o=this.x64Multiply(o,h),r=this.x64Xor(r,o),r=this.x64Rotl(r,27),r=this.x64Add(r,n),r=this.x64Add(this.x64Multiply(r,[0,5]),[0,1390208809]),s=this.x64Multiply(s,h),s=this.x64Rotl(s,33),s=this.x64Multiply(s,l),n=this.x64Xor(n,s),n=this.x64Rotl(n,31),n=this.x64Add(n,r),n=this.x64Add(this.x64Multiply(n,[0,5]),[0,944331445]);switch(o=[0,0],s=[0,0],i){case 15:s=this.x64Xor(s,this.x64LeftShift([0,e.charCodeAt(u+14)],48));case 14:s=this.x64Xor(s,this.x64LeftShift([0,e.charCodeAt(u+13)],40));case 13:s=this.x64Xor(s,this.x64LeftShift([0,e.charCodeAt(u+12)],32));case 12:s=this.x64Xor(s,this.x64LeftShift([0,e.charCodeAt(u+11)],24));case 11:s=this.x64Xor(s,this.x64LeftShift([0,e.charCodeAt(u+10)],16));case 10:s=this.x64Xor(s,this.x64LeftShift([0,e.charCodeAt(u+9)],8));case 9:s=this.x64Xor(s,[0,e.charCodeAt(u+8)]),s=this.x64Multiply(s,h),s=this.x64Rotl(s,33),s=this.x64Multiply(s,l),n=this.x64Xor(n,s);case 8:o=this.x64Xor(o,this.x64LeftShift([0,e.charCodeAt(u+7)],56));case 7:o=this.x64Xor(o,this.x64LeftShift([0,e.charCodeAt(u+6)],48));case 6:o=this.x64Xor(o,this.x64LeftShift([0,e.charCodeAt(u+5)],40));case 5:o=this.x64Xor(o,this.x64LeftShift([0,e.charCodeAt(u+4)],32));case 4:o=this.x64Xor(o,this.x64LeftShift([0,e.charCodeAt(u+3)],24));case 3:o=this.x64Xor(o,this.x64LeftShift([0,e.charCodeAt(u+2)],16));case 2:o=this.x64Xor(o,this.x64LeftShift([0,e.charCodeAt(u+1)],8));case 1:o=this.x64Xor(o,[0,e.charCodeAt(u)]),o=this.x64Multiply(o,l),o=this.x64Rotl(o,31),o=this.x64Multiply(o,h),r=this.x64Xor(r,o)}return r=this.x64Xor(r,[0,e.length]),n=this.x64Xor(n,[0,e.length]),r=this.x64Add(r,n),n=this.x64Add(n,r),r=this.x64Fmix(r),n=this.x64Fmix(n),r=this.x64Add(r,n),n=this.x64Add(n,r),("00000000"+(r[0]>>>0).toString(16)).slice(-8)+("00000000"+(r[1]>>>0).toString(16)).slice(-8)+("00000000"+(n[0]>>>0).toString(16)).slice(-8)+("00000000"+(n[1]>>>0).toString(16)).slice(-8)}},e.VERSION="1.4.4",e});
	/**
	 * Available tags:
	 *
	 *     - enabled
	 *     - disabled
	 *     - bookStartEnabled
	 *     - bookStartDisabled
	 *     - conversionEnabled
	 *     - conversionDisabled
	 *
	 * Session keys:
	 *
	 *     - widgets_registered        A list of hashes of all widgets which have been on the pages the visitor visited,
	 *                                 these widgets could be visible or hidden.
	 *     - API_viewed_hotel          The time at which a hotel was viewed where API is the hotel hash.
	 *     - API_viewed_book           The time at which the first page of the booking engine was viewed where API is the hotel hash.
	 *     - HASH_widget               Was the widget registered for this session? HASH is the hash for the given widget.
	 *                                 If this value is in the session and still valid then no tracking information will be
	 *                                 send to the server.
	 *
	 **/
	content.analytics = {};
	content.analytics.Analytics = Class(Emitter, function (supr) {
	    this.init = function init(opts) {
	        supr(this, this.init, arguments);
	
	        this._relayServer = opts.relayServer;
	        this._engine = opts.engine;
	        this._api = opts.api;
	        this._dimension = opts.dimension;
	        this._trackingHash = opts.trackingHash;
	        this._trackingPrefix = opts.trackingPrefix || 'HotelChamp';
	        this._name = null;
	        this._queue = [];
	        this._type = null;
	        this._ready = false;
	        this._failCount = 0;
	        this._gaTrackers = [];
	        this._finished = false;
	        this._finishedDone = false;
	        this._bookingDone = false;
	        this._interactionEvents = ['click'];    // When an interaction event occurs on page, no bounce should be registered
	
	    };
	
	    /**
	     * Setup the instances which where loaded by the engine, start checking for Google Analytics and
	     * then call the in the opts given callback...
	     **/
	    this.startInit = function (opts) {
	        this._abTest = opts.abTest;     // If not AB test then widgets will be tracked with "always"...
	        this._group = opts.group;
	        this._storage = opts.storage;
	        this._fingerprint = opts.fingerprint;
	        this._callback = opts.callback;     // This callback is called when this class is initialized...
	
	        this.storeCurrentUrl(window.location.href);
	        this.initSpecialPages();
	        this.updateSpecialPagesLocal();
	
	        // Wait some time to make sure _gaq or GoogleAnalyticsObject are on the page...
	        setTimeout(
	            bind(this, function () {
	                this._interval = setInterval(bind(this, this._onInterval), 100);
	            }),
	            100
	        );
	    };
	
	    /**
	     * Check if the page on which the script is included is a finished page or the first page of a booking engine.
	     **/
	    this.initSpecialPages = function () {
	        var api = this._api,
	            findStateTag = function (tag) { // Find "hcFinished" or "hcBooking" in window or the script url...
	                var scripts = document.getElementsByTagName('script'),
	                    found = (tag in window);
	
	                for (var i = 0; i < scripts.length; i++) {
	                    var script = scripts[i];
	                    if (script.src && (script.src.indexOf('?' + tag + '=true') !== -1)) {
	                        found = true;
	                        break;
	                    }
	                }
	                return found;
	            };
	
	        this._finished = findStateTag('hcFinished') || this._engine.getArgs().finished;
	        this._booking = (findStateTag('hcBooking') && !this._storage.getDoneForSession(this.getViewedBookSessionKey())) || this._engine.getArgs().booking;
	    };
	
	    this.updateSpecialPagesRemote = function (fingerprint) {
	        if (this._finished && !this._finishedDone) {
	            console.log('Register finished');
	            this._finishedDone = true;
	            this.emit('finished');
	            this._engine.getTitan().event('bookingEngine', 'finished');
	            utils.net.send(this._relayServer + '/api/count?action=finished&api=' + utils.net.encodeData(this._api) + '&fingerprint=' + utils.net.encodeData(fingerprint) + '&tag=' + this.getFinishedTag() + '&trackingHash=' + this._trackingHash + '&page=' + utils.net.encodeData(document.location.href));
	        } else if (this._booking && !this._bookingDone) {
	            console.log('Register bookstart');
	            this._bookingDone = true;
	            this.emit('bookstart');
	            this._engine.getTitan().event('bookingEngine', 'start');
	            utils.net.send(this._relayServer + '/api/count?action=bookStart&api=' + utils.net.encodeData(this._api) + '&fingerprint=' + utils.net.encodeData(fingerprint) + '&tag=' + this.getBookStartTag() + '&trackingHash=' + this._trackingHash + '&page=' + utils.net.encodeData(document.location.href));
	        }
	
	        if (!this._finished || !this._booking) {
	            setTimeout(bind(this, this.pollSpecialPages), 1500);
	        }
	    };
	
	    /**
	     * Update the local storage...
	     **/
	    this.updateSpecialPagesLocal = function () {
	        var storage = this._storage,
	            api = this._api,
	            tag = null,
	            widgetsRegistered = storage.get(this.getRegisteredWidgetsSessionKey(), []);
	
	        if (this._finished) {
	            tag = this.getConversionTag();
	            for (var i = 0; i < widgetsRegistered.length; i++) {
	                storage.removeDoneForSession(widgetsRegistered[i] + '_widget');
	            }
	            storage.removeDoneForSession(this.getViewedHotelSessionKey());
	            storage.removeDoneForSession(this.getViewedBookSessionKey());
	            storage.set(this.getRegisteredWidgetsSessionKey(), []); // Remove values from local storage...
	        } else if (this._booking) {
	            tag = this.getBookStartTag();
	            storage.setDoneForSession(this.getViewedBookSessionKey());
	        }
	    };
	
	    /**
	     * Function that will execute the function's that check for `special pages`.
	     * This is useful when a booking engine works via AJAX.
	     */
	    this.pollSpecialPages = function () {
	        this.initSpecialPages();
	        this.updateSpecialPagesRemote(this._fingerprint);
	    };
	
	    this.countHotel = function () {
	        var engine = this._engine;
	
	        if (!engine.getDemo() && !this._finished) {
	            var storage = this._storage,
	                key = this.getViewedHotelSessionKey(),
	                tag = this.getTag();
	            if (storage.getDoneForSession(key)) {
	                engine.log('Done hotel:', tag);
	            } else {
	                storage.setDoneForSession(key);
	                this.sendMessage(
	                    'countWebsite',
	                    {
	                        'fingerprint': this._fingerprint,
	                        'api': this._api,
	                        'tag': tag,
	                        'trackingHash': this._trackingHash
	                    }
	                );
	            }
	        }
	    };
	
	    this.countCustomTag = function (tag) {
	        if (document.location.href.indexOf('book-amsterdam.qbichotels') === -1) {
	            return;
	        }
	
	        var engine = this._engine;
	
	        if (!engine.getDemo() && tag) {
	            this.sendMessage(
	                'countWebsite',
	                {
	                    'fingerprint': this._fingerprint,
	                    'api': this._api,
	                    'tag': tag,
	                    'trackingHash': this._trackingHash
	                }
	            );
	        }
	    };
	
	    this.countWidgetClicks = function (tag, view) {
	        var engine = this._engine;
	
	        if (!engine.getDemo()) {
	            var storage = this._storage,
	                key = this.getViewedHotelSessionKey(),
	                hash = view.getWidget().getHash(),
	                version = view.getWidget().getActiveVersion();
	            this.sendMessage(
	                'countWidgetClick',
	                {
	                    'fingerprint': this._fingerprint,
	                    'api': this._api,
	                    'tag': tag,
	                    'version': version,
	                    'hash': hash,
	                    'trackingHash': this._trackingHash
	                }
	            );
	        }
	    };
	
	    this.storeCurrentUrl = function (url) {
	        // Keep track of visited URL's per api-key in localStorage
	        var visited = this._storage.get(this._api + "_urls", []);
	
	        if (visited.indexOf(url) == -1) {
	            visited.push(url);
	        }
	
	        this._storage.set(this._api + "_urls", visited);
	    };
	
	    /**
	     * Register a widget, this does not mean that the widget has been visible,
	     * it means that is on a page.
	     *
	     * If a widget is shown depends on if it's an A or B test version...
	     **/
	    this.registerWidget = function (hash, version) {
	        if (this._engine.getDemo()) {
	            return;
	        }
	        var key = hash + '_widget',
	            storage = this._storage,
	            widgetsRegistered = storage.get(this.getRegisteredWidgetsSessionKey(), []),
	            found = false;
	
	        for (var i = 0; i < widgetsRegistered.length; i++) {
	            var widgetRegistered = widgetsRegistered[i];
	            if (typeof widgetRegistered === 'string') {
	                if (widgetRegistered === hash) {
	                    found = true;
	                    break;
	                } else if (widgetRegistered['hash'] === hash) {
	                    found = true;
	                    break;
	                }
	            }
	        }
	        if (!found) {
	            // Use string indices because this data will be serialized...
	            widgetsRegistered.push({'hash': hash, 'version': version});
	            storage.set(this.getRegisteredWidgetsSessionKey(), widgetsRegistered);
	        }
	
	        return key;
	    };
	
	    /**
	     * Register a widget, even when a widget is not visible then the disabled tag is still registered.
	     **/
	    this.viewWidget = function (hash, version) {
	        var engine = this._engine;
	        if (engine.getDemo() || this._finished) { // Exit when finished! Don't start a new session!
	            return;
	        }
	
	        var storage = this._storage,
	            key = this.registerWidget(hash);
	        if (storage.getDoneForSession(key)) {
	            engine.log('Done view:', hash);
	        } else {
	            storage.setDoneForSession(key);
	            this.sendMessage(
	                'countWidget',
	                {
	                    'hash': hash,
	                    'tag': this.getTag(),
	                    'version': version,
	                    'trackingHash': this._trackingHash
	                }
	            );
	        }
	    };
	
	    this.sendMessage = function (action, postData) {
	        postData['action'] = action;
	        postData['fingerprint'] = this._fingerprint;
	        postData['api'] = this._api;
	        postData['page'] = utils.net.encodeData(document.location.href);
	
	        utils.net.send(
	            this._relayServer + '/api/count',
	            function (error) {
	            },
	            'data=' + utils.net.encodeData(JSON.stringify([postData]))
	        );
	    };
	
	    this.sendGA = function (label, category, action) {
	        var gaTrackers = this._gaTrackers;
	
	        label = (typeof label === 'string') ? utils.ucFirst(label) : '';
	        for (var i = 0; i < gaTrackers.length; i++) {
	            var name = gaTrackers[i];
	            label && window[this._name](name + '.set', 'dimension' + this._dimension, this._trackingPrefix + label);
	            this._engine.log(name + '.set', 'dimension' + this._dimension, this._trackingPrefix + label);
	            window[this._name](name + '.send', 'event', category, action, {nonInteraction: true});
	        }
	    };
	
	    /**
	     * Sends an event to all tracking systems (currently only Google Analytics)
	     *
	     * @param string action: e.g. 'click'
	     * @param string label: Usually the widget and widget id, separated by an underscore (e.g. exit_123)
	     */
	    this.trackEvent = function (action, label) {
	        var gaTrackers = this._gaTrackers,
	            isNonInteractionEvent = this._interactionEvents.indexOf(action.toLowerCase()) == -1;
	        if (this._type == 'new') {
	            for (var i = 0; i < gaTrackers.length; i++) {
	                var name = gaTrackers[i];
	                try {
	                    window[this._name](name + '.send', 'event', 'Hotelchamp', action, label, {
	                        nonInteraction: isNonInteractionEvent
	                    });
	                } catch (e) {
	                    this._engine.log('Analytics.trackEvent: Error while sending event to Google Analytics', e.message);
	                }
	            }
	        }
	    };
	
	    this._onInterval = function () {
	        var ready = false;
	
	        if (('GoogleAnalyticsObject' in window)) {
	            try {
	                this._type = 'new';
	                this._name = window['GoogleAnalyticsObject'];
	                var gaTrackers = this._gaTrackers;
	                window[this._name](
	                    bind(this, function () {
	                        if (window[this._name]['getAll']) {
	                            var list = window[this._name]['getAll'](),
	                                blacklist = [
	                                    'UA-236832-8' // Hoteliers
	                                ];
	
	                            if (list.length === 0) {
	                                gaTrackers.push('t0');
	                            }
	
	                            for (var i = 0; i < list.length; i++) {
	                                if(blacklist.indexOf(list[i].get('trackingId')) === -1)  {
	                                    gaTrackers.push(list[i].get('name'));
	                                }
	                            }
	
	                            this.sendGA(this.getTag(), this._trackingPrefix, 'setGA');
	                            try{
	                                var data = this.resolveGoogleAnalyticsObject();
	
	                                // If we can't acces the property from Google Analaytics, then scrape the page.
	                                if(!data) {
	                                    data = this._resolveBookingByScraping();
	                                }
	
	                                // If we found data from scraping, then send it to Titan
	                                if(data) {
	                                    this._engine.getTitan().event('bookingEngine', 'transaction', null, data);
	                                }
	                            } catch(error) {
	                                console.error(error);
	                            }
	
	                            ready = true;
	                        }
	                    })
	                );
	            } catch (error) {
	                this._failCount++;
	                ready = (this._failCount > 3);
	                console.error(error);
	            }
	            ready = ready || (this._failCount > 50);
	        } else if ('_gaq' in window) {
	            try {
	                this._type = 'old';
	                if (!utils.vars.isArray(window._gaq)) {
	                    var gaq = window._gaq || [],
	                        gat = window._gat || [],
	                        trackers = gat._getTrackers();
	                    for (var i = 0; i < trackers.length; i++) {
	                        var trackerName = trackers[i]._getName();
	
	                        gaq.push([trackerName + '._setCustomVar', 1, this._trackingPrefix, this.getTag(), 2]);
	                        gaq.push([trackerName + '._trackEvent', this._trackingPrefix, this._trackingPrefix, '', 0, true]);
	                    }
	                    ready = true;
	                }
	            } catch (error) {
	                this._failCount++;
	                ready = (this._failCount > 3);
	                console.error(error);
	            }
	        } else if (('s' in window || window.s.tl )  && (window.location.href.indexOf('langhamhotels')!== -1
	                                                        || window.location.href.indexOf('gc.synxis.com/rez.aspx?Chain=10316')!== -1
	                                                        || window.location.href.indexOf('mobile.synxis.com/27405')!== -1
	                                                        || window.location.href.indexOf('mobile.synxis.com/59053')!== -1
	                                                        || window.location.href.indexOf('mobile.synxis.com/58742')!== -1)) {
	            try {
	                window.s.eVar56 = this._trackingPrefix + utils.ucFirst(this.getTag());
	                window.s.tl();
	                ready = true;
	            } catch (error) {
	                this._failCount++;
	                ready = (this._failCount > 3);
	                console.error(error);
	            }
	        } else {
	            ready = (this._failCount > 10);
	        }
	        this._failCount++;
	        if (ready) {
	            clearInterval(this._interval);
	            this._ready = true;
	            this._handleQueue();
	            this._callback && this._callback(this._group);
	        }
	    };
	
	    this.isReady = function() {
	        return this._ready === true;
	    };
	
	    this.getAnalyticsVersion = function() {
	        return this._type == 'old' ? 1 : 2;
	    };
	
	    this._handleQueue = function () {
	        var queue = this._queue;
	        while (queue.length) {
	            queue.shift()();
	        }
	    };
	
	    this.track = function track(category, action) {
	        if (this._ready) {
	            this._handleQueue();
	
	            try {
	                switch (this._type) {
	                    case 'old':
	                        var gaq = window._gaq || [],
	                            gat = window._gat || [],
	                            trackers = gat._getTrackers();
	                        for (var i = 0; i < trackers.length; i++) {
	                            var trackerName = trackers[i]._getName();
	                            gaq.push([trackerName + '_trackEvent', category, action, '', 0, true]);
	                        }
	                        break;
	
	                    case 'new':
	                        this.sendGA(null, category, action);
	                        break;
	
	                    default:
	                        break;
	
	                }
	            } catch (error) {
	                console.error(error);
	            }
	        } else {
	            this._queue.push(bind(this, this.track, category, action));
	        }
	    };
	
	    /**
	     * This function makes sure all required url parameters are added to a link...
	     *
	     * https://developers.google.com/analytics/devguides/collection/gajs/methods/gaJSApiDomainDirectory#_gat.GA_Tracker_._getLinkerUrl
	     **/
	    this.analyticsLinkUrl = function analyticsLinkUrl(link, callback) {
	        if (this._ready) {
	            this._handleQueue();
	
	            try {
	                if (link.indexOf('_umta=') === -1) {
	                    var linkUrl = link;
	                    switch (this._type) {
	                        case 'old':
	                            _gaq.push(function () {
	                                var pageTracker = _gat._getTrackerByName(),
	                                    linkerUrl = pageTracker._getLinkerUrl(link);
	                                callback(linkerUrl);
	                            });
	                            break;
	
	                        case 'new':
	                            window[this._name](bind(this, function () {
	                                var trackers = window[this._name].getAll(),
	                                    tracker = trackers[0];
	                                callback(utils.net.addURLParam(linkUrl, tracker.get('linkerParam')));
	                            }));
	                            break;
	
	                        default:
	                            callback(link);
	                            break;
	                    }
	                }
	            } catch (error) {
	                console.error(error);
	                callback(link);
	            }
	        } else {
	            this._queue.push(bind(this, this.analyticsLinkUrl, link, callback));
	        }
	    };
	
	    this.getViewedHotelSessionKey = function () {
	        return this._api + '_viewed_hotel';
	    };
	
	    this.getViewedBookSessionKey = function () {
	        return this._api + '_viewed_book';
	    };
	
	    this.getRegisteredWidgetsSessionKey = function () {
	        return this._api + '_widgets_registered';
	    };
	
	    this.getConversionTag = function () {
	        return 'conversion' + this._group;
	    };
	
	    this.getBookStartTag = function () {
	        return 'bookStart' + this._group;
	    };
	
	    this.getFinishedTag = function () {
	        return 'finished' + this._group;
	    };
	
	    this.getFinished = function () {
	        return this._finished;
	    };
	
	    this.getTag = function () {
	        return this._group;
	    };
	
	    this.resolveGoogleAnalyticsObject = function() {
	        var track = window[this._name].getAll();
	
	        for(var a = 0; a < track.length; a++) {
	            if (track[a].plugins_ && track[a].plugins_.values && track[a].plugins_.values[':ecommerce']) {
	                var ecommerceData = track[a].plugins_.values[':ecommerce'].a;
	
	                for(var b = 0; b < Object.keys(ecommerceData).length; b++) {
	                    var transaction = ecommerceData[Object.keys(ecommerceData)[b]];
	                    var collectedItems = [];
	                    var transactionItems = transaction.items || {};
	
	                    for(var c = 0; c < Object.keys(transactionItems).length; c++) {
	                        var transactionItem = transaction.items[Object.keys(transactionItems)[c]];
	
	                        var item = {
	                            price: transactionItem.price,
	                            name: transactionItem.name,
	                            quantity: transactionItem.quantity,
	                            currency: transactionItem.currency
	                        };
	                        collectedItems.push(item);
	                    }
	
	                    if (collectedItems.length) {
	                        return {
	                            revenue: transaction.revenue,
	                            currency: transaction.currency,
	                            items: collectedItems
	                        };
	                    }
	                }
	            }
	        }
	    };
	
	    this._resolveBookingByScraping = function() {
	        var element;
	
	        // If the ecommerce js plugin isn't loaded, then don't even try
	        if(document.head.innerHTML.indexOf("plugins/ua/ecommerce.js") === -1)
	            return {};
	
	        if(document.body.innerHTML.indexOf('ecommerce:addItem') !== -1) {
	            element = document.body;
	        } else if (document.head.innerHTML.indexOf('ecommerce:addItem') !== -1) {
	            element = document.head;
	        } else {
	            return {};
	        }
	
	        var regexItems = /['"]ecommerce:addItem['"]\W*,\W*{([^}]*)}/gmi,
	            regexTransaction = /['"]ecommerce:addTransaction['"]\W*,\W*{([^}]*)}/gmi,
	            transactionResult = regexTransaction.exec(element.innerHTML),
	            transactionRaw = transactionResult && transactionResult.length > 0 ? transactionResult[1] : null,
	            collectedItems = [],
	            transaction,
	            items = [],
	            matches;
	
	            // Loop over all the found regex matches
	            do {
	                matches = regexItems.exec(element.innerHTML);
	                if(matches) {
	                    items.push(matches[1]);
	                }
	            } while(matches);
	
	        for(var i = 0; i < items.length; i++) {
	            var itemTransactionRaw = items[i],
	                transactionItem;
	
	            // Try and parse the loose entries
	            try {
	
	                // If there is a ' in the string, then try and replace it with a " (for valid JSON)
	                // And then try to parse it with JSON.parse
	                if (transactionRaw) {
	                    if(transactionRaw.indexOf("'") !== -1) {
	                        transaction = JSON.parse("{" + transactionRaw.replace(/'/g, '"').trim() + "}");
	                    } else {
	                        transaction = JSON.parse("{" + transactionRaw.trim() + "}");
	                    }
	
	                    // If there is a ' in the string, then try and replace it with a " (for valid JSON)
	                    // And then try to parse it with JSON.parse
	                    if(itemTransactionRaw.indexOf("'") !== -1) {
	                        transactionItem = JSON.parse("{" + itemTransactionRaw.replace(/'/g, '"').trim() + "}");
	                    } else {
	                        transactionItem = JSON.parse("{" + itemTransactionRaw.trim() + "}");
	                    }
	
	                    // Build an object which has all the properties
	                    var item = {
	                        "price": transactionItem.price,
	                        "name": transactionItem.name,
	                        "quantity": transactionItem.quantity
	                    };
	
	                    // Push it on the items array
	                    collectedItems.push(item);
	                }
	            } catch(err) {}
	        }
	
	        // If we couldn't scrape a currency, then ask the DocumentConnector
	        if(!transaction.currency) {
	            var activeCurrency = (this._engine.getDocumentConnector().get('activeCurrency')) ? this._engine.getDocumentConnector().get('activeCurrency') : null;
	        }
	
	        return !collectedItems.length ? null : {
	            "items": collectedItems,
	            "currency": (transaction.currency) ? transaction.currency : activeCurrency,
	            "value": transaction.revenue
	        };
	    }
	});
	
	content.analytics.Titan = Class(function (supr) {
	    this.init = function(config) {
	        this._defaultEventMetaData = {};
	        this._defaultSessionMetaData = {};
	        this._engine = config.engine;
	
	        this.setDefaultEventMetaData(config.defaultEventMetaData || {});
	        this.setDefaultSessionMetaData(config.defaultSessionMetaData || {});
	
	        this._onReadyResolver = null;
	        this._onReady = new Promise(bind(this, function(resolve, reject) {
	            // not yet in use...
	            this._onReadyResolver = window._hc_scope.registerFirstTitanServerResponse = resolve;
	
	            var pollHcSession = function() {
	                if (!!window.hotelchampSession) {
	                   resolve();
	                } else {
	                    window.setTimeout(pollHcSession, 50);
	                }
	            };
	
	            if (config.doPoll) {
	                pollHcSession();
	            }
	        }));
	    };
	
	    /**
	     * Public methods
	     */
	
	    this.setDefaultEventMetaData = function(data, append) {
	        this._setMetaData(data, append, 'event');
	    };
	
	    this.setDefaultSessionMetaData = function(data, append) {
	        this._setMetaData(data, append, 'session');
	    };
	
	    /**
	     * Public tracking methods
	     */
	
	    /**
	     * event
	     * Track event data
	     */
	    this.event = function(category, action, source, data) {
	        this._onReady.then(bind(this, function() {
	            data = this._prepareMetaData(data, 'event');
	            this._engine.log('Titan::event - category: ', category, ' | action: ', action, ' | source: ', source, ' | data: ', data);
	            window.hotelchampSession.sendEvent(category, action, source, data);
	        }));
	    };
	
	    /**
	     * session
	     * Track session data
	     */
	    this.session = function(name, value, data) {
	        this._onReady.then(bind(this, function() {
	            data = this._prepareMetaData(data, 'session');
	            this._engine.log('Titan::session - name: ', name, ' | value: ', value, ' | data: ', data);
	            window.hotelchampSession.sendSessionProperty(name, value, data);
	        }));
	    };
	
	    this.documentConnectorProperty = function(property, value) {
	        this._onReady.then(bind(this, function() {
	            this._engine.log('Titan::documentConnectorProperty - property: ', property, ' | value: ', value);
	            window.hotelchampSession.sendDocumentConnectorProperty(property, value);
	        }));
	    }
	
	    /**
	     * Private methods
	     */
	
	    this._prepareMetaData = function(data, type) {
	        return Object.assign(data || {}, (type == 'event' ? this._defaultEventMetaData : this._defaultSessionMetaData));
	    };
	
	    this._setMetaData = function(data, append, type) {
	        if(data === undefined) {
	            return null;
	        }
	
	        var property = (type == 'event') ? '_defaultEventMetaData' : '_defaultSessionMetaData';
	
	        append = append !== false;
	        var items = [{}, append ? this._defaultEventMetaData : {}, data];
	        this[property] = Object.assign.apply(this, items);
	    };
	});
	/**
	 * Example form settings:
	 *
	 * {
	 *     "arrivalQuery":"#V110_C1_ArrivalDatePicker",
	 *     "arrivalPattern": "X,m D,Y",
	 *     "departureQuery":"#V110_C1_DepartureDatePicker",
	 *     "departurePattern": "X,m D,Y"
	 * }
	**/
	
	/*
	{
		"arrivalQuery": "#room1_arrivalDay",
		"arrivalPattern": "D-M-Y",
		"departureQuery":" #room1_departureDay",
		"departurePattern": "D-M-Y",
		"voucherQuery": "",
		"currencySelectorQuery": "#currencyselect select[name=curr]",
		"selectedNumberOfAdultsQuery": "#room1_adults",
	
		"brandSiteRatesQuery": ".rates .pricevalue",
		"productIndicator": ""
	}
	*/
	
	var BookingEngine = Class(Emitter, function(supr) {
			this.init = function init(opts) {
				supr(this, this.init, arguments);
	
				var engine 			= opts.engine,
					bookingEngines 	= opts.bookingEngines || [],
					i 				= bookingEngines.length;
	
				this._engine 				= engine;
				this._domModifier 			= new DOMModifier({});
				this._bookElement 			= null;
				this._activeBookingEngine 	= null;
	
				this._selectedArrivalDate   = null;
				this._selectedDepartureDate	= null;
				this._selectedVoucherCode	= null;
				this._selectedNumberOfAdults = null;
				this._selectedCurrency = null;
	
				while (i) {
					var bookingEngine 	= bookingEngines[--i],
						bookList 		= this._domModifier.findFormOrA(bookingEngine.url),
						j 				= bookList.length;
					while (j) {
						var domElement = bookList[--j];
						utils.listen(domElement, 'mousemove', 	bind(engine, engine.emit, 'HoverBook'));
						utils.listen(domElement, 'mouseout', 	bind(engine, engine.emit, 'LeaveBook'));
						utils.listen(domElement, 'mousedown', 	this, this.onMouseDownBook);
	
						if (this._bookElement === null) {
							this._bookElement = domElement;
						}
					}
					if (this._activeBookingEngine === null) {
						var formSettings = bookingEngine.form_settings;
						if (formSettings.arrivalQuery && formSettings.departureQuery) {
	                        var arrivalElement 		= Array.prototype.slice.call(utils.dom.queryAll(formSettings.arrivalQuery)),
								departureElement 	= Array.prototype.slice.call(utils.dom.queryAll(formSettings.departureQuery)),
								voucherElement		= Array.prototype.slice.call(utils.dom.queryAll(formSettings.voucherQuery)),
								currencySelectorElement = Array.prototype.slice.call(utils.dom.queryAll(formSettings.currencySelectorQuery)),
								adultSelectorElement = Array.prototype.slice.call(utils.dom.queryAll(formSettings.selectedNumberOfAdultsQuery));
	
							if ((arrivalElement !== null && arrivalElement.length > 0) && (departureElement !== null && departureElement.length > 0)) {
								this.initBookingEngine(bookingEngine, arrivalElement, departureElement, voucherElement, currencySelectorElement, adultSelectorElement)
							}
						}
					}
				}
			};
	
			this.initBookingEngine = function(bookingEngine, arrivalElement, departureElement, voucherElement, currencySelectorElement, adultSelectorElement) {
				bookingEngine.arrivalElement 	= arrivalElement;
				bookingEngine.departureElement 	= departureElement;
				bookingEngine.voucherElement	= voucherElement;
				bookingEngine.currencySelectorElement = currencySelectorElement;
				bookingEngine.adultSelectorElement = adultSelectorElement;
				this._activeBookingEngine 		= bookingEngine;
	
				var addListeners = bind(this, function(list, listeners) {
						for (var i = 0; i < list.length; i++) {
							for (var j = 0; j < listeners.length; j++) {
								utils.listen(list[i], listeners[j], this, this.onUpdateSelection);
							}
						}
					});
	
				addListeners(arrivalElement, 	['change', 'keyup', 'blur']);
				addListeners(departureElement, 	['change', 'keyup', 'blur']);
	
				if (!!bookingEngine.voucherElement) {
					addListeners(bookingEngine.voucherElement, ['change', 'keyup', 'blur']);
				}
	
				if (!!bookingEngine.adultSelectorElement) {
					addListeners(bookingEngine.adultSelectorElement, ['change', 'keyup', 'blur']);
				}
	
				if (!!bookingEngine.currencySelectorElement) {
					addListeners(bookingEngine.currencySelectorElement, ['change', 'keyup', 'blur']);
				}
	
				if (arrivalElement.length && departureElement.length) {
					// Set a timeout, this allows listeners to subscribe to this class after construction...
					setTimeout(
						bind(this, function() {
							this.onUpdateSelection({target: arrivalElement[0]});
							this.onUpdateSelection({target: departureElement[0]});
	
							if (!!bookingEngine.voucherElement) {
								this.onUpdateSelection({target: bookingEngine.voucherElement[0]});
							}
	
							if (!!bookingEngine.adultSelectorElement) {
								this.onUpdateSelection({target: bookingEngine.adultSelectorElement[0]});
							}
	
							if (!!bookingEngine.currencySelectorElement) {
								this.onUpdateSelection({target: bookingEngine.currencySelectorElement[0]});
							}
						}),
						25
					);
				}
			};
	
			this.onUpdateSelection = function onUpdateSelection(event) {
				var bookingEngine 	= this._activeBookingEngine,
					formSettings 	= bookingEngine.form_settings,
					findElement 	= function(element, list) {
						for (var i = 0; i < list.length; i++) {
							if (element === list[i]) {
								return true;
							}
						}
						return false;
					},
					date,
					pattern 		= null,
					signal			= null,
					isDateChange	= false,
					value			= null;
	
				if (findElement(event.target, bookingEngine.arrivalElement)) {
					pattern = formSettings.arrivalPattern;
					signal 	= 'ArrivalDate';
					isDateChange = true;
				} else if (findElement(event.target, bookingEngine.departureElement)) {
					pattern = formSettings.departurePattern;
					signal 	= 'DepartureDate';
					isDateChange = true;
				} else if(findElement(event.target, bookingEngine.voucherElement)) {
					pattern = null;
					signal 	= 'VoucherCode';
				} else if(findElement(event.target, bookingEngine.adultSelectorElement)) {
					pattern = null;
					signal 	= 'NumberOfAdults';
				} else if(findElement(event.target, bookingEngine.currencySelectorElement)) {
					pattern = null;
					signal 	= 'Currency';
				}
	
				if (signal) {
					if (isDateChange && pattern) {
						// set a big delay before fetching the value.
						// In case of the Hotelchamp Luxen test page, the old value was fetched from the
						// event.target.value. This delay helped...
						setTimeout(bind(this, function() {
							date = this._resolveDateFromInput(event.target.value, pattern);
	
							if (date) {
								this['_selected' + signal] = date;
								this.emit(signal, date);
							}
						}), 200);
					} else {
						value = event.target.value;
	
						if (value) {
							this['_selected' + signal] = value;
							this.emit(signal, value);
						}
					}
				}
			}
	
	        this._resolveDateFromInput = function(value, pattern) {
	            var resolveType = (pattern && ['auto', 'ihotelier'].indexOf(pattern) != -1) ? pattern : null,
	                resolved = null;
	
	            if (!resolveType && !!pattern) {
	                resolveType = 'querySelector';
	            }
	
	            try {
	                switch(resolveType) {
	                    case 'ihotelier':
	                        var currentDate = new Date();
	                        value += ' ' + currentDate.getFullYear();
	                        resolved = new Date(value);
	                        break;
	                    case 'querySelector':
	                        resolved = utils.date.parse(value, pattern);
	                        break;
	                    case 'auto':
	                    default:
	                        resolved = new Date(value);
	                }
	            } catch(e) {
	                console.error(e);
	            }
	
	            return resolved && resolved.getTime && !!resolved.getTime() ? resolved : null;
	        };
	
			this.onMouseDownBook = function onMouseDownBook(event) {
				var engine = this._engine;
				engine.getDemo() || engine.getAnalytics().track('uitgaande link booking-engine', 'click');
			};
	
			this.getBookElement = function() {
				return this._bookElement;
			};
	
			/**
			 * Getter methods
			 */
	
			this.getSelectedArrivalDate = function() {
				return this._selectedArrivalDate;
			};
	
			this.getSelectedDepartureDate = function() {
				return this._selectedDepartureDate;
			};
	
			this.getSelectedVoucherCode = function() {
				return this._selectedVoucherCode;
			};
	
			this.getSelectedNumberOfAdults = function() {
				return this._selectedNumberOfAdults;
			};
	
			this.getSelectedCurrency = function() {
				return this._selectedCurrency;
			};
	
	        /**
	         * getCurrentBrandSiteRates
	         * Get an object with the min, max and avg rates currenty listed
	         * in the booking engine.
	         */
			this.getCurrentBrandSiteRates = function() {
				var query = (this._activeBookingEngine && this._activeBookingEngine.form_settings.brandSiteRatesQuery) ? this._activeBookingEngine.form_settings.brandSiteRatesQuery : null,
				    rateElements,
				    rates = { min: null, max: null, avg: null },
				    rate;
	
				if (query) {
	    			rateElements = document.querySelectorAll(query);
	
	    			utils.vars.each(rateElements, function(element) {
						if (element.innerHTML) {
							rate = parseFloat(element.innerHTML.replace(/[^\d.-]/g, ''));
	
		        			// determine min rate
		        			if (!rates.min || rates.min > rate) {
		            			rates.min = rate;
		        			}
	
		        			// determine max rate
		        			if (!rates.max || rates.max < rate) {
		            			rates.max = rate;
		        			}
						}
	    			});
	
	    			if (rates.min !== null && rates.max !== null) {
	        			rates.avg = ((rates.max - rates.min) / 2) + rates.min;
	    			}
				}
	
	
				return rates;
			};
	
			this.getCurrentProductIndicator = function() {
				return null;
			};
		});
	
	// Namespace...
	content.storage = {};
	
	content.storage.Storage = Class(function() {
		this.init = function init(opts) {
	        this._now = new Date().getTime();
	        this._value = {};
	        this._websiteHash = opts.websiteHash;
	
			this._engine = opts.engine;
	
			this._loadedCallback = opts.loadedCallback;
	
			var storageConstructor = this._engine.getTestEnv() ? content.storage.MockStorageRelay : content.storage.StorageRelay;
	
	        this._storageRelay = new storageConstructor({
				loadedCallback: bind(this, this.onLoaded),
				failedCallback: bind(this, this.onLoadFailed),
				relayServer: opts.relayServer,
				engine: this._engine
			});
	
	        this._resetSessionValueIfRequired();
	
	        this.cc = bind(this._storageRelay, this._storageRelay.clearStorage);
	
			if (!('cc' in window)) {
				window.cc = this.cc;
			}
		};
	
		this.onLoaded = function onLoaded(data) {
			this._value = data;
			this._checkWebsiteStorage();
	        this._resetSessionValueIfRequired();
			this._loadedCallback();
		};
	
		this.onLoadFailed = function onLoadFailed() {
			// The relay server failed to load in the iframe, fall back to local storage...
			this._storageRelay = new content.storage.LocalStorageRelay({
				engine: 		this._engine,
				loadedCallback: bind(this, this.onLoaded)
			});
		};
	
		this._store = function() {
	        this._storageRelay.store(this._value)
		};
	
		this.clear = function() {
	        this._value = {};
	        this._storageRelay.clearStorage();
		};
	
		this.set = function(key, v) {
			this._value[key] = v;
			this._store();
		};
	
		this.get = function(key, defaultValue, dontStore) {
			if (key in this._value) {
	            return this._value[key];
			}
			if (!dontStore) {
				this._value[key] = defaultValue;
				this._store();
			}
			return defaultValue;
		};
	
		this.getStorageRelay = function() {
			return this._storageRelay;
		};
	
	    /**
	     * hasPersistingStorage
	     * @return   {bool}  True if storage is persistance, false if not.
	     *                   In some circumstances localStorage and cookies are not available (Safari in private mode with iframe relay storage for example)
	     */
	    this.hasPersistingStorage = function() {
	        return this._storageRelay.hasPersistingStorage();
	    };
	
		this.getDoneForSessionTime = function(key, dontStore) {
			return this.get(key, this._now, dontStore);
		};
	
		this.getDoneForSession = function(key) {
			var exitTime = this.getDoneForSessionTime(key, true);
			return (this._now !== exitTime) && (this._now < exitTime + 30 * 60 * 1000);
		};
	
		this.setDoneForSession = function(key) {
			this.set(key, this._now);
		};
	
		this.removeDoneForSession = function(key) {
			this.set(key, 0);
		};
	
		this.getNow = function() {
			return this._now;
		};
	
	
	
	    /**
	     * _resetSessionValueIfRequired
	     * This method checks whether session is valid or not. If not, the
	     * session will be reset.
	     */
	    this._resetSessionValueIfRequired = function() {
	        var hasWebsiteScope = (('websites' in this._value) && (this._websiteHash in this._value['websites'])),
	            hasSessionScope = hasWebsiteScope && ('__SESSION__' in this._value['websites'][this._websiteHash]),
	            hasSessionExpireTime = hasSessionScope && ('__SESSION_EXPIRE_TIME__' in this._value['websites'][this._websiteHash]),
	            sessionExpireTime = hasSessionExpireTime ? this._value['websites'][this._websiteHash]['__SESSION_EXPIRE_TIME__'] : null,
	            isSessionValid = hasSessionScope &&
	                             hasSessionExpireTime &&
	                             this._isValidSessionTime(sessionExpireTime);
	
	        if (!isSessionValid) {
	            this._resetSession();
	        } else {
	            // extend session
	            this._value['websites'][this._websiteHash]['__SESSION_EXPIRE_TIME__'] = new Date().getTime() + 30 * 60 * 1000;
	        }
	    };
	
	    /**
	     * _resetSession
	     * Reset session data
	     */
	    this._resetSession = function() {
			this._checkWebsiteStorage();
	
	        this._value['websites'][this._websiteHash]['__SESSION__'] = {};
	        this._value['websites'][this._websiteHash]['__SESSION_EXPIRE_TIME__'] = new Date().getTime() + 30 * 60 * 1000;
	        this._value['websites'][this._websiteHash]['__SESSION_START_TIME__'] = new Date().getTime();
	
	        this._store();
	    };
	
	    /**
	     * _checkWebsiteStorage
	     * Helper method that will be called every time to check if storage has correct layout.
	     */
	    this._checkWebsiteStorage = function() {
			(!this._value['websites']) && (this._value['websites'] = {});
			(!this._value['websites'][this._websiteHash]) && (this._value['websites'][this._websiteHash] = {});
			(!this._value['websites'][this._websiteHash]['__STORAGE__']) && (this._value['websites'][this._websiteHash]['__STORAGE__'] = {});
	        (!this._value['websites'][this._websiteHash]['__STORAGE_START_TIME__']) && (this._value['websites'][this._websiteHash]['__STORAGE_START_TIME__'] = new Date().getTime());
	    };
	
	    /**
	     * _isValidSessionTime
	     * Helper method to determine whether the given time
	     * is a valid session time.
	     * @param   {int}   expire time
	     * @return  {bool}  True if session time is valid, false if not
	     */
	    this._isValidSessionTime = function(sessionExpireTime) {
	        return (new Date().getTime() <= sessionExpireTime);
	    };
	
	    /**
	     * Sets in session.
	     *
	     * @param      {<type>}  key     The key
	     * @param      {<type>}  value   The value
	     */
	    this.setInSession = function(key, value) {
	        this._resetSessionValueIfRequired();
	
	        utils.vars.set(this._value['websites'][this._websiteHash]['__SESSION__'], key, value);
	
	        this._store();
	    };
	
	    /**
	     * Gets the from session.
	     *
	     * @param      {<type>}  key           The key
	     * @param      {<type>}  defaultValue  The default value
	     * @return     {<type>}  The from session.
	     */
	    this.getFromSession = function(key, defaultValue) {
	        this._resetSessionValueIfRequired();
	
	        return utils.vars.get(this._value['websites'][this._websiteHash]['__SESSION__'], key, defaultValue);
		};
	
	    /**
	     * getSessionStartTime
	     * Get the time the session storage is started
	     * @return  {int}   timestamp (date.getTime())
	     */
	    this.getSessionStartTime = function() {
	        this._resetSessionValueIfRequired();
	        return utils.vars.get(this._value, 'websites.' + this._websiteHash + '.__SESSION_START_TIME__');
	    };
	
	    /**
	     * getStorageStartTime
	     * Get the time the website storage is started
	     * @return  {int}   timestamp (date.getTime())
	     */
	    this.getStorageStartTime = function() {
	        this._checkWebsiteStorage();
	        return utils.vars.get(this._value, 'websites.' + this._websiteHash + '.__SESSION_START_TIME__');
	    };
	
		/**
		 * Sets in storage.
		 *
		 * @param      {string}  key     The key
		 * @param      {string}  value   The value
		 */
		this.setInStorage = function(key, value) {
			this._checkWebsiteStorage();
	
			utils.vars.set(this._value['websites'][this._websiteHash]['__STORAGE__'], key, value);
	
			this._store();
		};
	
		/**
		 * Gets key from storage, if not available returns defaultValue.
		 *
		 * @param      {string}  key           The key
		 * @param      {string}  defaultValue  The default value
		 * @return     {string} Key from storage, or defaultValue.
		 */
		this.getFromStorage = function(key, defaultValue) {
			this._checkWebsiteStorage();
	
			return utils.vars.get(this._value['websites'][this._websiteHash]['__STORAGE__'], key, defaultValue);
		};
	});
	
	content.storage.LocalStorageRelay = Class(Queue, function(supr) {
		this.init = function init(opts) {
			supr(this, this.init, arguments);
	
			this._relayServer 	= 'http://127.0.0.1:8010';
			this._engine 		= opts.engine;
			this._engine.log('Using local storage!');
	
			var value = localStorage.getItem('hotelchamp');
			if (value === null) {
				value = {};
			} else {
				try {
					value = JSON.parse(value);
				} catch (error) {
					console.error(error);
					value = {};
				}
			}
			opts.loadedCallback(value);
		};
	
		this.request = function request(url, postData) {
			if (typeof postData === 'object') {
				try {
					postData = JSON.stringify([postData]);
				} catch (error) {
					postData = '';
				}
			}
			// Needs string index to prevent minification!
			var message = {'url': this._relayServer + url, 'postData': postData ? 'data=' + utils.net.encodeData(postData) : false},
				engine 	= this._engine;
	
			engine.log('Local send message:', message);
			engine.log('Local DataReceived');
	
			setTimeout(bind(this, this.emit, 'DataReceived', {}), 0); // Run the next tick!
		};
	
		this.clearStorage = function clearStorage() {
			localStorage.setItem('hotelchamp', {});
		};
	
		this.store = function store(data) {
			try {
				var value = JSON.stringify(data);
				localStorage.setItem('hotelchamp', value);
			} catch (error) {
				console.error(error);
			}
		};
	
	    this.hasPersistingStorage = function() {
	        return true;
	    };
	});
	
	content.storage.MockStorageRelay = Class(Queue, function(supr) {
		this.init = function init(opts) {
			supr(this, this.init, arguments);
	
			this._engine 			= opts.engine;
			this._loadedCallback 	= opts.loadedCallback;
			this._engine.log('Using mock storage!');
	
			setTimeout(
				bind(this, function() {
					this._engine.log('Mock loaded callback');
					this._loadedCallback({});
				}),
				500
			);
		};
	
		this.request = function request(url, postData) {
			// Needs string index to prevent minification!
			var message = {'url': this._relayServer + url, 'postData': postData ? utils.net.encodeData(postData) : false},
				engine 	= this._engine;
			engine.log('Mock send message:', message);
	
			// Wait a while and send a mock response...
			setTimeout(
				bind(this, function() {
					engine.log('Mock DataReceived');
					this.emit('DataReceived', {});
				}),
				150
			);
		};
	
		this.clearStorage = function clearStorage() {
			// No implementation for test environment....
		};
	
		this.store = function store(data) {
			// No implementation for test environment....
		};
	
	    this.hasPersistingStorage = function() {
	        return true;
	    };
	});
	
	content.storage.StorageRelay = Class(Queue, function(supr) {
		this.init = function init(opts) {
			supr(this, this.init, arguments);
	
			var relayServer = opts.relayServer || 'https://node.hotelchamp.com',
				i 			= relayServer.indexOf('/');
			if (i !== -1) {
				relayServer = relayServer.substr(i - relayServer.length);
			}
	
			relayServer = ((relayServer.indexOf('127.0.0.1') === -1) ? 'https:' : 'http:') + relayServer;
	
			this._engine 			= opts.engine;
			this._relayServer 		= relayServer;
			this._loadedCallback 	= opts.loadedCallback;
			this._failedCallback 	= opts.failedCallback;
	        this._hasPersistingStorage = null;
	
			this.initListener();
			this.initRelay();
		};
	
		this.initRelay = function() {
			utils.net.send(this._relayServer, bind(this, this.onRelayLoadResponse))
		};
	
		this.initListener = function() {
			utils.listen(
				window,
				'message',
				this,
				bind(this, function(data) {
					var data = data.data;
					try {
						data = (typeof data === 'string') ? JSON.parse(data) : data;
						if (utils.dom.prefixed('Response') in data) {
							this._ready = true;
	                        this._hasPersistingStorage = ('hasPersistingStorage' in data && data.hasPersistingStorage == true) ||
	                                                     !('hasPersistingStorage' in data);
	
							this.emit('DataReceived', data);
							('storage' in data) && this._loadedCallback && this._loadedCallback(data['storage']);
							this._engine.log('Received data:', data);
						}
					} catch (error) {
						//console.error(error);
					}
				})
			);
		};
	
		this.initIFrame = function initIFrame(opts) {
			if (!document.body) {
				setTimeout(bind(this, this.initIFrame), 1);
				return;
			}
			var iframe 	= document.createElement('iframe'),
				style 	= iframe.style;
	
			this._iframe 			= iframe;
			style.position 			= 'absolute';
			style.border 			= 0;
			style.width 			= '1px';
			style.height 			= '1px';
			style.bottom			= '0';
	        style.bottom            = '0px';
	        style.right             = '0px';
			style.backgroundColor 	= 'transparent';
	
			utils.listen(iframe, 'load', this, this.onLoadIFrame);
			iframe.src 				= this._relayServer + '/relay.html';
			document.body.appendChild(iframe);
		};
	
		this.request = function request(url, postData) {
			if (this._ready) {
				this.clear();
				// Needs string index to prevent minification!
				if (typeof postData === 'object') {
					try {
						postData = JSON.stringify([postData]);
					} catch (error) {
						postData = '';
					}
				}
				// Needs string index to prevent minification!
				var message = {'url': this._relayServer + url, 'postData': postData ? 'data=' + utils.net.encodeData(postData) : false};
				this._engine.log('Send message:', message);
				this._iframe.contentWindow.postMessage(message, '*');
			} else {
				this.queue(bind(this, this.request, url, postData));
			}
		};
	
		this.clearStorage = function clearStorage() {
			localStorage.clear();
			if (this._ready) {
				this.clear();
				this._iframe.contentWindow.postMessage({'clear': true}, '*');
			} else {
				this.queue(bind(this, this.clearStorage));
			}
		};
	
		this.store = function store(data) {
			if (this._ready) {
				this.clear();
				var message = {'store': data}; // Needs string index to prevent minification!
				this._iframe.contentWindow.postMessage(message, '*');
			} else {
				this.queue(bind(this, this.store, data));
			}
		};
	
		this.onRelayLoadResponse = function onRelayLoadResponse(error, data) {
			if (error) {
				this._failedCallback && this._failedCallback();
			} else {
				this.initIFrame();
			}
		};
	
		this.onLoadIFrame = function(event) {
			this._ready = true;
		};
	
	    this.hasPersistingStorage = function() {
	        return this._hasPersistingStorage;
	    };
	});
	
	var EngineArgs = Class(Emitter, function(supr) {
			this.init = function init(opts) {
				supr(this, this.init, arguments);
	
				var href = document.location.href;
				
				this.reload 		= utils.net.urlKey('hcReload') || !!window['_hcReload'];
				this.shortExit 		= utils.net.urlKey('hcExit') || !!window['_hcExit'];
				this.engine 		= utils.net.urlKey('hcEngine') || !!window['_hcEngine'];
				this.verbose 		= utils.net.urlKey('hcVerbose') || !!window['_hcVerbose'];
				this.enabled 		= utils.net.urlKey('hcEnabled') || !!window['_hcEnabled'];
				this.disabled 		= utils.net.urlKey('hcDisabled') || !!window['_hcDisabled'];
				this.finished 		= utils.net.urlKey('hcFinished') || !!window['_hcFinished'];
				this.booking 		= utils.net.urlKey('hcBooking') || !!window['_hcBooking'];
				this.forceLang 		= utils.net.urlKey('hcForceLang') || !!window['_hcForceLang'];
	            this.clearStorage   = utils.net.urlKey('hcClearStorage') || !!window['_hcClearStorage'];
	            this.hcDebug        = utils.net.urlKey('hcDebug') || !!window['_hcDebug'];
	            this.dashboardPreview = utils.net.urlKey('hcDashboardPreview') || !!window['_hcDashboardPreview'];
	            this.forcedWidgetIds = [];
	
	            var hcForcedWidgetId  = utils.net.urlKey('hcForceWidgetId') ? utils.net.urlKey('hcForcedWidgetId') : ('_hcForcedWidgetId' in window ? window['_hcForcedWidgetId'] : null);
				if (hcForcedWidgetId && typeof hcForcedWidgetId == 'string') {
					this.forcedWidgetIds = hcForcedWidgetId.split(',');
				}
	
				this.verbose = this.verbose || this.reload || this.shortExit || this.engine;
	
				var version = this.getKeyValue(href, 'hcVersion', '0123456789');
				(version !== false) && (this.version = version);
	
				var group = this.getKeyValue(href, 'hcGroup', 'ABCD');
				(group !== false) && (this.group = group);
	
				var finger = this.getKeyValue(href, 'hcFinger', '0123456789abcdefghijklmnopqrstuvwxyz');
				(finger !== false) && (this.finger = finger);
	
				var device = this.getKeyValue(href, 'hcDevice', '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ');
				(device !== false) && (this.device = device);
	
				this.finished && (window['hcFinished'] = true);
	
				// If the AB test is disabled in one of the widgets then enable all
				// and check by widget if enabled or disabled...
			};
	
			this.getKeyValue = function(href, key, validChars) {
				var href 	= document.location.href,
					i 		= href.indexOf(key);
				if (i !== -1) {
					i += key.length;
					var value = '';
					while ((i < href.length) && (validChars.indexOf(href[i]) !== -1)) {
						value += href[i++];
					}
					if (value !== '') {
						return value;
					}
				}
				return false;
			};
		});
	
	var Engine = Class(Emitter, function (supr) {
	    this.init = function init(opts) {
	        if (window.hcLoaded) {
	            return;
	        }
	
	        if (!('_hc_scope' in window)) {
	            window['_hc_scope'] = {};
	        }
	
	        this._fingerprint = null;
	        this._dictionary = {"componentTitle":"componentTitle","componentOrder":"componentOrder","devicesTitle":"devicesTitle","targetDevice":"targetDevice","displayPropertiesTitle":"displayPropertiesTitle","width":"width","priority":"priority","preventDisplayStateManagedByWidgetManager":"preventDisplayStateManagedByWidgetManager","label":"label","tab":"tab","minimizable":"minimizable","startMinimized":"startMinimized","fold":"fold","mobileMinimizable":"mobileMinimizable","labelOffset":"labelOffset","labelAlignment":"labelAlignment","horizontalOffset":"horizontalOffset","dockable":"dockable","buttonTitle":"buttonTitle","buttonAction":"buttonAction","alertButtonAction":"alertButtonAction","alertCloseWindow":"alertCloseWindow","labelTitle":"labelTitle","dockIcon":"dockIcon","labelUseIcon":"labelUseIcon","titleIcon":"titleIcon","titleUseIcon":"titleUseIcon","shadowEnabled":"shadowEnabled","displayTitle":"displayTitle","displayTitleAlert":"displayTitleAlert","displayText":"displayText","displayTextAlert":"displayTextAlert","displayPromoCode":"displayPromoCode","displayPromoCodeAlert":"displayPromoCodeAlert","displayUsp":"displayUsp","displayUspAlert":"displayUspAlert","orderedList":"orderedList","displayVoucher":"displayVoucher","displayVoucherAlert":"displayVoucherAlert","displayAcceptTerms":"displayAcceptTerms","requireAcceptTerms":"requireAcceptTerms","acceptTermsDefaultTrue":"acceptTermsDefaultTrue","displayAlert":"displayAlert","refCode":"refCode","validFrom":"validFrom","validTo":"validTo","emailTemplate":"emailTemplate","displayPriceComparison":"displayPriceComparison","displayPriceComparisonAlert":"displayPriceComparisonAlert","showOnlyWhenCheepest":"showOnlyWhenCheepest","showOnlyWithAvailablePrices":"showOnlyWithAvailablePrices","hideChannelsIfNoPriceIsAvailable":"hideChannelsIfNoPriceIsAvailable","hideChannelsIfChannelPriceIsLower":"hideChannelsIfChannelPriceIsLower","codes":"codes","names":"names","hotelCode":"hotelCode","hotelName":"hotelName","priceUrl":"priceUrl","displayTable":"displayTable","displayTableAlert":"displayTableAlert","displayImage":"displayImage","displayImageAlert":"displayImageAlert","compImageHeight":"compImageHeight","compImage":"compImage","compImageHasImagePerLanguage":"compImageHasImagePerLanguage","displayReadMore":"displayReadMore","displayReadMoreAlert":"displayReadMoreAlert","displayCallMeBack":"displayCallMeBack","displayCallMeBackAlert":"displayCallMeBackAlert","displayCallMeBackOptions":"displayCallMeBackOptions","callMeBackCustomEmail":"callMeBackCustomEmail","displayContactUs":"displayContactUs","displayContactUsNewsletter":"displayContactUsNewsletter","customEmailReceiver":"customEmailReceiver","displayTimer":"displayTimer","displayTimerAlert":"displayTimerAlert","expireDateTimeMode":"expireDateTimeMode","expireDate":"expireDate","expireTime":"expireTime","expireHourModifier":"expireHourModifier","expireMinuteModifier":"expireMinuteModifier","displayReview":"displayReview","displayReviewAlert":"displayReviewAlert","compReviewIsOverallScoreVisible":"compReviewIsOverallScoreVisible","compReviewAreReviewsVisible":"compReviewAreReviewsVisible","compReviewReviewAmount":"compReviewReviewAmount","compReviewReviewLanguages":"compReviewReviewLanguages","alignment":"alignment","mobileMinimizableShowButton":"mobileMinimizableShowButton","labelType":"labelType","alignVertical":"alignVertical","isDockableWidget":"isDockableWidget","dockableTitle":"dockableTitle","labelIcon":"labelIcon","displayMaps":"displayMaps","displayMapsAlert":"displayMapsAlert","compMapsApiKey":"compMapsApiKey","compMapsLocation":"compMapsLocation"};  // This string is replaced with an object in the AddonBuilder!
	        this._opts = opts;
	        this._settings = opts.settings || {};
	        this._pluginSettings = opts.pluginSettings || {};
	        this._ready = false;
	        this._api = opts.api;
	        this._demo = parseInt(opts.demo, 10);
	        this._isPreviewWidget = parseInt(opts.isPreviewWidget, 10);
	        this._testEnv = parseInt(opts.testEnv, 10);
	        this._enabled = false;
	        this._proposition = true;
	        this._isClientCountryResolved = false;
	        this._isClientRegionResolved = false;
	        this._forced_storage_hash = this.getParamFromWindowHcScope('forced_storage_hash');      // this value will be used the scope in the storage for the current website and can be manipulates outside the widget system. The main reason for existance is to force the global Millennium website hash as the storage scope for all 'sub' Millennium hotels.
	        this._exitTriggerMouseMode = (opts.settings.exitTriggerMouseMode && ['default', 'ignore_top_right_area','ignore_onblur','ignore_onblur_and_top_right_area'].indexOf(opts.settings.exitTriggerMouseMode) != -1) ? opts.settings.exitTriggerMouseMode : 'default';
	        this._relayServer = opts.relayServer;
	        this._titanWebsiteHash = this._forced_storage_hash || opts.api;
	        this._titanScriptUrl = opts.titanScriptUrlTemplate ? opts.titanScriptUrlTemplate.replace(':websiteHash', this._titanWebsiteHash) : null;
	        this._promocodeServer = opts.promocodeServer;
	        this._reviewServer = opts.reviewServer;
	        this._version = 0;
	        this._dataStores = {};
	        this._plugins = {};                                 // Get the active widgets first, this way we get the version info
	        this._hasTriggered = {};                                    // Object containing triggered events(unique, every event gets only stored once)
	        // Before analytics is setup...
	        supr(this, this.init, arguments);
	
	
	        this.initArgs();
	        
	        this.log('Engine opts: ', opts);
	
	        this._analytics = new content.analytics.Analytics({
	            api: opts.api,
	            dimension: opts.dimension,
	            trackingHash: opts.trackingHash,
	            trackingPrefix: opts.trackingPrefix,
	            relayServer: this._relayServer,
	            engine: this
	        });
	
	        this._titan = new content.analytics.Titan({
	            engine: this,
	            doPoll: !!this._titanScriptUrl,
	            defaultEventMetaData: {
	                'dashboardVersion': this.getDashboardVersion(),
	                'buildId': this.getBuildId()
	            }
	        });
	
	        if (this.initReload()) {
	            return;
	        }
	
	        window.hcLoaded = window['hcLoaded'] = true;
	
	        this._domContentLoaded = false;
	        var isDomLoaded = /loaded|complete/.test(document.readyState);
	
	        if (!isDomLoaded) {
	            utils.listen(window, 'load', this, this.onDOMContentLoaded, opts);
	            utils.listen(document, 'DOMContentLoaded', this, this.onDOMContentLoaded, opts);
	            utils.listen(document, 'onreadystatechange', this, this.onDOMContentLoaded, opts);
	        } else {
	            this.onDOMContentLoaded();
	        }
	
	        this.setGlobalDebug('engine', this);
	        this.setGlobalDebug('utils', utils);
	    };
	
	    this.initArgs = function () {
	        this._args = new EngineArgs({engine: this});
	    };
	
	    /**
	     * Check if the script has to be loaded from the dashboard server...
	     **/
	    this.initReload = function () {
	        var isPreLoaded = sessionStorage.getItem('hcMillenium') || sessionStorage.getItem('hcPreLoader');
	
	        if (isPreLoaded) {
	            this.log('Preloader is loaded');
	            sessionStorage.removeItem('hcMillenium');
	            sessionStorage.removeItem('hcPreLoader');
	        }
	
	        if (!this._args.reload) {
	            // abort reload routine when hcReload argument is NOT set in the url.
	            
	            this.log('No reload');
	            return false;
	        }
	
	        var opts = this._opts;
	        if (sessionStorage.getItem('reloadedHC')) {
	            // this if could only be accessed from the reloaded build...
	            
	            this.log('Script is reloaded');
	            sessionStorage.removeItem('reloadedHC');
	            
	            // return false because: the reloaded file can continue the 'normal' initialisation 
	            // routine of the widget system...
	            return false;
	        } else {
	            // this else condition could only be accesses from the main build...
	            
	            this.log('Script is going to be reloaded');
	            sessionStorage.setItem('reloadedHC', true);
	
	            var loadReloadScript = bind(this, function () {
	                var filename = localStorage.getItem('hcReloadUrl') || sessionStorage.getItem('hcReloadUrl') || window['hcReloadUrl'] || '//' + opts.dashboardDomain + '/app/launcher/' + opts.api + '.js',
	                    script = document.createElement('script');
	
	                this.log('Reload', filename);
	
	                var style = utils.dom.get('hcWidgetStyle');
	                (style) && style.parentNode.removeChild(style);
	
	                utils.listen(script, 'error', this, function () {
	                    this.log('Failed to load:', opts.api + '.js');
	                });
	
	                script.setAttribute('data-cfasync', 'false');                   // prevent caching of CloudFlare Rocket depency injector
	                script.src = filename + '?dt=' + (new Date().getTime());        // prevent caching
	                script.setAttribute('charset', 'utf-8');
	
	                document.body.appendChild(script);
	            });
	
	            var isDomLoaded = /loaded|complete/.test(document.readyState);
	
	            if (!isDomLoaded) {
	                utils.listen(window, 'load', this, loadReloadScript);
	            } else {
	                loadReloadScript();
	            }
	        }
	
	        return true;
	    };
	
	    this.initTitan = function() {
	        if (this._titanScriptUrl) {
	            var script = document.createElement('script');
	            script.setAttribute('src', this._titanScriptUrl);
	            document.head.appendChild(script);
	        }
	        var argName,
	            argNames = ['group', 'reload', 'hcDebug', 'shortExit', 'enabled', 'disabled', 'forceLang', 'dashboardPreview', 'booking', 'clearStorage', 'finished'];
	        if (this.anyArgIsSet(argNames)) {
	            var meta = {};
	            for (var i=0; i < argNames.length; i++) {
	                argName = argNames[i];
	                meta[argName.charAt(0).toUpperCase() + argName.slice(1)] = this._args[argName];
	            }
	            this.getTitan().session('environment', 'hcArgs', meta);
	        }
	    };
	
	    this.anyArgIsSet = function(argNames) {
	        for (var i = 0; i < argNames.length; i++) {
	            if (!!this._args[argNames[i]]) return true;
	        }
	        return false;
	    };
	
	    this.initConsole = function (opts) {
	        var args = this._args,
	            s = [this._enabled ? 'On' : 'Off'];
	
	        args.reload && s.push('Reload');
	        args.engine && s.push('Engine');
	        args.shortExit && s.push('ShortExit');
	        args.verbose && s.push('Verbose');
	        args.enabled && s.push('Enabled');
	        args.disabled && s.push('Disabled');
	        args.finished && s.push('Finished');
	
	        var text = [
	            ' _   _  ___ ',
	            '( )_( )/ __) ' + opts.when,
	            ' ) _ (( (__  ' + opts.git,
	            '(_) (_)\\___) [' + s.join(', ') + ']',
	            ''
	        ];
	
	        if (args.verbose) {
	            console.log('%c' + text.join("\n"), 'color:#19A79B;font-size:10px;');
	        }
	        /*
	         var methods = {
	         'log':         'Log',
	         'info':    'Info',
	         'warn':    'Warn',
	         'error':   'Error'
	         };
	         for (var method in methods) {
	         (bind(this, function(method, signal) {
	         var oldMethod = console[method];
	         console[method] = bind(this, function() {
	         var args   = Array.prototype.slice.call(arguments),
	         error  = new Error(),
	         stack  = error.stack ? error.stack.split("\n") : [];
	         oldMethod.apply(console, args);
	         this.emit(signal, args, stack[3]);
	         });
	         }))(method, methods[method]);
	         }
	         */
	        var error = new Error(),
	            stack = error.stack ? error.stack.split("\n") : [];
	
	        setTimeout(
	            bind(this, function () {
	                this.emit('Info', ['%c' + text.join("\n"), 'color:#19A79B;font-size:14px;'], stack[1]);
	            }),
	            10
	        );
	    };
	
	    this.initDevice = function () {
	        this._devices = {
	            'Mobile': new content.ui.device.MobileDevice({engine: this}),
	            'Desktop': new content.ui.device.DesktopDevice({engine: this}),
	            'Ipad': new content.ui.device.IpadDevice({engine: this})
	        };
	
	        if (this._args.device) {
	            this._device = this._devices[this._args.device];
	        } else {
	            this._device = this._devices[utils.detectMobile() ? 'Mobile' : 'Desktop'];
	            (utils.detectIPad()) && (this._device = this._devices['Ipad']);
	        }
	    };
	
	    this.initWidgetManager = function () {
	        var opts = {engine: this};
	        this._widgetManager = utils.detectMobile() ? new content.ui.widget.manager.MobileWidgetManager(opts) : new content.ui.widget.manager.DesktopWidgetManager(opts);
	    };
	
	    this.initAfterLoad = function (opts) {
	        this._demo = opts.demo;
	        this._demo && this.initOverlay();
	
	        this.getTitan().session('gaVersion', this.getAnalytics().getAnalyticsVersion());
	
	        this.initConsole(opts);
	
	        if (opts) {
	            this._opts = opts;
	        } else {
	            return;
	        }
	
	        var stylesheets = opts.stylesheets || [];
	
	        for (var i = 0; i < stylesheets.length; i++) {
	            utils.dom.loadStylesheet(stylesheets[i]);
	        }
	
	        this._startTime = new Date().getTime(); // Do not remove this, used for till Show accepted in widget's.
	        this._templates = opts.templates;
	        this._leaveTimer = null;
	        this._activeLang = 'en';
	        this._activeLangReason = 'Not detected';
	
	        this.initLang();
	        this.updateOpts();
	    };
	
	    this.initDOM = function () {
	        var storage = this._storage,
	            isSessionCountUpdated = storage.getFromSession('user.visitedCount', 0) > 0;
	
	        utils.listen(document, 'mousemove', this, this.onMouseMove);
	        utils.listen(window, 'blur', this, this.onBlur);
	
	        this._bookingEngine = new BookingEngine({engine: this, bookingEngines: this._opts.bookingEngines});
	
	        this._documentConnector = new content.documentconnector.DocumentConnector({
	            adapterResolver: {
	                customAdapters: this._opts.documentConnectors || []
	            },
	            storage: this._storage
	        });
	
	        this.emit('DocumentConnectorInitialized', this._documentConnector);
	
	        this.getAnalytics().on('finished', bind(this, function() {
	            this._documentConnector.getDataHistory().reset();
	        }));
	
	        if (document.referrer && !this._storage.getFromSession('user.visitedCount', 0)) {
	            this._storage.setInSession('user.referrer', document.referrer);
	        }
	
	        this._storage.setInSession('user.visitedCount', this._storage.getFromSession('user.visitedCount', 0) + 1);
	        this._storage.setInStorage('user.visitedCount', this._storage.getFromStorage('user.visitedCount', 0) + 1);
	
	        if (!isSessionCountUpdated) {
	            storage.setInStorage('user.sessionCount', this._storage.getFromStorage('user.sessionCount', 0) + 1);
	        }
	
	        this.initStores();
	    };
	
	    this.initOverlay = function () { // Cover the entire site...
	        var div = document.createElement('div'),
	            style = div.style;
	
	        style.position = 'absolute';
	        style.left = '0px';
	        style.top = '0px';
	        style.right = '0px';
	        style.bottom = '0px';
	        style.zIndex = 10000;
	        div.id = 'hotelChampOverlay';
	        document.body.appendChild(div);
	    };
	
	    this.initAnalytics = function (callback) {
	        var validBrowser = false,
	            storage = this._storage,
	            browserVersion = utils.browserVersion,
	            args = this._args,
	            settings = this._settings,
	            abData = JSON.parse(settings.abData);
	
	        if (document.referrer) {
	            storage.set(this._api + 'refferer', document.refferer);
	        }
	
	        switch (utils.browserName) {
	            case 'ie':
	                validBrowser = (browserVersion > 9);
	                break;
	
	            case 'firefox':
	            case 'chrome':
	                validBrowser = (browserVersion > 10);
	                break;
	
	            case 'safari':
	                validBrowser = (browserVersion > 4);
	                break;
	        }
	        if (!validBrowser) {
	            return;
	        }
	        if (!this.getDemo()) {
	            var hashToUse = this._forced_storage_hash !== null ? this._forced_storage_hash : this._api,
	                storageKey = hashToUse + '_version';
	
	            if (this.getArgs().group && abData.hasOwnProperty(this.getArgs().group.toLowerCase()) && abData[this.getArgs().group.toLowerCase()] != 0) {
	                this._activeGroup = this.getArgs().group.toUpperCase();
	                this._storage.set(storageKey, this._activeGroup);
	            } else {
	                var random = ~~(Math.random() * 100),
	                    r = 0;
	
	                for (var key in abData) {
	                    var group = key,
	                        percentage = parseInt(abData[key], 10);
	                    if ((random >= r) && (random < r + percentage)) {
	                        break;
	                    }
	                    r += percentage;
	                }
	
	                this._activeGroup = this._storage.get(storageKey, group.toUpperCase());
	                this._storage.set(storageKey, this._activeGroup);
	            }
	            this._enabled = true;
	
	        } else {
	            this._enabled = true;
	            this._activeGroup = 'A';
	        }
	        this.getTitan().session('testingGroup', this._activeGroup, {isControl: !this.activeGroupHasWidgets()});
	
	        // Start checking for Google analytics...
	        this._analytics.startInit({
	            fingerprint: this._fingerprint,
	            group: this._activeGroup,
	            abTest: abData,
	            storage: storage,
	            callback: callback
	        });
	
	
	        this.emit('Analytics');
	    };
	
	    this.activeGroupHasWidgets = function() {
	        var i, widget,
	            activeGroup = this._activeGroup.toLowerCase(),
	            widgets = this._opts.widgets || [];
	        for (i = 0; i < widgets.length; i++) {
	            widget = widgets[i];
	            if (!!widget.testGroup && (widget.testGroup.toLowerCase() === activeGroup)) return true;
	        }
	        return false;
	    };
	
	    this.initLang = function () {
	        var opts = this._opts,
	            args = this._args,
	            lang = opts.lang,
	            resolvedLang = null,
	            langRegex = /^([a-zA-Z]{2})([-|_][a-zA-Z]{2})?$/; // Validates the language to be something like xx-XX or xx
	
	        if ('hcPreviewLang' in window) {
	            resolvedLang = window['hcPreviewLang'];
	            this._activeLangReason = 'Preview';
	        } else if (args.forceLang) {
	            resolvedLang = utils.net.urlLanguage();
	            this._activeLangReason = 'Force';
	        } else if (document.documentElement && langRegex.test(document.documentElement.lang) && document.documentElement.lang.toLowerCase().indexOf('en') < 0) {
	            resolvedLang = document.documentElement.lang.match(langRegex)[1];
	            this._activeLangReason = 'By lang tag';
	        } else if((resolvedLang = document.body.getAttribute("language")
	                || document.body.getAttribute("lang")
	                || document.body.getAttribute("data-language")
	                || document.body.getAttribute("data-lang"))
	            && langRegex.test(resolvedLang)) {
	            resolvedLang = resolvedLang.trim().match(langRegex)[1];
	            this._activeLangReason = 'Language as attribute in body';
	        } else if (
	            document.head.querySelector('meta[http-equiv="Content-Language"]')
	            && langRegex.test(document.head.querySelector('meta[http-equiv="Content-Language"]').getAttribute("content"))
	            &&  document.head.querySelector('meta[http-equiv="Content-Language"]').getAttribute("content").toLowerCase().indexOf('en') < 0) {
	            resolvedLang = document.head.querySelector('meta[http-equiv="Content-Language"]').getAttribute("content").trim().match(langRegex)[1];
	            this._activeLangReason = 'By lang tag: meta[http-equiv="Content-Language"]';
	        } else if (window.language && langRegex.test(window.language)) {
	            resolvedLang = window.language.toLowerCase().trim().match(langRegex)[1];
	            this._activeLangReason = 'Found on window.language';
	        } else {
	            this._activeLangReason = 'Not found';
	
	            /* Looking in the URL for something like /en/ */
	            var href = document.location.href.toLowerCase(),
	                urlRegex = /(lang|language|locale|user_language|culture)=[a-zA-Z]{2}((?:-|_)[a-zA-Z]{2})?&?/g,
	                urlLanguageMatch = '';
	
	            /* looking in the URL  for something like lang, language or locale  = xx-XX or xx_XX */
	            if (urlRegex.test(href)) {
	                urlLanguageMatch = href.match(urlRegex)[0];
	                resolvedLang = urlLanguageMatch.replace(/((lang|language|locale|user_language|culture)=)|&/g, '').match(langRegex)[1];
	                this._activeLangReason = 'Found "' + urlLanguageMatch + '" in URL ';
	            } else {
	                urlRegex = /(\/[a-z]{2})(?:\/|\?.*|\/\??.*|$)$/;
	                if (urlRegex.test(href)) {
	                    urlLanguageMatch = href.match(urlRegex)[0]; // getting the first match  to /xx/ in the URL but it can have as lot of things after the /xx/ so we need to replace
	                    resolvedLang = urlLanguageMatch.replace(/\?.*$/g,'').split('/')[1];
	                    this._activeLangReason = 'Found "' + urlLanguageMatch + '" in the URL';
	
	                }
	            }
	        }
	
	        if (resolvedLang !== null) {
	            this._activeLang = resolvedLang;
	        } else {
	            // when generic resolving fails, try the document connector
	            this.on('DocumentConnectorInitialized', bind(this, function(documentConnector) {
	                var documentConnectorLang = documentConnector.get('language', 'relay');
	
	                if (typeof documentConnectorLang === 'string') {
	                    this._activeLang = documentConnectorLang;
	                    this._activeLangReason = 'Overwritten by document connector language';
	                }
	            }));
	        }
	
	        // console.log("this._activeLang: ",this._activeLang,"this._activeLangReason: ",this._activeLangReason );
	    };
	
	    this.initStores = function () {
	        content.stores.hcSpecificationsDataStore = new content.stores.HcSpecificationsDataStore({
	            bookingEngine: this.getBookingEngine(),
	            documentConnector: this.getDocumentConnector(),
	            websiteHash: this._forced_storage_hash !== null ? this._forced_storage_hash : this.getApi(),
	            remoteUrl: this.getRelayServer(),
	            autoLoadAnalyticsData: true,
	            autoLoadClientGeoLocationData: true,
	            autoLoadDocumentConnectorData: true,
	            isDemoMode: this.getDemo(),
	            engine: this
	        });
	
	        this._dataStores['hcSpecificationsDataStore'] = content.stores.hcSpecificationsDataStore;
	    };
	
	    this.initWidgets = function () {
	        this.initDOM();
	        this._analytics.countHotel();
	        if (this.getApi() === 'o7fLq83TFb') {
	            this._analytics.countCustomTag('AbandonedBooking-engine-initWidgets');
	        }
	
	        var found = false,
	            opts = this._opts,
	            href = document.location.href.toLowerCase(),
	            widgets = opts.widgets || [],
	            i = widgets.length;
	
	        while (i) {
	            var widget = widgets[--i],
	                group = widget.testGroup,
	                rawUrlTriggerPolicyConfig = widget.urlTriggerPolicy || null,
	                urlTriggerPolicyConfig = (typeof rawUrlTriggerPolicyConfig == 'string' && rawUrlTriggerPolicyConfig !== '') ? JSON.parse(rawUrlTriggerPolicyConfig) : rawUrlTriggerPolicyConfig,
	                urlTriggerPolicy = urlTriggerPolicyConfig ? specs.PolicyFactory.createByConfig(urlTriggerPolicyConfig) : null,
	                isUrlTriggerPolicySatisfied = urlTriggerPolicy ? urlTriggerPolicy.isSatisfiedBy({'page.url': href}) : false,
	                doesMatchUriCheck = urlTriggerPolicy ? false : utils.net.matchURI(href, widget.uri) && !utils.net.matchURI(href, widget.uriDisabled),
	                isUrlCheckValid = doesMatchUriCheck || isUrlTriggerPolicySatisfied;
	
	            if (group.toUpperCase().indexOf(this._activeGroup) !== -1) {
	                if (isUrlCheckValid) {
	                    // If a widget can be shown on the page then select a random version,
	                    // when the widget creates a view then local storage is checked to see if there was a
	                    // version selected in the past, if not then this version will be used...
	                    storageKey = this._api + '_' + widget.hash + '_version';
	
	                    version = Object.keys(widget.versions).length;
	
	                    // Check if the version is still valid...
	                    if (widget.versions[version] === undefined) {
	                        var v = Object.keys(widget.versions);
	                        for (var j = 0; j < v.length; j++) {
	                            if (typeof widget.versions[v[j]] === 'object') {
	                                version = v[j];
	                            }
	                        }
	                        this._storage.set(storageKey, version);
	                    }
	
	                    if (!!widget.versions[version].data.isIpCountryCheckRequired || !!widget.versions[version].data.isIpRegionCheckRequired) {
	                        this.resolveClientCountry();
	                    }
	
	                    widget.versions.activeVersion = version;
	                    widget.engine = this;
	                    widget.templates = this._templates;
	                    widget.data = utils.clone(widget.versions[version]);
	
	                    if (widget.data.data && typeof widget.data.data.targetDevice == 'string') {
	                        widget.data.data.targetDevice.replace('tablet', 'ipad');
	                    }
	
	                    this._widgetManager.addWidget(content.ui.widget[widget['constructor']], widget);
	
	                    found = true;
	                } else {
	                    this.log('Url check didn\'t pass for widget id: ', widget.id);
	                }
	            }
	        }
	
	        setTimeout(bind(this, function () {
	            this._widgetManager.pageReady();
	            found && this.emit('WidgetsVisible');
	        }));
	    };
	
	    /**
	     * setGlobalDebug
	     * Helper method to set debug vars in the window object only when hcDebug mode is enabled.
	     * usefull for debugging live
	     */
	    this.setGlobalDebug = function (key, value) {
	        if (this._args.hcDebug) {
	            if (!window['_hotelchamp']) {
	                window['_hotelchamp'] = {};
	            }
	
	            utils.vars.set(window['_hotelchamp'], key, value);
	        }
	    };
	
	    this.log = function () {
	        this._args.verbose && console.log.apply(console, Array.prototype.slice.call(arguments));
	    };
	
	    this.info = function () {
	        this._args.verbose && console.info.apply(console, Array.prototype.slice.call(arguments));
	    };
	
	    this.clear = function () {
	        this._widgetManager.clear();
	    };
	
	    this.updateOpts = function () {
	        if (!this._opts) {
	            return;
	        }
	
	        if (this._opts) {
	            this._opts.href = document.location.href;
	            this.initWidgets();
	        }
	    };
	
	    this.resolveClientCountry = function () {
	        if (!this._isClientCountryResolved) {
	            content.stores.ActionDispatcher.get().dispatch('LOAD_HC_SPEC_CLIENT_GEO_LOCATION');
	            this._isClientCountryResolved = true;
	        }
	    };
	
	    this.onDOMContentLoaded = function onDOMContentLoaded() {
	        if (this._domContentLoaded) {
	            return;
	        }
	
	        var r = document.readyState;
	        if ((r === 'complete') || (r === 'interactive')) {
	            this._domContentLoaded = true;
	
	            this.initTitan();
	
	            new HcFingerprint2().get(bind(this, function (fingerprint, fingerprintComponents) {
	                if (this._args.finger) {
	                    this.log('Setting fingerprint:', this._args.finger);
	                    fingerprint = this._args.finger;
	                }
	
	                this._fingerprint = fingerprint;
	                this._args._reload && this.log('Reloaded:', this._opts.api);
	
	                this.getTitan().setDefaultEventMetaData({'fp':this._fingerprint}, true);
	
	                var opts = this._opts,
	                    onStorageDone = bind(this, function () {
	                        if (this._args.clearStorage || this.getDemo()) {
	                            this._storage.cc();
	                            this._storage.clear();
	                            ('console' in window) && console.log('Storage cleared (param hcClearStorage is set)');
	                        }
	
	                        this.initDevice();
	                        this.initWidgetManager();
	                        if (this._demo) {
	                            this.initAnalytics(function () {
	                            });
	                            this.initAfterLoad(opts);
	                        } else {
	                            this.initAnalytics(bind(this, function () {
	                                // Register special pages as soon as the fingerprint is ready...
	                                this._analytics.updateSpecialPagesRemote(fingerprint);
	                                this.initAfterLoad(opts);
	                            }));
	                        }
	                        this._ready = true;
	                        this.emit('Ready');
	                    });
	
	                this._storage = new content.storage.Storage({
	                    engine: this,
	                    loadedCallback: onStorageDone,
	                    relayServer: this._relayServer,
	                    websiteHash: this._forced_storage_hash !== null ? this._forced_storage_hash : this.getApi()
	                });
	            }));
	        } else {
	            setTimeout(bind(this, this.onDOMContentLoaded), 1);
	        }
	    };
	
	    /**
	     * Function that is used to check if the user has selected an other window of tab.
	     */
	    this.onBlur = function () {
	        if (this._exitTriggerMouseMode !== 'ignore_onblur' && this._exitTriggerMouseMode !== 'ignore_onblur_and_top_right_area') {
	            //this.log("Exit because: Window is blurred");
	            this.onExitPage();
	        }
	    }
	
	
	    /**
	     * Function that is used to check if the user is about to leave the page, if so call's onExitPage()
	     * @param  {event} event - triggered event on mouse move
	     */
	    this.onMouseMove = function onMouseMove(event) {
	        switch (this._exitTriggerMouseMode) {
	            case  'ignore_top_right_area' :
	                var isInIgnoreArea = (event.clientX > (utils.dom.viewPortWidth() * 0.75) && event.clientY < (utils.dom.viewPortHeight() * 0.25));
	                //this.log('Exit was triggered because: ', this._exitTriggerMouseMode);
	                break;
	            case 'ignore_onblur_and_top_right_area':
	                var isInIgnoreArea = (event.clientX > (utils.dom.viewPortWidth() * 0.75) && event.clientY < (utils.dom.viewPortHeight() * 0.25));
	                //this.log('Exit was triggered because: ', this._exitTriggerMouseMode);
	                break;
	            default:
	                var isInIgnorArea = false;
	                //this.log('Exit was triggered because: ', this._exitTriggerMouseMode);
	                break;
	        }
	
	        if (!isInIgnoreArea) {
	            this._leaveTimer && clearTimeout(this._leaveTimer);
	        }
	
	        if (event.clientY < 20 && !isInIgnoreArea) {
	            //this.log("Exit because: Mouse outside viewport");
	            this.onExitPage();
	        }
	    };
	
	    /**
	     * Emit's signal 'ExitPage'
	     */
	    this.onExitPage = function onExitPage() {
	        this.emit('ExitPage');
	    };
	
	    /**
	     * Overwrite for original emit from the Emitter, add's a hasTriggered to the emit signal(making it possible
	     * to check if an event has already been triggered)
	     * @param  {signal}
	     */
	    this.emit = function emit(signal) {
	        var hasTriggered = this._hasTriggered;
	        (!hasTriggered[signal]) && (hasTriggered[signal] = 1);
	        supr(this, this.emit, arguments);
	    };
	
	    /**
	     * Function that will return true/false on whether the given signal has been triggered already or not.
	     *
	     * @param  {string} signal - signal to check if it has been triggered/emitted already.
	     * @return {bool} True or false depending if the given signal has already been triggered.
	     */
	    this.getHasTriggered = function (signal) {
	        var hasTriggered = this._hasTriggered;
	        return (hasTriggered[signal]) ? true : false;
	    };
	
	    /**
	     * @return {bool} return's true when hcEnabled
	     */
	    this.getEnabled = function () {
	        return this._enabled;
	    };
	
	    /**
	     * @return {bool} return's true when hcExit
	     */
	    this.getShortExit = function () {
	        return this._args.shortExit;
	    };
	
	    /**
	     * @return {bool} True if engine is in demo mode. false if not
	     */
	    this.getDemo = function () {
	        return this._demo;
	    };
	
	    /**
	     * getRelayServer
	     * @return  {string}    The relay server url
	     */
	    this.getRelayServer = function () {
	        return this._relayServer;
	    };
	
	    /**
	     * getReviewServer
	     * @return {string} The review server url
	     */
	    this.getReviewServer = function () {
	        return this._reviewServer;
	    }
	
	    /**
	     * Gets the promocode server.
	     */
	    this.getPromocodeServer = function () {
	        return this._promocodeServer;
	    };
	
	    /**
	     * isPreviewWidget
	     * Helper method to determine whether current page
	     * is the Widget preview page
	     * @return    {bool}    True if is widget preview page (or frame), false if not
	     * @todo Check if deprecated(demo/preview is the same.)
	     */
	    this.isPreviewWidget = function () {
	        return this._isPreviewWidget == 1;
	    };
	
	    /**
	     * @return {content.analytics.Titan} object
	     */
	    this.getTitan = function () {
	        return this._titan;
	    };
	
	    /**
	     * @return {content.analytics.Analytics} analytics object
	     */
	    this.getAnalytics = function () {
	        return this._analytics;
	    };
	
	    /**
	     * @return {string} return's current lang in country-code.
	     */
	    this.getActiveLang = function () {
	        return this._activeLang;
	    };
	
	    /**
	     * @return {Element} return's Element with booking-engine url's.
	     */
	    this.getBookElement = function () {
	        return this._bookingEngine.getBookElement();
	    };
	
	    this.setOpts = function (opts) {
	        this._opts = opts;
	    };
	
	    this.getOpts = function () {
	        return this._opts;
	    };
	
	    /**
	     * @return {content.storage.Storage} return's Storage object.
	     */
	    this.getStorage = function () {
	        return this._storage;
	    };
	
	    /**
	     * @return {string} return's active domain(where widget is build on)
	     */
	    this.getActiveDomain = function () {
	        return this._opts.activeDomain;
	    };
	
	    this.apiUrl = function (url) {
	        return 'https://' + this.getActiveDomain() + '/api/' + url;
	    }
	
	    this.getApi = function () {
	        return this._api;
	    };
	
	    this.getWidgetManager = function () {
	        return this._widgetManager;
	    };
	
	    this.getDevice = function () {
	        return this._device;
	    };
	
	    this.setDevice = function (name) {
	        var devices = this._devices;
	        if (name in devices) {
	            this._device = devices[name];
	            this.emit('ChangeDevice', this._device);
	        }
	    };
	
	    this.getDevices = function () {
	        return this._devices;
	    };
	
	    this.getReady = function () {
	        return this._ready;
	    };
	
	    this.getDictionaryName = function (name) {
	        var dictionary = this._dictionary;
	        return (name in dictionary) ? dictionary[name] : name;
	    };
	
	    this.getTestEnv = function () {
	        return this._testEnv;
	    };
	
	    this.getBookingEngine = function () {
	        return this._bookingEngine;
	    };
	
	    this.getDocumentConnector = function () {
	        return this._documentConnector;
	    };
	
	    this.registerPlugin = function (name, plugin) {
	        this._plugins[name] = plugin;
	    };
	
	    this.getPlugin = function (name) {
	        return this._plugins[name] || false;
	    };
	
	    this.getSettings = function () {
	        return this._settings;
	    };
	
	    this.getPluginSettings = function (scope) {
	        var scope = scope || null;
	
	        if (scope) {
	            return this._pluginSettings[scope] ? this._pluginSettings[scope] : null;
	        } else {
	            return this._pluginSettings;
	        }
	    };
	
	    this.setMargin = function (marginTop, marginBottom) {
	        var settings = this._settings;
	        settings.marginTop = marginTop;
	        settings.marginBottom = marginBottom;
	
	        this._widgetManager.update();
	    };
	
	    this.getArgs = function () {
	        return this._args;
	    };
	
	    /**
	     * @return {timestamp} return's unix timestamp when engine was loaded.
	     */
	    this.getStartTime = function () {
	        return this._startTime;
	    };
	
	    this.getFingerprint = function () {
	        return this._fingerprint;
	    };
	
	    this.getPriceComparisonServer = function () {
	        return this._opts.pcserver;
	    };
	
	    /**
	     * getParamFromWindowHcScope
	     * Helper method to extract to value for the given param name from
	     * a special hc data object in the window scope.
	     * @param   {string}    the name of the param to obtain the value for
	     * @param   {mixed}     the default value to return or null (optional)
	     * @return  {mixed}     result value
	     */
	    this.getParamFromWindowHcScope = function (name, defaultValue) {
	        defaultValue = (defaultValue !== undefined) ? defaultValue : null;
	        var result = defaultValue;
	
	        if (name in window['_hc_scope']) {
	            result = window['_hc_scope'][name];
	        }
	
	        return result;
	    };
	
	    this.getStore = function (store) {
	        return this._dataStores[store] ? this._dataStores[store] : null;
	    };
	
	    /**
	     * getInternalWebsiteCode
	     */
	    this.getInternalWebsiteCode = function () {
	        var isMhr = window.location.href.indexOf('millenniumhotels.com') !== -1;
	        return isMhr ? 'mhr' : 'generic';
	    }
	
	    this.getBuildId = function () {
	
	        return (this._opts.buildId) ? this._opts.buildId : this._opts.timeStamp;
	    }
	
	    this.getDashboardVersion = function () {
	        return this._opts.dashboardVersion;
	    }
	});
	
	var EnginePlugin = Class(Queue, function(supr) {
			this.init = function init(opts) {
				supr(this, this.init, arguments);
				this._name 		= opts.name;
				this._engine 	= opts.engine;
	
				var engine 		= this._engine,
					enabled 	= false,
					ready 		= false,
					settings 	= this.getSettings();
	
				if (settings !== undefined && ('a' in settings) && settings.a === 1) {
					// This plugin is only visible for the A version of A/B tests...
					var readyAndAnalyticsEnabled = bind(this, function() {
							readyListener();				// Remove listener!
							analyticsEnabledListener(); 	// Remove listener!
	
							this.onEngineReady();
							// engine.emit('AnalyticsEnabled');
						}),
						// Wait for the engine to be ready...
						readyListener = engine.on(
							'Ready',
							function() {
								ready = true;
								enabled && readyAndAnalyticsEnabled();
							}
						),
						// Wait for analytics to be ready...
						analyticsEnabledListener = engine.on(
							'AnalyticsEnabled',
							function() {
								enabled = true;
								ready && readyAndAnalyticsEnabled();
							}
						);
				} else {
					engine.registerPlugin(this._name, this);
					engine.on('Ready', this, this.onEngineReady);
				}
			};
	
			this.onEngineReady = function onEngineReady() {
				this.onInit();
				this.clear();
			};
	
			this.onInit = function onInit() {
			};
	
			this.getSettings = function() {
				return {};
			};
		});
	// ui namespace....
	content.ui = {};
	// Namespace...
	content.ui.device = {};
	content.ui.device.MobileDevice = Class(function() {
		this.init = function init() {
			this.name 		= 'Mobile';
			this.isMobile 	= true;
			this.iconClose 	= 'mdi-arrow-down';
			this.iconOpen 	= 'mdi-arrow-up';
	
	        this._preEnableBodyScrollStyles = null;
		};
	
		this.update = function(view) {
	
			var style = view.getElement().node.style;
			style.padding = 0;
			// style.left 		= 'auto';
			// style.top 		= 'auto';
			// style.right 	= 'auto';
			// style.bottom 	= 'auto';
			// style.width 	= window.innerWidth + 'px';
	
		};
	
	    this.getName = function() {
	        return this.name;
	    };
	
		this.visiblePosition = function(view) {
			var node = view.getElement().node,
				style = node.style,
				widgetHeight = view.getHeight(),
	            alignment = view.getAlignment();
	
			style.position 		= 'fixed';
			style.visibility 	= 'visible';
			style.left 			= 0;
			style.right 		= 0;
			style.bottom 		= 0;
			style.top 			= 'auto';
	
			if (!view.getData().isDockWidget) {
	
	            this.updateVerticalTransform(node, 'auto', 0, 0);
	
				if (view.getViewName() !== 'labelView') {
					var widget = view.getElement().node.childNodes[0].querySelector("div[class*=Widget]");
	
					style.height 		= '100%'; // Make scrolling possible..
					style.webkitOverflowScrolling = 'touch'; // Lazy scrolling iOs, android should have it by default according to the webs
	
	                if (view.getViewName() !== 'smartNotificationView') {
	                    style.overflowY 	= 'scroll';
	                    style.paddingBottom = '50px'; // Make sure there is some padding on the bottom..
	    				widget.style.height = widgetHeight + 'px'; // Widget height..
	                    // Block body scrolling, looks better
	    				this.disableBodyScroll();
	                }
				} else {
					var widgetHeight = view.getTitleHeight();
					style.height = widgetHeight + 'px';
				}
			} else {
				var dockHeight = view.getDockHeight();
				style.height = dockHeight + 'px';
				this.updateVerticalTransform(node, 'auto', 0, 0);
			}
		};
	
		this.hiddenPosition = this.minimizedPosition = function(view) {
			var node 	= view.getElement().node,
				style 	= node.style,
				screenHeight = window.screen.availHeight,
				widget;
	
			if(node.childNodes.length) {
				widget  = node.childNodes[0].querySelector("div[class*=Widget]");
			}
	
			style.position 		= 'fixed';
			style.visibility 	= 'visible';
			style.left 			= 0;
			style.right 		= 0;
			style.bottom 		= 0;
			style.top 			= 'auto';
	
			style.margin 		= 0;
	
			if (!view.getData().isDockWidget) {
				if (view.getViewName() !== 'labelView') {
					style.height 		= '100%';
					this.updateVerticalTransform(node, 'auto', 0, Math.max(screenHeight));
				} else {
					var	minimizable = view.getData().mobileMinimizable,
						widgetHeight = view.getTitleHeight();
	
					style.height = widgetHeight + 'px';
					if (minimizable) {
						this.updateVerticalTransform(node, 'auto', 0, Math.max(widgetHeight));
					} else {
						this.updateVerticalTransform(node, 'auto', 0, Math.max(screenHeight));
					}
	
				}
			} else {
				var widgetHeight = view.getDockHeight();
	
				style.height = widgetHeight + 'px';
				this.updateVerticalTransform(node, 'auto', 0, Math.max(widgetHeight));
			}
	
			// Ensure body is able to scroll again
			this.enableBodyScroll();
		};
	
		this.transitionForPosition = function(view) {
			utils.dom.addTransition(
				view.getElement().node,
				[
					'height .7s ease-in-out',
					'-webkit-transform .7s ease-in-out',
					'transform .7s ease-in-out'
				]
			);
		};
	
		this.updateVerticalTransform = function(node, top, bottom, y) {
			utils.dom.addTransform(node, 'translateY(' + y + 'px)');
	
			node.style.top 		= top;
			node.style.bottom 	= bottom;
		};
	
		this.resetPreEnabledScrollStyles = function() {
			var	body = document.body;
	
			this._preEnableBodyScrollStyles = {
				height: body.style.height,
				width: body.style.width,
				overflow: body.style.overflow,
				positon: body.style.position
			};
		};
	
		this.disableBodyScroll = function() {
			var	body = document.body;
	
			if (!this._preEnableBodyScrollStyles) {
				this.resetPreEnabledScrollStyles();
			}
	
			body.style.overflow = 'hidden';
			body.style.position = 'fixed';
	
			body.style.height = '100%';
			body.style.width = '100%';
	
		};
	
		this.enableBodyScroll = function() {
			var	body = document.body;
	
			if (!this._preEnableBodyScrollStyles) {
				this.resetPreEnabledScrollStyles();
			}
	
			body.style.overflow = this._preEnableBodyScrollStyles.overflow || 'initial';
	        body.style.position = this._preEnableBodyScrollStyles.position || 'initial';
	        body.style.height = this._preEnableBodyScrollStyles.height || 'initial';
	        body.style.width = this._preEnableBodyScrollStyles.width || 'initial';
	
	        this._preEnableBodyScrollStyles = null;
		};
	});
	
	content.ui.device.DesktopDevice = Class(function() {
		this.init = function init(opts) {
			this.name 					= 'Desktop';
			// this._view		 			= null;
			this._engine 				= opts.engine;
			this._heightTimeout 		= null;
			this._resizeTimeout 		= null;
			this._positioners 			= {};
	
			this.iconClose 	= 'd';
			this.iconOpen 	= 'b';
		};
	
	    this.getName = function() {
	        return this.name;
	    };
	
		this.update = function(view) {
			var node 		= view.getElement().node,
				widgetNode 	= node.childNodes[0],
				style 		= node.style,
				alignment 	= view.getAlignment();
	
			style.width = utils.dom.getPositionValue(view.getWidth());
			if (!alignment.isCompletelyCentered()) {
				if (!alignment.isTopOrBottom()) {
					style.top 			= '50%';
					style.marginTop 	= 0;
					style.marginBottom 	= 'auto';
				} else {
					style.marginTop 	= 0;
				}
			}
		};
	
		this.updateVertical = function(view, style, widgetNode) {
			var viewName = view.getViewName();
	
			if (viewName === 'dialogView' || viewName === 'dockLayoutTilesCaptionView') {
				this.getPositioner('DialogPositioner').updateVertical(view, style, widgetNode);
			}
		};
	
		this.visiblePosition = function(view) {
			var viewName = view.getViewName();
	
			if (viewName === 'dialogView' || viewName === 'smartNotificationView' || viewName === 'dockLayoutTilesCaptionView') {
				var alignVertical = view.getData().alignVertical,
					alignment = view.getAlignment();
	
				if (alignment.isCompletelyCentered()) {
					this.getPositioner('CenteredPositioner').visiblePosition(view);
				} else {
					if (alignVertical) {
						this.getPositioner('StickyDialogPositioner').visiblePosition(view);
					} else {
						this.getPositioner('DialogPositioner').visiblePosition(view);
					}
				}
			} else if (viewName === 'alertView') {
				this.getPositioner('CenteredPositioner').visiblePosition(view);
			} else if (viewName === 'labelView') {
				this.getPositioner('LabelPositioner').visiblePosition(view);
			} else if (viewName === 'barView') {
				this.getPositioner('BarPositioner').visiblePosition(view);
			}
		};
	
		/**
		 * minimizedPosition
		 * Change display mode of the given view to minimized (Show label only).
		 * @param	object	View instance
		 * @return 	void
		 */
		this.minimizedPosition = function(view) {
			var viewName = view.getViewName();
	
			if (viewName === 'dialogView' || viewName === 'dockLayoutTilesCaptionView') {
				var alignVertical = view.getData().alignVertical,
					alignment = view.getAlignment();
	
				if (alignment.isCompletelyCentered()) {
					this.getPositioner('CenteredPositioner').minimizedPosition(view);
				} else {
					if (alignVertical) {
						this.getPositioner('StickyDialogPositioner').minimizedPosition(view);
					} else {
						this.getPositioner('DialogPositioner').minimizedPosition(view);
					}
				}
			} else if (viewName === 'alertView') {
				this.getPositioner('CenteredPositioner').minimizedPosition(view);
			} else if (viewName === 'labelView') {
				this.getPositioner('LabelPositioner').minimizedPosition(view);
			} else if (viewName === 'barView') {
				this.getPositioner('BarPositioner').minimizedPosition(view);
			}
		};
	
		this.hiddenPosition = function(view) {
			var viewName = view.getViewName();
	
			if (viewName === 'dialogView' || viewName === 'dockLayoutTilesCaptionView') {
				var alignVertical = view.getData().alignVertical,
					alignment = view.getAlignment();
	
				if (alignment.isCompletelyCentered()) {
					this.getPositioner('CenteredPositioner').hiddenPosition(view);
				} else {
					if (alignVertical) {
						this.getPositioner('StickyDialogPositioner').hiddenPosition(view);
					} else {
						this.getPositioner('DialogPositioner').hiddenPosition(view);
					}
				}
			} else if (viewName === 'alertView') {
				this.getPositioner('CenteredPositioner').hiddenPosition(view);
			} else if (viewName === 'labelView') {
				this.getPositioner('LabelPositioner').hiddenPosition(view);
			} else if (viewName === 'barView') {
				this.getPositioner('BarPositioner').hiddenPosition(view);
			}
		};
	
		this.transitionForPosition = function(view) {
			var node 		= view.getElement().node,
				alignment 	= view.getAlignment();
	
			if (alignment.isCompletelyCentered()) {
				utils.dom.addTransition(node, ['opacity 0.4s']);
			} else if (alignment.isLeftOrRight() || alignment.isMidBottom() || alignment.isMidTop()) {
				utils.dom.addTransition(
					node,
					[
						'-webkit-transform 0.4s ease-in-out',
						'transform 0.4s ease-in-out'
					]
				);
			}
		};
	
		this.getPositioner = function getPositioner(name) {
			var opts = {
				engine : this._engine
			}
	
			var positioner =  this._positioners[name] || (this._positioners[name] = new content.ui.device.positioner.desktop[name](opts));
			return positioner;
		}
	});
	
	content.ui.device.IpadDevice = Class(content.ui.device.DesktopDevice, function(supr) {
		this.init = function init(opts) {
			supr(this, this.init, arguments);
		};
	
		this.setTransformTransition = function(style, value) {
			style.webkitTransform = value;
		};
	});
	// Create namespace...
	content.ui.widget = {};
	content.ui.widget.manager = {};
	
	content.ui.widget.manager.WidgetManager = Class(Emitter, function(supr) {
	
	    /**
	     * Make sure that widgets which have the same alignment don't overlap...
	     *  ___________
	     * | 0 | 1 | 2 |
	     * |___|___|___|
	     * | 3 | 4 | 5 |
	     * |___|___|___|
	     * | 6 | 7 | 8 |
	     * |___|___|___|
	     **/
	    var AlignmentSlots = Class(function() {
	        this.init = function init(opts) {
	            this._slots = [];
	            for (var i = 0; i < 9; i++) {
	                this._slots[i] = [];
	            }
	        };
	
	        this.addAlignment = function(hash, alignment, data, opts) {
	            var slots       = this._slots,
	                result      = slots[alignment],
	                priority    = data.priority || 0;
	
	            if (false && data.isDockWidget) {
	                data.labelIndex = 0;
	            } else {
	                slots[alignment].push({
	                    hash:       hash,
	                    opts:       opts,
	                    data:       data,
	                    toString:   function() { return ('0000000000' + priority).substr(-10); }
	                });
	            }
	        };
	
	        this.validateAlignment = function(hash, alignment, index) {
	            var slot = this._slots[alignment] || [];
	            while (index < slot.length) {
	                if (slot[index].hash === hash) {
	                    break;
	                }
	                index++;
	            }
	            return index;
	        };
	
	        this.getSlotIndexByHashAndAlignment = function(hash, alignment) {
	            var i;
	
	            for (i in this._slots[alignment]) {
	                if (this._slots[alignment][i].hash == hash) {
	                    return parseInt(i);
	                }
	            }
	
	            return null;
	        };
	
	        this.isFirstInSlot = function(hash, alignment) {
	            var slotIndex = this.getSlotIndexByHashAndAlignment(hash, alignment);
	            return (slotIndex == 0);
	        };
	
	        this.isLastInSlot = function(hash, alignment) {
	            var slotIndex = this.getSlotIndexByHashAndAlignment(hash, alignment);
	            return (slotIndex != null && slotIndex == this._slots[alignment].length - 1);
	        };
	
	        this.sort = function() {
	            var slots = this._slots;
	            for (var i = 0; i < 9; i++) {
	                var slot = slots[i];
	                slot.sort();
	                for (var j = 0; j < slot.length; j++) {
	                    slot[j].data.labelIndex = j;
	                }
	            }
	        };
	
	        this.getSlot = function(alignment) {
	            return this._slots[alignment] || [];
	        };
	    });
	
	    this.init = function init(opts) {
	        supr(this, this.init, arguments);
	
	        this._engine            = opts.engine;
	        this._widgets           = [];
	        this._widgetQueue       = [];
	        this._alignmentSlots    = new AlignmentSlots({});
	        this._showTimeout       = null;
	        this._dockWidgetIds     = [];
	        this._viewPortElement   = null;
	        this._triggerPolicyTestIntervalProcessId = null;
	        this._exitTriggerDelayTime = 500;
	    };
	
	    this.initViewPort = function() {
	        this._viewPortElement = document.createElement('div');
	        this._viewPortElement.className = utils.dom.prefixed('Viewport');
	        document.body.appendChild(this._viewPortElement);
	
	        this.updateViewPortForDevice(this._engine.getDevice());
	
	        this._engine.on('ChangeDevice', bind(this, this.onChangeDevice));
	    };
	
	    /**
	     * Implement this function and refactor Config and Factory to dashboard one...
	     */
	    this.initWidgetTriggerPolicy = function(policyConfig) {
	        var result = null;
	
	        policyConfig = (typeof policyConfig == 'string' && policyConfig !== '') ? JSON.parse(policyConfig) : policyConfig;
	
	        if (policyConfig) {
	            result = specs.PolicyFactory.createByConfig(policyConfig);
	        }
	
	        return result;
	    };
	
	    this.initWidgetCustomTargetPolicy = function(customTargets) {
	        var segments,
	            hasValidSpecs = false,
	            specsConfig = [],
	            result = null;
	
	        // @TODO: move to trigger rules
	        if (customTargets) {
	            utils.vars.each(customTargets, function(customTarget) {
	                segments = customTarget.split('/');
	
	                if (segments[0] === 'BookingsEngine') {
	                    specsConfig.push({
	                        'operator': 'AND',
	                        'specs': [
	                            {
	                                'property': 'documentConnector.connectorId',
	                                'className': 'Equals',
	                                'equals': Number(segments[1] || -1)
	                            },
	                            {
	                                'property': 'documentConnector.activeStepIndex',
	                                'className': 'Equals',
	                                'equals': Number(segments[3] || -1)
	                            }
	                        ]
	                    });
	                }
	            });
	
	            hasValidSpecs = (specsConfig.length > 0);
	
	            if (hasValidSpecs) {
	                result = specs.PolicyFactory.createByConfig({ 'operator': 'OR', 'specs': specsConfig });
	            }
	        }
	
	        return result;
	    };
	
	    this.getDataFromVersion = function(opts) {
	        return opts.versions[opts.versions.activeVersion].data;
	    };
	
	    this.addWidget = function(widgetConstructor, opts, doForceWidget) {
	        var engine = this._engine,
	            doForceWidget = (doForceWidget === true);
	
	        if (this.getVisibleForDevice(opts) || doForceWidget) {
	            var data        = this.getDataFromVersion(opts),
	                alignment   = data.label ? data.labelAlignment : data.alignment;
	
	            if (doForceWidget) {
	                this._engine.log('Widget with id: ', opts.id, ' is forced to be triggered');
	            }
	
	            this._alignmentSlots.addAlignment(opts.hash, alignment, data, opts);
	            this._widgetQueue.push({widgetConstructor: widgetConstructor, opts: opts, 'doForceWidget': doForceWidget});
	        }
	    };
	
	    /**
	     * This function is called when all widgets are pushed to the queue...
	     **/
	    this.pageReady = function() {
	        documentConnector = this._engine.getDocumentConnector();
	        this._alignmentSlots.sort();
	        this._constructedWidgetsMapping = {};
	        this._widgetConstructorTasks = {};
	        this._widgetOpts = {};
	        this._widgetPolicies = {};
	
	        this.initViewPort();
	
	        var widgetQueue = this._widgetQueue, // @todo check dependencies and/or logic
	            i,
	            hash,
	            alignment,
	            widgetOpts,
	            customTargets,
	            constructor,
	            triggerPolicy,
	            triggerPolicyConfig,
	            customTargetPolicy,
	            rootPolicy,
	            policies,
	            willPolicyBeApplied;
	
	        for (i = 0; i < this._widgetQueue.length; i++) {
	            widgetOpts = this._widgetQueue[i].opts;
	            doForceWidget = (this._widgetQueue[i].doForceWidget === true);
	            alignment = widgetOpts.data.data.alignment;
	            hash = this._widgetQueue[i].opts.hash;
	            customTargets = widgetOpts.customTargets;
	            constructor = this._widgetQueue[i].widgetConstructor;
	            triggerPolicyConfig = widgetOpts.data.data.triggerPolicies || null;
	            triggerPolicy = this.initWidgetTriggerPolicy(triggerPolicyConfig);
	            customTargetPolicy = this.initWidgetCustomTargetPolicy(customTargets);
	            policies = [],
	                rootPolicy = null;
	
	            this._constructedWidgetsMapping[widgetOpts.id] = false;
	            this._widgetPolicies[widgetOpts.id] = null;
	            this._widgetOpts[widgetOpts.id] = widgetOpts;
	
	            if (triggerPolicy) {
	                policies.push(triggerPolicy);
	            }
	
	            if (customTargetPolicy) {
	                policies.push(customTargetPolicy);
	            }
	
	            willPolicyBeApplied = (policies.length > 0);
	
	            // @note: when policies are used and the system is in demo (preview) mode,
	            // or the current widget is forced to trigger, by url param,
	            // replace all policies with a policy that always is satisfied...
	            if (willPolicyBeApplied && (this._engine.getDemo() || doForceWidget)) {
	                policies = this.initWidgetTriggerPolicy([{
	                    'operator': 'AND',
	                    'specs': [
	                        {
	                            'property': null,
	                            'className': 'True'
	                        }
	                    ]
	                }]);
	            }
	
	            // this task instantiates the widget and can be invoked directly or later
	            widgetConstructorTask = this._widgetConstructorTasks[widgetOpts.id] = bind(this, function(constructor, widgetOpts, isPolicyApplied) {
	                widget = new constructor(widgetOpts);
	                this._widgets.push(widget);
	                this._constructedWidgetsMapping[widgetOpts.id] = true;
	
	                var widgetTriggeredCountKey = 'widget.' + widget.getHash() + '.triggeredCount',
	                    widgetTypeTriggeredCountKey = 'widget.' + widget.getWidgetType() + '.triggeredCount',
	                    storage = this._engine.getStorage();
	
	                // track how many times the widget has been triggered for the current user (overal)
	                storage.setInStorage(widgetTriggeredCountKey, storage.getFromStorage(widgetTriggeredCountKey, 0) + 1);
	
	                // track how many times the widget has been triggered for the current session
	                storage.setInSession(widgetTriggeredCountKey, storage.getFromSession(widgetTriggeredCountKey, 0) + 1);
	
	                // track how many times this widget type has been triggered for the current user (overal)
	                storage.setInStorage(widgetTypeTriggeredCountKey, storage.getFromStorage(widgetTypeTriggeredCountKey, 0) + 1);
	
	                // track how many times this widget type has been triggered for the current session
	                storage.setInSession(widgetTypeTriggeredCountKey, storage.getFromSession(widgetTypeTriggeredCountKey, 0) + 1);
	
	                // when a policy is not applied, the old trigger system should, and will, be used.
	                // The old triggers will show the widget from Widget.js::_initTriggers.
	                // When the new system is used, the widget should be shows at this point.
	                if (isPolicyApplied) {
	                    this.showWidget(widget);
	                    this._engine.log('Constructing and showing widget ' + widgetOpts.id + ' by new widget trigger rule system');
	                } else {
	                    this._engine.log('Constructing widget ' + widgetOpts.id + ' by old trigger system. Showing will be handled by Widget::_initTriggers');
	                }
	
	                this.emit('WidgetCreated', widget);
	            }, constructor, widgetOpts, willPolicyBeApplied);
	
	            if (willPolicyBeApplied) {
	                rootPolicy = new specs['AndSpecification'](policies);
	                this._widgetPolicies[widgetOpts.id] = rootPolicy;
	
	                this._engine.setGlobalDebug('widgetTriggerPolicies.' + widgetOpts.id, rootPolicy);
	                this._engine.setGlobalDebug('widgetManager', this);
	
	                this.testUntriggeredWidget(widgetOpts.id);
	            } else {
	                widgetConstructorTask();
	            }
	        }
	
	        // listen to store changes
	        content.stores.hcSpecificationsDataStore.on('datachange', bind(this, utils.debounce(this.testUntriggeredWidgets, 600)));
	
	        // listen to exit trigger
	        this._engine.on('ExitPage', bind(this, utils.debounce(this.testUntriggeredWidgets, 600), { 'page.onExit': true }));
	
	        // test every X seconds
	        this._triggerPolicyTestIntervalProcessId = setInterval(bind(this, this._onTriggerPolicyTestInterval), 3000);
	    };
	
	    /**
	     * testUntriggeredWidgets
	     * Helper method to loop through all not constructed widgets with an
	     * specification policy applied. Test if policy is satisfied or not, and construct widget.
	     */
	    this.testUntriggeredWidgets = function(additionalData) {
	        var widgetId;
	
	        for (widgetId in this._widgetConstructorTasks) {
	            this.testUntriggeredWidget(widgetId, additionalData);
	        }
	    };
	
	    /**
	     * testUntriggeredWidget
	     * Method to test widget policy and try to construct widget if not constructed.
	     * @param   {string}    widgetId
	     */
	    this.testUntriggeredWidget = function(widgetId, additionalData) {
	        var data,
	            additionalData = (additionalData && typeof additionalData == 'object') ? additionalData : {},
	            policy = this._widgetPolicies[widgetId],
	            constructorTask = this._widgetConstructorTasks[widgetId],
	            widgetDoneSessionKey = 'done_' + this._engine.getActiveLang() + '_' + widgetId;
	
	        if (this._constructedWidgetsMapping[widgetId] === false && policy !== null) {
	            // widget is not constructed and does have a policy.
	            // Recheck if policy is satisfied. If so, run widget constructor task
	
	            data = this.collectWidgetTriggerPolicyData(widgetId, additionalData);
	            this._engine.log('Testing widget trigger for widget: ', widgetId, ' | with data: ', data);
	            var isSatisfied = policy.isSatisfiedBy(data);
	
	            if (isSatisfied) {
	                if('page.onExit' in additionalData && additionalData['page.onExit'] === true) {
	                    setTimeout(bind(this, function() {
	                        constructorTask();
	                    }), this._exitTriggerDelayTime);
	                } else {
	                    constructorTask();
	                }
	            } else {
	                this._engine.log('Widget trigger failed log for widget: ', widgetId, ' | Log: ', policy.getLastFailedLog());
	            }
	        }
	    };
	
	    /**
	     * collectWidgetTriggerPolicyData
	     * Helper method to collect the required data for the widget trigger policy check.
	     * @param   {string}    widgetId
	     * @return  {object}    data object
	     */
	    this.collectWidgetTriggerPolicyData = function(widgetId, additionalData) {
	        var data = Object.assign({}, content.stores.hcSpecificationsDataStore.getData() || {}),
	            widgetOpts = this._widgetOpts[widgetId];
	
	        // add widget trigger count for session (per widget and per widget type)
	        // increase current value with 1 => we want to know if the widget can be shown the next time
	        data['session.widgetTriggeredCount'] = (this._engine.getStorage().getFromSession('widget.' + widgetOpts.hash + '.triggeredCount') || 0) + 1;
	        data['session.widgetTypeTriggeredCount'] = (this._engine.getStorage().getFromSession('widget.' + widgetOpts.type + '.triggeredCount') || 0) + 1;
	
	        // add widget trigger count for user (per widget and per widget type)
	        // increase current value with 1 => we want to know if the widget can be shown the next time
	        data['user.widgetTriggeredCount'] = (this._engine.getStorage().getFromStorage('widget.' + widgetOpts.hash + '.triggeredCount') || 0) + 1;
	        data['user.widgetTypeTriggeredCount'] = (this._engine.getStorage().getFromStorage('widget.' + widgetOpts.type + '.triggeredCount') || 0) + 1;
	
	        data['widget.audiences'] = widgetOpts.data && widgetOpts.data.audiences;
	
	        if (typeof additionalData == 'object') {
	            data = Object.assign(data, additionalData);
	        }
	
	        return data;
	    };
	
	    /**
	     * This function is called when a widget wants to show,
	     * it checks for any other shown widgets and hide's them.
	     **/
	    this.showWidget = function(widget) {
	        var preventDisplayStateManagedByWidgetManager = widget.getData().data.preventDisplayStateManagedByWidgetManager;
	        
	        // Set a timeout to make sure no two widgets are shown at the same time...
	        if (!preventDisplayStateManagedByWidgetManager) {
	
	            this._showTimeout && clearTimeout(this._showTimeout);
	
	
	            this._showTimeout = setTimeout(
	                bind(this, function() {
	
	                    if (!widget._isShowable) {
	                        return;
	                    }
	
	                    var showWidget      = true;
	                    this._showTimeout   = null;
	
	                    for (var i = 0; i < this._widgets.length; i++) {
	                        var w = this._widgets[i];
	                        // If the widget is not the widget to show, and is not a center widget, and can not be minimized then hide it...
	                        if ((w !== widget) && (w.getAlignment() == 4) && (w.getDisplay() == content.ui.view.VISIBLE)) {
	                            showWidget = false;
	                        }  else {
	                            if (!w.getData().data.preventDisplayStateManagedByWidgetManager) {
	                                (w === widget) || w.minimize() || w.hide();
	                            }
	                        }
	                    }
	
	                    if (showWidget) {
	                        widget.show();
	                    }
	                }),
	                20
	            );
	        } else {
	            if (!widget._isShowable) {
	                return;
	            }
	            
	            setTimeout(function() {
	                widget.show();
	                }, 20
	            );
	        }
	    };
	
	    this.hideWidgets = function(notWidget) {
	        // Set a timeout to make sure no two widgets are shown at the same time...
	        for (var i = 0; i < this._widgets.length; i++) {
	            var w = this._widgets[i];
	            if (w !== notWidget) {
	                // If the widget is not a center widget, and can not be minimized then hide it...
	                if ((w.getAlignment() == 4) && (w.getDisplay() == content.ui.view.VISIBLE)) {
	                    // Don't hide...
	                } else {
	                    w.minimize() || w.hide();
	                }
	            }
	        }
	    };
	
	    this.hasWidgetType = function(widgetType) {
	        widgetType = widgetType.toLowerCase();
	        var widgets = this._widgets,
	            i       = widgets.length;
	        while (i) {
	            if (widgets[--i].getWidgetType().toLowerCase() === widgetType) {
	                return true;
	            }
	        }
	        return false;
	    };
	
	    this.validateAlignment = function(hash, alignment, index) {
	        return this._alignmentSlots.validateAlignment(hash, alignment, index);
	    };
	
	    this.clear = function() {
	        var widgets = this._widgets;
	        while (widgets.length) {
	            widgets.pop().remove();
	        }
	        this._widgets = [];
	    };
	
	    this.update = function() {
	        var widgets = this._widgets;
	        for (var i = 0; i < widgets.length; i++) {
	            widgets[i] && widgets[i].update();
	        }
	    };
	
	    this.getWidget = function(index) {
	        return this._widgets[index];
	    };
	
	    this.getWidgets = function() {
	        return this._widgets;
	    };
	
	    this.getSlotCountForAlignment = function(alignment) {
	        return this._alignmentSlots.getSlot(alignment).length;
	    };
	
	    this.getAlignmentSlotIndexByWidget = function(widget) {
	        return this._alignmentSlots.getSlotIndexByHashAndAlignment(widget.getHash(), widget.getAlignment());
	    };
	
	    /**
	     * isFirstWidgetInAlignmentSlot
	     * @param   object      Widget instance
	     * @param   boolean     Ignore dock widget in slot
	     */
	    this.isFirstWidgetInAlignmentSlot = function(widget, ignoreDockWidget) {
	        var isDockWidget = widget.isDockWidget(),
	            isDockableWidget = widget.isDockableWidget(),
	            dockWidget = isDockableWidget ? widget.getDockWidget() : (widget.isDockWidget() ? widget : null),
	            isDockWidgetTheFirst = !!dockWidget ? this._alignmentSlots.isFirstInSlot(dockWidget.getHash(), dockWidget.getAlignment()) : false,
	            isDockWidgetTheLast = !!dockWidget ? this._alignmentSlots.isLastInSlot(dockWidget.getHash(), dockWidget.getAlignment()) : false,
	            dockWidgetSlotIndex = !!dockWidget ? this._alignmentSlots.getSlotIndexByHashAndAlignment(dockWidget.getHash(), dockWidget.getAlignment()) : null,
	            result = false;
	
	        if (isDockableWidget && isDockWidgetTheFirst && ignoreDockWidget) {
	            result = this._alignmentSlots.getSlotIndexByHashAndAlignment(widget.getHash(), widget.getAlignment()) == 1;
	        } else if(isDockWidget && isDockWidgetTheFirst && ignoreDockWidget) {
	            result = false;
	        } else {
	            result = this._alignmentSlots.isFirstInSlot(widget.getHash(), widget.getAlignment());
	        }
	
	        return result;
	    };
	
	    /**
	     * isLastWidgetInAlignmentSlot
	     * @param   object      Widget instance
	     * @param   boolean     Ignore dock widget in slot
	     */
	    this.isLastWidgetInAlignmentSlot = function(widget, ignoreDockWidget) {
	        var isDockWidget = widget.isDockWidget(),
	            isDockableWidget = widget.isDockableWidget(),
	            dockWidget = isDockableWidget ? widget.getDockWidget() : (widget.isDockWidget() ? widget : null),
	            isDockWidgetTheFirst = !!dockWidget ? this._alignmentSlots.isFirstInSlot(dockWidget.getHash(), dockWidget.getAlignment()) : false,
	            isDockWidgetTheLast = !!dockWidget ? this._alignmentSlots.isLastInSlot(dockWidget.getHash(), dockWidget.getAlignment()) : false,
	            dockWidgetSlotIndex = !!dockWidget ? this._alignmentSlots.getSlotIndexByHashAndAlignment(dockWidget.getHash(), dockWidget.getAlignment()) : null,
	            result = false,
	            totalSlotCountForWidgetAlignment = this.getSlotCountForAlignment(widget.getAlignment());
	
	        if (isDockableWidget && isDockWidgetTheLast && ignoreDockWidget) {
	            result = this._alignmentSlots.getSlotIndexByHashAndAlignment(widget.getHash(), widget.getAlignment()) == totalSlotCountForWidgetAlignment - 2;
	        } else if(isDockWidget && isDockWidgetTheLast && ignoreDockWidget) {
	            result = false;
	        } else {
	            result = this._alignmentSlots.isLastInSlot(widget.getHash(), widget.getAlignment());
	        }
	
	        return result;
	    };
	
	    this.getVisibleForDevice = function(opts) {
	        var engine  = this._engine,
	            data    = this.getDataFromVersion(opts) || {};
	
	        if (data.targetDevice === undefined) {
	            return true;
	        }
	        if (!engine.getDemo() &&                    // Always show on demo...
	            ((',' + data.targetDevice + ',').indexOf(',' + engine.getDevice().name.toLowerCase() + ',') === -1)) {
	            // Don't show the widget on this device!
	            return false;
	        }
	        return true;
	    };
	
	    this.updateViewPortForDevice = function(targetDevice) {
	        utils.vars.each(this._engine.getDevices(), bind(this, function(device) {
	            utils.dom.removeClass(this._viewPortElement, '~' + device.getName());
	        }));
	        utils.dom.addClass(this._viewPortElement, utils.dom.updatePrefix('~' + targetDevice.getName()));
	    };
	
	    this.onChangeDevice = function() {
	        this.updateViewPortForDevice(this._engine.getDevice());
	    };
	
	    /**
	     * _onTriggerPolicyTestInterval
	     * Event handler method.
	     * Trigger widget trigger policy testing after certain interval or
	     * stop interval testing when all widgets are constructed.
	     */
	    this._onTriggerPolicyTestInterval = function() {
	        var index,
	            hasPending = false;
	
	        for (index in this._constructedWidgetsMapping) {
	            if (!this._constructedWidgetsMapping[index] && this._widgetPolicies[this._constructedWidgetsMapping[index]] !== null) {
	                hasPending = true;
	                break;
	            }
	        }
	
	        if (!hasPending && this._triggerPolicyTestIntervalProcessId) {
	            clearInterval(this._triggerPolicyTestIntervalProcessId);
	        } else {
	            this.testUntriggeredWidgets();
	        }
	    };
	});
	
	content.ui.widget.manager.MobileWidgetManager = Class(content.ui.widget.manager.WidgetManager, function(supr) {
		this.init = function init(opts) {
			supr(this, this.init, arguments);
		};
	
		/**
		 * For now simply only show the max priority widget
		 */
		// this.filterQueue = function() {
		// 	if (!this._widgetQueue.length) {
		// 		return;
		// 	}
	
		// 	var maxPriority = -1,
		// 		maxIndex 	= 0;
	
		// 	for (var i = 0; i < this._widgetQueue.length; i++) {
		// 		var priority = this._widgetQueue[i].opts.priority;
		// 		if (priority > maxPriority) {
		// 			maxPriority = priority;
		// 			maxIndex 	= i;
		// 		}
		// 	}
	
		// 	this._widgetQueue = [this._widgetQueue[maxIndex]];
		// };
	
		// this.addWidget = function(widgetConstructor, opts) {
		// 	if (this.getVisibleForDevice(opts)) {
		// 		this._widgetQueue.push({widgetConstructor: widgetConstructor, opts: opts});
		// 		this.filterQueue();
		// 	}
		// };
	});
	content.ui.widget.manager.DesktopWidgetManager = Class(content.ui.widget.manager.WidgetManager, function(supr) {
	});
	content.ui.component = {};
	
	content.ui.component.Component = Class(Emitter, function(supr) {
		this.init = function init(opts) {
			supr(this, this.init, arguments);
	
			this._visible 		 = false;
			this._view 			 = opts.view;
			this._engine 		 = opts.engine;
			this._name 			 = opts.name;
			this._data 			 = this._view.getData();
			this._element 		 = this._view.getElement();
			this._componentIndex = opts.componentIndex;
			this._touchMove 			= false;
			this._touchMoveTimeOut 		= null;
		};
	
		/**
		 * This function is called after the DOM elements for the component have been created...
		**/
		this.initView = function initView() {
			return this;
		};
	
		this.reset = function() {
		};
	
		this.style = function(path, style) {
	
		};
	
		this.query = function(path) {
			return (this._element && this._element.node) ? utils.dom.query(path, this._element.node) : false;
		};
	
		this.listen = function(emitter, eventName, context, method) {
			return utils.listen(this.query(emitter), eventName, context, method);
		};
	
		this.getAlert = function() {
			return (this._view.getViewName() === 'alertView');
		};
	
		this.update = function update() {
			var componentView = this._componentView;
			(componentView && this._visible) ? utils.dom.show(componentView) : utils.dom.hide(componentView);
	
			this._view.update();
		};
	
		this.text = function text(path, text, name) {
		};
	
		this.setData = function setData(key, value) {
			this._data[key] = value;
		};
	
		this.getName = function() {
			return this._name;
		};
	
		this.getComponentView = function() {
			return this._componentView;
		};
	
		this.getComponentIndex = function() {
			return this._componentIndex;
		};
	
		this.getVisible = function() {
			return this._visible;
		};
	
		this.onTouchMove = function onTouchMove(event) {
			this._touchMove = true;
			(this._touchMoveTimeOut) && clearTimeout(this._touchMoveTimeOut);
			this._touchMoveTimeOut = setTimeout(bind(this, function() {
				this._touchMove = false;
			}),
			100);
		};
	});
	
	// Create namespace...
	content.ui.view = {};
	
	content.ui.view.View = Class(Emitter, function (supr) {
	    var mainIndex = 2147483647 - 3000,
	        overlayIndex = 2147483647 - 1500;
	
	    this.init = function init(opts) {
	        supr(this, this.init, arguments);
	
	        this._device = opts.device || null;
	        this._widget = opts.widget;
	        this._id = this._widget.getId();
	        this._data = opts.data || {};
	        this._name = opts.name; 	// Redundant? Needs checking!
	        this._viewName = opts.viewName;
	        this._engine = opts.engine;
	        this._element = null;
	        this._minimizedSessionKey = this._widget.getMinimizedSessionKey();
	        //this._startMinimized 		= !opts.engine.getDemo() && !!opts.startMinimized && !opts.labelMode && !opts.data.label;
	        this._startMinimized = !!opts.startMinimized && !opts.labelMode && !opts.data.label;
	        this._labelMode = !!opts.labelMode;
	        this._hasShadow = !!this._data.shadowEnabled;
	        this._loading = false;
	        this._listenForEnd = true; // Listen for the end transition?
	        this._mainContent = null;
	        this._mainContentHeight = 0;
	        this.setOpts(opts);
	
	        this._className = opts.className || '';
	        this._parent = opts.parent || utils.dom.query('.~Viewport') || document.body;
	
	        this._measureDiv = null;
	        this._reflowBusy = false;
	        this._reflowCallbacks = [];
	        this._reflow = false;
	        this._reflowTimeout = null;
	        this._reflowStartTimeout = null;
	        this._display = content.ui.view.HIDDEN;
	        this._displayTimeout = null;
	        this._title = null;
	        this._button = null;
	        this._labelHeight = 45;
	        this._touchMove = false;
	        this._touchMoveTimeOut = null;
	
	        this._margin = (opts.margin === undefined) ? 0 : opts.margin; // The top or bottom margin...
	
	        this.showEventWasTracked = false;
	
	        this.initOverlay();
	        this.initElements();
	        this.initLang(opts);
	        this.initCurrency();
	    };
	
	    this.initLang = function (opts) {
	        this._data.lang = this.determineLanguageDataToUse(opts.lang, this._engine.getActiveLang());
	        this._data.langCode = this.determineLanguageCodeToUse(opts.lang, this._engine.getActiveLang());
	    };
	
	    this.initCurrency = function () {
	        var dc = this._engine.getDocumentConnector();
	        this._data.activeCurrency = (dc && dc.get('activeCurrency')) ? dc.get('activeCurrency') : null;
	    };
	
	    this.initOverlay = function () {
	        this._overlayTimeout = null;
	
	        if (this._overlay) {
	            return;
	        }
	
	        var overlay = document.createElement('div');
	        utils.dom.style(
	            overlay,
	            {
	                display: 'none',
	                zIndex: overlayIndex + this.getLabelAlignment() * 20 - this._data.labelIndex - (this.getData().isDockWidget ? 15 : 0) - (this._engine.getDevice().isMobile ? 3000 : 0),
	                position: 'fixed',
	                left: 0,
	                top: 0,
	                right: 0,
	                bottom: 0,
	                backgroundColor: 'rgba(0, 0, 0, 0.7)'
	            }
	        );
	        this.getDevice().isMobile ? utils.dom.addTransition(overlay, ['opacity .7s']) : utils.dom.addTransition(overlay, ['opacity 0.4s']);
	
	        var half = document.createElement('div');
	        utils.dom.style(
	            half,
	            {
	                position: 'fixed',
	                left: 0,
	                top: '50%',
	                right: 0,
	                height: '50%'
	            }
	        );
	        overlay.appendChild(half);
	        this._parent.appendChild(overlay);
	
	        this._half = half;
	        this._overlay = overlay;
	    };
	
	    this.initElements = function () {
	        var device = this.getDevice(),
	            translate = null;
	
	        // IE doesn't want to work like the rest...
	        if (this.getData().alignVertical) {
	            translate = this.getAlignment().isTop() ? 'translateY(-450px)' : 'translateY(450px)';
	        } else if (this.getAlignment().isLeftOrRight() && !device.isMobile) {
	            translate = this.getAlignment().isLeft() ? 'translateX(-450px)' : 'translateX(450px)';
	        } else {
	            translate = '';
	        }
	
	        var element = {
	            attributes: {
	                className: this._className
	            },
	            style: {
	                zIndex: mainIndex + this.getLabelAlignment() * 20 - this._data.labelIndex - (this.getData().isDockWidget ? 15 : 0) - ((this.getData().isDockWidget && device.isMobile) ? 10000 : 0),
	                boxSizing: 'border-box',
	                padding: this.getPadding() + 'px',
	                margin: 0,
	                position: 'fixed',
	                visibility: 'hidden',
	                transform: translate
	            },
	            childNodes: []
	        };
	        new DOMElements({domElement: element, parent: this._parent});
	
	        this._element = element;
	
	        element.node.className = !!this._data.isDockableWidget ? '' : utils.dom.updatePrefix('~StandAlone');
	
	
	        // @TODO: controleren of widget geen labelView of AlertView is.
	        utils.dom.addClass(element.node, (!!this._data.isDockableWidget ? '' : '~StandAlone'));
	
	        // If the text should be RTL then set the class 'RTL' so that the proper text direction will be set
	        if(content.ui.view.RTLLANG.indexOf(this._engine.getActiveLang()) !== -1) {
	            utils.dom.addClass(element.node, '~RTL');
	        }
	
	        device.hiddenPosition(this);
	
	        this.updateDevice();
	        device.transitionForPosition(this);
	
	        this._engine.emit('ShowView', this);
	    };
	
	    /**
	     * This function is called from the subclass of this class,
	     * the DOM needs to be ready for this function...
	     **/
	    this.initDOM = function initDOM(opts) {
	        this._title = (this._viewName === 'dialogView') ? this.query('.~Title') : this.query('.~TitleAlert');
	        this._button = (this._viewName === 'dialogView') ? this.query('.~DialogButton') : this.query('.~AlertButton');
	
	        if (this.getViewName() === 'labelView') {
	            this._title = this.query('.~TitleLabelEl');
	        }
	
	        // Add listeners to the "x" button...
	        var list = this.queryAll('.~CloseButton');
	        if (list) {
	            var i = list.length;
	            while (i) {
	                var item = list[--i];
	                item && utils.listen(document, 'touchmove', bind(this, this.onTouchMove));
	                item && utils.listen(item, 'click', bind(this, this.onClickHide));
	            }
	        }
	
	        // Set a timeout, this allows the dom to reflow before measuring the height of the mainContent...
	        var node = this._element.node,
	            mainContent = this._mainContent = this.query('.~MainContent');
	
	        if (mainContent) {
	            mainContent.style.height = 'auto';
	            setTimeout(
	                bind(this, function () {
	                    this._mainContentHeight = mainContent.offsetHeight;
	
	                    mainContent.style.height = '0px';
	                    mainContent.style.overflow = 'hidden';
	
	                    utils.dom.onTransitionEnd(mainContent, bind(this, this.onContentTransitionEnd));
	                    utils.dom.onTransitionEnd(node, bind(this, this.onMainTransitionEnd));
	                }),
	                1
	            );
	        } else {
	            utils.dom.onTransitionEnd(node, bind(this, this.onMainTransitionEnd));
	        }
	
	        // Add additional widget class (for specs)
	        if (this._widget && this._widget._type) {
	            var widgetTypeClassName = utils.dom.updatePrefix('~WidgetType' + utils.string.ucfirst(utils.string.camelize(this._widget._type))),
	                widgetHashClassName = utils.dom.updatePrefix('~WidgetId' + this._id.split('_')[1]);
	
	            utils.dom.addClass(this._content.node, widgetTypeClassName);
	            utils.dom.addClass(this._content.node, widgetHashClassName);
	        }
	
	        if(this._hasShadow) {
	            this.setShadow(true);
	        }
	
	        utils.listen(node, 'touchmove', this, this.onTouchMove);
	        utils.listen(node, 'click', this, this.onClickView);
	    };
	
	    /**
	     * determineLanguageDataToUse
	     * Helper method to determine the language data (en, nl, etc.)
	     * to use as active language data.
	     * @param    object    Object with available languages and data ( { en: {}, nl: {} } )
	     * @param    mixed    Force language. Normally the engines.getActiveLang()...
	     * @return    object    Resolved language data object
	     */
	    this.determineLanguageDataToUse = function (lang, activeLanguage) {
	        activeLanguage = activeLanguage || (this._engine ? this._engine.getActiveLang() : null);
	        return lang[activeLanguage] || lang.en || lang[Object.keys(lang)[0]] || {};
	    };
	
	    this.determineLanguageCodeToUse = function (lang, activeLanguage) {
	        activeLanguage = activeLanguage || (this._engine ? this._engine.getActiveLang() : null);
	        return activeLanguage || 'en' || Object.keys(lang)[0] || null;
	    };
	
	    this.onMainTransitionEnd = function onMainTransitionEnd(event) {
	        if (this._labelMode) {
	            if (this._display === content.ui.view.SHOWING) {
	                this.setDisplay(content.ui.view.VISIBLE);
	            }
	        } else if (this._display === content.ui.view.SHOWING) {
	            this.reflow(bind(this, function () {
	                this.setDisplay(content.ui.view.VISIBLE);
	                this._mainContent && (this._mainContent.style.height = this._mainContentHeight + 'px');
	            }));
	        }
	    };
	
	    this.onContentTransitionEnd = function onContentTransitionEnd(event) {
	        switch (this._display) {
	            case content.ui.view.HIDING:
	                this.getFold() && this.hide();
	                break;
	
	            case content.ui.view.SHOWING:
	                this.setDisplay(content.ui.view.VISIBLE);
	                if(utils.browserName == 'ie') {
	                    this.reflow(bind(this, function () {
	                        this._mainContent && (this._mainContent.style.height = this._mainContentHeight + 'px');
	                    }));
	                }
	                break;
	        }
	    };
	
	    /**
	     * This function is called when the view is clicked, it checks it's current state and
	     * decides what to do.
	     * MINIMIZED/HIDDEN : show
	     * VISIBLE            : hide
	     */
	    this.onClickView = function (event) {
	        var data = this._data,
	            storage = this._engine.getStorage();
	
	        switch (this._display) {
	            case content.ui.view.MINIMIZED:
	            case content.ui.view.HIDDEN:
	                storage.removeDoneForSession(this._minimizedSessionKey);
	                this._widget.setStartMinimized(false);
	                this._engine.getWidgetManager().showWidget(this._widget);
	                break;
	
	            case content.ui.view.VISIBLE:
	                if (data.tab && utils.dom.hasClass(event.target, '~Icon')) {
	                    storage.setDoneForSession(this._minimizedSessionKey);
	                    this.hide();
	                } else if (data.label && !event.target) {
	                    storage.setDoneForSession(this._minimizedSessionKey);
	                    this.hide();
	                }
	                break;
	        }
	        this.emit('Click');
	    };
	
	    /**
	     * TODO : find out when this function is called
	     * TODO : Verify commenting
	     * This function is called when ... , it checks if the current state is hidden, when the state is hidden
	     * it will show the widget, otherwise it wil hide it.
	     * HIDDEN                : show
	     * VISIBLE/MINIMIZED    : hide
	     */
	    this.onClickHide = function onClickHide(event, continueEvent) {
	        continueEvent = (continueEvent === true);
	
	        this._engine.getStorage().setDoneForSession(this._minimizedSessionKey);
	        var display = this._display;
	        if (this._device.isMobile) {
	            if (this._viewName == 'labelView') {
	                (display !== content.ui.view.HIDDEN) ? this.hide() : this.show();
	            } else {
	                (display !== content.ui.view.HIDDEN) ? this.hide() : this._engine.getWidgetManager().showWidget(this._widget);
	            }
	        } else if (display === content.ui.view.VISIBLE) {
	            this.hide();
	        }
	
	        if (!continueEvent) {
	            utils.stopEvent(event);
	        }
	
	        this._engine.getAnalytics().trackEvent('manualClose', this._id);
	        this._engine.getTitan().event('widget', 'manualClose', this._id);
	
	    };
	
	    this.onClickOverlayHide = function onClickOverlayHide(event) {
	        if (event.target === this._overlay) {
	            this.onClickHide(event, true);
	        }
	    };
	
	    /**
	     * This is an event handler so that this function can be overwritten in subclasses...
	     **/
	    this.onHide = function () {
	    };
	
	    /**
	     * This is an event handler so that this function can be overwritten in subclasses...
	     **/
	    this.onShow = function () {
	    };
	
	    this.forceReflow = function () {
	        this._reflow = true;
	        this.reflow();
	    };
	
	    this.reflow = function reflow(callback) {
	        var isMobile = this._engine.getDevice().isMobile;
	
	        callback && this._reflowCallbacks.push(callback);
	        
	        if (this._reflowBusy) {
	            return;
	        }
	
	        if (!this._reflow || !this._mainContent) {
	            while (this._reflowCallbacks.length) {
	                this._reflowCallbacks.shift()();
	            }
	            return;
	        }
	
	        this._reflowBusy = true;
	
	        var mainContent = this._mainContent,
	            style,
	            measureDiv = this._measureDiv,
	            images = mainContent.querySelectorAll('img');
	
	
	        if (!measureDiv) {
	            // Create a floating div with a width equal to this view...
	            measureDiv = document.createElement('div');
	            measureDiv.style.position = 'fixed';	// was absolute before 19-05-17, but changed after white space footer on certain website
	            
	            // @note: seems that this fixes the vertical mobile white space bug...
	            if (isMobile) {
	                measureDiv.style.top = '-3000px';
	            } else {
	                measureDiv.style.left = '-3000px';
	            }
	            
	            this._measureDiv = measureDiv;
	            this._parent.appendChild(measureDiv);
	        }
	
	        measureDiv.className = mainContent.parentNode.className;
	        //utils.dom.addClass(measureDiv, '~MeasureEl');
	
	        style = measureDiv.style;
	        style.cssFloat = 'left';
	        style.width = isMobile ? 'auto' : (this._data.width - 20) + 'px';
	        style.visibility = 'hidden';
	
	        var cloneMainContent = bind(this, function() {
	            // when mobile, take wrapper element into account so the cloned node will
	            // appear as a mobile tool instead of a desktop tool.
	            // dimensions differ between mobile and desktop.
	            // This if statement if implemented as fix for an issue of to much vertical white-space
	            // in mobile tools.
	            // To make sure this only affects mobile tools, to prevent the introduction of new issues
	            // for desktop tools, the fix is conditional...
	            if (isMobile) {
	                var wrapperNode = this._mainContent.parentNode.parentNode.cloneNode(true),
	                    clonedContent = utils.dom.query('.~MainContent', wrapperNode);
	            } else {
	                var wrapperNode = this._mainContent.cloneNode(true),
	                    clonedContent = wrapperNode;
	            }
	
	            clonedContent.style.height = 'auto';
	            clonedContent.style.visibility = 'hidden';
	
	            var childNodes = this._measureDiv.childNodes;
	            while (childNodes.length) {
	                measureDiv.removeChild(childNodes[0]);
	            }
	            measureDiv.appendChild(wrapperNode); // Add the content to the div to measure...
	
	            return clonedContent;
	        });
	
	        var onImagesLoaded = bind(this, function () {
	            this._reflowTimeout && clearTimeout(this._reflowTimeout);
	            this._reflowTimeout = setTimeout(
	                bind(this, function () {
	                    this._reflowTimeout = null;
	                    var clonedContent = cloneMainContent();
	
	                    var offsetHeight = clonedContent.offsetHeight;
	                    if (offsetHeight > 0) {
	                        this._reflow = false;
	                        this._mainContentHeight = isMobile ? this._mainContent.scrollHeight : offsetHeight;
	                    }
	
	                    while (this._reflowCallbacks.length) {
	                        this._reflowCallbacks.shift()();
	                    }
	
	                    this._reflowBusy = false;
	
	                    // ensure vertical alert position when image is loaded
	                    var node = this.getElement().node,
	                        widgetNode = node && node.childNodes[0] ? node.childNodes[0] : null,
	                        style = node.style,
	                        device = this._engine.getDevice();
	
	                    if (device.name === 'Desktop') {
	                        var positionVertical = bind(this, function () {
	                            this._engine.getDevice().updateVertical(this, style, widgetNode);
	                        });
	                    }
	                }),
	                10
	            );
	        });
	
	        if (images.length) {
	            var imageCount = images.length,
	                imageDone = function () {
	                    imageCount--;
	                    imageCount || onImagesLoaded(); // Call onImagesLoaded when all images are done (imageCount = 0)
	                };
	            for (var i = 0; i < images.length; i++) {
	                var image = images[i];
	                if (image.complete) {
	                    imageCount--; // This image is already loaded...
	                } else {
	                    image.addEventListener('load', imageDone);
	                    image.addEventListener('error', imageDone);
	                }
	            }
	            imageCount || onImagesLoaded(); // Call onImagesLoaded when all images are done (imageCount = 0)
	        } else {
	            onImagesLoaded();
	        }
	    };
	
	    /**
	     * This function can be implemented by the subclass to handle widget specific commands...
	     **/
	    this.command = function (data) {
	    };
	
	    this.attach = function () {
	        this._parent.appendChild(this._element.node);
	    };
	
	    this.remove = function () {
	        var node = this._element.node;
	        node && node.parentNode && node.parentNode.removeChild(node);
	        this.setDisplay(content.ui.view.HIDDEN);
	    };
	
	    this.getData = function () {
	        return this._data;
	    };
	
	    this.getWidget = function () {
	        return this._widget;
	    };
	
	    this.getName = function () {
	        return this._name;
	    };
	
	    this.getViewName = function () {
	        return this._viewName;
	    };
	
	    this.getFold = function () {
	        return !!this._data.fold && !this._alignment.isCompletelyCentered();
	    };
	
	    this.getMinimizable = function () {
	        return !!this._data.minimizable;
	    };
	    
	    this.setMinimizable = function (isMinimizable) {
	        this._data.minimizable = isMinimizable;
	        return this;
	    };
	
	    this.getMobileMinimizableShowButton = function () {
	        return !!this._data.mobileMinimizableShowButton;
	    };
	
	    this.getLabelAlignment = function () {
	        var data = this._data;
	        return data.label ? data.labelAlignment : data.alignment;
	    };
	
	    this.setMargin = function (margin) {
	        this._margin = margin;
	        return this.updatePosition();
	    };
	
	    this.setLabelHeight = function (height) {
	        var node = this.getElement().node,
	            widgetNode = node && node.childNodes[0] ? node.childNodes[0] : null,
	            style = node.style;
	
	        this._labelHeight = height;
	        this._engine.getDevice().updateVertical(this, style, widgetNode);
	        this.update();
	        return this;
	    };
	
	    this.getLabelHeight = function () {
	        return this._labelHeight;
	    }
	
	    this.getTotalMargin = function () {
	        return this._margin + this.getLabelHeight() * this.getLabelIndex();
	    };
	
	    this.getTotalTop = function () {
	        var isDockableWidget = (this._data.isDockableWidget == 1),
	            top = this.getLabelHeight();
	        data = this._data,
	            alignment = this._labelMode ? data.labelAlignment : data.alignment,
	            index = this._engine.getWidgetManager().validateAlignment(this._widget.getHash(), alignment, this.getLabelIndex());
	
	        if (this.getData().isDockWidget) {
	            return this._margin + top * (index + 1);
	        }
	
	        return this._margin + top * index;
	    };
	
	    this.getAutoSize = function () {
	        return false;
	    };
	
	    this.setOpts = function (opts) {
	        var data = this._data,
	            optsData = opts.data;
	
	        data.horizontalOffset = optsData.horizontalOffset;
	        data.verticalOffset = optsData.verticalOffset;
	
	        data.width = optsData.width || 'auto';
	        data.height = optsData.height || 'auto';
	
	        this._alignment = new content.ui.widget.Alignment(parseInt(optsData.alignment, 10));
	        this._height2 = ~~(optsData.height / 2);
	    };
	
	    this.setFullPosition = function (alignment, horizontalOffset, verticalOffset) {
	        this._alignment.setAlignment(alignment);
	        this._data.horizontalOffset = horizontalOffset;
	        this._data.verticalOffset = verticalOffset;
	    };
	
	    this.getVerticalOffset = function () {
	        return parseInt(this._data.verticalOffset, 10);
	    };
	
	    this.getHorizontalOffset = function () {
	        return parseInt(this._data.horizontalOffset, 10);
	    };
	
	    this.setHorizontalOffset = function (offset) {
	        this._data.horizontalOffset = offset;
	        return this.updatePosition();
	    };
	
	    this.getAlignment = function () {
	        return this._alignment;
	    };
	
	    this.setAlignment = function (alignment) {
	        this._alignment.setAlignment(alignment);
	    };
	
	    this.getDisplay = function () {
	        return this._display;
	    };
	
	    this.setDisplay = function (display) {
	        var node = this._content.node;
	
	        this._display = display;
	
	        if (node) {
	            utils.dom.removeClass(node, '~DisplayHidden');
	            utils.dom.removeClass(node, '~DisplayMinimized');
	            utils.dom.removeClass(node, '~DisplayVisible');
	            utils.dom.removeClass(node, '~DisplayShowing');
	            utils.dom.removeClass(node, '~DisplayHiding');
	
	            switch (display) {
	                case content.ui.view.HIDDEN:
	                    utils.dom.addClass(node, '~DisplayHidden');
	                    break;
	                case content.ui.view.MINIMIZED:
	                    utils.dom.addClass(node, '~DisplayMinimized');
	                    break;
	                case content.ui.view.SHOWING:
	                    utils.dom.addClass(node, '~DisplayShowing');
	                    break;
	                case content.ui.view.VISIBLE:
	                    utils.dom.addClass(node, '~DisplayVisible');
	                    break;
	                case content.ui.view.HIDING:
	                    utils.dom.addClass(node, '~DisplayHiding');
	                    break;
	            }
	        }
	
	        this.updateTab();
	        this.updateButton();
	        this.updatePosition();
	        this.emit('ChangeDisplay', display, this);
	    };
	
	    /**
	     * getElement
	     * @return    object    The element (the view wrap)
	     */
	    this.getElement = function () {
	        return this._element;
	    };
	
	    /**
	     * getContentElement
	     * @return    object    Content element
	     */
	    this.getContentElement = function () {
	        return this._content;
	    };
	
	    this.getPadding = function () {
	        // if is dock widget or is dockable widget, then padding should be 0.
	        // Otherwise the vertical padding results in overlapping clicking areas for the tiles.
	        return this._data.isDockableWidget || this._data.isDockWidget ? 0 : 10;
	    };
	
	    this.getWidth = function () {
	        var width = this._data.width;
	        if ((typeof width === 'string') && (width[width.length - 1] === '%') || (width === 'auto')) {
	            return width;
	        }
	        return parseInt(width, 10);
	    };
	
	    this.setWidth = function (width) {
	        this._data.width = parseInt(width, 10);
	        return this.updatePosition();
	    };
	
	    /**
	     * This is the horizontal offset applied to labels...
	     **/
	    this.getLabelOffset = function () {
	        var data = this._data;
	        return (data.labelOffset === undefined) ? 50 : data.labelOffset;
	    };
	
	    this.setLabelOffset = function (offset) {
	        this._data.labelOffset = offset;
	        return this.updatePosition();
	    };
	
	    /**
	     * If multiple widgeds occupy the same space on the screen then each widget at a given slot
	     * will get a unique index...
	     **/
	    this.getLabelIndex = function () {
	        var data = this._widget.getVersionData();
	        return (data.labelIndex === undefined) ? 0 : data.labelIndex;
	    };
	
	    this.getLabelMode = function () {
	        return this._labelMode;
	    };
	
	    this.show = function show() {
	        var element = this._element,
	            node = element.node,
	            engine = this._engine,
	            device = this.getDevice();
	
	        if (!element || !node || (this._display === content.ui.view.SHOWING) || (this._display === content.ui.view.VISIBLE)) {
	            return;
	        }
	
	        this._displayTimeout && clearTimeout(this._displayTimeout);
	        this._displayTimeout = null;
	        var mainContent = this._mainContent;
	
	        if (mainContent && (this._display === content.ui.view.HIDDEN)) {
	            mainContent.style.overflow = 'hidden';
	            mainContent.style.height = 'auto';
	            this._mainContentHeight = mainContent.offsetHeight;
	
	            if ((this.getFold() && (this._mainContentHeight !== 0)) || this.getData().alignVertical) {
	                mainContent.style.height = this._mainContentHeight + 'px';
	                mainContent.style.height = '0px';
	            }
	        }
	
	
	        // @TODO: look into this check. Not sure if the startMinimized fix is working the
	        // way it should be. It breaks the dock
	        // This is a quick fix to fix the dock for this moment
	        // @todo: clean up, I might destroy a lot of code if I edit in this checks.
	        if (!device.isMobile) {
	            if (this.getData().isDockableWidget || (this.getMinimizable() && !this._labelMode && !this.getDisplay().isMobile)) {
	                utils.dom.hide(this.query('.~TitleLabelEl'));
	            }
	            utils.dom.show(this._title);
	
	            node.style.display = 'block';
	            var center = (this._data.alignment === 4);
	
	            if (this._widget.getStartMinimized() && !this._engine.getDevice().isMobile) {
	                if (center) {
	                    this.setDisplay(content.ui.view.HIDDEN);
	                    device.hiddenPosition(this);
	                } else if (this.getData().alignVertical) {
	                    display = !!this.getData().minimizable ? content.ui.view.MINIMIZED : content.ui.view.HIDDEN;
	                    this.setDisplay(display);
	                    device.hiddenPosition(this);
	                } else {
	                    if (this.getViewName() == 'labelView') {
	                        this.setDisplay(content.ui.view.SHOWING);
	                        device.visiblePosition(this);
	                    } else {
	                        utils.dom.show(this.query('.~TitleLabelEl'));
	                        utils.dom.hide(this._title);
	                        this.setDisplay(content.ui.view.MINIMIZED);
	                        device.minimizedPosition(this);
	                    }
	                }
	            } else {
	                this.setDisplay(center ? content.ui.view.VISIBLE : content.ui.view.SHOWING);
	                device.visiblePosition(this);
	                center && this.showOverlay();
	                device.isMobile && this.showOverlay();
	            }
	        } else {
	            if (!this._touchMove) {
	
	                if (!this.getData().isDockableWidget && !this.getData().isDockWidget) {
	                    if ((this.getViewName() == 'dialogView' && !this._widget.getStartMinimized())) {
	                        this.setDisplay(content.ui.view.SHOWING);
	                        device.visiblePosition(this);
	                        this.showOverlay();
	
	                    } else if (this.getViewName() == 'labelView') {
	                        // if it's label view first we check if it was already shown (the first time it's shown it's hidden right away to show the Dialog View)
	                        var mobileMinimizableShowButton = this.getMobileMinimizableShowButton();
	
	                        var hideButton = !this._isButtonHiddenOnMinimize && !mobileMinimizableShowButton;
	                        if (hideButton) { //|| This is the part of the code that hides the button label on mobile
	                            this.setDisplay(content.ui.view.HIDDEN);
	                            this._isButtonHiddenOnMinimize = true; // we just hide the button after the dialog is closed, afterwards we should be displayed
	                        } else {
	                            device.visiblePosition(this);
	                            this.setDisplay(content.ui.view.SHOWING);
	                            this._isButtonHiddenOnMinimize = false; // since we want it to be hidden every time we close the button then we need to reset this boolean after the label is shown.
	                            this._isLabelFirstShown = true;
	
	                        }
	                        this.showOverlay();
	                    } else {
	                        this.setDisplay(content.ui.view.SHOWING);
	                        device.visiblePosition(this);
	                    }
	                } else if (this.getData().isDockWidget) {
	                    this.setDisplay(content.ui.view.SHOWING);
	                    device.visiblePosition(this);
	                } else if (this.getData().isDockableWidget && this.getViewName() !== 'labelView') {
	                    this.setDisplay(content.ui.view.SHOWING);
	                    device.visiblePosition(this);
	                    this.showOverlay();
	                }
	            }
	        }
	
	        this.onShow();
	        this.emit('Show');
	
	        if (!this.showEventWasTracked || !this.getMinimizable()) {
	            //TODO ask!! about these events
	            engine.getAnalytics().trackEvent('show', this._id);
	            engine.getTitan().event('widget',
	                'show',
	                this._id,
	                {
	                    language: this._data.langCode,
	                    currency: this._data.activeCurrency
	                });
	            this.showEventWasTracked = true;
	        } else {
	            engine.getAnalytics().trackEvent('expand', this._id);
	            engine.getTitan().event('widget',
	                'expand',
	                this._id,
	                {
	                    language: this._data.langCode,
	                    currency: this._data.activeCurrency
	                });
	        }
	    };
	
	    this.showOverlay = function () {
	        if (this._alignment.isCompletelyCentered() || (this.getDevice().isMobile && this.getViewName() != 'labelView')) {
	            utils.dom.fadeIn(this._overlay);
	        } else {
	            utils.dom.hide(this._overlay);
	        }
	    };
	
	    this.hide = function hide(test) {
	        var data = this._data,
	            node = this._element.node,
	            style = node.style,
	            hide = true,
	            isMobile = this.getDevice().isMobile,
	            display = this._display,
	            engine = this._engine;
	
	        this._displayTimeout && clearTimeout(this._displayTimeout);
	        this._displayTimeout = null;
	
	
	        if ((!!this._data.isDockableWidget || !this.getWidget().getData().data.label) && this.getViewName() === 'dialogView') {
	            if (!isMobile) {
	                utils.dom.show(this.query('.~TitleLabelEl'));
	                utils.dom.hide(this._title);
	            } else {
	                utils.dom.hide(this.query('.~TitleLabelEl'));
	                utils.dom.show(this._title);
	            }
	        }
	        switch (this._display) {
	            case content.ui.view.HIDING:
	                this.hideOverlay();
	                display = !!data.minimizable ? content.ui.view.MINIMIZED : content.ui.view.HIDDEN;
	                break;
	
	            case content.ui.view.MINIMIZED:
	                if (!data.minimizable) {
	                    hide = true;
	                    display = content.ui.view.HIDDEN;
	                }
	                break;
	
	            case content.ui.view.VISIBLE:
	                if (this._viewName === 'dialogView') {
	                    this._widget.setStartMinimized(true);
	                } else if (this._viewName === 'labelView') {
	                    this._widget.setStartMinimized(false);
	                }
	
	                if (isMobile || this._labelMode) {
	                    display = content.ui.view.HIDDEN;
	                } else if (this.getFold()) {
	                    this.setDisplay(content.ui.view.HIDING);
	                    if (this._mainContent) {
	                        this.reflow(bind(this, function () {
	                            this._mainContent.style.height = this._mainContentHeight + 'px';
	                        }));
	                        this._mainContent.style.height = '0px';
	                    }
	                    hide = false;
	                } else {
	                    display = !!data.minimizable ? content.ui.view.MINIMIZED : content.ui.view.HIDDEN;
	                }
	                var eventAction = this.getMinimizable() ? 'collapse' : 'hide';
	                this._engine.getAnalytics().trackEvent(eventAction, this._id);
	                this._engine.getTitan().event('widget',
	                    eventAction,
	                    this._id,
	                    {
	                        language: this._data.langCode,
	                        currency: this._data.activeCurrency
	                    });
	
	                break;
	            case content.ui.view.SHOWING:
	                setTimeout(bind(this, this.hide), 50);
	                break;
	        }
	        if (hide) {
	            var emit = this._display !== display;
	            this.setDisplay(display);
	            this.hideOverlay();
	            this.getDevice().transitionForPosition(this);
	            this.onHide();
	            emit && this.emit('Hide');
	        }
	    };
	
	    this.hideOverlay = function () {
	        if (this._alignment.isCompletelyCentered() || this.getDevice().isMobile) {
	            utils.dom.fadeOut(this._overlay);
	        } else {
	            utils.dom.hide(this._overlay);
	        }
	    };
	
	    this.minimize = function minimize() {
	        var data = this._data;
	        if (!!!data.minimizable) {
	            return false;
	        }
	
	        this._displayTimeout && clearTimeout(this._displayTimeout);
	        this._displayTimeout = null;
	
	        switch (this._display) {
	            case content.ui.view.HIDDEN:
	                if ((this.getFold() || this._labelMode) && !this.getDevice().isMobile) {
	                    utils.dom.show(this.query('.~TitleLabelEl'));
	                    utils.dom.hide(this._title);
	                } else {
	                    utils.dom.hide(this.query('.~TitleLabelEl'));
	                    utils.dom.show(this._title);
	                }
	
	                this.setDisplay(content.ui.view.MINIMIZED);
	                this.updatePosition();
	                this.hideOverlay();
	                this.getDevice().transitionForPosition(this);
	                break;
	
	            case content.ui.view.VISIBLE:
	                this.hide();
	                break;
	
	            case content.ui.view.MINIMIZED:
	                // Done...
	                break;
	
	            default:
	                this._displayTimeout = setTimeout(bind(this, this.minimize), 20);
	                break;
	        }
	        return true;
	    };
	
	    this.update = function () {
	        // @TODO: classes aanpassen op basis van alignment.
	
	        var alignment = this._alignment,
	            alignmentVerticalClass = 'Alignment-vertical-' + alignment.getVerticalByName(),
	            alignmentHorizontalClass = utils.string.camelize('Alignment-horizontal-' + alignment.getHorizontalByName()),
	            alignmentClasses = '~' + utils.string.camelize('Alignment-vertical-' + alignment.getVerticalByName() + ' ~' + utils.string.camelize('Alignment-horizontal-' + alignment.getHorizontalByName()));
	
	        utils.dom.removeClassByPrefix(this._element.node, '~Alignment');
	        utils.dom.addClass(this._element.node, alignmentClasses);
	
	        var callback = bind(this, function () {
	            var title = this._title,
	                titleLabel = this.query('.~TitleLabelEl'),
	                openButton = this.query('.~OpenButton'),
	                closeButton = this.query('.~CloseButton'),
	                alignment = this._alignment,
	                isCompletelyCentered = alignment.isCompletelyCentered(),
	                half = this._half,
	                node = this._element.node,
	                doShowTab = !!this._data.tab;
	
	            if (this.getDevice().isMobile) {
	                this.updatePosition();
	            } else if (isCompletelyCentered) {
	                if (node.parentNode !== this._half) {
	                    node.parentNode.removeChild(node);
	                    half.appendChild(node);
	                }
	                if (this._display === content.ui.view.VISIBLE) {
	                    this.showOverlay();
	                }
	                utils.dom.show(node);
	            } else if (node.parentNode === this._half) {
	                half.removeChild(node);
	                this._parent.appendChild(node);
	                this.hideOverlay();
	            } else {
	                this.hideOverlay();
	            }
	
	            utils.dom.removeClass(title, '~WithTabLeft');
	            utils.dom.removeClass(titleLabel, '~WithTabLeft');
	            utils.dom.removeClass(title, '~WithTabRight');
	            utils.dom.removeClass(titleLabel, '~WithTabRight');
	
	            if (doShowTab && !isCompletelyCentered && !this._device.isMobile) {
	                utils.dom.hide(openButton);
	                utils.dom.hide(closeButton);
	                var className = alignment.isLeft() ? '~WithTabRight' : '~WithTabLeft';
	                utils.dom.addClass(title, className);
	                utils.dom.addClass(titleLabel, className);
	            } else {
	                utils.dom.show(openButton);
	                // If it's a labelview and it hasn't been shown the first time the label's close button should remain hidden // if  it's any other view it should continue showing the close button
	                if (this.getViewName() !== 'labelView' || (this.getViewName() === 'labelView' && !!this._isLabelFirstShown))
	                    utils.dom.show(closeButton);
	            }
	            this.updateDevice();
	        });
	
	        setTimeout(bind(this, function () {
	            var mainContent = this._mainContent;
	            if (mainContent) {
	                if (this._display === content.ui.view.VISIBLE) {
	                    this._reflow = true;
	                }
	                this.reflow(bind(this, function () {
	                    if (this._display === content.ui.view.VISIBLE) {
	                        mainContent.style.height = this._mainContentHeight + 'px';
	                    }
	                    callback();
	                }));
	            } else {
	                callback();
	            }
	        }));
	    };
	
	    this.updateDevice = function updateDevice() {
	        var device = this.getDevice(),
	            style = this._element.node.style;
	
	        device.update(this);
	        device.transitionForPosition(this);
	        return this;
	    };
	
	    this.updatePosition = function () {
	        var node = this._element.node,
	            style = node.style,
	            device = this.getDevice();
	
	        switch (this._display) {
	            case content.ui.view.VISIBLE:
	                device.visiblePosition(this);
	                break;
	            case content.ui.view.MINIMIZED:
	                device.minimizedPosition(this);
	                break;
	            case content.ui.view.HIDDEN:
	                device.hiddenPosition(this);
	                break;
	        }
	
	        return this;
	    };
	
	    this.updateTab = function updateTab() {
	        if (!!this._data.tab && !this._alignment.isCompletelyCentered()) {
	            var chr = this.getTabChar(),
	                isDockableWidget = this._data.isDockableWidget,
	                isLoading = this._loading,
	                updateChars = function (list) {
	                    list = list || [];
	                    for (var i = 0; i < list.length; i++) {
	                        if (isDockableWidget) {
	                            list[i].innerHTML = '';
	                            utils.dom.removeClassByPrefix(list[i], 'mdi');
	                            utils.dom.addClass(list[i], 'mdi ' + chr);
	                        } else {
	                            list[i].innerHTML = chr;
	                        }
	
	                        if (isLoading) {
	                            utils.dom.addClass(list[i], utils.dom.updatePrefix('~Loading'));
	                        } else {
	                            utils.dom.removeClass(list[i], utils.dom.updatePrefix('~Loading'));
	                        }
	                    }
	                };
	            updateChars(this.queryAll('.~Tab .~Icon'));
	            this._labelMode && updateChars(this.queryAll('.~OpenButton'));
	        }
	    };
	
	    this.updateButton = function updateButton() {
	        var alignment = this._alignment,
	            cssFloat = alignment.isCompletelyCentered() ? 'left' : (alignment.isLeft() ? 'right' : 'left');
	        chr = this.getTabChar(),
	            titleMain = this.query('.~Title .~Main'),
	            titleMainIcon = this.query('.~Title .~Main .~Icon'),
	            addDarkIconTabClass = ([content.ui.view.VISIBLE].indexOf(this._display) !== -1 && !!this._data.tab),
	            isDockableWidget = this._data.isDockableWidget;
	
	        updateCssFloat = function (list) {
	            list = list || [];
	            for (var i = 0; i < list.length; i++) {
	                list[i].style.cssFloat = cssFloat;
	            }
	        },
	
	            updateChars = function (list) {
	                list = list || [];
	                for (var i = 0; i < list.length; i++) {
	                    if (isDockableWidget) {
	                        utils.dom.removeClassByPrefix(list[i], 'mdi');
	                        utils.dom.addClass(list[i], 'mdi ' + chr);
	                    } else {
	                        list[i].innerHTML = chr;
	                    }
	                }
	            },
	
	            updateCharsMdi = function (list) {
	                list = list || [];
	                for (var i = list.length - 1; i >= 0; i--) {
	                    var element = list[i],
	                        className = element.className,
	                        mdiClass = className.substr(className.indexOf('mdi-'));
	                    utils.dom.removeClass(element, mdiClass);
	                    utils.dom.addClass(element, chr);
	                }
	            }
	
	        updateBackground = function (list, remove) {
	            list = list || [];
	            for (var i = 0; i < list.length; i++) {
	                remove ? utils.dom.removeClass(list[i], '~IconBackground') : utils.dom.addClass(list[i], '~IconBackground');
	            }
	        },
	
	            updateIcon = function (list, addDarkIconTabClass) {
	                list = list || [];
	                for (var i = 0; i < list.length; i++) {
	                    addDarkIconTabClass ? utils.dom.removeClass(list[i], '~IconBackground') : utils.dom.addClass(list[i], '~IconBackground');
	                }
	            };
	
	        if (!this.getDevice().isMobile) {
	            if (!!this._data.tab && !this._alignment.isCompletelyCentered()) {
	                updateChars(this.queryAll('.~OpenButton .~Icon'));
	                updateChars(this.queryAll('.~Title .~CloseButton.~Icon.~Mobile')); 			// For mobile...
	            }
	
	            // Insert title icon element into label main content for dockable widgets (sub widgets of the trigger tab tool).
	            // The template is a better place, but results in the wrong order of icon and text elements after the text is dynamically set.
	            // @TODO: works for now, but find a clean solution
	            if (this._data.isDockableWidget) {
	                if (titleMain) {
	                    if (!titleMainIcon) {
	                        titleMain.innerHTML = '<span class="mdi ' + utils.dom.prefixed('Icon') + ' ' + utils.dom.prefixed('DarkIcon') + ' ' + (this._data.dockIcon || 'mdi-crop-square') + ' "></span>' + titleMain.innerHTML;
	                        titleMainIcon = this.query('.~Title .~Main .~Icon');
	                    }
	                }
	            }
	
	            // Inserts title icon into title if normal widget and titleUseicon is true(widget setting)
	            // @TODO: works for now, but find a clean solution...
	            if (!this._data.isDockableWidget && this._data.titleUseIcon) {
	                this.insertIconInTitle(this._data.titleIcon);
	            }
	
	            updateChars(this.queryAll('.~Title .~CloseButton.~Icon.~Mobile')); 		// For mobile...
	            updateChars(this.queryAll('.~TitleLabelEl .~OpenButton .~Icon'));			// For desktop...
	            updateCssFloat(this.queryAll('.~TitleLabelEl .~OpenButton'));
	            updateCssFloat(this.queryAll('.~TitleLabelEl .~OpenButton .~Icon'));		// Change the position of the icon left or right side...
	
	            if (content.ui.view.IconLabelView && !(this instanceof content.ui.view.IconLabelView)) {
	                updateCssFloat(this.queryAll('.~TitleLabelEl .~Main'));					// Change the position of the icon left or right side...
	            }
	
	            // @todo : Fix for jerry
	            if (!!this.getData().isDockableWidget || !!this.getData().isDockWidget) {
	                updateBackground(this.queryAll('.~TitleLabelEl .~OpenButton'));			// For desktop...
	                updateIcon(this.queryAll('.~TitleLabelEl .~Tab'), addDarkIconTabClass);
	            }
	        } else {
	            if (this.getViewName() === 'labelView' || this.getData().isDockWidget) {
	                updateCharsMdi(this.queryAll('.~CloseButton'));
	            }
	        }
	    };
	
	    this.updateHeight = function () {
	        this._reflowStartTimeout && clearTimeout(this._reflowStartTimeout);
	        this._reflow = true;
	        this._reflowStartTimeout = setTimeout(
	            bind(this, function () {
	                this._reflowStartTimeout = null;
	                this.reflow(
	                    bind(this, function () {
	                        if (this._display === content.ui.view.VISIBLE && this._mainContent) {
	                            this._mainContent.style.height = this._mainContentHeight + 'px';
	
	                            if (this.getAlignment().isCompletelyCentered()) {
	                                this._engine.getDevice().visiblePosition(this);
	                            }
	                        }
	                    })
	                );
	            }),
	            5
	        );
	    };
	
	    this.getDockTitleChar = function () {
	        return this._data.dockIcon || 'mdi-crop-square';
	    };
	
	    /**
	     * Insert's icon in title..
	     * @param {char} icon icon-character that should be used..
	     */
	    this.insertIconInTitle = function (icon) {
	        var titleMain = this.query('.~Title .~Main'),
	            titleMainIcon = this.query('.~Title .~Main .~Icon');
	        if (titleMain) {
	            if (!titleMainIcon) {
	                titleMain.innerHTML = '<span class="' + utils.dom.prefixed('Icon') + ' ' + utils.dom.prefixed('DarkIcon') + '">' + (icon || 'a') + ' </span>' + titleMain.innerHTML;
	                titleMainIcon = this.query('.~Title .~Main .~Icon');
	            }
	        }
	    }
	
	    /**
	     * Get Tab char, should return icon.
	     * @return {string} string that should represent an icon.
	     * @todo move getTabChar to subclasses..
	     */
	    this.getTabChar = function () {
	        var alignment = this._alignment,
	            display = this._display,
	            device = this._engine.getDevice(),
	            isDockableWidget = !!this._data.isDockableWidget
	        iconClose = isDockableWidget ? 'mdi-arrow-right' : device.iconClose,
	            iconOpen = isDockableWidget ? 'mdi-arrow-left' : device.iconOpen,
	            visible = (display === content.ui.view.SHOWING) || (display === content.ui.view.VISIBLE);
	        if (!this.getDevice().isMobile) {
	            if (isDockableWidget) {
	                return visible ? (alignment.isLeft() ? iconOpen : iconClose) : this._data.dockIcon;
	            } else {
	                if (!visible && this._data.isDockableWidget) {
	                    return this._data.dockIcon || 'mdi-crop-square';	// a = arrow up
	                }
	
	                if (this._loading) {
	                    return 'k';
	                }
	
	                if (this._labelMode) {
	                    return alignment.isLeft() ? iconOpen : iconClose;
	                }
	
	                if (display === content.ui.view.MINIMIZED || this._viewName === 'labelView') {
	                    return alignment.isLeft() ? iconOpen : iconClose;
	                }
	
	                return this._loading ? 'k' : (alignment.isLeft() ? (visible ? iconClose : iconOpen) : (visible ? iconOpen : iconClose));
	            }
	        } else {
	            if (!this.getData().mobileMinimizable && !this.getData().isDockWidget) {
	                return 'mdi-close';
	            } else {
	                return (visible) ? iconClose : iconOpen;
	            }
	        }
	    };
	
	    this.setData = function setData(key, value) {
	        var data = this._data,
	            v = parseInt(value, 10),
	            dictionairyKey = key;
	
	        if (!isNaN(v)) {
	            value = v;
	        }
	
	        data[dictionairyKey] = value;
	        switch (key) {
	            case 'shadowEnabled':
	                this.setShadow(value);
	                this.dashboardReflow(); // Not sure if needed, but just in case
	                break;
	
	            case 'alignment':
	                this._alignment.setAlignment(data.alignment);
	                break;
	
	            case 'dockIcon':
	                data.dockIcon = value;
	                this.updateButton();
	                break;
	        }
	        this.update();
	
	        return this.updatePosition();
	    };
	
	    this.setShadow = function(active) {
	        var shadow = !!active,
	            element = this._content.node;
	
	        if(shadow) {
	            utils.dom.addClass(element, '~WidgetShadow');
	        } else {
	            utils.dom.removeClass(element, '~WidgetShadow');
	        }
	    };
	
	    this.getDevice = function () {
	        return this._device || this._engine.getDevice();
	    };
	
	    this.getMinimizedSessionKey = function () {
	        return this._minimizedSessionKey;
	    };
	
	    this.setLoading = function (loading) {
	        this._loading = loading;
	        this.updateTab();
	    };
	
	    this.getMainContentHeight = function () {
	        return this._mainContentHeight;
	    };
	
	    this.getMainContent = function () {
	        return this._mainContent;
	    };
	
	    /**
	     * getHeight
	     * Generic method to get the height of the view.
	     */
	    this.getHeight = function () {
	        return this.getMainContentHeight() + this.getTitleHeight() + this.getButtonHeight();
	    }
	
	    this.getTitleHeight = function () {
	        if (this._title) {
	            return parseInt(utils.dom.computedStyle(this._title).height, 10);
	        } else {
	            return 0;
	        }
	    };
	
	    this.getButtonHeight = function () {
	        if (this._button) {
	            return parseInt(utils.dom.computedStyle(this._button).height, 10);
	        } else {
	            return 0;
	        }
	    };
	
	    this.hiddenState = function () {
	        return (this._display === content.ui.view.MINIMIZED) || (this._display === content.ui.view.HIDING) || (this._display === content.ui.view.HIDING);
	    };
	
	    this.query = function (path) {
	        if (path === '') {
	            return false;
	        }
	        return (this._element && this._element.node) ? utils.dom.query(path, this._element.node) : false;
	    };
	
	    this.queryAll = function (path) {
	        if (path === '') {
	            return false;
	        }
	        return (this._element && this._element.node) ? utils.dom.queryAll(path, this._element.node) : false;
	    };
	
	    this.listen = function (emitter, eventName, context, method) {
	        return utils.listen(this.query(emitter), eventName, context, method);
	    };
	
	    this.reset = function reset() {
	    };
	
	    this.style = function style(path, style) {
	        var domElement = this.query(path);
	        if (domElement) {
	            style = style.split(';');
	            var i = style.length;
	            while (i) {
	                var s = style[--i],
	                    v = s.split(':');
	                !!v[0] && (domElement.style[v[0]] = v[1]);
	            }
	            this.updateHeight();
	        }
	    };
	
	    this.text = function text(path, text, name) {
	        var domElement = this.query(path);
	        if (domElement) {
	            if (text === '') {
	                utils.dom.visible(domElement, false);
	            } else {
	                utils.dom.visible(domElement, true);
	                domElement.innerHTML = text;
	            }
	            this.updateHeight();
	        }
	    };
	
	    this.value = function (path, v) {
	        var domElement = this.query(path);
	        domElement && (domElement.value = v);
	    };
	
	    this.placeholder = function (path, v) {
	        var domElement = this.query(path);
	        domElement && (domElement.placeholder = v);
	    };
	
	    /**
	     * Dashboard only function.
	     * Function that will redefine the height of the widget in the dashboard.
	     * It has some pros and cons over the original used reflow functionality, listed below:
	     * Pro:
	     * - Clear what happens here.
	     * - Instant update
	     * - No bugs
	     * Con:
	     * - Animation breaks(because of the origin of this 'reflow'
	     */
	    this.dashboardReflow = function () {
	        // Set a timeout, this allows the dom to reflow before measuring the height of the mainContent...
	        var node = this._element.node,
	            mainContent = this._mainContent = this.query('.~MainContent');
	
	        if (mainContent) {
	            mainContent.style.height = 'auto';
	            setTimeout(
	                bind(this, function () {
	                    this._mainContentHeight = mainContent.offsetHeight;
	                    mainContent.style.height = this._mainContentHeight;
	                    mainContent.style.overflow = 'hidden';
	
	                    utils.dom.onTransitionEnd(mainContent, bind(this, this.onContentTransitionEnd));
	                    utils.dom.onTransitionEnd(node, bind(this, this.onMainTransitionEnd));
	                }),
	                1
	            );
	        } else {
	            utils.dom.onTransitionEnd(node, bind(this, this.onMainTransitionEnd));
	        }
	    }
	
	    /**
	     * @WARNING: Never stop or change the event!! To prevent conflicts with hotel websites... (the touchmove listener is attached to the document)
	     */
	    this.onTouchMove = function onTouchMove(event) {
	        this._touchMove = true;
	        (this._touchMoveTimeOut) && clearTimeout(this._touchMoveTimeOut);
	        this._touchMoveTimeOut = setTimeout(bind(this, function () {
	                this._touchMove = false;
	            }),
	            200);
	    };
	});
	
	content.ui.view.HIDDEN = 0;
	content.ui.view.HIDING = 1;
	content.ui.view.MINIMIZED = 2;
	content.ui.view.SHOWING = 3;
	content.ui.view.VISIBLE = 4;
	content.ui.view.RTLLANG = [
	    'ar',
	    'fa',
	    'he'
	];
	
	content.ui.view.ComponentView = Class(content.ui.view.View, function(supr) {
		this.init = function init(opts) {
			supr(this, this.init, [opts]);
	
			opts.components = [];
			var data 			= opts.data,
				componentOrder 	= (data.componentOrder || data.components || '').split(',');
			for (var i = 0; i < componentOrder.length; i++) {
				var name 		= componentOrder[i],
					component	= utils.vars.get(content.ui.component, name);
	
				if (component) {
					component._name = name;
					(componentOrder[i] !== '') && opts.components.push(component);
				}
			}
	
			this._includes 		= [];
			this._device 		= opts.device;
			this._components 	= [];
	
			this.initLang(opts);
			this.initComponents(opts); 		// Create the components, get a list of component views....
			this.initDOM(opts);				// Create the dom, this includes the dom for the components...
			this.initComponentViews(opts); 	// Initialize the component views, can only be done once the DOM has been created...
		};
	
		/**
		 * Create all components and get the view needed to render the component...
		**/
		this.initComponents = function(opts) {
			var components = opts.components;
			this._components = [];
			
			utils.vars.each(components, bind(this, function(_, i) {
				if (components[i]) {
					var component = new components[i]({view: this, engine: this._engine, name: components[i]._name, componentIndex: i});
					this._components.push(component);
					this._includes.push(component.getView());
				}
			}));
		};
	
		this.initComponentViews = function(opts) {
			var components = this._components;
			for (var i = 0; i < components.length; i++) {
				components[i].initView();
			}
		};
	
		this.initDOM = function initDOM(opts) {
			var data 			= this._data,
				domElement 		= this._element,
				wrapperElement 	= domElement.node,
				view 			= this._widget.getTemplateByName(opts.device || {name: 'Desktop'}, opts.viewName || 'widgetView'); // @todo widgetView is a non-existing viewClass, this could give problems
	
			if (!view) {
				domElement.node = {style: {}, childNodes: []}; // Create a mock element...
				wrapperElement.parentNode.removeChild(wrapperElement);
				return;
			}
			data.includes = this._includes;
			this._content = utils.clone(view);
			new DOMElements({domElement: this._content, parent: wrapperElement, data: data, context: this});
			supr(this, this.initDOM, arguments);
		};
	
		this.forEachComponent = function(callback) {
			var components = this._components;
			for (var i = 0, j = components.length; i < j; i++) {
				callback.call(this, components[i]);
			}
		};
	
		this.getLang = function() {
			return this._data.lang || {};
		};
	
		this.getAutoSize = function() {
			return true;
		};
	
		this.setData = function setData(key, value) {
			switch (key) {
				case 'componentOrder':
					var components = this._components,
						parentNode = null;
					for (var i = 0; i < components.length; i++) {
						var component 	= components[i],
							element 	= component.getComponentView();
						if (element) {
							parentNode = element.parentNode;
	
							if (parentNode) {
								parentNode.removeChild(element);
							}
						}
					}
					if (parentNode !== null) { // Check if there are components found...
						// Sort with a simple bubble sort...
						var list 		= value.split(','),
							lastChild 	= parentNode.childNodes[parentNode.childNodes.length - 1];
						for (var i = 0; i < list.length; i++) {
							for (var j = 0; j < components.length; j++) {
								var component = components[j];
								if (component.getName() === list[i]) {
									parentNode.insertBefore(component.getComponentView(), lastChild);
									break;
								}
							}
						}
					}
					break;
	
				default:
					this.forEachComponent(function(component) {
						component.setData(key, value);
					});
					return supr(this, this.setData, arguments);
			}
		};
	
		this.reset = function reset() {
			this.forEachComponent(function(component) {
				component.reset();
			});
		};
	
		this.text = function text(path, text, name) {
			this.forEachComponent(function(component) {
				component.text(path, text, name);
			});
			supr(this, this.text, arguments);
		};
	
	    this.style = function style(path, style) {
	        this.forEachComponent(function(component) {
	            component.style(path, style);
	        });
	        supr(this, this.style, arguments);
	    };
	
		this.onResize = function onResize() {
			if (this._device.name !== this._engine.getDevice().name) {
				return;
			}
			supr(this, this.onResize, arguments);
		};
	
		this._addComponent = function(component) {
			this._components.push(component);
		};
		// This is necessary for the alert-view parent call..
		this.onClickHide = function onClickHide(event) {
			supr(this, this.onClickHide, [event]);
		}
	});
	
	content.ui.view.AlertView = Class(content.ui.view.ComponentView, function(supr) {
		this.init = function init(opts) {
			var data = opts.data;
	
			data.width 		= 500;
			data.alignment 	= 4;
	
			supr(this, this.init, [opts]);
	
			utils.listen(this.query('.~AlertButton'), 'touchmove', this, this.onTouchMove);
			utils.listen(this.query('.~AlertButton'), 'click', this, this.onClickButton);
	
	        if (data.alertCloseWindow) {
				utils.listen(document, 'touchmove', this, this.onTouchMove);
				utils.listen(this._overlay, 'click', this, this.onClickOverlayHide);
	        }
	
			if (!this.getDevice().isMobile) {
				this._element.node.style.maxWidth = '80%';
			}
	
			this._engineConnectorPlugin = this._engine.getPlugin('EngineConnector');
			this._bookElement 			= this._engine.getBookElement();
			this._customBookButtonUrl 	= (this.getLang().customBookButtonUrl || '').toString();
		};
	
		this.setData = function setData(key, value) {
			switch (key) {
				case 'minimizable':
				case 'label':
				case 'alignment':
				case 'labelAlignment':
					return;
	
				default:
					supr(this, this.setData, [key, value]);
					break;
			}
		};
	
		this.onShow = function() {
			var style = this._element.node.style;
			if (this._engine.getDevice().isMobile) {
				style.bottom = '0px';
			} else {
				style.opacity = 1;
			}
		};
	
		this.onHide = function() {
			var style = this._element.node.style;
			if (this._engine.getDevice().isMobile) {
				style.bottom = -(this._height + this._titleHeight) + 'px';
	
			}
		};
	
		this.onClickButton = function onClickButton(event) {
			var data  	= this._data,
				engine  = this._engine;
	
			switch(data.alertButtonAction) {
				case 'close':
					supr(this, this.onClickHide, [event]);
					if (engine.getDemo()) {
						var plugin = this._engineConnectorPlugin;
						plugin && plugin.sendMessage({ // Keep string keys!
							'command': 'book'
						});
					}
					break;
				case 'component':
					this.emit('AlertButton', event);
					break;
			}
		};
	});
	
	content.ui.widget.Widget = Class(Emitter, function(supr) {
		this.init = function init(opts) {
			supr(this, this.init, arguments);
			this._opts 					= opts;
			this._id 					= opts.id;
			this._versions 				= opts.versions;
			for (var i in this._versions) {
				if ((typeof this._versions[i] === 'object') && !this._versions[i].perc) {
					this._versions[i].perc = 100;
				}
			}
	
			this._hash 					= opts.hash;
			this._type 					= opts.type;
			this._device 				= opts.device;
			this._engine 				= opts.engine;
			this._activeVersion			= opts.versions.activeVersion;
			this._data 					= this.getVersionData();
			this._templateIndex 		= opts.templateIndex;
			this._templates 			= opts.templates;
			this._templateByDevice 		= {};
			this._viewConstructors 		= opts.viewConstructors;
			this._viewByDevice 			= {};
			this._viewNames 			= []; // A list of views created, when switching device these views can be created for the new device...
			this._viewMain 				= opts.viewMain || Object.keys(this._viewConstructors)[0];
			this._display 				= content.ui.view.HIDDEN; // State of widget
			this._minimizedSessionKey 	= opts.minimizedSessionKey;
			this._startMinimized = this._engine.getStorage().getFromSession(this._hash + '_startMinimized', this._data.data.startMinimized);
			this._parent			 	= opts.parent || utils.dom.query('.~Viewport') || document.body;
			this._exitDone 				= this._engine.getStorage().getDoneForSession('exit_done_' + this._engine.getActiveLang() + '_' + this._id);
			this._trigger 				= this._data.trigger;
	        this._isShowable            = true;                       // Make widget visibility controlable. This property is read by widgetmanager::show
	
	        //  when to mark an exit as done
	        this._exitTriggerDoneMode   = (['per_lang_and_widget', 'per_website'].indexOf(this._data.data.exitTriggerDoneMode) != -1) ? this._data.data.exitTriggerDoneMode : 'per_lang_and_widget';
	
			this.dockWidget 			= null;
	
			this._isInstantiatingViewFor = null;
	
			// When one of these functions is called it is only applied to the main view...
			this._viewFunctionsMain = {
				'show': 			'function show()',
				'hide': 			'function hide()'
			};
	
			// These functions are applied to all views...
			this._viewFunctionsAll = {
				'reset': 			'function reset()',
				'command': 			'function command()',
				'style': 			'function style()',
				'text': 			'function text()',
				'value': 			'function value()',
				'placeholder': 		'function placeholder()',
				'data': 			'function setData()',
				'left': 			'function setLeft()',
				'right': 			'function setRight()',
				'top': 				'function setTop()',
				'bottom': 			'function setBottom()',
				'updatePosition': 	'function updatePosition()',
				'fullPosition'	: 	'function setFullPosition()',
			};
	
			opts.engine.on('ChangeDevice', bind(this, this.onChangeDevice));
	
	        if (this.isDockableWidget()) {
	            // @todo - Force dockable properties. Quick fix.
	            this.getData().data.minimizable = 1;
	        }
	
			this.initViews(opts);
	
			setTimeout(bind(this, this.initTrigger), 10); // Delay calling this until the subclass constructor has been executed...
	
	        this._engine.setGlobalDebug('widgets.' + this._id + '_' + this._hash, this);
		};
	
		this.initViews = function initViews(opts) {
			var templateIndex 		= opts.templateIndex,
				templateByDevice 	= this._templateByDevice;
	
			for (var i = 0; i < templateIndex.length; i++) {
				var template = this._templates[opts.templateIndex[i]];
				if (template) {
					for (var j = 0; j < template.c.length; j++) {
						var c = template.c[j];
						if (c.a && c.a.device) { // Check if there are attributes and if there's a device attribute....
							var devices = c.a.device.split(',');
							for (var k = 0; k < devices.length; k++) {
								var device = devices[k];
								if (!templateByDevice[device]) {
									templateByDevice[device] = {};
								}
								templateByDevice[device][c.a.name] = c;
							}
						}
					}
				}
			}
		};
	
		this.show = function show() {
			var engine 		= this._engine,
				analytics 	= engine.getAnalytics(),
				hash		= this._hash;
	
			this._display = content.ui.view.VISIBLE;
	
			// Don't track when in dashboard!
			if (!engine.getDemo()) {
				analytics.viewWidget(hash, this._activeVersion);
				// Register the widget without showing it!
				analytics.registerWidget(hash, this._activeVersion);
			}
	
			if (engine.getEnabled()) {
				if (engine.getDemo()) {
					this._startMinimized = false;
				}
	
	            if (!(this._startMinimized && !this.getData().data.minimizable && !this.getData().data.label)) {
	    			var view = this.getViewByDevice(engine.getDevice(), this._viewMain);
	    			if (this._startMinimized && this.getData().data.label) {
	                    view = this.getViewByDevice(engine.getDevice(), 'labelView');
	    			}
	
	    			if (view) {
	    			    view.updatePosition().show();
	                    this.emit('show', this);
	                }
	            }
			}
		};
	
		this.hide = function() {
			this._display = content.ui.view.HIDDEN;
	
			var view = this.getViewByDevice(engine.getDevice(), this._viewMain);
			if (view) {
				view.hide();
				this.emit('Hide', this);
			}
		};
	
		this.minimize = function() {
			var view = this.getViewByDevice(engine.getDevice(), this._viewMain);
			return view ? view.minimize() : false;
		};
	
		this.initTrigger = function initTrigger() {
			var engine 				= this._engine,
				opts 				= this._opts,
				trigger 			= this._trigger,
				api 				= engine.getApi(),
				startTime 			= engine.getStartTime(),
				storage 			= engine.getStorage(),
				activeLang 			= engine.getActiveLang(),
				widgetManager 		= engine.getWidgetManager(),
				doneSessionKey 		= 'done_' + activeLang + '_' + this._id,
				minimizedSessionKey = this._minimizedSessionKey,
				hotelSessionKey 	= engine.getAnalytics().getViewedHotelSessionKey(),
				doneExitSessionKey 	= 'exit_done_' + activeLang + '_' + this._id,
	            doneExitWebsiteKey  = 'exit_done_website' + api,
	            data                = this.getData().data;
	
			if (engine.getDemo()) {
				return;
			}
	
	        if (storage.getDoneForSession(doneExitWebsiteKey) && this._exitTriggerDoneMode === 'per_website') {
	            this._exitDone = true;
	        }
	
	        if (!trigger) {
				return;
			}
	
			/**
			 * Trigger always:
			 * - Always shows the widget
			 */
			if (trigger.always) {
				widgetManager.showWidget(this);
				return;
			}
	
			/**
			 * Trigger delay:
			 * - Always shows the widget after a specified delay time
			 */
			if (trigger.delay) {
				setTimeout(
					bind(this, function() {
						storage.setDoneForSession(doneSessionKey);
						widgetManager.showWidget(this);
						//!storage.getDoneForSession(doneSessionKey)
					}),
					(trigger.delayTime || 3) * 1000 // Trigger delay standard 3 seconds
				);
				return;
			}
	
			/**
			 * Trigger exit:
			 * - Shows widget when widget has not been shown before.
			 */
			if (trigger.exit) {
				engine.on(
					'ExitPage',
					bind(this, function() {
						if (!engine.getShortExit()) {
							if (!storage.getDoneForSession(doneExitSessionKey) && !this._exitDone) {
								var timePast = (Date.now() - startTime)/1000,
									showDelay = data.showDelay || 0;
	
								if (timePast >= showDelay) {
	                                if (this._exitTriggerDoneMode === 'per_website') {
	                                    storage.setDoneForSession(doneExitWebsiteKey);
	                                }
	
									storage.setDoneForSession(doneExitSessionKey);
									this._exitDone = true;
									widgetManager.showWidget(this);
								}
							}
						} else {
							// Dirty fix to make sure exit widget always shows..
							if (storage.getDoneForSession(minimizedSessionKey)) {
								storage.removeDoneForSession(minimizedSessionKey);
								this.setStartMinimized(false);
							}
	
							widgetManager.showWidget(this);
						}
					})
				);
				return;
			}
			/**
			 * Trigger referrer:
			 * - Shows widget when url matches specified url.
			 */
			if (trigger.referrer && utils.net.matchURI(document.referrer, trigger.referrerUrl.split(';'))) {
				widgetManager.showWidget(this);
				return;
			}
	
			/**
			 * Trigger showOnTag:
			 * - Shows widget when specified tag is found in window object.
			 */
			if (trigger.showOnTag && window[trigger.showOnTagName]) {
				widgetManager.showWidget(this);
				return;
			}
	
			/**
			 * Trigger showOnFirstSession:
			 * - Shows widget when it hasn't been shown yet.
			 */
			if (trigger.showOnFirstSession) {
				if(!storage.getDoneForSession(doneSessionKey)) {
					storage.setDoneForSession(doneSessionKey);
					widgetManager.showWidget(this);
					return;
				}
			}
	
			/**
			 * Trigger returning visitor
			 * - Show widget based on if visitor is returning
			 */
			if (trigger.showOnReturn) {
				if(storage.getDoneForSession(doneSessionKey)) {
					widgetManager.showWidget(this);
					return;
				} else {
					storage.setDoneForSession(doneSessionKey);
					return;
				}
			}
	
			/**
			 * Trigger showOnTimeFromStartSession:
			 * - Show widget on x time after
			 */
			if (trigger.showOnTimeFromStartSession) {
				if (storage.get(hotelSessionKey)) {
					var startTime 	= (Date.now() - storage.get(hotelSessionKey)),
						delay 		= trigger.showOnTimeFromStartSessionDelay * 1000;
						timeOut 	= delay - startTime;
	
					if (timeOut > 0) {
						setTimeout(
							bind(this, function() {
								storage.setDoneForSession(doneSessionKey);
								widgetManager.showWidget(this);
							}),
							timeOut
						);
					}
				}
				return;
			}
	
			/**
			 * Trigger IP-geolocation
			 * - Show widget based on IP geolocation
			 */
			if (trigger.showOnIpLocation) {
				utils.net.send(
					this._engine.getPriceComparisonServer() + '/v2/ipapi/country',
					bind(this, function(error, result) {
						if((result['status'] != 'success') || error) {
							return;
						}
	
						for (var i = 0; i < trigger.showOnIpLocationCode.length; i++) {
							if(trigger.showOnIpLocationCode[i].indexOf(result['countryCode']) != -1) {
								storage.setDoneForSession(doneSessionKey);
								widgetManager.showWidget(this);
							}
						}
					}),
					false
				);
				return;
			}
	
			/**
			 * Trigger input-trigger
			 * - Show widget when input with x name has y value
			 */
			if (trigger.showOnInputValue) {
				var inputField = document.querySelector("[name='" + trigger.inputName + "']"),
	                foundInputField = (inputField && inputField.value !== undefined),
	                inputValue = foundInputField ? inputField.value : null,
					desiredValue = trigger.inputValue,
					testMethod = trigger.inputCheck,
					getShow = function (testMethod, inputValue, desiredValue) {
						switch (testMethod) {
							case '!=':
								return inputValue != desiredValue;
								break;
	
							case '>':
								return inputValue > desiredValue;
								break;
	
							case '<':
								return inputValue < desiredValue;
								break;
	
							case '==':
							default:
								return inputValue == desiredValue;
								break;
						}
					},
					show;
	
	            if (foundInputField) {
	                // First check if value is already desired value..
	    			show = getShow(testMethod, inputValue, desiredValue);
	
	    			if (show) {
	    				storage.setDoneForSession(doneSessionKey);
	    				widgetManager.showWidget(this);
	    			} else { // If it is not the desired value, add event listener on change.
	    				inputField.addEventListener('change', bind(this, function(event) {
	    					var inputValue = event.target.value;
	
	    					show = getShow(testMethod, inputValue, desiredValue);
	    					if (show) {
	    						storage.setDoneForSession(doneSessionKey);
	    						widgetManager.showWidget(this);
	    					}
	    				}));
	    			}
	            }
	
				return;
			}
	
			/**
			 * Trigger audience-trigger
			 */
			if (trigger.showOnAudience) {
				var urls = trigger.triggerAudienceGroup.split(';'),
					visitedUrls = storage.get(api + '_urls'),
					show = 0;
				for (var i = visitedUrls.length - 1; i >= 0; i--) {
					var url = visitedUrls[i];
					if (utils.net.matchURI(url, urls)) {
						show++;
					}
				}
	
				if (trigger.triggerAudienceType == 'AND') {
					if (show == urls.length) {
						storage.setDoneForSession(doneSessionKey);
						widgetManager.showWidget(this);
					}
				} else {
					if (show != 0) {
						storage.setDoneForSession(doneSessionKey);
						widgetManager.showWidget(this);
					}
				}
				return;
			}
	
			/**
			 * Trigger showOnSpecificDays
			 */
			if (trigger.showOnSpecificDays) {
				var currentDate = new Date(),
					currentDay = currentDate.getDay(),
					triggerDays = trigger.triggerDays.split(';'),
					weekDays = {
						"SUNDAY" : 0,
						"MONDAY" : 1,
						"TUESDAY" : 2,
						"WEDNESDAY" : 3,
						"THURSDAY" : 4,
						"FRIDAY" : 5,
						"SATURDAY" : 6
					};
	
				for (var i = triggerDays.length - 1; i >= 0; i--) {
					var day = triggerDays[i];
					if (weekDays[day.toUpperCase()] == currentDay) {
						storage.setDoneForSession(doneSessionKey);
						widgetManager.showWidget(this);
					}
				}
			}
	
			/**
			 * Trigger showBetweenDates
			 */
			if (trigger.showBetweenDates) {
				var currentDate = Date.now(),
					dateFrom = Date.parse(trigger.triggerDateFrom),
					dateTo = Date.parse(trigger.triggerDateTo);
	
				if (currentDate > dateFrom && currentDate < dateTo) {
					storage.setDoneForSession(doneSessionKey);
					widgetManager.showWidget(this);
				}
			}
	
			/**
			 * Trigger soChildSelector
			 */
			if (trigger.soChildSelector) {
				var childSelector = document.getElementById('form-pref-numberofchildren'),
					babySelector = document.getElementById('form-pref-numberofbabies'),
					shouldShow = bind(this, function(event) {
						if (childSelector.value > 0 || babySelector.value > 0) {
							storage.setDoneForSession(doneSessionKey);
							widgetManager.showWidget(this);
						}
					});
				if (childSelector && babySelector) {
					if (childSelector.value > 0 || babySelector.value > 0) {
						storage.setDoneForSession(doneSessionKey);
						widgetManager.showWidget(this);
					} else {
						childSelector.addEventListener('change', shouldShow);
	
						babySelector.addEventListener('change', shouldShow);
					}
				}
			}
		};
	
		this.forEachDeviceView = function(callback) {
			var deviceName 		= this._engine.getDevice().name,
				viewByDevice 	= this._viewByDevice;
			if (!(deviceName in viewByDevice)) {
				viewByDevice[deviceName] = {};
			}
			for (var view in viewByDevice[deviceName]) {
				callback(view, viewByDevice[deviceName][view]);
			}
		};
	
		// Look into minifier,
		// (view in this._viewConstructors) ? view : this._viewMain; doesn't work
		this.func = function(name, args, view) {
			if (name === undefined) {
				return;
			}
			if (name in this._viewFunctionsMain) {
				utils.minifier.func(
					this.getViewByDevice(
						this._engine.getDevice(),
						(view in this._viewConstructors) ? (view) : this._viewMain
						//                                 ^^^^^^ don't remove "(" and ")", problem with JSMin...
					),
					this._viewFunctionsMain[name],
					args
				)();
			} else if (name in this._viewFunctionsAll) {
				this.forEachDeviceView(
					bind(this, function(viewName, view) {
						utils.minifier.func(view, this._viewFunctionsAll[name], args)();
					})
				);
			} else {
				console.warn('Unknown function "' + name + '".');
			}
		};
	
		this.getWidgetType = function() {
			return this._data.type;
		};
	
		this.getTemplateByName = function(device, viewName) {
			return this._templateByDevice[device.name][viewName];
		};
	
		this.getActiveVersion = function() {
			return this._activeVersion;
		};
	
		this.getVersionData = function() {
			return this._versions[this.getActiveVersion()];
		};
	
		/**
		 * getViewByDevice
		 * @WARNING: make sure that you do not invoke this method from a view that is
		 * currently being instantiated. Otherwise duplicate html elements will be created.
		 * @param	object	Device
		 * @param	string	Name of the view
		 * @return	object	View for the given device
		 */
		this.getViewByDevice = function(device, viewName) {
			var deviceName 		= device.name,
				viewByDevice 	= this._viewByDevice,
				viewAlias 		= viewName,
				deviceViewKey	= deviceName + '_' + viewAlias;
	
			if (!(deviceName in viewByDevice)) {
				viewByDevice[deviceName] = {};
			}
	
			if (!(viewAlias in viewByDevice[deviceName])) {
				var version = this.getVersionData(),
					data 	= utils.clone(version.data);
	
				data.style = version.style;
				var opts = {
						data: 		data,
						lang: 		version.lang,
						widget: 	this,
						viewName: 	viewName,
						device: 	device,
						engine: 	this._engine,
						parent:		this._parent,
					},
					view = new this._viewConstructors[viewName](opts);
	
				view.on('ChangeDisplay', this, this.onChangeDisplay);
				this._viewByDevice[deviceName][viewAlias] = view;
			}
	
			return this._viewByDevice[deviceName][viewAlias] || null;
		};
	
		this.getAllViewsByDeviceName = function(deviceName) {
			return this._viewByDevice[deviceName];
		};
	
		this.getViewIndexByName = function(viewName) {
			var device 				= this._engine.getDevice(),
				viewIndexByDevice 	= this._viewIndexByDevice[device.name];
	
			return (viewName in viewIndexByDevice) ? viewIndexByDevice[viewName] : null;
		};
	
		this.getViewByName = function(viewName) {
			return this._templates[this._template].c[this.getViewIndexByName(viewName)];
		};
	
		/**
		 * Returns widget templates
		 */
		this.getTemplates = function() {
			return this._templates;
		};
	
		this.getId = function() {
			return this._id;
		};
	
		this.getData = function() {
			return this._data;
		};
	
		/**
		 * Get widget display-state
		 */
		this.getDisplay = function() {
			return this._display;
		};
	
		this.getAlignment = function() {
			return this.getVersionData().data.alignment;
		};
	
		this.updatePosition = function() {
			this.forEachDeviceView(
				bind(this, function(viewName, view) {
					view.updatePosition();
				})
			);
		};
	
		/**
		 * Get minimzedSessionKey name(key used to check if the widget has been minimized by the user)
		 */
		this.getMinimizedSessionKey = function() {
			return this._minimizedSessionKey;
		};
	
		/**
		 * Get minimzedSessionKey name(key used to check if the widget has been minimized by the user)
		 */
		 this.getMinimized = function() {
			var storage 			= this._engine.getStorage(),
				minimizedSessionKey = this._minimizedSessionKey,
				minimized 			= storage.getDoneForSession(minimizedSessionKey);
	
			return minimized;
		};
	
		this.update = function() {
			this.updatePosition();
		};
	
		this.onChangeDisplay = function onChangeDisplay(display) {
			this._display = display;
			this._engine.emit('ChangeDisplay', display);
		};
	
		this.onChangeDevice = function onChangeDevice(device) {
			var viewNames 		= this._viewNames,
				viewByDevice 	= this._viewByDevice;
	
			for (var deviceName in viewByDevice) {
				var views = viewByDevice[deviceName];
				if (deviceName !== device.name) {
					for (var i in views) {
						var view = views[i];
						view.remove();
					}
					viewByDevice[deviceName] = {};
				}
			}
			if (!(device.name in viewByDevice)) {
				viewByDevice[device.name] = {};
			}
			for (var i = 0; i < viewNames.length; i++) {
				var viewName = viewNames[i];
				viewByDevice[device.name][viewName] = this.getViewByDevice(device, viewName);
			}
		};
	
		this.getStartMinimized = function() {
			return this._startMinimized;
		};
	
		this.setStartMinimized = function(value) {
	        this._engine.getStorage().setInSession(this._hash + '_startMinimized', value);
	        this._startMinimized = value;
		};
	
		this.getHash = function() {
			return this._hash;
		};
	
		this.getDevice = function() {
			return this._device;
		};
	
		this.setDockWidget = function(dockWidget) {
			this.dockWidget = dockWidget;
			return this;
		};
	
		this.getDockWidget = function() {
			return this.dockWidget;
		};
	
		this.isDockableWidget = function() {
			return this.getData().data.isDockableWidget == 1;
		};
	
		this.isDockWidget = function() {
			return this.getData().data.isDockWidget == 1;
		};
	
	    this.isShowable = function() {
	        return this._isShowable;
	    };
	
	    this.setIsShowable = function(isShowable) {
	        this._isShowable = isShowable;
	        return this;
	    };
	});
	/**
	 * A value object for positions
	 *  ___________
	 * | 0 | 1 | 2 |
	 * |___|___|___|
	 * | 3 | 4 | 5 |
	 * |___|___|___|
	 * | 6 | 7 | 8 |
	 * |___|___|___|
	 */
	content.ui.widget.Alignment = Class(function() {
		this.init = function init(alignment) {
			this.dictionary = {
				horizontal: {
					left: 	0,
					middle: 1,
					right: 	2
				},
				vertical: {
					top: 	0,
					middle: 1,
					bottom: 2
				}
			};
	
			this.reverseDictionary = {
				horizontal: ['left', 'middle', 'right'],
				vertical: 	['top', 'middle', 'bottom']
			};
	
			this._alignment = (alignment === undefined) ? 2 : parseInt(alignment, 10);
		};
	
		this.setAlignment = function(alignment) {
			this._alignment = parseInt(alignment, 10); // Make sure it's an integer!
		};
	
		this.isLeft = function() {
			return this._alignment % 3 === 0;
		};
	
		this.isHorMiddle = function() {
			return this._alignment % 3 === 1;
		};
	
		this.isRight = function() {
			return this._alignment % 3 === 2;
		};
	
		this.isTop = function() {
			return ~~(this._alignment / 3) === 0;
		};
	
		this.isVerMiddle = function() {
			return ~~(this._alignment / 3) === 1;
		};
	
		this.isBottom = function() {
			return ~~(this._alignment / 3) === 2;
		};
	
		this.isLeftBottom = function() {
			return this._alignment === 6;
		};
	
		this.isLeftTop = function() {
			return this._alignment === 0;
		};
	
		this.isRightTop = function() {
			return this._alignment === 2;
		};
	
		this.isRightBottom = function() {
			return this._alignment === 8;
		};
	
		this.getHorizontalByName = function() {
			return this.reverseDictionary.horizontal[this._alignment % 3];
		};
	
		this.getVerticalByName = function() {
			return this.reverseDictionary.vertical[~~(this._alignment / 3)];
		};
	
		this.isLeftOrRight = function() {
			return this.isLeft() || this.isRight();
		};
	
		this.isTopOrBottom = function() {
			return this.isTop() || this.isBottom();
		};
	
		this.isCompletelyCentered = function() {
			return this._alignment === 4;
		};
	
		this.isMidBottom = function() {
			return this._alignment === 7;
		};
	
		this.isMidTop = function() {
			return this._alignment === 1;
		};
	
		/**
		 * @param {string} name
		**/
		this.setHorizontalByName = function(name) {
			this._alignment = ~~(this._alignment / 3) * 3 + this.dictionary.horizontal[name];
		};
	
		/**
		 * @param {string} name
		**/
		this.setVerticalByName = function(name) {
			this._alignment = this.dictionary.vertical[name] * 3 + (this._alignment % 3);
		};
	
		this.getValue = function() {
			return this._alignment;
		};
	
		this.getDictionary = function() {
			return this._dictionary;
		};
	});
	
	// create namespaces
	var specs = specs || {};
	specs.specification = specs.specification || {};
	specs.specification = specs.specification.dom || {};
	
	/**
	 * AbstractSpecification
	 */
	specs.AbstractSpecification = Class(function() {
	    this._specName;
	
	    this.init = function init(config) {
	        this._lastFailedLog = null;
	        this._parentSpecification = null;
	
	        this._isInverted = (config && config.isInverted === true);
	
	        if (!this._specName) {
	            throw new Error('Spec name is required');
	        }
	    };
	
	    /**
	     * getSpecName
	     * @return  {string}    Get the name of the spec`
	     */
	    this.getSpecName = function() {
	        return this._specName;
	    };
	
		/**
		 * and
		 * @public
		 * @param	{mixed}		Specification to evaluate or an array with Specification instances
		 * @return	{object}	AndSpecification instance
		 */
	 	this.and = function(specification) {
			return new specs.AndSpecification(this, specification);
		};
	
		/**
		 * or
		 * @public
		 * @param	{mixed}		Specification to evaluate or an array with Specification instances
		 * @return	{object}	AndSpecification instance
		 */
		this.or = function(specification) {
			return new specs.OrSpecification(this, specification);
		};
	
		/**
		 * not
		 * @public
		 * @param	{mixed}		Specification to evaluate or an array with Specification instances
		 * @return	{object}	AndSpecification instance
		 */
		this.not = function() {
			throw 'Should be implemented';
			//return new specs.NotSpecification(this);
		};
	
		/**
		 * isSatisfiedBy
	     * @WARNING: implement the test logic in the _isSatisfiedBy method!!
	     * Override to implement extra functionality before or after the check...
		 * @public
		 */
		this.isSatisfiedBy = function() {
	        var args = Array.prototype.slice.call(arguments);
	        this._lastFailedLog = null;
	        var isSatisfied = this._isSatisfiedBy.apply(this, args);
	
	        if (this._isInverted) {
	            isSatisfied = !isSatisfied;
	        }
	
	        this._lastFailedLog = this._lastFailedLog || this._renderAndGetLastFailedLog(isSatisfied, args);
	        return isSatisfied;
		};
	
	    /**
	     * getLastFailedLog
	     * @return  {string}    The log message of the last check or null
	     */
	    this.getLastFailedLog = function() {
	        return typeof this._lastFailedLog == 'function' ? this._lastFailedLog() : this._lastFailedLog;
	    };
	
	    /**
	     * setParentSpecification
	     * Dont's use this method. It will be automatically invoke by the parent specification
	     * @param   {object}    The parent specification
	     * @return  {object}    Instance of this
	     */
	    this.setParentSpecification = function(specification) {
	        return this._parentSpecification = specification;
	    }
	
	    /**
	     * getParentSpecification
	     * @return   {object}    The parent specification instance or null
	     */
	    this.getParentSpecification = function() {
	        return this._parentSpecification;
	    }
	
	    /**
		 * _isSatisfiedBy
		 * Template method, should be implemented by sub class
		 * @public
		 */
		this._isSatisfiedBy = function() {
			throw '_isSatisfiedBy should be implemented by sub class';
		};
	
	    /**
	     * _renderAndGetLastFailedLog
	     */
	    this._renderAndGetLastFailedLog = function(isSatisfied, args) {
	        return isSatisfied ? null : utils.string.supplant('Check "{specName}" {isInvertedText}{specResultText}', {
	            'specName': this._specName,
	            'specResultText': isSatisfied ? 'PASSED' : 'FAILED',
	            'isInvertedText': this._isInverted ? '(INVERTED) ' : ''
	        });
	    };
	});
	
	/**
	 * initWithName
	 */
	specs.AbstractSpecification.initWithName = function(name) {
		var className;
	
		// try original name converted to camel case => 'is_after_the_date' OR 'IsAfterTheDate'
		className = utils.string.ucfirst(utils.string.camelize(name));
	
		// try original name prefixed with specs.specification
		// @TODO: fix => namespaces string should be parsed
		//className = (className) ? className : spec.specification[utils.string.ucfirst(utils.string.camelize(name))];
	
		if (!className) {
			throw 'Invalid Specification class: ' + className;
		}
	
		// @TODO: find out how to call apply with 'new' to pass extra arguments
		return new className(config);
	};
	
	/**
	 * AbstractSpecificationContainer
	 */
	specs.AbstractSpecificationContainer = Class(specs.AbstractSpecification, function(supr) {
	    this._lastFailedSpec = null;
	
		/**
		 * init
		 * @param	{mixed}		Specification 1 or an array with specifications. (If array, other arguments are ignored)
		 * @param	{object}	Specification 2
		 * @param	...
		 */
		this.init = function init(leftSpecification, rightSpecification) {
	        this._specifications = [];
	        this._initSpecifications(Array.prototype.slice.call(arguments));
			supr(this, this.init, arguments);
		};
	
	    this._initSpecifications = function(specifications) {
	        var i;
	        utils.vars.each(specifications, bind(this, function(value) {
	            if (utils.vars.isArray(value)) {
	                this._initSpecifications(value);
	            } else {
	                this._addSpecification(value);
	            }
	        }));
	    };
	
	    this._addSpecification = function(specification) {
	        specification.setParentSpecification(this);
	        this._specifications.push(specification);
	        return this;
	    };
	
	    /**
	     * _renderAndGetLastFailedLog
	     */
	    this._renderAndGetLastFailedLog = function(isSatisfied) {
	        return this._lastFailedSpec ? this._lastFailedSpec.getLastFailedLog() : null;
	    };
	});
	
	/**
	 * AndSpecification
	 */
	specs['AndSpecification'] = Class(specs.AbstractSpecificationContainer, function(supr) {
	    this._specName = 'AndSpecification';
	
		/**
		 * isSatiesfiedBy
		 * @param	{mixed}
		 * @param	...
		 * @return	{bool}	True if specification is satisfied, false if not
		 */
		this._isSatisfiedBy = function isSatisfiedBy() {
			var i,
				specification,
				isSatisfied = true;
	
			if (utils.vars.isArray(this._specifications)) {
				for (var i = 0; i < this._specifications.length; i++) {
					specification = this._specifications[i];
	
					isSatisfied = (isSatisfied && specification.isSatisfiedBy.apply(specification, arguments));
	
					if (!isSatisfied) {
		                this._lastFailedSpec = specification;
		                break;
					}
				}
			} else {
				for (i in this._specifications) {
					specification = this._specifications[i];
	
					isSatisfied = (isSatisfied && specification.isSatisfiedBy.apply(specification, arguments));
	
					if (!isSatisfied) {
		                this._lastFailedSpec = specification;
		                break;
					}
				}
			}
	
			return isSatisfied;
		};
	});
	
	/**
	 * OrSpecification
	 */
	specs['OrSpecification'] = Class(specs.AbstractSpecificationContainer, function(supr) {
	    this._specName = 'OrSpecification';
	
		/**
		 * isSatiesfiedBy
		 * @param	{mixed}
		 * @param	...
		 * @return	{bool}	True if specification is satisfied, false if not
		 */
		this._isSatisfiedBy = function isSatisfiedBy() {
			var i,
				specification,
	            hasSpecifications = (this._specifications.length > 0),
				isSatisfied = !hasSpecifications;
	
	        if (hasSpecifications) {
	            if (utils.vars.isArray(this._specifications)) {
	                for (var i = 0; i < this._specifications.length; i++) {
	                    specification = this._specifications[i];
	                    isSatisfied = specification.isSatisfiedBy.apply(specification, arguments);
	
	                    if (isSatisfied) {
	                        break;
	                    }
	                }
	            } else {
	                for (i in this._specifications) {
	                    specification = this._specifications[i];
	                    isSatisfied = specification.isSatisfiedBy.apply(specification, arguments);
	
	                    if (isSatisfied) {
	                        break;
	                    }
	                }
	            }
	        }
	
			return isSatisfied;
		};
	
	    /**
	     * _renderAndGetLastFailedLog
	     */
	    this._renderAndGetLastFailedLog = function(isSatisfied, args) {
	        return isSatisfied ? null : utils.string.supplant('Check "{specName}" "{specResultText}" - All specifications failed', {
	            'specName': this._specName,
	            'specResultText': isSatisfied ? 'PASSED' : 'FAILED'
	        });
	    };
	});
	
	/**
	 * PolicyConfig
	 * Clone of /addon/templates/javascript/specs/PolicyConfig
	 */
	specs.PolicyConfig = Class(function() {
		this.init = function(config) {
	        this._config = {};
	        this._mapping = {};
	
	        this._initConfig(config);
		};
	
	    this._initConfig = function(config) {
	        var group,
	            value,
	            addToConfigGroup = function(group, propertyKey, configItem, cfg, map) {
	                if (!(group in cfg)) {
	                    cfg[group] = {};
	                }
	                cfg[group][propertyKey] = configItem;
	                map[propertyKey] = cfg[group][propertyKey];
	            };
	
	        // equalize config
	        for (index in config) {
	            value = config[index];
	
	            if (typeof value == 'object' && utils.isArray(value)) {
	                group = index;
	
	                for (index2 in value) {
	                    value[index2].group = index;
	                    configItem = value[index2];
	                    addToConfigGroup(group, configItem.property, configItem, this._config, this._mapping);
	                }
	            } else if (typeof value == 'object') {
	                if (!value.group) {
	                    throw new Error('The property "group" is required for non-grouped config');
	                }
	
	                group = value.group;
	                configItem = value;
	                addToConfigGroup(group, configItem.property, configItem, this._config, this._mapping);
	            }
	        }
	    };
	
		this.getGroupedPropertyList = function() {
	        var propertyConfig  = this._config,
	            list = {},
	            listItem,
	            configItem,
	            configItemGroup,
	            index,
	            index2,
	            value,
	            unscopedProperty;
	
	        for (index in propertyConfig) {
	            configItemGroup = propertyConfig[index];
	
	            for (index2 in configItemGroup) {
	                configItem = configItemGroup[index2];
	
	                if (!list[configItem.group]) {
	                    list[configItem.group] = {};
	                }
	
	                unscopedProperty = configItem.property.indexOf('.') !== -1 ? configItem.property.split('.')[1] : configItem.property;
	                list[configItem.group][configItem.property] = configItem.name || utils.ucfirst(utils.replaceAll(utils.underscore(unscopedProperty), '_', ' '));
	            }
	        }
	
			return list;
		};
	
		this.getAvailablePlaceHolderList = function() {
			var config = this._config,
				placeholders = [],
				source,
				propertiesConfig,
				propertyName,
				propertyConfig;
	
			for (source in config) {
				propertiesConfig = config[source];
	
				for (propertyName in propertiesConfig) {
					propertyConfig = propertiesConfig[propertyName];
	
					placeholders.push(source + '.' + propertyName);
				}
			}
	
			return placeholders;
		};
	
		this.getPropertySpecifications = function(property, source) {
			var hasPropertyTheSource = property.indexOf('.') !== -1,
				specifications = null,
	            propertyConfigItem;
	
			if (hasPropertyTheSource) {
				var splitted = property.split('.');
				source = splitted[0];
				property = splitted[1];
			}
	
	        propertyConfigItem = this.getPropertConfigItem(source + '.' + property);
	
	        //console.log(propertyConfigItem);
	
			if (propertyConfigItem) {
				specifications = ('availableSpecifications' in propertyConfigItem) ? propertyConfigItem['availableSpecifications'] : null;
			}
	
	        //console.log('getPropertySpecifications -  property: ', property, ' | source: ', source, ' | config: ', this._config, ' | specifications: ', specifications);
	
			return specifications;
		};
	
	    this.getPropertConfigItem = function(property) {
	        return (property in this._mapping) ? this._mapping[property] : null;
	    };
	});
	
	/**
	 * createByConfig
	 * Helper method to create policy by config object
	 * @static
	 */
	specs.PolicyFactory = (function() {
	
	    /**
	     * generateItemInstanceByConfig
	     * Helper method to build recusively a composite (policy)
	     * of nested specs by config.
	     * @param   {mixed}     Array with specs [{ className: 'Equals', property: 'customval', equals: 'customval2' }],
	     *                      Array with policy [{ operator: 'AND', specs: [] }],
	     *                      Single spec { className: 'Equals', property: 'customval', equals: 'customval2' },
	     *                      Single policy { operator: 'AND', specs: [] }
	     * @return  {object}    Spec instance
	     */
	    var generateItemInstanceByConfig = function(itemConfig) {
	        var isSpec = ('className' in itemConfig),
	            isPolicy = !isSpec && ('specs' in itemConfig),
	            isPolicyArray = utils.vars.isArray(itemConfig) && typeof itemConfig[0] == 'object' && 'specs' in itemConfig[0],
	            isSpecsArray = !isPolicyArray && utils.vars.isArray(itemConfig) && typeof itemConfig[0] == 'object' && 'className' in itemConfig[0],
	            expectedType = expectedType || null,
	            spec,
	            itemInstance,
	            subItemInstance,
	            specInstance,
	            specInstances = [],
	            i;
	
	        if (isSpec) {
	            var specClass = utils.vars.get(specs.specification, itemConfig.className);
	
	            if (!specClass) {
	                throw 'Could not find specification class for: "' + itemConfig.className + '"';
	            }
	
	            if(itemConfig.refProperty){
	                itemConfig.property = itemConfig.refProperty;
	                delete itemConfig.refProperty;
	            }
	            itemInstance = new specClass(itemConfig);
	        }
	        else if (isPolicy || isSpecsArray) {
	            var operator = itemConfig['operator'] || 'AND',
	                specConfigs = isSpecsArray ? itemConfig : itemConfig['specs'] || [],
	                containerSpecClass = (operator === 'OR') ? specs['OrSpecification'] : specs['AndSpecification'];
	
	            utils.vars.each(specConfigs, bind(this, function(value) {
	                specInstance = generateItemInstanceByConfig(value);
	
	                if (specInstance) {
		                specInstances.push(specInstance);
		            }
	
	            }));
	        }
	        else if (isPolicyArray) {
	            var containerSpecClass = specs['AndSpecification'];
	
	            utils.vars.each(itemConfig, bind(this, function(value) {
	                specInstance = generateItemInstanceByConfig(value);
	
	                if (specInstance) {
	                   specInstances.push(specInstance);
	                }
	            }));
	        }
	
	        if (specInstances.length > 0) {
	            itemInstance = new containerSpecClass(specInstances);
	        }
	
	        return itemInstance;
	    };
	
	    return {
	        'createByConfig': function(config) {
	            return generateItemInstanceByConfig(config);
	        }
	    };
	})();
	
	// create namespaces
	var specs = specs || {};
	specs.specification = specs.specification || {};
	
	/**
	 * PropertySpecification
	 * Specification with reusable helper functionality.
	 * Normally this class should be used as base class for
	 * Specifications instead of the AbstractSpecificaton.
	 * This class is an abstract implementation and should be
	 * extended.
	 */
	specs.PropertySpecification = Class(specs.AbstractSpecification, function(supr) {
		/**
		 * Array with required properties for the init config object.
		 * @cfg
		 * @protected
		 */
		this._requiredConfigProperties = ['property'];
	
		/**
		 * init
		 * @public
		 * @param	object	Config object with at least the properties in this._requiredProperties.
	     *                  The config can contain additionalProperties with an array of additional properties.
		 */
		this.init = function init(config) {
	         this['additionalProperties'] = {};
	        this.initConfig(config);
			supr(this, this.init, arguments);
		};
	
		/**
		 * setProperty
	     * The data, in the isSatisfiedBy data param object, property...
		 * @public
		 * @param	{string}	The property
		 * @return	{object}	PropertySpecification instance (this)
		 */
		this.setProperty = function setProperty(property) {
			this['property'] = property;
		};
	
		/**
		 * getProperty
	     * The data, in the isSatisfiedBy data param object, property...
		 * @public
		 * @retrun	{string}	The property
		 */
		this.getProperty = function() {
			return this['property'];
		};
	
	    /**
	     * setAdditionalProperties
	     * The data property keys in the isSatisfiedBy data param object...
	     * The most property specifications need a single property to test against.
	     * In some cases a specification need more than one property.
	     * @TODO: refactor to object to create a mapping between the internal and external.
	     *        Otherwise it will not be possible to dynamically referer to an external property internally
	     */
	    this.setAdditionalProperties = function(properties) {
	        this['additionalProperties'] = properties;
	    };
	
	    this.getAdditionalProperties = function() {
	        return this['additionalProperties'];
	    };
	
		/**
		 * Private/protected methods
		 */
	
		/**
		 * getRequiredConfigProperties
	     * The constructor config properties...
		 * @protected
		 * @param	array
		 */
		this.getRequiredConfigProperties = function() {
			return this._requiredConfigProperties;
		};
	
		/**
	 	 * initConfig
	 	 * Helper method to parse and handle config
	 	 * @private
	 	 * @param	mixed	This method takes the same arguments as this.init method
	 	 * @return	void
	 	 */
	 	this.initConfig = function initConfig(config) {
			var key;
	
			this.validateConfig(config);
			this.setProperty(config['property']);
	
	        if ('additionalProperties' in config) {
	            this.setAdditionalProperties(config['additionalProperties']);
	        }
	
			for (key in config) {
				if (['property'].indexOf(key) === -1) {
					this[key] = config[key];
				}
			}
	 	};
	
		/**
		 * validateConfig
		 * @param	object	Config object
		 * @return	bool	True if successful, false if not. (Will normally throw an error)
		 * @throws          Error
		 */
		this.validateConfig = function(config) {
			var key,
				required = this.getRequiredConfigProperties(),
				success = true;
	
	        utils.vars.each(required, bind(this, function(key) {
	            if (!(key in config)) {
	                throw key + ' is a required property.';
	            }
	        }));
	
	
			return success;
		};
	
		/**
		 * resolveTestValue
		 * Helper method to resolve the value, to test against, from the
		 * given isSatisfiedBy arguments.
		 * @protected
		 * @param	{mixed}		Single value to test against or an object
	     * @param   {string}    Optional the property name of the value to resolve. this['property'] will
	     *                      be used as the default property name. If a propertyName is given, it will first try
	     *                      to find it in the additional properties and return the value by the mapped property...
	     *                      __DATA__ is reserved and will return the data object given to the policy
		 */
		this.resolveTestValue = function resolveTestValue(data, propertyName) {
	        if (propertyName === '__DATA__') {
	            return data;
	        }
	        propertyName = !!propertyName ? (this['additionalProperties'] && propertyName in this['additionalProperties'] ? this['additionalProperties'][propertyName] : propertyName) : this['property'] || '';
	        //var r = (typeof data == 'object') ? ((propertyName in this && this[propertyName] in data) ? data[this[propertyName]] : null) : data;
	
	        return (typeof data == 'object') ? (propertyName in data ? data[propertyName] : null) : data;
		};
	
	    this.resolveAllTestValues = function(data) {
	        var result = {};
	
	        if (typeof data == 'object') {
	            var property = ('property' in this) ? this['property'] : null,
	                additionalProperties = ('additionalProperties' in this) ? Object.keys(this['additionalProperties']) : [],
	                allProperties = property ? [property].concat(additionalProperties) : additionalProperties,
	                index,
	                key;
	
				utils.vars.each(allProperties, bind(this, function(_, index) {
					key = allProperties[index];
	
					if (!!key && key in this['additionalProperties']) {
						key = this['additionalProperties'][key];
					}
	
					result[key] = (key in data) ? data[key] : null;
				}));
	        }
	
	        return result;
	    };
	
	    /**
	     * _renderAndGetLastFailedLog
	     * Override for property specification implementation
	     * @param   {bool}      isSatisfied
	     * @param   {array}     array with args passed to the isSatisfiedBy method
	     * @return  {string}
	     */
	    this._renderAndGetLastFailedLog = function(isSatisfied, args) {
	        if (!isSatisfied) {
	            var index,
	                key,
	    			requiredConfig = this.getRequiredConfigProperties(),
	                tmpTestData = args[0] && typeof args[0] == 'object' ? this.resolveAllTestValues(args[0]) : [],
	                testData = {},
	                config = {};
	
				utils.vars.each(requiredConfig, bind(this, function(key) {
					if (key !== 'property') {
						config[key] = this[key];
					}
				}));
	
	            // fix potentional additional property mappings
				utils.vars.each(tmpTestData, bind(this, function(_, key) {
					testData[(this['additionalProperties'] && key in this['additionalProperties'] ? this['additionalProperties'][key] : key)] = tmpTestData[key];
				}));
	
	            return utils.string.supplant('Specification "{specName}" "{specResultText}" with config: {config} and testData: {data}', {
	               'specName': this._specName,
	               'specResultText': isSatisfied ? 'PASSED' : 'FAILED',
	               'property': this['property'],
	               'config': (Object.keys(config).length > 0) ? JSON.stringify(config) : '<no config>',
	               'data': testData ? JSON.stringify(testData) : '<no data>',
	               'isInvertedText': this._isInverted ? '(INVERTED) ' : ''
	           });
	        }
	
	        return null;
	    };
	});
	
	/**
	 * Contains
	 */
	specs.specification['Contains'] = Class(specs.PropertySpecification, function(supr) {
	    this._specName = 'Contains';
	
	    this._requiredConfigProperties = ['property', 'contains'];
	
		this._isSatisfiedBy = function(data) {
			var testValue = this.resolveTestValue(data);
			return testValue && testValue.indexOf && testValue.indexOf(this['contains']) != -1;
		};
	});
	
	/**
	 * ContainsNot
	 */
	specs.specification['ContainsNot'] = Class(specs.PropertySpecification, function(supr) {
	    this._specName = 'ContainsNot';
	
	    this._requiredConfigProperties = ['property', 'containsNot'];
	
	    this._isSatisfiedBy = function(data) {
	        var testValue = this.resolveTestValue(data);
	        return testValue && testValue.indexOf && testValue.indexOf(this['containsNot']) == -1;
	    };
	});
	
	/**
	 * ListItemContains
	 */
	specs.specification['ListItemContains'] = Class(specs.PropertySpecification, function(supr) {
	    this._specName = 'ListItemContains';
	
	    this._requiredConfigProperties = ['property', 'contains'];
	
		this._isSatisfiedBy = function(data) {
			var testValue = this.resolveTestValue(data),
	            isSatisfied = false,
	            i;
	
	        if (utils.vars.isArray(testValue)) {
	            testValue && testValue.indexOf && testValue.indexOf(this['contains']) != -1;
	
	            for (i in testValue) {
	                if (testValue[i] && 'indexOf' in testValue[i] && testValue[i].indexOf(this['contains']) != -1) {
	                    isSatisfied = true;
	                    break;
	                }
	            }
	        }
	
	        return isSatisfied;
		};
	});
	
	/**
	 * Equals
	 */
	specs.specification['Equals'] = Class(specs.PropertySpecification, function(supr) {
	    this._specName = 'Equals';
	
	    this._requiredConfigProperties = ['property', 'equals'];
	
		this._isSatisfiedBy = function(data) {
			var testValue = this.resolveTestValue(data);
	
			// Always make sure numbers are handled as what they are, numbers.
			(utils.vars.isNumber(this['equals'])) && (this['equals'] = Number(this['equals']));
			(utils.vars.isNumber(testValue)) && (testValue = Number(testValue));
	
			return (testValue === this['equals']);
		};
	});
	
	/**
	 * Not Equals
	 */
	specs.specification['NotEquals'] = Class(specs.PropertySpecification, function(supr) {
	    this._specName = 'NotEquals';
	
	    this._requiredConfigProperties = ['property', 'notEquals'];
	
		this._isSatisfiedBy = function(data) {
			var testValue = this.resolveTestValue(data);
			return (testValue !== this['notEquals']);
		};
	});
	
	/**
	 * ListItemEquals
	 */
	specs.specification['ListItemEquals'] = Class(specs.PropertySpecification, function(supr) {
	    this._specName = 'ListItemEquals';
	
	    this._requiredConfigProperties = ['property', 'equals'];
	
		this._isSatisfiedBy = function(data) {
			var testValue = this.resolveTestValue(data),
	            isSatisfied = false,
	            i;
	
	        if (utils.vars.isArray(testValue)) {
	           // testValue && testValue.indexOf && testValue.indexOf(this['contains']) != -1;
	
	            for (i in testValue) {
	                if (testValue[i] && testValue[i] === this['equals']) {
	                    isSatisfied = true;
	                    break;
	                }
	            }
	        }
	        return isSatisfied;
		};
	});
	
	/**
	 * ListItemIsOnOf
	 */
	specs.specification['ListItemIsOneOf'] = Class(specs.PropertySpecification, function(supr) {
	    this._specName = 'ListItemIsOneOf';
	
	    this._requiredConfigProperties = ['property', 'items'];
	
	    this._isSatisfiedBy = function(data) {
	        var testValue = this.resolveTestValue(data),
	            isSatisfied = false,
	            i,y;
	
	        if (utils.vars.isArray(testValue)) {
	            testValue && testValue.indexOf && testValue.indexOf(this['contains']) != -1;
	            var items = this['items'].split(';');
	            for (i in testValue) {
	                for(y in items){
	                    if (testValue[i] && testValue[i] === items[y]) {
	                        isSatisfied = true;
	                        break;
	                    }
	                }
	            }
	        }
	        return isSatisfied;
	    };
	});
	
	/**
	 * IsOneOf
	 */
	specs.specification['IsOneOf'] = Class(specs.PropertySpecification, function (supr) {
	    this._specName = 'IsOneOf';
	
	    this._requiredConfigProperties = ['property', 'items'];
	
	    this._isSatisfiedBy = function (data) {
	        var testValue = this.resolveTestValue(data),
	            isSatisfied = false,
	            i, y;
	            var items = this['items'].split(';');
	
	        // // If testValue is null or undefined then return false
	        if(!testValue) {
	            return isSatisfied;
	        }
	
	        for (y in items) {
	                if (testValue.indexOf(items[y].trim()) !== -1) {
	                    isSatisfied = true;
	                    break;
	                }
	            }
	        return isSatisfied;
	    };
	});
	
	/**
	 * IsBetweenDates
	 * Checks if the given date is between two dates
	 */
	specs.specification['IsBetweenDates'] = Class(specs.PropertySpecification, function(supr) {
	    this._specName = 'IsBetweenDates';
	
	    this._requiredConfigProperties = ['property', 'from', 'to'];
	
	    this.initConfig = function initConfig(config) {
	        supr(this, this.initConfig, arguments);
	        this['dateFormat'] = config['dateFormat'] || 'D/M/Y';
	        
	        if (!utils.date.isParseableOrDateInstance(this['from']) || !utils.date.isParseableOrDateInstance(this['to'])) {
	            console.error('Invalid date in ', this['from'], ' or ', this['to']);
	        }
	        
	        this['from'] = utils.date.parse(this['from'], this['dateFormat']);
	        this['to'] = utils.date.parse(this['to'], this['dateFormat']);
	    };
	
	    this._isSatisfiedBy = function(data) {
	        var isSatisfied = false,
	            testValue = this.resolveTestValue(data, 'property'),
	            testDate = testValue && utils.date.isParseableOrDateInstance(testValue) ? utils.date.parse(testValue, this['dateFormat']) : null;
	
	        if (testDate && this['from'] && this['to']) {
	            isSatisfied = (testDate.getTime() >= this['from'].getTime() && testDate.getTime() <= this['to'].getTime());
	        }
	        return isSatisfied;
	    };
	});
	
	/**
	 * IsAfterTheDateSpecification
	 */
	specs.specification['IsAfterTheDate'] = Class(specs.PropertySpecification, function(supr) {
	    this._specName = 'IsAfterTheDate';
	
	    this._requiredConfigProperties = ['property', 'date'];
	
		this.initConfig = function initConfig(config) {
			supr(this, this.initConfig, arguments);
			this['dateFormat'] = config['dateFormat'] || 'D/M/Y';
		};
	
		this._isSatisfiedBy = function(data) {
			var isSatisFied = false,
				testValue = this.resolveTestValue(data);
	
			if (utils.date.isParseableOrDateInstance(testValue) && utils.date.isParseableOrDateInstance(this['date'])) {
				try {
					isSatisFied = utils.date.parse(this['date'], this['dateFormat']) < utils.date.parse(testValue, this['dateFormat']);
				} catch(error) {
					//console.warning('Invalid date value: ', this.resolveTestValue(data));
				}
			}
	
			return isSatisFied;
		};
	});
	
	/**
	 * IsBeforeTheDateSpecification
	 */
	specs.specification['IsBeforeTheDate'] = Class(specs.PropertySpecification, function (supr) {
	    this._specName = 'IsBeforeTheDate';
	
	    this._requiredConfigProperties = ['property', 'date'];
	
	    this.initConfig = function initConfig(config) {
	        supr(this, this.initConfig, arguments);
	        this['dateFormat'] = config['dateFormat'] || 'D/M/Y';
	    };
	
	    this._isSatisfiedBy = function (data) {
	        var isSatisFied = false,
	            testValue = this.resolveTestValue(data);
	
	        if (utils.date.isParseableOrDateInstance(testValue) && utils.date.isParseableOrDateInstance(this['date'])) {
	            try {
	                isSatisFied = utils.date.parse(testValue, this['dateFormat']) < utils.date.parse(this['date'], this['dateFormat']);
	            } catch (error) {
	                //console.warning('Invalid date value: ', this.resolveTestValue(data));
	            }
	        }
	        return isSatisFied;
	    };
	});
	
	/**
	 * IsTheDate
	 */
	specs.specification['IsTheDate'] = Class(specs.PropertySpecification, function(supr) {
	    this._specName = 'IsTheDate';
	
	    this._requiredConfigProperties = ['property', 'date'];
	
		this.initConfig = function initConfig(config) {
			supr(this, this.initConfig, arguments);
			this['dateFormat'] = config['dateFormat'] || 'D/M/Y';
		};
	
		this._isSatisfiedBy = function(data) {
			var isSatisFied = false,
				testValue = this.resolveTestValue(data),
				leftDate,
				rightDate;
	
			if (utils.date.isParseableOrDateInstance(testValue) && utils.date.isParseableOrDateInstance(this['date'])) {
	            try {
					leftDate = utils.date.parse(this['date'], this['dateFormat']);
					rightDate = utils.date.parse(testValue, this['dateFormat']);
					isSatisFied = leftDate.getDate() === rightDate.getDate() && leftDate.getMonth() === rightDate.getMonth() && leftDate.getFullYear() === rightDate.getFullYear();
				} catch(error) {
					//console.error('Invalid date value: ', this.resolveTestValue(data));
				}
			}
	
			return isSatisFied;
		};
	});
	
	/**
	 * IsAfterDateDiff
	 */
	specs.specification['IsAfterDateDiff'] = Class(specs.PropertySpecification, function(supr) {
	    this._specName = 'IsAfterDateDiff';
	
	    this._requiredConfigProperties = ['property', 'dayDiff', 'monthDiff', 'yearDiff'];
	
		this.initConfig = function initConfig(config) {
			supr(this, this.initConfig, arguments);
			this['dateFormat'] = config['dateFormat'] || 'D/M/Y';
	
	        this['dayDiff'] = Number(this['dayDiff']);
	        this['monthDiff'] = Number(this['monthDiff']);
	        this['yearDiff'] = Number(this['yearDiff']);
		};
	
		this._isSatisfiedBy = function(data) {
			var isSatisfied = false,
				testValue = this.resolveTestValue(data),
	            testDate,
	            now = new Date();
	
	        if (utils.date.isParseableOrDateInstance(testValue)) {
	            try {
	                testDate = utils.date.parse(testValue, this['dateFormat']);
	
	                if (this['dayDiff']) {
	                    testDate.setDate(testDate.getDate() + this['dayDiff']);
	                }
	
	                if (this['monthDiff']) {
	                    testDate.setMonth(testDate.getMonth() + this['monthDiff']);
	                }
	
	                if (this['yearDiff']) {
	                    testDate.setFullYear(testDate.getFullYear() + this['yearDiff']);
	                }
	
	                isSatisfied = now > testDate;
	            } catch (error) {}
	        }
	
			return isSatisfied;
		};
	});
	
	/**
	 * IsAfterSecondsDiff
	 */
	specs.specification['IsAfterSecondsDiff'] = Class(specs.PropertySpecification, function(supr) {
	    this._specName = 'IsAfterSecondsDiff';
	
	    this._requiredConfigProperties = ['property', 'secDiff'];
	
		this.initConfig = function initConfig(config) {
			supr(this, this.initConfig, arguments);
			this['dateFormat'] = config['dateFormat'] || 'D/M/Y';
	        this['secDiff'] = Number(this['secDiff']);
		};
	
		this._isSatisfiedBy = function(data) {
			var isSatisfied = false,
				testValue = this.resolveTestValue(data),
	            testDate,
	            now = new Date();
	
	        if (utils.date.isParseableOrDateInstance(testValue)) {
	            try {
	                testDate = utils.date.parse(testValue, this['dateFormat']);
	
	                if (this['secDiff']) {
	                    testDate.setSeconds(testDate.getSeconds() + this['secDiff']);
	                }
	                isSatisfied = now > testDate;
	            } catch (error) {}
	        }
	
			return isSatisfied;
		};
	});
	
	/**
	 * IsAfterDayDiff
	 */
	specs.specification['IsAfterDayDiff'] = Class(specs.PropertySpecification, function(supr) {
	    this._specName = 'IsAfterDayDiff';
	
	    this._requiredConfigProperties = ['property', 'dayDiff'];
	
	    this.initConfig = function initConfig(config) {
	        supr(this, this.initConfig, arguments);
	        this['dateFormat'] = config['dateFormat'] || 'D/M/Y';
	        this['dayDiff'] = Number(this['dayDiff']);
	    };
	
	    this._isSatisfiedBy = function(data) {
	        var isSatisfied = false,
	            testValue = this.resolveTestValue(data),
	            testDate,
	            now = new Date();
	
	        if (utils.date.isParseableOrDateInstance(testValue)) {
	            try {
	                testDate = utils.date.parse(testValue, this['dateFormat']);
	
	                if (this['dayDiff']) {
	                    testDate.setDate(testDate.getDate() + this['dayDiff']);
	                }
	                isSatisfied = now > testDate;
	            } catch (error) {}
	        }
	        return isSatisfied;
	    };
	});
	/**
	 * IsBeforeDayDiff
	 */
	specs.specification['IsBeforeDayDiff'] = Class(specs.PropertySpecification, function(supr) {
	    this._specName = 'IsBeforeDayDiff';
	
	    this._requiredConfigProperties = ['property', 'dayDiff'];
	
	    this.initConfig = function initConfig(config) {
	        supr(this, this.initConfig, arguments);
	        this['dateFormat'] = config['dateFormat'] || 'D/M/Y';
	        this['dayDiff'] = Number(this['dayDiff']);
	    };
	
	    this._isSatisfiedBy = function(data) {
	        var isSatisfied = false,
	            testValue = this.resolveTestValue(data),
	            testDate,
	            now = new Date();
	
	        if (utils.date.isParseableOrDateInstance(testValue)) {
	            try {
	                testDate = utils.date.parse(testValue, this['dateFormat']);
	
	                if (this['dayDiff']) {
	                    testDate.setDate(testDate.getDate() + this['dayDiff']);
	                }
	                isSatisfied = now < testDate;
	            } catch (error) {}
	        }
	
	        return isSatisfied;
	    };
	});
	/**
	 * IsBeforeSecondsDiff
	 */
	specs.specification['IsBeforeSecondsDiff'] = Class(specs.PropertySpecification, function(supr) {
	    this._specName = 'IsBeforeSecondsDiff';
	
	    this._requiredConfigProperties = ['property', 'secDiff'];
	
		this.initConfig = function initConfig(config) {
			supr(this, this.initConfig, arguments);
			this['dateFormat'] = config['dateFormat'] || 'D/M/Y';
	        this['secDiff'] = Number(this['secDiff']);
		};
	
		this._isSatisfiedBy = function(data) {
			var isSatisfied = false,
				testValue = this.resolveTestValue(data),
	            testDate,
	            now = new Date();
	
	        if (utils.date.isParseableOrDateInstance(testValue)) {
	            try {
	                testDate = utils.date.parse(testValue, this['dateFormat']);
	
	                if (this['secDiff']) {
	                    testDate.setSeconds(testDate.getSeconds() + this['secDiff']);
	                }
	
	                isSatisfied = now < testDate;
	            } catch (error) {}
	        }
			return isSatisfied;
		};
	});
	
	/**
	 * IsAfterTimeDiff
	 */
	specs.specification['IsAfterTimeDiff'] = Class(specs.PropertySpecification, function(supr) {
	    this._specName = 'IsAfterTimeDiff';
	
	    this._requiredConfigProperties = ['property', 'secDiff', 'minDiff', 'hourDiff'];
	
		this.initConfig = function initConfig(config) {
			supr(this, this.initConfig, arguments);
			this['dateFormat'] = config['dateFormat'] || 'D/M/Y';
	
	        this['secDiff'] = Number(this['secDiff']);
	        this['minDiff'] = Number(this['minDiff']);
	        this['hourDiff'] = Number(this['hourDiff']);
		};
	
		this._isSatisfiedBy = function(data) {
			var isSatisfied = false,
				testValue = this.resolveTestValue(data),
	            testDate,
	            now = new Date();
	
	        if (utils.date.isParseableOrDateInstance(testValue)) {
	            try {
	                testDate = utils.date.parse(testValue, this['dateFormat']);
	
	                if (this['secDiff']) {
	                    testDate.setSeconds(testDate.getSeconds() + this['secDiff']);
	                }
	
	                if (this['minDiff']) {
	                    testDate.setMinutes(testDate.getMinutes() + this['minDiff']);
	                }
	
	                if (this['hourDiff']) {
	                    testDate.setHours(testDate.getHours() + this['hourDiff']);
	                }
	                isSatisfied = now > testDate;
	            } catch (error) {}
	        }
	
			return isSatisfied;
		};
	});
	
	/**
	 * IsBeforeTimeDiff
	 */
	specs.specification['IsBeforeTimeDiff'] = Class(specs.PropertySpecification, function(supr) {
	    this._specName = 'IsBeforeTimeDiff';
	
	    this._requiredConfigProperties = ['property', 'secDiff', 'minDiff', 'hourDiff'];
	
		this.initConfig = function initConfig(config) {
			supr(this, this.initConfig, arguments);
			this['dateFormat'] = config['dateFormat'] || 'D/M/Y';
	
	        this['secDiff'] = Number(this['secDiff']);
	        this['minDiff'] = Number(this['minDiff']);
	        this['hourDiff'] = Number(this['hourDiff']);
		};
	
		this._isSatisfiedBy = function(data) {
			var isSatisfied = false,
				testValue = this.resolveTestValue(data),
	            testDate,
	            now = new Date();
	
	        if (utils.date.isParseableOrDateInstance(testValue)) {
	            try {
	                testDate = utils.date.parse(testValue, this['dateFormat']);
	
	                if (this['secDiff']) {
	                    testDate.setSeconds(testDate.getSeconds() + this['secDiff']);
	                }
	
	                if (this['minDiff']) {
	                    testDate.setMinutes(testDate.getMinutes() + this['minDiff']);
	                }
	
	                if (this['hourDiff']) {
	                    testDate.setHours(testDate.getHours() + this['hourDiff']);
	                }
	
	                isSatisfied = now > testDate;
	            } catch (error) {}
	        }
	
			return isSatisfied;
		};
	});
	
	/**
	 * HasDayInDateRange
	 * Checks if the given day is a day between to given dates
	 * @WARNING: this spec is not tested!
	 */
	specs.specification['HasDayInDateRange'] = Class(specs.PropertySpecification, function(supr) {
	    this._specName = 'HasDayInDateRange';
	
	    this._requiredConfigProperties = ['property', 'toProperty', 'day'];
	
		this.initConfig = function initConfig(config) {
			supr(this, this.initConfig, arguments);
			this['dateFormat'] = config['dateFormat'] || 'D/M/Y';
	        this['day'] = Number(this['day']);
		};
	
		this._isSatisfiedBy = function(data) {
			var isSatisfied = false,
				fromTestValue = this.resolveTestValue(data, 'property'),
	            toTestValue = this.resolveTestValue(data, 'toProperty'),
	            fromDate,
	            toDate,
	            i,
	            testDate;
	
			if (utils.date.isParseableOrDateInstance(fromTestValue) && utils.date.isParseableOrDateInstance(toTestValue) && this['day'] >= 0 && this['day'] <= 6) {
	            try {
	                fromDate = utils.date.parse(fromTestValue, this['dateFormat']);
	                fromDate.setHours(0, 0, 0, 0);
	                toDate = utils.date.parse(toTestValue, this['dateFormat']);
	                toDate.setHours(0, 0, 0, 0);
	
	                if (fromDate < toDate) {
	                    var tmpDate = toDate;
	                    toDate = fromDate;
	                    fromDate = tmpDate;
	                }
	
	                testDate = new Date(fromDate.getFullYear(), fromDate.getMonth(), fromDate.getDate(), 0, 0, 0, 0);
	
	                for(i = 0; i <= 6; i++) {
	                    if (testDate.getDay() === this['day']) {
	                        isSatisfied = true;
	                        break;
	                    } else if(testDate <= toDate) {
	                        break;
	                    }
	
	                    testDate.setDate(testDate.getDate() + 1);
	                }
				} catch(error) {}
			}
	
			return isSatisfied;
		};
	});
	
	/**
	 * Min
	 */
	specs.specification['Min'] = Class(specs.PropertySpecification, function(supr) {
	    this._specName = 'Min';
	
	    this._requiredConfigProperties = ['property', 'value'];
	
		this._isSatisfiedBy = function(data) {
			return this.resolveTestValue(data) >= this['value'];
		};
	});
	
	/**
	 * Max
	 */
	specs.specification['Max'] = Class(specs.PropertySpecification, function(supr) {
	    this._specName = 'Max';
	
	    this._requiredConfigProperties = ['property', 'value'];
	
		this._isSatisfiedBy = function(data) {
			return this.resolveTestValue(data) <= this['value'];
		};
	});
	
	/**
	 * True
	 * This spec doesn't do anything except returning true.
	 * Usefull to make something explicit in the UI for the user...
	 */
	specs.specification['True'] = Class(specs.AbstractSpecification, function(supr) {
	    this._specName = 'True';
	    this._isSatisfiedBy = function(data) {
	        return true;
		};
	});
	
	/**
	 * IsTrue
	 */
	specs.specification['IsTrue'] = Class(specs.PropertySpecification, function(supr) {
	    this._specName = 'IsTrue';
	
	    this._requiredConfigProperties = ['property'];
	
		this._isSatisfiedBy = function(data) {
	
	        return [true, 'true', 1, '1'].indexOf(this.resolveTestValue(data)) !== -1;
		};
	});
	
	/**
	 * IsFalse
	 */
	specs.specification['IsFalse'] = Class(specs.PropertySpecification, function(supr) {
	    this._specName = 'IsFalse';
	
	    this._requiredConfigProperties = ['property'];
	
		this._isSatisfiedBy = function(data) {
	        return [false, 'false', 0, '0'].indexOf(this.resolveTestValue(data)) !== -1;
		};
	});
	
	/**
	 * IsNotEmpty
	 */
	specs.specification['IsNotEmpty'] = Class(specs.PropertySpecification, function(supr) {
	    this._specName = 'IsNotEmpty';
	
	    this._isSatisfiedBy = function(data) {
			return !!this.resolveTestValue(data);
		};
	});
	
	/**
	 * IsWeekendDay
	 */
	specs.specification['IsWeekendDay'] = Class(specs.PropertySpecification, function(supr) {
	    this._specName = 'IsWeekendDay';
	
	    this.initConfig = function initConfig(config) {
			supr(this, this.initConfig, arguments);
			this['dateFormat'] = config['dateFormat'] || 'D/M/Y';
		};
	
		this._isSatisfiedBy = function init(data) {
			var isSatiesFied = false,
				testValue = this.resolveTestValue(data),
				testDate;
	
			if (utils.date.isParseableOrDateInstance(testValue)) {
				try {
					testDate = utils.date.parse(testValue, this['dateFormat']);
					isSatiesFied = utils.date.isWeekendDay(testDate);
				} catch(error) {
					//console.warning('Invalid date value: ', this.resolveTestValue(data));
				}
			}
	
			return isSatiesFied;
	 	};
	 });
	
	/**
	 * IsWeekDay
	 */
	specs.specification['IsWeekDay'] = Class(specs.PropertySpecification, function(supr) {
	    this._specName = 'IsWeekDay';
	
	    this.initConfig = function initConfig(config) {
			supr(this, this.initConfig, arguments);
			this['dateFormat'] = config['dateFormat'] || 'D/M/Y';
		};
	
		this._isSatisfiedBy = function init(data) {
			var isSatisFied = false,
				testValue = this.resolveTestValue(data),
				testDate;
	
			if (utils.date.isParseableOrDateInstance(testValue)) {
				try {
					testDate = utils.date.parse(testValue, this['dateFormat']);
	                isSatisFied = utils.date.isWeekDay(testDate);
				} catch(error) {
					//console.warning('Invalid date value: ', this.resolveTestValue(data));
				}
			}
	
			return isSatisFied;
	    };
	 });
	
	/**
	 * IsDay
	 */
	specs.specification['IsDay'] = Class(specs.PropertySpecification, function(supr) {
	    this._specName = 'IsDay';
	
	    this._requiredConfigProperties = ['property', 'day'];
	
	    this.initConfig = function initConfig(config) {
	        supr(this, this.initConfig, arguments);
	        this['dateFormat'] = config['dateFormat'] || 'D/M/Y';
	    };
	
	    this._isSatisfiedBy = function init(data) {
	        var isSatisFied = false,
	            testValue = this.resolveTestValue(data),
	            testDate;
	
	        if (utils.date.isParseableOrDateInstance(testValue)) {
	            try {
	                testDate = utils.date.parse(testValue, this['dateFormat']);
	                isSatisFied = utils.date.isDay(testDate, this['day']);
	            } catch(error) {
	                //console.warning('Invalid date value: ', this.resolveTestValue(data));
	            }
	        }
	
	        return isSatisFied;
	    };
	 });
	
	specs.specification.dom = specs.specification.dom || {};
	/**
	 * ContainsElements
	 * Has dom elements
	 * Test by query selector
	 */
	specs.specification.dom['ContainsElements'] = Class(specs.PropertySpecification, function(supr) {
	    this._specName = 'dom.ContainsElements';
	
	    this._requiredConfigProperties = ['property', 'query'];
	
		this.initConfig = function initConfig(config) {
			supr(this, this.initConfig, arguments);
			this['query'] = utils.dom.updatePrefix(this['query']);
		};
	
		this._isSatisfiedBy = function(data) {
			var scope = this.resolveTestValue(data) || document;
			return scope && scope.querySelector ? !!scope.querySelector(this['query']) : false;
		};
	});
	
	/**
	 * ContainsNotElements
	 * Has not dom elements
	 * Test by query selector
	 */
	specs.specification.dom['ContainsNotElements'] = Class(specs.specification.dom['ContainsElements'], function(supr) {
	    this._specName = 'dom.ContainsNotElements';
	
	    this._isSatisfiedBy = function _isSatisfiedBy(data) {
	        return !supr(this, this._isSatisfiedBy, [data]);
	    };
	});
	/**
	 * InputContainsValue
	 * Test if input field, found by selector, contains the given value
	 * @Warning: only checks the first element found by the query
	 */
	specs.specification.dom['InputContainsValue'] = Class(specs.PropertySpecification, function(supr) {
	    this._specName = 'dom.InputContainsValue';
	
	    this._requiredConfigProperties = ['property', 'query', 'contains'];
	
		this.initConfig = function initConfig(config) {
			supr(this, this.initConfig, arguments);
		};
	
		this._isSatisfiedBy = function(data) {
			var scope = window && window.document ? window.document : null,
				canSelect = (scope && scope.querySelector),
				foundElement = canSelect ? scope.querySelector(this['query']) : null;
	
			return foundElement && foundElement.value && foundElement.value.indexOf && foundElement.value.indexOf(this['contains']) !== -1;
		};
	});
	
	
	//
	// WORKING ON CHANGE DETECTION
	//
	
	/**
	 * InputContainsValue
	 * Test if input field, found by selector, contains the given value
	 * @Warning: only checks the first element found by the query
	 */
	/*
	specs.specification.dom['InputContainsValue'] = Class(specs.PropertySpecification, function(supr) {
	    this._specName = 'InputContainsValue';
	
	    this._requiredConfigProperties = ['property', 'query', 'contains'];
	
		this.initConfig = function initConfig(config) {
			supr(this, this.initConfig, arguments);
	
			this._querySelectorScope = window && window.document && window.document.querySelector ? window.document : null;
	
			this._monitorChange = (config._monitorChange !== false);
			this._isMonitoringChange = false;
			this._monitoringChangeDetector = debounce(bind(this, this._onChangeDetected), 500);
			this._monitoringChangeElements = null;
	
			if (this._monitorChange) {
	    		this._initChangeMonitoring();
			}
		};
	
		this._startMonitoringChange = function() {
	    	var element = this._findInputElement();
	
	        if (element && element.addEventListener) {
	            this._isMonitoringChange = true;
	            this._monitoringChangeElements = [element];
	            element.addEventListener('change', this._monitoringChangeDetector);
	        }
		};
	
		this._stopMonitoringChange = function() {
	    	if (this._isMonitoringChange) {
	            var i;
	
	            for (i = 0; i <= this._monitoringChangeElements.length - 1; i++) {
	                this._monitoringChangeElements[i].removeEventListener('change', this._monitoringChangeDetector);
	            }
	
	            this._isMonitoringChange = false;
	            this._monitoringChangeElements = null;
	        }
		};
	
		this._onChangeDetected = function() {
	    	this._emitChangeDetected(this);
		};
	
		this._emitChangeDetected = function _emitChangeDetected(specification) {
	    	this._emitter.emit('changedetected', this);
	
	    	if (this._parentSpecification && '_emitChangeDetected' in this._parentSpecification) {
	        	this._parentSpecification._emitChangeDetected(specification);
	    	}
		};
	
		this._findInputElement = function() {
	        var foundElement = (this._querySelectorScope !== null) ? this._querySelectorScope.querySelector(this['query']) : null;
			return foundElement && foundElement.value ? foundElement : null;
		};
	
		this._isSatisfiedBy = function(data) {
	        var element = this._findInputElement();
	
	        if (!element && this._isMonitoringChange) {
	            this._stopChangeMonitoring();
	        } else if(this._monitorChange) {
	            this._startMonitoringChange();
	        }
	
			return element && element.value.indexOf && foundElement.value.indexOf(this['contains']) !== -1;
		};
	});
	*/
	
	/**
	 * ObjectKeyExists
	 */
	specs.specification.dom['ObjectKeyExists'] = Class(specs.PropertySpecification, function(supr) {
	    this._specName = 'dom.ObjectKeyExists';
	
	    this._requiredConfigProperties = ['property', 'key'];
	
		this._isSatisfiedBy = function _isSatisfiedBy(data) {
			var testValue = this.resolveTestValue(data) || window,
	            notFoundKey = '_not_found_dj3i129h';
			return typeof testValue == 'object' && utils.vars.get(testValue, this['key'], notFoundKey) !== notFoundKey;
		};
	});
	
	/**
	 * ObjectKeyDoesntExists
	 */
	specs.specification.dom['ObjectKeyDoesntExists'] = Class(specs.specification.dom['ObjectKeyExists'], function(supr) {
	    this._specName = 'dom.ObjectKeyDoesntExists';
	
		this._isSatisfiedBy = function _isSatisfiedBy(data) {
			return !supr(this, this._isSatisfiedBy, arguments);
		};
	});
	
	/**
	 * InputValueComparison
	 */
	specs.specification.dom['InputValueComparison'] = Class(specs.PropertySpecification, function(supr) {
	    this._specName = 'dom.InputValueComparison';
	
	    this._requiredConfigProperties = ['property', 'query', 'operator', 'value'];
	
		this.initConfig = function initConfig(config) {
			supr(this, this.initConfig, arguments);
		};
	
		this._isSatisfiedBy = function(data) {
	        var scope = this.resolveTestValue(data) || document,
	            canSelect = (scope && scope.querySelector),
	            foundElement = canSelect ? scope.querySelector(this['query']) : null,
	            isSatisfied = false;
	
	        if (foundElement && 'value' in foundElement) {
	            switch(this['operator']) {
	                case '<':
	                    isSatisfied = foundElement.value !== '' && this['value'] !== '' && foundElement.value < this['value'];
	                    break;
	                case '>':
	                    isSatisfied = foundElement.value !== '' && this['value'] !== '' && foundElement.value > this['value'];
	                    break;
	                case '==':
	                    isSatisfied = foundElement.value == this['value'];
	                    break;
	                case '!=':
	                    isSatisfied = foundElement.value != this['value'];
	                    break;
	            }
	        }
	
	        return isSatisfied;
		};
	});
	
	/**
	 * ElementTextContentComparison
	 */
	specs.specification.dom['ElementTextContentComparison'] = Class(specs.PropertySpecification, function(supr) {
	    this._specName = 'dom.InputValueComparison';
	
	    this._requiredConfigProperties = ['property', 'query', 'operator', 'value'];
	
	    this.initConfig = function initConfig(config) {
	        supr(this, this.initConfig, arguments);
	        this['query'] = utils.dom.updatePrefix(this['query']);
	    };
	
	    this._isSatisfiedBy = function(data) {
	        var scope = this.resolveTestValue(data) || document,
	            canSelect = (scope && scope.querySelector),
	            foundElements = canSelect ? scope.querySelectorAll(this['query']) : null,
	            foundElement,
	            textContent,
	            isSatisfied = false,
	            i;
	
	        // 
	
	        if (foundElements) {
	            for (i = 0; i < foundElements.length; i++) {
	                foundElement = foundElements[i];
	                textContent = foundElement && 'textContent' in foundElement ? foundElement['textContent'].trim() : null;
	                if (textContent !== null) {
	                    switch(this['operator']) {
	                        case '<':
	                            isSatisfied = textContent !== '' && this['value'] !== '' && textContent < this['value'];
	                            break;
	                        case '>':
	                            isSatisfied = textContent !== '' && this['value'] !== '' && textContent > this['value'];
	                            break;
	                        case '==':
	                            isSatisfied = textContent == this['value'];
	                            break;
	                        case '!=':
	                            isSatisfied = textContent != this['value'];
	                            break;
	                        case '_has_not':
	                            if (!isSatisfied) {
	                                var regex = new RegExp(this['value'], 'i');
	                                isSatisfied = textContent.match(regex) !== null;
	                            }
	                            break;
	                        case 'matches':
	                            var regex = new RegExp(this['value'], 'i');
	                            isSatisfied = textContent.match(regex) !== null;
	                    }
	
	                    if (isSatisfied && this['operator'] !== '_has_not') {
	                        return true;
	                    }
	                }
	            }
	
	            if (this['operator'] === '_has_not') {
	                isSatisfied = !isSatisfied;
	            }
	        }
	
	        return isSatisfied;
	    };
	});
	
	/**
	 * ContainsElements
	 * Has dom elements
	 * Test by query selector
	 */
	specs.specification.dom['ElementInView'] = Class(specs.PropertySpecification, function(supr) {
	    this._specName = 'dom.ElementInView';
	
	    this._requiredConfigProperties = ['property', 'query', 'percentage'];
	
	    this.initConfig = function initConfig(config) {
	        supr(this, this.initConfig, arguments);
	        this['query'] = utils.dom.updatePrefix(this['query']);
	    };
	
	    this._isSatisfiedBy = function(data) {
	        var scope = this.resolveTestValue(data) || document,
	            element = (scope && scope.querySelector) ? scope.querySelector(this['query']) : false;
	
	        return element && utils.dom.isElementInViewport(element, this['percentage']);
	    };
	});
	
	/**
	 * ElementOccurrenceCountComparison
	 * Has dom elements
	 * Test by query selector
	 */
	specs.specification.dom['ElementOccurrenceCountComparison'] = Class(specs.PropertySpecification, function(supr) {
	    this._specName = 'dom.ElementOccurrenceCountComparison';
	
	    this._requiredConfigProperties = ['property', 'query', 'operator', 'count'];
	
		this.initConfig = function initConfig(config) {
			supr(this, this.initConfig, arguments);
			this['query'] = utils.dom.updatePrefix(this['query']);
		};
	
		this._isSatisfiedBy = function(data) {
	        var scope = this.resolveTestValue(data) || document,
	            canSelect = (scope && scope.querySelector),
	            foundElementsCount = canSelect ? scope.querySelectorAll(this['query']).length : 0,
	            isSatisfied = false;
	
	        switch(this['operator']) {
	            case '<':
	                isSatisfied = foundElementsCount < this['count'];
	                break;
	            case '>':
	                isSatisfied = foundElementsCount > this['count'];
	                break;
	            case '==':
	                isSatisfied = foundElementsCount === this['count'];
	                break;
	            case '!=':
	                isSatisfied = foundElementsCount != this['count'];
	                break;
	        }
	
	        return isSatisfied;
		};
	});
	
	specs.specification.hc = specs.specification.hc || {};
	/**
	 * IsAudience
	 */
	specs.specification.hc['IsAudience'] = Class(specs.PropertySpecification, function(supr) {
	    this._specName = 'hc.IsAudience';
	
	    this._requiredConfigProperties = ['property', 'audienceId'];
	
		this.initConfig = function initConfig(config) {
			supr(this, this.initConfig, arguments);
	
			this['audienceId'] = Number(this['audienceId']);
		};
	
		this._isSatisfiedBy = function(data) {
	        var visitedUrls = this.resolveTestValue(data),
	            //audiences = data['widget.audiences'] || {},
	            audiences = this.resolveTestValue(data, 'audiences') || {},
	            hasValidAudienceId = !!this['audienceId'],  // should have a numeric (int) value higher than 0
	            isSatisfied = false,
	            audience,
	            i,
	            isValid = null,
	            isAndType,
	            audienceUrls;
	
	        if (audiences && hasValidAudienceId && this['audienceId'] in audiences && utils.vars.isArray(visitedUrls)) {
	            audience = audiences[this['audienceId']];
	            isAndType = audience.type && audience.type.toLowerCase() == 'and';
	            audienceUrls = audience.urls || [];
	
	            for (i = 0; i <= audienceUrls.length - 1; i++) {
	                if (audienceUrls[i]) {
	                    isValid = (isValid === null || isValid === true) && utils.net.matchURI(audienceUrls[i], visitedUrls);
	
	                    if (!isAndType && isValid) {
	                        break;
	                    } else if (isAndType && !isValid) {
	                        break;
	                    }
	                }
	            }
	
	            if (isValid) {
	                isSatisfied = true;
	            }
	        }
	
	        return isSatisfied;
		};
	});
	
	/**
	 * HasWidget
	 */
	specs.specification.hc['HasWidget'] = Class(specs.PropertySpecification, function(supr) {
	    this._specName = 'hc.HasWidget';
	
	    this._requiredConfigProperties = ['property', 'widgetTypeSelector', 'widgetIdSelector', 'widgetVisibilityStateSelector'];
	
	    this.initConfig = function initConfig(config) {
	        supr(this, this.initConfig, arguments);
	    };
	
	    this._isSatisfiedBy = function(data) {
	        var scope = this.resolveTestValue(data) || document,
	                selectors = [],
	                selector,
	                success = true,
	                shouldCheckStateShowing = false;
	    
	        if (scope && scope.querySelector) {
	            utils.vars.each(['widgetTypeSelector', 'widgetIdSelector', 'widgetVisibilityStateSelector'], function(subSelector) {
	                if (this[subSelector]) {
	                    selectors.push(this[subSelector]);
	                    
	                    if (subSelector == 'widgetVisibilityStateSelector' && this[subSelector].indexOf('Visible') !== -1) {
	                        shouldCheckStateShowing = true;
	                    }
	                }
	            }.bind(this));
	
	            if (selectors.length > 0) {
	                selector = '.' + utils.dom.updatePrefix(selectors.join('.'));
	                
	                if (shouldCheckStateShowing) {
	                    selector += ', ' + selector.replace(utils.dom.updatePrefix('~.DisplayVisible'), utils.dom.updatePrefix('.~DisplayShowing'));
	                }
	                
	                success = !!scope.querySelector(selector);
	            }
	        }
	
	        return success;
	    };
	});
	
	/**
	 * HasNotWidget
	 */
	specs.specification.hc['HasNotWidget'] = Class(specs.specification.hc['HasWidget'], function(supr) {
	    this._specName = 'hc.HasNotWidget';
	
	    this._isSatisfiedBy = function _isSatisfiedBy(data) {
	        if (this['widgetTypeSelector'] || this['widgetIdSelector'] || this['widgetVisibilityStateSelector']) {
	            return !supr(this, this._isSatisfiedBy, [data]);
	        }
	
	        return true;
	    };
	});
	
	content.documentconnector = {};
	content.documentconnector['connectoradapter'] = {};
	content.documentconnector['connectoradapter']['bookingsengine'] = {};
	content.documentconnector['connectoradapter']['document'] = {};
	
	/**
	 * @Note: All adapter events will be relayed to the DocumentConnector
	 */
	content.documentconnector.DocumentConnector = Class(Emitter, function(supr) {
	    this.init = function init(config) {
	        supr(this, this.init, arguments);
	
	        config = Object.assign({
	            adapterResolver: {},
	            logDataHistory: true,
	            dataHistoryFields: null,
	        }, config);
	
	        this._adapter = null;
	
	
	        // check if Resolver is loaded.
	        // When not loaded, assume there are no adapters to load.
	        // To decrease js file size
	        // the system is only completely loaded when there are adapters selected for the
	        // current website
	        if (content.documentconnector.AdapterResolver) {
	            this._adapter = content.documentconnector.AdapterResolver.resolve(config.adapterResolver);
	        }
	
	        this._dataHistory = (config.logDataHistory === true) ? new content.documentconnector.DataHistory({
	            documentConnector: this,
	            fields: config.dataHistoryFields,
	            storage: config.storage
	        }) : null;
	
	        // Debug
	        // this.on('*', function() {
	        //     console.log('on*: ', utils.vars.arrayFrom(arguments));
	        // });
	
	        if (this._adapter) {
	            this.relaySignals(this._adapter, ['*']);
	
	            // // Debug
	            // this.on('*', function() {
	            //     console.log('on*: ', utils.vars.arrayFrom(arguments));
	            // });
	        }
	
	        window['_hc_w'] = this;
	        // this._engine.setGlobalDebug('documentConnector', this);
	    };
	
	    this.get = function() {
	        return this._adapter ? this._adapter.get.apply(this._adapter, utils.vars.arrayFrom(arguments)) : null;
	    };
	
	    this.getData = function() {
	        return this._adapter ? this._adapter.getData() : {};
	    };
	
	    this.getInitialData = function() {
	        return this._adapter ? this._adapter.getInitialData() : {};
	    };
	
	    this.getAdapter = function() {
	        return this._adapter;
	    };
	
	    this.hasAdapter = function() {
	        return !!this._adapter;
	    };
	
	    this.getId = function() {
	        return this._adapter ? this._adapter.getId() : null;
	    };
	
	    this.getName = function() {
	        return this._adapter ? this._adapter.getConnectorName() : null;
	    };
	
	    this.getDataHistory = function() {
	        return this._dataHistory;
	    };
	});
	
	content.documentconnector.DataHistory = Class(Emitter, function(supr) {
	    this.init = function(config) {
	        this._documentConnector = config.documentConnector;
	        this._storage = config.storage || null;
	        this._fields = config.fields || null;
	        this._versions = config.versions || 2;
	        this._version = config.version || null;
	        this._historyData = this._getWritableHistory();
	
	        this._setWritableHistory();
	
	        // init with initial document connector data
	        var initialState = Object.keys(this._documentConnector.getData());
	        for(var i = 0; i < initialState.length; i++) {
	            this._updatePropertyValue(initialState[i], this._documentConnector.get(initialState[i]), false);
	        }
	        this._setWritableHistory();
	
	        if (this._storage) {
	            this._documentConnector.on('property.change', bind(this, this._onPropertyChange));
	        }
	    };
	
	    /**
	     * Reset reminder state
	     */
	    this.reset = function() {
	        this._resetWritableHistory();
	        this._version = null;
	        this._historyData = this._getWritableHistory();
	    };
	
	    /**
	     * Getters
	     */
	
	    /**
	     * Gets the data.
	     *
	     * @param      {Array}  keys          The keys
	     * @param      {Number}  sessionsBack  The sessions back (The number of steps in history you want to make!)
	     * @return     {Object}  The data.
	     */
	    this.getData = function(keys, versionsBack) {
	        /*
	         * DEBUG
	         */
	        // return {
	        //     'arrivalDate' : '2016-06-20T22:00:00.000Z',
	        //     'departureDate' : '2016-06-25T22:00:00.000Z',
	        //     'roomTypes' : [
	        //         'PRESIDENTAL'
	        //     ],
	        //     'activeRoomType' : '0'
	        // };
	
	        var data = this._getHistory(),
	            version = (data.length - 1 - versionsBack >= 0) ? (data.length - 1 - versionsBack) : 0,
	            returnData;
	
	        if (keys) {
	            returnData = {};
	            for (var key in data[version]) {
	                if (keys.indexOf(key) !== -1) {
	                    returnData[key] = data[version][key];
	                }
	            }
	
	            return returnData;
	        } else {
	            return data[version];
	        }
	    };
	
	    this._getHistory = function() {
	        return this._storage.getFromStorage('dataHistory', []);
	    };
	
	    /**
	     * Gets the history.
	     *
	     * @return     {Object}  The history.
	     */
	    this._getWritableHistory = function() {
	        var data = this._storage.getFromStorage('dataHistory', []),
	            length = data.length,
	            time = new Date().getTime();
	
	        for (var i = 0; i < length; i++) {
	            var dataHistory = data[i];
	            if (dataHistory && (time <= dataHistory['__timestamp__'])) {
	                this._version = i;
	                return dataHistory;
	            }
	        }
	
	        if (length != this._versions) {
	            this._version = length;
	            return {
	                '__timestamp__' : time + 30 * 60 * 1000
	            };
	        } else {
	            data.shift();
	            this._version = this._versions - 1;
	            return {
	                '__timestamp__' : time + 30 * 60 * 1000
	            };
	        }
	    };
	
	    /**
	     * Sets the writable history.
	     */
	    this._setWritableHistory = function() {
	        var data = this._storage.getFromStorage('dataHistory', []);
	        data[this._version] = this._historyData;
	        this._storage.setInStorage('dataHistory', data);
	    };
	
	    this._resetWritableHistory = function() {
	        this._storage.setInStorage('dataHistory', []);
	    };
	
	    this._isExternalValueValid = function(externalValue, property) {
	        var historyData = this._historyData;
	        return (!historyData[property] || historyData[property] !== externalValue) && externalValue !== undefined && externalValue !== null;
	    };
	
	    this._updatePropertyValue = function(property, value, writeToHistory) {
	        writeToHistory = writeToHistory !== false;
	
	        if (!this._fields || (this._fields && this._fields.indexOf(property) !== -1)) {
	            var historyData = this._historyData;
	
	            if (this._isExternalValueValid(value, property)) {
	                // Write History..
	                historyData[property] = value;
	
	                if (writeToHistory) {
	                    this._setWritableHistory();
	                }
	            }
	        }
	    };
	
	    /**
	     * Event handlers
	     */
	    this._onPropertyChange = function(property, value, oldValue) {
	        this._updatePropertyValue(property, value);
	    };
	});
	// Namespace
	content.ui.device.positioner = {};
	// Namespace
	content.ui.device.positioner.desktop = {};
	content.ui.device.positioner.desktop['Positioner'] = Class(Emitter, function(supr) {
		/**
		 * Init function
		 * @param  {[type]} opts [description]
		 * @return {[type]}      [description]
		 */
		this.init = function init(opts) {
			this._engine = opts.engine;
			supr(this, this.init, arguments);
		};
	
		this._reset = function _reset(view, style) {
			style.position 		= 'fixed';
			style.visibility 	= 'visible';
			style.top 			= 'auto';
			style.bottom 		= 'auto';
			style.left 			= 'auto';
			style.right 		= 'auto';
			style.padding 		= view.getPadding();
			style.margin 		= 0;
	
			this._heightTimeout && clearTimeout(this._heightTimeout);
			this._heightTimeout = null;
		};
	
		/**
		 * Update vertical, update's vertical top or bottom.. depending on specific positioner
		 * @param  {[type]} view       [description]
		 * @param  {[type]} style      [description]
		 * @param  {[type]} widgetNode [description]
		 * @return {[type]}            [description]
		 */
		this.updateVertical = function(view, style, widgetNode) {
	
		};
	
		/**
		 * Ready to use HorizontalTransform function
		 * @param  {[type]} node  [description]
		 * @param  {[type]} left  [description]
		 * @param  {[type]} right [description]
		 * @param  {[type]} x     [description]
		 * @return {[type]}       [description]
		 */
		this.updateHorizontalTransform = function(node, left, right, x) {
			utils.dom.addTransform(node, 'translateX(' + x + 'px)');
	
			node.style.left 	= left;
			node.style.right 	= right;
		};
	
		/**
		 * Ready to use VerticalTransform function
		 * @param  {[type]} node   [description]
		 * @param  {[type]} top    [description]
		 * @param  {[type]} bottom [description]
		 * @param  {[type]} y      [description]
		 * @return {[type]}        [description]
		 */
		this.updateVerticalTransform = function(node, top, bottom, y) {
			utils.dom.addTransform(node, 'translateY(' + y + 'px)');
	
			node.style.top = top;
			node.style.bottom = bottom;
		};
	
	    /**
		 * [updateCenter description]
		 * @param  {[type]} widgetNode [description]
		 * @return {[type]}            [description]
		 */
		this.updateCenter = function updateCenter(widgetNode) {
			this._heightTimeout && clearTimeout(this._heightTimeout);
			this._heightTimeout = null;
	
			if (!widgetNode) {
				return;
			}
	
			var wrapper = widgetNode.parentNode,
				height 	= widgetNode.offsetHeight;
	
			if (height === 0) {
				this._heightTimeout = setTimeout(bind(this, this.updateCenter, widgetNode), 5);
				return;
			}
	
			widgetNode.style.marginTop = (height * -0.5) + 'px';
		};
	
		/**
		 * Interface function..
		 */
		this.visiblePosition = function visiblePosition() {
	
		};
	
		/**
		 * Interface function..
		 */
		this.hiddenPosition = function hiddenPosition() {
	
		};
	
		/**
		 * Interface function..
		 */
		this.minimizedPosition = function minimizedPosition() {
	
		};
	});
	
	content.ui.device.positioner.desktop['BarPositioner'] = Class(content.ui.device.positioner.desktop['Positioner'], function(supr) {
		/**
		 * [init description]
		 * @param  {[type]} opts [description]
		 * @return {[type]}      [description]
		 */
		this.init = function init(opts) {
			supr(this, this.init, arguments);
		};
	
		this._reset = function _reset(view, style) {
			style.position 		= 'fixed';
			style.visibility 	= 'visible';
			style.top 			= 'auto';
			style.bottom 		= 'auto';
			style.left 			= '0';
			style.right 		= '0';
			style.padding 		= view.getPadding();
			style.margin 		= 0;
	
			this._heightTimeout && clearTimeout(this._heightTimeout);
			this._heightTimeout = null;
		};
	
		/**
		 * [visiblePosition description]
		 * @return {[type]} [description]
		 */
		this.visiblePosition = function visiblePosition(view) {
			var	node = view.getElement().node,
				style = node.style,
				alignment = view.getAlignment(),
				widgetNode = node && node.childNodes[0] ? node.childNodes[0] : null,
				height = view.getHeight(),
				width = view.getWidth();
	
			this._reset(view, style);
	
			style.width = '100%'; // Hacky fix to center widget's horizontal
			widgetNode.style.width = width; // ^^^^^
			widgetNode.style.height = height + 'px';
			if(alignment.isBottom()) {
				this.updateVerticalTransform(node, 'auto', '0px', 0);
			} else if (alignment.isTop()) {
				this.updateVerticalTransform(node, '0px', 'auto', 0);
			} else {
				if (this._engine._args.verbose) {
					console.error('Wrong alignment for widget: ', view.getWidget().getId());
				}
			}
	
			this.updateVertical(view, style, widgetNode);
		};
	
		/**
		 * [hiddenPosition description]
		 * @return {[type]} [description]
		 */
		this.minimizedPosition = this.hiddenPosition = function hiddenPosition(view) {
			var node = view.getElement().node,
				style = node.style,
				alignment = view.getAlignment(),
				widgetNode = node && node.childNodes[0] ? node.childNodes[0] : null,
				height = view.getHeight(),
				width = view.getWidth();
	
	
			style.width = '100%'; // Hacky fix to center widget's horizontal
			(widgetNode) && (widgetNode.style.width = width);
			(widgetNode) && (widgetNode.style.height = height + 'px');
	
			if (alignment.isBottom()) {
				this.updateVerticalTransform(node, 'auto', '0px', height);
			} else if (alignment.isTop()) { // Alginment == top
				this.updateVerticalTransform(node, '0px', 'auto', ('-' + height));
			} else {
				if (this._engine._args.verbose) {
					console.error('Wrong alignment for widget: ', view.getWidget().getId());
				}
			}
		};
	});
	content.ui.device.positioner.desktop['DialogPositioner'] = Class(content.ui.device.positioner.desktop['Positioner'], function(supr) {
		/**
		 * [init description]
		 * @param  {[type]} opts [description]
		 * @return {[type]}      [description]
		 */
		this.init = function init(opts) {
			supr(this, this.init, arguments);
		};
	
		this.updateVertical = function updateVertical(view, style, widgetNode) {
			var alignment = view.getAlignment(),
				settings = this._engine.getSettings();
	
			if (alignment.isTop()) {
				style.top = (settings.marginTop + view.getTotalTop()) + 'px';
			} else if (alignment.isVerMiddle()) {
				style.top = '50%';
			} else if (alignment.isBottom()) {
				style.bottom = (settings.marginBottom + view.getTotalTop()) + 'px';
			}
	
			if (widgetNode) {
				if(alignment.isVerMiddle()) {
					this.updateCenter(widgetNode);
				} else if (widgetNode.style) {
	                widgetNode.style.marginTop = 'initial';
	            }
			}
		};
	
		/**
		 * [visiblePosition description]
		 * @return {[type]} [description]
		 */
		this.visiblePosition = function visiblePosition(view) {
			var node = view.getElement().node,
				style = node.style,
				alignment = view.getAlignment(),
				horizontalOffset = view.getHorizontalOffset(),
				widgetNode = node && node.childNodes[0] ? node.childNodes[0] : null;
	
			this._reset(view, style);
	
			if (alignment.isLeft()) {
				this.updateHorizontalTransform(node, '0px', 'auto', horizontalOffset - view.getPadding());
			} else if (alignment.isRight()) {
				this.updateHorizontalTransform(node, 'auto', '0px', view.getPadding() - horizontalOffset);
			} else {
				if (this._engine._args.verbose) {
					console.error('Wrong alignment for widget: ', view.getWidget().getId());
				}
			}
	
			this.updateVertical(view, style, widgetNode);
		};
	
		/**
		 * [hiddenPosition description]
		 * @return {[type]} [description]
		 */
		this.hiddenPosition = function hiddenPosition(view) {
			var node = view.getElement() ? view.getElement().node : null,
				style = node.style,
				width = view.getWidth(),
				alignment = view.getAlignment()
				widgetNode 	= node && node.childNodes[0] ? node.childNodes[0] : null;
	
			this._reset(view, style);
	
			if (alignment.isLeft()) {
				this.updateHorizontalTransform(node, '0px', 'auto', -~~(width * 1.5));
			} else if (alignment.isRight()) {
				this.updateHorizontalTransform(node, 'auto', '0px', ~~(width * 1.5));
			} else {
				if (this._engine._args.verbose) {
					console.error('Wrong alignment for widget: ', view.getWidget().getId());
				}
			}
			this.updateVertical(view, style, widgetNode);
		};
	
		/**
		 * [minimizedPosition description]
		 * @return {[type]} [description]
		 */
		this.minimizedPosition = function minimizedPosition(view) {
			var node = view.getElement().node,
				style = node.style,
				width = view.getWidth()
				alignment = view.getAlignment(),
				labelOffset = view.getLabelOffset(),
				horizontalOffset = view.getHorizontalOffset(),
				widgetNode = node && node.childNodes[0] ? node.childNodes[0] : null;
	
			this._reset(view, style);
	
			if (alignment.isLeft()) {
				this.updateHorizontalTransform(node, '0px', 'auto', horizontalOffset - view.getPadding() - labelOffset - width);
			} else if (alignment.isRight()) {
				this.updateHorizontalTransform(node, 'auto', '0px', horizontalOffset + view.getPadding() + labelOffset + width);
			} else {
				if (this._engine._args.verbose) {
					console.error('Wrong alignment for widget: ', view.getWidget().getId());
				}
			}
			this.updateVertical(view, style, widgetNode);
		};
	});
	
	content.ui.device.positioner.desktop['LabelPositioner'] = Class(content.ui.device.positioner.desktop['DialogPositioner'], function(supr) {
		this.init = function init(opts) {
			supr(this, this.init, arguments);
		};
	
		this.updateVertical = function updateVertical(view, style, widgetNode) {
			var alignment = view.getAlignment(),
				settings = this._engine.getSettings();
	
			if (alignment.isTop()) {
				style.top = (settings.marginTop + view.getTotalTop()) + 'px';
			} else if (alignment.isVerMiddle()) {
				style.top = '50%';
			} else if (alignment.isBottom()) {
				style.bottom = (settings.marginBottom + view.getTotalTop()) + 'px';
			}
		};
	
		/**
		 * [visiblePosition description]
		 * @return {[type]} [description]
		 */
		this.visiblePosition = function visiblePosition(view) {
			var node = view.getElement().node,
				style = node.style,
				alignment = view.getAlignment(),
				horizontalOffset = view.getHorizontalOffset(),
				widgetNode = node && node.childNodes[0] ? node.childNodes[0] : null,
				labelOffset = view.getLabelOffset();
	
			this._reset(view, style);
	
			if (alignment.isLeft()) {
				this.updateHorizontalTransform(node, '0px', 'auto', horizontalOffset - view.getPadding() + labelOffset);
			} else if (alignment.isRight()) {
				this.updateHorizontalTransform(node, 'auto', '0px', view.getPadding() - horizontalOffset - labelOffset);
			} else {
				if (this._engine._args.verbose) {
					console.error('Wrong alignment for widget: ', view.getWidget().getId());
				}
			}
	
			this.updateVertical(view, style, widgetNode);
		};
	});
	content.ui.device.positioner.desktop['CenteredPositioner'] = Class(content.ui.device.positioner.desktop['Positioner'], function(supr) {
		/**
		 * [init description]
		 * @param  {[type]} opts [description]
		 * @return {[type]}      [description]
		 */
		this.init = function init(opts) {
			this._view = null;
	
			utils.listen(window, 'resize', this, this.onResize);
	
			supr(this, this.init, arguments);
		};
	
		/**
		 * [updateCenter description]
		 * @param  {[type]} widgetNode [description]
		 * @return {[type]}            [description]
		 */
		this.updateCenter = function updateCenter(widgetNode) {
			this._heightTimeout && clearTimeout(this._heightTimeout);
			this._heightTimeout = null;
	
			if (!widgetNode) {
				return;
			}
	
			var wrapper = widgetNode.parentNode,
				height 	= widgetNode.offsetHeight;
	
			if (height === 0) {
				this._heightTimeout = setTimeout(bind(this, this.updateCenter, widgetNode), 5);
				return;
			}
	
			widgetNode.style.marginTop = (height * -0.5) + 'px';
		};
	
		/**
		 * [visiblePosition description]
		 * @return {[type]} [description]
		 */
		this.visiblePosition = function visiblePosition(view) {
			var node = view.getElement().node,
				style = node.style,
				alignment = view.getAlignment(),
				widgetNode = node && node.childNodes[0] ? node.childNodes[0] : null;
	
			if (!alignment.isCompletelyCentered()) {
				if (this._engine._args.verbose) {
					console.error('Wrong alignment for widget: ', view.getWidget().getId());
				}
			}
	
			this._view = view;
			this._reset(view, style);
	
			style.position 	= 'static';
			style.margin 	= '0 auto 0 auto';
			style.display 	= 'block';
			utils.dom.addTransform(node, 'translateX(0px)');
			this.updateCenter(widgetNode);
		};
	
		/**
		 * [hiddenPosition description]
		 * @return {[type]} [description]
		 */
		this.minimizedPosition = this.hiddenPosition = function hiddenPosition(view) {
			var node = view.getElement().node,
				style = node.style;
	
			this._view = view;
	
			style.display = 'none';
		};
	
		this.onResize = function onResize(event) {
			this._resizeTimeout && clearTimeout(this._resizeTimeout);
			this._resizeTimeout = setTimeout(bind(this, this.onApplyResize), 100);
		};
	
		this.onApplyResize = function onApplyResize() {
			this._resizeTimeout = null;
	
			var view = this._view;
			if (view) {
				var node 		= view.getElement() ? view.getElement().node : null,
					widgetNode 	= (node && node.childNodes[0]) ? node.childNodes[0] : null;
				this.updateCenter(widgetNode);
			}
		};
	});
	content.ui.device.positioner.desktop['StickyDialogPositioner'] = Class(content.ui.device.positioner.desktop['Positioner'],function(supr) {
		/**
		 * [init description]
		 * @param  {[type]} opts [description]
		 * @return {[type]}      [description]
		 */
		this.init = function init(opts) {
			supr(this, this.init, arguments);
		};
	
		this._reset = function _reset(view, style) {
			supr(this, this._reset, arguments);
			style.paddingBottom = '0';
			style.paddingTop = '0';
		};
	
		/**
		 * [visiblePosition description]
		 * @return {[type]} [description]
		 */
		this.visiblePosition = function visiblePosition(view) {
			var node = view.getElement().node,
				style = node.style,
				alignment = view.getAlignment(),
				widgetNode = node && node.childNodes[0] ? node.childNodes[0] : null,
				horizontalOffset = view.getHorizontalOffset(),
				width = view.getWidth();
	
			this._reset(view, style);
			if (alignment.isTop()) {
				if (this._engine._args.verbose) {
					console.error('Wrong alignment for widget: ', view.getWidget().getId());
				}
				// if (alignment.isLeft()) {
				// 	style.left = horizontalOffset + 'px';
				// } else if (alignment.isHorMiddle()) {
	
				// } else if (alignment.isRight()) {
				// 	style.right = horizontalOffset + 'px';
				// }
	
				// this.updateVerticalTransform(node, '0px', 'auto', 0);
			} else if (alignment.isBottom()) {
				if (alignment.isLeft()) {
					style.left = horizontalOffset + 'px';
				} else if (alignment.isHorMiddle()) {
					style.left = (this.getMiddleLeft(view.getWidth()) + horizontalOffset) + 'px';
				} else if (alignment.isRight()) {
					style.right = horizontalOffset + 'px';
				}
	
				this.updateVerticalTransform(node, 'auto', '0px', 0);
			}
		};
	
		/**
		 * [hiddenPosition description]
		 * @return {[type]} [description]
		 */
		this.minimizedPosition = this.hiddenPosition = function hiddenPosition(view) {
			var node = view.getElement().node,
				style = node.style,
				widgetNode = node && node.childNodes[0] ? node.childNodes[0] : null,
				alignment = view.getAlignment(),
				titleHeight = view.getTitleHeight() || 0,
				mainContentHeight = view.getMainContentHeight(),
				mainContent = view.getMainContent(),
				horizontalOffset = view.getHorizontalOffset(),
				width = view.getWidth(),
				height = titleHeight + mainContentHeight;
	
			this._reset(view, style);
	
			if (alignment.isTop()) {
				if (this._engine._args.verbose) {
					console.error('Wrong alignment for widget: ', view.getWidget().getId());
				}
				// if (alignment.isLeft()) {
				// 	style.left = horizontalOffset + 'px';
				// } else if (alignment.isHorMiddle()) {
	
				// } else if (alignment.isRight()) {
				// 	style.right = horizontalOffset + 'px';
				// }
	
				// this.updateVerticalTransform(node, '0px', 'auto', mainContentHeight);
			} else if (alignment.isBottom()) {
				if (alignment.isLeft()) {
					style.left = horizontalOffset + 'px';
				} else if (alignment.isHorMiddle()) {
					style.left = (this.getMiddleLeft(view.getWidth()) + horizontalOffset) + 'px';
				} else if (alignment.isRight()) {
					style.right = horizontalOffset + 'px';
				}
				if (mainContent && mainContent.style.height !== '0px') {
					this.updateVerticalTransform(node, 'auto', '0px', mainContentHeight);
				} else {
					this.updateVerticalTransform(node, 'auto', '0px', '0px');
				}
	
			}
		};
	
		this.getMiddleLeft = function getMiddleLeft(widgetWidth) {
			return ((window.innerWidth / 2) - (widgetWidth / 2));
		};
	});
	/**
	 * ConnectorAdapter
	 * Abstract base class for all ConnectorAdapters
	 *
	 * @TODO: check whether we should use Mutation Observers instead of interval:
	 *        https://developer.mozilla.org/en/docs/Web/API/MutationObserver
	 */
	content.documentconnector.ConnectorAdapter = Class(Emitter, function(supr) {
	    this.init = function init(config) {
	        supr(this, this.init, arguments);
	
	        config = this._mergeConfig({
	            connectorName: null,
	
	            intervalDelay: 1500,
	
	            defaultListenerDebounceTimeout: 100,
	
	            'properties': null,
	
	            relayEvents: null,
	
	            id: null,
	
	            dataAttributePrefix: 'hc-irtxa',
	
	            defaultValueResolvingMode: null,
	
	            /**
	             * @WARNING, @TODO:     Doesn't work. Should be tested!!
	             * @config  {mixed}     Automatically cleanup deleted elements and reinit properties and relayed events.
	             *                      Disabled by default. Configure per implementation.
	             *                      null || 0 = disabled, a number in ms = interval delay, true is the value of intervalDelay
	             */
	            autoCleanupAndReinit: null
	        }, config);
	
	        this._intervalDelay = config.intervalDelay;
	        this._intervalPropertyElements = [];
	        this._intervalProcessId = null;
	        this._defaultListenerDebounceTimeout = config.defaultListenerDebounceTimeout;
	        this._defaultValueResolvingMode = config.defaultValueResolvingMode || content.documentconnector.ConnectorAdapter.VALUE_RESOLVING_DATA;
	
	        this._propertyConfig = config['properties'];
	        this._relayEventsConfig = config.relayEvents;
	        this._propertyElementsMapping = {};
	        this._propertyElementsValueResolvingMode = {};
	        this._relayEventsElementsMapping = {};
	        this._eventHandlersToElementMapping = {};
	        this._dataAttributePrefix = config.dataAttributePrefix;
	        this._customIdCounter = 0;
	        this._autoCleanupAndReinit = config.autoCleanupAndReinit;
	        this._cleanupAndReinitIntervalProcessId = null;
	        this._initializedData = false;
	
	        this._id = config.id;
	        this._connectorName = config.connectorName;
	        this._initialData = {};
	        this._data = {};
	        this._config = config;
	
	        this._initProperties(config['properties']);
	        this._initRelayEvents(config.relayEvents);
	        this._initData();
	
	        this.startIntervalListener();
	
	        // DISABLED: should be tested!
	        this._initCleanupAndReinitAutomation();
	    };
	
	    this._mergeConfig = function(target, source) {
	        var subConfigs = ['properties', 'relayEvents'];
	
	        source = source || [];
	        target = target || [];
	
	        utils.vars.each(subConfigs, function(name) {
	            if (!!target[name] && !!source[name]) {
	                source[name] = Object.assign(target[name], source[name]);
	            }
	        });
	
	        return Object.assign(target, source);
	    };
	
	    /**
	     * _initProperties
	     */
	    this._initProperties = function(propertyConfig) {
	        utils.vars.each(propertyConfig, bind(this, function(config, property) {
	            this._initProperty(property, config);
	        }));
	    };
	
	    /**
	     * _initProperty
	     */
	    this._initProperty = function(property, config) {
	        var elements = this._resolveElements(config, property);
	        this._attachPropertyListeners(config, property, elements);
	
	        this._propertyElementsMapping[property] = elements;
	        this._propertyElementsValueResolvingMode[property] = config.valueResolving || this._defaultValueResolvingMode;
	    };
	
	    /**
	     * _initRelayEvents
	     */
	    this._initRelayEvents = function(relayEventsConfig) {
	        utils.vars.each(relayEventsConfig, bind(this, function(config, name) {
	            this._initRelayEvent(name, config);
	        }));
	    };
	
	    /**
	     * _initRelayEvent
	     */
	    this._initRelayEvent = function(name, config) {
	        var elements = this._resolveElements(config, name);
	        this._attachRelayEventListeners(config, name, elements);
	        this._relayEventsElementsMapping[name] = elements;
	    };
	
	    /**
	     * _initData
	     * Helper to initialize data
	     * @param   array   Array with properties to initialize (optional). Used after for cleanup...
	     * @return
	     */
	    this._initData = function(properties) {
	        if (!this._initializedData) {
	            utils.vars.each(this._propertyConfig, bind(this, function(config, property) {
	                this._data[property] = this._initialData[property] = this._resolveValue(property);
	            }));
	            
	            this._initializedData = true;
	        } else {
	            utils.vars.each(this._propertyConfig, bind(this, function(config, property) {
	                if (!properties || properties.indexOf(property) !== -1) {
	                    this._set(property, this._resolveValue[property], {silentSet: true});
	                }
	            }));
	        }
	    };
	
	    /**
	     * _initCleanupAndReinitAutomation
	     */
	    this._initCleanupAndReinitAutomation = function() {
	        if (!!this._autoCleanupAndReinit) {
	            var cleanupIntervalDelay = 5000;
	
	            if (this._autoCleanupAndReinit === true && !!this._intervalDelay) {
	                cleanupIntervalDelay = this._intervalDelay;
	            } else {
	                cleanupIntervalDelay = this._autoCleanupAndReinit;
	            }
	            this._cleanupAndReinitIntervalProcessId = setInterval(bind(this, this.cleanupAndReinit), cleanupIntervalDelay);
	        }
	    };
	
	    /**
	     * _attachPropertyListeners
	     * Simple helper method to parse listener config and attach listeners while initializing.
	     * @param   {object}    Property config object
	     * @param   {string}    The property name
	     * @param   {array}     Array with the elements
	     */
	    this._attachPropertyListeners = function(config, property, elements) {
	        if (config.listeners) {
	            var listeners = [],
	                elements = elements && elements.length > 0 ? elements : [null],     // @note: sometimes elements are not required (i.e. for _interval listener). @todo: this should be refactored to a better foreach conctruction
	                debounceTimeout = ('listenerDebounceTimeout' in config) ? config.listenerDebounceTimeout : this._defaultListenerDebounceTimeout;
	
	            // make sure that listeners is an array or an object
	            if (utils.vars.isArray(config.listeners)) {
	                listeners = config.listeners;
	            } else if (typeof config.listeners == 'string') {
	                listeners = [config.listeners];
	            } else if (typeof config.listeners == 'function') {
	                listeners = [config.listeners];
	            } else if (typeof config.listeners == 'object') {
	                listeners = config.listeners;
	            }
	
	            // attach listeners
	            utils.vars.each(elements, bind(this, function(element) {
	                utils.vars.each(listeners, bind(this, function(eventName, mixed) {
	                    if (typeof eventName == 'function') {                                       // arguments are: {function} custom event listener intializer function
	                        eventName(element);
	                    } else if (typeof eventName == 'function' && typeof mixed == 'string') {    // arguments are: {function} custom event listener intializer function, {string} event name
	                        if (mixed == '_interval') {
	                            throw new Error('Cannot use _interval with custom listener initializer');
	                        }
	
	                        eventName(element, mixed, property);
	                    } else if (typeof eventName == 'string') {                                  // arguments are: {string} event name
	                        switch(eventName) {
	                            case '_interval':
	                                this._intervalPropertyElements.push({
	                                    element: element,
	                                    eventName: eventName,
	                                    property: property
	                                });
	                                break;
	                            default:
	                                if (element) {
	                                    this._attachPropertyListenerToElement(element, eventName, property, debounceTimeout);   
	                                }
	                        }
	                    }
	                }));
	            }));
	        }
	    };
	
	    /**
	     * _attachRelayEventListeners
	     * Simple helper method to parse listener config and attach listeners while initializing.
	     * @param   {object}    Relay event config object
	     * @param   {string}    The name
	     * @param   {array}     Array with the elements
	     */
	    this._attachRelayEventListeners = function(config, name, elements) {
	        if (config.events) {
	            var events = [],
	                debounceTimeout = ('listenerDebounceTimeout' in config) ? config.listenerDebounceTimeout : this._defaultListenerDebounceTimeout;
	
	            // make sure that events is an array
	            if (utils.vars.isArray(config.events)) {
	                events = config.events;
	            } else if (typeof config.events == 'string') {
	                events = [config.events];
	            }
	
	            // attach listeners
	            utils.vars.each(elements, bind(this, function(element) {
	                utils.vars.each(events, bind(this, function(eventName) {
	                    if (typeof eventName == 'string') {
	                        this._attachRelayEventListenerToElement(element, eventName, name, debounceTimeout);
	                    }
	                }));
	            }));
	        }
	    };
	
	    /**
	     * _attachListenerToElement
	     * Simple helper to attach a listener for the given element and event.
	     * This method is used for attaching property event listeners and relay event listeners
	     * Override for custom implementation.
	     * @param   {string}    The handler method name
	     * @param   {object}    The element to listen to
	     * @param   {string}    The event to listen for
	     * @param   {string}    The property name or relay name
	     * @param   {int}       Debounce timeout or null
	     */
	    this._attachListenerToElement = function(handlerMethodName, element, eventName, name, debounceTimeout) {
	        var elementIdentifier = this._getSetElementIdentifier(element),
	            eventHandlerMapping = this._eventHandlersToElementMapping[elementIdentifier] || {},
	            fn = bind(this, function() {
	                var args = utils.vars.arrayFrom(arguments);
	                args.unshift(eventName, element, name);
	                this[handlerMethodName].apply(this, args);
	            });
	
	        if (!!debounceTimeout) {
	            fn = utils.debounce(fn, debounceTimeout);
	        }
	
	        // handle event handle mapping
	        if (!eventHandlerMapping[eventName]) {
	            eventHandlerMapping[eventName] = [];
	        }
	        eventHandlerMapping[eventName].push(fn);
	        this._eventHandlersToElementMapping[elementIdentifier] = eventHandlerMapping;
	
	        element.addEventListener(eventName, fn);
	    };
	
	    this._attachPropertyListenerToElement = function(element, eventName, property, debounceTimeout) {
	        this._attachListenerToElement('_handlePropertyEvent', element, eventName, property, debounceTimeout);
	    };
	
	    this._attachRelayEventListenerToElement = function(element, eventName, name, debounceTimeout) {
	        this._attachListenerToElement('_handleRelayEvent', element, eventName, name, debounceTimeout);
	    };
	
	    /**
	     * _detachConnectorElementListeners
	     * Helper method
	     * @param   {object}    Dom element
	     */
	    this._detachConnectorElementListeners = function(element) {
	        var elementIdentifier = this._getSetElementIdentifier(element),
		    eventHandlerMapping = this._eventHandlersToElementMapping[elementIdentifier],
	            eventName,
	            i,
	            fn;
	
	        if (eventHandlerMapping) {
	            utils.vars.each(eventHandlerMapping, bind(this, function(event, eventName) {
	                utils.vars.each(event, bind(this, function(fn) {
	                    element.removeEventListener(eventName, fn);
	                }));
	            }));
	
	            delete this._eventHandlersToElementMapping[elementIdentifier];
	        }
	    };
	
	    /**
	     * _resolveElements
	     * Simple helper method to resolve elements from config
	     * Can be: a function with an array of elements as return value,
	     *         NodeList
	     *
	     * @param   {object}    Config object
	     * @return  {array}     Array will all resolved elements
	     */
	    this._resolveElements = function(config, name) {
	        var elements = [];
	
	        if (config.elementSelector) {
	            if (typeof config.elementSelector === 'function') {
	                elements = config.elementSelector();
	                elements = utils.vars.isArray(elements) ? (elements || []) : [elements];
	            } else if (typeof config.elementSelector === 'string') {
	                elements = utils.vars.arrayFrom(document.querySelectorAll(config.elementSelector) || []);
	            } else if(typeof config.elementSelector === 'object') {
	                if (utils.dom.isDomElement(config.elementSelector)) {
	                    elements = [config.elementSelector];
	                } else if(utils.dom.isNodeList(config.elementSelector)) {
	                    elements = utils.vars.arrayFrom(config.elementSelector);
	                } else if (utils.vars.isArray(config.elementSelector)) {
	                    elements = config.elementSelector;
	                } else {
	                    elements = [config.elementSelector];
	                }
	            }
	        }
	
	        return elements;
	    };
	
	    /**
	     * _resolveValue
	     * Simple helper method to resolve the value from an element
	     * based on the tagName.
	     * This method can be overriden by subclass to implement custom resolving.
	     * @param   {object}    Element
	     * @return  {mixed}     The resolved value if found, null otherwise
	     */
	    this._resolveValue = function(elementOrProperty) {
	        var value = null,
	            property = (typeof elementOrProperty == 'string') ? elementOrProperty : null,
	            element = (typeof elementOrProperty == 'object') ? elementOrProperty : null,
	            customValueResolver;
	
	        if(element) {
	            property = this._findPropertyNameByElement(element);
	
	            if (!property) {
	                throw new Error('Could not find element for property: ' + property);
	            }
	        }
	
	        if(property) {
	            element = (this._propertyElementsMapping[property] && this._propertyElementsMapping[property][0]) ? this._propertyElementsMapping[property][0] : null;
	        }
	
	        if (element || property) {
	            customValueResolver = (property && this._propertyConfig[property] && this._propertyConfig[property]['valueResolver']) ? this._propertyConfig[property]['valueResolver'] : null;
	
	            if (customValueResolver) {
	                var propertyConfig = this._propertyConfig[property],
	    	            elements = this._propertyElementsMapping[property];
	    	                
		             // if custom resolver type is function, invoke function and catch result. Otherwise use the customValueResolver value as the fixed value
		             value = (typeof customValueResolver == 'function') ? customValueResolver(element, elements, propertyConfig) : customValueResolver;
	            } else if(element) {
	                switch(element.tagName.toLowerCase()) {
	                    case 'textarea':
	                    case 'input':
	                    case 'radio':
	                    case 'select':
	                        value = element['value'];
	                        break;
	                    default:
	                        if (element.firstChild && element.firstChild.textContent) {
	                            value = element.firstChild.textContent;
	                        } else if ('value' in element) {
	                            value = element['value'];
	                        } else {
	                            value = element;
	                        }
	                };
	            }
	        }
	
	        return this._formatValue(value, property);
	    };
	
	    /**
	     * formatValue
	     * @param   {mixed}
	     * @param   {string}    Property name
	     */
	    this._formatValue = function(origValue, property) {
	        var config = this._propertyConfig[property],
	            value = origValue,
	            valueType = (config && config.valueType) ? config.valueType : null,
	            valueFormat = (config && config.valueFormat) ? config.valueFormat : null;
	
	        if (config && !!config.valueType) {
	            switch(valueType) {
	                case 'date':
	                    try {
	                        value = utils.date.parse(origValue, valueFormat || 'D-M-Y', { forcedTime: [0, 0, 0, 0]});
	                    } catch(error) {
	                        value = null;
	                    }
	                    break;
	                case 'string':
	                    value = String(origValue);
	                    break;
	            }
	        } else {
	            if (!isNaN(origValue) && typeof origValue == 'string') {
	                value = Number(origValue);
	            }
	        }
	
	        return value;
	    };
	
	    /**
	     * _handlePropertyEvent
	     * All configured triggered property events will go through this method.
	     * @param   {string}  Name of the event
	     * @param   {object}  Element
	     * @param   {string}  Name of the property
	     */
	    this._handlePropertyEvent = function(eventName, element, property) {
	        var eventArgs = utils.vars.arrayFrom(arguments).slice(3),
	            currentValue = this.get(property),
	            newValue = this._resolveValue(property);
	
	        switch(eventName) {
	            case '_interval':
	                this._set(property, newValue, { silentSet: true });
	                break;
	            default:
	                this._set(property, newValue);
	        }
	    };
	
	    /**
	     * _handleRelayEvent
	     * All configured triggered relay events will go through this method.
	     * @param   {string}  Name of the event
	     * @param   {object}  Element
	     * @param   {string}  Name (config object key)
	     * @event   relay.<name>.<event>
	     */
	    this._handleRelayEvent = function(eventName, element, name, originEvent) {
	        var eventArgs = utils.vars.arrayFrom(arguments).slice(3),
	            eventNameToEmit = 'relay.' + name + '.' + eventName;
	
	        this.emit(eventNameToEmit, originEvent);
	    };
	
	    /**
	     * _set
	     * Property value setter method
	     * @param   {string}    Property name
	     * @param   {mixed}     The property value
	     * @param   {object}    Optional options object. (silentSet: true to prevent set event)
	     * @event   property.set
	     * @event   property.<property>.set
	     * @event   property.change
	     * @event   property.<property>.change
	     */
	    this._set = function(property, value, options) {
	        var isChanged = !this._compareValues(value, this._data[property]),
	            silentSet = options && options.silentSet === true,
	            currentValue = (property in this._data) ? this._data[property] : null;
	
	        this._data[property] = value;
	        if (!silentSet) {
	            this.emit('property.set', property, this._data[property]);
	            this.emit('property.' + property + '.set', this._data[property]);
	        }
	
	        if (isChanged) {
	            this.emit('property.change', property, this._data[property], currentValue);
	            this.emit('property.' + property + '.change', this._data[property], currentValue);
	        }
	    };
	
	    /**
	     * _compareValues
	     * Helper method to compare 2 values
	     * @TODO: move to hc utility function
	     * @param   {mixed}
	     * @param   {mixed}
	     * @return  {bool}  True if equal, false if not
	     */
	    this._compareValues = function(lft, rght) {
	        var result = (lft === rght);
	
	        // duck type date checking
	        if (lft && lft.getTime && rght && rght.getTime) {
	            result = (lft.getTime() === rght.getTime());
	        } else if(typeof lft == 'object' && typeof rght == 'object') {
	            result = JSON.stringify(lft) === JSON.stringify(rght);
	        }
	
	        return result;
	    }
	
	    /**
	     * _findPropertyNameByElement
	     * Method to find the property name by element
	     * @param   {object}    Element
	     * @return  {string}    The property when found, null otherwise
	     */
	    this._findPropertyNameByElement = function(keyElement) {
	        var foundProperty = null;
	
	        utils.vars.each(this._propertyElementsMapping, bind(this, function(elements, property) {
	            if (this._propertyElementsMapping[property] && this._propertyElementsMapping[property].indexOf(keyElement) !== -1) {
	                foundProperty = property;
	                return false;
	            }
	        }));
	
	        return foundProperty;
	    };
	
	    /**
	     * _hasElementIdentifier
	     * Helper method to determine whether the element has a custom identifier attribute or not
	     * @param   {object}    Dom element
	     * @return  {bool}
	     */
	    this._hasElementIdentifier = function(element) {
	        return (element && element.getAttribute(this._getElementConnectorIdAttributeName()));
	    };
	
	    /**
	     * _getSetElementIdentifier
	     * Helper method that gets our custom generated identifier for the given element or,
	     * when it doesn't exits, generate and set a new one.
	     * @param   {object}    Dom element
	     * @return  {string}    The custom element id
	     */
	    this._getSetElementIdentifier = function(element) {
	        var currentId = element ?  element.getAttribute(this._getElementConnectorIdAttributeName()) : null;
	
	        if (!currentId) {
	            currentId = this._generateCustomId();
	            element.setAttribute(this._getElementConnectorIdAttributeName(), currentId)
	        }
	
	        return currentId;
	    };
	
	    /**
	     * _getElementConnectorIdAttributeName
	     * Helper that generates the name of the attribute for the custom id
	     * @return  {string}    Attribute name
	     */
	    this._getElementConnectorIdAttributeName = function() {
	        return 'data-' + this._dataAttributePrefix + '-connector-id';
	    };
	
	    /**
	     * _generateCustomId
	     * Helper to generate custom id
	     * @return  {string}    Generated id
	     */
	    this._generateCustomId = function() {
	        return this._customIdCounter++;
	    };
	
	    /**
	     * Public methods
	     */
	
	    /**
	     * get
	     * Property value getter
	     * @param   {string}    Property name
	     * @param   {string}    Force resolve mode (optional). Options: content.documentconnector.ConnectorAdapter.VALUE_RESOLVING_* (relay and data)
	     * @return  {mixed}     Property value
	     */
	    this.get = function(property, forceResolveMode) {
	        var resolveMode = !!forceResolveMode ? forceResolveMode : this._propertyElementsValueResolvingMode[property];
	
	        if (resolveMode == content.documentconnector.ConnectorAdapter.VALUE_RESOLVING_RELAY) {
	            return this._resolveValue(property);
	        } else {
	            return (property in this._data) ? this._data[property] : null;
	        }
	    };
	
	    this.getData = function() {
	        return this._data;
	    };
	
	    this.getInitialData = function() {
	        return this._initialData;
	    };
	
	    this.getConfig = function() {
	        return this._config;
	    };
	
	    this.getConfigItem = function(name, defaultValue) {
	        defaultValue = (defaultValue !== undefined) ? defaultValue : null;
	        return name in this._config ? this._config[name] : defaultValue;
	    };
	
	    this.getId = function() {
	        return this._id;
	    };
	
	    this.getConnectorName = function() {
	        return this._connectorName;
	    };
	
	    this.stopIntervalListener = function() {
	        if (this._intervalProcessId) {
	            clearInterval(this._intervalProcessId);
	            this._intervalProcessId = null;
	        }
	    };
	
	    this.startIntervalListener = function() {
	        if (!this._intervalProcessId && (this._intervalPropertyElements.length > 0 || this._autoCleanupAndReinit)) {
	            this._intervalProcessId = setInterval(bind(this, this.onInterval), this._intervalDelay);
	        }
	    };
	
	    /**
	     * reInitData
	     * Public method to reinitialize data
	     * Usefull to force reinitialization of property data values
	     */
	    this.reInitData = function(properties) {
	        this._initData(properties);
	    };
	
	    /**
	     * cleanupAndReinit
	     * Method that determines whether connected elements still exist in the document
	     * body. If they don't, they should be removed and detached from the connector.
	     * If they don't exist in the document, probably something is changed (AJAX request,
	     * could have replaced a page fragment). In that case, the applicable property or relay names
	     * should be reinitialized
	     */
	    this.cleanupAndReinit = function() {
	        var name,
	            elementList,
	            cleanedUp;
	
	        /**
	         * @param elementList {Object}
	         * @todo Fix problems with this function
	         */
	        var cleanup = bind(this, function(elementList, config) {
	            var cleanedUp = [],
	                name,
	                i,
	                element,
	                isDirty,
	                hasCleanedUp;
	
	            for (name in elementList) {
	                isDirty = false;
	
	                if (elementList[name]) {
	                    for (i = 0; i < elementList[name].length; i++) {
	                        element = elementList[name][i];
	
	                        if (!document.body.contains(element)) {
	                            isDirty = true;
	                        }
	                    }
	
	                    // when system couldn't find elements in first place, and an element selector is configured, mark
	                    // as dirty so it can be tried again...
	                    if (!elementList[name].length && config[name].elementSelector) {
	                        isDirty = true;
	                    }
	
	                    if (isDirty) {
	                        for (i = 0; i < elementList[name].length; i++) {
	                            this._detachConnectorElementListeners(elementList[name][i]);
	
	                            for (y = 0; y < this._intervalPropertyElements.length; y++) {
	                                if (this._intervalPropertyElements[y].element === element && this._intervalPropertyElements[y].property === name) {
	                                    this._intervalPropertyElements.splice(y, 1);
	                                }
	                            }
	
	                            elementList[name].slice(i, 1);
	                        }
	                        cleanedUp.push(name);
	                    }
	                }
	            }
	
	            return cleanedUp;
	        });
	
	        var reinit = bind(this, function(cleanedUp, initializer, config) {
	            var i,
	                name,
	                hasCleanedUp = null;
	
	            if (cleanedUp.length > 0) {
	                for (i = 0; i < cleanedUp.length; i++) {
	                    name = cleanedUp[i];
	
	                    if (name in config) {
	                        initializer(name, config[name]);
	
	                        if (hasCleanedUp === null) {
	                            hasCleanedUp = true;
	                        }
	                    }
	                }
	            }
	
	            return hasCleanedUp === true;
	        });
	
	        var dirtyProperties = cleanup(this._propertyElementsMapping, this._propertyConfig);
	        hasCleanedUp = reinit(dirtyProperties, bind(this, this._initProperty), this._propertyConfig);
	
	        if (hasCleanedUp) {
	            this.reInitData(dirtyProperties);
	        }
	
	        reinit(cleanup(this._relayEventsElementsMapping, this._relayEventsConfig), bind(this, this._initRelayEvent), this._relayEventsConfig);
	    };
	
	    /**
	     * Event handler methods
	     */
	
	    /**
	     * onInterval
	     * This method will be called after each interval update and will
	     * trigger the "handleEvent" method for every interval element
	     */
	    this.onInterval = function() {
	        utils.vars.each(this._intervalPropertyElements, bind(this, function(mapping) {
	            this._handlePropertyEvent('_interval', mapping.element, mapping.property);
	        }));
	    };
	});
	
	content.documentconnector.ConnectorAdapter.VALUE_RESOLVING_DATA = 'data';        // This mode will return the value from the prefetched data
	content.documentconnector.ConnectorAdapter.VALUE_RESOLVING_RELAY = 'relay';      // This mode will invoke the value resolver to resolve the value
	
	content.documentconnector.AdapterResolver = function() {
	    return {
	        resolve: function(config) {
	            config = Object.assign({
	                customNamespaces: null,
	                customAdapters: null,
	                doAutoResolve: false,
	                adapterConfig: {},              // will be pased to the resolved adapter
	                connectableTestParams: []       // will be pased to adapter.isConnectable static method
	            }, config);
	
	            this._adapterToConfigMapping = {};
	
	            var adapters = this.getAvailableAdapters(config.doAutoResolve, config.customNamespaces, config.customAdapters),
	                resolvedAdapter = null;
	
	            utils.vars.each(adapters, function(adapterData) {
	                adapter = adapterData.adapter;
	
	                if (!adapter.isConnectable || typeof adapter.isConnectable != 'function') {
	                    throw new Error('Every connector adapter should implement a static "isConnectable" method');
	                }
	
	                if (!resolvedAdapter && adapter.isConnectable.apply(window, [adapterData.isConnectableCheckConfig || {}])) {
	                    resolvedAdapter = new adapter(adapterData.config);
	                    return false;
	                }
	            });
	
	            if (!resolvedAdapter) {
	                resolvedAdapter = new content.documentconnector['connectoradapter']['Document']({});
	            }
	
	            return resolvedAdapter;
	        },
	
	        getAvailableAdapters: function(doAutoResolve, customNamespaces, customAdapters) {
	            var namepaces = (customNamespaces || []).concat([
	                    content.documentconnector['connectoradapter']['bookingsengine'],
	                    content.documentconnector['connectoradapter']['document']
	                ]),
	                customAdapters = [].concat(customAdapters || []),
	                adapters = [],
	                customAdapterClass,
	                classSuffix;
	
	            doAutoResolve = (doAutoResolve === true);
	
	            if (doAutoResolve) {
	                utils.vars.each(namepaces, function(namespace) {
	                    utils.vars.each(namespace, function(adapter, name) {
	                        if (adapter.prototype instanceof content.documentconnector['connectoradapter']['Document'] && typeof adapter.isConnectable == 'function') {
	                            adapters.push( { adapter: adapter, config: null });
	                        }
	                    });
	                });
	            }
	
	            utils.vars.each(customAdapters, function(customAdapter) {
	                classSuffix = customAdapter;
	                if (typeof classSuffix !== 'string') {
	                    classSuffix = customAdapter && customAdapter.connectorClassSuffix ? customAdapter.connectorClassSuffix : null;
	                }
	
	                if (classSuffix) {
	                    customAdapterClass = utils.vars.get(content.documentconnector, classSuffix);
	
	
	                    if (customAdapterClass.prototype instanceof content.documentconnector['connectoradapter']['Document'] && typeof customAdapterClass.isConnectable == 'function') {
	                        adapters.push({
	                            adapter: customAdapterClass,
	                            config: customAdapter.config || null,
	                            isConnectableCheckConfig: customAdapter.isConnectableCheckConfig || null
	                        });
	                    }
	                }
	            });
	
	            return adapters;
	        }
	    }
	}();
	
	content.documentconnector['connectoradapter']['Document'] = Class(content.documentconnector.ConnectorAdapter, function(supr) {
	    this.init = function init(config) {
	        config = this._mergeConfig({
	            defaultListenerDebounceTimeout: 100,
	            'properties': {
	                'title': {
	                    valueResolver: function(object) { return document['title']; },
	                    valueResolving: 'relay'
	                },
	                'host': {
	                    valueResolver: function() { return document['location']['host']; },
	                    valueResolving: 'relay'
	                }
	            }
	        }, config);
	
	        supr(this, this.init, [config]);
	    };
	});
	
	content.documentconnector['connectoradapter']['Document'].isConnectable = function() {
	    return !!document;
	};
	
	content.documentconnector['connectoradapter'].BookingsEngine = Class(content.documentconnector['connectoradapter']['Document'], function(supr) {
	    this.init = function init(config) {
	        config = this._mergeConfig({
	            defaultListenerDebounceTimeout: 200,
	            'properties': {
	                // // Basic config with query selector and event listeners
	                // arrivalDate: {
	                //     elementSelector: '[name$=ArrivalDatePicker]',
	                //     listeners: ['keydown', 'change']
	                // },
	                //
	                // // Custom valueResolver
	                // arrivalDate: {
	                //     elementSelector: '.DDListCurrent .CurCode',
	                //     listeners: ['keydown', 'change'],
	                //     valueResolver: function(element) { return element.textContent; },          // The return value of the callback will be used as the value
	                //     valueResolver: 'EUR'                                                       // If it's not a function, this will be used as the fixed value
	                // },
	                //
	                // // Custom event listener initializer
	                // arrivalDate: {
	                //     elementSelector: '[name$=ArrivalDatePicker]',
	                //     listeners: function(element) { /* custom initializer for element */ },
	                //     listeners: {
	                //         keydown: function() { /* custom initializer for element and event */ },
	                //         change: function() { /* custom initializer for element and event */ }
	                //     }
	                // },
	                //
	                // // Interval listener
	                // // Sometimes it is not possible to detect a change without continue polling...
	                // arrivalDate: {
	                //     elementSelector: '[name$=ArrivalDatePicker]',
	                //     listeners: ['_interval']
	                // },
	                'emailAddress': {},
	                'arrivalDate': {},
	                'departureDate': {},
	                'nightCount': {},
	                'activeCurrency': {},
	                'activeVoucherCode': {},
	                'selectedHotelName': {},
	                'selectedAdultCount': {},
	                'selectedChildCount': {},
	                'selectedBabyCount': {},
	                'selectedRoomCount': {},
	                'steps': {},
	                'activeStepIndex': {},
	                'activeStepName': {},
	                'arrangements': {},
	                'activeArrangement': {},
	                'roomTypes': {},
	                'activeRoomType': {},
	                'isBookingsEngineStartPage': {},
	                'isBookingsEngineFinishedPage': {},
	                'currentRate': {},
	                'language': {},
	
	                // available rooms and rates listed on the page.
	                // @note: these only include the data visible on the page. So when a filter is applied
	                //        this result only includes the data pass through the filtering...
	                //        Booking engines sometimes provide the lowest price. That price should be used for the price
	                //        comparison... see: lowestAvailableRate
	                // Should return an array with objects formatted like: 
	                //  { title: 'Room title', rates: [ { title: 'Rate title', rate: 120.95 }, etc] }
	                'roomsAndRates': {
	                    valueResolver: bind(this, this.resolveRoomsAndRates)
	                },
	
	                // The minimum price for the arrival date. Used for price comparison tool
	                'arrivalDatePrice': {
	                    valueResolver: bind(this, this.resolveArrivalDatePrice)
	                },
	
	                // returns an object with: { min: <lowest price>, avg: <average price>, max: <highest price> }
	                // @note: this is based on the result of roomsAndRates, so only price data listed on the page. @see note roomsAndRates
	                'minMaxAvgRates': {
	                    valueResolver: bind(this, this.resolveMinMaxAvgRates)
	                },
	
	                // The lowest available rate. Some booking engine provide sometimes the lowest rate in some sort of way.
	                // That rate should be used for the price comparison.
	                // It could be that an engine provide this value, in that case the minMaxAvgRates.min value can be used as fallback.
	                'lowestAvailableRate': {}
	            },
	
	            // relayEvents: {
	            //     bookButton: {
	            //         elementSelector: '.book_now_btn',
	            //         events: ['mouseenter', 'mouseover', 'mouseleave']
	            //     }
	            // }
	        }, config);
	
	        supr(this, this.init, [config]);
	    };
	
	    this.resolveRoomsAndRates = function() {
	        return null;
	    };
	
	    this.resolveArrivalDatePrice = function() {
	        var rates = this.get('minMaxAvgRates','relay');
	        return rates && rates.min ? rates.min : null;
	    };
	
	    this.resolveMinMaxAvgRates = function() {
	        var roomsAndRates = this.get('roomsAndRates') || [],
	            rates = { min: null, max: null, avg: null },
	            rate;
	
	        utils.vars.each(roomsAndRates, function(room) {
	            utils.vars.each(room.rates || [], function(rateObject) {
	                rate = rateObject.rate;
	
	                // determine min rate
	                if(rate === null) { return; }
	                if (!rates.min || rates.min > rate) {
	                    rates.min = rate;
	                }
	
	                // determine max rate
	                if (!rates.max || rates.max < rate) {
	                    rates.max = rate;
	                }
	            });
	        });
	
	        if (rates.min !== null && rates.max !== null) {
	            rates.avg = ((rates.max - rates.min) / 2) + rates.min;
	        }
	
	        return rates;
	    };
	});
	
	content.documentconnector['connectoradapter'].ConfigurableBookingsEngine = Class(content.documentconnector['connectoradapter']['Document'], function(supr) {
	    this.init = function init(config) {
	        config = this._mergeConfig({
	        }, config || {});
	
	        supr(this, this.init, [config]);
	    };
	});
	
	content.documentconnector['connectoradapter'].ConfigurableBookingsEngine.isConnectable = function() {
	    return false;
	};
	
	content.documentconnector['connectoradapter']['bookingsengine']['Synxis'] = Class(content.documentconnector['connectoradapter'].BookingsEngine, function (supr) {
	    this.init = function init(config) {
	        config = this._mergeConfig({
	            connectorName: 'Synxis',
	            'properties': {
	                'arrivalDate': {
	                    elementSelector: 'body',
	                    listeners: ['_interval'],
	                    valueResolver: bind(this, this.resolveArrivalDate)
	                },
	                'departureDate': {
	                    elementSelector: 'body',
	                    listeners: ['_interval'],
	                    valueResolver: bind(this, this.resolveDepartureDate)
	                },
	                'emailAddress': {
	                    elementSelector: bind(this, this._resolveGlobalTokens),
	                    listeners: ['_interval'],
	                    valueResolver: bind(this, this._resolveEmail)
	                },
	                'activeRoomType': {
	                    elementSelector: '.RoomSelection',
	                    listeners: ['_interval'],
	                    valueResolver: bind(this, this._resolveRoomType)
	                },
	                'language': {
	                    elementSelector: bind(this, this._resolveGlobalTokens),
	                    listeners: ['_interval'],
	                    valueResolver: bind(this, function (element) {
	                        if (element && element.LangCode && element.LangCode.indexOf("-") !== -1) {
	                            return element.LangCode.split('-')[0];
	                        }
	
	                        return null;
	                    })
	                },
	                'arrivalDatePrice': {
	                    elementSelector: 'body',
	                    listeners: ['_interval'],
	                    valueResolver: bind(this, function (el) {
	                        // This only applies to DeSoto
	                        var sessionElememt = this._resolveXbeState();
	                        if (sessionElememt && sessionElememt.hotelId === 76327) {
	                            var rooms = this.get('roomsAndRates'),
	                                rates,
	                                lowestPrice;
	
	                            if (rooms) {
	                                for (var i = 0; i < rooms.length; i++) {
	                                    rates = rooms[i];
	                                    if (rates.title.toLowerCase() === "best available rate") {
	                                        rates = rates.rates;
	
	                                        for (var j = 0; j < rates.length; j++) {
	                                            var rate = rates[j];
	                                            if (!lowestPrice || rate.rate < lowestPrice) {
	                                                lowestPrice = rate.rate;
	                                            }
	                                        }
	                                    }
	                                }
	                            }
	
	                            return lowestPrice;
	                        } else {
	                            return this._resolveArrivalDatePrice();
	                        }
	                    })
	                },
	                'nightCount': {
	                    elementSelector: 'body',
	                    valueResolver: bind(this, this._resolveNightCount),
	                    listeners: ['_interval']
	                },
	                'activeCurrency': {
	                    elementSelector: '[id$=CurrencyCodeHF], [id$=ddlCurrencies] option:checked, [id$=CurrencySelectionPanel] > li > div > span',
	                    listeners: ['_interval'],
	                    valueResolver: bind(this, this.resolveActiveCurrency)
	                },
	                'roomsAndRates': {
	                    elementSelector: '.ProductsList',
	                    listeners: ['_interval'],
	                    valueResolver: bind(this, this._resolveRoomsAndRates)
	                },
	                'selectedAdultCount': {
	                    elementSelector: '.SummaryQuantitiesDiv .StayValue, [name*="AdultsDropdown"]',
	                    listeners: ['_interval'],
	                    valueResolver: bind(this, this._resolveAdultCount)
	                },
	                'selectedChildCount': {
	                    elementSelector: '.SummaryQuantitiesDiv .StayValue, [name*="ChildrenDropdown"]',
	                    listeners: ['_interval'],
	                    valueResolver: bind(this, this._resolveChildCount)
	                },
	                'currentRate': {
	                    elementSelector: '.Total, .RoomTotalTxt',
	                    listeners: ['_interval'],
	                    valueResolver: bind(this, this._resolveCurrentRate)
	                }
	            },
	            intervalDelay: 2000,
	        }, config);
	        supr(this, this.init, [config]);
	    };
	
	    this._resolveXbeState = function () {
	        return (window.Xbe && window.Xbe.State) ? window.Xbe.State : null;
	    };
	
	    this._resolveGlobalTokens = function () {
	        return (window._GlobalTokens) ? window._GlobalTokens : null;
	    };
	
	    this.resolveArrivalDate = function (element) {
	        var elements = document.querySelectorAll('a.ui-state-active');
	        if (elements.length > 0) {
	            var regex = /jd(\d)+.5/g;
	            if (elements[0] && regex.test(elements[0].className)) {
	                var julianDateValue = parseFloat(elements[0].className.match(regex)[0].replace("jd", ""));
	                return (this.resolveJulianDateToDate(julianDateValue));
	
	            }
	        }
	        var sessionElement = this._resolveXbeState();
	        return (sessionElement) ? new Date((sessionElement.arrive / 10000) + new Date('0001-01-01').getTime()) :
	            (/arrive=\d{4}-\d{2}-\d{2}/.test(window.location.href)) ? new Date(window.location.href.match(/arrive=\d{4}-\d{2}-\d{2}/)[0].split("=")[1]) : null;
	
	    };
	
	    this.resolveDepartureDate = function (element) {
	        var elements = document.querySelectorAll('a.ui-state-active');
	        if (elements.length > 1) {
	            var julianDateValue = parseFloat(elements[elements.length - 1].className.match(/jd(\d)+.5/g)[0].replace("jd", ""));
	            return (this.resolveJulianDateToDate(julianDateValue));
	        }
	        var sessionElement = this._resolveXbeState();
	        return (sessionElement) ? new Date((sessionElement.depart / 10000) + new Date('0001-01-01').getTime()) :
	            (/depart=\d{4}-\d{2}-\d{2}/.test(window.location.href)) ? new Date(window.location.href.match(/depart=\d{4}-\d{2}-\d{2}/)[0].split("=")[1]) : null;
	    };
	
	    this._resolveRoomType = function (element) {
	        if (element) {
	            var content = element.querySelector('.StayValue > a');
	            return content ? content.textContent.trim() : null;
	        }
	        return null;
	    };
	
	    this._resolveAdultCount = function (element) {
	        if (element && utils.dom.hasClass(element.parentNode.parentNode, 'SummaryQuantitiesDiv')) {
	            var rawAmountOfAdults = element.textContent.trim().split(',')[0];
	            if (rawAmountOfAdults && rawAmountOfAdults.indexOf("Adult") !== -1) {
	                return parseInt(rawAmountOfAdults.split("Adult")[0]);
	            } else if (rawAmountOfAdults && rawAmountOfAdults.indexOf("Volwassene") !== -1) {
	                return parseInt(rawAmountOfAdults.split("Volwassene")[0]);
	            } else if (rawAmountOfAdults && rawAmountOfAdults.indexOf("Erwachsener") !== -1) {
	                return parseInt(rawAmountOfAdults.split("Erwachsener")[0]);
	            } else {
	                return null;
	            }
	
	        } else if (element && element.id.indexOf('AdultsDropdown')) {
	            return parseInt(element.value);
	        } else {
	            return 0;
	        }
	    };
	
	    this._resolveChildCount = function (element) {
	        if (element && utils.dom.hasClass(element.parentNode.parentNode, 'SummaryQuantitiesDiv')) {
	            var rawAmountOfChildren = element.textContent.trim().split(',')[1];
	
	            if (rawAmountOfChildren && rawAmountOfChildren.indexOf("Child") !== -1) {
	                return parseInt(rawAmountOfChildren.split("Child")[0]);
	            } else {
	                return null;
	            }
	
	        } else if (element && element.id.indexOf('ChildrenDropdown')) {
	            return parseInt(element.value);
	        } else {
	            return 0;
	        }
	    };
	
	    this.resolveActiveCurrency = function (element) {
	        if (element) {
	            if (element.tagName != "SPAN") {
	                var activeCurrency = element.value;
	                return content.documentconnector['connectoradapter']['bookingsengine']['Synxis'].currencyMapping[activeCurrency];
	            } else {
	                return element.innerText;
	            }
	        } else if (this._resolveGlobalTokens()) {
	            return this._resolveGlobalTokens().CurrCode || null;
	        }
	        return null;
	    };
	
	    this._resolveEmail = function (element) {
	        // First we are gonna check in the internal JS datastructure of Synxis
	        if (element && element.CEmail !== "" && utils.validateEmail(element.CEmail)) {
	            return element.CEmail;
	        }
	
	
	        // Get all the email input elements
	        var emailElements = document.querySelectorAll('input[name*="Email"]'),
	            emailElement;
	        for (var i = 0; i < emailElements.length; i++) {
	            emailElement = emailElements[i];
	
	            // If the element has a valid email then return it!
	            if (utils.validateEmail(emailElement.value)) {
	                return emailElement.value;
	            }
	        }
	
	        // If everything fails, then return null
	        return null;
	    };
	
	    this._resolveArrivalDatePrice = function (element) {
	        var priceElement = document.querySelector('.ui-state-active');
	        if (priceElement) {
	            var price = this._resolveArrivalDatePriceInfo(priceElement);
	            return price !== 'N/A' ? price : null;
	        } else if (this.get('minMaxAvgRates')) {
	            return this.get('minMaxAvgRates').min;
	        }
	    };
	
	    //**This is resolving the arrival  price for the calendar view!**/
	    this._resolveArrivalDatePriceInfo = function (element) {
	        if (element) {
	            var arrivalDate = this.get('arrivalDate', 'relay'),
	                elementDate = new Date(element.getAttribute('title'));
	            if (arrivalDate && elementDate.toJSON() === arrivalDate.toJSON()) {
	                var elementPrice = element.querySelector('.DayPrice');
	
	                return elementPrice && (elementPrice.textContent.match(/\d+.?\d*/g) ? parseFloat(elementPrice.textContent.match(/\d+.?\d*/g)[0]) : 'N/A');
	            }
	        }
	        return 'N/A';
	    };
	
	    /**
	     * Protected methods
	     */
	    this._resolveRoomsAndRates = function (element) {
	        if (element) {
	            var allRates = [],
	                rawRates = element.querySelectorAll('.ProductsHeader'),
	                excludees = ['AMEX Extra Night Offer', 'Federal Government Rate', 'California Residents Rate'];
	
	            for (var i = 0; i < rawRates.length; i++) {
	                var rateElement = rawRates[i].querySelector('[id$=RateRoomSectionHeaderCntrl_ToggleTextDiv], h3 span[class=hSize2]'),
	                    rateTitle = rateElement ? rateElement.innerText.trim() : null,
	                    roomsElementsId = rawRates[i].id.replace(/_PHP|_ProductsHeaderDiv/, '_RateRoomPanel'),
	                    rawRooms = element.querySelector('#' + roomsElementsId).querySelectorAll('.ProductContainer'),
	                    rooms = [];
	                for (var j = 0; j < rawRooms.length; j++) {
	                    var selectTitle = rawRooms[j].querySelector('.HeaderTitle, .ProductName'),
	                        roomTitle = !selectTitle ? rateTitle : selectTitle.innerText.trim(),
	                        productPrice = rawRooms[j].querySelector('.ProductPrice'),
	                        productPriceGroupSpan = rawRooms[j].querySelector('.ProductPriceGroup > span.Price:not([id^="V151"])'),
	                        productPriceGroup = rawRooms[j].querySelector('.ProductPriceGroup > span.Price:not([id^="V151"])'),
	
	                        roomRate = productPrice ? productPrice.innerText.replace(/[a-zA-z]/g, '') : null;
	                        roomRate = !roomRate && productPriceGroupSpan ? productPriceGroupSpan.innerText.split('/')[0].replace(/[a-zA-z]/g, '') : roomRate;
	                        roomRate = !roomRate && productPriceGroup ? productPriceGroup.innerText.split('/')[0].replace(/[a-zA-z]/g, '') : roomRate;
	                        roomRate = roomRate ? roomRate.trim() : roomRate;
	
	                    if (rateTitle.toLowerCase().indexOf('single') === -1) {
	                        rooms.push({title: roomTitle, rate: utils.money.parse(roomRate)});
	                    }
	                }
	
	                if (excludees.indexOf(rateTitle) == -1) {
	                    allRates.push({title: rateTitle, rates: rooms});
	                }
	            }
	            return allRates;
	        }
	    };
	
	    this._resolveCurrentRate = function (element) {
	        if (element) {
	            var currentRate = parseInt(utils.money.parse(element.textContent) * 100, 10);
	            if (!isNaN(currentRate)) {
	                return currentRate;
	            }
	        }
	
	        return null;
	    };
	
	    this.resolveJulianDateToDate = function (JD) {
	        var y = 4716;
	        var v = 3;
	        var j = 1401;
	        var u = 5;
	        var m = 2;
	        var s = 153;
	        var n = 12;
	        var w = 2;
	        var r = 4;
	        var B = 274277;
	        var p = 1461;
	        var C = -38;
	        var f = JD + j + Math.floor((Math.floor((4 * JD + B) / 146097) * 3) / 4) + C;
	        var e = r * f + v;
	        var g = Math.floor((e % p) / r);
	        var h = u * g + w;
	        var D = Math.floor((h % s) / u) + 1;
	        var M = ((Math.floor(h / s) + m) % n) + 1;
	        var Y = Math.floor(e / p) - y + Math.floor((n + m - M) / n);
	        return new Date(Y, M - 1, D);
	    };
	
	    this._resolveNightCount = function (element) {
	        if (element) {
	            var arrivalDate = this.get('arrivalDate', 'relay'),
	                departureDate = this.get('departureDate', 'relay');
	
	            if (arrivalDate && departureDate) {
	                return Math.round((departureDate - arrivalDate) / (1000 * 60 * 60 * 24));
	            } else {
	                return null;
	            }
	        }
	    };
	
	});
	
	content.documentconnector['connectoradapter']['bookingsengine']['Synxis'].isConnectable = function () {
	    return document.location.href.indexOf('be.synxis') !== -1 || document.location.href.indexOf('gc.synxis') !== -1 || document.location.href.indexOf('reservations.rovehotels') !== -1 || document.location.href.indexOf('reservations.synxis.com') !== -1;
	};
	
	// This is made because synxis uses Id's, which define the valuta..
	content.documentconnector['connectoradapter']['bookingsengine']['Synxis'].currencyMapping = {
	    "1": "USD",
	    "2": "BMD",
	    "3": "CAD",
	    "4": "CHF",
	    "5": "EUR",
	    "6": "PHP",
	    "7": "THB",
	    "8": "AED",
	    "9": "AUD",
	    "10": "BRL",
	    "11": "GBP",
	    "12": "HKD",
	    "13": "IDR",
	    "14": "INR",
	    "15": "JPY",
	    "16": "KRW",
	    "17": "MXN",
	    "18": "MYR",
	    "19": "NZD",
	    "20": "PEN",
	    "21": "RUB",
	    "22": "SAR",
	    "23": "SGD",
	    "24": "TWD",
	    "26": "ZAL",
	    "28": "MTL",
	    "29": "CNY",
	    "30": "DKK",
	    "31": "ISK",
	    "32": "KWD",
	    "33": "NOK",
	    "34": "OMR",
	    "35": "QAR",
	    "36": "SEK",
	    "37": "COP",
	    "38": "TND",
	    "39": "ALL",
	    "40": "AFN",
	    "41": "AMD",
	    "42": "ANG",
	    "43": "AOA",
	    "44": "ARS",
	    "45": "MAD",
	    "46": "DOP",
	    "47": "CRC",
	    "48": "CLP",
	    "50": "PYG",
	    "51": "HTG",
	    "52": "TTD",
	    "53": "XCD",
	    "54": "GYD",
	    "55": "BSD",
	    "56": "AWG",
	    "58": "XPF",
	    "59": "FJD",
	    "60": "EGP",
	    "61": "CSK",
	    "62": "MZN",
	    "63": "PLN",
	    "64": "MOP",
	    "65": "BGL",
	    "66": "CUC",
	    "67": "GNF",
	    "68": "MGA",
	    "69": "NIO",
	    "70": "RON",
	    "71": "SRD",
	    "72": "TJS",
	    "73": "TRY",
	    "74": "UGX",
	    "75": "XOF",
	    "77": "KES",
	    "78": "BHD",
	    "79": "JOD",
	    "80": "VEF",
	    "81": "TMM",
	    "82": "UAH",
	    "83": "HRK",
	    "85": "VND",
	    "86": "GHC",
	    "87": "NPR",
	    "88": "HUF",
	    "89": "VUV",
	    "90": "ILS",
	    "91": "AZN",
	    "92": "KZT",
	    "93": "GEL",
	    "94": "PGK",
	    "95": "SSP",
	    "96": "SCR",
	    "97": "BWP",
	    "98": "MVR",
	    "99": "NAD",
	    "100": "LKR",
	    "101": "TZS",
	    "102": "MUR",
	    "103": "IQD",
	    "104": "NGN",
	    "105": "PKR",
	    "106": "YER",
	    "107": "BZD",
	    "108": "MNT",
	    "109": "BAM",
	    "110": "MDL",
	    "111": "JMD",
	    "113": "Barbadian Dollar",
	    "114": "LBP",
	    "115": "XPF",
	    "116": "CVE",
	    "117": "LAK",
	    "118": "BND",
	    "119": "MMK",
	    "120": "SHP",
	    "121": "RWF",
	    "122": "ZMW",
	    "123": "LSL"
	};
	
	content.ui.view.DialogView = Class(content.ui.view.ComponentView, function (supr) {
	    this.init = function init(opts) {
	        supr(this, this.init, [opts]);
	
	        this.hideDialogButton();
	        utils.listen(utils.dom.query('.~DialogButton', this._element.node), 'touchmove', this, this.onTouchMove);
	        utils.listen(utils.dom.query('.~DialogButton', this._element.node), 'click', this, this.onClickMainButton);
	
	        this._engineConnectorPlugin = this._engine.getPlugin('EngineConnector');
	        this._bookElement = this._engine.getBookElement();
	        this._customBookButtonUrl = (this.getLang().customBookButtonUrl || '').toString();
	
	        if (this._data.alertCloseWindow && this.getAlignment().isCompletelyCentered()) {
	            utils.listen(this._overlay, 'click', this, this.onClickOverlayHide);
	        }
	    };
	
	    this.initDOM = function initDOM(opts) {
	        var isDockWidget = this._data.isDockWidget == 1,
	            isDockableWidget = this._data.isDockableWidget == 1,
	            alignVertical = this.getData().alignVertical == 1,
	            isMobile = this._engine.getDevice().isMobile;
	
	        supr(this, this.initDOM, arguments);
	
	        // if view is a dialog container view, add class to wrap element.
	        // This gives more control with css selectors.
	        if (utils.dom.hasClass(this._content.node, '~DialogContainerView')) {
	            utils.dom.addClass(this._element.node, '~DialogContainerViewWrap');
	        }
	
	        // Mark dockable widgets with class
	        if (isDockableWidget) {
	            utils.dom.addClass(this._content.node, '~IsDockableWidget');
	        }
	
	        if (alignVertical && !isMobile) {
	            var closeButtonIcon = this._title.querySelector(utils.dom.updatePrefix('.~CloseButton .~Icon'));
	
	            closeButtonIcon.innerHTML = 'e';
	
	            utils.dom.addClass(this._content.node, '~IsVerticalAligned');
	            utils.dom.addTransition(this._element.node, ['height .7s']);
	
	            this.hide();
	        }
	    };
	
	    this.onClickMainButton = function onClickMainButton(event) {
	        var data = this._data,
	            engine = this._engine,
	            analytics = engine.getAnalytics(),
	            titan = engine.getTitan(),
	            bookElement = this._bookElement,
	            customBookButtonUrl = this._customBookButtonUrl;
	
	        switch (data.buttonAction) {
	            case 'component':
	                this.emit('MainButton');
	                break;
	            case 'componentRedirect':
	                if (customBookButtonUrl) {
	                    this.emit('MainButton', {'redirectUrl': customBookButtonUrl});
	                } else {
	                    this.emit('MainButton');
	                }
	                break;
	            case 'close':
	                if (engine.getDemo()) {
	                    var plugin = this._engineConnectorPlugin;
	                    plugin && plugin.sendMessage({ // Keep string keys!
	                        'command': 'book'
	                    });
	                }
	                analytics.countWidgetClicks('MainButtonClose', this);
	                titan.event('widget',
	                    'hide',
	                    this._id);
	                    // {
	                    //     language: this._view._data.langCode,
	                    //     currency: this._view._data.activeCurrency
	                    // });
	
	                this.onClickHide(event);
	                break;
	
	            case 'url':
	            case 'urlTab':
	                var track = false,
	                    button = this.query('.~DialogButton');
	
	                if (customBookButtonUrl.length) {
	                    track = true;
	                    setTimeout(bind(this, this.callAnalytics, customBookButtonUrl));
	                    bookElement = null;
	                } else if ((bookElement != null) && (bookElement.tagName === 'A')) {
	                    track = true;
	                    setTimeout(bind(this, this.callAnalytics, bookElement.href));
	                }
	                if (track) {
	                    analytics.trackEvent('click', this._id);
	
	                    titan.event('widget',
	                        'click',
	                        this._id);
	                    	//
	                        // {
	                        //     language: this._view._data.langCode,
	                        //     currency: this._view._data.activeCurrency
	                        // });
	                }
	
	                track && analytics.track(this.getName() + 'Widget', 'book');
	                this._engine.getStorage().setDoneForSession(this._minimizedSessionKey);
	                analytics.countWidgetClicks('MainButtonUrl', this);
	                var parent = button.parentNode,
	                    iconContainer = button.cloneNode(false),
	                    icon = document.createElement('div');
	
	                parent.removeChild(button);
	
	                icon.className = utils.dom.updatePrefix('~Loading');
	                icon.style.fill = utils.dom.computedStyle(button).color;
	                icon.innerHTML = assets.svg.loader;
	
	                iconContainer.appendChild(icon);
	                iconContainer.className = utils.dom.updatePrefix('~LoadingContainer');
	
	                parent.appendChild(iconContainer);
	
	                setTimeout(bind(this, function () {
	                    this.hide();
	                    parent.removeChild(iconContainer);
	                    parent.appendChild(button);
	                }), 1500);
	                break;
	        }
	    };
	
	    this.onClickView = function onClickView(event) {
	        var display = this._display,
	            isMobile = this._engine.getDevice().isMobile;
	
	        if (this.getData().alignVertical && !isMobile) {
	            switch (this._display) {
	                case content.ui.view.MINIMIZED:
	                case content.ui.view.HIDDEN:
	                    this._widget.setStartMinimized(false);
	                    this.show();
	                    break;
	
	                case content.ui.view.VISIBLE:
	                    if (event.target.className === utils.dom.updatePrefix('~Main')) {
	                        this.hide();
	                    }
	                    break;
	            }
	            utils.stopEvent(event);
	            this.emit('Click');
	            return;
	        }
	
	        supr(this, this.onClickView, arguments);
	    };
	
	    this.setLoading = function (loading) {
	        this._loading = this._data.displayPriceComparison ? loading : false; // Bad dependency, fix!
	        this.updateTab();
	    };
	
	    this.setData = function setData(key, value) {
	        supr(this, this.setData, [key, value]);
	        
	        switch (key) {
	            case 'alignment':
	                this.update();
	                (this.getDisplay() === content.ui.view.VISIBLE) ? this.updatePosition() : this.show();
	                break;
	
	            case 'buttonAction':
	                this.hideDialogButton();
	                this.update();
	                break;
	        }
	    };
	
	    this.callAnalytics = function (link) {
	        var data = this._data,
	            analytics = this._engine.getAnalytics(),
	            timeout = null,
	            opened = false;
	
	        //TITAN:: tracking the click URL EVENT
	        this.callTitan(link);
	
	        analytics.analyticsLinkUrl(link, bind(this, function (link) {
	            timeout && clearTimeout(timeout);
	            timeout = null;
	            // Add a little delay to allow analytics tracking...
	            setTimeout(bind(this, function () {
	                    opened = true;
	                    (this._data.buttonAction == 'urlTab') ? window.open(link, '_blank') : (document.location.href = link);
	                }),
	                50
	            );
	        }));
	        // Set a timeout, if analytics does not call back in 3000ms then go to the link...
	        timeout = setTimeout(bind(this, function () {
	                if (!opened) {
	                    (this._data.buttonAction == 'urlTab') ? window.open(link, '_blank') : (document.location.href = link);
	                }
	            }),
	            1000
	        );
	
	
	    };
	
	    this.callTitan = function (link) {
	        var titan = this._engine.getTitan();
	
	        setTimeout(bind(this, function () {
	                titan.event('widget',
	                    'click',
	                    this._id,
	                    {
	                        url: link
	                        // language: this._view._data.langCode,
	                        // currency: this._view._data.activeCurrency
	                    });
	            }),
	            50
	        );
	
	    }
	
	    this.hideDialogButton = function hideDialogButton() {
	        var button = utils.dom.query('.~DialogButton', this._element.node);
	        (this._data.buttonAction === 'hide') ? utils.dom.hide(button) : utils.dom.show(button);
	    };
	
	    this.showAlertView = function showAlertView() {
	        this.emit('ShowAlertView', this._widget);
	    };
	
	    this.show = function show() {
	        supr(this, this.show, arguments);
	
	        if (this.getData().alignVertical) {
	            switch (this._display) {
	                case content.ui.view.SHOWING:
	                    if (this.getMainContent().style.height === '0px') {
	                        this.getMainContent().style.height = this.getMainContentHeight() + 'px';
	                    }
	                    break;
	            }
	        }
	    };
	
	    this.hide = function hide() {
	
	        var alignVertical = this.getData().alignVertical,
	            isMobile = this.getDevice().isMobile;
	
	        if (alignVertical && !isMobile) {
	            var data = this.getData(),
	                node = this._element.node,
	                style = node.style,
	                display = this._display;
	
	            this._displayTimeout && clearTimeout(this._displayTimeout);
	            this._displayTimeout = null;
	
	            switch (this._display) {
	                case content.ui.view.HIDING:
	                    display = !!data.minimizable ? content.ui.view.MINIMIZED : content.ui.view.HIDDEN;
	                    break;
	
	                case content.ui.view.MINIMIZED:
	                    if (!data.minimizable) {
	                        display = content.ui.view.HIDDEN;
	                    }
	                    break;
	
	                case content.ui.view.VISIBLE:
	                    this._widget.setStartMinimized(true);
	                    display = !!data.minimizable ? content.ui.view.MINIMIZED : content.ui.view.HIDDEN;
	            }
	
	            var emit = this._display !== display;
	            this.setDisplay(display);
	            this.hideOverlay();
	            this.getDevice().transitionForPosition(this);
	            this.onHide();
	            emit && this.emit('Hide');
	        } else {
	            supr(this, this.hide, arguments);
	        }
	    };
	
	    this.onClickHide = function onClickHide(event) {
	        var display = this._display;
	
	        if (this.getData().alignVertical && display === content.ui.view.MINIMIZED) {
	            this._widget.setStartMinimized(false);
	            this.show();
	            utils.stopEvent(event);
	            return;
	        }
	
	        supr(this, this.onClickHide, arguments);
	    };
	
	    this.updateButton = function updateButton() {
	        var isMobile = this._engine.getDevice().isMobile;
	
	        if (this.getData().alignVertical && !isMobile) {
	            var closeButtonIcon = this._title.querySelector(utils.dom.updatePrefix('.~CloseButton .~Icon')),
	                closeButtonChar = this.getCloseButtonChar();
	
	            closeButtonIcon.innerHTML = closeButtonChar;
	        }
	
	        supr(this, this.updateButton, arguments);
	    };
	
	    this.getCloseButtonChar = function () {
	        var display = this._display;
	
	        switch (display) {
	            case content.ui.view.MINIMIZED:
	            case content.ui.view.HIDDEN:
	                return 'e';
	                break;
	
	            case content.ui.view.SHOWING:
	            case content.ui.view.VISIBLE:
	                return 'g';
	                break;
	        }
	    };
	});
	
	content.ui.view.LabelView = Class(content.ui.view.ComponentView, function (supr) {
	    this.init = function init(opts) {
	        opts.data.width = 300; // This value is set to the size of the notification and voucher widget...
	        opts.data.alignment = opts.data.labelAlignment;
	        opts.components = [];
	        opts.labelMode = true;
	
	        this._hideTriggeredByClose = false;
	        this._firstShow = true; // Somewhere something goes wrong, hard fix so when widget show's it won't show button
	        this._isLabelFirstShown = false;  // --> true after the label is shown and hidden the first time
	        this._isButtonHiddenOnMinimize = false;
	
	        supr(this, this.init, [opts]);
	
	        if (this._widget.getData().data.label) {
	            if (this._engine.getDevice().isMobile) {
	                utils.dom.show(this.query('.~TitleLabelEl'));
	            } else {
	                utils.dom.show(this.query('.~TitleLabelEl'), 'table-cell');
	            }
	        }
	
	        this.calculateLabelVisibleWidth();
	    };
	
	    this.initDOM = function initDOM(opts) {
	        supr(this, this.initDOM, arguments);
	        this.updateButton();
	    };
	
	    this.setData = function setData(key, value) {
	        switch (key) {
	            case 'width':
	                // Always use the fixed width...
	                break;
	
	            case 'minimizable':
	                supr(this, this.setData, [key, value]);
	                this.emit('LabelMode', false);
	                break;
	
	            case 'label':
	                supr(this, this.setData, [key, value]);
	                this.emit('LabelMode', !!value);
	                break;
	
	            case 'alignment':
	                // Don't set the alignment, this property is only meant for the main widget,
	                // the label alignment can be set separately...
	                break;
	
	            case 'labelAlignment':
	                if (value == 4) { // Don't compare types!
	                    value = 5;
	                }
	                this._data.labelAlignment = value;
	                key = 'alignment';
	                supr(this, this.setData, [key, value]);
	                break;
	
	            default:
	                supr(this, this.setData, [key, value]);
	                break;
	        }
	    };
	
	    this.update = function update() {
	        supr(this, this.update, arguments);
	
	        if (this._firstShow && (this._engine.getDevice().isMobile && !this._startMinimized)) {
	            var closeButton = this.query('.~CloseButton');
	            utils.dom.hide(closeButton);
	            this._firstShow = false;
	        }
	    }
	
	    this.show = function show() {
	        if (this.getDevice().isMobile) {
	
	            var closeButton = this.query('.~CloseButton');
	            closeButton.style.height = '25px';
	            closeButton.style.display = 'block';
	
	            (this._hideTriggeredByClose) && (this._hideTriggeredByClose = false);
	        }
	        supr(this, this.show, arguments);
	    }
	
	    this.hide = function hide() {
	        var data = this.getData(),
	            device = this.getDevice(),
	            isMobile = device.isMobile,
	            hideTriggeredByClose = this._hideTriggeredByClose,
	            mobileMinimizable = data.mobileMinimizable;
	        if (isMobile) {
	            if (!mobileMinimizable || !hideTriggeredByClose) {
	                var closeButton = this.query('.~CloseButton');
	                closeButton.style.height = '0px';
	                closeButton.style.display = 'none';
	            }
	
	            (hideTriggeredByClose) && (this._hideTriggeredByClose = false);
	        }
	        supr(this, this.hide, arguments);
	    }
	
	    this.onClickView = function onClickView(event) {
	        // resetting the flags
	        this._hisButtonHiddenOnMinimize = false;
	        this.emit('Click');
	    };
	
	    this.onClickHide = function onClickHide(event) {
	        if (this.getDevice().isMobile) {
	            this._hideTriggeredByClose = true;
	        }
	        supr(this, this.onClickHide, arguments);
	    };
	
	    /**
	     * Calculate's label-text width
	     * @return {[type]} [description]
	     */
	    this.calculateLabelVisibleWidth = function () {
	        if (!this._engine.getDevice().isMobile) {
	            var label = this.query('.~Widget.~DesktopDialogWidget.~LabelView'),
	                text = this.query('.~Main'),
	                icon = (this._data.tab) ? this.query('.~Tab') : this.query('.~OpenButton');
	            labelStyle = utils.dom.computedStyle(label),
	                textStyle = utils.dom.computedStyle(text),
	                iconStyle = utils.dom.computedStyle(icon),
	                iconWidth = parseInt(iconStyle.width, 10),
	                width = parseInt(labelStyle.width, 10),
	                labelOffset = this.getLabelOffset(), // Get the label offset
	                horizontalOffset = this.getHorizontalOffset(), // Get the horizontal offset
	
	                // Actual calculation
	                textWidth = width - iconWidth, // Calculate space for text in label (should be 240)
	                textOffset = (labelOffset + horizontalOffset), // Calculate offset for text area. (should be negative)
	                maxTextWidth = textWidth + textOffset; // Calculate max width for text area, (must be positive)
	
	            text.style.maxWidth = maxTextWidth + 'px';
	
	            if (parseInt(text.style.maxWidth, 10) == parseInt(textStyle.width, 10)) {
	                text.style.lineHeight = '15px'; // Do NOT forget to edit this if label-styling changes...
	                text.style.paddingTop = '7px';  // Do NOT forget to edit this if label-styling changes...
	            }
	        }
	    };
	});
	
	content.ui.view.IconLabelView = Class(content.ui.view.LabelView, function(supr) {
		this.init = function init(opts) {
			supr(this, this.init, [opts]);
	
	        this._titleLabelEl = this.query('.~TitleLabelEl');
	        this._labelType = opts.data.labelType || 'rectangle';
	        this.transformDefaultLabelIntoIcon();
	        this.initEventListeners();
	
			utils.dom.show(this._titleLabelEl);
		};
	
	    /**
	     * transformDefaultLabelIntoIcon
	     * Helper method to transform the content.ui.view.LabelView into
	     * an icon label.
	     * It is not possible, in a clean way, to add a custom label with a custom LabelView and
	     * a custom html view. The default label view is completely intertwined.
	     * This is a temp solution for new labels until the base is refactored
	     */
	    this.transformDefaultLabelIntoIcon = function() {
	        var tabEl = this.query('.~TitleLabelEl .~Tab'),
	            openButtonEl = this.query('.~TitleLabelEl .~OpenButton'),
	            iconEl = document.createElement('div'),
	            hoverBeforeEl = document.createElement('div'),
	            wrapperEl = document.createElement('div'),
	            dialogLabelStyle = this._data.style.dialogLabel ? utils.dom.cssStringToObject(this._data.style.dialogLabel) : null,
	            dialogLabelIconStyle = this._data.style.dialogLabelIcon ? utils.dom.cssStringToObject(this._data.style.dialogLabelIcon) : null;
	
	        // remove TitleLabel class to prevent default label styling
	        utils.dom.removeClass(this._titleLabelEl, '~TitleLabel');
	
	        // add IconTitleLabel and design classes to allow custom styling
	        utils.dom.addClass(this._titleLabelEl, '~IconTitleLabel');
	        utils.dom.addClass(this._titleLabelEl, '~DesignRectangle');
	
	        // hide tab element. Not required for this label
	        utils.dom.hide(tabEl);
	        utils.dom.hide(openButtonEl);
	
	        // remove content element box shadow. Not required for this label
	        this._content.node.style.boxShadow = 'none';
	
	        // @INFO: the template engine doesn't support working if tags?!?
	        //        This solution is required to undo applied styles. These styles should
	        //        be applied to the wrapper element for these custom labels...
	        if (dialogLabelStyle) {
	            utils.vars.each(dialogLabelStyle, bind(this, function(styleValue, styleProperty) {
	                this._titleLabelEl.style[styleProperty] = 'initial';
	            }));
	        }
	
	        // Wrapper element
	        utils.dom.addClass(wrapperEl, '~Wrapper');
	        wrapperEl.innerHTML = this._titleLabelEl.innerHTML;
	        utils.dom.style(wrapperEl, this._data.style.dialogLabel);
	        this._titleLabelEl.innerHTML = '';
	        this._titleLabelEl.appendChild(wrapperEl);
	        utils.dom.addClass(this._titleLabelEl, '~Type' + utils.string.ucfirst(this._labelType));
	        this._wrapperEl = wrapperEl;
	
	        // insert hoverBeforeEl as first child of wrapper element.
	        // This element is required for dynamic background color on hover
	        wrapperEl.insertBefore(hoverBeforeEl, wrapperEl.childNodes[0]);
	        utils.dom.addClass(hoverBeforeEl, '~Before');
	        this._hoverBeforeEl = hoverBeforeEl;
	
	        // insert icon element
	        utils.dom.addClass(iconEl, '~Icon mdi ' + this._data.labelIcon);
	        (!!dialogLabelIconStyle) && utils.dom.style(iconEl, dialogLabelIconStyle);
	        wrapperEl.insertBefore(iconEl, wrapperEl.childNodes[0]);
	        this._iconEl = iconEl;
	
	        this._dialogLabelStyle = dialogLabelStyle;
	        this._dialogLabelIconStyle = dialogLabelIconStyle;
	    };
	
	    this.initEventListeners = function() {
	        this._wrapperEl.addEventListener('mouseenter', bind(this, this.onLabelMouseEnter));
	        this._wrapperEl.addEventListener('mouseleave', bind(this, this.onLabelMouseLeave));
	    };
	
		this.initDOM = function initDOM(opts) {
			supr(this, this.initDOM, arguments);
			this.updateButton();
		};
	
	    /**
	     * Event handler methods
	     */
	
	    this.onLabelMouseEnter = function() {
	        if (this._labelType == 'circle') {
	            if (this._dialogLabelIconStyle && this._dialogLabelIconStyle.color && this._dialogLabelIconStyle.color.match(/rgb/)) {
	                var rgbaData = this._dialogLabelIconStyle.color.replace(/^rgba?\(|\s+|\)$/g,'').split(',');
	                rgbaData[3] = .2;
	
	                this._hoverBeforeEl.style.backgroundColor = utils.string.supplant('rgba({0}, {1}, {2}, {3})', rgbaData);
	            }
	
	            utils.dom.addClass(this._hoverBeforeEl, '~Hover');
	        }
	    };
	
	    this.onLabelMouseLeave = function() {
	        if (this._labelType == 'circle') {
	            utils.dom.removeClass(this._hoverBeforeEl, '~Hover');
	        }
	    };
	});
	
	content.ui.widget['DialogWidget'] = Class(content.ui.widget.Widget, function(supr) {
		var labelIndex 	= 0,
			dialogIndex = 0,
			alertIndex 	= 0;
	
		this.init = function init(opts) {
			var data 					= opts.data.data,
	            dashboardVersion 		= opts.engine.getDashboardVersion();
	
			var
				engine 					= opts.engine,
				device 					= engine.getDevice(),
				minimizedSessionKey 	= 'minimized_' + engine.getActiveLang() + '_' + opts.id,
	            labelViewType           = ['circle', 'rectangle'].indexOf(opts.data.data.labelType) != -1 ? 'IconLabelView' : 'LabelView';
	
			if (device.isMobile) {
	            data.label = 1;
	            data.alignment = 4;
			}
	
			opts.minimizedSessionKey 	= minimizedSessionKey;
			// opts.startMinimized 		= engine.getStorage().getDoneForSession(minimizedSessionKey) || !!data.startMinimized;
	        opts.startMinimized         = engine.getStorage().getDoneForSession(minimizedSessionKey) || (dashboardVersion === 1 ? !!opts.startMinimized : !!data.startMinimized);
			opts.device 				= device;
			opts.viewMain 				= data.label && opts.startMinimized ? 'labelView' : 'dialogView';
	
	        opts.viewConstructors 		= {
				'dialogView': 	content.ui.view.DialogView,
				'labelView': 	content.ui.view[labelViewType],
				'alertView': 	content.ui.view.AlertView
			};
	
			supr(this, this.init, [opts]);
	
			this._labelShowTimeout 		= null;
			this._ignoreEvents	 		= false;
			this._showAlertView 		= false;
			this._firstLabelShowDelay 	= 50; // Show the label fast the first time...
	
			this._engineConnectorPlugin = engine.getPlugin('EngineConnector');
	
			// ALWAYS GET THE VIEW! This registeres them by index which makes them accasible from the dashboard...
			//this._dialogView 	= this.getViewByDevice(device, 'dialogView', 	'dialogView' + dialogIndex++);
			//this._labelView 	= this.getViewByDevice(device, 'labelView', 	'labelView' + labelIndex++);
			//this._alertView 	= this.getViewByDevice(device, 'alertView', 	'alertView' + alertIndex++);
	
			this._dialogView 	= this.getViewByDevice(device, 'dialogView');
			this._labelView 	= this.getViewByDevice(device, 'labelView', this._labelAlias);
			this._alertView 	= this.getViewByDevice(device, 'alertView');
	
			this._labelView.on('Hide', 					this, this.onHideLabel);
			this._labelView.on('Click', 				this, this.onClickLabel);
			this._labelView.on('LabelMode', 			this, this.onLabelMode);
			this._labelView.on('Loaded', 				this, this.onLoaded);
	
			this._dialogView.on('Hide', 				this, this.onHideDialog);
			this._dialogView.on('Loaded', 				this, this.onLoaded);
			this._dialogView.on('ShowAlertView', 		this, this.onShowAlertView);
	
			this._alertView.on('Hide', 					this, this.onHideAlert);
	
			if (opts.startMinimized && (data.alignment === 4) && (data.label || engine.getDemo())) {
				this.viewLabel();
				setTimeout(bind(this._labelView, this._labelView.show), 100);
			}
		};
	
		this.onHideLabel = function onHideLabel() {
			var hasLabelView = !!this._labelView.getData().label;
	
			if (this._ignoreEvents) {
				return;
			}
			this.viewMain();
	
			if (hasLabelView) {
				setTimeout(
					bind(this, function() {
						(!this._engine.getDevice().isMobile) && this._engine.getWidgetManager().showWidget(this);
					}),
					500
				);
			}
		};
	
	
		this.onClickLabel = function onClickLabel() {
	        var labelView = this._labelView,
				dialogView = this._dialogView;
	
			labelView.hide();
			if (this.getDevice().isMobile) {
				dialogView.show();
			}
			this._engine.getStorage().removeDoneForSession(labelView.getMinimizedSessionKey());
		};
	
		this.onLabelMode = function onLabelMode(labelMode) {
	
			if (this._ignoreEvents) {
				return;
			}
	
			if (labelMode) {
				if (this._dialogView.getDisplay() !== content.ui.view.VISIBLE) {
					this._labelView.show();
					this.viewLabel();
				}
			} else {
				this._labelView.hide();
			}
		};
	
		this.onHideDialog = function onHideDialog() {
			if (this._ignoreEvents) {
				return;
			}
	        if (this.getDevice().isMobile) {
				if (!this._showAlertView) {
					this.viewLabel();
					this._labelShowTimeout = setTimeout(bind(this._labelView,this._labelView.show), this._firstLabelShowDelay);
	               	this._firstLabelShowDelay = 500; // Show later after the first time...
				}
				(this._showAlertView) && (this._showAlertView = false);
			} else {
				if (this._dialogView.getData().label) {
					this.viewLabel();
					this._labelShowTimeout = setTimeout(bind(this._labelView, this._labelView.show), this._firstLabelShowDelay);
					this._firstLabelShowDelay = 500; // Show later after the first time...
				}
			}
		};
	
		this.onHideAlert = function onHideAlert() {
			if (this._ignoreEvents) {
				return;
			}
			if (this.getDevice().isMobile) {
				this.viewLabel();
				this._labelShowTimeout = setTimeout(bind(this._labelView, this._labelView.show), this._firstLabelShowDelay);
				this._firstLabelShowDelay = 500; // Show later after the first time...
			}
		}
	
		this.onLoaded = function onLoaded(loaded) {
			this._dialogView.setLoading(!loaded);
			this._labelView.setLoading(!loaded);
		};
	
		this.onShowAlertView = function onShowAlertView() {
			this._showAlertView = true;
			this._alertView.show();
		};
	
		this.viewLabel = function() {
			var plugin = this._engineConnectorPlugin;
			plugin && plugin.sendMessage({ // Keep string keys!
				'command': 		'labelView',
				'alignment': 	this._labelView.getData().labelAlignment
			});
		};
	
		this.viewMain = function() {
			var plugin = this._engineConnectorPlugin;
			plugin && plugin.sendMessage({ // Keep string keys!
				'command': 		'mainView',
				'alignment': 	this._dialogView.getData().alignment
			});
		};
	
		this.show = function show() {
			if (this._dialogView.getData().label && !this._engine.getDevice().isMobile) {
				this._labelView.hide();
			}
			supr(this, this.show, arguments);
		};
	
		this.stopEvents = function() {
			this._ignoreEvents = true;
			clearTimeout(this._labelShowTimeout);
		};
	
		this.resumeEvents = function() {
			this._ignoreEvents = false;
		};
	
		/**
		 * This function is used to hide the widget from the widget dock,
		 * it stops the default behaviour of the widget.
		**/
		this.dockHide = function() {
	    	this.stopEvents();
	
			var data = this._data;
			if (!!data.label) {
				this._labelView.hide(true);
			} else {
				this._dialogView.getData().minimizable = false;
				this._dialogView.hide();
			}
	
			this.resumeEvents();
		};
	
		/**
		 * This function is used to show the widget from the widget dock,
		 * it stops the default behaviour of the widget.
		**/
		this.dockShow = function() {
	        this.stopEvents();
	
			var data = this._data;
			if (!this._engine.getDevice().isMobile) {
				if (!!data.label) {
					this._labelView.show();
				} else {
					this._dialogView.getData().minimizable = true;
					this._dialogView.minimize();
				}
			} else {
				if (!!data.label) {
					this._labelView.hide();
				} else {
					this._dialogView.hide();
				}
			}
	
			this.resumeEvents();
		};
	});
	
	content.ui.component['ImageComponent'] = Class(content.ui.component.Component, function (supr) {
	    this.initView = function initView() {
	        this._componentView = this.query('.~WidgetContent.~ImageComponent');
	        this._imageSrc = this._data.compImage;
	        this._isComponentActivated = this.getAlert() ? this._data.displayImageAlert : this._data.displayImage;
	
	        if (this._isComponentActivated) {
	            if (!!this._componentView) {
	                this.initImageElement((this._data.lang.compImage) ? this._data.lang.compImage : this._data.compImage);
	
	                utils.listen(this._image, 'load', this, function () {
	                    this.update();
	
	                    setTimeout(bind(this._view, this._view.updateHeight), 100);
	                });
	            }
	
	            this.update();
	        }
	
	
	        return this;
	    };
	
	    this.initImageElement = function (source) {
	        var componentElement = this.query('.~WidgetContent.~ImageComponent');
	
	        // @todo - fix in dashoard. => empty text values will be send as [empty] through dashboard to preview to...
	        if (source == '[empty]') {
	            source = null;
	        }
	
	        if (!source || typeof source != 'string' || !componentElement) {
	            this._image = null;
	            return;
	        }
	
	        var imageElement = document.createElement('img');
	
	        imageElement.className = utils.dom.updatePrefix('~Image');
	        imageElement.src = source;
	        imageElement.style = this._data.style.compImage;
	
	        componentElement.appendChild(imageElement);
	
	        this._image = imageElement;
	
	        setTimeout(bind(this._view, this._view.updateHeight), 100);
	    };
	
	    this.getView = function () {
	        return 'Views/Components/imageComponent.html';
	    };
	
	    this.update = function update() {
	        var data = this._data;
	        if (this._isComponentActivated && this._image) {
	
	            if (!!this._image && !this._image.complete) {
	                this._image = this.query('.~WidgetContent.~ImageComponent .~Image');
	                setTimeout(bind(this, this.update), 50); // Image is not loaded yet, retry in 50 ms
	                return;
	            }
	        }
	
	        // Image is loaded, reflow.
	        this._visible = this.getAlert() ? data.displayImageAlert : data.displayImage;
	        supr(this, this.update);
	    };
	
	    this.setData = function setData(key, value) {
	        switch (key) {
	            case 'displayImage':
	                this._data.displayImage = !!value;
	                this.update();
	                break;
	
	            case 'displayImageAlert':
	                this._data.displayImageAlert = !!value;
	                this.update();
	                break;
	
	            case 'compImage':
	                this.setImage(value);
	                this.update();
	                break;
	
	            default:
	                supr(this, this.setData, arguments);
	                break;
	        }
	    };
	
	    // This function is used for the Dashboard!
	    this.text = function(path, text, name) {
	        switch(name) {
	            case 'compImage':
	                this.setImage(text);
	                break;
	
	            default:
	                break;
	        }
	    };
	
	    this.setImage = function setImage(value) {
	        if (!this._image) {
	            this.initImageElement(value);
	        }
	
	        var domElement = this.query(".~WidgetContent.~ImageComponent .~Image");
	        this._data.compImage = value;
	        if (domElement) {
	            domElement.src = value;
	        }
	    };
	
	});
	
	content.ui.component['PriceComparisonComponent'] = Class(content.ui.component.Component, function (supr) {
		    this.init = function init(opts) {
		        supr(this, this.init, arguments);
		
		        this.debouncedInitData = utils.debounce(bind(this, this.initData), 800);
		
		        var documentConnector = opts.engine.getDocumentConnector(),
		            documentConnectorAdapter = documentConnector.getAdapter(),
		            rateDisplayType = documentConnectorAdapter ? documentConnectorAdapter.getConfigItem('rateDisplayType') : null;
		
		        //this._preHideMinimizable = this._data.minimizable;
		        this._preHideMinimizable = 1;
		        this._preHideLabel = this._data.label;
	            this._preHideStartMinimized = this._view.getWidget().getStartMinimized();
		        this._isLoading = false;
		        this._requestLimit = 25;
		        this._requestCount = 0;
		        this._currentRequest = null;
		        this._isDemoMode = (window.location.href.indexOf('demo.hotelchamp.com') !== -1) || opts.engine.getDemo();
		        this._lastRequestData = {};
		        this._rateDisplayType = ([
		            content.ui.component['PriceComparisonComponent'].RATE_DISPLAY_TYPE_NIGHT_AVERAGE,
		            content.ui.component['PriceComparisonComponent'].RATE_DISPLAY_TYPE_RANGE_TOTAL
		        ].indexOf(rateDisplayType) !== -1) ? rateDisplayType : content.ui.component['PriceComparisonComponent'].RATE_DISPLAY_TYPE_NIGHT_AVERAGE;
		
		        if (this._isComponentShowable()) {
		            this._view.getWidget().setIsShowable(false);
		            this._view.setMinimizable(false);
		            this._view.getWidget().setStartMinimized(false);
		        }
		    };
		
		    /**
		     * This function is called after the DOM elements for the component have been created...
		     **/
		    this.initView = function () {
		        // Always define componentView in first line of initView..
		        this._componentView = this.query('.~WidgetContent.~PriceComparisonComponent');
		
		        var isComponentShowable = this._isComponentShowable(),
		            isDemoMode = this._isDemoMode;
		
		        if (isComponentShowable || isDemoMode) {
		            this._displayPriceComparison = this.getAlert() ? this._data.displayPriceComparisonAlert : this._data.displayPriceComparison;
		
		            if (isComponentShowable) {
		                this._view.getWidget().setStartMinimized(true);
		            }
		
		            //this._data.priceUrl = 'http://127.0.0.1:8012/api/rez-exchange?property=CSA&arrival={{from}}&departure={{to}}';
		
		            this.update();
		
		            var date = new Date(),
		                engine = this._engine,
		                bookingEngine = engine.getBookingEngine(),
		                dataStore = content.stores.hcSpecificationsDataStore;
		
		            this._bookingEngine = bookingEngine;
		            this._dataStore = dataStore;
		
		            this._url = null;
		            this._arrivalDate = utils.date.dateToString(new Date(date.getTime() + 10 * 1000 * 60 * 60 * 24));
		            this._departureDate = utils.date.dateToString(new Date(date.getTime() + 11 * 1000 * 60 * 60 * 24));
		            this._newArrivalDate = null;
		            this._newDepartureDate = null;
		            this._showOnlyWhenCheepest = this._data.showOnlyWhenCheepest === 1;
		            this._showOnlyWithAvailablePrices = this._data.showOnlyWithAvailablePrices === 1;
		
		            this.initListeners();
		
		            if (isComponentShowable) {
		                this.debouncedInitData();
		                this._view.setLoading(true);
		            }
		
		            this._hasBeenShownForFirstTime = false;
		        }
		
		        return this;
		    };
		
		    /**
		     * Event handler methods
		     */
		
		    this.update = function update() {
		        var data = this._data;
		        this._visible = this.getAlert() ? data.displayPriceComparisonAlert : data.displayPriceComparison;
		
		        supr(this, this.update);
		    };
		
		    this.onDataStoreUpdate = function (key, value) {
		        switch (key) {
		            case 'documentConnector.arrivalDate':
		            case 'documentConnector.roomsAndRates':
		            case 'documentConnector.arrivalDatePrice':
		            	if (this.isDataStoreValueValid(value)) {
		            		if (!(key in this._lastRequestData) || (key in this._lastRequestData && this._lastRequestData[key] !== value)) {
		                    	this.debouncedInitData();
		                    }
		            	}
		                break;
		        };
		    };
		
		    /**
		     * Private/protected methods
		     */
	
		    this.isDataStoreValueValid = function(value) {
		        return value !== null && value !== undefined && value !== 'undefined' && (typeof value !== "number" || !isNaN(value));
		    }
		
		    this.initListeners = function () {
		        if (this._isComponentShowable() || this._isDemoMode) {
		            var documentConnector = this._engine.getDocumentConnector(),
		                adapter = documentConnector ? documentConnector.getAdapter() : null;
		
		            // assume booking engine does something with ajax and pc should be reloaded when store changes => when _autoCleanupAndReinit is true...
		            // @note - (21-04-17) - removed the if statement to trigger on DC _interval changes... (disable it again when PC tool mimimize/maximize frequently)
		            //if (adapter && adapter._autoCleanupAndReinit === true) {
		            this._dataStore.on('datachange', bind(this, this.onDataStoreUpdate));
		            //}
		        }
		    };
		
		    this._setIsLoading = function _setIsLoading(isLoading) {
		        if (isLoading) {
		            this._hideWidget();
		        }
		
		        this._isLoading = isLoading;
		        //this._view.setLoading(isLoading);       // Loading icon disabled. Widget should be hidden when loading and visible when loaded...
		    }
		
		    this.initData = function initData(rerenderingOnly) {
		        rerenderingOnly = rerenderingOnly === true;
		
		        if (!this._isComponentShowable()) {
		            return;
		        }
		
		        if ((!this._hasBeenShownForFirstTime || this._view.getDisplay() != content.ui.view.VISIBLE) && !this._isDemoMode) {
		            //this.minimizeWidget();
		            this._hideWidget();
		        }
		
		        this._hasBeenShownForFirstTime = true;
		
		        if (!this._data.displayPriceComparison && !this._data.displayPriceComparisonAlert) {
		            return;
		        }
		
		        if (this._currentRequest && 'abort' in this._currentRequest) {
		            this._currentRequest.abort();
		        }
		
		        if (!rerenderingOnly) {
		            this._setIsLoading(true);
		        }
		
		        var view = this._view,
		            engine = this._engine,
		            priceComparisonStore = content.stores.priceComparisonStore,
		            data = priceComparisonStore.getPriceData();
		
		        view.emit('Loaded', false);
		        var requestData = this.collectComparisonParams();
		        this._url = this.generateComparisonRequestUrl(this._data.priceUrl, requestData);
		
		        if (data && data[this._url] && !this._isDemoMode) {
		            // timeout to show loader icon
		            setTimeout(bind(this, function () {
		                this.setLastRequestData(requestData);
		                this.updatePriceData(data[this._url]);
		                view.emit('Loaded', true);
		                this._setIsLoading(false);
		            }), 1000);
		        } else {
		            if (this._isDemoMode) {
		                setTimeout(bind(this, function () {
		                    this.onPriceUpdateResponse(false, content.ui.component['PriceComparisonComponent']._DEMO_DATA);
		                }), rerenderingOnly ? 0 : 200);
		            } else if (this.areComparisonParamsValid() && this._requestCount <= this._requestLimit) {
		                this._requestCount++;
		                this.setLastRequestData(requestData);
		                this._currentRequest = utils.net.send(this._url, bind(this, this.onPriceUpdateResponse));
		            }
		        }
		    };
		
		    this.setLastRequestData = function (data) {
		        this._lastRequestData['documentConnector.arrivalDate'] = data['_rawFromDate'];
		        this._lastRequestData['documentConnector.departureDate'] = data['_rawToDate'];
		        this._lastRequestData['documentConnector.activeCurrency'] = data['currency'];
		    };
		
		    this.onPriceUpdateResponse = function (error, responseData) {
		        this._currentRequest = null;
		
		        if (!error) {
		            responseData.url = this._url;
		            responseData.comparisonParams = this.collectComparisonParams();
		            content.stores.ActionDispatcher.get().dispatch('price_comparison_data', responseData);
		            var data = content.stores.priceComparisonStore.getPriceData();
		            data && this.updatePriceData(data[this._url]);
		        }
		
		        this._setIsLoading(false);
		        this._view.emit('Loaded', true);
		    };
		
		    // helper to collect request data required for
		    // comparison server request
		    this.collectComparisonParams = function () {
		        var fromDate = this._dataStore.getData('documentConnector.arrivalDate'),
		            toDate = this._dataStore.getData('documentConnector.departureDate'),
		            hasValidDateSelection = (fromDate && toDate),
		            los = hasValidDateSelection ? utils.date.dateDiffInDays(fromDate, toDate) : null,
		            selectedAdultCount = (this._dataStore.getData('documentConnector.selectedAdultCount')) ? this._dataStore.getData('documentConnector.selectedAdultCount') : 2; 
		        //los = 1,
		        // checkInDate = hasValidDateSelection ? [('0' + (fromDate.getMonth() + 1)).slice(-2), ('0' + fromDate.getDate()).slice(-2), fromDate.getFullYear()].join('/') : null,
		        // checkOutDate = hasValidDateSelection ? ;
		
		        if (this._isDemoMode) {
		            return content.ui.component['PriceComparisonComponent']._DEMO_COMPARISON_PARAMS;
		        } else {
		            var checkinDate = (fromDate && 'getFullYear' in fromDate) ? fromDate.getFullYear() + '-' + (parseInt(fromDate.getMonth(), 10) + 1) + '-' + (fromDate.getDate() < 10 ? '0' : '') + fromDate.getDate() : null,
		                checkOutDate = (toDate && 'getFullYear' in toDate) ? toDate.getFullYear() + '-' + (parseInt(toDate.getMonth(), 10) + 1) + '-' + (toDate.getDate() < 10 ? '0' : '') + toDate.getDate() : null;
	
		            return {
		                'checkInDate': checkinDate,
		                'checkOutDate': checkOutDate,
		                'los': los,
		                'numberOfAdults': selectedAdultCount,
		                'currency': this._dataStore.getData('documentConnector.activeCurrency'),
		                'currentBrandSiteRate': this._bookingEngine.getCurrentBrandSiteRates().min,
		                //'currentBrandSiteRate': 100,
		                'qualifiedRateIndicator': 'NA',
		                'promotionalRateIndicator': 'NA',
		                'productIndicator': this._bookingEngine.getCurrentProductIndicator() || null,
		                '_rawFromDate': fromDate,
		                '_rawToDate': toDate,
		            };
		        }
		    };
		
		    this.areComparisonParamsValid = function () {
		        var p = this.collectComparisonParams();
		
		        return p['checkInDate'] && !!p['los'];
		    };
		
		    // helper method to generate to comparison server request url
		    this.generateComparisonRequestUrl = function (templateUrl, params) {
		        // return utils.string.supplant(templateUrl, { 'websiteHash': this._engine.getApi(), 'params': encodeURIComponent(JSON.stringify(params)) });
		        return utils.string.supplant(templateUrl, {
		            'from': params['checkInDate'],
		            'to': params['checkOutDate'],
		            'currency': params['currency'] ? params['currency'] : 'EUR',
		            'occupancy' : params['numberOfAdults'] 
		        });
		
		    };
		
		    this.updatePriceData = function (priceData) {
		        if (!priceData || !priceData.comparisonParams) {
		            return;
		        }
		
		        var engine = this._engine,
		            device = engine.getDevice(),
		            comparisonParams = priceData.comparisonParams,
		            data = this._data,
		            channels = priceData && priceData['result'] && priceData['result']['channels'] ? priceData['result']['channels'] : [],
		            names = data.names.split(','),
		            codes = data.codes.split(','),
		            activeCurrency = this._isDemoMode ? 'EUR' : this._dataStore.getData('documentConnector.activeCurrency'),
		            flattenPriceData = {},
		            prices = [],
		            hotelPriceFound = false,
		            hotelPrice = this._dataStore.getData('documentConnector.arrivalDatePrice') > 0 ? this._dataStore.getData('documentConnector.arrivalDatePrice') : null,
		            hotelPricePerNight = (hotelPrice !== null) ? (hotelPrice / (comparisonParams.los || 1)).toFixed(2) : null,
		            ul = this.query('.~WidgetContent.~PriceComparisonComponent ul'),
		            hasValidPrices = false,
		            limit = 3,
		            hideIfNoPrice = this._data.hideChannelsIfNoPriceIsAvailable,
		            hideIfChannelIsLowerPriced = this._data.hideChannelsIfChannelPriceIsLower,
		            //directPrice     = this._dataStore.getData('documentConnector.arrivalDatePrice'),
		            directPrice = this._isDemoMode ? '99.00' : this._getRateByRateDisplayType(hotelPrice, comparisonParams.los, this._rateDisplayType),
		            notAvailableText = data.lang.notAvailable ? data.lang.notAvailable : 'N/A',
		            rate,
		            isNotAvailable,
		            uspItems,
		            uspList = [],
		            doShow = true,
		            isDirectTheCheepest = false,
		            hasPrices,
		            preFilteredPrices;
		
		        if (!ul) {
		            return;
		        }
		
		        // flatten channel rate data
		        var channelName;
		        utils.vars.each(channels, bind(this, function (channel, index) {
		            if (!!channel['Rate']) {
		                rate = parseFloat(channel['Rate']);
		
		                if (!rate) {
		                    rate = null;
		                }
		
		                channelName = this._isDemoMode ? codes[index] : channel['ChannelName']
		                flattenPriceData[channelName] = this._getRateByRateDisplayType(rate, comparisonParams.los,content.ui.component['PriceComparisonComponent'].RATE_DISPLAY_TYPE_NIGHT_AVERAGE);
		            }
		        }));
		
		        var hasPrice,
		            allUnfilteredPrices = [];
		
		        utils.vars.each(codes, bind(this, function (code, index) {
		            hasPrice = !!flattenPriceData[code];
		
		            if (code) {
		                allUnfilteredPrices.push({
		                    'code': code,
		                    'name': names[index],
		                    'price': flattenPriceData[code]
		                });
		            }
		
		
		            if (code && hasPrice) {
		                prices.push({
		                    'code': code,
		                    'name': names[index],
		                    'price': flattenPriceData[code]
		                });
		            } else if (!hasPrice && hideIfNoPrice) {
		                this._engine.log('Price comparison - Remove rate: ', names[index], ' (', flattenPriceData[code], '). No price available and option "hideChannelIfNoPrice" is enabled.');
		            }
		        }));
		
		        preFilteredPrices = [].concat(allUnfilteredPrices);
		
		
		        // if(hideIfNoPrice) {
		        //     utils.vars.each(prices, function(price, index) {
		        //         if(!price['price']) {
		        //             prices.splice(index, 1);
		        //         }
		        //     });
		        // }
		        // This is test data to test the 'hideIfChannelIsLowerPriced'
		        // prices = [
		        //     {
		        //         'code': 'OTA1',
		        //         'name': 'OTA1',
		        //         'price': 38
		        //     },
		        //     {
		        //         'code': 'OTA2',
		        //         'name': 'OTA2',
		        //         'price': 38
		        //     },
		        //     {
		        //         'code': 'OTA3',
		        //         'name': 'OTA3',
		        //         'price': 40
		        //     }
		        // ];
		
		
		        // Make sure the number of rates don't exceed the limit.
		        if (prices.length > limit) {
		            var availablePrices = [],
		                unavailablePrices = [];
		
		            utils.vars.each(prices, function (price) {
		                if (!!price['price']) {
		                    availablePrices.push(price);
		                } else {
		                    unavailablePrices.push(price);
		                }
		            });
		
		            if (availablePrices.length > limit) {
		                prices = availablePrices.slice(0, limit);
		            } else if (availablePrices.length < limit && unavailablePrices.length > 0) {
		                var diff = limit - availablePrices.length;
		                Array.prototype.push.apply(availablePrices, unavailablePrices.slice(0, diff));
		                prices = availablePrices;
		            } else {
		                prices = availablePrices;
		            }
		        }
		
		        // push current hotel to the list
		        var hotelPrice = hotelPriceFound = {
		            'code': data.hotelCode || '',
		            'name': data.hotelName || '',
		            'price': directPrice
		        };
		        prices.push(hotelPrice);
		
		
		        if (hideIfChannelIsLowerPriced) {
		            var processedPrices = [];
		            utils.vars.each(prices, bind(this, function (price, index) {
		                if (Number(price['price']) < Number(directPrice)) {
		                    this._engine.log('Price comparison - Remove rate: ', price['name'], ' (', price['price'], '). It\'s lower then Direct (', directPrice, ') and option "hideChannelIfLowerThenDirect" is enabled.');
		                } else {
		                    processedPrices.push(price);
		                }
		            }));
		
		            prices = processedPrices;
		
		            // If there is only 1 price left (aka the direct price) then don't show the widget
		            if (prices.length <= 1) {
		                doShow = false;
		                this._engine.log('Price comparison - don\'t show PC - all channels are lower then the direct rate');
		            }
		        }
		
		
		        var currentCheapest = null;
		        utils.vars.each(prices, function (price) {
		            if (price['price']) {
		                if (currentCheapest === null || Number(price['price']) < currentCheapest) {
		                    currentCheapest = price['price'];
		                }
		            }
		        });
		
		        isDirectTheCheepest = (currentCheapest == hotelPrice['price']);
		
		        hasValidPrices = false;
		        hasPrices = prices && prices.length > 1;
		
		        if (hasPrices) {
		            utils.vars.each(prices, function (price) {
		                if (!hasValidPrices) {
		                    var priceValue = Number(price['price']);
		                    hasValidPrices = priceValue !== NaN && priceValue > 0;
		                }
		            });
		        }
		
		        utils.dom.removeChildren(ul);
		
		        // create item for hotel including usp's
		        if (engine.getDemo() || hotelPriceFound) {
		            if (!hotelPriceFound) {
		                hotelPriceFound = {'name': 'Demo', 'price': '99.99'};
		            }
		
		            isNotAvailable = !hotelPriceFound['price'];
		
		            //data.lang.uspItems = 'Item 1, Item2,Item 3';
		
		            if (data.lang.uspItems && typeof data.lang.uspItems.split == 'function') {
		                uspItems = data.lang.uspItems.split(';').map(function (value) {
		                    return utils.string.trim(value);
		                });
		
		                if (uspItems.length > 0) {
		                    uspList = uspItems.map(function (uspText) {
		                        return {
		                            t: 'li',
		                            a: {innerHTML: '<span class="mdi mdi-check"></span>' + uspText}
		                        };
		                    });
		
		                }
		            }
		
		            var currencySymbol = utils.currency.getCurrencySymbol(activeCurrency);
		
		
		            new DOMElements({
		                domElement: {
		                    t: 'li',
		                    a: {c: '~Direct', style: data.style.compPriceContentDirect},
		                    c: [
		                        {
		                            a: {c: '~Item'},
		                            c: [
		                                {
		                                    t: 'h3',
		                                    a: {innerHTML: '<span class="mdi mdi-star"></span>' + hotelPriceFound['name']}
		                                },
		                                {
		                                    t: 'span',
		                                    a: {
		                                        innerHTML: (!isNotAvailable ? currencySymbol + ' ' + this.formatMoney(directPrice) : notAvailableText),
		                                        className: (isNotAvailable ? '~NotAvailable' : '')
		                                    }
		                                }
		                            ]
		                        },
		                        {t: 'ul', a: {className: ((uspList.length > 0) ? '~Usp' : '~Usp ~Hidden')}, c: uspList}
		                    ]
		                },
		                parent: ul
		            });
		        }
		
		        // create list with channels
		        for (var i = 0; i < prices.length; i++) {
		            var price = prices[i];
		
		            if (price['code'] !== data.hotelCode) {
		                isNotAvailable = !price['price'];
		                new DOMElements({
		                    domElement: {
		                        t: 'li',
		                        a: {className: '~Channel'},
		                        c: [
		                            {
		                                a: {c: '~Item'},
		                                c: [
		                                    {t: 'h3', a: {innerHTML: price['name']}},
		                                    {
		                                        t: 'span',
		                                        a: {innerHTML: (!isNotAvailable ? currencySymbol + ' ' + this.formatMoney(price['price']) : notAvailableText)}
		                                    }
		                                ]
		                            }
		                        ]
		                    },
		                    parent: ul
		                });
		            }
		        }
		
		        if (!activeCurrency && doShow) {
		            doShow = false;
		            this._engine.log('Price comparison - don\'t show PC - Could not resolve active currency (current value: ' + activeCurrency + ')');
		        }
		
		        if (!directPrice && doShow) {
		            doShow = false;
		            this._engine.log('Price comparison - don\'t show PC - Could not resolve direct price (current value: ' + directPrice + ')');
		        }
		
		        doShow = doShow &&
		            ('success' in priceData && priceData['success']) &&
		            (!this._showOnlyWithAvailablePrices || (hasValidPrices && this._showOnlyWithAvailablePrices)) &&
		            (!this._showOnlyWhenCheepest || this._showOnlyWhenCheepest && isDirectTheCheepest);
		
		
		        this._engine.log("\n");
		        this._engine.log('Price comparison - Final prices: ', prices, ' | Pre filtered prices: ', preFilteredPrices);
		        this._engine.log('Price comparison - response.success: ', ('success' in priceData && priceData['success']), ' | response.error: ', priceData.error || '');
		        this._engine.log('Price comparison - has valid prices: ', hasValidPrices);
		        this._engine.log('Price comparison - isDirectTheCheepest: ', isDirectTheCheepest);
		        this._engine.log('Price comparison - config: ', {
		            'showOnlyWhenCheepest': !!this._showOnlyWhenCheepest,
		            'showOnlyWithAvailablePrices': !!this._showOnlyWithAvailablePrices,
		            'hideChannelIfChannelIsLowerPriced': !!hideIfChannelIsLowerPriced,
		            'hideChannelIfNoPrice': !!hideIfNoPrice
		        });
		
		
		        this._engine.log(doShow ? 'Will show PC tool' : 'Will NOT show PC tool');
		        this._engine.log("\n");
		
		
		        // expand after load
		        if (doShow && !this._currentRequest) {
		            setTimeout(bind(this, function () {
		                this._view.updateHeight();
		
		                if (hasPrices && !this._currentRequest) {
		                    this._view.getWidget().setIsShowable(true);
		                    //this._data.minimizable = this._preHideMinimizable;
		                    //this._data.label = this._preHideLabel;
		                    this._view.setMinimizable(this._preHideMinimizable);
		                    this._view.getWidget().setStartMinimized(this._preHideStartMinimized);
		                    this._engine.getWidgetManager().showWidget(this._view.getWidget());
		                }
		
		            }), 100);
		        } else if (!this._currentRequest) {
		            this._view.getWidget().setIsShowable(false);
		            this._hideWidget();
		        }
		    };
		
		    /**
		     * _getRateByRateDisplayType
		     * Helper method to fetch the rate based on the rateDisplayType.
		     * @param   mixed    The average rate per night
		     * @param   int      Length of stay
		     */
		    this._getRateByRateDisplayType = function (rate, los, givenRateDisplayType) {
		        var resultRate = null,
		            nightAverageType = content.ui.component['PriceComparisonComponent'].RATE_DISPLAY_TYPE_NIGHT_AVERAGE,
		            rangeTotalType = content.ui.component['PriceComparisonComponent'].RATE_DISPLAY_TYPE_RANGE_TOTAL;
		
		        if (!!rate) {
		            los = !los ? 1 : los;
		
		            switch (givenRateDisplayType + '-to-' + this._rateDisplayType) {
		                case (nightAverageType + '-to-' + rangeTotalType):
		                    resultRate = rate * los;
		                    break;
		                case (rangeTotalType + '-to-' + nightAverageType):
		                    resultRate = rate / los;
		                    break;
		                /*
		                 case (nightAverageType + '-to-' + rangeTotalType):
		                 resultRate = rate * los;
		                 break;
		                 case (rangeTotalType + '-to-' + nightAverageType):
		                 resultRate = rate / los;
		                 break;
		                 */
		                default:
		                    resultRate = rate;
		            }
		        }
		
		        return resultRate;
		    };
		
	        this._hideWidget = function () {
		        // do not hide for preview
		        if (!this._engine.getDemo()) {
		            // this._preHideMinimizable = this._data.minimizable;
		            // this._preStartMinimized = this._view.getWidget().getStartMinimized();
		            // this._preHideLabel = this._data.label;
	
		      		this._view.setLoading(false);
		            this._view.getWidget().setStartMinimized(false);
		            this._view.setMinimizable(false);
		            this._view.getWidget().setIsShowable(false);
		            this._view.getWidget().hide();
		            this._view.hide();
	
		            return;
		        }
		    };
		
		    this.minimizeWidget = function () {
		        this._view.hide();
		    };
	
		
		    this.formatMoney = function (amount) {
		        var result;
		
		        result = (Math.round(amount * Math.pow(10, 2)) / Math.pow(10, 2)).toFixed(2);
		        return result == '0' ? '0.00' : result;
		    }
		
		    this.getView = function () {
		        return 'Views/Components/priceComparisonComponent.html';
		    };
		
		    this.text = function text(path, text, name) {
		        switch (name) {
		            case 'uspItems':
		                this._data.lang[name] = text;
		                this.update();
		                this.initData(true);
		                break;
		        }
		    };
		
		    this.setData = function setData(key, value) {
		        switch (key) {
		            case 'displayPriceComparison':
		                this._data.displayPriceComparison = !!value;
		                this.update();
		                break;
		
		            case 'displayPriceComparisonAlert':
		                this._data.displayPriceComparisonAlert = !!value;
		                this.update();
		                break;
		            case 'showOnlyWhenCheepest':
		                this._showOnlyWhenCheepest = value;
		                this.update();
		                this.initData(true);
		                break;
		            case 'showOnlyWithAvailablePrices':
		                this._showOnlyWithAvailablePrices = value;
		                this.update();
		                this.initData(true);
		                break;
		            case 'codes':
		            case 'names':
		            case 'hotelName':
		            case 'hotelCode':
		            case 'notAvailable':
		            case 'uspItems':
		                this._data[key] = value;
		                this.update();
		                //this.debouncedInitData();
		                this.initData(true);
		                break;
		            default:
		                supr(this, this.setData, arguments);
		                break;
		        }
		    };
		
		    // this.text = function text(path, text, name) {
		    //     //this.text(path, text, name);
		    //     supr(this, this.text, arguments);
		    // };
		
		    this._isComponentShowable = function () {
		        return this._view.getViewName() !== 'labelView' && (
		                (this._data.displayPriceComparison == 1 && !this.getAlert()) ||
		                (this._data.displayPriceComparisonAlert == 1 && this.getAlert())
		            )
		    };
		});
		
	content.ui.component['PriceComparisonComponent'].RATE_DISPLAY_TYPE_NIGHT_AVERAGE = 'night_average';
	content.ui.component['PriceComparisonComponent'].RATE_DISPLAY_TYPE_RANGE_TOTAL = 'range_total';
	    
	content.ui.component['PriceComparisonComponent']._DEMO_COMPARISON_PARAMS = {
	    checkInDate: '05/14/2016',
	    currency: 'EUR',
	    currentBrandSiteRate: 305,
	    los: 1,
	    numberOfAdults: 2,
	    productIndicator: null,
	    promotionalRateIndicator: 'NA',
	    qualifiedRateIndicator: 'NA'
	};
	
	content.ui.component['PriceComparisonComponent']._DEMO_DATA = {
	    "result": {
	        "channels": [{
	            "ChannelName": "Hotels.com",
	            "Rate": 60,
	            "TaxType": "1",
	            "PromotionalRate": "N",
	            "Product": "Executive Penthouse, Canal View | Non-refundable",
	            "Currency": "EUR"
	        }, {
	            "ChannelName": "Agoda",
	            "Rate": 0,
	            "TaxType": "-",
	            "PromotionalRate": "-",
	            "Product": "Not Found",
	            "Currency": "EUR"
	        }, {
	            "ChannelName": "Hyatt",
	            "Rate": 219.520979697,
	            "TaxType": "1",
	            "PromotionalRate": "N",
	            "Product": "Standard Rate|One King Bed",
	            "Currency": "EUR"
	        }, {
	            "ChannelName": "Expedia",
	            "Rate": 696.46,
	            "TaxType": "1",
	            "PromotionalRate": "N",
	            "Product": "Executive penthouse, Uitzicht op het water|Two Occupancy",
	            "Currency": "EUR"
	        }],
	        "request": {
	            "los": 1,
	            "arrival": {"date": "2017-04-25 12:48:08.000000", "timezone_type": 3, "timezone": "UTC"},
	            "currency": "EUR"
	        }
	    }, "success": true, "error": null, "fetchedAt": "25-04-2017 12:48:29"
	};
	
var css 			= '.~0{1-2:3;1-4:"5"6 7-8; -9-a-2-b:c; -d-a-2-b:c; a-e:f;10:11;}.~0 12::13.~0 12::14{15-16:17-15;}.~0 12::13.~0 12::14{15-16:17-15;}.~0 18.~0 19.~0 1a.~0 1b.~0 1c.~0 1d.~0 1e.~0 1f.~0 20.~0 21.~0 22.~0 23.~0 24{25:26;}.~0 27.~0 28.~0 29.~0 2a{25:2b-26; 2c-2d:2e; }.~0 2f:30(31){25:f;32:33;}.~0 34.~0 35{25:f;}.~0 36{37-10:38;}.~0 36:39.~0 36:3a{3b:33;}.~0 3c{17-3d:3e 3f;}.~0 40.~0 41{1-42:43;}.~0 44{1-45:46;}.~0 47{1-2:48;49:33.4a 33;}.~0 4b{37:#4c;10:#4d;}.~0 4e{1-2:4f;}.~0 50.~0 51{1-2:52;53-32:33;54:55;2c-2d:2e;}.~0 51{56:-33.57;}.~0 58{3d:-33.59;}.~0 5a{17:33;32:11;5b:11;}.~0 5c:30(:5d){5e:5f;}.~0 60{49:61 62;}.~0 63{-64-15-16:65-15;15-16:65-15;32:33;}.~0 66{5e:67;}.~0 68.~0 69.~0 6a.~0 6b{1-4:6c 6d;1-2:61;}.~0 6e.~0 6f.~0 70.~0 71.~0 72{10:73; 1:73; 49:33; }.~0 74{5e:75;}.~0 6e.~0 76{a-77:f;}.~0 6e.~0 78"74"79 .~0 78"7a"79.~0 78"7b"7c{-d-7d:74; 7e:7f; }.~0 80.~0 81{7e:82;}.~0 74::-64-83-84.~0 85::-64-83-86{17:33;87:33;}.~0 78"88"79.~0 78"89"7c{15-16:17-15; 87:33; }.~0 78"8a"7c::-d-86-8b-6e.~0 78"8a"7c::-d-8c-8b-74{32:67;}.~0 78"8d"7c{-d-7d:8e; -64-15-16:65-15;-d-15-16:65-15; 15-16:65-15;}.~0 78"8d"7c::-d-8d-8f-6e.~0 78"8d"7c::-d-8d-90{-d-7d:f;}.~0 91{17:3e 92 #93;49:33 94;87:33.95 33.96 33.97;}.~0 98{17:33; 87:33; }.~0 72{5e:67;}.~0 99{1-42:9a;}.~0 9b{10:9c;49:33;87:33;1-4:"5"6 7-8;1-42:9d;1-2:9e;}.~0 9f{17-a0:a0;17-a1:33;}.~0 a2.~0 a3{87:33;}.~0 a4.~0 a5.~0 a6.~0 a7{17:11;37-10:11;1-4:11;2c-2d:a8;53-32:11;a-2d:11;1-2:3;1-4:"5"6 7-8;}.~0 a9{5b:67;}.~0 a4.~0 a6.~0 a5.~0 a2.~0 aa.~0 ab.~0 ac.~0 ad.~0 ae.~0 af.~0 b0.~0 b1.~0 b2.~0 6f.~0 72{10:73;1-4:73;}.~0 b3{2c-2d:a8;}.~0 b4.~0 b5 b6{b7-45-b8:b9;}.~0 ba.~0 bb b6{a-bc:11;}.~0 bb b6:bd{37:f;}@1-be{1-4:"bf-c0";c1:c2(c3:1/c4;c5-c6;c7//c8/c9/ca//cb//cc/cd/ce/cf/d0/d1/d2/d3/d4/d5//d6);1-42:d7;1-45:d7;}.~d8{1-4:"bf-c0" d9;1-45:d7 d9;1-42:d7 d9;1-da:d7 d9;a-77:f d9;-64-db-1-dc:dd;-d-1-dc:de;}.~df .~e0 .~e1.~e2{17-e3:e4;5b:62;32:62;a-2d:e5;87:e6 e7 e7 e7 d9;}.~df .~e0 .~e1.~e2 .~d8{17-e3:e8;5b:e9;32:e9;53-32:e9 d9;87:33;a-2d:e5;37-10:#ea;10:#eb;}.~df .~ec .~ed .~d8{1-2:ee;53-32:ee;49-ef:-e9;49-f0:f1;54:55;56:e7;}.~f2:83:-9-85-f3{10:38;}.~f2:83::-d-85-f3{10:38;}.~f2:83:-64-f3{10:38;}.~f2:83::-64-f3{10:38;}.~f2:83{3b:33;}@-64-f4 8b{c{-64-77:f5(-f6);}}@-d-f4 8b{c{-d-77:f5(-f6);}}@f4 8b{c{-d-77:f5(-f6);77:f5(-f6);}}.~f7{f8:f9;fa-fb:fb-fc;}@-64-f4 ~fd{c{-64-77:f5(-f6);}}@-d-f4 ~fd{c{-d-77:f5(-f6);}}@f4 ~fd{c{-d-77:f5(-f6);77:f5(-f6);}}.~df{fe:ef;5b:c;32:67;10:#ff;a-2d:e5;1-4:"5"6 7-8;1-42:100;1-2:3;37-10:38;101{102}}.~103 .~df{17-e3:104;}.~df.~105{10:#ea;}.~df ac.~df ab.~df 5a{15-16:17-15;17:33;87:33;49:33;}.~df 5a{25:26;106:107;}.~df .~108.~df .~109.~df .~10a{fe:ef;25:f;54:55;5b:c;32:10b;37-10:#eb;}.~103 .~df .~ec{17-e3:104 104 33 33;}.~df .~ec .~10c.~df .~e0 .~10c.~df .~10a .~10d{54:10e;25:f;5b:10b;32:10b;37-10:73;17-e3:104 10f 10f 104;15-e:-94 10f 104 10f 110(111 111 111 33.107);}.~df .~e0 .~10d{15-e:-104 3e 112 3e 110(111 111 111 33.107);}.~df .~10d .~d8.~113{114:115 116 117 d7 f 118 119 ~fd;}.~df .~ec.~11a.~df .~e0.~11a.~df .~10a.~11b{17-e3:33 104 33 33;}.~df .~ec.~11b .~10c.~df .~e0.~11b .~10c.~df .~10a.~11b .~10d{17-e3:104 33 33 104;ef:-10b;25:26;}.~df .~ec.~11c.~df .~e0.~11c.~df .~10a.~11d{17-e3:104 33 33 33;}.~df .~e0.~11d b3.~ed{fe:f0;}.~df .~ec.~11d .~10c.~df .~e0.~11d .~10c.~df .~10a.~11d .~10d{17-e3:33 104 104 33;f0:-10b;25:26;15-e:104 33 104 -3e 110(111 111 111 33.107);}.~df .~ec.~11b .~10d ac.~df .~e0.~11b .~10d ac.~df .~10a.~11b .~10d ac.~df .~ec.~11d .~10d ac.~df .~e0.~11d .~10d ac.~df .~10a.~11d .~10d b3{fe:ef;5b:c;32:c;1-2:ee;53-32:10b;7e:7f;}.~103 .~df .~e0{17-e3:104;7e:7f;7e:11e;}.~103 .~df .~e0.~11a.~103 .~df .~e0.~11d{17-e3:10f;}.~df .~ec .~11f.~df .~10a .~ed{fe:ef;5b:c;87:33 e4;1-2:3;1-42:43;32: 10b;53-32: 10b;10:73;}.~df .~e0 .~e1{fe:ef;1-2:ee;53-32:10b;7e:7f;87-ef:120;87-f0:120;}.~df .~e0 .~ed{fe:ef;5b:67;1-2:3;1-42:43;53-32:10b;}.~df .~ec .~121.~df .~10a .~122{54:10e;56:123;f0:123;7e:7f;1-2:124;}.~df .~125{fe:ef;5b:c;37-10:73;126:32 33.127;-d-126:32 33.127;-d-126-45:128-129;}.~df .~125{17-e3:33 33 104 104;}.~df .~12a{fe:ef;5b:c;17-e3:33 33 104 104;37-10:73;}.~103 .~df .~12a{17-e3:33 33 104 104;}.~df .~12a .~12b.~df .~12a .~12c.~103 .~df .~12a .~12d{fe:ef;5b:c;32:10b;37-10:#12e;1-2: 9e;7e:7f;87:33 e4;10:#ea;1-42: 100;53-32:10b;54: 55;}.~df .~12a .~12f:3a:13.~df .~12a .~130:3a:13.~103 .~df .~12a .~12d:bd{5b:c;32:c;54:10e;ef:33;56:33;131-132:133;25:26;65:"";37:110(111 111 111 33.134);10:#eb;}.~103 .~df .~12a .~12b.~103 .~df .~12a .~12c.~103 .~df .~12a .~12d{17-e3:33 33 104 104;}.~103 .~df .~12a .~12d{87:10f;}.~103 .~df .~12a .~12d .~113{49:33 67;87-56:135;}.~103 .~df .~12a .~12d .~113 5c{5b:136;137:73;}.~138{fe:ef;5b:c;87:e4;}.~138.~139{87:13a e4;}.~138.~139 b3{87:33 33 e6;1-42: 100;1-2:f1;25: 26;}.~138.~139 .~13b.~138.~139 78"a"7c{49:33 67 33 67 d9;87:33 e4 d9;32:13c d9;53-32:13c d9;37-10:#13d;17-e3:e8 d9;1-2:f1 d9;25:2b-26 d9;1-4:"13e 13f" d9;17-5b:                      10f d9;a-2d:                        e5 d9;140-a1:33.135 d9;5b:                             11 d9;}.~138.~139 .~141{a-2d:                        e5;1-2:                         f1;32:                            e8;87-56:120;}.~138.~139 .~142{56:                               104;}.~138.~139 .~142:bd{1-2:                         124;}.~138.~143{87:e6 e4 e4;}.~138.~144 b3{fe:ef;5b:c;87:145 e4 e4;53-32:e4;1-2: f1;1-42: d7;}.~138.~146{25:f; a-2d: e5;87:135 e4 e7}.~138.~146 ba.~138.~146 b5{5b:67;25:2b-26;a-2d:ef;49:33;87:33 10f 33 13a;}.~138.~146 bb 147.~138.~146 b5 b6{53-32: 13a d9;87:73;17-3d:f;54: 55;1-2:f1 d9;87-ef: e6;1-42:d7;}.~138.~146 bb b6{b7-45:f;}.~138.~146 bb b6::bd{54: 10e;ef:-13a;56:10f;1-4:"bf-c0" d9;65: "148";1-2: 149;}.~138.~14a{25:f; 87:13a e4;}.~138.~14a .~14b.~138.~14a .~14c.~138.~14a .~14d{fe:ef;5b:c;32:62;a-2d:ef;}.~138.~14a .~14e{25:f;a-2d:e5;10:#ea;1-42:43;53-32:62;}.~138.~14a b3{fe:ef;5b:c;87:33 33 13a 33;a-2d:e5;1-2:f1;}.~138.~14a .~14f.~138.~150 .~151.~138.~152 .~153 .~154.~138.~155 .~156 .~157{10:#158;1-2:120;140-a1:33.3e}.~138.~14a .~159{10:73;}.~138.~14a .~15a.~138.~150 .~15b{15-16:17-15;fe:ef;5b:c;87:112 10f 104;17:f;17-3d:3e 92 #15c;a-2d:ef;1-2:3;1-42: 9d;37:38;32:  15d;10:73;15-e:f;17-e3:33;}.~138.~14a .~15e:15f.~138.~150 .~15b:83{3b:f;}.~138.~14a .~15e::-d-85-f3{ 10:73;  106:33.160; }.~138.~14a .~15e::-d-85-f3{ 10:73;  106:33.160; }.~138.~14a .~15e::-64-f3{ 10:73;  106:33.160; }.~138.~14a .~15e:-9-85-f3{ 10:73;  106:33.160; }.~138.~14a .~15e:-64-f3{ 10:73;  106:33.160; }.~138.~14a .~14d{32:e4;87:120 33;}.~138.~14a .~161{2c-2d:a8;fe:ef;}.~138.~14a .~14d #~162{87:94 104 33 120;1-2:163;}.~138.~14a .~15e.~164.~138.~150 .~15b.~165{10:#166;1-42:9a;}.~138.~167{25:f;87:e4;}.~138.~167 ba.~138.~167 bb 147.~138.~167 bb b6 .~168{fe:ef;49:33;87:33;}.~138.~167 bb{15-16:17-15;49:33 120 120 120;}.~138.~167 bb b6{b7-45-b8:f;5b:c;}.~138.~167 bb b6.~169{32:67;17-e3:ee;53-32:163;1-42:9a;}.~138.~167 bb b6.~169 .~168{17-10:#16a;}.~138.~167 bb b6.~169 .~168 .~16b{53-32:16c;16d:16e;25:2b-26;1-42:d7;}.~138.~167 bb b6.~169 .~168 af.~138.~167 bb b6.~169 .~168 b3{10:73;1-42:43;}.~138.~167 bb b6 .~16f.~138.~167 bb b6 .~170{5b:171;32:62;53-32:62;}.~138.~167 bb b6 .~168{49:10f 172;17-3d:3e 92 #173;}.~138.~167 bb b6 .~170{49:62 174 10f;}.~138.~167 bb b6 .~168 ac.~138.~167 bb b6 .~168 a9{15-16:17-15;25:2b-26;54:175;fe:ef;49:33;87:33;1-2:9e;53-32:62;1-42:100;}.~138.~167 bb b6 .~168 b3{fe:f0;10:73;}.~138.~176 9f{fe:ef;5b:c;17-a0:a0;49:33;}.~138.~176 9f a3{87:94;a-2d:e5;10:#ea;37:11;17:f d9;}.~138.~176 9f a7{87:94;17:f d9;}.~138.~176 9f a7 b3.177{fe:ef;5b:c;32:c;87:e7;37-10:#178;}.~179 .~17a .~ec{32:136;}.~179 .~17a .~ec .~ed{53-32:17b;32:136;}.~179 .~17a .~ec .~122{1-2:124;f0:17c;56:112;}.~179 .~17a .~ec .~122 .~d8{}.~0 .~17d 85::-d-85-f3{10 :#158;}.~17d .~122{5b:17e;32:17e;49:174 67;10:#eb;7e:7f;54:55;17-e3:17f.e7;17:94 92 #eb;15-16:17-15;}.~17d .~122:bd{56:123;ef:123;1-2:e4;1-42:43;54:10e;}.~17d{87:e8;5b:c;32:c;15-16:17-15;}.~17d .~180{5b:c;32:c;17-e3:104;1-4:"5"6 7-8;1-42:100;1-2:3;a-2d:e5;37-10:38;15-e:10f 3e 112 3e 110(111 111 111 33.181);101{102}}.~17d .~108.~17d .~10a{fe:ef;54:55;5b:c;32:136;53-32:182;17-e3:104 104 33 33;37-10:#eb;}.~17d .~ec .~ed{fe:ef;5b:c;87:120 120 33 120;1-2:13a;1-42:100;106:33.183;15-16:17-15;}.~17d 184.~125{fe:ef;5b:c;37-10:73;}.~17d .~12b.~17d .~130{fe:ef;5b:c;32:17b;37-10:#12e;17-e3:33 33 104 104;53-32:17b;10:#ea;7e:7f;a-77:185;}.~17d.~186{87:33;32:17b;}.~17d .~e0{32:17b;10:#ea;53-32:17b;a-2d:e5;37:#eb;54:55;15-e:10f 3e 112 3e 110(111 111 111 33.181);}.~17d .~e0 .~ed{32:73;a-2d:e5;}.~17d .~e0 .~122{ef:120;56:-ee;5b:62;32:ee;17:f;49:11;3d:67;10:#eb;53-32:e9;54:10e;17-e3:104 104 33 33;15-e:10f -3e 94 3e 110(111 111 111 33.187);37-10:110(188 188 188 33.160);}.~17d .~e0 .~122:bd{56:112;ef:120;54:10e;32:73;}.~17d .~180 .~125 .~138.~144 b3{87:33;}.~17d .~180 .~125 .~138.~14a .~156{32:136;}.~17d .~138.~176 9f a7 b3.~189{5b:c d9;25:26;}.~18a{54:55;fe:ef;5b:c;32:136;5e:5f;a-2d:ef;1-2:124;10:#ea;7e:7f;101{45.102}}.~103 .~18a{15-e:-94 94 104 33 110(111 111 111 33.187);}.~18a .~ec{15-16:17-15;32:c;5b:73;56:33;131-132:18b;87-ef:e4;37-10:#eb;101{18c.18d}}.~18a .~ec .~122{54:10e;ef:33;56:33;5b:136;32:136;25:26;37:73;17-e3:e7 33 33 e7;18e:f;7e:7f;1-2:e4;53-32:136;a-2d:e5;131-132:18f;}.~18a .~ec .~122.190{-d-114:8b 191 116 118;-64-114:8b 191 116 118;114:8b 191 116 118;37-10:38;}.~18a .~ec .~ed{15-16:17-15;54:10e;49:33;87:33;25:26;ef:136;56:33;32:136;53-32:136;87-ef:120;}.~df .~192.~df .~193 .~194{17-e3:104;}.~df .~193 .~194{25:9f-177;2c-2d:a8;87:112;a-2d:e5;15-e:10f 3e 94 10f 110(195.196);7e:7f;7e:11e;}.~df .~193 .~194 .~d8{25:26;49-3d:e6;}.~df .~193 .~194 .~d8:bd{1-2:197;}.~df .~193.~198 .~194{5b:199;32:19a;54:55;5e:5f;}.~df .~193.~198 .~194:bd{54:10e;ef:33;56:33;5b:c;32:c;25:26;37-10:110(19b.19c);65:"";106:33;-d-126:106 19d 19e-19f-1a0;-64-126:106 19d 19e-19f-1a0;-1a1-126:106 19d 19e-19f-1a0;-9-126:106 19d 19e-19f-1a0;126:106 19d 19e-19f-1a0;}.~df .~193.~198 .~194:3a:bd{106:107;-d-126:106 1a2 19e-19f-1a0;-64-126:106 1a2 19e-19f-1a0;-1a1-126:106 1a2 19e-19f-1a0;-9-126:106 1a2 19e-19f-1a0;126:106 1a2 19e-19f-1a0;}.~df .~193.~1a3 .~194{5b:1a4;32:1a4;17-e3:1a5;87:120;54:55;5e:5f;}.~df .~193.~1a3 .~194 .~1a6{54:10e;ef:33;56:33;5b:c;32:c;25:26;65:"";106:33;17-e3:1a7;37-10:110(19b.19c);-d-126:106 19d 19e-19f-1a0;-64-126:106 19d 19e-19f-1a0;-1a1-126:106 19d 19e-19f-1a0;-9-126:106 19d 19e-19f-1a0;126:106 19d 19e-19f-1a0;}.~df .~193.~1a3 .~194 .~1a6.~1a8{106:107;-d-126:106 1a2 19e-19f-1a0;-64-126:106 1a2 19e-19f-1a0;-1a1-126:106 1a2 19e-19f-1a0;-9-126:106 1a2 19e-19f-1a0;126:106 1a2 19e-19f-1a0;}.~1a9{25:f;}.1aa{1-4:"5" d9;}.1aa:bd{1:d7 d7 d7 13a/107 "1ab 1ac 1ad";}.~138{fe:ef;5b:c;87:e4;15-16:17-15;}.~1ae{15-e:10f 3e 104 3e 110(111 111 111 33.107);}.~138 .~1af{fe:ef;a-2d:ef;5b:c;49-56:120;}.~138 .~1af:bd{54:10e;56:-94;126:1b0 .1b1 19e 117;ef:10f;}.~138 .~1af 85{25:f;}.~138 .~1af 9b{87-ef:1b2;7e:7f;54:55;140-a1:.3e;}.~138 .~1af.~165 1b3.~138 .~1af.~165.1aa-88-1b4-3b:bd{10:#166;}.~138 .~1af.1aa-88-1b5:bd{10:#1b6;}.~138 .~1b7{25:f;1-2:124;1-42:9a;}.~1b8{1-4:"5";32:19a;1b9:f;}.~138.~143{1-2:f1;}.~138.~139{87:120 120 e4;}.~138.~139 b3{49:33 67 33 67;87:10f e4 120 e4;32:e9;53-32:e9;37-10:38;}.~138.~139 .~142{25:                           2b;54:                          55;7e:                            7f;7e:                            11e;87:33;49:33 120 33 -e9;53-32:                       e9;}.~138.~146{25:f; a-2d: e5;}.~138.~146 ba.~138.~146 b5{5b:67;25:2b-26;a-2d:ef;49-ef:163 67;87:33 10f 33 e4;10:73;}.~138.~146 bb 147.~138.~146 b5 b6{54: 55;49: 3 33;37-1ba:f;10:73;1-4:"5" d9;}.~138.~146 b5 b6::bd{25:f d9;}.~138.~146 bb b6{b7-45:f;}.~138.~146 bb b6::bd{54: 10e;ef:-149;56:10f;1-4:"bf-c0" d9;65: "148";}.~138.~14a .~1bb{25:f; }.~138.~14a .~1bb .~1bc{32:1bd;17-e3:104;5b:199;54:55;1-2:1be;53-32:1be;1-42:43;a-2d:e5;49:33 67 13a;87-56:1bf;}.~138.~14a .~1bb .~1c0{1-2:3;1-42:43;}.~138.~14a .~1bb .~1bc::bd{5b:c;32:1a7;54:10e;ef:33;56:33;131-132:133;25:26;65:"";37:110(111 111 111 33.134);10:#eb;17-e3:104 104 10f 10f;}.~138.~14a{25:f; 87:13a e4 e9;}.~138.~14a .~14b.~138.~14a .~14c.~138.~14a .~14d{fe:ef;5b:c;32:62;53-32:124;}.~138.~14a .~14e{25:f;a-2d:e5;10:#ea;1-42:43;53-32:149;}.~138.~14a b3{fe:ef;5b:c;87:33 33 13a;a-2d:e5;}.~138.~14a .~1c1{87-56:e4;}.~138.~14a .~15a.~138.~150 .~1c2.~138.~152 .~153 .~1c3.~138.~155 .~156 .~f2{15-16:17-15;fe:ef;5b:c;87:e7 94 112 d9;17:f d9;17-3d:3e 92 #15c;a-2d:ef;15-e:f d9;1-2:3;37:38;32:67 d9;}.~138.~14a .~15e:15f.~138.~150 .~15b:15f.~138.~152 .~153 .~f2:15f.~138.~155 .~156 .~f2:83{3b:f;-d-15-e:f d9;-64-15-e:f d9;15-e:f d9;}.~138.~14a .~14d{32:e4;87:3 33;}.~138.~14a .~161{2c-2d:a8;fe:ef;}.~138.~14a .~14d #~162{87:94 33 33 120;}.~138.~14a .~15e.~164.~138.~150 .~15b.~164.~138.~152 .~153 .~f2.~165{10:#166;1-42:9a;}.~138.~167{25:f;87:10f d9;}.~138.~167 ba.~138.~167 bb 147.~138.~167 bb b6 .~168{fe:ef;49:33;87:33;}.~138.~167 bb{15-16:17-15;49:33;87-3d:ee;5b:c;}.~138.~167 bb b6{b7-45-b8:f;5b:c;}.~138.~167 bb b6.~169 .~1c4{49:33;87:33;}.~138.~167 bb b6.~169 .~1c4 b6{49:33 e4;87:33;32:11;53-32:1c5;a-2d:ef;1-42:9d;1-2:f1;140-a1:33.94;}.~138.~167 bb b6.~169 .~1c4 b6 .1aa:bd{1-2:149;}.~138.~167 bb b6.~169 .~1c4 b6 .1aa{49-f0:123;}.~138.~167 bb b6.~169{32:67;17-e3:10f;53-32:163;1-42:9a;87-56:120;87-3d:e8;49-3d:120;}.~138.~167 bb b6.~169 .~168{17-10:#ea;49-3d:120;32:182;}.~138.~167 bb b6.~169 .~168 .~1c6{1-2:9e;}.~138.~167 bb b6.~169 .~168 a9 .1aa:bd{53-32:1c5;}.~138.~167 bb b6.~169 .~168 a9 .1aa{49-f0:123;fe:ef;}.~138.~167 bb b6.~169 .~168 af.~138.~167 bb b6.~169 .~168 b3{10:73;1-2:124;1-42:43;}.~138.~167 bb b6 .~16f.~138.~167 bb b6 .~170{5b:171;32:11;53-32:e9;}.~138.~167 bb b6 .~168{49:10f 172;17-3d:3e 92 #173;}.~138.~167 bb b6 .~170{49:62 174 10f;}.~138.~167 bb b6 .~168 ac.~138.~167 bb b6 .~168 a9{15-16:17-15;25:2b-26;54:175;fe:ef;49:33;87:33;1-2:9e;53-32:1c7;1-42:100;}.~138.~167 bb b6 .~168 b3{fe:f0;10:73;}.~138.~167 bb .~1c8{}.~138.~1c9{25:f;fe:ef;87:145 e4 e4;53-32:e4;1-2: f1;1-42: d7;}.~138.~1c9 .~1ca{106:107;}.~138.~1c9 .~1cb.~138.~1c9 .~1cc{25:26;1cd-32:10f;-d-126:1cd-32 .1ce 106 .127;126:1cd-32 .1ce 106 .127;}.~138.~1c9 .~1cf.~138.~1c9 .~1d0{106:107;a-90:1d1;7e:7f;131-132:181;}.~138.~1c9 .~1d2{87-f0:104;}.~138.~1c9 .~1cc{106:33;131-132:1d3;25:f;}.~138.~1d4{25:f;}.~138.~1d4 5a{5b:c;}.~138.~1d5 .~1d6{32:1d7;}.~138.~176{87:e8;37-10:#1d8;}.~17d .~138.~176{87:33;}.~138.~176 9f{fe:ef;5b:c;17-a0:a0;}.~138.~176 9f 1d9{37:f;}.~138.~176 9f a3.~1da{87:94;a-2d:e5;10:#ea;32:17e;37:                        73 d9;}.~138.~176 9f a3.~1da b3{1-42:43;1-2:9e;}.~138.~176 9f a3.~1da 5a{1cd-5b:1db;1cd-32:e9;25:2b-26;}.~138.~176 9f a3.~1da.~169 b3{1-42:43;1-2:9e;fe:ef;5b:c;87:94 120 94 120;140-a1:33.1dc}.~138.~176 9f a7.~1dd{87:94 d9;1-4:73 d9;54:55;5b:1de d9;}.~138.~176 9f a7.~1dd.~1df{5b:1de;}.~138.~176 9f a7 b3.~189{5b:1de;32:62;87:e7 e6;37-10:#eb;2c-2d:a8;25:9f-177;1-2:163;a-2d:e5;15-16:11;140-a1:33.1dc;17-e3:104;1-4:73 d9;}.~138.~176 9f a7:1e0-1e1 b3.~189{a-2d:ef;}.~138.~176 9f a7 b3.~189.~d8{1-4:"bf-c0" d9;}.~138.~176 9f a7 b3.~189 b3.~d8{54:10e;56:1a7;ef:1a7;5b:e4;32:e4;49:-120 33 33 -120;53-32:e4;10:#1e2;}.~138.~176 9f a7 b3.~189 b3.~d8.~1e3.~138.~176 9f a7 b3.~d8.~1e4{10:1e5;a-2d:e5;1-2:e4;}.~138.~176 9f a7 b3.~189 b3.~d8.~1e6.~138.~176 9f a7 b3.~d8.~1e7{10:1e8;a-2d:e5;1-2:e4;}.~138.~176 9f a7 b3.~189.~169.~1e9{37-10:#1ea;10:#eb;a-2d:e5;1-42:9a;1-2:3;53-32:e4;7e:7f;}.~138.~176 9f a7 b3 b3.~1eb{-d-114:~fd 115 116 118;-64-114:~fd 115 116 118;114:~fd 115 116 118;}.~1ec{87:33;5b:10f;}.~1ed{37-10:110(1ee 107);1ef-10:110(1f0 1f1 111 .1f2);1ef-10:110(1f3 1f4 1f5 .1f2);49:33;1-4:"5"6 7-8;1-42:100;1-2:f1;126:1b0 .1f6 19e-19f-1a0;126-1f7:               1f8 1f9 1fa 1fb 37-10;106:107;54:10e;17-e3:94;fe:f;5b:1fc;1fd:75;25:26;-d-77-45:128-129;-64-77-45:128-129;77-45:128-129;87:e8 33;77:1fe(-1ff);}.~200 .~1ed{ef:e4;}.~201 .~1ed{f0:e4;}.~202 .~1ed{49-56:e4;}.~179 .~1ed{49-3d:e4;}.~1ed.~203{1fd:5f;106:33;25:f;}.~1ed .~204{10:73;1-2:3;54:10e;56:e7;f0:112;7e:7f;5b:3;32:3;}.~1ed .~205{25:26;a-2d:e5;87:33 e9 33 206;53-32:13a;10:73;}.~1ed.~207 .~205{87:33 e9 ;}.~1ed .~208.1aa::bd{1-2:209;}.~1ed .~208{1-2:209;25:2b-26;2c-2d:a8;a-2d:e5;10:73;}.~1ed.~20a .~208{54:10e;5b:62;ef:10f;56:1a7;77:1fe(-1a7);-d-77:1fe(-1a7);-9-77:1fe(-1a7);}.~1ed.~207 .~208{25:26;49-3d:123;}.~20b .~20c.~20b .~1ed .~204:bd{1-2:                         9e d9;}.~20b .~1ed .~208:bd{1-2:                         20d;}.~138.~20e{37-10:#eb;25:f;}.~138.~20e .20f{87-ef:120;}.~138.~150{25:f;87:13a e4 e9;}.~138.~150 .~210{32:10b;}.~138.~150 .~210:bd{54:10e;56:e8;ef:10f;}.~138.~150 .~15b{87:e7 ee 112;}.~138.~150 .~211.~138.~150 .~210{25:26;}.~138.~150 .~151.~138.~152 .~153 .~157{a-2d:ef;}.~138.~150 .~212{25:f;10:1e5;1-2:124;1-42:9a;}.~138.~150 .~213{25:f;10:#214;1-2:124;1-42:9a;}.~138.~152 .~215.~138.~152 .~153{87:13a e4 e9;25:f;}.~138.~152 .~153{126:1b0 .216 19e 117;}.~138.~152 .~217 .~218{49:120 67 120 67;87:33 ee;32:62;53-32:62;37-10:#13d;17-e3:e4;1-2:3;1-42:43;25:2b-26;5b:219;54:55;1-42:100;}.~138.~152 .~217 .~21a:bd{54:10e;56:120;ef:f1;1-2:e4;}.~138.~152 .~217 .~21a:14{5b:c;32:62;ef:33;65:"";126:37-10 .1b1 19e 117;37-10:110(111 111 111 33);54:10e;17-e3:e4;}.~138.~152 .~217 .~21a:3a:14{25:2b-26;37-10:110(195.134);10:110(111 111 21b 33.134);}.~138.~152 .~217 .~21c:bd{54:10e;56:e6;ef:3;1-2:149;}.~138.~152 .~217 .~21a:3a{7e:7f;}.~138.~152 .~153 .~21d{32:17b;126:1cd-32 .216 19e 117;}.~138.~152 .~153 .~21d.~1b8{32:21e;}.~138.~152 .~1b7{87:10b 120;}.~138.~152 .~1b7:bd{1-2:124;54:55;ef:-e6;}.~138.~21f{25:f;}.~138.~21f b3{2c-2d:11;}.~138.~21f .~220{87:f1 33;53-32:11;}.~221 .~138.~21f .~220{87:f1 136;}.~222 .~138.~21f .~220{87:e7 33;}.~138.~21f .~220 .~223{49:33 9e;25:2b-26;5e:5f;53-32:224;}.~222 .~138.~21f .~223{49:33 120;53-32:206;}.~138.~21f .~220 .~225{49:33 94;32:224;17-e3:e7;87:10f 120;25:2b-26;1-2:1be;1-42:100;54:55;5e:5f;53-32:224;}.~222 .~138.~21f .~225{1-2:16c;32:206;87:10f 123;1-42:100;53-32:206;}.~138.~21f .~220.~226 .~225:14{65:"";37-10:110(111 111 111 .18f);25:26;56:33;ef:33;5b:c;32:1a7;17-e3:104 104 33 33;54:10e;}.~138.~21f .~220 .~227{49:33 94;}.~222 .~21f .~220 .~227{49:33 3e;}.~138.~21f ba.~138.~21f b6{49:33;87:33;}.~138.~21f bb.~228{32:224;}.~138.~21f bb.~228 b6{25:2b-26;54:10e;49-ef:-f1;-d-126:1b0 .229 19e-19f-1a0;-64-126:1b0 .229 19e-19f-1a0;-1a1-126:1b0 .229 19e-19f-1a0;126:1b0 .229 19e-19f-1a0;106:33;1-2:1be;53-32:224;a-2d:e5;}.~222 .~138.~21f bb.~228 b6{49-ef:-1bf;}.~138.~21f bb.~228 b6.~22a{77:1fe(10f);106:107;}.~222 .~138.~21f bb.~228 b6.~22a{77:1fe(10f);}.~138.~21f bb.~228 b6.~22b{1fd:5f;77:1fe(224);}.~222 .~138.~21f bb.~228 b6.~22b{77:1fe(206);}.~138.~21f bb.~228 b6.~22c{1fd:5f;77:1fe(-224);}.~222 .~138.~21f bb.~228 b6.~22c{77:1fe(-206);}.~138.~21f .~22d{1-2:120;1-42:100;3d:120;10:#22e;5b:22f;25:2b-26;a-77:185;;49-56:e7;}.~222 .~138.~21f .~22d{25:f;}.~138.~155{25:f;}.~138.~155 .~230{87:13a e4 10f;5b:c;a-2d:ef;}.~138.~155 .~230 184{32:e9;}.~138.~155 .~230 184 .~231.~138.~155 .~1c4 #~232{25:2b-26;1-42:9d;1-2:120;140-a1:33.112;5b:233;}.~138.~155 .~156{87:13a e4 e9;}.~138.~155 .~156 .~157{fe:ef;}.~138.~155 .~156 .~21d .~f2{49-3d:e4;}.~138.~234{25:f;87:13a e4 120;}.~138.~234 .~235{25:f;5b:c;32:19a;}.~138.~234 .~236{1-42:43;1-2:1b2;53-32:62;a-2d:e5;}.~138.~234 .~235 .~237{fe:f0;37:#238;10:239;32:62;5b:23a;49-f0:e9;}.~138.~234 .~235 .~237 .~23b{17-10:#238;}.~138.~234 .~235 .~237 .~23c{5b:33;32:33;17-56:1bf 92;17-f0:1bf 92 38;17-56-10:73;}.~138.~234 .~23d{fe:ef;32:136;1-2:124;87-56:e7;}.~138.~234 .~23d .~23e{32:ee;49-3d:-123;}.~138.~234 .~23d .~23e 5a{1cd-32:c;1cd-5b:c;54:55;56:-120; }.~138.~234 .~23d .~23f{fe:ef;10:#240;49-f0:-94;}.~138.~234 .~23d .~23f .1aa-241:bd{1-2:209 d9;}.~138.~234 .~23d .~23f .1aa-241-242:bd{1-2:209 d9;}.~138.~234 .~23d .~23f .1aa-241-3b:bd{1-2:209 d9;}.~138.~234 .~23d .~243{a-2d:ef;87-ef:94;1-2:145;}.~138.~234 .~244{fe:ef;5b:c;87-56:120;87-ef:104;a-2d:ef;1-2:163;}.~138.~234 .~244 36{a-90:f;10:#245;}.~138.~234 .~246{fe:ef;5b:c;a-2d:ef;25:f;}.~138.~234 .~246 .~247{1-42:43;}.~138.~234 .~248{87-56:120;}.~138.~234 .~248 .~249{fe:ef;5b:24a;49-3d:e6;}.~138.~234 .~248 .~249:24b-1e1{17-3d:f;}.~138.~234 .~248 .~249 .~24c.~138.~234 .~248 .~249 .~24d{5b:c;49:33 104;}.~138.~234 .~248 .~249 .~24e{1-42:43;49-3d:112;}.~138.~234 .~248 .~249 .~24e .~24f{10:#250;1-2:f1;49-f0:e7;}.~138.~234 .~248 .~249 .~24e .~24f .~251{1-2:13a;2c-2d:2e;10:#252;}.~138.~234 .~248 .~249 .~24d{1-2:f1;87-ef:1c7;}',
	cssUnpacked 	= '',
	cssDictionairy 	= ['Viewport','font','size','14px','family','Roboto',',','sans','serif','ms','text','adjust','100%','webkit','shadow','none','color','initial','*','before,','after','box','sizing','border','article,','aside,','details,','figcaption,','figure,','footer,','header,','hgroup,','main,','menu,','nav,','section,','summary','display','block','audio,','canvas,','progress,','video','inline','vertical','align','baseline','audio','not','[controls]','height',0,'[hidden],','template','a','background','transparent','active,','hover','outline','abbr[title]','bottom','1px','dotted','b,','strong','weight',500,'dfn','style','italic','h1','2em','margin','67em','mark','ff0','000','small','80%','sub,','sup','75%','line','position','relative','top','5em','sub','25em','img','width','svg','root','overflow','hidden','figure','1em','40px','hr','moz','content','pre','auto','code,','kbd,','pre,','samp','monospace,','monospace','button,','input,','optgroup,','select,','textarea','inherit','button','visible','select','transform','input[type=','],','reset','submit',']','appearance','cursor','pointer','button[disabled],','input[disabled]','default','focus','inner,','input','inner','padding','checkbox','radio','number','spin','outer','search','textfield','cancel','decoration','fieldset','solid','c0c0c0','2px','35em','625em','75em','legend','optgroup','bold','label','black',300,'13px','table','collapse','spacing','td,','th','table,','th,','tr,','td','middle','h3','p,','div,','span,','h1,','h2,','h3,','h4,','h5,','h6,','span','ol,','ol','li','list','type','decimal','ul,','ul','indent','before','face','hc','icon','src','url','data','truetype','charset=utf',8,'base64,AAEAAAANAIAAAwBQRkZUTXHv7TIAAAxoAAAAHEdERUYAQgAGAAAMSAAAACBPUy8yAAAKSgAAAVgAAABWY21hcDxzM6wAAAHkAAABbmdhc3D','wADAAAMQAAAAAhnbHlmHGecvgAAA4AAAAXgaGVhZAbQi1wAAADcAAAANmhoZWEELAIFAAABFAAAACRobXR4CWoBVwAAAbAAAAAybG9jYQ0qDigAAANUAAAALG1heHAAWgBUAAABOAAAACBuYW1lgQgjkAAACWAAAAHgcG9zdIGlNvcAAAtAAAAA','QABAAAAAQAAMWsnu18PPPUACwIAAAAAANLZJTEAAAAA0tklMQAAAAACAAH9AAAACAACAAAAAAAAAAEAAAH9AAAALgIAAAAAAAIAAAEAAAAAAAAAAAAAAAAAAAAEAAEAAAAVAFEAAwAAAAAAAgAAAAEAAQAAAEAAAAAAAAAAAQIAAZAABQAAAUwBZgAAAEcBTAFmAAAA9QAZAIQAAAIABQkAAAAAAAAAAAABAAAAAAAAAAAAAAAAUGZFZABAAGEAcgHg','+AALgH9AAAAAAABAAAAAAAAAgAAAAAAAAACAAAAAgAAIwCDACMAgAAlAEsAVwBZAFUAVwAAAGsAAAArACsAawAVAGsAAAAAAAMAAAADAAAAHAABAAAAAABoAAMAAQAAABwABABMAAAABgAEAAEAAgAAAHL','wAAAAAAYf','AAAAAAABAAAABAAAAAwACwAJAAoAAwAEAAUABgAOAAgABwANAA8AEAARABIAEwAUAAABBgAAAQAAAAAAAAABAgAAAAIAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwLCQoDBAUGDggHDQ8QERITFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIgBEAGYAiADwAQIBGAEuAUQBWgHUAe4CPAJaAoACmgLGAvAAAQAjAIMB3QGAABAAAAEXFj8BNi8BJiIPAQYfARY3AQCuCQcfBwfVAwoD1QcHHwgIASqnBwceBwnMAwPMCQceCAgAAAABAIMAIwGAAd0AEAAAAScmPwE2HwEWFA8BBi8BJjcBKqcHBx4JB8wDA8wHCR4HBwEArgcJHggH1QMKA9UHBx8HCQAAAAEAIwCAAd0BfQAQAAAlNzYfARYPAQYiLwEmPwE2FwEArgkHHwcH1QMKA9UHBx8ICNanBwceCQfMAwPMBwkeCAgAAAAAAQCAACMBfQHdABAAABM3Ni8BJg8BBhQfARY','ATYn1qcHBx4HCcwDA8wJBx4HBwEArgcJHggH1QMKA9UHBx8HCQAAAAABACUAJQHbAdsARQAAABQHBgcGBwYjIicmJyY1ND8BNjMyFxYXFjMyNzY3Njc2NCcmJyYnJiMiBwYHFxYHBisBIiY9ATQ3Nh8BNjc2MzIXFhcWFwHbERMcGiwmLzQpKyECAycDBAEGEyAeIh0cHBIUDAsLDBQSHBwdHhgbEicJBQYLgAgKCwsJJR0pJyovJiwaHBMBL14mLBocExEUFCcEAgMDJwMDHA4PCwwUEhwcOhwcEhQMCwoLEicJCwsKCIALBgUJJRwRDxETHBosAAAAAQBLAGsBwAGJAAUAAAkBJzcXNwHA','wB1HlfiAWv','AHUeV+IAAQBXAFkBqQGrAAgAABMzETcXByc3F+sqdh6pqR52Aav','AHUeqakedQAAAAABAFkAVwGrAakACAAAARUhFwcnNxcHAav','AHUeqakedQEVKnYeqakedgAAAAEAVQBXAacBqQAIAAATFSEHFzcnBxdVAQB1HqmpHnUBFSp2HqmpHnYAAAAAAQBXAFUBqQGnAAgAACUjEQcnNxcHJwEVKnYeqakedlUBAHUeqakedQAAAAACAAAAAAIAAbcAHQBQAAAAIgcGBwYVFBcWHwEHBgc2PwEXFjMyNzY3NjQnJicWFAcGBwYjIicGBwYHIyInJicmNzU0PwU+ATc2NzY3PgE3JicmNTQ3Njc2MhcWFwE8eDEyHx0UFiQYBwgMLSENEA0YPDEyHx0dHzKTIiI7O0YNHDlLDBQCAwUCAgEBAgECAwgKAQYCBQQCBgIFAS4ZGiIiOzuMOzsiAZIUEyIjJiIbHhQOHBoXEh8LAgIUEyIjTCMiE0tmKSoYGQIxFAMDAwIGAQMCAQIDAgMKCgEIAwcHBA0EDwMaJSYqMykqGBkZGCoAAAAAAQBrAGsBlQGVAAsAAAEnBycHFwcXNxc3JwGVHnd3Hnd3Hnd3HncBdx53dx53dx53dx53AAEAAAAAAgAB','QAxAAABFAcOAQcGIicuAScmNTQ3Njc2NxUGBwYVFBcWFxYXFjI3Njc2NzY1NCcmJzUWFxYXFgIAFBVEMDBmMDBEFRQdHDMyPUAoKg8NGhgiI0gjIhgaDQ8qKEA9MjMcHQEAMzAwRBUUFBVEMDAzPzc3JCUHSgwzM0EkIyIYGg0PDw0aGCIjJEEzMwxKByUkNzcAAAMAKwArAdUB1QADAAcADwAAJSM1MxUjNTMSIgYUFjI2NAEVKioqKkOwfX2wfeuA1isBFX2wfX2wAAAAAAMAKwArAdUB1QAHAA8AFQAANjI2NCYiBhQSMhYUBiImNDcVFwcnNbqMZWWMZVOwfX2wfeBgEHBVZYxlZYwBG32wfX2wE3A5G0SAAAABAGsAawGVAZUACwAAAScHJwcXBxc3FzcnAZUed3ced3ced3cedwF3Hnd3Hnd3Hnd3HncAAwAVAGAB6wGgAAcADwAZAAAAIgYUFjI2NAYiJjQ2MhYUJiIGBx4BMjY3JgEaNCYmNCYUWD8','WD8cnoAcHICegBwcAUAmNCYmNIU','WD8','WMxYSEhYWEhIAAIAawArAZUB1QARABsAAAAiBhUUFxUUFjsBMjY9ATY1NAMUFjsBMjY9ASMBPnxXQAwJgAkMQNUNCFYIDYAB1Vc+TiwxCA0NCDEsTj7+wgkMDAkVAAAADACWAAEAAAAAAAEADwAgAAEAAAAAAAIABgA+AAEAAAAAAAMAKgCbAAEAAAAAAAQADwDmAAEAAAAAAAUACwEOAAEAAAAAAAYADwE6AAMAAQQJAAEAHgAAAAMAAQQJAAIADAAwAAMAAQQJAAMAVABFAAMAAQQJAAQAHgDGAAMAAQQJAAUAFgD2AAMAAQQJAAYAHgEaAHUAbgB0AGkAdABsAGUAZAAtAGYAbwBuAHQALQAxAAB1bnRpdGxlZC1mb250LTEAAGYAbwBuAHQALQAxAABmb250LTEAAEYAbwBuAHQARgBvAHIAZwBlACAAMgAuADAAIAA6ACAAdQBuAHQAaQB0AGwAZQBkAC0AZgBvAG4AdAAtADEAIAA6ACAANAAtADIALQAyADAAMQA2AABGb250Rm9yZ2UgMi4wIDogdW50aXRsZWQtZm9udC0xIDogNC0yLTIwMTYAAHUAbgB0AGkAdABsAGUAZAAtAGYAbwBuAHQALQAxAAB1bnRpdGxlZC1mb250LTEAAFYAZQByAHMAaQBvAG4AIAAxAC4AMAAAVmVyc2lvbiAxLjAAAHUAbgB0AGkAdABsAGUAZAAtAGYAbwBuAHQALQAxAAB1bnRpdGxlZC1mb250LTEAAAIAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAFQAAAAEAAgECAQMBBAEFAQYBBwEIAQkBCgELAQwBDQEOAQ8BEAERARIBEwpjaGV2cm9uLXVwDWNoZXZyb24tcmlnaHQMY2hldnJvbi1kb3duDGNoZXZyb24tbGVmdAR1bmRvBWNoZWNrCmFycm93LWRvd24KYXJyb3ctbGVmdAthcnJvdy1yaWdodAhhcnJvdy11cAljb21tZW50LW8HY2xvc2UtMQ5jaXJjbGUtby1ub3RjaAxhbGVydC1jaXJjbGUFY2xvY2sFY2xvc2UDZXllCWxpZ2h0YnVsYgAAAAAAAAH','wACAAEAAAAOAAAAGAAAAAAAAgABAAMAFAABAAQAAAACAAAAAAABAAAAAMw9os8AAAAA0tklMQAAAADS2SUx','normal','Icon','!important','variant','osx','smoothing','grayscale','antialiased','DesktopDialogWidget','TitleLabel','OpenButton','IconBackground','radius','20px','center','8px','5px','15px','30px','000000','FFFFFF','Title','Main','25px','left','right','12px','Input','placeholder','keyframes','rotate','360deg','RTL','direction','rtl','unicode','bidi','override','SpinKeyFrames','float',414141,400,'$','widget','StandAlone','3px','IsDockedWidget','opacity',1,'Title,','TitleLabel,','TitleAlert','45px','Tab,','Tab','absolute','0px','rgba','0,','4px','Loading','animation','1s','linear','0s','infinite','running','WithTabLeft,','WithTabLeft','WithTabRight,','WithTabRight','hand','Main,','10px','CloseButton,','CloseButton','6px','16px','MainContent','transition','4s','preserve','3d','MainButton','DialogButton,','AlertButton,','LoadingContainer','ffffff','DialogButton','AlertButton','z','index',999,'08','7px','50px','fill','WidgetContent','PromoCodeComponent','18px','Code,','31px','d8d8d8','Courier','New','letter','CodeMessage','ClipboardButton','TitleComponent','TextComponent','17px','UspComponent','li,','j','22px','VoucherComponent','Form,','Response,','CheckBox','Response','EmailLabel,','CallMeBackComponent','PhoneLabel,','ContactUsComponent','AlertView','InputLabel,','ReminderComponent','Form','InputLabel','9B9B9B','EmailLabel','EmailInput,','PhoneInput','4A4A4A','26px','EmailInput','focus,',7,'AcceptTerms','AcceptTermsLabel','11px','Error,','Error','FF0000','PriceComparisonComponent','Item','Direct','eaeaea','Content','34px','clear','both','Item,','Sub','85%','8%','c1c1c1','5%','static','TableComponent','cell','F0F0F0','AlignmentVerticalBottom','IsVerticalAligned','60px','48%','MobileDialogWidget','35px',17,'Widget',3,'36px',57,'div','uppercase','LabelView',2,'172,','TableContent','DesktopLabelWidget',100,'styles','title','speak',10,'loading','2s','IconTitleLabel,','IconTitleLabel','Wrapper','0,0,0,0',50,'27px','TypeRectangle','112px','80px','255,255,255,0',15,'200ms','ease','in','out','o','400ms','TypeCircle','110px','56px','Before','50%','Hover','MobileLabelWidget','mdi','Material','Design','Icons','WidgetShadow','CheckBoxContainer','all','28s','24px','label,','blank','marked','26A69A','SuccessContainer','TextArea','resize','image','VoucherComponentNotification','VouchersAmountLeft','65px','48px','9px','VouchersAmountText','Amount','PhoneInput,','Input,','Usp','28px','NotAvailable','32px','Channel','ReadMoreComponent','Front','Front,','Back','max','4s,','ReadMore,','ReadLess','underline','ReadMoreTitle',5,'ImageComponent','MapsComponent','Map','200px','EEEEEE','tr','TableHeader','75px','02em','TableCell','90px','CheckColumn','first','child',808080,'Checked,','Checked','green','Unchecked,','Unchecked','red','Book','19A79B','Spinner','DesktopSmartNotificationWidget','NotificationComponent','255,255,255,','_background','255,','203,',94,'25,','167,','155,','6s','property','display,','visibility,','opacity,','transform,','320px','visibility','translateY','3000px','AlignmentHorizontalLeft','AlignmentHorizontalRight','AlignmentVerticalTop','Hidden','ComponentCloseButton','NotificationText','38px','HeightTall','NotificationIcon','21px','HeightNormal','Mobile','NotificationComponent,','23px','TripAdvisorComponent','TA_selfserveprop','PhoneContainer','CheckBoxContainer,','Success','ErrorMessage','F00','DialogView,','5s','DialogView','Button','90%','MailButton',',0,','PhoneNumber','InputContainer','100px','TimerComponent','TimerView','WidgetTypeExit','DesktopBarWidget','Segment','58px','SegmentContainer','ViewModeSlide','Separator','Digit','7s','CurrentActive','NextActive','PrevActive','UnitText','4a4a4a','28%','RoomInfo','Label,','DirectOnly','20%','ReviewComponent','Header','Score','ScoreBorder','7DB66B','white','53px','ScoreContainer','ScoreBorderSpeechBubble','ScoreText','TrustYouLogo','Stars','F0B35A','star','half','HeaderText','SubTitle','5EB8AD','Reviews','ReviewsTitle','ReviewsContainer','Review','99%','last','ReviewBodyText,','ReviewFooterText','ReviewBodyText','ReviewScore','BCC5CB','ReviewScorePoints','47AB9E'],
	style 			= document.createElement('style'),
	s 				= '',
	w 				= '';
for (var i = 0, j = css.length; i < j; i++) {
	var c = css[i];
	if (c === '~') {
		if (w !== '') {
			cssUnpacked += cssDictionairy[parseInt(w, 16)];
			w = '';
		}
		cssUnpacked += utils.dom.prefix;
	} else if (' .#:;-\"@{}()/'.indexOf(c) === -1) {
		w += c;
	} else {
		if (w !== '') {
			cssUnpacked += cssDictionairy[parseInt(w, 16)];
			w = '';
		}
		cssUnpacked += c;
	}
}
if (w !== '') {
	cssUnpacked += cssDictionairy[parseInt(w, 16)];
}
style.type = 'text/css';
style.id   = 'hcWidgetStyle';
if (style.styleSheet){
	style.styleSheet.cssText = cssUnpacked;
} else {
	style.appendChild(document.createTextNode(cssUnpacked));
}
document.head.appendChild(style);var engine = new Engine({api:'2zbP5G1FNH',dimension:1,trackingPrefix:'Hotelchamp',relayServer:'https://lumen.hotelchamp.com',pcserver:'https://pc.hotelchamp.com',titanScriptUrlTemplate:'https://hospitality-optimizer.com/:websiteHash/tag.js',reviewServer:'https://reviews.hotelchamp.com',when:'April 16, 2018, 5:54:56 pm',timeStamp:1523901296,git:'v2.3.0-88-g1fdd271 | 2zbP5G1FNH',dashboardVersion:2,buildId:24038,isIpCountryCheckRequired:'',demo:'',isPreviewWidget:'',testEnv:0,domain: ['http://www.langhamhotels.com/en/the-langham/pasadena/',],activeDomain:'platform.hotelchamp.com',dashboardDomain:'platform.hotelchamp.com',lang: {},fallbackLang:'nl',bookingEngines: {},documentConnectors: [{connectorClassSuffix:'connectoradapter.bookingsengine.Synxis',config: {rateDisplayType:'night_average',id:7},isConnectableCheckConfig: {}}],widgets: [{constructor:'DialogWidget',id:'xt_13302',hash:'01682bcd626776d04831fc3c1b90e599',type:'exit',uri: {},uriDisabled: {},urlTriggerPolicy:'{"operator":"AND","specs":[{"operator":"OR","specs":[{"property":"page.url","className":"Equals","specificationId":"equals_url","isInverted":false,"equals":"http:\/\/www.langhamhotels.com\/en\/the-langham\/pasadena\/"}]}]}',customTargets: ['',],versions: {"1": {lang: {en: {customBookButtonUrl:'http://www.langhamhotels.com/en/the-langham/pasadena/offers/room-offers/linger-with-langham/',dialogTitle:'',dialogLabel:'',dialogButton:'<u>SEE OFFER<u/>',labelTitle:'',alertTitle:'',alertButton:'',compPriceContent:''}},data: {exitTriggerDoneMode:'per_lang_and_widget',targetDevice:'desktop,ipad',width:476,priority:0,preventDisplayStateManagedByWidgetManager:1,label:0,tab:0,minimizable:0,startMinimized:0,fold:0,mobileMinimizable:0,labelType:'label',alignment:4,labelOffset:0,labelAlignment:0,horizontalOffset:0,alignVertical:0,buttonAction:'url',alertButtonAction:0,alertCloseWindow:1,labelUseIcon:0,titleUseIcon:0,displayImage:1,displayImageAlert:0,compImage:'https://cdn.hotelchamp.com/content/tools/uploads/5a/9c/5a9c7ef2199185.42178531.png',displayTripAdvisor:0,displayTripAdvisorAlert:0,componentOrder:'TitleComponent,ImageComponent,TextComponent,PromoCodeComponent,VoucherComponent,PriceComparisonComponent,TableComponent,ReadMoreComponent,TripadvisorComponent,CallMeBackComponent,ContactUsComponent,TimerComponent,UspComparisonComponent,ReviewComponent,UspComponent',compMapsApiKey:'AIzaSyDbFYofJ0KoJs72SANQPknObPIB3tF8DDw',shadowEnabled:0,triggerPolicies: {operator:'AND',specs: [{operator:'AND',specs: [{operator:'AND',specs: [{property:'user.sessionCount',specificationId:'min_2',className:'Min',value:2},{property:'user.widgetTriggeredCount',specificationId:'max',className:'Max',value:1}]}]}]},isIpCountryCheckRequired:'',isIpRegionCheckRequired:''},style: {compImageContainer:'',compTripAdvisor:'',dialogWidget:'',dialogTitle:'color:rgba(255,255,255,1);background-color:rgba(0,0,0,0)',dialogContent:'background-color:rgba(250,250,250,0);color:rgba(74,74,74,1)',dialogButton:'background-color:rgba(165,121,60,1);color:rgba(255,255,255,1)',dialogLabel:'color:rgba(255,255,255,1);background-color:rgba(0,0,0,0)',barButton:'color:rgba(255,255,255,1);backgroundColor:rgba(4,183,168,1)'}}},testGroup:'a',templateIndex: ['0','1','2','3',],isIpCountryCheckRequired:'',isIpRegionCheckRequired:''},{constructor:'DialogWidget',id:'fltngtb_13506',hash:'b044d240f99ce8e8943853e100289113',type:'floatingtab',uri: {},uriDisabled: {},urlTriggerPolicy:'{"operator":"AND","specs":[{"operator":"OR","specs":[{"property":"page.url","className":"Contains","specificationId":"contains_in_url","isInverted":false,"contains":"gc.synxis.com\/rez.aspx?Chain=10316&Hotel=27405"},{"property":"page.url","className":"Contains","specificationId":"contains_in_url","isInverted":false,"contains":"27405"}]}]}',customTargets: ['',],versions: {"1": {lang: {en: {customBookButtonUrl:'',dialogTitle:'OUR GUARANTEE',dialogLabel:'Price check',dialogButton:'Hide',labelTitle:'Price check',alertTitle:'',alertButton:'',compPriceContent:'',notAvailable:'',compLiveChatLabel:'',uspItems:'Best price guaranteed; Offers exclusive to our website'}},data: {exitTriggerDoneMode:'per_lang_and_widget',targetDevice:'desktop,ipad',width:260,priority:0,preventDisplayStateManagedByWidgetManager:1,label:0,tab:1,minimizable:1,startMinimized:0,fold:1,mobileMinimizable:0,labelType:'label',alignment:2,labelOffset:-120,labelAlignment:0,horizontalOffset:10,alignVertical:0,buttonAction:'hide',alertButtonAction:'component',alertCloseWindow:0,labelUseIcon:0,titleUseIcon:0,displayPriceComparison:1,displayPriceComparisonAlert:0,showOnlyWhenCheepest:1,showOnlyWithAvailablePrices:1,codes:'Booking.com,Expedia,Travelocity',names:'Booking.com,Expedia,Travelocity',hotelCode:'Direct',hotelName:'The Langham',priceUrl:'https://pc.hotelchamp.com/api/pc?property=22309&arrival={from}&departure={to}&currency={currency}',displayTripAdvisor:0,displayTripAdvisorAlert:0,componentOrder:'TitleComponent,PromoCodeComponent,TextComponent,ImageComponent,UspComponent,VoucherComponent,TableComponent,ReadMoreComponent,TripadvisorComponent,CallMeBackComponent,TimerComponent,ContactUsComponent,MapsComponent,LiveChatComponent,UspComparisonComponent,ReviewComponent,PriceComparisonComponent',hideChannelsIfChannelPriceIsLower:1,shadowEnabled:1,triggerPolicies: {operator:'AND',specs: [{operator:'AND',specs: [{operator:'AND',specs: [{property:'general.instantly',specificationId:'true',className:'True'}]}]}]},isIpCountryCheckRequired:'',isIpRegionCheckRequired:''},style: {compPriceContent:'color:rgba(73,73,73,1);background-color:rgba(245,245,245,1)',compTripAdvisor:'',compLiveChat:'',dialogWidget:'',dialogTitle:'color:rgba(255,255,255,1);background-color:rgba(165,121,60,1)',dialogContent:'background-color:rgba(78,78,78,0);color:',dialogButton:'backgroundColor:rgba(4,183,168,1);color:rgba(255,255,255,1)',dialogLabel:'color:rgba(255,255,255,1);background-color:rgba(165,121,60,1)',dialogLabelIcon:'',barButton:'color:rgba(255,255,255,1);backgroundColor:rgba(4,183,168,1)',compPriceContentDirect:'color:rgba(73,73,73,1);background-color:rgba(245,245,245,1)'}}},testGroup:'a',templateIndex: ['0','1','2','4',],isIpCountryCheckRequired:'',isIpRegionCheckRequired:''},{constructor:'DialogWidget',id:'xt_13589',hash:'b0e59107bf418b0b8987f13914be0818',type:'exit',uri: {},uriDisabled: {},urlTriggerPolicy:'{"operator":"AND","specs":[{"operator":"OR","specs":[{"property":"page.url","className":"Contains","specificationId":"contains_in_url","isInverted":false,"contains":"https:\/\/gc.synxis.com\/rez.aspx?Chain=10316&Hotel=27405"},{"property":"page.url","className":"Contains","specificationId":"contains_in_url","isInverted":false,"contains":"27405"}]}]}',customTargets: ['',],versions: {"1": {lang: {en: {customBookButtonUrl:'',dialogTitle:'',dialogLabel:'',dialogButton:'ACTIVATE YOUR DISCOUNT',labelTitle:'',alertTitle:'',alertButton:'',compPriceContent:''}},data: {exitTriggerDoneMode:'per_lang_and_widget',targetDevice:'desktop,ipad',width:475,priority:0,preventDisplayStateManagedByWidgetManager:1,label:0,tab:0,minimizable:0,startMinimized:0,fold:0,mobileMinimizable:0,labelType:'label',alignment:4,labelOffset:0,labelAlignment:0,horizontalOffset:0,alignVertical:0,buttonAction:'hide',alertButtonAction:0,alertCloseWindow:1,labelUseIcon:0,titleUseIcon:0,displayImage:1,displayImageAlert:0,compImage:'https://cdn.hotelchamp.com/content/tools/uploads/5a/b1/5ab12590586444.60878164.png',displayTripAdvisor:0,displayTripAdvisorAlert:0,componentOrder:'TextComponent,PromoCodeComponent,ImageComponent,TitleComponent,UspComponent,VoucherComponent,PriceComparisonComponent,TableComponent,ReadMoreComponent,TripadvisorComponent,CallMeBackComponent,ContactUsComponent,TimerComponent,UspComparisonComponent,ReviewComponent',compMapsApiKey:'AIzaSyDbFYofJ0KoJs72SANQPknObPIB3tF8DDw',shadowEnabled:0,triggerPolicies: {operator:'AND',specs: [{operator:'AND',specs: [{operator:'AND',specs: [{property:'page.onExit',specificationId:'is_true',className:'IsTrue'},{property:'user.widgetTriggeredCount',specificationId:'max',className:'Max',value:1},{property:'page.loadedDateTime',specificationId:'is_after_time_diff',className:'IsAfterTimeDiff',secDiff:10,minDiff:0,hourDiff:0}]}]}]},isIpCountryCheckRequired:'',isIpRegionCheckRequired:''},style: {compImageContainer:'',compTripAdvisor:'',dialogWidget:'',dialogTitle:'color:rgba(255,255,255,1);background-color:rgba(165,121,60,0)',dialogContent:'backgroundColor:rgb(250, 250, 250);color:rgba(74,74,74,1)',dialogButton:'backgroundColor:rgba(4,183,168,1);color:rgba(255,255,255,1)',dialogLabel:'color:rgba(255,255,255,1);background-color:rgba(165,121,60,0)',barButton:'color:rgba(255,255,255,1);backgroundColor:rgba(4,183,168,1)'}}},testGroup:'a',templateIndex: ['0','1','2','3',],isIpCountryCheckRequired:'',isIpRegionCheckRequired:''}],templates: [{t:'view',c: [{a: {name:'dialogView',device:'Desktop',c:'~Widget ~DesktopDialogWidget ~DialogContainerView',style:'${style.dialogWidget}'},c: [{a: {c:'~Title',style:'${style.dialogTitle}'},c: [{t:'span',a: {c:'~Tab'},c: [{t:'span',a: {c:'~Icon',innerHTML:'b'}}]},{t:'span',a: {c:'~Main',innerHTML:'${lang.dialogTitle}'}},{t:'span',a: {c:'~CloseButton'},c: [{t:'span',a: {c:'~Icon',innerHTML:'i'}}]}]},{a: {c:'~TitleLabel ~TitleLabelEl',style:'${style.dialogLabel}'},c: [{t:'span',a: {c:'~Tab'},c: [{t:'span',a: {c:'~Icon',innerHTML:'b'}}]},{t:'span',a: {c:'~OpenButton'},c: [{t:'span',a: {c:'~Icon',innerHTML:'b'}}]},{t:'span',a: {c:'~Main',innerHTML:'${lang.dialogLabel}'}}]},{a: {c:'~MainContent',style:'${style.dialogContent}'},c: [{t:'c:forEach',a: {items:'${includes}',item:'include',index:'componentIndex'},c: [{t:'c:include',a: {file:'${include}'}}]},{a: {c:'~MainButton'},c: [{a: {c:'~DialogButton',style:'${style.dialogButton}',innerHTML:'${lang.dialogButton}'}}]}]}]},{a: {name:'dialogView',device:'Mobile',c:'~Widget ~MobileDialogWidget',style:'${style.dialogWidget}'},c: [{a: {c:'~CloseButton mdi mdi-close ~Mobile'}},{a: {c:'~Widget'},c: [{a: {c:'~Title',style:'${style.dialogTitle}'},c: [{t:'span',a: {c:'~Main',innerHTML:'${lang.dialogTitle}'}}]},{a: {c:'~MainContent',style:'${style.dialogContent}'},c: [{t:'c:forEach',a: {items:'${includes}',item:'include'},c: [{t:'c:include',a: {file:'${include}'}}]}]},{a: {c:'~DialogButton',id:'~ActionButton',style:'${style.dialogButton}',innerHTML:'${lang.dialogButton}'}}]}]}],filename:'Views/General/DialogContainer.html'},{t:'view',c: [{a: {name:'alertView',device:'Desktop',c:'~Widget ~DesktopDialogWidget ~AlertView',style:'${style.alertWidget}'},c: [{a: {c:'~TitleAlert',style:'${style.dialogTitle}'},c: [{t:'span',a: {c:'~Main',innerHTML:'${lang.alertTitle}'}},{t:'span',a: {c:'~CloseButton ~Icon',innerHTML:'i'}}]},{a: {c:'~MainContent',style:'${style.dialogContent}'},c: [{t:'c:forEach',a: {items:'${includes}',item:'include'},c: [{t:'c:include',a: {file:'${include}'}}]},{a: {c:'~MainButton'},c: [{a: {c:'~AlertButton',style:'${style.dialogButton}',innerHTML:'${lang.alertButton}'}}]}]}]},{a: {name:'alertView',device:'Mobile',c:'~Widget ~MobileDialogWidget ~AlertView',style:'${style.alertWidget}'},c: [{a: {c:'~CloseButton mdi mdi-close ~Mobile'}},{a: {c:'~Widget'},c: [{a: {c:'~TitleAlert',style:'${style.dialogTitle}'},c: [{t:'span',a: {c:'~Main',innerHTML:'${lang.alertTitle}'}}]},{a: {c:'~MainContent',style:'${style.dialogContent}'},c: [{t:'c:forEach',a: {items:'${includes}',item:'include'},c: [{t:'c:include',a: {file:'${include}'}}]},{a: {c:'~MainButton'},c: [{a: {c:'~AlertButton',style:'${style.dialogButton}',innerHTML:'${lang.alertButton}'}}]}]}]}]}],filename:'Views/General/Alert.html'},{t:'view',c: [{a: {name:'labelView',device:'Desktop',c:'~Widget ~DesktopDialogWidget ~LabelView',style:'${style.widget}'},c: [{a: {c:'~TitleLabel ~TitleLabelEl',style:'${style.dialogLabel}'},c: [{t:'span',a: {c:'~Tab'},c: [{t:'span',a: {c:'~Icon',innerHTML:'a'}}]},{t:'span',a: {c:'~OpenButton'},c: [{t:'span',a: {c:'~Icon',innerHTML:'a'}}]},{t:'span',a: {c:'~Main',innerHTML:'${lang.labelTitle}'}}]}]},{a: {name:'labelView',device:'Mobile',c:'~Widget ~MobileDialogWidget ~LabelView',style:'${style.widget}'},c: [{a: {c:'~TitleLabel ~TitleLabelEl',style:'${style.dialogLabel}'},c: [{t:'span',a: {c:'~CloseButton mdi mdi-close'}},{t:'span',a: {c:'~Main',innerHTML:'${lang.labelTitle}'}}]}]}],filename:'Views/General/Label.html'},{t:'component',c: [{a: {c:'~WidgetContent ~ImageComponent',style:'${style.compImageContainer}'}}],filename:'Views/Components/imageComponent.html'},{t:'component',c: [{a: {c:'~WidgetContent ~PriceComparisonComponent',style:'${style.compPriceContent}'},c: [{t:'ul'}]}],filename:'Views/Components/priceComparisonComponent.html'}],settings: {marginTop:140,marginBottom:40,exitTriggerMouseMode:'',abData:'{"a":"50","d":"50"}'},pluginSettings: {DocumentConnectorToTitan: {a:'',data:''}},trackingHash:'-gbob',stylesheets: ['https://fonts.googleapis.com/css?family=Roboto:400,500,700,300','//assets.hotelchamp.com/materialdesignicons-1.4.57/css/materialdesignicons.min.css',]});	/**
	 * DocumentConnectorToTitan plugin
	 */
	new (Class(EnginePlugin, function(supr) {
	    this.stateStorageKey = 'document_connector_to_titan_plugin';
	
	    /**
	     * Watch for changes in the following fields.
	     * @value {object}  key is the external property mapped to the value: the internal property name
	     */
	    this.trackablePropertyMapping = {
	        'arrivalDate': 'arrivalDate',
	        'departureDate': 'departureDate',
	        'selectedAdultCount': 'adultCount',
	        'selectedChildCount': 'childCount',
	        'selectedBabyCount': 'babyCount',
	        'selectedRoomCount': 'roomCount',
	        'activeRoomType': 'roomType',
	    };
	
	    /**
	     * Limit max number of notifications that can be send
	     * to Titan. Null to disable limit. 20 = default
	     */
	    this.titanNotifyLimit = 20;
	
	    this.onInit = function() {
	        this.documentConnector = this._engine.getDocumentConnector();
	        
	        this.flippedTrackablePropertyMapping = {};
	        for (var externalKey in this.trackablePropertyMapping) {
	            this.flippedTrackablePropertyMapping[this.trackablePropertyMapping[externalKey]] = externalKey;
	        }
	        
	        if (!this.documentConnector) {
	            this._engine.on('DocumentConnectorInitialized', bind(this, this.handleDocumentConnectorInitialized));
	        } else {
	            this.bootPlugin();
	        }
	    };
	    
	    this.bootPlugin = function() {
	        this.titan = this._engine.getTitan();
	        this.storage = this._engine.getStorage();
	        this.state = this.readStateFromStorage();
	        this.writeStateToStorageDebounced = utils.debounce(bind(this, this.writeStateToStorage), 100);
	        
	        this.initPropertyValues();
	        this.initListeners();
	        
	        this.titanNotifyCount = 0;
	    };
	
	    this.initListeners = function() {
	        this.documentConnector.on(['property.change'], bind(this, this.handleDocumentConnectorDataChange));
	    };
	
	    this.initPropertyValues = function() {
	        var initialDocumentConnectorData = this.documentConnector.getInitialData();
	
	        // first check state to see if we already have valid values (from storage...).
	        if (this.state) {
	            for (var i in this.state) {
	                this.trackPropertyChange(i, initialDocumentConnectorData[i]);
	            }
	        }
	
	        // then check initial data from document connector to see if we have changed values...
	        if (initialDocumentConnectorData) {
	            for (var y in initialDocumentConnectorData) {
	                this.trackPropertyChange(this.getPropertyByExternalKey(y), initialDocumentConnectorData[y]);
	            }
	        }
	        
	        this._engine.log('DocumentConnectorToTitan plugin::initPropertyValues - state: ', this.state);
	    };
	
	    /**
	     * Protected methods
	     */
	
	    /**
	     * Write the given state object to the session storage.
	     * @param   {object}    state object to write to storage
	     * @return  {void}
	     */
	    this.writeStateToStorage = function(newState) {
	        this._engine.log('DocumentConnectorToTitan plugin::writeStateToStorage - newState: ', newState);
	        this.storage.setInSession(this.stateStorageKey, newState);
	    };
	
	    this.readStateFromStorage = function() {
	        return this.storage.getFromSession(this.stateStorageKey) || {}
	    };
	
	    /**
	     * Send data to titan and
	     * write local state to storage
	     * @param   {string}    the name of the property
	     * @param   {mixed}     the value of the property
	     * @return  {void}
	     */
	    this.notifyTitan = function(property, value) {
	        if (this.titanNotifyLimit !== null || (this.titanNotifyLimit <= this.titanNotifyCount)) {
	            this._engine.log('DocumentConnectorToTitan plugin::notifyTitan - property: ', property, ' = ', value);
	            this.state[property] = value;
	            this.titan.documentConnectorProperty(property, value);
	            this.titanNotifyCount++;
	            this.writeStateToStorageDebounced(this.state);
	        }
	    };
	
	    /**
	     * Determine whether given property should be tracked based on the configured properties to tracked
	     * @param   {string}    the name of the property to check
	     */
	    this.isTrackableProperty = function(property) {
	        return property && property in this.flippedTrackablePropertyMapping;
	    };
	
	    this.isTrackablePropertyValueValid = function(value) {
	        return value !== null && value !== undefined && value !== 'undefined' && (typeof value !== "number" || !isNaN(value));
	    };
	
	    this.getPropertyByExternalKey = function(externalKey) {
	        return (externalKey in this.trackablePropertyMapping) ? this.trackablePropertyMapping[externalKey] : null;
	    };
	
	    this.trackPropertyChange = function(property, newValue) {
	        var processedValue = this.processValueToInternalFormat(newValue);
	        if (this.isTrackableProperty(property) && 
	            this.isTrackablePropertyValueValid(processedValue) &&
	            processedValue !== this.state[property]) {
	            this.notifyTitan(property, processedValue);
	        }
	    };
	    
	    this.processValueToInternalFormat = function(value) {
	        var processed = value;
	        
	        if (typeof value === 'object' && value !== undefined && value !== null) {
	            if ('toString' in value) {
	                processed = value.toString();
	            } else {
	                processed = JSON.stringify(value);
	            }
	        } else if (value === undefined) {
	            processed = null;
	        }
	        
	        return processed;
	    };
	
	    /**
	     * Event handler methods
	     */
	
	    this.handleDocumentConnectorDataChange = function(externalKey, value, prevValue) {
	        var property = this.getPropertyByExternalKey(externalKey);
	        this.trackPropertyChange(property, value);
	    };
	    
	    this.handleDocumentConnectorInitialized = function(documentConnector) {
	        if (documentConnector) {
	            this.documentConnector = documentConnector;
	            this.bootPlugin();
	        }
	    };
	
	}))({engine: engine});
	
})(); }