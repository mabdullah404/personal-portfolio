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

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return <ProjectDetails project={project} />;
}
