export class SignatureGenerator {
    static async generate(zkGeoPoint, keyManager) {
        const zkLatitude = zkGeoPoint.latitude;
        const scaledLatitude = zkLatitude.toZKValue().toField().toBigInt();
        const ZKLongitude = zkGeoPoint.longitude;
        const scaledLongitude = ZKLongitude.toZKValue().toField().toBigInt();
        const fields = [BigInt(scaledLatitude), BigInt(scaledLongitude), BigInt(zkGeoPoint.latitude.factor)];
        console.log(`Signing fields: ${fields}`);
        return keyManager.getClient().signFields(fields, keyManager.getPrivateKey());
    }
}
//# sourceMappingURL=SingatureGenerator.js.map