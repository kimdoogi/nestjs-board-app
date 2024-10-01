import { BoardStatus } from "../boards.model";

export class updateBoardDto{
    title: string;
    description: string;
    status: BoardStatus;
}