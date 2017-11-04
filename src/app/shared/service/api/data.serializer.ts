import {Project} from "../../model/project";
import {ResponseData} from "../../model/response-data";
import {Classifier} from "../../model/classifier";

export abstract class DataSerializer{
  abstract serializeData(src: Object): Project;
  abstract deserializeData(project: Project): Object;
  abstract serializeResponseData(src: Object): ResponseData;
  abstract serializeClassifier(src: Object): Classifier;
  abstract deserializeClassifier(classifier: Classifier): Object;
}
