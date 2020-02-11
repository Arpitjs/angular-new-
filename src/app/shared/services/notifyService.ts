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
    showError(e) {
        debugger
        if (typeof (e.error.message) === 'string') {
            this.toastr.error(e.error.message)
        }
        else if (parseInt(e.error.message.code) === 11000) {
            this.toastr.error('that name already exists.')
        }
        else if (typeof (e.error.message) === 'object') {
            this.toastr.error(e.error.message.message)
        } else {
            this.toastr.error('something went wrong')
        }
    }
}