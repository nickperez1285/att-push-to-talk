import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';

@Component({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {

  loaded:any
  activation_code:any
  constructor(private navController: NavController) {

    this.loaded = false
    this.activation_code = '6243995'

  }
  
  populateCalleeMDN(sel){

    let calledMDN = [];
    let nSelected = 0;
    for(var i=0;i<sel.options.length;i++)
    {
        if(sel.options[i].selected)
        {
            calledMDN[nSelected] = sel.options[i].value;
            nSelected++;
        }
    }
    window.frames['ptt'].setCalledParty(calledMDN);
  }


}
