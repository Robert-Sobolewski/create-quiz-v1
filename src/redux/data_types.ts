
// data types
export enum DataState{'idle','pending','rejected','fulfilled'}

export interface IState{
    state: DataState,
    value:[]
}

export interface IRootState{
    data:{
        state: DataState,
        value:[]
    }
}

// game types
export enum GameCategory{flag,country,capital,region, subregion}
export interface IGameSettings{
    flag: boolean,
    country: boolean,
    capital: boolean,
    region: boolean,
    subregion: boolean,
}

export interface IGameState{
    score: number,
    numQuestions: number,
    qCategory: GameCategory,
    aCategory: GameCategory

}
export interface GameState{
    game:{
        score:number,
        numQuestions: number,
        qCategory: GameCategory,
        aCategory: GameCategory

    }
}

