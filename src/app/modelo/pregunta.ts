import { Respuesta } from "./respuestas";

export interface Pregunta {
    id: number;
    difcultad: number;
    materia: number;
    tiempo: number;
    pregunta: string;
    respuesta: Respuesta;
    correcta: string;
  }