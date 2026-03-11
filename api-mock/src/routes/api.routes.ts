import { Router, Request, Response } from 'express';
import { getMockResponse } from '../mockData';

const router = Router();

router.post('/events/analyze', (req: Request, res: Response) => {
  const termSearch = req.body.term || "";

  setTimeout(() => {
    const result = getMockResponse(termSearch);
    res.json(result);
  }, 1000);
});

export default router;
