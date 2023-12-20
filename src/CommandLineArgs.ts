import { argv } from 'process';

export class CommandLineArgs {
  public ipAddress: string;
  public port: number;
  public publicKeyPath: string;
  public privateKeyPath: string;
  public endpointPath: string;

  constructor() {
    this.ipAddress = this.getArg('--ip', '127.0.0.1');
    this.port = parseInt(this.getArg('--port', '5577'));
    this.publicKeyPath = this.getArg('--public-key', '');
    this.privateKeyPath = this.getArg('--private-key', '');
    this.endpointPath = this.getArg('--endpoint', '/');
  }

  private getArg(key: string, defaultValue: string): string {
    const index = argv.indexOf(key);
    return index > -1 && index < argv.length - 1 ? argv[index + 1] : defaultValue;
  }
}
