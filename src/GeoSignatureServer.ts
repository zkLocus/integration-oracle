import express from 'express';
import bodyParser from 'body-parser';
import { CommandLineArgs } from './CommandLineArgs';
import { SignatureGenerator } from './SingatureGenerator';
import { ZKGeoPoint } from 'zklocus/src/api/Models';
import { KeyManager } from './KeyManager';

export class GeoSignatureServer {
  private app: express.Application;

  constructor(private args: CommandLineArgs, private keyManager: KeyManager) {
    this.app = express();
    this.app.use(bodyParser.json());
    this.setupRoutes();
  }

  private setupRoutes(): void {
    this.app.post(this.args.endpointPath, async (req, res) => {
      try {
        const { latitude, longitude } = req.body;
        const geoPoint = new ZKGeoPoint(latitude, longitude);
        const signature = await SignatureGenerator.generate(geoPoint, this.keyManager);
        res.json({ signature });
      } catch (error) {
        if (error instanceof Error) {
            // Now TypeScript knows `error` is an Error object and allows access to `error.message`
            res.status(400).json({ error: error.message });
          } else {
            // Handle cases where the error might not be an Error object
            res.status(500).json({ error: "An unknown error occurred" });
          }
      }
    });
  }

  public start(): void {
    this.app.listen(this.args.port, this.args.ipAddress, () => {
      console.log(`Server running on http://${this.args.ipAddress}:${this.args.port}`);
      console.info(`Public key: ${this.keyManager.getPublicKey()}`);
    });
  }
}