import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useVideoPlayer } from '@/lib/video';
import { Scene1 } from './video_scenes/Scene1';
import { Scene2 } from './video_scenes/Scene2';
import { Scene3 } from './video_scenes/Scene3';
import { Scene4 } from './video_scenes/Scene4';
import { Scene5 } from './video_scenes/Scene5';
import { Mic } from 'lucide-react';

export const SCENE_DURATIONS = {
  open: 4000,
  problem: 4000,
  demo: 5000,
  how: 5000,
  close: 4000,
};

const SCENE_COMPONENTS: Record<string, React.ComponentType> = {
  open: Scene1,
  problem: Scene2,
  demo: Scene3,
  how: Scene4,
  close: Scene5,
};

const MIC_X = ['50vw', '85vw', '10vw', '50vw', '50vw'];
const MIC_Y = ['60vh', '20vh', '50vh', '80vh', '60vh'];
const MIC_SCALE = [1, 0.8, 1.2, 0.9, 1];

export default function VideoTemplate({
  durations = SCENE_DURATIONS,
  loop = true,
  onSceneChange,
}: {
  durations?: Record<string, number>;
  loop?: boolean;
  onSceneChange?: (sceneKey: string) => void;
} = {}) {
  const { currentSceneKey } = useVideoPlayer({ durations, loop });

  useEffect(() => {
    onSceneChange?.(currentSceneKey);
  }, [currentSceneKey, onSceneChange]);

  const baseSceneKey = currentSceneKey.replace(/_r[12]$/, '') as keyof typeof SCENE_DURATIONS;
  const sceneIndex = Object.keys(SCENE_DURATIONS).indexOf(baseSceneKey);
  const SceneComponent = SCENE_COMPONENTS[baseSceneKey];

  return (
    <div className="relative w-full h-screen overflow-hidden bg-white text-slate-900 font-body">

      {/* Persistent Background: subtle drifting radial gradient mesh & particles */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <motion.div
          className="absolute w-[800px] h-[800px] rounded-full opacity-10 blur-[80px]"
          style={{ background: 'radial-gradient(circle, var(--color-violet), transparent 70%)' }}
          animate={{ x: ['-20vw', '60vw', '-10vw'], y: ['-20vh', '50vh', '80vh'] }}
          transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
        />
        <motion.div
          className="absolute w-[700px] h-[700px] rounded-full opacity-10 blur-[80px]"
          style={{ background: 'radial-gradient(circle, var(--color-cyan), transparent 70%)' }}
          animate={{ x: ['80vw', '10vw', '50vw'], y: ['60vh', '-10vh', '20vh'] }}
          transition={{ duration: 22, repeat: Infinity, ease: 'linear' }}
        />
        <motion.div
          className="absolute w-[600px] h-[600px] rounded-full opacity-10 blur-[60px]"
          style={{ background: 'radial-gradient(circle, var(--color-amber), transparent 70%)' }}
          animate={{ x: ['30vw', '80vw', '10vw'], y: ['80vh', '10vh', '50vh'] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        />

        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      {/* Persistent Midground: Mic Icon Orb traveling across scenes */}
      <motion.div
        className="absolute z-10 flex items-center justify-center w-16 h-16 rounded-full shadow-lg"
        style={{
          background: 'linear-gradient(135deg, var(--color-violet), var(--color-magenta))',
        }}
        animate={{
          x: MIC_X[sceneIndex] ?? '50vw',
          y: MIC_Y[sceneIndex] ?? '60vh',
          scale: MIC_SCALE[sceneIndex] ?? 1,
          opacity: sceneIndex === 4 ? 0 : 1,
        }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      >
        <Mic className="w-8 h-8 text-white" />
        {/* Pulse ring */}
        <motion.div
          className="absolute inset-0 rounded-full border-2 border-white/50"
          animate={{ scale: [1, 1.5, 2], opacity: [0.8, 0, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeOut' }}
        />
      </motion.div>

      {/* Scenes */}
      <div className="relative z-20 w-full h-full">
        <AnimatePresence initial={false} mode="wait">
          {SceneComponent && <SceneComponent key={currentSceneKey} />}
        </AnimatePresence>
      </div>
    </div>
  );
}
