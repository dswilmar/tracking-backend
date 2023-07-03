import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe, HttpCode } from '@nestjs/common';
import { EventsService } from './events.service';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
import { MessagePattern, Payload } from '@nestjs/microservices';

@Controller('events')
export class EventsController {
  constructor(private readonly eventsService: EventsService) {}

  @Post()
  create(@Body() createEventDto: CreateEventDto) {
    return this.eventsService.create(createEventDto);
  }

  @Get(':code')
  findAll(@Param('code') code: string) {
    return this.eventsService.findAll(code);
  }

  @Patch(':id')
  update(@Param('id', new ParseIntPipe()) id: number, @Body() updateEventDto: UpdateEventDto) {
    return this.eventsService.update(id, updateEventDto);
  }

  @HttpCode(204)
  @Delete(':id')
  remove(@Param('id', new ParseIntPipe()) id: number) {
    return this.eventsService.remove(id);
  }

  @MessagePattern('tracking')
  async createFromTMS(@Payload() message:any) {
    console.log('Executou aqui');
    await this.eventsService.create({
      code: message.code,
      eventDate: message.date,
      local: message.local,
      description: message.description,
      coordinates: ''
    });
  }
}
