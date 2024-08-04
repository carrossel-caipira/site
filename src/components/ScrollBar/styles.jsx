import styled from 'styled-components'

export const height = 80;
export const top = (100 - height) / 2;

export const TrackStyles = styled.div`
  width: 15px;
  height: ${height}vh;
  min-height: 20px;
  border-radius: 100vw;
  background: transparent;
  position: fixed;
  right: 5px;
  top: ${top}vh;
  z-index: 1;
  transition: background ease-in-out 0.2s;

  display: flex;
  justify-content: center;
`

export const ThumbStyles = styled.div`
  width: 6px;
  height: 10vh;
  position: relative;
  min-height: 20px;
  border-radius: 100vw;
  background: rgba(0, 0, 0, 0.3);
  z-index: 2;
  transition: background ease-in-out 0.2s;
  user-select: none;

  &:hover {
    background: rgba(0, 0, 0, 0.5);
    cursor: pointer;
  }
`
