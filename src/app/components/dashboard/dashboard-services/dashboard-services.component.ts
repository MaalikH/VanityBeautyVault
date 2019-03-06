import { Component, OnInit } from '@angular/core';
import {DataService} from '../../../services/data-service/data.service';
import {DashboardService} from '../services/dashboard.service';
import {Service} from '../../../models/service.model';
import _ from 'lodash';

@Component({
  selector: 'app-dashboard-services',
  templateUrl: './dashboard-services.component.html',
  styleUrls: ['./dashboard-services.component.scss']
})
export class DashboardServicesComponent implements OnInit {

  services: Service[];
  filteredServices: Service[];
  serviceEdit = false;
  servicePriceEdit = false;

  constructor(private dataService: DataService, private dashboardService: DashboardService) { }

  ngOnInit() {
    this.dataService.getServicesPageInfo().subscribe((data: Service[]) => {
      this.services = data;
      this.filteredServices = data;
    });
    this.dashboardService.editPressedObservable.subscribe(() => {
      this.dataService.updateServices('services', this.services);
      this.serviceEdit = false;
    });
  }

  filterServices(category: string) {
    this.filteredServices = _.filter(this.services, {'serviceType': category});
  }

  toggleServiceEdit() {
    this.serviceEdit = !this.serviceEdit;
    this.dashboardService.pageEdited(true);
  }

  toggleServicePriceEdit() {
    this.servicePriceEdit = !this.servicePriceEdit;
    this.dashboardService.pageEdited(true);
  }

}
