import { Injectable } from '@nestjs/common';
import { readFile, writeFile } from 'fs/promises';

@Injectable()
export class MessagesRepository {
    async findOne(id: string){
        const contents = await readFile('messages.json', 'utf-8');
        const messages = JSON.parse(contents);
        
        return messages[id];
    }

    async findAll(){
        const contents = await readFile('messages.json', 'utf-8');
        return JSON.parse(contents);
    }

    async create(message: string){
        const content = await readFile('messages.json', 'utf-8');
        const messages = JSON.parse(content);

        const id = Math.floor(Math.random() * 999);

        messages[id] = { id, content: message };

        await writeFile('messages.json', JSON.stringify(messages));
    }
}