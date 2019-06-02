import { Component, OnInit } from '@angular/core';
import { HTTP } from '@ionic-native/http/ngx';
import { Platform } from '@ionic/angular';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  input: string;
  listIndividual = [];
  listCorporate = [];
  constructor(private http: HTTP, private platform: Platform) { }

  ngOnInit() {
    this.platform.ready().then(() => {
      this.search();
    });
  }

  search() {
    this.http.get(`http://www.mocky.io/v2/5cf0ac7f3000004b0000b9e1`, {}, {}).then(res => {
      this.listIndividual = JSON.parse(res.data).results.filter(val => val.type === '01');
      this.listCorporate = JSON.parse(res.data).results.filter(val => val.type === '02');
    }).catch(err => {
      console.error(err);
    });

  }
}
