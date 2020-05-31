import { Performer } from '@/types/performer';

/**
 * 一曲に対する演舞構成
 */
export class Performance {
  constructor( // eslint-disable-line
    public parts: Part[],
  ) {}


  partPosition(nowPart: number) {
    console.log({ parts: this.parts });
    if (this.parts.length === 0) {
      return null;
    }

    const parts: Part[] = this.parts
      .filter((index) => index.id === nowPart);

    if (parts.length > 0) {
      return parts[0].performer;
    }
    return null;
  }

  // editPart(){
  //
  // }
}

/**
 * 隊列
 */
export interface Part{
  id: number;
  name: string;
  performer: Performer[];
}
