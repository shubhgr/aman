import Image from "next/image";
import CyclingMarks from "./components/CyclingMarks";
import GradRightLogo from "./components/GradRightLogo";
import PolicymakerRail from "./components/PolicymakerRail";

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
  { value: "50+", label: "Academic partners" },
  { value: "35", label: "Countries with students & universities served" },
  { value: "2,500+", label: "Indian towns & cities served" },
];

const universities = [
  {
    name: "Ashoka University",
    note: "Concept to Creation",
    logo: "/universities/ashoka.png",
    logoClass: "h-11 w-auto max-w-[10.5rem]",
  },
  {
    name: "Plaksha University",
    note: "GTM: Launch of their 1st program",
    logo: "/universities/plaksha.png",
    logoClass: "h-12 w-auto max-w-[11rem]",
  },
  {
    name: "Krea University",
    note: "Strategic Marketing, Admissions & Governance",
    logo: "/universities/krea.svg",
    logoClass: "h-9 w-auto max-w-[8.5rem]",
  },
  {
    name: "SOIL School of Business Design",
    note: "Concept to Creation",
    logo: "/universities/soil.png",
    logoClass: "h-11 w-auto max-w-[7.5rem]",
  },
  {
    name: "Khangchendzonga Buddhist University",
    note: "Concept to Creation",
    logo: "/universities/kbu.png",
    logoClass: "h-11 w-auto max-w-[7.5rem]",
  },
  {
    name: "Atria University",
    note: "Concept to Creation",
    logo: "/universities/atria.png",
    logoClass: "h-9 w-auto max-w-[9.5rem]",
  },
  {
    name: "Indian School of Public Policy",
    note: "Concept to Creation to Scale-up",
    logo: "/universities/ispp.png",
    logoClass: "h-10 w-auto max-w-[9.5rem]",
  },
  {
    name: "Nav Vihara University",
    note: "Under Development",
    logo: "/universities/nav-vihara.png",
    logoClass: "h-[3.5rem] w-auto max-w-[8rem]",
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
                    On a mission to make an efficient global higher-ed system
                    that drives transparency, accountability and trust in the
                    sector and nurtures Liberty and Equity in our societies.
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
                25 years of experience in building innovative institutions in
                India.
              </h2>
            </div>

            <div className="s-stack">
              <p className="t-body-strong">
                I believe that higher education can drive social equity, justice
                and freedom. If higher education is not efficient then it will
                lead to the destruction of these valuable ideas that nourishes
                our societies. A seamless flow of information, capital and
                talent within and across countries is the foundation for
                creating an efficient ecosystem. With GradRight, we envision a
                tech-enabled, global higher education ecosystem that brings
                together all participants including learners, universities,
                banks, insurers, product and services providers and media to
                transact freely and unlock new value for each other.
              </p>
              <p className="t-body">
                In the AI-age, education will change from being &apos;by
                design&apos; to being &apos;on demand&apos;. Learners will want
                to learn more continually through their lives instead of pausing
                after the standard school and college years. Providers will
                expand and evolve: universities will change rapidly, companies
                and experts will offer learning opportunities that will be as
                credible as the ones offered by academic institutions. The
                sector will be a more global, more accessible, less exclusive,
                less monopolistic - and GradRight is poised to become the global
                infrastructure to power that new world of education.
              </p>
              <p className="t-body">
                Prior to GradRight, I served as the Founding Project Director of
                Ashoka University, helping its set-up as one of India&apos;s
                leading liberal arts institutions. I also contributed to the
                launch and development of Krea University, Plaksha University,
                Khangchendzonga Buddhist University and the Indian School of
                Public Policy. I started my career as a Field Engineer with
                Schlumberger Oilfield Services running oil and gas exploration
                projects across Indonesia, Japan, Middle East and USA.
              </p>
              <p className="t-body">
                I am very fortunate to have had the privilege to learn at IIT
                Delhi and ISB Hyderabad. I believe in the power of Yoga and have
                been blessed as a disciple of Swami Niranjanananda Saraswati and
                a life-long student of Bihar School of Yoga, Munger.
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

            <ul className="s-after-header grid s-grid-gap sm:grid-cols-2 lg:grid-cols-4">
              {universities.map((uni) => (
                <li
                  key={uni.name}
                  className="flex min-w-0 flex-col items-center overflow-hidden border border-dashed border-line bg-background p-5 text-center"
                >
                  <div className="flex h-[5.5rem] w-full items-center justify-center px-2">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={uni.logo}
                      alt={`${uni.name} logo`}
                      className={`${uni.logoClass} object-contain`}
                    />
                  </div>
                  <p className="t-card-title s-after-media w-full text-[0.88rem] leading-snug text-balance">
                    {uni.name}
                  </p>
                  <p className="t-meta s-after-label w-full text-[0.75rem] leading-snug text-balance">
                    {uni.note}
                  </p>
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

            <PolicymakerRail
              items={[
                {
                  src: "/mithilesh-tiwari.jpg",
                  alt: "Mithilesh Tiwari, Education Minister of Bihar, with Aman Singh",
                  title: "Establishing Nav Vihar University",
                  caption:
                    "Mithilesh Tiwari (Education Minister of Bihar) facilitating Aman Singh for establishing Nav Vihar University.",
                },
                {
                  src: "/policymaker-2.jpg",
                  alt: "Aman Singh introducing Shri Ashish Sood, Education Minister of Delhi, to international university delegates",
                  title:
                    "Education Minister of Delhi Meeting 40+ Unis at GradRight's Event",
                  caption:
                    "Introducing Shri Ashish Sood - Education Minister of Delhi - to international delegates representing universities from the US, UK, and various other countries.",
                },
                {
                  src: "/policymaker-5.jpg",
                  alt: "Shri Ashish Sood, Education Minister of Delhi, with Aman Singh at ShiftED 2026",
                  title: "Narela Education City at ShiftED 2026",
                  caption:
                    "Hosting Shri Ashish Sood, Education Minister, Government of Delhi, at ShiftED 2026 (India's Biggest Education Conclave) for discussions on Narela Education City",
                },
                {
                  src: "/policymaker-3.jpg",
                  alt: "Raju Basnet facilitating Aman Singh for Khangchendzonga Buddhist University",
                  title: "Setting Up Khangchendzonga Buddhist University",
                  caption:
                    "Raju Basnet (Education Minister of Bihar) facilitating Aman Singh for establishing Khangchendzonga Buddhist University.",
                },
                {
                  src: "/policymaker-4.jpg",
                  alt: "Gareth Wynn Owen and guests at the UK Pavilion at ShiftED 2026",
                  title: "Inaugurating the UK Pavilion at ShiftED 2026",
                  caption:
                    "Gareth Wynn Owen, British Deputy High Commissioner to Telangana & Andhra Pradesh, graced the UK pavilion at ShiftED 2026, bringing 10+ UK universities face-to-face with students and parents.",
                },
              ]}
            />
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
      </main>

      <footer className="brand-footer relative isolate flex items-center justify-center overflow-hidden">
        <Image
          src="/footer/gradright-footer-desktop.jpg"
          alt=""
          fill
          sizes="100vw"
          className="brand-footer-bg brand-footer-bg-desktop -z-10"
          priority
        />
        <Image
          src="/footer/gradright-footer-mobile.png"
          alt=""
          fill
          sizes="100vw"
          className="brand-footer-bg brand-footer-bg-mobile -z-10"
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
