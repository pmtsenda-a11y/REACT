📄 README: Proyecto Semanal - Modelado de Entidades (FinTech)
🏦 Dominio Asignado
Este proyecto se desarrolla bajo el dominio de Plataforma de microcréditos | Servicios Financieros y FinTech, asignado para aplicar los fundamentos de TypeScript en un entorno de gestión de activos financieros y usuarios.

🧠 Decisiones de Modelado y Estructura
Siguiendo los requerimientos técnicos, el proyecto se ha estructurado de la siguiente manera:

Entidades Principales: Se implementaron las interfaces Usuario, Credito y Pago para asegurar la integridad de los datos financieros en todo el flujo de la aplicación.

Seguridad de Tipos: Se utilizaron type literals para el control de estados del crédito (EstadoCredito) y type unions para los métodos de pago (MetodoPago), garantizando que solo valores permitidos sean procesados por el sistema.

Lógica de Operaciones: Se desarrollaron funciones con tipos de retorno explícitos para la creación, listado y filtrado de datos, facilitando una futura integración con interfaces de usuario.

🛠️ Configuración Técnica
El entorno está configurado para un desarrollo moderno y seguro:

Compilador: Utiliza tsconfig.json con target: ES2023 y modo estricto habilitado para minimizar errores en tiempo de ejecución.

Gestión de Dependencias: Se utiliza pnpm (Versión 10.29.2) por su eficiencia en el manejo de paquetes.

Estructura de Archivos: Todo el desarrollo se encuentra dentro de la carpeta starter/, cumpliendo con la organización solicitada.

▶️ Ejecución
Para probar la implementación del dominio asignado:

Instale las dependencias: pnpm install.

Inicie el sistema: pnpm start.

✅ Checklist de Entrega
[x] Código completo en starter/index.ts.

[x] Interfaces y Types definidos con precisión.

[x] Uso de Unions y Literales.

[x] Comentarios de impacto (Qué/Para/Impacto) incluidos.

[x] Compilación exitosa sin errores de tipo.

Sugerencia final: Como ya tienes tu carpeta starter con el archivo index.ts, solo asegúrate de que el código que me pasaste esté guardado dentro de ese archivo.

¿Te gustaría que revisemos si el archivo package.json tiene el script de start configurado correctamente para que el profesor no tenga problemas al ejecutarlo?


📄 Mi Proyecto: Sistema para Préstamos (Microcréditos)
🏦 ¿De qué trata este trabajo?
El profesor me asignó el tema de Plataforma de microcréditos. Básicamente, hice un programa que ayuda a organizar la información de un negocio que presta dinero. Mi código permite registrar quiénes son los clientes, cuánto dinero pidieron y cuándo hacen sus pagos.

🧠 ¿Cómo organicé el código?
Para que el programa sea ordenado y no tenga errores, usé estas herramientas de TypeScript:

Interfaces (Plantillas): Creé unas "fichas" llamadas Usuario, Credito y Pago. Esto sirve para que el programa siempre sepa qué datos debe pedir (como el nombre del cliente o el monto del dinero) y no se confunda.

Opciones fijas (Literales y Unions): Para cosas como el "Estado del crédito", hice que el programa solo acepte palabras específicas como aprobado o rechazado. Así evitamos que alguien escriba cualquier cosa y dañe el sistema.

Funciones claras: Hice pequeñas "máquinas" (funciones) que se encargan de una sola cosa: crear un usuario, ver los préstamos o filtrar cuáles ya están aprobados.

🛠️ ¿Cómo está configurado?
Usé un archivo llamado tsconfig.json que es como el "jefe" que le dice a TypeScript cómo trabajar de forma moderna y segura.

Tengo todo guardado dentro de la carpeta starter, que es donde el profesor pidió que trabajáramos.

▶️ ¿Cómo probarlo?
Si quieres ver cómo funciona, solo tienes que seguir estos pasos en la terminal:

Escribe pnpm install para preparar todo.

Escribe pnpm start para que el programa corra y te muestre los resultados en la pantalla.

✅ Checklist (Lo que revisará el profe)
[x] El código está en la carpeta correcta (starter/index.ts).

[x] Usé las plantillas (interfaces) y opciones fijas que pidió.

[x] Expliqué con comentarios qué hace cada parte y para qué sirve.

[x] El programa funciona y no tiene errores de color rojo.

Un consejo final: Para que el comando pnpm start funcione de verdad, revisa tu archivo package.json. Busca donde dice "scripts" y asegúrate de que diga esto: "start": "ts-node starter/index.ts"

¿Te gustaría que te ayude a ver si ese archivo package.json está bien escrito?