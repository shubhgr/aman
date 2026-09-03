import Image from "next/image";
import GradRightLogo from "./components/GradRightLogo";

const credentials = [
  "B.Tech, IIT Delhi, 2000",
  "MBA, Indian School of Business, Hyderabad, 2007",
  "Co-Founder, GradRight Inc. (2019 – present)",
  "Founding Project Director, Ashoka University (2008 – 2014)",
  "Consultant to Krea, Atria, Plaksha, ISPP & Khangchendzonga Buddhist University (2015 – 2020)",
  "Field Engineer, Schlumberger Oilfield Services (2000 – 2003)",
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
  },
  {
    name: "Krea University",
    note: "Institution set-up",
  },
  {
    name: "Plaksha University",
    note: "Institution set-up",
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
        <section className="border-b border-line">
          <div className="mx-auto grid w-full max-w-6xl items-start gap-10 px-6 py-12 sm:px-8 lg:grid-cols-[1.15fr_0.7fr] lg:gap-14 lg:px-10 lg:py-16">
            <div>
              <h1 className="animate-rise text-[clamp(2.5rem,5.5vw,4rem)] font-semibold leading-[0.98] tracking-[-0.04em] text-foreground">
                Aman Singh
              </h1>
              <div className="animate-draw mt-4 h-px w-16 origin-left bg-brand" />

              <div className="animate-rise-delay-1 mt-5">
                <GradRightLogo className="h-6 w-auto" />
              </div>

              <ul className="animate-rise-delay-1 mt-6 space-y-2">
                {credentials.map((item) => (
                  <li
                    key={item}
                    className="text-sm leading-relaxed text-muted sm:text-[15px]"
                  >
                    {item}
                  </li>
                ))}
              </ul>

              <div className="animate-rise-delay-2 mt-8 max-w-2xl space-y-4 text-base leading-7 text-muted sm:leading-8">
                <p>
                  Aman is a specialist in the higher education sector with over
                  twenty five years of experience. He co-founded GradRight in
                  2019 with a vision to build a global tech-platform that brings
                  together students, universities, banks and all service
                  providers of the world to democratise access to higher
                  education and drive transparency and accountability in the
                  sector.
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

            <div className="animate-rise relative mx-auto aspect-[4/5] w-full max-w-[240px] overflow-hidden sm:max-w-[280px] lg:mx-0 lg:max-w-none">
              <Image
                src="/aman-singh.png"
                alt="Aman Singh, Co-Founder of GradRight"
                fill
                priority
                sizes="(max-width: 1024px) 280px, 360px"
                className="object-cover object-[center_18%]"
              />
            </div>
          </div>
        </section>

        {/* 2. Quotation — The Economist */}
        <section
          id="quotation"
          className="border-b border-line bg-[color-mix(in_srgb,#782BFF_6%,#F8F7F9)]"
        >
          <div className="mx-auto flex w-full max-w-4xl flex-col items-center px-6 py-16 text-center sm:px-8 lg:px-10 lg:py-20">
            <div className="flex h-12 w-48 items-center justify-center border border-dashed border-line bg-background text-xs font-semibold uppercase tracking-[0.16em] text-muted">
              The Economist logo
            </div>
            <blockquote className="mt-8 text-2xl font-medium leading-snug tracking-tight text-foreground sm:text-3xl sm:leading-snug">
              “Quote placeholder — add the Economist article quotation here.”
            </blockquote>
            <p className="mt-6 text-sm text-muted">
              Source placeholder · The Economist
            </p>
          </div>
        </section>

        {/* 3. Impact numbers */}
        <section id="impact" className="border-b border-line">
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

        {/* 4. Experience / institutions */}
        <section
          id="experience"
          className="border-b border-line bg-[color-mix(in_srgb,#121022_2.5%,#F8F7F9)]"
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
                helped establish many more institutions across India — including
                Krea University, Plaksha University, Atria University, the
                Indian School of Public Policy, and Khangchendzonga Buddhist
                University in Sikkim.
              </p>
            </div>

            <ul className="mt-12 grid gap-4 sm:grid-cols-3">
              {universities.map((uni) => (
                <li
                  key={uni.name}
                  className="flex flex-col border border-dashed border-line bg-background p-6"
                >
                  <div className="flex h-20 items-center justify-center border border-dashed border-line bg-[color-mix(in_srgb,#782BFF_5%,#F8F7F9)] text-xs font-semibold uppercase tracking-[0.14em] text-muted">
                    Logo placeholder
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

        {/* 5. Working with policymakers */}
        <section id="policymakers" className="border-b border-line">
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

            <ul className="mt-12 grid gap-6 sm:grid-cols-2">
              <li>
                <div className="relative aspect-[16/10] overflow-hidden bg-[color-mix(in_srgb,#121022_4%,#F8F7F9)]">
                  <Image
                    src="/mithilesh-tiwari.jpg"
                    alt="Mithilesh Tiwari, Education Minister of Bihar, with Aman Singh"
                    fill
                    sizes="(max-width: 640px) 100vw, 50vw"
                    className="object-cover object-center"
                  />
                </div>
                <p className="mt-4 text-base font-semibold text-foreground">
                  Establishing Nav Vihar University
                </p>
                <p className="mt-1 text-sm leading-relaxed text-muted">
                  Mithilesh Tiwari (Education Minister of Bihar) facilitating
                  Aman Singh for establishing Nav Vihar University.
                </p>
              </li>
              <li>
                <div className="flex aspect-[16/10] items-center justify-center border border-dashed border-line bg-[color-mix(in_srgb,#782BFF_5%,#F8F7F9)] text-sm font-medium text-muted">
                  Photo with minister — placeholder 2
                </div>
                <p className="mt-4 text-base font-semibold text-foreground">
                  Short heading placeholder
                </p>
                <p className="mt-1 text-sm text-muted">
                  Brief caption about the meeting or engagement.
                </p>
              </li>
            </ul>
          </div>
        </section>

        {/* 6. Articles by Aman */}
        <section
          id="articles"
          className="border-b border-line bg-[color-mix(in_srgb,#782BFF_5%,#F8F7F9)]"
        >
          <div className="mx-auto w-full max-w-6xl px-6 py-16 sm:px-8 lg:px-10 lg:py-20">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand">
                Writing
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                Articles by Aman
              </h2>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-3 sm:gap-4">
              {[
                "The Economist",
                "India Today",
                "Economic Times",
                "Hindustan Times",
                "The Hindu",
              ].map((name) => (
                <div
                  key={name}
                  className="flex h-12 min-w-[120px] flex-1 items-center justify-center border border-dashed border-line bg-background px-4 text-center text-[11px] font-semibold uppercase tracking-[0.12em] text-muted sm:min-w-[140px] sm:flex-none"
                >
                  {name} logo
                </div>
              ))}
            </div>

            <ul className="mt-12 space-y-4">
              {articles.map((article) => (
                <li key={article.href}>
                  <a
                    href={article.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group grid gap-5 border border-line bg-background p-4 transition-colors hover:border-brand/40 sm:grid-cols-[140px_1fr] sm:p-5"
                  >
                    <div className="flex aspect-[16/10] items-center justify-center border border-dashed border-line bg-[color-mix(in_srgb,#121022_3%,#F8F7F9)] text-[11px] font-semibold uppercase tracking-[0.12em] text-muted sm:aspect-auto sm:h-full sm:min-h-[88px]">
                      Thumbnail
                    </div>
                    <div className="flex flex-col justify-center">
                      <p className="text-lg font-semibold leading-snug text-foreground transition-colors group-hover:text-brand">
                        {article.title}
                      </p>
                      <p className="mt-2 text-sm text-muted">
                        {article.publication}
                      </p>
                    </div>
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
