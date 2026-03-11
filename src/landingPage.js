"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
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
var react_1 = require("react");
require("./LandingPage.css");
var react_router_dom_1 = require("react-router-dom");
function LandingPage() {
    var _this = this;
    var navigate = (0, react_router_dom_1.useNavigate)();
    var handleHomeClick = function () { return __awaiter(_this, void 0, void 0, function () {
        var res, data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch("")];
                case 1:
                    res = _a.sent();
                    return [4 /*yield*/, res.json()];
                case 2:
                    data = _a.sent();
                    if (res.ok) {
                        navigate("/");
                        console.log(data);
                    }
                    else {
                        console.log("Login failed");
                    }
                    return [2 /*return*/];
            }
        });
    }); };
    var handleCoursesClick = function () { return __awaiter(_this, void 0, void 0, function () {
        var res, data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch("")];
                case 1:
                    res = _a.sent();
                    return [4 /*yield*/, res.json()];
                case 2:
                    data = _a.sent();
                    if (res.ok) {
                        navigate("/");
                        console.log(data);
                    }
                    else {
                        console.log("Login failed");
                    }
                    return [2 /*return*/];
            }
        });
    }); };
    var handleCareersClick = function () { return __awaiter(_this, void 0, void 0, function () {
        var res, data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch("")];
                case 1:
                    res = _a.sent();
                    return [4 /*yield*/, res.json()];
                case 2:
                    data = _a.sent();
                    if (res.ok) {
                        navigate("/");
                        console.log(data);
                    }
                    else {
                        console.log("Login failed");
                    }
                    return [2 /*return*/];
            }
        });
    }); };
    var handleBlogClick = function () { return __awaiter(_this, void 0, void 0, function () {
        var res, data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch("")];
                case 1:
                    res = _a.sent();
                    return [4 /*yield*/, res.json()];
                case 2:
                    data = _a.sent();
                    if (res.ok) {
                        navigate("/");
                        console.log(data);
                    }
                    else {
                        console.log("Login failed");
                    }
                    return [2 /*return*/];
            }
        });
    }); };
    var handleAboutClick = function () { return __awaiter(_this, void 0, void 0, function () {
        var res, data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch("")];
                case 1:
                    res = _a.sent();
                    return [4 /*yield*/, res.json()];
                case 2:
                    data = _a.sent();
                    if (res.ok) {
                        navigate("/");
                        console.log(data);
                    }
                    else {
                        console.log("Login failed");
                    }
                    return [2 /*return*/];
            }
        });
    }); };
    var handleLoginClick = function () { return __awaiter(_this, void 0, void 0, function () {
        var res, data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch("")];
                case 1:
                    res = _a.sent();
                    return [4 /*yield*/, res.json()];
                case 2:
                    data = _a.sent();
                    if (res.ok) {
                        navigate("/");
                        console.log(data);
                    }
                    else {
                        console.log("Login failed");
                    }
                    return [2 /*return*/];
            }
        });
    }); };
    var handleSignClick = function () { return __awaiter(_this, void 0, void 0, function () {
        var res, data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch("")];
                case 1:
                    res = _a.sent();
                    return [4 /*yield*/, res.json()];
                case 2:
                    data = _a.sent();
                    if (res.ok) {
                        navigate("/");
                        console.log(data);
                    }
                    else {
                        console.log("Login failed");
                    }
                    return [2 /*return*/];
            }
        });
    }); };
    var handleJoinClick = function () { return __awaiter(_this, void 0, void 0, function () {
        var res, data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch("")];
                case 1:
                    res = _a.sent();
                    return [4 /*yield*/, res.json()];
                case 2:
                    data = _a.sent();
                    if (res.ok) {
                        navigate("/");
                        console.log(data);
                    }
                    else {
                        console.log("Login failed");
                    }
                    return [2 /*return*/];
            }
        });
    }); };
    var handleWatchClick = function () { return __awaiter(_this, void 0, void 0, function () {
        var res, data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch("")];
                case 1:
                    res = _a.sent();
                    return [4 /*yield*/, res.json()];
                case 2:
                    data = _a.sent();
                    if (res.ok) {
                        navigate("/");
                        console.log(data);
                    }
                    else {
                        console.log("Login failed");
                    }
                    return [2 /*return*/];
            }
        });
    }); };
    var handleDownCodeClick = function () { return __awaiter(_this, void 0, void 0, function () {
        var res, data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch("")];
                case 1:
                    res = _a.sent();
                    return [4 /*yield*/, res.json()];
                case 2:
                    data = _a.sent();
                    if (res.ok) {
                        navigate("/");
                        console.log(data);
                    }
                    else {
                        console.log("Login failed");
                    }
                    return [2 /*return*/];
            }
        });
    }); };
    var handleCodeClick = function () { return __awaiter(_this, void 0, void 0, function () {
        var res, data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch("")];
                case 1:
                    res = _a.sent();
                    return [4 /*yield*/, res.json()];
                case 2:
                    data = _a.sent();
                    if (res.ok) {
                        navigate("/");
                        console.log(data);
                    }
                    else {
                        console.log("Login failed");
                    }
                    return [2 /*return*/];
            }
        });
    }); };
    var handlevideoClick = function () { return __awaiter(_this, void 0, void 0, function () {
        var res, data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch("")];
                case 1:
                    res = _a.sent();
                    return [4 /*yield*/, res.json()];
                case 2:
                    data = _a.sent();
                    if (res.ok) {
                        navigate("/");
                        console.log(data);
                    }
                    else {
                        console.log("Login failed");
                    }
                    return [2 /*return*/];
            }
        });
    }); };
    var handleFeaturesClick = function () { return __awaiter(_this, void 0, void 0, function () {
        var res, data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch("")];
                case 1:
                    res = _a.sent();
                    return [4 /*yield*/, res.json()];
                case 2:
                    data = _a.sent();
                    if (res.ok) {
                        navigate("/");
                        console.log(data);
                    }
                    else {
                        console.log("Login failed");
                    }
                    return [2 /*return*/];
            }
        });
    }); };
    var handleSubscribeClick = function () {
    };
    return (<div id='landing'>
            <div id='firstSection' style={{ background: "#3548A7", width: "1380.64px", height: "850.9px", marginRight: "21.14px", marginTop: "10.85px" }}>
                <header>
                    <button className='headerButton' onClick={handleHomeClick}>Home</button>
                    <button className='headerButton' onClick={handleCoursesClick}>Courses</button>
                    <button className='headerButton' onClick={handleCareersClick}>Careers</button>
                    <button className='headerButton' onClick={handleBlogClick}>Blog</button>
                    <button className='headerButton' onClick={handleAboutClick}>About us</button>
                    <button id='loginButton' onClick={handleLoginClick}>login</button>
                    <button id='signButton' onClick={handleSignClick}>sign up</button>
                </header>
                <div id='headerSection'>
                    <h2><span style={{ color: '#F48C06' }}>Studying</span> online is now easier</h2>
                    <h3>TOTC is an interesting platform that will teach you in more an interactive way</h3>
                    <button id='joinButton' onClick={handleJoinClick}>join for free</button>
                    <button id='watchbutton'><span id="circle" onClick={handleWatchClick}><span id="triangle"></span></span>watch how it works</button>
                </div>
                <img id='firstGirl'></img>
                <img id='notif'></img>
            </div>
            <div id='secondSection'>
                <h3>What is "<span style={{ color: '#65DAFF' }}>name of the platform</span>"?</h3>
                <p> is a platform that allows educators to create online classes whereby they can store the course materials online; manage assignments, quizzes and exams; monitor due dates; grade results and provide students with feedback all in one place.</p>
                <div className='code'>
                    <img>
                        <p>FORNTHE FOWN SYNDROME</p>
                        <button onClick={handleDownCodeClick}>Enter access code</button>
                    </img>
                </div>
                <div className='code'>
                    <img>
                        <p>FOR THE STUDENTS</p>
                        <button onClick={handleCodeClick}>Enter access code</button>
                    </img>
                </div>
                <div id='PNText'>
                    <div></div>
                    <h4>Everything you can do in a physical classroom, <span style={{ color: '#5933EF' }}>you can do with PN</span></h4>
                    <p>PNs school management software helps traditional and online schools manage scheduling, attendance, payments and virtual classrooms all in one secure cloud-based system.</p>
                    <a>Learn more</a>
                </div>
                <div id='video'>
                    <div id="rectangleVideo1"></div>
                    <div id="rectangleVideo2"></div>
                    <div id="whiteCircle"></div>
                    <div id="blueTriangle"></div>
                    <video onClick={handlevideoClick}></video>
                </div>
                <div id="blueCircle"></div>
                <div id="smallPurpleCircle"></div>
            </div>
            <div id='thirdSection'>
                <h4>Our Features</h4>
                <p>this very extreodinary feature , can make learning activities more efficient</p>
                <div className='text'>
                    <h4><span style={{ color: '#5933EF' }}>tools</span> for teachers and learners</h4>
                    <p>class has a dynamic set of teaching tools built to be devloped and used during class teachers canhandout asignments in real time for students to complete and submit </p>
                </div>
                <img id='secondGirl'></img>
                <img id='gradeBook'></img>
                <div className='text'>
                    <h4>assesments, <span style={{ color: '#5933EF' }}>Quizzes</span>, tests</h4>
                    <p>easily launch live assignments , quizzes and tests . students results are automatically entered in the online gradebook</p>
                </div>
                <div className='text'>
                    <h4><span style={{ color: '#5933EF' }}>Class Management</span> tools for educators</h4>
                    <p>class provides tools to help run and manage the class such as class roster , atttendant and more with the gradebook , teachers can review and grade tests and and quizzes in real time </p>
                </div>
                <div className='text'>
                    <h4><span style={{ color: '#5933EF' }}>One-on-One</span> discussions</h4>
                    <p>teachers and teacher assistants can talk with students privatly without leaving the zoom environment</p>
                </div>
                <img id='thirdGirl'></img>
                <div id="purpleCircle"></div>
            </div>
            <button id='featureButton' onClick={handleFeaturesClick}>see more features</button>
            <div id='fourthSection'>
                <div id='line'></div>
                <p id='virtuelText'>virtual class for zoom</p>
                <p id='susbcribeText'>subscribe to get out newsketter</p>
                <input></input>
                <button id='subscribeButton' onClick={handleSubscribeClick}>subscribe</button>
                <p id='footerLinks'>Careers | Privacy policy | terms & conditions </p>
                <p id="last">© 2021 Class Technologies Inc. </p>
            </div>
        </div>);
}
exports.default = LandingPage;
