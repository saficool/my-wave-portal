// SPDX-License-Identifier: MIT
pragma solidity 0.8.17;
import "hardhat/console.sol";

contract WavePortal {
    uint256 totalWaves;
    mapping(address => uint) addressToWaveCount;

    constructor() {
        console.log("Hello discordian! :p");
    }

    function wave() public {
        totalWaves += 1;
        addressToWaveCount[msg.sender] += 1;
    }

    function getTotalWaves() public view returns (uint256) {
        return totalWaves;
    }

    function getTotalWavesBy(address _address) public view returns (uint256) {
        return addressToWaveCount[_address];
    }
}
