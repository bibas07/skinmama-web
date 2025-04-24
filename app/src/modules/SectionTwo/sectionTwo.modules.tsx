import SDLCVisualization from '../../components/LifeCycle/lifeCycle.components';

export default function SkinMamaLifeCycle() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen w-full bg-gray-100 overflow-x-hidden py-8 px-4">
      <div className="w-full max-w-7xl mx-auto">
        <SDLCVisualization />
      </div>
    </div>
  );
}
