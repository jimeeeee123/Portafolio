"use client";

import { useState } from "react";
import Image from "next/image";

interface ProjectItem {
  number: string;
  title: string;
  category: string;
  description: string;
  background: string;
  details: string;
  links?: { label: string; url: string }[];
  images?: { src: string; alt: string; caption?: string }[];
  highlights?: string[];
}

const projects: ProjectItem[] = [
  {
    number: "01",
    title: "Regresión lineal",
    category: "ANÁLISIS DE DATOS",
    description:
      "Exploración de datos, identificación de relaciones e interpretación de resultados.",
    background: "#E7D7C3",
    details:
      "Análisis estadístico mediante regresión lineal para explorar tendencias, evaluar relaciones entre variables y comunicar los hallazgos de forma clara.",
    links: [
      {
        label: "Abrir notebook en Google Colab",
        url: "https://colab.research.google.com/drive/1dr9DL8yQDC4IylZUJWXTEiXl8ibLeFZ5?usp=sharing",
      },
    ],
    images: [
      {
        src: "/imagenes/linea.png",
        alt: "Gráfico y resultados de regresión lineal",
        caption: "Evidencia visual del modelo de regresión lineal.",
      },
    ],
  },
  {
    number: "02",
    title: "Laberinto",
    category: "ALGORITMOS",
    description:
      "Un reto de lógica y resolución de problemas mediante algoritmos y árboles de decisión.",
    background: "#D9DCCB",
    details:
      "Proyecto enfocado en lógica, recorridos y toma de decisiones dentro de un laberinto utilizando algoritmos y estructuras de decisión.",
    images: [
      {
        src: "/imagenes/maze.png",
        alt: "Vista del proyecto Laberinto - maze",
        caption: "Recorrido y estructura del laberinto.",
      },
      {
        src: "/imagenes/terror.png",
        alt: "Vista del proyecto Laberinto - terror",
        caption: "Escena y dinámica visual del proyecto.",
      },
    ],
  },
  {
    number: "03",
    title: "AI Challenge",
    category: "MACHINE LEARNING",
    description:
      "Exploración de K-Means y KNN para trabajar con datos y descubrir patrones.",
    background: "#E8CFC0",
    details:
      "Implementación y experimentación con algoritmos de aprendizaje automático (K-Means y KNN) para analizar conjuntos de datos y clasificar patrones.",
    links: [
      {
        label: "Abrir notebook en Google Colab",
        url: "https://colab.research.google.com/drive/1tPrG0bPvE_7vzIuuVUTei3cwAz4EzVaK?usp=sharing",
      },
    ],
    images: [
      {
        src: "/imagenes/el otro.png",
        alt: "Evidencia de AI Challenge",
        caption: "Resultados y pruebas del reto de Machine Learning.",
      },
    ],
  },
  {
    number: "04",
    title: "Hotspots Comerciales",
    category: "ANÁLISIS GEOGRÁFICO",
    description:
      "Análisis de establecimientos y sus agrupaciones geográficas para explorar posibles ubicaciones comerciales.",
    background: "#D8D0C1",
    details:
      "Análisis geoespacial de 53 gasolineras registradas en Santa Ana (GasolinerasSantaAna.geojson), limpiando coordenadas y convirtiéndolas de EPSG:4326 a EPSG:32616 (UTM) para aplicar K-Means y clasificación geográfica con KNN (métrica Haversine).",
    highlights: [
      "Dataset limpio: 53 registros (0 duplicados exactos, 0 coordenadas faltantes).",
      "K-Means con K = 2 (mejor silueta: 0.791): Cluster 0 con 47 gasolineras y Cluster 1 con 6 gasolineras.",
      "Clasificación KNN (3 vecinos, distancia Haversine): 100% de exactitud promedio en validación cruzada (3 folds).",
      "Caso Puma Chalchuapa (13.988085, -89.667435): asignado al Cluster 0 tanto por K-Means como por KNN; vecinos más cercanos: Texaco Chalchuapa (~0.738 km y ~0.740 km) y Uno (~0.985 km).",
    ],
    images: [
      {
        src: "/imagenes/mapa.png",
        alt: "Mapa de análisis geográfico de gasolineras",
        caption: "Visualización geográfica y agrupaciones del análisis.",
      },
    ],
  },
];

const skillGroups = [
  {
    number: "01",
    title: "Tecnología y herramientas",
    description:
      "Herramientas que he utilizado en actividades y proyectos académicos.",
    icon: "✳",
    skills: [
      "Python",
      "HTML",
      "CSS",
      "MySQL",
      "Excel",
      "Power BI",
      "Kodular",
      "Git & GitHub",
    ],
  },
  {
    number: "02",
    title: "Inteligencia artificial y datos",
    description:
      "Conceptos y técnicas que he explorado durante mi formación.",
    icon: "⌘",
    skills: [
      "Regresión lineal",
      "K-Means",
      "KNN",
      "Árboles de decisión",
      "Análisis de datos",
      "Visualización de datos",
    ],
  },
  {
    number: "03",
    title: "Habilidades personales",
    description:
      "Cualidades que forman parte de mi manera de aprender y trabajar.",
    icon: "✿",
    skills: [
      "Liderazgo",
      "Responsabilidad",
      "Empatía",
      "Comunicación",
      "Creatividad",
      "Trabajo en equipo",
    ],
  },
];

const education = [
  {
    period: "2025",
    tag: "EDUCACIÓN MEDIA",
    title: "Bachillerato",
    institution: "Complejo Educativo Católico Fray Martín de Porres",
    description: "Estudios de bachillerato finalizados en 2025.",
    icon: "01",
  },
  {
    period: "2026",
    tag: "CENTRO ¡SUPÉRATE!",
    title: "Programa de formación",
    institution: "Programa Empresarial Supérate Fundación Frech",
    description: "Experiencia formativa en inglés, informática y valores.",
    icon: "02",
  },
  {
    period: "2026",
    tag: "CERTIFICACIONES",
    title: "Certificaciones de ingles e informatica",
    institution: "Centro Superate",
    description:
      "Actualmente cuento con dos certificaciones, Microsoft Office Specialist Excel Expert(MOS) y TOEIC.",
    icon: "03",
  },
];

export default function Home() {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(
    null
  );
  const [contactForm, setContactForm] = useState({
    nombre: "",
    email: "",
    mensaje: "",
  });
  const [sendingEmail, setSendingEmail] = useState(false);
  const [emailStatus, setEmailStatus] = useState<{
    type: "success" | "error";
    text: string;
  } | null>(null);

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSendingEmail(true);
    setEmailStatus(null);

    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/jime.duque17@gmail.com",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            _subject: `Nuevo mensaje desde el portafolio de ${contactForm.nombre}`,
            Nombre: contactForm.nombre,
            Email: contactForm.email,
            Mensaje: contactForm.mensaje,
          }),
        }
      );

      if (response.ok) {
        setEmailStatus({
          type: "success",
          text: "¡Mensaje enviado! Gracias por escribirme, te responderé pronto.",
        });
        setContactForm({ nombre: "", email: "", mensaje: "" });
      } else {
        setEmailStatus({
          type: "error",
          text: "No se pudo enviar el mensaje. Inténtalo de nuevo en unos momentos.",
        });
      }
    } catch {
      setEmailStatus({
        type: "error",
        text: "Ocurrió un error de conexión al enviar tu mensaje.",
      });
    } finally {
      setSendingEmail(false);
    }
  };

  return (
    <main
      id="inicio"
      className="min-h-screen overflow-hidden bg-[#F5F0E8] text-[#49382E]"
    >
      {/* NAVEGACIÓN */}
      <header className="mx-auto max-w-7xl px-6 py-6 lg:px-10">
        <div className="flex items-center justify-between">
          <a
            href="#inicio"
            className="font-serif text-3xl font-bold tracking-tight"
          >
            JN<span className="text-[#A9674F]">.</span>
          </a>

          <a
            href="#contacto"
            className="rounded-full border border-[#49382E] px-5 py-2.5 text-xs font-medium transition hover:bg-[#49382E] hover:text-[#F5F0E8]"
          >
            Contacto ↗
          </a>
        </div>

        <nav className="mt-6 flex flex-wrap gap-x-7 gap-y-3 border-t border-[#DED3C5] pt-5 text-xs text-[#77695E] sm:text-sm">
          <a href="#inicio" className="transition hover:text-[#A9674F]">
            Inicio
          </a>
          <a href="#sobre-mi" className="transition hover:text-[#A9674F]">
            Sobre mí
          </a>
          <a href="#proyectos" className="transition hover:text-[#A9674F]">
            Proyectos
          </a>
          <a href="#habilidades" className="transition hover:text-[#A9674F]">
            Mis habilidades
          </a>
          <a href="#formacion" className="transition hover:text-[#A9674F]">
            Formación académica
          </a>
        </nav>
      </header>

      {/* PRESENTACIÓN PRINCIPAL */}
      <section className="mx-auto grid max-w-7xl items-center gap-14 px-6 pb-24 pt-12 lg:grid-cols-2 lg:px-10 lg:pb-32 lg:pt-20">
        <div>
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-[#D8CCBD] px-4 py-2 text-[10px] font-medium tracking-[0.2em] text-[#806D5D]">
            <span className="h-2 w-2 rounded-full bg-[#A9674F]" />
            PORTAFOLIO DIGITAL · 2026
          </div>

          <p className="mb-4 text-sm tracking-wide text-[#806D5D]">
            Hola, qué gusto tenerte aquí.
          </p>

          <h1 className="font-serif text-6xl leading-[1.05] tracking-tight sm:text-7xl lg:text-[5.8rem]">
            Hola, soy
            <br />
            <span className="font-normal italic text-[#A9674F]">
              Jimena Navarrete.
            </span>
          </h1>

          <p className="mt-8 max-w-lg text-lg leading-8 text-[#76695E]">
            Curiosidad para aprender, creatividad para construir. Un espacio
            donde comparto mis proyectos, aprendizajes e ideas.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href="#proyectos"
              className="rounded-full bg-[#49382E] px-7 py-3.5 text-sm text-[#F5F0E8] transition hover:-translate-y-1 hover:bg-[#A9674F]"
            >
              Explorar proyectos ↗
            </a>

            <a
              href="#sobre-mi"
              className="rounded-full border border-[#BDAE9E] px-7 py-3.5 text-sm transition hover:-translate-y-1 hover:border-[#A9674F] hover:text-[#A9674F]"
            >
              Conóceme
            </a>
          </div>

          <div className="mt-12 flex flex-wrap gap-x-8 gap-y-3 text-[10px] font-medium tracking-[0.17em] text-[#8A7B6D]">
            <span>APRENDIZAJE</span>
            <span>CREATIVIDAD</span>
            <span>TECNOLOGÍA</span>
          </div>
        </div>

        {/* ELEMENTO GRÁFICO */}
        <div className="relative mx-auto w-full max-w-md">
          <div className="absolute -right-8 top-12 h-56 w-56 rounded-full bg-[#78816B]/20 blur-3xl" />

          <div className="relative flex aspect-[4/5] items-center justify-center overflow-hidden rounded-t-[12rem] rounded-b-3xl border border-[#49382E]/10 bg-[#E5D7C5] shadow-2xl shadow-[#49382E]/10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(255,255,255,0.75),transparent_55%)]" />

            <span className="absolute left-8 top-8 text-[10px] tracking-[0.25em] text-[#76695E]">
              JIMENA NAVARRETE
            </span>

            {/* FOTOGRAFÍA PERSONAL */}
            <div className="absolute inset-0">
              <Image
                src="/imagenes/jimena.png"
                alt="Fotografía de Jimena"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 448px"
                className="object-cover object-center"
              />

              <div className="absolute inset-0 bg-[#49382E]/10" />
            </div>

            <div className="absolute bottom-7 left-6 right-6 flex items-center justify-between rounded-2xl border border-white/40 bg-[#F5F0E8]/85 p-5 backdrop-blur-md">
              <div>
                <p className="text-[10px] tracking-[0.18em] text-[#A9674F]">
                  UN POCO SOBRE MÍ
                </p>
                <p className="mt-1 font-serif text-xl">
                  Aprender. Crear. Crecer.
                </p>
              </div>
              <span className="text-2xl text-[#78816B]">✳</span>
            </div>
          </div>

          <div className="absolute -right-3 top-24 rotate-6 rounded-full bg-[#78816B] px-5 py-3 text-xs text-white shadow-lg sm:-right-7">
            Siempre aprendiendo ✳
          </div>
        </div>
      </section>

      {/* SOBRE MÍ */}
      <section
        id="sobre-mi"
        className="border-y border-[#DCD2C5] bg-[#EEE7DC] px-6 py-24 lg:px-10"
      >
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-[0.8fr_1.2fr] md:items-center">
          <div>
            <p className="mb-4 text-xs tracking-[0.2em] text-[#A9674F]">
              01 / SOBRE MÍ
            </p>
            <h2 className="font-serif text-4xl leading-tight sm:text-5xl">
              Detrás de cada idea, hay una historia.
            </h2>
          </div>

          <div>
            <p className="text-base leading-8 text-[#76695E]">
              Actualmente soy estudiante del programa Supérate, en la universidad
              voy a estudiar trabajo social ya que quiero dar oportunidades así
              como me las dieron a mí. Así mismo me considero una persona
              curiosa, responsable y empática. Me gusta aprender cosas nuevas,
              explorar diferentes herramientas y descubrir cómo transformar ideas
              en soluciones.
            </p>

            <p className="mt-5 text-base leading-8 text-[#76695E]">
              Este espacio reúne parte de mi recorrido, los proyectos en los
              que he trabajado y los conocimientos que sigo construyendo.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {["Curiosidad", "Responsabilidad", "Empatía", "Creatividad"].map(
                (item) => (
                  <span
                    key={item}
                    className="rounded-full border border-[#CFC1B0] px-4 py-2 text-xs text-[#76695E]"
                  >
                    {item}
                  </span>
                )
              )}
            </div>
          </div>
        </div>
      </section>

      {/* PROYECTOS */}
      <section id="proyectos" className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-5">
          <div>
            <p className="mb-4 text-xs tracking-[0.2em] text-[#A9674F]">
              02 / MI TRABAJO
            </p>
            <h2 className="font-serif text-4xl sm:text-5xl">
              Proyectos seleccionados.
            </h2>
          </div>

          <p className="max-w-xs text-sm leading-6 text-[#8A7B6D]">
            Haz clic en cualquier apartado para ver enlaces, fotos y detalles.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.number}
              onClick={() => setSelectedProject(project)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setSelectedProject(project);
                }
              }}
              className="group cursor-pointer overflow-hidden rounded-2xl border border-[#DCD2C5] bg-[#FBF8F3] text-left transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#49382E]/10 focus:outline-none focus:ring-2 focus:ring-[#A9674F]"
            >
              <div
                style={{ backgroundColor: project.background }}
                className="relative flex h-52 items-center justify-center overflow-hidden"
              >
                <span className="font-serif text-8xl text-[#49382E]/20 transition duration-500 group-hover:scale-110">
                  {project.number}
                </span>

                <span className="absolute bottom-5 left-5 rounded-full bg-[#F5F0E8]/75 px-4 py-2 text-[10px] tracking-widest text-[#49382E] backdrop-blur">
                  {project.category}
                </span>

                <span className="absolute right-5 top-5 text-2xl text-[#49382E]/60 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[#49382E]">
                  ↗
                </span>
              </div>

              <div className="p-7">
                <h3 className="font-serif text-2xl">{project.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[#83766B]">
                  {project.description}
                </p>
                <div className="mt-5 text-xs font-medium text-[#A9674F]">
                  Ver detalles, enlaces y fotos →
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* MODAL DE DETALLE DE PROYECTO */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#2E221B]/65 p-4 backdrop-blur-xs"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-3xl border border-[#DCD2C5] bg-[#FBF8F3] p-6 text-[#49382E] shadow-2xl sm:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4 border-b border-[#E5DDD2] pb-5">
              <div>
                <span className="inline-block rounded-full bg-[#EFE6DA] px-3.5 py-1 text-[10px] font-medium tracking-[0.2em] text-[#A9674F]">
                  {selectedProject.number} · {selectedProject.category}
                </span>
                <h3 className="mt-3 font-serif text-3xl sm:text-4xl">
                  {selectedProject.title}
                </h3>
              </div>

              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                aria-label="Cerrar ventana"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[#CFC1B0] text-lg transition hover:bg-[#49382E] hover:text-[#F5F0E8]"
              >
                ✕
              </button>
            </div>

            <div className="mt-6 space-y-6">
              <p className="text-sm leading-7 text-[#6E5F53] sm:text-base">
                {selectedProject.details}
              </p>

              {selectedProject.highlights &&
                selectedProject.highlights.length > 0 && (
                  <div className="rounded-2xl border border-[#E3D8CA] bg-[#F5EFE6] p-5">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#A9674F]">
                      Resumen y resultados del análisis
                    </p>
                    <ul className="mt-3 space-y-2.5 text-sm leading-6 text-[#5C4D42]">
                      {selectedProject.highlights.map((item) => (
                        <li key={item} className="flex items-start gap-2.5">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#A9674F]" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

              {selectedProject.links && selectedProject.links.length > 0 && (
                <div>
                  <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#8A7B6D]">
                    Enlaces del proyecto
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {selectedProject.links.map((link) => (
                      <a
                        key={link.url}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full bg-[#49382E] px-5 py-2.5 text-xs font-medium text-[#F5F0E8] transition hover:bg-[#A9674F]"
                      >
                        {link.label} ↗
                      </a>
                    ))}
                  </div>
                </div>
              )}

              {selectedProject.images && selectedProject.images.length > 0 && (
                <div>
                  <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#8A7B6D]">
                    Evidencias y capturas
                  </p>
                  <div className="grid gap-5 sm:grid-cols-2">
                    {selectedProject.images.map((img) => (
                      <figure
                        key={img.src}
                        className="overflow-hidden rounded-2xl border border-[#E3D8CA] bg-[#F5EFE6]"
                      >
                        <div className="relative aspect-16/10 w-full bg-[#EAE2D6]">
                          <Image
                            src={img.src}
                            alt={img.alt}
                            fill
                            sizes="(max-width: 640px) 100vw, 360px"
                            className="object-cover"
                          />
                        </div>
                        {img.caption && (
                          <figcaption className="px-4 py-3 text-xs text-[#76695E]">
                            {img.caption}
                          </figcaption>
                        )}
                      </figure>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="mt-8 flex justify-end border-t border-[#E5DDD2] pt-5">
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                className="rounded-full border border-[#49382E] px-6 py-2.5 text-xs font-medium transition hover:bg-[#49382E] hover:text-[#F5F0E8]"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}

      {/* MIS HABILIDADES */}
      <section
        id="habilidades"
        className="border-y border-[#DCD2C5] bg-[#EEE7DC] px-6 py-24 lg:px-10"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-12">
            <p className="mb-4 text-xs tracking-[0.2em] text-[#A9674F]">
              03 / LO QUE ME DEFINE
            </p>

            <h2 className="font-serif text-4xl sm:text-5xl">
              Mis habilidades<span className="text-[#A9674F]">.</span>
            </h2>

            <p className="mt-5 max-w-xl text-sm leading-7 text-[#76695E]">
              Una combinación de conocimientos tecnológicos, curiosidad por
              aprender y habilidades personales que sigo desarrollando.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {skillGroups.map((group) => (
              <article
                key={group.number}
                className="group rounded-2xl border border-[#D8CCBD] bg-[#F8F4ED] p-7 transition duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-[#49382E]/10"
              >
                <div className="flex items-center justify-between">
                  <span className="font-serif text-4xl text-[#A9674F]">
                    {group.icon}
                  </span>
                  <span className="text-xs tracking-widest text-[#A99A89]">
                    {group.number} / 03
                  </span>
                </div>

                <h3 className="mt-7 font-serif text-2xl">{group.title}</h3>

                <p className="mt-3 min-h-16 text-sm leading-6 text-[#87796D]">
                  {group.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-[#D8CCBD] px-3 py-2 text-xs text-[#69594C] transition hover:border-[#A9674F] hover:bg-[#A9674F] hover:text-white"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FORMACIÓN ACADÉMICA */}
      <section id="formacion" className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
        <div className="mb-14">
          <p className="mb-4 text-xs tracking-[0.2em] text-[#A9674F]">
            04 / MI RECORRIDO
          </p>

          <h2 className="font-serif text-4xl sm:text-5xl">
            Formación académica<span className="text-[#A9674F]">.</span>
          </h2>

          <p className="mt-5 max-w-xl text-sm leading-7 text-[#76695E]">
            Cada etapa representa una oportunidad para adquirir conocimientos,
            descubrir intereses y seguir creciendo.
          </p>
        </div>

        <div className="relative ml-3 border-l border-[#CDBDAA] md:ml-8">
          {education.map((item) => (
            <article
              key={item.icon}
              className="group relative pb-12 pl-9 last:pb-0 md:pl-14"
            >
              <span className="absolute -left-[9px] top-1 flex h-4 w-4 items-center justify-center rounded-full border-2 border-[#A9674F] bg-[#F5F0E8] transition group-hover:bg-[#A9674F]" />

              <div className="rounded-2xl border border-[#DED3C5] bg-[#FBF8F3] p-6 transition duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-[#49382E]/10 sm:p-8">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <span className="rounded-full bg-[#EDE3D6] px-4 py-2 text-[10px] font-medium tracking-[0.15em] text-[#A9674F]">
                    {item.tag}
                  </span>

                  <span className="text-xs text-[#998879]">{item.period}</span>
                </div>

                <div className="mt-6 flex items-start gap-4">
                  <span className="font-serif text-3xl text-[#C8B49E]">
                    {item.icon}
                  </span>

                  <div>
                    <h3 className="font-serif text-2xl sm:text-3xl">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-sm font-medium text-[#A9674F]">
                      {item.institution}
                    </p>

                    <p className="mt-4 max-w-2xl text-sm leading-7 text-[#83766B]">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 rounded-2xl bg-[#E8E0D4] p-7 sm:p-9">
          <p className="text-[10px] tracking-[0.2em] text-[#A9674F]">
            UNA IDEA QUE ME ACOMPAÑA
          </p>

          <p className="mt-4 max-w-3xl font-serif text-2xl italic leading-relaxed text-[#59483C] sm:text-3xl">
            &ldquo;El aprendizaje no termina con una etapa; cada experiencia
            abre la puerta a nuevas posibilidades.&rdquo;
          </p>
        </div>
      </section>

      {/* CONTACTO */}
      <section
        id="contacto"
        className="bg-[#49382E] px-6 py-24 text-[#F5F0E8] lg:px-10"
      >
        <div className="mx-auto max-w-7xl">
          <p className="mb-5 text-xs tracking-[0.2em] text-[#D9A58D]">
            05 / CONTACTO
          </p>

          <div className="grid gap-12 md:grid-cols-[1.05fr_0.95fr] md:items-center">
            <div>
              <h2 className="max-w-2xl font-serif text-5xl leading-tight sm:text-6xl">
                Las grandes ideas comienzan con una conversación.
              </h2>

              <p className="mt-6 max-w-lg text-sm leading-7 text-[#D7C9BC]">
                Gracias por visitar mi portafolio. Me alegra poder compartir un
                poco de mi recorrido y de todo lo que sigo aprendiendo.
              </p>

              <div className="mt-8 space-y-3 text-xs text-[#D7C9BC]">
                <p>
                  Correo directo:{" "}
                  <a
                    href="mailto:jime.duque17@gmail.com"
                    className="underline decoration-[#D9A58D]/60 underline-offset-4 transition hover:text-white"
                  >
                    jime.duque17@gmail.com
                  </a>
                </p>
                <p>
                  Perfil profesional:{" "}
                  <a
                    href="https://www.tecoloco.com.sv/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline decoration-[#D9A58D]/60 underline-offset-4 transition hover:text-white"
                  >
                    Tecoloco ↗
                  </a>
                </p>
              </div>
            </div>

            {/* FORMULARIO DE CONTACTO POR EMAIL */}
            <form
              onSubmit={handleContactSubmit}
              className="rounded-3xl border border-[#A99887]/40 bg-[#3A2B22] p-6 shadow-2xl shadow-black/20 sm:p-8"
            >
              <div className="space-y-5">
                <div>
                  <label
                    htmlFor="contact-nombre"
                    className="mb-2 block text-sm font-medium text-[#F5F0E8]"
                  >
                    Nombre
                  </label>
                  <input
                    id="contact-nombre"
                    type="text"
                    required
                    placeholder="Tu nombre"
                    value={contactForm.nombre}
                    onChange={(e) =>
                      setContactForm({ ...contactForm, nombre: e.target.value })
                    }
                    className="w-full rounded-xl border border-[#7C6A5C] bg-[#2E211A] px-4 py-3 text-sm text-[#F5F0E8] placeholder-[#9D8C7D] transition focus:border-[#D9A58D] focus:outline-none"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-email"
                    className="mb-2 block text-sm font-medium text-[#F5F0E8]"
                  >
                    Email
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    placeholder="tu@email.com"
                    value={contactForm.email}
                    onChange={(e) =>
                      setContactForm({ ...contactForm, email: e.target.value })
                    }
                    className="w-full rounded-xl border border-[#7C6A5C] bg-[#2E211A] px-4 py-3 text-sm text-[#F5F0E8] placeholder-[#9D8C7D] transition focus:border-[#D9A58D] focus:outline-none"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-mensaje"
                    className="mb-2 block text-sm font-medium text-[#F5F0E8]"
                  >
                    Mensaje
                  </label>
                  <textarea
                    id="contact-mensaje"
                    rows={4}
                    required
                    placeholder="Cuéntame sobre tu proyecto o idea..."
                    value={contactForm.mensaje}
                    onChange={(e) =>
                      setContactForm({ ...contactForm, mensaje: e.target.value })
                    }
                    className="w-full resize-none rounded-xl border border-[#7C6A5C] bg-[#2E211A] px-4 py-3 text-sm text-[#F5F0E8] placeholder-[#9D8C7D] transition focus:border-[#D9A58D] focus:outline-none"
                  />
                </div>

                {emailStatus && (
                  <p
                    className={`rounded-xl px-4 py-3 text-xs leading-5 ${
                      emailStatus.type === "success"
                        ? "border border-[#78816B]/60 bg-[#78816B]/20 text-[#E6EBD9]"
                        : "border border-[#D9A58D]/60 bg-[#A9674F]/25 text-[#F8DDD1]"
                    }`}
                  >
                    {emailStatus.text}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={sendingEmail}
                  className="flex w-full items-center justify-center gap-2.5 rounded-xl bg-[#A9674F] px-6 py-3.5 text-sm font-semibold text-white shadow-lg transition hover:bg-[#BD755B] disabled:cursor-not-allowed disabled:opacity-60"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4"
                    aria-hidden="true"
                  >
                    <path d="m22 2-7 20-4-9-9-4Z" />
                    <path d="M22 2 11 13" />
                  </svg>
                  <span>{sendingEmail ? "Enviando..." : "Enviar mensaje"}</span>
                </button>
              </div>
            </form>
          </div>

          <div className="mt-12 border-t border-[#766558] pt-7">
            <p className="text-xs leading-6 text-[#C8B9AA]">
              Este portafolio es una muestra de mi aprendizaje, mis proyectos y
              mi crecimiento personal.
            </p>
          </div>
        </div>
      </section>

      {/* PIE DE PÁGINA */}
      <footer className="flex flex-wrap items-center justify-between gap-4 bg-[#49382E] px-6 pb-8 text-xs text-[#C8B9AA] lg:px-10">
        <span>© 2026 · Jimena Duque</span>

        <a href="#inicio" className="transition hover:text-white">
          Volver al inicio ↑
        </a>

        <span>Hecho con curiosidad y creatividad.</span>
      </footer>
    </main>
  );
}
