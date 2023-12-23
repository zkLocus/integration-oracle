import { CommandLineArgs } from './CommandLineArgs';
import { KeyManager } from './KeyManager';
export declare class GeoSignatureServer {
    private args;
    private keyManager;
    private app;
    constructor(args: CommandLineArgs, keyManager: KeyManager);
    private setupRoutes;
    start(): void;
}
