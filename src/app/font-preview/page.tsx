import { Montserrat, Source_Sans_3, JetBrains_Mono } from "next/font/google";
import Link from "next/link";

// Font configurations - your preferred fonts
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-montserrat",
});
const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-source-sans",
});
const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
});

const sampleText = {
  heading: "Gayan Dissanayake",
  subheading: "Full Stack Developer",
  body: "I'm a passionate developer creating modern web experiences with React, Next.js, and TypeScript. I love building user-friendly applications that solve real-world problems.",
  code: "const developer = { name: 'Gayan', skills: ['React', 'Next.js'] };",
  button: "View My Work",
};

// Color themes you requested
const themes = [
  {
    name: "Navy Blue Classic",
    bg: "bg-slate-900", // Very dark navy
    text: "text-white",
    accent: "text-blue-300",
    code: "bg-slate-800 text-green-300",
    button: "bg-blue-600 hover:bg-blue-500",
  },
  {
    name: "Navy + Luminous Green",
    bg: "bg-slate-900",
    text: "text-white",
    accent: "text-green-400", // Luminous green accents
    code: "bg-slate-800 text-green-400",
    button: "bg-green-500 hover:bg-green-400 text-slate-900",
  },
  {
    name: "Navy + Light Green",
    bg: "bg-slate-800",
    text: "text-white",
    accent: "text-emerald-300", // Light green accents
    code: "bg-slate-700 text-emerald-300",
    button: "bg-emerald-500 hover:bg-emerald-400 text-slate-900",
  },
  {
    name: "Navy + Beige",
    bg: "bg-slate-900",
    text: "text-amber-50", // Beige-ish white
    accent: "text-amber-200", // Beige accents
    code: "bg-slate-800 text-amber-300",
    button: "bg-amber-600 hover:bg-amber-500 text-slate-900",
  },
] as const;

type Theme = (typeof themes)[number];

const FontCard = ({
  font,
  fontClass,
  theme,
  children,
}: {
  font: string;
  fontClass: string;
  theme: Theme;
  children: React.ReactNode;
}) => (
  <div className={`${theme.bg} ${theme.text} p-8 rounded-xl shadow-2xl`}>
    <h3 className="text-xl font-bold mb-6 text-center border-b border-gray-600 pb-3">
      {font} + {theme.name}
    </h3>
    <div className={fontClass}>{children}</div>
  </div>
);

export default function FontPreview() {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center text-gray-900">
          Font & Color Theme Preview
        </h1>
        <p className="text-center text-gray-600 mb-12 text-lg">
          Your preferred fonts: Montserrat, Source Sans 3, JetBrains Mono
        </p>

        {/* Montserrat with all themes */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-gray-800">
            Montserrat (Elegant & Modern)
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {themes.map((theme, index) => (
              <FontCard
                key={index}
                font="Montserrat"
                fontClass={montserrat.className}
                theme={theme}
              >
                <div className="space-y-4">
                  <h1 className="text-3xl font-bold">{sampleText.heading}</h1>
                  <h2 className={`text-xl font-medium ${theme.accent}`}>
                    {sampleText.subheading}
                  </h2>
                  <p className="text-base leading-relaxed">{sampleText.body}</p>
                  <code
                    className={`${theme.code} p-3 rounded text-sm block font-mono`}
                  >
                    {sampleText.code}
                  </code>
                  <button
                    className={`${theme.button} px-6 py-3 rounded-lg font-medium transition-colors`}
                  >
                    {sampleText.button}
                  </button>
                </div>
              </FontCard>
            ))}
          </div>
        </section>

        {/* Source Sans 3 with all themes */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-gray-800">
            Source Sans 3 (Highly Readable)
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {themes.map((theme, index) => (
              <FontCard
                key={index}
                font="Source Sans 3"
                fontClass={sourceSans.className}
                theme={theme}
              >
                <div className="space-y-4">
                  <h1 className="text-3xl font-bold">{sampleText.heading}</h1>
                  <h2 className={`text-xl font-medium ${theme.accent}`}>
                    {sampleText.subheading}
                  </h2>
                  <p className="text-base leading-relaxed">{sampleText.body}</p>
                  <code
                    className={`${theme.code} p-3 rounded text-sm block font-mono`}
                  >
                    {sampleText.code}
                  </code>
                  <button
                    className={`${theme.button} px-6 py-3 rounded-lg font-medium transition-colors`}
                  >
                    {sampleText.button}
                  </button>
                </div>
              </FontCard>
            ))}
          </div>
        </section>

        {/* JetBrains Mono showcase */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-gray-800">
            JetBrains Mono (Code Snippets)
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {themes.map((theme, index) => (
              <div
                key={index}
                className={`${theme.bg} ${theme.text} p-8 rounded-xl shadow-2xl`}
              >
                <h3 className="text-xl font-bold mb-6 text-center border-b border-gray-600 pb-3">
                  Code Preview - {theme.name}
                </h3>
                <div className={`${jetbrains.className} space-y-4`}>
                  <div className={`${theme.code} p-4 rounded`}>
                    <div className="text-sm space-y-2">
                      <div>{`// Portfolio Configuration`}</div>
                      <div>const portfolio = &#123;</div>
                      <div>
                        &nbsp;&nbsp;name: &apos;Gayan Dissanayake&apos;,
                      </div>
                      <div>
                        &nbsp;&nbsp;role: &apos;Full Stack Developer&apos;,
                      </div>
                      <div>
                        &nbsp;&nbsp;skills: [&apos;React&apos;,
                        &apos;Next.js&apos;, &apos;TypeScript&apos;]
                      </div>
                      <div>&#125;;</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Quick selection guide */}
        <section className="mb-12 bg-white p-8 rounded-xl shadow-lg">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">
            🎨 Theme Recommendations
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-4 border-l-4 border-blue-500">
              <h3 className="font-bold text-blue-700">Professional</h3>
              <p className="text-sm text-gray-600">
                Navy Blue Classic + Source Sans 3
              </p>
            </div>
            <div className="p-4 border-l-4 border-green-500">
              <h3 className="font-bold text-green-700">Modern & Vibrant</h3>
              <p className="text-sm text-gray-600">
                Navy + Luminous Green + Montserrat
              </p>
            </div>
            <div className="p-4 border-l-4 border-amber-500">
              <h3 className="font-bold text-amber-700">Warm & Elegant</h3>
              <p className="text-sm text-gray-600">Navy + Beige + Montserrat</p>
            </div>
          </div>
        </section>

        <div className="text-center">
          <Link
            href="/"
            className="bg-gray-800 text-white px-8 py-4 rounded-lg hover:bg-gray-700 transition-colors text-lg"
          >
            ← Back to Portfolio
          </Link>
        </div>
      </div>
    </div>
  );
}
