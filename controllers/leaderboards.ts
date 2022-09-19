import { NextFunction, Request, RequestHandler, Response } from 'express';
import Leaderboard from '../models/leaderboard';

// GET leaderboard
const getAllLeaderboard = (async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const leaderboard = await Leaderboard.getAllLeaderboard();
    return res.status(200).json(leaderboard);
  } catch (err) {
    next(err);
  }
}) as RequestHandler;

export default { getAllLeaderboard };
