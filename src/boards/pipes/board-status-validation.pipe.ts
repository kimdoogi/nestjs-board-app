import { ArgumentMetadata, BadRequestException, PipeTransform } from "@nestjs/common";
import { BoardStatus } from "../boards.model";

export class BoardStatusValidationPipe implements PipeTransform{

    readonly StatusOptions = [
            BoardStatus.PRIVATE,
            BoardStatus.PUBLIC
    ]
    transform(value: any, metadata: ArgumentMetadata) {
        console.log('value' , value);
        console.log('metadata', metadata);

        if(!this.isStatusValid(value)){
            throw new BadRequestException(`${value} is not in the status option`);
        }
        return value;
    }

    private isStatusValid(status: any){
        const index = this.StatusOptions.indexOf(status);
        return index !== -1;
    }
}