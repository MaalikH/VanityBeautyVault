import {AfterViewInit, Component, OnInit} from '@angular/core';
import {ServicesModel} from '../models/services.model';
import _ from 'lodash';
import {ServicesPageService} from './services-page.service';
import '../../sparkley';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-services-page',
  templateUrl: './services-page.component.html',
  styleUrls: ['./services-page.component.scss', '../app.component.scss']
})
export class ServicesPageComponent implements OnInit {

  constructor(private servicesPageService: ServicesPageService, private route: ActivatedRoute) {
  }

  services: ServicesModel[] = [
    {
      serviceName: 'Classic Fill',
      servicePrice: 55,
      serviceLink: 'https://www.styleseat.com/m/p/1420823/booking/service/4838196/schedule?utm_source=google&utm_campaign=client_atl_brand_extensions&utm_medium=cpc',
      serviceType: 'fill'
    },
    {
      serviceName: 'Hybrid/Volume Fill',
      servicePrice: 65,
      serviceLink: 'https://www.styleseat.com/m/p/1420823/booking/service/4838199/schedule?utm_source=google&utm_campaign=client_atl_brand_extensions&utm_medium=cpc',
      serviceType: 'fill'
    },
    {
      serviceName: 'Mega Volume Fill',
      servicePrice: 85,
      serviceLink: 'https://www.styleseat.com/m/p/1420823/booking/service/4838150/schedule?utm_source=google&utm_campaign=client_atl_brand_extensions&utm_medium=cpc',
      serviceType: 'fill'
    },
    {
      serviceName: 'Arm Wax',
      servicePrice: 25,
      serviceLink: 'https://www.styleseat.com/m/p/1420823/booking/service/4841882/schedule?utm_source=google&utm_campaign=client_atl_brand_extensions&utm_medium=cpc',
      serviceType: 'waxing'
    },
    {
      serviceName: 'Back Wax',
      servicePrice: 45,
      serviceLink: 'https://www.styleseat.com/m/p/1420823/booking/service/4841884/schedule?utm_source=google&utm_campaign=client_atl_brand_extensions&utm_medium=cpc',
      serviceType: 'waxing'
    },
    {
      serviceName: 'Brazilian Wax',
      servicePrice: 60,
      serviceLink: 'https://www.styleseat.com/m/p/1420823/booking/service/4841883/schedule?utm_source=google&utm_campaign=client_atl_brand_extensions&utm_medium=cpc',
      serviceType: 'waxing'
    },
    {
      serviceName: 'Butt Wax',
      servicePrice: 35,
      serviceLink: 'https://www.styleseat.com/m/p/1420823/booking/service/4841885/schedule?utm_source=google&utm_campaign=client_atl_brand_extensions&utm_medium=cpc',
      serviceType: 'waxing'
    },
    {
      serviceName: 'Chin Wax',
      servicePrice: 10,
      serviceLink: 'https://www.styleseat.com/m/p/1420823/booking/service/4841886/schedule?utm_source=google&utm_campaign=client_atl_brand_extensions&utm_medium=cpc',
      serviceType: 'waxing'
    },
    {
      serviceName: 'Full Body Wax',
      servicePrice: 140,
      serviceLink: 'https://www.styleseat.com/m/p/1420823/booking/service/4841887/schedule?utm_source=google&utm_campaign=client_atl_brand_extensions&utm_medium=cpc',
      serviceType: 'waxing'
    },
    {
      serviceName: 'Full Face Wax',
      servicePrice: 35,
      serviceLink: 'https://www.styleseat.com/m/p/1420823/booking/service/4841896/schedule?utm_source=google&utm_campaign=client_atl_brand_extensions&utm_medium=cpc',
      serviceType: 'waxing'
    },
    {
      serviceName: 'Full Leg Wax',
      servicePrice: 60,
      serviceLink: 'https://www.styleseat.com/m/p/1420823/booking/service/4841888/schedule?utm_source=google&utm_campaign=client_atl_brand_extensions&utm_medium=cpc',
      serviceType: 'waxing'
    },
    {
      serviceName: 'Half Leg Wax',
      servicePrice: 40,
      serviceLink: 'https://www.styleseat.com/m/p/1420823/booking/service/4841889/schedule?utm_source=google&utm_campaign=client_atl_brand_extensions&utm_medium=cpc',
      serviceType: 'waxing'
    },
    {
      serviceName: 'Lip Wax',
      servicePrice: 10,
      serviceLink: 'https://www.styleseat.com/m/p/1420823/booking/service/4841890/schedule?utm_source=google&utm_campaign=client_atl_brand_extensions&utm_medium=cpc',
      serviceType: 'waxing'
    },
    {
      serviceName: 'Mens Back Wax',
      servicePrice: 50,
      serviceLink: 'https://www.styleseat.com/m/p/1420823/booking/service/4841895/schedule?utm_source=google&utm_campaign=client_atl_brand_extensions&utm_medium=cpc',
      serviceType: 'waxing'
    },
    {
      serviceName: 'Men Brazilian Wax',
      servicePrice: 85,
      serviceLink: 'https://www.styleseat.com/m/p/1420823/booking/service/4841891/schedule?utm_source=google&utm_campaign=client_atl_brand_extensions&utm_medium=cpc',
      serviceType: 'waxing'
    },
    {
      serviceName: 'Mens Chest Wax',
      servicePrice: 45,
      serviceLink: 'https://www.styleseat.com/m/p/1420823/booking/service/4841894/schedule?utm_source=google&utm_campaign=client_atl_brand_extensions&utm_medium=cpc',
      serviceType: 'waxing'
    },
    {
      serviceName: 'Nose Wax',
      servicePrice: 20,
      serviceLink: 'hhttps://www.styleseat.com/m/p/1420823/booking/service/4841893/schedule?utm_source=google&utm_campaign=client_atl_brand_extensions&utm_medium=cpc',
      serviceType: 'waxing'
    },
    {
      serviceName: 'Stomach Wax',
      servicePrice: 30,
      serviceLink: 'https://www.styleseat.com/m/p/1420823/booking/service/4841892/schedule?utm_source=google&utm_campaign=client_atl_brand_extensions&utm_medium=cpc',
      serviceType: 'waxing'
    },
    {
      serviceName: 'Brow Wax & Tint',
      servicePrice: 30,
      serviceLink: 'https://www.styleseat.com/m/p/1420823/booking/service/4841460/schedule?utm_source=google&utm_campaign=client_atl_brand_extensions&utm_medium=cpc',
      serviceType: 'brows'
    },
    {
      serviceName: 'Eyebrow Tinting',
      servicePrice: 25,
      serviceLink: 'https://www.styleseat.com/m/p/1420823/booking/service/4841462/schedule?utm_source=google&utm_campaign=client_atl_brand_extensions&utm_medium=cpc',
      serviceType: 'brows'
    },
    {
      serviceName: 'Eyebrow: Microblading',
      servicePrice: 200,
      serviceLink: 'https://www.styleseat.com/m/p/1420823/booking/service/4838151/schedule?utm_source=google&utm_campaign=client_atl_brand_extensions&utm_medium=cpc',
      serviceType: 'brows'
    },
    {
      serviceName: 'Brow Wax',
      servicePrice: 12,
      serviceLink: 'https://www.styleseat.com/m/p/1420823/booking/service/4838151/schedule?utm_source=google&utm_campaign=client_atl_brand_extensions&utm_medium=cpc',
      serviceType: 'brows'
    },
    {
      serviceName: 'Hybrid Lash Set',
      servicePrice: 115,
      serviceLink: 'https://www.styleseat.com/m/p/1420823/booking/service/4838197/schedule?utm_source=google&utm_campaign=client_atl_brand_extensions&utm_medium=cpc',
      serviceType: 'lash'
    },
    {
      serviceName: 'Volume Lash Set',
      servicePrice: 125,
      serviceLink: 'https://www.styleseat.com/m/p/1420823/booking/service/4838198/schedule?utm_source=google&utm_campaign=client_atl_brand_extensions&utm_medium=cpc',
      serviceType: 'lash'
    },
    {
      serviceName: 'Classic Lash Set',
      servicePrice: 100,
      serviceLink: 'https://www.styleseat.com/m/p/1420823/booking/service/4838148/schedule?utm_source=google&utm_campaign=client_atl_brand_extensions&utm_medium=cpc',
      serviceType: 'lash'
    },
    {
      serviceName: 'Extreme Megavolume Set',
      servicePrice: 215,
      serviceLink: 'https://www.styleseat.com/m/p/1420823/booking/service/4838195/schedule?utm_source=google&utm_campaign=client_atl_brand_extensions&utm_medium=cpc',
      serviceType: 'lash'
    },
    {
      serviceName: 'Megavolume Set',
      servicePrice: 150,
      serviceLink: 'https://www.styleseat.com/m/p/1420823/booking/service/4838194/schedule?utm_source=google&utm_campaign=client_atl_brand_extensions&utm_medium=cpc',
      serviceType: 'lash'
    },
    {
      serviceName: 'Eyelash Extensions - Beginner Group Class - ATL',
      servicePrice: 625,
      serviceLink: 'https://www.styleseat.com/m/p/1420823/booking/service/4842297/schedule?utm_source=google&utm_campaign=client_atl_brand_extensions&utm_medium=cpc',
      serviceType: 'training'
    },
    {
      serviceName: 'Private Training Course - Classic, Hybrid, & Volume',
      servicePrice: 750,
      serviceLink: 'https://www.styleseat.com/m/p/1420823/booking/service/4840151/schedule?utm_source=google&utm_campaign=client_atl_brand_extensions&utm_medium=cpc',
      serviceType: 'training'
    },
  ];

  filteredServices: ServicesModel[] = [];
  selectedService = 'all';

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.selectedService = params.get('service');
      console.log('SELECTED SERVICE', this.selectedService);
      this.filterServices(this.selectedService);
    });
  }


  filterServices(type: string) {
    this.selectedService = type;
    if (type === 'all' || type === null) {
      this.filteredServices = this.services;
    } else {
      this.filteredServices = _.filter(this.services, {'serviceType': type});
    }
  }
}


