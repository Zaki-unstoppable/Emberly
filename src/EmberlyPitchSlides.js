// src/EmberlyPitchSlides.js
import React, { useState } from "react";

// 🔥 Flame Divider Component
function FlameDivider() {
  return (
    <div
      style={{
        width: "100%",
        height: 8,
        background: "linear-gradient(90deg,#ef4444,#f97316,#facc15)",
        borderTopLeftRadius: 12,
        borderTopRightRadius: 12,
      }}
    />
  );
}

// 🔥 Main Pitch Component
export default function EmberlyPitchSlides() {
  // === SLIDES CONTENT ===
  const slides = [
    {
      title: "Why Emberly Beats Samsung in the Smart Cooking Game",
      bullets: [
        "Samsung focuses on smart add-ons like timers, cameras, and remote app control. Emberly redefines the cooking experience itself.",
        "Emberly isn’t about convenience, it’s about intelligence. Our stove literally sees your food and reacts in real time.",
        "Samsung makes stoves connected to apps. Emberly makes stoves that are smart enough to cook for you.",
      ],
    },
    {
      title: "1. True AI-Driven Cooking vs. Smart Add-Ons",
      bullets: [
        "Samsung’s innovation revolves around making cooking easier with notifications, timers, and connectivity.",
        "Emberly uses proprietary AI + thermal imaging sensors to analyze food doneness in real time, automatically adjusting heat so you get perfect results every time.",
        "This is not incremental convenience. This is a leap from passive tools to active intelligence in the kitchen.",
      ],
    },
    {
      title: "2. Precision Temperature Estimation",
      bullets: [
        "Samsung: Relies on cooktop sensors and probes, which give limited, localized readings.",
        "Emberly: MLX90640 thermal imaging sensors generate full heat maps of your food surface. Our AI interprets these patterns to understand doneness and cooking dynamics.",
        "Instead of stabbing a chicken with a probe or guessing with timers, Emberly simply sees the heat signature and makes decisions instantly.",
      ],
    },
    {
      title: "3. Safety Architecture",
      bullets: [
        "Samsung: Standard auto shut-off, temperature limits, and child locks.",
        "Emberly: A dual-brain system. The Raspberry Pi runs the AI brain, while the Arduino independently manages all safety overrides.",
        "Even if the AI glitches, overheats, or crashes, the Arduino ensures safety never fails. Safety is isolated, guaranteed, and untouchable.",
        "This is military-grade safety engineering applied to your home kitchen.",
      ],
    },
    {
      title: "4. Dual Revenue Model",
      bullets: [
        "Samsung: Primarily hardware sales. Their SmartThings app is free, with no deep AI-driven revenue streams.",
        "Emberly: Hardware sales + subscription revenue. Basic features are free, but advanced AI coaching, recipe integration, cooking analytics, and predictive alerts are premium.",
        "This creates sticky recurring revenue, high margins, and long-term engagement. Emberly isn’t just a product, it’s a platform.",
      ],
    },
    {
      title: "5. Community & Ecosystem Vision",
      bullets: [
        "Samsung: Broad smart appliance focus with generalized integrations.",
        "Emberly: A cooking-first ecosystem and community. Recipe sharing, AR cooking assistant, gamification, and even a Pro version for restaurants and culinary schools.",
        "We’re building more than hardware, we’re creating a culture, a movement, and a lifestyle around smarter, safer, AI-driven cooking.",
      ],
    },
    {
      title: "6. Agility & Focus",
      bullets: [
        "Samsung: A global giant, spread across dozens of industries. Kitchen innovation is just one bullet point in a massive corporate playbook.",
        "Emberly: A laser-focused startup. 100% of our time, team, and talent is dedicated to reinventing how humanity cooks.",
        "That agility lets us innovate faster, iterate based on customer feedback, and dominate a niche before giants can even react.",
      ],
    },
    {
      title: "Investor Soundbite",
      bullets: [
        "“Samsung makes smart stoves. Emberly makes stoves that are smart enough to cook for you.”",
        "This single sentence captures the leap, from appliances that wait for you, to appliances that think and act on your behalf.",
      ],
    },
    {
      title: "The Pitch: Setting the Stage",
      bullets: [
        "Good afternoon, Sharks. My name is Zakariya, joined by my co-inventor Idris Aquil.",
        "Together, we are the founders of Emberly, Inc., and we’re here to change the way the world cooks, forever.",
        "Every day, millions of home cooks face the same frustrations: burned meals, undercooked food, wasted ingredients, and kitchen accidents.",
        "Traditional stoves are blind. Emberly isn’t. Emberly sees.",
      ],
    },
    {
      title: "How Emberly Works",
      bullets: [
        "Inside Emberly lives a dual-brain system: Raspberry Pi runs our AI, Arduino runs independent safety logic.",
        "Thermal imaging sensors continuously scan your food, producing real-time heat maps.",
        "AI interprets those maps, predicts doneness, adjusts temperatures automatically, and sends live cooking insights to the Emberly app.",
        "It’s like cooking with a Michelin-star chef at your side, minus the attitude.",
      ],
    },
    {
      title: "Business Model & Market Opportunity",
      bullets: [
        "Unit cost: $1,200–$1,500. Projected margins after scale: 35–40%.",
        "Recurring subscription: $4.99–$9.99/month for advanced features like AI cooking suggestions and analytics.",
        "The smart appliance market is projected to hit $60B+ by 2030. Emberly is carving the AI-cooking niche within this market.",
        "We are not selling just stoves, we’re creating the ‘AI Chef’ category.",
      ],
    },
    {
      title: "Growth Roadmap",
      bullets: [
        "Year 1: Launch, build brand awareness, and capture early adopters.",
        "Year 2: Product enhancements, voice assistant integrations, and partnerships with meal kit companies.",
        "Year 3: International expansion to Europe & Asia, plus Emberly Pro for restaurants and culinary schools.",
        "Beyond: Expand into ovens, grills, and countertop devices, the Emberly Smart Kitchen ecosystem.",
      ],
    },
    {
      title: "The Ask",
      bullets: [
        "We are seeking $500,000 in exchange for 5% equity.",
        "The funds will fuel our first major production run, expand our AI capabilities, and accelerate marketing campaigns.",
        "We have the tech. We’ve proven the concept. Now we’re ready to scale and own the AI cooking category.",
        "Sharks, Emberly isn’t just a product. It’s the future of food. Who’s hungry to join us?",
      ],
    },
  ];

  const DEFAULT_PLACEHOLDER =
    "https://via.placeholder.com/600x300?text=Emberly+Slide";

  const [images, setImages] = useState(Array(slides.length).fill(""));
  const [erroredImages, setErroredImages] = useState([]);

  // Slideshow state
  const [slideshowMode, setSlideshowMode] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  // === STYLES ===
  const styles = {
    container: {
      maxWidth: 1100,
      margin: "0 auto",
      padding: 20,
      fontFamily: "Inter, system-ui, Arial",
      color: "#111827",
      background: "linear-gradient(180deg,#fff7ed,#fff1f2)",
    },
    card: {
      borderRadius: 16,
      overflow: "hidden",
      marginBottom: 32,
      border: "2px solid #f87171",
      boxShadow: "0 8px 24px rgba(239,68,68,0.25)",
      background: "linear-gradient(180deg,#fff,#fffaf0)",
      position: "relative",
    },
    imageWrap: {
      height: 260,
      background: "linear-gradient(90deg,#fca5a5,#fdba74)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      overflow: "hidden",
    },
    content: { padding: 24 },
    title: {
      fontSize: 26,
      margin: 0,
      marginBottom: 16,
      color: "#b91c1c",
      fontWeight: 700,
      textShadow: "1px 1px 2px rgba(0,0,0,0.15)",
      letterSpacing: "0.5px",
    },
    list: {
      margin: 0,
      paddingLeft: 24,
      color: "#374151",
      lineHeight: 1.8,
      fontSize: 16,
    },
    ctaWrap: {
      display: "flex",
      justifyContent: "center",
      marginTop: 40,
    },
    buttonPrimary: {
      background: "linear-gradient(90deg,#ef4444,#f97316)",
      color: "#fff",
      border: "none",
      padding: "14px 24px",
      borderRadius: 12,
      fontSize: 18,
      cursor: "pointer",
      fontWeight: 600,
      boxShadow: "0 6px 16px rgba(249,115,22,0.45)",
      textDecoration: "none",
    },
  };

  // Handle broken images
  const handleImageError = (index, e) => {
    const updated = [...erroredImages];
    updated[index] = true;
    setErroredImages(updated);
  };

  // Handle image upload
  const handleImageUpload = (index, e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const updated = [...images];
        updated[index] = reader.result;
        setImages(updated);
      };
      reader.readAsDataURL(file);
    }
  };

  // Slideshow navigation
  const goToPrev = () => setCurrentSlide((prev) => Math.max(prev - 1, 0));
  const goToNext = () => setCurrentSlide((prev) => Math.min(prev + 1, slides.length - 1));

  return (
    <>
      <div style={{...styles.container, minHeight: '100vh'}}>
        <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: 24 }}>
          <button
            style={{ ...styles.buttonPrimary, padding: '8px 18px', fontSize: 16 }}
            onClick={() => setSlideshowMode((m) => !m)}
          >
            {slideshowMode ? 'Exit Slideshow' : 'View as Slideshow'}
          </button>
        </div>
        {slideshowMode ? (
          <section style={styles.card}>
            <FlameDivider />
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <div style={styles.imageWrap}>
                <img
                  src={erroredImages[currentSlide] ? DEFAULT_PLACEHOLDER : images[currentSlide] || DEFAULT_PLACEHOLDER}
                  alt={slides[currentSlide].title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  onError={(e) => handleImageError(currentSlide, e)}
                />
              </div>
              <input
                type="file"
                accept="image/*"
                style={{ margin: '12px 0' }}
                onChange={(e) => handleImageUpload(currentSlide, e)}
              />
              <div style={styles.content}>
                <h2 style={styles.title}>{slides[currentSlide].title}</h2>
                <ul style={styles.list}>
                  {slides[currentSlide].bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
              </div>
              <div style={{ display: 'flex', gap: 16, marginTop: 24 }}>
                <button
                  style={{ ...styles.buttonPrimary, opacity: currentSlide === 0 ? 0.5 : 1 }}
                  onClick={goToPrev}
                  disabled={currentSlide === 0}
                >
                  ◀ Prev
                </button>
                <span style={{ fontWeight: 600, fontSize: 16 }}>
                  Slide {currentSlide + 1} / {slides.length}
                </span>
                <button
                  style={{ ...styles.buttonPrimary, opacity: currentSlide === slides.length - 1 ? 0.5 : 1 }}
                  onClick={goToNext}
                  disabled={currentSlide === slides.length - 1}
                >
                  Next ▶
                </button>
              </div>
            </div>
          </section>
        ) : (
          slides.map((slide, idx) => (
            <section key={idx} style={styles.card}>
              <FlameDivider />
              <div style={styles.imageWrap}>
                <img
                  src={erroredImages[idx] ? DEFAULT_PLACEHOLDER : images[idx] || DEFAULT_PLACEHOLDER}
                  alt={slide.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  onError={(e) => handleImageError(idx, e)}
                />
              </div>
              <input
                type="file"
                accept="image/*"
                style={{ margin: '12px 0' }}
                onChange={(e) => handleImageUpload(idx, e)}
              />
              <div style={styles.content}>
                <h2 style={styles.title}>{slide.title}</h2>
                <ul style={styles.list}>
                  {slide.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
              </div>
            </section>
          ))
        )}
        <div style={styles.ctaWrap}>
          <a
            href="https://emberly-smart-cook.lovable.app/"
            target="_blank"
            rel="noopener noreferrer"
            style={styles.buttonPrimary}
          >
            🔥 Join Us & Turn Up The Heat
          </a>
        </div>
      </div>
    </>
  );
}
