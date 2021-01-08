import { Model } from '@ioc:Mongodb/Model'
import { Champion, ParticipantDetails } from 'App/Models/Match'

export interface DetailedMatchModel {
  gameId: number,
  season: number,
  blueTeam: Team,
  redTeam: Team,
  map: number,
  gamemode: number,
  date: number,
  region: string,
  time: number
}

interface Team {
  bans: Ban[],
  barons: number,
  color: string,
  dragons: number,
  inhibitors: number,
  players: ParticipantDetails[],
  result: string,
  riftHerald: number,
  teamStats: TeamStats,
  towers: number
}

export interface Ban {
  championId: number,
  pickTurn: number,
  champion: Champion<null | number, null | string>
}

export interface TeamStats {
  kills: number,
  deaths: number,
  assists: number,
  gold: number,
  dmgChamp: number,
  dmgObj: number,
  dmgTaken: number
}

export default class DetailedMatch extends Model implements DetailedMatchModel {
  public static collectionName = 'detailed_matches'

  public gameId: number
  public season: number
  public blueTeam: Team
  public redTeam: Team
  public map: number
  public gamemode: number
  public date: number
  public region: string
  public time: number
}
