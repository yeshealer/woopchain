# WOOP Chain Contract Deploy and Verify

## How to configue `harhat.config.js`

```bash
module.exports = {
  solidity: {
    compilers: [{
      version: "0.8.17",
      settings: {
        viaIR: true,
        optimizer: { enabled: true },
      },
    }]
  },
  networks: {
    woopchain: {
      url: process.env.WOOPCHAIN_RPC,              // woopchain RPC URL
      accounts: [process.env.PRIVATE_KEY]          // contract owner wallet private key
    }
  },
  etherscan: {
    apiKey: {
      woopchain: "abc"
    },
    customChains: [
      {
        network: "woopchain",
        chainId: 139,
        urls: {
          apiURL: "https://explorer.wikiwoop.com/api",
          browserURL: "https://explorer.wikiwoop.com"
        }
      }
    ]
  }
}; 
```

## How to deploy woop token and social contract

### Deploy token contract

```bash
npx hardhat run scripts/deploy_token.js --network woopchain
```

### Deploy social contract
Follow below commands step by step.

Each time you run the command, you will receive the deployed contract address.

Store those addresses in order.

```bash
npx hard run scripts/subContracts/deploy_epochKey.js --network woopchain
```

```bash
npx hard run scripts/subContracts/deploy_startTnx.js --network woopchain
```

```bash
npx hard run scripts/subContracts/deploy_process.js --network woopchain
```

```bash
npx hard run scripts/subContracts/deploy_userstate.js --network woopchain
```

```bash
npx hard run scripts/subContracts/deploy_reputation.js --network woopchain
```

```bash
npx hard run scripts/subContracts/deploy_userSign.js --network woopchain
```

And then you need deploy UnirepSocial smart contract.

Before deploy, you have to update `deploy/subContracts/deploy_unirepSocial.js` as you can see below.

```bash
const contractFactory = await hre.ethers.getContractFactory("UnirepSocial");
const contract = await contractFactory.deploy(
    [10, 20, 30],
    [40, 50],
    EpochKeyValidityVerifier,              // replace with deployed EpochKeyValidityVerifier contract address
    StartTransitionVerifier,               // replace with deployed StartTransitionVerifier contract address
    ProcessAttestationsVerifier,           // replace with deployed ProcessAttestationsVerifier contract address
    UserStateTransitionVerifier,           // replace with deployed UserStateTransitionVerifier contract address
    ReputationVerifier,                    // replace with deployed ReputationVerifier contract address
    UserSignUpVerifier,                    // replace with deployed UserSignUpVerifier contract address
    60,
    70,
    80,
    90
);
```

And then run this command and save the deployed address.

```bash
npx hardhat run scripts/subContracts/deploy_unirepSocial.js --network woopchain
```

The next step is deploying the `woopSocial` contract.

Likewise above case you have to update `deploy/deploy_woopSocial.js` as below.

```bash
const contractFactory = await hre.ethers.getContractFactory("WOOPSocial");
const contract = await contractFactory.deploy(
    UnirepSocial,                         // replace with deployed UnirepSocial contract address
    ReputationVerifier,                   // replace with deployed ReputationVerifier contract address
    EpochKeyValidityVerifier,             // replace with deployed EpochKeyValidityVerifier contract address
    10,
    20,
    30,
    40
);
```

And then run this command for deploying the woop social contract address.

```bash
npx hardhat run scripts/deploy_woopSocial.js --network woopchain
```

### Verify contracts

Update the `verify_token.js`  and `verify_woopSocial.js` and run below commands.

`verify_token.js`

```bash
await hre.run("verify:verify", {
    address: Deployed WOOC Token address
})
```


`verify_woopSocial.js`
```bash
await hre.run("verify:verify", {
    address: Deployed WOOP Social contract address,
    constructorArguments: [
        Deployed Unirep Social contract address,
        Deployed ReputationVerifier Social contract address,
        Deployed EpochKeyValidityVerifier Social contract address,
        10,
        20,
        30,
        40
    ]
})
```

The final step is run below commands.

```bash
npx hardhat run scripts/verify_token.js --network woopchain
```

```bash
npx hardhat run scripts/verify_woopSocial.js --network woopchain
```

Finally, you will get fully verified WOOC token contract and WOOP Social contract addresses.
