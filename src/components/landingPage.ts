export function createLandingPage(): string {
    return `
    <!-- Navigation Bar -->
    <nav class="navbar" id="navbar">
      <div class="nav-container">
        <div class="nav-logo">
          <img src="/images/Logo 4.jpg" alt="Austyne Digitals Logo" class="logo-image" />
          <div class="logo-text-container">
            <span class="logo-text">Austyne</span>
            <span class="logo-accent">Digitals</span>
          </div>
        </div>
        <ul class="nav-menu" id="nav-menu">
          <li class="nav-item">
            <a href="#home" class="nav-link" data-section="home">Home</a>
          </li>
          <li class="nav-item">
            <a href="#problem" class="nav-link" data-section="problem">Problem</a>
          </li>
          <li class="nav-item">
            <a href="#solution" class="nav-link" data-section="solution">Solution</a>
          </li>
          <li class="nav-item">
            <a href="#testimonials" class="nav-link" data-section="testimonials">Testimonials</a>
          </li>
          <li class="nav-item">
            <a href="#about" class="nav-link" data-section="about">About</a>
          </li>
          <li class="nav-item">
            <a href="#services" class="nav-link" data-section="services">Services</a>
          </li>
          <li class="nav-item">
            <a href="#contact" class="nav-link" data-section="contact">Contact</a>
          </li>
        </ul>
        <div class="nav-cta">
          <button class="cta-button primary nav-cta-btn">
            <span>BOOK NOW</span>
          </button>
        </div>
        <div class="hamburger" id="hamburger">
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
        </div>
      </div>
    </nav>

    <!-- Hero Section -->
    <section class="hero" id="home">
      <div class="container">
        <div class="hero-content animate-on-scroll">
          <h1 class="hero-title">
            <span class="highlight"></span> YOUR CONTENT AND COPY IS KILLING YOUR SALES! Here's How To Fix It!<span class="highlight">(Before You Lose Another Sale)</span>
          </h1>
          <p class="hero-subtitle">
            You're one smart move away from a content system that sells for you, builds loyal fans, and attracts ready-to-pay clients — without burnout or a crazy posting schedule...Works even when you're offline
          </p>
          <button class="cta-button primary">
            <span>BOOK A FREE AUDIT</span>
            <svg class="arrow-icon" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path>
            </svg>
          </button>
        </div>
        <div class="hero-image animate-on-scroll">
          <img src="https://austynedigitals.carrd.co/assets/images/image02.jpg?v=d1216927" alt="Transform your followers to buyers with strategies and Copy that converts" />
        </div>
      </div>
    </section>

    <!-- Problem Section -->
    <section class="problem-section" id="problem">
      <div class="container">
        <div class="problem-content animate-on-scroll">
          <h2>You're posting consistently - maybe even paying for content or ads —But deep down you know...</h2>
          <div class="problem-points">
            <p>Your content isn't converting like it should. You're not making enough sales from your online presence. Your social media looks busy… but not profitable, or you're just not getting the visibility you deserve. Your message? A bit scattered. A bit... "meh!"</p>
            <p><strong>Look, I get it — and I fix all that.</strong></p>
          </div>
        </div>
        <div class="problem-image animate-on-scroll">
          <img src="https://austynedigitals.carrd.co/assets/images/image03.jpg?v=d1216927" alt="Transform your followers to buyers with Content strategies & Ad Copy that converts" />
        </div>
      </div>
    </section>

    <!-- Brands Section -->
    <section class="brands-section animate-on-scroll">
      <div class="container">
        <h3>Some Brands I've Worked With...</h3>
        <div class="brands-grid">
          <div class="brand-item">
            <img src="/images/Logo 1.jpg" alt="Brand 1" class="brand-logo" />
          </div>
          <div class="brand-item">
            <img src="/images/Logo 2.jpg" alt="Brand 2" class="brand-logo" />
          </div>
          <div class="brand-item">
            <img src="/images/logo 3.jpg" alt="Brand 3" class="brand-logo" />
          </div>
          <div class="brand-item">
            <img src="/images/Logo 5.jpg" alt="Brand 4" class="brand-logo" />
          </div>
         \
          </div>
        </div>
      </div>
    </section>

    <!-- Solution Section -->
    <section class="solution-section" id="solution">
      <div class="container">
        <div class="solution-content animate-on-scroll">
          <h2>I help ambitious brands, coaches, founders & business owners like you turn your contents & Copy into a sales conversion machine with:</h2>
          <div class="solution-points">
            <div class="point">✅ Clear Content Strategy</div>
            <div class="point">✅ Scroll-Stopping Copy</div>
            <div class="point">✅ Sales Funnel Optimization</div>
            <div class="point">✅ Social Media Systems that attract, nurture & sell</div>
          </div>
          <p class="solution-description">
            Whether you're trying to build trust, grow faster, or close more clients — I'll build you a Powerful Brand Presence that Makes People Stop, Connect, and Buy.
          </p>
          <button class="cta-button secondary">
            <span>BOOK A CALL NOW</span>
            <svg class="arrow-icon" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path>
            </svg>
          </button>
        </div>
      </div>
    </section>

    <!-- Testimonials Section -->
    <section class="testimonials-section" id="testimonials">
      <div class="container">
        <h2 class="animate-on-scroll">What Clients Are Saying...</h2>
        <div class="testimonials-grid">
          <div class="testimonial animate-on-scroll">
            <div class="testimonial-content">
              <p>"I've paid more than this before for content strategy & Copywriting — but this was the first time I got real strategy that made sense And sales that I could track."</p>
            </div>
            <div class="testimonial-author">
              <strong>Rowdy Mat</strong> — US-based Business Coach & info-product owner
            </div>
          </div>
          
          <div class="testimonial animate-on-scroll">
            <div class="testimonial-content">
              <p>"Nice guy! Austine fixed our bio, our captions & Ad Copy, our whole message — and our leads doubled in 3 weeks. Will surely work with him again"</p>
            </div>
            <div class="testimonial-author">
              <strong>Chan Bulondi</strong> — Ontario Skincare Brand
            </div>
          </div>

          <div class="testimonial animate-on-scroll">
            <div class="testimonial-content">
              <p>"I cannot recommend Austine enough for complete content strategy & Copywriting! My engagement is up, I am getting more conversations in my DMs and I've seen a notable increase in followers. I have much more time now to focus on my business building because he has taken so much off my plate, and because of that, I've seen a huge increase in revenue. Signing up with Austine is one of the best business decisions I made"</p>
            </div>
            <div class="testimonial-author">
              <strong>Steve Oriabure</strong> — Nigeria-based entrepreneur & importer (e-commerce & retail)
            </div>
          </div>

          <div class="testimonial animate-on-scroll">
            <div class="testimonial-content">
              <p>"We got stuck with 'vanity contents for my business before… but Austine came in with clarity, systems & then results."</p>
            </div>
            <div class="testimonial-author">
              <strong>Salim Al Shehhi</strong> — Dubai-Based SaaS Consultant
            </div>
          </div>

          <div class="testimonial animate-on-scroll">
            <div class="testimonial-content">
              <p>"I've worked with copywriters before, but what Austine delivered? Man—it was like he reached into my brain, pulled out my thoughts, and turned them into dollar-pulling words. The ad copy he wrote didn't just sell the product—it made it feel alive. Sales shot up, engagement doubled, and my inbox? Let's just say it's been busy. If you're thinking twice, don't. This guy's the real deal."</p>
            </div>
            <div class="testimonial-author">
              <strong>Jake Morrison</strong> — Montana-based Product Creator & BBQ Sauce Enthusiast
            </div>
          </div>
        </div>
        
        <div class="testimonials-cta animate-on-scroll">
          <p>Waste No time further. Your testimonial could be next - Have me examine your Business sales funnel, and help you optimize it for growth in "sales & social media presence"</p>
          <p><strong>Are you serious about your business? Then Book A Free Consultation - Let's Help Your Business Grow in Visibility and Conversion</strong></p>
          <button class="cta-button primary">
            <span>BOOK NOW</span>
            <svg class="arrow-icon" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path>
            </svg>
          </button>
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section class="about-section" id="about">
      <div class="container">
        <h2 class="animate-on-scroll">Why Work With Me...</h2>
        <div class="about-content">
          <div class="about-text animate-on-scroll">
            <h3>I'm Austine Nd, a high-converting Content-Strategist, Direct response Copywriter & Sales Funnel Expert with over a decade of digital experience.</h3>
            <p>Helping brands grow with contents & Copy that works! like a sales team — silently converting curious followers into paying clients.</p>
          </div>
          <div class="about-image animate-on-scroll">
            <img src="/images/workwithme.jpg" alt="Austine Ndubuisi - Content Strategist and Copywriter" />
          </div>
        </div>
      </div>
    </section>

    <!-- Services Section -->
    <section class="services-section" id="services">
      <div class="container">
        <h2 class="animate-on-scroll">What You Stand To Get...</h2>
        <div class="services-grid">
          <div class="service animate-on-scroll">
            <span class="service-icon">√</span>
            <p>Content strategy that aligns with your brand goals</p>
          </div>
          <div class="service animate-on-scroll">
            <span class="service-icon">√</span>
            <p>Sales copy that doesn't feel "salesy" but gets the job done</p>
          </div>
          <div class="service animate-on-scroll">
            <span class="service-icon">√</span>
            <p>Social media plans built to grow & convert</p>
          </div>
          <div class="service animate-on-scroll">
            <span class="service-icon">√</span>
            <p>Sales Funnel optimization - Result oriented Systems you can keep using even without me</p>
          </div>
        </div>
        <p class="services-tagline animate-on-scroll">👉 This isn't random content. It's smart strategy that scales.</p>
        
        <!-- Pricing Section -->
        <div class="pricing-section animate-on-scroll">
          <h3 class="pricing-title">CONTENT STRATEGY/SMM PRICING</h3>
          <p class="pricing-subtitle">I recommend any of the following custom packages for your Content Strategy/SMM Needs:</p>
          
          <div class="pricing-grid">
            <!-- The Starter Package -->
            <div class="pricing-card starter animate-on-scroll">
              <div class="pricing-header">
                <h4>THE STARTER</h4>
                <div class="pricing-investment">
                  <p class="investment-label">INVESTMENT:</p>
                  <p class="price">$1000/MONTH</p>
                  <p class="price-then">THEN $1500/MONTH</p>
                </div>
              </div>
              
              <div class="pricing-content">
                <div class="pricing-period">
                  <h5>FIRST MONTH</h5>
                  <ul>
                    <li>40 minutes per week of consultation time.</li>
                    <li>Researching + analyzing inspirational accounts.</li>
                    <li>Developing a clear content strategy</li>
                    <li>Creating a plan of action for posting</li>
                  </ul>
                </div>
                
                <div class="pricing-period">
                  <h5>FOLLOWING 2 MONTHS</h5>
                  <ul>
                    <li>3 SM posts per week</li>
                    <li>Reels repurposing strategy + tutorial</li>
                    <li>Weekly video concepts:</li>
                    <li>Hooks, value points + CTAs</li>
                    <li>AdCopy / Captions + Hashtags</li>
                    <li>One round of revisions</li>
                  </ul>
                </div>
              </div>
            </div>

            <!-- The Premium Package -->
            <div class="pricing-card premium animate-on-scroll">
              <div class="pricing-header">
                <h4>THE PREMIUM</h4>
                <div class="pricing-investment">
                  <p class="investment-label">INVESTMENT: $1400/MONTH</p>
                  <p class="price-then">THEN $2000/MONTH</p>
                </div>
              </div>
              
              <div class="pricing-content">
                <div class="pricing-period">
                  <h5>FIRST MONTH</h5>
                  <ul>
                    <li>60 minutes per week of consultation time.</li>
                    <li>Researching + analyzing inspirational accounts.</li>
                    <li>Developing a clear content strategy</li>
                    <li>Creating a plan of action for posting</li>
                  </ul>
                </div>
                
                <div class="pricing-period">
                  <h5>FOLLOWING 2 MONTHS</h5>
                  <ul>
                    <li>5 SM posts per week</li>
                    <li>3 Posts/Reels Repurposed</li>
                    <li>Weekly video concepts + Vd Editing</li>
                    <li>Hooks, value points + CTAs</li>
                    <li>Ad/Copy / Captions + Hashtags</li>
                    <li>One round of revisions</li>
                  </ul>
                </div>
              </div>
            </div>

            <!-- The Ultimate Package -->
            <div class="pricing-card ultimate animate-on-scroll">
              <div class="pricing-header">
                <h4>THE ULTIMATE</h4>
                <div class="pricing-investment">
                  <p class="investment-label">INVESTMENT:</p>
                  <p class="price">$2000/MONTH</p>
                  <p class="price-then">THEN $2500/MONTH</p>
                </div>
              </div>
              
              <div class="pricing-content">
                <div class="pricing-period">
                  <h5>FIRST MONTH</h5>
                  <ul>
                    <li>90 minutes per week of consultation time.</li>
                    <li>Researching + analyzing inspirational accounts.</li>
                    <li>Developing a clear content strategy</li>
                    <li>Creating a plan of action for posting</li>
                  </ul>
                </div>
                
                <div class="pricing-period">
                  <h5>FOLLOWING 2 MONTHS</h5>
                  <ul>
                    <li>7 SM posts per week</li>
                    <li>4 Posts/Reels repurposed</li>
                    <li>Weekly video concepts + Vd Editing</li>
                    <li>Hooks, value points + CTAs</li>
                    <li>AdCopy /Captions + Hashtags</li>
                    <li>One round of revisions</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Offers Section -->
    <section class="offers-section">
      <div class="container">
        <h2 class="animate-on-scroll">My Signature Offer Includes...</h2>
        <div class="offers-content animate-on-scroll">
          <div class="offer-list">
            <div class="offer-item">✔️ A personalized content strategy map</div>
            <div class="offer-item">✔️ 2–4 weeks of content & copy planning</div>
            <div class="offer-item">✔️ Social page optimization (bio, CTA, flow)</div>
            <div class="offer-item">✔️ Social Media Management(SMM)</div>
            <div class="offer-item">✔️ Done-for-you caption/copy bundle (Optional)</div>
            <div class="offer-item">✔️ Sales Funnel Optimization (Optional)</div>
            <div class="offer-item">✔️ Clear guidance to grow sales without ads</div>
          </div>
          <div class="pricing">
            <h3>💥 Starting at $500/project (Copywriting + Sales Funnel Optimization lite)</h3>
            <p>or</p>
            <h3>$1000/monthly (Content Strategy + SMM + Copywriting + Sales-funnel Optimization)</h3>
          </div>
        </div>
        
        <div class="offers-cta animate-on-scroll">
          <p>Let's craft you a custom strategy and offer for your business - based on what it lacks, or specifically needs for better results.</p>
          <h3>Ready to Stop Posting Randomly & Start Growing Intentionally?</h3>
          <p>Then let's turn your business storefront (social Media, Sales funnel, or website) into a client-generating machine</p>
          <p>With zero stress, just smart moves.</p>
          <p><strong>👉 Book Your Free Discovery Call Now OR 👉 A Free 10-Minute Audit</strong></p>
          <p class="urgency">(ONLY 2 CLIENT SLOTS ARE OPEN THIS MONTH — Grab yours Fast!)</p>
          <button class="cta-button primary large">
            <span>BOOK NOW</span>
            <svg class="arrow-icon" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path>
            </svg>
          </button>
        </div>
      </div>
    </section>

    <!-- About Detail Section -->
    <section class="about-detail-section">
      <div class="container">
        <div class="about-detail-content animate-on-scroll">
          <h2>About</h2>
          <div class="about-text">
            <p><strong>Hi i'm Austine Ndubuisi — the velvet hammer behind Austyne-Digitals.</strong></p>
            <p>I believe great content isn't just written, It's engineered. Designed to speak, sell, and scale. To stop the scroll. Spark emotion. And slide wallets open — not through hype, but by hitting the nerve where desire meets decision.</p>
            <p>I don't just write. I translate value into irresistible offers. I don't just strategize. I reverse-engineer success from the wallets of your best customers. And I don't just build funnels. I build movements - flows that turn strangers into loyal buyers and buyers into your brand evangelists.</p>
            <p>My work is for business owners who are done playing small. Who know their product solves a real problem. And want copy, content, and strategy that moves people — and moves profit.</p>
            <p>Because content without strategy is noise. Strategy without copy is useless. And copy without a heart is dead on arrival.</p>
            <p>At Austyne-Digitals, I bring them all together. Emotion. Persuasion. Conversion. Execution. The holy trinity of high-performance content that feels real and sells fast.</p>
            <p><strong>No fluff. No generic templates. No "sprinkle some value and manifest the sales" nonsense.</strong></p>
            <p>Just strategy backed by psychology, buyer behavior, and a God-tier obsession for results.</p>
            <p><strong>This is my manifesto. This is my standard. This is Austyne Digitals - building brands that sell themselves.</strong></p>
          </div>
        </div>
      </div>
    </section>

    <!-- Final CTA Section -->
    <section class="final-cta-section">
      <div class="container">
        <div class="final-cta-content animate-on-scroll">
          <h2>FINAL WORD?</h2>
          <p>You're not here just to be liked. You're here to be remembered & to sell more "with ease!</p>
          <p><strong>Sign Up with Austyne Digitals</strong></p>
          <p>And your content… your strategy… your offers… They'll be so damn good, ignoring you won't be an option for your target audience</p>
          <p><strong>Let's build that reality...</strong></p>
          <button class="cta-button primary large">
            <span>BOOK NOW</span>
            <svg class="arrow-icon" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path>
            </svg>
          </button>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="footer" id="contact">
      <div class="container">
        <div class="footer-content">
          <p>I Share Free Tips, Insights & Resources that help your business thrive online - on my social media pages below. Use the social media links below Let's connect 👍🏽</p>
          <div class="social-links">
            <a href="#" aria-label="X (Twitter)">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            <a href="#" aria-label="Instagram">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987c6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.73-3.016-1.8L4.27 17.94l-1.02-.612l1.163-2.753c-.257-.613-.257-1.306 0-1.919L3.25 9.903l1.02-.612l1.163 2.753c.568-1.07 1.719-1.8 3.016-1.8s2.448.73 3.016 1.8l1.163-2.753l1.02.612l-1.163 2.753c.257.613.257 1.306 0 1.919l1.163 2.753l-1.02.612l-1.163-2.753c-.568 1.07-1.719 1.8-3.016 1.8z"/>
              </svg>
            </a>
            <a href="#" aria-label="LinkedIn">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a href="#" aria-label="Website">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
              </svg>
            </a>
          </div>
          <div class="footer-info">
            <p>Austinedigitals.net@gmail.com</p>
            <p>© Austyne-Digitals 2025</p>
          </div>
        </div>
      </div>
    </footer>
  `
}
