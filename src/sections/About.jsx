import { useState, useRef, useEffect } from 'react';
import Globe from 'react-globe.gl';
import * as THREE from 'three';
import Button from '../components/Button.jsx';
import { skills } from '../constants';
const About = () => {
  const [hasCopied, setHasCopied] = useState(false);
  const [cloudsData, setCloudsData] = useState([]);
  const globeRef = useRef();

  const handleCopy = () => {
    navigator.clipboard.writeText(' belkhirkhouloud@gmail.com');
    setHasCopied(true);

    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };

 useEffect(() => {
 
  const N = 30;
  const newCloudsData = [...Array(N).keys()].map(() => ({
    lat: (Math.random() - 0.5) * 180,
    lng: (Math.random() - 0.5) * 360,
    radius: Math.random() * 5 + 3,
  }));
  setCloudsData(newCloudsData);

  // Auto-rotate the globe and disable zoom
  let animationFrameId;
  const rotateGlobe = () => {
    if (globeRef.current) {
      const controls = globeRef.current.controls();
      
     
      controls.autoRotate = true;
      controls.autoRotateSpeed = 1.5;
      
    
      controls.enableZoom = false;
      controls.enablePan = false; 
      
 
      controls.mouseButtons = {
        LEFT: THREE.MOUSE.ROTATE,
        MIDDLE: THREE.MOUSE.DOLLY, 
        RIGHT: THREE.MOUSE.NONE    
      };
      
      
      controls.touches = {
        ONE: THREE.TOUCH.ROTATE,
        TWO: THREE.TOUCH.DOLLY_PAN 
      };
    }
    animationFrameId = requestAnimationFrame(rotateGlobe);
  };
  rotateGlobe();

  return () => {
    cancelAnimationFrame(animationFrameId); 
  };
}, []);

  return (
    <section className="c-space my-20" id="about">
      <div className="grid xl:grid-cols-3  md:grid-cols-2 grid-cols-1 gap-5 h-full">
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img
              src="assets/photo pro.jpeg"
              alt="grid-1"
              className="w-full h-fit object-contain rounded-2xl"
            />

            <div>
              <p className="grid-headtext">Hi, I’m Kouloud Belkhir</p>
              <p className="grid-subtext">
                A Web developer with a 3 years of experience, specializing in front-end and back-end development. I have
                a passion for creating beautiful and functional web applications that provide an exceptional user
                experience.
              </p>
            </div>
          </div>
        </div>

        <div className="xl:col-span-2 xl:row-span-3">
          <div className="grid-container">
            <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
              <Globe
                ref={globeRef}
                height={400}
                width={400}
                backgroundColor="rgba(0, 0, 0, 0)"
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                cloudsImageUrl="//unpkg.com/three-globe/example/img/earth-clouds.png"
                cloudsAltitude={0.004}
                cloudsData={cloudsData}
                cloudPointColor={() => 'rgba(255, 255, 255, 0.8)'}
                cloudPointRadius={0.5}
                cloudPoints={10000}
                enablePointerInteraction={false}
              />
            </div>
            <div>
              <p className="grid-headtext">I’m very flexible with time zone communications & locations</p>
              <p className="grid-subtext">I&apos;m based in Lille, France and open to remote work worldwide.</p>
              <a href="#contact" className="w-full mt-10 block">
                <Button name="Contact Me" isBeam containerClass="w-full mt-10" />
              </a>
            </div>
          </div>
        </div>

        <div className="xl:col-span-2 xl:row-span-3">
          <div className="grid-container">
            <div>
              
              <div className="mt-10 flex flex-wrap gap-10">
                <p className="grid-headtext">Tech Stack</p>
                <p className="grid-subtext skills_desc">
                 I specialize in a wide range of programming languages, frameworks, and development tools that empower me to build robust, scalable, and high-performance applications. With a deep understanding of both front-end and back-end technologies, I am capable of creating seamless user experiences and optimizing server-side functionality. 
                </p>
              </div>
              <div className="py-10 flex flex-col">
                <div className="mt-16 flex flex-wrap skills_icons">
                  {skills.map((skill) => (
                    <div className="block-container w-16 h-16" key={skill.name}>
                      <div className=" rounded-xl" />
                      <div className="btn-front rounded-xl flex justify-center items-center">
                        <img src={skill.imageUrl} alt={skill.name} className="w-1/2 h-1/2 object-contain" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="xl:col-span-1 xl:row-span-3 h-full">
          <div className="grid-container h-full flex flex-col justify-between">
            {/* First row - Contact */}
            <div className="space-y-2 flex-1 flex flex-col justify-center">
              <p className="grid-subtext text-center">Contact me</p>
              <div className="copy-container" onClick={handleCopy}>
                <img src={hasCopied ? 'assets/tick.svg' : 'assets/copy.svg'} alt="copy" />
                <p className="lg:text-2xl md:text-xl font-medium text-white">belkhirkhouloud@gmail.com</p>
              </div>
            </div>

            {/* Second row - Image */}
            <div className="space-y-2 flex-1 flex items-center justify-center">
              <img src="assets/grid4.png" alt="grid-4" className="w-full max-h-[150px] object-contain" />
            </div>

            {/* Third row - Phone */}
            <div className="space-y-2 flex-1 flex flex-col justify-center">
              <p className="grid-subtext text-center">Call me</p>
              <div className="copy-container" onClick={handleCopy}>
                <img src={hasCopied ? 'assets/tick.svg' : 'assets/copy.svg'} alt="copy" />
                <p className="lg:text-2xl md:text-xl font-medium text-white">+33 06 95 96 33 17</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
