import { Brain, MessageSquare, Clock, Users, FileText, Zap, Play, ArrowRight } from 'lucide-react';
import { useState } from 'react';

const features = [
  {
    icon: Brain,
    title: 'AI-Powered Insights',
    description: 'Get intelligent meeting summaries, action items, and key decisions automatically extracted from your conversations.',
    color: 'emerald'
  },
  {
    icon: MessageSquare,
    title: 'Real-time Transcription',
    description: 'Accurate speech-to-text conversion with speaker identification and sentiment analysis in real-time.',
    color: 'cyan'
  },
  {
    icon: Clock,
    title: 'Smart Scheduling',
    description: 'AI-assisted scheduling that finds optimal meeting times and suggests agenda items based on context.',
    color: 'emerald'
  },
  {
    icon: Users,
    title: 'Team Collaboration',
    description: 'Enhanced collaboration tools with shared notes, annotations, and seamless integration with your workflow.',
    color: 'cyan'
  },
  {
    icon: FileText,
    title: 'Automated Reports',
    description: 'Generate comprehensive meeting reports, follow-up emails, and task assignments automatically.',
    color: 'emerald'
  },
  {
    icon: Zap,
    title: 'Instant Integration',
    description: 'Connect with your favorite tools like Slack, Teams, Zoom, and project management platforms.',
    color: 'cyan'
  }
];

export default function Features() {
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);

  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Powerful Features for
            <span className="bg-gradient-to-r from-emerald-600 to-cyan-600 bg-clip-text text-transparent"> Modern Teams</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience the future of meetings with AI-driven features that enhance productivity, 
            improve collaboration, and ensure nothing important is ever missed.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const colorClasses = feature.color === 'emerald' 
              ? 'bg-emerald-100 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white'
              : 'bg-cyan-100 text-cyan-600 group-hover:bg-cyan-600 group-hover:text-white';
            
            return (
              <div 
                key={index}
                className="group p-8 rounded-2xl border border-gray-200 hover:border-emerald-300 hover:shadow-xl transition-all duration-500 relative overflow-hidden"
                onMouseEnter={() => setHoveredFeature(index)}
                onMouseLeave={() => setHoveredFeature(null)}
              >
                {/* Animated Background */}
                <div className={`absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-5 transition-opacity duration-500 ${
                  feature.color === 'emerald' 
                    ? 'from-emerald-400 to-emerald-600' 
                    : 'from-cyan-400 to-cyan-600'
                }`}></div>
                
                <div className={`w-12 h-12 rounded-lg ${colorClasses} flex items-center justify-center mb-6 transition-all duration-300`}>
                  <Icon className="h-6 w-6 group-hover:scale-110 transition-transform duration-300" />
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-emerald-700 transition-colors">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed mb-4 group-hover:text-gray-700 transition-colors">
                  {feature.description}
                </p>

                {/* Interactive Demo Button */}
                <button className="flex items-center space-x-2 text-emerald-600 hover:text-emerald-700 transition-colors opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  <Play className="h-4 w-4" />
                  <span className="text-sm font-medium">Try Demo</span>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </button>
                {/* Hover Effect Indicator */}
                {hoveredFeature === index && (
                  <div className="absolute top-4 right-4 w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                )}
              </div>
            );
          })}
        </div>

        {/* Interactive Features Preview */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-emerald-50 to-cyan-50 rounded-2xl p-8 border border-emerald-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Experience These Features Live
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Don't just read about our features - try them yourself with our interactive demos 
              and see how COGNITA can transform your meetings.
            </p>
            <button className="bg-emerald-600 text-white px-8 py-4 rounded-lg hover:bg-emerald-700 transition-all duration-300 font-semibold group">
              <span>Explore Interactive Demos</span>
              <ArrowRight className="inline-block ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}