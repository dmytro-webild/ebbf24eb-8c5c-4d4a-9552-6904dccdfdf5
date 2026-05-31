"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FaqBase from '@/components/sections/faq/FaqBase';
import FeatureCardNine from '@/components/sections/feature/FeatureCardNine';
import FooterMedia from '@/components/sections/footer/FooterMedia';
import HeroSplitDualMedia from '@/components/sections/hero/HeroSplitDualMedia';
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import TestimonialCardSix from '@/components/sections/testimonial/TestimonialCardSix';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="text-stagger"
        defaultTextAnimation="entrance-slide"
        borderRadius="soft"
        contentWidth="compact"
        sizing="mediumLargeSizeMediumTitles"
        background="none"
        cardStyle="outline"
        primaryButtonStyle="shadow"
        secondaryButtonStyle="layered"
        headingFontWeight="medium"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleCentered
      navItems={[
        {
          name: "Home",          id: "#home"},
        {
          name: "About Us",          id: "#about"},
        {
          name: "Services",          id: "#features"},
        {
          name: "Testimonials",          id: "#testimonials"},
        {
          name: "FAQs",          id: "#faq"},
        {
          name: "Contact",          id: "#contact"},
      ]}
      button={{
        text: "Get a Free Quote",        href: "#contact"}}
      brandName="Brazilian Cleaning Services LLC"
    />
  </div>

  <div id="home" data-section="home">
      <HeroSplitDualMedia
      background={{
        variant: "plain"}}
      title="Immaculate Clean, Every Time. Experience the Brazilian Difference."
      description="Dedicated to providing top-tier cleaning services in Sarasota. Our trusted team ensures your home shines, just like ours."
      tag="Sarasota's Top-Rated Cleaning Service"
      tagAnimation="none"
      buttons={[
        {
          text: "Get Your Free Quote",          href: "#contact"},
      ]}
      buttonAnimation="none"
      mediaItems={[
        {
          imageSrc: "http://img.b2bpic.net/free-photo/full-view-happy-woman-with-flowers-home_197531-33087.jpg",          imageAlt: "Sparkling clean modern kitchen"},
        {
          imageSrc: "http://img.b2bpic.net/free-photo/woman-with-sponge-rubber-gloves-cleaning-house_1157-45533.jpg",          imageAlt: "Professional cleaning supplies and a clean surface"},
      ]}
      mediaAnimation="opacity"
      rating={5}
      ratingText="from 11 happy clients"
    />
  </div>

  <div id="about" data-section="about">
      <TextSplitAbout
      useInvertedBackground={true}
      title="Our Commitment to a Sparkling Home"
      description={[
        "At Brazilian Cleaning Services LLC, we believe a clean home is a happy home. Founded by passionate entrepreneurs, our team brings meticulous attention to detail and a personalized touch to every space we clean. We're not just cleaning your home; we're nurturing your peace of mind, treating your space with the same care as our own.",        "With over a decade of experience in Sarasota, we've built a reputation for reliability, honesty, and unparalleled quality. Our highly-trained professionals are punctual, respectful, and committed to exceeding your expectations with every visit."]}
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardNine
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      features={[
        {
          title: "Residential Deep Cleaning",          description: "Experience a thorough and revitalizing clean that reaches every nook and cranny, leaving your home sparkling.",          phoneOne: {
            imageSrc: "http://img.b2bpic.net/free-photo/white-towel-bed-decoration-bedroom-interior_1339-7131.jpg",            imageAlt: "Deep cleaning a kitchen"},
          phoneTwo: {
            imageSrc: "http://img.b2bpic.net/free-photo/shaving-razors-body-care-copy-space_23-2148799879.jpg",            imageAlt: "Vacuuming a living room"},
        },
        {
          title: "Regular Maintenance",          description: "Keep your home consistently fresh and tidy with our scheduled cleaning services, customized to your frequency preferences.",          phoneOne: {
            imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-man-disinfecting-fridge_23-2148563322.jpg",            imageAlt: "Tidied living room with fresh flowers"},
          phoneTwo: {
            imageSrc: "http://img.b2bpic.net/free-photo/woman-reading-book-her-bedroom_53876-132375.jpg",            imageAlt: "Clean and organized bedroom"},
        },
        {
          title: "Move-In/Move-Out Cleaning",          description: "Ensure a seamless transition with our detailed cleaning services for when you're moving in or out, leaving properties spotless.",          phoneOne: {
            imageSrc: "http://img.b2bpic.net/free-photo/couple-with-cardboard-boxes-their-new-home_23-2149086870.jpg",            imageAlt: "Empty, spotless room ready for new tenants"},
          phoneTwo: {
            imageSrc: "http://img.b2bpic.net/free-photo/blurred-shower_1203-1099.jpg",            imageAlt: "Clean, sanitized bathroom"},
        },
      ]}
      showStepNumbers={true}
      title="Comprehensive Cleaning Solutions Tailored for You"
      description="We offer a range of services designed to fit your unique needs, from routine maintenance to deep, transformative cleans."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardSix
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={true}
      testimonials={[
        {
          id: "1",          name: "Kimberly Miele",          handle: "Client in Sarasota",          testimonial: "Maria has cleaned my home for over 12 years. She is reliable, honest, and cleans the house like it's her own. She and her team are the best! I highly recommend her!",          imageSrc: "http://img.b2bpic.net/free-photo/nervous-hesitant-attractive-worried-blond-woman-cringing-frowning-clench-teeth-pointing-seek_1258-134470.jpg",          imageAlt: "Kimberly Miele"},
        {
          id: "2",          name: "Nadia Bowen",          handle: "Local Guide",          testimonial: "Rita has been a phenomenal housekeeper. Every time she leaves, my house is spotless and looks completely different from when she arrived. Plus, Rita is always on time and super professional. So happy to have found her. Highly recommend her services!",          imageSrc: "http://img.b2bpic.net/free-photo/young-cute-female-posing-indoor_344912-984.jpg",          imageAlt: "Nadia Bowen"},
        {
          id: "3",          name: "Juliana Sa",          handle: "Local Guide",          testimonial: "Maria is, hands down, the best home cleaning service you can have. 5 stars are not enough for her and her team. She is knowledgeable, always on time, and most importantly, she leaves the house sparkling.",          imageSrc: "http://img.b2bpic.net/free-photo/picture-brunette-girl-winks-shows-peace-sign-happy-woman-green-tee-denim-outfit-smiling-white-backdrop_197531-29007.jpg",          imageAlt: "Juliana Sa"},
        {
          id: "4",          name: "David R.",          handle: "Sarasota Resident",          testimonial: "The team at Brazilian Cleaning Services transformed my home! Professional, efficient, and incredibly thorough. I highly recommend them for anyone seeking reliable cleaning.",          imageSrc: "http://img.b2bpic.net/free-photo/crazy-businessman-worried-expression_1194-3826.jpg",          imageAlt: "David R."},
        {
          id: "5",          name: "The Johnson Family",          handle: "Happy Homeowners",          testimonial: "Exceptional service from start to finish. Our apartment has never looked better. The attention to detail is truly impressive, and they are always a pleasure to work with.",          imageSrc: "http://img.b2bpic.net/free-photo/portrait-happy-family-kitchen-decorated-christmas_93675-134984.jpg",          imageAlt: "The Johnson Family"},
        {
          id: "6",          name: "Sarah P.",          handle: "Local Business Owner",          testimonial: "Finding a trustworthy cleaning service can be hard, but I hit the jackpot with Brazilian Cleaning Services. They consistently deliver an outstanding clean, and I appreciate their consistent professionalism.",          imageSrc: "http://img.b2bpic.net/free-photo/close-up-young-businesswoman_23-2149153830.jpg",          imageAlt: "Sarah P."},
      ]}
      title="Hear From Our Happy Clients"
      description="Discover why clients trust Brazilian Cleaning Services LLC for their immaculate homes."
    />
  </div>

  <div id="social-proof" data-section="social-proof">
      <SocialProofOne
      textboxLayout="default"
      useInvertedBackground={false}
      names={[
        "Sarasota Families",        "Local Businesses",        "Property Managers",        "Real Estate Agents",        "Busy Professionals",        "Community Centers",        "Holiday Rentals"]}
      title="Trusted by Families & Businesses in Sarasota"
      description="Our dedication to quality and reliability has earned the trust of diverse clients across Sarasota."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqBase
      textboxLayout="default"
      useInvertedBackground={true}
      faqs={[
        {
          id: "1",          title: "What cleaning services do you offer?",          content: "We provide deep cleaning, regular maintenance, move-in/move-out cleaning, and custom cleaning plans for residential and commercial properties."},
        {
          id: "2",          title: "How do you price your services?",          content: "Our pricing is based on the size of your property, the type of service requested, and the frequency. We offer free, no-obligation quotes after a brief consultation."},
        {
          id: "3",          title: "Do I need to provide cleaning supplies?",          content: "No, our team comes fully equipped with professional-grade cleaning products and tools. If you have specific preferences or allergies, please let us know."},
        {
          id: "4",          title: "Are your cleaning professionals insured and bonded?",          content: "Yes, all our team members are fully insured and bonded for your peace of mind and protection."},
        {
          id: "5",          title: "How do I schedule an appointment?",          content: "You can easily schedule a cleaning service by calling us at (941) 400-3342 or by filling out the contact form on our website."},
      ]}
      title="Frequently Asked Questions"
      faqsAnimation="slide-up"
      description="Find quick answers to common questions about our services, pricing, and scheduling."
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplit
      useInvertedBackground={false}
      background={{
        variant: "plain"}}
      tag="Contact Us"
      title="Ready for a Spotless Home?"
      description="Get your free cleaning quote today and let us bring the shine back to your Sarasota home or business."
      imageSrc="http://img.b2bpic.net/free-photo/front-view-bucket-with-cleaning-solutions-copy-space_23-2148587362.jpg"
      imageAlt="Cleaning supplies"
      mediaAnimation="opacity"
      mediaPosition="right"
      inputPlaceholder="Enter your email for inquiries"
      buttonText="Get My Free Quote"
      termsText="By submitting this form, you agree to receive communications from Brazilian Cleaning Services LLC."
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterMedia
      imageSrc="http://img.b2bpic.net/free-photo/from-hydroalcoholic-gel-close-up_23-2148858954.jpg"
      imageAlt="Abstract clean background"
      logoText="Brazilian Cleaning Services LLC"
      columns={[
        {
          title: "Services",          items: [
            {
              label: "Deep Cleaning",              href: "#features"},
            {
              label: "Regular Cleaning",              href: "#features"},
            {
              label: "Move In/Out",              href: "#features"},
          ],
        },
        {
          title: "Company",          items: [
            {
              label: "About Us",              href: "#about"},
            {
              label: "Testimonials",              href: "#testimonials"},
            {
              label: "FAQ",              href: "#faq"},
          ],
        },
        {
          title: "Contact",          items: [
            {
              label: "Get a Quote",              href: "#contact"},
            {
              label: "Call Us",              href: "tel:+19414003342"},
            {
              label: "Email Us",              href: "mailto:info@braziliancleaningservices.com"},
          ],
        },
      ]}
      copyrightText="© 2024 Brazilian Cleaning Services LLC. All rights reserved."
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
