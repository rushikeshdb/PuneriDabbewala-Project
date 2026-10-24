import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  ArrowRight,
  BadgeCheck,
  CheckCircle2,
  ChefHat,
  ChevronDown,
  Clock,
  HeartHandshake,
  MapPin,
  Menu,
  Search,
  ShieldCheck,
  Star,
  Truck,
  Utensils,
  Users,
  X,
  Leaf,
  ClipboardCheck,
  Mail,
  Phone,
  CircleHelp,
} from "lucide-react";

const providers = [
  {
    id: 1,
    name: "Aai's Homemade Tiffin",
    area: "Kothrud, Pune",
    rating: "4.8",
    reviews: "120+",
    price: 90,
    hygiene: "4.8",
    quality: "4.6",
    taste: "4.7",
    image:
      "https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=700&q=80",
    tag: "Homemade Meals",
  },
  {
    id: 2,
    name: "Shreya's Kitchen",
    area: "Karve Nagar, Pune",
    rating: "4.7",
    reviews: "95+",
    price: 85,
    hygiene: "4.7",
    quality: "4.6",
    taste: "4.5",
    image:
      "https://images.unsplash.com/photo-1556911261-6bd341186b2f?auto=format&fit=crop&w=700&q=80",
    tag: "Daily Thali",
  },
  {
    id: 3,
    name: "Madhura's Tiffin Service",
    area: "Erandwane, Pune",
    rating: "4.6",
    reviews: "76+",
    price: 80,
    hygiene: "4.6",
    quality: "4.5",
    taste: "4.6",
    image:
      "https://images.unsplash.com/photo-1556911073-52527ac437f5?auto=format&fit=crop&w=700&q=80",
    tag: "Fresh Vegetarian",
  },
];

const benefits = [
  {
    icon: ShieldCheck,
    title: "Kitchen Hygiene Checks",
    description:
      "We assess kitchen cleanliness, food handling, and storage practices.",
    color: "bg-emerald-100 text-emerald-700",
  },
  {
    icon: Star,
    title: "Transparent Ratings",
    description: "See separate scores for hygiene, food quality, and taste.",
    color: "bg-amber-100 text-amber-700",
  },
  {
    icon: BadgeCheck,
    title: "Approved Providers",
    description:
      "Only providers who meet our platform's approval requirements can sell.",
    color: "bg-blue-100 text-blue-700",
  },
  {
    icon: HeartHandshake,
    title: "Support Local Women",
    description:
      "Help home chefs grow their businesses and reach more customers.",
    color: "bg-rose-100 text-rose-700",
  },
];

const steps = [
  {
    icon: Search,
    title: "Explore Tiffins",
    description:
      "Discover providers by locality, price, menu, and inspection ratings.",
  },
  {
    icon: ClipboardCheck,
    title: "Check the Ratings",
    description:
      "Review hygiene assessments, food-quality scores, and available menus.",
  },
  {
    icon: ChefHat,
    title: "Choose Your Meal",
    description:
      "Select a suitable meal plan or place an available one-time order.",
  },
  {
    icon: Truck,
    title: "Enjoy Your Tiffin",
    description:
      "Receive your meal through the provider's available delivery or pickup option.",
  },
];

const testimonials = [
  {
    name: "Priya Deshmukh",
    role: "Working Professional",
    quote:
      "I can compare different tiffin services before choosing one that suits my daily routine.",
    rating: "5.0",
  },
  {
    name: "Rohit Patil",
    role: "Software Engineer",
    quote:
      "Having inspection information and clear ratings makes choosing a home-cooked meal easier.",
    rating: "4.8",
  },
  {
    name: "Sneha Joshi",
    role: "College Student",
    quote:
      "I like being able to compare meal prices, menus, and service areas in one place.",
    rating: "4.9",
  },
];

const faqs = [
  {
    question: "How does Puneri Dabbawala approve tiffin providers?",
    answer:
      "Providers submit their details for review. Our team assesses their kitchen, food-handling practices, and food quality against our inspection checklist before deciding whether to approve them.",
  },
  {
    question: "Does an approved rating guarantee food safety?",
    answer:
      "No rating can guarantee every meal is safe. Our inspection reports describe the conditions and samples assessed at a particular time. We encourage regular reassessment and prompt reporting of concerns.",
  },
  {
    question: "Can I order a weekly or monthly tiffin?",
    answer:
      "You can choose a weekly or monthly plan when a provider offers that option. Available meal plans, prices, delivery areas, and terms will be shown on the provider's listing.",
  },
  {
    question: "How can I register my own tiffin service?",
    answer:
      "Use the Become a Provider link to register your kitchen and submit the requested details. Your listing will remain unavailable for sale until the platform approves it.",
  },
  {
    question: "Who delivers my tiffin?",
    answer:
      "Delivery arrangements depend on the provider and your locality. A listing should clearly explain whether the provider delivers, a shared delivery service is available, or customer pickup is offered.",
  },
];

export default function Home() {
  const navigate = useNavigate();

  const [area, setArea] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);

  const exploreTiffins = (event) => {
    event.preventDefault();

    const searchParams = new URLSearchParams();

    if (area.trim()) {
      searchParams.set("area", area.trim());
    }

    const query = searchParams.toString();

    // Change /meal if your product listing uses another route.
    navigate(`/meal${query ? `?${query}` : ""}`);
  };

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#fffdf8] text-slate-800">
      {/* NAVBAR */}
      <header className="sticky top-0 z-50 border-b border-emerald-100 bg-white/95 shadow-sm backdrop-blur">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          <Link
            to="/"
            onClick={closeMobileMenu}
            className="flex shrink-0 items-center gap-2"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-100 text-3xl">
              🍱
            </span>

            <span>
              <span className="block text-lg font-extrabold leading-tight text-emerald-950">
                Puneri Dabbawala
              </span>
              <span className="text-xs text-slate-500">
                Gharacha Swad. Tumchya Darat.
              </span>
            </span>
          </Link>

          <div className="hidden items-center gap-7 lg:flex">
            <a href="#home" className="font-medium text-emerald-800">
              Home
            </a>
            <a
              href="#providers"
              className="font-medium transition hover:text-emerald-700"
            >
              Tiffin Services
            </a>
            <a
              href="#how-it-works"
              className="font-medium transition hover:text-emerald-700"
            >
              How It Works
            </a>
            <a
              href="#about"
              className="font-medium transition hover:text-emerald-700"
            >
              About Us
            </a>
            <a
              href="#contact"
              className="font-medium transition hover:text-emerald-700"
            >
              Contact
            </a>
          </div>

          <div className="hidden items-center gap-3 md:flex">
            <Link
              to="/login"
              className="rounded-xl border border-emerald-700 px-5 py-2.5 font-semibold text-emerald-800 transition hover:bg-emerald-50"
            >
              Login
            </Link>

            <Link
              to="/register"
              className="rounded-xl bg-emerald-700 px-5 py-2.5 font-semibold text-white shadow-sm transition hover:bg-emerald-800"
            >
              Sign Up
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation"
            aria-expanded={mobileMenuOpen}
            className="rounded-lg p-2 text-emerald-900 hover:bg-emerald-50 lg:hidden"
          >
            {mobileMenuOpen ? <X size={25} /> : <Menu size={25} />}
          </button>
        </nav>

        {mobileMenuOpen && (
          <div className="border-t border-slate-100 bg-white px-5 py-4 lg:hidden">
            <div className="flex flex-col gap-4">
              {[
                ["Home", "#home"],
                ["Tiffin Services", "#providers"],
                ["How It Works", "#how-it-works"],
                ["About Us", "#about"],
                ["Contact", "#contact"],
              ].map(([label, href]) => (
                <a
                  key={label}
                  href={href}
                  onClick={closeMobileMenu}
                  className="font-medium hover:text-emerald-700"
                >
                  {label}
                </a>
              ))}

              <Link
                to="/login"
                onClick={closeMobileMenu}
                className="rounded-lg border border-emerald-700 px-4 py-2.5 text-center font-semibold text-emerald-800"
              >
                Login
              </Link>

              <Link
                to="/register"
                onClick={closeMobileMenu}
                className="rounded-lg bg-emerald-700 px-4 py-2.5 text-center font-semibold text-white"
              >
                Sign Up
              </Link>
            </div>
          </div>
        )}
      </header>

      <main>
        {/* HERO SECTION */}
        <section
          id="home"
          className="relative isolate flex min-h-[590px] items-center bg-slate-950"
        >
          <img
            src="https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=2000&q=85"
            alt="Freshly prepared Indian homemade food"
            className="absolute inset-0 -z-20 h-full w-full object-cover"
          />

          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-slate-950/95 via-slate-950/80 to-slate-950/25" />

          <div className="mx-auto grid w-full max-w-7xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-24">
            <div className="max-w-2xl">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-emerald-200 backdrop-blur">
                <ShieldCheck size={17} />
                Pune's Trusted Tiffin Marketplace
              </div>

              <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
                Homemade Food.
                <span className="mt-2 block text-emerald-300">
                  Verified Quality.
                </span>
              </h1>

              <p className="mt-6 max-w-xl text-base leading-7 text-slate-200 sm:text-lg">
                Find home-cooked tiffin services assessed for kitchen hygiene,
                food handling, quality, and taste. Compare providers and choose
                your daily meals with more confidence.
              </p>

              <form
                onSubmit={exploreTiffins}
                className="mt-8 flex max-w-xl flex-col gap-3 rounded-2xl bg-white p-3 shadow-2xl sm:flex-row sm:items-center"
              >
                <div className="flex min-w-0 flex-1 items-center gap-3 px-2">
                  <MapPin className="shrink-0 text-emerald-700" size={23} />

                  <input
                    type="text"
                    value={area}
                    onChange={(event) => setArea(event.target.value)}
                    placeholder="Enter your area (e.g. Kothrud)"
                    aria-label="Enter your area"
                    className="w-full min-w-0 bg-transparent py-2 text-sm text-slate-800 outline-none placeholder:text-slate-400"
                  />
                </div>

                <button
                  type="submit"
                  className="flex items-center justify-center gap-2 rounded-xl bg-emerald-700 px-6 py-3 font-bold text-white transition hover:bg-emerald-800"
                >
                  Find Tiffin
                  <ArrowRight size={18} />
                </button>
              </form>

              <div className="mt-8 grid grid-cols-1 gap-4 text-sm font-medium text-white sm:grid-cols-3">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="shrink-0 text-emerald-300" />
                  <span>Kitchen Hygiene Checks</span>
                </div>

                <div className="flex items-center gap-2">
                  <Star className="shrink-0 text-amber-300" />
                  <span>Food Quality Ratings</span>
                </div>

                <div className="flex items-center gap-2">
                  <HeartHandshake className="shrink-0 text-emerald-300" />
                  <span>Support Local Women</span>
                </div>
              </div>
            </div>

            <div className="hidden lg:block">
              <div className="ml-auto max-w-sm rounded-3xl border border-white/30 bg-white/95 p-6 shadow-2xl backdrop-blur">
                <div className="mb-4 flex items-center justify-between">
                  <span className="font-bold text-slate-900">
                    Your food, your choice
                  </span>
                  <BadgeCheck className="text-emerald-700" size={25} />
                </div>

                <div className="flex items-start gap-4">
                  <div className="rounded-2xl bg-emerald-100 p-3 text-emerald-800">
                    <ClipboardCheck size={28} />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900">
                      Inspection information
                    </h3>
                    <p className="mt-1 text-sm leading-6 text-slate-600">
                      Review inspection dates, assessment scores, and provider
                      details before choosing.
                    </p>
                  </div>
                </div>

                <div className="my-5 border-t border-slate-200" />

                <div className="flex items-start gap-4">
                  <div className="rounded-2xl bg-orange-100 p-3 text-orange-700">
                    <Utensils size={28} />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900">
                      Meals that suit you
                    </h3>
                    <p className="mt-1 text-sm leading-6 text-slate-600">
                      Compare menus, prices, meal plans, and delivery
                      availability in your area.
                    </p>
                  </div>
                </div>

                <Link
                  to="/meal"
                  className="mt-6 flex items-center justify-center gap-2 rounded-xl bg-emerald-700 px-5 py-3 font-semibold text-white transition hover:bg-emerald-800"
                >
                  Explore Tiffins <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT / TRUST SECTION */}
        <section id="about" className="scroll-mt-24 px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto max-w-3xl text-center">
              <span className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-700">
                More than a tiffin service
              </span>

              <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                Why Choose Puneri Dabbawala?
              </h2>

              <p className="mt-4 leading-7 text-slate-600">
                Finding homemade food should be easier and more transparent. We
                connect customers with tiffin providers through documented
                inspections, clear ratings, and useful information.
              </p>
            </div>

            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {benefits.map((benefit) => {
                const Icon = benefit.icon;

                return (
                  <div
                    key={benefit.title}
                    className="group rounded-2xl border border-slate-100 bg-white p-7 text-center shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                  >
                    <div
                      className={`mx-auto flex h-16 w-16 items-center justify-center rounded-2xl ${benefit.color} transition group-hover:scale-110`}
                    >
                      <Icon size={30} />
                    </div>

                    <h3 className="mt-5 text-lg font-bold text-slate-900">
                      {benefit.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-slate-600">
                      {benefit.description}
                    </p>
                  </div>
                );
              })}
            </div>

            <div className="mt-10 rounded-2xl border border-emerald-100 bg-emerald-50 p-5 sm:p-6">
              <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center">
                <div className="rounded-xl bg-white p-3 text-emerald-700 shadow-sm">
                  <Leaf size={28} />
                </div>

                <div className="flex-1">
                  <h3 className="font-bold text-emerald-950">
                    Trust backed by transparent information
                  </h3>
                  <p className="mt-1 text-sm leading-6 text-emerald-900/80">
                    Our goal is to publish meaningful inspection results and
                    make provider approval criteria understandable. Ratings
                    reflect recorded assessments, not a guarantee of every meal.
                  </p>
                </div>

                <a
                  href="#how-it-works"
                  className="inline-flex shrink-0 items-center gap-2 font-bold text-emerald-800 hover:text-emerald-950"
                >
                  Learn more <ArrowRight size={18} />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section
          id="how-it-works"
          className="scroll-mt-24 bg-white px-4 py-20 sm:px-6 lg:px-8"
        >
          <div className="mx-auto max-w-7xl">
            <div className="text-center">
              <span className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-700">
                Simple and transparent
              </span>

              <h2 className="mt-3 text-3xl font-extrabold text-slate-900 sm:text-4xl">
                How It Works
              </h2>

              <p className="mt-4 text-slate-600">
                Your next homemade meal is just a few steps away.
              </p>
            </div>

            <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {steps.map((step, index) => {
                const Icon = step.icon;

                return (
                  <div key={step.title} className="relative text-center">
                    <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-emerald-50 text-emerald-700">
                      <Icon size={34} />
                    </div>

                    <span className="mx-auto mt-4 flex h-8 w-8 items-center justify-center rounded-full bg-emerald-700 text-sm font-bold text-white">
                      {index + 1}
                    </span>

                    <h3 className="mt-4 text-lg font-bold text-slate-900">
                      {step.title}
                    </h3>

                    <p className="mx-auto mt-3 max-w-xs text-sm leading-6 text-slate-600">
                      {step.description}
                    </p>

                    {index !== steps.length - 1 && (
                      <ArrowRight
                        className="absolute right-[-18px] top-8 hidden text-slate-300 lg:block"
                        size={25}
                      />
                    )}
                  </div>
                );
              })}
            </div>

            <div className="mt-12 text-center">
              <Link
                to="/meal"
                className="inline-flex items-center gap-2 rounded-xl bg-emerald-700 px-7 py-3.5 font-bold text-white shadow-lg transition hover:bg-emerald-800"
              >
                Explore Tiffin Services <ArrowRight size={19} />
              </Link>
            </div>
          </div>
        </section>

        {/* FEATURED PROVIDERS */}
        <section
          id="providers"
          className="scroll-mt-24 bg-[#f7f8f2] px-4 py-20 sm:px-6 lg:px-8"
        >
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <span className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-700">
                  Discover homemade goodness
                </span>

                <h2 className="mt-3 text-3xl font-extrabold text-slate-900 sm:text-4xl">
                  Featured Tiffin Services
                </h2>

                <p className="mt-3 max-w-2xl text-slate-600">
                  Compare local menus, prices, and inspection information before
                  choosing a provider.
                </p>
              </div>

              <Link
                to="/meal"
                className="inline-flex items-center gap-2 self-start rounded-xl border border-emerald-700 px-5 py-3 font-semibold text-emerald-800 transition hover:bg-emerald-50 sm:self-auto"
              >
                View All Tiffins <ArrowRight size={18} />
              </Link>
            </div>

            {/* Replace demo data with approved products from your API. */}
            <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {providers.map((provider) => (
                <article
                  key={provider.id}
                  className="overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={provider.image}
                      alt={`${provider.name} kitchen`}
                      loading="lazy"
                      className="h-full w-full object-cover transition duration-500 hover:scale-105"
                    />

                    <div className="absolute left-3 top-3 flex items-center gap-1 rounded-full bg-emerald-700 px-3 py-1.5 text-xs font-bold text-white shadow">
                      <BadgeCheck size={15} />
                      Demo approval badge
                    </div>

                    <div className="absolute bottom-3 left-3 rounded-lg bg-white/95 px-3 py-1.5 text-sm font-semibold text-slate-800">
                      {provider.tag}
                    </div>
                  </div>

                  <div className="p-5">
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="text-lg font-extrabold text-slate-900">
                        {provider.name}
                      </h3>

                      <span className="flex shrink-0 items-center gap-1 rounded-lg bg-amber-50 px-2 py-1 text-sm font-bold text-amber-700">
                        <Star size={15} fill="currentColor" />
                        {provider.rating}
                      </span>
                    </div>

                    <p className="mt-2 flex items-center gap-1.5 text-sm text-slate-500">
                      <MapPin size={16} />
                      {provider.area}
                    </p>

                    <p className="mt-1 text-xs text-slate-500">
                      {provider.reviews} customer reviews (demo)
                    </p>

                    <div className="mt-5 grid grid-cols-3 gap-2">
                      {[
                        ["Hygiene", provider.hygiene],
                        ["Quality", provider.quality],
                        ["Taste", provider.taste],
                      ].map(([label, value]) => (
                        <div
                          key={label}
                          className="rounded-xl bg-slate-50 p-3 text-center"
                        >
                          <p className="text-xs text-slate-500">{label}</p>
                          <p className="mt-1 font-extrabold text-emerald-800">
                            {value}/5
                          </p>
                        </div>
                      ))}
                    </div>

                    <div className="mt-5 flex items-center justify-between gap-3">
                      <div>
                        <span className="text-xl font-extrabold text-emerald-800">
                          ₹{provider.price}
                        </span>
                        <span className="text-sm text-slate-500"> / meal</span>
                      </div>

                      <Link
                        to={`/meal?providerId=${provider.id}`}
                        className="inline-flex items-center gap-2 rounded-xl bg-emerald-700 px-4 py-2.5 text-sm font-bold text-white transition hover:bg-emerald-800"
                      >
                        View Menu <ArrowRight size={16} />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <p className="mt-5 text-center text-xs leading-5 text-slate-500">
              Demonstration listings and ratings only. Replace these examples
              with actual approved providers and verified inspection records
              before publishing.
            </p>
          </div>
        </section>

        {/* PROVIDER REGISTRATION CTA */}
        <section className="px-4 py-20 sm:px-6 lg:px-8">
          <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-emerald-950 px-6 py-12 sm:px-12 sm:py-16 lg:px-16">
            <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-emerald-800/50 blur-3xl" />
            <div className="absolute -bottom-24 left-1/3 h-64 w-64 rounded-full bg-orange-500/20 blur-3xl" />

            <div className="relative grid items-center gap-10 lg:grid-cols-2">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-emerald-200">
                  <HeartHandshake size={17} />
                  For Home Chefs
                </span>

                <h2 className="mt-6 text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-5xl">
                  Turn Your Cooking Into an Opportunity.
                </h2>

                <p className="mt-5 max-w-xl leading-7 text-emerald-100/85">
                  Do you prepare delicious homemade meals? Join our platform,
                  showcase your menu, and connect with customers looking for
                  local tiffin services. Providers must pass our approval
                  process before their meals can be listed for sale.
                </p>

                <Link
                  to="/register"
                  className="mt-8 inline-flex items-center gap-2 rounded-xl bg-orange-400 px-6 py-3.5 font-bold text-emerald-950 transition hover:bg-orange-300"
                >
                  Become a Provider <ArrowRight size={19} />
                </Link>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  {
                    icon: Users,
                    title: "Reach More Customers",
                    description:
                      "Showcase your service to people in your area.",
                  },
                  {
                    icon: ShieldCheck,
                    title: "Build Trust",
                    description: "Share documented inspection results.",
                  },
                  {
                    icon: Utensils,
                    title: "Show Your Menu",
                    description: "Display meals, prices, and availability.",
                  },
                  {
                    icon: HeartHandshake,
                    title: "Grow Locally",
                    description: "Build lasting relationships with customers.",
                  },
                ].map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.title}
                      className="rounded-2xl border border-white/10 bg-white/10 p-5 backdrop-blur-sm"
                    >
                      <Icon className="text-orange-300" size={28} />

                      <h3 className="mt-4 font-bold text-white">
                        {item.title}
                      </h3>

                      <p className="mt-2 text-sm leading-6 text-emerald-100/80">
                        {item.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* CUSTOMER TESTIMONIALS */}
        <section className="bg-white px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="text-center">
              <span className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-700">
                Built around trust
              </span>

              <h2 className="mt-3 text-3xl font-extrabold text-slate-900 sm:text-4xl">
                What Our Customers Say
              </h2>

              <p className="mt-4 text-slate-600">
                Clear information helps customers make informed choices.
              </p>
            </div>

            {/* Replace these illustrative quotes with genuine reviews. */}
            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {testimonials.map((review) => (
                <article
                  key={review.name}
                  className="rounded-2xl border border-slate-100 bg-[#fffdf8] p-7 shadow-sm"
                >
                  <div className="flex gap-1 text-amber-500">
                    {[1, 2, 3, 4, 5].map((number) => (
                      <Star key={number} size={17} fill="currentColor" />
                    ))}
                  </div>

                  <p className="mt-5 leading-7 text-slate-600">
                    “{review.quote}”
                  </p>

                  <div className="mt-6 flex items-center justify-between gap-3 border-t border-slate-100 pt-5">
                    <div>
                      <h3 className="font-bold text-slate-900">
                        {review.name}
                      </h3>
                      <p className="mt-1 text-sm text-slate-500">
                        {review.role}
                      </p>
                    </div>

                    <span className="flex items-center gap-1 font-bold text-emerald-800">
                      <Star size={15} fill="currentColor" />
                      {review.rating}
                    </span>
                  </div>
                </article>
              ))}
            </div>

            <p className="mt-5 text-center text-xs text-slate-500">
              Sample testimonials for layout demonstration. Replace with genuine
              customer feedback before publishing.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-[#f7f8f2] px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <div className="text-center">
              <CircleHelp className="mx-auto text-emerald-700" size={36} />

              <h2 className="mt-4 text-3xl font-extrabold text-slate-900 sm:text-4xl">
                Frequently Asked Questions
              </h2>

              <p className="mt-4 text-slate-600">
                Everything you need to know before choosing a tiffin.
              </p>
            </div>

            <div className="mt-10 space-y-3">
              {faqs.map((faq, index) => {
                const isOpen = openFaq === index;

                return (
                  <div
                    key={faq.question}
                    className="overflow-hidden rounded-2xl border border-slate-200 bg-white"
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaq(isOpen ? -1 : index)}
                      aria-expanded={isOpen}
                      className="flex w-full items-center justify-between gap-4 p-5 text-left font-bold text-slate-900 transition hover:bg-emerald-50/50"
                    >
                      <span>{faq.question}</span>

                      <ChevronDown
                        size={21}
                        className={`shrink-0 text-emerald-700 transition-transform ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {isOpen && (
                      <div className="border-t border-slate-100 px-5 py-4 text-sm leading-7 text-slate-600">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="bg-emerald-800 px-4 py-16 text-center sm:px-6">
          <div className="mx-auto max-w-3xl">
            <CheckCircle2 className="mx-auto text-emerald-200" size={42} />

            <h2 className="mt-5 text-3xl font-extrabold text-white sm:text-4xl">
              Good Food. Greater Trust. Stronger Communities.
            </h2>

            <p className="mx-auto mt-4 max-w-2xl leading-7 text-emerald-100">
              Discover local tiffin services, compare inspection information,
              and support the people who bring homemade food to your table.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                to="/meal"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 font-bold text-emerald-900 transition hover:bg-emerald-50"
              >
                Find Your Tiffin <ArrowRight size={19} />
              </Link>

              <Link
                to="/register"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/50 px-6 py-3.5 font-bold text-white transition hover:bg-white/10"
              >
                Join as a Provider
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer
        id="contact"
        className="scroll-mt-24 bg-slate-950 px-4 pb-6 pt-14 text-slate-300 sm:px-6 lg:px-8"
      >
        <div className="mx-auto grid max-w-7xl gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link to="/" className="inline-flex items-center gap-3">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-100 text-3xl">
                🍱
              </span>

              <span className="text-xl font-extrabold text-white">
                Puneri Dabbawala
              </span>
            </Link>

            <p className="mt-5 max-w-xs text-sm leading-7 text-slate-400">
              Connecting Pune with local homemade tiffin services through
              transparency, documented inspections, and community support.
            </p>

            <p className="mt-3 text-sm font-medium text-emerald-300">
              Gharacha Swad. Tumchya Darat.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-white">Explore</h3>

            <div className="mt-5 flex flex-col gap-3 text-sm">
              <a href="#home" className="hover:text-emerald-300">
                Home
              </a>
              <Link to="/meal" className="hover:text-emerald-300">
                Tiffin Services
              </Link>
              <a href="#how-it-works" className="hover:text-emerald-300">
                How It Works
              </a>
              <a href="#about" className="hover:text-emerald-300">
                About Us
              </a>
              <a href="#providers" className="hover:text-emerald-300">
                Featured Providers
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-white">For Providers</h3>

            <div className="mt-5 flex flex-col gap-3 text-sm">
              <Link to="/register" className="hover:text-emerald-300">
                Register Your Kitchen
              </Link>
              <Link to="/login" className="hover:text-emerald-300">
                Provider Login
              </Link>
              <a href="#about" className="hover:text-emerald-300">
                Our Inspection Process
              </a>
              <a href="#contact" className="hover:text-emerald-300">
                Contact Support
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-white">Get in Touch</h3>

            <div className="mt-5 space-y-4 text-sm">
              <p className="flex items-start gap-3">
                <MapPin size={19} className="shrink-0 text-emerald-300" />
                Pune, Maharashtra, India
              </p>

              <p className="flex items-start gap-3">
                <Mail size={19} className="shrink-0 text-emerald-300" />
                <a
                  href="mailto:contact@puneridabbawala.example"
                  className="break-all hover:text-emerald-300"
                >
                  Add your official email
                </a>
              </p>

              <p className="flex items-start gap-3">
                <Phone size={19} className="shrink-0 text-emerald-300" />
                <span>Add your business contact number</span>
              </p>
            </div>

            <div className="mt-6 flex gap-3">
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="rounded-xl border border-white/10 p-3 transition hover:bg-white/10"
              >
                Instagram
              </a>

              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="rounded-xl border border-white/10 p-3 transition hover:bg-white/10"
              >
                Facebook
              </a>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-12 flex max-w-7xl flex-col gap-3 border-t border-white/10 pt-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} Puneri Dabbawala. All rights reserved.
          </p>

          <p>Made with care for Pune's homemade food community.</p>
        </div>
      </footer>
    </div>
  );
}

// import React from 'react'
// import { useState } from "react";
// import { useEffect } from "react";
// import { Link,} from "react-router-dom";

// const Home = () => {

//   const [menuOpen, setMenuOpen] = useState(false);
//   const [activeFaq, setActiveFaq] = useState(null);

//   // Animated counters
//   const [meals, setMeals] = useState(0);
//   const [customers, setCustomers] = useState(0);
//   const [delivery, setDelivery] = useState(0);

//   useEffect(() => {

//     let mealCount = 0;
//     let customerCount = 0;
//     let deliveryCount = 0;

//     const interval = setInterval(() => {

//       if (mealCount < 500) {
//         mealCount += 10;
//         setMeals(mealCount);
//       }

//       if (customerCount < 250) {
//         customerCount += 5;
//         setCustomers(customerCount);
//       }

//       if (deliveryCount < 99) {
//         deliveryCount += 2;

//         if (deliveryCount > 99) {
//           deliveryCount = 99;
//         }

//         setDelivery(deliveryCount);
//       }

//       if (
//         mealCount >= 500 &&
//         customerCount >= 250 &&
//         deliveryCount >= 99
//       ) {
//         clearInterval(interval);
//       }

//     }, 20);

//     return () => clearInterval(interval);

//   }, []);

//   const toggleFaq = (index) => {

//     if (activeFaq === index) {
//       setActiveFaq(null);
//     } else {
//       setActiveFaq(index);
//     }

//   };

//   return (

//     <div className="min-h-screen bg-[#fffaf0] text-gray-800 overflow-hidden">

//       {/* ===================================================== */}
//       {/* NAVBAR */}
//       {/* ===================================================== */}

//       <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md shadow-sm">

//         <div className="max-w-7xl mx-auto px-5 md:px-8">

//           <div className="flex justify-between items-center text-lg h-20">

//             {/* LOGO */}

//             <Link
//               to="/home"
//               className="flex items-center gap-3"
//             >

//               <div className="w-12 h-12 rounded-full bg-orange-500 flex items-center justify-center shadow-md">

//                 <span className="text-2xl">
//                   🍱
//                 </span>

//               </div>

//               <div>

//                 <h1 className="text-xl md:text-2xl font-black text-orange-600">
//                   Puneri Dabbawala
//                 </h1>

//                 <p className="text-xs text-gray-500">
//                   Gharacha Swad. Tumchya Darat.
//                 </p>

//               </div>

//             </Link>

//             {/* DESKTOP MENU */}

//             <div className="hidden md:flex items-center gap-8">

//              <a href="#home" className="nav-menu">
//     Home
// </a>
// <div className="relative group">

//     <span className="nav-menu">
//         Meal Plan
//     </span>

//     {/* Dropdown */}
//     <div
//         className="
//             absolute
//             left-0
//             top-full
//             pt-4
//             w-40
//             opacity-0
//             invisible
//             group-hover:opacity-100
//             group-hover:visible
//             transition-all
//             duration-200
//             z-50
//             bg-white
//             p-3
//         "
//     >

//         <div className="flex flex-col gap-3">

//             <Link
//                 to="/meal-plan"
//                 className="nav-menu text-gray-700 hover:text-orange-500 transition"
//             >
//                 Daily Plan
//             </Link>

//             <Link
//                 to="/meal-plan/weekly"
//                 className="nav-menu text-gray-700 hover:text-orange-500 transition"
//             >
//                 Weekly Plan
//             </Link>

//             <Link
//                 to="/meal-plan/monthly"
//                 className="nav-menu text-gray-700 hover:text-orange-500 transition"
//             >
//                 Monthly Plan
//             </Link>

//             <Link
//                 to="/meal-plan/special"
//                 className="nav-menu text-gray-700 hover:text-orange-500 transition"
//             >
//                 Special Plans
//             </Link>

//         </div>

//     </div>

// </div>
// {/* <a href="#how" className="nav-menu">
//     How It Works
// </a> */}

// <a href="#about" className="nav-menu">
//     About Us
// </a>

// <a href="#contact" className="nav-menu">
//     Contact Us
// </a>

//               <Link
//                 to="/login"
//                 className="px-6 py-2.5 rounded-full bg-orange-500 text-white font-semibold hover:bg-orange-600 transition shadow-md"
//               >
//                 Login
//               </Link>

//             </div>

//             {/* MOBILE BUTTON */}

//             <button
//               onClick={() => setMenuOpen(!menuOpen)}
//               className="md:hidden text-3xl text-orange-600"
//             >
//               ☰
//             </button>

//           </div>

//           {/* MOBILE MENU */}

//           {menuOpen && (

//             <div className="md:hidden pb-5 border-t">

//               <div className="flex flex-col gap-4 pt-5">

//                 <a
//                   href="#home"
//                   onClick={() => setMenuOpen(false)}
//                   className="font-medium"
//                 >
//                   Home
//                 </a>

//                 <a
//                   href="#how"
//                   onClick={() => setMenuOpen(false)}
//                   className="font-medium"
//                 >
//                   How It Works
//                 </a>

//                 <a
//                   href="#meals"
//                   onClick={() => setMenuOpen(false)}
//                   className="font-medium"
//                 >
//                   Meals
//                 </a>

//                 <a
//                   href="#about"
//                   onClick={() => setMenuOpen(false)}
//                   className="font-medium"
//                 >
//                   About
//                 </a>

//                 <Link
//                   to="/login"
//                   className="text-center px-5 py-3 rounded-full bg-orange-500 text-white font-semibold"
//                 >
//                   Login
//                 </Link>

//               </div>

//             </div>

//           )}

//         </div>

//       </nav>

//       {/* ===================================================== */}
//       {/* HERO */}
//       {/* ===================================================== */}

//       <section
//         id="home"
//         className="relative pt-32 pb-20 md:pt-40 md:pb-28"
//       >

//         {/* Background decoration */}

//         <div className="absolute -top-40 -right-40 w-96 h-96 bg-orange-200 rounded-full blur-3xl opacity-40"></div>

//         <div className="absolute top-72 -left-40 w-96 h-96 bg-yellow-200 rounded-full blur-3xl opacity-30"></div>

//         <div className="max-w-7xl mx-auto px-5 md:px-8">

//           <div className="grid lg:grid-cols-2 gap-14 items-center">

//             {/* LEFT */}

//             <div>

//               <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 px-4 py-2 rounded-full font-semibold text-sm mb-6">

//                 <span>🇮🇳</span>

//                 <span>
//                   Made with Pune's Love
//                 </span>

//               </div>

//               <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight">

//                 Gharacha

//                 <span className="text-orange-500">
//                   {" "}Swad.
//                 </span>

//                 <br />

//                 Rozcha

//                 <span className="text-green-700">
//                   {" "}Dabba.
//                 </span>

//               </h1>

//               <p className="mt-6 text-lg md:text-xl text-gray-600 max-w-xl leading-relaxed">

//                 Bahercha khana khaun कंटाळलात?

//                 <br />

//                 <span className="font-bold text-gray-800">
//                   मग चला, पुन्हा घरच्या चवीकडे!
//                 </span>

//                 {" "}❤️

//               </p>

//               <p className="mt-4 text-gray-500 max-w-xl">

//                 Fresh, homemade meals delivered to your doorstep —
//                 with the punctuality and trust of the traditional
//                 Puneri Dabbawala.

//               </p>

//               {/* BUTTONS */}

//               <div className="flex flex-wrap gap-4 mt-8">

//                 <Link
//                   to="/regCustomer"
//                   className="group px-7 py-4 bg-orange-500 text-white rounded-full font-bold text-lg shadow-lg hover:bg-orange-600 hover:scale-105 transition duration-300"
//                 >

//                   🍱 Order Your Dabba

//                   <span className="ml-2 group-hover:ml-4 transition">
//                     →
//                   </span>

//                 </Link>

//                 <a
//                   href="#how"
//                   className="px-7 py-4 border-2 border-orange-500 text-orange-600 rounded-full font-bold text-lg hover:bg-orange-50 transition"
//                 >
//                   See How It Works
//                 </a>

//               </div>

//               {/* MINI TRUST */}

//               <div className="flex flex-wrap gap-6 mt-8 text-sm text-gray-500">

//                 <div className="flex items-center gap-2">
//                   <span className="text-green-600 text-lg">✓</span>
//                   Homemade
//                 </div>

//                 <div className="flex items-center gap-2">
//                   <span className="text-green-600 text-lg">✓</span>
//                   Fresh Daily
//                 </div>

//                 <div className="flex items-center gap-2">
//                   <span className="text-green-600 text-lg">✓</span>
//                   On Time
//                 </div>

//               </div>

//             </div>

//             {/* RIGHT */}

//             <div className="relative flex justify-center">

//               {/* Main circle */}

//               <div className="relative w-80 h-80 md:w-[450px] md:h-[450px] flex items-center justify-center">

//                 {/* Dabba */}

//                 <div className="relative z-10 text-[150px] md:text-[200px] drop-shadow-2xl  [animation-duration:3s]">

//                   <img  className="w-100 h-auto object-contain drop-shadow-2xl" src="/src/assets/images22.png" alt="Hero Banner" />

//                 </div>

//                 {/* Floating items */}

//                 <div className="absolute bottom-0 right-10 bg-white rounded-2xl shadow-xl p-4 text-3xl">
//                   ❤️
//                 </div>

//               </div>

//               {/* Rating card */}

//               <div className="absolute -bottom-1 left-5 md:left-0 bg-white shadow-xl rounded-2xl p-4 flex items-center gap-3">

//                 <div className="text-3xl">
//                   ⭐
//                 </div>

//                 <div>

//                   <p className="font-bold">
//                     4.9/5
//                   </p>

//                   <p className="text-xs text-gray-500">
//                     Happy Customers
//                   </p>

//                 </div>

//               </div>

//               {/* Time card */}

//               <div className="absolute top-10 right-0 md:-right-5 bg-white shadow-xl rounded-2xl p-4">

//                 <div className="flex items-center gap-2">

//                   <span className="text-2xl">
//                     ⏰
//                   </span>

//                   <div>

//                     <p className="font-bold">
//                       Always On Time
//                     </p>

//                     <p className="text-xs text-gray-500">
//                       Puneri Promise
//                     </p>

//                   </div>

//                 </div>

//               </div>

//             </div>

//           </div>

//         </div>

//       </section>

//       {/* ===================================================== */}
//       {/* STATS */}
//       {/* ===================================================== */}

//       <section className="bg-gray-900 text-white py-14">

//         <div className="max-w-6xl mx-auto px-5">

//           <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 text-center">

//             <div>

//               <h2 className="text-4xl md:text-5xl font-black text-orange-400">
//                 {meals}+
//               </h2>

//               <p className="mt-2 text-gray-400">
//                 Meals Served
//               </p>

//             </div>

//             <div>

//               <h2 className="text-4xl md:text-5xl font-black text-orange-400">
//                 {customers}+
//               </h2>

//               <p className="mt-2 text-gray-400">
//                 Happy Customers
//               </p>

//             </div>

//             <div>

//               <h2 className="text-4xl md:text-5xl font-black text-orange-400">
//                 {delivery}%
//               </h2>

//               <p className="mt-2 text-gray-400">
//                 On-Time Delivery
//               </p>

//             </div>

//           </div>

//         </div>

//       </section>

//       {/* ===================================================== */}
//       {/* TALKING SECTION */}
//       {/* ===================================================== */}

//       <section className="py-24 bg-white">

//         <div className="max-w-6xl mx-auto px-5 text-center">

//           <p className="text-orange-500 font-bold uppercase tracking-widest">
//             Let's be honest...
//           </p>

//           <h2 className="text-4xl md:text-5xl font-black mt-3">
//             Aaj kay jevnar?
//           </h2>

//           <p className="text-gray-500 mt-5 text-lg">
//             Same boring mess food? Outside food again?
//             <br />
//             Nahhh... 😏
//           </p>

//           <div className="grid md:grid-cols-3 gap-6 mt-14">

//             <div className="p-8 rounded-3xl bg-orange-50 hover:-translate-y-2 transition duration-300">

//               <div className="">
//                 <img className='rounded-3xl' src="src/assets/images9.jpg"  alt="Outside Food Image"></img>
//               </div>

//               <h3 className="text-xl font-bold mt-5">
//                 Outside Food
//               </h3>

//               <p className="text-gray-500 mt-3">
//                 रोज वही oily food?
//                 पेट म्हणतंय, "बस करा आता!" 😭
//               </p>

//             </div>

//             <div className="p-8 rounded-3xl bg-green-50 hover:-translate-y-2 transition duration-300">

//               <div className="">
//                 <img className='rounded-3xl' src="src/assets/images10.jpg"></img>
//               </div>

//               <h3 className="text-xl font-bold mt-5">
//                 Cooking Every Day
//               </h3>

//               <p className="text-gray-500 mt-3">
//                 Office, college, traffic...
//                 आणि त्यावर रोज स्वयंपाक? No chance!
//               </p>

//             </div>

//             <div className="p-8 rounded-3xl bg-yellow-50 hover:-translate-y-2 transition duration-300">

//               <div className="">
//                 <img className='rounded-3xl' src="src/assets/images4.jpg"></img>
//               </div>

//               <h3 className="text-xl font-bold mt-5">
//                 Puneri Dabbawala
//               </h3>

//               <p className="text-gray-500 mt-3">
//                 Gharacha swad, perfect timing
//                 आणि tension zero. ❤️
//               </p>

//             </div>

//           </div>

//         </div>

//       </section>

//       {/* ===================================================== */}
//       {/* HOW IT WORKS */}
//       {/* ===================================================== */}

//       <section
//         id="how"
//         className="py-24 bg-[#fff7e8]"
//       >

//         <div className="max-w-7xl mx-auto px-5">

//           <div className="text-center max-w-2xl mx-auto">

//             <p className="text-orange-500 font-bold uppercase tracking-widest">
//               Simple & Reliable
//             </p>

//             <h2 className="text-4xl md:text-5xl font-black mt-3">
//               Your Dabba's Journey
//             </h2>

//             <p className="text-gray-500 mt-5">
//               From kitchen to your desk — every dabba has
//               a journey worth talking about.
//             </p>

//           </div>

//           <div className="grid md:grid-cols-5 gap-8 mt-16">

//             <div className="text-center">

//               <div className="w-24 h-24 mx-auto bg-white rounded-full shadow-lg flex items-center justify-center text-5xl">
//                 🏠
//               </div>

//               <h3 className="font-bold text-xl mt-5">
//                 Your Home
//               </h3>

//               <p className="text-gray-500 text-sm mt-2">
//                 Freshly prepared with love.
//               </p>

//             </div>

//             <div className="text-center">

//               <div className="w-24 h-24 mx-auto bg-white rounded-full shadow-lg flex items-center justify-center text-5xl">
//                 🥘
//               </div>

//               <h3 className="font-bold text-xl mt-5">
//                 Fresh Food
//               </h3>

//               <p className="text-gray-500 text-sm mt-2">
//                 Hot, tasty and homemade.
//               </p>

//             </div>

//             <div className="text-center">

//               <div className="w-24 h-24 mx-auto bg-white rounded-full shadow-lg flex items-center justify-center text-5xl">
//                 🚴
//               </div>

//               <h3 className="font-bold text-xl mt-5">
//                 Pick Up
//               </h3>

//               <p className="text-gray-500 text-sm mt-2">
//                 Collected right on time.
//               </p>

//             </div>

//             <div className="text-center">

//               <div className="w-24 h-24 mx-auto bg-white rounded-full shadow-lg flex items-center justify-center text-5xl">
//                 📦
//               </div>

//               <h3 className="font-bold text-xl mt-5">
//                 Delivery
//               </h3>

//               <p className="text-gray-500 text-sm mt-2">
//                 Carefully delivered to you.
//               </p>

//             </div>

//             <div className="text-center">

//               <div className="w-24 h-24 mx-auto bg-white rounded-full shadow-lg flex items-center justify-center text-5xl">
//                 😋
//               </div>

//               <h3 className="font-bold text-xl mt-5">
//                 Enjoy!
//               </h3>

//               <p className="text-gray-500 text-sm mt-2">
//                 Bas! Ata jevan kara. ❤️
//               </p>

//             </div>

//           </div>

//         </div>

//       </section>

//       {/* ===================================================== */}
//       {/* MEALS */}
//       {/* ===================================================== */}

//       <section
//         id="meals"
//         className="py-24 bg-white"
//       >

//         <div className="max-w-7xl mx-auto px-5">

//           <div className="text-center">

//             <p className="text-orange-500 font-bold uppercase tracking-widest">
//               Today's Goodness
//             </p>

//             <h2 className="text-4xl md:text-5xl font-black mt-3">
//               What's Cooking?
//             </h2>

//             <p className="text-gray-500 mt-5">
//               Simple food. Big happiness.
//             </p>

//           </div>

//           <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">

//             {/* CARD 1 */}

//             <div className="group bg-[#fff7e8] rounded-3xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-2 transition duration-300">

//               <div className="h-52 flex items-center justify-center text-8xl group-hover:scale-110 transition duration-300">
//                 🍛
//               </div>

//               <div className="p-6">

//                 <h3 className="text-xl font-bold">
//                   Maharashtrian Thali
//                 </h3>

//                 <p className="text-gray-500 mt-2 text-sm">
//                   Bhaji • Dal • Rice • Roti
//                 </p>

//                 <div className="flex justify-between items-center mt-5">

//                   <span className="font-black text-orange-600">
//                     ₹99
//                   </span>

//                   <button className="bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
//                     Order
//                   </button>

//                 </div>

//               </div>

//             </div>

//             {/* CARD 2 */}

//             <div className="group bg-[#f0fdf4] rounded-3xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-2 transition duration-300">

//               <div className="h-52 flex items-center justify-center text-8xl group-hover:scale-110 transition duration-300">
//                 🍲
//               </div>

//               <div className="p-6">

//                 <h3 className="text-xl font-bold">
//                   Gharachi Dal Khichdi
//                 </h3>

//                 <p className="text-gray-500 mt-2 text-sm">
//                   Comfort food • Curd • Papad
//                 </p>

//                 <div className="flex justify-between items-center mt-5">

//                   <span className="font-black text-orange-600">
//                     ₹89
//                   </span>

//                   <button className="bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
//                     Order
//                   </button>

//                 </div>

//               </div>

//             </div>

//             {/* CARD 3 */}

//             <div className="group bg-[#fff1f2] rounded-3xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-2 transition duration-300">

//               <div className="h-52 flex items-center justify-center text-8xl group-hover:scale-110 transition duration-300">
//                 🥗
//               </div>

//               <div className="p-6">

//                 <h3 className="text-xl font-bold">
//                   Healthy Dabba
//                 </h3>

//                 <p className="text-gray-500 mt-2 text-sm">
//                   Salad • Roti • Sabzi • Dal
//                 </p>

//                 <div className="flex justify-between items-center mt-5">

//                   <span className="font-black text-orange-600">
//                     ₹109
//                   </span>

//                   <button className="bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
//                     Order
//                   </button>

//                 </div>

//               </div>

//             </div>

//             {/* CARD 4 */}

//             <div className="group bg-[#eff6ff] rounded-3xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-2 transition duration-300">

//               <div className="h-52 flex items-center justify-center text-8xl group-hover:scale-110 transition duration-300">
//                 🍚
//               </div>

//               <div className="p-6">

//                 <h3 className="text-xl font-bold">
//                   Special Friday
//                 </h3>

//                 <p className="text-gray-500 mt-2 text-sm">
//                   Pulao • Raita • Sweet
//                 </p>

//                 <div className="flex justify-between items-center mt-5">

//                   <span className="font-black text-orange-600">
//                     ₹119
//                   </span>

//                   <button className="bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
//                     Order
//                   </button>

//                 </div>

//               </div>

//             </div>

//           </div>

//         </div>

//       </section>

//       {/* ===================================================== */}
//       {/* ABOUT */}
//       {/* ===================================================== */}

//       <section
//         id="about"
//         className="py-24 bg-gray-900 text-white"
//       >

//         <div className="max-w-7xl mx-auto px-5">

//           <div className="grid lg:grid-cols-2 gap-16 items-center">

//             <div>

//               <p className="text-orange-400 font-bold uppercase tracking-widest">
//                 Why Puneri Dabbawala?
//               </p>

//               <h2 className="text-4xl md:text-5xl font-black mt-4 leading-tight">

//                 Not just a meal.

//                 <br />

//                 <span className="text-orange-400">
//                   It's a feeling.
//                 </span>

//               </h2>

//               <p className="text-gray-400 text-lg mt-6 leading-relaxed">

//                 We believe food should feel like home.
//                 That's why Puneri Dabbawala brings freshly
//                 prepared meals to your doorstep while keeping
//                 the spirit of Pune's legendary dabbawala culture alive.

//               </p>

//               <div className="grid sm:grid-cols-2 gap-5 mt-10">

//                 <div className="flex gap-4">

//                   <span className="text-3xl">
//                     ❤️
//                   </span>

//                   <div>

//                     <h3 className="font-bold">
//                       Made With Love
//                     </h3>

//                     <p className="text-gray-500 text-sm mt-1">
//                       Food that feels homemade.
//                     </p>

//                   </div>

//                 </div>

//                 <div className="flex gap-4">

//                   <span className="text-3xl">
//                     ⏰
//                   </span>

//                   <div>

//                     <h3 className="font-bold">
//                       Puneri Precision
//                     </h3>

//                     <p className="text-gray-500 text-sm mt-1">
//                       We respect your time.
//                     </p>

//                   </div>

//                 </div>

//                 <div className="flex gap-4">

//                   <span className="text-3xl">
//                     🌱
//                   </span>

//                   <div>

//                     <h3 className="font-bold">
//                       Fresh Everyday
//                     </h3>

//                     <p className="text-gray-500 text-sm mt-1">
//                       No yesterday's food.
//                     </p>

//                   </div>

//                 </div>

//                 <div className="flex gap-4">

//                   <span className="text-3xl">
//                     🤝
//                   </span>

//                   <div>

//                     <h3 className="font-bold">
//                       Trusted Service
//                     </h3>

//                     <p className="text-gray-500 text-sm mt-1">
//                       Your dabba, our responsibility.
//                     </p>

//                   </div>

//                 </div>

//               </div>

//             </div>

//             {/* BIG DABBA */}

//             <div className="flex justify-center">

//               <div className="relative">

//                 <div className="w-72 h-72 md:w-96 md:h-96 rounded-full flex items-center justify-center">

//                   <div className="text-[180px] md:text-[230px]">
//                     <img  className="w-100 h-auto object-contain drop-shadow-2xl" src="/src/assets/images22.png" alt="Hero Banner" />
//                   </div>

//                 </div>

//                 {/* <div className="absolute -top-5 -right-5 bg-white text-gray-800 rounded-2xl shadow-xl p-5">

//                   <p className="text-2xl">
//                     🚴
//                   </p>

//                   <p className="font-bold mt-1">
//                     On Time
//                   </p>

//                 </div> */}

//                 {/* <div className="absolute -bottom-5 -left-5 bg-white text-gray-800 rounded-2xl shadow-xl p-5">

//                   <p className="text-2xl">
//                     😋
//                   </p>

//                   <p className="font-bold mt-1">
//                     Full Satisfaction
//                   </p>

//                 </div> */}

//               </div>

//             </div>

//           </div>

//         </div>

//       </section>

//       {/* ===================================================== */}
//       {/* TESTIMONIALS */}
//       {/* ===================================================== */}

//       <section className="py-24 bg-[#fffaf0]">

//         <div className="max-w-7xl mx-auto px-5">

//           <div className="text-center">

//             <p className="text-orange-500 font-bold uppercase tracking-widest">
//               People Are Talking
//             </p>

//             <h2 className="text-4xl md:text-5xl font-black mt-3">
//               Dabba Delivered. Happiness Delivered.
//             </h2>

//           </div>

//           <div className="grid md:grid-cols-3 gap-7 mt-14">

//             <div className="bg-white p-7 rounded-3xl shadow-sm hover:shadow-xl transition">

//               <div className="text-orange-400 text-xl">
//                 ★★★★★
//               </div>

//               <p className="text-gray-600 mt-5 leading-relaxed">

//                 "Finally, a dabba service that actually
//                 tastes like gharacha jevan! The dal and
//                 bhaji are amazing."

//               </p>

//               <div className="flex items-center gap-3 mt-6">

//                 <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center text-xl">
//                   👨🏻
//                 </div>

//                 <div>

//                   <h4 className="font-bold">
//                     Rahul
//                   </h4>

//                   <p className="text-sm text-gray-500">
//                     IT Professional
//                   </p>

//                 </div>

//               </div>

//             </div>

//             <div className="bg-white p-7 rounded-3xl shadow-sm hover:shadow-xl transition">

//               <div className="text-orange-400 text-xl">
//                 ★★★★★
//               </div>

//               <p className="text-gray-600 mt-5 leading-relaxed">

//                 "I used to order outside food almost every
//                 day. Now my lunch is healthy, tasty and
//                 arrives on time."

//               </p>

//               <div className="flex items-center gap-3 mt-6">

//                 <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-xl">
//                   👩🏻
//                 </div>

//                 <div>

//                   <h4 className="font-bold">
//                     Sneha
//                   </h4>

//                   <p className="text-sm text-gray-500">
//                     Software Developer
//                   </p>

//                 </div>

//               </div>

//             </div>

//             <div className="bg-white p-7 rounded-3xl shadow-sm hover:shadow-xl transition">

//               <div className="text-orange-400 text-xl">
//                 ★★★★★
//               </div>

//               <p className="text-gray-600 mt-5 leading-relaxed">

//                 "Puneri Dabbawala is simple, reliable and
//                 feels personal. Exactly what I wanted."

//               </p>

//               <div className="flex items-center gap-3 mt-6">

//                 <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center text-xl">
//                   👨🏻
//                 </div>

//                 <div>

//                   <h4 className="font-bold">
//                     Akshay
//                   </h4>

//                   <p className="text-sm text-gray-500">
//                     College Student
//                   </p>

//                 </div>

//               </div>

//             </div>

//           </div>

//         </div>

//       </section>

//       {/* ===================================================== */}
//       {/* FAQ */}
//       {/* ===================================================== */}

//       <section
//         id="faq"
//         className="py-24 bg-white"
//       >

//         <div className="max-w-4xl mx-auto px-5">

//           <div className="text-center">

//             <p className="text-orange-500 font-bold uppercase tracking-widest">
//               Got Questions?
//             </p>

//             <h2 className="text-4xl md:text-5xl font-black mt-3">
//               Lets Ask!
//             </h2>

//           </div>

//           <div className="mt-12 space-y-4">

//             {/* FAQ 1 */}

//             <div className="border border-gray-200 rounded-2xl overflow-hidden">

//               <button
//                 onClick={() => toggleFaq(0)}
//                 className="w-full flex justify-between items-center p-5 text-left font-bold text-lg"
//               >

//                 <span>
//                   Is the food really homemade?
//                 </span>

//                 <span className="text-orange-500 text-2xl">
//                   {activeFaq === 0 ? "−" : "+"}
//                 </span>

//               </button>

//               {activeFaq === 0 && (

//                 <div className="px-5 pb-5 text-gray-500">

//                   Ho! ❤️ Our meals are designed around
//                   the taste and comfort of homemade food.

//                 </div>

//               )}

//             </div>

//             {/* FAQ 2 */}

//             <div className="border border-gray-200 rounded-2xl overflow-hidden">

//               <button
//                 onClick={() => toggleFaq(1)}
//                 className="w-full flex justify-between items-center p-5 text-left font-bold text-lg"
//               >

//                 <span>
//                   Where do you deliver?
//                 </span>

//                 <span className="text-orange-500 text-2xl">
//                   {activeFaq === 1 ? "−" : "+"}
//                 </span>

//               </button>

//               {activeFaq === 1 && (

//                 <div className="px-5 pb-5 text-gray-500">

//                   Currently we focus on selected areas
//                   around Pune. More locations are coming soon!

//                 </div>

//               )}

//             </div>

//             {/* FAQ 3 */}

//             <div className="border border-gray-200 rounded-2xl overflow-hidden">

//               <button
//                 onClick={() => toggleFaq(2)}
//                 className="w-full flex justify-between items-center p-5 text-left font-bold text-lg"
//               >

//                 <span>
//                   Can I choose my meal?
//                 </span>

//                 <span className="text-orange-500 text-2xl">
//                   {activeFaq === 2 ? "−" : "+"}
//                 </span>

//               </button>

//               {activeFaq === 2 && (

//                 <div className="px-5 pb-5 text-gray-500">

//                   Yes! Depending on the available menu,
//                   you can select the meal you want.

//                 </div>

//               )}

//             </div>

//             {/* FAQ 4 */}

//             <div className="border border-gray-200 rounded-2xl overflow-hidden">

//               <button
//                 onClick={() => toggleFaq(3)}
//                 className="w-full flex justify-between items-center p-5 text-left font-bold text-lg"
//               >

//                 <span>
//                   How do I order?
//                 </span>

//                 <span className="text-orange-500 text-2xl">
//                   {activeFaq === 3 ? "−" : "+"}
//                 </span>

//               </button>

//               {activeFaq === 3 && (

//                 <div className="px-5 pb-5 text-gray-500">

//                   Create your account, select your meal,
//                   and place your order. That's it!

//                 </div>

//               )}

//             </div>

//           </div>

//         </div>

//       </section>

//       {/* ===================================================== */}
//       {/* FINAL CTA */}
//       {/* ===================================================== */}

//       /*{ <section className="py-24 px-5">

//         <div className="max-w-6xl mx-auto rounded-[2rem] bg-gradient-to-br from-orange-500 to-orange-600 text-white p-10 md:p-16 text-center relative overflow-hidden">

//           {/* Decorations */}

//           <div className="absolute -top-20 -left-20 w-60 h-60 bg-white/10 rounded-full"></div>

//           <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-white/10 rounded-full"></div>

//           <div className="relative z-10">

//             <div className="text-6xl">
//                                 <img  className="w-100 h-auto object-contain drop-shadow-2xl" src="/src/assets/images22.png" alt="Hero Banner" />

//             </div>

//             <h2 className="text-4xl md:text-5xl font-black mt-6">

//               Bhook Lagli Aahe?

//             </h2>

//             <p className="text-orange-100 text-lg mt-5 max-w-2xl mx-auto">

//               मग कशाची वाट पाहताय?
//               Bring gharacha swad back to your everyday life.

//             </p>

//             <Link
//               to="/regCustomer"
//               className="inline-block mt-8 px-8 py-4 bg-white text-orange-600 rounded-full font-black text-lg shadow-xl hover:scale-105 transition"
//             >

//               Start Your Dabba Journey →

//             </Link>

//           </div>

//         </div>

//       </section> }*/

//       {/* ===================================================== */}
//       {/* FOOTER */}
//       {/* ===================================================== */}

//       <footer className="bg-gray-950 text-white pt-16 pb-8">

//         <div className="max-w-7xl mx-auto px-5">

//           <div className="grid md:grid-cols-4 gap-10">

//             {/* BRAND */}

//             <div className="md:col-span-2">

//               <div className="flex items-center gap-3">

//                 <div className="w-12 h-12 rounded-full bg-orange-500 flex items-center justify-center text-2xl">
//                   🍱
//                 </div>

//                 <div>

//                   <h2 className="text-xl font-black">
//                     Puneri Dabbawala
//                   </h2>

//                   <p className="text-gray-500 text-xs">
//                     Gharacha Swad. Tumchya Darat.
//                   </p>

//                 </div>

//               </div>

//               <p className="text-gray-500 mt-5 max-w-md leading-relaxed">

//                 Bringing the warmth of homemade food
//                 to your everyday life — with Pune's trusted
//                 dabbawala spirit.

//               </p>

//               <div className="flex gap-3 mt-6">

//                 <div className="w-10 h-10 bg-gray-900 rounded-full flex items-center justify-center hover:bg-orange-500 transition cursor-pointer">
//                   f
//                 </div>

//                 <div className="w-10 h-10 bg-gray-900 rounded-full flex items-center justify-center hover:bg-orange-500 transition cursor-pointer">
//                   ◎
//                 </div>

//                 <div className="w-10 h-10 bg-gray-900 rounded-full flex items-center justify-center hover:bg-orange-500 transition cursor-pointer">
//                   in
//                 </div>

//               </div>

//             </div>

//             {/* QUICK LINKS */}

//             <div>

//               <h3 className="font-bold text-lg">
//                 Quick Links
//               </h3>

//               <div className="flex flex-col gap-3 mt-5 text-gray-500">

//                 <a href="#home" className="hover:text-orange-400 transition">
//                   Home
//                 </a>

//                 <a href="#how" className="hover:text-orange-400 transition">
//                   How It Works
//                 </a>

//                 <a href="#meals" className="hover:text-orange-400 transition">
//                   Meals
//                 </a>

//                 <a href="#about" className="hover:text-orange-400 transition">
//                   About Us
//                 </a>

//               </div>

//             </div>

//             {/* CONTACT */}

//             <div>

//               <h3 className="font-bold text-lg">
//                 Talk To Us
//               </h3>

//               <div className="flex flex-col gap-4 mt-5 text-gray-500">

//                 <p>
//                   📍 Pune, Maharashtra
//                 </p>

//                 <p>
//                   📧 hello@puneridabbawala.com
//                 </p>

//                 <p>
//                   📞 +91 98765 43210
//                 </p>

//               </div>

//             </div>

//           </div>

//           <div className="border-t border-gray-800 mt-14 pt-7 flex flex-col md:flex-row justify-between gap-4 text-gray-600 text-sm">

//             <p>
//               © 2026 Puneri Dabbawala. All rights reserved.
//             </p>

//             <p>
//               Made with ❤️ in Pune
//             </p>

//           </div>

//         </div>

//       </footer>

//     </div>
//   );
// };

// export default Home;
