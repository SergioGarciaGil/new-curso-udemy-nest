import { Controller, Get, Param } from '@nestjs/common';


@Controller('cars')
export class CarsController {

    private cars = ['toyota', 'Fiat', 'Renaul']

    @Get()
    getAllCars() {
        return this.cars
    }
    @Get(':id')
    getCarById(@Param('id') id: string) {
        console.log({ id: id })
        return this.cars[id]
    }
}

