



export class GameEngine{
    public data: any[];
    public nrQuestions: number;
    private rndData:any[]
    
    constructor(data:any[], questions:number){
        this.data =data;
        this.nrQuestions = questions;
        this.rndData =[]
    }

    public demo(){
        return "to dziala"
    }
    private random( qty:number ):number[]{
        let tmp: number[] = []
        let indexArray = Array(this.data.length).fill(null).map((val,ind)=> ind)
        indexArray.sort((a,b)=> Math.random()-0.5)
        return indexArray.slice(0,qty);
    }
    public getRandomQuestions(){
        let ind: number[] = this.random(this.nrQuestions);
        this.rndData =this.data.filter((val, i) => ind.includes(i))
        return this.rndData.map((val)=> val.name.common)
    }
    
}