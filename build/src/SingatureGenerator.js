export class SignatureGenerator {
    static async generate(zkGeoPoint, keyManager) {
        const zkLatitude = zkGeoPoint.latitude;
        const latitudeFieldAsBigInt = zkLatitude.toZKValue().toField().toBigInt();
        const ZKLongitude = zkGeoPoint.longitude;
        const longitudeFieldAsBingInt = ZKLongitude.toZKValue().toField().toBigInt();
        const fields = [latitudeFieldAsBigInt, longitudeFieldAsBingInt, BigInt(zkGeoPoint.factor)];
        console.log(`Signing fields: ${fields}`);
        return keyManager.getClient().signFields(fields, keyManager.getPrivateKey());
    }
}
//# sourceMappingURL=SingatureGenerator.js.map