import React from 'react'
export default function App(){
  return (
    <div className="min-h-screen bg-black text-white">
      <header className="p-6 flex justify-between items-center max-w-6xl mx-auto">
        <div className="text-2xl font-extrabold text-orange-400">MYSTIC</div>
        <nav className="space-x-4 opacity-90">
          <a>Home</a><a>Blog</a><a>Gallery</a><a>About</a>
        </nav>
      </header>
      <main className="flex items-center justify-center" style={{minHeight: '72vh', backgroundImage: "url('/assets/hero_bg_orange.jpg')", backgroundSize:'cover'}}>
        <div className="backdrop-blur-sm bg-black/40 p-10 rounded-2xl text-center max-w-3xl">
          <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">Orange Cyberpunk Studio</h1>
          <p className="mt-4 text-orange-200">Neon grids, molten glows, and glossy panels.</p>
        </div>
      </main>
      <section className="max-w-6xl mx-auto p-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 rounded-xl border border-orange-600">Neon Grid</div>
        <div className="p-6 rounded-xl border border-orange-600">Holographic Panels</div>
        <div className="p-6 rounded-xl border border-orange-600">Animations</div>
      </section>
      <footer className="text-center p-6 opacity-80">© 2025 Mystic</footer>
    </div>
  )
}
