/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
 /* tslint:disable */

import * as import0 from './unless.directive';
import * as import1 from '@angular/core/src/change_detection/change_detection';
import * as import2 from '@angular/core/src/linker/view_utils';
import * as import3 from '@angular/core/src/linker/view';
export class Wrapper_UnlessDirective {
  context:import0.UnlessDirective;
  changed:boolean;
  /*private*/ _myUnless:any;
  constructor(p0:any,p1:any) {
    this.changed = false;
    this._myUnless = import1.UNINITIALIZED;
    this.context = new import0.UnlessDirective(p0,p1);
  }
  check_myUnless(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import2.checkBinding(throwOnChange,this._myUnless,currValue))) {
      this.changed = true;
      this.context.myUnless = currValue;
      this._myUnless = currValue;
    }
  }
  detectChangesInternal(view:import3.AppView<any>,el:any,throwOnChange:boolean):boolean {
    var changed:any = this.changed;
    this.changed = false;
    return changed;
  }
}