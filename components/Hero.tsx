"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Star, MapPin } from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

const services = [
	{ icon: "💍", label: "Bridal" },
	{ icon: "✨", label: "Party" },
	{ icon: "📸", label: "Editorial" },
	{ icon: "🎓", label: "Training" },
];

export default function Hero() {
	return (
		<section
			className="relative flex flex-col lg:flex-row bg-[#F8F3EE] overflow-hidden"
			style={{ minHeight: "calc(100vh - 64px)" }}
		>
			{/* ══ LEFT PANEL — dark, warm ══ */}
			<div className="relative flex flex-col justify-center w-full lg:w-[48%] bg-[#1C1009] px-8 sm:px-12 lg:px-14 xl:px-16 py-16 lg:py-0 overflow-hidden z-10">
				{/* Subtle warm glow */}
				<div className="absolute top-0 left-0 w-80 h-80 rounded-full bg-[#C9A27E]/8 blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
				<div className="absolute bottom-0 right-0 w-60 h-60 rounded-full bg-[#5C4335]/20 blur-3xl translate-x-1/2 translate-y-1/2 pointer-events-none" />

				{/* Eye-brow */}
				<motion.div
					initial={{ opacity: 0, x: -20 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.6, delay: 0.15, ease }}
					className="flex items-center gap-3 mb-8 lg:mt-4"
				>
					<div className="h-px w-10 bg-[#C9A27E]" />
					<span className="font-dm text-[10px] tracking-[0.35em] uppercase text-[#C9A27E]">
						Makeup Artist · Mumbai
					</span>
				</motion.div>

				{/* Main heading — all on dark bg, no overflow */}
				<div className="mb-2">
					{["Where", "beauty", "meets"].map((word, i) => (
						<motion.p
							key={word}
							className="font-playfair text-white leading-[1] tracking-tight"
							style={{ fontSize: "clamp(38px, 5vw, 68px)" }}
							initial={{ opacity: 0, y: 40 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.75, delay: 0.25 + i * 0.1, ease }}
						>
							{word}
						</motion.p>
					))}
				</div>

				{/* Script accent */}
				<motion.p
					className="font-greatvibes text-[#C9A27E] leading-none mb-8"
					style={{ fontSize: "clamp(44px, 5.5vw, 76px)" }}
					initial={{ opacity: 0, x: -24 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.85, delay: 0.6, ease }}
				>
					artistry
				</motion.p>

				{/* Tagline */}
				<motion.p
					className="font-dm text-white text-sm sm:text-base leading-relaxed mb-10 max-w-xs border-l-2 border-[#C9A27E]/40 pl-4"
					initial={{ opacity: 0, y: 16 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.7, delay: 0.75, ease }}
				>
					I don&apos;t just do <span className="text-[#C9A27E]">makeup</span>,
					<br />I bring out your <span className="text-[#C9A27E]">soul</span>.
				</motion.p>

				{/* CTAs */}
				<motion.div
					className="flex flex-wrap gap-3 mb-10"
					initial={{ opacity: 0, y: 16 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.7, delay: 0.88, ease }}
				>
					<Link
						href="/contact"
						className="group inline-flex items-center gap-2.5 bg-[#C9A27E] text-[#1C1009] px-6 py-3 rounded-full text-[11px] tracking-[0.2em] uppercase font-dm font-semibold hover:bg-[#DCC4A8] transition-all duration-300 hover:shadow-xl hover:shadow-[#C9A27E]/30"
					>
						Book Your Look
						<ArrowRight
							size={13}
							className="group-hover:translate-x-0.5 transition-transform"
						/>
					</Link>
					<Link
						href="/gallery"
						className="inline-flex items-center gap-2 font-dm text-[11px] tracking-[0.18em] uppercase text-white/60 hover:text-[#C9A27E] transition-colors duration-300 border border-white/15 hover:border-[#C9A27E]/40 px-6 py-3 rounded-full"
					>
						View Gallery
					</Link>
				</motion.div>

				{/* Location + rating */}
				<motion.div
					className="flex flex-col gap-3"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 0.7, delay: 1.0, ease }}
				>
					<div className="flex items-center gap-2">
						<MapPin size={12} className="text-[#C9A27E] shrink-0" />
						<span className="font-dm text-xs text-white/40 tracking-wide">
							Based in Mumbai · Home visits available
						</span>
					</div>
					<div className="flex items-center gap-1.5">
						{[...Array(5)].map((_, i) => (
							<Star
								key={i}
								size={11}
								className="fill-[#C9A27E] text-[#C9A27E]"
							/>
						))}
						<span className="font-dm text-xs text-white/40 ml-1">
							5.0 · 200+ happy brides
						</span>
					</div>
				</motion.div>
			</div>

			{/* ══ RIGHT PANEL — Suman's photo ══ */}
			<motion.div
				className="relative w-full lg:w-[52%] min-h-[55vw] lg:min-h-0"
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 1.1, delay: 0.05, ease }}
			>
				{/* Photo — object-top so face is always shown */}
				<Image
					src="/images/suman-2.jpg"
					alt="Suman Mukadam — Professional Makeup Artist Mumbai"
					fill
					priority
					className="object-cover"
					sizes="(max-width: 1024px) 100vw, 52vw"
				/>

				{/* Subtle gradient edge where panels meet (left) */}
				<div className="hidden lg:block absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[#1C1009] to-transparent z-10 pointer-events-none" />

				{/* Bottom gradient on mobile */}
				<div className="lg:hidden absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#1C1009] to-transparent pointer-events-none" />

				{/* Floating stat — brides */}
				<motion.div
					initial={{ opacity: 0, scale: 0.8, y: 20 }}
					animate={{ opacity: 1, scale: 1, y: 0 }}
					transition={{
						duration: 0.6,
						delay: 1.2,
						type: "spring",
						stiffness: 140,
					}}
					className="absolute top-8 left-8 lg:left-10 z-20 bg-white/95 backdrop-blur rounded-2xl px-5 py-4 shadow-xl border border-[#EFE5DC]"
					style={{ animation: "float 6s ease-in-out 1.5s infinite" }}
				>
					<div className="text-center">
						<div className="font-playfair text-2xl text-[#C9A27E] leading-none">
							200+
						</div>
						<div className="font-dm text-[9px] text-[#5C4335]/60 tracking-[0.18em] uppercase mt-1">
							Happy Brides
						</div>
					</div>
				</motion.div>

				{/* Floating stat — years */}
				<motion.div
					initial={{ opacity: 0, scale: 0.8, y: 20 }}
					animate={{ opacity: 1, scale: 1, y: 0 }}
					transition={{
						duration: 0.6,
						delay: 1.4,
						type: "spring",
						stiffness: 140,
					}}
					className="absolute top-8 right-8 z-20 bg-[#2D1F1A]/90 backdrop-blur rounded-2xl px-5 py-4 shadow-xl"
					style={{ animation: "float-slow 7s ease-in-out 2s infinite" }}
				>
					<div className="text-center">
						<div className="font-playfair text-2xl text-[#C9A27E] leading-none">
							5+
						</div>
						<div className="font-dm text-[9px] text-white/50 tracking-[0.18em] uppercase mt-1">
							Yrs Experience
						</div>
					</div>
				</motion.div>

				{/* Script overlay — subtle, bottom right */}
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 1.4, delay: 1.6 }}
					className="absolute bottom-8 right-6 z-20 text-right hidden sm:block"
				>
					<p
						className="font-greatvibes text-white/30 leading-tight select-none"
						style={{
							fontSize: "clamp(28px, 3vw, 42px)",
							textShadow: "0 2px 20px rgba(0,0,0,0.3)",
						}}
					>
						Dream Plan Do
					</p>
				</motion.div>
			</motion.div>

			{/* ══ SERVICE BAR — below the split, full-width ══ */}
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.7, delay: 1.1, ease }}
				className="absolute bottom-0 left-0 right-0 lg:left-0 hidden lg:flex bg-white/90 backdrop-blur-lg border-t border-[#EFE5DC] divide-x divide-[#EFE5DC] z-30"
			>
				{[
					{
						icon: "💍",
						title: "Bridal Makeup",
						desc: "Timeless looks for your big day",
					},
					{
						icon: "✨",
						title: "Party & Occasions",
						desc: "Glam, chic or subtle — you, elevated",
					},
					{
						icon: "📸",
						title: "Editorial & Shoots",
						desc: "Camera-ready creative makeup",
					},
					{
						icon: "🎓",
						title: "Classes & Workshops",
						desc: "Learn the art of makeup",
					},
				].map((s) => (
					<Link
						key={s.title}
						href="/services"
						className="flex-1 flex items-center gap-3 px-5 xl:px-7 py-4 group hover:bg-[#F8F3EE] transition-colors duration-200"
					>
						<span className="text-xl shrink-0">{s.icon}</span>
						<div>
							<p className="font-playfair text-[#2D1F1A] text-sm group-hover:text-[#C9A27E] transition-colors">
								{s.title}
							</p>
							<p className="font-dm text-[10px] text-[#5C4335]/50 leading-tight hidden xl:block">
								{s.desc}
							</p>
						</div>
					</Link>
				))}
			</motion.div>
		</section>
	);
}
