const Admin = require('../models/admins')
const bcrypt = require('bcrypt')

const createAdmin = async(req, res) =>{
    const {uname, pwd} = req.body;
    if(!uname || !pwd) return res.status(401).json({"message": "uname and pwd are required"});
    try{
        const response = await Admin.create({
            "username": uname,
            "password": pwd
        })
        console.log(`${uname} has been created`);
        return res.sendStatus(201);
    }catch(err){
        return res.sendStatus(501);
    }
}

module.exports = {
    createAdmin
}