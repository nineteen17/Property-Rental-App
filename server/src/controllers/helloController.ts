import { Request, Response } from 'express';

 const helloController = {
    getHello: (req: Request, res: Response) => {
        res.send('Hello World!');
    }
};

export default helloController;