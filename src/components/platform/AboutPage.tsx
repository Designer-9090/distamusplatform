import { ArrowRight, Check, Sparkles } from 'lucide-react';
import { motion, MotionConfig } from 'motion/react';
import { ArchiveBackdrop, ArchiveFooter, ArchiveMark, ArchiveNav } from './ArchiveChrome';

const milestones = [
  ['2022', 'La concepción', 'Distamus se concibe como idea: un proyecto propio, con identidad técnica y visión a largo plazo.'],
  ['2023', 'Toma forma', 'El proyecto se materializa y empieza a construirse de verdad, en España.'],
  ['2025', 'De Designer a Distamus', 'El nombre cambia. La esencia no: Designer sobrevive en la D.'],
  ['2026', 'El gran pilar', 'Nuevas apps y servicios convierten el conjunto de productos en un ecosistema.'],
];
const year2026 = [
  ['Distamus Multitasking', 'De la v1.5 a la v2.42, con Time integrado, Flow y Widgets'],
  ['Distamus Edu v6', 'Reconstrucción completa sobre Astro'],
  ['Distamus Octopus', 'Beta v0.75: IA en el navegador y el modo Vídeo'],
  ['Distamus Windows', 'El ecosistema, instalable en tu PC'],
  ['Distapria', 'La sala recreativa: abierta en agosto, 1.01 en octubre'],
  ['Distamus Fleurox', 'La primera herramienta interna, para los equipos'],
  ['Pixel Abyss', 'Distamus Game desarrolla un juego real para Windows'],
];
const acronym = [
  ['D', 'Designer', 'Nuestro origen.'], ['I', 'Innova', 'Nunca dejamos de mejorar.'],
  ['S', 'Servicios', 'Pensados para aportar valor.'], ['T', 'Todos', 'Accesibles para cualquier persona.'],
  ['A', 'Ampliando', 'Soluciones y horizontes.'], ['M', 'Mejoras', 'Como constante.'],
  ['U', 'Usuarios', 'El centro de todo.'], ['S', 'Soporte', 'Para acompañarte siempre.'],
];
const enter = { hidden: { opacity: 0, y: 28 }, visible: { opacity: 1, y: 0 } };

export default function AboutPage() {
  return <MotionConfig reducedMotion="user"><main className="platform-main interior-main"><ArchiveBackdrop /><ArchiveNav current="SOBRE NOSOTROS" />
    <section className="about-hero interior-hero">
      <div className="about-hero-copy"><motion.p initial="hidden" animate="visible" variants={enter} transition={{ delay: .15 }}>SOBRE / DISTAMUS</motion.p><motion.h1 initial="hidden" animate="visible" variants={enter} transition={{ delay: .28, duration: .8 }}><span className="about-title-line about-title-line--bright">UNA IDEA</span><span className="about-title-line">QUE SIGUIÓ</span><span className="about-title-line about-title-line--bright">EVOLUCIONANDO.</span></motion.h1><motion.div initial="hidden" animate="visible" variants={enter} transition={{ delay: .42 }}><p>Distamus es un equipo apasionado y comprometido con la creación diaria de aplicaciones innovadoras, pensadas para generar un impacto positivo en la comunidad global.</p><span>Concebido en 2022<br />Materializado en 2023</span></motion.div></div>
      <motion.div initial={{ opacity: 0, scale: .9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: .35, duration: 1.1 }} className="about-artifact" aria-hidden="true"><div><ArchiveMark /></div><span>IDENTIDAD<br />ARCHIVO / D</span></motion.div>
    </section>

    <div className="interior-surface">
      <section className="interior-content origin-section"><header className="editorial-head"><span>01</span><div><p>NUESTRO ORIGEN</p><h2>TECNOLOGÍA<br />HUMANA.</h2></div><p>Una iniciativa española con una visión sencilla: mejorar la vida diaria a través de herramientas digitales que entiendan necesidades reales.</p></header>
        <div className="manifesto-grid"><motion.article initial="hidden" whileInView="visible" viewport={{ once: true }} variants={enter}><p>En una era definida por la interconexión global, la tecnología se ha convertido en una herramienta esencial para mejorar la calidad de vida. En ese contexto surge Distamus: una iniciativa española que destaca por su enfoque humano, su visión innovadora y su firme compromiso con el desarrollo colaborativo.</p><p>Distamus nació para transformar rutinas cotidianas mediante soluciones digitales accesibles e inteligentes. Desde su concepción en 2022 y su consolidación en 2023, el objetivo ha sido diseñar aplicaciones útiles, intuitivas y centradas en el usuario, sin importar el lugar del mundo desde el que se utilicen.</p></motion.article><motion.aside initial="hidden" whileInView="visible" viewport={{ once: true }} variants={enter} className="vision-object liquid-glass"><Sparkles size={20} /><span>NUESTRA VISIÓN</span><h3>Mejorar la vida diaria a través de la tecnología.</h3><p>Ya sea ayudando a gestionar tareas, organizar actividades, fomentar el bienestar o facilitar la comunicación, cada aplicación nace del análisis real de las necesidades del usuario. La innovación solo tiene sentido si está al servicio de la utilidad y la empatía.</p></motion.aside></div>
      </section>

      <section className="interior-content history-section"><header className="editorial-head"><span>02</span><div><p>2022 — PRESENTE</p><h2>LA HISTORIA.</h2></div><p>Cuatro momentos que explican cómo una idea se convirtió en un ecosistema.</p></header><div className="milestone-rail">{milestones.map(([year, title, copy], i) => <motion.article key={year} initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * .08 }}><span>{year}</span><i /><h3>{title}</h3><p>{copy}</p></motion.article>)}</div>
      </section>

      <section className="interior-content pillar-section"><header className="editorial-head"><span>03</span><div><p>EL AÑO PILAR</p><h2>2026.</h2></div><p>El año en que el archivo se expande de golpe: nuevas aplicaciones, servicios y una arquitectura compartida.</p></header><div className="pillar-object liquid-glass"><div className="pillar-number">20<span>26</span></div><div className="pillar-list">{year2026.map(([name, detail], i) => <motion.div key={name} initial={{ opacity: 0, x: 18 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * .07 }}><Check size={13} /><strong>{name}</strong><span>{detail}</span></motion.div>)}<p className="pillar-note">De Pixel Abyss todavía no podemos dar mucha información.</p></div></div>
      </section>

      <section className="interior-content identity-section"><header className="editorial-head"><span>04</span><div><p>2025 / IDENTIDAD</p><h2>DESIGNER<br /><span>SE CONVIRTIÓ EN DISTAMUS.</span></h2></div><p>El dominio cambió. La ambición creció. El origen se quedó para siempre dentro del nombre.</p></header><div className="name-shift"><span>DESIGNER</span><ArrowRight /><strong>DISTAMUS</strong></div><p className="identity-copy">Lo que hoy somos empezó con un sueño llamado Designer. Con el tiempo crecieron la comunidad, los servicios y la visión. El cambio de nombre respondió a una necesidad técnica —la adquisición de un dominio propio— y simbolizó una etapa de consolidación, enfoque y proyección global. Designer no desapareció: se convirtió en la primera letra de Distamus.</p><div className="acronym-grid">{acronym.map(([letter, word, copy], i) => <motion.article key={`${letter}-${word}`} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * .04 }} className={i === 0 ? 'origin-letter' : ''}><span>{letter}</span><strong>{word}</strong><p>{copy}</p></motion.article>)}</div>
      </section>

      <motion.section initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="about-closing"><p>DISTAMUS ES MÁS QUE UN PROYECTO TECNOLÓGICO.</p><h2>UNA PROPUESTA<br /><span>DE CAMBIO.</span></h2><p className="closing-copy">Una apuesta por herramientas digitales que impacten positivamente en la sociedad. Con una misión transparente, un espíritu colaborativo y una vocación constante por la mejora, Distamus avanza hacia un futuro más accesible, conectado y humano.</p><a href="/#products">EXPLORAR EL ARCHIVO <ArrowRight size={16} /></a></motion.section><ArchiveFooter />
    </div>
  </main></MotionConfig>;
}
