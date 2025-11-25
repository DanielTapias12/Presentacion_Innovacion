import { 
  Users, 
  Activity, 
  Gem, 
  HeartHandshake, 
  Share2, 
  Wallet, 
  Coins, 
  Cpu
} from 'lucide-react';
import { CanvasItem, BudgetEntry } from './types';

export const canvasData: CanvasItem[] = [
  {
    id: 'partners',
    title: 'Aliados Clave (Proyección)',
    icon: HeartHandshake,
    gridArea: 'kp',
    color: 'bg-emerald-50',
    summary: 'Red de Validación y Soporte',
    details: [
      'Instituciones Educativas Piloto: Para validación del prototipo.',
      'Ministerio de Educación: Alineación normativa futura (Dec. 1421).',
      'Infraestructura Tecnológica: Vercel & Google Cloud (Soporte actual).',
      'Comunidad Académica: Docentes evaluadores del MVP.'
    ]
  },
  {
    id: 'activities',
    title: 'Actividades Clave',
    icon: Activity,
    gridArea: 'ka',
    color: 'bg-teal-50',
    summary: 'Desarrollo y Pruebas del Prototipo',
    details: [
      'Programación del MVP (Frontend, Backend, Integración IA).',
      'Configuración inicial del Agente Pedagógico (Gemini API).',
      'Pruebas técnicas y de usabilidad en entornos controlados.',
      'Diseño de la integración demostrativa con SGA/LMS.',
      'Protección de datos y ética digital (Diseño).'
    ]
  },
  {
    id: 'resources',
    title: 'Recursos Clave',
    icon: Cpu,
    gridArea: 'kr',
    color: 'bg-cyan-50',
    summary: 'Infraestructura del Prototipo',
    details: [
      'Equipo de Desarrollo y Pedagogía (Gestión del proyecto).',
      'Arquitectura Cloud (Despliegue en Vercel).',
      'Algoritmos de IA Generativa (Capacidad de cómputo).',
      'Base de Conocimiento: Estrategias pedagógicas digitalizadas.'
    ]
  },
  {
    id: 'value_prop',
    title: 'Propuesta de Valor',
    icon: Gem,
    gridArea: 'vp',
    color: 'bg-blue-50',
    summary: 'Innovación en la Gestión Inclusiva',
    details: [
      'Prototipo de automatización para creación de PIAR.',
      'Demostración de Agente Virtual para sugerencias pedagógicas.',
      'Centralización de datos del estudiante (Visión 360°).',
      'Reducción de carga administrativa (Validación de concepto).',
      'Interfaz diseñada para la accesibilidad universal.'
    ]
  },
  {
    id: 'relationships',
    title: 'Relación con Clientes',
    icon: HeartHandshake,
    gridArea: 'cr',
    color: 'bg-indigo-50',
    summary: 'Estrategia de Fidelización Futura',
    details: [
      'Asistencia automatizada mediante IA (Funcionalidad Beta).',
      'Ciclos de retroalimentación para mejora del prototipo.',
      'Soporte técnico directo durante fases piloto.',
      'Co-creación de nuevas funcionalidades con docentes.'
    ]
  },
  {
    id: 'channels',
    title: 'Canales',
    icon: Share2,
    gridArea: 'ch',
    color: 'bg-violet-50',
    summary: 'Distribución y Acceso',
    details: [
      'Acceso Web Directo (SaaS) para demostraciones.',
      'Presentaciones en instituciones educativas.',
      'Documentación digital y guías de usuario interactivas.',
      'Validación directa con equipos de inclusión.'
    ]
  },
  {
    id: 'segments',
    title: 'Segmentos de Clientes',
    icon: Users,
    gridArea: 'cs',
    color: 'bg-purple-50',
    summary: 'Beneficiarios Potenciales',
    details: [
      'Instituciones Educativas: Que requieren sistematizar la inclusión.',
      'Docentes de Aula y Apoyo: Usuarios principales del sistema.',
      'Directivos: Para monitoreo y cumplimiento normativo.',
      'Familias: Visualización de avances (Roadmap futuro).'
    ]
  },
  {
    id: 'costs',
    title: 'Estructura de Costos',
    icon: Wallet,
    gridArea: 'cst',
    color: 'bg-rose-50',
    summary: 'Inversión Real del MVP',
    details: [
      'Cálculo basado en 8 semanas de desarrollo.',
      'Recursos Humanos: Dirección, Desarrollo y Pedagogía.',
      'Tecnología: Servidores, Dominios, APIs de IA.',
      'Logística: Materiales, transporte y capacitación.',
      'Total estimado: $17.500.000 COP.'
    ]
  },
  {
    id: 'revenue',
    title: 'Fuentes de Ingresos',
    icon: Coins,
    gridArea: 'rs',
    color: 'bg-green-50',
    summary: 'Modelo de Sostenibilidad (Futuro)',
    details: [
      'Licenciamiento B2B para colegios (Suscripción anual).',
      'Módulos Premium de IA avanzada (Modelo Freemium).',
      'Consultoría en implementación de procesos inclusivos.',
      'Capacitación certificada en uso de herramientas digitales.'
    ]
  }
];

export const supabaseBudgetData: BudgetEntry[] = [
  { id: 1, category: 'Talento Humano', amount: 12000000, description: 'Director, Desarrolladores, Pedagogo' },
  { id: 2, category: 'Tecnología', amount: 3000000, description: 'Hosting, Licencias IA, Hardware' },
  { id: 3, category: 'Logística y Admin', amount: 1200000, description: 'Materiales y transporte' },
  { id: 4, category: 'Capacitación y Validación', amount: 1300000, description: 'Talleres y Pruebas Piloto' },
];