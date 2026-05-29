"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCTA from '@/components/sections/contact/ContactCTA';
import FeatureCardTwentyThree from '@/components/sections/feature/FeatureCardTwentyThree';
import FooterCard from '@/components/sections/footer/FooterCard';
import HeroCarouselLogo from '@/components/sections/hero/heroCarouselLogo/HeroCarouselLogo';
import InlineImageSplitTextAbout from '@/components/sections/about/InlineImageSplitTextAbout';
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import ProductCardFour from '@/components/sections/product/ProductCardFour';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import TestimonialCardThirteen from '@/components/sections/testimonial/TestimonialCardThirteen';
import { Facebook, Instagram, MessageSquare } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="hover-magnetic"
        defaultTextAnimation="reveal-blur"
        borderRadius="soft"
        contentWidth="smallMedium"
        sizing="large"
        background="aurora"
        cardStyle="inset"
        primaryButtonStyle="gradient"
        secondaryButtonStyle="glass"
        headingFontWeight="extrabold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleFullscreen
      navItems={[
        {
          name: "Home",
          id: "#hero",
        },
        {
          name: "About",
          id: "#about",
        },
        {
          name: "Menu",
          id: "#menu",
        },
        {
          name: "Reservations",
          id: "#reservations",
        },
        {
          name: "Gallery",
          id: "#gallery",
        },
        {
          name: "Contact",
          id: "#contact",
        },
      ]}
      brandName="The 716 Cafe & Restaurant"
      bottomLeftText="EN / FR"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroCarouselLogo
      logoText="716"
      description="Where every cup tells a story / Là où chaque tasse raconte une histoire."
      buttons={[
        {
          text: "View Menu",
          href: "#menu",
        },
        {
          text: "Reserve a Table",
          href: "#reservations",
        },
      ]}
      slides={[
        {
          imageSrc: "http://img.b2bpic.net/free-photo/barista-making-cappuccino_1150-8043.jpg",
          imageAlt: "Dark cafe interior with moody lighting",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/delicious-products-arrangement-bakery_23-2150273142.jpg",
          imageAlt: "Latte art on a coffee cup",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/front-view-delicious-cupcake-with-copy-space_23-2148769222.jpg",
          imageAlt: "Elegant restaurant table setting",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/coffee-shop-cafe-restaurant-bistro-freshness-concept_53876-41421.jpg",
          imageAlt: "Cozy cafe with warm glow",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/wicker-basket-with-bread-spike-millet_140725-3047.jpg",
          imageAlt: "Delicious breakfast spread",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/delicious-fruit-tart-with-variety-fresh-berries-top-creamy-custard-filling_9975-124441.jpg",
          imageAlt: "Fine wine bottle and glasses",
        },
      ]}
      autoplayDelay={4000}
      showDimOverlay={true}
    />
  </div>

  <div id="about" data-section="about">
      <InlineImageSplitTextAbout
      useInvertedBackground={true}
      heading={[
        {
          type: "text",
          content: "Our Story & Our Passion / Notre Histoire & Notre Passion",
        },
      ]}
    />
  </div>

  <div id="menu" data-section="menu">
      <ProductCardFour
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={false}
      products={[
        {
          id: "menu-1",
          name: "Eggs Benedict",
          price: "$18",
          variant: "Breakfast / Déjeuner",
          imageSrc: "http://img.b2bpic.net/free-photo/delicious-avocado-toast-with-poached-eggs_23-2152010308.jpg",
          imageAlt: "Classic Eggs Benedict with hollandaise",
        },
        {
          id: "menu-2",
          name: "Club Sandwich",
          price: "$16",
          variant: "Lunch / Dîner",
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-melted-cheese-sandwich_23-2149286863.jpg",
          imageAlt: "Gourmet Club Sandwich with fries",
        },
        {
          id: "menu-3",
          name: "Filet Mignon",
          price: "$42",
          variant: "Dinner / Souper",
          imageSrc: "http://img.b2bpic.net/free-photo/plate-salmon-steak-with-broccoli_181624-32092.jpg",
          imageAlt: "Filet Mignon with roasted vegetables",
        },
        {
          id: "menu-4",
          name: "Latte Art",
          price: "$6",
          variant: "Drinks / Boissons",
          imageSrc: "http://img.b2bpic.net/free-photo/copy-smell-romantic-espresso-nice_1232-3947.jpg",
          imageAlt: "Beautiful Latte Art in a coffee cup",
        },
        {
          id: "menu-5",
          name: "Pain au Chocolat",
          price: "$5",
          variant: "Pastries / Pâtisseries",
          imageSrc: "http://img.b2bpic.net/free-photo/fresh-tasty-homemade-croissants-with-raspberry-jam-grey-white-french-pastry_114579-4963.jpg",
          imageAlt: "Freshly baked Pain au Chocolat",
        },
        {
          id: "menu-6",
          name: "Crème Brûlée",
          price: "$12",
          variant: "Dessert / Dessert",
          imageSrc: "http://img.b2bpic.net/free-photo/top-view-ravioli-pasta-with-fried-bacon-served-green-plate_23-2148246846.jpg",
          imageAlt: "Classic Crème Brûlée with caramelized sugar",
        },
      ]}
      title="Featured Delights / Nos Spécialités"
      description="Explore a selection from our Breakfast (Déjeuner), Lunch (Dîner), Dinner (Souper), and Drinks (Boissons) menus. For a complete experience, download our full menu below."
      buttons={[
        {
          text: "Download Full Menu (PDF)",
          href: "/menu.pdf",
        },
      ]}
    />
  </div>

  <div id="gallery" data-section="gallery">
      <FeatureCardTwentyThree
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      features={[
        {
          id: "gal-1",
          title: "Gourmet Cuisine",
          tags: [
            "Food",
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/caramel-chocolate-sauce-drizzling-dessert_84443-94462.jpg",
          imageAlt: "Close up of an elegant gourmet dessert",
        },
        {
          id: "gal-2",
          title: "Signature Drinks",
          tags: [
            "Drinks",
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/elegant-vegan-alcohol-arrangement_23-2149337730.jpg",
          imageAlt: "Cocktail drink in a sophisticated bar ambiance",
        },
        {
          id: "gal-3",
          title: "Cozy Interior",
          tags: [
            "Ambiance",
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/smiling-aged-couple-sitting-cafe-with-mugs-tea_23-2148216498.jpg",
          imageAlt: "Cozy cafe seating area with warm lighting",
        },
        {
          id: "gal-4",
          title: "Artisan Coffee",
          tags: [
            "Coffee",
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/vertical-high-angle-shot-cappuccino-blue-wooden-surface_181624-41113.jpg",
          imageAlt: "Latte art in a ceramic cup",
        },
        {
          id: "gal-5",
          title: "Fresh Pastries",
          tags: [
            "Pastries",
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-tasty-croissants_1232-1242.jpg",
          imageAlt: "Assortment of freshly baked croissants and pastries",
        },
        {
          id: "gal-6",
          title: "Dining Experience",
          tags: [
            "Experience",
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-couple-cooking-together_23-2150405850.jpg",
          imageAlt: "Happy customers enjoying their meal at the restaurant",
        },
      ]}
      title="Our Gallery / Notre Galerie"
      description="A visual glimpse into our world – from exquisite dishes and handcrafted coffees to our warm and inviting interior. / Un aperçu de notre univers – des plats exquis aux cafés artisanaux, en passant par notre intérieur chaleureux et accueillant."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardThirteen
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "1",
          name: "Isabelle L.",
          handle: "@foodie_isabelle",
          testimonial: "The 716 is my new favorite spot! The coffee is divine, and the brunch is simply unparalleled. A true gem!",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/supportive-cute-blond-girlfriend-cheering-liking-interesting-concept-cool-idea-thumbsup-smiling_1258-229592.jpg",
          imageAlt: "Isabelle L.",
        },
        {
          id: "2",
          name: "Marc-André D.",
          handle: "@mtl_eats",
          testimonial: "From the moment you walk in, the atmosphere is just perfect. Dinner was exquisite, and the service was impeccable. Highly recommend!",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/enjoying-free-time-coffee-some-news_329181-2788.jpg",
          imageAlt: "Marc-André D.",
        },
        {
          id: "3",
          name: "Chloé P.",
          handle: "@cozycorner_life",
          testimonial: "I love coming here to work and enjoy a pastry with my latte. It's so peaceful and the staff are always so welcoming.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/smiling-young-indian-woman-loving-dessert_1262-5797.jpg",
          imageAlt: "Chloé P.",
        },
        {
          id: "4",
          name: "Antoine R.",
          handle: "@gourmet_explor",
          testimonial: "The dinner menu is creative and absolutely delicious. Every dish is a work of art. A must-visit for any food lover!",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/adults-enjoying-mexican-food_23-2149663853.jpg",
          imageAlt: "Antoine R.",
        },
        {
          id: "5",
          name: "Sophie G.",
          handle: "@local_reviews",
          testimonial: "A fantastic neighborhood spot with amazing food and even better coffee. The ambiance makes you want to stay all day.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/smiling-young-male-baker-weighing-knead-dough-scale-commercial-kitchen_23-2148189058.jpg",
          imageAlt: "Sophie G.",
        },
        {
          id: "6",
          name: "Charles B.",
          handle: "@happy_diner",
          testimonial: "The 716 never disappoints. Whether it's a quick coffee or a full dinner, the quality and experience are consistently excellent.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/cute-asian-girl-barista-cafe-processing-contactless-payment-insert-credit-card-into-pos-terminal_1258-199469.jpg",
          imageAlt: "Charles B.",
        },
      ]}
      showRating={true}
      title="What Our Guests Say / Ce Que Nos Clients Disent"
      description="Hear from those who have savored our dishes and enjoyed our ambiance. Your satisfaction is our greatest reward. / Écoutez ceux qui ont savouré nos plats et apprécié notre ambiance. Votre satisfaction est notre plus belle récompense."
    />
  </div>

  <div id="social-proof" data-section="social-proof">
      <SocialProofOne
      textboxLayout="default"
      useInvertedBackground={true}
      names={[
        "Local Foodie Magazine",
        "Montreal Eats Guide",
        "Taste of QC",
        "Dining Reviewers",
        "Chef's Choice Blog",
        "Urban Table Guide",
        "The Daily Plate",
      ]}
      title="As Seen In / Vu Dans"
      description="Proudly featured in leading local publications and culinary guides. / Fièrement présenté dans les principales publications locales et guides culinaires."
    />
  </div>

  <div id="reservations" data-section="reservations">
      <ContactCTA
      useInvertedBackground={true}
      background={{
        variant: "radial-gradient",
      }}
      tag="Book Your Table / Réservez Votre Table"
      title="Experience The 716 / Vivez l'expérience 716"
      description="Secure your spot for an unforgettable dining experience at our cozy café and restaurant. We look forward to welcoming you!"
      buttons={[
        {
          text: "Reserve Now",
          href: "https://www.example.com/reservation",
        },
      ]}
    />
  </div>

  <div id="contact" data-section="contact">
      <FeatureCardTwentyThree
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={true}
      features={[
        {
          id: "location",
          title: "Our Location",
          tags: [
            "Address",
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/table-set-dinning-table_1339-6425.jpg",
          imageAlt: "Exterior view of The 716 Cafe & Restaurant",
        },
        {
          id: "hours",
          title: "Opening Hours",
          tags: [
            "Schedule",
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/table-set-dinning-table_1339-3436.jpg",
          imageAlt: "Interior of the cafe with warm lighting",
        },
        {
          id: "contact-info",
          title: "Get in Touch",
          tags: [
            "Contact",
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/group-friends-having-lunch-together-restaurant_23-2150520106.jpg",
          imageAlt: "A phone and email icon",
        },
      ]}
      title="Visit Us & Contact / Visitez-Nous & Contactez-Nous"
      description="Find our cozy spot and discover our opening hours. We're here to serve you! / Trouvez notre coin douillet et découvrez nos heures d'ouverture. Nous sommes là pour vous servir!"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterCard
      logoText="716"
      copyrightText="© 2024 The 716 Cafe & Restaurant / Café Resto Le 716. All rights reserved."
      socialLinks={[
        {
          icon: Instagram,
          href: "https://instagram.com/the716cafe",
          ariaLabel: "Instagram",
        },
        {
          icon: Facebook,
          href: "https://facebook.com/the716cafe",
          ariaLabel: "Facebook",
        },
        {
          icon: MessageSquare,
          href: "https://www.tripadvisor.com/Restaurant_Review-g155032-d1234567-Reviews-The_716_Cafe_Restaurant-Montreal_Quebec.html",
          ariaLabel: "TripAdvisor",
        },
      ]}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
