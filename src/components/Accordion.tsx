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
        <Accordion type="single" collapsible className="w-full space-y-4">
            {
                accordionData.map((data, i) => (
                    <AccordionItem key={i} value={`item-${i + 1}`} className="space-y-1">
                        <AccordionTrigger className="rounded bg-white px-3 text-left hover:no-underline">{data.title}</AccordionTrigger>
                        <AccordionContent className="rounded bg-white px-3 py-3">
                            {data.content}
                        </AccordionContent>
                    </AccordionItem>
                ))
            }
        </Accordion>
    )
}
