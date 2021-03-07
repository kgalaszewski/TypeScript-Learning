import { Point } from './Point';
// when we import something inside the file, it is also the module for typescript


class InnaKlasa {
    createPoints(): Point[] {
        let lista: Point[] = [new Point(1, 2), new Point(3, 4)];
        return lista;
    }
}