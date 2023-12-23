# ✨ zkLocus Integration Oracle ✨

![zkLocus Integration Oracle](./assets/zklocus-oracle-cover.WEBP)

## Introduction 🚀
#### Brief Overview
Welcome to the [zkLocus](https://zklocus.dev) Integration Oracle - a middleware designed to seamlessly integrate authenticated private geolocation capabilities into your existing systems. Leveraging the power of [zkLocus](https://zklocus.dev), this Integration Oracle acts as a reliable HTTP web server providing verified geolocation signatures. It's crafted to be the perfect bridge for incorporating zkLocus's authenticated geolocation into any system, regardless of the underlying technology stack.

#### Vision Statement

In a world increasingly driven by location-based services and privacy concerns, zkLocus stands as a beacon of innovation. With zkLocus Integration Oracle, our vision is to provide an easy, secure, and private mechanism for authenticated geolocation, opening up a realm of possibilities for industries ranging from logistics and supply chain to private location-based services in Web 3.0, while maintaiing full compatibility with Web 2.0.

## Table Of Contents

- [Introduction 🚀](#introduction-🚀)
  - [Brief Overview](#brief-overview)
  - [Vision Statement](#vision-statement)
- [Features 🌟](#features-🌟)
- [Getting Started 🛠️](#getting-started-)
  - [Prerequisites](#prerequisites)
  - [Installation and Running zkLocus Integration Oracle](#installation-and-running-zklocus-integration-oracle)
    - [npm Installation](#npm-installation)
    - [Cloning the Repository/Building from Source](#cloning-the-repositorybuilding-from-source)
    - [Verifying Installation](#verifying-installation)
    - [Configuration](#configuration)
- [Usage 💻](#usage-💻)
  - [Starting the Server as an Executable](#starting-the-server-as-an-executable)
    - [Direct Executable](#direct-executable)
    - [Npm Command](#npm-command)
  - [Sending Requests](#sending-requests)
  - [Receiving Responses](#receiving-responses)
- [Architecture 🏗️](#architecture-)
  - [Server Overview](#server-overview)
  - [Main Components](#main-components)
- [zkLocus Deep(ish) Dive 🌐](#zklocus-deepish-dive-🌐)
  - [What is zkLocus?](#what-is-zklocus)
  - [Key Features and Innovations](#key-features-and-innovations)
  - [Use Cases](#use-cases)
- [Development 🛠️](#development-)
  - [Development Setup](#development-setup)
  - [Running Tests](#running-tests)
- [Contributing 🤝](#contributing-🤝)
- [License ⚖️](#license-)
- [Contact 📩](#contact-📩)

# Features 🌟
The zkLocus Integration Oracle is designed with compatibility, ease of use, extensibility and performance in mind. Here are the features that make it stand out:

- **Authenticated Geolocation**: Leverage the power of zkLocus to obtain verifiable, private geolocation data.
- **Easy Integration**: Seamlessly integrate with any system using our HTTP web server, whether it's Java, JavaScript, or even COBOL.
- **Legacy System Friendly**: Designed to work with your existing infrastructure, reducing the need for extensive system overhauls.
- **Performance Optimized**: High-speed responses and efficient processing ensure that your applications run smoothly.
- **Security First**: With privacy as a priority, the Oracle ensures that all geolocation data is handled securely and privately.
- **Flexible Configuration**: Customize the server to fit your specific needs, with configurable IP, port, and endpoint options.

# Getting Started 🛠️

### Prerequisites
Before you dive into setting up the zkLocus Integration Oracle, make sure you have the following:

- Node.js (14.x or later)
- npm or yarn package manager
- Access to command line/terminal
- Basic understanding of TypeScript and Node.js environments

## Installation and Running zkLocus Integration Oracle

You can either install the zkLocus Integration Oracle from npm or clone the repository and build it yourself. Both approaches come with an easy-to-use setup and configuration process, allowing you to get started quickly.

### npm Installation
The zkLocus Integration Oracle can be easily installed and run using npm, the Node package manager. This section will guide you through the installation process and demonstrate how to run the Oracle.
To install the zkLocus Integration Oracle from npm, run the following command:

#### Multi-Step Installation:

1. **Install the Package:**

   First, install the package using npm:

   ```bash
   npm install zklocus-integration-oracle
   ```

   This command downloads the package and all necessary dependencies.

2. **Build the Project:**

   Before running the project, you might need to build it, especially if it's written in TypeScript and requires compilation. However, if the package is distributed pre-compiled, you can skip this step.

   ```bash
   npm run build
   ```

3. **Run the Oracle:**

   Start the server using the provided executable script:

   ```bash
   npx zklocus-oracle
   ```

   Or, if you've installed the package globally or used `npm link`, you can start it directly:

   ```bash
   zklocus-oracle
   ```

#### Single-Step Installation and Running:

For a more streamlined setup, you can install and run the server globally in one command. This approach is handy for quick installations and getting the server up and running with minimal steps.

1. **Global Install & Run:**

   ```bash
   npm install -g zklocus-integration-oracle && zklocus-oracle
   ```

   This command installs the package globally and then runs the `zklocus-oracle` executable, starting your server.

#### Running the Executable

After installation, the `zklocus-oracle` executable will be available in your environment. You can run the server with customizable parameters if supported:

```bash
zklocus-oracle --ip 127.0.0.1 --port 3000
```

Replace `127.0.0.1` and `3000` with the IP address and port you wish to use.

### Cloning the Repository/Building from Source
Follow these steps to get your Integration Oracle up and running:

1. **Clone the Repository**: `git clone https://github.com/your-repository/zklocus-integration-oracle.git`
2. **Navigate to the Directory**: `cd zklocus-integration-oracle`
3. **Install Dependencies**: `npm install` or `yarn install`
4. **Build the Project** (if necessary): `npm run build`

### Verifying Installation

To verify that the server is running correctly, you can send a test request and check the logs for any startup messages.

### Configuration
Before starting the server, configure it to fit your setup:

- Set environmental variables for sensitive information like private keys.
- Use command-line arguments to specify IP address, port, and endpoint (`--ip`, `--port`, `--endpoint`).

# Usage 💻

The zkLocus Integration Oracle server can be run in two primary ways:

1. **Direct Executable via npm**: Utilizing the `zklocus-oracle` command or `npx zklocus-oracle` for a quick start.
2. **Npm Command**: Using scripts defined in the `package.json` file, such as `npm start` or `npm run dev` for more customized runs or development purposes.

## Starting the Server as an Executable

### Direct Executable

Once installed, you can run the zkLocus Integration Oracle as an executable directly from your terminal. This method is swift and doesn't require navigating to the project directory.

- **Run Globally**: If you've installed the package globally using `npm install -g zklocus-integration-oracle`, you can start the server using:

  ```bash
  zklocus-oracle
  ```

- **Run without Global Installation**: If you prefer not to install globally or wish to run a one-off execution without installing, use:

  ```bash
  npx zklocus-oracle
  ```

#### Options for Executable

When running as an executable, you can pass options directly into the command to customize the server's behavior:

```bash
zklocus-oracle --ip=192.168.1.1 --port=3000 --endpoint=/api/signature
```

### Npm Command

Alternatively, you can use npm scripts defined in the `package.json` to start the server. This method is typically used when you're working directly within the project directory and may include additional options for development.

#### Default Start

If you have not perfomed any custom configuration, the default endpoint is `/`. You can also use the `--endpoint` option to specify a custom endpoint.

- **Production Mode**: To start the server in production mode with default configurations:

  ```bash
  npm start
  ```

- **Custom Configuration**: Customize the server's IP address, port, or endpoint:

  ```bash
  npm start -- --ip=192.168.1.1 --port=3000 --endpoint=/api/signature
  ```

#### Development Mode

For development purposes, you may want to start the server with hot-reloading to see changes in real-time:

- **Hot Reload**: Start the server in development mode with hot-reloading:

  ```bash
  npm run dev
  ```

- **Custom Configuration**: Just like the production mode, you can customize the IP, port, and endpoint:

  ```bash
  npm run dev -- --ip=192.168.1.1 --port=3000 --endpoint=/api/signature
  ```

## Sending Requests

Once the server is running, it's ready to receive geolocation signature requests. Use the following curl command to send a POST request with latitude and longitude data:

```bash
curl -X POST http://localhost:3000/api/signature -d '{"latitude": 34.0522, "longitude": -118.2437}'
```

Make sure to replace `http://localhost:3000/api/signature` with the actual address and port your server is running on, along with the correct endpoint if you've customized it.

If you have not provided the `--endpoint` argument, then the server will be running on the root endpoint `/`. If you have not provided the `--port` argument, then the server will be running on port `5577`. As such, if you execute the server with `npm start`, `npm run dev` `zklocus-oracle` or `npx zklocus-oracle` without any arguments, then you can send a request to the oracle by using the following command:

```bash
curl -X POST http://localhost:5577 -d '{"latitude": 34.0522, "longitude": -118.2437}'
```

## Receiving Responses

After sending a request, the server will respond with a JSON object containing the geolocation signature and the public key used for signing. Here's what you can expect:

```json
{
  "signature": "signature_value_here",
  "publicKey": "public_key_used_here"
}
```

- **signature**: The unique signature generated for the provided geolocation data.
- **publicKey**: The public key associated with the private key used for signing. This key can be used to verify the signature's authenticity.

---

This updated usage section now provides a more detailed and clearer set of instructions covering both the direct executable method and the npm command run directly, ensuring users understand all available options for starting and interacting with the zkLocus Integration Oracle server.


# Architecture 🏗️

### Server Overview
The Integration Oracle is built with a focus on modularity, performance, and security. It's designed to act as a conduit between your system and zkLocus, handling all interactions smoothly and securely.

### Main Components
- **CommandLineArgs**: Parses and holds command-line arguments for server configuration.
- **GeoSignatureServer**: The core HTTP server handling geolocation requests and responses.
- **KeyManager**: Manages cryptographic keys for signing geolocation data.
- **SignatureGenerator**: Converts geolocation data into a signed format recognized by zkLocus.

# zkLocus Deep(ish) Dive 🌐

### What is zkLocus?
zkLocus is an innovative solution for authenticated private geolocation sharing, both off-chain and on-chain. It uses advanced cryptographic techniques to ensure that geolocation data is private, verifiable, and secure. By leveraging Zero-Knowledge proofs, specifically recursive zkSNARKs, zkLocus allows users to prove they are at a certain location without revealing the exact coordinates.

You can learn more about zkLocus in the following resources:

- [zkLocus Homepage - zklocus.dev](https://zklocus.dev)
- [zkLocus Introduction Blog Post - illya.sh/blog](https://illya.sh/blog/posts/zklocus-authenticated-geolocation-blockchain-zk/)
- [zkLocus Twitter/X - x.com/zkLocus](https://twitter.com/zkLocus)


### Key Features and Innovations
- **Recursive zkSNARKs**: Allows for efficient and private verification of geolocation data.
- **Cross-Chain Compatibility**: Works across different blockchain technologies, enhancing its applicability.
- **Off-Chain Capabilities**: Ensures that geolocation data can be authenticated outside of the blockchain, broadening its use cases.
- **Native Rollup Functionality**: Supports scalability and efficiency in verifying multiple geolocation proofs.

### Use Cases
The potential applications for zkLocus are vast and varied. Here are just a few examples:
- **Supply Chain Verification**: Ensuring that goods have traveled through the correct checkpoints.
- **Location-Based Access Control**: Enhancing security by restricting access based on verifiable location data.
- **Enhanced Privacy for Location Services**: Allowing users to prove location without sacrificing privacy.
- **Location-Based Smart Contracts**: Enabling smart contracts to execute based on location data.
- **Location-Based Decentralized Finance (DeFi)**: Creation of geolocation-based derivatives and other financial instruments.

# Development 🛠️

### Development Setup
Setting up your development environment is straightforward. Ensure Node.js and npm are installed, then follow the installation guide. 

### Running Tests
The automated test suite for zkLocus Integration Oracle can be found in the `zkLocus` project.
This oracle uses the public/end-user zkLocus API, which is tested under the zkLocus repository.
You can find them at [https://zklocus.dev](https://zklocus.dev).


## Contributing 🤝
We welcome contributions of all kinds from bug fixes to feature enhancements. Please read our [contributing guidelines](.github/CONTRIBUTING) for more information on how to submit pull requests, report bugs, and suggest improvements.

## License ⚖️
This project is licensed under the MIT licence

## Contact 📩
For any questions, suggestions, or discussions, please contact the zkLocus team at [contact@zklocus.dev](mailto:contact@zklocus.dev). We are always open to collaboration and feedback.

📧 [contact@zklocus.dev](mailto:contact@zklocus.dev)