const main = async () => {
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