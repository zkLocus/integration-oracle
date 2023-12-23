import express from 'express';
import bodyParser from 'body-parser';
import { SignatureGenerator } from './SingatureGenerator';
import { ZKGeoPoint } from 'zklocus/src/api/Models';
export class GeoSignatureServer {
    constructor(args, keyManager) {
        this.args = args;
        this.keyManager = keyManager;
        this.app = express();
        this.app.use(bodyParser.json());
        this.setupRoutes();
    }
    setupRoutes() {
        this.app.post(this.args.endpointPath, async (req, res) => {
            try {
                const { latitude, longitude } = req.body;
                console.log(`Received request to sign: ${latitude}, ${longitude}`);
                const geoPoint = new ZKGeoPoint(latitude, longitude);
                console.log(`Normalized: ${geoPoint.latitude.normalized}, ${geoPoint.longitude.normalized}`);
                const signature = await SignatureGenerator.generate(geoPoint, this.keyManager);
                res.json({
                    signature: signature.signature,
                    publicKey: signature.publicKey,
                });
            }
            catch (error) {
                if (error instanceof Error) {
                    // Now TypeScript knows `error` is an Error object and allows access to `error.message`
                    res.status(400).json({ error: error.message });
                }
                else {
                    // Handle cases where the error might not be an Error object
                    res.status(500).json({ error: "An unknown error occurred" });
                }
                console.log(error);
            }
        });
    }
    start() {
        this.app.listen(this.args.port, this.args.ipAddress, () => {
            console.log(`Server running on http://${this.args.ipAddress}:${this.args.port}`);
            console.info(`Public key: ${this.keyManager.getPublicKey()}`);
        });
    }
}
//# sourceMappingURL=GeoSignatureServer.js.map