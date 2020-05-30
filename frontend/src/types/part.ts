import { Performer } from '@/types/performer';

export interface Part{
  id: number;
  name: string;
  performer: Performer[];
}
