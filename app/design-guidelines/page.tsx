const Page = () => {
    const guidelines = [
        {
            title: "Image Resolution",
            description: "Use high-resolution images (at least 300 DPI) to ensure crisp, clear prints on clothing."
        },
        {
            title: "File Formats",
            description: "We accept PNG, JPG, JPEG, and SVG files. Transparent backgrounds are recommended for logos and graphics."
        },
        {
            title: "Color Usage",
            description: "Avoid using very light colors on light-colored fabrics or very dark colors on dark fabrics. Ensure sufficient contrast for visibility."
        },
        {
            title: "Text & Fonts",
            description: "Keep text large and legible. Avoid very thin fonts that may not print clearly."
        },
        {
            title: "Copyright & Permissions",
            description: "Ensure you own the rights to any images, logos, or content you upload. We cannot print copyrighted material without permission."
        },
        {
            title: "Design Placement",
            description: "Place designs within the printable area guidelines provided in the customizer tool to prevent cropping or misalignment."
        },
        {
            title: "File Size",
            description: "Keep file sizes reasonable (under 10MB) to ensure smooth uploading and processing."
        }
    ];

    return (
        <section className="max-w-6xl mx-auto px-4 py-16 text-neutral-700">
            <header className="text-center mb-16">
                <h1 className="text-3xl md:text-4xl font-semibold text-neutral-900 mb-4">
                    Design Guidelines
                </h1>
                <p className="text-neutral-600 max-w-2xl mx-auto">
                    Follow these guidelines to ensure your custom designs print clearly and beautifully on our products.
                </p>
            </header>

            <div className="space-y-8">
                {guidelines.map((item, index) => (
                    <div key={index} className="border rounded-lg p-6 bg-neutral-50">
                        <h2 className="text-xl font-medium text-neutral-900 mb-2">{item.title}</h2>
                        <p className="text-neutral-700">{item.description}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Page
