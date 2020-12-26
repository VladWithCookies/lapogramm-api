import jwt from 'jsonwebtoken'

export default (context) => {
  if (context.request.body.password === process.env.ADMIN_PASSWORD) {
    context.status = 200

    context.body = {
      token: jwt.sign({ role: 'admin' }, process.env.SECRET),
    }
  } else {
    context.status = context.status = 401
  }

  return context
}
