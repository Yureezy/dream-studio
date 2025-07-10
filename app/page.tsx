"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { useReveal } from "@/hooks/useReveal"
import { Button } from "@/components/ui/button"
import VideoHero from "@/components/video-hero"
const univers = [
	{
		key: "dream-cafe",
		bg: "url(/cafe.png) center/cover no-repeat fixed",
		slides: [
			{
				effect: "",
				content: (
					<div className="flex flex-col items-center w-full max-w-md mx-auto px-2">
						<p className="uppercase text-stone-800 uppercase text-base md:text-lg tracking-widest fade-in-paragraph text-center">
							BIENVENUE AU
						</p>
						<h2 className="font-dream-avenue text-3xl md:text-5xl text-stone-800 uppercase text-center fade-in-heading">
							Dream Studio
						</h2>
						<div className="flex justify-center w-full">
							<span
								className="uppercase border-b-2 border-[#c89511]  text-stone-800 uppercase font-bold tracking-widest fade-in-span bg-white/80 text-base md:text-lg text-center"
								style={{ width: "fit-content" }}
							>
								LÀ OÙ LES RÊVES PRENNENT VIE
							</span>
						</div>
					</div>
				)
			},
			{
				effect: "",
				content: (
					<div className="w-full flex flex justify-center">
					  <p className="text-l md:text-2xl mb-10 py-6 max-w-3xl fade-in-paragraph text-left"
						 style={{ textShadow: "0 2px 16px rgba(0,0,0,0.25)" }}>
						Un espace dans lequel tu pourras laisser place à ta créativité,
						en toute intimité, dans une ambiance chaleureuse et cosy.
					  </p>
					</div>
				)
			},
			{
				effect: "",
				content: (
					<div className="w-full flex justify-center">
					  <p className="uppercase text-l md:text-2xl mb-10 max-w-2xl fade-in-paragraph text-center">
						ici chaque espace <br></br>
						est adapté à tes besoins
					  </p>
					</div>
				)
			},
			{
				effect: "",
				content: (
					<div className="w-full flex flex justify-center">
					  <p className="text-l md:text-2xl mb-10 max-w-3xl fade-in-paragraph text-left"
						 style={{ textShadow: "0 2px 16px rgba(0,0,0,0.25)" }}>
						Alors si tu cherches un endroit où créer du contenu, enregistrer tes formations,
						faire un shooting photo ou même enregistrer un podcast, tu es au bon endroit.
					  </p>
					</div>
				)
			},
			{
				effect: "",
				content: (
					<div className="flex w-full max-w-3xl mx-auto justify-end fade-in-paragraph">
					<Button
						asChild
						variant="link"
						className="text-2xl font-semibold underline underline-offset-4 mt-4"
					>
						<Link href="/dream-cafe">
							Découvrir le Dream Café <ChevronRight className="ml-2 h-6 w-6" />
						</Link>
					</Button>
					</div>
				)
			},
		]
	},
{
	key: "studio-photo",
	bg: "url(/photo.png) center/cover no-repeat fixed",
	slides: [
		{
			effect: "",
			content: (
				<div className="flex flex-col items-center w-full max-w-md mx-auto px-2">
					<h2 className="font-dream-avenue text-3xl md:text-5xl text-stone-800 uppercase text-center fade-in-heading">
						Dream Shoot
					</h2>
					<div className="flex justify-center w-full">
					<p className="uppercase text-stone-800 uppercase text-lg font-bold md:text-l tracking-widest mb-6 fade-in-paragraph text-center">
						l’espace shooting
					</p>
					</div>
				</div>
			)
		},
		{
			effect: "",
			content: (
				<div className="w-full flex justify-center">
					  <p className="text-l md:text-2xl mb-10 py-6 max-w-3xl fade-in-paragraph text-left"
						 style={{ textShadow: "0 2px 16px rgba(0,0,0,0.25)" }}>
					<span className="uppercase font-bold block font-serif text-xl mb-6 fade-in-span border-b-2 border-[#c89511]"
  							style={{ display: "inline-block", width: "fit-content" }}>Idéal si tu es :</span>
						<span className="uppercase font-bold block fade-in-span">photographe <span className=" mb-3 font-light fade-in-span">ou</span> vidéaste</span>
							<span className="font-light fade-in-span ">En quête d’un studio flexible et équipé pour tes projets</span>
						<span className="uppercase font-bold block mt-8 fade-in-span">model.e - marque <span className=" mb-3 font-light fade-in-span">ou</span> influenceur.SE</span>
							<span className="font-light fade-in-span ">Voulant réaliser un shooting professionnel</span>
						<span className="uppercase font-bold block mt-8  fade-in-span">créateur.trice de contenus</span>
							<span className="font-light fade-in-span ">Avec des besoins d’ambiances différentes, fonds variés, lumières, réflecteurs ..</span>

						</p>
				</div>
			)
		},
		{
			effect: "",
			content: (
				<div className="w-full flex justify-center">
					<p className="uppercase font-bold text-l md:text-2xl mb-10 max-w-2xl fade-in-paragraph text-center">
					l’espace idéal pour tes lookbooks, campagnes ou portraits !
					</p>
				</div>
			)
		},
		{
  effect: "",
  content: (
    <div className="w-full flex justify-center">
      <ul
        className="mb-10 py-6 max-w-3xl fade-in-paragraph text-left bg-white/80 border-t-2 border-r-2 border-[#c89511] shadow-xl"
        style={{ textShadow: "0 2px 16px rgba(0,0,0,0.10)" }}
      >
        <li className="px-6 py-2 text-l md:text-l text-stone-800 uppercase">Mur en pierres apparentes</li>
        <li className="px-6 py-2 text-l md:text-l text-stone-800 uppercase">Appareil photo Sony Alpha 7</li>
        <li className="px-6 py-2 text-l md:text-l text-stone-800 uppercase">Trépieds</li>
        <li className="px-6 py-2 text-l md:text-l text-stone-800 uppercase">Lumière 1</li>
        <li className="px-6 py-2 text-l md:text-l text-stone-800 uppercase">Lumière 2</li>
        <li className="px-6 py-2 text-l md:text-l text-stone-800 uppercase">Chaises, tabourets, accessoires ...</li>
      </ul>
    </div>
  )
},
		{
			effect: "",
			content: (
				<div className="flex w-full max-w-3xl mx-auto justify-end fade-in-paragraph">
					<Button
						asChild
						variant="link"
						className="text-2xl font-semibold underline underline-offset-4 mt-4"
					>
						<Link href="/studio-photo">
							Découvrir le Studio Photo <ChevronRight className="ml-2 h-6 w-6" />
						</Link>
					</Button>
				</div>
			)
		},
	]
},
{
	key: "studio-podcast",
	bg: "url(/podcast.png) center/cover no-repeat fixed",
	slides: [
		{
			effect: "",
			content: (
				<div className="flex flex-col items-center w-full max-w-md mx-auto px-2">
					<h2 className="font-dream-avenue text-3xl md:text-5xl text-stone-800 uppercase text-center fade-in-heading">
						Dream Cast’
					</h2>
					<div className="flex justify-center w-full">
						<p className="uppercase text-stone-800 uppercase text-lg font-bold md:text-l tracking-widest mb-6 fade-in-paragraph text-center">
						l’espace Podcast
					</p>
					</div>
				</div>
			)
		},
					{
				effect: "",
				content: (
					<div className="w-full flex justify-center">
						<p className="text-l md:text-2xl mb-10 py-6 max-w-3xl fade-in-paragraph text-left"
							style={{ textShadow: "0 2px 16px rgba(0,0,0,0.25)" }}>
						<span className="uppercase font-bold block font-serif text-2xl mb-6 fade-in-span border-b-2 border-[#c89511]"
								style={{ display: "inline-block", width: "fit-content" }}>idéal si tu veux :</span>
							<span className="uppercase font-bold block fade-in-span">enregistrer un podcast</span>
								<span className="font-light fade-in-span ">En solo ou à plusieurs, ou faire des interviews</span>
							<span className="uppercase font-bold block mt-8 fade-in-span">filmer des vidéos pédagogiques</span>
								<span className="font-light fade-in-span ">Comme de la formation ou des masterclasses</span>
							<span className="uppercase font-bold block mt-8  fade-in-span">créer du contenu inspirant</span>
								<span className="font-light fade-in-span ">Style format talk filmé pour partager tes connaissances</span>

							</p>
					</div>
				)
			},
			{
				effect: "",
				content: (
					<div className="w-full flex justify-center">
						<p className="uppercase font-bold text-l md:text-2xl mb-10 max-w-2xl fade-in-paragraph text-center">
						Le matos est prêt à l’emploi, lumière, son, néons - 
						tout est fait pour que tu te concentres sur ton contenu !
						</p>
					</div>
				)
			},
			{
	effect: "", 
	content: (
		<div className="w-full flex justify-center">
		<ul
			className="mb-10 py-6 max-w-3xl fade-in-paragraph text-left bg-white/80 border-r-2 border-[#c89511] shadow-xl"
			style={{ textShadow: "0 2px 16px rgba(0,0,0,0.10)" }}
		>
			<li className="px-6 py-2 text-l md:text-l text-stone-800 uppercase">Mur en pierres apparentes</li>
			<li className="px-6 py-2 text-l md:text-l text-stone-800 uppercase">Appareil photo Sony Alpha 7</li>
			<li className="px-6 py-2 text-l md:text-l text-stone-800 uppercase">Trépieds</li>
			<li className="px-6 py-2 text-l md:text-l text-stone-800 uppercase">Lumière 1</li>
			<li className="px-6 py-2 text-l md:text-l text-stone-800 uppercase">Lumière 2</li>
			<li className="px-6 py-2 text-l md:text-l text-stone-800 uppercase">Chaises, tabourets, accessoires ...</li>
		</ul>
		</div>
	)
	}, 
		{
			effect: "",
			content: (
				<div className="flex w-full max-w-3xl mx-auto justify-end fade-in-paragraph">
					<Button
						asChild
						variant="link"
						className="text-2xl font-semibold underline underline-offset-4 mt-4"
					>
						<Link href="/studio-podcast">
							Découvrir le Studio Podcast <ChevronRight className="ml-2 h-6 w-6" />
						</Link>
					</Button>
				</div>
			)
		},
	]
},
{
	key: "evenements",
	bg: "url(/reception.jpg) center/cover no-repeat fixed",
	slides: [
		{
			effect: "",
			content: (
				<div className="flex flex-col items-center w-full max-w-md mx-auto px-2">
						<p className="uppercase text-stone-800 uppercase text-base md:text-lg tracking-widest fade-in-paragraph text-center">
						L'ESPACE ÉVÉNEMENTIEL
					</p>
					<h2 className="font-dream-avenue text-3xl md:text-5xl text-stone-800 uppercase text-center fade-in-heading">
						réception & formation
					</h2>
					<div className="flex justify-center w-full">
							<span
								className="uppercase border-b-2 border-[#FFD600]  text-stone-800 uppercase font-bold tracking-widest fade-in-span bg-white/80 text-base md:text-lg text-center"
								style={{ width: "fit-content" }}
							>
							ÉVÉNEMENTS & ATELIERS
						</span>
					</div>
				</div>
			)
		},
		{
			effect: "",
			content: (
			<div className="w-full flex flex justify-center">
					  <p className="text-l md:text-2xl mb-10 py-6 max-w-3xl fade-in-paragraph text-left"
						 style={{ textShadow: "0 2px 16px rgba(0,0,0,0.25)" }}>
						Un espace chaleureux, totalement privatisable pour vos afterworks, lancements de produits, formations et ateliers.
						<span className="block mt-4 text-[#C6A76D] text-l italic fade-in-span">Ambiance premium, équipements modernes, équipe dédiée</span>
					</p>
				</div>
			)
		},
		{
				effect: "",
				content: (
					<div className="w-full flex justify-center">
					  <p className="uppercase text-l md:text-2xl mb-10 max-w-2xl fade-in-paragraph text-center">
						ici chaque espace <br></br>
						est adapté à tes besoins
					  </p>
					</div>
				)
		},
		{
			effect: "",
			content: (
						<div className="w-full flex flex justify-center">
					  <p className="text-l md:text-2xl mb-10 py-6 max-w-3xl fade-in-paragraph text-left"
						 style={{ textShadow: "0 2px 16px rgba(0,0,0,0.25)" }}>
						<span className="block font-serif text-2xl mb-6 fade-in-span">Idéal si tu veux :</span>
						<span className="block mb-3 fade-in-span">Organiser un coaching privé, un shooting VIP ou une masterclass intimiste</span>
						<span className="block mb-3 fade-in-span">Créer une expérience exclusive pour le lancement d’une marque ou d’un produit</span>
						<span className="block mb-3 fade-in-span">Proposer un atelier confidentiel (développement perso, beauté, formation...)</span>
						<span className="block mb-3 fade-in-span">Bénéficier d’un lieu multifonction, adaptable à ton univers</span>
						<span className="block mt-8 font-serif text-lg text-[#C6A76D] fade-in-span">Un espace rare pour connecter, transmettre, vibrer et créer sans distraction</span>
					</p>
				</div>
			)
		},
		{
			effect: "",
			content: (
				<div className="flex w-full max-w-3xl mx-auto justify-end fade-in-paragraph">
					<Button
						asChild
						variant="link"
						className="text-2xl font-semibold underline underline-offset-4 mt-4"
					>
						<Link href="/evenements">
							Découvrir l’espace <ChevronRight className="ml-2 h-6 w-6" />
						</Link>
					</Button>
				</div>
			)
		},
	]
},
{
	key: "layonn",
	bg: "url(/boutique.jpg) center/cover no-repeat fixed ",
	slides: [
		{
			effect: "",
			content: (
				<div className="flex flex-col items-center w-full max-w-md mx-auto px-2">
					<p className="uppercase text-stone-800 uppercase text-base md:text-lg tracking-widest fade-in-paragraph text-center">
						L'UNIVERS MODE & LIFESTYLE
					</p>
					<h2 className="font-dream-avenue text-3xl md:text-5xl text-stone-800 uppercase text-center fade-in-heading">
						Boutique LAYONN
					</h2>
					<div className="flex justify-center w-full">
						<span
							className="uppercase border-b-2 border-[#FFD600] text-stone-800 uppercase font-bold tracking-widest fade-in-span bg-white/80 text-base md:text-lg text-center"
							style={{ width: "fit-content" }}
						>
							SLOW FASHION & CRÉATIVITÉ
						</span>
					</div>
				</div>
			)
		},
		{
			effect: "",
			content: (
				<div className="w-full flex justify-center">
					<p className="text-l md:text-2xl mb-10 py-6 max-w-3xl fade-in-paragraph text-left"
						 style={{ textShadow: "0 2px 16px rgba(0,0,0,0.25)" }}>
						Un corner store élégant mettant en lumière la marque de mode haut de gamme Layonn et ses collections slow fashion.
					</p>
				</div>
			)
		},
		{
			effect: "",
			content: (
				<div className="w-full flex justify-center">
					<p className="uppercase text-l md:text-2xl mb-10 max-w-2xl fade-in-paragraph text-center tracking-widest">
						L’EXPÉRIENCE SHOPPING UNIQUE À MONTPELLIER
					</p>
				</div>
			)
		},
		{
			effect: "",
			content: (
				<div className="w-full flex justify-center">
					<p className="text-l md:text-2xl mb-10 max-w-3xl fade-in-paragraph text-left"
						 style={{ textShadow: "0 2px 16px rgba(0,0,0,0.25)" }}>
						Découvrez nos parfums, accessoires et pièces de prêt-à-porter conçus avec passion et éthique.
					</p>
				</div>
			)
		},
		{
			effect: "",
			content: (
				<div className="flex w-full max-w-3xl mx-auto justify-end fade-in-paragraph">
					<Button
						asChild
						variant="link"
						className="text-2xl font-semibold underline underline-offset-4 mt-4"
					>
						<Link href="https://layonnstyle.com/" target="_blank" rel="noopener noreferrer">
							Découvrir la boutique <ChevronRight className="ml-2 h-6 w-6" />
						</Link>
					</Button>
				</div>
			)
		},
	]
},
]

export default function Home() {
	const [scroll, setScroll] = useState(0)
	useEffect(() => {
		const onScroll = () => {
			const total = document.body.scrollHeight - window.innerHeight
			setScroll((window.scrollY / total) * 100)
		}
		window.addEventListener("scroll", onScroll)
		return () => window.removeEventListener("scroll", onScroll)
	}, [])

	return (
		<main className="flex flex-col scroll-smooth snap-y snap-mandatory">
			{/* Barre de progression storytelling */}
			<div className="fixed top-0 left-0 z-50 h-1 bg-gradient-to-r from-[#C6A76D] via-[#FAD5E5] to-[#C6A76D]" style={{width: `${scroll}%`}} />

			{/* 1. Hero immersif */}
	  <VideoHero />

			{/* Univers storytelling immersif */}
			{univers.map((u) => {
  const [ref, visible] = useReveal()
  return (
	<section
	  id="univers"
	  key={u.key}
	  ref={ref}
	  className="relative min-h-screen w-full flex flex-col items-center justify-center snap-start overflow-hidden transition-all duration-1000"
	  style={{ background: u.bg }}
	>
	  <div className="flex flex-col items-center justify-center w-full h-full px-4 py-24">
		{u.slides.map((slide, idx) => (
		  <div
			key={u.key + "-slide-" + idx}
			className={`w-full ${slide.effect} transition-all duration-1000`}
			style={{ transitionDelay: `${idx * 180}ms` }}
		  >
			{slide.content}
		  </div>
		))}
	  </div>
	</section>
  )
})}

			{/* 6. Abonnements : l'expérience continue */}
			<section className="relative bg-[#F5F5F0] py-24">
				<div className="container mx-auto px-4">
					<h2 className="font-serif text-4xl font-medium mb-16 text-center text-stone-800 uppercase animate-fade-in">
						Nos abonnements exclusifs
					</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">

						{/* Abonnement Creator */}
						{(() => {
							const [ref, visible] = useReveal()
							return (
								<div ref={ref} className={visible ? "fade-in-left" : "opacity-0"}>
									<div className="bg-white rounded-l shadow-lg p-10 flex flex-col animate-fade-in-up">
										<div className="flex items-center mb-4">
											<span className="text-3xl mr-3">🎙</span>
											<h3 className="font-serif text-2xl font-medium text-stone-800 uppercase">Abonnement Creator</h3>
										</div>
										<p className="text-[#C6A76D] font-bold mb-2">Dès 39,90€/mois • Limité à 40 membres</p>
										<p className="text-stone-700 mb-4">
											Un abonnement exclusif pour créateurs de contenu, artistes, influenceurs ou entrepreneurs passionnés. Tournez, shootez, connectez-vous et vibrez au cœur du Dream Studio à Montpellier.
										</p>
										<ul className="mb-4 text-stone-700 space-y-2">
											<li>• 1h/semaine (4h/mois) dans l’espace de votre choix : studio podcast, studio photo/vidéo, Dream Coffee</li>
											<li>• 1 boisson chaude + 1 boisson fraîche offertes à chaque venue</li>
											<li>• Accès aux afterworks du Studio (invitation privée)</li>
											<li>• -20% on all consumables at Dream Coffee</li>
											<li>• -20% on the LAYONN brand (in store)</li>
										</ul>
										<div className="mb-4">
											<span className="font-semibold text-stone-800 uppercase">Formules dégressives :</span>
											<ul className="ml-4 text-stone-700">
												<li>• 1 mois : 59,90€ TTC</li>
												<li>• 6 mois : 49,90€/mois</li>
												<li>• 12 mois : 39,90€/mois</li>
											</ul>
										</div>
										<p className="text-sm text-stone-500 mb-2">🚨 Seulement 40 abonnements disponibles pour garantir une expérience premium et fluide.</p>
									</div>
								</div>
							)
						})()}

						{/* Abonnement Pro & B2B */}
						{(() => {
							const [ref, visible] = useReveal()
							return (
								<div ref={ref} className={visible ? "fade-in-right" : "opacity-0"}>
									<div className="bg-white rounded-l shadow-lg p-10 flex flex-col animate-fade-in-up">
										<div className="flex items-center mb-4">
											<span className="text-3xl mr-3">💼</span>
											<h3 className="font-serif text-2xl font-medium text-stone-800 uppercase">Abonnement Pro & B2B</h3>
										</div>
										<p className="text-[#C6A76D] font-bold mb-2">Dès 159€/mois HT • Limité à 20 entreprises</p>
										<p className="text-stone-700 mb-4">
											Pensé pour les entrepreneurs, agences, freelances et marques qui veulent produire du contenu, gagner en notoriété et profiter d’un écosystème dynamique.
										</p>
										<ul className="mb-4 text-stone-700 space-y-2">
											<li>• 1h d’accès/semaine à nos espaces (podcast, shooting ou réunion)</li>
											<li>• Boissons offertes à chaque visite (jusqu’à 2 pers.)</li>
											<li>• 1 mise en avant mensuelle sur notre Instagram (interview ou capsule vidéo)</li>
											<li>• -20% sur les consommations au Dream Coffee</li>
											<li>• -20% sur la marque LAYONN (mode et accessoires)</li>
											<li>• 1 événement ou workshop/trimestre à tarif préférentiel</li>
											<li>• Accès aux afterworks professionnels du Studio</li>
										</ul>
										<div className="mb-4">
											<span className="font-semibold text-stone-800 uppercase">Formules dégressives :</span>
											<ul className="ml-4 text-stone-700">
												<li>• 1 mois : 199€ HT</li>
												<li>• 6 mois : 179€/mois</li>
												<li>• 12 mois : 159€/mois</li>
											</ul>
										</div>
										<p className="text-sm text-stone-500 mb-2">➕ Options disponibles : montage, régie, prestations créatives sur mesure.</p>
										<p className="text-sm text-stone-500">🚨 Seulement 20 entreprises pour garantir un accompagnement personnalisé.</p>
									</div>
								</div>
							)
						})()}
					</div>
				</div>
			</section>

			{/* 7. Appel à l’action réservation */}
			{/* <ReservationCta /> */}

			{/* 8. Contact final, conclusion de l’histoire */}
			<section className="relative py-12 bg-gradient-to-br from-white via-[#F5F5F0] to-[#E6DED3]">
				<div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-16">
					<div>
						<h2 className="font-serif text-4xl font-medium mb-8 text-stone-800 uppercase">Contactez-nous</h2>
						<p className="text-stone-600 mb-8 text-lg">
							Une question, un projet ou envie de visiter ? Notre équipe vous répond avec plaisir.
						</p>
						<div className="space-y-6">
							<div className="flex items-center">
								<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#C6A76D] mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h4l3 10h4l3-10h4M4 10l1-2a2 2 0 012-1h10a2 2 0 012 1l1 2M4 10h16M4 10l1 2m0 0l-1 2m1-2h16m-1 2l1 2m-1-2h-16" />
								</svg>
								<div>
									<h3 className="font-medium text-stone-800 uppercase">Adresse</h3>
									<p className="text-stone-600">11 rue Alexandre Cabanel, 34000 Montpellier</p>
								</div>
							</div>
							<div className="flex items-center">
								<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#C6A76D] mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h4l3 10h4l3-10h4M4 10l1-2a2 2 0 012-1h10a2 2 0 012 1l1 2M4 10h16M4 10l1 2m0 0l-1 2m1-2h16m-1 2l1 2m-1-2h-16" />
								</svg>
								<div>
									<h3 className="font-medium text-stone-800 uppercase">Téléphone</h3>
									<p className="text-stone-600">+33 6 12 34 56 78</p>
								</div>
							</div>
							<div className="flex items-center">
								<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#C6A76D] mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h4l3 10h4l3-10h4M4 10l1-2a2 2 0 012-1h10a2 2 0 012 1l1 2M4 10h16M4 10l1 2m0 0l-1 2m1-2h16m-1 2l1 2m-1-2h-16" />
								</svg>
								<div>
									<h3 className="font-medium text-stone-800 uppercase">Instagram</h3>
									<p className="text-stone-600">@dreamstudio_layonn</p>
								</div>
							</div>
						</div>
					</div>
					<div className="bg-[#F5F5F0] p-10 rounded-l shadow-lg animate-fade-in-up">
						<h3 className="font-serif text-2xl mb-6 text-stone-800 uppercase">Envoyez-nous un message</h3>
						<form className="space-y-4">
							<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
								<div>
									<label htmlFor="name" className="block text-sm font-medium text-stone-600 mb-1">
										Nom
									</label>
									<input
										type="text"
										id="name"
										className="w-full p-3 border border-stone-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#C6A76D]"
									/>
								</div>
								<div>
									<label htmlFor="email" className="block text-sm font-medium text-stone-600 mb-1">
										Email
									</label>
									<input
										type="email"
										id="email"
										className="w-full p-3 border border-stone-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#C6A76D]"
									/>
								</div>
							</div>
							<div>
								<label htmlFor="subject" className="block text-sm font-medium text-stone-600 mb-1">
									Sujet
								</label>
								<input
									type="text"
									id="subject"
									className="w-full p-3 border border-stone-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#C6A76D]"
								/>
							</div>
							<div>
								<label htmlFor="message" className="block text-sm font-medium text-stone-600 mb-1">
									Message
								</label>
								<textarea
									id="message"
									rows={4}
									className="w-full p-3 border border-stone-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#C6A76D]"
								></textarea>
							</div>
							<Button className="mt-8 border-[#C6A76D] text-[#C6A76D] bg-white hover:bg-[#C6A76D] hover:rounded-none">Envoyer</Button>
						</form>
					</div>
				</div>
			</section>

			{/* Citation storytelling */}
			<section className="py-12 bg-transparent flex justify-center">
				<blockquote className="italic text-l text-[#C6A76D] text-center max-w-2xl mx-auto">
					“Ici, chaque projet commence par une rencontre, chaque rencontre devient une histoire.”
				</blockquote>
			</section>

			{/* Séparateur animé */}
			<div className="w-full flex justify-center my-12">
				<div className="h-1 w-24 rounded-full bg-gradient-to-r from-[#C6A76D] via-[#FAD5E5] to-[#C6A76D] animate-pulse" />
			</div>

			{/* 9. Appel à l'action final */}
			<section className="py-8 bg-white text-center">
				<h2 className="font-serif text-3xl md:text-4xl mb-6 text-stone-800 uppercase animate-fade-in-up">
					Prêt à écrire votre histoire ?
				</h2>
				<p className="text-stone-600 text-lg mb-8 animate-fade-in-up">
					Rejoignez la communauté Dream Studio et vivez l’expérience créative à Montpellier.
				</p>
				<Button asChild className="border-[#C6A76D] text-[#C6A76D] bg-white hover:bg-[#C6A76D] hover:rounded-none px-8 py-4 animate-fade-in-up">
					<Link href="/reservation">
						Commencer l’aventure <ChevronRight className="ml-2 h-4 w-4" />
					</Link>
				</Button>
			</section>
		</main>
	)
}
