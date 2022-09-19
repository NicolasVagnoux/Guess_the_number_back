import ILeaderboard from '../interfaces/ILeaderboard';
import connection from '../db-config';

// GET leaderboard
const getAllLeaderboard = async (): Promise<ILeaderboard[]> => {
  const results = await connection
    .promise()
    .query<ILeaderboard[]>('SELECT * FROM leaderboard ORDER BY score ASC');
  return results[0];
};

export default { getAllLeaderboard };
