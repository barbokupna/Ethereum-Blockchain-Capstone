pragma solidity ^0.5.5;
pragma experimental ABIEncoderV2;

import "./ERC721Mintable.sol";
import "./verifier.sol";
import {Pairing} from "./verifier.sol";

// TODO define a contract call to the zokrates generated solidity contract <Verifier> or <renamedVerifier>

// TODO define another contract named SolnSquareVerifier that inherits from your ERC721Mintable class
contract SolnSquareVerifier is CustomERC721Token {
    ISolVerifier verifierContract;
    using Pairing for *;

    constructor(
        address verifierAddress,
        string memory name,
        string memory symbol,
        string memory baseTokenURI
    ) public CustomERC721Token(name, symbol, baseTokenURI) {
        verifierContract = ISolVerifier(verifierAddress);
    }

    // TODO define a solutions struct that can hold an index & an address
    struct Solution {
        uint256 index;
        address solutionAddress;
    }

    // TODO define an array of the above struct
    Solution[] private _squareSolutionVerArr;

    // TODO define a mapping to store unique solutions submitted
    mapping(bytes32 => Solution) _uniqueSquareSolution;

    // TODO Create an event to emit when a solution is added
    event solutionAdded(bytes32 key, address toAddress, uint256 tokenId);

    // TODO Create a function to add the solutions to the array and emit the event
    function _addSolution(
        bytes32 key,
        address toAddress,
        uint256 tokenId
    ) public {
       _squareSolutionVerArr.push(Solution(tokenId, toAddress));
       _uniqueSquareSolution[key] = Solution(tokenId, toAddress);

        emit solutionAdded(key, toAddress, tokenId);
    }

    function _getKey(uint256[2] memory a,
        uint256[2][2] memory b,
        uint256[2] memory c,
        uint256[2] memory input) public returns(bytes32) {
              bytes32 key = keccak256(abi.encodePacked(a, b, c, input));
              return key;
        
    }

    function getUniqueSquareSolution(bytes32 key) external view returns(address) {
        return _uniqueSquareSolution[key].solutionAddress;
    }
        
    
    // TODO Create a function to mint new NFT only after the solution has been verified
    //  - make sure the solution is unique (has not been used before)
    //  - make sure you handle metadata as well as tokenSuplly

    function mintNewNFT(
        address to,
        uint256 tokenId,
        uint256[2] memory a,
        uint256[2][2] memory b,
        uint256[2] memory c,
        uint256[2] memory input
    ) public returns (bool) {
        Pairing.G1Point memory vk_a = Pairing.G1Point(a[0], a[1]);
        Pairing.G1Point memory vk_c = Pairing.G1Point(c[0], c[1]);

        Pairing.G2Point memory vk_b = Pairing.G2Point(b[0], b[1]);

        bytes32 key = _getKey(a, b, c, input);

        require(
            _uniqueSquareSolution[key].solutionAddress == address(0),
            "Solution Already Used"
        );

        ISolVerifier.Proof memory p = ISolVerifier.Proof(vk_a, vk_b, vk_c);
        require(verifierContract.verifyTx(p, input), "Solution Is Not Valid");

        _addSolution(key, to, tokenId);

        return true;
    }
}

interface ISolVerifier {
    struct Proof {
        Pairing.G1Point a;
        Pairing.G2Point b;
        Pairing.G1Point c;
    }

    function verifyTx(Proof calldata proof, uint256[2] calldata input)
        external
        view
        returns (bool r);
}
