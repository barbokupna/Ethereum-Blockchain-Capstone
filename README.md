# Ethereum-Blockchain-Capstone
 ![BTCPay Server](images/townhouses.jpeg)

 Management of property titles creates opportuities for fraud and errors as well as innovation. Since current process is papaer based it is prone to errors which makes it illigal to trnsfer the property to the buyer untill the defects are rectified. This incures additional fees and delays proprty transfer. 
 In countries where the land is unregistered it is hard to prove legal ownership which imposes risk of having the land being seized from the owner.
 The project present solution for the mitigating title management issues by using the blockchain technology. It is implelemnted by tokenizing the property title. Before minting each token property ownership is verified using verification process based on zk-snarks. Once the properties are tokenized, they are listed on the openSea where users can transasact. 


 Link below present additional uses cases for utitzing blockchain for Real Estate
 https://media.licdn.com/dms/document/C4D1FAQGy_fK3LHDiOQ/feedshare-document-pdf-analyzed/0/1674038451669?e=1674691200&v=beta&t=wSE4TvoJbrVqMH7o8EOkwsnRbLR8Cb8hXt4RxSO-RtA
 ## Table of Contents

* [Features](#-features)
* [Contributing](#-contributing)
* [Developing](#-developing)
  * [API](#-api)
* [Community](#-community)
* [License](#-license)
* [Supporters](#-supporters)


## Features

* Direct, peer-to-peer property title transfer
* No transaction fees (other than the network fee)
* Example of ERC721 contract implementation


## Developing
* Versions: 
    - Truffle v5.7.1 (core: 5.7.1)
    - Ganache v7.6.0
    - Solidity v0.5.16 (solc-js)
    - Node v14.21.2
    - Web3.js v1.8.1

* Build Locally:
    - npm install
    - truffle compile
    - truffle migrate -reset

* Test Locally:
    - truffle test ./TestERC721Mintable.js
    - truffle test ./TestSolnSquareVerifier.js
    - truffle test ./TestSquareVerifier.js

* Implement Zokrates

| Contract Name | Contract Address |
| ------------- | ------------- |
| Step 1: Install Docker | You can find instructions for installing it [here](https://docs.docker.com/install/)|
| Step 2: Run ZoKrates | docker run -v <Your path to zokrates>:/home/zokrates/code -ti zokrates/zokrates /bin/bash| 
| Step 3: Compile the program written in ZoKrates DSL | cd code/zokrates/code/square/ </br> ~/zokrates compile -i square.code |
| Step 4: Generate the Trusted Setup | ~/zokrates setup |
| Step 5: Compute Witness | ~/zokrates compute-witness -a 3 9 |
| Step 6: Generate Proof | ~/zokrates generate-proof |
| Step 7: Export Verifier | ~/zokrates export-verifier|

* Deployment
    - truffle migrate --network goerli --reset

* Mint Tokens
    - use script mint-nft/mint-goerli

# Deployed Contracts Info
    - Contract Address on Goerli Network

| Contract Name | Contract Address |
| ------------- | ------------- |
| Migrations | 0x7E316a8Fa27Ce3086c32a51B32E935E8b1713cEF |
| CustomERC721Token | 0xAC3Ac1036B69cf8458c081728ACD32601f1EDed8 |
| Verifier | 0x3eae372475e145d5aa3D5516C2897230Df45638a |
| SolnSquareVerifier | 0x6098f42f7A618849A42eF670585d71cb5D298b7e |

   
    - Contract in goerli: 
        https://goerli.etherscan.io/address/0x6098f42f7A618849A42eF670585d71cb5D298b7e

    - OpenSea: 
        https://testnets.opensea.io/collection/boreal-estate-marketplace

8.  Used: https://github.com/andresaaap/mint-ntf

9. I made no transactions bc fees are too high. 

