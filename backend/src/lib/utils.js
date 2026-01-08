// import jwt from "jsonwebtoken"

// export const generateToken = (userId, res) =>{
//     const token = jwt.sign({userId}, process.env.JWT_SECRET, {
//         expiresIn: "7d"
//     })

//     res.cookie("jwt", token, {
//         maxAge: 7*24*60*60*1000, //ms
//         httpOnly: true,  //prevent xss attacks cross-site scripting attacks
//         sameSite: "strict",  //CSRF attacks cross-site request forgery attacks
//         secure: process.env.NODE_ENV !== "development"
//     })

//     return token;
// }



import jwt from "jsonwebtoken";

export const generateToken = (userId, res) => {
  const token = jwt.sign(
    { userId },
    process.env.JWT_SECRET,
    { expiresIn: "7d" }
  );

  res.cookie("jwt", token, {
    httpOnly: true,
    secure: false,      // ⭐ ALWAYS FALSE IN LOCALHOST
    sameSite: "lax",    // ⭐ IMPORTANT — strict mat use karo
    maxAge: 7 * 24 * 60 * 60 * 1000
  });

  return token;
};
