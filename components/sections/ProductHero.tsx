import { heroContent } from "../../lib/content";

const ProductHero = () => {
  return (
    <section className="section bg-mist-50">
      <div className="container flex flex-col items-start gap-8">
        <span className="hero-fade-up text-xs uppercase tracking-[0.28em] text-graphite-500">
          {heroContent.brandName}
        </span>

        <div className="flex max-w-2xl flex-col gap-6">
          <h1 className="hero-fade-up hero-fade-up-delay-1 text-h1 text-ink-900">
            {heroContent.title}
          </h1>
          <p className="hero-fade-up hero-fade-up-delay-2 text-body text-ink-700">
            {heroContent.subtitle}
          </p>
        </div>

        <div className="hero-fade-up hero-fade-up-delay-3 flex flex-wrap gap-4">
          <a
            className="inline-flex items-center justify-center rounded-md bg-ink-900 px-6 py-3 text-sm font-medium text-mist-50 transition hover:bg-ink-800"
            href="#series"
          >
            {heroContent.cta.primary}
          </a>
          <a
            className="inline-flex items-center justify-center rounded-md border border-graphite-300 px-6 py-3 text-sm font-medium text-ink-800 transition hover:border-graphite-400 hover:text-ink-900"
            href="#about"
          >
            {heroContent.cta.secondary}
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProductHero;
