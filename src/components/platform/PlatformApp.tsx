import { useState, type ComponentType, type CSSProperties } from 'react';
import { ArrowDownRight, ArrowRight, Book, BookOpen, Clock3, Flower2, Gamepad2, Globe2, Joystick, Layers3, Menu, Orbit, X } from 'lucide-react';
import { motion, MotionConfig } from 'motion/react';
import { productos as registryProducts, type Producto } from '../../data/evolucion';
import { ThemeToggle } from './ArchiveChrome';

type Product = { name: string; shortName: string; version: string; status: string; icon: ComponentType<{ size?: number; strokeWidth?: number }>; slug: string; accent: string; index: string; source: Producto; };
const icons: Record<string, Product['icon']> = { time: Clock3, edu: BookOpen, book: Book, game: Gamepad2, multitasking: Layers3, octopus: Orbit, distapria: Joystick, fleurox: Flower2 };
const accents = ['#8ad9ff', '#a991ff', '#c1b4ff', '#6498ff', '#72a7ff', '#9f7cff', '#75e2ce', '#f0a3d6'];
const products: Product[] = registryProducts.map((product, index) => ({
  name: product.nombre,
  shortName: product.nombre.replace('Distamus ', '').toUpperCase(),
  version: product.versionActual,
  status: product.estadoTexto,
  icon: icons[product.slug] || Orbit,
  slug: product.slug,
  accent: accents[index % accents.length],
  index: product.orden,
  source: product,
}));

const heroHistory = [
  { year: 'ORIGEN', label: 'DISTAMUS TIME' }, { year: 'FASE I', label: 'EDU / BOOK / GAME' },
  { year: 'PORTAL', label: 'DISTAMUS HOME' }, { year: 'FASE II', label: 'MULTITASKING / OCTOPUS' },
  { year: 'AHORA', label: 'ECOSISTEMA ACTUAL', current: true },
];
const rise = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } };

function Mark({ className = '' }: { className?: string }) {
  return <svg className={className} viewBox="0 0 256 256" aria-hidden="true"><path fill="currentColor" fillRule="evenodd" d="M157.5 53.38c8.4.2 8.8 2.9 5.2 8.2L153 74.8c-4.2 6.8 2.8 16.6 12.6 16.7 8.4.1 10.2-4.6 16.1-11.8 5-6.2 7.8-5.1 10.1-1.1 4.3 15.8-8.4 35.4-28.6 36.7-5 .3-21.7 21.8-39.2 44.5 3.6 15.8-2.5 30.3-15.8 38.4-7.6 4.7-15.2 5.6-16.6.7-.8-2.9 2.6-7 5.6-11.1 8.9-12.1 6-22.5-3.8-22-9.9.5-14 9-22 14.3-5.2 3.4-8.7-1.9-8.5-8.9.6-16 13.4-29 30.2-29.8 5.3-.3 22.8-22.3 38.1-42.4 1.9-2.5.3-7.1.3-11.1 0-18.1 11.1-31.9 25.5-34.5Z" /></svg>;
}

function Navigation() {
  const [open, setOpen] = useState(false);
  const links = [['PLATFORM', '#top'], ['PRODUCTOS', '#products'], ['ARCHIVO', '#archive'], ['CRONOLOGÍA', '#timeline'], ['SOBRE NOSOTROS', '/sobre-nosotros']];
  return <motion.header initial={{ opacity: 0, y: -18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9 }} className="nav-shell">
    <a href="#top" className="brand-lockup" aria-label="Distamus Platform, inicio"><span className="brand-symbol"><Mark /></span><span>DISTAMUS</span></a>
    <nav className="desktop-nav" aria-label="Navegación principal">{links.map(([name, href], index) => <a key={name} href={href} className={index === 0 ? 'active' : ''}>{name}</a>)}</nav>
    <div className="nav-meta"><span className="nav-descriptor">La evolución de Distamus,<br />preservada en un solo lugar.</span><span className="open-tag"><Globe2 size={13} /> ARCHIVO ABIERTO</span><ThemeToggle /></div>
    <span className="header-theme"><ThemeToggle /></span>
    <button className="menu-button" onClick={() => setOpen(!open)} aria-expanded={open} aria-label={open ? 'Cerrar menú' : 'Abrir menú'}>{open ? <X size={20} /> : <Menu size={20} />}</button>
    {open && <motion.nav initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} className="mobile-nav" aria-label="Navegación móvil">{links.map(([name, href]) => <a key={name} href={href} onClick={() => setOpen(false)}>{name}</a>)}<span><Globe2 size={13} /> ARCHIVO ABIERTO DE VERSIONES</span></motion.nav>}
  </motion.header>;
}

function ArchiveMonolith() {
  return <motion.div initial={{ opacity: 0, scale: 0.9, y: 24 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ duration: 1.5, delay: 0.45, ease: [0.16, 1, 0.3, 1] }} className="monolith-scene" aria-hidden="true">
    <div className="monolith-halo" /><motion.div animate={{ y: [0, -10, 0], rotateY: [-3, 3, -3] }} transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }} className="monolith">
      <div className="monolith-edge monolith-edge-left" /><div className="monolith-edge monolith-edge-right" /><div className="monolith-shine" /><div className="monolith-core"><Mark /></div><div className="monolith-code">ARCHIVO<br />D–001</div>
    </motion.div><div className="monolith-base"><span /></div>
  </motion.div>;
}

function HeroTimeline() {
  return <aside className="hero-timeline" aria-label="Resumen cronológico de Distamus"><span className="timeline-title">HISTORIA / 001—005</span><div className="timeline-track">{heroHistory.map((item, index) => <motion.div key={item.year} initial={{ opacity: 0, x: 16 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.7 + index * 0.14, duration: 0.6 }} className={`timeline-event ${item.current ? 'current' : ''}`}><span className="timeline-dot" /><span className="timeline-year">{item.year}</span><span className="timeline-label">{item.label}</span></motion.div>)}</div></aside>;
}

function Hero() {
  return <section className="hero-section" id="top"><div className="hero-copy">
    <motion.p initial="hidden" animate="visible" variants={rise} transition={{ delay: 0.18, duration: 0.7 }} className="hero-kicker">ARCHIVO DE VERSIONES DISTAMUS</motion.p>
    <motion.h1 initial="hidden" animate="visible" variants={rise} transition={{ delay: 0.28, duration: 0.9 }}><span>DISTAMUS</span><span className="platform-word">PLATFORM</span></motion.h1>
    <motion.p initial="hidden" animate="visible" variants={rise} transition={{ delay: 0.45, duration: 0.75 }} className="hero-statement">La evolución de Distamus,<br />preservada en un solo lugar.</motion.p>
    <motion.div initial="hidden" animate="visible" variants={rise} transition={{ delay: 0.58, duration: 0.75 }} className="hero-actions"><a href="#products" className="primary-action">EXPLORAR PRODUCTOS <ArrowRight size={16} /></a><a href="#timeline" className="secondary-action">VER CRONOLOGÍA</a></motion.div>
  </div><ArchiveMonolith /><HeroTimeline /><div className="hero-index" aria-hidden="true">01<br /><span>ENTRADA AL<br />ARCHIVO</span></div><a href="#products" className="scroll-cue" aria-label="Bajar a productos"><span>DESLIZA PARA ENTRAR</span><ArrowDownRight size={18} /></a></section>;
}

function ProductCard({ product, index }: { product: Product; index: number }) {
  const Icon = product.icon;
  return <motion.a href={`/producto/${product.slug}`} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={rise} transition={{ delay: index * 0.07, duration: 0.65 }} whileHover={{ y: -6 }} className="product-card liquid-glass" style={{ '--accent': product.accent } as CSSProperties}>
    <div className="card-glow" /><div className="card-top"><span>{product.index} / {String(products.length).padStart(2, '0')}</span><span className="status-light">REGISTRO</span></div><div className="product-icon"><Icon size={27} strokeWidth={1.35} /></div><div className="product-body"><p>{product.name.startsWith('Distamus ') ? 'DISTAMUS' : 'ARCHIVO'}</p><h3>{product.shortName}</h3><div className="version-row"><strong>{product.version}</strong><span>{product.status}</span></div></div><span className="card-arrow"><ArrowRight size={18} /></span>
  </motion.a>;
}

function SectionIntro({ index, eyebrow, title, copy }: { index: string; eyebrow: string; title: string; copy: string }) {
  return <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }} variants={rise} transition={{ duration: 0.8 }} className="section-intro"><span className="section-number">{index}</span><div><p className="eyebrow">{eyebrow}</p><h2>{title}</h2></div><p className="section-copy">{copy}</p></motion.div>;
}

function ProductsSection() { return <section className="content-section products-section" id="products"><SectionIntro index="02" eyebrow="EL ECOSISTEMA DISTAMUS" title="PRODUCTOS" copy={`${products.length} historias de producto. Un sistema en evolución. Cada objeto abre una línea de desarrollo preservada.`} /><div className="products-grid">{products.map((product, index) => <ProductCard key={product.name} product={product} index={index} />)}</div></section>; }

function RegistryPhases() {
  const phases = [
    { key: 'origen', number: 'I', title: 'FASE INICIAL', copy: 'Los productos originales. Time abre la cronología; después llegan Edu, Book y Game.' },
    { key: 'integracion', number: 'II', title: 'FASE DE INTEGRACIÓN', copy: 'Los productos empiezan a conectarse, absorber funciones y formar un ecosistema compartido.' },
  ] as const;
  return <section className="content-section phases-section" id="phases"><SectionIntro index="03" eyebrow="LAS DOS ETAPAS DEL ARCHIVO" title="LA EVOLUCIÓN" copy="La historia se conserva en dos fases distintas. El orden y las versiones proceden directamente del registro." /><div className="phase-grid">{phases.map((phase, phaseIndex) => <motion.article key={phase.key} initial="hidden" whileInView="visible" viewport={{ once: true, amount: .2 }} variants={rise} className="phase-column liquid-glass"><header><span>{phase.number}</span><div><p>ETAPA {phaseIndex + 1}</p><h3>{phase.title}</h3><small>{phase.copy}</small></div></header><div className="phase-products">{registryProducts.filter(product => product.etapa === phase.key).map((product, index) => <a href={`/producto/${product.slug}`} key={product.slug}><span>{String(index + 1).padStart(2, '0')}</span><div><strong>{product.nombre}</strong><small>{product.lema}</small><em>{product.versiones.map(version => version.etiqueta).join('  →  ')}</em>{product.curiosidad && <mark>DATO CURIOSO / {product.curiosidad.titulo}</mark>}</div><b>{product.versionActual}</b><ArrowRight size={14} /></a>)}</div></motion.article>)}</div></section>;
}

function ArchiveSection() {
  const [activeProduct, setActiveProduct] = useState(0);
  const [activeVersion, setActiveVersion] = useState(0);
  const product = registryProducts[activeProduct];
  const version = product.versiones[activeVersion] || product.versiones[0];
  return <section className="content-section archive-section" id="archive"><SectionIntro index="04" eyebrow="CADA VERSIÓN FORMA PARTE DE LA HISTORIA" title="EL ARCHIVO" copy="Selecciona un producto y recorre sus versiones reales. No hay nodos genéricos: cada punto pertenece al registro histórico." /><div className="archive-product-tabs" role="tablist" aria-label="Seleccionar producto">{registryProducts.map((item, index) => <button key={item.slug} className={activeProduct === index ? 'active' : ''} onClick={() => { setActiveProduct(index); setActiveVersion(0); }}>{item.nombre.replace('Distamus ', '')}</button>)}</div><motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 1 }} className="archive-rail real-archive liquid-glass"><div className="archive-line" /><div className="archive-nodes">{product.versiones.map((item, index) => <button key={`${item.etiqueta}-${index}`} className={`archive-node ${activeVersion === index ? 'active' : ''}`} onMouseEnter={() => setActiveVersion(index)} onFocus={() => setActiveVersion(index)} onClick={() => setActiveVersion(index)}><span className="node-point" /><strong>{item.etiqueta}</strong><span>{item.fecha || (item.sinRegistro ? 'SIN REGISTRO' : 'REGISTRO')}</span></button>)}</div><motion.div className="archive-detail" key={`${product.slug}-${activeVersion}`} initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }}><span>{product.nombre} / {version.etiqueta}</span><strong>{version.titular || 'Versión preservada sin detalle público'}</strong></motion.div></motion.div></section>;
}

function EvolutionTimeline() {
  const events = [['ORIGEN', 'DISTAMUS TIME', 'El primer producto y la línea de versiones más extensa.'], ['FASE INICIAL', 'EDU / BOOK / GAME', 'Los productos originales toman forma.'], ['PORTAL', 'DISTAMUS HOME', 'Home reúne el ecosistema sin ser un servicio.'], ['INTEGRACIÓN', 'MULTITASKING / OCTOPUS', 'Las funciones y productos empiezan a conectarse.'], ['PRESENTE', 'UN ECOSISTEMA', 'La historia y sus líneas abiertas continúan.']];
  return <section className="content-section evolution-section" id="timeline"><SectionIntro index="05" eyebrow="2022 — PRESENTE" title="CRONOLOGÍA" copy="Los productos aparecen, convergen y continúan. No es una hoja de ruta: es la memoria del ecosistema." /><div className="evolution-map"><div className="evolution-spine" />{events.map(([year, title, copy], index) => <motion.article key={year} initial={{ opacity: 0, x: index % 2 ? 32 : -32 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.45 }} transition={{ duration: 0.7 }} className={`evolution-event ${index % 2 ? 'right' : 'left'}`}><span className="evolution-dot" /><p>{year}</p><h3>{title}</h3><span>{copy}</span></motion.article>)}</div></section>;
}

function FinalStatement() { return <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.35 }} transition={{ duration: 1 }} className="final-statement"><p>MÁS QUE PRODUCTOS.</p><h2>UNA EVOLUCIÓN<br /><span>COMPARTIDA.</span></h2><div><Mark /><span>DISTAMUS PLATFORM<br /><small>2022 — PRESENTE</small></span></div></motion.section>; }

function Footer() {
  const groups = [['PLATAFORMA', 'Vista general', 'Productos', 'Archivo', 'Cronología', 'Historia'], ['SERVICIOS', ...registryProducts.map(product => product.nombre)],['INFORMACIÓN', 'Sobre la plataforma', 'Registro de versiones', 'Privacidad', 'Legal', 'Contacto']];
  return <motion.footer initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 1, delay: 0.15, ease: 'easeOut' }} className="liquid-glass site-footer"><div className="footer-grid"><div className="footer-brand"><Mark /><h2>DISTAMUS<br /><span>PLATFORM</span></h2><p>Archivo de versiones</p><small>El archivo central de la evolución,<br />las versiones y la historia de los productos Distamus.</small></div><div className="footer-links">{groups.map(([heading, ...links]) => <div key={heading}><h3>{heading}</h3>{links.map(link => <a href={registryProducts.find(product => product.nombre === link) ? `/producto/${registryProducts.find(product => product.nombre === link)!.slug}` : link === 'Productos' ? '#products' : link === 'Archivo' ? '#archive' : link === 'Cronología' ? '#timeline' : '#top'} key={link}>{link}</a>)}</div>)}</div></div><div className="footer-bottom"><span>DISTAMUS PLATFORM</span><span>ARCHIVO ABIERTO DE VERSIONES</span><span>2022 — PRESENTE</span></div></motion.footer>;
}

export default function PlatformApp() {
  return <MotionConfig reducedMotion="user"><main className="platform-main"><video className="background-video" autoPlay loop muted playsInline aria-hidden="true" src="https://cdn.pixabay.com/video/2021/10/05/90877-629483574_large.mp4" /><div className="atmosphere" aria-hidden="true"><span className="orb orb-one" /><span className="orb orb-two" /><span className="noise" /></div><Navigation /><Hero /><div className="page-surface"><ProductsSection /><RegistryPhases /><ArchiveSection /><EvolutionTimeline /><FinalStatement /><Footer /></div></main></MotionConfig>;
}
