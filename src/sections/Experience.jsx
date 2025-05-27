import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

import Developer from '../components/Developer.jsx';
import CanvasLoader from '../components/Loading.jsx';
import { workExperiences } from '../constants/index.js';

const WorkExperience = () => {
  return (
    <section className="c-space my-20" id="work">
      <div className="w-full text-black-300">
        <p className="head-text">My Work Experience</p>

        <div className="work-container">
          <div className="work-canvas">
            <Canvas camera={{ position: [0, 2, 5], fov: 35 }} className='khouloud-canvas'>
              <ambientLight intensity={1} />
              <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
              <directionalLight position={[10, 10, 10]} intensity={1} />

              <Suspense fallback={<CanvasLoader />}>
                <group rotation={[2, Math.PI, 3.1]}>
                  {/* Rotates the whole model 180° to face camera */}
                  <Developer position={[0, -1, 0]} scale={1.3} />
                </group>
              </Suspense>

              <OrbitControls
                target={[0, 0.5, 0]} // Looks at chest/head height
                enableZoom={false}
                minPolarAngle={Math.PI / 2.2} // ≈ 45°
                maxPolarAngle={Math.PI / 3} // ≈ 86°, avoids top view
              />
            </Canvas>
          </div>

          <div className="work-content ">
            <div className="sm:py-10 py-5 sm:px-5 px-2.5 ">
              {workExperiences.map((item, index) => (
                <div
                  key={index}
                  className="work-content_container group group hover:bg-gray-200 transition-all duration-200 p-2">
                  <div className="flex flex-col h-full justify-start items-center py-2">
                    <div className="work-content_logo">
                      <img className="w-full h-full" src={item.icon} alt="" />
                    </div>

                    <div className="work-content_bar" />
                  </div>

                  <div className="sm:p-5 px-2.5 py-5 ">
                    <p className=" group-hover:text-black font-bold text-white">{item.name}</p>
                    <p className="text-sm mb-5 text-gray-300 group-hover:text-black">
                      {item.pos} -- <span>{item.duration}</span>
                    </p>
                    <p className="group-hover:text-black transition-all ease-in-out duration-50 text-white">
                      {item.title}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
