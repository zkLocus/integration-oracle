import { Signed } from 'mina-signer/dist/node/mina-signer/src/TSTypes';
import { KeyManager } from './KeyManager';
import { ZKGeoPoint, ZKLatitude } from 'zklocus/build/src/api/Models';

export class SignatureGenerator {
  static async generate(zkGeoPoint: ZKGeoPoint, keyManager: KeyManager): Promise<Signed<bigint[]>> {
    const zkLatitude: ZKLatitude = zkGeoPoint.latitude;
    const scaledLatitude = zkLatitude.toZKValue().toField().toBigInt();

    const ZKLongitude = zkGeoPoint.longitude;
    const scaledLongitude = ZKLongitude.toZKValue().toField().toBigInt();

    const fields = [BigInt(scaledLatitude), BigInt(scaledLongitude), BigInt(zkGeoPoint.latitude.factor)];
    console.log(`Signing fields: ${fields}`);
    return keyManager.getClient().signFields(fields, keyManager.getPrivateKey());
  }
}