import Image from "next/image";
import CyclingMarks from "./components/CyclingMarks";
import EventVideoRail from "./components/EventVideoRail";
import GradRightLogo from "./components/GradRightLogo";

const credentials = [
  {
    role: "B.Tech",
    org: "IIT Delhi",
    when: "2000",
    marks: [{ src: "/marks/iit-delhi.png", alt: "IIT Delhi" }],
  },
  {
    role: "MBA",
    org: "Indian School of Business, Hyderabad",
    when: "2007",
    marks: [{ src: "/marks/isb.png", alt: "ISB" }],
  },
  {
    role: "Co-Founder and CEO",
    org: "GradRight Inc.",
    when: "2019 – present",
    marks: [{ src: "/marks/gradright.png", alt: "GradRight" }],
  },
  {
    role: "Founding Project Director",
    org: "Ashoka University",
    when: "2008 – 2014",
    marks: [{ src: "/marks/ashoka.png", alt: "Ashoka University" }],
  },
  {
    role: "Consultant",
    org: "Krea, Atria, Plaksha, ISPP & Khangchendzonga Buddhist University",
    when: "2015 – 2020",
    marks: [
      { src: "/marks/krea.svg", alt: "Krea" },
      { src: "/marks/atria.png", alt: "Atria" },
      { src: "/marks/plaksha.png", alt: "Plaksha" },
      { src: "/marks/ispp.png", alt: "ISPP" },
    ],
  },
  {
    role: "Field Engineer",
    org: "Schlumberger Oilfield Services",
    when: "2000 – 2003",
    marks: [{ src: "/marks/slb.svg", alt: "Schlumberger / SLB" }],
  },
];

const impact = [
  { value: "₹36,000 Cr", label: "Total loans processed" },
  { value: "300,000+", label: "Students served" },
  { value: "100M", label: "Media impressions" },
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
      "Universities are not fast food chains: global campuses must do more than just replicating recipes to succeed in India",
    publication: "Hindustan Times",
    href: "https://www.hindustantimes.com/education/features/universities-are-not-fast-food-chains-global-campuses-must-do-more-than-just-replicating-recipes-to-succeed-in-india-101760358930195.html",
  },
  {
    title: "The crisis in education financing",
    publication: "India Today Best Colleges",
    href: "https://bestcolleges.indiatoday.in/news-detail/the-crisis-in-education-financing",
  },
];

const eventVideos = [
  { id: "7RuUEtwWRmY", title: "Rethinking Higher Education event video 1" },
  { id: "Ae-cAX4R32g", title: "Rethinking Higher Education event video 2" },
  { id: "KhPlCBUAbcM", title: "Rethinking Higher Education event video 3" },
  { id: "mpxLKIQ7MQU", title: "Rethinking Higher Education event video 4" },
];

function FeaturedIn({ className = "" }: { className?: string }) {
  const logos = [...publications, ...publications];

  return (
    <div className={className}>
      <p className="t-meta-brand">Featured in</p>
      <div className="logo-marquee mt-4">
        <div className="logo-marquee-track">
          {logos.map((pub, index) => (
            <div
              key={`${pub.name}-${index}`}
              className="logo-marquee-item"
              aria-hidden={index >= publications.length}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={pub.src}
                alt={index < publications.length ? pub.name : ""}
                width={pub.width}
                height={pub.height}
                className="max-h-7 w-auto max-w-[110px] object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="relative flex min-h-full flex-col overflow-x-hidden bg-background">
      <main id="top" className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden border-b border-line">
          <div className="absolute inset-0 hero-wash" />

          <div className="hero-layout s-container s-section-hero relative grid items-stretch s-split-gap">
            <div className="relative z-10 flex h-full min-h-0 min-w-0 flex-col gap-8">
              <div className="animate-rise">
                <GradRightLogo className="h-8 w-auto sm:h-9" />
              </div>

              <div className="flex flex-1 flex-col justify-center">
                <h1 className="t-display animate-rise-delay-1">
                  Aman Singh
                </h1>

                <div className="animate-draw mt-4 h-px w-14 origin-left bg-brand/70" />

                <div className="animate-rise-delay-2 mt-7 max-w-md space-y-4 text-[1.05rem] leading-relaxed text-muted sm:text-lg sm:leading-8">
                  <p>Co-Founder, CEO of GradRight.</p>
                  <p>
                    B.Tech, IIT Delhi.
                    <br />
                    MBA, Indian School of Business, Hyderabad.
                  </p>
                  <p>
                    Building transparency and access across higher education for
                    students worldwide.
                  </p>
                </div>
              </div>

              <FeaturedIn className="animate-rise-delay-3 w-full max-w-full xl:max-w-xl" />
            </div>

            <div className="hero-desktop-photo animate-photo relative mx-0 aspect-auto h-full min-h-[34rem] max-h-[34rem] w-full max-w-none overflow-hidden">
              <Image
                src="/aman-singh.jpg"
                alt="Aman Singh, Co-Founder of GradRight"
                fill
                priority
                sizes="380px"
                className="object-cover object-[center_20%]"
              />
            </div>

            <div className="hero-mobile-photo animate-photo relative mx-auto aspect-[4/5] w-full max-w-[280px] place-self-center overflow-hidden sm:max-w-[300px]">
              <Image
                src="/aman-singh.jpg"
                alt="Aman Singh, Co-Founder of GradRight"
                fill
                priority
                sizes="(max-width: 640px) 280px, 300px"
                className="object-cover object-[center_20%]"
              />
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="border-t border-line bg-background">
          <div className="s-container s-section grid s-split-gap lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <h2 className="t-h2">
                25 years shaping how India builds universities, and how
                students reach them.
              </h2>
            </div>

            <div className="s-stack">
              <p className="t-body-strong">
                Aman is a specialist in the higher education sector with over
                twenty five years of experience. He co-founded GradRight in 2019
                with a vision to build a global tech-platform that brings
                together students, universities, banks and all service providers
                of the world to democratise access to higher education and drive
                transparency and accountability in the sector.
              </p>
              <p className="t-body">
                Prior to GradRight, he was the Founding Project Director of
                Ashoka University, where he led its set-up and launch from
                2008-2015. Thereafter, he played a critical role in the set-up
                of eight new institutions like Krea University, Atria
                University, Plaksha University, Indian School of Public Policy
                and Kanchenjunga Buddhist University in Sikkim.
              </p>
              <p className="t-body">
                He started his professional career as a Field Engineer with
                Schlumberger Oilfield Services and worked in Indonesia, Japan,
                Middle East and USA. Aman holds a BTech from IIT Delhi and MBA
                from Indian School of Business (ISB), Hyderabad.
              </p>
            </div>
          </div>

          <div className="s-container pb-16 lg:pb-20">
            <ul className="grid gap-0 border-t border-line sm:grid-cols-2">
              {credentials.map((item) => (
                <li
                  key={`${item.role}-${item.org}`}
                  className="s-row border-b border-line sm:odd:pr-8 sm:even:pl-8"
                >
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 flex shrink-0 items-center">
                      {(item.marks?.length ?? 0) > 1 ? (
                        <CyclingMarks marks={item.marks ?? []} />
                      ) : item.marks?.[0] ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                          src={item.marks[0].src}
                          alt={item.marks[0].alt}
                          className="h-8 w-8 object-contain"
                        />
                      ) : null}
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-baseline justify-between gap-4">
                        <p className="t-card-title">{item.role}</p>
                        <p className="t-meta-brand shrink-0">{item.when}</p>
                      </div>
                      <p className="t-meta s-after-label">{item.org}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Impact */}
        <section id="impact" className="border-t border-line">
          <div className="s-container s-section">
            <h2 className="t-h2 flex max-w-2xl flex-wrap items-center gap-x-2.5 gap-y-1">
              <span>Scale built through</span>
              <GradRightLogo className="h-[1.35em] w-auto translate-y-[0.02em]" />
            </h2>

            <dl className="s-after-header grid gap-8 sm:grid-cols-3">
              {impact.map((item) => (
                <div key={item.label} className="border-t border-brand pt-5">
                  <dt className="t-meta">{item.label}</dt>
                  <dd className="t-stat mt-3">{item.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* Experience */}
        <section
          id="experience"
          className="border-t border-line bg-[color-mix(in_srgb,#121022_2.5%,#F8F7F9)]"
        >
          <div className="s-container s-section">
            <div className="max-w-3xl">
              <h2 className="t-h2">Building universities from the ground up</h2>
              <p className="t-lead s-after-title">
                Aman was the Founding Project Director at Ashoka University when
                it was established, leading its set-up and launch. He has since
                helped establish many more institutions across India, including
                Krea University, Plaksha University, Atria University, the
                Indian School of Public Policy, and Khangchendzonga Buddhist
                University in Sikkim.
              </p>
            </div>

            <ul className="s-after-header grid s-grid-gap sm:grid-cols-3">
              {universities.map((uni) => (
                <li
                  key={uni.name}
                  className="flex flex-col border border-dashed border-line bg-background p-5 text-center sm:text-left"
                >
                  <div className="flex h-24 items-center justify-center px-4">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={uni.logo}
                      alt={`${uni.name} logo`}
                      className="max-h-14 w-auto max-w-full object-contain"
                    />
                  </div>
                  <p className="t-card-title s-after-media">{uni.name}</p>
                  <p className="t-meta s-after-label">{uni.note}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Policymakers */}
        <section id="policymakers" className="border-t border-line">
          <div className="s-container s-section">
            <div className="max-w-2xl">
              <h2 className="t-h2">Working with policymakers</h2>
              <p className="t-lead s-after-title">
                Engaging with ministers and policymakers on higher education
                access, financing, and reform.
              </p>
            </div>

            <ul className="s-after-header grid gap-x-4 gap-y-10 sm:grid-cols-2 sm:gap-y-4">
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
                  alt: "Aman Singh hosting at ShiftED 2026 for Narela Education City discussions",
                  title: "Narela Education City at ShiftED 2026",
                  caption:
                    "Hosting Shri Ashish Sood, Education Minister, Government of Delhi, at ShiftED 2026 (India's Biggest Education Conclave) for discussions on Narela Education City",
                },
              ].map((item, index) => (
                <li
                  key={`${item.title}-${index}`}
                  className="flex flex-col bg-background"
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
                  <p className="t-card-title s-after-media">{item.title}</p>
                  <p className="t-meta s-after-label">{item.caption}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Events */}
        <section id="events" className="border-t border-line overflow-hidden">
          <div className="s-container s-section pb-8 lg:pb-10">
            <h2 className="t-h2">Rethinking higher education events</h2>
          </div>
          <EventVideoRail videos={eventVideos} />
        </section>

        {/* Articles */}
        <section
          id="articles"
          className="border-t border-line bg-background"
        >
          <div className="s-container s-section">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between lg:gap-10">
              <h2 className="t-h2">Articles by Aman</h2>

              {/* Mobile: scrolling logos */}
              <div className="logo-marquee lg:hidden">
                <div className="logo-marquee-track">
                  {[...publications, ...publications].map((pub, index) => (
                    <div
                      key={`${pub.name}-m-${index}`}
                      className="logo-marquee-item"
                      aria-hidden={index >= publications.length}
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={pub.src}
                        alt={index < publications.length ? pub.name : ""}
                        width={pub.width}
                        height={pub.height}
                        className="max-h-7 w-auto max-w-[110px] object-contain"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Desktop: static row */}
              <div className="hidden flex-wrap items-center gap-x-5 gap-y-3 lg:flex lg:max-w-[52%] lg:justify-end">
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

            <ul className="s-after-header divide-y divide-line border-t border-line">
              {articles.map((article) => (
                <li key={article.href}>
                  <a
                    href={article.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group s-row flex flex-col gap-1 transition-colors sm:flex-row sm:items-baseline sm:justify-between sm:gap-10"
                  >
                    <p className="t-card-title max-w-3xl transition-colors group-hover:text-brand sm:text-[1.0625rem]">
                      {article.title}
                    </p>
                    <p className="t-meta shrink-0">{article.publication}</p>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>

      <footer className="brand-footer relative isolate flex items-center justify-center overflow-hidden">
        <Image
          src="/footer/gradright-footer-gradient.png"
          alt=""
          fill
          sizes="100vw"
          className="brand-footer-bg -z-10"
        />
        <Image
          src="/footer/gradright-logo-white.png"
          alt="GradRight"
          width={1794}
          height={400}
          sizes="(max-width: 640px) 62vw, 38rem"
          className="relative z-10 h-auto w-[62vw] max-w-[38rem] translate-y-4 sm:w-[42vw] sm:translate-y-8 lg:w-[34vw]"
        />
      </footer>
    </div>
  );
}
