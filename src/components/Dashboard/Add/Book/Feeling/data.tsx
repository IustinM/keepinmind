import { v4 as uuid } from 'uuid';

export const feelingList = [
    {type:'Sadness',color:'#002791',id:uuid()},
    {type:'Happiness',color:'#edd91f',id:uuid()},
    {type:'Admiration',color:'#8bcf42',id:uuid()},
    {type:'Fear',color:'#141414',id:uuid()},
    {type:'Pleasure',color:'#e84daf',id:uuid()}
]
export function getRandomInt(min:number, max:number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
export const colors = ['#525FE1','#F86F03','#FFA41B','#43C0AC','#A93199','#FA0559'];