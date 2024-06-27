import type { Props } from './model'

export const IconGithub = ({
  width = '36px',
  className = '',
  style = ''
}: Props = {}): SVGSVGElement => {
  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
  svg.setAttribute('viewBox', '0 0 20 20')
  svg.setAttribute('version', '1.1')
  svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg')
  svg.setAttribute('xmlns:xlink', 'http://www.w3.org/1999/xlink')
  
  svg.setAttribute('width', width)
  svg.setAttribute('class', className)
  svg.setAttribute('style', style)

  // Create groups
  const bgCarrier = document.createElementNS('http://www.w3.org/2000/svg', 'g')
  bgCarrier.setAttribute('id', 'SVGRepo_bgCarrier')
  bgCarrier.setAttribute('stroke-width', '0')

  const tracerCarrier = document.createElementNS(
    'http://www.w3.org/2000/svg',
    'g'
  )
  tracerCarrier.setAttribute('id', 'SVGRepo_tracerCarrier')
  tracerCarrier.setAttribute('stroke-linecap', 'round')
  tracerCarrier.setAttribute('stroke-linejoin', 'round')

  const iconCarrier = document.createElementNS(
    'http://www.w3.org/2000/svg',
    'g'
  )
  iconCarrier.setAttribute('id', 'SVGRepo_iconCarrier')

  // Create title and desc elements

  const desc = document.createElementNS('http://www.w3.org/2000/svg', 'desc')
  desc.textContent = 'Created with Sketch.'

  // Create groups inside SVGRepo_iconCarrier
  const pageGroup = document.createElementNS('http://www.w3.org/2000/svg', 'g')
  pageGroup.setAttribute('id', 'Page-1')
  pageGroup.setAttribute('stroke', 'none')
  pageGroup.setAttribute('stroke-width', '1')
  pageGroup.setAttribute('fill', '')
  pageGroup.setAttribute('fill-rule', 'evenodd')

  const dribbbleGroup = document.createElementNS(
    'http://www.w3.org/2000/svg',
    'g'
  )
  dribbbleGroup.setAttribute('id', 'Dribbble-Light-Preview')
  dribbbleGroup.setAttribute(
    'transform',
    'translate(-140.000000, -7559.000000)'
  )
  dribbbleGroup.setAttribute('fill', '')

  const iconsGroup = document.createElementNS('http://www.w3.org/2000/svg', 'g')
  iconsGroup.setAttribute('id', 'icons')
  iconsGroup.setAttribute('transform', 'translate(56.000000, 160.000000)')

  // Create path element
  const path = document.createElementNS('http://www.w3.org/2000/svg', 'path')
  path.setAttribute(
    'd',
    'M94,7399 C99.523,7399 104,7403.59 104,7409.253 C104,7413.782 101.138,7417.624 97.167,7418.981 C96.66,7419.082 96.48,7418.762 96.48,7418.489 C96.48,7418.151 96.492,7417.047 96.492,7415.675 C96.492,7414.719 96.172,7414.095 95.813,7413.777 C98.04,7413.523 100.38,7412.656 100.38,7408.718 C100.38,7407.598 99.992,7406.684 99.35,7405.966 C99.454,7405.707 99.797,7404.664 99.252,7403.252 C99.252,7403.252 98.414,7402.977 96.505,7404.303 C95.706,7404.076 94.85,7403.962 94,7403.958 C93.15,7403.962 92.295,7404.076 91.497,7404.303 C89.586,7402.977 88.746,7403.252 88.746,7403.252 C88.203,7404.664 88.546,7405.707 88.649,7405.966 C88.01,7406.684 87.619,7407.598 87.619,7408.718 C87.619,7412.646 89.954,7413.526 92.175,7413.785 C91.889,7414.041 91.63,7414.493 91.54,7415.156 C90.97,7415.418 89.522,7415.871 88.63,7414.304 C88.63,7414.304 88.101,7413.319 87.097,7413.247 C87.097,7413.247 86.122,7413.234 87.029,7413.87 C87.029,7413.87 87.684,7414.185 88.139,7415.37 C88.139,7415.37 88.726,7417.2 91.508,7416.58 C91.513,7417.437 91.522,7418.245 91.522,7418.489 C91.522,7418.76 91.338,7419.077 90.839,7418.982 C86.865,7417.627 84,7413.783 84,7409.253 C84,7403.59 88.478,7399 94,7399'
  ) // Add the actual path data here
  path.setAttribute('id', 'github-[#ffffff142]')

  // Append elements to the SVG
  svg.appendChild(bgCarrier)
  svg.appendChild(tracerCarrier)
  svg.appendChild(iconCarrier)
  iconCarrier.appendChild(desc)
  iconCarrier.appendChild(pageGroup)
  pageGroup.appendChild(dribbbleGroup)
  dribbbleGroup.appendChild(iconsGroup)
  iconsGroup.appendChild(path)

  // Append the SVG to a target element in your HTML
  return svg
}
