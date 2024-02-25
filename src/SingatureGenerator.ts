import { Signed } from 'mina-signer/dist/node/mina-signer/src/TSTypes';
import { KeyManager } from './KeyManager';
import { ZKGeoPoint} from 'zklocus/src/api/models/ZKGeoPoint';
import { ZKLatitude } from 'zklocus/src/api/models/ZKLatitude';

export class SignatureGenerator {
  static async generate(zkGeoPoint: ZKGeoPoint, keyManager: KeyManager): Promise<Signed<bigint[]>> {
    const zkLatitude: ZKLatitude = zkGeoPoint.latitude;
    const latitudeFieldAsBigInt: bigint = zkLatitude.toZKValue().toField().toBigInt();

    const ZKLongitude = zkGeoPoint.longitude;
    const longitudeFieldAsBingInt: bigint = ZKLongitude.toZKValue().toField().toBigInt();

    const fields = [latitudeFieldAsBigInt, longitudeFieldAsBingInt, BigInt(zkGeoPoint.factor)];
    console.log(`Signing fields: ${fields}`);
    return keyManager.getClient().signFields(fields, keyManager.getPrivateKey());
  }
}