import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const timeline = [
  {
    year: "2022",
    title: "Started Coding Journey",
    description: "Began learning HTML, CSS, and JavaScript. Built first static websites.",
    icon: "🚀",
  },
  {
    year: "2023",
    title: "Discovered Video Editing",
    description: "Started with Filmora, quickly moved to Premiere Pro and After Effects.",
    icon: "🎬",
  },
  {
    year: "2023",
    title: "Frontend Development",
    description: "Learned React and Tailwind CSS. Built interactive web applications.",
    icon: "⚛️",
  },
  {
    year: "2024",
    title: "Full-Stack Exploration",
    description: "Dove into Node.js, Express, MongoDB, and SQL for backend development.",
    icon: "🗄️",
  },
  {
    year: "2025",
    title: "Creative Developer",
    description: "Merging code and creativity — building immersive digital experiences.",
    icon: "✨",
  },
];

const JourneySection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="journey" className="py-32 relative" ref={ref}>
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-secondary/3 rounded-full blur-[200px]" />

      <div className="container mx-auto px-6 max-w-4xl relative">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="text-primary font-mono text-sm mb-3 tracking-widest uppercase">Timeline</p>
          <h2 className="text-4xl md:text-5xl font-bold font-heading">
            My <span className="text-gradient">Journey</span>
          </h2>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <motion.div
            initial={{ scaleY: 0 }}
            animate={inView ? { scaleY: 1 } : {}}
            transition={{ duration: 1.5, ease: [0.76, 0, 0.24, 1] }}
            className="absolute left-8 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary via-secondary to-accent origin-top"
          />

          {timeline.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50, x: i % 2 === 0 ? -30 : 30 }}
              animate={inView ? { opacity: 1, y: 0, x: 0 } : {}}
              transition={{ delay: i * 0.2, duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
              className={`relative flex items-start mb-12 ${
                i % 2 === 0
                  ? "md:flex-row md:text-right"
                  : "md:flex-row-reverse md:text-left"
              }`}
            >
              {/* Dot */}
              <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary glow-blue z-10" />

              {/* Content */}
              <div className={`ml-16 md:ml-0 md:w-1/2 ${i % 2 === 0 ? "md:pr-16" : "md:pl-16"}`}>
                <div className="glass rounded-xl p-6 neon-border hover-glow">
                  <div className="flex items-center gap-3 mb-2" style={{ flexDirection: i % 2 === 0 ? "row-reverse" : "row" }}>
                    <span className="text-2xl">{item.icon}</span>
                    <span className="text-xs font-mono text-primary">{item.year}</span>
                  </div>
                  <h3 className="text-lg font-bold font-heading mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JourneySection;
