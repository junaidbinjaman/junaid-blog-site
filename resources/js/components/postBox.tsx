import * as React from "react";

type Props = {
    title: string;
    thumbnail: string;
    href: string; // single post page link=
    category: string;
    readTime: string;
    publishDate: string;
    categoryHref: string
}

export default function PostBox({title, thumbnail, href, category, readTime, publishDate, categoryHref}: Props) {
    return (
        <div className="swiper-slide">
            <div className="">
                <div className="relative">
                    <a href={href}
                       className="group block aspect-6/4 overflow-hidden rounded-lg">
                        <img src={thumbnail} alt=""
                             className="h-full w-full rounded-lg object-cover transition duration-700 group-hover:scale-105"/>
                    </a>

                    {/* Tags */}
                    <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
                        <a href={categoryHref}
                           className="inline-flex items-center justify-center gap-2 rounded bg-white px-2 py-1 text-center text-xs leading-none text-primary shadow transition hover:bg-primary hover:text-white">
                            {category}
                        </a>
                    </div>
                </div>
                <div className="mt-6">
                    <h2 className="text-xl font-medium xl:text-2xl">
                        <a href={href}
                           className="inline-block text-dark transition hover:text-primary dark:text-light/70 dark:hover:text-primary">
                            {title}
                        </a>
                    </h2>

                    <ul className="mt-4 flex flex-wrap items-center gap-2">
                        <li className="relative text-sm text-muted/50 before:mr-1 before:content-['\2022'] dark:text-muted">
                            {readTime}
                        </li>
                        <li className="relative text-sm text-muted/50 before:mr-1 before:content-['\2022'] dark:text-muted">
                            {publishDate}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
