"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var index_1 = __importDefault(require("./routes/api/index"));
var app = (0, express_1.default)();
var port = 3000;
var log = require('debug')('http');
app.listen(port, function () { return log("Listening to port " + port); });
app.use('/api', index_1.default);
app.get('/', function (req, res) {
    var tutorial = "<h1>Image Processor v1.0.0 </h1>\n  <h2>How to resize an image: </h2>\n  <h3>- Place an image in /public/assets/full </h3>\n  <h3>- Open http://localhost:3000/api/images?filename=filename?width=image_width?height=image_height </h3> \n  <h3>&nbsp Example : http://localhost:3000/api/images?filename=santamonica?width=200?height=200 </h3>\n  <h3>- A thumbnail will be generated inside /public/assets/thumb </h3>\n  <h3>- All the generated thumbnails can be accessed using the same link.</h3>";
    res.send(tutorial);
});
exports.default = app;
