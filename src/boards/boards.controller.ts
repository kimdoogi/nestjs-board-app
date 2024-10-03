import { Body, Controller, Delete, Get, Param, Patch, Post, Put, UsePipes, ValidationPipe } from '@nestjs/common';
import { BoardsService } from './boards.service';
import { Board } from './boards.model';
import { CreateBoardDto } from './dto/create-board.dto';
import { updateBoardDto } from './dto/update-board.dto';
import { BoardStatusValidationPipe } from './pipes/board-status-validation.pipe';

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
    @UsePipes(ValidationPipe)
    createBoard(@Body() createBoardDto: CreateBoardDto) :Board{
        return this.boardsService.createBoard(createBoardDto);
    }

    @Delete('/:id')
    deleteBoardById(@Param('id') id:string): void{
        return this.boardsService.deleteBoard(id);
    }

    @Patch('/;id')
    updateBoardById(@Param('id') id:string, @Body(BoardStatusValidationPipe) body): Board{
        return this.boardsService.updateBoardStatus(id , body);
    }

}

