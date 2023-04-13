import * as Dialog from '@radix-ui/react-dialog'

import styled from 'styled-components'

export const DialogTrigger = styled(Dialog.Trigger)`
  background: ${(props) => props.theme['green-600']};
  border-radius: 100px;

  color: ${(props) => props.theme['gray-100']};
  font-weight: 700;
  font-size: 0.875rem;
  line-height: 23px;
  border: 0;
  cursor: pointer;

  padding: 0.75rem 1.75rem;
`

export const DialogOverlay = styled(Dialog.Overlay)`
  background-color: rgb(1, 1, 1, 0.9);
  position: fixed;
  inset: 0;

  animation: overlayShow 500ms cubic-bezier(0.16, 1, 0.3, 1);

  @keyframes overlayShow {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`
export const DialogContent = styled(Dialog.Content)`
  padding: 25px;

  background-color: ${(props) => props.theme['gray-700']};
  border-radius: 6px;

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 90vw;
  max-width: 380px;
  max-height: 85vh;

  h2 {
    color: ${(props) => props.theme['gray-200']};
    margin-bottom: 2rem;
  }

  animation: contentShow 500ms cubic-bezier(0.16, 1, 0.3, 1);

  @keyframes contentShow {
    from {
      opacity: 0;
      transform: translate(-50%, -48%) scale(0.96);
    }
    to {
      opacity: 1;
      transform: translate(-50%, -50%) scale(1);
    }
  }
`

export const DialogClose = styled(Dialog.Close)`
  border: none;
  border-radius: 100%;
  height: 25px;
  width: 25px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  position: absolute;
  color: ${(props) => props.theme['gray-200']};
  top: 10px;
  right: 10px;
`
