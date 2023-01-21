# Ethereum-Blockchain-Capstone
 ![BTCPay Server](images/townhouses.jpeg)
This is an example of using Blockchain to manage propery's title transfer and sale.

Today management of property titles creates opportunities for fraud and errors as well as innovation. The current process is paper based and prone to errors which delays transfer the property to the buyer and incurs additional cost. 
In countries where the land is unregistered it is hard to prove legal ownership, which imposes risk of having the land being seized from the owner.

The project presents a solution for mitigating title management issues by using the blockchain technology. It is implemented by tokenizing the property title. Before minting each token property ownership is verified using a verification process based on zk-snarks. Once the properties are tokenized, they are listed on the openSea where users can transact.


 Link below present additional uses cases for utitzing blockchain for Real Estate
 https://media.licdn.com/dms/document/C4D1FAQGy_fK3LHDiOQ/feedshare-document-pdf-analyzed/0/1674038451669?e=1674691200&v=beta&t=wSE4TvoJbrVqMH7o8EOkwsnRbLR8Cb8hXt4RxSO-RtA
 ## Table of Contents

* [Features](#features)
* [Development](#development)
* [Deployment](#deployment)
* [Deployed Contracts](#deployed-contracts)
* [Resources](#resources)


## Features

* Direct, peer-to-peer property title transfer
* No transaction fees (other than the network fee)
* Example of ERC721 contract implementation


## Development
The project implements ERC721 contract, [ERC721](https://docs.openzeppelin.com/contracts/3.x/erc721#:~:text=ERC721%20is%20a%20standard%20for,across%20a%20number%20of%20contracts). zk-SNARKs (zoKrates) is used to create verification system that proves ownership of the token. 
* UML diagrams: 
    - [ERC721Mintable.sol](UML/classDiagramMintable.svg)
    - [SolnSquareVerifier.sol](UML/classDiagramSolnSquareVerifier.svg) - Extends ERC721Mintable implementation.
    - [Verifier.sol](UML/classDiagramVerifier.svg) - Created by zoKrates. 

* Versions: 
    - Truffle v5.7.1 (core: 5.7.1)
    - Ganache v7.6.0
    - Solidity v0.5.16 (solc-js)
    - Node v14.21.2
    - Web3.js v1.8.1

* Build/Run Locally:
    - use ganache or truffle to run it 
    - npm install
    - truffle compile
    - truffle migrate -reset

* Test Locally:
    - truffle test ./TestERC721Mintable.js
    - truffle test ./TestSolnSquareVerifier.js
    - truffle test ./TestSquareVerifier.js

* Zokrates used to create the verifier.sol contract. 

    | Contract Name | Contract Address |
    | ------------- | ------------- |
    | Step 1: Install Docker | You can find instructions for installing it [here](https://docs.docker.com/install/)|
    | Step 2: Run ZoKrates | docker run -v <Your path to zokrates>:/home/zokrates/code -ti zokrates/zokrates /bin/bash| 
    | Step 3: Compile the program written in ZoKrates DSL | cd code/zokrates/code/square/ </br> ~/zokrates compile -i square.code |
    | Step 4: Generate the Trusted Setup | ~/zokrates setup |
    | Step 5: Compute Witness | ~/zokrates compute-witness -a 3 9 |
    | Step 6: Generate Proof | ~/zokrates generate-proof |
    | Step 7: Export Verifier | ~/zokrates export-verifier|

## Deployment 

* To deploy to the goerli testnet. 
    - get testnet ETH: https://goerlifaucet.com/
    - truffle migrate --network goerli --reset

* Mint Tokens
    - use script mint-nft/mint-goerli

* Contracts addresses on Goerli Network
 
    | Contract Name | Contract Address |
    | ------------- | ------------- |
    | Migrations | 0x7E316a8Fa27Ce3086c32a51B32E935E8b1713cEF |
    | CustomERC721Token | 0xAC3Ac1036B69cf8458c081728ACD32601f1EDed8 |
    | Verifier | 0x3eae372475e145d5aa3D5516C2897230Df45638a |
    | SolnSquareVerifier | 0x6098f42f7A618849A42eF670585d71cb5D298b7e |


    - [SolnSquareVerifierABI](./SolnSquareVerifierABI.json)
    - [OpenSea Seller](https://testnets.opensea.io/collection/bo-estate-marketplace)
    - [Contract in goerli](https://goerli.etherscan.io/address/0x6098f42f7A618849A42eF670585d71cb5D298b7e)


# Resources
* [Mint](https://github.com/andresaaap/mint-ntf)
* [Remix - Solidity IDE](https://remix.ethereum.org/)
* [Visual Studio Code](https://code.visualstudio.com/)
* [Truffle Framework](https://truffleframework.com/)
* [Ganache - One Click Blockchain](https://truffleframework.com/ganache)
* [Open Zeppelin ](https://openzeppelin.org/)
* [Interactive zero knowledge 3-colorability demonstration](http://web.mit.edu/~ezyang/Public/graph/svg.html)
* [Docker](https://docs.docker.com/install/)
* [ZoKrates](https://github.com/Zokrates/ZoKrates)
* [UML](https://medium.com/@kccmeky/how-to-create-uml-class-diagram-from-your-solidity-contract-6bc050016da8)

