import { useState } from 'react';
import { Play, Pause, Volume2, Maximize, RotateCcw } from 'lucide-react';

const videoShowcases = [
  {
    id: 'meeting-demo',
    title: 'Complete Meeting Experience',
    description: 'Watch a full meeting from start to finish with AI assistance',
    thumbnail: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
    duration: '3:45',
    category: 'Full Demo'
  },
  {
    id: 'transcription-demo',
    title: 'Real-time Transcription',
    description: 'See how COGNITA transcribes speech with perfect accuracy',
    thumbnail: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800',
    duration: '1:30',
    category: 'Feature Demo'
  },
  {
    id: 'insights-demo',
    title: 'AI-Powered Insights',
    description: 'Discover how AI extracts key decisions and action items',
    thumbnail: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800',
    duration: '2:15',
    category: 'Feature Demo'
  },
  {
    id: 'integration-demo',
    title: 'Seamless Integrations',
    description: 'Connect COGNITA with your favorite tools and platforms',
    thumbnail: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800',
    duration: '1:45',
    category: 'Integration'
  }
];

export default function VideoShowcase() {
  const [selectedVideo, setSelectedVideo] = useState(videoShowcases[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(225); // 3:45 in seconds

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleVideoSelect = (video: typeof videoShowcases[0]) => {
    setSelectedVideo(video);
    setIsPlaying(false);
    setCurrentTime(0);
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            See COGNITA in
            <span className="bg-gradient-to-r from-emerald-600 to-cyan-600 bg-clip-text text-transparent"> Action</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Watch real demonstrations of how COGNITA transforms meetings with AI-powered features
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Video Player */}
          <div className="lg:col-span-2">
            <div className="bg-gray-900 rounded-2xl overflow-hidden shadow-2xl">
              {/* Video Area */}
              <div className="relative aspect-video bg-gray-800">
                <img 
                  src={selectedVideo.thumbnail}
                  alt={selectedVideo.title}
                  className="w-full h-full object-cover"
                />
                
                {/* Play Overlay */}
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <button
                    onClick={handlePlayPause}
                    className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300 group"
                  >
                    {isPlaying ? (
                      <Pause className="h-8 w-8 text-white group-hover:scale-110 transition-transform" />
                    ) : (
                      <Play className="h-8 w-8 text-white ml-1 group-hover:scale-110 transition-transform" />
                    )}
                  </button>
                </div>

                {/* Video Info Overlay */}
                <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-sm rounded-lg px-3 py-2">
                  <span className="text-white text-sm font-medium">{selectedVideo.category}</span>
                </div>

                <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-sm rounded-lg px-3 py-2">
                  <span className="text-white text-sm">{selectedVideo.duration}</span>
                </div>
              </div>

              {/* Video Controls */}
              <div className="p-4 bg-gray-900">
                <div className="flex items-center space-x-4 mb-4">
                  <button
                    onClick={handlePlayPause}
                    className="p-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors"
                  >
                    {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                  </button>
                  
                  <button className="p-2 text-gray-400 hover:text-white transition-colors">
                    <Volume2 className="h-4 w-4" />
                  </button>

                  <div className="flex-1">
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div 
                        className="bg-emerald-500 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${(currentTime / duration) * 100}%` }}
                      ></div>
                    </div>
                  </div>

                  <span className="text-gray-400 text-sm">
                    {formatTime(currentTime)} / {formatTime(duration)}
                  </span>

                  <button className="p-2 text-gray-400 hover:text-white transition-colors">
                    <Maximize className="h-4 w-4" />
                  </button>
                </div>

                <div>
                  <h3 className="text-white font-semibold text-lg mb-2">{selectedVideo.title}</h3>
                  <p className="text-gray-400 text-sm">{selectedVideo.description}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Video Playlist */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">More Demos</h3>
            {videoShowcases.map((video) => (
              <button
                key={video.id}
                onClick={() => handleVideoSelect(video)}
                className={`w-full p-4 rounded-xl border-2 transition-all duration-300 text-left ${
                  selectedVideo.id === video.id
                    ? 'border-emerald-500 bg-emerald-50'
                    : 'border-gray-200 hover:border-emerald-300 hover:bg-gray-50'
                }`}
              >
                <div className="flex space-x-4">
                  <div className="relative flex-shrink-0">
                    <img 
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-20 h-12 object-cover rounded-lg"
                    />
                    <div className="absolute inset-0 bg-black/40 rounded-lg flex items-center justify-center">
                      <Play className="h-4 w-4 text-white" />
                    </div>
                    <div className="absolute bottom-1 right-1 bg-black/80 text-white text-xs px-1 rounded">
                      {video.duration}
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-medium text-gray-900 truncate">{video.title}</h4>
                    <p className="text-sm text-gray-600 mt-1 line-clamp-2">{video.description}</p>
                    <span className="inline-block mt-2 text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                      {video.category}
                    </span>
                  </div>
                </div>
              </button>
            ))}

            {/* Try Live Demo CTA */}
            <div className="bg-gradient-to-br from-emerald-50 to-cyan-50 p-6 rounded-xl border border-emerald-200">
              <h4 className="font-semibold text-gray-900 mb-2">Ready to try it yourself?</h4>
              <p className="text-sm text-gray-600 mb-4">
                Experience COGNITA with your own meetings and see the difference AI makes.
              </p>
              <button className="w-full bg-emerald-600 text-white py-2 px-4 rounded-lg hover:bg-emerald-700 transition-colors font-medium">
                Start Free Trial
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}