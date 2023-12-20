import fs from 'fs';
import Client from 'mina-signer';

export class KeyManager {
  private client: Client;
  private privateKey: string;
  private publicKey: string;

  constructor(privateKeyPath: string) {
    this.client = new Client({ network: 'testnet' });
    this.loadKeys(privateKeyPath);
  }

  private loadKeys(privateKeyPath: string): void {
    if (privateKeyPath && fs.existsSync(privateKeyPath)) {
      this.privateKey = fs.readFileSync(privateKeyPath, 'utf8');
    } else {
      const keypair = this.client.genKeys();
      this.privateKey = keypair.privateKey;
      console.warn("Generated new keypair. Consider providing your own keys for security.");
    }
    this.publicKey = this.client.derivePublicKey(this.privateKey);
  }

  getClient(): Client {
    return this.client;
  }

  getPrivateKey(): string {
    return this.privateKey;
  }

  getPublicKey(): string {
    return this.publicKey;
  }
}
