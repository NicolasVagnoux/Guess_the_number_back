import { Express, Request, Response } from 'express';
import leaderboardController from './controllers/leaderboards';

const setupRoutes = (server: Express) => {
  //coucou
  server.get('/api/coucou', (req: Request, res: Response) => {
    res.send('hibou');
  });

  // LEADERBOARD //

  // GET leaderboard
  server.get('/api/leaderboard', leaderboardController.getAllLeaderboard);
  // GET one score
  server.get('/api/leaderboard/:idScore', leaderboardController.getOneScore);
  // POST score
  server.post('/api/leaderboard', leaderboardController.addScore);
};

export default setupRoutes;
