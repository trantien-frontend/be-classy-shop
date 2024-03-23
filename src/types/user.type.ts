export interface User {
  createdAt: string;
  email: string;
  firstName: string;
  id: number | string;
  lastName: string;
  roles: Role[];
  updatedAt: string;
}

interface Role {
  id: number;
  roleName: string;
}
