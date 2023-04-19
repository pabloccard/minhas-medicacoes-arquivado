import styled from 'styled-components'
import { motion } from 'framer-motion'
export const Slider = styled.div``

export const Container = styled.div`
  padding-left: 1.5rem;
  width: 100%;
`
export const Carousel = styled(motion.div)`
  cursor: grab;
  overflow: hidden;
`

export const Inner = styled(motion.div)`
  display: flex;
  gap: 0.5rem;
  justify-content: center;
  padding-right: 1rem;
`

export const Item = styled(motion.div)`
  /* padding: 0.5rem; */
`
