const main = async () => {
    await hre.run("verify:verify", {
        address: "0x51c1298d7e67FFd239A3b646bAa6bA74e09668dC",
        constructorArguments: [
            "0x4f5B3158364591856bb051d35ed6027E817858A7",
            "0x4e63E53b02Eb3dc503dB6CcF2BCEf7DD2ca50F91",
            "0x00780C8645387f271fcE5A06C1E52606410Fc694",
            10,
            20,
            30,
            40
        ]
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