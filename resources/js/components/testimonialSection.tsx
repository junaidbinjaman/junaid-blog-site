import {Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious} from "@/components/ui/carousel";
import TestimonialBox from "@/components/testimonialBox";
import * as React from "react";

export default function TestimonialSection() {
    return (
        <div className="mt-10 lg:mt-20!">
            <Carousel>
                <div className="flex flex-wrap items-center justify-between gap-6">
                    <h3 className="text-2xl font-medium text-dark dark:text-light lg:text-3xl">
                        Trusted By 80+ Clients
                    </h3>

                    <div className="flex items-center gap-2">
                        <CarouselPrevious
                            className="static grid h-9 w-9 place-content-center rounded-lg border border-muted/30 text-muted transition hover:border-primary hover:text-primary"/>
                        <CarouselNext
                            className="static grid h-9 w-9 place-content-center rounded-lg border border-muted/30 text-muted transition hover:border-primary hover:text-primary"/>
                    </div>
                </div>
                <div className="mt-8">

                    <CarouselContent>
                        <CarouselItem className="basis-1/2">
                            <TestimonialBox
                                ratings={2.7}
                                name="Bayazid Hasan"
                                href="https://allnextver.expert/"
                                jobTitle="Project Manager"
                                siteName="All Next Ver"
                                review="Partnering with Junaid has been a great decision for our agency. He not only delivers high-quality websites but also helps us refine ideas into practical solutions. His consistency and proactive communication make projects stress-free."
                            />
                        </CarouselItem>
                        <CarouselItem className="basis-1/2">
                            <TestimonialBox
                                ratings={4.9}
                                name="Becca Ralph"
                                href="https://rcnmedia.expert/"
                                jobTitle="Marketing Lead"
                                siteName="RCN"
                                review="Junaid played a key role in building our digital platforms. He’s fast, reliable, and deeply understands business needs. Our team values his input just as much as his technical execution."
                            />
                        </CarouselItem>
                        <CarouselItem className="basis-1/2">
                            <TestimonialBox
                                ratings={5}
                                name="Marcus Lee"
                                href="https://loopmedia.expert/"
                                jobTitle="CEO"
                                siteName="Loop Media"
                                review="We rely on Junaid for critical web development projects. He delivers on time, communicates clearly, and always brings innovative solutions."
                            />
                        </CarouselItem>
                        <CarouselItem className="basis-1/2">
                            <TestimonialBox
                                ratings={4.8}
                                name="Hannah Green"
                                href="https://brandhouse.expert/"
                                jobTitle="Creative Director"
                                siteName="Brand House"
                                review="Junaid is not just a developer, he’s a collaborator. He understood our vision quickly and delivered a product that matched our brand perfectly."
                            />
                        </CarouselItem>
                        <CarouselItem className="basis-1/2">
                            <TestimonialBox
                                ratings={5}
                                name="David Kim"
                                href="https://visionlab.expert/"
                                jobTitle="CTO"
                                siteName="Vision Lab"
                                review="From WordPress customization to React solutions, Junaid’s skillset covers it all. His code quality and professionalism stand out every time."
                            />
                        </CarouselItem>
                        <CarouselItem className="basis-1/2">
                            <TestimonialBox
                                ratings={4.9}
                                name="Sophia Ahmed"
                                href="https://creativepulse.expert/"
                                jobTitle="Product Manager"
                                siteName="Creative Pulse"
                                review="We asked Junaid to develop a mobile app for our internal workflow, and the results were outstanding. Smooth performance, clean UI, and reliable support throughout the process. Our team efficiency has improved significantly."
                            />
                        </CarouselItem>
                    </CarouselContent>
                </div>
            </Carousel>
        </div>
    )
}
