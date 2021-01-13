export interface ModuloConfig {
  dimensions: {
    width: number,
    height: number
  },
  fillStyle: string | CanvasGradient | CanvasPattern,
  strokeStyle: string | CanvasGradient | CanvasPattern,
  lineWidth: number,
  scaleFactor: number
}
