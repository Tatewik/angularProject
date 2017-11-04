import {DataSerializer} from "./api/data.serializer";
import {Project} from "../model/project";

import {Injectable} from "@angular/core";
import {ResponseData} from "../model/response-data";
import {Classifier} from "../model/classifier";

@Injectable()
export class DataSerializerImpl implements DataSerializer {


  serializeClassifier(src: Object): Classifier {
    let classifier  = new Classifier();
    classifier.name = src["name"];
    classifier.id = src ["id"];
    return classifier;
  }

  deserializeClassifier(classifier: Classifier): Object {
    let object = {
      "id": classifier.id,
      "name": classifier.name
    }

    return object;
  }
  deserializeData(project: Project): Object {
    return undefined;
  }

  serializeData(src: Object): Project {
    let project = new Project();
    project.id = src["id"];
    project.code = src["code"];
    project.title = src["title"];
    project.description = src["description"];
    project.implementationStatusId = src["implementationStatusId"];
    project.startDate = new Date(src["startDate"]);
    project.endDate = new Date(src["endDate"]);
    return project;
  }

  serializeResponseData(src: Object): ResponseData{
    let responseData = new ResponseData();
    responseData.id = src["id"];
    responseData.message = src["message"];
    responseData.success = src["success"];
    return responseData;
  }

}
