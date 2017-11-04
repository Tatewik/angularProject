import {Component, Input, OnChanges, OnInit, SimpleChanges} from "@angular/core";


@Component({
  selector: 'project-form-duration-app',
  templateUrl: './project-form-duration.component.html',
  styleUrls: [
    '../../app.component.css'
  ]
})
export class ProjectFormDurationComponent{

  private _startDate: Date;
  private _endDate: Date;

  private duration: number;

  getDate(dateString : any): Date {
    /*let parts = dateString.split('-')

    return new Date(parts[2],parts[0]-1,parts[1]);*/
    return new Date(dateString);
  }

  get endDate(): Date {
    return this._endDate;
  }

  @Input() set endDate(value: Date) {
    this._endDate = this.getDate(value);
  }
  get startDate(): Date {
    return this._startDate;
  }

  @Input() set startDate(value: Date) {
    if(value != null){
      this._startDate = this.getDate(value);
    }
  }

  timeDiff(): void{

    if(!this._startDate || !this._endDate){
      return;
    }
    console.log(this._startDate);
    const diff = Math.abs(this.endDate.getTime() - this.startDate.getTime());
    this.duration = Math.ceil(diff / (1000 * 3600 * 24));
  }





}
