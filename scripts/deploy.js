const main = async () => {
    const [deployer] = await hre.ethers.getSigners();
    const accountBalance = await deployer.getBalance();

    // console.log("Deploying contracts with account: ", deployer.address);
    // console.log("Account balance: ", accountBalance.toString());

    // const waveContractFactory = await hre.ethers.getContractFactory("WOOPSocial");
    // const waveContract = await waveContractFactory.deploy(
    //     "0x4f5B3158364591856bb051d35ed6027E817858A7",
    //     "0x4e63E53b02Eb3dc503dB6CcF2BCEf7DD2ca50F91",
    //     "0x00780C8645387f271fcE5A06C1E52606410Fc694",
    //     10,
    //     20,
    //     30,
    //     40
    // );
    // const waveContract = await waveContractFactory.deploy(
    //     [10, 20, 30],
    //     [40, 50],
    //     "0x00780C8645387f271fcE5A06C1E52606410Fc694",
    //     "0x845f911bAbC191E666aB762b89EdD6c4F3F06AeF",
    //     "0x7845C2945348f224Cf0C7361a5450c56FA2ea248",
    //     "0x6507734f0970400C0D95E6E8E12d85456c925fB3",
    //     "0x4e63E53b02Eb3dc503dB6CcF2BCEf7DD2ca50F91",
    //     "0x37329BBF649FB690425b647D16517352d33C2067",
    //     60,
    //     70,
    //     80,
    //     90
    // );
    // const waveContract = await waveContractFactory.deploy();
    // await waveContract.deployed();

    // console.log("WOOPSocial address: ", waveContract.address);
    // await hre.run("verify:verify", {
    //     address: "0x51c1298d7e67FFd239A3b646bAa6bA74e09668dC",
    //     constructorArguments: [
    //         "0x4f5B3158364591856bb051d35ed6027E817858A7",
    //         "0x4e63E53b02Eb3dc503dB6CcF2BCEf7DD2ca50F91",
    //         "0x00780C8645387f271fcE5A06C1E52606410Fc694",
    //         10,
    //         20,
    //         30,
    //         40
    //     ]
    // })
    await hre.run("verify:verify", {
        address: "0x2f0F1b976CE4fD6D58D190090CC6Ccb751bF33d3"
    })
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