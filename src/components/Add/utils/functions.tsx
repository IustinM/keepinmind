export const gradientGenerator = (element:any) => {
    switch(element.feelings[0].type.toLowerCase()){
        case 'sadness':
            return 'linear-gradient(157deg, rgba(9,9,121,1) 31%, rgba(0,142,255,1) 100%)';
        case 'happiness':
            return 'linear-gradient(157deg, rgba(204,84,10,1) 16%, rgba(255,248,0,1) 100%)';
        case  'admiration':
            return 'linear-gradient(157deg, rgba(47,138,0,1) 16%, rgba(66,255,31,1) 100%)';
        case 'fear':
            return 'linear-gradient(157deg, rgba(0,0,0,1) 16%, rgba(133,133,133,1) 100%)';
        case 'pleasure':
            return 'linear-gradient(157deg, rgba(139,21,149,1) 16%, rgba(255,0,121,1) 100%)';
        default :
            return 'linear-gradient(157deg, rgba(255,0,0,1) 16%, rgba(255,175,0,1) 100%)';
        }
}
