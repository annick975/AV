import React, { ReactNode } from "react";

interface ProjectSectionProps {
  title: string;
  children: ReactNode;
  className?: string;
}

export default function ProjectSection({
  title,
  children,
  className,
}: ProjectSectionProps) {
  return (
    <section className={`space-y-4 ${className || ""}`}>
      <h2 className="text-2xl font-semibold text-green-700">{title}</h2>
      <div>{children}</div>
    </section>
  );
}
