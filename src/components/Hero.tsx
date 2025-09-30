import { Play, ArrowRight, Sparkles, Mic, Users, Brain } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Hero() {
  const [currentDemo, setCurrentDemo] = useState(0);
  const [isRecording, setIsRecording] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [participants, setParticipants] = useState([
    { name: 'Sarah Chen', role: 'Marketing Director', avatar: 'SC', speaking: false, muted: false },
    { name: 'John Smith', role: 'Product Manager', avatar: 'JS', speaking: false, muted: false },
    { name: 'Alex Rivera', role: 'Data Analyst', avatar: 'AR', speaking: false, muted: false },
    { name: 'You', role: 'Team Lead', avatar: 'YU', speaking: false, muted: false }
  ]);
  const [currentSpeaker, setCurrentSpeaker] = useState(0);
  const [aiInsights, setAiInsights] = useState<string[]>([]);
  const [meetingStats, setMeetingStats] = useState({
    duration: '00:00',
    wordsSpoken: 0,
    keyPoints: 0,
    actionItems: 0
  });
  const [demoPhase, setDemoPhase] = useState<'idle' | 'starting' | 'recording' | 'analyzing' | 'complete'>('idle');
  
  const demoTexts = [
    {
      speaker: 'Sarah Chen',
      text: "Good morning everyone. Let's dive into our Q4 marketing strategy. I've been analyzing our current performance metrics...",
      insights: ['📊 Q4 Strategy Discussion Started', '👥 4 participants joined']
    },
    {
      speaker: 'John Smith', 
      text: "Thanks Sarah. Based on our product roadmap, I think we should focus heavily on digital channels this quarter. Our conversion rates have been promising.",
      insights: ['🎯 Focus Area: Digital Channels', '📈 Conversion Rate Mentioned']
    },
    {
      speaker: 'Alex Rivera',
      text: "I've run the numbers on our social media ROI. We're seeing a 340% return on ad spend. I recommend increasing the budget by 25%.",
      insights: ['💰 ROI Data: 340% ROAS', '📊 Budget Recommendation: +25%']
    },
    {
      speaker: 'Sarah Chen',
      text: "Excellent analysis Alex. Let's make that decision official. Action item: I'll prepare the revised budget proposal by Friday.",
      insights: ['✅ Decision: Budget Increase Approved', '📋 Action Item: Budget Proposal (Sarah, Friday)']
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDemo((prev) => (prev + 1) % demoTexts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (demoPhase === 'recording') {
      let startTime = Date.now();
      interval = setInterval(() => {
        const elapsed = Math.floor((Date.now() - startTime) / 1000);
        const minutes = Math.floor(elapsed / 60);
        const seconds = elapsed % 60;
        setMeetingStats(prev => ({
          ...prev,
          duration: `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`,
          wordsSpoken: Math.floor(elapsed * 2.3),
          keyPoints: Math.floor(elapsed / 15),
          actionItems: Math.floor(elapsed / 30)
        }));
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [demoPhase]);

  const startDemo = () => {
    setDemoPhase('starting');
    setTranscript('');
    setAiInsights([]);
    setMeetingStats({ duration: '00:00', wordsSpoken: 0, keyPoints: 0, actionItems: 0 });
    
    // Starting phase
    setTimeout(() => {
      setDemoPhase('recording');
      simulateConversation();
    }, 2000);
  };

  const simulateConversation = () => {
    let currentTextIndex = 0;
    let charIndex = 0;
    
    const processNextText = () => {
      if (currentTextIndex >= demoTexts.length) {
        setDemoPhase('analyzing');
        setTimeout(() => {
          setDemoPhase('complete');
          // Reset all speakers
          setParticipants(prev => prev.map(p => ({ ...p, speaking: false })));
        }, 3000);
        return;
      }

      const currentText = demoTexts[currentTextIndex];
      const speakerIndex = participants.findIndex(p => p.name === currentText.speaker);
      
      // Set current speaker
      setCurrentSpeaker(speakerIndex);
      setParticipants(prev => prev.map((p, i) => ({ 
        ...p, 
        speaking: i === speakerIndex 
      })));

      // Type out the text
      const typeText = () => {
        if (charIndex < currentText.text.length) {
          setTranscript(prev => prev + currentText.text[charIndex]);
          charIndex++;
          setTimeout(typeText, 30 + Math.random() * 40); // Realistic typing speed
        } else {
          // Add insights
          currentText.insights.forEach((insight, index) => {
            setTimeout(() => {
              setAiInsights(prev => [...prev, insight]);
            }, index * 800);
          });

          // Move to next text after a pause
          setTimeout(() => {
            setTranscript(prev => prev + '\n\n');
            currentTextIndex++;
            charIndex = 0;
            processNextText();
          }, 2000);
        }
      };

      typeText();
    };

    processNextText();
  };

  const resetDemo = () => {
    setDemoPhase('idle');
    setTranscript('');
    setAiInsights([]);
    setMeetingStats({ duration: '00:00', wordsSpoken: 0, keyPoints: 0, actionItems: 0 });
    setParticipants(prev => prev.map(p => ({ ...p, speaking: false })));
  };

  return (
    <section className="pt-24 pb-16 bg-gradient-to-br from-slate-50 via-white to-emerald-50 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-emerald-400/20 to-cyan-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-cyan-400/20 to-emerald-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center space-x-2 bg-emerald-100 text-emerald-800 px-4 py-2 rounded-full text-sm font-medium">
              <Sparkles className="h-4 w-4" />
              <span>AI-Powered Meeting Intelligence</span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Transform Your
              <span className="bg-gradient-to-r from-emerald-600 to-cyan-600 bg-clip-text text-transparent"> Meetings</span>
              <br />
              with AI
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed">
              COGNITA revolutionizes how teams collaborate with intelligent meeting assistance, 
              real-time insights, and automated follow-ups that keep everyone aligned and productive.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-emerald-600 text-white px-8 py-4 rounded-lg hover:bg-emerald-700 transition-all duration-200 flex items-center justify-center space-x-2 group">
                <span className="font-semibold">Start Free Trial</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button className="border border-gray-300 text-gray-700 px-8 py-4 rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-center space-x-2">
                <Play className="h-5 w-5" />
                <span className="font-semibold">Watch Demo</span>
              </button>
            </div>
            
            <div className="flex items-center space-x-8 text-sm text-gray-500">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                <span>No credit card required</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                <span>14-day free trial</span>
              </div>
            </div>
          </div>
          
          <div className="relative z-10">
            {/* Professional Meeting Interface */}
            <div className="relative bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden min-h-[600px]">
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-emerald-400 to-cyan-400 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-emerald-400 to-cyan-400 rounded-full opacity-10 animate-pulse delay-500"></div>
              
              {/* Meeting Header */}
              <div className="p-6 border-b bg-gray-50">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-3">
                    <img 
                      src="/WhatsApp Image 2025-09-24 at 14.54.52.jpeg" 
                      alt="COGNITA Logo" 
                      className="h-8 w-8 object-contain"
                    />
                    <div>
                      <span className="font-semibold text-gray-900">Q4 Marketing Strategy</span>
                      <p className="text-sm text-gray-500">Team Meeting • {meetingStats.duration}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className={`w-3 h-3 rounded-full ${
                      demoPhase === 'recording' ? 'bg-red-500 animate-pulse' : 
                      demoPhase === 'analyzing' ? 'bg-yellow-500 animate-pulse' :
                      demoPhase === 'complete' ? 'bg-green-500' : 'bg-gray-300'
                    }`}></div>
                    <span className="text-sm text-gray-600 font-medium">
                      {demoPhase === 'idle' && 'Ready to Start'}
                      {demoPhase === 'starting' && 'Connecting...'}
                      {demoPhase === 'recording' && 'Recording & Transcribing'}
                      {demoPhase === 'analyzing' && 'AI Processing...'}
                      {demoPhase === 'complete' && 'Meeting Complete'}
                    </span>
                  </div>
                </div>
              </div>

              {/* Participants Grid */}
              <div className="p-6 border-b">
                <div className="grid grid-cols-2 gap-4">
                  {participants.map((participant, index) => (
                    <div key={index} className={`relative bg-gray-900 rounded-lg p-4 aspect-video flex items-center justify-center transition-all duration-300 ${
                      participant.speaking ? 'ring-2 ring-emerald-500 shadow-lg' : ''
                    }`}>
                      <div className="text-center">
                        <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold mb-2 ${
                          participant.speaking ? 'bg-emerald-500 animate-pulse' : 'bg-gray-600'
                        }`}>
                          {participant.avatar}
                        </div>
                        <p className="text-white text-sm font-medium">{participant.name}</p>
                        <p className="text-gray-400 text-xs">{participant.role}</p>
                      </div>
                      {participant.speaking && (
                        <div className="absolute top-2 right-2">
                          <div className="flex space-x-1">
                            <div className="w-1 h-4 bg-emerald-400 rounded animate-pulse"></div>
                            <div className="w-1 h-6 bg-emerald-400 rounded animate-pulse delay-100"></div>
                            <div className="w-1 h-3 bg-emerald-400 rounded animate-pulse delay-200"></div>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Live Transcription & AI Insights */}
              <div className="p-6 space-y-4">
                <div className="bg-gray-50 rounded-lg p-4 min-h-[120px]">
                  <div className="flex items-center space-x-2 mb-2">
                    <Brain className="h-4 w-4 text-emerald-600" />
                    <span className="text-sm font-medium text-gray-700">Live Transcription</span>
                    <div className="flex-1"></div>
                    <span className="text-xs text-gray-500">98.7% Accuracy</span>
                  </div>
                  <div className="max-h-24 overflow-y-auto">
                    {transcript ? (
                      <div className="text-sm leading-relaxed text-gray-900 whitespace-pre-line">
                        {transcript}
                        {demoPhase === 'recording' && <span className="animate-pulse text-emerald-600">|</span>}
                      </div>
                    ) : (
                      <p className="text-sm text-gray-500 italic">
                        {demoPhase === 'idle' ? 'Click "Start Demo" to see AI transcription in action...' : 'Initializing AI transcription...'}
                      </p>
                    )}
                  </div>
                </div>

                {/* AI Insights Panel */}
                <div className="bg-gradient-to-r from-emerald-50 to-cyan-50 rounded-lg p-4">
                  <div className="flex items-center space-x-2 mb-3">
                    <Brain className="h-4 w-4 text-emerald-600" />
                    <span className="text-sm font-medium text-gray-700">AI Insights</span>
                    <div className="flex-1"></div>
                    {demoPhase === 'recording' && (
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                        <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse delay-100"></div>
                        <div className="w-2 h-2 bg-emerald-300 rounded-full animate-pulse delay-200"></div>
                      </div>
                    )}
                  </div>
                  <div className="space-y-2 max-h-20 overflow-y-auto">
                    {aiInsights.length > 0 ? (
                      aiInsights.map((insight, index) => (
                        <div key={index} className="text-xs bg-white p-2 rounded border-l-2 border-emerald-500 animate-fadeIn">
                          {insight}
                        </div>
                      ))
                    ) : (
                      <p className="text-xs text-gray-500 italic">AI insights will appear here during the meeting...</p>
                    )}
                  </div>
                </div>
                
                {/* Meeting Stats */}
                <div className="grid grid-cols-4 gap-3">
                  <div className="bg-white p-3 rounded-lg border text-center">
                    <div className="text-lg font-bold text-emerald-600">{meetingStats.duration}</div>
                    <div className="text-xs text-gray-600">Duration</div>
                  </div>
                  <div className="bg-white p-3 rounded-lg border text-center">
                    <div className="text-lg font-bold text-cyan-600">{meetingStats.wordsSpoken}</div>
                    <div className="text-xs text-gray-600">Words</div>
                  </div>
                  <div className="bg-white p-3 rounded-lg border text-center">
                    <div className="text-lg font-bold text-emerald-600">{meetingStats.keyPoints}</div>
                    <div className="text-xs text-gray-600">Key Points</div>
                  </div>
                  <div className="bg-white p-3 rounded-lg border text-center">
                    <div className="text-lg font-bold text-cyan-600">{meetingStats.actionItems}</div>
                    <div className="text-xs text-gray-600">Actions</div>
                  </div>
                </div>

                {/* Demo Controls */}
                <div className="flex space-x-3">
                  <button 
                    onClick={startDemo}
                    disabled={demoPhase !== 'idle' && demoPhase !== 'complete'}
                    className="flex-1 bg-emerald-600 text-white py-3 px-4 rounded-lg hover:bg-emerald-700 transition-colors font-medium disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                  >
                    <Play className="h-4 w-4" />
                    <span>{demoPhase === 'complete' ? 'Restart Demo' : 'Start Live Demo'}</span>
                  </button>
                  {demoPhase !== 'idle' && (
                    <button 
                      onClick={resetDemo}
                      className="px-4 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      Reset
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}