import { ChartNoAxesColumn, Zap, Crown, Plus } from "lucide-react";

const pricingPlans = [
  {
    name: "Starter",
    price: "$0",
    period: "/month",
    icon: Crown,
    features: [
      "Daily AI match brief (top 5)",
      "Verified salary bands",
      "Company insight dashboards",
      "1-click apply, unlimited",
    ],
    highlighted: false,
  },
  {
    name: "Growth",
    price: "$17",
    period: "/month",
    icon: ChartNoAxesColumn,
    features: [
      "Daily AI match brief (top 5)",
      "Verified salary bands",
      "Company insight dashboards",
      "1-click apply, unlimited",
    ],
    highlighted: true,
  },
  {
    name: "Premium",
    price: "$99",
    period: "/month",
    icon: Zap,
    features: [
      "Everything in Pro",
      "Multi-profile career portfolios",
      "Shared talent rooms",
      "Recruiter view (read-only)",
    ],
    highlighted: false,
  },
];

function PricingSection() {
  return (
    <section className="relative overflow-hidden bg-black px-6 md:px-12 py-24">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.10),transparent_45%)]"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black"></div>

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mx-auto mb-12 max-w-xl text-center">
          <div className="mb-4 flex items-center justify-center gap-3 text-sm uppercase tracking-widest text-zinc-400">
            <span className="h-1.5 w-1.5 bg-cyan-500"></span>
            Pricing
            <span className="h-1.5 w-1.5 bg-cyan-500"></span>
          </div>

          <h2 className="text-3xl md:text-5xl font-semibold leading-tight text-white">
            Pay for the leverage,
            <br />
            not the listings
          </h2>
        </div>

        {/* Toggle */}
        <div className="mb-10 flex justify-center">
          <div className="flex items-center rounded-full border border-zinc-800 bg-zinc-900/80 p-1 shadow-lg backdrop-blur-md">
            <button className="rounded-full bg-white px-5 py-2 text-sm font-semibold text-black">
              Monthly
            </button>

            <button className="px-5 py-2 text-sm font-medium text-zinc-300">
              Yearly
            </button>

            <span className="rounded-full bg-cyan-500 px-3 py-1 text-xs font-bold text-black">
              25%
            </span>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {pricingPlans.map((plan, index) => {
            const Icon = plan.icon;

            return (
              <div
                key={index}
                className={`rounded-2xl border p-6 transition duration-300 ${
                  plan.highlighted
                    ? "border-cyan-500/50 bg-zinc-900/90 shadow-2xl shadow-cyan-500/10"
                    : "border-zinc-800 bg-black/80 hover:border-cyan-500/50"
                }`}
              >
                {/* Top */}
                <div className="mb-8 flex items-start justify-between">
                  <div className="flex items-center gap-4">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-zinc-800 bg-zinc-900 text-cyan-400">
                      <Icon size={18} />
                    </div>

                    <h3 className="text-xl font-medium text-white">
                      {plan.name}
                    </h3>
                  </div>

                  <div className="text-right">
                    <span className="text-4xl font-bold text-white">
                      {plan.price}
                    </span>
                    <span className="ml-1 text-xs text-zinc-400">
                      {plan.period}
                    </span>
                  </div>
                </div>

                <p className="mb-4 text-sm font-medium text-white">
                  Start building your insights hub:
                </p>

                {/* Features */}
                <ul className="mb-12 space-y-4">
                  {plan.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center gap-3 text-sm text-zinc-400"
                    >
                      <span className="flex h-5 w-5 items-center justify-center rounded-md bg-zinc-800 text-zinc-300">
                        <Plus size={13} />
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Button */}
                <button
                  className={`flex w-full items-center justify-between rounded-lg px-5 py-4 text-sm font-semibold transition ${
                    plan.highlighted
                      ? "bg-white text-black hover:bg-cyan-400"
                      : "bg-zinc-800 text-white hover:bg-cyan-500 hover:text-black"
                  }`}
                >
                  Choose This Plan
                  <span>→</span>
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default PricingSection;