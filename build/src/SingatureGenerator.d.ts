import { Signed } from 'mina-signer/dist/node/mina-signer/src/TSTypes';
import { KeyManager } from './KeyManager';
import { ZKGeoPoint } from 'zklocus/build/src/api/Models';
export declare class SignatureGenerator {
    static generate(zkGeoPoint: ZKGeoPoint, keyManager: KeyManager): Promise<Signed<bigint[]>>;
}
