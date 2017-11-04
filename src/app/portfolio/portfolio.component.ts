import {Component, Inject, OnInit} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {Project} from "../shared/model/project";
import { Response} from "@angular/http";
import {DataService} from "../shared/service/api/data.service";


@Component({
  selector: 'portfolio-app',
  templateUrl: './portfolio.component.html',
  styleUrls: [
              '../../app.component.css'
  ],

})
export class PortfolioComponent implements OnInit{

  constructor(private appRouter: Router, @Inject('DataService') private dataService: DataService){}

  redirect(id: number){
    if(id === -1){
      this.appRouter.navigate(['/new-project']);
    }
    else {
      this.appRouter.navigate(['/projects', id]);

    }
  }

  projects: Project[] = [];
  newProjects: Project[] = [];

  deleteProject(id:  number){
    this.dataService
      .deleteData(id)
      .subscribe((data) => {
      if(data.success)
        this.projects = this.projects.filter( p => p.id !== id);
      })
  }
  /*deleteProject(project: Project){
    for(let i = 0; i < this.projects.length; ++i){
      if(this.projects[i].id === project.id ){
        continue;
      }
      this.newProjects.push(this.projects[i]);
    }

    this.projects = this.newProjects;

  }

    deleteProject(id: number){
    this.dataService.deleteData(value);

  }*/
  ngOnInit(){
    this.dataService
      .getDates()
      .subscribe((projects: Project[]) => {
        this.projects = projects;
      });
  }
}


