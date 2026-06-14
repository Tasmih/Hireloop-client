import Image from "next/image";
import bgImg from "@/Images/globe.png";
const stats = [
  { value: "50K", label: "Active Jobs", icon: "⌘" },
  { value: "12K", label: "Companies", icon: "▥" },
  { value: "2M", label: "Job Seekers", icon: "◉" },
  { value: "97%", label: "Satisfaction Rate", icon: "✦" },
];

function StatsSection() {
  return (
    <section className="relative overflow-hidden bg-black py-20 px-6 md:px-12">
      {/* Background Globe */}
<div className="absolute top-[-500px] left-1/2 -translate-x-1/2 w-[900px] h-[900px] z-0">
  <Image
    src={bgImg}
    alt="Globe"
    width={900}
    height={900}
    className="opacity-70 object-contain"
    priority
  />
</div>
      {/* Dark + Cyan Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/50 to-black z-[1]"></div>
<div className="absolute inset-0 bg-cyan-500/5 z-[2]"></div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Heading */}
        <div className="mx-auto mb-12 max-w-xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-cyan-400">
            Career Connect Stats
          </p>

          <h2 className="text-2xl md:text-2xl font-semibold leading-snug text-white">
            Assisting over{" "}
            <span className="text-cyan-400">15,000 job seekers</span>
            <br />
            find their dream positions.
          </h2>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {stats.map((item, index) => (
            <div
              key={index}
              className="group rounded-xl border border-zinc-800 bg-black/80 backdrop-blur-md p-6 shadow-lg transition duration-300 hover:border-cyan-500/70 hover:bg-zinc-950"
            >
              <div className="mb-8 flex h-10 w-10 items-center justify-center rounded-lg border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-lg group-hover:bg-cyan-500 group-hover:text-black transition">
                {item.icon}
              </div>

              <h3 className="text-4xl font-bold text-white mb-3">
                {item.value}
              </h3>

              <p className="text-sm text-zinc-400">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default StatsSection;