import { Component, OnInit, Input } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})

export class BannerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('.banner').owlCarousel({
      loop:true,
      margin:0, 
      nav:false,
      dots:false,   
      autoplay:true,
      navText: ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],    
      responsive:{
          0:{
              items:1,
              
          },
          600:{
              items:1,
              
          },
          1000:{
              items:1,
          }
      }
      })
      $('.owl2').owlCarousel({
      loop:true,
      margin:0, 
      nav:true,   
      autoplay:true,
      navText: ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],    
      responsive:{
          0:{
              items:1,
              
          },
          600:{
              items:1,
              
          },
          1000:{
              items:1,
          }
      }
      });

  }

}
