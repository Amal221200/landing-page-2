"use client";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { accordionData } from "@/lib/data";

export function AccordionDemo() {
    return (
        <Accordion type="single" collapsible className="mx-auto w-[300px] space-y-2 text-left sm:w-[400px] lg:w-[600px]">
            {
                accordionData.map((data, i) => (
                    <AccordionItem key={i} value={`item-${i + 1}`} className="space-y-1">
                        <AccordionTrigger className="rounded bg-white px-3 text-left text-sm hover:no-underline sm:text-base">{data.title}</AccordionTrigger>
                        <AccordionContent className="rounded bg-white px-3 py-3 text-xs sm:text-sm">
                            {data.content}
                        </AccordionContent>
                    </AccordionItem>
                ))
            }
        </Accordion>
    )
}
