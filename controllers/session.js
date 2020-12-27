import jwt from 'jsonwebtoken'

class SessionController {
  create = async (context) => {
    if (context.request.body.password === process.env.ADMIN_PASSWORD) {
      context.status = 200

      context.body = {
        token: jwt.sign({}, process.env.SECRET, { expiresIn: '24h' }),
      }
    } else {
      context.status = context.status = 401
    }

    return context
  }
}

export default new SessionController()
