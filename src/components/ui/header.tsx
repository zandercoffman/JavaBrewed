"use client"

import Link from 'next/link'
import { Separator } from "@/components/ui/separator"
import React from 'react';
import { useRouter } from 'next/navigation';
import { usePathname, useSearchParams } from 'next/navigation'

export default function Header() {

  const [isLessonPage, setIsLessonPage] = React.useState(false);
  const router = useRouter();
  const pathname = usePathname();

  React.useEffect(() => {
    const handleRouteChange = (url: string) => {
      setIsLessonPage(url.includes('lessons/'));
    };

    handleRouteChange(pathname);
  }, [pathname]);

    return <>
        <div className={`${isLessonPage ? 'hidden' : ''} grid align-center m-auto top-0 lg:max-w-5xl lg:grid-cols-5 mb-6 mt-6 header`}>
          <Link
            href="/"
            className="group text-center rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 "
            rel="noopener noreferrer"
          >
            <h3 className="mb-3 text-2xl font-semibold">
              JavaBrewed
            </h3>
          </Link>
          <Link
            className="group text-center rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 "
            rel="noopener noreferrer"
            href="/dashboard"
          >
            <h3 className="mb-3 text-1x1">
                Dashboard{" "}
              </h3>
          </Link>

          <Link
            href="/lessons"
            className="group text-center rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 "
            rel="noopener noreferrer"
          >
            <h3 className="mb-3 text-1x1 ">
            Lessons{" "}
            </h3>
          </Link>

          <a
            href="/practice"
            className="group text-center rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 "
            target="_blank"
            rel="noopener noreferrer"
          >
            <h3 className="mb-3 text-1x1 ">
              Practice{" "}
            </h3>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            className="group text-center rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h3 className="mb-3 text-1x1">
              Tests{" "}
            </h3>
          </a>
        </div>
        <Separator />

    </>
}