import {ProjectSector} from "./project-sector";
import {ProjectLocation} from "./project-location";

export class Project {
  id: number;
  user: string = null;
  modifyDate: Date = null;
  code: string = null;
  title: string = null;
  description: string = null;
  implementationStatusId: number = null;
  sectors: ProjectSector[] = null;
  locations: ProjectLocation[] = null;
  startDate: Date = null;
  endDate: Date = null;
}
