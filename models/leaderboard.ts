import ILeaderboard from '../interfaces/ILeaderboard';
import connection from '../db-config';
// import { ResultSetHeader } from 'mysql2';

// GET leaderboard
const getAllLeaderboard = async (): Promise<ILeaderboard[]> => {
  const results = await connection.query(
    'SELECT * FROM leaderboard ORDER BY score ASC'
  );
  return results.rows;
};

// GET one score
const getOneScore = async (idScore: number): Promise<ILeaderboard> => {
  const results = await connection.query(
    'SELECT * FROM leaderboard WHERE id = $1',
    [idScore]
  );
  return results.rows[0];
};

// POST score
const addScore = async (newScore: ILeaderboard): Promise<number> => {
  const results = await connection.query(
    'INSERT INTO leaderboard (username, avatar, score) VALUES ($1, $2, $3) RETURNING id',
    [newScore.username, newScore.avatar, newScore.score]
  );
  return results.rows[0].id;
};

// PUT score
const updateScore = async (
  idScore: number,
  newScore: ILeaderboard,
  currentScore: ILeaderboard
): Promise<boolean> => {
  // let sql = 'UPDATE leaderboard SET ';
  // const sqlValues: Array<string | number> = [];
  // let oneValue = false;
  // if (score.username) {
  //   sql += 'username = $1';
  //   sqlValues.push(score.username);
  //   oneValue = true;
  // }
  // if (score.avatar) {
  //   sql += oneValue ? ' , avatar = $1 ' : ' avatar = $1 ';
  //   sqlValues.push(score.avatar);
  //   oneValue = true;
  // }
  // if (score.score) {
  //   sql += oneValue ? ' , score = $1 ' : ' score = $1 ';
  //   sqlValues.push(score.score);
  //   oneValue = true;
  // }
  // sql += ' WHERE id = $2';
  // sqlValues.push(idScore);

  // const results = await connection
  //   .query(sql, sqlValues);
  const results = await connection.query(
    'UPDATE leaderboard SET username = $1, avatar = $2, score = $3 WHERE id = $4',
    [
      newScore.username || currentScore.username,
      newScore.avatar || currentScore.avatar,
      newScore.score || currentScore.score,
      idScore,
    ]
  );
  return results.rowCount === 1;
};

// DELETE score
const deleteScore = async (idScore: number): Promise<boolean> => {
  const results = await connection.query(
    'DELETE FROM leaderboard WHERE id = $1',
    [idScore]
  );
  return results.rowCount === 1;
};

export default {
  getAllLeaderboard,
  getOneScore,
  addScore,
  updateScore,
  deleteScore,
};
