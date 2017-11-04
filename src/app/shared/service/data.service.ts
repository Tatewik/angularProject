import {Inject, Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import {Project} from "../model/project";
import 'rxjs/add/operator/map'
import {Observable} from "rxjs/Observable";
import {DataService} from "./api/data.service";
import {DataSerializer} from "./api/data.serializer";
import {ResponseData} from "../model/response-data";
import {Classifier} from "../model/classifier";


@Injectable()
export class DataServiceImpl implements DataService {


  getCountriesList(): Observable<Array<Classifier>> {
    return this.http.get(`./app/shared/mock/get-countries-response.json`)
      .map((response: Response) => {
        let countries: Classifier[] = [];
        for (let country of response.json()) {
          countries.push(this.serializer.serializeClassifier(country));
        }
        return countries;
      })
  }

  getDistrictsList(parentId: number): Observable<Array<Classifier>> {
    return this.http.get(`./app/shared/mock/get-districts-by-country-id-response.json`)
      .map((response: Response) => {
        let districts: Classifier[] = [];
        for (let district of response.json()) {
          districts.push(this.serializer.serializeClassifier(district));
        }
        return districts;
      })

  }

  getImplementationStatusesList(): Observable<Array<Classifier>> {
    return this.http.get(`./app/shared/mock/get-implementation-statuses-response.json`)
      .map((response: Response) => {
        let implStatuses: Classifier[] = [];
        for (let implStatus of response.json()) {
          implStatuses.push(this.serializer.serializeClassifier(implStatus));
        }
        return implStatuses;
      })
  }

  constructor(@Inject('DataSerializer') private serializer: DataSerializer, private http: Http) {
  }


  getSectorsList(): Observable<Array<Classifier>> {
    return this.http.get(`app/shared/mock/get-sectors-response.json`)
      .map((response: Response) => {
        let sectors: Classifier[] = [];
        for (let sector of response.json()) {
          sectors.push(this.serializer.serializeClassifier(sector));
        }
        return sectors;
      })
  }
  getSector(id:number): Observable<string> {
    return this.http.get(`app/shared/mock/get-sector-by-id-response.json`)
      .map((resp: Response) => resp.json().name)

  }


  getDates(): Observable<Array<Project>> {
    return this.http.get('app/shared/mock/get-projects-response.json')
      .map((response: Response) => {
        let projects: Project[] = [];
        for (let obj of response.json()) {
          projects.push(this.serializer.serializeData(obj));
        }
        return projects;
      })
  }

  getData(id: number): Observable<Project> {
    return this.http.get('app/shared/mock/get-project-by-id-response.json')
      .map((response: Response) => {
        return this.serializer.serializeData(response.json());
      });
  }

  deleteData(id: number): Observable<ResponseData> {
    return this.http.delete(`http://localhost:8080/projects/${id}`)
      .map((response: Response) => this.serializer.serializeResponseData(response.json()))
  }


  postData(project: Project) {
    return this.http.post('http://localhost:8080/projects', project)
      .map((response: Response) => {
        let projects: Project[] = [];
        for (let project of response.json()) {
          projects.push(this.serializer.serializeData(project));
        }
        return projects;
      })
  }

}

