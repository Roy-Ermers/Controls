var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
define(["require", "exports", "./DOM/Selector"], function (require, exports, Selector_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    Selector_1 = __importDefault(Selector_1);
    Selector_1.default.Path("button");
    console.log("hello");
});
