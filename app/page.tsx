"use client";
import { useEffect, useState } from "react";
import Phone from "@/components/Phone";
import { Lang, ui, jobs, apps, stack, education, contact } from "@/lib/content";

export default function Home() {
  const [lang, setLang] = useState<Lang>("en");
  const [open, setOpen] = useState<number | null>(1);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem("lang") as Lang | null;
      if (saved === "en" || saved === "es") setLang(saved);
      else if (navigator.language.startsWith("es")) setLang("es");
    } catch {}
  }, []);
  useEffect(() => {
    document.documentElement.lang = lang;
    try { localStorage.setItem("lang", lang); } catch {}
  }, [lang]);

  const copyEmail = async () => {
    try { await navigator.clipboard.writeText(contact.email); setCopied(true); setTimeout(() => setCopied(false), 1800); } catch {}
  };

  return (
    <>
      <header className="nav">
        <div className="wrap nav-inner">
          <a href="#top" className="brand">Yanet Rodriguez</a>
          <nav className="nav-links" aria-label="Main">
            <a href="#work">{ui.nav.work[lang]}</a>
            <a href="#apps">{ui.nav.apps[lang]}</a>
            <a href="#stack">{ui.nav.stack[lang]}</a>
            <a href="#contact">{ui.nav.contact[lang]}</a>
          </nav>
          <div className="lang" role="group" aria-label="Language">
            {(["en", "es"] as Lang[]).map(l => (
              <button key={l} type="button" aria-pressed={lang === l} onClick={() => setLang(l)}>{l.toUpperCase()}</button>
            ))}
          </div>
        </div>
      </header>

      <main id="top">
        <section className="hero wrap">
          <div className="hero-copy">
            <h1>Yanet<br />Rodriguez</h1>
            <p className="role">{ui.role[lang]}</p>
            <p className="intro">{ui.intro[lang]}</p>
            <p className="looking"><span className="pulse" aria-hidden />{ui.looking[lang]}</p>
            <div className="actions">
              <a className="btn primary" href={`mailto:${contact.email}`}>{ui.emailMe[lang]}</a>
              <a className="btn" href={contact.cv} download>{ui.cv[lang]}</a>
              <a className="btn plain" href={contact.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </div>
          </div>
          <Phone lang={lang} />
        </section>

        <section className="facts wrap" aria-label="Highlights">
          {ui.facts.map((f, i) => (
            <div key={i} className="fact">
              <strong>{lang === "es" && "valueEs" in f ? f.valueEs : f.value}</strong>
              <span>{f.label[lang]}</span>
            </div>
          ))}
        </section>

        <section id="work" className="wrap section">
          <div className="section-head">
            <h2>{ui.workTitle[lang]}</h2>
            <p>{ui.workHint[lang]}</p>
          </div>
          <ol className="jobs">
            {jobs.map((j, i) => {
              const isOpen = open === i;
              return (
                <li key={i} className={`job ${isOpen ? "open" : ""}`} data-platform={j.platform}>
                  <button type="button" className="job-head" aria-expanded={isOpen} onClick={() => setOpen(isOpen ? null : i)}>
                    <span className="job-dates">{j.dates[lang]}</span>
                    <span className="job-main">
                      <span className="job-role">{j.role[lang]}</span>
                      <span className="job-co">{j.company}, {j.place}</span>
                    </span>
                    <span className="job-plat">{j.platform === "both" ? "iOS + Android" : j.platform === "ios" ? "iOS" : "Android"}</span>
                    <span className="job-toggle" aria-hidden>{isOpen ? "–" : "+"}</span>
                  </button>
                  <div className="job-body" hidden={!isOpen}>
                    <p className="job-summary">{j.summary[lang]}</p>
                    <ul>{j.points.map((p, k) => <li key={k}>{p[lang]}</li>)}</ul>
                  </div>
                </li>
              );
            })}
          </ol>
        </section>

        <section id="apps" className="wrap section">
          <div className="section-head"><h2>{ui.appsTitle[lang]}</h2></div>
          <div className="apps">
            {apps.map(a => (
              <article key={a.name} className="app">
                <div className="app-top">
                  <div className="app-icon" aria-hidden>{a.name.slice(0, 1)}</div>
                  <div>
                    <h3>{a.name}</h3>
                    <p className="app-kind">{a.kind[lang]}</p>
                  </div>
                </div>
                <p className="app-desc">{a.desc[lang]}</p>
                <p className="app-plats">{a.platforms.map(p => <span key={p} className={`plat plat-${p.toLowerCase()}`}>{p}</span>)}</p>
                <p className="app-tags">{a.tags.join(", ")}</p>
                {a.link && (
                  <a className="app-link" href={a.link.href} target="_blank" rel="noopener noreferrer">
                    {(ui[a.link.label] as { en: string; es: string })[lang]} ↗
                  </a>
                )}
              </article>
            ))}
          </div>
        </section>

        <section id="stack" className="wrap section">
          <div className="section-head"><h2>{ui.stackTitle[lang]}</h2></div>
          <div className="stack">
            {stack.map(s => (
              <div key={s.name} className={`stack-col acc-${s.accent}`}>
                <h3>{s.name === "Team" ? (lang === "es" ? "Equipo" : "Team") : s.name}</h3>
                <ul>{s.items.map(it => <li key={it}>{it}</li>)}</ul>
              </div>
            ))}
          </div>
          <div className="edu">
            <h3>{ui.eduTitle[lang]}</h3>
            {education.map((e, i) => (
              <p key={i}><strong>{e.title[lang]}</strong><span>{e.place[lang]}</span></p>
            ))}
            <p><strong>{lang === "es" ? "Idiomas" : "Languages"}</strong><span>{lang === "es" ? "Español nativo, inglés B2" : "Spanish (native), English (B2)"}</span></p>
          </div>
        </section>

        <section id="contact" className="wrap section contact">
          <h2>{ui.contactTitle[lang]}</h2>
          <p>{ui.contactText[lang]}</p>
          <div className="contact-row">
            <a className="email-big" href={`mailto:${contact.email}`}>{contact.email}</a>
            <button type="button" className="btn" onClick={copyEmail}>
              {copied ? (lang === "es" ? "Copiado" : "Copied") : (lang === "es" ? "Copiar mail" : "Copy email")}
            </button>
          </div>
          <ul className="links">
            <li><a href={contact.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            <li><a href={contact.medium} target="_blank" rel="noopener noreferrer">Medium</a></li>
            <li><a href={contact.cv} download>{ui.cv[lang]}</a></li>
          </ul>
        </section>
      </main>

      <footer className="wrap footer">
        <span>© {new Date().getFullYear()} Yanet Rodriguez · Rafaela, Argentina</span>
        <span>{ui.footer[lang]}</span>
      </footer>
    </>
  );
}
