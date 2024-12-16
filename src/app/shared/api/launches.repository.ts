import { Injectable } from '@angular/core';
import { NULL_LAUNCH, LaunchDto } from '@models/launch.dto';
import { LAUNCHES } from '../data/launches.data';

@Injectable({
  providedIn: 'root',
})
export class LaunchesRepository {
  public getAll = (): LaunchDto[] => LAUNCHES;
  public getById = (id: string): LaunchDto =>
    LAUNCHES.find((launch) => launch.id === id) || NULL_LAUNCH;
}
