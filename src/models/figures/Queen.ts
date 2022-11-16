import { Cell } from "../Cell";
import { Colors } from "../Colors";
import { Figure, FigureNames } from "./Figure";
import blackLogo from "C:/Users/60935/OneDrive/Рабочий стол/programmie moe/chess/chess/src/assets/black-queen.png"
import whiteLogo from "C:/Users/60935/OneDrive/Рабочий стол/programmie moe/chess/chess/src/assets/white-queen.png"

export class Queen extends Figure {
   constructor(color: Colors, cell: Cell){
      super(color, cell);
      this.logo = color === Colors.BLACK ? blackLogo : whiteLogo;
      this.name = FigureNames.QUEEN;
   }
   
   // условия которые справедливы для конкретной фигуры
   canMove(target: Cell): boolean {
      if (!super.canMove(target))
         return false;
      if (this.cell.isEmptyVertical(target))
         return true;
      if (this.cell.isEmptyHorizontal(target))
         return true;
      if (this.cell.isEmptyDiagonal(target))
         return true;
      return false;
   }
}