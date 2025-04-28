import SDLCVisualization from '../../components/LifeCycle/lifeCycle.components';

export default function SkinMamaLifeCycle() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen w-full bg-gray-100 overflow-x-hidden py-8 px-4">
      <div className="w-full max-w-7xl mx-auto">
        <div className="flex w-full justify-center mb-5">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            How Does It <span className="text-primary text-5xl">Work ?</span>
          </h1>
        </div>
        <SDLCVisualization />
      </div>
    </div>
  );
}
