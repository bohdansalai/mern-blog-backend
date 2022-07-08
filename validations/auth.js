import {body} from 'express-validator';

export const registerValidation = [
    body('email', "Email is not correct").isEmail(),
    body('password', 'Password has to have at least 5 characters').isLength({min: 5}),
    body('fullName', 'Write your name').isLength({min:3}),
    body('avatarUrl', 'Link is not proper').optional().isURL(),
]