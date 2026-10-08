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
  servicesNavLabel: 'Servicios',
  emailLabel: 'Correo',
  ageRangeLabel: 'Edades que atiende',
  relatedProgramsLabel: 'Programas relacionados',
  programGoalsLabel: 'Metas',
  programStructureLabel: 'Cómo está estructurado el programa',
  programFaqLinkLabel: 'Ver preguntas de {program}',
  faqProgramLinkNote:
    'Para ver las metas y cómo funciona el programa, visite la página de servicios.',
  contactSwitchFamilyPrompt: '¿Busca servicios para su familia?',
  contactSwitchFamilyLink: 'Use el formulario de solicitud familiar',
  contactSwitchReferralPrompt: '¿Va a enviar una referencia profesional?',
  contactSwitchReferralLink: 'Use el formulario de referencia',
  contactSwitchQuizPrompt: '¿Quiere ayuda para elegir un camino?',
  contactSwitchQuizLink: 'Comience con el cuestionario de contacto',
  contactAsideLabel: 'Llame o visite nuestra oficina',
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
  { label: 'Referentes', href: '/contact/referral' },
  { label: 'Preguntas y Guías', href: '/resources' },
  { label: 'Acerca de', href: '/about' },
  { label: 'Contacto', href: '/contact' },
  { label: 'Carreras', href: '/career' },
]

es.navigation.utility = [
  { label: 'Solicitar Servicios', href: '/contact', style: 'cta' },
  { label: 'Referir un Cliente', href: '/contact/referral' },
  { label: 'Llamar a Fairfax', href: 'tel:17032186599' },
]

es.navigation.headerGroups = [
  {
    label: 'Servicios',
    links: [
      { label: 'Terapia ABA', href: '/aba' },
      { label: 'Primeros Aprendices', href: '/early-learners' },
      { label: 'Programa de Alimentación', href: '/feeding-program' },
      { label: 'Enriquecimiento Social', href: '/social-enrichment' },
      { label: 'Grupo de Habilidades Sociales', href: '/social-skills-group' },
      { label: 'Capacitación Grupal para Padres', href: '/group-parent-training' },
    ],
  },
  {
    label: 'Acerca de',
    href: '/about',
  },
  {
    label: 'Preguntas y Guías',
    href: '/resources',
    links: [
      { label: 'Comenzar', href: '/get-started' },
      { label: 'Seguro', href: '/insurance' },
      { label: '¿Qué es la Terapia ABA?', href: '/resources/what-is-aba-therapy' },
      { label: 'Programa de Primeros Aprendices', href: '/resources/early-learners' },
      { label: 'Programa de Alimentación', href: '/resources/feeding-program' },
      { label: 'Enriquecimiento Social', href: '/resources/social-enrichment' },
      { label: 'Grupo de Habilidades Sociales', href: '/resources/social-skills-group' },
      { label: 'Preguntas Frecuentes sobre Capacitación para Padres', href: '/resources/parent-training-faqs' },
    ],
  },
  {
    label: 'Para proveedores',
    href: '/contact/referral',
  },
  {
    label: 'Carreras',
    href: '/career',
  },
  {
    label: 'Formularios de Contacto',
    links: [
      { label: 'Formularios', href: '/resources/forms' },
      { label: 'Contacto', href: '/contact' },
    ],
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
  careerFormSubmitting: 'Enviando...',
  careerFormSuccess: 'Gracias. Recibimos su solicitud. Un miembro del equipo de VTCC dará seguimiento.',
  careerFormError: 'No pudimos enviar esta solicitud. Llame a VTCC o inténtelo de nuevo más tarde.',
})

Object.assign(es.hero, {
  headline:
    'ABA y programas especializados para niños y familias',
  headlineLead: 'Para niños, adolescentes y familias en el norte de Virginia',
  subheadline:
    'Victoria Transcultural Clinical Center ofrece servicios conductuales y de salud mental culturalmente responsivos para niños, adolescentes y familias. Nuestro equipo apoya a las familias mediante terapia ABA individualizada, programas especializados, colaboración con padres y orientación sobre financiamiento.',
  supportingLine:
    'Atendemos a familias a través de Medicaid, organizaciones de atención administrada, seguros comerciales y vías de financiamiento del condado/FAPT, sujeto a elegibilidad y verificación del plan.',
})

es.hero.serviceTags = [
  { label: 'Terapia ABA', href: '/aba' },
  { label: 'Primeros Aprendices', href: '/early-learners' },
  { label: 'Programa de Alimentación', href: '/feeding-program' },
  { label: 'Enriquecimiento Social', href: '/social-enrichment' },
  { label: 'Grupo de Habilidades Sociales', href: '/social-skills-group' },
  { label: 'Capacitación Grupal para Padres', href: '/group-parent-training' },
]

es.hero.actions = [
  { label: 'Solicitar Servicios', href: '#contact', style: 'primary' },
  { label: 'Referir un Cliente', href: '/contact/referral', style: 'secondary' },
  { label: 'Llamar a VTCC', href: 'tel:17032186599', style: 'ghost' },
]

es.sections.careers = {
  eyebrow: 'Carreras en VTCC',
  title: 'Practique ABA con niños y familias',
  intro: 'Atención ABA culturalmente responsiva para familias del norte de Virginia.',
  applyLabel: 'Solicitar empleo',
  applyHref: '/career/apply',
  overviewLabel: 'Ver puestos abiertos',
  indeed: {
    href: 'https://www.indeed.com/cmp/Victoria-Transcultural-Clinical-Center/',
    label: 'Ver empleos de VTCC en Indeed',
  },
  openRolesEyebrow: 'Puestos abiertos',
  benefits: [
    { title: 'Capacitación RBT interna', body: 'Curso de 40 horas y evaluación de competencia, aquí mismo.' },
    { title: 'Trabajo de campo mientras trabaja', body: 'Acumule horas supervisadas hacia su BCBA en el empleo.' },
    { title: 'Aprendizaje mensual', body: 'Sesiones sobre habilidades, ética y calidad clínica.' },
    { title: 'Capacitación en Safety-Care', body: 'Impartida internamente por técnicos sénior.' },
  ],
  quotes: {
    eyebrow: 'Del equipo',
    title: 'Cómo es trabajar en VTCC',
    items: [
      {
        quote: 'Cita de un compañero sobre colaboración y apoyo.',
        name: 'Nombre del empleado',
        role: 'Marcador de posición · Puesto, credenciales',
        style: 'thought',
      },
      {
        quote: 'Cita de un colega sobre el trabajo con familias.',
        name: 'Nombre del empleado',
        role: 'Marcador de posición · Puesto, credenciales',
        style: 'speech',
      },
      {
        quote: 'Cita del personal sobre crecimiento y trabajo significativo.',
        name: 'Nombre del empleado',
        role: 'Marcador de posición · Puesto, credenciales',
        style: 'thought',
      },
    ],
  },
  opportunity: {
    eyebrow: 'Por qué trabajar con VTCC',
    title: 'Trabajo significativo, apoyo real',
    body: 'Buscamos personas que aporten cuidado, curiosidad y respeto.',
    photoAlt:
      'El personal de VTCC reunido al aire libre alrededor de una mesa en un evento del equipo, con el banner de la clínica detrás.',
  },
  steps: {
    eyebrow: 'Qué puede esperar',
    title: 'De la solicitud a la conversación',
    id: 'hiring-process',
    summary: 'Tres pasos sencillos.',
    items: [
      { title: 'Postule', body: 'Comparta su experiencia e intereses.' },
      { title: 'Conozca al equipo', body: 'Le invitaremos a conversar si hay coincidencia.' },
      { title: 'Hablemos del puesto', body: 'Responsabilidades, horario y próximos pasos.' },
    ],
  },
  closing: {
    title: '¿Listo para dar el siguiente paso?',
    body: 'Postular toma solo unos minutos.',
    buttonLabel: 'Solicitar empleo',
  },
  facts: [
    { value: 'Clínica de Fairfax', label: '10565 Fairfax Blvd, Suite 300' },
    { value: 'Fundado en 2001', label: 'Al servicio de niños y familias' },
    { value: 'Seis programas de ABA', label: 'Del aprendizaje temprano a la capacitación de padres' },
  ],
  differentiator: {
    eyebrow: 'Lo que nos distingue',
    title: 'Impartimos la capacitación RBT internamente',
    summary: 'Curso de 40 horas y evaluación de competencia, aquí mismo.',
    steps: [
      { title: 'Curso RBT de 40 horas', body: 'Cumple los requisitos de la BACB, impartido en VTCC.' },
      { title: 'Evaluación de competencia interna', body: 'Con un evaluador de VTCC.' },
      { title: 'Examen en Pearson VUE', body: 'Se programa tras la aprobación de la BACB.' },
    ],
  },
  tabsLabel: 'Secciones de empleo',
  tabs: [
    { id: 'behavior-technician', label: 'Técnico de conducta' },
    { id: 'bcba', label: 'BCBA' },
    { id: 'other', label: 'Otras formas de postular' },
  ],
  postings: {
    bt: {
      kicker: 'Puesto principal',
      title: 'Técnico de conducta (BT)',
      meta: 'Tiempo completo, parcial o pasantía · Fairfax, VA',
      summary: 'Brinde terapia ABA bajo supervisión de un BCBA. Nuestro principal puesto clínico de entrada.',
      youWill: {
        title: 'Qué hará',
        items: [
          'Aplicar planes de tratamiento escritos por el BCBA',
          'Recopilar datos de sesión',
          'Practicar habilidades cotidianas con los niños',
          'Orientar a los cuidadores durante las sesiones',
        ],
      },
      training: {
        title: 'Capacitación y credencial RBT',
        body: 'Ofrecemos el curso de 40 horas y la evaluación de competencia; el examen es en Pearson VUE.',
      },
      requirements: {
        title: 'Qué pide este puesto',
        items: [
          'Interés en trabajar con niños y familias',
          'Puntualidad y comunicación clara',
          'Disposición para completar la capacitación RBT',
        ],
      },
      applyLabel: 'Solicitar como técnico de conducta',
      applyRole: 'Behavior Technician (BT)',
      applyHref: '/career/apply',
    },
    bcba: {
      kicker: 'Liderazgo clínico',
      title: 'Analista de conducta certificado por la junta (BCBA)',
      meta: 'Puesto clínico de supervisión · Requiere licencia de Virginia',
      summary: 'Dirija evaluaciones, planes de tratamiento, supervisión y capacitación de cuidadores.',
      education: {
        title: 'Educación',
        body: 'Título de posgrado que cumpla los requisitos de la BACB.',
      },
      certification: {
        title: 'Certificación',
        body: 'Certificación BCBA vigente.',
      },
      licensing: {
        title: 'Licencia de Virginia',
        body: 'Licensed Behavior Analyst (LBA), o elegible para obtenerla.',
      },
      youWill: {
        title: 'Qué hará',
        items: [
          'Evaluar a los niños y redactar planes de tratamiento',
          'Supervisar a técnicos y revisar datos',
          'Capacitar a padres y cuidadores',
          'Guiar a los analistas estudiantes',
        ],
      },
      applyLabel: 'Solicitar como BCBA',
      applyRole: 'Board Certified Behavior Analyst',
      applyHref: '/career/apply',
    },
  },
  otherOpenings: {
    title: 'Otras formas de postular',
    body: 'También recibimos interés en puestos de oficina y pasantías.',
  },
  programs: {
    eyebrow: 'Programas para empleados',
    title: 'Apoyo después de la contratación',
    summary: 'Horas de trabajo de campo, aprendizaje mensual y una vía de técnico sénior.',
    items: [
      {
        title: 'Programa de analista estudiante',
        summary: 'Trabajo de campo mientras trabaja',
        body: 'Los RBT en una maestría que califica acumulan horas supervisadas de la BACB en el empleo.',
      },
      {
        title: 'PDU mensuales para RBT',
        summary: 'Aprendizaje continuo',
        body: 'Sesiones mensuales sobre habilidades, ética, documentación y calidad clínica.',
      },
      {
        title: 'Técnico de conducta líder sénior (SLBT)',
        summary: 'Una vía de técnico sénior',
        body: 'Técnicos con experiencia capacitan a nuevos empleados, orientan en sesión y enseñan Safety-Care.',
      },
    ],
  },
  recognition: {
    eyebrow: 'Reconocimiento a empleados',
    title: 'Celebramos el gran trabajo',
    items: [
      { title: 'Empleado del mes', body: 'Un honor mensual por un trabajo destacado.' },
      { title: 'Grounds for Greatness', body: 'Menciones por momentos cotidianos de excelencia.' },
    ],
    photoCaption: 'Una reunión de reconocimiento a empleados de VTCC',
    photoAlt: 'Personal de VTCC reunido al aire libre en un evento de reconocimiento a empleados',
  },
  clinic: {
    eyebrow: 'Vida en la clínica',
    title: 'Dónde está el equipo',
    summary: 'Con base en Fairfax; gran parte del trabajo ocurre en los hogares.',
    galleryTitle: 'Dentro de la clínica',
    photoPendingLabel: 'Foto pendiente',
    gallery: [
      { id: 'kitchen', caption: 'Cocina de la clínica', pending: true },
      { id: 'interior', caption: 'Interior de la clínica', pending: true },
      { id: 'employeeAppreciation', caption: 'Reunión del equipo', asset: 'employeeAppreciationImage' },
    ],
  },
}

es.careerApplication = {
  title: 'Solicite unirse a nuestro equipo',
  intro:
    'Cuéntenos cómo contactarlo y qué puesto le interesa. VTCC recibirá su solicitud y dará seguimiento.',
  privacyTitle: 'La privacidad importa',
  privacyNote:
    'No incluya información de clientes, expedientes clínicos, números de Seguro Social ni otros documentos confidenciales. Usamos lo que envía solo para evaluar su interés en trabajar en VTCC.',
  selectPlaceholder: 'Seleccione una opción',
  submitLabel: 'Enviar solicitud',
  backLabel: 'Volver a Carreras',
  backHref: '/career',
  consentLabel:
    'Acepto que VTCC use la información que envío para revisar mi solicitud y comunicarse conmigo.',
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
        'Registered Behavior Technician (RBT)',
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

es.footer.links = [{ label: 'Contáctenos', href: '/contact' }]

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
  title: 'Cómo VTCC apoya a las familias',
  intro:
    'Elija el programa que mejor se adapte a su familia. VTCC acompaña cada vía con pasos claros.',
})

es.sections.services.cards = [
  {
    "id": "aba",
    "label": "Terapia ABA",
    "title": "Desarrolle habilidades significativas con un plan individualizado",
    "body": "El Análisis de Conducta Aplicado ayuda a los niños a desarrollar habilidades significativas mediante metas individualizadas, refuerzo positivo, capacitación para padres y monitoreo continuo del progreso.",
    "teaser": "Terapia individualizada que desarrolla la comunicación, la vida diaria y las habilidades sociales.",
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
    "related": [
      "early-learners",
      "feeding",
      "social-enrichment",
      "social-skills",
      "group-parent-training"
    ],
    "linkLabel": "Conozca la ABA",
    "href": "/aba"
  },
  {
    "id": "early-learners",
    "label": "Primeros Aprendices",
    "title": "Prepárese para la escuela y los entornos sociales",
    "body": "El programa de Primeros Aprendices ayuda a niños en edad preescolar a practicar comunicación, juego, rutinas y habilidades de aprendizaje temprano para la escuela y los entornos sociales.",
    "teaser": "Preparación escolar a través del juego, las rutinas y la comunicación.",
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
    "related": [
      "aba",
      "social-enrichment",
      "social-skills",
      "feeding",
      "group-parent-training"
    ],
    "linkLabel": "Conozca Primeros Aprendices",
    "href": "/early-learners"
  },
  {
    "id": "feeding",
    "label": "Programa de Alimentación",
    "title": "Amplíe el repertorio y las preferencias alimentarias",
    "body": "El Programa de Alimentación utiliza prácticas ABA para apoyar a los niños mientras desarrollan comodidad con una mayor variedad de alimentos, sabores, texturas y rutinas de comida.",
    "teaser": "Apoyo gradual y amable para probar alimentos y texturas nuevas.",
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
    "related": [
      "aba",
      "early-learners",
      "social-enrichment",
      "group-parent-training"
    ],
    "linkLabel": "Conozca el programa de alimentación",
    "href": "/feeding-program"
  },
  {
    "id": "social-enrichment",
    "label": "Enriquecimiento Social",
    "title": "Practique habilidades con compañeros en un grupo con apoyo",
    "body": "El programa de Enriquecimiento Social ayuda a niños de 8 a 12 años a unirse a actividades grupales, construir amistades y practicar habilidades sociales cotidianas con compañeros.",
    "teaser": "Juego en grupo pequeño y habilidades de amistad para edades de 8 a 12 años.",
    "ageRange": "Por lo general, de 8 a 12 años",
    "ageNote": "Este grupo está diseñado para niños en edad escolar. La compatibilidad depende de la evaluación, las metas actuales, el financiamiento y la autorización.",
    "description": "Los niños practican unirse a juegos, turnarse, compartir atención y mantenerse involucrados con compañeros en un grupo pequeño. La práctica se mantiene estructurada, positiva y ajustada a las metas de cada niño.",
    "goals": [
      "Unirse a juegos grupales y actividades compartidas",
      "Practicar turnos, espera y juego flexible",
      "Desarrollar conversación y habilidades de amistad con compañeros",
      "Mantenerse involucrado durante rutinas y transiciones del grupo"
    ],
    "structure": [
      "Un clínico confirma la compatibilidad con el grupo y las metas sociales actuales.",
      "Los niños se unen a un grupo pequeño con compañeros de la misma edad.",
      "El personal orienta durante juegos, conversación y actividades compartidas.",
      "Las familias reciben guía para practicar las habilidades en casa y en la escuela.",
      "Las metas se actualizan a medida que el niño gana confianza con sus compañeros."
    ],
    "related": [
      "aba",
      "early-learners",
      "social-skills",
      "group-parent-training"
    ],
    "linkLabel": "Conozca Enriquecimiento Social",
    "href": "/social-enrichment"
  },
  {
    "id": "social-skills",
    "label": "Grupo de Habilidades Sociales",
    "title": "Practique habilidades sociales avanzadas con compañeros",
    "body": "El Grupo de Habilidades Sociales apoya a clientes que están listos para practicar sarcasmo, conversación, pensamiento flexible y juego apropiado para su edad con compañeros.",
    "teaser": "Práctica guiada con compañeros en conversación y pensamiento flexible.",
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
    "related": [
      "aba",
      "early-learners",
      "social-enrichment",
      "group-parent-training"
    ],
    "linkLabel": "Conozca el grupo social",
    "href": "/social-skills-group"
  },
  {
    "id": "group-parent-training",
    "label": "Capacitación Grupal para Padres",
    "title": "Aprenda estrategias prácticas con otros cuidadores",
    "body": "La Capacitación Grupal para Padres ayuda a los cuidadores a practicar estrategias que pueden usar en casa, durante las rutinas diarias y entre sesiones de terapia. Las familias aprenden juntas en un entorno grupal con apoyo.",
    "teaser": "Los cuidadores aprenden estrategias prácticas juntos en un grupo pequeño.",
    "ageRange": "Padres y cuidadores",
    "ageNote": "El grupo está diseñado para cuidadores de niños que pueden recibir servicios de VTCC. La compatibilidad depende de las metas actuales, el financiamiento y la autorización.",
    "description": "Los cuidadores se reúnen en un grupo pequeño para aprender herramientas prácticas para la comunicación, las rutinas y los momentos difíciles. El programa está diseñado para que las familias usen las mismas estrategias cuando los terapeutas no están presentes.",
    "goals": [
      "Aprender estrategias prácticas para las rutinas diarias",
      "Practicar habilidades que apoyan la comunicación y la conducta en casa",
      "Recibir orientación y comentarios en un grupo pequeño",
      "Llevar las estrategias a otros cuidadores y entornos diarios"
    ],
    "structure": [
      "Un clínico confirma la compatibilidad con el grupo y las prioridades familiares.",
      "Los cuidadores se unen a un grupo pequeño con metas de aprendizaje compartidas.",
      "Las sesiones practican estrategias para rutinas, comunicación y momentos difíciles.",
      "Las familias reciben guía para usar las mismas herramientas en casa.",
      "Las metas se actualizan a medida que los cuidadores ganan confianza."
    ],
    "related": [
      "aba",
      "early-learners",
      "social-enrichment",
      "social-skills"
    ],
    "linkLabel": "Conozca la capacitación grupal para padres",
    "href": "/group-parent-training"
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
        'La ABA es una terapia conductual que se utiliza para apoyar a niños con trastorno del espectro autista (TEA) y otras afecciones del desarrollo. Se centra en desarrollar gradualmente las habilidades sociales, de comunicación y de la vida diaria mediante refuerzo positivo.',
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
  socialEnrichment: {
    eyebrow: 'Enriquecimiento Social',
    title: 'Practique habilidades con compañeros de 8 a 12 años',
    intro:
      'El Enriquecimiento Social ayuda a niños de 8 a 12 años a unirse a actividades grupales, construir amistades y practicar habilidades sociales cotidianas con compañeros.',
    columns: [
      {
        title: 'Lo que pueden practicar los niños',
        items: [
          'Unirse a juegos grupales y actividades compartidas',
          'Turnos, espera y juego flexible',
          'Conversación y habilidades de amistad con compañeros',
          'Mantenerse involucrado durante rutinas y transiciones del grupo',
        ],
      },
      {
        title: 'Un entorno grupal con apoyo',
        items: [
          'Práctica en grupos pequeños con niños de la misma edad',
          'Orientación durante juegos, conversación y juego compartido',
          'Metas individualizadas según las habilidades sociales actuales',
          'Guía familiar para continuar la práctica en casa y en la escuela',
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
  groupParentTraining: {
    eyebrow: 'Capacitación Grupal para Padres',
    title: 'Aprenda estrategias prácticas con otros cuidadores',
    intro:
      'La Capacitación Grupal para Padres ayuda a los cuidadores a practicar estrategias que pueden usar en casa, durante las rutinas diarias y entre sesiones de terapia. Las familias aprenden juntas en un entorno grupal con apoyo.',
    columns: [
      {
        title: 'Lo que pueden practicar los cuidadores',
        items: [
          'Estrategias prácticas para las rutinas diarias',
          'Habilidades que apoyan la comunicación y la conducta en casa',
          'Orientación y comentarios en un grupo pequeño',
          'Formas de mantener las estrategias consistentes entre cuidadores',
        ],
      },
      {
        title: 'Cómo está estructurado el grupo',
        items: [
          'Confirmación de la compatibilidad con el grupo y las prioridades familiares',
          'Aprendizaje en grupo pequeño con metas compartidas',
          'Práctica para rutinas, comunicación y momentos difíciles',
          'Guía para usar las mismas herramientas en casa',
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
    buttonHref: '/contact',
  },
  {
    title: 'Para Referentes',
    body: 'Escuelas, médicos, administradores de casos, socios del condado y profesionales comunitarios pueden contactar a VTCC para preguntar sobre elegibilidad y requisitos de referencia.',
    buttonLabel: 'Iniciar una referencia',
    buttonStyle: 'secondary',
    buttonHref: '/contact/referral',
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
    'Enriquecimiento social para niños de 8 a 12 años',
    'Habilidades sociales avanzadas y juego apropiado para la edad con compañeros',
    'Capacitación grupal para padres que quieren estrategias prácticas para usar en casa',
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
  title: 'Habilidades pequeñas. Grandes cambios en casa.',
  lede: 'VTCC ayuda a niños y familias a desarrollar habilidades fundamentales de comunicación, independencia y conexión social que se trasladan a las rutinas de cada día.',
  mission: {
    eyebrow: 'Nuestra misión',
    statement: 'Servir a comunidades diversas es el centro de nuestro trabajo.',
    body: 'Cada familia aporta su propia cultura, idioma, historia y fortalezas. Encontramos a las familias en su idioma y su cultura, respetamos los valores de cada familia y hacemos que la atención sea comprensible y acogedora.',
  },
  story: {
    eyebrow: 'Nuestra historia',
    title: 'Habilidades fundamentales que aparecen en la vida diaria',
    paragraphs: [
      'Las familias llegan a VTCC porque quieren que la vida diaria se sienta más fácil: las comidas, vestirse, el juego y los momentos entre medio.',
      'Enseñamos habilidades fundamentales que los niños pueden usar una y otra vez. Esas habilidades se generalizan de la clínica al hogar, la escuela y la comunidad.',
      'Las familias son socias en todo el proceso. Juntos elegimos metas que importan en la vida real y practicamos hasta que el cambio se queda.',
    ],
  },
  pillars: {
    eyebrow: 'Lo que cambia',
    title: 'Habilidades que se llevan a la vida diaria',
    items: [
      {
        title: 'Comunicación',
        body: 'Pedir lo que necesitan en la mesa, y ser comprendidos.',
      },
      {
        title: 'Independencia',
        body: 'Vestirse, las comidas y las rutinas que las familias pueden compartir.',
      },
      {
        title: 'Conexión',
        body: 'Juego con hermanos y compañeros que se siente natural y bienvenido.',
      },
    ],
  },
  photoAlt: 'Clínicos de VTCC trabajando uno a uno con niños en la clínica',
  photoCaption: 'Clínicos y familias practicando habilidades que viajan a casa.',
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
  eyebrow: 'Para familias',
  title: 'Solicite servicios para su hijo',
  intro:
    'Díganos cómo contactarlo y un poco sobre su hijo. Un miembro del equipo de VTCC puede explicar los pasos de admisión, los formularios y la revisión de financiamiento.',
  callEyebrow: 'Llame a VTCC',
  callTitle: '¿Prefiere hablar con alguien?',
  callIntro:
    'Llame a nuestra oficina de Fairfax. Un miembro del equipo puede ayudar con servicios, trámites y próximos pasos.',
})

Object.assign(es.sections.contactReferral, {
  eyebrow: 'Para referentes',
  title: 'Inicie una referencia o pregunte por la elegibilidad',
  intro:
    'Escuelas, médicos, administradores de casos, socios del condado y profesionales comunitarios pueden usar este formulario para preguntar por los requisitos de referencia. No envíe información de salud protegida aquí.',
  callEyebrow: 'Llame a VTCC',
  callTitle: '¿Necesita hablar de una referencia por teléfono?',
  callIntro:
    'Llame a nuestra oficina de Fairfax. Un miembro del equipo puede ayudar con elegibilidad, documentación requerida y próximos pasos.',
})

const familyFormNotices = {
  notice:
    'Este formulario es solo para comunicarse con nosotros sobre nuestros servicios. No incluya diagnósticos, informes de evaluación o escolares, números de Medicaid o de seguro médico, números de Seguro Social ni otros detalles médicos privados. Recopilaremos lo que necesitemos durante el proceso de admisión. Este formulario no se revisa las 24 horas. Si se trata de una emergencia, llame al 911. Si tiene una crisis de salud mental, llame o envíe un mensaje de texto al 988.',
  consentLabel:
    'Soy padre o madre, tutor legal o una persona adulta que se comunica con VTCC. Entiendo que este formulario no es para emergencias ni para información médica privada, y acepto que VTCC se comunique conmigo con la información que proporcioné.',
}

Object.assign(es.form, familyFormNotices, { submitLabel: 'Enviar Solicitud' })
Object.assign(es.formFamily, familyFormNotices)
Object.assign(es.formReferral, {
  notice:
    'Este formulario es solo para preguntas sobre referencias. No incluya informes de diagnóstico, IEP, evaluaciones, expedientes de tratamiento, números de Medicaid, números de Seguro Social ni inquietudes urgentes de seguridad. Después de recibir su mensaje, VTCC se comunicará con usted para indicarle cómo enviar los documentos de la referencia. Si se trata de una emergencia, llame al 911.',
  consentLabel:
    'Entiendo que este formulario es solo para preguntas sobre referencias y no es para emergencias ni para información de salud protegida. Tengo permiso para compartir con VTCC el nombre y la información de contacto del padre, la madre o el tutor.',
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
    label: 'Edad del niño',
    type: 'number',
    min: 0,
    max: 30,
    step: 1,
    inputmode: 'numeric',
  },
  {
    name: 'service',
    label: 'Interés en servicios',
    type: 'select',
    options: ['ABA', 'Primeros Aprendices', 'Programa de Alimentación', 'Enriquecimiento Social', 'Grupo de Habilidades Sociales', 'Capacitación Grupal para Padres', 'No estoy seguro', 'Pregunta de referencia'],
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
  text: '© {year} Victoria Transcultural Clinical Center. Todos los derechos reservados.',
  disclaimer: 'Este sitio web ofrece solo información general y no es consejo médico.',
  visitLabel: 'Visítenos',
  contactLabel: 'Contacto',
  directionsLabel: 'Cómo llegar',
  links: [{ label: 'Contáctenos', href: '/contact' }],
  legalNavLabel: 'Avisos legales',
  legalLinks: [
    { label: 'Política de privacidad', href: '/privacy' },
    { label: 'Aviso de prácticas de privacidad', href: '/notice-of-privacy-practices' },
    { label: 'No discriminación y ayuda con idiomas', href: '/nondiscrimination' },
    { label: 'Accesibilidad', href: '/accessibility' },
    { label: 'Términos de uso', href: '/terms' },
  ],
})

Object.assign(es.legal, {
  updatedLabel: 'Última actualización',
  translationNotice:
    'Por ahora, este documento está disponible solo en inglés. Si necesita ayuda en español, llame al 703-218-6599.',
  privacyLinkLabel: 'Lea nuestra Política de privacidad del sitio web',
  serviceDisclaimer:
    'Esta página ofrece información general sobre nuestros servicios. No es un diagnóstico, un plan de tratamiento ni consejo médico, y no crea una relación entre proveedor y cliente. Cada niño es diferente y los resultados varían. La elegibilidad y la cobertura dependen de una evaluación, de las necesidades de su hijo y de la aprobación de Medicaid, su plan de salud o el equipo CSA/FAPT de su condado. Si usted o su hijo están en peligro, llame al 911. Si tiene una crisis de salud mental, llame o envíe un mensaje de texto al 988.',
})
es.legal.pages.privacy.title = 'Política de privacidad del sitio web'
es.legal.pages.terms.title = 'Términos de uso del sitio web'
es.legal.pages.accessibility.title = 'Declaración de accesibilidad'
es.legal.pages.nondiscrimination.title = 'Aviso de no discriminación y asistencia con idiomas'
es.legal.pages.npp.title = 'Aviso de prácticas de privacidad'
es.legal.pages.npp.documentLinkLabel = 'Lea nuestro Aviso de prácticas de privacidad (PDF, en inglés)'

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
  socialEnrichment: {
    title: 'Página de Enriquecimiento Social',
    hero: {
      headline: 'Habilidades con compañeros para niños de 8 a 12 años',
      body: 'El Enriquecimiento Social ayuda a niños de 8 a 12 años a unirse a actividades grupales, construir amistades y practicar habilidades sociales cotidianas con compañeros.',
      buttons: ['Solicitar servicios de Enriquecimiento Social', 'Preguntar sobre elegibilidad'],
    },
    sections: [
      {
        title: 'Lo que pueden practicar los niños',
        intro: 'El grupo se centra en habilidades cotidianas con compañeros que ayudan a los niños a participar en juegos, conversación y actividades compartidas.',
        items: [
          'Unirse a juegos grupales y actividades compartidas',
          'Turnos, espera y juego flexible',
          'Conversación y habilidades de amistad con compañeros',
          'Mantenerse involucrado durante rutinas y transiciones del grupo',
        ],
      },
      {
        title: 'Aprender con compañeros',
        body: 'Los niños practican en un grupo pequeño con orientación del personal capacitado. Las metas son individualizadas para que cada niño gane confianza con sus compañeros a un ritmo manejable.',
      },
    ],
    cta: {
      body: 'Contacte a VTCC para preguntar si el Enriquecimiento Social puede ser adecuado para su hijo y conocer la disponibilidad actual.',
      button: 'Preguntar sobre Enriquecimiento Social',
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
  groupParentTraining: {
    title: 'Página de Capacitación Grupal para Padres',
    hero: {
      headline: 'Aprenda estrategias prácticas con otros cuidadores',
      body: 'La Capacitación Grupal para Padres ayuda a los cuidadores a practicar estrategias que pueden usar en casa, durante las rutinas diarias y entre sesiones de terapia. Las familias aprenden juntas en un entorno grupal con apoyo.',
      buttons: ['Solicitar capacitación grupal para padres', 'Preguntar sobre elegibilidad'],
    },
    sections: [
      {
        title: 'Lo que pueden practicar los cuidadores',
        intro: 'La Capacitación Grupal para Padres ayuda a los cuidadores a practicar estrategias que pueden usar en casa, durante las rutinas diarias y entre sesiones de terapia.',
        items: [
          'Estrategias prácticas para las rutinas diarias',
          'Habilidades que apoyan la comunicación y la conducta en casa',
          'Orientación y comentarios en un grupo pequeño',
          'Formas de mantener las estrategias consistentes entre cuidadores',
        ],
      },
      {
        title: 'Aprendizaje con otras familias',
        body: 'Los cuidadores se reúnen en un grupo pequeño con orientación del personal capacitado. El grupo está diseñado para que las familias usen las mismas estrategias cuando los terapeutas no están presentes.',
      },
    ],
    cta: {
      body: 'Contacte a VTCC para preguntar si la Capacitación Grupal para Padres puede ser adecuada para su familia y conocer la disponibilidad actual.',
      button: 'Preguntar sobre la Capacitación Grupal para Padres',
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
      body: 'VTCC ofrece recursos educativos para ayudar a las familias a entender la terapia ABA, el programa de Primeros Aprendices, el Programa de Alimentación, el Enriquecimiento Social, el Grupo de Habilidades Sociales, la Capacitación Grupal para Padres, la participación de los padres, los pasos de admisión y las preguntas sobre financiamiento.',
    },
    faqs: [
      {
        question: '¿Qué servicios brinda VTCC?',
        answer:
          'VTCC brinda terapia ABA, un programa de Primeros Aprendices, un Programa de Alimentación, Enriquecimiento Social para edades de 8 a 12 años, un Grupo de Habilidades Sociales y Capacitación Grupal para Padres para niños y familias. Los servicios dependen de la elegibilidad, el financiamiento, la necesidad clínica y la disponibilidad.',
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
        question: '¿Qué es el Enriquecimiento Social?',
        answer:
          'El Enriquecimiento Social es un programa grupal para niños de 8 a 12 años. Ayuda a los niños a unirse a actividades, turnarse y construir habilidades de amistad con compañeros.',
      },
      {
        question: '¿Quién puede beneficiarse del Grupo de Habilidades Sociales?',
        answer:
          'El Grupo de Habilidades Sociales es para clientes que están listos para practicar habilidades sociales más avanzadas, como comprender el sarcasmo, conversar y participar en juegos apropiados para su edad con compañeros.',
      },
      {
        question: '¿Qué es la Capacitación Grupal para Padres?',
        answer:
          'La Capacitación Grupal para Padres es un programa centrado en los cuidadores. Los padres y cuidadores aprenden estrategias prácticas juntos en un entorno grupal con apoyo y las practican en las rutinas diarias.',
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
  title: 'Descargue formularios de admisión y referencia',
  intro:
    'Elija el formulario que corresponda a su servicio, descárguelo, imprímalo y complételo antes de su cita de admisión.',
  steps: [
    'Elija el formulario para su servicio',
    'Descárguelo e imprímalo',
    'Complételo y devuélvalo a VTCC',
  ],
  assistanceText: '¿Necesita ayuda? Llame al {phone}.',
  privacyNotice:
    'Algunos formularios piden información privada. No envíe formularios completados a un correo electrónico general. Llame al {phone} y le explicaremos cómo entregarlos.',
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
      'Enriquecimiento Social',
      'Grupo de Habilidades Sociales',
      'Capacitación Grupal para Padres',
      'Aún no estoy seguro',
    ]
  }
}

es.contactQuiz = JSON.parse(JSON.stringify(en.contactQuiz))
Object.assign(es.contactQuiz, {
  eyebrow: 'Contacto',
  title: 'Encuentre el siguiente paso correcto',
  intro:
    'Responda unas preguntas. Le sugeriremos un camino y abriremos el formulario correspondiente con lo que ya compartió. Las sugerencias son un punto de partida, no una decisión clínica.',
  callEyebrow: 'Llame a VTCC',
  callTitle: '¿Prefiere hablar con alguien?',
  callIntro:
    'Llame a nuestra oficina de Fairfax. Un miembro del equipo puede ayudar con servicios, referencias, empleo y próximos pasos.',
  selectPlaceholder: 'Seleccione una opción',
  multiSelectPlaceholder: 'Seleccione todas las que correspondan',
  multiSelectSelected: '{count} seleccionadas',
  yesLabel: 'Sí',
  noLabel: 'No',
  closeLabel: 'Cerrar',
  backLabel: 'Atrás',
  continueLabel: 'Continuar',
  progressLabel: 'Pregunta {n} de {total}',
  progressAriaLabel: 'Progreso del cuestionario',
  callPrompt: '¿Prefiere hablar?',
  ageSuffix: 'años',
  ageHelp: 'Ingrese la edad de su hijo en años enteros.',
  skipLinkPrompt: '¿Escuela, administrador de casos u otro profesional?',
  skipLinkLabel: 'Iniciar una referencia',
  disclaimer:
    'Este cuestionario no determina la elegibilidad. La adecuación final depende de la evaluación, el financiamiento y la autorización. No ingrese informes de diagnóstico ni otra información de salud protegida aquí.',
  doctorMessage: 'Cuestionario de contacto: consulta de referencia de un médico.',
})
es.contactQuiz.roleQuestion.label = 'Soy…'
es.contactQuiz.roleQuestion.options = [
  { id: 'parent', label: 'Padre, madre o tutor' },
  { id: 'doctor', label: 'Médico' },
  { id: 'applicant', label: 'Solicitante de empleo' },
]
es.contactQuiz.parentDiagnosisQuestion.label = '¿Tiene un diagnóstico del médico de su hijo?'
es.contactQuiz.parentAgeQuestion.label = '¿Qué edad tiene su hijo?'
es.contactQuiz.parent18MonthsQuestion.label = '¿Su hijo tiene al menos 18 meses?'
es.contactQuiz.parentFeedingQuestion.label =
  '¿Su hijo tiene rigidez con la comida o dificultad para comer suficiente nutrición?'
es.contactQuiz.parentSocialQuestion.label =
  '¿Su hijo necesita apoyo con habilidades sociales en grupo?'
es.contactQuiz.parentClassroomQuestion.label =
  '¿Su hijo está listo para el aula del programa de Primeros Aprendices?'
es.contactQuiz.doctorDiagnosisQuestion.label = '¿Tiene la referencia y el diagnóstico?'
es.contactQuiz.applicantCredentialsQuestion.label = '¿Qué titulaciones tiene?'
es.contactQuiz.applicantCredentialsQuestion.groups = [
  {
    label: 'Títulos',
    options: [
      { id: 'hs', label: 'Diploma de escuela secundaria o GED' },
      { id: 'associate', label: 'Título de asociado' },
      { id: 'bachelors', label: 'Licenciatura' },
      { id: 'masters', label: 'Maestría (ABA, psicología, educación o afín)' },
      { id: 'doctorate', label: 'Doctorado' },
    ],
  },
  {
    label: 'Certificaciones',
    options: [
      { id: 'rbt', label: 'Técnico de Conducta Registrado (RBT)' },
      { id: 'qbt', label: 'Técnico de Conducta Calificado (QBT)' },
      { id: 'bcaba', label: 'Analista de Conducta Asistente Certificado (BCaBA)' },
      { id: 'bcba', label: 'Analista de Conducta Certificado por la Junta (BCBA)' },
      { id: 'bcba-d', label: 'Analista de Conducta Certificado-Doctorado (BCBA-D)' },
    ],
  },
  {
    label: 'Licencias',
    options: [
      { id: 'lba', label: 'Analista de Conducta con licencia de Virginia (LBA)' },
      { id: 'teaching', label: 'Licencia de enseñanza' },
      { id: 'other-license', label: 'Otra licencia profesional' },
    ],
  },
  {
    label: 'Otro',
    options: [{ id: 'none-yet', label: 'Todavía ninguna de estas' }],
  },
]
es.contactQuiz.applicantExperienceSettingsQuestion.label =
  '¿Qué tipo de experiencia ha tenido en entornos infantiles?'
es.contactQuiz.applicantExperienceSettingsQuestion.options = [
  { id: 'none-children', label: 'Sin experiencia con niños' },
  { id: 'aba', label: 'Entorno de ABA o terapia conductual' },
  { id: 'school', label: 'Aula o escuela' },
  { id: 'daycare', label: 'Guardería o preescolar' },
  { id: 'clinic', label: 'Hospital o clínica ambulatoria' },
  { id: 'in-home', label: 'Cuidado en el hogar' },
  { id: 'community', label: 'Programa comunitario o recreativo' },
  { id: 'other', label: 'Otro entorno infantil' },
]
es.contactQuiz.applicantExperienceLengthQuestion.label =
  '¿Cuánta experiencia tiene en esos entornos?'
es.contactQuiz.applicantExperienceLengthQuestion.options = [
  { id: 'none', label: 'Sin experiencia' },
  { id: 'under-year', label: 'Menos de un año en total' },
  { id: 'over-year', label: 'Más de un año en total' },
]
es.contactQuiz.applicantExperienceAgesQuestion.label = '¿Con qué rango de edad trabajó?'
es.contactQuiz.applicantExperienceAgesQuestion.options = [
  { id: 'early-childhood', label: 'Primera infancia (0–5)' },
  { id: 'school-age', label: 'Edad escolar (6–12)' },
  { id: 'adolescents', label: 'Adolescentes (13–17)' },
  { id: 'mixed', label: 'Edades mixtas' },
]
es.contactQuiz.serviceValues = {
  aba: 'ABA',
  'early-learners': 'Primeros Aprendices',
  feeding: 'Programa de Alimentación',
  'social-enrichment': 'Enriquecimiento Social',
  'social-skills': 'Grupo de Habilidades Sociales',
  'not-sure': 'Aún no estoy seguro',
}
es.contactQuiz.programLabels = {
  aba: 'Terapia ABA',
  'early-learners': 'Primeros Aprendices',
  feeding: 'Programa de Alimentación',
  'social-enrichment': 'Enriquecimiento Social',
  'social-skills': 'Grupo de Habilidades Sociales',
}
es.contactQuiz.roleReasons = {
  bcba: 'Su credencial de BCBA es la mejor coincidencia para la solicitud de Board Certified Behavior Analyst.',
  bcaba:
    'VTCC no tiene una publicación separada para BCaBA. Solicite en Other y mencione su credencial BCaBA.',
  masters: 'Una maestría afín encaja bien con el Student Analyst Program.',
  rbt: 'Su credencial de RBT o QBT coincide con el puesto de Registered Behavior Technician.',
  bt: 'El puesto de Behavior Technician suele ser el punto de partida con esta formación.',
}
Object.assign(es.contactQuiz.parentNoDiagnosis, {
  title: 'Un diagnóstico ayuda, y aún puede contactar a VTCC',
  intro:
    'Un diagnóstico del médico de su hijo suele ser necesario para el financiamiento y la elegibilidad. No tiene que esperar para preguntar por los próximos pasos.',
  steps: [
    'Hable con el pediatra de su hijo sobre una evaluación del desarrollo.',
    'Pregunte si corresponde una referencia a un especialista.',
    'Llame a VTCC o continúe al formulario de solicitud. No incluya informes de diagnóstico en el formulario.',
  ],
  resultTitle: 'Pida ayuda con los próximos pasos',
  resultBody:
    'Envíe una solicitud no sensible para que un miembro del equipo explique la evaluación, la admisión y la revisión de financiamiento.',
  ctaLabel: 'Continuar al formulario de solicitud de servicios',
  modalCtaLabel: 'Ver el formulario de solicitud',
})
Object.assign(es.contactQuiz.parentResult, {
  title: 'Programas que pueden ser una buena opción',
  body: 'Según la edad de su hijo y lo que compartió, estos programas pueden valer la pena comentarlos con VTCC.',
  abaNote:
    'La terapia ABA suele ser la base. Los programas especializados se pueden agregar cuando correspondan.',
  outsideAgeTitle: 'Aún podemos ayudarle a encontrar un camino',
  outsideAgeBody:
    'La edad de su hijo está fuera del rango típico publicado para los programas de VTCC. Aún puede enviar una solicitud para que el equipo le oriente.',
  onlyAbaTitle: 'ABA puede ser el mejor punto de partida',
  onlyAbaBody:
    'Sus respuestas no señalaron un programa especializado. ABA suele estar disponible de los 18 meses a los 21 años cuando es clínicamente apropiado.',
  ctaLabel: 'Continuar al formulario de solicitud de servicios',
})
es.contactQuiz.parentMessages = {
  noDiagnosis: 'Cuestionario de contacto: padre, madre o tutor pregunta por los próximos pasos.',
  programs: 'Cuestionario de contacto: interés en {programs}.',
  outsideAge: 'Cuestionario de contacto: la edad del niño está fuera del rango típico publicado.',
}
Object.assign(es.contactQuiz.doctorYes, {
  title: 'Cómo enviar una referencia',
  intro:
    'Use primero esta consulta. No adjunte informes de diagnóstico, IEP ni otra información de salud protegida en el formulario web.',
  steps: [
    {
      title: 'Envíe esta consulta',
      body: 'Envíe una pregunta breve y no sensible a través del formulario de referencia.',
    },
    {
      title: 'VTCC da seguimiento',
      body: 'Un miembro del equipo confirma contactos, el servicio de interés y la forma segura de enviar documentos.',
    },
    {
      title: 'Envíe documentos de forma segura',
      body: 'Comparta la referencia y el diagnóstico a través del proceso seguro aprobado por VTCC, no en este formulario.',
    },
    {
      title: 'Evaluación y autorización',
      body: 'VTCC revisa el financiamiento y describe los próximos pasos para la evaluación cuando corresponda.',
    },
  ],
  notice:
    'Este formulario es solo para preguntas de referencia. Use el proceso seguro aprobado por VTCC para documentos protegidos.',
  ctaLabel: 'Continuar al formulario de referencia',
})
Object.assign(es.contactQuiz.doctorNo, {
  title: 'Lo que suele incluir una referencia completa',
  intro: 'Aún puede enviar una consulta. Estos datos ayudan a VTCC a dar seguimiento más rápido.',
  items: [
    'Edad del niño',
    'Información de contacto del padre, madre o tutor',
    'Servicio solicitado',
    'Fuente de financiamiento, si se conoce',
    'Documentos de referencia y diagnóstico a través del proceso seguro aprobado por VTCC, no en este formulario',
  ],
  ctaLabel: 'Continuar al formulario de referencia',
})
Object.assign(es.contactQuiz.applicantResult, {
  title: 'Un puesto que coincide con sus titulaciones',
  body: 'Esta es una sugerencia inicial. Puede cambiar el puesto en el formulario de solicitud.',
  ctaLabel: 'Continuar a la solicitud',
  experienceLabel: 'Experiencia del cuestionario de contacto',
})

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

Object.assign(es.ui, {
  formSubmittingAnnouncement: 'Enviando su solicitud.',
  referenceLabel: 'Número de referencia',
  submittedLabel: 'Enviado',
  copyReferenceLabel: 'Copiar',
  copiedReferenceLabel: 'Copiado',
  keepReferenceNote: 'Guarde este número. Compártalo cuando llame a VTCC sobre esta solicitud.',
  stepCompleteLabel: 'Paso 1 completado',
  clearReceiptLabel: '¿No es usted? Borrar esto',
  viewConfirmationLabel: 'Ver confirmación',
})

es.thankYou = {
  nextLabel: 'Qué sigue',
  notice:
    'No envíe informes de diagnóstico ni otros datos médicos privados por correo electrónico. Si se trata de una emergencia, llame al 911 o vaya a la sala de emergencias más cercana.',
  homeLabel: 'Volver al inicio',
  homeHref: '/',
  family: {
    eyebrow: 'Solicitud recibida',
    title: 'Recibimos su solicitud de servicios',
    lead: 'Un miembro del equipo de VTCC dará seguimiento usando el método de contacto que eligió.',
    steps: [
      'Espere un seguimiento de VTCC por teléfono o correo electrónico.',
      'Tenga a mano su horario preferido y su fuente de financiamiento para esa conversación.',
      'Llame a la oficina de Fairfax si necesita comunicarse antes.',
    ],
    secondaryLabel: 'Ver la ruta de admisión',
    secondaryHref: '/get-started',
  },
  referral: {
    eyebrow: 'Referencia recibida',
    title: 'Recibimos su consulta de referencia',
    lead: 'Un miembro del equipo de VTCC dará seguimiento sobre los próximos pasos para la familia.',
    steps: [
      'VTCC se comunicará con usted al teléfono o correo de trabajo que indicó.',
      'Comparta los documentos de referencia solo por el proceso seguro aprobado por VTCC, no por este formulario.',
      'La familia también puede llamar a VTCC directamente si desea iniciar la conversación.',
    ],
    secondaryLabel: 'Guía para referentes',
    secondaryHref: '/resources/referrals-and-eligibility',
  },
  career: {
    eyebrow: 'Solicitud recibida',
    title: 'Recibimos su solicitud de empleo',
    lead: 'Un miembro del equipo de VTCC revisará lo que envió y dará seguimiento sobre el puesto.',
    steps: [
      'Revise el correo que usó en la solicitud para ver el seguimiento.',
      'El proceso continúa con una conversación sobre el puesto, el horario y la ubicación.',
      'Llame a la oficina de Fairfax si necesita actualizar su solicitud.',
    ],
    secondaryLabel: 'Volver a empleos',
    secondaryHref: '/career',
  },
  default: {
    eyebrow: 'Mensaje recibido',
    title: 'Gracias por comunicarse con VTCC',
    lead: 'Un miembro del equipo de VTCC dará seguimiento.',
    steps: [
      'Esté atento al teléfono o al correo que usa con VTCC.',
      'Llame a la oficina de Fairfax si necesita comunicarse antes.',
    ],
    secondaryLabel: 'Contactar a VTCC',
    secondaryHref: '/contact',
  },
}

writeFileSync(join(rootDir, 'content/locales/es.json'), JSON.stringify(es, null, 2))
console.log('Wrote content/locales/es.json')
