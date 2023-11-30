const User = require('../schema/user');
const {createJwtToken} = require("../service/auth");
async function handleUserSignup(req,res){
    try {
        const {name,email,password,confirmPassword} = req.body;
        const newUser = new User({
            name,
            email,
            password,
            confirmPassword
        })
    newUser.save()
  .then(() => {
    console.log('User saved successfully!');
    return res.status(201).send({message : 'User saved successfully!'});
    mongoose.connection.close(); // Close the connection after saving
  })
  .catch((error) => {
    console.error('Error saving user:', error);
    return res.status(401).send({message : 'Error saving the new user'});
    mongoose.connection.close(); // Close the connection on error
  });
    } catch (error) {
        console.log("User Already Exist");
        return res.status(401).send({message : "User Already Exist"});
    }
}

async function handleUserLogin(req,res){
  const {email,password} = req.body;
  const user = await User.findOne({email});
  if(!user || user.password != password){
    return res.status(401).send({message:"Wrong User"});
  }
  const token = createJwtToken(user);
  res.cookie("token", token);
  const result = {
    user,
    token
}
return res.status(201).json({status:201,result});
  
}

module.exports = {
    handleUserSignup,
    handleUserLogin,
  };