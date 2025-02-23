import { FaExternalLinkAlt } from "react-icons/fa";

export type ProjectBoxProps = {
    thumbnail: string;
    link?: string;
    label: string;
}

export default function ProjectBox({thumbnail, link, label}: ProjectBoxProps) {
    return (
        <div
            className="group relative overflow-hidden rounded-lg bg-light p-4 pb-0 dark:bg-dark-2 md:p-6 md:pb-0">
            <div className="relative aspect-6/4 overflow-hidden rounded-t-lg">
                <img src={thumbnail} alt=""
                     className="h-full w-full rounded-t-lg object-cover object-top transition"/>

                <a href={link} data-gall="project-gallry-1" target="_blank"
                   className="project-gallery-link absolute left-1/2 top-1/2 grid h-10 w-10 -translate-x-1/2 -translate-y-1/2 place-content-center rounded-full bg-white text-primary shadow-lg transition lg:invisible lg:-translate-y-[40%] lg:opacity-0 lg:group-hover:visible lg:group-hover:-translate-y-1/2 lg:group-hover:opacity-100">
                    <FaExternalLinkAlt size={20} />
                </a>
            </div>

            <div className="absolute inset-x-0 bottom-0 flex flex-wrap gap-2 bg-gradient-to-t from-black/20 p-4">
                <span className="rounded bg-white px-2 py-1 text-xs font-medium text-primary shadow">
                    {label}
                </span>
            </div>
        </div>
    )
}
