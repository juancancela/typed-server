(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(1);
	module.exports = __webpack_require__(32);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var Application_1 = __webpack_require__(2);
	var ProfileService_1 = __webpack_require__(10);
	var MessageService_1 = __webpack_require__(28);
	var port = process.env.APP_PORT;
	new Application_1.default([new ProfileService_1.default(), new MessageService_1.default()], port);


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var express = __webpack_require__(3);
	var logger = __webpack_require__(4);
	var bodyParser = __webpack_require__(5);
	var cookieParser = __webpack_require__(6);
	var http = __webpack_require__(7);
	var RouterFactory_1 = __webpack_require__(8);
	var _services = {};
	var app = express();
	/**
	 * Application
	 * @author Juan Carlos Cancela <cancela.juancarlos@gmail.com>
	 */
	var Application = (function () {
	    function Application(services, port) {
	        app.use(logger('dev'));
	        app.use(bodyParser.json());
	        app.use(bodyParser.urlencoded({ extended: false }));
	        app.use(cookieParser());
	        app.use(RouterFactory_1.default.getRouter());
	        app.set('port', port || Application.DEFAULT_PORT);
	        var server = http.createServer(app);
	        server.listen(port || Application.DEFAULT_PORT);
	        server.on('listening', function () {
	            var addr = server.address();
	            var bind = (typeof addr === 'string' ? "pipe " + addr : "port " + addr.port);
	        });
	        services.forEach(function (service) {
	            _services[service.getName()] = service;
	        });
	    }
	    Application.getServiceByName = function (name) {
	        return _services[name];
	    };
	    return Application;
	}());
	Application.DEFAULT_PORT = 3000;
	exports.default = Application;


/***/ }),
/* 3 */
/***/ (function(module, exports) {

	module.exports = require("express");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

	module.exports = require("morgan");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

	module.exports = require("body-parser");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

	module.exports = require("cookie-parser");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

	module.exports = require("http");

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var express = __webpack_require__(3);
	var Method_1 = __webpack_require__(9);
	var router = express.Router();
	/**
	 * Router Factory
	 * @author Juan Carlos Cancela <cancela.juancarlos@gmail.com>
	 */
	var RouterFactory = (function () {
	    function RouterFactory() {
	    }
	    RouterFactory.create = function (method, url, handler) {
	        switch (method) {
	            case Method_1.default.GET:
	                router.get(url, handler);
	                break;
	            case Method_1.default.POST:
	                router.post(url, handler);
	                break;
	            case Method_1.default.PUT:
	                router.put(url, handler);
	                break;
	            case Method_1.default.DELETE:
	                router.delete(url, handler);
	                break;
	        }
	    };
	    RouterFactory.getRouter = function () {
	        return router;
	    };
	    return RouterFactory;
	}());
	exports.default = RouterFactory;


/***/ }),
/* 9 */
/***/ (function(module, exports) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var Method;
	(function (Method) {
	    Method[Method["GET"] = 0] = "GET";
	    Method[Method["PUT"] = 1] = "PUT";
	    Method[Method["POST"] = 2] = "POST";
	    Method[Method["DELETE"] = 3] = "DELETE";
	    Method[Method["OPTIONS"] = 4] = "OPTIONS";
	    Method[Method["PATCH"] = 5] = "PATCH";
	})(Method = exports.Method || (exports.Method = {}));
	exports.default = Method;


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || (function () {
	    var extendStatics = Object.setPrototypeOf ||
	        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
	        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
	    return function (d, b) {
	        extendStatics(d, b);
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	})();
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
	    return new (P || (P = Promise))(function (resolve, reject) {
	        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
	        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
	        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
	        step((generator = generator.apply(thisArg, _arguments || [])).next());
	    });
	};
	var __generator = (this && this.__generator) || function (thisArg, body) {
	    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
	    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
	    function verb(n) { return function (v) { return step([n, v]); }; }
	    function step(op) {
	        if (f) throw new TypeError("Generator is already executing.");
	        while (_) try {
	            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
	            if (y = 0, t) op = [0, t.value];
	            switch (op[0]) {
	                case 0: case 1: t = op; break;
	                case 4: _.label++; return { value: op[1], done: false };
	                case 5: _.label++; y = op[1]; op = [0]; continue;
	                case 7: op = _.ops.pop(); _.trys.pop(); continue;
	                default:
	                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
	                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
	                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
	                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
	                    if (t[2]) _.ops.pop();
	                    _.trys.pop(); continue;
	            }
	            op = body.call(thisArg, _);
	        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
	        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
	    }
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	var Profile_1 = __webpack_require__(11);
	var PostgreRepository_1 = __webpack_require__(16);
	var Method_1 = __webpack_require__(9);
	var Log_1 = __webpack_require__(26);
	var route_1 = __webpack_require__(27);
	var __this;
	var ProfileService = (function (_super) {
	    __extends(ProfileService, _super);
	    function ProfileService() {
	        var _this = _super.call(this, Profile_1.default.RESOURCE_NAME) || this;
	        __this = _this;
	        return _this;
	    }
	    ProfileService.prototype.getProfile = function (req, res, next) {
	        return __awaiter(this, void 0, void 0, function () {
	            var result, err_1;
	            return __generator(this, function (_a) {
	                switch (_a.label) {
	                    case 0:
	                        _a.trys.push([0, 3, , 4]);
	                        return [4 /*yield*/, __this.getById(req.params.id)];
	                    case 1:
	                        result = _a.sent();
	                        return [4 /*yield*/, result.toHAL()];
	                    case 2:
	                        result = _a.sent();
	                        res.send(result);
	                        return [3 /*break*/, 4];
	                    case 3:
	                        err_1 = _a.sent();
	                        res.send(Log_1.default(err_1));
	                        return [3 /*break*/, 4];
	                    case 4: return [2 /*return*/];
	                }
	            });
	        });
	    };
	    ProfileService.prototype.transform = function (obj) {
	        return Profile_1.default.transform(obj);
	    };
	    ProfileService.transform = function (obj) {
	        return Profile_1.default.transform(obj);
	    };
	    ProfileService.prototype.validate = function (obj) {
	        Profile_1.default.validate(obj);
	    };
	    ProfileService.validate = function (obj) {
	        Profile_1.default.validate(obj);
	    };
	    return ProfileService;
	}(PostgreRepository_1.default));
	__decorate([
	    route_1.default(Method_1.default.GET, '/profile/:id'),
	    __metadata("design:type", Function),
	    __metadata("design:paramtypes", [Object, Object, Object]),
	    __metadata("design:returntype", Promise)
	], ProfileService.prototype, "getProfile", null);
	exports.default = ProfileService;


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || (function () {
	    var extendStatics = Object.setPrototypeOf ||
	        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
	        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
	    return function (d, b) {
	        extendStatics(d, b);
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	var Resource_1 = __webpack_require__(12);
	var PersonalInfo_1 = __webpack_require__(15);
	var AppLogEntry_1 = __webpack_require__(13);
	var AppLogType_1 = __webpack_require__(14);
	var Profile = (function (_super) {
	    __extends(Profile, _super);
	    /**
	     * constructor
	     * @param personalInfo personal information of the profile
	     */
	    function Profile(personalInfo, id) {
	        var _this = _super.call(this, Profile.RESOURCE_NAME, id) || this;
	        _this.validate({ personalInfo: personalInfo, id: id });
	        _this.personalInfo = personalInfo;
	        return _this;
	    }
	    Profile.prototype.transform = function (obj) {
	        return Profile.transform(obj);
	    };
	    Profile.transform = function (obj) {
	        return new Profile(PersonalInfo_1.default.transform(obj), obj.id);
	    };
	    Profile.validate = function (obj) {
	        return Profile.validate(obj);
	    };
	    Profile.prototype.validate = function (obj) {
	        try {
	            PersonalInfo_1.default.validate(obj.personalInfo);
	        }
	        catch (err) {
	            throw new AppLogEntry_1.default(AppLogType_1.default.ERROR, "Error transforming Profile instance: Provided input: " + obj, err);
	        }
	    };
	    Profile.prototype.embeddeds = function () {
	        return [];
	    };
	    Profile.getPropertyType = function (propertyName) {
	        if (propertyName.startsWith('personalInfo')) {
	            propertyName = propertyName.split('.')[0];
	            return PersonalInfo_1.default.getPropertyType(propertyName);
	        }
	    };
	    return Profile;
	}(Resource_1.default));
	Profile.RESOURCE_NAME = 'profile';
	exports.default = Profile;


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
	    return new (P || (P = Promise))(function (resolve, reject) {
	        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
	        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
	        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
	        step((generator = generator.apply(thisArg, _arguments || [])).next());
	    });
	};
	var __generator = (this && this.__generator) || function (thisArg, body) {
	    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
	    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
	    function verb(n) { return function (v) { return step([n, v]); }; }
	    function step(op) {
	        if (f) throw new TypeError("Generator is already executing.");
	        while (_) try {
	            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
	            if (y = 0, t) op = [0, t.value];
	            switch (op[0]) {
	                case 0: case 1: t = op; break;
	                case 4: _.label++; return { value: op[1], done: false };
	                case 5: _.label++; y = op[1]; op = [0]; continue;
	                case 7: op = _.ops.pop(); _.trys.pop(); continue;
	                default:
	                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
	                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
	                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
	                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
	                    if (t[2]) _.ops.pop();
	                    _.trys.pop(); continue;
	            }
	            op = body.call(thisArg, _);
	        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
	        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
	    }
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	var AppLogEntry_1 = __webpack_require__(13);
	var AppLogType_1 = __webpack_require__(14);
	var Application_1 = __webpack_require__(2);
	var Resource = (function () {
	    function Resource(name, id) {
	        this.id = id;
	        this.name = name;
	    }
	    Resource.prototype.getName = function () {
	        return this.name;
	    };
	    Resource.prototype.getId = function () {
	        return this.id;
	    };
	    Resource.prototype.toHAL = function () {
	        return __awaiter(this, void 0, void 0, function () {
	            var __this, hal, i, embeddedResource, service, res;
	            return __generator(this, function (_a) {
	                switch (_a.label) {
	                    case 0:
	                        __this = this;
	                        if (!__this.id) {
	                            throw new AppLogEntry_1.default(AppLogType_1.default.ERROR, "A resource must contain an ID to be represented");
	                        }
	                        hal = {
	                            _links: {},
	                            _embedded: {}
	                        };
	                        Object.keys(__this).forEach(function (key) {
	                            hal[key] = __this[key];
	                        });
	                        hal._links = {
	                            self: __this.name + "/" + __this.id
	                        };
	                        i = 0;
	                        _a.label = 1;
	                    case 1:
	                        if (!(i < __this.embeddeds().length)) return [3 /*break*/, 4];
	                        embeddedResource = __this.embeddeds()[i];
	                        service = Application_1.default.getServiceByName(embeddedResource.getResourceName());
	                        return [4 /*yield*/, service.search(embeddedResource.getCriteria())];
	                    case 2:
	                        res = _a.sent();
	                        hal._embedded[embeddedResource.getName()] = res;
	                        _a.label = 3;
	                    case 3:
	                        i++;
	                        return [3 /*break*/, 1];
	                    case 4: return [2 /*return*/, hal];
	                }
	            });
	        });
	    };
	    return Resource;
	}());
	exports.default = Resource;


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var AppLogType_1 = __webpack_require__(14);
	var AppLogEntry = (function () {
	    function AppLogEntry(type, description, stack) {
	        this.type = type;
	        this.date = new Date().toISOString();
	        this.description = description;
	        this.stack = stack;
	    }
	    AppLogEntry.prototype.getLogType = function (id) {
	        switch (id) {
	            case AppLogType_1.default.DEBUG: return 'DEBUG';
	            case AppLogType_1.default.ERROR: return 'ERROR';
	            case AppLogType_1.default.INFO: return 'INFO';
	            case AppLogType_1.default.WARNING: return 'WARNING';
	        }
	    };
	    AppLogEntry.prototype.toJSON = function () {
	        return {
	            type: this.getLogType(this.type),
	            date: this.date,
	            description: this.description,
	            stack: "" + (this.stack ? this.stack : 'N/A')
	        };
	    };
	    return AppLogEntry;
	}());
	exports.default = AppLogEntry;


/***/ }),
/* 14 */
/***/ (function(module, exports) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var AppLogType;
	(function (AppLogType) {
	    AppLogType[AppLogType["DEBUG"] = 0] = "DEBUG";
	    AppLogType[AppLogType["INFO"] = 1] = "INFO";
	    AppLogType[AppLogType["WARNING"] = 2] = "WARNING";
	    AppLogType[AppLogType["ERROR"] = 3] = "ERROR";
	})(AppLogType || (AppLogType = {}));
	exports.default = AppLogType;


/***/ }),
/* 15 */
/***/ (function(module, exports) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var PersonalInfo = (function () {
	    /**
	     * constructor
	     * @param name name of the person
	     * @param lastName last name of the person
	     * @param email email of the person
	     * @param age age of the person
	     * @param bio biography/description of the person
	     * @param photo photo of the person
	     */
	    function PersonalInfo(name, lastName, email, age, bio, photo) {
	        this.validate({ name: name, lastName: lastName, email: email, age: age, bio: bio, photo: photo });
	        this.name = name;
	        this.lastName = lastName;
	        this.email = email;
	        this.age = age;
	        this.bio = bio;
	        this.photo = photo;
	    }
	    PersonalInfo.prototype.transform = function (obj) {
	        return PersonalInfo.transform(obj);
	    };
	    PersonalInfo.transform = function (obj) {
	        return new PersonalInfo(obj.name, obj.lastName, obj.email, obj.age, obj.bio, obj.avatar);
	    };
	    PersonalInfo.prototype.validate = function (obj) {
	        return PersonalInfo.validate(obj);
	    };
	    PersonalInfo.validate = function (obj) {
	        return;
	    };
	    PersonalInfo.getPropertyType = function (propertyName) {
	        switch (propertyName.toLowerCase()) {
	            case 'name': return 'string';
	            case 'lastname': return 'string';
	            case 'email': return 'string';
	            case 'age': return 'int';
	            case 'bio': return 'string';
	            case 'photo': return 'string';
	        }
	    };
	    return PersonalInfo;
	}());
	exports.default = PersonalInfo;


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
	    return new (P || (P = Promise))(function (resolve, reject) {
	        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
	        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
	        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
	        step((generator = generator.apply(thisArg, _arguments || [])).next());
	    });
	};
	var __generator = (this && this.__generator) || function (thisArg, body) {
	    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
	    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
	    function verb(n) { return function (v) { return step([n, v]); }; }
	    function step(op) {
	        if (f) throw new TypeError("Generator is already executing.");
	        while (_) try {
	            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
	            if (y = 0, t) op = [0, t.value];
	            switch (op[0]) {
	                case 0: case 1: t = op; break;
	                case 4: _.label++; return { value: op[1], done: false };
	                case 5: _.label++; y = op[1]; op = [0]; continue;
	                case 7: op = _.ops.pop(); _.trys.pop(); continue;
	                default:
	                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
	                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
	                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
	                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
	                    if (t[2]) _.ops.pop();
	                    _.trys.pop(); continue;
	            }
	            op = body.call(thisArg, _);
	        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
	        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
	    }
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	var PostgreCriteria_1 = __webpack_require__(17);
	var AppLogEntry_1 = __webpack_require__(13);
	var AppLogType_1 = __webpack_require__(14);
	var pool = __webpack_require__(19);
	/**
	 * PostgreSql Repository
	 * @author Juan Carlos Cancela <cancela.juancarlos@gmail.com>
	 */
	var PostgreRepository = (function () {
	    function PostgreRepository(name) {
	        this.name = name;
	    }
	    PostgreRepository.prototype.getName = function () {
	        return this.name;
	    };
	    PostgreRepository.prototype.searchByRequest = function (request, mapper) {
	        return __awaiter(this, void 0, void 0, function () {
	            var criteria, res;
	            return __generator(this, function (_a) {
	                switch (_a.label) {
	                    case 0:
	                        criteria = PostgreCriteria_1.default.create(request, mapper);
	                        return [4 /*yield*/, this.search(criteria)];
	                    case 1:
	                        res = _a.sent();
	                        return [2 /*return*/, res];
	                }
	            });
	        });
	    };
	    PostgreRepository.prototype.search = function (criteria) {
	        return __awaiter(this, void 0, void 0, function () {
	            var __this, resolvedCriteria, res, _res_1, rows, err_1;
	            return __generator(this, function (_a) {
	                switch (_a.label) {
	                    case 0:
	                        __this = this;
	                        _a.label = 1;
	                    case 1:
	                        _a.trys.push([1, 3, , 4]);
	                        resolvedCriteria = criteria.resolve();
	                        return [4 /*yield*/, pool.query("SELECT * FROM " + this.getName() + " WHERE " + resolvedCriteria.statement.toUpperCase(), resolvedCriteria.values)];
	                    case 2:
	                        res = _a.sent();
	                        if (res.rows.length === 0) {
	                            throw new AppLogEntry_1.default(AppLogType_1.default.INFO, "Does not exist any " + this.getName());
	                        }
	                        else {
	                            _res_1 = [];
	                            rows = res['rows'];
	                            rows.forEach(function (row) {
	                                _res_1.push(__this.transform(row));
	                            });
	                            return [2 /*return*/, _res_1];
	                        }
	                        return [3 /*break*/, 4];
	                    case 3:
	                        err_1 = _a.sent();
	                        throw new AppLogEntry_1.default(AppLogType_1.default.ERROR, "Failed to execute PostgreRepository.search(" + JSON.stringify(resolvedCriteria) + ")");
	                    case 4: return [2 /*return*/];
	                }
	            });
	        });
	    };
	    PostgreRepository.prototype.getById = function (id) {
	        return __awaiter(this, void 0, void 0, function () {
	            var res, row, err_2;
	            return __generator(this, function (_a) {
	                switch (_a.label) {
	                    case 0:
	                        _a.trys.push([0, 2, , 3]);
	                        return [4 /*yield*/, pool.query("SELECT * FROM " + this.getName() + " WHERE ID=$1::bigint", [id])];
	                    case 1:
	                        res = _a.sent();
	                        if (res.rows.length === 0) {
	                            throw new AppLogEntry_1.default(AppLogType_1.default.INFO, "Does not exist a " + this.getName() + " with id: " + id);
	                        }
	                        else {
	                            row = res['rows'][0];
	                            return [2 /*return*/, this.transform(row)];
	                        }
	                        return [3 /*break*/, 3];
	                    case 2:
	                        err_2 = _a.sent();
	                        throw err_2;
	                    case 3: return [2 /*return*/];
	                }
	            });
	        });
	    };
	    PostgreRepository.prototype.create = function (instance) {
	        throw new Error('Method not implemented.');
	    };
	    PostgreRepository.prototype.update = function (id, updatedInstance) {
	        throw new Error('Method not implemented.');
	    };
	    PostgreRepository.prototype.delete = function (id) {
	        throw new Error('Method not implemented.');
	    };
	    return PostgreRepository;
	}());
	exports.default = PostgreRepository;


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var QueryTuple_1 = __webpack_require__(18);
	var utils_postgre_1 = __webpack_require__(19);
	var PostgreCriteria = (function () {
	    function PostgreCriteria(tuples) {
	        this.tuples = tuples;
	    }
	    PostgreCriteria.prototype.getTuples = function () {
	        return this.tuples;
	    };
	    PostgreCriteria.prototype.resolve = function () {
	        var _this = this;
	        var statement = " ";
	        var values = [];
	        this.tuples.forEach(function (tuple, idx) {
	            var fieldPosition = idx + 1;
	            values.push(tuple.fieldValue);
	            //TODO In next line, equals is hardcoded. Based on Op type, it would transform criteria statement
	            statement += tuple.fieldName + "::" + tuple.fieldType + "=$" + fieldPosition;
	            _this.tuples.length < idx ? statement += " AND " : '';
	        });
	        return { statement: statement, values: values };
	    };
	    PostgreCriteria.prototype.create = function (request, mapper) {
	        return PostgreCriteria.create(request, mapper);
	    };
	    PostgreCriteria.create = function (request, mapper) {
	        var tuples = [];
	        Object.keys(request.query).forEach(function (key) {
	            tuples.push(new QueryTuple_1.default(key, request.query.key, mapper(request.query.key), utils_postgre_1.resolveOperation(key)));
	        });
	        //TODO Add logic to extract req.params!
	        return new PostgreCriteria(tuples);
	    };
	    return PostgreCriteria;
	}());
	exports.default = PostgreCriteria;


/***/ }),
/* 18 */
/***/ (function(module, exports) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var QueryTuple = (function () {
	    function QueryTuple(fieldName, fieldValue, fieldType, operation) {
	        this.fieldName = fieldName;
	        this.fieldValue = fieldValue;
	        this.fieldType = fieldType;
	        this.operation = operation;
	    }
	    QueryTuple.prototype.getFieldName = function () {
	        return this.fieldName;
	    };
	    QueryTuple.prototype.getFieldValue = function () {
	        return this.fieldValue;
	    };
	    QueryTuple.prototype.getFieldType = function () {
	        return this.fieldType;
	    };
	    QueryTuple.prototype.getOperation = function () {
	        return this.operation;
	    };
	    return QueryTuple;
	}());
	exports.default = QueryTuple;


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var QueryTupleOperation_1 = __webpack_require__(20);
	var props = __webpack_require__(21);
	var pg = __webpack_require__(25);
	var pool = new pg.Pool(props().postgresql);
	pool.on('error', function (err, client) {
	    console.error('idle client error', err.message, err.stack);
	});
	module.exports.query = function (text, values, callback) {
	    return pool.query(text, values, callback);
	};
	module.exports.connect = function (callback) {
	    return pool.connect(callback);
	};
	module.exports.resolveTuple = function (op) {
	    switch (op) {
	        case QueryTupleOperation_1.default.CONTAINS: return '';
	        case QueryTupleOperation_1.default.EQUALS: return '';
	        case QueryTupleOperation_1.default.GREATER_THAN: return '';
	        case QueryTupleOperation_1.default.LESSER_THAN: return '';
	    }
	};
	function resolveOperation(key) {
	    var _containsPrefix = function (key) {
	        return !key || key[2] != '_' || key.length < 3;
	    };
	    if (!_containsPrefix(key))
	        return QueryTupleOperation_1.default.EQUALS;
	    var opPrefix = key.substring(0, 3).toLowerCase();
	    switch (opPrefix) {
	        case 'eq': return QueryTupleOperation_1.default.EQUALS;
	        case 'gt': return QueryTupleOperation_1.default.GREATER_THAN;
	        case 'lt': return QueryTupleOperation_1.default.LESSER_THAN;
	        case 'ct': return QueryTupleOperation_1.default.CONTAINS;
	        default: return QueryTupleOperation_1.default.EQUALS;
	    }
	}
	exports.resolveOperation = resolveOperation;


/***/ }),
/* 20 */
/***/ (function(module, exports) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var QueryTupleOperation;
	(function (QueryTupleOperation) {
	    QueryTupleOperation[QueryTupleOperation["EQUALS"] = 0] = "EQUALS";
	    QueryTupleOperation[QueryTupleOperation["GREATER_THAN"] = 1] = "GREATER_THAN";
	    QueryTupleOperation[QueryTupleOperation["LESSER_THAN"] = 2] = "LESSER_THAN";
	    QueryTupleOperation[QueryTupleOperation["CONTAINS"] = 3] = "CONTAINS";
	})(QueryTupleOperation = exports.QueryTupleOperation || (exports.QueryTupleOperation = {}));
	exports.default = QueryTupleOperation;


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var local = __webpack_require__(22);
	var dev = __webpack_require__(23);
	var prod = __webpack_require__(24);
	function properties() {
	    switch (process.env.APP_ENV) {
	        case 'local': return local.default;
	        case 'dev': return dev.default;
	        case 'prod': return prod.default;
	        default: return local.default;
	    }
	}
	module.exports = properties;


/***/ }),
/* 22 */
/***/ (function(module, exports) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = {
	    "postgresql": {
	        "user": "juan",
	        "database": "autokal",
	        "password": "travel",
	        "host": "localhost",
	        "port": 5432,
	        "max": 10,
	        "idleTimeoutMillis": 30000
	    }
	};


/***/ }),
/* 23 */
/***/ (function(module, exports) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = {
	    "postgresql": {
	        "user": "juan",
	        "database": "autokal",
	        "password": "travel",
	        "host": "localhost",
	        "port": 5432,
	        "max": 10,
	        "idleTimeoutMillis": 30000
	    }
	};


/***/ }),
/* 24 */
/***/ (function(module, exports) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = {
	    "postgresql": {
	        "user": "juan",
	        "database": "autokal",
	        "password": "travel",
	        "host": "localhost",
	        "port": 5432,
	        "max": 10,
	        "idleTimeoutMillis": 30000
	    }
	};


/***/ }),
/* 25 */
/***/ (function(module, exports) {

	module.exports = require("pg");

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var AppLogEntry_1 = __webpack_require__(13);
	function Log(err) {
	    if (err instanceof AppLogEntry_1.default) {
	        return err.toJSON();
	    }
	    else {
	        return err.toJSON();
	    }
	}
	exports.default = Log;


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var RouterFactory_1 = __webpack_require__(8);
	function route(verb, url) {
	    return function (target, propertyKey, descriptor) {
	        RouterFactory_1.default.create(verb, url, target[propertyKey]);
	    };
	}
	exports.default = route;


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || (function () {
	    var extendStatics = Object.setPrototypeOf ||
	        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
	        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
	    return function (d, b) {
	        extendStatics(d, b);
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	})();
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
	    return new (P || (P = Promise))(function (resolve, reject) {
	        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
	        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
	        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
	        step((generator = generator.apply(thisArg, _arguments || [])).next());
	    });
	};
	var __generator = (this && this.__generator) || function (thisArg, body) {
	    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
	    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
	    function verb(n) { return function (v) { return step([n, v]); }; }
	    function step(op) {
	        if (f) throw new TypeError("Generator is already executing.");
	        while (_) try {
	            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
	            if (y = 0, t) op = [0, t.value];
	            switch (op[0]) {
	                case 0: case 1: t = op; break;
	                case 4: _.label++; return { value: op[1], done: false };
	                case 5: _.label++; y = op[1]; op = [0]; continue;
	                case 7: op = _.ops.pop(); _.trys.pop(); continue;
	                default:
	                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
	                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
	                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
	                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
	                    if (t[2]) _.ops.pop();
	                    _.trys.pop(); continue;
	            }
	            op = body.call(thisArg, _);
	        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
	        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
	    }
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	var Message_1 = __webpack_require__(29);
	var PostgreRepository_1 = __webpack_require__(16);
	var Method_1 = __webpack_require__(9);
	var Log_1 = __webpack_require__(26);
	var route_1 = __webpack_require__(27);
	var __this;
	var MessageService = (function (_super) {
	    __extends(MessageService, _super);
	    function MessageService() {
	        var _this = _super.call(this, Message_1.default.RESOURCE_NAME) || this;
	        __this = _this;
	        return _this;
	    }
	    MessageService.prototype.searchForMessages = function (req, res, next) {
	        return __awaiter(this, void 0, void 0, function () {
	            var result, halResult, err_1;
	            return __generator(this, function (_a) {
	                switch (_a.label) {
	                    case 0:
	                        _a.trys.push([0, 3, , 4]);
	                        return [4 /*yield*/, __this.searchByRequest(req, Message_1.default.getPropertyType)];
	                    case 1:
	                        result = _a.sent();
	                        return [4 /*yield*/, result.toHAL()];
	                    case 2:
	                        halResult = _a.sent();
	                        res.send(halResult);
	                        return [3 /*break*/, 4];
	                    case 3:
	                        err_1 = _a.sent();
	                        res.send(Log_1.default(err_1));
	                        return [3 /*break*/, 4];
	                    case 4: return [2 /*return*/];
	                }
	            });
	        });
	    };
	    MessageService.prototype.getMessageById = function (req, res, next) {
	        return __awaiter(this, void 0, void 0, function () {
	            var result, halResult, err_2;
	            return __generator(this, function (_a) {
	                switch (_a.label) {
	                    case 0:
	                        _a.trys.push([0, 3, , 4]);
	                        return [4 /*yield*/, __this.getById(req.params.message_id)];
	                    case 1:
	                        result = _a.sent();
	                        return [4 /*yield*/, result.toHAL()];
	                    case 2:
	                        halResult = _a.sent();
	                        res.send(halResult);
	                        return [3 /*break*/, 4];
	                    case 3:
	                        err_2 = _a.sent();
	                        res.send(Log_1.default(err_2));
	                        return [3 /*break*/, 4];
	                    case 4: return [2 /*return*/];
	                }
	            });
	        });
	    };
	    MessageService.prototype.transform = function (obj) {
	        return Message_1.default.transform(obj);
	    };
	    /**
	     * Transforms the result from a repository to a typed Resource instance
	     * @param obj A non typed, raw from DB profile
	     */
	    MessageService.transform = function (obj) {
	        return Message_1.default.transform(obj);
	    };
	    MessageService.prototype.validate = function (obj) {
	        Message_1.default.validate(obj);
	    };
	    MessageService.validate = function (obj) {
	        Message_1.default.validate(obj);
	    };
	    return MessageService;
	}(PostgreRepository_1.default));
	__decorate([
	    route_1.default(Method_1.default.GET, '/profile/:profile_id/message'),
	    __metadata("design:type", Function),
	    __metadata("design:paramtypes", [Object, Object, Object]),
	    __metadata("design:returntype", Promise)
	], MessageService.prototype, "searchForMessages", null);
	__decorate([
	    route_1.default(Method_1.default.GET, '/profile/:profile_id/message/:message_id'),
	    __metadata("design:type", Function),
	    __metadata("design:paramtypes", [Object, Object, Object]),
	    __metadata("design:returntype", Promise)
	], MessageService.prototype, "getMessageById", null);
	exports.default = MessageService;


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || (function () {
	    var extendStatics = Object.setPrototypeOf ||
	        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
	        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
	    return function (d, b) {
	        extendStatics(d, b);
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	var Resource_1 = __webpack_require__(12);
	var EmbeddedResource_1 = __webpack_require__(30);
	var PostgreCriteria_1 = __webpack_require__(17);
	var MessageSocialInfo_1 = __webpack_require__(31);
	var QueryTuple_1 = __webpack_require__(18);
	var QueryTupleOperation_1 = __webpack_require__(20);
	var Profile_1 = __webpack_require__(11);
	var Message = (function (_super) {
	    __extends(Message, _super);
	    /**
	     * constructor
	     * @param value
	     * @param date
	     * @param messageSocialInfo
	     * @param profileId
	     * @param id
	     */
	    function Message(value, date, messageSocialInfo, profileId, id) {
	        var _this = _super.call(this, Message.RESOURCE_NAME, id) || this;
	        _this.validate({ value: value, date: date, messageSocialInfo: messageSocialInfo, profileId: profileId, id: id });
	        _this.value = value;
	        _this.date = date;
	        _this.messageSocialInfo = messageSocialInfo;
	        _this.profileId = profileId;
	        return _this;
	    }
	    Message.prototype.embeddeds = function () {
	        return [
	            new EmbeddedResource_1.default('profile', Profile_1.default.RESOURCE_NAME, new PostgreCriteria_1.default([new QueryTuple_1.default('id', this.profileId, 'bigint', QueryTupleOperation_1.default.EQUALS)]))
	        ];
	    };
	    Message.prototype.transform = function (obj) {
	        return Message.transform(obj);
	    };
	    Message.transform = function (obj) {
	        var messageSocialInfo = {
	            likecounter: parseInt(obj.likecounter),
	            lovecounter: parseInt(obj.lovecounter),
	            funcounter: parseInt(obj.funcounter),
	            wowcounter: parseInt(obj.wowcounter),
	            sadcounter: parseInt(obj.sadcounter),
	            angrycounter: parseInt(obj.angrycounter),
	            reportcounter: parseInt(obj.reportcounter)
	        };
	        return new Message(obj.value, obj.date, MessageSocialInfo_1.default.transform(messageSocialInfo), obj.profileid, obj.id);
	    };
	    Message.prototype.validate = function (obj) {
	        return Message.validate(obj);
	    };
	    Message.validate = function (obj) {
	        return;
	    };
	    Message.getPropertyType = function (propertyName) {
	        if (propertyName.startsWith('messageSocialInfo')) {
	            propertyName = propertyName.split('.')[0];
	            return MessageSocialInfo_1.default.getPropertyType(propertyName);
	        }
	        switch (propertyName.toLocaleLowerCase()) {
	            case 'id': return 'bigint';
	            case 'date': return 'bigint';
	            case 'profileId': return 'bigint';
	        }
	    };
	    return Message;
	}(Resource_1.default));
	Message.RESOURCE_NAME = 'message';
	exports.default = Message;


/***/ }),
/* 30 */
/***/ (function(module, exports) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var EmbeddedResource = (function () {
	    function EmbeddedResource(name, resourceName, criteria) {
	        this.name = name;
	        this.resourceName = resourceName;
	        this.criteria = criteria;
	    }
	    EmbeddedResource.prototype.getName = function () {
	        return this.name;
	    };
	    EmbeddedResource.prototype.getCriteria = function () {
	        return this.criteria;
	    };
	    EmbeddedResource.prototype.getResourceName = function () {
	        return this.resourceName;
	    };
	    return EmbeddedResource;
	}());
	exports.default = EmbeddedResource;


/***/ }),
/* 31 */
/***/ (function(module, exports) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var MessageSocialInfo = (function () {
	    /**
	     * constructor
	     * @param likeCounter # of times message has been marked as like
	     * @param loveCounter # of times message has been marked as love
	     * @param funCounter # of times message has been marked as fun
	     * @param wowCounter # of times message has been marked as wow
	     * @param sadCounter # of times message has been marked as sad
	     * @param angryCounter # of times message has been marked as angry
	     * @param reportCounter # of times message has been reported
	     */
	    function MessageSocialInfo(likeCounter, loveCounter, funCounter, wowCounter, sadCounter, angryCounter, reportCounter) {
	        this.validate({ likeCounter: likeCounter, loveCounter: loveCounter, funCounter: funCounter, wowCounter: wowCounter, sadCounter: sadCounter, angryCounter: angryCounter, reportCounter: reportCounter });
	        this.likeCounter = likeCounter;
	        this.loveCounter = loveCounter;
	        this.funCounter = funCounter;
	        this.wowCounter = wowCounter;
	        this.sadCounter = sadCounter;
	        this.angryCounter = angryCounter;
	        this.reportCounter = reportCounter;
	    }
	    MessageSocialInfo.prototype.transform = function (obj) {
	        return MessageSocialInfo.transform(obj);
	    };
	    MessageSocialInfo.transform = function (obj) {
	        return new MessageSocialInfo(obj.likecounter, obj.lovecounter, obj.funcounter, obj.wowcounter, obj.sadcounter, obj.angrycounter, obj.reportcounter);
	    };
	    MessageSocialInfo.prototype.validate = function (obj) {
	        return MessageSocialInfo.validate(obj);
	    };
	    MessageSocialInfo.validate = function (obj) {
	        return;
	    };
	    MessageSocialInfo.getPropertyType = function (propertyName) {
	        switch (propertyName.toLowerCase()) {
	            case 'likeCounter': return 'int';
	            case 'loveCounter': return 'int';
	            case 'funCounter': return 'int';
	            case 'wowCounter': return 'int';
	            case 'sadCounter': return 'int';
	            case 'angryCounter': return 'int';
	            case 'reportCounter': return 'int';
	        }
	    };
	    return MessageSocialInfo;
	}());
	exports.default = MessageSocialInfo;


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

	const root = __webpack_require__(33).path;
	
	module.exports = {
	    entry: `${root}/src/start.ts`,
	    target: 'node',
	    externals: [
	        /^[a-z\-0-9]+$/ // Ignore node_modules folder
	    ],
	    output: {
	        filename: 'app.js',
	        path: `${root}/build`,
	        libraryTarget: "commonjs"
	    },
	    resolve: {
	        // Add in `.ts` and `.tsx` as a resolvable extension.
	        extensions: ['', '.webpack.js', '.web.js', '.ts', '.tsx', '.js'],
	    },
	    resolveLoader: {
	        root: [`${root}/node_modules`]
	    },
	    module: {
	        loaders: [{
	            // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
	            test: /\.tsx?$/,
	            exclude: 'node_modules',
	            loader: 'ts-loader'
	        }]
	    },
	    devtool: '#source-map'
	};

/***/ }),
/* 33 */
/***/ (function(module, exports) {

	module.exports = require("app-root-path");

/***/ })
/******/ ])));
//# sourceMappingURL=app.js.map