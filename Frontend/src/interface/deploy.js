import { VoyageProvider, Wallet, LogicFactory } from 'js-moi-sdk'
import { MNEMONIC } from '../constants/constants';
import jsonData from '../flipper.json';

const provider = new VoyageProvider('babylon');

const initializeWallet = async () => {
    const derivationPath = "m/44'/6174'/0'/0/1";
    const wallet = new Wallet(provider);
    await wallet.fromMnemonic(MNEMONIC, derivationPath);
    return wallet;
}

const logicDeploy = async() => {
    const signer = await initializeWallet(provider);
    const factory = new LogicFactory(jsonData, signer);
    const args = [true]

    const response = await factory.deploy("Seed!", args).send({
                sender: "0x8f808f57df3970c749e1d265eac080d9e517af281b2120d89f26c6ee4ac6e01a",
                fuelPrice: 1,
                fuelLimit: 5000,
            });

    console.log("ix_hash: ", response.hash)

    const result = await response.result();
    console.log("ix_result: ", result)

    const receipt = await response.wait();
    console.log("ix_receipt: ", receipt)
}
logicDeploy()