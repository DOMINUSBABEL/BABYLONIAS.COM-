import { Injectable, signal, computed } from '@angular/core';

export type Lang = 'en' | 'es' | 'zh' | 'de' | 'fr';

export interface TransDict {
  nav_langs: {code: Lang, label: string}[];
  proj_id: string;
  subtitle: string;
  confidential: string;
  prepared: string;
  thesis: string;
  thesisDesc: string;
  thesisChinaLatam: string;
  t1: string;
  t2: string;
  t3: string;
  sectors: string;
  agrotech: string;
  biometrics: string;
  iot: string;
  govtech: string;
  nucleus: string;
  platform: string;
  agentsQuote: string;
  architecture: string;
  protocol: string;
  revenue: string;
  revSaaS: string;
  hub: string;
  hubDesc: string;
  china: string;
  chinaDesc: string;
  colombia: string;
  colombiaDesc: string;
  leadership: string;
  ceo: string;
  ceoRole: string;
  cto: string;
  ctoRole: string;
  ecosystem: string;
  ecosystemDesc: string;
  svcAgrTitle: string;
  svcAgrDesc: string;
  svcBioTitle: string;
  svcBioDesc: string;
  svcIotTitle: string;
  svcIotDesc: string;
  svcGovTitle: string;
  svcGovDesc: string;
  portfolio: string;
  portfolioDesc: string;
  repo1: string;
  repo1Desc: string;
  repo2: string;
  repo2Desc: string;
  repo3: string;
  repo3Desc: string;
  repo4: string;
  repo4Desc: string;
  acervix: string;
  acervixDesc: string;
  rights: string;
  edition: string;
  viewGithub: string;
  navHome: string;
  navAbout: string;
  navServices: string;
  navTech: string;
}

const navLangsDecls: {code: Lang, label: string}[] = [{code:'en', label:'EN'}, {code:'es', label:'ES'}, {code:'de', label:'DE'}, {code:'zh', label:'ZH'}, {code:'fr', label:'FR'}];

const TRANSLATIONS: Record<Lang, TransDict> = {
  es: {
    nav_langs: navLangsDecls,
    proj_id: 'ID DE PROYECTO: 2026-ALPHA',
    subtitle: 'Infraestructura Estratégica Sur-Sur | Habilitando el Siglo Tecnológico',
    confidential: 'CONFIDENCIAL / CAPITAL SEMILLA',
    prepared: 'PREPARADO PARA INVERSORES • ABRIL 2026',
    thesis: '01. Tesis de Mercado',
    thesisDesc: 'Desintermediando radicalmente la cadena de suministro de Hardware e IA a escala global, fusionando',
    thesisChinaLatam: 'Asia, América Latina y África sin fricciones.',
    t1: 'Exclusión hiper-estratégica de ecosistemas saturados (EE.UU./UE) para consolidar monopolios en mercados emergentes y zonas francas.',
    t2: 'Sinergia geopolítica nativa con la Belt and Road Initiative (Nueva Ruta de la Seda), operando sobre flujos de capital emergentes.',
    t3: 'Despliegues de resiliencia institucional en infraestructuras del \'Sur Global\'.',
    sectors: 'Sectores Críticos',
    agrotech: 'AGROTECH AVANZADO',
    biometrics: 'BIOMETRÍA EDGE',
    iot: 'IOT & SMART-ENERGY',
    govtech: 'GOV-TECH AUTÓNOMO',
    nucleus: '02. Núcleo Tecnológico',
    platform: 'Motor de Inteligencia e Infraestructura',
    agentsQuote: '"Diseñamos enjambres de agentes autónomos y LLMs propietarios con la capacidad de realizar minería de datos y síntesis profunda; automatizando y prediciendo licitaciones del BID, la CAF y auditorías gubernamentales en tiempo real."',
    architecture: 'Arquitectura DOMINUSBABEL',
    protocol: 'Protocolo de Inferencia Agnóstica',
    revenue: 'Arquitectura de Ingresos',
    revSaaS: 'B2B/B2G Enterprise SaaS + Corretaje',
    hub: '03. Hub Físico y Logístico',
    hubDesc: 'Manufactura OEM de precisión en oriente (White-Labeling) respaldada operativamente por clústeres de soberanía de datos locales.',
    china: 'SOURCING CHINA (Shenzhen)',
    chinaDesc: 'Corretaje directo y auditoría paramétrica de fábricas Tier-1, garantizando escalamiento logístico para Hardware e IoT de infraestructura.',
    colombia: 'HUB COLOMBIA (Bogotá/Medellín)',
    colombiaDesc: 'Construcción y administración de redes GPU on-premise, asegurando cómputo especializado, privacidad y Soberanía Local de Datos.',
    leadership: 'Unidad Directiva C-Level',
    ceo: 'Camilo Tamayo',
    ceoRole: 'CEO / Operations & Global Trade',
    cto: 'J. E. Gómez Bernal',
    ctoRole: 'CTO / Chief AI Architect',
    ecosystem: '04. Ecosistema y Soluciones Frontales',
    ecosystemDesc: 'Despliegue operativo a través de una matriz de productos interconectados que empoderan infraestructuras del Estado y la industria privada.',
    svcAgrTitle: 'Inteligencia Agrotech',
    svcAgrDesc: 'Orquestación de enjambres de drones autónomos, teledetección multiespectral y sensores offline para riego predictivo agronómico.',
    svcBioTitle: 'Identidad Biometríca e IA local',
    svcBioDesc: 'Autenticación descentralizada mediante modelos livianos de Visión Computacional desplegados en el borde (Edge-AI) prescindiendo y mitigando latencia de nube.',
    svcIotTitle: 'Redes IoT e Infraestructura Energética',
    svcIotDesc: 'Equilibrio probabilístico para Smart-Grids, captura de rastro telemétrico y convergencia de hardware chino integrados al hub mediante protocolos seguros.',
    svcGovTitle: 'Estructuración Gov-Tech Burocrática',
    svcGovDesc: 'Burocracia de nueva ola: Estructuración algorítmica de pliegos de licitación, calibración semántica de propuestas, auditorías fiscales y trazabilidad trazada por IA RAG.',
    portfolio: '05. Fundición I+D y Portafolio Open/Closed Source',
    portfolioDesc: 'Componentes maestros y repositorios base, cimentados bajo la rigurosa Arquitectura algorítmica de DOMINUSBABEL.',
    repo1: 'AGENTS-CORE.rs',
    repo1Desc: 'Framework de microservicios agnósticos para agentes IA en Rust y TS; diseccionando con latencia ultra-baja las bases de datos públicas.',
    repo2: 'BABEL-Llama / RLMs',
    repo2Desc: 'Modelos de razonamiento y entendimiento entrenados exclusivamente bajo ontologías legales, contractuales y jurídicas del Estado iberoamericano.',
    repo3: 'IoT-Sentinel Protocol',
    repo3Desc: 'Capa criptográfica de Firmware (E2E-Encryption) diseñando un túnel soberano entre OEM Chino asíncrono y los data-centers de Babel.',
    repo4: 'GovTech-Oracle RAG',
    repo4Desc: 'Corpus conversacional inyectado mediante metodologías RAG (Retrieval-Augmented Generation) sobre los repositorios de normatividad estatal y códigos del legislativo.',
    acervix: 'Acompañamiento Macro-Financiero: ACERVIX',
    acervixDesc: 'La consolidación institucional de Babylon.ia se palanquea bajo la estricta batuta de José David Gallego (ACERVIX Consulting). Incorporando décadas de rigor especializado en penetración de mercados B2G/B2B, levantamiento de capital corporativo, compliance transnacional de Deep-Tech y tracción hiper-acelerada para Startups en LatAm.',
    rights: 'CONSTITUCIÓN S.A.S. • COLOMBIA 2026 • TODOS LOS DERECHOS RESERVADOS',
    edition: 'REPORTE CORPORATIVO Y ESTRATÉGICO',
    viewGithub: 'ANALIZAR ARQUITECTURA',
    navHome: 'Inicio',
    navAbout: 'Visión Macro',
    navServices: 'Mercados',
    navTech: 'Tecnología'
  },
  en: {
    nav_langs: navLangsDecls,
    proj_id: 'PROJECT ID: 2026-ALPHA',
    subtitle: 'South-South Strategic Infrastructure',
    confidential: 'CONFIDENTIAL / SEED STAGE',
    prepared: 'PREPARED FOR INVESTORS • APRIL 2026',
    thesis: '01. Market Thesis',
    thesisDesc: 'Disintermediating the global supply chain between',
    thesisChinaLatam: 'China & Latin America.',
    t1: 'Strategic exclusion of US/EU markets',
    t2: 'Alignment with Belt & Road (BRI)',
    t3: 'Focus: LatAm, Africa, Middle East',
    sectors: 'Target Sectors',
    agrotech: 'AGROTECH',
    biometrics: 'BIOMETRICS',
    iot: 'IOT ENERGY',
    govtech: 'GOV-TECH',
    nucleus: '02. Technological Nucleus',
    platform: 'Core Engine Platform',
    agentsQuote: '"An army of autonomous agents for instant data mining of BID/CAF procurement and government tenders."',
    architecture: 'CTO Architecture',
    protocol: 'Model Protocol',
    revenue: 'Revenue Engine',
    revSaaS: 'MRR SaaS Model',
    hub: '03. Physical Hub',
    hubDesc: 'Hardware White-Labeling at source (Tier 1 Suppliers).',
    china: 'CHINA SOURCING',
    chinaDesc: 'Factory Contract Brokering',
    colombia: 'COLOMBIA HUB',
    colombiaDesc: 'GPU Clusters & Data Hosting',
    leadership: 'Executive Leadership',
    ceo: 'Camilo Tamayo',
    ceoRole: 'CEO / Global Trade',
    cto: 'J. E. Gómez Bernal',
    ctoRole: 'CTO / AI Architect',
    ecosystem: '04. Ecosystem & Services',
    ecosystemDesc: 'Operational and technological deployment across critical Global South sectors.',
    svcAgrTitle: 'Agrotech Autonomous Systems',
    svcAgrDesc: 'Drone orchestration and crop yield prediction via satellite imaging.',
    svcBioTitle: 'AI Biometrics & Identity',
    svcBioDesc: 'Distributed identity management with edge-computing facial recognition.',
    svcIotTitle: 'IoT Energy Grid',
    svcIotDesc: 'Smart grid balancing and sensors seamlessly integrated into Chinese OEM hardware.',
    svcGovTitle: 'Gov-Tech Structuring',
    svcGovDesc: 'Automated bidding and calibration of technical state proposals.',
    portfolio: '05. Portfolio & R&D',
    portfolioDesc: 'Core repositories and architectures originally developed by DOMINUSBABEL.',
    repo1: 'AGENTS.AI Core',
    repo1Desc: 'Multi-agent framework in Rust/TS for public tender analysis.',
    repo2: 'BABEL-LLM',
    repo2Desc: 'Fine-tuned models tailored to Latin American legal and state terminology.',
    repo3: 'IoT-Sentinel',
    repo3Desc: 'Firmware bridge connecting Chinese OEM hardware with our sovereign cloud.',
    repo4: 'GovTech-RAG',
    repo4Desc: 'Retrieval-Augmented Generation for strict state contractual constraints.',
    acervix: 'Strategic Consulting by ACERVIX',
    acervixDesc: 'Support, external consulting, and corporate scaling driven under the strategic direction of José David Gallego.',
    rights: 'S.A.S. CONSTITUTION • COLOMBIA 2026 • ALL RIGHTS RESERVED',
    edition: 'APRIL 2026 EDITION',
    viewGithub: 'VIEW ON GITHUB',
    navHome: 'Home',
    navAbout: 'About',
    navServices: 'Services',
    navTech: 'Technology'
  },
  de: {
    nav_langs: navLangsDecls,
    proj_id: 'PROJEKT-ID: 2026-ALPHA',
    subtitle: 'Süd-Süd Strategische Infrastruktur',
    confidential: 'VERTRAULICH / SEED-PHASE',
    prepared: 'VORBEREITET FÜR INVESTOREN • APRIL 2026',
    thesis: '01. Marktthese',
    thesisDesc: 'Ausschaltung von Zwischenhändlern in der globalen Lieferkette zwischen',
    thesisChinaLatam: 'China & Lateinamerika.',
    t1: 'Strategischer Ausschluss von US/EU-Märkten',
    t2: 'Ausrichtung auf die neue Seidenstraße (BRI)',
    t3: 'Fokus: LatAm, Afrika, Naher Osten',
    sectors: 'Zielsektoren',
    agrotech: 'AGROTECH',
    biometrics: 'BIOMETRIE',
    iot: 'IOT ENERGIE',
    govtech: 'GOV-TECH',
    nucleus: '02. Technologischer Kern',
    platform: 'Kernplattform',
    agentsQuote: '"Eine Armee autonomer Agenten für sofortiges Data-Mining von BID/CAF-Beschaffungen und Regierungsaufträgen."',
    architecture: 'CTO Architektur',
    protocol: 'Modell Protokoll',
    revenue: 'Umsatzmodell',
    revSaaS: 'MRR SaaS Modell',
    hub: '03. Physischer Hub',
    hubDesc: 'Hardware White-Labeling direkt an der Quelle (Tier 1 Lieferanten).',
    china: 'CHINA SOURCING',
    chinaDesc: 'Vermittlung von Fabrikverträgen',
    colombia: 'KOLUMBIEN HUB',
    colombiaDesc: 'GPU-Cluster & Data Hosting',
    leadership: 'Führungsebene',
    ceo: 'Camilo Tamayo',
    ceoRole: 'CEO / Globaler Handel',
    cto: 'J. E. Gómez Bernal',
    ctoRole: 'CTO / KI-Architekt',
    ecosystem: '04. Ökosystem & Dienstleistungen',
    ecosystemDesc: 'Operativer und technologischer Einsatz in kritischen Sektoren des globalen Südens.',
    svcAgrTitle: 'Agrotech Autonome Systeme',
    svcAgrDesc: 'Drohnenkoordination und Ertragsvorhersage mittels Satellitenbildern.',
    svcBioTitle: 'KI-Biometrie & Identität',
    svcBioDesc: 'Verteiltes Identitätsmanagement mit Edge-Computing-Gesichtserkennung.',
    svcIotTitle: 'IoT Energie-Grid',
    svcIotDesc: 'Smart-Grid-Balancing und Sensoren, nahtlos integriert in chinesische OEM-Hardware.',
    svcGovTitle: 'Gov-Tech Strukturierung',
    svcGovDesc: 'Automatisierte Ausschreibung und Kalibrierung staatlicher technischer Vorschläge.',
    portfolio: '05. Portfolio & F&E',
    portfolioDesc: 'Kern-Repositorys und Architekturen, ursprünglich von DOMINUSBABEL entwickelt.',
    repo1: 'AGENTS.AI Core',
    repo1Desc: 'Multi-Agenten-Framework in Rust/TS für öffentliche Ausschreibungen.',
    repo2: 'BABEL-LLM',
    repo2Desc: 'Feinabgestimmte Modelle für lateinamerikanische Rechts- und Regierungsterminologie.',
    repo3: 'IoT-Sentinel',
    repo3Desc: 'Firmware-Brücke zwischen chinesischer OEM-Hardware und unserer souveränen Cloud.',
    repo4: 'GovTech-RAG',
    repo4Desc: 'Retrieval-Augmented Generation für strikte staatliche Vertragsbedingungen.',
    acervix: 'Strategische Beratung durch ACERVIX',
    acervixDesc: 'Unterstützung, externe Beratung und Unternehmensskalierung unter der Leitung von José David Gallego.',
    rights: 'S.A.S. GRÜNDUNG • KOLUMBIEN 2026 • ALLE RECHTE VORBEHALTEN',
    edition: 'AUSGABE APRIL 2026',
    viewGithub: 'AUF GITHUB ANSEHEN',
    navHome: 'Start',
    navAbout: 'Über',
    navServices: 'Dienste',
    navTech: 'Technologie'
  },
  zh: {
    nav_langs: navLangsDecls,
    proj_id: '项目编号: 2026-ALPHA',
    subtitle: '南南战略基础设施',
    confidential: '机密 / 种子轮阶段',
    prepared: '为投资者准备 • 2026年4月',
    thesis: '01. 市场论点',
    thesisDesc: '消除全球供应链中间环节，连接',
    thesisChinaLatam: '中国与拉丁美洲。',
    t1: '战略性排除美欧市场',
    t2: '与“一带一路”倡议（BRI）对接',
    t3: '重点：拉美、非洲、中东',
    sectors: '目标领域',
    agrotech: '农业科技',
    biometrics: '生物识别',
    iot: '物联网能源',
    govtech: '政府科技',
    nucleus: '02. 核心技术',
    platform: '核心平台',
    agentsQuote: '“一支自主代理大军，用于实时挖掘美洲开发银行（BID/CAF）采购和政府招标数据。”',
    architecture: 'CTO 架构',
    protocol: '模型协议',
    revenue: '收入引擎',
    revSaaS: 'SaaS 订阅模式 (MRR)',
    hub: '03. 实体枢纽',
    hubDesc: '在货源地（一级供应商）进行硬件贴牌（White-Labeling）。',
    china: '中国采购',
    chinaDesc: '工厂合同经纪',
    colombia: '哥伦比亚枢纽',
    colombiaDesc: 'GPU集群与数据托管',
    leadership: '高管团队',
    ceo: 'Camilo Tamayo (卡米洛)',
    ceoRole: 'CEO / 全球贸易',
    cto: 'J. E. Gómez Bernal (戈麦斯)',
    ctoRole: 'CTO / AI架构师',
    ecosystem: '04. 生态系统与服务',
    ecosystemDesc: '在全球南方关键领域进行运营与技术部署。',
    svcAgrTitle: '农业科技自主系统',
    svcAgrDesc: '无人机编排与利用卫星图像进行农作物产量预测。',
    svcBioTitle: 'AI智能生物识别',
    svcBioDesc: '基于边缘计算人脸识别的分布式身份管理。',
    svcIotTitle: '物联网能源网',
    svcIotDesc: '无缝集成至中国OEM硬件的智能电网平衡与传感器。',
    svcGovTitle: '政府科技架构',
    svcGovDesc: '自动化国家技术提案招标与校准。',
    portfolio: '05. 投资组合与研发',
    portfolioDesc: '主要代码库与架构最初由 DOMINUSBABEL 开发。',
    repo1: 'AGENTS.AI 核心',
    repo1Desc: '用于公共招标分析的 Rust/TS 多智能体框架。',
    repo2: 'BABEL-LLM',
    repo2Desc: '针对拉丁美洲法律和国家术语的微调模型。',
    repo3: 'IoT-Sentinel',
    repo3Desc: '将中国OEM硬件与主权云连接的固件桥。',
    repo4: 'GovTech-RAG',
    repo4Desc: '针对严格国家合同限制的检索增强生成。',
    acervix: 'ACERVIX 战略咨询',
    acervixDesc: '在 José David Gallego 的领导下，提供支持、外部咨询与企业规模扩展。',
    rights: 'S.A.S. 注册 • 哥伦比亚 2026 • 版权所有',
    edition: '2026年4月版',
    viewGithub: '前往GITHUB查看',
    navHome: '首页',
    navAbout: '关于',
    navServices: '服务',
    navTech: '技术'
  },
  fr: {
    nav_langs: navLangsDecls,
    proj_id: 'ID PROJET: 2026-ALPHA',
    subtitle: 'Infrastructure Stratégique Sud-Sud',
    confidential: 'CONFIDENTIEL / PHASE D\'AMORÇAGE',
    prepared: 'PRÉPARÉ POUR LES INVESTISSEURS • AVRIL 2026',
    thesis: '01. Thèse de Marché',
    thesisDesc: 'Désintermédiation de la chaîne d\'approvisionnement mondiale entre',
    thesisChinaLatam: 'la Chine et l\'Amérique latine.',
    t1: 'Exclusion stratégique des marchés US/UE',
    t2: 'Alignement avec les Nouvelles Routes de la Soie (BRI)',
    t3: 'Focus : LatAm, Afrique, Moyen-Orient',
    sectors: 'Secteurs Cibles',
    agrotech: 'AGROTECH',
    biometrics: 'BIOMÉTRIE',
    iot: 'IOT ÉNERGIE',
    govtech: 'GOV-TECH',
    nucleus: '02. Noyau Technologique',
    platform: 'Plateforme Principale',
    agentsQuote: '"Une armée d\'agents autonomes pour l\'exploration instantanée de données des marchés publics de la BID/CAF et du gouvernement."',
    architecture: 'Architecture CTO',
    protocol: 'Protocole de Modèle',
    revenue: 'Moteur de Revenus',
    revSaaS: 'Modèle SaaS MRR',
    hub: '03. Hub Physique',
    hubDesc: 'Marque blanche de matériel à la source (Fournisseurs Tier 1).',
    china: 'SOURCING CHINE',
    chinaDesc: 'Courtage de Contrats d\'Usine',
    colombia: 'HUB COLOMBIE',
    colombiaDesc: 'Clusters GPU et Hébergement de Données',
    leadership: 'Direction Exécutive',
    ceo: 'Camilo Tamayo',
    ceoRole: 'CEO / Commerce Global',
    cto: 'J. E. Gómez Bernal',
    ctoRole: 'CTO / Architecte IA',
    ecosystem: '04. Écosystème et Services',
    ecosystemDesc: 'Déploiement opérationnel et technologique dans les secteurs critiques du Sud global.',
    svcAgrTitle: 'Systèmes Autonomes Agrotech',
    svcAgrDesc: 'Orchestration de drones et prévision des rendements via l\'imagerie satellitaire.',
    svcBioTitle: 'Biométrie et Identité IA',
    svcBioDesc: 'Gestion distribuée de l\'identité avec reconnaissance faciale en edge-computing.',
    svcIotTitle: 'Réseau Énergétique IoT',
    svcIotDesc: 'Équilibrage de réseaux intelligents intégrateurs matériels OEM chinois.',
    svcGovTitle: 'Structuration Gov-Tech',
    svcGovDesc: 'Réponse automatisée aux appels d\'offres et calibrage des propositions de l\'État.',
    portfolio: '05. Portefeuille et R&D',
    portfolioDesc: 'Dépôts et architectures de base développés à l\'origine par DOMINUSBABEL.',
    repo1: 'AGENTS.AI Core',
    repo1Desc: 'Framework multi-agents en Rust/TS pour l\'analyse d\'appels d\'offres.',
    repo2: 'BABEL-LLM',
    repo2Desc: 'Modèles affinés spécifiquement pour la terminologie légale et étatique d\'Amérique latine.',
    repo3: 'IoT-Sentinel',
    repo3Desc: 'Pont firmware connectant le matériel OEM chinois à notre cloud souverain.',
    repo4: 'GovTech-RAG',
    repo4Desc: 'Génération Augmentée par la Recherche pour les contraintes contractuelles d\'État complexes.',
    acervix: 'Consulting Stratégique par ACERVIX',
    acervixDesc: 'Soutien, conseil externe et mise à l\'échelle de l\'entreprise sous la direction stratégique de José David Gallego.',
    rights: 'CONSTITUTION S.A.S. • COLOMBIE 2026 • TOUS DROITS RÉSERVÉS',
    edition: 'ÉDITION AVRIL 2026',
    viewGithub: 'VOIR SUR GITHUB',
    navHome: 'Accueil',
    navAbout: 'À Propos',
    navServices: 'Services',
    navTech: 'Technologie'
  }
};

@Injectable({
  providedIn: 'root'
})
export class I18nService {
  private _lang = signal<Lang>('es');
  
  readonly t = computed(() => TRANSLATIONS[this._lang()]);
  readonly lang = this._lang.asReadonly();

  setLang(l: Lang) {
    this._lang.set(l);
  }
}
