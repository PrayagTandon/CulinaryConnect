
      var $parcel$global = globalThis;
    
function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}
"use strict";
"use strict";
var $739714331996ab95$exports = {};
"use strict";
var $e2f8ed6bad87ba8a$exports = {};
"use strict";
var $e2f8ed6bad87ba8a$var$check = function(it) {
    return it && it.Math === Math && it;
};
// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
$e2f8ed6bad87ba8a$exports = // eslint-disable-next-line es/no-global-this -- safe
$e2f8ed6bad87ba8a$var$check(typeof globalThis == "object" && globalThis) || $e2f8ed6bad87ba8a$var$check(typeof window == "object" && window) || // eslint-disable-next-line no-restricted-globals -- safe
$e2f8ed6bad87ba8a$var$check(typeof self == "object" && self) || $e2f8ed6bad87ba8a$var$check(typeof $parcel$global == "object" && $parcel$global) || $e2f8ed6bad87ba8a$var$check(typeof $e2f8ed6bad87ba8a$exports == "object" && $e2f8ed6bad87ba8a$exports) || // eslint-disable-next-line no-new-func -- fallback
function() {
    return this;
}() || Function("return this")();


// `Object.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
var $c042f290d0d773d5$export$2d1720544b23b823;
"use strict";
var $a35f5f7913bdb13d$exports = {};
"use strict";
var $b65563e7fd9a9951$exports = {};
"use strict";
$b65563e7fd9a9951$exports = function(exec) {
    try {
        return !!exec();
    } catch (error) {
        return true;
    }
};


// Detect IE8's incomplete defineProperty implementation
$a35f5f7913bdb13d$exports = !$b65563e7fd9a9951$exports(function() {
    // eslint-disable-next-line es/no-object-defineproperty -- required for testing
    return Object.defineProperty({}, 1, {
        get: function() {
            return 7;
        }
    })[1] !== 7;
});


var $7a32d8332ca4c8ec$exports = {};
"use strict";
var $268a78003d3d0205$exports = {};
"use strict";

$268a78003d3d0205$exports = !$b65563e7fd9a9951$exports(function() {
    // eslint-disable-next-line es/no-function-prototype-bind -- safe
    var test = (function() {}).bind();
    // eslint-disable-next-line no-prototype-builtins -- safe
    return typeof test != "function" || test.hasOwnProperty("prototype");
});


var $7a32d8332ca4c8ec$var$call = Function.prototype.call;
$7a32d8332ca4c8ec$exports = $268a78003d3d0205$exports ? $7a32d8332ca4c8ec$var$call.bind($7a32d8332ca4c8ec$var$call) : function() {
    return $7a32d8332ca4c8ec$var$call.apply($7a32d8332ca4c8ec$var$call, arguments);
};


// `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable
var $20ef4af69bc90fac$export$2d1720544b23b823;
"use strict";
var $20ef4af69bc90fac$var$$propertyIsEnumerable = {}.propertyIsEnumerable;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var $20ef4af69bc90fac$var$getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
// Nashorn ~ JDK8 bug
var $20ef4af69bc90fac$var$NASHORN_BUG = $20ef4af69bc90fac$var$getOwnPropertyDescriptor && !$20ef4af69bc90fac$var$$propertyIsEnumerable.call({
    1: 2
}, 1);
$20ef4af69bc90fac$export$2d1720544b23b823 = $20ef4af69bc90fac$var$NASHORN_BUG ? function propertyIsEnumerable(V) {
    var descriptor = $20ef4af69bc90fac$var$getOwnPropertyDescriptor(this, V);
    return !!descriptor && descriptor.enumerable;
} : $20ef4af69bc90fac$var$$propertyIsEnumerable;


var $79b00a210ecd2dd0$exports = {};
"use strict";
$79b00a210ecd2dd0$exports = function(bitmap, value) {
    return {
        enumerable: !(bitmap & 1),
        configurable: !(bitmap & 2),
        writable: !(bitmap & 4),
        value: value
    };
};


var $431181964b252248$exports = {};
"use strict";
var $d2c28af2944ab9e6$exports = {};
"use strict";
var $1eab7b706e02b706$exports = {};
"use strict";

var $1eab7b706e02b706$var$FunctionPrototype = Function.prototype;
var $1eab7b706e02b706$var$call = $1eab7b706e02b706$var$FunctionPrototype.call;
var $1eab7b706e02b706$var$uncurryThisWithBind = $268a78003d3d0205$exports && $1eab7b706e02b706$var$FunctionPrototype.bind.bind($1eab7b706e02b706$var$call, $1eab7b706e02b706$var$call);
$1eab7b706e02b706$exports = $268a78003d3d0205$exports ? $1eab7b706e02b706$var$uncurryThisWithBind : function(fn) {
    return function() {
        return $1eab7b706e02b706$var$call.apply(fn, arguments);
    };
};



var $ed6e0112c97f8b4e$exports = {};
"use strict";

var $ed6e0112c97f8b4e$var$toString = $1eab7b706e02b706$exports({}.toString);
var $ed6e0112c97f8b4e$var$stringSlice = $1eab7b706e02b706$exports("".slice);
$ed6e0112c97f8b4e$exports = function(it) {
    return $ed6e0112c97f8b4e$var$stringSlice($ed6e0112c97f8b4e$var$toString(it), 8, -1);
};


var $d2c28af2944ab9e6$var$$Object = Object;
var $d2c28af2944ab9e6$var$split = $1eab7b706e02b706$exports("".split);
// fallback for non-array-like ES3 and non-enumerable old V8 strings
$d2c28af2944ab9e6$exports = $b65563e7fd9a9951$exports(function() {
    // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
    // eslint-disable-next-line no-prototype-builtins -- safe
    return !$d2c28af2944ab9e6$var$$Object("z").propertyIsEnumerable(0);
}) ? function(it) {
    return $ed6e0112c97f8b4e$exports(it) === "String" ? $d2c28af2944ab9e6$var$split(it, "") : $d2c28af2944ab9e6$var$$Object(it);
} : $d2c28af2944ab9e6$var$$Object;


var $e104f205f3071c09$exports = {};
"use strict";
var $d08b0d0f6b6d9f0c$exports = {};
"use strict";
// we can't use just `it == null` since of `document.all` special case
// https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot-aec
$d08b0d0f6b6d9f0c$exports = function(it) {
    return it === null || it === undefined;
};


var $e104f205f3071c09$var$$TypeError = TypeError;
// `RequireObjectCoercible` abstract operation
// https://tc39.es/ecma262/#sec-requireobjectcoercible
$e104f205f3071c09$exports = function(it) {
    if ($d08b0d0f6b6d9f0c$exports(it)) throw new $e104f205f3071c09$var$$TypeError("Can't call method on " + it);
    return it;
};


$431181964b252248$exports = function(it) {
    return $d2c28af2944ab9e6$exports($e104f205f3071c09$exports(it));
};


var $7a2c0df97b2ce7bf$exports = {};
"use strict";
var $534b47905cd1d27f$exports = {};
"use strict";

var $5d6f84564cbad17f$exports = {};
"use strict";
var $453ccaf7659e4906$exports = {};
"use strict";
// https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot
var $453ccaf7659e4906$var$documentAll = typeof document == "object" && document.all;
// `IsCallable` abstract operation
// https://tc39.es/ecma262/#sec-iscallable
// eslint-disable-next-line unicorn/no-typeof-undefined -- required for testing
$453ccaf7659e4906$exports = typeof $453ccaf7659e4906$var$documentAll == "undefined" && $453ccaf7659e4906$var$documentAll !== undefined ? function(argument) {
    return typeof argument == "function" || argument === $453ccaf7659e4906$var$documentAll;
} : function(argument) {
    return typeof argument == "function";
};


$5d6f84564cbad17f$exports = function(it) {
    return typeof it == "object" ? it !== null : $453ccaf7659e4906$exports(it);
};


var $8195631857708d7e$exports = {};
"use strict";
var $c52f4aba42d917bb$exports = {};
"use strict";


var $c52f4aba42d917bb$var$aFunction = function(argument) {
    return $453ccaf7659e4906$exports(argument) ? argument : undefined;
};
$c52f4aba42d917bb$exports = function(namespace, method) {
    return arguments.length < 2 ? $c52f4aba42d917bb$var$aFunction($e2f8ed6bad87ba8a$exports[namespace]) : $e2f8ed6bad87ba8a$exports[namespace] && $e2f8ed6bad87ba8a$exports[namespace][method];
};



var $4a021b968824aa5a$exports = {};
"use strict";

$4a021b968824aa5a$exports = $1eab7b706e02b706$exports({}.isPrototypeOf);


var $3cb2610072232bf4$exports = {};
"use strict";
var $544d77b8dc8b6a35$exports = {};
"use strict";
var $2b0cfc9294bd5f59$exports = {};
"use strict";

var $9a8c84fbabc21614$exports = {};
"use strict";
$9a8c84fbabc21614$exports = typeof navigator != "undefined" && String(navigator.userAgent) || "";


var $2b0cfc9294bd5f59$var$process = $e2f8ed6bad87ba8a$exports.process;
var $2b0cfc9294bd5f59$var$Deno = $e2f8ed6bad87ba8a$exports.Deno;
var $2b0cfc9294bd5f59$var$versions = $2b0cfc9294bd5f59$var$process && $2b0cfc9294bd5f59$var$process.versions || $2b0cfc9294bd5f59$var$Deno && $2b0cfc9294bd5f59$var$Deno.version;
var $2b0cfc9294bd5f59$var$v8 = $2b0cfc9294bd5f59$var$versions && $2b0cfc9294bd5f59$var$versions.v8;
var $2b0cfc9294bd5f59$var$match, $2b0cfc9294bd5f59$var$version;
if ($2b0cfc9294bd5f59$var$v8) {
    $2b0cfc9294bd5f59$var$match = $2b0cfc9294bd5f59$var$v8.split(".");
    // in old Chrome, versions of V8 isn't V8 = Chrome / 10
    // but their correct versions are not interesting for us
    $2b0cfc9294bd5f59$var$version = $2b0cfc9294bd5f59$var$match[0] > 0 && $2b0cfc9294bd5f59$var$match[0] < 4 ? 1 : +($2b0cfc9294bd5f59$var$match[0] + $2b0cfc9294bd5f59$var$match[1]);
}
// BrowserFS NodeJS `process` polyfill incorrectly set `.v8` to `0.0`
// so check `userAgent` even if `.v8` exists, but 0
if (!$2b0cfc9294bd5f59$var$version && $9a8c84fbabc21614$exports) {
    $2b0cfc9294bd5f59$var$match = $9a8c84fbabc21614$exports.match(/Edge\/(\d+)/);
    if (!$2b0cfc9294bd5f59$var$match || $2b0cfc9294bd5f59$var$match[1] >= 74) {
        $2b0cfc9294bd5f59$var$match = $9a8c84fbabc21614$exports.match(/Chrome\/(\d+)/);
        if ($2b0cfc9294bd5f59$var$match) $2b0cfc9294bd5f59$var$version = +$2b0cfc9294bd5f59$var$match[1];
    }
}
$2b0cfc9294bd5f59$exports = $2b0cfc9294bd5f59$var$version;




var $544d77b8dc8b6a35$var$$String = $e2f8ed6bad87ba8a$exports.String;
// eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing
$544d77b8dc8b6a35$exports = !!Object.getOwnPropertySymbols && !$b65563e7fd9a9951$exports(function() {
    var symbol = Symbol("symbol detection");
    // Chrome 38 Symbol has incorrect toString conversion
    // `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances
    // nb: Do not call `String` directly to avoid this being optimized out to `symbol+''` which will,
    // of course, fail.
    return !$544d77b8dc8b6a35$var$$String(symbol) || !(Object(symbol) instanceof Symbol) || // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
    !Symbol.sham && $2b0cfc9294bd5f59$exports && $2b0cfc9294bd5f59$exports < 41;
});


$3cb2610072232bf4$exports = $544d77b8dc8b6a35$exports && !Symbol.sham && typeof Symbol.iterator == "symbol";


var $8195631857708d7e$var$$Object = Object;
$8195631857708d7e$exports = $3cb2610072232bf4$exports ? function(it) {
    return typeof it == "symbol";
} : function(it) {
    var $Symbol = $c52f4aba42d917bb$exports("Symbol");
    return $453ccaf7659e4906$exports($Symbol) && $4a021b968824aa5a$exports($Symbol.prototype, $8195631857708d7e$var$$Object(it));
};


var $95c9d335c63cbebb$exports = {};
"use strict";
var $0c7a13dd99516332$exports = {};
"use strict";

var $3401a08c62178220$exports = {};
"use strict";
var $3401a08c62178220$var$$String = String;
$3401a08c62178220$exports = function(argument) {
    try {
        return $3401a08c62178220$var$$String(argument);
    } catch (error) {
        return "Object";
    }
};


var $0c7a13dd99516332$var$$TypeError = TypeError;
// `Assert: IsCallable(argument) is true`
$0c7a13dd99516332$exports = function(argument) {
    if ($453ccaf7659e4906$exports(argument)) return argument;
    throw new $0c7a13dd99516332$var$$TypeError($3401a08c62178220$exports(argument) + " is not a function");
};



// `GetMethod` abstract operation
// https://tc39.es/ecma262/#sec-getmethod
$95c9d335c63cbebb$exports = function(V, P) {
    var func = V[P];
    return $d08b0d0f6b6d9f0c$exports(func) ? undefined : $0c7a13dd99516332$exports(func);
};


var $ab337482fc2e7e04$exports = {};
"use strict";



var $ab337482fc2e7e04$var$$TypeError = TypeError;
// `OrdinaryToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-ordinarytoprimitive
$ab337482fc2e7e04$exports = function(input, pref) {
    var fn, val;
    if (pref === "string" && $453ccaf7659e4906$exports(fn = input.toString) && !$5d6f84564cbad17f$exports(val = $7a32d8332ca4c8ec$exports(fn, input))) return val;
    if ($453ccaf7659e4906$exports(fn = input.valueOf) && !$5d6f84564cbad17f$exports(val = $7a32d8332ca4c8ec$exports(fn, input))) return val;
    if (pref !== "string" && $453ccaf7659e4906$exports(fn = input.toString) && !$5d6f84564cbad17f$exports(val = $7a32d8332ca4c8ec$exports(fn, input))) return val;
    throw new $ab337482fc2e7e04$var$$TypeError("Can't convert object to primitive value");
};


var $db48b9fc13f8cfc2$exports = {};
"use strict";

var $5c8d8ef069f5b124$exports = {};
"use strict";
var $81b5f45e59d3fa0d$exports = {};
"use strict";
var $2c639d0d452e4492$exports = {};
"use strict";
$2c639d0d452e4492$exports = false;



var $835fb6c3976fe66a$exports = {};
"use strict";

// eslint-disable-next-line es/no-object-defineproperty -- safe
var $835fb6c3976fe66a$var$defineProperty = Object.defineProperty;
$835fb6c3976fe66a$exports = function(key, value) {
    try {
        $835fb6c3976fe66a$var$defineProperty($e2f8ed6bad87ba8a$exports, key, {
            value: value,
            configurable: true,
            writable: true
        });
    } catch (error) {
        $e2f8ed6bad87ba8a$exports[key] = value;
    }
    return value;
};


var $81b5f45e59d3fa0d$var$SHARED = "__core-js_shared__";
var $81b5f45e59d3fa0d$var$store = $81b5f45e59d3fa0d$exports = $e2f8ed6bad87ba8a$exports[$81b5f45e59d3fa0d$var$SHARED] || $835fb6c3976fe66a$exports($81b5f45e59d3fa0d$var$SHARED, {});
($81b5f45e59d3fa0d$var$store.versions || ($81b5f45e59d3fa0d$var$store.versions = [])).push({
    version: "3.36.0",
    mode: $2c639d0d452e4492$exports ? "pure" : "global",
    copyright: "\xa9 2014-2024 Denis Pushkarev (zloirock.ru)",
    license: "https://github.com/zloirock/core-js/blob/v3.36.0/LICENSE",
    source: "https://github.com/zloirock/core-js"
});


$5c8d8ef069f5b124$exports = function(key, value) {
    return $81b5f45e59d3fa0d$exports[key] || ($81b5f45e59d3fa0d$exports[key] = value || {});
};


var $63a728e240395d1d$exports = {};
"use strict";

var $e376ceab3346f95e$exports = {};
"use strict";

var $e376ceab3346f95e$var$$Object = Object;
// `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject
$e376ceab3346f95e$exports = function(argument) {
    return $e376ceab3346f95e$var$$Object($e104f205f3071c09$exports(argument));
};


var $63a728e240395d1d$var$hasOwnProperty = $1eab7b706e02b706$exports({}.hasOwnProperty);
// `HasOwnProperty` abstract operation
// https://tc39.es/ecma262/#sec-hasownproperty
// eslint-disable-next-line es/no-object-hasown -- safe
$63a728e240395d1d$exports = Object.hasOwn || function hasOwn(it, key) {
    return $63a728e240395d1d$var$hasOwnProperty($e376ceab3346f95e$exports(it), key);
};


var $0edd2da8584ff21b$exports = {};
"use strict";

var $0edd2da8584ff21b$var$id = 0;
var $0edd2da8584ff21b$var$postfix = Math.random();
var $0edd2da8584ff21b$var$toString = $1eab7b706e02b706$exports(1.0.toString);
$0edd2da8584ff21b$exports = function(key) {
    return "Symbol(" + (key === undefined ? "" : key) + ")_" + $0edd2da8584ff21b$var$toString(++$0edd2da8584ff21b$var$id + $0edd2da8584ff21b$var$postfix, 36);
};




var $db48b9fc13f8cfc2$var$Symbol = $e2f8ed6bad87ba8a$exports.Symbol;
var $db48b9fc13f8cfc2$var$WellKnownSymbolsStore = $5c8d8ef069f5b124$exports("wks");
var $db48b9fc13f8cfc2$var$createWellKnownSymbol = $3cb2610072232bf4$exports ? $db48b9fc13f8cfc2$var$Symbol["for"] || $db48b9fc13f8cfc2$var$Symbol : $db48b9fc13f8cfc2$var$Symbol && $db48b9fc13f8cfc2$var$Symbol.withoutSetter || $0edd2da8584ff21b$exports;
$db48b9fc13f8cfc2$exports = function(name) {
    if (!$63a728e240395d1d$exports($db48b9fc13f8cfc2$var$WellKnownSymbolsStore, name)) $db48b9fc13f8cfc2$var$WellKnownSymbolsStore[name] = $544d77b8dc8b6a35$exports && $63a728e240395d1d$exports($db48b9fc13f8cfc2$var$Symbol, name) ? $db48b9fc13f8cfc2$var$Symbol[name] : $db48b9fc13f8cfc2$var$createWellKnownSymbol("Symbol." + name);
    return $db48b9fc13f8cfc2$var$WellKnownSymbolsStore[name];
};


var $534b47905cd1d27f$var$$TypeError = TypeError;
var $534b47905cd1d27f$var$TO_PRIMITIVE = $db48b9fc13f8cfc2$exports("toPrimitive");
// `ToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-toprimitive
$534b47905cd1d27f$exports = function(input, pref) {
    if (!$5d6f84564cbad17f$exports(input) || $8195631857708d7e$exports(input)) return input;
    var exoticToPrim = $95c9d335c63cbebb$exports(input, $534b47905cd1d27f$var$TO_PRIMITIVE);
    var result;
    if (exoticToPrim) {
        if (pref === undefined) pref = "default";
        result = $7a32d8332ca4c8ec$exports(exoticToPrim, input, pref);
        if (!$5d6f84564cbad17f$exports(result) || $8195631857708d7e$exports(result)) return result;
        throw new $534b47905cd1d27f$var$$TypeError("Can't convert object to primitive value");
    }
    if (pref === undefined) pref = "number";
    return $ab337482fc2e7e04$exports(input, pref);
};



// `ToPropertyKey` abstract operation
// https://tc39.es/ecma262/#sec-topropertykey
$7a2c0df97b2ce7bf$exports = function(argument) {
    var key = $534b47905cd1d27f$exports(argument, "string");
    return $8195631857708d7e$exports(key) ? key : key + "";
};



var $7f8061b88ff6bba5$exports = {};
"use strict";


var $6ad98e3f9c7d8cc0$exports = {};
"use strict";


var $6ad98e3f9c7d8cc0$var$document = $e2f8ed6bad87ba8a$exports.document;
// typeof document.createElement is 'object' in old IE
var $6ad98e3f9c7d8cc0$var$EXISTS = $5d6f84564cbad17f$exports($6ad98e3f9c7d8cc0$var$document) && $5d6f84564cbad17f$exports($6ad98e3f9c7d8cc0$var$document.createElement);
$6ad98e3f9c7d8cc0$exports = function(it) {
    return $6ad98e3f9c7d8cc0$var$EXISTS ? $6ad98e3f9c7d8cc0$var$document.createElement(it) : {};
};


// Thanks to IE8 for its funny defineProperty
$7f8061b88ff6bba5$exports = !$a35f5f7913bdb13d$exports && !$b65563e7fd9a9951$exports(function() {
    // eslint-disable-next-line es/no-object-defineproperty -- required for testing
    return Object.defineProperty($6ad98e3f9c7d8cc0$exports("div"), "a", {
        get: function() {
            return 7;
        }
    }).a !== 7;
});


// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var $c042f290d0d773d5$var$$getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
$c042f290d0d773d5$export$2d1720544b23b823 = $a35f5f7913bdb13d$exports ? $c042f290d0d773d5$var$$getOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
    O = $431181964b252248$exports(O);
    P = $7a2c0df97b2ce7bf$exports(P);
    if ($7f8061b88ff6bba5$exports) try {
        return $c042f290d0d773d5$var$$getOwnPropertyDescriptor(O, P);
    } catch (error) {}
    if ($63a728e240395d1d$exports(O, P)) return $79b00a210ecd2dd0$exports(!$7a32d8332ca4c8ec$exports($20ef4af69bc90fac$export$2d1720544b23b823, O, P), O[P]);
};


var $739714331996ab95$require$getOwnPropertyDescriptor = $c042f290d0d773d5$export$2d1720544b23b823;
var $93400a77eec609ae$exports = {};
"use strict";

// `Object.defineProperty` method
// https://tc39.es/ecma262/#sec-object.defineproperty
var $cac17953bd17b441$export$2d1720544b23b823;
"use strict";


var $52c7c30d4d247cc9$exports = {};
"use strict";


// V8 ~ Chrome 36-
// https://bugs.chromium.org/p/v8/issues/detail?id=3334
$52c7c30d4d247cc9$exports = $a35f5f7913bdb13d$exports && $b65563e7fd9a9951$exports(function() {
    // eslint-disable-next-line es/no-object-defineproperty -- required for testing
    return Object.defineProperty(function() {}, "prototype", {
        value: 42,
        writable: false
    }).prototype !== 42;
});


var $5c61c11fa6e93240$exports = {};
"use strict";

var $5c61c11fa6e93240$var$$String = String;
var $5c61c11fa6e93240$var$$TypeError = TypeError;
// `Assert: Type(argument) is Object`
$5c61c11fa6e93240$exports = function(argument) {
    if ($5d6f84564cbad17f$exports(argument)) return argument;
    throw new $5c61c11fa6e93240$var$$TypeError($5c61c11fa6e93240$var$$String(argument) + " is not an object");
};



var $cac17953bd17b441$var$$TypeError = TypeError;
// eslint-disable-next-line es/no-object-defineproperty -- safe
var $cac17953bd17b441$var$$defineProperty = Object.defineProperty;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var $cac17953bd17b441$var$$getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var $cac17953bd17b441$var$ENUMERABLE = "enumerable";
var $cac17953bd17b441$var$CONFIGURABLE = "configurable";
var $cac17953bd17b441$var$WRITABLE = "writable";
$cac17953bd17b441$export$2d1720544b23b823 = $a35f5f7913bdb13d$exports ? $52c7c30d4d247cc9$exports ? function defineProperty(O, P, Attributes) {
    $5c61c11fa6e93240$exports(O);
    P = $7a2c0df97b2ce7bf$exports(P);
    $5c61c11fa6e93240$exports(Attributes);
    if (typeof O === "function" && P === "prototype" && "value" in Attributes && $cac17953bd17b441$var$WRITABLE in Attributes && !Attributes[$cac17953bd17b441$var$WRITABLE]) {
        var current = $cac17953bd17b441$var$$getOwnPropertyDescriptor(O, P);
        if (current && current[$cac17953bd17b441$var$WRITABLE]) {
            O[P] = Attributes.value;
            Attributes = {
                configurable: $cac17953bd17b441$var$CONFIGURABLE in Attributes ? Attributes[$cac17953bd17b441$var$CONFIGURABLE] : current[$cac17953bd17b441$var$CONFIGURABLE],
                enumerable: $cac17953bd17b441$var$ENUMERABLE in Attributes ? Attributes[$cac17953bd17b441$var$ENUMERABLE] : current[$cac17953bd17b441$var$ENUMERABLE],
                writable: false
            };
        }
    }
    return $cac17953bd17b441$var$$defineProperty(O, P, Attributes);
} : $cac17953bd17b441$var$$defineProperty : function defineProperty(O, P, Attributes) {
    $5c61c11fa6e93240$exports(O);
    P = $7a2c0df97b2ce7bf$exports(P);
    $5c61c11fa6e93240$exports(Attributes);
    if ($7f8061b88ff6bba5$exports) try {
        return $cac17953bd17b441$var$$defineProperty(O, P, Attributes);
    } catch (error) {}
    if ("get" in Attributes || "set" in Attributes) throw new $cac17953bd17b441$var$$TypeError("Accessors not supported");
    if ("value" in Attributes) O[P] = Attributes.value;
    return O;
};



$93400a77eec609ae$exports = $a35f5f7913bdb13d$exports ? function(object, key, value) {
    return $cac17953bd17b441$export$2d1720544b23b823(object, key, $79b00a210ecd2dd0$exports(1, value));
} : function(object, key, value) {
    object[key] = value;
    return object;
};


var $607d8c3286e3b9fe$exports = {};
"use strict";


var $d492d8f3e15c7a95$exports = {};
"use strict";





var $9dc57efd5800a52a$exports = {};
"use strict";


var $9dc57efd5800a52a$var$FunctionPrototype = Function.prototype;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var $9dc57efd5800a52a$var$getDescriptor = $a35f5f7913bdb13d$exports && Object.getOwnPropertyDescriptor;
var $9dc57efd5800a52a$var$EXISTS = $63a728e240395d1d$exports($9dc57efd5800a52a$var$FunctionPrototype, "name");
// additional protection from minified / mangled / dropped function names
var $9dc57efd5800a52a$var$PROPER = $9dc57efd5800a52a$var$EXISTS && (function something() {}).name === "something";
var $9dc57efd5800a52a$var$CONFIGURABLE = $9dc57efd5800a52a$var$EXISTS && (!$a35f5f7913bdb13d$exports || $a35f5f7913bdb13d$exports && $9dc57efd5800a52a$var$getDescriptor($9dc57efd5800a52a$var$FunctionPrototype, "name").configurable);
$9dc57efd5800a52a$exports = {
    EXISTS: $9dc57efd5800a52a$var$EXISTS,
    PROPER: $9dc57efd5800a52a$var$PROPER,
    CONFIGURABLE: $9dc57efd5800a52a$var$CONFIGURABLE
};


var $d492d8f3e15c7a95$require$CONFIGURABLE_FUNCTION_NAME = $9dc57efd5800a52a$exports.CONFIGURABLE;
var $ffc39f16d2d2f051$exports = {};
"use strict";



var $ffc39f16d2d2f051$var$functionToString = $1eab7b706e02b706$exports(Function.toString);
// this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper
if (!$453ccaf7659e4906$exports($81b5f45e59d3fa0d$exports.inspectSource)) $81b5f45e59d3fa0d$exports.inspectSource = function(it) {
    return $ffc39f16d2d2f051$var$functionToString(it);
};
$ffc39f16d2d2f051$exports = $81b5f45e59d3fa0d$exports.inspectSource;


var $67c1f2c2b0121f47$exports = {};
"use strict";
var $6f423c90ad9fbe42$exports = {};
"use strict";


var $6f423c90ad9fbe42$var$WeakMap = $e2f8ed6bad87ba8a$exports.WeakMap;
$6f423c90ad9fbe42$exports = $453ccaf7659e4906$exports($6f423c90ad9fbe42$var$WeakMap) && /native code/.test(String($6f423c90ad9fbe42$var$WeakMap));







var $520c9511e65a1e68$exports = {};
"use strict";


var $520c9511e65a1e68$var$keys = $5c8d8ef069f5b124$exports("keys");
$520c9511e65a1e68$exports = function(key) {
    return $520c9511e65a1e68$var$keys[key] || ($520c9511e65a1e68$var$keys[key] = $0edd2da8584ff21b$exports(key));
};


var $640b63da6b75d777$exports = {};
"use strict";
$640b63da6b75d777$exports = {};


var $67c1f2c2b0121f47$var$OBJECT_ALREADY_INITIALIZED = "Object already initialized";
var $67c1f2c2b0121f47$var$TypeError = $e2f8ed6bad87ba8a$exports.TypeError;
var $67c1f2c2b0121f47$var$WeakMap = $e2f8ed6bad87ba8a$exports.WeakMap;
var $67c1f2c2b0121f47$var$set, $67c1f2c2b0121f47$var$get, $67c1f2c2b0121f47$var$has;
var $67c1f2c2b0121f47$var$enforce = function(it) {
    return $67c1f2c2b0121f47$var$has(it) ? $67c1f2c2b0121f47$var$get(it) : $67c1f2c2b0121f47$var$set(it, {});
};
var $67c1f2c2b0121f47$var$getterFor = function(TYPE) {
    return function(it) {
        var state;
        if (!$5d6f84564cbad17f$exports(it) || (state = $67c1f2c2b0121f47$var$get(it)).type !== TYPE) throw new $67c1f2c2b0121f47$var$TypeError("Incompatible receiver, " + TYPE + " required");
        return state;
    };
};
if ($6f423c90ad9fbe42$exports || $81b5f45e59d3fa0d$exports.state) {
    var $67c1f2c2b0121f47$var$store = $81b5f45e59d3fa0d$exports.state || ($81b5f45e59d3fa0d$exports.state = new $67c1f2c2b0121f47$var$WeakMap());
    /* eslint-disable no-self-assign -- prototype methods protection */ $67c1f2c2b0121f47$var$store.get = $67c1f2c2b0121f47$var$store.get;
    $67c1f2c2b0121f47$var$store.has = $67c1f2c2b0121f47$var$store.has;
    $67c1f2c2b0121f47$var$store.set = $67c1f2c2b0121f47$var$store.set;
    /* eslint-enable no-self-assign -- prototype methods protection */ $67c1f2c2b0121f47$var$set = function(it, metadata) {
        if ($67c1f2c2b0121f47$var$store.has(it)) throw new $67c1f2c2b0121f47$var$TypeError($67c1f2c2b0121f47$var$OBJECT_ALREADY_INITIALIZED);
        metadata.facade = it;
        $67c1f2c2b0121f47$var$store.set(it, metadata);
        return metadata;
    };
    $67c1f2c2b0121f47$var$get = function(it) {
        return $67c1f2c2b0121f47$var$store.get(it) || {};
    };
    $67c1f2c2b0121f47$var$has = function(it) {
        return $67c1f2c2b0121f47$var$store.has(it);
    };
} else {
    var $67c1f2c2b0121f47$var$STATE = $520c9511e65a1e68$exports("state");
    $640b63da6b75d777$exports[$67c1f2c2b0121f47$var$STATE] = true;
    $67c1f2c2b0121f47$var$set = function(it, metadata) {
        if ($63a728e240395d1d$exports(it, $67c1f2c2b0121f47$var$STATE)) throw new $67c1f2c2b0121f47$var$TypeError($67c1f2c2b0121f47$var$OBJECT_ALREADY_INITIALIZED);
        metadata.facade = it;
        $93400a77eec609ae$exports(it, $67c1f2c2b0121f47$var$STATE, metadata);
        return metadata;
    };
    $67c1f2c2b0121f47$var$get = function(it) {
        return $63a728e240395d1d$exports(it, $67c1f2c2b0121f47$var$STATE) ? it[$67c1f2c2b0121f47$var$STATE] : {};
    };
    $67c1f2c2b0121f47$var$has = function(it) {
        return $63a728e240395d1d$exports(it, $67c1f2c2b0121f47$var$STATE);
    };
}
$67c1f2c2b0121f47$exports = {
    set: $67c1f2c2b0121f47$var$set,
    get: $67c1f2c2b0121f47$var$get,
    has: $67c1f2c2b0121f47$var$has,
    enforce: $67c1f2c2b0121f47$var$enforce,
    getterFor: $67c1f2c2b0121f47$var$getterFor
};


var $d492d8f3e15c7a95$var$enforceInternalState = $67c1f2c2b0121f47$exports.enforce;
var $d492d8f3e15c7a95$var$getInternalState = $67c1f2c2b0121f47$exports.get;
var $d492d8f3e15c7a95$var$$String = String;
// eslint-disable-next-line es/no-object-defineproperty -- safe
var $d492d8f3e15c7a95$var$defineProperty = Object.defineProperty;
var $d492d8f3e15c7a95$var$stringSlice = $1eab7b706e02b706$exports("".slice);
var $d492d8f3e15c7a95$var$replace = $1eab7b706e02b706$exports("".replace);
var $d492d8f3e15c7a95$var$join = $1eab7b706e02b706$exports([].join);
var $d492d8f3e15c7a95$var$CONFIGURABLE_LENGTH = $a35f5f7913bdb13d$exports && !$b65563e7fd9a9951$exports(function() {
    return $d492d8f3e15c7a95$var$defineProperty(function() {}, "length", {
        value: 8
    }).length !== 8;
});
var $d492d8f3e15c7a95$var$TEMPLATE = String(String).split("String");
var $d492d8f3e15c7a95$var$makeBuiltIn = $d492d8f3e15c7a95$exports = function(value, name, options) {
    if ($d492d8f3e15c7a95$var$stringSlice($d492d8f3e15c7a95$var$$String(name), 0, 7) === "Symbol(") name = "[" + $d492d8f3e15c7a95$var$replace($d492d8f3e15c7a95$var$$String(name), /^Symbol\(([^)]*)\).*$/, "$1") + "]";
    if (options && options.getter) name = "get " + name;
    if (options && options.setter) name = "set " + name;
    if (!$63a728e240395d1d$exports(value, "name") || $d492d8f3e15c7a95$require$CONFIGURABLE_FUNCTION_NAME && value.name !== name) {
        if ($a35f5f7913bdb13d$exports) $d492d8f3e15c7a95$var$defineProperty(value, "name", {
            value: name,
            configurable: true
        });
        else value.name = name;
    }
    if ($d492d8f3e15c7a95$var$CONFIGURABLE_LENGTH && options && $63a728e240395d1d$exports(options, "arity") && value.length !== options.arity) $d492d8f3e15c7a95$var$defineProperty(value, "length", {
        value: options.arity
    });
    try {
        if (options && $63a728e240395d1d$exports(options, "constructor") && options.constructor) {
            if ($a35f5f7913bdb13d$exports) $d492d8f3e15c7a95$var$defineProperty(value, "prototype", {
                writable: false
            });
        } else if (value.prototype) value.prototype = undefined;
    } catch (error) {}
    var state = $d492d8f3e15c7a95$var$enforceInternalState(value);
    if (!$63a728e240395d1d$exports(state, "source")) state.source = $d492d8f3e15c7a95$var$join($d492d8f3e15c7a95$var$TEMPLATE, typeof name == "string" ? name : "");
    return value;
};
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
// eslint-disable-next-line no-extend-native -- required
Function.prototype.toString = $d492d8f3e15c7a95$var$makeBuiltIn(function toString() {
    return $453ccaf7659e4906$exports(this) && $d492d8f3e15c7a95$var$getInternalState(this).source || $ffc39f16d2d2f051$exports(this);
}, "toString");



$607d8c3286e3b9fe$exports = function(O, key, value, options) {
    if (!options) options = {};
    var simple = options.enumerable;
    var name = options.name !== undefined ? options.name : key;
    if ($453ccaf7659e4906$exports(value)) $d492d8f3e15c7a95$exports(value, name, options);
    if (options.global) {
        if (simple) O[key] = value;
        else $835fb6c3976fe66a$exports(key, value);
    } else {
        try {
            if (!options.unsafe) delete O[key];
            else if (O[key]) simple = true;
        } catch (error) {}
        if (simple) O[key] = value;
        else $cac17953bd17b441$export$2d1720544b23b823(O, key, {
            value: value,
            enumerable: false,
            configurable: !options.nonConfigurable,
            writable: !options.nonWritable
        });
    }
    return O;
};



var $f9327d7d48af6968$exports = {};
"use strict";

var $e8e8046e03fbef70$exports = {};
"use strict";


// `Object.getOwnPropertyNames` method
// https://tc39.es/ecma262/#sec-object.getownpropertynames
// eslint-disable-next-line es/no-object-getownpropertynames -- safe
var $b2d7ea6ec9d94a0d$export$2d1720544b23b823;
"use strict";
var $f94042ea52711239$exports = {};
"use strict";



var $233e480c3a450675$exports = {};
"use strict";

var $4190b74193857511$exports = {};
"use strict";
var $bb771f87168e5705$exports = {};
"use strict";
var $0f1b596a9a77aa93$exports = {};
"use strict";
var $0f1b596a9a77aa93$var$ceil = Math.ceil;
var $0f1b596a9a77aa93$var$floor = Math.floor;
// `Math.trunc` method
// https://tc39.es/ecma262/#sec-math.trunc
// eslint-disable-next-line es/no-math-trunc -- safe
$0f1b596a9a77aa93$exports = Math.trunc || function trunc(x) {
    var n = +x;
    return (n > 0 ? $0f1b596a9a77aa93$var$floor : $0f1b596a9a77aa93$var$ceil)(n);
};


// `ToIntegerOrInfinity` abstract operation
// https://tc39.es/ecma262/#sec-tointegerorinfinity
$bb771f87168e5705$exports = function(argument) {
    var number = +argument;
    // eslint-disable-next-line no-self-compare -- NaN check
    return number !== number || number === 0 ? 0 : $0f1b596a9a77aa93$exports(number);
};


var $4190b74193857511$var$max = Math.max;
var $4190b74193857511$var$min = Math.min;
// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
$4190b74193857511$exports = function(index, length) {
    var integer = $bb771f87168e5705$exports(index);
    return integer < 0 ? $4190b74193857511$var$max(integer + length, 0) : $4190b74193857511$var$min(integer, length);
};


var $6b792cdcd3555064$exports = {};
"use strict";
var $e5a4dfd89033e2ee$exports = {};
"use strict";

var $e5a4dfd89033e2ee$var$min = Math.min;
// `ToLength` abstract operation
// https://tc39.es/ecma262/#sec-tolength
$e5a4dfd89033e2ee$exports = function(argument) {
    var len = $bb771f87168e5705$exports(argument);
    return len > 0 ? $e5a4dfd89033e2ee$var$min(len, 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};


// `LengthOfArrayLike` abstract operation
// https://tc39.es/ecma262/#sec-lengthofarraylike
$6b792cdcd3555064$exports = function(obj) {
    return $e5a4dfd89033e2ee$exports(obj.length);
};


// `Array.prototype.{ indexOf, includes }` methods implementation
var $233e480c3a450675$var$createMethod = function(IS_INCLUDES) {
    return function($this, el, fromIndex) {
        var O = $431181964b252248$exports($this);
        var length = $6b792cdcd3555064$exports(O);
        if (length === 0) return !IS_INCLUDES && -1;
        var index = $4190b74193857511$exports(fromIndex, length);
        var value;
        // Array#includes uses SameValueZero equality algorithm
        // eslint-disable-next-line no-self-compare -- NaN check
        if (IS_INCLUDES && el !== el) while(length > index){
            value = O[index++];
            // eslint-disable-next-line no-self-compare -- NaN check
            if (value !== value) return true;
        // Array#indexOf ignores holes, Array#includes - not
        }
        else for(; length > index; index++){
            if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
        }
        return !IS_INCLUDES && -1;
    };
};
$233e480c3a450675$exports = {
    // `Array.prototype.includes` method
    // https://tc39.es/ecma262/#sec-array.prototype.includes
    includes: $233e480c3a450675$var$createMethod(true),
    // `Array.prototype.indexOf` method
    // https://tc39.es/ecma262/#sec-array.prototype.indexof
    indexOf: $233e480c3a450675$var$createMethod(false)
};


var $f94042ea52711239$require$indexOf = $233e480c3a450675$exports.indexOf;

var $f94042ea52711239$var$push = $1eab7b706e02b706$exports([].push);
$f94042ea52711239$exports = function(object, names) {
    var O = $431181964b252248$exports(object);
    var i = 0;
    var result = [];
    var key;
    for(key in O)!$63a728e240395d1d$exports($640b63da6b75d777$exports, key) && $63a728e240395d1d$exports(O, key) && $f94042ea52711239$var$push(result, key);
    // Don't enum bug & hidden keys
    while(names.length > i)if ($63a728e240395d1d$exports(O, key = names[i++])) ~$f94042ea52711239$require$indexOf(result, key) || $f94042ea52711239$var$push(result, key);
    return result;
};


var $1ddd2e33d26212c9$exports = {};
"use strict";
// IE8- don't enum bug keys
$1ddd2e33d26212c9$exports = [
    "constructor",
    "hasOwnProperty",
    "isPrototypeOf",
    "propertyIsEnumerable",
    "toLocaleString",
    "toString",
    "valueOf"
];


var $b2d7ea6ec9d94a0d$var$hiddenKeys = $1ddd2e33d26212c9$exports.concat("length", "prototype");
$b2d7ea6ec9d94a0d$export$2d1720544b23b823 = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
    return $f94042ea52711239$exports(O, $b2d7ea6ec9d94a0d$var$hiddenKeys);
};


// eslint-disable-next-line es/no-object-getownpropertysymbols -- safe
var $ceabc9803fafefb0$export$2d1720544b23b823;
"use strict";
$ceabc9803fafefb0$export$2d1720544b23b823 = Object.getOwnPropertySymbols;



var $e8e8046e03fbef70$var$concat = $1eab7b706e02b706$exports([].concat);
// all object keys, includes non-enumerable and symbols
$e8e8046e03fbef70$exports = $c52f4aba42d917bb$exports("Reflect", "ownKeys") || function ownKeys(it) {
    var keys = $b2d7ea6ec9d94a0d$export$2d1720544b23b823($5c61c11fa6e93240$exports(it));
    var getOwnPropertySymbols = $ceabc9803fafefb0$export$2d1720544b23b823;
    return getOwnPropertySymbols ? $e8e8046e03fbef70$var$concat(keys, getOwnPropertySymbols(it)) : keys;
};




$f9327d7d48af6968$exports = function(target, source, exceptions) {
    var keys = $e8e8046e03fbef70$exports(source);
    var defineProperty = $cac17953bd17b441$export$2d1720544b23b823;
    var getOwnPropertyDescriptor = $c042f290d0d773d5$export$2d1720544b23b823;
    for(var i = 0; i < keys.length; i++){
        var key = keys[i];
        if (!$63a728e240395d1d$exports(target, key) && !(exceptions && $63a728e240395d1d$exports(exceptions, key))) defineProperty(target, key, getOwnPropertyDescriptor(source, key));
    }
};


var $df73494699233519$exports = {};
"use strict";


var $df73494699233519$var$replacement = /#|\.prototype\./;
var $df73494699233519$var$isForced = function(feature, detection) {
    var value = $df73494699233519$var$data[$df73494699233519$var$normalize(feature)];
    return value === $df73494699233519$var$POLYFILL ? true : value === $df73494699233519$var$NATIVE ? false : $453ccaf7659e4906$exports(detection) ? $b65563e7fd9a9951$exports(detection) : !!detection;
};
var $df73494699233519$var$normalize = $df73494699233519$var$isForced.normalize = function(string) {
    return String(string).replace($df73494699233519$var$replacement, ".").toLowerCase();
};
var $df73494699233519$var$data = $df73494699233519$var$isForced.data = {};
var $df73494699233519$var$NATIVE = $df73494699233519$var$isForced.NATIVE = "N";
var $df73494699233519$var$POLYFILL = $df73494699233519$var$isForced.POLYFILL = "P";
$df73494699233519$exports = $df73494699233519$var$isForced;


/*
  options.target         - name of the target object
  options.global         - target is the global object
  options.stat           - export as static methods of target
  options.proto          - export as prototype methods of target
  options.real           - real prototype method for the `pure` version
  options.forced         - export even if the native feature is available
  options.bind           - bind methods to the target, required for the `pure` version
  options.wrap           - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe         - use the simple assignment of property instead of delete + defineProperty
  options.sham           - add a flag to not completely full polyfills
  options.enumerable     - export as enumerable property
  options.dontCallGetSet - prevent calling a getter on target
  options.name           - the .name of the function if it does not match the key
*/ $739714331996ab95$exports = function(options, source) {
    var TARGET = options.target;
    var GLOBAL = options.global;
    var STATIC = options.stat;
    var FORCED, target, key, targetProperty, sourceProperty, descriptor;
    if (GLOBAL) target = $e2f8ed6bad87ba8a$exports;
    else if (STATIC) target = $e2f8ed6bad87ba8a$exports[TARGET] || $835fb6c3976fe66a$exports(TARGET, {});
    else target = $e2f8ed6bad87ba8a$exports[TARGET] && $e2f8ed6bad87ba8a$exports[TARGET].prototype;
    if (target) for(key in source){
        sourceProperty = source[key];
        if (options.dontCallGetSet) {
            descriptor = $739714331996ab95$require$getOwnPropertyDescriptor(target, key);
            targetProperty = descriptor && descriptor.value;
        } else targetProperty = target[key];
        FORCED = $df73494699233519$exports(GLOBAL ? key : TARGET + (STATIC ? "." : "#") + key, options.forced);
        // contained in target
        if (!FORCED && targetProperty !== undefined) {
            if (typeof sourceProperty == typeof targetProperty) continue;
            $f9327d7d48af6968$exports(sourceProperty, targetProperty);
        }
        // add a flag to not completely full polyfills
        if (options.sham || targetProperty && targetProperty.sham) $93400a77eec609ae$exports(sourceProperty, "sham", true);
        $607d8c3286e3b9fe$exports(target, key, sourceProperty, options);
    }
};



var $2558ebfc80919dbf$exports = {};
"use strict";

var $b1a696deb6b873d1$exports = {};
"use strict";

var $b1a696deb6b873d1$var$FunctionPrototype = Function.prototype;
var $b1a696deb6b873d1$var$apply = $b1a696deb6b873d1$var$FunctionPrototype.apply;
var $b1a696deb6b873d1$var$call = $b1a696deb6b873d1$var$FunctionPrototype.call;
// eslint-disable-next-line es/no-reflect -- safe
$b1a696deb6b873d1$exports = typeof Reflect == "object" && Reflect.apply || ($268a78003d3d0205$exports ? $b1a696deb6b873d1$var$call.bind($b1a696deb6b873d1$var$apply) : function() {
    return $b1a696deb6b873d1$var$call.apply($b1a696deb6b873d1$var$apply, arguments);
});


var $ed079c89371f447e$exports = {};
"use strict";
var $67b3b1222885399e$exports = {};
"use strict";


$67b3b1222885399e$exports = function(fn) {
    // Nashorn bug:
    //   https://github.com/zloirock/core-js/issues/1128
    //   https://github.com/zloirock/core-js/issues/1130
    if ($ed6e0112c97f8b4e$exports(fn) === "Function") return $1eab7b706e02b706$exports(fn);
};




var $ed079c89371f447e$var$bind = $67b3b1222885399e$exports($67b3b1222885399e$exports.bind);
// optional / simple context binding
$ed079c89371f447e$exports = function(fn, that) {
    $0c7a13dd99516332$exports(fn);
    return that === undefined ? fn : $268a78003d3d0205$exports ? $ed079c89371f447e$var$bind(fn, that) : function() {
        return fn.apply(that, arguments);
    };
};





var $5d1c8dcc05d578ef$exports = {};
"use strict";

$5d1c8dcc05d578ef$exports = $c52f4aba42d917bb$exports("document", "documentElement");


var $889bb7a1998d0297$exports = {};
"use strict";

$889bb7a1998d0297$exports = $1eab7b706e02b706$exports([].slice);



var $f343678474a84b23$exports = {};
"use strict";
var $f343678474a84b23$var$$TypeError = TypeError;
$f343678474a84b23$exports = function(passed, required) {
    if (passed < required) throw new $f343678474a84b23$var$$TypeError("Not enough arguments");
    return passed;
};


var $8bbaf6a78d3a19b8$exports = {};
"use strict";

// eslint-disable-next-line redos/no-vulnerable -- safe
$8bbaf6a78d3a19b8$exports = /(?:ipad|iphone|ipod).*applewebkit/i.test($9a8c84fbabc21614$exports);


var $e8e39002ffca1db4$exports = {};
"use strict";


$e8e39002ffca1db4$exports = $ed6e0112c97f8b4e$exports($e2f8ed6bad87ba8a$exports.process) === "process";


var $2558ebfc80919dbf$var$set = $e2f8ed6bad87ba8a$exports.setImmediate;
var $2558ebfc80919dbf$var$clear = $e2f8ed6bad87ba8a$exports.clearImmediate;
var $2558ebfc80919dbf$var$process = $e2f8ed6bad87ba8a$exports.process;
var $2558ebfc80919dbf$var$Dispatch = $e2f8ed6bad87ba8a$exports.Dispatch;
var $2558ebfc80919dbf$var$Function = $e2f8ed6bad87ba8a$exports.Function;
var $2558ebfc80919dbf$var$MessageChannel = $e2f8ed6bad87ba8a$exports.MessageChannel;
var $2558ebfc80919dbf$var$String = $e2f8ed6bad87ba8a$exports.String;
var $2558ebfc80919dbf$var$counter = 0;
var $2558ebfc80919dbf$var$queue = {};
var $2558ebfc80919dbf$var$ONREADYSTATECHANGE = "onreadystatechange";
var $2558ebfc80919dbf$var$$location, $2558ebfc80919dbf$var$defer, $2558ebfc80919dbf$var$channel, $2558ebfc80919dbf$var$port;
$b65563e7fd9a9951$exports(function() {
    // Deno throws a ReferenceError on `location` access without `--location` flag
    $2558ebfc80919dbf$var$$location = $e2f8ed6bad87ba8a$exports.location;
});
var $2558ebfc80919dbf$var$run = function(id) {
    if ($63a728e240395d1d$exports($2558ebfc80919dbf$var$queue, id)) {
        var fn = $2558ebfc80919dbf$var$queue[id];
        delete $2558ebfc80919dbf$var$queue[id];
        fn();
    }
};
var $2558ebfc80919dbf$var$runner = function(id) {
    return function() {
        $2558ebfc80919dbf$var$run(id);
    };
};
var $2558ebfc80919dbf$var$eventListener = function(event) {
    $2558ebfc80919dbf$var$run(event.data);
};
var $2558ebfc80919dbf$var$globalPostMessageDefer = function(id) {
    // old engines have not location.origin
    $e2f8ed6bad87ba8a$exports.postMessage($2558ebfc80919dbf$var$String(id), $2558ebfc80919dbf$var$$location.protocol + "//" + $2558ebfc80919dbf$var$$location.host);
};
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!$2558ebfc80919dbf$var$set || !$2558ebfc80919dbf$var$clear) {
    $2558ebfc80919dbf$var$set = function setImmediate(handler) {
        $f343678474a84b23$exports(arguments.length, 1);
        var fn = $453ccaf7659e4906$exports(handler) ? handler : $2558ebfc80919dbf$var$Function(handler);
        var args = $889bb7a1998d0297$exports(arguments, 1);
        $2558ebfc80919dbf$var$queue[++$2558ebfc80919dbf$var$counter] = function() {
            $b1a696deb6b873d1$exports(fn, undefined, args);
        };
        $2558ebfc80919dbf$var$defer($2558ebfc80919dbf$var$counter);
        return $2558ebfc80919dbf$var$counter;
    };
    $2558ebfc80919dbf$var$clear = function clearImmediate(id) {
        delete $2558ebfc80919dbf$var$queue[id];
    };
    // Node.js 0.8-
    if ($e8e39002ffca1db4$exports) $2558ebfc80919dbf$var$defer = function(id) {
        $2558ebfc80919dbf$var$process.nextTick($2558ebfc80919dbf$var$runner(id));
    };
    else if ($2558ebfc80919dbf$var$Dispatch && $2558ebfc80919dbf$var$Dispatch.now) $2558ebfc80919dbf$var$defer = function(id) {
        $2558ebfc80919dbf$var$Dispatch.now($2558ebfc80919dbf$var$runner(id));
    };
    else if ($2558ebfc80919dbf$var$MessageChannel && !$8bbaf6a78d3a19b8$exports) {
        $2558ebfc80919dbf$var$channel = new $2558ebfc80919dbf$var$MessageChannel();
        $2558ebfc80919dbf$var$port = $2558ebfc80919dbf$var$channel.port2;
        $2558ebfc80919dbf$var$channel.port1.onmessage = $2558ebfc80919dbf$var$eventListener;
        $2558ebfc80919dbf$var$defer = $ed079c89371f447e$exports($2558ebfc80919dbf$var$port.postMessage, $2558ebfc80919dbf$var$port);
    // Browsers with postMessage, skip WebWorkers
    // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
    } else if ($e2f8ed6bad87ba8a$exports.addEventListener && $453ccaf7659e4906$exports($e2f8ed6bad87ba8a$exports.postMessage) && !$e2f8ed6bad87ba8a$exports.importScripts && $2558ebfc80919dbf$var$$location && $2558ebfc80919dbf$var$$location.protocol !== "file:" && !$b65563e7fd9a9951$exports($2558ebfc80919dbf$var$globalPostMessageDefer)) {
        $2558ebfc80919dbf$var$defer = $2558ebfc80919dbf$var$globalPostMessageDefer;
        $e2f8ed6bad87ba8a$exports.addEventListener("message", $2558ebfc80919dbf$var$eventListener, false);
    // IE8-
    } else if ($2558ebfc80919dbf$var$ONREADYSTATECHANGE in $6ad98e3f9c7d8cc0$exports("script")) $2558ebfc80919dbf$var$defer = function(id) {
        $5d1c8dcc05d578ef$exports.appendChild($6ad98e3f9c7d8cc0$exports("script"))[$2558ebfc80919dbf$var$ONREADYSTATECHANGE] = function() {
            $5d1c8dcc05d578ef$exports.removeChild(this);
            $2558ebfc80919dbf$var$run(id);
        };
    };
    else $2558ebfc80919dbf$var$defer = function(id) {
        setTimeout($2558ebfc80919dbf$var$runner(id), 0);
    };
}
$2558ebfc80919dbf$exports = {
    set: $2558ebfc80919dbf$var$set,
    clear: $2558ebfc80919dbf$var$clear
};


var $a8004ceb65088a68$require$clearImmediate = $2558ebfc80919dbf$exports.clear;
// `clearImmediate` method
// http://w3c.github.io/setImmediate/#si-clearImmediate
$739714331996ab95$exports({
    global: true,
    bind: true,
    enumerable: true,
    forced: $e2f8ed6bad87ba8a$exports.clearImmediate !== $a8004ceb65088a68$require$clearImmediate
}, {
    clearImmediate: $a8004ceb65088a68$require$clearImmediate
});


"use strict";



var $987cf72b0c906cb1$require$setTask = $2558ebfc80919dbf$exports.set;
var $f3b074559d8266c5$exports = {};
"use strict";



var $84ce4ddceb25e303$exports = {};
"use strict";
/* global Bun -- Bun case */ $84ce4ddceb25e303$exports = typeof Bun == "function" && Bun && typeof Bun.version == "string";





var $f3b074559d8266c5$var$Function = $e2f8ed6bad87ba8a$exports.Function;
// dirty IE9- and Bun 0.3.0- checks
var $f3b074559d8266c5$var$WRAP = /MSIE .\./.test($9a8c84fbabc21614$exports) || $84ce4ddceb25e303$exports && function() {
    var version = $e2f8ed6bad87ba8a$exports.Bun.version.split(".");
    return version.length < 3 || version[0] === "0" && (version[1] < 3 || version[1] === "3" && version[2] === "0");
}();
// IE9- / Bun 0.3.0- setTimeout / setInterval / setImmediate additional parameters fix
// https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#timers
// https://github.com/oven-sh/bun/issues/1633
$f3b074559d8266c5$exports = function(scheduler, hasTimeArg) {
    var firstParamIndex = hasTimeArg ? 2 : 1;
    return $f3b074559d8266c5$var$WRAP ? function(handler, timeout /* , ...arguments */ ) {
        var boundArgs = $f343678474a84b23$exports(arguments.length, 1) > firstParamIndex;
        var fn = $453ccaf7659e4906$exports(handler) ? handler : $f3b074559d8266c5$var$Function(handler);
        var params = boundArgs ? $889bb7a1998d0297$exports(arguments, firstParamIndex) : [];
        var callback = boundArgs ? function() {
            $b1a696deb6b873d1$exports(fn, this, params);
        } : fn;
        return hasTimeArg ? scheduler(callback, timeout) : scheduler(callback);
    } : scheduler;
};


// https://github.com/oven-sh/bun/issues/1633
var $987cf72b0c906cb1$var$setImmediate = $e2f8ed6bad87ba8a$exports.setImmediate ? $f3b074559d8266c5$exports($987cf72b0c906cb1$require$setTask, false) : $987cf72b0c906cb1$require$setTask;
// `setImmediate` method
// http://w3c.github.io/setImmediate/#si-setImmediate
$739714331996ab95$exports({
    global: true,
    bind: true,
    enumerable: true,
    forced: $e2f8ed6bad87ba8a$exports.setImmediate !== $987cf72b0c906cb1$var$setImmediate
}, {
    setImmediate: $987cf72b0c906cb1$var$setImmediate
});




/* Contains varibales that are constant and are used throughout our project. */ const $949cefe0e606d775$export$923ea8233b386e99 = `https://forkify-api.herokuapp.com/api/v2/recipes/`;
const $949cefe0e606d775$export$9bec5134f7f38b3a = 10;
const $949cefe0e606d775$export$5feaddb1377b7f5e = 10;
const $949cefe0e606d775$export$7167c830cefcb6b5 = "fd3f02d1-3eab-4e3f-8158-afb508061b1b";
const $949cefe0e606d775$export$3ce8858248d89a69 = 2.5;


/* Contains functions that are used over the project repeatdely.. */ 
const $8655b94003061a8a$var$timeout = function(s) {
    return new Promise(function(_, reject) {
        setTimeout(function() {
            reject(new Error(`Request took too long! Timeout after ${s} second`));
        }, s * 1000);
    });
};
const $8655b94003061a8a$export$2b3ff41fecbef7c8 = async function(url, uploadData) {
    try {
        const fetchPro = uploadData ? fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(uploadData)
        }) : fetch(url);
        const res = await Promise.race([
            fetchPro,
            $8655b94003061a8a$var$timeout((0, $949cefe0e606d775$export$9bec5134f7f38b3a))
        ]);
        const data = await res.json();
        if (!res.ok) throw new Error(`${data.message} (${res.status})`);
        return data;
    } catch (err) {
        throw err;
    }
} /*
export const getJSON = async function (url) {
    try {
        const res = await Promise.race([fetch(url), timeout(TIMEOUT_SECONDS)]);
        const data = await res.json();
        if (!res.ok) throw new Error(`${data.message} (${res.status})`);
        return data;
    }
    catch (err) {
        throw err;
    };
};

export const sendJSON = async function (url, uploadData) {
    try {
        const res = await Promise.race([fetchPro, timeout(TIMEOUT_SECONDS)]);
        const data = await res.json();
        if (!res.ok) throw new Error(`${data.message} (${res.status})`);
        return data;
    }
    catch (err) {
        throw err;
    };
};
*/ ;


const $f821677b80d93c23$export$ca000e230c0caa3e = {
    recipe: {},
    search: {
        query: "",
        results: [],
        page: 1,
        resultsPerPage: (0, $949cefe0e606d775$export$5feaddb1377b7f5e)
    },
    bookmarks: []
};
const $f821677b80d93c23$var$createRecipeObject = function(data) {
    const { recipe: recipe } = data.data;
    return $f821677b80d93c23$export$ca000e230c0caa3e.recipe = {
        id: recipe.id,
        img: recipe.image_url,
        cookingTime: recipe.cooking_time,
        publisher: recipe.publisher,
        servings: recipe.servings,
        sourceURL: recipe.source_url,
        title: recipe.title,
        ingredients: recipe.ingredients,
        ...recipe.key && {
            key: recipe.key
        }
    };
};
const $f821677b80d93c23$export$b96725c7a035d60b = async function(id) {
    try {
        const data = await (0, $8655b94003061a8a$export$2b3ff41fecbef7c8)(`${(0, $949cefe0e606d775$export$923ea8233b386e99)}${id}?key=${(0, $949cefe0e606d775$export$7167c830cefcb6b5)}`);
        $f821677b80d93c23$export$ca000e230c0caa3e.recipe = $f821677b80d93c23$var$createRecipeObject(data);
        // Bookmarked Recipe Check
        if ($f821677b80d93c23$export$ca000e230c0caa3e.bookmarks.some((bookmark)=>bookmark.id === id)) $f821677b80d93c23$export$ca000e230c0caa3e.recipe.bookmarked = true;
        else $f821677b80d93c23$export$ca000e230c0caa3e.recipe.bookmarked = false;
    } catch (err) {
        console.error(`${err} \u{1F525}\u{1F525}\u{1F525}\u{1F525}`);
        throw err;
    }
};
const $f821677b80d93c23$export$202b8e5cb363a0c4 = async function(query) {
    try {
        $f821677b80d93c23$export$ca000e230c0caa3e.search.query = query;
        const data = await (0, $8655b94003061a8a$export$2b3ff41fecbef7c8)(`${(0, $949cefe0e606d775$export$923ea8233b386e99)}?search=${query}&key=${(0, $949cefe0e606d775$export$7167c830cefcb6b5)}`);
        $f821677b80d93c23$export$ca000e230c0caa3e.search.results = data.data.recipes.map((recipe)=>{
            return {
                id: recipe.id,
                img: recipe.image_url,
                publisher: recipe.publisher,
                title: recipe.title,
                ...recipe.key && {
                    key: recipe.key
                }
            };
        });
        $f821677b80d93c23$export$ca000e230c0caa3e.search.page = 1;
    } catch (err) {
        console.error(`${err} \u{1F525}\u{1F525}\u{1F525}\u{1F525}`);
        throw err;
    }
};
const $f821677b80d93c23$export$8d7f79465139ab72 = function(page = $f821677b80d93c23$export$ca000e230c0caa3e.search.page) {
    $f821677b80d93c23$export$ca000e230c0caa3e.search.page = page;
    const start = (page - 1) * $f821677b80d93c23$export$ca000e230c0caa3e.search.resultsPerPage //0;
    ;
    const end = page * $f821677b80d93c23$export$ca000e230c0caa3e.search.resultsPerPage //9;
    ;
    return $f821677b80d93c23$export$ca000e230c0caa3e.search.results.slice(start, end);
};
const $f821677b80d93c23$export$5e23f4642ecad5ea = function(newServings) {
    $f821677b80d93c23$export$ca000e230c0caa3e.recipe.ingredients.forEach((ingredient)=>{
        ingredient.quantity = ingredient.quantity * newServings / $f821677b80d93c23$export$ca000e230c0caa3e.recipe.servings;
    });
    $f821677b80d93c23$export$ca000e230c0caa3e.recipe.servings = newServings;
};
const $f821677b80d93c23$var$persistBookmarks = function() {
    localStorage.setItem("bookmarks", JSON.stringify($f821677b80d93c23$export$ca000e230c0caa3e.bookmarks));
};
const $f821677b80d93c23$export$72009cc673d27d80 = function(recipe) {
    // Add Bookmark
    $f821677b80d93c23$export$ca000e230c0caa3e.bookmarks.push(recipe);
    // Mark currrent recipe as bookmark
    $f821677b80d93c23$export$ca000e230c0caa3e.recipe.bookmarked = true;
    $f821677b80d93c23$var$persistBookmarks();
};
const $f821677b80d93c23$export$136048bcb9946c75 = function(id) {
    // Delete Bookmark
    const index = $f821677b80d93c23$export$ca000e230c0caa3e.bookmarks.findIndex((element)=>element.id === id);
    $f821677b80d93c23$export$ca000e230c0caa3e.bookmarks.splice(index, 1);
    // Mark current recipe as NOT bookmarked
    $f821677b80d93c23$export$ca000e230c0caa3e.recipe.bookmarked = false;
    $f821677b80d93c23$var$persistBookmarks();
};
const $f821677b80d93c23$var$init = function() {
    const storage = localStorage.getItem("bookmarks");
    if (storage) $f821677b80d93c23$export$ca000e230c0caa3e.bookmarks = JSON.parse(storage);
};
$f821677b80d93c23$var$init();
const $f821677b80d93c23$export$d660c2254e74960d = async function(newRecipe) {
    try {
        const ingredients = Object.entries(newRecipe).filter((entry)=>entry[0].startsWith("ingredient") && entry[1] !== "").map((ing)=>{
            const ingArr = ing[1].split(",").map((el)=>el.trim());
            if (ingArr.length !== 3) throw new Error(`Wrong Ingredient format! Please enter the ingredients in correct format :)`);
            const [qunatity, unit, description] = ingArr;
            return {
                qunatity: qunatity ? +qunatity : null,
                unit: unit,
                description: description
            };
        });
        const recipe = {
            title: newRecipe.title,
            source_url: newRecipe.sourceUrl,
            image_url: newRecipe.image,
            publisher: newRecipe.publisher,
            cooking_time: +newRecipe.cookingTime,
            servings: +newRecipe.servings,
            ingredients: ingredients
        };
        const data = await (0, $8655b94003061a8a$export$2b3ff41fecbef7c8)(`${(0, $949cefe0e606d775$export$923ea8233b386e99)}?key=${(0, $949cefe0e606d775$export$7167c830cefcb6b5)}`, recipe);
        $f821677b80d93c23$export$ca000e230c0caa3e.recipe = $f821677b80d93c23$var$createRecipeObject(data);
        $f821677b80d93c23$export$72009cc673d27d80($f821677b80d93c23$export$ca000e230c0caa3e.recipe);
    } catch (err) {
        throw err;
    }
};



// Parent class for the other view classes.
var $eb48267149172e42$exports = {};
$eb48267149172e42$exports = new URL("icons.e4634d3e.svg", import.meta.url).toString();


class $66df3411d2d6676e$export$2e2bcd8739ae039 {
    _data;
    render(data, render = true) {
        if (!data || Array.isArray(data) && data.length === 0) return this.renderError();
        this._data = data;
        const markup = this._generateMarkup();
        if (!render) return markup;
        this._clear();
        this._parentElement.insertAdjacentHTML("afterbegin", markup);
    }
    update(data) {
        this._data = data;
        const newMarkup = this._generateMarkup();
        const newDOM = document.createRange().createContextualFragment(newMarkup);
        const newElements = Array.from(newDOM.querySelectorAll("*"));
        const currElements = Array.from(this._parentElement.querySelectorAll("*"));
        newElements.forEach((newEl, i)=>{
            const currEl = currElements[i];
            // Update Changed TEXT
            if (!newEl.isEqualNode(currEl) && newEl.firstChild?.nodeValue.trim() !== "") currEl.textContent = newEl.textContent;
            // Update Changed ATTRIBUTE
            if (!newEl.isEqualNode(currEl)) Array.from(newEl.attributes).forEach((attr)=>currEl.setAttribute(attr.name, attr.value));
        });
    }
    _clear() {
        this._parentElement.innerHTML = "";
    }
    // Rendering the Spinner
    renderSpinner() {
        const markup = `
    <div class="spinner">
          <svg>
            <use href="${(0, (/*@__PURE__*/$parcel$interopDefault($eb48267149172e42$exports)))}#icon-loader"></use>
          </svg>
        </div>
  `;
        this._clear();
        this._parentElement.insertAdjacentHTML("afterbegin", markup);
    }
    // Rendering Error Message
    renderError(message = this._errorMessage) {
        const markup = `
      <div class="error">
        <div>
          <svg>
            <use href="${(0, (/*@__PURE__*/$parcel$interopDefault($eb48267149172e42$exports)))}#icon-alert-triangle"></use>
          </svg>
        </div>
        <p>${message}</p>
      </div>
    `;
        this._clear();
        this._parentElement.insertAdjacentHTML("afterbegin", markup);
    }
    // Rendering Success Message
    renderSuccess(message = this._successMessage) {
        const markup = `
      <div class="message">
        <div>
          <svg>
            <use href="${(0, (/*@__PURE__*/$parcel$interopDefault($eb48267149172e42$exports)))}#icon-smile"></use>
          </svg>
        </div>
        <p>${message}</p>
      </div>
    `;
        this._clear();
        this._parentElement.insertAdjacentHTML("afterbegin", markup);
    }
}



var $e7d84b30bb9cd8ce$exports = {};
// FRACTY CONVERTS DECIMAL NUMBERS TO FRACTIONS BY ASSUMING THAT TRAILING PATTERNS FROM 10^-2 CONTINUE TO REPEAT
// The assumption is based on the most standard numbering conventions
// e.g. 3.51 will convert to 3 51/100 while 3.511 will convert to 3 23/45
// Throw any number up to 16 digits long at fracty and let fracy do the work.
// If number is beyond 16 digits fracty will truncate at 15 digits to compensate for roundoff errors created in IEEE 754 Floating Point conversion.
$e7d84b30bb9cd8ce$exports = function(number) {
    let type;
    if (number < 0) {
        number = Math.abs(number);
        type = "-";
    } else type = "";
    if (number === undefined) return `Your input was undefined.`;
    if (isNaN(number)) return `"${number}" is not a number.`;
    if (number == 9999999999999999) return `${type}9999999999999999`;
    if (number > 9999999999999999) return `Too many digits in your integer to maintain IEEE 754 Floating Point conversion accuracy.`;
    if (Number.isInteger(number)) return `${type}${number}`;
    if (number < .000001) return "0";
    const numberString = number.toString();
    const entry = numberString.split(".");
    let integer = entry[0];
    let decimal;
    if (decimal == "0" && integer !== "0") return integer;
    else if (decimal == "0" && integer == "0") return "0";
    else if (numberString.length >= 17) decimal = entry[1].slice(0, entry[1].length - 1);
    else decimal = entry[1];
    if (decimal == "99" && integer !== "0") return `${integer} 99/100`;
    else if (decimal == "99" && integer == "0") return `99/100`;
    else if (1 - parseFloat(`.${decimal}`) < .0011) decimal = "999";
    if (decimal == undefined) return integer;
    const decimalRev = decimal.split("").reverse().join(""); //Reverse the string to look for patterns.
    const patternSearch = /^(\d+)\1{1,2}/; //This greedy regex matches the biggest pattern that starts at the beginning of the string (at the end, in the case of the reversed string). A lazy regex doesn't work because it only identifies subpatterns in cases where subpatterns exist (e.g. '88' in '388388388388'), thus pattern capture must be greedy.
    let pattern = decimalRev.match(patternSearch); //If there's a pattern, it's full sequence is in [0] of this array and the single unit is in [1] but it may still need to be reduced further.
    if (pattern && decimal.length > 2) {
        let patternSequence = pattern[0].split("").reverse().join("");
        let endPattern = pattern[1].split("").reverse().join("");
        if (endPattern.length > 1) {
            let endPatternArray = endPattern.split("");
            let testSingleUnit = 1;
            for(let i = 0; i < endPatternArray.length; i++)testSingleUnit /= endPatternArray[0] / endPatternArray[i];
            if (testSingleUnit === 1) endPattern = endPatternArray[0];
        }
        if (endPattern.length > 1 && endPattern.length % 2 === 0) endPattern = parseInt(endPattern.slice(0, endPattern.length / 2), 10) - parseInt(endPattern.slice(endPattern.length / 2, endPattern.length), 10) === 0 ? endPattern.slice(0, endPattern.length / 2) : endPattern;
        return $e7d84b30bb9cd8ce$var$yesRepeat(decimal, endPattern, patternSequence, integer, type); //Begin calculating the numerator and denominator for decimals that have a pattern.
    } else return $e7d84b30bb9cd8ce$var$noRepeat(decimal, integer, type); //Begin calculating the numerator and denominator for decimals that don't have a pattern.
};
//IF THERE'S A TRAILING PATTERN FRACTY DIVIDES THE INPUT BY ONE SUBTRACTED FROM THE NEAREST BASE 10 NUMBER WITH NUMBER OF ZEROS EQUAL TO THE LENGTH OF THE REPEATED PATTERN (I.E. A SERIES OF 9'S) MULTIPLIED BY THE BASE 10 NUMBER GREATER THAN AND CLOSEST TO THE INPUT.
function $e7d84b30bb9cd8ce$var$yesRepeat(decimal, endPattern, patternSequence, integer, type) {
    const rep = true; //The numerator repeats.
    const nonPatternLength = decimal.length - patternSequence.length >= 1 ? decimal.length - patternSequence.length : 1; //Does the length of the non pattern segment of the input = 0? If it does, that's incorrect since we know it must equal at least 1, otherwise it's the length of the decimal input minus the length of the full pattern.
    const decimalMultiplier2 = Math.pow(10, nonPatternLength); //Second multiplier to use.
    const float = parseFloat(`0.${decimal}`); //Convert the decimal input to a floating point number.
    const decimalMultiplier1 = Math.pow(10, endPattern.length); //Find the right multiplier to use for both numerator and denominator, which will later have 1 subtracted from it in the case of the denominator.
    const numerator = Math.round((float * decimalMultiplier1 - float) * Math.pow(10, nonPatternLength)); //Find the numerator to be used in calculating the fraction that contains a repeating trailing sequence.
    const denominator = (decimalMultiplier1 - 1) * decimalMultiplier2; //Caluculate the denominator using the equation for repeating trailing sequences.
    return $e7d84b30bb9cd8ce$var$reduce(numerator, denominator, integer, type, rep); //Further reduce the numerator and denominator.
}
//IF THERE'S NO TRAILING PATTERN FRACTY DIVIDES THE INPUT BY THE NEAREST BASE 10 INTEGER GREATER THAN THE NUMERATOR.
function $e7d84b30bb9cd8ce$var$noRepeat(decimal, integer, type) {
    const rep = false; //The numerator doesn't repeat.
    const numerator = parseInt(decimal, 10); //Numerator begins as decimal input converted into an integer.
    const denominator = Math.pow(10, decimal.length); //Denominator begins as 10 to the power of the length of the numerator.
    return $e7d84b30bb9cd8ce$var$reduce(numerator, denominator, integer, type, rep); //Reduce the numerator and denominator.
}
//FRACTY REDUCES THE FRACTION.
function $e7d84b30bb9cd8ce$var$reduce(numerator, denominator, integer, type, rep) {
    const primeNumberArray = [
        2,
        3,
        5
    ]; //If the numerator isn't from a repeating decimal case, the initialized array of prime numbers will suffice to find the common denominators.
    if (rep === true) {
        for(let i = 3; i * i <= numerator; i += 2)if (numerator % i === 0) primeNumberArray.push(i);
    }
    let j = 0; //Initialize counter over the prime number array for the while loop.
    let comDenom = 1; //Initialize the common denominator.
    let num = numerator; //Initialize the numerator.
    let den = denominator; //Initialize the denominator.
    while(j <= primeNumberArray.length)if (num % primeNumberArray[j] === 0 && den % primeNumberArray[j] === 0) {
        comDenom = comDenom * primeNumberArray[j];
        num = num / primeNumberArray[j];
        den = den / primeNumberArray[j];
    } else j++;
    return $e7d84b30bb9cd8ce$var$returnStrings(den, num, integer, type);
}
//FRACTY RETURNS THE REDUCED FRACTION AS A STRING.
function $e7d84b30bb9cd8ce$var$returnStrings(den, num, integer, type) {
    if (den === 1 && num === 1) {
        integer = `${type}${(parseInt(integer) + 1).toString()}`; //Add 1 to the integer and return a string without a fraction.
        return `${integer}`;
    } else if (num === 0) return `${type}${integer}`;
    else if (integer == "0") return `${type}${num}/${den}`;
    else return `${type}${integer} ${num}/${den}`; //If there's an integer and a fraction return both.
}


class $87c8fee486b3a62a$var$RecipeView extends (0, $66df3411d2d6676e$export$2e2bcd8739ae039) {
    _parentElement = document.querySelector(".recipe");
    _errorMessage = `We couldn't find any recipe for your query! Please try another recipe`;
    _successMessage = "";
    // Handling the recipes
    addHandlerRender(funcCallback) {
        [
            "hashchange",
            "load"
        ].forEach((ev)=>window.addEventListener(ev, funcCallback));
    }
    addHandlerUpdateServings(handler) {
        this._parentElement.addEventListener("click", function(e) {
            const btn = e.target.closest(".btn--update-servings");
            if (!btn) return;
            const { updateTo: updateTo } = btn.dataset;
            if (+updateTo > 0) handler(+updateTo);
        });
    }
    addHandlerAddBookmark(handler) {
        this._parentElement.addEventListener("click", function(e) {
            const btn = e.target.closest(".btn--bookmark");
            if (!btn) return;
            handler();
        });
    }
    // Generating Markup
    _generateMarkup() {
        return `
      <figure class="recipe__fig">
          <img src="${this._data.img}" alt="${this._data.title}" class="recipe__img" />
          <h1 class="recipe__title">
            <span>${this._data.title}</span>
          </h1>
        </figure>

        <div class="recipe__details">
          <div class="recipe__info">
            <svg class="recipe__info-icon">
              <use href="${0, (/*@__PURE__*/$parcel$interopDefault($eb48267149172e42$exports))}#icon-clock"></use>
            </svg>
            <span class="recipe__info-data recipe__info-data--minutes">${this._data.cookingTime}</span>
            <span class="recipe__info-text">minutes</span>
          </div>
          <div class="recipe__info">
            <svg class="recipe__info-icon">
              <use href="${0, (/*@__PURE__*/$parcel$interopDefault($eb48267149172e42$exports))}#icon-users"></use>
            </svg>
            <span class="recipe__info-data recipe__info-data--people">${this._data.servings}</span>
            <span class="recipe__info-text">
            ${this._data.servings === 1 ? "serving" : "servings"}
            </span>

            <div class="recipe__info-buttons">
              <button class="btn--tiny btn--update-servings" data-update-to = "${this._data.servings - 1}">
                <svg>
                  <use href="${0, (/*@__PURE__*/$parcel$interopDefault($eb48267149172e42$exports))}#icon-minus-circle"></use>
                </svg>
              </button>
              <button class="btn--tiny btn--update-servings" data-update-to = "${this._data.servings + 1}">
                <svg>
                  <use href="${0, (/*@__PURE__*/$parcel$interopDefault($eb48267149172e42$exports))}#icon-plus-circle"></use>
                </svg>
              </button>
            </div>
          </div>

          <div class="recipe__user-generated ${this._data.key ? "" : "hidden"}">
            <svg>
              <use href="${0, (/*@__PURE__*/$parcel$interopDefault($eb48267149172e42$exports))}#icon-user"></use>
            </svg>
          </div>
          <button class="btn--round btn--bookmark">
            <svg class="">
              <use href="${0, (/*@__PURE__*/$parcel$interopDefault($eb48267149172e42$exports))}#icon-bookmark${this._data.bookmarked ? "-fill" : ""}"></use>
            </svg>
          </button>
        </div>

        <div class="recipe__ingredients">
          <h2 class="heading--2">Recipe ingredients</h2>
          <ul class="recipe__ingredient-list">
            ${this._data.ingredients.map(this._generateIngredients).join("")}
          </ul>
        </div>

        <div class="recipe__directions">
          <h2 class="heading--2">How to cook it</h2>
          <p class="recipe__directions-text">
            This recipe was carefully designed and tested by
            <span class="recipe__publisher">${this._data.publisher}</span>. Please check out
            directions at their website.
          </p>
          <a
            class="btn--small recipe__btn"
            href="${this._data.sourceURL}"
            target="_blank"
          >
            <span>Directions</span>
            <svg class="search__icon">
              <use href="${0, (/*@__PURE__*/$parcel$interopDefault($eb48267149172e42$exports))}#icon-arrow-right"></use>
            </svg>
          </a>
        </div>
        `;
    }
    // Generating ingredients list
    _generateIngredients(ing) {
        return `
                <li class="recipe__ingredient">
                  <svg class="recipe__icon">
                    <use href="${0, (/*@__PURE__*/$parcel$interopDefault($eb48267149172e42$exports))}#icon-check"></use>
                  </svg >
                  <div class="recipe__quantity">${ing.quantity ? (0, (/*@__PURE__*/$parcel$interopDefault($e7d84b30bb9cd8ce$exports)))(ing.quantity).toString() : ""}</div>
                  <div class="recipe__description">
                  <span class="recipe__unit">${ing.unit}</span>
                   ${ing.description}
                  </div>
                </li >
              `;
    }
}
var $87c8fee486b3a62a$export$2e2bcd8739ae039 = new $87c8fee486b3a62a$var$RecipeView();


// Contains the UI elements for the search input
class $cc3ccfe7a9f0c093$var$SearchView {
    #parentElement = document.querySelector(".search");
    getQuery() {
        const query = this.#parentElement.querySelector(".search__field").value;
        this.#clearInput();
        return query;
    }
    #clearInput() {
        this.#parentElement.querySelector(".search__field").value = "";
    }
    addHandlerSearch(handler) {
        this.#parentElement.addEventListener("submit", function(e) {
            e.preventDefault();
            handler();
        });
    }
}
var $cc3ccfe7a9f0c093$export$2e2bcd8739ae039 = new $cc3ccfe7a9f0c093$var$SearchView();





class $14d5a89801d55f2c$var$PreviewView extends (0, $66df3411d2d6676e$export$2e2bcd8739ae039) {
    _parentElement = "";
    _generateMarkup() {
        const id = window.location.hash.slice(1);
        return `
            <li class="preview">
                <a class="preview__link ${this._data.id === id ? "preview__link--active" : ""}" href="#${this._data.id}">
                <figure class="preview__fig">
                    <img src="${this._data.img}" alt="${this._data.title}" />
                </figure>
                    <div class="preview__data">
                        <h4 class="preview__title">${this._data.title}</h4>
                        <p class="preview__publisher">${this._data.publisher}</p>
                        <div class="preview__user-generated ${this._data.key ? "" : "hidden"}">
                            <svg>
                            <use href="${0, (/*@__PURE__*/$parcel$interopDefault($eb48267149172e42$exports))}#icon-user"></use>
                            </svg>
                        </div>
                    </div>
                </a>
          </li>
        `;
    }
}
var $14d5a89801d55f2c$export$2e2bcd8739ae039 = new $14d5a89801d55f2c$var$PreviewView();


class $3b3a807ebcd3404d$var$ResultsView extends (0, $66df3411d2d6676e$export$2e2bcd8739ae039) {
    _parentElement = document.querySelector(".results");
    _errorMessage = `No recipe found for your query! Please try another query :)`;
    _successMessage = "";
    _generateMarkup() {
        return this._data.map((result)=>(0, $14d5a89801d55f2c$export$2e2bcd8739ae039).render(result, false)).join("");
    }
}
var $3b3a807ebcd3404d$export$2e2bcd8739ae039 = new $3b3a807ebcd3404d$var$ResultsView();




class $ea55b24677fb9333$var$PaginationView extends (0, $66df3411d2d6676e$export$2e2bcd8739ae039) {
    _parentElement = document.querySelector(".pagination");
    addHandlerClick(handler) {
        this._parentElement.addEventListener("click", function(e) {
            e.preventDefault();
            const btn = e.target.closest(".btn--inline");
            if (!btn) return;
            const goToPage = +btn.dataset.goto;
            handler(goToPage);
        });
    }
    _generateMarkup() {
        const currPage = this._data.page;
        const numPages = Math.ceil(this._data.results.length / this._data.resultsPerPage);
        const _nextPageBtn = `
            <button data-goto = "${currPage + 1}" class="btn--inline pagination__btn--next">
                <span>Page ${currPage + 1}</span>
                <svg class="search__icon">
                    <use href="${(0, (/*@__PURE__*/$parcel$interopDefault($eb48267149172e42$exports)))}#icon-arrow-right"></use>
                </svg>
            </button>
        `;
        const _prevPageBtn = `
            <button data-goto = "${currPage - 1}" class="btn--inline pagination__btn--prev">
                <svg class="search__icon">
                    <use href="${(0, (/*@__PURE__*/$parcel$interopDefault($eb48267149172e42$exports)))}#icon-arrow-left"></use>
                </svg>
                <span>Page ${currPage - 1}</span>
            </button>
        `;
        // At Page 1 and there are other pages
        if (currPage === 1 && numPages > 1) return _nextPageBtn;
        // Last Page
        if (currPage === numPages && numPages > 1) return _prevPageBtn;
        // Any other page
        if (currPage !== 1 && this._data.page < numPages) return `${_prevPageBtn}${_nextPageBtn}`;
        // At Page 1 and there are NO other pages
        return ``;
    }
}
var $ea55b24677fb9333$export$2e2bcd8739ae039 = new $ea55b24677fb9333$var$PaginationView();




class $5346de1ad3f80d2d$var$BookmarksView extends (0, $66df3411d2d6676e$export$2e2bcd8739ae039) {
    _parentElement = document.querySelector(".bookmarks__list");
    _errorMessage = `No bookmarks yet. Find a nice recipe and bookmark it :)`;
    _successMessage = "";
    addHandlerRender(handler) {
        window.addEventListener("load", handler);
    }
    _generateMarkup() {
        return this._data.map((bookmark)=>(0, $14d5a89801d55f2c$export$2e2bcd8739ae039).render(bookmark, false)).join("");
    }
}
var $5346de1ad3f80d2d$export$2e2bcd8739ae039 = new $5346de1ad3f80d2d$var$BookmarksView();



// import icons from '../../img/icons.svg';
class $3a43958ee387c94d$var$AddRecipeView extends (0, $66df3411d2d6676e$export$2e2bcd8739ae039) {
    _parentElement = document.querySelector(".upload");
    _successMessage = "Recipe was successfully uploaded!";
    _window = document.querySelector(".add-recipe-window");
    _overlay = document.querySelector(".overlay");
    _btnOpenModal = document.querySelector(".nav__btn--add-recipe");
    _btnCloseModal = document.querySelector(".btn--close-modal");
    constructor(){
        super();
        this._addHandlerShowWindow();
        this._addHandlerHideWindow();
    }
    _toggleWindow() {
        this._overlay.classList.toggle("hidden");
        this._window.classList.toggle("hidden");
    }
    _addHandlerShowWindow() {
        this._btnOpenModal.addEventListener("click", this._toggleWindow.bind(this));
    }
    _addHandlerHideWindow() {
        this._btnCloseModal.addEventListener("click", this._toggleWindow.bind(this));
        this._overlay.addEventListener("click", this._toggleWindow.bind(this));
    }
    addHandlerUpload(handler) {
        this._parentElement.addEventListener("submit", function(e) {
            e.preventDefault();
            const dataArr = [
                ...new FormData(this)
            ];
            const data = Object.fromEntries(dataArr);
            handler(data);
        });
    }
    _generateMarkup() {}
}
var $3a43958ee387c94d$export$2e2bcd8739ae039 = new $3a43958ee387c94d$var$AddRecipeView();


var $c0b0e9e2ffdc921d$exports = {};
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var $c0b0e9e2ffdc921d$var$runtime = function(exports) {
    "use strict";
    var Op = Object.prototype;
    var hasOwn = Op.hasOwnProperty;
    var defineProperty = Object.defineProperty || function(obj, key, desc) {
        obj[key] = desc.value;
    };
    var undefined; // More compressible than void 0.
    var $Symbol = typeof Symbol === "function" ? Symbol : {};
    var iteratorSymbol = $Symbol.iterator || "@@iterator";
    var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
    var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";
    function define(obj, key, value) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
        return obj[key];
    }
    try {
        // IE 8 has a broken Object.defineProperty that only works on DOM objects.
        define({}, "");
    } catch (err) {
        define = function(obj, key, value) {
            return obj[key] = value;
        };
    }
    function wrap(innerFn, outerFn, self, tryLocsList) {
        // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
        var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
        var generator = Object.create(protoGenerator.prototype);
        var context = new Context(tryLocsList || []);
        // The ._invoke method unifies the implementations of the .next,
        // .throw, and .return methods.
        defineProperty(generator, "_invoke", {
            value: makeInvokeMethod(innerFn, self, context)
        });
        return generator;
    }
    exports.wrap = wrap;
    // Try/catch helper to minimize deoptimizations. Returns a completion
    // record like context.tryEntries[i].completion. This interface could
    // have been (and was previously) designed to take a closure to be
    // invoked without arguments, but in all the cases we care about we
    // already have an existing method we want to call, so there's no need
    // to create a new function object. We can even get away with assuming
    // the method takes exactly one argument, since that happens to be true
    // in every case, so we don't have to touch the arguments object. The
    // only additional allocation required is the completion record, which
    // has a stable shape and so hopefully should be cheap to allocate.
    function tryCatch(fn, obj, arg) {
        try {
            return {
                type: "normal",
                arg: fn.call(obj, arg)
            };
        } catch (err) {
            return {
                type: "throw",
                arg: err
            };
        }
    }
    var GenStateSuspendedStart = "suspendedStart";
    var GenStateSuspendedYield = "suspendedYield";
    var GenStateExecuting = "executing";
    var GenStateCompleted = "completed";
    // Returning this object from the innerFn has the same effect as
    // breaking out of the dispatch switch statement.
    var ContinueSentinel = {};
    // Dummy constructor functions that we use as the .constructor and
    // .constructor.prototype properties for functions that return Generator
    // objects. For full spec compliance, you may wish to configure your
    // minifier not to mangle the names of these two functions.
    function Generator() {}
    function GeneratorFunction() {}
    function GeneratorFunctionPrototype() {}
    // This is a polyfill for %IteratorPrototype% for environments that
    // don't natively support it.
    var IteratorPrototype = {};
    define(IteratorPrototype, iteratorSymbol, function() {
        return this;
    });
    var getProto = Object.getPrototypeOf;
    var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
    if (NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
    var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
    GeneratorFunction.prototype = GeneratorFunctionPrototype;
    defineProperty(Gp, "constructor", {
        value: GeneratorFunctionPrototype,
        configurable: true
    });
    defineProperty(GeneratorFunctionPrototype, "constructor", {
        value: GeneratorFunction,
        configurable: true
    });
    GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction");
    // Helper for defining the .next, .throw, and .return methods of the
    // Iterator interface in terms of a single ._invoke method.
    function defineIteratorMethods(prototype) {
        [
            "next",
            "throw",
            "return"
        ].forEach(function(method) {
            define(prototype, method, function(arg) {
                return this._invoke(method, arg);
            });
        });
    }
    exports.isGeneratorFunction = function(genFun) {
        var ctor = typeof genFun === "function" && genFun.constructor;
        return ctor ? ctor === GeneratorFunction || // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction" : false;
    };
    exports.mark = function(genFun) {
        if (Object.setPrototypeOf) Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
        else {
            genFun.__proto__ = GeneratorFunctionPrototype;
            define(genFun, toStringTagSymbol, "GeneratorFunction");
        }
        genFun.prototype = Object.create(Gp);
        return genFun;
    };
    // Within the body of any async function, `await x` is transformed to
    // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
    // `hasOwn.call(value, "__await")` to determine if the yielded value is
    // meant to be awaited.
    exports.awrap = function(arg) {
        return {
            __await: arg
        };
    };
    function AsyncIterator(generator, PromiseImpl) {
        function invoke(method, arg, resolve, reject) {
            var record = tryCatch(generator[method], generator, arg);
            if (record.type === "throw") reject(record.arg);
            else {
                var result = record.arg;
                var value = result.value;
                if (value && typeof value === "object" && hasOwn.call(value, "__await")) return PromiseImpl.resolve(value.__await).then(function(value) {
                    invoke("next", value, resolve, reject);
                }, function(err) {
                    invoke("throw", err, resolve, reject);
                });
                return PromiseImpl.resolve(value).then(function(unwrapped) {
                    // When a yielded Promise is resolved, its final value becomes
                    // the .value of the Promise<{value,done}> result for the
                    // current iteration.
                    result.value = unwrapped;
                    resolve(result);
                }, function(error) {
                    // If a rejected Promise was yielded, throw the rejection back
                    // into the async generator function so it can be handled there.
                    return invoke("throw", error, resolve, reject);
                });
            }
        }
        var previousPromise;
        function enqueue(method, arg) {
            function callInvokeWithMethodAndArg() {
                return new PromiseImpl(function(resolve, reject) {
                    invoke(method, arg, resolve, reject);
                });
            }
            return previousPromise = // If enqueue has been called before, then we want to wait until
            // all previous Promises have been resolved before calling invoke,
            // so that results are always delivered in the correct order. If
            // enqueue has not been called before, then it is important to
            // call invoke immediately, without waiting on a callback to fire,
            // so that the async generator function has the opportunity to do
            // any necessary setup in a predictable way. This predictability
            // is why the Promise constructor synchronously invokes its
            // executor callback, and why async functions synchronously
            // execute code before the first await. Since we implement simple
            // async functions in terms of async generators, it is especially
            // important to get this right, even though it requires care.
            previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, // Avoid propagating failures to Promises returned by later
            // invocations of the iterator.
            callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
        }
        // Define the unified helper method that is used to implement .next,
        // .throw, and .return (see defineIteratorMethods).
        defineProperty(this, "_invoke", {
            value: enqueue
        });
    }
    defineIteratorMethods(AsyncIterator.prototype);
    define(AsyncIterator.prototype, asyncIteratorSymbol, function() {
        return this;
    });
    exports.AsyncIterator = AsyncIterator;
    // Note that simple async functions are implemented on top of
    // AsyncIterator objects; they just return a Promise for the value of
    // the final result produced by the iterator.
    exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
        if (PromiseImpl === void 0) PromiseImpl = Promise;
        var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
        return exports.isGeneratorFunction(outerFn) ? iter // If outerFn is a generator, return the full iterator.
         : iter.next().then(function(result) {
            return result.done ? result.value : iter.next();
        });
    };
    function makeInvokeMethod(innerFn, self, context) {
        var state = GenStateSuspendedStart;
        return function invoke(method, arg) {
            if (state === GenStateExecuting) throw new Error("Generator is already running");
            if (state === GenStateCompleted) {
                if (method === "throw") throw arg;
                // Be forgiving, per GeneratorResume behavior specified since ES2015:
                // ES2015 spec, step 3: https://262.ecma-international.org/6.0/#sec-generatorresume
                // Latest spec, step 2: https://tc39.es/ecma262/#sec-generatorresume
                return doneResult();
            }
            context.method = method;
            context.arg = arg;
            while(true){
                var delegate = context.delegate;
                if (delegate) {
                    var delegateResult = maybeInvokeDelegate(delegate, context);
                    if (delegateResult) {
                        if (delegateResult === ContinueSentinel) continue;
                        return delegateResult;
                    }
                }
                if (context.method === "next") // Setting context._sent for legacy support of Babel's
                // function.sent implementation.
                context.sent = context._sent = context.arg;
                else if (context.method === "throw") {
                    if (state === GenStateSuspendedStart) {
                        state = GenStateCompleted;
                        throw context.arg;
                    }
                    context.dispatchException(context.arg);
                } else if (context.method === "return") context.abrupt("return", context.arg);
                state = GenStateExecuting;
                var record = tryCatch(innerFn, self, context);
                if (record.type === "normal") {
                    // If an exception is thrown from innerFn, we leave state ===
                    // GenStateExecuting and loop back for another invocation.
                    state = context.done ? GenStateCompleted : GenStateSuspendedYield;
                    if (record.arg === ContinueSentinel) continue;
                    return {
                        value: record.arg,
                        done: context.done
                    };
                } else if (record.type === "throw") {
                    state = GenStateCompleted;
                    // Dispatch the exception by looping back around to the
                    // context.dispatchException(context.arg) call above.
                    context.method = "throw";
                    context.arg = record.arg;
                }
            }
        };
    }
    // Call delegate.iterator[context.method](context.arg) and handle the
    // result, either by returning a { value, done } result from the
    // delegate iterator, or by modifying context.method and context.arg,
    // setting context.delegate to null, and returning the ContinueSentinel.
    function maybeInvokeDelegate(delegate, context) {
        var methodName = context.method;
        var method = delegate.iterator[methodName];
        if (method === undefined) {
            // A .throw or .return when the delegate iterator has no .throw
            // method, or a missing .next method, always terminate the
            // yield* loop.
            context.delegate = null;
            // Note: ["return"] must be used for ES3 parsing compatibility.
            if (methodName === "throw" && delegate.iterator["return"]) {
                // If the delegate iterator has a return method, give it a
                // chance to clean up.
                context.method = "return";
                context.arg = undefined;
                maybeInvokeDelegate(delegate, context);
                if (context.method === "throw") // If maybeInvokeDelegate(context) changed context.method from
                // "return" to "throw", let that override the TypeError below.
                return ContinueSentinel;
            }
            if (methodName !== "return") {
                context.method = "throw";
                context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method");
            }
            return ContinueSentinel;
        }
        var record = tryCatch(method, delegate.iterator, context.arg);
        if (record.type === "throw") {
            context.method = "throw";
            context.arg = record.arg;
            context.delegate = null;
            return ContinueSentinel;
        }
        var info = record.arg;
        if (!info) {
            context.method = "throw";
            context.arg = new TypeError("iterator result is not an object");
            context.delegate = null;
            return ContinueSentinel;
        }
        if (info.done) {
            // Assign the result of the finished delegate to the temporary
            // variable specified by delegate.resultName (see delegateYield).
            context[delegate.resultName] = info.value;
            // Resume execution at the desired location (see delegateYield).
            context.next = delegate.nextLoc;
            // If context.method was "throw" but the delegate handled the
            // exception, let the outer generator proceed normally. If
            // context.method was "next", forget context.arg since it has been
            // "consumed" by the delegate iterator. If context.method was
            // "return", allow the original .return call to continue in the
            // outer generator.
            if (context.method !== "return") {
                context.method = "next";
                context.arg = undefined;
            }
        } else // Re-yield the result returned by the delegate method.
        return info;
        // The delegate iterator is finished, so forget it and continue with
        // the outer generator.
        context.delegate = null;
        return ContinueSentinel;
    }
    // Define Generator.prototype.{next,throw,return} in terms of the
    // unified ._invoke helper method.
    defineIteratorMethods(Gp);
    define(Gp, toStringTagSymbol, "Generator");
    // A Generator should always return itself as the iterator object when the
    // @@iterator function is called on it. Some browsers' implementations of the
    // iterator prototype chain incorrectly implement this, causing the Generator
    // object to not be returned from this call. This ensures that doesn't happen.
    // See https://github.com/facebook/regenerator/issues/274 for more details.
    define(Gp, iteratorSymbol, function() {
        return this;
    });
    define(Gp, "toString", function() {
        return "[object Generator]";
    });
    function pushTryEntry(locs) {
        var entry = {
            tryLoc: locs[0]
        };
        if (1 in locs) entry.catchLoc = locs[1];
        if (2 in locs) {
            entry.finallyLoc = locs[2];
            entry.afterLoc = locs[3];
        }
        this.tryEntries.push(entry);
    }
    function resetTryEntry(entry) {
        var record = entry.completion || {};
        record.type = "normal";
        delete record.arg;
        entry.completion = record;
    }
    function Context(tryLocsList) {
        // The root entry object (effectively a try statement without a catch
        // or a finally block) gives us a place to store values thrown from
        // locations where there is no enclosing try statement.
        this.tryEntries = [
            {
                tryLoc: "root"
            }
        ];
        tryLocsList.forEach(pushTryEntry, this);
        this.reset(true);
    }
    exports.keys = function(val) {
        var object = Object(val);
        var keys = [];
        for(var key in object)keys.push(key);
        keys.reverse();
        // Rather than returning an object with a next method, we keep
        // things simple and return the next function itself.
        return function next() {
            while(keys.length){
                var key = keys.pop();
                if (key in object) {
                    next.value = key;
                    next.done = false;
                    return next;
                }
            }
            // To avoid creating an additional object, we just hang the .value
            // and .done properties off the next function object itself. This
            // also ensures that the minifier will not anonymize the function.
            next.done = true;
            return next;
        };
    };
    function values(iterable) {
        if (iterable != null) {
            var iteratorMethod = iterable[iteratorSymbol];
            if (iteratorMethod) return iteratorMethod.call(iterable);
            if (typeof iterable.next === "function") return iterable;
            if (!isNaN(iterable.length)) {
                var i = -1, next = function next() {
                    while(++i < iterable.length)if (hasOwn.call(iterable, i)) {
                        next.value = iterable[i];
                        next.done = false;
                        return next;
                    }
                    next.value = undefined;
                    next.done = true;
                    return next;
                };
                return next.next = next;
            }
        }
        throw new TypeError(typeof iterable + " is not iterable");
    }
    exports.values = values;
    function doneResult() {
        return {
            value: undefined,
            done: true
        };
    }
    Context.prototype = {
        constructor: Context,
        reset: function(skipTempReset) {
            this.prev = 0;
            this.next = 0;
            // Resetting context._sent for legacy support of Babel's
            // function.sent implementation.
            this.sent = this._sent = undefined;
            this.done = false;
            this.delegate = null;
            this.method = "next";
            this.arg = undefined;
            this.tryEntries.forEach(resetTryEntry);
            if (!skipTempReset) {
                for(var name in this)// Not sure about the optimal order of these conditions:
                if (name.charAt(0) === "t" && hasOwn.call(this, name) && !isNaN(+name.slice(1))) this[name] = undefined;
            }
        },
        stop: function() {
            this.done = true;
            var rootEntry = this.tryEntries[0];
            var rootRecord = rootEntry.completion;
            if (rootRecord.type === "throw") throw rootRecord.arg;
            return this.rval;
        },
        dispatchException: function(exception) {
            if (this.done) throw exception;
            var context = this;
            function handle(loc, caught) {
                record.type = "throw";
                record.arg = exception;
                context.next = loc;
                if (caught) {
                    // If the dispatched exception was caught by a catch block,
                    // then let that catch block handle the exception normally.
                    context.method = "next";
                    context.arg = undefined;
                }
                return !!caught;
            }
            for(var i = this.tryEntries.length - 1; i >= 0; --i){
                var entry = this.tryEntries[i];
                var record = entry.completion;
                if (entry.tryLoc === "root") // Exception thrown outside of any try block that could handle
                // it, so set the completion value of the entire function to
                // throw the exception.
                return handle("end");
                if (entry.tryLoc <= this.prev) {
                    var hasCatch = hasOwn.call(entry, "catchLoc");
                    var hasFinally = hasOwn.call(entry, "finallyLoc");
                    if (hasCatch && hasFinally) {
                        if (this.prev < entry.catchLoc) return handle(entry.catchLoc, true);
                        else if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
                    } else if (hasCatch) {
                        if (this.prev < entry.catchLoc) return handle(entry.catchLoc, true);
                    } else if (hasFinally) {
                        if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
                    } else throw new Error("try statement without catch or finally");
                }
            }
        },
        abrupt: function(type, arg) {
            for(var i = this.tryEntries.length - 1; i >= 0; --i){
                var entry = this.tryEntries[i];
                if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
                    var finallyEntry = entry;
                    break;
                }
            }
            if (finallyEntry && (type === "break" || type === "continue") && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc) // Ignore the finally entry if control is not jumping to a
            // location outside the try/catch block.
            finallyEntry = null;
            var record = finallyEntry ? finallyEntry.completion : {};
            record.type = type;
            record.arg = arg;
            if (finallyEntry) {
                this.method = "next";
                this.next = finallyEntry.finallyLoc;
                return ContinueSentinel;
            }
            return this.complete(record);
        },
        complete: function(record, afterLoc) {
            if (record.type === "throw") throw record.arg;
            if (record.type === "break" || record.type === "continue") this.next = record.arg;
            else if (record.type === "return") {
                this.rval = this.arg = record.arg;
                this.method = "return";
                this.next = "end";
            } else if (record.type === "normal" && afterLoc) this.next = afterLoc;
            return ContinueSentinel;
        },
        finish: function(finallyLoc) {
            for(var i = this.tryEntries.length - 1; i >= 0; --i){
                var entry = this.tryEntries[i];
                if (entry.finallyLoc === finallyLoc) {
                    this.complete(entry.completion, entry.afterLoc);
                    resetTryEntry(entry);
                    return ContinueSentinel;
                }
            }
        },
        "catch": function(tryLoc) {
            for(var i = this.tryEntries.length - 1; i >= 0; --i){
                var entry = this.tryEntries[i];
                if (entry.tryLoc === tryLoc) {
                    var record = entry.completion;
                    if (record.type === "throw") {
                        var thrown = record.arg;
                        resetTryEntry(entry);
                    }
                    return thrown;
                }
            }
            // The context.catch method must only be called with a location
            // argument that corresponds to a known catch block.
            throw new Error("illegal catch attempt");
        },
        delegateYield: function(iterable, resultName, nextLoc) {
            this.delegate = {
                iterator: values(iterable),
                resultName: resultName,
                nextLoc: nextLoc
            };
            if (this.method === "next") // Deliberately forget the last sent value so that we don't
            // accidentally pass it on to the delegate.
            this.arg = undefined;
            return ContinueSentinel;
        }
    };
    // Regardless of whether this script is executing as a CommonJS module
    // or not, return the runtime object so that we can declare the variable
    // regeneratorRuntime in the outer scope, which allows this module to be
    // injected easily by `bin/regenerator --include-runtime script.js`.
    return exports;
}(// If this script is executing as a CommonJS module, use module.exports
// as the regeneratorRuntime namespace. Otherwise create a new empty
// object. Either way, the resulting object will be used to initialize
// the regeneratorRuntime variable at the top of this file.
(0, $c0b0e9e2ffdc921d$exports));
try {
    regeneratorRuntime = $c0b0e9e2ffdc921d$var$runtime;
} catch (accidentalStrictMode) {
    // This module should not be running in strict mode, so the above
    // assignment should always work unless something is misconfigured. Just
    // in case runtime.js accidentally runs in strict mode, in modern engines
    // we can explicitly access globalThis. In older engines we can escape
    // strict mode using a global Function call. This could conceivably fail
    // if a Content Security Policy forbids using Function, but in that case
    // the proper solution is to fix the accidental strict mode problem. If
    // you've misconfigured your bundler to force strict mode and applied a
    // CSP to forbid Function, and you're not willing to fix either of those
    // problems, please detail your unique predicament in a GitHub issue.
    if (typeof globalThis === "object") globalThis.regeneratorRuntime = $c0b0e9e2ffdc921d$var$runtime;
    else Function("r", "regeneratorRuntime = r")($c0b0e9e2ffdc921d$var$runtime);
}


// API location -> https://forkify-api.herokuapp.com/v2
const $51e55805949f51d8$var$controlRecipes = async function() {
    try {
        const id = window.location.hash.slice(1);
        if (!id) return;
        (0, $87c8fee486b3a62a$export$2e2bcd8739ae039).renderSpinner();
        // 0) Updating ResultsView and BookmarkView
        (0, $3b3a807ebcd3404d$export$2e2bcd8739ae039).update($f821677b80d93c23$export$8d7f79465139ab72());
        (0, $5346de1ad3f80d2d$export$2e2bcd8739ae039).update($f821677b80d93c23$export$ca000e230c0caa3e.bookmarks);
        // 1) Loading the recipe
        await $f821677b80d93c23$export$b96725c7a035d60b(id);
        // 2) Rendering the Recipe
        (0, $87c8fee486b3a62a$export$2e2bcd8739ae039).render($f821677b80d93c23$export$ca000e230c0caa3e.recipe);
    } catch (err) {
        (0, $87c8fee486b3a62a$export$2e2bcd8739ae039).renderError();
        console.error(err);
    }
};
const $51e55805949f51d8$var$controlSearchResults = async function() {
    try {
        (0, $3b3a807ebcd3404d$export$2e2bcd8739ae039).renderSpinner();
        // 1) Get search query
        const query = (0, $cc3ccfe7a9f0c093$export$2e2bcd8739ae039).getQuery();
        if (!query) return;
        // 2) Load search results
        await $f821677b80d93c23$export$202b8e5cb363a0c4(query);
        // 3) Render search results
        (0, $3b3a807ebcd3404d$export$2e2bcd8739ae039).render($f821677b80d93c23$export$8d7f79465139ab72(1));
        // 4) Render Initial Pagination View
        (0, $ea55b24677fb9333$export$2e2bcd8739ae039).render($f821677b80d93c23$export$ca000e230c0caa3e.search);
    } catch (err) {
        (0, $3b3a807ebcd3404d$export$2e2bcd8739ae039).renderError();
    }
};
const $51e55805949f51d8$var$controlPagination = function(goToPage) {
    // 1) Render NEW search results
    (0, $3b3a807ebcd3404d$export$2e2bcd8739ae039).render($f821677b80d93c23$export$8d7f79465139ab72(goToPage));
    // 2) Render NEW Pagination View
    (0, $ea55b24677fb9333$export$2e2bcd8739ae039).render($f821677b80d93c23$export$ca000e230c0caa3e.search);
};
const $51e55805949f51d8$var$controlServings = function(newServings) {
    // Update the recipe servings(in state)
    $f821677b80d93c23$export$5e23f4642ecad5ea(newServings);
    // Update the Recipe View
    // recipeView.render(model.state.recipe);
    (0, $87c8fee486b3a62a$export$2e2bcd8739ae039).update($f821677b80d93c23$export$ca000e230c0caa3e.recipe);
};
const $51e55805949f51d8$var$controlAddBookmark = function() {
    // 1) Add/Remove Bookmarks
    if (!$f821677b80d93c23$export$ca000e230c0caa3e.recipe.bookmarked) $f821677b80d93c23$export$72009cc673d27d80($f821677b80d93c23$export$ca000e230c0caa3e.recipe);
    else $f821677b80d93c23$export$136048bcb9946c75($f821677b80d93c23$export$ca000e230c0caa3e.recipe.id);
    // 2) Update Recipe View
    (0, $87c8fee486b3a62a$export$2e2bcd8739ae039).update($f821677b80d93c23$export$ca000e230c0caa3e.recipe);
    // 3) Render bookmarks
    (0, $5346de1ad3f80d2d$export$2e2bcd8739ae039).render($f821677b80d93c23$export$ca000e230c0caa3e.bookmarks);
};
const $51e55805949f51d8$var$controlBookmarks = function() {
    (0, $5346de1ad3f80d2d$export$2e2bcd8739ae039).render($f821677b80d93c23$export$ca000e230c0caa3e.bookmarks);
};
const $51e55805949f51d8$var$controlAddRecipe = async function(newRecipe) {
    try {
        // Show Loading spinner
        (0, $3a43958ee387c94d$export$2e2bcd8739ae039).renderSpinner();
        // Upload the new Recipe Data
        await $f821677b80d93c23$export$d660c2254e74960d(newRecipe);
        // Render Recipe
        (0, $87c8fee486b3a62a$export$2e2bcd8739ae039).render($f821677b80d93c23$export$ca000e230c0caa3e.recipe);
        // Success Message
        (0, $3a43958ee387c94d$export$2e2bcd8739ae039).renderSuccess();
        // Render Bookmark View
        (0, $5346de1ad3f80d2d$export$2e2bcd8739ae039).render($f821677b80d93c23$export$ca000e230c0caa3e.bookmarks);
        // Change ID in URL
        window.history.pushState(null, "", `#${$f821677b80d93c23$export$ca000e230c0caa3e.recipe.id}`);
        // Close Form Window
        setTimeout(function() {
            (0, $3a43958ee387c94d$export$2e2bcd8739ae039)._toggleWindow();
        }, (0, $949cefe0e606d775$export$3ce8858248d89a69) * 1000);
    } catch (err) {
        (0, $3a43958ee387c94d$export$2e2bcd8739ae039).renderError(err.message);
    }
};
const $51e55805949f51d8$var$init = function() {
    (0, $5346de1ad3f80d2d$export$2e2bcd8739ae039).addHandlerRender($51e55805949f51d8$var$controlBookmarks);
    (0, $87c8fee486b3a62a$export$2e2bcd8739ae039).addHandlerRender($51e55805949f51d8$var$controlRecipes);
    (0, $87c8fee486b3a62a$export$2e2bcd8739ae039).addHandlerUpdateServings($51e55805949f51d8$var$controlServings);
    (0, $87c8fee486b3a62a$export$2e2bcd8739ae039).addHandlerAddBookmark($51e55805949f51d8$var$controlAddBookmark);
    (0, $cc3ccfe7a9f0c093$export$2e2bcd8739ae039).addHandlerSearch($51e55805949f51d8$var$controlSearchResults);
    (0, $ea55b24677fb9333$export$2e2bcd8739ae039).addHandlerClick($51e55805949f51d8$var$controlPagination);
    (0, $3a43958ee387c94d$export$2e2bcd8739ae039).addHandlerUpload($51e55805949f51d8$var$controlAddRecipe);
};
$51e55805949f51d8$var$init();


//# sourceMappingURL=index.7cc99426.js.map
