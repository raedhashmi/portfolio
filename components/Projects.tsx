import { projects } from "../lib/projects";

export default function Projects() {
  return (
    <section className="mb-32">
      <h2 className="text-2xl font-semibold mb-8">Projects</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {projects.map((p) => (
          <div
            key={p.name}
            className="rounded-xl border border-slate-800 bg-[#0f1320] p-6 hover:-translate-y-1 transition"
          >
            <h3 className="font-semibold mb-2">{p.name}</h3>
            <p className="text-sm text-slate-400">{p.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
