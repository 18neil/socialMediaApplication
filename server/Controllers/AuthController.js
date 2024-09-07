import UserModel from "../Models/userModel.js";
import bcrypt from 'bcrypt';

export const registerUser = async(req, res) => {
    const { username, password, firstname, lastname } = req.body;

        const salt = await bcrypt.genSalt(10);
        const hasPass= await bcrypt.hash(password,salt)


    const newUser = new UserModel({username, password:hasPass, firstname, lastname})


    try{
        await newUser.save()
        res.status(200).json(newUser)
    }catch(error){
    res.status(500).json({msg:error.message})

    }
}

export const loginUser = async(req, res) => {
    const {username, password}= req.body
    console.log(username)

    try {
        const user = await UserModel.findOne({username:username})
        if(user){
            const valid = await bcrypt.compare(password, user.password)
            
            valid?res.status(200).json(user): res.status(400).json({msg:"Wrong password"})
        }else{
            res.status(404).json({msg:"unable to find user"})
        }
        
    } catch (error) {
        res.status(500).json({msg:error.message})
    }
}