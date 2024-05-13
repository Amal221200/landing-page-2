import { AccordionDemo } from "@/components/Accordion"


const FAQSection = () => {
  return (
    <section className="h-screen bg-hero w-full flex justify-center items-center px-4 bg-no-repeat bg-center bg-cover">
      <div className="space-y-8">
        <div className="text-center space-y-3">
          <h2 className="heading">Need any help?</h2>
          <p className="text-zinc-500 text-lg">
            {"Don't"} worry, we got you. Here are some answers for your questions.
          </p>
        </div>

        <div className="max-w-xl mx-auto">
          <AccordionDemo />
        </div>
      </div>
    </section>
  )
}

export default FAQSection