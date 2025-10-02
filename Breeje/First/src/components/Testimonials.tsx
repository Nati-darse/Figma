import { useEffect, useRef, useState } from "react";
import SectionTitle from "./UI/SectionTitle";

// Expanded testimonial list with more items for continuous flow
const testimonials = [
  {
    name: "Cynthia Moore",
    position: "Business Owner",
    avatar: "https://randomuser.me/api/portraits/women/1.jpg",
    text: "Elegant visuals, outstanding impact on our selling process. There's massive connectivity between user and product analytics",
    rating: 4.9,
  },
  {
    name: "Sophia Monroe",
    position: "Growth Manager",
    avatar: "https://randomuser.me/api/portraits/women/2.jpg",
    text: "There's massive connectivity between user and product analytics. The data visualization tools are incredibly intuitive.",
    rating: 4.7,
  },
  {
    name: "Angela Irwin",
    position: "Retailer",
    avatar: "https://randomuser.me/api/portraits/women/3.jpg",
    text: "Design is clean and smart, exactly what our business needed. There's massive connectivity between user and product analytics",
    rating: 4.8,
  },
  {
    name: "Jonah Maddox",
    position: "Data Specialist",
    avatar: "https://randomuser.me/api/portraits/men/31.jpg",
    text: "Advanced insights let us grow faster and smarter each quarter. There's massive connectivity between user and product analytics",
    rating: 4.6,
  },
  {
    name: "Lydia Taro",
    position: "Founder",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    text: "Team support and visual analytics are state-of-the-art. There's massive connectivity between user and product analytics",
    rating: 4.8,
  },
  {
    name: "Michael Torres",
    position: "Online Seller",
    avatar: "https://randomuser.me/api/portraits/men/43.jpg",
    text: "Helped us streamline operations with transparent reporting. There's massive connectivity between user and product analytics",
    rating: 4.7,
  },
  {
    name: "Sarah Johnson",
    position: "E-commerce Manager",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    text: "Revolutionized how we track customer behavior and sales. There's massive connectivity between user and product analytics",
    rating: 4.9,
  },
  {
    name: "David Chen",
    position: "Product Analyst",
    avatar: "https://randomuser.me/api/portraits/men/22.jpg",
    text: "The data visualization tools are incredibly intuitive. There's massive connectivity between user and product analytics",
    rating: 4.8,
  },
];

export default function Testimonials() {
  const [progress, setProgress] = useState(0);
  const animationRef = useRef<number | undefined>(undefined);

  const CARD_WIDTH = 380;
  const GAP = 24;
  const SLIDE_AMOUNT = CARD_WIDTH + GAP;
  const TOTAL_CARDS = 10; // More cards for full screen coverage
  const ANIMATION_DURATION = 50000;

  // Continuous smooth animation
  useEffect(() => {
    const startTime = Date.now();
    
    const animate = () => {
      const elapsed = Date.now() - startTime;
      const newProgress = (elapsed % ANIMATION_DURATION) / ANIMATION_DURATION;
      setProgress(newProgress);
      animationRef.current = requestAnimationFrame(animate);
    };
    
    animationRef.current = requestAnimationFrame(animate);
    
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  // Create continuous flow with more cards for full screen coverage
  const allTestimonials = [...testimonials, ...testimonials, ...testimonials];
  const upperRow = allTestimonials.slice(0, TOTAL_CARDS);
  const lowerRow = allTestimonials.slice(TOTAL_CARDS, TOTAL_CARDS * 2);

  // Calculate positions for full screen coverage
  const getCardTransform = (index: number, rowOffset: number = 0) => {
    // Different speed and phase for upper and lower rows
    const rowSpeed = rowOffset === 0 ? 1 : 0.8;
    const phaseOffset = rowOffset === 0 ? 0 : 0.4;
    
    // Calculate position based on continuous progress
    const basePosition = (index / TOTAL_CARDS) + (progress * rowSpeed) + phaseOffset;
    const normalizedPosition = (basePosition % 1) * TOTAL_CARDS;
    
    // Convert to pixel position - spread across entire screen
    // const totalRowWidth = TOTAL_CARDS * SLIDE_AMOUNT;
    const xPosition = (normalizedPosition - TOTAL_CARDS/2) * SLIDE_AMOUNT;
    
    return `translateX(${xPosition}px)`;
  };

  // Get visibility based on position in the view
  const getCardStyle = (index: number, rowOffset: number = 0) => {
    const rowSpeed = rowOffset === 0 ? 1 : 0.8;
    const phaseOffset = rowOffset === 0 ? 0 : 0.4;
    const basePosition = (index / TOTAL_CARDS) + (progress * rowSpeed) + phaseOffset;
    const normalizedPosition = (basePosition % 1) * TOTAL_CARDS;
    
    // Calculate distance from center (center of screen)
    const centerPosition = TOTAL_CARDS / 2;
    const distanceFromCenter = Math.abs(normalizedPosition - centerPosition);
    
    // Make 3 cards clearly visible in the center, but maintain full screen coverage
    if (distanceFromCenter < 0.8) {
      return "opacity-100 blur-0 scale-100 shadow-xl border-purple-500/40 z-20"; // Center card
    } else if (distanceFromCenter < 1) {
      return "opacity-90 blur-2 scale-98 border-purple-400/30 z-10"; 
    } else if (distanceFromCenter < 2) {
      return "opacity-80 blur-sm scale-95 border-purple-300/20 z-5"; 
    } else if (distanceFromCenter < 4) {
      return "opacity-20 blur-lg scale-90"; 
    } else if (distanceFromCenter < 5) {
      return "opacity-10 blur-lg scale-85"; 
    } else {
      return "opacity-5 blur-lg scale-80 pointer-events-none"; 
    }
  };

  return (
    <section className="py-24 pt-40 px-4 sm:px-6 bg-[#01051e] relative overflow-hidden text-center">
      <SectionTitle title="Hear what our customers have to say about us" />
      <p className="mt-4 py-5 mb-12 text-gray-400 max-w-2xl mx-auto text-center">
        Focused on driving outstanding developer experiences that unlock technical strides, empower businesses, and fuel growth across industries and individuals.
      </p>
      
      {/* Upper Row - Full screen coverage with 3 clear cards */}
      <div className="relative h-[240px] flex items-center justify-center w-full mx-12 mb-0">
        {upperRow.map((testimonial, i) => (
          <div
            key={`upper-${i}-${testimonial.name}`}
            className={`absolute top-0 w-[360px] bg-gradient-to-br from-[#15162d] to-[#1a1b35] border border-purple-900/40 rounded-xl p-10 flex flex-col items-start transition-all duration-300 ease-linear ${getCardStyle(i, 0)}`}
            style={{
              transform: `${getCardTransform(i, 0)}`,
            }}
          >
            <div className="flex items-center gap-4 mb-4">
              <img src={testimonial.avatar} alt={testimonial.name} className="h-10 w-10 rounded-full object-cover border-2 border-purple-500/60 shadow" />
              <div className="flex-1">
                <div className="font-semibold text-white text-sm">{testimonial.name}</div>
                <div className="text-xs text-gray-400">{testimonial.position}</div>
              </div>
              <div className="text-purple-300 font-bold text-md">{testimonial.rating}★</div>
            </div>
            <div className="text-gray-200 text-sm leading-relaxed">{testimonial.text}</div>
          </div>
        ))}
      </div>

      {/* Lower Row - Full screen coverage with 3 clear cards */}
      <div className="relative h-[260px] flex items-center justify-center w-full">
        {lowerRow.map((testimonial, i) => (
          <div
            key={`lower-${i}-${testimonial.name}`}
            className={`absolute top-0 w-[360px] bg-gradient-to-br from-[#15162d] to-[#1a1b35] border border-purple-900/40 rounded-xl p-8 flex flex-col items-start transition-all duration-300 ease-linear ${getCardStyle(i, 1)}`}
            style={{
              transform: `${getCardTransform(i, 1)}`,
            }}
          >
            <div className="flex items-center gap-4 mb-4">
              <img src={testimonial.avatar} alt={testimonial.name} className="h-10 w-10 rounded-full object-cover border-2 border-purple-500/60 shadow" />
              <div className="flex-1">
                <div className="font-semibold text-white text-sm">{testimonial.name}</div>
                <div className="text-xs text-gray-400">{testimonial.position}</div>
              </div>
              <div className="text-purple-300 font-bold text-md">{testimonial.rating}★</div>
            </div>
            <div className="text-gray-200 text-sm leading-relaxed">{testimonial.text}</div>
          </div>
        ))}
      </div>
    </section>
  );
}