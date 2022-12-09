import { NextFunction, Request, RequestHandler, Response } from 'express';
import { ErrorHandler } from '../helpers/errors';
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

// PUT score
const updateScore = (async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { idScore } = req.params;
    const currentScore = await Leaderboard.getOneScore(Number(idScore));
    const scoreUpdated = await Leaderboard.updateScore(
      //boolean
      Number(idScore),
      req.body as ILeaderboard,
      currentScore as ILeaderboard
    );
    if (scoreUpdated) {
      const newScore = await Leaderboard.getOneScore(Number(idScore));
      res.status(200).json(newScore);
    } else {
      throw new ErrorHandler(500, 'Score cannot be updated');
    }
  } catch (err) {
    next(err);
  }
}) as RequestHandler;

// DELETE score
const deleteScore = (async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { idScore } = req.params;
    const score = await Leaderboard.getOneScore(Number(idScore));
    const scoreDeleted = await Leaderboard.deleteScore(Number(idScore));
    if (scoreDeleted) {
      res.status(200).json(score);
    } else {
      throw new ErrorHandler(500, 'Score cannot be deleted');
    }
  } catch (err) {
    next(err);
  }
}) as RequestHandler;

export default {
  getAllLeaderboard,
  getOneScore,
  addScore,
  updateScore,
  deleteScore,
};
