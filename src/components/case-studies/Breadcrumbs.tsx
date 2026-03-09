"use client";

import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

interface BreadcrumbsProps {
    currentPage?: string;
}

export default function Breadcrumbs({ currentPage }: BreadcrumbsProps) {
    return (
        <nav className="flex items-center space-x-2 text-sm text-purple-200/50 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-purple-300 transition-colors flex items-center">
                <Home className="w-4 h-4 mr-1" />
                Home
            </Link>

            <ChevronRight className="w-4 h-4" />

            <Link href="/case-studies" className={`hover:text-purple-300 transition-colors ${!currentPage ? "text-purple-300 font-semibold" : ""}`}>
                Case Studies
            </Link>

            {currentPage && (
                <>
                    <ChevronRight className="w-4 h-4" />
                    <span className="text-purple-300 font-semibold truncate max-w-[200px]">
                        {currentPage}
                    </span>
                </>
            )}
        </nav>
    );
}
