import { Component, Input } from '@angular/core';
import { Job } from '../../Models/Job';
import { field } from '../../Models/Field';


@Component({
    selector: 'app-name-job',
    templateUrl: './name-job.component.html',
    styleUrl: './name-job.component.scss'
})
export class NameJobComponent {
    @Input()
    nameJob: Job = {

        field: field.QA,
        requirements: "",
        scopeOfHours: 0,
        area: "string",
        Hybrid: false

    }
    getEnumValue(fieldValue: number): string {
        return field[fieldValue];
    }
    flag: Boolean = false
    viewItems() {
        this.flag = !this.flag;
    }
}