import { NextFunction, Request, RequestHandler, Response } from 'express';
import ILeaderboard from '../interfaces/ILeaderboard';
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

// GET one score
const getOneScore = (async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { idScore } = req.params;
    const score = await Leaderboard.getOneScore(Number(idScore));
    score ? res.status(200).json(score) : res.sendStatus(404);
  } catch (err) {
    next(err);
  }
}) as RequestHandler;

// POST score
const addScore = (async (req: Request, res: Response, next: NextFunction) => {
  try {
    const newScore = req.body as ILeaderboard;
    newScore.id = await Leaderboard.addScore(newScore);
    res.status(201).json(newScore);
  } catch (err) {
    next(err);
  }
}) as RequestHandler;

export default { getAllLeaderboard, getOneScore, addScore };
