import { ArrowLeft, Globe2, Menu, Moon, Sun, X } from 'lucide-react';
import { motion } from 'motion/react';
import { useEffect, useState, type ReactNode } from 'react';
import { productos } from '../../data/evolucion';

type Theme = 'dark' | 'light';

/**
 * Cambia entre modo claro y oscuro. El tema inicial lo fija Layout.astro
 * antes de pintar (lo guardado en 'distamus-theme' o, si no hay, el del
 * sistema); aquí solo se lee y se alterna.
 */
export function ThemeToggle({ withLabel = false }: { withLabel?: boolean }) {
  const [theme, setTheme] = useState<Theme>('dark');
  useEffect(() => {
    setTheme(document.documentElement.getAttribute('data-theme') === 'light' ? 'light' : 'dark');
  }, []);

  const apply = (next: Theme) => {
    document.documentElement.setAttribute('data-theme', next);
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', next === 'light' ? '#f6f4fb' : '#070512');
    try { localStorage.setItem('distamus-theme', next); } catch { /* sin almacenamiento */ }
    setTheme(next);
  };

  const toggle = () => apply(theme === 'dark' ? 'light' : 'dark');

  // En los menús móviles: un selector de dos opciones, con las dos a la vista
  // y la activa marcada, en lugar de un botón que solo dice a qué cambia.
  if (withLabel) {
    return <div className="theme-switch" role="radiogroup" aria-label="Tema">
      <button type="button" role="radio" aria-checked={theme === 'light'} className={theme === 'light' ? 'active' : ''} onClick={() => apply('light')}><Sun size={15} /><span>CLARO</span></button>
      <button type="button" role="radio" aria-checked={theme === 'dark'} className={theme === 'dark' ? 'active' : ''} onClick={() => apply('dark')}><Moon size={15} /><span>OSCURO</span></button>
    </div>;
  }

  const label = theme === 'dark' ? 'Modo claro' : 'Modo oscuro';
  return <button type="button" className="theme-toggle" onClick={toggle} aria-label={`Cambiar a ${label.toLowerCase()}`} title={label}>
    {theme === 'dark' ? <Sun size={14} /> : <Moon size={14} />}
    {withLabel && <span>{label.toUpperCase()}</span>}
  </button>;
}

export function ArchiveMark({ className = '' }: { className?: string }) {
  return <svg className={className} viewBox="0 0 256 256" aria-hidden="true"><path fill="currentColor" fillRule="evenodd" d="M157.5 53.38c8.4.2 8.8 2.9 5.2 8.2L153 74.8c-4.2 6.8 2.8 16.6 12.6 16.7 8.4.1 10.2-4.6 16.1-11.8 5-6.2 7.8-5.1 10.1-1.1 4.3 15.8-8.4 35.4-28.6 36.7-5 .3-21.7 21.8-39.2 44.5 3.6 15.8-2.5 30.3-15.8 38.4-7.6 4.7-15.2 5.6-16.6.7-.8-2.9 2.6-7 5.6-11.1 8.9-12.1 6-22.5-3.8-22-9.9.5-14 9-22 14.3-5.2 3.4-8.7-1.9-8.5-8.9.6-16 13.4-29 30.2-29.8 5.3-.3 22.8-22.3 38.1-42.4 1.9-2.5.3-7.1.3-11.1 0-18.1 11.1-31.9 25.5-34.5Z" /></svg>;
}

export function ArchiveNav({ current }: { current?: string }) {
  const [open, setOpen] = useState(false);
  const links = [['PLATFORM', '/'], ['PRODUCTOS', '/#products'], ['ARCHIVO', '/#archive'], ['SOBRE NOSOTROS', '/sobre-nosotros']];
  return <motion.header initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .8 }} className="interior-nav">
    <a href="/" className="interior-brand"><span><ArchiveMark /></span>DISTAMUS</a>
    <nav aria-label="Navegación principal">{links.map(([label, href]) => <a key={label} href={href} className={current === label ? 'active' : ''}>{label}</a>)}</nav>
    <div className="interior-open"><Globe2 size={13} /> ARCHIVO ABIERTO <ThemeToggle /></div>
    <span className="header-theme"><ThemeToggle /></span>
    <button onClick={() => setOpen(!open)} aria-label={open ? 'Cerrar menú' : 'Abrir menú'} aria-expanded={open}>{open ? <X size={19} /> : <Menu size={19} />}</button>
    {open && <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} className="interior-mobile">{links.map(([label, href]) => <a key={label} href={href}>{label}</a>)}</motion.div>}
  </motion.header>;
}

export function ArchiveBackdrop() {
  return <><video className="background-video" autoPlay loop muted playsInline aria-hidden="true" src="https://cdn.pixabay.com/video/2021/10/05/90877-629483574_large.mp4" /><div className="interior-atmosphere" aria-hidden="true"><i /><i /></div></>;
}

export function BackLink({ children = 'Volver al archivo' }: { children?: ReactNode }) {
  return <a className="interior-back" href="/#products"><ArrowLeft size={14} />{children}</a>;
}

export function ArchiveFooter() {
  return <footer className="interior-footer liquid-glass"><div><ArchiveMark /><span><strong>DISTAMUS PLATFORM</strong><small>ARCHIVO ABIERTO DE VERSIONES</small></span></div><nav><a href="/">Vista general</a><a href="/#products">Productos</a><a href="/#archive">Archivo</a><a href="/sobre-nosotros">Nosotros</a></nav><nav className="footer-services" aria-label="Servicios">{productos.map(product => <a key={product.slug} href={`/producto/${product.slug}`}>{product.nombre}</a>)}</nav><span>2022 — PRESENTE</span></footer>;
}
