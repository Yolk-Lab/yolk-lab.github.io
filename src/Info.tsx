import { Link } from "react-router-dom";

export default function Info() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-yolk-darker text-white py-12 shadow-lg">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight">
            Our Mission
          </h1>
          <p className="text-base sm:text-lg md:text-xl max-w-3xl mx-auto text-gray-200 leading-relaxed">
            We're building a founder-first workspace where ambitious entrepreneurs build side-by-side, share honest feedback, and celebrate weekly wins. Here's what that means for you.
          </p>
          <Link
            to="/"
            className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-yolk-yellow text-yolk-darker font-medium shadow-md hover:bg-yolk-yellow-dark transition-colors"
          >
            ← Back to Home
          </Link>
        </div>
      </header>

      {/* Mission Statement */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <h2 className="text-2xl sm:text-3xl font-semibold text-yolk-darker">Why We Exist</h2>
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
            Building a company in isolation can be overwhelming and slow. At Yolk Lab we believe that
            <span className="font-semibold"> great entrepreneurs are grown, not born.</span>
            By surrounding driven founders with the right environment, shared workspace, and relentless support, we turn months of struggling alone into weeks of focused progress.
          </p>

          <h2 className="text-2xl sm:text-3xl font-semibold text-yolk-darker">How It Works</h2>
          <ul className="list-disc pl-6 space-y-3 text-gray-700 text-base sm:text-lg leading-relaxed">
            <li>
              <span className="font-medium">Curated Community —</span> 15 founders selected for
              drive, commitment, and culture fit.
            </li>
            <li>
              <span className="font-medium">Weekly Rhythm —</span> Monday planning, Friday demo days, and continuous collaboration in-between.
            </li>
            <li>
              <span className="font-medium">Hot Seats &amp; Accountability —</span> Focused
              feedback and rotating partnerships to keep momentum high.
            </li>
            <li>
              <span className="font-medium">Expert Sessions &amp; Public Demos —</span> Lunch-and-learn workshops and open demo nights that attract the wider tech community.
            </li>
            <li>
              <span className="font-medium">Premium Workspace —</span> Dedicated desks, whiteboard
              walls, beanbags and meeting rooms inside Yolk Coworking, Kraków.
            </li>
          </ul>

          <h2 className="text-2xl sm:text-3xl font-semibold text-yolk-darker">What We Offer</h2>
          <ul className="list-disc pl-6 space-y-3 text-gray-700 text-base sm:text-lg leading-relaxed">
            <li>Hands-on mentorship from practitioners and visiting experts.</li>
            <li>
              A tight-knit network of designers, marketers, engineers and investors
              ready to collaborate.
            </li>
            <li>Visibility through Yolk events, demo days and media coverage.</li>
            <li>
              24/7 access to a knowledge base of recorded sessions, playbooks and
              resources.
            </li>
          </ul>

          <h2 className="text-2xl sm:text-3xl font-semibold text-yolk-darker">Who Should Apply</h2>
          <ul className="list-disc pl-6 space-y-3 text-gray-700 text-base sm:text-lg leading-relaxed">
            <li>Founders building high-growth products in any industry.</li>
            <li>Early-stage teams or solo builders with a prototype up to early revenue.</li>
            <li>People who thrive in a collaborative, give-first environment.</li>
          </ul>

          <h2 className="text-2xl sm:text-3xl font-semibold text-yolk-darker">Why Join Yolk Lab</h2>
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
            <span className="font-medium">Accelerate —</span> Leverage collective momentum to test,
            iterate and launch faster.
            <br />
            <span className="font-medium">Grow —</span> Refine your product, validate with real
            customers and become investor-ready.
            <br />
            <span className="font-medium">Belong —</span> Build lifelong relationships with
            like-minded builders who share your ambition and values.
          </p>

          <div className="pt-8">
            <a
              href="https://tally.so/r/3xEkDG"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 rounded-md bg-yolk-teal text-white font-medium shadow-lg hover:bg-yolk-teal-dark transition-colors"
            >
              Apply Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
} 