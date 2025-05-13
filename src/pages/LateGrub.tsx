import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const LateGrub: React.FC = () => {
  return (
    <div className="min-h-screen overflow-hidden relative">
      {/* Background image with overlay */}
      <div className="fixed inset-0 z-0">
        <img 
          src="/images/bg.png" 
          alt="Background" 
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>
      
      <div className="relative z-10 pt-8 pb-16">
        <nav className="flex items-center justify-between p-4 md:p-6">
          <Link 
            to="/" 
            className="text-lg md:text-xl font-digital text-neon-yellow hover:text-white transition-colors duration-300"
          >
            ← BACK TO HOME
          </Link>
        </nav>
        
        <main className="max-w-5xl mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-digital font-bold text-glow-static mb-4">
              LateGrub – Real-Time Food Ordering Platform
            </h1>
            <h2 className="text-xl md:text-2xl font-mono text-white/80 mb-12">
              Full-stack food delivery system with Firebase backend and real-time order tracking.
            </h2>
            
            <section className="mb-14">
              <h3 className="text-2xl md:text-3xl font-digital font-bold text-neon-yellow mb-6">
                <span className="text-white/70">//</span> PROJECT OVERVIEW
              </h3>
              <p className="text-lg md:text-xl font-mono text-white/90 mb-8 leading-relaxed">
                LateGrub is a late-night student food delivery platform built with React and Firebase. The system supports real-time order tracking, secure authentication, and live chat between customers and delivery agents. It was deployed during a real-world use case at a university, successfully processing transactions in the first week of launch.
              </p>
            </section>
            
            <section className="mb-14">
              <h3 className="text-2xl md:text-3xl font-digital font-bold text-neon-yellow mb-6">
                <span className="text-white/70">//</span> TECH STACK
              </h3>
              
              <div className="mb-10">
                <h4 className="text-xl md:text-2xl font-digital text-glow-static mb-4">Frontend: React + TypeScript</h4>
                <ul className="text-lg font-mono text-white/90 list-disc pl-6 space-y-2">
                  <li>Component-based routing (App.tsx, pages/, components/)</li>
                  <li>Hooks for useAuth, useOrders, etc.</li>
                </ul>
              </div>
              
              <div className="mb-10">
                <h4 className="text-xl md:text-2xl font-digital text-glow-static mb-4">Backend: Firebase</h4>
                <ul className="text-lg font-mono text-white/90 list-disc pl-6 space-y-2">
                  <li>Firestore for NoSQL data</li>
                  <li>Firebase Auth for user sessions</li>
                  <li>Cloud Functions for order processing, status updates</li>
                </ul>
              </div>
              
              <div className="mb-10">
                <h4 className="text-xl md:text-2xl font-digital text-glow-static mb-4">Styling: Tailwind CSS</h4>
                <ul className="text-lg font-mono text-white/90 list-disc pl-6 space-y-2">
                  <li>Utility-first, responsive layouts</li>
                  <li>Dark theme with custom overrides</li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-xl md:text-2xl font-digital text-glow-static mb-4">Tooling:</h4>
                <ul className="text-lg font-mono text-white/90 list-disc pl-6 space-y-2">
                  <li>Vite (HMR dev server)</li>
                  <li>ESLint + Prettier</li>
                  <li>CI/CD: GitHub Actions + Firebase Hosting</li>
                </ul>
              </div>
            </section>
            
            <section className="mb-14">
              <h3 className="text-2xl md:text-3xl font-digital font-bold text-neon-yellow mb-6">
                <span className="text-white/70">//</span> KEY FEATURES
              </h3>
              
              <div className="mb-10">
                <h4 className="text-xl md:text-2xl font-digital text-glow-static flex items-center mb-4">
                  <span className="text-neon-yellow mr-2"></span> Real-Time Order Flow
                </h4>
                <ul className="text-lg font-mono text-white/90 list-disc pl-6 space-y-2">
                  <li>Users place orders from a menu interface.</li>
                  <li>onSnapshot listeners keep order status in sync (e.g., preparing, out for delivery).</li>
                  <li>Admin or delivery can update status via Cloud Function endpoints.</li>
                </ul>
              </div>
              
              <div className="mb-10">
                <h4 className="text-xl md:text-2xl font-digital text-glow-static flex items-center mb-4">
                  <span className="text-neon-yellow mr-2"></span> Firestore Schema (Simplified):
                </h4>
                <pre className="bg-black/30 p-6 rounded-md overflow-x-auto mb-8 font-mono text-white/90 border border-white/10">
{`{
  "orders": {
    "orderId123": {
      "userId": "abc",
      "status": "preparing",
      "items": [
        { "item": "Chicken Tikka", "qty": 2 }
      ],
      "deliveryETA": "2025-05-13T02:45:00Z"
    }
  }
}`}
                </pre>
              </div>
              
              <div>
                <h4 className="text-xl md:text-2xl font-digital text-glow-static flex items-center mb-4">
                  <span className="text-neon-yellow mr-2"></span> Live Chat Support
                </h4>
                <ul className="text-lg font-mono text-white/90 list-disc pl-6 space-y-2">
                  <li>Powered by Firestore subcollections (orders/{'{id}'}/messages)</li>
                  <li>Messages stored with sender, timestamp, and text</li>
                  <li>Enables customer–delivery communication without external services</li>
                </ul>
              </div>
            </section>
            
            <section className="mb-14">
              <h3 className="text-2xl md:text-3xl font-digital font-bold text-neon-yellow mb-6">
                <span className="text-white/70">//</span> AUTHENTICATION FLOW
              </h3>
              <p className="text-lg md:text-xl font-mono text-white/90 mb-4">
                Firebase Auth handles email/password or magic link login. AuthContext.tsx uses onAuthStateChanged to manage sessions. Protected routes restrict access to order/track pages.
              </p>
              <pre className="bg-black/30 p-6 rounded-md overflow-x-auto mb-8 font-mono text-white/90 border border-white/10">
{`useEffect(() => {
  const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
    setUser(user);
  });
  return unsubscribe;
}, []);`}
              </pre>
            </section>
            
            <section className="mb-14">
              <h3 className="text-2xl md:text-3xl font-digital font-bold text-neon-yellow mb-6">
                <span className="text-white/70">//</span> DEV & DEPLOYMENT
              </h3>
              <ul className="text-lg font-mono text-white/90 list-disc pl-6 space-y-2">
                <li>.env stores Firebase credentials</li>
                <li>Vite dev server for local testing (npm run dev)</li>
                <li>Firebase Emulator support (optional)</li>
                <li>CI/CD: firebase deploy --only hosting,functions</li>
                <li>Hosted on Firebase Hosting or Vercel</li>
              </ul>
            </section>
            
            <section className="mb-14">
              <h3 className="text-2xl md:text-3xl font-digital font-bold text-neon-yellow mb-6">
                <span className="text-white/70">//</span> SECURITY
              </h3>
              <p className="text-lg md:text-xl font-mono text-white/90 mb-4">
                Firestore Rules for orders ensure access control:
              </p>
              <pre className="bg-black/30 p-6 rounded-md overflow-x-auto mb-8 font-mono text-white/90 border border-white/10">
{`match /orders/{orderId} {
  allow read, write: if request.auth.uid == resource.data.userId;
}`}
              </pre>
            </section>
            
            <section>
              <h3 className="text-2xl md:text-3xl font-digital font-bold text-neon-yellow mb-6">
                <span className="text-white/70">//</span> GITHUB
              </h3>
              <div className="flex justify-center">
                <a 
                  href="#"
                  className="text-lg md:text-xl font-digital text-neon-yellow hover:text-white transition-colors duration-300 underline"
                >
                  LateGrub GitHub Repo
                </a>
              </div>
            </section>
          </motion.div>
        </main>
      </div>
    </div>
  );
};

export default LateGrub; 