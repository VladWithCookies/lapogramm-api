import jwt from 'koa-jwt'

export default jwt({ secret: process.env.SECRET })
