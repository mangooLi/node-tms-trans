import { Component, OnInit } from '@angular/core';
import {DataService} from '../../service/data.service';
import {CommonService} from '../../service/common.service';

declare var echarts:any;
declare var $:any;
declare var bootbox:any;
@Component({
  selector: 'app-tms-cargo',
  templateUrl: './tms-cargo.component.html',
  styleUrls: ['./tms-cargo.component.css']
})
export class componentName implements OnInit