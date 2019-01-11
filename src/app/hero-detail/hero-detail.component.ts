import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Hero }         from '../hero';
import { HeroService }  from '../hero.service';


/*declare var libGlobal: any;
import * from "shelljs";*/
//var shelljs = require ("shelljs");
//import {shell} from '/home/sam/Angular-Roboy-Skill-Machine/node_modules/shelljs/shell.js'
//import {ROSLIB} from '/home/sam/Angular-Roboy-Skill-Machine/node_modules/eventemitter2/lib/eventemitter2.js'
/*import {ROSLIB} from '/home/sam/Angular-Roboy-Skill-Machine/node_modules/roslib/build/roslib.min.js'
import {Injectable} from '@angular/core';

@Injectable({providedIn: 'root'})

*/
@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: [ './hero-detail.component.css' ]
})
export class HeroDetailComponent implements OnInit {
  @Input() hero: Hero;

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getHero();
  }

  getHero(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero);
  }

  goBack(): void {
    this.location.back();
  }

 save(): void {
    this.heroService.updateHero(this.hero)
      .subscribe(() => this.goBack());
  }

  runSkill(): void{

//shell.exec('source ~/catkin_ws/devel/setup.bash');
//shell.exec('rosservice call /roboy/cognition/face/emotion "emotion: 'shy'"'); 
    
      // Connecting to ROS
  // -----------------


  var ros = new ROSLIB.Ros({
    url : 'ws://127.0.0.1:11311'
  });

  ros.on('connection', function() {
    console.log('Connected to websocket server.');
  });

  ros.on('error', function(error) {
    console.log('Error connecting to websocket server: ', error);
  });

  ros.on('close', function() {
    console.log('Connection to websocket server closed.');
  });


 // Calling a service
  // -----------------

  var SkillMachineClient = new ROSLIB.Service({
    ros : ros,
    name : '/start_skill',
    serviceType : 'roboy_skill_machine/StartSkill'
  });

  var request = new ROSLIB.ServiceRequest({
    package : 'roboy_skill_machine',
    executable : 'nod.py',
    node_name : 'nod',
    continuous : 'false'
  });

  SkillMachineClient.callService(request, function(result) {
    console.log('Result for service call on '
      + SkillMachineClient.name
      + ': '
      + result.sum);
  });
}

}