'use client'

import React, { useRef, useEffect, useState, useCallback } from 'react'
import * as THREE from 'three'

interface Claude3DLogoProps {
  width?: number
  height?: number
  className?: string
}

interface RayData {
  mesh: THREE.Mesh
  originalGeometry: THREE.BufferGeometry
  deformationTarget: { x: number, y: number }
  currentDeformation: { x: number, y: number }
  angle: number
  length: number
  hovered: boolean
}

export default function Claude3DLogo({ width = 400, height = 400, className = '' }: Claude3DLogoProps) {
  const mountRef = useRef<HTMLDivElement>(null)
  const sceneRef = useRef<THREE.Scene | null>(null)
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null)
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null)
  const logoGroupRef = useRef<THREE.Group | null>(null)
  const frameRef = useRef<number | null>(null)
  const raycasterRef = useRef<THREE.Raycaster | null>(null)
  
  const [isInteracting, setIsInteracting] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)
  const [error, setError] = useState<string | null>(null)
  
  const mouseRef = useRef(new THREE.Vector2())
  const targetRotationRef = useRef({ x: 0, y: 0 })
  const currentRotationRef = useRef({ x: 0, y: 0 })
  const raysRef = useRef<RayData[]>([])

  const createRayGeometry = useCallback((length: number, baseWidth: number, tipWidth: number) => {
    // Create a custom ray geometry that's much thicker and more authentic
    const geometry = new THREE.BufferGeometry()
    
    // Define ray segments for a more organic, Claude-like shape
    const segments = 12 // More segments for smoother deformation
    const radialSegments = 8
    
    const vertices: number[] = []
    const indices: number[] = []
    const normals: number[] = []
    
    // Create vertices for a tapered cylinder with rounded ends
    for (let i = 0; i <= segments; i++) {
      const t = i / segments
      const y = t * length
      
      // Create a more authentic taper - thicker at base, narrower at tip
      let radius: number
      if (t < 0.1) {
        // Rounded base
        radius = baseWidth * (0.3 + 0.7 * Math.sin(t * Math.PI * 5))
      } else if (t > 0.8) {
        // Tapered tip with slight rounding
        const tipT = (t - 0.8) / 0.2
        radius = baseWidth * (1 - t) + tipWidth * Math.sin(tipT * Math.PI * 0.5)
      } else {
        // Main body with slight variation for organic feel
        radius = baseWidth * (1 - t * 0.7) + tipWidth * t + baseWidth * 0.1 * Math.sin(t * Math.PI * 3)
      }
      
      // Create circular cross-section
      for (let j = 0; j <= radialSegments; j++) {
        const angle = (j / radialSegments) * Math.PI * 2
        const x = Math.cos(angle) * radius
        const z = Math.sin(angle) * radius
        
        vertices.push(x, y, z)
        
        // Calculate normals for proper lighting
        const nx = Math.cos(angle)
        const nz = Math.sin(angle)
        normals.push(nx, 0, nz)
      }
    }
    
    // Create faces
    for (let i = 0; i < segments; i++) {
      for (let j = 0; j < radialSegments; j++) {
        const a = i * (radialSegments + 1) + j
        const b = a + radialSegments + 1
        const c = a + 1
        const d = b + 1
        
        indices.push(a, b, c)
        indices.push(c, b, d)
      }
    }
    
    geometry.setIndex(indices)
    geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3))
    geometry.setAttribute('normal', new THREE.Float32BufferAttribute(normals, 3))
    
    geometry.computeVertexNormals()
    
    return geometry
  }, [])

  const createClaudeLogo = useCallback(() => {
    const group = new THREE.Group()
    const rays: RayData[] = []
    
    // Create the central core - much larger and more prominent
    const coreGeometry = new THREE.SphereGeometry(0.25, 16, 16)
    const coreMaterial = new THREE.MeshPhongMaterial({
      color: 0xcc785c,
      shininess: 100,
    })
    const core = new THREE.Mesh(coreGeometry, coreMaterial)
    core.position.set(0, 0, 0)
    group.add(core)
    
    // Create 16 rays in the starburst pattern with much thicker proportions
    const rayCount = 16
    const rayMaterial = new THREE.MeshPhongMaterial({
      color: 0xd97757,
      shininess: 60,
      specular: 0x444444,
    })
    
    for (let i = 0; i < rayCount; i++) {
      // Create irregular angles like in the Claude logo - not perfectly uniform
      const baseAngle = (i / rayCount) * Math.PI * 2
      const angleVariation = (Math.sin(i * 1.1) * 0.15) + (Math.cos(i * 0.8) * 0.1)
      const angle = baseAngle + angleVariation
      
      // Vary ray lengths significantly to match Claude logo's very irregular pattern
      const baseLength = 1.3
      const lengthVariation = 0.5 + Math.sin(i * 0.9) * 0.3 + Math.cos(i * 1.7) * 0.25 + Math.sin(i * 2.3) * 0.15
      const rayLength = baseLength + lengthVariation
      
      // Much thicker rays with varied proportions for authenticity
      const baseRayWidth = 0.16 + Math.sin(i * 0.6) * 0.06 + Math.cos(i * 1.2) * 0.04
      const tipRayWidth = 0.015 + Math.sin(i * 0.4) * 0.012
      
      const rayGeometry = createRayGeometry(rayLength, baseRayWidth, tipRayWidth)
      const rayMesh = new THREE.Mesh(rayGeometry.clone(), rayMaterial.clone())
      
      // Position and rotate the ray with slight random offset for organic feel
      const offsetX = Math.sin(i * 0.3) * 0.02
      const offsetY = Math.cos(i * 0.7) * 0.02
      rayMesh.position.set(offsetX, offsetY, 0)
      rayMesh.rotation.z = angle - Math.PI / 2 // Rotate to point outward
      
      // Store ray data for interaction
      const rayData: RayData = {
        mesh: rayMesh,
        originalGeometry: rayGeometry.clone(),
        deformationTarget: { x: 0, y: 0 },
        currentDeformation: { x: 0, y: 0 },
        angle,
        length: rayLength,
        hovered: false
      }
      
      rays.push(rayData)
      group.add(rayMesh)
    }
    
    raysRef.current = rays
    return group
  }, [createRayGeometry])

  const deformRay = useCallback((ray: RayData, deformationAmount: number) => {
    const geometry = ray.originalGeometry.clone()
    const positionAttribute = geometry.getAttribute('position')
    
    if (positionAttribute) {
      const positions = positionAttribute.array as Float32Array
      const vertices = []
      
      for (let i = 0; i < positions.length; i += 3) {
        vertices.push(new THREE.Vector3(positions[i], positions[i + 1], positions[i + 2]))
      }
      
      // Apply putty-like deformation based on vertex distance from tip
      vertices.forEach((vertex, index) => {
        const distanceFromBase = vertex.y / ray.length
        const deformationFactor = Math.pow(distanceFromBase, 2) * deformationAmount
        
        // Apply sine wave deformation for organic feel
        vertex.x += Math.sin(distanceFromBase * Math.PI * 2) * deformationFactor * 0.1
        vertex.z += Math.cos(distanceFromBase * Math.PI * 3) * deformationFactor * 0.05
        
        // Bend the ray
        const bendAmount = deformationFactor * 0.3
        vertex.x += bendAmount * ray.currentDeformation.x
        vertex.y += Math.sin(bendAmount) * Math.abs(ray.currentDeformation.y) * 0.2
      })
      
      // Update geometry
      const newPositions = new Float32Array(vertices.length * 3)
      vertices.forEach((vertex, index) => {
        newPositions[index * 3] = vertex.x
        newPositions[index * 3 + 1] = vertex.y
        newPositions[index * 3 + 2] = vertex.z
      })
      
      geometry.setAttribute('position', new THREE.BufferAttribute(newPositions, 3))
      geometry.computeVertexNormals()
      
      ray.mesh.geometry.dispose()
      ray.mesh.geometry = geometry
    }
  }, [])

  const handleMouseMove = useCallback((event: MouseEvent | TouchEvent) => {
    if (!mountRef.current || !raycasterRef.current || !cameraRef.current) return
    
    const rect = mountRef.current.getBoundingClientRect()
    let clientX: number, clientY: number
    
    if ('touches' in event) {
      clientX = event.touches[0].clientX
      clientY = event.touches[0].clientY
    } else {
      clientX = event.clientX
      clientY = event.clientY
    }
    
    mouseRef.current.setX(((clientX - rect.left) / rect.width) * 2 - 1)
    mouseRef.current.setY(-((clientY - rect.top) / rect.height) * 2 + 1)
    
    // Raycast to detect ray interactions
    raycasterRef.current.setFromCamera(mouseRef.current, cameraRef.current)
    
    if (logoGroupRef.current) {
      const rayMeshes = raysRef.current.map(ray => ray.mesh)
      const intersects = raycasterRef.current.intersectObjects(rayMeshes)
      
      // Reset all rays hover state
      raysRef.current.forEach(ray => {
        ray.hovered = false
        const material = ray.mesh.material as THREE.MeshPhongMaterial
        material.color.setHex(0xd97757) // Default color
      })
      
      if (intersects.length > 0) {
        setIsInteracting(true)
        const intersectedRay = raysRef.current.find(ray => ray.mesh === intersects[0].object)
        
        if (intersectedRay) {
          intersectedRay.hovered = true
          const material = intersectedRay.mesh.material as THREE.MeshPhongMaterial
          material.color.setHex(0xff6b4a) // Hover color
          
          // Set deformation targets based on mouse position
          const strength = 1.0
          intersectedRay.deformationTarget.x = mouseRef.current.x * strength
          intersectedRay.deformationTarget.y = mouseRef.current.y * strength
        }
      } else {
        // General rotation when not hovering over specific rays
        targetRotationRef.current.y = mouseRef.current.x * Math.PI * 0.2
        targetRotationRef.current.x = mouseRef.current.y * Math.PI * 0.1
      }
    }
  }, [deformRay])

  const handleMouseEnter = useCallback(() => {
    setIsInteracting(true)
  }, [])

  const handleMouseLeave = useCallback(() => {
    setIsInteracting(false)
    // Reset to gentle auto-rotation
    targetRotationRef.current.x = 0
    targetRotationRef.current.y = 0
  }, [])

  const animate = useCallback(() => {
    if (!sceneRef.current || !rendererRef.current || !cameraRef.current || !logoGroupRef.current) {
      return
    }
    
    // Smooth rotation interpolation
    const lerpFactor = 0.05
    currentRotationRef.current.x += (targetRotationRef.current.x - currentRotationRef.current.x) * lerpFactor
    currentRotationRef.current.y += (targetRotationRef.current.y - currentRotationRef.current.y) * lerpFactor
    
    // Apply rotations
    logoGroupRef.current.rotation.x = currentRotationRef.current.x
    logoGroupRef.current.rotation.y = currentRotationRef.current.y + (isInteracting ? 0 : Date.now() * 0.0003)
    
    // Gentle floating animation
    logoGroupRef.current.position.y = Math.sin(Date.now() * 0.001) * 0.05
    
    // Update ray deformations with smooth interpolation
    raysRef.current.forEach(ray => {
      const deformLerpFactor = ray.hovered ? 0.08 : 0.03
      
      // Smooth deformation interpolation
      ray.currentDeformation.x += (ray.deformationTarget.x - ray.currentDeformation.x) * deformLerpFactor
      ray.currentDeformation.y += (ray.deformationTarget.y - ray.currentDeformation.y) * deformLerpFactor
      
      // Apply deformation if there's any
      const totalDeformation = Math.abs(ray.currentDeformation.x) + Math.abs(ray.currentDeformation.y)
      if (totalDeformation > 0.01) {
        deformRay(ray, totalDeformation)
      }
      
      // Reset deformation target when not hovered
      if (!ray.hovered) {
        const resetSpeed = 0.02
        ray.deformationTarget.x *= (1 - resetSpeed)
        ray.deformationTarget.y *= (1 - resetSpeed)
      }
      
      // Add subtle wave animation to non-hovered rays
      if (!ray.hovered) {
        const time = Date.now() * 0.001
        const waveAmount = 0.05
        ray.currentDeformation.x += Math.sin(time + ray.angle * 3) * waveAmount * 0.1
        ray.currentDeformation.y += Math.cos(time + ray.angle * 2) * waveAmount * 0.05
      }
    })
    
    rendererRef.current.render(sceneRef.current, cameraRef.current)
    frameRef.current = requestAnimationFrame(animate)
  }, [isInteracting, deformRay])

  useEffect(() => {
    if (!mountRef.current) return

    // Check WebGL support
    const canvas = document.createElement('canvas')
    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl')
    if (!gl) {
      setError('WebGL not supported')
      return
    }

    try {
      // Create scene
      const scene = new THREE.Scene()
      scene.background = null // Transparent background
      sceneRef.current = scene

      // Create camera
      const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 1000)
      camera.position.z = 4
      cameraRef.current = camera

      // Create raycaster for interaction
      const raycaster = new THREE.Raycaster()
      raycasterRef.current = raycaster

      // Create renderer with performance optimizations
      const renderer = new THREE.WebGLRenderer({ 
        alpha: true, 
        antialias: window.devicePixelRatio <= 1,
        powerPreference: 'high-performance',
        stencil: false,
        depth: true,
      })
      renderer.setSize(width, height)
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
      renderer.shadowMap.enabled = true
      renderer.shadowMap.type = THREE.PCFSoftShadowMap
      rendererRef.current = renderer

      // Add lights optimized for the starburst
      const ambientLight = new THREE.AmbientLight(0x404040, 0.4)
      scene.add(ambientLight)

      const directionalLight = new THREE.DirectionalLight(0xffffff, 1.0)
      directionalLight.position.set(3, 3, 5)
      directionalLight.castShadow = true
      directionalLight.shadow.mapSize.width = 2048
      directionalLight.shadow.mapSize.height = 2048
      scene.add(directionalLight)

      // Add rim lighting for dramatic effect
      const rimLight1 = new THREE.DirectionalLight(0xff6b4a, 0.3)
      rimLight1.position.set(-5, 0, 3)
      scene.add(rimLight1)

      const rimLight2 = new THREE.DirectionalLight(0xd4a27f, 0.2)
      rimLight2.position.set(0, -5, 3)
      scene.add(rimLight2)

      // Create and add the Claude logo
      const logoGroup = createClaudeLogo()
      logoGroupRef.current = logoGroup
      scene.add(logoGroup)

      // Mount renderer
      mountRef.current.appendChild(renderer.domElement)

      // Start animation
      animate()
      setIsLoaded(true)

    } catch (err) {
      console.error('Error initializing 3D Claude logo:', err)
      setError('Failed to load 3D logo')
    }

    // Event listeners
    const currentMount = mountRef.current
    if (currentMount) {
      currentMount.addEventListener('mousemove', handleMouseMove)
      currentMount.addEventListener('touchmove', handleMouseMove, { passive: false })
      currentMount.addEventListener('mouseenter', handleMouseEnter)
      currentMount.addEventListener('mouseleave', handleMouseLeave)
    }

    // Cleanup
    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current)
      }
      
      if (currentMount) {
        currentMount.removeEventListener('mousemove', handleMouseMove)
        currentMount.removeEventListener('touchmove', handleMouseMove)
        currentMount.removeEventListener('mouseenter', handleMouseEnter)
        currentMount.removeEventListener('mouseleave', handleMouseLeave)
      }

      if (rendererRef.current && currentMount) {
        currentMount.removeChild(rendererRef.current.domElement)
        rendererRef.current.dispose()
      }

      // Clean up geometries and materials
      if (logoGroupRef.current) {
        logoGroupRef.current.traverse((object) => {
          if (object instanceof THREE.Mesh) {
            object.geometry.dispose()
            if (Array.isArray(object.material)) {
              object.material.forEach(material => material.dispose())
            } else {
              object.material.dispose()
            }
          }
        })
      }
    }
  }, [width, height, createClaudeLogo, animate, handleMouseMove, handleMouseEnter, handleMouseLeave])

  if (error) {
    return (
      <div className={`flex items-center justify-center ${className}`} style={{ width, height }}>
        <div className="text-center text-gray-500">
          <p>3D Logo unavailable</p>
          <p className="text-sm">Falling back to 2D version</p>
        </div>
      </div>
    )
  }

  return (
    <div className={`relative ${className}`}>
      <div
        ref={mountRef}
        className="cursor-pointer"
        style={{ width, height }}
      />
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="animate-spin w-8 h-8 border-2 border-coral border-t-transparent rounded-full"></div>
        </div>
      )}
      <div className="absolute bottom-2 right-2 text-xs text-gray-400 opacity-50">
        {isInteracting ? 'Deforming ray' : 'Hover rays to deform'}
      </div>
    </div>
  )
}