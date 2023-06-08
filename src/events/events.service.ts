import { Injectable } from '@nestjs/common';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class EventsService {

  constructor(private prisma: PrismaService) {}

  create(createEventDto: CreateEventDto) {
    return this.prisma.trakcing.create({
      data: createEventDto
    });
  }

  findAll(code: string) {
    return this.prisma.trakcing.findMany({
      where: {
        code: code
      }
    });
  }

  update(id: number, updateEventDto: UpdateEventDto) {
    return this.prisma.trakcing.update({
      where: {
        id
      },
      data: updateEventDto
    });
  }

  remove(id: number) {
    return this.prisma.trakcing.delete({
      where: {
        id
      }
    });
  }
}
