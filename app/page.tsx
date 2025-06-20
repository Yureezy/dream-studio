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
		bg: "linear-gradient(0deg,rgb(245, 182, 220) 0%, rgba(0,0,0,0.08) 100%), url(/cafe.png) center/cover no-repeat fixed",
		slides: [
			{
				effect: "",
				content: (
					<h2 className="font-serif text-7xl md:text-8xl font-bold text-white drop-shadow-[0_5px_15px_rgba(0,0,0,0.25)] mb-10 text-center fade-in-heading">
						Le Dream 
						<span className="text-[#e8dcca] drop-shadow-[0_2px_10px_rgba(232,220,202,0.3)] fade-in-span">Café</span>
					</h2>
				)
			},
			{
				effect: "",
				content: (
					<div className="w-full flex">
					  <p className="text-white text-2xl md:text-3xl font-medium mb-10 max-w-3xl fade-in-paragraph text-left"
					     style={{ textShadow: "0 2px 16px rgba(0,0,0,0.25)" }}>
					    Un coffee shop girly et cosy, parfait pour se retrouver, brainstormer, créer ou savourer un moment.
					    <span className="block mt-4 text-[#e8dcca] text-xl italic fade-in-span">Votre bulle créative au cœur de Montpellier</span>
					  </p>
					</div>
				)
			},
			{
				effect: "",
				content: (
					<div className="w-full flex justify-end">
					  <p className="text-white text-xl md:text-2xl mb-10 max-w-2xl fade-in-paragraph text-right">
					    <span className="block font-serif text-2xl mb-6 fade-in-span">Idéal si tu veux :</span>
					    <span className="block mb-3 fade-in-span">Un lieu <span className="font-medium text-[#e8dcca]">Instagramable</span> pour shooter ton contenu lifestyle</span>
					    <span className="block mb-3 fade-in-span">Créer des <span className="font-medium text-[#e8dcca]">reels, vlogs ou interviews</span> dans une ambiance chaleureuse</span>
					    <span className="block mb-3 fade-in-span">Tourner des vidéos dans un décor cosy, avec une belle lumière naturelle</span>
					    <span className="block mb-3 fade-in-span">Travailler ou brainstormer avec d'autres créateurs autour d'un café</span>
					    <span className="block fade-in-span">Disposer d'un espace stylé pour faire vivre ton univers de marque</span>
					    <span className="block mt-8 font-serif text-lg text-[#e8dcca] fade-in-span">Un spot visuel, créatif et intimiste pour donner vie à tes idées en toute liberté</span>
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
						className="text-white text-2xl font-semibold underline underline-offset-4 mt-4"
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
		key: "layonn",
		bg: "linear-gradient(0deg, #E6DED3cc 0%, rgba(0,0,0,0.08) 100%), url(/boutique.jpg) center/cover no-repeat",
		slides: [
			{
				effect: "",
				content: (
					<h2 className="font-serif text-7xl md:text-8xl font-bold text-white drop-shadow-[0_5px_15px_rgba(0,0,0,0.25)] mb-10 text-center fade-in-heading">
						Boutique <span className="text-[#E6DED3] drop-shadow-[0_2px_10px_rgba(230,221,211,0.3)] fade-in-span">LAYONN</span>
					</h2>
				)
			},
			{
				effect: "",
				content: (
					<div className="w-full flex">
					  <p className="text-white text-2xl md:text-3xl font-medium mb-10 max-w-3xl fade-in-paragraph text-left"
					     style={{ textShadow: "0 2px 16px rgba(0,0,0,0.25)" }}>
					    Un corner store élégant mettant en lumière la marque de mode haut de gamme Layonn et ses collections slow fashion.
					    <span className="block mt-4 text-[#E6DED3] text-xl italic fade-in-span">L’expérience shopping unique à Montpellier</span>
					  </p>
					</div>
				)
			},
			{
				effect: "",
				content: (
					<div className="w-full flex justify-end">
					  <p className="text-white text-xl md:text-2xl mb-10 max-w-2xl fade-in-paragraph text-right">
					    <span className="block font-serif text-2xl mb-6 fade-in-span">Notre sélection :</span>
					    <span className="block mb-3 fade-in-span">Parfums, accessoires et prêt-à-porter conçus avec passion et éthique</span>
					    <span className="block mb-3 fade-in-span">Matériaux nobles, design intemporel, production éthique</span>
					    <span className="block mb-3 fade-in-span">Conseils personnalisés et accueil chaleureux</span>
					    <span className="block mt-8 font-serif text-lg text-[#E6DED3] fade-in-span">Un univers raffiné et inspirant, pensé pour durer</span>
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
						className="text-white text-2xl font-semibold underline underline-offset-4 mt-4"
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
	{
		key: "studio-photo",
		bg: "linear-gradient(0deg, #F5F5F0cc 0%, rgba(0,0,0,0.08) 100%), url(/photo.jpg) center/cover no-repeat",
		slides: [
			{
				effect: "",
				content: (
					<h2 className="font-serif text-7xl md:text-8xl font-bold text-stone-800 drop-shadow-[0_5px_15px_rgba(0,0,0,0.15)] mb-10 text-center fade-in-heading">
						Studio <span className="text-[#F5F5F0] drop-shadow-[0_2px_10px_rgba(245,245,240,0.3)] fade-in-span">Photo</span>
					</h2>
				)
			},
			{
				effect: "",
				content: (
					<div className="w-full flex">
						<p className="text-stone-800 text-2xl md:text-3xl font-medium mb-10 max-w-3xl fade-in-paragraph text-left"
						  style={{ textShadow: "0 2px 16px rgba(0,0,0,0.10)" }}>
						  Un espace lumineux, à l'étage et au sous-sol, adapté aux shootings pro, portraits, packshots ou création de contenu social media.
						  <span className="block mt-4 text-[#F5F5F0] text-xl italic fade-in-span">Lumière naturelle, fonds multiples, zones modulables</span>
						</p>
					</div>
				)
			},
			{
				effect: "",
				content: (
					<div className="w-full flex justify-end">
						<p className="text-stone-800 text-xl md:text-2xl mb-10 max-w-2xl fade-in-paragraph text-right">
							<span className="block font-serif text-2xl mb-6 fade-in-span">Idéal si tu es :</span>
							<span className="block mb-3 fade-in-span">Photographe ou vidéaste en quête d’un studio équipé et flexible</span>
							<span className="block mb-3 fade-in-span">Modèle, influenceur ou marque voulant réaliser un shooting pro</span>
							<span className="block mb-3 fade-in-span">Créateur de contenu avec besoin de fonds variés, lumières, réflecteurs</span>
							<span className="block mb-3 fade-in-span">En recherche d’un espace pour tes lookbooks, campagnes ou portraits</span>
							<span className="block mt-8 font-serif text-lg text-[#F5F5F0] fade-in-span">Tout est là pour créer un visuel impactant et professionnel, à ton image</span>
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
						className="text-stone-800 text-2xl font-semibold underline underline-offset-4 mt-4"
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
		bg: "linear-gradient(0deg, #bc43c7cc 0%, rgba(0,0,0,0.08) 100%), url(/podcast.jpg) center/cover no-repeat",
		slides: [
			{
				effect: "",
				content: (
					<h2 className="font-serif text-7xl md:text-8xl font-bold text-white drop-shadow-[0_5px_15px_rgba(0,0,0,0.25)] mb-10 text-center fade-in-heading">
						Studio <span className="text-[#bc43c7] drop-shadow-[0_2px_10px_rgba(188,67,199,0.3)] fade-in-span">Podcast</span>
					</h2>
				)
			},
			{
				effect: "",
				content: (
					<div className="w-full flex">
						<p className="text-white text-2xl md:text-3xl font-medium mb-10 max-w-3xl fade-in-paragraph text-left"
						  style={{ textShadow: "0 2px 16px rgba(0,0,0,0.25)" }}>
						  Un studio podcast premium, sonorisé et esthétique, équipé pour les formats longs, interviews, capsules ou lives.
						  <span className="block mt-4 text-[#bc43c7] text-xl italic fade-in-span">Son pro, multicaméra, régie technique</span>
						</p>
					</div>
				)
			},
			{
				effect: "",
				content: (
					<div className="w-full flex justify-end">
						<p className="text-white text-xl md:text-2xl mb-10 max-w-2xl fade-in-paragraph text-right">
							<span className="block font-serif text-2xl mb-6 fade-in-span">Idéal si tu veux :</span>
							<span className="block mb-3 fade-in-span">Enregistrer un podcast solo ou à plusieurs, dans un décor chaleureux</span>
							<span className="block mb-3 fade-in-span">Créer du contenu vidéo pédagogique ou inspirant (formations, interviews)</span>
							<span className="block mb-3 fade-in-span">Lancer ta chaîne YouTube ou ton format de talk filmé</span>
							<span className="block mb-3 fade-in-span">Te concentrer sur ton contenu : matériel prêt à l’emploi, son & lumière optimisés</span>
							<span className="block mt-8 font-serif text-lg text-[#bc43c7] fade-in-span">Une ambiance feutrée et pro, pour poser ta voix et propulser tes idées</span>
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
						className="text-white text-2xl font-semibold underline underline-offset-4 mt-4"
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
		bg: "linear-gradient(0deg, #C6A76Dcc 0%, rgba(0,0,0,0.08) 100%), url(/reception.jpg) center/cover no-repeat",
		slides: [
			{
				effect: "",
				content: (
					<h2 className="font-serif text-7xl md:text-8xl font-bold text-white drop-shadow-[0_5px_15px_rgba(0,0,0,0.25)] mb-10 text-center fade-in-heading">
						Lieux de <span className="text-[#C6A76D] drop-shadow-[0_2px_10px_rgba(198,167,109,0.3)] fade-in-span">réception</span> & formation
					</h2>
				)
			},
			{
				effect: "",
				content: (
					<div className="w-full flex">
						<p className="text-white text-2xl md:text-3xl font-medium mb-10 max-w-3xl fade-in-paragraph text-left"
						  style={{ textShadow: "0 2px 16px rgba(0,0,0,0.25)" }}>
						  Un espace chaleureux, totalement privatisable pour vos afterworks, lancements de produits, formations et ateliers.
						  <span className="block mt-4 text-[#C6A76D] text-xl italic fade-in-span">Ambiance premium, équipements modernes, équipe dédiée</span>
						</p>
					</div>
				)
			},
			{
				effect: "",
				content: (
					<div className="w-full flex justify-end">
						<p className="text-white text-xl md:text-2xl mb-10 max-w-2xl fade-in-paragraph text-right">
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
						className="text-white text-2xl font-semibold underline underline-offset-4 mt-4"
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
      key={u.key}
      ref={ref}
      className={`relative min-h-screen w-full flex flex-col items-center justify-center snap-start overflow-hidden transition-all duration-1000 ${
        visible ? "fade-in-scale" : "fade-out-scale"
      }`}
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
					<h2 className="font-serif text-4xl font-medium mb-16 text-center text-stone-800 animate-fade-in">
						Nos abonnements exclusifs
					</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">

						{/* Abonnement Creator */}
						{(() => {
							const [ref, visible] = useReveal()
							return (
								<div ref={ref} className={visible ? "fade-in-left" : "opacity-0"}>
									<div className="bg-white rounded-xl shadow-lg p-10 flex flex-col animate-fade-in-up">
										<div className="flex items-center mb-4">
											<span className="text-3xl mr-3">🎙</span>
											<h3 className="font-serif text-2xl font-medium text-stone-800">Abonnement Creator</h3>
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
											<span className="font-semibold text-stone-800">Formules dégressives :</span>
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
									<div className="bg-white rounded-xl shadow-lg p-10 flex flex-col animate-fade-in-up">
										<div className="flex items-center mb-4">
											<span className="text-3xl mr-3">💼</span>
											<h3 className="font-serif text-2xl font-medium text-stone-800">Abonnement Pro & B2B</h3>
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
											<span className="font-semibold text-stone-800">Formules dégressives :</span>
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
						<h2 className="font-serif text-4xl font-medium mb-8 text-stone-800">Contactez-nous</h2>
						<p className="text-stone-600 mb-8 text-lg">
							Une question, un projet ou envie de visiter ? Notre équipe vous répond avec plaisir.
						</p>
						<div className="space-y-6">
							<div className="flex items-center">
								<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#C6A76D] mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h4l3 10h4l3-10h4M4 10l1-2a2 2 0 012-1h10a2 2 0 012 1l1 2M4 10h16M4 10l1 2m0 0l-1 2m1-2h16m-1 2l1 2m-1-2h-16" />
								</svg>
								<div>
									<h3 className="font-medium text-stone-800">Adresse</h3>
									<p className="text-stone-600">11 rue Alexandre Cabanel, 34000 Montpellier</p>
								</div>
							</div>
							<div className="flex items-center">
								<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#C6A76D] mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h4l3 10h4l3-10h4M4 10l1-2a2 2 0 012-1h10a2 2 0 012 1l1 2M4 10h16M4 10l1 2m0 0l-1 2m1-2h16m-1 2l1 2m-1-2h-16" />
								</svg>
								<div>
									<h3 className="font-medium text-stone-800">Téléphone</h3>
									<p className="text-stone-600">+33 6 12 34 56 78</p>
								</div>
							</div>
							<div className="flex items-center">
								<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#C6A76D] mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h4l3 10h4l3-10h4M4 10l1-2a2 2 0 012-1h10a2 2 0 012 1l1 2M4 10h16M4 10l1 2m0 0l-1 2m1-2h16m-1 2l1 2m-1-2h-16" />
								</svg>
								<div>
									<h3 className="font-medium text-stone-800">Instagram</h3>
									<p className="text-stone-600">@dreamstudio_layonn</p>
								</div>
							</div>
						</div>
					</div>
					<div className="bg-[#F5F5F0] p-10 rounded-xl shadow-lg animate-fade-in-up">
						<h3 className="font-serif text-2xl mb-6 text-stone-800">Envoyez-nous un message</h3>
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
							<Button className="mt-8 border-[#C6A76D] text-[#C6A76D] bg-white hover:bg-[#C6A76D] hover:text-white rounded-none">Envoyer</Button>
						</form>
					</div>
				</div>
			</section>

			{/* Citation storytelling */}
			<section className="py-12 bg-transparent flex justify-center">
				<blockquote className="italic text-xl text-[#C6A76D] text-center max-w-2xl mx-auto">
					“Ici, chaque projet commence par une rencontre, chaque rencontre devient une histoire.”
				</blockquote>
			</section>

			{/* Séparateur animé */}
			<div className="w-full flex justify-center my-12">
				<div className="h-1 w-24 rounded-full bg-gradient-to-r from-[#C6A76D] via-[#FAD5E5] to-[#C6A76D] animate-pulse" />
			</div>

			{/* 9. Appel à l'action final */}
			<section className="py-8 bg-white text-center">
				<h2 className="font-serif text-3xl md:text-4xl mb-6 text-stone-800 animate-fade-in-up">
					Prêt à écrire votre histoire ?
				</h2>
				<p className="text-stone-600 text-lg mb-8 animate-fade-in-up">
					Rejoignez la communauté Dream Studio et vivez l’expérience créative à Montpellier.
				</p>
				<Button asChild className="border-[#C6A76D] text-[#C6A76D] bg-white hover:bg-[#C6A76D] hover:text-white rounded-none px-8 py-4 animate-fade-in-up">
					<Link href="/reservation">
						Commencer l’aventure <ChevronRight className="ml-2 h-4 w-4" />
					</Link>
				</Button>
			</section>
		</main>
	)
}
