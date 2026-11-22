import Image from "next/image";
const projects = [
  {
    number: "01",
    title: "Regresión lineal",
    category: "ANÁLISIS DE DATOS",
    description:
      "Exploración de datos, identificación de relaciones e interpretación de resultados.",
    background: "#E7D7C3",
  },
  {
    number: "02",
    title: "Laberinto",
    category: "ALGORITMOS",
    description:
      "Un reto de lógica y resolución de problemas mediante algoritmos y árboles de decisión.",
    background: "#D9DCCB",
  },
  {
    number: "03",
    title: "AI Challenge",
    category: "MACHINE LEARNING",
    description:
      "Exploración de K-Means y KNN para trabajar con datos y descubrir patrones.",
    background: "#E8CFC0",
  },
  {
    number: "04",
    title: "Hotspots Comerciales",
    category: "ANÁLISIS GEOGRÁFICO",
    description:
      "Análisis de establecimientos y sus agrupaciones geográficas para explorar posibles ubicaciones comerciales.",
    background: "#D8D0C1",
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
      "Firebase",
      "Arduino",
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

const learningSkills = [
  "React",
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
];

const education = [
  {
    period: "2025",
    tag: "EDUCACIÓN MEDIA",
    title: "Bachillerato",
    institution:
      "Complejo Educativo Católico Fray Martín de Porres",
    description:
      "Estudios de bachillerato finalizados en 2025.",
    icon: "01",
  },
  {
    period: "FORMACIÓN COMPLEMENTARIA",
    tag: "CENTRO ¡SUPÉRATE!",
    title: "Programa de formación",
    institution: "Fundación Frech",
    description:
      "Experiencia formativa en inglés, informática y desarrollo de habilidades personales.",
    icon: "02",
  },
  {
    period: "APRENDIZAJE ACTUAL",
    tag: "TECNOLOGÍA E INNOVACIÓN",
    title: "Desarrollo web e inteligencia artificial",
    institution: "Formación académica",
    description:
      "Actualmente fortaleciendo mis conocimientos en desarrollo web con React, Next.js, TypeScript y Tailwind CSS, además de fundamentos de inteligencia artificial y Machine Learning.",
    icon: "03",
  },
];

export default function Home() {
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
            Curiosidad para aprender, creatividad para construir.
            Un espacio donde comparto mis proyectos, aprendizajes e ideas.
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

  {/* Capa suave para conservar la estética */}
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
              Soy una persona curiosa, responsable y empática.
              Me gusta aprender cosas nuevas, explorar diferentes
              herramientas y descubrir cómo transformar ideas en soluciones.
            </p>

            <p className="mt-5 text-base leading-8 text-[#76695E]">
              Este espacio reúne parte de mi recorrido, los proyectos
              en los que he trabajado y los conocimientos que sigo
              construyendo.
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
      <section
        id="proyectos"
        className="mx-auto max-w-7xl px-6 py-24 lg:px-10"
      >
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
            Ideas, retos y aprendizajes que se han convertido en experiencias.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.number}
              className="group overflow-hidden rounded-2xl border border-[#DCD2C5] bg-[#FBF8F3] transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#49382E]/10"
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

                <span className="absolute right-5 top-5 text-2xl text-[#49382E]/60">
                  ↗
                </span>
              </div>

              <div className="p-7">
                <h3 className="font-serif text-2xl">{project.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[#83766B]">
                  {project.description}
                </p>
                <div className="mt-5 text-xs font-medium text-[#A9674F]">
                  Proyecto académico →
                </div>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-7 text-xs leading-6 text-[#8A7B6D]">
          Esta es una primera presentación. Las evidencias, explicaciones,
          tecnologías y resultados se incorporarán en cada proyecto.
        </p>
      </section>

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
              Una combinación de conocimientos tecnológicos, curiosidad
              por aprender y habilidades personales que sigo desarrollando.
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

                <h3 className="mt-7 font-serif text-2xl">
                  {group.title}
                </h3>

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

          {/* EN APRENDIZAJE */}
          <div className="mt-7 overflow-hidden rounded-2xl bg-[#49382E] p-7 text-[#F5F0E8] sm:p-9">
            <div className="grid gap-6 md:grid-cols-[1fr_1.5fr] md:items-center">
              <div>
                <p className="text-[10px] tracking-[0.2em] text-[#D9A58D]">
                  MI SIGUIENTE CAPÍTULO
                </p>
                <h3 className="mt-3 font-serif text-3xl">
                  Siempre hay algo nuevo por aprender.
                </h3>
              </div>

              <div>
                <p className="mb-5 text-sm leading-7 text-[#D7C9BC]">
                  Actualmente estoy aprendiendo y practicando nuevas
                  herramientas para fortalecer mis conocimientos
                  en desarrollo web.
                </p>

                <div className="flex flex-wrap gap-2">
                  {learningSkills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-[#B7A393]/50 px-4 py-2 text-xs text-[#F5F0E8]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FORMACIÓN ACADÉMICA */}
      <section
        id="formacion"
        className="mx-auto max-w-7xl px-6 py-24 lg:px-10"
      >
        <div className="mb-14">
          <p className="mb-4 text-xs tracking-[0.2em] text-[#A9674F]">
            04 / MI RECORRIDO
          </p>

          <h2 className="font-serif text-4xl sm:text-5xl">
            Formación académica<span className="text-[#A9674F]">.</span>
          </h2>

          <p className="mt-5 max-w-xl text-sm leading-7 text-[#76695E]">
            Cada etapa representa una oportunidad para adquirir
            conocimientos, descubrir intereses y seguir creciendo.
          </p>
        </div>

        <div className="relative ml-3 border-l border-[#CDBDAA] md:ml-8">
          {education.map((item, index) => (
            <article
              key={item.icon}
              className="group relative pb-12 pl-9 last:pb-0 md:pl-14"
            >
              {/* PUNTO DE LA LÍNEA DE TIEMPO */}
              <span className="absolute -left-[9px] top-1 flex h-4 w-4 items-center justify-center rounded-full border-2 border-[#A9674F] bg-[#F5F0E8] transition group-hover:bg-[#A9674F]" />

              <div className="rounded-2xl border border-[#DED3C5] bg-[#FBF8F3] p-6 transition duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-[#49382E]/10 sm:p-8">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <span className="rounded-full bg-[#EDE3D6] px-4 py-2 text-[10px] font-medium tracking-[0.15em] text-[#A9674F]">
                    {item.tag}
                  </span>

                  <span className="text-xs text-[#998879]">
                    {item.period}
                  </span>
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
            "El aprendizaje no termina con una etapa; cada experiencia
            abre la puerta a nuevas posibilidades."
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

          <div className="grid gap-12 md:grid-cols-[1.2fr_0.8fr] md:items-end">
            <div>
              <h2 className="max-w-2xl font-serif text-5xl leading-tight sm:text-6xl">
                Las grandes ideas comienzan con una conversación.
              </h2>

              <p className="mt-6 max-w-lg text-sm leading-7 text-[#D7C9BC]">
                Gracias por visitar mi portafolio. Me alegra poder
                compartir un poco de mi recorrido y de todo lo que
                sigo aprendiendo.
              </p>
            </div>

            <div className="space-y-4">
              {/* CORREO */}
              <a
                href="mailto:jime.duque17@gmail.com?subject=Contacto%20desde%20mi%20portafolio"
                className="group block rounded-2xl border border-[#A99887]/50 p-6 transition hover:border-[#D9A58D] hover:bg-white/5"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] tracking-[0.2em] text-[#D9A58D]">
                    CORREO ELECTRÓNICO
                  </span>
                  <span className="text-xl transition group-hover:translate-x-1 group-hover:-translate-y-1">
                    ↗
                  </span>
                </div>

                <p className="mt-4 break-all font-serif text-xl sm:text-2xl">
                  jime.duque17@gmail.com
                </p>

                <p className="mt-2 text-xs text-[#C8B9AA]">
                  Escríbeme directamente a mi correo.
                </p>
              </a>

              {/* TECOLOCO */}
              <a
                href="https://www.tecoloco.com.sv/"
                target="_blank"
                rel="noopener noreferrer"
                className="group block rounded-2xl border border-[#A99887]/50 p-6 transition hover:border-[#D9A58D] hover:bg-white/5"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] tracking-[0.2em] text-[#D9A58D]">
                    PERFIL PROFESIONAL
                  </span>
                  <span className="text-xl transition group-hover:translate-x-1 group-hover:-translate-y-1">
                    ↗
                  </span>
                </div>

                <p className="mt-4 font-serif text-2xl">
                  Tecoloco
                </p>

                <p className="mt-2 text-xs text-[#C8B9AA]">
                  También puedes encontrarme en esta plataforma de empleo.
                </p>
              </a>
            </div>
          </div>

          <div className="mt-12 border-t border-[#766558] pt-7">
            <p className="text-xs leading-6 text-[#C8B9AA]">
              Este portafolio es una muestra de mi aprendizaje,
              mis proyectos y mi crecimiento personal.
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
