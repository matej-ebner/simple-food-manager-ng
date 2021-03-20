import { Component } from "@angular/core";
import { ErrorsService } from "src/app/services/errors.service";
import { Dictionary } from "src/app/enums/dictionary.enum";

@Component({
  selector: "sfm-error",
  templateUrl: "./error.component.html",
  styleUrls: ["./error.component.scss"],
})
export class ErrorComponent {
  dictionary = Dictionary;

  constructor(public errorsService: ErrorsService) {}
}
