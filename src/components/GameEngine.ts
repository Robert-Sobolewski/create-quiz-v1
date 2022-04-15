



export class GameEngine{
    public data: any[];
    public nrQuestions: number;
    public rndData:any[]
    public countries: string[];
    
    constructor(data:any[], questions:number){
        this.data =data;
        this.nrQuestions = questions;
        this.rndData =[]
        this.countries = [];
        this.countries = this.data.map((val)=> val.name.common)
        this.countries = Array.from(new Set(this.countries))
    }

    private random( qty:number ):number[]{
        let tmp: number[] = []
        let indexArray = Array(this.data.length).fill(null).map((val,ind)=> ind)
        indexArray.sort((a,b)=> Math.random()-0.5)
        return indexArray.slice(0,qty);
    }
    public getRandomQuestions():any[]{
        let ind: number[] = this.random(this.nrQuestions);
        this.rndData =this.data.filter((val, i) => ind.includes(i))
        
        return this.rndData//.map((val)=> val.name.common)
    }
    
    
}