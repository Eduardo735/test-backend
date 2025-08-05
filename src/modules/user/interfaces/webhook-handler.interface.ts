export interface WebhookHandler {
    handleWebhook(payload: any, signature: string): Promise<void>;
}