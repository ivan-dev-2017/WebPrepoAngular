export interface Usuario {
    id?: number;
    rol?: string;
    email?: string;
    password?: string;
    nombre?: string;
    fotografia?: string;
    autenticacion_hash?: string;
  }