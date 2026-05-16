
const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-60 text-center max-w-2xl mx-auto scroll-mt-24">
      <p className="font-mono text-[var(--green)] text-sm mb-4">05. Qual o próximo passo?</p>
      <h2 className="text-4xl md:text-5xl font-bold text-[var(--lightest-slate)] mb-6">Entre em Contato</h2>
      <p className="text-[var(--slate)] mb-12 text-lg">
        Embora eu não esteja buscando novas oportunidades no momento, minha caixa de entrada está sempre aberta. Se você
        tiver alguma dúvida ou apenas quiser dizer olá, farei o possível para responder!
      </p>
      <a
        href="mailto:hello@jadson.dev"
        className="px-10 py-5 border border-[var(--green)] text-[var(--green)] font-mono rounded hover:bg-[var(--green)]/10 transition-all inline-block"
      >
        Diga Olá
      </a>
    </section>
  );
};

export default Contact;
