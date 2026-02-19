export interface Microcredito {
  id: number;
  cliente: string;
  monto: number;
  tasaInteres: number;
  plazoMeses: number;
  estado: EstadoCredito;
  fechaSolicitud: string;
}

export type EstadoCredito =
  | 'pendiente'
  | 'aprobado'
  | 'rechazado'
  | 'pagado';

export interface FormData {
  cliente: string;
  monto: number;
  tasaInteres: number;
  plazoMeses: number;
  estado: EstadoCredito;
  fechaSolicitud: string;
}
