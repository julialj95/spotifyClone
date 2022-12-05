import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import cookie from 'cookie';
import prisma from '../../lib/prisma';
import { NextApiRequest, NextApiResponse } from 'next';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const salt = bcrypt.genSaltSync();
  const { email, password } = req.body;
  let user;

  try {
    user = await prisma.user.create({
      data: {
        email: user.email,
        password: bcrypt.hashSync(password, salt)
      }
    })
  } catch (e) {
    res.status(401),
      res.json({ error: 'User already exists' });
    return;
  }
  const token = jwt.sign(
    {
      email: user.email,
      id: user.id,
      time: Date.now()
    },
    'hello',
    { expiresIn: '8h' }
  )

  res.setHeader(
    'Set-Cookie', 
    cookie.serialize(
     'TUNES_ACCESS_TOKEN', 
      token, 
      { 
        httpOnly: true, 
        maxAge: 8 * 60 * 60, 
        path: '/', 
        sameSite: 'lax', 
        secure: process.env.NODE_ENV === 'production'
      }
    )
  )
  res.json(user)
}
// export const validateRoute = (handler) => {
//   return async (req: NextApiRequest, res: NextApiResponse) => {
//     const token = req.cookies.TRAX_ACCESS_TOKEN

//     if (token) {
//       let user

//       try {
//         const { id } = jwt.verify(token, 'hello')
//         user = await prisma.user.findUnique({
//           where: { id },
//         })

//         if (!user) {
//           throw new Error('Not real user')
//         }
//       } catch (error) {
//         res.status(401)
//         res.json({ error: 'Not Authorizied' })
//         return
//       }

//       return handler(req, res, user)
//     }

//     res.status(401)
//     res.json({ error: 'Not Authorizied' })
//   }
// }

// export const validateToken = (token) => {
//   const user = jwt.verify(token, 'hello')
//   return user
// }