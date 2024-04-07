export type ContactType = 'person' | 'public' | 'private';

export interface Base {
  id: string
}
export interface Contact extends Base {
  name: string;
  phone: string;
  comments: string;
  type: string;
}
