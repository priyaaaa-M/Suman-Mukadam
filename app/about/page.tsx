"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import {
	ArrowRight,
	Award,
	Heart,
	Sparkles,
	Users,
	MapPin,
	CheckCircle,
	Camera,
} from "lucide-react";

function FadeIn({
	children,
	delay = 0,
	className = "",
}: {
	children: React.ReactNode;
	delay?: number;
	className?: string;
}) {
	const ref = useRef(null);
	const inView = useInView(ref, { once: true, margin: "-60px" });
	return (
		<motion.div
			ref={ref}
			initial={{ opacity: 0, y: 32 }}
			animate={inView ? { opacity: 1, y: 0 } : {}}
			transition={{ duration: 0.75, delay, ease: [0.22, 1, 0.36, 1] }}
			className={className}
		>
			{children}
		</motion.div>
	);
}

function ScaleIn({
	children,
	delay = 0,
	className = "",
}: {
	children: React.ReactNode;
	delay?: number;
	className?: string;
}) {
	const ref = useRef(null);
	const inView = useInView(ref, { once: true, margin: "-60px" });
	return (
		<motion.div
			ref={ref}
			initial={{ opacity: 0, scale: 0.94 }}
			animate={inView ? { opacity: 1, scale: 1 } : {}}
			transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
			className={className}
		>
			{children}
		</motion.div>
	);
}

const timeline = [
	{
		year: "2018",
		title: "The Beginning",
		desc: "Discovered my passion for makeup while doing bridal looks for friends and family in Mumbai.",
	},
	{
		year: "2019",
		title: "Professional Training",
		desc: "Enrolled at Creative Makeup Hair Academy, learning advanced techniques from industry experts.",
	},
	{
		year: "2020",
		title: "Certification & Launch",
		desc: "Completed certification and officially launched my career as a professional makeup artist.",
	},
	{
		year: "2021",
		title: "Growing Portfolio",
		desc: "Expanded into editorial and photoshoot makeup, collaborating with photographers across Mumbai.",
	},
	{
		year: "2022–24",
		title: "Studio & Beyond",
		desc: "Over 200 bridal clients, 500+ looks created, and industry collaborations on professional sets.",
	},
];

const whyChooseMe = [
	"Certified professional from Creative Makeup Hair Academy",
	"Skin-friendly, premium product brands only",
	"Personalized consultation for every client",
	"Available for home visits across Mumbai",
	"Bridal trial sessions included",
	"Hygiene-first approach — sanitized tools always",
];

const values = [
	{
		icon: <Heart size={22} strokeWidth={1.5} />,
		title: "Passion First",
		desc: "Every brush stroke is a labour of love. I genuinely care about making you feel extraordinary.",
	},
	{
		icon: <Sparkles size={22} strokeWidth={1.5} />,
		title: "Artistry",
		desc: "Makeup is my canvas. I approach every look as a creative work of art tailored to your features.",
	},
	{
		icon: <Users size={22} strokeWidth={1.5} />,
		title: "Client-Centered",
		desc: "Your comfort and vision matter most. I listen, adapt, and deliver beyond expectations.",
	},
	{
		icon: <Award size={22} strokeWidth={1.5} />,
		title: "Excellence",
		desc: "From technique to timing — I hold myself to the highest standard so you can shine.",
	},
];

// Industry events — real photos of Suman at professional sets
const industryMoments = [
	{
		src: "/images/suman-5.jpg",
		caption: "On set — industry event",
		sub: "Behind the scenes",
	},
	{
		src: "/images/suman-8.jpg",
		caption: "TV production set",
		sub: "Professional collaboration",
	},
	{
		src: "/images/suman-11.jpg",
		caption: "Live event",
		sub: "Industry network",
	},
];

export default function AboutPage() {
	return (
		<>
			{/* Hero — dramatic portrait */}
			<section className="relative min-h-[70vh] flex items-end bg-[#2D1F1A] overflow-hidden pt-20">
				<div className="absolute inset-0">
					<Image
						src="/images/suman-3.jpg"
						alt="Suman Mukadam — Makeup Artist"
						fill
						className="object-cover opacity-75"
						priority
					/>
					<div className="absolute inset-0 bg-gradient-to-t from-[#2D1F1A] via-[#2D1F1A]/40 to-transparent" />
					<div className="absolute inset-0 bg-gradient-to-r from-[#2D1F1A]/30 to-transparent" />
				</div>
				<div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 w-full">
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.3 }}
					>
						<p className="font-cormorant italic text-[#C9A27E] text-xl mb-2">
							My Story
						</p>
						<h1 className="font-playfair text-5xl lg:text-7xl text-white mb-4 leading-tight">
							About Suman
						</h1>
						<div className="flex items-center gap-2 text-white/60">
							<MapPin size={13} className="text-[#C9A27E]" />
							<span className="font-dm text-sm">Mumbai, Maharashtra</span>
						</div>
					</motion.div>
				</div>
			</section>

			{/* Story section — real portrait */}
			<section className="py-24 bg-[#F8F3EE]">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
						<ScaleIn className="relative">
							<div className="relative aspect-[3/4] rounded-3xl overflow-hidden max-w-md shadow-2xl">
								<Image
									src="/images/suman-2.jpg"
									alt="Suman Mukadam — smiling portrait"
									fill
									className="object-cover object-top"
								/>
								<div className="absolute inset-0 rounded-3xl ring-1 ring-inset ring-white/10 pointer-events-none" />
							</div>
							{/* Floating stat badges */}
							<motion.div
								animate={{ y: [0, -8, 0] }}
								transition={{
									duration: 5.5,
									repeat: Infinity,
									ease: "easeInOut",
								}}
								className="absolute top-8 -right-4 bg-white rounded-2xl p-5 shadow-xl border border-[#EFE5DC]"
							>
								<div className="text-center">
									<div className="font-playfair text-3xl text-[#C9A27E] mb-0.5">
										200+
									</div>
									<div className="font-dm text-[10px] text-[#5C4335]/55 uppercase tracking-widest">
										Happy Brides
									</div>
								</div>
							</motion.div>
							<motion.div
								animate={{ y: [0, 8, 0] }}
								transition={{
									duration: 6,
									repeat: Infinity,
									ease: "easeInOut",
									delay: 1,
								}}
								className="absolute -bottom-4 -left-4 bg-[#2D1F1A] rounded-2xl p-5 shadow-xl"
							>
								<div className="text-center">
									<div className="font-playfair text-3xl text-[#C9A27E] mb-0.5">
										5+
									</div>
									<div className="font-dm text-[10px] text-white/50 uppercase tracking-widest">
										Years Exp.
									</div>
								</div>
							</motion.div>
						</ScaleIn>

						<div>
							<FadeIn delay={0.1}>
								<p className="font-cormorant italic text-[#C9A27E] text-xl mb-2">
									Where It All Began
								</p>
								<h2 className="font-playfair text-3xl lg:text-4xl text-[#2D1F1A] mb-6 leading-tight">
									Turning passion into
									<br />
									timeless art
								</h2>
								<div className="space-y-4 font-dm text-[#5C4335]/75 leading-[1.9] text-sm">
									<p>
										Growing up in Mumbai, I was always drawn to the
										transformative power of beauty. Watching my mother get ready
										for special occasions, I was fascinated by how a little
										color and care could light someone up from within.
									</p>
									<p>
										What started as doing makeup for friends quickly became an
										undeniable passion. In 2019, I took the leap and enrolled at
										Creative Makeup Hair Academy — one of the most respected
										institutions in the industry — where I trained under master
										artists and learned techniques spanning classical bridal to
										avant-garde editorial.
									</p>
									<p>
										Since then, I&apos;ve had the privilege of working with over
										200 brides on their most precious day, collaborating on
										professional TV and film sets, and building a community of
										beauty lovers across Instagram.
									</p>
									<p>
										My philosophy is simple: makeup should enhance who you are,
										not mask it. Every look I create is deeply personal, crafted
										to make you feel seen, celebrated, and irresistibly
										yourself.
									</p>
								</div>
							</FadeIn>

							<FadeIn
								delay={0.3}
								className="mt-8 p-6 bg-[#EFE5DC] rounded-2xl border-l-4 border-[#C9A27E]"
							>
								<p className="font-cormorant italic text-xl text-[#5C4335]">
									&ldquo;I don&apos;t just do makeup. I bring out your
									soul.&rdquo;
								</p>
								<p className="font-dm text-sm text-[#5C4335]/60 mt-2">
									— Suman Mukadam
								</p>
							</FadeIn>
						</div>
					</div>
				</div>
			</section>

			{/* ── REAL PHOTOS — Portrait detail ── */}
			<section className="py-16 bg-[#EFE5DC]">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<FadeIn className="text-center mb-12">
						<p className="font-cormorant italic text-[#C9A27E] text-xl mb-2">
							The Artist
						</p>
						<h2 className="font-playfair text-4xl text-[#2D1F1A]">
							Meet Suman
						</h2>
					</FadeIn>
					<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
						{[
							{ src: "/images/suman-1.jpg", label: "The artistry look" },
							{ src: "/images/suman-4.jpg", label: "Smoky eye detail" },
							{ src: "/images/suman-3.jpg", label: "Red curtain portrait" },
							{ src: "/images/suman-6.jpg", label: "Personal moments" },
						].map((item, i) => (
							<ScaleIn key={item.src} delay={i * 0.08}>
								<div className="relative aspect-[3/4] rounded-2xl overflow-hidden group shadow-lg">
									<Image
										src={item.src}
										alt={item.label}
										fill
										className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
									/>
									<div className="absolute inset-0 bg-gradient-to-t from-[#2D1F1A]/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
									<div className="absolute bottom-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
										<p className="font-cormorant italic text-white text-sm">
											{item.label}
										</p>
									</div>
								</div>
							</ScaleIn>
						))}
					</div>
				</div>
			</section>

			{/* Values */}
			<section className="py-20 bg-[#F8F3EE]">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<FadeIn className="text-center mb-14">
						<p className="font-cormorant italic text-[#C9A27E] text-xl mb-2">
							What I Stand For
						</p>
						<h2 className="font-playfair text-4xl text-[#2D1F1A]">
							My Philosophy
						</h2>
					</FadeIn>
					<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
						{values.map((v, i) => (
							<FadeIn key={v.title} delay={i * 0.1}>
								<div className="bg-white rounded-2xl p-7 hover:shadow-xl hover:shadow-[#C9A27E]/10 hover:-translate-y-2 transition-all duration-400 border border-[#EFE5DC]/70 h-full group">
									<div className="text-[#C9A27E] mb-5 group-hover:scale-110 transition-transform duration-300">
										{v.icon}
									</div>
									<h3 className="font-playfair text-lg text-[#2D1F1A] mb-3">
										{v.title}
									</h3>
									<p className="font-dm text-sm text-[#5C4335]/65 leading-relaxed">
										{v.desc}
									</p>
								</div>
							</FadeIn>
						))}
					</div>
				</div>
			</section>

			{/* ── INDUSTRY & EXPERIENCE — Real event photos ── */}
			<section className="py-20 bg-[#2D1F1A]">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<FadeIn className="text-center mb-14">
						<p className="font-cormorant italic text-[#C9A27E] text-xl mb-2">
							Beyond the Studio
						</p>
						<h2 className="font-playfair text-4xl text-white">
							Industry Experience
						</h2>
						<p className="font-dm text-white/50 text-sm max-w-md mx-auto mt-3 leading-relaxed">
							From professional TV sets to live industry events — Suman brings
							her artistry everywhere.
						</p>
					</FadeIn>
					<div className="grid md:grid-cols-3 gap-6">
						{industryMoments.map((item, i) => (
							<ScaleIn key={item.src} delay={i * 0.1}>
								<div className="group relative aspect-[3/4] rounded-2xl overflow-hidden shadow-xl">
									<Image
										src={item.src}
										alt={item.caption}
										fill
										className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
									/>
									<div className="absolute inset-0 bg-gradient-to-t from-[#2D1F1A]/80 via-[#2D1F1A]/20 to-transparent" />
									<div className="absolute bottom-5 left-5 right-5">
										<div className="flex items-center gap-1.5 mb-1">
											<Camera size={11} className="text-[#C9A27E]" />
											<span className="font-dm text-[10px] text-[#C9A27E] uppercase tracking-widest">
												{item.sub}
											</span>
										</div>
										<p className="font-playfair text-white text-base">
											{item.caption}
										</p>
									</div>
								</div>
							</ScaleIn>
						))}
					</div>
				</div>
			</section>

			{/* Timeline */}
			<section className="py-24 bg-[#F8F3EE]">
				<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
					<FadeIn className="text-center mb-16">
						<p className="font-cormorant italic text-[#C9A27E] text-xl mb-2">
							The Journey
						</p>
						<h2 className="font-playfair text-4xl text-[#2D1F1A]">
							My Story in Time
						</h2>
					</FadeIn>
					<div className="relative">
						<div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#C9A27E]/20 via-[#C9A27E]/60 to-[#C9A27E]/20 transform md:-translate-x-px" />
						<div className="space-y-12">
							{timeline.map((item, i) => (
								<FadeIn key={item.year} delay={i * 0.1}>
									<div
										className={`flex gap-8 md:gap-0 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
									>
										<div
											className={`flex-1 pb-0 ${i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"} pl-14 md:pl-0`}
										>
											<div className="bg-white rounded-2xl p-6 border border-[#EFE5DC] shadow-sm hover:shadow-lg hover:shadow-[#C9A27E]/8 hover:-translate-y-1 transition-all duration-300 inline-block w-full">
												<p className="font-cormorant italic text-[#C9A27E] text-lg mb-1">
													{item.year}
												</p>
												<h3 className="font-playfair text-lg text-[#2D1F1A] mb-2">
													{item.title}
												</h3>
												<p className="font-dm text-sm text-[#5C4335]/65 leading-relaxed">
													{item.desc}
												</p>
											</div>
										</div>
										<div className="absolute left-6 md:left-1/2 md:-translate-x-1/2 w-3.5 h-3.5 rounded-full bg-[#C9A27E] border-[3px] border-white shadow-md mt-6 ring-4 ring-[#C9A27E]/15" />
										<div className="hidden md:block flex-1" />
									</div>
								</FadeIn>
							))}
						</div>
					</div>
				</div>
			</section>

			{/* Certification */}
			<section className="py-20 bg-[#5C4335] text-white">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="grid lg:grid-cols-2 gap-16 items-center">
						<ScaleIn>
							<div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl">
								<Image
									src="/images/suman-4.jpg"
									alt="Suman — makeup detail close-up"
									fill
									className="object-cover object-top"
								/>
								<div className="absolute inset-0 bg-[#5C4335]/40" />
								<div className="absolute inset-0 flex items-center justify-center">
									<div className="text-center">
										<Award
											size={56}
											className="text-[#C9A27E] mx-auto mb-4"
											strokeWidth={1}
										/>
										<p className="font-playfair text-2xl text-white">
											Certified Artist
										</p>
										<p className="font-cormorant italic text-[#C9A27E] mt-1">
											Creative Makeup Hair Academy
										</p>
									</div>
								</div>
							</div>
						</ScaleIn>
						<div>
							<FadeIn delay={0.1}>
								<p className="font-cormorant italic text-[#C9A27E] text-xl mb-2">
									Education & Credentials
								</p>
								<h2 className="font-playfair text-4xl mb-6 leading-tight">
									Certified at Creative
									<br />
									Makeup Hair Academy
								</h2>
								<p className="font-dm text-white/70 leading-relaxed text-sm mb-8">
									My training at Creative Makeup Hair Academy gave me a solid
									foundation in professional makeup artistry — from skincare
									prep and colour theory to advanced bridal and editorial
									techniques. This certification represents my commitment to
									excellence and continuous learning.
								</p>
							</FadeIn>
							<FadeIn delay={0.2}>
								<ul className="space-y-3">
									{[
										"Advanced Bridal Makeup Techniques",
										"Airbrush & HD Makeup",
										"Editorial & Fantasy Looks",
										"Skincare & Prep",
										"Colour Theory & Face Contouring",
										"Professional Hygiene Standards",
									].map((item) => (
										<li
											key={item}
											className="flex items-center gap-3 font-dm text-sm text-white/80"
										>
											<div className="w-5 h-5 rounded-full bg-[#C9A27E]/20 flex items-center justify-center shrink-0">
												<CheckCircle size={12} className="text-[#C9A27E]" />
											</div>
											{item}
										</li>
									))}
								</ul>
							</FadeIn>
						</div>
					</div>
				</div>
			</section>

			{/* Why Choose Me */}
			<section className="py-20 bg-[#EFE5DC]">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="grid lg:grid-cols-2 gap-12 items-center">
						<FadeIn>
							<p className="font-cormorant italic text-[#C9A27E] text-xl mb-2">
								The Suman Difference
							</p>
							<h2 className="font-playfair text-4xl text-[#2D1F1A] mb-8 leading-tight">
								Why Clients Choose Me
							</h2>
							<ul className="space-y-4">
								{whyChooseMe.map((item) => (
									<li key={item} className="flex items-start gap-3 group">
										<div className="w-5 h-5 rounded-full bg-[#C9A27E]/20 flex items-center justify-center mt-0.5 shrink-0 group-hover:bg-[#C9A27E]/40 transition-colors duration-200">
											<CheckCircle size={12} className="text-[#C9A27E]" />
										</div>
										<span className="font-dm text-sm text-[#5C4335]/80">
											{item}
										</span>
									</li>
								))}
							</ul>
							<Link
								href="/contact"
								className="group inline-flex items-center gap-2 mt-8 bg-[#2D1F1A] text-[#F8F3EE] px-6 py-3.5 text-xs tracking-[0.18em] uppercase font-dm rounded-full hover:bg-[#5C4335] transition-all duration-300 hover:shadow-xl hover:shadow-[#2D1F1A]/20"
							>
								Book Your Session{" "}
								<ArrowRight
									size={13}
									className="group-hover:translate-x-0.5 transition-transform"
								/>
							</Link>
						</FadeIn>
						<ScaleIn delay={0.2} className="relative">
							<div className="relative aspect-[4/5] rounded-3xl overflow-hidden max-w-sm mx-auto shadow-2xl">
								<Image
									src="/images/suman-1.jpg"
									alt="Suman — artistry portrait"
									fill
									className="object-cover object-top"
								/>
								<div className="absolute inset-0 bg-gradient-to-t from-[#2D1F1A]/30 to-transparent" />
							</div>
						</ScaleIn>
					</div>
				</div>
			</section>
		</>
	);
}
