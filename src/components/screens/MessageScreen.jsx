"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import GradientButton from "../GradientButton"
import { ArrowRight } from "lucide-react";

export default function MessageScreen({ onNext }) {
    const [flipped, setFlipped] = useState(false);

    return (
        <div className="px-4 md:px-6 py-10 text-center">

            <audio src="/msg.mp3" autoPlay loop />

            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-3xl md:text-5xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from--pink-400 via-fuchsia-400 to-red-400 drop-shadow mb-6 leading-tight"
            >
                From my heart ❤️
            </motion.h2>

            <div className="mx-auto relative w-full max-w-3xl flex justify-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className=" h-auto max-w-xl bg-gradient-to-br from-pink-200 via-pink-100 to-pink-50 rounded-2xl shadow-lg p-4 md:p-6 text-center"
                >
                    <p className="text-[#301733] text-base md:text-lg leading-relaxed overflow-y-auto max-h-[400px] pr-2">
                        Happy Birthday, Ray 🎂💖✨.
                        Many many happy returns of the day, baby.
                        Thank you for being such a beautiful blessing in my life. I am very lucky to have you not just as my partner, but also as my best friend.
                        I wish you succeed all your dreams in your life and I’ll always be by your side, supporting your dreams and growing right along with you 🤍.
                        You’re truly one of a kind, a rare gem that i found. I love you more than any words can say.
                        Stay amazing , stay you and never forget how special you are ✨.
                        I Love You ❤️
                    </p>
                </motion.div>
            </div>
        </div>
    )
}
