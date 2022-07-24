//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

contract Trasaction {
    //transfer events
    // Function to receive Ether. msg.data must be empty
    receive() external payable {}

    // Fallback function is called when msg.data is not empty
    fallback() external payable {}

    event Transfer(address from, address to, string note, uint256 timestamp);

    uint256 txnCounter;

    //transaction object
    struct transactionObject {
        address senderAddress;
        address ReceiverAddress;
        uint256 Amount;
        uint256 timestamp;
        string note;
        string asset;
    }

    //transaction object
    struct userTransaction {
        uint256 id;
        string status;
        uint256 index;
        address senderAddress;
        address ReceiverAddress;
        uint256 Amount;
        uint256 timestamp;
        string note;
        string asset;
        string direction;
    }
    userTransaction[] txArray;

    //user object
    struct userObject {
        address walletAddress;
        string userName;
        string twitterHandle;
        string emailAddress;
        string profileImg;
    }

    //users map
    userObject[] public userArray;
    mapping(address => userObject) public userMap;

    // //transactions
    userTransaction[] transactionsList;

    // adding user on connection with Email
    function addUser(
        address _address,
        string memory _user,
        string memory _handle,
        string memory _email,
        string memory image
    ) public {
        require(userMap[_address].walletAddress != _address, "User Exists");

        userObject memory user = userObject(
            _address,
            _user,
            _handle,
            _email,
            image
        );
        userArray.push(user);
        userMap[_address] = userObject(_address, _user, _handle, _email, image);
    }

    //edit profile picture
    function editProfileImage(address _address, string calldata image) public {
        require(userMap[_address].walletAddress == msg.sender, "Not real user");
        userMap[_address].profileImg = image;
    }

    //adding txn
    function addTxn(
        address _senderAddress,
        address _ReceiverAddress,
        uint256 _Amount,
        string calldata _note,
        string calldata asset
    ) private {
        txnCounter += 1;
        uint256 index = transactionsList.length;
        transactionsList.push(
            userTransaction(
                txnCounter,
                "pending",
                index,
                _senderAddress,
                _ReceiverAddress,
                _Amount,
                block.timestamp,
                _note,
                asset,
                "out"
            )
        );
        // userMap[_ReceiverAddress].transactions.push(
        //     userTransaction(
        //         txnCounter,
        //         "pending",
        //         _senderAddress,
        //         _ReceiverAddress,
        //         _Amount,
        //         block.timestamp,
        //         _note,
        //         asset,
        //         "in"
        //     )
        // );
    }

    // get a particular user on login
    function getUser(address _address) public view returns (userObject memory) {
        userObject memory user = userMap[_address];
        return user;
    }

    //get users array
    function getUserMap() public view returns (userObject[] memory) {
        userObject[] memory user = userArray;
        return user;
    }

    //send payment
    function sendTRX(
        address sender,
        address payable _receiver,
        uint256 _amount,
        string calldata note,
        string calldata asset
    ) public payable {
        addTxn(sender, _receiver, _amount, note, asset);
        emit Transfer(sender, _receiver, note, block.timestamp);
    }

    //claim fund
    function claimTxn(
        address payable reciever,
        uint256 id,
        uint256 amt
    ) public payable {
        if (
            transactionsList[id].ReceiverAddress == msg.sender &&
            keccak256(abi.encodePacked(transactionsList[id].status)) ==
            keccak256(abi.encodePacked("pending"))
        ) {
            reciever.transfer(amt);
            transactionsList[id].status = "completed";
        }
    }

    function undoTxn(
        address payable sender,
        uint256 id,
        uint256 amt
    ) public payable {
        require(
            (transactionsList[id].senderAddress == msg.sender),
            "Unathorized"
        );
        require(
            (keccak256(abi.encodePacked(transactionsList[id].status)) ==
                keccak256(abi.encodePacked("pending"))),
            "Invalid Attempt"
        );
        sender.transfer(amt);
        transactionsList[id].status = "completed";
    }
}
