import { Search, Home, Users, Video, ShoppingBag, Bell, Menu, Grid3x3, MessageCircle, Image, Smile, Mic, Camera, MapPin, TrendingUp, Cloud, ThumbsUp, Share2, MoreHorizontal, X, Zap, Palette, Smartphone, Mail, Phone, Github } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Card } from '@/components/ui/card'
import Link from 'next/link'

export default function HybridPage() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Bing-style Hero Background */}
      <div className="relative h-[500px] overflow-hidden bg-gradient-to-br from-orange-400 via-orange-500 to-red-500">
        <div className="absolute inset-0 bg-gradient-to-b from-orange-500/60 via-orange-600/50 to-gray-100" />

        {/* Facebook-style Top Navigation */}
        <nav className="relative z-10 bg-white/95 backdrop-blur-md shadow-sm">
          <div className="max-w-[1680px] mx-auto px-4 h-14 flex items-center justify-between gap-2">
            {/* Left */}
            <div className="flex items-center gap-2 flex-1">
              <Link href="/" className="flex items-center gap-2">
                <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">M</span>
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">Mystic</span>
              </Link>
              <div className="relative flex-1 max-w-60 ml-4">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
                <Input
                  placeholder="Search"
                  className="pl-10 bg-gray-100 border-0 rounded-full h-10"
                />
              </div>
            </div>

            {/* Center */}
            <div className="flex items-center gap-1">
              <Button variant="ghost" size="icon" className="relative h-12 w-20 rounded-lg hover:bg-gray-100">
                <Home className="h-6 w-6 text-orange-500" />
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-orange-500" />
              </Button>
              <Link href="/blog">
                <Button variant="ghost" size="icon" className="h-12 w-20 rounded-lg hover:bg-gray-100">
                  <Palette className="h-6 w-6 text-gray-600" />
                </Button>
              </Link>
              <Button variant="ghost" size="icon" className="h-12 w-20 rounded-lg hover:bg-gray-100">
                <Mail className="h-6 w-6 text-gray-600" />
              </Button>
              <Button variant="ghost" size="icon" className="h-12 w-20 rounded-lg hover:bg-gray-100">
                <ShoppingBag className="h-6 w-6 text-gray-600" />
              </Button>
            </div>

            {/* Right */}
            <div className="flex items-center gap-2 flex-1 justify-end">
              <Button variant="ghost" size="icon" className="rounded-full bg-gray-100 hover:bg-gray-200 h-10 w-10">
                <Grid3x3 className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full bg-gray-100 hover:bg-gray-200 h-10 w-10">
                <MessageCircle className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="relative rounded-full bg-gray-100 hover:bg-gray-200 h-10 w-10">
                <Bell className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 bg-orange-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-semibold">5</span>
              </Button>
              <Avatar className="h-10 w-10 cursor-pointer">
                <AvatarFallback className="bg-gradient-to-br from-orange-400 to-red-500 text-white">M</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </nav>

        {/* Bing-style Search Bar Hero + Mystic Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-[calc(500px-56px)] px-4">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 text-center">
            Mystic Orange Theme
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8">A clean futuristic website design</p>
          <div className="w-full max-w-2xl mb-6">
            <div className="bg-white rounded-full shadow-2xl p-2 flex items-center gap-2">
              <Search className="h-6 w-6 text-gray-500 ml-4" />
              <Input
                placeholder="Search Mystic, discover features, connect with community..."
                className="flex-1 border-0 bg-transparent text-lg focus-visible:ring-0 focus-visible:ring-offset-0"
              />
              <Button variant="ghost" size="icon" className="rounded-full hover:bg-gray-100">
                <Mic className="h-5 w-5 text-orange-600" />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full hover:bg-gray-100 mr-1">
                <Camera className="h-5 w-5 text-orange-600" />
              </Button>
            </div>
          </div>
          <Button className="bg-white text-orange-600 hover:bg-white/90 font-semibold px-8 py-6 text-lg rounded-full">
            Explore
          </Button>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-[1680px] mx-auto px-4 -mt-20 relative z-20">
        <div className="flex gap-4">
          {/* Left Sidebar - Facebook Style */}
          <aside className="w-72 sticky top-4 h-fit hidden lg:block">
            <Card className="p-2 shadow-md">
              <Button variant="ghost" className="w-full justify-start gap-3 h-12 rounded-lg hover:bg-gray-100">
                <Avatar className="h-9 w-9">
                  <AvatarFallback className="bg-gradient-to-br from-orange-400 to-red-500 text-white">M</AvatarFallback>
                </Avatar>
                <span className="font-semibold">Mystic Design</span>
              </Button>
              <Button variant="ghost" className="w-full justify-start gap-3 h-11 rounded-lg hover:bg-gray-100">
                <div className="h-9 w-9 rounded-full bg-orange-100 flex items-center justify-center">
                  <Home className="h-5 w-5 text-orange-600" />
                </div>
                <span className="font-medium">Home</span>
              </Button>
              <Button variant="ghost" className="w-full justify-start gap-3 h-11 rounded-lg hover:bg-gray-100">
                <div className="h-9 w-9 rounded-full bg-blue-100 flex items-center justify-center">
                  <Users className="h-5 w-5 text-blue-600" />
                </div>
                <span className="font-medium">About</span>
              </Button>
              <Link href="/blog">
                <Button variant="ghost" className="w-full justify-start gap-3 h-11 rounded-lg hover:bg-gray-100">
                  <div className="h-9 w-9 rounded-full bg-purple-100 flex items-center justify-center">
                    <Palette className="h-5 w-5 text-purple-600" />
                  </div>
                  <span className="font-medium">Blog</span>
                </Button>
              </Link>
              <a href="#contact">
                <Button variant="ghost" className="w-full justify-start gap-3 h-11 rounded-lg hover:bg-gray-100">
                  <div className="h-9 w-9 rounded-full bg-green-100 flex items-center justify-center">
                    <Mail className="h-5 w-5 text-green-600" />
                  </div>
                  <span className="font-medium">Contact</span>
                </Button>
              </a>
            </Card>
          </aside>

          {/* Center Feed */}
          <main className="flex-1 max-w-2xl space-y-4">
            {/* About This Site */}
            <Card className="p-6 shadow-md">
              <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">About This Site</h2>
              <p className="text-gray-700 text-lg">The orange-themed version of your Mystic website. Fully responsive and ready for GitHub Pages.</p>
            </Card>

            {/* Features - Bing News Style */}
            <Card className="p-6 shadow-md">
              <div className="flex items-center gap-2 mb-6">
                <Zap className="h-6 w-6 text-orange-600" />
                <h2 className="text-3xl font-bold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">Our Features</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="relative rounded-xl overflow-hidden cursor-pointer group h-48 bg-gradient-to-br from-orange-400 to-red-500">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent group-hover:from-black/90 transition" />
                  <div className="absolute top-4 left-4">
                    <Zap className="h-12 w-12 text-white" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-white font-bold text-xl mb-2">Fast Performance</h3>
                    <p className="text-white/90 text-sm">Your website loads smoothly and instantly on all devices.</p>
                  </div>
                </div>

                <div className="relative rounded-xl overflow-hidden cursor-pointer group h-48 bg-gradient-to-br from-blue-400 to-purple-500">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent group-hover:from-black/90 transition" />
                  <div className="absolute top-4 left-4">
                    <Palette className="h-12 w-12 text-white" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-white font-bold text-xl mb-2">Modern Design</h3>
                    <p className="text-white/90 text-sm">A clean, futuristic orange theme that stands out professionally.</p>
                  </div>
                </div>

                <div className="relative rounded-xl overflow-hidden cursor-pointer group h-48 md:col-span-2 bg-gradient-to-br from-green-400 to-teal-500">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent group-hover:from-black/90 transition" />
                  <div className="absolute top-4 left-4">
                    <Smartphone className="h-12 w-12 text-white" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-white font-bold text-xl mb-2">Fully Responsive</h3>
                    <p className="text-white/90 text-sm">Optimized for mobile, tablet, and desktop with fluid layout.</p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Contact Form - Social Post Style */}
            <Card id="contact" className="shadow-md">
              <div className="p-6 bg-gradient-to-br from-orange-50 to-red-50">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-12 w-12 rounded-full bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">Contact Us</h2>
                    <p className="text-gray-600">Have questions or need help? Send us a message.</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <Input
                    placeholder="Your Name"
                    className="bg-white border-orange-200 focus-visible:ring-orange-500"
                  />
                  <Input
                    type="email"
                    placeholder="Your Email"
                    className="bg-white border-orange-200 focus-visible:ring-orange-500"
                  />
                  <textarea
                    placeholder="Your Message"
                    rows={4}
                    className="w-full p-3 rounded-lg border border-orange-200 focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                  <Button className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-semibold py-6 text-lg">
                    Send Message
                  </Button>
                </div>
              </div>
            </Card>

            {/* Social Links */}
            <Card className="p-6 shadow-md">
              <h3 className="font-bold text-lg mb-4 text-center">Connect With Us</h3>
              <div className="flex justify-center gap-3">
                <Button variant="outline" size="icon" className="rounded-full w-12 h-12 hover:bg-orange-50 hover:border-orange-500">
                  <span className="text-xl">📸</span>
                </Button>
                <Button variant="outline" size="icon" className="rounded-full w-12 h-12 hover:bg-orange-50 hover:border-orange-500">
                  <span className="text-xl">🐦</span>
                </Button>
                <Button variant="outline" size="icon" className="rounded-full w-12 h-12 hover:bg-orange-50 hover:border-orange-500">
                  <span className="text-xl">▶️</span>
                </Button>
                <Button variant="outline" size="icon" className="rounded-full w-12 h-12 hover:bg-orange-50 hover:border-orange-500">
                  <Github className="h-5 w-5" />
                </Button>
                <Button variant="outline" size="icon" className="rounded-full w-12 h-12 hover:bg-orange-50 hover:border-orange-500">
                  <Mail className="h-5 w-5" />
                </Button>
              </div>
            </Card>
          </main>

          {/* Right Sidebar */}
          <aside className="w-80 sticky top-4 h-fit space-y-4 hidden xl:block">
            {/* Quick Stats */}
            <Card className="p-4 shadow-md bg-gradient-to-br from-orange-50 to-red-50">
              <h3 className="font-semibold text-gray-700 mb-3">Quick Stats</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                  <div className="flex items-center gap-2">
                    <Zap className="h-5 w-5 text-orange-500" />
                    <span className="text-sm font-medium">Performance</span>
                  </div>
                  <span className="text-sm font-bold text-orange-600">98%</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                  <div className="flex items-center gap-2">
                    <Users className="h-5 w-5 text-blue-500" />
                    <span className="text-sm font-medium">Visitors</span>
                  </div>
                  <span className="text-sm font-bold text-blue-600">2.5K</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                  <div className="flex items-center gap-2">
                    <Smartphone className="h-5 w-5 text-green-500" />
                    <span className="text-sm font-medium">Mobile</span>
                  </div>
                  <span className="text-sm font-bold text-green-600">100%</span>
                </div>
              </div>
            </Card>

            {/* Latest Updates */}
            <Card className="p-4 shadow-md">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-semibold text-gray-700">Latest Updates</h3>
                <TrendingUp className="h-4 w-4 text-orange-500" />
              </div>
              <div className="space-y-3">
                {[
                  { title: "New orange theme released", time: "2h ago" },
                  { title: "Mobile optimization update", time: "5h ago" },
                  { title: "Contact form improved", time: "1d ago" }
                ].map((update, i) => (
                  <div key={i} className="p-2 rounded-lg hover:bg-gray-50 cursor-pointer">
                    <p className="font-medium text-sm">{update.title}</p>
                    <p className="text-xs text-gray-600">{update.time}</p>
                  </div>
                ))}
              </div>
            </Card>
          </aside>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-12 bg-gradient-to-r from-orange-500 to-red-500 text-white py-6">
        <div className="max-w-[1680px] mx-auto px-4 text-center">
          <p className="text-sm">© 2025 Mystic Design</p>
        </div>
      </footer>
    </div>
  )
}
