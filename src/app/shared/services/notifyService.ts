import { Injectable } from "@angular/core";
import { ToastrService } from 'ngx-toastr';

@Injectable()

export class NotifyService {
    constructor(public toastr: ToastrService) {

    }

    showSuccess(str: string) {
        this.toastr.info(str)
    }
    showInfo(str: string) {
        this.toastr.success(str)
    }
    showWarning(str: string) {
        this.toastr.warning(str)
    }
    showError(error) {
    }
}