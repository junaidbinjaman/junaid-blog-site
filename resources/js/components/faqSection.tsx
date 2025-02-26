import * as React from "react";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

type Props = {
    accordingData: {
        title: string;
        description: string;
        item: number;
    }[]
}

export default function FaqSection({accordingData}: Props) {
    return (
        <>
            <Accordion type="multiple">
                {
                    accordingData.map(element => (
                        <AccordionItem
                            value={"item-" + element.item}
                            className="mb-5 rounded-lg border border-transparent bg-light transition hs-accordion-active:border-light hs-accordion-active:bg-white dark:border-transparent dark:bg-dark-2 dark:hs-accordion-active:border-dark-2 dark:hs-accordion-active:bg-black">
                            <AccordionTrigger
                                className="inline-flex w-full items-center justify-between gap-x-3 px-6 py-5 text-start text-lg font-medium text-dark transition hover:text-muted disabled:pointer-events-none disabled:opacity-50 hs-accordion-active:text-primary dark:text-light/70 dark:hover:text-light dark:focus:outline-none dark:hs-accordion-active:text-primary xl:text-2xl">
                                {element.title}
                            </AccordionTrigger>
                            <AccordionContent className="w-full overflow-hidden transition duration-300">
                                <div className="px-6 pb-5">
                                    <p className="text-base xl:text-lg">
                                        {element.description}
                                    </p>
                                </div>
                            </AccordionContent>
                        </AccordionItem>
                    ))
                }
            </Accordion>
        </>
    )
}
