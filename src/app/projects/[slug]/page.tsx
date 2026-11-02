import { Suspense } from 'react';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { getProjectBySlug, getAllProjectSlugs } from '@/data/projects';
import { ProjectDetails } from '@/components/projects/ProjectDetails';

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllProjectSlugs();
  return slugs.map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: 'Project Not Found | Abdullah Developer Portfolio',
      description: 'The requested project could not be found.',
    };
  }

  return {
    title: `${project.title} — Case Study | Abdullah`,
    description: project.shortDescription,
    openGraph: {
      title: `${project.title} — Abdullah Portfolio`,
      description: project.shortDescription,
      type: 'article',
      images: [
        {
          url: project.image,
          width: 1200,
          height: 675,
          alt: project.title,
        },
      ],
    },
  };
}

async function ProjectContent({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return <ProjectDetails project={project} />;
}

export default function ProjectPage({ params }: ProjectPageProps) {
  return (
    <Suspense
      fallback={
        <div className="pt-28 pb-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 animate-pulse space-y-6">
          <div className="h-6 w-36 bg-slate-200 dark:bg-zinc-800 rounded-lg" />
          <div className="h-10 sm:h-14 w-2/3 bg-slate-200 dark:bg-zinc-800 rounded-2xl" />
          <div className="h-5 w-1/2 bg-slate-200 dark:bg-zinc-800 rounded-lg" />
          <div className="aspect-[16/9] w-full bg-slate-200 dark:bg-zinc-800 rounded-3xl" />
        </div>
      }
    >
      <ProjectContent params={params} />
    </Suspense>
  );
}
