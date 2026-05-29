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
      { label: 'Intensivos en el Hogar', href: '/intensive-in-home' },
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
    label: 'Formularios',
    href: '/resources/forms',
  },
]

es.navigation.headerActions = [
  { label: 'Solicitar servicios', href: '/contact', style: 'primary' },
]

Object.assign(es.hero, {
  eyebrow: 'Atendiendo a niños, adolescentes y familias en el norte de Virginia',
  headline:
    'Servicios de ABA e Intensivos en el Hogar para Niños y Familias en el Norte de Virginia',
  subheadline:
    'Victoria Transcultural Clinical Center ofrece servicios de salud mental y conductual culturalmente responsivos para niños, adolescentes y familias. Nuestro equipo apoya a las familias mediante terapia ABA individualizada, servicios intensivos en el hogar, colaboración con padres y orientación sobre financiamiento.',
  supportingLine:
    'Atendemos a familias a través de Medicaid, organizaciones de atención administrada, seguros comerciales y vías de financiamiento del condado/FAPT, sujeto a elegibilidad y verificación del plan.',
})

es.hero.actions = [
  { label: 'Solicitar Servicios', href: '#contact', style: 'primary' },
  { label: 'Referir un Cliente', href: '#referrers', style: 'secondary' },
  { label: 'Llamar a VTCC', href: 'tel:17032186599', style: 'ghost' },
]

Object.assign(es.heroCard, {
  title: 'Cómo ayuda VTCC',
  items: [
    'Terapia ABA con metas individualizadas',
    'Apoyo familiar con servicios intensivos en el hogar',
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
    label: 'Intensivos en el Hogar',
    title: 'Estabilice desafíos serios en el entorno familiar',
    body: 'Los servicios intensivos en el hogar brindan apoyo de salud mental a corto plazo y centrado en la familia para ayudar a estabilizar desafíos conductuales o emocionales serios.',
    linkLabel: 'Conozca los SIH',
    href: '/intensive-in-home',
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

Object.assign(es.sections.iih, {
  eyebrow: 'Servicios Intensivos en el Hogar',
  title: 'Apoyo centrado en la familia en el hogar',
  intro:
    'Los servicios intensivos en el hogar de VTCC brindan apoyo de salud mental a corto plazo y centrado en la familia. El objetivo es ayudar a estabilizar desafíos conductuales o emocionales serios mientras se fortalece el sistema familiar.',
})

es.sections.iih.columns = [
  {
    title: 'Metas comunes',
    items: [
      'Mejorar habilidades de afrontamiento y comunicación',
      'Fortalecer rutinas familiares y resolución de problemas',
      'Reducir el riesgo de colocación fuera del hogar',
      'Apoyar la transición de regreso al hogar cuando corresponda',
    ],
  },
  {
    title: 'Quién puede consultar',
    items: [
      'Padres y tutores',
      'Escuelas y proveedores pediátricos',
      'Administradores de casos y socios del condado',
      'Profesionales comunitarios que apoyan a la familia',
    ],
  },
]

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
    'Jóvenes que pueden estar en riesgo de colocación fuera del hogar',
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
    options: ['ABA', 'Intensivos en el Hogar', 'No estoy seguro', 'Pregunta de referencia'],
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
  intensiveInHome: {
    title: 'Página de Servicios Intensivos en el Hogar',
    hero: {
      headline: 'Apoyo intensivo en el hogar para niños, adolescentes y familias',
      body: 'Los servicios intensivos en el hogar de VTCC brindan apoyo de salud mental a corto plazo y centrado en la familia. El objetivo es ayudar a estabilizar desafíos conductuales o emocionales serios mientras se fortalece el sistema familiar.',
      buttons: ['Solicitar servicios SIH', 'Hacer una referencia'],
    },
    sections: [
      {
        title: 'Lo que abordan los servicios intensivos en el hogar',
        intro:
          'Los SIH pueden apoyar a familias cuando un niño o adolescente experimenta conductas severas, intensas o frecuentes que generan preocupaciones de seguridad, disrupción familiar o riesgo de colocación fuera del hogar.',
        items: [
          'Estabilizar preocupaciones conductuales o emocionales urgentes',
          'Mejorar habilidades de afrontamiento y comunicación',
          'Apoyar a padres y cuidadores',
          'Fortalecer rutinas familiares y resolución de problemas',
          'Reducir el riesgo de colocación fuera del hogar',
          'Apoyar la transición de regreso al hogar cuando corresponda',
        ],
      },
      {
        title: 'Atención centrada en la familia',
        body: 'VTCC cree que las familias tienen fortalezas que pueden apoyar el crecimiento y el cambio. Los servicios intensivos en el hogar trabajan con la unidad familiar, no solo con el niño, para que las nuevas estrategias puedan practicarse en el entorno donde a menudo ocurren los desafíos.',
      },
    ],
    cta: {
      body: 'Si usted es padre, tutor, profesional escolar, administrador de casos o socio del condado, contacte a VTCC para preguntar sobre elegibilidad y pasos de referencia para servicios intensivos en el hogar.',
      button: 'Contactar a VTCC sobre SIH',
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
      body: 'VTCC ofrece recursos educativos para ayudar a las familias a entender la terapia ABA, los servicios intensivos en el hogar, la participación de los padres, los pasos de admisión y las preguntas sobre financiamiento.',
    },
    faqs: [
      {
        question: '¿Qué servicios brinda VTCC?',
        answer:
          'VTCC brinda terapia ABA y servicios intensivos en el hogar para niños, adolescentes y familias. Los servicios dependen de la elegibilidad, el financiamiento, la necesidad clínica y la disponibilidad.',
      },
      {
        question: '¿Dónde brinda servicios VTCC?',
        answer:
          'El sitio actual describe servicios en el hogar y oficinas en Fairfax y Fredericksburg. VTCC debe confirmar el área de servicio exacta antes de publicar el lenguaje final.',
      },
      {
        question: '¿VTCC acepta seguros?',
        answer:
          'El sitio actual enumera varios pagadores de Medicaid, atención administrada y comerciales, y también hace referencia al financiamiento del condado/FAPT. Las familias deben contactar a VTCC para verificar la cobertura actual para su plan y servicio.',
      },
      {
        question: '¿Qué es la terapia ABA?',
        answer:
          'La ABA es un enfoque basado en evidencia que utiliza estrategias positivas para ayudar a los niños a desarrollar habilidades y reducir conductas que interfieren con el aprendizaje, la seguridad o la vida diaria.',
      },
      {
        question: '¿Qué son los servicios intensivos en el hogar?',
        answer:
          'Los servicios intensivos en el hogar son apoyo de salud mental a corto plazo brindado en el hogar para ayudar a estabilizar desafíos conductuales o emocionales serios y apoyar la unidad familiar.',
      },
      {
        question: '¿Participan los padres?',
        answer:
          'Sí. La participación de padres y cuidadores es una parte importante tanto de la ABA como de los servicios centrados en la familia.',
      },
      {
        question: '¿Cómo empiezo?',
        answer:
          'Llame a VTCC o complete el formulario de solicitud. El equipo puede explicar los formularios requeridos, la revisión de financiamiento, la admisión, la evaluación y la programación.',
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
          id: 'iihIntake',
          title: 'Formulario de admisión de VTCC para servicios intensivos en el hogar',
          note: 'Utilícelo también para casos FAPT.',
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
