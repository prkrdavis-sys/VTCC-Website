import { readFileSync, writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const rootDir = join(dirname(fileURLToPath(import.meta.url)), '..')
const en = JSON.parse(readFileSync(join(rootDir, 'content/locales/en.json'), 'utf8'))

const es = JSON.parse(JSON.stringify(en))

Object.assign(es.ui, {
  languageLabel: 'Idioma',
  faxLabel: 'Fax',
  payerListTitle: 'Planes de salud aceptados y opciones de financiamiento',
  fullPayerListLabel: 'Ver la lista completa de planes y fuentes de financiamiento',
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
  contactAsideLabel: 'Llame o visite nuestra oficina',
  mapsMenuLabel: 'Elegir Apple Maps o Google Maps',
  appleMapsLabel: 'Apple Maps',
  googleMapsLabel: 'Google Maps',
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
  { label: 'Preguntas y guías', href: '/resources' },
  { label: 'Acerca de', href: '/about' },
  { label: 'Contacto', href: '/contact' },
  { label: 'Carreras', href: '/career' },
]

es.navigation.utility = [
  { label: 'Solicitar servicios', href: '/contact', style: 'cta' },
  { label: 'Referir a un cliente', href: '/contact/referral' },
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
      { label: 'Safety-Care® para Familias y Cuidadores', href: '/group-parent-training' },
    ],
  },
  {
    label: 'Acerca de',
    href: '/about',
  },
  {
    label: 'Preguntas y guías',
    href: '/resources',
    links: [
      { label: 'Comenzar', href: '/get-started' },
      { label: 'Seguro', href: '/insurance' },
      { label: '¿Qué es la Terapia ABA?', href: '/resources/what-is-aba-therapy' },
      { label: 'Programa de Primeros Aprendices', href: '/resources/early-learners' },
      { label: 'Programa de Alimentación', href: '/resources/feeding-program' },
      { label: 'Enriquecimiento Social', href: '/resources/social-enrichment' },
      { label: 'Grupo de Habilidades Sociales', href: '/resources/social-skills-group' },
      { label: 'Preguntas frecuentes sobre el entrenamiento para padres', href: '/resources/parent-training-faqs' },
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
    label: 'Formularios de contacto',
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
  careerFormSuccess: 'Gracias. Recibimos su solicitud. Un miembro del equipo de VTCC se comunicará con usted.',
  careerFormError: 'No pudimos enviar esta solicitud. Llame a VTCC o inténtelo de nuevo más tarde.',
  faqSearchLabel: 'Buscar en las preguntas frecuentes',
  faqSearchPlaceholder: 'Buscar preguntas y respuestas',
  faqSearchNoResults:
    'Ninguna pregunta coincide con su búsqueda. Pruebe otras palabras o revise los temas de abajo.',
  faqSearchResultsCount: '{count} preguntas encontradas',
  faqSearchResultsCountOne: '1 pregunta encontrada',
  faqSearchInTopic: 'En {topic}',
  menuLabel: 'Menú',
  homeLinkLabel: 'Inicio',
  utilityNavLabel: 'Acciones del encabezado',
  mainNavLabel: 'Navegación principal',
  trustHighlightsLabel: 'Puntos de confianza',
  openMenu: 'Abrir menú',
  closeMenu: 'Cerrar menú',
  callLabel: 'Llamar',
  headerContactLabel: 'Contacto',
  formSubmitting: 'Enviando...',
  formSuccess:
    'Gracias. Recibimos su solicitud. Un miembro del equipo de VTCC se comunicará con usted.',
  formError: 'No pudimos enviar este formulario. Llame a VTCC o inténtelo de nuevo más tarde.',
  formPhoneRequired: 'Ingrese un número de teléfono para que podamos comunicarnos con usted.',
  formEmailRequired: 'Ingrese un correo electrónico para que podamos comunicarnos con usted.',
  formContactRequired:
    'Ingrese un número de teléfono o un correo electrónico para que podamos comunicarnos con usted.',
  careerExpandLabel: 'Mostrar esta sección',
  careerCollapseLabel: 'Ocultar esta sección',
})

Object.assign(es.hero, {
  headline:
    'ABA y programas especializados para niños y familias',
  headlineLead: 'Para niños, adolescentes y familias en el norte de Virginia',
  subheadlineLead: 'Servicios conductuales y de salud mental que respetan la cultura de cada familia.',
  subheadline:
    'VTCC apoya a las familias con terapia ABA individualizada, aprendizaje temprano, alimentación, enriquecimiento social, habilidades sociales y capacitación Safety-Care® para familias y cuidadores.',
  supportingLine:
    'VTCC acepta Medicaid, seguro comercial y financiamiento del condado. Llame para confirmar su plan.',
})

es.hero.serviceTags = [
  { label: 'Terapia ABA', href: '/aba' },
  { label: 'Primeros Aprendices', href: '/early-learners' },
  { label: 'Programa de Alimentación', href: '/feeding-program' },
  { label: 'Enriquecimiento Social', href: '/social-enrichment' },
  { label: 'Grupo de Habilidades Sociales', href: '/social-skills-group' },
  { label: 'Safety-Care® para Familias y Cuidadores', href: '/group-parent-training' },
]

es.hero.actions = [
  { label: 'Solicitar servicios', href: '/contact', style: 'primary' },
  { label: 'Llamar a VTCC', href: 'tel:17032186599', style: 'ghost' },
]

es.sections.careers = {
  title: 'Haga crecer su carrera en ABA',
  intro: 'Capacitación incluida, mentoría real y un trabajo que importa a las familias del norte de Virginia.',
  photoAlt:
    'El personal de VTCC reunido al aire libre alrededor de una mesa en un evento del equipo, con el banner de la clínica detrás.',
  heroPhotoAlt: 'Adultos sonriendo juntos alrededor de una mesa durante una reunión de capacitación.',
  applyLabel: 'Solicitar empleo',
  applyHref: '/career/apply',
  indeed: {
    href: 'https://www.indeed.com/cmp/Victoria-Transcultural-Clinical-Center/',
    label: 'Ver empleos de VTCC en Indeed',
  },
  openRolesEyebrow: 'Puestos abiertos',
  training: {
    eyebrow: 'Capacitación incluida',
    title: 'Del curso al examen RBT',
    items: [
      { title: 'Curso RBT de 40 horas', body: 'Impartido internamente y cumple los requisitos de la BACB.' },
      { title: 'Evaluación de competencia', body: 'Con un evaluador de VTCC.' },
      { title: 'Preparación para el examen', body: 'Práctica antes de su examen en Pearson VUE.' },
    ],
  },
  perks: {
    eyebrow: 'Crecimiento',
    title: 'Apoyo después de empezar',
    items: [
      { title: 'Reconocimiento', body: 'Empleado del mes y Grounds for Greatness.' },
      { title: 'PDU mensuales', body: 'Aprendizaje continuo sobre habilidades y ética.' },
      { title: 'Certificación Safety-Care', body: 'Impartida internamente.' },
      { title: 'Espacio para crecer', body: 'Trayectoria hacia técnico de conducta líder.' },
      { title: 'Trabajo de campo mientras trabaja', body: 'Horas supervisadas para el BCBA en el programa para analistas en formación.' },
    ],
  },
  steps: {
    title: 'Tres pasos',
    id: 'hiring-process',
    items: [{ title: 'Postule' }, { title: 'Hablemos del puesto' }, { title: 'Capacitación clínica' }],
  },
  closing: {
    title: '¿Quiere enviar su solicitud?',
    body: 'Solo le tomará unos minutos.',
    buttonLabel: 'Solicitar empleo',
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
      summary: 'Brinda terapia ABA bajo la supervisión de un BCBA.',
      youWill: {
        title: 'El trabajo',
        items: [
          'Aplicar planes de tratamiento',
          'Recopilar datos de sesión',
          'Orientar a los cuidadores',
        ],
      },
      requirements: {
        title: 'Lo que usted aporta',
        items: ['Puntualidad y comunicación clara', 'Disposición para completar la capacitación RBT'],
      },
      applyLabel: 'Solicitar como técnico de conducta',
      applyRole: 'Behavior Technician (BT)',
      applyHref: '/career/apply',
    },
    bcba: {
      kicker: 'Liderazgo clínico',
      title: 'Analista de conducta certificado (BCBA)',
      meta: 'Puesto clínico de supervisión · Requiere licencia de Virginia',
      summary: 'Dirija evaluaciones, tratamiento y capacitación de cuidadores.',
      youWill: {
        title: 'El trabajo',
        items: [
          'Evaluar a los niños y redactar planes de tratamiento',
          'Supervisar a técnicos y revisar datos',
          'Capacitar a padres y cuidadores',
        ],
      },
      requirements: {
        title: 'Requisitos',
        items: [
          'Título de posgrado que cumpla los requisitos de la BACB',
          'Certificación BCBA vigente',
          'LBA de Virginia, o elegible para obtenerla',
        ],
      },
      applyLabel: 'Solicitar como BCBA',
      applyRole: 'Board Certified Behavior Analyst (BCBA)',
      applyHref: '/career/apply',
    },
  },
  otherOpenings: {
    title: 'Otras formas de postular',
    body: 'También recibimos interés en puestos de oficina y pasantías.',
  },
}

es.careerApplication = {
  title: 'Solicite unirse a nuestro equipo',
  intro:
    'Cuéntenos cómo contactarlo y qué puesto le interesa. VTCC recibirá su solicitud y se comunicará con usted.',
  resumeNoticeTitle: 'La carga del currículum se agregará pronto',
  resumeNotice:
    'Pronto podrá cargar su currículum en este formulario. Por ahora, envíe su currículum a {email}.',
  resumeEmail: 'recruiting@vtccmail.com',
  privacyTitle: '',
  privacyNote: '',
  selectPlaceholder: 'Seleccione una opción',
  submitLabel: 'Enviar solicitud',
  backLabel: 'Volver a Carreras',
  backHref: '/career',
  consentLabel: '',
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
        'Board Certified Behavior Analyst (BCBA)',
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
    'Apoyo de aula de Primeros Aprendices para niños de 3 a 5 años',
    'Apoyo de alimentación que empieza por lo básico a la hora de comer y puede incluir práctica en el hogar',
    'Enriquecimiento Social para niños de 3 a 5 años',
    'Grupo de Habilidades Sociales para niños de 2 años en adelante',
    'Capacitación Safety-Care® para familias y cuidadores',
  ],
})

es.trustStrip = [
  {
    title: 'Centrado en la familia',
    body: 'Planes de atención adaptados a las necesidades del niño y del cuidador',
  },
  {
    title: 'Respeto cultural',
    body: 'Apoyo para familias diversas del norte de Virginia',
  },
  {
    title: 'Pasos claros',
    body: 'Admisión, revisión de financiamiento, evaluación y planificación del tratamiento',
  },
  {
    title: 'Apoyo multilingüe',
    body: 'Intérpretes para cualquier idioma. Pregunte en la admisión.',
  },
]

Object.assign(es.sections.services, {
  eyebrow: 'Servicios',
  title: 'Cómo VTCC apoya a las familias',
  intro: '',
})

es.sections.services.cards = [
  {
    "id": "aba",
    "label": "Terapia ABA",
    "title": "Desarrolle habilidades significativas con un plan individualizado",
    "body": "El análisis aplicado de la conducta ayuda a los niños a desarrollar habilidades significativas mediante metas individualizadas, refuerzo positivo, entrenamiento para padres y seguimiento continuo del progreso.",
    "teaser": "Terapia individualizada que desarrolla la comunicación, la vida diaria y las habilidades sociales.",
    "ageRange": "Por lo general, de 18 meses a 21 años",
    "ageNote": "La intervención temprana suele comenzar antes de los 4 años. ABA también puede apoyar a niños en edad escolar y adolescentes cuando es clínicamente apropiado. La elegibilidad final depende de la evaluación, el financiamiento y la autorización.",
    "description": "La ABA parte de las fortalezas, las rutinas y las prioridades de cada familia. Un BCBA evalúa las habilidades actuales, escribe metas medibles y actualiza el plan a medida que el niño crece.",
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
      "El progreso se revisa con regularidad y las metas se actualizan con el tiempo."
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
    "title": "Prepárese para una transición exitosa a la escuela",
    "body": "Un día con estructura de aula para niños de 3 a 5 años que reciben servicios de ABA, de lunes a viernes, de 10:00 a.m. a 2:00 p.m.",
    "teaser": "Apoyo con estructura de aula para niños de 3 a 5 años, de lunes a viernes.",
    "blocks": [
      {
        "paragraphs": [
          "El programa de Primeros Aprendices está diseñado para preparar a los niños que reciben servicios de ABA para una transición exitosa a la escuela, mediante una rutina estructurada que refleja un entorno típico de aula. Nuestra meta es ayudar a los estudiantes a desarrollar independencia y a necesitar la menor cantidad de apoyo posible a medida que crecen.",
          "Este programa se ofrece de lunes a viernes, de 10:00 a.m. a 2:00 p.m. Los niños de 3 a 5 años participan en un horario diario con rotaciones de centros de 20 minutos, como juego simbólico, lectura, trabajo independiente, arte y manualidades, y una actividad dirigida por el docente. La actividad dirigida por el docente se enfoca en fortalecer las habilidades de atención, mientras que todos los centros ofrecen oportunidades para desarrollar habilidades de juego, creatividad y bases académicas tempranas.",
          "A lo largo del día, los niños también practican la interacción social con compañeros, aprendiendo a compartir, turnarse y participar en juego cooperativo. Este enfoque integral apoya tanto la preparación escolar como el desarrollo general.",
          "Como base del programa se utilizan estrategias de enseñanza del análisis aplicado de la conducta (ABA) para enseñar y reforzar estas habilidades fundamentales. Al integrar los principios de ABA durante todo el día, los niños reciben apoyo constante para desarrollar habilidades de comunicación, sociales y de autocuidado que favorecen el éxito a largo plazo."
        ]
      }
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
    "title": "Mejores momentos a la hora de comer empiezan por lo básico.",
    "body": "Un paso. Un bocado. Un éxito a la vez.",
    "teaser": "Un paso. Un bocado. Un éxito a la vez.",
    "blocks": [
      {
        "paragraphs": [
          "En VTCC creemos que cada niño, cada familia y cada cultura merece apoyo a la hora de comer.",
          "El éxito en la alimentación va más allá de simplemente probar alimentos nuevos. Acompañamos a cada niño desde donde se encuentra y construimos las habilidades fundamentales que hacen que las comidas sean más cómodas, positivas y exitosas.",
          "Empezamos con lo básico: llegar a la mesa, sentarse y permanecer en la mesa durante las comidas, y participar en rutinas simples a la hora de comer. A partir de ahí, desarrollamos gradualmente habilidades como alimentarse por sí mismo, mantener un ritmo adecuado durante la comida, tolerar los alimentos en el plato, explorar nuevas texturas y sabores, y aumentar la aceptación de alimentos nuevos y culturalmente familiares.",
          "Como el progreso significativo ocurre donde ocurre la vida cotidiana, nuestro apoyo puede extenderse más allá de la clínica y llegar al hogar de la familia. Trabajamos junto a los cuidadores durante comidas reales, ofreciendo orientación práctica y estrategias que pueden formar parte de las rutinas naturales de la familia.",
          "Cada niño. Cada familia. Cada cultura."
        ]
      }
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
    "title": "Desarrolle confianza social a través del juego",
    "body": "Un programa estructurado de aprendizaje social para niños de 3 a 5 años, dirigido por profesionales de la conducta con experiencia.",
    "teaser": "Juego guiado y habilidades de amistad para niños de 3 a 5 años.",
    "blocks": [
      {
        "paragraphs": [
          "El Grupo de Enriquecimiento de Habilidades Sociales es un programa estructurado de aprendizaje social para niños de 3 a 5 años, diseñado para promover la comunicación, la cooperación y las habilidades de amistad mediante el juego guiado y la interacción con compañeros.",
          "Los participantes realizan actividades apropiadas para su desarrollo que ayudan a fortalecer:"
        ],
        "items": [
          "Comunicación social",
          "Turnarse y compartir",
          "Juego cooperativo",
          "Seguir instrucciones del grupo",
          "Participación con compañeros",
          "Habilidades de participación en grupo"
        ]
      },
      {
        "paragraphs": [
          "Dirigido por profesionales de la conducta con experiencia, este programa de grupo pequeño ofrece a los niños oportunidades para practicar habilidades sociales en un entorno divertido, de apoyo y participativo."
        ]
      },
      {
        "title": "Cada sesión incluye",
        "items": [
          "Tiempo en círculo",
          "Juego guiado e interacción con compañeros",
          "Actividad STEAM (ciencia, tecnología, ingeniería, arte y matemáticas)"
        ]
      },
      {
        "title": "Información del programa",
        "items": [
          "Edades: 3 a 5 años",
          "Duración de la sesión: 60 minutos",
          "Ubicación: 10565 Fairfax Blvd, Suite 300, Fairfax, VA 22030",
          "Horario: una vez por semana durante 12 semanas. Contacte a VTCC para la próxima fecha de inicio.",
          "Matrícula del programa: $950.00, que puede dividirse en 3 pagos, uno cada dos semanas",
          "Cuota de inscripción (el seguro no la reembolsa): $250.00"
        ]
      },
      {
        "title": "Inscripción",
        "paragraphs": [
          "Todos los posibles participantes completan una breve revisión para confirmar que el programa es adecuado para sus necesidades sociales, de comunicación y de conducta actuales.",
          "Para obtener más información o comenzar la inscripción, llame al 703.218.6599. El cupo es limitado."
        ]
      }
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
    "title": "Desarrolle amistades, comunicación y confianza",
    "body": "Un grupo divertido y de apoyo donde los niños practican habilidades sociales mediante juego estructurado, juego de roles y trabajo en equipo.",
    "teaser": "Grupos de habilidades sociales para niños de 2 años en adelante.",
    "blocks": [
      {
        "paragraphs": [
          "Nuestro Grupo de Habilidades Sociales ofrece a los niños un entorno divertido y de apoyo para desarrollar amistades, mejorar la comunicación, fortalecer la confianza y afianzar las relaciones con compañeros. Mediante el juego estructurado, actividades interactivas, el juego de roles y el trabajo en equipo, los niños aprenden habilidades sociales esenciales mientras practican cómo interactuar de forma positiva con los demás.",
          "Cada grupo está diseñado para responder a las necesidades del desarrollo de los niños, con énfasis en habilidades como compartir, turnarse, expresar emociones, comprender señales sociales, resolver problemas y construir conexiones significativas."
        ]
      },
      {
        "title": "Level Up Crew (edades de 2 a 6 años)",
        "paragraphs": [
          "La base para hacer amistades.",
          "Se enfoca en desarrollar habilidades sociales tempranas mediante actividades lúdicas y prácticas, y la interacción guiada con compañeros."
        ],
        "items": [
          "Juego paralelo y cooperativo",
          "Compartir, turnarse y esperar",
          "Juego de roles sencillo y juegos de movimiento",
          "Identificar y expresar emociones",
          "Seguir rutinas de grupo e iniciar el juego"
        ]
      },
      {
        "title": "Quest Masters (edades de 6 a 8 años)",
        "paragraphs": [
          "¡Amistades que crecen y conexiones sociales más fuertes!",
          "Ayuda a los niños a ganar confianza en situaciones sociales mientras desarrollan comunicación, cooperación y habilidades de amistad."
        ],
        "items": [
          "Desafíos de trabajo en equipo y juegos cooperativos",
          "Iniciar y mantener conversaciones",
          "Juego de roles de situaciones sociales cotidianas",
          "Reconocer señales sociales y lenguaje corporal",
          "Practicar empatía, toma de perspectiva y resolución de problemas",
          "Aprender resolución de conflictos y deportividad"
        ]
      },
      {
        "title": "Legend League (edades de 8 años en adelante)",
        "paragraphs": [
          "Relaciones sociales sólidas y liderazgo con confianza.",
          "Fomenta un desarrollo social más avanzado mediante actividades colaborativas, conversaciones entre compañeros y la resolución de problemas sociales de la vida real."
        ],
        "items": [
          "Liderazgo y toma de decisiones en grupo",
          "Proyectos colaborativos y juegos estratégicos",
          "Orientarse en las amistades y las relaciones con compañeros",
          "Comprender señales sociales y límites en la conversación",
          "Manejar desacuerdos y situaciones sociales difíciles",
          "Expresar lo que necesita, con confianza e independencia"
        ]
      },
      {
        "title": "Nuestra misión",
        "paragraphs": [
          "Crear un espacio acogedor donde los niños puedan desarrollar amistades significativas, fortalecer sus habilidades sociales y ganar confianza para comunicarse, mientras aprenden, se conectan y se divierten."
        ]
      }
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
    "label": "Safety-Care® para Familias y Cuidadores",
    "title": "Gane confianza. Aprenda estrategias prácticas. Promueva la seguridad en casa.",
    "body": "¡Nos entusiasma anunciar que pronto habrá capacitación grupal Safety-Care® para padres y cuidadores!",
    "teaser": "La capacitación grupal Safety-Care® para padres y cuidadores estará disponible pronto.",
    "blocks": [
      {
        "paragraphs": [
          "Esta capacitación está diseñada para brindar a las familias estrategias prácticas y basadas en la evidencia para prevenir conductas desafiantes, reconocer las primeras señales de escalada, promover la seguridad y responder con confianza durante situaciones difíciles.",
          "Las capacitaciones grupales ofrecerán a los cuidadores la oportunidad de aprender junto a otras familias, practicar habilidades, hacer preguntas y ganar confianza usando estrategias conductuales proactivas y seguras en el hogar y en la comunidad."
        ]
      },
      {
        "title": "Los temas de la capacitación pueden incluir",
        "items": [
          "Reconocer las primeras señales de escalada",
          "Estrategias para prevenir la escalada y reducirla",
          "Apoyar la comunicación y la cooperación",
          "Responder de forma segura ante conductas desafiantes",
          "Crear un entorno en el hogar más seguro y de mayor apoyo",
          "Práctica guiada de las habilidades aplicables de Safety-Care®"
        ]
      },
      {
        "title": "¡Sesiones grupales próximamente!",
        "paragraphs": [
          "¿Le interesa asistir a un próximo grupo para cuidadores?",
          "Esté atento a las próximas fechas de capacitación, la información de inscripción y los requisitos de elegibilidad."
        ]
      }
    ],
    "related": [
      "aba",
      "early-learners",
      "social-enrichment",
      "social-skills"
    ],
    "linkLabel": "Conozca Safety-Care® para Familias y Cuidadores",
    "href": "/group-parent-training"
  }
].map((card) => ({
  ...card,
  image: en.sections.services.cards.find((enCard) => enCard.id === card.id)?.image,
}))

Object.assign(es.sections.process, {
  eyebrow: 'Cómo comenzar',
  title: 'Cómo iniciar servicios con VTCC',
  intro: 'Comenzar servicios puede resultar abrumador. Esto es lo que puede esperar, paso a paso.',
  formsLinkLabel: 'Descargar formularios de admisión',
  formsLinkHref: '/resources/forms',
})

es.sections.process.steps = [
  { title: 'Comuníquese', body: 'Contacte a VTCC por teléfono o mediante el formulario de solicitud.' },
  {
    title: 'Revise el financiamiento',
    body: 'Indíquenos qué servicio busca y cómo puede financiarse. VTCC revisa seguro, Medicaid, atención administrada, cobertura comercial o financiamiento del condado/FAPT según corresponda.',
  },
  { title: 'Complete la admisión', body: 'Envíe la documentación de admisión o referencia.' },
  {
    title: 'Programe la evaluación',
    body: 'Se programa una evaluación clínica o cita de admisión cuando el servicio es adecuado.',
  },
  {
    title: 'Elabore un plan',
    body: 'Se crea un plan de tratamiento individualizado.',
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
    'El análisis aplicado de la conducta utiliza técnicas y principios positivos para lograr cambios conductuales significativos y positivos.',
  topics: [
    {
      title: '¿Qué es el análisis aplicado de la conducta (ABA)?',
      paragraphs: [
        'La ABA es una terapia conductual que se utiliza para apoyar a niños con trastorno del espectro autista (TEA) y otras afecciones del desarrollo. Se centra en desarrollar gradualmente las habilidades sociales, de comunicación y de la vida diaria mediante refuerzo positivo.',
        'VTCC cuenta con especialistas en autismo en Virginia que utilizan un enfoque basado en evidencia para mejorar la capacidad funcional y social y la calidad de vida de los niños y las familias.',
      ],
    },
    {
      title: '¿Dónde se puede utilizar la ABA?',
      paragraphs: [
        'Estas técnicas pueden utilizarse en situaciones estructuradas como en el hogar, durante las comidas familiares o en un parque del vecindario.',
        'La mayoría de las sesiones de ABA implican interacción individual entre el terapeuta y el niño. La instrucción grupal también puede ser útil.',
      ],
    },
    {
      title: '¿Cómo se brinda la terapia ABA a niños con TEA o trastornos del desarrollo?',
      paragraphs: [
        'La terapia ABA ofrece programas integrales, individualizados e intensivos de intervención temprana para niños con autismo. Estas intervenciones están diseñadas para comenzar antes de los 4 años y abordan un amplio rango de habilidades para la vida, desde la comunicación y las habilidades sociales hasta el autocuidado y la preparación escolar.',
        'Los programas van de 9 a 40 horas por semana durante 1 a 3 años, según la recomendación clínica y la autorización.',
      ],
    },
    {
      title: '¿Qué tan eficaz es la ABA como enfoque?',
      paragraphs: [
        'La investigación y la literatura académica indican que la ABA es una de las herramientas más eficaces disponibles para ayudar a niños con TEA. Es un esfuerzo conjunto entre terapeutas y padres para estabilizar conductas asociadas con el TEA mediante el refuerzo de conductas positivas, el fortalecimiento de habilidades de comunicación y socialización, y el entrenamiento de los padres para comunicarse eficazmente con sus hijos.',
        'La ABA busca reducir síntomas, mejorar habilidades y capacidades, y maximizar la función y participación del niño en la comunidad. Es un enfoque ampliamente aceptado entre profesionales de la salud y se utiliza en todo el mundo.',
        'La ABA se adapta a las necesidades específicas del niño según el análisis del entorno familiar y físico y sus efectos en las conductas del niño. El enfoque de la ABA sigue centrado en mejorar las habilidades sociales y de comunicación y en capacitar a los padres para gestionar eficazmente las conductas asociadas con el TEA. La participación y una alianza sólida entre padres y terapeutas desempeñan un papel crucial para alcanzar los hitos.',
      ],
    },
    {
      title: '¿Cuál es el proceso para recibir servicios de ABA de VTCC?',
      items: [
        'Un Analista de conducta certificado (BCBA) evalúa al niño para determinar necesidades, definir metas de tratamiento e identificar hitos beneficiosos.',
        'Los padres proporcionan información adicional sobre las habilidades del niño y las áreas que le resultan difíciles.',
        'Según la evaluación, la revisión de informes y la aportación de los padres, el BCBA desarrolla el plan de tratamiento y establece metas iniciales y finales.',
        'Las metas aumentan incrementalmente las habilidades que el niño necesita aprender y le ayudan a funcionar lo mejor posible.',
        'Para disminuir conductas que interfieren, el BCBA desarrolla un plan de intervención conductual para el niño.',
        'Uno o más técnicos brindan tratamiento al niño bajo la supervisión y dirección del BCBA.',
        'El BCBA revisa el progreso en las metas del niño.',
      ],
    },
    {
      title: '¿Cuáles son algunas filosofías básicas de ABA que sigue VTCC?',
      items: [
        'El analista se reúne regularmente con familiares y personal del programa para planificar, revisar el progreso y hacer ajustes según sea necesario.',
        'Los padres y otros familiares y cuidadores reciben entrenamiento para apoyar el aprendizaje y la práctica de habilidades durante el día.',
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
        'En la mayoría de los casos, un terapeuta o técnico de conducta (BT) capacitado y supervisado por un BCBA brindará terapia directa a su hijo o hija.',
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
      'Metas conductuales y conductas de reemplazo más seguros',
    ],
  },
  {
    title: 'Cómo VTCC brinda ABA',
    items: [
      'Evaluación y planificación del tratamiento',
      'Supervisión del BCBA y seguimiento del progreso',
      'Terapia directa del personal capacitado según corresponda',
      'Entrenamiento para padres y colaboración con cuidadores',
    ],
  },
]

Object.assign(es.sections, {
  earlyLearners: {
    eyebrow: 'Programa de Primeros Aprendices',
    title: 'Prepárese para una transición exitosa a la escuela',
    intro:
      'El programa de Primeros Aprendices está diseñado para preparar a los niños que reciben servicios de ABA para una transición exitosa a la escuela, mediante una rutina estructurada que refleja un entorno típico de aula. Nuestra meta es ayudar a los estudiantes a desarrollar independencia y a necesitar la menor cantidad de apoyo posible a medida que crecen.',
    columns: [
      {
        title: 'Un día con estructura de aula',
        body: 'Este programa se ofrece de lunes a viernes, de 10:00 a.m. a 2:00 p.m. Los niños de 3 a 5 años participan en rotaciones de centros de 20 minutos. La actividad dirigida por el docente se enfoca en las habilidades de atención, y todos los centros apoyan el juego, la creatividad y las bases académicas tempranas.',
        items: [
          'Juego simbólico',
          'Lectura',
          'Trabajo independiente',
          'Arte y manualidades',
          'Actividad dirigida por el docente',
        ],
      },
      {
        title: 'Habilidades a lo largo del día',
        body: 'Los niños practican la interacción social con compañeros y reciben enseñanza de análisis aplicado de la conducta (ABA) durante todo el día. Las estrategias de ABA enseñan y refuerzan habilidades de comunicación, sociales y de autocuidado que apoyan el éxito a largo plazo.',
        items: [
          'Compartir, turnarse y juego cooperativo',
          'Habilidades de juego, creatividad y bases académicas tempranas',
          'Habilidades de comunicación, sociales y de autocuidado',
          'Independencia y preparación escolar',
        ],
      },
    ],
  },
  feedingProgram: {
    eyebrow: 'Programa de Alimentación',
    title: 'Mejores momentos a la hora de comer empiezan por lo básico.',
    intro:
      'El éxito en la alimentación va más allá de simplemente probar alimentos nuevos. El programa acompaña a cada niño desde donde se encuentra y construye las habilidades fundamentales que hacen que las comidas sean más cómodas, positivas y exitosas.',
    columns: [
      {
        title: 'Empezar con lo básico',
        body: 'El apoyo comienza por llegar a la mesa, sentarse y permanecer en la mesa durante las comidas, y participar en rutinas simples a la hora de comer.',
        items: [
          'Llegar a la mesa',
          'Sentarse y permanecer en la mesa',
          'Rutinas simples a la hora de comer',
        ],
      },
      {
        title: 'Avanzar desde ahí',
        body: 'A partir de esas bases, las habilidades crecen de forma gradual. Eso incluye alimentarse por sí mismo, el ritmo de la comida y la comodidad con los alimentos en el plato.',
        items: [
          'Alimentarse por sí mismo',
          'Ritmo adecuado durante la comida',
          'Tolerar los alimentos en el plato',
          'Explorar nuevas texturas y sabores',
          'Aceptar alimentos nuevos y culturalmente familiares',
        ],
      },
      {
        title: 'Apoyo en el hogar',
        body: 'El apoyo puede extenderse más allá de la clínica y llegar al hogar de la familia. El equipo trabaja junto a los cuidadores durante comidas reales, con orientación práctica y estrategias para las rutinas de la familia.',
      },
    ],
  },
  socialEnrichment: {
    eyebrow: 'Grupo de Enriquecimiento de Habilidades Sociales',
    title: 'Desarrolle confianza social a través del juego',
    intro:
      'El Grupo de Enriquecimiento de Habilidades Sociales es un programa estructurado de aprendizaje social para niños de 3 a 5 años, diseñado para promover la comunicación, la cooperación y las habilidades de amistad mediante el juego guiado y la interacción con compañeros. Dirigido por profesionales de la conducta con experiencia, este programa de grupo pequeño ofrece un espacio divertido y de apoyo para practicar.',
    columns: [
      {
        title: 'Lo que practican los niños',
        items: [
          'Comunicación social',
          'Turnarse y compartir',
          'Juego cooperativo',
          'Seguir instrucciones del grupo',
          'Participación con compañeros',
          'Habilidades de participación en grupo',
        ],
      },
      {
        title: 'Cada sesión incluye',
        items: [
          'Tiempo en círculo',
          'Juego guiado e interacción con compañeros',
          'Actividad STEAM (ciencia, tecnología, ingeniería, arte y matemáticas)',
        ],
      },
      {
        title: 'Información del programa',
        items: [
          'Edades: 3 a 5 años',
          'Duración de la sesión: 60 minutos',
          'Ubicación: 10565 Fairfax Blvd, Suite 300, Fairfax, VA 22030',
          'Horario: una vez por semana durante 12 semanas. Contacte a VTCC para la próxima fecha de inicio.',
          'Matrícula del programa: $950.00, que puede dividirse en 3 pagos, uno cada dos semanas',
          'Cuota de inscripción (el seguro no la reembolsa): $250.00',
        ],
      },
      {
        title: 'Inscripción',
        body: 'Todos los posibles participantes completan una breve revisión para confirmar que el programa es adecuado para sus necesidades sociales, de comunicación y de conducta actuales. Para obtener más información o comenzar la inscripción, llame al 703.218.6599. El cupo es limitado.',
      },
    ],
  },
  socialSkillsGroup: {
    eyebrow: 'Grupo de Habilidades Sociales',
    title: 'Desarrolle amistades, comunicación y confianza',
    intro:
      'Nuestro Grupo de Habilidades Sociales ofrece a los niños un entorno divertido y de apoyo para desarrollar amistades, mejorar la comunicación, fortalecer la confianza y afianzar las relaciones con compañeros. Mediante el juego estructurado, actividades interactivas, el juego de roles y el trabajo en equipo, los niños aprenden habilidades sociales esenciales mientras practican cómo interactuar de forma positiva con los demás. Cada grupo está diseñado para responder a las necesidades del desarrollo de los niños, con énfasis en habilidades como compartir, turnarse, expresar emociones, comprender señales sociales, resolver problemas y construir conexiones significativas.',
    columns: [
      {
        title: 'Level Up Crew (edades de 2 a 6 años)',
        body: 'La base para hacer amistades. Este nivel se enfoca en habilidades sociales tempranas mediante actividades lúdicas y prácticas, y la interacción guiada con compañeros.',
        items: [
          'Juego paralelo y cooperativo',
          'Compartir, turnarse y esperar',
          'Juego de roles sencillo y juegos de movimiento',
          'Identificar y expresar emociones',
          'Seguir rutinas de grupo e iniciar el juego',
        ],
      },
      {
        title: 'Quest Masters (edades de 6 a 8 años)',
        body: 'Amistades que crecen y conexiones sociales más fuertes. Los niños ganan confianza mientras desarrollan comunicación, cooperación y habilidades de amistad.',
        items: [
          'Desafíos de trabajo en equipo y juegos cooperativos',
          'Iniciar y mantener conversaciones',
          'Juego de roles de situaciones sociales cotidianas',
          'Reconocer señales sociales y lenguaje corporal',
          'Practicar empatía, toma de perspectiva y resolución de problemas',
          'Aprender resolución de conflictos y deportividad',
        ],
      },
      {
        title: 'Legend League (edades de 8 años en adelante)',
        body: 'Relaciones sociales sólidas y liderazgo con confianza. Este nivel usa actividades colaborativas, conversaciones entre compañeros y la resolución de problemas sociales de la vida real.',
        items: [
          'Liderazgo y toma de decisiones en grupo',
          'Proyectos colaborativos y juegos estratégicos',
          'Orientarse en las amistades y las relaciones con compañeros',
          'Comprender señales sociales y límites en la conversación',
          'Manejar desacuerdos y situaciones sociales difíciles',
          'Expresar lo que necesita, con confianza e independencia',
        ],
      },
      {
        title: 'Nuestra misión',
        body: 'Crear un espacio acogedor donde los niños puedan desarrollar amistades significativas, fortalecer sus habilidades sociales y ganar confianza para comunicarse, mientras aprenden, se conectan y se divierten.',
      },
    ],
  },
  groupParentTraining: {
    eyebrow: 'Safety-Care® para Familias y Cuidadores',
    title: 'Sesiones grupales próximamente',
    intro:
      'Nos entusiasma anunciar que pronto habrá capacitación grupal Safety-Care® para padres y cuidadores. Esta capacitación brinda a las familias estrategias prácticas y basadas en la evidencia para prevenir conductas desafiantes, reconocer las primeras señales de escalada, promover la seguridad y responder con confianza durante situaciones difíciles.',
    columns: [
      {
        title: 'Los temas de la capacitación pueden incluir',
        items: [
          'Reconocer las primeras señales de escalada',
          'Estrategias para prevenir la escalada y reducirla',
          'Apoyar la comunicación y la cooperación',
          'Responder de forma segura ante conductas desafiantes',
          'Crear un entorno en el hogar más seguro y de mayor apoyo',
          'Práctica guiada de las habilidades aplicables de Safety-Care®',
        ],
      },
      {
        title: '¡Sesiones grupales próximamente!',
        items: [
          'Aprender junto a otras familias, practicar habilidades y hacer preguntas',
          'Ganar confianza con estrategias proactivas y seguras en el hogar y en la comunidad',
          'Esté atento a las próximas fechas de capacitación, la información de inscripción y los requisitos de elegibilidad',
          'Gane confianza. Aprenda estrategias prácticas. Promueva la seguridad en casa.',
        ],
      },
    ],
  },
})

Object.assign(es.sections.funding, {
  eyebrow: 'Seguro y financiamiento',
  title: 'Ayuda con el seguro y el financiamiento',
  intro:
    'VTCC puede ayudar a las familias y a quienes refieren a entender las opciones de financiamiento más usadas para nuestros servicios.',
  note: 'VTCC acepta Medicaid, financiamiento del condado y seguro comercial. Contacte a VTCC para confirmar su plan y servicio específicos. La autorización sigue dependiendo del plan o de la agencia de financiamiento.',
  ctaLabel: 'Consultar seguro y financiamiento',
})

es.sections.funding.payers[9] = 'Financiamiento del condado/FAPT'

Object.assign(es.sections.referrers, {
  eyebrow: 'Para familias y profesionales que refieren',
  title: '¿Por dónde quiere empezar?',
})

es.sections.referrers.paths = [
  {
    title: 'Para familias',
    body: 'Conozca qué servicios pueden ser adecuados para su hijo o hija, qué documentación puede necesitarse y qué esperar durante la admisión.',
    buttonLabel: 'Comenzar como familia',
    buttonStyle: 'primary',
    buttonHref: '/contact',
  },
  {
    title: 'Para profesionales',
    body: 'Escuelas, médicos, administradores de casos, personal del condado y profesionales comunitarios pueden contactar a VTCC para preguntar sobre elegibilidad y requisitos de referencia.',
    buttonLabel: 'Iniciar una referencia',
    buttonStyle: 'secondary',
    buttonHref: '/contact/referral',
  },
]

Object.assign(es.sections.whoWeServe, {
  eyebrow: 'A quién atendemos',
  title: 'Apoyo para niños, adolescentes y familias',
  intro:
    'VTCC atiende a niños, adolescentes y familias en el norte de Virginia que pueden necesitar apoyo conductual, del desarrollo o de salud mental.',
  missionStatement: 'En VTCC entendemos que cada niño es único',
  items: [
    'Trastorno del espectro autista y necesidades del desarrollo',
    'Habilidades de comunicación, sociales, de la vida diaria o de preparación escolar',
    'Apoyo de Primeros Aprendices con estructura de aula para niños de 3 a 5 años',
    'Apoyo de alimentación que empieza con lo básico a la hora de comer y puede incluir práctica en el hogar',
    'Enriquecimiento Social para niños de 3 a 5 años',
    'Grupo de Habilidades Sociales para niños de 2 años en adelante',
    'Capacitación Safety-Care® para cuidadores, con sesiones grupales próximamente',
    'Referencias conectadas con Medicaid, atención administrada, seguro comercial o financiamiento del condado/FAPT',
  ],
})

Object.assign(es.sections.multiculturalCare, {
  eyebrow: 'Atención multicultural',
  title: 'Atención que respeta la cultura de cada familia',
  body: 'Cada familia aporta su propia cultura, idioma, historia y fortalezas. VTCC fue creado para apoyar a familias de diversos orígenes con respeto y colaboración. Nuestro objetivo es que los servicios sean comprensibles, acogedores y adaptados a las necesidades de cada familia.',
})

Object.assign(es.sections.about, {
  eyebrow: '',
  title: 'Habilidades esenciales. Grandes cambios en casa.',
  lede: 'VTCC ayuda a niños y familias a desarrollar habilidades fundamentales de comunicación, independencia y conexión social que se trasladan a las rutinas de cada día.',
  mission: {
    eyebrow: 'Nuestra misión',
    statement: 'Servir a comunidades diversas es el centro de nuestro trabajo.',
    body: 'Cada familia aporta su propia cultura, idioma, historia y fortalezas. Acompañamos a las familias en su idioma y su cultura, respetamos los valores de cada familia y hacemos que la atención sea comprensible y acogedora.',
  },
  story: {
    eyebrow: 'Nuestra historia',
    title: 'Habilidades fundamentales que aparecen en la vida diaria',
    paragraphs: [
      'Las familias llegan a VTCC porque quieren que la vida diaria se sienta más fácil: las comidas, vestirse, el juego y los ratos entre una actividad y otra.',
      'Enseñamos habilidades fundamentales que los niños pueden usar una y otra vez. Esas habilidades se generalizan de la clínica al hogar, la escuela y la comunidad.',
      'Las familias participan en todo el proceso. Juntos elegimos metas que importan en la vida real y practicamos hasta que el cambio se mantiene.',
    ],
  },
  pillars: {
    eyebrow: '',
    title: 'Habilidades que se llevan a la vida diaria',
    items: [
      {
        title: 'Comunicación',
        body: 'Pedir lo que necesitan en la mesa y que se les entienda.',
      },
      {
        title: 'Independencia',
        body: 'Vestirse, las comidas y las rutinas que las familias pueden compartir.',
      },
      {
        title: 'Conexión',
        body: 'Juego con hermanos y compañeros que se siente natural y en el que se sienten incluidos.',
      },
    ],
  },
  photoAlt: 'Clínicos de VTCC trabajando uno a uno con niños en la clínica',
  photoCaption: 'Clínicos practicando habilidades que se llevan a casa.',
  quotes: {
    eyebrow: '',
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
  title: 'Solicite servicios para su hijo o hija',
  intro:
    'Díganos cómo contactarlo y un poco sobre su hijo o hija. Un miembro del equipo de VTCC puede explicar los pasos de admisión, los formularios y la revisión de financiamiento.',
  callEyebrow: 'Llame a VTCC',
  callTitle: '¿Prefiere hablar con alguien?',
  callIntro:
    'Llame a nuestra oficina de Fairfax. Un miembro del equipo puede ayudar con servicios, trámites y próximos pasos.',
})

Object.assign(es.sections.contactReferral, {
  eyebrow: 'Para profesionales',
  title: 'Para médicos, personal escolar, trabajadores sociales y otros profesionales',
  intro: '',
  callEyebrow: 'Llame a VTCC',
  callTitle: '¿Necesita hablar de una referencia por teléfono?',
  callIntro:
    'Llame a nuestra oficina de Fairfax. Un miembro del equipo puede ayudar con elegibilidad, documentación requerida y próximos pasos.',
})

const familyFormNotices = {
  notice: '',
  consentLabel: '',
}

Object.assign(es.form, familyFormNotices, { submitLabel: 'Enviar solicitud' })
Object.assign(es.formFamily, familyFormNotices)
Object.assign(es.formReferral, {
  notice: '',
  consentLabel: '',
})

const legacyFormCopy = {
  'Parent/guardian or referrer name': 'Nombre del padre, la madre, el tutor o de quien refiere',
  Email: 'Correo electrónico',
  Phone: 'Teléfono',
  'Preferred contact method': 'Método de contacto preferido',
  Either: 'Cualquiera de los dos',
  "Child's age": 'Edad del niño o de la niña',
  'Service interest': 'Servicio de interés',
  'Early Learners': 'Primeros Aprendices',
  'Feeding Program': 'Programa de Alimentación',
  'Social Enrichment': 'Enriquecimiento Social',
  'Social Skills Group': 'Grupo de Habilidades Sociales',
  'Safety-Care® for Families & Caregivers': 'Safety-Care® para Familias y Cuidadores',
  'Not sure': 'No lo sé',
  'Funding source': 'Fuente de financiamiento',
  'County/FAPT': 'Condado/FAPT',
  'Is this with Medicaid?': '¿Es con Medicaid?',
  Yes: 'Sí',
  No: 'No',
  Select: 'Seleccione',
  'City or county': 'Ciudad o condado',
  'Short non-sensitive message': 'Mensaje breve, sin datos clínicos',
}

function translateLegacyForm(value) {
  if (typeof value === 'string') {
    return legacyFormCopy[value] ?? value
  }
  if (Array.isArray(value)) {
    return value.map(translateLegacyForm)
  }
  if (value && typeof value === 'object') {
    return Object.fromEntries(
      Object.entries(value).map(([key, item]) => [key, translateLegacyForm(item)]),
    )
  }
  return value
}

es.form.fields = translateLegacyForm(en.form.fields)

es.offices = [
  {
    name: 'Oficina de Fairfax',
    street: '10565 Fairfax Boulevard, Suite 300',
    city: 'Fairfax, VA 22030',
    phone: '703.218.6599',
    phoneHref: 'tel:17032186599',
    fax: '703.891.7167',
    addressHref:
      'https://www.google.com/maps/search/?api=1&query=10565+Fairfax+Blvd+Ste+300,+Fairfax,+VA+22030',
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
    'Esta página ofrece información general sobre nuestros servicios. No es un diagnóstico, un plan de tratamiento ni consejo médico, y no crea una relación entre proveedor y cliente. Cada niño es diferente y los resultados varían. La elegibilidad y la cobertura dependen de una evaluación, de las necesidades de su hijo o hija y de la aprobación de Medicaid, su plan de salud o el equipo CSA/FAPT de su condado. Si usted o su hijo o hija están en peligro, llame al 911. Si tiene una crisis de salud mental, llame o envíe un mensaje de texto al 988.',
})
es.legal.pages.privacy.title = 'Política de privacidad del sitio web'
es.legal.pages.terms.title = 'Términos de uso del sitio web'
es.legal.pages.accessibility.title = 'Declaración de accesibilidad'
es.legal.pages.nondiscrimination.title = 'Aviso de no discriminación y asistencia con idiomas'
es.legal.pages.npp.title = 'Aviso de prácticas de privacidad'
es.legal.pages.npp.documentLinkLabel = 'Lea nuestro Aviso de prácticas de privacidad (PDF, en inglés)'

for (const page of Object.values(es.legal.pages)) {
  if (page && page.updated === 'October 7, 2026') {
    page.updated = '7 de octubre de 2026'
  }
}

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
    title: 'Guías y preguntas frecuentes',
    intro:
      'Explore temas comunes sobre admisión, financiamiento, terapia ABA, programas especializados y referencias.',
    linkLabel: 'Ver preguntas y guías',
    linkHref: '/resources',
  },
})

es.pages = {
  abaTherapy: {
    title: 'Página de Terapia ABA',
    hero: {
      headline: 'Terapia ABA diseñada en torno a cada niño',
      body: 'El análisis aplicado de la conducta es un enfoque basado en evidencia que utiliza estrategias positivas para ayudar a los niños a desarrollar habilidades significativas. VTCC crea planes ABA individualizados según la evaluación, la aportación familiar y las fortalezas y necesidades de cada niño.',
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
          'Un Analista de conducta certificado (BCBA) revisa las necesidades del niño.',
          'La familia comparte información sobre fortalezas, desafíos, rutinas y prioridades.',
          'El BCBA crea metas de tratamiento y un plan de apoyo conductual cuando corresponda.',
          'Técnicos de conducta o terapeutas pueden brindar servicios directos bajo supervisión del BCBA.',
          'Los padres y cuidadores reciben orientación para practicar habilidades en las rutinas diarias.',
          'Se revisa el progreso y se actualizan los planes a medida que el niño crece.',
        ],
      },
      {
        title: 'Entrenamiento para padres',
        body: 'Los padres y cuidadores son parte esencial en la terapia ABA. VTCC apoya a las familias con estrategias que pueden usar durante rutinas diarias, transiciones, momentos de comunicación y situaciones difíciles.',
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
      headline: 'Prepárese para una transición exitosa a la escuela',
      body: 'El programa de Primeros Aprendices prepara a los niños que reciben servicios de ABA para la escuela con una rutina estructurada que refleja un aula típica. La meta es ayudar a los estudiantes a desarrollar independencia y a necesitar la menor cantidad de apoyo posible a medida que crecen. El programa se ofrece de lunes a viernes, de 10:00 a.m. a 2:00 p.m., para niños de 3 a 5 años.',
      buttons: ['Solicitar servicios de Primeros Aprendices', 'Preguntar sobre elegibilidad'],
    },
    sections: [
      {
        title: 'Un día con estructura de aula',
        intro:
          'Los niños participan en rotaciones de centros de 20 minutos. La actividad dirigida por el docente se enfoca en las habilidades de atención, y todos los centros apoyan el juego, la creatividad y las bases académicas tempranas.',
        items: [
          'Juego simbólico',
          'Lectura',
          'Trabajo independiente',
          'Arte y manualidades',
          'Actividad dirigida por el docente',
        ],
      },
      {
        title: 'Habilidades a lo largo del día',
        body: 'Los niños practican compartir, turnarse y el juego cooperativo con compañeros. Las estrategias de enseñanza del análisis aplicado de la conducta (ABA) se usan durante todo el día para enseñar y reforzar habilidades de comunicación, sociales y de autocuidado.',
      },
    ],
    cta: {
      body: 'Contacte a VTCC para preguntar si el programa de Primeros Aprendices puede ser adecuado para su hijo o hija y conocer los próximos pasos de admisión.',
      button: 'Preguntar sobre Primeros Aprendices',
    },
  },
  feedingProgram: {
    title: 'Página del Programa de Alimentación',
    hero: {
      headline: 'Mejores momentos a la hora de comer empiezan por lo básico',
      body: 'El éxito en la alimentación va más allá de simplemente probar alimentos nuevos. El programa acompaña a cada niño desde donde se encuentra y construye las habilidades fundamentales que hacen que las comidas sean más cómodas, positivas y exitosas.',
      buttons: ['Solicitar servicios de alimentación', 'Preguntar sobre elegibilidad'],
    },
    sections: [
      {
        title: 'Empezar con lo básico',
        intro:
          'El apoyo comienza por llegar a la mesa, sentarse y permanecer en la mesa durante las comidas, y participar en rutinas simples a la hora de comer.',
        items: [
          'Llegar a la mesa',
          'Sentarse y permanecer en la mesa',
          'Rutinas simples a la hora de comer',
        ],
      },
      {
        title: 'Avanzar desde ahí',
        intro: 'A partir de esas bases, las habilidades crecen de forma gradual.',
        items: [
          'Alimentarse por sí mismo',
          'Ritmo adecuado durante la comida',
          'Tolerar los alimentos en el plato',
          'Explorar nuevas texturas y sabores',
          'Aceptar alimentos nuevos y culturalmente familiares',
        ],
      },
      {
        title: 'Apoyo en el hogar',
        body: 'El apoyo puede extenderse más allá de la clínica y llegar al hogar de la familia. El equipo trabaja junto a los cuidadores durante comidas reales, con orientación práctica y estrategias para las rutinas de la familia.',
      },
    ],
    cta: {
      body: 'Contacte a VTCC para preguntar si el Programa de Alimentación puede ser apropiado para su hijo o hija y conocer el proceso de admisión.',
      button: 'Preguntar sobre el Programa de Alimentación',
    },
  },
  socialEnrichment: {
    title: 'Página de Enriquecimiento Social',
    hero: {
      headline: 'Desarrolle confianza social a través del juego',
      body: 'El Grupo de Enriquecimiento de Habilidades Sociales es un programa estructurado de aprendizaje social para niños de 3 a 5 años. Dirigido por profesionales de la conducta con experiencia, promueve la comunicación, la cooperación y las habilidades de amistad mediante el juego guiado y la interacción con compañeros.',
      buttons: ['Solicitar servicios de Enriquecimiento Social', 'Preguntar sobre elegibilidad'],
    },
    sections: [
      {
        title: 'Lo que practican los niños',
        intro:
          'Los participantes realizan actividades apropiadas para su desarrollo que fortalecen la comunicación social, la cooperación y las habilidades de amistad.',
        items: [
          'Comunicación social',
          'Turnarse y compartir',
          'Juego cooperativo',
          'Seguir instrucciones del grupo',
          'Participación con compañeros',
          'Habilidades de participación en grupo',
        ],
      },
      {
        title: 'Cada sesión incluye',
        intro:
          'Las sesiones duran 60 minutos y se reúnen una vez por semana durante 12 semanas en 10565 Fairfax Blvd, Suite 300, Fairfax, VA 22030.',
        items: [
          'Tiempo en círculo',
          'Juego guiado e interacción con compañeros',
          'Actividad STEAM (ciencia, tecnología, ingeniería, arte y matemáticas)',
        ],
      },
      {
        title: 'Información del programa',
        items: [
          'Edades: 3 a 5 años',
          'Duración de la sesión: 60 minutos',
          'Horario: una vez por semana durante 12 semanas. Contacte a VTCC para la próxima fecha de inicio.',
          'Matrícula del programa: $950.00, que puede dividirse en 3 pagos, uno cada dos semanas',
          'Cuota de inscripción (el seguro no la reembolsa): $250.00',
        ],
      },
      {
        title: 'Inscripción',
        body: 'Todos los posibles participantes completan una breve revisión para confirmar que el programa es adecuado. Para obtener más información o comenzar la inscripción, llame al 703.218.6599. El cupo es limitado.',
      },
    ],
    cta: {
      body: 'Contacte a VTCC para preguntar si el Enriquecimiento Social puede ser adecuado para su hijo o hija y conocer la próxima fecha de inicio.',
      button: 'Preguntar sobre Enriquecimiento Social',
    },
  },
  socialSkillsGroup: {
    title: 'Página del Grupo de Habilidades Sociales',
    hero: {
      headline: 'Desarrolle amistades, comunicación y confianza',
      body: 'Nuestro Grupo de Habilidades Sociales ofrece a los niños un entorno divertido y de apoyo para desarrollar amistades, mejorar la comunicación, fortalecer la confianza y afianzar las relaciones con compañeros mediante el juego estructurado, el juego de roles y el trabajo en equipo.',
      buttons: ['Solicitar servicios del grupo social', 'Preguntar sobre elegibilidad'],
    },
    sections: [
      {
        title: 'Level Up Crew (edades de 2 a 6 años)',
        intro:
          'La base para hacer amistades, con actividades lúdicas y prácticas, y la interacción guiada con compañeros.',
        items: [
          'Juego paralelo y cooperativo',
          'Compartir, turnarse y esperar',
          'Juego de roles sencillo y juegos de movimiento',
          'Identificar y expresar emociones',
          'Seguir rutinas de grupo e iniciar el juego',
        ],
      },
      {
        title: 'Quest Masters (edades de 6 a 8 años)',
        intro:
          'Amistades que crecen y conexiones sociales más fuertes, mientras los niños desarrollan comunicación, cooperación y habilidades de amistad.',
        items: [
          'Desafíos de trabajo en equipo y juegos cooperativos',
          'Iniciar y mantener conversaciones',
          'Juego de roles de situaciones sociales cotidianas',
          'Reconocer señales sociales y lenguaje corporal',
          'Practicar empatía, toma de perspectiva y resolución de problemas',
          'Aprender resolución de conflictos y deportividad',
        ],
      },
      {
        title: 'Legend League (edades de 8 años en adelante)',
        intro:
          'Relaciones sociales sólidas y liderazgo con confianza, mediante actividades colaborativas, conversaciones entre compañeros y la resolución de problemas sociales de la vida real.',
        items: [
          'Liderazgo y toma de decisiones en grupo',
          'Proyectos colaborativos y juegos estratégicos',
          'Orientarse en las amistades y las relaciones con compañeros',
          'Comprender señales sociales y límites en la conversación',
          'Manejar desacuerdos y situaciones sociales difíciles',
          'Expresar lo que necesita, con confianza e independencia',
        ],
      },
      {
        title: 'Nuestra misión',
        body: 'Crear un espacio acogedor donde los niños puedan desarrollar amistades significativas, fortalecer sus habilidades sociales y ganar confianza para comunicarse, mientras aprenden, se conectan y se divierten.',
      },
    ],
    cta: {
      body: 'Contacte a VTCC para preguntar si el Grupo de Habilidades Sociales puede ser adecuado para su hijo o hija y conocer la disponibilidad actual.',
      button: 'Preguntar sobre el Grupo de Habilidades Sociales',
    },
  },
  groupParentTraining: {
    title: 'Safety-Care® para Familias y Cuidadores',
    hero: {
      headline: 'Safety-Care® para Familias y Cuidadores — Próximamente',
      body: 'Nos entusiasma anunciar que pronto habrá capacitación grupal Safety-Care® para padres y cuidadores. Esta capacitación brinda a las familias estrategias prácticas y basadas en la evidencia para prevenir conductas desafiantes, reconocer las primeras señales de escalada, promover la seguridad y responder con confianza durante situaciones difíciles.',
      buttons: ['Solicitar servicios', 'Preguntar sobre elegibilidad'],
    },
    sections: [
      {
        title: 'Los temas de la capacitación pueden incluir',
        intro:
          'Las capacitaciones grupales ofrecerán a los cuidadores la oportunidad de aprender junto a otras familias, practicar habilidades, hacer preguntas y ganar confianza usando estrategias conductuales proactivas y seguras en el hogar y en la comunidad.',
        items: [
          'Reconocer las primeras señales de escalada',
          'Estrategias para prevenir la escalada y reducirla',
          'Apoyar la comunicación y la cooperación',
          'Responder de forma segura ante conductas desafiantes',
          'Crear un entorno en el hogar más seguro y de mayor apoyo',
          'Práctica guiada de las habilidades aplicables de Safety-Care®',
        ],
      },
      {
        title: '¡Sesiones grupales próximamente!',
        body: '¿Le interesa asistir a un próximo grupo para cuidadores? Esté atento a las próximas fechas de capacitación, la información de inscripción y los requisitos de elegibilidad. Gane confianza. Aprenda estrategias prácticas. Promueva la seguridad en casa.',
      },
    ],
    cta: {
      body: 'Esté atento a las próximas fechas de capacitación, la información de inscripción y los requisitos de elegibilidad.',
      button: 'Preguntar sobre la capacitación Safety-Care®',
    },
  },
  insuranceFunding: {
    title: 'Página de Seguro y Financiamiento',
    hero: {
      headline: 'Orientación sobre seguro y financiamiento',
      body: 'Entender la cobertura puede resultar confuso. VTCC ayuda a familias y profesionales que refieren a revisar las opciones de financiamiento disponibles e identificar qué información puede necesitarse antes de comenzar los servicios.',
    },
    sections: [
      {
        title: 'Opciones de financiamiento',
        body: 'VTCC acepta Medicaid, financiamiento del condado y seguro comercial. Contacte a VTCC para confirmar su plan y servicio específicos. La autorización sigue dependiendo del plan o de la agencia de financiamiento.',
      },
      {
        title: 'Proceso de verificación',
        intro: 'Las familias pueden ayudar preparando:',
        items: [
          'Nombre completo y fecha de nacimiento del niño o de la niña',
          'Información de contacto del padre, la madre o el tutor',
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
      body: 'VTCC recibe referencias apropiadas de familias, escuelas, pediatras, terapeutas, administradores de casos, personal del condado y profesionales comunitarios.',
    },
    sections: [
      {
        title: 'Información de referencia a incluir',
        intro: 'Para ayudar a VTCC a responder con eficiencia, se puede solicitar a quienes refieren:',
        items: [
          'Nombre y edad del niño, de la niña o del adolescente',
          'Información de contacto del padre, la madre o el tutor',
          'Servicio solicitado',
          'Motivo de la referencia',
          'Fuente de financiamiento o información del seguro',
          'Documentación de referencia relevante',
          'Urgencia o preocupaciones de seguridad, si corresponde',
        ],
        note: 'No envíe documentos confidenciales a través de un formulario o correo electrónico no seguro a menos que VTCC haya proporcionado un método seguro aprobado.',
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
      headline: 'Recursos para familias y profesionales que refieren',
      body: 'VTCC ofrece recursos educativos para ayudar a las familias a entender la terapia ABA, el programa de Primeros Aprendices, el Programa de Alimentación, el Enriquecimiento Social, el Grupo de Habilidades Sociales, Safety-Care® para Familias y Cuidadores, la participación de los padres, los pasos de admisión y las preguntas sobre financiamiento.',
    },
    faqs: [
      {
        question: '¿Qué servicios brinda VTCC?',
        answer:
          'VTCC brinda terapia ABA, un programa de Primeros Aprendices para edades de 3 a 5 años, un Programa de Alimentación, Enriquecimiento Social para edades de 3 a 5 años, un Grupo de Habilidades Sociales para niños de 2 años en adelante y capacitación Safety-Care® para familias y cuidadores. Los servicios dependen de la elegibilidad, el financiamiento, la necesidad clínica y la disponibilidad.',
      },
      {
        question: '¿Qué es el programa de Primeros Aprendices?',
        answer:
          'El programa de Primeros Aprendices prepara a niños de 3 a 5 años que reciben servicios de ABA para la escuela. Se ofrece de lunes a viernes, de 10:00 a.m. a 2:00 p.m., con una rutina de aula y rotaciones de centros de 20 minutos.',
      },
      {
        question: '¿Qué apoya el Programa de Alimentación?',
        answer:
          'El programa acompaña a cada niño desde donde se encuentra. Empieza por llegar a la mesa, sentarse y permanecer durante las comidas, y rutinas simples a la hora de comer. A partir de ahí desarrolla gradualmente la autoalimentación, el ritmo de la comida, la comodidad con los alimentos en el plato, nuevas texturas y sabores, y la aceptación de alimentos nuevos y culturalmente familiares. El apoyo puede continuar durante las comidas en el hogar.',
      },
      {
        question: '¿Qué es el Enriquecimiento Social?',
        answer:
          'El Enriquecimiento Social es un programa de grupo pequeño para niños de 3 a 5 años. Las sesiones duran 60 minutos, una vez por semana durante 12 semanas, e incluyen tiempo en círculo, juego guiado y una actividad STEAM.',
      },
      {
        question: '¿Quién puede beneficiarse del Grupo de Habilidades Sociales?',
        answer:
          'El Grupo de Habilidades Sociales es para niños de 2 años en adelante. Level Up Crew es para edades de 2 a 6 años, Quest Masters para edades de 6 a 8 años y Legend League para edades de 8 años en adelante. Cada nivel se enfoca en amistades, comunicación y confianza.',
      },
      {
        question: '¿Qué es Safety-Care® para Familias y Cuidadores?',
        answer:
          'Safety-Care® para Familias y Cuidadores es una capacitación grupal para padres y cuidadores, y las sesiones grupales estarán disponibles pronto. La capacitación enseña estrategias prácticas y basadas en la evidencia para prevenir conductas desafiantes, reconocer las primeras señales de escalada, promover la seguridad y responder con confianza durante situaciones difíciles.',
      },
      {
        question: '¿Dónde brinda servicios VTCC?',
        answer:
          'La oficina de VTCC está en 10565 Fairfax Blvd, Suite 300, Fairfax, y atiende a familias en el norte de Virginia. El Enriquecimiento Social se reúne en esa clínica. Las técnicas de ABA pueden usarse en el hogar, durante las comidas familiares y en la comunidad, como en un parque del vecindario. El apoyo de alimentación también puede darse durante las comidas en el hogar. Llame para confirmar si podemos atender su ciudad o condado y dónde se brinda cada servicio.',
      },
      {
        question: '¿VTCC acepta seguros?',
        answer:
          'Sí. VTCC acepta Medicaid, financiamiento del condado y seguro comercial. Contacte a VTCC para confirmar su plan y servicio específicos.',
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
          'Sí. Escuelas, médicos, administradores de casos, personal del condado y otros profesionales pueden contactar a VTCC para preguntar sobre los requisitos de referencia.',
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
  assistanceEmail: 'intake@vtccmail.com',
  assistanceText: '¿Necesita ayuda? Llame al {phone} o escriba a {email}.',
  privacyNotice: '',
  insuranceTitle: 'Seguro y financiamiento',
  insuranceBody:
    'VTCC acepta Medicaid, financiamiento del condado y seguro comercial. Llame a VTCC para confirmar su plan, o contacte a su plan o a la oficina local de Medicaid para verificar la cobertura de su hijo o hija.',
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
        { id: 'clientRightsEnglish', title: 'Es su derecho (inglés)' },
        { id: 'clientRightsSpanish', title: 'Es su derecho (español)' },
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
      'Safety-Care® para Familias y Cuidadores',
      'Aún no lo sé',
    ]
  }
}

es.contactQuiz = JSON.parse(JSON.stringify(en.contactQuiz))
Object.assign(es.contactQuiz, {
  eyebrow: 'Contacto',
  title: 'Encuentre el siguiente paso correcto',
  intro:
    'Unas preguntas. Abriremos el formulario adecuado. No es una decisión clínica.',
  callEyebrow: 'Llame a VTCC',
  callTitle: '¿Prefiere hablar con alguien?',
  callIntro:
    'Llame a nuestra oficina de Fairfax. Un miembro del equipo puede ayudar con servicios, referencias, empleo y próximos pasos.',
  selectPlaceholder: 'Seleccione una opción',
  multiSelectPlaceholder: 'Seleccione todas las que correspondan',
  multiSelectSelected: '{count} opciones seleccionadas',
  yesLabel: 'Sí',
  noLabel: 'No',
  notSureLabel: 'No lo sé',
  closeLabel: 'Cerrar',
  backLabel: 'Atrás',
  continueLabel: 'Continuar',
  skipToRequestLabel: 'Ir al formulario de solicitud',
  skipToReferralLabel: 'Ir al formulario de referencia',
  skipToApplicationLabel: 'Ir a la solicitud',
  progressLabel: 'Pregunta {n} de {total}',
  progressAriaLabel: 'Progreso del cuestionario',
  callPrompt: '¿Prefiere hablar?',
  ageSuffix: 'años',
  ageHelp: 'Indique la edad de su hijo o hija en años cumplidos.',
  skipLinkPrompt: '¿Escuela, administrador de casos u otro profesional?',
  skipLinkLabel: 'Iniciar una referencia',
  disclaimer: '',
  doctorMessage: 'Me gustaría iniciar una referencia.',
})
es.contactQuiz.roleQuestion.label = 'Soy…'
es.contactQuiz.roleQuestion.options = [
  { id: 'parent', label: 'Padre, madre o tutor' },
  { id: 'doctor', label: 'Médico' },
  { id: 'applicant', label: 'Solicitante de empleo' },
]
es.contactQuiz.parentDiagnosisQuestion.label = '¿Tiene un diagnóstico del médico de su hijo o hija?'
es.contactQuiz.parentAgeQuestion.label = '¿Qué edad tiene su hijo o hija?'
es.contactQuiz.parent18MonthsQuestion.label = '¿Su hijo o hija tiene al menos 18 meses?'
es.contactQuiz.parentFeedingQuestion.label =
  '¿Su hijo o hija tiene rigidez con la comida o dificultad para alimentarse lo suficiente?'
es.contactQuiz.parentSocialQuestion.label =
  '¿Su hijo o hija necesita apoyo con las habilidades sociales en grupo?'
es.contactQuiz.parentClassroomQuestion.label =
  '¿Su hijo o hija está listo o lista para el aula del programa de Primeros Aprendices?'
es.contactQuiz.doctorDiagnosisQuestion.label = '¿Tiene la referencia y el diagnóstico?'
es.contactQuiz.cdeQuestion = { label: '¿Tiene la CDE?' }
es.contactQuiz.applicantCredentialsQuestion.label = '¿Qué preparación tiene?'
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
      { id: 'rbt', label: 'Técnico de conducta registrado (RBT)' },
      { id: 'qbt', label: 'Técnico de conducta calificado (QBT)' },
      { id: 'bcaba', label: 'Analista de conducta asistente certificado (BCaBA)' },
      { id: 'bcba', label: 'Analista de conducta certificado (BCBA)' },
      { id: 'bcba-d', label: 'Analista de conducta certificado, nivel doctoral (BCBA-D)' },
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
  'not-sure': 'Aún no lo sé',
}
es.contactQuiz.programLabels = {
  aba: 'Terapia ABA',
  'early-learners': 'Primeros Aprendices',
  feeding: 'Programa de Alimentación',
  'social-enrichment': 'Enriquecimiento Social',
  'social-skills': 'Grupo de Habilidades Sociales',
}
es.contactQuiz.referralRoleValue = 'Médico o personal de enfermería'
es.contactQuiz.careerRoles = {
  bcba: 'Analista de conducta certificado (BCBA)',
  bcaba: 'Otro',
  masters: 'Programa para analistas en formación',
  rbt: 'Técnico de conducta registrado (RBT)',
  bt: 'Técnico de conducta (BT)',
}
es.contactQuiz.roleReasons = {
  bcba: 'Su credencial de BCBA es la mejor coincidencia para la solicitud de analista de conducta certificado.',
  bcaba:
    'VTCC no tiene un puesto aparte para BCaBA. Solicite en Otro y mencione su credencial de BCaBA.',
  masters: 'Una maestría afín encaja bien con el Programa para analistas en formación.',
  rbt: 'Su credencial de RBT o QBT coincide con el puesto de técnico de conducta registrado.',
  bt: 'El puesto de técnico de conducta suele ser el punto de partida con esta formación.',
}
Object.assign(es.contactQuiz.parentNoDiagnosis, {
  title: 'Un diagnóstico ayuda, y aún puede contactar a VTCC',
  intro:
    'Un diagnóstico del médico de su hijo o hija suele ser necesario para el financiamiento y la elegibilidad. No tiene que esperar para preguntar por los próximos pasos.',
  steps: [
    'Hable con el pediatra de su hijo o hija sobre una evaluación del desarrollo.',
    'Pregunte si corresponde una referencia a un especialista.',
    'Llame a VTCC o continúe al formulario de solicitud. No incluya informes de diagnóstico en el formulario.',
  ],
  resultTitle: 'Pida ayuda con los próximos pasos',
  resultBody:
    'Envíe una solicitud sin información confidencial para que un miembro del equipo explique la evaluación, la admisión y la revisión de financiamiento.',
  ctaLabel: 'Continuar al formulario de solicitud de servicios',
  modalCtaLabel: 'Ver el formulario de solicitud',
})
Object.assign(es.contactQuiz.parentResult, {
  title: 'Programas que pueden ser una buena opción',
  body: 'Según la edad de su hijo o hija y lo que compartió, estos programas pueden valer la pena comentarlos con VTCC.',
  abaNote:
    'La terapia ABA suele ser la base. Los programas especializados se pueden sumar cuando sean adecuados.',
  outsideAgeTitle: 'Aún podemos ayudarle a encontrar un camino',
  outsideAgeBody:
    'La edad de su hijo o hija está fuera del rango típico publicado para los programas de VTCC. Aún puede enviar una solicitud para que el equipo le oriente.',
  onlyAbaTitle: 'Ya puede comenzar con ABA',
  onlyAbaBody:
    'La terapia ABA es un buen siguiente paso para su familia. Suele estar disponible de los 18 meses a los 21 años cuando es clínicamente apropiado.',
  ctaLabel: 'Continuar al formulario de solicitud de servicios',
})
es.contactQuiz.parentMessages = {
  noDiagnosis: 'Me gustaría recibir orientación sobre los próximos pasos para los servicios.',
  programs: 'Me interesa {programs}.',
  outsideAge: 'La edad de mi hijo o hija está fuera del rango habitual de los programas, y me gustaría orientación sobre los próximos pasos.',
}
Object.assign(es.contactQuiz.doctorYes, {
  title: 'Cómo enviar una referencia',
  intro:
    'No adjunte informes de diagnóstico, IEP ni registros de salud.',
  steps: [
    { title: 'Envíe el formulario de referencia', body: '' },
    { title: 'Le explicamos cómo enviar los documentos', body: '' },
    { title: 'Envíe los registros por el proceso seguro de VTCC', body: '' },
    { title: 'Revisamos el financiamiento y los próximos pasos', body: '' },
  ],
  notice: '',
  ctaLabel: 'Continuar al formulario de referencia',
})
Object.assign(es.contactQuiz.doctorNo, {
  title: 'Lo que suele incluir una referencia completa',
  intro: 'Aún puede enviar una consulta. Estos datos ayudan a que VTCC le responda más pronto.',
  items: [
    'Edad del niño o de la niña',
    'Información de contacto del padre, madre o tutor',
    'Servicio solicitado',
    'Fuente de financiamiento, si se conoce',
    'Documentos de referencia y diagnóstico a través del proceso seguro aprobado por VTCC, no en este formulario',
  ],
  ctaLabel: 'Continuar al formulario de referencia',
})
Object.assign(es.contactQuiz.applicantResult, {
  title: 'Un puesto acorde con su preparación',
  body: 'Esta es una sugerencia inicial. Puede cambiar el puesto en el formulario de solicitud.',
  ctaLabel: 'Continuar a la solicitud',
  experienceLabel: 'Experiencia del cuestionario de contacto',
})

const intakeCategory = es.sections.resources.categories.find(
  (category) => category.slug === 'what-to-expect-during-intake',
)
if (intakeCategory) {
  const formsFaq = intakeCategory.faqs.find((faq) => /\bforms?\b/i.test(faq.question))
  if (formsFaq) {
    formsFaq.answer =
      'La página de Formularios indica qué descargar, imprimir y devolver a VTCC antes de la cita de admisión: el formulario de admisión de VTCC para servicios ABA y cuestionario para fuentes de referencia, el cuestionario para fuentes de referencia de visitas supervisadas y/o servicios FAPT, y el aviso de derechos del cliente, Es su derecho, en inglés y en español. Cuál corresponde depende del servicio y de la fuente de financiamiento.'
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
  notice: '',
  homeLabel: 'Volver al inicio',
  homeHref: '/',
  family: {
    eyebrow: 'Solicitud recibida',
    title: 'Recibimos su solicitud de servicios',
    lead: 'Un miembro del equipo de VTCC se comunicará con usted usando el método de contacto que eligió.',
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
    lead: 'Un miembro del equipo de VTCC se comunicará con usted sobre los próximos pasos para la familia.',
    steps: [
      'VTCC se comunicará con usted al teléfono o correo de trabajo que indicó.',
      'Comparta los documentos de referencia solo por el proceso seguro aprobado por VTCC, no por este formulario.',
      'La familia también puede llamar a VTCC directamente si desea iniciar la conversación.',
    ],
    secondaryLabel: 'Guía para profesionales',
    secondaryHref: '/resources/referrals-and-eligibility',
  },
  career: {
    eyebrow: 'Solicitud recibida',
    title: 'Recibimos su solicitud de empleo',
    lead: 'Un miembro del equipo de VTCC revisará lo que envió y se comunicará con usted sobre el puesto.',
    steps: [
      'Envíe su currículum a recruiting@vtccmail.com. La carga del currículum en este formulario se agregará pronto.',
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
    lead: 'Un miembro del equipo de VTCC se comunicará con usted.',
    steps: [
      'Esté atento al teléfono o al correo que usa con VTCC.',
      'Llame a la oficina de Fairfax si necesita comunicarse antes.',
    ],
    secondaryLabel: 'Contactar a VTCC',
    secondaryHref: '/contact',
  },
}

const careerRoleLabels = [
  'Técnico de conducta (BT)',
  'Técnico de conducta registrado (RBT)',
  'Técnico de conducta líder sénior (SLBT)',
  'Programa para analistas en formación',
  'Analista de conducta certificado (BCBA)',
  'Administración u operaciones',
  'Otro',
]
const roleField = es.careerApplication.fields.find((field) => field.name === 'role')
if (roleField) {
  roleField.options = careerRoleLabels
}
es.sections.careers.postings.bt.applyRole = careerRoleLabels[0]
es.sections.careers.postings.bcba.applyRole = careerRoleLabels[4]

const contactOptions = ['Teléfono', 'Correo electrónico', 'Cualquiera de los dos']
const serviceSolo = ['Aún no lo sé']
const fundingSolo = ['No lo sé']

function setField(form, name, updates) {
  const field = form.fields.find((item) => item.name === name)
  if (field) {
    Object.assign(field, updates)
  }
}

setField(es.formFamily, 'name', { label: 'Nombre del padre, la madre o el tutor' })
setField(es.formFamily, 'email', { label: 'Correo electrónico' })
setField(es.formFamily, 'phone', { label: 'Teléfono' })
setField(es.formFamily, 'preferredContact', {
  label: 'Método de contacto preferido',
  placeholder: 'Seleccione',
  options: contactOptions,
})
setField(es.formFamily, 'ageRange', { label: 'Edad del niño o de la niña' })
setField(es.formFamily, 'hasCde', {
  label: '¿Tiene una CDE?',
  placeholder: 'Seleccione',
  options: ['Sí', 'No', 'No lo sé'],
})
setField(es.formFamily, 'service', {
  label: 'Servicio que le interesa',
  solo: serviceSolo,
})
setField(es.formFamily, 'funding', {
  label: 'Fuente de financiamiento (si se conoce)',
  solo: fundingSolo,
})
setField(es.formFamily, 'medicaid', {
  label: '¿Es con Medicaid?',
  placeholder: 'Seleccione',
  options: ['Sí', 'No', 'No lo sé'],
})
setField(es.formFamily, 'location', { label: 'Ciudad o condado' })
setField(es.formFamily, 'message', { label: '¿En qué le gustaría que le ayudemos?' })
es.formFamily.submitLabel = 'Enviar solicitud de servicios'

setField(es.formReferral, 'name', { label: 'Nombre de quien refiere' })
setField(es.formReferral, 'organization', { label: 'Organización o agencia' })
setField(es.formReferral, 'role', {
  label: 'Su función',
  options: [
    'Personal escolar',
    'Médico o personal de enfermería',
    'Terapeuta o consejero',
    'Administrador de casos',
    'Personal del condado o de FAPT',
    'Otro profesional de la comunidad',
  ],
})
setField(es.formReferral, 'email', { label: 'Correo electrónico del trabajo' })
setField(es.formReferral, 'phone', { label: 'Teléfono del trabajo' })
setField(es.formReferral, 'preferredContact', {
  label: 'Método de contacto preferido',
  options: contactOptions,
})
setField(es.formReferral, 'parentName', {
  label: 'Nombre del padre, la madre o el tutor (si se conoce)',
})
setField(es.formReferral, 'parentPhone', {
  label: 'Teléfono del padre, la madre o el tutor (si se conoce)',
})
setField(es.formReferral, 'ageRange', { label: 'Edad del niño o de la niña' })
setField(es.formReferral, 'service', {
  label: 'Servicio solicitado',
  solo: serviceSolo,
})
setField(es.formReferral, 'funding', {
  label: 'Fuente de financiamiento (si se conoce)',
  solo: fundingSolo,
})
setField(es.formReferral, 'medicaid', {
  label: '¿Es con Medicaid?',
  placeholder: 'Seleccione',
  options: ['Sí', 'No', 'No lo sé'],
})
setField(es.formReferral, 'location', { label: 'Ciudad o condado del niño o de la niña' })
setField(es.formReferral, 'message', {
  label: 'Motivo de la referencia (solo un resumen, sin información confidencial)',
})
es.formReferral.submitLabel = 'Enviar consulta de referencia'

for (const form of [es.formFamily, es.formReferral]) {
  const funding = form.fields.find((field) => field.name === 'funding')
  if (!funding) continue
  funding.options = funding.options.map((option) => {
    if (option === 'County/FAPT') return 'Condado/FAPT'
    if (option === 'Not sure') return 'No lo sé'
    return option
  })
}

delete es.sections.about.quotes

Object.assign(es.ui, {
  hoursLabel: 'Horario',
  availabilityLabel: 'Disponibilidad',
  officesLabel: 'Oficinas',
})

es.visit = {
  hoursSummary: 'Lun–vie 8 a.m.–8 p.m.\nSáb 8 a.m.–2 p.m.',
  hoursDetail: '',
  responseTime: '',
  serviceAreaTitle: 'Dónde se brinda la atención',
  serviceAreaSummary: '',
  serviceAreaBody: '',
  languagesTitle: 'Idiomas',
  languagesBody:
    'Hay intérpretes para cualquier idioma. Pregunte durante la admisión. Este sitio web y el aviso de derechos del cliente están en inglés y español.',
}

es.footer.emergency = ''

for (const card of es.sections.services.cards) {
  delete card.availability
}

es.sections.process.firstVisit = {
  title: 'Su primera conversación',
  intro:
    'El primer paso es una llamada o el seguimiento de un formulario, no una sesión de tratamiento. VTCC no publica una duración fija para la primera cita.',
  items: [
    {
      title: 'Quién participa',
      body: 'Un padre, una madre o un tutor habla con un miembro del equipo de VTCC. Un cuidador debe participar en la admisión. Si el cuidador permanece en sesiones posteriores depende del plan de tratamiento.',
    },
    {
      title: 'Qué tener listo',
      body: 'Su información de contacto, la edad de su hijo o hija, el servicio que solicita, su ciudad o condado y los datos de financiamiento si los conoce. No envíe informes de diagnóstico por el formulario del sitio.',
    },
    {
      title: 'Qué sigue',
      body: 'El equipo explica los formularios, revisa el financiamiento y programa una evaluación cuando el servicio es adecuado. Los tiempos dependen del plan y de qué tan completa esté la información.',
    },
    {
      title: 'Llegada',
      body: 'Llame a la oficina de Fairfax antes de ir para conocer el estacionamiento y el registro.',
    },
  ],
}
es.sections.process.schoolNote = {
  title: 'Escuelas e IEP',
  body: 'Las familias a menudo quieren que las habilidades se trasladen a la escuela. VTCC puede hablar con usted sobre compartir el progreso y si un informe o una reunión escolar forma parte del plan. Lo que el equipo puede compartir depende de su consentimiento, el plan de tratamiento y la fuente de financiamiento. Pregunte durante la admisión si la coordinación con la escuela es una meta.',
}

es.sections.about.languages = {
  eyebrow: 'Idiomas',
  body: es.visit.languagesBody,
}
es.sections.about.team = {
  eyebrow: 'Liderazgo',
  title: 'Liderazgo clínico',
  people: [
    {
      name: 'Leticia Basauri',
      role: 'Propietaria y directora',
      body: 'Leticia Basauri es la propietaria y directora de Victoria Transcultural Clinical Center, que fundó en marzo de 2001. Es psicóloga con más de 30 años de experiencia trabajando con comunidades multiculturales en México, Canadá y Estados Unidos. Obtuvo dos posgrados en psicología clínica en México, completó cursos de doctorado en psicología clínica en Canadá y recibió su Maestría en Trabajo Social de George Mason University. Está trabajando para obtener su licencia de trabajo social clínico en Virginia y se ha capacitado en TF-CBT y en enfoques de atención informada sobre el trauma.',
    },
  ],
}

const spanishSeoTitles = {
  home: 'Terapia ABA para niños en el norte de Virginia | VTCC',
  aba: 'Terapia ABA | Victoria Transcultural Clinical Center',
  'early-learners': 'Programa de Primeros Aprendices | Victoria Transcultural Clinical Center',
  'feeding-program': 'Programa de Alimentación | Victoria Transcultural Clinical Center',
  'social-enrichment': 'Enriquecimiento Social | Victoria Transcultural Clinical Center',
  'social-skills-group': 'Grupo de Habilidades Sociales | Victoria Transcultural Clinical Center',
  'group-parent-training': 'Safety-Care® para Familias y Cuidadores | Victoria Transcultural Clinical Center',
  'get-started': 'Cómo comenzar | Victoria Transcultural Clinical Center',
  insurance: 'Seguro y financiamiento | Victoria Transcultural Clinical Center',
  about: 'Acerca de VTCC | Victoria Transcultural Clinical Center',
  career: 'Carreras en ABA | Victoria Transcultural Clinical Center',
  contact: 'Contacto | Victoria Transcultural Clinical Center',
  resources: 'Preguntas y guías | Victoria Transcultural Clinical Center',
  forms: 'Formularios | Victoria Transcultural Clinical Center',
  privacy: 'Política de privacidad del sitio web | Victoria Transcultural Clinical Center',
  terms: 'Términos de uso del sitio web | Victoria Transcultural Clinical Center',
  accessibility: 'Declaración de accesibilidad | Victoria Transcultural Clinical Center',
  nondiscrimination: 'No discriminación y ayuda con idiomas | Victoria Transcultural Clinical Center',
  'notice-of-privacy-practices': 'Aviso de prácticas de privacidad | Victoria Transcultural Clinical Center',
}
const spanishSeoDescriptions = {
  home: 'VTCC ofrece terapia ABA, aprendizaje temprano, apoyo de alimentación, grupos de habilidades sociales y entrenamiento para padres desde la oficina de Fairfax.',
  aba: 'Terapia ABA individualizada con evaluación de un BCBA, entrenamiento para padres y seguimiento del progreso para niños y adolescentes en el norte de Virginia.',
  'early-learners':
    'Apoyo con estructura de aula para niños de 3 a 5 años que reciben servicios de ABA, de lunes a viernes, de 10:00 a.m. a 2:00 p.m.',
  'feeding-program':
    'Apoyo de alimentación que empieza por llegar a la mesa y avanza hacia alimentos nuevos, con orientación a los cuidadores durante comidas reales.',
  'social-enrichment':
    'Un grupo de aprendizaje social para niños de 3 a 5 años, con juego guiado, interacción con compañeros y actividades STEAM semanales.',
  'social-skills-group':
    'Grupos de habilidades sociales para niños de 2 años en adelante: Level Up Crew, Quest Masters y Legend League.',
  'group-parent-training':
    'Pronto habrá capacitación grupal Safety-Care® para padres y cuidadores, con estrategias prácticas de prevención, reducción de la escalada y seguridad en casa.',
  'get-started':
    'Qué esperar cuando contacta a VTCC, desde la primera llamada hasta la revisión del financiamiento, la evaluación y el inicio de los servicios.',
  insurance:
    'Vías de Medicaid, atención administrada, seguro comercial y financiamiento del condado o FAPT para los servicios de VTCC. Llame para verificar su plan.',
  about:
    'La misión de VTCC, el apoyo de idiomas y la directora Leticia Basauri. Servicios de salud conductual para familias diversas del norte de Virginia.',
  career:
    'Capacitación de RBT, horas de campo para BCBA y puestos abiertos en Victoria Transcultural Clinical Center en el norte de Virginia.',
  contact:
    'Solicite servicios o haga una pregunta de referencia. Oficina de Fairfax, teléfono y qué ocurre después de comunicarse.',
  resources:
    'Respuestas sobre terapia ABA, admisión, financiamiento, entrenamiento para padres, referencias y los programas especializados de VTCC.',
  forms:
    'Descargue formularios de admisión, cuestionarios de referencia y avisos de derechos del cliente en inglés y español. Hay intérpretes para cualquier idioma.',
  privacy: 'Cómo VTCC maneja la información que se recopila en este sitio web y sus formularios.',
  terms: 'Términos para usar el sitio web de Victoria Transcultural Clinical Center.',
  accessibility: 'El compromiso de VTCC de hacer este sitio más fácil de usar, y cómo pedir ayuda.',
  nondiscrimination:
    'VTCC no discrimina y ofrece intérpretes para cualquier idioma. Hay materiales en inglés y español en este sitio.',
  'notice-of-privacy-practices':
    'Cómo VTCC usa y protege la información de salud, y sus derechos según HIPAA.',
}
es.seo.shareImageAlt = 'Victoria Transcultural Clinical Center'
es.seo.defaultDescription =
  'Servicios de salud mental y conductual para niños y familias en el norte de Virginia, desde la oficina de Fairfax.'
for (const [key, title] of Object.entries(spanishSeoTitles)) {
  if (!es.seo.pages[key]) continue
  es.seo.pages[key].title = title
  if (spanishSeoDescriptions[key]) {
    es.seo.pages[key].description = spanishSeoDescriptions[key]
  }
}

const locationFaq = es.pages?.resourcesFaq?.faqs?.find((faq) =>
  faq.question.startsWith('Where does VTCC'),
)
if (locationFaq) {
  locationFaq.question = '¿Dónde brinda servicios VTCC?'
  locationFaq.answer =
    'La oficina de VTCC está en 10565 Fairfax Blvd, Suite 300, Fairfax, y atiende a familias en el norte de Virginia. El Enriquecimiento Social se reúne en esa clínica. Las técnicas de ABA pueden usarse en el hogar, durante las comidas familiares y en la comunidad, como en un parque del vecindario. El apoyo de alimentación también puede darse durante las comidas en el hogar. Llame para confirmar si podemos atender su ciudad o condado y dónde se brinda cada servicio.'
}

writeFileSync(join(rootDir, 'content/locales/es.json'), JSON.stringify(es, null, 2) + '\n')
console.log('Wrote content/locales/es.json')
