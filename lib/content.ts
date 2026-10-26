export type Lang = "en" | "es";
type T = { en: string; es: string };

export const contact = {
  email: "yane.rodriguez26@gmail.com",
  linkedin: "https://www.linkedin.com/in/yanetrodriguez/",
  medium: "https://medium.com/@yane-dev",
  cv: "/cv/Yanet-Rodriguez-CV.pdf",
};

export const ui = {
  nav: {
    work: { en: "Experience", es: "Experiencia" },
    apps: { en: "Apps", es: "Apps" },
    stack: { en: "Stack", es: "Stack" },
    contact: { en: "Contact", es: "Contacto" },
  },
  cv: { en: "Download CV", es: "Descargar CV" },
  role: { en: "Senior Mobile Developer for iOS and Android", es: "Desarrolladora Mobile Senior para iOS y Android" },
  intro: {
    en: "I build native apps in Swift and Kotlin, and share the logic between them with Kotlin Multiplatform. Over the last six years I've shipped streaming, member-services and logistics apps, led technical decisions and mentored junior developers.",
    es: "Construyo apps nativas en Swift y Kotlin, y comparto la lógica entre ambas con Kotlin Multiplatform. En los últimos seis años publiqué apps de streaming, servicios para socios y logística, lideré decisiones técnicas y acompañé a desarrolladores junior.",
  },
  looking: {
    en: "Looking for Mobile Tech Lead roles. Remote from Argentina or open to relocating.",
    es: "Busco roles de Tech Lead Mobile. Remoto desde Argentina o con disponibilidad para reubicarme.",
  },
  emailMe: { en: "Email me", es: "Escribime" },
  flipToAndroid: { en: "Show it on Android", es: "Ver en Android" },
  flipToIos: { en: "Show it on iOS", es: "Ver en iOS" },
  phoneCaption: { en: "Same profile, two platforms. Drag to tilt.", es: "Mismo perfil, dos plataformas. Arrastrá para inclinar." },
  facts: [
    { value: "6+", label: { en: "years building mobile apps", es: "años haciendo apps mobile" } },
    { value: "Millions", valueEs: "Millones", label: { en: "of users on Flow, Telecom's TV app", es: "de usuarios en Flow, la app de TV de Telecom" } },
    { value: "iOS + Android", label: { en: "native, plus KMP shared modules", es: "nativo, más módulos compartidos con KMP" } },
  ],
  workTitle: { en: "Where I've worked", es: "Dónde trabajé" },
  workHint: { en: "Open a role to see what I did there.", es: "Abrí cada puesto para ver qué hice." },
  appsTitle: { en: "Apps I've built", es: "Apps que construí" },
  stackTitle: { en: "What I work with", es: "Con qué trabajo" },
  eduTitle: { en: "Education", es: "Formación" },
  contactTitle: { en: "Let's build something together", es: "Construyamos algo juntos" },
  contactText: {
    en: "If you need someone to lead a mobile team or own an app end to end, I'd like to hear about it.",
    es: "Si buscás a alguien para liderar un equipo mobile o hacerse cargo de una app de punta a punta, me encantaría saberlo.",
  },
  viewStore: { en: "App Store", es: "App Store" },
  visit: { en: "Website", es: "Sitio web" },
  footer: { en: "Built with Next.js", es: "Hecho con Next.js" },
};

export type Job = {
  role: T; company: string; place: string; dates: T; platform: "ios" | "android" | "both";
  summary: T; points: T[];
};

export const jobs: Job[] = [
  {
    role: { en: "Co-founder and Mobile Lead", es: "Cofundadora y Mobile Lead" },
    company: "Quantum Software", place: "Argentina",
    dates: { en: "2026 – Present", es: "2026 – Actualidad" }, platform: "both",
    summary: { en: "Software consultancy. I lead mobile development, starting with Fleeting.", es: "Consultora de software. Lidero el desarrollo mobile, empezando por Fleeting." },
    points: [
      { en: "Own the full Kotlin Multiplatform app for Fleeting: shared module, Jetpack Compose on Android and SwiftUI on iOS.", es: "Estoy a cargo de toda la app Kotlin Multiplatform de Fleeting: módulo compartido, Jetpack Compose en Android y SwiftUI en iOS." },
      { en: "Delivered the first sprint (auth, onboarding and role management) and presented it to the client.", es: "Entregué el primer sprint (autenticación, onboarding y gestión de roles) y lo presenté al cliente." },
      { en: "Define architecture and work with the .NET backend side to shape the API.", es: "Defino la arquitectura y trabajo con el lado backend en .NET para darle forma a la API." },
    ],
  },
  {
    role: { en: "Senior Mobile Developer (iOS / Android)", es: "Desarrolladora Mobile Senior (iOS / Android)" },
    company: "Flow · Personal (Telecom Argentina)", place: "Buenos Aires",
    dates: { en: "Oct 2022 – Jun 2026", es: "Oct 2022 – Jun 2026" }, platform: "both",
    summary: { en: "Live TV, VOD and series app used by millions across Argentina. Formally on iOS, contributing to Android to keep both platforms consistent.", es: "App de TV en vivo, VOD y series usada por millones en Argentina. Formalmente en iOS, con aportes activos en Android para mantener ambas plataformas alineadas." },
    points: [
      { en: "Led mobile technical decisions for the Home & Feature Discovery team: component structure, data flow and coding standards for iOS and Android.", es: "Lideré las decisiones técnicas mobile del equipo de Home & Feature Discovery: estructura de componentes, flujo de datos y estándares de código para iOS y Android." },
      { en: "Built native iOS features with Swift, UIKit, SwiftUI and Combine, and contributed to the Android codebase in Kotlin.", es: "Construí funcionalidades nativas en iOS con Swift, UIKit, SwiftUI y Combine, y aporté al código Android en Kotlin." },
      { en: "Integrated Kotlin Multiplatform shared modules to keep business logic identical on both platforms.", es: "Integré módulos compartidos de Kotlin Multiplatform para mantener la misma lógica de negocio en ambas plataformas." },
      { en: "Drove async/await and Combine adoption and resolved Swift 6 strict concurrency issues across the streaming codebase.", es: "Impulsé la adopción de async/await y Combine, y resolví los problemas de concurrencia estricta de Swift 6 en el código de streaming." },
      { en: "Mentored junior iOS developers through code reviews and architecture guidance (VIPER, MVVM).", es: "Acompañé a desarrolladores iOS junior con code reviews y guía de arquitectura (VIPER, MVVM)." },
      { en: "Fixed performance and memory issues, working in Scrum with QA, Design and Backend.", es: "Resolví problemas de rendimiento y memoria, trabajando en Scrum con QA, Diseño y Backend." },
    ],
  },
  {
    role: { en: "Mobile Tech Lead (freelance)", es: "Tech Lead Mobile (freelance)" },
    company: "Mutual del Tiro", place: "Santa Fe",
    dates: { en: "Jul 2023 – Sep 2023", es: "Jul 2023 – Sep 2023" }, platform: "both",
    summary: { en: "Sole developer of a native app for iOS and Android, from architecture to both stores.", es: "Única desarrolladora de una app nativa para iOS y Android, desde la arquitectura hasta ambas tiendas." },
    points: [
      { en: "Built it in Swift and SwiftUI on iOS and Kotlin and Jetpack Compose on Android, consuming REST APIs via URLSession and Retrofit.", es: "La construí en Swift y SwiftUI para iOS y en Kotlin y Jetpack Compose para Android, consumiendo APIs REST con URLSession y Retrofit." },
      { en: "Owned the release cycle on both platforms: architecture, implementation, testing and App Store and Google Play submission.", es: "Estuve a cargo del ciclo de release en ambas plataformas: arquitectura, implementación, testing y publicación en App Store y Google Play." },
      { en: "MVVM with Core Data and Room for offline support.", es: "MVVM con Core Data y Room para funcionar sin conexión." },
      { en: "Handled every technical decision, client communication and delivery timeline across both codebases.", es: "Tomé todas las decisiones técnicas y me encargué de la comunicación con el cliente y los plazos en ambos códigos." },
    ],
  },
  {
    role: { en: "Mobile Developer (iOS / Android)", es: "Desarrolladora Mobile (iOS / Android)" },
    company: "Nexo Soluciones", place: "Córdoba",
    dates: { en: "Mar 2021 – Oct 2022", es: "Mar 2021 – Oct 2022" }, platform: "both",
    summary: { en: "Native features for Android and iOS, including a cinema app.", es: "Funcionalidades nativas para Android e iOS, incluida una app de cine." },
    points: [
      { en: "Android in Kotlin with MVVM, Coroutines, Flow and Jetpack; iOS in Swift with SwiftUI and UIKit.", es: "Android en Kotlin con MVVM, Coroutines, Flow y Jetpack; iOS en Swift con SwiftUI y UIKit." },
      { en: "Led the Java to Kotlin migration and added unit tests with JUnit, Mockito and XCTest.", es: "Lideré la migración de Java a Kotlin y sumé tests unitarios con JUnit, Mockito y XCTest." },
      { en: "Managed releases on Google Play Console and App Store Connect, and integrated Firebase (Analytics, Crashlytics, FCM).", es: "Gestioné los releases en Google Play Console y App Store Connect, e integré Firebase (Analytics, Crashlytics, FCM)." },
    ],
  },
  {
    role: { en: "Android Developer", es: "Desarrolladora Android" },
    company: "VMG–FAR", place: "Santa Fe",
    dates: { en: "Oct 2019 – Mar 2021", es: "Oct 2019 – Mar 2021" }, platform: "android",
    summary: { en: "Apps and internal tools for a factory's production lines.", es: "Apps y herramientas internas para las líneas de producción de una fábrica." },
    points: [
      { en: "Designed mobile apps around the plant's production processes.", es: "Diseñé apps mobile pensadas para los procesos productivos de la planta." },
      { en: "Administered PostgreSQL, MySQL and SQL Server databases, and maintained servers.", es: "Administré bases de datos PostgreSQL, MySQL y SQL Server, y mantuve los servidores." },
    ],
  },
];

export type App = { name: string; kind: T; desc: T; tags: string[]; platforms: ("iOS" | "Android" | "KMP")[]; link?: { href: string; label: keyof typeof ui } };

export const apps: App[] = [
  {
    name: "Flow", kind: { en: "Streaming · Telecom Argentina", es: "Streaming · Telecom Argentina" },
    desc: { en: "Live TV, on-demand movies and series. I worked on the home screen and how people discover new features.", es: "TV en vivo, películas y series a demanda. Trabajé en la home y en cómo la gente descubre nuevas funciones." },
    tags: ["SwiftUI", "UIKit", "Combine", "Kotlin", "VIPER"], platforms: ["iOS", "Android", "KMP"],
    link: { href: "https://apps.apple.com/ar/app/flow/id1067858594", label: "viewStore" },
  },
  {
    name: "Fleeting", kind: { en: "Logistics marketplace · Quantum Software", es: "Marketplace logístico · Quantum Software" },
    desc: { en: "A logistics marketplace. One Kotlin Multiplatform codebase for the logic, native UI on each platform.", es: "Un marketplace de logística. Una base Kotlin Multiplatform para la lógica y UI nativa en cada plataforma." },
    tags: ["Kotlin Multiplatform", "Jetpack Compose", "SwiftUI"], platforms: ["KMP", "iOS", "Android"],
    link: { href: "https://somosquantum.com.ar", label: "visit" },
  },
  {
    name: "Mutual del Tiro", kind: { en: "Member services · Rafaela", es: "Servicios para socios · Rafaela" },
    desc: { en: "The members' app for a local mutual association, built and published end to end on both stores.", es: "La app para socios de una mutual local, construida y publicada de punta a punta en ambas tiendas." },
    tags: ["SwiftUI", "Jetpack Compose", "MVVM", "Core Data", "Room"], platforms: ["iOS", "Android"],
    link: { href: "https://apps.apple.com/ar/app/mutual-del-tiro/id6464432505", label: "viewStore" },
  },
];

export const stack = [
  { name: "iOS", accent: "ios", items: ["Swift", "SwiftUI", "UIKit", "Combine", "async/await", "Core Data", "XCTest", "VIPER", "MVVM"] },
  { name: "Android", accent: "android", items: ["Kotlin", "Jetpack Compose", "Coroutines", "Flow", "Room", "Retrofit", "Firebase", "JUnit · Mockito"] },
  { name: "Kotlin Multiplatform", accent: "kmp", items: ["Shared modules", "expect / actual", "SwiftUI + Compose UIs"] },
  { name: "Team", accent: "team", items: ["Scrum", "Code review", "Mentoring", "Jira", "Confluence", "GitHub", "GitLab"] },
] as const;

export const education = [
  { title: { en: "Computer Engineering", es: "Ingeniería en Computación" }, place: { en: "Catholic University of Santiago del Estero", es: "Universidad Católica de Santiago del Estero" } },
  { title: { en: "Technician in Production of Goods and Services", es: "Técnica en Producción de Bienes y Servicios" }, place: { en: "Technical School N°495, Rafaela", es: "E.E.T.P. N°495, Rafaela" } },
];
