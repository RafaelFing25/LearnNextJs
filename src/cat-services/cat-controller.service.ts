import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Cat } from 'src/entities/Cat.entity';
import { Repository } from 'typeorm';


interface cat{
    name:string
    color:string
}

@Injectable()
export class catController {
    constructor(
        @InjectRepository(Cat)
        private userRepository: Repository<Cat>
    ){}
    createCat(cat:Cat):Promise<Cat>{
        const createCat = new Cat()
        createCat.name = cat.name
        createCat.color = cat.color
        const createdcat = this.userRepository.save(createCat)
        return  createdcat
    }
    findAll():Promise<Cat[]>{
        return this.userRepository.find()
    }
    findOnebyName(catName:string):Promise<Cat[]>{
        return this.userRepository.find({name:catName})
    }
}