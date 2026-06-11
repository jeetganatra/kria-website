import { Reveal } from "../Components/Reveal";

export function ContactUs() {
  return (
    <section className="border-t border-line text-left">
      <div className="px-6 py-16 md:px-12 md:py-24">
        <Reveal>
          <div className="flex items-center gap-4">
            <span className="h-px w-10 bg-clay" />
            <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-muted md:text-xs">
              Get in touch
            </p>
          </div>
          <h2 className="mt-6 max-w-[18ch] text-4xl leading-[1.05] tracking-tight md:text-6xl">
            Let’s shape a space{" "}
            <em className="text-clay">
              worth keeping.
            </em>
          </h2>
        </Reveal>

        <Reveal delay={120}>
          <div className="mt-12 grid grid-cols-1 gap-y-8 md:mt-16 md:grid-cols-2 md:gap-x-12">
            <div className="border-t border-line pt-4">
              <p className="text-[11px] uppercase tracking-[0.22em] text-muted">
                Email
              </p>
              <a
                href="mailto:ar.rinishajain@gmail.com"
                className="link-underline mt-2 inline-block font-display text-xl tracking-tight break-all md:text-3xl"
              >
                ar.rinishajain@gmail.com
              </a>
            </div>
            <div className="border-t border-line pt-4">
              <p className="text-[11px] uppercase tracking-[0.22em] text-muted">
                Phone
              </p>
              <p className="mt-2 font-display text-xl tracking-tight md:text-3xl">
                <a
                  href="tel:+919669432681"
                  className="link-underline"
                >
                  +91 96694 32681
                </a>
                <span className="px-3 text-line">
                  /
                </span>
                <a
                  href="tel:+918103722558"
                  className="link-underline"
                >
                  +91 81037 22558
                </a>
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={200}>
          <a
            href="https://drive.google.com/file/d/1TVFeXQNlbGkHp7wamDrXd5YKs3pyvi7M/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-12 inline-flex items-center gap-3 rounded-full border border-ink px-7 py-3 text-[11px] font-medium uppercase tracking-[0.22em] transition-colors duration-300 hover:bg-ink hover:text-paper md:mt-16"
          >
            Explore our portfolio
            <span
              aria-hidden
              className="transition-transform duration-300 group-hover:translate-x-1.5"
            >
              →
            </span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
