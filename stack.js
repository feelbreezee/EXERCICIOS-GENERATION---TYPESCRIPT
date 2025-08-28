"use strict";
// stack.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.Stack = void 0;
var Stack = /** @class */ (function () {
    function Stack() {
        this.items = [];
    }
    Stack.prototype.push = function (item) {
        this.items.push(item); // adiciona no topo
    };
    Stack.prototype.pop = function () {
        return this.items.pop(); // remove do topo
    };
    Stack.prototype.isEmpty = function () {
        return this.items.length === 0;
    };
    Stack.prototype.printStack = function () {
        console.log("Livros na pilha:", this.items);
    };
    Stack.prototype.peek = function () {
        return this.items[this.items.length - 1];
    };
    Stack.prototype.size = function () {
        return this.items.length;
    };
    return Stack;
}());
exports.Stack = Stack;
