import React from 'react'
import { useRef, useEffect, useState } from 'react'
import { TrackStyles, ThumbStyles, top, height } from './styles.jsx'

// global scroll only for now
function ScrollBar(props) {
  const scrollRef = useRef(null);
  const [scroll, setScroll] = useState(0);
  const maxScroll = document.documentElement.scrollHeight;
  const [isDragging, setIsDragging] = useState(false);
  const [startingY, setStartingY] = useState(0);

  document.addEventListener('scroll', () => setScroll(document.documentElement.scrollTop));

  useEffect(() => {
    scrollRef.current.style.top = height*scroll/maxScroll + 'vh';
  }, [scroll])

  function handleTrackClick(e) {
    if (e.target == scrollRef.current) return;

    const newScroll = maxScroll*(100/height)*((e.nativeEvent.offsetY)/window.innerHeight);
    setScroll(newScroll);
    document.documentElement.scrollTop = newScroll;
  };

  function handleThumbMouseMove(e) {
    e.preventDefault();
    if (!isDragging) return;

    const deltaY = e.clientY - startingY;

    let newScroll = Math.min(maxScroll - window.innerHeight, scroll+ maxScroll*(100/height)*(deltaY/window.innerHeight));
    newScroll = Math.max(0, newScroll);
    setScroll(newScroll);
    document.documentElement.scrollTop = newScroll;
  };

  function handleMouseUp() {
    setIsDragging(false);
  }

  function handleThumbMouseDown(e) {
    setIsDragging(true);
    setStartingY(e.clientY);
  }

  useEffect(() => {
    document.addEventListener('mousemove', handleThumbMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
    return () => {
      document.removeEventListener('mousemove', handleThumbMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    }
  }, [isDragging, startingY])

  return (
    <TrackStyles onClick={handleTrackClick} >
      <ThumbStyles ref={scrollRef} onMouseDown={handleThumbMouseDown} />
    </TrackStyles>
  )
}

export default ScrollBar;
