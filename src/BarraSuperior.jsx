import { React, useRef, useEffect } from "react";
import * as THREE from "three";
import { Navbar, Nav, Container } from "react-bootstrap";
import cubeTexture from './assets/Rlogo_Texture.jpg'

function BarraSuperior() {
  const containerRef = useRef();

  useEffect(() => {
    let renderer, scene, camera, cube;

    // create renderer
    renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(70, 70);
    containerRef.current.appendChild(renderer.domElement);

    // create scene
    scene = new THREE.Scene();

    // create camera
    camera = new THREE.PerspectiveCamera(
      75,
      70 / 70,
      0.1,
      1000
    );
    camera.position.z = 5;

    // create cube
    const geometry = new THREE.BoxGeometry(3.5, 3.5, 3.5);
    const textureLoader = new THREE.TextureLoader();
    const texture = textureLoader.load(cubeTexture);
    const material = new THREE.MeshBasicMaterial({ map: texture });
    cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    // animate cube
    const animate = () => {
      requestAnimationFrame(animate);
      //cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      renderer.render(scene, camera);
    };
    animate();

    // handle window resizing
    const handleResize = () => {
      const width = 70;
      const height = 70;
      renderer.setSize(width, height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };
    window.addEventListener("resize", handleResize);

    // clean up on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
      containerRef.current.removeChild(renderer.domElement);
      // //renderer.dispose();
      // //scene.dispose();
      // camera = null;
      // cube = null;
    };
  }, []);

  return (
    <Navbar bg="secondary" variant="dark" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#home">
          <div ref={containerRef}>
            {/* <a href="#home">Home</a> */}
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="opciones" />
        <Navbar.Collapse id="opciones">
          <Nav className="mr-auto justify-content-end">
            <Nav.Link href="#about">About Me</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BarraSuperior;
