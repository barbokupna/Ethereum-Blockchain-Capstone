

const Web3 = require('web3');
//let web3 = new Web3('https://rinkeby.infura.io/v3/KEY');
let web3 = new Web3('https://goerli.infura.io/v3/6cbc11df16c1461b9181db09b6d72709');


const contract = require("C:/Users/okupna/Documents/GitHub/Ethereum-Blockchain-Capstone/eth-contracts/build/contracts/SolnSquareVerifier.json");
const contractAddress = "0xDB7103e5c6BceF1C1db3FAC38Cba02391aCa9C7d";
const nftContract = new web3.eth.Contract(contract.abi, contractAddress);
const privateKey = "16aa3304fede3343bfcffe42aa1ab4bed7b19b0f1e8f227d80820fbc60f77b12";
const publicKey = "0x7A989d1dceC1F1745FB6193A155F8D7baa9dFA61";

nftContract.methods.symbol().call().then(console.log);

web3.eth.defaultAccount = publicKey;
console.log(web3.eth.defaultAccount);

async function mint() {
  const nonce = await web3.eth.getTransactionCount(publicKey, 'latest'); //get latest nonce
  console.log(nonce);
  //the transaction
  const tx = {
    'from': publicKey,
    'to': contractAddress,
    'nonce': nonce,
    'gas': 500000,
    'maxPriorityFeePerGas': 1999999987,
    'data': nftContract.methods.mint("0x3de5326e4FA15F48761DF56e1911AEf09a8cab14", 12).encodeABI()
  };

  const signPromise = web3.eth.accounts.signTransaction(tx, privateKey);
  signPromise.then((signedTx) => {

    web3.eth.sendSignedTransaction(signedTx.rawTransaction, function(err, hash) {
      if (!err) {
        console.log("The hash of your transaction is: ", hash, "\nCheck Alchemy's Mempool to view the status of your transaction!"); 
      } else {
        console.log("Something went wrong when submitting your transaction:", err)
      }
    });
  }).catch((err) => {
    console.log("Promise failed:", err);
  });
}

mint();




