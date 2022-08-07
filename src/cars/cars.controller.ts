import {
    Controller,
    Get,
    Post,
    Param,
    ParseIntPipe,
    Body,
    Patch,
    Delete,
    ParseUUIDPipe,
    UsePipes,
    ValidationPipe,
} from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCarDto } from './dto/create-car.dto';

@Controller('cars')

export class CarsController {
    constructor(readonly carsService: CarsService) { }

    @Get()
    getAllCars() {
        return this.carsService.findAll();
    }
    @Get(':id')
    getCarById(@Param('id', ParseUUIDPipe) id: string) {
        console.log({ id });
        return this.carsService.findOneById("id");
    }
    @Post()

    createCar(@Body() createCarDto: CreateCarDto) {
        return createCarDto;
    }
    @Patch(':id')
    updateCar(@Param('id',) id: string,
        @Body() body: any) {
        return body;
    }
    @Delete(':id')
    deleteCar(@Param('id',) id: string) {
        return {
            method: 'delete',
            id,
        };
    }
}
