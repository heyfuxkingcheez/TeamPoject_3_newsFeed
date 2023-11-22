import { body } from "express-validator";

const signupValidate = [
    body("email").trim().isEmail(),
    body("nickName").trim().isLength({ min: 3 }),
    body("password").trim().isLength({ min: 5 }),
    body("passwordConfirm")
        .trim()
        .isLength({ min: 5 })
        .custom((value, { req }) => {
            return value === req.body.password;
        }),
];

const loginValidate = [
    body("email").trim().isEmail(),
    body("password").trim().isLength({ min: 5 }),
];

export { signupValidate, loginValidate };
