export type Team = 'red' | 'blue';

export interface TurnData {
    team: Team;
    currentClue: string;
    clueNumber: number;
    correctCardsClicked: number;
    turnEnded: boolean;
}

export interface RoomDetails {
    gameLog: any[];
    users: any[];
    spectators: TeamMember[];
    teamRed: TeamMember[];
    teamBlue: TeamMember[];
    gameStarted: boolean;
    gameGrid?: GameCard[];
    currentTurn?: Team;
    currentTurnData?: TurnData | null;
    teamRedPoints?: number;
    teamBluePoints?: number;
}


export interface TeamMember {
    nickname: string;
    id: string;
    role: 'spectator' | 'operator' | 'spymaster';
}

export interface GameCard {
    image: string;
    type: 'red' | 'blue' | 'neutral' | 'assassin';
    revealed: boolean;
}

export interface UserDetails {
    teamColor: 'red' | 'blue' | 'spectator';
    role: 'spymaster' | 'operator' | null;
}