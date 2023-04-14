import * as Dialog from '@radix-ui/react-dialog'

import styled from 'styled-components'

export const DialogTrigger = styled(Dialog.Trigger)`
  background: ${(props) => props.theme['green-600']};
  border-radius: 100px;

  color: ${(props) => props.theme['gray-100']};
  font-weight: 700;
  font-size: 0.875rem;
  line-height: 1.5rem;
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
  padding: 2.5rem;

  background-color: ${(props) => props.theme['gray-700']};
  border-radius: 6px;

  position: fixed;
  top: 10%;
  left: 50%;
  transform: translateX(-50%);

  width: 90vw;
  max-width: 400px;

  h2 {
    color: ${(props) => props.theme['gray-200']};
    font-size: 1.5rem;
    margin-bottom: 2.5rem;
    text-align: center;
  }

  animation: contentShow 500ms cubic-bezier(0.16, 1, 0.3, 1);

  @keyframes contentShow {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`

export const DialogClose = styled(Dialog.Close)`
  border: none;
  border-radius: 100%;
  height: 1.5rem;
  width: 1.5rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  position: absolute;
  color: ${(props) => props.theme['gray-200']};
  top: 10px;
  right: 10px;
  font-size: 1rem;
`
