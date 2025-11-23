'use client';

import { motion } from "framer-motion";
import AtmosphereLights from "./AtmosphereLights";

export default function Hero() {
  return (
    <section className="hero">
      <AtmosphereLights />

      <div className="hero-glass" />

      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="hero-title">Desenvolvedora <br /> Front-end e Mobile</h2>

        <p className="hero-sub">
          React • React Native • TypeScript • JavaScript
        </p>

        <p className="hero-tagline">
          Criando interfaces modernas com foco em clareza, fluidez e experiência.
        </p>

        <div className="hero-buttons-wrapper">
          <div className="hero-buttons">
            <button 
              className="btn primary"
              onClick={() => {
                document.getElementById('projetos')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Ver Portfólio
            </button>
            <a className="btn ghost" href="/Karin_Andrade_Silveira_CV.pdf">Baixar Currículo</a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
