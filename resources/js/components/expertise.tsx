type Props = {
    section_title: string;
    expertiseData: expertiseDataTypes[]
}

type expertiseDataTypes = {
    logo: string;
    title: string;
}

export default function Expertise({section_title, expertiseData}: Props) {
    return (
        <div className="rounded-2xl bg-white p-6 shadow dark:bg-black dark:shadow-dark">
            <h3 className="text-2xl font-semibold dark:text-light">{section_title}</h3>

            <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-3">
                {
                    expertiseData.map(element => (
                        <div className="text-center">
                            <div className="grid place-content-center rounded-lg bg-light p-3 dark:bg-dark-2">
                                <img src={element.logo} alt="" className="h-8 w-8 rounded-md"/>
                            </div>
                            <p className="mt-1 text-base font-medium text-dark dark:text-light/70">
                                {element.title}
                            </p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
