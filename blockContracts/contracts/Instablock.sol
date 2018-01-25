pragma solidity ^0.4.0;

contract Instablock{
    Item[] public items;

    struct Item {
        bool isPhoto;
        bool isMeta;
        bytes32 photo;
        uint256 date;
    }

    function Time_call() returns (uint256){
        return now;
    }

    function addPhoto(bytes32 _photo) public returns(bool success) {
        Item memory item;
        item.photo = _photo;
        item.isPhoto = true;
        item.isMeta = false;
        item.date = Time_call();

        items.push(item);
        return true;
    }

    function addMeta(bytes32 _photo) public returns(bool success) {
        Item memory item;
        item.photo = _photo;
        item.isPhoto = true;
        item.isMeta = false;
        item.date = Time_call();

        items.push(item);
        return true;
    }

    function getItems() public constant returns(bytes32[], uint256[], bool[], bool[]) {
        uint length = items.length;

        bytes32[] memory photos = new bytes32[](length);
        uint256[] memory dates = new uint256[](length);
        bool[] memory isPhotos = new bool[](length);
        bool[] memory isMetas = new bool[](length);

        for (uint i = 0; i < length; i++) {
            photos[i] = items[i].photo;
            dates[i] = items[i].date;
            isPhotos[i] = items[i].isPhoto;
            isMetas[i] = items[i].isMeta;
        }

        return (photos, dates, isPhotos, isMetas);
    }
}
