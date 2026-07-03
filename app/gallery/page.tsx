"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";

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
	const inView = useInView(ref, { once: true, margin: "-40px" });
	return (
		<motion.div
			ref={ref}
			initial={{ opacity: 0, y: 20 }}
			animate={inView ? { opacity: 1, y: 0 } : {}}
			transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
			className={className}
		>
			{children}
		</motion.div>
	);
}

type Category =
	| "All"
	| "Bridal"
	| "Engagement"
	| "Party"
	| "Editorial"
	| "Transformations";

interface GalleryItem {
	id: number;
	src: string;
	category: Category;
	title: string;
	span?: "tall" | "normal";
	isReal?: boolean; // real client work
}

const items: GalleryItem[] = [
	// Real client work — Suman's actual photos
	{
		id: 1,
		src: "/images/suman-2.jpg",
		category: "Editorial",
		title: "Suman — Confident Portrait",
		span: "tall",
		isReal: true,
	},
	{
		id: 2,
		src: "/images/suman-4.jpg",
		category: "Editorial",
		title: "Smoky Eye Detail",
		span: "normal",
		isReal: true,
	},
	{
		id: 3,
		src: "/images/suman-3.jpg",
		category: "Party",
		title: "Dramatic Red Lip",
		span: "normal",
		isReal: true,
	},
	{
		id: 4,
		src: "/images/suman-1.jpg",
		category: "Party",
		title: "Soft Evening Look",
		span: "normal",
		isReal: true,
	},
	{
		id: 5,
		src: "/images/suman-7.jpg",
		category: "Bridal",
		title: "Traditional Bridal — Gold Saree",
		span: "tall",
		isReal: true,
	},
	{
		id: 6,
		src: "/images/suman-9.jpg",
		category: "Transformations",
		title: "Before & After — Natural Glow",
		span: "normal",
		isReal: true,
	},
	{
		id: 7,
		src: "/images/suman-10.jpg",
		category: "Transformations",
		title: "Before & After — Eye Drama",
		span: "normal",
		isReal: true,
	},
	// Portfolio / Stock images for variety
	{
		id: 8,
		src: "/images/bridal-1.jpg",
		category: "Bridal",
		title: "Elegant Bridal Look",
		span: "tall",
	},
	{
		id: 9,
		src: "/images/editorial-1.jpg",
		category: "Editorial",
		title: "Editorial Glam",
		span: "normal",
	},
	{
		id: 10,
		src: "/images/reception-1.jpg",
		category: "Bridal",
		title: "Reception Radiance",
		span: "normal",
	},
	{
		id: 11,
		src: "/images/party-1.jpg",
		category: "Party",
		title: "Party Glam",
		span: "tall",
	},
	{
		id: 12,
		src: "/images/editorial-2.jpg",
		category: "Editorial",
		title: "High Fashion Editorial",
		span: "normal",
	},
	{
		id: 13,
		src: "/images/bridal-2.jpg",
		category: "Bridal",
		title: "Classic Bridal",
		span: "normal",
	},
	{
		id: 14,
		src: "/images/transformation-1.jpg",
		category: "Transformations",
		title: "Full Transformation",
		span: "tall",
	},
	{
		id: 15,
		src: "/images/engagement-1.jpg",
		category: "Engagement",
		title: "Festive Engagement",
		span: "normal",
	},
	{
		id: 16,
		src: "/images/before-1.jpg",
		category: "Bridal",
		title: "Timeless Bride",
		span: "normal",
	},
	{
		id: 17,
		src: "/images/before-2.jpg",
		category: "Engagement",
		title: "Modern Engagement",
		span: "tall",
	},
	{
		id: 18,
		src: "/images/before-3.jpg",
		category: "Transformations",
		title: "Stunning Transformation",
		span: "normal",
	},
	{
		id: 19,
		src: "/images/editorial-3.jpg",
		category: "Editorial",
		title: "Avant-Garde Look",
		span: "normal",
	},
	{
		id: 20,
		src: "/images/party-2.jpg",
		category: "Party",
		title: "Cocktail Glam",
		span: "normal",
	},
	{
		id: 21,
		src: "/images/bridal-4.jpg",
		category: "Bridal",
		title: "Soft Bridal",
		span: "normal",
	},
	{
		id: 22,
		src: "/images/bridal-3.jpg",
		category: "Engagement",
		title: "Dewy Engagement",
		span: "tall",
	},
];

const categories: Category[] = [
	"All",
	"Bridal",
	"Engagement",
	"Party",
	"Editorial",
	"Transformations",
];

export default function GalleryPage() {
	const [active, setActive] = useState<Category>("All");
	const [lightbox, setLightbox] = useState<number | null>(null);

	const filtered =
		active === "All" ? items : items.filter((i) => i.category === active);
	const currentIndex = filtered.findIndex((i) => i.id === lightbox);
	const currentItem = filtered.find((i) => i.id === lightbox);
	const prev = () =>
		setLightbox(
			filtered[(currentIndex - 1 + filtered.length) % filtered.length].id,
		);
	const next = () =>
		setLightbox(filtered[(currentIndex + 1) % filtered.length].id);

	return (
		<>
			{/* Hero */}
			<section className="relative py-36 bg-[#2D1F1A] overflow-hidden flex items-center">
				<div className="absolute inset-0">
					<Image
						src="/images/suman-3.jpg"
						alt="Gallery"
						fill
						className="object-cover opacity-35"
						priority
					/>
					<div className="absolute inset-0 bg-gradient-to-t from-[#2D1F1A] via-[#2D1F1A]/55 to-[#2D1F1A]/20" />
				</div>
				<div className="absolute top-1/2 right-20 w-64 h-64 rounded-full border border-[#C9A27E]/10 -translate-y-1/2 pointer-events-none" />
				<div className="absolute top-1/2 right-20 w-40 h-40 rounded-full border border-[#C9A27E]/15 -translate-y-1/2 pointer-events-none" />
				<div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.3 }}
					>
						<p className="font-cormorant italic text-[#C9A27E] text-xl mb-2">
							The Art Gallery
						</p>
						<h1 className="font-playfair text-5xl lg:text-7xl text-white mb-4 leading-tight">
							My Work
						</h1>
						<p className="font-dm text-white/55 text-sm max-w-md leading-relaxed">
							Real transformations, bridal moments, editorial looks — all
							crafted by Suman.
						</p>
					</motion.div>
				</div>
			</section>

			{/* Gallery */}
			<section className="py-16 bg-[#F8F3EE]">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					{/* Filter Tabs */}
					<FadeIn className="flex flex-wrap gap-2.5 mb-12 justify-center">
						{categories.map((cat) => (
							<motion.button
								key={cat}
								onClick={() => setActive(cat)}
								whileHover={{ scale: 1.03 }}
								whileTap={{ scale: 0.97 }}
								className={`px-5 py-2.5 rounded-full text-[11px] font-dm tracking-[0.15em] uppercase transition-all duration-300 ${
									active === cat
										? "bg-[#2D1F1A] text-white shadow-lg shadow-[#2D1F1A]/15"
										: "bg-[#EFE5DC] text-[#5C4335]/70 hover:bg-[#EFE5DC]/80 hover:text-[#5C4335]"
								}`}
							>
								{cat}
								{active === cat && (
									<span className="ml-1.5 text-[#C9A27E]/70">
										({filtered.length})
									</span>
								)}
							</motion.button>
						))}
					</FadeIn>

					{/* Masonry Grid */}
					<motion.div
						layout
						className="columns-2 md:columns-3 lg:columns-4 gap-3 space-y-3"
					>
						<AnimatePresence mode="popLayout">
							{filtered.map((item, i) => (
								<motion.div
									key={item.id}
									layout
									initial={{ opacity: 0, scale: 0.92 }}
									animate={{ opacity: 1, scale: 1 }}
									exit={{ opacity: 0, scale: 0.92 }}
									transition={{ duration: 0.45, delay: i * 0.025 }}
									className="break-inside-avoid mb-3 group relative cursor-pointer rounded-2xl overflow-hidden"
									onClick={() => setLightbox(item.id)}
									whileHover={{ y: -3 }}
								>
									<div
										className={`relative w-full ${item.span === "tall" ? "aspect-[3/4]" : "aspect-square"}`}
									>
										<Image
											src={item.src}
											alt={item.title}
											fill
											className="object-cover object-top transition-transform duration-700 group-hover:scale-106"
										/>
										{/* Real work badge */}
										{item.isReal && (
											<div className="absolute top-2.5 left-2.5 bg-[#C9A27E] text-white text-[8px] tracking-widest uppercase font-dm px-2 py-1 rounded-full z-10">
												Real Work
											</div>
										)}
										{/* Hover overlay */}
										<div className="absolute inset-0 bg-gradient-to-t from-[#2D1F1A]/65 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-350" />
										<div className="absolute inset-0 flex flex-col justify-end p-3.5 opacity-0 group-hover:opacity-100 transition-all duration-350">
											<div className="flex items-center justify-between">
												<p className="font-playfair text-white text-sm">
													{item.title}
												</p>
												<div className="w-7 h-7 rounded-full bg-white/20 backdrop-blur flex items-center justify-center shrink-0 ml-2">
													<ZoomIn size={12} className="text-white" />
												</div>
											</div>
											<p className="font-dm text-[9px] text-[#C9A27E] uppercase tracking-widest mt-1">
												{item.category}
											</p>
										</div>
									</div>
								</motion.div>
							))}
						</AnimatePresence>
					</motion.div>

					{filtered.length === 0 && (
						<div className="text-center py-20">
							<p className="font-cormorant italic text-[#C9A27E] text-2xl">
								No items found
							</p>
						</div>
					)}
				</div>
			</section>

			{/* Lightbox */}
			<AnimatePresence>
				{lightbox !== null && currentItem && (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 0.25 }}
						className="fixed inset-0 z-50 bg-[#2D1F1A]/97 flex items-center justify-center p-4"
						onClick={() => setLightbox(null)}
					>
						<button
							onClick={() => setLightbox(null)}
							className="absolute top-4 right-4 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors z-10"
						>
							<X size={18} />
						</button>
						<button
							onClick={(e) => {
								e.stopPropagation();
								prev();
							}}
							className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors z-10"
						>
							<ChevronLeft size={20} />
						</button>
						<button
							onClick={(e) => {
								e.stopPropagation();
								next();
							}}
							className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors z-10"
						>
							<ChevronRight size={20} />
						</button>
						<motion.div
							key={lightbox}
							initial={{ scale: 0.88, opacity: 0 }}
							animate={{ scale: 1, opacity: 1 }}
							exit={{ scale: 0.88, opacity: 0 }}
							transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
							className="relative max-w-md w-full"
							onClick={(e) => e.stopPropagation()}
						>
							<div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl">
								<Image
									src={currentItem.src}
									alt={currentItem.title}
									fill
									className="object-cover object-top"
								/>
								{currentItem.isReal && (
									<div className="absolute top-3 left-3 bg-[#C9A27E] text-white text-[9px] tracking-widest uppercase font-dm px-2.5 py-1 rounded-full">
										Real Work
									</div>
								)}
							</div>
							<div className="mt-4 text-center">
								<p className="font-playfair text-white text-xl">
									{currentItem.title}
								</p>
								<p className="font-dm text-white/45 text-xs uppercase tracking-widest mt-1.5">
									{currentItem.category}
								</p>
								<p className="font-dm text-white/30 text-xs mt-2">
									{currentIndex + 1} / {filtered.length}
								</p>
							</div>
						</motion.div>
					</motion.div>
				)}
			</AnimatePresence>
		</>
	);
}
