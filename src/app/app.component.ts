import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  myArray = [
    { "id": "1" }, { "id": "2" }, { "id": "3" }, { "id": "4" }, { "id": "5" }, { "id": "6" }, { "id": "7" }, { "id": "8" }, { "id": "9" }, { "id": "10" },
    { "id": "11" }, { "id": "12" }, { "id": "13" }, { "id": "14" }, { "id": "15" }, { "id": "16" }, { "id": "17" }, { "id": "18" }, { "id": "19" }, { "id": "20" },
    { "id": "21" }, { "id": "22" }, { "id": "23" }, { "id": "24" }, { "id": "25" }, { "id": "26" }, { "id": "27" }, { "id": "28" }, { "id": "29" }, { "id": "30" },
    { "id": "31" }, { "id": "32" }, { "id": "33" }, { "id": "34" }, { "id": "35" }, { "id": "36" }, { "id": "37" }, { "id": "38" }, { "id": "39" }, { "id": "40" },
    { "id": "41" }, { "id": "42" }, { "id": "43" }, { "id": "44" }, { "id": "45" }, { "id": "46" }, { "id": "47" }, { "id": "48" }, { "id": "49" }, { "id": "50" },
    { "id": "51" }, { "id": "52" }, { "id": "53" }, { "id": "54" }, { "id": "55" }, { "id": "56" }, { "id": "57" }, { "id": "58" }, { "id": "59" }, { "id": "60" },
    { "id": "61" }, { "id": "62" }, { "id": "63" }, { "id": "64" }, { "id": "65" }, { "id": "66" }, { "id": "67" }, { "id": "68" }, { "id": "69" }, { "id": "70" },
    { "id": "71" }, { "id": "72" }, { "id": "73" }, { "id": "74" }, { "id": "75" }, { "id": "76" }, { "id": "77" }, { "id": "78" }, { "id": "79" }, { "id": "80" },
    { "id": "81" }, { "id": "82" }, { "id": "83" }, { "id": "84" }, { "id": "85" }, { "id": "86" }, { "id": "87" }, { "id": "88" }, { "id": "89" }, { "id": "90" },
    { "id": "91" }, { "id": "92" }, { "id": "93" }, { "id": "94" }, { "id": "95" }, { "id": "96" }, { "id": "97" }, { "id": "98" }, { "id": "99" }, { "id": "100" }
  ];
  
  end = 10;
  pagedData = [];

  mouseStart = 1;
  mouseEnd = 10;
  mousedData = [];
  resetScroller = false;

  ngOnInit() {
    this.getData(this.end);
    this.getMousedData(this.mouseStart, this.mouseEnd);
  }

  getData(end) {
    this.pagedData = this.myArray.slice(0,end);
  }

  getMousedData(start,end) {
    this.mousedData = this.myArray.slice((start-1), end);
  }

  scrollHandler(e) {
    this.resetScroller = false;
    if (e === 'bottom') {
      if (this.end < this.myArray.length)
      {
        this.end = this.end + 10
        this.getData(this.end);
      }
    }
  }

  reset() {
    this.end = 10;
    this.resetScroller = true;
    this.getData(this.end);
  }


  mouseUpHandler(e) {
    if (this.mouseStart !== 1) {
      this.mouseStart -= 10;
      this.mouseEnd -= 10;
      this.getMousedData(this.mouseStart, this.mouseEnd);
    }
  }

  mouseDownHandler(e) {
    if (this.mouseEnd < this.myArray.length) {
      this.mouseStart += 10;
      this.mouseEnd += 10;
      this.getMousedData(this.mouseStart, this.mouseEnd);
    }
  }
}
