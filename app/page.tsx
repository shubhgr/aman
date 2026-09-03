import Image from "next/image";
import GradRightLogo from "./components/GradRightLogo";

const experience = [
  {
    role: "Co-Founder",
    org: "GradRight Inc.",
    period: "2019 – Present",
    showLogo: true,
  },
  {
    role: "Founding Project Director",
    org: "Ashoka University",
    period: "2008 – 2014",
  },
  {
    role: "Consultant",
    org: "Krea University, Atria University, Plaksha University, Indian School of Public Policy, Khangchendzonga Buddhist University, Sikkim",
    period: "2015 – 2020",
  },
  {
    role: "Field Engineer",
    org: "Schlumberger Oilfield Services — South-East Asia, Far East, Middle East & USA",
    period: "2000 – 2003",
  },
];

const education = [
  {
    degree: "B.Tech",
    school: "IIT Delhi",
    year: "2000",
  },
  {
    degree: "MBA",
    school: "Indian School of Business, Hyderabad",
    year: "2007",
  },
];

const articles = [
  {
    title:
      "Policy panic: Why new US visa rules may benefit Indian students",
    publication: "The Hindu",
    href: "https://www.thehindu.com/education/policy-panic-why-new-us-visa-rules-may-benefit-indian-students/article70175413.ece",
  },
  {
    title:
      "How the end of H-1B lottery is a correction that will benefit talented Indian students",
    publication: "The Hindu",
    href: "https://www.thehindu.com/education/how-the-end-of-h-1b-lottery-is-a-correction-that-will-benefit-talented-indian-students/article70439602.ece",
  },
  {
    title:
      "Universities are not fast food chains — global campuses must do more than just replicating recipes to succeed in India",
    publication: "Hindustan Times",
    href: "https://www.hindustantimes.com/education/features/universities-are-not-fast-food-chains-global-campuses-must-do-more-than-just-replicating-recipes-to-succeed-in-india-101760358930195.html",
  },
  {
    title: "The crisis in education financing",
    publication: "India Today Best Colleges",
    href: "https://bestcolleges.indiatoday.in/news-detail/the-crisis-in-education-financing",
  },
];

export default function Home() {
  return (
    <div className="relative flex min-h-full flex-col overflow-x-hidden bg-background">
      <main id="top" className="flex-1">
        {/* First fold: intro + credentials */}
        <section className="relative isolate overflow-hidden border-b border-line">
          <div className="mx-auto w-full max-w-6xl px-6 py-10 sm:px-8 sm:py-12 lg:px-10 lg:py-14">
            <div className="grid items-start gap-8 lg:grid-cols-[1fr_220px] lg:gap-12">
              <div>
                <h1 className="animate-rise text-[clamp(2.4rem,5vw,3.75rem)] font-semibold leading-[0.98] tracking-[-0.04em] text-foreground">
                  Aman Singh
                </h1>
                <div className="animate-draw mt-4 h-px w-16 origin-left bg-brand" />
                <p className="animate-rise-delay-1 mt-4 max-w-xl text-base leading-relaxed text-muted">
                  Co-Founder of GradRight. Building transparent pathways to
                  higher education for students worldwide.
                </p>
                <div className="animate-rise-delay-2 mt-5">
                  <GradRightLogo className="h-6 w-auto" />
                </div>
              </div>

              <div className="animate-rise relative mx-auto aspect-[4/5] w-full max-w-[180px] overflow-hidden sm:max-w-[200px] lg:mx-0 lg:max-w-none">
                <Image
                  src="/aman-singh.png"
                  alt="Aman Singh, Co-Founder of GradRight"
                  fill
                  priority
                  sizes="200px"
                  className="object-cover object-[center_18%]"
                />
              </div>
            </div>

            <div className="animate-rise-delay-2 mt-10 grid gap-8 border-t border-line pt-8 lg:grid-cols-[1.4fr_0.6fr] lg:gap-12">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand">
                  Experience
                </p>
                <ul className="mt-4 space-y-3">
                  {experience.map((item) => (
                    <li
                      key={item.role + item.period}
                      className="grid gap-1 sm:grid-cols-[7.5rem_1fr] sm:gap-4"
                    >
                      <p className="text-sm text-brand">{item.period}</p>
                      <div className="min-w-0">
                        <p className="text-sm font-semibold text-foreground sm:text-[15px]">
                          {item.role}
                          <span className="font-normal text-muted">
                            {" "}
                            ·{" "}
                            {"showLogo" in item && item.showLogo
                              ? "GradRight Inc."
                              : item.org}
                          </span>
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand">
                  Education
                </p>
                <ul className="mt-4 space-y-3">
                  {education.map((item) => (
                    <li key={item.degree} className="border-l-2 border-brand pl-3">
                      <p className="text-sm font-semibold text-foreground">
                        {item.degree}
                      </p>
                      <p className="text-sm text-muted">
                        {item.school}, {item.year}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* About */}
        <section
          id="about"
          className="border-t border-line bg-[color-mix(in_srgb,#121022_2.5%,#F8F7F9)]"
        >
          <div className="mx-auto grid w-full max-w-6xl gap-10 px-6 py-20 sm:px-8 lg:grid-cols-[0.4fr_1fr] lg:gap-16 lg:px-10 lg:py-28">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand">
                Brief bio
              </p>
              <h2 className="mt-4 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
                Institution builder. Platform founder.
              </h2>
            </div>
            <div className="space-y-6 text-base leading-8 text-muted sm:text-lg sm:leading-9">
              <p>
                Aman is a specialist in the higher education sector with over
                twenty-five years of experience. He co-founded GradRight in 2019
                with a vision to build a global tech-platform that brings
                together students, universities, banks and all service providers
                of the world to democratise access to higher education and drive
                transparency and accountability in the sector.
              </p>
              <p>
                Prior to GradRight, he was the Founding Project Director of
                Ashoka University, where he led its set-up and launch from
                2008–2015. Thereafter, he played a critical role in the set-up
                of eight new institutions like Krea University, Atria
                University, Plaksha University, Indian School of Public Policy
                and Kanchenjunga Buddhist University in Sikkim.
              </p>
              <p>
                He started his professional career as a Field Engineer with
                Schlumberger Oilfield Services and worked in Indonesia, Japan,
                Middle East and USA. Aman holds a BTech from IIT Delhi and MBA
                from Indian School of Business (ISB), Hyderabad.
              </p>
            </div>
          </div>
        </section>

        {/* Institutions */}
        <section
          id="institutions"
          className="border-t border-line"
        >
          <div className="mx-auto w-full max-w-6xl px-6 py-20 sm:px-8 lg:px-10 lg:py-28">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand">
                Institutions
              </p>
              <h2 className="mt-4 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
                Universities and institutions built
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-muted">
                Logos and campus visuals will go here.
              </p>
            </div>

            <ul className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {[
                "Ashoka University",
                "Krea University",
                "Atria University",
                "Plaksha University",
                "Indian School of Public Policy",
                "Khangchendzonga Buddhist University",
              ].map((name) => (
                <li
                  key={name}
                  className="flex min-h-36 flex-col justify-between border border-dashed border-line bg-background/60 p-6"
                >
                  <div className="flex h-14 items-center justify-center border border-dashed border-line bg-[color-mix(in_srgb,#782BFF_6%,#F8F7F9)] text-xs font-medium uppercase tracking-[0.14em] text-muted">
                    Logo placeholder
                  </div>
                  <p className="mt-5 text-base font-semibold text-foreground">
                    {name}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Moments */}
        <section id="moments" className="border-t border-line">
          <div className="mx-auto w-full max-w-6xl px-6 py-20 sm:px-8 lg:px-10 lg:py-28">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand">
                Moments
              </p>
              <h2 className="mt-4 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
                With leaders and changemakers
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-muted">
                Photos with notable people will go here.
              </p>
            </div>

            <ul className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {[1, 2, 3].map((item) => (
                <li
                  key={item}
                  className="flex aspect-[4/3] flex-col items-center justify-center border border-dashed border-line bg-[color-mix(in_srgb,#782BFF_5%,#F8F7F9)] p-6 text-center"
                >
                  <p className="text-sm font-semibold text-foreground">
                    Photo placeholder {item}
                  </p>
                  <p className="mt-2 text-sm text-muted">
                    Caption / people names
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Quote */}
        <section
          id="quote"
          className="border-t border-line bg-[color-mix(in_srgb,#782BFF_7%,#F8F7F9)]"
        >
          <div className="mx-auto w-full max-w-4xl px-6 py-20 text-center sm:px-8 lg:px-10 lg:py-28">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand">
              Founder&apos;s note
            </p>
            <blockquote className="mt-8 text-2xl font-medium leading-snug tracking-tight text-foreground sm:text-3xl sm:leading-snug">
              “Quote placeholder — founder quotation will go here.”
            </blockquote>
            <p className="mt-8 text-sm font-semibold text-muted">
              — Aman Singh, Co-Founder, GradRight
            </p>
          </div>
        </section>

        {/* Articles */}
        <section
          id="articles"
          className="border-t border-line"
        >
          <div className="mx-auto w-full max-w-6xl px-6 py-20 sm:px-8 lg:px-10 lg:py-28">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand">
                Writing
              </p>
              <h2 className="mt-4 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
                Articles by Aman
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-muted">
                Commentary on higher education policy, global mobility, and the
                future of learning.
              </p>
            </div>

            <ul className="mt-14 divide-y divide-line border-y border-line">
              {articles.map((article) => (
                <li key={article.href}>
                  <a
                    href={article.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex flex-col gap-3 py-7 transition-colors sm:flex-row sm:items-baseline sm:justify-between sm:gap-10"
                  >
                    <div className="max-w-3xl">
                      <p className="text-lg font-semibold leading-snug text-foreground transition-colors group-hover:text-brand sm:text-xl">
                        {article.title}
                      </p>
                      <p className="mt-2 text-sm text-muted">
                        {article.publication}
                      </p>
                    </div>
                    <span className="shrink-0 text-sm font-semibold text-brand transition-transform group-hover:translate-x-1">
                      Read →
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Media */}
        <section id="media" className="border-t border-line">
          <div className="mx-auto grid w-full max-w-6xl gap-8 px-6 py-20 sm:px-8 lg:grid-cols-[0.45fr_1fr] lg:items-center lg:gap-16 lg:px-10 lg:py-28">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand">
                For media
              </p>
              <h2 className="mt-4 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
                Press bio
              </h2>
            </div>
            <blockquote className="border-l-2 border-brand pl-6 text-xl leading-relaxed text-foreground sm:pl-8 sm:text-2xl sm:leading-snug">
              Aman Singh is the Co-founder of GradRight and the Founding Project
              Director of Ashoka University.
            </blockquote>
          </div>
        </section>
      </main>

      <footer className="border-t border-line">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-6 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-10">
          <div>
            <p className="text-lg font-semibold text-foreground">Aman Singh</p>
            <p className="mt-1 text-sm text-muted">
              Co-Founder · Higher education specialist
            </p>
          </div>
          <GradRightLogo className="h-7 w-auto opacity-90" />
        </div>
      </footer>
    </div>
  );
}
