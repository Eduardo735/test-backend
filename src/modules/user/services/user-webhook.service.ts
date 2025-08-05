import { Injectable } from '@nestjs/common';
import { WebhookEvent } from '@clerk/backend';
import * as crypto from 'crypto';
import { Webhook } from 'svix';

@Injectable()
export class UserWebhookService {
    private readonly secretToken = 'It\'s a Secret to Everybody';
    private readonly webhookSecret: string = process.env.CLERK_WEBHOOK_SIGNING_SECRET ?? (() => { throw new Error('CLERK_WEBHOOK_SECRET is not defined'); })();

    async verifyClerkWebhook(svixId: string, svixTimestamp: string, svixSignature: string, payload: any): Promise<void> {
        // Validate the payload using the secret token
        const wh = new Webhook(this.webhookSecret);
        wh.verify(JSON.stringify(payload), {
            'svix-id': svixId,
            'svix-timestamp': svixTimestamp,
            'svix-signature': svixSignature,
        });

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

    async processClerkEvent(event: WebhookEvent): Promise<void> {
        switch (event.type) {
            case 'user.created':
                console.log('User created:', event.data);
                // Add logic to create user in your database
                break;
            case 'user.updated':
                console.log('User updated:', event.data);
                // Add logic to update user in your database
                break;
            case 'user.deleted':
                console.log('User deleted:', event.data);
                // Add logic to delete user from your database
                break;
            default:
                console.log('Unhandled Clerk event type:', event.type);
        }
    }
}
