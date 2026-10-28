import React from 'react';
import { skillsCategories } from '@/data/profile';
import { Badge } from '@/components/ui/Badge';
import { CodeIcon, LayersIcon, SparklesIcon } from '@/components/ui/Icons';

export function Skills() {
  const getCategoryIcon = (id: string) => {
    switch (id) {
      case 'frontend':
        return <CodeIcon size={18} className="text-red-600 dark:text-red-400" />;
      case 'tools':
        return <LayersIcon size={18} className="text-sky-600 dark:text-sky-400" />;
      default:
        return <SparklesIcon size={18} className="text-amber-600 dark:text-amber-400" />;
    }
  };

  return (
    <section id="skills" className="scroll-mt-24 py-20 border-t border-slate-200 bg-white dark:border-zinc-900 dark:bg-zinc-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-red-600 dark:text-red-400 font-semibold">
            <span className="h-px w-6 bg-red-600 dark:bg-red-400" />
            <span>02 / Technical Stack</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-zinc-100">
            Skills &amp; <span className="text-red-600 dark:text-red-500">Technologies</span>
          </h2>
          <p className="text-base text-slate-600 dark:text-zinc-400 max-w-2xl">
            A transparent overview of the technologies I study and build with. Skills are categorized honestly without artificial percentage bars.
          </p>
        </div>

        {/* Categories Stack */}
        <div className="space-y-10">
          {skillsCategories.map((category) => (
            <div
              key={category.id}
              className="rounded-3xl border border-slate-200/90 bg-white shadow-sm p-6 sm:p-8 dark:border-zinc-800/80 dark:bg-zinc-900/40 dark:shadow-xl dark:shadow-black/20"
            >
              {/* Category Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 pb-4 border-b border-slate-100 dark:border-zinc-800/60">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-100 border border-slate-200 dark:bg-zinc-950 dark:border-zinc-800">
                    {getCategoryIcon(category.id)}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-zinc-100">{category.title}</h3>
                    <p className="text-xs text-slate-500 dark:text-zinc-400">{category.description}</p>
                  </div>
                </div>
                <Badge variant={category.id === 'frontend' ? 'red' : category.id === 'tools' ? 'blue' : 'amber'}>
                  {category.badge}
                </Badge>
              </div>

              {/* Grid of Skill Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="group relative rounded-2xl border border-slate-200/80 bg-slate-50/70 p-4 hover:border-slate-300 hover:bg-white hover:shadow-xs transition-all flex flex-col justify-between dark:border-zinc-800/70 dark:bg-zinc-900/60 dark:hover:border-zinc-700 dark:hover:bg-zinc-900/90"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <span className="font-semibold text-slate-900 text-sm group-hover:text-red-600 dark:text-zinc-100 dark:group-hover:text-red-400 transition-colors">
                          {skill.name}
                        </span>
                        {skill.levelBadge && (
                          <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full border ${
                            skill.isStudied
                              ? 'bg-rose-50 text-red-700 border-rose-200 dark:bg-red-950/40 dark:text-red-400 dark:border-red-800/40'
                              : 'bg-slate-100 text-slate-600 border-slate-200 dark:bg-zinc-800/60 dark:text-zinc-400 dark:border-zinc-700/60'
                          }`}>
                            {skill.levelBadge}
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-slate-600 dark:text-zinc-400 leading-relaxed">
                        {skill.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
