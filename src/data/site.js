// Central content for the whole site. Pages read from here so text stays consistent.
import imgTeppa from '../images/proj_teppa.jpg';
import imgPortabelly from '../images/proj_portabelly.jpg';
import imgWatchdog from '../images/autorais/watchdog-cover.jpg';
import imgWatchdog1 from '../images/autorais/watchdog-1.jpg';
import imgWatchdog2 from '../images/autorais/watchdog-2.jpg';
import uniparLogo from '../images/image.png';
import italoLogo from '../images/image2.png';

// Screenshots of each delivered site: d* = desktop, m* = mobile.
const shots = import.meta.glob('../images/projects/*.jpg', { eager: true, import: 'default' });
const pick = (prefix) => Object.keys(shots).sort().filter((k) => k.includes(`/${prefix}`)).map((k) => shots[k]);

export const contact = {
  email: 'patrick.souza.dev@gmail.com',
  whatsapp: '5546999011726',
  phoneLabel: '(46) 99901-1726',
  instagram: { handle: '@_PATRICK.EDUEU_', url: 'https://www.instagram.com/_patrick.edueu_' },
  linkedin: 'https://www.linkedin.com/in/patricksouzadev/',
  github: 'https://github.com/PatrickItalo-git',
  city: 'Francisco Beltrão - PR',
};

export const whatsappLink = (text = 'Olá Patrick! Gostaria de fazer um orçamento.') =>
  `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(text)}`;

export const projects = [
  {
    slug: 'jeferson-teppa',
    title: 'Jeferson Teppa',
    tagline: 'Arquitetura com propósito.',
    segment: 'Arquitetura & Interiores',
    location: 'Francisco Beltrão - PR',
    url: 'https://jeferson-teppa.vercel.app/',
    domain: 'jeferson-teppa.vercel.app',
    cover: imgTeppa,
    gallery: pick('teppa-d'),
    mobile: pick('teppa-m'),
    summary: 'Site institucional para o escritório do arquiteto Jeferson Teppa, com vídeo em tela cheia, projetos em destaque e depoimentos de clientes.',
    description: [
      'Um site pensado para deixar a arquitetura falar primeiro: vídeo em tela cheia na abertura, tipografia fina e muito respiro entre os elementos.',
      'Cada projeto do escritório tem sua própria página, com texto de apresentação e galeria de fotos. O site reúne ainda a página Sobre, os serviços, os depoimentos de clientes e um formulário de contato, com atalho para o WhatsApp em todas as telas.',
    ],
  },
  {
    slug: 'portabelly',
    title: 'Portábelly',
    tagline: 'De portas abertas para o futuro.',
    segment: 'Indústria & Fábrica',
    location: 'Renascença - PR',
    url: 'https://www.portabelly.com.br/',
    domain: 'portabelly.com.br',
    cover: imgPortabelly,
    gallery: pick('portabelly-d'),
    mobile: pick('portabelly-m'),
    summary: 'Site da Portábelly (antiga Portas Alvorada), fábrica de portas de alto padrão em Renascença - PR, com mais de 58 anos de tradição.',
    description: [
      'A Portas Alvorada e a Portábelly se uniram, e o site precisava contar essa história com a sofisticação de uma marca de alto padrão.',
      'Ele apresenta os diferenciais da fábrica, a história da marca e a linha de portas (Kit BellyPlac, portas frisadas e lisas), com catálogo em PDF, feed do Instagram e atalhos para orçamento pelo WhatsApp.',
    ],
  },
];

// Products of my own (not client work).
export const ownProjects = [
  {
    slug: 'watchdog',
    title: 'WatchDog',
    tagline: 'Segurança que pensa por você.',
    segment: 'Segurança & Inteligência Artificial',
    status: 'Em criação',
    location: 'Francisco Beltrão - PR',
    url: 'https://www.watchdog.agency/',
    domain: 'watchdog.agency',
    cover: imgWatchdog,
    gallery: [imgWatchdog1, imgWatchdog2],
    description: [
      'A WatchDog é a minha empresa de tecnologia, sediada em Francisco Beltrão - PR. Ela conecta Inteligência Artificial ao sistema de câmeras de segurança que o cliente já tem: a IA analisa as imagens em tempo real e, ao detectar algo suspeito, envia um alerta com foto direto no WhatsApp em menos de 3 segundos.',
      'Sem trocar equipamento e sem operador, o serviço atende comércios, indústrias, condomínios, logística, saúde e integradores de CFTV.',
    ],
  },
];

export const services = [
  { title: 'Desenvolvimento Web', desc: 'Sites institucionais, landing pages e aplicações web de alta performance, responsivas e fáceis de manter.' },
  { title: 'Sistemas sob medida', desc: 'Sistemas web pensados para o fluxo real do seu negócio, do cadastro ao relatório.' },
  { title: 'Identidade Visual', desc: 'Identidades digitais únicas e memoráveis, que destacam a sua marca no mercado.' },
  { title: 'Soluções de Dados', desc: 'Transformando dados complexos em insights claros e acionáveis, com bancos PostgreSQL otimizados.' },
  { title: 'Automação', desc: 'Scripts e ferramentas sob medida que otimizam fluxos de trabalho e eliminam tarefas repetitivas.' },
  { title: 'Integração de APIs', desc: 'Conexão entre sistemas, ERPs e serviços externos para uma experiência unificada.' },
];

export const roles = [
  { name: 'UNIPAR', role: 'Professor de ADS e Engenharia de Software', desc: 'Leciono nos cursos de Análise e Desenvolvimento de Sistemas e Engenharia de Software, com foco em Desenvolvimento Web e DevOps, formando profissionais com as melhores práticas do mercado.', logo: uniparLogo },
  { name: 'Grupo Ítalo', role: 'Analista de Desenvolvimento', desc: 'Ferramentas de performance, otimização PostgreSQL e arquitetura de APIs críticas para o grupo.', logo: italoLogo },
];

export const education = [
  { course: 'Pós-Graduação em Desenvolvimento Full Stack', school: 'Anhanguera', year: '2025', href: '/certificados/Certificado-Pos-Graduacao.pdf' },
  { course: 'Análise e Desenvolvimento de Sistemas', school: 'UNIPAR', year: '2024', href: '/certificados/Certificado-Tecnologo.pdf' },
];

export const experience = [
  { role: 'Professor Universitário', company: 'UNIPAR — ADS e Engenharia de Software', period: '2026 — atual' },
  { role: 'Analista de Desenvolvimento', company: 'Grupo Ítalo', period: '2025 — atual' },
  { role: 'Desenvolvedor Full-Stack', company: 'Grifo Sistemas', period: '2024 — 2025' },
];

export const stack = ['React', 'React Native', 'JavaScript', 'Node.js', 'Ruby on Rails', 'Java', 'GraphQL', 'PostgreSQL', 'Firebase', 'Git', 'DevOps', 'Ubuntu'];
