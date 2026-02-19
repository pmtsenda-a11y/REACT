// PROYECTO SEMANAL: MODELADO DE ENTIDADES

console.log('microcréditos | Servicios Financieros y FinTech\n');

// 1.Entidades principales

interface Usuario {
  id: number;
  nombre: string;
  correo: string;
  rol: RolUsuario;
}

interface Credito {
  id: number;
  usuarioId: number;
  monto: number;
  plazoMeses: number;
  estado: EstadoCredito;
  tasaInteres: number;
}

interface Pago {
  id: number;
  creditoId: number;
  fecha: string;
  monto: number;
  metodo: MetodoPago;
}

// 2. type unions y literales para propiedades clave

type EstadoCredito = 'solicitado' | 'aprobado' | 'rechazado' | 'pagado';

type MetodoPago = 'transferencia' | 'tarjeta' | 'efectivo' | 'billeteraDigital';

type RolUsuario = 'cliente' | 'admin';

// 3. funciones tipadas para operaciones básicas

const usuarios: Usuario[] = [];
const creditos: Credito[] = [];
const pagos: Pago[] = [];

function crearUsuario(usuario: Usuario): Usuario {
  usuarios.push(usuario);
  return usuario;
}

function crearCredito(credito: Credito): Credito {
  creditos.push(credito);
  return credito;
}

function crearPago(pago: Pago): Pago {
  pagos.push(pago);
  return pago;
}

function listarCreditos(): Credito[] {
  return creditos;
}

function filtrarCreditosPorEstado(estado: EstadoCredito): Credito[] {
  return creditos.filter(c => c.estado === estado);
}

// 4. Prueba de funciones con datos de ejemplo

crearUsuario({ id: 1, nombre: 'Ana Pérez', correo: 'ana@mail.com', rol: 'cliente' });
crearUsuario({ id: 2, nombre: 'Luis Gómez', correo: 'luis@mail.com', rol: 'admin' });
crearUsuario({ id: 3, nombre: 'Carlos Martínez', correo: 'carlos@mail.com', rol: 'cliente' });
crearUsuario({ id: 4, nombre: 'María Fernández', correo: 'maria@mail.com', rol: 'cliente' });
crearUsuario({ id: 5, nombre: 'Pedro Sánchez', correo: 'pedro@mail.com', rol: 'cliente' });
crearUsuario({ id: 6, nombre: 'Laura Torres', correo: 'laura@mail.com', rol: 'cliente' });
crearUsuario({ id: 7, nombre: 'Javier Ruiz', correo: 'javier@mail.com', rol: 'cliente' });

crearCredito({ id: 1, usuarioId: 1, monto: 5000, plazoMeses: 12, estado: 'solicitado', tasaInteres: 15 });
crearCredito({ id: 2, usuarioId: 1, monto: 3000, plazoMeses: 6, estado: 'aprobado', tasaInteres: 12 });

crearPago({ id: 1, creditoId: 2, fecha: '2026-02-09', monto: 500, metodo: 'transferencia' });

console.log('Usuarios:', usuarios);
console.log('Créditos:', listarCreditos());
console.log('Créditos aprobados:', filtrarCreditosPorEstado('aprobado'));
console.log('Pagos registrados:', pagos);

// 5.Qué/para/impacto

// QUÉ:Este sistema gestiona la información de usuarios, créditos y pagos, específicamente orientado a una plataforma de microcréditos en el sector de servicios financieros y FinTech. Se permite realizar operaciones como la creación de usuarios, la asignación de créditos a esos usuarios, el registro de pagos y la consulta de créditos filtrados por su estado (por ejemplo, "solicitado", "aprobado", "rechazado", "pagado").
// PARA: El sistema está diseñado para dos tipos de usuarios clientes y Administradores, Personas que solicitan y gestionan créditos y parapersonas encargadas de supervisar, aprobar o rechazar las solicitudes de crédito y gestionar la plataforma en general, además, está dirigido a empresas de microfinanzas o instituciones financieras que otorgan microcréditos a clientes en busca de pequeñas cantidades de dinero, y a usuarios finales que necesitan acceder a productos financieros de bajo monto.
// IMPACTO: El impacto de este sistema de microcréditos, por un lado, facilita el acceso de los usuarios a pequeños créditos, promoviendo la inclusión financiera y ayudando a personas sin acceso a servicios bancarios tradicionales a mejorar su situación económica o emprender proyectos. Por otro lado, optimiza la gestión interna de la institución financiera, reduciendo costos operativos y mejorando la eficiencia en la toma de decisiones, al ofrecer datos en tiempo real sobre los créditos, pagos y usuarios, lo que permite un control más efectivo y una mayor agilidad en el proceso.
