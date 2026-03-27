import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "Full-stack shopping experience with React & Node.js",
    tags: ["React", "Node.js", "MongoDB"],
    color: "from-neon-blue/20 to-neon-purple/20",
    accent: "hsl(200 100% 55%)",
  },
  {
    title: "Motion Graphics Reel",
    description: "Cinematic video editing showcase with After Effects",
    tags: ["After Effects", "Premiere Pro", "Motion Design"],
    color: "from-neon-purple/20 to-neon-pink/20",
    accent: "hsl(270 80% 60%)",
  },
  {
    title: "Portfolio Dashboard",
    description: "Interactive analytics dashboard with real-time data",
    tags: ["React", "Tailwind", "Charts"],
    color: "from-neon-cyan/20 to-neon-blue/20",
    accent: "hsl(180 100% 50%)",
  },
  {
    title: "Brand Identity Film",
    description: "Corporate brand video with DaVinci Resolve color grading",
    tags: ["DaVinci Resolve", "Filmora", "Color Grading"],
    color: "from-neon-pink/20 to-neon-purple/20",
    accent: "hsl(320 90% 60%)",
  },
];

const ProjectCard = ({
  project,
  index,
  inView,
}: {
  project: (typeof projects)[0];
  index: number;
  inView: boolean;
}) => {
  const [hovered, setHovered] = useState(false);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 15;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -15;
    setTilt({ x, y });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.15, duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => {
        setHovered(false);
        setTilt({ x: 0, y: 0 });
      }}
      onMouseMove={handleMouseMove}
      style={{
        transform: `perspective(1000px) rotateX(${tilt.y}deg) rotateY(${tilt.x}deg)`,
        transition: hovered ? "none" : "transform 0.5s ease",
      }}
      className="group relative glass rounded-2xl overflow-hidden neon-border hover-glow"
    >
      {/* Hover glow effect */}
      {hovered && (
        <div
          className="absolute inset-0 opacity-30 transition-opacity"
          style={{
            background: `radial-gradient(400px circle at ${tilt.x * 10 + 50}% ${-tilt.y * 10 + 50}%, ${project.accent}, transparent)`,
          }}
        />
      )}

      <div className={`h-48 bg-gradient-to-br ${project.color} relative`}>
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            animate={hovered ? { scale: 1.1, rotate: 5 } : { scale: 1, rotate: 0 }}
            className="text-5xl opacity-30"
          >
            {index % 2 === 0 ? "💻" : "🎬"}
          </motion.div>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold font-heading mb-2 group-hover:text-primary transition-colors">
          {project.title}
        </h3>
        <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs font-mono px-3 py-1 rounded-full bg-muted text-muted-foreground"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const ProjectsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-32 relative" ref={ref}>
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="text-primary font-mono text-sm mb-3 tracking-widest uppercase">Work</p>
          <h2 className="text-4xl md:text-5xl font-bold font-heading">
            Featured <span className="text-gradient">Projects</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
