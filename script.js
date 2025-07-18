const { useState, useEffect } = React;

function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    function handleClick(e) {
      if (open && !e.target.closest('.nav') && !e.target.closest('.menu-toggle')) {
        setOpen(false);
      }
    }
    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, [open]);

  return (
    <header className="header scroll-item">
      <button
        className={`menu-toggle${open ? ' open' : ''}`}
        aria-label="Menú"
        onClick={() => setOpen(!open)}
      >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>
      <div className="logo">
        <a href="#top">MX Analytics</a>
      </div>
      <nav className={`nav${open ? ' open' : ''}`} aria-label="Navegación principal">
        <ul>
          <li>
            <a href="#sobre" onClick={() => setOpen(false)}>
              Sobre
            </a>
          </li>
          <li>
            <a href="#servicios" onClick={() => setOpen(false)}>
              Servicios
            </a>
          </li>
          <li>
            <a href="#valores" onClick={() => setOpen(false)}>
              Valores
            </a>
          </li>
          <li>
            <a href="#contacto" onClick={() => setOpen(false)}>
              Contacto
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero scroll-item">
      <div className="hero-content">
        <div className="hero-logo-container">
          <img src="Logo_White_Transparente.png" alt="Logotipo de MX Analytics" className="hero-logo" />
        </div>
        <h1 className="tagline">Inteligencia para decisiones estratégicas</h1>
        <a className="cta-btn" href="#contacto">
          Contáctanos
        </a>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="sobre" className="card scroll-item">
      <h2>Sobre nosotros</h2>
      <p>
        Somos una consultoría mexicana especializada en transformar datos en conocimiento accionable. Desde
        2023 acompañamos a organizaciones de distintos sectores a impulsar su crecimiento a través de estrategias
        analíticas adaptadas a sus objetivos.
      </p>
      <p>
        Nuestro equipo combina experiencia en ciencia de datos y gestión empresarial para ofrecer soluciones
        integrales que aumentan la competitividad. Creemos en la innovación constante y en la colaboración
        cercana con nuestros clientes para entregar resultados medibles.
      </p>
    </section>
  );
}

function Services() {
  return (
    <section id="servicios" className="card scroll-item">
      <h2>Servicios</h2>
      <details className="collapsible-card">
        <summary>Estrategia de Datos</summary>
        <p>
          En este servicio analizamos sus procesos y fuentes de información para diseñar una estrategia que optimice el
          ciclo de vida de los datos. Evaluamos la calidad de los registros e identificamos oportunidades de integración,
          garantizando consistencia y disponibilidad. Incorporamos metodologías de gobierno y seguridad para resguardar la
          veracidad de la información. Creamos un plan de implementación escalable que facilita la adopción de prácticas
          analíticas. Con ello, su organización estará preparada para extraer valor real de sus datos.
        </p>
      </details>
      <details className="collapsible-card">
        <summary>Business Intelligence</summary>
        <p>
          Nuestro equipo implementa soluciones de Business Intelligence adaptadas a las necesidades de su empresa.
          Diseñamos dashboards interactivos y modelos de reporte que simplifican el acceso a indicadores clave.
          Utilizamos herramientas de vanguardia que permiten conectar diversas bases de datos sin sacrificar
          rendimiento. Integrar analítica avanzada y segmentación estadística ayuda a descubrir tendencias y patrones
          ocultos. Finalmente, capacitamos a los usuarios para que aprovechen cada panel de información de forma
          autónoma.
        </p>
      </details>
      <details className="collapsible-card">
        <summary>Capacitación y Acompañamiento</summary>
        <p>
          A través de sesiones personalizadas, capacitamos a su equipo en el uso de herramientas de análisis y
          visualización. Compartimos mejores prácticas para estructurar modelos de datos y documentar procesos de
          extracción. Supervisamos la implementación de metodologías ágiles en proyectos analíticos, fomentando la
          colaboración entre áreas. Resolviendo dudas en tiempo real, aseguramos que cada integrante domine los
          conceptos críticos de Business Intelligence. Con este acompañamiento, sus profesionales consolidan una cultura
          de datos sostenible.
        </p>
      </details>
    </section>
  );
}

function Values() {
  return (
    <section id="valores" className="card scroll-item">
      <h2>Nuestros valores</h2>
      <ul className="values-list">
        <li>Compromiso con la calidad en cada proyecto</li>
        <li>Confidencialidad absoluta de la información</li>
        <li>Innovación para ofrecer soluciones de vanguardia</li>
      </ul>
    </section>
  );
}

function Contact() {
  return (
    <section id="contacto" className="card scroll-item">
      <h2>Contacto</h2>
      <div className="contact-card">
        <i className="fa-solid fa-envelope"></i>
        <span>
          Email: <a href="mailto:alfredo.mxanalytics@gmail.com">alfredo.mxanalytics@gmail.com</a>
        </span>
      </div>
      <div className="contact-card">
        <i className="fa-brands fa-whatsapp"></i>
        <span>
          WhatsApp:{' '}
          <a href="https://wa.me/5215618873282?text=Me%20interesan%20los%20servicios%20de%20MX%20Analytics">
            (56) 1887 3282
          </a>
        </span>
      </div>
      <div className="contact-card">
        <i className="fa-brands fa-instagram"></i>
        <span>
          Instagram:{' '}
          <a href="https://www.instagram.com/alfredo.mxanalytics/">@alfredo.mxanalytics</a>
        </span>
      </div>
      <div className="contact-card">
        <i className="fa-brands fa-linkedin"></i>
        <span>
          LinkedIn:{' '}
          <a href="https://www.linkedin.com/in/alfredo-mxanalytics/">Alfredo en LinkedIn</a>
        </span>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer scroll-item">
      <p>&copy; 2024 MX Analytics. Todos los derechos reservados.</p>
    </footer>
  );
}

function App() {
  useEffect(() => {
    const topBtn = document.querySelector('.top-btn');
    if (topBtn) {
      topBtn.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );
    document.querySelectorAll('.scroll-item').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Header />
      <main>
      <Hero />
      <h1 className="page-title scroll-item">Impulsa tu negocio con datos de valor</h1>
      <About />
      <Services />
      <Values />
      <Contact />
      </main>
      <Footer />
      <a href="#top" className="btn-floating top-btn" aria-label="Volver arriba">
        <i className="fa-solid fa-arrow-up"></i>
      </a>
      <a
        href="https://wa.me/5215618873282?text=Me%20interesan%20los%20servicios%20de%20MX%20Analytics"
        target="_blank"
        className="btn-floating whatsapp-btn"
        aria-label="WhatsApp"
      >
        <i className="fa-brands fa-whatsapp"></i>
      </a>
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
