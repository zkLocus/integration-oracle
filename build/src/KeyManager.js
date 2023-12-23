import fs from 'fs';
import Client from 'mina-signer';
export class KeyManager {
    constructor(privateKeyPath) {
        this.client = new Client({ network: 'testnet' });
        this.loadKeys(privateKeyPath);
    }
    loadKeys(privateKeyPath) {
        if (privateKeyPath && fs.existsSync(privateKeyPath)) {
            this.privateKey = fs.readFileSync(privateKeyPath, 'utf8');
        }
        else {
            const keypair = this.client.genKeys();
            this.privateKey = keypair.privateKey;
            console.warn("Generated new keypair. Consider providing your own keys for security.");
        }
        this.publicKey = this.client.derivePublicKey(this.privateKey);
    }
    getClient() {
        return this.client;
    }
    getPrivateKey() {
        return this.privateKey;
    }
    getPublicKey() {
        return this.publicKey;
    }
}
//# sourceMappingURL=KeyManager.js.map