import { Observable } from 'rxjs';
export declare class VgControlsHiddenService {
    isHidden: Observable<boolean>;
    private isHiddenSubject;
    constructor();
    state(hidden: boolean): void;
}
