// stack.ts

export class Stack<T> {
    private items: T[] = [];

    push(item: T): void {
        this.items.push(item); // adiciona no topo
    }

    pop(): T | undefined {
        return this.items.pop(); // remove do topo
    }

    isEmpty(): boolean {
        return this.items.length === 0;
    }

    printStack(): void {
        console.log("Livros na pilha:", this.items);
    }

    peek(): T | undefined {
        return this.items[this.items.length - 1];
    }

    size(): number {
        return this.items.length;
    }
}
