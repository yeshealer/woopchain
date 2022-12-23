const main = async () => {
    const [deployer] = await hre.ethers.getSigners();
    const accountBalance = await deployer.getBalance();

    console.log("Deploying contracts with account: ", deployer.address);
    console.log("Account balance: ", accountBalance.toString());

    const contractFactory = await hre.ethers.getContractFactory("UnirepSocial");
    const contract = await contractFactory.deploy(
        [10, 20, 30],
        [40, 50],
        EpochKeyValidityVerifier,
        StartTransitionVerifier,
        ProcessAttestationsVerifier,
        UserStateTransitionVerifier,
        ReputationVerifier,
        UserSignUpVerifier,
        60,
        70,
        80,
        90
    );
    await contract.deployed();

    console.log("UnirepSocial address: ", contract.address);
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