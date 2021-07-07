// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "../node_modules/@openzeppelin/contracts/token/ERC1155/IERC1155.sol";

contract MarketPlace {

    IERC1155 private _token;

    mapping (uint256 => uint256) price;

    constructor(IERC1155 token) {

        require(address(token) != address(0));

        _token = token;

        price[1] = 100000000000000;
        price[2] = 100000000000000;
        price[3] = 100000000000000;

    }

    receive () external payable {
        buyToken(1);
    }

    function buyToken(uint256 tokenId) public payable {

        uint256 weiAmount = msg.value;
        require(weiAmount >= price[tokenId] && price[tokenId] != 0);

        _token.safeTransferFrom(address(this), msg.sender, tokenId, 1, "" );
    }

    function onERC1155Received(
        address operator,
        address from,
        uint256 id,
        uint256 value,
        bytes calldata data
    ) external returns (bytes4) {
        return bytes4(keccak256("onERC1155Received(address, address, uint256, uint256, bytes)"));
    }


}