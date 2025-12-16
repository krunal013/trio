"use client";
import { motion } from "framer-motion";
import { AuroraBackground } from "../ui/aurora-background";

export default function HeroAnimation({ children }) {
    return (
        <AuroraBackground>
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
            >
                {children}
            </motion.div>
        </AuroraBackground>
    );
}