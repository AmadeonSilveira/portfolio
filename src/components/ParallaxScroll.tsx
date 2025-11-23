'use client';

import { useEffect } from 'react';

export default function ParallaxScroll() {
  useEffect(() => {
    // Desabilitar parallax em dispositivos móveis para melhor performance
    if (typeof window === 'undefined') return;
    if (window.innerWidth <= 768) return;

    let ticking = false;
    let rafId: number | null = null;

    const handleScroll = () => {
      if (!ticking) {
        rafId = window.requestAnimationFrame(() => {
          const scrollY = window.scrollY;
          document.documentElement.style.setProperty('--scroll', scrollY.toString());
          
          // Aplicar parallax diretamente nas fotos flutuantes
          const floatingPhotos = document.querySelectorAll('.about-photo-stack .floating-photo-a, .about-photo-stack .floating-photo-b, .about-photo-stack .floating-photo-c, .about-photo-stack .floating-photo-d');
          floatingPhotos.forEach((photo) => {
            const parallaxOffset = scrollY * 0.08;
            (photo as HTMLElement).style.setProperty('--parallax', `${parallaxOffset}px`);
          });
          
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial call

    return () => {
      if (rafId !== null) {
        window.cancelAnimationFrame(rafId);
      }
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return null;
}

