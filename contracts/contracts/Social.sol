//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

// import "hardhat/console.sol";

contract Trasaction {
    //user object
    struct userObject {
        address walletAddress;
        string userName;
        string twitterHandle;
    }

    //users map
    mapping(address => userObject) public userMap;
     // adding user on connection with twitter
    function addUser(
        address _address,
        string memory _user,
        string memory _handle
    ) public {
        userMap[_address] = userObject(_address, _user, _handle);
    }


    // get a particular user on login
    function getUser(address _address) public view returns (userObject memory) {
        return userMap[_address];
    }
}
