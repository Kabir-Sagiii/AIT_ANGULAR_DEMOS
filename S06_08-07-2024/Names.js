"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.printFullName = exports.username = void 0;
exports.username = "Raj Verma"; //Named Export
function printFullName() {
    console.log("Executed");
    console.log(exports.username);
}
exports.printFullName = printFullName;
