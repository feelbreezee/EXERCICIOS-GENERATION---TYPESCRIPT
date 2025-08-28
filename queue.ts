// queue.ts

export class Queue<T> {
    private items: T[] = [];

    enqueue(item: T): void {
        this.items.push(item); // adiciona no fim
    }

    dequeue(): T | undefined {
        return this.items.shift(); // remove do início
    }

    isEmpty(): boolean {
        return this.items.length === 0;
    }

    printQueue(): void {
        console.log("Fila atual:", this.items);
    }

    size(): number {
        return this.items.length;
    }

    peek(): T | undefined {
        return this.items[0]; // vê o primeiro sem remover
    }
}
