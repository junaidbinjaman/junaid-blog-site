type Props = {
    section_title: string;
    experienceData: experienceDataTypes[]
}

type experienceDataTypes = {
    years: string;
    company: string;
    logo: string;
    role: string
}

export default function WorkExperiment({section_title, experienceData}: Props) {
    return (
        <>
            <div className="grid grid-cols-1 gap-4 lg:gap-6">
                {/* Work Experience */}
                <div className="group rounded-2xl bg-white px-6 pt-0 shadow dark:bg-black dark:shadow-dark">
                    <h3 className="relative z-10 bg-white pb-2 pt-6 text-2xl font-semibold dark:bg-black dark:text-light">
                        {section_title}
                    </h3>

                    <div
                        className="max-h-[200px] space-y-4 overflow-hidden pb-6 pt-4 [&::-webkit-scrollbar-thumb]:bg-gray-400 dark:[&::-webkit-scrollbar-thumb]:bg-slate-500 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar]:w-0">
                        <div className="animate-scrollY space-y-4 group-hover:[animation-play-state:paused]">
                            {
                                experienceData.map((element) => (
                                    <div className="flex flex-col gap-1 md:flex-row md:gap-10">
                                        <p className="mt-1 text-sm font-medium text-muted dark:text-light/70">
                                            {element.years}
                                        </p>
                                        <div className="flex items-center gap-3">
                                            <div
                                                className="grid h-8 w-8 shrink-0 place-content-center rounded-lg bg-light dark:bg-dark-2">
                                                <img src={element.logo} alt={element.company} className="h-5 w-5"/>
                                            </div>
                                            <div className="">
                                                <h6 className="text-base font-semibold text-dark dark:text-light/70">
                                                    {element.company}
                                                </h6>
                                                <p className="text-sm text-muted">
                                                    {element.role}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
