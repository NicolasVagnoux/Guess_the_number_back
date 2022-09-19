import { RowDataPacket } from 'mysql2';

export default interface ILeaderboard extends RowDataPacket {
  id: number;
  username: string;
  avatar: string;
  score: number;
}
