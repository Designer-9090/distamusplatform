// evolucion.ts — La línea evolutiva del ecosistema Distamus.
//
// Distamus nació el 4 de enero de 2023. No empezó como una plataforma con
// muchos servicios, sino como una colección de productos independientes que
// después fueron integrándose.
//
// FUENTE: todo lo que hay aquí está documentado en Distamus Blogs
// (distamus-blogs/src/content/blog). Cuando una versión no tiene entrada
// pública se marca con `sinRegistro: true` en lugar de rellenarla a ojo:
// esto es un archivo histórico, no una reconstrucción.

export type EstadoVersion =
  | 'pasada'
  | 'actual'
  | 'desarrollo'
  | 'proxima'
  | 'salto';

export type EstadoProducto =
  | 'activo'
  | 'desarrollo'
  | 'proxima'
  | 'integrado'
  | 'completado';

export interface Version {
  etiqueta: string;
  fecha?: string;
  titular?: string;
  cambios?: string[];
  /** Sin entrada propia en Distamus Blogs. */
  sinRegistro?: boolean;
  estado?: EstadoVersion;
  /** De dónde sale lo anterior, cuando no es el blog actual. */
  fuente?: { texto: string; url?: string };
}

export interface Producto {
  slug: string;
  orden: string;
  nombre: string;
  lema: string;
  etapa: 'origen' | 'integracion';
  estado: EstadoProducto;
  estadoTexto: string;
  /** La versión que hay que mirar hoy. */
  versionActual: string;
  versionActualNota: string;
  resumen: string;
  versiones: Version[];
  nota: string;
  /** Un giro de la historia que no se deduce mirando las versiones. */
  curiosidad?: { titulo: string; texto: string };
}

export const productos: Producto[] = [
  {
    slug: 'time',
    orden: '01',
    nombre: 'Distamus Time',
    lema: 'El origen: el primer producto de Distamus.',
    etapa: 'origen',
    estado: 'integrado',
    estadoTexto: 'Integrado en Multitasking',
    versionActual: 'v4',
    versionActualNota:
      'Última versión independiente. Cerró su ciclo el 13 de julio de 2026 y hoy vive dentro de Distamus Multitasking.',
    resumen:
      'La evolución más extensa de todo el ecosistema, y la única documentada al completo: once versiones, de Cronómetro y Tiempo sueltos hasta Multi-Time v5. Nació sobre Google Sites y terminó migrando entero a Astro dentro de Multitasking, sin dejar nada por el camino.',
    versiones: [
      {
        etiqueta: 'v1',
        titular: 'Cronómetro y Tiempo, por separado',
        fuente: { texto: 'Registro del equipo de Distamus' },
        cambios: [
          'Nacen las primeras herramientas de tiempo, cada una por su lado: Cronómetro y Tiempo.',
          'Son el germen de lo que años después sería Multi-Time, todavía sin unificar.',
        ],
      },
      {
        etiqueta: 'v1.25',
        titular: 'Llega la Cuenta atrás',
        fuente: { texto: 'Registro del equipo de Distamus' },
        cambios: [
          'Se suma una tercera herramienta independiente: Cuenta atrás.',
        ],
      },
      {
        etiqueta: 'v1.5',
        fecha: 'dic 2024 (aprox.)',
        titular: 'Camino de Windows',
        fuente: { texto: 'Blog histórico en Google Sites' },
        cambios: [
          'Mejoras significativas sobre la herramienta de gestión del tiempo de estudio y trabajo.',
          'Se anuncia que Time llegará en las semanas siguientes a la app de Windows, para usarlo desde el PC.',
        ],
      },
      {
        etiqueta: 'v1.75',
        titular: 'Tareas, y el nacimiento de Multi-Time',
        fuente: { texto: 'Registro del equipo de Distamus' },
        cambios: [
          'Se añaden las Tareas.',
          'Cronómetro, Tiempo y Cuenta atrás se reorganizan y dejan de ser tres piezas sueltas: quedan dos módulos, Multi-Time —que unifica Cronómetro y Tiempo— y Cuenta atrás.',
          'Es el momento en que aparece Multi-Time como tal.',
        ],
      },
      {
        etiqueta: 'v2',
        titular: 'Notas Rápidas',
        fuente: { texto: 'Registro del equipo de Distamus' },
        cambios: [
          'Se incorporan las Notas Rápidas, que llegarían hasta su v4 dentro de Distamus Time v4.',
        ],
      },
      {
        etiqueta: 'v2.1',
        fecha: '23 abr 2025',
        titular: 'Todo desde un mismo lugar',
        fuente: {
          texto: 'Blog 2025 en Google Sites',
          url: 'https://sites.google.com/view/designerhomeweb/website/blog-2025',
        },
        cambios: [
          'Se afina lo que ya funcionaba e integra más funciones y herramientas en una única plataforma.',
          'Experiencia más intuitiva, conectada y coherente: organizar proyectos, coordinar reuniones y seguir metas sin salir del mismo sitio.',
          'Disponible primero en web, con la integración en Android prevista para las semanas siguientes y una sección propia en Windows más adelante.',
        ],
      },
      {
        etiqueta: 'v2.2',
        fecha: '25 may 2025',
        titular: 'El calendario de tareas, rediseñado',
        fuente: {
          texto: 'Blog 2025 en Google Sites',
          url: 'https://sites.google.com/view/designerhomeweb/website/blog-2025',
        },
        cambios: [
          'Calendario de tareas completamente rediseñado, pensado para adaptarse a distintos ritmos y estilos de organización.',
          'Planificación más intuitiva y visual, válida igual para estudios, trabajo o vida personal.',
          'Despliegue en navegador a partir del 1 de junio de 2025, y extensión a Android y Windows entre mediados y finales de verano.',
          'Anunciado junto al setup oficial de Distamus, el lanzamiento de Edu v3 y la app de Android 1.80.2025.',
        ],
      },
      {
        etiqueta: 'v2.3',
        fecha: '2025',
        titular: 'Parar, escuchar y corregir',
        fuente: {
          texto: 'Blog 2025 en Google Sites',
          url: 'https://sites.google.com/view/designerhomeweb/website/blog-2025',
        },
        cambios: [
          'No añade funciones llamativas: nace del feedback recibido tras la v2.2 para corregir errores y reorganizar componentes internos.',
          'El problema más señalado: no se podían eliminar las tareas del calendario una vez creadas. Se empieza a rediseñar por completo el sistema de gestión de tareas y el motor queda preparado para permitirlo en versiones futuras.',
          'El reloj analógico se separa de Multi-Time a un módulo independiente: su código era extenso y comprometía el rendimiento general.',
          'Se asume públicamente que el reloj recién separado aún tiene agujas mal posicionadas o con movimiento errático.',
          'Reestructuración de partes clave del código para dejar una base más estable sobre la que seguir construyendo.',
          'En Windows y Android el salto va directo de la v2.1 a la v2.3: la v2.2 no llegó a esas plataformas.',
        ],
      },
      {
        etiqueta: 'v3',
        fecha: '13 sep 2025',
        titular: 'Renovación completa',
        cambios: [
          'Rediseño integral de la interfaz, corrección de errores y optimización de rendimiento.',
          'En ordenador: paneles personalizables, atajos de teclado y vista clara de tareas, horarios y recordatorios.',
          'En Android: diseño rehecho, gestos táctiles optimizados y accesos rápidos a tareas y temporizadores.',
          'Etiquetado inteligente de tareas y sincronización automática entre dispositivos.',
          'Seguimiento de progreso y recordatorios inteligentes para sostener hábitos.',
          'Se avisó de que la publicación podía tardar horas por el cambio de listas y otras actualizaciones internas.',
        ],
      },
      {
        etiqueta: 'v3.5',
        fecha: '11 oct 2025',
        titular: 'Consolidación técnica',
        cambios: [
          'Optimización integral del núcleo del sistema, no solo corrección de errores.',
          'Tiempos de respuesta reducidos drásticamente y menor consumo de recursos.',
          'Cada componente revisado para aguantar cargas intensivas.',
          'Se anuncia la Dynamic Island que llegaría a Multi-Time, solo en Windows y navegador.',
        ],
      },
      {
        etiqueta: 'v4',
        fecha: '21 dic 2025',
        titular: 'El cierre del ciclo independiente',
        estado: 'actual',
        cambios: [
          'Optimización general del sistema y gestión del estado reforzada para sesiones largas.',
          'Icono mejorado, ajustes finos de configuración y sistema de animaciones renovado.',
          'Multi-Time v5: rediseño integral con widgets modulares, navegación por pestañas, glassmorphism y Dynamic Island interactiva.',
          'Multi-Time v5: reconstruido 100 % responsive desde cero, con safe areas y controles táctiles.',
          'Multi-Time v5: alarmas persistentes con etiquetas y sonidos, temporizador que sobrevive a recargas y cronómetro con vueltas y milésimas.',
          'Multi-Time v5: 26 temas prediseñados, editor de colores en tiempo real y modo de ahorro de energía.',
          'Notas Rápidas v4.',
        ],
      },
    ],
    nota:
      'El 13 de julio de 2026 Time cerró su versión independiente sobre Google Sites: la infraestructura se había vuelto demasiado pesada de mantener. En vez de borrarla, se migró el código completo de Sites v4 a Astro y se integró en Multitasking, donde llegó con la v2.2. Las herramientas clásicas de Time no piden registro, y sus URL llevan siempre el sufijo -time. Nota de archivo: durante un tiempo se citó una v2.5 que en realidad nunca existió — era una errata por la v2.3. Las once actualizaciones que menciona el blog de despedida son las que figuran aquí.',
  },
  {
    slug: 'edu',
    orden: '02',
    nombre: 'Distamus Edu',
    lema: 'El segundo gran producto.',
    etapa: 'origen',
    estado: 'desarrollo',
    estadoTexto: 'v6 presentada, aún no disponible',
    versionActual: 'v3',
    versionActualNota:
      'La v6 se presentó el 31 de mayo de 2026 y está desplegada en distamusedu.vercel.app, pero todavía no está disponible para el público. Habrá nuevos blogs sobre Distamus Edu en breve.',
    resumen:
      'Del v3 se salta directamente al v6. No debe asumirse que existieran públicamente un v4 y un v5. Toda la historia de Edu ocurre sobre Google Sites hasta que la v6 se lleva la plataforma a Astro.',
    versiones: [
      {
        etiqueta: 'v1',
        titular: 'Primero de Bachillerato',
        fuente: { texto: 'Registro del equipo de Distamus' },
        cambios: [
          'Se incorpora 1.º de Bachillerato: el primer curso completo de la plataforma.',
          'A partir de aquí el trabajo se centró en afinar el funcionamiento de cara a la v2.',
        ],
      },
      {
        etiqueta: 'v2',
        titular: 'La versión que no llegó a salir entera',
        fuente: { texto: 'Registro del equipo de Distamus' },
        cambios: [
          'La más extensa de todas: el objetivo era meter en Google Sites todas las materias de Bachillerato.',
          'No fue posible por los límites de tamaño de Sites, así que se canceló en el último momento de cara al público.',
          'Pudo llegar a existir una versión publicada, pero incompleta.',
        ],
      },
      {
        etiqueta: 'v3',
        fecha: '8 nov 2025',
        titular: 'Más de 200.000 textos',
        estado: 'actual',
        cambios: [
          'La mejora de la v2, ya sobre Google Sites y esta vez sí publicada al completo.',
          'Renovación profunda de la plataforma educativa, en contenido y en funcionalidad.',
          'Más de 200.000 textos, además de boletines y materiales de un amplio abanico de materias.',
          'Lanzamiento pospuesto varias veces antes de salir; disponible para todos los usuarios desde el 12 de noviembre.',
          'Última versión de Edu sobre Sites: la siguiente ya sería otra plataforma.',
        ],
      },
      {
        etiqueta: 'v6',
        fecha: '31 may 2026',
        titular: 'Reconstrucción completa',
        estado: 'desarrollo',
        cambios: [
          'Presentada y desplegada en distamusedu.vercel.app, pero todavía no disponible para el público.',
          'Reescritura desde cero: arquitectura, navegación, cobertura de contenido, modelo de evaluación y rendimiento. Sin parches.',
          'Salida de Google Sites y reconstrucción sobre Astro.',
          'Teoría, práctica y evaluación en un único flujo continuo, sin reconstruir el contexto entre pestañas.',
          'Nuevo sistema de planes en tres capas: FREE (acceso al conocimiento), QUANTUM (entrenamiento intensivo) y ULTRA (preparación de excelencia).',
          'El módulo de exámenes exige cuenta activa y verificada: queda cerrado en modo anónimo.',
          'Gratis, sin anuncios, multidispositivo y orientado a Bachillerato y PAU 2026.',
        ],
      },
    ],
    nota:
      'El salto de v3 a v6 es real y está documentado así en el blog: no hay entradas públicas de un v4 ni de un v5. La v2 es el mejor ejemplo de por qué Edu acabó saliendo de Google Sites: se intentó meter ahí todas las materias de Bachillerato y los límites de tamaño de la plataforma lo impidieron.',
  },
  {
    slug: 'book',
    orden: '03',
    nombre: 'Distamus Book',
    lema: 'Otro de los productos originales.',
    etapa: 'origen',
    estado: 'proxima',
    estadoTexto: 'v3 aplazada, sin fecha',
    versionActual: 'v2',
    versionActualNota:
      'La v3 se anunció en marzo de 2026, se pospuso en julio y tenía nueva fecha, el 20 de septiembre de 2026. Esa fecha también se ha aplazado, y por ahora no hay otra.',
    resumen:
      'Entre la v1 y la v2 hubo una v1.5 que amplió idiomas y accesibilidad. La v3 lleva desde marzo en camino y acumula dos aplazamientos.',
    versiones: [
      { etiqueta: 'v1', sinRegistro: true },
      {
        etiqueta: 'v1.5',
        fecha: '20 sep 2025',
        titular: 'Lectura sin fronteras',
        cambios: [
          'Soporte ampliado de idiomas para llegar a más lugares.',
          'Navegación más fluida, tiempos de carga reducidos y diseño renovado.',
          'Mejoras de accesibilidad para adaptarse a más necesidades y contextos.',
        ],
      },
      {
        etiqueta: 'v2',
        estado: 'actual',
        titular: 'La nueva generación de lectura digital',
        cambios: [
          'Anunciada en septiembre de 2025 junto a Game v3, como uno de los dos frentes en los que se concentró el equipo.',
        ],
        sinRegistro: true,
      },
      {
        etiqueta: 'v3',
        titular: 'Un sistema de conocimiento estructurado',
        estado: 'proxima',
        cambios: [
          'Entorno de lectura más estable, claro y estructurado, priorizando la coherencia interna sobre los cambios superficiales.',
          'Consulta rápida de contenidos y organización jerárquica estable.',
          'Base técnica preparada para crecer e integrarse con el resto de servicios.',
          'Disponible en seis idiomas y diseñada para cualquier dispositivo.',
        ],
      },
    ],
    nota:
      'El 31 de julio de 2026 el equipo comunicó el aplazamiento sin fecha: había demasiados frentes abiertos a la vez y prefirieron mover una fecha antes que entregar cuatro proyectos a medias. Después se fijó el 20 de septiembre de 2026, que también se aplazó; este segundo aplazamiento no tiene entrada en el blog y consta por el registro del equipo. Lo que se describe de la v3 es lo anunciado, no una versión publicada.',
  },
  {
    slug: 'game',
    orden: '04',
    nombre: 'Distamus Game',
    lema: 'El cuarto producto inicial.',
    etapa: 'origen',
    estado: 'activo',
    estadoTexto: 'Exclusivo de Windows',
    versionActual: 'v3',
    versionActualNota:
      'Publicada el 20 de septiembre de 2025. Fue la última actualización de Game en 2025.',
    resumen:
      'Game pertenece a la primera generación de productos: no fue una incorporación posterior al ecosistema. Empezó sin propósito claro y con un Tres en raya, pasó por los clásicos y, desde la v3, ya no va de eso: ahora son videojuegos para explorar en Windows.',
    versiones: [
      {
        etiqueta: 'v1',
        titular: 'El Tres en raya y ningún propósito claro',
        fuente: { texto: 'Registro del equipo de Distamus Game' },
        cambios: [
          'Distamus Game nace sin un propósito definido, pero con posibilidades crecientes de acabar publicándose.',
          'El Tres en raya ya estaba aquí: uno de los cimientos de lo que después sería Distapria.',
        ],
      },
      {
        etiqueta: 'v2',
        fecha: '2025',
        titular: 'Tres clásicos y el germen de Distamus Windows',
        fuente: {
          texto: 'Blog 2025 en Google Sites',
          url: 'https://sites.google.com/view/designerhomeweb/website/blog-2025',
        },
        cambios: [
          'Juego de la Serpiente: gráficos renovados con animaciones suaves, modos de desafío cronometrado y supervivencia, puntuaciones con rankings y estadísticas, y controles muy responsivos.',
          'Tetris: mecánicas clásicas perfeccionadas, efectos visuales contemporáneos que respetan la esencia retro, dificultad progresiva y sistema de líneas y combos con efectos especiales.',
          'Pac-Man Edición CEO: laberintos propios de Distamus Game, nuevos power-ups estratégicos, inteligencia artificial mejorada para los fantasmas y elementos sorpresa ocultos.',
          'Se anuncia Distamus Windows: juegos exclusivos que funcionan de forma nativa en el sistema, con acceso sin conexión e integración con el ecosistema Windows.',
          'Optimización de recursos para distintas especificaciones de hardware, tiempos de carga muy reducidos y compatibilidad probada en múltiples configuraciones.',
          'Sistema de actualizaciones automáticas.',
        ],
      },
      {
        etiqueta: 'v3',
        fecha: '20 sep 2025',
        titular: 'El cambio de visión',
        estado: 'actual',
        cambios: [
          '12 juegos completamente optimizados, cada uno con mecánicas propias y gráficos renovados.',
          'Última actualización de Distamus Game en 2025: se pausaron las nuevas versiones para concentrar el equipo en Edu v3 y Book v2.',
          'Aquí cambia la dirección del producto: Distamus Game deja de ser un sitio de juegos clásicos. Ese terreno pasa a ser el de Distapria.',
          'Game pasa a ofrecer videojuegos para explorar en Windows.',
          'Se abandona el plan de lanzarlo para Android y Windows a la vez: queda como exclusivo de Windows.',
        ],
      },
    ],
    nota:
      'Game deja de desarrollarse para Android y pasa a ser exclusivo de Windows, para concentrar el proyecto en una sola plataforma. Y deja también de ser el sitio de los clásicos: eso es hoy Distapria. En 2026 el equipo está desarrollando Pixel Abyss, un juego real para Windows, del que todavía no se puede dar más información. La idea de Distamus Windows, por cierto, apareció por primera vez dentro de la v2 de Game, mucho antes de existir como producto propio.',
    curiosidad: {
      titulo: 'Distamus Game iba a ser lo que hoy es Distapria',
      texto:
        'Durante buena parte de su historia, Game apuntaba a convertirse en un espacio de juegos clásicos. En enero de 2026 el equipo de Game cambió el rumbo: los clásicos se separaron en un proyecto propio —Distapria, creada por ese mismo equipo y en desarrollo justo desde ese mes— y Game se quedó con los videojuegos propios para Windows. Por eso conviven los dos: no son competencia, son la misma decisión vista desde sus dos mitades.',
    },
  },
  {
    slug: 'multitasking',
    orden: '05',
    nombre: 'Distamus Multitasking',
    lema: 'El producto que absorbió a Time.',
    etapa: 'integracion',
    estado: 'activo',
    estadoTexto: 'v2.5 disponible',
    versionActual: 'v2.5',
    versionActualNota:
      'Publicada el 16 de octubre de 2026, con entrada propia en el blog.',
    resumen:
      'El producto mejor documentado del ecosistema: cada versión mayor tiene su entrada en el blog, incluidos los malos momentos.',
    versiones: [
      {
        etiqueta: 'v1',
        fecha: '21 dic 2025',
        titular: 'Una arquitectura unificada',
        cambios: [
          'Nueva arquitectura para gestionar múltiples tareas desde un núcleo de código depurado.',
          'Desarrollado en Astro y concebido como extensión estratégica vinculada a Distamus Pro.',
          'Interfaz con un estándar visual más coherente que el propio Distamus Time.',
          'Despliegue público escalonado mientras se completaban los ajustes de integración.',
        ],
      },
      {
        etiqueta: 'v1.5',
        fecha: 'feb 2026',
        titular: 'El lanzamiento más duro hasta ahora',
        cambios: [
          'El propio equipo lo reconoció como el peor lanzamiento hecho hasta la fecha.',
          'Bugs críticos, inestabilidad, fallos en el inicio en móvil y problemas de rendimiento en producción.',
          'Contexto: en enero se perdió el proyecto completo — infraestructura, trabajo acumulado y avances internos.',
          'Se lanzó igualmente en febrero para no paralizar Distamus, con el coste de llegar sin madurez suficiente.',
          'El fin de semana del 14 y 15 de febrero se dedicó por completo a estabilizar: corrección sistemática de bugs, revisión de la multitarea en móvil, arranque y estado persistente, y limpieza del código heredado.',
        ],
      },
      {
        etiqueta: 'v2',
        fecha: '11 abr 2026',
        titular: 'Estabilidad, seguridad y autenticación',
        cambios: [
          'Parte del segundo Distamus Spring Update, centrado en estabilidad, cumplimiento y seguridad.',
          'Se elimina la reproducción de música en segundo plano por restricciones de plataformas externas como YouTube.',
          'Corrección de los errores críticos detectados en la v1.5 y mejor gestión interna de sesiones.',
          'Sistema de login optimizado y proceso de registro mejorado.',
          'El cambio de contraseña deja de exigir la contraseña anterior.',
          'Mejoras claras de interfaz y de los flujos de entrada y salida de la aplicación.',
        ],
      },
      {
        etiqueta: 'v2.1',
        fecha: '15 may 2026',
        titular: 'Interfaz nueva y Tareas v1.5',
        cambios: [
          'Renovación integral del diseño: paleta optimizada, disposición más equilibrada y tipografía más legible.',
          'Jerarquía de elementos replanteada para reducir la carga cognitiva.',
          'Corrección definitiva del cambio de contraseña, con reescritura completa del flujo de validación.',
          'Tareas v1.5: panel Kanban minimalista, vista compacta, etiquetas personalizables y creación rápida en ventana emergente.',
          'El equipo reconoce que la envergadura técnica habría justificado llamarla v2.6 o incluso v3.0.',
        ],
      },
      {
        etiqueta: 'v2.2',
        fecha: '25 jul 2026',
        titular: 'Distamus Time entra en casa',
        cambios: [
          'Time deja de ser un rincón dentro de Multitasking y pasa a tener portada propia, con reloj en vivo y saludo según la hora.',
          'Multi-Time: reloj con selector de zona horaria y formato de 12 o 24 horas, alarmas con etiqueta y cinco tonos, temporizador de cuenta atrás y cronómetro con vueltas y milésimas.',
          'Focus Pomodoro con los tres ciclos separados —trabajo, descanso corto y descanso largo— y contador de sesiones del día.',
          'Verificación en dos pasos al iniciar sesión: código de 8 dígitos por correo, con relleno automático y pegado del código completo.',
          'Avisos en ambas direcciones para no perderse entre la versión libre y el panel completo.',
          'Se fija la regla del sufijo -time para las versiones libres de Time.',
        ],
      },
      {
        etiqueta: 'v2.3',
        fecha: '20 ago 2026',
        titular: 'Entra en Flow',
        cambios: [
          'Flow: nueva capa de continuidad que conserva el hilo de los proyectos y el contexto de trabajo.',
          'Tres piezas — Hilos para separar frentes, Actividad como línea temporal de cambios y decisiones, y Memoria de Flow para lo que no debe perderse.',
          'Captura rápida de notas, tareas, ideas, decisiones y enlaces sin romper el ritmo.',
          'Cada hilo guarda la última acción y el próximo paso: eso es lo que Flow muestra al volver.',
          'Al cambiar de hilo, Flow guarda el contexto del anterior antes de activar el nuevo.',
          'La verificación en dos pasos pasa a activarse o desactivarse desde Ajustes, con gestión de los dispositivos con acceso.',
          'Correcciones críticas en la carga de datos, guardado más fiable y mejoras en móvil.',
          'Se adelantan las Notas y Tareas 100 % locales de Distamus Time.',
        ],
      },
      {
        etiqueta: 'v2.4',
        fecha: '22 sep 2026',
        titular: 'Widgets, Informes y Dynamic Island',
        cambios: [
          'El Dashboard deja de ser solo un punto de entrada: Widgets y gráficas con la actividad de los últimos siete días, los pendientes y el progreso.',
          'Informes: resumen de una semana, un mes o un rango elegido, exportable en PDF, CSV o Markdown. Describen, no evalúan: sin puntuaciones ni comparaciones entre usuarios.',
          'Dynamic Island: el temporizador de Multi-Time, Focus Pomodoro y Notas sigue visible al salir de la sección. Tareas llegará más adelante.',
          'Recordatorios al entrar: tareas pendientes, notas marcadas y próximos pasos de Flow, sin ser todavía avisos del sistema operativo.',
          'Nuevo diseño de Flow: jerarquía más directa, paneles adaptables y menos interrupciones.',
          'Time reúne por primera vez Tareas y Notas locales dentro de Multitasking, usables a la vez y sin salir del dispositivo.',
          'Arreglos en el acceso: pegar el código de verificación desde cualquier casilla y ver los segundos exactos que faltan para reintentar.',
        ],
      },
      {
        etiqueta: 'v2.42',
        fecha: '23 sep 2026',
        titular: 'Alarmas conectadas y Multi-Time en el móvil',
        fuente: { texto: 'Registro del equipo de Distamus Multitasking' },
        cambios: [
          'Versión menor, publicada al día siguiente de la v2.4 y sin entrada propia en el blog.',
          'Las alarmas de Multi-Time se sincronizan entre dispositivos sin recargar, y se fusionan una a una: una copia antigua ya no borra las creadas en otro dispositivo.',
          'Notificaciones en móviles y tablets Android, que antes no llegaban a mostrarse. Por ahora solo con Multitasking abierto o recién minimizado.',
          'Multi-Time más cómodo con el dedo: se pasa de una pestaña en una, la barra inferior se puede deslizar y de Global se llega a Metas, y viceversa.',
          'De 16 a 94 zonas horarias, con buscador renovado: por región, por país y sin tildes.',
          'Se corrige el bucle de espera de 60 segundos al iniciar sesión desde un dispositivo nuevo.',
          '«Reducir animaciones» alcanza por fin a contadores, scroll y fondos animados, no solo a lo hecho con CSS.',
        ],
      },
      {
        etiqueta: 'v2.5',
        fecha: '16 oct 2026',
        titular: 'Privacidad, estudio y seguridad',
        estado: 'actual',
        cambios: [
          'Notas privadas por defecto: publicar pide confirmación y las notas públicas son anónimas salvo que se muestre el alias. Las que ya eran públicas pasaron a anónimas.',
          'Notas con contraseña: se cifran en el navegador antes de guardarse; al servidor solo llega el texto cifrado y no hay forma de recuperarlas sin la contraseña.',
          'Tareas de estudio: asignatura, subtareas, cuenta atrás hasta la fecha y estimación en pomodoros. El botón «Estudiar» abre Pomodoro con la tarea ya escrita.',
          'Renovación de las cuatro herramientas de Distamus Time con un mismo diseño y cabecera; Multi-Time se reescribe por dentro sin perder funciones.',
          'Cuentas y Account rediseñadas: secciones, lista de dispositivos y exportación de tareas y notas en JSON. Se arregla subir y quitar el avatar.',
          'Más seguridad: rechazo de peticiones de otros sitios, límite de intentos por minuto, HTTPS obligatorio y respuestas con datos personales fuera de caché.',
          'Página de planes pública: Free, Pro y Team llegarán en 2027, sin planes ilimitados y con un Free más amplio que hoy.',
        ],
      },
    ],
    nota:
      'Multitasking es el producto que recogió el testigo de Time. Su historia incluye la pérdida total del proyecto en enero de 2026 y una reconstrucción a contrarreloj que marcó la v1.5. Tras la v2.5 siguen anunciados, sin fecha, la sesión persistente en Android, los avisos fuera de la aplicación y el Dynamic Island en Tareas.',
  },
  {
    slug: 'octopus',
    orden: '06',
    nombre: 'Distamus Octopus',
    lema: 'Todavía sin versión estable tradicional.',
    etapa: 'integracion',
    estado: 'activo',
    estadoTexto: 'Beta v0.75 disponible',
    versionActual: 'Beta v0.75',
    versionActualNota:
      'Publicada el 1 de octubre de 2026, tras fallar dos fechas (el 5 y el 12 de septiembre). Llega con Distamus Octopus AI y el modo Vídeo; Document Mode, rehecho por dentro, sigue cerrado por mantenimiento hasta corregir sus errores.',
    resumen:
      'Octopus está en una fase de evolución temprana, a diferencia de Time, Edu o Book: aún no ha tenido una versión estable tradicional.',
    versiones: [
      {
        etiqueta: 'Beta v0.5',
        fecha: '23 jul 2026',
        titular: 'El estudio creativo abre',
        estado: 'pasada',
        cambios: [
          'Lanzamiento dentro de la actualización conjunta que sacó Book, Multitasking y Octopus a la vez.',
          'Estudio creativo y editor de diseño con dos modos de trabajo: Designer Mode y Document Mode.',
          'Procesamiento local, sin cuentas, directamente en el navegador.',
          'Las semanas siguientes se dedicaron a corregir errores, mejorar la estabilidad y analizar el feedback recibido.',
        ],
      },
      {
        etiqueta: 'Beta v0.75',
        fecha: '1 oct 2026',
        titular: 'IA en el navegador y el modo Vídeo',
        estado: 'actual',
        cambios: [
          'Distamus Octopus AI: tres modelos (MI-GAN, LaMa ligero y LaMa) que borran de una imagen lo que se marque, sin que salga del equipo. Octopus recomienda uno según el ordenador y se activa de forma progresiva.',
          'Un tercer modo de trabajo, Vídeo, con línea de tiempo por pistas y exportación en el navegador, junto a Designer Mode y Document Mode.',
          'Document Mode, rehecho por dentro (páginas sincronizadas, márgenes por página, sangrado y más tamaños de hoja), llega cerrado por mantenimiento hasta corregir los errores de formato y de foco.',
          'Designer Mode suma filtros y efectos, marcos con forma, reemplazar imagen, colores de SVG, duplicar página y grupos.',
          'Crear en dos pasos (primero el modo, luego el formato), tema claro y oscuro desde la barra lateral y una página de Novedades dentro de la app.',
          'Agosto se dedicó por completo a esta versión. Prevista para el 5 de septiembre, se aplazó al 12 y el 12 volvió a aplazarse; en los dos casos, por el JavaScript del editor.',
        ],
      },
    ],
    nota:
      'Sobre Android, el equipo ha sido explícito: quieren conseguirlo, pero Octopus está construido alrededor de tecnologías basadas en Canvas y adaptar toda la experiencia a móvil es considerablemente más complejo de lo que parece.',
  },
  {
    slug: 'distapria',
    orden: '07',
    nombre: 'Distapria',
    lema: 'El caso contrario a todos los demás.',
    etapa: 'integracion',
    estado: 'completado',
    estadoTexto: '1.01 disponible',
    versionActual: '1.01',
    versionActualNota:
      'Publicada el 1 de octubre de 2026. Es 1.01 y no «v1.01»: Distapria es un producto consolidado cuya sala se ve igual de una versión a otra, y la «v» se reserva para productos que todavía cambian por fuera.',
    resumen:
      'Distapria no sigue una evolución del tipo v1 → v2 → v3: salió ya en su estado previsto. Sus actualizaciones corrigen y añaden juegos sin cambiar la sala, por eso se numeran sin «v».',
    versiones: [
      {
        etiqueta: '22 ago 2026',
        fecha: '22 ago 2026',
        titular: 'Se abren las puertas',
        estado: 'pasada',
        cambios: [
          'En desarrollo desde enero de 2026, definiendo su identidad y sus diferencias con Distamus Game.',
          'Dos alas arcade: Arcade Clásico, con las recreativas de siempre, y Arcade Mental, con lógica, deducción, números, palabras y percepción.',
          '21 máquinas jugables desde el primer día, dentro de un catálogo mayor ya diseñado.',
          'Disponible en Windows, Android y la Web.',
          'No sustituye a Distamus Game: son dos proyectos distintos que conviven en el ecosistema.',
        ],
      },
      {
        etiqueta: '1.01',
        fecha: '1 oct 2026',
        titular: 'Dos juegos nuevos y partidas que no se pierden',
        estado: 'actual',
        cambios: [
          'Dos máquinas nuevas: el tres en raya, con monedas, eventos por ronda y una tienda (Pista, Siesta, Borrador y Seguro), y Simon dice.',
          'Revisión de los juegos mentales: la primera casilla del Buscaminas nunca es mina, el Sudoku y los Nonogramas aceptan cualquier solución válida, Conecta números cambia de ruta en cada nivel y Memoria permite unos fallos por dificultad.',
          'Cada partida empieza distinta y todos los mentales se juegan tocando la pantalla.',
          'Las partidas se guardan solas y al volver se puede continuar donde se dejaron; el pasaporte .distapria lleva ya todos los juegos y las partidas guardadas.',
          'Perder una vida se ve: un corazón se rompe en el centro de la pantalla.',
          'Modo claro para toda la sala y controles táctiles más fáciles de pulsar en el móvil.',
        ],
      },
    ],
    nota:
      'El catálogo se inclinará hacia el Arcade Mental: habrá más máquinas mentales que clásicas.',
  },
  {
    slug: 'fleurox',
    orden: '08',
    nombre: 'Distamus Fleurox',
    lema: 'La primera herramienta interna del ecosistema.',
    etapa: 'integracion',
    estado: 'activo',
    estadoTexto: 'Herramienta interna',
    versionActual: '22 sep 2026',
    versionActualNota:
      'Última actualización publicada: la familia Radiance, la capa 3D, las siluetas y el editor en cuatro pestañas. Fleurox no sigue una numeración de versiones pública.',
    resumen:
      'No es un producto para el público: es un sistema de generación visual procedural reservado para los equipos de Distamus. No guarda los fondos, guarda cómo generarlos — una seed y unos parámetros que la GPU convierte en la misma composición en cualquier dispositivo, sin imágenes pesadas ni IA generativa.',
    versiones: [
      {
        etiqueta: '10 sep 2026',
        fecha: '10 sep 2026',
        titular: 'Presentación',
        cambios: [
          'Sistema visual procedural que genera fondos y composiciones mediante código, con WebGL y GLSL, en lugar de guardar colecciones de imágenes.',
          'Cada composición sale de una seed: la misma seed vuelve a dar la misma composición, y una distinta da otra.',
          'Nueve composiciones a la vez, cada una con su propia seed, paleta y configuración.',
          'Puede incorporar títulos, categorías, fechas y elementos de marca a la composición.',
          'Exportación prevista a 1080p, 1440p, 4K o resolución personalizada, volviendo a renderizar en lugar de escalar.',
          'Sin IA generativa: matemáticas y shaders escritos a mano.',
          'Reservado para los equipos de Distamus y usado en primer lugar en Distamus Blogs.',
        ],
      },
      {
        etiqueta: '12 sep 2026',
        fecha: '12 sep 2026',
        titular: 'Colecciones, paletas y 4K',
        cambios: [
          'Doce paletas nuevas, diecisiete en total, más la opción de que la seed elija.',
          'Alias para los nombres largos de paleta: antes un nombre abreviado se ignoraba sin avisar.',
          'Generación por tandas de nueve o dieciséis composiciones, para elegir comparando.',
          'Composiciones de trazo orgánico, que aguantan mejor el texto encima.',
          'Exportación real a 3840 × 2160, recalculada a esa resolución.',
          'La biblioteca llega a 38 shaders en seis familias.',
          'El propio equipo lo sigue llamando prototipo: quedaban pendientes la interfaz de edición, los equipos con GPU limitada y la integración fuera de Blogs.',
        ],
      },
      {
        etiqueta: '22 sep 2026',
        fecha: '22 sep 2026',
        titular: 'Fleurox es imparable',
        estado: 'actual',
        cambios: [
          'Radiance, la octava familia: organiza el color por el ángulo respecto a un foco de luz, con seis generadores como Feather Plume, Lens Flare o Corona.',
          'Supersampling a 1,5× y 2× para bordes limpios en pantallas de alta densidad.',
          'Siluetas: 18 formas de recorte que no tocan el shader ni el determinismo de la seed.',
          'Capa 3D opcional con Three.js, que solo se carga cuando se activa.',
          'Logotipos y sellos PNG o SVG superpuestos con zonas seguras y color sincronizado con la paleta.',
          'El editor pasa de una columna larga a cuatro pestañas —Forma, Color, Texto y Salida— con la paleta resuelta siempre a la vista.',
          'Guardar en local, recuperar configuraciones JSON y compartir una composición por enlace.',
        ],
      },
    ],
    nota:
      'Fleurox nace ligado a otro anuncio: los equipos de Distamus, hasta ahora vinculados a productos concretos, se ampliarán el próximo verano en todos los productos y servicios. Fleurox es una de las primeras herramientas pensadas para esa nueva estructura.',
  },
];

export const lineasAbiertas = [
  { producto: 'Octopus', destino: 'Document Mode', detalle: 'Reapertura tras corregir errores · sin fecha' },
  { producto: 'Book', destino: 'v3', detalle: 'Aplazada de nuevo, sin fecha' },
  { producto: 'Multitasking', destino: 'Android', detalle: 'Sesión persistente y avisos · sin fecha' },
  { producto: 'Game', destino: 'Pixel Abyss', detalle: 'Un juego real para Windows' },
];

export const porEtapa = (etapa: Producto['etapa']) =>
  productos.filter(producto => producto.etapa === etapa);

export const porSlug = (slug: string) => productos.find(producto => producto.slug === slug);
