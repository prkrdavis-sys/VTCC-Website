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
  { label: 'Llamar a Fredericksburg', href: 'tel:15404129969' },
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
        'Técnico de conducta registrado',
        'Analista de conducta certificado por la junta',
        'Profesional clínico de programas',
        'Administración u operaciones',
        'Otro',
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
    label: 'Terapia ABA',
    title: 'Desarrolle habilidades significativas con un plan individualizado',
    body: 'El Análisis de Conducta Aplicado ayuda a los niños a desarrollar habilidades significativas mediante metas individualizadas, refuerzo positivo, capacitación para padres y monitoreo continuo del progreso.',
    linkLabel: 'Conozca la ABA',
    href: '/aba',
  },
  {
    label: 'Primeros Aprendices',
    title: 'Prepárese para la escuela y los entornos sociales',
    body: 'El programa de Primeros Aprendices ayuda a niños en edad preescolar a practicar comunicación, juego, rutinas y habilidades de aprendizaje temprano para la escuela y los entornos sociales.',
    linkLabel: 'Conozca Primeros Aprendices',
    href: '/early-learners',
  },
  {
    label: 'Programa de Alimentación',
    title: 'Amplíe el repertorio y las preferencias alimentarias',
    body: 'El Programa de Alimentación utiliza prácticas ABA para apoyar a los niños mientras desarrollan comodidad con una mayor variedad de alimentos, sabores, texturas y rutinas de comida.',
    linkLabel: 'Conozca el programa de alimentación',
    href: '/feeding-program',
  },
  {
    label: 'Grupo de Habilidades Sociales',
    title: 'Practique habilidades sociales avanzadas con compañeros',
    body: 'El Grupo de Habilidades Sociales apoya a clientes que están listos para practicar sarcasmo, conversación, pensamiento flexible y juego apropiado para su edad con compañeros.',
    linkLabel: 'Conozca el grupo social',
    href: '/social-skills-group',
  },
  {
    label: 'Apoyo de Referencias',
    title: 'Ayude a familias y profesionales a dar el siguiente paso',
    body: 'Familias, escuelas, médicos, administradores de casos y socios del condado pueden contactar a VTCC para preguntar sobre servicios, elegibilidad, formularios requeridos y pasos de financiamiento.',
    linkLabel: 'Referir un cliente',
    href: '/referrers',
  },
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
    'Ubicaciones de oficinas en Fairfax y Fredericksburg',
  ],
})

Object.assign(es.sections.contact, {
  eyebrow: 'Contacto',
  title: 'Solicite servicios o haga una pregunta de referencia',
  intro:
    '¿Tiene preguntas sobre servicios, referencias, seguro o próximos pasos? Contacte a VTCC y un miembro del equipo puede orientarlo.',
  callEyebrow: 'Llame a VTCC',
  callTitle: '¿Prefiere hablar con alguien?',
  callIntro:
    'Elija la oficina más cercana a usted. Un miembro del equipo puede ayudar con servicios, preguntas de referencia y próximos pasos.',
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
  {
    name: 'Oficina de Fredericksburg',
    street: '3920 Plank Road, Suite 220',
    city: 'Fredericksburg, VA 22407',
    phone: '540.412.9969',
    phoneHref: 'tel:15404129969',
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
