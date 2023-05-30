import { Controller, Get, Param, UseGuards, Post, Delete } from '@nestjs/common';
import { ITour } from 'src/interfaces/Tour';
import { JwtAuthGuard } from 'src/services/authentification/jwt-auth.guard/jwt-auth.guard.service';
import { ToursService } from 'src/services/tours/tours.service';

@Controller('tours')
export class ToursController {
    constructor (private toursService: ToursService){

    }

//@UseGuards(JwtAuthGuard)
@Post()
initTours(): Promise<ITour[]> {
    this.toursService.generateTours();
    return this.toursService.getAllTours();
}

@UseGuards(JwtAuthGuard)
@Get()

getAllTours(): Promise<ITour[]>{
return this.toursService.getAllTours();
}

@Get(":id")
    getTourById(@Param('id') id) : Promise<ITour[]> {
        return this.toursService.getTourById(id);
    }




@Delete()
removeAllTours(): void {
   this.toursService.deleteTours();
}



}
