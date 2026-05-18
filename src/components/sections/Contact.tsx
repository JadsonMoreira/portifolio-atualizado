
const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-60 text-center max-w-2xl mx-auto scroll-mt-24">
      <p className="font-mono text-[var(--green)] text-sm mb-4">05. Qual o próximo passo?</p>
      <h2 className="text-4xl md:text-5xl font-bold text-[var(--lightest-slate)] mb-6">Entre em Contato</h2>
      <p className="text-[var(--slate)] mb-12 text-lg">
        Embora eu não esteja buscando novas oportunidades no momento, minha caixa de entrada está sempre aberta. Se você
        tiver alguma dúvida ou apenas quiser dizer olá, farei o possível para responder!
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        <a
          href="https://wa.me/5571992969727"
          target="_blank"
          className="px-10 py-5 border border-[var(--green)] text-[var(--green)] font-mono rounded hover:bg-[var(--green)]/10 transition-all inline-block"
        >
          Diga Olá
        </a>
        {/* <a
          href="https://wa.me/5500000000000"
          target="_blank"
          rel="noopener noreferrer"
          className="px-10 py-5 border border-[var(--green)] text-[var(--green)] font-mono rounded hover:bg-[var(--green)]/10 transition-all inline-block"
        >
          WhatsApp
        </a> */}
      </div>
    </section>
  );
};

export default Contact;
