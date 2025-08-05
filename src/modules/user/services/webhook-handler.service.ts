import { Injectable } from '@nestjs/common';
// import { WebhookHandler } from './webhook-handler.interface';
import * as crypto from 'crypto';
import { WebhookHandler } from '../interfaces/webhook-handler.interface';

@Injectable()
export class WebhookHandlerService implements WebhookHandler {
    private readonly secretToken = 'It\'s a Secret to Everybody'; // Replace with your actual secret token

    async handleWebhook(payload: any, signature: string): Promise<void> {
        // Validate the payload using the secret token
        if (!this.validatePayload(payload, signature)) {
            throw new Error('Webhook payload validation failed');
        }

        // Continue with your webhook handling logic
        console.log('Received and validated webhook payload:', payload);
        // Add your custom logic here
    }

    private validatePayload(payload: any, signature: string): boolean {
        const expectedSignature = 'sha256=' + crypto
            .createHmac('sha256', this.secretToken)
            .update(JSON.stringify(payload))
            .digest('hex');

        // Use secure comparison to mitigate timing attacks
        return crypto.timingSafeEqual(
            Buffer.from(expectedSignature, 'ascii'),
            Buffer.from(signature, 'ascii')
        );
    }
}
