const FoodItem = require('../models/fooditems');
// TODO: Implement adding photograph
const postFoodItem = async(req, res)=>{
    const {name, price, vgStatus, quantity} = req.body;
    if(!name || !price) return res.status(401).json({"message": "name and price are required"});
    try {
        const result = await FoodItem.create({
            "name": name,
            "price": price,
            "quantity":quantity,
            "vegStatus": vgStatus
        })
        console.log(result);
        return res.sendStatus(201);
    } catch (err) {
        return res.status(500).json({"message": err?.message})
    }
}

const getFoodItems = async(req, res)=>{
    try{
        const response =await FoodItem.find();
        return res.json(response);
    }catch(err){
        return res.sendStatus(501)
    }
}

const deleteFoodItem = async(req, res)=>{
    const {id} = req.body;
    try{
        const response = await FoodItem.deleteOne({
            "_id": id
        })
        console.log(response);
        res.sendStatus(202);
    }catch(err){
        return res.sendStatus(500)
    }
}

const updateFoodItem = async(req, res) =>{
    const {id ,name, price} = req.body;
    if( !id && (!name || ! price)) return res.status(401).json({"message": " ida and name or price is required to update"});
    try{
        const result = await FoodItem.findByIdAndUpdate(id,{
            "name": name,
            "price": price
        })
        console.log(`${result} has been update`);
        return res.sendStatus(204);
    }catch(err){
        return res.status(501).json({"message": err?.message});
    }
}


module.exports = {
    postFoodItem,
    getFoodItems,
    deleteFoodItem,
    updateFoodItem
}