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
  // PUT score
  server.put('/api/leaderboard/:idScore', leaderboardController.updateScore);
  // DELETE score
  server.delete('/api/leaderboard/:idScore', leaderboardController.deleteScore);
};

export default setupRoutes;
