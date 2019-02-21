import { Observable } from 'rxjs';
import { ActivatedRouteSnapshot, RouterStateSnapshot, CanDeactivate } from '@angular/router';


export interface CanDeactivateGuard {
    canDeactivate(): Observable<boolean> | Promise<boolean> | boolean;
}


export class CanDeactivateService implements CanDeactivate<CanDeactivateGuard> {
    canDeactivate(component: CanDeactivateGuard, currentroute: ActivatedRouteSnapshot,
        currentState: RouterStateSnapshot, nextState?: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        return component.canDeactivate();
    }
}
