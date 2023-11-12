export const variants = {
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
      y:'0%',
      transition: {
        delayChildren: 0.5
      }
    }
  }