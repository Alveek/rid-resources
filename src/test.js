signRouter.post(
  '/signup',
  celebrate({
    body: Joi.object().keys({
      name: Joi.string().min(2).max(30),
      about: Joi.string().min(2).max(30),
      avatar: Joi.string().regex(regURL),
      email: Joi.string().required().regex(regEmail),
      password: Joi.string().required(),
    }),
  }),
  createUser
);
