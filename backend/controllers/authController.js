
const User =require('../models/UserModels')
const dotenv=require('dotenv')
dotenv.config({ path: './../client/configure.env' })
const jwt=require('jsonwebtoken')
const { OAuth2Client } = require('google-auth-library');
const client = new OAuth2Client(process.env.CLIENT_KEY);



exports.Auth_Verification= async(req,res) =>{
    const { tokenId } = req.body;
    if (!tokenId ) {
      return res.status(400).json({ error: 'Token is required' });
    }
    try {
        const ticket = await client.verifyIdToken({
          idToken: tokenId,
          audience: `${process.env.CLIENT_KEY}`,
        });
        console.log(ticket)
        const payload = ticket.getPayload();
        const { picture, email, name, given_name, family_name } = payload;

        let user = await User.findOne({ email });

        if (!user) {
          user = new User({ email, name, picture, given_name, family_name });
          await user.save();
        } else {
          user.email = email;
          user.name = name;
          user.picture=picture;
          user.given_name=given_name;
          user.family_name=family_name;
          await user.save();
        }

        const jwtToken=  jwt.sign({
          userId: payload.sub,
          email: payload.email,
          name: payload.name,},`${process.env.JWT_SECRET}`,{ expiresIn: '1h' }
        );
        res.json({ token: jwtToken });
      } catch (error) {
        res.status(400).json({ error: 'Invalid token' });
      }
}


exports.verification=async(req,res,next)=>{
  const token=req.headers['authorization']
  if(!token){
      res.status(404).json({
          status: 'Fail',
          message: 'Token not found 404'
      })
  }
  const decoded=jwt.verify(token.split(' ')[1],process.env.JWT_SECRET)
  console.log(decoded)
  console.log("Here successfull")
  req.body=decoded;
  next()
}


exports.Profile=async(req,res)=>{
  const email=req.body.email;
  console.log(email)
  try {
      const userData = await User.findOne({ email });
      console.log(userData)
      if (!userData) {
          return res.status(404).json({ message: 'User not found' });
      }
      res.status(200).json({
          name: userData.name,
          email: userData.email,
          picture: userData.picture,
          given_name: userData.given_name,
          family_name: userData.family_name
      });
  } catch (err) {
      console.error('Error fetching user data:', err.message);
      res.status(500).json({ message: 'Failed to fetch user data' });
  }
}

