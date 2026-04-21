"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { MapPin, Phone, Mail } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema, ContactFormData } from "@/lib/validators";
import { toast } from "sonner";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json", 
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.details || "Failed to send message");
      }

      toast.success("Message sent successfully! We'll get back to you soon.");
      reset();
    } catch (error) {
      console.error("Contact form error:", error);
      toast.error(
        error instanceof Error
          ? error.message
          : "Failed to send message. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-dark section-padding">
      <div className="container mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-label mb-4 block">Contact Us</span>
          <h2 className="heading-section text-dark-foreground">
            Get In <span className="text-primary">Touch.</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <p className="text-dark-foreground/70 leading-relaxed mb-10">
              Call us today and schedule a security risk assessment of your
              property, organisation, or business. Your security is our
              priority.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-heading font-bold uppercase tracking-wide text-dark-foreground mb-1">
                    Our Office
                  </h4>
                  <p className="text-dark-foreground/60 text-sm">
                    Suite B13, AlphaCell Plaza, Ebitu Ukiwe Street, Jabi, Abuja.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-heading font-bold uppercase tracking-wide text-dark-foreground mb-1">
                    Phone
                  </h4>
                  <p className="text-dark-foreground/60 text-sm">
                    +234 (0) 9048145684
                    <br />
                    +234 (0) 9036136422
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-heading font-bold uppercase tracking-wide text-dark-foreground mb-1">
                    Email
                  </h4>
                  <p className="text-dark-foreground/60 text-sm">
                    defcon4.alliance@gmail.com
                    <br />
                    ni.find4a@gmail.com
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-6"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <input
                  {...register("name")}
                  type="text"
                  placeholder="Your Name"
                  className={`w-full bg-dark-muted border px-4 py-3 text-dark-foreground placeholder:text-dark-foreground/40 font-body text-sm focus:border-primary focus:outline-none transition-colors ${
                    errors.name ? "border-red-500" : "border-dark-border"
                  }`}
                />
                {errors.name && (
                  <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>
                )}
              </div>
              <div>
                <input
                  {...register("email")}
                  type="email"
                  placeholder="Your Email"
                  className={`w-full bg-dark-muted border px-4 py-3 text-dark-foreground placeholder:text-dark-foreground/40 font-body text-sm focus:border-primary focus:outline-none transition-colors ${
                    errors.email ? "border-red-500" : "border-dark-border"
                  }`}
                />
                {errors.email && (
                  <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
                )}
              </div>
            </div>
            <div>
              <input
                {...register("subject")}
                type="text"
                placeholder="Subject"
                className={`w-full bg-dark-muted border px-4 py-3 text-dark-foreground placeholder:text-dark-foreground/40 font-body text-sm focus:border-primary focus:outline-none transition-colors ${
                  errors.subject ? "border-red-500" : "border-dark-border"
                }`}
              />
              {errors.subject && (
                <p className="text-red-500 text-xs mt-1">{errors.subject.message}</p>
              )}
            </div>
            <div>
              <textarea
                {...register("message")}
                rows={5}
                placeholder="Your Message"
                className={`w-full bg-dark-muted border px-4 py-3 text-dark-foreground placeholder:text-dark-foreground/40 font-body text-sm focus:border-primary focus:outline-none transition-colors resize-none ${
                  errors.message ? "border-red-500" : "border-dark-border"
                }`}
              />
              {errors.message && (
                <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>
              )}
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-primary text-primary-foreground px-10 py-4 font-heading font-bold uppercase text-sm tracking-wider hover:bg-primary/90 transition-colors w-full md:w-auto disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
