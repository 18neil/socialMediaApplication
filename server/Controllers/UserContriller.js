import UserModel  from "../Models/userModel.js";
import bcrypt from 'bcrypt';

export const getUser = async(req, res) =>{
    const id = req.params.id;

    try {
        const user = await UserModel.findById(id);
        
        if (user) {
            const { password, ...otherDetails } = user._doc;
            res.status(200).json(otherDetails);
        } else {
            res.status(404).json({ msg: "User not found" });
        }
        
    } catch (error) {
        res.status(500).json({msg:error.message})
    }
}


export const updateUser = async (req, res) => {
    const id = req.params.id;
    const { currentUserId, currectAdmin, password } = req.body; 
    let bool ;

   if(currectAdmin === "true"){
   bool = currectAdmin.toLowerCase() === 'true';
   }
   else{
    bool= currectAdmin.toLowerCase() !== 'false';
   }
    if ((id === currentUserId) || bool ) {
        try {
            if (password) {
                const salt = await bcrypt.genSalt(10);
                req.body.password = await bcrypt.hash(password, salt);
            }
            const user = await UserModel.findByIdAndUpdate(id, req.body, { new: true });
            if (user) {
                const { password, ...otherDetails } = user._doc; 
                res.status(200).json(otherDetails);
            } else {
                res.status(404).json({ msg: "User not found" });
            }

        } catch (error) {
            res.status(500).json({ msg: "An error occurred while updating the user" });
        }
    } else {
        res.status(403).json({ msg: "Unauthorized to update this user" });
    }
};

export const deletUser = async (req, res) =>{
    const id = req.params.id
    const { currentUserId, currectAdmin } = req.body; 

    console.log(typeof(currectAdmin))

    let bool ;
    if(currectAdmin === "true"){
        bool = currectAdmin.toLowerCase() === 'true';
        }
        else{
         bool= currectAdmin.toLowerCase() !== 'false';
        }
    
     if ((id === currentUserId) || bool ) {

        try {

            await UserModel.findByIdAndDelete(id)
            res.status(200).json("user deleted successfully")
            
        } catch (error) {
            res.status(500).json({ msg:error });
        }
     }

}


