const CallToAction = () => {
  return (
    <section id="contact" className="bg-nsigma-darkAlt md:py-32">
      <div className="section-container">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="heading-2 text-center mb-8">
            Ready to Orchestrate Your Data-Driven Future?
          </h2>

          <p className="info-text lg:px-6 mb-12 text-nsigma-textAlt">
            Stop letting data complexity hinder your performance. Discover how
            the NSigma MOSAIC Managed Analytics Service can transform your
            operations, unlock new opportunities, and provide a sustainable
            competitive edge.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#" className="btn-primary cta-button">
              Schedule a Personalized Demo
            </a>
            <a href="#" className="btn-secondary cta-button">
              Request a Consultation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
