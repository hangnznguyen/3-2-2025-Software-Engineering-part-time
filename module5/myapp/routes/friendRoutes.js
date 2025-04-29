const express = require("express");
const router = express.Router();
const friends = require("../models/friends");

// GET all friends
router.get("/", (req, res) => {
    res.json(friends);
  });

  // filter endpoint, gets friends matching the gender from 'gender' query parameter ie. /friends/filter?gender=male
// 1. Add support to also filter by a starting 'letter' query parameter ie. /friends/filter?letter=R
router.get('/filter', (req, res) => {
    console.log(req.query)
    let filterGender = req.query.gender;
    let filterLetter = req.query.letter;
    let matchingFriends = [...friends];

    if (filterGender) {
        matchingFriends = matchingFriends.filter(friend => friend.gender == filterGender);
    }
    
    if (filterLetter) {
        matchingFriends = matchingFriends.filter(friend => friend.name.startsWith(filterLetter));
    }
    if (matchingFriends.length > 0) {
        // return valid data when the gender matches 
        res.status(200).json(matchingFriends)
    } else {
        // and an error response when there are no matches
        res.status(404).json({error: "No friends matching gender "+filterGender})
    }  
})

router.get('/info', (req, res) => {
    const { 'user-agent': userAgent, 'content-type': contentType, accept } = req.headers;

    res.json({
        'user-agent': userAgent,
        'content-type': contentType,
        'accept': accept
    });
});

router.get('/:id', (req, res) => {
    const friendId = parseInt(req.params.id); // Important: ID should be a number
    const friend = friends.find(f => f.id === friendId);

    if (friend) {
        res.json(friend);
    } else {
        res.status(404).json({ error: 'Friend not found' });
    }
});

router.put('/:id', (req, res) => {
    const friendId = parseInt(req.params.id); // convert id to a number
    const updateFriend = req.body;

    // Find the friend in the list
    const friendIndex = friends.findIndex(friend => friend.id === friendId);

    if (friendIndex !== -1) {
        // Friend found -> update their data
        friends[friendIndex] = { ...friends[friendIndex], ...updateFriend };
        res.status(200).json(friends[friendIndex]);
    } else {
        // Friend not found
        res.status(404).json({ error: `Friend with ID ${friendId} not found` });
    }
});





















  module.exports = router;