import React, { useRef } from 'react'
import {
  Canvas,
  useThree,
  useFrame,
  extend,
  useRender,
} from 'react-three-fiber'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { hot } from 'react-hot-loader'

extend({ OrbitControls })

const Controls = props => {
  const { gl, camera } = useThree()
  const ref = useRef()
  useRender(() => ref.current.update())
  return <orbitControls ref={ref} args={[camera, gl.domElement]} {...props} />
}

const Cube = () => {
  const ref = useRef()
  useFrame(() => (ref.current.rotation.x = ref.current.rotation.y += 0.01))
  return (
    <mesh ref={ref}>
      <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
      <meshNormalMaterial attach="material" />
    </mesh>
  )
}

export const App = () => (
  <Canvas>
    <Cube />
    <Controls />
  </Canvas>
)

export default hot(module)(App)
