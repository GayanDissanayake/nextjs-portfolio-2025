"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import SpotlightCursor from "@/components/SpotlightCursor";

interface ImageCarouselProps {
  images: string[];
  title: string;
}

const storyImages = {
  school: {
    images: ["/images/profile/beach.jpeg", "/images/profile/beach.jpeg"],
    title: "Royal College, Colombo, Sri Lanka",
  },
  cricket: {
    images: ["/images/profile/beach.jpeg", "/images/profile/beach.jpeg"],
    title: "Cricket Journey",
  },
  prefect: {
    images: ["/images/profile/beach.jpeg", "/images/profile/beach.jpeg"],
    title: "Leadership Moments",
  },
  bigmatch: {
    images: ["/images/profile/beach.jpeg", "/images/profile/beach.jpeg"],
    title: "Battle of the Blues",
  },
};

const ImageCarousel = ({ images, title }: ImageCarouselProps) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  // The required distance between touchStart and touchEnd to be detected as a swipe
  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null); // otherwise the swipe is fired even with usual touch events
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) =>
    setTouchEnd(e.targetTouches[0].clientX);

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe && currentImage < images.length - 1) {
      setCurrentImage(currentImage + 1);
    }
    if (isRightSwipe && currentImage > 0) {
      setCurrentImage(currentImage - 1);
    }
  };

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="w-full max-w-lg mx-auto">
      <div
        className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-8 shadow-2xl group cursor-grab active:cursor-grabbing"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <Image
          src={images[currentImage]}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />

        {/* Navigation Arrows */}
        {images.length > 1 && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </>
        )}

        {/* Dot indicators */}
        {images.length > 1 && (
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-4">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImage(index)}
                className={`w-5 h-5 rounded-full transition-all duration-300 ${
                  index === currentImage
                    ? "bg-yellow-400 scale-125 shadow-lg"
                    : "bg-gray-400 hover:bg-gray-300 hover:scale-110"
                }`}
              />
            ))}
          </div>
        )}
      </div>
      <p className="text-lg text-gray-400 text-center font-medium">{title}</p>
    </div>
  );
};

export default function SchoolJourney() {
  return (
    <div className="min-h-screen bg-slate-900 text-gray-100">
      <SpotlightCursor />

      {/* Header */}
      <header className="relative py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <Link
            href="/"
            className="inline-flex items-center text-yellow-400 hover:text-yellow-300 mb-8 transition-colors"
          >
            ← Back to Portfolio
          </Link>

          <h1 className="text-4xl md:text-5xl font-bold text-yellow-400 mb-6 leading-tight">
            &ldquo;Floreat&ldquo; - May it flourish
          </h1>
          <h2 className="text-xl md:text-2xl text-gray-300 mb-4">
            Fourteen Years at the School of Our Fathers
          </h2>
          <div className="w-24 h-1 bg-yellow-400 mb-8"></div>
          <p className="text-lg text-gray-300 leading-relaxed max-w-4xl">
            From a wide-eyed six-year-old entering Year 1 in 2004 to signing off
            as a Senior Prefect in 2018, my journey at Royal College Colombo
            shaped not just my academic foundation, but my character, values,
            and worldview. This is the story of those transformative fourteen
            years.
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 pb-16">
        {/* The Beginning */}
        <section className="mb-20">
          <div className="grid lg:grid-cols-5 gap-16 items-center">
            <div className="lg:col-span-3">
              <h3 className="text-3xl font-semibold text-yellow-400 mb-8">
                The Beginning: A Six-Year-Old&apos;s Dream
              </h3>
              <div className="prose prose-xl text-gray-300 space-y-8">
                <p>
                  In 2004, I walked through the iconic Boake Gates of Royal
                  College Colombo for the first time as a Year 1 student. At
                  just six years old, I could hardly comprehend the weight of
                  history I was entering—a school established in 1835, often
                  called the &quot;Eton of Sri Lanka,&quot; with a legacy
                  spanning nearly two centuries.
                </p>
                <p>
                  The massive quadrangle, the imposing main building with its
                  colonial architecture, and the sea of navy blue blazers with
                  the royal gold crest—everything felt grand and overwhelming.
                  Little did I know that this place would become my second home
                  for the next fourteen years, shaping every aspect of who I
                  would become.
                </p>
                <p>
                  Royal College wasn&apos;t just any school. Founded by Joseph
                  Marsh and later established as the Colombo Academy in 1836 by
                  Sir Robert Wilmot-Horton, it became &quot;Royal College&quot;
                  in 1881 with Queen Victoria&apos;s consent—the first school
                  outside the British Isles to receive the &quot;Royal&quot;
                  prefix. The school&apos;s motto, &quot;Disce aut Discede&quot;
                  (Learn or Depart), would echo in my mind throughout my
                  journey.
                </p>
              </div>
            </div>
            <div className="lg:col-span-2 flex justify-center">
              <ImageCarousel
                images={storyImages.school.images}
                title={storyImages.school.title}
              />
            </div>
          </div>
        </section>

        {/* Cricket Journey */}
        <section className="mb-20">
          <div className="grid lg:grid-cols-5 gap-16 items-center">
            <div className="lg:col-span-2 lg:order-1 flex justify-center">
              <ImageCarousel
                images={storyImages.cricket.images}
                title={storyImages.cricket.title}
              />
            </div>
            <div className="lg:col-span-3 lg:order-2">
              <h3 className="text-3xl font-semibold text-yellow-400 mb-8">
                The Cricket Metamorphosis: A Journey of Constant Evolution
              </h3>
              <div className="prose prose-xl text-gray-300 space-y-8">
                <p>
                  My cricket journey began around 2008 when I was in Year 5.
                  Like many young cricketers in Sri Lanka, I started as a fast
                  bowler, drawn to the raw power and aggression of pace bowling.
                  The cricket grounds at Royal, where the game has been played
                  since 1838, became my second classroom. As a lower-order
                  batsman and pace bowler, I thought I knew my place in the
                  game.
                </p>
                <p>
                  But cricket, like life, taught me that adaptation is the key
                  to not just survival, but excellence. By 2012, I had made my
                  first dramatic transformation—I became a left-arm leg spinner.
                  This wasn&apos;t just changing my bowling style; it was
                  completely reimagining my role in the team. The success came
                  quickly, and I found myself representing Colombo district and
                  provincial U15 teams, proving that sometimes the biggest risks
                  yield the greatest rewards.
                </p>
                <p>
                  Just when I thought I had found my identity, 2016 brought
                  another seismic shift. I evolved from left-arm leg spin to
                  left-arm chinaman bowling—one of the rarest and most deceptive
                  arts in cricket. &quot;Chinaman&quot; bowling is left-arm
                  unorthodox spin, where the ball that appears to be spinning
                  one way suddenly turns the other, leaving batsmen bewildered.
                  By this time, I had also progressed from the lower order to
                  become a reliable middle-order batsman.
                </p>
                <p>
                  The most dramatic transformation of all came in 2017—my final
                  evolution that would define my school cricket legacy. I became
                  an opening batsman. From a tail-end pace bowler in 2008 to an
                  opening batsman-bowler by 2017, this journey represented
                  nearly a decade of constant reinvention. In 2018, during the
                  Battle of the Blues, I proudly represented Royal College as an
                  opening batsman and chinaman bowler—a rare combination that
                  embodied my complete cricketing metamorphosis.
                </p>
                <p>
                  This journey of constant evolution wasn&apos;t just about
                  cricket technique; it was a masterclass in adaptability,
                  strategic thinking, and never accepting limitations. The
                  willingness to completely reinvent myself multiple times
                  taught me that success isn&apos;t about finding your
                  place—it&apos;s about creating it. These lessons in
                  adaptability and strategic reinvention continue to serve me
                  well beyond the cricket field.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Academic Excellence */}
        <section className="mb-20">
          <div className="grid lg:grid-cols-5 gap-16 items-center">
            <div className="lg:col-span-3">
              <h3 className="text-3xl font-semibold text-yellow-400 mb-8">
                Academic Milestones: The Path to Excellence
              </h3>
              <div className="prose prose-xl text-gray-300 space-y-8">
                <p>
                  The year 2014 marked a significant milestone in my academic
                  journey—the GCE Ordinary Level examinations. After years of
                  rigorous preparation and countless hours in Royal&apos;s
                  historic classrooms, I achieved results that exceeded my own
                  expectations: 7 A&apos;s and 2 B&apos;s. This wasn&apos;t just
                  a personal victory; it was validation of the Royal College
                  tradition of academic excellence.
                </p>
                <p>
                  Choosing the Commerce stream for my Advanced Levels was a
                  decision that reflected my growing interest in understanding
                  how businesses work and economies function. Royal
                  College&apos;s Commerce department, with its experienced
                  faculty and comprehensive curriculum, provided the perfect
                  foundation for this pursuit.
                </p>
                <p>
                  By 2017, when I sat for the GCE Advanced Level examinations, I
                  had developed a deep appreciation for business studies,
                  economics, and accounting. My results—2 A&apos;s and 1 C—might
                  not tell the complete story of the knowledge gained, the
                  analytical skills developed, and the business acumen that
                  would later prove invaluable in my career journey.
                </p>
              </div>
            </div>
            <div className="lg:col-span-2 flex justify-center">
              <div className="bg-slate-800 p-12 rounded-2xl border border-yellow-400/20 max-w-lg w-full">
                <h4 className="text-2xl font-semibold text-yellow-400 mb-8 text-center">
                  Academic Achievements
                </h4>
                <div className="space-y-6">
                  <div className="text-center">
                    <div className="text-base text-gray-400">
                      2014 • O-Levels
                    </div>
                    <div className="text-white font-medium text-2xl">
                      7 A&apos;s • 2 B&apos;s
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-base text-gray-400">
                      2017 • A-Levels
                    </div>
                    <div className="text-white font-medium text-2xl">
                      2 A&apos;s • 1 C
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-base text-gray-400">Stream</div>
                    <div className="text-white font-medium text-2xl">
                      Commerce
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Leadership Journey */}
        <section className="mb-20">
          <div className="grid lg:grid-cols-5 gap-16 items-center">
            <div className="lg:col-span-2 lg:order-1 flex justify-center">
              <ImageCarousel
                images={storyImages.prefect.images}
                title={storyImages.prefect.title}
              />
            </div>
            <div className="lg:col-span-3 lg:order-2">
              <h3 className="text-3xl font-semibold text-yellow-400 mb-8">
                Leadership Forged: From Steward to Senior Prefect
              </h3>
              <div className="prose prose-xl text-gray-300 space-y-8">
                <p>
                  In 2016, I was appointed as a Senior School Steward, marking
                  the beginning of my formal leadership journey at Royal
                  College. The prefectorial system at Royal is steeped in
                  tradition, dating back to the school&apos;s early days,
                  designed to instill leadership qualities and maintain the high
                  standards that define Royal College.
                </p>
                <p>
                  As a Senior Steward, I learned the fundamentals of
                  responsibility and authority. My duties included maintaining
                  discipline during assemblies, supporting younger students, and
                  upholding the school&apos;s values and traditions. It was
                  during this period that I truly understood what the school
                  motto &quot;Disce aut Discede&quot; meant—not just in
                  academics, but in character development.
                </p>
                <p>
                  The pinnacle of my leadership journey came in 2017-2018 when I
                  was appointed as a Senior Prefect. This honor, bestowed upon
                  only a select few based on academic excellence and exemplary
                  character, came with significant responsibilities. As a Senior
                  Prefect, my authority extended across all sections of the
                  college—from the primary school to the upper school.
                </p>
                <p>
                  The role taught me invaluable lessons about leading by
                  example, making difficult decisions under pressure, and the
                  delicate balance between authority and empathy. Organizing
                  school events, mediating conflicts, and representing the
                  student body in various capacities developed skills that would
                  prove essential in my future endeavors.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* The Big Match */}
        <section className="mb-20">
          <div className="grid lg:grid-cols-5 gap-16 items-center">
            <div className="lg:col-span-3">
              <h3 className="text-3xl font-semibold text-yellow-400 mb-8">
                The Battle of the Blues: Cricket Leadership & Legacy
              </h3>
              <div className="prose prose-xl text-gray-300 space-y-8">
                <p>
                  If there&apos;s one event that defines the Royal College
                  experience, it&apos;s the annual cricket encounter against S.
                  Thomas&apos; College—known as the &quot;Battle of the
                  Blues&quot; or simply &quot;The Big Match.&quot; This
                  legendary rivalry, which began in 1879, is the second-longest
                  uninterrupted cricket series in the world, and in 2018, I had
                  the honor of being part of this historic tradition as a member
                  of the U19 1st XI team.
                </p>
                <p>
                  My cricket leadership journey at Royal began earlier when I
                  served as Vice Captain of the U17 team, learning the nuances
                  of team management and strategy. This experience prepared me
                  for greater responsibilities ahead. The pinnacle of my cricket
                  leadership came when I was appointed Captain of the U19 2nd XI
                  team—a role I proudly held twice for the &quot;Mini
                  Battle&quot; against St. Thomas&apos; U19 2nd XI teams.
                </p>
                <p>
                  The Mini Battle, while less publicized than the main
                  encounter, was equally intense and meaningful. As captain, I
                  had the responsibility of leading the B team—a group of
                  talented cricketers who were just as passionate about
                  representing Royal College. These matches taught me that
                  leadership isn&apos;t just about being in the spotlight;
                  it&apos;s about bringing out the best in every team member,
                  regardless of the stage.
                </p>
                <p>
                  Playing in the main Big Match wasn&apos;t just about cricket;
                  it was about representing 180+ years of Royal College
                  tradition. The weeks leading up to the match were filled with
                  intense preparation, team bonding, and the weight of
                  expectation from thousands of Old Royalists around the world.
                  As an opening batsman and chinaman bowler, I brought a unique
                  combination to our team—the responsibility of setting the tone
                  with the bat from ball one, combined with the unpredictable
                  weapon of left-arm unorthodox spin when we had the ball.
                </p>
                <p>
                  The transformation from a tail-end pace bowler to an opening
                  batsman all-rounder embodied everything Royal College stood
                  for—constant improvement, adaptability, and the courage to
                  embrace new challenges. Standing at the crease as an opener in
                  the Battle of the Blues, with the pressure of the big occasion
                  and the weight of tradition, represented the culmination of
                  nearly a decade of cricketing evolution.
                </p>
                <p>
                  Beyond the games themselves, both the Big Match and Mini
                  Battles taught me about tradition, rivalry, and sportsmanship.
                  Whether leading the 2nd XI or playing in the 1st XI, the
                  mutual respect between the two schools and the friendships
                  forged in the heat of competition remain some of my most
                  treasured memories from Royal College.
                </p>
              </div>
            </div>
            <div className="lg:col-span-2 flex flex-col items-center space-y-8">
              <ImageCarousel
                images={storyImages.bigmatch.images}
                title={storyImages.bigmatch.title}
              />
              {/* Cricket Leadership Card */}
              <div className="bg-slate-800 p-8 rounded-2xl border border-yellow-400/20 w-full max-w-lg">
                <h4 className="text-xl font-semibold text-yellow-400 mb-6 text-center">
                  Cricket Evolution
                </h4>
                <div className="space-y-4">
                  <div className="text-center">
                    <div className="text-gray-400 text-base">2008-2012</div>
                    <div className="text-white font-medium text-lg">
                      Pace Bowler + Lower Order
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-gray-400 text-base">2012-2016</div>
                    <div className="text-white font-medium text-lg">
                      Left Arm Leg Spinner + District Rep
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-gray-400 text-base">2016-2017</div>
                    <div className="text-white font-medium text-lg">
                      Chinaman Bowler + Middle Order
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-gray-400 text-base">2017-2018</div>
                    <div className="text-white font-medium text-lg">
                      Opening Batsman All-Rounder
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-gray-400 text-base">Leadership</div>
                    <div className="text-white font-medium text-lg">
                      U17 Vice Captain • U19 2nd XI Captain (2x)
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Cultural Diversity */}
        <section className="mb-20">
          <div className="prose prose-xl text-gray-300 space-y-8 max-w-none">
            <h3 className="text-3xl font-semibold text-yellow-400 mb-8">
              A Tapestry of Cultures: The Royal Diversity
            </h3>
            <p>
              One of Royal College&apos;s greatest strengths has always been its
              diversity. Walking through the corridors, you&apos;d hear
              conversations in Sinhala, Tamil, and English, sometimes all in the
              same sentence. Students from different ethnic, religious, and
              socio-economic backgrounds came together under the banner of Royal
              blue and gold.
            </p>
            <p>
              This diversity wasn&apos;t just demographic; it was intellectual
              and cultural. My classmates included future doctors, engineers,
              lawyers, entrepreneurs, and artists. Some came from generations of
              Old Royalists, while others were the first in their families to
              attend Royal College. This melting pot of perspectives, ambitions,
              and dreams created an environment where learning extended far
              beyond textbooks.
            </p>
            <p>
              The friendships I formed across cultural boundaries taught me
              lessons that no classroom could provide. Understanding different
              viewpoints, appreciating various traditions, and learning to work
              with people from all walks of life—these skills, developed in the
              diverse community of Royal College, prepared me for the globalized
              world that awaited beyond school.
            </p>
          </div>
        </section>

        {/* Legacy */}
        <section className="mb-20">
          <div className="prose prose-xl text-gray-300 space-y-8 max-w-none">
            <h3 className="text-3xl font-semibold text-yellow-400 mb-8">
              The Royal Legacy: More Than Just Education
            </h3>
            <p>
              As I walked out of Royal College for the last time as a student in
              2018, I carried with me more than just academic qualifications. I
              carried the values instilled by nearly two centuries of tradition:
              integrity, excellence, service, and leadership. The school motto
              &quot;Disce aut Discede&quot; had become more than words on a
              crest—it had become a way of life.
            </p>
            <p>
              Royal College taught me that true education isn&apos;t just about
              acquiring knowledge; it&apos;s about developing character. From
              the cricket pitch where I learned about strategy and perseverance,
              to the prefect duties that taught me about responsibility and
              leadership, every experience contributed to my growth as an
              individual.
            </p>
            <p>
              Today, as I pursue my Master&apos;s in Information Technology at
              the University of Waikato and work as a full-stack developer, I
              carry the Royal College spirit with me. The problem-solving skills
              honed through years of challenging academics, the leadership
              qualities developed through prefect responsibilities, and the
              adaptability learned from transforming my cricket bowling
              style—all these continue to serve me well.
            </p>
            <p>
              Royal College didn&apos;t just give me an education; it gave me an
              identity. Once a Royalist, always a Royalist. The bonds formed,
              the lessons learned, and the values instilled remain an integral
              part of who I am today. In the words of our beloved college song:
              &quot;We will learn of books and men, and learn to play the
              game.&quot;
            </p>
          </div>
        </section>

        {/* Closing */}
        <footer className="border-t border-slate-700 pt-8">
          <div className="text-center">
            <p className="text-lg text-yellow-400 font-medium mb-4">
              &quot;Floreat&quot; - May it flourish
            </p>
            <p className="text-gray-400 mb-6">
              The motto that has guided Royal College since 1836, derived from
              &quot;Floreat Etona,&quot; the motto of Eton College upon which
              Royal was modeled.
            </p>
            <Link
              href="/"
              className="inline-flex items-center px-6 py-3 bg-yellow-400 text-slate-900 font-medium rounded-lg hover:bg-yellow-300 transition-colors"
            >
              ← Back to Portfolio
            </Link>
          </div>
        </footer>
      </main>
    </div>
  );
}
