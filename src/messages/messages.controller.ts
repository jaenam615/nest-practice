import { Controller, Get, Param, Post, Body, NotFoundException } from '@nestjs/common';
import { CreateMessageDto } from './dtos/create-message.dto';
import { MessagesService } from './messages.service';

@Controller('messages') // 클래스 데코레이터
export class MessagesController {

    constructor(public messagesService: MessagesService) {}

    @Get() // 메서드 데코레이터
    listMessages() {
        return this.messagesService.findAll();
    }

    @Get('/:id')
    async getMessage(@Param('id') id: string) {
        const message = await this.messagesService.findOne(id);

        if (!message) {
            throw new NotFoundException('message not found');
        }

        return message; 
    }

    @Post()
    createMessage(@Body() body: CreateMessageDto) {
        return this.messagesService.create(body.content);
    }
}
