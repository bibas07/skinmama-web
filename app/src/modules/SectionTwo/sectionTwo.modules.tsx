// pages/index.tsx

import SDLCVisualization from '../../components/LifeCycle/lifeCycle.components';

// const steps = [
//   { label: 'Idea' },
//   { label: 'Design' },
//   { label: 'Develop' },
//   { label: 'Test' },
//   { label: 'Deploy' },
// ];

export default function SkinMamaLifeCycle() {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <SDLCVisualization />
    </div>
  );
}
