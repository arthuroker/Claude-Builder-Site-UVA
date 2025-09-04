'use client'

import React, { useRef, useEffect, useState, useCallback } from 'react'
import * as THREE from 'three'

interface Claude3DLogoProps {
  width?: number
  height?: number
  className?: string
}

export default function Claude3DLogo({ width = 400, height = 400, className = '' }: Claude3DLogoProps) {
  const mountRef = useRef<HTMLDivElement>(null)
  const sceneRef = useRef<THREE.Scene | null>(null)
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null)
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null)
  const logoGroupRef = useRef<THREE.Group | null>(null)
  const frameRef = useRef<number | null>(null)
  
  const [isInteracting, setIsInteracting] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)
  const [error, setError] = useState<string | null>(null)
  
  const mouseRef = useRef({ x: 0, y: 0 })
  const targetRotationRef = useRef({ x: 0, y: 0 })
  const currentRotationRef = useRef({ x: 0, y: 0 })

  const createClaudeLogo = useCallback(() => {
    const group = new THREE.Group()
    
    // Create the main Claude logo shape - a stylized "C" with depth
    const shape = new THREE.Shape()
    
    // Draw the "C" shape
    const radius = 1.2
    const thickness = 0.3
    const startAngle = Math.PI * 0.2
    const endAngle = Math.PI * 1.8
    
    // Outer curve
    shape.moveTo(Math.cos(startAngle) * radius, Math.sin(startAngle) * radius)
    shape.absarc(0, 0, radius, startAngle, endAngle, false)
    
    // Inner curve
    const innerRadius = radius - thickness
    shape.lineTo(Math.cos(endAngle) * innerRadius, Math.sin(endAngle) * innerRadius)
    shape.absarc(0, 0, innerRadius, endAngle, startAngle, true)
    shape.closePath()
    
    // Extrude the shape to create depth
    const extrudeSettings = {
      depth: 0.4,
      bevelEnabled: true,
      bevelSegments: 8,
      steps: 1,
      bevelSize: 0.05,
      bevelThickness: 0.05,
    }
    
    const geometry = new THREE.ExtrudeGeometry(shape, extrudeSettings)
    
    // Create gradient-like material using vertex colors
    const material = new THREE.MeshPhongMaterial({
      color: 0xcc785c,
      shininess: 100,
      specular: 0x444444,
    })
    
    const logoMesh = new THREE.Mesh(geometry, material)
    logoMesh.position.z = -0.2
    group.add(logoMesh)
    
    // Add inner geometric details
    const detailGeometry = new THREE.RingGeometry(0.3, 0.5, 16)
    const detailMaterial = new THREE.MeshPhongMaterial({
      color: 0xd4a27f,
      transparent: true,
      opacity: 0.8,
    })
    const detailRing = new THREE.Mesh(detailGeometry, detailMaterial)
    detailRing.position.z = 0.1
    group.add(detailRing)
    
    // Add floating particles/dots for extra visual interest
    const particleGeometry = new THREE.SphereGeometry(0.02, 8, 6)
    const particleMaterial = new THREE.MeshPhongMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0.6,
    })
    
    for (let i = 0; i < 12; i++) {
      const particle = new THREE.Mesh(particleGeometry, particleMaterial)
      const angle = (i / 12) * Math.PI * 2
      const distance = 1.8 + Math.random() * 0.4
      particle.position.x = Math.cos(angle) * distance
      particle.position.y = Math.sin(angle) * distance
      particle.position.z = (Math.random() - 0.5) * 0.8
      group.add(particle)
    }
    
    return group
  }, [])

  const handleMouseMove = useCallback((event: MouseEvent | TouchEvent) => {
    if (!mountRef.current) return
    
    const rect = mountRef.current.getBoundingClientRect()
    let clientX: number, clientY: number
    
    if ('touches' in event) {
      clientX = event.touches[0].clientX
      clientY = event.touches[0].clientY
    } else {
      clientX = event.clientX
      clientY = event.clientY
    }
    
    mouseRef.current.x = ((clientX - rect.left) / rect.width) * 2 - 1
    mouseRef.current.y = -((clientY - rect.top) / rect.height) * 2 + 1
    
    // Convert to rotation targets
    targetRotationRef.current.y = mouseRef.current.x * Math.PI * 0.3
    targetRotationRef.current.x = mouseRef.current.y * Math.PI * 0.2
  }, [])

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
    logoGroupRef.current.rotation.y = currentRotationRef.current.y + (isInteracting ? 0 : Date.now() * 0.0005)
    
    // Gentle floating animation
    logoGroupRef.current.position.y = Math.sin(Date.now() * 0.001) * 0.1
    
    // Animate particles
    logoGroupRef.current.children.forEach((child, index) => {
      if (index > 1) { // Skip main logo and detail ring
        const time = Date.now() * 0.001 + index
        child.position.z += Math.sin(time) * 0.01
        child.rotation.z = time * 0.5
      }
    })
    
    rendererRef.current.render(sceneRef.current, cameraRef.current)
    frameRef.current = requestAnimationFrame(animate)
  }, [isInteracting])

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
      camera.position.z = 5
      cameraRef.current = camera

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

      // Add lights
      const ambientLight = new THREE.AmbientLight(0x404040, 0.6)
      scene.add(ambientLight)

      const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8)
      directionalLight.position.set(5, 5, 5)
      directionalLight.castShadow = true
      directionalLight.shadow.mapSize.width = 1024
      directionalLight.shadow.mapSize.height = 1024
      scene.add(directionalLight)

      const pointLight = new THREE.PointLight(0xcc785c, 0.4, 10)
      pointLight.position.set(-3, 0, 3)
      scene.add(pointLight)

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
        {isInteracting ? 'Interactive' : 'Hover to control'}
      </div>
    </div>
  )
}