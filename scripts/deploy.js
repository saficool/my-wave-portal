async function main() {
    const [deployer] = await hre.ethers.getSigners();
    const accountBalance = await deployer.getBalance();

    console.log("Deploying contract with account: ", deployer.address);
    console.log("Account balance: ", accountBalance.toString())

    const waveContractFactory = await hre.ethers.getContractFactory("WavePortal");
    const waveContract = await waveContractFactory.deploy();
    await waveContract.deployed();

    console.log(`Contract deployed at: ${waveContract.address}`);
}

main()
    .then(() => { process.exit(0) })
    .catch(err => { console.log(err); process.exit(1) });