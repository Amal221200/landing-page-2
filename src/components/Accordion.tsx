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
                        <AccordionTrigger className="hover:no-underline bg-white px-3 rounded text-left">{data.title}</AccordionTrigger>
                        <AccordionContent className="bg-white px-3 py-3 rounded">
                            {data.content}
                        </AccordionContent>
                    </AccordionItem>
                ))
            }
        </Accordion>
    )
}
