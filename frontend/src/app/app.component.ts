import { Component } from '@angular/core';
import { ApiService } from './sevices/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'members-front';

  selectedMember = {id:0,name:""};
  members = [
    {name:"member_01",id: 1,surname:"bbb",photo:"http://www.ciclano.com/photo"},
    {name:"member_02",id: 2,surname:"aaa",photo:"http://www.ciclano.com/photo"},
    {name:"member_03",id: 3,surname:"ccc",photo:"http://www.ciclano.com/photo"}
  ]

  constructor(private api:ApiService){
    this.getMembers();
  }

  getMembers = () => {
    this.api.getAllMembers().subscribe(
      data => {
        this.members = data
      },
      error => {
        console.log("Erro",error)
      }
    )
  }

  memberClicked = (member:any) => {
    this.api.getMember(member.id).subscribe(
      data => {
        alert(data)
        this.selectedMember = data
      },
      error => {
        console.log("Erro",error)
      }
    )
  }
}
