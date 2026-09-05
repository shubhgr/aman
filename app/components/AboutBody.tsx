"use client";

import { useState } from "react";

export default function AboutBody() {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="s-stack">
      <p className="t-body-strong">
        I believe that higher education can drive social equity, justice and
        freedom. If higher education is not efficient then it will lead to the
        destruction of these valuable ideas that nourishes our societies. A
        seamless flow of information, capital and talent within and across
        countries is the foundation for creating an efficient ecosystem. With
        GradRight, we envision a tech-enabled, global higher education ecosystem
        that brings together all participants including learners, universities,
        banks, insurers, product and services providers and media to transact
        freely and unlock new value for each other.
      </p>

      {expanded ? (
        <>
          <p className="t-body-strong">
            In the AI-age, education will change from being &apos;by design&apos;
            to being &apos;on demand&apos;. Learners will want to learn more
            continually through their lives instead of pausing after the
            standard school and college years. Providers will expand and evolve:
            universities will change rapidly, companies and experts will offer
            learning opportunities that will be as credible as the ones offered
            by academic institutions. The sector will be a more global, more
            accessible, less exclusive, less monopolistic - and GradRight is
            poised to become the global infrastructure to power that new world
            of education.
          </p>
          <p className="t-body-strong">
            Prior to GradRight, I served as the Founding Project Director of
            Ashoka University, helping its set-up as one of India&apos;s leading
            liberal arts institutions. I also contributed to the launch and
            development of Krea University, Plaksha University, Khangchendzonga
            Buddhist University and the Indian School of Public Policy. I started
            my career as a Field Engineer with Schlumberger Oilfield Services
            running oil and gas exploration projects across Indonesia, Japan,
            Middle East and USA.
          </p>
          <p className="t-body-strong">
            I am very fortunate to have had the privilege to learn at IIT Delhi
            and ISB Hyderabad. I believe in the power of Yoga and have been
            blessed as a disciple of Swami Niranjanananda Saraswati and a
            life-long student of Bihar School of Yoga, Munger.
          </p>
        </>
      ) : null}

      <button
        type="button"
        className="about-read-more"
        aria-expanded={expanded}
        onClick={() => setExpanded((current) => !current)}
      >
        {expanded ? "Read less" : "Read more"}
      </button>
    </div>
  );
}
