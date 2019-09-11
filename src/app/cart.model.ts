export interface Cart {
  id: number;
  name: string;
  pos: string;
  email: string;
  img: string;
  startedAt: string;
  bio: string;
  parent?: Cart;
  constructor()
}