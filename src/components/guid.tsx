

const GuidSection = () => {
  return (
    <section className="bg-slate-50 py-20 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-slate-800 sm:text-4xl font-heading">
              Simple. Fast. Professional.
            </h2>
            <p className="mt-4 text-lg text-slate-600 font-sans">
              Get professional results in three simple steps
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                step: "01",
                title: "Upload Your Image",
                description:
                  "Drag and drop or select your image. We support all major formats including JPG, PNG, and WebP.",
              },
              {
                step: "02",
                title: "Choose AI Tools",
                description:
                  "Select from our powerful AI tools: background removal, upscaling, or object-focused cropping.",
              },
              {
                step: "03",
                title: "Download Results",
                description:
                  "Get your professionally edited image in seconds. High-quality results ready for any use.",
              },
            ].map((item, index) => (
              <div key={index} className="relative">
                <div className="mb-4 flex items-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-lg font-bold text-white shadow-lg font-sans">
                    {item.step}
                  </div>
                  {index < 2 && (
                    <div className="ml-4 hidden h-0.5 w-full bg-slate-300 md:block" />
                  )}
                </div>
                <h3 className="mb-2 text-xl font-semibold text-slate-800 font-heading">
                  {item.title}
                </h3>
                <p className="text-slate-600 font-sans">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
  )
}

export default GuidSection