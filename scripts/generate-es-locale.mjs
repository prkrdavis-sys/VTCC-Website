import { readFileSync, writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const rootDir = join(dirname(fileURLToPath(import.meta.url)), '..')
const en = JSON.parse(readFileSync(join(rootDir, 'content/locales/en.json'), 'utf8'))

const es = JSON.parse(JSON.stringify(en))

Object.assign(es.ui, {
  languageLabel: 'Idioma',
  faxLabel: 'Fax',
  payerListTitle: 'Pagadores aceptados y vías de financiamiento',
  fullPayerListLabel: 'Ver la lista completa de pagadores y fuentes de financiamiento',
  backToResources: 'Volver a todos los recursos',
  downloadLabel: 'Descargar',
  expandAll: 'Expandir todo',
  collapseAll: 'Contraer todo',
  guidesNavLabel: 'Preguntas y guías',
  ageRangeLabel: 'Edades que atiende',
  meetTheTeamLabel: 'Conozca al equipo',
  relatedProgramsLabel: 'Programas relacionados',
  programGoalsLabel: 'Metas',
  programStructureLabel: 'Cómo está estructurado el programa',
  placeholderStaffNote:
    'Los nombres, fotos y cargos del personal son marcadores de posición hasta que VTCC apruebe las biografías publicadas.',
})

Object.assign(es.company, {
  name: 'Victoria Transcultural Clinical Center',
  shortName: 'VTCC',
  tagline: 'Servicios de salud mental y conductual para familias diversas',
})

es.navigation.main = [
  { label: 'Servicios', href: '/#services' },
  { label: 'Comenzar', href: '/get-started' },
  { label: 'Seguro', href: '/insurance' },
  { label: 'Referentes', href: '/referrers' },
  { label: 'Preguntas y Guías', href: '/resources' },
  { label: 'Acerca de', href: '/about' },
  { label: 'Contacto', href: '/contact' },
  { label: 'Carreras', href: '/career' },
]

es.navigation.utility = [
  { label: 'Solicitar Servicios', href: '/contact', style: 'cta' },
  { label: 'Referir un Cliente', href: '/referrers' },
  { label: 'Llamar a Fairfax', href: 'tel:17032186599' },
]

es.navigation.headerGroups = [
  {
    label: 'Servicios',
    href: '/#services',
  },
  {
    label: 'Preguntas y Guías',
    links: [
      { label: 'Comenzar', href: '/get-started' },
      { label: 'Seguro', href: '/insurance' },
      { label: 'Terapia ABA', href: '/aba' },
      { label: 'Programa de Primeros Aprendices', href: '/early-learners' },
      { label: 'Programa de Alimentación', href: '/feeding-program' },
      { label: 'Grupo de Habilidades Sociales', href: '/social-skills-group' },
      { label: 'Preguntas y Guías', href: '/resources' },
    ],
  },
  {
    label: 'Para proveedores',
    links: [{ label: 'Referir un cliente', href: '/referrers' }],
  },
  {
    label: 'Acerca de VTCC',
    links: [
      { label: 'Acerca de', href: '/about' },
      { label: 'Contacto', href: '/contact' },
    ],
  },
  {
    label: 'Carreras',
    href: '/career',
  },
  {
    label: 'Formularios',
    href: '/resources/forms',
  },
]

es.navigation.headerActions = [
  { label: 'Solicitar servicios', href: '/contact', style: 'primary' },
]

Object.assign(es.ui, {
  careerFileChoose: 'Elegir un archivo',
  careerFileDrop: 'Suelte aquí su currículum o documento de apoyo',
  careerFileHint: 'PDF, DOC, DOCX o TXT. Tamaño máximo: 5 MB.',
  careerFileError: 'Elija un archivo PDF, DOC, DOCX o TXT de hasta 5 MB.',
  careerFileRemove: 'Eliminar archivo',
  careerFormSubmitting: 'Preparando la solicitud...',
  careerFormSuccess: 'Su solicitud de muestra está lista. En una versión de producción, VTCC la recibiría mediante un proceso seguro aprobado.',
  careerFormError: 'No pudimos preparar la solicitud. Revise los campos marcados e inténtelo de nuevo.',
})

Object.assign(es.hero, {
  eyebrow: 'Atendiendo a niños, adolescentes y familias en el norte de Virginia',
  headline:
    'ABA y programas especializados para niños y familias',
  subheadline:
    'Victoria Transcultural Clinical Center ofrece servicios conductuales y de salud mental culturalmente responsivos para niños, adolescentes y familias. Nuestro equipo apoya a las familias mediante terapia ABA individualizada, programas especializados, colaboración con padres y orientación sobre financiamiento.',
  supportingLine:
    'Atendemos a familias a través de Medicaid, organizaciones de atención administrada, seguros comerciales y vías de financiamiento del condado/FAPT, sujeto a elegibilidad y verificación del plan.',
})

es.hero.actions = [
  { label: 'Solicitar Servicios', href: '#contact', style: 'primary' },
  { label: 'Referir un Cliente', href: '#referrers', style: 'secondary' },
  { label: 'Llamar a VTCC', href: 'tel:17032186599', style: 'ghost' },
]

es.sections.careers = {
  eyebrow: 'Carreras en VTCC',
  title: 'Aporte sus fortalezas a un trabajo que importa',
  intro:
    'Únase a un equipo que ayuda a niños, adolescentes y familias a avanzar con atención práctica, respetuosa y culturalmente responsiva.',
  applyLabel: 'Solicitar empleo',
  applyHref: '/career/apply',
  overviewLabel: 'Explore oportunidades',
  pillars: [
    {
      title: 'Las personas primero',
      body: 'Nos apoyamos para que cada miembro del equipo pueda hacer un trabajo cuidadoso y confiable.',
    },
    {
      title: 'Atención culturalmente responsiva',
      body: 'Escuchamos a las familias y colegas, respetamos sus experiencias y damos espacio a distintas perspectivas.',
    },
    {
      title: 'Espacio para crecer',
      body: 'Valoramos la supervisión, la colaboración y el desarrollo constante en cada etapa profesional.',
    },
  ],
  quotes: {
    eyebrow: 'Del equipo',
    title: 'Cómo es trabajar en VTCC',
    intro:
      'Los colegas comparten cómo se siente el trabajo, el apoyo y el día a día. Estas citas son marcadores de posición hasta que el personal comparta comentarios aprobados.',
    items: [
      {
        quote:
          'Aquí irá una cita de un compañero de equipo sobre la colaboración, la supervisión y el apoyo en el trabajo.',
        name: 'Nombre del empleado',
        role: 'Marcador de posición · Puesto, credenciales',
        style: 'thought',
      },
      {
        quote:
          'Aquí irá una cita de un colega sobre la atención culturalmente responsiva y el trabajo con las familias.',
        name: 'Nombre del empleado',
        role: 'Marcador de posición · Puesto, credenciales',
        style: 'speech',
      },
      {
        quote:
          'Aquí irá una cita del personal sobre el crecimiento profesional y el sentido del trabajo.',
        name: 'Nombre del empleado',
        role: 'Marcador de posición · Puesto, credenciales',
        style: 'thought',
      },
    ],
  },
  opportunity: {
    eyebrow: 'Por qué trabajar con VTCC',
    title: 'Un lugar de trabajo enfocado en el progreso significativo',
    body: 'Nuestro trabajo se basa en las relaciones. Buscamos personas que aporten cuidado profesional, curiosidad y respeto a cada interacción.',
    items: [
      'Colabore con un equipo multidisciplinario',
      'Apoye a niños, adolescentes y familias en el norte de Virginia',
      'Aprenda mediante supervisión, comentarios y resolución compartida de problemas',
      'Contribuya a una organización en crecimiento con una misión comunitaria clara',
    ],
  },
  steps: {
    eyebrow: 'Qué puede esperar',
    title: 'Un camino claro desde la solicitud hasta la conversación',
    intro: 'Queremos que el proceso sea claro, respetuoso y valioso para su tiempo.',
    items: [
      {
        title: 'Comparta su experiencia',
        body: 'Cuéntenos sobre su experiencia, intereses y el tipo de trabajo que espera realizar.',
      },
      {
        title: 'Conozca al equipo',
        body: 'Si su experiencia coincide con una oportunidad, le invitaremos a conversar.',
      },
      {
        title: 'Hablemos del puesto',
        body: 'Conversaremos sobre responsabilidades, apoyo, disponibilidad y próximos pasos.',
      },
    ],
  },
  closing: {
    title: '¿Listo para dar el siguiente paso?',
    body: 'Envíe una solicitud de muestra para conocer la información que VTCC pediría a futuros candidatos.',
    buttonLabel: 'Solicitar empleo',
  },
  facts: [
    {
      value: 'Clínica de Fairfax',
      label: '10565 Fairfax Boulevard, Suite 300',
    },
    {
      value: 'Fundado en 2001',
      label: 'Atención a niños, adolescentes y familias',
    },
    {
      value: 'Programas de ABA',
      label: 'Terapia, primeros aprendices, alimentación y habilidades sociales',
    },
  ],
  factsNote:
    'Fairfax es la única oficina publicada en el sitio actual. Esta página no indica una cifra de empleados porque VTCC no ha publicado un total de personal.',
  structure: {
    eyebrow: 'Cómo se organiza el equipo',
    title: 'Roles clínicos claros, del técnico al analista',
    intro:
      'Los casos de ABA los diseña un analista de conducta certificado por la junta y los llevan a cabo técnicos capacitados bajo esa supervisión. Los programas especializados acompañan esa estructura clínica. Los títulos siguientes describen cómo se organiza la atención, no un organigrama ni una plantilla publicados.',
    roles: [
      {
        title: 'Técnico de conducta (BT)',
        level: 'Atención directa',
        body: 'Los BT brindan la mayoría de las sesiones diarias de ABA. Implementan el plan de tratamiento, recopilan datos y practican habilidades con el niño bajo la dirección de un BCBA. Muchos BT completan la ruta de capacitación RBT de VTCC mientras trabajan.',
      },
      {
        title: 'Técnico de conducta líder sénior (SLBT)',
        level: 'Apoyo clínico avanzado',
        body: 'Los SLBT son técnicos con experiencia que asumen ayuda clínica de mayor nivel: apoyo en evaluaciones, capacitación de nuevos empleados, acompañamiento en sesión, instrucción de Safety-Care y entrevistas de la lista inicial del hogar.',
      },
      {
        title: 'Analista estudiante',
        level: 'Práctica de posgrado',
        body: 'RBT inscritos en una maestría que califica y que acumulan horas de trabajo de campo restringidas y no restringidas de la BACB en el empleo, bajo un supervisor calificado y un contrato de trabajo de campo firmado.',
      },
      {
        title: 'Analista de conducta certificado por la junta (BCBA)',
        level: 'Liderazgo clínico',
        body: 'Los BCBA evalúan necesidades, redactan planes de tratamiento y de apoyo conductual, supervisan a los técnicos, capacitan a los cuidadores y dan seguimiento al progreso. La práctica independiente en Virginia también requiere licencia estatal.',
      },
      {
        title: 'Clínicos de programas especializados',
        level: 'Primeros aprendices, alimentación y habilidades sociales',
        body: 'Los clínicos de los programas especializados de VTCC apoyan el aprendizaje temprano, la alimentación y las habilidades sociales con el mismo enfoque familiar y culturalmente responsivo.',
      },
      {
        title: 'Apoyo de oficina y operaciones',
        level: 'Operaciones de la clínica',
        body: 'El formulario público de empleo de VTCC también recibe interés en puestos administrativos de oficina y pasantías que sostienen la programación, la admisión y el funcionamiento de la clínica.',
      },
    ],
  },
  differentiator: {
    eyebrow: 'En qué se diferencia VTCC de muchas clínicas ABA',
    title: 'Nosotros impartimos el programa de capacitación RBT',
    body: 'Una ruta común en ABA es enviar a los técnicos nuevos a un curso de 40 horas de un tercero y a un evaluador externo. VTCC imparte el programa de capacitación RBT. Los técnicos de conducta nuevos completan aquí el curso de credencialización RBT de 40 horas, VTCC realiza la evaluación de competencia internamente y el examen RBT se presenta en un centro Pearson VUE / Pearson.',
    steps: [
      {
        title: 'Curso RBT de 40 horas',
        body: 'La capacitación incluye el plan de estudios de 40 horas de Técnico de Conducta Registrado que cumple los requisitos de la BACB. La BACB no imparte este curso; lo ofrecen empleadores, universidades o capacitadores aprobados. VTCC ofrece ese curso como parte de la capacitación laboral.',
      },
      {
        title: 'Evaluación de competencia interna',
        body: 'Después del curso, un evaluador calificado de VTCC realiza la evaluación inicial de competencia RBT. La evaluación comprueba que el técnico puede desempeñar las tareas requeridas antes de solicitar la certificación a la BACB.',
      },
      {
        title: 'Examen en Pearson VUE',
        body: 'El examen RBT lo administra Pearson VUE en un Pearson Professional Center u otro sitio autorizado. VTCC no administra el examen. Tras la aprobación de la solicitud ante la BACB, el candidato programa el examen por computadora a través de Pearson.',
      },
    ],
  },
  tabsLabel: 'Secciones de empleo',
  tabs: [
    { id: 'behavior-technician', label: 'Técnico de conducta' },
    { id: 'bcba', label: 'BCBA' },
    { id: 'programs', label: 'Programas para empleados' },
    { id: 'clinic', label: 'Clínica y reconocimiento' },
  ],
  postings: {
    bt: {
      kicker: 'Puesto principal',
      title: 'Técnico de conducta (BT)',
      meta: 'Interés de tiempo completo, tiempo parcial y pasantía · Fairfax, Virginia',
      summary:
        'Los técnicos de conducta brindan terapia ABA directa bajo supervisión de un BCBA. Este es el puesto clínico principal de contratación de VTCC y el punto de entrada habitual a la ruta RBT.',
      youWill: {
        title: 'Qué hará',
        items: [
          'Implementar planes de adquisición de habilidades y de apoyo conductual escritos por el BCBA',
          'Recopilar datos de sesión para que el equipo clínico revise el progreso',
          'Practicar con el niño habilidades de comunicación, vida diaria, juego y conductas de reemplazo más seguras',
          'Trabajar en hogares y otros entornos naturales, y en la clínica cuando el caso esté programado allí',
          'Compartir observaciones con el BCBA supervisor y seguir el plan de tratamiento tal como está escrito',
          'Colaborar con los cuidadores durante las sesiones para que las estrategias se usen en la rutina diaria',
        ],
      },
      training: {
        title: 'Capacitación y credencial RBT',
        body: 'La capacitación de técnico de conducta de VTCC incluye el curso de credencialización RBT de 40 horas. Después de ese curso, la empresa realiza internamente la evaluación inicial de competencia. El examen RBT se presenta en un centro Pearson VUE / Pearson, no en la clínica. La certificación sigue dependiendo de la elegibilidad de la BACB, de la aprobación de la solicitud y del examen. El papel de VTCC es ofrecer el curso, la evaluación de competencia interna y la práctica supervisada.',
      },
      requirements: {
        title: 'Qué pide este puesto',
        items: [
          'Interés genuino en trabajar con niños, adolescentes y familias',
          'Puntualidad en las sesiones programadas y comunicación clara con los supervisores',
          'Disposición para completar el curso RBT de 40 horas de VTCC y la evaluación de competencia interna',
          'Comodidad para implementar planes escritos y recopilar datos bajo supervisión de un BCBA',
          'Capacidad de cumplir las reglas de elegibilidad RBT de la BACB si busca la certificación (incluida la educación y las verificaciones de antecedentes o de registro de abuso que exijan la BACB o Virginia)',
        ],
        note: 'El formulario público de empleo de VTCC también incluye Técnico de Conducta Calificado (QBT) como opción de interés. Algunos técnicos comienzan el trabajo directo mientras completan la credencial RBT.',
      },
      applyLabel: 'Solicitar como técnico de conducta',
      applyRole: 'Behavior Technician (BT)',
      applyHref: '/career/apply',
    },
    bcba: {
      kicker: 'Liderazgo clínico',
      title: 'Analista de conducta certificado por la junta (BCBA)',
      meta: 'Puesto clínico de supervisión · La práctica en Virginia requiere licencia estatal',
      summary:
        'Los BCBA lideran la evaluación ABA, la planificación del tratamiento, la supervisión de técnicos y la capacitación de cuidadores. Esta sección indica la base de educación, certificación y licencia para ejercer como analista de conducta en Virginia.',
      education: {
        title: 'Educación mínima',
        body: 'Los solicitantes necesitan un título de posgrado que cumpla los requisitos actuales de grado de la Behavior Analyst Certification Board (BACB). En la práctica, suele ser una maestría en análisis de conducta, educación, psicología o un campo relacionado, más el curso de posgrado requerido en análisis de conducta. Las reglas de curso y de grado las establece la BACB y pueden cambiar; los candidatos deben confirmar los requisitos vigentes en bacb.com antes de solicitar.',
      },
      certification: {
        title: 'Certificación BACB',
        body: 'El trabajo independiente en este puesto requiere la certificación vigente de Board Certified Behavior Analyst (BCBA) de la BACB. La certificación se obtiene al completar el grado y el curso requeridos, acumular trabajo de campo supervisado y aprobar el examen BCBA. VTCC espera que los BCBA ejerzan según el Código de Ética para Analistas de Conducta de la BACB.',
      },
      licensing: {
        title: 'Licencia en Virginia',
        body: 'La ley de Virginia exige una licencia para ejercer como analista de conducta. La Junta de Medicina de Virginia otorga la credencial de Licensed Behavior Analyst (LBA) a quienes tienen certificación BCBA vigente y cumplen las reglas de solicitud de la Junta. Quienes aún no estén licenciados en Virginia deben poder obtener el LBA antes de ejercer de forma independiente. Tener solo el certificado BCBA no es una licencia para ejercer en Virginia.',
      },
      youWill: {
        title: 'Qué hará',
        items: [
          'Evaluar a los niños y redactar planes individualizados de tratamiento y de apoyo conductual',
          'Supervisar a los técnicos de conducta y revisar los datos de sesión',
          'Capacitar a padres y cuidadores para que las habilidades se practiquen en la rutina diaria',
          'Ajustar las metas a medida que el niño avanza y según lo permita la autorización',
          'Apoyar a los analistas estudiantes que acumulan horas de trabajo de campo restringidas y no restringidas',
          'Sostener una atención ética y culturalmente responsiva para familias diversas del norte de Virginia',
        ],
      },
      applyLabel: 'Solicitar como BCBA',
      applyRole: 'Board Certified Behavior Analyst',
      applyHref: '/career/apply',
    },
  },
  otherOpenings: {
    title: 'Otras formas de postular',
    body: 'El formulario de empleo actual de VTCC también recibe interés en puestos administrativos de oficina y pasantías, y en horarios de tiempo completo o parcial. Use la página de solicitud para indicar la ruta que le interesa. Esta página no inventa vacantes que no estén ya representadas en el formulario público o en los programas descritos aquí.',
  },
  programs: {
    eyebrow: 'Programas para empleados',
    title: 'Apoyo después de la contratación',
    intro:
      'Estos programas acompañan el trabajo diario de los casos. Están escritos para coincidir con el uso de estos términos en la práctica ABA. Los detalles de horarios, pago e inscripción se confirman con el equipo clínico después de la contratación.',
    items: [
      {
        title: 'Programa de analista estudiante',
        summary: 'Trabajo de campo de posgrado mientras trabaja como RBT',
        body: 'El Programa de analista estudiante es para RBT inscritos en una maestría que puede conducir hacia la certificación BCBA (o una relacionada). En el empleo, ese personal acumula horas de trabajo de campo supervisado de la BACB, no solo un segundo título de puesto.',
        details: [
          'Las horas restringidas son el tiempo dedicado a aplicar procedimientos terapéuticos e instructivos directamente con los clientes. Gran parte del trabajo habitual de sesión RBT entra aquí. Esas horas pueden contar como trabajo de campo cuando cumplen las reglas de la BACB, pero no pueden constituir la mayoría de las horas aceptadas de un aprendiz de BCBA.',
          'Las horas no restringidas son trabajo de nivel de analista: observar y analizar datos, ayudar a diseñar programas, capacitar a personal o cuidadores, contribuir a evaluaciones y otras tareas similares a las de un BCBA. Las reglas de la BACB exigen que una parte sustancial del trabajo de campo sea no restringida; actualmente al menos el 60% para aprendices de BCBA.',
          'Las horas solo cuentan cuando hay un supervisor calificado, un contrato de trabajo de campo firmado, contactos y observaciones mensuales y la documentación de la BACB. El trabajo rutinario de RBT no se convierte automáticamente en trabajo de campo.',
        ],
      },
      {
        title: 'PDU mensuales para RBT',
        summary: 'Educación continua, capacitación y calidad clínica',
        body: 'Las unidades de desarrollo profesional (PDU) son horas de aprendizaje patrocinadas por el empleador. Las PDU mensuales para RBT de VTCC son educación continua para técnicos: repaso de habilidades, ética y documentación, integridad del tratamiento y otros temas de calidad clínica.',
        details: [
          'Estas sesiones buscan mantener el desempeño en el trabajo y elevar la calidad de la atención; no sustituyen la certificación de la BACB.',
          'La recertificación RBT ante la BACB es un proceso aparte (incluye supervisión y una evaluación de competencia). Las PDU mensuales apoyan la calidad clínica y el crecimiento profesional; no deben describirse como unidades oficiales de educación continua de la BACB, salvo que una sesión concreta se apruebe después como tal.',
          'Las expectativas de asistencia y los temas los define el equipo clínico.',
        ],
      },
      {
        title: 'Técnico de conducta líder sénior (SLBT)',
        summary: 'Ayuda clínica de mayor nivel de técnicos con experiencia',
        body: 'El rol de SLBT es una vía sénior de técnico. Los SLBT siguen brindando atención directa de calidad y también asumen tareas estructuradas de liderazgo que mantienen en marcha los casos y al personal nuevo.',
        details: [
          'Apoyo en evaluaciones: asistir a los BCBA en partes de la evaluación que un técnico sénior capacitado puede realizar bajo dirección.',
          'Capacitadores de nuevos empleados: enseñar a los BT recién contratados cómo VTCC conduce las sesiones, recopila datos y se comunica con familias y supervisores.',
          'Acompañamiento de BT: unirse a las sesiones para dar ayuda práctica y capacitación en el momento cuando un técnico necesita orientación.',
          'Capacitadores de Safety-Care: impartir Safety-Care, un plan de prevención de crisis y seguridad para que el personal prevenga y responda a conductas inseguras con estrategias aprobadas. Los capacitadores enseñan a colegas; no reemplazan los protocolos clínicos o de emergencia.',
          'Entrevistas de la lista inicial del hogar: conversaciones estructuradas que recorren la lista de inicio en el hogar antes de que comience un caso—entorno, materiales, consideraciones de seguridad y contactos del cuidador—para que las primeras sesiones estén preparadas.',
        ],
      },
    ],
  },
  recognition: {
    eyebrow: 'Reconocimiento a empleados',
    title: 'Empleado del mes y Grounds for Greatness',
    intro:
      'VTCC reconoce a las personas que están presentes para las familias y para sus compañeros. Los nombres y fotos de los homenajeados actuales se publican solo cuando el liderazgo lo aprueba. Los programas se describen aquí para que los solicitantes sepan que el reconocimiento forma parte de la vida de la clínica.',
    items: [
      {
        title: 'Empleado del mes',
        body: 'Un honor mensual para un miembro del personal cuyo trabajo se destacó: calidad clínica, confiabilidad con las familias, trabajo en equipo o atención culturalmente responsiva. Es un reconocimiento formal y por un período, no un título de puesto ni un cambio de credenciales.',
      },
      {
        title: 'Grounds for Greatness',
        body: 'Menciones por momentos concretos de excelencia: una sesión bien conducida, apoyo a un empleado nuevo, documentación cuidadosa o un gesto que alivió un día difícil. Grounds for Greatness busca reconocer el trabajo cotidiano que de otro modo pasaría inadvertido, junto con el honor mensual.',
      },
    ],
    photoCaption: 'Una reunión de reconocimiento a empleados de VTCC',
    photoAlt: 'Personal de VTCC reunido al aire libre en un evento de reconocimiento a empleados',
  },
  clinic: {
    eyebrow: 'Vida en la clínica',
    title: 'Dónde está el equipo',
    intro:
      'La clínica publicada de VTCC es la oficina de Fairfax. Gran parte del trabajo de ABA también ocurre en los hogares; la oficina es la base para reuniones, capacitación y casos programados en el sitio.',
    galleryTitle: 'Dentro de la clínica',
    galleryIntro:
      'Esta galería está reservada para fotografías de la propia clínica de VTCC. Las fotos de la cocina y de otros espacios interiores no están en la biblioteca actual del sitio, así que esos marcos permanecen vacíos en lugar de llenarse con imágenes de archivo.',
    photoPendingLabel: 'Foto pendiente',
    gallery: [
      {
        id: 'kitchen',
        caption: 'Cocina de la clínica',
        pending: true,
        pendingDetail: 'Se añadirá una foto de la cocina cuando VTCC proporcione una imagen interior aprobada.',
      },
      {
        id: 'interior',
        caption: 'Interior de la clínica',
        pending: true,
        pendingDetail: 'Se añadirán más fotos de la clínica cuando haya fotografía aprobada.',
      },
      {
        id: 'employeeAppreciation',
        caption: 'Reunión del equipo',
        asset: 'employeeAppreciationImage',
      },
    ],
  },
}

es.careerApplication = {
  eyebrow: 'Solicite empleo en VTCC',
  title: 'Cuéntenos cómo puede contribuir',
  intro:
    'Esta es una vista previa del futuro proceso de solicitud. Su información permanece en este navegador y no se envía a VTCC.',
  privacyTitle: 'La privacidad importa',
  privacyNote:
    'No cargue expedientes clínicos, información de clientes, números de Seguro Social ni otros documentos confidenciales. Una plataforma de producción usaría un proceso seguro aprobado.',
  selectPlaceholder: 'Seleccione una opción',
  submitLabel: 'Revisar solicitud',
  backLabel: 'Volver a Carreras',
  backHref: '/career',
  consentLabel: 'Entiendo que esta es una vista previa y que mi información no se enviará.',
  fileLabel: 'Currículum o documento de apoyo',
  fileRequiredMessage: 'Adjunte un currículum o documento de apoyo.',
  fileTypes: '.pdf,.doc,.docx,.txt',
  fileAcceptLabel: 'Tipos de archivo aceptados',
  fields: [
    {
      name: 'fullName',
      label: 'Nombre completo',
      type: 'text',
      autocomplete: 'name',
    },
    {
      name: 'email',
      label: 'Correo electrónico',
      type: 'email',
      autocomplete: 'email',
    },
    {
      name: 'phone',
      label: 'Número de teléfono',
      type: 'tel',
      autocomplete: 'tel',
    },
    {
      name: 'role',
      label: 'Puesto de interés',
      type: 'select',
      options: [
        'Behavior Technician (BT)',
        'Registered Behavior Technician',
        'Senior Lead Behavior Technician (SLBT)',
        'Student Analyst Program',
        'Board Certified Behavior Analyst',
        'Program Clinician',
        'Administrative or operations',
        'Other',
      ],
    },
    {
      name: 'location',
      label: 'Ciudad y estado',
      type: 'text',
      autocomplete: 'address-level2',
    },
    {
      name: 'workAuthorization',
      label: '¿Tiene autorización para trabajar en Estados Unidos?',
      type: 'select',
      options: ['Sí', 'No', 'Me gustaría hablar sobre esto'],
    },
    {
      name: 'experience',
      label: 'Experiencia relevante',
      type: 'textarea',
      rows: 4,
    },
    {
      name: 'coverLetter',
      label: '¿Qué le interesa de trabajar con VTCC?',
      type: 'textarea',
      rows: 5,
    },
  ],
}

es.footer.links = [
  { label: 'Servicios', href: '/#services' },
  { label: 'Seguro', href: '/insurance' },
  { label: 'Preguntas y Guías', href: '/resources' },
  { label: 'Carreras', href: '/career' },
  { label: 'Contacto', href: '/contact' },
]

Object.assign(es.heroCard, {
  title: 'Cómo ayuda VTCC',
  items: [
    'Terapia ABA con metas individualizadas',
    'Programas especializados para las necesidades de cada niño',
    'Orientación sobre Medicaid, MCO, seguros comerciales y FAPT pendiente de verificación',
    'Recursos en inglés y español',
  ],
})

es.trustStrip = [
  {
    title: 'Centrado en la familia',
    body: 'Planes de atención adaptados a las necesidades del niño y del cuidador',
  },
  {
    title: 'Culturalmente responsivo',
    body: 'Apoyo para familias diversas del norte de Virginia',
  },
  {
    title: 'Pasos claros',
    body: 'Admisión, revisión de financiamiento, evaluación y planificación del tratamiento',
  },
]

Object.assign(es.sections.services, {
  eyebrow: 'Servicios',
  title: 'Cómo VTCC apoya a familias y referentes',
  intro:
    'Elija la opción que mejor le sirva: somos familia o referente. VTCC apoya a ambos con pasos claros.',
})

es.sections.services.cards = [
  {
    "id": "aba",
    "label": "Terapia ABA",
    "title": "Desarrolle habilidades significativas con un plan individualizado",
    "body": "El Análisis de Conducta Aplicado ayuda a los niños a desarrollar habilidades significativas mediante metas individualizadas, refuerzo positivo, capacitación para padres y monitoreo continuo del progreso.",
    "ageRange": "Por lo general, de 18 meses a 21 años",
    "ageNote": "La intervención temprana suele comenzar antes de los 4 años. ABA también puede apoyar a niños en edad escolar y adolescentes cuando es clínicamente apropiado. La elegibilidad final depende de la evaluación, el financiamiento y la autorización.",
    "description": "ABA se construye alrededor de las fortalezas, rutinas y prioridades de cada familia. Un BCBA evalúa las habilidades actuales, escribe metas medibles y actualiza el plan a medida que el niño crece.",
    "goals": [
      "Fortalecer la comunicación, la interacción social y el juego",
      "Desarrollar habilidades de la vida diaria, autocuidado y preparación escolar",
      "Enseñar conductas de reemplazo más seguras y regulación emocional",
      "Ayudar a los cuidadores a practicar estrategias en las rutinas diarias"
    ],
    "structure": [
      "Un BCBA completa una evaluación y revisa las prioridades de la familia.",
      "Se crea un plan de tratamiento individualizado y un plan de apoyo conductual.",
      "Los técnicos de conducta brindan terapia directa bajo supervisión del BCBA.",
      "Los cuidadores reciben orientación para practicar habilidades entre sesiones.",
      "El progreso se monitorea con regularidad y las metas se actualizan con el tiempo."
    ],
    "leader": {
      "name": "Jordan Hale, BCBA",
      "role": "Líder del programa ABA (marcador de posición)",
      "bio": "Líder provisional de ABA. Coordina la evaluación, la supervisión y la orientación familiar hasta que VTCC publique biografías aprobadas.",
      "photo": "/assets/team/jordan-hale.svg"
    },
    "team": [
      {
        "name": "Sam Rivera, RBT",
        "role": "Técnico de conducta principal (marcador de posición)",
        "photo": "/assets/team/sam-rivera.svg"
      },
      {
        "name": "Priya Shah, BCBA",
        "role": "Analista supervisora (marcador de posición)",
        "photo": "/assets/team/priya-shah.svg"
      }
    ],
    "related": [
      "early-learners",
      "feeding",
      "social-skills",
      "referral"
    ],
    "linkLabel": "Conozca la ABA",
    "href": "/aba"
  },
  {
    "id": "early-learners",
    "label": "Primeros Aprendices",
    "title": "Prepárese para la escuela y los entornos sociales",
    "body": "El programa de Primeros Aprendices ayuda a niños en edad preescolar a practicar comunicación, juego, rutinas y habilidades de aprendizaje temprano para la escuela y los entornos sociales.",
    "ageRange": "Por lo general, de 2 a 5 años",
    "ageNote": "Este programa está diseñado para niños en edad preescolar. La elegibilidad depende de la evaluación, el financiamiento y la autorización.",
    "description": "Primeros Aprendices se centra en las rutinas y habilidades que ayudan a un niño a participar en la escuela y en entornos sociales: comunicación, juego, seguir instrucciones e independencia.",
    "goals": [
      "Construir rutinas y transiciones de preparación escolar",
      "Fortalecer la comunicación y las habilidades de aprendizaje temprano",
      "Apoyar el juego, la participación y el compromiso social",
      "Practicar seguir instrucciones y crecer en independencia"
    ],
    "structure": [
      "Un clínico revisa las habilidades actuales del niño y las prioridades de la familia.",
      "Se escriben metas individualizadas para rutinas, comunicación y juego.",
      "Las sesiones practican esas habilidades en entornos familiares.",
      "Los cuidadores reciben orientación para continuar la práctica en casa.",
      "El progreso se monitorea y el plan se actualiza a medida que crecen las habilidades."
    ],
    "leader": {
      "name": "Nia Brooks, BCBA",
      "role": "Líder de Primeros Aprendices (marcador de posición)",
      "bio": "Líder provisional de Primeros Aprendices. Representa al clínico que guiaría el desarrollo de habilidades en edad preescolar una vez que VTCC apruebe las biografías publicadas.",
      "photo": "/assets/team/nia-brooks.svg"
    },
    "team": [
      {
        "name": "Jordan Hale, BCBA",
        "role": "Líder del programa ABA (marcador de posición)",
        "photo": "/assets/team/jordan-hale.svg"
      },
      {
        "name": "Avery Patel",
        "role": "Coach familiar (marcador de posición)",
        "photo": "/assets/team/avery-patel.svg"
      }
    ],
    "related": [
      "aba",
      "social-skills",
      "feeding"
    ],
    "linkLabel": "Conozca Primeros Aprendices",
    "href": "/early-learners"
  },
  {
    "id": "feeding",
    "label": "Programa de Alimentación",
    "title": "Amplíe el repertorio y las preferencias alimentarias",
    "body": "El Programa de Alimentación utiliza prácticas ABA para apoyar a los niños mientras desarrollan comodidad con una mayor variedad de alimentos, sabores, texturas y rutinas de comida.",
    "ageRange": "Por lo general, de 2 a 12 años",
    "ageNote": "El apoyo de alimentación es individualizado. La edad, las metas y la duración dependen de la evaluación, las prioridades familiares, el financiamiento y la autorización.",
    "description": "El programa usa práctica positiva y gradual para que los niños se sientan más cómodos con alimentos nuevos y más flexibles en las comidas. Los cuidadores son socios en las rutinas diarias.",
    "goals": [
      "Ampliar la variedad de alimentos que el niño acepta",
      "Desarrollar comodidad con nuevos sabores, texturas y presentaciones",
      "Apoyar rutinas de comida más tranquilas y predecibles",
      "Practicar preferencias alimentarias flexibles a un ritmo manejable"
    ],
    "structure": [
      "El equipo evalúa los patrones actuales de alimentación y las prioridades familiares.",
      "Se escriben metas individualizadas y estrategias de refuerzo positivo.",
      "La práctica ocurre en sesiones y, cuando es apropiado, durante las comidas diarias.",
      "Los cuidadores aprenden a apoyar alimentos nuevos sin añadir presión.",
      "El progreso se revisa y el plan se ajusta según la respuesta del niño."
    ],
    "leader": {
      "name": "Leo Garcia, BCBA",
      "role": "Líder del Programa de Alimentación (marcador de posición)",
      "bio": "Líder provisional del Programa de Alimentación. Representa al clínico que guiaría las metas de comida una vez que VTCC apruebe las biografías publicadas.",
      "photo": "/assets/team/leo-garcia.svg"
    },
    "team": [
      {
        "name": "Priya Shah, BCBA",
        "role": "Analista supervisora (marcador de posición)",
        "photo": "/assets/team/priya-shah.svg"
      },
      {
        "name": "Sam Rivera, RBT",
        "role": "Técnico de conducta principal (marcador de posición)",
        "photo": "/assets/team/sam-rivera.svg"
      }
    ],
    "related": [
      "aba",
      "early-learners"
    ],
    "linkLabel": "Conozca el programa de alimentación",
    "href": "/feeding-program"
  },
  {
    "id": "social-skills",
    "label": "Grupo de Habilidades Sociales",
    "title": "Practique habilidades sociales avanzadas con compañeros",
    "body": "El Grupo de Habilidades Sociales apoya a clientes que están listos para practicar sarcasmo, conversación, pensamiento flexible y juego apropiado para su edad con compañeros.",
    "ageRange": "Por lo general, niños en edad escolar y adolescentes",
    "ageNote": "El grupo es para clientes listos para una práctica más avanzada con compañeros. La compatibilidad depende de la evaluación, las metas actuales, el financiamiento y la autorización.",
    "description": "Los participantes practican interacciones sociales reales en un grupo pequeño con orientación del personal. Las familias ayudan a llevar las mismas habilidades a la escuela, el hogar y la comunidad.",
    "goals": [
      "Comprender el sarcasmo, el humor y el significado implícito",
      "Practicar la conversación de ida y vuelta y el pensamiento flexible",
      "Unirse al juego y a actividades compartidas apropiadas para la edad",
      "Reparar malentendidos y resolver problemas con compañeros"
    ],
    "structure": [
      "Un clínico confirma la compatibilidad con el grupo y las metas sociales actuales.",
      "Las sesiones usan práctica en grupo pequeño con objetivos individualizados.",
      "El personal orienta y da retroalimentación positiva durante interacciones reales.",
      "Las familias reciben guía para practicar las habilidades fuera del grupo.",
      "Las metas se actualizan a medida que el niño o adolescente gana independencia."
    ],
    "leader": {
      "name": "Maya Okonkwo, BCBA",
      "role": "Líder del Grupo de Habilidades Sociales (marcador de posición)",
      "bio": "Líder provisional del Grupo de Habilidades Sociales. Representa al clínico que guiaría los grupos de práctica con compañeros una vez que VTCC apruebe las biografías publicadas.",
      "photo": "/assets/team/maya-okonkwo.svg"
    },
    "team": [
      {
        "name": "Riley Chen, BCBA",
        "role": "Líder de capacitación para padres (marcador de posición)",
        "photo": "/assets/team/riley-chen.svg"
      },
      {
        "name": "Taylor Brooks",
        "role": "Facilitador de grupo (marcador de posición)",
        "photo": "/assets/team/taylor-brooks.svg"
      }
    ],
    "related": [
      "aba",
      "early-learners"
    ],
    "linkLabel": "Conozca el grupo social",
    "href": "/social-skills-group"
  },
  {
    "id": "referral",
    "label": "Apoyo de Referencias",
    "title": "Ayude a familias y profesionales a dar el siguiente paso",
    "body": "Familias, escuelas, médicos, administradores de casos y socios del condado pueden contactar a VTCC para preguntar sobre servicios, elegibilidad, formularios requeridos y pasos de financiamiento.",
    "ageRange": "Niños, adolescentes y familias que VTCC puede atender",
    "ageNote": "El apoyo de referencias está disponible para familias y profesionales que quieren entender si se debe explorar ABA, Primeros Aprendices, Alimentación, Habilidades Sociales u otra vía. No es un programa clínico por sí mismo.",
    "description": "Esta vía ayuda a quienes llaman a compartir información básica, identificar posibles rutas de financiamiento y reunir la documentación correcta antes de la admisión. VTCC puede hablar sobre la compatibilidad general, pero la elegibilidad final depende de la autorización y la evaluación.",
    "goals": [
      "Facilitar el inicio del programa que pueda ser adecuado",
      "Ayudar a familias y referentes a entender formularios y preguntas de financiamiento",
      "Reunir los detalles no sensibles que VTCC necesita para responder",
      "Dirigir a las personas a la oficina, el formulario o la conversación correcta"
    ],
    "structure": [
      "Una familia o un profesional contacta a VTCC por teléfono o formulario.",
      "El equipo pregunta qué servicio se necesita y cómo podría financiarse.",
      "Quienes llaman reciben orientación sobre la documentación de admisión o referencia.",
      "VTCC revisa la información disponible y describe los siguientes pasos.",
      "Si es apropiado, siguen la programación de la evaluación y la planificación del tratamiento."
    ],
    "leader": {
      "name": "Cameron Ortiz",
      "role": "Coordinador de referencias y admisión (marcador de posición)",
      "bio": "Coordinador provisional para referencias y primeras preguntas. Ayuda a familias y profesionales a saber qué enviar y a quién llamar.",
      "photo": "/assets/team/cameron-ortiz.svg"
    },
    "team": [
      {
        "name": "Quinn Alvarez",
        "role": "Especialista en financiamiento (marcador de posición)",
        "photo": "/assets/team/quinn-alvarez.svg"
      },
      {
        "name": "Dana Kim",
        "role": "Navegador familiar (marcador de posición)",
        "photo": "/assets/team/dana-kim.svg"
      }
    ],
    "related": [
      "aba",
      "early-learners",
      "feeding",
      "social-skills"
    ],
    "linkLabel": "Referir un cliente",
    "href": "/referrers"
  }
]

Object.assign(es.sections.process, {
  eyebrow: 'Cómo comenzar',
  title: 'Cómo iniciar servicios con VTCC',
  intro: 'Comenzar servicios puede resultar abrumador. Esto es lo que puede esperar, paso a paso.',
  formsLinkLabel: 'Descargar formularios de admisión',
  formsLinkHref: '/resources/forms',
})

es.sections.process.steps = [
  { title: 'Comuníquese', body: 'Contacte a VTCC por teléfono o mediante el formulario de solicitud.' },
  { title: 'Revise el financiamiento', body: 'Indíquenos qué servicio busca y cómo puede financiarse.' },
  { title: 'Complete la admisión', body: 'Envíe la documentación de admisión o referencia.' },
  {
    title: 'Programe la evaluación',
    body: 'VTCC revisa seguro, Medicaid, atención administrada, cobertura comercial o financiamiento del condado/FAPT según corresponda.',
  },
  {
    title: 'Elabore un plan',
    body: 'Se programa una evaluación clínica o cita de admisión y se crea un plan de tratamiento individualizado.',
  },
  {
    title: 'Comience los servicios',
    body: 'Los servicios comienzan después de la aprobación, programación y documentación requerida.',
  },
]

Object.assign(es.sections.aba, {
  eyebrow: 'Terapia ABA',
  title: 'Servicios de ABA',
  intro:
    'El Análisis de Conducta Aplicado utiliza técnicas y principios positivos para lograr cambios conductuales significativos y positivos.',
  topics: [
    {
      title: '¿Qué es el Análisis de Conducta Aplicado (ABA)?',
      paragraphs: [
        'Considerado por muchos expertos como la terapia estándar de referencia para el trastorno del espectro autista (TEA) y otras afecciones del desarrollo en niños, la ABA se centra en mejorar gradualmente las habilidades sociales, de comunicación y de la vida diaria mediante refuerzo positivo.',
        'VTCC cuenta con especialistas en autismo en Virginia que utilizan un enfoque basado en evidencia para mejorar la capacidad funcional y social y la calidad de vida de los niños y las familias.',
      ],
    },
    {
      title: '¿Dónde se puede utilizar la ABA?',
      paragraphs: [
        'Estas técnicas pueden utilizarse en situaciones estructuradas como en el hogar, durante las comidas familiares o en un parque del vecindario.',
        'Algunas sesiones de ABA implican interacción individual entre el terapeuta y el niño. La instrucción grupal también puede ser útil.',
      ],
    },
    {
      title: '¿Cómo se brinda la terapia ABA a niños con TEA o trastornos del desarrollo?',
      paragraphs: [
        'La terapia ABA ofrece programas integrales, individualizados e intensivos de intervención temprana para niños con autismo. Estas intervenciones están diseñadas para comenzar antes de los 4 años y abordan un amplio rango de habilidades para la vida, desde la comunicación y la sociabilidad hasta el autocuidado y la preparación escolar.',
        'Los programas suelen oscilar entre 20 y 40 horas por semana durante 1 a 3 años, según la recomendación clínica y la autorización.',
      ],
    },
    {
      title: '¿Qué tan exitoso es la ABA como enfoque?',
      paragraphs: [
        'La investigación y la literatura académica indican que la ABA es una de las herramientas más eficaces disponibles para ayudar a niños con TEA. Es un esfuerzo conjunto entre terapeutas y padres para estabilizar conductas asociadas con el TEA mediante el refuerzo de conductas positivas, el fortalecimiento de habilidades de comunicación y socialización, y la capacitación de los padres para comunicarse eficazmente con sus hijos.',
        'La ABA busca reducir síntomas, mejorar habilidades y capacidades, y maximizar la función y participación del niño en la comunidad. Es un enfoque ampliamente aceptado entre profesionales de la salud y se utiliza a nivel global.',
        'La ABA se adapta a las necesidades específicas del niño según el análisis del entorno familiar y físico y sus efectos en las conductas del niño. El enfoque de la ABA sigue centrado en mejorar las habilidades sociales y de comunicación y en capacitar a los padres para gestionar eficazmente las conductas asociadas con el TEA. La participación y una alianza sólida entre padres y terapeutas desempeñan un papel crucial para alcanzar los hitos.',
      ],
    },
    {
      title: '¿Cuál es el proceso para recibir servicios de ABA de VTCC?',
      items: [
        'Un Analista de Conducta Certificado por la Junta (BCBA) evalúa al niño para determinar necesidades, definir metas de tratamiento e identificar hitos beneficiosos.',
        'Los padres proporcionan información adicional sobre las habilidades del niño y las áreas que le resultan difíciles.',
        'Según la evaluación, la revisión de informes y la aportación de los padres, el BCBA desarrolla el plan de tratamiento y establece metas iniciales y finales.',
        'Las metas aumentan incrementalmente las habilidades que el niño necesita aprender y le ayudan a funcionar lo mejor posible.',
        'Para disminuir conductas que interfieren, el BCBA desarrolla un plan de intervención conductual para el niño.',
        'Uno o más técnicos brindan tratamiento al niño bajo la supervisión y dirección del BCBA.',
        'El BCBA monitorea el progreso en las metas del niño.',
      ],
    },
    {
      title: '¿Cuáles son algunas filosofías básicas de ABA que sigue VTCC?',
      items: [
        'El analista se reúne regularmente con familiares y personal del programa para planificar, revisar el progreso y hacer ajustes según sea necesario.',
        'Los padres y otros familiares y cuidadores reciben capacitación para apoyar el aprendizaje y la práctica de habilidades durante el día.',
        'El día del niño se estructura para ofrecer muchas oportunidades, planificadas y naturales, de adquirir y practicar habilidades en situaciones estructuradas y no estructuradas.',
        'El niño recibe abundante refuerzo positivo por demostrar habilidades útiles y conductas socialmente apropiadas. El énfasis está en interacciones sociales positivas y un aprendizaje agradable.',
        'El niño no recibe refuerzo por conductas que causan daño o impiden el aprendizaje.',
      ],
    },
    {
      title: '¿Qué tipo de progreso se puede esperar con la ABA?',
      paragraphs: [
        'El objetivo de la ABA es dar al niño la capacidad de comunicarse eficazmente y funcionar plenamente en su entorno. Las intervenciones se adaptan para lograr el máximo progreso. Cada niño mejora a un ritmo diferente según las áreas de habilidad involucradas.',
        'Un esfuerzo consistente, repetido e intenso, junto con la colaboración de los padres, suele conducir a los mejores resultados de la terapia.',
      ],
    },
    {
      title: '¿Quién puede brindar servicios de ABA a mi hijo o al niño que estoy refiriendo?',
      paragraphs: [
        'En la mayoría de los casos, un terapeuta o técnico de conducta (BT) capacitado y supervisado por un BCBA brindará terapia directa a su hijo.',
        'El BCBA tiene un título de posgrado en psicología o análisis de conducta, está certificado mediante un examen nacional de certificación y cuenta con licencia estatal para brindar tratamiento.',
      ],
    },
  ],
})

es.sections.aba.columns = [
  {
    title: 'Lo que la ABA puede apoyar',
    items: [
      'Comunicación e interacción social',
      'Rutinas de vida diaria y preparación escolar',
      'Habilidades de juego, ocio e independencia',
      'Metas conductuales y comportamientos de reemplazo más seguros',
    ],
  },
  {
    title: 'Cómo VTCC brinda ABA',
    items: [
      'Evaluación y planificación del tratamiento',
      'Supervisión BCBA y monitoreo del progreso',
      'Terapia directa del personal capacitado según corresponda',
      'Capacitación para padres y colaboración con cuidadores',
    ],
  },
]

Object.assign(es.sections, {
  earlyLearners: {
    eyebrow: 'Programa de Primeros Aprendices',
    title: 'Desarrolle confianza para la escuela y los entornos sociales',
    intro:
      'El programa de Primeros Aprendices apoya a niños en edad preescolar mientras practican rutinas, comunicación, juego y habilidades de aprendizaje temprano que les ayudan a participar en la escuela y en entornos sociales.',
    columns: [
      {
        title: 'Lo que apoya el programa',
        items: [
          'Rutinas y transiciones para la preparación escolar',
          'Comunicación y habilidades de aprendizaje temprano',
          'Juego, participación y conexión social',
          'Seguir instrucciones y desarrollar independencia',
        ],
      },
      {
        title: 'Cómo participan las familias',
        items: [
          'Metas individualizadas según las fortalezas y necesidades del niño',
          'Práctica en rutinas y entornos conocidos',
          'Colaboración y orientación para cuidadores',
          'Seguimiento del progreso y ajustes al plan',
        ],
      },
    ],
  },
  feedingProgram: {
    eyebrow: 'Programa de Alimentación',
    title: 'Haga que las comidas sean más flexibles y exitosas',
    intro:
      'El Programa de Alimentación utiliza prácticas ABA para ayudar a los niños a ampliar su repertorio y sus preferencias alimentarias mediante metas individualizadas, apoyo positivo y práctica gradual.',
    columns: [
      {
        title: 'Lo que puede apoyar el programa',
        items: [
          'Ampliar la variedad de alimentos que acepta el niño',
          'Desarrollar comodidad con nuevos sabores, texturas y presentaciones',
          'Apoyar rutinas positivas durante las comidas',
          'Practicar preferencias alimentarias flexibles a un ritmo manejable',
        ],
      },
      {
        title: 'Cómo se planifica el apoyo',
        items: [
          'Evaluación de los patrones actuales y las prioridades familiares',
          'Metas individualizadas y refuerzo positivo',
          'Colaboración con cuidadores durante las comidas cotidianas',
          'Seguimiento del progreso y ajustes según la respuesta del niño',
        ],
      },
    ],
  },
  socialSkillsGroup: {
    eyebrow: 'Grupo de Habilidades Sociales',
    title: 'Practique habilidades sociales avanzadas con compañeros',
    intro:
      'El Grupo de Habilidades Sociales es para clientes que están listos para trabajar en habilidades sociales más avanzadas, incluyendo la comprensión del sarcasmo, la conversación y el juego apropiado para su edad con compañeros.',
    columns: [
      {
        title: 'Habilidades que puede abordar el grupo',
        items: [
          'Comprender el sarcasmo, el humor y los significados implícitos',
          'Conversación de ida y vuelta y pensamiento flexible',
          'Juego y actividades compartidas apropiadas para la edad',
          'Unirse a grupos, resolver problemas y reparar malentendidos',
        ],
      },
      {
        title: 'Un entorno grupal con apoyo',
        items: [
          'Práctica en grupos pequeños con metas individualizadas',
          'Orientación y comentarios positivos del personal capacitado',
          'Oportunidades para practicar habilidades en interacciones realistas',
          'Colaboración familiar para apoyar la práctica fuera del grupo',
        ],
      },
    ],
  },
})

Object.assign(es.sections.funding, {
  eyebrow: 'Seguro y financiamiento',
  title: 'Ayuda con el seguro y el financiamiento',
  intro:
    'VTCC puede ayudar a familias y referentes a entender las vías de financiamiento más comunes para nuestros servicios.',
  note: 'Antes de publicar, VTCC debe confirmar qué planes se aceptan actualmente, si la cobertura comercial está activa para cada servicio y qué oficina o miembro del equipo maneja la verificación.',
  ctaLabel: 'Consultar seguro y financiamiento',
})

es.sections.funding.payers[9] = 'Financiamiento del condado/FAPT'

Object.assign(es.sections.referrers, {
  eyebrow: 'Para familias y referentes',
  title: '¿Por dónde quiere empezar?',
})

es.sections.referrers.paths = [
  {
    title: 'Para Familias',
    body: 'Conozca qué servicios pueden ser adecuados para su hijo, qué documentación puede necesitarse y qué esperar durante la admisión.',
    buttonLabel: 'Comenzar como familia',
    buttonStyle: 'primary',
  },
  {
    title: 'Para Referentes',
    body: 'Escuelas, médicos, administradores de casos, socios del condado y profesionales comunitarios pueden contactar a VTCC para preguntar sobre elegibilidad y requisitos de referencia.',
    buttonLabel: 'Iniciar una referencia',
    buttonStyle: 'secondary',
  },
]

Object.assign(es.sections.whoWeServe, {
  eyebrow: 'A quién servimos',
  title: 'Apoyo para niños, adolescentes y familias',
  intro:
    'VTCC atiende a niños, adolescentes y familias en el norte de Virginia que pueden necesitar apoyo conductual, del desarrollo o de salud mental.',
  items: [
    'Trastorno del espectro autista y necesidades del desarrollo',
    'Habilidades de comunicación, sociales, vida diaria o preparación escolar',
    'Dificultades conductuales o emocionales significativas',
    'Estrés familiar relacionado con las necesidades de cuidado del niño',
    'Niños pequeños que se preparan para la escuela y los entornos sociales',
    'Metas de alimentación relacionadas con el repertorio y las preferencias alimentarias',
    'Habilidades sociales avanzadas y juego apropiado para la edad con compañeros',
    'Referencias conectadas con Medicaid, atención administrada, seguro comercial o financiamiento del condado/FAPT',
  ],
})

Object.assign(es.sections.multiculturalCare, {
  eyebrow: 'Atención multicultural',
  title: 'Atención que respeta la cultura de cada familia',
  body: 'Cada familia aporta su propia cultura, idioma, historia y fortalezas. VTCC fue creado para apoyar a familias de diversos orígenes con respeto y colaboración. Nuestro objetivo es que los servicios sean comprensibles, acogedores y adaptados a las necesidades de cada familia.',
})

Object.assign(es.sections.about, {
  eyebrow: 'Acerca de VTCC',
  title: 'Nuestro equipo y nuestra misión',
  intro:
    'VTCC brinda servicios de salud mental y conductual culturalmente responsivos para niños, adolescentes y familias en el norte de Virginia.',
  items: [
    'Misión y atención multicultural/transcultural',
    'Biografía del director y liderazgo clínico',
    'Biografías de BCBA/RBT o terapeutas cuando estén aprobadas',
    'Ubicación de la oficina en Fairfax',
  ],
  quotes: {
    eyebrow: 'De las familias',
    title: 'Lo que dicen los padres sobre la atención en VTCC',
    intro:
      'Los padres y cuidadores comparten cómo ha sido trabajar con nuestro equipo. Estas citas son marcadores de posición hasta que las familias compartan comentarios aprobados.',
    items: [
      {
        quote:
          'Aquí irá una cita de un padre o madre sobre sentirse escuchado, apoyado e incluido durante la admisión y los servicios.',
        name: 'Nombre del padre o madre',
        role: 'Marcador de posición · Padre o madre de un cliente de VTCC',
        style: 'speech',
      },
      {
        quote:
          'Aquí irá una cita de un cuidador sobre el progreso que notó y cómo el equipo colaboró con su familia.',
        name: 'Nombre del padre o madre',
        role: 'Marcador de posición · Padre o madre de un cliente de VTCC',
        style: 'thought',
      },
      {
        quote:
          'Aquí irá una cita de un padre o madre sobre una atención respetuosa de la cultura y una comunicación clara con VTCC.',
        name: 'Nombre del padre o madre',
        role: 'Marcador de posición · Padre o madre de un cliente de VTCC',
        style: 'speech',
      },
    ],
  },
  careersLink: {
    label: 'Ver empleo en VTCC',
    href: '/career',
  },
})

Object.assign(es.sections.contact, {
  eyebrow: 'Contacto',
  title: 'Solicite servicios o haga una pregunta de referencia',
  intro:
    '¿Tiene preguntas sobre servicios, referencias, seguro o próximos pasos? Contacte a VTCC y un miembro del equipo puede orientarlo.',
  callEyebrow: 'Llame a VTCC',
  callTitle: '¿Prefiere hablar con alguien?',
  callIntro:
    'Llame a nuestra oficina de Fairfax. Un miembro del equipo puede ayudar con servicios, preguntas de referencia y próximos pasos.',
})

Object.assign(es.sections.contactFamily, {
  callIntro:
    'Llame a nuestra oficina de Fairfax. Un miembro del equipo puede ayudar con servicios, trámites y próximos pasos.',
})

Object.assign(es.sections.contactReferral, {
  callIntro:
    'Llame a nuestra oficina de Fairfax. Un miembro del equipo puede ayudar con elegibilidad, documentación requerida y próximos pasos.',
})

Object.assign(es.form, {
  notice:
    'No incluya detalles médicos privados, informes de diagnóstico, números de Seguro Social ni inquietudes urgentes de seguridad en este formulario. Si se trata de una emergencia, llame al 911 o vaya a la sala de emergencias más cercana.',
  consentLabel: 'Entiendo que este formulario no es para emergencias ni detalles médicos sensibles.',
  submitLabel: 'Enviar Solicitud',
})

es.form.fields = [
  { name: 'name', label: 'Nombre del padre/tutor o referente', type: 'text', autocomplete: 'name' },
  { name: 'email', label: 'Correo electrónico', type: 'email', autocomplete: 'email' },
  { name: 'phone', label: 'Teléfono', type: 'tel', autocomplete: 'tel' },
  {
    name: 'preferredContact',
    label: 'Método de contacto preferido',
    type: 'select',
    options: ['Teléfono', 'Correo electrónico', 'Cualquiera'],
  },
  {
    name: 'ageRange',
    label: 'Rango de edad del niño',
    type: 'select',
    options: ['0-2', '3-5', '6-8', '9-11', '12-14', '15-17', '18+', 'No aplica'],
  },
  {
    name: 'service',
    label: 'Interés en servicios',
    type: 'select',
    options: ['ABA', 'Primeros Aprendices', 'Programa de Alimentación', 'Grupo de Habilidades Sociales', 'No estoy seguro', 'Pregunta de referencia'],
  },
  {
    name: 'funding',
    label: 'Fuente de financiamiento',
    type: 'select',
    options: ['Medicaid', 'MCO', 'Seguro comercial', 'Condado/FAPT', 'No estoy seguro'],
  },
  { name: 'location', label: 'Ciudad o condado', type: 'text' },
  { name: 'message', label: 'Mensaje breve no sensible', type: 'textarea', rows: 4 },
]

es.offices = [
  {
    name: 'Oficina de Fairfax',
    street: '10565 Fairfax Boulevard, Suite 300',
    city: 'Fairfax, VA 22030',
    phone: '703.218.6599',
    phoneHref: 'tel:17032186599',
    fax: '703.891.7167',
  },
]

Object.assign(es.footer, {
  text: 'Prototipo de mejora del sitio web de Victoria Transcultural Clinical Center.',
  links: [
    { label: 'Servicios', href: '/#services' },
    { label: 'Seguro', href: '/insurance' },
    { label: 'Preguntas y Guías', href: '/resources' },
    { label: 'Contacto', href: '/contact' },
  ],
})

Object.assign(es.compliance, {
  contentApproval:
    'El liderazgo debe revisar y aprobar todo el lenguaje final de servicios, elegibilidad, seguro y cumplimiento.',
  formSecurity:
    'No recopile informes de diagnóstico, detalles clínicos ni información de salud protegida a través de un formulario de contacto normal a menos que VTCC confirme que el formulario es seguro, aprobado y conforme.',
})

Object.assign(es.home, {
  processTeaser: {
    linkLabel: 'Ver la ruta completa de admisión',
    linkHref: '/get-started',
  },
  resourcesTeaser: {
    title: 'Guías y preguntas frecuentes útiles',
    intro:
      'Explore temas comunes sobre admisión, financiamiento, terapia ABA, servicios en el hogar y referencias.',
    linkLabel: 'Ver preguntas y guías',
    linkHref: '/resources',
  },
})

es.pages = {
  abaTherapy: {
    title: 'Página de Terapia ABA',
    hero: {
      headline: 'Terapia ABA diseñada en torno a cada niño',
      body: 'El Análisis de Conducta Aplicado es un enfoque basado en evidencia que utiliza estrategias positivas para ayudar a los niños a desarrollar habilidades significativas. VTCC crea planes ABA individualizados según la evaluación, la aportación familiar y las fortalezas y necesidades de cada niño.',
      buttons: ['Solicitar servicios de ABA', 'Llamar sobre ABA'],
    },
    sections: [
      {
        title: 'Lo que la ABA puede apoyar',
        items: [
          'Comunicación',
          'Interacción social',
          'Rutinas de vida diaria',
          'Preparación escolar',
          'Habilidades de juego y ocio',
          'Regulación emocional y conductual',
          'Conductas de reemplazo más seguras',
          'Práctica de habilidades con apoyo del cuidador en el hogar',
        ],
        note: 'Cada niño es diferente. VTCC diseña metas según la evaluación, la observación, la aportación del cuidador y las recomendaciones clínicas.',
      },
      {
        title: 'Cómo VTCC brinda ABA',
        steps: [
          'Un Analista de Conducta Certificado por la Junta (BCBA) revisa las necesidades del niño.',
          'La familia comparte información sobre fortalezas, desafíos, rutinas y prioridades.',
          'El BCBA crea metas de tratamiento y un plan de apoyo conductual cuando corresponda.',
          'Técnicos de conducta o terapeutas pueden brindar servicios directos bajo supervisión del BCBA.',
          'Los padres y cuidadores reciben orientación para practicar habilidades en las rutinas diarias.',
          'Se monitorea el progreso y se actualizan los planes a medida que el niño crece.',
        ],
      },
      {
        title: 'Capacitación para padres',
        body: 'Los padres y cuidadores son socios esenciales en la terapia ABA. VTCC apoya a las familias con estrategias que pueden usar durante rutinas diarias, transiciones, momentos de comunicación y situaciones difíciles.',
      },
    ],
    cta: {
      body: '¿No está seguro de si la ABA es la opción adecuada? Contacte a VTCC y nuestro equipo puede explicar el proceso de admisión, los requisitos de financiamiento y los próximos pasos.',
      button: 'Preguntar sobre servicios de ABA',
    },
  },
  earlyLearners: {
    title: 'Página del Programa de Primeros Aprendices',
    hero: {
      headline: 'Apoyo para el aprendizaje temprano y la preparación social',
      body: 'El programa de Primeros Aprendices apoya a niños en edad preescolar mientras practican rutinas, comunicación, juego y habilidades de aprendizaje temprano para la escuela y los entornos sociales.',
      buttons: ['Solicitar servicios de Primeros Aprendices', 'Preguntar sobre elegibilidad'],
    },
    sections: [
      {
        title: 'Lo que pueden practicar los primeros aprendices',
        intro: 'Las metas pueden incluir transiciones, instrucciones, comunicación, juego, participación social, aprendizaje temprano e independencia.',
        items: [
          'Rutinas y transiciones para la preparación escolar',
          'Comunicación y habilidades de aprendizaje temprano',
          'Juego, participación y conexión social',
          'Seguir instrucciones y desarrollar independencia',
        ],
      },
      {
        title: 'Colaboración con la familia',
        body: 'VTCC trabaja con los cuidadores para identificar metas significativas y practicar habilidades en las rutinas cotidianas. Los planes se ajustan a medida que el niño crece y desarrolla confianza.',
      },
    ],
    cta: {
      body: 'Contacte a VTCC para preguntar si el programa de Primeros Aprendices puede ser adecuado para su hijo en edad preescolar y conocer los próximos pasos de admisión.',
      button: 'Preguntar sobre Primeros Aprendices',
    },
  },
  feedingProgram: {
    title: 'Página del Programa de Alimentación',
    hero: {
      headline: 'Apoyo para ampliar el repertorio alimentario',
      body: 'El Programa de Alimentación utiliza prácticas ABA para ayudar a los niños a ampliar su repertorio y sus preferencias alimentarias mediante metas individualizadas, apoyo positivo y práctica gradual.',
      buttons: ['Solicitar servicios de alimentación', 'Preguntar sobre elegibilidad'],
    },
    sections: [
      {
        title: 'Lo que puede apoyar el programa de alimentación',
        intro: 'El programa ayuda a los niños a practicar la aceptación y exploración de una mayor variedad de alimentos, sabores, texturas y presentaciones.',
        items: [
          'Ampliar la variedad de alimentos que acepta el niño',
          'Desarrollar comodidad con nuevos sabores y texturas',
          'Apoyar rutinas positivas durante las comidas',
          'Practicar preferencias alimentarias flexibles a un ritmo manejable',
        ],
      },
      {
        title: 'Práctica positiva e individualizada',
        body: 'El equipo colabora con los cuidadores para establecer metas prácticas, usar apoyo positivo e introducir la práctica a un ritmo que respete las necesidades del niño y las rutinas familiares.',
      },
    ],
    cta: {
      body: 'Contacte a VTCC para preguntar si el Programa de Alimentación puede ser apropiado para su hijo y conocer el proceso de admisión.',
      button: 'Preguntar sobre el Programa de Alimentación',
    },
  },
  socialSkillsGroup: {
    title: 'Página del Grupo de Habilidades Sociales',
    hero: {
      headline: 'Desarrolle habilidades sociales avanzadas con compañeros',
      body: 'El Grupo de Habilidades Sociales es para clientes que están listos para practicar habilidades sociales más avanzadas, como comprender el sarcasmo, conversar y participar en juegos apropiados para su edad con compañeros.',
      buttons: ['Solicitar servicios del grupo social', 'Preguntar sobre elegibilidad'],
    },
    sections: [
      {
        title: 'Lo que puede practicar el grupo',
        intro: 'Los clientes reciben orientación y comentarios mientras practican interacciones realistas con compañeros.',
        items: [
          'Comprender el sarcasmo, el humor y los significados implícitos',
          'Conversación de ida y vuelta y pensamiento flexible',
          'Juego y actividades compartidas apropiadas para la edad',
          'Unirse a grupos, resolver problemas y reparar malentendidos',
        ],
      },
      {
        title: 'Aprendizaje mediante práctica con apoyo',
        body: 'Los clientes reciben orientación y comentarios mientras practican interacciones realistas con compañeros. Las metas son individualizadas y apoyan la práctica en la escuela, la comunidad y otros entornos sociales.',
      },
    ],
    cta: {
      body: 'Contacte a VTCC para preguntar si el Grupo de Habilidades Sociales puede ser adecuado para su hijo y conocer la disponibilidad actual.',
      button: 'Preguntar sobre el Grupo de Habilidades Sociales',
    },
  },
  insuranceFunding: {
    title: 'Página de Seguro y Financiamiento',
    hero: {
      headline: 'Orientación sobre seguro y financiamiento',
      body: 'Entender la cobertura puede resultar confuso. VTCC ayuda a familias y socios de referencia a revisar las vías de financiamiento disponibles e identificar qué información puede necesitarse antes de comenzar los servicios.',
    },
    sections: [
      {
        title: 'Vías de financiamiento',
        body: 'El sitio público actual de VTCC hace referencia a Medicaid, organizaciones de atención administrada, planes comerciales y financiamiento del condado/FAPT. Antes de publicar esta página, el liderazgo debe confirmar los planes aceptados exactos y los requisitos de financiamiento para cada servicio.',
      },
      {
        title: 'Proceso de verificación',
        intro: 'Las familias pueden ayudar preparando:',
        items: [
          'Nombre completo y fecha de nacimiento del niño',
          'Información de contacto del padre o tutor',
          'Tarjeta de seguro o fuente de financiamiento',
          'Servicio solicitado',
          'Documentos de referencia, si se requieren',
          'Documentación de diagnóstico o clínica solo si se solicita mediante un proceso seguro aprobado',
        ],
      },
      {
        title: 'Nota importante',
        body: 'La cobertura y la elegibilidad varían según el servicio, el plan, los requisitos de autorización y la fuente de financiamiento. VTCC puede ayudar a verificar la información, pero las decisiones finales de cobertura pueden depender del plan de seguro, la organización de atención administrada o la agencia de financiamiento.',
      },
    ],
    cta: 'Preguntar sobre seguro y financiamiento',
  },
  forReferrers: {
    title: 'Página para Referentes',
    hero: {
      headline: 'Referir un niño o una familia a VTCC',
      body: 'VTCC recibe referencias apropiadas de familias, escuelas, pediatras, terapeutas, administradores de casos, socios del condado y profesionales comunitarios.',
    },
    sections: [
      {
        title: 'Información de referencia a incluir',
        intro: 'Para ayudar a VTCC a responder con eficiencia, se puede solicitar a los referentes:',
        items: [
          'Nombre y edad del niño o adolescente',
          'Información de contacto del padre o tutor',
          'Servicio solicitado',
          'Motivo de la referencia',
          'Fuente de financiamiento o información del seguro',
          'Documentación de referencia relevante',
          'Urgencia o preocupaciones de seguridad, si corresponde',
        ],
        note: 'No envíe documentos sensibles a través de un formulario o correo electrónico no seguro a menos que VTCC haya proporcionado un método seguro aprobado.',
      },
    ],
    cta: {
      body: '¿Preguntas sobre elegibilidad o si la referencia es adecuada? Contacte a VTCC antes de enviar documentos.',
      button: 'Iniciar una referencia',
    },
  },
  resourcesFaq: {
    title: 'Página de Recursos / Preguntas Frecuentes',
    hero: {
      headline: 'Recursos para familias y socios de referencia',
      body: 'VTCC ofrece recursos educativos para ayudar a las familias a entender la terapia ABA, el programa de Primeros Aprendices, el Programa de Alimentación, el Grupo de Habilidades Sociales, la participación de los padres, los pasos de admisión y las preguntas sobre financiamiento.',
    },
    faqs: [
      {
        question: '¿Qué servicios brinda VTCC?',
        answer:
          'VTCC brinda terapia ABA, un programa de Primeros Aprendices, un Programa de Alimentación y un Grupo de Habilidades Sociales para niños y familias. Los servicios dependen de la elegibilidad, el financiamiento, la necesidad clínica y la disponibilidad.',
      },
      {
        question: '¿Qué es el programa de Primeros Aprendices?',
        answer:
          'Es un programa para niños en edad preescolar que se enfoca en desarrollar comunicación, juego, rutinas y habilidades de aprendizaje temprano para ayudarles a participar en la escuela y en entornos sociales.',
      },
      {
        question: '¿Qué apoya el Programa de Alimentación?',
        answer:
          'El Programa de Alimentación utiliza prácticas ABA para ayudar a los niños a ampliar gradualmente su repertorio y sus preferencias alimentarias mediante metas individualizadas, apoyo positivo y colaboración con los cuidadores.',
      },
      {
        question: '¿Quién puede beneficiarse del Grupo de Habilidades Sociales?',
        answer:
          'El Grupo de Habilidades Sociales es para clientes que están listos para practicar habilidades sociales más avanzadas, como comprender el sarcasmo, conversar y participar en juegos apropiados para su edad con compañeros.',
      },
      {
        question: '¿Dónde brinda servicios VTCC?',
        answer:
          'Los servicios pueden brindarse en entornos individuales y grupales según el programa, el plan de tratamiento y la disponibilidad. Contacte a VTCC para confirmar las opciones actuales para su ubicación.',
      },
      {
        question: '¿VTCC acepta seguros?',
        answer:
          'Los materiales actuales enumeran varios pagadores de Medicaid, atención administrada y comerciales, y también hacen referencia al financiamiento del condado/FAPT. Contacte a VTCC para verificar la cobertura actual para su plan y servicio.',
      },
      {
        question: '¿Qué es la terapia ABA?',
        answer:
          'La ABA es un enfoque basado en evidencia que utiliza estrategias positivas para ayudar a los niños a desarrollar habilidades y reducir conductas que interfieren con el aprendizaje, la seguridad o la vida diaria.',
      },
      {
        question: '¿Participan los padres?',
        answer:
          'Sí. La participación de padres y cuidadores es una parte importante de los servicios individualizados y ayuda a los niños a practicar habilidades en las rutinas diarias.',
      },
      {
        question: '¿Cómo empiezo?',
        answer:
          'Llame a VTCC o complete el formulario de solicitud. El equipo puede explicar qué programa puede ser adecuado, los formularios requeridos, la revisión de financiamiento, la admisión, la evaluación y la programación.',
      },
      {
        question: '¿Pueden los profesionales referir a un niño?',
        answer:
          'Sí. Escuelas, médicos, administradores de casos, socios del condado y otros profesionales pueden contactar a VTCC para preguntar sobre los requisitos de referencia.',
      },
    ],
  },
}

Object.assign(es.sections.resources, {
  formsPromo: {
    label: 'Formularios',
    title: 'Descargue formularios de admisión y referencia',
    summary:
      'Imprima y complete el formulario de admisión para su servicio, cuestionarios de referencia y avisos de derechos del cliente.',
    linkLabel: 'Ver todos los formularios',
    linkHref: '/resources/forms',
  },
})

Object.assign(es.sections.forms, {
  eyebrow: 'Formularios',
  title: 'Descargue formularios de admisión y referencia',
  intro:
    'Elija el formulario que corresponda a su servicio, descárguelo, imprímalo y complételo antes de su cita de admisión.',
  steps: [
    'Elija el formulario para su servicio',
    'Descárguelo e imprímalo',
    'Complételo y devuélvalo a VTCC',
  ],
  assistanceText: '¿Necesita ayuda? Llame al {phone}.',
  insuranceTitle: 'Seguro y financiamiento',
  insuranceBody:
    'VTCC acepta clientes con Medicaid o financiamiento del condado. Contacte su oficina local o estatal de Medicaid para verificar la cobertura de su hijo, o llame a VTCC para obtener ayuda con la verificación.',
  insuranceLinkLabel: 'Más información sobre seguro y financiamiento',
  insuranceLinkHref: '/insurance',
  categories: [
    {
      title: 'Admisiones',
      intro:
        'Descargue, imprima y complete el formulario de admisión y cuestionario que corresponda al servicio que solicita.',
      items: [
        {
          id: 'abaIntake',
          title:
            'Formulario de admisión de VTCC para servicios ABA y cuestionario para fuentes de referencia',
        },
        {
          id: 'faptReferralQuestionnaire',
          title:
            'Cuestionario para fuentes de referencia de visitas supervisadas y/o servicios FAPT',
        },
      ],
    },
    {
      title: 'Derechos del cliente',
      intro:
        'La seguridad, los derechos y la privacidad de nuestros clientes y familias son nuestra prioridad. Este aviso se revisa con cada cliente en presencia de sus padres o tutores antes de iniciar cualquier servicio de VTCC.',
      items: [
        { id: 'clientRightsEnglish', title: 'It is Your Right (English)' },
        { id: 'clientRightsSpanish', title: 'It is Your Right (Español)' },
      ],
    },
  ],
})

for (const form of [es.formFamily, es.formReferral]) {
  const serviceField = form.fields.find((field) => field.name === 'service')
  if (serviceField) {
    serviceField.options = [
      'ABA',
      'Primeros Aprendices',
      'Programa de Alimentación',
      'Grupo de Habilidades Sociales',
      'Aún no estoy seguro',
    ]
  }
}

const intakeCategory = es.sections.resources.categories.find(
  (category) => category.slug === 'what-to-expect-during-intake',
)
if (intakeCategory) {
  const formsFaq = intakeCategory.faqs.find((faq) =>
    faq.question.toLowerCase().includes('form'),
  )
  if (formsFaq) {
    formsFaq.answer =
      'Los formularios requeridos dependen del servicio y de la fuente de financiamiento. Descargue los formularios de admisión y referencia en la página de Formularios, o contacte a VTCC si no está seguro de qué documentos aplican.'
  }
}

writeFileSync(join(rootDir, 'content/locales/es.json'), JSON.stringify(es, null, 2))
console.log('Wrote content/locales/es.json')
