import Accordion from "../components/Accordion";

const AccordionPage = () => {
  return (
    <div>
      <div>
        <div>
          <h1 className=" p-4 my-5 text-2xl font-semibold text-center">
            Accordion Components
          </h1>
          <div className="max-w-5xl mx-auto p-2 bg-clr-medium">
            <h3 className="py-3 px-5 text-xl font-semibold ">FAQ ?</h3>
            <Accordion
              heading="Why An FAQ Resource ?"
              desc="Firstly, FAQ pages can bring new visitors to your website via organic search and drive them quickly to related pages most typically deeper blog pages and service pages closely related to the questions being resolved."
            />
            <Accordion
              heading="Why FAQ Pages Are A Priority ?"
              desc="FAQ pages continue to be a priority area for SEO and digital marketing professionals."
            />
            <Accordion heading="Twitter">
              <p>
                Twitter FAQ help center made a list as it factored in some
                fascinating personalization, easy-to-use search functionality,
                and has a positive user experience
              </p>
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccordionPage;