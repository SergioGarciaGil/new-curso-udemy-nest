import { Injectable, NotFoundException } from '@nestjs/common';
import { Car } from './interfacess/car.interface';
import { v4 as uuid } from "uuid"
import { CreateCarDto } from './dto/create-car.dto';

@Injectable()
export class CarsService {
    private cars: Car[] = [
        {
            id: uuid(),
            brand: 'Toyota',
            model: 'carola'
        },
        {
            id: uuid(),
            brand: 'Honda',
            model: 'civic'
        },
        {
            id: uuid(),
            brand: 'Toyota',
            model: 'cherokee'
        }
    ];
    findAll() {
        return this.cars
    }
    findOneById(id: string) {
        const car = this.cars.find(car => car.id === id);
        if (!car)
            throw new NotFoundException(`Car with id '${id} not found `)
        return car
    }

    create(createCartDto: CreateCarDto) {
        const car: Car = {
            id: uuid(),
            // brand: createCartDto.brand,
            // model: createCartDto.model,
            ...createCartDto //se remplaza y es lo mismo
        }
        this.cars.push(car)

        return car
    }

}

