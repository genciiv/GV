function Portfolio() {
  const projects = [
    {
      image: "/projects/project1.png",
      title: "Sekretet e Harresës",
      desc:
        "Platformë turistike dhe kulturore me hartë interaktive dhe galeri moderne.",
      tags: ["Turizëm", "Kulturë", "Interactive Map"],
      link: "https://sekretet-blog.netlify.app/ ",
    },

    {
      image: "/projects/project2.png",
      title: "AI Image Editor",
      desc:
        "Aplikacion modern AI për editim dhe transformim profesional të imazheve.",
      tags: ["AI", "Image Editing", "SaaS"],
      link: "https://ai-image-editor-phi-three.vercel.app/",
    },

    {
      image: "/projects/project3.png",
      title: "WidoLink IT Services",
      desc:
        "Website profesional për kompani IT dhe shërbime teknologjike.",
      tags: ["IT Services", "Business", "Corporate"],
      link: "https://wido-site.vercel.app/",
    },

    {
      image: "/projects/project4.png",
      title: "GPT-3 OpenAI Landing",
      desc:
        "Landing page moderne për inteligjencë artificiale dhe automatizim.",
      tags: ["OpenAI", "AI", "Landing Page"],
      link: "https://genciiv.github.io/gpt-3/",
    },

    {
      image: "/projects/project5.png",
      title: "Engard Studio",
      desc:
        "Agency moderne për Web Design dhe AI Automation me UI premium.",
      tags: ["Agency", "Automation", "Web Design"],
      link: "https://engardit.com/",
    },
  ];

  return (
    <section className="portfolio" id="portfolio">
      <div className="container">
        <div className="section-title">
          <h2>Projektet Tona</h2>

          <p>
            Projekte moderne të zhvilluara për biznese dhe platforma dixhitale.
          </p>
        </div>

        <div className="portfolio-grid">
          {projects.map((project, index) => (
            <div className="portfolio-card premium-card" key={index}>
              <img
                src={project.image}
                alt={project.title}
                className="portfolio-img"
              />

              <div className="portfolio-content">
                <h3>{project.title}</h3>

                <p>{project.desc}</p>

                <div className="portfolio-tags">
                  {project.tags.map((tag, i) => (
                    <span key={i}>{tag}</span>
                  ))}
                </div>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="portfolio-btn"
                >
                  Shiko Projektin
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;