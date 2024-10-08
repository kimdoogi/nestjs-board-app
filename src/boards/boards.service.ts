import { Injectable, NotFoundException } from '@nestjs/common';
import { Board, BoardStatus } from './boards.model';
import { v1 as uuid } from 'uuid';
import { CreateBoardDto } from './dto/create-board.dto';
import { updateBoardDto } from './dto/update-board.dto';

@Injectable()
export class BoardsService {
    private boards: Board[] = [];

    getAllBoards(): Board[]{
        return this.boards;
    }

    getBoardById(id: string): Board{
        const found = this.boards.find((board)=> board.id === id);
        if(!found){
            throw new NotFoundException();
        }
        return found;
    }

    createBoard(createBoardDto: CreateBoardDto){
        const {title, description} = createBoardDto;
        const board: Board = {
            id: uuid(),
            title,
            description,
            status: BoardStatus.PUBLIC
        }
        this.boards.push(board);
        return board;
    }

    deleteBoard(id:string): void{
        const found = this.getBoardById(id);
        if(!found){
            throw new NotFoundException();
        }
        this.boards = this.boards.filter((board)=> board.id !== found.id);
    }

    updateBoardStatus(id:string , updateBoardDto: updateBoardDto): Board{
        const {title, description , status} = updateBoardDto;
        const board = this.getBoardById(id);
        board.description = description;
        board.title = title;
        board.status = status;
        return board;
    }
}
