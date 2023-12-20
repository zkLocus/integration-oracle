import { KeyManager } from './KeyManager';
import { ZKGeoPoint } from 'zklocus/src/api/Models';

export class SignatureGenerator {
  static async generate(geoPoint: ZKGeoPoint, keyManager: KeyManager): Promise<string> {
    const fields = [BigInt(geoPoint.latitude.normalized), BigInt(geoPoint.longitude.normalized)];
    return keyManager.getClient().signFields(fields, keyManager.getPrivateKey()).signature;
  }
}