import { Body, Controller, Delete, Get, Param, Patch, Post, Put } from '@nestjs/common';
import { BoardsService } from './boards.service';
import { Board } from './boards.model';
import { CreateBoardDto } from './dto/create-board.dto';

@Controller('boards')
export class BoardsController {
    constructor(private boardsService: BoardsService){}

    @Get('/')
    getAllBoard(): Board[]{
        return this.boardsService.getAllBoards();
    }

    @Get('/:id')
    getBoardById(@Param('id') id:string): Board{
        return this.boardsService.getBoardById(id);
    }

    @Post('/')
    createBoard(@Body() createBoardDto: CreateBoardDto) :Board{
        return this.boardsService.createBoard(createBoardDto);
    }

    @Delete('/:id')
    deleteBoardById(@Param('id') id:string): void{
        return this.boardsService.deleteBoard(id);
    }

    @Patch('/;id')
    updateBoardById(@Param('id') id:string, @Body() body): Board{
        return this.boardsService.updateBoardStatus(id , body);
    }

}

