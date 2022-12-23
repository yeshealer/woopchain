const main = async () => {
    const [deployer] = await hre.ethers.getSigners();
    const accountBalance = await deployer.getBalance();

    console.log("Deploying contracts with account: ", deployer.address);
    console.log("Account balance: ", accountBalance.toString());

    const contractFactory = await hre.ethers.getContractFactory("WOOPSocial");
    const contract = await contractFactory.deploy(
        UnirepSocial,
        ReputationVerifier,
        EpochKeyValidityVerifier,
        10,
        20,
        30,
        40
    );
    await contract.deployed();

    console.log("WOOPSocial address: ", contract.address);
};

const runMain = async () => {
    try {
        await main();
        process.exit(0);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
};

runMain();