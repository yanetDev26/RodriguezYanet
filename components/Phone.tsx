"use client";
import { useRef, useState } from "react";
import { Lang, ui } from "@/lib/content";

export default function Phone({ lang }: { lang: Lang }) {
  const [android, setAndroid] = useState(false);
  const [tilt, setTilt] = useState({ x: -6, y: 14 });
  const drag = useRef<{ x: number; y: number; tx: number; ty: number } | null>(null);

  const onDown = (e: React.PointerEvent) => {
    (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
    drag.current = { x: e.clientX, y: e.clientY, tx: tilt.x, ty: tilt.y };
  };
  const onMove = (e: React.PointerEvent) => {
    const d = drag.current;
    if (!d) return;
    const clamp = (v: number, m: number) => Math.max(-m, Math.min(m, v));
    setTilt({ x: clamp(d.tx - (e.clientY - d.y) / 6, 22), y: clamp(d.ty + (e.clientX - d.x) / 5, 34) });
  };
  const onUp = () => { drag.current = null; };

  return (
    <figure className="phone-stage">
      <div
        className="phone-tilt"
        style={{ transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)` }}
        onPointerDown={onDown} onPointerMove={onMove} onPointerUp={onUp} onPointerCancel={onUp}
      >
        <div className={`phone-flip ${android ? "is-android" : ""}`}>
          {/* iOS face */}
          <div className="face face-ios" aria-hidden={android}>
            <div className="ios-status"><span>9:41</span><span className="island" /><span className="ios-icons">●●● ▮</span></div>
            <div className="ios-body">
              <p className="ios-small">{lang === "es" ? "Perfil" : "Profile"}</p>
              <p className="ios-large">Yanet</p>
              <div className="ios-avatar">YR</div>
              <ul className="ios-list">
                <li><span className="sw sw-swift" />Swift<span className="chev">›</span></li>
                <li><span className="sw sw-ui" />SwiftUI<span className="chev">›</span></li>
                <li><span className="sw sw-comb" />Combine<span className="chev">›</span></li>
                <li><span className="sw sw-kmp" />KMP<span className="chev">›</span></li>
              </ul>
            </div>
            <div className="ios-tabs"><span className="on">●</span><span>●</span><span>●</span></div>
            <div className="ios-home" />
          </div>
          {/* Android face */}
          <div className="face face-android" aria-hidden={!android}>
            <div className="and-status"><span>9:41</span><span className="hole" /><span>▾ ▮</span></div>
            <div className="and-bar">{lang === "es" ? "Perfil" : "Profile"}</div>
            <div className="and-card">
              <div className="and-avatar">YR</div>
              <div><p className="and-name">Yanet Rodriguez</p><p className="and-sub">Mobile · Kotlin</p></div>
            </div>
            <div className="and-chips">
              <span>Kotlin</span><span>Compose</span><span>Coroutines</span><span>Flow</span><span>KMP</span>
            </div>
            <div className="and-fab">+</div>
            <div className="and-nav"><span className="on" /><span /><span /></div>
          </div>
        </div>
      </div>
      <figcaption>
        <button type="button" className="flip-btn" onClick={() => setAndroid(a => !a)} aria-pressed={android}>
          {android ? ui.flipToIos[lang] : ui.flipToAndroid[lang]}
        </button>
        <span>{ui.phoneCaption[lang]}</span>
      </figcaption>
    </figure>
  );
}
