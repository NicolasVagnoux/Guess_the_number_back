// import { RowDataPacket } from 'mysql2';

// export default interface ILeaderboard extends RowDataPacket {
export default interface ILeaderboard {
  id: number;
  username: string;
  avatar: string;
  score: number;
}
