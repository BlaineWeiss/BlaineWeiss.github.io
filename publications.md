---
layout: page
title: Publications
subtitle: Peer-reviewed articles, methods papers, and scientific contributions
permalink: /publications/
full-width: true
---

<style>
/* Publications page for BlaineWeiss.github.io / Beautiful Jekyll
   Drop this file into the root of your GitHub Pages repository as publications.md.
   Replace image paths in the Featured Publication section after uploading images to /assets/img/. */

.bw-pub-page {
  --bw-ink: #0f172a;
  --bw-muted: #64748b;
  --bw-line: rgba(148, 163, 184, 0.28);
  --bw-card: rgba(255, 255, 255, 0.92);
  --bw-glass: rgba(15, 23, 42, 0.74);
  --bw-blue: #38bdf8;
  --bw-violet: #8b5cf6;
  --bw-lava: #f97316;
  --bw-emerald: #14b8a6;
  color: var(--bw-ink);
}

.bw-pub-hero {
  position: relative;
  overflow: hidden;
  border-radius: 28px;
  padding: clamp(2rem, 5vw, 4.5rem);
  margin: 1.25rem 0 2rem;
  color: white;
  background:
    radial-gradient(circle at 12% 18%, rgba(56, 189, 248, 0.42), transparent 28%),
    radial-gradient(circle at 86% 16%, rgba(249, 115, 22, 0.30), transparent 26%),
    radial-gradient(circle at 62% 90%, rgba(139, 92, 246, 0.34), transparent 30%),
    linear-gradient(135deg, #020617 0%, #111827 48%, #1e293b 100%);
  box-shadow: 0 26px 70px rgba(2, 6, 23, 0.34);
}

.bw-pub-hero::before {
  content: "";
  position: absolute;
  inset: -2px;
  background-image:
    linear-gradient(rgba(255,255,255,0.055) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,0.045) 1px, transparent 1px);
  background-size: 42px 42px;
  mask-image: linear-gradient(to bottom, rgba(0,0,0,0.85), transparent 86%);
  pointer-events: none;
}

.bw-pub-hero > * {
  position: relative;
  z-index: 1;
}

.bw-pub-kicker {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.42rem 0.75rem;
  border: 1px solid rgba(255,255,255,0.22);
  border-radius: 999px;
  background: rgba(255,255,255,0.10);
  color: rgba(255,255,255,0.86);
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.bw-pub-hero h1 {
  max-width: 900px;
  margin: 1rem 0 0.85rem;
  color: white;
  font-size: clamp(2.4rem, 6vw, 5.2rem);
  line-height: 0.95;
  letter-spacing: -0.06em;
}

.bw-pub-hero p {
  max-width: 820px;
  margin: 0;
  color: rgba(255,255,255,0.78);
  font-size: clamp(1.02rem, 2vw, 1.22rem);
  line-height: 1.75;
}

.bw-pub-stats {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 0.9rem;
  margin-top: 1.65rem;
}

.bw-pub-stat {
  padding: 1rem;
  border: 1px solid rgba(255,255,255,0.16);
  border-radius: 18px;
  background: rgba(255,255,255,0.09);
  backdrop-filter: blur(10px);
}

.bw-pub-stat strong {
  display: block;
  color: white;
  font-size: clamp(1.35rem, 3vw, 2.1rem);
  line-height: 1;
}

.bw-pub-stat span {
  display: block;
  margin-top: 0.35rem;
  color: rgba(255,255,255,0.74);
  font-size: 0.86rem;
}

.bw-feature {
  display: grid;
  grid-template-columns: minmax(260px, 0.9fr) minmax(0, 1.1fr);
  gap: clamp(1.25rem, 3vw, 2rem);
  align-items: stretch;
  margin: 2.25rem 0;
  padding: clamp(1rem, 2.2vw, 1.35rem);
  border: 1px solid var(--bw-line);
  border-radius: 28px;
  background:
    linear-gradient(135deg, rgba(255,255,255,0.96), rgba(248,250,252,0.94)),
    radial-gradient(circle at 15% 20%, rgba(56, 189, 248, 0.18), transparent 30%);
  box-shadow: 0 22px 55px rgba(15, 23, 42, 0.12);
}

.bw-feature-media {
  position: relative;
  overflow: hidden;
  min-height: 340px;
   max-height: 600px;
  border-radius: 22px;
  background: #020617;
  box-shadow: inset 0 0 0 1px rgba(255,255,255,0.12), 0 16px 40px rgba(15,23,42,0.22);
}

.bw-feature-media img {
  width: 100%;
  height: 100%;
  min-height: 340px;
  max-height: 600px;
  object-fit: contain;
  display: block;
  transform: scale(1.01);
}

.bw-feature-media::after {
  content: "October 1st 2025";
  position: absolute;
  left: 1rem;
  bottom: 1rem;
  padding: 0.42rem 0.68rem;
  border-radius: 999px;
  background: rgba(2,6,23,0.68);
  color: rgba(255,255,255,0.78);
  font-size: 0.74rem;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

.bw-feature-copy {
  padding: clamp(0.75rem, 2vw, 1.5rem);
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.bw-section-label {
  color: var(--bw-lava);
  font-size: 0.78rem;
  font-weight: 800;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

.bw-feature-copy h2 {
  margin: 0.55rem 0 0.8rem;
  color: var(--bw-ink);
  font-size: clamp(1.8rem, 3.4vw, 3.1rem);
  line-height: 1.04;
  letter-spacing: -0.045em;
}

.bw-feature-journal {
  margin: 0 0 0.9rem;
  color: #1e293b;
  font-size: 1.06rem;
  font-weight: 800;
}

.bw-feature-meta {
  display: flex;
  flex-wrap: wrap;
  gap: 0.55rem;
  margin: 0.7rem 0 1rem;
}

.bw-chip {
  display: inline-flex;
  align-items: center;
  padding: 0.42rem 0.7rem;
  border-radius: 999px;
  border: 1px solid rgba(148, 163, 184, 0.32);
  background: rgba(248, 250, 252, 0.92);
  color: #334155;
  font-size: 0.82rem;
  font-weight: 700;
  text-decoration: none;
}

.bw-chip:hover {
  text-decoration: none;
  transform: translateY(-1px);
}

.bw-feature-abstract {
  color: #475569;
  line-height: 1.75;
  font-size: 1rem;
}

.bw-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-top: 1.15rem;
}

.bw-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 42px;
  padding: 0.72rem 1rem;
  border-radius: 999px;
  border: 1px solid rgba(15, 23, 42, 0.12);
  background: #0f172a;
  color: white !important;
  font-weight: 800;
  text-decoration: none;
  box-shadow: 0 12px 28px rgba(15,23,42,0.18);
}

.bw-button:hover {
  color: white !important;
  text-decoration: none;
  transform: translateY(-1px);
}

.bw-button.secondary {
  background: white;
  color: #0f172a !important;
}

.bw-pub-controls {
  display: flex;
  flex-wrap: wrap;
  gap: 0.65rem;
  align-items: center;
  justify-content: space-between;
  margin: 2.75rem 0 1.1rem;
}

.bw-pub-controls h2 {
  margin: 0;
  color: var(--bw-ink);
  font-size: clamp(1.75rem, 3vw, 2.45rem);
  letter-spacing: -0.04em;
}

.bw-filter-row {
  display: flex;
  flex-wrap: wrap;
  gap: 0.45rem;
}

.bw-filter {
  border: 1px solid var(--bw-line);
  border-radius: 999px;
  background: #fff;
  color: #334155;
  padding: 0.45rem 0.75rem;
  font-size: 0.83rem;
  font-weight: 800;
  cursor: pointer;
}

.bw-filter.active,
.bw-filter:hover {
  background: #0f172a;
  color: white;
}

.bw-pub-list {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
}

.bw-pub-card {
  position: relative;
  overflow: hidden;
  display: grid;
  grid-template-columns: 92px minmax(0, 1fr);
  gap: 1rem;
  padding: 1.2rem;
  border: 1px solid var(--bw-line);
  border-radius: 22px;
  background: var(--bw-card);
  box-shadow: 0 12px 35px rgba(15, 23, 42, 0.07);
}

.bw-pub-card::before {
  content: "";
  position: absolute;
  inset: 0 auto 0 0;
  width: 5px;
  background: linear-gradient(to bottom, var(--bw-blue), var(--bw-violet), var(--bw-lava));
  opacity: 0.88;
}

.bw-year {
  align-self: start;
  display: grid;
  place-items: center;
  width: 76px;
  height: 76px;
  margin-left: 0.15rem;
  border-radius: 20px;
  background: #f1f5f9;
  color: #0f172a;
  font-weight: 900;
  font-size: 1.2rem;
  letter-spacing: -0.03em;
}

.bw-pub-card h3 {
  margin: 0 0 0.45rem;
  color: var(--bw-ink);
  font-size: clamp(1.1rem, 2vw, 1.32rem);
  line-height: 1.25;
}

.bw-authors {
  margin: 0.15rem 0 0.45rem;
  color: #475569;
  line-height: 1.55;
  font-size: 0.94rem;
}

.bw-authors strong {
  color: #0f172a;
}

.bw-citation-line {
  margin: 0.25rem 0 0.7rem;
  color: #334155;
  font-size: 0.95rem;
  line-height: 1.55;
}

.bw-pub-links {
  display: flex;
  flex-wrap: wrap;
  gap: 0.45rem;
}

.bw-small-link {
  display: inline-flex;
  align-items: center;
  border-radius: 999px;
  border: 1px solid rgba(148, 163, 184, 0.30);
  padding: 0.34rem 0.6rem;
  color: #0f172a;
  background: #fff;
  font-size: 0.78rem;
  font-weight: 800;
  text-decoration: none;
}

.bw-small-link:hover {
  text-decoration: none;
  background: #0f172a;
  color: white;
}

.bw-note {
  margin: 1.4rem 0 0;
  padding: 1rem 1.1rem;
  border-left: 4px solid var(--bw-emerald);
  border-radius: 14px;
  background: #f8fafc;
  color: #475569;
  line-height: 1.65;
}

@media (max-width: 900px) {
  .bw-feature {
    grid-template-columns: 1fr;
  }

  .bw-pub-stats {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 620px) {
  .bw-pub-hero {
    border-radius: 22px;
    padding: 1.5rem;
  }

  .bw-pub-stats {
    grid-template-columns: 1fr;
  }

  .bw-pub-card {
    grid-template-columns: 1fr;
  }

  .bw-year {
    width: auto;
    height: auto;
    display: inline-flex;
    padding: 0.45rem 0.75rem;
    border-radius: 999px;
    font-size: 0.95rem;
  }
}
</style>

<div class="bw-pub-page">
  <section class="bw-pub-hero">
    <div class="bw-pub-kicker">Scientific Output</div>
    <h1>Publications</h1>
    <p>
      Peer-reviewed articles and scientific contributions spanning awake brain imaging, astrocyte calcium signaling,
      cerebrovascular function, neurodegeneration, MRI methods, and computational image analysis.
    </p>

    <div class="bw-pub-stats">
      <div class="bw-pub-stat"><strong>10</strong><span>Listed publications</span></div>
      <div class="bw-pub-stat"><strong>2</strong><span>First-author papers</span></div>
      <div class="bw-pub-stat"><strong>2025</strong><span>Journal cover feature</span></div>
      <div class="bw-pub-stat"><strong>AD/VCID</strong><span>Disease focus</span></div>
    </div>
  </section>

  <section class="bw-feature" id="featured-publication">
    <div class="bw-feature-media">
      <img src="/assets/img/jneuro_45_40_cover.png" alt="October 1st, 2025">
    </div>

    <div class="bw-feature-copy">
      <div class="bw-section-label">Feature Publication</div>
      <h2>Disrupted Calcium Dynamics in Reactive Astrocytes Occur with Endfeet-Arteriole Decoupling in an Amyloid Mouse Model of Alzheimer’s Disease</h2>
      <p class="bw-feature-journal">The Journal of Neuroscience</p>

      <div class="bw-feature-meta">
        <span class="bw-chip">Cover Article</span>
        <span class="bw-chip">2025</span>
        <span class="bw-chip">Volume 45, Issue 40</span>
        <span class="bw-chip">DOI: 10.1523/JNEUROSCI.0349-25.2025</span>
      </div>

      <p class="bw-feature-abstract">
        First-author study using jGCaMP8f and awake two-photon microscopy to investigate astrocyte calcium signaling,
        network disruption, and endfoot-arteriole coupling in an amyloid mouse model of Alzheimer’s disease.
      </p>

      <div class="bw-actions">
        <a class="bw-button" href="https://doi.org/10.1523/JNEUROSCI.0349-25.2025">Read article</a>
        <a class="bw-button secondary" href="https://pubmed.ncbi.nlm.nih.gov/40816764/">PubMed</a>
      </div>
    </div>
  </section>

  <div class="bw-pub-controls">
    <h2>Publication List</h2>
    <div class="bw-filter-row" aria-label="Publication filters">
      <button class="bw-filter active" type="button" data-filter="all">All</button>
      <button class="bw-filter" type="button" data-filter="first">First Author</button>
      <button class="bw-filter" type="button" data-filter="neurovascular">Neurovascular</button>
      <button class="bw-filter" type="button" data-filter="methods">Methods</button>
    </div>
  </div>

  <section class="bw-pub-list">
    <article class="bw-pub-card" data-tags="review neurovascular">
      <div class="bw-year">2025</div>
      <div>
        <h3>Central Cytometabolic Functional Vascular Coupling in Health and Disease</h3>
        <p class="bw-authors">Sims, S. L., Lu, T.-H., <strong>Weiss, B. E.</strong>, Lin, R.-L., Galopin, L. B., Wright, N. A., Norris, C. M., &amp; Thibault, O.</p>
        <p class="bw-citation-line"><em>Metabolic Health and Disease</em>. 2025.</p>
      </div>
    </article>

    <article class="bw-pub-card" data-tags="neurovascular">
      <div class="bw-year">2025</div>
      <div>
        <h3>Astrovascular Decoupling in Awake 5×FAD Mice Is Associated with Reduced Astrocytic Calcium</h3>
        <p class="bw-authors">Lin, R.-L., Sims, S. L., Wright, N. A., Galopin, L. B., <strong>Weiss, B. E.</strong>, Kraner, S. D., Rhinehart, J. E., Lu, T.-H., Sompol, P., Norris, C. M., &amp; Thibault, O.</p>
        <p class="bw-citation-line"><em>Alzheimer’s &amp; Dementia</em>, 21(8), e70564. DOI: 10.1002/alz.70564.</p>
        <div class="bw-pub-links">
          <a class="bw-small-link" href="https://doi.org/10.1002/alz.70564">DOI</a>
          <a class="bw-small-link" href="https://pubmed.ncbi.nlm.nih.gov/40799120/">PubMed</a>
        </div>
      </div>
    </article>

    <article class="bw-pub-card" data-tags="first neurovascular methods">
      <div class="bw-year">2025</div>
      <div>
        <h3>Disrupted Calcium Dynamics in Reactive Astrocytes Occur with Endfeet-Arteriole Decoupling in an Amyloid Mouse Model of Alzheimer’s Disease</h3>
        <p class="bw-authors"><strong>Weiss, B. E.</strong>, Gant, J. C., Lin, R.-L., Gollihue, J. L., Rogers, C. B., Kraner, S. D., Rucker, E. B., Katsumata, Y., Jiang, Y., Nelson, P. T., Wilcock, D. M., Sompol, P., Thibault, O., &amp; Norris, C. M.</p>
        <p class="bw-citation-line"><em>The Journal of Neuroscience</em>, 45(40), e0349252025. Cover Article. DOI: 10.1523/JNEUROSCI.0349-25.2025.</p>
        <div class="bw-pub-links">
          <a class="bw-small-link" href="https://doi.org/10.1523/JNEUROSCI.0349-25.2025">DOI</a>
          <a class="bw-small-link" href="https://pubmed.ncbi.nlm.nih.gov/40816764/">PubMed</a>
        </div>
      </div>
    </article>

    <article class="bw-pub-card" data-tags="methods neurovascular">
      <div class="bw-year">2025</div>
      <div>
        <h3>Magnetic Resonance Imaging Cerebral Blood Perfusion Measurement in Awake Mice</h3>
        <p class="bw-authors">Bahrani, A. A., Dundon, S. R., Gao, T., Gant, C. J., Kimseng, R., Gollihue, J. L., Rogers, C. B., <strong>Weiss, B. E.</strong>, Sompol, P., Powel, D. K., &amp; Norris, C. M.</p>
        <p class="bw-citation-line"><em>Journal of Neuroscience Methods</em>, 422, 110525. DOI: 10.1016/j.jneumeth.2025.110525.</p>
        <div class="bw-pub-links">
          <a class="bw-small-link" href="https://doi.org/10.1016/j.jneumeth.2025.110525">DOI</a>
        </div>
      </div>
    </article>

    <article class="bw-pub-card" data-tags="first">
      <div class="bw-year">2024</div>
      <div>
        <h3>Elevated Calcineurin Activity in Primary Astrocytes Leads to the Dephosphorylation of Connexin 43 in Conjunction with Increased Membrane Permeability</h3>
        <p class="bw-authors"><strong>Weiss, B. E.</strong>, Kraner, S. D., Artiushin, I. A., &amp; Norris, C. M.</p>
        <p class="bw-citation-line"><em>NeuroReport</em>, 35(10), 673–678. DOI: 10.1097/WNR.0000000000002051.</p>
        <div class="bw-pub-links">
          <a class="bw-small-link" href="https://doi.org/10.1097/WNR.0000000000002051">DOI</a>
          <a class="bw-small-link" href="https://pubmed.ncbi.nlm.nih.gov/38813906/">PubMed</a>
        </div>
      </div>
    </article>

    <article class="bw-pub-card" data-tags="neurovascular">
      <div class="bw-year">2023</div>
      <div>
        <h3>Targeting Astrocyte Signaling Alleviates Cerebrovascular and Synaptic Function Deficits in a Diet-Based Mouse Model of Small Cerebral Vessel Disease</h3>
        <p class="bw-authors">Sompol, P., Gollihue, J. L., <strong>Weiss, B. E.</strong>, Lin, R.-L., Case, S. L., Kraner, S. D., Weekman, E. M., Gant, J. C., Rogers, C. B., Niedowicz, D. M., Sudduth, T. L., Powell, D. K., Lin, A.-L., Nelson, P. T., Thibault, O., Wilcock, D. M., &amp; Norris, C. M.</p>
        <p class="bw-citation-line"><em>The Journal of Neuroscience</em>, 43(10), 1797–1813. DOI: 10.1523/JNEUROSCI.1333-22.2023.</p>
        <div class="bw-pub-links">
          <a class="bw-small-link" href="https://doi.org/10.1523/JNEUROSCI.1333-22.2023">DOI</a>
          <a class="bw-small-link" href="https://pubmed.ncbi.nlm.nih.gov/36746627/">PubMed</a>
        </div>
      </div>
    </article>

    <article class="bw-pub-card" data-tags="">
      <div class="bw-year">2023</div>
      <div>
        <h3>Soluble TNF Mediates Amyloid-Independent, Diet-Induced Alterations to Immune and Neuronal Functions in an Alzheimer’s Disease Mouse Model</h3>
        <p class="bw-authors">MacPherson, K. P., Eidson, L. N., Houser, M. C., <strong>Weiss, B. E.</strong>, Gollihue, J. L., Herrick, M. K., de Sousa Rodrigues, M. E., Sniffen, L., Weekman, E. M., Hamilton, A. M., Kelly, S. D., Oliver, D. L., Yang, Y., Chang, J., Sampson, T. R., Norris, C. M., &amp; Tansey, M. G.</p>
        <p class="bw-citation-line"><em>Frontiers in Cellular Neuroscience</em>, 17. DOI: 10.3389/fncel.2023.895017.</p>
        <div class="bw-pub-links">
          <a class="bw-small-link" href="https://doi.org/10.3389/fncel.2023.895017">DOI</a>
        </div>
      </div>
    </article>

    <article class="bw-pub-card" data-tags="">
      <div class="bw-year">2019</div>
      <div>
        <h3>Tau Drives Translational Selectivity by Interacting with Ribosomal Proteins</h3>
        <p class="bw-authors">Koren, S. A., Hamm, M. J., Meier, S. E., <strong>Weiss, B. E.</strong>, Nation, G. K., Chishti, E. A., Arango, J. P., Chen, J., Zhu, H., Blalock, E. M., &amp; Abisambra, J. F.</p>
        <p class="bw-citation-line"><em>Acta Neuropathologica</em>, 137(4), 571–583. DOI: 10.1007/s00401-019-01970-9.</p>
        <div class="bw-pub-links">
          <a class="bw-small-link" href="https://doi.org/10.1007/s00401-019-01970-9">DOI</a>
        </div>
      </div>
    </article>

    <article class="bw-pub-card" data-tags="">
      <div class="bw-year">2018</div>
      <div>
        <h3>Male-Specific Epistasis between WWC1 and TLN2 Genes Is Associated with Alzheimer’s Disease</h3>
        <p class="bw-authors">Gusareva, E. S., Twizere, J.-C., Sleegers, K., Dourlen, P., Abisambra, J. F., Meier, S., Cloyd, R., <strong>Weiss, B.</strong>, Dermaut, B., Bessonov, K., van der Lee, S. J., Carrasquillo, M. M., Katsumata, Y., Cherkaoui, M., Asselbergh, B., Ikram, M. A., Mayeux, R., Farrer, L. A., Haines, J. L., Pericak-Vance, M. A., Schellenberg, G. D., Sims, R., Williams, J., Amouyel, P., van Duijn, C. M., Ertekin-Taner, N., Van Broeckhoven, C., Dequiedt, F., Fardo, D. W., Lambert, J.-C., &amp; Van Steen, K.</p>
        <p class="bw-citation-line"><em>Neurobiology of Aging</em>, 72, 188.e3–188.e12. DOI: 10.1016/j.neurobiolaging.2018.08.001.</p>
        <div class="bw-pub-links">
          <a class="bw-small-link" href="https://doi.org/10.1016/j.neurobiolaging.2018.08.001">DOI</a>
        </div>
      </div>
    </article>

    <article class="bw-pub-card" data-tags="methods">
      <div class="bw-year">2017</div>
      <div>
        <h3>Identification of Changes in Neuronal Function as a Consequence of Aging and Tauopathic Neurodegeneration Using a Novel and Sensitive Magnetic Resonance Imaging Approach</h3>
        <p class="bw-authors">Fontaine, S. N., Ingram, A., Cloyd, R. A., Meier, S. E., Miller, E., Lyons, D., Nation, G. K., Mechas, E., <strong>Weiss, B.</strong>, Lanzillotta, C., Di Domenico, F., Schmitt, F., Powell, D. K., Vandsburger, M., &amp; Abisambra, J. F.</p>
        <p class="bw-citation-line"><em>Neurobiology of Aging</em>, 56, 78–86. DOI: 10.1016/j.neurobiolaging.2017.04.007.</p>
        <div class="bw-pub-links">
          <a class="bw-small-link" href="https://doi.org/10.1016/j.neurobiolaging.2017.04.007">DOI</a>
          <a class="bw-small-link" href="https://pubmed.ncbi.nlm.nih.gov/28552177/">PubMed</a>
        </div>
      </div>
    </article>
  </section>

  <p class="bw-note">

  </p>
</div>

<script>
(function() {
  const buttons = document.querySelectorAll('.bw-filter');
  const cards = document.querySelectorAll('.bw-pub-card');

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const filter = button.getAttribute('data-filter');

      buttons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');

      cards.forEach(card => {
        const tags = card.getAttribute('data-tags') || '';
        const show = filter === 'all' || tags.split(' ').includes(filter);
        card.style.display = show ? 'grid' : 'none';
      });
    });
  });
})();
</script>
