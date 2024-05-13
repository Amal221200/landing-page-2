import { AccordionDemo } from "@/components/Accordion"


const FAQSection = () => {
  return (
    <section className="section flex w-full items-center justify-center bg-hero bg-cover bg-center bg-no-repeat">
      <div className="space-y-8">
        <div className="space-y-3 text-center">
          <h2 className="heading">Need any help?</h2>
          <p className="subtitle">
            {"Don't"} worry, we got you. Here are some answers for your questions.
          </p>
        </div>

        <div className="mx-auto max-w-xl">
          <AccordionDemo />
        </div>
      </div>
    </section>
  )
}

export default FAQSection