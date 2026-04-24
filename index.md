---
layout: home
title: Awake Fluorescence Imaging
subtitle: Computational tools for intravital brain imaging, vascular dynamics, and astrocyte signaling
cover-img: "/assets/img/TESTsupp1.gif"
---

<style>
.hero-panel {
  background: linear-gradient(135deg, rgba(5,10,20,0.92), rgba(20,35,55,0.82));
  color: white;
  padding: 2.5rem;
  border-radius: 24px;
  margin: 2rem 0;
  box-shadow: 0 18px 45px rgba(0,0,0,0.25);
}

.hero-panel h1 {
  font-size: 2.4rem;
  margin-bottom: 0.5rem;
}

.hero-panel p {
  font-size: 1.08rem;
  line-height: 1.65;
}

.badge-row {
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
  margin-top: 1.2rem;
}

.badge {
  background: rgba(255,255,255,0.14);
  border: 1px solid rgba(255,255,255,0.25);
  padding: 0.45rem 0.75rem;
  border-radius: 999px;
  font-size: 0.9rem;
}

.feature-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px,1fr));
  gap: 1.2rem;
  margin: 2rem 0;
}

.feature-card {
  background: #ffffff;
  border-radius: 20px;
  padding: 1.4rem;
  box-shadow: 0 10px 30px rgba(0,0,0,0.08);
  border: 1px solid #eeeeee;
}

.feature-card h3 {
  margin-top: 0;
}

.split-section {
  display: grid;
  grid-template-columns: minmax(0,1.2fr) minmax(260px,0.8fr);
  gap: 2rem;
  align-items: center;
  margin: 3rem 0;
}

.side-image {
  width: 100%;
  border-radius: 22px;
  box-shadow: 0 14px 38px rgba(0,0,0,0.18);
}

.banner {
  background: linear-gradient(90deg, #111827, #374151);
  color: white;
  padding: 1.7rem;
  border-radius: 20px;
  margin: 2.5rem 0 1.5rem 0;
}

.project-card {
  border-left: 5px solid #c2410c;
  background: #fff7ed;
  padding: 1.4rem;
  border-radius: 16px;
  margin: 1rem 0;
}

.metric-row {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px,1fr));
  gap: 1rem;
  margin: 2rem 0;
}

.metric {
  text-align: center;
  padding: 1.2rem;
  border-radius: 18px;
  background: #f8fafc;
  border: 1px solid #e5e7eb;
}

.metric strong {
  display: block;
  font-size: 1.8rem;
}

.cta-box {
  text-align: center;
  padding: 2rem;
  background: #0f172a;
  color: white;
  border-radius: 24px;
  margin: 3rem 0;
}

.cta-box a {
  color: #93c5fd;
  font-weight: 700;
}

@media (max-width: 800px) {
  .split-section {
    grid-template-columns: 1fr;
  }
}
</style>
---
<div class="hero-panel">

# Hello, I’m Blaine Weiss.

I am a graduate student at the University of Kentucky and a researcher at the Sanders-Brown Center on Aging. My work focuses on **awake intravital fluorescence microscopy**, **mouse models of dementia**, **astrocyte calcium signaling**, **vascular dynamics**, and the development of computational tools for extracting biological meaning from complex imaging datasets.

My goal is to build analysis systems that make difficult brain imaging experiments more quantitative, reproducible, and visually interpretable.

<div class="badge-row">
  <span class="badge">Awake two-photon microscopy</span>
  <span class="badge">Astrocyte Ca²⁺ signaling</span>
  <span class="badge">Neurovascular coupling</span>
  <span class="badge">Field electrophysiology</span>
  <span class="badge">Image analysis software</span>
  <span class="badge">STONE-LAVA</span>
</div>

</div>

<div class="metric-row">
  <div class="metric">
    <strong>8+</strong>
    Publications
  </div>
  <div class="metric">
    <strong>20+</strong>
    Posters & presentations
  </div>
  <div class="metric">
    <strong>2017</strong>
    Sanders-Brown affiliation
  </div>
  <div class="metric">
    <strong>In-Vivo</strong>
    Awake brain imaging
  </div>
</div>
---

## Research Focus

<div class="split-section">

<div>

My research centers on understanding how cellular activity and cerebrovascular dynamics interact in the living brain, particularly in the context of dementia and Alzheimer’s disease-related pathology.

Using awake intravital microscopy, I study activity patterns across astrocyte somata, processes, and perivascular endfeet while simultaneously examining vascular responses such as dilation and constriction. These datasets are rich, dynamic, and difficult to analyze with conventional tools, which led me to build custom software for event detection, segmentation, synchronization analysis, and vascular-cell coupling.

</div>

<div>

<img class="side-image" src="/assets/img/PLACEHOLDER_MICROSCOPY_GIF.gif" alt="Awake fluorescence microscopy example">

</div>

</div>


<div class="banner">

## Featured Platform: STONE-LAVA

A computational framework for spatial and temporal analysis of brain activity, vascular behavior, and multimodal fluorescence imaging datasets.

</div>

<div class="project-card">

### STONE  
**Spatial & Temporal Observation of Network Events**

STONE is designed for functional imaging analysis of cellular activity. It includes tools for activity-based cell detection, filtering, event detection, waveform extraction, and network-level synchrony analysis.

Core capabilities include:

- Activity-informed ROI detection  
- Subcellular signal extraction  
- Calcium event detection  
- Network synchrony and correlation analysis  
- Export workflows for reproducible downstream analysis  

</div>

<div class="project-card">

### LAVA  
**Localized Analysis of Vascular Astrocytes**

LAVA was developed to compare stimulation-induced vascular motion with local perivascular cellular signaling. It was named for its original use case: measuring astrocyte endfoot activity around cerebral arterioles.

Core capabilities include:

- Vessel-associated ROI analysis  
- Perivascular astrocyte/endfoot signal quantification  
- Dilation and constriction tracking  
- Event-locked vascular-cell comparisons  
- Multimodal image/signal integration  

</div>

<div class="split-section">

<div>

## Why this matters

Awake fluorescence imaging produces data that are spatially complex, temporally dynamic, and biologically heterogeneous. Manual analysis is often slow, subjective, and difficult to reproduce.

My computational work aims to bridge this gap by creating tools that can:

- Detect biologically meaningful activity patterns  
- Compare cellular signaling with vascular behavior  
- Quantify network-level dynamics  
- Preserve metadata and analysis provenance  
- Generate figure-ready outputs for publication and collaboration  

</div>

<div>

<img class="side-image" src="/assets/img/PLACEHOLDER_STONE_LAVA_SCREENSHOT.png" alt="STONE-LAVA software screenshot">

</div>

</div>


## Research Themes

<div class="feature-grid">

<div class="feature-card">

### Awake Intravital Microscopy

Imaging brain activity in awake mouse models to capture cellular and vascular dynamics under more physiologically relevant conditions.

</div>

<div class="feature-card">

### Astrocyte-Vascular Coupling

Quantifying how astrocyte compartments, especially perivascular endfeet, relate to nearby arteriole motion and stimulation-induced vascular responses.

</div>

<div class="feature-card">

### Dementia Models

Applying advanced imaging and analysis tools to mouse models relevant to Alzheimer’s disease and neurodegenerative pathology.

</div>

<div class="feature-card">

### Functional Signal Analysis

Developing pipelines for fluorescence signal processing, event detection, filtering, synchronization, and network-level activity mapping.

</div>

<div class="feature-card">

### Software Development

Building MATLAB-based tools that streamline complex imaging analyses and improve reproducibility across experiments.

</div>

<div class="feature-card">

### Data Visualization

Creating visual and quantitative summaries of cellular activity, vascular motion, network structure, and compartment-specific signaling.

</div>

</div>



## Publications & Scientific Output

My work includes peer-reviewed publications, conference presentations, poster awards, and computational tools related to neurodegeneration, brain imaging, and functional analysis.

<div class="feature-grid">

<div class="feature-card">

### Publications

Add selected first-author and co-author publications here.

Example format:

**Weiss et al.** Title of publication. *Journal Name*. Year.

[Google Scholar](#) · [PubMed](#)

</div>

<div class="feature-card">

### Posters & Presentations

Add selected conference posters, talks, and scientific presentations here.

Suggested highlights:

- Markesbery Symposium  
- AAIC  
- Neuroscience meetings  
- University research events  

</div>

<div class="feature-card">

### Recognition

Add awards, fellowships, cover art, poster awards, or invited presentation highlights here.

Suggested entries:

- Journal cover art  
- Outstanding poster awards  
- Conference fellowships  

</div>

</div>



## Featured Visuals

Use this section to showcase microscopy videos, vascular motion overlays, ROI maps, software screenshots, or figure panels.

<div class="feature-grid">

<div class="feature-card">
<img class="side-image" src="/assets/img/PLACEHOLDER_FIGURE_1.gif" alt="Microscopy movie placeholder">

### Awake Imaging Movie

Short description of what this movie shows.

</div>

<div class="feature-card">
<img class="side-image" src="/assets/img/PLACEHOLDER_FIGURE_2.png" alt="ROI analysis placeholder">

### Activity Detection

Short description of segmentation, ROI detection, or calcium activity extraction.

</div>

<div class="feature-card">
<img class="side-image" src="/assets/img/PLACEHOLDER_FIGURE_3.png" alt="Vascular analysis placeholder">

### Vascular-Cell Coupling

Short description of arteriole motion and perivascular astrocyte signaling.

</div>

</div>



## Current Development

## STONE-LAVA Under Construction

STONE-LAVA is currently being developed as a unified analysis environment for multimodal fluorescence imaging datasets. Planned and ongoing features include:

- Improved event detection workflows  
- Metadata-aware export formats  
- Multichannel imaging compatibility  
- Vascular-cell coupling modules  
- Reproducible analysis outputs  
- Publication-ready visualization tools  

Follow the project here:

[GitHub Repository](https://github.com/BlaineWeiss/STONE-LAVA)



<div class="cta-box">

## Interested in collaboration?

I am interested in projects involving awake brain imaging, astrocyte biology, neurovascular coupling, Alzheimer’s disease models, image analysis, and computational tool development.

[View my CV](#) · [GitHub](https://github.com/BlaineWeiss) · [Google Scholar](#) · [Contact](mailto:YOUR_EMAIL_HERE)

</div>
