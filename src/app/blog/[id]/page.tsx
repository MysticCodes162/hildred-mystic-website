import { Search, Home, Users, Video, ShoppingBag, Bell, Grid3x3, MessageCircle, Mail, Palette, Calendar, Clock, ArrowLeft, Share2, ThumbsUp } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Card } from '@/components/ui/card'
import Link from 'next/link'
import { notFound } from 'next/navigation'

const blogPosts = [
  {
    id: 1,
    title: "Embrace Your Inner Difference: Why Being Unique is Your Superpower",
    excerpt: "Stop trying to fit in. Your differences aren't flaws—they're your greatest strengths. Learn how to celebrate what makes you uniquely you.",
    content: "In a world that constantly pushes conformity, your uniqueness is your most valuable asset. Every successful person, every groundbreaking innovation, every cultural shift started with someone who dared to be different. Your quirks, your unconventional thoughts, your unique perspective—these aren't things to hide. They're your competitive advantage. The market rewards differentiation, not imitation. The world needs your authentic voice, not another copy. Stop dimming your light to make others comfortable. Your differences are precisely what will make you unforgettable.",
    date: "November 28, 2024",
    readTime: "7 min read",
    category: "Life",
    image: "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?w=1200&fit=crop",
    author: "Mystic Design"
  },
  {
    id: 2,
    title: "From Pong to ChatGPT: The Evolution of AI",
    excerpt: "Journey through 50 years of gaming and AI evolution. From simple pixels to artificial intelligence that understands human language.",
    content: "1972: Pong introduced the world to interactive digital entertainment with two paddles and a bouncing pixel. 2023: ChatGPT converses with millions, writes code, creates art, and debates philosophy. This isn't just evolution—it's revolution. Between these points lies a fascinating journey through arcade cabinets, home consoles, neural networks, and machine learning. Each generation built on the last, from simple decision trees to deep learning that mimics human cognition. The AI that beats chess grandmasters, generates photorealistic images, and writes coherent essays all trace their lineage back to those simple gaming algorithms. Understanding this progression isn't just history—it's a roadmap to our AI-augmented future.",
    date: "November 27, 2024",
    readTime: "12 min read",
    category: "Technology",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=1200&fit=crop",
    author: "Mystic Design"
  },
  {
    id: 3,
    title: "Why Your Struggle is Actually Your Story",
    excerpt: "Every challenge you face is writing your unique narrative. Learn to reframe obstacles as opportunities for growth.",
    content: "Your struggles aren't obstacles to your success—they ARE your success story. The entrepreneur who failed three times before building a unicorn. The artist rejected by dozens of galleries before their first exhibition. The athlete who overcame injury to win gold. Their struggles didn't delay their success; they created it. Every challenge teaches resilience, builds character, and develops the exact skills needed for future victories. Your current struggle is writing tomorrow's testimonial. The question isn't whether you'll face difficulties—it's whether you'll let them define you or refine you. Choose refinement. Your struggle is your story, and every great story needs conflict before the climax.",
    date: "November 26, 2024",
    readTime: "6 min read",
    category: "Motivation",
    image: "https://images.unsplash.com/photo-1495364141860-b0d03eccd065?w=1200&fit=crop",
    author: "Mystic Design"
  }
  // Add more as needed - keeping it simple for now
]

export default function BlogPost({ params }: { params: { id: string } }) {
  const post = blogPosts.find(p => p.id === parseInt(params.id))

  if (!post) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Top Navigation */}
      <nav className="bg-white/95 backdrop-blur-md shadow-sm sticky top-0 z-50">
        <div className="max-w-[1680px] mx-auto px-4 h-14 flex items-center justify-between gap-2">
          <div className="flex items-center gap-2 flex-1">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">M</span>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">Mystic</span>
            </Link>
            <div className="relative flex-1 max-w-60 ml-4">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
              <Input placeholder="Search" className="pl-10 bg-gray-100 border-0 rounded-full h-10" />
            </div>
          </div>

          <div className="flex items-center gap-1">
            <Link href="/">
              <Button variant="ghost" size="icon" className="h-12 w-20 rounded-lg hover:bg-gray-100">
                <Home className="h-6 w-6 text-gray-600" />
              </Button>
            </Link>
            <Link href="/blog">
              <Button variant="ghost" size="icon" className="relative h-12 w-20 rounded-lg hover:bg-gray-100">
                <Palette className="h-6 w-6 text-orange-500" />
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-orange-500" />
              </Button>
            </Link>
          </div>

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

      {/* Hero Image */}
      <div className="relative h-[400px] overflow-hidden">
        <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 -mt-32 relative z-10 pb-12">
        <Card className="p-8 shadow-xl">
          {/* Back Button */}
          <Link href="/blog">
            <Button variant="ghost" className="mb-6 gap-2 hover:bg-gray-100">
              <ArrowLeft className="h-4 w-4" />
              Back to Blog
            </Button>
          </Link>

          {/* Category Badge */}
          <span className="inline-block px-4 py-2 bg-orange-500 text-white rounded-full text-sm font-semibold mb-4">
            {post.category}
          </span>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
            {post.title}
          </h1>

          {/* Meta Info */}
          <div className="flex items-center gap-6 text-gray-600 mb-8 pb-8 border-b">
            <div className="flex items-center gap-2">
              <Avatar className="h-10 w-10">
                <AvatarFallback className="bg-gradient-to-br from-orange-400 to-red-500 text-white">M</AvatarFallback>
              </Avatar>
              <span className="font-medium">{post.author}</span>
            </div>
            <span className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              {post.date}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              {post.readTime}
            </span>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none mb-8">
            <p className="text-xl text-gray-700 leading-relaxed mb-6">{post.excerpt}</p>
            <p className="text-gray-700 leading-relaxed">{post.content}</p>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-4 pt-8 border-t">
            <Button className="gap-2 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600">
              <ThumbsUp className="h-4 w-4" />
              Like
            </Button>
            <Button variant="outline" className="gap-2">
              <Share2 className="h-4 w-4" />
              Share
            </Button>
          </div>
        </Card>
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
