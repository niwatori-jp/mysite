'use strict';
{
  
  // main height
  const background = document.querySelector('#background');
  const mainContents = document.querySelector('.main-contents');
  
  function adjustWrapperHeight() {
    const mainHeight = mainContents.scrollHeight;
    background.style.height = `${mainHeight}px`;
  }
  
  // mainContents.addEventListener('scroll', () => {
  //   const scrollRatio = mainContents.scrollTop / (mainContents.scrollHeight - mainContents.clientHeight);
  //   background.style.transform = `translateY(${-scrollRatio * 2 * (background.scrollHeight - mainContents.clientHeight)}px)`;
  // });

  // resize event
  window.addEventListener('resize', adjustWrapperHeight);

  // execution
  adjustWrapperHeight();

}