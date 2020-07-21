export type User = {
  id: number;
  firstName: string;
  lastName?: string;
  username: string;
  points: Point[];
};

export type UserListResponse = {
  users: User[];
};

export type Point = {
  id: number;
  sortOrder: number;
  name: string;
  dueDate: Date;
  completed: boolean;
  category: string;
  userId: number;
};

export type PointListResponse = {
  points: Point[];
};
