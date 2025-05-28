import { useEffect, useRef, useState, useMemo } from 'react';
import { useGraph } from '@react-three/fiber';
import { useAnimations, useFBX, useGLTF } from '@react-three/drei';
import { SkeletonUtils } from 'three-stdlib';
import * as THREE from 'three';

const Developer = (props) => {
  const group = useRef();
  const [currentAnimationIndex, setCurrentAnimationIndex] = useState(0);

  // Load model
  const { scene } = useGLTF('/models/animations/girl.glb');
  const clone = useMemo(() => SkeletonUtils.clone(scene), [scene]);
  useGraph(clone); 
  const { nodes, materials } = useGraph(clone);
  const wave = useFBX('/models/animations/Wave.fbx');
  const salute = useFBX('/models/animations/Salute.fbx');
  const dance = useFBX('/models/animations/dance.fbx');

  const animations = useMemo(() => {
    const clips = [];
    if (wave.animations[0]) {
      wave.animations[0].name = 'wave';
      clips.push(wave.animations[0]);
    }
    if (dance.animations[0]) {
      dance.animations[0].name = 'macarena dance';
      clips.push(dance.animations[0]);
    }
    if (salute.animations[0]) {
      salute.animations[0].name = 'salute';
      clips.push(salute.animations[0]);
    }

    return clips;
  }, [wave, dance, salute]);

  const { actions } = useAnimations(animations, group);
  console.log('actions', actions);

  useEffect(() => {
    if (!actions || animations.length === 0) return;

    let timeout;
    const currentClip = animations[currentAnimationIndex];
    const currentAction = actions[currentClip.name];

    if (currentAction) {
      // Play the animation once, no fadeOut
      currentAction
        .reset()
        .setEffectiveTimeScale(1)
        .setEffectiveWeight(1)
        .setLoop(THREE.LoopOnce, 1).clampWhenFinished = true;

      currentAction.play();

      timeout = setTimeout(() => {
        // Skip fadeOut for smoother transition
        setCurrentAnimationIndex((prev) => (prev + 1) % animations.length);
      }, currentClip.duration * 1000);
    }

    return () => {
      clearTimeout(timeout);
      if (currentAction) {
        currentAction.stop(); 
      }
    };
  }, [currentAnimationIndex, animations, actions]);

  return (
    <group {...props} dispose={null} ref={group}>
      <primitive object={nodes.Hips} />
      <skinnedMesh
        name="EyeLeft"
        geometry={nodes.EyeLeft.geometry}
        material={materials.Wolf3D_Eye}
        skeleton={nodes.EyeLeft.skeleton}
        morphTargetDictionary={nodes.EyeLeft.morphTargetDictionary}
        morphTargetInfluences={nodes.EyeLeft.morphTargetInfluences}
      />
      <skinnedMesh
        name="EyeRight"
        geometry={nodes.EyeRight.geometry}
        material={materials.Wolf3D_Eye}
        skeleton={nodes.EyeRight.skeleton}
        morphTargetDictionary={nodes.EyeRight.morphTargetDictionary}
        morphTargetInfluences={nodes.EyeRight.morphTargetInfluences}
      />
      <skinnedMesh
        name="Wolf3D_Head"
        geometry={nodes.Wolf3D_Head.geometry}
        material={materials.Wolf3D_Skin}
        skeleton={nodes.Wolf3D_Head.skeleton}
        morphTargetDictionary={nodes.Wolf3D_Head.morphTargetDictionary}
        morphTargetInfluences={nodes.Wolf3D_Head.morphTargetInfluences}
      />
      <skinnedMesh
        name="Wolf3D_Teeth"
        geometry={nodes.Wolf3D_Teeth.geometry}
        material={materials.Wolf3D_Teeth}
        skeleton={nodes.Wolf3D_Teeth.skeleton}
        morphTargetDictionary={nodes.Wolf3D_Teeth.morphTargetDictionary}
        morphTargetInfluences={nodes.Wolf3D_Teeth.morphTargetInfluences}
      />
      <skinnedMesh
        geometry={nodes.Wolf3D_Hair.geometry}
        material={materials.Wolf3D_Hair}
        skeleton={nodes.Wolf3D_Hair.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Wolf3D_Body.geometry}
        material={materials.Wolf3D_Body}
        skeleton={nodes.Wolf3D_Body.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Wolf3D_Outfit_Bottom.geometry}
        material={materials.Wolf3D_Outfit_Bottom}
        skeleton={nodes.Wolf3D_Outfit_Bottom.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Wolf3D_Outfit_Footwear.geometry}
        material={materials.Wolf3D_Outfit_Footwear}
        skeleton={nodes.Wolf3D_Outfit_Footwear.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Wolf3D_Outfit_Top.geometry}
        material={materials.Wolf3D_Outfit_Top}
        skeleton={nodes.Wolf3D_Outfit_Top.skeleton}
      />
    </group>
  );
};

useGLTF.preload('/models/animations/girl.glb');

export default Developer;
