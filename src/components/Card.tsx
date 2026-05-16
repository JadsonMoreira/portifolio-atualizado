
import React from 'react';

interface CardProps {
  title?: string;
  subtitle?: string;
  image?: string;
  footer?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
  imageClassName?: string;
  highlightBorder?: boolean;
  externalLinks?: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ 
  title, 
  subtitle, 
  image, 
  footer, 
  children, 
  className = "", 
  imageClassName = "",
  highlightBorder = false,
  externalLinks
}) => {
  return (
    <div className={`group relative h-full flex flex-col ${className}`}>
      {/* Efeito Glow de Fundo */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-[var(--green)] to-[var(--lightest-navy)] rounded-lg blur opacity-0 group-hover:opacity-20 transition duration-500"></div>
      
      <div className={`relative flex flex-col h-full bg-[var(--light-navy)] rounded-lg border border-[var(--lightest-navy)] group-hover:border-[var(--green)]/40 transition-all duration-300 overflow-hidden shadow-xl group-hover:-translate-y-2`}>
        
        {/* Espaço para Imagem (Opcional) */}
        {image ? (
          <div className="relative h-48 overflow-hidden">
            <div className="absolute inset-0 bg-[var(--navy)]/40 z-10 group-hover:bg-transparent transition-colors duration-300"></div>
            <img 
              src={image} 
              className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 ${imageClassName}`} 
              alt={title || "Card image"} 
            />
            {externalLinks && (
              <div className="absolute top-4 right-4 z-20 flex gap-3">
                {externalLinks}
              </div>
            )}
          </div>
        ) : externalLinks ? (
          /* Se não houver imagem mas houver links, mostra os links no topo */
          <div className="p-6 pb-0 flex justify-end">
            <div className="z-20">
              {externalLinks}
            </div>
          </div>
        ) : null}

        {/* Conteúdo do Card */}
        <div className="p-6 md:p-8 flex flex-col flex-1">
          {subtitle && (
            <p className="font-mono text-[var(--green)] text-[10px] uppercase tracking-widest mb-2">{subtitle}</p>
          )}
          
          {title && (
            <div className="flex items-center gap-3 mb-4">
              {highlightBorder && <div className="w-1.5 h-6 bg-[var(--green)] rounded-full"></div>}
              <h3 className="text-[var(--lightest-slate)] font-bold text-xl group-hover:text-[var(--green)] transition-colors leading-tight">
                {title}
              </h3>
            </div>
          )}

          <div className="flex-1 text-[var(--slate)] text-sm leading-relaxed">
            {children}
          </div>

          {/* Rodapé do Card (Opcional) */}
          {footer && (
            <div className="mt-6 pt-6 border-t border-[var(--lightest-navy)] group-hover:border-[var(--green)]/10 transition-colors">
              {footer}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
