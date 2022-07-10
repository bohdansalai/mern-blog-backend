import {body} from 'express-validator';


export const loginValidation = [
    body('email', "Email is not correct").isEmail(),
    body('password', 'Password has to have at least 5 characters').isLength({min: 5}),
]

export const registerValidation = [
    body('email', "Email is not correct").isEmail(),
    body('password', 'Password has to have at least 5 characters').isLength({min: 5}),
    body('fullName', 'Write your name').isLength({min:3}),
    body('avatarUrl', 'Link is not proper').optional().isURL(),
]
export const postCreateValidation = [
    body('title', "Type in header").isLength({min:3}).isString(),
    body('text', 'Enter the body of article').isLength({min: 3}).isString(),
    body('tags', 'Incorrect type of tags (it has to be an array)').isString(),
    body('imageUrl', 'Incorrect link to the image').optional().isString(),
]