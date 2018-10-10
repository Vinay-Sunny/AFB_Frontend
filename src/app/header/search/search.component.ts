import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../../service/service.service';
import { Tile } from '../../models/tile';
import { AuthGaurd } from '../../service/auth-gaurd.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

export class SearchComponent implements OnInit, AfterViewInit{

  firstname: string;
  surname: string;
  mobile: number;
  email: string;
  dob: string;
  password: string;
  gender: string;

  constructor(private router:Router, private service: ServiceService,private auth: AuthGaurd){}

  p: Number = 1;
  tiles=[];
  success=false;
  filteredName;
  resultData;

  logout(){
    // let tocken = localStorage.removeItem('isLogin');
    // if(tocken){
    //   this.router.navigate(['login']);
    // }
    localStorage.removeItem("isLogin");
    localStorage.removeItem("name");
    this.router.navigate(['login']);
  }

 
  userData(){
    this.service.getUsers().subscribe((response :any) => {
        this.success= true;
        let a = response.user;
        this.tiles = a;
        this.resultData = a;
        // this.tiles = response.user;  
    });

  }
  
  ngOnInit(){
    this.userData(); 
    }  

  ngAfterViewInit(){
      
  }

  onSearch(searchData){
    let filterData = Object.assign([],this.resultData);
    this.tiles = this.search(filterData, this.filteredName, 'firstname', 'surname');
    
  }

  search(value: any, filterString: string, propName: string, propName2: string): any {
    
    if(!value) return [];

    if(!filterString) return value;
    
    filterString = filterString.toLowerCase();

    return value.filter( it => {
      return it[propName].toLowerCase().includes(filterString) || it[propName2].toLowerCase().includes(filterString);
    });
  

}

sorted(value: any, fname: any): any {
  return value.sort((a, b) => {
    if(a[fname] > b[fname]){
      return -1;
    }
    else{
      return 1;
    }
  });

}





}

