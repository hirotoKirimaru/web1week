export default interface Performer{
  id: number;
  position: Position;
  shortName: string;
  longName: string;
};

interface Position {
  x: number;
  y: number;
}
