pragma solidity ^0.4.0;


contract Console {
    event LogUint(string, uint);
    function log(string s , uint x) {
        LogUint(s, x);
    }
    
    event LogInt(string, int);
    function log(string s , int x) {
        LogInt(s, x);
    }
    
    event LogBytes(string, bytes);
    function log(string s , bytes x) {
        LogBytes(s, x);
    }
    
    event LogBytes32(string, bytes32);
    function log(string s , bytes32 x) {
        LogBytes32(s, x);
    }

    event LogAddress(string, address);
    function log(string s , address x) {
        LogAddress(s, x);
    }

    event LogBool(string, bool);
    function log(string s , bool x) {
        LogBool(s, x);
    }
}

contract Instablock is Console {
    Item[] public items;

    struct Item {
        bytes32 photo;
        bool isLink;
    }

    function addItem(bytes32 _photo) public returns(bool success) {
        Item memory item;
        item.photo = _photo;
        item.isLink = true;

        items.push(item);
        return true;
    }

    function getItems() public constant returns(bytes32[], bool[]) {
        uint length = items.length;

        bytes32[] memory photos = new bytes32[](length);
        bool[] memory isLinks = new bool[](length);

        for (uint i = 0; i < length; i++) {
            photos[i] = items[i].photo;
            isLinks[i] = items[i].isLink;
        }

        return (photos, isLinks);
    }
}
