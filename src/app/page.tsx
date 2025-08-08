export default function Home() {
  return (
    <div className="bg-navy min-h-screen font-sans flex items-center justify-center p-8">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        {/* Main heading */}
        <h1 className="text-6xl md:text-7xl font-bold text-beige mb-4">
          Gayan Dissanayake
        </h1>
        
        {/* Subtitle */}
        <h2 className="text-2xl md:text-3xl font-medium text-beige-accent mb-8">
          Full Stack Developer
        </h2>
        
        {/* Description */}
        <p className="text-lg md:text-xl text-beige leading-relaxed max-w-2xl mx-auto mb-12">
          I&apos;m a passionate developer creating modern web experiences with React, Next.js, and TypeScript. 
          I love building user-friendly applications that solve real-world problems.
        </p>
        
        {/* Code snippet showcase */}
        <div className="bg-navy-light p-6 rounded-lg shadow-2xl max-w-2xl mx-auto mb-12">
          <code className="bg-code text-green-luminous font-mono text-sm md:text-base block p-4 rounded">
            <div className="text-green-300">{`// Welcome to my portfolio`}</div>
            <div>const developer = &#123;</div>
            <div>&nbsp;&nbsp;name: &apos;Gayan Dissanayake&apos;,</div>
            <div>&nbsp;&nbsp;role: &apos;Full Stack Developer&apos;,</div>
            <div>&nbsp;&nbsp;skills: [&apos;React&apos;, &apos;Next.js&apos;, &apos;TypeScript&apos;],</div>
            <div>&nbsp;&nbsp;passion: &apos;Building amazing user experiences&apos;</div>
            <div>&#125;;</div>
          </code>
        </div>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="btn-primary">
            View My Work
          </button>
          <button className="border-2 border-beige-accent text-beige-accent px-6 py-3 rounded-lg font-medium hover:bg-beige-accent hover:text-navy transition-all duration-200">
            Get In Touch
          </button>
        </div>
        
        {/* Quick navigation to font preview */}
        <div className="mt-16 pt-8 border-t border-gray-700">
          <a 
            href="/font-preview" 
            className="text-beige-accent hover:text-beige transition-colors text-sm"
          >
            → View Theme Preview
          </a>
        </div>
      </div>
    </div>
  );
}
