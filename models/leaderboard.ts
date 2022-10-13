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

// PUT score
const updateScore = async (
  idScore: number,
  score: ILeaderboard
): Promise<boolean> => {
  let sql = 'UPDATE leaderboard SET ';
  const sqlValues: Array<string | number> = [];
  let oneValue = false;
  if (score.username) {
    sql += 'username = ?';
    sqlValues.push(score.username);
    oneValue = true;
  }
  if (score.avatar) {
    sql += oneValue ? ' , avatar = ? ' : ' avatar = ? ';
    sqlValues.push(score.avatar);
    oneValue = true;
  }
  if (score.score) {
    sql += oneValue ? ' , score = ? ' : ' score = ? ';
    sqlValues.push(score.score);
    oneValue = true;
  }
  sql += ' WHERE id = ?';
  sqlValues.push(idScore);

  const results = await connection
    .promise()
    .query<ResultSetHeader>(sql, sqlValues);
  return results[0].affectedRows === 1;
};

// DELETE score
const deleteScore = async (idScore: number): Promise<boolean> => {
  const results = await connection
    .promise()
    .query<ResultSetHeader>('DELETE FROM leaderboard WHERE id = ?', [idScore]);
  return results[0].affectedRows === 1;
};

export default {
  getAllLeaderboard,
  getOneScore,
  addScore,
  updateScore,
  deleteScore,
};
