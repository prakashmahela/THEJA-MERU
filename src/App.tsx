import React from 'react';
import { MusicReactiveHero } from './components/ui/music-reactive-hero-section';
import { Navbar } from './components/ui/Navbar';
import { CircularTestimonials } from './components/ui/circular-testimonials';
import { 
  Music, 
  Briefcase, 
  Globe, 
  TrendingUp, 
  Award, 
  ChevronRight,
  ExternalLink,
  Instagram,
  Twitter,
  ArrowLeft,
  Info
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const Section = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => (
  <section className={`py-12 md:py-24 px-6 md:px-12 max-w-7xl mx-auto ${className}`}>
    {children}
  </section>
);

const Card = ({ title, description, icon: Icon, onClick, dark = false, colorIndex = 0 }: {
  title: string; description: string; icon: any; onClick?: () => void; dark?: boolean; colorIndex?: number;
}) => {
  // Deep jewel tones — premium, expensive
  const JEWELS = [
    { bgL:"#0f172a", bgD:"#020617", accL:"#6366f1", accD:"#818cf8", edgeL:"#312e81", edgeD:"#1e1b4b", glowL:"rgba(99,102,241,0.35)", bL:"rgba(99,102,241,0.5)", bD:"rgba(129,140,248,0.4)" }, // deep indigo
    { bgL:"#0d1f0f", bgD:"#020c03", accL:"#10b981", accD:"#34d399", edgeL:"#064e3b", edgeD:"#022c22", glowL:"rgba(16,185,129,0.35)", bL:"rgba(16,185,129,0.5)", bD:"rgba(52,211,153,0.4)" }, // deep emerald
    { bgL:"#1a0533", bgD:"#0d0017", accL:"#a855f7", accD:"#c084fc", edgeL:"#581c87", edgeD:"#2e1065", glowL:"rgba(168,85,247,0.35)", bL:"rgba(168,85,247,0.5)", bD:"rgba(192,132,252,0.4)" }, // deep purple
  ];
  const c = JEWELS[colorIndex % JEWELS.length];
  const bg  = dark ? c.bgD : c.bgL;
  const acc = dark ? c.accD : c.accL;
  const edge = dark ? c.edgeD : c.edgeL;
  const b   = dark ? c.bD : c.bL;

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{ y: -20, scale: 1.03 }}
      transition={{ opacity:{duration:0.7,ease:[0.22,1,0.36,1]}, y:{type:"spring",stiffness:200,damping:22}, scale:{type:"spring",stiffness:200,damping:22} }}
      onClick={onClick}
      className="rounded-2xl cursor-pointer relative overflow-hidden group"
      style={{
        background: `linear-gradient(145deg, ${bg} 0%, ${edge} 100%)`,
        border: `1px solid ${b}`,
        boxShadow: `0 0 0 1px ${edge}, 0 8px 0 ${edge}, 0 16px 48px ${c.glowL}, 0 4px 16px rgba(0,0,0,0.5)`,
      }}
    >
      {/* Inner highlight — top-left corner catch */}
      <div className="absolute top-0 left-0 right-0 h-[1px]" style={{ background:`linear-gradient(90deg, transparent, rgba(255,255,255,0.12), transparent)` }} />
      {/* Accent glow top bar */}
      <div className="absolute top-0 left-6 right-6 h-[2px]" style={{ background:`linear-gradient(90deg, transparent, ${acc}, transparent)`, boxShadow:`0 0 20px ${c.glowL}`, animation:"colorFlow 3s ease infinite", backgroundSize:"200% 100%" }} />
      {/* Decorative circle — top right */}
      <div className="absolute -top-16 -right-16 w-48 h-48 rounded-full pointer-events-none" style={{ border:`1px solid ${b}`, opacity:0.2 }} />
      <div className="absolute -top-8 -right-8 w-28 h-28 rounded-full pointer-events-none" style={{ border:`1px solid ${b}`, opacity:0.15 }} />
      {/* Hover shimmer */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none overflow-hidden rounded-2xl" style={{transition:"opacity 0.4s"}}>
        <div style={{ position:"absolute",top:"-50%",left:"-80%",width:"55%",height:"200%", background:"linear-gradient(105deg,transparent,rgba(255,255,255,0.07),transparent)", transform:"skewX(-15deg)", animation:"shimmerSweep 1.4s ease-out forwards" }} />
      </div>
      {/* Hover glow border */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{ boxShadow:`inset 0 0 0 1px ${acc}40, 0 0 60px ${c.glowL}` }} />
      {/* Content */}
      <div className="relative z-10 p-7 md:p-9 flex flex-col items-start">
        <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6" style={{ background:`${acc}18`, border:`1px solid ${acc}40`, boxShadow:`0 0 20px ${c.glowL}` }}>
          <Icon className="w-5 h-5" style={{ color: acc }} />
          <div className="absolute w-2 h-2 rounded-full -top-1 -right-1" style={{ background:acc, boxShadow:`0 0 8px ${acc}`, animation:"borderPulse 2s ease-in-out infinite" }} />
        </div>
        <h3 className="font-anton uppercase mb-3 text-xl leading-none text-white" style={{ letterSpacing:"0.05em" }}>{title}</h3>
        <div className="h-[2px] w-10 rounded-full mb-4" style={{ background:`linear-gradient(90deg, ${acc}, transparent)`, boxShadow:`0 0 10px ${c.glowL}` }} />
        <p className="text-sm leading-relaxed" style={{ color:"rgba(255,255,255,0.5)" }}>{description}</p>
        <div className="mt-6 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
          <span className="text-[10px] uppercase tracking-[0.4em] font-bold" style={{ color: acc }}>Explore</span>
          <div className="h-[1px] w-0 group-hover:w-10 transition-all duration-500" style={{ background:`linear-gradient(90deg, ${acc}, transparent)` }} />
        </div>
      </div>
    </motion.div>
  );
};


const Subpage = ({ title, content, onBack, dark }: { title: string, content: React.ReactNode, onBack: () => void, dark: boolean }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: 20 }}
    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
    className="fixed inset-0 z-[200] overflow-y-auto pt-32 px-6 pb-24"
    style={{ background: dark ? '#000000' : '#f5f3ef', color: dark ? '#ffffff' : '#0a0a0a' }}
  >
    <div className="max-w-3xl mx-auto">
      <motion.button 
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        onClick={onBack}
        className="flex items-center gap-2 transition-colors mb-16 text-[10px] uppercase tracking-[0.3em] font-bold group"
        style={{ color: dark ? 'rgba(255,255,255,0.35)' : 'rgba(0,0,0,0.35)' }}
      >
        <ArrowLeft className="w-3 h-3 group-hover:-translate-x-1 transition-transform" /> 
        <span className={dark ? 'hover:text-white' : 'hover:text-black'}>Return to Main</span>
      </motion.button>
      
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-6xl md:text-8xl font-anton uppercase mb-16 leading-none"
        style={{
          background: dark
            ? "linear-gradient(135deg, #ffffff, #00f2ff, #b060ff)"
            : "linear-gradient(135deg, #0a0a0a, #0057ff, #8b00ff)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        }}
      >
        {title}
      </motion.h1>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="space-y-16 leading-relaxed text-lg font-poppins"
        style={{ color: dark ? 'rgba(255,255,255,0.65)' : 'rgba(10,10,10,0.8)' }}
      >
        {/* Re-style subpage content borders for light mode */}
        <style>{`
          .subpage-content .border-l-2 { border-color: ${dark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.15)'} !important; }
          .subpage-content h3 { color: ${dark ? 'rgba(255,255,255,0.3)' : 'rgba(0,0,0,0.45)'} !important; }
          .subpage-content h4 { color: ${dark ? '#ffffff' : '#0a0a0a'} !important; }
          .subpage-content p { color: ${dark ? 'rgba(255,255,255,0.65)' : 'rgba(10,10,10,0.8)'} !important; }
        `}</style>
        <div className="subpage-content space-y-16">
          {content}
        </div>
      </motion.div>
    </div>
  </motion.div>
);

export default function App() {
  const [activeSubpage, setActiveSubpage] = React.useState<string | null>(null);
  const [theme, setTheme] = React.useState<'light' | 'dark'>('light');

  const toggleTheme = () => setTheme(t => t === 'light' ? 'dark' : 'light');
  const dark = theme === 'dark';

  // Apply dark class to html element
  React.useEffect(() => {
    if (dark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [dark]);

  const subpages: Record<string, { title: string, content: React.ReactNode }> = {
    music: {
      title: "Music Industry",
      content: (
        <>
          <div className="border-l-2 border-white/10 pl-8">
            <h3 className="text-xs uppercase tracking-[0.5em] text-white/30 mb-4">Strategic Pillar 01</h3>
            <h4 className="text-2xl font-anton text-white mb-4 uppercase">Infrastructure Development</h4>
            <p>Nagaland is witnessing a paradigm shift in its creative infrastructure. We are establishing world-class recording studios and performance spaces that serve as the backbone for local talent. These facilities are designed to meet international standards, ensuring that Naga artists can produce and refine their work without geographical constraints.</p>
          </div>
          <div className="border-l-2 border-white/10 pl-8">
            <h3 className="text-xs uppercase tracking-[0.5em] text-white/30 mb-4">Strategic Pillar 02</h3>
            <h4 className="text-2xl font-anton text-white mb-4 uppercase">Artist Monetization</h4>
            <p>The transition from music as a hobby to music as a profession requires a robust monetization framework. We provide comprehensive training on digital distribution, streaming analytics, and performance royalties. Our goal is to ensure that every creative endeavor translates into a sustainable livelihood for the artist and their community.</p>
          </div>
          <div className="border-l-2 border-white/10 pl-8">
            <h3 className="text-xs uppercase tracking-[0.5em] text-white/30 mb-4">Strategic Pillar 03</h3>
            <h4 className="text-2xl font-anton text-white mb-4 uppercase">Global Connectivity</h4>
            <p>By forging alliances with international music festivals and production houses, we are creating a bridge between Nagaland and the global music market. This connectivity allows for cross-cultural collaborations and provides our artists with a platform to showcase the unique Naga sound to a worldwide audience.</p>
          </div>
        </>
      )
    },
    vision: {
      title: "The Vision",
      content: (
        <>
          <div className="border-l-2 border-white/10 pl-8">
            <h3 className="text-xs uppercase tracking-[0.5em] text-white/30 mb-4">Core Philosophy</h3>
            <h4 className="text-2xl font-anton text-white mb-4 uppercase">Cultural Preservation</h4>
            <p>At the heart of our vision lies the preservation of Naga heritage through contemporary artistic expression. We believe that our traditional sounds and stories are our greatest assets. By integrating these elements into modern music and arts, we ensure that our culture remains vibrant and relevant for future generations.</p>
          </div>
          <div className="border-l-2 border-white/10 pl-8">
            <h3 className="text-xs uppercase tracking-[0.5em] text-white/30 mb-4">Economic Impact</h3>
            <h4 className="text-2xl font-anton text-white mb-4 uppercase">The Creative Economy</h4>
            <p>We envision a Nagaland where the creative economy is a primary driver of GDP growth. This involves building a complete value chain—from education and production to marketing and tourism. Our vision is to transform the state into a global destination for music lovers and creative professionals alike.</p>
          </div>
          <div className="border-l-2 border-white/10 pl-8">
            <h3 className="text-xs uppercase tracking-[0.5em] text-white/30 mb-4">Future Outlook</h3>
            <h4 className="text-2xl font-anton text-white mb-4 uppercase">Nagaland 2030</h4>
            <p>Our roadmap for 2030 includes the establishment of a dedicated Arts University and the hosting of multiple international-scale festivals throughout the year. We aim to make Nagaland synonymous with creative excellence, fostering an environment where innovation and tradition coexist seamlessly.</p>
          </div>
        </>
      )
    },
    initiatives: {
      title: "Initiatives",
      content: (
        <>
          <div className="border-l-2 border-white/10 pl-8">
            <h3 className="text-xs uppercase tracking-[0.5em] text-white/30 mb-4">Project Alpha</h3>
            <h4 className="text-2xl font-anton text-white mb-4 uppercase">Hornbill Music Festival</h4>
            <p>The Hornbill Music Festival has evolved into India's premier music event. Our initiative focuses on enhancing the production quality and diversifying the lineup to include global headliners alongside local talent. This festival serves as a critical catalyst for tourism and local business growth during the peak season.</p>
          </div>
          <div className="border-l-2 border-white/10 pl-8">
            <h3 className="text-xs uppercase tracking-[0.5em] text-white/30 mb-4">Project Beta</h3>
            <h4 className="text-2xl font-anton text-white mb-4 uppercase">District Music Centers</h4>
            <p>To ensure equitable access to resources, we are rolling out District Music Centers across all 16 districts of Nagaland. These centers provide localized training, rehearsal facilities, and community engagement programs, ensuring that talent from even the most remote areas has the opportunity to shine.</p>
          </div>
          <div className="border-l-2 border-white/10 pl-8">
            <h3 className="text-xs uppercase tracking-[0.5em] text-white/30 mb-4">Project Gamma</h3>
            <h4 className="text-2xl font-anton text-white mb-4 uppercase">International Residencies</h4>
            <p>Our residency programs allow Naga artists to travel abroad and collaborate with international musicians. These exchanges are vital for skill development and broadening the artistic horizons of our creative community. Conversely, we host international artists in Nagaland to foster a truly global creative environment.</p>
          </div>
        </>
      )
    },
    entrepreneurship: {
      title: "Entrepreneurship",
      content: (
        <>
          <div className="border-l-2 border-white/10 pl-8">
            <h3 className="text-xs uppercase tracking-[0.5em] text-white/30 mb-4">Innovation Hub</h3>
            <h4 className="text-2xl font-anton text-white mb-4 uppercase">Incubation Centers</h4>
            <p>We are launching dedicated incubation centers for creative startups. These centers provide mentorship, legal support, and seed funding for entrepreneurs in the music, fashion, and digital arts sectors. We believe that creative talent, when paired with business acumen, can solve local challenges and create global impact.</p>
          </div>
          <div className="border-l-2 border-white/10 pl-8">
            <h3 className="text-xs uppercase tracking-[0.5em] text-white/30 mb-4">Policy Framework</h3>
            <h4 className="text-2xl font-anton text-white mb-4 uppercase">Creative Economy Policy</h4>
            <p>Our advocacy work involves drafting and implementing policies that protect and promote the creative industries. This includes tax incentives for arts-based businesses, simplified licensing for events, and robust copyright enforcement. A strong policy framework is essential for attracting long-term investment into the region.</p>
          </div>
          <div className="border-l-2 border-white/10 pl-8">
            <h3 className="text-xs uppercase tracking-[0.5em] text-white/30 mb-4">Youth Leadership</h3>
            <h4 className="text-2xl font-anton text-white mb-4 uppercase">Mentorship Programs</h4>
            <p>Theja Meru personally leads mentorship sessions for young Naga leaders. These programs focus on visionary thinking, resilience, and ethical leadership. By investing in the people behind the projects, we are building a sustainable leadership pipeline for Nagaland's future.</p>
          </div>
        </>
      )
    },
    musician: {
      title: "The Musician",
      content: (
        <>
          <div className="border-l-2 border-white/10 pl-8">
            <h3 className="text-xs uppercase tracking-[0.5em] text-white/30 mb-4">Artistic Journey</h3>
            <h4 className="text-2xl font-anton text-white mb-4 uppercase">Musical Roots</h4>
            <p>Theja Meru's journey began with a deep-seated passion for the diverse sounds of Nagaland. His early career as a musician saw him exploring various genres, blending traditional Naga folk elements with contemporary styles. This unique fusion became his signature, earning him respect within the local and national music circles.</p>
          </div>
          <div className="border-l-2 border-white/10 pl-8">
            <h3 className="text-xs uppercase tracking-[0.5em] text-white/30 mb-4">Creative Philosophy</h3>
            <h4 className="text-2xl font-anton text-white mb-4 uppercase">Sound of the Soil</h4>
            <p>He believes that music is the most potent medium for cultural storytelling. His compositions often reflect the socio-cultural fabric of the Naga people, serving as a bridge between the past and the present. For Theja, every note is an opportunity to preserve a piece of history while pushing the boundaries of modern sound.</p>
          </div>
          <div className="border-l-2 border-white/10 pl-8">
            <h3 className="text-xs uppercase tracking-[0.5em] text-white/30 mb-4">Impact</h3>
            <h4 className="text-2xl font-anton text-white mb-4 uppercase">Inspiring a Generation</h4>
            <p>Through his performances and recordings, he has inspired countless young Nagas to pick up instruments and find their own voices. His success demonstrated that a career in music was not just a dream but a viable reality, paving the way for the vibrant music scene we see in Nagaland today.</p>
          </div>
        </>
      )
    },
    mentoring_startups: {
      title: "Mentoring Creative Startups",
      content: (
        <>
          <div className="border-l-2 border-white/10 pl-8">
            <h3 className="text-xs uppercase tracking-[0.5em] text-white/30 mb-4">Pillar 01</h3>
            <h4 className="text-2xl font-anton text-white mb-4 uppercase">The Incubation Model</h4>
            <p>Theja Meru has pioneered a creative incubation model tailored specifically to the realities of Northeast India. Unlike conventional startup accelerators, this framework addresses the unique challenges faced by artists-turned-entrepreneurs — from navigating limited local markets to accessing national and international distribution networks. The model provides structured mentorship, legal guidance, and financial literacy training.</p>
          </div>
          <div className="border-l-2 border-white/10 pl-8">
            <h3 className="text-xs uppercase tracking-[0.5em] text-white/30 mb-4">Pillar 02</h3>
            <h4 className="text-2xl font-anton text-white mb-4 uppercase">Building the Pipeline</h4>
            <p>The mentorship pipeline identifies promising young creatives at the idea stage and walks them through the full journey — from concept validation to market launch. Each cohort receives direct access to Theja's network of industry professionals, investors, and cultural institutions. This hands-on approach has resulted in a growing portfolio of viable creative businesses rooted in Naga culture.</p>
          </div>
          <div className="border-l-2 border-white/10 pl-8">
            <h3 className="text-xs uppercase tracking-[0.5em] text-white/30 mb-4">Pillar 03</h3>
            <h4 className="text-2xl font-anton text-white mb-4 uppercase">Seed Funding & Resources</h4>
            <p>Access to capital is one of the biggest barriers for creative entrepreneurs in the region. Through partnerships with impact investors and government schemes, we channel seed funding and in-kind resources — studio time, equipment, co-working spaces — directly to the most promising ventures, removing financial friction from the earliest stages of growth.</p>
          </div>
        </>
      )
    },
    policy_advocacy: {
      title: "Policy Advocacy for Arts",
      content: (
        <>
          <div className="border-l-2 border-white/10 pl-8">
            <h3 className="text-xs uppercase tracking-[0.5em] text-white/30 mb-4">Pillar 01</h3>
            <h4 className="text-2xl font-anton text-white mb-4 uppercase">Drafting the Framework</h4>
            <p>Theja Meru has been instrumental in drafting comprehensive policy recommendations for the creative industries in Nagaland. These frameworks cover intellectual property protection, arts-based business licensing, and tax incentive structures designed to attract long-term private investment into the cultural sector. The goal is to create a regulatory environment where creativity is rewarded, not burdened.</p>
          </div>
          <div className="border-l-2 border-white/10 pl-8">
            <h3 className="text-xs uppercase tracking-[0.5em] text-white/30 mb-4">Pillar 02</h3>
            <h4 className="text-2xl font-anton text-white mb-4 uppercase">Engaging Government</h4>
            <p>Advocacy requires persistent engagement at the highest levels of government. Through TaFMA, Theja regularly presents data-driven cases to state and central government bodies, demonstrating the economic and social returns of investing in the creative economy. This evidence-based approach has led to increased budget allocations for arts infrastructure and artist welfare programs.</p>
          </div>
          <div className="border-l-2 border-white/10 pl-8">
            <h3 className="text-xs uppercase tracking-[0.5em] text-white/30 mb-4">Pillar 03</h3>
            <h4 className="text-2xl font-anton text-white mb-4 uppercase">Copyright & Artist Rights</h4>
            <p>A critical pillar of our advocacy work is the enforcement and education around copyright law for Naga artists. Many creators are unaware of the protections available to them, leaving their work vulnerable to exploitation. We conduct workshops, provide legal support, and actively lobby for stronger enforcement mechanisms to ensure that artists retain ownership and benefit from their creative output.</p>
          </div>
        </>
      )
    },
    cultural_tourism: {
      title: "Cultural Tourism Development",
      content: (
        <>
          <div className="border-l-2 border-white/10 pl-8">
            <h3 className="text-xs uppercase tracking-[0.5em] text-white/30 mb-4">Pillar 01</h3>
            <h4 className="text-2xl font-anton text-white mb-4 uppercase">Nagaland as a Destination</h4>
            <p>Our vision for cultural tourism repositions Nagaland as a must-visit destination for discerning global travelers seeking authentic cultural immersion. This involves developing curated cultural circuits across all 16 districts, connecting villages, artisan hubs, and performance venues into a cohesive tourism experience. The narrative we are building is one of living culture — vibrant, accessible, and deeply human.</p>
          </div>
          <div className="border-l-2 border-white/10 pl-8">
            <h3 className="text-xs uppercase tracking-[0.5em] text-white/30 mb-4">Pillar 02</h3>
            <h4 className="text-2xl font-anton text-white mb-4 uppercase">Infrastructure for Visitors</h4>
            <p>World-class cultural tourism requires world-class infrastructure. We are working with hospitality partners and government agencies to upgrade accommodation, transport, and digital connectivity across key cultural sites. This investment not only improves the visitor experience but also creates sustained employment for local communities, ensuring that tourism revenue circulates within the state.</p>
          </div>
          <div className="border-l-2 border-white/10 pl-8">
            <h3 className="text-xs uppercase tracking-[0.5em] text-white/30 mb-4">Pillar 03</h3>
            <h4 className="text-2xl font-anton text-white mb-4 uppercase">Festivals as Tourism Anchors</h4>
            <p>Major festivals like Hornbill serve as the primary anchors for our tourism strategy, drawing visitors during peak season. Beyond the flagship events, we are developing a calendar of smaller, district-level festivals throughout the year. This distributes tourist footfall more evenly, reduces seasonal dependency, and introduces visitors to the full diversity of Naga cultural expression.</p>
          </div>
        </>
      )
    },
    youth_empowerment: {
      title: "Youth Empowerment Programs",
      content: (
        <>
          <div className="border-l-2 border-white/10 pl-8">
            <h3 className="text-xs uppercase tracking-[0.5em] text-white/30 mb-4">Pillar 01</h3>
            <h4 className="text-2xl font-anton text-white mb-4 uppercase">Leadership Academies</h4>
            <p>Our Youth Leadership Academies are immersive programs designed to identify and nurture the next generation of Nagaland's creative and civic leaders. Participants spend intensive weeks working alongside industry professionals, policymakers, and established entrepreneurs. The curriculum blends practical skills — project management, public speaking, digital literacy — with a deep grounding in Naga cultural identity and values.</p>
          </div>
          <div className="border-l-2 border-white/10 pl-8">
            <h3 className="text-xs uppercase tracking-[0.5em] text-white/30 mb-4">Pillar 02</h3>
            <h4 className="text-2xl font-anton text-white mb-4 uppercase">Scholarships & Fellowships</h4>
            <p>Financial barriers should never stand between talent and opportunity. We administer a growing scholarship and fellowship program that supports young Nagas in pursuing higher education and professional training in the arts, music, and creative business management. Recipients join an alumni network that provides lifelong mentorship and career support, creating a self-sustaining cycle of community upliftment.</p>
          </div>
          <div className="border-l-2 border-white/10 pl-8">
            <h3 className="text-xs uppercase tracking-[0.5em] text-white/30 mb-4">Pillar 03</h3>
            <h4 className="text-2xl font-anton text-white mb-4 uppercase">School Outreach</h4>
            <p>Change starts early. Our school outreach program brings music, arts, and entrepreneurship education directly into classrooms across Nagaland. By integrating creative thinking into the formal curriculum, we are building a generation of young people who see artistic expression and innovative problem-solving as natural, valuable skills. This grassroots investment is the foundation of everything we are building.</p>
          </div>
        </>
      )
    },
    entrepreneur: {
      title: "The Entrepreneur",
      content: (
        <>
          <div className="border-l-2 border-white/10 pl-8">
            <h3 className="text-xs uppercase tracking-[0.5em] text-white/30 mb-4">Business Acumen</h3>
            <h4 className="text-2xl font-anton text-white mb-4 uppercase">Creative Ventures</h4>
            <p>Theja Meru's entrepreneurial spirit is driven by the desire to build sustainable ecosystems for the arts. He has founded and co-founded several ventures that provide platforms for local talent, ranging from event management firms to creative consulting agencies. His focus is always on creating value for the community.</p>
          </div>
          <div className="border-l-2 border-white/10 pl-8">
            <h3 className="text-xs uppercase tracking-[0.5em] text-white/30 mb-4">Mentorship</h3>
            <h4 className="text-2xl font-anton text-white mb-4 uppercase">Nurturing Startups</h4>
            <p>As a mentor, he works closely with young entrepreneurs in the Northeast, helping them navigate the complexities of the creative economy. He emphasizes the importance of resilience, innovation, and ethical business practices, fostering a new generation of leaders who are socially conscious and globally competitive.</p>
          </div>
          <div className="border-l-2 border-white/10 pl-8">
            <h3 className="text-xs uppercase tracking-[0.5em] text-white/30 mb-4">Strategic Growth</h3>
            <h4 className="text-2xl font-anton text-white mb-4 uppercase">Economic Resilience</h4>
            <p>His ventures are designed to be resilient in the face of economic shifts. By diversifying his interests and focusing on long-term impact, he has built a portfolio that contributes significantly to the local economy. He believes that entrepreneurship is a tool for empowerment and regional development.</p>
          </div>
        </>
      )
    },
    music_industry: {
      title: "Music Industry",
      content: (
        <>
          <div className="border-l-2 border-white/10 pl-8">
            <h3 className="text-xs uppercase tracking-[0.5em] text-white/30 mb-4">Strategic Pillar 01</h3>
            <h4 className="text-2xl font-anton text-white mb-4 uppercase">Infrastructure Development</h4>
            <p>Nagaland is witnessing a paradigm shift in its creative infrastructure. We are establishing world-class recording studios and performance spaces that serve as the backbone for local talent. These facilities are designed to meet international standards, ensuring that Naga artists can produce and refine their work without geographical constraints.</p>
          </div>
          <div className="border-l-2 border-white/10 pl-8">
            <h3 className="text-xs uppercase tracking-[0.5em] text-white/30 mb-4">Strategic Pillar 02</h3>
            <h4 className="text-2xl font-anton text-white mb-4 uppercase">Artist Monetization</h4>
            <p>The transition from music as a hobby to music as a profession requires a robust monetization framework. We provide comprehensive training on digital distribution, streaming analytics, and performance royalties. Our goal is to ensure that every creative endeavor translates into a sustainable livelihood for the artist and their community.</p>
          </div>
          <div className="border-l-2 border-white/10 pl-8">
            <h3 className="text-xs uppercase tracking-[0.5em] text-white/30 mb-4">Strategic Pillar 03</h3>
            <h4 className="text-2xl font-anton text-white mb-4 uppercase">Global Connectivity</h4>
            <p>By forging alliances with international music festivals and production houses, we are creating a bridge between Nagaland and the global music market. This connectivity allows for cross-cultural collaborations and provides our artists with a platform to showcase the unique Naga sound to a worldwide audience.</p>
          </div>
        </>
      )
    },
    hornbill_festival: {
      title: "Hornbill Festival",
      content: (
        <>
          <div className="border-l-2 border-white/10 pl-8">
            <h3 className="text-xs uppercase tracking-[0.5em] text-white/30 mb-4">Festival Pillar 01</h3>
            <h4 className="text-2xl font-anton text-white mb-4 uppercase">International Production Standards</h4>
            <p>The Hornbill Music Festival is being elevated to match the production quality of the world's greatest music events. From stage engineering to sound design and lighting, every element is benchmarked against international standards. This ensures a premium experience for both performers and the thousands of attendees who travel from across the globe.</p>
          </div>
          <div className="border-l-2 border-white/10 pl-8">
            <h3 className="text-xs uppercase tracking-[0.5em] text-white/30 mb-4">Festival Pillar 02</h3>
            <h4 className="text-2xl font-anton text-white mb-4 uppercase">Lineup Diversification</h4>
            <p>A deliberate curation strategy brings global headliners alongside emerging Naga talent onto the same stage. This balance is essential — it draws international attention while ensuring local artists gain the visibility and exposure needed to build their careers. The festival becomes a true melting pot of musical traditions and contemporary expressions.</p>
          </div>
          <div className="border-l-2 border-white/10 pl-8">
            <h3 className="text-xs uppercase tracking-[0.5em] text-white/30 mb-4">Festival Pillar 03</h3>
            <h4 className="text-2xl font-anton text-white mb-4 uppercase">Tourism & Economic Impact</h4>
            <p>The Hornbill Festival serves as a critical catalyst for tourism during peak season. Hotels, restaurants, local artisans, and service providers all benefit from the influx of visitors. We are actively working to extend the festival's economic impact beyond the event itself, driving year-round cultural tourism throughout Nagaland.</p>
          </div>
        </>
      )
    },
    global_partnerships: {
      title: "Global Partnerships",
      content: (
        <>
          <div className="border-l-2 border-white/10 pl-8">
            <h3 className="text-xs uppercase tracking-[0.5em] text-white/30 mb-4">Partnership Pillar 01</h3>
            <h4 className="text-2xl font-anton text-white mb-4 uppercase">International Music Bodies</h4>
            <p>We have established formal collaborations with leading international music organizations and federations. These partnerships open doors for knowledge exchange, joint programming, and advocacy on a global scale. Being recognized by these bodies lends credibility to the Nagaland music movement and amplifies our message to a worldwide audience.</p>
          </div>
          <div className="border-l-2 border-white/10 pl-8">
            <h3 className="text-xs uppercase tracking-[0.5em] text-white/30 mb-4">Partnership Pillar 02</h3>
            <h4 className="text-2xl font-anton text-white mb-4 uppercase">Festival Network</h4>
            <p>By joining an exclusive network of international music festivals, Naga artists now have pathways to perform on stages in Europe, Asia, and the Americas. These festival partnerships are reciprocal — international acts come to Nagaland while our artists gain coveted spots on prestigious global lineups, creating a vibrant cycle of cultural exchange.</p>
          </div>
          <div className="border-l-2 border-white/10 pl-8">
            <h3 className="text-xs uppercase tracking-[0.5em] text-white/30 mb-4">Partnership Pillar 03</h3>
            <h4 className="text-2xl font-anton text-white mb-4 uppercase">Cultural Diplomacy</h4>
            <p>Music is our most powerful diplomatic tool. Through strategic partnerships with cultural institutions and embassies, we are positioning Nagaland's unique artistic identity as a bridge between India's Northeast and the global community. This soft-power approach not only elevates our culture but also fosters goodwill and deeper international relationships.</p>
          </div>
        </>
      )
    },

    districts_covered: {
      title: "Districts Covered",
      content: (
        <>
          <div className="border-l-2 border-white/10 pl-8">
            <h3 className="text-xs uppercase tracking-[0.5em] text-white/30 mb-4">Coverage 01</h3>
            <h4 className="text-2xl font-anton text-white mb-4 uppercase">All 16 Districts</h4>
            <p>TaFMA's reach spans every one of Nagaland's 16 districts — from Kohima and Dimapur in the west to Mon and Tuensang in the east. This geographic inclusivity is a deliberate policy choice, ensuring that no tribe or community is left behind in Nagaland's creative renaissance. Infrastructure, training, and funding flow to each district based on its unique cultural needs.</p>
          </div>
          <div className="border-l-2 border-white/10 pl-8">
            <h3 className="text-xs uppercase tracking-[0.5em] text-white/30 mb-4">Coverage 02</h3>
            <h4 className="text-2xl font-anton text-white mb-4 uppercase">District Music Centers</h4>
            <p>Each district hosts a dedicated Music Center that functions as a local hub for training, recording, and community programming. These centers are staffed by professional musicians and educators, and are equipped with modern instruments and recording equipment. They serve as the grassroots foundation of the Music as an Industry movement.</p>
          </div>
          <div className="border-l-2 border-white/10 pl-8">
            <h3 className="text-xs uppercase tracking-[0.5em] text-white/30 mb-4">Coverage 03</h3>
            <h4 className="text-2xl font-anton text-white mb-4 uppercase">Cultural Mapping</h4>
            <p>A comprehensive cultural mapping exercise has been completed across all districts, documenting over 200 distinct tribal music traditions, oral histories, and performance practices. This living archive forms the foundation for curriculum development and ensures that modernisation never comes at the cost of cultural authenticity.</p>
          </div>
        </>
      )
    },
    artists_supported: {
      title: "Artists Supported",
      content: (
        <>
          <div className="border-l-2 border-white/10 pl-8">
            <h3 className="text-xs uppercase tracking-[0.5em] text-white/30 mb-4">Support Pillar 01</h3>
            <h4 className="text-2xl font-anton text-white mb-4 uppercase">The 500+ Community</h4>
            <p>Over 500 artists have received direct support through TaFMA's programs — ranging from emerging talents still in school to established performers seeking international platforms. This community spans musicians, composers, producers, and visual artists whose work intersects with the cultural economy. Each artist is treated not as a beneficiary but as a creative entrepreneur in their own right.</p>
          </div>
          <div className="border-l-2 border-white/10 pl-8">
            <h3 className="text-xs uppercase tracking-[0.5em] text-white/30 mb-4">Support Pillar 02</h3>
            <h4 className="text-2xl font-anton text-white mb-4 uppercase">Mentorship & Training</h4>
            <p>Each supported artist receives a tailored development plan covering musical skill enhancement, digital presence building, rights management, and revenue diversification. One-on-one mentorship sessions with established industry figures are supplemented by group workshops on topics from live performance technique to social media strategy.</p>
          </div>
          <div className="border-l-2 border-white/10 pl-8">
            <h3 className="text-xs uppercase tracking-[0.5em] text-white/30 mb-4">Support Pillar 03</h3>
            <h4 className="text-2xl font-anton text-white mb-4 uppercase">Alumni Network</h4>
            <p>Supported artists become lifelong members of the TaFMA alumni network — a growing community of creative professionals who collaborate, refer, and support one another. This network is one of Nagaland's most valuable informal institutions, connecting local talent with national labels, festival bookers, and international collaborators.</p>
          </div>
        </>
      )
    },
    global_reach: {
      title: "Global Partnerships",
      content: (
        <>
          <div className="border-l-2 border-white/10 pl-8">
            <h3 className="text-xs uppercase tracking-[0.5em] text-white/30 mb-4">Partnership 01</h3>
            <h4 className="text-2xl font-anton text-white mb-4 uppercase">Europe & Southeast Asia</h4>
            <p>Formal agreements with music bodies in Germany, the Netherlands, and Singapore provide Naga artists with direct pathways to prestigious international stages. These partnerships include artist exchange programs, co-production opportunities, and joint grant applications that unlock funding streams previously inaccessible to Northeast Indian artists.</p>
          </div>
          <div className="border-l-2 border-white/10 pl-8">
            <h3 className="text-xs uppercase tracking-[0.5em] text-white/30 mb-4">Partnership 02</h3>
            <h4 className="text-2xl font-anton text-white mb-4 uppercase">Festival Network</h4>
            <p>TaFMA is now a recognised member of the Global Festival Alliance, giving Hornbill and other Nagaland festivals access to a worldwide network of over 300 member events. This affiliation enables cross-promotion, shared production expertise, and the kind of international credibility that attracts global sponsors and media coverage.</p>
          </div>
          <div className="border-l-2 border-white/10 pl-8">
            <h3 className="text-xs uppercase tracking-[0.5em] text-white/30 mb-4">Partnership 03</h3>
            <h4 className="text-2xl font-anton text-white mb-4 uppercase">Cultural Diplomacy</h4>
            <p>Collaborations with Indian embassies and cultural institutes abroad have placed Naga performers at diplomatic events across 20 countries. These performances serve a dual purpose — showcasing world-class talent while building soft-power relationships that open doors for future collaboration and investment into the Northeast region.</p>
          </div>
        </>
      )
    },
    creative_economy: {
      title: "Creative Economy",
      content: (
        <>
          <div className="border-l-2 border-white/10 pl-8">
            <h3 className="text-xs uppercase tracking-[0.5em] text-white/30 mb-4">Economy Pillar 01</h3>
            <h4 className="text-2xl font-anton text-white mb-4 uppercase">₹50 Crore & Growing</h4>
            <p>For the first time in Nagaland's history, the creative industries have been measured as a discrete economic contributor — generating over ₹50 crore annually through music production, live events, cultural tourism, and associated hospitality. This figure is projected to triple within five years as the infrastructure Theja has built begins to compound returns.</p>
          </div>
          <div className="border-l-2 border-white/10 pl-8">
            <h3 className="text-xs uppercase tracking-[0.5em] text-white/30 mb-4">Economy Pillar 02</h3>
            <h4 className="text-2xl font-anton text-white mb-4 uppercase">Employment Generation</h4>
            <p>Beyond the headline figure, the creative economy has generated thousands of indirect jobs — in event management, hospitality, transport, craft, and digital production. These are stable, skilled roles that keep young Nagas employed in their home state rather than migrating to larger cities, addressing one of Nagaland's most pressing socioeconomic challenges.</p>
          </div>
          <div className="border-l-2 border-white/10 pl-8">
            <h3 className="text-xs uppercase tracking-[0.5em] text-white/30 mb-4">Economy Pillar 03</h3>
            <h4 className="text-2xl font-anton text-white mb-4 uppercase">Investment Attraction</h4>
            <p>The demonstrated success of the creative economy has attracted private investment from national media companies, streaming platforms, and hospitality groups who previously overlooked Nagaland entirely. A formal investment summit is now held annually, with TaFMA presenting bankable project proposals to a curated audience of domestic and international investors.</p>
          </div>
        </>
      )
    },
    timeline_2008: {
      title: "The First Note — 2008",
      content: (
        <>
          <div className="border-l-2 border-white/10 pl-8">
            <h3 className="text-xs uppercase tracking-[0.5em] text-white/30 mb-4">Origin</h3>
            <h4 className="text-2xl font-anton text-white mb-4 uppercase">Kohima's Streets</h4>
            <p>It began not on a grand stage but at small community gatherings in Kohima — weddings, church events, and local festivals where Theja Meru first discovered the transformative power of performance. His early style was raw and rooted in traditional Naga folk, an instinctive expression of the sounds he grew up hearing in his community.</p>
          </div>
          <div className="border-l-2 border-white/10 pl-8">
            <h3 className="text-xs uppercase tracking-[0.5em] text-white/30 mb-4">The Formative Years</h3>
            <h4 className="text-2xl font-anton text-white mb-4 uppercase">Learning by Doing</h4>
            <p>Without access to formal music education or industry mentors, Theja taught himself the craft through obsessive listening, practice, and performance. He studied international artists while staying true to his cultural roots — a duality that would become his defining artistic signature and the philosophical foundation of everything he would later build.</p>
          </div>
        </>
      )
    },
    timeline_2012: {
      title: "Going National — 2012",
      content: (
        <>
          <div className="border-l-2 border-white/10 pl-8">
            <h3 className="text-xs uppercase tracking-[0.5em] text-white/30 mb-4">Breakthrough</h3>
            <h4 className="text-2xl font-anton text-white mb-4 uppercase">The Debut Album</h4>
            <p>The release of his debut album marked a turning point — not just for Theja personally, but for Nagaland's entire music identity. The record blended Naga tribal instruments with contemporary production, and was received with genuine enthusiasm by critics who had rarely paid attention to music from the Northeast. It opened doors that had previously seemed permanently closed.</p>
          </div>
          <div className="border-l-2 border-white/10 pl-8">
            <h3 className="text-xs uppercase tracking-[0.5em] text-white/30 mb-4">National Recognition</h3>
            <h4 className="text-2xl font-anton text-white mb-4 uppercase">A New Conversation</h4>
            <p>The album sparked a national conversation about the richness and diversity of music from India's Northeast — a region often overlooked by mainstream cultural institutions. Invitations to perform at national festivals, television appearances, and collaborations with established national artists followed, cementing Theja's reputation as a pioneer of a new Naga sound.</p>
          </div>
        </>
      )
    },
    timeline_2015: {
      title: "TaFMA is Born — 2015",
      content: (
        <>
          <div className="border-l-2 border-white/10 pl-8">
            <h3 className="text-xs uppercase tracking-[0.5em] text-white/30 mb-4">The Appointment</h3>
            <h4 className="text-2xl font-anton text-white mb-4 uppercase">A Mandate for Change</h4>
            <p>When Theja was appointed Chairman of the Task Force for Music & Arts, he saw it not as an administrative role but as a once-in-a-generation opportunity to build the institutional infrastructure that Nagaland's creative community had always lacked. His first act was to commission a comprehensive audit of the state's cultural assets — mapping talent, venues, traditions, and gaps.</p>
          </div>
          <div className="border-l-2 border-white/10 pl-8">
            <h3 className="text-xs uppercase tracking-[0.5em] text-white/30 mb-4">First 100 Days</h3>
            <h4 className="text-2xl font-anton text-white mb-4 uppercase">Setting the Agenda</h4>
            <p>The first 100 days of TaFMA produced a landmark policy document — the Nagaland Creative Economy Framework — that outlined a ten-year roadmap for transforming the arts from a cultural hobby to a structured industry. This document became the blueprint for every initiative that followed, and has since been cited as a model for other states developing their own creative economy strategies.</p>
          </div>
        </>
      )
    },
    timeline_2018: {
      title: "Hornbill Elevated — 2018",
      content: (
        <>
          <div className="border-l-2 border-white/10 pl-8">
            <h3 className="text-xs uppercase tracking-[0.5em] text-white/30 mb-4">The Transformation</h3>
            <h4 className="text-2xl font-anton text-white mb-4 uppercase">From Local to International</h4>
            <p>The 2018 Hornbill Festival was the first to operate under Theja's full creative direction, and the results were dramatic. Stage production was upgraded to international standards, the lineup was expanded to include globally recognised headliners, and a dedicated media centre was established to serve the 200+ national and international journalists who attended.</p>
          </div>
          <div className="border-l-2 border-white/10 pl-8">
            <h3 className="text-xs uppercase tracking-[0.5em] text-white/30 mb-4">Economic Impact</h3>
            <h4 className="text-2xl font-anton text-white mb-4 uppercase">Tourism Multiplier</h4>
            <p>The 2018 edition generated a measurable tourism spike — hotel occupancy in Kohima reached 100% for the first time, airlines added special routes, and local artisans reported their highest-ever sales figures. This data became the foundation for the economic case that Theja would take to government and private investors in the years that followed.</p>
          </div>
        </>
      )
    },
    timeline_2021: {
      title: "Global Partnerships — 2021",
      content: (
        <>
          <div className="border-l-2 border-white/10 pl-8">
            <h3 className="text-xs uppercase tracking-[0.5em] text-white/30 mb-4">The Agreements</h3>
            <h4 className="text-2xl font-anton text-white mb-4 uppercase">Signing with the World</h4>
            <p>Despite the constraints of a global pandemic, 2021 saw Theja finalise landmark agreements with international music bodies in Europe and Southeast Asia. These were negotiated through digital channels over eighteen months of persistent relationship-building — a testament to his conviction that geography and circumstance need not limit ambition.</p>
          </div>
          <div className="border-l-2 border-white/10 pl-8">
            <h3 className="text-xs uppercase tracking-[0.5em] text-white/30 mb-4">Impact on Artists</h3>
            <h4 className="text-2xl font-anton text-white mb-4 uppercase">Doors Opened</h4>
            <p>Within a year of the agreements being signed, three Naga artists performed at major international festivals in Europe for the first time. These performances were livestreamed to global audiences and generated international press coverage that no Naga artist had previously received — a direct result of the institutional partnerships Theja had built.</p>
          </div>
        </>
      )
    },
    timeline_2024: {
      title: "The Creative Economy — 2024",
      content: (
        <>
          <div className="border-l-2 border-white/10 pl-8">
            <h3 className="text-xs uppercase tracking-[0.5em] text-white/30 mb-4">The Milestone</h3>
            <h4 className="text-2xl font-anton text-white mb-4 uppercase">Vision Becomes Reality</h4>
            <p>In 2024, for the first time, Nagaland's creative industries were formally included in the state's economic reporting — a recognition that the sector had crossed the threshold from cultural activity to measurable economic contributor. The ₹50 crore figure was not just a number; it was proof that Theja's decade-long vision was structurally sound.</p>
          </div>
          <div className="border-l-2 border-white/10 pl-8">
            <h3 className="text-xs uppercase tracking-[0.5em] text-white/30 mb-4">Looking Forward</h3>
            <h4 className="text-2xl font-anton text-white mb-4 uppercase">Nagaland 2030</h4>
            <p>With the infrastructure now in place and the numbers proving the model, the focus shifts to scale. The Nagaland 2030 roadmap — an expansion of the original Creative Economy Framework — targets a tenfold increase in creative economy GDP, an Arts University, and Nagaland's recognition as a UNESCO Creative City of Music. The dream is no longer distant; it is a scheduled destination.</p>
          </div>
        </>
      )
    },
    press_hindu: {
      title: "The Hindu — 2023",
      content: (
        <>
          <div className="border-l-2 border-white/10 pl-8">
            <h3 className="text-xs uppercase tracking-[0.5em] text-white/30 mb-4">Feature Coverage</h3>
            <h4 className="text-2xl font-anton text-white mb-4 uppercase">Rewriting the Narrative</h4>
            <p>The Hindu's 2023 feature on Theja Meru was one of the most widely read cultural pieces the publication had run on a Northeast subject. The journalist spent a week in Nagaland, attending rehearsals, visiting district centers, and interviewing artists whose lives had been transformed by TaFMA's programs. The resulting piece was a nuanced portrait of systemic change driven by personal conviction.</p>
          </div>
          <div className="border-l-2 border-white/10 pl-8">
            <h3 className="text-xs uppercase tracking-[0.5em] text-white/30 mb-4">Critical Reception</h3>
            <h4 className="text-2xl font-anton text-white mb-4 uppercase">National Impact</h4>
            <p>The article generated significant national policy interest, with two other state governments reaching out to TaFMA to understand the model. It was cited in a parliamentary discussion on the creative economy and led to Theja being invited to speak at the India Cultural Summit — the country's most prestigious gathering of cultural policymakers.</p>
          </div>
        </>
      )
    },
    press_forbes: {
      title: "Forbes India — 2022",
      content: (
        <>
          <div className="border-l-2 border-white/10 pl-8">
            <h3 className="text-xs uppercase tracking-[0.5em] text-white/30 mb-4">Business Profile</h3>
            <h4 className="text-2xl font-anton text-white mb-4 uppercase">The Entrepreneurial Vision</h4>
            <p>Forbes India's profile focused on Theja's rare combination of artistic credibility and institutional effectiveness — a blend that most creative leaders struggle to achieve. The piece examined his approach to funding, governance, and scale, drawing parallels with creative economy leaders in Europe and Southeast Asia who had similarly transformed their regions through cultural investment.</p>
          </div>
          <div className="border-l-2 border-white/10 pl-8">
            <h3 className="text-xs uppercase tracking-[0.5em] text-white/30 mb-4">Investment Angle</h3>
            <h4 className="text-2xl font-anton text-white mb-4 uppercase">Attracting Capital</h4>
            <p>The Forbes feature directly led to investor interest from three national media companies who had previously overlooked Nagaland entirely. The article's framing of the creative economy as a bankable investment thesis — rather than a charitable cause — was exactly the narrative shift Theja had been working to create.</p>
          </div>
        </>
      )
    },
    connect_artists: {
      title: "For Artists & Musicians",
      content: (
        <>
          <div className="border-l-2 border-white/10 pl-8">
            <h3 className="text-xs uppercase tracking-[0.5em] text-white/30 mb-4">How We Help 01</h3>
            <h4 className="text-2xl font-anton text-white mb-4 uppercase">Mentorship Programs</h4>
            <p>Whether you are an emerging artist taking your first steps or an established performer seeking to scale your career, TaFMA's mentorship programs are designed to meet you where you are. You'll be matched with an industry mentor who has navigated the exact challenges you face — from rights management to international touring — and will receive structured guidance over a six-month engagement.</p>
          </div>
          <div className="border-l-2 border-white/10 pl-8">
            <h3 className="text-xs uppercase tracking-[0.5em] text-white/30 mb-4">How We Help 02</h3>
            <h4 className="text-2xl font-anton text-white mb-4 uppercase">Funding & Platforms</h4>
            <p>Access to grant funding, production subsidies, and performance opportunities are available to artists who complete our onboarding process. TaFMA maintains relationships with national and international festivals, streaming platforms, and media companies who are actively seeking Naga talent — and we make the introductions that open doors.</p>
          </div>
          <div className="border-l-2 border-white/10 pl-8">
            <h3 className="text-xs uppercase tracking-[0.5em] text-white/30 mb-4">How We Help 03</h3>
            <h4 className="text-2xl font-anton text-white mb-4 uppercase">Get Started</h4>
            <p>To begin the process, reach out via the contact form or email with a brief introduction, links to your work, and a description of where you are in your career and what kind of support you are looking for. All applications are reviewed personally and you will receive a response within two weeks.</p>
          </div>
        </>
      )
    },
    connect_institutions: {
      title: "For Institutions",
      content: (
        <>
          <div className="border-l-2 border-white/10 pl-8">
            <h3 className="text-xs uppercase tracking-[0.5em] text-white/30 mb-4">Partnership Type 01</h3>
            <h4 className="text-2xl font-anton text-white mb-4 uppercase">Policy Collaboration</h4>
            <p>Government bodies, cultural institutions, and academic organizations seeking to develop or refine cultural economy policies are welcome to engage TaFMA as a knowledge partner. We offer consultation, co-authorship of policy documents, and access to our decade of field data from Nagaland — one of India's most successful creative economy experiments.</p>
          </div>
          <div className="border-l-2 border-white/10 pl-8">
            <h3 className="text-xs uppercase tracking-[0.5em] text-white/30 mb-4">Partnership Type 02</h3>
            <h4 className="text-2xl font-anton text-white mb-4 uppercase">Event Partnerships</h4>
            <p>Festivals, conferences, and cultural events seeking to feature Naga artists or to co-produce cross-cultural programming are invited to discuss partnership structures. TaFMA can facilitate artist placement, provide cultural context and documentation, and co-produce events that authentically represent Nagaland's creative traditions on national and international stages.</p>
          </div>
          <div className="border-l-2 border-white/10 pl-8">
            <h3 className="text-xs uppercase tracking-[0.5em] text-white/30 mb-4">Partnership Type 03</h3>
            <h4 className="text-2xl font-anton text-white mb-4 uppercase">Research & Documentation</h4>
            <p>Academic institutions and think tanks interested in studying the Nagaland creative economy model are encouraged to reach out. We maintain comprehensive data on artist development, economic impact, and policy outcomes, and are open to collaborative research that advances the global understanding of culture-led regional development.</p>
          </div>
        </>
      )
    },
    connect_entrepreneurs: {
      title: "For Entrepreneurs",
      content: (
        <>
          <div className="border-l-2 border-white/10 pl-8">
            <h3 className="text-xs uppercase tracking-[0.5em] text-white/30 mb-4">Support Type 01</h3>
            <h4 className="text-2xl font-anton text-white mb-4 uppercase">Incubation & Advisory</h4>
            <p>Creative entrepreneurs building businesses in music, arts, cultural tourism, or adjacent sectors are invited to apply for TaFMA's incubation program. Accepted ventures receive office space, mentorship from Theja and his network, connections to early-stage investors, and a structured twelve-week program that takes ideas from concept to fundable business plan.</p>
          </div>
          <div className="border-l-2 border-white/10 pl-8">
            <h3 className="text-xs uppercase tracking-[0.5em] text-white/30 mb-4">Support Type 02</h3>
            <h4 className="text-2xl font-anton text-white mb-4 uppercase">Investment Connections</h4>
            <p>For ventures that have passed the ideation stage and are seeking growth capital, TaFMA facilitates introductions to its investor network — a curated group of impact investors, cultural economy funds, and strategic corporate partners who understand the Nagaland market and believe in its potential. Warm introductions are made only when there is genuine alignment.</p>
          </div>
          <div className="border-l-2 border-white/10 pl-8">
            <h3 className="text-xs uppercase tracking-[0.5em] text-white/30 mb-4">Support Type 03</h3>
            <h4 className="text-2xl font-anton text-white mb-4 uppercase">Creative Economy Advisory</h4>
            <p>Established businesses seeking to enter the creative economy space — whether through sponsorship, content production, or cultural tourism — can engage Theja directly as an advisor. His experience sitting at the intersection of culture, commerce, and policy makes him uniquely positioned to help businesses navigate this complex and rapidly evolving sector.</p>
          </div>
        </>
      )
    },
    contact: {
      title: "Get in Touch",
      content: (
        <>
          <div className="border-l-2 border-white/10 pl-8">
            <h3 className="text-xs uppercase tracking-[0.5em] text-white/30 mb-4">Contact 01</h3>
            <h4 className="text-2xl font-anton text-white mb-4 uppercase">Direct Email</h4>
            <p className="mb-4">The most direct way to reach Theja Meru and the TaFMA team is via email. Whether you are an artist seeking mentorship, an institution exploring partnership, or a journalist requesting an interview — all enquiries are read personally and responded to within two weeks.</p>
            <div className="mt-6 p-4 rounded-xl border border-white/10 inline-flex items-center gap-3" style={{ background: "linear-gradient(135deg, rgba(0,242,255,0.05), rgba(112,0,255,0.05))" }}>
              <ExternalLink className="w-4 h-4 text-cyan-400 flex-shrink-0" />
              <a href="mailto:contact@thejameru.com" className="font-bold text-white hover:text-cyan-300 transition-colors duration-300 text-lg tracking-wide">contact@thejameru.com</a>
            </div>
          </div>
          <div className="border-l-2 border-white/10 pl-8">
            <h3 className="text-xs uppercase tracking-[0.5em] text-white/30 mb-4">Contact 02</h3>
            <h4 className="text-2xl font-anton text-white mb-4 uppercase">Social Media</h4>
            <p className="mb-6">Follow Theja's work in real time — from festival announcements and artist features to policy updates and personal reflections on Nagaland's creative journey. His social channels are the most current window into the movement he is building.</p>
            <div className="flex flex-wrap gap-4">
              {[
                { platform: "Instagram", handle: "@thejameru", desc: "Behind-the-scenes & festival updates" },
                { platform: "Twitter / X", handle: "@thejameru", desc: "Policy commentary & cultural discourse" },
                { platform: "LinkedIn", handle: "Theja Meru", desc: "Professional updates & partnerships" },
              ].map((s, i) => (
                <div key={i} className="p-4 rounded-xl border border-white/10 hover:border-white/25 transition-all duration-300 group" style={{ background: "linear-gradient(135deg, rgba(0,242,255,0.03), rgba(112,0,255,0.03))" }}>
                  <p className="font-bold text-white text-sm uppercase tracking-wider mb-1">{s.platform}</p>
                  <p className="text-cyan-400 text-sm mb-1">{s.handle}</p>
                  <p className="text-white/40 text-xs">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="border-l-2 border-white/10 pl-8">
            <h3 className="text-xs uppercase tracking-[0.5em] text-white/30 mb-4">Contact 03</h3>
            <h4 className="text-2xl font-anton text-white mb-4 uppercase">Office & Location</h4>
            <p className="mb-6">TaFMA's headquarters is based in Kohima, the capital of Nagaland. In-person meetings can be arranged for institutional partners and are held at the TaFMA Creative Hub — a dedicated space for collaboration, production, and community programming in the heart of the city.</p>
            <div className="p-5 rounded-xl border border-white/10" style={{ background: "linear-gradient(135deg, rgba(0,242,255,0.03), rgba(112,0,255,0.03))" }}>
              <p className="text-white font-bold uppercase tracking-wider text-sm mb-1">TaFMA Creative Hub</p>
              <p className="text-white/50 text-sm">Kohima, Nagaland — 797001</p>
              <p className="text-white/30 text-xs mt-2 uppercase tracking-widest">Northeast India</p>
            </div>
          </div>
        </>
      )
    },
    visionary_role: {
      title: "The Visionary",
      content: (
        <>
          <div className="border-l-2 border-white/10 pl-8">
            <h3 className="text-xs uppercase tracking-[0.5em] text-white/30 mb-4">Strategic Leadership</h3>
            <h4 className="text-2xl font-anton text-white mb-4 uppercase">TaFMA Leadership</h4>
            <p>As the Chairman of TaFMA, Theja Meru has redefined the role of government in the arts. His visionary leadership has led to the implementation of groundbreaking policies that have put Nagaland on the global music map. He views TaFMA not just as a task force, but as a movement for cultural and economic transformation.</p>
          </div>
          <div className="border-l-2 border-white/10 pl-8">
            <h3 className="text-xs uppercase tracking-[0.5em] text-white/30 mb-4">Global Outlook</h3>
            <h4 className="text-2xl font-anton text-white mb-4 uppercase">International Diplomacy</h4>
            <p>He has successfully forged partnerships with international organizations, bringing global expertise to Nagaland and showcasing Naga talent to the world. His ability to build bridges across cultures has been instrumental in creating new opportunities for Naga artists on the international stage.</p>
          </div>
          <div className="border-l-2 border-white/10 pl-8">
            <h3 className="text-xs uppercase tracking-[0.5em] text-white/30 mb-4">Legacy</h3>
            <h4 className="text-2xl font-anton text-white mb-4 uppercase">Building for the Future</h4>
            <p>His vision extends far beyond his current tenure. He is committed to building a legacy that will benefit generations to come. This includes investing in education, infrastructure, and community programs that ensure the long-term sustainability of the creative industries in Nagaland.</p>
          </div>
        </>
      )
    }
  };

  return (
    <div className="min-h-screen font-poppins transition-colors duration-500" style={{
      background: dark ? '#000000' : '#f5f3ef',
      color: dark ? '#ffffff' : '#0a0a0a',
    }}>
      <Navbar onNavigate={(id) => setActiveSubpage(id)} theme={theme} toggleTheme={toggleTheme} />
      
      <AnimatePresence>
        {activeSubpage && subpages[activeSubpage] && (
          <Subpage 
            title={subpages[activeSubpage].title}
            content={subpages[activeSubpage].content}
            onBack={() => setActiveSubpage(null)}
            dark={dark}
          />
        )}
      </AnimatePresence>

      <div className={activeSubpage ? 'hidden' : 'block'}>
        {/* Hero Section */}
        <div id="hero">
          <MusicReactiveHero />
        </div>

        {/* About Section */}
        <div id="about">
          <Section className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center md:items-start text-center md:text-left"
          >
            <h2 className="text-3xl md:text-7xl font-anton mb-3 md:mb-6 leading-none uppercase animate-color-flow" style={{ background: dark ? "linear-gradient(135deg,#ffffff,#00f2ff,#b060ff,#ff00ea,#ffffff)" : "linear-gradient(135deg,#0a0a0a,#0057ff,#8b00ff,#ff0099,#0a0a0a)", backgroundSize:"300% auto", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", backgroundClip:"text" }}>
              The Visionary <br />
              <span style={{WebkitTextFillColor: dark ? "rgba(255,255,255,0.4)" : "rgba(10,10,10,0.5)"}}>Architect</span>
            </h2>
            <p style={{ color: dark ? "rgba(255,255,255,0.65)" : "rgba(10,10,10,0.85)" }} className="text-sm md:text-xl mb-4 md:mb-10 leading-relaxed">
              Theja Meru is a name synonymous with the creative revolution in Nagaland. 
              As the Chairman of the Task Force for Music & Arts (TaFMA), he has transformed 
              the state's musical landscape from a cultural hobby into a thriving industry.
            </p>
            <div className="flex gap-2 overflow-x-auto no-scrollbar pb-2">
              <button 
                onClick={() => setActiveSubpage('musician')}
                style={{ 
                  background: dark 
                    ? "linear-gradient(90deg, #1e3a8a, #3b82f6, #06b6d4, #1e3a8a)" 
                    : "linear-gradient(90deg, #1d4ed8, #2563eb, #0ea5e9, #1d4ed8)",
                  backgroundSize: "200% auto",
                  color: "#ffffff",
                  border: "none",
                  boxShadow: dark ? "0 0 15px rgba(59,130,246,0.4)" : "0 4px 12px rgba(29,78,216,0.2)"
                }} 
                className="flex items-center gap-1 px-2 py-0.5 md:px-3 md:py-1 rounded-full text-[9px] md:text-[10px] font-bold uppercase tracking-widest whitespace-nowrap transition-all hover:scale-105 active:scale-95 animate-color-flow"
              >
                <Music className="w-2.5 h-2.5 md:w-3 md:h-3" /> Musician
              </button>
              <button 
                onClick={() => setActiveSubpage('entrepreneur')}
                style={{ 
                  background: dark 
                    ? "linear-gradient(90deg, #6d28d9, #db2777, #f59e0b, #6d28d9)" 
                    : "linear-gradient(90deg, #7c3aed, #e11d48, #fbbf24, #7c3aed)",
                  backgroundSize: "200% auto",
                  color: "#ffffff",
                  border: "none",
                  boxShadow: dark ? "0 0 15px rgba(219,39,119,0.4)" : "0 4px 12px rgba(124,58,237,0.2)"
                }} 
                className="flex items-center gap-1 px-2 py-0.5 md:px-3 md:py-1 rounded-full text-[9px] md:text-[10px] font-bold uppercase tracking-widest whitespace-nowrap transition-all hover:scale-105 active:scale-95 animate-color-flow"
              >
                <Briefcase className="w-2.5 h-2.5 md:w-3 md:h-3" /> Entrepreneur
              </button>
              <button 
                onClick={() => setActiveSubpage('visionary_role')}
                style={{ 
                  background: dark 
                    ? "linear-gradient(90deg, #059669, #0891b2, #4f46e5, #059669)" 
                    : "linear-gradient(90deg, #10b981, #06b6d4, #6366f1, #10b981)",
                  backgroundSize: "200% auto",
                  color: "#ffffff",
                  border: "none",
                  boxShadow: dark ? "0 0 15px rgba(16,185,129,0.4)" : "0 4px 12px rgba(16,185,129,0.2)"
                }} 
                className="flex items-center gap-1 px-2 py-0.5 md:px-3 md:py-1 rounded-full text-[9px] md:text-[10px] font-bold uppercase tracking-widest whitespace-nowrap transition-all hover:scale-105 active:scale-95 animate-color-flow"
              >
                <Globe className="w-2.5 h-2.5 md:w-3 md:h-3" /> Visionary
              </button>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            whileHover={{ 
              rotateY: 15, 
              rotateX: -5,
              scale: 1.02,
              z: 50
            }}
            transition={{ 
              type: "spring", 
              stiffness: 300, 
              damping: 20 
            }}
            style={{ transformStyle: "preserve-3d", perspective: 1000 }}
            className="relative aspect-[479/542] rounded-3xl overflow-hidden border border-white/10 max-w-[200px] md:max-w-md mx-auto group cursor-crosshair shadow-2xl shadow-cyan-500/10 w-full"
          >
            <motion.img 
              src="https://i.ibb.co/fdN7wNqZ/theja-meru-479x542.jpg" 
              alt="Theja Meru Vision" 
              className="w-full h-full object-contain transition-all duration-700"
              referrerPolicy="no-referrer"
              style={{ translateZ: 20 }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
            <motion.div 
              className="absolute bottom-8 left-0 right-0 flex flex-col items-center text-center"
              style={{ translateZ: 60 }}
            >
              <p className="text-[10px] uppercase tracking-[0.4em] text-white/50 mb-1">Current Role</p>
              <p className="text-xl font-anton uppercase text-white">Chairman, TaFMA</p>
            </motion.div>
            
            {/* Shine effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-20 bg-gradient-to-tr from-transparent via-white to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
          </motion.div>
        </Section>
      </div>

      {/* Initiatives Section */}
        <div id="initiatives" style={{ background: dark ? 'rgba(255,255,255,0.03)' : 'rgba(0,0,0,0.03)' }}>
          <Section>
            <div className="text-center mb-8 md:mb-16">
              <h2 style={{ color: dark ? "#ffffff" : "#0a0a0a" }} className="text-2xl md:text-6xl font-anton mb-3 md:mb-4 uppercase">Key Initiatives</h2>
              <p style={{ color: dark ? "rgba(255,255,255,0.4)" : "rgba(10,10,10,0.6)" }} className="text-sm md:text-base max-w-xl mx-auto">Building the infrastructure for the next generation of Naga talent.</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-4 md:gap-8">
              <Card 
                icon={TrendingUp}
                title="Music Industry"
                description="Pioneering the 'Music as an Industry' movement, creating sustainable career paths for local artists."
                onClick={() => setActiveSubpage('music_industry')}
                dark={dark}
                colorIndex={0}
              />
              <Card 
                icon={Award}
                title="Hornbill Festival"
                description="Elevating the Hornbill Music Festival to international standards, attracting global talent and tourism."
                onClick={() => setActiveSubpage('hornbill_festival')}
                dark={dark}
                colorIndex={1}
              />
              <Card 
                icon={Globe}
                title="Global Partnerships"
                description="Establishing collaborations with international music bodies and festivals to showcase Naga culture worldwide."
                onClick={() => setActiveSubpage('global_partnerships')}
                dark={dark}
                colorIndex={2}
              />
            </div>
          </Section>
        </div>

        {/* Scrolling Image Gallery */}
        <div className="py-14 relative" style={{ overflow: "hidden", touchAction: "none", userSelect: "none" }}>
          {/* Ambient background glow */}
          <div className="absolute inset-0 pointer-events-none" style={{
            background: "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(0,242,255,0.04) 0%, rgba(112,0,255,0.03) 50%, transparent 100%)"
          }} />

          {/* Row 1 — scrolls left */}
          <div className="flex gap-5 mb-5" style={{ animation: "scrollLeft 40s linear infinite", width: "max-content", pointerEvents: "none", willChange: "transform" }}>
            {[
              "https://i.ibb.co/Qv5zmqMH/Whats-App-Image-2026-03-17-at-3-39-46-PM.jpg",
              "https://i.ibb.co/WvVtjnkQ/Whats-App-Image-2026-03-17-at-3-39-45-PM-1.jpg",
              "https://i.ibb.co/TBxsJ6Yz/Whats-App-Image-2026-03-17-at-3-39-45-PM.jpg",
              "https://i.ibb.co/TDyT1KnQ/Whats-App-Image-2026-03-17-at-3-39-44-PM-2.jpg",
              "https://i.ibb.co/271mWwrV/Whats-App-Image-2026-03-17-at-3-39-44-PM-1.jpg",
              "https://i.ibb.co/twbb9HMH/Whats-App-Image-2026-03-17-at-3-39-44-PM.jpg",
              "https://i.ibb.co/DHmtTTXD/Whats-App-Image-2026-03-17-at-3-39-43-PM-2.jpg",
              "https://i.ibb.co/0yQPvgY2/Whats-App-Image-2026-03-17-at-3-39-43-PM-1.jpg",
              "https://i.ibb.co/HLt3yxND/Whats-App-Image-2026-03-17-at-3-39-43-PM.jpg",
              "https://i.ibb.co/v4ctL29n/Whats-App-Image-2026-03-17-at-3-39-42-PM-1.jpg",
              "https://i.ibb.co/hxrC82HG/Whats-App-Image-2026-03-17-at-3-39-42-PM.jpg",
              "https://i.ibb.co/nq74KZzq/Whats-App-Image-2026-03-17-at-3-39-41-PM.jpg",
            ].map((src, i) => (
              <div
                key={i}
                className="flex-shrink-0 rounded-2xl overflow-hidden relative group cursor-pointer"
                style={{
                  width: "340px",
                  height: "220px",
                  border: "1px solid rgba(255,255,255,0.08)",
                  boxShadow: "0 4px 24px rgba(0,0,0,0.4)",
                  transition: "transform 0.5s cubic-bezier(0.23,1,0.32,1), box-shadow 0.5s ease",
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.transform = "scale(1.06) translateY(-8px)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 20px 60px rgba(0,242,255,0.2), 0 0 0 1px rgba(0,242,255,0.3)";
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.transform = "scale(1) translateY(0)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 24px rgba(0,0,0,0.4)";
                }}
              >
                <img src={src} alt="" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" referrerPolicy="no-referrer" />
                {/* Bottom gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                {/* Top color bar */}
                <div className="absolute top-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{
                  background: "linear-gradient(90deg, #00f2ff, #7000ff, #ff00ea, #ffc400, #00f2ff)",
                  backgroundSize: "300% 100%",
                  animation: "colorFlow 3s ease infinite",
                  boxShadow: "0 0 12px rgba(0,242,255,0.6)",
                }} />
                {/* Shimmer sweep */}
                <div className="absolute inset-0 overflow-hidden opacity-0 group-hover:opacity-100 pointer-events-none">
                  <div style={{
                    position: "absolute", top: 0, left: 0,
                    width: "35%", height: "100%",
                    background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.08), transparent)",
                    animation: "cardShimmer 1.2s ease-out forwards",
                  }} />
                </div>
                {/* Glow border pulse */}
                <div className="absolute inset-0 rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{
                  boxShadow: "inset 0 0 0 1px rgba(0,242,255,0.3), 0 0 30px rgba(0,242,255,0.1)",
                  animation: "glowPulse 2s ease-in-out infinite",
                }} />
              </div>
            ))}
          </div>

          {/* Row 2 — scrolls right */}
          <div className="flex gap-5" style={{ animation: "scrollRight 32s linear infinite", width: "max-content", pointerEvents: "none", willChange: "transform" }}>
            {[
              "https://i.ibb.co/nq74KZzq/Whats-App-Image-2026-03-17-at-3-39-41-PM.jpg",
              "https://i.ibb.co/hxrC82HG/Whats-App-Image-2026-03-17-at-3-39-42-PM.jpg",
              "https://i.ibb.co/v4ctL29n/Whats-App-Image-2026-03-17-at-3-39-42-PM-1.jpg",
              "https://i.ibb.co/HLt3yxND/Whats-App-Image-2026-03-17-at-3-39-43-PM.jpg",
              "https://i.ibb.co/0yQPvgY2/Whats-App-Image-2026-03-17-at-3-39-43-PM-1.jpg",
              "https://i.ibb.co/DHmtTTXD/Whats-App-Image-2026-03-17-at-3-39-43-PM-2.jpg",
              "https://i.ibb.co/twbb9HMH/Whats-App-Image-2026-03-17-at-3-39-44-PM.jpg",
              "https://i.ibb.co/271mWwrV/Whats-App-Image-2026-03-17-at-3-39-44-PM-1.jpg",
              "https://i.ibb.co/TDyT1KnQ/Whats-App-Image-2026-03-17-at-3-39-44-PM-2.jpg",
              "https://i.ibb.co/TBxsJ6Yz/Whats-App-Image-2026-03-17-at-3-39-45-PM.jpg",
              "https://i.ibb.co/WvVtjnkQ/Whats-App-Image-2026-03-17-at-3-39-45-PM-1.jpg",
              "https://i.ibb.co/Qv5zmqMH/Whats-App-Image-2026-03-17-at-3-39-46-PM.jpg",
            ].map((src, i) => (
              <div
                key={i}
                className="flex-shrink-0 rounded-2xl overflow-hidden relative group cursor-pointer"
                style={{
                  width: "340px",
                  height: "220px",
                  border: "1px solid rgba(255,255,255,0.08)",
                  boxShadow: "0 4px 24px rgba(0,0,0,0.4)",
                  transition: "transform 0.5s cubic-bezier(0.23,1,0.32,1), box-shadow 0.5s ease",
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.transform = "scale(1.06) translateY(-8px)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 20px 60px rgba(112,0,255,0.2), 0 0 0 1px rgba(112,0,255,0.3)";
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.transform = "scale(1) translateY(0)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 24px rgba(0,0,0,0.4)";
                }}
              >
                <img src={src} alt="" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                {/* Top color bar */}
                <div className="absolute top-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{
                  background: "linear-gradient(90deg, #7000ff, #ff00ea, #ffc400, #00f2ff, #7000ff)",
                  backgroundSize: "300% 100%",
                  animation: "colorFlow 3s ease infinite",
                  boxShadow: "0 0 12px rgba(112,0,255,0.6)",
                }} />
                {/* Shimmer sweep */}
                <div className="absolute inset-0 overflow-hidden opacity-0 group-hover:opacity-100 pointer-events-none">
                  <div style={{
                    position: "absolute", top: 0, left: 0,
                    width: "35%", height: "100%",
                    background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.08), transparent)",
                    animation: "cardShimmer 1.2s ease-out forwards",
                  }} />
                </div>
                {/* Glow border pulse */}
                <div className="absolute inset-0 rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{
                  boxShadow: "inset 0 0 0 1px rgba(112,0,255,0.3), 0 0 30px rgba(112,0,255,0.1)",
                  animation: "glowPulse 2s ease-in-out infinite",
                }} />
              </div>
            ))}
          </div>
        </div>

        {/* Quote Section */}
        <Section className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <span
              className="text-8xl font-anton block mb-6"
              style={{
                color: dark ? "rgba(0,242,255,0.6)" : "rgba(0,87,255,0.5)",
              }}
            >"</span>
            <h2
              className="text-3xl md:text-5xl font-anton leading-tight uppercase mb-8 italic"
              style={{
                color: dark ? "rgba(255,255,255,0.92)" : "rgba(0,0,0,0.88)",
              }}
            >
              "Our dream is to make Nagaland the music capital of the world. 
              We are not just making music; we are building a legacy."
            </h2>
            <p
              className="text-lg uppercase tracking-[0.3em] font-bold"
              style={{
                color: dark ? "rgba(0,242,255,0.8)" : "rgba(0,87,255,0.8)",
              }}
            >- Theja Meru</p>
          </motion.div>
        </Section>

        {/* Entrepreneurship Section */}
        <div id="entrepreneurship">
          <Section className="grid md:grid-cols-2 gap-8 md:gap-16 items-center justify-items-center md:justify-items-start">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{
              rotateY: 8,
              rotateX: -5,
              scale: 1.03,
              y: -10,
            }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            style={{ transformStyle: "preserve-3d", perspective: 1000 }}
            className="order-2 md:order-1 flex items-center justify-center md:justify-end group cursor-pointer w-full"
          >
            <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl shadow-cyan-500/10 w-[280px] md:w-full md:max-w-[480px]">
              <img 
                src="https://i.ibb.co/1J79yLRW/Whats-App-Image-2026-03-17-at-3-34-03-PM.jpg" 
                alt="Entrepreneurship" 
                className="w-full h-auto block relative z-10"
                referrerPolicy="no-referrer"
              />
              {/* Shine sweep — low opacity, above image but not blocking it */}
              <div className="absolute inset-0 z-20 opacity-0 group-hover:opacity-100 bg-gradient-to-tr from-transparent via-white/8 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none" />
              {/* Color border glow */}
              <div
                className="absolute inset-0 z-20 rounded-3xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  boxShadow: "inset 0 0 0 1px rgba(0,242,255,0.3), 0 0 40px rgba(0,242,255,0.15), 0 0 80px rgba(112,0,255,0.1)",
                }}
              />
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-1 md:order-2 text-center md:text-left"
          >
            <h2 style={{ color: dark ? "#ffffff" : "#0a0a0a" }} className="text-3xl md:text-7xl font-anton mb-3 md:mb-6 leading-none uppercase">
              Creative <br />
              <span className="opacity-50">Entrepreneurship</span>
            </h2>
            <p style={{ color: dark ? "rgba(255,255,255,0.65)" : "rgba(10,10,10,0.85)" }} className="text-sm md:text-xl mb-4 md:mb-10 leading-relaxed">
              Beyond music, Theja is a serial entrepreneur who believes in the power of 
              creative economy. He mentors young startups and advocates for 
              innovation-led growth in the Northeast region of India.
            </p>
            <ul className="space-y-3 md:space-y-6">
              {[
                { label: "Mentoring Creative Startups", key: "mentoring_startups" },
                { label: "Policy Advocacy for Arts", key: "policy_advocacy" },
                { label: "Cultural Tourism Development", key: "cultural_tourism" },
                { label: "Youth Empowerment Programs", key: "youth_empowerment" },
              ].map((item, i) => (
                <li
                  key={i}
                  onClick={() => setActiveSubpage(item.key)}
                  className="flex items-center justify-center md:justify-start gap-3 text-sm md:text-lg font-bold uppercase tracking-tighter group cursor-pointer"
                >
                  <div className="w-5 md:w-8 h-[1px] bg-white/20 group-hover:w-8 md:group-hover:w-12 group-hover:bg-white transition-all flex-shrink-0" />
                  <span
                    style={{
                      background: dark 
                        ? "linear-gradient(90deg, #ffffff, #00f2ff, #b060ff, #ff00ea, #ffc400, #ffffff)"
                        : "linear-gradient(90deg, #0a0a0a, #0057ff, #8b00ff, #ff0099, #ff6b00, #0a0a0a)",
                      backgroundSize: "300% 100%",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                      animation: `colorFlow ${4 + i * 0.8}s ease infinite`,
                    }}
                  >{item.label}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </Section>
      </div>

        {/* ── Impact Numbers Section ─────────────────────────────────── */}
        <div style={{ background: dark ? "rgba(255,255,255,0.025)" : "rgba(0,0,0,0.025)", borderTop: dark ? "1px solid rgba(255,255,255,0.05)" : "1px solid rgba(0,0,0,0.05)", borderBottom: dark ? "1px solid rgba(255,255,255,0.05)" : "1px solid rgba(0,0,0,0.05)" }}>
          <Section>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-10 md:mb-16"
            >
              <h2 style={{ color: dark ? "#ffffff" : "#0a0a0a" }} className="text-2xl md:text-6xl font-anton uppercase mb-3">Impact by Numbers</h2>
              <p style={{ color: dark ? "rgba(255,255,255,0.4)" : "rgba(10,10,10,0.6)" }} className="text-sm md:text-base">A decade of building Nagaland's creative economy.</p>
            </motion.div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
              {[
                { n:"16",     l:"Districts Covered",   s:"Across Nagaland",    k:"districts_covered",   bg:"linear-gradient(135deg,#0f172a,#1e1b4b)", acc:"#818cf8", edge:"rgba(99,102,241,0.5)",  glow:"rgba(99,102,241,0.4)",  shape:"rounded-3xl" },
                { n:"500+",   l:"Artists Supported",  s:"And growing",        k:"artists_supported",   bg:"linear-gradient(135deg,#0d1f0f,#052e16)",  acc:"#34d399", edge:"rgba(52,211,153,0.5)",  glow:"rgba(16,185,129,0.4)",  shape:"rounded-full" },
                { n:"12+",    l:"Global Partnerships",s:"International reach", k:"global_reach",        bg:"linear-gradient(135deg,#1a0533,#2e1065)",  acc:"#c084fc", edge:"rgba(168,85,247,0.5)",  glow:"rgba(168,85,247,0.4)",  shape:"rounded-2xl rotate-3" },
                { n:"₹50Cr+", l:"Creative Economy",   s:"Generated annually", k:"creative_economy",    bg:"linear-gradient(135deg,#1c0a00,#431407)",  acc:"#fb923c", edge:"rgba(251,146,60,0.5)",  glow:"rgba(234,88,12,0.4)",   shape:"rounded-[2rem_0.5rem_2rem_0.5rem]" },
              ].map((s, i) => (
                <motion.div key={i}
                  initial={{ opacity:0, y:40 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }}
                  whileHover={{ y:-16, scale:1.06 }}
                  transition={{ delay:i*0.1, type:"spring", stiffness:220, damping:20 }}
                  onClick={() => setActiveSubpage(s.k)}
                  className={`text-center p-6 md:p-8 relative overflow-hidden group cursor-pointer ${s.shape}`}
                  style={{ background:s.bg, border:`1px solid ${s.edge}`, boxShadow:`0 0 0 1px rgba(0,0,0,0.5), 0 8px 40px ${s.glow}, 0 2px 0 rgba(255,255,255,0.03) inset` }}
                >
                  {/* Concentric ring decoration */}
                  <div className="absolute -top-12 -right-12 w-32 h-32 rounded-full pointer-events-none" style={{ border:`1px solid ${s.edge}`, opacity:0.4 }} />
                  <div className="absolute -top-6 -right-6 w-20 h-20 rounded-full pointer-events-none" style={{ border:`1px solid ${s.edge}`, opacity:0.3 }} />
                  {/* Top glow line */}
                  <div className="absolute top-0 left-0 right-0 h-[2px]" style={{ background:`linear-gradient(90deg,transparent,${s.acc},transparent)`, boxShadow:`0 0 16px ${s.glow}`, animation:"colorFlow 4s ease infinite", backgroundSize:"200% 100%" }} />
                  {/* Hover shimmer */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 overflow-hidden pointer-events-none" style={{transition:"opacity 0.3s"}}>
                    <div style={{position:"absolute",top:"-50%",left:"-80%",width:"55%",height:"200%",background:"linear-gradient(105deg,transparent,rgba(255,255,255,0.06),transparent)",transform:"skewX(-15deg)",animation:"shimmerSweep 1.4s ease-out forwards"}} />
                  </div>
                  <p className="text-5xl md:text-6xl font-anton mb-3 relative z-10" style={{ color:s.acc, filter:`drop-shadow(0 0 20px ${s.glow})` }}>{s.n}</p>
                  <p className="font-bold uppercase tracking-widest text-xs md:text-sm mb-1 relative z-10 text-white">{s.l}</p>
                  <p className="text-xs uppercase tracking-wider relative z-10" style={{ color:"rgba(255,255,255,0.4)" }}>{s.s}</p>
                </motion.div>
              ))}
            </div>
          </Section>
        </div>

        {/* ── Journey / Timeline Section ──────────────────────────────── */}
        <Section>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10 md:mb-16"
          >
            <h2 style={{ color: dark ? "#ffffff" : "#0a0a0a" }} className="text-2xl md:text-6xl font-anton uppercase mb-3">The Journey</h2>
            <p className={`${dark ? 'text-white/40' : 'text-black/50'} text-sm md:text-base`}>From musician to cultural architect — a timeline of transformation.</p>
          </motion.div>
          <div className="relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[1px] md:-translate-x-1/2" style={{ background: dark ? "linear-gradient(180deg,transparent,rgba(0,242,255,0.4),rgba(112,0,255,0.4),rgba(255,0,234,0.4),transparent)" : "linear-gradient(180deg,transparent,rgba(0,87,255,0.25),rgba(139,0,255,0.25),rgba(255,0,153,0.25),transparent)" }} />
            <div className="space-y-10 md:space-y-16">
              {[
                { year: "2008", title: "TaFMA Founded",           desc: "Established the Task Force for Music & Arts with a mandate to transform Nagaland's creative economy.", side:"left",  subpage:"timeline_2008", bg:"linear-gradient(145deg,#0f1f3d,#1a3460)", acc:"#6495ff", glow:"rgba(30,80,200,0.4)", gL:"rgba(30,80,200,0.15)", gD:"rgba(30,80,200,0.35)", bdr:"rgba(100,149,255,0.4)", shape:"28px 6px 28px 6px" },
                { year: "2012", title: "Music as Industry",       desc: "Launched the groundbreaking initiative to formalize music as a professional career path for Naga youth.", side:"right", subpage:"timeline_2012", bg:"linear-gradient(145deg,#2d0a1a,#4a1428)", acc:"#e05080", glow:"rgba(180,40,80,0.4)",  gL:"rgba(180,40,80,0.15)",  gD:"rgba(180,40,80,0.35)",  bdr:"rgba(220,80,120,0.4)",  shape:"6px 28px 6px 28px" },
                { year: "2015", title: "Hornbill Expansion",      desc: "Elevated the Hornbill Music Festival to international standards, tripling attendance and global coverage.", side:"left",  subpage:"timeline_2015", bg:"linear-gradient(145deg,#0a2218,#143322)", acc:"#3cb46e", glow:"rgba(20,140,80,0.4)",  gL:"rgba(20,140,80,0.15)",  gD:"rgba(20,140,80,0.35)",  bdr:"rgba(60,180,110,0.4)",  shape:"28px 28px 6px 6px" },
                { year: "2018", title: "Global Partnerships",     desc: "Secured landmark collaborations with WOMEX, SXSW, and major international music bodies.", side:"right", subpage:"timeline_2018", bg:"linear-gradient(145deg,#1e0a3c,#2e1458)", acc:"#a064ff", glow:"rgba(120,60,220,0.4)", gL:"rgba(120,60,220,0.15)", gD:"rgba(120,60,220,0.35)", bdr:"rgba(160,100,255,0.4)", shape:"6px 6px 28px 28px" },
                { year: "2021", title: "Policy Framework",        desc: "Authored the Northeast Creative Economy Policy, now a national template for arts governance.", side:"left",  subpage:"timeline_2021", bg:"linear-gradient(145deg,#2a1400,#3d1e00)", acc:"#d28232", glow:"rgba(180,100,20,0.4)", gL:"rgba(180,100,20,0.15)", gD:"rgba(180,100,20,0.35)", bdr:"rgba(210,130,50,0.4)",  shape:"28px 6px 6px 28px" },
                { year: "2024", title: "Creative Economy Milestones", desc: "₹50Cr+ annual creative economy, 500+ artists supported, 16 districts covered across Nagaland.", side:"right", subpage:"timeline_2024", bg:"linear-gradient(145deg,#042830,#07404a)", acc:"#00b4c0", glow:"rgba(0,150,160,0.4)", gL:"rgba(0,150,160,0.15)", gD:"rgba(0,150,160,0.35)", bdr:"rgba(0,180,180,0.4)",  shape:"6px 28px 28px 6px" },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: item.side === "left" ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, ease: "easeOut", delay: i * 0.05 }}
                  className={`relative flex gap-6 md:gap-0 pl-12 md:pl-0 ${item.side === "right" ? "md:flex-row-reverse" : "md:flex-row"}`}
                >
                  <div className={`md:w-[45%] ${item.side === "right" ? "md:pl-12" : "md:pr-12 md:text-right"}`}>
                    <motion.div
                      whileHover={{ y: -6, scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      onClick={() => setActiveSubpage(item.subpage)}
                      className="p-5 md:p-7 rounded-2xl transition-all duration-500 group relative overflow-hidden cursor-pointer"
                      style={{ background: dark ? "linear-gradient(135deg, #0a0a0a, #0d0d1a)" : "#ffffff", boxShadow: dark ? "none" : "0 8px 32px rgba(0,0,0,0.09), 0 2px 8px rgba(0,0,0,0.06), 0 1px 0 rgba(255,255,255,1)" }}
                    >
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700" style={{ background:`radial-gradient(ellipse 80% 80% at 50% 50%,${dark ? item.gD : item.gL},transparent)` }} />
                      <div className="absolute -top-10 -right-10 w-28 h-28 rounded-full pointer-events-none" style={{ background:`radial-gradient(circle,${item.acc},transparent 70%)`, opacity:0.2, filter:"blur(8px)" }} />
                      <div className="absolute top-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background:`linear-gradient(90deg,transparent,${item.acc},transparent)`, boxShadow:`0 0 12px ${item.glow}` }} />
                      <p style={{ color:item.acc }} className="text-xs uppercase tracking-[0.4em] mb-2 font-bold">{item.year}</p>
                      <h3 style={{ color: dark ? "rgba(255,255,255,0.92)" : "rgba(10,10,10,0.92)" }} className="text-lg md:text-2xl font-anton uppercase mb-2 transition-all duration-300 group-hover:opacity-80">{item.title}</h3>
                      <p style={{ color: dark ? "rgba(255,255,255,0.52)" : "rgba(10,10,10,0.52)" }} className="text-sm leading-relaxed">{item.desc}</p>
                      <div className="mt-3 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <div className="h-[1px] w-4 group-hover:w-8 transition-all duration-500" style={{ background:`linear-gradient(90deg,${item.acc},transparent)` }} />
                        <span style={{ color:item.acc }} className="text-[9px] uppercase tracking-[0.35em] font-bold">Read More</span>
                      </div>
                    </motion.div>
                  </div>
                  <div className="hidden md:flex md:w-[10%] items-center justify-center">
                    <div className="w-3 h-3 rounded-full border-2 relative z-10" style={{ borderColor:item.acc, background:item.bg, boxShadow:`0 0 14px ${item.glow}` }} />
                  </div>
                  <div className="hidden md:block md:w-[45%]" />
                  <div className="absolute left-3 top-5 w-3 h-3 rounded-full border-2 md:hidden" style={{ borderColor:item.acc, background:item.bg, boxShadow:`0 0 10px ${item.glow}` }} />
                </motion.div>
              ))}
            </div>
          </div>
        </Section>

        {/* ── Press & Recognition Section ────────────────────────────── */}
        <div style={{ background: dark ? "rgba(255,255,255,0.025)" : "rgba(0,0,0,0.025)", borderTop: dark ? "1px solid rgba(255,255,255,0.05)" : "1px solid rgba(0,0,0,0.05)", borderBottom: dark ? "1px solid rgba(255,255,255,0.05)" : "1px solid rgba(0,0,0,0.05)" }}>
          <Section>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-10 md:mb-16"
            >
              <h2 style={{ color: dark ? "#ffffff" : "#0a0a0a" }} className="text-2xl md:text-6xl font-anton uppercase mb-3">Recognition</h2>
              <p style={{ color: dark ? "rgba(255,255,255,0.4)" : "rgba(10,10,10,0.6)" }} className="text-sm md:text-base">Voices from the press, institutions, and the global stage.</p>
            </motion.div>
            
            <div className="flex justify-center items-center">
              <CircularTestimonials
                testimonials={[
                  { q:"Theja Meru is single-handedly rewriting the narrative of what is possible in Northeast India's creative sector.", s:"The Hindu",           y:"2023", src: "https://i.ibb.co/twqd51mj/Whats-App-Image-2026-03-18-at-8-07-09-AM.jpg" },
                  { q:"A rare blend of artistic vision and institutional leadership — he is building the infrastructure that the entire region needs.", s:"Forbes India",     y:"2022", src: "https://i.ibb.co/v64GLx0x/Whats-App-Image-2026-03-18-at-8-07-09-AM-1.jpg" },
                  { q:"Nagaland's music revolution has a face, and it belongs to Theja Meru.",                                                                  s:"Rolling Stone India", y:"2024", src: "https://i.ibb.co/bj8SdHFg/Whats-App-Image-2026-03-18-at-8-07-08-AM-1.jpg" },
                  { q:"His work with TaFMA is a masterclass in cultural policy — data-driven, community-centred, globally oriented.",                            s:"NITI Aayog",        y:"2023", src: "https://i.ibb.co/7NNkw3zf/Whats-App-Image-2026-03-18-at-8-14-10-AM.jpg" },
                  { q:"When Theja speaks about music as industry, you feel the weight of a movement behind him.",                                                s:"Economic Times",    y:"2024", src: "https://i.ibb.co/GQCMxmtg/Whats-App-Image-2026-03-18-at-8-14-09-AM.jpg" },
                  { q:"A visionary who refuses to let geography be a limitation. The Hornbill Festival under him is world-class.",                               s:"BBC Travel",        y:"2023", src: "https://i.ibb.co/v64GLx0x/Whats-App-Image-2026-03-18-at-8-07-09-AM-1.jpg" },
                ].map(item => ({
                  quote: item.q,
                  name: item.s,
                  designation: item.y,
                  src: item.src
                }))}
                autoplay={true}
                colors={{
                  name: dark ? "#f7f7ff" : "#0a0a0a",
                  designation: dark ? "#e1e1e1" : "#454545",
                  testimony: dark ? "#f1f1f7" : "#171717",
                  arrowBackground: dark ? "#0582CA" : "#141414",
                  arrowForeground: dark ? "#141414" : "#f1f1f7",
                  arrowHoverBackground: dark ? "#f7f7ff" : "#00A6FB",
                }}
                fontSizes={{
                  name: "28px",
                  designation: "20px",
                  quote: "20px",
                }}
              />
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4"
            >
              {[
                { award:"Cultural Leadership Award",        body:"Ministry of Culture, India",   year:"2023", bg:"linear-gradient(145deg,#0f1f3d,#1a3460)", acc:"#6495ff", glow:"rgba(30,80,200,0.4)",  bdr:"rgba(100,149,255,0.45)", shape:"24px 6px 24px 6px" },
                { award:"Northeast Entrepreneur of the Year", body:"CII Northeast",             year:"2022", bg:"linear-gradient(145deg,#1e0a3c,#2e1458)", acc:"#a064ff", glow:"rgba(120,60,220,0.4)", bdr:"rgba(160,100,255,0.45)", shape:"6px 24px 6px 24px" },
                { award:"Best Festival Director",            body:"Indian Festival Association", year:"2024", bg:"linear-gradient(145deg,#2a1400,#3d1e00)", acc:"#d28232", glow:"rgba(180,100,20,0.4)", bdr:"rgba(210,130,50,0.45)",  shape:"24px 24px 6px 6px" },
                { award:"Creative Economy Pioneer",          body:"NITI Aayog",                 year:"2023", bg:"linear-gradient(145deg,#042830,#07404a)", acc:"#00b4c0", glow:"rgba(0,150,160,0.4)",  bdr:"rgba(0,180,180,0.45)",  shape:"6px 6px 24px 24px" },
              ].map((item, i) => (
                <motion.div key={i}
                  whileHover={{ y:-10, scale:1.05, rotateX:-3 }}
                  transition={{ type:"spring", stiffness:260, damping:20 }}
                  className="p-4 text-center relative overflow-hidden cursor-pointer group"
                  style={{ background:item.bg, border:`1.5px solid ${item.bdr}`, borderRadius:item.shape, boxShadow:`0 16px 40px ${item.glow}, 0 4px 12px ${item.glow}, inset 0 1px 0 rgba(255,255,255,0.07)` }}
                >
                  <div className="absolute -top-6 -right-6 w-16 h-16 rounded-full pointer-events-none" style={{ background:`radial-gradient(circle,${item.acc},transparent 70%)`, opacity:0.18, filter:"blur(6px)" }} />
                  <div className="absolute top-0 left-0 right-0 h-[2px]" style={{ background:`linear-gradient(90deg,transparent,${item.acc},transparent)`, boxShadow:`0 0 10px ${item.glow}` }} />
                  <div className="w-8 h-8 rounded-xl mx-auto mb-3 flex items-center justify-center relative z-10" style={{ background:"rgba(255,255,255,0.06)", border:`1px solid ${item.bdr}`, boxShadow:`0 0 16px ${item.glow}` }}>
                    <Award className="w-4 h-4" style={{ color:item.acc }} />
                  </div>
                  <p className="text-[10px] md:text-xs font-bold uppercase tracking-wider mb-1 relative z-10" style={{ color:"rgba(255,255,255,0.9)" }}>{item.award}</p>
                  <p className="text-[9px] md:text-[10px] relative z-10" style={{ color:"rgba(255,255,255,0.45)" }}>{item.body}</p>
                  <p className="text-[9px] mt-1 font-bold relative z-10" style={{ color:item.acc }}>{item.year}</p>
                </motion.div>
              ))}
            </motion.div>
          </Section>
        </div>

        {/* ── Connect / Contact Section ───────────────────────────────── */}
        <Section className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 style={{ color: dark ? "#ffffff" : "#0a0a0a" }} className="text-3xl md:text-7xl font-anton uppercase mb-4 md:mb-6 leading-none">
              Let's Build <br /><span className={dark ? "opacity-40" : "opacity-60"}>Together</span>
            </h2>
            <p style={{ color: dark ? "rgba(255,255,255,0.5)" : "rgba(10,10,10,0.65)" }} className="text-sm md:text-lg mb-10 md:mb-14 max-w-xl mx-auto leading-relaxed">
              Whether you're a musician, a festival organiser, a policymaker, or simply a believer in the power of culture — Theja Meru wants to hear from you.
            </p>
            <div className="grid md:grid-cols-3 gap-4 mb-10">
              {[
                { label:"For Artists & Musicians",  desc:"Mentorship, funding and platforms for Naga talent",    Icon:Music,    key:"connect_artists",       bg:"linear-gradient(145deg,#0f172a,#1e1b4b)", acc:"#818cf8", edge:"rgba(99,102,241,0.5)",  glow:"rgba(99,102,241,0.4)",  radius:"2rem 0.75rem 2rem 0.75rem" },
                { label:"For Institutions",          desc:"Policy collaboration, cultural partnerships and events", Icon:Globe,  key:"connect_institutions",  bg:"linear-gradient(145deg,#1a0533,#2e1065)", acc:"#c084fc", edge:"rgba(168,85,247,0.5)",  glow:"rgba(168,85,247,0.4)",  radius:"0.75rem 2rem 0.75rem 2rem" },
                { label:"For Entrepreneurs",         desc:"Incubation, investment and creative economy advisory",  Icon:Briefcase,key:"connect_entrepreneurs",bg:"linear-gradient(145deg,#0d1f0f,#052e16)", acc:"#34d399", edge:"rgba(52,211,153,0.5)",  glow:"rgba(16,185,129,0.4)",  radius:"2rem" },
              ].map((item, i) => (
                <motion.div key={i}
                  initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }}
                  whileHover={{ y:-14, scale:1.04 }}
                  transition={{ delay:i*0.1, type:"spring", stiffness:240, damping:20 }}
                  onClick={() => setActiveSubpage(item.key)}
                  className="p-6 text-left group relative overflow-hidden cursor-pointer"
                  style={{ background:item.bg, border:`1px solid ${item.edge}`, borderRadius:item.radius, boxShadow:`0 0 0 1px rgba(0,0,0,0.4), 0 12px 40px ${item.glow}` }}
                >
                  <div className="absolute top-0 left-0 right-0 h-[1px]" style={{ background:"linear-gradient(90deg,transparent,rgba(255,255,255,0.08),transparent)" }} />
                  <div className="absolute top-0 left-4 right-4 h-[2px]" style={{ background:`linear-gradient(90deg,transparent,${item.acc},transparent)`, boxShadow:`0 0 14px ${item.glow}`, animation:"colorFlow 4s ease infinite", backgroundSize:"200% 100%" }} />
                  <div className="absolute -top-10 -right-10 w-28 h-28 rounded-full pointer-events-none" style={{ border:`1px solid ${item.edge}`, opacity:0.25 }} />
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 overflow-hidden pointer-events-none" style={{transition:"opacity 0.3s"}}>
                    <div style={{position:"absolute",top:"-50%",left:"-80%",width:"55%",height:"200%",background:"linear-gradient(105deg,transparent,rgba(255,255,255,0.06),transparent)",transform:"skewX(-15deg)",animation:"shimmerSweep 1.4s ease-out forwards"}} />
                  </div>
                  <item.Icon style={{ color:item.acc }} className="w-5 h-5 mb-4 relative z-10" />
                  <p className="font-bold text-sm uppercase tracking-wider mb-2 relative z-10 text-white">{item.label}</p>
                  <p style={{ color:"rgba(255,255,255,0.45)" }} className="text-xs leading-relaxed relative z-10">{item.desc}</p>
                  <div className="mt-4 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-400 relative z-10">
                    <div className="h-[1.5px] w-4 group-hover:w-8 transition-all duration-500" style={{ background:`linear-gradient(90deg,${item.acc},transparent)` }} />
                    <span style={{ color:item.acc }} className="text-[9px] uppercase tracking-[0.35em] font-bold">Learn More</span>
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => setActiveSubpage('contact')}
                className="flex items-center gap-3 px-8 py-4 rounded-full font-bold uppercase tracking-widest text-sm text-black hover:scale-105 transition-transform duration-300"
                style={{
                  background: "linear-gradient(90deg, #00f2ff, #7000ff, #ff00ea, #ffc400, #00f2ff)",
                  backgroundSize: "200% 100%",
                  animation: "colorFlow 4s ease infinite",
                  boxShadow: "0 0 30px rgba(0,242,255,0.3)",
                }}
              >
                <ExternalLink className="w-4 h-4" /> Get in Touch
              </button>
              <div className="flex gap-4">
                <a href="https://www.instagram.com/thejameru/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all hover:scale-105">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="https://x.com/thejameru" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all hover:scale-105">
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.div>
        </Section>


      {/* Footer */}
        <footer style={{ borderTop: dark ? "1px solid rgba(255,255,255,0.08)" : "1px solid rgba(0,0,0,0.08)" }} className="py-12 px-6">
          <div className="max-w-7xl mx-auto flex flex-col items-center text-center gap-6">
            <div className="flex flex-col items-center">
              <h2 style={{ color: dark ? "#ffffff" : "#0a0a0a" }} className="text-3xl font-anton tracking-tighter uppercase mb-2">Theja Meru</h2>
              <p style={{ color: dark ? "rgba(255,255,255,0.35)" : "rgba(0,0,0,0.35)" }} className="text-sm uppercase tracking-widest">Architect of the Arts</p>
            </div>
            
            <div className="flex flex-col items-center gap-2">
              <p style={{ color: dark ? "rgba(255,255,255,0.25)" : "rgba(0,0,0,0.25)" }} className="text-[10px] uppercase tracking-[0.4em]">
                © 2026 Theja Meru. All Rights Reserved.
              </p>
              <p style={{ color: dark ? "rgba(255,255,255,0.2)" : "rgba(0,0,0,0.2)" }} className="text-[9px] uppercase tracking-[0.2em]">
                developed by NITI Technologies
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}