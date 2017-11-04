import {Observable} from "rxjs/Observable";
import {Project} from "../../model/project";
import {ResponseData} from "../../model/response-data";
import {Classifier} from "../../model/classifier";
import {ProjectSector} from "../../model/project-sector";



export abstract class DataService{

  abstract getDates(): Observable<Array<Project>>;
  abstract getData(id:number): Observable<Project>;
  abstract deleteData(id: number): Observable<ResponseData>;
  abstract postData(project: Project): Observable<Array<Project>>;
  abstract getImplementationStatusesList(): Observable<Array<Classifier>>;
  abstract getSectorsList(): Observable<Array<Classifier>>;
  abstract getSector(id:number): Observable<string>;
  abstract getCountriesList(): Observable<Array<Classifier>>;
  abstract getDistrictsList(parentId: number): Observable<Array<Classifier>>;

}

