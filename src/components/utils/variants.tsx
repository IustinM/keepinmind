export const hiddenTranslateVariant = (yVal:number) => {
    return({
    hidden: { 
        y:'50%',
        opacity: 0 
    },
    exit: { 
        y:'10%',
        opacity: 0 
    },
    show: {
      opacity: 1,
      y:`${yVal}%`,
      transition: {
        delayChildren: 0.5
      }
    }
  })
}
