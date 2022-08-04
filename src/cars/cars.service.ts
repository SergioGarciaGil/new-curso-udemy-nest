import { Injectable } from '@nestjs/common';

@Injectable()
export class CarsService {
    private cars = [
        {
            id: 1,
            brand: 'Toyota',
            model: 'carola'
        },
        {
            id: 2,
            brand: 'Honda',
            model: 'civic'
        },
        {
            id: 3,
            brand: 'Toyota',
            model: 'cherokee'
        }
    ];
    findAll() {
        return this.cars
    }
    findOneById(id: number) {
        const car = this.cars.find(car => car.id === id);
        return car
    }
}

