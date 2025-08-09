import { Body, Controller, Post } from '@nestjs/common';
import { Public } from 'src/modules/auth/decorators/public.decorator';
import { SqsProducerService } from '../services/sqs.producer.service';

@Controller('sqs')
export class SqsController {
    constructor(private sqsProducerService: SqsProducerService) { }

    @Public()
    @Post('publish')
    async publishMessage(@Body() body: { message: string }) {
        const { message } = body;
        const messageResponse = await this.sqsProducerService.sendMessage(message);
        return {
            status: 'Message published',
            message,
            messageId: messageResponse,
        };
    }
}