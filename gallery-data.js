// ============================================================
//  GALLERY DATA FILE — only file you ever need to edit!
//
//  HOW TO ADD A NEW IMAGE:
//  1. Upload image to the  images/  folder on GitHub
//  2. Add one line below with:
//       file  → exact filename (must match what you uploaded)
//       title → name on the card
//       desc  → short description
//       tags  → labels
//       tab   → "modelling" | "texturing" | "lighting" | "films" | "concept"
//
//  FOR VIDEOS:
//  { video:"https://www.youtube.com/embed/VIDEO_ID", title:"...", desc:"...", tags:[...], tab:"lighting" },
// ============================================================

const GALLERY = [

  // ── LUCIFER ──────────────────────────────────────────────
  { file:"Lucifer1.png",             title:"Lucifer — Front",              desc:"Stylised full-body character · dramatic silhouette & tuxedo design",       tags:["Character","Full Body","Stylised","Blender"], tab:"modelling" },
  { file:"Lucifer2.png",             title:"Lucifer — Back View",          desc:"Back silhouette showing coat split & heel detail",                         tags:["Character","Cloth","Stylised"],               tab:"modelling" },

  // ── QUEEN CHESS ──────────────────────────────────────────
  { file:"Queen1.png",               title:"Queen Chess — Side",           desc:"Elegant chess queen character · flowing gown & ornate accessories",        tags:["Character","Fantasy","ZBrush"],               tab:"modelling" },
  { file:"Queen2.png",               title:"Queen Chess — Back View",      desc:"Back view showing gown silhouette & hair braid detail",                    tags:["Character","Cloth","ZBrush"],                 tab:"modelling" },

  // ── THOMAS — WARRIOR BIRD ────────────────────────────────
  { file:"Thomas wing spread.png",   title:"Thomas — Wings Spread",        desc:"Warrior bird creature sculpt · full wingspan & sword prop · ZBrush",      tags:["Creature","ZBrush","Props"],                  tab:"modelling" },

  // ── ABSOLUTE BANE ────────────────────────────────────────
  { file:"Bane2.png",                title:"Absolute Bane — Torso Detail", desc:"Close-up of hyper-muscular anatomy & tactical gear",                      tags:["Anatomy","Hard Surface","ZBrush"],            tab:"modelling" },
  { file:"Bane3.png",                title:"Absolute Bane — Full Body",    desc:"Hyper-muscular superhero figure · complete anatomy study",                tags:["Anatomy","Character","ZBrush","Full Body"],   tab:"modelling" },

  // ── POISON IVY BUST ──────────────────────────────────────
  { file:"Ivy5.png",                 title:"Poison Ivy — Bust",            desc:"Character bust · custom tattoo surface etch & dragon arm · ZBrush",       tags:["ZBrush","Organic","Character","Sculpting"],   tab:"modelling" },

  // ── LAPRAS ───────────────────────────────────────────────
  { file:"Lapras3.png",              title:"Lapras — Front",               desc:"Fan-art creature sculpt · stylised anatomy & shell detail",               tags:["Creature","Stylised","ZBrush"],               tab:"modelling" },
  { file:"Lapras4.png",              title:"Lapras — Side",                desc:"Side silhouette read & spiked shell geometry",                            tags:["Creature","Hard Surface"],                    tab:"modelling" },

  // ── SALVIA ───────────────────────────────────────────────
  { file:"Salvia.png",               title:"Salvia — Front",               desc:"Stylised chibi character · scalloped dress & detailed curly hair",        tags:["Character","Stylised","Maya","Chibi"],        tab:"modelling" },

  // ── GARDENIA ─────────────────────────────────────────────
  { file:"Gardenia V01.png",         title:"Gardenia V01",                 desc:"Gardenia character variant 1 · braided pigtails & scalloped dress",       tags:["Character","Stylised","Maya","Chibi"],        tab:"modelling" },
  { file:"Gardenia V02.png",         title:"Gardenia V02",                 desc:"Gardenia character variant 2 · twin buns hairstyle",                      tags:["Character","Stylised","Maya","Chibi"],        tab:"modelling" },

  // ── MONSTER TEACHER ──────────────────────────────────────
  { file:"Monster Teacher.png",      title:"Monster Teacher",              desc:"Stylised slim character · shirt, tie, belt & elongated proportions",      tags:["Character","Stylised","Maya"],                tab:"modelling" },


  // ── TEXTURING ────────────────────────────────────────────
  // Add texturing work here:
  // { file:"texture-1.jpg", title:"Skin Texture Study", desc:"Pore-level detail in Substance Painter", tags:["Substance Painter","Skin"], tab:"texturing" },


  // ── LIGHTING — SRI AUROBINDO: A CALL TO NEW INDIA ────────
  // Production lighting & compositing during internship at Studio EEKSAURUS · Blender

  { file:"Screenshot 2025-12-11 004345.png", title:"Aurobindo — City at Dawn",          desc:"Sri Aurobindo: A Call to New India · Internship at Studio EEKSAURUS · Warm golden sunburst breaking over the cityscape · Blender",            tags:["Lighting","Compositing","Production","Blender","Eeksaurus"], tab:"lighting" },
  { file:"Screenshot 2025-12-11 004537.png", title:"Aurobindo — Figure & Light Streak", desc:"Sri Aurobindo: A Call to New India · Stylised figure with animated light ribbon · teal rim lighting & atmosphere · Blender",                  tags:["Lighting","Compositing","Production","Blender","Eeksaurus"], tab:"lighting" },
  { file:"Screenshot 2025-12-11 004626.png", title:"Aurobindo — Divine Radiance",       desc:"Sri Aurobindo: A Call to New India · Central goddess figure radiating golden beams across global landmarks · Blender",                         tags:["Lighting","Compositing","Production","Blender","Eeksaurus"], tab:"lighting" },
  { file:"Screenshot 2025-12-11 004803.png", title:"Aurobindo — Red Mist March",        desc:"Sri Aurobindo: A Call to New India · Volumetric red fog with backlit figures emerging from darkness · Blender",                                tags:["Lighting","Volumetrics","Production","Blender","Eeksaurus"], tab:"lighting" },
  { file:"Screenshot 2025-12-11 004846.png", title:"Aurobindo — Cave & Torchlight",     desc:"Sri Aurobindo: A Call to New India · Warm torch glow cutting through cave darkness · deep red volumetric atmosphere · Blender",               tags:["Lighting","Volumetrics","Production","Blender","Eeksaurus"], tab:"lighting" },
  { file:"Screenshot 2025-12-11 004915.png", title:"Aurobindo — Campfire Scene",        desc:"Sri Aurobindo: A Call to New India · Intimate campfire lighting with warm orange rim on surrounding figures · Blender",                        tags:["Lighting","Compositing","Production","Blender","Eeksaurus"], tab:"lighting" },
  { file:"Screenshot 2025-12-11 004959.png", title:"Aurobindo — Isolation",             desc:"Sri Aurobindo: A Call to New India · Cold blue window light casting a lone silhouette in a dark interior · Blender",                          tags:["Lighting","Mood","Production","Blender","Eeksaurus"],        tab:"lighting" },
  { file:"Screenshot 2025-12-08 194113.png", title:"Aurobindo — Cricket Stadium",       desc:"Sri Aurobindo: A Call to New India · Stadium floodlight haze with warm hero rim light on the batsman · Blender",                              tags:["Lighting","Compositing","Production","Blender","Eeksaurus"], tab:"lighting" },
  { file:"Screenshot 2025-12-08 194327.png", title:"Aurobindo — Lab Discovery",         desc:"Sri Aurobindo: A Call to New India · Purple-gold split lighting on scientists with lens flare effect · Blender",                              tags:["Lighting","Compositing","Production","Blender","Eeksaurus"], tab:"lighting" },
  { file:"Screenshot 2025-12-08 194755.png", title:"Aurobindo — Yoga & Motion",         desc:"Sri Aurobindo: A Call to New India · Warm backlit crowd of figures in motion on a lotus landscape · Blender",                                 tags:["Lighting","Compositing","Production","Blender","Eeksaurus"], tab:"lighting" },
  { file:"Screenshot 2025-12-10 224420.png", title:"Aurobindo — Quill & Knowledge",     desc:"Sri Aurobindo: A Call to New India · Pink-purple glow on a glowing quill writing across ancient parchment · Blender",                        tags:["Lighting","Compositing","Production","Blender","Eeksaurus"], tab:"lighting" },
  { file:"Screenshot 2025-12-11 003855.png", title:"Aurobindo — Eruption",              desc:"Sri Aurobindo: A Call to New India · Intense ember-lit chaos scene with volumetric fire and particle scatter · Blender",                      tags:["Lighting","Volumetrics","Production","Blender","Eeksaurus"], tab:"lighting" },
  { file:"Screenshot 2025-12-11 003955.png", title:"Aurobindo — Torch Procession",      desc:"Sri Aurobindo: A Call to New India · Crowd carrying torches through amber fog · particle sparks & warm rim lighting · Blender",               tags:["Lighting","Volumetrics","Production","Blender","Eeksaurus"], tab:"lighting" },
  { file:"Screenshot 2025-12-11 004148.png", title:"Aurobindo — Sacred Tree",           desc:"Sri Aurobindo: A Call to New India · Red mist environment with an ancient tree silhouette & subtle light streak · Blender",                   tags:["Lighting","Environment","Production","Blender","Eeksaurus"], tab:"lighting" },
  { file:"Screenshot 2025-12-11 004221.png", title:"Aurobindo — Japan Landscape",       desc:"Sri Aurobindo: A Call to New India · Warm hazy Japanese landscape · cherry blossom sparkle & torii gate · Blender",                          tags:["Lighting","Environment","Production","Blender","Eeksaurus"], tab:"lighting" },

  // ── THOMAS — WARRIOR BIRD (LIGHTING) ─────────────────────
  { file:"Divya_Thomas render.png",  title:"Thomas — Full Render",         desc:"Warrior bird Thomas · fully shader-based character · lit & composited entirely in Blender · medieval village environment",                               tags:["Lighting","Shaders","Compositing","Blender","Character"],    tab:"lighting" },

  // ── MORNING RESETS — SHORT FILM ──────────────────────────
  // Lighting, procedural shaders & compositing for ~40 shots · Blender
  { video:"https://www.youtube.com/embed/NwqAJHVRg_g?si=eA8nEMx3vjGgVNyM", title:"Morning Resets — Clip 1",  desc:"Personal short film · Lit & composited ~40 shots solo · procedural shaders for all assets & characters · Blender", tags:["Film","Lighting","Shaders","Compositing","Blender"], tab:"lighting" },
  { video:"https://www.youtube.com/embed/AlurQVwHKAc?si=v8J84rhPY8HEOjJY", title:"Morning Resets — Clip 2",  desc:"Personal short film · Lit & composited ~40 shots solo · procedural shaders for all assets & characters · Blender", tags:["Film","Lighting","Shaders","Compositing","Blender"], tab:"lighting" },
  { video:"https://www.youtube.com/embed/JTYcNHJgLqk?si=hQzTQinEsGkb4D74", title:"Morning Resets — Clip 3",  desc:"Personal short film · Lit & composited ~40 shots solo · procedural shaders for all assets & characters · Blender", tags:["Film","Lighting","Shaders","Compositing","Blender"], tab:"lighting" },
  { video:"https://www.youtube.com/embed/mkl-sYzEm_I?si=MYAgeCXx1ZPOrFSp", title:"Morning Resets — Clip 4",  desc:"Personal short film · Lit & composited ~40 shots solo · procedural shaders for all assets & characters · Blender", tags:["Film","Lighting","Shaders","Compositing","Blender"], tab:"lighting" },

  // ── PIXEL DEER — SHADER STUDY ────────────────────────────
  { video:"https://www.youtube.com/embed/9PyXsaMlpwc?si=jvE5ZODFuWxTJaJx", title:"Pixel Deer — Shader Study 1", desc:"Pixel deer made entirely in Blender using procedural shaders · no textures · pure shader-driven look",           tags:["Shaders","Blender","Procedural","Study"],            tab:"lighting" },
  

  // ── DELTARUNE FANART ──────────────────────────────────────
  { video:"https://www.youtube.com/embed/bDqANNmcFd4?si=EI6gqOIOlkMg_oj8", title:"Deltarune — Fan Scene",       desc:"All characters sculpted, shaders developed & environment built as a rush project in one day · Blender",          tags:["Shaders","Sculpting","Blender","Fanart","Environment"], tab:"lighting" },


  // ── FILMS ────────────────────────────────────────────────
  // Add film stills or embed YouTube videos here:
  // { video:"https://www.youtube.com/embed/YOUR_VIDEO_ID", title:"Anomaly — Showreel", desc:"Best Animation · SIFF 2025", tags:["Film","Showreel"], tab:"films" },


  // ── CONCEPT ART ──────────────────────────────────────────
  // Add concept art & storyboards here:
  // { file:"concept-1.jpg", title:"Character Concept", desc:"Original character design sheet", tags:["Character","Design"], tab:"concept" },

];
