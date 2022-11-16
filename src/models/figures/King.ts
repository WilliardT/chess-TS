import { Cell } from "../Cell";
import { Colors } from "../Colors";
import { Figure, FigureNames } from "./Figure";
import blackLogo from "C:/Users/60935/OneDrive/Рабочий стол/programmie moe/chess/chess/src/assets/black-king.png"
import whiteLogo from "C:/Users/60935/OneDrive/Рабочий стол/programmie moe/chess/chess/src/assets/white-king.png"

export class King extends Figure {
   constructor(color: Colors, cell: Cell){
      super(color, cell);
      this.logo = color === Colors.BLACK ? blackLogo : whiteLogo;
      this.name = FigureNames.KING; 
   }
     
   // условия которые справедливы для конкретной фигуры
   canMove(target: Cell): boolean {
      if (!super.canMove(target))
         return false;
      return true
   }

   // движение короля по аналогии с другими фигурами. куда угодно 1
}