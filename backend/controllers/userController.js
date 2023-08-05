//  @desc   auth user/set token 
//  route   post api/users/auth
//  


const authUser=(req,res)=>{
    res.status().json({message:' Auth user'})
}
export {
    authUser
}