import Image from "next/image";

export default function Home() {
  const photos = [
    { src: "/maa1.jpeg", caption: "Our beautiful Maa 🌸", alt: "Maa with roses" },
    { src: "/family.jpeg", caption: "Us four — always 💫", alt: "Family selfie" },
    { src: "/maa_me.jpeg", caption: "My favourite person 🤍", alt: "Maa and me" },
  ];

  return (
    <main className="page">
      <div className="petals-bg" aria-hidden="true">
        {Array.from({ length: 14 }).map((_, i) => (
          <span key={i} className={`petal petal-${i}`}>
            {["🌸","🌷","✿","🌺","💮"][i % 5]}
          </span>
        ))}
      </div>

      <section className="hero">
        <p className="hero-tag">Happy Mother&apos;s Day</p>
        <h1 className="hero-title">
          <span className="heart-pulse">🩷</span>
          <br />
          For You, <em>Maa</em>
        </h1>
        <p className="hero-sub">With everything we have and everything we are.</p>
      </section>

      <section className="letter-section">
        <div className="letter-card">
          <span className="letter-quote">&ldquo;</span>
          <p className="letter-body">
            Maa, you have done so much for us <strong>me, Nikku, and Ridhi Bhaiya</strong>. 
            You are the most selfless person I know. I know sometimes it gets frustrating, 
            and the weight of it all can feel too heavy but you carry it with a grace that leaves us in awe.
          </p>
          <p className="letter-body mt">
            You have shown me what it means to be <strong>responsible and accountable</strong>  
            not through lectures, but through the way you live every single day. And Maa, your cooking? 
            Honestly, nothing in this world comes close. Every meal is love on a plate. 🍽️
          </p>
          <p className="letter-body mt">
            I wish  more than anything  that I could grow up to be as <strong>resilient as you</strong>. 
            You bend but you never break. You give without counting. You love without condition. 
            That is your superpower, and it is the most beautiful thing I have ever witnessed.
          </p>
          <p className="letter-sign">— With all my love, always yours 💗</p>
        </div>
      </section>

      <section className="photos-section">
        <h2 className="section-heading">Our favourite moments 📷</h2>
        <div className="photos-grid">
          {photos.map((photo) => (
            <div key={photo.src} className="photo-card">
              <div className="photo-wrap">
                <Image src={photo.src} alt={photo.alt} fill className="photo-img" sizes="(max-width: 768px) 90vw, 33vw" />
              </div>
              <p className="photo-caption">{photo.caption}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="site-footer">
        <div className="flower-row" aria-hidden="true">🌸 🌷 🌼 🌺 🌸</div>
        <p className="footer-text">Happy Mother&apos;s Day, Maa  today, tomorrow, forever. 🩷</p>
      </footer>
    </main>
  );
}
