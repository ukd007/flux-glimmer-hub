import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-32 relative">
      <div className="container mx-auto px-6 max-w-5xl" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="grid md:grid-cols-2 gap-16 items-center"
        >
          {/* Left - Visual */}
          <div className="relative">
            <div className="aspect-square rounded-2xl glass neon-border overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-8xl font-bold font-heading text-gradient opacity-20">UD</div>
              </div>
              {/* Floating decorative elements */}
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-8 right-8 w-12 h-12 rounded-lg glass flex items-center justify-center text-primary text-lg"
              >
                {"</>"}
              </motion.div>
              <motion.div
                animate={{ y: [0, 15, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-8 left-8 w-12 h-12 rounded-lg glass flex items-center justify-center text-secondary text-lg"
              >
                🎬
              </motion.div>
            </div>
          </div>

          {/* Right - Text */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-primary font-mono text-sm mb-3 tracking-widest uppercase"
            >
              About Me
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-4xl md:text-5xl font-bold font-heading mb-6"
            >
              Where <span className="text-gradient">Code</span> Meets{" "}
              <span className="text-gradient">Creativity</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-muted-foreground leading-relaxed mb-6"
            >
              I'm Udayendu Das — a creative developer and video editor who thrives at the 
              intersection of technology and art. I build visually stunning web experiences 
              and craft compelling video content that tells stories.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-muted-foreground leading-relaxed"
            >
              From frontend development with React and Tailwind to video editing with 
              Premiere Pro and DaVinci Resolve — I bring ideas to life across digital mediums.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="mt-8 flex gap-6"
            >
              {[
                { label: "Projects", value: "10+" },
                { label: "Videos", value: "50+" },
                { label: "Tech Stack", value: "8+" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-2xl font-bold text-gradient">{stat.value}</div>
                  <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
