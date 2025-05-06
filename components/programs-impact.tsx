export default function ProgramsImpact() {
  const testimonials = [
    {
      quote:
        "The mentorship program helped me discover my passion for engineering. My mentor showed me that I can succeed in a field where people who look like me are underrepresented.",
      name: "Jasmine, 17",
      program: "Mentorship Program",
    },
    {
      quote:
        "Before joining the leadership workshops, I was terrified of public speaking. Now, I'm the president of my school's debate club. SBM Inc. gave me the confidence I needed.",
      name: "Tiana, 16",
      program: "Leadership Workshop Series",
    },
    {
      quote:
        "The academic support I received helped me raise my GPA from 2.5 to 3.8. I'm now applying to colleges I never thought were possible for me.",
      name: "Zoe, 18",
      program: "Academic Support Program",
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-deep-blue">
            Our <span className="shimmer-text">Impact</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            We measure our success by the positive changes we see in the lives of the girls we serve. Here are some of
            the ways our programs are making a difference.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-xl p-8 shadow-lg text-center">
            <div className="text-5xl font-bold text-burgundy mb-4">94%</div>
            <p className="text-xl text-gray-700">
              of participants report increased confidence after completing our programs
            </p>
          </div>
          <div className="bg-white rounded-xl p-8 shadow-lg text-center">
            <div className="text-5xl font-bold text-burgundy mb-4">85%</div>
            <p className="text-xl text-gray-700">
              improvement in academic performance among participants in our academic support program
            </p>
          </div>
          <div className="bg-white rounded-xl p-8 shadow-lg text-center">
            <div className="text-5xl font-bold text-burgundy mb-4">100%</div>
            <p className="text-xl text-gray-700">
              of our graduating seniors have been accepted to college or vocational training programs
            </p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold mb-8 text-center text-deep-blue">In Their Own Words</h3>
          <div className="space-y-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg">
                <div className="flex items-start">
                  <div className="mr-4">
                    <svg
                      className="w-12 h-12 text-gold"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-700 italic mb-4">{testimonial.quote}</p>
                    <div className="flex items-center">
                      <div>
                        <p className="font-semibold text-deep-blue">{testimonial.name}</p>
                        <p className="text-sm text-burgundy">{testimonial.program}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
