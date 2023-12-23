#!/usr/bin/env node
import dotenv from 'dotenv';
dotenv.config(); // Load environment variables

import { CommandLineArgs } from './CommandLineArgs';
import { GeoSignatureServer } from './GeoSignatureServer';
import { KeyManager } from './KeyManager';

const main = () => {
  const args = new CommandLineArgs();
  const keyManager = new KeyManager(args.privateKeyPath);
  const server = new GeoSignatureServer(args, keyManager);
  server.start();
};

main();