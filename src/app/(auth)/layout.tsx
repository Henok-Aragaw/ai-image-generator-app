"use client";
import type { ReactNode } from "react";
import { Providers } from "~/components/providers";
import { Sparkles } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function AuthLayout({ children }: { children: ReactNode }) {
	return (
		<Providers>
			<div className="flex min-h-screen bg-background">
				{/* Left Side - Branding */}
				<div className="relative hidden lg:flex w-1/2 flex-col border-r bg-muted/60 p-10 overflow-hidden">
					{/* Background gradient overlay */}
					<div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent z-0" />

					{/* Logo */}
					<div className="relative z-10 flex items-center gap-2">
						<Sparkles className="size-6 text-primary" />
            <Link
            href={"/"}
            >
              <p className="text-xl font-semibold text-foreground font-heading">Pixora</p>
            </Link>
					</div>

					{/* Quote */}
					<div className="relative z-10 mt-auto max-w-md">
						<blockquote className="space-y-2 text-foreground/80">
							<p className="text-xl leading-relaxed">
								&ldquo;Pixora has transformed the way I edit and upscale images
								with AI — saving me hours every day.&rdquo;
							</p>
							<footer className="font-mono text-sm font-semibold">
								~ Client
							</footer>
						</blockquote>
					</div>

					{/* Animated Background */}
					<div className="absolute inset-0 z-0">
						<FloatingPaths position={1} />
						<FloatingPaths position={-1} />
					</div>
				</div>
				{/* Right Side - Auth Form */}
				<div className="flex flex-1 flex-col justify-center px-6 py-12 lg:px-16 bg-background relative z-10">
					<div className="sm:mx-auto sm:w-full sm:max-w-md">
						{/* Mobile Logo */}
						<div className="mb-8 text-center lg:hidden">
							<Link href="/" className="inline-flex items-center gap-2">
								<div className="flex h-10 w-10 items-center justify-center rounded-lg shadow-lg">
									<Sparkles className="h-6 w-6" />
								</div>
								<span className="bg-clip-text text-xl font-bold font-heading">
									Pixora
								</span>
							</Link>
						</div>

						{/* Auth Form Container */}
						<div>{children}</div>

						{/* Footer Link */}
						<p className="mt-6 text-center text-sm text-slate-600">
							Back to{" "}
							<Link
								href="/"
								className="font-medium text-blue-600 transition-colors hover:text-blue-500"
							>
								homepage
							</Link>
						</p>
					</div>
				</div>
			</div>
		</Providers>
	);
}

function FloatingPaths({ position }: { position: number }) {
	const paths = Array.from({ length: 36 }, (_, i) => ({
		id: i,
		d: `M-${380 - i * 5 * position} -${189 + i * 6}C-${
			380 - i * 5 * position
		} -${189 + i * 6} -${312 - i * 5 * position} ${216 - i * 6} ${
			152 - i * 5 * position
		} ${343 - i * 6}C${616 - i * 5 * position} ${470 - i * 6} ${
			684 - i * 5 * position
		} ${875 - i * 6} ${684 - i * 5 * position} ${875 - i * 6}`,
		width: 0.4 + i * 0.03,
	}));

	return (
		<div className="absolute inset-0 overflow-hidden">
			<svg
				className="h-full w-full text-slate-700/30 dark:text-slate-200/20"
				viewBox="0 0 696 316"
				fill="none"
				preserveAspectRatio="xMidYMid slice"
			>
				<title>Background Paths</title>
				{paths.map((path) => (
					<motion.path
						key={path.id}
						d={path.d}
						stroke="currentColor"
						strokeWidth={path.width}
						initial={{ pathLength: 0.3, opacity: 0.3 }}
						animate={{
							pathLength: 1,
							opacity: [0.2, 0.4, 0.2],
							pathOffset: [0, 1, 0],
						}}
						transition={{
							duration: 25 + Math.random() * 15,
							repeat: Number.POSITIVE_INFINITY,
							ease: "linear",
						}}
					/>
				))}
			</svg>
		</div>
	);
}
