import Image from "next/image";
import GradRightLogo from "./components/GradRightLogo";

const credentials = [
  { role: "B.Tech", org: "IIT Delhi", when: "2000" },
  { role: "MBA", org: "Indian School of Business, Hyderabad", when: "2007" },
  { role: "Co-Founder", org: "GradRight Inc.", when: "2019 – present" },
  {
    role: "Founding Project Director",
    org: "Ashoka University",
    when: "2008 – 2014",
  },
  {
    role: "Consultant",
    org: "Krea, Atria, Plaksha, ISPP & Khangchendzonga Buddhist University",
    when: "2015 – 2020",
  },
  {
    role: "Field Engineer",
    org: "Schlumberger Oilfield Services",
    when: "2000 – 2003",
  },
];

const impact = [
  { value: "₹36,000 Cr", label: "Total loans processed" },
  { value: "300,000+", label: "Students served" },
  { value: "1M+", label: "Lives touched" },
];

const universities = [
  {
    name: "Ashoka University",
    note: "Founding Project Director",
    logo: "/universities/ashoka.png",
  },
  {
    name: "Krea University",
    note: "Institution set-up",
    logo: "/universities/krea.svg",
  },
  {
    name: "Plaksha University",
    note: "Institution set-up",
    logo: "/universities/plaksha.png",
  },
];

const publications = [
  {
    name: "The Economist",
    src: "/publications/economist.png",
    width: 125,
    height: 64,
  },
  {
    name: "India Today",
    src: "/publications/india-today.png",
    width: 145,
    height: 61,
  },
  {
    name: "Economic Times",
    src: "/publications/economic-times.png",
    width: 160,
    height: 80,
  },
  {
    name: "Hindustan Times",
    src: "/publications/hindustan-times.svg",
    width: 180,
    height: 24,
  },
  {
    name: "The Hindu",
    src: "/publications/the-hindu.svg",
    width: 180,
    height: 22,
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
        {/* 1. Hero */}
        <section className="relative overflow-hidden border-b border-line">
          <div className="absolute inset-0 hero-wash" />

          <div className="relative mx-auto grid w-full max-w-6xl items-center gap-10 px-6 py-12 sm:px-8 lg:grid-cols-[1.15fr_0.7fr] lg:gap-14 lg:px-10 lg:py-16">
            <div className="relative z-10">
              <p className="animate-rise text-xs font-semibold uppercase tracking-[0.22em] text-brand">
                Higher education · Access · Institutions
              </p>

              <h1 className="animate-rise-delay-1 mt-4 text-[clamp(2.5rem,5.5vw,4rem)] font-semibold leading-[0.98] tracking-[-0.04em] text-foreground">
                Aman Singh
              </h1>

              <div className="animate-draw mt-4 h-px w-16 origin-left bg-brand" />

              <p className="animate-rise-delay-2 mt-5 max-w-lg text-base leading-7 text-muted sm:text-[17px] sm:leading-8">
                Co-Founder of GradRight. Building transparency and access across
                higher education for students worldwide.
              </p>

              <div className="animate-rise-delay-3 mt-6 flex flex-wrap items-center gap-5">
                <GradRightLogo className="h-6 w-auto" />
                <a
                  href="#about"
                  className="group inline-flex items-center gap-2 text-sm font-semibold text-foreground transition-colors hover:text-brand"
                >
                  Read the story
                  <span
                    aria-hidden
                    className="animate-scroll-cue inline-block text-brand"
                  >
                    ↓
                  </span>
                </a>
              </div>
            </div>

            <div className="animate-photo relative mx-auto aspect-[4/5] w-full max-w-[240px] overflow-hidden sm:max-w-[280px] lg:mx-0 lg:max-w-none">
              <Image
                src="/aman-singh.jpg"
                alt="Aman Singh, Co-Founder of GradRight"
                fill
                priority
                sizes="(max-width: 1024px) 280px, 360px"
                className="object-cover object-[center_20%]"
              />
            </div>
          </div>
        </section>

        {/* 2. About */}
        <section id="about" className="relative border-t border-line bg-background">
          <div className="mx-auto grid w-full max-w-6xl gap-14 px-6 py-20 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20 lg:px-10 lg:py-28">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand">
                About
              </p>
              <h2 className="mt-3 text-3xl font-semibold leading-tight tracking-tight text-foreground sm:text-4xl">
                Twenty-five years shaping how India builds universities, and
                how students reach them.
              </h2>
            </div>

            <div className="space-y-5 text-base leading-8 text-muted sm:leading-8">
              <p>
                Aman is a specialist in the higher education sector with over
                twenty five years of experience. He co-founded GradRight in 2019
                with a vision to build a global tech-platform that brings
                together students, universities, banks and all service providers
                of the world to democratise access to higher education and drive
                transparency and accountability in the sector.
              </p>
              <p>
                Prior to GradRight, he was the Founding Project Director of
                Ashoka University, where he led its set-up and launch from
                2008-2015. Thereafter, he played a critical role in the set-up
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

          <div className="mx-auto w-full max-w-6xl px-6 pb-20 sm:px-8 lg:px-10 lg:pb-28">
            <ul className="grid gap-0 border-t border-line sm:grid-cols-2">
              {credentials.map((item) => (
                <li
                  key={`${item.role}-${item.org}`}
                  className="border-b border-line py-5 sm:odd:pr-8 sm:even:pl-8"
                >
                  <div className="flex items-baseline justify-between gap-4">
                    <p className="text-base font-semibold text-foreground">
                      {item.role}
                    </p>
                    <p className="shrink-0 text-xs font-medium uppercase tracking-[0.14em] text-brand">
                      {item.when}
                    </p>
                  </div>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted">
                    {item.org}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* 3. Quotation — The Economist */}
        <section
          id="quotation"
          className="border-t border-line bg-[color-mix(in_srgb,#782BFF_6%,#F8F7F9)]"
        >
          <div className="mx-auto flex w-full max-w-4xl flex-col items-center px-6 py-16 text-center sm:px-8 lg:px-10 lg:py-20">
            <Image
              src="/publications/economist.png"
              alt="The Economist"
              width={140}
              height={72}
              className="h-12 w-auto object-contain"
            />
            <blockquote className="mt-8 text-2xl font-medium leading-snug tracking-tight text-foreground sm:text-3xl sm:leading-snug">
              “Quote placeholder: add the Economist article quotation here.”
            </blockquote>
            <p className="mt-6 text-sm text-muted">
              Source placeholder · The Economist
            </p>
          </div>
        </section>

        {/* 4. Impact numbers */}
        <section id="impact" className="border-t border-line">
          <div className="mx-auto w-full max-w-6xl px-6 py-16 sm:px-8 lg:px-10 lg:py-20">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand">
              Impact
            </p>
            <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Scale built through GradRight
            </h2>

            <dl className="mt-12 grid gap-10 sm:grid-cols-3 sm:gap-8">
              {impact.map((item) => (
                <div key={item.label} className="border-t border-brand pt-5">
                  <dt className="text-sm text-muted">{item.label}</dt>
                  <dd className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                    {item.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* 5. Experience / institutions */}
        <section
          id="experience"
          className="border-t border-line bg-[color-mix(in_srgb,#121022_2.5%,#F8F7F9)]"
        >
          <div className="mx-auto w-full max-w-6xl px-6 py-16 sm:px-8 lg:px-10 lg:py-20">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand">
                Experience
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                Building universities from the ground up
              </h2>
              <p className="mt-5 text-base leading-8 text-muted sm:text-lg sm:leading-8">
                Aman was the Founding Project Director at Ashoka University when
                it was established, leading its set-up and launch. He has since
                helped establish many more institutions across India, including
                Krea University, Plaksha University, Atria University, the
                Indian School of Public Policy, and Khangchendzonga Buddhist
                University in Sikkim.
              </p>
            </div>

            <ul className="mt-12 grid gap-4 sm:grid-cols-3">
              {universities.map((uni) => (
                <li
                  key={uni.name}
                  className="flex flex-col border border-dashed border-line bg-background p-5"
                >
                  <div className="flex h-24 items-center justify-center px-4">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={uni.logo}
                      alt={`${uni.name} logo`}
                      className="max-h-14 w-auto max-w-full object-contain"
                    />
                  </div>
                  <p className="mt-5 text-lg font-semibold text-foreground">
                    {uni.name}
                  </p>
                  <p className="mt-1 text-sm text-muted">{uni.note}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* 6. Working with policymakers */}
        <section id="policymakers" className="border-t border-line">
          <div className="mx-auto w-full max-w-6xl px-6 py-16 sm:px-8 lg:px-10 lg:py-20">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand">
                Public leadership
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                Working with policymakers
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
                Engaging with ministers and policymakers on higher education
                access, financing, and reform.
              </p>
            </div>

            <ul className="mt-12 grid gap-4 sm:grid-cols-2">
              {[
                {
                  src: "/mithilesh-tiwari.jpg",
                  alt: "Mithilesh Tiwari, Education Minister of Bihar, with Aman Singh",
                  title: "Establishing Nav Vihar University",
                  caption:
                    "Mithilesh Tiwari (Education Minister of Bihar) facilitating Aman Singh for establishing Nav Vihar University.",
                },
                {
                  src: "/policymaker-2.jpg",
                  alt: "Aman Singh at a public event with policymakers",
                  title: "Establishing Nav Vihar University",
                  caption:
                    "Mithilesh Tiwari (Education Minister of Bihar) facilitating Aman Singh for establishing Nav Vihar University.",
                },
              ].map((item, index) => (
                <li
                  key={`${item.title}-${index}`}
                  className="flex flex-col bg-background p-4 sm:p-5"
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-[color-mix(in_srgb,#121022_4%,#F8F7F9)]">
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      sizes="(max-width: 640px) 100vw, 50vw"
                      className="object-cover object-center transition-transform duration-700 hover:scale-[1.03]"
                    />
                  </div>
                  <p className="mt-4 text-base font-semibold text-foreground">
                    {item.title}
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-muted">
                    {item.caption}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* 7. Articles by Aman */}
        <section
          id="articles"
          className="border-t border-line bg-[color-mix(in_srgb,#782BFF_5%,#F8F7F9)]"
        >
          <div className="mx-auto w-full max-w-6xl px-6 py-16 sm:px-8 lg:px-10 lg:py-20">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between lg:gap-10">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand">
                  Writing
                </p>
                <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                  Articles by Aman
                </h2>
              </div>

              <div className="flex flex-wrap items-center gap-x-5 gap-y-3 lg:max-w-[52%] lg:justify-end">
                {publications.map((pub) => (
                  <div
                    key={pub.name}
                    className="flex h-8 items-center justify-center opacity-70 grayscale transition-all hover:opacity-100 hover:grayscale-0"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={pub.src}
                      alt={pub.name}
                      width={pub.width}
                      height={pub.height}
                      className="max-h-7 w-auto max-w-[110px] object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>

            <ul className="mt-10 divide-y divide-line border-t border-line">
              {articles.map((article) => (
                <li key={article.href}>
                  <a
                    href={article.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex flex-col gap-1 py-5 transition-colors sm:flex-row sm:items-baseline sm:justify-between sm:gap-10"
                  >
                    <p className="max-w-3xl text-base font-semibold leading-snug text-foreground transition-colors group-hover:text-brand sm:text-lg">
                      {article.title}
                    </p>
                    <p className="shrink-0 text-sm text-muted">
                      {article.publication}
                    </p>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Media bio */}
        <section id="media">
          <div className="mx-auto grid w-full max-w-6xl gap-6 px-6 py-14 sm:px-8 lg:grid-cols-[0.4fr_1fr] lg:items-center lg:gap-12 lg:px-10 lg:py-16">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand">
              For media
            </p>
            <p className="text-lg leading-relaxed text-foreground sm:text-xl">
              Aman Singh is the Co-founder of GradRight and the Founding Project
              Director of Ashoka University.
            </p>
          </div>
        </section>
      </main>

      <footer className="border-t border-line">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-5 px-6 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-10">
          <div>
            <p className="font-semibold text-foreground">Aman Singh</p>
            <p className="mt-1 text-sm text-muted">
              Co-Founder, GradRight Inc.
            </p>
          </div>
          <GradRightLogo className="h-6 w-auto" />
        </div>
      </footer>
    </div>
  );
}
