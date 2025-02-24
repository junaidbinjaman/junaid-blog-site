import {ReactNode} from "react";

type Props = {
    icon: ReactNode;
    label: string;
}
export default function ServiceBox({icon, label}: Props) {
    return (
        <div className="rounded-2xl bg-light p-2 text-center dark:bg-dark-2 md:p-4">
            <div className="grid place-content-center rounded-lg bg-white p-6 dark:bg-black">
                {icon}
            </div>
            <p className="mt-3 text-base font-medium text-dark dark:text-light/70">
                {label}
            </p>
        </div>
    )
}
