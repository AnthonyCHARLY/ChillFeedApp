import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-week-feed-sport-planning',
  templateUrl: './week-feed-sport-planning.component.html',
  styleUrls: ['./week-feed-sport-planning.component.scss']
})
export class WeekFeedSportPlanningComponent implements OnInit {

  checkboxesBreakfast = [
    {
      id: 'B1',
      isChecked: true
    },
    {
      id: 'B2',
      isChecked: true
    },
    {
      id: 'B3',
      isChecked: true
    },
    {
      id: 'B4',
      isChecked: true
    },
    {
      id: 'B5',
      isChecked: true
    },
    {
      id: 'B6',
      isChecked: true
    },
    {
      id: 'B7',
      isChecked: true
    }
  ]
  checkboxesLunch = [
    {
      id: 'L1',
      isChecked: true
    },
    {
      id: 'L2',
      isChecked: true
    },
    {
      id: 'L3',
      isChecked: true
    },
    {
      id: 'L4',
      isChecked: true
    },
    {
      id: 'L5',
      isChecked: true
    },
    {
      id: 'L6',
      isChecked: true
    },
    {
      id: 'L7',
      isChecked: true
    }
  ]
  checkboxesDinner = [
    {
      id: 'D1',
      isChecked: true
    },
    {
      id: 'D2',
      isChecked: true
    },
    {
      id: 'D3',
      isChecked: true
    },
    {
      id: 'D4',
      isChecked: true
    },
    {
      id: 'D5',
      isChecked: true
    },
    {
      id: 'D6',
      isChecked: true
    },
    {
      id: 'D7',
      isChecked: true
    }
  ]

  checkboxesMorning = [
    {
      id: 'M1',
      isChecked: false
    },
    {
      id: 'M2',
      isChecked: false
    },
    {
      id: 'M3',
      isChecked: false
    },
    {
      id: 'M4',
      isChecked: false
    },
    {
      id: 'M5',
      isChecked: false
    },
    {
      id: 'M6',
      isChecked: false
    },
    {
      id: 'M7',
      isChecked: false
    }
  ]
  checkboxesAfternoon = [
    {
      id: 'A1',
      isChecked: false
    },
    {
      id: 'A2',
      isChecked: false
    },
    {
      id: 'A3',
      isChecked: false
    },
    {
      id: 'A4',
      isChecked: false
    },
    {
      id: 'A5',
      isChecked: false
    },
    {
      id: 'A6',
      isChecked: false
    },
    {
      id: 'A7',
      isChecked: false
    }
  ]
  checkboxesEvening = [
    {
      id: 'E1',
      isChecked: false
    },
    {
      id: 'E2',
      isChecked: false
    },
    {
      id: 'E3',
      isChecked: false
    },
    {
      id: 'E4',
      isChecked: false
    },
    {
      id: 'E5',
      isChecked: false
    },
    {
      id: 'E6',
      isChecked: false
    },
    {
      id: 'E7',
      isChecked: false
    }
  ]

  checkboxesFeed = [this.checkboxesBreakfast,this.checkboxesLunch,this.checkboxesDinner]

  checkboxesSport = [this.checkboxesMorning,this.checkboxesAfternoon,this.checkboxesEvening]



  constructor() { }



  ngOnInit(): void {
  }

  changeSelection(item: any) {
    console.log(item.isChecked);
  }

  calculate_needs(){
     console.log(this.checkboxesFeed, this.checkboxesSport);
  }

}
