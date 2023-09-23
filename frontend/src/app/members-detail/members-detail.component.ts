import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-members-detail',
  templateUrl: './members-detail.component.html',
  styleUrls: ['./members-detail.component.css']
})
export class MembersDetailComponent {

  constructor(private route:ActivatedRoute){}

  ngOnInit(){
    this.loadMembers()
  }

  loadMembers(){
    const id = this.route.snapshot.paramMap.get("id")
    console.log(id)
  }

}
