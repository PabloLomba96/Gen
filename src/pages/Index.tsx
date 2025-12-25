import Header from '@/components/landing/Header';
import Hero from '@/components/landing/Hero';
import Services from '@/components/landing/Services';
import Blog from '@/components/landing/Blog';
import Resources from '@/components/landing/Resources';
import SocialProof from '@/components/landing/SocialProof';
import Footer from '@/components/landing/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Services />
        <SocialProof />
        <Blog />
        <Resources />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
