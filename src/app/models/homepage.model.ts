import {About} from './about.model';
import {Gallery} from './gallery.model';
import {Service} from './homePageService.model';
import {Stats} from './stats.model';
import {Subscribe} from './subscribe.model';
import {Training} from './training.model';

export interface HomePage {
  about: About;
  gallery: Gallery;
  services: Service;
  stats: Stats;
  subscribe: Subscribe;
  training: Training;
}
