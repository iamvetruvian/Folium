import './testimonials.css'
import SpotlightCard from '../ui/SpotlightCard';
import SplitText from '../ui/SplitText';
export default function Testimonials() {
    const testimonials = [
        { id: 1, text: "If you're using Tailwind CSS, PrebuiltUI is a must have. It dramatically speeds up development while keeping the UI clean and modern.", name: "Alex Morgan", role: "Founder - Lumens", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200" },
        { id: 2, text: "PrebuiltUI has completely changed how I build interfaces. Most recommended components and templates.", name: "Sarah Collins", role: "Tech Lead - You Inc.", image: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200" },
        { id: 3, text: "PrebuiltUI templates are the most useful product for UI engineers. Saving me hours on every saas project.", name: "Emily Carter", role: "UI Engineer - Meta", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200" },
        { id: 4, text: "PrebuiltUI allows me to focus on building features instead of writing CSS. Everything looks premium right out of the box.", name: "Ryan Collins", role: "Co-founder - Unique", image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200" }
    ];

    return (
        <>
            <style>
                {`
                    @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap');

                    * {
                        font-family: 'Plus Jakarta Sans', sans-serif;
                    }
                `}
            </style>

            <section className="py-16 px-4 md:px-8 flex items-center justify-center">
                <div className="max-w-6xl w-full">
                    <div className="mb-12">
                        {/* <SplitText
                            text="Loved by Students and Professionals"
                            delay={15}
                            className="text-6xl font-extrabold text-white text-center md:text-start mb-4"
                        /> */}
                        <h3 style={{ textAlign: 'center' }} className="text-6xl font-extrabold text-white text-center md:text-start mb-4">Loved by Students and Professionals</h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {testimonials.map((testimonial, index) => (
                            <SpotlightCard
                                key={testimonial.id}
                                spotlightColor="#e947f57b"
                                className={`border border-neutral-800 transition-colors custom-spotlight-card 
                                    ${index === 0 ? 'md:col-span-2' :
                                        index === 1 ? 'md:col-span-1' :
                                            index === 2 ? 'md:col-span-1' :
                                                'md:col-span-2'
                                    }`}
                            >
                                <div className="flex mb-4">
                                    {Array(5).fill(0).map((_, i) => (
                                        <svg key={i} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-star text-transparent fill-[#FF8F20]" aria-hidden="true">
                                            <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                        </svg>
                                    ))}
                                </div>

                                <p className={`text-neutral-300 text-sm leading-relaxed ${index === 0 || index === 3 ? 'max-w-xl mb-14' : 'mb-8'}`}>
                                    {testimonial.text}
                                </p>

                                <div className="flex items-center gap-4">
                                    <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-full object-cover" />
                                    <div className="flex flex-col">
                                        <h3 className="text-neutral-300 text-sm font-medium">
                                            {testimonial.name}
                                        </h3>
                                        <p className="text-neutral-500 text-sm">
                                            {testimonial.role}
                                        </p>
                                    </div>
                                </div>
                            </SpotlightCard>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}