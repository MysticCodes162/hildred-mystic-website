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
    date: "NOVEMBER 28, 2025",
    readTime: "7 min read",
    category: "Life",
    image: "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?w=1200&fit=crop",
    author: "Mystic Design"
  },
  {
    id: 2,
    title: "From Pong to ChatGPT: The Evolution of AI",
    excerpt: "Journey through 50 years of gaming and AI evolution. From simple pixels to artificial intelligence that understands human language.",
    content: `
# The Dawn of Digital Intelligence: 1972-1980

**1972: Pong** - Two white rectangles. A square pixel bouncing between them. This simple game introduced millions to interactive digital entertainment. But beneath those basic graphics was something revolutionary: a computer making decisions in real-time, predicting ball trajectories, and responding to player input.

The AI was rudimentary—basic collision detection and predetermined ball physics. Yet Pong established the foundation: computers could simulate intelligence, respond to stimuli, and create engaging experiences.

# The Golden Age of Arcade AI: 1980-1990

**Pac-Man (1980)** changed everything. Each ghost had distinct "personalities" programmed through different chase algorithms:
- **Blinky** directly pursued Pac-Man
- **Pinky** tried to ambush ahead of him
- **Inky** used complex positioning relative to both Blinky and Pac-Man
- **Clyde** alternated between chasing and fleeing

This was behavioral AI in its infancy—simple state machines creating the illusion of character and strategy. Players genuinely believed the ghosts were "thinking."

**Chess Computers** emerged, like the legendary Deep Thought. They couldn't beat grandmasters yet, but they introduced tree search algorithms and position evaluation—concepts that would later fuel modern AI decision-making.

# The Neural Network Renaissance: 1990-2000

The 1990s saw researchers return to **neural networks**, inspired by biological brains. These weren't new (perceptrons dated to the 1950s), but increased computing power made them viable.

**Backpropagation** allowed networks to learn from mistakes. Feed data in, compare output to desired result, adjust weights, repeat millions of times. Simple in concept, revolutionary in practice.

Gaming AI grew sophisticated. **F.E.A.R. (2005)** used Goal-Oriented Action Planning (GOAP), creating enemies that dynamically formulated strategies. Players couldn't predict them because the AI genuinely adapted.

# The Machine Learning Explosion: 2000-2010

**2006: Geoffrey Hinton's Deep Learning** breakthrough reignited AI research. By stacking neural networks in deep layers, machines could extract hierarchical features from raw data—edges becoming shapes becoming objects becoming concepts.

**Google's Search Algorithm** evolved from simple keyword matching to understanding context, user intent, and semantic relationships. The web became navigable not through simple indexing but through AI comprehension.

**IBM Watson (2011)** defeated Jeopardy! champions, demonstrating natural language processing at scale. It could parse complex questions, search vast knowledge bases, and formulate confident answers—all in seconds.

# Gaming AI Reaches Human Parity: 2010-2017

**AlphaGo (2016)** shocked the world by defeating Lee Sedol, the Go world champion. Go has more possible positions than atoms in the universe—brute force was impossible. AlphaGo used:
- **Deep neural networks** to evaluate positions
- **Reinforcement learning** to improve through self-play
- **Monte Carlo tree search** to plan moves

It didn't just calculate—it developed intuition, making moves that seemed wrong but proved brilliant moves later.

**OpenAI Five (2018)** mastered Dota 2, a game requiring teamwork, long-term strategy, and real-time decision-making against human opponents. Five neural networks collaborated, having played the equivalent of 45,000 years of game time through accelerated simulation.

# The Transformer Revolution: 2017-2020

**Attention Is All You Need (2017)** - This paper introduced the Transformer architecture, fundamentally changing AI. Unlike previous models that processed sequentially, Transformers could:
- Process entire sequences simultaneously
- Learn which parts of input to "attend" to
- Scale to billions of parameters

**BERT (2018)** from Google proved Transformers could understand language bidirectionally—reading left-to-right AND right-to-left simultaneously for deeper comprehension.

**GPT-2 (2019)** showed coherent text generation at scale. OpenAI initially withheld the full model, fearing misuse—a first acknowledgment that AI language models could be dangerously convincing.

# ChatGPT Era: The AI That Understands: 2020-Present

**GPT-3 (2020)** launched with 175 billion parameters. It could:
- Write code in multiple languages
- Compose poetry mimicking specific styles
- Answer complex questions
- Translate languages
- Summarize documents
- Engage in creative storytelling

But it lacked conversational coherence and often "hallucinated" false information confidently.

**ChatGPT (November 2022)** changed the world. Built on GPT-3.5/4 with Reinforcement Learning from Human Feedback (RLHF), it:
- Maintains context across entire conversations
- Admits when it doesn't know something
- Corrects its own mistakes
- Refuses inappropriate requests
- Explains complex concepts simply

Within 5 days, 1 million users. Within 2 months, 100 million users—the fastest-growing consumer application in history.

# The Technological Leap: What Changed?

From Pong to ChatGPT represents:

**Computational Power**: Pong ran on circuits that could perform thousands of operations per second. ChatGPT's training required millions of specialized GPU cores performing quintillions of operations.

**Data Scale**: Pong had kilobytes of code. ChatGPT trained on hundreds of billions of words from books, websites, and conversations—essentially most human knowledge accessible online.

**Architecture**: Pong used fixed logic gates. ChatGPT uses billions of parameters that self-organize during training, creating emergent capabilities no programmer explicitly coded.

**Learning Method**: Pong never learned. ChatGPT learned patterns from data so vast it developed understanding of grammar, facts, reasoning, and even creativity.

# Gaming AI Today: The Cutting Edge

Modern gaming AI is indistinguishable from human players in many contexts:

**AI Dungeon** uses GPT-3 to generate infinite text adventures, crafting narratives that adapt to any player choice.

**NVIDIA's GameGAN** learned to recreate Pac-Man entirely from watching gameplay—no access to source code. It generated a playable version purely from observed patterns.

**Procedural Generation AI** creates entire game worlds, characters, quests, and dialogue trees, enabling indie developers to create experiences previously requiring massive teams.

# The Road Ahead: What's Next?

**Multimodal AI** like GPT-4 combines text, images, and eventually audio/video understanding. Imagine game characters that see what you see, understand what you say, and respond with contextual awareness.

**Persistent AI Companions** that remember your entire gaming history, evolve personalities, form genuine rapport, and transfer across games.

**AI Game Designers** that analyze your play style and dynamically adjust difficulty, pacing, and story to maximize engagement—like a dungeon master who knows you perfectly.

**Embodied AI** in robotics, using gaming simulation to train real-world behaviors. The same reinforcement learning that mastered Dota 2 is teaching robots to navigate warehouses and perform surgery.

# The Philosophy: Are We Creating Consciousness?

ChatGPT passes the Turing Test in many conversations. But does it *understand*, or merely predict text patterns brilliantly?

Current consensus: Today's AI is sophisticated pattern matching, not consciousness. It has no desires, no self-awareness, no subjective experience. Yet the line blurs as capabilities grow.

**The Chinese Room Argument**: If I follow rules to respond to Chinese characters without understanding Chinese, do I "speak" the language? Similarly, does ChatGPT "understand" English?

**Emergent Behavior**: Capabilities arise in large language models that weren't explicitly programmed—reasoning, planning, theory of mind. At what scale does quantity become quality?

# Conclusion: The Journey Continues

From Pong's bouncing pixel to ChatGPT's nuanced conversations spans 51 years. Each breakthrough built on the last:

- Pong: Real-time interactivity
- Pac-Man: Behavioral complexity
- Deep Blue: Strategic thinking
- AlphaGo: Intuitive understanding
- ChatGPT: Language mastery

We're not at the end. We're at the beginning.

The AI of 2074 will make ChatGPT look as primitive as Pong seems to us now. And just as Pong planted seeds for ChatGPT, ChatGPT is planting seeds for artificial general intelligence.

**The game has just begun.** 🎮🤖

---

*What started as two paddles and a ball became an intelligence revolution. The question isn't whether AI will transform society—it's whether we'll guide that transformation wisely.*
    `,
    date: "NOVEMBER 27, 2025",
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
    date: "NOVEMBER 26, 2025",
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
            <p className="text-xl text-gray-700 leading-relaxed mb-6 font-medium">{post.excerpt}</p>
            <div className="text-gray-700 leading-relaxed space-y-6">
              {post.content.split('\n').map((line, index) => {
                if (line.startsWith('# ')) {
                  return <h2 key={index} className="text-3xl font-bold mt-12 mb-4 bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">{line.replace('# ', '')}</h2>
                } else if (line.startsWith('**') && line.endsWith('**')) {
                  return <h3 key={index} className="text-xl font-bold mt-8 mb-3 text-gray-900">{line.replace(/\*\*/g, '')}</h3>
                } else if (line.startsWith('*') && !line.startsWith('**')) {
                  return <p key={index} className="ml-6 mb-2"><span className="text-orange-500 mr-2">•</span>{line.replace(/^\*\s/, '')}</p>
                } else if (line.startsWith('-')) {
                  return <p key={index} className="ml-6 mb-2"><span className="text-orange-500 mr-2">•</span>{line.replace(/^-\s/, '')}</p>
                } else if (line.trim() === '---') {
                  return <hr key={index} className="my-8 border-gray-300" />
                } else if (line.trim().length > 0) {
                  // Replace **text** with bold
                  const formattedLine = line.replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold text-gray-900">$1</strong>')
                  return <p key={index} className="mb-4" dangerouslySetInnerHTML={{ __html: formattedLine }} />
                }
                return null
              })}
            </div>
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
