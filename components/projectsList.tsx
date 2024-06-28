'use client'
import React, {useState} from 'react'
import { simpleProjectCard } from "@/lib/interface";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface ProjectsListProps {
  data: simpleProjectCard[];
}

const ProjectsList = ({data}: ProjectsListProps) => {
    const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 7;
  
  const totalPages = Math.ceil(data.length / itemsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  }

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  }

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = data.slice(startIndex, startIndex + itemsPerPage);
  return (
    <main className="flex h-screen flex-col gap-4">
      {currentItems.map((project: simpleProjectCard) => (
        <div key={project.currentSlug} className="flex flex-col">
          <Link href={`/project/${project.currentSlug}`} className="text-blue-600 dark:text-gray-300 underline text-2xl hover:text-blue-900">
            {project.title}
          </Link>
          <span className="text-xs">
            {project.smallDescription}
          </span>
        </div>
      ))}

      <div className="flex justify-between mt-4 gap-2">
        <button
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
          className={`flex items-center gap-1 ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''}`}>
          <ArrowLeft />
          Previous
        </button>

        <span>Page {currentPage} of {totalPages}</span>

        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className={`flex items-center gap-1 ${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : ''}`}>
          Next
          <ArrowRight />
        </button>
      </div>
    </main>
  )
}

export default ProjectsList