import { useState, useEffect } from 'react';
import { Play, Pause, RotateCcw, Mic, MicOff, Users, Brain, FileText, Zap } from 'lucide-react';

export default function InteractiveDemo() {
  const [activeDemo, setActiveDemo] = useState('transcription');
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [transcript, setTranscript] = useState('');
  const [insights, setInsights] = useState<string[]>([]);

  const demoScenarios = {
    transcription: {
      title: 'Real-time Transcription',
      description: 'Watch AI transcribe speech with 98% accuracy',
      icon: Mic,
      color: 'emerald',
      content: "Let's discuss our Q4 marketing strategy. I think we should focus more on digital channels this quarter. Sarah, what's your take on the social media budget allocation?"
    },
    insights: {
      title: 'AI Meeting Insights',
      description: 'See how AI extracts key decisions and action items',
      icon: Brain,
      color: 'cyan',
      content: "We've decided to increase the marketing budget by 20%. Action items: Sarah will prepare the social media strategy by Friday, and John will analyze competitor campaigns."
    },
    summary: {
      title: 'Automated Summaries',
      description: 'Generate comprehensive meeting reports instantly',
      icon: FileText,
      color: 'emerald',
      content: "Meeting Summary: Discussed Q4 marketing strategy. Key decisions: 20% budget increase, focus on digital channels. Next steps: Strategy preparation and competitor analysis."
    }
  };

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying) {
      interval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            setIsPlaying(false);
            return 100;
          }
          return prev + 2;
        });
      }, 100);
    }
    return () => clearInterval(interval);
  }, [isPlaying]);

  useEffect(() => {
    if (isPlaying) {
      const scenario = demoScenarios[activeDemo as keyof typeof demoScenarios];
      const text = scenario.content;
      const charIndex = Math.floor((progress / 100) * text.length);
      setTranscript(text.slice(0, charIndex));

      // Add insights based on progress
      if (activeDemo === 'insights' && progress > 30 && insights.length === 0) {
        setInsights(['📊 Budget increase detected: +20%']);
      }
      if (activeDemo === 'insights' && progress > 60 && insights.length === 1) {
        setInsights(prev => [...prev, '✅ Action item: Strategy preparation (Sarah)']);
      }
      if (activeDemo === 'insights' && progress > 80 && insights.length === 2) {
        setInsights(prev => [...prev, '🔍 Action item: Competitor analysis (John)']);
      }
    }
  }, [progress, isPlaying, activeDemo, insights.length]);

  const resetDemo = () => {
    setProgress(0);
    setTranscript('');
    setInsights([]);
    setIsPlaying(false);
  };

  const currentScenario = demoScenarios[activeDemo as keyof typeof demoScenarios];
  const IconComponent = currentScenario.icon;

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Experience COGNITA
            <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent"> Live</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Try our interactive demos and see how AI transforms your meetings in real-time
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Demo Selection */}
          <div className="space-y-4">
            {Object.entries(demoScenarios).map(([key, scenario]) => {
              const Icon = scenario.icon;
              const isActive = activeDemo === key;
              const colorClasses = scenario.color === 'emerald' 
                ? 'border-emerald-500 bg-emerald-500/10' 
                : 'border-cyan-500 bg-cyan-500/10';
              
              return (
                <button
                  key={key}
                  onClick={() => {
                    setActiveDemo(key);
                    resetDemo();
                  }}
                  className={`w-full p-6 rounded-xl border-2 transition-all duration-300 text-left ${
                    isActive 
                      ? colorClasses
                      : 'border-gray-700 bg-gray-800/50 hover:border-gray-600'
                  }`}
                >
                  <div className="flex items-center space-x-4">
                    <Icon className={`h-8 w-8 ${isActive ? 'text-white' : 'text-gray-400'}`} />
                    <div>
                      <h3 className={`font-semibold ${isActive ? 'text-white' : 'text-gray-300'}`}>
                        {scenario.title}
                      </h3>
                      <p className={`text-sm ${isActive ? 'text-gray-200' : 'text-gray-500'}`}>
                        {scenario.description}
                      </p>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Demo Interface */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
              {/* Header */}
              <div className="bg-gray-50 px-6 py-4 border-b">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <IconComponent className="h-6 w-6 text-gray-700" />
                    <h3 className="font-semibold text-gray-900">{currentScenario.title}</h3>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => setIsPlaying(!isPlaying)}
                      className="p-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors"
                    >
                      {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                    </button>
                    <button
                      onClick={resetDemo}
                      className="p-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
                    >
                      <RotateCcw className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="px-6 py-2 bg-gray-100">
                <div className="w-full bg-gray-300 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-emerald-500 to-cyan-500 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${progress}%` }}
                  ></div>
                </div>
              </div>

              {/* Demo Content */}
              <div className="p-6 min-h-[400px]">
                {activeDemo === 'transcription' && (
                  <div className="space-y-4">
                    <div className="flex items-center space-x-2 text-gray-600">
                      <Mic className="h-4 w-4" />
                      <span className="text-sm">Live Transcription</span>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-4 min-h-[200px]">
                      <p className="text-gray-900 leading-relaxed">
                        {transcript}
                        {isPlaying && <span className="animate-pulse">|</span>}
                      </p>
                    </div>
                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div className="bg-emerald-50 p-3 rounded-lg">
                        <div className="text-2xl font-bold text-emerald-600">98%</div>
                        <div className="text-xs text-gray-600">Accuracy</div>
                      </div>
                      <div className="bg-cyan-50 p-3 rounded-lg">
                        <div className="text-2xl font-bold text-cyan-600">Real-time</div>
                        <div className="text-xs text-gray-600">Processing</div>
                      </div>
                      <div className="bg-emerald-50 p-3 rounded-lg">
                        <div className="text-2xl font-bold text-emerald-600">Multi-speaker</div>
                        <div className="text-xs text-gray-600">Detection</div>
                      </div>
                    </div>
                  </div>
                )}

                {activeDemo === 'insights' && (
                  <div className="space-y-4">
                    <div className="flex items-center space-x-2 text-gray-600">
                      <Brain className="h-4 w-4" />
                      <span className="text-sm">AI Analysis</span>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-4 min-h-[150px]">
                      <p className="text-gray-900 leading-relaxed mb-4">
                        {transcript}
                        {isPlaying && <span className="animate-pulse">|</span>}
                      </p>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-gray-900">Extracted Insights:</h4>
                      {insights.map((insight, index) => (
                        <div key={index} className="bg-emerald-50 p-3 rounded-lg border-l-4 border-emerald-500 animate-fadeIn">
                          <p className="text-sm text-gray-700">{insight}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeDemo === 'summary' && (
                  <div className="space-y-4">
                    <div className="flex items-center space-x-2 text-gray-600">
                      <FileText className="h-4 w-4" />
                      <span className="text-sm">Automated Summary</span>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <p className="text-gray-900 leading-relaxed">
                        {transcript}
                        {isPlaying && <span className="animate-pulse">|</span>}
                      </p>
                    </div>
                    {progress > 50 && (
                      <div className="bg-gradient-to-r from-emerald-50 to-cyan-50 p-4 rounded-lg border animate-fadeIn">
                        <h4 className="font-semibold text-gray-900 mb-2">📋 Meeting Summary Generated</h4>
                        <div className="space-y-2 text-sm text-gray-700">
                          <p><strong>Duration:</strong> 15 minutes</p>
                          <p><strong>Participants:</strong> 3 team members</p>
                          <p><strong>Key Topics:</strong> Q4 Marketing Strategy, Budget Planning</p>
                          <p><strong>Action Items:</strong> 2 assigned tasks</p>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}