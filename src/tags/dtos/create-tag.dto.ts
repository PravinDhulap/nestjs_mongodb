import { ApiProperty } from "@nestjs/swagger";
import { isNotEmpty, IsNotEmpty, IsString, Matches, MaxLength, Min, MinLength } from "class-validator";

export class CreateTagDto {

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    @MinLength(2)
    @MaxLength(200)
    name: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    @MinLength(2)
    @MaxLength(200)
    @Matches(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, {
        message:
            'A slug should be all small letters and uses only "-" and without spaces. For example "my-url"',
    })
    slug: string;
}