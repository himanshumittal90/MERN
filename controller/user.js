const fs = require("fs");
const userData = JSON.parse(fs.readFileSync("data.json", "utf-8"));
const users = userData.users;

exports.getAllUsers = (req,res)=> {
    res.json(users);
}

exports.getUserDetail = (req,res)=> {
    const id = req.params.id;
    const singleuser = users.find(data=> data.id == id)
    res.json(singleuser)
}

exports.createUser = (req,res)=> {
    console.log(req);
    const addedUser = [...users, req.body];
    res.json(addedUser)
}

exports.updateUser = (req,res)=> {
    const id = req.params.id;
    const userIndex = users.findIndex(data=> data.id == id);
    users.splice(userIndex, 1, {...req.body})
    res.sendStatus(201);
}