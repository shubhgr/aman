import Image from "next/image";
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
    role: "Co-Founder",
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

          <div className="s-container s-section-hero relative grid items-stretch s-split-gap lg:grid-cols-[1.2fr_0.8fr]">
            <div className="relative z-10 flex h-full min-h-0 flex-col gap-8">
              <div className="animate-rise">
                <GradRightLogo className="h-8 w-auto sm:h-9" />
              </div>

              <div className="flex flex-1 flex-col justify-center">
                <h1 className="t-display animate-rise-delay-1">
                  Aman Singh
                </h1>

                <div className="animate-draw mt-4 h-px w-14 origin-left bg-brand/70" />

                <div className="animate-rise-delay-2 mt-7 max-w-md space-y-4 text-[1.05rem] leading-relaxed text-muted sm:text-lg sm:leading-8">
                  <p>Co-Founder of GradRight.</p>
                  <p>
                    B.Tech, IIT Delhi
                    <br />
                    MBA, Indian School of Business, Hyderabad.
                  </p>
                  <p>
                    Building transparency and access across higher education for
                    students worldwide.
                  </p>
                </div>
              </div>

              <FeaturedIn className="animate-rise-delay-3 w-full max-w-xl" />
            </div>

            <div className="animate-photo relative mx-auto aspect-[4/5] w-full max-w-[260px] overflow-hidden sm:max-w-[300px] lg:mx-0 lg:max-h-[34rem] lg:max-w-none lg:aspect-auto lg:h-full lg:min-h-[34rem]">
              <Image
                src="/aman-singh.jpg"
                alt="Aman Singh, Co-Founder of GradRight"
                fill
                priority
                sizes="(max-width: 1024px) 300px, 380px"
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
                Twenty-five years shaping how India builds universities, and
                how students reach them.
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
                    <div className="mt-0.5 flex shrink-0 items-center gap-1.5">
                      {(item.marks ?? []).map((mark) => (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                          key={mark.alt}
                          src={mark.src}
                          alt={mark.alt}
                          className={
                            (item.marks?.length ?? 0) > 1
                              ? "h-6 w-6 object-contain"
                              : "h-8 w-8 object-contain"
                          }
                        />
                      ))}
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
            <h2 className="t-h2 max-w-2xl">Scale built through GradRight</h2>

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

            <ul className="s-after-header grid s-grid-gap sm:grid-cols-2">
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

        {/* Articles */}
        <section
          id="articles"
          className="border-t border-line bg-[color-mix(in_srgb,#782BFF_5%,#F8F7F9)]"
        >
          <div className="s-container s-section">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between lg:gap-10">
              <h2 className="t-h2">Articles by Aman</h2>

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
    </div>
  );
}
