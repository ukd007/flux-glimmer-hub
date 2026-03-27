import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface SkillBarProps {
  name: string;
  level: number;
  color: string;
  delay: number;
  inView: boolean;
}

const SkillBar = ({ name, level, color, delay, inView }: SkillBarProps) => (
  <motion.div
    initial={{ opacity: 0, x: -30 }}
    animate={inView ? { opacity: 1, x: 0 } : {}}
    transition={{ delay, duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
    className="group"
  >
    <div className="flex justify-between items-center mb-2">
      <span className="text-sm font-medium text-foreground">{name}</span>
      <span className="text-xs font-mono text-muted-foreground">{level}%</span>
    </div>
    <div className="h-2 rounded-full bg-muted overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        animate={inView ? { width: `${level}%` } : {}}
        transition={{ delay: delay + 0.3, duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
        className="h-full rounded-full relative"
        style={{ background: color }}
      >
        <div className="absolute inset-0 rounded-full opacity-50 blur-sm" style={{ background: color }} />
      </motion.div>
    </div>
  </motion.div>
);

interface TechCardProps {
  name: string;
  icon: string;
  delay: number;
  inView: boolean;
}

const TechCard = ({ name, icon, delay, inView }: TechCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 30, scale: 0.9 }}
    animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
    transition={{ delay, duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
    whileHover={{ y: -5, scale: 1.05 }}
    className="glass neon-border rounded-xl p-4 flex flex-col items-center gap-2 hover-glow"
  >
    <span className="text-2xl">{icon}</span>
    <span className="text-xs font-medium text-muted-foreground">{name}</span>
  </motion.div>
);

const SkillsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const videoSkills = [
    { name: "Premiere Pro", level: 55, color: "linear-gradient(90deg, hsl(270 80% 60%), hsl(290 80% 50%))" },
    { name: "After Effects", level: 30, color: "linear-gradient(90deg, hsl(250 80% 60%), hsl(270 80% 50%))" },
    { name: "Filmora", level: 90, color: "linear-gradient(90deg, hsl(180 100% 45%), hsl(200 100% 55%))" },
    { name: "DaVinci Resolve", level: 60, color: "linear-gradient(90deg, hsl(0 80% 55%), hsl(320 80% 55%))" },
  ];

  const codingSkills = [
    { name: "HTML/CSS", level: 75, color: "linear-gradient(90deg, hsl(15 90% 55%), hsl(200 100% 55%))" },
    { name: "JavaScript", level: 55, color: "linear-gradient(90deg, hsl(50 95% 55%), hsl(45 95% 50%))" },
    { name: "React", level: 50, color: "linear-gradient(90deg, hsl(195 100% 50%), hsl(200 100% 60%))" },
    { name: "Tailwind CSS", level: 65, color: "linear-gradient(90deg, hsl(195 80% 50%), hsl(180 80% 45%))" },
    { name: "Node.js", level: 40, color: "linear-gradient(90deg, hsl(120 60% 45%), hsl(140 60% 40%))" },
    { name: "MongoDB", level: 35, color: "linear-gradient(90deg, hsl(120 45% 40%), hsl(140 45% 35%))" },
  ];

  const techStack = [
    { name: "HTML", icon: "🌐" },
    { name: "CSS", icon: "🎨" },
    { name: "JavaScript", icon: "⚡" },
    { name: "React", icon: "⚛️" },
    { name: "Tailwind", icon: "💨" },
    { name: "Node.js", icon: "🟢" },
    { name: "Express", icon: "🚀" },
    { name: "MongoDB", icon: "🍃" },
    { name: "SQL", icon: "🗄️" },
  ];

  return (
    <section id="skills" className="py-32 relative" ref={ref}>
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/3 rounded-full blur-[200px]" />

      <div className="container mx-auto px-6 max-w-6xl relative">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="text-primary font-mono text-sm mb-3 tracking-widest uppercase">Skills</p>
          <h2 className="text-4xl md:text-5xl font-bold font-heading">
            My <span className="text-gradient">Arsenal</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Video Editing */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="glass rounded-2xl p-8 neon-border"
          >
            <div className="flex items-center gap-3 mb-8">
              <span className="text-2xl">🎬</span>
              <h3 className="text-xl font-bold font-heading">Video Editing</h3>
            </div>
            <div className="space-y-6">
              {videoSkills.map((skill, i) => (
                <SkillBar key={skill.name} {...skill} delay={i * 0.1} inView={inView} />
              ))}
            </div>
          </motion.div>

          {/* Coding */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="glass rounded-2xl p-8 neon-border"
          >
            <div className="flex items-center gap-3 mb-8">
              <span className="text-2xl">💻</span>
              <h3 className="text-xl font-bold font-heading">Development</h3>
            </div>
            <div className="space-y-6">
              {codingSkills.map((skill, i) => (
                <SkillBar key={skill.name} {...skill} delay={i * 0.1} inView={inView} />
              ))}
            </div>
          </motion.div>
        </div>

        {/* Tech Stack Grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-16"
        >
          <h3 className="text-center text-lg font-heading text-muted-foreground mb-8">Tech Stack</h3>
          <div className="grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-9 gap-4">
            {techStack.map((tech, i) => (
              <TechCard key={tech.name} {...tech} delay={0.6 + i * 0.05} inView={inView} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
