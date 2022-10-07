import ILeaderboard from '../interfaces/ILeaderboard';
import connection from '../db-config';
import { ResultSetHeader } from 'mysql2';

// GET leaderboard
const getAllLeaderboard = async (): Promise<ILeaderboard[]> => {
  const results = await connection
    .promise()
    .query<ILeaderboard[]>('SELECT * FROM leaderboard ORDER BY score ASC');
  return results[0];
};

// GET one score
const getOneScore = async (idScore: number): Promise<ILeaderboard> => {
  const [results] = await connection
    .promise()
    .query<ILeaderboard[]>('SELECT * FROM leaderboard WHERE id = ?', [idScore]);
  return results[0];
};

// POST score
const addScore = async (newScore: ILeaderboard): Promise<number> => {
  const results = await connection
    .promise()
    .query<ResultSetHeader>(
      'INSERT INTO leaderboard (username, avatar, score) VALUES (?,?,?)',
      [newScore.username, newScore.avatar, newScore.score]
    );
  return results[0].insertId;
};

export default { getAllLeaderboard, getOneScore, addScore };
