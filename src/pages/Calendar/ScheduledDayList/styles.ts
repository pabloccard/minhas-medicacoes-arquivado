import styled from 'styled-components'
import { motion } from 'framer-motion'
export const Slider = styled.div``

export const Container = styled.div`
  width: 100%;
`
export const Carousel = styled(motion.div)`
  cursor: grab;
  overflow: hidden;
  padding-left: 1.5rem;
`

export const Inner = styled(motion.div)`
  display: flex;
  align-items: flex-end;
  gap: 0.5rem;

  padding-right: 1rem;
  height: 5.25rem;

  &.justify {
    justify-content: center;
  }
`

export const Item = styled(motion.div)``
