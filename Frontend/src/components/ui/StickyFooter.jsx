import React from 'react';
import './StickyFooter.css';
import { cn } from '@/lib/utils';
import { motion, useReducedMotion } from 'motion/react';
import {
    GithubIcon,
    InstagramIcon,
    LinkedinIcon,
    TwitterIcon,
    CheckSquareIcon,
} from 'lucide-react';
import { Button } from './Button';
import LightSpread from './LightSpread';

export default function StickyFooter({
    className,
    ...props
}) {
    return (
        <footer
            className={cn('sticky-footer-root relative h-[100vh] w-full overflow-x-hidden', className)}
            style={{ clipPath: 'polygon(0% 0, 100% 0%, 100% 100%, 0 100%)' }}
            {...props}>
            <LightSpread />
            <div className="fixed bottom-0 h-[100vh] w-full">
                <div className="sticky top-[calc(100vh-720px)] h-full overflow-y-auto">
                    <div
                        className="relative flex size-full flex-col justify-between gap-5 border-t px-4 py-8 md:px-12">
                        <div aria-hidden className="absolute inset-0 isolate z-0 contain-strict">
                            <div
                                className="bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,--theme(--color-foreground/.06)_0,hsla(0,0%,55%,.02)_50%,--theme(--color-foreground/.01)_80%)] absolute top-0 left-0 h-320 w-140 -translate-y-87.5 -rotate-45 rounded-full" />
                            <div
                                className="bg-[radial-gradient(50%_50%_at_50%_50%,--theme(--color-foreground/.04)_0,--theme(--color-foreground/.01)_80%,transparent_100%)] absolute top-0 left-0 h-320 w-60 [translate:5%_-50%] -rotate-45 rounded-full" />
                            <div
                                className="bg-[radial-gradient(50%_50%_at_50%_50%,--theme(--color-foreground/.04)_0,--theme(--color-foreground/.01)_80%,transparent_100%)] absolute top-0 left-0 h-320 w-60 -translate-y-87.5 -rotate-45 rounded-full" />
                        </div>
                        <div className="mt-10 flex flex-col gap-8 md:flex-row xl:mt-0">
                            <AnimatedContainer className="w-full max-w-sm min-w-2xs space-y-4">
                                <div className="flex items-center gap-2">
                                    <CheckSquareIcon className="size-6" />
                                    <span className="text-lg font-semibold">Folium</span>
                                </div>
                                <p className="text-muted-foreground mt-4 text-sm">
                                    Blitz through your tasks at the speed of light.
                                    Folium helps you stay focused, organized, and ahead
                                    of everything on your plate.
                                </p>
                                <div className="flex gap-2">
                                    {socialLinks.map((link) => (
                                        <Button size="icon" variant="outline" className="size-8">
                                            <link.icon className="size-4" />
                                        </Button>
                                    ))}
                                </div>
                            </AnimatedContainer>
                            {footerLinkGroups.map((group, index) => (
                                <AnimatedContainer key={group.label} delay={0.1 + index * 0.1} className="w-full">
                                    <div className="mb-10 md:mb-0">
                                        <h3 className="text-sm uppercase">{group.label}</h3>
                                        <ul
                                            className="text-muted-foreground mt-4 space-y-2  text-sm md:text-xs lg:text-sm">
                                            {group.links.map((link) => (
                                                <li key={link.title}>
                                                    <a
                                                        href={link.href}
                                                        className="hover:text-foreground inline-flex items-center transition-all duration-300">
                                                        {link.icon && <link.icon className="me-1 size-4" />}
                                                        {link.title}
                                                    </a>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </AnimatedContainer>
                            ))}
                        </div>
                        <div
                            className="text-muted-foreground flex flex-col items-center justify-between gap-2 border-t pt-2 text-sm md:flex-row">
                            <p>© 2025 Folium. All rights reserved.</p>
                            <p>Built with ♥ for productivity.</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

const socialLinks = [
    { title: 'GitHub', href: '#', icon: GithubIcon },
    { title: 'Twitter', href: '#', icon: TwitterIcon },
    { title: 'Instagram', href: '#', icon: InstagramIcon },
    { title: 'LinkedIn', href: '#', icon: LinkedinIcon },
];

const footerLinkGroups = [
    {
        label: 'Product',
        links: [
            { title: 'Dashboard', href: '/dashboard' },
            { title: 'Task Management', href: '#' },
            { title: 'Priorities & Labels', href: '#' },
            { title: 'Due Dates & Reminders', href: '#' },
            { title: 'Collaboration', href: '#' },
            { title: 'Integrations', href: '#' },
            { title: 'Mobile App', href: '#' },
            { title: 'Pricing', href: '#' },
        ],
    },
    {
        label: 'Use Cases',
        links: [
            { title: 'Personal Tasks', href: '#' },
            { title: 'Team Projects', href: '#' },
            { title: 'Study Planning', href: '#' },
            { title: 'Habit Tracking', href: '#' },
            { title: 'Goal Setting', href: '#' },
            { title: 'Daily Standups', href: '#' },
        ],
    },
    {
        label: 'Resources',
        links: [
            { title: 'Getting Started', href: '#' },
            { title: 'Documentation', href: '#' },
            { title: 'Keyboard Shortcuts', href: '#' },
            { title: 'Blog', href: '#' },
            { title: 'Changelog', href: '#' },
            { title: 'System Status', href: '#' },
        ],
    },
    {
        label: 'Company',
        links: [
            { title: 'About', href: '#' },
            { title: 'Careers', href: '#' },
            { title: 'Contact', href: '#' },
            { title: 'Privacy Policy', href: '#' },
            { title: 'Terms of Service', href: '#' },
            { title: 'Cookie Policy', href: '#' },
        ],
    },
];

function AnimatedContainer({
    delay = 0.1,
    children,
    ...props
}) {
    const shouldReduceMotion = useReducedMotion();

    if (shouldReduceMotion) {
        return children;
    }

    return (
        <motion.div
            initial={{ filter: 'blur(4px)', translateY: -8, opacity: 0 }}
            whileInView={{ filter: 'blur(0px)', translateY: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay, duration: 0.8 }}
            {...props}>
            {children}
        </motion.div>
    );
}
