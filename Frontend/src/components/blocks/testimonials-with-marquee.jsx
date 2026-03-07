import { cn } from "@/lib/utils"
import { TestimonialCard } from "@/components/ui/testimonial-card";
import './marquee.css'
import ScrollReveal from "../ui/ScrollReveal";

export function TestimonialsSection({
  title,
  description,
  testimonials,
  className
}) {
  return (
    <section
      className={cn("bg-background text-foreground", "py-8 sm:py-12 md:py-16 px-0", className)}>
      <div
        className="mx-auto flex max-w-container flex-col items-center gap-4 text-center sm:gap-8">
        <div className="flex flex-col items-center gap-0 px-4 sm:gap-0">
          <ScrollReveal
            baseOpacity={0.1}
            // enableBlur
            baseRotation={10}
            blurStrength={4}
            containerClassName="max-w-[720px]"
          >{title}</ScrollReveal>
          <p
            className="text-md max-w-[600px] font-medium text-muted-foreground sm:text-xl">
            {description}
          </p>
        </div>

        <div
          className="relative flex w-full flex-col items-center justify-center overflow-hidden">
          <div
            className="group flex overflow-hidden p-2 [--gap:1rem] [gap:var(--gap)] flex-row [--duration:240s]">
            <div
              className="flex shrink-0 justify-around [gap:var(--gap)] animate-marquee flex-row group-hover:[animation-play-state:paused]">
              {[...Array(4)].map((_, setIndex) => (
                testimonials.map((testimonial, i) => (
                  <TestimonialCard key={`${setIndex}-${i}`} {...testimonial} />
                ))
              ))}
            </div>
          </div>

          <div
            className="pointer-events-none absolute inset-y-0 left-0 hidden w-1/3 bg-gradient-to-r from-background sm:block" />
          <div
            className="pointer-events-none absolute inset-y-0 right-0 hidden w-1/3 bg-gradient-to-l from-background sm:block" />
        </div>
      </div>
    </section>
  );
}