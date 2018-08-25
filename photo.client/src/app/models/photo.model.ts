import { Tag } from './tag.model';

export class Photo {
    constructor(
      public id?: number,
      public name?: string,
      public tags?: Tag[],
      public description?: string,
      public url?: string,
      public file?: File) {
    }
}
