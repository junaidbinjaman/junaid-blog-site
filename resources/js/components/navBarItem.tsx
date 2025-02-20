import {Link, usePage} from '@inertiajs/react';
import {IconType} from "react-icons";

type Props = {
    label: string;
    href: string;
    Icon: IconType;
}

export default function NavBarItem({label, Icon, href}: Props) {
    const {url} = usePage();
    return <li className={"group/menu-item " + (url === href ? "active" : "")}>
        <Link
            href={href}
            className="group inline-flex items-center gap-2 rounded-lg px-3 py-2 text-center text-base font-medium text-muted transition hover:bg-light hover:text-dark group-[.active]/menu-item:bg-light group-[.active]/menu-item:text-dark dark:hover:bg-dark-2 dark:hover:text-white dark:group-[.active]/menu-item:bg-dark-2 dark:group-[.active]/menu-item:text-white">
            <Icon
                className="h-6 w-6 text-[#8991A7] transition group-hover:text-dark group-[.active]/menu-item:text-dark dark:group-hover:text-white dark:group-[.active]/menu-item:text-white"/>
            <span>{label}</span>
        </Link>
    </li>
}
