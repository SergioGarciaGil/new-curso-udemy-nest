import { IsString, MinLength } from "class-validator";

export class CreateCarDto {
    @IsString({ message: `the brand most a cool string` })
    readonly brand: string;

    @IsString()
    // @MinLength(3)
    readonly model: string;

}