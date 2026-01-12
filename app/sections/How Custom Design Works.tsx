"use client"

import { motion } from "motion/react";

const STEPS = [
    {
        number: "01",
        title: "CHOOSE BASE",
        description: "Select from our premium range of ethically sourced apparel. T-shirts, hoodies, and more."
    },
    {
        number: "02",
        title: "CUSTOMIZE",
        description: "Upload your design or use our studio to create something unique. Real-time 3D preview."
    },
    {
        number: "03",
        title: "PRODUCTION",
        description: "We print your design using state-of-the-art tech and ship it straight to your door."
    }
];

const HowCustomDesignWorks = () => {
    return (
        <section className="py-24 bg-[#FAFAFA]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
                    {/* Header Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:col-span-4"
                    >
                        <h2 className="text-4xl font-bold tracking-tight text-[#433A3F] mb-6">
                            YOUR VISION,<br />OUR CRAFT.
                        </h2>
                        <p className="text-gray-500 leading-relaxed max-w-sm mb-8">
                            A seamless process designed to bring your creative ideas to life with professional execution.
                        </p>
                        <div className="w-16 h-1 bg-[#433A3F]" />
                    </motion.div>

                    {/* Steps Container */}
                    <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-8">
                        {STEPS.map((step, index) => (
                            <motion.div
                                key={step.number}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.6 }}
                                className="p-8 bg-white border border-gray-100 flex flex-col items-start hover:shadow-xl transition-shadow duration-500"
                            >
                                <span className="text-sm font-bold tracking-widest text-gray-300 mb-6">
                                    {step.number}
                                </span>
                                <h3 className="text-xl font-bold text-[#433A3F] mb-4">
                                    {step.title}
                                </h3>
                                <p className="text-gray-500 text-sm leading-relaxed">
                                    {step.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowCustomDesignWorks;
