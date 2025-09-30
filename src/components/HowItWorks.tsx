import { Calendar, Mic, Brain, Send } from 'lucide-react';

const steps = [
  {
    icon: Calendar,
    title: 'Schedule & Connect',
    description: 'Set up your meeting and invite COGNITA to join automatically or manually.',
    step: '01'
  },
  {
    icon: Mic,
    title: 'Record & Transcribe',
    description: 'AI captures every word with real-time transcription and speaker identification.',
    step: '02'
  },
  {
    icon: Brain,
    title: 'Analyze & Extract',
    description: 'Advanced AI processes the conversation to identify key insights and action items.',
    step: '03'
  },
  {
    icon: Send,
    title: 'Share & Follow-up',
    description: 'Automated summaries and tasks are distributed to all participants instantly.',
    step: '04'
  }
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 bg-gradient-to-br from-slate-50 to-emerald-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            How COGNITA
            <span className="bg-gradient-to-r from-emerald-600 to-cyan-600 bg-clip-text text-transparent"> Works</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get started in minutes with our simple, intuitive process that transforms 
            your meetings from start to finish.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            
            return (
              <div key={index} className="relative">
                {/* Connection Line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-emerald-300 to-cyan-300 transform translate-x-4"></div>
                )}
                
                <div className="text-center">
                  <div className="relative inline-flex items-center justify-center w-32 h-32 bg-white rounded-2xl shadow-lg border border-gray-200 mb-6 group hover:shadow-xl transition-all duration-300">
                    <div className="absolute top-4 right-4 text-xs font-bold text-emerald-600 bg-emerald-100 px-2 py-1 rounded-full">
                      {step.step}
                    </div>
                    <Icon className="h-12 w-12 text-emerald-600 group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <button className="bg-emerald-600 text-white px-8 py-4 rounded-lg hover:bg-emerald-700 transition-colors font-semibold">
            Try It Now - Free
          </button>
        </div>
      </div>
    </section>
  );
}