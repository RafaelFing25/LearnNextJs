import { Body, Controller, Get, Param, Post, Query, Redirect, Render } from '@nestjs/common';
import { catController } from 'src/cat-services/cat-controller.service';

interface cat {
    name: string
    color: string
}


@Controller('cat')
export class CatControllerController {
    constructor(private readonly catservice: catController) { }
    @Get()
    @Render('cats')
    async findAll(): Promise<Object> {

        const cats = await this.catservice.findAll()
        return { cats }


    }
    @Post()
    @Redirect('/cat')
    async createCat(@Body() params: cat):Promise<cat> {
        return await this.catservice.createCat(params)
        
    }
    @Get('/create')
    @Render('createcat')
    createCatRender(): Object {
        return
    }
}
