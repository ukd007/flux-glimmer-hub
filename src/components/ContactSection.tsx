import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const ContactSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [focused, setFocused] = useState<string | null>(null);

  return (
    <section id="contact" className="py-32 relative" ref={ref}>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/3 rounded-full blur-[200px]" />

      <div className="container mx-auto px-6 max-w-4xl relative">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="text-primary font-mono text-sm mb-3 tracking-widest uppercase">Contact</p>
          <h2 className="text-4xl md:text-5xl font-bold font-heading">
            Let's <span className="text-gradient">Connect</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="space-y-8"
          >
            <p className="text-muted-foreground leading-relaxed">
              Got a project idea, collaboration, or just want to say hi? 
              I'd love to hear from you. Let's create something amazing together.
            </p>

            <div className="space-y-4">
              <motion.a
                href="tel:7980191108"
                whileHover={{ x: 5 }}
                className="flex items-center gap-4 glass rounded-xl p-4 neon-border hover-glow group"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary/20 transition-colors">
                  📞
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Phone</p>
                  <p className="text-sm font-medium">7980191108</p>
                </div>
              </motion.a>

              <motion.a
                href="mailto:dasudayendu2007@gmail.com"
                whileHover={{ x: 5 }}
                className="flex items-center gap-4 glass rounded-xl p-4 neon-border hover-glow group"
              >
                <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center text-secondary group-hover:bg-secondary/20 transition-colors">
                  ✉️
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Email</p>
                  <p className="text-sm font-medium">dasudayendu2007@gmail.com</p>
                </div>
              </motion.a>
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="glass rounded-2xl p-8 neon-border space-y-6"
            onSubmit={(e) => e.preventDefault()}
          >
            {[
              { name: "name", label: "Name", type: "text" },
              { name: "email", label: "Email", type: "email" },
            ].map((field) => (
              <div key={field.name} className="relative">
                <label
                  className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                    focused === field.name
                      ? "text-xs text-primary -top-2 bg-card px-2"
                      : "text-sm text-muted-foreground top-3"
                  }`}
                >
                  {field.label}
                </label>
                <input
                  type={field.type}
                  onFocus={() => setFocused(field.name)}
                  onBlur={(e) => !e.target.value && setFocused(null)}
                  className="w-full bg-muted/50 border border-border rounded-lg px-4 py-3 text-sm text-foreground outline-none focus:border-primary transition-colors"
                />
              </div>
            ))}

            <div className="relative">
              <label
                className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                  focused === "message"
                    ? "text-xs text-primary -top-2 bg-card px-2"
                    : "text-sm text-muted-foreground top-3"
                }`}
              >
                Message
              </label>
              <textarea
                rows={4}
                onFocus={() => setFocused("message")}
                onBlur={(e) => !e.target.value && setFocused(null)}
                className="w-full bg-muted/50 border border-border rounded-lg px-4 py-3 text-sm text-foreground outline-none focus:border-primary transition-colors resize-none"
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full py-3 rounded-lg bg-primary text-primary-foreground font-medium text-sm hover:shadow-lg hover:shadow-primary/25 transition-shadow"
            >
              Send Message
            </motion.button>
          </motion.form>
        </div>
      </div>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ delay: 0.8 }}
        className="container mx-auto px-6 mt-32 pt-8 border-t border-border"
      >
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>© 2025 Udayendu Das. All rights reserved.</p>
          <p className="font-mono text-xs">Built with passion & code</p>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactSection;
