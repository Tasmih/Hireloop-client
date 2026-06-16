"use client";

import React, { useState, useEffect } from "react";
import JobCard from "@/components/jobs/JobCard";
import JobFilters from "@/components/jobs/JobFilters";
import { useRouter } from "next/navigation";
import { Pagination } from "@heroui/react";

export default function JobListingContainer({ jobs, filters, total }) {
  // --- States initialized from URL filters ---
  const [searchQuery, setSearchQuery] = useState(filters.search || "");
  const [selectedType, setSelectedType] = useState(filters.jobType || "all");
  const [selectedCategory, setSelectedCategory] = useState(filters.jobCategory || "all");
  const [isRemoteOnly, setIsRemoteOnly] = useState(filters.isRemote || false);
  const [page, setPage] = useState(filters.page || 1);

  const router = useRouter();

  // --- Pagination calculations ---
  const itemsPerPage = 12;
  const totalItems = total;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  // --- Generate array of visible page numbers ---
  const getPageNumbers = () => {
    const pages = [];
    if (totalPages <= 0) return pages;
    
    pages.push(1);
    if (page > 3) {
      pages.push("ellipsis");
    }
    
    const start = Math.max(2, page - 1);
    const end = Math.min(totalPages - 1, page + 1);
    for (let i = start; i <= end; i++) {
      pages.push(i);
    }
    
    if (page < totalPages - 2) {
      pages.push("ellipsis");
    }
    
    if (totalPages > 1) {
      pages.push(totalPages);
    }
    return pages;
  };

  const startItem = (page - 1) * itemsPerPage + 1;
  const endItem = Math.min(page * itemsPerPage, totalItems);

  // --- Fix: Reset page to 1 whenever any filter changes ---
  // This prevents the application from getting stuck on empty higher pages (e.g., page 3)
 // --- Fix: Reset page to 1 whenever any filter changes ---
useEffect(() => {
  setPage(1);
  // eslint-disable-next-line react-hooks/exhaustive-deps
}, [searchQuery, selectedType, selectedCategory, isRemoteOnly]);

  // --- Sync component states with URL Query Parameters ---
  useEffect(() => {
    const sp = new URLSearchParams();

    if (searchQuery) sp.set("search", searchQuery);
    if (selectedType !== "all") sp.set("jobType", selectedType);
    if (selectedCategory !== "all") sp.set("jobCategory", selectedCategory);
    if (isRemoteOnly) sp.set("isRemote", "true");
    
    // The safely adjusted page number is attached here
    if (page) sp.set("page", page);

    const path = `?${sp.toString()}`;
    
    // { scroll: false } prevents the window from awkwardly jumping to the top on every keystroke
    router.push(path, { scroll: false }); 
  }, [router, searchQuery, selectedType, selectedCategory, isRemoteOnly, page]);

  return (
    <>
      {/* Search Input and Dropdown Filters */}
      <JobFilters
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        selectedType={selectedType}
        setSelectedType={setSelectedType}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        isRemoteOnly={isRemoteOnly}
        setIsRemoteOnly={setIsRemoteOnly}
      />

      {/* Result Meta Counter */}
      <div className="max-w-7xl mx-auto mb-6 text-sm text-zinc-500">
        Showing {jobs.length} position{jobs.length !== 1 && "s"}
      </div>

      {/* Conditional Rendering: Grid vs No Positions Found */}
      {jobs.length > 0 ? (
        <>
          {/* Job Card Grid */}
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
            {jobs.map((jobItem) => (
              <JobCard
                key={jobItem._id?.$oid || jobItem._id}
                job={jobItem}
              />
            ))}
          </div>
          
          {/* Pagination Navigation */}
          <Pagination className="w-full mt-8">
            <Pagination.Summary>
              Showing {startItem}-{endItem} of {totalItems} results
            </Pagination.Summary>
            <Pagination.Content>
              {/* Previous Button */}
              <Pagination.Item>
                <Pagination.Previous isDisabled={page === 1} onPress={() => setPage((p) => p - 1)}>
                  <Pagination.PreviousIcon />
                  <span>Previous</span>
                </Pagination.Previous>
              </Pagination.Item>
              
              {/* Dynamic Page Numbers & Ellipses */}
              {getPageNumbers().map((p, i) =>
                p === "ellipsis" ? (
                  <Pagination.Item key={`ellipsis-${i}`}>
                    <Pagination.Ellipsis />
                  </Pagination.Item>
                ) : (
                  <Pagination.Item key={p}>
                    <Pagination.Link isActive={p === page} onPress={() => setPage(p)}>
                      {p}
                    </Pagination.Link>
                  </Pagination.Item>
                )
              )}
              
              {/* Next Button */}
              <Pagination.Item>
                <Pagination.Next isDisabled={page === totalPages || totalPages === 0} onPress={() => setPage((p) => p + 1)}>
                  <span>Next</span>
                  <Pagination.NextIcon />
                </Pagination.Next>
              </Pagination.Item>
            </Pagination.Content>
          </Pagination>
        </>
      ) : (
        /* Empty State */
        <div className="text-center py-20 border border-dashed border-zinc-800 rounded-[32px] max-w-7xl mx-auto">
          <p className="text-zinc-500 text-lg">No positions match your search criteria.</p>
        </div>
      )}
    </>
  );
}