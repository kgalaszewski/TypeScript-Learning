// once we define a class with export keyword, from typescript perspective, now it becomes a module

export class Point {
    constructor(public x: number, public y: number) {

    }

    draw(): void {
        console.log('drawing');
    }
}