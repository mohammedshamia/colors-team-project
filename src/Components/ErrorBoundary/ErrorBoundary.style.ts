import styled from 'styled-components'

export const ErrorImageOverlay = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 60vh;
  justify-content: center;
  width: 100%;
`

export const ErrorImageContainer = styled('div')<{ imageUrl: string }>`
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
  background-position: center;
  background-size: cover;
  display: inline-block;
  height: 40vh;
  width: 40vh;
`

export const ErrorImageText = styled.h2`
  color: #2f8e89;
  font-size: 28px;
`
