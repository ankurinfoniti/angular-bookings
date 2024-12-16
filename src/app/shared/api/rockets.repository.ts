import { Injectable } from '@angular/core';
import { NULL_ROCKET, RocketDto } from '@models/rocket.dto';
import { ROCKETS } from '../data/rockets.data';

@Injectable({
  providedIn: 'root',
})
export class RocketsRepository {
  public getAll = (): RocketDto[] => ROCKETS;
  public getById = (id: string): RocketDto =>
    ROCKETS.find((rocket) => rocket.id === id) || NULL_ROCKET;
}
