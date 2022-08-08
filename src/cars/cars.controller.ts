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
import { CreateCarDto, UpdateCarDto } from './dto/index';


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
        return this.carsService.create(createCarDto);
    }
    @Patch(':id')
    updateCar(
        @Param('id', ParseUUIDPipe) id: string,
        @Body() UpdateCarDto: UpdateCarDto) {
        return this.carsService.update(id, UpdateCarDto);
    }
    @Delete(':id')
    deleteCar(@Param('id', ParseUUIDPipe) id: string) {
        return this.carsService.delete(id)
    }
}