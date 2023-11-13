// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract FordMustang is ERC721, Ownable {
    using Counters for Counters.Counter;
    string private _promptDescription = "ford mustang 1969";

    Counters.Counter private _tokenIdCounter;

    constructor() ERC721("FordMustang", "FM") {}

    function promptDescription() public view returns (string memory) {
        return _promptDescription;
    }

    function _baseURI() internal pure override returns (string memory) {
        return
            "https://teal-charming-minnow-213.mypinata.cloud/ipfs/QmX3eDk2hgm2c5nWQ7F2aegkvuUyt8aeLstUtE28vUhgUo/";
    }

    function safeMint() public onlyOwner {
        for (uint8 i = 0; i < 5; i++) {
            uint256 tokenId = _tokenIdCounter.current();
            _tokenIdCounter.increment();
            _safeMint(msg.sender, tokenId);
        }
    }
}
