"use strict";
// queue.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.Queue = void 0;
class Queue {
    items = [];
    enqueue(item) {
        this.items.push(item); // adiciona no fim
    }
    dequeue() {
        return this.items.shift(); // remove do início
    }
    isEmpty() {
        return this.items.length === 0;
    }
    printQueue() {
        console.log("Fila atual:", this.items);
    }
    size() {
        return this.items.length;
    }
    peek() {
        return this.items[0]; // vê o primeiro sem remover
    }
}
exports.Queue = Queue;
//# sourceMappingURL=queue.js.map