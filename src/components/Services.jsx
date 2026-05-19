import {
  Monitor,
  ShoppingCart,
  Search,
  Megaphone,
  Palette,
  ShieldCheck,
} from "lucide-react";

function Services() {
  const services = [
    {
      icon: <Monitor size={30} />,
      title: "Web Development",
      desc: "Website moderne dhe profesionale të ndërtuara me teknologji moderne për performancë maksimale.",
      points: ["React & Next.js", "SEO Optimized", "Mobile First"],
    },
    {
      icon: <Megaphone size={30} />,
      title: "Social Media Ads",
      desc: "Menaxhim reklamash profesionale për Instagram dhe Facebook për më shumë klientë.",
      points: ["Instagram Ads", "Facebook Campaigns", "Audience Targeting"],
    },
    {
      icon: <Palette size={30} />,
      title: "UI/UX Design",
      desc: "Dizajn modern dhe eksperiencë premium për përdoruesit e website-it tuaj.",
      points: ["User Experience", "Wireframes", "Premium Interface"],
    },
    {
      icon: <Search size={30} />,
      title: "SEO Optimization",
      desc: "Optimizim profesional për Google dhe shpejtësi të lartë të faqes.",
      points: ["Core Web Vitals", "Speed Optimization", "Google Ranking"],
    },
    {
      icon: <ShoppingCart size={30} />,
      title: "E-Commerce",
      desc: "Dyqane online moderne me pagesa online dhe menaxhim produktesh.",
      points: ["Payments", "Inventory", "Analytics Dashboard"],
    },
    {
      icon: <ShieldCheck size={30} />,
      title: "Website Maintenance",
      desc: "Siguri, update dhe mirëmbajtje profesionale për website-in tuaj.",
      points: ["Security", "Daily Backups", "Technical Support"],
    },
  ];

  return (
    <section className="services" id="services">
      <div className="container">
        <div className="section-title">
          <h2>Shërbimet Tona</h2>
          <p>Zgjidhje moderne digitale për biznese serioze.</p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              <div className="service-icon">{service.icon}</div>

              <h3>{service.title}</h3>

              <p>{service.desc}</p>

              <ul className="service-points">
                {service.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;