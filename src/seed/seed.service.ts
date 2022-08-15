import { Injectable } from '@nestjs/common';
import { BrandsService } from 'src/brands/brands.service';
import { CarsService } from 'src/cars/cars.service';
import { BRAND_SEED } from './data/brand.seed';
import { CARS_SEED } from './data/cars.seed';
import { CreateSeedDto } from './dto/create-seed.dto';
import { UpdateSeedDto } from './dto/update-seed.dto';

@Injectable()
export class SeedService {
  constructor(
    private readonly carsService: CarsService,
    private readonly brandsService: BrandsService

  ) { }

  populateDB() {
    // CARS_SEED
    // BRAND_SEED
    this.carsService.fillCarsWithSeedData(CARS_SEED)
    this.brandsService.fillCarsWithSeedData(BRAND_SEED)

    return 'SEED executed'
  }
}
