import { argv } from 'process';
export class CommandLineArgs {
    constructor() {
        this.ipAddress = this.getArg('--ip', '127.0.0.1');
        this.port = parseInt(this.getArg('--port', '5577'));
        this.publicKeyPath = this.getArg('--public-key', '');
        this.privateKeyPath = this.getArg('--private-key', '');
        this.endpointPath = this.getArg('--endpoint', '/');
    }
    getArg(key, defaultValue) {
        const index = argv.indexOf(key);
        return index > -1 && index < argv.length - 1 ? argv[index + 1] : defaultValue;
    }
}
//# sourceMappingURL=CommandLineArgs.js.map