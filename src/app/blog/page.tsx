import { Search, Home, Users, Video, ShoppingBag, Bell, Menu, Grid3x3, MessageCircle, Image, Smile, Mic, Camera, MapPin, TrendingUp, Cloud, ThumbsUp, Share2, MoreHorizontal, X, Zap, Palette, Smartphone, Mail, Phone, Github, Calendar, Clock, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Card } from '@/components/ui/card'
import Link from 'next/link'

export default function BlogPage() {
  const blogPosts = [
    {
      id: 1,
      title: "Embrace Your Inner Difference: Why Being Unique is Your Superpower",
      excerpt: "Stop trying to fit in. Your differences aren't flaws—they're your greatest strengths. Learn how to celebrate what makes you uniquely you.",
      date: "November 28, 2025",
      readTime: "7 min read",
      category: "Life",
      image: "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?w=800&fit=crop"
    },
    {
      id: 2,
      title: "From Pong to ChatGPT: The Evolution of AI",
      excerpt: "Journey through 50 years of gaming and AI evolution. From simple pixels to artificial intelligence that understands human language.",
      date: "November 27, 2025",
      readTime: "12 min read",
      category: "Technology",
      image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&fit=crop"
    },
    {
      id: 3,
      title: "Why Your Struggle is Actually Your Story",
      excerpt: "Every challenge you face is writing your unique narrative. Learn to reframe obstacles as opportunities for growth.",
      date: "NOVEMBER 26, 2025",
      readTime: "6 min read",
      category: "Motivation",
      image: "https://images.unsplash.com/photo-1495364141860-b0d03eccd065?w=800&fit=crop"
    },
    {
      id: 4,
      title: "The Power of Consistent Small Steps",
      excerpt: "Forget overnight success. Real transformation happens through daily 1% improvements. Here's how to build unstoppable momentum.",
      date: "NOVEMBER 25, 2025",
      readTime: "8 min read",
      category: "Motivation",
      image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&fit=crop"
    },
    {
      id: 5,
      title: "Modern Web Design Trends 2025",
      excerpt: "Explore the latest trends in web design including gradients, minimalism, and responsive layouts that make your website stand out.",
      date: "NOVEMBER 24, 2025",
      readTime: "8 min read",
      category: "Design",
      image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&fit=crop"
    },
    {
      id: 6,
      title: "Your Comfort Zone is a Beautiful Prison",
      excerpt: "Growth lives outside familiarity. Discover how to break free from comfort and step into the person you're meant to become.",
      date: "NOVEMBER 23, 2025",
      readTime: "5 min read",
      category: "Life",
      image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&fit=crop"
    },
    {
      id: 7,
      title: "The AI Revolution: What It Means for Your Future",
      excerpt: "AI isn't replacing humans—it's amplifying us. Learn how to leverage artificial intelligence to enhance your skills and creativity.",
      date: "NOVEMBER 22, 2025",
      readTime: "10 min read",
      category: "Technology",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&fit=crop"
    },
    {
      id: 8,
      title: "Stop Comparing, Start Creating",
      excerpt: "Social media comparison is stealing your joy. Here's how to focus on your own journey and create something meaningful.",
      date: "NOVEMBER 21, 2025",
      readTime: "6 min read",
      category: "Life",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&fit=crop"
    },
    {
      id: 9,
      title: "Building Fast & Responsive Websites",
      excerpt: "Performance is key. Discover techniques to optimize your website speed and create seamless user experiences across all devices.",
      date: "NOVEMBER 20, 2025",
      readTime: "6 min read",
      category: "Performance",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&fit=crop"
    },
    {
      id: 10,
      title: "Your Authentic Self: The Only Version Worth Being",
      excerpt: "Authenticity isn't a trend—it's freedom. Learn why pretending to be someone else is the heaviest burden you'll ever carry.",
      date: "NOVEMBER 19, 2025",
      readTime: "7 min read",
      category: "Life",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&fit=crop"
    },
    {
      id: 11,
      title: "The Science of Breaking Bad Habits",
      excerpt: "Habits aren't broken by willpower—they're rewired by understanding. Discover the neuroscience behind lasting behavioral change.",
      date: "NOVEMBER 18, 2025",
      readTime: "9 min read",
      category: "Motivation",
      image: "https://images.unsplash.com/photo-1499728603263-13726abce5fd?w=800&fit=crop"
    },
    {
      id: 12,
      title: "Gaming's Evolution: From Arcade to AI Companions",
      excerpt: "How video games evolved from simple entertainment to complex AI-driven experiences that blur the line between reality and virtual worlds.",
      date: "NOVEMBER 17, 2025",
      readTime: "11 min read",
      category: "Technology",
      image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&fit=crop"
    },
    {
      id: 13,
      title: "Failure is Feedback, Not Final",
      excerpt: "Every successful person has failed more than you've tried. Reframe failure as data, not destiny.",
      date: "NOVEMBER 16, 2025",
      readTime: "5 min read",
      category: "Motivation",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&fit=crop"
    },
    {
      id: 14,
      title: "Color Psychology in Web Design",
      excerpt: "Understanding how colors affect user behavior. Learn why the orange theme creates energy and enthusiasm for your brand.",
      date: "NOVEMBER 15, 2025",
      readTime: "7 min read",
      category: "Design",
      image: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=800&fit=crop"
    },
    {
      id: 15,
      title: "The Introvert's Guide to Owning Your Quiet Power",
      excerpt: "Loud doesn't mean strong. Discover how introverts can leverage their natural strengths in an extroverted world.",
      date: "NOVEMBER 14, 2025",
      readTime: "6 min read",
      category: "Life",
      image: "https://images.unsplash.com/photo-1516534775068-ba3e7458af70?w=800&fit=crop"
    },
    {
      id: 16,
      title: "Why Perfect is the Enemy of Progress",
      excerpt: "Perfectionism paralyzes potential. Learn to ship, iterate, and improve instead of waiting for the perfect moment.",
      date: "NOVEMBER 13, 2025",
      readTime: "5 min read",
      category: "Motivation",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&fit=crop"
    },
    {
      id: 17,
      title: "Machine Learning Explained Simply",
      excerpt: "No PhD required. Understand how AI learns from data and why it's transforming everything from your phone to your career.",
      date: "NOVEMBER 12, 2025",
      readTime: "8 min read",
      category: "Technology",
      image: "https://images.unsplash.com/photo-1555255707-c07966088b7b?w=800&fit=crop"
    },
    {
      id: 18,
      title: "Mobile-First Design Principles",
      excerpt: "With mobile traffic dominating, learn how to design websites that work perfectly on smartphones and scale up beautifully.",
      date: "NOVEMBER 11, 2025",
      readTime: "5 min read",
      category: "Mobile",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&fit=crop"
    },
    {
      id: 19,
      title: "Your Weirdness is Your Brand",
      excerpt: "The things you hide about yourself? They're exactly what makes you memorable. Learn to monetize your uniqueness.",
      date: "NOVEMBER 10, 2025",
      readTime: "7 min read",
      category: "Life",
      image: "https://images.unsplash.com/photo-1529070538774-1843cb3265df?w=800&fit=crop"
    },
    {
      id: 20,
      title: "Getting Started with Mystic Design",
      excerpt: "Learn how to use the Mystic Orange Theme for your next project. This comprehensive guide covers everything from installation to customization.",
      date: "NOVEMBER 9, 2025",
      readTime: "5 min read",
      category: "Tutorial",
      image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&fit=crop"
    }
  ]

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Background */}
      <div className="relative h-[400px] overflow-hidden bg-gradient-to-br from-orange-400 via-orange-500 to-red-500">
        <div className="absolute inset-0 bg-gradient-to-b from-orange-500/60 via-orange-600/50 to-gray-100" />

        {/* Top Navigation */}
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
              <Link href="/">
                <Button variant="ghost" size="icon" className="h-12 w-20 rounded-lg hover:bg-gray-100">
                  <Home className="h-6 w-6 text-gray-600" />
                </Button>
              </Link>
              <Button variant="ghost" size="icon" className="relative h-12 w-20 rounded-lg hover:bg-gray-100">
                <Palette className="h-6 w-6 text-orange-500" />
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-orange-500" />
              </Button>
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

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-[calc(400px-56px)] px-4">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 text-center">
            Mystic Blog
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8">Insights, tutorials, and design inspiration</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-[1680px] mx-auto px-4 -mt-20 relative z-20">
        <div className="flex gap-4">
          {/* Left Sidebar */}
          <aside className="w-72 sticky top-4 h-fit hidden lg:block">
            <Card className="p-2 shadow-md">
              <Link href="/">
                <Button variant="ghost" className="w-full justify-start gap-3 h-12 rounded-lg hover:bg-gray-100">
                  <Avatar className="h-9 w-9">
                    <AvatarFallback className="bg-gradient-to-br from-orange-400 to-red-500 text-white">M</AvatarFallback>
                  </Avatar>
                  <span className="font-semibold">Mystic Design</span>
                </Button>
              </Link>
              <Link href="/">
                <Button variant="ghost" className="w-full justify-start gap-3 h-11 rounded-lg hover:bg-gray-100">
                  <div className="h-9 w-9 rounded-full bg-orange-100 flex items-center justify-center">
                    <Home className="h-5 w-5 text-orange-600" />
                  </div>
                  <span className="font-medium">Home</span>
                </Button>
              </Link>
              <Button variant="ghost" className="w-full justify-start gap-3 h-11 rounded-lg hover:bg-gray-100">
                <div className="h-9 w-9 rounded-full bg-blue-100 flex items-center justify-center">
                  <Users className="h-5 w-5 text-blue-600" />
                </div>
                <span className="font-medium">About</span>
              </Button>
              <Button variant="ghost" className="w-full justify-start gap-3 h-11 rounded-lg bg-orange-50 border-l-4 border-orange-500">
                <div className="h-9 w-9 rounded-full bg-purple-100 flex items-center justify-center">
                  <Palette className="h-5 w-5 text-purple-600" />
                </div>
                <span className="font-medium">Blog</span>
              </Button>
              <Link href="/#contact">
                <Button variant="ghost" className="w-full justify-start gap-3 h-11 rounded-lg hover:bg-gray-100">
                  <div className="h-9 w-9 rounded-full bg-green-100 flex items-center justify-center">
                    <Mail className="h-5 w-5 text-green-600" />
                  </div>
                  <span className="font-medium">Contact</span>
                </Button>
              </Link>
            </Card>
          </aside>

          {/* Main Blog Content */}
          <main className="flex-1 max-w-4xl space-y-4">
            {/* Featured Post */}
            <Link href={`/blog/${blogPosts[0].id}`}>
              <Card className="overflow-hidden shadow-md cursor-pointer hover:shadow-xl transition">
                <div className="relative h-64 md:h-80">
                <img
                  src={blogPosts[0].image}
                  alt={blogPosts[0].title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <span className="inline-block px-3 py-1 bg-orange-500 rounded-full text-sm font-semibold mb-3">
                    {blogPosts[0].category}
                  </span>
                  <h2 className="text-3xl font-bold mb-2">{blogPosts[0].title}</h2>
                  <p className="text-white/90 mb-3">{blogPosts[0].excerpt}</p>
                  <div className="flex items-center gap-4 text-sm">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {blogPosts[0].date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {blogPosts[0].readTime}
                    </span>
                  </div>
                </div>
              </div>
            </Card>
            </Link>

            {/* Blog Posts Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {blogPosts.slice(1).map((post) => (
                <Link key={post.id} href={`/blog/${post.id}`}>
                  <Card className="overflow-hidden shadow-md hover:shadow-lg transition cursor-pointer group">
                  <div className="relative h-48">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition"
                    />
                    <span className="absolute top-3 left-3 px-3 py-1 bg-orange-500 text-white rounded-full text-xs font-semibold">
                      {post.category}
                    </span>
                  </div>
                  <div className="p-4">
                    <h3 className="text-xl font-bold mb-2 line-clamp-2 group-hover:text-orange-600 transition">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-3 line-clamp-2">{post.excerpt}</p>
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {post.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {post.readTime}
                      </span>
                    </div>
                    <Button variant="ghost" className="w-full mt-3 text-orange-600 hover:bg-orange-50">
                      Read More <ArrowRight className="h-4 w-4 ml-1" />
                    </Button>
                  </div>
                </Card>
                </Link>
              ))}
            </div>
          </main>

          {/* Right Sidebar */}
          <aside className="w-80 sticky top-4 h-fit space-y-4 hidden xl:block">
            {/* Categories */}
            <Card className="p-4 shadow-md">
              <h3 className="font-semibold text-gray-700 mb-3">Categories</h3>
              <div className="space-y-2">
                {['Life', 'Motivation', 'Technology', 'Design', 'Performance', 'Mobile', 'Tutorial'].map((cat) => (
                  <Button key={cat} variant="ghost" className="w-full justify-start hover:bg-orange-50 hover:text-orange-600">
                    {cat}
                  </Button>
                ))}
              </div>
            </Card>

            {/* Popular Posts */}
            <Card className="p-4 shadow-md">
              <h3 className="font-semibold text-gray-700 mb-3">Popular Posts</h3>
              <div className="space-y-3">
                {blogPosts.slice(0, 3).map((post) => (
                  <Link key={post.id} href={`/blog/${post.id}`}>
                    <div className="flex gap-3 cursor-pointer hover:bg-gray-50 p-2 rounded-lg -mx-2">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-16 h-16 rounded-lg object-cover"
                    />
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-sm line-clamp-2">{post.title}</p>
                      <p className="text-xs text-gray-600">{post.readTime}</p>
                    </div>
                  </div>
                  </Link>
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
