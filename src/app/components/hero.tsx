'use client';

import Image from 'next/image';
import { AnimatedImageContainer } from './ui/animations/AnimatedImageContainer';
import { AnimatedItem } from './ui/animations/AnimatedItem';
import { AnimatedSection } from './ui/animations/AnimatedSection';
import { FloatingCircle } from './ui/animations/FloatingCircle';
import { FloatingElement } from './ui/animations/FloatingElement';
import { PulsatingCircle } from './ui/animations/PulsatingCircle';
import { ScrollIndicator } from './ui/animations/ScrollIndicator';
import { TypeEffect } from './ui/animations/TypeEffect';
import ContainerPage from './ui/container-page';

const Hero = () => {
  return (
    <ContainerPage>
      <div
        className="hero-section -mt-1 md:-mt-1 bg-background text-foreground transition-colors duration-300"
        id="hero"
      >
        <AnimatedSection className="relative w-full min-h-screen flex items-center overflow-hidden">
          {/* Fondo decorativo */}
          <FloatingCircle className="absolute right-10 top-1/3 w-64 h-64 rounded-full border-8 border-chart-1 opacity-30 z-0" />

          <div className="container mx-auto px-6 z-10 flex flex-col md:flex-row items-center justify-between">
            {/* Texto */}
            <div className="w-full md:w-1/2 space-y-8 text-center md:text-left">
              <AnimatedItem>
                <div className="leading-tight tracking-tight">
                  <h1 className="text-3xl md:text-3xl lg:text-6xl font-extrabold text-foreground mb-2">
                    Transformar tu forma de{' '}
                    <span className="text-primary">estudiar.</span>
                  </h1>
                  <TypeEffect
                    sequences={[
                      'Estudia mejor.',
                      'Estudia más rápido.',
                      'Estudia de forma efectiva.',
                      'Estudia con PLATÓN.',
                    ]}
                    className="typing-effect md:text-xl font-semibold text-primary"
                  />
                </div>
              </AnimatedItem>

              <AnimatedItem delay={0.2}>
                <p className="text-base md:text-lg text-muted-foreground max-w-md mx-auto md:mx-0 font-medium leading-relaxed">
                  Estudiar no debería ser complicado. Convierte cualquier documento en un camino claro hacia el aprendizaje.
                </p>
              </AnimatedItem>

              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-2">
                <AnimatedItem delay={0.3}>
                  <button className="bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-3 rounded-lg text-base md:text-lg shadow-md hover:shadow-lg transition-all duration-300 font-medium">
                    ¿Listo para estudiar?
                  </button>
                </AnimatedItem>

                <AnimatedItem delay={0.4}>
                  <button className="bg-secondary text-secondary-foreground hover:bg-secondary/80 px-6 py-3 rounded-lg text-base md:text-lg shadow-sm hover:shadow-md transition-all duration-300 font-medium">
                    Explorar recursos
                  </button>
                </AnimatedItem>
              </div>
            </div>

            {/* Imagen */}
            <AnimatedImageContainer className="relative w-full md:w-1/2 h-[400px] md:h-[500px] lg:h-[600px] mt-12 md:mt-0">
              <FloatingElement className="w-full h-full">
                <Image
                  src="/images/Platonsito.svg"
                  alt="Platón - Aprendizaje filosófico interactivo"
                  fill
                  className="object-contain filter drop-shadow-lg"
                  priority
                />
              </FloatingElement>
              <PulsatingCircle className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 md:w-80 md:h-80 rounded-full bg-muted opacity-20 -z-10" />
            </AnimatedImageContainer>
          </div>

          {/* Indicador de scroll */}
          <ScrollIndicator className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-muted-foreground">
            <span className="text-sm md:text-base font-medium mb-4 transition-colors duration-300">
              Descubre más
            </span>
            <svg
              className="w-6 h-6 animate-bounce"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </ScrollIndicator>
        </AnimatedSection>
      </div>
    </ContainerPage>
  );
};

export default Hero;