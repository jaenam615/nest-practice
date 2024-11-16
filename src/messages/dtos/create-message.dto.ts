import { IsString } from 'class-validator';

export class CreateMessageDto {
    @IsString() // 이 데코레이터는 해당 프로퍼티가 문자열인지 확인
    content: string; 
}

