import Client from 'mina-signer';
export declare class KeyManager {
    private client;
    private privateKey;
    private publicKey;
    constructor(privateKeyPath: string);
    private loadKeys;
    getClient(): Client;
    getPrivateKey(): string;
    getPublicKey(): string;
}
