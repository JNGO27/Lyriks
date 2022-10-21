import React, { useState, useEffect, useRef } from 'react'

import { Container, SliderContainer, ProgressBarCover, Thumb, AudioInputSlider } from './styles';

const SeekBar = ({ value, min, max, onChange, percentage = 0 }) => {
  const [position, setPosition] = useState(0);
  const [marginLeft, setMarginLeft] = useState(0);
  const [progressBarWidth, setProgressBarWidth] = useState(0);
  
  const rangeRef = useRef();
  const thumbRef = useRef();
  
  const getTime = (time) => `${Math.floor(time / 60)}:${(`0${Math.floor(time % 60)}`).slice(-2)}`; 
  
  useEffect(() => {
    const rangeWidth = rangeRef.current.getBoundingClientRect().width;
    const thumbWidth = thumbRef.current.getBoundingClientRect().width;
    const centerThumb = (thumbWidth/100) * percentage * -1;
    const centerProgressBar = thumbWidth + rangeWidth/100 * percentage - (thumbWidth/100 * percentage);
    
    setPosition(percentage);
    setMarginLeft(centerThumb);
    setProgressBarWidth(centerProgressBar);
  }, [percentage]);
  
  return (
    <Container>
      <p>{value === 0 ? '0:00' : getTime(value)}</p>
      <SliderContainer>
        <ProgressBarCover progressBarWidth={progressBarWidth} />
        
        <Thumb ref={thumbRef} left={position} marginLeft={marginLeft} /> 
        
        
        <AudioInputSlider 
          type="range"
          step="any"
          value={position}
          min={min}
          max={max}
          onChange={onChange}
          ref={rangeRef}
        />
          
      </SliderContainer>
      <p>{max === 0 ? '0:00' : getTime(max)}</p>
    </Container>
  )
}

export default SeekBar