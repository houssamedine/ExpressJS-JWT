import jwt from 'jsonwebtoken';

export const auth = (req, res, next) => {
    const token = req.headers.authorization;
    if(token) {
        const jwtToken = `${token}`.replace('Bearer ', '');
        try {
            const user = jwt.verify(jwtToken, process.env.PRIVATE_KEY);
            if(user) {
                req.user = user;
                next();
            } else res.status(401).json();    
        } catch (err) {
            res.status(401).json();
        }
    } else res.status(401).json();
}