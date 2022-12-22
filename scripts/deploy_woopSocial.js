const main = async () => {
    const [deployer] = await hre.ethers.getSigners();
    const accountBalance = await deployer.getBalance();

    console.log("Deploying contracts with account: ", deployer.address);
    console.log("Account balance: ", accountBalance.toString(
        "0x4f5B3158364591856bb051d35ed6027E817858A7",
        "0x4e63E53b02Eb3dc503dB6CcF2BCEf7DD2ca50F91",
        "0x00780C8645387f271fcE5A06C1E52606410Fc694",
        10,
        20,
        30,
        40
    ));

    const contractFactory = await hre.ethers.getContractFactory("WOOPSocial");
    const contract = await contractFactory.deploy();
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