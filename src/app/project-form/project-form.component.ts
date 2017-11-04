import {Component, Inject} from "@angular/core";
import {ActivatedRoute, Params, Router} from "@angular/router";

import {Project} from "../shared/model/project";
import {DataService} from "../shared/service/api/data.service";
import {Classifier} from "../shared/model/classifier";
import {ProjectSector} from "../shared/model/project-sector";


@Component({
  selector: 'project-form-app',
  templateUrl: './project-form.component.html',
  styleUrls: [
              '../../app.component.css'
              ]
})
export class ProjectFormComponent{




  project: Project = new Project();

  projects: Project[] = [];

  implementationStatusesList: Classifier[] = [];

  sectorsList: Classifier [] = [];

  sectors: ProjectSector[] = [];

  countriesList: Classifier [] = [];

  districtsList: Classifier [] = [];



  constructor(private appRouter: Router, private route: ActivatedRoute, @Inject('DataService') private dataService: DataService){
  }

  redirect(){
    this.appRouter.navigate(['/projects']);
  }

  ngOnInit(){
    this.route.params.subscribe(params => {
      if (+params['_id']) {
        this.dataService.getData(+params['_id']).subscribe(
          data => this.project = data

        )
      } else {
        this.project = new Project();
      }
    });



    //SectorsListGET
    this.dataService.getSectorsList().subscribe(
      data => this.sectorsList = data
    );

    //ImplementationStatusesGET

    this.dataService.getImplementationStatusesList().subscribe(
      data => this.implementationStatusesList = data
    );



  }


  addLocation(){

    //CountriesListGET
    this.dataService.getCountriesList().subscribe(
      data => this.countriesList = data
    )

    //DistrictsListGET
    this.dataService.getDistrictsList().subscribe(
      data => this.districtsList = data
    )

  }

  addSector(percent: number, id: number) {
    let data = new ProjectSector();
    let classifier = new Classifier();
    classifier.id  = id;
    this.dataService.getSector(id).subscribe(
      data => classifier.name = data
    )
    data.percent = percent;
    data.sector = classifier;
    console.log(data);
    if(! this.project.sectors){
      this.project.sectors = [];
    }

    this.project.sectors.push(data);
  }

/*  addProject(){
    this.dataService
      .postProject(this.project)
      .subscribe((project: Project) => {
        this.projects.push(project)
      });
  }
  saveAndClose(){
    this.addProject();
    this.redirect();

  }
  save(){
    this.addProject();
  }*/
}
